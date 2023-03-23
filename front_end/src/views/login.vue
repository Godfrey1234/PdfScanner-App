<!-- eslint-disable vue/multi-word-component-names -->
<template class="align-center">
 
 <div class="w-full h-auto mb-5">
    <RouterLink class="logo1"  to="/">
        <img  src="../assets/2.png" alt="">
    </RouterLink> 

    <form class="px-8 py-8 ">
     
    <div class="mb-4">
            <label class="block text-[white]  text-sm font-bold mb-2 mt-5" for="username">
                <i class="fi fi-sr-user"></i> &nbsp; Username
            </label>
            <input   class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" v-model="email" placeholder="Enter your email">
    </div>
   
    <div class="mb-4">
            <label class="block text-[white] text-sm font-bold mb-2 mt-5" for="username">
                <i class="fi fi-sr-user"></i> &nbsp; Password
            </label>
            <input   class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" v-model="password" type="password" placeholder="******">
    </div>
   
   

    <div class="flex items-center justify-between">
            <button  @click.prevent="submitForm" class="btn bg-[#3fba3e] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign In
            </button>
          
            <div class="text-center">
                <RouterLink  class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/register">Sign up</RouterLink>
           </div>

          </div>
    </form>
</div>

</template>
  
<script>

import axios from 'axios';

import 'mosha-vue-toastify/dist/style.css';
 
 

  export default {


  data() {
    return {
     
      email:'',
      password:'',
      
    };
  },
  
  methods: {
    submitForm() {

      if( this.email != '' && this.password != ''){
     
      axios.post('https://pdf-scanner-puzphkwas-godfrey1234.vercel.app/login', {
       
        email: this.email,
        password : this.password
       
      })
      .then(response => {
        console.log(response.data.token);
        
        sessionStorage.setItem('token',response.data.token)
        this.$router.push('/landing')
       
       
        
      })
      .catch(error => {
        console.log(error);
      });
  
    }else{
      console.log('invalid login details');
    

    }
    }
  }
}

</script>

<style>
  .logo1{
    margin-top: -2%;
  }

  form{
    border-radius: 12px;
    box-shadow: 0 0px 65px #7f248d59;
  }

</style>