(function(t){function e(e){for(var i,n,r=e[0],l=e[1],c=e[2],u=0,d=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);m&&m(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,n=1;n<a.length;n++){var r=a[n];0!==o[r]&&(i=!1)}i&&(s.splice(e--,1),t=l(l.s=a[0]))}return t}var i={},n={app:0},o={app:0},s=[];function r(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-33315581":"5e7d3064","chunk-552b1811":"67f721e3","chunk-77a421ae":"24b80718"}[t]+".js"}function l(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={"chunk-33315581":1,"chunk-552b1811":1,"chunk-77a421ae":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var i="css/"+({}[t]||t)+"."+{"chunk-33315581":"1ac268cb","chunk-552b1811":"4b1d7154","chunk-77a421ae":"0e3cd601"}[t]+".css",o=l.p+i,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var c=s[r],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===i||u===o))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){c=d[r],u=c.getAttribute("data-href");if(u===i||u===o)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var i=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=i,delete n[t],m.parentNode.removeChild(m),a(s)},m.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){n[t]=0})));var i=o[t];if(0!==i)if(i)e.push(i[2]);else{var s=new Promise((function(e,a){i=o[t]=[e,a]}));e.push(i[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=o[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",d.name="ChunkLoadError",d.type=i,d.request=n,a[1](d)}o[t]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=i,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(a,i,function(e){return t[e]}.bind(null,i));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var m=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0043":function(t,e,a){"use strict";var i=a("0436"),n=a.n(i);n.a},"0436":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"back_color baground"},[a("v-content",[a("router-view")],1)],1)},o=[],s={name:"App",data:function(){return{}}},r=s,l=a("2877"),c=a("6544"),u=a.n(c),d=a("7496"),m=a("a75b"),p=Object(l["a"])(r,n,o,!1,null,"5a4f8b5b",null),f=p.exports;u()(p,{VApp:d["a"],VContent:m["a"]});var g=a("9483");Object(g["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d3b7");var v=a("8c4f"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("v-container",[a("headerarea"),a("v-row",{staticClass:"white",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4"}},[a("navbarrarea")],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"8",lg:"8"}},[a("div",{staticClass:"body_area"},[a("v-card",{staticClass:"pages_title",attrs:{flat:""}},[a("h3",[t._v(" "+t._s(t.abouttext.title)+" ")]),a("p",[t._v(" "+t._s(t.abouttext.text)+" ")])]),a("div",{staticClass:"whatidong"},[a("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[a("h5",{staticClass:"whatidong_text"},[t._v(" "+t._s(t.abouttext.title2)+" ")])]),a("v-row",t._l(t.skilles,(function(e){return a("v-col",{key:e,attrs:{cols:"12",sm:"6",md:"6",lg:"6"}},[a("v-card",{staticClass:"skill_area",attrs:{flat:""}},[a("v-img",{staticClass:"skill_images",attrs:{src:e.img,alt:""}}),a("h3",[t._v(" "+t._s(e.title)+" ")]),a("p",[t._v(" "+t._s(e.text)+" ")])],1)],1)})),1),a("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[a("h5",{staticClass:"whatidong_text"},[t._v(" "+t._s(t.abouttext.title3)+" ")]),a("carousel",{attrs:{autoplay:!0,nav:!1,items:"1"}},t._l(t.testimonials,(function(e){return a("v-item",{key:e.text},[a("div",{staticClass:"testimonial_cntn"},[a("v-img",{staticClass:"testimonial_images",attrs:{src:e.img,alt:""}}),a("h3",[t._v(" "+t._s(e.title)+" ")]),a("p",[t._v(" "+t._s(e.text)+" ")])],1)])})),1)],1),a("section",{staticClass:"cliend_area"},[a("h5",{staticClass:"whatidong_text"},[t._v(" "+t._s(t.abouttext.title4)+" ")]),a("v-row",t._l(t.cliends,(function(t){return a("v-item",{key:t},[a("v-col",{attrs:{cols:"12",sm:"6",md:"3",lg:"3",xl:"3"}},[a("v-img",{attrs:{src:t.img,alt:"clend images"}})],1)],1)})),1)],1)],1)],1)])],1)],1)],1)},b=[],_={data:function(){return{cliends:[{img:"/images/cliend.svg"},{img:"/images/cliend.svg"},{img:"/images/cliend.svg"},{img:"/images/cliend.svg"}],abouttext:{title:"About Me",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ullam architecto vel. Omnis dolor, ea nisi quos, sapiente architecto accusamus dolorum doloribus dignissimos repellat esse iure expedita delectus facere totam!",title2:" What I'm Doing ",title3:" Testimonials  ",title4:" Clients  "},skilles:[{img:"/images/icon-design.svg",title:"Web Design",text:"The most modern and high-quality design made at a professional level."},{img:"/images/icon-design.svg",title:"Web Development",text:"The most modern and high-quality design made at a professional level."},{img:"/images/icon-design.svg",title:"Mobile Apps Design",text:"The most modern and high-quality design made at a professional level."},{img:"/images/icon-design.svg",title:"Photography",text:"The most modern and high-quality design made at a professional level."}],testimonials:[{img:"/images/testimonial.jpg",title:"Cliend Name",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate accusantium repellendus neque fugit sed, ipsa nobis enim pariatur aut id, dolor non ducimus architecto libero maxime! Delectus natus fuga quas, ducimus, pariatur sit est vero omnis molestiae fugit molestias corporis minus minima aspernatur odio saepe, voluptatibus dolorum quod quisquam ratione."},{img:"/images/testimonial.jpg",title:"Cliend Name",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate accusantium repellendus neque fugit sed, ipsa nobis enim pariatur aut id, dolor non ducimus architecto libero maxime! Delectus natus fuga quas, ducimus, pariatur sit est vero omnis molestiae fugit molestias corporis minus minima aspernatur odio saepe, voluptatibus dolorum quod quisquam ratione."},{img:"/images/testimonial.jpg",title:"Cliend Name",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate accusantium repellendus neque fugit sed, ipsa nobis enim pariatur aut id, dolor non ducimus architecto libero maxime! Delectus natus fuga quas, ducimus, pariatur sit est vero omnis molestiae fugit molestias corporis minus minima aspernatur odio saepe, voluptatibus dolorum quod quisquam ratione."}]}}},w=_,C=(a("7add"),a("b0af")),k=a("62ad"),y=a("a523"),x=a("adda"),q=a("d903"),V=a("0fd9"),j=Object(l["a"])(w,h,b,!1,null,"236f0328",null),A=j.exports;u()(j,{VCard:C["a"],VCol:k["a"],VContainer:y["a"],VImg:x["a"],VItem:q["a"],VRow:V["a"]}),i["a"].use(v["a"]);var O=[{path:"/",name:"home",component:A},{path:"/Resume",name:"Resume",component:function(){return a.e("chunk-77a421ae").then(a.bind(null,"1ba2"))}},{path:"/Portfolio",name:"Portfolio",component:function(){return a.e("chunk-33315581").then(a.bind(null,"c9e5"))}},{path:"/Contact",name:"Contact",component:function(){return a.e("chunk-552b1811").then(a.bind(null,"b8fa"))}}],E=new v["a"]({mode:"history",base:"/",routes:O}),P=E,T=a("2f62");i["a"].use(T["a"]);var D=new T["a"].Store({state:{},mutations:{},actions:{},modules:{}}),S=a("f309");i["a"].use(S["a"]);var N=new S["a"]({icons:{iconfont:"mdi"}}),L=a("7ec7"),B=a.n(L),I=a("a4a1"),M=a.n(I),R=a("b9dd"),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"headerArea mt-10"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-card",[a("div",{staticClass:"logo_area"},[a("h1",[t._v("AKM Dulal Hossain ")])])])],1),a("v-col",{attrs:{cols:"6",md:"8"}},[a("v-card",[a("v-toolbar",{staticClass:"header_bg",attrs:{flat:"",app:""}},[a("v-list",[a("router-link",{attrs:{to:"/"}},[a("span",{staticClass:"menu_text active"},[t._v(" About ")])])],1),a("v-list",[a("router-link",{attrs:{to:"/Resume"}},[a("span",{staticClass:"menu_text"},[t._v(" Resume ")])])],1),a("v-list",[a("router-link",{attrs:{to:"/Portfolio"}},[a("span",{staticClass:"menu_text"},[t._v(" Portfolio ")])])],1),a("v-list",[a("router-link",{attrs:{to:"/Contact"}},[a("span",{staticClass:"menu_text"},[t._v(" Contact ")])])],1)],1)],1)],1)],1)],1)},F=[],H={},J=H,K=(a("0043"),a("8860")),W=a("71d9"),Q=Object(l["a"])(J,$,F,!1,null,"d2036264",null),U=Q.exports;u()(Q,{VCard:C["a"],VCol:k["a"],VList:K["a"],VRow:V["a"],VToolbar:W["a"]});var z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navbar_area"},[i("v-card",{staticClass:"profile_area",attrs:{flat:""}},[i("v-img",{staticClass:"profile_pic",attrs:{src:a("df57"),alt:""}})],1),i("p",{staticClass:"degainashon"},[t._v(" "+t._s(t.profileleft.title)+" ")]),i("span",{staticClass:"social_icon_area"},t._l(t.socialicons,(function(e){return i("v-item",{key:e},[i("a",{attrs:{href:e.url,target:"_blang"}},[i("v-icon",{staticClass:"social_icon"},[t._v(" "+t._s(e.icon)+" ")])],1)])})),1),t._l(t.profileicons,(function(e){return i("v-tooltip",{key:e,attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on;return[i("span",t._g({staticClass:"profile_icon",attrs:{color:"primary",black:""}},n),[i("v-icon",{staticClass:"p_icon"},[t._v(" "+t._s(e.icon)+" ")]),i("p",[t._v(" "+t._s(e.text)+" ")])],1)]}}],null,!0)},[i("span",[t._v(" "+t._s(e.title)+" ")])])})),i("v-btn",{staticClass:"indigo darken-4 download_btn white--text"},[i("v-icon",{attrs:{left:""}},[t._v(" "+t._s(t.profileleft.downloadicon)+" ")]),t._v(" "+t._s(t.profileleft.download)+" ")],1)],2)},G=[],X={data:function(){return{profileleft:{title:"FrontEnd Developer",download:"Download Cv",downloadicon:"mdi-cloud-download"},socialicons:[{icon:"mdi-facebook",url:"https://www.facebook.com/"},{icon:"mdi-linkedin",url:"https://www.linkedin.com/feed/"},{icon:"mdi-twitter",url:"https://twitter.com/home?lang=en"},{icon:"mdi-behance",url:"https://twitter.com/home?lang=en"}],profileicons:[{text:"January01, 2019",title:"Birthday",icon:"mdi-calendar-today"},{text:"Dhaka-Khilkhet, Bangladesh",title:"Address",icon:"mdi-google-maps"},{text:"dulalhossain34220@gmail.com",title:"Email",icon:"mdi-email"},{text:"+880 198-5834220",title:"Phone",icon:"mdi-phone-forward"},{text:"Akm Dulal Hossain",title:"Skype",icon:"mdi-information"}]}}},Y=X,Z=(a("b684"),a("8336")),tt=a("132d"),et=a("3a2f"),at=Object(l["a"])(Y,z,G,!1,null,"9c5c81ec",null),it=at.exports;u()(at,{VBtn:Z["a"],VCard:C["a"],VIcon:tt["a"],VImg:x["a"],VItem:q["a"],VTooltip:et["a"]}),i["a"].use(B.a),i["a"].use(M.a),i["a"].use(R["a"]),i["a"].component("headerarea",U),i["a"].component("navbarrarea",it),i["a"].config.productionTip=!1,new i["a"]({router:P,store:D,vuetify:N,render:function(t){return t(f)}}).$mount("#app")},"7add":function(t,e,a){"use strict";var i=a("8342"),n=a.n(i);n.a},8342:function(t,e,a){},b684:function(t,e,a){"use strict";var i=a("d1db"),n=a.n(i);n.a},d1db:function(t,e,a){},df57:function(t,e,a){t.exports=a.p+"img/photo.0ab20147.jpg"}});
//# sourceMappingURL=app.374741db.js.map