(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[65],{"6T1g":function(n,e,t){"use strict";var a=t("kM82"),r=t.n(a),o=t("3Mpw"),i=t("dEAq");t("qHiR"),t("rVZW");function l(){return l=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},l.apply(this,arguments)}function c(n,e){return p(n)||d(n,e)||s(n,e)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(n,e){if(n){if("string"===typeof n)return u(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(n,e):void 0}}function u(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=n[t];return a}function d(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var a,r,o=[],i=!0,l=!1;try{for(t=t.call(n);!(i=(a=t.next()).done);i=!0)if(o.push(a.value),e&&o.length===e)break}catch(c){l=!0,r=c}finally{try{i||null==t["return"]||t["return"]()}finally{if(l)throw r}}return o}}function p(n){if(Array.isArray(n))return n}var h={acss:"css",axml:"xml"};e["a"]=function(n){var e=n.code,t=n.lang,a=n.showCopy,m=void 0===a||a,s=Object(i["useCopy"])(),u=c(s,2),d=u[0],p=u[1];return r.a.createElement("div",{className:"__dumi-default-code-block"},r.a.createElement(o["a"],l({},o["b"],{code:e,language:h[t]||t,theme:void 0}),(function(n){var t=n.className,a=n.style,o=n.tokens,i=n.getLineProps,l=n.getTokenProps;return r.a.createElement("pre",{className:t,style:a},m&&r.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":p,onClick:function(){return d(e)}}),o.map((function(n,e){return r.a.createElement("div",i({line:n,key:e}),n.map((function(n,e){return r.a.createElement("span",l({token:n,key:e}))})))})))})))}},rVZW:function(n,e,t){},vpON:function(n,e,t){"use strict";t.r(e);var a=t("kM82"),r=t.n(a),o=t("dEAq"),i=t("6T1g"),l=r.a.memo((n=>{n.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u5feb\u901f\u5f00\u59cb"},r.a.createElement(o["AnchorLink"],{to:"#\u5feb\u901f\u5f00\u59cb","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5feb\u901f\u5f00\u59cb"),r.a.createElement("h2",{id:"\u5b89\u88c5"},r.a.createElement(o["AnchorLink"],{to:"#\u5b89\u88c5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5b89\u88c5"),r.a.createElement("h3",{id:"\u4f7f\u7528-npm"},r.a.createElement(o["AnchorLink"],{to:"#\u4f7f\u7528-npm","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528 npm"),r.a.createElement(i["a"],{code:"npm install klinecharts --save",lang:"bash"}),r.a.createElement("h3",{id:"\u4f7f\u7528-yarn"},r.a.createElement(o["AnchorLink"],{to:"#\u4f7f\u7528-yarn","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528 yarn"),r.a.createElement(i["a"],{code:"yarn add klinecharts",lang:"bash"}),r.a.createElement("h2",{id:"\u5f15\u5165"},r.a.createElement(o["AnchorLink"],{to:"#\u5f15\u5165","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5f15\u5165"),r.a.createElement(i["a"],{code:"// \u5168\u91cf\u5f15\u5165\uff0c\u5305\u542b\u6240\u6709\u5185\u7f6e\u7684\u6280\u672f\u6307\u6807\u548c\u7ed8\u56fe\u6807\u8bb0\nimport { init } from 'klinecharts';\n\n// \u5f15\u5165\u90e8\u5206\u529f\u80fd\uff0c\u4e0d\u5305\u542b\u5185\u7f6e\u7684\u7ed8\u56fe\u6807\u8bb0\nimport { init } from 'klinecharts/index.blank';\n\n// \u5f15\u5165\u57fa\u7840\u529f\u80fd\uff0c\u4e0d\u5305\u542b\u5185\u7f6e\u7684\u6280\u672f\u6307\u6807\u548c\u7ed8\u56fe\u6807\u8bb0\nimport { init } from 'klinecharts/index.simple';\n\n// \u4ee5\u4e0a\u4e09\u79cd\u65b9\u5f0f\u6839\u636e\u9700\u8981\uff0c\u4f7f\u7528\u4e00\u79cd\u5373\u53ef",lang:"javascript"}),r.a.createElement("h2",{id:"\u521b\u5efa\u7b2c\u4e00\u4e2a\u56fe\u8868"},r.a.createElement(o["AnchorLink"],{to:"#\u521b\u5efa\u7b2c\u4e00\u4e2a\u56fe\u8868","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u521b\u5efa\u7b2c\u4e00\u4e2a\u56fe\u8868"),r.a.createElement(i["a"],{code:"import { init } from 'klinecharts';\n\n// \u521d\u59cb\u5316\u56fe\u8868\nconst chart = init(`${domId}`);\n\n// \u4e3a\u56fe\u8868\u6dfb\u52a0\u6570\u636e\nchart.applyNewData([\n  {\n    close: 4976.16,\n    high: 4977.99,\n    low: 4970.12,\n    open: 4972.89,\n    timestamp: 1587660000000,\n    volume: 204,\n  },\n  {\n    close: 4977.33,\n    high: 4979.94,\n    low: 4971.34,\n    open: 4973.2,\n    timestamp: 1587660060000,\n    volume: 194,\n  },\n  {\n    close: 4977.93,\n    high: 4977.93,\n    low: 4974.2,\n    open: 4976.53,\n    timestamp: 1587660120000,\n    volume: 197,\n  },\n  {\n    close: 4966.77,\n    high: 4968.53,\n    low: 4962.2,\n    open: 4963.88,\n    timestamp: 1587660180000,\n    volume: 28,\n  },\n  {\n    close: 4961.56,\n    high: 4972.61,\n    low: 4961.28,\n    open: 4961.28,\n    timestamp: 1587660240000,\n    volume: 184,\n  },\n  {\n    close: 4964.19,\n    high: 4964.74,\n    low: 4961.42,\n    open: 4961.64,\n    timestamp: 1587660300000,\n    volume: 191,\n  },\n  {\n    close: 4968.93,\n    high: 4972.7,\n    low: 4964.55,\n    open: 4966.96,\n    timestamp: 1587660360000,\n    volume: 105,\n  },\n  {\n    close: 4979.31,\n    high: 4979.61,\n    low: 4973.99,\n    open: 4977.06,\n    timestamp: 1587660420000,\n    volume: 35,\n  },\n  {\n    close: 4977.02,\n    high: 4981.66,\n    low: 4975.14,\n    open: 4981.66,\n    timestamp: 1587660480000,\n    volume: 135,\n  },\n  {\n    close: 4985.09,\n    high: 4988.62,\n    low: 4980.3,\n    open: 4986.72,\n    timestamp: 1587660540000,\n    volume: 76,\n  },\n]);",lang:"javascript"})))}));e["default"]=n=>{var e=r.a.useContext(o["context"]),t=e.demos;return r.a.useEffect((()=>{var e;null!==n&&void 0!==n&&null!==(e=n.location)&&void 0!==e&&e.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))}),[]),r.a.createElement(l,{demos:t})}}}]);