import { defineStore } from "pinia";
import apiClient from "@/plugins/axios";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    users: [],
  }),
  actions: {
    async fetchUsers() {
      try {
        const response = await apiClient.get("/users");
        this.users = response.data;
        console.log(response);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    },
    async addUser(user) {
      try {
        const response = await apiClient.post("/users", user);
        this.users.push(response.data);
        await this.fetchUsers()
      } catch (error) {
        console.error("Failed to add user:", error);
      }
      await this.fetchUsers()
    },
    async updateUser(user) {
      console.log('update user ', user)
      try {
        const response = await apiClient.patch(`/users/${user.id}`, user);
        console.log('update respon ', response.data)
        const index = this.users.findIndex((u) => u.id === user.id);
        if (index !== -1) {
          this.users.splice(index, 1, response.data);
        } else {
          console.error("User dengan ID tersebut tidak ditemukan di state.");
        }
        await this.fetchUsers()
        alert('update berhasil',response.data)
        console.log('update berhasil',response.data)
      } catch (error) {
        console.error("Failed to update user:", error);
        console.error("Error Response:", error.message);
      }
    },
    async deleteUser(id) {
      try {
        await apiClient.delete(`/users/${id}`);
        this.users = this.users.filter((user) => user.id !== id);
      } catch (error) {
        console.error("Failed to delete user:", error);
      }
    },
  },
});
