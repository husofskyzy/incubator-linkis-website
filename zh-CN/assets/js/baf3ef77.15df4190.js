"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[9931],{3905:function(e,t,i){i.d(t,{Zo:function(){return o},kt:function(){return h}});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},o=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),k=c(i),h=a,m=k["".concat(u,".").concat(h)]||k[h]||s[h]||r;return i?n.createElement(m,l(l({ref:t},o),{},{components:i})):n.createElement(m,l({ref:t},o))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=k;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<r;c++)l[c]=i[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}k.displayName="MDXCreateElement"},968:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return o},default:function(){return k}});var n=i(7462),a=i(3366),r=(i(7294),i(3905)),l=["components"],p={title:"\u7248\u672c\u8bf4\u660e RC1",sidebar_position:.1},u=void 0,c={unversionedId:"release-notes-rc1",id:"release-notes-rc1",title:"\u7248\u672c\u8bf4\u660e RC1",description:"Apache Linkis(incubating) 1.0.3 \u5305\u542b\u6240\u6709 Project Linkis-1.0.3\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/release-notes-rc1.md",sourceDirName:".",slug:"/release-notes-rc1",permalink:"/zh-CN/docs/1.0.3/release-notes-rc1",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/release-notes-rc1.md",tags:[],version:"current",sidebarPosition:.1,frontMatter:{title:"\u7248\u672c\u8bf4\u660e RC1",sidebar_position:.1},sidebar:"tutorialSidebar",previous:{title:"Linkis \u7b80\u8ff0",permalink:"/zh-CN/docs/1.0.3/introduction"},next:{title:"\u7248\u672c\u8bf4\u660e RC2",permalink:"/zh-CN/docs/1.0.3/release-notes-rc2"}},o=[{value:"\u65b0\u7279\u6027",id:"\u65b0\u7279\u6027",children:[],level:2},{value:"\u589e\u5f3a\u70b9",id:"\u589e\u5f3a\u70b9",children:[],level:2},{value:"\u4fee\u590d\u529f\u80fd",id:"\u4fee\u590d\u529f\u80fd",children:[],level:2},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",children:[],level:2},{value:"\u81f4\u8c22",id:"\u81f4\u8c22",children:[],level:2}],s={toc:o};function k(e){var t=e.components,i=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Apache Linkis(incubating) 1.0.3 \u5305\u542b\u6240\u6709 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis/projects/13"},"Project Linkis-1.0.3"),"\u3002"),(0,r.kt)("p",null,"\u8be5\u7248\u672c\u662fLinkis\u8fdb\u5165Apache\u5b75\u5316\u7684\u7b2c\u4e00\u4e2a\u7248\u672c\u3002\u4e3b\u8981\u5b8c\u6210ASF\u57fa\u7840\u8bbe\u65bd\u5efa\u8bbe\uff0c\u5305\u62ecLicense\u5b8c\u5584/\u5305\u540d\u4fee\u6539\u7b49\uff0c\u589e\u52a0EngineConn\u5bf9Operator\u7684\u652f\u6301\u7b49\u529f\u80fd\uff0c\u4fee\u590d\u793e\u533a\u53cd\u9988\u76841.0.2\u7248\u672c\u4e2d\u7684bug\u3002"),(0,r.kt)("p",null,"\u6dfb\u52a0\u4e86\u4ee5\u4e0b\u4e3b\u8981\u529f\u80fd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"http restful api\u98ce\u683c\u4f7f\u7528springmvc\u66ff\u6362jersey"),(0,r.kt)("li",{parentName:"ul"},"\u7528 fastxml json \u66ff\u6362 codehaus json"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 EngineConn/OnceEngineConn \u901a\u7528operator"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u4f7f\u7528kerberos\u4ee3\u7406\u7528\u6237")),(0,r.kt)("p",null,"\u7f29\u5199\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CGS: Computation Governance Services"),(0,r.kt)("li",{parentName:"ul"},"PES: Public Enhancement Services"),(0,r.kt)("li",{parentName:"ul"},"MGS: Microservice Governance Services")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u65b0\u7279\u6027"},"\u65b0\u7279\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","CGS&PES&MGS]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1002"},"[Linkis-1002]")," http restful api\u98ce\u683c\u4f7f\u7528springmvc\u66ff\u6362jersey"),(0,r.kt)("li",{parentName:"ul"},"[","CGS&PES&MGS]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1038"},"[Linkis-1038]")," \u7528 fastxml json \u66ff\u6362 codehaus json"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-Engineconn]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1027"},"[Linkis-1027]")," \u652f\u6301\u4f7f\u7528 kerberos \u4ee3\u7406\u7528\u6237"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1043"},"[Linkis-1043]")," \u652f\u6301\u5f15\u64ceoperator"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisOnceEngineconn]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/946"},"[Linkis-946]")," \u652f\u6301\u670d\u52a1\u53d1\u73b0\u8fdb\u884c\u670d\u52a1\u8c03\u7528\u65f6\u4f7f\u7528IP\u5730\u5740"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisOnceEngineconn]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1078"},"[Linkis-1078]")," \u652f\u6301EngineConn/OnceEngineConn \u901a\u7528operator")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u589e\u5f3a\u70b9"},"\u589e\u5f3a\u70b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","Commons]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1026"},"[Linkis-1026]")," \u6570\u636e\u5bfc\u51fa\u5230excel\u7684\u4f18\u5316"),(0,r.kt)("li",{parentName:"ul"},"[","Commons]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1036"},"[Linkis-1036]")," \u672c\u5730\u6587\u4ef6/IO\u4ee3\u7406\u6a21\u5f0f\u7684\u6587\u4ef6\u6743\u9650\u4f18\u5316"),(0,r.kt)("li",{parentName:"ul"},"[","Commons]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1185"},"[Linkis-1185]")," \u6dfb\u52a0\u4e00\u4e9bscala\u4ee3\u7801\u89c4\u8303\u68c0\u67e5\u89c4\u5219"),(0,r.kt)("li",{parentName:"ul"},"[","Orchestrator]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1183"},"[Linkis-1183]")," \u4f18\u5316\u8ba1\u7b97\u7f16\u6392\u5668\u4ee3\u7801"),(0,r.kt)("li",{parentName:"ul"},"[","MGS-LinkisServiceGateway]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1064"},"[Linkis-1064]")," \u652f\u6301\u767d\u540d\u5355api\u914d\u7f6e\uff0c\u65e0\u9700\u7528\u6237\u767b\u5f55\u9a8c\u8bc1\u5373\u53ef\u8c03\u7528"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1030"},"[Linkis-1030]")," \u5c06\u81ea\u5b9a\u4e49\u73af\u5883\u4eceecm\u4f20\u8f93\u5230\u5f15\u64ce"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin] ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1083"},"[Linkis-1083]")," \u5c06engineConnPlugin\u5f02\u5e38\u7c7b\u7edf\u4e00\u5728\u4e00\u4e2a\u5305\u4e2d\u4f18\u5316"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1203"},"[Linkis-1203]")," \u4f18\u5316\u6807\u7b7e\u66f4\u65b0/\u5220\u9664\u903b\u8f91"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin-Flink]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1069"},"[Linkis-1069]")," \u5728flink\u4e2d\u6dfb\u52a0kafka\u3001json\u548chadoop-mapreduce-client-core jar\u5f15\u64ce"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin-JDBC] ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1117"},"[Linkis-1117]"),"\u652f\u6301linkis jdbc\u7684kerberos\u8ba4\u8bc1\u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1167"},"[Linkis-1167]")," processEngineConnLaunch \u6dfb\u52a0\u5bf9 JAVA_HOME \u73af\u5883\u53d8\u91cf\u7684\u652f\u6301"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-ComputationClient]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1126"},"[Linkis-1126]"),"\u652f\u6301python matplotlib\u663e\u793a\u56fe\u7247"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1206"},"[Linkis-1206]")," \u4f18\u5316entrance\u903b\u8f91\uff0c\u589e\u52a0taskID\u533a\u5206\u4efb\u52a1"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1209"},"[Linkis-1209]")," \u4f18\u5316manager\u5e38\u7528\u7684\u591a\u9879\u529f\u80fd"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1213"},"[Linkis-1213]")," \u4f18\u5316\u652f\u6301long-lived\u6807\u7b7e\u4e0e\u4e0d\u53ef\u5220\u9664\u8282\u70b9\u7684\u5173\u7cfb"),(0,r.kt)("li",{parentName:"ul"},"[","PES-PublicService]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1211"},"[Linkis-1211]")," \u4f18\u5316jobhistory\u66f4\u65b0\u903b\u8f91"),(0,r.kt)("li",{parentName:"ul"},"[","PES-Metadata]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1224"},"[Linkis-1224]"),"\u4f18\u5316datasource/dbs http\u63a5\u53e3\u67e5\u8be2\u7ed3\u679c\u4e0e\u767b\u5f55\u7528\u6237\u5173\u8054\u9650\u5236")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u4fee\u590d\u529f\u80fd"},"\u4fee\u590d\u529f\u80fd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","DB]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1053"},"[Linkis-1053]")," \u4fee\u590d\u7531\u4e8e\u6570\u636e\u5e93\u8868\u5b57\u6bb5\u957f\u5ea6\u8fc7\u957f\u5bfc\u81f4\u6570\u636e\u63d2\u5165\u53ef\u80fd\u5931\u8d25\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","DB]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1087"},"[Linkis-1087]")," \u5220\u9664\u91cd\u590d\u7684DDL"),(0,r.kt)("li",{parentName:"ul"},"[","Commons]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1058"},"[Linkis-1058]")," \u4fee\u590d\u4e0a\u4f20\u5b58\u5728\u5b50\u76ee\u5f55\u65f6\u65e0\u6cd5\u538b\u7f29\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","Commons]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1223"},"[Linkis-1223]")," \u5347\u7ea7 log4j \u7248\u672c\u5230 2.17.0"),(0,r.kt)("li",{parentName:"ul"},"[","Commons]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1052"},"[Linkis-1052]")," \u4fee\u590d\u4e86\u5f53\u4e3b\u673a\u540d\u4ee5\u5e94\u7528\u7a0b\u5e8f\u540d\u79f0\u5f00\u5934\u65f6\u65e0\u6cd5\u83b7\u53d6\u8def\u7531\u5b9e\u4f8b\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1014"},"[Linkis-1014]")," \u4fee\u590dobject\u76f8\u7b49\u5224\u65ad\u7684\u9519\u8bef\u7528\u6cd5"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1054"},"[Linkis-1054]")," \u4fee\u590d\u4e86\u5f53\u4e3b\u673a\u540d\u5305\u542b\u670d\u52a1\u540d\u65f6\u5b9e\u4f8b\u6807\u7b7e\u89e3\u6790\u5931\u8d25\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1074"},"[Linkis-1074]")," \u4fee\u590d\u4e86 http api 'rm/userresources' \u7684 NPE\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1101"},"[Linkis-1101]")," \u4fee\u590d\u5f15\u64ce\u4e0d\u5b58\u5728\u65f6\u76d1\u89c6\u5668\u505c\u6b62\u5f15\u64ce\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1210"},"[Linkis-1210]")," \u4fee\u590d\u5b9e\u4f8b\u68c0\u67e5\u548c\u5f15\u64ce\u6807\u7b7e\u6392\u9664\u7684bug"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1214"},"[Linkis-1214]")," \u4fee\u590d\u591a\u4e2aRM\u6a21\u5757\u9ad8\u5e76\u53d1Bug"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1216"},"[Linkis-1216]")," \u4eceAM\u4e2d\u5220\u9664\u8282\u70b9\u76d1\u63a7\u6a21\u5757"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1222"},"[Linkis-1222]")," \u6dfb\u52a0\u6210\u529f\u548c\u5931\u8d25\u7684ECM\u6ce8\u518c\u54cd\u5e94"),(0,r.kt)("li",{parentName:"ul"},"[","MGS-LinkisServiceGateway]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1093"},"[Linkis-1093]")," \u4fee\u590dpass auth uri\u4e3a\u7a7a\u5b57\u7b26\u53ef\u80fd\u5bfc\u81f4\u7684\u6743\u9650\u7ed5\u8fc7bug"),(0,r.kt)("li",{parentName:"ul"},"[","MGS-LinkisServiceGateway]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1105"},"[Linkis-1105]")," \u4fee\u6539linkis\u9ed8\u8ba4\u6d4b\u8bd5\u8d26\u53f7\u5f31\u5bc6\u7801\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","MGS-LinkisServiceGateway]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1234"},"[Linkis-1234]")," \u4fee\u590dSSO\u767b\u5f55\u5185\u5b58\u6cc4\u9732\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-Common]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1199"},"[Linkis-1199]")," \u4fee\u590dSqlCodeParser\u5bf9\u5206\u5272\u7b26\u201c;\u201d\u8f6c\u4e49\u6210\u591a\u4e2aSQL"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1073"},"[Linkis-1073]")," \u4fee\u590dhttp api 'entrance/{id}/killJobs' \u672a\u4f7f\u7528\u53c2\u6570\u5bfc\u81f4\u7684\u5f02\u5e38{ID}"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1106"},"[Linkis-1106]")," VarSubstitutionInterceptor \u83b7\u53d6\u4ee3\u7801\u7c7b\u578b\u9519\u8bef\u4fee\u590d"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1149"},"[Linkis-1149]")," \u4fee\u590djob\u4efb\u52a1\u5b8c\u6210\u540e\u524d\u53f0\u65e0\u6cd5\u83b7\u53d6\u8fdb\u5ea6\u4fe1\u606f\u7684\u95ee\u9898\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1205"},"[Linkis-1205]")," \u4fee\u590d\u4e86 LogWirter \u7684 oom \u9519\u8bef"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1113"},"[Linkis-1113]")," \u4fee\u590dbml\u8d44\u6e90\u6570\u636e\u8bb0\u5f55\u66f4\u65b0\u65f6sql\u8bed\u53e5\u9519\u8bef"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin-JDBC] ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/923"},"[Linkis-923]")," \u4fee\u590d\u672a\u914d\u7f6eJDBC\u5f15\u64ce\u8fde\u63a5url\u7684bug"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin-Spark]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1017"},"[Linkis-1017]")," \u4fee\u590d\u4e86 spark3 \u5f15\u64ce\u7f16\u8bd1\u9519\u8bef"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin-Flink]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1129"},"[Linkis-1128]")," \u4fee\u590dflink\u5f15\u64ce\u63d2\u5165\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugins-Hive]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1231"},"[Linkis-1231]")," \u4fee\u590d\u5f15\u64ce\u63a8\u9001\u591a\u4e2a\u5b50\u4efb\u52a1\u7684\u8fdb\u5ea6bug"),(0,r.kt)("li",{parentName:"ul"},"[","PEC-BmlServer]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1155"},"[Linkis-1155]")," \u4fee\u590dsql\u8bed\u53e5\u4e2d\u4f7f\u7528mysql\u4fdd\u7559\u5b57\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","PEC-CSServer]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1160"},"[Linkis-1160]")," \u4fee\u590d CsJobListener \u4e2d\u7684 NPE"),(0,r.kt)("li",{parentName:"ul"},"[","Orchestrator]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1179"},"[Linkis-1179]")," \u4fee\u590d\u4e86orchestrator\u5e76\u53d1\u5bfc\u81f4\u7684bug"),(0,r.kt)("li",{parentName:"ul"},"[","Orchestrator]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1186"},"[Linkis-1186]")," \u4fee\u590dOrchestrator\u6392\u961f\u7684\u4efb\u52a1\u65e0\u6cd5\u88abkill\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","Console]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1121"},"[Linkis-1121]")," \u4ece\u5f53\u524d\u8bf7\u6c42\u4e2d\u83b7\u53d6\u534f\u8bae\uff0c\u5220\u9664'http'\u7684\u786c\u4ee3\u7801")),(0,r.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","Commons&MGS-LinkisServiceGateway]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1092"},"[Linkis-1192]")," \u7b2c\u4e09\u65b9\u4f9d\u8d56mysql-connector-java\u8fdd\u53cd\u4e86Apache \u8bb8\u53ef\u653f\u7b56\u3002\u6240\u4ee5\u4ece1.0.3\u5f00\u59cb\u79fb\u9664\u4e86\u5bf9 mysql-connector-java \u7684\u4f9d\u8d56\uff0c\u5982\u679c\u53ea\u4e3a\u81ea\u5df1\u7684\u9879\u76ee\u4f7f\u7528\uff0c\u53ef\u4ee5\u81ea\u884c\u5728\u9879\u76ee\u4e2d\u589e\u52a0 mysql-connector-java \u4f9d\u8d56\u3002")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u81f4\u8c22"},"\u81f4\u8c22"),(0,r.kt)("p",null,"Apache Linkis(incubating) 1.0.3\u7684\u53d1\u5e03\u79bb\u4e0d\u5f00Linkis\u793e\u533a\u7684\u8d21\u732e\u8005\u3002\u611f\u8c22\u6240\u6709\u7684\u793e\u533a\u8d21\u732e\u8005\uff01"))}k.isMDXComponent=!0}}]);