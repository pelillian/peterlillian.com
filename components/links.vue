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
  padding-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 100%;
}
.button {
  font-size: 50px;
  position: relative;
  margin: 20px;
  color: #fff;
  text-decoration: none;
  padding: 10px 30px;
  transform: scale(0.8);
  transition: all 0.3s ease;
  transition-property: color transform;
  &:hover, &:focus {
    color: #180030;
    transform: scale(1);
    &::after {
      opacity: 1;
    }
  }
  &::after {
    content: attr(data-after);
    position: absolute;
    z-index: 5;
    opacity: 0;
    left: 0;
    bottom: 0;
    padding: 10px 30px;
    height: 100%;
    width: 100%;
    background: linear-gradient(130deg, #734a1f, #d59748, #e7bf8f, #d59748);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    transition: opacity 0.3s ease;
  }
}
</style>
