<template>
    <div>
        <form @submit.prevent="submitForm">
        <h2>Peminjaman Barang</h2>
        
        <div>
        <label for="kode">Kode Barang</label>
        <input type="text" v-model="form.kode" id="kode" :disabled="true" />
        </div>
        
        <div>
        <label for="kode">Nama Produk</label>
        <input type="text" v-model="form.nama" id="nama" :disabled="true" />
        </div>

        <div>
        <label for="deskripsi">Deskripsi</label>
        <input type="text" v-model="form.deskripsi" id="deskripsi" :disabled="true">
        </div>

        <div>
        <label for="tanggal_peminjaman">Tanggal Pinjam</label>
        <input type="date" v-model="tanggal_pinjam" id="tanggal_pinjam" :disabled="true">
        </div>

        <dir>
        <label for="tanggal_kembali">Tanggal Kembali</label>
        <input type="date" v-model="tanggal_kembali" id="tanggal_kembali" :disabled="true" />
        </dir>

        <dir>
        <label for="jumlah_pinjam">Jumlah Pinjam</label>
        <input type="number" v-model="jumlah_pinjam" id="jumlah_pinjam" :disabled="true" />
        </dir>

        <div class="btn-container">
        <button type="button" @click="cancelForm">Batal</button>
        <button type="submit">Ajukan</button>
        </div>
        </form>
    </div>
</template>

<script>
    export default {
        name:'FormPeminjaman',
        props:{
            items:{
                type:Object,
                default:() => ({})
            },
            isEdit:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return{
                kode:this.items ? this.items.kode : '',
                nama:this.items ? this.items.name : '',
                deskripsi:this.items ? this.items.deskripsi : '',
                tanggal_pinjam: '',
                tanggal_kembali: '',
                jumlah_pinjam : 1
            }
        },
        methods:{
            submitForm(){
                this.$emit('submit',{...this.form})
            },
            cancelForm(){
                this.$emit('cancel')
            }
        },
        watch:{
            item(newItem){
                if(newItem){
                    this.form.kode = newItem.kode
                    this.form.name = newItem.name
                    this.form.description = newItem.description
                }
            }
        }

    }
</script>

<style scoped>
.button-container {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

button[type="submit"] {
  background-color: #4caf50;
  color: white;
}

button[type="submit"]:hover {
  background-color: #45a049;
}

button[type="button"] {
  background-color: #f44336;
  color: white;
}

button[type="button"]:hover {
  background-color: #da190b;
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
}
</style>
