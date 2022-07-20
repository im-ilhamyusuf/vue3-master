<template>
   <li class="nav-item" :class="halaman == nama ? 'active' : ''">
      <router-link :to="{name: 'dasbor'}" class="nav-link">
         <span class="nav-link-icon d-md-none d-lg-inline-block">
            <slot name="icon"></slot>
         </span>
         <span class="nav-link-title">
            {{ nama }}
         </span>
      </router-link>
   </li>
</template>

<script>
   export default {
      name: 'NavbarBasic',
      props: ['nama', 'halaman']
   }
</script>

<style>

</style>