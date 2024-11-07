<template>
  <div class="item-list container p-4">
    <div class="header d-flex justify-content-between align-items-center mb-3">
      <h2>Daftar Barang</h2>
      <button class="btn btn-primary" @click="showAddForm">Tambah Item</button>
    </div>
    <div class="item-cards row gap-3">
    <ItemCard 
    v-for="item in items"
    :key="item.kode"
    :item="item"
    @editItem="editItem"
    @delete-item="deleteItem" 
    class="col-md-6 col-lg-3"
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

<style scoped>
.item-list{
  background-color: white;
  border-radius: 8px;
  margin: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.header h2{
  color: #4b3f6b;
  font-size: 24px;
}

.btn-primary{
  background-color: #4b3f6b;
  color: white;
  border: none;

  &:hover{
    background-color: #2276cb;
  }
}
</style>