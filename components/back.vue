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
      const p = this.$nuxt.$route.path.split('/')
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
