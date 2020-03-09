<template>
	<div class="text-left">


			<br>
			<h1 v-if="idioma === 'es'" lang="es" class="text-center font-weight-light">Habilidades</h1>
			<h1 v-if="idioma === 'en'" lang="en" class="text-center font-weight-light">Abilities</h1>
			<br>

			<!--<v-row justify="center">-->

      	<!--<v-col cols="12" lg="4" md="5" sm="6">
        	<v-card-text>
						<v-treeview
							selectable
							open-on-click
							selected-color="indigo"	
							:open="['DW']"
							:items="items"
							v-model="conocimientosSeleccionados"
						></v-treeview>
        	</v-card-text>
      	</v-col>-->

			<!--<v-divider vertical></v-divider>-->

      	<!--<v-col
					cols="12"
					lg="4"
					md="5"
					sm="6"
				>
        	<v-card-text ssssssssssss_style="max-width:30em;">

						<v-list class="transparent">
							<v-list-item
								v-for="(c, i) in conocimientos" :key="i"
								vvvvvvvvvvv-show="c.visible"
								dense
								class="cncmnto"
								style="border-bottom: 1px solid #EEEEEE"
							>
								<v-list-item-title><v-icon>{{ c.icono }}</v-icon> {{ c.nombre.es }}</v-list-item-title>

								<v-rating
									:value="c.evaluación"
									color="amber"
									background-color="grey"
									dense
									half-increments
									readonly
									size="14"
									class="text-right"
								></v-rating>
							</v-list-item>
						</v-list>
        	</v-card-text>
      	</v-col>-->

				<!--<v-col
					cols="12"
					lg="4"
					md="5"
					sm="6"
				>
				</v-col>-->

			<!--</v-row>-->


			<div class="d-flex flex-wrap justify-space-between">
				<v-list-item
					v-for="(c, i) in conocimientos" :key="i"
					dense
					class="mx-3"
				>
					<v-list-item-title><v-icon>{{ c.icono }}</v-icon> {{ idioma === 'es' ? c.nombre.es : c.nombre.en }}</v-list-item-title>

					<v-rating
						:value="c.evaluación"
						color="amber"
						background-color="grey"
						dense
						half-increments
						readonly
						size="14"
						class="text-right"
					></v-rating>
				</v-list-item>
			</div>

	</div>
</template>

