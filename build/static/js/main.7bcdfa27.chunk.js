(this.webpackJsonpex2_phonebook=this.webpackJsonpex2_phonebook||[]).push([[0],{38:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(1),a=t(15),u=t.n(a),o=t(6),i=t(3),l=function(e){var n=e.person,t=e.clickHandler;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{children:[n.name," ",n.phone]}),Object(r.jsx)("button",{onClick:function(){return t(n.id)},children:"delete"})]})},s=function(e){var n=e.persons,t=e.filterName,c=e.clickHandler,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(r.jsx)(r.Fragment,{children:a.map((function(e){return Object(r.jsx)(l,{person:e,clickHandler:c},e.id)}))})},d=function(e){var n=e.changeHandler,t=e.filterValue;return Object(r.jsxs)("div",{children:["filter by names: ",Object(r.jsx)("input",{onChange:n,value:t})]})},b=function(e){var n=e.text,t=e.changeHandler,c=e.inputValue;return Object(r.jsxs)("div",{children:[n,": ",Object(r.jsx)("input",{onChange:t,value:c})]})},j=function(e){var n=e.text;return Object(r.jsx)("button",{type:"submit",children:n})},f=function(e){var n=e.submitHandler,t=e.nameInputHandler,c=e.nameInputValue,a=e.numberInputHandler,u=e.numberInputValue;return Object(r.jsxs)("form",{onSubmit:n,children:[Object(r.jsx)(b,{text:"name",changeHandler:t,inputValue:c}),Object(r.jsx)(b,{text:"number",changeHandler:a,inputValue:u}),Object(r.jsx)(j,{text:"add"})]})},m=t(4),h=t.n(m),p="/api/persons",O=function(){return h.a.get(p).then((function(e){return e.data}))},x=function(e){return h.a.post(p,e).then((function(e){return e.data}))},v=function(e){return h.a.delete("".concat(p,"/").concat(e))},g=function(e,n){return h.a.put("".concat(p,"/").concat(e),n).then((function(e){return e.data}))},H=function(e){var n=e.message;return null===n?null:Object(r.jsx)("div",{style:{color:"green",fontSize:18,border:"solid",borderRadius:5,background:"lightgrey",marginBottom:15,paddingLeft:15},children:Object(r.jsx)("p",{children:n})})},k=function(e){var n=e.message;return null===n?null:Object(r.jsx)("div",{style:{color:"red",fontSize:18,border:"solid",borderRadius:5,background:"lightgrey",marginBottom:15,paddingLeft:15},children:Object(r.jsx)("p",{children:n})})},w=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],a=n[1],u=Object(c.useState)(""),l=Object(i.a)(u,2),b=l[0],j=l[1],m=Object(c.useState)(""),h=Object(i.a)(m,2),p=h[0],w=h[1],y=Object(c.useState)(""),I=Object(i.a)(y,2),S=I[0],V=I[1],T=Object(c.useState)(null),C=Object(i.a)(T,2),L=C[0],N=C[1],B=Object(c.useState)(null),R=Object(i.a)(B,2),z=R[0],D=R[1];Object(c.useEffect)((function(){O().then((function(e){a(e)}))}),[]);return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(H,{message:L}),Object(r.jsx)(k,{message:z}),Object(r.jsx)(d,{changeHandler:function(e){V(e.target.value)},filterValue:S}),Object(r.jsx)("h3",{children:"Add a new Number"}),Object(r.jsx)(f,{submitHandler:function(e){e.preventDefault();var n=t.filter((function(e){return e.name===b}))[0];if(n){if(window.confirm("".concat(b," is already added to phonebook\nReplace the old number with new one?"))){var r=Object(o.a)(Object(o.a)({},n),{},{number:p}),c=r.id;g(c,r).then((function(e){a(t.map((function(n){return n.id!==c?n:e}))),j(""),w(""),N("".concat(e.name,"'s number replaced!")),setTimeout((function(){N(null)}),2e3)})).catch((function(e){D(e.response.data.error),setTimeout((function(){D(null)}),5e3)}))}}else x({name:b,number:p}).then((function(e){a(t.concat(e)),j(""),w(""),N("".concat(e.name," created!")),setTimeout((function(){N(null)}),2e3)})).catch((function(e){D(e.response.data.error),setTimeout((function(){D(null)}),5e3)}))},nameInputHandler:function(e){var n=e.target.value;j(n)},nameInputValue:b,numberInputHandler:function(e){var n=e.target.value;w(n)},numberInputValue:p}),Object(r.jsx)("h3",{children:"Numbers"}),Object(r.jsx)(s,{persons:t,filterName:S,clickHandler:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&v(e).then((function(){a(t.filter((function(n){return n.id!==e}))),N("".concat(n.name," deleted!")),setTimeout((function(){N(null)}),2e3)})).catch((function(e){D("".concat(n.name," has already been removed from server")),setTimeout((function(){D(null)}),2500)}))}})]})};u.a.render(Object(r.jsx)(w,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.7bcdfa27.chunk.js.map