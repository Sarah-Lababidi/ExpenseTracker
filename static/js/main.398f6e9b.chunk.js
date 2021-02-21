(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{14:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(5),r=n.n(a),i=(n(22),n(14),n(8)),l=n(17),o=n(13),d=function(e,t){switch(t.type){case"ADD_TRANSACTION":return Object(o.a)(Object(o.a)({},e),{},{transactions:[].concat(Object(l.a)(e.transactions),[t.payload])});case"DELETE_TRANSACTION":return{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))};default:return e}},j=n(3),b={transactions:[{id:0,text:"books",amount:-100},{id:1,text:"food",amount:-200},{id:2,text:"salary",amount:500}]},u=Object(c.createContext)(b),x=function(e){var t=e.children,n=Object(c.useReducer)(d,b),s=Object(i.a)(n,2),a=s[0],r=s[1];return Object(j.jsx)(u.Provider,{value:{transactions:a.transactions,addTransaction:function(e){r({type:"ADD_TRANSACTION",payload:e})},deleteTransaction:function(e){r({type:"DELETE_TRANSACTION",payload:e})}},children:t})};var m=function(){var e=Object(c.useContext)(u).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})),n=e.filter((function(e){return e<=0})),s=t.length>0?t.reduce((function(e,t){return e+t}),0).toFixed(2):0,a=n.length>0?n.reduce((function(e,t){return e+t}),0).toFixed(2):0,r=e.length>0?e.reduce((function(e,t){return e+t}),0).toFixed(2):0,i="";return r>0?i="+":r<0&&(i="-"),Object(j.jsxs)("div",{className:"text-center font-weight-bold text-uppercase mb-3",children:[Object(j.jsxs)("div",{className:"balance",children:[Object(j.jsx)("p",{className:"mb-1",children:"Your Balance"}),Object(j.jsxs)("p",{children:[i,"$",Object(j.jsx)("span",{children:Math.abs(r)})]})]}),Object(j.jsxs)("div",{className:"w-50 mx-auto d-flex p-2 bg-white rounded justify-content-center text-capitalize",children:[Object(j.jsxs)("div",{className:"income border-right px-3 mx-0 border-right",children:[Object(j.jsx)("p",{className:"mb-1",children:"Income"}),Object(j.jsxs)("p",{className:"text-success",children:[s>0?"+":"","$",Object(j.jsx)("span",{children:s})]})]}),Object(j.jsxs)("div",{className:"expense px-3 mx-0",children:[Object(j.jsx)("p",{className:"mb-1",children:"Expenses"}),Object(j.jsxs)("p",{className:"text-danger",children:[a<0?"-":"","$",Object(j.jsx)("span",{children:Math.abs(a)})]})]})]})]})},h=n(4);var O=function(){var e=Object(c.useContext)(u),t=e.addTransaction,n=e.transactions,s=Object(c.useState)(""),a=Object(i.a)(s,2),r=a[0],l=a[1],o=Object(c.useState)(""),d=Object(i.a)(o,2),b=d[0],x=d[1],m=b&&isNaN(Number(b.replaceAll(",","")))?"Please enter a number":"";return Object(j.jsxs)(h.b,{onSubmit:function(e){if(e.preventDefault(),m)return!1;var c;c=Number(parseFloat(b.replaceAll(",","")).toFixed(2));var s={id:n.length>0?n[n.length-1].id+1:0,text:r,amount:c};t(s),l(""),x("")},className:"font-weight-bold w-75 mx-auto",children:[Object(j.jsx)("h5",{className:"text-center mb-0 font-weight-bold",children:"Add A New Transaction"}),Object(j.jsx)("hr",{className:"mt-1 mb-3"}),Object(j.jsxs)(h.d,{row:!0,children:[Object(j.jsx)(h.f,{htmlFor:"text",children:"Text"}),Object(j.jsx)(h.e,{type:"text",value:r,onChange:function(e){return l(e.target.value)},className:"form-control",required:!0})]}),Object(j.jsxs)(h.d,{row:!0,children:[Object(j.jsxs)(h.f,{htmlFor:"amount",children:["Amount ",Object(j.jsx)("br",{})," (negative-expense, positive-income)"]}),Object(j.jsx)(h.e,{type:"text",className:"form-control",value:b,onChange:function(e){return x(e.target.value)},invalid:""!==m&&""!==b,valid:""===m&&""!==b,required:!0}),Object(j.jsx)(h.c,{invalid:!0,children:m})]}),Object(j.jsx)(h.d,{row:!0,children:Object(j.jsx)(h.a,{type:"submit",className:"btn btn-dark w-100",disabled:""!==m,children:"Add Transaction"})})]})};function p(e){var t=e.transaction,n=Object(c.useContext)(u).deleteTransaction,s=t.amount>0?"+":"-";return Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:Object(j.jsx)("button",{onClick:function(){return n(t.id)},id:"delete-btn",className:"btn btn-danger py-2 px-3",children:"X"})}),Object(j.jsx)("span",{className:"py-2 px-3 d-inline-block text-capitalize",children:t.text}),Object(j.jsxs)("span",{className:"float-right py-2 px-3",children:[" ",s,"$",Math.abs(t.amount)]})]})}var f=function(){var e=Object(c.useContext)(u).transactions.map((function(e){var t="list-group-item my-1 p-0 "+(e.amount>0?"plus":"minus");return Object(j.jsx)("li",{className:t,children:Object(j.jsx)(p,{transaction:e})},e.id)}));return Object(j.jsxs)("div",{id:"transList",className:"w-75 mx-auto",children:[Object(j.jsx)("h5",{className:"text-center font-weight-bold",children:"History"}),Object(j.jsx)("hr",{className:"mt-1 mb-4"}),Object(j.jsx)("ul",{className:"list-group",children:e})]})};var N=function(){return Object(j.jsx)(x,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("header",{className:"text-center my-3",children:Object(j.jsx)("h1",{children:"Expense Tracker"})}),Object(j.jsxs)("div",{className:"row mt-5",children:[Object(j.jsxs)("div",{className:"col-12 col-md-6",children:[Object(j.jsx)(m,{}),Object(j.jsx)(f,{})]}),Object(j.jsx)("div",{className:"col-12 col-md-6 my-4 mt-my-0 border-left",children:Object(j.jsx)(O,{})})]})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root")),v()}},[[31,1,2]]]);
//# sourceMappingURL=main.398f6e9b.chunk.js.map