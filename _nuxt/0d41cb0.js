(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{214:function(t,n,e){var content=e(216);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(70).default)("b4c0b796",content,!0,{sourceMap:!1})},215:function(t,n,e){"use strict";e(214)},216:function(t,n,e){(n=e(69)(!1)).push([t.i,"@media screen and (min-width:800px){.links[data-v-fa47d306]{display:flex;flex-direction:row}}.links[data-v-fa47d306]{margin:30px auto;max-width:800px;width:100%;justify-content:center;align-items:center;align-content:center}.links .button[data-v-fa47d306]{margin:5px 0 0}",""]),t.exports=n},217:function(t,n,e){"use strict";e.r(n);var r={props:{links:{type:Array,required:!0}}},l=(e(215),e(26)),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"links"},t._l(t.links,(function(link){return e("nuxt-link",{key:link.to,staticClass:"button",attrs:{to:link.to,"data-after":link.title},domProps:{textContent:t._s(link.title)}})})),1)}),[],!1,null,"fa47d306",null);n.default=component.exports},218:function(t,n,e){"use strict";var r=e(2),l=e(29).findIndex,o=e(71),c=e(12),d=!0,f=c("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){d=!1})),r({target:"Array",proto:!0,forced:d||!f},{findIndex:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},219:function(t,n,e){"use strict";e.r(n);e(218),e(27),e(72),e(39);var r={computed:{links:function(){var path=this.$nuxt.$route.path,t=this.pages.slice(),n=t.findIndex((function(t){return path.includes(t.to)}));return-1!==n&&(t[n]={title:"HOME",to:"/"}),t},pages:function(){return[{title:"RESUME",to:"/resume"},{title:"ART",to:"/art"},{title:"THOUGHTS",to:"/thoughts"},{title:"CONTACT",to:"/contact"}]}}},l=e(26),component=Object(l.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("links",{attrs:{links:this.links}})],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Links:e(217).default})},376:function(t,n,e){"use strict";e.r(n);var r={head:function(){return{title:"Peter Lillian"}}},l=e(26),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",[e("h1",[t._v("PETER LILLIAN")]),t._v(" "),e("p",[t._v("\n      Food for thought: Future beings will appear as godlike to us as we do to ants.\n    ")]),t._v(" "),e("p",[t._v("\n      But unless they can find a way around the laws of physics,\n    ")]),t._v(" "),e("p",[t._v("\n      they'll have the same existential problems that ants do: entropy is always increasing.\n    ")]),t._v(" "),e("navbar")],1)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Navbar:e(219).default})}}]);