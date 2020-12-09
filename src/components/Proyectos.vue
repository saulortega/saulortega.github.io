<template>
	<div>

		<br>
		<h1 v-if="idioma === 'es'" lang="es" class="text-center font-weight-light">Cosas que he hecho</h1>
		<h1 v-if="idioma === 'en'" lang="en" class="text-center font-weight-light">Things I've done</h1>
		<br>

		<v-carousel :height="alto" v-model="seleccionado">
    <v-carousel-item
      v-for="(p, i) in cosasQueHeHecho"
      :key="`pycto-${i}`"
    >
      <v-sheet
        :color="p.color"
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
					<div class="pa-12">
						<div>
							<v-icon style="font-size: 48px">{{ p.ícono }}</v-icon>
						</div>
						<div class="display-3">
							{{ p.título[idioma] }}
						</div>
						<div
							class="pa-12"
							:style="{'font-size': letraDescripción}"
						>
							{{ p.descripción[idioma] }}
						</div>
					</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

	</div>
</template>


<script>
export default {
	data: () => ({
		seleccionado: 0,
		cosasQueHeHecho: [
			{
				color: 'primary',
				ícono: 'mdi-web',
				título: {
					es: 'Constructor de sitios web',
					en: 'Websites Builder',
				},
				descripción: {
					es: 'Desarrollé un proyecto mediante el cual se ofrece un servicio de construcción de sitios web de manera gráfica sin requerir conocimientos de desarrollo (al estilo de Google Sites o Wix). Este servicio además de construir el sitio web, lo aloja en un servidor web configurado con su dominio asociado, quedando inmediatamente accesible al público en internet. Desarrollado en Go y Node.js en el backend y en Vue en el frontend, haciendo uso de recursos de Firebase.',
					en: 'I developed a project through which a website building service is offered graphically without requiring development knowledge (like Google Sites or Wix). This service in addition to building the website, hosts it on a web server configured with its domain, making it immediately accessible to the public on the Internet. Developed using Go and Node.js on the backend and using Vue on the frontend, making use of firebase resources',
				}
			},
			{
				color: 'green',
				ícono: 'mdi-store',
				título: {
					es: 'Punto de venta y tienda en línea',
					en: 'Point Of Sale and Online Store',
				},
				descripción: {
					es: 'Desarrollé un sistema de inventario y gestión de productos a partir del cual nacen dos soluciones de uso: Un punto de venta y una tienda en línea. El punto de venta incluye todo el ciclo de generación de la compra desde la selección de productos hasta la impresión de la factura. La tienda en línea incluye una biblioteca de integración para su uso en cualquier sitio web, e incluye integración con pasarela de pago. Desarrollado en Node.js y Vue, haciendo uso de recursos de Firebase.',
					en: 'I developed an inventory and product management system from which two use solutions are born: A point of sale and an online store. The point of sale includes the entire purchase generation cycle from the selection of products to the printing of the invoice. The online store includes an integration library for use on any website, and includes payment gateway integration. Developed using Node.js and Vue, making use of Firebase resources.',
				}
			},
			{
				color: 'orange darken-2',
				ícono: 'mdi-video',
				título: {
					es: 'Videollamadas',
					en: 'Video Chat',
				},
				descripción: {
					es: 'Desarrollé un sistema de videollamadas en línea haciendo uso de WebRTC, al estilo de Google Meet. Desarrollado en Node.js y estándares de Custom Elements nativos de HTML, haciendo uso de recursos de Firebase.',
					en: 'I developed an online video chat system using WebRTC, similar to Google Meet. Developed using Node.js and native HTML Custom Elements standards, making use of Firebase resources.',
				}
			},
			{
				color: 'deep-purple darken-2',
				ícono: 'mdi-cellphone',
				título: {
					es: 'Aplicación móvil de sondeos y encuestas',
					en: 'Surveys and polls App',
				},
				descripción: {
					es: 'Dirigí un proyecto para el desarrollo de la aplicación móvil Wokky. Wokky es una aplicación móvil mediante la cual los usuarios contestan simples sondeos o elaboradas encuestas y por ello ganan dinero o puntos redimibles. Este proyecto lo dirigí y desarrollé en tres frentes: La aplicación móvil (tanto Android como iOS), el backoffice para la administración, y la lógica de backend. Las aplicaciones son nativas, el backoffice está desarrollado en Vue, y en el backend se usó Node.js en microservicios de Firebase.',
					en: 'I led a project for the development of the Wokky mobile application. Wokky is a mobile application through which users answer simple polls or elaborate surveys and therefore earn money or redeemable points. I led and developed this project on three fronts: The mobile application (both Android and iOS), the backoffice for administration, and the backend logic. The applications are native, the backoffice is developed using Vue, and the backend used Node.js in Firebase microservices.',
				}
			},
		],
	}),
	props: ['idioma'],
	computed: {
		alto() {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs': return 800
				case 'sm': return 700
				default: return 500
			}
		},
		letraDescripción() {
			let l = '24px'
			if (this.$vuetify.breakpoint.name === 'xs') {
				l = '18px'
			} else if (this.$vuetify.breakpoint.name === 'sm') {
				l = '22px'
			}

			return l
		}
	},
	methods: {
		//
	}
}

</script>
