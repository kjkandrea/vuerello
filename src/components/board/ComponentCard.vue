<template>
  <div>
    Card
    <div>cid: {{cid}}</div>
  </div>
</template>

<script>
export default {
  computed: {
    cid() {
      return this.$route.params.cid
    }
  }
}
</script>