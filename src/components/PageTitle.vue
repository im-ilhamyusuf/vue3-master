<template>
   <div class="container-xl">
      <div class="page-header d-print-none">
         <div class="row align-items-center">
            <div class="col">
               <div class="page-pretitle">
                  {{ menu }}
               </div>
               <h2 class="page-title">
                  {{ halaman }}
               </h2>
            </div>

            <div class="col-auto ms-auto d-print-none">
               <div class="btn-list">
                  <slot name="tombol"></slot>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name: 'PageTitle',
      props: ['menu', 'halaman']
   }
</script>