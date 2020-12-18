<template>
  <div @mousemove="move">
    <Nuxt :style="perspective" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      xRot: 0,
      yRot: 0,
      xT: 0,
      yT: 0,
      zT: 0
    }
  },
  computed: {
    perspective() {
      return {
        transform: `translate3d(${this.xT}px,${this.yT}px,${this.zT}px) perspective(800px) rotateX(${this.xRot}deg) rotateY(${this.yRot}deg)`
      }
    }
  },
  methods: {
    move(e) {
      const w = window.innerWidth,
        h = window.innerHeight,
        offX = 0.5 - e.pageX / w,
        offY = 0.5 - e.pageY / h
      this.yRot = -offX * 14
      this.xRot = offY * 14
      this.xT = offX * 20
      this.yT = offY * 20
    }
  }
}
</script>

<style lang="scss">
@font-face {
    font-family: 'League Spartan';
    src: url('~assets/fonts/LeagueSpartan-VF.woff2') format('woff2-variations');
    font-weight: 200 900;
}

html {
  font-family:
    'League Spartan',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-weight: normal;
  font-size: 18px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #180030;
  color: #fff;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 800px;
  width: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.right {
  text-align: right;
  float: right;
}

h1 {
  display: block;
  font-size: 100px;
  font-weight: bold;
  letter-spacing: 10px;
}

h2 {
  display: block;
  font-size: 50px;
  font-weight: bold;
  margin-top: 90px;
}

a {
  font-weight: bold;
  color: #e7bf8f;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

.button {
  font-size: 50px;
  font-weight: bold;
  position: relative;
  margin: 20px;
  color: #fff;
  text-decoration: none;
  padding: 10px 30px;
  transform: scale(0.8);
  transition: all 0.3s ease;
  transition-property: color transform;
  &:hover, &:focus {
    color: #180030;
    text-decoration: none;
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
    transition: opacity 0.3s ease;
  }
}

.page-enter-active,
.page-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease !important;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: rotateX(30deg) rotateY(30deg) !important;
}
</style>
