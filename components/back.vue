<template>
  <links :links="links" />
</template>

<script>
export default {
  props: {
    levels: {
      default: 1,
      type: Number
    }
  },
  computed: {
    to() {
      const path = this.$nuxt.$route.path
      const p = path.split('/')
      if (path.substr(-1) === '/') {
        p.pop()
      }
      for (let i = 0; i < this.levels; i++) {
        p.pop()
      }
      return p.join('/')
    },
    links() {
      return [
        {
          to: this.to,
          title: '◀   BACK'
        }
      ]
    }
  }
}
</script>
