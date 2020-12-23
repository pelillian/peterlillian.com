<template>
  <div>
    <links :links="links" />
  </div>
</template>

<script>
export default {
  computed: {
    links() {
      return this.pages.filter((pg) => {
        const path = this.$nuxt.$route.path
        return pg.to === '/' ? path !== '/' : true
      })
    },
    pages() {
      return [
        {
          title: 'RESUME',
          to: '/resume'
        },
        {
          title: 'ART',
          to: '/art'
        },
        {
          title: 'THOUGHTS',
          to: '/thoughts'
        },
        {
          title: 'CONTACT',
          to: '/contact'
        },
        {
          title: 'HOME',
          to: '/'
        }
      ]
    }
  }
}
</script>
