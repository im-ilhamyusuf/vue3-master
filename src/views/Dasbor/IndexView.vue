<template>
   <page-title menu="AISnet" halaman="Dasbor">
      <template #tombol>
         <modal-button nama="Tambah Peserta" target="#modalTambahPeserta" warna="bg-secondary">
            <template #icon>
               <icon-plus />
            </template>
         </modal-button>
      </template>
   </page-title>

   <div class="page-body">
      <div class="container-xl">
         <div class="row">
            <div class="col-md-4">
               <div class="card">
                  <div class="card-body">
                     
                     <form-column judul="Nama Lengkap">
                        <form-basic type="password" :value="nama" @update_value="(e)=> nama = e" deskripsi="Nama lengkap pengguna" />
                     </form-column>

                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>


   <!-- modal -->
   <modal-danger id="modalTambahPeserta" judul="Berhasil Menambahkan" deskripsi="Peserta baru berhasil ditambahkan">
      <template #tombol>
         <div class="row">
            <div class="col">
               <a href="#" class="btn w-100" data-bs-dismiss="modal">
                  Go to dashboard
               </a>
            </div>
            <div class="col">
               <a href="#" class="btn btn-danger w-100" data-bs-dismiss="modal">
                  View invoice
               </a>
            </div>
         </div>
      </template>
   </modal-danger>
</template>

<script>
   export default {
      name: 'DasborIndexView',
      data() {
         return {
            nama: '',
         }
      }
   }
</script>

<style>

</style>