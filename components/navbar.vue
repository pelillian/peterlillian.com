<template>
  <div>
    <links :links="links" />
  </div>
</template>

<script>
export default {
  computed: {
    links() {
      const path = this.$nuxt.$route.path
      const pages = this.pages.slice()
      const idx = pages.findIndex(pg => path.includes(pg.to))
      if (idx !== -1) {
        pages[idx] = {
          title: 'HOME',
          to: '/'
        }
      }
      return pages
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
        }
      ]
    }
  }
}
</script>
