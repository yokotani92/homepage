(this["webpackJsonpreact-redux-starter-app"]=this["webpackJsonpreact-redux-starter-app"]||[]).push([[0],{66:function(e,a,t){e.exports=t(77)},77:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),c=t.n(l),o=t(22),i=t(20),m={isDarktheme:!!window.matchMedia("(prefers-color-scheme: dark)").matches},s=Object(i.b)({toggleTheme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TOGGLE_THEME":return{isDarktheme:!e.isDarktheme};default:return e}}}),u=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,E=Object(i.d)(s,u()),p=t(60),h=t(40),d=t(129),b=t(128),f=t(124),g=t(133),v=t(134),w=t(123),k=t(58),y=t.n(k),O=t(125),N=t(136),x=t(126),j=t(127),D=t(55),T=t.n(D),_=t(56),B=t.n(_),M=t(57),P=t.n(M),S=t(130),W=t(32),z=t(115),C=t(137),G=t(12),I=t(117),R=t(120),V=t(119),A=t(122),L=t(121),H=Object(z.a)({root:{width:"100%",textAlign:"left",marginBottom:14},title:{marginBottom:14},content:{display:"inline-block",color:"textSecondary"}}),J=function(){var e=H();return r.a.createElement("div",null,r.a.createElement(I.a,{className:e.root},r.a.createElement(V.a,null,r.a.createElement(W.a,{className:e.title,variant:"h5",component:"h2"},"react-three-fiber\u306e\u30ae\u30e3\u30e9\u30ea\u30fc"),r.a.createElement(W.a,{className:e.content,variant:"body2",component:"p"},"react-three-fiber\u3067\u4f5c\u6210\u3057\u305f\u3082\u306e\u306e\u30ae\u30e3\u30e9\u30ea\u30fc\u3002")),r.a.createElement(R.a,null,r.a.createElement(L.a,{href:"https://yokotani92.github.io/react-three-fiber-starter/",underline:"none"},r.a.createElement(A.a,{size:"small"},"VIEW")))),r.a.createElement(I.a,{className:e.root},r.a.createElement(V.a,null,r.a.createElement(W.a,{className:e.title,variant:"h5",component:"h2"},"DP Visualizer"),r.a.createElement(W.a,{className:e.content,variant:"body2",component:"p"},"\u30ca\u30c3\u30d7\u30b5\u30c3\u30af\u554f\u984c\u306eDP\u30c6\u30fc\u30d6\u30eb\u306e\u66f4\u65b0\u3092JS\u3067\u53ef\u8996\u5316\u3057\u305f\u3084\u3064\u3002")),r.a.createElement(R.a,null,r.a.createElement(L.a,{href:"https://yokotani92.github.io/dp-visualizer/",underline:"none"},r.a.createElement(A.a,{size:"small"},"VIEW")))),r.a.createElement(I.a,{className:e.root},r.a.createElement(V.a,null,r.a.createElement(W.a,{className:e.title,variant:"h5",component:"h2"},"React-Redux\u306estarter"),r.a.createElement(W.a,{className:e.content,variant:"body2",component:"p"},"React-Redux\u3092\u4f7f\u3063\u305fCount up/ down\u30dc\u30bf\u30f3\u3002")),r.a.createElement(R.a,null,r.a.createElement(L.a,{href:"https://yokotani92.github.io/react-redux-starter-app/",underline:"none"},r.a.createElement(A.a,{size:"small"},"VIEW")))),r.a.createElement(I.a,{className:e.root},r.a.createElement(V.a,null,r.a.createElement(W.a,{className:e.title,variant:"h5",component:"h2"},"react-three-fiber\u3092\u4f7f\u3063\u305f\u30da\u30fc\u30b8\u306e\u30c6\u30b9\u30c8"),r.a.createElement(W.a,{className:e.content,variant:"body2",component:"p"},"react-three-fiber\u306e\u30b5\u30f3\u30d7\u30eb\u3092\u52d5\u304b\u3057\u3066\u307f\u305f\u3060\u3051\u3002\u9762\u767d\u3044\u3002")),r.a.createElement(R.a,null,r.a.createElement(L.a,{href:"https://yokotani92.github.io/react-three-trial/",underline:"none"},r.a.createElement(A.a,{size:"small"},"VIEW")))))},U=t(135),X=Object(z.a)((function(e){return Object(C.a)({switch:{textAlign:"left",display:"inline-block"}})})),$=function(){var e=Object(o.c)((function(e){return e.toggleTheme.isDarktheme})),a=Object(o.b)(),t=X();return r.a.createElement("div",{className:t.switch},r.a.createElement(U.a,{checked:e,color:"default",inputProps:{"aria-label":"checkbox with default color"},onClick:function(){return a({type:"TOGGLE_THEME"})}}))},q=Object(z.a)((function(e){return Object(C.a)({root:{display:"flex"},drawer:Object(h.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(h.a)({color:"inherit",backgroundColor:"default"},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(h.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)}})}));function F(e){var a=e.container,t=q(),n=Object(G.a)(),l=r.a.useState(!1),c=Object(p.a)(l,2),o=c[0],i=c[1],m=function(){i(!o)},s=r.a.createElement("div",null,r.a.createElement("div",{className:t.toolbar}),r.a.createElement(f.a,null),r.a.createElement(O.a,null,r.a.createElement(L.a,{href:"https://github.com/yokotani92",underline:"none",color:"inherit"},r.a.createElement(N.a,{button:!0},r.a.createElement(x.a,null,r.a.createElement(T.a,null)),r.a.createElement(j.a,{primary:"GitHub"}))),r.a.createElement(N.a,{button:!0},r.a.createElement(x.a,null,r.a.createElement(B.a,null)),r.a.createElement(j.a,{primary:"About Me"})),r.a.createElement(N.a,null,r.a.createElement(x.a,null,r.a.createElement(P.a,null)),r.a.createElement($,null))));return r.a.createElement("div",{className:t.root},r.a.createElement(b.a,null),r.a.createElement(d.a,{position:"fixed",className:t.appBar},r.a.createElement(S.a,null,r.a.createElement(w.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:m,className:t.menuButton},r.a.createElement(y.a,null)),r.a.createElement(W.a,{variant:"h6",noWrap:!0},"\u5b9f\u9a13\u5ba4"))),r.a.createElement("nav",{className:t.drawer,"aria-label":"mailbox folders"},r.a.createElement(v.a,{smUp:!0,implementation:"css"},r.a.createElement(g.a,{container:a,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:o,onClose:m,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},s)),r.a.createElement(v.a,{xsDown:!0,implementation:"css"},r.a.createElement(g.a,{classes:{paper:t.drawerPaper},variant:"permanent",open:!0},s))),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.toolbar}),r.a.createElement(J,null)))}var K=t(59),Q=t(132),Y=t(131),Z=t(41),ee=function(){var e=Object(o.c)((function(e){return e.toggleTheme.isDarktheme})),a=Object(K.a)({palette:{type:e?"dark":"light",primary:{main:Y.a.A400},secondary:{main:Z.a.A200}}});return r.a.createElement(Q.a,{theme:a},r.a.createElement(b.a,null),r.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:E},r.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.0f978aba.chunk.js.map