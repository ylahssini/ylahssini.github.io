"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[828,893],{1271:function(n,e){e.Z=function(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return n.reduce(function(n,t,r){var a=e[r];return"string"==typeof a?""+n+t+a:""+n+t},"").trim().replace(/\s{2,}/g," ")}},7828:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var r=t(5893),a=t(7294),l=t(6204),o=t(7297),i=t(1271);function s(){let n=(0,o.Z)(["\n    transition-transform\n    transition-colors\n    bg-white\n    bg-opacity-20\n    dark:bg-dark\n    dark:bg-opacity-50\n    flex\n    items-center\n    justify-center\n    flex-col\n    fixed\n    top-0\n    right-0\n    z-[5]\n    drop-shadow-[-10px_0_10px_rgba(0,0,0,0.25)]\n    w-full\n    h-full\n    duration-300\n    ease-in-out\n    ","\n"]);return s=function(){return n},n}let u=n=>{let{menuOpened:e}=n;return(0,i.Z)(s(),e?"translate-x-0 md:translate-x-full":"translate-x-full")};var c=t(7893);let f=()=>{let n=(0,a.useRef)(null),{menu:e,menuOpened:t,setMenuOpened:o}=(0,l.o)(n=>{let{menu:e,menuOpened:t,setMenuOpened:r}=n;return{menu:e,menuOpened:t,setMenuOpened:r}});return(0,r.jsxs)("aside",{ref:n,className:u({menuOpened:t}),children:[(0,r.jsx)("div",{className:"mobile",children:e.map((n,e)=>(0,r.jsxs)("button",{type:"button",className:"text-transition-dark block text-3xl py-3",onClick:()=>(function(n){o(!1);let e=document.getElementById(n.toLowerCase());null==e||e.scrollIntoView({behavior:"smooth"})})(n),children:[(0,r.jsxs)("span",{className:"text-gray-500",children:["0",e,"."]})," ",n]},n))}),(0,r.jsx)(c.default,{isMobile:!0})]})};var d=f},7893:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});var r=t(5893),a=t(7297),l=t(1271);function o(){let n=(0,a.Z)(["\n    fixed\n    right-4\n    bottom-4\n    z-10\n    hidden\n    md:flex\n    justify-between\n    items-center\n    flex-col\n    animate-resume\n    text-transition-dark\n    hover:text-gray-500\n    after:w-0.5\n    after:h-20\n    after:block\n    after:transition-colors\n    after:duration-200\n    after:ease-in-out\n    after:bg-black\n    hover:after:bg-gray-500\n    after:dark:bg-slate-50\n"]);return o=function(){return n},n}function i(){let n=(0,a.Z)(["\n    bg-slate-50\n    dark:bg-black\n    inline-block\n    md:hidden\n    border\n    border-solid\n    border-gray-500\n    text-gray-500\n    text-2xl\n    px-8\n    py-2\n    rounded-full\n    mt-4\n    transition-colors\n    duration-200\n    hover:bg-gray-500\n    hover:text-white\n"]);return i=function(){return n},n}let s=(0,l.Z)(o()),u=(0,l.Z)(i()),c=n=>{let{isMobile:e}=n;return(0,r.jsx)("a",{href:"/cvs/youssef-lahssini-cv-eng.pdf",className:e?u:s,download:!0,children:(0,r.jsx)("span",{className:e?"":"rotate-90 block -translate-y-7",children:"Resume"})})};var f=c},7297:function(n,e,t){t.d(e,{Z:function(){return r}});function r(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}}}]);