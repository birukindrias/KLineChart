(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[47,43],{"9kvl":function(e,t,a){"use strict";var r=a("FfOG");a.d(t,"a",(function(){return r["b"]}));a("bCY9")},TFQZ:function(e,t,a){"use strict";a.r(t);var r=a("ODXe"),l=a("q1tI"),i=a.n(l),o=a("dEAq"),n=a("db6P"),c=a("uOZn"),d=a("Ross"),h=a("ZcOA"),s=a("3+4a"),m=(a("jlma"),e=>{var t=Object(l["useState"])(null),a=Object(r["a"])(t,2),o=a[0],n=a[1];return Object(l["useEffect"])((()=>{var t="https://img.shields.io/github/".concat(e.type,"s/").concat(e.ower,"/").concat(e.project,".json");fetch(t).then((e=>e.json())).then((e=>{n(e.value||"")})).catch((e=>{}))}),[]),i.a.createElement("a",{className:"badge",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/".concat(e.ower,"/").concat(e.project)},i.a.createElement("div",{className:"badge-icon"},i.a.createElement("svg",{viewBox:"0 0 1024 1024"},i.a.createElement("path",{d:"M512 85.333333C276.266667 85.333333 85.333333 276.266667 85.333333 512a426.410667 426.410667 0 0 0 291.754667 404.821333c21.333333 3.712 29.312-9.088 29.312-20.309333 0-10.112-0.554667-43.690667-0.554667-79.445333-107.178667 19.754667-134.912-26.112-143.445333-50.133334-4.821333-12.288-25.6-50.133333-43.733333-60.288-14.933333-7.978667-36.266667-27.733333-0.554667-28.245333 33.621333-0.554667 57.6 30.933333 65.621333 43.733333 38.4 64.512 99.754667 46.378667 124.245334 35.2 3.754667-27.733333 14.933333-46.378667 27.221333-57.045333-94.933333-10.666667-194.133333-47.488-194.133333-210.688 0-46.421333 16.512-84.778667 43.733333-114.688-4.266667-10.666667-19.2-54.4 4.266667-113.066667 0 0 35.712-11.178667 117.333333 43.776a395.946667 395.946667 0 0 1 106.666667-14.421333c36.266667 0 72.533333 4.778667 106.666666 14.378667 81.578667-55.466667 117.333333-43.690667 117.333334-43.690667 23.466667 58.666667 8.533333 102.4 4.266666 113.066667 27.178667 29.866667 43.733333 67.712 43.733334 114.645333 0 163.754667-99.712 200.021333-194.645334 210.688 15.445333 13.312 28.8 38.912 28.8 78.933333 0 57.045333-0.554667 102.912-0.554666 117.333334 0 11.178667 8.021333 24.490667 29.354666 20.224A427.349333 427.349333 0 0 0 938.666667 512c0-235.733333-190.933333-426.666667-426.666667-426.666667z"}))),o&&i.a.createElement(l["Fragment"],null,i.a.createElement("i",{className:"badge-arrow"}),i.a.createElement("span",{className:"badge-value"},o)))}),p=e=>i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"__dumi-default-layout-hero"},e.image&&i.a.createElement("img",{src:e.image}),i.a.createElement("h1",null,e.title),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.desc}}),i.a.createElement("div",{className:"__dumi-default-layout-hero-button-wrapper"},e.actions&&e.actions.map((e=>i.a.createElement(o["Link"],{className:"".concat(e.type||""),to:e.link,key:e.text},i.a.createElement("span",null,e.text)))),e.githubs&&e.githubs.map((e=>i.a.createElement(m,{key:e.type,type:e.type,ower:e.ower,project:e.project})))))),u=e=>i.a.createElement("div",{className:"__dumi-default-layout-features"},e.map((e=>i.a.createElement("dl",{key:e.title,style:{backgroundImage:e.icon?"url(".concat(e.icon,")"):void 0}},e.link?i.a.createElement(o["Link"],{to:e.link},i.a.createElement("dt",null,e.title)):i.a.createElement("dt",null,e.title),i.a.createElement("dd",{dangerouslySetInnerHTML:{__html:e.desc}}))))),g=e=>{var t,a,m=e.children,g=e.location,v=Object(l["useContext"])(o["context"]),C=v.config,N=C.mode,f=C.repository,b=(v.nav,v.meta),E=v.locale,z=f.url,y=f.branch,S=f.platform,k=Object(l["useState"])(!0),_=Object(r["a"])(k,2),w=_[0],j=_[1],I=Object(l["useState"])(!1),P=Object(r["a"])(I,2),L=P[0],O=P[1],x="site"===N,A=x&&b.hero,H=x&&b.features,M=!1!==b.sidemenu&&!A&&!H&&!b.gapless,T=!A&&!H&&Boolean(null===(t=b.slugs)||void 0===t?void 0:t.length)&&("content"===b.toc||void 0===b.toc)&&!b.gapless,q=/^zh|cn$/i.test(E),G=new Date(b.updatedTime),K="".concat(G.toLocaleDateString([],{hour12:!1})," ").concat(G.toLocaleTimeString([],{hour12:!1})),F={github:"GitHub",gitlab:"GitLab"}[(null===(a=(z||"").match(/(github|gitlab)/))||void 0===a?void 0:a[1])||"nothing"]||S;return i.a.createElement("div",{className:"__dumi-default-layout","data-route":g.pathname,"data-show-sidemenu":String(M),"data-show-slugs":String(T),"data-site-mode":x,"data-gapless":String(!!b.gapless),onClick:()=>{O(!1),w||j(!0)}},i.a.createElement(n["a"],{location:g,navPrefix:i.a.createElement(h["a"],null),darkPrefix:i.a.createElement(s["a"],{darkSwitch:L,onDarkSwitchClick:e=>{O((e=>!e)),e.stopPropagation()},isSideMenu:!1}),onMobileMenuClick:e=>{j((e=>!e)),e.stopPropagation()}}),i.a.createElement(c["a"],{darkPrefix:i.a.createElement(s["a"],{darkSwitch:L,isSideMenu:!0}),mobileMenuCollapsed:w,location:g}),T&&i.a.createElement(d["a"],{slugs:b.slugs,className:"__dumi-default-layout-toc"}),A&&p(b.hero),H&&u(b.features),i.a.createElement("div",{className:"__dumi-default-layout-content"},m,!A&&!H&&b.filePath&&!b.gapless&&i.a.createElement("div",{className:"__dumi-default-layout-footer-meta"},F&&i.a.createElement(o["Link"],{to:"".concat(z,"/edit/").concat(y,"/").concat(b.filePath)},q?"\u5728 ".concat(F," \u4e0a\u7f16\u8f91\u6b64\u9875"):"Edit this doc on ".concat(F)),(!b.content||!b.content.hideUpdateTime)&&i.a.createElement("span",{"data-updated-text":q?"\u6700\u540e\u66f4\u65b0\u65f6\u95f4\uff1a":"Last update: "},K)),(A||H)&&b.footer&&i.a.createElement("div",{className:"__dumi-default-layout-footer",dangerouslySetInnerHTML:{__html:b.footer}})))};t["default"]=g},afA6:function(e,t,a){"use strict";a.r(t);var r=a("wx14"),l=a("q1tI"),i=a.n(l),o=a("q3YX"),n={},c=a("x2v5"),d=a("KcUY"),h=a.n(d);t["default"]=e=>i.a.createElement(h.a,Object(r["a"])({},e,{config:o,demos:n,apis:c}))},jlma:function(e,t,a){},q3YX:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"*":[{"path":"/","title":"KLineChart - Highly customizable professional lightweight financial charts","meta":{}}],"/advanced":[{"path":"/advanced","title":"Technical Indicator","meta":{"order":1}},{"path":"/advanced/shape","title":"Shape","meta":{"order":2}}],"/api":[{"path":"/api","title":"Chart API","meta":{"order":1}},{"path":"/api/instance","title":"Instance API","meta":{"order":2}},{"path":"/api/shape","title":"Shape Help API","meta":{"order":3}}],"/changelog":[{"path":"/changelog","title":"Changelog","meta":{"order":1}}],"/guide":[{"path":"/guide","title":"Introducation","meta":{"order":1}},{"path":"/guide/get-started","title":"Getting Started","meta":{"order":2}},{"path":"/guide/style","title":"Style","meta":{"order":3}},{"path":"/guide/data","title":"Data","meta":{"order":4}},{"path":"/guide/environment","title":"Environment","meta":{"order":5}},{"path":"/guide/hot-key","title":"Hot Key","meta":{"order":5}},{"path":"/guide/faq","title":"FAQ","meta":{"order":6}},{"path":"/guide/v7-to-v8","title":"From v7 to v8","meta":{"order":7}}],"/sample":[{"path":"/sample","title":"Sample","meta":{}}],"/sponsor":[{"path":"/sponsor","title":"Sponsor","meta":{"order":1}}]},"zh-CN":{"*":[{"path":"/zh-CN","title":"KLineChart - \u53ef\u9ad8\u5ea6\u81ea\u5b9a\u4e49\u7684\u4e13\u4e1a\u7ea7\u8f7b\u91cf\u91d1\u878d\u56fe\u8868","meta":{}}],"/zh-CN/advanced":[{"path":"/zh-CN/advanced","title":"\u6280\u672f\u6307\u6807","meta":{"order":1}},{"path":"/zh-CN/advanced/shape","title":"\u56fe\u5f62","meta":{"order":2}}],"/zh-CN/api":[{"path":"/zh-CN/api","title":"\u56fe\u8868API","meta":{"order":1}},{"path":"/zh-CN/api/instance","title":"\u5b9e\u4f8bAPI","meta":{"order":2}},{"path":"/zh-CN/api/shape","title":"\u56fe\u5f62\u8f85\u52a9API","meta":{"order":3}}],"/zh-CN/changelog":[{"path":"/zh-CN/changelog","title":"\u66f4\u65b0\u65e5\u5fd7","meta":{"order":1}}],"/zh-CN/guide":[{"path":"/zh-CN/guide","title":"\u4ecb\u7ecd","meta":{"order":1}},{"path":"/zh-CN/guide/get-started","title":"\u5feb\u901f\u5f00\u59cb","meta":{"order":2}},{"path":"/zh-CN/guide/style","title":"\u6837\u5f0f\u914d\u7f6e","meta":{"order":3}},{"path":"/zh-CN/guide/data","title":"\u6570\u636e","meta":{"order":4}},{"path":"/zh-CN/guide/environment","title":"\u73af\u5883\u8981\u6c42","meta":{"order":5}},{"path":"/zh-CN/guide/hot-key","title":"\u5feb\u6377\u952e","meta":{"order":5}},{"path":"/zh-CN/guide/faq","title":"\u5e38\u89c1\u95ee\u9898","meta":{"order":6}},{"path":"/zh-CN/guide/v7-to-v8","title":"\u4eceV7\u5230V8","meta":{"order":7}}],"/zh-CN/sample":[{"path":"/zh-CN/sample","title":"\u793a\u4f8b","meta":{}}],"/zh-CN/sponsor":[{"path":"/zh-CN/sponsor","title":"\u8d5e\u52a9","meta":{"order":1}}]}},"locales":[{"name":"en-US","label":"English"},{"name":"zh-CN","label":"\u4e2d\u6587"}],"navs":{"en-US":[{"path":"/guide","title":"Guide","order":1},{"title":"API","order":2,"path":"/api"},{"title":"Advanced","order":3,"path":"/advanced"},{"title":"Sample","order":4,"path":"/sample"},{"title":"Changelog","order":5,"path":"/changelog"},{"title":"Sponsor","order":6,"path":"/sponsor"},{"title":"GitHub","path":"https://github.com/liihuu/KLineChart"}],"zh-CN":[{"path":"/zh-CN/guide","title":"\u6307\u5357","order":1},{"title":"API","order":2,"path":"/zh-CN/api"},{"title":"\u8fdb\u9636","order":3,"path":"/zh-CN/advanced"},{"title":"\u793a\u4f8b","order":4,"path":"/zh-CN/sample"},{"title":"\u66f4\u65b0\u65e5\u5fd7","order":5,"path":"/zh-CN/changelog"},{"title":"\u8d5e\u52a9","order":6,"path":"/zh-CN/sponsor"},{"title":"GitHub","path":"https://github.com/liihuu/KLineChart"}]},"title":"KLineChart","logo":"/images/logo.svg","mode":"site","repository":{"url":"","branch":"master"},"theme":{}}')},x2v5:function(e){e.exports=JSON.parse("{}")}}]);