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
    idioma: 'es'
  }),
	created: function () {
		//
	},
	methods: {
		/*intersección: function (A, B) {
			A = A || []
			B = B || []

			return A.filter( (v) => {
				return B.indexOf(v) != -1
			})
		}*/
	}
}).$mount('#app')

