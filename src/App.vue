<template>
  <div id="app">
    <Header
      :current-role="currentRole"
      :is-sidebar-visible="isSidebarVisible"
      @update-role="updateRole"
      @toggle-sidebar="toggleSidebar"
      v-if="showHeader"
    />
    <div class="app-content" :class="{ noHeader: !showHeader }">
      <Sidebar
        v-if="showSidebar"
        :current-role="currentRole"
        :is-sidebar-visible="isSidebarVisible"
        @show-component="navigateTo"
      />

      <main
        class="main-content"
        :class="{ 'content-expanded': !isSidebarVisible && showSidebar }"
      >
        <router-view
          :key="$route.fullPath"
          :currentComponent="$route.params.component"
        />
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
    return {
      currentRole: this.$route.name || "admin",
      isSidebarVisible: true,
      searchTerm: "",
    };
  },
  watch: {
    "$route.name"(newRole) {
      this.currentRole = newRole;
    },
  },
  computed: {
    showHeader() {
      return !this.$route.meta.hideHeader;
    },
    showSidebar() {
      return !this.$route.meta.hideSidebar;
    },
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
      this.$router.push({ name: this.currentRole, params: { component } });
    },
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    handleSearch(newQuery) {
      console.log("Search term:", newQuery);
      if (this.currentRole === "admin") {
        console.log("Search in admin items");
      } else if (this.currentRole === "user") {
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
html,
body {
  height: 100%;

  margin: 0;

  background-color: #4b3f6b;
}

#app {
  height: 100%;

  display: flex;

  flex-direction: column;

  background-color: #4b3f6b;
}

.app-content {
  display: flex;

  flex-grow: 1;

  font-family: Avenir, Helvetica, Arial, sans-serif;

  font: 1em sans-serif;

  height: calc(100vh - 60px);

  margin-top: 60px;

  background-color: #4b3f6b;
}

.main-content {
  flex-grow: 1;

  transition: margin-left 0.3s ease;
}

.main-content.expanded {
  margin-left: 200px;
}

.app-content.noHeader {
  margin-top: 0;

  height: 100vh;
}

@media (max-width: 768px) {
  .main-content {
    margin-left: 0;

    margin-top: 180px;
  }

  .app-content.noHeader {
    margin-top: 0;

    height: calc(100vh - 60px);
  }
}
</style>
