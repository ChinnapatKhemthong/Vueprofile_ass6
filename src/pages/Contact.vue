<template>
    <div>
       <navbar />
       <section class="Contact">
   
        <h1 class="heading"> MY <span>Contact</span> </h1>
   
   
        <div class="content">

            <div class="content">
    <h1><p> <span>Address : </span> {{address}} </p></h1>
<h1><p> <span>Email : </span> {{Email}} </p></h1>
<h1><p> <span>Number : </span> {{tel}} </p></h1>
            
                        </div>


</div>
<section class="skills">

<h1 class="heading"> <span>My</span> Social Media </h1>

<div class="box-container">
    <div class="box">
        <img src="images/icon-7.png">
        <h3>Email</h3>
    </div>
    <div class="box">
        <img src="images/icon-8.png">
        <h3>Facebook</h3>
    </div>
    <div class="box">
        <img src="images/icon-9.png">
        <h3>Line</h3>
    </div>
    <div class="box">
        <img src="images/icon-10.png">
        <h3>Address</h3>
    </div>
    
</div>

</section>
   
   </section>
    </div>
   </template>
   
   <script>
   import Navbar from '../components/Navbar.vue';
   export default {
       components: { Navbar } ,
       data() { 
        return { 
            
            address: 'Nontaburi, Thailand 11140',
            Email: 'chinnapat.khem@bumail.net',
            tel: '0875405555',


        } 
    }
    
    
}
   
   </script>
   
   <style>
   
   </style>