<template>
  <div class="admin-view">
    <div v-if="currentComponent === 'users'">
      <div class="component-container">
        <UserList
          @add-user="handleAddUser"
          @edit-user="handleEditUser"
          @delete-user-success="handleDeleteUserSuccess"
        />
      </div>
    </div>

    <div v-if="currentComponent === 'items'">
      <div class="component-container">
        <ItemForm 
          v-if="showItemForm"
          :edit-item="selectedItem"
          @save-item="$emit('save-item', $event)"
          @cancel="$emit('update:show-item-form', false)"
        />
        <ItemList 
          :items="items"
          @edit-item="handleEditItem"
          @delete-item="$emit('delete-item', $event)"
          @add-new="$emit('update:show-item-form', true)"
        />
      </div>
    </div>

    <div v-if="currentComponent === 'transactions'">
      <div class="component-container">
        <Transaction />
      </div>
    </div>
  </div>
</template>

<script>
import ItemList from '@/components/admin/item/ItemListAdmin.vue'
import ItemForm from '@/components/admin/item/ItemForm.vue'
import Transaction from '@/components/admin/transaction/TransactionList.vue'
import UserList from '@/components/admin/user/UserList.vue'  

export default {
  name: 'AdminView',
  components: {
    ItemList,
    ItemForm,
    Transaction,
    UserList  
  },
  data() {
    return {
      showUserForm: false,
      selectedUser: null,
      selectedItem:null
    }
  },
  props: {
    currentComponent: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    showItemForm: {
      type: Boolean,
      required: true
    },
    
  },
  methods: {
    handleAddUser() {
      this.showUserForm = true
      this.selectedUser = null
    },
    handleEditUser(user) {
      this.showUserForm = true
      this.selectedUser = user
    },
    handleDeleteUserSuccess(userId) {
      console.log(`User dengan ID ${userId} berhasil dihapus`)
    },
    handleEditItem(item) {
    this.selectedItem = item
    this.$emit('update:show-item-form', true)
  },
  handleDeleteItem(itemId) {
    console.log(`Item dengan ID ${itemId} berhasil dihapus`)
    
  }
  },
  emits: [
    'update:show-item-form',
    'save-item',
    'edit-item',
    'delete-item'
  ]
}
</script>

<style scoped>
.admin-view {
  width: 100%;
  /* padding: 40px; */
  /* margin: 0 auto; */
  margin-top: 60px; 
  min-height: calc(100vh - 60px);
  background-color: #f5f5f5;
  margin-left: 100px;
}

.component-container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  padding: 6px; 
  height: 100%;
}

@media (max-width: 576px) {
  .admin-view {
    margin-left: 0; 
    padding: 15px;
  }
}
</style>
