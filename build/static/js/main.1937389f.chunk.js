(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(14),r=t.n(c),u=(t(5),t(2)),l=t(3),i=t.n(l),m="http://localhost:3001/api/persons",s=function(){return i.a.get(m)},f=function(e){return i.a.post(m,e)},d=function(e){return console.log("id is",e),i.a.delete("".concat(m,"/").concat(e))},h=function(e,n){return console.log("id is2",n,"".concat(m,"/").concat(e)),i.a.put("".concat(m,"/").concat(e),n)},b=function(e){return null===e.message?null:(console.log(e.message,"".concat(e.styleClass)),o.a.createElement("div",{className:e.className},e.message))},v=function(e){return o.a.createElement("div",null,"filter shown with: ",o.a.createElement("input",{value:e.value,onChange:e.onChange}))},p=function(e){return o.a.createElement("form",{onSubmit:e.onSubmit},o.a.createElement("div",null,"name: ",o.a.createElement("input",{value:e.name,onChange:e.onChangeName})),o.a.createElement("div",null,"number ",o.a.createElement("input",{value:e.number,onChange:e.onChangeNumber})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},g=function(e){return e.persons.filter((function(n){return n.name.toLowerCase().includes(e.filter.toLowerCase())})).map((function(n){return o.a.createElement(E,{key:n.id,id:n.id,name:n.name,number:n.number,event:e.event})}))},E=function(e){var n=e.id,t=e.name,a=e.number,c=e.event;return o.a.createElement("p",null," ",t,"  ",a," ",o.a.createElement("button",{onClick:function(){return c(n)}}," Delete     "))},w=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],r=Object(a.useState)(""),l=Object(u.a)(r,2),i=l[0],m=l[1],E=Object(a.useState)(""),w=Object(u.a)(E,2),C=w[0],j=w[1],O=Object(a.useState)(""),k=Object(u.a)(O,2),S=k[0],N=k[1],y=Object(a.useState)(null),L=Object(u.a)(y,2),T=L[0],B=L[1],D=Object(a.useState)(null),I=Object(u.a)(D,2),J=I[0],W=I[1];Object(a.useEffect)((function(){s().then((function(e){c(e.data)}))}),[]);return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(b,{message:T,className:"notification"}),o.a.createElement(b,{message:J,className:"error"}),o.a.createElement(v,{value:S,onChange:function(e){N(e.target.value)}}),o.a.createElement("h2",null,"add a new"),o.a.createElement(p,{onSubmit:function(e){e.preventDefault();var n={name:i,number:C};if(!1===t.map((function(e){return e.name.toLowerCase()})).includes(i.toLowerCase()))f(n).then((function(e){c(t.concat(e.data)),m(""),j(""),B("Added ".concat(n.name)),setTimeout((function(){B(null)}),1500)}));else if(window.confirm("".concat(i," is already added to phonebook, replace with a new one?"))){var a=t.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}));console.log(a,"id ompi:",a.id),h(a.id,n).then((function(e){c(t.map((function(n){return n.id===a.id?e.data:n}))),m(""),j(""),B("Replaced ".concat(n.name)),setTimeout((function(){B(null)}),2500)})).catch((function(e){c(t.filter((function(e){return e.id!==a.id}))),W("Information of '".concat(n.name,"' was already deleted from server")),setTimeout((function(){W(null)}),4e3)}))}},name:i,onChangeName:function(e){m(e.target.value)},number:C,onChangeNumber:function(e){j(e.target.value)}}),o.a.createElement("h2",null,"Numbers"),o.a.createElement(g,{persons:t,filter:S,event:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("poistetaanko henkil\xf6")&&(d(e).then((function(n){c(t.filter((function(n){return n.id!==e})))})),B("Contact ".concat(n.name," deleted")),setTimeout((function(){B(null)}),1500))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,n,t){}},[[15,1,2]]]);
//# sourceMappingURL=main.1937389f.chunk.js.map