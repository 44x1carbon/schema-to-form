import Vue from 'vue'
import App from './App.vue'
import FormMaker from './components/FormMaker.vue'
Vue.component('form-maker', FormMaker)

new Vue({
  el: '#app',
  render: h => h(App)
})
