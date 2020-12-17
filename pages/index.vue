<template>
  <div class="container">
    <div>
      <h1>PETER LILLIAN</h1>
      <p class="subtitle">
        Food for thought: Future beings will appear as godlike to us as we do to ants.
      </p>
      <p class="subtitle">
        But unless they can find a way around the laws of physics,
      </p>
      <p class="subtitle">
        they'll have the same existential problems that ants do: entropy is always increasing.
      </p>
      <links />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Peter Lillian'
    }
  }
}
</script>

<style lang="scss" scoped>
.subtitle {
  padding-top: 15px;
}
</style>
