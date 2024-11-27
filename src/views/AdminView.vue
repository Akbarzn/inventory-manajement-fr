<template>
  <div class="admin-view">
    <!-- <div v-if="currentComponent === 'users'">
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
   -->

   <div class="scrollable-content " :class="{ fullwidth: !isSidebarVisible }" > 
    <UserList v-if="currentComponent === 'users'"
     />
   <ItemList v-if="currentComponent === 'items'" 
   
    />
    <TransactionList v-if="currentComponent === 'transactions'" />
   </div>
   <Modal v-if="showForm" :isVisible="showForm" @close="cancelEditForm" :title="isEdit ? 'Edit' : 'Add'" >
   <ItemForm :item="selectedItem" :isEdit="isEdit" @submit="handleSubmit" />
   </Modal>
  </div>
</template>

<script>
import ItemList from '@/components/admin/item/ItemListAdmin.vue'
// import ItemForm from '@/components/admin/item/ItemForm.vue'
import TransactionList from '@/components/admin/transaction/TransactionList.vue'
import UserList from '@/components/admin/user/UserList.vue'  
// import Modal from '@/components/Modal.vue'

export default {
  name: 'AdminView',
  components: {
    ItemList,
    // ItemForm,
    TransactionList,
    UserList  ,
    // Modal
  },
  data() {
    return {
      showForm: false,
      selectedItem:null,
      isEdit:false
    }
  },
  props: {
    currentComponent: {
      type: String,
      required: true
    },
    isSidebarVisible:{
      type:Boolean,
      required:true
    }
  },
  methods: {
    showEditForm(item) {
      this.selectedItem = item
      this.isEdit = true
      this.showForm = true
    },
    showEditUserForm(user) {
      this.selectedItem = user
      this.isEdit = true
      this.showForm = true
    },
    showAddForm() {
      this.selectedItem = null
      this.isEdit = false
      this.showForm = true
    },
    handleSubmit() {
      this.selectedItem = null
      this.isEdit = false
      this.showForm = false
    
    },
    cancelEditForm() {
      this.selectedItem = null
      this.isEdit = false
      this.showForm = false
  },
}
}
</script>

<style scoped>

.admin-view {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
  }
  
  .scrollable-content {
    flex: 1;
    margin-top: 50px;
    overflow-y: auto;
    margin-left: 200px;
    padding: 20px;
    background-color: #ffffff;
    max-height: calc(100vh - 60px);
  }
  
  .scrollable-content.fullwidth{
    margin-left: 0;
  }
</style>