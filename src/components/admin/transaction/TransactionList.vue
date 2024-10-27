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


<style lang="scss" scoped>
.transaction-list {
  max-width: 800px;
  margin: 20px auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #007acc;
    color: #ffffff;
    padding: 15px;
    font-weight: bold;

    h2 {
      margin: 0;
      font-size: 1.2rem;
    }

    .add-btn {
      background-color: #005b99;
      color: #ffffff;
      padding: 8px 15px;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #004080;
      }
    }
  }

  .table-responsive {
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      background-color: #e0e0e0;
    }

    th, td {
      padding: 10px;
      text-align: left;
      font-size: 0.9rem;
      text-align: center;
    }

    th {
      color: #333;
      font-weight: bold;
    }

    td {
      color: #666;
      border-bottom: 1px solid #ddd;
      text-align: center;
    }

    .action-buttons {
      display: flex;
      gap: 10px;

      button {
        padding: 5px 10px;
        font-size: 0.85rem;
        cursor: pointer;
        border-radius: 4px;
        border: none;
        transition: background-color 0.3s;

        &:nth-child(1) {
          background-color: #007acc;
          color: #fff;

          &:hover {
            background-color: #005b99;
          }
        }

        &:nth-child(2) {
          background-color: #cc0000;
          color: #fff;

          &:hover {
            background-color: #990000;
          }
        }
      }
    }

    tr:hover {
      background-color: #f1f1f1;
    }
  }

}
</style>