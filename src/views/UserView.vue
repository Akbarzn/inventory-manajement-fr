<template>
    <div class="user-view">
        <!-- tampilan item -->
        <div v-if="currentComponent === 'items'">
        <div class="component-container">
        <ItemList />
        </div>
        </div>

        <!-- Transaction -->
        <div v-if="currentComponent === 'transaction'">
        <div class="component-container">
        <TransactionList />
        </div>
        </div>

        <!-- Riwayat -->
        <div v-if="currentComponent === 'history'">
        <div class="component-container">
        <HistoryList />
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>


<style scoped>
.user-view {
  width: 100%;
  padding: 20px;
  margin-top: 60px; 
  margin-left: 240px; 
  min-height: calc(100vh - 60px);
  background-color: #f5f5f5;
}

.component-container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 20px;
  height: 100%;
}

@media (max-width: 576px) {
  .user-view {
    margin-left: 0; 
    padding: 15px;
  }

  .component-container {
    padding: 15px;
  }
}
</style>