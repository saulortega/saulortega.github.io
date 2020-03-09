<template>
	<div>

		<br>
		<h1 v-if="idioma === 'es'" lang="es" class="text-center font-weight-light">Experiencia</h1>
		<h1 v-if="idioma === 'en'" lang="en" class="text-center font-weight-light">Experience</h1>
		<br>

		<v-timeline
      :align-top="$vuetify.breakpoint.smAndDown"
			:dense="$vuetify.breakpoint.smAndDown"
    >
      <v-timeline-item
        v-for="(e, i) in experiencias"
        :key="i"
				color="teal"
				small
      >
        <span slot="opposite" :lang="idioma">{{ e.periodo[idioma] }}</span>
        <v-card class="text-left elevation-2" :lang="idioma">
					<v-card-text v-if="$vuetify.breakpoint.smAndDown" class="pb-0 font-italic font-weight-light">
						<span>{{ e.periodo[idioma] }}</span>
					</v-card-text>
          <v-card-title class="font-weight-regular">{{ e.título[idioma] }}</v-card-title>
          <v-card-text>
            {{ e.descripción[idioma] }}
          </v-card-text>
					<v-divider></v-divider>
					<v-card-text>
						<span><strong>{{ idioma === 'es' ? 'Cliente' : 'Client' }}:</strong> {{ e.cliente.nombre }} - <a :href="e.cliente.url" target="_blank">{{ e.cliente.url }}</a></span>
					</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
	</div>
</template>


<script>
export default {
	data: () => ({
		experiencias: [
			{
				periodo: {
					es: 'Julio de 2018 a la actualidad',
					en: 'Jul 2018 - current'
				},
				título: {
					es: 'Director de desarrollo',
					en: 'Development Head'
				},
				descripción: {
					es: 'Actualmente estoy dirigiendo el equipo de desarrollo de la aplicación Wokky. Wokky es una aplicación móvil mediante la cual los usuarios contestan simples sondeos o elaboradas encuestas y por ello ganan dinero o puntos redimibles. Este proyecto lo estoy dirigiendo en tres frentes: La aplicación móvil (tanto Android como iOS), el backoffice para la administración, y la lógica de backend. Yo mismo contribuyo también en el desarrollo del proyecto. Las aplicaciones son nativas, el backoffice está desarrollado en Vue, y en el backend usamos Node.js en microservicios de Firebase.',
					en: 'I am currently running the Wokky application development team. Wokky is a mobile application through which users answer simple polls or elaborate surveys and therefore earn money or redeemable points. I am directing this project on three fronts: The mobile application (both Android and iOS), the back office for administration, and the backend logic. I myself also contribute to the development of the project. The applications are native, the backoffice is written in Vue, and in the backend we use Node.js in Firebase microservices.'
				},
				cliente: {
					nombre: 'Datexco',
					url: 'http://datexco.com'
				}
			},
			{
				periodo: {
					es: 'Noviembre de 2017 a julio de 2018',
					en: 'Nov 2017 - Jul 2018'
				},
				título: {
					es: 'Desarrollador Senior Fullstack',
					en: 'Senior Fullstack Developer'
				},
				descripción: {
					es: 'Desarrollé desde cero el sistema Waygis, una plataforma para la gestión de flotas de vehículos con seguimiento en tiempo real mediante GPS y administración de la flota. Esta plataforma fue desarrollada en Go en el backend y Vue en el frontend. Para ello fue necesario desarrollar una biblioteca propia que decodifica las tramas de los dispositivos GPS. Se hizo uso de Leaflet en el frontend para el manejo de mapas interactivos.',
					en: 'I developed the Waygis system from scratch, a platform for vehicles fleet management with real-time tracking through GPS. This platform was developed in Go in the backend and Vue in the frontend. For this, it was necessary to develop an own library that decodes the frames of the GPS devices. Leaflet was used in the frontend for interactive map management.'
				},
				cliente: {
					nombre: 'Cubitix',
					url: 'https://cubitix.com'
				}
			},
			{
				periodo: {
					es: 'Noviembre de 2016 a septiembre de 2017',
					en: 'Nov 2016 - Sep 2017'
				},
				título: {
					es: 'Desarrollador Senior',
					en: 'Senior Developer'
				},
				descripción: {
					es: 'Continuación del desarrollo del sistema de gestión de cementerios para los cementerios distritales de Bogotá, así como el desarrollo e integración de un sistema de gestión de funerarias. También desarrollé servicios telefónicos de audiorrespuesta interactiva, y otros desarrollos personalizados en sistemas de call center (Asterisk, Vicidial, IVR interactivos, síntesis de audio).',
					en: 'Continuation of the development of the cemetery management system for the district cemeteries of Bogotá, as well as the development and integration of a funeral management system. I also developed interactive audio response telephone services, and other custom developments in call center systems (Asterisk, Vicidial, interactive IVR, audio synthesis).'
				},
				cliente: {
					nombre: 'Tesacol',
					url: 'https://tesacol.com'
				}
			},
			{
				periodo: {
					es: 'Abril de 2015 a noviembre de 2016',
					en: 'Apr 2015 - Nov 2016'
				},
				título: {
					es: 'Desarrollador',
					en: 'Developer'
				},
				descripción: {
					es: 'Continué con el desarrollo del sistema de información y procesos internos propio de la empresa, escrito en PHP y Javascript. Desarrollé más de 20 módulos nuevos desde cero para nuevas necesidades de la empresa, y participé en la actualización y mejora de otros módulos que habían sido desarrollados en ASP diez años antes.',
					en: 'I continued with the development of the company\'s internal information and processes system, written in PHP and Javascript. I developed more than 20 new modules from scratch for new needs of the company, and participated in the update and improvement of other modules that had been developed in ASP ten years before.'
				},
				cliente: {
					nombre: 'Ingeal',
					url: 'https://ingeal.com'
				}
			},
			{
				periodo: {
					es: 'Febrero de 2013 a abril de 2015',
					en: 'Feb 2013 - Apr 2015'
				},
				título: {
					es: 'Analista de infraestructura',
					en: 'Infraestructure Analyst'
				},
				descripción: {
					es: 'Si bien venía de trabajar en otras áreas de tecnología, aquí empecé a incursionar en el campo del desarrollo. Empecé desarrollando servicios telefónicos de audiorrespuesta interactivos para plantas telefónicas Asterisk mediante su interfaz AGI. También desarrollé scripts que automatizaban tareas de supervisión de servidores Linux integrados con herramientas de supervisión de infraestructura como Zabbix.',
					en: 'Although I came from working in other areas of technology, here I began to enter the field of software development. I started developing interactive audio response telephone services for Asterisk telephone plants through its AGI interface. I also developed scripts that automated monitoring tasks of Linux servers integrated with infrastructure monitoring tools such as Zabbix.'
				},
				cliente: {
					nombre: 'Tesacol',
					url: 'https://tesacol.com'
				}
			}
		]
	}),
	props: ['idioma'],
	methods: {
		//
	}
}
</script>