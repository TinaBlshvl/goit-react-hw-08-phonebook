"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[166],{5166:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r=t(2791),a=t(9434),u=t(8174),o=t(3634),c="NOT_FOUND";var i=function(n,e){return n===e};function s(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,a=void 0===r?i:r,u=t.maxSize,o=void 0===u?1:u,s=t.resultEqualityCheck,l=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,a=0;a<r;a++)if(!n(e[a],t[a]))return!1;return!0}}(a),f=1===o?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:c},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return c}return{get:r,put:function(e,a){r(e)===c&&(t.unshift({key:e,value:a}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(o,l);function d(){var e=f.get(arguments);if(e===c){if(e=n.apply(null,arguments),s){var t=f.getEntries(),r=t.find((function(n){return s(n.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return d.clearCache=function(){return f.clear()},d}function l(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function f(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var u,o=0,c={memoizeOptions:void 0},i=r.pop();if("object"===typeof i&&(c=i,i=r.pop()),"function"!==typeof i)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof i+"]");var s=c,f=s.memoizeOptions,d=void 0===f?t:f,m=Array.isArray(d)?d:[d],p=l(r),h=n.apply(void 0,[function(){return o++,i.apply(null,arguments)}].concat(m)),v=n((function(){for(var n=[],e=p.length,t=0;t<e;t++)n.push(p[t].apply(null,arguments));return u=h.apply(null,n)}));return Object.assign(v,{resultFunc:i,memoizedResultFunc:h,dependencies:p,lastResult:function(){return u},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),v};return a}var d=f(s),m=function(n){return n.contactData.contacts},p=function(n){return n.contactData.status},h=function(n){return n.contactData.error},v=function(n){return n.contactData.filter},y=d([m,v],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().trim().includes(e.toLowerCase())}))})),x=t(9938),j="Filter_section__SYoc3",b="Filter_input__N7T3z",_="Filter_header__6akjb",g=t(7840),C=t(184),w=function(){var n=(0,a.v9)(v),e=(0,a.I0)();return(0,C.jsxs)("section",{className:j,children:[(0,C.jsx)("p",{className:_,children:"Find contact by name"}),(0,C.jsx)("input",{className:b,type:"text",name:"filter",value:n,onChange:function(n){e((0,g.G)(n.target.value))}})]})},N="ContactsItem_contact__Tm4HY",k="ContactsItem_btn__U+BeN",A=function(n){var e=n.name,t=n.number,r=n.id,u=(0,a.I0)();return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)("li",{children:[(0,C.jsxs)("p",{className:N,children:[e,": ",t]}),(0,C.jsx)("button",{className:k,onClick:function(){return u((0,o.us)(r))},children:"Delete"})]})})},F=function(){var n=(0,a.v9)(y);return(0,C.jsx)("ul",{children:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,C.jsx)(A,{name:t,number:r,id:e},e)}))})},I=t(9439),z="ContactsForm_name__2I8yu",Z="ContactsForm_input__pcN7H",D="ContactsForm_button__3IdZB";function E(){var n=(0,a.v9)(m),e=(0,a.I0)(),t=(0,r.useState)(""),u=(0,I.Z)(t,2),c=u[0],i=u[1],s=(0,r.useState)(""),l=(0,I.Z)(s,2),f=l[0],d=l[1],p=function(n){var e=n.target,t=e.name,r=e.value;"name"===t&&i(r),"number"===t&&d(r)};return(0,C.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),n.some((function(n){return n.name.toLowerCase()===c.toLowerCase()})))return alert("Contact ".concat(c," is already exists!")),!1;e((0,o.md)({name:c.trim(),number:f})),i(""),d("")},children:[(0,C.jsxs)("label",{children:[(0,C.jsx)("p",{className:z,children:"Name:"}),(0,C.jsx)("input",{className:Z,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:p,value:c})]}),(0,C.jsxs)("label",{children:[(0,C.jsx)("p",{className:z,children:"Number:"}),(0,C.jsx)("input",{className:Z,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:p,value:f})]}),(0,C.jsx)("button",{className:D,type:"submit",children:"Add contact"})]})}var S=t(4217),q=t(1413),O=t(7689);var L=function(n,e){return function(t){return(0,a.v9)(S.Qb)?(0,C.jsx)(n,(0,q.Z)({},t)):(0,C.jsx)(O.Fg,{to:e})}},Y=t(9599);var B=L((function(){var n=(0,a.I0)(),e=(0,a.v9)(S.Qb),t=(0,a.v9)(m),c=(0,a.v9)(p),i=(0,a.v9)(h);return(0,r.useEffect)((function(){e&&n((0,o.Y2)())}),[n,e]),(0,r.useEffect)((function(){i&&u.Am.error("Sorry, something went wrong")}),[i]),(0,C.jsxs)("main",{children:[(0,C.jsx)("h1",{className:Y.Z.hidden,children:"Phone book"}),(0,C.jsx)("h2",{children:"Add new contact"}),(0,C.jsx)(E,{}),(0,C.jsx)("h2",{children:"Contacts"}),0!==(null===t||void 0===t?void 0:t.length)?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(w,{}),(0,C.jsx)(F,{})]}):(0,C.jsx)("p",{children:"You haven't any contacts"}),"pending"===c&&(0,C.jsx)(x.a,{})]})}),"/login")},9599:function(n,e){e.Z={hidden:"App_hidden__J7bDI"}}}]);
//# sourceMappingURL=166.169c5e83.chunk.js.map