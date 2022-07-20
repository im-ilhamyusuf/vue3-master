<template>
   <div class="dropend">
      <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown"
         data-bs-auto-close="outside" role="button" aria-expanded="false">
         {{ nama }}
      </a>
      <div class="dropdown-menu">
         <slot name="sub_menu"></slot>
      </div>
   </div>
</template>

<script>
   export default {
      name: 'NavbarSubdropdown',
      props: ['nama']
   }
</script>

<style>

</style>