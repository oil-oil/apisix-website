"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98184],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return t?n.createElement(h,i(i({ref:a},p),{},{components:t})):n.createElement(h,i({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},69149:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var n=t(87462),r=t(63366),o=(t(67294),t(3905)),i={title:"Basic Deploy"},l=void 0,s={unversionedId:"install",id:"version-2.10/install",isDocsHomePage:!1,title:"Basic Deploy",description:"\x3c!--",source:"@site/docs-apisix-dashboard_versioned_docs/version-2.10/install.md",sourceDirName:".",slug:"/install",permalink:"/zh/docs/dashboard/2.10/install",editUrl:"https://github.com/apache/apisix-dashboard/edit/release/2.10/docs/zh/latest/install.md",tags:[],version:"2.10",frontMatter:{title:"Basic Deploy"},sidebar:"version-2.10/docs",previous:{title:"API doc of Manager API",permalink:"/zh/docs/dashboard/2.10/api/api"},next:{title:"Rebuild Docker image",permalink:"/zh/docs/dashboard/2.10/deploy-with-docker"}},d=[{value:"Docker",id:"docker",children:[]},{value:"RPM",id:"rpm",children:[{value:"Install",id:"install",children:[]},{value:"Launch",id:"launch",children:[]}]},{value:"Source",id:"source",children:[{value:"Prerequisites",id:"source-prerequisites",children:[]},{value:"Download",id:"source-download",children:[]},{value:"Build",id:"source-build",children:[]},{value:"Launch",id:"source-launch",children:[]},{value:"Service",id:"source-service",children:[]}]}],p={toc:d};function c(e){var a=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Installing Apache APISIX Dashboard on Linux is easy.\nNow, we provide Docker image and RPM installation package."),(0,o.kt)("h2",{id:"docker"},"Docker"),(0,o.kt)("p",null,"We recommend using Docker to run Dashboard:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull apache/apisix-dashboard\ndocker run -d --name dashboard \\\n           -p 9000:9000        \\\n           -v <CONFIG_FILE>:/usr/local/apisix-dashboard/conf/conf.yaml \\\n           apache/apisix-dashboard\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<CONFIG_FILE>")," to your configure file path."))),(0,o.kt)("h2",{id:"rpm"},"RPM"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE:")," Only CentOS 7 is supported currently, for more information, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/dashboard/2.10/deploy"},"here"),"."),(0,o.kt)("h3",{id:"install"},"Install"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# 1. install RPM package\nsudo yum install -y https://github.com/apache/apisix-dashboard/releases/download/v2.10/apisix-dashboard-2.10-0.el7.x86_64.rpm\n")),(0,o.kt)("h3",{id:"launch"},"Launch"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# run dashboard in the shell\nsudo manager-api -p /usr/local/apisix/dashboard/\n\n# or run dashboard as a service\nsystemctl apisix-dashboard start\n")),(0,o.kt)("p",null,"Without changing the configuration, visit ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9000")," to use the dashboard with GUI, where the default username and password are ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),"."),(0,o.kt)("h2",{id:"source"},"Source"),(0,o.kt)("p",null,"The Dashboard project contains both ",(0,o.kt)("inlineCode",{parentName:"p"},"manager-api")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"web"),", but ",(0,o.kt)("inlineCode",{parentName:"p"},"web")," is ",(0,o.kt)("em",{parentName:"p"},"optional"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"manager-api")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"web")," will be included in this build guide product."),(0,o.kt)("h3",{id:"source-prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before using source codes to build, make sure that the following dependencies are installed in your environment."),(0,o.kt)("p",null,"For ",(0,o.kt)("inlineCode",{parentName:"p"},"manager-api"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://golang.org/dl/"},"Golang")," 1.13+")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tip: For users in mainland China, you can use the following command to speed up the module downloads.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ go env -w GOPROXY=https://goproxy.cn,direct\n")),(0,o.kt)("p",null,"For ",(0,o.kt)("inlineCode",{parentName:"p"},"web"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," current LTS (14.x+)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://yarnpkg.com/getting-started/install"},"Yarn"))),(0,o.kt)("h3",{id:"source-download"},"Download"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone -b release/2.10 https://github.com/apache/apisix-dashboard.git && cd apisix-dashboard\n")),(0,o.kt)("h3",{id:"source-build"},"Build"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd apisix-dashboard\nmake build\n")),(0,o.kt)("p",null,"When the build is complete, the results are stored in the root ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," directory."),(0,o.kt)("p",null,"Note: ",(0,o.kt)("inlineCode",{parentName:"p"},"make build")," will build ",(0,o.kt)("inlineCode",{parentName:"p"},"manager-api")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"web"),", use the ",(0,o.kt)("inlineCode",{parentName:"p"},"make help")," command to see more commands."),(0,o.kt)("h3",{id:"source-launch"},"Launch"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"After the build is complete and before you start, make sure the following dependencies are installed and running in your environment.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://etcd.io/docs/v3.4.0/dl-build/"},"etcd")," 3.4.0+")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check and modify the configuration information in ",(0,o.kt)("inlineCode",{parentName:"p"},"output/conf/conf.yaml")," according to your deployment environment.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch the Dashboard"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd ./output\n\n./manager-api\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Without changing the configuration, visit ",(0,o.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:9000")," to use the dashboard with GUI, where the default username and password are ",(0,o.kt)("inlineCode",{parentName:"li"},"admin"),".")),(0,o.kt)("h3",{id:"source-service"},"Service"),(0,o.kt)("p",null,"You will need to handle your own service management when deploying using the source code compilation method. We provide a service file template for operating systems that use the Systemd service manager."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p /usr/local/apisix-dashboard\ncp -rf ./output/* /usr/local/apisix-dashboard\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create service unit")),(0,o.kt)("p",null,"Copy the following or use this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard/tree/master/service/apisix-dashboard.service"},(0,o.kt)("strong",{parentName:"a"},"file"))," directly, you need to copy it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system")," directory and execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl daemon-reload")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# copy service unit\ncp ./api/service/apisix-dashboard.service /usr/lib/systemd/system/apisix-dashboard.service\nsystemctl daemon-reload\n\n# or: If you need to modify the service unit, you can use the following command\necho "[Unit]\nDescription=apisix-dashboard\nConflicts=apisix-dashboard.service\nAfter=network-online.target\n\n[Service]\nWorkingDirectory=/usr/local/apisix-dashboard\nExecStart=/usr/local/apisix-dashboard/manager-api -c /usr/local/apisix-dashboard/conf/conf.yaml" > /usr/lib/systemd/system/apisix-dashboard.service\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Manage service")),(0,o.kt)("p",null,"You can use the following command to manage the service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# start apisix-dashboard\nsystemctl start apisix-dashboard\n\n# stop apisix-dashboard\nsystemctl stop apisix-dashboard\n\n# check apisix-dashboard status\nsystemctl status apisix-dashboard\n")))}c.isMDXComponent=!0}}]);