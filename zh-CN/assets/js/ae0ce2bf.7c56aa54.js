"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[6017],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(n),m=i,y=f["".concat(u,".").concat(m)]||f[m]||s[m]||o;return n?r.createElement(y,a(a({ref:t},l),{},{components:n})):r.createElement(y,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},83653:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={title:"\u5b89\u5168",sidebar_position:5},u="\u5b89\u5168",p={unversionedId:"security",id:"security",title:"\u5b89\u5168",description:"Apache Software Foundation \u5728\u6d88\u9664\u5176\u8f6f\u4ef6\u9879\u76ee\u4e2d\u7684\u5b89\u5168\u95ee\u9898\u65b9\u9762\u91c7\u53d6\u4e86\u4e25\u683c\u7684\u7acb\u573a\u3002Apache Linkis(Incubating) \u4e5f\u5341\u5206\u5173\u6ce8\u4e0e\u5176\u7279\u6027\u548c\u529f\u80fd\u76f8\u5173\u7684\u5b89\u5168\u95ee\u9898\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/security.md",sourceDirName:".",slug:"/security",permalink:"/zh-CN/community/security",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/security.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u5b89\u5168",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u53d1\u5e03\u7248\u672c\u9a8c\u8bc1",permalink:"/zh-CN/community/how-to-verify"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/community/development_specification/overview"}},l=[],s={toc:l};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5b89\u5168"},"\u5b89\u5168"),(0,o.kt)("p",null,"Apache Software Foundation \u5728\u6d88\u9664\u5176\u8f6f\u4ef6\u9879\u76ee\u4e2d\u7684\u5b89\u5168\u95ee\u9898\u65b9\u9762\u91c7\u53d6\u4e86\u4e25\u683c\u7684\u7acb\u573a\u3002Apache Linkis(Incubating) \u4e5f\u5341\u5206\u5173\u6ce8\u4e0e\u5176\u7279\u6027\u548c\u529f\u80fd\u76f8\u5173\u7684\u5b89\u5168\u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u5bf9 Linkis \u7684\u5b89\u5168\u6027\u611f\u5230\u62c5\u5fe7\uff0c\u6216\u8005\u60a8\u53d1\u73b0\u4e86\u6f0f\u6d1e\u6216\u6f5c\u5728\u7684\u5a01\u80c1\uff0c\u8bf7\u4e0d\u8981\u72b9\u8c6b\u4e0e ",(0,o.kt)("a",{parentName:"p",href:"http://www.apache.org/security/"},"Apache \u5b89\u5168\u56e2\u961f")," \u8054\u7cfb\uff0c\u53d1\u9001\u90ae\u4ef6\u81f3 ",(0,o.kt)("a",{parentName:"p",href:"mailto:security@apache.org"},"security@apache.org"),"\u3002 \u5728\u90ae\u4ef6\u4e2d\u8bf7\u6307\u660e\u9879\u76ee\u540d\u79f0\u4e3a Linkis\uff0c\u5e76\u63d0\u4f9b\u76f8\u5173\u95ee\u9898\u6216\u6f5c\u5728\u5a01\u80c1\u7684\u63cf\u8ff0\u3002\u540c\u65f6\u63a8\u8350\u91cd\u73b0\u548c\u590d\u5236\u5b89\u5168\u95ee\u9898\u7684\u65b9\u6cd5\u3002\u5728\u8bc4\u4f30\u548c\u5206\u6790\u8c03\u67e5\u7ed3\u679c\u540e\uff0cApache \u5b89\u5168\u56e2\u961f\u548c Linkis \u793e\u533a\u5c06\u76f4\u63a5\u4e0e\u60a8\u56de\u590d\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8bf7\u6ce8\u610f")," \u5728\u63d0\u4ea4\u5b89\u5168\u90ae\u4ef6\u4e4b\u524d\uff0c\u8bf7\u52ff\u5728\u516c\u5171\u9886\u57df\u62ab\u9732\u5b89\u5168\u7535\u5b50\u90ae\u4ef6\u62a5\u544a\u7684\u5b89\u5168\u95ee\u9898\u3002"))}f.isMDXComponent=!0}}]);