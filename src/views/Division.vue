<template>
    <div class="state">
        <h2 class="state_title">
            {{ divisionName }}
        </h2>

        <div class="state_data">
            <ul data-tabs class="tabs state_data__tabs">
                <li><a data-tab href="#Overview">Overview</a></li>
                <li><a data-tab href="#VIC">VIC</a></li>
                <li><a data-tab href="#NSW">NSW</a></li>
                <li><a data-tab href="#QLD">QLD</a></li>
                <li><a data-tab href="#NT">NT</a></li>
                <li><a data-tab href="#TAS">TAS</a></li>
                <li><a data-tab href="#WA">WA</a></li>
                <li><a data-tab href="#SA">SA</a></li>
                <li><a data-tab href="#ACT">ACT</a></li>
            </ul>
            
            <md-content class="md-elevation-2 state_data__tabs__content">
                <div data-tabs-content>
                    <div data-tabs-pane class="tabs-pane active" id="Overview">
                        <h3>
                            Overview
                        </h3>
                        <img :src="tabContent">
                    </div>
                    <div data-tabs-pane class="tabs-pane" id="VIC">
                        <h3>
                            VIC
                        </h3>
                        <img :src="tabContent">
                    </div>
                    <div data-tabs-pane class="tabs-pane" id="NSW">
                        <h3>
                            NSW
                        </h3>
                        <img :src="tabContent">
                    </div>
                    <div data-tabs-pane class="tabs-pane" id="QLD">
                        <h3>
                            QLD
                        </h3>
                        <img :src="tabContent">
                    </div>
                    <div data-tabs-pane class="tabs-pane" id="NT">
                        <h3>
                            NT
                        </h3>
                        <img :src="tabContent">
                    </div>
                    <div data-tabs-pane class="tabs-pane" id="TAS">
                        <h3>
                            TSA
                        </h3>
                        <img :src="tabContent">
                    </div>
                    <div data-tabs-pane class="tabs-pane" id="WA">
                        <h3>
                            WA
                        </h3>
                        <img :src="tabContent">
                    </div>
                    <div data-tabs-pane class="tabs-pane" id="SA">
                        <h3>
                            SA
                        </h3>
                        <img :src="tabContent">
                    </div>
                    <div data-tabs-pane class="tabs-pane" id="ACT">
                        <h3>
                            ACT
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
  name: 'division',
  data: function() {
        return {
            tabContent
        }
    },
  components: {
  },
  computed: {
    divisionName: function() {
        let divisionName = this.$route.params.divisionId.trim().replace('-', ' ');
        return divisionName;
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