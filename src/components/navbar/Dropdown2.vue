<template>
   <li class="nav-item dropdown" :class="halaman == nama ? 'active' : ''">
      <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside"
         role="button" aria-expanded="false">
         <span class="nav-link-icon d-md-none d-lg-inline-block">
            <slot name="icon"></slot>
         </span>
         <span class="nav-link-title">
            {{ nama }}
         </span>
      </a>
      <div class="dropdown-menu">
         <div class="dropdown-menu-columns">
            <div class="dropdown-menu-column">
               <slot name="menu_kiri"></slot>
            </div>
            <div class="dropdown-menu-column">
               <slot name="menu_kanan"></slot>
            </div>
         </div>
      </div>
   </li>
</template>

<script>
   export default {
      name: 'NavbarDropdown2',
      props: ['nama', 'halaman'],
   }
</script>

<style>

</style>