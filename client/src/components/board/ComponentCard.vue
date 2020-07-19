<template>
  <modal>
    Card
    <div v-if="loading">Loading Card...</div>
    <div v-else>cid: {{cid}}</div>
  </modal>
</template>

<script>
import Modal from '../ScreenModal'

export default {
  components: {
    Modal
  },
  data() {
    return {
      cid: 0,
      loading: false
    }
  },
  watch: {
    '$route': {
      handler: 'fetchData',
      immediate: true
    }
  },
  methods: {
    fetchData() {
      this.loading = true
      setTimeout(() => {
        this.cid = this.$route.params.cid
        this.loading = false
      }, 500)
    }
  }
}
</script>