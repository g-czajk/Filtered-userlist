(this["webpackJsonpfiltered-userlist"]=this["webpackJsonpfiltered-userlist"]||[]).push([[0],{67:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(9),r=n.n(s),i=(n(67),n(43)),u=n(46),o=n.n(u),l=n(49),f=n(16),j=(n(69),n(70),n(50)),b=n.n(j),d=n(117),O=n(7),h=function(e){var t=e.handleFilter,n=Object(c.useState)(""),a=Object(f.a)(n,2),s=a[0],r=a[1];return Object(c.useEffect)((function(){t(s)}),[s]),Object(O.jsxs)("div",{className:"searchbar-wrapper",children:[Object(O.jsx)(b.a,{style:{marginLeft:10,marginRight:10,fontSize:40,color:"ccc"}}),Object(O.jsx)(d.a,{autoFocus:!0,label:"Search",style:{flexGrow:1},color:"secondary",InputProps:{disableUnderline:!0},value:s,onChange:function(e){return r(e.target.value)}})]})},m=(n(79),n(80),n(121)),p=n(119),x=function(e){var t=e.data,n=e.selected,a=e.handleSelect,s=Object(c.useState)(!1),r=Object(f.a)(s,2),i=r[0],u=r[1];return Object(c.useEffect)((function(){n.includes(t.id)&&u(!0)}),[]),Object(O.jsxs)("li",{className:"single-user",onClick:function(){u((function(e){return!e})),a(t.id,i)},children:[Object(O.jsxs)(m.a,{alt:"".concat(t.first_name," ").concat(t.last_name),src:t.avatar,children:[t.first_name[0],t.last_name[0]]}),Object(O.jsxs)("div",{className:"user-details",children:[Object(O.jsxs)("h2",{className:"user-name",children:[t.first_name," ",t.last_name]}),Object(O.jsx)("p",{className:"user-email",children:t.email})]}),Object(O.jsx)(p.a,{checked:i,onClick:function(e){e.stopPropagation(),u((function(e){return!e})),a(t.id,i)}})]})},v=function(e){var t=e.filteredData,n=e.selected,c=e.handleSelect,a=e.offset,s=Object(i.a)(t);return Object(O.jsx)("ul",{className:"users-list",children:s&&s.sort((function(e,t){return e.last_name.localeCompare(t.last_name)})).map((function(e,t){return Object(O.jsx)(x,{data:s[t],selected:n,handleSelect:c},e.id)})).slice(10*a,10*a+10)})},S=n(118);var g=function(){var e=Object(c.useState)(null),t=Object(f.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),r=Object(f.a)(s,2),u=r[0],j=r[1],b=Object(c.useState)([]),d=Object(f.a)(b,2),m=d[0],p=d[1],x=Object(c.useState)(!1),g=Object(f.a)(x,2),w=g[0],C=g[1],_=Object(c.useState)(1),N=Object(f.a)(_,2),E=N[0],k=N[1],y=Object(c.useState)(null),L=Object(f.a)(y,2),F=L[0],z=L[1],D=Object(c.useState)(0),I=Object(f.a)(D,2),J=I[0],M=I[1],P=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.next=3,fetch("https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json").then((function(e){return e.json()})).then((function(e){a(e)})).catch((function(e){return console.log(e)}));case 3:C(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){P()}),[]),Object(c.useEffect)((function(){j(n)}),[n]),Object(c.useEffect)((function(){u&&z(Math.ceil(u.length/10))}),[u]),Object(c.useEffect)((function(){console.log(m)}),[m]),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h1",{children:"Contacts"}),u&&Object(O.jsx)(h,{handleFilter:function(e){M(0),k(1);var t=n.filter((function(t){return t.first_name.toLowerCase().startsWith(e.toLowerCase())||t.last_name.toLowerCase().startsWith(e.toLowerCase())}));j(t)}}),u&&Object(O.jsx)(S.a,{count:F,variant:"outlined",shape:"rounded",onChange:function(e,t){M(t-1),k(t)},color:"primary",page:E}),u&&Object(O.jsx)(v,{filteredData:u,selected:m,handleSelect:function(e,t){t?function(e){var t=m.filter((function(t){return t!==e}));p(t)}(e):function(e){var t=Object(i.a)(m);t.push(e),p(t)}(e)},offset:J}),w&&Object(O.jsx)("div",{className:"spin"})]})};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.906c9f1a.chunk.js.map