<template>
    <div>
        <RoutesSelector></RoutesSelector>

        <div class="siema event-gallery">
		  <div class="event-gallery__slide" v-for="item in galleryItems">
		  	<figure>
		  		<img :src="item.image">
		  		<figcaption>
		  			{{ item.story }}
		  		</figcaption>
		  	</figure>
		  </div>
		</div>
    </div>
</template>

<script>
import RoutesSelector from '@/components/RoutesSelector.vue'
import Siema from 'siema';

export default {
    name: 'home',
    data: function() {
    	return {
    		siemaInterval: null,
    		galleryItems: [
    			{
    				image: require('@/assets/images/chantal.jpg'),
    				story: "I had such an awesome experience! I was a Jawun secondee for 6 weeks in West Kimberley, Broome. I loved every moment of it and would totally recommend volunteering to everyone in the firm as much as possible!"
    			},
    			{
    				image: require('@/assets/images/meg.jpg'),
    				story: "A colleague and I are aiming to put together a social impact report for Youth Projects. Measuring the benefits to the community through their Employment and Training initiatives with homeless and less fortunate youth."
    			},
    			{
    				image: require('@/assets/images/Nick.jpg'),
    				story: "I’ve been mentoring a Year 10 student as part of the Australian Indigenous Education Foundation. I’m helping him by providing guidance, sharing my experiences and just being there for him. It’s also great for me as I get the opportunity to give back to the community while developing my coaching skills – and he’s taught me how to play basketball again!"
    			},
    			{
    				image: require('@/assets/images/Steve.jpg'),
    				story: "Nothing feels better than engaging with and working for the community. If our hopes of building a better and safer world are to become more than wishful thinking, we will need the engagement of volunteers more than ever."
    			}
    		]
    	}
    },
    components: {
        RoutesSelector
    },
    mounted: function() {
		let gallerySiema = new Siema({
			loop: true,
			duration: 400
		});
		this.siemaInterval = window.setInterval(() => gallerySiema.next(), 5000);
    },
    destroyed: function() {
    	window.clearInterval(this.siemaInterval);
    }
}
</script>
<style lang="scss">
	.routes-selector {
		margin-bottom: 2em;
	}
	.event-gallery {
		&__slide {
			figure {
				display: flex;
				align-items: center;

				img {
					display: block;
					width: 300px;
					margin: auto;
				}

				figcaption {
					flex: 1;
					margin: auto 0 auto 2em;
				}
			}
		}
	}
</style>