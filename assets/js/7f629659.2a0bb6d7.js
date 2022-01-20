"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32514],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86998:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return s},default:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l={title:"basic-auth"},u=void 0,o={unversionedId:"plugins/basic-auth",id:"version-2.11/plugins/basic-auth",isDocsHomePage:!1,title:"basic-auth",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.11/plugins/basic-auth.md",sourceDirName:"plugins",slug:"/plugins/basic-auth",permalink:"/docs/apisix/2.11/plugins/basic-auth",editUrl:"https://github.com/apache/apisix/edit/release/2.11/docs/en/latest/plugins/basic-auth.md",tags:[],version:"2.11",frontMatter:{title:"basic-auth"},sidebar:"version-2.11/docs",previous:{title:"jwt-auth",permalink:"/docs/apisix/2.11/plugins/jwt-auth"},next:{title:"authz-keycloak",permalink:"/docs/apisix/2.11/plugins/authz-keycloak"}},s=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[{value:"1. set a consumer and config the value of the <code>basic-auth</code> option",id:"1-set-a-consumer-and-config-the-value-of-the-basic-auth-option",children:[]},{value:"2. add a Route or add a Service, and enable the <code>basic-auth</code> plugin",id:"2-add-a-route-or-add-a-service-and-enable-the-basic-auth-plugin",children:[]}]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],p={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#name"},(0,i.kt)("strong",{parentName:"a"},"Name"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#attributes"},(0,i.kt)("strong",{parentName:"a"},"Attributes"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-enable"},(0,i.kt)("strong",{parentName:"a"},"How To Enable"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#test-plugin"},(0,i.kt)("strong",{parentName:"a"},"Test Plugin"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#disable-plugin"},(0,i.kt)("strong",{parentName:"a"},"Disable Plugin")))),(0,i.kt)("h2",{id:"name"},"Name"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"basic-auth")," is an authentication plugin that need to work with ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer"),". Add Basic Authentication to a ",(0,i.kt)("inlineCode",{parentName:"p"},"service")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"route"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer")," then adds its key to the request header to verify its request."),(0,i.kt)("p",null,"For more information on Basic authentication, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Basic_access_authentication"},"Wiki")," for more information."),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Valid"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"username"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Different ",(0,i.kt)("inlineCode",{parentName:"td"},"consumer")," should have different value which is unique. When different ",(0,i.kt)("inlineCode",{parentName:"td"},"consumer")," use a same ",(0,i.kt)("inlineCode",{parentName:"td"},"username"),", a request matching exception would be raised.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"password"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"the user's password")))),(0,i.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,i.kt)("h3",{id:"1-set-a-consumer-and-config-the-value-of-the-basic-auth-option"},"1. set a consumer and config the value of the ",(0,i.kt)("inlineCode",{parentName:"h3"},"basic-auth")," option"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "foo",\n    "plugins": {\n        "basic-auth": {\n            "username": "foo",\n            "password": "bar"\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"you also can add a Consumer through the web console:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@release/2.11/docs/assets/images/plugin/basic-auth-1.png",alt:"auth-1"})),(0,i.kt)("p",null,"then add basic-auth plugin in the Consumer page:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@release/2.11/docs/assets/images/plugin/basic-auth-2.png",alt:"auth-2"})),(0,i.kt)("h3",{id:"2-add-a-route-or-add-a-service-and-enable-the-basic-auth-plugin"},"2. add a Route or add a Service, and enable the ",(0,i.kt)("inlineCode",{parentName:"h3"},"basic-auth")," plugin"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {\n        "basic-auth": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,i.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"missing Authorization header")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i http://127.0.0.1:9080/hello\nHTTP/1.1 401 Unauthorized\n...\n{"message":"Missing authorization in request"}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"user is not exists:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i -ubar:bar http://127.0.0.1:9080/hello\nHTTP/1.1 401 Unauthorized\n...\n{"message":"Invalid user key in authorization"}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"password is invalid:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i -ufoo:foo http://127.0.0.1:9080/hello\nHTTP/1.1 401 Unauthorized\n...\n{"message":"Password is error"}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"success:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i -ufoo:bar http://127.0.0.1:9080/hello\nHTTP/1.1 200 OK\n...\nhello, world\n")),(0,i.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,i.kt)("p",null,"When you want to disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"basic-auth")," plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}c.isMDXComponent=!0}}]);