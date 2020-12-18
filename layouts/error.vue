<template>
  <transition name="page">
    <div class="container">
      <div>
        <h1 v-if="error.statusCode === 404">PAGE NOT FOUND</h1>
        <h1 v-else>AN ERROR OCCURED</h1>
        <h1>{{ error.statusCode }}</h1>
        <br>
        <div class="links">
          <NuxtLink
            to="/"
            class="button"
            data-after="HOME PAGE"
          >HOME PAGE</NuxtLink>
        </div>
      </div>
    </div>
  </transition>
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
