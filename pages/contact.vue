<template>
  <div class="container">
    <div>
      <navbar />
      <h1>CONTACT</h1>
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
  padding-top: 18px;
  a.button {
    display: list-item;
    list-style-type: none;
    margin: 0;
  }
}
</style>
