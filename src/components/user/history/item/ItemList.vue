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
        <tr v-for="item in items" :key="item.kode">
            <td>{{ item.kode }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.deskripsi }}</td>
            <td>{{ item.stock }}</td>
            <td class="action-btn">
            <button class="borrow-btn" @click="borrowItem(item)" :disabled="item.stock === 0">
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
import ItemForm from './ItemForm.vue';
import Modal from '@/components/Modal.vue';

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
                        name:'Hp Vivo y210',
                        deskripsi:'ini Hp vivo terbaru',
                        stock:10
                    },
                    {
                        kode:'HP002',
                        name:'Hp Lenovo A2',
                        deskripsi:'ini Hp Lenovo terbaru',
                        stock:10
                    },
                    {
                        kode:'HP003',
                        name:'Hp Samsung s4',
                        deskripsi:'ini Hp Samsung terbaru',
                        stock:10
                    },
                ],
                showForm:false,
                selectedItem:null
            }
        },
        methods:{
            borrowItem(item){
                this.selectedItem = {...item}
                this.showForm = true
            },
            handleBorrow(item){
                console.log('Borrow Item: ',item)
                this.showForm = false
            },
            cancelBorrowForm(){
                this.showForm = false
                this.selectedItem = null
            }
        }
    }
</script>

