<template>
  <div class="container">
    <div>
      <h1>RESUME</h1>
      <links />
      <h2>PROJECTS &amp; EXPERIENCE</h2>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const experience = await $content('resume/experience').fetch()
    console.log(experience)
    return { experience }
  },
  head() {
    return {
      title: 'Peter Lillian\'s Resume'
    }
  }
}
</script>
