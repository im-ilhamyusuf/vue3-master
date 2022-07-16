<template>
   <div class="wrapper">
      <header class="navbar navbar-expand-md navbar-light d-print-none" :class="peran_warna">
         <div class="container-xl">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
               <span class="navbar-toggler-icon"></span>
            </button>
            <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
               <a href=".">
                  <img src="../assets/logo.png" width="110" height="32" alt="Tabler" class="navbar-brand-image">
               </a>
            </h1>
            <div class="navbar-nav flex-row order-md-last">
               <div class="nav-item dropdown">

                  <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
                     <span class="avatar avatar-sm" style="background-image: url('no-pp.png')"></span>
                     <div class="d-none d-xl-block ps-2">
                        <div>Ilham M. Yusuf</div>
                        <div class="mt-1 small text-muted">Admin</div>
                     </div>
                  </a>

                  <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                     <a href="#" class="dropdown-item">Profil</a>
                     <a href="#" class="dropdown-item">Logout</a>
                  </div>

               </div>
            </div>
         </div>
      </header>

      <div class="navbar-expand-md">
         <div class="collapse navbar-collapse" id="navbar-menu">
            <div class="navbar navbar-light">
               <div class="container-xl">
                  <ul class="navbar-nav">

                     <NavbarSingle nama="Dasbor" :halaman="halaman" @click="halaman = 'Dasbor'">
                        <template #icon>
                           <icon-home />
                        </template>
                     </NavbarSingle>

                     <NavbarDouble nama="Menu 2" :halaman="halaman">
                        <template #icon>
                           <icon-apps />
                        </template>

                        <template #menu>
                           <a href="#" class="dropdown-item" @click="halaman = 'Menu 2'">Menu 1</a>
                           <a href="#" class="dropdown-item" @click="halaman = 'Menu 2'">Menu 2</a>
                        </template>
                     </NavbarDouble>

                     <NavbarTriple nama="Menu 3" :halaman="halaman">
                        <template #icon>
                           <icon-apps />
                        </template>

                        <template #menu_kiri>
                           <a href="#" class="dropdown-item" @click="halaman = 'Menu 3'">Menu 1.1</a>
                           <a href="#" class="dropdown-item" @click="halaman = 'Menu 3'">Menu 2.1</a>
                        </template>

                        <template #menu_kanan>
                           <a href="#" class="dropdown-item" @click="halaman = 'Menu 3'">Menu 1.2</a>
                           <a href="#" class="dropdown-item" @click="halaman = 'Menu 3'">Menu 2.2</a>
                        </template>
                     </NavbarTriple>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import NavbarSingle from './navbar/Single.vue'
   import NavbarDouble from './navbar/Double.vue'
   import NavbarTriple from './navbar/Triple.vue'

   export default {
      name: 'Navbar',
      components: {
         NavbarSingle,
         NavbarDouble,
         NavbarTriple,
      },
      data() {
         return {
            halaman: 'Dasbor',
            peran_warna: 'bg-cyan'
         }
      }
   }
</script>

<style>

</style>