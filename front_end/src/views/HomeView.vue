<script setup>
import { RouterLink } from 'vue-router'
import "../assets/main.css";

</script>

<template>

<div class="w-full h-auto">
    <div class="logo">
        <img class="logo" src="../assets/2.png" alt="">
    </div> 
   
    <div class="text-center">
     <RouterLink  class="btn  hover:bg-blue-700 text-white font-bold py-2 px-12 rounded" to="/login">Get Started</RouterLink>
    </div>
</div>


</template>


<style>

.logo{
    margin-left: 1%;
    width: 98%;
    margin-right: 1%;
    height: auto;
    margin-top: 35%;
}

.btn{
    background-color: #40b93c;
    border-radius: 5px;
    box-shadow: 0 0px 5px #40b93c;
}

</style>

