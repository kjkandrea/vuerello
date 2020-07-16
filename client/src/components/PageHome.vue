<template>
  <div>
    Home
    <div>
      Board List :
      <div v-if="loading">Loading...</div>
      <div v-else>
        API result: {{apiRes}}
        <div v-if="error">{{error}}</div>
      </div>
      <ul>
        <li>
          <router-link to="b/1">Board 1</router-link>
        </li>
        <li>
          <router-link to="b/2">Board 2</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      loading: false,
      apiRes: '',
      error: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.loading = true

      axios.get('http://localhost:3000/health')
        .then(res => {
          this.apiRes = res.data
        })
        .catch(res => {
          this.error = {
            status: res.response.status,
            statueText: res.response.statusText
          }
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>