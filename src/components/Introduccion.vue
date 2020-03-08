<template>
	<div>

		<div class="presentacion">
			<img src="@/assets/yo.png" class="foto">
			<h1 class="font-weight-light grey--text text--darken-3">Saúl Ortega</h1>
			<p class="grey--text text--darken-1 subtitle-1">Soy desarrollador de software especializado en Vue para entornos web, y en Go del lado del servidor. Desarrollo aplicaciones web con estándares de la W3C como Websockets, Web storage, o IndexedDB para crear aplicaciones en tiempo real y con funcionalidad sin conexión a internet. Me gusta construir APIs, desarrollar cosas desde cero, y obtener nuevos retos.</p>
			<p class="grey--text text--darken-2 body-2 font-italic"><strong>Ubicación:</strong> Bogotá, Colombia</p>
			<p class="grey--text text--darken-2 body-2 font-italic"><strong>Edad:</strong> {{ edad }} años</p>
			<p>
				<a href="https://www.github.com/saulortega" target="_blank" title="GitHub">
						<v-icon>mdi-git</v-icon>
				</a>
				&nbsp;&nbsp;&nbsp;
				<a href="https://www.linkedin.com/in/sa%C3%BAl-ortega/" target="_blank" title="Linkedin">
						<v-icon>mdi-linkedin</v-icon>
				</a>
			</p>
		</div>

	</div>
</template>

<script>
export default {
	data: () => ({
		edad: Math.floor(((new Date()) - (new Date(1989, 4, 23)).getTime()) / 1000 / 60 / 60 / 24 / 365)
	}),
	props: ['idioma'],
	methods: {
		//
	}
}
</script>

<style scoped>

.foto {
	padding: 4px;
	border: 1px solid #EEE;
	border-radius: 50% !important;
	height: 110px;
	width: 110px;
}

.presentacion {
	padding: 10px;
	text-align: center;
}

.presentacion a {
	text-decoration: none !important;
}

.v-icon.mdi-linkedin:hover {
	color: #0077b5;
	border-color: #0077b5;
}

</style>