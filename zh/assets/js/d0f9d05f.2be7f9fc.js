"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[88383],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=c(t),m=o,d=h["".concat(p,".").concat(m)]||h[m]||u[m]||a;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=h;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},69830:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i={title:"Control API"},l=void 0,p={unversionedId:"control-api",id:"version-2.10/control-api",isDocsHomePage:!1,title:"Control API",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.10/control-api.md",sourceDirName:".",slug:"/control-api",permalink:"/zh/docs/apisix/2.10/control-api",editUrl:"https://github.com/apache/apisix/edit/release/2.10/docs/zh/latest/control-api.md",tags:[],version:"2.10",frontMatter:{title:"Control API"},sidebar:"version-2.10/docs",previous:{title:"Admin API",permalink:"/zh/docs/apisix/2.10/admin-api"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/zh/docs/apisix/2.10/FAQ"}},c=[{value:"\u901a\u8fc7\u63d2\u4ef6\u6dfb\u52a0\u7684 control API",id:"\u901a\u8fc7\u63d2\u4ef6\u6dfb\u52a0\u7684-control-api",children:[]},{value:"\u72ec\u7acb\u4e8e\u63d2\u4ef6\u7684 control API",id:"\u72ec\u7acb\u4e8e\u63d2\u4ef6\u7684-control-api",children:[{value:"GET /v1/schema",id:"get-v1schema",children:[]},{value:"GET /v1/healthcheck",id:"get-v1healthcheck",children:[]},{value:"POST /v1/gc",id:"post-v1gc",children:[]}]}],s={toc:c};function u(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"control API \u53ef\u4ee5\u88ab\u7528\u6765\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u66b4\u9732 APISIX \u5185\u90e8\u72b6\u6001\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"\u63a7\u5236\u5355\u4e2a APISIX \u7684\u6570\u636e\u5e73\u9762\u7684\u884c\u4e3a")),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0ccontrol API \u662f\u542f\u7528\u7684\uff0c\u76d1\u542c ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:9090"),"\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix/conf/config.yaml")," \u4e2d\u7684 control \u90e8\u5206\u6765\u66f4\u6539\u8bbe\u7f6e\uff0c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  ...\n  enable_control: true\n  control:\n    ip: "127.0.0.1"\n    port: 9090\n')),(0,a.kt)("p",null,"\u6ce8\u610f: control API server \u4e0d\u5e94\u8be5\u88ab\u914d\u7f6e\u6210\u76d1\u542c\u516c\u7f51\u5730\u5740\u3002"),(0,a.kt)("h2",{id:"\u901a\u8fc7\u63d2\u4ef6\u6dfb\u52a0\u7684-control-api"},"\u901a\u8fc7\u63d2\u4ef6\u6dfb\u52a0\u7684 control API"),(0,a.kt)("p",null,"APISIX \u4e2d\u4e00\u4e9b\u63d2\u4ef6\u6dfb\u52a0\u4e86\u81ea\u5df1\u7684 control API\u3002\u5982\u679c\u4f60\u5bf9\u4ed6\u4eec\u611f\u5174\u8da3\uff0c\u8bf7\u53c2\u9605\u5bf9\u5e94\u63d2\u4ef6\u7684\u6587\u6863\u3002"),(0,a.kt)("h2",{id:"\u72ec\u7acb\u4e8e\u63d2\u4ef6\u7684-control-api"},"\u72ec\u7acb\u4e8e\u63d2\u4ef6\u7684 control API"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u652f\u6301\u7684 API:"),(0,a.kt)("h3",{id:"get-v1schema"},"GET /v1/schema"),(0,a.kt)("p",null,"\u5f15\u5165\u81ea 2.2 \u7248\u672c"),(0,a.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u683c\u5f0f\u8fd4\u56de\u88ab\u8be5 APISIX \u5b9e\u4f8b\u4f7f\u7528\u7684 json schema\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "main": {\n        "route": {\n            "properties": {...}\n        },\n        "upstream": {\n            "properties": {...}\n        },\n        ...\n    },\n    "plugins": {\n        "example-plugin": {\n            "consumer_schema": {...},\n            "metadata_schema": {...},\n            "schema": {...},\n            "type": ...,\n            "priority": 0,\n            "version": 0.1\n        },\n        ...\n    },\n    "stream-plugins": {\n        "mqtt-proxy": {\n            ...\n        },\n        ...\n    }\n}\n')),(0,a.kt)("p",null,"\u53ea\u6709\u542f\u7528\u4e86\u7684\u63d2\u4ef6\u624d\u4f1a\u88ab\u5305\u542b\u5728\u8fd4\u56de\u7ed3\u679c\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," \u90e8\u5206\u3002(\u8fd4\u56de\u7ed3\u679c\u4e2d\u7684)\u4e00\u4e9b\u63d2\u4ef6\u53ef\u80fd\u4f1a\u7f3a\u5931\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"consumer_schema")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," \u5b57\u6bb5\uff0c\u8fd9\u53d6\u51b3\u4e8e\u63d2\u4ef6\u7684\u5b9a\u4e49\u3002"),(0,a.kt)("h3",{id:"get-v1healthcheck"},"GET /v1/healthcheck"),(0,a.kt)("p",null,"\u5f15\u5165\u81ea 2.3 \u7248\u672c"),(0,a.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u683c\u5f0f\u8fd4\u56de\u5f53\u524d\u7684 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.10/health-check"},"health check")," \u72b6\u6001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "healthy_nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "name": "upstream#/upstreams/1",\n        "nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            },\n            {\n                "host": "127.0.0.2",\n                "port": 1988,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "src_id": "1",\n        "src_type": "upstreams"\n    },\n    {\n        "healthy_nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "name": "upstream#/routes/1",\n        "nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            },\n            {\n                "host": "127.0.0.1",\n                "port": 1988,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "src_id": "1",\n        "src_type": "routes"\n    }\n]\n')),(0,a.kt)("p",null,"\u6bcf\u4e2a entry \u5305\u542b\u4ee5\u4e0b\u5b57\u6bb5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"src_type\uff1a\u8868\u793a health checker \u7684\u6765\u6e90\u3002\u503c\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"[routes,services,upstreams]")," \u5176\u4e2d\u4e4b\u4e00"),(0,a.kt)("li",{parentName:"ul"},"src_id\uff1a\u8868\u793a\u521b\u5efa health checker \u7684\u5bf9\u8c61\u7684id\u3002\u4f8b\u5982\uff0c\u5047\u8bbe id \u4e3a 1 \u7684 Upstream \u5bf9\u8c61\u521b\u5efa\u4e86\u4e00\u4e2a health checker\uff0c\u90a3\u4e48 ",(0,a.kt)("inlineCode",{parentName:"li"},"src_type")," \u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"upstreams"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"src_id")," \u5c31\u662f 1"),(0,a.kt)("li",{parentName:"ul"},"name\uff1a \u8868\u793a health checker \u7684\u540d\u79f0"),(0,a.kt)("li",{parentName:"ul"},"nodes\uff1a health checker \u7684\u76ee\u6807\u8282\u70b9"),(0,a.kt)("li",{parentName:"ul"},"healthy_nodes\uff1a \u8868\u793a health checker \u68c0\u6d4b\u5230\u7684\u5065\u5eb7\u8282\u70b9")),(0,a.kt)("p",null,"\u7528\u6237\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/healthcheck/$src_type/$src_id")," \u6765\u83b7\u53d6\u6307\u5b9a health checker \u7684\u72b6\u6001\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"GET /v1/healthcheck/upstreams/1")," \u8fd4\u56de\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "healthy_nodes": [\n        {\n            "host": "127.0.0.1",\n            "port": 1980,\n            "priority": 0,\n            "weight": 1\n        }\n    ],\n    "name": "upstream#/upstreams/1",\n    "nodes": [\n        {\n            "host": "127.0.0.1",\n            "port": 1980,\n            "priority": 0,\n            "weight": 1\n        },\n        {\n            "host": "127.0.0.2",\n            "port": 1988,\n            "priority": 0,\n            "weight": 1\n        }\n    ],\n    "src_id": "1",\n    "src_type": "upstreams"\n}\n')),(0,a.kt)("h3",{id:"post-v1gc"},"POST /v1/gc"),(0,a.kt)("p",null,"\u5f15\u5165\u81ea 2.8 \u7248\u672c"),(0,a.kt)("p",null,"\u5728 http \u5b50\u7cfb\u7edf\u4e2d\u89e6\u53d1\u4e00\u6b21\u5168\u91cf GC"),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c\u5f53\u4f60\u542f\u7528 stream proxy \u65f6\uff0cAPISIX \u5c06\u4e3a stream \u5b50\u7cfb\u7edf\u8fd0\u884c\u53e6\u4e00\u4e2a Lua \u865a\u62df\u673a\u3002\u5b83\u4e0d\u4f1a\u89e6\u53d1\u8fd9\u4e2a Lua \u865a\u62df\u673a\u4e2d\u7684\u5168\u91cf GC\u3002"))}u.isMDXComponent=!0}}]);