<template>
   <input :type="type" class="form-control" :value="value" @input="updateValue($event.target.value)" :placeholder="deskripsi">
</template>

<script>
   export default {
      name: 'FormBasic',
      props: ['type', 'value', 'deskripsi'],
      methods: {
         updateValue(e) {
            this.$emit('update_value', e)
         }
      }
   }
</script>

<style>

</style>