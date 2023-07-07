<script setup>
import { createApp } from 'vue'
import Tabs from './ProjectTabs/Tabs.vue'
import Tab from './ProjectTabs/Tab.vue'
import Header from '../ReusableComponents/Header.ce.vue';
import { useCounterStore } from '../../../../../Stores/Store';
import RiskIssues from './TabFiles/Risk&Issues.vue';
import Overview from "./TabFiles/Overview.vue"


const store=useCounterStore();
let NextPage;
let prevPage;


if(store.currentPageProject==='project-tabs-page')
{
prevPage='project-list-page';
}




</script>


<!-- <script>
import Tabs from '../Tabs.vue'
	import Tab from '../Tab.vue'
export default {
  
  setup() {
    
    return{
      Tabs,
      Tab
    }
  },
}
</script> -->

<template>
  <!-- header-starts  -->

  <div class="Header-start">
    <div class="Header-box" style="margin-left:4rem;">
      <div class="Header-innderbox"><button
          @click="store.changePage(prevPage)">Back</button>
      </div>
      <div class="Header-innderbox">
        <!-- <div>{{ keyName.Name }}</div> -->
        <!-- <div class="Navigation-list">Dashboard > Programs > {{ keyName.NavUrl }}</div> -->
      </div>
    </div>
    <div class="Header-box " style="margin-right:2rem;">
      <div class="Header-innderbox"><button>Filter</button></div>
      <div class="Header-innderbox"><button>Download</button></div>
      <div class="Header-innderbox"><button>talk to us</button></div>
    </div>
  </div>






  <!-- header-ends  -->
	<Tabs>
  	<Tab active="true" title="Overview">
      <Overview/>
    </Tab>
  	<Tab title="Milestones">
      Cras scelerisque, dolor vitae suscipit efficitur, risus orci sagittis velit, ac molestie nulla tortor id augue.
    </Tab>
  	<Tab title="Risk & Issues">
      <RiskIssues/>
    </Tab>
  	<Tab title="Documents">
      Aenean varius dui eget ante finibus, sit amet finibus nisi facilisis. Nunc pellentesque, risus et pretium hendrerit.
    </Tab>
  </Tabs>
</template>

<!-- <script>


export default {
  props: {
    keyName: {
      type: Object,
      required: true,
    }
  },
  setup(props,context) {
    const keyName=props.keyName;

    return {
     
      keyName
      
    };
  },
}
</script> -->


