!function(){"use strict";function e(e,t){return t={exports:{}},e(t,t.exports),t.exports}function t(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(c.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}function n(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=(function(){function e(e){this.value=e}function t(t){function n(i,r){try{var a=t[i](r),l=a.value;l instanceof e?Promise.resolve(l.value).then(function(e){n("next",e)},function(e){n("throw",e)}):o(a.done?"return":"normal",a.value)}catch(e){o("throw",e)}}function o(e,t){switch(e){case"return":i.resolve({value:t,done:!0});break;case"throw":i.reject(t);break;default:i.resolve({value:t,done:!1})}(i=i.next)?n(i.key,i.arg):r=null}var i,r;this._invoke=function(e,t){return new Promise(function(o,a){var l={key:e,arg:t,resolve:o,reject:a,next:null};r?r=r.next=l:(i=r=l,n(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},s=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},f=e(function(e){!function(){function t(){for(var e=[],i=0;i<arguments.length;i++){var r=arguments[i];if(r){var a=void 0===r?"undefined":o(r);if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r))e.push(t.apply(null,r));else if("object"===a)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}var n={}.hasOwnProperty;e.exports?e.exports=t:window.classNames=t}()}),c=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;Object.setPrototypeOf(n.prototype,HTMLElement.prototype),Object.setPrototypeOf(n,HTMLElement);var p={},u=function(e){function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];i(this,o);var n=l(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return n._initialise(e,t),n}return a(o,n),r(o,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var o=document.createDocumentFragment();this.firstChild;)o.appendChild(this.firstChild);var i=n(function(e){if(!e.hasAttributes)return null;for(var n={},o=e.attributes,i=o.length,r=0;r<i;++r){var a=o[r];n[a.name]=t(a)}return n}(this),o);if(Array.isArray(i))i.forEach(function(t){e.appendChild(t)});else if(i){if("string"==typeof i){var r=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),r}this.appendChild(i)}this._hasRendered=!0}catch(r){"throwed"!==r.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+r+"\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),o}(),h=(function(e){function t(){return i(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}a(t,u),r(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return i(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,u),r(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.uuidv4();if(e&&!p[e]){var n=document.createElement("style"),o=document.createTextNode(e);n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),p[e]=!0}}}]),t}()),m='.m-footer-social {\n  padding-right: 15px;\n  padding-left: 15px;\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  max-width: 33.33333%;\n  flex: 0 0 33.33333%;\n  display: block; }\n  @media (max-width: 991px) {\n    .m-footer-social {\n      position: static;\n      width: auto;\n      max-width: none;\n      flex: auto; } }\n\n.m-footer-social__title {\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  color: #fff;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-footer-social__title {\n      font-size: 16px;\n      font-weight: 700;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .m-footer-social__title {\n      font-size: 16px;\n      font-weight: 700;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .m-footer-social__title {\n      font-size: 16px;\n      font-weight: 700;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (max-width: 991px) {\n    .m-footer-social__title {\n      display: none !important; } }\n\n.m-footer-social__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  *zoom: 1;\n  margin-top: 15px; }\n  .m-footer-social__list::before, .m-footer-social__list::after {\n    display: table;\n    content: " "; }\n  .m-footer-social__list::after {\n    clear: both; }\n  .m-footer-social__list:first-child {\n    margin-top: 0; }\n\n.m-footer-social__list-item {\n  display: block;\n  float: left;\n  margin-left: 10px; }\n  .m-footer-social__list-item:first-child {\n    margin-left: -10px; }\n\n.m-footer-social__link {\n  display: block;\n  padding: 10px; }\n\n.m-footer-social__icon {\n  display: block;\n  width: 25px;\n  height: 25px;\n  color: #fff; }\n\n.m-footer-social--inline .m-footer-social__box {\n  display: flex;\n  align-items: center; }\n\n.m-footer-social--inline .m-footer-social__title {\n  display: block;\n  margin-right: 20px; }\n\n.m-footer-social--inline .m-footer-social__list {\n  margin-top: 0; }\n\n.m-footer-social--light {\n  position: static;\n  width: auto;\n  max-width: none;\n  flex: auto; }\n  .m-footer-social--light .m-footer-social__title {\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 1.5;\n    letter-spacing: 0.02em; }\n    @media (min-width: 576px) {\n      .m-footer-social--light .m-footer-social__title {\n        font-size: 14px;\n        font-weight: 700;\n        line-height: 1.21;\n        letter-spacing: 0.02em; } }\n    @media (min-width: 768px) {\n      .m-footer-social--light .m-footer-social__title {\n        font-size: 14px;\n        font-weight: 700;\n        line-height: 1.21;\n        letter-spacing: 0.02em; } }\n    @media (min-width: 992px) {\n      .m-footer-social--light .m-footer-social__title {\n        font-size: 14px;\n        font-weight: 700;\n        line-height: 1.21;\n        letter-spacing: 0.02em; } }\n  .m-footer-social--light .m-footer-social__icon {\n    width: 20px;\n    height: 20px; }\n',d=function(e){return function(t,n,o){for(var i in n)i in g&&(n[g[i]]=n[i],delete n[i]);return e(t,n,o)}},g={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},y=1,x=2,v=3,_=4,b=5,w=6,k=7,O=8,C=9,S=10,A=11,j=12,P=13,E=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"),F=/\n[\s]+$/,N=/^\n[\s]+/,T=/[\s]+$/,z=/^[\s]+/,L=/[\n\s]+/g,M=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],G=["code","pre"],D=function e(t,n){if(Array.isArray(n))for(var o,i,r=t.nodeName.toLowerCase(),a=!1,l=0,s=n.length;l<s;l++){var f=n[l];if(Array.isArray(f))e(t,f);else{("number"==typeof f||"boolean"==typeof f||"function"==typeof f||f instanceof Date||f instanceof RegExp)&&(f=f.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof f)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=f:(f=document.createTextNode(f),t.appendChild(f),c=f),l===s-1&&(a=!1,-1===M.indexOf(r)&&-1===G.indexOf(r)?""===(o=c.nodeValue.replace(N,"").replace(T,"").replace(F,"").replace(L," "))?t.removeChild(c):c.nodeValue=o:-1===G.indexOf(r)&&(i=0===l?"":" ",o=c.nodeValue.replace(N,i).replace(z," ").replace(T,"").replace(F,"").replace(L," "),c.nodeValue=o));else if(f&&f.nodeType){a&&(a=!1,-1===M.indexOf(r)&&-1===G.indexOf(r)?""===(o=c.nodeValue.replace(N,"").replace(F,"").replace(L," "))?t.removeChild(c):c.nodeValue=o:-1===G.indexOf(r)&&(o=c.nodeValue.replace(z," ").replace(N,"").replace(F,"").replace(L," "),c.nodeValue=o));var p=f.nodeName;p&&(r=p.toLowerCase()),t.appendChild(f)}}}},R=e(function(e){function t(e,t,o){var s;-1!==l.indexOf(e)&&(t.namespace=n);var f=!1;if(t.namespace&&(f=t.namespace,delete t.namespace),f)s=document.createElementNS(f,e);else{if(e===a)return document.createComment(t.comment);s=document.createElement(e)}for(var c in t)if(t.hasOwnProperty(c)){var p=c.toLowerCase(),u=t[c];if("classname"===p&&(p="class",c="class"),"htmlFor"===c&&(c="for"),-1!==r.indexOf(p))if("true"===u)u=p;else if("false"===u)continue;"on"===p.slice(0,2)?s[c]=u:f?"xlink:href"===c?s.setAttributeNS(i,c,u):/^xmlns($|:)/i.test(c)||s.setAttributeNS(null,c,u):s.setAttribute(c,u)}return D(s,o),s}var n="http://www.w3.org/2000/svg",i="http://www.w3.org/1999/xlink",r=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],a="!--",l=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];e.exports=function(e,t){function n(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":o(e))?e:i("",e)}t||(t={});var i=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=d(e)),function(r){function a(e){var n=[];l===k&&(l=_);for(var o=0;o<e.length;o++){var i=e.charAt(o);l===y&&"<"===i?(s.length&&n.push([y,s]),s="",l=x):">"!==i||function(e){return e===C||e===S}(l)||l===P?l===P&&/-$/.test(s)&&"-"===i?(t.comments&&n.push([O,s.substr(0,s.length-1)],[v]),s="",l=y):l===x&&/^!--$/.test(s)?(t.comments&&n.push([x,s],[b,"comment"],[A]),s=i,l=P):l===y||l===P?s+=i:l===x&&/\s/.test(i)?(n.push([x,s]),s="",l=_):l===x?s+=i:l===_&&/[^\s"'=/]/.test(i)?(l=b,s=i):l===_&&/\s/.test(i)?(s.length&&n.push([b,s]),n.push([j])):l===b&&/\s/.test(i)?(n.push([b,s]),s="",l=w):l===b&&"="===i?(n.push([b,s],[A]),s="",l=k):l===b?s+=i:l!==w&&l!==_||"="!==i?l!==w&&l!==_||/\s/.test(i)?l===k&&'"'===i?l=S:l===k&&"'"===i?l=C:l===S&&'"'===i?(n.push([O,s],[j]),s="",l=_):l===C&&"'"===i?(n.push([O,s],[j]),s="",l=_):l!==k||/\s/.test(i)?l===O&&/\s/.test(i)?(n.push([O,s],[j]),s="",l=_):l!==O&&l!==C&&l!==S||(s+=i):(l=O,o--):(n.push([j]),/[\w-]/.test(i)?(s+=i,l=b):l=_):(n.push([A]),l=k):(l===x?n.push([x,s]):l===b?n.push([b,s]):l===O&&s.length&&n.push([O,s]),n.push([v]),s="",l=y)}return l===y&&s.length?(n.push([y,s]),s=""):l===O&&s.length?(n.push([O,s]),s=""):l===S&&s.length?(n.push([O,s]),s=""):l===C&&s.length?(n.push([O,s]),s=""):l===b&&(n.push([b,s]),s=""),n}for(var l=y,s="",f=arguments.length,c=[],p=0;p<r.length;p++)if(p<f-1){var u=arguments[p+1],h=a(r[p]),m=l;m===S&&(m=O),m===C&&(m=O),m===k&&(m=O),m===_&&(m=b),h.push([0,m,u]),c.push.apply(c,h)}else c.push.apply(c,a(r[p]));for(var d=[null,{},[]],g=[[d,-1]],p=0;p<c.length;p++){var F=g[g.length-1][0],N=(h=c[p])[0];if(N===x&&/^\//.test(h[1]))G=g[g.length-1][1],g.length>1&&(g.pop(),g[g.length-1][0][2][G]=e(F[0],F[1],F[2].length?F[2]:void 0));else if(N===x){var T=[h[1],{},[]];F[2].push(T),g.push([T,F[2].length-1])}else if(N===b||0===N&&h[1]===b){for(var z,L="";p<c.length;p++)if(c[p][0]===b)L=i(L,c[p][1]);else{if(0!==c[p][0]||c[p][1]!==b)break;if("object"!==o(c[p][2])||L)L=i(L,c[p][2]);else for(z in c[p][2])c[p][2].hasOwnProperty(z)&&!F[1][z]&&(F[1][z]=c[p][2][z])}c[p][0]===A&&p++;for(var M=p;p<c.length;p++)if(c[p][0]===O||c[p][0]===b)F[1][L]?""===c[p][1]||(F[1][L]=i(F[1][L],c[p][1])):F[1][L]=n(c[p][1]);else{if(0!==c[p][0]||c[p][1]!==O&&c[p][1]!==b){!L.length||F[1][L]||p!==M||c[p][0]!==v&&c[p][0]!==j||(F[1][L]=L.toLowerCase()),c[p][0]===v&&p--;break}F[1][L]?""===c[p][2]||(F[1][L]=i(F[1][L],c[p][2])):F[1][L]=n(c[p][2])}}else if(N===b)F[1][h[1]]=!0;else if(0===N&&h[1]===b)F[1][h[2]]=!0;else if(N===v){if(function(e){return E.test(e)}(F[0])&&g.length){var G=g[g.length-1][1];g.pop(),g[g.length-1][0][2][G]=e(F[0],F[1],F[2].length?F[2]:void 0)}}else if(0===N&&h[1]===y)void 0===h[2]||null===h[2]?h[2]="":h[2]||(h[2]=i("",h[2])),Array.isArray(h[2][0])?F[2].push.apply(F[2],h[2]):F[2].push(h[2]);else if(N===y)F[2].push(h[1]);else if(N!==A&&N!==j)throw new Error("unhandled: "+N)}if(d[2].length>1&&/^\s*$/.test(d[2][0])&&d[2].shift(),d[2].length>2||2===d[2].length&&/\S/.test(d[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(d[2][0])&&"string"==typeof d[2][0][0]&&Array.isArray(d[2][0][2])&&(d[2][0]=e(d[2][0][0],d[2][0][1],d[2][0][2])),d[2][0]}}(t,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=t}),V=s(['<aside class="m-footer-social__box">\n    ','\n\n    <ul class="m-footer-social__list">\n      ',"\n    </ul>\n  </aside>"],['<aside class="m-footer-social__box">\n    ','\n\n    <ul class="m-footer-social__list">\n      ',"\n    </ul>\n  </aside>"]),$=s(['<strong class="m-footer-social__title">',"</strong>"],['<strong class="m-footer-social__title">',"</strong>"]),B=s(['\n        <li class="m-footer-social__list-item">\n          <a href="','" class="m-footer-social__link">\n            <axa-icon id="','" classes="m-footer-social__icon"></axa-icon>\n          </a>\n        </li>\n      '],['\n        <li class="m-footer-social__list-item">\n          <a href="','" class="m-footer-social__link">\n            <axa-icon id="','" classes="m-footer-social__icon"></axa-icon>\n          </a>\n        </li>\n      ']),q=function(e){var t=e.title,n=e.items;return R(V,t&&R($,t),n.map(function(e){var t=e.name,n=e.url;return R(B,n,t)}))},I=function(e){function n(){return i(this,n),l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,m,q))}return a(n,h),r(n,[{key:"connectedCallback",value:function(){(function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;if(void 0!==a)return a.call(o)})(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this);var e=t(this,"inline"),o=t(this,"light");this.className=f("m-footer-social",{"m-footer-social--inline":e,"m-footer-social--light":o})}}]),n}();window.customElements.define("axa-footer-social",I)}();