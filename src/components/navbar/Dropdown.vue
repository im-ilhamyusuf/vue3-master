<template>
   <li class="nav-item dropdown" :class="halaman == nama ? 'active' : ''">
      <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
         <span class="nav-link-icon d-md-none d-lg-inline-block">
            <slot name="icon"></slot>
         </span>
         <span class="nav-link-title">
            {{ nama }}
         </span>
      </a>
      <div class="dropdown-menu">
         <slot name="menu"></slot>
      </div>
   </li>
</template>

<script>
   export default {
      name: 'NavbarDropdown',
      props: ['nama', 'halaman']
   }
</script>

<style>

</style>