"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[88030],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),m=o(n),c=r,h=m["".concat(p,".").concat(c)]||m[c]||s[c]||l;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10815:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return o},default:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i={title:"ldap-auth"},u=void 0,p={unversionedId:"plugins/ldap-auth",id:"plugins/ldap-auth",isDocsHomePage:!1,title:"ldap-auth",description:"\x3c!--",source:"@site/docs/apisix/plugins/ldap-auth.md",sourceDirName:"plugins",slug:"/plugins/ldap-auth",permalink:"/docs/apisix/next/plugins/ldap-auth",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/ldap-auth.md",tags:[],version:"current",frontMatter:{title:"ldap-auth"},sidebar:"docs",previous:{title:"authz-casbin",permalink:"/docs/apisix/next/plugins/authz-casbin"},next:{title:"opa",permalink:"/docs/apisix/next/plugins/opa"}},o=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[{value:"1. set a consumer and config the value of the <code>ldap-auth</code> option",id:"1-set-a-consumer-and-config-the-value-of-the-ldap-auth-option",children:[]},{value:"2. add a Route or add a Service, and enable the <code>ldap-auth</code> plugin",id:"2-add-a-route-or-add-a-service-and-enable-the-ldap-auth-plugin",children:[]}]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],d={toc:o};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#name"},(0,l.kt)("strong",{parentName:"a"},"Name"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#attributes"},(0,l.kt)("strong",{parentName:"a"},"Attributes"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#how-to-enable"},(0,l.kt)("strong",{parentName:"a"},"How To Enable"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#test-plugin"},(0,l.kt)("strong",{parentName:"a"},"Test Plugin"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disable-plugin"},(0,l.kt)("strong",{parentName:"a"},"Disable Plugin")))),(0,l.kt)("h2",{id:"name"},"Name"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ldap-auth")," is an authentication plugin that can works with ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer"),". Add Ldap Authentication to a ",(0,l.kt)("inlineCode",{parentName:"p"},"service")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"route"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer")," then authenticate against the Ldap server using Basic authentication."),(0,l.kt)("p",null,"For more information on Basic authentication, refer to ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Basic_access_authentication"},"Wiki")," for more information."),(0,l.kt)("p",null,"This authentication plugin use ",(0,l.kt)("a",{parentName:"p",href:"https://lualdap.github.io/lualdap/"},"lualdap")," plugin to connect against the ldap server"),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("p",null,"For consumer side:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user_dn"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"the user dn of the ",(0,l.kt)("inlineCode",{parentName:"td"},"ladp")," client (example: ",(0,l.kt)("inlineCode",{parentName:"td"},"cn=user01,ou=users,dc=example,dc=org"),")")))),(0,l.kt)("p",null,"For route side:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"base_dn"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"the base dn of the ",(0,l.kt)("inlineCode",{parentName:"td"},"ldap")," server (example : ",(0,l.kt)("inlineCode",{parentName:"td"},"ou=users,dc=example,dc=org"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ldap_uri"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"the uri of the ldap server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"use_tls"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating if Transport Layer Security (TLS) should be used.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uid"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cn")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"the ",(0,l.kt)("inlineCode",{parentName:"td"},"uid")," attribute")))),(0,l.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,l.kt)("h3",{id:"1-set-a-consumer-and-config-the-value-of-the-ldap-auth-option"},"1. set a consumer and config the value of the ",(0,l.kt)("inlineCode",{parentName:"h3"},"ldap-auth")," option"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "foo",\n    "plugins": {\n        "ldap-auth": {\n            "user_dn": "cn=user01,ou=users,dc=example,dc=org"\n        }\n    }\n}\'\n')),(0,l.kt)("h3",{id:"2-add-a-route-or-add-a-service-and-enable-the-ldap-auth-plugin"},"2. add a Route or add a Service, and enable the ",(0,l.kt)("inlineCode",{parentName:"h3"},"ldap-auth")," plugin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {\n        "ldap-auth": {\n            "base_dn": "ou=users,dc=example,dc=org",\n            "ldap_uri": "localhost:1389",\n            "uid": "cn"\n        },\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"missing Authorization header")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i http://127.0.0.1:9080/hello\nHTTP/1.1 401 Unauthorized\n...\n{"message":"Missing authorization in request"}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"user is not exists:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i -uuser:password1 http://127.0.0.1:9080/hello\nHTTP/1.1 401 Unauthorized\n...\n{"message":"Invalid user key in authorization"}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"password is invalid:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i -uuser01:passwordfalse http://127.0.0.1:9080/hello\nHTTP/1.1 401 Unauthorized\n...\n{"message":"Password is error"}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"success:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i -uuser01:password1 http://127.0.0.1:9080/hello\nHTTP/1.1 200 OK\n...\nhello, world\n")),(0,l.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,l.kt)("p",null,"When you want to disable the ",(0,l.kt)("inlineCode",{parentName:"p"},"ldap-auth")," plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:2379/apisix/admin/routes/1 -X PUT -d value=\'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}s.isMDXComponent=!0}}]);