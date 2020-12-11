<template>
  <div class="container">
    <div>
      <h1 class="title">PETER LILLIAN</h1>
      <span class="subtitle">
        Food for thought: Future beings will appear as godlike to us as we do to ants. But unless they can find a way around the laws of physics, they'll have the same existential problems that ants do: entropy is always increasing.
      </span>
      <div class="links">
        <NuxtLink
          to="/resume"
          class="button"
        >
          RESUME
        </NuxtLink>
        <NuxtLink
          to="/resume"
          class="button"
        >
          ART
        </NuxtLink>
        <NuxtLink
          to="/resume"
          class="button"
        >
          THOUGHTS
        </NuxtLink>
        <NuxtLink
          to="/resume"
          class="button"
        >
          CONTACT
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head () {
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
  .button {
    position: relative;
    margin: 20px;
    color: #fff;
    text-decoration: none;
    padding: 10px 30px;
    &:hover, &:focus {
      &::after {
        height: 4px;
      }
    }
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 1px;
      width: 100%;
      background: linear-gradient(130deg, #734a1f, #d59748, #e7bf8f, #d59748);
      transition: height .2s ease;
    }
  }
}
</style>
