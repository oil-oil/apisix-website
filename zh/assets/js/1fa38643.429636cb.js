"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79919],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87135:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i={title:"Deploy with RPM"},l=void 0,p={unversionedId:"deploy-with-rpm",id:"version-2.10.1/deploy-with-rpm",isDocsHomePage:!1,title:"Deploy with RPM",description:"\x3c!--",source:"@site/docs-apisix-dashboard_versioned_docs/version-2.10.1/deploy-with-rpm.md",sourceDirName:".",slug:"/deploy-with-rpm",permalink:"/zh/docs/dashboard/deploy-with-rpm",editUrl:"https://github.com/apache/apisix-dashboard/edit/release/2.10.1/docs/zh/latest/deploy-with-rpm.md",tags:[],version:"2.10.1",frontMatter:{title:"Deploy with RPM"}},c=[{value:"Install from RPM",id:"install-from-rpm",children:[]},{value:"Run",id:"run",children:[]}],u={toc:c};function s(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE:")," Only support CentOS 7 currently, for more information, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/dashboard/deploy"},"here"),"."),(0,o.kt)("h2",{id:"install-from-rpm"},"Install from RPM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ sudo yum install -y https://github.com/apache/apisix-dashboard/releases/download/v2.9.0/apisix-dashboard-2.9.0-0.el7.x86_64.rpm\n")),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("p",null,"Before you start, make sure the following dependencies are installed and running in your environment."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://etcd.io/docs/v3.4.0/dl-build/"},"etcd")," 3.4.0+")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ sudo nohup manager-api -p /usr/local/apisix/dashboard/ &\n\n# or manager-api as a service\n$ sudo manager-api start -p /usr/local/apisix/dashboard/\n")),(0,o.kt)("p",null,"Without changing the configuration, visit ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9000")," to use the dashboard with GUI, where the default username and password are ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),"."))}s.isMDXComponent=!0}}]);