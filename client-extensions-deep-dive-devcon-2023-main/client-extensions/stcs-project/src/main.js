import { defineCustomElement } from 'vue';
import App from './App.ce.vue';
import { createPinia, setActivePinia } from 'pinia';


setActivePinia(createPinia());


const element=defineCustomElement(App) ;

//Defining custom elments in the html section
customElements.define("stcs-project", element);
