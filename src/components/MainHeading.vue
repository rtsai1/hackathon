<template>
    <div class="main-heading">
        <h2 clsas="main-heading__title">
            KPMG Impact Cup - {{ getRouteHeading }}
        </h2>
    </div>
</template>

<script>

export default {
  name: 'mainHeading',

  computed: {
    getRouteHeading: function() {
        return this.$route.meta.heading;
    }
  }
}
</script>
<style lang="scss" scoped>
    @import "~@styles/common/variables";
    @import "~@styles/common/functions";
    @import "~@styles/common/mixins";

    .main-heading {
        h2 {
            font-family: $font-display;
            font-size: 3.2em;
            font-weight: 400;
            color: $kpmg-blue;
        }
    }
</style>