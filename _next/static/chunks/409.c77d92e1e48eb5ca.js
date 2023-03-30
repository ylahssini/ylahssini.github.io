"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[409],{2409:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var a=t(5893),s=t(7294),r=t(7536),l=t(3272),i=t.n(l),o=t(7297),d=t(1271);function c(){let e=(0,o.Z)(["\n    border\n    border-gray-400\n    bg-white\n    bg-opacity-50\n    dark:bg-dark\n    dark:bg-opacity-50\n    p-4\n    outline-none\n    w-full\n    transition-all\n    duration-300\n    ease-in-out\n    text-dark\n    dark:text-slate-50\n    focus:shadow-[inset_0_0_5px_0_#cde0f8ee]\n    focus:dark:shadow-[inset_0_0_5px_0_#033f97fd]\n    focus:text-gray-500\n    caret-gray-500\n    ","\n"]);return c=function(){return e},e}function u(){let e=(0,o.Z)(["\n    border\n    border-t-0\n    border-gray-400\n    bg-white\n    bg-opacity-50\n    dark:bg-dark\n    dark:bg-opacity-50\n    p-4\n    w-full\n    resize-y\n    h-48\n    max-h-56\n    outline-none\n    transition-all\n    duration-300\n    ease-in-out\n    text-dark\n    dark:text-slate-50\n    focus:shadow-[inset_0_0_7px_0_#cde0f8ee]\n    focus:dark:shadow-[inset_0_0_5px_0_#033f97fd]\n    focus:text-gray-500\n    caret-gray-500\n"]);return u=function(){return e},e}function m(){let e=(0,o.Z)(["\n    font-bold\n    bg-gradient-to-r\n    from-blue-500\n    to-red-500\n    text-white\n    w-full\n    p-4\n    bg-opacity-80\n    transition-colors\n    hover:from-blue-800\n    hover:to-red-800\n    disabled:bg-gray-800\n    disabled:bg-opacity-80\n"]);return m=function(){return e},e}function p(){let e=(0,o.Z)(["\n    text-xs\n    text-white\n    absolute\n    -bottom-4\n    right-0\n    bg-red-700\n    p-2\n    mt-9\n    rounded-md\n    shadow-md\n"]);return p=function(){return e},e}function f(){let e=(0,o.Z)(["\n    ","\n    ","\n    ","\n    transition-all\n    ease-in\n    rounded-md\n    shadow-lg\n    relative\n    overflow-hidden\n"]);return f=function(){return e},e}function h(){let e=(0,o.Z)(["\n    bg-gradient-to-r\n    bg-slate-50\n    from-slate-50\n    to-white\n    h-1\n    absolute\n    bottom-0\n    left-0\n    bg-opacity-80\n"]);return h=function(){return e},e}let b=e=>{let{isLeft:n}=e;return(0,d.Z)(c(),n?"border-r border-b-0 md:border-r-0 md:border-b":"")},x=(0,d.Z)(u()),y=(0,d.Z)(m()),g=(0,d.Z)(p()),w=e=>{let{type:n}=e;return(0,d.Z)(f(),null!==n?"opacity-100":"opacity-0",null!==n?"h-max p-6 mb-5":"h-0 p-0 mb-0","success"===n?"bg-green-400":"bg-red-400")},k=(0,d.Z)(h());var _=t(4492);let j=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,N=()=>{let[e,n]=(0,s.useState)({type:null,message:""}),[t,l]=(0,s.useState)(!1),{register:o,handleSubmit:d,formState:{errors:c},reset:u}=(0,r.cI)(),m=(0,s.useRef)(null),[p,f]=(0,_.q_)(()=>({width:"0%",config:{mass:5,tension:350,friction:40,duration:5e3}}));async function h(e){try{l(!0);let t=await fetch("https://usebasin.com/f/39da2d81e0d2",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)});200===t.status?(u(),n(e=>({...e,type:"success",message:"The email was sent successfuly"}))):n(e=>({...e,type:"error",message:"Error! please resend it"}))}catch(e){console.log(e),n(e=>({...e,type:"error",message:"Error! please resend it"}))}finally{l(!1),f.start({width:"100%"}),setTimeout(()=>{n(e=>({...e,type:null,message:""})),f.set({width:"0%"})},5e3)}}if(i().contact){var N,v,Z,q;return(0,a.jsx)("form",{id:"contact",className:"wrapper h-screen block sm:flex sm:items-center",children:(0,a.jsxs)("section",{className:"flex-1",children:[(0,a.jsx)("h2",{className:"section-title",children:(0,a.jsx)("span",{children:"03. Contact me"})}),(0,a.jsx)("p",{className:"text-base text-left py-3 pb-6 text-transition-dark",children:"Although I’m not currently looking for any new opportunities, my inbox is always open."}),(0,a.jsxs)("div",{className:w({type:e.type}),children:[(0,a.jsx)("strong",{className:"text-xl text-white capitalize",children:e.type}),(0,a.jsx)("p",{className:"text-sm text-gray-700 p-0",children:e.message}),null!==e.type&&(0,a.jsx)(_.q.div,{ref:m,className:k,style:p})]}),(0,a.jsxs)("fieldset",{className:"block md:flex justify-center",children:[(0,a.jsxs)("label",{htmlFor:"email",className:"w-full md:w-1/2 relative z-20 block",children:[(0,a.jsx)("input",{...o("email",{required:!0,pattern:j}),type:"email",id:"email",name:"email",placeholder:"Email address *",className:b({isLeft:!0})}),(null===(N=c.email)||void 0===N?void 0:N.type)==="required"&&(0,a.jsx)("span",{className:g,children:"Please insert email address"}),(null===(v=c.email)||void 0===v?void 0:v.type)==="pattern"&&(0,a.jsx)("span",{className:g,children:"Email is incorrect"})]}),(0,a.jsxs)("label",{htmlFor:"name",className:"w-full md:w-1/2 relative z-20 block",children:[(0,a.jsx)("input",{...o("name",{required:!0}),type:"text",id:"name",name:"name",placeholder:"Full name or Company *",className:b({isLeft:!1})}),(null===(Z=c.name)||void 0===Z?void 0:Z.type)==="required"&&(0,a.jsx)("span",{className:g,children:"Please insert your name or company"})]})]}),(0,a.jsxs)("label",{htmlFor:"message",className:"relative block",children:[(0,a.jsx)("textarea",{...o("message",{required:!0}),name:"message",placeholder:"Your message *",className:x}),(null===(q=c.message)||void 0===q?void 0:q.type)==="required"&&(0,a.jsx)("span",{className:g,children:"Please insert your message"})]}),(0,a.jsx)("button",{type:"button",className:y,onClick:d(h),disabled:t,children:t?"Loading...":"Submit"}),(0,a.jsxs)("footer",{className:"block md:hidden text-transition-dark w-full text-center pt-6",children:["Created by ",i().author.name," @",new Date().getFullYear()]})]})})}return null};var v=N}}]);