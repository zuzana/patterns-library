var StyleGuideWebComponent=function(){"use strict";function e(e,n){return n={exports:{}},e(n,n.exports),n.exports}function n(e,n,t){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=new K(n,s({},i,{detail:t}));e.dispatchEvent(a)}function t(e,n,t,i){function o(){for(var n=0;n<d;++n)e.removeEventListener(u[n],l,r);!function(e,n){if(!e)return!1;for(var t=Object.keys(e),i=t.length,a=0;a<i;++a){var o=t[a];if(e[o]===n)return delete e[o]}}(this,o)}var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(U[n]&&(n=U[n]),!e||!n)return null;var s=void 0===t?"undefined":a(t);"function"===s&&(r=!!i,i=t);for(var l=t&&"string"===s?function(n){for(var a=n.target;!function(e,n){return function(e,n){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",n)}(n).test(e.className)}(a,t)&&a!==e;)a=a.parentNode;if(a!==e)return i(n,a)}:i,u=n.split(Q),d=u.length,c=0;c<d;++c)e.addEventListener(u[c],l,r);return o}function i(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=(function(){function e(e){this.value=e}function n(n){function t(a,o){try{var r=n[a](o),s=r.value;s instanceof e?Promise.resolve(s.value).then(function(e){t("next",e)},function(e){t("throw",e)}):i(r.done?"return":"normal",r.value)}catch(e){i("throw",e)}}function i(e,n){switch(e){case"return":a.resolve({value:n,done:!0});break;case"throw":a.reject(n);break;default:a.resolve({value:n,done:!1})}(a=a.next)?t(a.key,a.arg):o=null}var a,o;this._invoke=function(e,n){return new Promise(function(i,r){var s={key:e,arg:n,resolve:i,reject:r,next:null};o?o=o.next=s:(a=o=s,t(e,n))})},"function"!=typeof n.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(n.prototype[Symbol.asyncIterator]=function(){return this}),n.prototype.next=function(e){return this._invoke("next",e)},n.prototype.throw=function(e){return this._invoke("throw",e)},n.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}),r=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},l=function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)},u=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n},d=function(){return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],i=!0,a=!1,o=void 0;try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done)&&(t.push(r.value),!n||t.length!==n);i=!0);}catch(e){a=!0,o=e}finally{try{!i&&s.return&&s.return()}finally{if(a)throw o}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))},h=function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)},f=e(function(e){!function(){function n(){for(var e=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var r=void 0===o?"undefined":a(o);if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===r)for(var s in o)t.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}var t={}.hasOwnProperty;e.exports?e.exports=n:window.classNames=n}()}),p=".m-header-sub-navigation {\n  display: none;\n  background: #fff;\n  border-bottom: 2px solid #ccc;\n  -webkit-box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3);\n          box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3); }\n  .is-header-sub-navigation-open .m-header-sub-navigation {\n    display: block; }\n\n.m-header-sub-navigation--flyout {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1050;\n  width: 100%;\n  margin-top: 2px; }\n\n.m-header-sub-navigation__index {\n  background: #fafafa; }\n\n.m-header-sub-navigation__index-box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: 60px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 1140px; } }\n\n.m-header-sub-navigation__index-link {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__index-link {\n      font-size: 18px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 768px) {\n    .m-header-sub-navigation__index-link {\n      font-size: 18px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 992px) {\n    .m-header-sub-navigation__index-link {\n      font-size: 18px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  .m-header-sub-navigation__index-link:hover, .m-header-sub-navigation__index-link:active, .m-header-sub-navigation__index-link:focus {\n    text-decoration: none;\n    font-weight: 600; }\n\n.m-header-sub-navigation__index-close {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  padding-right: 44px;\n  margin-left: auto;\n  text-transform: uppercase;\n  border: none;\n  background: transparent;\n  color: #00008f; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__index-close {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .m-header-sub-navigation__index-close {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .m-header-sub-navigation__index-close {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  .m-header-sub-navigation__index-close:hover, .m-header-sub-navigation__index-close:active, .m-header-sub-navigation__index-close:focus {\n    color: #00005b;\n    cursor: pointer;\n    outline: none; }\n\n.m-header-sub-navigation__index-close__icon {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  display: block;\n  width: 23px;\n  height: 23px;\n  margin-top: -11.5px;\n  fill: currentColor; }\n\n.m-header-sub-navigation__box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  padding-top: 30px;\n  padding-bottom: 40px; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-header-sub-navigation__box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-header-sub-navigation__box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-header-sub-navigation__box {\n      max-width: 1140px; } }\n\n.m-header-sub-navigation__row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -30px;\n  margin-left: -30px;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n  .m-header-sub-navigation__row + .m-header-sub-navigation__row > .m-header-sub-navigation__block {\n    padding-top: 30px; }\n\n.m-header-sub-navigation__row--col-2 {\n  margin-right: -45px;\n  margin-left: -45px; }\n\n.m-header-sub-navigation__row--col-3 {\n  margin-right: -65px;\n  margin-left: -65px; }\n\n.m-header-sub-navigation__block {\n  max-width: 25%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  padding: 0 30px;\n  border-left: 1px solid #ccc; }\n  .m-header-sub-navigation__block:first-child {\n    border: none; }\n  .m-header-sub-navigation__row--col-2 .m-header-sub-navigation__block:nth-child(2n + 1) {\n    border: none; }\n  .m-header-sub-navigation__row--col-2 .m-header-sub-navigation__block:nth-child(n + 3) {\n    padding-top: 30px; }\n  .m-header-sub-navigation__row--col-3 .m-header-sub-navigation__block:nth-child(3n + 1) {\n    border: none; }\n  .m-header-sub-navigation__row--col-3 .m-header-sub-navigation__block:nth-child(n + 4) {\n    padding-top: 30px; }\n  .m-header-sub-navigation__row--col-4 .m-header-sub-navigation__block:nth-child(4n + 1) {\n    border: none; }\n  .m-header-sub-navigation__row--col-4 .m-header-sub-navigation__block:nth-child(n + 5) {\n    padding-top: 30px; }\n  .m-header-sub-navigation__block:nth-last-child(1):first-child,\n  .m-header-sub-navigation__block:nth-last-child(1):first-child ~ * {\n    max-width: 33.33333%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%; }\n  .m-header-sub-navigation__block:nth-last-child(2):first-child,\n  .m-header-sub-navigation__block:nth-last-child(2):first-child ~ * {\n    max-width: 25%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    padding-right: 45px;\n    padding-left: 45px; }\n  .m-header-sub-navigation__block:nth-last-child(3n):first-child,\n  .m-header-sub-navigation__block:nth-last-child(3n):first-child ~ * {\n    max-width: 33.33333%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    padding-right: 65px;\n    padding-left: 65px; }\n\n.m-header-sub-navigation__block--wide:nth-last-child(2):first-child,\n.m-header-sub-navigation__block--wide:nth-last-child(2):first-child ~ * {\n  max-width: 50%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%; }\n  .m-header-sub-navigation__block--wide:nth-last-child(2):first-child .m-header-sub-navigation__list,\n  .m-header-sub-navigation__block--wide:nth-last-child(2):first-child ~ * .m-header-sub-navigation__list {\n    -webkit-column-count: 2;\n            column-count: 2; }\n\n.m-header-sub-navigation__category {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0;\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  color: #00008f;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__category {\n      font-size: 24px;\n      font-weight: 700;\n      line-height: 1.2;\n      letter-spacing: 0; } }\n  @media (min-width: 768px) {\n    .m-header-sub-navigation__category {\n      font-size: 24px;\n      font-weight: 700;\n      line-height: 1.2;\n      letter-spacing: 0; } }\n  @media (min-width: 992px) {\n    .m-header-sub-navigation__category {\n      font-size: 24px;\n      font-weight: 700;\n      line-height: 1.2;\n      letter-spacing: 0; } }\n\n.m-header-sub-navigation__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  margin-top: 15px; }\n\n.m-header-sub-navigation__list-item {\n  display: block; }\n\n.m-header-sub-navigation__link {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  display: inline-block;\n  width: 100%;\n  padding: 4px 0;\n  line-height: 1.3 !important; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__link {\n      font-size: 18px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 768px) {\n    .m-header-sub-navigation__link {\n      font-size: 18px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 992px) {\n    .m-header-sub-navigation__link {\n      font-size: 18px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  .m-header-sub-navigation__link.is-header-sub-navigation-active, .m-header-sub-navigation__link:hover, .m-header-sub-navigation__link:active, .m-header-sub-navigation__link:focus {\n    color: #00005b;\n    text-decoration: none;\n    font-weight: 600;\n    letter-spacing: -0.005em; }\n",m=function(e){return function(n,t,i){for(var a in t)a in g&&(t[g[a]]=t[a],delete t[a]);return e(n,t,i)}},g={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},b=1,v=2,x=3,_=4,y=5,w=6,k=7,C=8,O=9,A=10,E=11,T=12,N=13,j=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"),S=/\n[\s]+$/,L=/^\n[\s]+/,P=/[\s]+$/,z=/^[\s]+/,M=/[\n\s]+/g,F=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],R=["code","pre"],D=function e(n,t){if(Array.isArray(t))for(var i,a,o=n.nodeName.toLowerCase(),r=!1,s=0,l=t.length;s<l;s++){var u=t[s];if(Array.isArray(u))e(n,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var d=n.childNodes[n.childNodes.length-1];if("string"==typeof u)r=!0,d&&"#text"===d.nodeName?d.nodeValue+=u:(u=document.createTextNode(u),n.appendChild(u),d=u),s===l-1&&(r=!1,-1===F.indexOf(o)&&-1===R.indexOf(o)?""===(i=d.nodeValue.replace(L,"").replace(P,"").replace(S,"").replace(M," "))?n.removeChild(d):d.nodeValue=i:-1===R.indexOf(o)&&(a=0===s?"":" ",i=d.nodeValue.replace(L,a).replace(z," ").replace(P,"").replace(S,"").replace(M," "),d.nodeValue=i));else if(u&&u.nodeType){r&&(r=!1,-1===F.indexOf(o)&&-1===R.indexOf(o)?""===(i=d.nodeValue.replace(L,"").replace(S,"").replace(M," "))?n.removeChild(d):d.nodeValue=i:-1===R.indexOf(o)&&(i=d.nodeValue.replace(z," ").replace(L,"").replace(S,"").replace(M," "),d.nodeValue=i));var c=u.nodeName;c&&(o=c.toLowerCase()),n.appendChild(u)}}}},G=e(function(e){function n(e,n,a){var l;-1!==s.indexOf(e)&&(n.namespace=t);var u=!1;if(n.namespace&&(u=n.namespace,delete n.namespace),u)l=document.createElementNS(u,e);else{if(e===r)return document.createComment(n.comment);l=document.createElement(e)}for(var d in n)if(n.hasOwnProperty(d)){var c=d.toLowerCase(),h=n[d];if("classname"===c&&(c="class",d="class"),"htmlFor"===d&&(d="for"),-1!==o.indexOf(c))if("true"===h)h=c;else if("false"===h)continue;"on"===c.slice(0,2)?l[d]=h:u?"xlink:href"===d?l.setAttributeNS(i,d,h):/^xmlns($|:)/i.test(d)||l.setAttributeNS(null,d,h):l.setAttribute(d,h)}return D(l,a),l}var t="http://www.w3.org/2000/svg",i="http://www.w3.org/1999/xlink",o=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],r="!--",s=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];e.exports=function(e,n){function t(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":a(e))?e:i("",e)}n||(n={});var i=n.concat||function(e,n){return String(e)+String(n)};return!1!==n.attrToProp&&(e=m(e)),function(o){function r(e){var t=[];s===k&&(s=_);for(var i=0;i<e.length;i++){var a=e.charAt(i);s===b&&"<"===a?(l.length&&t.push([b,l]),l="",s=v):">"!==a||function(e){return e===O||e===A}(s)||s===N?s===N&&/-$/.test(l)&&"-"===a?(n.comments&&t.push([C,l.substr(0,l.length-1)],[x]),l="",s=b):s===v&&/^!--$/.test(l)?(n.comments&&t.push([v,l],[y,"comment"],[E]),l=a,s=N):s===b||s===N?l+=a:s===v&&/\s/.test(a)?(t.push([v,l]),l="",s=_):s===v?l+=a:s===_&&/[^\s"'=/]/.test(a)?(s=y,l=a):s===_&&/\s/.test(a)?(l.length&&t.push([y,l]),t.push([T])):s===y&&/\s/.test(a)?(t.push([y,l]),l="",s=w):s===y&&"="===a?(t.push([y,l],[E]),l="",s=k):s===y?l+=a:s!==w&&s!==_||"="!==a?s!==w&&s!==_||/\s/.test(a)?s===k&&'"'===a?s=A:s===k&&"'"===a?s=O:s===A&&'"'===a?(t.push([C,l],[T]),l="",s=_):s===O&&"'"===a?(t.push([C,l],[T]),l="",s=_):s!==k||/\s/.test(a)?s===C&&/\s/.test(a)?(t.push([C,l],[T]),l="",s=_):s!==C&&s!==O&&s!==A||(l+=a):(s=C,i--):(t.push([T]),/[\w-]/.test(a)?(l+=a,s=y):s=_):(t.push([E]),s=k):(s===v?t.push([v,l]):s===y?t.push([y,l]):s===C&&l.length&&t.push([C,l]),t.push([x]),l="",s=b)}return s===b&&l.length?(t.push([b,l]),l=""):s===C&&l.length?(t.push([C,l]),l=""):s===A&&l.length?(t.push([C,l]),l=""):s===O&&l.length?(t.push([C,l]),l=""):s===y&&(t.push([y,l]),l=""),t}for(var s=b,l="",u=arguments.length,d=[],c=0;c<o.length;c++)if(c<u-1){var h=arguments[c+1],f=r(o[c]),p=s;p===A&&(p=C),p===O&&(p=C),p===k&&(p=C),p===_&&(p=y),f.push([0,p,h]),d.push.apply(d,f)}else d.push.apply(d,r(o[c]));for(var m=[null,{},[]],g=[[m,-1]],c=0;c<d.length;c++){var S=g[g.length-1][0],L=(f=d[c])[0];if(L===v&&/^\//.test(f[1]))R=g[g.length-1][1],g.length>1&&(g.pop(),g[g.length-1][0][2][R]=e(S[0],S[1],S[2].length?S[2]:void 0));else if(L===v){var P=[f[1],{},[]];S[2].push(P),g.push([P,S[2].length-1])}else if(L===y||0===L&&f[1]===y){for(var z,M="";c<d.length;c++)if(d[c][0]===y)M=i(M,d[c][1]);else{if(0!==d[c][0]||d[c][1]!==y)break;if("object"!==a(d[c][2])||M)M=i(M,d[c][2]);else for(z in d[c][2])d[c][2].hasOwnProperty(z)&&!S[1][z]&&(S[1][z]=d[c][2][z])}d[c][0]===E&&c++;for(var F=c;c<d.length;c++)if(d[c][0]===C||d[c][0]===y)S[1][M]?""===d[c][1]||(S[1][M]=i(S[1][M],d[c][1])):S[1][M]=t(d[c][1]);else{if(0!==d[c][0]||d[c][1]!==C&&d[c][1]!==y){!M.length||S[1][M]||c!==F||d[c][0]!==x&&d[c][0]!==T||(S[1][M]=M.toLowerCase()),d[c][0]===x&&c--;break}S[1][M]?""===d[c][2]||(S[1][M]=i(S[1][M],d[c][2])):S[1][M]=t(d[c][2])}}else if(L===y)S[1][f[1]]=!0;else if(0===L&&f[1]===y)S[1][f[2]]=!0;else if(L===x){if(function(e){return j.test(e)}(S[0])&&g.length){var R=g[g.length-1][1];g.pop(),g[g.length-1][0][2][R]=e(S[0],S[1],S[2].length?S[2]:void 0)}}else if(0===L&&f[1]===b)void 0===f[2]||null===f[2]?f[2]="":f[2]||(f[2]=i("",f[2])),Array.isArray(f[2][0])?S[2].push.apply(S[2],f[2]):S[2].push(f[2]);else if(L===b)S[2].push(f[1]);else if(L!==E&&L!==T)throw new Error("unhandled: "+L)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=e(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0]}}(n,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=n}),$=function(e){return"undefined"!=typeof window?function(){var n=document.createElement("div");return n.innerHTML=e,function(e){return Array.isArray(e)?e:[].slice.call(e)}(n.childNodes)}():function(){var n=new String(e);return n.__encoded=!0,n}()},q=c(['\n  <li class="m-header-sub-navigation__list-item">\n    <a class="m-header-sub-navigation__link ','" href="','">',"</a>\n  </li>\n"],['\n  <li class="m-header-sub-navigation__list-item">\n    <a class="m-header-sub-navigation__link ','" href="','">',"</a>\n  </li>\n"]),B=c(['\n  <div class="m-header-sub-navigation__row m-header-sub-navigation__row--col-','">\n\n  ',"\n  </div>\n"],['\n  <div class="m-header-sub-navigation__row m-header-sub-navigation__row--col-','">\n\n  ',"\n  </div>\n"]),V=c(['\n    <div class="m-header-sub-navigation__block ','">\n      <strong class="m-header-sub-navigation__category">\n        ','\n      </strong>\n\n      <ul class="m-header-sub-navigation__list">\n        ',"\n      </ul>\n    </div>\n  "],['\n    <div class="m-header-sub-navigation__block ','">\n      <strong class="m-header-sub-navigation__category">\n        ','\n      </strong>\n\n      <ul class="m-header-sub-navigation__list">\n        ',"\n      </ul>\n    </div>\n  "]),I=c(['<a class="m-header-sub-navigation__category__link" href="','">',"</a>"],['<a class="m-header-sub-navigation__category__link" href="','">',"</a>"]),W=c(['\n        <div class="m-header-sub-navigation__index">\n          <div class="m-header-sub-navigation__index-box">\n            <a class="m-header-sub-navigation__index-link" href="','">','</a>\n            <button type="button" class="m-header-sub-navigation__index-close js-header-sub-navigation__index-close">\n              Close\n              <axa-icon id="cross-gap" classes="m-header-sub-navigation__index-close__icon"></axa-icon>\n            </button>\n          </div>\n        </div>'],['\n        <div class="m-header-sub-navigation__index">\n          <div class="m-header-sub-navigation__index-box">\n            <a class="m-header-sub-navigation__index-link" href="','">','</a>\n            <button type="button" class="m-header-sub-navigation__index-close js-header-sub-navigation__index-close">\n              Close\n              <axa-icon id="cross-gap" classes="m-header-sub-navigation__index-close__icon"></axa-icon>\n            </button>\n          </div>\n        </div>']),H=c(['\n      <div class="m-header-sub-navigation__box">\n        ',"\n      </div>\n    "],['\n      <div class="m-header-sub-navigation__box">\n        ',"\n      </div>\n    "]),J=function(e){var n=e.items,t=e.indexurl,i=e.indextitle,a=[];return Array.isArray(n)&&(i&&t&&a.push(G(W,t,i)),a.push(G(H,n&&n.map(function(e){var n=e.columns,t=e.col,i=e.isWide;return G(B,t||function(e){var t=n.length;return 2===t?t:t%3==0&&t%4!=0?3:4}(),n&&n.map(function(e){var n=e.links,t=e.title,a=e.url;return G(V,i?"m-header-sub-navigation__block--wide":"",a?G(I,a,t):t,n&&n.map(function(e){var n=e.url,t=e.name,i=e.isActive;return G(q,i?"is-header-sub-navigation-active":"",n,$(t))}))}))})))),a},Z=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,K=function(){function e(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.bubbles,i=void 0!==t&&t,a=n.cancelable,o=void 0!==a&&a,r=n.detail,s=void 0===r?void 0:r,l=document.createEvent("CustomEvent");l.initCustomEvent(e,i,o,s);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}try{var n=new window.CustomEvent("test");if(n.preventDefault(),!0!==n.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return e}(),Q=/\s+/,U={transitionend:function(){for(var e=document.createElement("div").style,n={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},t=Object.keys(n),i=t.length,a=void 0,o=0;o<i;++o)if(a=t[o],void 0!==e[a])return n[a];return null}()},X={};t(document,"pubsub/onsubscribe",function(e){var t=e.detail;X[t]||(X[t]={count:0});var i=X[t],a=i.queue;Array.isArray(a)&&(a.forEach(function(e){var t=d(e,3),i=t[0],a=t[1];n(t[2],i,a)}),delete i.queue)}),Object.setPrototypeOf(i.prototype,HTMLElement.prototype),Object.setPrototypeOf(i,HTMLElement);var Y={},ee=function(e){function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments[1];o(this,a);var t=u(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));return t._makeContextReady=t._makeContextReady.bind(t),t._initialise(e,n),t}return l(a,i),r(a,[{key:"_initialise",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=n}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var n=document.createElement("style"),t=document.createTextNode(this._styles);n.appendChild(t),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",n):e.appendChild(n)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var t=document.createDocumentFragment();this.firstChild;)t.appendChild(this.firstChild);var i=n(function(e){if(!e.hasAttributes)return null;for(var n={},t=e.attributes,i=t.length,a=0;a<i;++a){var o=t[a];n[o.name]=function(e,n){if("function"==typeof e.hasAttribute&&!e.hasAttribute(n))return!1;var t=e.value;if(n?t=e.getAttribute(n):n=e.name,t&&n!==t){if(Z.test(t))try{t=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}else t=!0;return t}(o)}return n}(this),t);if(Array.isArray(i))i.forEach(function(n){e.appendChild(n)});else if(i){if("string"==typeof i){var a=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+a.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),a}this.appendChild(i)}this._hasRendered=!0}catch(a){"throwed"!==a.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+a+"\n\nStack Trace: "+a.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;X[e]||(X[e]={count:0,queue:[]});var a=X[e].queue;Array.isArray(a)?a.push([e,t,i]):n(i,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=function(e,i){var a=t(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,i);X[e]||(X[e]={count:0});var o=X[e];return o.count++,o.onsubscribe||(o.onsubscribe=function(e){function n(){for(var n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];return f=i,v&&(p&&clearTimeout(p),p=setTimeout(function(){m&&clearTimeout(m),t()},a)),x&&!m&&(m=setTimeout(function(){p&&clearTimeout(p),t()},c)),s&&!b&&(b=!0,g=e.apply(void 0,h(f))),g}function t(){u&&(g=e.apply(void 0,h(f))),p=null,m=null,b=!1}function i(){p&&(clearTimeout(p),p=null),m&&(clearTimeout(m),m=null),f=void 0,b=!1}var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=o.leading,s=void 0!==r&&r,l=o.trailing,u=void 0===l||l,d=o.maxWait,c=void 0!==d&&d,f=void 0,p=void 0,m=void 0,g=void 0,b=!1,v=a!==c,x=!1!==c;return n.flush=function(){return(p||m)&&(g=e.apply(void 0,h(f))),i(),g},n.cancel=i,n}(function(e){return function(){n(document,"pubsub/onsubscribe",e),n(document,"pubsub/onsubscribe/"+e,e),X[e]&&delete X[e].unsubscribe}}(e),100)),o.onsubscribe(),function(){o.count--,a.call(this),o.count<=0&&delete X[e]}}("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,n=this.parentNode;n&&(!n.__isContext||e&&e!==n.__contextName);)n=n.parentNode;return!(!n||!n.__isContext)&&n}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var n=16*Math.random()|0;return("x"==e?n:3&n|8).toString(16)})}}]),a}(),ne=(function(e){function n(){return o(this,n),u(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}l(n,ee),r(n,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",n=this.attachShadow({mode:e});this._appendStyles(n),this.render()}}])}(),function(e){function n(){return o(this,n),u(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return l(n,ee),r(n,[{key:"_appendStyles",value:function(){n.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ee.uuidv4();if(e&&!Y[e]){var t=document.createElement("style"),i=document.createTextNode(e);t.appendChild(i),t.setAttribute("data-c-name",n.toLowerCase()),document.querySelector("head").appendChild(t),Y[e]=!0}}}]),n}()),te=function(e){function n(){return o(this,n),u(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,p,J))}return l(n,ne),r(n,[{key:"render",value:function(){(function e(n,t,i){null===n&&(n=Function.prototype);var a=Object.getOwnPropertyDescriptor(n,t);if(void 0===a){var o=Object.getPrototypeOf(n);return null===o?void 0:e(o,t,i)}if("value"in a)return a.value;var r=a.get;if(void 0!==r)return r.call(i)})(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"render",this).call(this);var e=this.hasAttribute("flyout"),t=f(this.initialClassName,"m-header-sub-navigation",{"m-header-sub-navigation--flyout":e});this.className=t}}]),n}();return function(e){var n=0,t=function(){if(0===n)try{e.apply(void 0,arguments),n+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}};document.addEventListener("DOMContentLoaded",t,!1),document.addEventListener("WebComponentsReady",t,!1)}(function(){window.customElements.define("axa-header-sub-navigation",te)}),te}();
