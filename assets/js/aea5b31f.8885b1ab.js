"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11690],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return d}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var g=n.createContext({}),c=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(g.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,g=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=o,m=u["".concat(g,".").concat(d)]||u[d]||p[d]||r;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26178:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return g},assets:function(){return c},toc:function(){return s},default:function(){return u}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i={title:"Apache APISIX Integrates with Google Cloud Logging to Improve Log Processing",authors:[{name:"Jinchao Shuai",title:"Author",url:"https://github.com/shuaijinchao",image_url:"https://avatars.githubusercontent.com/u/8529452?v=4"},{name:"Yilin Zeng",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4"}],keywords:["Apache APISIX","Google Cloud","Google Logging","APISIX","API Gateway"],description:"This article will explain how to configure and use the Google Cloud Logging service in Apache APISIX.",tags:["Technology"]},l=void 0,g={permalink:"/blog/2021/12/22/google-logging",source:"@site/blog/2021/12/22/google-logging.md",title:"Apache APISIX Integrates with Google Cloud Logging to Improve Log Processing",description:"This article will explain how to configure and use the Google Cloud Logging service in Apache APISIX.",date:"2021-12-22T00:00:00.000Z",formattedDate:"December 22, 2021",tags:[{label:"Technology",permalink:"/blog/tags/technology"}],readingTime:6.64,truncated:!0,authors:[{name:"Jinchao Shuai",title:"Author",url:"https://github.com/shuaijinchao",image_url:"https://avatars.githubusercontent.com/u/8529452?v=4",imageURL:"https://avatars.githubusercontent.com/u/8529452?v=4"},{name:"Yilin Zeng",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4",imageURL:"https://avatars.githubusercontent.com/u/36651058?v=4"}],prevItem:{title:"Apache APISIX integrates with Open Policy Agent to enrich its ecosystem",permalink:"/blog/2021/12/24/open-policy-agent"},nextItem:{title:"Biweekly Report\uff5c12.1-12.15 Feature Highlights Update in Progress",permalink:"/blog/2021/12/20/weekly-report-1215"}},c={authorsImageUrls:[void 0,void 0]},s=[{value:"Configure Google Cloud",id:"configure-google-cloud",children:[]},{value:"Configure Apache APISIX",id:"configure-apache-apisix",children:[{value:"Enable google-cloud-logging plugin",id:"enable-google-cloud-logging-plugin",children:[]},{value:"Verify plugin is running normally",id:"verify-plugin-is-running-normally",children:[]},{value:"Disable google-cloud-logging plugin",id:"disable-google-cloud-logging-plugin",children:[]}]},{value:"Summary",id:"summary",children:[]},{value:"Related articles",id:"related-articles",children:[]}],p={toc:s};function u(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This article will explain how to configure and use the Google Cloud Logging service in Apache APISIX.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1640155567091-2611f8b8-8181-42d8-8756-e892b3768a8d.png",alt:"Apache APISIX-Google Cloud Logging cover"})),(0,r.kt)("p",null,"Logging is an important infrastructure for distributed systems. It can help developers observe the status of service operation, improve the efficiency of service troubleshooting and diagnosis, and conduct multi-dimensional analysis to improve the overall stability and operational efficiency of the system."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/logging/"},"Google Cloud Logging")," is a real-time log management service provided by Google Cloud, offering EB-level storage, search, analysis, and alerting services. Google Cloud Logging's log browser allows you to search, sort, and analyze logs easily and efficiently, and Google Cloud Logging also provides saved queries and rich graphical features to make log screening results retrievable and more intuitive."),(0,r.kt)("p",null,"Apache APISIX has previously supported the integration of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/http-logger.md"},"HTTP Logger")," , ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/tcp-logger.md"},"TCP Logger"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/kafka-logger.md"},"Kafka Logger"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/udp-logger.md"},"UDP Logger"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/rocketmq-logger.md"},"RocketMQ Logger"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/skywalking-logger.md"},"SkyWalking Logger"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/sls-logger.md"},"Aliyun Cloud Logging(SLS)")," and many other open source and cloud logging service solutions."),(0,r.kt)("p",null,"Recently, Apache APISIX has also added support for Google Cloud Logging, giving users a new logging solution when using Apache APISIX as a gateway: use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/google-cloud-logging.md"},"google-cloud-logging")," to forward Apache APISIX request logs to the Google Cloud Logging service for analysis and storage."),(0,r.kt)("p",null,"When the plugin is enabled, Apache APISIX will take the request context information in Log Phase and serialize it into Google Cloud Logging's ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry"},"LogEntry"),", then submit the serialized log data to the batch queue, and when the batch queue triggers a user-set time or entry threshold, the log data will be forwarded to Google Cloud Logging service via Google Cloud API to the Google Cloud Logging service."),(0,r.kt)("p",null,"This article will explain how to configure and use the Google Cloud Logging service in Apache APISIX."),(0,r.kt)("h2",{id:"configure-google-cloud"},"Configure Google Cloud"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open your browser and visit Google Cloud Homepage."),(0,r.kt)("li",{parentName:"ol"},"Enter your username and password to log in to the Google Cloud console."),(0,r.kt)("li",{parentName:"ol"},'Click the Google Cloud console left menu and select "IAM & Admin > Create a Project" to start creating a project.\n',(0,r.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1640137078950-3a0b472b-df9f-4f75-9c03-816138860f74.png",alt:"create a project"})),(0,r.kt)("li",{parentName:"ol"},'Enter a project name, select an organization name, and click "CREATE" to create the project.\n',(0,r.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1640137136967-effec599-2263-45e7-874d-53a547b83aae.png",alt:"create a project-2"})),(0,r.kt)("li",{parentName:"ol"},"When the project is created successfully, the top right corner of the console indicates that the creation was successful.\n",(0,r.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1640137177601-6ac703ef-99e4-4ac2-82e3-5b978348f458.png",alt:"project notification"})),(0,r.kt)("li",{parentName:"ol"},"Click in the window to select the project, or select the project operation path in the top navigation bar of the console home page. After selecting the project, you will be redirected to the console home page, where you can already see the data about the current project in the top navigation bar and the project information in the information center.\n",(0,r.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1640137215687-4a2a4789-09d3-4cc0-85fa-be67762cf9b7.png",alt:"view your project"})),(0,r.kt)("li",{parentName:"ol"},'After you finish creating the project, you need to create a service account for the project. Please go back to the Google Cloud console home page and click "IAM & Admin > Service Account" on the left menu to start creating a service account.\n',(0,r.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1640137733012-6c9808c8-9c96-401e-a680-03a276b964c0.png",alt:"start creating a service account"})),(0,r.kt)("li",{parentName:"ol"},'Click "CREATE SERVICE ACCOUNT" to create the service account.\n',(0,r.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1640137784375-e47cbe0e-7735-4e7b-a881-1a9ec1c12ffc.png",alt:"create a service account"})),(0,r.kt)("li",{parentName:"ol"},'Enter the service account name and ID (the ID usually follows the account generation), and then click "CREATE AND CONTINUE".\n',(0,r.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1640137834702-76166e6f-ed98-4a85-a759-2ce78f795794.png",alt:"create a service account-2"})),(0,r.kt)("li",{parentName:"ol"},'Click on "Role" and type "Logging Admin" in the search box to search for this role and select "Logging Admin" as the role.\n',(0,r.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1640137883981-0f780040-8398-4d38-9600-a5e54b29b48e.png",alt:"create a service account-3"})),(0,r.kt)("li",{parentName:"ol"},'Click "DONE" to complete the service account creation and jump to the service account home page. At this point you can see the account you just created and its details in the list.\n',(0,r.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1640137970837-ed1994be-87d0-48b8-bec5-010200fe1f1d.png",alt:"service account information"})),(0,r.kt)("li",{parentName:"ol"},'Click "Manage keys" in the last column of the service account to enter the secret key management interface.\n',(0,r.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1640138660649-cd57da29-5965-4251-9deb-300de830dfd9.png",alt:"enter secret key management interface"})),(0,r.kt)("li",{parentName:"ol"},'Click "ADD KEY > Create new key" to start creating a new secret key.\n',(0,r.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1640138732589-1aea201b-de2d-455a-8c04-c3f5a28dfa91.png",alt:"create a new secret key"})),(0,r.kt)("li",{parentName:"ol"},'Select the secret key type as "JSON" in the pop-up page, and then click "CREATE" to create a new secret key.\n',(0,r.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1640138785425-23ee8efe-bc0d-428a-a627-2f428440da37.png",alt:"create a new secret key-2"})),(0,r.kt)("li",{parentName:"ol"},"The private key information will be automatically downloaded to the system default Downloads directory through your browser . When you enable google-cloud-logging plugin, you need to use the information in this private key, so please save the private key file.\n",(0,r.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1640138820163-aa459874-e78e-4156-ab74-58fc7e2ae13f.png",alt:"Download your key"}))),(0,r.kt)("h2",{id:"configure-apache-apisix"},"Configure Apache APISIX"),(0,r.kt)("h3",{id:"enable-google-cloud-logging-plugin"},"Enable google-cloud-logging plugin"),(0,r.kt)("h4",{id:"option-1-upload-key-file-configuration"},"Option 1: Upload key file configuration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Upload the private key file to the Apache APISIX node server."),(0,r.kt)("li",{parentName:"ol"},"Configure the file path to the ",(0,r.kt)("inlineCode",{parentName:"li"},"google-cloud-logging.auth_file"),", as shown below:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri":"/logging.do",\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    },\n    "plugins":{\n        "google-cloud-logging":{\n            // Google Cloud Logging Private Key File\n            "auth_file":"/path/to/apache-apisix-fcafc68c2f41.json",\n            // Maximum number of entries per batch queue.\n            "batch_max_size": 1,\n            // Maximum time to refresh the buffer in seconds.\n            "inactive_timeout": 10\n        }\n    }\n}\'\n')),(0,r.kt)("h4",{id:"option-2-declare-configurations-in-json"},"Option 2: Declare configurations in JSON"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the private key file."),(0,r.kt)("li",{parentName:"ol"},"Configure the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"project_id")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"google-cloud-logging.auth_config.project_id"),"."),(0,r.kt)("li",{parentName:"ol"},"Configure the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"private_key")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"google-cloud-logging.auth_config.private_key"),".\nAs shown below:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri":"/logging.do",\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    },\n    "plugins":{\n        "google-cloud-logging":{\n            // Google Cloud Logging Private Key File\n            "auth_config":{\n                "project_id":"apache-apisix",\n                "private_key":"-----BEGIN RSA PRIVATE KEY-----your private key-----END RSA PRIVATE KEY-----"\n            },\n            // Maximum number of entries per batch queue.\n            "batch_max_size": 1,\n            // Maximum time to refresh the buffer in seconds.\n            "inactive_timeout": 10\n        }\n    }\n}\'\n')),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Defualt Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"auth_config"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"n/a"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Google Cloud Logging Private Key File. Either auth_config or auth_file must be configured.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"auth_config.private_key"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"n/a"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Google Cloud Logging Private Key.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"auth_config.project_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"n/a"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Project ID of Google Service Account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"auth_config.token_uri"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"oauth2.googleapis.com/token"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The URI of the token requesting the Google Services account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"auth_config.entries_uri"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"logging.googleapis.com/v2/entries:write"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Google Log Service Write Log Entry API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"auth_config.scopes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},'["https://www.googleapis.com/auth/logging.read","https://www.googleapis.com/auth/logging.write","https://www.googleapis.com/auth/logging.admin","https://www.googleapis.com/auth/cloud-platform"]'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Google Services account access scope, refer to: ",(0,r.kt)("a",{parentName:"td",href:"https://developers.google.com/identity/protocols/oauth2/scopes#logging"},"OAuth 2.0 Scopes for Google APIs"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"auth_file"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"n/a"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to the Google Services account JSON file (either auth_config or auth_file must be configured)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ssl_verify"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TRUE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enable SSL authentication, configured according to ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/openresty/lua-nginx-module#tcpsocksslhandshake"},"OpenResty documentation")," options.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"resource"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},'{"type": "global"}'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Google Monitored Resources, please refer to ",(0,r.kt)("a",{parentName:"td",href:"https://cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource"},"MonitoredResource"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"log_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"apisix.apache.org%2Flogs"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Google Log ID, reference: ",(0,r.kt)("a",{parentName:"td",href:"https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry"},"LogEntry"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"max_retry_count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Maximum number of retries before removal from the processing pipeline.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"retry_delay"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of seconds that process execution should be delayed if execution fails.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"buffer_duration"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"60"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The maximum duration (in seconds) of the oldest entry in the batch must be processed first.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"inactive_timeout"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Maximum time to refresh the buffer in seconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"batch_max_size"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"100"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Maximum time to refresh the buffer in seconds.")))),(0,r.kt)("h3",{id:"verify-plugin-is-running-normally"},"Verify plugin is running normally"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command to send a request to Google Cloud Logging."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," curl -i http://127.0.0.1:9080/logging.do\n HTTP/1.1 200 OK\n Content-Type: text/html; charset=utf-8\n Transfer-Encoding: chunked\n Connection: keep-alive\n Date: Fri, 10 Dec 2021 09:57:52 GMT\n Server: APISIX/2.11.0\n\n Hello, Google Cloud Logging\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your browser and visit Google Cloud Homepage.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter your username and password to log in to the Google Cloud console.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"View the log of requests sent through the log browser, and the returned results are shown below.\n",(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1640139014263-fac86f87-d008-475c-aeae-289ab4ba62a8.png",alt:"View the log"})))),(0,r.kt)("h3",{id:"disable-google-cloud-logging-plugin"},"Disable google-cloud-logging plugin"),(0,r.kt)("p",null,"You can remove the google-cloud-logging related configuration block to deactivate the plugin if you are finished using it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri":"/logging.do",\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    },\n    "plugins":{\n    }\n}\'\n')),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"This article describes the detailed steps for interfacing Apache APISIX and Google Cloud Logging. We hope this article will give you a clearer understanding of using Google Cloud Logging in Apache APISIX and facilitate the subsequent hands-on operation."),(0,r.kt)("p",null,"Apache APISIX is not only committed to maintaining its own high performance, but also has always attached great importance to the construction of open source ecology. At present, Apache APISIX has 10+ logging-related plugins and supports interfacing with mainstream open source logging projects in the industry."),(0,r.kt)("p",null,"If you have a need to interface to other logs, visit Apache APISIX's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues"},"GitHub")," and leave your suggestions via issue; or subscribe to the Apache APISIX ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/general/subscribe-guide/"},"mailing list")," and express your thoughts via email."),(0,r.kt)("h2",{id:"related-articles"},"Related articles"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/12/07/apisix-integrate-skywalking-plugin/"},"Apache APISIX Integrates with SkyWalking to Create a Full Range of Log Processing")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/12/08/apisix-integrate-rocketmq-logger-plugin/"},"Apache APISIX & RocketMQ Helps User API Log Monitoring Capabilities")))}u.isMDXComponent=!0}}]);