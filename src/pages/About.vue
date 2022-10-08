<template>
 <div>
    <navbar />
    <section class="home">

<div class="image">
    <img src="images/profile.png" alt="">
</div>

<div class="content">
    <h3>Mr. {{Name}}</h3>
    <span>"{{motto}}"</span>
    <p>{{content}}</p>
    

</div>
<div class="content">
    <p> <span>name : </span> {{mrs}} </p>
    <p> <span>age : </span> {{age}} </p>
        <p> <span>email : </span> {{email}} </p>
            <p> <span>address : </span> Nontaburi, Thailand 11140 </p>
                        </div>

                        
</section>
 </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
export default {
    components: { Navbar } ,
    data() { 
        return { 
            Name: 'Chinnapat Khemthong',
            motto: 'Nothing Happens Until Something Moves.',
            content: 'Hello, My Name Is Chinnapat Khemthong. My Nickname Is Bom. I Lived With My Family In Nonthaburi. My Family Has 4 People, Father Mother Sister And Me. My Hobby Is Listening To Music And Play Game With My Friend. My Favorite Sport Is Football.',
            mrs: 'Chinnapat Khemthong',
            age: '19',
            email: 'Chinnapat.khem@bumail.net',
            address: 'Nontaburi, Thailand 11140'


        } 
    }
    
    
}
</script>

<style>

</style>