(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(6),a=n.n(i),o=(n(14),n(7)),l=n(2),s=n.p+"static/media/1.9e279a33.JPG",u=n.p+"static/media/2.0fb60e58.JPG",d=n.p+"static/media/3.ad16984a.JPG",b=n.p+"static/media/4.53bef059.JPG",h=n(0),j=null,m=function(e){var t=e.children,n=e.config,i=(n=void 0===n?{}:n).width,a=void 0===i?"100%":i,o=n.activeItemWidth,s=void 0===o?"80%":o,u=n.transitionDuration,d=void 0===u?"100ms":u,b=Object(c.useState)(-1),m=Object(l.a)(b,2),f=m[0],g=m[1],x=r.a.Children.toArray(t),O=(x=x.filter((function(e){return"AccordionItem"===e.type.displayName})).map((function(e,t){return Object(c.cloneElement)(e,{isActive:t===f})}))).length,v="".concat(100/O,"%"),p="".concat((100-parseFloat(s))/(O-1),"%");return Object(h.jsx)("div",{className:"flex",style:{width:a},children:x.map((function(e,t){return Object(h.jsx)("div",{className:"transition-all select-none",style:{width:-1===f?v:f===t?s:p,transitionDuration:d},onMouseEnter:function(){clearInterval(j),j=setInterval((function(){return g(t)}),100)},onMouseLeave:function(){clearInterval(j),j=setInterval((function(){return g(-1)}),100)},children:e},t)}))})},f=n(8),g=n(9),x=function(e){var t=e.children,n=Object(g.a)(e,["children"]);return Object(h.jsx)(t,Object(f.a)({},n))};x.displayName="AccordionItem";var O=x,v=null,p=function(e){var t=e.children,n=Object(c.useState)(0),i=Object(l.a)(n,2),a=i[0],o=i[1],s=r.a.Children.toArray(t),u=(s=s.filter((function(e){return e.type&&"SliderItem"===e.type.displayName})).map((function(e,t){return Object(c.cloneElement)(e,{isActive:t===a})}))).length;return Object(c.useEffect)((function(){return v=setInterval((function(){o((function(e){return++e>u-1?0:e}))}),5e3),function(){return clearInterval(v)}}),[a,u]),Object(h.jsxs)("div",{className:"overflow-hidden",style:{width:"50%"},children:[Object(h.jsx)("div",{className:"flex transition-transform ease-linear",style:{width:"".concat(100*s.length,"%"),transform:"translateX(-".concat(100/s.length*a,"%)"),transitionDuration:"700ms"},children:s.map((function(e,t){return Object(h.jsx)("div",{style:{width:"".concat(100/s.length,"%")},children:e},t)}))}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:function(){return o(-1===--a?u-1:a)},children:"prev"}),Object(h.jsx)("button",{onClick:function(){return o(++a===u?0:a)},className:"ml-10",children:"next"})]}),Object(h.jsx)("div",{className:"mx-auto flex justify-center",children:Array(u).fill().map((function(e,t){return Object(h.jsx)("div",{onClick:function(){return o(t)},className:"rounded-full w-3 h-3 bg-gray-400 pointer ml-1 cursor-pointer ".concat(a===t?"bg-gray-700":"bg-gray-400")})}))})]})},y=function(e){return e.children};y.displayName="SliderItem";var N=y,w=[{img:s,text:"Oboohitch loh",bgColor:"bg-red-500"},{img:u,text:"Oboohitch loh",bgColor:"bg-yellow-500"},{img:d,text:"Oboohitch loh",bgColor:"bg-blue-500"},{img:b,text:"Oboohitch loh",bgColor:"bg-green-700"}];var I=function(){console.log();var e=Object(c.useState)([].concat(w)),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"bg-green-500 w-full min-h-screen flex justify-center items-center flex-col",children:[Object(h.jsx)("button",{className:"",onClick:function(){return r([].concat(Object(o.a)(n),[{img:b,text:"Oboohitch loh",bgColor:"bg-green-700"}]))},children:"Add"}),Object(h.jsx)(m,{config:{width:"80%",transitionDuration:"300ms",activeItemWidth:"75%"},children:n.map((function(e,t){return Object(h.jsx)(O,{children:function(t){var n=t.isActive;return Object(h.jsx)("div",{className:"flex items-center text-2xl text-white justify-center h-125 ".concat(e.bgColor),children:n?e.text:Object(h.jsx)("img",{className:"select-none",src:e.img,alt:"",width:"80",height:"80"})})}},t)}))})]}),Object(h.jsx)("div",{className:"bg-green-300 w-full min-h-screen flex justify-center items-center flex-col",children:Object(h.jsx)(p,{children:n.map((function(e){return Object(h.jsx)(N,{children:Object(h.jsx)("div",{className:"h-125 bg-cover bg-center bg-no-repeat",style:{backgroundImage:"url('".concat(e.img,"')")}})})}))})})]})};a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(I,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.cbc9e5d4.chunk.js.map