!function(){"use strict";function t(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var e=".color {\n  color: green; }\n",n=(function(){function t(t){this.value=t}function e(e){function n(r,i){try{var c=e[r](i),u=c.value;u instanceof t?Promise.resolve(u.value).then(function(t){n("next",t)},function(t){n("throw",t)}):o(c.done?"return":"normal",c.value)}catch(t){o("throw",t)}}function o(t,e){switch(t){case"return":r.resolve({value:e,done:!0});break;case"throw":r.reject(e);break;default:r.resolve({value:e,done:!1})}(r=r.next)?n(r.key,r.arg):i=null}var r,i;this._invoke=function(t,e){return new Promise(function(o,c){var u={key:t,arg:e,resolve:o,reject:c,next:null};i?i=i.next=u:(r=i=u,n(t,e))})},"function"!=typeof e.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(t){return this._invoke("next",t)},e.prototype.throw=function(t){return this._invoke("throw",t)},e.prototype.return=function(t){return this._invoke("return",t)}}(),function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}),o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e};Object.setPrototypeOf(t.prototype,HTMLElement.prototype),Object.setPrototypeOf(t,HTMLElement);var c=document._currentScript||document.currentScript,u={},l=function(e){function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";n(this,u);var e=i(this,(u.__proto__||Object.getPrototypeOf(u)).call(this));e._styles=t;var o=void 0;return(o=window.HTMLImports?HTMLImports.importForElement(c):c.ownerDocument)&&(e.template=o.querySelector("template"),(!e.template||window.HTMLImports&&o!==HTMLImports.importForElement(e.template))&&(e.template=null),e.template&&(e.clone=document.importNode(e.template.content,!0))),e}return r(u,t),o(u,[{key:"connectedCallback",value:function(){this._appendStyles(),this.template&&this.clone&&this.appendChild(this.clone),this._render()}},{key:"_appendStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}},{key:"_render",value:function(){return null}}]),u}(),a=function(t){function e(){return n(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return r(e,l),o(e,[{key:"connectedCallback",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",e=this.attachShadow({mode:t});this._appendStyles(e),this.template&&this.clone&&e.appendChild(this.clone),this._render()}}]),e}(),s=(function(t){function e(){return n(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}r(e,l),o(e,[{key:"_appendStyles",value:function(){if(this._styles&&!u[this._styles]){var t=document.createElement("style"),e=document.createTextNode(this._styles);t.appendChild(e),t.setAttribute("data-c-name",this.nodeName.toLowerCase()),document.querySelector("head").appendChild(t),u[this._styles]=!0}}}])}(),function(t){function o(){return n(this,o),i(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e))}return r(o,a),o}());window.customElements.define("other-dummy",s)}();