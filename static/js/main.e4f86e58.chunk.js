(this.webpackJsonpmurodcoctails=this.webpackJsonpmurodcoctails||[]).push([[0],{24:function(e,c,t){},32:function(e,c,t){"use strict";t.r(c);var s=t(1),n=t(16),i=t.n(n),r=(t(24),t(7)),a=t(0),l=function(){return Object(a.jsx)("nav",{className:"navbar",children:Object(a.jsxs)("div",{className:"nav-center",children:[Object(a.jsxs)("h1",{className:"title",children:["The",Object(a.jsx)("span",{children:"Coctail"}),"DB"]}),Object(a.jsxs)("ul",{className:"nav-links",children:[Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{exact:!0,to:"/",children:"home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{to:"/about",children:"about"})})]})]})})},j=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("section",{class:"section about-section",children:[Object(a.jsx)("h1",{class:"section-title",children:"About Us"}),Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae architecto qui adipisci in officiis, aperiam sequi atque perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione hic aspernatur error blanditiis?"})]})})},o=t(14),d=t.n(o),b=t(18),h=t(19),u=Object(s.createContext)();fetch("https://jsonplaceholder.typicode.com/todos/1").then((function(e){return e.json()})).then((function(e){return console.log(e)}));var x=function(e){var c=e.children,t=Object(s.useState)([]),n=Object(h.a)(t,2),i=n[0],r=n[1],l=function(){var e=Object(b.a)(d.a.mark((function e(){var c,t,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");case 2:return c=e.sent,e.next=5,c.json();case 5:t=e.sent,s=t.drinks,r(s),console.log(s);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){l()}),[]),Object(a.jsx)(u.Provider,{value:{array:i},children:c})},O=function(){var e=Object(s.useContext)(u).array.map((function(e){return Object(a.jsx)("div",{className:"cocktails-center col-4",children:Object(a.jsx)("div",{className:"cocktails",children:Object(a.jsxs)("article",{className:"cocktail",children:[Object(a.jsx)("div",{className:"img-container",children:Object(a.jsx)("img",{src:e.strDrinkThumb,alt:e.strDrinkThumb})}),Object(a.jsxs)("div",{className:"cocktail-footer",children:[Object(a.jsx)("h3",{children:e.strDrink}),Object(a.jsx)("h4",{children:e.strGlass}),Object(a.jsx)("p",{children:e.strAlcoholic}),Object(a.jsx)(r.b,{className:"btn btn-primary btn-details",to:"/about/:id",children:"details"})]})]})})},e.id)}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("section",{className:"search",children:Object(a.jsx)("form",{className:"search-form",children:Object(a.jsxs)("div",{className:"form-control",children:[Object(a.jsx)("label",{for:"name",children:"search your favorite cocktail"}),Object(a.jsx)("input",{type:"text",name:"name",id:"name"})]})})}),Object(a.jsx)("div",{className:"row mt-5",children:e})]})},m=t(2),p=function(){var e=Object(m.f)(),c=Object(s.useContext)(u).array;console.log(c);var t=c.map((function(e){return Object(a.jsxs)("section",{className:"section cocktail-section",children:[Object(a.jsx)(r.b,{to:"",className:"btn btn-primary",children:"back home"}),Object(a.jsx)("h2",{className:"section-title",children:e.strDrink}),Object(a.jsxs)("div",{className:"drink",children:[Object(a.jsx)("img",{src:e.strDrinkThumb,alt:"a"}),Object(a.jsxs)("div",{className:"drink-info",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:"drink-data",children:"name :"})," ",e.strDrink]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:"drink-data",children:"category :"})," ",e.strCategory]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:"drink-data",children:"info :"})," ",e.strAlcoholic]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:"drink-data",children:"glass :"})," ",e.strGlass]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:"drink-data",children:"instructons :"})," ",e.strInstructions]})]})]})]},e.idDrink)}));return console.log((function(c){return c.idDrink===e.id})),Object(a.jsx)("div",{children:t})};var f=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(l,{}),Object(a.jsxs)(m.c,{children:[Object(a.jsx)(m.a,{exact:!0,path:"/",children:Object(a.jsx)(O,{})}),Object(a.jsx)(m.a,{exact:!0,path:"/about",children:Object(a.jsx)(j,{})}),Object(a.jsx)(m.a,{path:"/about/:id",children:Object(a.jsx)(p,{})})]})]})};i.a.render(Object(a.jsx)(x,{children:Object(a.jsx)(r.a,{children:Object(a.jsx)(f,{})})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.e4f86e58.chunk.js.map