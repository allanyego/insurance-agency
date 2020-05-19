(this["webpackJsonporient-insurance"]=this["webpackJsonporient-insurance"]||[]).push([[2],{1:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"k",(function(){return a})),t.d(n,"c",(function(){return c})),t.d(n,"b",(function(){return u})),t.d(n,"i",(function(){return o})),t.d(n,"e",(function(){return i})),t.d(n,"j",(function(){return l})),t.d(n,"l",(function(){return s})),t.d(n,"d",(function(){return d})),t.d(n,"n",(function(){return f})),t.d(n,"m",(function(){return p})),t.d(n,"f",(function(){return y})),t.d(n,"g",(function(){return h})),t.d(n,"h",(function(){return v}));var r="ACTION_CLIENT",a="UPDATE_CLIENTS",c="ADD_INSURERS",u="ADD_ERROR",o="SHIFT_ERROR",i="ADD_SUCCESS",l="SHIFT_SUCCESS",s="UPDATE_INSURERS",d="ADD_POLICY",f="UPDATE_POLICY",p="UPDATE_POLICIES",y="ADD_VEHICLE",h="LOGIN",v="LOGOUT"},108:function(e,n,t){},109:function(e,n,t){},166:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(8),u=t.n(c),o=t(29),i=(t(108),t(65)),l=t(13);t(109);function s(){return a.a.createElement("div",{className:"FallbackContainer",style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}},a.a.createElement("div",null,a.a.createElement("img",{src:"/orient-insurance/orient-logo.png",alt:"Company logo",style:{margin:"0 auto",display:"block",borderRadius:"10%",width:"85px"}})))}t(110);var d=t(64);var f=t(45),p=Object(o.b)((function(e){return{errors:e.errors,success:e.success}}),(function(e){return{removeError:function(){return e(Object(f.i)())},removeSuccess:function(){return e(Object(f.j)())}}}))((function(e){var n=e.success,t=e.removeSuccess,c=e.errors,u=e.removeError;return Object(r.useEffect)((function(){c.length&&(d.a.error(c[0]),u()),n.length&&(d.a.success(n[0]),t())}),[c,n]),a.a.createElement("div",null)})),y=a.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(5),t.e(6)]).then(t.bind(null,460))})),h=a.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(7)]).then(t.bind(null,458))})),v=a.a.lazy((function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,459))}));console.log("PUBLIC URL",".");var m=function(){return a.a.createElement(i.a,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(s,null)},a.a.createElement(l.d,null,a.a.createElement(l.b,{path:"./login"},a.a.createElement(h,null)),a.a.createElement(l.b,{path:"./change-password"},a.a.createElement(v,null)),a.a.createElement(l.b,{path:"./app"},a.a.createElement(y,null)),a.a.createElement(l.b,{path:".*"},a.a.createElement(l.a,{to:"`/app`"})))),a.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=t(40);u.a.render(a.a.createElement(o.a,{store:b.a},a.a.createElement(a.a.StrictMode,null,a.a.createElement(m,null))),document.getElementById("root")),window.addEventListener("beforeunload",(function(){var e=b.a.getState().auth;e&&e.token&&e.rememberMe?localStorage.setItem("OrientData",JSON.stringify(b.a.getState())):localStorage.clear()}),!1),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},40:function(e,n,t){"use strict";var r=t(22),a=t(4),c=t(1),u=JSON.parse(localStorage.getItem("OrientData"))||{},o={clients:u.clients||[],insurers:u.insurers||[],policies:u.policies||[],vehicles:u.vehicles||[],auth:u.auth||null},i=function(e,n){return e.filter((function(e){return-1===n.findIndex((function(n){return n.id===e.id}))}))},l=t(44);var s=t(66);var d=Object(r.b)({clients:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.clients,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case c.a:return[].concat(Object(a.a)(e),[n.payload]);case c.k:return[].concat(Object(a.a)(i(e,n.payload)),Object(a.a)(n.payload));default:return e}},insurers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.insurers,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case c.c:return[].concat(Object(a.a)(e),[n.payload]);case c.l:return[].concat(Object(a.a)(i(e,n.payload)),Object(a.a)(n.payload));default:return e}},policies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.policies,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case c.d:return[].concat(Object(a.a)(e),[n.payload]);case c.n:return[n.payload].concat(Object(a.a)(i(e,[n.payload])));case c.m:return[].concat(Object(a.a)(i(e,n.payload)),Object(a.a)(n.payload));default:return e}},vehicles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.vehicles,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case c.f:return[].concat(Object(a.a)(e),[n.payload]);default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.errors||[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case c.b:return[].concat(Object(a.a)(e),[n.payload]);case c.i:var t=Object(l.a)(e),r=(t[0],t.slice(1));return Object(a.a)(r);default:return e}},success:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.success||[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case c.e:return[].concat(Object(a.a)(e),[n.payload]);case c.j:var t=Object(l.a)(e),r=(t[0],t.slice(1));return Object(a.a)(r);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.auth,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case c.g:return Object(s.a)({},n.payload);case c.h:return null;default:return e}}});n.a=Object(r.c)(d)},45:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"k",(function(){return c})),t.d(n,"c",(function(){return u})),t.d(n,"d",(function(){return o})),t.d(n,"f",(function(){return i})),t.d(n,"n",(function(){return l})),t.d(n,"m",(function(){return s})),t.d(n,"l",(function(){return d})),t.d(n,"b",(function(){return f})),t.d(n,"i",(function(){return p})),t.d(n,"e",(function(){return y})),t.d(n,"j",(function(){return h})),t.d(n,"g",(function(){return v})),t.d(n,"h",(function(){return m}));var r=t(1),a=function(e){return{type:r.a,payload:e}},c=function(e){return{type:r.k,payload:e}},u=function(e){return{type:r.c,payload:e}},o=function(e){return{type:r.d,payload:e}},i=function(e){return{type:r.f,payload:e}},l=function(e){return{type:r.n,payload:e}},s=function(e){return{type:r.m,payload:e}},d=function(e){return{type:r.l,payload:e}},f=function(e){return{type:r.b,payload:e}},p=function(){return{type:r.i,payload:null}},y=function(e){return{type:r.e,payload:e}},h=function(){return{type:r.j,payload:null}},v=function(e){return{type:r.g,payload:e}},m=function(){return{type:r.h,payload:null}}},99:function(e,n,t){e.exports=t(166)}},[[99,3,4]]]);
//# sourceMappingURL=main.f472b71a.chunk.js.map