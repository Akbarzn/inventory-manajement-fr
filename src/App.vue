<template>
  <div id="app">
    <Header
      :current-role="currentRole"
      :is-sidebar-visible="isSidebarVisible"
      @update-role="updateRole"
      @toggle-sidebar="toggleSidebar"
    />
    <div class="app-content">
      <Sidebar
        :current-role="currentRole"
        :is-sidebar-visible="isSidebarVisible"
        @show-component="navigateTo"
      />

      <main
        class="main-content"
        :class="{ 'content-expanded': !isSidebarVisible }"
      >
      <router-view :key="$route.fullPath" :currentComponent="$route.params.component" />
        <!-- <AdminView 
        v-if="currentRole === 'admin'"
        :current-component="currentComponent"
        :items="items"
        :show-item-form="showItemForm"
        :selected-item="selectedItem"
        @update:show-item-form="showItemForm = $event"
        @save-item="handleSaveItem"
        @edit-item="handleEditItem"
        @delete-item="handleDeleteItem"
      />
      
      <UserView
        v-if="currentRole === 'user'"
        :current-component="currentComponent"
        :items="items"
      /> -->
      </main>
    </div>

    <Modal v-if="showModal" :modal-content="modalContent" @close="closeModal" />
  </div>
</template>

<script>
import Header from "./components/dashboard/Header.vue";
import Sidebar from "./components/dashboard/Sidebar.vue";
import AdminView from "./views/AdminView.vue";
import UserView from "./views/UserView.vue";
import { EventBus } from "./utils/EventBus";

export default {
  components: {
    Header,
    Sidebar,
    // AdminView,
    // UserView,
    
  },
  data() {
    return{
      currentRole:this.$route.name || 'admin',
      isSidebarVisible:true,
      searchTerm:'',
      // currentComponent: "items",
    }
    // const params = new URLSearchParams(window.location.search);
    // return {
    //   currentRole: params.get("role") || "admin",
    //   currentComponent: params.get("component") || "items",
    //   isSidebarVisible: params.get("sidebar") !== "hidden",
    // };
  },
  watch:{
    '$route.name'(newRole){
      this.currentRole = newRole
    }
  },
  computed: {
    currentView() {
      return this.currentRole === "admin" ? AdminView : UserView;
    },
  },
  methods: {
    updateRole(role) {
      this.currentRole = role;
      this.navigateTo("items");
    },
    navigateTo(component) {
      this.currentComponent = component;
      this.$router.push({name:this.currentRole,params:{ component }})
      // this.updateURLParams();
    },
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
      
      // this.updateURLParams();
    },
    // updateURLParams() {
    //   const params = new URLSearchParams();
    //   params.set("role", this.currentRole);
    //   params.set("component", this.currentComponent);
    //   params.set("sidebar", this.isSidebarVisible ? "visible" : "hidden");
    //   window.history.replaceState(
    //     {},
    //     "",
    //     `${window.location.pathname}?${params}`
    //   );
    // },
    handleSearch(newQuery) {
      console.log("Search term:", newQuery);
      // Implement your search logic based on currentRole and newQuery
      if (this.currentRole === "admin") {
        // Example: Perform search in admin items
        console.log("Search in admin items");
      } else if (this.currentRole === "user") {
        // Example: Perform search in user items
        console.log("Search in user items");
      }
    },
  },
  mounted() {
    EventBus.on("search", this.handleSearch);
  },
  beforeUnmount() {
    EventBus.off("search", this.handleSearch);
  },
};
</script>

<style scoped>
.app-content {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  font: 1em sans-serif;
  height: 100vh;
  margin-top: 60px;
}
.main-content {
  flex-grow: 1;
  transition: margin-left 0.3s ease;
}
.main-content.expanded {
  margin-left: 200px;
}
@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
  }
}
</style>
