<template>
  <div id="app" class="app">
    <MainHeader class="app__header"></MainHeader>
    <main class="app__main">
      <MainHeading class="app__heading"></MainHeading>
      <router-view/>
    </main>
  </div>
</template>
<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue'
import MainHeading from '@/components/MainHeading.vue'

export default {
  name: 'main-header',
  components: {
    MainHeader,
    MainHeading
  }
}
</script>
<style lang="scss">
  .app {
    width: 100vw;
    height: 100vh;

    &__header {
      position: fixed;
      top: 0;
      left: 0;
      width: 280px;
      height: 100%;
      padding: 2em;
    }

    &__main {
      position: fixed;
      top: 0;
      right: 0;
      width: calc(100vw - 280px);
      height: 100%;
      padding: 1.5em 3em 3em 3em;
      background: #fbfbfb;
      overflow: auto;
    }

    &__heading {
      margin-bottom: 4em;
    }
  }
</style>
