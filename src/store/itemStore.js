import { defineStore } from 'pinia'

export const useItemStore = defineStore('item', {
  state: () => ({ 
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
  }),
  getters: {
    getItemByKode:(state) =>(kode)=>{
        return state.items.find((item) => item.kode === kode)
    },
    totalItems: (state) => state.items.length,
    avalaibleItems:(state) => state.items.filter((item) => item.stock >0)
  },
  actions: {
    addItem(item){
        this.items.push(item)
    },
    updateItem(updatedItem){
        const index = this.items.findIndex((item) => item.kode === updatedItem.kode)
        if(index !== -1){
            this.items[index] = updatedItem
        }
    },
    deleteItem(kode) {
      if (this.items) {
        this.items = this.items.filter((item) => item.kode !== kode);
      } else {
        console.error("Items is undefined");
      }
    }
    
  },
  persist:true
})
