<template>
  <div class="container">
    <div>
      <h1 class="title">CONTACT</h1>
      <links />
      <div class="contact">
        <a class="button" href="mailto:p@peterlillian.com" data-after="Email p@peterlillian.com">
          Email p@peterlillian.com
        </a>
        <a class="button" href="https://www.linkedin.com/in/peter-lillian" data-after="LinkedIn">
          LinkedIn
        </a>
        <a class="button" href="https://github.com/pelillian" data-after="GitHub">
          GitHub
        </a>
        <a class="button" href="https://www.instagram.com/ptlil/" data-after="Instagram @ptlil">
          Instagram @ptlil
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Contact Peter Lillian'
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  padding-top: 15px;
  display: flex;
  flex-flow: column wrap;
}
</style>
