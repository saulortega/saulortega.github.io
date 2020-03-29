<template>
	<div>

		<div class="presentacion" itemscope itemtype="http://schema.org/Person">
			<img src="/img/yo.png" class="foto" itemprop="image">
			<h1 class="font-weight-light grey--text text--darken-3" itemprop="name"><span itemprop="givenName">Saúl</span> <span itemprop="familyName">Ortega</span></h1>

			<p v-if="idioma === 'es'" lang="es" class="grey--text text--darken-1 subtitle-1" itemprop="description">Soy desarrollador de software especializado en Vue para entornos web, y en Go del lado del servidor. Desarrollo aplicaciones web con estándares de la W3C como Websockets, Web storage, o IndexedDB para crear aplicaciones en tiempo real y con funcionalidad sin conexión a internet. Me gusta construir APIs, desarrollar cosas desde cero, y obtener nuevos retos.</p>
			<p v-if="idioma === 'es'" lang="es" class="grey--text text--darken-2 body-2 font-italic">
				<strong>Ubicación: </strong>
				<span itemprop="homeLocation" itemscope itemtype="http://schema.org/Place">
					<span itemscope itemtype="http://schema.org/City"><span itemprop="name">Bogotá</span></span>,
					<span itemscope itemtype="http://schema.org/Country"><span itemprop="name">Colombia</span></span>
				</span>
			</p>
			<p v-if="idioma === 'es'" lang="es" class="grey--text text--darken-2 body-2 font-italic">
				<strong>Edad:</strong> {{ edad }} años
			</p>

			<p v-if="idioma === 'en'" lang="en" class="grey--text text--darken-1 subtitle-1" itemprop="description">I'm a software developer specializing in Vue for web environments, and in Go at server-side. I develop web applications with W3C standards such as Websockets, Web storage, or IndexedDB in order to create realtime and offline web applications. I like to build APIs, develop things from scratch, and get new challenges.</p>
			<p v-if="idioma === 'en'" lang="en" class="grey--text text--darken-2 body-2 font-italic">
				<strong>Location: </strong>
				<span itemprop="homeLocation" itemscope itemtype="http://schema.org/Place">
					<span itemscope itemtype="http://schema.org/City"><span itemprop="name">Bogotá</span></span>,
					<span itemscope itemtype="http://schema.org/Country"><span itemprop="name">Colombia</span></span>
				</span>
			</p>
			<p v-if="idioma === 'en'" lang="en" class="grey--text text--darken-2 body-2 font-italic">
				<strong>Age:</strong> {{ edad }} years old
			</p>

			<p>
				<a href="https://www.github.com/saulortega" target="_blank" title="GitHub" itemprop="url">
						<v-icon>mdi-git</v-icon>
				</a>
				&nbsp;&nbsp;&nbsp;
				<a href="https://www.linkedin.com/in/sa%C3%BAl-ortega/" target="_blank" title="Linkedin" itemprop="url">
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

.v-icon.mdi-git:hover {
	color: black;
	border-color: black;
}

</style>