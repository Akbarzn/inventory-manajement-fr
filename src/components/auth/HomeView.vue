<template>
  <div
    class="home-view d-flex flex-column align-items-center justify-content-center min-vh-100 bg-custom text-white">
    <div class="text-center mb-4 welcome-text">
      <h1 class="display-4 fw-bold mb-3">Welcome to Simbok</h1>
      <p class="lead mb-4">
        A powerfull platform to efficiently manage your inventory and streamline
        operations
      </p>
    </div>
    <div class="auth-container bg-light p-4 rounded shadow">
      <transition name="fade" mode="out-in">
        <component :is="activeComponent" @switch="setActiveComponent" />
      </transition>
    </div>
  </div>
</template>

<script>
import LoginView from "./LoginView.vue";
import RegisterView from "./RegisterView.vue";

export default {
  components: {
    LoginView,
    RegisterView,
  },
  data() {
    return {
      activeComponent: "LoginView",
    };
  },
  methods: {
    setActiveComponent(component) {
        console.log("Switching to component:", component);
      this.activeComponent = component;
    },
  },
};
</script>

<style scoped>
.home-view {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background-color: #0d89f6;
  min-height: 100vh;
  overflow: auto;
  padding: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.auth-container {
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
}

.welcome-text {
  margin-top: 20px;
}

@media (max-width: 768px) {
  .home-view {
    padding: 10px;
  }

  .auth-container {
    padding: 15px;
    margin-top: 10px;
  }

  .welcome-text {
    margin-top: 10px;
  }
}
</style>
