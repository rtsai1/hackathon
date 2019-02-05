<template>
    <div>
        <div class="divisions-view">
            
            <div class="divisions">
                <article @click="goToDivision(item.id)" class="divisions-item" v-for="item in divisions" :key="item.title">
                    <md-card class="md-primary">
                      <md-card-header>
                        <md-card-header-text>
                          <div class="md-title division-title">{{ item.title }}</div>
                        </md-card-header-text>

                        <md-card-media>
                          <img :src="item.image">
                        </md-card-media>
                      </md-card-header>
                    </md-card>
                </article>
                
            </div>

            <div class="leaderboard">
                <img :src="leaderBoardStates" alt="">
            </div>
        </div>
        
    </div>
</template>

<script>
import leaderBoardStates from '@/assets/images/leaderBoard-division.png';

export default {
    data: function() {
        return {
            leaderBoardStates,
            divisions: [
                {
                    id: "innovation-and-digital-data",
                    title: "Innovation and Digital Data",
                    image: require('@/assets/images/innovation-and-digital-data.png'),
                },
                {
                    id: "business-services",
                    title: "Business Services",
                    image: require('@/assets/images/business-service.png'),
                },
                {
                    id: "audit-assurance-and-risk-consulting",
                    title: "Audit, Assurance and Risk Consulting",
                    image: require('@/assets/images/audit-risk-consulting.png'),
                },
                {
                    id: "deals-tax-and-legal",
                    title: "Deals, Tax and Legal",
                    image: require('@/assets/images/deals-tax-legal.png'),
                },
                {
                    id: "management-consulting",
                    title: "Management Consulting",
                    image: require('@/assets/images/management-consulting.png'),
                },
                {
                    id: "enterprise",
                    title: "Enterprise",
                    image: require('@/assets/images/enterprise.png'),
                },
            ]
        }
    },
    name: 'division',
    components: {
    },
    methods: {
        goToDivision: function(id) {
            this.$router.push({ path: `/division/${id}` })
        }
    }
}
</script>
<style lang="scss">
    .division-title {
        font-size: 1.2em!important;
    }
    .divisions-view {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 2em;
    }
    .divisions {
        display: grid;
        grid-template-columns: 48% 48%;
        grid-column-gap: 4%;
        grid-row-gap: 0;
    }
    .divisions-item {
        cursor: pointer;
    }
</style>