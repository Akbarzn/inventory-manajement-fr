<template>
  <div class="">
    <form @submit.prevent="submitForm" class="mb-3">
      <h4 class="form-control-plaintext">Submit Form</h4>
      <div class="mb-3">
        <label for="kode" class="form-label">Kode Barang</label>
        <input type="text" v-model="form.kode" id="kode" :disabled="isEdit" class="form-control" required />
      </div>

      <div class="mb-3">
        <label for="nama" class="form-label">Nama Barang</label>
        <input type="text" v-model="form.nama" id="nama" class="form-control" required />
      </div>

      <div class="mb-3">
        <label for="deskripsi" class="form-label">Deskripsi</label>
        <input
          type="text"
          v-model="form.deskripsi"
          id="deskripsi"
          class="form-control"
          required
        />
      </div>

      <div class="mb-3">
        <label for="stock" class="form-label">Stock</label>
        <input
          type="number"
          v-model="form.stock"
          id="stock"
          class="form-control"
          required
        />
      </div>
      <button type="submit" class="btn btn-success text-center">
        {{ isEdit ? "Simpan Perubahan" : "Tambah Barang" }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ItemForm",
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: {
        kode: "",
        nama: "",
        deskripsi: "",
        stock: "",
      },
    };
  },
  watch: {
    item: {
      immediate: true,
      handler(newItem) {
        if (this.isEdit) {
          this.form = { ...newItem };
        } else {
          this.form = {
            kode: "",
            nama: "",
            deskripsi: "",
            stock: "",
          };
        }
      },
    },
  },
  methods: {
    submitForm() {
      this.$emit("submit", this.form);
    },
  },
};
</script>

<style scoped>
.form{
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
}

.mb-3{
    margin-bottom: 1rem;
}

.form label{
    font-weight: bold;
    color: #4b3f6b;
}

.form-control{
    border-radius: 0.25rem;
    border: 1px solid #ced4da;
}

.form-control:focus {
    border: color #4b3f6b;
    box-shadow: 0 0 0 0.2rem rgba(75,63,107,0.25);
}

.btn-success{
    background-color: #4caf50;
    border-color: #4caf50;

    &:hover{
        background-color: #45a049;
        border-color: #45a049;
    }
}
</style>