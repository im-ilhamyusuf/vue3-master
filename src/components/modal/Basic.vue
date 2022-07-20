<template>
   <div class="modal modal-blur fade" :id="id" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" :class="ukuran" role="document">
         <div class="modal-content">
            <div class="modal-header">
               <h5 class="modal-title">{{ nama }}</h5>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
               <slot></slot>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name: 'ModalBasic',
      props: ['id', 'nama', 'ukuran']
   }
</script>

<style>

</style>