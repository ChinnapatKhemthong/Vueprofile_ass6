<template>
    <div>
       <navbar />
       <section class="Projects">
   
        <h1 class="heading"> MY <span>PROJECTS</span> </h1>
        
        <div class="content">
    <h1>{{project}}</h1>
    <h1>{{projectname}}</h1>
    <h1>{{details}}</h1>
    <h1>{{ProjectDetails}}</h1>
    

</div>


<div class="content">
    <p style="text-align: center;"><iframe width="1280" height="720" src="https://www.youtube.com/embed/aX9RNjax4aE" title="มานคราฟระเบิดบ้านเพื่อน" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
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
            project: 'Project Name',
            details: 'Project Details',
            projectname: 'Minecraft ระเบิดบ้านเพื่อน',
            ProjectDetails: 'สำหรับคนที่เคยเล่นเกม Minecraft นั่นย่อมรู้กันดีว่า เจ้าผงสิแดง ๆ หรือ redstone เจ้าปัญหานี้ มันคือวงจรไฟฟ้าดี ๆ นี่เอง และทุก ๆ วงจรไฟฟ้าย่อมมี logistic กันทั้งนั้น อธิบายก็คือ สัญญาณเข้าออกโดยไม่มีการเปลี่ยนแปลงจะทำยังไงให้มันรับสัญญาณได้ก็คือ ต้องการให้อินพุตหนึ่งหรือทั้งสองเครื่องเปิดอยู่เพื่อให้สามารถรับสัญญาณได้และต้องใช้อินพุตทั้งสองหรือทั้งสองแบบเพื่อให้สามารถรับสัญญาณได้แล้วก็ออกมาได้ตามคลิปครับกว่าจะทำวงจรระเบิดบ้านเพื่อนได้ต้องใช้หลายขั้นตอน',
            tel: '0875405555',


        } 
    }
    
    
}
   
   </script>
   
   <style>
   
   </style>