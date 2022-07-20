<template>
  <div class="mb-3">
      <label class="form-label mb-2">{{ judul }}</label>
      <slot></slot>
   </div>
</template>

<script>
export default {
   name: 'FormColumn',
   props: ['judul']
}
</script>

<style>

</style>