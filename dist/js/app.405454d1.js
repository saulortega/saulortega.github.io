(function(e){function a(a){for(var o,s,r=a[0],l=a[1],c=a[2],u=0,m=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(a);while(m.length)m.shift()();return n.push.apply(n,c||[]),t()}function t(){for(var e,a=0;a<n.length;a++){for(var t=n[a],o=!0,r=1;r<t.length;r++){var l=t[r];0!==i[l]&&(o=!1)}o&&(n.splice(a--,1),e=s(s.s=t[0]))}return e}var o={},i={app:0},n=[];function s(a){if(o[a])return o[a].exports;var t=o[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=o,s.d=function(e,a,t){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(t,o,function(a){return e[a]}.bind(null,o));return t},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=a,r=r.slice();for(var c=0;c<r.length;c++)a(r[c]);var d=l;n.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},5581:function(e,a,t){},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-app",[t("v-container",{staticClass:"px-xs-0 px-sm-2 px-md-6 px-lg-12 py-xs-0 py-sm-2"},[t("v-row",[t("v-col",[t("v-row",{attrs:{justify:"end"}},[t("div",{staticClass:"pr-3"},[t("v-select",{staticClass:"pa-0 ma-0",staticStyle:{"max-width":"12em"},attrs:{items:[{v:"en",t:"English"},{v:"es",t:"Español"}],"item-text":"t","item-value":"v","menu-props":"auto",label:"Language/Idioma","hide-details":"","prepend-icon":"mdi-translate","single-line":""},model:{value:e.idioma,callback:function(a){e.idioma=a},expression:"idioma"}})],1)])],1)],1),t("v-row",{directives:[{name:"show",rawName:"v-show",value:e.idioma,expression:"idioma"}]},[t("v-col",[t("Introduccion",{staticClass:"com",attrs:{idioma:e.idioma,id:"intro"}})],1)],1),t("v-divider"),t("v-row",{directives:[{name:"show",rawName:"v-show",value:e.idioma,expression:"idioma"}]},[t("v-col",[t("Habilidades",{staticClass:"com",attrs:{idioma:e.idioma}})],1)],1),t("v-divider"),t("v-row",{directives:[{name:"show",rawName:"v-show",value:e.idioma,expression:"idioma"}]},[t("v-col",[t("Proyectos",{staticClass:"com",attrs:{idioma:e.idioma}})],1)],1),t("v-divider"),t("v-row",{directives:[{name:"show",rawName:"v-show",value:e.idioma,expression:"idioma"}]},[t("v-col",[t("Experiencia",{staticClass:"com",attrs:{idioma:e.idioma}})],1)],1)],1)],1)},n=[],s=(t("a4d3"),t("e01a"),t("d28b"),t("d3b7"),t("ac1f"),t("3ca3"),t("1276"),t("ddb0"),function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"presentacion",attrs:{itemscope:"",itemtype:"http://schema.org/Person"}},[t("img",{staticClass:"foto",attrs:{src:"/img/yo.png",itemprop:"image"}}),e._m(0),"es"===e.idioma?t("p",{staticClass:"grey--text text--darken-1 subtitle-1",attrs:{lang:"es",itemprop:"description"}},[e._v("Soy desarrollador de software especializado en Vue para entornos web, y en Go del lado del servidor. Desarrollo aplicaciones web con estándares de la W3C como Websockets, Web storage, o IndexedDB para crear aplicaciones en tiempo real y con funcionalidad sin conexión a internet. Me gusta construir APIs, desarrollar cosas desde cero, y obtener nuevos retos.")]):e._e(),"es"===e.idioma?t("p",{staticClass:"grey--text text--darken-2 body-2 font-italic",attrs:{lang:"es"}},[t("strong",[e._v("Ubicación: ")]),e._m(1)]):e._e(),"es"===e.idioma?t("p",{staticClass:"grey--text text--darken-2 body-2 font-italic",attrs:{lang:"es"}},[t("strong",[e._v("Edad:")]),e._v(" "+e._s(e.edad)+" años ")]):e._e(),"en"===e.idioma?t("p",{staticClass:"grey--text text--darken-1 subtitle-1",attrs:{lang:"en",itemprop:"description"}},[e._v("I'm a software developer specializing in Vue for web environments, and in Go at server-side. I develop web applications with W3C standards such as Websockets, Web storage, or IndexedDB in order to create realtime and offline web applications. I like to build APIs, develop things from scratch, and get new challenges.")]):e._e(),"en"===e.idioma?t("p",{staticClass:"grey--text text--darken-2 body-2 font-italic",attrs:{lang:"en"}},[t("strong",[e._v("Location: ")]),e._m(2)]):e._e(),"en"===e.idioma?t("p",{staticClass:"grey--text text--darken-2 body-2 font-italic",attrs:{lang:"en"}},[t("strong",[e._v("Age:")]),e._v(" "+e._s(e.edad)+" years old ")]):e._e(),t("p",[t("a",{attrs:{href:"https://www.github.com/saulortega",target:"_blank",title:"GitHub",itemprop:"url"}},[t("v-icon",[e._v("mdi-git")])],1),e._v(" "),t("a",{attrs:{href:"https://www.linkedin.com/in/sa%C3%BAl-ortega/",target:"_blank",title:"Linkedin",itemprop:"url"}},[t("v-icon",[e._v("mdi-linkedin")])],1)])])])}),r=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h1",{staticClass:"font-weight-light grey--text text--darken-3",attrs:{itemprop:"name"}},[t("span",{attrs:{itemprop:"givenName"}},[e._v("Saúl")]),e._v(" "),t("span",{attrs:{itemprop:"familyName"}},[e._v("Ortega")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",{attrs:{itemprop:"homeLocation",itemscope:"",itemtype:"http://schema.org/Place"}},[t("span",{attrs:{itemscope:"",itemtype:"http://schema.org/City"}},[t("span",{attrs:{itemprop:"name"}},[e._v("Bogotá")])]),e._v(", "),t("span",{attrs:{itemscope:"",itemtype:"http://schema.org/Country"}},[t("span",{attrs:{itemprop:"name"}},[e._v("Colombia")])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",{attrs:{itemprop:"homeLocation",itemscope:"",itemtype:"http://schema.org/Place"}},[t("span",{attrs:{itemscope:"",itemtype:"http://schema.org/City"}},[t("span",{attrs:{itemprop:"name"}},[e._v("Bogotá")])]),e._v(", "),t("span",{attrs:{itemscope:"",itemtype:"http://schema.org/Country"}},[t("span",{attrs:{itemprop:"name"}},[e._v("Colombia")])])])}],l={data:function(){return{edad:Math.floor((new Date-new Date(1989,4,23).getTime())/1e3/60/60/24/365)}},props:["idioma"],methods:{}},c=l,d=(t("cc47"),t("2877")),u=Object(d["a"])(c,s,r,!1,null,"3574aa0b",null),m=u.exports,p=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"text-left"},[t("br"),"es"===e.idioma?t("h1",{staticClass:"text-center font-weight-light",attrs:{lang:"es"}},[e._v("Habilidades")]):e._e(),"en"===e.idioma?t("h1",{staticClass:"text-center font-weight-light",attrs:{lang:"en"}},[e._v("Abilities")]):e._e(),t("br"),t("div",{staticClass:"d-flex flex-wrap justify-space-between"},e._l(e.conocimientos,(function(a,o){return t("v-list-item",{key:o,staticClass:"mx-3",attrs:{dense:""}},[t("v-list-item-title",[t("v-icon",[e._v(e._s(a.icono))]),e._v(" "+e._s("es"===e.idioma?a.nombre.es:a.nombre.en))],1),t("v-rating",{staticClass:"text-right",attrs:{value:a.evaluación,color:"amber","background-color":"grey",dense:"","half-increments":"",readonly:"",size:"14"}})],1)})),1)])},v=[],g={data:function(){return{conocimientos:[{visible:!1,nombre:{es:"CSS(3)",en:"CSS(3)"},icono:"mdi-language-css3","evaluación":4.5,"categorías":["DW_ME"]},{visible:!1,nombre:{es:"HTML(5)",en:"HTML(5)"},icono:"mdi-language-html5","evaluación":4.5,"categorías":["DW_ME"]},{visible:!1,nombre:{es:"Javascript",en:"Javascript"},icono:"mdi-language-javascript","evaluación":5,"categorías":["DW_P","LP"]},{visible:!1,nombre:{es:"Vue",en:"Vue"},icono:"mdi-vuejs","evaluación":5,"categorías":["DW_P"]},{visible:!1,nombre:{es:"Vuetify",en:"Vuetify"},icono:"mdi-vuetify","evaluación":5,"categorías":["DW_ME"]},{visible:!1,nombre:{es:"Angular",en:"Angular"},icono:"mdi-angular","evaluación":2,"categorías":["DW_P"]},{visible:!1,nombre:{es:"Node.js",en:"Node.js"},icono:"mdi-nodejs","evaluación":5,"categorías":["DW_P"]},{visible:!1,nombre:{es:"JQuery",en:"JQuery"},icono:"mdi-jquery","evaluación":5,"categorías":["DW_P"]},{visible:!1,nombre:{es:"Websockets",en:"Websockets"},icono:"mdi-webhook","evaluación":4.5,"categorías":["DW_P","DW_EI"]},{visible:!1,nombre:{es:"Google Maps",en:"Google Maps"},icono:"mdi-google-maps","evaluación":4.5,"categorías":["DW_IU"]},{visible:!1,nombre:{es:"Firebase Firestore",en:"Firebase Firestore"},icono:"mdi-firebase","evaluación":5,"categorías":["BD_NoSQL","DW_IU"]},{visible:!1,nombre:{es:"Firebase Auth",en:"Firebase Auth"},icono:"mdi-firebase","evaluación":5,"categorías":["DW_IU"]},{visible:!1,nombre:{es:"Firebase Storage",en:"Firebase Storage"},icono:"mdi-firebase","evaluación":5,"categorías":["DW_IU"]},{visible:!1,nombre:{es:"Firebase Hosting",en:"Firebase Hosting"},icono:"mdi-firebase","evaluación":5,"categorías":["DW_HS"]},{visible:!1,nombre:{es:"Web Storage",en:"Web Storage"},icono:"mdi-language-html5","evaluación":5,"categorías":["DW_EI"]},{visible:!1,nombre:{es:"JSON",en:"JSON"},icono:"mdi-json","evaluación":5,"categorías":["DW_EI"]},{visible:!1,nombre:{es:"RESTful",en:"RESTful"},icono:"mdi-api","evaluación":5,"categorías":["DW_EI"]},{visible:!1,nombre:{es:"Git",en:"Git"},icono:"mdi-git","evaluación":4,"categorías":["DW_EI","DW_HS"]},{visible:!1,nombre:{es:"Go",en:"Go"},icono:"mdi-language-go","evaluación":5,"categorías":["LP"]},{visible:!1,nombre:{es:"PHP",en:"PHP"},icono:"mdi-language-php","evaluación":5,"categorías":["LP"]},{visible:!1,nombre:{es:"Python",en:"Python"},icono:"mdi-language-python","evaluación":3.5,"categorías":["LP"]},{visible:!1,nombre:{es:"PostgreSQL",en:"PostgreSQL"},icono:"mdi-database","evaluación":5,"categorías":["BD_SQL"]},{visible:!1,nombre:{es:"MySQL",en:"MySQL"},icono:"mdi-database","evaluación":4.5,"categorías":["BD_SQL"]},{visible:!1,nombre:{es:"MongoDB",en:"MongoDB"},icono:"mdi-database","evaluación":3.5,"categorías":["BD_NoSQL"]},{visible:!1,nombre:{es:"AWS Lambda",en:"AWS Lambda"},icono:"mdi-aws","evaluación":4.5,"categorías":["DW_P"]},{visible:!1,nombre:{es:"AWS Dynamo",en:"AWS Dynamo"},icono:"mdi-aws","evaluación":4,"categorías":["BD_NoSQL"]},{visible:!1,nombre:{es:"AWS Cognito",en:"AWS Cognito"},icono:"mdi-aws","evaluación":3.5,"categorías":["DW_IU"]},{visible:!1,nombre:{es:"AWS API Gateway",en:"AWS API Gateway"},icono:"mdi-aws","evaluación":3.5,"categorías":["DW_P"]}]}},props:["idioma"],methods:{}},b=g,f=(t("6ce7"),Object(d["a"])(b,p,v,!1,null,"0c1d3e8c",null)),h=f.exports,y=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("br"),"es"===e.idioma?t("h1",{staticClass:"text-center font-weight-light",attrs:{lang:"es"}},[e._v("Cosas que he hecho")]):e._e(),"en"===e.idioma?t("h1",{staticClass:"text-center font-weight-light",attrs:{lang:"en"}},[e._v("Things I've done")]):e._e(),t("br"),t("v-carousel",{attrs:{height:e.alto},model:{value:e.seleccionado,callback:function(a){e.seleccionado=a},expression:"seleccionado"}},e._l(e.cosasQueHeHecho,(function(a,o){return t("v-carousel-item",{key:"pycto-"+o},[t("v-sheet",{attrs:{color:a.color,height:"100%",tile:""}},[t("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[t("div",{staticClass:"pa-12"},[t("div",[t("v-icon",{staticStyle:{"font-size":"48px"}},[e._v(e._s(a.ícono))])],1),t("div",{staticClass:"display-3"},[e._v(" "+e._s(a.título[e.idioma])+" ")]),t("div",{staticClass:"pa-12",style:{"font-size":e.letraDescripción}},[e._v(" "+e._s(a.descripción[e.idioma])+" ")])])])],1)],1)})),1)],1)},w=[],_=(t("b0c0"),{data:function(){return{seleccionado:0,cosasQueHeHecho:[{color:"primary","ícono":"mdi-web","título":{es:"Constructor de sitios web",en:"Websites Builder"},"descripción":{es:"Desarrollé un proyecto mediante el cual se ofrece un servicio de construcción de sitios web de manera gráfica sin requerir conocimientos de desarrollo (al estilo de Google Sites o Wix). Este servicio además de construir el sitio web, lo aloja en un servidor web configurado con su dominio asociado, quedando inmediatamente accesible al público en internet. Desarrollado en Go y Node.js en el backend y en Vue en el frontend, haciendo uso de recursos de Firebase.",en:"I developed a project through which a website building service is offered graphically without requiring development knowledge (like Google Sites or Wix). This service in addition to building the website, hosts it on a web server configured with its domain, making it immediately accessible to the public on the Internet. Developed using Go and Node.js on the backend and using Vue on the frontend, making use of firebase resources"}},{color:"green","ícono":"mdi-store","título":{es:"Punto de venta y tienda en línea",en:"Point Of Sale and Online Store"},"descripción":{es:"Desarrollé un sistema de inventario y gestión de productos a partir del cual nacen dos soluciones de uso: Un punto de venta y una tienda en línea. El punto de venta incluye todo el ciclo de generación de la compra desde la selección de productos hasta la impresión de la factura. La tienda en línea incluye una biblioteca de integración para su uso en cualquier sitio web, e incluye integración con pasarela de pago. Desarrollado en Node.js y Vue, haciendo uso de recursos de Firebase.",en:"I developed an inventory and product management system from which two use solutions are born: A point of sale and an online store. The point of sale includes the entire purchase generation cycle from the selection of products to the printing of the invoice. The online store includes an integration library for use on any website, and includes payment gateway integration. Developed using Node.js and Vue, making use of Firebase resources."}},{color:"orange darken-2","ícono":"mdi-video","título":{es:"Videollamadas",en:"Video Chat"},"descripción":{es:"Desarrollé un sistema de videollamadas en línea haciendo uso de WebRTC, al estilo de Google Meet. Desarrollado en Node.js y estándares de Custom Elements nativos de HTML, haciendo uso de recursos de Firebase.",en:"I developed an online video chat system using WebRTC, similar to Google Meet. Developed using Node.js and native HTML Custom Elements standards, making use of Firebase resources."}},{color:"deep-purple darken-2","ícono":"mdi-cellphone","título":{es:"Aplicación móvil de sondeos y encuestas",en:"Surveys and polls App"},"descripción":{es:"Dirigí un proyecto para el desarrollo de la aplicación móvil Wokky. Wokky es una aplicación móvil mediante la cual los usuarios contestan simples sondeos o elaboradas encuestas y por ello ganan dinero o puntos redimibles. Este proyecto lo dirigí y desarrollé en tres frentes: La aplicación móvil (tanto Android como iOS), el backoffice para la administración, y la lógica de backend. Las aplicaciones son nativas, el backoffice está desarrollado en Vue, y en el backend se usó Node.js en microservicios de Firebase.",en:"I led a project for the development of the Wokky mobile application. Wokky is a mobile application through which users answer simple polls or elaborate surveys and therefore earn money or redeemable points. I led and developed this project on three fronts: The mobile application (both Android and iOS), the backoffice for administration, and the backend logic. The applications are native, the backoffice is developed using Vue, and the backend used Node.js in Firebase microservices."}}]}},props:["idioma"],computed:{alto:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 800;case"sm":return 700;default:return 500}},"letraDescripción":function(){var e="24px";return"xs"===this.$vuetify.breakpoint.name?e="18px":"sm"===this.$vuetify.breakpoint.name&&(e="22px"),e}},methods:{}}),k=_,x=Object(d["a"])(k,y,w,!1,null,null,null),S=x.exports,D=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("br"),"es"===e.idioma?t("h1",{staticClass:"text-center font-weight-light",attrs:{lang:"es"}},[e._v("Experiencia")]):e._e(),"en"===e.idioma?t("h1",{staticClass:"text-center font-weight-light",attrs:{lang:"en"}},[e._v("Experience")]):e._e(),t("br"),t("v-timeline",{attrs:{"align-top":e.$vuetify.breakpoint.smAndDown,dense:e.$vuetify.breakpoint.smAndDown}},e._l(e.experiencias,(function(a,o){return t("v-timeline-item",{key:o,attrs:{color:"teal",small:""}},[t("span",{attrs:{slot:"opposite",lang:e.idioma},slot:"opposite"},[e._v(e._s(a.periodo[e.idioma]))]),t("v-card",{staticClass:"text-left elevation-2",attrs:{lang:e.idioma}},[e.$vuetify.breakpoint.smAndDown?t("v-card-text",{staticClass:"pb-0 font-italic font-weight-light"},[t("span",[e._v(e._s(a.periodo[e.idioma]))])]):e._e(),t("v-card-title",{staticClass:"font-weight-regular"},[e._v(e._s(a.título[e.idioma]))]),t("v-card-text",[e._v(" "+e._s(a.descripción[e.idioma])+" ")]),t("v-divider"),t("v-card-text",[t("span",[t("strong",[e._v(e._s("es"===e.idioma?"Cliente":"Client")+":")]),e._v(" "+e._s(a.cliente.nombre)+" - "),t("a",{attrs:{href:a.cliente.url,target:"_blank"}},[e._v(e._s(a.cliente.url))])])])],1)],1)})),1)],1)},C=[],W={data:function(){return{experiencias:[{periodo:{es:"Julio de 2018 a la actualidad",en:"Jul 2018 - current"},"título":{es:"Director de desarrollo",en:"Development Head"},"descripción":{es:"Actualmente estoy dirigiendo el equipo de desarrollo de la aplicación Wokky. Wokky es una aplicación móvil mediante la cual los usuarios contestan simples sondeos o elaboradas encuestas y por ello ganan dinero o puntos redimibles. Este proyecto lo estoy dirigiendo en tres frentes: La aplicación móvil (tanto Android como iOS), el backoffice para la administración, y la lógica de backend. Yo mismo contribuyo también en el desarrollo del proyecto. Las aplicaciones son nativas, el backoffice está desarrollado en Vue, y en el backend usamos Node.js en microservicios de Firebase.",en:"I am currently running the Wokky application development team. Wokky is a mobile application through which users answer simple polls or elaborate surveys and therefore earn money or redeemable points. I am directing this project on three fronts: The mobile application (both Android and iOS), the back office for administration, and the backend logic. I myself also contribute to the development of the project. The applications are native, the backoffice is written in Vue, and in the backend we use Node.js in Firebase microservices."},cliente:{nombre:"Datexco",url:"http://datexco.com"}},{periodo:{es:"Noviembre de 2017 a julio de 2018",en:"Nov 2017 - Jul 2018"},"título":{es:"Desarrollador Senior Fullstack",en:"Senior Fullstack Developer"},"descripción":{es:"Desarrollé desde cero el sistema Waygis, una plataforma para la gestión de flotas de vehículos con seguimiento en tiempo real mediante GPS y administración de la flota. Esta plataforma fue desarrollada en Go en el backend y Vue en el frontend. Para ello fue necesario desarrollar una biblioteca propia que decodifica las tramas de los dispositivos GPS. Se hizo uso de Leaflet en el frontend para el manejo de mapas interactivos.",en:"I developed the Waygis system from scratch, a platform for vehicles fleet management with real-time tracking through GPS. This platform was developed in Go in the backend and Vue in the frontend. For this, it was necessary to develop an own library that decodes the frames of the GPS devices. Leaflet was used in the frontend for interactive map management."},cliente:{nombre:"Cubitix",url:"https://cubitix.com"}},{periodo:{es:"Noviembre de 2016 a septiembre de 2017",en:"Nov 2016 - Sep 2017"},"título":{es:"Desarrollador Senior",en:"Senior Developer"},"descripción":{es:"Continuación del desarrollo del sistema de gestión de cementerios para los cementerios distritales de Bogotá, así como el desarrollo e integración de un sistema de gestión de funerarias. También desarrollé servicios telefónicos de audiorrespuesta interactiva, y otros desarrollos personalizados en sistemas de call center (Asterisk, Vicidial, IVR interactivos, síntesis de audio).",en:"Continuation of the development of the cemetery management system for the district cemeteries of Bogotá, as well as the development and integration of a funeral management system. I also developed interactive audio response telephone services, and other custom developments in call center systems (Asterisk, Vicidial, interactive IVR, audio synthesis)."},cliente:{nombre:"Tesacol",url:"https://tesacol.com"}},{periodo:{es:"Abril de 2015 a noviembre de 2016",en:"Apr 2015 - Nov 2016"},"título":{es:"Desarrollador",en:"Developer"},"descripción":{es:"Continué con el desarrollo del sistema de información y procesos internos propio de la empresa, escrito en PHP y Javascript. Desarrollé más de 20 módulos nuevos desde cero para nuevas necesidades de la empresa, y participé en la actualización y mejora de otros módulos que habían sido desarrollados en ASP diez años antes.",en:"I continued with the development of the company's internal information and processes system, written in PHP and Javascript. I developed more than 20 new modules from scratch for new needs of the company, and participated in the update and improvement of other modules that had been developed in ASP ten years before."},cliente:{nombre:"Ingeal",url:"https://ingeal.com"}},{periodo:{es:"Febrero de 2013 a abril de 2015",en:"Feb 2013 - Apr 2015"},"título":{es:"Analista de infraestructura",en:"Infraestructure Analyst"},"descripción":{es:"Si bien venía de trabajar en otras áreas de tecnología, aquí empecé a incursionar en el campo del desarrollo. Empecé desarrollando servicios telefónicos de audiorrespuesta interactivos para plantas telefónicas Asterisk mediante su interfaz AGI. También desarrollé scripts que automatizaban tareas de supervisión de servidores Linux integrados con herramientas de supervisión de infraestructura como Zabbix.",en:"Although I came from working in other areas of technology, here I began to enter the field of software development. I started developing interactive audio response telephone services for Asterisk telephone plants through its AGI interface. I also developed scripts that automated monitoring tasks of Linux servers integrated with infrastructure monitoring tools such as Zabbix."},cliente:{nombre:"Tesacol",url:"https://tesacol.com"}}]}},props:["idioma"],methods:{}},I=W,A=Object(d["a"])(I,D,C,!1,null,null,null),P=A.exports,j={name:"App",components:{Introduccion:m,Habilidades:h,Proyectos:S,Experiencia:P},data:function(){return{idioma:""}},created:function(){this.detectarIdioma()},watch:{idioma:function(e){localStorage.setItem("idioma",e)}},methods:{detectarIdioma:function(){var e=localStorage.getItem("idioma");if("es"!==e&&"en"!==e){if(e=(window.navigator.language||window.navigator.userLanguage||"").split("-")[0],!e&&window.navigator.languages&&window.navigator.languages.length>0){var a=!0,t=!1,o=void 0;try{for(var i,n=window.navigator.languages[Symbol.iterator]();!(a=(i=n.next()).done);a=!0){var s=i.value,r=s.split("-")[0];if("es"===r||"en"===r){e=r;break}}}catch(l){t=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(t)throw o}}}"es"!==e&&"en"!==e&&(e="es"),this.idioma=e}else this.idioma=e}}},E=j,L=(t("e095"),Object(d["a"])(E,i,n,!1,null,"55ffd2ae",null)),N=L.exports,O=t("9483");Object(O["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var F=t("8c4f"),G=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:t("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},T=[],V={name:"home",components:{}},H=V,M=Object(d["a"])(H,G,T,!1,null,null,null),B=M.exports;o["default"].use(F["a"]);var $=[{path:"/",name:"home",component:B}],J=new F["a"]({routes:$,mode:"history"}),Q=J,q=t("ce5b"),z=t.n(q),U=(t("bf40"),t("2e15")),R=t.n(U);o["default"].use(z.a);var Y=new z.a({lang:{locales:{es:R.a},current:"es"}});o["default"].config.productionTip=!1,new o["default"]({router:Q,vuetify:Y,render:function(e){return e(N)},data:function(){return{}},created:function(){},methods:{}}).$mount("#app")},"6ce7":function(e,a,t){"use strict";var o=t("7c46"),i=t.n(o);i.a},"7c46":function(e,a,t){},aa3d:function(e,a,t){},cc47:function(e,a,t){"use strict";var o=t("5581"),i=t.n(o);i.a},cf05:function(e,a,t){e.exports=t.p+"img/logo.82b9c7a5.png"},e095:function(e,a,t){"use strict";var o=t("aa3d"),i=t.n(o);i.a}});
//# sourceMappingURL=app.405454d1.js.map