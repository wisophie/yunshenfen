(self.webpackChunkfupan=self.webpackChunkfupan||[]).push([[415],{415:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var o,r=t(168),a=t(152),i=t(791),c=t(31),s=(t(998),t(184));function l(){var e=(0,i.useState)(0),n=(0,a.Z)(e,2),t=n[0],o=n[1],r=(0,i.useState)(0),c=(0,a.Z)(r,2),l=c[0],d=c[1],p=(0,i.useState)(0),m=(0,a.Z)(p,2),f=m[0],h=m[1],g=(0,i.useState)(0),v=(0,a.Z)(g,2),y=v[0],b=v[1],w="\u672c\u9879\u76ee\u603b\u4ef7\uff08\u5927\u5199\uff09\uff1a".concat(t,"\uff08\uffe5").concat(l,"\u5143\uff09\u4eba\u6c11\u5e01\uff08\u542b\u7a0e\u4ef7\uff09\u3002\u53cc\u65b9\u7ea6\u5b9a\u7532\u65b9\u91d1\u989d\u4e3a").concat(f,"\u5143\uff0c\u4e59\u65b9\u5206\u6210\u91d1\u989d\u4e3a").concat(y,"\u5143\uff0c\u7a0e\u73876%\u3002\u672c\u5408\u540c\u91d1\u989d\u5305\u542b\u6240\u6709\u7a0e\u8d39(\u5305\u62ec\u672c\u9879\u76ee\u670d\u52a1\u6240\u9700\u7684\u6240\u6709\u4e00\u5207\u7a0e\u91d1\u548c\u8d39\u7528)\u3002");(0,i.useEffect)((function(){document.getElementById("write").value=w}),[w]);var x=function(){!function(e){var n=document.createElement("input");document.body.appendChild(n),n.setAttribute("value",e),n.select(),document.execCommand("copy")&&console.log(document.execCommand("copy")),document.body.removeChild(n)}(document.getElementById("write").value);var e=window.open("page.html","name=sfsff","height=100, width=400, top=500, left=500, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");e.document.write("<h3>\u590d\u5236\u6210\u529f</h3>"),setTimeout((function(){e.close()}),1e3)},C=function(){var e=document.getElementById("inputnum").value,n=parseFloat(e);d(n.toFixed(2)),h((.06*n).toFixed(2)),b((.94*n).toFixed(2)),o(function(e){var n,t,o,r=["\u96f6","\u58f9","\u8d30","\u53c1","\u8086","\u4f0d","\u9646","\u67d2","\u634c","\u7396"],a=["","\u62fe","\u4f70","\u4edf"],i=["","\u4e07","\u4ebf","\u5146"],c=["\u89d2","\u5206"],s="\u6574",l="\u5143",u=1e16,d="";if(""===e)return"";if((e=parseFloat(e))>=u)return"";if(0===e)return d=r[0]+l+s;-1===(e=e.toString()).indexOf(".")?(n=e,t=""):(n=(o=e.split("."))[0],t=o[1].substr(0,4));if(parseInt(n,10)>0){for(var p=0,m=n.length,f=0;f<m;f++){var h=n.substr(f,1),g=m-f-1,v=g/4,y=g%4;"0"===h?p++:(p>0&&(d+=r[0]),p=0,d+=r[parseInt(h)]+a[y]),0===y&&p<4&&(d+=i[v])}d+=l}if(""!==t)for(var b=t.length,w=0;w<b;w++){var x=t.substr(w,1);"0"!==x&&(d+=r[Number(x)]+c[w])}""===d?d+=r[0]+l+s:""===t&&(d+=s);return d}(Number(n.toFixed(2))))};return(0,s.jsxs)(u,{children:[(0,s.jsxs)("div",{className:"header",children:[(0,s.jsx)("input",{id:"inputnum",autocomplete:"off",type:"number"}),(0,s.jsx)("div",{className:"change",onClick:function(){return C()},children:(0,s.jsx)("h2",{children:"\u786e\u8ba4"})}),(0,s.jsx)("div",{className:"change",onClick:function(){document.getElementById("inputnum").value=""},children:(0,s.jsx)("h2",{children:"\u590d\u4f4d"})})]}),(0,s.jsx)("div",{className:"wrap",children:(0,s.jsx)("textarea",{id:"write",className:"inputs",type:"text",rows:"4",cols:"10"})}),(0,s.jsx)("div",{className:"footer",children:(0,s.jsx)("div",{className:"copy",onClick:function(){return x()},children:(0,s.jsx)("h1",{children:"\u590d\u5236"})})})]})}var u=c.ZP.div(o||(o=(0,r.Z)(["\n position: relative;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 80%;\n    /* background-color:red; */\n    padding-top:12vh;\n    height:100vh;\n    .header{\n      width:88%;\n      display:flex;\n      align-items:center;\n      justify-content: space-start;\n      margin-bottom:1.5rem;\n    }\n    #inputnum{\n      height:1.5rem;\n      font-size:1rem;\n    }\n    .wrap{\n      display:flex;\n      align-items:center;\n      justify-content: space-start;\n      margin:1vh 0 1vh;\n      .inputs{\n        font-size:1.2rem;\n          width:100%;\n          height:50vh;\n      }\n    }\n    .wrap2{\n      display:flex;\n      align-items:center;\n      justify-content: space-start;\n      margin:3vh 0 1vh;\n      .inputs{\n        font-size:1rem;\n          width:100%;\n          height:50vh;\n      }\n    }\n    .footer{\n      display:flex;\n      align-items:center;\n      justify-content: space-start;\n      .copy{\n      width:20%;\n      line-height:2rem;\n      font-size:1.3rem;\n      border:1px solid red;\n      &:hover{\n        cursor:pointer;\n        background-color:#ccc;\n      }\n    }\n    }\n    .change{\n        color:blue;\n        height:1.2rem;\n        line-height:1.2rem;\n      font-size:1.2rem; \n      padding:0.1rem;\n      margin-left:0.5rem;\n      border:1px solid #333;\n      &:hover{\n        cursor:pointer;\n        background-color:#ccc;\n      }\n      }\n      #write{\n        height:10rem;\n        width:50%;\n      }\n      #write2{\n        height:20rem;\n        width:50%;\n      }\n      input::-webkit-outer-spin-button,\n    input::-webkit-inner-spin-button {\n        -webkit-appearance: none !important;\n        margin: 0;\n    }\n"])))},998:function(e,n,t){"use strict";var o=t(458),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,n){var t,a,i,c,s,l,u=!1;n||(n={}),t=n.debug||!1;try{if(i=o(),c=document.createRange(),s=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(o){if(o.stopPropagation(),n.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){t&&console.warn("unable to use e.clipboardData"),t&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[n.format]||r.default;window.clipboardData.setData(a,e)}else o.clipboardData.clearData(),o.clipboardData.setData(n.format,e);n.onCopy&&(o.preventDefault(),n.onCopy(o.clipboardData))})),document.body.appendChild(l),c.selectNodeContents(l),s.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(d){t&&console.error("unable to copy using execCommand: ",d),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(n.format||"text",e),n.onCopy&&n.onCopy(window.clipboardData),u=!0}catch(d){t&&console.error("unable to copy using clipboardData: ",d),t&&console.error("falling back to prompt"),a=function(e){var n=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,n)}("message"in n?n.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(c):s.removeAllRanges()),l&&document.body.removeChild(l),i()}return u}},458:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var n=document.activeElement,t=[],o=0;o<e.rangeCount;o++)t.push(e.getRangeAt(o));switch(n.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":n.blur();break;default:n=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||t.forEach((function(n){e.addRange(n)})),n&&n.focus()}}}}]);
//# sourceMappingURL=415.4ba3f4dd.chunk.js.map