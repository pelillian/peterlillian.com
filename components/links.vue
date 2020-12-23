<template>
  <div class="links">
    <nuxt-link
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
  props: {
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 800px) {
  .links {
    display: flex;
    flex-direction: row;
  }
}
.links {
  margin: 30px auto;
  max-width: 800px;
  width: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  .button {
    margin: 5px 0 0 0;
  }
}
</style>
