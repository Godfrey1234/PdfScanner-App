<!-- eslint-disable vue/multi-word-component-names -->
<template>
 
    <div class="w-full h-auto mb-5">
     
   
       <form class="px-8 py-8 mt-4 ">

        <p class="text-white text-left text-lg font-bold">Lets <span>Start</span> <br> Scanning your <span> <br> Pdf  Documents.......!</span></p>

        <div class="mb-4">
               <label class="block text-[white]  text-sm font-bold mb-2 mt-5" for="username">
                   <i class="fi fi-sr-user"></i> &nbsp; Name
               </label>
               <input   class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" v-model="name" type="text" placeholder="Enter your name">
       </div> 
        
       <div class="mb-4">
               <label class="block text-[white]  text-sm font-bold mb-2 mt-5" for="username">
                   <i class="fi fi-sr-user"></i> &nbsp; Surname
               </label>
               <input   class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="surname" type="text" v-model="surname" placeholder="Enter your surname">
       </div>
      
       <div class="mb-4">
               <label class="block text-[white] text-sm font-bold mb-2 mt-5" for="username">
                   <i class="fi fi-sr-user"></i> &nbsp; Email
               </label>
               <input   class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" v-model="email" placeholder="Enter your email">
       </div>

       <div class="mb-4">
               <label class="block text-[white] text-sm font-bold mb-2 mt-5" for="username">
                   <i class="fi fi-sr-user"></i> &nbsp; Password
               </label>
               <input   class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" v-model="password"  placeholder="*******">
       </div>

       <div class="mb-6">
               <label class="block text-[white] text-sm font-bold mb-2 mt-5" for="username">
                   <i class="fi fi-sr-user"></i> &nbsp; Confirm
               </label>
               <input   class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirm" type="password" v-model="confirm" placeholder="********">
       </div>
      
      
   
       <div class="flex items-center justify-between">
               <button  @click.prevent="submitForm" class="btn bg-[#3fba3e] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                 Sign up
               </button>
             
               <div class="text-center">
                   <RouterLink  class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/login">Sign in</RouterLink>
              </div>
   
             </div>
       </form>
   </div>
   
</template>
     
<script>

  import axios from 'axios';
 
 

  export default {
  data() {
    return {
      name: '',
      surname: '',
      email:'',
      password:'',
      confirm:'',
    };
  },
  methods: {
    submitForm() {

      if(this.name !='' && this.surname != '' && this.email != '' && this.password != '' && this.confirm != '' ){
        if(this.password === this.confirm){
      axios.post('https://pdf-scanner-puzphkwas-godfrey1234.vercel.app/register', {
        name: this.name,
        surname: this.surame,
        email: this.email,
        password : this.password,
        confirm:this.confirm
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    }else{
      console.log('password dont match')
    }
    }else{
      console.log('fill all fields');
    

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
       width: 100%; 
       border-radius: 12px;
       box-shadow: 0 0px 65px #7f248d59;
     }
   
     span{
        color: #40b93c;
        font-weight: bold;
     }
   </style>