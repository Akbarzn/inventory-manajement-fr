<template>
    <!-- <div class="contianer mt-2">
    <div class="row">
    <div class="   mb-2 "  > -->
    <div class="user-card card mb-3 py-3">
      <div class="user-info card-body ">
        <h3 class="title">{{ user.username }}</h3>
        <p class="card-text">{{ user.email }}</p>
        <p class="card-text"><strong>Role:</strong> {{ user.role }}</p>
      </div>
      <div class="user-actions button d-flex gap-2 mt-3 px-3">
        <button class="btn btn-success edit" @click="$emit('edit-user', user)">Edit</button>
        <button class="btn btn-danger delete" @click="$emit('delete-user', user.id)">Delete</button>
      </div>
    </div>
    <!-- </div>
    </div>
    </div> -->
  </template>
  
  <script>
  export default {
    props: {
      user: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .user-card{
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    border: 1px solid #ddd;
    transition: transform 0.2s, box-shadow 0.2s;
  
    &:hover{
      transform: translateY(-5px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }
  
  .user-info h3{
    margin-bottom: 5px;
  }
  
  .user-actions button{
    font-size:14px;
  }
  </style>
  