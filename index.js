//import important dependences
import Vue from 'vue'
import App from 'App'

Vue.config.productionTip = false //disable development-mode warnings
new Vue({
    el: "#app",  //binding application
    template: '<App/>',
    components: { App }
})