(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{137:function(t,e,n){},218:function(t,e,n){},358:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(44),o=n.n(i),s=(n(218),n(175)),r=n(176),l=n(177),d=n(206),j=(n(137),n(386)),u=n(180),h=n.n(u),b=n(30),O=n(204),p=n(379),f=n(104),g=n(380),m=n(381),x=n(186),S=n.n(x),v=n(187),y=n.n(v),C=n(13),E=function(){var t=c.a.useState("on"===window.localStorage.getItem("darkMode")),e=Object(b.a)(t,2),n=e[0],a=e[1],i=Object(O.a)({palette:{primary:{main:f.a[800]},type:n?"dark":"light"}});return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(p.a,{theme:i,children:[Object(C.jsx)(g.a,{})," ",n?Object(C.jsxs)(m.a,{id:"btn",color:"inherit",onClick:function(){window.localStorage.setItem("darkMode","off"),a(!1)},children:[Object(C.jsx)(S.a,{})," "]}):Object(C.jsxs)(m.a,{id:"btn",color:"inherit",onClick:function(){window.localStorage.setItem("darkMode","on"),a(!0)},children:[Object(C.jsx)(y.a,{})," "]})]})," "]})},T=n(388),k=n(385),_=n(202),w=n(203),F=n(108),I=n(201),R=function(t){return console.log(t.data),Object(C.jsxs)(T.a,{layout:"vertical",width:500,height:400,data:t.data,margin:{top:20,right:20,bottom:20,left:20},children:[Object(C.jsx)(k.a,{stroke:"#f5f5f5"}),Object(C.jsx)(_.a,{type:"number",unit:"%"}),Object(C.jsx)(w.a,{dataKey:"description",type:"category"}),Object(C.jsx)(F.a,{}),Object(C.jsx)(I.a,{dataKey:"score",barSize:15,fill:"#413ea0"})]})},P=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={content:[],data:[]},a.KEY=Object({NODE_ENV:"production",PUBLIC_URL:"/my-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APIKEY,a.URI="https://vision.googleapis.com/v1/images:annotate?key=",a.FQDN=a.URI+a.KEY,a}return Object(r.a)(n,[{key:"handleChange",value:function(t){var e=t.replace("data:image/jpeg;base64,","");this.setState({content:e}),this.SendRequest()}},{key:"SendRequest",value:function(){var t=this,e={headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({requests:[{features:[{type:"LABEL_DETECTION",maxResults:5}],image:{content:this.state.content}}]})};window.fetch(this.FQDN,e).then((function(t){return t.json()})).then((function(t){return t.responses[0].labelAnnotations})).then((function(t){return t.map((function(t){return{description:t.description,score:100*t.score}}))})).then((function(e){return t.setState({data:e})})).then((function(t){return console.log(t)})),console.log(this.state)}},{key:"render",value:function(){var t=this;return Object(C.jsxs)("div",{children:[Object(C.jsx)(E,{}),Object(C.jsx)("h1",{children:"\u753b\u50cf\u306b\u542b\u307e\u308c\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),Object(C.jsx)("div",{id:"fileselect",children:Object(C.jsx)(h.a,{labelText:"",multiple:!1,callbackFunction:function(e){return t.handleChange(e.base64)},buttonComponent:Object(C.jsx)(j.a,{variant:"outlined",color:"secondary",children:"SelectFile"}),accept:"image/*"})}),Object(C.jsx)("div",{id:"chart",children:Object(C.jsx)(R,{data:this.state.data})})]})}}]),n}(c.a.Component),A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,389)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),i(t),o(t)}))};o.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(P,{})}),document.getElementById("root")),A()}},[[358,1,2]]]);
//# sourceMappingURL=main.c26d1336.chunk.js.map