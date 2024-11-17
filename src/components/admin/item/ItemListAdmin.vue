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
        @submit="handleSubmit"
        @cancel="cancelEditForm"
      />
    </Modal>
  </div>
</template>

<script>
import { useItemStore } from "@/store/itemStore";
import ItemCard from "@/components/admin/item/ItemCard.vue";
import Modal from "@/components/Modal.vue";
import ItemForm from "@/components/admin/item/ItemForm.vue";
import { EventBus } from "@/utils/EventBus";

export default {
  components: {
    ItemCard,
    Modal,
    ItemForm,
  },

  data() {
    return {
      showForm: false,
      selectedItem: null,
      isEdit: false,
      searchQuery: "",
    };
  },

  computed: {
    items() {
      return this.itemStore.items; // Mengakses state 'items' dari store Pinia
    },

    filteredItems() {
      return this.items.filter((item) => {
        return (
          item.kode.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          item.nama.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      });
    },
  },

  methods: {
    showAddForm() {
      this.selectedItem = { kode: "", nama: "", deskripsi: "", stok: "" };
      this.isEdit = false;
      this.showForm = true;
    },

    editItem(item) {
      this.selectedItem = { ...item };
      this.isEdit = true;
      this.showForm = true;
    },

    handleSubmit(item) {
      if(this.validatedItem(item)){
        if(this.isEdit){
          console.log('Aksi addItem dipanggils');
          this.itemStore.updateItem(item)
        }
        else{
          console.log('Aksi addItem dipanggil');
          this.itemStore.addItem(item)
        }
        this.showForm = false
      }
    },
    
    validatedItem(item){
      return(
        item.kode &&
        item.nama &&
        item.deskripsi &&
        item.stock !== null &&
        !isNaN(item.stock)
      )
    },

    cancelEditForm() {
      this.showForm = false;
    },

    deleteItem(kode) {
      this.itemStore.deleteItem(kode); // Memanggil action 'deleteItem' dari store
    },

    handleSearch(query) {
      this.searchQuery = query;
    },
  },

  mounted() {
    EventBus.on("search", this.handleSearch);
  },

  beforeUnmount() {
    EventBus.off("search", this.handleSearch);
  },

  setup() {
    const itemStore = useItemStore();

    return { itemStore };
  },
};
</script>

<style scoped>
.item-list {
  background-color: white;
  border-radius: 8px;
  margin: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.header h2 {
  color: #4b3f6b;
  font-size: 24px;
}

.btn-primary {
  background-color: #4b3f6b;
  color: white;
  border: none;

  &:hover {
    background-color: #2276cb;
  }
}
</style>
