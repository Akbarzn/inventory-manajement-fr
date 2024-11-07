<template>
  <aside :class="['sidebar', {'d-none': !isSidebarVisible }]">
    <a href="" class="logo">SImbok</a>
    <ul>
      <li v-if="currentRole === 'admin'">
      <a href="#" @click.prevent="showComponent('users')" class="nav-link "  >
      <i class="bi bi-house-door"></i>
      Users
      </a>
      </li>
      <li>
      <a href="#" @click.prevent="showComponent('items')" class="nav-link ">
      <i class="bi bi-box"></i>
      Items
      </a>
      </li>
      <li>
      <a href="#" @click.prevent="showComponent('transactions')" class="nav-link">
      <i class="bi bi-cash"></i>
      Transactions
      </a>
      </li>

      <li v-if="currentRole === 'user'">
      <a href="#" @click.prevent="showComponent('history')" class="nav-link">
      <i class="bi bi-clock-history"></i>
      history
      </a>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'SidebarComponent',
  props: {
    currentRole: {
      type: String,
      required: true
    },
    isSidebarVisible: {
      type: Boolean,
      required: true
    },
  },
  methods: {
    showComponent(component) {
      this.$emit('showComponent',component)
    }
  },
  emits: ['showComponent']
}
</script>

<style scoped>
.sidebar {
width: 200px;
background: #2a93d9;
color: white;
padding: 14px;
height: 100vh;
display: flex;
flex-direction: column;
position: fixed;
top: 0;
left: 0;
z-index: 999;
font-size: 18px;
font-family: sans-serif;
transition: transform 0.3s ease;
}

.sidebar.hidden {
transform: translateX(-100%);
}

.logo {
  color: white;
font-size: 24px;
margin-bottom: 30px;
font-weight: bold;
text-align: center;
}

ul {
list-style: none;
padding: 0;
margin: 0;
}

li {
margin-bottom: 20px;
text-align: center;
}

.nav-link{
  color:white;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  transition: background color 0.3s ease;

  &:hover{
    background-color:rgba(225, 225, 225, 0.1);
    text-decoration: underline;
  }
}

</style>
