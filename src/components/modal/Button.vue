<template>
   <a href="#" class="btn d-none d-sm-inline-block" :class="warna" data-bs-toggle="modal" :data-bs-target="target">
      <slot name="icon"></slot>
      {{ nama }}
   </a>
   <a href="#" class="btn d-sm-none btn-icon" :class="warna" data-bs-toggle="modal" :data-bs-target="target" :aria-label="nama">
      <slot name="icon"></slot>
   </a>
</template>

<script>
   export default {
      name: 'ModalButton',
      props: ['nama', 'warna', 'target']
   }
</script>

<style>

</style>