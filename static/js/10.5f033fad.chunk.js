(this["webpackJsonporient-insurance"]=this["webpackJsonporient-insurance"]||[]).push([[10],{199:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r(0),n=r.n(a),s=(r(172),r(173)),c=(r(175),r(176)),o=(r(179),r(180));function u(e){var t=e.pageTitle;return n.a.createElement(s.a,{justify:"center"},n.a.createElement(c.a,null,n.a.createElement(o.a.Title,{level:3},t)))}r(267);function i(e){var t=e.pageTitle,r=e.children;return n.a.createElement("section",{className:"Page"},t&&n.a.createElement(u,{pageTitle:t}),r)}},214:function(e,t,r){},217:function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return d}));var a=r(181),n=r.n(a),s=r(182),c=r(220);function o(e){return u.apply(this,arguments)}function u(){return(u=Object(s.a)(n.a.mark((function e(t){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(e){return{firstName:e.firstName,middleName:e.middleName,lastName:e.lastName,email:e.email,idNumber:e.idNumber,phoneNumber:e.phoneNumber,addressNumber:e.addressNumber,addressCode:e.addressCode,addressTown:e.addressTown}}(t),e.next=3,Object(c.a)({url:"".concat("/admins","/register"),method:"POST",body:r,headers:{Authorization:"Bearer ".concat(t.token)}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(e){return l.apply(this,arguments)}function l(){return(l=Object(s.a)(n.a.mark((function e(t){var r,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.email,a=t.password,e.next=3,Object(c.a)({url:"".concat("/admins","/login"),method:"POST",body:{email:r,password:a}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=Object(s.a)(n.a.mark((function e(t){var r,a,s,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.adminId,a=t.oldPassword,s=t.newPassword,o=t.newPasswordConfirm,e.next=3,Object(c.a)({url:"".concat("/admins","/").concat(r,"/change-password"),method:"PUT",body:{oldPassword:a,newPassword:s,newPasswordConfirm:o}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},220:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var a=r(181),n=r.n(a),s=r(67),c=r(182),o=r(40),u=r(45);function i(e){return console.log("TODO: handle error",e),o.a.dispatch(Object(u.b)(e)),null}var l="https://orient-backend-ke.herokuapp.com/api/v1";function d(e){return m.apply(this,arguments)}function m(){return(m=Object(c.a)(n.a.mark((function e(t){var r,a,c,o,u,d,m,f,b,w,h,v;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.url,a=t.method,c=t.body,o=t.query,u=t.headers,e.prev=1,d=p(o),m="".concat(l).concat(r,"?").concat(d),e.next=6,fetch(m,{method:a,headers:Object(s.a)({"Content-Type":"application/json"},u),body:JSON.stringify(c)});case 6:return f=e.sent,e.next=9,f.json();case 9:if(b=e.sent,w=b.status,h=b.data,v=b.error,!(f.status>=500)){e.next=15;break}return e.abrupt("return",i("Uh oh, something's not right. Try again later."));case 15:if(!(f.status>=400&&v)){e.next=17;break}return e.abrupt("return",i(v));case 17:return e.abrupt("return",{status:w,data:h,error:v});case 20:e.prev=20,e.t0=e.catch(1),i(e.t0.message);case 23:case"end":return e.stop()}}),e,null,[[1,20]])})))).apply(this,arguments)}function p(e){if(!e)return"";var t=[];for(var r in e)if(e.hasOwnProperty(r)&&"function"!==typeof r){var a=e[r];a&&(a=a.toString(),r=encodeURIComponent(r.replace(" ","+")),a=encodeURIComponent(a.replace(" ","+")),t.push("".concat(r,"=").concat(a)))}return t.join("&")}},229:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r(172);var a=r(173),n=(r(175),r(176)),s=(r(179),r(180)),c=r(0),o=r.n(c),u=r(199);function i(e){var t=e.title,r=e.children;return o.a.createElement(u.a,null,o.a.createElement(a.a,{justify:"center"},o.a.createElement(n.a,null,o.a.createElement("img",{src:"/orient-insurance/orient-logo.png",alt:"Company logo",style:{margin:"0 auto",display:"block",borderRadius:"10%",width:"75px",marginBottom:"1em"}}),o.a.createElement(s.a.Title,{level:3},t))),r)}},231:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));r(175);var a=r(176),n=(r(172),r(173)),s=(r(184),r(185)),c=r(181),o=r.n(c),u=r(67),i=r(182),l=(r(189),r(190)),d=r(186),m=r(0),p=r.n(m),f=r(13),b=r(65),w=r(229),h=(r(198),r(196)),v=(r(194),r(197));function g(){return p.a.createElement(h.a,null,p.a.createElement(n.a,{gutter:16},p.a.createElement(a.a,{span:24},p.a.createElement(l.a.Item,{label:"Old password",name:"oldPassword",rules:[{required:!0,message:"Password is required"}]},p.a.createElement(v.a.Password,null)))),p.a.createElement(n.a,{gutter:16},p.a.createElement(a.a,{span:24},p.a.createElement(l.a.Item,{label:"New password",name:"newPassword",rules:[{required:!0,message:"Password is required"},{pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=^.{8,45}$)/,message:"Password should contain numbers, letters and \n                at least 8 characters"}]},p.a.createElement(v.a.Password,null)))),p.a.createElement(n.a,{gutter:16},p.a.createElement(a.a,{span:24},p.a.createElement(l.a.Item,{label:"Confirm new password",dependencies:["newPassword"],hasFeedback:!0,name:"newPasswordConfirm",rules:[{required:!0,message:"Password is required"},function(e){var t=e.getFieldValue;return{validator:function(e,r){return t("newPassword")===r?Promise.resolve():Promise.reject("Passwords do not match.")}}}]},p.a.createElement(v.a.Password,null)))))}var E=r(217);r(214);function y(e){var t=e.addError,r=Object(f.h)(),c=l.a.useForm(),h=Object(d.a)(c,1)[0],v=Object(m.useState)(!1),y=Object(d.a)(v,2),j=y[0],O=y[1],P=Object(m.useState)(!1),k=Object(d.a)(P,2),x=k[0],N=k[1],T=function(){var e=Object(i.a)(o.a.mark((function e(){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.prev=1,e.next=4,h.validateFields();case 4:return a=e.sent,e.next=7,Object(E.a)(Object(u.a)({},null===r||void 0===r?void 0:r.state,{},a));case 7:(n=e.sent)&&n.data?(h.resetFields(),N(!0)):n&&n.error&&t(n.error),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("An error occurred",e.t0);case 14:return e.prev=14,O(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(){return e.apply(this,arguments)}}();return p.a.createElement(w.a,{title:"Change password"},p.a.createElement(n.a,{justify:"center"},p.a.createElement(a.a,{xs:20,sm:14,md:10,lg:8,xl:6},x?p.a.createElement("div",null,"Password change successful. Proceed to ",p.a.createElement(b.b,{to:"/login"},"login")):p.a.createElement(l.a,{className:"OForm",form:h},p.a.createElement(g,null),p.a.createElement(n.a,{justify:"space-between"},p.a.createElement(b.b,{to:"/login"},p.a.createElement(s.a,{type:"link"},"Login")),p.a.createElement(s.a,{type:"primary",onClick:T,loading:j},"Submit"))))))}},267:function(e,t,r){},791:function(e,t,r){"use strict";r.r(t);var a=r(29),n=r(231),s=r(45);t.default=Object(a.b)(null,(function(e){return{addError:function(t){return e(Object(s.b)(t))}}}))(n.a)}}]);
//# sourceMappingURL=10.5f033fad.chunk.js.map