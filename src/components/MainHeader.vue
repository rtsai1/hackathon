<template>
    <header class="main-header">
        <figure class="main-header__logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.97 30">
            <path
              d="M63.49 22.08h-3.23l.53-2.14h-6.48l-.53 2.14h-3.13v-.44c.05-.24.09-.5.15-.77.57-2.3 2.08-4.58 4.7-4.58 1 0 2.07.39 1.93 1.83h3.85a3.39 3.39 0 0 0-.28-2.86c-.82-1.14-2.47-1.59-4.62-1.59a10.47 10.47 0 0 0-5.69 1.5V3.54h12.8zm-7.57 3.13a12.66 12.66 0 0 1-2.16.22c-1.86 0-3.14-.86-3.17-2.87h6zm-7.41-10.59v2.66A10.53 10.53 0 0 0 46.8 21a7.48 7.48 0 0 0-.21 1.13h-1.88l1.61-7.66h-5.43L36 22.08h-.35V3.54h12.86zm-7.16 7.46h-1.94l2.93-4.6zm-7.8-7.68h-3.21l-2.21 7.68h-3.4a4.61 4.61 0 0 0 3.12-3.69 3.44 3.44 0 0 0-.44-3c-.86-1-2.6-.95-4.14-.95h-2.55V3.54h12.83zm-2 7.68l1.35-4.8v4.8zm-9.35-1.83h-1.69l.38-1.41.18-.69.43-1.64h1.2c1.08 0 1.77.06 2 .41s.17.71-.06 1.4a2.34 2.34 0 0 1-2.46 1.91m-3.56-5.17l-.2.67-1.84 6.11-.07.22h-6.08l-.47-1 6.52-6.66h-4.19l-5.1 5.49 1.66-5.49H5.76V3.54h12.83zm31.57-12v12.46A8.64 8.64 0 0 0 49 16.63V3.05H35.19V14.4h-1.14V3.05H20.23v11.37h-1.15V3.05H5.26V16L1.74 27.77h3.1l1.56-5.21h.44l2.58 5.21h3.74l-2.49-5.21h5.66l-1.57 5.21h3.39l1.55-5.19H28l-1.5 5.19h3.42l1.45-5.19h1.53v5.19h2.9l3.29-5.19h2.16l-1.11 5.19h3.36l1.09-5.19h1.95a5 5 0 0 0 1.4 4.06 7.15 7.15 0 0 0 4.79 1.43 29.17 29.17 0 0 0 6.27-.79l1.16-4.72H64V3.05z"
              fill="#fff"
              data-name="Layer 1"
            ></path>
            </svg>
        </figure>
    </header>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'mainHeader'
}
</script>
<style lang="scss" scoped>
    @import "~@styles/common/variables";
    @import "~@styles/common/functions";
    @import "~@styles/common/mixins";

    .main-header {
        background: $kpmg-blue;
        height: 100vh;

        &__logo {
            display: block;
            width: em(100);
            height: auto;
            margin: 0 auto 1em auto;
        }
    }
</style>