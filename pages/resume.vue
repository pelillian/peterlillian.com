<template>
  <div class="container">
    <div>
      <h1>RESUME</h1>
      <links />
      <h2>PROJECTS &amp; EXPERIENCE</h2>
      <div
        v-for="item in experience.data"
        :key="item.info"
        class="item"
      >
        <p><b>{{ item.org }}</b><span class="right">{{ item.when }}</span></p>
        <span>{{ item.what }}</span><span class="dim right">{{ item.where }}</span>
        <p v-html="item.info"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const experience = await $content('resume/experience').fetch()
    return { experience }
  },
  head() {
    return {
      title: 'Peter Lillian\'s Resume'
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  font-weight: normal;
  text-align: left;
  margin-top: 48px;
  p {
    margin-top: 18px;
    b {
      font-size: 24px;
    }
  }
}

.dim {
  font-size: 16px;
}
</style>
