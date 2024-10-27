<template>
  <div class="user-list">
    <div class="header">
      <h2>Daftar Pengguna</h2>
      <button class="add-btn" @click="$emit('add-user')">Tambah Pengguna</button>
    </div>
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th class="action-column"  colspan="2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td class="action-column">
              <button @click="$emit('edit-user', user)">Edit</button>
              <button @click="$emit('delete-user', user)">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, username: "budi", email: "budi@rmail.com", role: "Admin" },
        { id: 2, username: "asep", email: "asep@rmail.com", role: "Admin" },
        { id: 3, username: "andi", email: "andi@rmail.com", role: "User" },
      ],
    };
  },
  methods: {
    deleteUser(id) {
      this.users = this.users.filter((user) => user.id !== id);
      this.$emit('delete-user',id)
    },
  },
};
</script>

<style lang="scss" scoped>
.user-list {
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
      background-color: #3c8cc1;
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

    .action-column {
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
