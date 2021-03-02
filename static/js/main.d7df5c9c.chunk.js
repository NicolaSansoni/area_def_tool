(this["webpackJsonparea-def-tool"]=this["webpackJsonparea-def-tool"]||[]).push([[0],{48:function(t,e,n){},49:function(t,e,n){},50:function(t,e,n){},52:function(t,e,n){},57:function(t,e,n){},58:function(t,e,n){},59:function(t,e,n){},61:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),c=n(12),a=n.n(c),o=(n(48),n(5)),u=n(3),l=(n(49),n(50),n(1));function s(t){var e=t.source,n=t.setVideo,i=t.setSlider,c=(t.value,Object(r.useRef)(null));Object(r.useEffect)((function(){if(c.current&&e){c.current.src=e,n(c.current);!function t(){setTimeout((function(){var e;(null===(e=c.current)||void 0===e?void 0:e.duration)?a(1):t()}),10)}()}}),[e]);var a=function(t){if(c.current&&e&&t){var n=t<1?1:t>100?100:t;c.current.currentTime=n/100*c.current.duration,i(n)}};return Object(l.jsxs)("div",{className:"VideoCanvas",children:[Object(l.jsx)("input",{className:"slider",type:"range",min:"1",max:"100",onChange:function(t){a(+t.target.value)}}),Object(l.jsx)("video",{ref:c,hidden:!0})]})}var d=n(86);n(52);var f=function(t){var e=t.setFile,n=t.accept_types,i=void 0===n?"":n,c=Object(r.useRef)(null);return Object(l.jsxs)("div",{className:"FilePicker",children:[Object(l.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(){var t;return null===(t=c.current)||void 0===t?void 0:t.click()},children:"Select Video"}),Object(l.jsx)("input",{hidden:!0,ref:c,type:"file",accept:i,onChange:function(t){var n,r,i;return e(null!==(n=null===(r=c.current)||void 0===r||null===(i=r.files)||void 0===i?void 0:i.item(0))&&void 0!==n?n:null)}})]})},h=n(30),j=n(37),v=n(38);function b(t){var e=Object(o.a)(t).sort((function(t,e){return t[1]<e[1]?-1:1})).slice(0,2).sort((function(t,e){return t[0]<e[0]?-1:1}))[0],n=t.findIndex((function(t){return t===e})),r=[],i=t[(n+1)%t.length],c=t[(n+t.length-1)%t.length];if(i[1]<c[1])for(var a=0;a<t.length;a++){var u=t[(n+a)%t.length];r.push(Object(o.a)(u))}else for(var l=0;l<t.length;l++){var s=t[(n+t.length-l)%t.length];r.push(Object(o.a)(s))}return r}var p,O=function(){function t(e){Object(j.a)(this,t),this.id=void 0,this.shape=void 0,this.isCarWalkable=!0,this.direction={left:!0,up:!0,right:!0,down:!0},this.isParking=!1,this.stop=null,this.isSelected=!1,this.id=t.newId(),this.shape=null!==e&&void 0!==e?e:[[-1,-1],[-1,-1],[-1,-1],[-1,-1]]}return Object(v.a)(t,[{key:"toAreaDictionary",value:function(){var t,e,n=b(this.shape);t=this.direction;return{id:this.id,points:{lu:n[0].map((function(t){return Math.round(t)})),ru:n[1].map((function(t){return Math.round(t)})),rb:n[2].map((function(t){return Math.round(t)})),lb:n[3].map((function(t){return Math.round(t)}))},carWalk:this.isCarWalkable,dir:Object(h.a)({},this.direction),parking:this.isParking,stop:"".concat(null!==(e=this.stop)&&void 0!==e?e:"None"),ref:this}}},{key:"fromAreaDictionary",value:function(t){this.shape=Object.values(t.points),this.isCarWalkable=t.carWalk;return this.direction=Object(h.a)({},t.dir),this.isParking=t.parking,this.stop=t.stop,t.ref=this,this}}],[{key:"newId",value:function(){return t.counter++}}]),t}();O.counter=0,function(t){t[t.ADD=0]="ADD",t[t.SELECT=1]="SELECT"}(p||(p={}));n(57);function g(t){var e=t.value,n=t.onSelect,r=t.onAdd;return Object(l.jsxs)("div",{className:"ToolSelector",children:[Object(l.jsx)(d.a,{variant:e===p.ADD?"contained":"outlined",color:"secondary",onClick:r,children:"ADD"}),Object(l.jsx)(d.a,{variant:e===p.SELECT?"contained":"outlined",color:"secondary",onClick:n,children:"SELECT"})]})}var x=n(26);n(58);function m(t,e){for(var n=!1,r=0;r<e.length;r++){var i=[e[r],e[(r+1)%e.length]];(i[0][1]<=t[1]&&i[1][1]>=t[1]||i[1][1]<=t[1]&&i[0][1]>=t[1])&&t[0]<(i[0][0]-i[1][0])*(t[1]-i[1][1])/(i[0][1]-i[1][1])+i[1][0]&&(n=!n)}return n}function y(t,e){return Math.hypot(t[0]-e[0],t[1]-e[1])}function k(t,e){var n,r,i=w(e[1],e[0]),c=y(e[0],e[1]),a=C(i,1/c),o=(n=w(t,e[0]),r=a,n[0]*r[0]+n[1]*r[1]);return o<0||o>c?null:S(e[0],C(a,o))}function S(t,e){return[t[0]+e[0],t[1]+e[1]]}function w(t,e){return S(t,[-(n=e)[0],-n[1]]);var n}function C(t,e){return[t[0]*e,t[1]*e]}function D(t,e,n){return S(C(n,t[0]),C(e,t[1]))}function W(t,e,n){var r=(t[0]*n[1]-t[1]*n[0])/(e[0]*n[1]-e[1]*n[0]);return[(t[0]-e[0]*r)/n[0],r]}function A(t,e){var n=C(e,1/function(t){return y([0,0],t)}(e));return D(t,n,[n[1],-n[0]])}var E=.25,L={width:2,stroke:"rgb(250, 50, 50)",fill:"rgba(250, 50, 50, ".concat(E,")"),arrow:"rgba(250, 50, 50, ".concat(.5,")"),selected:{width:2,stroke:"rgb(255, 200, 50)",fill:"rgba(255, 200, 50, ".concat(E,")"),arrow:"rgba(255, 200, 50, ".concat(.5,")")}},N={width:2,stroke:"rgb(50, 50, 250)",fill:"rgba(50, 50, 250, ".concat(E,")"),arrow:"rgba(50, 50, 250, ".concat(.5,")"),selected:{width:2,stroke:"rgb(50, 250, 250)",fill:"rgba(50, 250, 250, ".concat(E,")"),arrow:"rgba(50, 250, 250, ".concat(.5,")")}};function M(t){var e=t.img,n=t.quads,i=t.newQuad,c=t.tool,a=t.setSelected,s=t.updateQuads,d=t.deleteQuads,f=t.slider,h=t.width,j=t.height,v=Object(r.useState)([]),g=Object(u.a)(v,2),E=g[0],M=g[1],R=Object(r.useState)(!1),T=Object(u.a)(R,2),P=T[0],I=T[1],U=Object(r.useState)(null),B=Object(u.a)(U,2),X=B[0],Y=B[1],F=Object(r.useState)(null),Q=Object(u.a)(F,2),V=Q[0],_=Q[1],q=Object(r.useRef)(null),J=Object(r.useState)({x:0,y:0}),H=Object(u.a)(J,2),z=H[0],G=H[1],K=1080,Z=1920;Object(r.useEffect)((function(){var t=q.current,r=null===t||void 0===t?void 0:t.getContext("2d");if(t&&r){K=t.height,Z=t.width;try{if(!e)throw Error;r.drawImage(e,0,0,t.width,t.height)}catch(f){r.fillStyle="#fff",r.fillRect(0,0,t.width,t.height)}var i,a=Object(x.a)(n);try{for(a.s();!(i=a.n()).done;){var u=i.value,l=void 0;l=u.isCarWalkable?L:N,u.isSelected&&(l=l.selected),r.lineWidth=l.width,r.strokeStyle=l.stroke,r.fillStyle=l.fill,it(r,u,true)}}catch(h){a.e(h)}finally{a.f()}if(z.x&&z.y&&E&&c===p.ADD){var s=!1,d=[$([z.x,z.y],n.map((function(t){return t.shape})))].concat(Object(o.a)(E));3===E.length&&(s=!0),r.lineWidth=L.width,r.strokeStyle=L.stroke,r.fillStyle=L.fill,tt(r,d,!0,s)}}}),[e,n,c,z,E,f,h]);var $=function(t,e){e.push([[0,0],[Z,0],[Z,K],[0,K]]);var n=e.flat().reduce((function(e,n){var r=Object(u.a)(e,2),i=r[0],c=r[1],a=y(t,n);return a<i||-1===i?[a,n]:[i,c]}),[-1,null]),r=Object(u.a)(n,2),i=r[0],c=r[1];if(c&&i<25)t=c;else{var a=e.reduce((function(e,n){var r=Object(u.a)(e,2),i=r[0],c=r[1],a=n.reduce((function(e,n,r,i){var c,a=Object(u.a)(e,2),o=a[0],l=a[1],s=i[(r+1)%i.length],d=k(t,[n,s]);return d&&((c=y(t,d))<o||-1===o)?[c,d]:[o,l]}),[-1,null]),o=Object(u.a)(a,2),l=o[0],s=o[1];return s&&l<i||-1===i?[l,s]:[i,c]}),[-1,null]),o=Object(u.a)(a,2);i=o[0],(c=o[1])&&i<25&&(t=c)}return t},tt=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];e[0]&&t.moveTo(e[0][0],e[0][1]),t.beginPath();var i,c=Object(x.a)(e);try{for(c.s();!(i=c.n()).done;){var a=i.value;t.lineTo(a[0],a[1])}}catch(s){c.e(s)}finally{c.f()}if(r&&(t.closePath(),t.fill()),t.stroke(),n){var o,u=Object(x.a)(e);try{for(u.s();!(o=u.n()).done;){var l=o.value;et(t,l)}}catch(s){u.e(s)}finally{u.f()}}},et=function(t,e){var n=t.fillStyle,r=t.strokeStyle;t.fillStyle="#5f5",t.strokeStyle="#000",t.beginPath(),t.arc(e[0],e[1],5,0,6.3),t.closePath(),t.fill(),t.stroke(),t.fillStyle=n,t.strokeStyle=r},nt=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#000";if(4===e.length){var r=t.strokeStyle,i=t.lineWidth;t.strokeStyle=n,t.lineWidth=3,tt(t,[e[0],e[2]],!1,!1),tt(t,[e[1],e[3]],!1,!1),t.strokeStyle=r,t.lineWidth=i}},rt=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"#000",i=w(e[3],e[0]),c=w(e[1],e[0]),a=w(e[2],e[0]),u=W(a,i,c),l=u[0]-1,s=u[1]-1,d=y(e[2],e[1])+y(e[3],e[0]),f=y(e[2],e[3])+y(e[1],e[0]),h=d/f,j=[[-.5,-.5],[0,.5],[.5,-.5]];j=j.map((function(t){return C(t,.25)}));for(var v=[n.up?[0,.5]:null,n.down?[0,-.5]:null,n.right?[.5,0]:null,n.left?[-.5,0]:null],b=[],p=function(){var t=g[O];if(!t)return"continue";var n=Object(o.a)(j);n=n.map((function(e){return A(e,t)})),n=h>1?n.map((function(t){return[t[0],t[1]/h]})):n.map((function(t){return[t[0]*h,t[1]]}));var r=w(t,n[1]);n=(n=(n=(n=(n=(n=n.map((function(t){return S(t,r)}))).map((function(t){return[t[0],-t[1]]}))).map((function(t){return S(t,[.5,.5])}))).map((function(t){return[t[0]+t[0]*t[1]*l,t[1]+t[0]*t[1]*s]}))).map((function(t){return D(t,i,c)}))).map((function(t){return S(t,e[0])})),b.push(n)},O=0,g=v;O<g.length;O++)p();var x=t.strokeStyle,m=t.lineWidth;t.strokeStyle=r,t.lineWidth=5;for(var k=0,E=b;k<E.length;k++){var L=E[k];tt(t,L,!1,!1)}t.strokeStyle=x,t.lineWidth=m},it=function(t,e){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=[0,0];P&&X&&(i=[z.x-X[0],z.y-X[1]]);var c=e.isSelected?e.shape.map((function(t,r){return V&&V.some((function(t){return t===r}))?$(S(t,i),n.filter((function(t){return t.id!==e.id})).map((function(t){return t.shape}))):t})):e.shape;tt(t,c,e.isSelected,!0),r&&rt(t,c,e.direction,"#3d3"),e.isParking&&nt(t,c,"#d3d")},ct=function(){var t=n.find((function(t){return t.isSelected})),e=null;if(t){var r,i=t.shape;e=[-1];var c=i.reduce((function(t,e,n){var r=Object(u.a)(t,2),i=r[0],c=r[1],a=y([z.x,z.y],e);return a<i?[a,n]:[i,c]}),[999,-1]),o=Object(u.a)(c,2);if(r=o[0],e[0]=o[1],r>25){var l=i.reduce((function(t,e,n,r){var i=Object(u.a)(t,2),c=i[0],a=i[1],o=(n+1)%r.length,l=r[o],s=k([z.x,z.y],[e,l]);if(!s)return[c,a];var d=y([z.x,z.y],s);return d<c?[d,[n,o]]:[c,a]}),[999,[-1]]),s=Object(u.a)(l,2);r=s[0],e=s[1]}r>25&&(e=m([z.x,z.y],t.shape)?[0,1,2,3]:null)}if(e)_(e),I(!0),Y([z.x,z.y]);else{var d=function(t,e){for(var n=0;n<e.length;n++)if(m(t,e[n]))return n;return-1}([z.x,z.y],n.map((function(t){return t.shape})));a(d)}},at=function(){if(P&&X){var t=n.filter((function(t){return t.isSelected})),e=[z.x-X[0],z.y-X[1]],r=t.map((function(t){return t.shape=t.shape.map((function(r,i){return V&&V.some((function(t){return t===i}))?$(S(r,e),n.filter((function(e){return e.id!==t.id})).map((function(t){return t.shape}))):r})),t}));s(r),I(!1),_(null),Y(null)}};return Object(l.jsx)("div",{className:"Canvas",children:Object(l.jsx)("canvas",{ref:q,onMouseDown:function(){switch(c){case p.ADD:!function(){if(z.x&&z.y){var t=[z.x,z.y],e=[t=$(t,n.map((function(t){return t.shape})))].concat(Object(o.a)(E));if(4===e.length){var r=new O(b(e));r.isSelected=!0,a(-1),i(r),M([])}else M(e)}}();break;case p.SELECT:ct();break;default:throw Error("No tool selected???")}},onMouseUp:function(){at()},onMouseLeave:function(){M([]),P&&4===(null===V||void 0===V?void 0:V.length)?(I(!1),_(null),Y(null),d(n.filter((function(t){return t.isSelected})))):at()},onMouseMove:function(t){return function(t){var e=q.current;if(e){var n=e.clientWidth/e.width,r=[e.offsetLeft,e.offsetTop];G({x:(t.pageX-r[0])/n,y:(t.pageY-r[1])/n})}}(t)},width:null!==h&&void 0!==h?h:1920,height:null!==j&&void 0!==j?j:1080})})}var R=n(82),T=n(83);n(59);function P(t){var e=t.target,n=t.update,i=t.selectById,c=Object(r.useState)(),a=Object(u.a)(c,2),s=a[0],f=a[1],h=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(t.changed=e,s){var n=null===s||void 0===s?void 0:s.filter((function(e){return e.id!==t.id}));f([t].concat(Object(o.a)(n)).sort((function(t,e){return t.id<e.id?-1:1})))}};function j(t){var r,c,a=Object.entries(t.points).flatMap((function(e){var n,r,i=Object(u.a)(e,2),c=i[0],a=i[1];return n=c,r=t,a.map((function(t,e){return Object(l.jsx)("td",{children:Object(l.jsx)("input",{type:"number",value:Math.round(t),onChange:function(t){r.points[n][e]=+t.target.value,h(r)}})},"".concat(n).concat(e))}))})),o=Object.entries(t.dir).map((function(e){var n=Object(u.a)(e,2),r=n[0],i=n[1];return Object(l.jsx)("td",{children:Object(l.jsx)("input",{type:"checkbox",checked:i,onChange:function(){t.dir[r]=!t.dir[r],h(t)}})},r)}));return Object(l.jsxs)("tr",{onClick:function(){return i(t.id)},className:(null===(r=t.ref)||void 0===r?void 0:r.isSelected)?"selected":"",children:[a,Object(l.jsx)("td",{children:Object(l.jsx)("input",{type:"checkbox",checked:t.carWalk,onChange:function(){t.carWalk=!t.carWalk,h(t)}})},"iscarwalkable"),o,Object(l.jsx)("td",{children:Object(l.jsx)("input",{type:"checkbox",checked:t.parking,onChange:function(){t.parking=!t.parking,h(t)}})},"isparking"),Object(l.jsx)("td",{children:Object(l.jsx)("input",{type:"text",value:null!==(c=t.stop)&&void 0!==c?c:"None",onChange:function(e){t.stop=e.target.value,h(t)}})},"isstop"),Object(l.jsx)("td",{className:t.changed?"space":"hide"}),Object(l.jsx)("td",{className:t.changed?"":"hide",children:Object(l.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(){h(t,!1),n([e.find((function(e){return e.id===t.id})).fromAreaDictionary(t)])},children:Object(l.jsx)(R.a,{})})},"update"),Object(l.jsx)("td",{className:t.changed?"":"hide",children:Object(l.jsx)(d.a,{variant:"contained",color:"secondary",className:t.changed?"":"hide",onClick:function(){t=e.find((function(e){return e.id===t.id})).toAreaDictionary(),h(t,!1)},children:Object(l.jsx)(T.a,{})})},"discard")]},t.id)}return Object(r.useEffect)((function(){var t=e.map((function(t){return t.toAreaDictionary()})),n=null===s||void 0===s?void 0:s.filter((function(t){return t.changed}));t=(t=t.map((function(t){var e=null===n||void 0===n?void 0:n.find((function(e){return e.id===t.id}));return e||t}))).sort((function(t,e){return t.id<e.id?-1:1})),f(t)}),[e]),Object(l.jsx)("div",{className:"Inspector",children:Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"luX     "}),Object(l.jsx)("th",{children:"luY     "}),Object(l.jsx)("th",{children:"ruX     "}),Object(l.jsx)("th",{children:"ruY     "}),Object(l.jsx)("th",{children:"rbX     "}),Object(l.jsx)("th",{children:"rbY     "}),Object(l.jsx)("th",{children:"lbX     "}),Object(l.jsx)("th",{children:"lbY     "}),Object(l.jsx)("th",{children:"CarWalk "}),Object(l.jsx)("th",{children:"Left    "}),Object(l.jsx)("th",{children:"Up      "}),Object(l.jsx)("th",{children:"Right   "}),Object(l.jsx)("th",{children:"Down    "}),Object(l.jsx)("th",{children:"Parking "}),Object(l.jsx)("th",{children:"Stop    "})]})}),Object(l.jsx)("tbody",{children:null===s||void 0===s?void 0:s.map((function(t){return j(t)}))})]})})}var I=n(29),U=n.n(I),B=n(39),X=(n(61),["luX","luY","ruX","ruY","rbX","rbY","lbX","lbY","CarWalk","Left","Up","Right","Down","Parking","Stop"]);function Y(t){var e=t.target,n=t.source,i=t.load,c=Object(r.useRef)(null),a=Object(r.useRef)(null),o=n?n.replace(".mp4","_areas.csv"):"areas.csv",u=function(t){var e=t.map(s);return[X.join(",")].concat(e).join("\n")},s=function(t){var e=t.toAreaDictionary(),n=[e.points.lu,e.points.ru,e.points.rb,e.points.lb].map((function(t){return t.join(",")})).join(","),r=e.carWalk?1:0,i=e.parking?1:0,c=e.stop;return[n,r,[e.dir.left,e.dir.up,e.dir.right,e.dir.down].map((function(t){return t?1:0})).join(","),i,c].join(",")},f=function(){var t=Object(B.a)(U.a.mark((function t(e){var n,r,c,a,o;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=3;break}return console.error("Unable to load file!"),t.abrupt("return");case 3:return t.next=5,e.text();case 5:n=t.sent,r=n.split("\n").filter((function(t){return""!==t})),c=r.slice(1).map((function(t){return t.split(",")})),a=c.map((function(t){var e={points:{},dir:{}},n=t.map((function(t){return+t}));return e.points.lu=n.slice(0,2),e.points.ru=n.slice(2,4),e.points.rb=n.slice(4,6),e.points.lb=n.slice(6,8),e.carWalk=n[8]>0,e.dir.left=n[9]>0,e.dir.up=n[10]>0,e.dir.right=n[11]>0,e.dir.down=n[12]>0,e.parking=n[13]>0,e.stop=t[14],e})),o=a.map((function(t){return(new O).fromAreaDictionary(t)})),i(o);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"IOManager",children:[Object(l.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(){var t;return null===(t=a.current)||void 0===t?void 0:t.click()},children:"Load CSV"}),Object(l.jsx)("input",{hidden:!0,type:"file",ref:a,accept:".csv",onChange:function(){var t,e,n;return f(null!==(t=null===(e=a.current)||void 0===e||null===(n=e.files)||void 0===n?void 0:n.item(0))&&void 0!==t?t:null)}}),Object(l.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(){var t,n,r=u(e),i=new Blob([r],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(i);null===(t=c.current)||void 0===t||t.setAttribute("href",a),null===(n=c.current)||void 0===n||n.click(),URL.revokeObjectURL(a)},children:"Download"}),Object(l.jsx)("a",{ref:c,download:o,hidden:!0})]})}function F(){var t=Object(r.useState)(null),e=Object(u.a)(t,2),n=e[0],i=e[1],c=Object(r.useState)(""),a=Object(u.a)(c,2),d=a[0],h=a[1],j=Object(r.useState)(null),v=Object(u.a)(j,2),b=v[0],O=v[1],x=Object(r.useState)(),m=Object(u.a)(x,2),y=m[0],k=m[1],S=Object(r.useState)([]),w=Object(u.a)(S,2),C=w[0],D=w[1],W=Object(r.useState)(p.ADD),A=Object(u.a)(W,2),E=A[0],L=A[1];Object(r.useEffect)((function(){if(n){var t=URL.createObjectURL(n);h(t)}}),[n]);var N=function(t){C.map((function(t){return t.isSelected=!1})),t>=0&&t<C.length&&(C[t].isSelected=!0),D(Object(o.a)(C))},R=function(t){var e=C.filter((function(e){return t.every((function(t){return t.id!==e.id}))}));D([].concat(Object(o.a)(t),Object(o.a)(e)))};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"BlockCanvas",children:[Object(l.jsx)(M,{img:b,quads:C,newQuad:function(t){return D([t].concat(Object(o.a)(C)))},tool:E,setSelected:N,updateQuads:R,deleteQuads:function(t){var e=C.filter((function(e){return t.every((function(t){return t.id!==e.id}))}));D(e)},slider:y,width:(null===b||void 0===b?void 0:b.videoWidth)||void 0,height:(null===b||void 0===b?void 0:b.videoHeight)||void 0}),Object(l.jsx)(s,{source:d,setVideo:O,setSlider:k,value:null!==y&&void 0!==y?y:0})]}),Object(l.jsxs)("div",{className:"BlockButtons",children:[Object(l.jsx)(g,{value:E,onAdd:function(){L(p.ADD),N(-1)},onSelect:function(){L(p.SELECT),N(-1)}}),Object(l.jsx)(f,{setFile:i,accept_types:"video/*"}),Object(l.jsx)(Y,{target:C,source:null===n||void 0===n?void 0:n.name,load:function(t){return D(t)}})]})]}),Object(l.jsx)("div",{children:Object(l.jsx)(P,{target:C,update:R,selectById:function(t){N(C.findIndex((function(e){return e.id===t})))}})})]})}var Q=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(e){var n=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),r(t),i(t),c(t),a(t)}))},V=n(40),_=n(84),q=n(85),J=n(25),H=n(24),z=Object(V.a)({palette:{type:"dark",primary:{main:J.a[400]},secondary:{main:H.a[400]}},typography:{button:{fontWeight:"bold"}},overrides:{MuiButton:{outlined:{border:"2px solid !important"}}}});a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsxs)(_.a,{theme:z,children:[Object(l.jsx)(q.a,{}),Object(l.jsx)(F,{})]})}),document.getElementById("root")),Q()}},[[62,1,2]]]);
//# sourceMappingURL=main.d7df5c9c.chunk.js.map