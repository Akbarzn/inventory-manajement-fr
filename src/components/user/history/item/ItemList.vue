<template>
    <div class="item-list">
        <h2>Daftar Barang</h2>

        <div class="table-responsive">
        <table>
        <thead>
        <tr>
            <th>Kode Barang</th>
            <th>Nama Barang</th>
            <th>Deskripsi</th>
            <th>Deskripsi</th>
            <th>Stock</th>
            <th class="action-column">Aksi</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in filteredItems" :key="item.kode">
            <td>{{ item.kode }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.deskripsi }}</td>
            <td>{{ item.stock }}</td>
            <td class="action-btn">
            <button class="borrow-btn" @click="borrowItem(item)" >
            <!-- <button class="borrow-btn" @click="borrowItem(item)" :disabled="item.stock === 0"> -->
            Pinjam
            </button>
            </td>
        </tr>
        </tbody>
        </table>
        </div>
        <Modal :show="showForm" @close="cancelBorrowForm">
        <ItemForm
        :item="selectedItem"
        @submit="handleBorrow"
        @cancel="cancelBorrowForm"
        />
        </Modal>
    </div>
</template>

<script>
// import ItemForm from './ItemForm.vue';
import ItemForm from "@/components/user/item/ItemForm.vue";
import Modal from '@/components/Modal.vue';
import { EventBus } from '@/utils/EventBus'
  
export default {
        name:'ItemList',
        components:{
            ItemForm,
            Modal
        },
        data(){
            return{
                items:[
                    {
                        kode:'HP001',
                        nama:'Hp Vivo y210',
                        deskripsi:'ini Hp vivo terbaru',
                        stock:10
                    },
                    {
                        kode:'HP002',
                        nama:'Hp Lenovo A2',
                        deskripsi:'ini Hp Lenovo terbaru',
                        stock:10
                    },
                    {
                        kode:'HP003',
                        nama:'Hp Samsung s4',
                        deskripsi:'ini Hp Samsung terbaru',
                        stock:10
                    },
                ],
                showForm:false,
                selectedItem:null,
                searchQuery:''
            }
        },
        methods:{
            borrowItem(item){
                this.selectedItem = {...item}
                this.showForm = true
            },
            handleBorrow(item){
                console.log('Borrow Item: ',item)
                // implementasikan logika peminjaman barang disini
                this.showForm = false
            },
            cancelBorrowForm(){
                this.showForm = false
                this.selectedItem = null
            },
            handleSearch(query){
             this.searchQuery = query   
            }
        },
        mounted(){
            EventBus.on('search',this.handleSearch)
        },
        beforeUnmount(){
            EventBus.off('search',this.handleSearch)
        },
        computed:{
            filteredItems(){
                if(this.searchQuery){
                    return this.items.filter((item) => 
                    item.nama.toLowerCase().includes(this.searchQuery.toLowerCase())
                )
                    }
                    return this.items;
                }
            }
    }
</script>

<style scope>
.item-list{
    padding: 16px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 8px 0;
}

table{
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

th,td{
    border: 1px solid #ddd;
    padding: 12px 15px;
    text-align: center;
}

th{
    background-color: #4b3f6b;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.table-responsive{
    width: 100%;
    overflow-x:auto;
}

tr:nth-child(even){
    background-color: #f2f2f2;
}

tr:hover{
    background-color: #ddd;
}

.action-column{
    width: 100px;
    text-align: center;
}

button{
    padding: 8px 12px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;
    margin: 0 2px;
}

.borrow-btn{
    background-color: #754bc5;
    color:white;
}

.borrow-btn:hover{
    background-color: #5a37a0;
}

@media(max-width:600px){
    th,td{
        padding: 8px 10px;
    }
    .action-column{
        flex-direction: column;
        align-items: stretch;
    }
}


</style>

