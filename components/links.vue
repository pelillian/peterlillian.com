<template>
  <div class="links">
    <NuxtLink
      v-for="link in links"
      :key="link.to"
      :to="link.to"
      class="button"
      :data-after="link.title"
      v-text="link.title"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [
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
  },
  computed: {
    links() {
      return this.pages.filter(pg => pg.to !== this.$nuxt.$route.path)
    }
  }
}
</script>

<style lang="scss" scoped>
.links {
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  max-width: 100%;
  .button {
    margin: 5px 0 0 0;
  }
}
</style>
