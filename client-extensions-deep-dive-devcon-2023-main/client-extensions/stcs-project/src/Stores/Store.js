import { defineStore } from "pinia";
import { computed, ref } from "vue";


export const useCounterStore =defineStore('counter',()=>
{
    const currentPageProject=ref('program-list-page')
    const projectHostUrl = ref(`http://localhost:8080/o/c/projectts/?p_auth=${Liferay.authToken}`);
  
    function changePage(pageNow,Id=null)
    
    { 
        if(Id!=null)
        {
            projectHostUrl.value = `http://localhost:8080/o/c/projectts/?p_auth=${Liferay.authToken}&filter=r_projectsrelation_c_projectId eq '${Id}'`
        }
        
        currentPageProject.value=pageNow;
        console.log(projectHostUrl)
    }
    return {changePage,currentPageProject,projectHostUrl}
})