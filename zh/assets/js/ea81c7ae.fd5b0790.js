"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6426],{3905:function(t,e,n){n.d(e,{Zo:function(){return o},kt:function(){return s}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),u=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=u(t.components);return r.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),c=u(n),s=a,k=c["".concat(d,".").concat(s)]||c[s]||m[s]||l;return n?r.createElement(k,i(i({ref:e},o),{},{components:n})):r.createElement(k,i({ref:e},o))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},94305:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i={title:"redirect"},p=void 0,d={unversionedId:"plugins/redirect",id:"version-2.10/plugins/redirect",isDocsHomePage:!1,title:"redirect",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.10/plugins/redirect.md",sourceDirName:"plugins",slug:"/plugins/redirect",permalink:"/zh/docs/apisix/2.10/plugins/redirect",editUrl:"https://github.com/apache/apisix/edit/release/2.10/docs/zh/latest/plugins/redirect.md",tags:[],version:"2.10",frontMatter:{title:"redirect"},sidebar:"version-2.10/docs",previous:{title:"serverless",permalink:"/zh/docs/apisix/2.10/plugins/serverless"},next:{title:"echo",permalink:"/zh/docs/apisix/2.10/plugins/echo"}},u=[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],o={toc:u};function m(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"URI \u91cd\u5b9a\u5411\u63d2\u4ef6\u3002"),(0,l.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http_to_https"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," \u5e76\u4e14\u8bf7\u6c42\u662f http \u65f6\uff0c\u4f1a\u81ea\u52a8 301 \u91cd\u5b9a\u5411\u4e3a https\uff0curi \u4fdd\u6301\u4e0d\u53d8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uri"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u5305\u542b Nginx \u53d8\u91cf\u7684 URI\uff0c\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"/test/index.html"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"$uri/index.html"),"\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u7c7b\u4f3c\u4e8e ",(0,l.kt)("inlineCode",{parentName:"td"},"$ {xxx}")," \u7684\u65b9\u5f0f\u5f15\u7528\u53d8\u91cf\uff0c\u4ee5\u907f\u514d\u4ea7\u751f\u6b67\u4e49\uff0c\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"${uri}foo/index.html"),"\u3002\u82e5\u4f60\u9700\u8981\u4fdd\u7559 ",(0,l.kt)("inlineCode",{parentName:"td"},"$")," \u5b57\u7b26\uff0c\u90a3\u4e48\u4f7f\u7528\u5982\u4e0b\u683c\u5f0f\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"/\\$foo/index.html"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"regex_uri"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u5230\u4e0a\u6e38\u7684\u65b0 ",(0,l.kt)("inlineCode",{parentName:"td"},"uri")," \u5730\u5740, \u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u6765\u81ea\u5ba2\u6237\u7aef\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"uri"),"\uff0c\u5f53\u5339\u914d\u6210\u529f\u540e\u4f7f\u7528\u6a21\u677f\u66ff\u6362\u53d1\u9001\u91cd\u5b9a\u5411\u5230\u5ba2\u6237\u7aef, \u672a\u5339\u914d\u6210\u529f\u65f6\u5c06\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"uri")," \u8f6c\u53d1\u81f3\u4e0a\u6e38\u3002",(0,l.kt)("inlineCode",{parentName:"td"},"uri")," \u548c ",(0,l.kt)("inlineCode",{parentName:"td"},"regex_uri")," \u4e0d\u53ef\u4ee5\u540c\u65f6\u5b58\u5728\u3002\u4f8b\u5982\uff1a",'["^/iresty/(.',(0,l.kt)("em",{parentName:"td"},")/(."),')/(.*)","/$1-$2-$3"]'," \u7b2c\u4e00\u4e2a\u5143\u7d20\u4ee3\u8868\u5339\u914d\u6765\u81ea\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"uri")," \u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u7b2c\u4e8c\u4e2a\u5143\u7d20\u4ee3\u8868\u5339\u914d\u6210\u529f\u540e\u53d1\u9001\u91cd\u5b9a\u5411\u5230\u5ba2\u6237\u7aef\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"uri")," \u6a21\u677f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ret_code"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"302"),(0,l.kt)("td",{parentName:"tr",align:null},"[200, ...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u54cd\u5e94\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"encode_uri"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5bf9\u8fd4\u56de\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"Location")," header\u8fdb\u884c\u7f16\u7801\uff0c\u7f16\u7801\u683c\u5f0f\u53c2\u8003 ",(0,l.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc3986"},"RFC3986"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"append_query_string"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a",(0,l.kt)("inlineCode",{parentName:"td"},"true"),"\u65f6\uff0c\u5c06\u8bf7\u6c42url\u7684query\u90e8\u5206\u6dfb\u52a0\u5230Location\u91cc\u3002\u5982\u679c\u5728",(0,l.kt)("inlineCode",{parentName:"td"},"uri"),"\u6216",(0,l.kt)("inlineCode",{parentName:"td"},"regex_uri"),"\u4e2d\u914d\u7f6e\u4e86query, \u90a3\u4e48\u8bf7\u6c42\u7684query\u4f1a\u88ab\u8ffd\u52a0\u5728\u8fd9\u4e2aquery\u540e\uff0c\u4ee5",(0,l.kt)("inlineCode",{parentName:"td"},"&"),"\u5206\u9694\u3002 \u6ce8\u610f\uff1a\u5982\u679c\u5df2\u7ecf\u5904\u7406\u4e86query\uff0c\u6bd4\u5982\u4f7f\u7528\u4e86nginx\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"td"},"$request_uri"),"\uff0c\u90a3\u4e48\u542f\u7528\u6b64\u529f\u80fd\u4f1a\u9020\u6210query\u91cd\u590d")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"http_to_https"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"uri")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"regex_uri")," \u4e09\u4e2a\u4e2d\u53ea\u80fd\u914d\u7f6e\u4e00\u4e2a\u3002"),(0,l.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h4",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u57fa\u672c\u5b9e\u4f8b\uff0c\u4e3a\u7279\u5b9a\u8def\u7531\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"redirect")," \u63d2\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/test/index.html",\n    "plugins": {\n        "redirect": {\n            "uri": "/test/default.html",\n            "ret_code": 301\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728\u65b0\u7684 URI \u4e2d\u4f7f\u7528 Nginx \u5185\u7f6e\u7684\u4efb\u610f\u53d8\u91cf\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/test",\n    "plugins": {\n        "redirect": {\n            "uri": "$uri/index.html",\n            "ret_code": 301\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h4",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,l.kt)("p",null,"\u6d4b\u8bd5\u793a\u4f8b\u57fa\u4e8e\u4e0a\u8ff0\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/test/index.html -i\nHTTP/1.1 301 Moved Permanently\nDate: Wed, 23 Oct 2019 13:48:23 GMT\nContent-Type: text/html\nContent-Length: 166\nConnection: keep-alive\nLocation: /test/default.html\n\n...\n")),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u68c0\u67e5\u54cd\u5e94\u7801\u548c\u54cd\u5e94\u5934\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Location")," \u53c2\u6570\uff0c\u5b83\u8868\u793a\u8be5\u63d2\u4ef6\u5df2\u542f\u7528\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'\n\u4e0b\u9762\u662f\u4e00\u4e2a\u5b9e\u73b0 http \u5230 https \u8df3\u8f6c\u7684\u793a\u4f8b\uff1a\n```shell\ncurl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "redirect": {\n            "http_to_https": true\n        }\n    }\n}\'\n')),(0,l.kt)("h4",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u79fb\u9664\u63d2\u4ef6\u914d\u7f6e\u4e2d\u76f8\u5e94\u7684 JSON \u914d\u7f6e\u53ef\u7acb\u5373\u7981\u7528\u8be5\u63d2\u4ef6\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/test/index.html",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u8fd9\u65f6\u8be5\u63d2\u4ef6\u5df2\u88ab\u7981\u7528\u3002"))}m.isMDXComponent=!0}}]);