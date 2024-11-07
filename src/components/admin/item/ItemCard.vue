<template>
    <div class="item-card card mb-3">
    <div class="card-body">
    <h3 class="title">{{ item.nama }}</h3>
    <p class="card-text">{{ item.deskripsi }}</p>
    <p class="stock card-text">{{ item.stock }}</p>
    <div class="button d-flex gap-2 mt-3">
        <button class="btn btn-success edit" @click="$emit('edit-item',item)">Edit</button>
        <button class="btn btn-danger delete" @click="$emit('delete-item',item.kode)">Delete</button>
    </div>
    </div>
    </div>
</template>

<script>
export default {
    name:'ItemCard',
    props:{
        item:{
            type:Object,
            required:true     
        }
    }
}   
</script>

<style scoped>
.item-card{
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    background-color: #f9f9f9;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover{
        transform: translateY(-5px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
}

.item-card .title{
    margin: 0 0 10px;
    font-size: 1.25em;
    color: #333;
}
.item-card h3{
    margin: 0 0 10px;
    font-size: 1.5em;
    color: #333;
}

.item-card p{
    margin: 5px 0;
    color: #555;
}

.item-card .card-text{
    color: #555;
    margin: 5px 0;
}
.button{
    gap: 10px;
}
button{
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    background-color: rgb(76, 134, 234);
    cursor: pointer;
    border: none;
}

button:last-child{
    margin-left: 6px;
    background-color: red;
}
</style>