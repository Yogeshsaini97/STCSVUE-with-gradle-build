<script>
import { ref, onMounted, computed } from "vue";

import { ChangeDateFormat, fetchData } from "../../../../../Components/Utils/Utils";

import Header from "../ReusableComponents/Header.ce.vue";
import { useCounterStore } from "../../../../../Stores/Store";



export default {
  props: {
    keyName: {
      type: Object,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    childVariable: {
      type: String,
      required: true,
    },
    totalItems: {
      type: Number,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    },
    maxDisplayedPages: {
      type: Number,
      default: 5,
    },
  },
  setup(props, context) {
    const userList = ref([]);
    const searchTerm = ref("");
    const pageSize = ref(6);
    const currentPage = ref(1);
    const hostUrl = props.url;
    const keyName = props.keyName;


    // const clickBtn = (pageName, Id) => {
    //     console.log("inside click btn", pageName);
    //     context.emit("pageChange", { pageName: pageName }, Id);
    // };
    const store = useCounterStore();

    console.log(store.projectHostUrl)

    onMounted(async () => {
      try {
        const response = await fetchData(hostUrl + `&pageSize=${pageSize.value}`);
        userList.value = response.items;
        console.log(userList.value);
      }
      catch (error) {
        console.error(error);
      }
    });
    async function handleSearch() {
      console.log(searchTerm.value);
      const response = await fetchData(hostUrl + `&search=${searchTerm.value}`);
      userList.value = response.items;
    }
    // ------------------
    const totalPages = computed(() => Math.ceil(20 / 2));
    async function urlEmbed(CurrentPage) {
      const response = await fetchData(hostUrl + `&page=${CurrentPage}&pageSize=${pageSize.value}&search=${searchTerm.value}`);
      userList.value = response.items;
    }
    const displayedPages = computed(() => {
      const pages = [];
      if (totalPages.value <= props.maxDisplayedPages) {
        // If the total number of pages is less than or equal to the max displayed pages,
        // display all pages without any dots
        for (let page = 1; page <= totalPages.value; page++) {
          pages.push(page);
        }
      }
      else {
        // Calculate the start and end page based on the current page and maxDisplayedPages
        let startPage = Math.max(1, currentPage.value - Math.floor(props.maxDisplayedPages / 2));
        let endPage = Math.min(totalPages.value, startPage + props.maxDisplayedPages - 1);
        // Adjust the start and end page to include dots if necessary
        if (endPage - startPage + 1 < props.maxDisplayedPages) {
          if (currentPage.value <= Math.ceil(props.maxDisplayedPages / 2)) {
            endPage = props.maxDisplayedPages;
          }
          else if (currentPage.value >=
            totalPages.value - Math.floor(props.maxDisplayedPages / 2)) {
            startPage = totalPages.value - props.maxDisplayedPages + 1;
          }
          else {
            startPage =
              currentPage.value - Math.floor(props.maxDisplayedPages / 2);
            endPage =
              currentPage.value + Math.floor(props.maxDisplayedPages / 2);
          }
        }
        // Add the page numbers and dots to the array
        for (let page = startPage; page <= endPage; page++) {
          pages.push(page);
        }
        if (startPage > 1) {
          pages.unshift("...");
        }
        if (endPage < totalPages.value) {
          pages.push("...");
        }
      }
      return pages;
    });
    async function changePage(page) {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
        //   const response = await fetchData(
        //     `/o/c/projects/?p_auth=${Liferay.authToken}&page=${currentPage.value}&pageSize=${pageSize.value}&search=${searchTerm.value}`
        //   );
        //   userList.value = response.items;
        // }
        urlEmbed(currentPage.value);
      }
    }
    async function previousPage() {
      if (currentPage.value > 1) {
        currentPage.value--;
        // const response = await fetchData(
        //   `/o/c/projects/?p_auth=${Liferay.authToken}&page=${currentPage.value}&pageSize=${pageSize.value}&search=${searchTerm.value}`
        // );
        // userList.value = response.items;
        urlEmbed(currentPage.value);
      }
    }
    async function nextPage() {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
        // const response = await fetchData(
        //   `/o/c/projects/?p_auth=${Liferay.authToken}&page=${currentPage.value}&pageSize=${pageSize.value}&search=${searchTerm.value}`
        // );
        // userList.value = response.items;
        urlEmbed(currentPage.value);
      }
    }
    // -----------
    return {
      userList,
      searchTerm,
      ChangeDateFormat,
      handleSearch,
      currentPage,
      totalPages,
      displayedPages,
      changePage,
      previousPage,
      nextPage,
      keyName,
      store
    };
  },
  components: { Header }
};
</script>


<template>
  <div>


    <!-- -------------Header-start----- -->
    <!-- <Header :keyName="keyName"/> -->
    <div class="Header-start">
      <div class="Header-box" style="margin-left:4rem;">
        <div class="Header-innderbox"><button
            @click="keyName.Name === 'Programs' ? store.changePage('program-list-page') : store.changePage('program-list-page')">Back</button>
        </div>

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


    <!-- -------------Header-end------------ -->


    <!-- .......... search -->

    <!-- <------------search....> -->

    <div class="List-head">
      <div class="Searchbar">
        <input type="text" v-model="searchTerm" @input="handleSearch" placeholder="Search..." class="search-input" />
      </div>
      <div class="table-border">
        <table class="table">
          <thead class="table-head">
            <tr>
              <th scope="col">status</th>
              <th scope="col">Program title & ID</th>
              <th scope="col">Progress(actual vs planned)</th>
              <th scope="col">Issues</th>
              <th scope="col">Risks</th>
              <th scope="col">Started</th>
              <th scope="col">Expected Completion</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody v-if="userList.length > 0">
            <tr v-for="item in userList" :key="item.id">
              <td>{{ item.statusActive }}</td>
              <td>
                {{ item.projectTitle }}
                {{ item.id }}
              </td>
              <td>{{ item.progressPlanned }}% {{ item.progressActual }}%</td>
              <td>{{ item.issues }}</td>
              <td>{{ item.risks }}</td>
              <td>{{ ChangeDateFormat(item.startedDate) }}</td>
              <td>{{ ChangeDateFormat(item.expectedCompletion) }}</td>
              <td>
                <button :style="{
                  color: 'red',
                  fontSize: '16px',
                  backgroundColor: '#f1f1f1',
                }"
                  @click="keyName.Name === 'Programs' ? store.changePage('project-list-page', item.id) : store.changePage('project-tabs-page')">
                  open
                </button>
              </td>
            </tr>
          </tbody>

          <tbody v-else>
            <tr>
              <td colspan="7">End of Data</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- '''''' pagination  -->

      <div></div>
      <div class="pagination">
        <button @click="previousPage" :disabled="currentPage === 1">
          Previous
        </button>
        <div v-for="page in displayedPages" :key="page">
          <template v-if="page === '...'">
            <span class="dots">...</span>
          </template>
          <template v-else>
            <button @click="changePage(page)" :class="{ active: currentPage === page }">
              {{ page }}
            </button>
          </template>
        </div>
        <button @click="nextPage" :disabled="currentPage === totalPages">
          Next
        </button>
      </div>
    </div>
  </div></template>
