<template>

   <!-- navbar -->
   <Navbar />

   <!-- content -->
   <div class="page-wrapper">
      <router-view />
   </div>

   <!-- footer -->
   <Footer />

</template>

<script>
   import Navbar from './components/Navbar.vue'
   import Footer from './components/Footer.vue'

   export default {
      components: {
         Navbar,
         Footer
      }
   }
</script>