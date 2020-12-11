<template>
  <div>
    <Nuxt />
  </div>
</template>

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
  font-weight: bold;
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

.title {
  display: block;
  font-size: 100px;
  letter-spacing: 10px;
  color: #fff;
}

.subtitle {
  padding-top: 15px;
}
</style>
