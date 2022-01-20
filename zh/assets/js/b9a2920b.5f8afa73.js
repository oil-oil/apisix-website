"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15555],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,h=f["".concat(i,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(h,c(c({ref:t},l),{},{components:r})):n.createElement(h,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},86485:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return i},assets:function(){return p},toc:function(){return l},default:function(){return f}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c={title:"Go \u8ba9 Apache APISIX \u5982\u864e\u6dfb\u7ffc",author:"\u7f57\u6cfd\u8f69",authorURL:"https://github.com/spacewander",authorImageURL:"https://avatars.githubusercontent.com/u/4161644?v=4",keywords:["Go","APISIX","APISIX Go \u63d2\u4ef6","APISIX Go plugin","apisix-go-plugin-runner","Golang"],tags:["Practical Case"]},u=void 0,i={permalink:"/zh/blog/2021/08/19/go-makes-Apache-APISIX-better",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/08/19/go-makes-Apache-APISIX-better.md",title:"Go \u8ba9 Apache APISIX \u5982\u864e\u6dfb\u7ffc",description:"\u8fd9\u7bc7\u6587\u7ae0\u5c06\u8be6\u7ec6\u8bb2\u89e3\u5982\u4f55\u7528 Go \u6765\u5f00\u53d1 Apache APISIX \u63d2\u4ef6\u3002\u901a\u8fc7\u62e5\u62b1 Go \u7684\u751f\u6001\u5708\uff0c\u4e3a Apache APISIX \u5f00\u521b\u4e00\u7247\u65b0\u5929\u5730\uff0c\u5e0c\u671b Go \u80fd\u8ba9 Apache APISIX \u5982\u864e\u6dfb\u7ffc\uff01",date:"2021-08-19T00:00:00.000Z",formattedDate:"2021\u5e748\u670819\u65e5",tags:[{label:"Practical Case",permalink:"/zh/blog/tags/practical-case"}],readingTime:2.71,truncated:!0,authors:[{name:"\u7f57\u6cfd\u8f69",url:"https://github.com/spacewander",imageURL:"https://avatars.githubusercontent.com/u/4161644?v=4"}],prevItem:{title:"8 \u6708 21 \u65e5 Apache APISIX Meetup \u4e0a\u6d77\u7ad9\uff0c\u6b22\u8fce\u62a5\u540d\u53c2\u52a0\uff01",permalink:"/zh/blog/2021/08/21/shanghai-meetup"},nextItem:{title:"Apache APISIX \u793e\u533a\u5468\u62a5 \uff5c 08-09 \uff5e 08-15",permalink:"/zh/blog/2021/08/19/weekly-report"}},p={authorsImageUrls:[void 0]},l=[],s={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u7bc7\u6587\u7ae0\u5c06\u8be6\u7ec6\u8bb2\u89e3\u5982\u4f55\u7528 Go \u6765\u5f00\u53d1 Apache APISIX \u63d2\u4ef6\u3002\u901a\u8fc7\u62e5\u62b1 Go \u7684\u751f\u6001\u5708\uff0c\u4e3a Apache APISIX \u5f00\u521b\u4e00\u7247\u65b0\u5929\u5730\uff0c\u5e0c\u671b Go \u80fd\u8ba9 Apache APISIX \u5982\u864e\u6dfb\u7ffc\uff01")))}f.isMDXComponent=!0}}]);