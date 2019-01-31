<template>
	<div class="routes-selector">
        <!-- By States -->

        <md-card>
            <md-card-header>
            	<md-card-header-text>
		          <div class="md-title">By States</div>
		          <div class="md-subhead">By Statese</div>
		        </md-card-header-text>
	            <md-card-media md-medium>
	            	<img class="route-image" :src="ausMapImage" alt="Aus Map">
	            </md-card-media>
            </md-card-header>

            <md-card-actions>
                <md-button class="">Select</md-button>
            </md-card-actions>
        </md-card>

        <!-- By Divisions -->
        <md-card>
            <md-card-header>
	            <md-card-header-text>
		          <div class="md-title">By Divisions</div>
		          <div class="md-subhead">By Divisions</div>
		        </md-card-header-text>
	            <md-card-media md-medium>
	            	<img class="route-image" :src="ausMapImage" alt="Aus Map">
	            </md-card-media>
            </md-card-header>

            <md-card-actions>
                <md-button class="">Select</md-button>
            </md-card-actions>
        </md-card>
    </div>
</template>

<script>
import ausMapImage from "@/assets/images/aus-map.png"

export default {
	name: 'routesSelector',
	data: function () {
		return {
			ausMapImage
		}
	}
}
</script>
<style lang="scss" scoped>
	@import "~@styles/common/variables";
	@import "~@styles/common/functions";
	@import "~@styles/common/mixins";

	.routes-selector {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 3em;
	}

	.route-image {
	}
</style>