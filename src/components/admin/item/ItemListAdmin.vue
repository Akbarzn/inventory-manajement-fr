<template>
  <div class="item-list">
    <div class="header">
      <h2>Daftar Barang</h2>
      <button class="add-btn" @click="showAddForm">Tambah Item</button>
    </div>
    <div class="item-cards">
    <ItemCard 
    v-for="item in items"
    :key="item.kode"
    :item="item"
    @editItem="editItem"
    @delete-item="deleteItem" 
    />
    </div>
    <Modal :visible="showForm" @close="cancelEditForm">
    <ItemForm 
    :item="selectedItem"
    :isEdit="isEdit"
    @submit="handleSubmit" @cancel="cancelEditForm"
    />
    </Modal>
  </div>
</template>

<script>
import ItemCard from './ItemCard.vue';
import Modal from '../../Modal.vue';
import ItemForm from './ItemForm.vue';

export default {
  components:{
    ItemCard,
    Modal,
    ItemForm
  },
    data(){
        return{
            items:[
                {
                    kode: 'BRG001',
                    nama: 'Barang 1',
                    deskripsi: 'Deskripsi Barang 1',
                    stock: 10
                },
                {
                    kode:'BRG002',
                    nama: 'Barang 2',
                    deskripsi: 'Deskripsi Barang 2',
                    stock: 20
                }
            ],
            showForm:false,
            selectedItem:null,
            isEdit:false    
        }
    },
    methods:{
      showAddForm(){
        this.selectedItem = {kode:'',nama:'',deskripsi:'',stock:''}
        this.isEdit = false
        this.showForm = true
      },
      editItem(item){
        this.selectedItem = {...item}
        this.isEdit = true
        this.showForm = true
      },
      handleSubmit(item){
        if(this.isEdit){
          const index = this.items.findIndex((i)=> i.kode === item.kode)
          this.items[index] = item
        }else{
          this.items.push(item)
        }
        this.showForm = false 
      },
      cancelEditForm(){
        this.showForm = false
        this.selectedItem = null
        this.isEdit = false
      },
      deleteItem(kode){
            this.items = this.items.filter(item => item.kode !== kode);
            this.$emit('delete-item',kode)
        }
    }
};
</script>

<style lang="scss" scoped>
.item-list {
  max-width: 800px;
  margin: 20px auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #007acc;
    color: #ffffff;
    padding: 15px;
    font-weight: bold;

    h2 {
      margin: 0;
      font-size: 1.2rem;
    }

    .add-btn {
      background-color: #60a4d2;
      color: #ffffff;
      padding: 8px 15px;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #004080;
      }
    }
  }

  .table-responsive {
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      background-color: #e0e0e0;
    }

    th, td {
      padding: 10px;
      text-align: left;
      font-size: 0.9rem;
      text-align: center;
    }

    th {
      color: #333;
      font-weight: bold;
    }

    td {
      color: #666;
      border-bottom: 1px solid #ddd;
      text-align: center;
    }

    .action-buttons {
      display: flex;
      gap: 10px;

      button {
        padding: 5px 10px;
        font-size: 0.85rem;
        cursor: pointer;
        border-radius: 4px;
        border: none;
        transition: background-color 0.3s;

        &:nth-child(1) {
          background-color: #007acc;
          color: #fff;

          &:hover {
            background-color: #005b99;
          }
        }

        &:nth-child(2) {
          background-color: #cc0000;
          color: #fff;

          &:hover {
            background-color: #990000;
          }
        }
      }
    }

    tr:hover {
      background-color: #f1f1f1;
    }
  }

}
</style>
