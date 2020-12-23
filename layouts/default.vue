<template>
  <div
    :style="perspective"
    @mousemove="move"
    @scroll="scroll"
  >
    <Nuxt />
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
      zT: -1000,
      yS: 0,
      h: 0
    }
  },
  computed: {
    perspective() {
      return {
        transform: `translate3d(${this.xT}px,${this.yT}px,${this.zT}px) perspective(800px) rotateX(${this.xRot}deg) rotateY(${this.yRot}deg)`,
        'transform-origin': `50% ${this.yS + (this.h / 2)}px`
      }
    }
  },
  mounted() {
    document.addEventListener('scroll', this.scroll)
  },
  methods: {
    move(e) {
      const w = window.innerWidth,
        h = window.innerHeight,
        offX = 0.5 - e.screenX / w,
        offY = 0.5 - e.screenY / h
      this.yRot = -offX * 10
      this.xRot = offY * 10
      this.xT = offX * 20
      this.yT = offY * 20
      this.h = h
    },
    scroll() {
      this.yS = window.scrollY
    }
  }
}
</script>
