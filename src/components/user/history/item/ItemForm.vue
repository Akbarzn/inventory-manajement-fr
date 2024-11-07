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

        <div class="button-container">
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
                isEdit:Boolean
            }
        },
        data(){
            return{
              form:{
                kode:this.item ? this.item.kode:"",
                nama:this.item ? this.item.nama:"",
                deskripsi:this.item ? this.item.deskripsi:"",
                tanggal_pinjam: '',
                tanggal_kembali: '',
                jumlah_pinjam : 1
              }
            }
        },
        methods:{
            submitForm(){
              // emit custom event submit dgn payload data form
              this.$emit('submit',{...this.form})
            },
            cancelForm(){
              // emit custom event cancel tanpa payload
                this.$emit('cancel')
            }
        },
            // utk lakukan pemantauan perubahan data pada ItemList
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
form{
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: auto;
  background-color: aquamarine;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2{
  text-align: center;
  margin-bottom: 20px;
}

label{
  margin-top: 10px;
}

input{
  padding: 5px;
  margin-top: 5px;
}

.button-container{
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

button{
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius:4px;
&:hover{
  background-color: #45a049;
}
}

button[type="button"]{
  background-color: #f44336
}

button[type="button"]:hover{
  background-color: #e31b0c;
}
</style>