!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.churchtoolsClient=t():e.churchtoolsClient=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=31)}([function(e,t,n){"use strict";var r=n(8),o=n(28),i=Object.prototype.toString;function s(e){return"[object Array]"===i.call(e)}function u(e){return null!==e&&"object"==typeof e}function a(e){return"[object Function]"===i.call(e)}function c(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:u,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:a,isStream:function(e){return u(e)&&a(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)c(arguments[r],n);return t},extend:function(e,t,n){return c(t,function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,n){"use strict";(function(t){var r=n(0),o=n(25),i={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,a={adapter:("undefined"!=typeof XMLHttpRequest?u=n(7):void 0!==t&&(u=n(7)),u),transformRequest:[function(e,t){return o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){a.headers[e]={}}),r.forEach(["post","put","patch"],function(e){a.headers[e]=r.merge(i)}),e.exports=a}).call(this,n(26))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.toCorrectChurchToolsUrl=function(e){return/^http:.*/.test(e)?e:"https://"+function(e){return e.replace(/(^\w+:|^)\/\//,"")}(e).replace(/\/$/,"")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=!1;t.log=function(e,t){r&&(t?console.log("ChurchTools Client:",e,t):console.log("ChurchTools Client:",e))},t.activateLogging=function(){r=!0},t.deactivateLoggging=function(){r=!1}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";var r=n(23);e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},function(e,t,n){"use strict";var r=n(0),o=n(24),i=n(22),s=n(21),u=n(20),a=n(6),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(19);e.exports=function(e){return new Promise(function(t,f){var l=e.data,p=e.headers;r.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",g=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||u(e.url)||(d=new window.XDomainRequest,h="onload",g=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var m=e.auth.username||"",v=e.auth.password||"";p.Authorization="Basic "+c(m+":"+v)}if(d.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[h]=function(){if(d&&(4===d.readyState||g)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:e,request:d};o(t,f,r),d=null}},d.onerror=function(){f(a("Network Error",e,null,d)),d=null},d.ontimeout=function(){f(a("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var y=n(18),w=(e.withCredentials||u(e.url))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;w&&(p[e.xsrfHeaderName]=w)}if("setRequestHeader"in d&&r.forEach(p,function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),f(e),d=null)}),void 0===l&&(l=null),d.send(l)})}},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getAllPages=t.validChurchToolsUrl=t.onUnauthenticated=t.enableCrossOriginRequests=t.setUnauthorizedInterceptor=t.setBaseUrl=t.deleteApi=t.post=t.put=t.get=t.oldApi=void 0;var r,o=n(30),i=(r=o)&&r.__esModule?r:{default:r},s=n(3),u=n(2);var a=null,c=null,f=[];i.default.interceptors.request.use(function(e){return(0,s.log)("Starting Request",e),e}),i.default.interceptors.response.use(function(e){return(0,s.log)("Response:",e),e});var l=function(e){return e.data.data?e.data.data:e.data},p=function(e){return e.startsWith("http")?e:a+"/api"+e},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise(function(r,o){i.default.get(p(e),{params:t}).then(function(e){r(n?e:l(e))}).catch(function(e){o(e)})})},h=function e(t,n,r,o,i){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[];n.page=r,d(t,n,!0).then(function(u){s.push.apply(s,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(l(u))),u.data.meta.pagination.lastPage>r?e(t,n,r+1,o,i,s):o(s)}).catch(i)},g=function(){(0,s.log)("Notifying unauthenticated."),f.forEach(function(e){e()})},m=function(e,t,n,r,o,u){var a,c,f;(0,s.log)("Trying transparent relogin with login token"),d("/whoami",(a={login_token:t,user_id:n,no_url_rewrite:!0},c="X-retry-login",f=!0,c in a?Object.defineProperty(a,c,{value:f,enumerable:!0,configurable:!0,writable:!0}):a[c]=f,a)).then(function(){i.default.request(e).then(function(e){(0,s.log)("Successfully logged in again with login token"),r(e)}).catch(function(e){401===(e.response&&e.response.status)||e.response&&e.response.message&&"Session expired!"===e.response.data.message?((0,s.log)("Failed to login with login token",e),o(e),g()):o(u)})}).catch(function(){o(u)})},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;c&&i.default.interceptors.response.eject(c),c=i.default.interceptors.response.use(function(e){return"Session expired!"===e.data.message?(e.status=401,Promise.reject({response:e,config:e.config})):Promise.resolve(e)},function(n){return new Promise(function(r,o){n.config.params&&n.config.params["X-retry-login"]?(g(),o(n)):n.response&&401===n.response.status?((0,s.log)("Got 401 session expired",n),e?m(n.config,e,t,r,o,n):g()):o(n)})})};v();t.oldApi=function(e,t,n){return new Promise(function(r,o){i.default.request({url:a+"/?q="+e,method:"POST",params:function(e,t){return Object.assign({},t,{func:e})}(t,n)}).then(function(e){"success"===e.data.status?r(l(e)):o({response:e})}).catch(function(e){o(e)})})},t.get=d,t.put=function(e,t){return new Promise(function(n,r){i.default.put(p(e),t).then(function(e){n(l(e.data))}).catch(function(e){r(e)})})},t.post=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(n,r){i.default.post(p(e),t).then(function(e){n(l(e.data))}).catch(function(e){r(e)})})},t.deleteApi=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(n,r){i.default.delete(p(e),{data:t}).then(function(e){n(e.data)}).catch(function(e){r(e)})})},t.setBaseUrl=function(e){a=e.replace(/\/$/,"")},t.setUnauthorizedInterceptor=v,t.enableCrossOriginRequests=function(){i.default.defaults.withCredentials=!0},t.onUnauthenticated=function(e){f.push(e)},t.validChurchToolsUrl=function(e){var t=(0,u.toCorrectChurchToolsUrl)(e)+"/api/info";return new Promise(function(n,r){i.default.get(t).then(function(o){parseInt(o.data.build)>=31360?o.request.responseURL!==t&&o.request.responseURL?n(o.request.responseURL.slice(0,-"/api/info".length)):n(e):o.data.build?r({message:"The url "+e+" points to a ChurchTools Installation, but its version is too old. At least version 3.50.0 is required.",messageKey:"churchtools.url.invalidold",args:{url:e,minimalChurchToolsVersion:"3.50.0"}}):r({message:"The url "+e+" does not point to a valid ChurchTools installation.",messageKey:"churchtools.url.invalid",args:{url:e}})}).catch(function(t){t.status?((0,s.log)("Error on checking url",t),r({message:"The url "+e+" does not point to a valid ChurchTools installation.",messageKey:"churchtools.url.invalid",args:{url:e}})):((0,s.log)("Network error: Offline",t),r({message:"Could not validate the url. Either the url is wrong or there is a problem with the internet connection",messageKey:"churchtools.url.offline"}))})})},t.getAllPages=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.limit=100,new Promise(function(n,r){h(e,t,1,n,r)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getFilteredGroups=t.groupsForPerson=t.config=t.groupsAll=t.campuses=t.statuses=t.personRelationships=t.personTags=t.installationInfos=t.personMasterData=t.group=t.members=t.agenda=t.deleteDeviceId=t.undoServiceRequest=t.sendDeviceId=t.personsAll=t.persons=t.searchPersons=t.search=t.declineServiceRequest=t.acceptServiceRequest=t.serviceGroups=t.services=t.person=t.logintoken=t.masterdata=t.personEvents=t.whoami=t.logout=t.totp=t.login=void 0;var r=n(9),o=function(e){var t="/search?query="+e;return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach(function(e){t+="&domainTypes[]="+e}),(0,r.get)(t)},i=function e(t,n,o,i,s){var u=o.slice(0,99),a=t+"?",c=u.map(function(e){return"ids[]="+e}).join("&");(0,r.get)(a+c+"&limit=100").then(function(r){n=n.concat(r);var u=o.slice(100);u.length>0?e(t,n,u,i,s):i(n)}).catch(s)};t.login=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return(0,r.post)("/login",{username:e,password:t,rememberMe:n})},t.totp=function(e,t){return(0,r.post)("/login/totp",{code:e,personId:t})},t.logout=function(){return(0,r.oldApi)("login/ajax","logout")},t.whoami=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e?(0,r.get)("/whoami?loginstr="+e+"&id="+t+"&no_url_rewrite=true"):(0,r.get)("/whoami")},t.personEvents=function(e){return(0,r.get)("/persons/"+e+"/events")},t.masterdata=function(e){return(0,r.oldApi)(e+"/ajax","getMasterdata")},t.logintoken=function(e){return(0,r.get)("/persons/"+e+"/logintoken")},t.person=function(e){return(0,r.get)("/persons/"+e)},t.services=function(){return(0,r.get)("/services")},t.serviceGroups=function(){return(0,r.get)("/servicegroups")},t.acceptServiceRequest=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o={agreed:!0};return n&&(o.comment=n),(0,r.put)("/persons/"+e+"/servicerequests/"+t,o)},t.declineServiceRequest=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return n?(0,r.deleteApi)("/persons/"+e+"/servicerequests/"+t,{comment:n}):(0,r.deleteApi)("/persons/"+e+"/servicerequests/"+t)},t.search=o,t.searchPersons=function(e){return o(e,["person"])},t.persons=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;if(0===e.length)return[];var n=e.map(function(e){return"ids[]="+e}).join("&");return(0,r.get)("/persons?"+n+"&limit="+t)},t.personsAll=function(e){return new Promise(function(t,n){i("/persons",[],e,function(e){t(e)},function(e){return n(e)})})},t.sendDeviceId=function(e,t,n){return(0,r.put)("/persons/"+e+"/devices/"+t,{type:n})},t.undoServiceRequest=function(e,t){return(0,r.post)("/persons/"+e+"/servicerequests/"+t+"/undo")},t.deleteDeviceId=function(e,t){return(0,r.deleteApi)("/persons/"+e+"/devices/"+t)},t.agenda=function(e){return(0,r.get)("/events/"+e+"/agenda")},t.members=function(e){return(0,r.getAllPages)("/groups/"+e+"/members")},t.group=function(e){return(0,r.get)("/groups/"+e)},t.personMasterData=function(){return(0,r.get)("/masterdata/person")},t.installationInfos=function(){return(0,r.get)("/info")},t.personTags=function(e){return(0,r.get)("/persons/"+e+"/tags")},t.personRelationships=function(e){return(0,r.get)("/persons/"+e+"/relationships")},t.statuses=function(){return(0,r.get)("/statuses")},t.campuses=function(){return(0,r.get)("/campuses")},t.groupsAll=function(e){return null===e||void 0===e?(0,r.getAllPages)("/groups"):new Promise(function(t,n){i("/groups",[],e,function(e){t(e)},function(e){return n(e)})})},t.config=function(){return(0,r.get)("/config")},t.groupsForPerson=function(e){return(0,r.get)("/persons/"+e+"/groups")},t.getFilteredGroups=function(e,t,n,o,i,s){var u="/groups?";return e&&e.length&&(u+=e.map(function(e){return"campus_ids[]="+e}).join("&")),"number"==typeof t&&(u+="agegroup_id="+t),n&&n.length&&(u+=n.map(function(e){return"group_type_ids[]="+e}).join("&")),"boolean"==typeof o&&(u+="is_open_for_members="+o),"boolean"==typeof i&&(u+="is_public="+i),"number"==typeof s&&(u+="limit="+s),(0,r.get)(u)}},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";var r=n(4);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(t){e=t}),cancel:e}},e.exports=o},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t,n){"use strict";var r=n(0),o=n(15),i=n(5),s=n(1),u=n(14),a=n(13);function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.baseURL&&!u(e.url)&&(e.url=a(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return c(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,s){var u=[];u.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),r.isString(o)&&u.push("path="+o),r.isString(i)&&u.push("domain="+i),!0===s&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,n,i=String(e),s="",u=0,a=r;i.charAt(0|u)||(a="=",u%1);s+=a.charAt(63&t>>8-u%1*8)){if((n=i.charCodeAt(u+=.75))>255)throw new o;t=t<<8|n}return s}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r=n(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(r.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}}),s):s}},function(e,t,n){"use strict";var r=n(0);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var s=[];r.forEach(t,function(e,t){null!==e&&void 0!==e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))}))}),i=s.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},function(e,t,n){"use strict";var r=n(6);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var a,c=[],f=!1,l=-1;function p(){f&&a&&(f=!1,a.length?c=a.concat(c):l=-1,c.length&&d())}function d(){if(!f){var e=u(p);f=!0;for(var t=c.length;t;){for(a=c,c=[];++l<t;)a&&a[l].run();l=-1,t=c.length}a=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||f||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(1),o=n(0),i=n(17),s=n(16);function u(e){this.defaults=e,this.interceptors={request:new i,response:new i}}u.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),(e=o.merge(r,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},o.forEach(["delete","get","head","options"],function(e){u.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){u.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=u},function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},function(e,t,n){"use strict";var r=n(0),o=n(8),i=n(27),s=n(1);function u(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var a=u(s);a.Axios=i,a.create=function(e){return u(r.merge(s,e))},a.Cancel=n(4),a.CancelToken=n(12),a.isCancel=n(5),a.all=function(e){return Promise.all(e)},a.spread=n(11),e.exports=a,e.exports.default=a},function(e,t,n){e.exports=n(29)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.urlHelper=t.activateLogging=t.churchtoolsApi=t.churchtoolsClient=void 0;var r=u(n(9)),o=u(n(10)),i=n(3),s=u(n(2));function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.churchtoolsClient=r,t.churchtoolsApi=o,t.activateLogging=i.activateLogging,t.urlHelper=s}])});
//# sourceMappingURL=churchtools-client.js.map