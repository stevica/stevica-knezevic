webpackJsonp([0x67ef26645b2a,60335399758886],{108:function(t,e){t.exports={data:{site:{siteMetadata:{title:"Stevica Knezevic"}}},layoutContext:{}}},202:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(2),o=r(i),a=n(206),c=r(a),M=n(108),T=r(M);e.default=function(t){return o.default.createElement(c.default,u({},t,T.default))},t.exports=e.default},98:function(t,e,n){function r(t){return null===t||void 0===t}function u(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length)&&("function"==typeof t.copy&&"function"==typeof t.slice&&!(t.length>0&&"number"!=typeof t[0]))}function i(t,e,n){var i,T;if(r(t)||r(e))return!1;if(t.prototype!==e.prototype)return!1;if(c(t))return!!c(e)&&(t=o.call(t),e=o.call(e),M(t,e,n));if(u(t)){if(!u(e))return!1;if(t.length!==e.length)return!1;for(i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0}try{var l=a(t),s=a(e)}catch(t){return!1}if(l.length!=s.length)return!1;for(l.sort(),s.sort(),i=l.length-1;i>=0;i--)if(l[i]!=s[i])return!1;for(i=l.length-1;i>=0;i--)if(T=l[i],!M(t[T],e[T],n))return!1;return typeof t==typeof e}var o=Array.prototype.slice,a=n(100),c=n(99),M=t.exports=function(t,e,n){return n||(n={}),t===e||(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():!t||!e||"object"!=typeof t&&"object"!=typeof e?n.strict?t===e:t==e:i(t,e,n))}},99:function(t,e){function n(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function r(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Object.prototype.hasOwnProperty.call(t,"callee")&&!Object.prototype.propertyIsEnumerable.call(t,"callee")||!1}var u="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();e=t.exports=u?n:r,e.supported=n,e.unsupported=r},100:function(t,e){function n(t){var e=[];for(var n in t)e.push(n);return e}e=t.exports="function"==typeof Object.keys?Object.keys:n,e.shim=n},102:function(t,e,n){var r;!function(){"use strict";var u=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:u,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:u&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:u&&!!window.screen};r=function(){return i}.call(e,n,e,t),!(void 0!==r&&(t.exports=r))}()},295:function(t,e){},126:function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}function u(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.Helmet=void 0;var c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},M=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),T=n(2),l=r(T),s=n(7),f=r(s),E=n(131),L=r(E),N=n(98),A=r(N),j=n(127),y=n(51),d=function(t){var e,n;return n=e=function(e){function n(){return i(this,n),o(this,e.apply(this,arguments))}return a(n,e),n.prototype.shouldComponentUpdate=function(t){return!(0,A.default)(this.props,t)},n.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case y.TAG_NAMES.SCRIPT:case y.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case y.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,u=t.newChildProps,i=t.nestedChildren;return c({},r,(e={},e[n.type]=[].concat(r[n.type]||[],[c({},u,this.mapNestedChildrenToProps(n,i))]),e))},n.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,u=t.newProps,i=t.newChildProps,o=t.nestedChildren;switch(r.type){case y.TAG_NAMES.TITLE:return c({},u,(e={},e[r.type]=o,e.titleAttributes=c({},i),e));case y.TAG_NAMES.BODY:return c({},u,{bodyAttributes:c({},i)});case y.TAG_NAMES.HTML:return c({},u,{htmlAttributes:c({},i)})}return c({},u,(n={},n[r.type]=c({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=c({},e);return Object.keys(t).forEach(function(e){var r;n=c({},n,(r={},r[e]=t[e],r))}),n},n.prototype.warnOnInvalidChildren=function(t,e){return!0},n.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return l.default.Children.forEach(t,function(t){if(t&&t.props){var i=t.props,o=i.children,a=u(i,["children"]),c=(0,j.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(t,o),t.type){case y.TAG_NAMES.LINK:case y.TAG_NAMES.META:case y.TAG_NAMES.NOSCRIPT:case y.TAG_NAMES.SCRIPT:case y.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:c,nestedChildren:o});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:c,nestedChildren:o})}}}),e=this.mapArrayTypeChildrenToProps(r,e)},n.prototype.render=function(){var e=this.props,n=e.children,r=u(e,["children"]),i=c({},r);return n&&(i=this.mapChildrenToProps(n,i)),l.default.createElement(t,i)},M(n,null,[{key:"canUseDOM",set:function(e){t.canUseDOM=e}}]),n}(l.default.Component),e.propTypes={base:f.default.object,bodyAttributes:f.default.object,children:f.default.oneOfType([f.default.arrayOf(f.default.node),f.default.node]),defaultTitle:f.default.string,defer:f.default.bool,encodeSpecialCharacters:f.default.bool,htmlAttributes:f.default.object,link:f.default.arrayOf(f.default.object),meta:f.default.arrayOf(f.default.object),noscript:f.default.arrayOf(f.default.object),onChangeClientState:f.default.func,script:f.default.arrayOf(f.default.object),style:f.default.arrayOf(f.default.object),title:f.default.string,titleAttributes:f.default.object,titleTemplate:f.default.string},e.defaultProps={defer:!0,encodeSpecialCharacters:!0},e.peek=t.peek,e.rewind=function(){var e=t.rewind();return e||(e=(0,j.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},n},p=function(){return null},S=(0,L.default)(j.reducePropsToState,j.handleClientStateChange,j.mapStateOnServer)(p),I=d(S);I.renderStatic=I.rewind,e.Helmet=I,e.default=I},51:function(t,e){e.__esModule=!0;var n=(e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(e.VALID_TAG_NAMES=Object.keys(n).map(function(t){return n[t]}),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(r).reduce(function(t,e){return t[r[e]]=e,t},{}),e.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},127:function(t,e,n){(function(t){function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n(2),a=r(o),c=n(5),M=r(c),T=n(51),l=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},s=function(t){var e=A(t,T.TAG_NAMES.TITLE),n=A(t,T.HELMET_PROPS.TITLE_TEMPLATE);if(n&&e)return n.replace(/%s/g,function(){return e});var r=A(t,T.HELMET_PROPS.DEFAULT_TITLE);return e||r||void 0},f=function(t){return A(t,T.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},E=function(t,e){return e.filter(function(e){return"undefined"!=typeof e[t]}).map(function(e){return e[t]}).reduce(function(t,e){return i({},t,e)},{})},L=function(t,e){return e.filter(function(t){return"undefined"!=typeof t[T.TAG_NAMES.BASE]}).map(function(t){return t[T.TAG_NAMES.BASE]}).reverse().reduce(function(e,n){if(!e.length)for(var r=Object.keys(n),u=0;u<r.length;u++){var i=r[u],o=i.toLowerCase();if(t.indexOf(o)!==-1&&n[o])return e.concat(n)}return e},[])},N=function(t,e,n){var r={};return n.filter(function(e){return!!Array.isArray(e[t])||("undefined"!=typeof e[t]&&I("Helmet: "+t+' should be of type "Array". Instead found type "'+u(e[t])+'"'),!1)}).map(function(e){return e[t]}).reverse().reduce(function(t,n){var u={};n.filter(function(t){for(var n=void 0,i=Object.keys(t),o=0;o<i.length;o++){var a=i[o],c=a.toLowerCase();e.indexOf(c)===-1||n===T.TAG_PROPERTIES.REL&&"canonical"===t[n].toLowerCase()||c===T.TAG_PROPERTIES.REL&&"stylesheet"===t[c].toLowerCase()||(n=c),e.indexOf(a)===-1||a!==T.TAG_PROPERTIES.INNER_HTML&&a!==T.TAG_PROPERTIES.CSS_TEXT&&a!==T.TAG_PROPERTIES.ITEM_PROP||(n=a)}if(!n||!t[n])return!1;var M=t[n].toLowerCase();return r[n]||(r[n]={}),u[n]||(u[n]={}),!r[n][M]&&(u[n][M]=!0,!0)}).reverse().forEach(function(e){return t.push(e)});for(var i=Object.keys(u),o=0;o<i.length;o++){var a=i[o],c=(0,M.default)({},r[a],u[a]);r[a]=c}return t},[]).reverse()},A=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},j=function(t){return{baseTag:L([T.TAG_PROPERTIES.HREF],t),bodyAttributes:E(T.ATTRIBUTE_NAMES.BODY,t),defer:A(t,T.HELMET_PROPS.DEFER),encode:A(t,T.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:E(T.ATTRIBUTE_NAMES.HTML,t),linkTags:N(T.TAG_NAMES.LINK,[T.TAG_PROPERTIES.REL,T.TAG_PROPERTIES.HREF],t),metaTags:N(T.TAG_NAMES.META,[T.TAG_PROPERTIES.NAME,T.TAG_PROPERTIES.CHARSET,T.TAG_PROPERTIES.HTTPEQUIV,T.TAG_PROPERTIES.PROPERTY,T.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:N(T.TAG_NAMES.NOSCRIPT,[T.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:f(t),scriptTags:N(T.TAG_NAMES.SCRIPT,[T.TAG_PROPERTIES.SRC,T.TAG_PROPERTIES.INNER_HTML],t),styleTags:N(T.TAG_NAMES.STYLE,[T.TAG_PROPERTIES.CSS_TEXT],t),title:s(t),titleAttributes:E(T.ATTRIBUTE_NAMES.TITLE,t)}},y=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){y(e)},0)}}(),d=function(t){return clearTimeout(t)},p="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||y:t.requestAnimationFrame||y,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||d:t.cancelAnimationFrame||d,I=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},g=null,D=function(t){g&&S(g),t.defer?g=p(function(){O(t,function(){g=null})}):(O(t),g=null)},O=function(t,e){var n=t.baseTag,r=t.bodyAttributes,u=t.htmlAttributes,i=t.linkTags,o=t.metaTags,a=t.noscriptTags,c=t.onChangeClientState,M=t.scriptTags,l=t.styleTags,s=t.title,f=t.titleAttributes;m(T.TAG_NAMES.BODY,r),m(T.TAG_NAMES.HTML,u),b(s,f);var E={baseTag:w(T.TAG_NAMES.BASE,n),linkTags:w(T.TAG_NAMES.LINK,i),metaTags:w(T.TAG_NAMES.META,o),noscriptTags:w(T.TAG_NAMES.NOSCRIPT,a),scriptTags:w(T.TAG_NAMES.SCRIPT,M),styleTags:w(T.TAG_NAMES.STYLE,l)},L={},N={};Object.keys(E).forEach(function(t){var e=E[t],n=e.newTags,r=e.oldTags;n.length&&(L[t]=n),r.length&&(N[t]=E[t].oldTags)}),e&&e(),c(t,L,N)},h=function(t){return Array.isArray(t)?t.join(""):t},b=function(t,e){"undefined"!=typeof t&&document.title!==t&&(document.title=h(t)),m(T.TAG_NAMES.TITLE,e)},m=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(T.HELMET_ATTRIBUTE),u=r?r.split(","):[],i=[].concat(u),o=Object.keys(e),a=0;a<o.length;a++){var c=o[a],M=e[c]||"";n.getAttribute(c)!==M&&n.setAttribute(c,M),u.indexOf(c)===-1&&u.push(c);var l=i.indexOf(c);l!==-1&&i.splice(l,1)}for(var s=i.length-1;s>=0;s--)n.removeAttribute(i[s]);u.length===i.length?n.removeAttribute(T.HELMET_ATTRIBUTE):n.getAttribute(T.HELMET_ATTRIBUTE)!==o.join(",")&&n.setAttribute(T.HELMET_ATTRIBUTE,o.join(","))}},w=function(t,e){var n=document.head||document.querySelector(T.TAG_NAMES.HEAD),r=n.querySelectorAll(t+"["+T.HELMET_ATTRIBUTE+"]"),u=Array.prototype.slice.call(r),i=[],o=void 0;return e&&e.length&&e.forEach(function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===T.TAG_PROPERTIES.INNER_HTML)n.innerHTML=e.innerHTML;else if(r===T.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var a="undefined"==typeof e[r]?"":e[r];n.setAttribute(r,a)}n.setAttribute(T.HELMET_ATTRIBUTE,"true"),u.some(function(t,e){return o=e,n.isEqualNode(t)})?u.splice(o,1):i.push(n)}),u.forEach(function(t){return t.parentNode.removeChild(t)}),i.forEach(function(t){return n.appendChild(t)}),{oldTags:u,newTags:i}},C=function(t){return Object.keys(t).reduce(function(e,n){var r="undefined"!=typeof t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r},"")},v=function(t,e,n,r){var u=C(n),i=h(e);return u?"<"+t+" "+T.HELMET_ATTRIBUTE+'="true" '+u+">"+l(i,r)+"</"+t+">":"<"+t+" "+T.HELMET_ATTRIBUTE+'="true">'+l(i,r)+"</"+t+">"},x=function(t,e,n){return e.reduce(function(e,r){var u=Object.keys(r).filter(function(t){return!(t===T.TAG_PROPERTIES.INNER_HTML||t===T.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(t,e){var u="undefined"==typeof r[e]?e:e+'="'+l(r[e],n)+'"';return t?t+" "+u:u},""),i=r.innerHTML||r.cssText||"",o=T.SELF_CLOSING_TAGS.indexOf(t)===-1;return e+"<"+t+" "+T.HELMET_ATTRIBUTE+'="true" '+u+(o?"/>":">"+i+"</"+t+">")},"")},_=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(function(e,n){return e[T.REACT_TAG_MAP[n]||n]=t[n],e},e)},z=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce(function(e,n){return e[T.HTML_TAG_MAP[n]||n]=t[n],e},e)},P=function(t,e,n){var r,u=(r={key:e},r[T.HELMET_ATTRIBUTE]=!0,r),i=_(n,u);return[a.default.createElement(T.TAG_NAMES.TITLE,i,e)]},R=function(t,e){return e.map(function(e,n){var r,u=(r={key:n},r[T.HELMET_ATTRIBUTE]=!0,r);return Object.keys(e).forEach(function(t){var n=T.REACT_TAG_MAP[t]||t;if(n===T.TAG_PROPERTIES.INNER_HTML||n===T.TAG_PROPERTIES.CSS_TEXT){var r=e.innerHTML||e.cssText;u.dangerouslySetInnerHTML={__html:r}}else u[n]=e[t]}),a.default.createElement(t,u)})},Y=function(t,e,n){switch(t){case T.TAG_NAMES.TITLE:return{toComponent:function(){return P(t,e.title,e.titleAttributes,n)},toString:function(){return v(t,e.title,e.titleAttributes,n)}};case T.ATTRIBUTE_NAMES.BODY:case T.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return _(e)},toString:function(){return C(e)}};default:return{toComponent:function(){return R(t,e)},toString:function(){return x(t,e,n)}}}},k=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,u=t.htmlAttributes,i=t.linkTags,o=t.metaTags,a=t.noscriptTags,c=t.scriptTags,M=t.styleTags,l=t.title,s=void 0===l?"":l,f=t.titleAttributes;return{base:Y(T.TAG_NAMES.BASE,e,r),bodyAttributes:Y(T.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:Y(T.ATTRIBUTE_NAMES.HTML,u,r),link:Y(T.TAG_NAMES.LINK,i,r),meta:Y(T.TAG_NAMES.META,o,r),noscript:Y(T.TAG_NAMES.NOSCRIPT,a,r),script:Y(T.TAG_NAMES.SCRIPT,c,r),style:Y(T.TAG_NAMES.STYLE,M,r),title:Y(T.TAG_NAMES.TITLE,{title:s,titleAttributes:f},r)}};e.convertReactPropstoHtmlAttributes=z,e.handleClientStateChange=D,e.mapStateOnServer=k,e.reducePropsToState=j,e.requestAnimationFrame=p,e.warn=I}).call(e,function(){return this}())},131:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=n(2),c=r(a),M=n(102),T=r(M),l=n(132),s=r(l);t.exports=function(t,e,n){function r(t){return t.displayName||t.name||"Component"}if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(M){function l(){E=t(f.map(function(t){return t.props})),L.canUseDOM?e(E):n&&(E=n(E))}if("function"!=typeof M)throw new Error("Expected WrappedComponent to be a React component.");var f=[],E=void 0,L=function(t){function e(){return u(this,e),i(this,t.apply(this,arguments))}return o(e,t),e.peek=function(){return E},e.rewind=function(){if(e.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=E;return E=void 0,f=[],t},e.prototype.shouldComponentUpdate=function(t){return!(0,s.default)(t,this.props)},e.prototype.componentWillMount=function(){f.push(this),l()},e.prototype.componentDidUpdate=function(){l()},e.prototype.componentWillUnmount=function(){var t=f.indexOf(this);f.splice(t,1),l()},e.prototype.render=function(){return c.default.createElement(M,this.props)},e}(a.Component);return L.displayName="SideEffect("+r(M)+")",L.canUseDOM=T.default.canUseDOM,L}}},132:function(t,e){t.exports=function(t,e,n,r){var u=n?n.call(r,t,e):void 0;if(void 0!==u)return!!u;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var i=Object.keys(t),o=Object.keys(e);if(i.length!==o.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(e),c=0;c<i.length;c++){var M=i[c];if(!a(M))return!1;var T=t[M],l=e[M];if(u=n?n.call(r,T,l,M):void 0,u===!1||void 0===u&&T!==l)return!1}return!0}},440:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InNpbXBsZWljb25zLWdpdGh1Yi1pY29uIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGUgaWQ9InNpbXBsZWljb25zLWdpdGh1Yi1pY29uIj5HaXRIdWIgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTEyIC4yOTdjLTYuNjMgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAzIDMuNDM4IDkuOCA4LjIwNSAxMS4zODUuNi4xMTMuODItLjI1OC44Mi0uNTc3IDAtLjI4NS0uMDEtMS4wNC0uMDE1LTIuMDQtMy4zMzguNzI0LTQuMDQyLTEuNjEtNC4wNDItMS42MUM0LjQyMiAxOC4wNyAzLjYzMyAxNy43IDMuNjMzIDE3LjdjLTEuMDg3LS43NDQuMDg0LS43MjkuMDg0LS43MjkgMS4yMDUuMDg0IDEuODM4IDEuMjM2IDEuODM4IDEuMjM2IDEuMDcgMS44MzUgMi44MDkgMS4zMDUgMy40OTUuOTk4LjEwOC0uNzc2LjQxNy0xLjMwNS43Ni0xLjYwNS0yLjY2NS0uMy01LjQ2Ni0xLjMzMi01LjQ2Ni01LjkzIDAtMS4zMS40NjUtMi4zOCAxLjIzNS0zLjIyLS4xMzUtLjMwMy0uNTQtMS41MjMuMTA1LTMuMTc2IDAgMCAxLjAwNS0uMzIyIDMuMyAxLjIzLjk2LS4yNjcgMS45OC0uMzk5IDMtLjQwNSAxLjAyLjAwNiAyLjA0LjEzOCAzIC40MDUgMi4yOC0xLjU1MiAzLjI4NS0xLjIzIDMuMjg1LTEuMjMuNjQ1IDEuNjUzLjI0IDIuODczLjEyIDMuMTc2Ljc2NS44NCAxLjIzIDEuOTEgMS4yMyAzLjIyIDAgNC42MS0yLjgwNSA1LjYyNS01LjQ3NSA1LjkyLjQyLjM2LjgxIDEuMDk2LjgxIDIuMjIgMCAxLjYwNi0uMDE1IDIuODk2LS4wMTUgMy4yODYgMCAuMzE1LjIxLjY5LjgyNS41N0MyMC41NjUgMjIuMDkyIDI0IDE3LjU5MiAyNCAxMi4yOTdjMC02LjYyNy01LjM3My0xMi0xMi0xMiIvPjwvc3ZnPg=="},441:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InNpbXBsZWljb25zLWluc3RhZ3JhbS1pY29uIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGUgaWQ9InNpbXBsZWljb25zLWluc3RhZ3JhbS1pY29uIj5JbnN0YWdyYW0gaWNvbjwvdGl0bGU+PHBhdGggZD0iTTEyIDBDOC43NCAwIDguMzMzLjAxNSA3LjA1My4wNzIgNS43NzUuMTMyIDQuOTA1LjMzMyA0LjE0LjYzYy0uNzg5LjMwNi0xLjQ1OS43MTctMi4xMjYgMS4zODRTLjkzNSAzLjM1LjYzIDQuMTRDLjMzMyA0LjkwNS4xMzEgNS43NzUuMDcyIDcuMDUzLjAxMiA4LjMzMyAwIDguNzQgMCAxMnMuMDE1IDMuNjY3LjA3MiA0Ljk0N2MuMDYgMS4yNzcuMjYxIDIuMTQ4LjU1OCAyLjkxMy4zMDYuNzg4LjcxNyAxLjQ1OSAxLjM4NCAyLjEyNi42NjcuNjY2IDEuMzM2IDEuMDc5IDIuMTI2IDEuMzg0Ljc2Ni4yOTYgMS42MzYuNDk5IDIuOTEzLjU1OEM4LjMzMyAyMy45ODggOC43NCAyNCAxMiAyNHMzLjY2Ny0uMDE1IDQuOTQ3LS4wNzJjMS4yNzctLjA2IDIuMTQ4LS4yNjIgMi45MTMtLjU1OC43ODgtLjMwNiAxLjQ1OS0uNzE4IDIuMTI2LTEuMzg0LjY2Ni0uNjY3IDEuMDc5LTEuMzM1IDEuMzg0LTIuMTI2LjI5Ni0uNzY1LjQ5OS0xLjYzNi41NTgtMi45MTMuMDYtMS4yOC4wNzItMS42ODcuMDcyLTQuOTQ3cy0uMDE1LTMuNjY3LS4wNzItNC45NDdjLS4wNi0xLjI3Ny0uMjYyLTIuMTQ5LS41NTgtMi45MTMtLjMwNi0uNzg5LS43MTgtMS40NTktMS4zODQtMi4xMjZDMjEuMzE5IDEuMzQ3IDIwLjY1MS45MzUgMTkuODYuNjNjLS43NjUtLjI5Ny0xLjYzNi0uNDk5LTIuOTEzLS41NThDMTUuNjY3LjAxMiAxNS4yNiAwIDEyIDB6bTAgMi4xNmMzLjIwMyAwIDMuNTg1LjAxNiA0Ljg1LjA3MSAxLjE3LjA1NSAxLjgwNS4yNDkgMi4yMjcuNDE1LjU2Mi4yMTcuOTYuNDc3IDEuMzgyLjg5Ni40MTkuNDIuNjc5LjgxOS44OTYgMS4zODEuMTY0LjQyMi4zNiAxLjA1Ny40MTMgMi4yMjcuMDU3IDEuMjY2LjA3IDEuNjQ2LjA3IDQuODVzLS4wMTUgMy41ODUtLjA3NCA0Ljg1Yy0uMDYxIDEuMTctLjI1NiAxLjgwNS0uNDIxIDIuMjI3LS4yMjQuNTYyLS40NzkuOTYtLjg5OSAxLjM4Mi0uNDE5LjQxOS0uODI0LjY3OS0xLjM4Ljg5Ni0uNDIuMTY0LTEuMDY1LjM2LTIuMjM1LjQxMy0xLjI3NC4wNTctMS42NDkuMDctNC44NTkuMDctMy4yMTEgMC0zLjU4Ni0uMDE1LTQuODU5LS4wNzQtMS4xNzEtLjA2MS0xLjgxNi0uMjU2LTIuMjM2LS40MjEtLjU2OS0uMjI0LS45Ni0uNDc5LTEuMzc5LS44OTktLjQyMS0uNDE5LS42OS0uODI0LS45LTEuMzgtLjE2NS0uNDItLjM1OS0xLjA2NS0uNDItMi4yMzUtLjA0NS0xLjI2LS4wNjEtMS42NDktLjA2MS00Ljg0NCAwLTMuMTk2LjAxNi0zLjU4Ni4wNjEtNC44NjEuMDYxLTEuMTcuMjU1LTEuODE0LjQyLTIuMjM0LjIxLS41Ny40NzktLjk2LjktMS4zODEuNDE5LS40MTkuODEtLjY4OSAxLjM3OS0uODk4LjQyLS4xNjYgMS4wNTEtLjM2MSAyLjIyMS0uNDIxIDEuMjc1LS4wNDUgMS42NS0uMDYgNC44NTktLjA2bC4wNDUuMDN6bTAgMy42NzhjLTMuNDA1IDAtNi4xNjIgMi43Ni02LjE2MiA2LjE2MiAwIDMuNDA1IDIuNzYgNi4xNjIgNi4xNjIgNi4xNjIgMy40MDUgMCA2LjE2Mi0yLjc2IDYuMTYyLTYuMTYyIDAtMy40MDUtMi43Ni02LjE2Mi02LjE2Mi02LjE2MnpNMTIgMTZjLTIuMjEgMC00LTEuNzktNC00czEuNzktNCA0LTQgNCAxLjc5IDQgNC0xLjc5IDQtNCA0em03Ljg0Ni0xMC40MDVjMCAuNzk1LS42NDYgMS40NC0xLjQ0IDEuNDQtLjc5NSAwLTEuNDQtLjY0Ni0xLjQ0LTEuNDQgMC0uNzk0LjY0Ni0xLjQzOSAxLjQ0LTEuNDM5Ljc5My0uMDAxIDEuNDQuNjQ1IDEuNDQgMS40Mzl6Ii8+PC9zdmc+"},442:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InNpbXBsZWljb25zLWxpbmtlZGluLWljb24iIHJvbGU9ImltZyIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZSBpZD0ic2ltcGxlaWNvbnMtbGlua2VkaW4taWNvbiI+TGlua2VkSW4gaWNvbjwvdGl0bGU+PHBhdGggZD0iTTIwLjQ0NyAyMC40NTJoLTMuNTU0di01LjU2OWMwLTEuMzI4LS4wMjctMy4wMzctMS44NTItMy4wMzctMS44NTMgMC0yLjEzNiAxLjQ0NS0yLjEzNiAyLjkzOXY1LjY2N0g5LjM1MVY5aDMuNDE0djEuNTYxaC4wNDZjLjQ3Ny0uOSAxLjYzNy0xLjg1IDMuMzctMS44NSAzLjYwMSAwIDQuMjY3IDIuMzcgNC4yNjcgNS40NTV2Ni4yODZ6TTUuMzM3IDcuNDMzYy0xLjE0NCAwLTIuMDYzLS45MjYtMi4wNjMtMi4wNjUgMC0xLjEzOC45Mi0yLjA2MyAyLjA2My0yLjA2MyAxLjE0IDAgMi4wNjQuOTI1IDIuMDY0IDIuMDYzIDAgMS4xMzktLjkyNSAyLjA2NS0yLjA2NCAyLjA2NXptMS43ODIgMTMuMDE5SDMuNTU1VjloMy41NjR2MTEuNDUyek0yMi4yMjUgMEgxLjc3MUMuNzkyIDAgMCAuNzc0IDAgMS43Mjl2MjAuNTQyQzAgMjMuMjI3Ljc5MiAyNCAxLjc3MSAyNGgyMC40NTFDMjMuMiAyNCAyNCAyMy4yMjcgMjQgMjIuMjcxVjEuNzI5QzI0IC43NzQgMjMuMiAwIDIyLjIyMiAwaC4wMDN6Ii8+PC9zdmc+"},443:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InNpbXBsZWljb25zLXR3aXR0ZXItaWNvbiIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlIGlkPSJzaW1wbGVpY29ucy10d2l0dGVyLWljb24iPlR3aXR0ZXIgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTIzLjk1NCA0LjU2OWMtLjg4NS4zODktMS44My42NTQtMi44MjUuNzc1IDEuMDE0LS42MTEgMS43OTQtMS41NzQgMi4xNjMtMi43MjMtLjk1MS41NTUtMi4wMDUuOTU5LTMuMTI3IDEuMTg0LS44OTYtLjk1OS0yLjE3My0xLjU1OS0zLjU5MS0xLjU1OS0yLjcxNyAwLTQuOTIgMi4yMDMtNC45MiA0LjkxNyAwIC4zOS4wNDUuNzY1LjEyNyAxLjEyNEM3LjY5MSA4LjA5NCA0LjA2NiA2LjEzIDEuNjQgMy4xNjFjLS40MjcuNzIyLS42NjYgMS41NjEtLjY2NiAyLjQ3NSAwIDEuNzEuODcgMy4yMTMgMi4xODggNC4wOTYtLjgwNy0uMDI2LTEuNTY2LS4yNDgtMi4yMjgtLjYxNnYuMDYxYzAgMi4zODUgMS42OTMgNC4zNzQgMy45NDYgNC44MjctLjQxMy4xMTEtLjg0OS4xNzEtMS4yOTYuMTcxLS4zMTQgMC0uNjE1LS4wMy0uOTE2LS4wODYuNjMxIDEuOTUzIDIuNDQ1IDMuMzc3IDQuNjA0IDMuNDE3LTEuNjggMS4zMTktMy44MDkgMi4xMDUtNi4xMDIgMi4xMDUtLjM5IDAtLjc3OS0uMDIzLTEuMTctLjA2NyAyLjE4OSAxLjM5NCA0Ljc2OCAyLjIwOSA3LjU1NyAyLjIwOSA5LjA1NCAwIDEzLjk5OS03LjQ5NiAxMy45OTktMTMuOTg2IDAtLjIwOSAwLS40Mi0uMDE1LS42My45NjEtLjY4OSAxLjgtMS41NiAyLjQ2LTIuNTQ4bC0uMDQ3LS4wMnoiLz48L3N2Zz4="},205:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var u=n(2),i=r(u),o=n(46),a=(r(o),n(440)),c=r(a),M=n(443),T=r(M),l=n(442),s=r(l),f=n(441),E=r(f),L=function(t){t.siteTitle;return i.default.createElement("div",{style:{marginBottom:"1.45rem"}},i.default.createElement("div",{style:{margin:"0 auto",maxWidth:960}},i.default.createElement("a",{href:"/"},i.default.createElement("div",{className:"logo"},"SK")),i.default.createElement("div",{className:"social-container"},i.default.createElement("a",{href:"https://github.com/stevica",target:"_blank"},i.default.createElement("img",{className:"social-icon",src:c.default,alt:"Github"})),i.default.createElement("a",{href:"https://twitter.com/knezevic84",target:"_blank"},i.default.createElement("img",{className:"social-icon",src:T.default,alt:"Twitter"})),i.default.createElement("a",{href:"https://www.linkedin.com/in/stevicaknezevic",target:"_blank"},i.default.createElement("img",{className:"social-icon",src:s.default,alt:"Linkedin"})),i.default.createElement("a",{href:"https://www.instagram.com/knezevicsteva",target:"_blank"},i.default.createElement("img",{className:"social-icon",src:E.default,alt:"Instagram"})))))};e.default=L,t.exports=e.default},296:function(t,e){},206:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.query=void 0;var u=n(2),i=r(u),o=n(7),a=r(o),c=n(126),M=r(c);n(296),n(298),n(295);var T=n(205),l=r(T),s=function(t){var e=t.children,n=t.data;return i.default.createElement("div",null,i.default.createElement(M.default,{title:n.site.siteMetadata.title,meta:[{name:"description",content:"I am Stevica Knezevic, web developer who intensively follows new things and keeps up with latest technologies."},{name:"keywords",content:"Tech Blog, JavaScript, Node.js, Docker, TypeScript, React, Angular, AWS, Novi Sad"}]}),i.default.createElement(l.default,{siteTitle:n.site.siteMetadata.title}),i.default.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},e()))};s.propTypes={children:a.default.func},e.default=s;e.query="** extracted graphql fragment **"},298:function(t,e){}});
//# sourceMappingURL=component---src-layouts-index-js-01af94aed86bbac8f0b9.js.map