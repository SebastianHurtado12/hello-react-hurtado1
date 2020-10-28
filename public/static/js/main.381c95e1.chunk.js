(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(t,e,n){"use strict";n.r(e);var a=n(0),c=(n(20),n(1)),r=n.n(c),i=n(16),s=n.n(i),o=n(17),l=n(3),j=function(t){var e=t.title;return Object(a.jsx)("nav",{className:"justify-content-center navbar navbar-expand-lg p-3 mb-4 bg-primary  text-white font-weight-bold",children:Object(a.jsx)("span",{className:"navbar-brand ",href:"/",children:Object(a.jsx)("h3",{children:e})})})},b=function(){return Object(a.jsx)("div",{style:{backgroundColor:"#0275d8"},children:Object(a.jsxs)("div",{className:"text-center mb-3  ",children:[Object(a.jsx)("hr",{}),Object(a.jsx)("h4",{className:"text-white",children:"Hello React"}),Object(a.jsx)("a",{href:"https://github.com/SebastianHurtado12/hello-react-hurtado1",children:Object(a.jsx)("i",{className:"fa fa-github fa-4x text-dark"})})]})})},d=n(5),u=n.n(d),h=function(t){var e=t.id,n=t.initialTitle,r=t.initialText,i=t.removeNote,s=t.updateNote,o=Object(c.useState)(n),j=Object(l.a)(o,2),b=j[0],d=j[1],u=Object(c.useState)(r),h=Object(l.a)(u,2),x=h[0],f=h[1],O=Object(c.useState)(!1),m=Object(l.a)(O,2),v=m[0],p=m[1];return Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("input",{style:{backgroundColor:"transparent",border:"none",fontSize:"1.25rem",marginBottom:"0.75rem"},spellCheck:!1,disabled:!v,value:b,onChange:function(t){return d(t.target.value)}}),Object(a.jsx)("textarea",{rows:5,style:{backgroundColor:"transparent",border:"none"},spellCheck:!1,disabled:!v,value:x,onChange:function(t){return f(t.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:"btn",hidden:v,onClick:function(){return p(!v)},children:Object(a.jsx)("i",{className:"text-secondary fa fa-pencil fa-lg"})}),Object(a.jsx)("button",{className:"btn",hidden:!v,onClick:function(){s(e,b,x),p(!v)},children:Object(a.jsx)("i",{className:"text-dark fa fa-save fa-lg"})}),Object(a.jsx)("button",{className:"btn",onClick:function(){return i(e)},children:Object(a.jsx)("i",{className:"text-danger fa fa-trash fa-lg"})})]})})},x=function(t){var e=t.notes,n=t.removeNote,c=t.updateNote;return Object(a.jsx)("div",{className:"card-columns",children:e.map((function(t){return Object(a.jsx)(h,{id:t._id,initialTitle:t.title,initialText:t.text,removeNote:n,updateNote:c},t._id)}))})},f=function(t){var e=t.addNote,n=Object(c.useState)(""),r=Object(l.a)(n,2),i=r[0],s=r[1],o=Object(c.useState)(""),j=Object(l.a)(o,2),b=j[0],d=j[1];return Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({title:i,text:b}),s(""),d("")},children:[Object(a.jsxs)("div",{className:"form-group  font-weight-bold",children:[Object(a.jsx)("label",{htmlFor:"title",children:"TITULO"}),Object(a.jsx)("input",{id:"title",className:"form-control",type:"text",value:i,onChange:function(t){return s(t.target.value)}})]}),Object(a.jsxs)("div",{className:"form-group font-weight-bold",children:[Object(a.jsx)("label",{htmlFor:"text",children:"TEXTO"}),Object(a.jsx)("textarea",{id:"text",className:"form-control",value:b,rows:"4",onChange:function(t){return d(t.target.value)}})]}),Object(a.jsx)("div",{className:"text-center mb-3",children:Object(a.jsx)("input",{className:"btn  btn btn-primary  btn-lg font-weight-bold",type:"submit",value:"GUARDAR"})})]})},O=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],r=e[1];Object(c.useEffect)((function(){u.a.get("/api/notes").then((function(t){r(t.data.notes)}))}),[]);return Object(a.jsxs)("div",{children:[Object(a.jsx)(j,{title:"MisNotas"}),Object(a.jsxs)("div",{className:"container mt-3",children:[Object(a.jsx)(f,{addNote:function(t){u.a.post("/api/notes",t).then((function(t){var e=[t.data].concat(Object(o.a)(n));r(e)}))}}),Object(a.jsx)("hr",{}),Object(a.jsx)(x,{notes:n,removeNote:function(t){u.a.delete("/api/notes/"+t).then((function(e){var a=n.filter((function(e){return e._id!==t}));r(a)}))},updateNote:function(t,e,a){var c={title:e,text:a};u.a.put("/api/notes/"+t,c).then((function(e){var a=n.map((function(e){return e.id===t?c:e}));r(a)}))}})]}),Object(a.jsx)(b,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.381c95e1.chunk.js.map