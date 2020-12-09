<template>
	<div class="text-left">


			<br>
			<h1 v-if="idioma === 'es'" lang="es" class="text-center font-weight-light">Habilidades</h1>
			<h1 v-if="idioma === 'en'" lang="en" class="text-center font-weight-light">Abilities</h1>
			<br>

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
			{
				visible: false,
				nombre: {
					es: 'AWS Lambda',
					en: 'AWS Lambda'
				},
				icono: 'mdi-aws',
				evaluación: 4.5,
				categorías: ['DW_P']
			},
			{
				visible: false,
				nombre: {
					es: 'AWS Dynamo',
					en: 'AWS Dynamo'
				},
				icono: 'mdi-aws',
				evaluación: 4,
				categorías: ['BD_NoSQL']
			},
			{
				visible: false,
				nombre: {
					es: 'AWS Cognito',
					en: 'AWS Cognito'
				},
				icono: 'mdi-aws',
				evaluación: 3.5,
				categorías: ['DW_IU']
			},
			{
				visible: false,
				nombre: {
					es: 'AWS API Gateway',
					en: 'AWS API Gateway'
				},
				icono: 'mdi-aws',
				evaluación: 3.5,
				categorías: ['DW_P']
			},
		]
	}),
	props: ['idioma'],
	methods: {
		//
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