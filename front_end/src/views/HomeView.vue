<script setup>
import { RouterLink, RouterView } from 'vue-router'
import "../assets/main.css";

</script>

<template>

<div class="w-full min-h-screen">
    <div class="logo">
        <img class="logo" src="../assets/2.png" alt="">
    </div> 
   
    <div class="text-center">
     <RouterLink  class="btn  hover:bg-blue-700 text-white font-bold py-2 px-8 rounded" to="/login">Get Started</RouterLink>
    </div>
</div>


</template>


<style>

.logo{
    margin-left: 5%;
    width: 90%;
    margin-right: 5%;
    height: auto;
    margin-top: 27%;
}

.btn{
    background-color: #3fba3e;
}

</style>

