(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[210],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!i(e[l[u]],a[l[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},5457:function(e,t,n){"use strict";n.d(t,{Z:function(){return Le}});var r,o,i,a,c=n(7294),u=n(9),l=n(5697),s=n.n(l),f=n(4839),p=n.n(f),d=n(2993),m=n.n(d),h=n(6494),y=n.n(h),b="bodyAttributes",g="htmlAttributes",v="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),C="cssText",E="href",A="http-equiv",O="innerHTML",S="itemprop",j="name",x="property",k="rel",I="src",P="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},_="defaultTitle",N="defer",M="encodeSpecialCharacters",H="onChangeClientState",R="titleTemplate",q=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),B=[T.NOSCRIPT,T.SCRIPT,T.STYLE],D="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=X(e,T.TITLE),n=X(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,_);return t||r||void 0},Q=function(e){return X(e,H)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&oe("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===k&&"canonical"===e[n].toLowerCase()||u===k&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==O&&c!==C&&c!==S||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=y()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ee=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},ne="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:n.g.requestAnimationFrame||ee,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:n.g.cancelAnimationFrame||te,oe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;le(T.BODY,r),le(T.HTML,o),ue(f,p);var d={baseTag:se(T.BASE,n),linkTags:se(T.LINK,i),metaTags:se(T.META,a),noscriptTags:se(T.NOSCRIPT,c),scriptTags:se(T.SCRIPT,l),styleTags:se(T.STYLE,s)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,m,h)},ce=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),le(T.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(D),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(D):n.getAttribute(D)!==a.join(",")&&n.setAttribute(D,a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===C)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(D,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},fe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[D]=!0,o=pe(n,r),[c.createElement(T.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=fe(n),i=ce(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+V(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case g:return{toComponent:function(){return pe(t)},toString:function(){return fe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[D]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===O||n===C){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===O||e===C)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+V(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:de(T.BASE,t,r),bodyAttributes:de(b,n,r),htmlAttributes:de(g,o,r),link:de(T.LINK,i,r),meta:de(T.META,a,r),noscript:de(T.NOSCRIPT,c,r),script:de(T.SCRIPT,u,r),style:de(T.STYLE,l,r),title:de(T.TITLE,{title:f,titleAttributes:p},r)}},he=p()((function(e){return{baseTag:G([E,P],e),bodyAttributes:$(b,e),defer:X(e,N),encode:X(e,M),htmlAttributes:$(g,e),linkTags:J(T.LINK,[k,E],e),metaTags:J(T.META,[j,w,A,x,S],e),noscriptTags:J(T.NOSCRIPT,[O],e),onChangeClientState:Q(e),scriptTags:J(T.SCRIPT,[I,O],e),styleTags:J(T.STYLE,[C],e),title:Z(e),titleAttributes:$(v,e)}}),(function(e){ie&&re(ie),e.defer?ie=ne((function(){ae(e,(function(){ie=null}))})):(ae(e),ie=null)}),me)((function(){return null})),ye=(o=he,a=i=function(e){function t(){return z(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case T.TITLE:return Y({},o,((t={})[r.type]=a,t.titleAttributes=Y({},i),t));case T.BODY:return Y({},o,{bodyAttributes:Y({},i)});case T.HTML:return Y({},o,{htmlAttributes:Y({},i)})}return Y({},o,((n={})[r.type]=Y({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(K(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=K(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},U(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ye.renderStatic=ye.rewind;var be=(0,u.createGlobalStyle)(["*{margin:0;padding:0;font-weight:normal;list-style:none;}*{font-family:'Spoqa Han Sans','sans-serif';}body{line-height:normal;color:",";}a{text-decoration:none;color:",";&:visited{color:inherit;}}html{@media ","{font-size:14px;}@media ","{font-size:12px;}}"],(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.black}),(function(e){return e.theme.device.tablet}),(function(e){return e.theme.device.mobile})),ge={colors:{white:"#ffffff",gray0:"#f8f8f8",gray1:"#efefef",gray2:"#d9d9d9",gray3:"#ababab",gray4:"#848484",gray5:"#747474",gray6:"#5d5d5d",gray7:"#444444",black:"#1d1d1d",blue:"#0064FF"},sizes:{xxxLarge:"2.5rem",xxLarge:"2rem",xLarge:"1.75rem",large:"1.5rem",medium:"1.25rem",regular:"1rem",small:"0.75rem",tiny:"0.5rem"},device:{tablet:"(max-width: 1280px)",mobile:"(max-width: 768px)"},inner:{desktop:"1200px",tablet:"750px",mobile:"95%"}},ve=n(6852),Te=n(5444),we=u.default.header.withConfig({displayName:"Header__Container",componentId:"sc-l8jipn-0"})(["padding:32px;@media ","{padding:16px 8px;}"],(function(e){return e.theme.device.mobile})),Ce=u.default.div.withConfig({displayName:"Header__Inner",componentId:"sc-l8jipn-1"})(["display:flex;align-items:center;justify-content:space-between;margin:0 auto;width:",";@media ","{width:",";}@media ","{width:",";}"],(function(e){return e.theme.inner.desktop}),(function(e){return e.theme.device.tablet}),(function(e){return e.theme.inner.tablet}),(function(e){return e.theme.device.mobile}),(function(e){return e.theme.inner.mobile})),Ee=u.default.h1.withConfig({displayName:"Header__Title",componentId:"sc-l8jipn-2"})(["font-size:",";font-weight:bold;color:",";"],(function(e){return e.theme.sizes.medium}),(function(e){return e.theme.colors.black})),Ae=u.default.p.withConfig({displayName:"Header__Description",componentId:"sc-l8jipn-3"})(["color:",";margin-top:8px;"],(function(e){return e.theme.colors.gray6})),Oe=u.default.div.withConfig({displayName:"Header__InnerItem",componentId:"sc-l8jipn-4"})([""]),Se=u.default.nav.withConfig({displayName:"Header__MenuWrapper",componentId:"sc-l8jipn-5"})([""]),je=u.default.ul.withConfig({displayName:"Header__Menus",componentId:"sc-l8jipn-6"})(["display:flex;& > * + *{margin-left:12px;}"]),xe=u.default.li.withConfig({displayName:"Header__Menu",componentId:"sc-l8jipn-7"})([""," &:hover{color:",";}"],(function(e){return e.selected?(0,u.css)(["color:",";"],(function(e){return e.theme.colors.black})):(0,u.css)(["color:",";"],(function(e){return e.theme.colors.gray4}))}),(function(e){return e.theme.colors.gray6})),ke=[{to:"/",name:"블로그"},{to:"https://github.com/Choi-Jinwoo",name:"소개"}],Ie=function(e){var t=e.path,n=(0,ve.Z)(),r=n.title,o=n.description,i=ke.map((function(e){return c.createElement(xe,{selected:t===e.to,key:e.to},c.createElement(Te.Link,{to:e.to},e.name))}));return c.createElement(we,null,c.createElement(Ce,null,c.createElement(Oe,null,c.createElement(Te.Link,{to:"/"},c.createElement(Ee,null,r)),c.createElement(Ae,null,o)),c.createElement(Oe,null,c.createElement(Se,null,c.createElement(je,null,i)))))},Pe=u.default.div.withConfig({displayName:"Layout__ContentWrapper",componentId:"sc-1up8qu8-0"})(["margin:0 auto;width:",";@media ","{width:",";}@media ","{width:",";}"],(function(e){return e.theme.inner.desktop}),(function(e){return e.theme.device.tablet}),(function(e){return e.theme.inner.tablet}),(function(e){return e.theme.device.mobile}),(function(e){return e.theme.inner.mobile})),Le=function(e){var t=e.children,n=e.path,r=e.title,o=e.description,i=void 0===o?"":o;return c.createElement(c.Fragment,null,c.createElement(u.ThemeProvider,{theme:ge},c.createElement(ye,{htmlAttributes:{lang:"ko"}},c.createElement("title",null,r),c.createElement("meta",{name:"description",content:i}),c.createElement("meta",{name:"google-site-verification",content:"vEvU7Ajs0Xs3jma64V2Ctvokx-e0s2q1xkofjRTUBnQ"})),c.createElement(be,null),c.createElement(Ie,{path:n}),c.createElement(Pe,null,t)))}},6852:function(e,t,n){"use strict";var r=n(5444);t.Z=function(){return(0,r.useStaticQuery)("3515552655").site.siteMetadata}}}]);
//# sourceMappingURL=4896e18c5147fc449bc2589d5135725c04e2ff03-fa4b24a6fdef47877d86.js.map