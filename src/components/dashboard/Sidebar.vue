<template>
  <aside :class="['sidebar', { 'sidebar-hidden': !isSidebarVisible, 'sidebar-small': isSidebarSmall }]">
    <!-- Menu untuk Admin -->
    <div v-if="currentRole === 'admin'" class="menu-list">
      <div 
        class="menu-item"
        :class="{ active: currentComponent === 'users' }"
        @click="$emit('show-component', 'users')"
      >
        <i class="fas fa-users"></i>
        <span>Kelola User</span>
      </div>

      <div 
        class="menu-item"
        :class="{ active: currentComponent === 'items' }"
        @click="$emit('show-component', 'items')"
      >
        <i class="fas fa-box"></i>
        <span>Kelola Barang</span>
      </div>

      <div 
        class="menu-item"
        :class="{ active: currentComponent === 'transactions' }"
        @click="$emit('show-component', 'transactions')"
      >
        <i class="fas fa-exchange-alt"></i>
        <span>Transaksi</span>
      </div>
    </div>

    <!-- Menu untuk User -->
    <div v-else class="menu-list">
      <div 
        class="menu-item"
        :class="{ active: currentComponent === 'items' }"
        @click="$emit('show-component', 'items')"
      >
        <i class="fas fa-box"></i>
        <span>Daftar Barang</span>
      </div>

      <div 
        class="menu-item"
        :class="{ active: currentComponent === 'transactions' }"
        @click="$emit('show-component', 'transactions')"
      >
        <i class="fas fa-exchange-alt"></i>
        <span>Transaksi</span>
      </div>

      <div 
        class="menu-item"
        :class="{ active: currentComponent === 'history' }"
        @click="$emit('show-component', 'history')"
      >
        <i class="fas fa-history"></i>
        <span>Riwayat</span>
      </div>
    </div>

    <div class="sidebar-toggle" @click="toggleSidebarSize">
      <i :class="isSidebarSmall ? 'fas fa-chevron-right' : 'fas fa-chevron-left'"></i>
    </div>
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
    currentComponent: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isSidebarSmall: false 
    };
  },
  methods: {
    toggleSidebarSize() {
      this.isSidebarSmall = !this.isSidebarSmall;
    }
  },
  emits: ['show-component']
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 70px; 
  left: 0;
  bottom: 0;
  width: 250px;
  background-color: #fff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, width 0.3s ease;
  z-index: 100;
  overflow: hidden; /* Prevent overflow when resizing */
}

.sidebar-hidden {
  transform: translateX(-100%);
}

.sidebar-small {
  width: 80px; 
}

.menu-list {
  padding: 1rem 0;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem; 
  color: #333;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  white-space: nowrap; /* Prevent text from wrapping */
}

.menu-item:hover {
  background-color: #f0f0f0; /* Slightly lighter hover color */
  color: #4f46e5;
}

.menu-item.active {
  background-color: #4f46e5;
  color: #fff;
}

.menu-item i {
  width: 24px; /* Increased width for better alignment */
  margin-right: 10px;
}

.sidebar-toggle {
  position: absolute;
  bottom: 20px;
  left: 10px;
  cursor: pointer;
  color: #4f46e5; /* Icon color */
  font-size: 1.5rem; /* Larger icon */
  transition: color 0.2s ease; /* Smooth color transition */
}

.sidebar-toggle:hover {
  color: #333; /* Darker color on hover */
}

@media (max-width: 768px) {
  .sidebar {
    width: 200px; /* Adjusted width for smaller screens */
  }

  .menu-item {
    padding: 0.75rem; /* Less padding on smaller screens */
  }

  .sidebar-small {
    width: 60px; /* Smaller width on mobile when collapsed */
  }
}
</style>
