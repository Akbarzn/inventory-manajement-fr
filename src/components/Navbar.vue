<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a href="#" class="navbar-item">Simbok</a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" @click.prevent="navigateTo('User')" href="">User</a>
        <a class="navbar-item" @click.prevent="navigateTo('Item')" href="">Item</a>
        <a class="navbar-item" @click.prevent="navigateTo('Transaction')" href=""
          >Transaction</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponents",
  methods: {
    navigateTo(page) {
      this.$emit("navigate-to", page);
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: aquamarine;
  color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 1);
}

.navbar-start{
    display: flex;
    justify-content: space-between;
    gap:8px;
    flex-wrap: wrap;
}
.navbar-item{
    transition: background-color 0.3s;
    color:red;
    text-decoration: none;
    padding: 3px 8px;
    border-radius: 4px;
    cursor: pointer;
}

.navbar-item:hover{
    background-color: #333;
    color: aquamarine;
}

.navbar-menu{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}

@media (max-width:768px){
  .navbar{
    display: flex;
    flex-direction: column;
  }
    .navbar-menu{
        display: none;
        width: 100px;
        flex-direction: column;
        justify-content: center;
      }
      
      .navbar-start{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
      }
      
      .navbar-item{
      flex-direction: column;
        width: 100%;
        text-align: center;
        padding: 15px 0;
        border-bottom: 1px #ffffff;
    }
    
    .navbar-item:last-child{
        border-bottom: none;
    }
}

</style>
