(this.webpackJsonpteacode_challenge=this.webpackJsonpteacode_challenge||[]).push([[0],{59:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(9),r=n.n(s),i=(n(59),n(49)),u=n(43),o=n.n(u),l=n(46),j=n(17),f=(n(61),n(62),n(47)),d=n.n(f),b=n(108),h=n(7),O=function(e){var t=e.handleFilter,n=Object(c.useState)(""),a=Object(j.a)(n,2),s=a[0],r=a[1];return Object(c.useEffect)((function(){t(s)}),[s]),Object(h.jsxs)("div",{className:"searchbar-wrapper",children:[Object(h.jsx)(d.a,{style:{marginLeft:10,marginRight:10,fontSize:40,color:"ccc"}}),Object(h.jsx)(b.a,{autoFocus:!0,label:"Search",style:{flexGrow:1},color:"secondary",InputProps:{disableUnderline:!0},value:s,onChange:function(e){return r(e.target.value)}})]})},m=(n(71),n(72),n(110)),p=n(109),x=function(e){var t=e.data,n=e.selected,a=e.handleSelect,s=Object(c.useState)(!1),r=Object(j.a)(s,2),i=r[0],u=r[1];return Object(c.useEffect)((function(){n.includes(t.id)&&u(!0)}),[]),Object(h.jsxs)("li",{className:"single-user",onClick:function(){u((function(e){return!e})),a(t.id,i)},children:[Object(h.jsxs)(m.a,{alt:"".concat(t.first_name," ").concat(t.last_name),src:t.avatar,children:[t.first_name[0],t.last_name[0]]}),Object(h.jsxs)("div",{className:"user-details",children:[Object(h.jsxs)("h2",{className:"user-name",children:[t.first_name," ",t.last_name]}),Object(h.jsx)("p",{className:"user-email",children:t.email})]}),Object(h.jsx)(p.a,{checked:i,onClick:function(e){e.stopPropagation(),u((function(e){return!e})),a(t.id,i)}})]})},v=function(e){var t=e.data,n=e.selected,c=e.handleSelect;return Object(h.jsx)("ul",{className:"users-list",children:t&&t.sort((function(e,t){return e.last_name<t.last_name?-1:e.last_name>t.last_name?1:0})).map((function(e,a){return Object(h.jsx)(x,{data:t[a],selected:n,handleSelect:c},e.id)}))})};var _=function(){var e=Object(c.useState)(null),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),r=Object(j.a)(s,2),u=r[0],f=r[1],d=Object(c.useState)([]),b=Object(j.a)(d,2),m=b[0],p=b[1],x=Object(c.useState)(!1),_=Object(j.a)(x,2),g=_[0],S=_[1],w=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.next=3,fetch("https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json").then((function(e){return e.json()})).then((function(e){return a(e)})).catch((function(e){return console.log(e)}));case 3:S(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){w()}),[]),Object(c.useEffect)((function(){f(n)}),[n]),Object(c.useEffect)((function(){console.log(m)}),[m]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Contacts"}),u&&Object(h.jsx)(O,{handleFilter:function(e){var t=n.filter((function(t){return t.first_name.toLowerCase().startsWith(e.toLowerCase())||t.last_name.toLowerCase().startsWith(e.toLowerCase())}));f(t)}}),u&&Object(h.jsx)(v,{data:u,selected:m,handleSelect:function(e,t){t?function(e){var t=m.filter((function(t){return t!==e}));p(t)}(e):function(e){var t=Object(i.a)(m);t.push(e),p(t)}(e)}}),g&&Object(h.jsx)("div",{className:"spin"})]})};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(_,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.07d87ab9.chunk.js.map