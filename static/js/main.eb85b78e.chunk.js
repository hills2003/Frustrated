(this["webpackJsonpweather-project"]=this["webpackJsonpweather-project"]||[]).push([[0],{35:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(21),s=c.n(r),i=(c(35),c(10)),o=(c.p,c(24));c(55);o.a.initializeApp({apiKey:"AIzaSyBRXU_CxKhYCDwdN5UlQDWBkEDa9vggM8E",authDomain:"lewek-b57c3.firebaseapp.com",databaseURL:"https://lewek-b57c3-default-rtdb.firebaseio.com",projectId:"lewek-b57c3",storageBucket:"lewek-b57c3.appspot.com",messagingSenderId:"661612329725",appId:"1:661612329725:web:b4205de10ded3ad3d2dc94"});var j=function(e){var t=new o.a.auth.GoogleAuthProvider;return o.a.auth().signInWithPopup(t).then((function(e){})).catch((function(e){return console.log(e)}))},u=function(){return o.a.auth().signOut()},b=o.a,d=c(2),h=a.a.createContext();function l(){return Object(n.useContext)(h)}var p=function(e){var t=e.children,c=Object(n.useState)(),a=Object(i.a)(c,2),r=a[0],s=a[1],o=Object(n.useState)(!0),l=Object(i.a)(o,2),p=l[0],O=l[1],f=Object(n.useState)(!0),m=Object(i.a)(f,2),g=m[0],x=m[1];Object(n.useEffect)((function(){return b.auth().onAuthStateChanged((function(e){s(e),x(!1)}))}),[]);var v={Login:j,logout:u,User:r,dark:p,darkFunction:function(){O(!p)}};return Object(d.jsx)(h.Provider,{value:v,children:!g&&t})},O=c(84),f=c(46),m=c.n(f);var g=function(e){var t=l(),c=t.logout,a=t.User,r=t.darkFunction,s=t.dark,o=Object(n.useState)(),j=Object(i.a)(o,2),u=j[0],b=j[1],h=Object(n.useState)(),p=Object(i.a)(h,2),f=p[0],g=p[1],x=Object(n.useState)(),v=Object(i.a)(x,2),A=v[0],w=v[1],k=Object(n.useState)(),S=Object(i.a)(k,2),N=S[0],C=S[1],B=Object(n.useState)(),y=Object(i.a)(B,2),E=y[0],U=y[1],D=Object(n.useState)(),M=Object(i.a)(D,2),L=M[0],G=M[1];Object(n.useEffect)((function(){G(a.photoURL)}),[]),Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e.coords.latitude,"&lon=").concat(e.coords.longitude,"&appid=e3c708905690dc8e8dbb1ec36049bbb3")).then((function(e){return e.json()})).then((function(e){J(e.name),W(e.sys.country),I(e.weather[0].description),Z(e.main.temp_min)}))}),(function(e){fetch("https://api.openweathermap.org/data/2.5/weather?q=london&appid=e3c708905690dc8e8dbb1ec36049bbb3").then((function(e){return e.json()})).then((function(e){J(e.name),I(e.weather[0].description)}))}),{enableHighAccuracy:!0})}),[]);var Q=Object(n.useState)(),R=Object(i.a)(Q,2),z=R[0],I=R[1],V=Object(n.useState)(),F=Object(i.a)(V,2),K=F[0],J=F[1],P=Object(n.useState)(),q=Object(i.a)(P,2),H=q[0],W=q[1],Y=Object(n.useState)(),T=Object(i.a)(Y,2),_=T[0],Z=T[1];return Object(d.jsxs)("div",{className:"mini-card",children:[Object(d.jsxs)("div",{className:s?"left-pane":"left-pane2",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABQElEQVRIS+2U4TFDQRRGTypAB1SACuiAEqgAFZAOogJUgApEBzpAB1TAnLib2bzsvn1j5v3L/kky7+Y79/vufTth5DMZWZ8NoJnwkIi2gQvgGDgA/P0GPAG3wFcfpQVQ8CVESzqKnwesyOkD2PFjiL8CM2AeHfvsBjgKVSH3JUIfwBj2gQfgrBKDkOuA7pXiKgHszj/5+QnsNiapK51Mw9VKeRdgp3dZRdV6VmMjzknHh91mckAqtOYqMu3dkEzsJ747BzdL2OLkANfupGa1EVMCWGZTOvnoAnywBey0drsCc1Y6cB7LxcgdpC7+C5Ar5D0aVGclot5taN4JfwUJsNy+3MFpvFgWut/aXOQ48CjuBrosz4B6a9d1enEGahbLvuPOWhtyqu5eA0NhxuJ6XubOW5fdUPFq3QbQjHD0iH4BuN09Ge9SplMAAAAASUVORK5CYII="}),Object(d.jsx)("h3",{children:"METEOROLOG"})]}),Object(d.jsx)("div",{className:"list",children:Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Dashboard"}),Object(d.jsx)(O.a,{onChange:function(){return r()}})," ",s?"dark":"light"]})})}),Object(d.jsx)("div",{clasName:"current-weather",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("h4",{children:[K,",",H]}),Object(d.jsx)("p",{className:"mild",children:z}),Object(d.jsx)("p",{className:"celsius",children:Math.round(_-273.15)+" c"})]})})]}),Object(d.jsxs)("div",{className:"right-pane",children:[Object(d.jsxs)("div",{clasName:"top",children:[Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault(),fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(u,"&appid=e3c708905690dc8e8dbb1ec36049bbb3")).then((function(e){return e.json()})).then((function(e){g(e.main.temp_min),w(e.main.temp_max),C(e.weather[0].description),U(e.name)}))},children:Object(d.jsx)("input",{className:"input",value:u,onChange:function(e){return b(e.target.value)},"data-inputRef":!0,type:"search",placeholder:"search"})}),Object(d.jsx)("img",{onClick:function(){return c()},title:"Log out",className:"img",src:L,alt:"user profile"}),Object(d.jsxs)("p",{className:"p",children:[" ",Object(d.jsx)(m.a,{})," "]})]}),u?Object(d.jsxs)("div",{className:"country",children:[Object(d.jsxs)("p",{children:[" min_temp : ",Math.round(f-273.15)+" c"]}),Object(d.jsxs)("p",{children:["max_temp : ",Math.round(A-273.15)+" c"]}),Object(d.jsx)("p",{children:N}),Object(d.jsx)("p",{children:E})]}):""]})]})};var x=function(e){var t=l(),c=(t.logout,t.User,t.dark);return Object(d.jsx)("main",{className:c?"weather":"weather2",children:Object(d.jsx)(g,{})})},v=c(29),A=c(5),w=c(38),k=c.n(w),S=c(47);var N=function(e){var t=l().Login,c=Object(A.g)(),n=function(){var e=Object(S.a)(k.a.mark((function e(n){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,t();case 4:c.push("/home"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"button",children:Object(d.jsx)("form",{children:Object(d.jsx)("input",{type:"button",onClick:n,value:"sign in with google"})})})},C=c(33),B=c(48);var y=function(e){var t=e.component,c=Object(B.a)(e,["component"]),n=l().User;return Object(d.jsx)(A.b,Object(C.a)(Object(C.a)({},c),{},{render:function(e){return n?Object(d.jsx)(t,Object(C.a)({},e)):Object(d.jsx)(A.a,{to:"/"})}}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(v.a,{children:Object(d.jsx)(p,{children:Object(d.jsxs)(A.d,{children:[Object(d.jsx)(y,{path:"/home",component:x}),Object(d.jsx)(A.b,{exact:!0,path:"/Frustrated",component:N})]})})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.eb85b78e.chunk.js.map