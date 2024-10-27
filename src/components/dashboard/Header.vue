<template>
  <header class="header">
    <div class="header-left">
      <!-- toogle btn sidebar -->
      <button class="menu-btn" @click="$emit('toggle-sidebar')">
        <i class="fas fa-bars"></i>
      </button>
      <h1 class="brand">Simbok</h1>
    </div>

    <!-- search Bar -->
    <div class="search-container">
      <div class="search-box">
        <i class="fas fa-search-box"></i>
        <input
          type="text"
          placeholder="Search Inventory..."
          v-model="searchQuery"
          @input="handleSearch"
          class="search-input"
        />
        <button v-if="searchQuery" @click="clearSearch" class="clear-btn">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>

    <div class="header-right">
    <!-- role  -->
    <select 
    class="role-select"
    :value="currentRole"
    @change="$emit('update-role',$event.target.value)"
    >
    <option value="user">User</option>
    <option value="admin">Admin</option>
    </select>

    <!-- profile -->
    <div class="user-profile">
    <i class="fas fa-user"></i>
    </div>
    </div>
  </header>
</template>

<script>
export default {
    name:'HeaderComponents',
    props:{
        currentRole:{
            type:String,
            Required:true
        },
        isSidebarVisible:{
            type:Boolean,
            required:true
        }
    },
    data(){
        return{
            searchQuery:'',
        }
    },
    methods:{
        handleSearch(){
            this.$emit('search',this.searchQuery)
        },
        clearSearch(){
            this.searchQuery = '';
            this.$emit('search','')
        }
    },
    emits:['update-role','toggle-sidebar','search']
};
</script>


<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #1e91cf;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  padding: 0 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 101;
}

.header-left {
  display: flex;
  align-items: center;
}

.menu-btn {
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  margin-right: 15px;
}

.brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.search-container {
  flex: 1;
  display: flex;
  justify-content: center;
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
  background-color: #ecf0f0;
  border-radius: 5px;
  padding: 0.5rem;
  width: 100%;
  max-width: 400px;
}

.search-box i {
  color: #9ca3af;
  margin-right: 10px;
}

.search-input {
  width: 100%;
  background: none;
  border: none;
  color: #ffffff;
  outline: none;
}

.clear-btn {
  background: none;
  border: none;
  color: #f0f1f4;
  cursor: pointer;
  font-size: 1rem;
}

.header-right {
  display: flex;
  align-items: center;
}

.role-select {
  background-color: #4db2e9;
  border: none;
  color: #ffffff;
  padding: 0.5rem;
  margin-right: 15px;
  border-radius: 5px;
  cursor: pointer;
}

.user-profile {
  background-color: #4db2e9;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
}

/* Responsive Styling */
@media (max-width: 768px) {
  .sidebar {
    width: 200px;
  }

  .header {
    padding: 0 10px;
  }

  .menu-item {
    padding: 0.75rem 1rem;
  }
}

</style>