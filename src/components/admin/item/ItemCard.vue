<template>
    <div class="item-card">
    <h3>{{ item.nama }}</h3>
    <p>{{ item.deskripsi }}</p>
    <p class="stock">{{ item.stock }}</p>
    <div class="button">
        <button @click="$emit('edit-item',item)">Edit</button>
        <button @click="$emit('delete-item',item.kode)">Delete</button>
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
    margin-bottom: 16px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    text-align: start;
}

.button{
    gap: 10px;
}
button{
    color: white;
    /* align-items: stretch; */
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