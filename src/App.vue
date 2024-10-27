<template>
  <div id="app">
    <Header 
      :current-role="currentRole"
      :is-sidebar-visible="isSidebarVisible"
      @update-role="handleRoleUpdate"
      @toggle-sidebar="toggleSidebar"
    />
    
    <Sidebar 
      :current-role="currentRole"
      :is-sidebar-visible="isSidebarVisible"
      @show-component="handleComponentChange"
    />

    <main :class="{ 'content-expanded': !isSidebarVisible }">
      <AdminView 
        v-if="currentRole === 'admin'"
        :current-component="currentComponent"
        :items="items"
        :show-item-form="showItemForm"
        :selected-item="selectedItem"
        @update:show-item-form="showItemForm = $event"
        @save-item="handleSaveItem"
        @edit-item="handleEditItem"
        @delete-item="handleDeleteItem"
      />
      
      <UserView
        v-if="currentRole === 'user'"
        :current-component="currentComponent"
        :items="items"
      />
    </main>

    <Modal 
      v-if="showModal"
      :modal-content="modalContent"
      @close="closeModal"
    />
  </div>
</template>

<script>
import Header from '@/components/dashboard/Header.vue'
import Sidebar from '@/components/dashboard/Sidebar.vue'
import AdminView from '@/views/AdminView.vue'
import UserView from '@/views/UserView.vue'
import Modal from '@/components/Modal.vue'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    AdminView,
    UserView,
    Modal
  },
  data() {
    return {
      currentRole: 'user', 
      currentComponent: 'items',
      isSidebarVisible: true, 
      items: [
        {
          code: 'Hp001',
          name: 'Hp Vivo',
          description: 'Keluaran terbaru',
          stock: 10
        },
        {
          code: 'Hp002',
          name: 'Hp Lenovo',
          description: 'Keluaran Terbaru',
          stock: 25
        },
        {
          code: 'Hp003',
          name: 'Hp Samsung',
          description: 'Keluaran Terbaru',
          stock: 30
        }
      ],
      showItemForm: false,
      selectedItem: null,
      showModal: false,
      modalContent: {
        title: '',
        message: '',
        type: ''
      }
    }
  },
  methods: {
    handleRoleUpdate(role) {
      this.currentRole = role
      this.currentComponent = role === 'admin' ? 'users' : 'items'
      console.log('Role changed to:', role)
    },
    
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible
      console.log('Sidebar toggled:', this.isSidebarVisible)
    },
    
    handleComponentChange(component) {
      this.currentComponent = component
      this.showItemForm = false
      console.log('Component changed to:', component)
    },

    handleSaveItem(item) {
      const index = this.items.findIndex(i => i.code === item.code)
      if (index !== -1) {
        // Update existing item
        this.items.splice(index, 1, item)
        this.showNotification('Sukses', 'Item berhasil diperbarui', 'success')
      } else {
        // Add new item
        this.items.push(item)
        this.showNotification('Sukses', 'Item berhasil ditambahkan', 'success')
      }
      this.showItemForm = false
      this.selectedItem = null
    },

    handleEditItem(item) {
      this.selectedItem = item
      this.showItemForm = true
    },

    handleDeleteItem(code) {
      this.items = this.items.filter(item => item.code !== code)
      this.showNotification('Sukses', 'Item berhasil dihapus', 'success')
    },

    showNotification(title, message, type) {
      this.modalContent = { title, message, type }
      this.showModal = true
    },

    closeModal() {
      this.showModal = false
      this.modalContent = { title: '', message: '', type: '' }
    }
  }
}
</script>

<style scoped>
#app {
  display: flex;
}

main {
  transition: margin-right 0.3s ease;
  flex-grow: 1; 
  padding: 4px; 
  width: 100%;
}

.content-expanded {
  margin-left: 0px; 
}

.sidebar {
  width: 243px; 
}
</style>
