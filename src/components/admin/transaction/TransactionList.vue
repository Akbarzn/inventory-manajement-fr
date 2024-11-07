<template>
  <div class="transaction-list">
    <div class="header">
      <h2>Daftar Transaction</h2>
    </div>
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th>Kode Transaction</th>
            <th>Nama Karyawan</th>
            <th>Nama Barang</th>
            <th>Jumlah Pinjam</th>
            <th>Tanggal Pinjam</th>
            <th>Tanggal Kembali</th>
            <th>Status</th>
            <th class="action-column">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" :key="transaction.kode">
            <td>{{ transaction.kode }}</td>
            <td>{{ transaction.namaKaryawan }}</td>
            <td>{{ transaction.namaBarang }}</td>
            <td>{{ transaction.jumlahPinjam }}</td>
            <td>{{ transaction.tanggalPinjam }}</td>
            <td>{{ transaction.tanggalKembali }}</td>
            <td>{{ transaction.status }}</td>
            <td class="action-buttons">
              <button
                class="verif-btn"
                @click="verifikasi(transaction)"
                :disabled="transaction.status === 'Returned'"
              >
                {{ transaction.status === "Returned" ? "Returned" : "Verifikasi" }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransactionList",
  data() {
    return {
      transactions: [
        {
          kode: "BRG001",
          namaKaryawan: "Karyawan 1",
          namaBarang: "Barang 1",
          jumlahPinjam: 12,
          tanggalPinjam: "2020-01-01",
          tanggalKembali: "2020-01-15",
          status: "Not Returned",
        },
      ],
    };
  },
  methods: {
    verifikasi(transaction) {
      if (transaction.status === "Not Returned") {
        transaction.status = "Returned";
        console.log(`Transaksi ${transaction.kode} telah diverifikasi.`);
      } else {
        console.log(`Transaksi ${transaction.kode} sudah dalam status 'Returned'.`);
      }
    },
  },
};
</script>

<style scoped>

.transaction-list {

padding: 24px;

background-color: #fff;

border-radius: 8px;

box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

margin: 20px 0;

}

.header {

display: flex;

justify-content: space-between;

align-items: center;

margin-bottom: 12px;

}

h2 {

color: #4b3f6b;

font-size: 24px;

}

.table-responsive {

width: 100%;

overflow-x: auto;

}

table {

width: 100%;

border-collapse: collapse;

}

th, td {

border: 1px solid #ddd;

padding: 12px 15px;

text-align: center;

vertical-align: middle;

}

th {

background-color: #4b3f6b;

color: white;

text-transform: uppercase;

letter-spacing: 0.1em;

}

tr:nth-child(even) {

background-color: #f2f2f2;

}

tr:hover {

background-color: #ddd;

}

button {

padding: 6px 12px;

border: none;

cursor: pointer;

border-radius: 4px;

font-size: 14px;

}

.verif-btn {

background-color: #4CAF50;

color: white;

}

.verif-btn:hover {

background-color: #45a049;

}

.verif-btn[disabled] {

background-color: #ccc;

cursor: not-allowed;

}


@media (max-width: 600px) {

th, td {

padding: 8px 10px;

}

.action-buttons {

display: flex;

flex-direction: column;

align-items: stretch;

}

.action-buttons button {

margin: 5px 0;

}

}

</style>