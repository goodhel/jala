/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
// import dependecies tambahan
import App from './components/App.vue';
import router from './router'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import Axios from 'axios';
import Vue from 'vue'
import vSelect from 'vue-select'
import * as VueGoogleMaps from "vue2-google-maps";
import moment from 'moment'
import VueCurrencyFilter from 'vue-currency-filter'

Vue.component('v-select', vSelect)
Vue.use(VueRouter,VueAxios,Axios);


Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyA38N74y_xGwSV0bI_36OIXDdH-corZO5A",
    // libraries: "places" // necessary for places input
  }
});

Vue.filter('formatDate', function(value) {
    if (value) {
      return moment(String(value)).format('DD MMMM YYYY')
    }
});

Vue.use(VueCurrencyFilter,
    {
      symbol : 'Rp.',
      thousandsSeparator: '.',
      fractionCount: 0,
      fractionSeparator: ',',
      symbolPosition: 'front',
      symbolSpacing: true
});


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
// const router = new VueRouter({ mode: 'history', routes: routes });
// new Vue(Vue.util.extend({ router }, App)).$mount("#app");
const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
