/*! For license information please see component---src-pages-index-js-370e296d3b29e8e0831d.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{9662:function(e,t,n){var r=n(7854),o=n(614),i=n(6330),u=r.TypeError;e.exports=function(e){if(o(e))return e;throw u(i(e)+" is not a function")}},9670:function(e,t,n){var r=n(7854),o=n(111),i=r.String,u=r.TypeError;e.exports=function(e){if(o(e))return e;throw u(i(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),o=n(1400),i=n(6244),u=function(e){return function(t,n,u){var a,c=r(t),l=i(c),s=o(u,l);if(e&&n!=n){for(;l>s;)if((a=c[s++])!=a)return!0}else for(;l>s;s++)if((e||s in c)&&c[s]===n)return e||s||0;return!e&&-1}};e.exports={includes:u(!0),indexOf:u(!1)}},4326:function(e,t,n){var r=n(1702),o=r({}.toString),i=r("".slice);e.exports=function(e){return i(o(e),8,-1)}},9920:function(e,t,n){var r=n(2597),o=n(3887),i=n(1236),u=n(3070);e.exports=function(e,t,n){for(var a=o(t),c=u.f,l=i.f,s=0;s<a.length;s++){var f=a[s];r(e,f)||n&&r(n,f)||c(e,f,l(t,f))}}},8880:function(e,t,n){var r=n(9781),o=n(3070),i=n(9114);e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,n){var r=n(7854),o=n(111),i=r.document,u=o(i)&&o(i.createElement);e.exports=function(e){return u?i.createElement(e):{}}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,o,i=n(7854),u=n(8113),a=i.process,c=i.Deno,l=a&&a.versions||c&&c.version,s=l&&l.v8;s&&(o=(r=s.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&u&&(!(r=u.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=u.match(/Chrome\/(\d+)/))&&(o=+r[1]),e.exports=o},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,n){var r=n(7854),o=n(1236).f,i=n(8880),u=n(1320),a=n(3505),c=n(9920),l=n(4705);e.exports=function(e,t){var n,s,f,d,v,h=e.target,p=e.global,m=e.stat;if(n=p?r:m?r[h]||a(h,{}):(r[h]||{}).prototype)for(s in t){if(d=t[s],f=e.noTargetGet?(v=o(n,s))&&v.value:n[s],!l(p?s:h+(m?".":"#")+s,e.forced)&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(e.sham||f&&f.sham)&&i(d,"sham",!0),u(n,s,d,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},6916:function(e){var t=Function.prototype.call;e.exports=t.bind?t.bind(t):function(){return t.apply(t,arguments)}},6530:function(e,t,n){var r=n(9781),o=n(2597),i=Function.prototype,u=r&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,l=a&&(!r||r&&u(i,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},1702:function(e){var t=Function.prototype,n=t.bind,r=t.call,o=n&&n.bind(r,r);e.exports=n?function(e){return e&&o(e)}:function(e){return e&&function(){return r.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),o=n(614),i=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662);e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),o=n(7293),i=n(317);e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(7854),o=n(1702),i=n(7293),u=n(4326),a=r.Object,c=o("".split);e.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==u(e)?c(e,""):a(e)}:a},2788:function(e,t,n){var r=n(1702),o=n(614),i=n(5465),u=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(e){return u(e)}),e.exports=i.inspectSource},9909:function(e,t,n){var r,o,i,u=n(8536),a=n(7854),c=n(1702),l=n(111),s=n(8880),f=n(2597),d=n(5465),v=n(6200),h=n(3501),p="Object already initialized",m=a.TypeError,y=a.WeakMap;if(u||d.state){var g=d.state||(d.state=new y),w=c(g.get),b=c(g.has),E=c(g.set);r=function(e,t){if(b(g,e))throw new m(p);return t.facade=e,E(g,e,t),t},o=function(e){return w(g,e)||{}},i=function(e){return b(g,e)}}else{var k=v("state");h[k]=!0,r=function(e,t){if(f(e,k))throw new m(p);return t.facade=e,s(e,k,t),t},o=function(e){return f(e,k)?e[k]:{}},i=function(e){return f(e,k)}}e.exports={set:r,get:o,has:i,enforce:function(e){return i(e)?o(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!l(t)||(n=o(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}}}},614:function(e){e.exports=function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),o=n(614),i=/#|\.prototype\./,u=function(e,t){var n=c[a(e)];return n==s||n!=l&&(o(t)?r(t):!!t)},a=u.normalize=function(e){return String(e).replace(i,".").toLowerCase()},c=u.data={},l=u.NATIVE="N",s=u.POLYFILL="P";e.exports=u},111:function(e,t,n){var r=n(614);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(7854),o=n(5005),i=n(614),u=n(7976),a=n(3307),c=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=o("Symbol");return i(t)&&u(t.prototype,c(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},133:function(e,t,n){var r=n(7392),o=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(e,t,n){var r=n(7854),o=n(614),i=n(2788),u=r.WeakMap;e.exports=o(u)&&/native code/.test(i(u))},3070:function(e,t,n){var r=n(7854),o=n(9781),i=n(4664),u=n(3353),a=n(9670),c=n(4948),l=r.TypeError,s=Object.defineProperty,f=Object.getOwnPropertyDescriptor,d="enumerable",v="configurable",h="writable";t.f=o?u?function(e,t,n){if(a(e),t=c(t),a(n),"function"==typeof e&&"prototype"===t&&"value"in n&&h in n&&!n.writable){var r=f(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:v in n?n.configurable:r.configurable,enumerable:d in n?n.enumerable:r.enumerable,writable:!1})}return s(e,t,n)}:s:function(e,t,n){if(a(e),t=c(t),a(n),i)try{return s(e,t,n)}catch(r){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),o=n(6916),i=n(5296),u=n(9114),a=n(5656),c=n(4948),l=n(2597),s=n(4664),f=Object.getOwnPropertyDescriptor;t.f=r?f:function(e,t){if(e=a(e),t=c(t),s)try{return f(e,t)}catch(n){}if(l(e,t))return u(!o(i.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),o=n(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),o=n(2597),i=n(5656),u=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=i(e),l=0,s=[];for(n in r)!o(a,n)&&o(r,n)&&c(s,n);for(;t.length>l;)o(r,n=t[l++])&&(~u(s,n)||c(s,n));return s}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);t.f=o?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2140:function(e,t,n){var r=n(7854),o=n(6916),i=n(614),u=n(111),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&i(n=e.toString)&&!u(r=o(n,e)))return r;if(i(n=e.valueOf)&&!u(r=o(n,e)))return r;if("string"!==t&&i(n=e.toString)&&!u(r=o(n,e)))return r;throw a("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),o=n(1702),i=n(8006),u=n(5181),a=n(9670),c=o([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(a(e)),n=u.f;return n?c(t,n(e)):t}},1320:function(e,t,n){var r=n(7854),o=n(614),i=n(2597),u=n(8880),a=n(3505),c=n(2788),l=n(9909),s=n(6530).CONFIGURABLE,f=l.get,d=l.enforce,v=String(String).split("String");(e.exports=function(e,t,n,c){var l,f=!!c&&!!c.unsafe,h=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet,m=c&&void 0!==c.name?c.name:t;o(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(n,"name")||s&&n.name!==m)&&u(n,"name",m),(l=d(n)).source||(l.source=v.join("string"==typeof m?m:""))),e!==r?(f?!p&&e[t]&&(h=!0):delete e[t],h?e[t]=n:u(e,t,n)):h?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return o(this)&&f(this).source||c(this)}))},4488:function(e,t,n){var r=n(7854).TypeError;e.exports=function(e){if(null==e)throw r("Can't call method on "+e);return e}},3505:function(e,t,n){var r=n(7854),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},6200:function(e,t,n){var r=n(2309),o=n(9711),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},5465:function(e,t,n){var r=n(7854),o=n(3505),i="__core-js_shared__",u=r[i]||o(i,{});e.exports=u},2309:function(e,t,n){var r=n(1913),o=n(5465);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.20.2",mode:r?"pure":"global",copyright:"© 2022 Denis Pushkarev (zloirock.ru)"})},1400:function(e,t,n){var r=n(9303),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},5656:function(e,t,n){var r=n(8361),o=n(4488);e.exports=function(e){return r(o(e))}},9303:function(e){var t=Math.ceil,n=Math.floor;e.exports=function(e){var r=+e;return r!=r||0===r?0:(r>0?n:t)(r)}},7466:function(e,t,n){var r=n(9303),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(7854),o=n(4488),i=r.Object;e.exports=function(e){return i(o(e))}},7593:function(e,t,n){var r=n(7854),o=n(6916),i=n(111),u=n(2190),a=n(8173),c=n(2140),l=n(5112),s=r.TypeError,f=l("toPrimitive");e.exports=function(e,t){if(!i(e)||u(e))return e;var n,r=a(e,f);if(r){if(void 0===t&&(t="default"),n=o(r,e,t),!i(n)||u(n))return n;throw s("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},4948:function(e,t,n){var r=n(7593),o=n(2190);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},6330:function(e,t,n){var r=n(7854).String;e.exports=function(e){try{return r(e)}catch(t){return"Object"}}},9711:function(e,t,n){var r=n(1702),o=0,i=Math.random(),u=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+u(++o+i,36)}},3307:function(e,t,n){var r=n(133);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),o=n(7293);e.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(e,t,n){var r=n(7854),o=n(2309),i=n(2597),u=n(9711),a=n(133),c=n(3307),l=o("wks"),s=r.Symbol,f=s&&s.for,d=c?s:s&&s.withoutSetter||u;e.exports=function(e){if(!i(l,e)||!a&&"string"!=typeof l[e]){var t="Symbol."+e;a&&i(s,e)?l[e]=s[e]:l[e]=c&&f?f(t):d(t)}return l[e]}},5837:function(e,t,n){n(2109)({global:!0},{globalThis:n(7854)})},5743:function(e,t,n){n(5837)},3433:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var r=n(7294);n(5743);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=void 0!==n.g&&"[object global]"==={}.toString.call(n.g);function a(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function c(e){return Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView)}function l(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function s(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,r=t||n;if(!r)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(l(r))return"https://vimeo.com/".concat(r);if(s(r))return r.replace("http:","https:");if(t)throw new TypeError("“".concat(t,"” is not a valid video id."));throw new TypeError("“".concat(r,"” is not a vimeo.com url."))}var d=void 0!==Array.prototype.indexOf,v="undefined"!=typeof window&&void 0!==window.postMessage;if(!(u||d&&v))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};!function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),r=function(e,t,r){n?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:r}):e[t]=r};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(r(this,"_id",i("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function n(e,n){if(!o(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+typeof e)}function i(e){return e+"_"+u()+"."+u()}function u(){return Math.random().toString().substring(2)}return r(e.prototype,"delete",(function(e){if(n(this,"delete"),!o(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)})),r(e.prototype,"get",(function(e){if(n(this,"get"),o(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}})),r(e.prototype,"has",(function(e){if(n(this,"has"),!o(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)})),r(e.prototype,"set",(function(e,t){if(n(this,"set"),!o(e))throw new TypeError("Invalid value used as weak map key");var i=e[this._id];return i&&i[0]===e?(i[1]=t,this):(r(e,this._id,[e,t]),this)})),r(e,"_polyfill",!0),e}()}function o(e){return Object(e)===e}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:h);var p,m,y=(p=function(e){var t,n,r;r=function(){var e,t,n,r=Object.prototype.toString,o="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(m){e=function(e,t,n){return e[t]=n,e}}function i(e,r){n.add(e,r),t||(t=o(n.drain))}function u(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function a(){for(var e=0;e<this.chain.length;e++)c(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function c(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=u(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(m){n.reject(m)}}function l(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=u(e))?i((function(){var r=new d(n);try{t.call(e,(function(){l.apply(r,arguments)}),(function(){s.apply(r,arguments)}))}catch(m){s.call(r,m)}})):(n.msg=e,n.state=1,n.chain.length>0&&i(a,n))}catch(m){s.call(new d(n),m)}}}function s(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&i(a,t))}function f(e,t,n,r){for(var o=0;o<t.length;o++)!function(o){e.resolve(t[o]).then((function(e){n(o,e)}),r)}(o)}function d(e){this.def=e,this.triggered=!1}function v(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function h(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new v(this);this.then=function(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return r.promise=new this.constructor((function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t})),t.chain.push(r),0!==t.state&&i(a,t),r.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,(function(e){l.call(t,e)}),(function(e){s.call(t,e)}))}catch(m){s.call(t,m)}}n=function(){var e,n,r;function o(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,i){r=new o(t,i),n?n.next=r:e=r,n=r,r=void 0},drain:function(){var r=e;for(e=n=t=void 0;r;)r.fn.call(r.self),r=r.next}}}();var p=e({},"constructor",h,!1);return h.prototype=p,e(p,"__NPO__",0,!1),e(h,"resolve",(function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))})),e(h,"reject",(function(e){return new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))})),e(h,"all",(function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),u=0;f(t,e,(function(e,t){i[e]=t,++u===o&&n(i)}),r)}))})),e(h,"race",(function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");f(t,e,(function(e,t){n(t)}),r)}))})),h},(n=h)[t="Promise"]=n[t]||r(),e.exports&&(e.exports=n[t])},p(m={exports:{}},m.exports),m.exports),g=new WeakMap;function w(e,t,n){var r=g.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),g.set(e.element,r)}function b(e,t){return(g.get(e.element)||{})[t]||[]}function E(e,t,n){var r=g.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],g.set(e.element,r),!0;var o=r[t].indexOf(n);return-1!==o&&r[t].splice(o,1),g.set(e.element,r),r[t]&&0===r[t].length}function k(e,t){var n=g.get(e);g.set(t,n),g.delete(e)}var x=["autopause","autoplay","background","byline","color","controls","dnt","height","id","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return x.reduce((function(t,n){var r=e.getAttribute("data-vimeo-".concat(n));return(r||""===r)&&(t[n]=""===r?1:r),t}),t)}function T(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function P(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise((function(r,o){if(!s(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var i="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var u in t)t.hasOwnProperty(u)&&(i+="&".concat(u,"=").concat(encodeURIComponent(t[u])));var a="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;a.open("GET",i,!0),a.onload=function(){if(404!==a.status)if(403!==a.status)try{var t=JSON.parse(a.responseText);if(403===t.domain_status_code)return T(t,n),void o(new Error("“".concat(e,"” is not embeddable.")));r(t)}catch(i){o(i)}else o(new Error("“".concat(e,"” is not embeddable.")));else o(new Error("“".concat(e,"” was not found.")))},a.onerror=function(){var e=a.status?" (".concat(a.status,")"):"";o(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},a.send()}))}function j(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){return console.warn(t),{}}return e}function O(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));o>=8&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}function M(e,t){var n,r=[];if((t=j(t)).event){if("error"===t.event)b(e,t.data.method).forEach((function(n){var r=new Error(t.data.message);r.name=t.data.name,n.reject(r),E(e,t.data.method,n)}));r=b(e,"event:".concat(t.event)),n=t.data}else if(t.method){var o=function(e,t){var n=b(e,t);if(n.length<1)return!1;var r=n.shift();return E(e,t,r),r}(e,t.method);o&&(r.push(o),n=t.value)}r.forEach((function(t){try{if("function"==typeof t)return void t.call(e,n);t.resolve(n)}catch(r){}}))}var _=new WeakMap,F=new WeakMap,N={},C=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o(this,e),window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!=typeof document&&"string"==typeof t&&(t=document.getElementById(t)),!c(t))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==t.nodeName){var i=t.querySelector("iframe");i&&(t=i)}if("IFRAME"===t.nodeName&&!s(t.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(_.has(t))return _.get(t);this._window=t.ownerDocument.defaultView,this.element=t,this.origin="*";var u=new y((function(e,o){if(n._onMessage=function(t){if(s(t.origin)&&n.element.contentWindow===t.source){"*"===n.origin&&(n.origin=t.origin);var r=j(t.data);if(r&&"error"===r.event&&r.data&&"ready"===r.data.method){var i=new Error(r.data.message);return i.name=r.data.name,void o(i)}var u=r&&"ready"===r.event,a=r&&"ping"===r.method;if(u||a)return n.element.setAttribute("data-ready","true"),void e();M(n,r)}},n._window.addEventListener("message",n._onMessage),"IFRAME"!==n.element.nodeName){var i=S(t,r);P(f(i),i,t).then((function(e){var r=T(e,t);return n.element=r,n._originalElement=t,k(t,r),_.set(n.element,n),e})).catch(o)}}));if(F.set(this,u),_.set(this.element,this),"IFRAME"===this.element.nodeName&&O(this,"ping"),N.isEnabled){var a=function(){return N.exit()};this.fullscreenchangeHandler=function(){N.isFullscreen?w(n,"event:exitFullscreen",a):E(n,"event:exitFullscreen",a),n.ready().then((function(){O(n,"fullscreenchange",N.isFullscreen)}))},N.on("fullscreenchange",this.fullscreenchangeHandler)}return this}var t,n,r;return t=e,n=[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new y((function(r,o){return t.ready().then((function(){w(t,e,{resolve:r,reject:o}),O(t,e,n)})).catch(o)}))}},{key:"get",value:function(e){var t=this;return new y((function(n,r){return e=a(e,"get"),t.ready().then((function(){w(t,e,{resolve:n,reject:r}),O(t,e)})).catch(r)}))}},{key:"set",value:function(e,t){var n=this;return new y((function(r,o){if(e=a(e,"set"),null==t)throw new TypeError("There must be a value to set.");return n.ready().then((function(){w(n,e,{resolve:r,reject:o}),O(n,e,t)})).catch(o)}))}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===b(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch((function(){})),w(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");E(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch((function(e){}))}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=F.get(this)||new y((function(e,t){t(new Error("Unknown player. Probably unloaded."))}));return y.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return N.isEnabled?N.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return N.isEnabled?N.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return N.isEnabled?y.resolve(N.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new y((function(t){if(F.delete(e),_.delete(e.element),e._originalElement&&(_.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&(e.element.parentNode.parentNode&&e._originalElement&&e._originalElement!==e.element.parentNode?e.element.parentNode.parentNode.removeChild(e.element.parentNode):e.element.parentNode.removeChild(e.element)),e.element&&"DIV"===e.element.nodeName&&e.element.parentNode){e.element.removeAttribute("data-vimeo-initialized");var n=e.element.querySelector("iframe");n&&n.parentNode&&(n.parentNode.parentNode&&e._originalElement&&e._originalElement!==n.parentNode?n.parentNode.parentNode.removeChild(n.parentNode):n.parentNode.removeChild(n))}e._window.removeEventListener("message",e._onMessage),N.isEnabled&&N.off("fullscreenchange",e.fullscreenchangeHandler),t()}))}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}],n&&i(t.prototype,n),r&&i(t,r),e}();u||(N=function(){var e=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,r=t.length,o={};n<r;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)o[t[0][n]]=e[n];return o}return!1}(),t={fullscreenchange:e.fullscreenchange,fullscreenerror:e.fullscreenerror},n={request:function(t){return new Promise((function(r,o){var i=function e(){n.off("fullscreenchange",e),r()};n.on("fullscreenchange",i);var u=(t=t||document.documentElement)[e.requestFullscreen]();u instanceof Promise&&u.then(i).catch(o)}))},exit:function(){return new Promise((function(t,r){if(n.isFullscreen){var o=function e(){n.off("fullscreenchange",e),t()};n.on("fullscreenchange",o);var i=document[e.exitFullscreen]();i instanceof Promise&&i.then(o).catch(r)}else t()}))},on:function(e,n){var r=t[e];r&&document.addEventListener(r,n)},off:function(e,n){var r=t[e];r&&document.removeEventListener(r,n)}};return Object.defineProperties(n,{isFullscreen:{get:function(){return Boolean(document[e.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[e.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[e.fullscreenEnabled])}}}),n}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach((function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=S(e);P(f(t),t,e).then((function(t){return T(t,e)})).catch(n)}catch(r){n(r)}}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;var t=function(t){if(s(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),r=0;r<n.length;r++)if(n[r].contentWindow===t.source){n[r].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}};window.addEventListener("message",t)}}());var R=C,I=function(e){var t=e.match(/(vimeo.com\/)(video\/)?(\d+)/);return t?t.pop():(console.warn("Could not extract Vimeo ID from url "+e),!1)},A=function(e){var t=e.url,n=(0,r.useState)(!0),o=n[0],i=n[1],u=(0,r.useState)(null),a=u[0],c=u[1],l=function(){a&&(o?(a.setMuted(!1),a.setVolume(1)):(a.setMuted(!0),a.setVolume(0)),i(!o))},s=(0,r.useRef)(null);return(0,r.useEffect)((function(){if(s.current){var e={controls:!1,byline:!1,portrait:!1,title:!1,muted:!0,loop:!0,autoplay:!0,id:I(t)},n=new R(s.current,e);return c(n),function(){n.destroy(),c(null)}}}),[s,t]),(0,r.useEffect)((function(){var e=function(e){32===!e.keyCode&&13===!e.keyCode||l()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[l]),r.createElement("div",{ref:s,className:"vimeo-player-module--player--fE+Gd",onClick:l})},W=function(e){var t=e.url,n=(0,r.useRef)(null),o=(0,r.useState)(null),i=o[0],u=o[1];return(0,r.useEffect)((function(){if(n.current){u(function(e){return r.createElement("source",{src:e,type:"video/mp4"})}(t))}}),[t]),r.createElement("video",{ref:n,autoPlay:!0,playsInline:!0,loop:!0,muted:!0,style:{width:"100%",height:"100%"},onClick:function(e){e.target.muted=!e.target.muted}},i)},q=function(e){var t=e.scale,n=e.aspectRatio,o=e.children;return r.createElement("div",{style:{width:100*t+"%",height:"auto",position:"relative",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},r.createElement("div",{style:{paddingTop:1/n*100+"%",position:"relative"}},r.createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}},o)))},L="vimeo",V=function(e){var t=e.sizes,n=e.mode,o=void 0===n?"by-viewport-width":n,i=(0,r.useState)(null),u=i[0],a=i[1],c=(0,r.useState)(null),l=c[0],s=c[1],f=(0,r.useState)(null),d=f[0],v=f[1],h=(0,r.useState)(null),p=h[0],m=h[1];return(0,r.useEffect)((function(){var e=function(){var e=function(){if("by-viewport-aspect-ratio"===o){var e=window.innerWidth/window.innerHeight,n=t.map((function(t){return t.aspectRatio=t.videoWidth/t.videoHeight,t.aspectRatioDelta=t.aspectRatio-e,t})).sort((function(e,t){return e.aspectRatioDelta<t.aspectRatioDelta?1:-1}));return console.log({sizesByNearestAspectRatio:n}),n[0]}var r=t.find((function(e){return window.innerWidth<=e.videoWidth}));return r||(r=t[t.length-1]),r}();s(function(e,t,n,r,o,i){var u=o/i,a=e/t,c=a/u,l=u>a?1:c;if(n&&r){var s=1/(n/e)*1,f=c*(1/(r/t)),d=Math.min(s,f);return l>d?d:l}return l}(e.videoWidth,e.videoHeight,e.cropSafeWidth,e.cropSafeHeight,window.innerWidth,window.innerHeight)),v(e.videoWidth/e.videoHeight),"native"===e.type?a(r.createElement(W,{url:e.url})):e.type===L&&a(r.createElement(A,{url:e.url}))},n=function(){p!==window.innerWidth&&(e(),m(window.innerWidth))};return window.addEventListener("resize",n),n(),window.removeEventListener("resize",e)}),[t,p]),r.createElement("div",{className:"video-page-module--page--kckIO"},r.createElement("div",{style:{height:"100%",overflow:"hidden"}},r.createElement(q,{scale:l,aspectRatio:d},u)))},z=n(7198),D=n(3572),H=function(e){var t=e.data,n=[{videoWidth:750,videoHeight:1334,cropSafeWidth:400,cropSafeHeight:800,url:"https://vimeo.com/674889833",type:L},{videoWidth:1024,videoHeight:576,cropSafeWidth:576,cropSafeHeight:576,url:"https://vimeo.com/674889802",type:L}];return r.createElement(z.Z,null,r.createElement(D.Z,null),r.createElement("h1",{className:"visually-hidden"},t.site.siteMetadata.title),r.createElement(V,{sizes:n}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-370e296d3b29e8e0831d.js.map