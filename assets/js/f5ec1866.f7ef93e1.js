"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5048],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11972:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o={title:"grpc-web"},p=void 0,l={unversionedId:"plugins/grpc-web",id:"version-2.12/plugins/grpc-web",isDocsHomePage:!1,title:"grpc-web",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.12/plugins/grpc-web.md",sourceDirName:"plugins",slug:"/plugins/grpc-web",permalink:"/docs/apisix/plugins/grpc-web",editUrl:"https://github.com/apache/apisix/edit/release/2.12/docs/en/latest/plugins/grpc-web.md",tags:[],version:"2.12",frontMatter:{title:"grpc-web"},sidebar:"version-2.12/docs",previous:{title:"grpc-transcode",permalink:"/docs/apisix/plugins/grpc-transcode"},next:{title:"fault-injection",permalink:"/docs/apisix/plugins/fault-injection"}},c=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],u={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#name"},(0,i.kt)("strong",{parentName:"a"},"Name"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-enable"},(0,i.kt)("strong",{parentName:"a"},"How To Enable"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#test-plugin"},(0,i.kt)("strong",{parentName:"a"},"Test Plugin"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#disable-plugin"},(0,i.kt)("strong",{parentName:"a"},"Disable Plugin")))),(0,i.kt)("h2",{id:"name"},"Name"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"grpc-web")," plugin is a proxy plugin used to process ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/grpc/grpc-web"},"gRPC Web")," client requests to ",(0,i.kt)("inlineCode",{parentName:"p"},"gRPC Server"),"."),(0,i.kt)("p",null,"gRPC Web Client -> APISIX -> gRPC server"),(0,i.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,i.kt)("p",null,"To enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"gRPC Web")," proxy plugin, routing must use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Prefix matching")," pattern (for example: ",(0,i.kt)("inlineCode",{parentName:"p"},"/*")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"/grpc/example/*"),"),\nBecause the ",(0,i.kt)("inlineCode",{parentName:"p"},"gRPC Web")," client will pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"package name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"service interface name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"method name")," and other information declared in the ",(0,i.kt)("inlineCode",{parentName:"p"},"proto")," in the URI (for example: ",(0,i.kt)("inlineCode",{parentName:"p"},"/path/a6.RouteService/Insert"),") ,\nWhen using ",(0,i.kt)("inlineCode",{parentName:"p"},"Absolute Match"),", it will not be able to hit the plugin and extract the ",(0,i.kt)("inlineCode",{parentName:"p"},"proto")," information."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri":"/grpc/web/*",\n    "plugins":{\n        "grpc-web":{}\n    },\n    "upstream":{\n        "scheme":"grpc",\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    }\n}\'\n')),(0,i.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The request method only supports ",(0,i.kt)("inlineCode",{parentName:"li"},"POST")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"OPTIONS"),", refer to: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/grpc/grpc-web/blob/master/doc/browser-features.md#cors-support"},"CORS support"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"Content-Type")," supports ",(0,i.kt)("inlineCode",{parentName:"li"},"application/grpc-web"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"application/grpc-web-text"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"application/grpc-web+proto"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"application/grpc-web-text+proto"),", refer to: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-WEB.md#protocol-differences-vs-grpc-over-http2"},"Protocol differences vs gRPC over HTTP2"),"."),(0,i.kt)("li",{parentName:"ul"},"Client deployment, refer to: ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/grpc-web"},"gRPC-Web Client Runtime Library")," or ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/tree/master/t/plugin/grpc-web"},"Apache APISIX gRPC Web Test Framework"),"."),(0,i.kt)("li",{parentName:"ul"},"After the ",(0,i.kt)("inlineCode",{parentName:"li"},"gRPC Web")," client is deployed, you can initiate a ",(0,i.kt)("inlineCode",{parentName:"li"},"gRPC Web")," proxy request to ",(0,i.kt)("inlineCode",{parentName:"li"},"APISIX")," through ",(0,i.kt)("inlineCode",{parentName:"li"},"browser")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"node"),".")),(0,i.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,i.kt)("p",null,"Just delete the JSON configuration of ",(0,i.kt)("inlineCode",{parentName:"p"},"grpc-web")," in the plugin configuration.\nThe APISIX plug-in is hot-reloaded, so there is no need to restart APISIX."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri":"/grpc/web/*",\n    "plugins":{},\n    "upstream":{\n        "scheme":"grpc",\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    }\n}\'\n')))}s.isMDXComponent=!0}}]);