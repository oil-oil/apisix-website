"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41662],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),y=o,m=f["".concat(u,".").concat(y)]||f[y]||s[y]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},29067:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i={title:"Apache APISIX not affected by NGINX CVE-2021-23017",author:"Ruofei Zhao",authorURL:"https://github.com/Serendipity96",authorImageURL:"https://avatars.githubusercontent.com/u/23514812?v=4",keywords:["APISIX","Apache APISIX","Security"],description:"On May 26, NGINX issued a security announcement that fixed a DNS resolver vulnerability (CVE -2021-23017) in the NGINX resolver.",tags:["Security"]},c=void 0,u={permalink:"/blog/2021/06/07/Apache-APISIX-not-affected-by-NGINX-CVE-2021-23017",source:"@site/blog/2021/06/07/Apache-APISIX-not-affected-by-NGINX-CVE-2021-23017.md",title:"Apache APISIX not affected by NGINX CVE-2021-23017",description:"On May 26, NGINX issued a security announcement that fixed a DNS resolver vulnerability (CVE -2021-23017) in the NGINX resolver.",date:"2021-06-07T00:00:00.000Z",formattedDate:"June 7, 2021",tags:[{label:"Security",permalink:"/blog/tags/security"}],readingTime:1.5,truncated:!0,authors:[{name:"Ruofei Zhao",url:"https://github.com/Serendipity96",imageURL:"https://avatars.githubusercontent.com/u/23514812?v=4"}],prevItem:{title:"Apache APISIX v.s Envoy: Which Has the Better Performance?",permalink:"/blog/2021/06/10/Apache-APISIX-and-Envoy-performance-comparison"},nextItem:{title:"Apache APISIX Open Source 2 Year Anniversary!",permalink:"/blog/2021/06/06/apisix-two-years"}},l={authorsImageUrls:[void 0]},p=[],s={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"On May 26, NGINX issued a security announcement that fixed a DNS resolver vulnerability (CVE -2021-23017) in the NGINX resolver.")))}f.isMDXComponent=!0}}]);