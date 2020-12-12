<template>
  <div class="container">
    <div>
      <h1 class="title">PETER LILLIAN</h1>
      <p class="subtitle">
        Food for thought: Future beings will appear as godlike to us as we do to ants.
      </p>
      <p class="subtitle">
        But unless they can find a way around the laws of physics,
      </p>
      <p class="subtitle">
        they'll have the same existential problems that ants do: entropy is always increasing.
      </p>
      <div class="links">
        <NuxtLink
          to="/resume"
          class="button"
          data-after="RESUME"
        >
          RESUME
        </NuxtLink>
        <NuxtLink
          to="/resume"
          class="button"
          data-after="ART"
        >
          ART
        </NuxtLink>
        <NuxtLink
          to="/resume"
          class="button"
          data-after="THOUGHTS"
        >
          THOUGHTS
        </NuxtLink>
        <NuxtLink
          to="/resume"
          class="button"
          data-after="CONTACT"
        >
          CONTACT
        </NuxtLink>
      </div>
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
.links {
  padding-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 100%;
  .button {
    font-size: 50px;
    position: relative;
    margin: 20px;
    color: #fff;
    text-decoration: none;
    padding: 10px 30px;
    transform: scale(0.8);
    transition: all 0.2s ease;
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
      transition: opacity 0.2s ease;
    }
  }
}
</style>
