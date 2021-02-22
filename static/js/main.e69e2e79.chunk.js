(this["webpackJsonparea-def-tool"]=this["webpackJsonparea-def-tool"]||[]).push([[0],{47:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){},51:function(t,e,n){},56:function(t,e,n){},57:function(t,e,n){},58:function(t,e,n){},60:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),c=n(12),a=n.n(c),o=(n(47),n(6)),u=n(3),l=(n(48),n(49),n(1));function s(t){var e=t.source,n=t.setVideo,i=t.setSlider,c=(t.value,Object(r.useRef)(null));Object(r.useEffect)((function(){if(c.current&&e){c.current.src=e,n(c.current);!function t(){setTimeout((function(){var e;(null===(e=c.current)||void 0===e?void 0:e.duration)?a(1):t()}),10)}()}}),[e]);var a=function(t){if(c.current&&e&&t){var n=t<1?1:t>100?100:t;c.current.currentTime=n/100*c.current.duration,i(n)}};return Object(l.jsxs)("div",{className:"VideoCanvas",children:[Object(l.jsx)("input",{className:"slider",type:"range",min:"1",max:"100",onChange:function(t){a(+t.target.value)}}),Object(l.jsx)("video",{ref:c,hidden:!0})]})}var d=n(85);n(51);var f=function(t){var e=t.setFile,n=t.accept_types,i=void 0===n?"":n,c=Object(r.useRef)(null);return Object(l.jsxs)("div",{className:"FilePicker",children:[Object(l.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(){var t;return null===(t=c.current)||void 0===t?void 0:t.click()},children:"Select Video"}),Object(l.jsx)("input",{hidden:!0,ref:c,type:"file",accept:i,onChange:function(t){var n,r,i;return e(null!==(n=null===(r=c.current)||void 0===r||null===(i=r.files)||void 0===i?void 0:i.item(0))&&void 0!==n?n:null)}})]})},h=n(36),j=n(37);function v(t){var e=Object(o.a)(t).sort((function(t,e){return t[1]<e[1]?-1:1})).slice(0,2).sort((function(t,e){return t[0]<e[0]?-1:1}))[0],n=t.findIndex((function(t){return t===e})),r=[],i=t[(n+1)%t.length],c=t[(n+t.length-1)%t.length];if(i[1]<c[1])for(var a=0;a<t.length;a++){var u=t[(n+a)%t.length];r.push(Object(o.a)(u))}else for(var l=0;l<t.length;l++){var s=t[(n+t.length-l)%t.length];r.push(Object(o.a)(s))}return r}function b(t,e){for(var n=!1,r=0;r<e.length;r++){var i=[e[r],e[(r+1)%e.length]];(i[0][1]<=t[1]&&i[1][1]>=t[1]||i[1][1]<=t[1]&&i[0][1]>=t[1])&&t[0]<(i[0][0]-i[1][0])*(t[1]-i[1][1])/(i[0][1]-i[1][1])+i[1][0]&&(n=!n)}return n}function p(t,e){return Math.hypot(t[0]-e[0],t[1]-e[1])}function O(t,e){var n=m(e[1],e[0]),r=p(e[0],e[1]),i=y(n,1/r),c=g(m(t,e[0]),i);return c<0||c>r?null:x(e[0],y(i,c))}function g(t,e){return t[0]*e[0]+t[1]*e[1]}function x(t,e){return[t[0]+e[0],t[1]+e[1]]}function m(t,e){return x(t,[-(n=e)[0],-n[1]]);var n}function y(t,e){return[t[0]*e,t[1]*e]}function k(t,e,n){return x(y(n,t[0]),y(e,t[1]))}function S(t,e,n){var r=(t[0]*n[1]-t[1]*n[0])/(e[0]*n[1]-e[1]*n[0]);return[(t[0]-e[0]*r)/n[0],r]}function w(t,e){var n=y(e,1/function(t){return p([0,0],t)}(e));return k(t,n,[n[1],-n[0]])}var C,D=function(){function t(e,n){Object(h.a)(this,t),this.id=void 0,this.shape=void 0,this.isCarWalkable=!0,this.direction=null,this.isParking=!1,this.stop=null,this.isSelected=!1,this.id=t.newId(),this.shape=null!==e&&void 0!==e?e:[[-1,-1],[-1,-1],[-1,-1],[-1,-1]],n&&(this.direction=n)}return Object(j.a)(t,[{key:"toAreaDictionary",value:function(){var t,e,n=v(this.shape),r=null!==(t=this.direction)&&void 0!==t?t:[0,0];return{id:this.id,points:{lu:n[0].map((function(t){return Math.round(t)})),ru:n[1].map((function(t){return Math.round(t)})),rb:n[2].map((function(t){return Math.round(t)})),lb:n[3].map((function(t){return Math.round(t)}))},carWalk:this.isCarWalkable,dir:{left:g(r,[-1,0])>.25,up:g(r,[0,1])>.25,right:g(r,[1,0])>.25,down:g(r,[0,-1])>.25},parking:this.isParking,stop:"".concat(null!==(e=this.stop)&&void 0!==e?e:"None"),ref:this}}},{key:"fromAreaDictionary",value:function(t){this.shape=Object.values(t.points),this.isCarWalkable=t.carWalk;var e={left:[-1,0],right:[1,0],up:[0,1],down:[0,-1]};return this.direction=Object.entries(t.dir).map((function(t){var n=Object(u.a)(t,2),r=n[0];return n[1]?e[r]:[0,0]})).reduce((function(t,e){return x(t,e)})),this.isParking=t.parking,this.stop=t.stop,t.ref=this,this}}],[{key:"newId",value:function(){return t.counter++}}]),t}();D.counter=0,function(t){t[t.ADD=0]="ADD",t[t.SELECT=1]="SELECT"}(C||(C={}));n(56);function A(t){var e=t.value,n=t.onSelect,r=t.onAdd;return Object(l.jsxs)("div",{className:"ToolSelector",children:[Object(l.jsx)(d.a,{variant:e===C.ADD?"contained":"outlined",color:"secondary",onClick:r,children:"ADD"}),Object(l.jsx)(d.a,{variant:e===C.SELECT?"contained":"outlined",color:"secondary",onClick:n,children:"SELECT"})]})}var E=n(26),L=(n(57),.25),N={width:2,stroke:"rgb(250, 50, 50)",fill:"rgba(250, 50, 50, ".concat(L,")"),arrow:"rgba(250, 50, 50, ".concat(.5,")"),selected:{width:2,stroke:"rgb(255, 200, 50)",fill:"rgba(255, 200, 50, ".concat(L,")"),arrow:"rgba(255, 200, 50, ".concat(.5,")")}},W={width:2,stroke:"rgb(50, 50, 250)",fill:"rgba(50, 50, 250, ".concat(L,")"),arrow:"rgba(50, 50, 250, ".concat(.5,")"),selected:{width:2,stroke:"rgb(50, 250, 250)",fill:"rgba(50, 250, 250, ".concat(L,")"),arrow:"rgba(50, 250, 250, ".concat(.5,")")}};function M(t){var e=t.img,n=t.quads,i=t.newQuad,c=t.tool,a=t.setSelected,s=t.updateQuads,d=t.deleteQuads,f=t.slider,h=t.width,j=t.height,g=Object(r.useState)([]),A=Object(u.a)(g,2),L=A[0],M=A[1],R=Object(r.useState)(!1),T=Object(u.a)(R,2),P=T[0],I=T[1],U=Object(r.useState)(null),B=Object(u.a)(U,2),X=B[0],Y=B[1],F=Object(r.useState)(null),Q=Object(u.a)(F,2),V=Q[0],_=Q[1],q=Object(r.useRef)(null),J=Object(r.useState)({x:0,y:0}),H=Object(u.a)(J,2),z=H[0],G=H[1],K=1080,Z=1920;Object(r.useEffect)((function(){var t=q.current,r=null===t||void 0===t?void 0:t.getContext("2d");if(t&&r){K=t.height,Z=t.width;try{if(!e)throw Error;r.drawImage(e,0,0,t.width,t.height)}catch(f){r.fillStyle="#fff",r.fillRect(0,0,t.width,t.height)}var i=[0,0];P&&X&&(i=[z.x-X[0],z.y-X[1]]);var a,u=Object(E.a)(n);try{var l=function(){var t,e=a.value,c=void 0;c=e.isCarWalkable?N:W,e.isSelected&&(c=c.selected),r.lineWidth=c.width,r.strokeStyle=c.stroke,r.fillStyle=c.fill;var o=e.isSelected?e.shape.map((function(t,r){return V&&V.some((function(t){return t===r}))?$(x(t,i),n.filter((function(t){return t.id!==e.id})).map((function(t){return t.shape}))):t})):e.shape;tt(r,o,e.isSelected),nt(r,o,null!==(t=e.direction)&&void 0!==t?t:[0,0],c.arrow)};for(u.s();!(a=u.n()).done;)l()}catch(h){u.e(h)}finally{u.f()}if(z.x&&z.y&&L&&c===C.ADD){var s=!1,d=[$([z.x,z.y],n.map((function(t){return t.shape})))].concat(Object(o.a)(L));3===L.length&&(s=!0),r.lineWidth=N.width,r.strokeStyle=N.stroke,r.fillStyle=N.fill,tt(r,d,!0,s)}}}),[e,n,c,z,L,f,h]);var $=function(t,e){e.push([[0,0],[Z,0],[Z,K],[0,K]]);var n=e.flat().reduce((function(e,n){var r=Object(u.a)(e,2),i=r[0],c=r[1],a=p(t,n);return a<i||-1===i?[a,n]:[i,c]}),[-1,null]),r=Object(u.a)(n,2),i=r[0],c=r[1];if(c&&i<25)t=c;else{var a=e.reduce((function(e,n){var r=Object(u.a)(e,2),i=r[0],c=r[1],a=n.reduce((function(e,n,r,i){var c,a=Object(u.a)(e,2),o=a[0],l=a[1],s=i[(r+1)%i.length],d=O(t,[n,s]);return d&&((c=p(t,d))<o||-1===o)?[c,d]:[o,l]}),[-1,null]),o=Object(u.a)(a,2),l=o[0],s=o[1];return s&&l<i||-1===i?[l,s]:[i,c]}),[-1,null]),o=Object(u.a)(a,2);i=o[0],(c=o[1])&&i<25&&(t=c)}return t},tt=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];e[0]&&t.moveTo(e[0][0],e[0][1]),t.beginPath();var i,c=Object(E.a)(e);try{for(c.s();!(i=c.n()).done;){var a=i.value;t.lineTo(a[0],a[1])}}catch(s){c.e(s)}finally{c.f()}if(r&&t.closePath(),t.stroke(),t.fill(),n){var o,u=Object(E.a)(e);try{for(u.s();!(o=u.n()).done;){var l=o.value;et(t,l)}}catch(s){u.e(s)}finally{u.f()}}},et=function(t,e){var n=t.fillStyle,r=t.strokeStyle;t.fillStyle="#5f5",t.strokeStyle="#000",t.beginPath(),t.arc(e[0],e[1],5,0,6.3),t.closePath(),t.fill(),t.stroke(),t.fillStyle=n,t.strokeStyle=r},nt=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"#000",i=m(e[3],e[0]),c=m(e[1],e[0]),a=m(e[2],e[0]),o=S(a,i,c),u=o[0]-1,l=o[1]-1,s=[[-.5,-.5],[0,.5],[.5,-.5],[0,-.3]];s=(s=(s=(s=(s=(s=(s=s.map((function(t){return w(t,n)}))).map((function(t){return[t[0],-t[1]]}))).map((function(t){return y(t,.25)}))).map((function(t){return x(t,[.5,.5])}))).map((function(t){return[t[0]+t[0]*t[1]*u,t[1]+t[0]*t[1]*l]}))).map((function(t){return k(t,i,c)}))).map((function(t){return x(t,e[0])}));var d=t.fillStyle,f=t.strokeStyle;t.fillStyle=r,tt(t,s,!1,!0),t.fillStyle=d,t.strokeStyle=f},rt=function(){var t=n.find((function(t){return t.isSelected})),e=null;if(t){var r,i=t.shape;e=[-1];var c=i.reduce((function(t,e,n){var r=Object(u.a)(t,2),i=r[0],c=r[1],a=p([z.x,z.y],e);return a<i?[a,n]:[i,c]}),[999,-1]),o=Object(u.a)(c,2);if(r=o[0],e[0]=o[1],r>25){var l=i.reduce((function(t,e,n,r){var i=Object(u.a)(t,2),c=i[0],a=i[1],o=(n+1)%r.length,l=r[o],s=O([z.x,z.y],[e,l]);if(!s)return[c,a];var d=p([z.x,z.y],s);return d<c?[d,[n,o]]:[c,a]}),[999,[-1]]),s=Object(u.a)(l,2);r=s[0],e=s[1]}r>25&&(e=b([z.x,z.y],t.shape)?[0,1,2,3]:null)}if(e)_(e),I(!0),Y([z.x,z.y]);else{var d=function(t,e){for(var n=0;n<e.length;n++)if(b(t,e[n]))return n;return-1}([z.x,z.y],n.map((function(t){return t.shape})));a(d)}},it=function(){if(P&&X){var t=n.filter((function(t){return t.isSelected})),e=[z.x-X[0],z.y-X[1]],r=t.map((function(t){return t.shape=t.shape.map((function(r,i){return V&&V.some((function(t){return t===i}))?$(x(r,e),n.filter((function(e){return e.id!==t.id})).map((function(t){return t.shape}))):r})),t}));s(r),I(!1),_(null),Y(null)}};return Object(l.jsx)("div",{className:"Canvas",children:Object(l.jsx)("canvas",{ref:q,onMouseDown:function(){switch(c){case C.ADD:!function(){if(z.x&&z.y){var t=[z.x,z.y],e=[t=$(t,n.map((function(t){return t.shape})))].concat(Object(o.a)(L));if(4===e.length){var r=new D(v(e),[0,1]);r.isSelected=!0,a(-1),i(r),M([])}else M(e)}}();break;case C.SELECT:rt();break;default:throw Error("No tool selected???")}},onMouseUp:function(){it()},onMouseLeave:function(){M([]),P&&4===(null===V||void 0===V?void 0:V.length)?(I(!1),_(null),Y(null),d(n.filter((function(t){return t.isSelected})))):it()},onMouseMove:function(t){return function(t){var e=q.current;if(e){var n=e.clientWidth/e.width,r=[e.offsetLeft,e.offsetTop];G({x:(t.pageX-r[0])/n,y:(t.pageY-r[1])/n})}}(t)},width:null!==h&&void 0!==h?h:1920,height:null!==j&&void 0!==j?j:1080})})}var R=n(81),T=n(82);n(58);function P(t){var e=t.target,n=t.update,i=t.selectById,c=Object(r.useState)(),a=Object(u.a)(c,2),s=a[0],f=a[1],h=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(t.changed=e,s){var n=null===s||void 0===s?void 0:s.filter((function(e){return e.id!==t.id}));f([t].concat(Object(o.a)(n)).sort((function(t,e){return t.id<e.id?-1:1})))}};function j(t){var r,c,a=Object.entries(t.points).flatMap((function(e){var n,r,i=Object(u.a)(e,2),c=i[0],a=i[1];return n=c,r=t,a.map((function(t,e){return Object(l.jsx)("td",{children:Object(l.jsx)("input",{type:"number",value:Math.round(t),onChange:function(t){r.points[n][e]=+t.target.value,h(r)}})},"".concat(n).concat(e))}))})),o=Object.entries(t.dir).map((function(e){var n=Object(u.a)(e,2),r=n[0],i=n[1];return Object(l.jsx)("td",{children:Object(l.jsx)("input",{type:"checkbox",checked:i,onChange:function(){t.dir[r]=!t.dir[r],h(t)}})},r)}));return Object(l.jsxs)("tr",{onClick:function(){return i(t.id)},className:(null===(r=t.ref)||void 0===r?void 0:r.isSelected)?"selected":"",children:[a,Object(l.jsx)("td",{children:Object(l.jsx)("input",{type:"checkbox",checked:t.carWalk,onChange:function(){t.carWalk=!t.carWalk,h(t)}})},"iscarwalkable"),o,Object(l.jsx)("td",{children:Object(l.jsx)("input",{type:"checkbox",checked:t.parking,onChange:function(){t.parking=!t.parking,h(t)}})},"isparking"),Object(l.jsx)("td",{children:Object(l.jsx)("input",{type:"text",value:null!==(c=t.stop)&&void 0!==c?c:"None",onChange:function(e){t.stop=e.target.value,h(t)}})},"isstop"),Object(l.jsx)("td",{className:t.changed?"space":"hide"}),Object(l.jsx)("td",{className:t.changed?"":"hide",children:Object(l.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(){h(t,!1),n([e.find((function(e){return e.id===t.id})).fromAreaDictionary(t)])},children:Object(l.jsx)(R.a,{})})},"update"),Object(l.jsx)("td",{className:t.changed?"":"hide",children:Object(l.jsx)(d.a,{variant:"contained",color:"secondary",className:t.changed?"":"hide",onClick:function(){t=e.find((function(e){return e.id===t.id})).toAreaDictionary(),h(t,!1)},children:Object(l.jsx)(T.a,{})})},"discard")]},t.id)}return Object(r.useEffect)((function(){var t=e.map((function(t){return t.toAreaDictionary()})),n=null===s||void 0===s?void 0:s.filter((function(t){return t.changed}));t=(t=t.map((function(t){var e=null===n||void 0===n?void 0:n.find((function(e){return e.id===t.id}));return e||t}))).sort((function(t,e){return t.id<e.id?-1:1})),f(t)}),[e]),Object(l.jsx)("div",{className:"Inspector",children:Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"luX     "}),Object(l.jsx)("th",{children:"luY     "}),Object(l.jsx)("th",{children:"ruX     "}),Object(l.jsx)("th",{children:"ruY     "}),Object(l.jsx)("th",{children:"rbX     "}),Object(l.jsx)("th",{children:"rbY     "}),Object(l.jsx)("th",{children:"lbX     "}),Object(l.jsx)("th",{children:"lbY     "}),Object(l.jsx)("th",{children:"CarWalk "}),Object(l.jsx)("th",{children:"Left    "}),Object(l.jsx)("th",{children:"Up      "}),Object(l.jsx)("th",{children:"Right   "}),Object(l.jsx)("th",{children:"Down    "}),Object(l.jsx)("th",{children:"Parking "}),Object(l.jsx)("th",{children:"Stop    "})]})}),Object(l.jsx)("tbody",{children:null===s||void 0===s?void 0:s.map((function(t){return j(t)}))})]})})}var I=n(29),U=n.n(I),B=n(38),X=(n(60),["luX","luY","ruX","ruY","rbX","rbY","lbX","lbY","CarWalk","Left","Up","Right","Down","Parking","Stop"]);function Y(t){var e=t.target,n=t.source,i=t.load,c=Object(r.useRef)(null),a=Object(r.useRef)(null),o=n?n.replace(".mp4","_areas.csv"):"areas.csv",u=function(t){var e=t.map(s);return[X.join(",")].concat(e).join("\n")},s=function(t){var e=t.toAreaDictionary(),n=[e.points.lu,e.points.ru,e.points.rb,e.points.lb].map((function(t){return t.join(",")})).join(","),r=e.carWalk?1:0,i=e.parking?1:0,c=e.stop;return[n,r,[e.dir.left,e.dir.up,e.dir.right,e.dir.down].map((function(t){return t?1:0})).join(","),i,c].join(",")},f=function(){var t=Object(B.a)(U.a.mark((function t(e){var n,r,c,a,o;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=3;break}return console.error("Unable to load file!"),t.abrupt("return");case 3:return t.next=5,e.text();case 5:n=t.sent,r=n.split("\n").filter((function(t){return""!==t})),c=r.slice(1).map((function(t){return t.split(",")})),a=c.map((function(t){var e={points:{},dir:{}},n=t.map((function(t){return+t}));return e.points.lu=n.slice(0,2),e.points.ru=n.slice(2,4),e.points.rb=n.slice(4,6),e.points.lb=n.slice(6,8),e.carWalk=n[8]>0,e.dir.left=n[9]>0,e.dir.up=n[10]>0,e.dir.right=n[11]>0,e.dir.down=n[12]>0,e.parking=n[13]>0,e.stop=t[14],e})),o=a.map((function(t){return(new D).fromAreaDictionary(t)})),i(o);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"IOManager",children:[Object(l.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(){var t;return null===(t=a.current)||void 0===t?void 0:t.click()},children:"Load CSV"}),Object(l.jsx)("input",{hidden:!0,type:"file",ref:a,accept:".csv",onChange:function(){var t,e,n;return f(null!==(t=null===(e=a.current)||void 0===e||null===(n=e.files)||void 0===n?void 0:n.item(0))&&void 0!==t?t:null)}}),Object(l.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(){var t,n,r=u(e),i=new Blob([r],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(i);null===(t=c.current)||void 0===t||t.setAttribute("href",a),null===(n=c.current)||void 0===n||n.click(),URL.revokeObjectURL(a)},children:"Download"}),Object(l.jsx)("a",{ref:c,download:o,hidden:!0})]})}function F(){var t=Object(r.useState)(null),e=Object(u.a)(t,2),n=e[0],i=e[1],c=Object(r.useState)(""),a=Object(u.a)(c,2),d=a[0],h=a[1],j=Object(r.useState)(null),v=Object(u.a)(j,2),b=v[0],p=v[1],O=Object(r.useState)(),g=Object(u.a)(O,2),x=g[0],m=g[1],y=Object(r.useState)([]),k=Object(u.a)(y,2),S=k[0],w=k[1],D=Object(r.useState)(C.ADD),E=Object(u.a)(D,2),L=E[0],N=E[1];Object(r.useEffect)((function(){if(n){var t=URL.createObjectURL(n);h(t)}}),[n]);var W=function(t){S.map((function(t){return t.isSelected=!1})),t>=0&&t<S.length&&(S[t].isSelected=!0),w(Object(o.a)(S))},R=function(t){var e=S.filter((function(e){return t.every((function(t){return t.id!==e.id}))}));w([].concat(Object(o.a)(t),Object(o.a)(e)))};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"BlockCanvas",children:[Object(l.jsx)(M,{img:b,quads:S,newQuad:function(t){return w([t].concat(Object(o.a)(S)))},tool:L,setSelected:W,updateQuads:R,deleteQuads:function(t){var e=S.filter((function(e){return t.every((function(t){return t.id!==e.id}))}));w(e)},slider:x,width:(null===b||void 0===b?void 0:b.videoWidth)||void 0,height:(null===b||void 0===b?void 0:b.videoHeight)||void 0}),Object(l.jsx)(s,{source:d,setVideo:p,setSlider:m,value:null!==x&&void 0!==x?x:0})]}),Object(l.jsxs)("div",{className:"BlockButtons",children:[Object(l.jsx)(A,{value:L,onAdd:function(){N(C.ADD),W(-1)},onSelect:function(){N(C.SELECT),W(-1)}}),Object(l.jsx)(f,{setFile:i,accept_types:"video/*"}),Object(l.jsx)(Y,{target:S,source:null===n||void 0===n?void 0:n.name,load:function(t){return w(t)}})]})]}),Object(l.jsx)("div",{children:Object(l.jsx)(P,{target:S,update:R,selectById:function(t){W(S.findIndex((function(e){return e.id===t})))}})})]})}var Q=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(e){var n=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),r(t),i(t),c(t),a(t)}))},V=n(39),_=n(83),q=n(84),J=n(25),H=n(24),z=Object(V.a)({palette:{type:"dark",primary:{main:J.a[400]},secondary:{main:H.a[400]}},typography:{button:{fontWeight:"bold"}},overrides:{MuiButton:{outlined:{border:"2px solid !important"}}}});a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsxs)(_.a,{theme:z,children:[Object(l.jsx)(q.a,{}),Object(l.jsx)(F,{})]})}),document.getElementById("root")),Q()}},[[61,1,2]]]);
//# sourceMappingURL=main.e69e2e79.chunk.js.map