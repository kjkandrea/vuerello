<template>
  <modal>
    <div slot="body">
      {{ card }}
    </div>
    <div v-if="loading">Loading Card...</div>
    <div v-else>cid: {{cid}}</div>
  </modal>
</template>

<script>
import Modal from '../ScreenModal'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Modal
  },
  computed: {
    ...mapState({
      card: 'card'
    })
  },
  data() {
    return {
      cid: 0,
      loading: false
    }
  },
  created() {
    const id = this.$route.params.cid
    this.FETCH_CARD({id})
  },
  methods: {
    ...mapActions([
      'FETCH_CARD'
    ])
  }
}
</script>