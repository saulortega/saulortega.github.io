(function(e){function t(t){for(var o,r,s=t[0],l=t[1],c=t[2],d=0,u=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);m&&m(t);while(u.length)u.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],o=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(o=!1)}o&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var o={},i={app:0},n=[];function r(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a3d05327"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a=i[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,o){a=i[e]=[t,o]}));t.push(a[2]=o);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=r(e);var c=new Error;n=function(t){l.onerror=l.onload=null,clearTimeout(d);var a=i[e];if(0!==a){if(a){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",c.name="ChunkLoadError",c.type=o,c.request=n,a[1](c)}i[e]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(a,o,function(t){return e[t]}.bind(null,o));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"3a7e":function(e,t,a){"use strict";var o=a("f67f"),i=a.n(o);i.a},5581:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-container",{staticClass:"px-xs-0 px-sm-2 px-md-6 px-lg-12 py-xs-0 py-sm-2"},[a("v-row",[a("v-col",[a("v-row",{attrs:{justify:"end"}},[a("div",{staticClass:"pr-3"},[a("v-select",{staticClass:"pa-0 ma-0",staticStyle:{"max-width":"12em"},attrs:{items:[{v:"en",t:"English"},{v:"es",t:"Español"}],"item-text":"t","item-value":"v","menu-props":"auto",label:"Language/Idioma","hide-details":"","prepend-icon":"mdi-translate","single-line":""},model:{value:e.idioma,callback:function(t){e.idioma=t},expression:"idioma"}})],1)])],1)],1),a("v-row",{directives:[{name:"show",rawName:"v-show",value:e.idioma,expression:"idioma"}]},[a("v-col",[a("Introduccion",{staticClass:"com",attrs:{idioma:e.idioma,id:"intro"}})],1)],1),a("v-divider"),a("v-row",{directives:[{name:"show",rawName:"v-show",value:e.idioma,expression:"idioma"}]},[a("v-col",[a("Habilidades",{staticClass:"com",attrs:{idioma:e.idioma}})],1)],1),a("v-divider"),a("v-row",{directives:[{name:"show",rawName:"v-show",value:e.idioma,expression:"idioma"}]},[a("v-col",[a("Experiencia",{staticClass:"com",attrs:{idioma:e.idioma}})],1)],1)],1)],1)},n=[],r=(a("a4d3"),a("e01a"),a("d28b"),a("d3b7"),a("ac1f"),a("3ca3"),a("1276"),a("ddb0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"presentacion",attrs:{itemscope:"",itemtype:"http://schema.org/Person"}},[a("img",{staticClass:"foto",attrs:{src:"/img/yo.png",itemprop:"image"}}),e._m(0),"es"===e.idioma?a("p",{staticClass:"grey--text text--darken-1 subtitle-1",attrs:{lang:"es",itemprop:"description"}},[e._v("Soy desarrollador de software especializado en Vue para entornos web, y en Go del lado del servidor. Desarrollo aplicaciones web con estándares de la W3C como Websockets, Web storage, o IndexedDB para crear aplicaciones en tiempo real y con funcionalidad sin conexión a internet. Me gusta construir APIs, desarrollar cosas desde cero, y obtener nuevos retos.")]):e._e(),"es"===e.idioma?a("p",{staticClass:"grey--text text--darken-2 body-2 font-italic",attrs:{lang:"es"}},[a("strong",[e._v("Ubicación: ")]),e._m(1)]):e._e(),"es"===e.idioma?a("p",{staticClass:"grey--text text--darken-2 body-2 font-italic",attrs:{lang:"es"}},[a("strong",[e._v("Edad:")]),e._v(" "+e._s(e.edad)+" años ")]):e._e(),"en"===e.idioma?a("p",{staticClass:"grey--text text--darken-1 subtitle-1",attrs:{lang:"en",itemprop:"description"}},[e._v("I'm a software developer specializing in Vue for web environments, and in Go at server-side. I develop web applications with W3C standards such as Websockets, Web storage, or IndexedDB in order to create realtime and offline web applications. I like to build APIs, develop things from scratch, and get new challenges.")]):e._e(),"en"===e.idioma?a("p",{staticClass:"grey--text text--darken-2 body-2 font-italic",attrs:{lang:"en"}},[a("strong",[e._v("Location: ")]),e._m(2)]):e._e(),"en"===e.idioma?a("p",{staticClass:"grey--text text--darken-2 body-2 font-italic",attrs:{lang:"en"}},[a("strong",[e._v("Age:")]),e._v(" "+e._s(e.edad)+" years old ")]):e._e(),a("p",[a("a",{attrs:{href:"https://www.github.com/saulortega",target:"_blank",title:"GitHub",itemprop:"url"}},[a("v-icon",[e._v("mdi-git")])],1),e._v(" "),a("a",{attrs:{href:"https://www.linkedin.com/in/sa%C3%BAl-ortega/",target:"_blank",title:"Linkedin",itemprop:"url"}},[a("v-icon",[e._v("mdi-linkedin")])],1)])])])}),s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",{staticClass:"font-weight-light grey--text text--darken-3",attrs:{itemprop:"name"}},[a("span",{attrs:{itemprop:"givenName"}},[e._v("Saúl")]),e._v(" "),a("span",{attrs:{itemprop:"familyName"}},[e._v("Ortega")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{attrs:{itemprop:"homeLocation",itemscope:"",itemtype:"http://schema.org/Place"}},[a("span",{attrs:{itemscope:"",itemtype:"http://schema.org/City"}},[a("span",{attrs:{itemprop:"name"}},[e._v("Bogotá")])]),e._v(", "),a("span",{attrs:{itemscope:"",itemtype:"http://schema.org/Country"}},[a("span",{attrs:{itemprop:"name"}},[e._v("Colombia")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{attrs:{itemprop:"homeLocation",itemscope:"",itemtype:"http://schema.org/Place"}},[a("span",{attrs:{itemscope:"",itemtype:"http://schema.org/City"}},[a("span",{attrs:{itemprop:"name"}},[e._v("Bogotá")])]),e._v(", "),a("span",{attrs:{itemscope:"",itemtype:"http://schema.org/Country"}},[a("span",{attrs:{itemprop:"name"}},[e._v("Colombia")])])])}],l={data:function(){return{edad:Math.floor((new Date-new Date(1989,4,23).getTime())/1e3/60/60/24/365)}},props:["idioma"],methods:{}},c=l,d=(a("cc47"),a("2877")),m=Object(d["a"])(c,r,s,!1,null,"3574aa0b",null),u=m.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-left"},[a("br"),"es"===e.idioma?a("h1",{staticClass:"text-center font-weight-light",attrs:{lang:"es"}},[e._v("Habilidades")]):e._e(),"en"===e.idioma?a("h1",{staticClass:"text-center font-weight-light",attrs:{lang:"en"}},[e._v("Abilities")]):e._e(),a("br"),a("div",{staticClass:"d-flex flex-wrap justify-space-between"},e._l(e.conocimientos,(function(t,o){return a("v-list-item",{key:o,staticClass:"mx-3",attrs:{dense:""}},[a("v-list-item-title",[a("v-icon",[e._v(e._s(t.icono))]),e._v(" "+e._s("es"===e.idioma?t.nombre.es:t.nombre.en))],1),a("v-rating",{staticClass:"text-right",attrs:{value:t.evaluación,color:"amber","background-color":"grey",dense:"","half-increments":"",readonly:"",size:"14"}})],1)})),1)])},v=[],f={data:function(){return{conocimientos:[{visible:!1,nombre:{es:"CSS(3)",en:"CSS(3)"},icono:"mdi-language-css3","evaluación":4.5,"categorías":["DW_ME"]},{visible:!1,nombre:{es:"HTML(5)",en:"HTML(5)"},icono:"mdi-language-html5","evaluación":4.5,"categorías":["DW_ME"]},{visible:!1,nombre:{es:"Javascript",en:"Javascript"},icono:"mdi-language-javascript","evaluación":5,"categorías":["DW_P","LP"]},{visible:!1,nombre:{es:"Vue",en:"Vue"},icono:"mdi-vuejs","evaluación":5,"categorías":["DW_P"]},{visible:!1,nombre:{es:"Vuetify",en:"Vuetify"},icono:"mdi-vuetify","evaluación":5,"categorías":["DW_ME"]},{visible:!1,nombre:{es:"Angular",en:"Angular"},icono:"mdi-angular","evaluación":2,"categorías":["DW_P"]},{visible:!1,nombre:{es:"Node.js",en:"Node.js"},icono:"mdi-nodejs","evaluación":5,"categorías":["DW_P"]},{visible:!1,nombre:{es:"JQuery",en:"JQuery"},icono:"mdi-jquery","evaluación":5,"categorías":["DW_P"]},{visible:!1,nombre:{es:"Websockets",en:"Websockets"},icono:"mdi-webhook","evaluación":4.5,"categorías":["DW_P","DW_EI"]},{visible:!1,nombre:{es:"Google Maps",en:"Google Maps"},icono:"mdi-google-maps","evaluación":4.5,"categorías":["DW_IU"]},{visible:!1,nombre:{es:"Firebase Firestore",en:"Firebase Firestore"},icono:"mdi-firebase","evaluación":5,"categorías":["BD_NoSQL","DW_IU"]},{visible:!1,nombre:{es:"Firebase Auth",en:"Firebase Auth"},icono:"mdi-firebase","evaluación":5,"categorías":["DW_IU"]},{visible:!1,nombre:{es:"Firebase Storage",en:"Firebase Storage"},icono:"mdi-firebase","evaluación":5,"categorías":["DW_IU"]},{visible:!1,nombre:{es:"Firebase Hosting",en:"Firebase Hosting"},icono:"mdi-firebase","evaluación":5,"categorías":["DW_HS"]},{visible:!1,nombre:{es:"Web Storage",en:"Web Storage"},icono:"mdi-language-html5","evaluación":5,"categorías":["DW_EI"]},{visible:!1,nombre:{es:"JSON",en:"JSON"},icono:"mdi-json","evaluación":5,"categorías":["DW_EI"]},{visible:!1,nombre:{es:"RESTful",en:"RESTful"},icono:"mdi-api","evaluación":5,"categorías":["DW_EI"]},{visible:!1,nombre:{es:"Git",en:"Git"},icono:"mdi-git","evaluación":4,"categorías":["DW_EI","DW_HS"]},{visible:!1,nombre:{es:"Go",en:"Go"},icono:"mdi-language-go","evaluación":5,"categorías":["LP"]},{visible:!1,nombre:{es:"PHP",en:"PHP"},icono:"mdi-language-php","evaluación":5,"categorías":["LP"]},{visible:!1,nombre:{es:"Python",en:"Python"},icono:"mdi-language-python","evaluación":3.5,"categorías":["LP"]},{visible:!1,nombre:{es:"PostgreSQL",en:"PostgreSQL"},icono:"mdi-database","evaluación":5,"categorías":["BD_SQL"]},{visible:!1,nombre:{es:"MySQL",en:"MySQL"},icono:"mdi-database","evaluación":4.5,"categorías":["BD_SQL"]},{visible:!1,nombre:{es:"MongoDB",en:"MongoDB"},icono:"mdi-database","evaluación":3.5,"categorías":["BD_NoSQL"]}]}},props:["idioma"],watch:{},created:function(){},methods:{}},g=f,b=(a("73a4"),Object(d["a"])(g,p,v,!1,null,"2ba11ddd",null)),h=b.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("br"),"es"===e.idioma?a("h1",{staticClass:"text-center font-weight-light",attrs:{lang:"es"}},[e._v("Experiencia")]):e._e(),"en"===e.idioma?a("h1",{staticClass:"text-center font-weight-light",attrs:{lang:"en"}},[e._v("Experience")]):e._e(),a("br"),a("v-timeline",{attrs:{"align-top":e.$vuetify.breakpoint.smAndDown,dense:e.$vuetify.breakpoint.smAndDown}},e._l(e.experiencias,(function(t,o){return a("v-timeline-item",{key:o,attrs:{color:"teal",small:""}},[a("span",{attrs:{slot:"opposite",lang:e.idioma},slot:"opposite"},[e._v(e._s(t.periodo[e.idioma]))]),a("v-card",{staticClass:"text-left elevation-2",attrs:{lang:e.idioma}},[e.$vuetify.breakpoint.smAndDown?a("v-card-text",{staticClass:"pb-0 font-italic font-weight-light"},[a("span",[e._v(e._s(t.periodo[e.idioma]))])]):e._e(),a("v-card-title",{staticClass:"font-weight-regular"},[e._v(e._s(t.título[e.idioma]))]),a("v-card-text",[e._v(" "+e._s(t.descripción[e.idioma])+" ")]),a("v-divider"),a("v-card-text",[a("span",[a("strong",[e._v(e._s("es"===e.idioma?"Cliente":"Client")+":")]),e._v(" "+e._s(t.cliente.nombre)+" - "),a("a",{attrs:{href:t.cliente.url,target:"_blank"}},[e._v(e._s(t.cliente.url))])])])],1)],1)})),1)],1)},_=[],w={data:function(){return{experiencias:[{periodo:{es:"Julio de 2018 a la actualidad",en:"Jul 2018 - current"},"título":{es:"Director de desarrollo",en:"Development Head"},"descripción":{es:"Actualmente estoy dirigiendo el equipo de desarrollo de la aplicación Wokky. Wokky es una aplicación móvil mediante la cual los usuarios contestan simples sondeos o elaboradas encuestas y por ello ganan dinero o puntos redimibles. Este proyecto lo estoy dirigiendo en tres frentes: La aplicación móvil (tanto Android como iOS), el backoffice para la administración, y la lógica de backend. Yo mismo contribuyo también en el desarrollo del proyecto. Las aplicaciones son nativas, el backoffice está desarrollado en Vue, y en el backend usamos Node.js en microservicios de Firebase.",en:"I am currently running the Wokky application development team. Wokky is a mobile application through which users answer simple polls or elaborate surveys and therefore earn money or redeemable points. I am directing this project on three fronts: The mobile application (both Android and iOS), the back office for administration, and the backend logic. I myself also contribute to the development of the project. The applications are native, the backoffice is written in Vue, and in the backend we use Node.js in Firebase microservices."},cliente:{nombre:"Datexco",url:"http://datexco.com"}},{periodo:{es:"Noviembre de 2017 a julio de 2018",en:"Nov 2017 - Jul 2018"},"título":{es:"Desarrollador Senior Fullstack",en:"Senior Fullstack Developer"},"descripción":{es:"Desarrollé desde cero el sistema Waygis, una plataforma para la gestión de flotas de vehículos con seguimiento en tiempo real mediante GPS y administración de la flota. Esta plataforma fue desarrollada en Go en el backend y Vue en el frontend. Para ello fue necesario desarrollar una biblioteca propia que decodifica las tramas de los dispositivos GPS. Se hizo uso de Leaflet en el frontend para el manejo de mapas interactivos.",en:"I developed the Waygis system from scratch, a platform for vehicles fleet management with real-time tracking through GPS. This platform was developed in Go in the backend and Vue in the frontend. For this, it was necessary to develop an own library that decodes the frames of the GPS devices. Leaflet was used in the frontend for interactive map management."},cliente:{nombre:"Cubitix",url:"https://cubitix.com"}},{periodo:{es:"Noviembre de 2016 a septiembre de 2017",en:"Nov 2016 - Sep 2017"},"título":{es:"Desarrollador Senior",en:"Senior Developer"},"descripción":{es:"Continuación del desarrollo del sistema de gestión de cementerios para los cementerios distritales de Bogotá, así como el desarrollo e integración de un sistema de gestión de funerarias. También desarrollé servicios telefónicos de audiorrespuesta interactiva, y otros desarrollos personalizados en sistemas de call center (Asterisk, Vicidial, IVR interactivos, síntesis de audio).",en:"Continuation of the development of the cemetery management system for the district cemeteries of Bogotá, as well as the development and integration of a funeral management system. I also developed interactive audio response telephone services, and other custom developments in call center systems (Asterisk, Vicidial, interactive IVR, audio synthesis)."},cliente:{nombre:"Tesacol",url:"https://tesacol.com"}},{periodo:{es:"Abril de 2015 a noviembre de 2016",en:"Apr 2015 - Nov 2016"},"título":{es:"Desarrollador",en:"Developer"},"descripción":{es:"Continué con el desarrollo del sistema de información y procesos internos propio de la empresa, escrito en PHP y Javascript. Desarrollé más de 20 módulos nuevos desde cero para nuevas necesidades de la empresa, y participé en la actualización y mejora de otros módulos que habían sido desarrollados en ASP diez años antes.",en:"I continued with the development of the company's internal information and processes system, written in PHP and Javascript. I developed more than 20 new modules from scratch for new needs of the company, and participated in the update and improvement of other modules that had been developed in ASP ten years before."},cliente:{nombre:"Ingeal",url:"https://ingeal.com"}},{periodo:{es:"Febrero de 2013 a abril de 2015",en:"Feb 2013 - Apr 2015"},"título":{es:"Analista de infraestructura",en:"Infraestructure Analyst"},"descripción":{es:"Si bien venía de trabajar en otras áreas de tecnología, aquí empecé a incursionar en el campo del desarrollo. Empecé desarrollando servicios telefónicos de audiorrespuesta interactivos para plantas telefónicas Asterisk mediante su interfaz AGI. También desarrollé scripts que automatizaban tareas de supervisión de servidores Linux integrados con herramientas de supervisión de infraestructura como Zabbix.",en:"Although I came from working in other areas of technology, here I began to enter the field of software development. I started developing interactive audio response telephone services for Asterisk telephone plants through its AGI interface. I also developed scripts that automated monitoring tasks of Linux servers integrated with infrastructure monitoring tools such as Zabbix."},cliente:{nombre:"Tesacol",url:"https://tesacol.com"}}]}},props:["idioma"],methods:{}},x=w,k=Object(d["a"])(x,y,_,!1,null,null,null),S=k.exports,C={name:"App",components:{Introduccion:u,Habilidades:h,Experiencia:S},data:function(){return{idioma:""}},created:function(){this.detectarIdioma()},watch:{idioma:function(e){localStorage.setItem("idioma",e)}},methods:{detectarIdioma:function(){var e=localStorage.getItem("idioma");if("es"!==e&&"en"!==e){if(e=(window.navigator.language||window.navigator.userLanguage||"").split("-")[0],!e&&window.navigator.languages&&window.navigator.languages.length>0){var t=!0,a=!1,o=void 0;try{for(var i,n=window.navigator.languages[Symbol.iterator]();!(t=(i=n.next()).done);t=!0){var r=i.value,s=r.split("-")[0];if("es"===s||"en"===s){e=s;break}}}catch(l){a=!0,o=l}finally{try{t||null==n.return||n.return()}finally{if(a)throw o}}}"es"!==e&&"en"!==e&&(e="es"),this.idioma=e}else this.idioma=e}}},D=C,P=(a("3a7e"),Object(d["a"])(D,i,n,!1,null,"5dd1c3de",null)),I=P.exports,W=a("9483");Object(W["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var j=a("8c4f"),A=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},E=[],L={name:"home",components:{}},O=L,N=Object(d["a"])(O,A,E,!1,null,null,null),F=N.exports;o["default"].use(j["a"]);var G=[{path:"/",name:"home",component:F},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],M=new j["a"]({routes:G}),T=M,H=a("ce5b"),V=a.n(H),B=(a("bf40"),a("2e15")),J=a.n(B);o["default"].use(V.a);var $=new V.a({lang:{locales:{es:J.a},current:"es"}});o["default"].config.productionTip=!1,new o["default"]({router:T,vuetify:$,render:function(e){return e(I)},data:function(){return{}},created:function(){},methods:{}}).$mount("#app")},"73a4":function(e,t,a){"use strict";var o=a("fa34"),i=a.n(o);i.a},cc47:function(e,t,a){"use strict";var o=a("5581"),i=a.n(o);i.a},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},f67f:function(e,t,a){},fa34:function(e,t,a){}});
//# sourceMappingURL=app.022fcb8d.js.map