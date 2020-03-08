<template>
  <v-app>
    <v-container class="px-xs-0 px-sm-2 px-md-6 px-lg-12 py-xs-0 py-sm-2 py-md-6 py-lg-12">
			<v-row>
				<v-col>
					<Introduccion :idioma="$root.idioma" class="com" id="intro"></Introduccion>
				</v-col>
			</v-row>
			<!--<hr>-->
			<v-row>
				<v-col>
					<Desarrollador :idioma="$root.idioma" class="com"></Desarrollador>
				</v-col>
			</v-row>
    </v-container>
  </v-app>
</template>

<script>
import Introduccion from './components/Introduccion';
import Desarrollador from './components/Desarrollador';

export default {
  name: 'App',

  components: {
		Introduccion,
		Desarrollador
  },
  data: () => ({
    //
  }),
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