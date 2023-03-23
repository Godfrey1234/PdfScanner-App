<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <nav class="navbar  justify-between">
      <div class="navbar-logo">
        <a href="#"><img class=" h-auto -mt-2 fixed" src="../assets/2.png" alt="" style="width: 5.5rem;"></a>
      </div>
     
      <div class="navbar-toggle py-5" @click="isActive === !isActive">
        <span class="span1">Home</span>&nbsp;
        <span class="t">MyDocuments</span> &nbsp;
        <span class="span1" @click.prevent="logout">Logout</span> &nbsp;
      </div>
    </nav>
  </template>
  

<script>
    export default {
        methods:{
            async logout() {
                this.$router.push('/')
                sessionStorage.clear('token')
              
            
            }
        }
        
    }
</script>

<style>
 .navbar{
    display: flex;
    color: #f8f9f9;
    box-shadow: 1px solid black;
    background: #161d29;
    /* position: absolute; */
    width: 100%;
    top: 0;
    right: 0;
    margin-bottom: 10%;
 }

 .span1{
    font-weight:500;
    font-size: 1rem;
    color: white;
 }

 span:hover{
    color: #40b93c;
 }

 .t{
   color:  #40b93c;
 }



</style>