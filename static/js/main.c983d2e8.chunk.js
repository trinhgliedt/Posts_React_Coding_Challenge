(this.webpackJsonpprideplaces=this.webpackJsonpprideplaces||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(2),o=n.n(s),a=n(14),r=n.n(a),i=(n(20),n(3)),l=(n(21),n(5)),d=n.n(l),u=function(e){var t=Object(s.useState)(!1),n=Object(i.a)(t,2),o=n[0],a=n[1],r=Object(s.useRef)();!function(e,t){Object(s.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[])}(r,(function(e){return a(!1)}));var l=e.authorName,d=e.authorCatchPhrase,u=e.postTitle,h=e.postBody,j=e.postId;return Object(c.jsxs)("div",{className:"post col-lg-10 col-md-8 col-sm-12 text-white shadow mb-2 p-3 rounded",ref:r,onClick:function(e){a(!o)},children:[Object(c.jsxs)("p",{className:!1===o?"text-center text-capitalize":"text-capitalize",children:[!1===o&&j+". ",Object(c.jsx)("span",{className:"font-weight-bold",children:o&&"Post's title:"})," ",u]}),o&&Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"font-weight-bold",children:"Author's name:"})," ",l]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"font-weight-bold",children:"Author's catch phrase:"})," ",d]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"font-weight-bold",children:"Post's body: "}),h]}),Object(c.jsx)("div",{className:"text-center",children:Object(c.jsx)("button",{className:"btn btn-warning shadow text-white",onClick:function(e){return a(!1)},children:"Close"})})]})]})};var h=function(){var e=Object(s.useState)(null),t=Object(i.a)(e,2),n=t[0],o=t[1],a=Object(s.useState)(null),r=Object(i.a)(a,2),l=r[0],h=r[1];return Object(s.useEffect)((function(){d.a.get("https://jsonplaceholder.typicode.com/posts").then((function(e){o(e.data)})).catch((function(e){console.error(e)})),d.a.get("https://jsonplaceholder.typicode.com/users/").then((function(e){h(e.data)})).catch((function(e){console.error(e)}))}),[]),null===n||null===l?"Loading...":Object(c.jsxs)("div",{className:"App mx-2 blinkBg",children:[Object(c.jsx)("h2",{className:"text-center mb-4",children:"PridePlaces Coding Challenge"}),Object(c.jsx)("div",{className:"postWrapper",children:n.map((function(e){return Object(c.jsx)(u,{authorName:l[e.userId-1].name,authorCatchPhrase:l[e.userId-1].company.catchPhrase,postTitle:e.title,postBody:e.body,postId:e.id},e.id)}))})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),o(e),a(e)}))};r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),j()}},[[40,1,2]]]);
//# sourceMappingURL=main.c983d2e8.chunk.js.map