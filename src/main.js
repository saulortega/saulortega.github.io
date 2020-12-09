import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
	render: h => h(App),
	data: () => ({
    //idioma: ''
  }),
	created: function () {
		//this.detectarIdioma()
	},
	methods: {
		//
	}
}).$mount('#app')

