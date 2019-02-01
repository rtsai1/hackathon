<template>
    <div class="state">
        <h2 class="state_title">
            {{ stateName }}
        </h2>

        <div class="state_data">
            <ul data-tabs class="tabs state_data__tabs">
                <li><a data-tab href="#Overview">Overview</a></li>
                <li><a data-tab href="#AARC">AARC</a></li>
                <li><a data-tab href="#BUS">BUS</a></li>
                <li><a data-tab href="#DTL">DTL</a></li>
                <li><a data-tab href="#ENT">ENT</a></li>
                <li><a data-tab href="#IDD">IDD</a></li>
                <li><a data-tab href="#MC">MC</a></li>
            </ul>
            
            <md-content class="md-elevation-2 state_data__tabs__content">
                <div data-tabs-content>
                    <div data-tabs-pane class="tabs-pane active" id="Overview">
                        <h3>
                            Overview
                        </h3>
                        <img :src="tabContent">
                    </div>
                    <div data-tabs-pane class="tabs-pane" id="AARC">
                        <h3>
                            AARC
                        </h3>
                        <img :src="tabContent">
                    </div>
                    <div data-tabs-pane class="tabs-pane" id="BUS">
                        <h3>
                            BUS
                        </h3>
                        <img :src="tabContent">
                    </div>
                    <div data-tabs-pane class="tabs-pane" id="DTL">
                        <h3>
                            DTL
                        </h3>
                        <img :src="tabContent">
                    </div>
                    <div data-tabs-pane class="tabs-pane" id="ENT">
                        <h3>
                            ENT
                        </h3>
                        <img :src="tabContent">
                    </div>
                    <div data-tabs-pane class="tabs-pane" id="IDD">
                        <h3>
                            IDD
                        </h3>
                        <img :src="tabContent">
                    </div>
                    <div data-tabs-pane class="tabs-pane" id="MC">
                        <h3>
                            MC
                        </h3>
                        <img :src="tabContent">
                    </div>
                </div>
            </md-content>
        </div>
        
    </div>
</template>

<script>
import tabby from "Tabby";
import tabContent from '@/assets/images/tab-content.png';

export default {
  name: 'state',
  components: {
  },
  data: function() {
        return {
            tabContent
        }
    },
  computed: {
    stateName: function() {
        let stateName = this.$route.params.stateId.trim().replace('-', ' ');
        return stateName;
    }
  },
  mounted: function() {
    tabby.init();
  }
}
</script>
<style lang="scss">
    .state_title {
        font-size: 2.2em;
        text-transform: capitalize;
    }

    .state_data__tabs {
        list-style: none;
        display: flex;
        margin-bottom: 1em;

        li {
            margin-right: 1em;
            line-height: 1;
            background: #eee;

            > a {
                display: block;
                padding: 1em;
            }
        }
    }

    .state_data__tabs__content {
        padding: 2em;
    }
</style>