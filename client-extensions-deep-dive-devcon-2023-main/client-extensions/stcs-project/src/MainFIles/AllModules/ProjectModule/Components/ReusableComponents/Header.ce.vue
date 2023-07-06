<template>
    <div class="Header-start">
        <div class="Header-box" style="margin-left:4rem;">
          <div class="Header-innderbox"><button @click="clickBtn(keyName.Name)">Back</button></div>
  
          <div class="Header-innderbox">
            <div>{{ keyName.Name }}</div>
            <div class="Navigation-list">Dashboard > Programs > {{ keyName.NavUrl }}</div>
          </div>
        </div>
        <div class="Header-box " style="margin-right:2rem;">
          <div class="Header-innderbox"><button>Filter</button></div>
          <div class="Header-innderbox"><button>Download</button></div>
          <div class="Header-innderbox"><button>talk to us</button></div>
        </div>
      </div>
</template>

<!-- <script setup>


const props = defineProps({
  keyName: {
            type: Object,
            required: true
        }
        ,
        clickBtn:
        {
          type: Function,
    required: true
        }

})

console.log("indside header keyname", props.keyName)



const clickBtn = (pageName, Id) => {
            console.log("inside click btn", pageName);
            $emit("pageChange", { pageName: pageName }, Id);
        };




</script> -->


<script>
import { ref } from 'vue'

export default {
  props:{
  keyName: {
            type: Object,
            required: true
        }
        ,
        clickBtn:
        {
          type: Function,
    required: true
        }

},
  setup(props,context) {
    const count = ref(0)

    console.log("indside header keyname", props.keyName)



    const clickBtn = (pageName, Id) => {
            console.log("inside click btn", pageName);
            context.emit("pageChange", { pageName: pageName }, Id);
        };

    // expose to template and other options API hooks
    return {
      clickBtn
    }
  },

  mounted() {
    console.log(this.count) // 0
  }
}
</script>
