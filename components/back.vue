<template>
  <links :links="links" />
</template>

<script>
export default {
  computed: {
    to() {
      const p = this.$nuxt.$route.path.split('/')
      p.pop()
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
