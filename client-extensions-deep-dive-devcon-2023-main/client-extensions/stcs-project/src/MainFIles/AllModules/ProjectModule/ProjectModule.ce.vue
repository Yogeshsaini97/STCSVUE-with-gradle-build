<template>
    <div>
        <!-- using conditional rendering for every page  -->
        <ListPage v-if="store.currentPageProject === 'program-list-page'" @page-change="myAction" :url="programHostUrl"
            :keyName="{ Name: 'Programs', NavUrl: 'List' }" />
        <ListPage v-else-if="store.currentPageProject === 'project-list-page'" @page-change="myAction" :url="store.projectHostUrl"
            :keyName="{ Name: 'Projects', NavUrl: 'Projects' }" />
        <ProjectTabs v-else-if="store.currentPageProject === 'project-tabs-page'" @page-change="myAction" :keyName="{ Name: 'Projects', NavUrl: 'Projects' }"/>
      </div>
</template>


<script setup>
import ListPage from "./Components/Listing/ListPage.ce.vue";
import ProjectTabs from "./Components/Tabs/ProjectTabs.ce.vue";
import { useCounterStore } from "../../../Stores/Store";

const store = useCounterStore();

// here we are assigning our current page variable delared globally 


// Our Api host urls 
const programHostUrl = `http://localhost:8080/o/c/projects/?p_auth=${Liferay.authToken}`





</script>




