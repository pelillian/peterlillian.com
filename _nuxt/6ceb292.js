(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(t,e,o){"use strict";var n=o(1),r=o(155),c=o.n(r);n.default.use(c.a)},157:function(t,e,o){"use strict";o(53),o(27),o(39);var n={data:function(){return{xRot:0,yRot:0,xT:0,yT:0,zT:-1e3,yS:0,h:0}},computed:{perspective:function(){return this.$nuxt.$route.path.includes("video")?"":{transform:"translate3d(".concat(this.xT,"px,").concat(this.yT,"px,").concat(this.zT,"px) perspective(800px) rotateX(").concat(this.xRot,"deg) rotateY(").concat(this.yRot,"deg)"),"transform-origin":"50% ".concat(this.yS+this.h/2,"px")}}},mounted:function(){document.addEventListener("scroll",this.scroll)},methods:{move:function(t){var e=window.innerWidth,o=window.innerHeight,n=.5-t.screenX/e,r=.5-t.screenY/o;this.yRot=10*-n,this.xRot=10*r,this.xT=20*n,this.yT=20*r,this.h=o},scroll:function(){this.yS=window.scrollY}}},r=o(26),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{style:this.perspective,on:{mousemove:this.move,scroll:this.scroll}},[e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},161:function(t,e,o){o(162),t.exports=o(163)},198:function(t,e,o){var content=o(199);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(70).default)("d5573df6",content,!0,{sourceMap:!1})},199:function(t,e,o){var n=o(69),r=o(200),c=o(201);e=n(!1);var l=r(c);e.push([t.i,'@font-face{font-family:"League Spartan";src:url('+l+') format("woff2-variations");font-weight:200 900}html{font-family:"League Spartan",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-weight:400;font-size:18px;line-height:1.4;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;background:#180030;color:#fff}*,:after,:before{box-sizing:border-box;margin:0}.container{margin:0 auto;min-height:100vh;max-width:1000px;padding:15vh 0;width:60vw;display:flex;justify-content:center;align-items:center;text-align:center}.right{text-align:right;float:right}h1{font-size:100px;letter-spacing:10px}h1,h2{display:block;font-weight:700}h2{font-size:50px}a{font-weight:700;color:#e7bf8f;text-decoration:none}a:hover{text-decoration:underline}.button{font-size:50px;font-weight:700;position:relative;display:inline-block;margin:20px;color:#fff;text-decoration:none;cursor:pointer;padding:10px 30px;transform:scale(.8);transition:all .3s ease;transition-property:color transform}.button.small{font-size:36px}.button .button-text{position:relative}.button .button-text:after{padding:0!important}.button:focus,.button:hover{color:#180030;text-decoration:none;transform:scale(1)}.button:focus .button-text:after,.button:focus:after,.button:hover .button-text:after,.button:hover:after{opacity:1}.button .button-text:after,.button:after{content:attr(data-after);position:absolute;z-index:5;opacity:0;left:0;bottom:0;padding:10px 30px;height:100%;width:100%;background:linear-gradient(130deg,#734a1f,#d59748,#e7bf8f,#d59748);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;-moz-background-clip:text;-moz-text-fill-color:transparent;transition:opacity .3s ease}.item{font-weight:400;text-align:left;margin-top:48px}.item p{margin-top:18px}.item p b{font-size:24px}.item pre{margin-top:9px;font-family:inherit}.item .indent{margin-left:40px}.item.center{text-align:center}.page-enter-active,.page-leave-active{transition:transform .5s ease,opacity .5s ease!important}.page-enter{opacity:0;transform:translate(30px,30px)}.page-leave-to{opacity:0;transform:translate(-30px,-30px)}',""]),t.exports=e},201:function(t,e,o){t.exports=o.p+"fonts/LeagueSpartan-VF.b6db7c2.woff2"},21:function(t,e,o){"use strict";var n={props:{error:{type:Object,default:null}}},r=o(26),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",[404===t.error.statusCode?o("h2",[t._v("404 PAGE NOT FOUND")]):o("h2",[t._v("ERROR "+t._s(t.error.statusCode))]),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"links"},[o("nuxt-link",{staticClass:"button",attrs:{to:"/","data-after":"HOME PAGE"}},[t._v("HOME PAGE")])],1)])])}),[],!1,null,null,null);e.a=component.exports}},[[161,11,1,12]]]);