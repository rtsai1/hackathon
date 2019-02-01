<template>
    <div class="routes-selector">
        <!-- By States -->

        <md-card>
            <md-card-header>
                <md-card-header-text>
                  <div class="md-title">Leaders by State</div>
                  <div class="md-subhead">Leader: WA</div>
                </md-card-header-text>
                <md-card-media md-medium>
                    <img class="route-image" :src="ausMapImage" alt="Aus Map">
                </md-card-media>
            </md-card-header>

            <md-card-actions>
                <md-button class="" @click="$router.push('states')">Browse</md-button>
            </md-card-actions>
        </md-card>

        <!-- By Divisions -->
        <md-card>
            <md-card-header>
                <md-card-header-text>
                  <div class="md-title">Leaders by Division</div>
                  <div class="md-subhead">Leader: IDD</div>
                </md-card-header-text>
                <md-card-media md-medium>
                    <img class="route-image" :src="divisionIcon" alt="Aus Map">
                </md-card-media>
            </md-card-header>

            <md-card-actions>
                <md-button class="" @click="$router.push('divisions')">Browse</md-button>
            </md-card-actions>
        </md-card>
    </div>
</template>

<script>
import ausMapImage from "@/assets/images/aus-map.png"
import divisionIcon from "@/assets/images/divisionIcon.png"

export default {
    name: 'routesSelector',
    data: function () {
        return {
            ausMapImage,
            divisionIcon
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "~@styles/common/variables";
    @import "~@styles/common/functions";
    @import "~@styles/common/mixins";

    .md-title {
        color: $kpmg-blue;
    }

    .md-subhead {
        color: black;
        opacity: 1;
        margin-top: 1em;
    }

    .routes-selector {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 3em;
    }

    .route-image {
        height: auto;
    }
</style>