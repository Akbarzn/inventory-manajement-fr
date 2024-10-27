<template>
    <div>
        <form @submit.prevent="submitForm">submitForm
        <table>
        <tr>
            <td>Kode Barang</td>
            <td>
            <input type="text" 
            v-model="form.kode"
            id="kode"
            :disabled="isEdit"
            required
            >
            </td>
        </tr>
        <tr>
            <td>Nama Barang</td>
            <td>
            <input type="text" 
            v-model="form.nama"
            id="nama"
            required
            >
            </td>
        </tr>
        <tr>
            <td>Deskripsi</td>
            <td>
            <input type="text" 
            v-model="form.deskripsi"
            id="deskripsi"
            required
            >
            </td>
        </tr>
        <tr>
            <td>Stock</td>
            <td>
            <input type="number" 
            v-model="form.stock"
            id="stock"
            required
            >
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
            <button type="submit">
            {{ isEdit ? 'Simpan Perubahan' : 'Tambah Barang' }}
            </button>
            </td>
        </tr>
        </table>
    </form>
    </div>
</template>

<script>

export default {
    name:'ItemForm',
    props:{
        item:{
            type:Object,
            default:()=>({})
        },
        isEdit:{
            type:Boolean,
            default:false
        },
    },
        data(){
            return{
                form:{
                    kode:'',
                    nama:'',
                    deskripsi:'',
                    stock:''
                }
            }
        },
        watch:{
            item:{
                immediate:true,
                handler(newItem){
                    if(this.isEdit){
                        this.form = {...newItem}
                    }else{
                        this.form = {
                            kode:'',
                            nama:'',
                            deskripsi:'',
                            stock:''
                        }
                    }
                }
            }
        },    
    methods: {
        submitForm(){
            this.$emit('submit',this.form)
        }
    },
}
</script>

<style scoped>
div {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
}

table {
    width: 100%;
    border-collapse: collapse;
}

td {
    padding: 10px;
    vertical-align: top;
}

input[type="text"],
input[type="number"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type="text"]:disabled,
input[type="number"]:disabled {
    background-color: #e9ecef;
}

button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #0056b3;
}

button:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
}
</style>
