<template>
   <div class="modal modal-blur fade" :id="id" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
         <div class="modal-content">

            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

            <div class="modal-status bg-success"></div>
            <div class="modal-body text-center py-4">
               <icon-check class="icon mb-2 text-green icon-lg" />
               <h3>{{ judul }}</h3>
               <div class="text-muted">{{ deskripsi }}</div>
            </div>

            <div class="modal-footer">
               <div class="w-100">
                  <div class="row">
                     <slot name="tombol"></slot>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name: 'ModalSuccess',
      props: ['id', 'judul', 'deskripsi']
   }
</script>

<style>

</style>