<script>
export default {
	data: () => ({
		/*conocimientosSeleccionados: ['DW_ME', 'DW_P', 'DW_EI',],
		items: [
			{
				id: 'DW',
				name: 'Web development',
				nombre: 'Desarrollo web',
				children: [
					{ id: 'DW_ME', name: 'Layout and style', nombre: 'Maquetado y estilo' },
					{ id: 'DW_P', name: 'Programming', nombre: 'Programación' },
					{ id: 'DW_IU', name: 'Utils and integrations', nombre: 'Integraciones y utilidades' },
					{ id: 'DW_EI', name: 'Industry standards', nombre: 'Estándares de la industria' },
					{ id: 'DW_HS', name: 'Tools and services', nombre: 'Herramientas y servicios' },
				],
			},
			{
				id: 'LP',
				name: 'Programming languages',
				nombre: 'Lenguajes de programación',
			},
			{
				id: 'BD',
				name: 'Databases',
				nombre: 'Bases de datos',
				children: [
					{ id: 'BD_SQL', name: 'SQL' },
					{ id: 'BD_NoSQL', name: 'NoSQL' },
				],
			},
		],*/
		conocimientos: [
			{
				visible: false,
				nombre: {
					es: 'CSS(3)',
					en: 'CSS(3)'
				},
				icono: 'mdi-language-css3',
				evaluación: 4.5,
				categorías: ['DW_ME']
			},
			{
				visible: false,
				nombre: {
					es: 'HTML(5)',
					en: 'HTML(5)'
				},
				icono: 'mdi-language-html5',
				evaluación: 4.5,
				categorías: ['DW_ME']
			},
			{
				visible: false,
				nombre: {
					es: 'Javascript',
					en: 'Javascript'
				},
				icono: 'mdi-language-javascript',
				evaluación: 5,
				categorías: ['DW_P', 'LP']
			},
			{
				visible: false,
				nombre: {
					es: 'Vue',
					en: 'Vue'
				},
				icono: 'mdi-vuejs',
				evaluación: 5,
				categorías: ['DW_P']
			},
			{
				visible: false,
				nombre: {
					es: 'Vuetify',
					en: 'Vuetify'
				},
				icono: 'mdi-vuetify',
				evaluación: 5,
				categorías: ['DW_ME']
			},
			{
				visible: false,
				nombre: {
					es: 'Angular',
					en: 'Angular'
				},
				icono: 'mdi-angular',
				evaluación: 2,
				categorías: ['DW_P']
			},
			{
				visible: false,
				nombre: {
					es: 'Node.js',
					en: 'Node.js'
				},
				icono: 'mdi-nodejs',
				evaluación: 5,
				categorías: ['DW_P']
			},
			{
				visible: false,
				nombre: {
					es: 'JQuery',
					en: 'JQuery'
				},
				icono: 'mdi-jquery',
				evaluación: 5,
				categorías: ['DW_P']
			},
			/*{
				visible: false,
				nombre: {
					es: 'Bootstrap',
					en: 'Bootstrap'
				},
				icono: 'mdi-bootstrap',
				evaluación: 5,
				categorías: ['DW_ME']
			},
			{
				visible: false,
				nombre: {
					es: 'Foundation',
					en: 'Foundation'
				},
				icono: 'mdi-language-css3',
				evaluación: 4,
				categorías: ['DW_ME']
			},*/
			{
				visible: false,
				nombre: {
					es: 'Websockets',
					en: 'Websockets'
				},
				icono: 'mdi-webhook',
				evaluación: 4.5,
				categorías: ['DW_P', 'DW_EI']
			},
			{
				visible: false,
				nombre: {
					es: 'Google Maps',
					en: 'Google Maps'
				},
				icono: 'mdi-google-maps',
				evaluación: 4.5,
				categorías: ['DW_IU']
			},
			{
				visible: false,
				nombre: {
					es: 'Firebase Firestore',
					en: 'Firebase Firestore'
				},
				icono: 'mdi-firebase',
				evaluación: 5,
				categorías: ['BD_NoSQL', 'DW_IU']
			},
			{
				visible: false,
				nombre: {
					es: 'Firebase Auth',
					en: 'Firebase Auth'
				},
				icono: 'mdi-firebase',
				evaluación: 5,
				categorías: ['DW_IU']
			},
			{
				visible: false,
				nombre: {
					es: 'Firebase Storage',
					en: 'Firebase Storage'
				},
				icono: 'mdi-firebase',
				evaluación: 5,
				categorías: ['DW_IU']
			},
			{
				visible: false,
				nombre: {
					es: 'Firebase Hosting',
					en: 'Firebase Hosting'
				},
				icono: 'mdi-firebase',
				evaluación: 5,
				categorías: ['DW_HS']
			},
			{
				visible: false,
				nombre: {
					es: 'Web Storage',
					en: 'Web Storage'
				},
				icono: 'mdi-language-html5',
				evaluación: 5,
				categorías: ['DW_EI']
			},
			{
				visible: false,
				nombre: {
					es: 'JSON',
					en: 'JSON'
				},
				icono: 'mdi-json',
				evaluación: 5,
				categorías: ['DW_EI']
			},
			{
				visible: false,
				nombre: {
					es: 'RESTful',
					en: 'RESTful'
				},
				icono: 'mdi-api',
				evaluación: 5,
				categorías: ['DW_EI']
			},
			{
				visible: false,
				nombre: {
					es: 'Git',
					en: 'Git'
				},
				icono: 'mdi-git',
				evaluación: 4,
				categorías: ['DW_EI', 'DW_HS']
			},
			{
				visible: false,
				nombre: {
					es: 'Go',
					en: 'Go'
				},
				icono: 'mdi-language-go',
				evaluación: 5,
				categorías: ['LP']
			},
			{
				visible: false,
				nombre: {
					es: 'PHP',
					en: 'PHP'
				},
				icono: 'mdi-language-php',
				evaluación: 5,
				categorías: ['LP']
			},
			{
				visible: false,
				nombre: {
					es: 'Python',
					en: 'Python'
				},
				icono: 'mdi-language-python',
				evaluación: 3.5,
				categorías: ['LP']
			},
			{
				visible: false,
				nombre: {
					es: 'PostgreSQL',
					en: 'PostgreSQL'
				},
				icono: 'mdi-database',
				evaluación: 5,
				categorías: ['BD_SQL']
			},
			{
				visible: false,
				nombre: {
					es: 'MySQL',
					en: 'MySQL'
				},
				icono: 'mdi-database',
				evaluación: 4.5,
				categorías: ['BD_SQL']
			},
			{
				visible: false,
				nombre: {
					es: 'MongoDB',
					en: 'MongoDB'
				},
				icono: 'mdi-database',
				evaluación: 3.5,
				categorías: ['BD_NoSQL']
			},
			/*{
				visible: false,
				nombre: {
					es: 'AWS',
					en: 'AWS'
				},
				icono: 'mdi-aws',
				evaluación: 2.5,
				categorías: ['DW_HS']
			},*/
		]
	}),
	props: ['idioma'],
	watch: {
		/*'conocimientosSeleccionados': {
			handler: function (cncmnts) {
				console.log('ssssss', cncmnts)
				this.actualizarConocimientosVisibles()
			},
			deep: true
		}*/
	},
	created: function() {
		//this.actualizarConocimientosVisibles()
	},
	methods: {
		/*actualizarConocimientosVisibles: function() {
			for (let i in this.conocimientos) {
				if (this.$root.intersección(this.conocimientosSeleccionados, this.conocimientos[i].categorías).length > 0) {
					this.conocimientos[i].visible = true
				} else {
					this.conocimientos[i].visible = false
				}
			}
		}*/
	}
}
</script>

<style scoped>

.v-list-item {
	flex-basis: 340px !important;
	flex-shrink: 1.5;
	flex-grow: 1.5;
	padding: 6px;
	border-bottom: 1px solid #CCC;
}

.v-list-item:hover {
	background-color: #EEEEEE;
}

</style>