<template>
  <div class="container">
    <div>
      <h2 v-if="error.statusCode === 404">404 PAGE NOT FOUND</h2>
      <h2 v-else>ERROR {{ error.statusCode }}</h2>
      <br>
      <div class="links">
        <nuxt-link
          to="/"
          class="button"
          data-after="HOME PAGE"
        >HOME PAGE</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>
