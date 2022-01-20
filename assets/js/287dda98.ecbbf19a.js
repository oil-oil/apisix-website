"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81280],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,h=s["".concat(p,".").concat(m)]||s[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},23607:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i={title:"Deploy with Source Codes"},l=void 0,p={unversionedId:"deploy",id:"version-2.6.1/deploy",isDocsHomePage:!1,title:"Deploy with Source Codes",description:"\x3c!--",source:"@site/docs-apisix-dashboard_versioned_docs/version-2.6.1/deploy.md",sourceDirName:".",slug:"/deploy",permalink:"/docs/dashboard/2.6.1/deploy",editUrl:"https://github.com/apache/apisix-dashboard/edit/release/2.6.1/docs/en/latest/deploy.md",tags:[],version:"2.6.1",frontMatter:{title:"Deploy with Source Codes"},sidebar:"version-2.6.1/docs",previous:{title:"API doc of Manager API.",permalink:"/docs/dashboard/2.6.1/api/api"},next:{title:"Deploy with Docker",permalink:"/docs/dashboard/2.6.1/deploy-with-docker"}},d=[{value:"Prerequisites",id:"prerequisites",children:[{value:"manager-api",id:"manager-api",children:[]},{value:"web",id:"web",children:[]}]},{value:"Clone the project",id:"clone-the-project",children:[]},{value:"Build",id:"build",children:[]},{value:"Launch",id:"launch",children:[]},{value:"Working directory",id:"working-directory",children:[]}],u={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Dashboard contains both ",(0,o.kt)("inlineCode",{parentName:"p"},"manager-api")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"web"),", but ",(0,o.kt)("inlineCode",{parentName:"p"},"web")," is ",(0,o.kt)("em",{parentName:"p"},"optional"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"manager-api")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"web")," will be included in this build guide product."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before using source codes to build, make sure that the following dependencies are installed in your environment."),(0,o.kt)("h3",{id:"manager-api"},"manager-api"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://golang.org/dl/"},"Golang")," 1.13+: For users in mainland China, you can use the following command to speed up the module downloads.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ go env -w GOPROXY=https://goproxy.cn,direct\n")),(0,o.kt)("h3",{id:"web"},"web"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," 10.23.0+"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://yarnpkg.com/getting-started/install"},"Yarn"))),(0,o.kt)("h2",{id:"clone-the-project"},"Clone the project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ git clone -b release/2.6.1 https://github.com/apache/apisix-dashboard.git\n")),(0,o.kt)("h2",{id:"build"},"Build"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ cd apisix-dashboard\n$ make build\n")),(0,o.kt)("p",null,"When the build is complete, the results are stored in the root ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," directory."),(0,o.kt)("p",null,"Note: ",(0,o.kt)("inlineCode",{parentName:"p"},"make build")," will build ",(0,o.kt)("inlineCode",{parentName:"p"},"manger-api")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"web"),", use the ",(0,o.kt)("inlineCode",{parentName:"p"},"make help")," command to see more commands."),(0,o.kt)("h2",{id:"launch"},"Launch"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"After the build is complete and before you start, make sure the following dependencies are installed and running in your environment.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://etcd.io/docs/v3.4.0/dl-build/"},"etcd")," 3.4.0+")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check and modify the configuration information in ",(0,o.kt)("inlineCode",{parentName:"p"},"output/conf/conf.yaml")," according to your deployment environment.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch the Dashboard"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ cd ./output\n\n$ ./manager-api\n\n# or running in background\n$ nohup ./manager-api &\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Without changing the configuration, visit ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9000")," to use the dashboard with GUI, where the default username and password are ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Stop the Dashboard"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"manager-api")," provides a sub command ",(0,o.kt)("inlineCode",{parentName:"p"},"stop")," to quit the program gracefully, just\nrun:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./manager-api stop\n")),(0,o.kt)("h2",{id:"working-directory"},"Working directory"),(0,o.kt)("p",null,"the ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," directory mention above is the default working directory."),(0,o.kt)("p",null,"You can move the entire directory to any path you want, and use the ",(0,o.kt)("inlineCode",{parentName:"p"},"-p")," to specify it as the working directory."),(0,o.kt)("p",null,"For example, you can move it to ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/apisix-dashboard/")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ mv ./output/manager-api /usr/local/bin/\n\n$ mv ./output/ /usr/local/apisix-dashboard/\n\n$ manager-api -p /usr/local/apisix-dashboard/\n")))}c.isMDXComponent=!0}}]);