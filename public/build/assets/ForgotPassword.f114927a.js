import{u as d,j as s,a as e,H as u}from"./app.1c6f69ab.js";import{I as c}from"./InputError.d07709d6.js";import{P as p}from"./PrimaryButton.71e07542.js";import{T as w}from"./TextInput.5f482d34.js";/* empty css               *//* empty css              */function v({status:t}){const{data:o,setData:r,post:m,processing:l,errors:i}=d({email:""}),n=a=>{r(a.target.name,a.target.value)};return s("div",{children:[e(u,{title:"Forgot Password"}),e("div",{className:"mb-4 text-sm text-gray-500 leading-normal",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),t&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:t}),s("form",{onSubmit:a=>{a.preventDefault(),m(route("password.email"))},children:[e(w,{type:"text",name:"email",value:o.email,className:"mt-1 block w-full",isFocused:!0,handleChange:n}),e(c,{message:i.email,className:"mt-2"}),e("div",{className:"flex items-center justify-end mt-4",children:e(p,{className:"ml-4",processing:l,children:"Email Password Reset Link"})})]})]})}export{v as default};
