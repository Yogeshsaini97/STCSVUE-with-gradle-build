<!-- Importing all external css files  -->
<style src="./Components//Style//Header.css"></style> <!-- Include the external CSS file -->
<style src="./Components//Style/ListPage.css"></style> <!-- Include the external CSS file -->

<!-- Importing StcsProject.vue file  -->
<script setup>
import StcsProject from './StcsProject/StcsProject.ce.vue';
import { useCounterStore } from './Stores/Store';
const store=useCounterStore();
</script>

<template>
  <!--calling StcsProject.vue file  -->
  <StcsProject/>

  
</template>






