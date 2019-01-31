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
    display: flex;

    &__header {
      padding: 2em;
      flex: 0 1 280px;
    }

    &__main {
      flex: 1;
      padding: 1.5em 2em 2em 2em;
      background: #fbfbfb;
    }

    &__heading {
      margin-bottom: 4em;
    }
  }
</style>
