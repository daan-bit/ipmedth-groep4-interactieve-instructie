import{r as d,j as r,a as e,H as n}from"./app.b6cd464c.js";import{R as o}from"./ResponsiveNavLink.72ce952a.js";/* empty css               */function l({auth:a,header:s,children:t}){const[i,c]=d.exports.useState(!1);return r("div",{className:"min-h-screen bg-gray-100",children:[e("nav",{className:"bg-white border-b border-gray-100",children:e("div",{className:(i?"block":"hidden")+" sm:hidden",children:r("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[r("div",{className:"px-4",children:[e("div",{className:"font-medium text-base text-gray-800",children:a.user.name}),e("div",{className:"font-medium text-sm text-gray-500",children:a.user.email})]}),e("div",{className:"mt-3 space-y-1",children:e(o,{method:"post",href:route("logout"),as:"button",className:"button-secundary",children:"Log Out"})})]})})}),s&&e("header",{className:"bg-white shadow",children:e("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:s})}),e("main",{children:t})]})}function g(a){return e(l,{auth:a.auth,errors:a.errors,header:e("h1",{children:"Je bent al ingelogd"}),children:e(n,{title:"Dashboard"})})}export{g as default};
