"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[480],{7609:function(a,s,n){n(2791);s.Z=n.p+"static/media/sprite.35194636014d27fb20cd895a255b8e61.svg"},4245:function(a,s,n){n.d(s,{o:function(){return u},Z:function(){return _}});var e=n(9439),c={Li:"CarsListItem_Li__v1U94",WidCar:"CarsListItem_WidCar__tncYh",ItemsContImg:"CarsListItem_ItemsContImg__7Pa+V",Img:"CarsListItem_Img__LTnfE",Serdechko:"CarsListItem_Serdechko__Drk49",Text:"CarsListItem_Text__QlIl+",onRad:"CarsListItem_onRad__aHoZW",onSpanModel:"CarsListItem_onSpanModel__rU5iI",onRost:"CarsListItem_onRost__8-YrM",Rad:"CarsListItem_Rad__txEtf",onSpan:"CarsListItem_onSpan__reXwA",Button:"CarsListItem_Button__TYlLM"},i=n(7609),l=n(4420),r=n(5440),o=n(2791),t={modalContainer:"Modal_modalContainer__QjqZb",modalOverlay:"Modal_modalOverlay__ZrB5u",modalContent:"Modal_modalContent__axM59",close:"Modal_close__V34Fj",Img:"Modal_Img__vSQ7c",Rad:"Modal_Rad__rK6j-",onSpan:"Modal_onSpan__r3x-m",Desc:"Modal_Desc__q-+dJ",ZagMod:"Modal_ZagMod__QNxK7",vidFuel:"Modal_vidFuel__qNQ5u",zagAccessories:"Modal_zagAccessories__7jv8g",Vids:"Modal_Vids__2-pfM",vidAcc:"Modal_vidAcc__WsZz8",ZagRent:"Modal_ZagRent__C66KT",Minimum:"Modal_Minimum__zgkq6",Znach:"Modal_Znach__xRtfl",Marg:"Modal_Marg__NoKww",RentalCarButt:"Modal_RentalCarButt__fO6Us"},d=n(184),m=function(a){var s=a.closeModal,n=a.car,e=n.id,c=n.make,l=n.model,r=n.year,o=n.img,m=n.rentalPrice,u=n.type,_=n.functionalities,p=n.address,h=n.fuelConsumption,x=n.engineSize,j=n.description,N=n.accessories,f=n.mileage,v=null===p||void 0===p?void 0:p.split(", ").slice(-2),g=n.rentalConditions.split("\n"),C=g[0].split(": ")[1],M=g[1],S=g[2],I=Number.parseFloat(f).toLocaleString().replace(/\s/g,","),R=m.split("$"),k="".concat(R[1],"$").concat(R[0]);return(0,d.jsx)("div",{className:"".concat(t.modalContainer," ").concat(t.modalOverlay),onClick:s,children:(0,d.jsxs)("div",{className:t.modalContent,onClick:function(a){return a.stopPropagation()},children:[(0,d.jsx)("svg",{className:t.close,onClick:s,width:"18px",height:"18px",children:(0,d.jsx)("use",{href:"".concat(i.Z,"#icon-chevron-down-1")})})," ",(0,d.jsx)("img",{className:t.Img,src:o,alt:"cars"}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("h2",{className:t.ZagMod,children:[c," ",l+","," "+r]}),(0,d.jsxs)("div",{className:t.Rad,children:[(0,d.jsx)("span",{className:t.onSpan,children:v[0]}),(0,d.jsx)("span",{className:t.onSpan,children:v[1]}),(0,d.jsxs)("span",{className:t.onSpan,children:["id: ",e]}),(0,d.jsxs)("span",{className:t.onSpan,children:["Year: ",r]}),(0,d.jsxs)("span",{className:t.onSpan,children:["Type: ",u]})]}),(0,d.jsxs)("div",{className:"".concat(t.Rad," ").concat(t.vidFuel),children:[(0,d.jsxs)("span",{className:"".concat(t.onSpan," ").concat(t.Vids),children:["FuelConsumption: ",h]}),(0,d.jsxs)("span",{className:t.onSpan,children:["engineSize: ",x]})]}),(0,d.jsx)("p",{className:t.Desc,children:j}),(0,d.jsx)("h3",{className:t.zagAccessories,children:"Accessories and functionalities:"}),(0,d.jsxs)("div",{className:t.vidAcc,children:[(0,d.jsxs)("div",{className:t.Rad,children:[(0,d.jsx)("span",{className:"".concat(t.onSpan," ").concat(t.Vids),children:N[0]}),(0,d.jsx)("span",{className:t.onSpan,children:N[1]}),(0,d.jsx)("span",{className:t.onSpan,children:_[0]})]}),(0,d.jsxs)("div",{className:t.Rad,children:[(0,d.jsx)("span",{className:t.onSpan,children:N[2]}),(0,d.jsx)("span",{className:t.onSpan,children:_[1]}),(0,d.jsx)("span",{className:t.onSpan,children:_[2]})]})]}),(0,d.jsx)("h3",{className:t.ZagRent,children:"Rental Conditions: "}),(0,d.jsxs)("div",{className:t.Rental,children:[(0,d.jsxs)("span",{className:t.Znach,children:[(0,d.jsx)("span",{className:t.Minimum,children:"Minimum age:"})," ",C]}),(0,d.jsx)("span",{className:t.Minimum,children:M})]}),(0,d.jsxs)("div",{className:t.Marg,children:[(0,d.jsx)("span",{className:t.Minimum,children:S}),(0,d.jsxs)("span",{className:t.Znach,children:[(0,d.jsx)("span",{className:t.Minimum,children:"Mileage:"})," ",I]}),(0,d.jsxs)("span",{className:t.Znach,children:[(0,d.jsx)("span",{className:t.Minimum,children:"Price: "})," ",k]})]}),(0,d.jsx)("a",{href:"tel:+380730000000",className:t.RentalCarButt,children:"Rental car"})]})]})})},u=function(a){var s=a.car,n=(0,l.I0)(),t=(0,o.useState)(!1),u=(0,e.Z)(t,2),_=u[0],p=u[1],h=(0,l.v9)((function(a){return a.cars.favoriteCars.includes(s.id)})),x=s.id,j=s.make,N=s.model,f=s.year,v=s.img,g=s.rentalPrice,C=s.rentalCompany,M=s.type,S=s.functionalities,I=s.address,R=null===I||void 0===I?void 0:I.split(", ").slice(-2);return(0,d.jsx)("li",{className:c.Li,children:(0,d.jsxs)("div",{className:c.ItemsCont,children:[(0,d.jsxs)("div",{className:c.WidCar,children:[" ",(0,d.jsxs)("div",{className:c.ItemsContImg,children:[(0,d.jsx)("img",{className:c.Img,src:v,alt:"cars"}),(0,d.jsx)("svg",{className:c.Serdechko,onClick:function(){n(h?(0,r.zm)(s.id):(0,r._p)(s.id))},width:"18px",height:"18px",children:h?(0,d.jsx)("use",{href:"".concat(i.Z,"#icon-heart-1")}):(0,d.jsx)("use",{href:"".concat(i.Z,"#icon-heart-2")})})]}),(0,d.jsxs)("div",{className:c.Text,children:[(0,d.jsxs)("div",{className:c.onRad,children:[(0,d.jsxs)("div",{className:c.onRost,children:[(0,d.jsx)("span",{className:c.onSpan,children:j}),(0,d.jsx)("span",{className:c.onSpanModel,children:N+","}),(0,d.jsx)("span",{className:c.onSpan,children:f})]}),(0,d.jsx)("span",{className:c.onSpan,children:g})]}),(0,d.jsxs)("div",{className:c.Rad,children:[(0,d.jsx)("span",{className:c.onSpan,children:R[0]}),(0,d.jsx)("span",{className:c.onSpan,children:R[1]}),(0,d.jsx)("span",{className:c.onSpan,children:C}),(0,d.jsx)("span",{className:c.onSpan,children:"Premium"})]}),(0,d.jsxs)("div",{className:c.Rad,children:[(0,d.jsx)("span",{className:c.onSpan,children:M}),(0,d.jsx)("span",{className:c.onSpan,children:j}),(0,d.jsx)("span",{className:c.onSpan,children:x}),(0,d.jsx)("span",{className:c.onSpan,children:S[0]})]})]})]}),(0,d.jsx)("button",{type:"button",className:c.Button,onClick:function(){p(!0),document.body.style.overflow="hidden"},children:"Learn more"}),_&&(0,d.jsx)(m,{closeModal:function(){p(!1),document.body.style.overflow=""},car:s})]})})},_=u},1480:function(a,s,n){n.r(s),n.d(s,{default:function(){return o}});n(2791);var e=n(4420),c=n(6351),i=n(4245),l="FavoritesPage_Ul__B9NeL",r=n(184),o=function(){var a=(0,e.v9)(c.Gr),s=(0,e.v9)(c.dH),n=function(a){return s.find((function(s){return s.id===a}))};return(0,r.jsx)("div",{children:(0,r.jsx)("ul",{className:l,children:a.map((function(a){return(0,r.jsx)(i.Z,{car:n(a)},a)}))})})}},6351:function(a,s,n){n.d(s,{AD:function(){return i},Gr:function(){return l},aG:function(){return r},dH:function(){return c}});var e=n(3553),c=function(a){return a.cars.cars},i=function(a){return a.cars.filter},l=function(a){return a.cars.favoriteCars},r=(0,e.P1)([c,i],(function(a,s){var n=s.brand,e=s.price,c=s.mileageFrom,i=s.mileageTo;return Array.isArray(a)?a.filter((function(a){return console.log("one:",a),console.log("one.make:",a.make),""!==n&&void 0!==a.make?a.make.toLowerCase().includes(n.toLowerCase()):a})).filter((function(a){var s=Number(a.rentalPrice.slice(1,a.rentalPrice.length));return e?s<=Number(e):a})).filter((function(a){return Number(c)?a.mileage>=Number(c):a})).filter((function(a){return Number(i)?a.mileage<=Number(i):a})):[]}))}}]);
//# sourceMappingURL=480.7f1f274e.chunk.js.map