<template>
  <v-app>
    <v-container class="px-xs-0 px-sm-2 px-md-6 px-lg-12 py-xs-0 py-sm-2">
			<v-row>
				<v-col>
					<v-row justify="end">
						<div class="pr-3">
							<v-select
								v-model="idioma"
								:items="[{'v': 'en', 't': 'English'}, {'v': 'es', 't': 'Español'}]"
								item-text="t"
								item-value="v"
								menu-props="auto"
								label="Language/Idioma"
								hide-details
								prepend-icon="mdi-translate"
								single-line
								class="pa-0 ma-0"
								style="max-width: 12em"
							></v-select>
						</div>
					</v-row>
				</v-col>
			</v-row>
			<v-row v-show="idioma">
				<v-col>
					<Introduccion :idioma="idioma" class="com" id="intro"></Introduccion>
				</v-col>
			</v-row>
			<!--<hr>-->
			<v-row v-show="idioma">
				<v-col>
					<Desarrollador :idioma="idioma" class="com"></Desarrollador>
				</v-col>
			</v-row>
    </v-container>
  </v-app>
</template>

<script>
import Introduccion from './components/Introduccion';
import Desarrollador from './components/Desarrollador';

// Por aquí voy, pendiente agregar inglés, con etiquetas de idioma

// Más pendientes: Revisar si agregar portafolio o experiencia o algo más. Agregar cosas semánticas.

export default {
  name: 'App',

  components: {
		Introduccion,
		Desarrollador
  },
  data: () => ({
		idioma: '',
  }),
	created: function () {
		this.detectarIdioma()
	},
	watch: {
		'idioma': function(i) {
			localStorage.setItem('idioma', i)
		}
	},
	methods: {
		detectarIdioma: function () {
			let idioma = localStorage.getItem('idioma')
			if (idioma === 'es' || idioma === 'en') {
				this.idioma = idioma
				return
			}

			idioma = (window.navigator.language || window.navigator.userLanguage || '').split('-')[0]
			if (!idioma) {
				if (window.navigator.languages && window.navigator.languages.length > 0) {
					for (let l of window.navigator.languages) {
						let ll = l.split('-')[0]
						if (ll === 'es' || ll === 'en') {
							idioma = ll
							break
						}
					}
				}
			}

			if (idioma !== 'es' && idioma !== 'en') {
				idioma = 'es'
			}

			this.idioma = idioma
		},
	}
};
</script>

<style scoped>

#app {
	background-color: #f5f6fa !important;
}

.col {
	text-align: center;
}

.com {
	margin-bottom: 30px;
	display: inline-block;
}

.container {
	max-width: 1600px !important;
	min-height: 100vh;
}

#intro {
	max-width: 1000px;
}

@media screen and (min-width: 1700px) {
  .container {
		border-left: 1px solid silver;
		border-right: 1px solid silver;
	}
}

</style>