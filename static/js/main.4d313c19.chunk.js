(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(7),r=a.n(c),o=a(9),m=a(5),s=a(2),u=(a(15),a(8)),i=a.n(u),d=function(e){var t=e.type,a=e.text;return l.a.createElement("div",{className:"alert alert-".concat(t)},a)},h=a(1),p=function(e){var t=e.charge,a=e.amount,n=e.handleCharge,c=e.handleAmount,r=e.handleSubmit,o=e.edit;return l.a.createElement("form",{onSubmit:r},l.a.createElement("div",{className:"form-center"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"charge"},"charge"),l.a.createElement("input",{type:"text",className:"form-control",id:"charge",name:"charge",placeholder:"e.g. rent",value:t,onChange:n})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"amount"},"amount"),l.a.createElement("input",{type:"number",className:"form-control",id:"amount",name:"amount",placeholder:"e.g. 100",value:a,onChange:c}))),l.a.createElement("button",{type:"submit",className:"btn"},o?"edit":"submit",l.a.createElement(h.c,{className:"btn-icon"})))},E=function(e){var t=e.expense,a=e.handleDelete,n=e.handleEdit,c=t.id,r=t.charge,o=t.amount;return l.a.createElement("li",{className:"item"},l.a.createElement("div",{className:"info"},l.a.createElement("span",{className:"expense"},r),l.a.createElement("span",{className:"amount"},"\u20b9",o)),l.a.createElement("div",null,l.a.createElement("button",{className:"edit-btn","aria-label":"edit button",onClick:function(){return n(c)}},l.a.createElement(h.b,null)),l.a.createElement("button",{className:"clear-btn","aria-label":"delete button",onClick:function(){return a(c)}},l.a.createElement(h.a,null))))},b=function(e){var t=e.expenses,a=e.handleEdit,n=e.handleDelete,c=e.clearItems;return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{className:"list"},t.map((function(e){return l.a.createElement(E,{key:e.id,expense:e,handleDelete:n,handleEdit:a})}))),t.length>0&&l.a.createElement("button",{className:"btn",onClick:c},"Clear Expenses",l.a.createElement(h.a,{className:"btn-icon"})))},f=localStorage.getItem("expenses")?JSON.parse(localStorage.getItem("expenses")):[];var g=function(){var e=Object(n.useState)(f),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),u=Object(s.a)(r,2),h=u[0],E=u[1],g=Object(n.useState)(""),v=Object(s.a)(g,2),x=v[0],N=v[1],y=Object(n.useState)({show:!1}),O=Object(s.a)(y,2),j=O[0],S=O[1],w=Object(n.useState)(!1),C=Object(s.a)(w,2),k=C[0],I=C[1],D=Object(n.useState)(0),A=Object(s.a)(D,2),F=A[0],J=A[1];Object(n.useEffect)((function(){localStorage.setItem("expenses",JSON.stringify(a))}),[a]);var B=function(e){var t=e.type,a=e.text;S({show:!0,type:t,text:a}),setTimeout((function(){S({show:!1})}),5e3)};return l.a.createElement(l.a.Fragment,null,j.show&&l.a.createElement(d,{type:j.type,text:j.text}),l.a.createElement(d,null),l.a.createElement("h1",null,"Budget Calculator"),l.a.createElement("main",{className:"App"},l.a.createElement(p,{charge:h,amount:x,handleAmount:function(e){N(e.target.value)},handleCharge:function(e){E(e.target.value)},handleSubmit:function(e){if(e.preventDefault(),""!==h&&x>0){if(k){var t=a.map((function(e){return e.id===F?Object(m.a)(Object(m.a)({},e),{},{charge:h,amount:x}):e}));c(t),I(!1),B({type:"success",text:"Item Edited"})}else{var n={id:i()(),charge:h,amount:x};c([].concat(Object(o.a)(a),[n])),B({type:"success",text:"item added"})}E(""),N("")}else B({type:"danger",text:"charge can't be empty value and amount should be greater then 0"})},edit:k}),l.a.createElement(b,{expenses:a,handleDelete:function(e){var t=a.filter((function(t){return t.id!==e}));c(t),B({type:"danger",text:"item-deleted"})},handleEdit:function(e){var t=a.find((function(t){return t.id===e})),n=t.charge,l=t.amount;E(n),N(l),I(!0),J(e)},clearItems:function(){c([]),B({type:"danger",text:"All items deleted"})}})),l.a.createElement("h1",null,"Total Spending : ",l.a.createElement("span",{className:"total"},"\u20b9",a.reduce((function(e,t){return e+parseInt(t.amount)}),0))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.4d313c19.chunk.js.map