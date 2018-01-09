!function(){"use strict";function e(e,t){return t={exports:{}},e(t,t.exports),t.exports}function t(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(m.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}function n(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new g(t,s({},o,{detail:n}));e.dispatchEvent(i)}function o(e,t,n,o){function i(){for(var t=0;t<f;++t)e.removeEventListener(c[t],s,a);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,i=0;i<o;++i){var r=n[i];if(e[r]===t)return delete e[r]}}(this,i)}var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(x[t]&&(t=x[t]),!e||!t)return null;var l=void 0===n?"undefined":r(n);"function"===l&&(a=!!o,o=n);for(var s=n&&"string"===l?function(t){for(var i=t.target;!function(e,t){return function(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}(t).test(e.className)}(i,n)&&i!==e;)i=i.parentNode;if(i!==e)return o(t,i)}:o,c=t.split(v),f=c.length,u=0;u<f;++u)e.addEventListener(c[u],s,a);return i}function i(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=(function(){function e(e){this.value=e}function t(t){function n(i,r){try{var a=t[i](r),l=a.value;l instanceof e?Promise.resolve(l.value).then(function(e){n("next",e)},function(e){n("throw",e)}):o(a.done?"return":"normal",a.value)}catch(e){o("throw",e)}}function o(e,t){switch(e){case"return":i.resolve({value:t,done:!0});break;case"throw":i.reject(t);break;default:i.resolve({value:t,done:!1})}(i=i.next)?n(i.key,i.arg):r=null}var i,r;this._invoke=function(e,t){return new Promise(function(o,a){var l={key:e,arg:t,resolve:o,reject:a,next:null};r?r=r.next=l:(i=r=l,n(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},u=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,l=e[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&l.return&&l.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),p=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},h=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},d=e(function(e){!function(){function t(){for(var e=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var a=void 0===i?"undefined":r(i);if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i))e.push(t.apply(null,i));else if("object"===a)for(var l in i)n.call(i,l)&&i[l]&&e.push(l)}}return e.join(" ")}var n={}.hasOwnProperty;e.exports?e.exports=t:window.classNames=t}()}),m=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,g=function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,i=t.cancelable,r=void 0!==i&&i,a=t.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,o,r,l);var c=s.preventDefault;return s.preventDefault=function(){c.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}try{var t=new window.CustomEvent("test");if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return e}(),v=/\s+/,x={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,i=void 0,r=0;r<o;++r)if(i=n[r],void 0!==e[i])return t[i];return null}()},y={};o(document,"pubsub/onsubscribe",function(e){var t=e.detail;y[t]||(y[t]={count:0});var o=y[t],i=o.queue;Array.isArray(i)&&(i.forEach(function(e){var t=u(e,3),o=t[0],i=t[1];n(t[2],o,i)}),delete o.queue)}),Object.setPrototypeOf(i.prototype,HTMLElement.prototype),Object.setPrototypeOf(i,HTMLElement);var b={},_=function(e){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];a(this,r);var n=f(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return n._makeContextReady=n._makeContextReady.bind(n),n._initialise(e,t),n}return c(r,i),l(r,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var o=document.createDocumentFragment();this.firstChild;)o.appendChild(this.firstChild);var i=n(function(e){if(!e.hasAttributes)return null;for(var n={},o=e.attributes,i=o.length,r=0;r<i;++r){var a=o[r];n[a.name]=t(a)}return n}(this),o);if(Array.isArray(i))i.forEach(function(t){e.appendChild(t)});else if(i){if("string"==typeof i){var r=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),r}this.appendChild(i)}this._hasRendered=!0}catch(r){"throwed"!==r.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+r+"\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;y[e]||(y[e]={count:0,queue:[]});var i=y[e].queue;Array.isArray(i)?i.push([e,t,o]):n(o,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this;this.contextNode?(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode)},10)):this.unContextEnabled||(this.unContextEnabled=function(e,t){var i=o(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);y[e]||(y[e]={count:0});var r=y[e];return r.count++,r.onsubscribe||(r.onsubscribe=function(e){function t(){for(var t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];return p=o,x&&(d&&clearTimeout(d),d=setTimeout(function(){m&&clearTimeout(m),n()},i)),y&&!m&&(m=setTimeout(function(){d&&clearTimeout(d),n()},u)),l&&!v&&(v=!0,g=e.apply(void 0,h(p))),g}function n(){c&&(g=e.apply(void 0,h(p))),d=null,m=null,v=!1}function o(){d&&(clearTimeout(d),d=null),m&&(clearTimeout(m),m=null),p=void 0,v=!1}var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=r.leading,l=void 0!==a&&a,s=r.trailing,c=void 0===s||s,f=r.maxWait,u=void 0!==f&&f,p=void 0,d=void 0,m=void 0,g=void 0,v=!1,x=i!==u,y=!1!==u;return t.flush=function(){return(d||m)&&(g=e.apply(void 0,h(p))),o(),g},t.cancel=o,t}(function(e){return function(){n(document,"pubsub/onsubscribe",e),n(document,"pubsub/onsubscribe/"+e,e),y[e]&&delete y[e].unsubscribe}}(e),100)),r.onsubscribe(),function(){r.count--,i.call(this),r.count<=0&&delete y[e]}}("context/enabled",this._makeContextReady))}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),r}(),w=(function(e){function t(){return a(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}c(t,_),l(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return a(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,_),l(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_.uuidv4();if(e&&!b[e]){var n=document.createElement("style"),o=document.createTextNode(e);n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),b[e]=!0}}}]),t}()),k=".m-footer-social {\n  padding-right: 15px;\n  padding-left: 15px;\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  max-width: 33.33333%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 33.33333%;\n          flex: 0 0 33.33333%;\n  display: block; }\n  .m-footer-social:first-child:last-child {\n    position: static;\n    width: auto;\n    max-width: none;\n    -webkit-box-flex: 1;\n        -ms-flex: auto;\n            flex: auto;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto; }\n  @media (max-width: 991px) {\n    .m-footer-social {\n      position: static;\n      width: auto;\n      max-width: none;\n      -webkit-box-flex: 1;\n          -ms-flex: auto;\n              flex: auto;\n      margin-bottom: -10px; }\n      .m-footer-social:first-child {\n        margin-bottom: 0; } }\n  @media (max-width: 575px) {\n    .m-footer-social {\n      padding: 25px 30px;\n      margin-bottom: 0; } }\n\n.m-footer-social__title {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  color: #fff;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-footer-social__title {\n      font-size: 16px;\n      font-weight: 700;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .m-footer-social__title {\n      font-size: 16px;\n      font-weight: 700;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .m-footer-social__title {\n      font-size: 16px;\n      font-weight: 700;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (max-width: 991px) {\n    .m-footer-social__title {\n      display: none !important; } }\n\n.m-footer-social__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  *zoom: 1;\n  margin: 15px -10px 0 -10px; }\n  .m-footer-social__list::before, .m-footer-social__list::after {\n    display: table;\n    content: \" \"; }\n  .m-footer-social__list::after {\n    clear: both; }\n  .m-footer-social__list:first-child {\n    margin-top: 0; }\n  @media (max-width: 991px) {\n    .m-footer-social__list {\n      margin-top: 25px; } }\n  @media (max-width: 575px) {\n    .m-footer-social__list {\n      margin: -10px; } }\n\n.m-footer-social__list-item {\n  display: block;\n  float: left;\n  margin-right: 10px; }\n  .m-footer-social__list-item:last-child {\n    margin-right: 0; }\n\n.m-footer-social__link {\n  display: block;\n  padding: 10px; }\n\n.m-footer-social__icon {\n  display: block;\n  width: 25px;\n  height: 25px;\n  color: #fff; }\n\n.m-footer-social--inline .m-footer-social__box {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.m-footer-social--inline .m-footer-social__title {\n  display: block;\n  margin-right: 20px; }\n  .m-footer-social--inline .m-footer-social__title::after {\n    content: ':'; }\n\n.m-footer-social--inline .m-footer-social__list {\n  margin-top: 0; }\n\n.m-footer-social--light {\n  position: static;\n  width: auto;\n  max-width: none;\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto; }\n  .m-footer-social--light .m-footer-social__title {\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 1.5;\n    letter-spacing: 0.02em; }\n    @media (min-width: 576px) {\n      .m-footer-social--light .m-footer-social__title {\n        font-size: 14px;\n        font-weight: 700;\n        line-height: 1.21;\n        letter-spacing: 0.02em; } }\n    @media (min-width: 768px) {\n      .m-footer-social--light .m-footer-social__title {\n        font-size: 14px;\n        font-weight: 700;\n        line-height: 1.21;\n        letter-spacing: 0.02em; } }\n    @media (min-width: 992px) {\n      .m-footer-social--light .m-footer-social__title {\n        font-size: 14px;\n        font-weight: 700;\n        line-height: 1.21;\n        letter-spacing: 0.02em; } }\n  .m-footer-social--light .m-footer-social__icon {\n    width: 20px;\n    height: 20px; }\n",C=function(e){return function(t,n,o){for(var i in n)i in O&&(n[O[i]]=n[i],delete n[i]);return e(t,n,o)}},O={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},E=1,A=2,S=3,T=4,j=5,N=6,L=7,P=8,F=9,M=10,z=11,R=12,D=13,G=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"),$=/\n[\s]+$/,q=/^\n[\s]+/,V=/[\s]+$/,I=/^[\s]+/,B=/[\n\s]+/g,W=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],H=["code","pre"],J=function e(t,n){if(Array.isArray(n))for(var o,i,r=t.nodeName.toLowerCase(),a=!1,l=0,s=n.length;l<s;l++){var c=n[l];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var f=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,f&&"#text"===f.nodeName?f.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),f=c),l===s-1&&(a=!1,-1===W.indexOf(r)&&-1===H.indexOf(r)?""===(o=f.nodeValue.replace(q,"").replace(V,"").replace($,"").replace(B," "))?t.removeChild(f):f.nodeValue=o:-1===H.indexOf(r)&&(i=0===l?"":" ",o=f.nodeValue.replace(q,i).replace(I," ").replace(V,"").replace($,"").replace(B," "),f.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===W.indexOf(r)&&-1===H.indexOf(r)?""===(o=f.nodeValue.replace(q,"").replace($,"").replace(B," "))?t.removeChild(f):f.nodeValue=o:-1===H.indexOf(r)&&(o=f.nodeValue.replace(I," ").replace(q,"").replace($,"").replace(B," "),f.nodeValue=o));var u=c.nodeName;u&&(r=u.toLowerCase()),t.appendChild(c)}}}},Z=e(function(e){function t(e,t,r){var s;-1!==l.indexOf(e)&&(t.namespace=n);var c=!1;if(t.namespace&&(c=t.namespace,delete t.namespace),c)s=document.createElementNS(c,e);else{if(e===a)return document.createComment(t.comment);s=document.createElement(e)}for(var f in t)if(t.hasOwnProperty(f)){var u=f.toLowerCase(),p=t[f];if("classname"===u&&(u="class",f="class"),"htmlFor"===f&&(f="for"),-1!==i.indexOf(u))if("true"===p)p=u;else if("false"===p)continue;"on"===u.slice(0,2)?s[f]=p:c?"xlink:href"===f?s.setAttributeNS(o,f,p):/^xmlns($|:)/i.test(f)||s.setAttributeNS(null,f,p):s.setAttribute(f,p)}return J(s,r),s}var n="http://www.w3.org/2000/svg",o="http://www.w3.org/1999/xlink",i=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],a="!--",l=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];e.exports=function(e,t){function n(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":r(e))?e:o("",e)}t||(t={});var o=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=C(e)),function(i){function a(e){var n=[];l===L&&(l=T);for(var o=0;o<e.length;o++){var i=e.charAt(o);l===E&&"<"===i?(s.length&&n.push([E,s]),s="",l=A):">"!==i||function(e){return e===F||e===M}(l)||l===D?l===D&&/-$/.test(s)&&"-"===i?(t.comments&&n.push([P,s.substr(0,s.length-1)],[S]),s="",l=E):l===A&&/^!--$/.test(s)?(t.comments&&n.push([A,s],[j,"comment"],[z]),s=i,l=D):l===E||l===D?s+=i:l===A&&/\s/.test(i)?(n.push([A,s]),s="",l=T):l===A?s+=i:l===T&&/[^\s"'=/]/.test(i)?(l=j,s=i):l===T&&/\s/.test(i)?(s.length&&n.push([j,s]),n.push([R])):l===j&&/\s/.test(i)?(n.push([j,s]),s="",l=N):l===j&&"="===i?(n.push([j,s],[z]),s="",l=L):l===j?s+=i:l!==N&&l!==T||"="!==i?l!==N&&l!==T||/\s/.test(i)?l===L&&'"'===i?l=M:l===L&&"'"===i?l=F:l===M&&'"'===i?(n.push([P,s],[R]),s="",l=T):l===F&&"'"===i?(n.push([P,s],[R]),s="",l=T):l!==L||/\s/.test(i)?l===P&&/\s/.test(i)?(n.push([P,s],[R]),s="",l=T):l!==P&&l!==F&&l!==M||(s+=i):(l=P,o--):(n.push([R]),/[\w-]/.test(i)?(s+=i,l=j):l=T):(n.push([z]),l=L):(l===A?n.push([A,s]):l===j?n.push([j,s]):l===P&&s.length&&n.push([P,s]),n.push([S]),s="",l=E)}return l===E&&s.length?(n.push([E,s]),s=""):l===P&&s.length?(n.push([P,s]),s=""):l===M&&s.length?(n.push([P,s]),s=""):l===F&&s.length?(n.push([P,s]),s=""):l===j&&(n.push([j,s]),s=""),n}for(var l=E,s="",c=arguments.length,f=[],u=0;u<i.length;u++)if(u<c-1){var p=arguments[u+1],h=a(i[u]),d=l;d===M&&(d=P),d===F&&(d=P),d===L&&(d=P),d===T&&(d=j),h.push([0,d,p]),f.push.apply(f,h)}else f.push.apply(f,a(i[u]));for(var m=[null,{},[]],g=[[m,-1]],u=0;u<f.length;u++){var v=g[g.length-1][0],x=(h=f[u])[0];if(x===A&&/^\//.test(h[1]))k=g[g.length-1][1],g.length>1&&(g.pop(),g[g.length-1][0][2][k]=e(v[0],v[1],v[2].length?v[2]:void 0));else if(x===A){var y=[h[1],{},[]];v[2].push(y),g.push([y,v[2].length-1])}else if(x===j||0===x&&h[1]===j){for(var b,_="";u<f.length;u++)if(f[u][0]===j)_=o(_,f[u][1]);else{if(0!==f[u][0]||f[u][1]!==j)break;if("object"!==r(f[u][2])||_)_=o(_,f[u][2]);else for(b in f[u][2])f[u][2].hasOwnProperty(b)&&!v[1][b]&&(v[1][b]=f[u][2][b])}f[u][0]===z&&u++;for(var w=u;u<f.length;u++)if(f[u][0]===P||f[u][0]===j)v[1][_]?""===f[u][1]||(v[1][_]=o(v[1][_],f[u][1])):v[1][_]=n(f[u][1]);else{if(0!==f[u][0]||f[u][1]!==P&&f[u][1]!==j){!_.length||v[1][_]||u!==w||f[u][0]!==S&&f[u][0]!==R||(v[1][_]=_.toLowerCase()),f[u][0]===S&&u--;break}v[1][_]?""===f[u][2]||(v[1][_]=o(v[1][_],f[u][2])):v[1][_]=n(f[u][2])}}else if(x===j)v[1][h[1]]=!0;else if(0===x&&h[1]===j)v[1][h[2]]=!0;else if(x===S){if(function(e){return G.test(e)}(v[0])&&g.length){var k=g[g.length-1][1];g.pop(),g[g.length-1][0][2][k]=e(v[0],v[1],v[2].length?v[2]:void 0)}}else if(0===x&&h[1]===E)void 0===h[2]||null===h[2]?h[2]="":h[2]||(h[2]=o("",h[2])),Array.isArray(h[2][0])?v[2].push.apply(v[2],h[2]):v[2].push(h[2]);else if(x===E)v[2].push(h[1]);else if(x!==z&&x!==R)throw new Error("unhandled: "+x)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=e(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0]}}(t,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=t}),K=p(['<aside class="m-footer-social__box">\n    ','\n\n    <ul class="m-footer-social__list">\n      ',"\n    </ul>\n  </aside>"],['<aside class="m-footer-social__box">\n    ','\n\n    <ul class="m-footer-social__list">\n      ',"\n    </ul>\n  </aside>"]),Q=p(['<strong class="m-footer-social__title">',"</strong>"],['<strong class="m-footer-social__title">',"</strong>"]),U=p(['\n        <li class="m-footer-social__list-item">\n          <a href="','" class="m-footer-social__link">\n            <axa-icon id="','" classes="m-footer-social__icon"></axa-icon>\n          </a>\n        </li>\n      '],['\n        <li class="m-footer-social__list-item">\n          <a href="','" class="m-footer-social__link">\n            <axa-icon id="','" classes="m-footer-social__icon"></axa-icon>\n          </a>\n        </li>\n      ']),X=function(e){var t=e.title,n=e.items;return Z(K,t&&Z(Q,t),n.map(function(e){var t=e.name,n=e.url;return Z(U,n,t)}))},Y=function(e){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,k,X))}return c(n,w),l(n,[{key:"connectedCallback",value:function(){(function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;if(void 0!==a)return a.call(o)})(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this);var e=t(this,"inline"),o=t(this,"light");this.className=d(this.initialClassName,"m-footer-social",{"m-footer-social--inline":e,"m-footer-social--light":o})}}]),n}();!function(e){var t=0,n=function(){if(0===t)try{e.apply(void 0,arguments),t+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}};document.addEventListener("DOMContentLoaded",n,!1),document.addEventListener("WebComponentsReady",n,!1)}(function(){window.customElements.define("axa-footer-social",Y)})}();