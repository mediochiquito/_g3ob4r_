/*
 AngularJS v1.3.16
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(T,V,s){'use strict';function F(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.16/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Sa(b){if(null==b||Ta(b))return!1;var a="length"in Object(b)&&b.length;
return b.nodeType===ma&&a?!0:O(b)||w(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d,e;if(b)if(E(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(w(b)||Sa(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==q)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Jd(b,a,c){for(var d=Object.keys(b).sort(),
e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function pc(b){return function(a,c){b(c,a)}}function Kd(){return++rb}function qc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function x(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var l=f[g];b[l]=e[l]}}qc(b,a);return b}function aa(b){return parseInt(b,10)}function Pb(b,a){return x(Object.create(b),a)}function A(){}function na(b){return b}function ca(b){return function(){return b}}
function C(b){return"undefined"===typeof b}function y(b){return"undefined"!==typeof b}function I(b){return null!==b&&"object"===typeof b}function O(b){return"string"===typeof b}function Q(b){return"number"===typeof b}function ea(b){return"[object Date]"===Aa.call(b)}function E(b){return"function"===typeof b}function Ua(b){return"[object RegExp]"===Aa.call(b)}function Ta(b){return b&&b.window===b}function Va(b){return b&&b.$evalAsync&&b.$watch}function Wa(b){return"boolean"===typeof b}function rc(b){return!(!b||
!(b.nodeName||b.prop&&b.attr&&b.find))}function Ld(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function sa(b){return L(b.nodeName||b[0]&&b[0].nodeName)}function Xa(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Ba(b,a,c,d){if(Ta(b)||Va(b))throw Ja("cpws");if(a){if(b===a)throw Ja("cpi");c=c||[];d=d||[];if(I(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(w(b))for(var f=a.length=0;f<b.length;f++)e=Ba(b[f],null,c,d),I(b[f])&&(c.push(b[f]),
d.push(e)),a.push(e);else{var g=a.$$hashKey;w(a)?a.length=0:q(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Ba(b[f],null,c,d),I(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);qc(a,g)}}else if(a=b)w(b)?a=Ba(b,[],c,d):ea(b)?a=new Date(b.getTime()):Ua(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):I(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Ba(b,e,c,d));return a}function oa(b,a){if(w(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(I(b))for(c in a=
a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function fa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(w(b)){if(!w(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!fa(b[d],a[d]))return!1;return!0}}else{if(ea(b))return ea(a)?fa(b.getTime(),a.getTime()):!1;if(Ua(b))return Ua(a)?b.toString()==a.toString():!1;if(Va(b)||Va(a)||Ta(b)||Ta(a)||w(a)||ea(a)||Ua(a))return!1;c={};for(d in b)if("$"!==
d.charAt(0)&&!E(b[d])){if(!fa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!E(a[d]))return!1;return!0}return!1}function Ya(b,a,c){return b.concat(Za.call(a,c))}function sc(b,a){var c=2<arguments.length?Za.call(arguments,2):[];return!E(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Ya(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Md(b,a){var c=a;"string"===typeof b&&
"$"===b.charAt(0)&&"$"===b.charAt(1)?c=s:Ta(a)?c="$WINDOW":a&&V===a?c="$DOCUMENT":Va(a)&&(c="$SCOPE");return c}function $a(b,a){if("undefined"===typeof b)return s;Q(a)||(a=a?2:null);return JSON.stringify(b,Md,a)}function tc(b){return O(b)?JSON.parse(b):b}function ta(b){b=z(b).clone();try{b.empty()}catch(a){}var c=z("<div>").append(b).html();try{return b[0].nodeType===ab?L(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+L(b)})}catch(d){return L(c)}}function uc(b){try{return decodeURIComponent(b)}catch(a){}}
function vc(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=uc(c[0]),y(d)&&(b=y(c[1])?uc(c[1]):!0,wc.call(a,d)?w(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Qb(b){var a=[];q(b,function(b,d){w(b)?q(b,function(b){a.push(Ca(d,!0)+(!0===b?"":"="+Ca(b,!0)))}):a.push(Ca(d,!0)+(!0===b?"":"="+Ca(b,!0)))});return a.length?a.join("&"):""}function sb(b){return Ca(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ca(b,a){return encodeURIComponent(b).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Nd(b,a){var c,d,e=tb.length;b=z(b);for(d=0;d<e;++d)if(c=tb[d]+a,O(c=b.attr(c)))return c;return null}function Od(b,a){var c,d,e={};q(tb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});q(tb,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Nd(c,"strict-di"),
a(c,d?[d]:[],e))}function xc(b,a,c){I(c)||(c={});c=x({strictDi:!1},c);var d=function(){b=z(b);if(b.injector()){var d=b[0]===V?"document":ta(b);throw Ja("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=bb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;T&&e.test(T.name)&&(c.debugInfoEnabled=!0,T.name=T.name.replace(e,""));if(T&&!f.test(T.name))return d();T.name=T.name.replace(f,"");ba.resumeBootstrap=function(b){q(b,function(b){a.push(b)});return d()};E(ba.resumeDeferredBootstrap)&&ba.resumeDeferredBootstrap()}function Pd(){T.name="NG_ENABLE_DEBUG_INFO!"+T.name;T.location.reload()}function Qd(b){b=ba.element(b).injector();if(!b)throw Ja("test");return b.get("$$testability")}
function yc(b,a){a=a||"_";return b.replace(Rd,function(b,d){return(d?a:"")+b.toLowerCase()})}function Sd(){var b;zc||((pa=T.jQuery)&&pa.fn.on?(z=pa,x(pa.fn,{scope:Ka.scope,isolateScope:Ka.isolateScope,controller:Ka.controller,injector:Ka.injector,inheritedData:Ka.inheritedData}),b=pa.cleanData,pa.cleanData=function(a){var c;if(Rb)Rb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=pa._data(e,"events"))&&c.$destroy&&pa(e).triggerHandler("$destroy");b(a)}):z=R,ba.element=z,zc=!0)}function Sb(b,a,c){if(!b)throw Ja("areq",
a||"?",c||"required");return b}function La(b,a,c){c&&w(b)&&(b=b[b.length-1]);Sb(E(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ma(b,a){if("hasOwnProperty"===b)throw Ja("badname",a);}function Ac(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&E(b)?sc(e,b):b}function ub(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return z(c)}function ga(){return Object.create(null)}
function Td(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=F("$injector"),d=F("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||F;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return u}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],n=a("$injector","invoke","push",d),u={_invokeQueue:b,_configBlocks:d,
_runBlocks:e,requires:g,name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:n,run:function(a){e.push(a);return this}};h&&n(h);return u})}})}function Ud(b){x(b,{bootstrap:xc,copy:Ba,extend:x,equals:fa,
element:z,forEach:q,injector:bb,noop:A,bind:sc,toJson:$a,fromJson:tc,identity:na,isUndefined:C,isDefined:y,isString:O,isFunction:E,isObject:I,isNumber:Q,isElement:rc,isArray:w,version:Vd,isDate:ea,lowercase:L,uppercase:vb,callbacks:{counter:0},getTestability:Qd,$$minErr:F,$$csp:cb,reloadWithDebugInfo:Pd});db=Td(T);try{db("ngLocale")}catch(a){db("ngLocale",[]).provider("$locale",Wd)}db("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Xd});a.provider("$compile",Bc).directive({a:Yd,
input:Cc,textarea:Cc,form:Zd,script:$d,select:ae,style:be,option:ce,ngBind:de,ngBindHtml:ee,ngBindTemplate:fe,ngClass:ge,ngClassEven:he,ngClassOdd:ie,ngCloak:je,ngController:ke,ngForm:le,ngHide:me,ngIf:ne,ngInclude:oe,ngInit:pe,ngNonBindable:qe,ngPluralize:re,ngRepeat:se,ngShow:te,ngStyle:ue,ngSwitch:ve,ngSwitchWhen:we,ngSwitchDefault:xe,ngOptions:ye,ngTransclude:ze,ngModel:Ae,ngList:Be,ngChange:Ce,pattern:Dc,ngPattern:Dc,required:Ec,ngRequired:Ec,minlength:Fc,ngMinlength:Fc,maxlength:Gc,ngMaxlength:Gc,
ngValue:De,ngModelOptions:Ee}).directive({ngInclude:Fe}).directive(wb).directive(Hc);a.provider({$anchorScroll:Ge,$animate:He,$browser:Ie,$cacheFactory:Je,$controller:Ke,$document:Le,$exceptionHandler:Me,$filter:Ic,$interpolate:Ne,$interval:Oe,$http:Pe,$httpBackend:Qe,$location:Re,$log:Se,$parse:Te,$rootScope:Ue,$q:Ve,$$q:We,$sce:Xe,$sceDelegate:Ye,$sniffer:Ze,$templateCache:$e,$templateRequest:af,$$testability:bf,$timeout:cf,$window:df,$$rAF:ef,$$asyncCallback:ff,$$jqLite:gf})}])}function eb(b){return b.replace(hf,
function(a,b,d,e){return e?d.toUpperCase():d}).replace(jf,"Moz$1")}function Jc(b){b=b.nodeType;return b===ma||!b||9===b}function Kc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Tb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(kf.exec(b)||["",""])[1].toLowerCase();d=ha[d]||ha._default;c.innerHTML=d[1]+b.replace(lf,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Ya(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a)});
return e}function R(b){if(b instanceof R)return b;var a;O(b)&&(b=U(b),a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Ub("nosel");return new R(b)}if(a){a=V;var c;b=(c=mf.exec(b))?[a.createElement(c[1])]:(c=Kc(b,a))?c.childNodes:[]}Lc(this,b)}function Vb(b){return b.cloneNode(!0)}function xb(b,a){a||yb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)yb(c[d])}function Mc(b,a,c,d){if(y(d))throw Ub("offargs");var e=(d=zb(b))&&d.events,f=d&&d.handle;if(f)if(a)q(a.split(" "),
function(a){if(y(c)){var d=e[a];Xa(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function yb(b,a){var c=b.ng339,d=c&&Ab[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Mc(b)),delete Ab[c],b.ng339=s))}function zb(b,a){var c=b.ng339,c=c&&Ab[c];a&&!c&&(b.ng339=c=++nf,c=Ab[c]={events:{},data:{},handle:s});return c}function Wb(b,a,c){if(Jc(b)){var d=y(c),e=!d&&a&&!I(a),
f=!a;b=(b=zb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];x(b,a)}}}function Bb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Cb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",U((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+U(a)+" "," ")))})}function Db(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");
q(a.split(" "),function(a){a=U(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",U(c))}}function Lc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Nc(b,a){return Eb(b,"$"+(a||"ngController")+"Controller")}function Eb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=w(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=z.data(b,a[d]))!==s)return c;b=b.parentNode||
11===b.nodeType&&b.host}}function Oc(b){for(xb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Pc(b,a){a||xb(b);var c=b.parentNode;c&&c.removeChild(b)}function of(b,a){a=a||T;if("complete"===a.document.readyState)a.setTimeout(b);else z(a).on("load",b)}function Qc(b,a){var c=Fb[a.toLowerCase()];return c&&Rc[sa(b)]&&c}function pf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Sc[a]}function qf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=
a[e||c.type],g=f?f.length:0;if(g){if(C(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=oa(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function gf(){this.$get=function(){return x(R,{hasClass:function(b,a){b.attr&&(b=b[0]);
return Bb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return Db(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return Cb(b,a)}})}}function Na(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Kd)():c+":"+b}function fb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}q(b,this.put,this)}function rf(b){return(b=b.toString().replace(Tc,"").match(Uc))?"function("+(b[1]||"").replace(/[\s\r\n]+/,
" ")+")":"fn"}function bb(b,a){function c(a){return function(b,c){if(I(b))q(b,pc(a));else return a(b,c)}}function d(a,b){Ma(a,"service");if(E(b)||w(b))b=n.instantiate(b);if(!b.$get)throw Da("pget",a);return r[a+"Provider"]=b}function e(a,b){return function(){var c=v.invoke(b,this);if(C(c))throw Da("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;q(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=n.get(e[0]);f[e[1]].apply(f,
e[2])}}if(!m.get(a)){m.put(a,!0);try{O(a)?(c=db(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):E(a)?b.push(n.invoke(a)):w(a)?b.push(n.invoke(a)):La(a,"module")}catch(e){throw w(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Da("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Da("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),
b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var k=[],l=bb.$$annotate(b,a,g),h,n,m;n=0;for(h=l.length;n<h;n++){m=l[n];if("string"!==typeof m)throw Da("itkn",m);k.push(f&&f.hasOwnProperty(m)?f[m]:d(m,g))}w(b)&&(b=b[h]);return b.apply(c,k)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((w(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return I(a)||E(a)?a:d},get:d,annotate:bb.$$annotate,has:function(a){return r.hasOwnProperty(a+
"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],m=new fb([],!0),r={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,ca(b),!1)}),constant:c(function(a,b){Ma(a,"constant");r[a]=b;u[a]=b}),decorator:function(a,b){var c=n.get(a+"Provider"),d=c.$get;c.$get=function(){var a=v.invoke(d,c);return v.invoke(b,null,{$delegate:a})}}}},n=r.$injector=h(r,function(a,b){ba.isString(b)&&k.push(b);
throw Da("unpr",k.join(" <- "));}),u={},v=u.$injector=h(u,function(a,b){var c=n.get(a+"Provider",b);return v.invoke(c.$get,c,s,a)});q(g(b),function(a){v.invoke(a||A)});return v}function Ge(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===sa(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;E(c)?c=c():rc(c)?(c=c[0],c="fixed"!==
a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Q(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||of(function(){d.$evalAsync(g)})});return g}]}function ff(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:
function(b){return a(b,0,!1)}}]}function sf(b,a,c,d){function e(a){try{a.apply(null,Za.call(arguments,1))}finally{if(p--,0===p)for(;H.length;)try{H.pop()()}catch(b){c.error(b)}}}function f(a,b){(function Xb(){q(J,function(a){a()});B=b(Xb,a)})()}function g(){h();l()}function h(){a:{try{M=u.state;break a}catch(a){}M=void 0}M=C(M)?null:M;fa(M,S)&&(M=S);S=M}function l(){if(G!==m.url()||D!==M)G=m.url(),D=M,q($,function(a){a(m.url(),M)})}function k(a){try{return decodeURIComponent(a)}catch(b){return a}}
var m=this,r=a[0],n=b.location,u=b.history,v=b.setTimeout,P=b.clearTimeout,t={};m.isMock=!1;var p=0,H=[];m.$$completeOutstandingRequest=e;m.$$incOutstandingRequestCount=function(){p++};m.notifyWhenNoOutstandingRequests=function(a){q(J,function(a){a()});0===p?a():H.push(a)};var J=[],B;m.addPollFn=function(a){C(B)&&f(100,v);J.push(a);return a};var M,D,G=n.href,N=a.find("base"),Y=null;h();D=M;m.url=function(a,c,e){C(e)&&(e=null);n!==b.location&&(n=b.location);u!==b.history&&(u=b.history);if(a){var f=
D===e;if(G===a&&(!d.history||f))return m;var g=G&&Ea(G)===Ea(a);G=a;D=e;!d.history||g&&f?(g||(Y=a),c?n.replace(a):g?(c=n,e=a.indexOf("#"),a=-1===e?"":a.substr(e+1),c.hash=a):n.href=a):(u[c?"replaceState":"pushState"](e,"",a),h(),D=M);return m}return Y||n.href.replace(/%27/g,"'")};m.state=function(){return M};var $=[],W=!1,S=null;m.onUrlChange=function(a){if(!W){if(d.history)z(b).on("popstate",g);z(b).on("hashchange",g);W=!0}$.push(a);return a};m.$$checkUrlChange=l;m.baseHref=function(){var a=N.attr("href");
return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var Fa={},y="",hb=m.baseHref();m.cookies=function(a,b){var d,e,f,g;if(a)b===s?r.cookie=encodeURIComponent(a)+"=;path="+hb+";expires=Thu, 01 Jan 1970 00:00:00 GMT":O(b)&&(d=(r.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+hb).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(r.cookie!==y)for(y=r.cookie,d=y.split("; "),Fa={},f=0;f<d.length;f++)e=d[f],g=
e.indexOf("="),0<g&&(a=k(e.substring(0,g)),Fa[a]===s&&(Fa[a]=k(e.substring(g+1))));return Fa}};m.defer=function(a,b){var c;p++;c=v(function(){delete t[c];e(a)},b||0);t[c]=!0;return c};m.defer.cancel=function(a){return t[a]?(delete t[a],P(a),e(A),!0):!1}}function Ie(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new sf(b,d,a,c)}]}function Je(){this.$get=function(){function b(b,d){function e(a){a!=r&&(n?n==a&&(n=a.n):n=a,f(a.n,a.p),f(a,r),r=a,r.n=null)}function f(a,b){a!=
b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw F("$cacheFactory")("iid",b);var g=0,h=x({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,m={},r=null,n=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}if(!C(b))return a in l||g++,l[a]=b,g>k&&this.remove(n.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;b==r&&(r=b.p);b==n&&(n=b.n);f(b.n,b.p);delete m[a]}delete l[a];
g--},removeAll:function(){l={};g=0;m={};r=n=null},destroy:function(){m=h=l=null;delete a[b]},info:function(){return x({},h,{size:g})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function $e(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function Bc(b,a){function c(a,b){var c=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,d={};q(a,function(a,e){var f=a.match(c);if(!f)throw da("iscp",b,e,a);d[e]={mode:f[1][0],collection:"*"===
f[2],optional:"?"===f[3],attrName:f[4]||e}});return d}function d(a){var b=a.charAt(0);if(!b||b!==L(b))throw da("baddir",a);return a}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,g=/(([\w\-]+)(?:\:([^;]+))?;?)/,h=Ld("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive=function n(a,f){Ma(a,"directive");O(a)?(d(a),Sb(f,"directiveFactory"),e.hasOwnProperty(a)||(e[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,d){var f=[];
q(e[a],function(e,g){try{var h=b.invoke(e);E(h)?h={compile:ca(h)}:!h.compile&&h.link&&(h.compile=ca(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";I(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(l){d(l)}});return f}])),e[a].push(f)):q(a,pc(n));return this};this.aHrefSanitizationWhitelist=function(b){return y(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=
function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var m=!0;this.debugInfoEnabled=function(a){return y(a)?(m=a,this):m};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,d,t,p,H,J,B,M,D){function G(a,b){try{a.addClass(b)}catch(c){}}function N(a,b,c,d,e){a instanceof z||(a=z(a));q(a,function(b,c){b.nodeType==ab&&b.nodeValue.match(/\S+/)&&
(a[c]=z(b).wrap("<span></span>").parent()[0])});var f=Y(a,b,a,c,d,e);N.$$addScopeClass(a);var g=null;return function(b,c,d){Sb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==sa(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?z(T(g,z("<div>").append(a).html())):c?Ka.clone.call(a):a;if(h)for(var l in h)d.data("$"+l+"Controller",h[l].instance);N.$$addScopeInfo(d,
b);c&&c(d,b);f&&f(b,d,d,e);return d}}function Y(a,b,c,d,e,f){function g(a,c,d,e){var f,l,k,n,m,v,u;if(p)for(u=Array(c.length),n=0;n<h.length;n+=3)f=h[n],u[f]=c[f];else u=c;n=0;for(m=h.length;n<m;)l=u[h[n++]],c=h[n++],f=h[n++],c?(c.scope?(k=a.$new(),N.$$addScopeInfo(z(l),k)):k=a,v=c.transcludeOnThisElement?$(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?$(a,b):null,c(f,k,l,d,v)):f&&f(a,l.childNodes,s,e)}for(var h=[],l,k,n,m,p,v=0;v<a.length;v++){l=new $b;k=
W(a[v],[],l,0===v?d:s,e);(f=k.length?y(k,a[v],l,b,c,null,[],[],f):null)&&f.scope&&N.$$addScopeClass(l.$$element);l=f&&f.terminal||!(n=a[v].childNodes)||!n.length?null:Y(n,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(v,f,l),m=!0,p=p||f;f=null}return m?g:null}function $(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function W(a,b,c,d,e){var h=
c.$attr,l;switch(a.nodeType){case ma:C(b,va(sa(a)),"E",d,e);for(var k,n,m,p=a.attributes,v=0,u=p&&p.length;v<u;v++){var B=!1,P=!1;k=p[v];l=k.name;n=U(k.value);k=va(l);if(m=ac.test(k))l=l.replace(Wc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var M=k.replace(/(Start|End)$/,"");F(M)&&k===M+"Start"&&(B=l,P=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=va(l.toLowerCase());h[k]=l;if(m||!c.hasOwnProperty(k))c[k]=n,Qc(a,k)&&(c[k]=!0);R(a,b,n,k,m);C(b,k,"A",d,e,B,P)}a=
a.className;I(a)&&(a=a.animVal);if(O(a)&&""!==a)for(;l=g.exec(a);)k=va(l[2]),C(b,k,"C",d,e)&&(c[k]=U(l[3])),a=a.substr(l.index+l[0].length);break;case ab:ia(b,a.nodeValue);break;case 8:try{if(l=f.exec(a.nodeValue))k=va(l[1]),C(b,k,"M",d,e)&&(c[k]=U(l[2]))}catch(t){}}b.sort(xa);return b}function S(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw da("uterdir",b,c);a.nodeType==ma&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);
return z(d)}function Fa(a,b,c){return function(d,e,f,g,h){e=S(e[0],b,c);return a(d,e,f,g,h)}}function y(a,d,e,f,g,h,k,n,m){function B(a,b,c,d){if(a){c&&(a=Fa(a,c,d));a.require=K.require;a.directiveName=ia;if(J===K||K.$$isolateScope)a=X(a,{isolateScope:!0});k.push(a)}if(b){c&&(b=Fa(b,c,d));b.require=K.require;b.directiveName=ia;if(J===K||K.$$isolateScope)b=X(b,{isolateScope:!0});n.push(b)}}function P(a,b,c,d){var e,f="data",g=!1,h=c,k;if(O(b)){k=b.match(l);b=b.substring(k[0].length);k[3]&&(k[1]?k[3]=
null:k[1]=k[3]);"^"===k[1]?f="inheritedData":"^^"===k[1]&&(f="inheritedData",h=c.parent());"?"===k[2]&&(g=!0);e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||h[f]("$"+b+"Controller");if(!e&&!g)throw da("ctreq",b,a);return e||null}w(b)&&(e=[],q(b,function(b){e.push(P(a,b,c,d))}));return e}function M(a,c,f,g,h){function l(a,b,c){var d;Va(a)||(c=b,b=a,a=s);A&&(d=G);c||(c=A?S.parent():S);return h(a,b,d,c,Zb)}var m,v,B,D,G,ib,S,W;d===f?(W=e,S=e.$$element):(S=z(f),W=new $b(S,e));J&&(D=c.$new(!0));h&&
(ib=l,ib.$$boundTransclude=h);H&&($={},G={},q(H,function(a){var b={$scope:a===J||a.$$isolateScope?D:c,$element:S,$attrs:W,$transclude:ib};B=a.controller;"@"==B&&(B=W[a.name]);b=p(B,b,!0,a.controllerAs);G[a.name]=b;A||S.data("$"+a.name+"Controller",b.instance);$[a.name]=b}));if(J){N.$$addScopeInfo(S,D,!0,!(Y&&(Y===J||Y===J.$$originalDirective)));N.$$addScopeClass(S,!0);g=$&&$[J.name];var ua=D;g&&g.identifier&&!0===J.bindToController&&(ua=g.instance);q(D.$$isolateBindings=J.$$isolateBindings,function(a,
d){var e=a.attrName,f=a.optional,g,h,k,l;switch(a.mode){case "@":W.$observe(e,function(a){ua[d]=a});W.$$observers[e].$$scope=c;W[e]&&(ua[d]=b(W[e])(c));break;case "=":if(f&&!W[e])break;h=t(W[e]);l=h.literal?fa:function(a,b){return a===b||a!==a&&b!==b};k=h.assign||function(){g=ua[d]=h(c);throw da("nonassign",W[e],J.name);};g=ua[d]=h(c);f=function(a){l(a,ua[d])||(l(a,g)?k(c,a=ua[d]):ua[d]=a);return g=a};f.$stateful=!0;f=a.collection?c.$watchCollection(W[e],f):c.$watch(t(W[e],f),null,h.literal);D.$on("$destroy",
f);break;case "&":h=t(W[e]),ua[d]=function(a){return h(c,a)}}})}$&&(q($,function(a){a()}),$=null);g=0;for(m=k.length;g<m;g++)v=k[g],Xc(v,v.isolateScope?D:c,S,W,v.require&&P(v.directiveName,v.require,S,G),ib);var Zb=c;J&&(J.template||null===J.templateUrl)&&(Zb=D);a&&a(Zb,f.childNodes,s,h);for(g=n.length-1;0<=g;g--)v=n[g],Xc(v,v.isolateScope?D:c,S,W,v.require&&P(v.directiveName,v.require,S,G),ib)}m=m||{};for(var D=-Number.MAX_VALUE,G,H=m.controllerDirectives,$,J=m.newIsolateScopeDirective,Y=m.templateDirective,
Ga=m.nonTlbTranscludeDirective,C=!1,Yb=!1,A=m.hasElementTranscludeDirective,x=e.$$element=z(d),K,ia,F,gb=f,xa,qa=0,L=a.length;qa<L;qa++){K=a[qa];var R=K.$$start,jb=K.$$end;R&&(x=S(d,R,jb));F=s;if(D>K.priority)break;if(F=K.scope)K.templateUrl||(I(F)?(Oa("new/isolated scope",J||G,K,x),J=K):Oa("new/isolated scope",J,K,x)),G=G||K;ia=K.name;!K.templateUrl&&K.controller&&(F=K.controller,H=H||{},Oa("'"+ia+"' controller",H[ia],K,x),H[ia]=K);if(F=K.transclude)C=!0,K.$$tlb||(Oa("transclusion",Ga,K,x),Ga=K),
"element"==F?(A=!0,D=K.priority,F=x,x=e.$$element=z(V.createComment(" "+ia+": "+e[ia]+" ")),d=x[0],Q(g,Za.call(F,0),d),gb=N(F,f,D,h&&h.name,{nonTlbTranscludeDirective:Ga})):(F=z(Vb(d)).contents(),x.empty(),gb=N(F,f));if(K.template)if(Yb=!0,Oa("template",Y,K,x),Y=K,F=E(K.template)?K.template(x,e):K.template,F=Yc(F),K.replace){h=K;F=Tb.test(F)?Zc(T(K.templateNamespace,U(F))):[];d=F[0];if(1!=F.length||d.nodeType!==ma)throw da("tplrt",ia,"");Q(g,x,d);L={$attr:{}};F=W(d,[],L);var tf=a.splice(qa+1,a.length-
(qa+1));J&&hb(F);a=a.concat(F).concat(tf);Vc(e,L);L=a.length}else x.html(F);if(K.templateUrl)Yb=!0,Oa("template",Y,K,x),Y=K,K.replace&&(h=K),M=Xb(a.splice(qa,a.length-qa),x,e,g,C&&gb,k,n,{controllerDirectives:H,newIsolateScopeDirective:J,templateDirective:Y,nonTlbTranscludeDirective:Ga}),L=a.length;else if(K.compile)try{xa=K.compile(x,e,gb),E(xa)?B(null,xa,R,jb):xa&&B(xa.pre,xa.post,R,jb)}catch(ac){c(ac,ta(x))}K.terminal&&(M.terminal=!0,D=Math.max(D,K.priority))}M.scope=G&&!0===G.scope;M.transcludeOnThisElement=
C;M.elementTranscludeOnThisElement=A;M.templateOnThisElement=Yb;M.transclude=gb;m.hasElementTranscludeDirective=A;return M}function hb(a){for(var b=0,c=a.length;b<c;b++)a[b]=Pb(a[b],{$$isolateScope:!0})}function C(b,d,f,g,h,k,l){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var m;d=a.get(d+"Directive");for(var p=0,B=d.length;p<B;p++)try{m=d[p],(g===s||g>m.priority)&&-1!=m.restrict.indexOf(f)&&(k&&(m=Pb(m,{$$start:k,$$end:l})),b.push(m),h=m)}catch(u){c(u)}}return h}function F(b){if(e.hasOwnProperty(b))for(var c=
a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function Vc(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,f){"class"==f?(G(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Xb(a,b,c,e,f,g,
h,k){var l=[],n,m,p=b[0],v=a.shift(),u=Pb(v,{templateUrl:null,transclude:null,replace:null,$$originalDirective:v}),M=E(v.templateUrl)?v.templateUrl(b,c):v.templateUrl,D=v.templateNamespace;b.empty();d(B.getTrustedResourceUrl(M)).then(function(d){var B,P;d=Yc(d);if(v.replace){d=Tb.test(d)?Zc(T(D,U(d))):[];B=d[0];if(1!=d.length||B.nodeType!==ma)throw da("tplrt",v.name,M);d={$attr:{}};Q(e,b,B);var t=W(B,[],d);I(v.scope)&&hb(t);a=t.concat(a);Vc(c,d)}else B=p,b.html(d);a.unshift(u);n=y(a,B,c,f,b,v,g,h,
k);q(e,function(a,c){a==B&&(e[c]=b[0])});for(m=Y(b[0].childNodes,f);l.length;){d=l.shift();P=l.shift();var H=l.shift(),N=l.shift(),t=b[0];if(!d.$$destroyed){if(P!==p){var J=P.className;k.hasElementTranscludeDirective&&v.replace||(t=Vb(B));Q(H,z(P),t);G(z(t),J)}P=n.transcludeOnThisElement?$(d,n.transclude,N):N;n(m,d,t,e,P)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(n.transcludeOnThisElement&&(a=$(b,n.transclude,e)),n(m,b,c,d,a)))}}function xa(a,b){var c=b.priority-
a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Oa(a,b,c,d){if(b)throw da("multidir",b.name,c.name,a,ta(d));}function ia(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&N.$$addBindingClass(a);return function(a,c){var e=c.parent();b||N.$$addBindingClass(e);N.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function T(a,b){a=L(a||"html");switch(a){case "svg":case "math":var c=V.createElement("div");
c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function jb(a,b){if("srcdoc"==b)return B.HTML;var c=sa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return B.RESOURCE_URL}function R(a,c,d,e,f){var g=jb(a,e);f=h[e]||f;var l=b(d,!0,g,f);if(l){if("multiple"===e&&"select"===sa(a))throw da("selmulti",ta(a));c.push({priority:100,compile:function(){return{pre:function(a,c,h){c=h.$$observers||(h.$$observers={});if(k.test(e))throw da("nodomevents");
var n=h[e];n!==d&&(l=n&&b(n,!0,g,f),d=n);l&&(h[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,a)}))}}}})}}function Q(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var l=a.length;g<l;g++,h++)h<l?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=V.createDocumentFragment();a.appendChild(d);
z(c).data(z(d).data());pa?(Rb=!0,pa.cleanData([d])):delete z.cache[d[z.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],z(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function X(a,b){return x(function(){return a.apply(null,arguments)},a,b)}function Xc(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ta(d))}}var $b=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};$b.prototype={$normalize:va,$addClass:function(a){a&&
0<a.length&&M.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&M.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=$c(a,b);c&&c.length&&M.addClass(this.$$element,c);(c=$c(b,a))&&c.length&&M.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Qc(f,a),h=pf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=yc(a,"-"));g=sa(this.$$element);if("a"===g&&"href"===a||"img"===
g&&"src"===a)this[a]=b=D(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=U(b),l=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,l=/\s/.test(h)?l:/(,)/,h=h.split(l),l=Math.floor(h.length/2),k=0;k<l;k++)var n=2*k,g=g+D(U(h[n]),!0),g=g+(" "+U(h[n+1]));h=U(h[2*k]).split(/\s/);g+=D(U(h[0]),!0);2===h.length&&(g+=" "+U(h[1]));this[a]=b=g}!1!==d&&(null===b||b===s?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&q(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,
b){var c=this,d=c.$$observers||(c.$$observers=ga()),e=d[a]||(d[a]=[]);e.push(b);H.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){Xa(e,b)}}};var Ga=b.startSymbol(),qa=b.endSymbol(),Yc="{{"==Ga||"}}"==qa?na:function(a){return a.replace(/\{\{/g,Ga).replace(/}}/g,qa)},ac=/^ngAttr[A-Z]/;N.$$addBindingInfo=m?function(a,b){var c=a.data("$binding")||[];w(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:A;N.$$addBindingClass=m?function(a){G(a,"ng-binding")}:A;N.$$addScopeInfo=
m?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:A;N.$$addScopeClass=m?function(a,b){G(a,b?"ng-isolate-scope":"ng-scope")}:A;return N}]}function va(b){return eb(b.replace(Wc,""))}function $c(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Zc(b){b=z(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&uf.call(b,a,1);return b}function Ke(){var b=
{},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){Ma(a,"controller");I(a)?x(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!I(a.$scope))throw F("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,l,k){var m,r,n;l=!0===l;k&&O(k)&&(n=k);if(O(g)){k=g.match(c);if(!k)throw vf("ctrlfmt",g);r=k[1];n=n||k[3];g=b.hasOwnProperty(r)?b[r]:Ac(h.$scope,r,!0)||(a?Ac(e,r,!0):s);La(g,r,!0)}if(l)return l=(w(g)?g[g.length-
1]:g).prototype,m=Object.create(l||null),n&&f(h,n,m,r||g.name),x(function(){d.invoke(g,m,h,r);return m},{instance:m,identifier:n});m=d.instantiate(g,h,r);n&&f(h,n,m,r||g.name);return m}}]}function Le(){this.$get=["$window",function(b){return z(b.document)}]}function Me(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function bc(b,a){if(O(b)){var c=b.replace(wf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(ad))||(d=(d=c.match(xf))&&yf[d[0]].test(c));
d&&(b=tc(c))}}return b}function bd(b){var a=ga(),c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=b.indexOf(":");c=L(U(b.substr(0,e)));d=U(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function cd(b){var a=I(b)?b:s;return function(c){a||(a=bd(b));return c?(c=a[L(c)],void 0===c&&(c=null),c):a}}function dd(b,a,c,d){if(E(d))return d(b,a,c);q(d,function(d){b=d(b,a,c)});return b}function Pe(){var b=this.defaults={transformResponse:[bc],transformRequest:[function(a){return I(a)&&"[object File]"!==
Aa.call(a)&&"[object Blob]"!==Aa.call(a)&&"[object FormData]"!==Aa.call(a)?$a(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:oa(cc),put:oa(cc),patch:oa(cc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},a=!1;this.useApplyAsync=function(b){return y(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=x({},a);b.data=a.data?dd(a.data,
a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}function d(a){var b,c={};q(a,function(a,d){E(a)?(b=a(),null!=b&&(c[d]=b)):c[d]=a});return c}if(!ba.isObject(a))throw F("$http")("badreq",a);var e=x({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse},a);e.headers=function(a){var c=b.headers,e=x({},a.headers),f,g,c=x({},c.common,c[L(a.method)]);a:for(f in c){a=L(f);for(g in e)if(L(g)===a)continue a;e[f]=c[f]}return d(e)}(a);
e.method=vb(e.method);var f=[function(a){var d=a.headers,e=dd(a.data,cd(d),s,a.transformRequest);C(e)&&q(d,function(a,b){"content-type"===L(b)&&delete d[b]});C(a.withCredentials)&&!C(b.withCredentials)&&(a.withCredentials=b.withCredentials);return m(a,e).then(c,c)},s],g=h.when(e);for(q(u,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var l=f.shift(),g=g.then(a,l)}g.success=function(a){La(a,
"fn");g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=function(a){La(a,"fn");g.then(null,function(b){a(b.data,b.status,b.headers,e)});return g};return g}function m(c,f){function l(b,c,d,e){function f(){m(c,b,d,e)}D&&(200<=b&&300>b?D.put(q,[b,c,bd(d),e]):D.remove(q));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function m(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?B.resolve:B.reject)({data:a,status:b,headers:cd(d),config:c,statusText:e})}function u(a){m(a.data,a.status,oa(a.headers()),
a.statusText)}function J(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,1)}var B=h.defer(),M=B.promise,D,G,N=c.headers,q=r(c.url,c.params);k.pendingRequests.push(c);M.then(J,J);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(D=I(c.cache)?c.cache:I(b.cache)?b.cache:n);D&&(G=D.get(q),y(G)?G&&E(G.then)?G.then(u,u):w(G)?m(G[1],G[0],oa(G[2]),G[3]):m(G,200,{},"OK"):D.put(q,M));C(G)&&((G=ed(c.url)?e.cookies()[c.xsrfCookieName||b.xsrfCookieName]:s)&&(N[c.xsrfHeaderName||
b.xsrfHeaderName]=G),d(c.method,q,f,l,N,c.timeout,c.withCredentials,c.responseType));return M}function r(a,b){if(!b)return a;var c=[];Jd(b,function(a,b){null===a||C(a)||(w(a)||(a=[a]),q(a,function(a){I(a)&&(a=ea(a)?a.toISOString():$a(a));c.push(Ca(b)+"="+Ca(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var n=f("$http"),u=[];q(c,function(a){u.unshift(O(a)?l.get(a):l.invoke(a))});k.pendingRequests=[];(function(a){q(arguments,function(a){k[a]=function(b,c){return k(x(c||
{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){k[a]=function(b,c,d){return k(x(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=b;return k}]}function zf(){return new T.XMLHttpRequest}function Qe(){this.$get=["$browser","$window","$document",function(b,a,c){return Af(b,zf,b.defer,a.angular.callbacks,c[0])}]}function Af(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;
m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,u="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),u=a.type,g="error"===a.type?404:200);c&&c(g,u)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,l,k,m,r,n,u){function v(){p&&p();H&&H.abort()}function P(a,d,e,f,g){B!==s&&c.cancel(B);p=H=null;a(d,e,f,g);b.$$completeOutstandingRequest(A)}b.$$incOutstandingRequestCount();
h=h||b.url();if("jsonp"==L(e)){var t="_"+(d.counter++).toString(36);d[t]=function(a){d[t].data=a;d[t].called=!0};var p=f(h.replace("JSON_CALLBACK","angular.callbacks."+t),t,function(a,b){P(k,a,d[t].data,"",b);d[t]=A})}else{var H=a();H.open(e,h,!0);q(m,function(a,b){y(a)&&H.setRequestHeader(b,a)});H.onload=function(){var a=H.statusText||"",b="response"in H?H.response:H.responseText,c=1223===H.status?204:H.status;0===c&&(c=b?200:"file"==ya(h).protocol?404:0);P(k,c,b,H.getAllResponseHeaders(),a)};e=
function(){P(k,-1,null,null,"")};H.onerror=e;H.onabort=e;n&&(H.withCredentials=!0);if(u)try{H.responseType=u}catch(J){if("json"!==u)throw J;}H.send(l||null)}if(0<r)var B=c(v,r);else r&&E(r.then)&&r.then(v)}}function Ne(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,u,v){function P(c){return c.replace(k,b).replace(m,
a)}function t(a){try{var b=a;a=u?e.getTrusted(u,b):e.valueOf(b);var c;if(v&&!y(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=$a(a)}c=a}return c}catch(g){c=dc("interr",f,g.toString()),d(c)}}v=!!v;for(var p,H,q=0,B=[],M=[],D=f.length,G=[],N=[];q<D;)if(-1!=(p=f.indexOf(b,q))&&-1!=(H=f.indexOf(a,p+h)))q!==p&&G.push(P(f.substring(q,p))),q=f.substring(p+h,H),B.push(q),M.push(c(q,t)),q=H+l,N.push(G.length),G.push("");else{q!==D&&G.push(P(f.substring(q)));
break}if(u&&1<G.length)throw dc("noconcat",f);if(!g||B.length){var Y=function(a){for(var b=0,c=B.length;b<c;b++){if(v&&C(a[b]))return;G[N[b]]=a[b]}return G.join("")};return x(function(a){var b=0,c=B.length,e=Array(c);try{for(;b<c;b++)e[b]=M[b](a);return Y(e)}catch(g){a=dc("interr",f,g.toString()),d(a)}},{exp:f,expressions:B,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(M,function(c,e){var f=Y(c);E(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,l=a.length,k=new RegExp(b.replace(/./g,
f),"g"),m=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function Oe(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var m=a.setInterval,r=a.clearInterval,n=0,u=y(k)&&!k,v=(u?d:c).defer(),P=v.promise;l=y(l)?l:0;P.then(null,null,e);P.$$intervalId=m(function(){v.notify(n++);0<l&&n>=l&&(v.resolve(n),r(P.$$intervalId),delete f[P.$$intervalId]);u||b.$apply()},h);f[P.$$intervalId]=v;return P}var f={};
e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function Wd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),
SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a",ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"]},pluralCat:function(b){return 1===b?"one":"other"}}}}
function ec(b){b=b.split("/");for(var a=b.length;a--;)b[a]=sb(b[a]);return b.join("/")}function fd(b,a){var c=ya(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=aa(c.port)||Bf[c.protocol]||null}function gd(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=ya(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=vc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function wa(b,a){if(0===
a.indexOf(b))return a.substr(b.length)}function Ea(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Gb(b){return b.replace(/(#.+)|#$/,"$1")}function fc(b){return b.substr(0,Ea(b).lastIndexOf("/")+1)}function gc(b,a){this.$$html5=!0;a=a||"";var c=fc(b);fd(b,this);this.$$parse=function(a){var b=wa(c,a);if(!O(b))throw Hb("ipthprfx",a,c);gd(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Qb(this.$$search),b=this.$$hash?"#"+sb(this.$$hash):"";this.$$url=
ec(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=wa(b,d))!==s?(g=f,g=(f=wa(a,f))!==s?c+(wa("/",f)||f):b+g):(f=wa(c,d))!==s?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function hc(b,a){var c=fc(b);fd(b,this);this.$$parse=function(d){d=wa(b,d)||wa(c,d);var e;"#"===d.charAt(0)?(e=wa(a,d),C(e)&&(e=d)):e=this.$$html5?d:"";gd(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&
(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Qb(this.$$search),e=this.$$hash?"#"+sb(this.$$hash):"";this.$$url=ec(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ea(b)==Ea(a)?(this.$$parse(a),!0):!1}}function hd(b,a){this.$$html5=!0;hc.apply(this,arguments);var c=fc(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,
g;b==Ea(d)?f=d:(g=wa(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Qb(this.$$search),e=this.$$hash?"#"+sb(this.$$hash):"";this.$$url=ec(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Ib(b){return function(){return this[b]}}function id(b,a){return function(c){if(C(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Re(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return y(a)?
(b=a,this):b};this.html5Mode=function(b){return Wa(b)?(a.enabled=b,this):I(b)?(Wa(b.enabled)&&(a.enabled=b.enabled),Wa(b.requireBase)&&(a.requireBase=b.requireBase),Wa(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),
a,k.$$state,b)}var k,m;m=d.baseHref();var r=d.url(),n;if(a.enabled){if(!m&&a.requireBase)throw Hb("nobase");n=r.substring(0,r.indexOf("/",r.indexOf("//")+2))+(m||"/");m=e.history?gc:hd}else n=Ea(r),m=hc;k=new m(n,"#"+b);k.$$parseLinkUrl(r,r);k.$$state=d.state();var u=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=z(b.target);"a"!==sa(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),
l=e.attr("href")||e.attr("xlink:href");I(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=ya(h.animVal).href);u.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});Gb(k.absUrl())!=Gb(r)&&d.url(k.absUrl(),!0);var v=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;
k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(v=!1,l(d,e)))});c.$$phase||c.$digest()});c.$watch(function(){var a=Gb(d.url()),b=Gb(k.absUrl()),f=d.state(),g=k.$$replace,n=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(v||n)v=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(n&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function Se(){var b=!0,a=this;
this.debugEnabled=function(a){return y(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||A;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),
info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ra(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw ja("isecfld",a);return b}function ka(b,a){if(b){if(b.constructor===b)throw ja("isecfn",a);if(b.window===b)throw ja("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw ja("isecdom",a);if(b===Object)throw ja("isecobj",
a);}return b}function ic(b){return b.constant}function kb(b,a,c,d,e){ka(b,e);ka(a,e);c=c.split(".");for(var f,g=0;1<c.length;g++){f=ra(c.shift(),e);var h=0===g&&a&&a[f]||b[f];h||(h={},b[f]=h);b=ka(h,e)}f=ra(c.shift(),e);ka(b[f],e);return b[f]=d}function Pa(b){return"constructor"==b}function jd(b,a,c,d,e,f,g){ra(b,f);ra(a,f);ra(c,f);ra(d,f);ra(e,f);var h=function(a){return ka(a,f)},l=g||Pa(b)?h:na,k=g||Pa(a)?h:na,m=g||Pa(c)?h:na,r=g||Pa(d)?h:na,n=g||Pa(e)?h:na;return function(f,g){var h=g&&g.hasOwnProperty(b)?
g:f;if(null==h)return h;h=l(h[b]);if(!a)return h;if(null==h)return s;h=k(h[a]);if(!c)return h;if(null==h)return s;h=m(h[c]);if(!d)return h;if(null==h)return s;h=r(h[d]);return e?null==h?s:h=n(h[e]):h}}function Cf(b,a){return function(c,d){return b(c,d,ka,a)}}function Df(b,a,c){var d=a.expensiveChecks,e=d?Ef:Ff,f=e[b];if(f)return f;var g=b.split("."),h=g.length;if(a.csp)f=6>h?jd(g[0],g[1],g[2],g[3],g[4],c,d):function(a,b){var e=0,f;do f=jd(g[e++],g[e++],g[e++],g[e++],g[e++],c,d)(a,b),b=s,a=f;while(e<
h);return f};else{var l="";d&&(l+="s = eso(s, fe);\nl = eso(l, fe);\n");var k=d;q(g,function(a,b){ra(a,c);var e=(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a;if(d||Pa(a))e="eso("+e+", fe)",k=!0;l+="if(s == null) return undefined;\ns="+e+";\n"});l+="return s;";a=new Function("s","l","eso","fe",l);a.toString=ca(l);k&&(a=Cf(a,c));f=a}f.sharedGetter=!0;f.assign=function(a,c,d){return kb(a,d,b,c,b)};return e[b]=f}function jc(b){return E(b.valueOf)?b.valueOf():Gf.call(b)}function Te(){var b=ga(),
a=ga();this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=jc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function h(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,
[])),h;if(1===e.length){var l=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,l)||(h=d(a),l=b&&jc(b));return h},b,c)}for(var k=[],n=0,m=e.length;n<m;n++)k[n]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var l=e[c](a);if(b||(b=!g(l,k[c])))k[c]=l&&jc(l)}b&&(h=d(a));return h},b,c)}function l(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;E(b)&&b.apply(this,arguments);y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function k(a,b,c,d){function e(a){var b=
!0;q(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;E(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function m(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){E(b)&&b.apply(this,arguments);e()},c)}function r(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==k&&c!==l?function(c,d){var e=a(c,d);return b(e,c,d)}:function(c,d){var e=a(c,d),f=b(e,c,d);return y(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==
h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=[a]);return c}var n={csp:d.csp,expensiveChecks:!1},u={csp:d.csp,expensiveChecks:!0};return function(d,f,g){var p,q,s;switch(typeof d){case "string":s=d=d.trim();var B=g?a:b;p=B[s];p||(":"===d.charAt(0)&&":"===d.charAt(1)&&(q=!0,d=d.substring(2)),g=g?u:n,p=new kc(g),p=(new lb(p,c,g)).parse(d),p.constant?p.$$watchDelegate=m:q?(p=e(p),p.$$watchDelegate=p.literal?k:l):p.inputs&&(p.$$watchDelegate=h),B[s]=p);return r(p,f);
case "function":return r(d,f);default:return r(A,f)}}}]}function Ve(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return kd(function(a){b.$evalAsync(a)},a)}]}function We(){this.$get=["$browser","$exceptionHandler",function(b,a){return kd(function(a){b.defer(a)},a)}]}function kd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&
c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=s;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{E(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=F("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||
[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(I(b)||E(b))d=b&&b.then;E(d)?(this.promise.$$state.status=
-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(E(b)?
b(c):c)}catch(h){a(h)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{E(c)&&(d=c())}catch(e){return l(e,!1)}return d&&E(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},r=function u(a){if(!E(a))throw h("norslvr",a);if(!(this instanceof u))return new u(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};
r.defer=function(){return new g};r.reject=function(a){var b=new g;b.reject(a);return b.promise};r.when=m;r.all=function(a){var b=new g,c=0,d=w(a)?[]:{};q(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return r}function ef(){this.$get=["$window","$timeout",function(b,a){function c(){for(var a=0;a<m.length;a++){var b=m[a];b&&(m[a]=null,b())}k=m.length=0}function d(a){var b=
m.length;k++;m.push(a);0===b&&(l=h(c));return function(){0<=b&&(b=m[b]=null,0===--k&&l&&(l(),l=null,m.length=0))}}var e=b.requestAnimationFrame||b.webkitRequestAnimationFrame,f=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,g=!!e,h=g?function(a){var b=e(a);return function(){f(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};d.supported=g;var l,k=0,m=[];return d}]}function Ue(){function b(a){function b(){this.$$watchers=this.$$nextSibling=
this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++rb;this.$$ChildScope=null}b.prototype=a;return b}var a=10,c=F("$rootScope"),d=null,e=null;this.digestTtl=function(b){arguments.length&&(a=b);return a};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(f,g,h,l){function k(a){a.currentScope.$$destroyed=!0}function m(){this.$id=++rb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=
null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function r(a){if(t.$$phase)throw c("inprog",t.$$phase);t.$$phase=a}function n(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function u(){}function v(){for(;J.length;)try{J.shift()()}catch(a){g(a)}e=null}function s(){null===e&&(e=l.defer(function(){t.$apply(v)}))}m.prototype={constructor:m,$new:function(a,c){var d;c=c||this;a?
(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,c){var e=h(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,c,e);var f=this.$$watchers,g={fn:b,last:u,get:e,exp:a,eq:!!c};d=null;E(b)||(g.fn=A);f||(f=this.$$watchers=[]);f.unshift(g);return function(){Xa(f,
g);d=null}},$watchGroup:function(a,b){function c(){h=!1;l?(l=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,l=!0;if(!a.length){var k=!0;g.$evalAsync(function(){k&&b(e,e,g)});return function(){k=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var l=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(l)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=
a;var b,d,g,h;if(!C(e)){if(I(e))if(Sa(e))for(f!==n&&(f=n,u=f.length=0,k++),a=e.length,u!==a&&(k++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(k++,f[b]=g);else{f!==r&&(f=r={},u=0,k++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(k++,f[b]=g)):(u++,f[b]=g,k++));if(u>a)for(b in k++,f)e.hasOwnProperty(b)||(u--,delete f[b])}else f!==e&&(f=e,k++);return k}}c.$stateful=!0;var d=this,e,f,g,l=1<b.length,k=0,m=h(a,c),n=[],r={},p=!0,u=0;return this.$watch(m,
function(){p?(p=!1,b(e,e,d)):b(e,g,d);if(l)if(I(e))if(Sa(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)wc.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var b,f,h,k,m,n,q=a,s,S=[],P,J;r("$digest");l.$$checkUrlChange();this===t&&null!==e&&(l.defer.cancel(e),v());d=null;do{n=!1;for(s=this;p.length;){try{J=p.shift(),J.scope.$eval(J.expression,J.locals)}catch(y){g(y)}d=null}a:do{if(k=s.$$watchers)for(m=k.length;m--;)try{if(b=k[m])if((f=b.get(s))!==(h=b.last)&&
!(b.eq?fa(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))n=!0,d=b,b.last=b.eq?Ba(f,null):f,b.fn(f,h===u?f:h,s),5>q&&(P=4-q,S[P]||(S[P]=[]),S[P].push({msg:E(b.exp)?"fn: "+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:h}));else if(b===d){n=!1;break a}}catch(F){g(F)}if(!(k=s.$$childHead||s!==this&&s.$$nextSibling))for(;s!==this&&!(k=s.$$nextSibling);)s=s.$parent}while(s=k);if((n||p.length)&&!q--)throw t.$$phase=null,c("infdig",a,S);}while(n||p.length);for(t.$$phase=null;H.length;)try{H.shift()()}catch(x){g(x)}},
$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==t){for(var b in this.$$listenerCount)n(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=
this.$applyAsync=A;this.$on=this.$watch=this.$watchGroup=function(){return A};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,b){return h(a)(this,b)},$evalAsync:function(a,b){t.$$phase||p.length||l.defer(function(){p.length&&t.$digest()});p.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){H.push(a)},$apply:function(a){try{return r("$apply"),this.$eval(a)}catch(b){g(b)}finally{t.$$phase=
null;try{t.$digest()}catch(c){throw g(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&J.push(b);s()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,n(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=
!0},defaultPrevented:!1},l=Ya([h],arguments,1),k,m;do{d=e.$$listeners[a]||c;h.currentScope=e;k=0;for(m=d.length;k<m;k++)if(d[k])try{d[k].apply(null,l)}catch(n){g(n)}else d.splice(k,1),k--,m--;if(f)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=Ya([e],arguments,1),h,l;c=d;){e.currentScope=
c;d=c.$$listeners[a]||[];h=0;for(l=d.length;h<l;h++)if(d[h])try{d[h].apply(null,f)}catch(k){g(k)}else d.splice(h,1),h--,l--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var t=new m,p=t.$$asyncQueue=[],H=t.$$postDigestQueue=[],J=t.$$applyAsyncQueue=[];return t}]}function Xd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=
function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=ya(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Hf(b){if("self"===b)return b;if(O(b)){if(-1<b.indexOf("***"))throw za("iwcard",b);b=ld(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(Ua(b))return new RegExp("^"+b.source+"$");throw za("imatcher");}function md(b){var a=[];y(b)&&q(b,function(b){a.push(Hf(b))});
return a}function Ye(){this.SCE_CONTEXTS=la;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=md(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=md(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?ed(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};
return b}var f=function(a){throw za("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[la.HTML]=e(g);h[la.CSS]=e(g);h[la.URL]=e(g);h[la.JS]=e(g);h[la.RESOURCE_URL]=e(h[la.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw za("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw za("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===s||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof
g)return e.$$unwrapTrustedValue();if(c===la.RESOURCE_URL){var g=ya(e.toString()),r,n,u=!1;r=0;for(n=b.length;r<n;r++)if(d(b[r],g)){u=!0;break}if(u)for(r=0,n=a.length;r<n;r++)if(d(a[r],g)){u=!1;break}if(u)return e;throw za("insecurl",e.toString());}if(c===la.HTML)return f(e);throw za("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Xe(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&
8>Qa)throw za("iequirks");var d=oa(la);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=na);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;q(la,function(a,b){var c=L(b);d[eb("parse_as_"+c)]=function(b){return e(a,b)};d[eb("get_trusted_"+c)]=function(b){return f(a,b)};d[eb("trust_as_"+
c)]=function(b){return g(a,b)}});return d}]}function Ze(){this.$get=["$window","$document",function(b,a){var c={},d=aa((/android (\d+)/.exec(L((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,m=!1;if(l){for(var r in l)if(k=h.exec(r)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);m=!!("animation"in l||g+"Animation"in
l);!d||k&&m||(k=O(f.body.style.webkitTransition),m=O(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=Qa)return!1;if(C(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:cb(),vendorPrefix:g,transitions:k,animations:m,android:d}}]}function af(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;var g=a.defaults&&a.defaults.transformResponse;w(g)?g=g.filter(function(a){return a!==
bc}):g===bc&&(g=null);return a.get(e,{cache:b,transformResponse:g})["finally"](function(){d.totalPendingRequests--}).then(function(a){return a.data},function(a){if(!f)throw da("tpload",e);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function bf(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var d=ba.element(a).data("$binding");d&&q(d,function(d){c?(new RegExp("(^|\\s)"+
ld(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function cf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",
function(b,a,c,d,e){function f(f,l,k){var m=y(k)&&!k,r=(m?d:c).defer(),n=r.promise;l=a.defer(function(){try{r.resolve(f())}catch(a){r.reject(a),e(a)}finally{delete g[n.$$timeoutId]}m||b.$apply()},l);n.$$timeoutId=l;g[l]=r;return n}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function ya(b){Qa&&(X.setAttribute("href",b),b=X.href);X.setAttribute("href",b);return{href:X.href,protocol:X.protocol?
X.protocol.replace(/:$/,""):"",host:X.host,search:X.search?X.search.replace(/^\?/,""):"",hash:X.hash?X.hash.replace(/^#/,""):"",hostname:X.hostname,port:X.port,pathname:"/"===X.pathname.charAt(0)?X.pathname:"/"+X.pathname}}function ed(b){b=O(b)?ya(b):b;return b.protocol===nd.protocol&&b.host===nd.host}function df(){this.$get=ca(T)}function Ic(b){function a(c,d){if(I(c)){var e={};q(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+
"Filter")}}];a("currency",od);a("date",pd);a("filter",If);a("json",Jf);a("limitTo",Kf);a("lowercase",Lf);a("number",qd);a("orderBy",rd);a("uppercase",Mf)}function If(){return function(b,a,c){if(!w(b))return b;var d;switch(null!==a?typeof a:"null"){case "function":break;case "boolean":case "null":case "number":case "string":d=!0;case "object":a=Nf(a,c,d);break;default:return b}return b.filter(a)}}function Nf(b,a,c){var d=I(b)&&"$"in b;!0===a?a=fa:E(a)||(a=function(a,b){if(C(a))return!1;if(null===a||
null===b)return a===b;if(I(a)||I(b))return!1;a=L(""+a);b=L(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!I(e)?Ha(e,b.$,a,!1):Ha(e,b,a,c)}}function Ha(b,a,c,d,e){var f=null!==b?typeof b:"null",g=null!==a?typeof a:"null";if("string"===g&&"!"===a.charAt(0))return!Ha(b,a.substring(1),c,d);if(w(b))return b.some(function(b){return Ha(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&Ha(b[h],a,c,!0))return!0;return e?!1:Ha(b,a,c,!1)}if("object"===g){for(h in a)if(e=
a[h],!E(e)&&!C(e)&&(f="$"===h,!Ha(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function od(b){var a=b.NUMBER_FORMATS;return function(b,d,e){C(d)&&(d=a.CURRENCY_SYM);C(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:sd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function qd(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:sd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function sd(b,a,c,d,e){if(!isFinite(b)||
I(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",l=[],k=!1;if(-1!==g.indexOf("e")){var m=g.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&m[3]>e+1?b=0:(h=g,k=!0)}if(k)0<e&&1>b&&(h=b.toFixed(e),b=parseFloat(h));else{g=(g.split(td)[1]||"").length;C(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(td),k=g[0],g=g[1]||"",r=0,n=a.lgSize,u=a.gSize;if(k.length>=n+u)for(r=k.length-n,m=0;m<r;m++)0===(r-m)%u&&0!==m&&(h+=c),h+=k.charAt(m);
for(m=r;m<k.length;m++)0===(k.length-m)%n&&0!==m&&(h+=c),h+=k.charAt(m);for(;g.length<e;)g+="0";e&&"0"!==e&&(h+=d+g.substr(0,e))}0===b&&(f=!1);l.push(f?a.negPre:a.posPre,h,f?a.negSuf:a.posSuf);return l.join("")}function Jb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function Z(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Jb(e,a,d)}}function Kb(b,a){return function(c,d){var e=c["get"+b](),
f=vb(a?"SHORT"+b:b);return d[f][e]}}function ud(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function vd(b){return function(a){var c=ud(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Jb(a,b)}}function lc(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function pd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;
b[9]&&(f=aa(b[9]+b[10]),g=aa(b[9]+b[11]));h.call(a,aa(b[1]),aa(b[2])-1,aa(b[3]));f=aa(b[4]||0)-f;g=aa(b[5]||0)-g;h=aa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;O(c)&&(c=Of.test(c)?aa(c):a(c));Q(c)&&(c=new Date(c));if(!ea(c))return c;for(;e;)(k=Pf.exec(e))?(h=Ya(h,k,1),
e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));q(h,function(a){l=Qf[a];g+=l?l(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Jf(){return function(b,a){C(a)&&(a=2);return $a(b,a)}}function Kf(){return function(b,a){Q(b)&&(b=b.toString());return w(b)||O(b)?(a=Infinity===Math.abs(Number(a))?Number(a):aa(a))?0<a?b.slice(0,a):b.slice(a):O(b)?"":[]:b}}function rd(b){return function(a,c,d){function e(a,
b){return b?function(b,c){return a(c,b)}:a}function f(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function g(a){return null===a?"null":"function"===typeof a.valueOf&&(a=a.valueOf(),f(a))||"function"===typeof a.toString&&(a=a.toString(),f(a))?a:""}function h(a,b){var c=typeof a,d=typeof b;c===d&&"object"===c&&(a=g(a),b=g(b));return c===d?("string"===c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Sa(a))return a;c=w(c)?c:[c];0===
c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||na;if(O(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(h,c);d=b(a);if(d.constant){var f=d();return e(function(a,b){return h(a[f],b[f])},c)}}return e(function(a,b){return h(d(a),d(b))},c)});return Za.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ia(b){E(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ca(b)}function wd(b,a,c,
d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Lb;f.$error={};f.$$success={};f.$pending=s;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){q(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){q(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ma(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;
f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];q(f.$pending,function(b,c){f.$setValidity(c,null,a)});q(f.$error,function(b,c){f.$setValidity(c,null,a)});q(f.$$success,function(b,c){f.$setValidity(c,null,a)});Xa(g,a)};xd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Xa(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,
Ra);d.addClass(b,Mb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Ra,Mb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;q(g,function(a){a.$setPristine()})};f.$setUntouched=function(){q(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function mc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function mb(b,a,c,d,e,f){var g=L(a[0].type);if(!e.android){var h=
!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=U(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",l);else{var k,m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=
b||m(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",m)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Nb(b,a){return function(c,d){var e,f;if(ea(c))return c;if(O(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(Rf.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/
1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function nb(b,a,c,d){return function(e,f,g,h,l,k,m){function r(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function n(a){return y(a)?ea(a)?a:c(a):s}yd(e,f,g,h);mb(e,f,g,h,l,k);var u=h&&h.$options&&h.$options.timezone,v;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,v),"UTC"===u&&b.setMinutes(b.getMinutes()-
b.getTimezoneOffset()),b):s});h.$formatters.push(function(a){if(a&&!ea(a))throw Ob("datefmt",a);if(r(a)){if((v=a)&&"UTC"===u){var b=6E4*v.getTimezoneOffset();v=new Date(v.getTime()+b)}return m("date")(a,d,u)}v=null;return""});if(y(g.min)||g.ngMin){var q;h.$validators.min=function(a){return!r(a)||C(q)||c(a)>=q};g.$observe("min",function(a){q=n(a);h.$validate()})}if(y(g.max)||g.ngMax){var t;h.$validators.max=function(a){return!r(a)||C(t)||c(a)<=t};g.$observe("max",function(a){t=n(a);h.$validate()})}}}
function yd(b,a,c,d){(d.$$hasNativeValidators=I(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?s:b})}function zd(b,a,c,d,e){if(y(d)){b=b(d);if(!b.constant)throw F("ngModel")("constexpr",c,d);return b(a)}return e}function nc(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){if(!w(a)){if(O(a))return a.split(" ");
if(I(a)){var b=[];q(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||{},d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!m){var u=l(k,1);h.$addClass(u)}else if(!fa(b,m)){var q=e(m),u=d(k,q),k=d(q,k),u=l(u,1),k=l(k,-1);u&&u.length&&c.addClass(g,u);k&&k.length&&c.removeClass(g,
k)}}m=oa(b)}var m;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function xd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+yc(b,"-"):"";a(ob+b,!0===c);a(Ad+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[Ad]=
!(f[ob]=e.hasClass(ob));d.$setValidity=function(b,e,f){e===s?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),Bd(d.$pending)&&(d.$pending=s));Wa(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(Cd,!0),d.$valid=d.$invalid=s,c("",null)):(a(Cd,!1),d.$valid=Bd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?s:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,
e,d)}}function Bd(b){if(b)for(var a in b)return!1;return!0}var Sf=/^\/(.+)\/([a-z]*)$/,L=function(b){return O(b)?b.toLowerCase():b},wc=Object.prototype.hasOwnProperty,vb=function(b){return O(b)?b.toUpperCase():b},Qa,z,pa,Za=[].slice,uf=[].splice,Tf=[].push,Aa=Object.prototype.toString,Ja=F("ng"),ba=T.angular||(T.angular={}),db,rb=0;Qa=V.documentMode;A.$inject=[];na.$inject=[];var w=Array.isArray,U=function(b){return O(b)?b.trim():b},ld=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08")},cb=function(){if(y(cb.isActive_))return cb.isActive_;var b=!(!V.querySelector("[ng-csp]")&&!V.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return cb.isActive_=b},tb=["ng-","data-ng-","ng:","x-ng-"],Rd=/[A-Z]/g,zc=!1,Rb,ma=1,ab=3,Vd={full:"1.3.16",major:1,minor:3,dot:16,codeName:"cookie-oatmealification"};R.expando="ng339";var Ab=R.cache={},nf=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var hf=/([\:\-\_]+(.))/g,jf=/^moz([A-Z])/,
Uf={mouseleave:"mouseout",mouseenter:"mouseover"},Ub=F("jqLite"),mf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Tb=/<|&#?\w+;/,kf=/<([\w:]+)/,lf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ha={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ha.optgroup=ha.option;ha.tbody=ha.tfoot=ha.colgroup=
ha.caption=ha.thead;ha.th=ha.td;var Ka=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===V.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(T).on("load",a))},toString:function(){var b=[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?z(this[b]):z(this[this.length+b])},length:0,push:Tf,sort:[].sort,splice:[].splice},Fb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){Fb[L(b)]=b});
var Rc={};q("input select option textarea button form details".split(" "),function(b){Rc[b]=!0});var Sc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};q({data:Wb,removeData:yb},function(b,a){R[a]=b});q({data:Wb,inheritedData:Eb,scope:function(b){return z.data(b,"$scope")||Eb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return z.data(b,"$isolateScope")||z.data(b,"$isolateScopeNoTemplate")},controller:Nc,injector:function(b){return Eb(b,
"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Bb,css:function(b,a,c){a=eb(a);if(y(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=b.nodeType;if(d!==ab&&2!==d&&8!==d)if(d=L(a),Fb[d])if(y(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||A).specified?d:s;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},
text:function(){function b(a,b){if(C(b)){var d=a.nodeType;return d===ma||d===ab?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(C(a)){if(b.multiple&&"select"===sa(b)){var c=[];q(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(C(a))return b.innerHTML;xb(b,!0);b.innerHTML=a},empty:Oc},function(b,a){R.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Oc&&(2==b.length&&b!==Bb&&b!==Nc?
a:d)===s){if(I(a)){for(e=0;e<g;e++)if(b===Wb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===s?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});q({removeData:yb,on:function a(c,d,e,f){if(y(f))throw Ub("onargs");if(Jc(c)){var g=zb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=qf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===
d?a(c,Uf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Mc,one:function(a,c,d){a=z(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;xb(a);q(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){a.nodeType===ma&&c.push(a)});return c},contents:function(a){return a.contentDocument||
a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===ma||11===d){c=new R(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===ma){var d=a.firstChild;q(new R(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=z(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Pc,detach:function(a){Pc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,
d.nextSibling);d=h}},addClass:Db,removeClass:Cb,toggleClass:function(a,c,d){c&&q(c.split(" "),function(c){var f=d;C(f)&&(f=!Bb(a,c));(f?Db:Cb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Vb,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=zb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===
this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:A,type:g,target:a},c.type&&(e=x(e,c)),c=oa(h),f=d?[e].concat(d):[e],q(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)C(g)?(g=a(this[h],c,e,f),y(g)&&(g=z(g))):Lc(g,a(this[h],c,e,f));return y(g)?g:this};R.prototype.bind=
R.prototype.on;R.prototype.unbind=R.prototype.off});fb.prototype={put:function(a,c){this[Na(a,this.nextUid)]=c},get:function(a){return this[Na(a,this.nextUid)]},remove:function(a){var c=this[a=Na(a,this.nextUid)];delete this[a];return c}};var Uc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Vf=/,/,Wf=/^\s*(_?)(\S+?)\1\s*$/,Tc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Da=F("$injector");bb.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=[];if(a.length){if(c)throw O(d)&&d||(d=a.name||
rf(a)),Da("strictdi",d);c=a.toString().replace(Tc,"");c=c.match(Uc);q(c[1].split(Vf),function(a){a.replace(Wf,function(a,c,d){e.push(d)})})}a.$inject=e}}else w(a)?(c=a.length-1,La(a[c],"fn"),e=a.slice(0,c)):La(a,"fn",!0);return e};var Xf=F("$animate"),He=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Xf("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=
a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=ga();q((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});q(c,function(a,c){var g=f[c];!1===a&&g?e.push(c):!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function h(a,
c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function l(){m||(m=a.defer(),d(function(){m.resolve();m=null}));return m.promise}function k(a,c){if(ba.isObject(c)){var d=x(c.from||{},c.to||{});a.css(d)}}var m;return{animate:function(a,c,d){k(a,{from:c,to:d});return l()},enter:function(a,c,d,e){k(a,e);d?d.after(a):c.prepend(a);return l()},leave:function(a,c){k(a,c);a.remove();return l()},move:function(a,c,d,e){return this.enter(a,c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,
c,d){a=z(a);c=O(c)?c:w(c)?c.join(" "):"";q(a,function(a){Db(a,c)});k(a,d);return l()},removeClass:function(a,c,d){return this.setClass(a,[],c,d)},$$removeClassImmediately:function(a,c,d){a=z(a);c=O(c)?c:w(c)?c.join(" "):"";q(a,function(a){Cb(a,c)});k(a,d);return l()},setClass:function(a,c,d,e){var k=this,l=!1;a=z(a);var m=a.data("$$animateClasses");m?e&&m.options&&(m.options=ba.extend(m.options||{},e)):(m={classes:{},options:e},l=!0);e=m.classes;c=w(c)?c:c.split(" ");d=w(d)?d:d.split(" ");h(e,c,!0);
h(e,d,!1);l&&(m.promise=f(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&k.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,c);d&&this.$$removeClassImmediately(a,d);k(a,e);return l()},enabled:A,cancel:A}}]}],da=F("$compile");Bc.$inject=["$provide","$$sanitizeUriProvider"];var Wc=/^((?:x|data)[\:\-_])/i,vf=F("$controller"),
ad="application/json",cc={"Content-Type":ad+";charset=utf-8"},xf=/^\[|^\{(?!\{)/,yf={"[":/]$/,"{":/}$/},wf=/^\)\]\}',?\n/,dc=F("$interpolate"),Yf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Bf={http:80,https:443,ftp:21},Hb=F("$location"),Zf={$$html5:!1,$$replace:!1,absUrl:Ib("$$absUrl"),url:function(a){if(C(a))return this.$$url;var c=Yf.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Ib("$$protocol"),host:Ib("$$host"),
port:Ib("$$port"),path:id("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(O(a)||Q(a))a=a.toString(),this.$$search=vc(a);else if(I(a))a=Ba(a,{}),q(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Hb("isrcharg");break;default:C(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:id("$$hash",function(a){return null!==a?a.toString():
""}),replace:function(){this.$$replace=!0;return this}};q([hd,hc,gc],function(a){a.prototype=Object.create(Zf);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==gc||!this.$$html5)throw Hb("nostate");this.$$state=C(c)?null:c;return this}});var ja=F("$parse"),$f=Function.prototype.call,ag=Function.prototype.apply,bg=Function.prototype.bind,pb=ga();q({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,
c){a.constant=a.literal=a.sharedGetter=!0;pb[c]=a});pb["this"]=function(a){return a};pb["this"].sharedGetter=!0;var qb=x(ga(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?d+e:d:y(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,
c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),cg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},kc=function(a){this.options=a};kc.prototype={constructor:kc,
lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=qb[c],f=qb[d];qb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,
text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===
a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw ja("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=L(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-
1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;
for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=cg[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var lb=function(a,c,d){this.lexer=
a;this.$filter=c;this.options=d};lb.ZERO=x(function(){return 0},{sharedGetter:!0,constant:!0});lb.prototype={constructor:lb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.peek().identifier&&
this.peek().text in pb?a=pb[this.consume().text]:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c,d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw ja("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===
this.tokens.length)throw ja("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){if(0===this.tokens.length)throw ja("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+
"]",this.peek());return c},unaryFn:function(a,c){var d=qb[a];return x(function(a,f){return d(a,f,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,c,d,e){var f=qb[c];return x(function(c,e){return f(c,e,a,d)},{constant:a.constant&&d.constant,inputs:!e&&[a,d]})},identifier:function(){for(var a=this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)a+=this.consume().text+this.consume().text;return Df(a,this.options,this.text)},constant:function(){var a=this.consume().value;
return x(function(){return a},{constant:!0,literal:!0})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.$filter(this.consume().text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());
var f=[a].concat(d||[]);return x(function(f,h){var l=a(f,h);if(e){e[0]=l;for(l=d.length;l--;)e[l+1]=d[l](f,h);return c.apply(s,e)}return c(l)},{constant:!c.$stateful&&f.every(ic),inputs:!c.$stateful&&f})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),x(function(d,f){return a.assign(d,c(d,f),f)},
{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c;if(this.expect("?")&&(c=this.assignment(),this.consume(":"))){var d=this.assignment();return x(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})}return a},logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.text,this.logicalAND(),!0);return a},logicalAND:function(){for(var a=this.equality(),c;c=this.expect("&&");)a=this.binaryFn(a,c.text,this.equality(),!0);
return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a=this.binaryFn(a,c.text,this.relational());return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a=this.binaryFn(a,c.text,this.additive());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.text,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=
this.binaryFn(a,c.text,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(lb.ZERO,a.text,this.unary()):(a=this.expect("!"))?this.unaryFn(a.text,this.unary()):this.primary()},fieldAccess:function(a){var c=this.identifier();return x(function(d,e,f){d=f||a(d,e);return null==d?s:c(d)},{assign:function(d,e,f){var g=a(d,f);g||a.assign(d,g={},f);return c.assign(g,e)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");
return x(function(e,f){var g=a(e,f),h=d(e,f);ra(h,c);return g?ka(g[h],c):s},{assign:function(e,f,g){var h=ra(d(e,g),c),l=ka(a(e,g),c);l||a.assign(e,l={},g);return l[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var l=c?c(g,h):y(c)?s:g,k=a(g,h,l)||A;if(f)for(var m=d.length;m--;)f[m]=ka(d[m](g,h),e);ka(l,e);if(k){if(k.constructor===k)throw ja("isecfn",
e);if(k===$f||k===ag||k===bg)throw ja("isecff",e);}l=k.apply?k.apply(l,f):k(f[0],f[1],f[2],f[3],f[4]);f&&(f.length=0);return ka(l,e)}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return x(function(c,d){for(var e=[],f=0,g=a.length;f<g;f++)e.push(a[f](c,d));return e},{literal:!0,constant:a.every(ic),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
var d=this.consume();d.constant?a.push(d.value):d.identifier?a.push(d.text):this.throwError("invalid key",d);this.consume(":");c.push(this.expression())}while(this.expect(","))}this.consume("}");return x(function(d,f){for(var g={},h=0,l=c.length;h<l;h++)g[a[h]]=c[h](d,f);return g},{literal:!0,constant:c.every(ic),inputs:c})}};var Ff=ga(),Ef=ga(),Gf=Object.prototype.valueOf,za=F("$sce"),la={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},da=F("$compile"),X=V.createElement("a"),
nd=ya(T.location.href);Ic.$inject=["$provide"];od.$inject=["$locale"];qd.$inject=["$locale"];var td=".",Qf={yyyy:Z("FullYear",4),yy:Z("FullYear",2,0,!0),y:Z("FullYear",1),MMMM:Kb("Month"),MMM:Kb("Month",!0),MM:Z("Month",2,1),M:Z("Month",1,1),dd:Z("Date",2),d:Z("Date",1),HH:Z("Hours",2),H:Z("Hours",1),hh:Z("Hours",2,-12),h:Z("Hours",1,-12),mm:Z("Minutes",2),m:Z("Minutes",1),ss:Z("Seconds",2),s:Z("Seconds",1),sss:Z("Milliseconds",3),EEEE:Kb("Day"),EEE:Kb("Day",!0),a:function(a,c){return 12>a.getHours()?
c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Jb(Math[0<a?"floor":"ceil"](a/60),2)+Jb(Math.abs(a%60),2))},ww:vd(2),w:vd(1),G:lc,GG:lc,GGG:lc,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},Pf=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,Of=/^\-?\d+$/;pd.$inject=["$locale"];var Lf=ca(L),Mf=ca(vb);rd.$inject=["$parse"];var Yd=ca({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&
!c.name)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===Aa.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),wb={};q(Fb,function(a,c){if("multiple"!=a){var d=va("ng-"+c);wb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});q(Sc,function(a,c){wb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&
(e=f.ngPattern.match(Sf))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});q(["src","srcset","href"],function(a){var c=va("ng-"+a);wb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Aa.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),Qa&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Lb={$addControl:A,$$renameControl:function(a,
c){a.$name=c},$removeControl:A,$setValidity:A,$setDirty:A,$setPristine:A,$setSubmitted:A};wd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Dd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:wd,compile:function(d,e){d.addClass(Ra).addClass(ob);var f=e.name?"name":a&&e.ngForm?"ngForm":!1;return{pre:function(a,d,e,k){if(!("action"in e)){var m=function(c){a.$apply(function(){k.$commitViewValue();k.$setSubmitted()});c.preventDefault()};
d[0].addEventListener("submit",m,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",m,!1)},0,!1)})}var r=k.$$parentForm;f&&(kb(a,null,k.$name,k,k.$name),e.$observe(f,function(c){k.$name!==c&&(kb(a,null,k.$name,s,k.$name),r.$$renameControl(k,c),kb(a,null,k.$name,k,k.$name))}));d.on("$destroy",function(){r.$removeControl(k);f&&kb(a,null,e[f],s,k.$name);x(k,Lb)})}}}}}]},Zd=Dd(),le=Dd(!0),Rf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,dg=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
eg=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,fg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Ed=/^(\d{4})-(\d{2})-(\d{2})$/,Fd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,oc=/^(\d{4})-W(\d\d)$/,Gd=/^(\d{4})-(\d\d)$/,Hd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Id={text:function(a,c,d,e,f,g){mb(a,c,d,e,f,g);mc(e)},date:nb("date",Ed,Nb(Ed,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":nb("datetimelocal",Fd,Nb(Fd,"yyyy MM dd HH mm ss sss".split(" ")),
"yyyy-MM-ddTHH:mm:ss.sss"),time:nb("time",Hd,Nb(Hd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:nb("week",oc,function(a,c){if(ea(a))return a;if(O(a)){oc.lastIndex=0;var d=oc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=ud(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:nb("month",Gd,Nb(Gd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){yd(a,c,d,e);mb(a,c,d,e,f,g);e.$$parserName=
"number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:fg.test(a)?parseFloat(a):s});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!Q(a))throw Ob("numfmt",a);a=a.toString()}return a});if(y(d.min)||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||C(h)||a>=h};d.$observe("min",function(a){y(a)&&!Q(a)&&(a=parseFloat(a,10));h=Q(a)&&!isNaN(a)?a:s;e.$validate()})}if(y(d.max)||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||C(l)||a<=l};d.$observe("max",function(a){y(a)&&
!Q(a)&&(a=parseFloat(a,10));l=Q(a)&&!isNaN(a)?a:s;e.$validate()})}},url:function(a,c,d,e,f,g){mb(a,c,d,e,f,g);mc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||dg.test(d)}},email:function(a,c,d,e,f,g){mb(a,c,d,e,f,g);mc(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||eg.test(d)}},radio:function(a,c,d,e){C(d.name)&&c.attr("name",++rb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=
function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=zd(l,a,"ngTrueValue",d.ngTrueValue,!0),m=zd(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return fa(a,k)});e.$parsers.push(function(a){return a?k:m})},hidden:A,button:A,submit:A,reset:A,file:A},Cc=["$browser",
"$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Id[L(h.type)]||Id.text)(f,g,h,l[0],c,a,d,e)}}}}],gg=/^(true|false|\d+)$/,De=function(){return{restrict:"A",priority:100,compile:function(a,c){return gg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},de=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);
return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===s?"":a})}}}}],fe=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===s?"":a})}}}}],ee=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),
h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],Ce=ca({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),ge=nc("",!0),ie=nc("Odd",0),he=nc("Even",1),je=Ia({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),ke=[function(){return{restrict:"A",scope:!0,controller:"@",
priority:500}}],Hc={},hg={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=va("ng-"+a);Hc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};hg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ne=["$animate",function(a){return{multiElement:!0,
transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=V.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=ub(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],oe=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",
controller:ba.noop,compile:function(f,g){var h=g.ngInclude||g.src,l=g.onload||"",k=g.autoscroll;return function(f,g,n,q,v){var s=0,t,p,H,J=function(){p&&(p.remove(),p=null);t&&(t.$destroy(),t=null);H&&(d.leave(H).then(function(){p=null}),p=H,H=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!y(k)||k&&!f.$eval(k)||c()},n=++s;e?(a(e,!0).then(function(a){if(n===s){var c=f.$new();q.template=a;a=v(c,function(a){J();d.enter(a,null,g).then(h)});t=c;H=a;t.$emit("$includeContentLoaded",
e);f.$eval(l)}},function(){n===s&&(J(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(J(),q.template=null)})}}}}],Fe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Kc(f.template,V).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],pe=Ia({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),
Be=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?U(f):f;e.$parsers.push(function(a){if(!C(a)){var c=[];a&&q(a.split(h),function(a){a&&c.push(g?U(a):a)});return c}});e.$formatters.push(function(a){return w(a)?a.join(f):s});e.$isEmpty=function(a){return!a||!a.length}}}},ob="ng-valid",Ad="ng-invalid",Ra="ng-pristine",Mb="ng-dirty",Cd="ng-pending",Ob=new F("ngModel"),ig=["$scope","$exceptionHandler","$attrs",
"$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,m){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=s;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=s;this.$name=m(d.name||"",!1)(a);var r=f(d.ngModel),n=r.assign,u=r,v=n,
P=null,t,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");u=function(a){var d=r(a);E(d)&&(d=c(a));return d};v=function(a,c){E(r(a))?g(a,{$$$p:p.$modelValue}):n(a,p.$modelValue)}}else if(!r.assign)throw Ob("nonassign",d.ngModel,ta(e));};this.$render=A;this.$isEmpty=function(a){return C(a)||""===a||null===a||a!==a};var H=e.inheritedData("$formController")||Lb,J=0;xd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,
c){delete a[c]},parentForm:H,$animate:g});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;g.removeClass(e,Mb);g.addClass(e,Ra)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;g.removeClass(e,Ra);g.addClass(e,Mb);H.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){p.$touched=!0;p.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(P);p.$viewValue=
p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!Q(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,c=p.$valid,d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,p.$$lastCommittedViewValue,function(f){e||c===f||(p.$modelValue=f?a:s,p.$modelValue!==d&&p.$$writeModelToScope())})}};this.$$runValidators=function(a,c,d){function e(){var d=!0;q(p.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?!0:(q(p.$asyncValidators,function(a,
c){g(c,null)}),!1)}function f(){var d=[],e=!0;q(p.$asyncValidators,function(f,h){var k=f(a,c);if(!k||!E(k.then))throw Ob("$asyncValidators",k);g(h,s);d.push(k.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},A):h(!0)}function g(a,c){l===J&&p.$setValidity(a,c)}function h(a){l===J&&d(a)}J++;var l=J;(function(){var a=p.$$parserName||"parse";if(t===s)g(a,null);else return t||(q(p.$validators,function(a,c){g(c,null)}),q(p.$asyncValidators,function(a,c){g(c,
null)})),g(a,t),t;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=p.$viewValue;h.cancel(P);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=p.$$lastCommittedViewValue;if(t=C(c)?s:!0)for(var d=0;d<p.$parsers.length;d++)if(c=p.$parsers[d](c),C(c)){t=!1;break}Q(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=u(a));var e=p.$modelValue,
f=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=c;f&&(p.$modelValue=c,p.$modelValue!==e&&p.$$writeModelToScope());p.$$runValidators(c,p.$$lastCommittedViewValue,function(a){f||(p.$modelValue=a?c:s,p.$modelValue!==e&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){v(a,p.$modelValue);q(p.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=
function(c){var d=0,e=p.$options;e&&y(e.debounce)&&(e=e.debounce,Q(e)?d=e:Q(e[c])?d=e[c]:Q(e["default"])&&(d=e["default"]));h.cancel(P);d?P=h(function(){p.$commitViewValue()},d):l.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var c=u(a);if(c!==p.$modelValue&&(p.$modelValue===p.$modelValue||c===c)){p.$modelValue=p.$$rawModelValue=c;t=s;for(var d=p.$formatters,e=d.length,f=c;e--;)f=d[e](f);p.$viewValue!==f&&(p.$viewValue=p.$$lastCommittedViewValue=f,p.$render(),
p.$$runValidators(c,f,A))}return c})}],Ae=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:ig,priority:1,compile:function(c){c.addClass(Ra).addClass("ng-untouched").addClass(ob);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Lb;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",function(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&
h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],jg=/(\s+|^)default(\s+|$)/,Ee=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==s?(this.$options.updateOnDefault=!1,this.$options.updateOn=U(this.$options.updateOn.replace(jg,function(){d.$options.updateOnDefault=
!0;return" "}))):this.$options.updateOnDefault=!0}]}},qe=Ia({terminal:!0,priority:1E3}),re=["$locale","$interpolate",function(a,c){var d=/{}/g,e=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(f,g,h){function l(a){g.text(a||"")}var k=h.count,m=h.$attr.when&&g.attr(h.$attr.when),r=h.offset||0,n=f.$eval(m)||{},u={},m=c.startSymbol(),s=c.endSymbol(),y=m+k+"-"+r+s,t=ba.noop,p;q(h,function(a,c){var d=e.exec(c);d&&(d=(d[1]?"-":"")+L(d[2]),n[d]=g.attr(h.$attr[c]))});q(n,function(a,e){u[e]=c(a.replace(d,
y))});f.$watch(k,function(c){c=parseFloat(c);var d=isNaN(c);d||c in n||(c=a.pluralCat(c-r));c===p||d&&isNaN(p)||(t(),t=f.$watch(u[c],l),p=c)})}}}],se=["$parse","$animate",function(a,c){var d=F("ngRepeat"),e=function(a,c,d,e,k,m,q){a[d]=e;k&&(a[k]=m);a.$index=c;a.$first=0===c;a.$last=c===q-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=V.createComment(" end ngRepeat: "+
h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var m=k[1],r=k[2],n=k[3],u=k[4],k=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",m);var v=k[3]||k[1],y=k[2];if(n&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(n)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(n)))throw d("badident",n);var t,p,H,F,B={$id:Na};u?t=a(u):(H=function(a,c){return Na(c)},
F=function(a){return a});return function(a,f,g,k,m){t&&(p=function(c,d,e){y&&(B[y]=c);B[v]=d;B.$index=e;return t(a,B)});var u=ga();a.$watchCollection(r,function(g){var k,r,t=f[0],G,B=ga(),x,C,A,N,E,w,I;n&&(a[n]=g);if(Sa(g))E=g,r=p||H;else{r=p||F;E=[];for(I in g)g.hasOwnProperty(I)&&"$"!=I.charAt(0)&&E.push(I);E.sort()}x=E.length;I=Array(x);for(k=0;k<x;k++)if(C=g===E?k:E[k],A=g[C],N=r(C,A,k),u[N])w=u[N],delete u[N],B[N]=w,I[k]=w;else{if(B[N])throw q(I,function(a){a&&a.scope&&(u[a.id]=a)}),d("dupes",
h,N,A);I[k]={id:N,scope:s,clone:s};B[N]=!0}for(G in u){w=u[G];N=ub(w.clone);c.leave(N);if(N[0].parentNode)for(k=0,r=N.length;k<r;k++)N[k].$$NG_REMOVED=!0;w.scope.$destroy()}for(k=0;k<x;k++)if(C=g===E?k:E[k],A=g[C],w=I[k],w.scope){G=t;do G=G.nextSibling;while(G&&G.$$NG_REMOVED);w.clone[0]!=G&&c.move(ub(w.clone),null,z(t));t=w.clone[w.clone.length-1];e(w.scope,k,v,A,y,C,x)}else m(function(a,d){w.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,null,z(t));t=f;w.clone=a;B[w.id]=w;e(w.scope,k,v,
A,y,C,x)});u=B})}}}}],te=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],me=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],ue=Ia(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,
"")});a&&c.css(a)},!0)}),ve=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],m=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var s=ub(h[d].clone);k[d].$destroy();(l[d]=a.leave(s)).then(m(l,d))}h.length=0;k.length=0;(g=f.cases["!"+c]||f.cases["?"])&&q(g,function(c){c.transclude(function(d,
e){k.push(e);var f=c.element;d[d.length++]=V.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],we=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),xe=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,
element:c})}}),ze=Ia({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw F("ngTransclude")("orphan",ta(c));f(function(a){c.empty();c.append(a)})}}),$d=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],kg=F("ngOptions"),ye=ca({restrict:"A",terminal:!0}),ae=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
e={$setViewValue:A};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var l=this,k={},m=e,q;l.databound=d.ngModel;l.init=function(a,c,d){m=a;q=d};l.addOption=function(c,d){Ma(c,'"option value"');k[c]=!0;m.$viewValue==c&&(a.val(c),q.parent()&&q.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};l.removeOption=function(a){this.hasOption(a)&&(delete k[a],m.$viewValue===a&&this.renderUnknownOption(a))};l.renderUnknownOption=function(c){c=
"? "+Na(c)+" ?";q.val(c);a.prepend(q);a.val(c);q.prop("selected",!0)};l.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){l.renderUnknownOption=A})}],link:function(e,g,h,l){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(B.parent()&&B.remove(),c.val(a),""===a&&t.prop("selected",!0)):null==a&&t?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){B.parent()&&B.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;
d.$render=function(){var a=new fb(d.$viewValue);q(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){fa(e,d.$viewValue)||(e=oa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function r(e,f,g){function h(a,c,d){U[A]=d;I&&(U[I]=c);return a(e,U)}function k(a){var c;if(u)if(L&&w(a)){c=new fb([]);for(var d=0;d<a.length;d++)c.put(h(L,null,a[d]),!0)}else c=
new fb(a);else L&&(a=h(L,null,a));return function(d,e){var f;f=L?L:z?z:D;return u?y(c.remove(h(f,d,e))):a===h(f,d,e)}}function l(){p||(e.$$postDigest(r),p=!0)}function m(a,c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function r(){p=!1;var a={"":[]},c=[""],d,l,s,t,v;s=g.$viewValue;t=O(e)||[];var A=I?Object.keys(t).sort():t,w,z,E,D,S={};v=k(s);var Q=!1,V,X;R={};for(D=0;E=A.length,D<E;D++){w=D;if(I&&(w=A[D],"$"===w.charAt(0)))continue;z=t[w];d=h(M,w,z)||"";(l=a[d])||(l=a[d]=[],c.push(d));d=v(w,z);Q=Q||d;z=h(B,w,z);
z=y(z)?z:"";X=L?L(e,U):I?A[D]:D;L&&(R[X]=w);l.push({id:X,label:z,selected:d})}u||(x||null===s?a[""].unshift({id:"",label:"",selected:!Q}):Q||a[""].unshift({id:"?",label:"",selected:!0}));w=0;for(A=c.length;w<A;w++){d=c[w];l=a[d];T.length<=w?(s={element:F.clone().attr("label",d),label:l.label},t=[s],T.push(t),f.append(s.element)):(t=T[w],s=t[0],s.label!=d&&s.element.attr("label",s.label=d));Q=null;D=0;for(E=l.length;D<E;D++)d=l[D],(v=t[D+1])?(Q=v.element,v.label!==d.label&&(m(S,v.label,!1),m(S,d.label,
!0),Q.text(v.label=d.label),Q.prop("label",v.label)),v.id!==d.id&&Q.val(v.id=d.id),Q[0].selected!==d.selected&&(Q.prop("selected",v.selected=d.selected),Qa&&Q.prop("selected",v.selected))):(""===d.id&&x?V=x:(V=C.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),t.push(v={element:V,label:d.label,id:d.id,selected:d.selected}),m(S,d.label,!0),Q?Q.after(V):s.element.append(V),Q=V);for(D++;t.length>D;)d=t.pop(),m(S,d.label,!1),d.element.remove()}for(;T.length>
w;){l=T.pop();for(D=1;D<l.length;++D)m(S,l[D].label,!1);l[0].element.remove()}q(S,function(a,c){0<a?n.addOption(c):0>a&&n.removeOption(c)})}var t;if(!(t=v.match(d)))throw kg("iexp",v,ta(f));var B=c(t[2]||t[1]),A=t[4]||t[6],E=/ as /.test(t[0])&&t[1],z=E?c(E):null,I=t[5],M=c(t[3]||""),D=c(t[2]?t[1]:A),O=c(t[7]),L=t[8]?c(t[8]):null,R={},T=[[{element:f,label:""}]],U={};x&&(a(x)(e),x.removeClass("ng-scope"),x.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=O(e)||[],c;if(u)c=[],q(f.val(),
function(d){d=L?R[d]:d;c.push("?"===d?s:""===d?null:h(z?z:D,d,a[d]))});else{var d=L?R[f.val()]:f.val();c="?"===d?s:""===d?null:h(z?z:D,d,a[d])}g.$setViewValue(c);r()})});g.$render=r;e.$watchCollection(O,l);e.$watchCollection(function(){var a=O(e),c;if(a&&w(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(B,d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(B,d,a[d]));return c},l);u&&e.$watchCollection(function(){return g.$modelValue},l)}if(l[1]){var n=l[0];l=l[1];var u=h.multiple,
v=h.ngOptions,x=!1,t,p=!1,C=z(V.createElement("option")),F=z(V.createElement("optgroup")),B=C.clone();h=0;for(var A=g.children(),E=A.length;h<E;h++)if(""===A[h].value){t=x=A.eq(h);break}n.init(l,x,B);u&&(l.$isEmpty=function(a){return!a||0===a.length});v?r(e,g,l):u?m(e,g,l):k(e,g,l,n)}}}}],ce=["$interpolate",function(a){var c={addOption:A,removeOption:A};return{restrict:"E",priority:100,compile:function(d,e){if(C(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=
d.parent(),m=k.data("$selectController")||k.parent().data("$selectController");m&&m.databound||(m=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&m.removeOption(c);m.addOption(a,d)}):m.addOption(e.value,d);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],be=ca({restrict:"E",terminal:!1}),Ec=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},
Dc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){O(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw F("ngPattern")("noregexp",g,a,ta(c));f=a||s;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||C(f)||f.test(a)}}}}},Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=aa(a);f=isNaN(a)?-1:a;e.$validate()});
e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Fc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=aa(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};T.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Sd(),Ud(ba),z(V).ready(function(){Od(V,xc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');

/*
 AngularJS v1.3.16
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(N,f,W){'use strict';f.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){return function(X,r,g){g=g.ngAnimateChildren;f.isString(g)&&0===g.length?r.data("$$ngAnimateChildren",!0):X.$watch(g,function(f){r.data("$$ngAnimateChildren",!!f)})}}).factory("$$animateReflow",["$$rAF","$document",function(f,r){var g=r[0].body;return function(r){return f(function(){r(g.offsetWidth)})}}]).config(["$provide","$animateProvider",function(X,r){function g(f){for(var n=0;n<f.length;n++){var g=
f[n];if(1==g.nodeType)return g}}function ba(f,n){return g(f)==g(n)}var t=f.noop,n=f.forEach,da=r.$$selectors,aa=f.isArray,ea=f.isString,ga=f.isObject,w={running:!0},u;X.decorator("$animate",["$delegate","$$q","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document","$templateRequest","$$jqLite",function(O,N,M,Y,y,H,P,W,Z,Q){function R(a,c){var b=a.data("$$ngAnimateState")||{};c&&(b.running=!0,b.structural=!0,a.data("$$ngAnimateState",b));return b.disabled||b.running&&b.structural}
function D(a){var c,b=N.defer();b.promise.$$cancelFn=function(){c&&c()};P.$$postDigest(function(){c=a(function(){b.resolve()})});return b.promise}function I(a){if(ga(a))return a.tempClasses&&ea(a.tempClasses)&&(a.tempClasses=a.tempClasses.split(/\s+/)),a}function S(a,c,b){b=b||{};var d={};n(b,function(e,a){n(a.split(" "),function(a){d[a]=e})});var h=Object.create(null);n((a.attr("class")||"").split(/\s+/),function(e){h[e]=!0});var f=[],l=[];n(c&&c.classes||[],function(e,a){var b=h[a],c=d[a]||{};!1===
e?(b||"addClass"==c.event)&&l.push(a):!0===e&&(b&&"removeClass"!=c.event||f.push(a))});return 0<f.length+l.length&&[f.join(" "),l.join(" ")]}function T(a){if(a){var c=[],b={};a=a.substr(1).split(".");(Y.transitions||Y.animations)&&c.push(M.get(da[""]));for(var d=0;d<a.length;d++){var f=a[d],k=da[f];k&&!b[f]&&(c.push(M.get(k)),b[f]=!0)}return c}}function U(a,c,b,d){function h(e,a){var b=e[a],c=e["before"+a.charAt(0).toUpperCase()+a.substr(1)];if(b||c)return"leave"==a&&(c=b,b=null),u.push({event:a,
fn:b}),J.push({event:a,fn:c}),!0}function k(c,l,x){var E=[];n(c,function(a){a.fn&&E.push(a)});var m=0;n(E,function(c,f){var p=function(){a:{if(l){(l[f]||t)();if(++m<E.length)break a;l=null}x()}};switch(c.event){case "setClass":l.push(c.fn(a,e,A,p,d));break;case "animate":l.push(c.fn(a,b,d.from,d.to,p));break;case "addClass":l.push(c.fn(a,e||b,p,d));break;case "removeClass":l.push(c.fn(a,A||b,p,d));break;default:l.push(c.fn(a,p,d))}});l&&0===l.length&&x()}var l=a[0];if(l){d&&(d.to=d.to||{},d.from=
d.from||{});var e,A;aa(b)&&(e=b[0],A=b[1],e?A?b=e+" "+A:(b=e,c="addClass"):(b=A,c="removeClass"));var x="setClass"==c,E=x||"addClass"==c||"removeClass"==c||"animate"==c,p=a.attr("class")+" "+b;if(B(p)){var ca=t,m=[],J=[],g=t,s=[],u=[],p=(" "+p).replace(/\s+/g,".");n(T(p),function(a){!h(a,c)&&x&&(h(a,"addClass"),h(a,"removeClass"))});return{node:l,event:c,className:b,isClassBased:E,isSetClassOperation:x,applyStyles:function(){d&&a.css(f.extend(d.from||{},d.to||{}))},before:function(a){ca=a;k(J,m,function(){ca=
t;a()})},after:function(a){g=a;k(u,s,function(){g=t;a()})},cancel:function(){m&&(n(m,function(a){(a||t)(!0)}),ca(!0));s&&(n(s,function(a){(a||t)(!0)}),g(!0))}}}}}function G(a,c,b,d,h,k,l,e){function A(e){var l="$animate:"+e;J&&J[l]&&0<J[l].length&&H(function(){b.triggerHandler(l,{event:a,className:c})})}function x(){A("before")}function E(){A("after")}function p(){p.hasBeenRun||(p.hasBeenRun=!0,k())}function g(){if(!g.hasBeenRun){m&&m.applyStyles();g.hasBeenRun=!0;l&&l.tempClasses&&n(l.tempClasses,
function(a){u.removeClass(b,a)});var x=b.data("$$ngAnimateState");x&&(m&&m.isClassBased?C(b,c):(H(function(){var e=b.data("$$ngAnimateState")||{};fa==e.index&&C(b,c,a)}),b.data("$$ngAnimateState",x)));A("close");e()}}var m=U(b,a,c,l);if(!m)return p(),x(),E(),g(),t;a=m.event;c=m.className;var J=f.element._data(m.node),J=J&&J.events;d||(d=h?h.parent():b.parent());if(z(b,d))return p(),x(),E(),g(),t;d=b.data("$$ngAnimateState")||{};var L=d.active||{},s=d.totalActive||0,q=d.last;h=!1;if(0<s){s=[];if(m.isClassBased)"setClass"==
q.event?(s.push(q),C(b,c)):L[c]&&(v=L[c],v.event==a?h=!0:(s.push(v),C(b,c)));else if("leave"==a&&L["ng-leave"])h=!0;else{for(var v in L)s.push(L[v]);d={};C(b,!0)}0<s.length&&n(s,function(a){a.cancel()})}!m.isClassBased||m.isSetClassOperation||"animate"==a||h||(h="addClass"==a==b.hasClass(c));if(h)return p(),x(),E(),A("close"),e(),t;L=d.active||{};s=d.totalActive||0;if("leave"==a)b.one("$destroy",function(a){a=f.element(this);var e=a.data("$$ngAnimateState");e&&(e=e.active["ng-leave"])&&(e.cancel(),
C(a,"ng-leave"))});u.addClass(b,"ng-animate");l&&l.tempClasses&&n(l.tempClasses,function(a){u.addClass(b,a)});var fa=K++;s++;L[c]=m;b.data("$$ngAnimateState",{last:m,active:L,index:fa,totalActive:s});x();m.before(function(e){var l=b.data("$$ngAnimateState");e=e||!l||!l.active[c]||m.isClassBased&&l.active[c].event!=a;p();!0===e?g():(E(),m.after(g))});return m.cancel}function q(a){if(a=g(a))a=f.isFunction(a.getElementsByClassName)?a.getElementsByClassName("ng-animate"):a.querySelectorAll(".ng-animate"),
n(a,function(a){a=f.element(a);(a=a.data("$$ngAnimateState"))&&a.active&&n(a.active,function(a){a.cancel()})})}function C(a,c){if(ba(a,y))w.disabled||(w.running=!1,w.structural=!1);else if(c){var b=a.data("$$ngAnimateState")||{},d=!0===c;!d&&b.active&&b.active[c]&&(b.totalActive--,delete b.active[c]);if(d||!b.totalActive)u.removeClass(a,"ng-animate"),a.removeData("$$ngAnimateState")}}function z(a,c){if(w.disabled)return!0;if(ba(a,y))return w.running;var b,d,g;do{if(0===c.length)break;var k=ba(c,y),
l=k?w:c.data("$$ngAnimateState")||{};if(l.disabled)return!0;k&&(g=!0);!1!==b&&(k=c.data("$$ngAnimateChildren"),f.isDefined(k)&&(b=k));d=d||l.running||l.last&&!l.last.isClassBased}while(c=c.parent());return!g||!b&&d}u=Q;y.data("$$ngAnimateState",w);var $=P.$watch(function(){return Z.totalPendingRequests},function(a,c){0===a&&($(),P.$$postDigest(function(){P.$$postDigest(function(){w.running=!1})}))}),K=0,V=r.classNameFilter(),B=V?function(a){return V.test(a)}:function(){return!0};return{animate:function(a,
c,b,d,h){d=d||"ng-inline-animate";h=I(h)||{};h.from=b?c:null;h.to=b?b:c;return D(function(b){return G("animate",d,f.element(g(a)),null,null,t,h,b)})},enter:function(a,c,b,d){d=I(d);a=f.element(a);c=c&&f.element(c);b=b&&f.element(b);R(a,!0);O.enter(a,c,b);return D(function(h){return G("enter","ng-enter",f.element(g(a)),c,b,t,d,h)})},leave:function(a,c){c=I(c);a=f.element(a);q(a);R(a,!0);return D(function(b){return G("leave","ng-leave",f.element(g(a)),null,null,function(){O.leave(a)},c,b)})},move:function(a,
c,b,d){d=I(d);a=f.element(a);c=c&&f.element(c);b=b&&f.element(b);q(a);R(a,!0);O.move(a,c,b);return D(function(h){return G("move","ng-move",f.element(g(a)),c,b,t,d,h)})},addClass:function(a,c,b){return this.setClass(a,c,[],b)},removeClass:function(a,c,b){return this.setClass(a,[],c,b)},setClass:function(a,c,b,d){d=I(d);a=f.element(a);a=f.element(g(a));if(R(a))return O.$$setClassImmediately(a,c,b,d);var h,k=a.data("$$animateClasses"),l=!!k;k||(k={classes:{}});h=k.classes;c=aa(c)?c:c.split(" ");n(c,
function(a){a&&a.length&&(h[a]=!0)});b=aa(b)?b:b.split(" ");n(b,function(a){a&&a.length&&(h[a]=!1)});if(l)return d&&k.options&&(k.options=f.extend(k.options||{},d)),k.promise;a.data("$$animateClasses",k={classes:h,options:d});return k.promise=D(function(e){var l=a.parent(),b=g(a),c=b.parentNode;if(!c||c.$$NG_REMOVED||b.$$NG_REMOVED)e();else{b=a.data("$$animateClasses");a.removeData("$$animateClasses");var c=a.data("$$ngAnimateState")||{},d=S(a,b,c.active);return d?G("setClass",d,a,l,null,function(){d[0]&&
O.$$addClassImmediately(a,d[0]);d[1]&&O.$$removeClassImmediately(a,d[1])},b.options,e):e()}})},cancel:function(a){a.$$cancelFn()},enabled:function(a,c){switch(arguments.length){case 2:if(a)C(c);else{var b=c.data("$$ngAnimateState")||{};b.disabled=!0;c.data("$$ngAnimateState",b)}break;case 1:w.disabled=!a;break;default:a=!w.disabled}return!!a}}}]);r.register("",["$window","$sniffer","$timeout","$$animateReflow",function(r,w,M,Y){function y(){b||(b=Y(function(){c=[];b=null;B={}}))}function H(a,e){b&&
b();c.push(e);b=Y(function(){n(c,function(a){a()});c=[];b=null;B={}})}function P(a,e){var b=g(a);a=f.element(b);k.push(a);b=Date.now()+e;b<=h||(M.cancel(d),h=b,d=M(function(){X(k);k=[]},e,!1))}function X(a){n(a,function(a){(a=a.data("$$ngAnimateCSS3Data"))&&n(a.closeAnimationFns,function(a){a()})})}function Z(a,e){var b=e?B[e]:null;if(!b){var c=0,d=0,f=0,g=0;n(a,function(a){if(1==a.nodeType){a=r.getComputedStyle(a)||{};c=Math.max(Q(a[z+"Duration"]),c);d=Math.max(Q(a[z+"Delay"]),d);g=Math.max(Q(a[K+
"Delay"]),g);var e=Q(a[K+"Duration"]);0<e&&(e*=parseInt(a[K+"IterationCount"],10)||1);f=Math.max(e,f)}});b={total:0,transitionDelay:d,transitionDuration:c,animationDelay:g,animationDuration:f};e&&(B[e]=b)}return b}function Q(a){var e=0;a=ea(a)?a.split(/\s*,\s*/):[];n(a,function(a){e=Math.max(parseFloat(a)||0,e)});return e}function R(b,e,c,d){b=0<=["ng-enter","ng-leave","ng-move"].indexOf(c);var f,p=e.parent(),h=p.data("$$ngAnimateKey");h||(p.data("$$ngAnimateKey",++a),h=a);f=h+"-"+g(e).getAttribute("class");
var p=f+" "+c,h=B[p]?++B[p].total:0,m={};if(0<h){var n=c+"-stagger",m=f+" "+n;(f=!B[m])&&u.addClass(e,n);m=Z(e,m);f&&u.removeClass(e,n)}u.addClass(e,c);var n=e.data("$$ngAnimateCSS3Data")||{},k=Z(e,p);f=k.transitionDuration;k=k.animationDuration;if(b&&0===f&&0===k)return u.removeClass(e,c),!1;c=d||b&&0<f;b=0<k&&0<m.animationDelay&&0===m.animationDuration;e.data("$$ngAnimateCSS3Data",{stagger:m,cacheKey:p,running:n.running||0,itemIndex:h,blockTransition:c,closeAnimationFns:n.closeAnimationFns||[]});
p=g(e);c&&(I(p,!0),d&&e.css(d));b&&(p.style[K+"PlayState"]="paused");return!0}function D(a,e,b,c,d){function f(){e.off(D,h);u.removeClass(e,k);u.removeClass(e,t);z&&M.cancel(z);G(e,b);var a=g(e),c;for(c in s)a.style.removeProperty(s[c])}function h(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-H,0)>=B&&b>=y&&c()}var m=g(e);a=e.data("$$ngAnimateCSS3Data");if(-1!=m.getAttribute("class").indexOf(b)&&a){var k=
"",t="";n(b.split(" "),function(a,b){var e=(0<b?" ":"")+a;k+=e+"-active";t+=e+"-pending"});var s=[],q=a.itemIndex,v=a.stagger,r=0;if(0<q){r=0;0<v.transitionDelay&&0===v.transitionDuration&&(r=v.transitionDelay*q);var w=0;0<v.animationDelay&&0===v.animationDuration&&(w=v.animationDelay*q,s.push(C+"animation-play-state"));r=Math.round(100*Math.max(r,w))/100}r||(u.addClass(e,k),a.blockTransition&&I(m,!1));var F=Z(e,a.cacheKey+" "+k),y=Math.max(F.transitionDuration,F.animationDuration);if(0===y)u.removeClass(e,
k),G(e,b),c();else{!r&&d&&0<Object.keys(d).length&&(F.transitionDuration||(e.css("transition",F.animationDuration+"s linear all"),s.push("transition")),e.css(d));var q=Math.max(F.transitionDelay,F.animationDelay),B=1E3*q;0<s.length&&(v=m.getAttribute("style")||"",";"!==v.charAt(v.length-1)&&(v+=";"),m.setAttribute("style",v+" "));var H=Date.now(),D=V+" "+$,q=1E3*(r+1.5*(q+y)),z;0<r&&(u.addClass(e,t),z=M(function(){z=null;0<F.transitionDuration&&I(m,!1);0<F.animationDuration&&(m.style[K+"PlayState"]=
"");u.addClass(e,k);u.removeClass(e,t);d&&(0===F.transitionDuration&&e.css("transition",F.animationDuration+"s linear all"),e.css(d),s.push("transition"))},1E3*r,!1));e.on(D,h);a.closeAnimationFns.push(function(){f();c()});a.running++;P(e,q);return f}}else c()}function I(a,b){a.style[z+"Property"]=b?"none":""}function S(a,b,c,d){if(R(a,b,c,d))return function(a){a&&G(b,c)}}function T(a,b,c,d,f){if(b.data("$$ngAnimateCSS3Data"))return D(a,b,c,d,f);G(b,c);d()}function U(a,b,c,d,f){var g=S(a,b,c,f.from);
if(g){var h=g;H(b,function(){h=T(a,b,c,d,f.to)});return function(a){(h||t)(a)}}y();d()}function G(a,b){u.removeClass(a,b);var c=a.data("$$ngAnimateCSS3Data");c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData("$$ngAnimateCSS3Data"))}function q(a,b){var c="";a=aa(a)?a:a.split(/\s+/);n(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var C="",z,$,K,V;N.ontransitionend===W&&N.onwebkittransitionend!==W?(C="-webkit-",z="WebkitTransition",$="webkitTransitionEnd transitionend"):
(z="transition",$="transitionend");N.onanimationend===W&&N.onwebkitanimationend!==W?(C="-webkit-",K="WebkitAnimation",V="webkitAnimationEnd animationend"):(K="animation",V="animationend");var B={},a=0,c=[],b,d=null,h=0,k=[];return{animate:function(a,b,c,d,f,g){g=g||{};g.from=c;g.to=d;return U("animate",a,b,f,g)},enter:function(a,b,c){c=c||{};return U("enter",a,"ng-enter",b,c)},leave:function(a,b,c){c=c||{};return U("leave",a,"ng-leave",b,c)},move:function(a,b,c){c=c||{};return U("move",a,"ng-move",
b,c)},beforeSetClass:function(a,b,c,d,f){f=f||{};b=q(c,"-remove")+" "+q(b,"-add");if(f=S("setClass",a,b,f.from))return H(a,d),f;y();d()},beforeAddClass:function(a,b,c,d){d=d||{};if(b=S("addClass",a,q(b,"-add"),d.from))return H(a,c),b;y();c()},beforeRemoveClass:function(a,b,c,d){d=d||{};if(b=S("removeClass",a,q(b,"-remove"),d.from))return H(a,c),b;y();c()},setClass:function(a,b,c,d,f){f=f||{};c=q(c,"-remove");b=q(b,"-add");return T("setClass",a,c+" "+b,d,f.to)},addClass:function(a,b,c,d){d=d||{};return T("addClass",
a,q(b,"-add"),c,d.to)},removeClass:function(a,b,c,d){d=d||{};return T("removeClass",a,q(b,"-remove"),c,d.to)}}}])}])})(window,window.angular);
/*
 AngularJS v1.4.3
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(s,n,t){'use strict';n.module("ngAria",["ng"]).provider("$aria",function(){function a(a,f,l){return function(m,d,e){var b=e.$normalize(f);c[b]&&!e[b]&&m.$watch(e[a],function(b){b=l?!b:!!b;d.attr(f,b)})}}var c={ariaHidden:!0,ariaChecked:!0,ariaDisabled:!0,ariaRequired:!0,ariaInvalid:!0,ariaMultiline:!0,ariaValue:!0,tabindex:!0,bindKeypress:!0,bindRoleForClick:!0};this.config=function(a){c=n.extend(c,a)};this.$get=function(){return{config:function(a){return c[a]},$$watchExpr:a}}}).directive("ngShow",
["$aria",function(a){return a.$$watchExpr("ngShow","aria-hidden",!0)}]).directive("ngHide",["$aria",function(a){return a.$$watchExpr("ngHide","aria-hidden",!1)}]).directive("ngModel",["$aria",function(a){function c(c,m,d){return a.config(m)&&!d.attr(c)}function k(a,c){return!c.attr("role")&&c.attr("type")===a&&"INPUT"!==c[0].nodeName}function f(a,c){var d=a.type,e=a.role;return"checkbox"===(d||e)||"menuitemcheckbox"===e?"checkbox":"radio"===(d||e)||"menuitemradio"===e?"radio":"range"===d||"progressbar"===
e||"slider"===e?"range":"textbox"===(d||e)||"TEXTAREA"===c[0].nodeName?"multiline":""}return{restrict:"A",require:"?ngModel",priority:200,compile:function(l,m){var d=f(m,l);return{pre:function(a,b,c,g){"checkbox"===d&&"checkbox"!==c.type&&(g.$isEmpty=function(b){return!1===b})},post:function(e,b,h,g){function f(){return g.$modelValue}function m(){return p?(p=!1,function(a){a=h.value==g.$viewValue;b.attr("aria-checked",a);b.attr("tabindex",0-!a)}):function(a){b.attr("aria-checked",h.value==g.$viewValue)}}
function l(){b.attr("aria-checked",!g.$isEmpty(g.$viewValue))}var p=c("tabindex","tabindex",b);switch(d){case "radio":case "checkbox":k(d,b)&&b.attr("role",d);c("aria-checked","ariaChecked",b)&&e.$watch(f,"radio"===d?m():l);break;case "range":k(d,b)&&b.attr("role","slider");if(a.config("ariaValue")){var n=!b.attr("aria-valuemin")&&(h.hasOwnProperty("min")||h.hasOwnProperty("ngMin")),q=!b.attr("aria-valuemax")&&(h.hasOwnProperty("max")||h.hasOwnProperty("ngMax")),r=!b.attr("aria-valuenow");n&&h.$observe("min",
function(a){b.attr("aria-valuemin",a)});q&&h.$observe("max",function(a){b.attr("aria-valuemax",a)});r&&e.$watch(f,function(a){b.attr("aria-valuenow",a)})}break;case "multiline":c("aria-multiline","ariaMultiline",b)&&b.attr("aria-multiline",!0)}p&&b.attr("tabindex",0);g.$validators.required&&c("aria-required","ariaRequired",b)&&e.$watch(function(){return g.$error.required},function(a){b.attr("aria-required",!!a)});c("aria-invalid","ariaInvalid",b)&&e.$watch(function(){return g.$invalid},function(a){b.attr("aria-invalid",
!!a)})}}}}}]).directive("ngDisabled",["$aria",function(a){return a.$$watchExpr("ngDisabled","aria-disabled")}]).directive("ngMessages",function(){return{restrict:"A",require:"?ngMessages",link:function(a,c,k,f){c.attr("aria-live")||c.attr("aria-live","assertive")}}}).directive("ngClick",["$aria","$parse",function(a,c){return{restrict:"A",compile:function(k,f){var l=c(f.ngClick,null,!0);return function(c,d,e){function b(a,b){if(-1!==b.indexOf(a[0].nodeName))return!0}var f=["BUTTON","A","INPUT","TEXTAREA"];
!a.config("bindRoleForClick")||d.attr("role")||b(d,f)||d.attr("role","button");a.config("tabindex")&&!d.attr("tabindex")&&d.attr("tabindex",0);if(a.config("bindKeypress")&&!e.ngKeypress&&!b(d,f))d.on("keypress",function(a){function b(){l(c,{$event:a})}var d=a.which||a.keyCode;32!==d&&13!==d||c.$apply(b)})}}}}]).directive("ngDblclick",["$aria",function(a){return function(c,k,f){a.config("tabindex")&&!k.attr("tabindex")&&k.attr("tabindex",0)}}])})(window,window.angular);

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.10.0
 */
!function(e,t,n){"use strict";!function(){t.module("ngMaterial",["ng","ngAnimate","ngAria","material.core","material.core.gestures","material.core.theming.palette","material.core.theming","material.components.autocomplete","material.components.backdrop","material.components.button","material.components.bottomSheet","material.components.card","material.components.checkbox","material.components.content","material.components.chips","material.components.dialog","material.components.divider","material.components.fabActions","material.components.fabSpeedDial","material.components.fabToolbar","material.components.fabTrigger","material.components.gridList","material.components.icon","material.components.list","material.components.input","material.components.menu","material.components.progressCircular","material.components.progressLinear","material.components.radioButton","material.components.select","material.components.slider","material.components.sticky","material.components.sidenav","material.components.subheader","material.components.swipe","material.components.switch","material.components.tabs","material.components.toast","material.components.toolbar","material.components.tooltip","material.components.whiteframe"])}(),function(){function e(e,t){e.decorator("$$rAF",["$delegate",n]),t.theme("default").primaryPalette("indigo").accentPalette("pink").warnPalette("red").backgroundPalette("grey")}function n(e){return e.throttle=function(t){var n,o,r,i;return function(){n=arguments,i=this,r=t,o||(o=!0,e(function(){r.apply(i,n),o=!1}))}},e}t.module("material.core",["material.core.gestures","material.core.theming"]).config(e),e.$inject=["$provide","$mdThemingProvider"]}(),function(){function e(e,t){function n(e){return o?"webkit"+e.charAt(0).toUpperCase()+e.substring(1):e}var o=/webkit/i.test(t.vendorPrefix);return{KEY_CODE:{ENTER:13,ESCAPE:27,SPACE:32,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,TAB:9,BACKSPACE:8,DELETE:46},CSS:{TRANSITIONEND:"transitionend"+(o?" webkitTransitionEnd":""),ANIMATIONEND:"animationend"+(o?" webkitAnimationEnd":""),TRANSFORM:n("transform"),TRANSFORM_ORIGIN:n("transformOrigin"),TRANSITION:n("transition"),TRANSITION_DURATION:n("transitionDuration"),ANIMATION_PLAY_STATE:n("animationPlayState"),ANIMATION_DURATION:n("animationDuration"),ANIMATION_NAME:n("animationName"),ANIMATION_TIMING:n("animationTimingFunction"),ANIMATION_DIRECTION:n("animationDirection")},MEDIA:{sm:"(max-width: 600px)","gt-sm":"(min-width: 600px)",md:"(min-width: 600px) and (max-width: 960px)","gt-md":"(min-width: 960px)",lg:"(min-width: 960px) and (max-width: 1200px)","gt-lg":"(min-width: 1200px)"},MEDIA_PRIORITY:["gt-lg","lg","gt-md","md","gt-sm","sm"]}}t.module("material.core").factory("$mdConstant",e),e.$inject=["$$rAF","$sniffer"]}(),function(){function e(e,n){function o(){return[].concat(E)}function r(){return E.length}function i(e){return E.length&&e>-1&&e<E.length}function a(e){return e?i(u(e)+1):!1}function d(e){return e?i(u(e)-1):!1}function c(e){return i(e)?E[e]:null}function l(e,t){return E.filter(function(n){return n[e]===t})}function m(e,n){return e?(t.isNumber(n)||(n=E.length),E.splice(n,0,e),u(e)):-1}function s(e){f(e)&&E.splice(u(e),1)}function u(e){return E.indexOf(e)}function f(e){return e&&u(e)>-1}function p(){return E.length?E[0]:null}function h(){return E.length?E[E.length-1]:null}function b(e,o,r,a){r=r||g;for(var d=u(o);;){if(!i(d))return null;var c=d+(e?-1:1),l=null;if(i(c)?l=E[c]:n&&(l=e?h():p(),c=u(l)),null===l||c===a)return null;if(r(l))return l;t.isUndefined(a)&&(a=c),d=c}}var g=function(){return!0};e&&!t.isArray(e)&&(e=Array.prototype.slice.call(e)),n=!!n;var E=e||[];return{items:o,count:r,inRange:i,contains:f,indexOf:u,itemAt:c,findBy:l,add:m,remove:s,first:p,last:h,next:t.bind(null,b,!1),previous:t.bind(null,b,!0),hasPrevious:d,hasNext:a}}t.module("material.core").config(["$provide",function(t){t.decorator("$mdUtil",["$delegate",function(t){return t.iterator=e,t}])}])}(),function(){function e(e,n,o){function r(e){var n=u[e];t.isUndefined(n)&&(n=u[e]=i(e));var o=p[n];return t.isUndefined(o)&&(o=a(n)),o}function i(t){return e.MEDIA[t]||("("!==t.charAt(0)?"("+t+")":t)}function a(e){var t=f[e]=o.matchMedia(e);return t.addListener(d),p[t.media]=!!t.matches}function d(e){n.$evalAsync(function(){p[e.media]=!!e.matches})}function c(e){return f[e]}function l(t,n){for(var o=0;o<e.MEDIA_PRIORITY.length;o++){var r=e.MEDIA_PRIORITY[o];if(f[u[r]].matches){var i=s(t,n+"-"+r);if(t[i])return t[i]}}return t[s(t,n)]}function m(n,o,r){var i=[];return n.forEach(function(n){var a=s(o,n);o[a]&&i.push(o.$observe(a,t.bind(void 0,r,null)));for(var d in e.MEDIA){if(a=s(o,n+"-"+d),!o[a])return;i.push(o.$observe(a,t.bind(void 0,r,d)))}}),function(){i.forEach(function(e){e()})}}function s(e,t){return h[t]||(h[t]=e.$normalize(t))}var u={},f={},p={},h={};return r.getResponsiveAttribute=l,r.getQuery=c,r.watchResponsiveAttributes=m,r}t.module("material.core").factory("$mdMedia",e),e.$inject=["$mdConstant","$rootScope","$window"]}(),function(){var o=0;t.module("material.core").factory("$mdUtil",["$cacheFactory","$document","$timeout","$q","$window","$mdConstant",function(r,i,a,d,c,l){function m(e){return e[0]||e}var s;return s={now:e.performance?t.bind(e.performance,e.performance.now):Date.now,clientRect:function(e,t,n){var o=m(e);t=m(t||o.offsetParent||document.body);var r=o.getBoundingClientRect(),i=n?t.getBoundingClientRect():{left:0,top:0,width:0,height:0};return{left:r.left-i.left,top:r.top-i.top,width:r.width,height:r.height}},offsetRect:function(e,t){return s.clientRect(e,t,!0)},nodesToArray:function(e){for(var t=[],n=0;n<e.length;++n)t.push(e.item(n));return t},disableScrollAround:function(e){function n(){function n(e){}function o(e){e.preventDefault()}var r=c.getComputedStyle(e[0]).zIndex-1;isNaN(r)&&(r=99);var d=t.element('<div class="md-scroll-mask" style="z-index: '+r+'">  <div class="md-scroll-mask-bar"></div></div>');return a.appendChild(d[0]),d.on("wheel",o),d.on("touchmove",o),i.on("keydown",n),function(){d.off("wheel"),d.off("touchmove"),d[0].parentNode.removeChild(d[0]),i.off("keydown",n),delete s.disableScrollAround._enableScrolling}}function o(){var e=a.getAttribute("style")||"",t=a.scrollTop+a.parentElement.scrollTop;return r(a,{position:"fixed",width:"100%",overflowY:"scroll",top:-t+"px"}),function(){a.setAttribute("style",e),a.scrollTop=t}}function r(e,t){for(var n in t)e.style[n]=t[n]}if(s.disableScrollAround._enableScrolling)return s.disableScrollAround._enableScrolling;e=t.element(e);var a=i[0].body,d=o(),l=n();return s.disableScrollAround._enableScrolling=function(){d(),l(),delete s.disableScrollAround._enableScrolling}},enableScrolling:function(){var e=this.disableScrollAround._enableScrolling;e&&e()},floatingScrollbars:function(){if(this.floatingScrollbars.cached===n){var e=t.element('<div style="width: 100%; z-index: -1; position: absolute; height: 35px; overflow-y: scroll"><div style="height: 60;"></div></div>');i[0].body.appendChild(e[0]),this.floatingScrollbars.cached=e[0].offsetWidth==e[0].childNodes[0].offsetWidth,e.remove()}return this.floatingScrollbars.cached},forceFocus:function(t){var n=t[0]||t;document.addEventListener("click",function r(e){e.target===n&&e.$focus&&(n.focus(),e.stopImmediatePropagation(),e.preventDefault(),n.removeEventListener("click",r))},!0);var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!1,!0,e,{},0,0,0,0,!1,!1,!1,!1,0,null),o.$material=!0,o.$focus=!0,n.dispatchEvent(o)},transitionEndPromise:function(e,t){function n(t){t&&t.target!==e[0]||(e.off(l.CSS.TRANSITIONEND,n),o.resolve())}t=t||{};var o=d.defer();return e.on(l.CSS.TRANSITIONEND,n),t.timeout&&a(n,t.timeout),o.promise},fakeNgModel:function(){return{$fake:!0,$setTouched:t.noop,$setViewValue:function(e){this.$viewValue=e,this.$render(e),this.$viewChangeListeners.forEach(function(e){e()})},$isEmpty:function(e){return 0===(""+e).length},$parsers:[],$formatters:[],$viewChangeListeners:[],$render:t.noop}},debounce:function(e,t,o,r){var i;return function(){var d=o,c=Array.prototype.slice.call(arguments);a.cancel(i),i=a(function(){i=n,e.apply(d,c)},t||10,r)}},throttle:function(e,t){var n;return function(){var o=this,r=arguments,i=s.now();(!n||i-n>t)&&(e.apply(o,r),n=i)}},time:function(e){var t=s.now();return e(),s.now()-t},nextUid:function(){return""+o++},disconnectScope:function(e){if(e&&e.$root!==e&&!e.$$destroyed){var t=e.$parent;e.$$disconnected=!0,t.$$childHead===e&&(t.$$childHead=e.$$nextSibling),t.$$childTail===e&&(t.$$childTail=e.$$prevSibling),e.$$prevSibling&&(e.$$prevSibling.$$nextSibling=e.$$nextSibling),e.$$nextSibling&&(e.$$nextSibling.$$prevSibling=e.$$prevSibling),e.$$nextSibling=e.$$prevSibling=null}},reconnectScope:function(e){if(e&&e.$root!==e&&e.$$disconnected){var t=e,n=t.$parent;t.$$disconnected=!1,t.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=t,n.$$childTail=t):n.$$childHead=n.$$childTail=t}},getClosest:function(e,n,o){if(e instanceof t.element&&(e=e[0]),n=n.toUpperCase(),o&&(e=e.parentNode),!e)return null;do if(e.nodeName===n)return e;while(e=e.parentNode);return null},extractElementByName:function(e,n){for(var o=0,r=e.length;r>o;o++)if(e[o].nodeName.toLowerCase()===n)return t.element(e[o]);return e},initOptionalProperties:function(e,n,o){o=o||{},t.forEach(e.$$isolateBindings,function(r,i){if(r.optional&&t.isUndefined(e[i])){var a=n.hasOwnProperty(n.$normalize(r.attrName));e[i]=t.isDefined(o[i])?o[i]:a}})}}}]),t.element.prototype.focus=t.element.prototype.focus||function(){return this.length&&this[0].focus(),this},t.element.prototype.blur=t.element.prototype.blur||function(){return this.length&&this[0].blur(),this}}(),function(){function e(e,n,o){function r(e,o,r){var i=e[0]||e;!i||i.hasAttribute(o)&&0!==i.getAttribute(o).length||c(i,o)||(r=t.isString(r)?r.trim():"",r.length?e.attr(o,r):n.warn('ARIA: Attribute "',o,'", required for accessibility, is missing on node:',i))}function i(t,n,o){e(function(){r(t,n,o())})}function a(e,t){i(e,t,function(){return d(e)})}function d(e){return e.text().trim()}function c(e,t){function n(e){var t=e.currentStyle?e.currentStyle:o.getComputedStyle(e);return"none"===t.display}var r=e.hasChildNodes(),i=!1;if(r)for(var a=e.childNodes,d=0;d<a.length;d++){var c=a[d];1===c.nodeType&&c.hasAttribute(t)&&(n(c)||(i=!0))}return i}return{expect:r,expectAsync:i,expectWithText:a}}t.module("material.core").service("$mdAria",e),e.$inject=["$$rAF","$log","$window"]}(),function(){function e(e,n,o,r,i,a){this.compile=function(d){var c=d.templateUrl,l=d.template||"",m=d.controller,s=d.controllerAs,u=d.resolve||{},f=d.locals||{},p=d.transformTemplate||t.identity,h=d.bindToController;return t.forEach(u,function(e,n){u[n]=t.isString(e)?o.get(e):o.invoke(e)}),t.extend(u,f),u.$template=c?n.get(c,{cache:a}).then(function(e){return e.data}):e.when(l),e.all(u).then(function(e){var n=p(e.$template),o=d.element||t.element("<div>").html(n.trim()).contents(),a=r(o);return{locals:e,element:o,link:function(n){if(e.$scope=n,m){var r=i(m,e,!0);h&&t.extend(r.instance,e);var d=r();o.data("$ngControllerController",d),o.children().data("$ngControllerController",d),s&&(n[s]=d)}return a(n)}}})}}t.module("material.core").service("$mdCompiler",e),e.$inject=["$q","$http","$injector","$compile","$controller","$templateCache"]}(),function(){function n(){}function o(n,o,r){function i(e,t,n){var o=f[t.replace(/^\$md./,"")];if(!o)throw new Error("Failed to register element with handler "+t+". Available handlers: "+Object.keys(f).join(", "));return o.registerElement(e,n)}function a(e,o){var r=new n(e);return t.extend(r,o),f[e]=r,h}var c=navigator.userAgent||navigator.vendor||e.opera,m=c.match(/ipad|iphone|ipod/i),s=c.match(/android/i),u="undefined"!=typeof e.jQuery&&t.element===e.jQuery,h={handler:a,register:i,isHijackingClicks:(m||s)&&!u&&!p};return h.isHijackingClicks&&h.handler("click",{options:{maxDistance:6},onEnd:function(e,t){t.distance<this.state.options.maxDistance&&this.dispatchEvent(e,"click")}}),h.handler("press",{onStart:function(e,t){this.dispatchEvent(e,"$md.pressdown")},onEnd:function(e,t){this.dispatchEvent(e,"$md.pressup")}}).handler("hold",{options:{maxDistance:6,delay:500},onCancel:function(){r.cancel(this.state.timeout)},onStart:function(e,n){return this.state.registeredParent?(this.state.pos={x:n.x,y:n.y},void(this.state.timeout=r(t.bind(this,function(){this.dispatchEvent(e,"$md.hold"),this.cancel()}),this.state.options.delay,!1))):this.cancel()},onMove:function(e,t){e.preventDefault();var n=this.state.pos.x-t.x,o=this.state.pos.y-t.y;Math.sqrt(n*n+o*o)>this.options.maxDistance&&this.cancel()},onEnd:function(){this.onCancel()}}).handler("drag",{options:{minDistance:6,horizontal:!0,cancelMultiplier:1.5},onStart:function(e){this.state.registeredParent||this.cancel()},onMove:function(e,t){var n,o;e.preventDefault(),this.state.dragPointer?this.dispatchDragMove(e):(this.state.options.horizontal?(n=Math.abs(t.distanceX)>this.state.options.minDistance,o=Math.abs(t.distanceY)>this.state.options.minDistance*this.state.options.cancelMultiplier):(n=Math.abs(t.distanceY)>this.state.options.minDistance,o=Math.abs(t.distanceX)>this.state.options.minDistance*this.state.options.cancelMultiplier),n?(this.state.dragPointer=d(e),l(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragstart",this.state.dragPointer)):o&&this.cancel())},dispatchDragMove:o.throttle(function(e){this.state.isRunning&&(l(e,this.state.dragPointer),this.dispatchEvent(e,"$md.drag",this.state.dragPointer))}),onEnd:function(e,t){this.state.dragPointer&&(l(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragend",this.state.dragPointer))}}).handler("swipe",{options:{minVelocity:.65,minDistance:10},onEnd:function(e,t){if(Math.abs(t.velocityX)>this.state.options.minVelocity&&Math.abs(t.distanceX)>this.state.options.minDistance){var n="left"==t.directionX?"$md.swipeleft":"$md.swiperight";this.dispatchEvent(e,n)}}})}function r(e){this.name=e,this.state={}}function i(){function n(e,n,o){o=o||s;var r=new t.element.Event(n);r.$material=!0,r.pointer=o,r.srcEvent=e,t.extend(r,{clientX:o.x,clientY:o.y,screenX:o.x,screenY:o.y,pageX:o.x,pageY:o.y,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey,metaKey:e.metaKey}),t.element(o.target).trigger(r)}function o(t,n,o){o=o||s;var r;"click"===n?(r=document.createEvent("MouseEvents"),r.initMouseEvent("click",!0,!0,e,t.detail,o.x,o.y,o.x,o.y,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,t.button,t.relatedTarget||null)):(r=document.createEvent("CustomEvent"),r.initCustomEvent(n,!0,!0,{})),r.$material=!0,r.pointer=o,r.srcEvent=t,o.target.dispatchEvent(r)}var i="undefined"!=typeof e.jQuery&&t.element===e.jQuery;return r.prototype={options:{},dispatchEvent:i?n:o,onStart:t.noop,onMove:t.noop,onEnd:t.noop,onCancel:t.noop,start:function(e,n){if(!this.state.isRunning){var o=this.getNearestParent(e.target),r=o&&o.$mdGesture[this.name]||{};this.state={isRunning:!0,options:t.extend({},this.options,r),registeredParent:o},this.onStart(e,n)}},move:function(e,t){this.state.isRunning&&this.onMove(e,t)},end:function(e,t){this.state.isRunning&&(this.onEnd(e,t),this.state.isRunning=!1)},cancel:function(e,t){this.onCancel(e,t),this.state={}},getNearestParent:function(e){for(var t=e;t;){if((t.$mdGesture||{})[this.name])return t;t=t.parentNode}return null},registerElement:function(e,t){function n(){delete e[0].$mdGesture[o.name],e.off("$destroy",n)}var o=this;return e[0].$mdGesture=e[0].$mdGesture||{},e[0].$mdGesture[this.name]=t||{},e.on("$destroy",n),n}},r}function a(e,n){function o(e,t){var o;for(var r in f)o=f[r],o instanceof n&&("start"===e&&o.cancel(),o[e](t,s))}function r(e){if(!s){var t=+Date.now();u&&!c(e,u)&&t-u.endTime<1500||(s=d(e),o("start",e))}}function i(e){s&&c(e,s)&&(l(e,s),o("move",e))}function a(e){s&&c(e,s)&&(l(e,s),s.endTime=+Date.now(),o("end",e),u=s,s=null)}document.contains||(document.contains=function(e){return document.body.contains(e)}),!h&&e.isHijackingClicks&&(document.addEventListener("click",function(e){var t=0===e.clientX&&0===e.clientY;t||e.$material||e.isIonicTap||(e.preventDefault(),e.stopPropagation())},!0),h=!0);var m="mousedown touchstart pointerdown",p="mousemove touchmove pointermove",b="mouseup mouseleave touchend touchcancel pointerup pointercancel";t.element(document).on(m,r).on(p,i).on(b,a).on("$$mdGestureReset",function(){u=s=null})}function d(e){var t=m(e),n={startTime:+Date.now(),target:e.target,type:e.type.charAt(0)};return n.startX=n.x=t.pageX,n.startY=n.y=t.pageY,n}function c(e,t){return e&&t&&e.type.charAt(0)===t.type}function l(e,t){var n=m(e),o=t.x=n.pageX,r=t.y=n.pageY;t.distanceX=o-t.startX,t.distanceY=r-t.startY,t.distance=Math.sqrt(t.distanceX*t.distanceX+t.distanceY*t.distanceY),t.directionX=t.distanceX>0?"right":t.distanceX<0?"left":"",t.directionY=t.distanceY>0?"up":t.distanceY<0?"down":"",t.duration=+Date.now()-t.startTime,t.velocityX=t.distanceX/t.duration,t.velocityY=t.distanceY/t.duration}function m(e){return e=e.originalEvent||e,e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0]||e}var s,u,f={},p=!1,h=!1;t.module("material.core.gestures",[]).provider("$mdGesture",n).factory("$$MdGestureHandler",i).run(a),n.prototype={skipClickHijack:function(){return p=!0},$get:["$$MdGestureHandler","$$rAF","$timeout",function(e,t,n){return new o(e,t,n)}]},o.$inject=["$$MdGestureHandler","$$rAF","$timeout"],a.$inject=["$mdGesture","$$MdGestureHandler"]}(),function(){function e(){function e(e){function n(e){return c.optionsFactory=e.options,c.methods=(e.methods||[]).concat(a),l}function o(e,t){return d[e]=t,l}function r(t,n){if(n=n||{},n.methods=n.methods||[],n.options=n.options||function(){return{}},/^cancel|hide|show$/.test(t))throw new Error("Preset '"+t+"' in "+e+" is reserved!");if(n.methods.indexOf("_options")>-1)throw new Error("Method '_options' in "+e+" is reserved!");return c.presets[t]={methods:n.methods.concat(a),optionsFactory:n.options,argOption:n.argOption},l}function i(n,o,r){function i(e){return e&&e._options&&(e=e._options),s.show(t.extend({},m,e))}function a(t,n){var o={};return o[e]=u,r.invoke(t||function(){return n},{},o)}var l,m,s=n(),u={hide:s.hide,cancel:s.cancel,show:i};return l=c.methods||[],m=a(c.optionsFactory,{}),t.forEach(d,function(e,t){u[t]=e}),t.forEach(c.presets,function(e,n){function o(e){this._options=t.extend({},r,e)}var r=a(e.optionsFactory,{}),i=(e.methods||[]).concat(l);if(t.extend(r,{$type:n}),t.forEach(i,function(e){o.prototype[e]=function(t){return this._options[e]=t,this}}),e.argOption){var d="show"+n.charAt(0).toUpperCase()+n.slice(1);u[d]=function(e){var t=u[n](e);return u.show(t)}}u[n]=function(n){return arguments.length&&e.argOption&&!t.isObject(n)&&!t.isArray(n)?(new o)[e.argOption](n):new o(n)}}),u}var a=["onHide","onShow","onRemove"],d={},c={presets:{}},l={setDefaults:n,addPreset:r,addMethod:o,$get:i};return l.addPreset("build",{methods:["controller","controllerAs","resolve","template","templateUrl","themable","transformTemplate","parent"]}),i.$inject=["$$interimElement","$animate","$injector"],l}function o(e,o,r,i,a,d,c,l,m){function s(e){return e&&t.isString(e)?e.replace(/\{\{/g,u).replace(/}}/g,f):e}var u=c.startSymbol(),f=c.endSymbol(),p="{{"===u&&"}}"===f,h=p?t.identity:s;return function(){function c(e){if(b.length)return p.cancel().then(function(){return c(e)});var t=new f(e);return b.push(t),t.show().then(function(){return t.deferred.promise})}function s(e){var t=b.shift();return t&&t.remove().then(function(){t.deferred.resolve(e)})}function u(e){var t=b.shift();return o.when(t&&t.remove().then(function(){t.deferred.reject(e)}))}function f(c){var s,u,f,b,g;return c=c||{},c=t.extend({preserveScope:!1,scope:c.scope||r.$new(c.isolateScope),onShow:function(e,t,n){return d.enter(t,n.parent)},onRemove:function(e,t,n){return t&&d.leave(t)||o.when()}},c),c.template&&(c.template=h(c.template)),s={options:c,deferred:o.defer(),show:function(){var n;return n=c.skipCompile?o(function(e){e({locals:{},link:function(){return c.element}})}):l.compile(c),b=n.then(function(n){function r(){c.hideDelay&&(u=i(p.cancel,c.hideDelay))}if(t.extend(n.locals,s.options),f=n.link(c.scope),t.isFunction(c.parent)?c.parent=c.parent(c.scope,f,c):t.isString(c.parent)&&(c.parent=t.element(e[0].querySelector(c.parent))),!(c.parent||{}).length){var d;a[0]&&a[0].querySelector&&(d=a[0].querySelector(":not(svg) > body")),d||(d=a[0]),"#comment"==d.nodeName&&(d=e[0].body),c.parent=t.element(d)}c.themable&&m(f);var l=c.onShow(c.scope,f,c);return o.when(l).then(function(){(c.onComplete||t.noop)(c.scope,f,c),r()})},function(e){b=!0,s.deferred.reject(e)})},cancelTimeout:function(){u&&(i.cancel(u),u=n)},remove:function(){return s.cancelTimeout(),g=o.when(b).then(function(){var e=f?c.onRemove(c.scope,f,c):!0;return o.when(e).then(function(){c.preserveScope||c.scope.$destroy(),g=!0})})}}}var p,b=[];return p={show:c,hide:s,cancel:u}}}return e.$get=o,o.$inject=["$document","$q","$rootScope","$timeout","$rootElement","$animate","$interpolate","$mdCompiler","$mdTheming"],e}t.module("material.core").provider("$$interimElement",e)}(),function(){function e(e,n){function o(e){return e&&""!==e}var r,i=[],a={};return r={notFoundError:function(t){e.error("No instance found for handle",t)},getInstances:function(){return i},get:function(e){if(!o(e))return null;var t,n,r;for(t=0,n=i.length;n>t;t++)if(r=i[t],r.$$mdHandle===e)return r;return null},register:function(e,n){function o(){var t=i.indexOf(e);-1!==t&&i.splice(t,1)}function r(){var t=a[n];t&&(t.resolve(e),delete a[n])}return n?(e.$$mdHandle=n,i.push(e),r(),o):t.noop},when:function(e){if(o(e)){var t=n.defer(),i=r.get(e);return i?t.resolve(i):a[e]=t,t.promise}return n.reject("Invalid `md-component-id` value.")}}}t.module("material.core").factory("$mdComponentRegistry",e),e.$inject=["$log","$q"]}(),function(){!function(){function e(e){function n(n,r,i){var a=o(r);return e.attach(n,r,t.extend(a,i))}function o(e){return e.hasClass("md-icon-button")?{isMenuItem:e.hasClass("md-menu-item"),fitRipple:!0,center:!0}:{isMenuItem:e.hasClass("md-menu-item"),dimBackground:!0}}return{attach:n}}t.module("material.core").factory("$mdButtonInkRipple",e),e.$inject=["$mdInkRipple"]}()}(),function(){!function(){function e(e){function n(n,o,r){return e.attach(n,o,t.extend({center:!0,dimBackground:!1,fitRipple:!0},r))}return{attach:n}}t.module("material.core").factory("$mdCheckboxInkRipple",e),e.$inject=["$mdInkRipple"]}()}(),function(){!function(){function e(e){function n(n,o,r){return e.attach(n,o,t.extend({center:!1,dimBackground:!0,outline:!1,rippleSize:"full"},r))}return{attach:n}}t.module("material.core").factory("$mdListInkRipple",e),e.$inject=["$mdInkRipple"]}()}(),function(){function e(e,n){return{controller:t.noop,link:function(t,o,r){r.hasOwnProperty("mdInkRippleCheckbox")?n.attach(t,o):e.attach(t,o)}}}function n(e,n){function o(o,r,i){function a(){var e=r.data("$mdRippleContainer");return e?e:(e=t.element('<div class="md-ripple-container">'),r.append(e),r.data("$mdRippleContainer",e),e)}function d(e){function t(e){var t="#"===e.charAt(0)?e.substr(1):e,n=t.length/3,o=t.substr(0,n),r=t.substr(n,n),i=t.substr(2*n);return 1===n&&(o+=o,r+=r,i+=i),"rgba("+parseInt(o,16)+","+parseInt(r,16)+","+parseInt(i,16)+",0.1)"}function n(e){return e.replace(")",", 0.1)").replace("(","a(")}if(e)return 0===e.indexOf("rgba")?e.replace(/\d?\.?\d*\s*\)\s*$/,"0.1)"):0===e.indexOf("rgb")?n(e):0===e.indexOf("#")?t(e):void 0}function c(e,t){g.splice(g.indexOf(e),1),0===g.length&&a().css({backgroundColor:""}),n(function(){e.remove()},t,!1)}function l(e){var t=g.indexOf(e),n=E[t]||{},o=g.length>1?!1:M,r=g.length>1?!1:$;o||n.animating||r?e.addClass("md-ripple-visible"):e&&(e.removeClass("md-ripple-visible"),i.outline&&e.css({width:p+"px",height:p+"px",marginLeft:-1*p+"px",marginTop:-1*p+"px"}),c(e,i.outline?450:650))}function m(o,c){function m(e){var n=t.element('<div class="md-ripple" data-counter="'+b++ +'">');return g.unshift(n),E.unshift({animating:!0}),f.append(n),e&&n.css(e),n}function s(e,t){var n,o,r,a=f.prop("offsetWidth"),d=f.prop("offsetHeight");return i.isMenuItem?o=Math.sqrt(Math.pow(a,2)+Math.pow(d,2)):i.outline?(r=A.getBoundingClientRect(),e-=r.left,t-=r.top,a=Math.max(e,a-e),d=Math.max(t,d-t),o=2*Math.sqrt(Math.pow(a,2)+Math.pow(d,2))):(n=i.fullRipple?1.1:.8,o=Math.sqrt(Math.pow(a,2)+Math.pow(d,2))*n,i.fitRipple&&(o=Math.min(d,a,o))),o}function u(e,t,n){function o(e){return e.replace("rgba","rgb").replace(/,[^\),]+\)/,")")}var r=A.getBoundingClientRect(),a={backgroundColor:o(T),borderColor:o(T),width:e+"px",height:e+"px"};return i.outline?(a.width=0,a.height=0):a.marginLeft=a.marginTop=e*-.5+"px",i.center?a.left=a.top="50%":(a.left=Math.round((t-r.left)/f.prop("offsetWidth")*100)+"%",a.top=Math.round((n-r.top)/f.prop("offsetHeight")*100)+"%"),a}T=d(r.attr("md-ink-ripple"))||d(e.getComputedStyle(i.colorElement[0]).color||"rgb(0, 0, 0)");var f=a(),h=s(o,c),v=u(h,o,c),M=m(v),$=g.indexOf(M),C=E[$]||{};return p=h,C.animating=!0,n(function(){i.dimBackground&&f.css({backgroundColor:T}),M.addClass("md-ripple-placed md-ripple-scaled"),M.css(i.outline?{borderWidth:.5*h+"px",marginLeft:h*-.5+"px",marginTop:h*-.5+"px"}:{left:"50%",top:"50%"}),l(M),n(function(){C.animating=!1,l(M)},i.outline?450:225,!1)},0,!1),M}function s(e){f()&&(m(e.pointer.x,e.pointer.y),$=!0)}function u(){$=!1;var e=g[g.length-1];n(function(){l(e)},0,!1)}function f(){function e(e){return e&&e.hasAttribute&&e.hasAttribute("disabled")}var t=A.parentNode,n=t&&t.parentNode,o=n&&n.parentNode;return!(e(A)||e(t)||e(n)||e(o))}if(r.controller("mdNoInk"))return t.noop;i=t.extend({colorElement:r,mousedown:!0,hover:!0,focus:!0,center:!1,mousedownPauseTime:150,dimBackground:!1,outline:!1,fullRipple:!0,isMenuItem:!1,fitRipple:!1},i);var p,h=r.controller("mdInkRipple")||{},b=0,g=[],E=[],v=r.attr("md-highlight"),M=!1,$=!1,A=r[0],C=r.attr("md-ripple-size"),T=d(r.attr("md-ink-ripple"))||d(i.colorElement.length&&e.getComputedStyle(i.colorElement[0]).color||"rgb(0, 0, 0)");switch(C){case"full":i.fullRipple=!0;break;case"partial":i.fullRipple=!1}return i.mousedown&&r.on("$md.pressdown",s).on("$md.pressup",u),h.createRipple=m,v&&o.$watch(v,function(e){M=e,M&&!g.length&&n(function(){m(0,0)},0,!1),t.forEach(g,l)}),function(){r.off("$md.pressdown",s).off("$md.pressup",u),a().remove()}}return{attach:o}}function o(){return function(){return{controller:t.noop}}}t.module("material.core").factory("$mdInkRipple",n).directive("mdInkRipple",e).directive("mdNoInk",o()).directive("mdNoBar",o()).directive("mdNoStretch",o()),e.$inject=["$mdButtonInkRipple","$mdCheckboxInkRipple"],n.$inject=["$window","$timeout"]}(),function(){!function(){function e(e){function n(n,o,r){return e.attach(n,o,t.extend({center:!1,dimBackground:!0,outline:!1,rippleSize:"full"},r))}return{attach:n}}t.module("material.core").factory("$mdTabInkRipple",e),e.$inject=["$mdInkRipple"]}()}(),function(){t.module("material.core.theming.palette",[]).constant("$mdColorPalette",{red:{50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100",contrastStrongLightColors:"500 600 700 A200 A400 A700"},pink:{50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100",contrastStrongLightColors:"500 600 A200 A400 A700"},purple:{50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400 A700"},"deep-purple":{50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200"},indigo:{50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400"},blue:{50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff",contrastDefaultColor:"light",contrastDarkColors:"100 200 300 400 A100",contrastStrongLightColors:"500 600 700 A200 A400 A700"},"light-blue":{50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900 A700",contrastStrongLightColors:"500 600 700 800 A700"},cyan:{50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700 800"},teal:{50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",A100:"#a7ffeb",A200:"#64ffda",A400:"#1de9b6",A700:"#00bfa5",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700"},green:{50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700"},"light-green":{50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",A100:"#ccff90",A200:"#b2ff59",A400:"#76ff03",A700:"#64dd17",contrastDefaultColor:"dark",contrastLightColors:"800 900",contrastStrongLightColors:"800 900"},lime:{50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",A100:"#f4ff81",A200:"#eeff41",A400:"#c6ff00",A700:"#aeea00",contrastDefaultColor:"dark",contrastLightColors:"900",contrastStrongLightColors:"900"},yellow:{50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600",contrastDefaultColor:"dark"},amber:{50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00",contrastDefaultColor:"dark"},orange:{50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00",contrastDefaultColor:"dark",contrastLightColors:"800 900",contrastStrongLightColors:"800 900"},"deep-orange":{50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100 A200",contrastStrongLightColors:"500 600 700 800 900 A400 A700"},brown:{50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",
800:"#4e342e",900:"#3e2723",A100:"#d7ccc8",A200:"#bcaaa4",A400:"#8d6e63",A700:"#5d4037",contrastDefaultColor:"light",contrastDarkColors:"50 100 200",contrastStrongLightColors:"300 400"},grey:{50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",1000:"#000000",A100:"#ffffff",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161",contrastDefaultColor:"dark",contrastLightColors:"600 700 800 900"},"blue-grey":{50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300",contrastStrongLightColors:"400 500"}})}(),function(){function e(e){function o(e,t){return t=t||{},m[e]=a(e,t),g}function r(e,n){return a(e,t.extend({},m[e]||{},n))}function a(e,t){var n=T.filter(function(e){return!t[e]});if(n.length)throw new Error("Missing colors %1 in palette %2!".replace("%1",n.join(", ")).replace("%2",e));return t}function d(e,n){if(s[e])return s[e];n=n||"default";var o="string"==typeof n?s[n]:n,r=new c(e);return o&&t.forEach(o.colors,function(e,n){r.colors[n]={name:e.name,hues:t.extend({},e.hues)}}),s[e]=r,r}function c(e){function n(e){if(e=0===arguments.length?!0:!!e,e!==o.isDark){o.isDark=e,o.foregroundPalette=o.isDark?p:f,o.foregroundShadow=o.isDark?h:b;var n=o.isDark?C:A,r=o.isDark?A:C;return t.forEach(n,function(e,t){var n=o.colors[t],i=r[t];if(n)for(var a in n.hues)n.hues[a]===i[a]&&(n.hues[a]=e[a])}),o}}var o=this;o.name=e,o.colors={},o.dark=n,n(!1),M.forEach(function(e){var n=(o.isDark?C:A)[e];o[e+"Palette"]=function(r,i){var a=o.colors[e]={name:r,hues:t.extend({},n,i)};return Object.keys(a.hues).forEach(function(e){if(!n[e])throw new Error("Invalid hue name '%1' in theme %2's %3 color %4. Available hue names: %4".replace("%1",e).replace("%2",o.name).replace("%3",r).replace("%4",Object.keys(n).join(", ")))}),Object.keys(a.hues).map(function(e){return a.hues[e]}).forEach(function(t){if(-1==T.indexOf(t))throw new Error("Invalid hue value '%1' in theme %2's %3 color %4. Available hue values: %5".replace("%1",t).replace("%2",o.name).replace("%3",e).replace("%4",r).replace("%5",T.join(", ")))}),o},o[e+"Color"]=function(){var t=Array.prototype.slice.call(arguments);return console.warn("$mdThemingProviderTheme."+e+"Color() has been deprecated. Use $mdThemingProviderTheme."+e+"Palette() instead."),o[e+"Palette"].apply(o,t)}})}function u(e,o){function r(e){return e===n||""===e?!0:i.THEMES[e]!==n}function i(t,o){o===n&&(o=t,t=n),t===n&&(t=e),i.inherit(o,o)}return i.inherit=function(n,i){function a(e){r(e)||o.warn("Attempted to use unregistered theme '"+e+"'. Register it with $mdThemingProvider.theme().");var t=n.data("$mdThemeName");t&&n.removeClass("md-"+t+"-theme"),n.addClass("md-"+e+"-theme"),n.data("$mdThemeName",e)}var d=i.controller("mdTheme"),c=n.attr("md-theme-watch");if((v||t.isDefined(c))&&"false"!=c){var l=e.$watch(function(){return d&&d.$mdTheme||E},a);n.on("$destroy",l)}else{var m=d&&d.$mdTheme||E;a(m)}},i.THEMES=t.extend({},s),i.defaultTheme=function(){return E},i.registered=r,i}m={},s={};var g,E="default",v=!1;return t.extend(m,e),u.$inject=["$rootScope","$log"],g={definePalette:o,extendPalette:r,theme:d,setDefaultTheme:function(e){E=e},alwaysWatchTheme:function(e){v=e},$get:u,_LIGHT_DEFAULT_HUES:A,_DARK_DEFAULT_HUES:C,_PALETTES:m,_THEMES:s,_parseRules:i,_rgba:l}}function o(e,t,n){return{priority:100,link:{pre:function(o,r,i){var a={$setTheme:function(t){e.registered(t)||n.warn("attempted to use unregistered theme '"+t+"'"),a.$mdTheme=t}};r.data("$mdThemeController",a),a.$setTheme(t(i.mdTheme)(o)),i.$observe("mdTheme",a.$setTheme)}}}}function r(e){return e}function i(e,n,o){d(e,n),o=o.replace(/THEME_NAME/g,e.name);var r=[],i=e.colors[n],a=new RegExp(".md-"+e.name+"-theme","g"),c=new RegExp("('|\")?{{\\s*("+n+")-(color|contrast)-?(\\d\\.?\\d*)?\\s*}}(\"|')?","g"),s=/'?"?\{\{\s*([a-zA-Z]+)-(A?\d+|hue\-[0-3]|shadow)-?(\d\.?\d*)?\s*\}\}'?"?/g,u=m[i.name];return o=o.replace(s,function(t,n,o,r){return"foreground"===n?"shadow"==o?e.foregroundShadow:e.foregroundPalette[o]||e.foregroundPalette[1]:(0===o.indexOf("hue")&&(o=e.colors[n].hues[o]),l((m[e.colors[n].name][o]||"").value,r))}),t.forEach(i.hues,function(t,n){var i=o.replace(c,function(e,n,o,r,i){return l(u[t]["color"===r?"value":"contrast"],i)});"default"!==n&&(i=i.replace(a,".md-"+e.name+"-theme.md-"+n)),"default"==e.name&&(i=i.replace(/\.md-default-theme/g,"")),r.push(i)}),r}function a(e){function n(e){var n=e.contrastDefaultColor,o=e.contrastLightColors||[],r=e.contrastStrongLightColors||[],i=e.contrastDarkColors||[];"string"==typeof o&&(o=o.split(" ")),"string"==typeof r&&(r=r.split(" ")),"string"==typeof i&&(i=i.split(" ")),delete e.contrastDefaultColor,delete e.contrastLightColors,delete e.contrastStrongLightColors,delete e.contrastDarkColors,t.forEach(e,function(a,d){function l(){return"light"===n?i.indexOf(d)>-1?g:r.indexOf(d)>-1?v:E:o.indexOf(d)>-1?r.indexOf(d)>-1?v:E:g}if(!t.isObject(a)){var m=c(a);if(!m)throw new Error("Color %1, in palette %2's hue %3, is invalid. Hex or rgb(a) color expected.".replace("%1",a).replace("%2",e.name).replace("%3",d));e[d]={value:m,contrast:l()}}})}var o=document.getElementsByTagName("head")[0],r=o?o.firstElementChild:null,a=e.has("$MD_THEME_CSS")?e.get("$MD_THEME_CSS"):"";if(r&&0!==a.length){t.forEach(m,n);var d={},l=a.split(/\}(?!(\}|'|"|;))/).filter(function(e){return e&&e.length}).map(function(e){return e.trim()+"}"}),f=new RegExp("md-("+M.join("|")+")","g");M.forEach(function(e){d[e]=""}),l.forEach(function(e){for(var t,n=(e.match(f),0);t=M[n];n++)if(e.indexOf(".md-"+t)>-1)return d[t]+=e;for(n=0;t=M[n];n++)if(e.indexOf(t)>-1)return d[t]+=e;return d[$]+=e}),t.forEach(s,function(e){u[e.name]||(M.forEach(function(t){for(var n=i(e,t,d[t]);n.length;){var a=document.createElement("style");a.setAttribute("type","text/css"),a.appendChild(document.createTextNode(n.shift())),o.insertBefore(a,r)}}),e.colors.primary.name==e.colors.accent.name&&console.warn("$mdThemingProvider: Using the same palette for primary and accent. This violates the material design spec."),u[e.name]=!0)})}}function d(e,t){if(!m[(e.colors[t]||{}).name])throw new Error("You supplied an invalid color palette for theme %1's %2 palette. Available palettes: %3".replace("%1",e.name).replace("%2",t).replace("%3",Object.keys(m).join(", ")))}function c(e){if(t.isArray(e)&&3==e.length)return e;if(/^rgb/.test(e))return e.replace(/(^\s*rgba?\(|\)\s*$)/g,"").split(",").map(function(e,t){return 3==t?parseFloat(e,10):parseInt(e,10)});if("#"==e.charAt(0)&&(e=e.substring(1)),/^([a-fA-F0-9]{3}){1,2}$/g.test(e)){var n=e.length/3,o=e.substr(0,n),r=e.substr(n,n),i=e.substr(2*n);return 1===n&&(o+=o,r+=r,i+=i),[parseInt(o,16),parseInt(r,16),parseInt(i,16)]}}function l(e,n){return e?(4==e.length&&(e=t.copy(e),n?e.pop():n=e.pop()),n&&("number"==typeof n||"string"==typeof n&&n.length)?"rgba("+e.join(",")+","+n+")":"rgb("+e.join(",")+")"):"rgb('0,0,0')"}t.module("material.core.theming",["material.core.theming.palette"]).directive("mdTheme",o).directive("mdThemable",r).provider("$mdTheming",e).run(a);var m,s,u={},f={name:"dark",1:"rgba(0,0,0,0.87)",2:"rgba(0,0,0,0.54)",3:"rgba(0,0,0,0.26)",4:"rgba(0,0,0,0.12)"},p={name:"light",1:"rgba(255,255,255,1.0)",2:"rgba(255,255,255,0.7)",3:"rgba(255,255,255,0.3)",4:"rgba(255,255,255,0.12)"},h="1px 1px 0px rgba(0,0,0,0.4), -1px -1px 0px rgba(0,0,0,0.4)",b="",g=c("rgba(0,0,0,0.87)"),E=c("rgba(255,255,255,0.87"),v=c("rgb(255,255,255)"),M=["primary","accent","warn","background"],$="primary",A={accent:{"default":"A200","hue-1":"A100","hue-2":"A400","hue-3":"A700"},background:{"default":"A100","hue-1":"300","hue-2":"800","hue-3":"900"}},C={background:{"default":"800","hue-1":"300","hue-2":"600","hue-3":"900"}};M.forEach(function(e){var t={"default":"500","hue-1":"300","hue-2":"800","hue-3":"A100"};A[e]||(A[e]=t),C[e]||(C[e]=t)});var T=["50","100","200","300","400","500","600","700","800","900","A100","A200","A400","A700"];e.$inject=["$mdColorPalette"],o.$inject=["$mdTheming","$interpolate","$log"],r.$inject=["$mdTheming"],a.$inject=["$injector"]}(),function(){t.module("material.components.autocomplete",["material.core","material.components.icon"])}(),function(){function e(e){return e}t.module("material.components.backdrop",["material.core"]).directive("mdBackdrop",e),e.$inject=["$mdTheming"]}(),function(){function e(e,n,o,r){function i(e){return t.isDefined(e.href)||t.isDefined(e.ngHref)||t.isDefined(e.ngLink)||t.isDefined(e.uiSref)}function a(e,t){return i(t)?'<a class="md-button" ng-transclude></a>':'<button class="md-button" ng-transclude></button>'}function d(a,d,c){var l=d[0];n(d),e.attach(a,d);var m=l.textContent.trim();m||o.expect(d,"aria-label"),i(c)&&t.isDefined(c.ngDisabled)&&a.$watch(c.ngDisabled,function(e){d.attr("tabindex",e?-1:0)}),d.on("click",function(e){c.disabled===!0&&(e.preventDefault(),e.stopImmediatePropagation())}),a.mouseActive=!1,d.on("mousedown",function(){a.mouseActive=!0,r(function(){a.mouseActive=!1},100)}).on("focus",function(){a.mouseActive===!1&&d.addClass("md-focused")}).on("blur",function(){d.removeClass("md-focused")})}return{restrict:"EA",replace:!0,transclude:!0,template:a,link:d}}t.module("material.components.button",["material.core"]).directive("mdButton",e),e.$inject=["$mdButtonInkRipple","$mdTheming","$mdAria","$timeout"]}(),function(){function e(){return{restrict:"E"}}function n(e){function n(e,n,i,a,d,c,l,m,s){function u(o,r,s){r=i.extractElementByName(r,"md-bottom-sheet"),h=d('<md-backdrop class="md-opaque md-bottom-sheet-backdrop">')(o),h.on("click",function(){a(l.cancel)}),c.inherit(h,s.parent),e.enter(h,s.parent,null);var u=new p(r,s.parent);return s.bottomSheet=u,s.targetEvent&&t.element(s.targetEvent.target).blur(),c.inherit(u.element,s.parent),s.disableParentScroll&&(s.lastOverflow=s.parent.css("overflow"),s.parent.css("overflow","hidden")),e.enter(u.element,s.parent).then(function(){var e=t.element(r[0].querySelector("button")||r[0].querySelector("a")||r[0].querySelector("[ng-click]"));e.focus(),s.escapeToClose&&(s.rootElementKeyupCallback=function(e){e.keyCode===n.KEY_CODE.ESCAPE&&a(l.cancel)},m.on("keyup",s.rootElementKeyupCallback))})}function f(n,o,r){var i=r.bottomSheet;return e.leave(h),e.leave(i.element).then(function(){r.disableParentScroll&&(r.parent.css("overflow",r.lastOverflow),delete r.lastOverflow),i.cleanup(),r.targetEvent&&t.element(r.targetEvent.target).focus()})}function p(e,t){function i(t){e.css(n.CSS.TRANSITION_DURATION,"0ms")}function d(t){var o=t.pointer.distanceY;5>o&&(o=Math.max(-r,o/2)),e.css(n.CSS.TRANSFORM,"translate3d(0,"+(r+o)+"px,0)")}function c(t){if(t.pointer.distanceY>0&&(t.pointer.distanceY>20||Math.abs(t.pointer.velocityY)>o)){var r=e.prop("offsetHeight")-t.pointer.distanceY,i=Math.min(r/t.pointer.velocityY*.75,500);e.css(n.CSS.TRANSITION_DURATION,i+"ms"),a(l.cancel)}else e.css(n.CSS.TRANSITION_DURATION,""),e.css(n.CSS.TRANSFORM,"")}var m=s.register(t,"drag",{horizontal:!1});return t.on("$md.dragstart",i).on("$md.drag",d).on("$md.dragend",c),{element:e,cleanup:function(){m(),t.off("$md.dragstart",i).off("$md.drag",d).off("$md.dragend",c)}}}var h;return{themable:!0,targetEvent:null,onShow:u,onRemove:f,escapeToClose:!0,disableParentScroll:!0}}var o=.5,r=80;return n.$inject=["$animate","$mdConstant","$mdUtil","$timeout","$compile","$mdTheming","$mdBottomSheet","$rootElement","$mdGesture"],e("$mdBottomSheet").setDefaults({methods:["disableParentScroll","escapeToClose","targetEvent"],options:n})}t.module("material.components.bottomSheet",["material.core","material.components.backdrop"]).directive("mdBottomSheet",e).provider("$mdBottomSheet",n),n.$inject=["$$interimElementProvider"]}(),function(){function e(e){return{restrict:"E",link:function(t,n,o){e(n)}}}t.module("material.components.card",["material.core"]).directive("mdCard",e),e.$inject=["$mdTheming"]}(),function(){function e(e,n,o,r,i,a,d){function c(n,c){return c.type="checkbox",c.tabindex=c.tabindex||"0",n.attr("role",c.type),function(n,c,m,s){function u(e,t,o){m[e]&&n.$watch(m[e],function(e){o[e]&&c.attr(t,o[e])})}function f(e){var t=e.which||e.keyCode;(t===r.KEY_CODE.SPACE||t===r.KEY_CODE.ENTER)&&(e.preventDefault(),c.hasClass("md-focused")||c.addClass("md-focused"),p(e))}function p(e){c[0].hasAttribute("disabled")||n.$apply(function(){var t=m.ngChecked?m.checked:!s.$viewValue;s.$setViewValue(t,e&&e.type),s.$render()})}function h(){s.$viewValue?c.addClass(l):c.removeClass(l)}s=s||a.fakeNgModel(),i(c),m.ngChecked&&n.$watch(n.$eval.bind(n,m.ngChecked),s.$setViewValue.bind(s)),u("ngDisabled","tabindex",{"true":"-1","false":m.tabindex}),o.expectWithText(c,"aria-label"),e.link.pre(n,{on:t.noop,0:{}},m,[s]),n.mouseActive=!1,c.on("click",p).on("keypress",f).on("mousedown",function(){n.mouseActive=!0,d(function(){n.mouseActive=!1},100)}).on("focus",function(){n.mouseActive===!1&&c.addClass("md-focused")}).on("blur",function(){c.removeClass("md-focused")}),s.$render=h}}e=e[0];var l="md-checked";return{restrict:"E",transclude:!0,require:"?ngModel",priority:210,template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-icon"></div></div><div ng-transclude class="md-label"></div>',compile:c}}t.module("material.components.checkbox",["material.core"]).directive("mdCheckbox",e),e.$inject=["inputDirective","$mdInkRipple","$mdAria","$mdConstant","$mdTheming","$mdUtil","$timeout"]}(),function(){function e(e){function t(e,t){this.$scope=e,this.$element=t}return{restrict:"E",controller:["$scope","$element",t],link:function(t,o,r){o[0];e(o),t.$broadcast("$mdContentLoaded",o),n(o[0])}}}function n(e){t.element(e).on("$md.pressdown",function(t){"t"===t.pointer.type&&(t.$materialScrollFixed||(t.$materialScrollFixed=!0,0===e.scrollTop?e.scrollTop=1:e.scrollHeight===e.scrollTop+e.offsetHeight&&(e.scrollTop-=1)))})}t.module("material.components.content",["material.core"]).directive("mdContent",e),e.$inject=["$mdTheming"]}(),function(){t.module("material.components.chips",["material.core","material.components.autocomplete"])}(),function(){function e(e,t){return{restrict:"E",link:function(n,o,r){t(o),e(function(){var e=o[0].querySelector("md-dialog-content");e&&e.scrollHeight>e.clientHeight&&o.addClass("md-content-overflow")})}}}function n(e){function n(e,t){return{template:['<md-dialog md-theme="{{ dialog.theme }}" aria-label="{{ dialog.ariaLabel }}">','<md-dialog-content role="document" tabIndex="-1">','<h2 class="md-title">{{ dialog.title }}</h2>',"<p>{{ dialog.content }}</p>","</md-dialog-content>",'<div class="md-actions">','<md-button ng-if="dialog.$type == \'confirm\'" ng-click="dialog.abort()" class="md-primary">',"{{ dialog.cancel }}","</md-button>",'<md-button ng-click="dialog.hide()" class="md-primary">',"{{ dialog.ok }}","</md-button>","</div>","</md-dialog>"].join(""),controller:function(){this.hide=function(){e.hide(!0)},this.abort=function(){e.cancel()}},controllerAs:"dialog",bindToController:!0,theme:t.defaultTheme()}}function o(e,n,o,r,i,a,d,c,l,m,s){function u(e){var t=document.querySelector("md-dialog");t&&!t.contains(e.target)&&(e.stopImmediatePropagation(),t.focus())}function f(e,m,s){function f(){var e=m[0].querySelector(".dialog-close");if(!e){var n=m[0].querySelectorAll(".md-actions button");e=n[n.length-1]}return t.element(e)}t.element(n[0].body).addClass("md-dialog-is-showing"),m=o.extractElementByName(m,"md-dialog"),s.parent=t.element(s.parent),s.popInTarget=t.element((s.targetEvent||{}).target);var p=f();if(s.hasBackdrop){var b=s.parent[0]==n[0].body&&n[0].documentElement&&n[0].documentElement.scrollTop?t.element(n[0].documentElement):s.parent,v=b.prop("scrollTop");s.backdrop=t.element('<md-backdrop class="md-dialog-backdrop md-opaque">'),s.backdrop.css("top",v+"px"),i.inherit(s.backdrop,s.parent),l.enter(s.backdrop,s.parent),m.css("top",v+"px")}var M="dialog",$=p;return"alert"===s.$type&&(M="alertdialog",$=m.find("md-dialog-content")),h(m.find("md-dialog"),M,s),document.addEventListener("focus",u,!0),s.disableParentScroll&&(s.lastOverflow=s.parent.css("overflow"),s.parent.css("overflow","hidden")),E(m,s.parent,s.popInTarget&&s.popInTarget.length&&s.popInTarget).then(function(){g(m,!0),s.escapeToClose&&(s.rootElementKeyupCallback=function(e){e.keyCode===r.KEY_CODE.ESCAPE&&d(a.cancel)},c.on("keyup",s.rootElementKeyupCallback)),s.clickOutsideToClose&&(s.dialogClickOutsideCallback=function(e){e.target===m[0]&&d(a.cancel)},m.on("click",s.dialogClickOutsideCallback)),s.focusOnOpen&&$.focus()})}function p(e,o,r){return t.element(n[0].body).removeClass("md-dialog-is-showing"),r.backdrop&&l.leave(r.backdrop),r.disableParentScroll&&(r.parent.css("overflow",r.lastOverflow),delete r.lastOverflow),r.escapeToClose&&c.off("keyup",r.rootElementKeyupCallback),r.clickOutsideToClose&&o.off("click",r.dialogClickOutsideCallback),g(o,!1),document.removeEventListener("focus",u,!0),v(o,r.parent,r.popInTarget&&r.popInTarget.length&&r.popInTarget).then(function(){o.remove(),r.popInTarget&&r.popInTarget.focus()})}function h(t,n,r){t.attr({role:n,tabIndex:"-1"});var i=t.find("md-dialog-content");0===i.length&&(i=t);var a=t.attr("id")||"dialog_"+o.nextUid();i.attr("id",a),t.attr("aria-describedby",a),r.ariaLabel?e.expect(t,"aria-label",r.ariaLabel):e.expectAsync(t,"aria-label",function(){var e=i.text().split(/\s+/);return e.length>3&&(e=e.slice(0,3).concat("...")),e.join(" ")})}function b(e,t){return-1!==t.indexOf(e.nodeName)?!0:void 0}function g(e,t){function n(e){for(;e.parentNode;){if(e===document.body)return;for(var r=e.parentNode.children,i=0;i<r.length;i++)e===r[i]||b(r[i],["SCRIPT","STYLE"])||r[i].setAttribute(o,t);n(e=e.parentNode)}}var o="aria-hidden";e=e[0],n(e)}function E(e,t,n){var i=e.find("md-dialog");return t.append(e),M(i,n),m(function(){i.addClass("transition-in").css(r.CSS.TRANSFORM,"")}),o.transitionEndPromise(i)}function v(e,t,n){var r=e.find("md-dialog");return r.addClass("transition-out").removeClass("transition-in"),M(r,n),o.transitionEndPromise(r)}function M(e,t){if(t){var n=t[0].getBoundingClientRect(),o=e[0].getBoundingClientRect(),i=Math.min(.5,n.width/o.width),a=Math.min(.5,n.height/o.height);e.css(r.CSS.TRANSFORM,"translate3d("+(-o.left+n.left+n.width/2-o.width/2)+"px,"+(-o.top+n.top+n.height/2-o.height/2)+"px,0) scale("+i+","+a+")")}}return{hasBackdrop:!0,isolateScope:!0,onShow:f,onRemove:p,clickOutsideToClose:!1,escapeToClose:!0,targetEvent:null,focusOnOpen:!0,disableParentScroll:!0,transformTemplate:function(e){return'<div class="md-dialog-container">'+e+"</div>"}}}return n.$inject=["$mdDialog","$mdTheming"],o.$inject=["$mdAria","$document","$mdUtil","$mdConstant","$mdTheming","$mdDialog","$timeout","$rootElement","$animate","$$rAF","$q"],e("$mdDialog").setDefaults({methods:["disableParentScroll","hasBackdrop","clickOutsideToClose","escapeToClose","targetEvent","parent"],options:o}).addPreset("alert",{methods:["title","content","ariaLabel","ok","theme"],options:n}).addPreset("confirm",{methods:["title","content","ariaLabel","ok","cancel","theme"],options:n})}t.module("material.components.dialog",["material.core","material.components.backdrop"]).directive("mdDialog",e).provider("$mdDialog",n),e.$inject=["$$rAF","$mdTheming"],n.$inject=["$$interimElementProvider"]}(),function(){function e(e){return{restrict:"E",link:e}}t.module("material.components.divider",["material.core"]).directive("mdDivider",e),e.$inject=["$mdTheming"]}(),function(){!function(){function e(){return{restrict:"E",require:["^?mdFabSpeedDial","^?mdFabToolbar"],link:function(e,n,o,r){var i=r[0]||r[1];i&&t.forEach(n.children(),function(e){t.element(e).on("focus",i.open),t.element(e).on("blur",i.close)}),n.children().wrap('<div class="md-fab-action-item">')}}}t.module("material.components.fabActions",["material.core"]).directive("mdFabActions",e)}()}(),function(){!function(){function e(){function e(e,t){t.prepend('<div class="md-css-variables"></div>')}function t(e,t,n){function o(){a.direction=a.direction||"down",a.isOpen=a.isOpen||!1}function r(){t.on("mouseenter",a.open),t.on("mouseleave",a.close)}function i(){e.$watch("vm.direction",function(e,o){n.removeClass(t,"md-"+o),n.addClass(t,"md-"+e)}),e.$watch("vm.isOpen",function(e){var o=e?"md-is-open":"",r=e?"":"md-is-open";n.setClass(t,o,r)})}var a=this;a.open=function(){e.$apply("vm.isOpen = true")},a.close=function(){e.$apply("vm.isOpen = false")},o(),r(),i()}return t.$inject=["$scope","$element","$animate"],{restrict:"E",scope:{direction:"@?mdDirection",isOpen:"=?mdOpen"},bindToController:!0,controller:t,controllerAs:"vm",link:e}}function n(){function e(e){var n=e[0],o=e.controller("mdFabSpeedDial"),r=n.querySelectorAll(".md-fab-action-item"),i=n.querySelector(".md-css-variables"),a=i.style.zIndex;t.forEach(r,function(e,t){var n=e.style;n.transform="",n.transitionDelay="",n.opacity=1,e.style.zIndex=r.length-t+a}),o.isOpen||t.forEach(r,function(e,t){var n,r;switch(o.direction){case"up":n=e.scrollHeight*(t+1),r="Y";break;case"down":n=-e.scrollHeight*(t+1),r="Y";break;case"left":n=e.scrollWidth*(t+1),r="X";break;case"right":n=-e.scrollWidth*(t+1),r="X"}e.style.transform="translate"+r+"("+n+"px)"})}return{addClass:function(t,n,o){t.hasClass("md-fling")&&e(t)},removeClass:function(t,n,o){e(t)}}}function o(){function e(e){var o=e[0],r=e.controller("mdFabSpeedDial"),i=o.querySelectorAll(".md-fab-action-item");t.forEach(i,function(e,t){var o=e.style,a=t*n;o.opacity=r.isOpen?1:0,o.transform=r.isOpen?"scale(1)":"scale(0)",o.transitionDelay=(r.isOpen?a:i.length-a)+"ms"})}var n=65;return{addClass:function(t,n,o){e(t)},removeClass:function(t,n,o){e(t)}}}t.module("material.components.fabSpeedDial",["material.core","material.components.fabTrigger","material.components.fabActions"]).directive("mdFabSpeedDial",e).animation(".md-fling",n).animation(".md-scale",o)}()}(),function(){!function(){function n(){function e(e,t,n){var o=this;o.isOpen=o.isOpen||!1,o.open=function(){o.isOpen=!0,e.$apply()},o.close=function(){o.isOpen=!1,e.$apply()},t.addClass("md-fab-toolbar"),t.on("mouseenter",o.open),t.on("mouseleave",o.close),e.$watch("vm.isOpen",function(e){var o=e?"md-is-open":"",r=e?"":"md-is-open";n.setClass(t,o,r)})}function t(e,t,n){t.find("md-fab-trigger").find("button").attr("tabindex","-1"),t.find("md-fab-trigger").find("button").prepend('<div class="md-fab-toolbar-background"></div>')}return e.$inject=["$scope","$element","$animate"],{restrict:"E",transclude:!0,template:'<div class="md-fab-toolbar-wrapper">  <div class="md-fab-toolbar-content" ng-transclude></div></div>',scope:{isOpen:"=?mdOpen"},bindToController:!0,controller:e,controllerAs:"vm",link:t}}function o(){function n(n,o,r){var i=n[0],a=n.controller("mdFabToolbar"),d=i.querySelector(".md-fab-toolbar-background"),c=i.querySelector("md-fab-trigger button"),l=i.querySelector("md-fab-trigger button md-icon"),m=n.find("md-fab-actions").children();if(c&&d){var s=e.getComputedStyle(c).getPropertyValue("background-color"),u=i.offsetWidth,f=(i.offsetHeight,2*u);d.style.backgroundColor=s,d.style.borderRadius=u+"px",a.isOpen?(d.style.width=f+"px",d.style.height=f+"px",d.style.top=-(f/2)+"px",n.hasClass("md-left")&&(d.style.left=-(f/2)+"px",d.style.right=null),n.hasClass("md-right")&&(d.style.right=-(f/2)+"px",d.style.left=null),d.style.transitionDelay="0ms",l.style.transitionDelay=".3s",t.forEach(m,function(e,t){e.style.transitionDelay=25*(m.length-t)+"ms"})):(d.style.width=c.offsetWidth+"px",d.style.height=c.offsetHeight+"px",d.style.top="0px",n.hasClass("md-left")&&(d.style.left="0px",d.style.right=null),n.hasClass("md-right")&&(d.style.right="0px",d.style.left=null),d.style.transitionDelay="200ms",l.style.transitionDelay="0ms",t.forEach(m,function(e,t){e.style.transitionDelay=25*t+"ms"}))}}return{addClass:function(e,t,o){n(e,t,o)},removeClass:function(e,t,o){n(e,t,o)}}}t.module("material.components.fabToolbar",["material.core","material.components.fabTrigger","material.components.fabActions"]).directive("mdFabToolbar",n).animation(".md-fab-toolbar",o)}()}(),function(){!function(){function e(){return{restrict:"E",require:["^?mdFabSpeedDial","^?mdFabToolbar"],link:function(e,n,o,r){var i=r[0]||r[1];i&&t.forEach(n.children(),function(e){t.element(e).on("focus",i.open),t.element(e).on("blur",i.close)})}}}t.module("material.components.fabTrigger",["material.core"]).directive("mdFabTrigger",e)}()}(),function(){function e(e,o,r,i){function a(n,a,d,c){function l(){for(var e in o.MEDIA)i(e),i.getQuery(o.MEDIA[e]).addListener(C);return i.watchResponsiveAttributes(["md-cols","md-row-height"],d,s)}function m(){c.layoutDelegate=t.noop,T();for(var e in o.MEDIA)i.getQuery(o.MEDIA[e]).removeListener(C)}function s(e){null==e?c.invalidateLayout():i(e)&&c.invalidateLayout()}function u(e){var o=b(),i={tileSpans:g(o),colCount:E(),rowMode:$(),rowHeight:M(),gutter:v()};if(e||!t.equals(i,y)){var d=r(i.colCount,i.tileSpans,o).map(function(e,n){return{grid:{element:a,style:h(i.colCount,n,i.gutter,i.rowMode,i.rowHeight)},tiles:e.map(function(e,n){return{element:t.element(o[n]),style:p(e.position,e.spans,i.colCount,i.rowCount,i.gutter,i.rowMode,i.rowHeight)}})}}).reflow().performance();n.mdOnLayout({$event:{performance:d}}),y=i}}function f(e){return k+e+w}function p(e,t,n,o,r,i,a){var d=1/n*100,c=(n-1)/n,l=x({share:d,gutterShare:c,gutter:r}),m={left:N({unit:l,offset:e.col,gutter:r}),width:_({unit:l,span:t.col,gutter:r}),paddingTop:"",marginTop:"",top:"",height:""};switch(i){case"fixed":m.top=N({unit:a,offset:e.row,gutter:r}),m.height=_({unit:a,span:t.row,gutter:r});break;case"ratio":var s=d/a,u=x({share:s,gutterShare:c,gutter:r});m.paddingTop=_({unit:u,span:t.row,gutter:r}),m.marginTop=N({unit:u,offset:e.row,gutter:r});break;case"fit":var f=(o-1)/o,s=1/o*100,u=x({share:s,gutterShare:f,gutter:r});m.top=N({unit:u,offset:e.row,gutter:r}),m.height=_({unit:u,span:t.row,gutter:r})}return m}function h(e,t,n,o,r){var i={height:"",paddingBottom:""};switch(o){case"fixed":i.height=_({unit:r,span:t,gutter:n});break;case"ratio":var a=1===e?0:(e-1)/e,d=1/e*100,c=d*(1/r),l=x({share:c,gutterShare:a,gutter:n});i.paddingBottom=_({unit:l,span:t,gutter:n});break;case"fit":}return i}function b(){return[].filter.call(a.children(),function(e){return"MD-GRID-TILE"==e.tagName})}function g(e){return[].map.call(e,function(e){var n=t.element(e).controller("mdGridTile");return{row:parseInt(i.getResponsiveAttribute(n.$attrs,"md-rowspan"),10)||1,col:parseInt(i.getResponsiveAttribute(n.$attrs,"md-colspan"),10)||1}})}function E(){var e=parseInt(i.getResponsiveAttribute(d,"md-cols"),10);if(isNaN(e))throw"md-grid-list: md-cols attribute was not found, or contained a non-numeric value";return e}function v(){return A(i.getResponsiveAttribute(d,"md-gutter")||1)}function M(){var e=i.getResponsiveAttribute(d,"md-row-height");switch($()){case"fixed":return A(e);case"ratio":var t=e.split(":");return parseFloat(t[0])/parseFloat(t[1]);case"fit":return 0}}function $(){var e=i.getResponsiveAttribute(d,"md-row-height");return"fit"==e?"fit":-1!==e.indexOf(":")?"ratio":"fixed"}function A(e){return/\D$/.test(e)?e:e+"px"}a.attr("role","list"),c.layoutDelegate=u;var C=t.bind(c,c.invalidateLayout),T=l();n.$on("$destroy",m);var y,k=e.startSymbol(),w=e.endSymbol(),x=e(f("share")+"% - ("+f("gutter")+" * "+f("gutterShare")+")"),N=e("calc(("+f("unit")+" + "+f("gutter")+") * "+f("offset")+")"),_=e("calc(("+f("unit")+") * "+f("span")+" + ("+f("span")+" - 1) * "+f("gutter")+")")}return{restrict:"E",controller:n,scope:{mdOnLayout:"&"},link:a}}function n(e){this.layoutInvalidated=!1,this.tilesInvalidated=!1,this.$timeout_=e,this.layoutDelegate=t.noop}function o(e){function n(t,n){var o,a,d,c,l,m;return c=e.time(function(){a=r(t,n)}),o={layoutInfo:function(){return a},map:function(t){return l=e.time(function(){var e=o.layoutInfo();d=t(e.positioning,e.rowCount)}),o},reflow:function(t){return m=e.time(function(){var e=t||i;e(d.grid,d.tiles)}),o},performance:function(){return{tileCount:n.length,layoutTime:c,mapTime:l,reflowTime:m,totalTime:c+l+m}}}}function o(e,t){e.element.css(e.style),t.forEach(function(e){e.element.css(e.style)})}function r(e,t){function n(t,n){if(t.col>e)throw"md-grid-list: Tile at position "+n+" has a colspan ("+t.col+") that exceeds the column count ("+e+")";for(var a=0,m=0;m-a<t.col;)d>=e?o():(a=l.indexOf(0,d),-1!==a&&-1!==(m=i(a+1))?d=m+1:(a=m=0,o()));return r(a,t.col,t.row),d=a+t.col,{col:a,row:c}}function o(){d=0,c++,r(0,e,-1)}function r(e,t,n){for(var o=e;e+t>o;o++)l[o]=Math.max(l[o]+n,0)}function i(e){var t;for(t=e;t<l.length;t++)if(0!==l[t])return t;return t===l.length?t:void 0}function a(){for(var t=[],n=0;e>n;n++)t.push(0);return t}var d=0,c=0,l=a();return{positioning:t.map(function(e,t){return{spans:e,position:n(e,t)}}),rowCount:c+Math.max.apply(Math,l)}}var i=o;return n.animateWith=function(e){i=t.isFunction(e)?e:o},n}function r(e){function n(n,o,r,i){o.attr("role","listitem");var a=e.watchResponsiveAttributes(["md-colspan","md-rowspan"],r,t.bind(i,i.invalidateLayout));i.invalidateTiles(),n.$on("$destroy",function(){a(),i.invalidateLayout()}),t.isDefined(n.$parent.$index)&&n.$watch(function(){return n.$parent.$index},function(e,t){e!==t&&i.invalidateTiles()})}return{restrict:"E",require:"^mdGridList",template:"<figure ng-transclude></figure>",transclude:!0,scope:{},controller:["$attrs",function(e){this.$attrs=e}],link:n}}function i(){return{template:"<figcaption ng-transclude></figcaption>",transclude:!0}}t.module("material.components.gridList",["material.core"]).directive("mdGridList",e).directive("mdGridTile",r).directive("mdGridTileFooter",i).directive("mdGridTileHeader",i).factory("$mdGridLayout",o),e.$inject=["$interpolate","$mdConstant","$mdGridLayout","$mdMedia"],n.$inject=["$timeout"],n.prototype={invalidateTiles:function(){this.tilesInvalidated=!0,this.invalidateLayout()},invalidateLayout:function(){this.layoutInvalidated||(this.layoutInvalidated=!0,this.$timeout_(t.bind(this,this.layout)))},layout:function(){try{this.layoutDelegate(this.tilesInvalidated)}finally{this.layoutInvalidated=!1,this.tilesInvalidated=!1}}},o.$inject=["$mdUtil"],r.$inject=["$mdMedia"]}(),function(){function e(e,t,n,o){function r(o,r,i){function a(){var e=r.parent();return e.attr("aria-label")||e.text()?!0:e.parent().attr("aria-label")||e.parent().text()?!0:!1}function d(){o.svgIcon||o.svgSrc||(o.fontIcon?(r.addClass("md-font"),r.addClass(o.fontIcon)):r.addClass(e.fontSet(o.fontSet)))}t(r),d();var c=i.alt||o.fontIcon||o.svgIcon||r.text(),l=i.$normalize(i.$attr.mdSvgIcon||i.$attr.mdSvgSrc||"");i["aria-label"]||(""==c||a()?r.text()||n.expect(r,"aria-hidden","true"):(n.expect(r,"aria-label",c),n.expect(r,"role","img"))),l&&i.$observe(l,function(t){r.empty(),t&&e(t).then(function(e){r.append(e)})})}return{scope:{fontSet:"@mdFontSet",fontIcon:"@mdFontIcon",svgIcon:"@mdSvgIcon",svgSrc:"@mdSvgSrc"},restrict:"E",link:r}}t.module("material.components.icon",["material.core"]).directive("mdIcon",e),e.$inject=["$mdIcon","$mdTheming","$mdAria","$interpolate"]}(),function(){function e(){}function n(e,t){this.url=e,this.viewBoxSize=t||r.defaultViewBoxSize}function o(e,n,o,r,i){function a(e){return e=e||"",E[e]?o.when(E[e].clone()):v.test(e)?s(e).then(c(e)):(-1==e.indexOf(":")&&(e="$default:"+e),l(e)["catch"](m)["catch"](u)["catch"](f).then(c(e)))}function d(n){var o=t.isUndefined(n)||!(n&&n.length);if(o)return e.defaultFontSet;var r=n;return t.forEach(e.fontSets,function(e){e.alias==n&&(r=e.fontSet||r)}),r}function c(t){return function(n){return E[t]=p(n)?n:new h(n,e[t]),E[t].clone()}}function l(t){var n=e[t];return n?s(n.url).then(function(e){return new h(e,n)}):o.reject(t)}function m(t){function n(e){var n=t.slice(t.lastIndexOf(":")+1),r=e.querySelector("#"+n);return r?new h(r,i):o.reject(t)}var r=t.substring(0,t.lastIndexOf(":"))||"$default",i=e[r];return i?s(i.url).then(n):o.reject(t)}function s(e){return n.get(e,{cache:i}).then(function(e){return t.element("<div>").append(e.data).find("svg")[0]})}function u(e){
var n;return t.isString(e)&&(n="icon "+e+" not found",r.warn(n)),o.reject(n||e)}function f(e){var n=t.isString(e)?e:e.message||e.data||e.statusText;return r.warn(n),o.reject(n)}function p(e){return t.isDefined(e.element)&&t.isDefined(e.config)}function h(e,n){"svg"!=e.tagName&&(e=t.element('<svg xmlns="http://www.w3.org/2000/svg">').append(e)[0]),e.getAttribute("xmlns")||e.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.element=e,this.config=n,this.prepare()}function b(){var n=this.config?this.config.viewBoxSize:e.defaultViewBoxSize;t.forEach({fit:"",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:this.element.getAttribute("viewBox")||"0 0 "+n+" "+n},function(e,t){this.element.setAttribute(t,e)},this),t.forEach({"pointer-events":"none",display:"block"},function(e,t){this.element.style[t]=e},this)}function g(){return this.element.cloneNode(!0)}var E={},v=/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/i;return h.prototype={clone:g,prepare:b},a.fontSet=d,a}t.module("material.components.icon").provider("$mdIcon",e);var r={defaultViewBoxSize:24,defaultFontSet:"material-icons",fontSets:[]};e.prototype={icon:function(e,t,o){return-1==e.indexOf(":")&&(e="$default:"+e),r[e]=new n(t,o),this},iconSet:function(e,t,o){return r[e]=new n(t,o),this},defaultIconSet:function(e,t){var o="$default";return r[o]||(r[o]=new n(e,t)),r[o].viewBoxSize=t||r.defaultViewBoxSize,this},defaultViewBoxSize:function(e){return r.defaultViewBoxSize=e,this},fontSet:function(e,t){r.fontSets.push({alias:e,fontSet:t||e})},defaultFontSet:function(e){return r.defaultFontSet=e?e:"",this},defaultIconSize:function(e){return r.defaultIconSize=e,this},preloadIcons:function(e){var t=this,n=[{id:"md-tabs-arrow",url:"md-tabs-arrow.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><polygon points="15.4,7.4 14,6 8,12 14,18 15.4,16.6 10.8,12 "/></g></svg>'},{id:"md-close",url:"md-close.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/></g></svg>'},{id:"md-cancel",url:"md-cancel.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z"/></g></svg>'},{id:"md-menu",url:"md-menu.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 100 100"><path d="M 50 0 L 100 14 L 92 80 L 50 100 L 8 80 L 0 14 Z" fill="#b2b2b2"></path><path d="M 50 5 L 6 18 L 13.5 77 L 50 94 Z" fill="#E42939"></path><path d="M 50 5 L 94 18 L 86.5 77 L 50 94 Z" fill="#B72833"></path><path d="M 50 7 L 83 75 L 72 75 L 65 59 L 50 59 L 50 50 L 61 50 L 50 26 Z" fill="#b2b2b2"></path><path d="M 50 7 L 17 75 L 28 75 L 35 59 L 50 59 L 50 50 L 39 50 L 50 26 Z" fill="#fff"></path></svg>'},{id:"md-toggle-arrow",url:"md-toggle-arrow-svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 48 48"><path d="M24 16l-12 12 2.83 2.83 9.17-9.17 9.17 9.17 2.83-2.83z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>'}];n.forEach(function(n){t.icon(n.id,n.url),e.put(n.url,n.svg)})},$get:["$http","$q","$log","$templateCache",function(e,t,n,i){return this.preloadIcons(i),o(r,e,t,n,i)}]}}(),function(){function e(e){return{restrict:"E",compile:function(t){return t[0].setAttribute("role","list"),e}}}function n(e,n,o){var r=["md-checkbox","md-switch"];return{restrict:"E",controller:"MdListController",compile:function(i,a){function d(){for(var e,t,n=["md-switch","md-checkbox"],o=0;t=n[o];++o)if((e=i.find(t)[0])&&!e.hasAttribute("aria-label")){var r=i.find("p")[0];if(!r)return;e.setAttribute("aria-label","Toggle "+r.textContent)}}function c(n){var o;if("div"==n)o=t.element('<div class="md-no-style md-list-item-inner">'),o.append(i.contents()),i.addClass("md-proxy-focus");else{o=t.element('<md-button class="md-no-style"><div class="md-list-item-inner"></div></md-button>');var r=["ng-click","aria-label","ng-disabled"];t.forEach(r,function(e){i[0].hasAttribute(e)&&(o[0].setAttribute(e,i[0].getAttribute(e)),i[0].removeAttribute(e))}),o.children().eq(0).append(i.contents())}if(i[0].setAttribute("tabindex","-1"),i.append(o),f&&f.hasAttribute("ng-click")){e.expect(f,"aria-label");var d=t.element('<md-button class="md-secondary-container md-icon-button">');d.attr("ng-click",f.getAttribute("ng-click")),f.removeAttribute("ng-click"),f.setAttribute("tabindex","-1"),f.classList.remove("md-secondary"),d.append(f),f=d[0]}f&&(f.hasAttribute("ng-click")||a.ngClick&&l(f))&&(i.addClass("md-with-secondary"),i.append(f))}function l(e){return-1!=r.indexOf(e.nodeName.toLowerCase())}function m(e,i,a,d){function c(){var e=i.children();e.length&&!e[0].hasAttribute("ng-click")&&t.forEach(r,function(e){t.forEach(s.querySelectorAll(e),function(e){m.push(e)})})}function l(){(m.length||u)&&(i.addClass("md-clickable"),d.attachRipple(e,t.element(i[0].querySelector(".md-no-style"))))}var m=[],s=i[0].firstElementChild,u=s&&s.hasAttribute("ng-click");c(),l(),i.hasClass("md-proxy-focus")&&m.length&&t.forEach(m,function(n){n=t.element(n),e.mouseActive=!1,n.on("mousedown",function(){e.mouseActive=!0,o(function(){e.mouseActive=!1},100)}).on("focus",function(){e.mouseActive===!1&&i.addClass("md-focused"),n.on("blur",function t(){i.removeClass("md-focused"),n.off("blur",t)})})}),u||m.length||s&&s.addEventListener("keypress",function(e){if("INPUT"!=e.target.nodeName&&"TEXTAREA"!=e.target.nodeName){var t=e.which||e.keyCode;t==n.KEY_CODE.SPACE&&s&&(s.click(),e.preventDefault(),e.stopPropagation())}}),i.off("click"),i.off("keypress"),m.length&&s&&i.children().eq(0).on("click",function(e){s.contains(e.target)&&t.forEach(m,function(n){e.target===n||n.contains(e.target)||t.element(n).triggerHandler("click")})})}var s,u,f=i[0].querySelector(".md-secondary");if(i[0].setAttribute("role","listitem"),a.ngClick)c("button");else{for(var p,h=0;p=r[h];++h)if(u=i[0].querySelector(p)){s=!0;break}s?c("div"):i[0].querySelector("md-button")||i.addClass("md-no-proxy")}return d(),m}}}function o(e,t,n){function o(e,t){var o={};n.attach(e,t,o)}var r=this;r.attachRipple=o}t.module("material.components.list",["material.core"]).controller("MdListController",o).directive("mdList",e).directive("mdListItem",n),e.$inject=["$mdTheming"],n.$inject=["$mdAria","$mdConstant","$timeout"],o.$inject=["$scope","$element","$mdListInkRipple"]}(),function(){function e(e,t){function n(t,n,o){e(n)}function o(e,n,o){var r=this;r.isErrorGetter=o.mdIsError&&t(o.mdIsError),r.delegateClick=function(){r.input.focus()},r.element=n,r.setFocused=function(e){n.toggleClass("md-input-focused",!!e)},r.setHasValue=function(e){n.toggleClass("md-input-has-value",!!e)},r.setInvalid=function(e){n.toggleClass("md-input-invalid",!!e)},e.$watch(function(){return r.label&&r.input},function(e){e&&!r.label.attr("for")&&r.label.attr("for",r.input.attr("id"))})}return o.$inject=["$scope","$element","$attrs"],{restrict:"E",link:n,controller:o}}function n(){return{restrict:"E",require:"^?mdInputContainer",link:function(e,t,n,o){o&&!n.mdNoFloat&&(o.label=t,e.$on("$destroy",function(){o.label=null}))}}}function o(e,n,o){function r(r,i,a,d){function c(e){return s.setHasValue(!u.$isEmpty(e)),e}function l(){s.setHasValue(i.val().length>0||(i[0].validity||{}).badInput)}function m(){function o(e){return m(),e}function a(){l.style.height="auto",l.scrollTop=0;var e=d();e&&(l.style.height=e+"px")}function d(){var e=l.scrollHeight-l.offsetHeight;return l.offsetHeight+(e>0?e:0)}function c(e){l.scrollTop=0;var t=l.scrollHeight-l.offsetHeight,n=l.offsetHeight+t;l.style.height=n+"px"}var l=i[0],m=e.debounce(a,1);u?(u.$formatters.push(o),u.$viewChangeListeners.push(o)):m(),i.on("keydown input",m),i.on("scroll",c),t.element(n).on("resize",m),r.$on("$destroy",function(){t.element(n).off("resize",m)})}var s=d[0],u=d[1]||e.fakeNgModel(),f=t.isDefined(a.readonly);if(s){if(s.input)throw new Error("<md-input-container> can only have *one* <input> or <textarea> child element!");s.input=i,s.label||o.expect(i,"aria-label",i.attr("placeholder")),i.addClass("md-input"),i.attr("id")||i.attr("id","input_"+e.nextUid()),"textarea"===i[0].tagName.toLowerCase()&&m();var p=s.isErrorGetter||function(){return u.$invalid&&u.$touched};r.$watch(p,s.setInvalid),u.$parsers.push(c),u.$formatters.push(c),i.on("input",l),f||i.on("focus",function(e){s.setFocused(!0)}).on("blur",function(e){s.setFocused(!1),l()}),r.$on("$destroy",function(){s.setFocused(!1),s.setHasValue(!1),s.input=null})}}return{restrict:"E",require:["^?mdInputContainer","?ngModel"],link:r}}function r(e){function n(n,o,r,i){function a(e){return m.text((o.val()||e||"").length+"/"+d),e}var d,c=i[0],l=i[1],m=t.element('<div class="md-char-counter">');r.$set("ngTrim","false"),l.element.append(m),c.$formatters.push(a),c.$viewChangeListeners.push(a),o.on("input keydown",function(){a()}),n.$watch(r.mdMaxlength,function(n){d=n,t.isNumber(n)&&n>0?(m.parent().length||e.enter(m,l.element,t.element(l.element[0].lastElementChild)),a()):e.leave(m)}),c.$validators["md-maxlength"]=function(e,n){return!t.isNumber(d)||0>d?!0:(e||o.val()||n||"").length<=d}}return{restrict:"A",require:["ngModel","^mdInputContainer"],link:n}}function i(e){function n(n,r,i,a){if(a&&-1==o.indexOf(r[0].nodeName)&&!t.isDefined(a.element.attr("md-no-float"))){var d=i.placeholder;if(r.removeAttr("placeholder"),0==a.element.find("label").length){var c='<label ng-click="delegateClick()">'+d+"</label>";a.element.addClass("md-icon-float"),a.element.prepend(c)}else e.warn("The placeholder='"+d+"' will be ignored since this md-input-container has a child label element.")}}var o=["MD-SELECT"];return{restrict:"A",require:"^^?mdInputContainer",priority:200,link:n}}t.module("material.components.input",["material.core"]).directive("mdInputContainer",e).directive("label",n).directive("input",o).directive("textarea",o).directive("mdMaxlength",r).directive("placeholder",i),e.$inject=["$mdTheming","$parse"],o.$inject=["$mdUtil","$window","$mdAria"],r.$inject=["$animate"],i.$inject=["$log"]}(),function(){function e(e){function n(e){e.addClass("md-menu");var t=e.children()[0];if(t.hasAttribute("ng-click")||(t=t.querySelector("[ng-click]")),t&&t.setAttribute("aria-haspopup","true"),2!=e.children().length)throw Error("Invalid HTML for md-menu. Expected two children elements.");return o}function o(e,n,o,r){var i=t.element('<div class="md-open-menu-container md-whiteframe-z2"></div>'),a=n.children()[1];i.append(a),r.init(i),e.$on("$destroy",function(){r.isOpen&&(i.remove(),r.close())})}return{restrict:"E",require:"mdMenu",controller:"mdMenuCtrl",scope:!0,compile:n}}function n(e,t,n,o){var r,i,a=this;this.init=function(e){r=e,i=n[0].querySelector("[ng-click]")},this.open=function(){a.isOpen=!0,i.setAttribute("aria-expanded","true"),e.show({mdMenuCtrl:a,element:r,target:n[0]})},o.$mdOpenMenu=this.open,this.close=function(t){a.isOpen=!1,i.setAttribute("aria-expanded","false"),e.hide(),t||n.children()[0].focus()},this.positionMode=function(){var e=(t.mdPositionMode||"target").split(" ");return 1==e.length&&e.push(e[0]),{left:e[0],top:e[1]}},this.offsets=function(){var e=(t.mdOffset||"0 0").split(" ").map(parseFloat);if(2==e.length)return{left:e[0],top:e[1]};if(1==e.length)return{top:e[0],left:e[0]};throw Error("Invalid offsets specified. Please follow format <x, y> or <n>")}}t.module("material.components.menu",["material.core","material.components.backdrop"]).directive("mdMenu",e).controller("mdMenuCtrl",n),e.$inject=["$mdMenu"],n.$inject=["$mdMenu","$attrs","$element","$scope"]}(),function(){function e(e){function o(e,o,i,a,d,c,l){function m(n,r,l){function m(){if(!l.target)throw Error("$mdMenu.show() expected a target to animate from in options.target");t.extend(l,{alreadyOpen:!1,isRemoved:!1,target:t.element(l.target),parent:t.element(l.parent),menuContentEl:t.element(r[0].querySelector("md-menu-content")),backdrop:l.hasBackdrop&&t.element('<md-backdrop class="md-menu-backdrop md-click-catcher">')})}function u(){l.resizeFn=function(){p(r,l)},t.element(o).on("resize",l.resizeFn),t.element(o).on("orientationchange",l.resizeFn)}function f(){l.parent.append(r),r.removeClass("md-leave"),e(function(){e(function(){p(r,l),e(function(){r.addClass("md-active"),l.alreadyOpen=!0,r[0].style[c.CSS.TRANSFORM]=""})})})}function h(){r.addClass("md-clickable"),l.backdrop&&l.backdrop.on("click",function(e){e.preventDefault(),e.stopPropagation(),l.mdMenuCtrl.close(!0)}),l.menuContentEl.on("keydown",function(e){n.$apply(function(){switch(e.keyCode){case c.KEY_CODE.ESCAPE:l.mdMenuCtrl.close();break;case c.KEY_CODE.UP_ARROW:s(e,l.menuContentEl,l,-1);break;case c.KEY_CODE.DOWN_ARROW:s(e,l.menuContentEl,l,1)}})}),l.menuContentEl.on("click",function(e){function t(){n.$apply(function(){l.mdMenuCtrl.close()})}var o=e.target;do if(o&&o.hasAttribute("ng-click")){o.hasAttribute("disabled")||t();break}while((o=o.parentNode)&&o!=l.menuContentEl)});var e=l.menuContentEl[0].querySelector("[md-menu-focus-target]");e||(e=l.menuContentEl[0].firstElementChild.firstElementChild),e.focus()}return m(l),a.inherit(l.menuContentEl,l.target),u(),l.disableParentScroll&&(l.restoreScroll=i.disableScrollAround(l.element)),d(h,75,!1),l.backdrop&&(a.inherit(l.backdrop,l.parent),l.parent.append(l.backdrop)),f(),i.transitionEndPromise(r,{timeout:350})}function s(e,t,n,o){for(var r=i.getClosest(e.target,"MD-MENU-ITEM"),a=i.nodesToArray(t[0].children),d=a.indexOf(r),c=d+o;c>=0&&c<a.length;c+=o){var l=a[c].firstElementChild||a[c],m=u(l);if(m)break}}function u(e){return e&&-1!=e.getAttribute("tabindex")?(e.focus(),l[0].activeElement==e?!0:!1):void 0}function f(e,r,a){return a.isRemoved=!0,r.addClass("md-leave").removeClass("md-clickable"),t.element(o).off("resize",a.resizeFn),t.element(o).off("orientationchange",a.resizeFn),a.resizeFn=n,i.transitionEndPromise(r,{timeout:350}).then(function(){r.removeClass("md-active"),a.backdrop&&a.backdrop.remove(),r[0].parentNode===a.parent[0]&&a.parent[0].removeChild(r[0]),a.restoreScroll&&a.restoreScroll()})}function p(e,t){function n(e){e.top=Math.max(Math.min(e.top,h.bottom-d.offsetHeight),h.top),e.left=Math.max(Math.min(e.left,h.right-d.offsetWidth),h.left)}if(!t.isRemoved){var o,i,a,d=e[0],l=e[0].firstElementChild,m=l.getBoundingClientRect(),s=t.parent[0],u=s.getBoundingClientRect(),f=t.target[0].querySelector("[md-menu-origin]")||t.target[0],p=f.getBoundingClientRect(),h={left:u.left+r,top:u.top+r,bottom:u.bottom-r,right:u.right-r},b=t.mdMenuCtrl.positionMode();("target"==b.top||"target"==b.left||"target-right"==b.left)&&(o=l.firstElementChild.firstElementChild||l.firstElementChild,o=o.querySelector("[md-menu-align-target]")||o,i=o.getBoundingClientRect(),a={top:parseFloat(d.style.top||0),left:parseFloat(d.style.left||0)});var g={},E="top ";switch(b.top){case"target":g.top=a.top+p.top-i.top;break;default:throw new Error('Invalid target mode "'+b.top+'" specified for md-menu on Y axis.')}switch(b.left){case"target":g.left=a.left+p.left-i.left,E+="left";break;case"target-right":g.left=p.right-m.width+(m.right-i.right),E+="right";break;default:throw new Error('Invalid target mode "'+b.left+'" specified for md-menu on X axis.')}var v=t.mdMenuCtrl.offsets();g.top+=v.top,g.left+=v.left,n(g),e.css({top:g.top+"px",left:g.left+"px"}),d.style[c.CSS.TRANSFORM_ORIGIN]=E,t.alreadyOpen||(d.style[c.CSS.TRANSFORM]="scale("+Math.min(p.width/d.offsetWidth,1)+","+Math.min(p.height/d.offsetHeight,1)+")")}}return{parent:"body",onShow:m,onRemove:f,hasBackdrop:!0,disableParentScroll:!0,skipCompile:!0,themable:!0}}var r=8;return o.$inject=["$$rAF","$window","$mdUtil","$mdTheming","$timeout","$mdConstant","$document"],e("$mdMenu").setDefaults({methods:["target"],options:o})}t.module("material.components.menu").provider("$mdMenu",e),e.$inject=["$$interimElementProvider"]}(),function(){function e(e,t){function n(e){return e.attr("aria-valuemin",0),e.attr("aria-valuemax",100),e.attr("role","progressbar"),o}function o(n,o,i){t(o);var a=o[0],d=i.mdDiameter||48,c=d/48;a.style[e.CSS.TRANSFORM]="scale("+c+")",i.$observe("value",function(e){var t=r(e);o.attr("aria-valuenow",t)})}function r(e){return Math.max(0,Math.min(e||0,100))}return{restrict:"E",template:'<div class="md-spinner-wrapper"><div class="md-inner"><div class="md-gap"></div><div class="md-left"><div class="md-half-circle"></div></div><div class="md-right"><div class="md-half-circle"></div></div></div></div>',compile:n}}t.module("material.components.progressCircular",["material.core"]).directive("mdProgressCircular",e),e.$inject=["$mdConstant","$mdTheming"]}(),function(){function e(e,o,r){function i(e,t,n){return e.attr("aria-valuemin",0),e.attr("aria-valuemax",100),e.attr("role","progressbar"),a}function a(i,a,c){r(a);var l=a[0].querySelector(".md-bar1").style,m=a[0].querySelector(".md-bar2").style,s=t.element(a[0].querySelector(".md-container"));c.$observe("value",function(e){if("query"!=c.mdMode){var t=d(e);a.attr("aria-valuenow",t),m[o.CSS.TRANSFORM]=n[t]}}),c.$observe("mdBufferValue",function(e){l[o.CSS.TRANSFORM]=n[d(e)]}),e(function(){s.addClass("md-ready")})}function d(e){return e>100?100:0>e?0:Math.ceil(e||0)}return{restrict:"E",template:'<div class="md-container"><div class="md-dashed"></div><div class="md-bar md-bar1"></div><div class="md-bar md-bar2"></div></div>',compile:i}}t.module("material.components.progressLinear",["material.core"]).directive("mdProgressLinear",e),e.$inject=["$$rAF","$mdConstant","$mdTheming"];var n=function(){function e(e){var t=e/100,n=(e-100)/2;return"translateX("+n.toString()+"%) scale("+t.toString()+", 1)"}for(var t=new Array(101),n=0;101>n;n++)t[n]=e(n);return t}()}(),function(){function e(e,n,o,r){function i(i,a,d,c){function l(){a.hasClass("md-focused")||a.addClass("md-focused")}function m(o){var r=o.which||o.keyCode;switch(r){case n.KEY_CODE.LEFT_ARROW:case n.KEY_CODE.UP_ARROW:o.preventDefault(),s.selectPrevious(),l();break;case n.KEY_CODE.RIGHT_ARROW:case n.KEY_CODE.DOWN_ARROW:o.preventDefault(),s.selectNext(),l();break;case n.KEY_CODE.ENTER:var i=t.element(e.getClosest(a[0],"form"));i.length>0&&i.triggerHandler("submit")}}o(a);var s=c[0],u=c[1]||e.fakeNgModel();s.init(u),i.mouseActive=!1,a.attr({role:"radiogroup",tabIndex:a.attr("tabindex")||"0"}).on("keydown",m).on("mousedown",function(e){i.mouseActive=!0,r(function(){i.mouseActive=!1},100)}).on("focus",function(){i.mouseActive===!1&&s.$element.addClass("md-focused")}).on("blur",function(){s.$element.removeClass("md-focused")})}function a(e){this._radioButtonRenderFns=[],this.$element=e}function d(){return{init:function(e){this._ngModelCtrl=e,this._ngModelCtrl.$render=t.bind(this,this.render)},add:function(e){this._radioButtonRenderFns.push(e)},remove:function(e){var t=this._radioButtonRenderFns.indexOf(e);-1!==t&&this._radioButtonRenderFns.splice(t,1)},render:function(){this._radioButtonRenderFns.forEach(function(e){e()})},setViewValue:function(e,t){this._ngModelCtrl.$setViewValue(e,t),this.render()},getViewValue:function(){return this._ngModelCtrl.$viewValue},selectNext:function(){return c(this.$element,1)},selectPrevious:function(){return c(this.$element,-1)},setActiveDescendant:function(e){this.$element.attr("aria-activedescendant",e)}}}function c(n,o){var r=e.iterator(n[0].querySelectorAll("md-radio-button"),!0);if(r.count()){var i=function(e){return!t.element(e).attr("disabled")},a=n[0].querySelector("md-radio-button.md-checked"),d=r[0>o?"previous":"next"](a,i)||r.first();t.element(d).triggerHandler("click")}}return a.prototype=d(),{restrict:"E",controller:["$element",a],require:["mdRadioGroup","?ngModel"],link:{pre:i}}}function n(e,t,n){function o(o,i,a,d){function c(e){i[0].hasAttribute("disabled")||o.$apply(function(){d.setViewValue(a.value,e&&e.type)})}function l(){var e=d.getViewValue()==a.value;e!==s&&(s=e,i.attr("aria-checked",e),e?(i.addClass(r),d.setActiveDescendant(i.attr("id"))):i.removeClass(r))}function m(n,o){function r(){return a.id||"radio_"+t.nextUid()}o.ariaId=r(),n.attr({id:o.ariaId,role:"radio","aria-checked":"false"}),e.expectWithText(n,"aria-label")}var s;n(i),m(i,o),d.add(l),a.$observe("value",l),i.on("click",c).on("$destroy",function(){d.remove(l)})}var r="md-checked";return{restrict:"E",require:"^mdRadioGroup",transclude:!0,template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-off"></div><div class="md-on"></div></div><div ng-transclude class="md-label"></div>',link:o}}t.module("material.components.radioButton",["material.core"]).directive("mdRadioGroup",e).directive("mdRadioButton",n),e.$inject=["$mdUtil","$mdConstant","$mdTheming","$timeout"],n.$inject=["$mdAria","$mdUtil","$mdTheming"]}(),function(){function e(e,o,r,i,a,d,c){function l(a,l){var m=a.find("md-select-label").remove();if(m.length){if(!m[0].firstElementChild){var s=t.element("<span>");s.append(m.contents()),m.append(s)}}else m=t.element("<md-select-label><span></span></md-select-label>");if(m.append('<span class="md-select-icon" aria-hidden="true"></span>'),m.addClass("md-select-label"),m[0].hasAttribute("id")||m.attr("id","select_label_"+o.nextUid()),a.find("md-content").length||a.append(t.element("<md-content>").append(a.contents())),l.mdOnOpen&&a.find("md-content").prepend(t.element("<md-progress-circular>").attr("md-mode","indeterminate").attr("ng-hide","$$loadingAsyncDone").wrap("<div>").parent()),l.name){var u=t.element('<select class="md-visually-hidden">');u.attr({name:"."+l.name,"ng-model":l.ngModel,"aria-hidden":"true",tabindex:"-1"});var f=a.find("md-option");t.forEach(f,function(e){var n=t.element("<option>"+e.innerHTML+"</option>");e.hasAttribute("ng-value")?n.attr("ng-value",e.getAttribute("ng-value")):e.hasAttribute("value")&&n.attr("value",e.getAttribute("value")),u.append(n)}),a.parent().append(u)}var p='<div class="md-select-menu-container"><md-select-menu '+(t.isDefined(l.multiple)?"multiple":"")+">"+a.html()+"</md-select-menu></div>";return a.empty().append(m),l.tabindex=l.tabindex||"0",function(a,l,m,s){function u(){var e=l.attr("placeholder");e||(e=l.find("md-select-label").text()),i.expect(l,"aria-label",e)}function f(){M&&(A=A||M.find("md-select-menu").controller("mdSelectMenu"),C.setLabelText(A.selectedLabels()))}function h(){M=t.element(p);var e=M.find("md-select-menu");e.data("$ngModelController",T),e.data("$mdSelectController",C),$=a.$new(),M=d(M)($),A=M.find("md-select-menu").controller("mdSelectMenu")}function b(e){var n=[32,13,38,40];if(-1!=n.indexOf(e.keyCode))e.preventDefault(),g(e);else if(e.keyCode<=90&&e.keyCode>=31){e.preventDefault();var o=A.optNodeForKeyboardSearch(e);if(!o)return;var r=t.element(o).controller("mdOption");A.isMultiple||A.deselect(Object.keys(A.selected)[0]),A.select(r.hashKey,r.value),A.refreshViewValue(),T.$render()}}function g(){a.$evalAsync(function(){E=!0,e.show({scope:$,preserveScope:!0,skipCompile:!0,element:M,target:l[0],hasBackdrop:!0,loadingAsync:m.mdOnOpen?a.$eval(m.mdOnOpen)||!0:!1}).then(function(e){E=!1})})}var E,v,M,$,A,C=s[0],T=s[1],y=s[2],k=l.find("md-select-label"),w=0!==k.text().length;if(h(),r(l),m.name&&y){var x=l.parent()[0].querySelector('select[name=".'+m.name+'"]');y.$removeControl(t.element(x).controller())}var N=T.$render;T.$render=function(){N(),f()},C.setLabelText=function(e){if(!w){C.setIsPlaceholder(!e),e=e||m.placeholder||"";var t=w?k:k.children().eq(0);t.text(e)}},C.setIsPlaceholder=function(e){e?k.addClass("md-placeholder"):k.removeClass("md-placeholder")},C.triggerClose=function(){c(m.mdOnClose)(a)},a.$$postDigest(function(){u(),f()});var _;m.$observe("ngMultiple",function(e){_&&_();var t=c(e);_=a.$watch(function(){return t(a)},function(e,t){(e!==n||t!==n)&&(e?l.attr("multiple","multiple"):l.removeAttr("multiple"),M&&(A.setMultiple(e),N=T.$render,T.$render=function(){N(),f()},A.refreshViewValue(),T.$render()))})}),m.$observe("disabled",function(e){"string"==typeof e&&(e=!0),(v===n||v!==e)&&(v=e,e?(l.attr({tabindex:-1,"aria-disabled":"true"}),l.off("click",g),l.off("keydown",b)):(l.attr({tabindex:m.tabindex,"aria-disabled":"false"}),l.on("click",g),l.on("keydown",b)))}),m.disabled||m.ngDisabled||(l.attr({tabindex:m.tabindex,"aria-disabled":"false"}),l.on("click",g),l.on("keydown",b));var H={role:"combobox","aria-expanded":"false"};l[0].hasAttribute("id")||(H.id="select_"+o.nextUid()),l.attr(H),a.$on("$destroy",function(){E?e.cancel().then(function(){M.remove()}):M.remove()})}}return{restrict:"E",require:["mdSelect","ngModel","?^form"],compile:l,controller:function(){}}}function o(e,o,r){function i(e,n,i,a){function d(){n.attr({id:"select_menu_"+o.nextUid(),role:"listbox","aria-multiselectable":m.isMultiple?"true":"false"})}function c(e){(13==e.keyCode||32==e.keyCode)&&l(e)}function l(n){var r=o.getClosest(n.target,"md-option"),i=r&&t.element(r).data("$mdOptionController");if(r&&i){var a=m.hashGetter(i.value),d=t.isDefined(m.selected[a]);e.$apply(function(){m.isMultiple?d?m.deselect(a):m.select(a,i.value):d||(m.deselect(Object.keys(m.selected)[0]),m.select(a,i.value)),m.refreshViewValue()})}}var m=a[0],s=a[1];r(n),n.on("click",l),n.on("keypress",c),s&&m.init(s),d()}function a(r,i,a){function d(){var e=m.ngModel.$modelValue||m.ngModel.$viewValue;if(t.isArray(e)){var n=Object.keys(m.selected),o=e.map(m.hashGetter),r=n.filter(function(e){return-1===o.indexOf(e)});r.forEach(m.deselect),o.forEach(function(t,n){m.select(t,e[n])})}}function l(){var e=m.ngModel.$viewValue||m.ngModel.$modelValue;Object.keys(m.selected).forEach(m.deselect),m.select(m.hashGetter(e),e)}var m=this;m.isMultiple=t.isDefined(i.multiple),m.selected={},m.options={},r.$watch(function(){return m.options},function(){m.ngModel.$render()},!0);var s;m.setMultiple=function(e){function n(e,n){return t.isArray(e||n||[])}var o=m.ngModel;m.isMultiple=e,s&&s(),m.isMultiple?(o.$validators["md-multiple"]=n,o.$render=d,r.$watchCollection(i.ngModel,function(e){n(e)&&d(e)})):(delete o.$validators["md-multiple"],o.$render=l)};var u,f,p,h="",b=300;m.optNodeForKeyboardSearch=function(e){u&&clearTimeout(u),u=setTimeout(function(){u=n,h="",p=n,f=n},b),h+=String.fromCharCode(e.keyCode);var o=new RegExp("^"+h,"i");f||(f=a.find("md-option"),p=new Array(f.length),t.forEach(f,function(e,t){p[t]=e.textContent.trim()}));for(var r=0;r<p.length;++r)if(o.test(p[r]))return f[r]},m.init=function(n){if(m.ngModel=n,n.$options&&n.$options.trackBy){var o={},i=e(n.$options.trackBy);m.hashGetter=function(e,t){return o.$value=e,i(t||r,o)}}else m.hashGetter=function(e){return t.isObject(e)?"object_"+(e.$$mdSelectId||(e.$$mdSelectId=++c)):e};m.setMultiple(m.isMultiple)},m.selectedLabels=function(){var e=o.nodesToArray(a[0].querySelectorAll("md-option[selected]"));return e.length?e.map(function(e){return e.textContent}).join(", "):""},m.select=function(e,t){var n=m.options[e];n&&n.setSelected(!0),m.selected[e]=t},m.deselect=function(e){var t=m.options[e];t&&t.setSelected(!1),delete m.selected[e]},m.addOption=function(e,n){if(t.isDefined(m.options[e]))throw new Error('Duplicate md-option values are not allowed in a select. Duplicate value "'+n.value+'" found.');m.options[e]=n,t.isDefined(m.selected[e])&&(m.select(e,n.value),m.refreshViewValue())},m.removeOption=function(e){delete m.options[e]},m.refreshViewValue=function(){var e,t=[];for(var n in m.selected)t.push((e=m.options[n])?e.value:m.selected[n]);m.ngModel.$setViewValue(m.isMultiple?t:t[0])}}return a.$inject=["$scope","$attrs","$element"],{restrict:"E",require:["mdSelectMenu","?ngModel"],controller:a,link:{pre:i}}}function r(e,n){function o(e,n){return e.append(t.element('<div class="md-text">').append(e.contents())),e.attr("tabindex",n.tabindex||"0"),r}function r(o,r,i,a){function d(e,t){var n=m.hashGetter(t,o),r=m.hashGetter(e,o);l.hashKey=r,l.value=e,m.removeOption(n,l),m.addOption(r,l)}function c(){var e={role:"option","aria-selected":"false"};r[0].hasAttribute("id")||(e.id="select_option_"+n.nextUid()),r.attr(e)}var l=a[0],m=a[1];t.isDefined(i.ngValue)?o.$watch(i.ngValue,d):t.isDefined(i.value)?d(i.value):o.$watch(function(){return r.text()},d),o.$$postDigest(function(){i.$observe("selected",function(e){t.isDefined(e)&&(e?(m.isMultiple||m.deselect(Object.keys(m.selected)[0]),m.select(l.hashKey,l.value)):m.deselect(l.hashKey),m.refreshViewValue(),m.ngModel.$render())})}),e.attach(o,r),c(),o.$on("$destroy",function(){m.removeOption(l.hashKey,l)})}function i(e){this.selected=!1,this.setSelected=function(t){t&&!this.selected?e.attr({selected:"selected","aria-selected":"true"}):!t&&this.selected&&(e.removeAttr("selected"),e.attr("aria-selected","false")),this.selected=t}}return i.$inject=["$element"],{restrict:"E",require:["mdOption","^^mdSelectMenu"],controller:i,compile:o}}function i(){function e(e,n){var o=e.find("label");o.length||(o=t.element("<label>"),e.prepend(o)),n.label&&o.text(n.label)}return{restrict:"E",compile:e}}function a(e){function o(e,o,a,c,l,m,s){function u(n,r,i){function d(){i.target.attr("aria-expanded","true")}function u(){function t(e){var t=c.nodesToArray(f),n=t.indexOf(i.focusedNode);-1===n?n=0:"next"===e&&n<t.length-1?n++:"prev"===e&&n>0&&n--;var o=i.focusedNode=t[n];o&&o.focus()}function a(){t("next")}function d(){t("prev")}function l(){m.isMultiple||(i.restoreFocus=!0,n.$evalAsync(function(){e.hide(m.ngModel.$viewValue)}))}if(!i.isRemoved){var m=i.selectEl.controller("mdSelectMenu")||{};r.addClass("md-clickable"),i.backdrop&&i.backdrop.on("click",function(t){t.preventDefault(),t.stopPropagation(),i.restoreFocus=!1,n.$apply(e.cancel)}),i.selectEl.on("keydown",function(t){switch(t.keyCode){case o.KEY_CODE.SPACE:case o.KEY_CODE.ENTER:var r=c.getClosest(t.target,"md-option");r&&(i.selectEl.triggerHandler({type:"click",target:r}),t.preventDefault());break;case o.KEY_CODE.TAB:case o.KEY_CODE.ESCAPE:t.preventDefault(),i.restoreFocus=!0,n.$apply(e.cancel)}}),i.selectEl.on("keydown",function(e){switch(e.keyCode){case o.KEY_CODE.UP_ARROW:return d();case o.KEY_CODE.DOWN_ARROW:return a();default:if(e.keyCode>=31&&e.keyCode<=90){var t=i.selectEl.controller("mdSelectMenu").optNodeForKeyboardSearch(e);t&&t.focus()}}}),i.selectEl.on("click",l),i.selectEl.on("keydown",function(e){(32==e.keyCode||13==e.keyCode)&&l()})}}if(!i.target)throw new Error('$mdSelect.show() expected a target element in options.target but got "'+i.target+'"!');t.extend(i,{isRemoved:!1,target:t.element(i.target),parent:t.element(i.parent),selectEl:r.find("md-select-menu"),contentEl:r.find("md-content"),backdrop:i.hasBackdrop&&t.element('<md-backdrop class="md-select-backdrop md-click-catcher">')}),i.resizeFn=function(){a(function(){a(function(){p(n,r,i)})})},t.element(s).on("resize",i.resizeFn),t.element(s).on("orientationchange",i.resizeFn),d(),r.removeClass("md-leave");var f=i.selectEl[0].getElementsByTagName("md-option");return i.loadingAsync&&i.loadingAsync.then?i.loadingAsync.then(function(){n.$$loadingAsyncDone=!0,a(function(){a(function(){i.isRemoved||p(n,r,i)})})}):i.loadingAsync&&(n.$$loadingAsyncDone=!0),i.disableParentScroll&&!c.getClosest(i.target,"MD-DIALOG")?i.restoreScroll=c.disableScrollAround(i.element):i.disableParentScroll=!1,m(u,75,!1),i.backdrop&&(l.inherit(i.backdrop,i.parent),i.parent.append(i.backdrop)),i.parent.append(r),a(function(){a(function(){i.isRemoved||p(n,r,i)})}),c.transitionEndPromise(i.selectEl,{timeout:350})}function f(e,o,r){r.isRemoved=!0,o.addClass("md-leave").removeClass("md-clickable"),r.target.attr("aria-expanded","false"),t.element(s).off("resize",r.resizeFn),t.element(s).off("orientationchange",r.resizefn),r.resizeFn=n;var i=r.selectEl.controller("mdSelect");return i&&i.setLabelText(r.selectEl.controller("mdSelectMenu").selectedLabels()),c.transitionEndPromise(o,{timeout:350}).then(function(){o.removeClass("md-active"),r.backdrop&&r.backdrop.remove(),o[0].parentNode===r.parent[0]&&r.parent[0].removeChild(o[0]),r.disableParentScroll&&r.restoreScroll(),r.restoreFocus&&r.target.focus(),i&&i.triggerClose()})}function p(e,t,n){var l,m=t[0],u=n.target[0].firstElementChild.firstElementChild,f=n.parent[0],p=n.selectEl[0],h=n.contentEl[0],b=f.getBoundingClientRect(),g=u.getBoundingClientRect(),E=!1,v={
left:b.left+d,top:d,bottom:b.height-d,right:b.width-d-(c.floatingScrollbars()?16:0)},M={top:g.top-v.top,left:g.left-v.left,right:v.right-(g.left+g.width),bottom:v.bottom-(g.top+g.height)},$=b.width-2*d,A=h.scrollHeight>h.offsetHeight,C=p.querySelector("md-option[selected]"),T=p.getElementsByTagName("md-option"),y=p.getElementsByTagName("md-optgroup");l=C?C:y.length?y[0]:T.length?T[0]:h.firstElementChild||h,h.offsetWidth>$&&(h.style["max-width"]=$+"px"),E&&(h.style["min-width"]=g.width+"px"),A&&p.classList.add("md-overflow");var k=p.getBoundingClientRect(),w=i(l);if(l){var x=s.getComputedStyle(l);w.paddingLeft=parseInt(x.paddingLeft,10)||0,w.paddingRight=parseInt(x.paddingRight,10)||0}var N=l;if("MD-OPTGROUP"===(N.tagName||"").toUpperCase()&&(N=T[0]||h.firstElementChild||h),A){var _=h.offsetHeight/2;h.scrollTop=w.top+w.height/2-_,M.top<_?h.scrollTop=Math.min(w.top,h.scrollTop+_-M.top):M.bottom<_&&(h.scrollTop=Math.max(w.top+w.height-k.height,h.scrollTop-_+M.bottom))}var H,S,I;E?(H=g.left,S=g.top+g.height,I="50% 0",S+k.height>v.bottom&&(S=g.top-k.height,I="50% 100%")):(H=g.left+w.left-w.paddingLeft,S=Math.floor(g.top+g.height/2-w.height/2-w.top+h.scrollTop),I=w.left+g.width/2+"px "+(w.top+w.height/2-h.scrollTop)+"px 0px",m.style.minWidth=g.width+w.paddingLeft+w.paddingRight+"px");var O=m.getBoundingClientRect();m.style.left=r(v.left,H,v.right-O.width)+"px",m.style.top=r(v.top,S,v.bottom-O.height)+"px",p.style[o.CSS.TRANSFORM_ORIGIN]=I,p.style[o.CSS.TRANSFORM]="scale("+Math.min(g.width/k.width,1)+","+Math.min(g.height/k.height,1)+")",a(function(){t.addClass("md-active"),p.style[o.CSS.TRANSFORM]="",N&&(n.focusedNode=N,N.focus())})}return{parent:"body",onShow:u,onRemove:f,hasBackdrop:!0,disableParentScroll:!0,themable:!0}}function r(e,t,n){return Math.max(e,Math.min(t,n))}function i(e){return e?{left:e.offsetLeft,top:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}:{left:0,top:0,width:0,height:0}}return o.$inject=["$mdSelect","$mdConstant","$$rAF","$mdUtil","$mdTheming","$timeout","$window"],e("$mdSelect").setDefaults({methods:["target"],options:o})}var d=8,c=0;t.module("material.components.select",["material.core","material.components.backdrop"]).directive("mdSelect",e).directive("mdSelectMenu",o).directive("mdOption",r).directive("mdOptgroup",i).provider("$mdSelect",a),e.$inject=["$mdSelect","$mdUtil","$mdTheming","$mdAria","$interpolate","$compile","$parse"],o.$inject=["$parse","$mdUtil","$mdTheming"],r.$inject=["$mdButtonInkRipple","$mdUtil"],a.$inject=["$$interimElementProvider"]}(),function(){function e(e,n,o,r,i,a,d,c){function l(e,t){return e.attr({tabIndex:0,role:"slider"}),o.expect(e,"aria-label"),m}function m(o,l,m,s){function u(){E(),A(),g()}function f(e){W=parseFloat(e),l.attr("aria-valuemin",e),u()}function p(e){G=parseFloat(e),l.attr("aria-valuemax",e),u()}function h(e){X=parseFloat(e),g()}function b(e){l.attr("aria-disabled",!!e)}function g(){if(t.isDefined(m.mdDiscrete)){var e=Math.floor((G-W)/X);if(!Q){var o=n.getComputedStyle(U[0]);Q=t.element('<canvas style="position:absolute;">'),Z=Q[0].getContext("2d"),Z.fillStyle=o.backgroundColor||"black",U.append(Q)}var r=v();Q[0].width=r.width,Q[0].height=r.height;for(var i,a=0;e>=a;a++)i=Math.floor(r.width*(a/e)),Z.fillRect(i-1,0,2,r.height)}}function E(){J=q[0].getBoundingClientRect()}function v(){return Y(),J}function M(e){if(!l[0].hasAttribute("disabled")){var t;e.keyCode===i.KEY_CODE.LEFT_ARROW?t=-X:e.keyCode===i.KEY_CODE.RIGHT_ARROW&&(t=X),t&&((e.metaKey||e.ctrlKey||e.altKey)&&(t*=4),e.preventDefault(),e.stopPropagation(),o.$evalAsync(function(){$(s.$viewValue+t)}))}}function $(e){s.$setViewValue(C(T(e)))}function A(){isNaN(s.$viewValue)&&(s.$viewValue=s.$modelValue);var e=(s.$viewValue-W)/(G-W);o.modelValue=s.$viewValue,l.attr("aria-valuenow",s.$viewValue),y(e),j.text(s.$viewValue)}function C(e){return t.isNumber(e)?Math.max(W,Math.min(G,e)):void 0}function T(e){if(t.isNumber(e)){var n=Math.round(e/X)*X;return Math.round(1e3*n)/1e3}}function y(e){V.css("width",100*e+"%"),B.css("left",100*e+"%"),l.toggleClass("md-min",0===e)}function k(e){if(!P()){l.addClass("active"),l[0].focus(),E();var t=D(O(e.pointer.x)),n=C(T(t));o.$apply(function(){$(n),y(R(n))})}}function w(e){if(!P()){l.removeClass("dragging active");var t=D(O(e.pointer.x)),n=C(T(t));o.$apply(function(){$(n),A()})}}function x(e){P()||(ee=!0,e.stopPropagation(),l.addClass("dragging"),H(e))}function N(e){ee&&(e.stopPropagation(),H(e))}function _(e){ee&&(e.stopPropagation(),ee=!1)}function H(e){te?I(e.pointer.x):S(e.pointer.x)}function S(e){o.$evalAsync(function(){$(D(O(e)))})}function I(e){var t=D(O(e)),n=C(T(t));y(O(e)),j.text(n)}function O(e){return Math.max(0,Math.min(1,(e-J.left)/J.width))}function D(e){return W+e*(G-W)}function R(e){return(e-W)/(G-W)}a(l),s=s||{$setViewValue:function(e){this.$viewValue=e,this.$viewChangeListeners.forEach(function(e){e()})},$parsers:[],$formatters:[],$viewChangeListeners:[]};var L=m.ngDisabled&&c(m.ngDisabled),P=L?function(){return L(o.$parent)}:t.noop,F=t.element(l[0].querySelector(".md-thumb")),j=t.element(l[0].querySelector(".md-thumb-text")),B=F.parent(),q=t.element(l[0].querySelector(".md-track-container")),V=t.element(l[0].querySelector(".md-track-fill")),U=t.element(l[0].querySelector(".md-track-ticks")),Y=r.throttle(E,5e3);t.isDefined(m.min)?m.$observe("min",f):f(0),t.isDefined(m.max)?m.$observe("max",p):p(100),t.isDefined(m.step)?m.$observe("step",h):h(1);var K=t.noop;m.ngDisabled&&(K=o.$parent.$watch(m.ngDisabled,b)),d.register(l,"drag"),l.on("keydown",M).on("$md.pressdown",k).on("$md.pressup",w).on("$md.dragstart",x).on("$md.drag",N).on("$md.dragend",_),setTimeout(u);var z=e.throttle(u);t.element(n).on("resize",z),o.$on("$destroy",function(){t.element(n).off("resize",z),K()}),s.$render=A,s.$viewChangeListeners.push(A),s.$formatters.push(C),s.$formatters.push(T);var W,G,X,Q,Z,J={};E();var ee=!1,te=t.isDefined(m.mdDiscrete)}return{scope:{},require:"?ngModel",template:'<div class="md-slider-wrapper">        <div class="md-track-container">          <div class="md-track"></div>          <div class="md-track md-track-fill"></div>          <div class="md-track-ticks"></div>        </div>        <div class="md-thumb-container">          <div class="md-thumb"></div>          <div class="md-focus-thumb"></div>          <div class="md-focus-ring"></div>          <div class="md-sign">            <span class="md-thumb-text"></span>          </div>          <div class="md-disabled-thumb"></div>        </div>      </div>',compile:l}}t.module("material.components.slider",["material.core"]).directive("mdSlider",e),e.$inject=["$$rAF","$window","$mdAria","$mdUtil","$mdConstant","$mdTheming","$mdGesture","$parse"]}(),function(){function e(e,o,r,i,a){function d(e){function t(e,t){t.addClass("md-sticky-clone"),t.css("top",b+"px");var n={element:e,clone:t};return h.items.push(n),f.parent().prepend(n.clone),p(),function(){h.items.forEach(function(t,n){t.element[0]===e[0]&&(h.items.splice(n,1),t.clone.remove())}),p()}}function r(){h.items.forEach(d),h.items=h.items.sort(function(e,t){return e.top<t.top?-1:1});for(var e,t=f.prop("scrollTop"),n=h.items.length-1;n>=0;n--)if(t>h.items[n].top){e=h.items[n];break}m(e)}function d(e){var t=e.element[0];for(e.top=0,e.left=0;t&&t!==f[0];)e.top+=t.offsetTop,e.left+=t.offsetLeft,t=t.offsetParent;e.height=e.element.prop("offsetHeight"),e.clone.css("margin-left",e.left+"px"),a.floatingScrollbars()&&e.clone.css("margin-right","0")}function c(){var e=f.prop("scrollTop"),t=e>(c.prevScrollTop||0);c.prevScrollTop=e,0===e?m(null):t&&h.next?h.next.top-e<=0?m(h.next):h.current&&(h.next.top-e<=h.next.height?u(h.current,h.next.top-h.next.height-e):u(h.current,null)):!t&&h.current&&(e<h.current.top&&m(h.prev),h.current&&h.next&&(e>=h.next.top-h.current.height?u(h.current,h.next.top-e-h.current.height):u(h.current,null)))}function m(e){if(h.current!==e){h.current&&(u(h.current,null),s(h.current,null)),e&&s(e,"active"),h.current=e;var t=h.items.indexOf(e);h.next=h.items[t+1],h.prev=h.items[t-1],s(h.next,"next"),s(h.prev,"prev")}}function s(e,t){e&&e.state!==t&&(e.state&&(e.clone.attr("sticky-prev-state",e.state),e.element.attr("sticky-prev-state",e.state)),e.clone.attr("sticky-state",t),e.element.attr("sticky-state",t),e.state=t)}function u(e,t){e&&(null===t||t===n?e.translateY&&(e.translateY=null,e.clone.css(o.CSS.TRANSFORM,"")):(e.translateY=t,e.clone.css(o.CSS.TRANSFORM,"translate3d("+e.left+"px,"+t+"px,0)")))}var f=e.$element,p=i.throttle(r);l(f),f.on("$scrollstart",p),f.on("$scroll",c);var h,b=f.prop("offsetTop");return h={prev:null,current:null,next:null,items:[],add:t,refreshElements:r}}function c(n){var o,r=t.element("<div>");e[0].body.appendChild(r[0]);for(var i=["sticky","-webkit-sticky"],a=0;a<i.length;++a)if(r.css({position:i[a],top:0,"z-index":2}),r.css("position")==i[a]){o=i[a];break}return r.remove(),o}function l(e){function t(){+a.now()-o>r?(n=!1,e.triggerHandler("$scrollend")):(e.triggerHandler("$scroll"),i(t))}var n,o,r=200;e.on("scroll touchmove",function(){n||(n=!0,i(t),e.triggerHandler("$scrollstart")),e.triggerHandler("$scroll"),o=+a.now()})}var m=c();return function(e,t,n){var o=t.controller("mdContent");if(o)if(m)t.css({position:m,top:0,"z-index":2});else{var r=o.$element.data("$$sticky");r||(r=d(o),o.$element.data("$$sticky",r));var i=r.add(t,n||t.clone());e.$on("$destroy",i)}}}t.module("material.components.sticky",["material.core","material.components.content"]).factory("$mdSticky",e),e.$inject=["$document","$mdConstant","$compile","$$rAF","$mdUtil"]}(),function(){function e(e,n){return function(o){function r(){return e.when(o).then(function(e){return d=e,e})}var i,a="SideNav '"+o+"' is not available!",d=e.get(o);return d||e.notFoundError(o),i={isOpen:function(){return d&&d.isOpen()},isLockedOpen:function(){return d&&d.isLockedOpen()},toggle:function(){return d?d.toggle():n.reject(a)},open:function(){return d?d.open():n.reject(a)},close:function(){return d?d.close():n.reject(a)},then:function(e){var o=d?n.when(d):r();return o.then(e||t.noop)}}}}function o(){return{restrict:"A",require:"^mdSidenav",link:function(e,t,n,o){o.focusElement(t)}}}function r(e,o,r,i,a,d,c,l,m,s){function u(u,f,p,h){function b(e,t){u.isLockedOpen=e,e===t?f.toggleClass("md-locked-open",!!e):o[e?"addClass":"removeClass"](f,"md-locked-open"),w.toggleClass("md-locked-open",!!e)}function g(e){var t=f.parent();t[e?"on":"off"]("keydown",M),w[e?"on":"off"]("click",$),e&&(C=s[0].activeElement);var n=h.focusElement();return E(e),T=m.all([e?o.enter(w,t):o.leave(w),o[e?"removeClass":"addClass"](f,"md-closed")]).then(function(){u.isOpen&&n&&n.focus()})}function E(e){var o=f.parent();e?(A=o.css("overflow"),o.css("overflow","hidden")):t.isDefined(A)&&(o.css("overflow",A),A=n)}function v(t){if(u.isOpen==t)return m.when(!0);var n=m.defer();return u.isOpen=t,e(function(){T.then(function(e){u.isOpen||(C&&C.focus(),C=null),n.resolve(e)})},0,!1),n.promise}function M(e){var t=e.keyCode===d.KEY_CODE.ESCAPE;return t?$(e):m.when(!0)}function $(e){return e.preventDefault(),e.stopPropagation(),h.close()}var A,C=null,T=m.when(!0),y=r(p.mdIsLockedOpen),k=function(){return y(u.$parent,{$media:function(e){return i.warn("$media is deprecated for is-locked-open. Use $mdMedia instead."),a(e)},$mdMedia:a})},w=c('<md-backdrop class="md-sidenav-backdrop md-opaque ng-enter">')(u);f.on("$destroy",h.destroy),l.inherit(w,f),u.$watch(k,b),u.$watch("isOpen",g),h.$toggleOpen=v,h.focusElement(h.focusElement()||f)}return{restrict:"E",scope:{isOpen:"=?mdIsOpen"},controller:"$mdSidenavController",compile:function(e){return e.addClass("md-closed"),e.attr("tabIndex","-1"),u}}}function i(e,n,o,r,i){var a,d=this;d.isOpen=function(){return!!e.isOpen},d.isLockedOpen=function(){return!!e.isLockedOpen},d.open=function(){return d.$toggleOpen(!0)},d.close=function(){return d.$toggleOpen(!1)},d.toggle=function(){return d.$toggleOpen(!e.isOpen)},d.focusElement=function(e){return t.isDefined(e)&&(a=e),a},d.$toggleOpen=function(){return i.when(e.isOpen)},d.destroy=r.register(d,o.mdComponentId)}t.module("material.components.sidenav",["material.core","material.components.backdrop"]).factory("$mdSidenav",e).directive("mdSidenav",r).directive("mdSidenavFocus",o).controller("$mdSidenavController",i),e.$inject=["$mdComponentRegistry","$q"],r.$inject=["$timeout","$animate","$parse","$log","$mdMedia","$mdConstant","$compile","$mdTheming","$q","$document"],i.$inject=["$scope","$element","$attrs","$mdComponentRegistry","$q"]}(),function(){function e(e,n,o){return{restrict:"E",replace:!0,transclude:!0,template:'<h2 class="md-subheader"><div class="md-subheader-inner"><span class="md-subheader-content"></span></div></h2>',compile:function(r,i,a){return function(r,i,d){function c(e){return t.element(e[0].querySelector(".md-subheader-content"))}o(i);var l=i[0].outerHTML;a(r,function(e){c(i).append(e)}),i.hasClass("md-no-sticky")||a(r,function(o){var a=n(t.element(l))(r);c(a).append(o),e(r,i,a)})}}}}t.module("material.components.subheader",["material.core","material.components.sticky"]).directive("mdSubheader",e),e.$inject=["$mdSticky","$compile","$mdTheming"]}(),function(){function e(e){function t(e){function t(t,r,i){var a=e(i[n]);r.on(o,function(e){t.$apply(function(){a(t,{$event:e})})})}return{restrict:"A",link:t}}var n="md"+e,o="$md."+e.toLowerCase();return t.$inject=["$parse"],t}t.module("material.components.swipe",["material.core"]).directive("mdSwipeLeft",e("SwipeLeft")).directive("mdSwipeRight",e("SwipeRight"))}(),function(){function e(e,n,o,r,i,a,d,c){function l(e,n){var r=m.compile(e,n);return e.addClass("md-dragging"),function(e,n,l,m){function s(t){h(e)||(t.stopPropagation(),n.addClass("md-dragging"),E={width:b.prop("offsetWidth")},n.removeClass("transition"))}function u(e){if(E){e.stopPropagation(),e.srcEvent&&e.srcEvent.preventDefault();var t=e.pointer.distanceX/E.width,n=m.$viewValue?1+t:t;n=Math.max(0,Math.min(1,n)),b.css(i.CSS.TRANSFORM,"translate3d("+100*n+"%,0,0)"),E.translate=n}}function f(e){if(E){e.stopPropagation(),n.removeClass("md-dragging"),b.css(i.CSS.TRANSFORM,"");var t=m.$viewValue?E.translate<.5:E.translate>.5;t&&p(!m.$viewValue),E=null}}function p(t){e.$apply(function(){m.$setViewValue(t),m.$render()})}m=m||o.fakeNgModel();var h=a(l.ngDisabled),b=t.element(n[0].querySelector(".md-thumb-container")),g=t.element(n[0].querySelector(".md-container"));d(function(){n.removeClass("md-dragging")}),r(e,n,l,m),t.isDefined(l.ngDisabled)&&e.$watch(h,function(e){n.attr("tabindex",e?-1:0)}),c.register(g,"drag"),g.on("$md.dragstart",s).on("$md.drag",u).on("$md.dragend",f);var E}}var m=e[0];return{restrict:"E",priority:210,transclude:!0,template:'<div class="md-container"><div class="md-bar"></div><div class="md-thumb-container"><div class="md-thumb" md-ink-ripple md-ink-ripple-checkbox></div></div></div><div ng-transclude class="md-label"></div>',require:"?ngModel",compile:l}}t.module("material.components.switch",["material.core","material.components.checkbox"]).directive("mdSwitch",e),e.$inject=["mdCheckboxDirective","$mdTheming","$mdUtil","$document","$mdConstant","$parse","$$rAF","$mdGesture"]}(),function(){t.module("material.components.tabs",["material.core","material.components.icon"])}(),function(){function e(){return{restrict:"E"}}function n(e){function t(e,t,o,r){function i(i,a,c){return a=r.extractElementByName(a,"md-toast"),n=c.content,a.addClass(c.position.split(" ").map(function(e){return"md-"+e}).join(" ")),c.parent.addClass(d(c.position)),c.onSwipe=function(t,n){a.addClass("md-"+t.type.replace("$md.","")),e(o.cancel)},a.on("$md.swipeleft $md.swiperight",c.onSwipe),t.enter(a,c.parent)}function a(e,n,o){return n.off("$md.swipeleft $md.swiperight",o.onSwipe),o.parent.removeClass(d(o.position)),t.leave(n)}function d(e){return"md-toast-open-"+(e.indexOf("top")>-1?"top":"bottom")}return{onShow:i,onRemove:a,position:"bottom left",themable:!0,hideDelay:3e3}}var n,o=e("$mdToast").setDefaults({methods:["position","hideDelay","capsule"],options:t}).addPreset("simple",{argOption:"content",methods:["content","action","highlightAction","theme","parent"],options:["$mdToast","$mdTheming",function(e,t){var o={template:['<md-toast md-theme="{{ toast.theme }}" ng-class="{\'md-capsule\': toast.capsule}">',"<span flex>{{ toast.content }}</span>",'<md-button class="md-action" ng-if="toast.action" ng-click="toast.resolve()" ng-class="{\'md-highlight\': toast.highlightAction}">',"{{ toast.action }}","</md-button>","</md-toast>"].join(""),controller:["$scope",function(t){var o=this;t.$watch(function(){return n},function(){o.content=n}),this.resolve=function(){e.hide()}}],theme:t.defaultTheme(),controllerAs:"toast",bindToController:!0};return o}]}).addMethod("updateContent",function(e){n=e});return t.$inject=["$timeout","$animate","$mdToast","$mdUtil"],o}t.module("material.components.toast",["material.core","material.components.button"]).directive("mdToast",e).provider("$mdToast",n),n.$inject=["$$interimElementProvider"]}(),function(){function e(e,n,o,r,i,a){return{restrict:"E",controller:t.noop,link:function(d,c,l){function m(){function t(t,n){c.parent()[0]===n.parent()[0]&&(u&&u.off("scroll",b),n.on("scroll",b),n.attr("scroll-shrink","true"),u=n,e(r))}function r(){s=c.prop("offsetHeight");var e=-s*h+"px";u.css("margin-top",e),u.css("margin-bottom",e),m()}function m(e){var t=e?e.target.scrollTop:p;g(),f=Math.min(s/h,Math.max(0,f+t-p)),c.css(n.CSS.TRANSFORM,"translate3d(0,"+-f*h+"px,0)"),u.css(n.CSS.TRANSFORM,"translate3d(0,"+(s-f)*h+"px,0)"),p=t,c.hasClass("md-whiteframe-z1")?f||a(function(){i.removeClass(c,"md-whiteframe-z1")}):f&&a(function(){i.addClass(c,"md-whiteframe-z1")})}var s,u,f=0,p=0,h=l.mdShrinkSpeedFactor||.5,b=e.throttle(m),g=o.debounce(r,5e3);d.$on("$mdContentLoaded",t)}r(c),t.isDefined(l.mdScrollShrink)&&m()}}}t.module("material.components.toolbar",["material.core","material.components.content"]).directive("mdToolbar",e),e.$inject=["$$rAF","$mdConstant","$mdUtil","$mdTheming","$animate","$timeout"]}(),function(){function e(e,n,o,r,i,a,d,c,l){function m(m,f,p){function h(){b(),v(),C(),g(),E()}function b(){t.isDefined(p.mdDelay)||(m.delay=s)}function g(){m.$on("$destroy",function(){m.visible=!1,f.remove(),t.element(n).off("resize",O)}),m.$watch("visible",function(e){e?y():k()})}function E(){x.attr("aria-label")||x.text().trim()||x.attr("aria-label",f.text().trim())}function v(){f.detach(),f.attr("role","tooltip")}function M(){for(var e=f.parent();e&&"none"==n.getComputedStyle(e[0])["pointer-events"];)e=e.parent();return e}function $(){for(var e=f.parent()[0];e&&e!==d[0]&&e!==document.body;)e=e.parentNode;return e}function A(e,o){var r=n.getComputedStyle(f[0]);return t.isDefined(r[e])&&r[e]==o}function C(){var e=!1,o=function(){A("pointer-events","none")||T(!0)},i=function(){var t=m.hasOwnProperty("autohide")?m.autohide:p.hasOwnProperty("mdAutohide");(t||e||r[0].activeElement!==x[0])&&T(!1),e=!1};x.on("mousedown",function(){e=!0}),x.on("focus mouseenter touchstart",o),x.on("blur mouseleave touchend touchcancel",i),t.element(n).on("resize",O)}function T(t){T.value=!!t,T.queued||(t?(T.queued=!0,e(function(){m.visible=T.value,T.queued=!1},m.delay)):e(function(){m.visible=!1}))}function y(){return I.append(f),A("display","none")?(m.visible=!1,void f.detach()):(w(),void t.forEach([f,N,_],function(e){c.addClass(e,"md-show")}))}function k(){l.all([c.removeClass(_,"md-show"),c.removeClass(N,"md-show"),c.removeClass(f,"md-show")]).then(function(){m.visible||f.detach()})}function w(){function e(){var e="left"===H||"right"===H?2*Math.sqrt(Math.pow(o.width,2)+Math.pow(o.height/2,2)):2*Math.sqrt(Math.pow(o.width/2,2)+Math.pow(o.height,2)),t="left"===H?{left:100,top:50}:"right"===H?{left:0,top:50}:"top"===H?{left:50,top:100}:{left:50,top:0};N.css({width:e+"px",height:e+"px",left:t.left+"%",top:t.top+"%"})}function t(e){var t={left:e.left,top:e.top};return t.left=Math.min(t.left,I.prop("scrollWidth")-o.width-u),t.left=Math.max(t.left,u),t.top=Math.min(t.top,I.prop("scrollHeight")-o.height-u),t.top=Math.max(t.top,u),t}function n(e){return"left"===e?{left:r.left-o.width-u,top:r.top+r.height/2-o.height/2}:"right"===e?{left:r.left+r.width+u,top:r.top+r.height/2-o.height/2}:"top"===e?{left:r.left+r.width/2-o.width/2,top:r.top-o.height-u}:{left:r.left+r.width/2-o.width/2,top:r.top+r.height+u}}var o=i.offsetRect(f,I),r=i.offsetRect(x,I),a=n(H);H?a=t(a):a.top>f.prop("offsetParent").scrollHeight-o.height-u&&(a=t(n("top"))),f.css({top:a.top+"px",left:a.left+"px"}),e()}a(f);var x=M(),N=t.element(f[0].getElementsByClassName("md-background")[0]),_=t.element(f[0].getElementsByClassName("md-content")[0]),H=p.mdDirection,S=$(),I=t.element(S||document.body),O=o.throttle(function(){m.visible&&w()});return h()}var s=300,u=8;return{restrict:"E",transclude:!0,priority:210,template:'        <div class="md-background"></div>        <div class="md-content" ng-transclude></div>',scope:{visible:"=?mdVisible",delay:"=?mdDelay",autohide:"=?mdAutohide"},link:m}}t.module("material.components.tooltip",["material.core"]).directive("mdTooltip",e),e.$inject=["$timeout","$window","$$rAF","$document","$mdUtil","$mdTheming","$rootElement","$animate","$q"]}(),function(){t.module("material.components.whiteframe",[])}(),function(){function e(e,n,i,a,d,c,l,m,s,u){function f(){i.initOptionalProperties(e,u,{searchText:null,selectedItem:null}),c(n),g(),d(function(){v(),b(),h()})}function p(){function e(){var e=Z.ul.getBoundingClientRect(),n={};e.right>i.right-r&&(n.left=t.right-e.width+"px"),Z.$.ul.css(n)}if(!Z)return d(p,0,!1);var t=Z.wrap.getBoundingClientRect(),n=Z.snap.getBoundingClientRect(),i=Z.root.getBoundingClientRect(),a=n.bottom-i.top,c=i.bottom-n.top,l=t.left-i.left,m=t.width,s={left:l+"px",minWidth:m+"px",maxWidth:Math.max(t.right-i.left,i.right-t.left)-r+"px"};a>c&&i.height-t.bottom-r<o?(s.top="auto",s.bottom=c+"px",s.maxHeight=Math.min(o,t.top-i.top-r)+"px"):(s.top=a+"px",s.bottom="auto",s.maxHeight=Math.min(o,i.bottom-t.bottom-r)+"px"),Z.$.ul.css(s),d(e,0,!1)}function h(){Z.$.root.length&&(c(Z.$.ul),Z.$.ul.detach(),Z.$.root.append(Z.$.ul),m.pin&&m.pin(Z.$.ul,s))}function b(){e.autofocus&&Z.input.focus()}function g(){var n=parseInt(e.delay,10)||0;u.$observe("disabled",function(e){G.isDisabled=e}),u.$observe("required",function(e){G.isRequired=null!==e}),e.$watch("searchText",n?i.debounce(_,n):_),x(k),e.$watch("selectedItem",w),t.element(l).on("resize",p),e.$on("$destroy",E)}function E(){t.element(l).off("resize",p),Z.$.ul.remove()}function v(){Z={main:n[0],ul:n.find("ul")[0],input:n.find("input")[0],wrap:n.find("md-autocomplete-wrap")[0],root:document.body},Z.li=Z.ul.getElementsByTagName("li"),Z.snap=M(),Z.$=$(Z)}function M(){for(var e=n;e.length;e=e.parent())if(t.isDefined(e.attr("md-autocomplete-snap")))return e[0];return Z.wrap}function $(e){var n={};for(var o in e)n[o]=t.element(e[o]);return n}function A(e,t){!e&&t&&p(),e?i.enableScrolling():Z&&d(function(){i.disableScrollAround(Z.ul)},0,!1)}function C(){te=!0}function T(){te=!1,oe||(G.hidden=!0)}function y(){Z.input.focus()}function k(t,n){t&&(e.searchText=D(t)),e.itemChange&&t!==n&&e.itemChange(R(t))}function w(e,t){for(var n=0;n<ne.length;++n)ne[n](e,t)}function x(e){-1==ne.indexOf(e)&&ne.push(e)}function N(e){var t=ne.indexOf(e);-1!=t&&ne.splice(t,1)}function _(t,n){G.index=L(),t!==n&&t!==D(e.selectedItem)&&(e.selectedItem=null,e.textChange&&t!==n&&e.textChange(R(e.selectedItem)),j()?W():(G.loading=!1,G.matches=[],G.hidden=P(),Y()))}function H(){oe=!1,te||(G.hidden=!0)}function S(){oe=!0,t.isString(e.searchText)||(e.searchText=""),e.minLength>0||(G.hidden=P(),G.hidden||W())}function I(e){switch(e.keyCode){case a.KEY_CODE.DOWN_ARROW:if(G.loading)return;e.preventDefault(),G.index=Math.min(G.index+1,G.matches.length-1),z(),Y();break;case a.KEY_CODE.UP_ARROW:if(G.loading)return;e.preventDefault(),G.index=G.index<0?G.matches.length-1:Math.max(0,G.index-1),z(),Y();break;case a.KEY_CODE.TAB:case a.KEY_CODE.ENTER:if(G.hidden||G.loading||G.index<0||G.matches.length<1)return;e.preventDefault(),q(G.index);break;case a.KEY_CODE.ESCAPE:G.matches=[],G.hidden=!0,G.index=L()}}function O(){return t.isNumber(e.minLength)?e.minLength:1}function D(t){return t&&e.itemText?e.itemText(R(t)):t}function R(e){if(e){var t={};return G.itemName&&(t[G.itemName]=e),t}}function L(){return e.autoselect?0:-1}function P(){return j()?void 0:!0}function F(){return D(G.matches[G.index])}function j(){return t.isDefined(e.searchText)&&e.searchText.length>=O()}function B(e,t,n){Object.defineProperty(G,e,{get:function(){return n},set:function(e){var o=n;n=e,t(e,o)}})}function q(t){e.selectedItem=G.matches[t],G.hidden=!0,G.index=0,G.matches=[],d(function(){Z.$.input.controller("ngModel").$setViewValue(D(e.selectedItem)||e.searchText),G.hidden=!0})}function V(){e.searchText="",q(-1);var t=document.createEvent("CustomEvent");t.initCustomEvent("input",!0,!0,{value:e.searchText}),Z.input.dispatchEvent(t),Z.input.focus()}function U(n){function o(t){ee[i]=t,n===e.searchText&&(G.loading=!1,J=null,G.matches=t,G.hidden=P(),Y(),p())}var r=e.$parent.$eval(Q),i=n.toLowerCase();t.isArray(r)?o(r):r&&(G.loading=!0,r.success&&r.success(o),r.then&&r.then(o),r.error&&r.error(function(){G.loading=!1}))}function Y(){G.messages=[K(),F()]}function K(){if(re===G.matches.length)return"";switch(re=G.matches.length,G.matches.length){case 0:return"There are no matches available.";case 1:return"There is 1 match available.";default:return"There are "+G.matches.length+" matches available."}}function z(){if(Z.li[G.index]){var e=Z.li[G.index],t=e.offsetTop,n=t+e.offsetHeight,o=Z.ul.clientHeight;t<Z.ul.scrollTop?Z.ul.scrollTop=t:n>Z.ul.scrollTop+o&&(Z.ul.scrollTop=n-o)}}function W(){var t=e.searchText,n=t.toLowerCase();J&&J.cancel&&(J.cancel(),J=null),!e.noCache&&ee[n]?(G.matches=ee[n],Y()):U(t),oe&&(G.hidden=P())}var G=this,X=e.itemsExpr.split(/ in /i),Q=X[1],Z=null,J=null,ee={},te=!1,ne=[],oe=!1,re=0;return B("hidden",A,!0),G.scope=e,G.parent=e.$parent,G.itemName=X[0],G.matches=[],G.loading=!1,G.hidden=!0,G.index=null,G.messages=[],G.id=i.nextUid(),G.isDisabled=null,G.isRequired=null,G.keydown=I,G.blur=H,G.focus=S,G.clear=V,G.select=q,G.listEnter=C,G.listLeave=T,G.mouseUp=y,G.getCurrentDisplayValue=F,G.registerSelectedItemWatcher=x,G.unregisterSelectedItemWatcher=N,f()}t.module("material.components.autocomplete").controller("MdAutocompleteCtrl",e);var n=41,o=5.5*n,r=8;e.$inject=["$scope","$element","$mdUtil","$mdConstant","$timeout","$mdTheming","$window","$animate","$rootElement","$attrs"]}(),function(){function e(e,t){return{controller:"MdAutocompleteCtrl",controllerAs:"$mdAutocompleteCtrl",scope:{inputName:"@mdInputName",inputMinlength:"@mdInputMinlength",inputMaxlength:"@mdInputMaxlength",searchText:"=?mdSearchText",selectedItem:"=?mdSelectedItem",itemsExpr:"@mdItems",itemText:"&mdItemText",placeholder:"@placeholder",noCache:"=?mdNoCache",itemChange:"&?mdSelectedItemChange",textChange:"&?mdSearchTextChange",minLength:"=?mdMinLength",delay:"=?mdDelay",autofocus:"=?mdAutofocus",floatingLabel:"@?mdFloatingLabel",autoselect:"=?mdAutoselect",menuClass:"@?mdMenuClass"},template:function(e,t){function n(){var t=e.find("md-item-template").remove(),n=t.length?t.html():e.html();return t.length||e.empty(),n}function o(){var t=e.find("md-not-found").remove(),n=t.length?t.html():"";return n?'<li ng-if="!$mdAutocompleteCtrl.matches.length && !$mdAutocompleteCtrl.loading                         && !$mdAutocompleteCtrl.hidden"                         ng-hide="$mdAutocompleteCtrl.hidden"                         md-autocomplete-parent-scope>'+n+"</li>":""}function r(){return t.mdFloatingLabel?'            <md-input-container flex ng-if="floatingLabel">              <label>{{floatingLabel}}</label>              <input type="search"                  id="fl-input-{{$mdAutocompleteCtrl.id}}"                  name="{{inputName}}"                  autocomplete="off"                  ng-required="isRequired"                  ng-minlength="inputMinlength"                  ng-maxlength="inputMaxlength"                  ng-disabled="$mdAutocompleteCtrl.isDisabled"                  ng-model="$mdAutocompleteCtrl.scope.searchText"                  ng-keydown="$mdAutocompleteCtrl.keydown($event)"                  ng-blur="$mdAutocompleteCtrl.blur()"                  ng-focus="$mdAutocompleteCtrl.focus()"                  aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                  aria-label="{{floatingLabel}}"                  aria-autocomplete="list"                  aria-haspopup="true"                  aria-activedescendant=""                  aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>              <div md-autocomplete-parent-scope md-autocomplete-replace>'+d+"</div>            </md-input-container>":'            <input flex type="search"                id="input-{{$mdAutocompleteCtrl.id}}"                name="{{inputName}}"                ng-if="!floatingLabel"                autocomplete="off"                ng-required="isRequired"                ng-disabled="$mdAutocompleteCtrl.isDisabled"                ng-model="$mdAutocompleteCtrl.scope.searchText"                ng-keydown="$mdAutocompleteCtrl.keydown($event)"                ng-blur="$mdAutocompleteCtrl.blur()"                ng-focus="$mdAutocompleteCtrl.focus()"                placeholder="{{placeholder}}"                aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                aria-label="{{placeholder}}"                aria-autocomplete="list"                aria-haspopup="true"                aria-activedescendant=""                aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>            <button                type="button"                tabindex="-1"                ng-if="$mdAutocompleteCtrl.scope.searchText && !$mdAutocompleteCtrl.isDisabled"                ng-click="$mdAutocompleteCtrl.clear()">              <md-icon md-svg-icon="md-close"></md-icon>              <span class="md-visually-hidden">Clear</span>            </button>                '}var i=o(),a=n(),d=e.html();return'        <md-autocomplete-wrap            layout="row"            ng-class="{ \'md-whiteframe-z1\': !floatingLabel }"            role="listbox">          '+r()+'          <md-progress-linear              ng-if="$mdAutocompleteCtrl.loading"              md-mode="indeterminate"></md-progress-linear>          <ul role="presentation"              class="md-autocomplete-suggestions md-whiteframe-z1 {{menuClass || \'\'}}"              id="ul-{{$mdAutocompleteCtrl.id}}"              ng-hide="$mdAutocompleteCtrl.hidden"              ng-mouseenter="$mdAutocompleteCtrl.listEnter()"              ng-mouseleave="$mdAutocompleteCtrl.listLeave()"              ng-mouseup="$mdAutocompleteCtrl.mouseUp()">            <li ng-repeat="(index, item) in $mdAutocompleteCtrl.matches"                ng-class="{ selected: index === $mdAutocompleteCtrl.index }"                ng-click="$mdAutocompleteCtrl.select(index)"                md-autocomplete-list-item="$mdAutocompleteCtrl.itemName">                '+a+"            </li>            "+i+'          </ul>        </md-autocomplete-wrap>        <aria-status            class="md-visually-hidden"            role="status"            aria-live="assertive">          <p ng-repeat="message in $mdAutocompleteCtrl.messages" ng-if="message">{{message}}</p>        </aria-status>'}}}t.module("material.components.autocomplete").directive("mdAutocomplete",e),e.$inject=["$mdTheming","$mdUtil"]}(),function(){function e(e,n,o){function r(r){var i=o(n.html())(e),d=t.element("<div>").text(i).html(),c=n.attr("md-highlight-flags")||"",l=e.$watch(r,function(e){var t=a(e,c),o=d.replace(t,'<span class="highlight">$&</span>');n.html(o)});n.on("$destroy",function(){l()})}function i(e){return e?e.replace(/[\\\^\$\*\+\?\.\(\)\|\{\}\[\]]/g,"\\$&"):e}function a(e,t){var n="";return t.indexOf("^")>=1&&(n+="^"),n+=e,t.indexOf("$")>=1&&(n+="$"),new RegExp(i(n),t.replace(/[\$\^]/g,""))}return this.init=r,r()}t.module("material.components.autocomplete").controller("MdHighlightCtrl",e),e.$inject=["$scope","$element","$interpolate"];

}(),function(){function e(){return{terminal:!0,scope:!1,controller:"MdHighlightCtrl",link:function(e,t,n,o){o.init(n.mdHighlightText)}}}t.module("material.components.autocomplete").directive("mdHighlightText",e)}(),function(){function e(e,t){function n(n,o,r){var i=n.$parent.$mdAutocompleteCtrl,a=i.parent.$new(!1,i.parent),d=i.scope.$eval(r.mdAutocompleteListItem);a[d]=n.item,e(o.contents())(a),o.attr({role:"option",id:"item_"+t.nextUid()})}return{terminal:!0,link:n,scope:!1}}t.module("material.components.autocomplete").directive("mdAutocompleteListItem",e),e.$inject=["$compile","$mdUtil"]}(),function(){function e(e,t){function n(t,n,o){var r=t.$parent.$mdAutocompleteCtrl;e(n.contents())(r.parent),o.hasOwnProperty("mdAutocompleteReplace")&&(n.after(n.contents()),n.remove())}return{restrict:"A",terminal:!0,link:n,scope:!1}}t.module("material.components.autocomplete").directive("mdAutocompleteParentScope",e),e.$inject=["$compile","$mdUtil"]}(),function(){function e(e){function o(o,r){return o.append(n),function(n,o,r,i){o.addClass("md-chip"),e(o),i&&t.element(o[0].querySelector(".md-chip-content")).on("blur",function(){i.selectedChip=-1})}}return{restrict:"E",require:"^?mdChips",compile:o}}t.module("material.components.chips").directive("mdChip",e);var n='    <span ng-if="!$mdChipsCtrl.readonly" class="md-visually-hidden">      {{$mdChipsCtrl.deleteHint}}    </span>';e.$inject=["$mdTheming"]}(),function(){function e(e){function t(t,n,o,r){n.on("click",function(e){t.$apply(function(){r.removeChip(t.$$replacedScope.$index)})}),e(function(){n.attr({tabindex:-1,ariaHidden:!0}),n.find("button").attr("tabindex","-1")})}return{restrict:"A",require:"^mdChips",scope:!1,link:t}}t.module("material.components.chips").directive("mdChipRemove",e),e.$inject=["$timeout"]}(),function(){function e(e,t){function n(t,n,o){var r=t.$parent.$mdChipsCtrl,i=r.parent.$new(!1,r.parent);i.$$replacedScope=t,i.$chip=t.$chip,i.$mdChipsCtrl=r,n.html(r.$scope.$eval(o.mdChipTransclude)),e(n.contents())(i)}return{restrict:"EA",terminal:!0,link:n,scope:!1}}t.module("material.components.chips").directive("mdChipTransclude",e),e.$inject=["$compile","$mdUtil"]}(),function(){function e(e,t,n,o,r){this.$timeout=r,this.$mdConstant=t,this.$scope=e,this.parent=e.$parent,this.$log=n,this.$element=o,this.ngModelCtrl=null,this.userInputNgModelCtrl=null,this.userInputElement=null,this.items=[],this.selectedChip=-1,this.deleteHint="Press delete to remove this chip.",this.deleteButtonLabel="Remove",this.chipBuffer="",this.useMdOnAppend=!1}t.module("material.components.chips").controller("MdChipsCtrl",e),e.$inject=["$scope","$mdConstant","$log","$element","$timeout"],e.prototype.inputKeydown=function(e){var t=this.getChipBuffer();switch(e.keyCode){case this.$mdConstant.KEY_CODE.ENTER:if(this.$scope.requireMatch||!t)break;e.preventDefault(),this.appendChip(t),this.resetChipBuffer();break;case this.$mdConstant.KEY_CODE.BACKSPACE:if(t)break;e.stopPropagation(),this.items.length&&this.selectAndFocusChipSafe(this.items.length-1)}},e.prototype.chipKeydown=function(e){if(!this.getChipBuffer())switch(e.keyCode){case this.$mdConstant.KEY_CODE.BACKSPACE:case this.$mdConstant.KEY_CODE.DELETE:if(this.selectedChip<0)return;e.preventDefault(),this.removeAndSelectAdjacentChip(this.selectedChip);break;case this.$mdConstant.KEY_CODE.LEFT_ARROW:e.preventDefault(),this.selectedChip<0&&(this.selectedChip=this.items.length),this.items.length&&this.selectAndFocusChipSafe(this.selectedChip-1);break;case this.$mdConstant.KEY_CODE.RIGHT_ARROW:e.preventDefault(),this.selectAndFocusChipSafe(this.selectedChip+1);break;case this.$mdConstant.KEY_CODE.ESCAPE:case this.$mdConstant.KEY_CODE.TAB:if(this.selectedChip<0)return;e.preventDefault(),this.onFocus()}},e.prototype.getPlaceholder=function(){var e=this.items.length&&(""==this.secondaryPlaceholder||this.secondaryPlaceholder);return e?this.placeholder:this.secondaryPlaceholder},e.prototype.removeAndSelectAdjacentChip=function(e){var n=this.getAdjacentChipIndex(e);this.removeChip(e),this.$timeout(t.bind(this,function(){this.selectAndFocusChipSafe(n)}))},e.prototype.resetSelectedChip=function(){this.selectedChip=-1},e.prototype.getAdjacentChipIndex=function(e){var t=this.items.length-1;return 0==t?-1:e==t?e-1:e},e.prototype.appendChip=function(e){this.items.indexOf(e)+1||(this.useMdOnAppend&&this.mdOnAppend&&(e=this.mdOnAppend({$chip:e})),this.items.push(e))},e.prototype.useMdOnAppendExpression=function(){this.useMdOnAppend=!0},e.prototype.getChipBuffer=function(){return this.userInputElement?this.userInputNgModelCtrl?this.userInputNgModelCtrl.$viewValue:this.userInputElement[0].value:this.chipBuffer},e.prototype.resetChipBuffer=function(){this.userInputElement?this.userInputNgModelCtrl?(this.userInputNgModelCtrl.$setViewValue(""),this.userInputNgModelCtrl.$render()):this.userInputElement[0].value="":this.chipBuffer=""},e.prototype.removeChip=function(e){this.items.splice(e,1)},e.prototype.removeChipAndFocusInput=function(e){this.removeChip(e),this.onFocus()},e.prototype.selectAndFocusChipSafe=function(e){return this.items.length?e===this.items.length?this.onFocus():(e=Math.max(e,0),e=Math.min(e,this.items.length-1),this.selectChip(e),void this.focusChip(e)):(this.selectChip(-1),void this.onFocus())},e.prototype.selectChip=function(e){e>=-1&&e<=this.items.length?this.selectedChip=e:this.$log.warn("Selected Chip index out of bounds; ignoring.")},e.prototype.selectAndFocusChip=function(e){this.selectChip(e),-1!=e&&this.focusChip(e)},e.prototype.focusChip=function(e){this.$element[0].querySelector('md-chip[index="'+e+'"] .md-chip-content').focus()},e.prototype.configureNgModel=function(e){this.ngModelCtrl=e;var t=this;e.$render=function(){t.items=t.ngModelCtrl.$viewValue}},e.prototype.onFocus=function(){var e=this.$element[0].querySelector("input");e&&e.focus(),this.resetSelectedChip()},e.prototype.onInputFocus=function(){this.inputHasFocus=!0,this.resetSelectedChip()},e.prototype.onInputBlur=function(){this.inputHasFocus=!1},e.prototype.configureUserInput=function(e){this.userInputElement=e;var n=e.controller("ngModel");n!=this.ngModelCtrl&&(this.userInputNgModelCtrl=n);var o=this.$scope,r=this;e.attr({tabindex:0}).on("keydown",function(e){o.$apply(t.bind(r,function(){r.inputKeydown(e)}))}).on("focus",t.bind(r,r.onInputFocus)).on("blur",t.bind(r,r.onInputBlur))},e.prototype.configureAutocomplete=function(e){e.registerSelectedItemWatcher(t.bind(this,function(e){e&&(this.appendChip(e),this.resetChipBuffer())})),this.$element.find("input").on("focus",t.bind(this,this.onInputFocus)).on("blur",t.bind(this,this.onInputBlur))},e.prototype.hasFocus=function(){return this.inputHasFocus||this.selectedChip>=0}}(),function(){function e(e,t,a,d,c){function l(n,l){function m(e){if(l.ngModel){var t=s[0].querySelector(e);return t&&t.outerHTML}}var s=l.$mdUserTemplate;l.$mdUserTemplate=null;var u=m("md-chips>*[md-chip-remove]")||i,f=m("md-chips>md-chip-template")||r,p=m("md-chips>md-autocomplete")||m("md-chips>input")||o,h=s.find("md-chip");return s[0].querySelector("md-chip-template>*[md-chip-remove]")&&d.warn("invalid placement of md-chip-remove within md-chip-template."),function(n,r,i,d){t.initOptionalProperties(n,l),e(r);var m=d[0];if(m.chipContentsTemplate=f,m.chipRemoveTemplate=u,m.chipInputTemplate=p,r.attr({ariaHidden:!0,tabindex:-1}).on("focus",function(){m.onFocus()}),l.ngModel&&(m.configureNgModel(r.controller("ngModel")),i.mdOnAppend&&m.useMdOnAppendExpression(),p!=o&&c(function(){0===p.indexOf("<md-autocomplete")&&m.configureAutocomplete(r.find("md-autocomplete").controller("mdAutocomplete")),m.configureUserInput(r.find("input"))})),h.length>0){var s=a(h)(n.$parent);c(function(){r.find("md-chips-wrap").prepend(s)})}}}return{template:function(e,t){t.$mdUserTemplate=e.clone();return n},require:["mdChips"],restrict:"E",controller:"MdChipsCtrl",controllerAs:"$mdChipsCtrl",bindToController:!0,compile:l,scope:{readonly:"=readonly",placeholder:"@",secondaryPlaceholder:"@",mdOnAppend:"&",deleteHint:"@",deleteButtonLabel:"@",requireMatch:"=?mdRequireMatch"}}}t.module("material.components.chips").directive("mdChips",e);var n='      <md-chips-wrap          ng-if="!$mdChipsCtrl.readonly || $mdChipsCtrl.items.length > 0"          ng-keydown="$mdChipsCtrl.chipKeydown($event)"          ng-class="{ \'md-focused\': $mdChipsCtrl.hasFocus() }"          class="md-chips">        <md-chip ng-repeat="$chip in $mdChipsCtrl.items"            index="{{$index}}"            ng-class="{\'md-focused\': $mdChipsCtrl.selectedChip == $index}">          <div class="md-chip-content"              tabindex="-1"              aria-hidden="true"              ng-focus="!$mdChipsCtrl.readonly && $mdChipsCtrl.selectChip($index)"              md-chip-transclude="$mdChipsCtrl.chipContentsTemplate"></div>          <div class="md-chip-remove-container"              md-chip-transclude="$mdChipsCtrl.chipRemoveTemplate"></div>        </md-chip>        <div ng-if="!$mdChipsCtrl.readonly && $mdChipsCtrl.ngModelCtrl"            class="md-chip-input-container"            md-chip-transclude="$mdChipsCtrl.chipInputTemplate"></div>        </div>      </md-chips-wrap>',o='        <input            tabindex="0"            placeholder="{{$mdChipsCtrl.getPlaceholder()}}"            aria-label="{{$mdChipsCtrl.getPlaceholder()}}"            ng-model="$mdChipsCtrl.chipBuffer"            ng-focus="$mdChipsCtrl.onInputFocus()"            ng-blur="$mdChipsCtrl.onInputBlur()"            ng-keydown="$mdChipsCtrl.inputKeydown($event)">',r="      <span>{{$chip}}</span>",i='      <button          class="md-chip-remove"          ng-if="!$mdChipsCtrl.readonly"          ng-click="$mdChipsCtrl.removeChipAndFocusInput($$replacedScope.$index)"          type="button"          aria-hidden="true"          tabindex="-1">        <md-icon md-svg-icon="md-close"></md-icon>        <span class="md-visually-hidden">          {{$mdChipsCtrl.deleteButtonLabel}}        </span>      </button>';e.$inject=["$mdTheming","$mdUtil","$compile","$log","$timeout"]}(),function(){function e(){this.selectedItem=null,this.searchText=""}t.module("material.components.chips").controller("MdContactChipsCtrl",e),e.prototype.queryContact=function(e){var n=this.contactQuery({$query:e});return this.filterSelected?n.filter(t.bind(this,this.filterSelectedContacts)):n},e.prototype.filterSelectedContacts=function(e){return-1==this.contacts.indexOf(e)}}(),function(){function e(e,t){function o(n,o){return function(n,r,i,a){t.initOptionalProperties(n,o),e(r),r.attr("tabindex","-1")}}return{template:function(e,t){return n},restrict:"E",controller:"MdContactChipsCtrl",controllerAs:"$mdContactChipsCtrl",bindToController:!0,compile:o,scope:{contactQuery:"&mdContacts",placeholder:"@",secondaryPlaceholder:"@",contactName:"@mdContactName",contactImage:"@mdContactImage",contactEmail:"@mdContactEmail",contacts:"=ngModel",requireMatch:"=?mdRequireMatch"}}}t.module("material.components.chips").directive("mdContactChips",e);var n='      <md-chips class="md-contact-chips"          ng-model="$mdContactChipsCtrl.contacts"          md-require-match="$mdContactChipsCtrl.requireMatch"          md-autocomplete-snap>          <md-autocomplete              md-menu-class="md-contact-chips-suggestions"              md-selected-item="$mdContactChipsCtrl.selectedItem"              md-search-text="$mdContactChipsCtrl.searchText"              md-items="item in $mdContactChipsCtrl.queryContact($mdContactChipsCtrl.searchText)"              md-item-text="$mdContactChipsCtrl.mdContactName"              md-no-cache="true"              md-autoselect              placeholder="{{$mdContactChipsCtrl.contacts.length == 0 ?                  $mdContactChipsCtrl.placeholder : $mdContactChipsCtrl.secondaryPlaceholder}}">            <div class="md-contact-suggestion">              <img                   ng-src="{{item[$mdContactChipsCtrl.contactImage]}}"                  alt="{{item[$mdContactChipsCtrl.contactName]}}" />              <span class="md-contact-name" md-highlight-text="$mdContactChipsCtrl.searchText">                {{item[$mdContactChipsCtrl.contactName]}}              </span>              <span class="md-contact-email" >{{item[$mdContactChipsCtrl.contactEmail]}}</span>            </div>          </md-autocomplete>          <md-chip-template>            <div class="md-contact-avatar">              <img                   ng-src="{{$chip[$mdContactChipsCtrl.contactImage]}}"                  alt="{{$chip[$mdContactChipsCtrl.contactName]}}" />            </div>            <div class="md-contact-name">              {{$chip[$mdContactChipsCtrl.contactName]}}            </div>          </md-chip-template>      </md-chips>';e.$inject=["$mdTheming","$mdUtil"]}(),function(){function e(){function e(e,n,o,r){if(r){var i=n.parent()[0].getElementsByTagName("md-tab"),a=Array.prototype.indexOf.call(i,n[0]),d=n.find("md-tab-body").eq(0).remove(),c=n.find("md-tab-label").eq(0).remove(),l=r.insertTab({scope:e,parent:e.$parent,index:a,element:n,template:d.html(),label:c.html()},a);e.select=e.select||t.noop,e.deselect=e.deselect||t.noop,e.$watch("active",function(e){e&&r.select(l.getIndex())}),e.$watch("disabled",function(){r.refreshIndex()}),e.$watch(function(){return Array.prototype.indexOf.call(i,n[0])},function(e){l.index=e,r.updateTabOrder()}),e.$on("$destroy",function(){r.removeTab(l)})}}return{require:"^?mdTabs",terminal:!0,template:function(e,t){function n(){function n(){return t.label}function o(){var t=e.find("md-tab-label").eq(0);return t.length?t.remove().html():void 0}function r(){var t=e.html();return e.empty(),t}return o()||n()||r()}function o(){var n=e.find("md-tab-body").eq(0),o=n.length?n.html():t.label?e.html():"";return n.length?n.remove():t.label&&e.empty(),o}var r=n(),i=o();return"<md-tab-label>"+r+"</md-tab-label><md-tab-body>"+i+"</md-tab-body>"},scope:{active:"=?mdActive",disabled:"=?ngDisabled",select:"&?mdOnSelect",deselect:"&?mdOnDeselect"},link:e}}t.module("material.components.tabs").directive("mdTab",e)}(),function(){function e(){return{require:"^?mdTabs",link:function(e,t,n,o){o&&o.attachRipple(e,t)}}}t.module("material.components.tabs").directive("mdTabItem",e)}(),function(){function e(){return{terminal:!0}}t.module("material.components.tabs").directive("mdTabLabel",e)}(),function(){function e(e){return{restrict:"A",compile:function(t,n){var o=e(n.mdTabScroll,null,!0);return function(e,t){t.on("mousewheel",function(t){e.$apply(function(){o(e,{$event:t})})})}}}}t.module("material.components.tabs").directive("mdTabScroll",e),e.$inject=["$parse"]}(),function(){function e(e,n,o,r,i,a,d,c,l,m,s){function u(){e.selectedIndex=e.selectedIndex||0,f(),h(),p(),s(n),r(function(){K(),q(),P(),Q.tabs[e.selectedIndex]&&Q.tabs[e.selectedIndex].scope.select(),ne=!0})}function f(){var e=l.$mdTabsTemplate,n=t.element(J.data);n.html(e),m(n.contents())(Q.parent),delete l.$mdTabsTemplate}function p(){t.element(o).on("resize",w),t.element(J.paging).on("DOMSubtreeModified",Q.updateInkBarStyles),t.element(J.paging).on("DOMSubtreeModified",P)}function h(){d.initOptionalProperties(e,l),l.$observe("mdNoBar",function(n){e.noInkBar=t.isDefined(n)}),e.$watch("selectedIndex",M),e.$watch("dynamicHeight",function(e){e?n.addClass("md-dynamic-height"):n.removeClass("md-dynamic-height")}),e.$on("$destroy",b)}function b(){te=!0,t.element(o).off("resize",w),t.element(J.paging).off("DOMSubtreeModified",Q.updateInkBarStyles),t.element(J.paging).off("DOMSubtreeModified",P)}function g(e){n[e?"removeClass":"addClass"]("md-no-tab-content")}function E(n){var o=Q.shouldCenterTabs?"":"-"+n+"px";t.element(J.paging).css(i.CSS.TRANSFORM,"translate3d("+o+", 0, 0)"),e.$broadcast("$mdTabsPaginationChanged")}function v(e,t){e!==t&&J.tabs[e]&&(q(),B())}function M(t,n){t!==n&&(e.selectedIndex=R(t),Q.lastSelectedIndex=n,Q.updateInkBarStyles(),K(),q(t),e.$broadcast("$mdTabsChanged"),Q.tabs[n]&&Q.tabs[n].scope.deselect(),Q.tabs[t]&&Q.tabs[t].scope.select())}function $(){$.watcher||($.watcher=e.$watch(function(){r(function(){$.watcher&&n.prop("offsetParent")&&($.watcher(),$.watcher=null,w())},0,!1)}))}function A(t){switch(t.keyCode){case i.KEY_CODE.LEFT_ARROW:t.preventDefault(),j(-1,!0);break;case i.KEY_CODE.RIGHT_ARROW:t.preventDefault(),j(1,!0);break;case i.KEY_CODE.SPACE:case i.KEY_CODE.ENTER:t.preventDefault(),Z||(e.selectedIndex=Q.focusIndex)}Q.lastClick=!1}function C(t){Z||(Q.focusIndex=e.selectedIndex=t),Q.lastClick=!0,Q.tabs[t].element.triggerHandler("click")}function T(e){Q.shouldPaginate&&(e.preventDefault(),Q.offsetLeft=G(Q.offsetLeft-e.wheelDelta))}function y(){var e,t,n=J.canvas.clientWidth,o=n+Q.offsetLeft;for(e=0;e<J.tabs.length&&(t=J.tabs[e],!(t.offsetLeft+t.offsetWidth>o));e++);Q.offsetLeft=G(t.offsetLeft)}function k(){var e,t;for(e=0;e<J.tabs.length&&(t=J.tabs[e],!(t.offsetLeft+t.offsetWidth>=Q.offsetLeft));e++);Q.offsetLeft=G(t.offsetLeft+t.offsetWidth-J.canvas.clientWidth)}function w(){e.$apply(function(){Q.lastSelectedIndex=e.selectedIndex,Q.offsetLeft=G(Q.offsetLeft),r(Q.updateInkBarStyles,0,!1),r(P)})}function x(t){var n=e.selectedIndex,o=Q.tabs.splice(t.getIndex(),1)[0];Y(),e.selectedIndex!==n||te||(o.scope.deselect(),Q.tabs[e.selectedIndex]&&Q.tabs[e.selectedIndex].scope.select()),r(function(){P(),Q.offsetLeft=G(Q.offsetLeft)})}function N(n,o){var i={getIndex:function(){return Q.tabs.indexOf(a)},isActive:function(){return this.getIndex()===e.selectedIndex},isLeft:function(){return this.getIndex()<e.selectedIndex},isRight:function(){return this.getIndex()>e.selectedIndex},shouldRender:function(){return!e.noDisconnect||this.isActive()},hasFocus:function(){return!Q.lastClick&&Q.hasFocus&&this.getIndex()===Q.focusIndex},id:d.nextUid()},a=t.extend(i,n);return t.isDefined(o)?Q.tabs.splice(o,0,a):Q.tabs.push(a),V(),U(),ne&&e.autoselect&&r(function(){C(Q.tabs.indexOf(a))}),r(P),a}function _(){var e={};return e.wrapper=n[0].getElementsByTagName("md-tabs-wrapper")[0],e.data=n[0].getElementsByTagName("md-tab-data")[0],e.canvas=e.wrapper.getElementsByTagName("md-tabs-canvas")[0],e.paging=e.canvas.getElementsByTagName("md-pagination-wrapper")[0],e.tabs=e.paging.getElementsByTagName("md-tab-item"),e.dummies=e.canvas.getElementsByTagName("md-dummy-tab"),e.inkBar=e.paging.getElementsByTagName("md-ink-bar")[0],e.contentsWrapper=n[0].getElementsByTagName("md-tabs-content-wrapper")[0],e.contents=e.contentsWrapper.getElementsByTagName("md-tab-content"),e}function H(){return Q.offsetLeft>0}function S(){var e=J.tabs[J.tabs.length-1];return e&&e.offsetLeft+e.offsetWidth>J.canvas.clientWidth+Q.offsetLeft}function I(){switch(e.stretchTabs){case"always":return!0;case"never":return!1;default:return!Q.shouldPaginate&&o.matchMedia("(max-width: 600px)").matches}}function O(){return e.centerTabs&&!Q.shouldPaginate}function D(){if(e.noPagination||!ne)return!1;var o=n.prop("clientWidth");return t.forEach(J.dummies,function(e){o-=e.offsetWidth}),0>o}function R(e){var t,n,o=Math.max(Q.tabs.length-e,e);for(t=0;o>=t;t++){if(n=Q.tabs[e+t],n&&n.scope.disabled!==!0)return n.getIndex();if(n=Q.tabs[e-t],n&&n.scope.disabled!==!0)return n.getIndex()}return e}function L(e,t,n){Object.defineProperty(Q,e,{get:function(){return n},set:function(e){var o=n;n=e,t(e,o)}})}function P(){Q.shouldPaginate=D(),Q.shouldCenterTabs=O(),r(function(){q(e.selectedIndex)})}function F(){var t=Q.tabs[e.selectedIndex],n=Q.tabs[Q.focusIndex];Q.tabs=Q.tabs.sort(function(e,t){return e.index-t.index}),e.selectedIndex=Q.tabs.indexOf(t),Q.focusIndex=Q.tabs.indexOf(n)}function j(e){var t,n=Q.focusIndex;for(t=n+e;Q.tabs[t]&&Q.tabs[t].scope.disabled;t+=e);Q.tabs[t]&&(Q.focusIndex=t)}function B(){J.dummies[Q.focusIndex].focus()}function q(e){if(!Q.shouldCenterTabs){null==e&&(e=Q.focusIndex);var t=J.tabs[e],n=t.offsetLeft,o=t.offsetWidth+n;Q.offsetLeft=Math.max(Q.offsetLeft,G(o-J.canvas.clientWidth)),Q.offsetLeft=Math.min(Q.offsetLeft,G(n))}}function V(){ee.forEach(function(e){r(e)}),ee=[]}function U(){var e=!1;t.forEach(Q.tabs,function(t){t.template&&(e=!0)}),Q.hasContent=e}function Y(){e.selectedIndex=R(e.selectedIndex),Q.focusIndex=R(Q.focusIndex)}function K(){if(!e.dynamicHeight)return n.css("height","");if(!Q.tabs.length)return ee.push(K);var t=J.contents[e.selectedIndex],o=t?t.offsetHeight:0,r=J.wrapper.offsetHeight,i=o+r,a=n.prop("clientHeight");a!==i&&(Z=!0,c.animate(n,{height:a+"px"},{height:i+"px"}).then(function(){n.css("height",""),Z=!1}))}function z(){if(J.tabs[e.selectedIndex]){if(!Q.tabs.length)return ee.push(Q.updateInkBarStyles);if(!n.prop("offsetParent"))return $();var o=e.selectedIndex,r=J.paging.offsetWidth,i=J.tabs[o],a=i.offsetLeft,d=r-a-i.offsetWidth;W(),t.element(J.inkBar).css({left:a+"px",right:d+"px"})}}function W(){var n=e.selectedIndex,o=Q.lastSelectedIndex,r=t.element(J.inkBar);t.isNumber(o)&&(o>n?r.addClass("md-left").removeClass("md-right"):n>o&&r.addClass("md-right").removeClass("md-left"))}function G(e){if(!J.tabs.length||!Q.shouldPaginate)return 0;var t=J.tabs[J.tabs.length-1],n=t.offsetLeft+t.offsetWidth;return e=Math.max(0,e),e=Math.min(n-J.canvas.clientWidth,e)}function X(e,n){var o={colorElement:t.element(J.inkBar)};a.attach(e,n,o)}var Q=this,Z=!1,J=_(),ee=[],te=!1,ne=!1;L("focusIndex",v,e.selectedIndex||0),L("offsetLeft",E,0),L("hasContent",g,!1),Q.scope=e,Q.parent=e.$parent,Q.tabs=[],Q.lastSelectedIndex=null,Q.hasFocus=!1,Q.lastClick=!0,Q.shouldPaginate=!1,Q.shouldCenterTabs=O(),Q.redirectFocus=B,Q.attachRipple=X,Q.shouldStretchTabs=I,Q.insertTab=N,Q.removeTab=x,Q.select=C,Q.scroll=T,Q.nextPage=y,Q.previousPage=k,Q.keydown=A,Q.canPageForward=S,Q.canPageBack=H,Q.refreshIndex=Y,Q.incrementSelectedIndex=j,Q.updateInkBarStyles=d.debounce(z,100),Q.updateTabOrder=d.debounce(F,100),u()}t.module("material.components.tabs").controller("MdTabsController",e),e.$inject=["$scope","$element","$window","$timeout","$mdConstant","$mdTabInkRipple","$mdUtil","$animate","$attrs","$compile","$mdTheming"]}(),function(){function e(e,t,n){return{scope:{noPagination:"=?mdNoPagination",dynamicHeight:"=?mdDynamicHeight",centerTabs:"=?mdCenterTabs",selectedIndex:"=?mdSelected",stretchTabs:"@?mdStretchTabs",swipeContent:"=?mdSwipeContent",noDisconnect:"=?mdNoDisconnect",autoselect:"=?mdAutoselect"},template:function(e,t){return t.$mdTabsTemplate=e.html(),'        <md-tabs-wrapper ng-class="{ \'md-stretch-tabs\': $mdTabsCtrl.shouldStretchTabs() }">          <md-tab-data></md-tab-data>          <md-prev-button              tabindex="-1"              role="button"              aria-label="Previous Page"              aria-disabled="{{!$mdTabsCtrl.canPageBack()}}"              ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageBack() }"              ng-if="$mdTabsCtrl.shouldPaginate"              ng-click="$mdTabsCtrl.previousPage()">            <md-icon md-svg-icon="md-tabs-arrow"></md-icon>          </md-prev-button>          <md-next-button              tabindex="-1"              role="button"              aria-label="Next Page"              aria-disabled="{{!$mdTabsCtrl.canPageForward()}}"              ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageForward() }"              ng-if="$mdTabsCtrl.shouldPaginate"              ng-click="$mdTabsCtrl.nextPage()">            <md-icon md-svg-icon="md-tabs-arrow"></md-icon>          </md-next-button>          <md-tabs-canvas              tabindex="0"              aria-activedescendant="tab-item-{{$mdTabsCtrl.tabs[$mdTabsCtrl.focusIndex].id}}"              ng-focus="$mdTabsCtrl.redirectFocus()"              ng-class="{                  \'md-paginated\': $mdTabsCtrl.shouldPaginate,                  \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs              }"              ng-keydown="$mdTabsCtrl.keydown($event)"              role="tablist">            <md-pagination-wrapper                ng-class="{ \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }"                md-tab-scroll="$mdTabsCtrl.scroll($event)">              <md-tab-item                  tabindex="-1"                  class="md-tab"                  style="max-width: {{ tabWidth ? tabWidth + \'px\' : \'none\' }}"                  ng-repeat="tab in $mdTabsCtrl.tabs"                  role="tab"                  aria-controls="tab-content-{{tab.id}}"                  aria-selected="{{tab.isActive()}}"                  aria-disabled="{{tab.scope.disabled || \'false\'}}"                  ng-click="$mdTabsCtrl.select(tab.getIndex())"                  ng-class="{                      \'md-active\':    tab.isActive(),                      \'md-focused\':   tab.hasFocus(),                      \'md-disabled\':  tab.scope.disabled                  }"                  ng-disabled="tab.scope.disabled"                  md-swipe-left="$mdTabsCtrl.nextPage()"                  md-swipe-right="$mdTabsCtrl.previousPage()"                  md-template="tab.label"                  md-scope="tab.parent"></md-tab-item>              <md-ink-bar ng-hide="noInkBar"></md-ink-bar>            </md-pagination-wrapper>            <div class="md-visually-hidden md-dummy-wrapper">              <md-dummy-tab                  class="md-tab"                  tabindex="-1"                  id="tab-item-{{tab.id}}"                  role="tab"                  aria-controls="tab-content-{{tab.id}}"                  aria-selected="{{tab.isActive()}}"                  aria-disabled="{{tab.scope.disabled || \'false\'}}"                  ng-focus="$mdTabsCtrl.hasFocus = true"                  ng-blur="$mdTabsCtrl.hasFocus = false"                  ng-repeat="tab in $mdTabsCtrl.tabs"                  md-template="tab.label"                  md-scope="tab.parent"></md-dummy-tab>            </div>          </md-tabs-canvas>        </md-tabs-wrapper>        <md-tabs-content-wrapper ng-show="$mdTabsCtrl.hasContent">          <md-tab-content              id="tab-content-{{tab.id}}"              role="tabpanel"              aria-labelledby="tab-item-{{tab.id}}"              md-swipe-left="swipeContent && $mdTabsCtrl.incrementSelectedIndex(1)"              md-swipe-right="swipeContent && $mdTabsCtrl.incrementSelectedIndex(-1)"              ng-if="$mdTabsCtrl.hasContent"              ng-repeat="(index, tab) in $mdTabsCtrl.tabs"              md-connected-if="tab.isActive()"              ng-class="{                \'md-no-transition\': $mdTabsCtrl.lastSelectedIndex == null,                \'md-active\':        tab.isActive(),                \'md-left\':          tab.isLeft(),                \'md-right\':         tab.isRight(),                \'md-no-scroll\':     dynamicHeight              }">            <div                md-template="tab.template"                md-scope="tab.parent"                ng-if="tab.shouldRender()"></div>          </md-tab-content>        </md-tabs-content-wrapper>      '},controller:"MdTabsController",controllerAs:"$mdTabsCtrl"}}t.module("material.components.tabs").directive("mdTabs",e),e.$inject=["$mdTheming","$mdUtil","$compile"]}(),function(){function e(e,t,n){function o(o,r,i,a){function d(){o.$watch("connected",function(e){e===!1?c():l()}),o.$on("$destroy",l)}function c(){a.scope.noDisconnect||t.disconnectScope(m)}function l(){a.scope.noDisconnect||t.reconnectScope(m)}if(a){var m=o.compileScope.$new();return r.html(o.template),e(r.contents())(m),n(d)}}return{restrict:"A",link:o,scope:{template:"=mdTemplate",compileScope:"=mdScope",connected:"=?mdConnectedIf"},require:"^?mdTabs"}}t.module("material.components.tabs").directive("mdTemplate",e),e.$inject=["$compile","$mdUtil","$timeout"]}(),function(){t.module("material.core").constant("$MD_THEME_CSS","/* mixin definition ; sets LTR and RTL within the same style call */md-autocomplete.md-THEME_NAME-theme {  background: '{{background-50}}'; }  md-autocomplete.md-THEME_NAME-theme[disabled] {    background: '{{background-100}}'; }  md-autocomplete.md-THEME_NAME-theme button md-icon path {    fill: '{{background-600}}'; }  md-autocomplete.md-THEME_NAME-theme button:after {    background: '{{background-600-0.3}}'; }.md-autocomplete-suggestions.md-THEME_NAME-theme {  background: '{{background-50}}'; }  .md-autocomplete-suggestions.md-THEME_NAME-theme li {    color: '{{background-900}}'; }    .md-autocomplete-suggestions.md-THEME_NAME-theme li .highlight {      color: '{{background-600}}'; }    .md-autocomplete-suggestions.md-THEME_NAME-theme li:hover, .md-autocomplete-suggestions.md-THEME_NAME-theme li.selected {      background: '{{background-200}}'; }md-backdrop.md-opaque.md-THEME_NAME-theme {  background-color: '{{foreground-4-0.5}}'; }a.md-button.md-THEME_NAME-theme, .md-button.md-THEME_NAME-theme {  border-radius: 3px; }  a.md-button.md-THEME_NAME-theme:not([disabled]):hover, .md-button.md-THEME_NAME-theme:not([disabled]):hover {    background-color: '{{background-500-0.2}}'; }  a.md-button.md-THEME_NAME-theme:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme:not([disabled]).md-focused {    background-color: '{{background-500-0.2}}'; }  a.md-button.md-THEME_NAME-theme:not([disabled]).md-icon-button:hover, .md-button.md-THEME_NAME-theme:not([disabled]).md-icon-button:hover {    background-color: transparent; }  a.md-button.md-THEME_NAME-theme.md-fab, .md-button.md-THEME_NAME-theme.md-fab {    border-radius: 50%;    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-fab md-icon, .md-button.md-THEME_NAME-theme.md-fab md-icon {      color: '{{accent-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {      background-color: '{{accent-color}}'; }    a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {      background-color: '{{accent-A700}}'; }  a.md-button.md-THEME_NAME-theme.md-icon-button, .md-button.md-THEME_NAME-theme.md-icon-button {    border-radius: 50%; }  a.md-button.md-THEME_NAME-theme.md-primary, .md-button.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }    a.md-button.md-THEME_NAME-theme.md-primary.md-raised, a.md-button.md-THEME_NAME-theme.md-primary.md-fab, .md-button.md-THEME_NAME-theme.md-primary.md-raised, .md-button.md-THEME_NAME-theme.md-primary.md-fab {      color: '{{primary-contrast}}';      background-color: '{{primary-color}}'; }      a.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]) md-icon, a.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]) md-icon {        color: '{{primary-contrast}}'; }      a.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover, a.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover {        background-color: '{{primary-color}}'; }      a.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]).md-focused, a.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]).md-focused {        background-color: '{{primary-600}}'; }    a.md-button.md-THEME_NAME-theme.md-primary:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-primary:not([disabled]) md-icon {      color: '{{primary-color}}'; }  a.md-button.md-THEME_NAME-theme.md-fab, .md-button.md-THEME_NAME-theme.md-fab {    border-radius: 50%;    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]) .md-icon, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]) .md-icon {      color: '{{accent-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {      background-color: '{{accent-color}}'; }    a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {      background-color: '{{accent-A700}}'; }  a.md-button.md-THEME_NAME-theme.md-raised, .md-button.md-THEME_NAME-theme.md-raised {    color: '{{background-contrast}}';    background-color: '{{background-50}}'; }    a.md-button.md-THEME_NAME-theme.md-raised:not([disabled]) .md-icon, .md-button.md-THEME_NAME-theme.md-raised:not([disabled]) .md-icon {      color: '{{background-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover {      background-color: '{{background-50}}'; }    a.md-button.md-THEME_NAME-theme.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-raised:not([disabled]).md-focused {      background-color: '{{background-200}}'; }  a.md-button.md-THEME_NAME-theme.md-warn, .md-button.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }    a.md-button.md-THEME_NAME-theme.md-warn.md-raised, a.md-button.md-THEME_NAME-theme.md-warn.md-fab, .md-button.md-THEME_NAME-theme.md-warn.md-raised, .md-button.md-THEME_NAME-theme.md-warn.md-fab {      color: '{{warn-contrast}}';      background-color: '{{warn-color}}'; }      a.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]) md-icon, a.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]) md-icon {        color: '{{warn-contrast}}'; }      a.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover, a.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover {        background-color: '{{warn-color}}'; }      a.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]).md-focused, a.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]).md-focused {        background-color: '{{warn-700}}'; }    a.md-button.md-THEME_NAME-theme.md-warn:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-warn:not([disabled]) md-icon {      color: '{{warn-color}}'; }  a.md-button.md-THEME_NAME-theme.md-accent, .md-button.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }    a.md-button.md-THEME_NAME-theme.md-accent.md-raised, a.md-button.md-THEME_NAME-theme.md-accent.md-fab, .md-button.md-THEME_NAME-theme.md-accent.md-raised, .md-button.md-THEME_NAME-theme.md-accent.md-fab {      color: '{{accent-contrast}}';      background-color: '{{accent-color}}'; }      a.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]) md-icon, a.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]) md-icon {        color: '{{accent-contrast}}'; }      a.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover, a.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover {        background-color: '{{accent-color}}'; }      a.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]).md-focused, a.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]).md-focused {        background-color: '{{accent-700}}'; }    a.md-button.md-THEME_NAME-theme.md-accent:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-accent:not([disabled]) md-icon {      color: '{{accent-color}}'; }  a.md-button.md-THEME_NAME-theme[disabled], a.md-button.md-THEME_NAME-theme.md-raised[disabled], a.md-button.md-THEME_NAME-theme.md-fab[disabled], a.md-button.md-THEME_NAME-theme.md-accent[disabled], a.md-button.md-THEME_NAME-theme.md-warn[disabled], .md-button.md-THEME_NAME-theme[disabled], .md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled], .md-button.md-THEME_NAME-theme.md-accent[disabled], .md-button.md-THEME_NAME-theme.md-warn[disabled] {    color: '{{foreground-3}}';    cursor: not-allowed; }    a.md-button.md-THEME_NAME-theme[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-raised[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-fab[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-accent[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-warn[disabled] md-icon, .md-button.md-THEME_NAME-theme[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-raised[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-fab[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-accent[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-warn[disabled] md-icon {      color: '{{foreground-3}}'; }  a.md-button.md-THEME_NAME-theme.md-raised[disabled], a.md-button.md-THEME_NAME-theme.md-fab[disabled], .md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled] {    background-color: '{{foreground-4}}'; }  a.md-button.md-THEME_NAME-theme[disabled], .md-button.md-THEME_NAME-theme[disabled] {    background-color: transparent; }md-bottom-sheet.md-THEME_NAME-theme {  background-color: '{{background-50}}';  border-top-color: '{{background-300}}'; }  md-bottom-sheet.md-THEME_NAME-theme.md-list md-list-item {    color: '{{foreground-1}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    background-color: '{{background-50}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    color: '{{foreground-1}}'; }md-card.md-THEME_NAME-theme {  background-color: '{{background-color}}';  border-radius: 2px; }  md-card.md-THEME_NAME-theme .md-card-image {    border-radius: 2px 2px 0 0; }md-checkbox.md-THEME_NAME-theme .md-ripple {  color: '{{accent-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked.md-focused .md-container:before {  background-color: '{{accent-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon {  background-color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ripple {  color: '{{primary-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon {  background-color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked.md-focused .md-container:before {  background-color: '{{primary-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ripple {  color: '{{warn-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon {  background-color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked.md-focused:not([disabled]) .md-container:before {  background-color: '{{warn-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-icon {  border-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon {  background-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-label {  color: '{{foreground-3}}'; }md-content.md-THEME_NAME-theme {  background-color: '{{background-color}}'; }md-chips.md-THEME_NAME-theme .md-chips {  box-shadow: 0 1px '{{background-300}}'; }  md-chips.md-THEME_NAME-theme .md-chips.md-focused {    box-shadow: 0 2px '{{primary-color}}'; }md-chips.md-THEME_NAME-theme .md-chip {  background: '{{background-300}}';  color: '{{background-800}}'; }  md-chips.md-THEME_NAME-theme .md-chip.md-focused {    background: '{{primary-color}}';    color: '{{primary-contrast}}'; }    md-chips.md-THEME_NAME-theme .md-chip.md-focused md-icon {      color: '{{primary-contrast}}'; }md-chips.md-THEME_NAME-theme md-chip-remove .md-button md-icon path {  fill: '{{background-500}}'; }.md-contact-suggestion span.md-contact-email {  color: '{{background-400}}'; }md-dialog.md-THEME_NAME-theme {  border-radius: 4px;  background-color: '{{background-color}}'; }  md-dialog.md-THEME_NAME-theme.md-content-overflow .md-actions {    border-top-color: '{{foreground-4}}'; }md-divider.md-THEME_NAME-theme {  border-top-color: '{{foreground-4}}'; }md-icon.md-THEME_NAME-theme {  color: '{{foreground-2}}'; }  md-icon.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  md-icon.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  md-icon.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h3, md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h4, md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h3, md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h4 {  color: '{{foreground-1}}'; }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text p, md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text p {  color: '{{foreground-2}}'; }md-list.md-THEME_NAME-theme .md-proxy-focus.md-focused div.md-no-style {  background-color: '{{background-100}}'; }md-list.md-THEME_NAME-theme md-list-item > md-icon {  color: '{{foreground-2}}'; }  md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight {    color: '{{primary-color}}'; }    md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight.md-accent {      color: '{{accent-color}}'; }md-list.md-THEME_NAME-theme md-list-item button {  background-color: '{{background-color}}'; }  md-list.md-THEME_NAME-theme md-list-item button.md-button:not([disabled]):hover {    background-color: '{{background-color}}'; }md-input-container.md-THEME_NAME-theme .md-input {  color: '{{foreground-1}}';  border-color: '{{foreground-4}}';  text-shadow: '{{foreground-shadow}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder, md-input-container.md-THEME_NAME-theme .md-input::-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-ms-input-placeholder {    color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme > md-icon {  color: '{{foreground-1}}'; }md-input-container.md-THEME_NAME-theme label, md-input-container.md-THEME_NAME-theme .md-placeholder {  text-shadow: '{{foreground-shadow}}';  color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme ng-messages, md-input-container.md-THEME_NAME-theme [ng-message], md-input-container.md-THEME_NAME-theme [data-ng-message], md-input-container.md-THEME_NAME-theme [x-ng-message] {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-has-value label {  color: '{{foreground-2}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused .md-input {  border-color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused label {  color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused md-icon {  color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent .md-input {  border-color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent label {  color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn .md-input {  border-color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn label {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input {  border-color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid.md-input-focused label {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid data-ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid x-ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid [ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [data-ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [x-ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid .md-char-counter {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme .md-input[disabled], [disabled] md-input-container.md-THEME_NAME-theme .md-input {  border-bottom-color: transparent;  color: '{{foreground-3}}';  background-image: linear-gradient(to right, '{{foreground-3}}' 0%, '{{foreground-3}}' 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, '{{foreground-3}}' 100%); }md-menu-content.md-THEME_NAME-theme {  background-color: '{{background-color}}'; }  md-menu-content.md-THEME_NAME-theme md-menu-divider {    background-color: '{{foreground-4}}'; }md-progress-circular.md-THEME_NAME-theme {  background-color: transparent; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-gap {    border-top-color: '{{primary-color}}';    border-bottom-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-top-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-right-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle {    border-left-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-gap {    border-top-color: '{{warn-color}}';    border-bottom-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-top-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-right-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle {    border-left-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-gap {    border-top-color: '{{accent-color}}';    border-bottom-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-top-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-right-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle {    border-left-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme .md-container {  background-color: '{{primary-100}}'; }md-progress-linear.md-THEME_NAME-theme .md-bar {  background-color: '{{primary-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-container {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-bar {  background-color: '{{warn-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-container {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-bar {  background-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-bar1 {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-dashed:before {  background: radial-gradient('{{warn-100}}' 0%, '{{warn-100}}' 16%, transparent 42%); }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-bar1 {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-dashed:before {  background: radial-gradient('{{accent-100}}' 0%, '{{accent-100}}' 16%, transparent 42%); }md-radio-button.md-THEME_NAME-theme .md-off {  border-color: '{{foreground-2}}'; }md-radio-button.md-THEME_NAME-theme .md-on {  background-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-off {  border-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme .md-container .md-ripple {  color: '{{accent-600}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-on, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-on {  background-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off {  border-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple {  color: '{{primary-600}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-on, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-on {  background-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off {  border-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple {  color: '{{warn-600}}'; }md-radio-group.md-THEME_NAME-theme[disabled], md-radio-button.md-THEME_NAME-theme[disabled] {  color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-off, md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-off {    border-color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-on, md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-on {    border-color: '{{foreground-3}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked .md-container:before {  background-color: '{{accent-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked:not([disabled]).md-primary .md-container:before {  background-color: '{{primary-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-primary .md-container:before {  background-color: '{{warn-color-0.26}}'; }md-select.md-THEME_NAME-theme.ng-invalid.ng-dirty .md-select-label {  color: '{{warn-500}}' !important;  border-bottom-color: '{{warn-500}}' !important; }md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-label {  border-bottom-color: '{{primary-color}}';  color: '{{ foreground-1 }}'; }  md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-label.md-placeholder {    color: '{{ foreground-1 }}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-accent .md-select-label {  border-bottom-color: '{{accent-color}}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-warn .md-select-label {  border-bottom-color: '{{warn-color}}'; }md-select.md-THEME_NAME-theme[disabled] .md-select-label {  color: '{{foreground-3}}'; }  md-select.md-THEME_NAME-theme[disabled] .md-select-label.md-placeholder {    color: '{{foreground-3}}'; }md-select.md-THEME_NAME-theme .md-select-label {  border-bottom-color: '{{foreground-4}}'; }  md-select.md-THEME_NAME-theme .md-select-label.md-placeholder {    color: '{{foreground-2}}'; }md-select-menu.md-THEME_NAME-theme md-optgroup {  color: '{{foreground-2}}'; }  md-select-menu.md-THEME_NAME-theme md-optgroup md-option {    color: '{{foreground-1}}'; }md-select-menu.md-THEME_NAME-theme md-option[selected] {  color: '{{primary-500}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected]:focus {    color: '{{primary-600}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent {    color: '{{accent-500}}'; }    md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent:focus {      color: '{{accent-600}}'; }md-select-menu.md-THEME_NAME-theme md-option:focus:not([selected]) {  background: '{{background-200}}'; }md-slider.md-THEME_NAME-theme .md-track {  background-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme .md-track-ticks {  background-color: '{{foreground-4}}'; }md-slider.md-THEME_NAME-theme .md-focus-thumb {  background-color: '{{foreground-2}}'; }md-slider.md-THEME_NAME-theme .md-focus-ring {  border-color: '{{foreground-4}}'; }md-slider.md-THEME_NAME-theme .md-disabled-thumb {  border-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme.md-min .md-thumb:after {  background-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme .md-track.md-track-fill {  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb:after {  border-color: '{{accent-color}}';  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-sign {  background-color: '{{accent-color}}'; }  md-slider.md-THEME_NAME-theme .md-sign:after {    border-top-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb-text {  color: '{{accent-contrast}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-track.md-track-fill {  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb:after {  border-color: '{{warn-color}}';  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-sign {  background-color: '{{warn-color}}'; }  md-slider.md-THEME_NAME-theme.md-warn .md-sign:after {    border-top-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb-text {  color: '{{warn-contrast}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-track.md-track-fill {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb:after {  border-color: '{{primary-color}}';  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-sign {  background-color: '{{primary-color}}'; }  md-slider.md-THEME_NAME-theme.md-primary .md-sign:after {    border-top-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb-text {  color: '{{primary-contrast}}'; }md-slider.md-THEME_NAME-theme[disabled] .md-thumb:after {  border-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme[disabled]:not(.md-min) .md-thumb:after {  background-color: '{{foreground-3}}'; }md-sidenav.md-THEME_NAME-theme {  background-color: '{{background-color}}'; }.md-subheader.md-THEME_NAME-theme {  color: '{{ foreground-2-0.23 }}';  background-color: '{{background-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme .md-thumb {  background-color: '{{background-50}}'; }md-switch.md-THEME_NAME-theme .md-bar {  background-color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-thumb {  background-color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-bar {  background-color: '{{accent-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-focused .md-thumb:before {  background-color: '{{accent-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-thumb {  background-color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-bar {  background-color: '{{primary-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary.md-focused .md-thumb:before {  background-color: '{{primary-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-thumb {  background-color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-bar {  background-color: '{{warn-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn.md-focused .md-thumb:before {  background-color: '{{warn-color-0.26}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-thumb {  background-color: '{{background-400}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-bar {  background-color: '{{foreground-4}}'; }md-tabs.md-THEME_NAME-theme md-tabs-wrapper {  background-color: transparent;  border-color: '{{foreground-4}}'; }md-tabs.md-THEME_NAME-theme .md-paginator md-icon {  color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme md-ink-bar {  color: '{{accent-color}}';  background: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme .md-tab {  color: '{{foreground-2}}'; }  md-tabs.md-THEME_NAME-theme .md-tab[disabled] {    color: '{{foreground-3}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-active, md-tabs.md-THEME_NAME-theme .md-tab.md-focused {    color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-focused {    background: '{{primary-color-0.1}}'; }  md-tabs.md-THEME_NAME-theme .md-tab .md-ripple-container {    color: '{{accent-100}}'; }md-tabs.md-THEME_NAME-theme.md-accent md-tabs-wrapper {  background-color: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme.md-accent md-tab-item:not([disabled]) {  color: '{{accent-100}}'; }  md-tabs.md-THEME_NAME-theme.md-accent md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-accent md-tab-item:not([disabled]).md-focused {    color: '{{accent-contrast}}'; }  md-tabs.md-THEME_NAME-theme.md-accent md-tab-item:not([disabled]).md-focused {    background: '{{accent-contrast-0.1}}'; }md-tabs.md-THEME_NAME-theme.md-accent md-ink-bar {  color: '{{primary-600-1}}';  background: '{{primary-600-1}}'; }md-tabs.md-THEME_NAME-theme.md-primary md-tabs-wrapper {  background-color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme.md-primary md-tab-item:not([disabled]) {  color: '{{primary-100}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-primary md-tab-item:not([disabled]).md-focused {    color: '{{primary-contrast}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab-item:not([disabled]).md-focused {    background: '{{primary-contrast-0.1}}'; }md-tabs.md-THEME_NAME-theme.md-warn md-tabs-wrapper {  background-color: '{{warn-color}}'; }md-tabs.md-THEME_NAME-theme.md-warn md-tab-item:not([disabled]) {  color: '{{warn-100}}'; }  md-tabs.md-THEME_NAME-theme.md-warn md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-warn md-tab-item:not([disabled]).md-focused {    color: '{{warn-contrast}}'; }  md-tabs.md-THEME_NAME-theme.md-warn md-tab-item:not([disabled]).md-focused {    background: '{{warn-contrast-0.1}}'; }md-toolbar > md-tabs.md-THEME_NAME-theme md-tabs-wrapper {  background-color: '{{primary-color}}'; }md-toolbar > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]) {  color: '{{primary-100}}'; }  md-toolbar > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]).md-active, md-toolbar > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]).md-focused {    color: '{{primary-contrast}}'; }  md-toolbar > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]).md-focused {    background: '{{primary-contrast-0.1}}'; }md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme md-tabs-wrapper {  background-color: '{{accent-color}}'; }md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]) {  color: '{{accent-100}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]).md-active, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]).md-focused {    color: '{{accent-contrast}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]).md-focused {    background: '{{accent-contrast-0.1}}'; }md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme md-ink-bar {  color: '{{primary-600-1}}';  background: '{{primary-600-1}}'; }md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme md-tabs-wrapper {  background-color: '{{warn-color}}'; }md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]) {  color: '{{warn-100}}'; }  md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]).md-active, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]).md-focused {    color: '{{warn-contrast}}'; }  md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]).md-focused {    background: '{{warn-contrast-0.1}}'; }md-toast.md-THEME_NAME-theme {  background-color: #323232;  color: '{{background-50}}'; }  md-toast.md-THEME_NAME-theme .md-button {    color: '{{background-50}}'; }    md-toast.md-THEME_NAME-theme .md-button.md-highlight {      color: '{{primary-A200}}'; }      md-toast.md-THEME_NAME-theme .md-button.md-highlight.md-accent {        color: '{{accent-A200}}'; }      md-toast.md-THEME_NAME-theme .md-button.md-highlight.md-warn {        color: '{{warn-A200}}'; }md-toolbar.md-THEME_NAME-theme {  background-color: '{{primary-color}}';  color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme md-icon {    color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme .md-button {    color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme.md-accent {    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }  md-toolbar.md-THEME_NAME-theme.md-warn {    background-color: '{{warn-color}}';    color: '{{warn-contrast}}'; }md-tooltip.md-THEME_NAME-theme {  color: '{{background-A100}}'; }  md-tooltip.md-THEME_NAME-theme .md-background {    background-color: '{{foreground-2}}'; }");

}()}(window,window.angular);
/*
 AngularJS v1.3.15
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(q,d,C){'use strict';function v(r,k,h){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,f,b,c,y){function z(){l&&(h.cancel(l),l=null);m&&(m.$destroy(),m=null);n&&(l=h.leave(n),l.then(function(){l=null}),n=null)}function x(){var b=r.current&&r.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),c=r.current;n=y(b,function(b){h.enter(b,null,n||f).then(function(){!d.isDefined(t)||t&&!a.$eval(t)||k()});z()});m=c.scope=b;m.$emit("$viewContentLoaded");
m.$eval(w)}else z()}var m,n,l,t=b.autoscroll,w=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(d,k,h){return{restrict:"ECA",priority:-400,link:function(a,f){var b=h.current,c=b.locals;f.html(c.$template);var y=d(f.contents());b.controller&&(c.$scope=a,c=k(b.controller,c),b.controllerAs&&(a[b.controllerAs]=c),f.data("$ngControllerController",c),f.children().data("$ngControllerController",c));y(a)}}}q=d.module("ngRoute",["ng"]).provider("$route",function(){function r(a,f){return d.extend(Object.create(a),
f)}function k(a,d){var b=d.caseInsensitiveMatch,c={originalPath:a,regexp:a},h=c.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,d,b,c){a="?"===c?c:null;c="*"===c?c:null;h.push({name:b,optional:!!a});d=d||"";return""+(a?"":d)+"(?:"+(a?d:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");c.regexp=new RegExp("^"+a+"$",b?"i":"");return c}var h={};this.when=function(a,f){var b=d.copy(f);d.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);
d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);h[a]=d.extend(b,a&&k(a,b));if(a){var c="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";h[c]=d.extend({redirectTo:a},k(c,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,f,b,c,k,q,x){function m(b){var e=s.current;
(v=(p=l())&&e&&p.$$route===e.$$route&&d.equals(p.pathParams,e.pathParams)&&!p.reloadOnSearch&&!w)||!e&&!p||a.$broadcast("$routeChangeStart",p,e).defaultPrevented&&b&&b.preventDefault()}function n(){var u=s.current,e=p;if(v)u.params=e.params,d.copy(u.params,b),a.$broadcast("$routeUpdate",u);else if(e||u)w=!1,(s.current=e)&&e.redirectTo&&(d.isString(e.redirectTo)?f.path(t(e.redirectTo,e.params)).search(e.params).replace():f.url(e.redirectTo(e.pathParams,f.path(),f.search())).replace()),c.when(e).then(function(){if(e){var a=
d.extend({},e.resolve),b,g;d.forEach(a,function(b,e){a[e]=d.isString(b)?k.get(b):k.invoke(b,null,null,e)});d.isDefined(b=e.template)?d.isFunction(b)&&(b=b(e.params)):d.isDefined(g=e.templateUrl)&&(d.isFunction(g)&&(g=g(e.params)),g=x.getTrustedResourceUrl(g),d.isDefined(g)&&(e.loadedTemplateUrl=g,b=q(g)));d.isDefined(b)&&(a.$template=b);return c.all(a)}}).then(function(c){e==s.current&&(e&&(e.locals=c,d.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,u))},function(b){e==s.current&&a.$broadcast("$routeChangeError",
e,u,b)})}function l(){var a,b;d.forEach(h,function(c,h){var g;if(g=!b){var k=f.path();g=c.keys;var m={};if(c.regexp)if(k=c.regexp.exec(k)){for(var l=1,n=k.length;l<n;++l){var p=g[l-1],q=k[l];p&&q&&(m[p.name]=q)}g=m}else g=null;else g=null;g=a=g}g&&(b=r(c,{params:d.extend({},f.search(),a),pathParams:a}),b.$$route=c)});return b||h[null]&&r(h[null],{params:{},pathParams:{}})}function t(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
h=f[1];c.push(b[h]);c.push(f[2]||"");delete b[h]}});return c.join("")}var w=!1,p,v,s={routes:h,reload:function(){w=!0;a.$evalAsync(function(){m();n()})},updateParams:function(a){if(this.current&&this.current.$$route)a=d.extend({},this.current.params,a),f.path(t(this.current.$$route.originalPath,a)),f.search(a);else throw B("norout");}};a.$on("$locationChangeStart",m);a.$on("$locationChangeSuccess",n);return s}]});var B=d.$$minErr("ngRoute");q.provider("$routeParams",function(){this.$get=function(){return{}}});
q.directive("ngView",v);q.directive("ngView",A);v.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);


/*
 AngularJS v1.3.16
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(y,s,z){'use strict';function t(f,k,p){n.directive(f,["$parse","$swipe",function(d,e){return function(l,m,g){function h(a){if(!b)return!1;var c=Math.abs(a.y-b.y);a=(a.x-b.x)*k;return q&&75>c&&0<a&&30<a&&.3>c/a}var c=d(g[f]),b,q,a=["touch"];s.isDefined(g.ngSwipeDisableMouse)||a.push("mouse");e.bind(m,{start:function(a,c){b=a;q=!0},cancel:function(a){q=!1},end:function(a,b){h(a)&&l.$apply(function(){m.triggerHandler(p);c(l,{$event:b})})}},a)}}])}var n=s.module("ngTouch",[]);n.factory("$swipe",
[function(){function f(d){d=d.originalEvent||d;var e=d.touches&&d.touches.length?d.touches:[d];d=d.changedTouches&&d.changedTouches[0]||e[0];return{x:d.clientX,y:d.clientY}}function k(d,e){var l=[];s.forEach(d,function(d){(d=p[d][e])&&l.push(d)});return l.join(" ")}var p={mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},touch:{start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"}};return{bind:function(d,e,l){var m,g,h,c,b=!1;l=l||["mouse","touch"];d.on(k(l,"start"),function(a){h=
f(a);b=!0;g=m=0;c=h;e.start&&e.start(h,a)});var q=k(l,"cancel");if(q)d.on(q,function(a){b=!1;e.cancel&&e.cancel(a)});d.on(k(l,"move"),function(a){if(b&&h){var d=f(a);m+=Math.abs(d.x-c.x);g+=Math.abs(d.y-c.y);c=d;10>m&&10>g||(g>m?(b=!1,e.cancel&&e.cancel(a)):(a.preventDefault(),e.move&&e.move(d,a)))}});d.on(k(l,"end"),function(a){b&&(b=!1,e.end&&e.end(f(a),a))})}}}]);n.config(["$provide",function(f){f.decorator("ngClickDirective",["$delegate",function(k){k.shift();return k}])}]);n.directive("ngClick",
["$parse","$timeout","$rootElement",function(f,k,p){function d(c,b,d){for(var a=0;a<c.length;a+=2){var e=c[a+1],g=d;if(25>Math.abs(c[a]-b)&&25>Math.abs(e-g))return c.splice(a,a+2),!0}return!1}function e(c){if(!(2500<Date.now()-m)){var b=c.touches&&c.touches.length?c.touches:[c],e=b[0].clientX,b=b[0].clientY;if(!(1>e&&1>b||h&&h[0]===e&&h[1]===b)){h&&(h=null);var a=c.target;"label"===s.lowercase(a.nodeName||a[0]&&a[0].nodeName)&&(h=[e,b]);d(g,e,b)||(c.stopPropagation(),c.preventDefault(),c.target&&
c.target.blur&&c.target.blur())}}}function l(c){c=c.touches&&c.touches.length?c.touches:[c];var b=c[0].clientX,d=c[0].clientY;g.push(b,d);k(function(){for(var a=0;a<g.length;a+=2)if(g[a]==b&&g[a+1]==d){g.splice(a,a+2);break}},2500,!1)}var m,g,h;return function(c,b,h){function a(){n=!1;b.removeClass("ng-click-active")}var k=f(h.ngClick),n=!1,r,t,v,w;b.on("touchstart",function(a){n=!0;r=a.target?a.target:a.srcElement;3==r.nodeType&&(r=r.parentNode);b.addClass("ng-click-active");t=Date.now();a=a.originalEvent||
a;a=(a.touches&&a.touches.length?a.touches:[a])[0];v=a.clientX;w=a.clientY});b.on("touchmove",function(b){a()});b.on("touchcancel",function(b){a()});b.on("touchend",function(c){var k=Date.now()-t,f=c.originalEvent||c,u=(f.changedTouches&&f.changedTouches.length?f.changedTouches:f.touches&&f.touches.length?f.touches:[f])[0],f=u.clientX,u=u.clientY,x=Math.sqrt(Math.pow(f-v,2)+Math.pow(u-w,2));n&&750>k&&12>x&&(g||(p[0].addEventListener("click",e,!0),p[0].addEventListener("touchstart",l,!0),g=[]),m=Date.now(),
d(g,f,u),r&&r.blur(),s.isDefined(h.disabled)&&!1!==h.disabled||b.triggerHandler("click",[c]));a()});b.onclick=function(a){};b.on("click",function(a,b){c.$apply(function(){k(c,{$event:b||a})})});b.on("mousedown",function(a){b.addClass("ng-click-active")});b.on("mousemove mouseup",function(a){b.removeClass("ng-click-active")})}}]);t("ngSwipeLeft",-1,"swipeleft");t("ngSwipeRight",1,"swiperight")})(window,window.angular);


angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("directivas/componentes/touchSlider/touchSlider.html","\n<div class=\'tiraSlide\' style=\' width: {{fotos.length*100}}%; -webkit-transition: {{ t }}; -webkit-transform:translate3d( {{enx}}px, 0px, 0px )\' >\n		\n	<div ng-repeat=\'foto in fotos track by $index\'  class=\'itemSlide\' \n	     md-ink-ripple  ng-disabled=\" foto.home_og_poi == 0 ||  foto.home_og_poi == null\" \n		 style=\'width: {{ 100 / fotos.length }}%; left:{{ $index * (100 / fotos.length ) }}%;\' \n		 ng-click = \'go(1)\' >\n		   	\n		 <!--   	<div class=\'image-bg\' style=\'background-image:url( \n\n\n		   	{{urlImgs}}{{array_src_fotos[$index]}}\n\n		   	)\'></div> -->\n			<img ng-src=\'{{urlImgs}}{{array_src_fotos[$index]}}-640x450.jpg\'  style=\'width: 100%;\' class=\'animate-show\' fade-in  />\n\n	</div>\n	\n\n</div>\n\n<div class=\'touch-slide-holder-bullets\' ng-if=\' fotos.length > 1 \'>\n\n	<div class=\'touch-slide-bullet\' ng-repeat=\'foto in fotos track by $index\' ng-class=\"{\'touch-bullet-select\':(pagina == $index)}\"></div>\n\n</div>\n");
$templateCache.put("directivas/secciones/config/config.html","<div id=\'config-scrolling\'  style=\"height:{{screen_alto-80}}px\">\n\n	<div class=\'config-label bg-color-bar\'>Filtros</div>\n\n	<div class=\'config-row\'>\n\n		 <div class=\'label\'>Distancia (km)</div>\n		 <div  class=\'config-conent-slider\'><md-slider md-discrete ng-model=\"distancia\"  min=\"1\" max=\"20\"  step=\'0.1\'  aria-label=\"Distancia\"></md-slider></div>\n\n	</div>\n\n\n	<div class=\'config-row\'>\n		<div class=\'label\'>Bares</div>\n		<check-box  md-ink-ripple  checked=\'chkBares\' accion=\'update(\"bares\", chkBares)\'></check-box>\n	</div>\n	<div class=\'config-row\'>\n		<div class=\'label\'>Restaurantes</div>\n		<check-box  md-ink-ripple  checked=\'chkRestaurantes\' accion=\'update(\"restaurantes\", chkRestaurantes)\'></check-box>\n	</div>\n	<div class=\'config-row\'>\n		<div class=\'label\'>Cines</div>\n		<check-box  md-ink-ripple  checked=\'chkCines\' accion=\'update(\"cines\", chkCines)\'></check-box>\n	</div>\n	<div class=\'config-row\'>\n		<div class=\'label\'>Teatros</div>\n		<check-box  md-ink-ripple  checked=\'chkTeatros\' accion=\'update(\"teatros\", chkTeatros)\'></check-box>\n	</div>\n\n\n	<div class=\'config-label bg-color-cine\'>INFORMACIÓN</div>\n	<div class=\'config-row\' ng-class=\'{ \"config-disabled\": ($root.userId == 0 || $root.pushIosDisabled) }\'>\n		<div class=\'label\'>Notificaciones Push </div>\n		<check-box  md-ink-ripple  checked=\'chkPush\' accion=\'setPush(\"push\", chkPush)\'></check-box>\n	</div>\n\n	<div class=\'config-row\' ng-if=\' $root.userId == 0\'>\n		<div class=\'label\'>Para recibir notificaciones push, debes estar registrado. Haz <a ng-click=\'goReg()\'>click aquí</a> para registarte.\n	</div></div>\n\n	<div class=\'config-row\' ng-if=\'$root.pushIosDisabled\'>\n		<div class=\'label\'>Al parecer las notificaciones push estan deshabilitadas desde los ajustes generales. Para activarlas valla a: Ajustes > GeoBar > Notificaciones.\n	</div></div>\n	\n\n\n</div>");
$templateCache.put("directivas/secciones/detalle/detalle.html","<div class=\'flexible\'>\n\n	<div id=\'detalle-fotos\'>\n\n		<!-- <img src=\'img/blankDetalle.png\' class=\'blankImg\' /> -->\n		<img src=\'img/default/{{item.tipo}}.png\' class=\'blankImg\' />\n		<touch-slider class=\'touchSlider\' fotos=\' fotos_detalle \' url-imgs=\' url_img \'></touch-slider>\n\n	</div>\n\n	<div id=\'detalle-menu-info\'>\n\n		<div id=\'detalle-botonera\'>\n			<div>\n				<boton-sistema accion=\"goTel()\" id=\'detalle-btn_tel\' imagen=\"img/btns/tel2.svg\"></boton-sistema>\n				<boton-sistema accion=\"goDir()\" id=\'detalle-btn_dir\'  imagen=\"img/btns/dir.svg\"></boton-sistema>\n				<boton-sistema accion=\"goFav()\" id=\'detalle-btn_star\' ng-if=\' item.mi_fav == 0\' imagen=\"img/btns/star.svg\"></boton-sistema>\n				<boton-sistema accion=\"goFav()\" id=\'detalle-btn_star\' ng-if=\' item.mi_fav == 1\' imagen=\"img/btns/star-full.svg\"></boton-sistema>\n				<boton-sistema accion=\"goMapa()\" id=\'detalle-btn_lampara\'  imagen=\"img/btns/lampara.svg\"></boton-sistema>\n			</div>\n		</div>\n		\n		<div id=\'detalle-mini-desc\' ng-class=\" {\'bg-color-bar\': (item.tipo==1), \'bg-color-restaurante\': (item.tipo==2) , \'bg-color-cine\': (item.tipo==3), \'bg-color-evento\': (item.tipo==4), \'bg-color-teatro\': (item.tipo==5)} \" >\n			<div class=\'itemLista-name\'>{{item.name}}</div>\n			<div class=\'itemLista-tipo\'>{{item.cat}}</div> \n			<div class=\'itemLista-tel\'>T. {{item.tel}}</div>\n			<div class=\'itemLista-dir\'>{{item.dir}}</div>\n		</div>\n	\n	</div>\n\n\n\n	<div id=\'detalle-desc\'>\n\n	<!-- 	<div id=\'detalle-count-favs\'><img src=\'img/btns/star-full.svg\'> <div>{{item.favs}}</div></div>\n		 -->\n		{{long_desc}}\n		<div ng-if=\' long_desc == \"\" \' id=\'detalle-no-cargo-info\'>Información no disponible</div>\n		<div id=\'detalle-links-ext\'>\n			<boton-sistema accion=\"goFb()\" id=\'detalle-btn_fb\' imagen=\"img/btns/fb.svg\" 		ng-if=\' item.fb !=\"\" \'></boton-sistema>\n			<boton-sistema accion=\"goSite()\" id=\'detalle-btn_link\'  imagen=\"img/btns/link.svg\"   ng-if=\' item.site !=\"\" \'></boton-sistema>\n		</div>\n	</div>\n\n</div>\n\n");
$templateCache.put("directivas/secciones/home/home.html","<div class=\'flexible\'>\n	<div id=\'home-banner\'>\n		<img src=\'img/blankHome.png\' class=\'blankImg\' />\n		<touch-slider class=\'touchSlider\' fotos=\' fotos_home \' url-imgs=\' url_img_home \' img-default=\'home.png\' ></touch-slider>\n\n	</div>\n\n	<div id=\'home-menu\'>\n		<div>\n			 <boton-sistema   imagen=\"img/btns/home_quehacer.svg\"  id=\'btn_home_quehacer\'  accion=\"navigateService.go(\'lista\', \'eventos\')\"   txt=\'¿Que Hacer?\'></boton-sistema>\n			 <boton-sistema  imagen=\"img/btns/home_lista.svg\" 	  id=\'btn_home_lista\' 	accion=\"navigateService.go(\'lista\', \'lugares\')\" 	 txt=\'Lista\'></boton-sistema>\n			 <boton-sistema  imagen=\"img/btns/home_ar.svg\" 		  id=\'btn_home_ar\' 	 accion=\'realidad()\'										   	 txt=\'Realidad Aumentada\'></boton-sistema>\n			 <boton-sistema  imagen=\"img/btns/home_maps.svg\" 	  id=\'btn_home_maps\' 		accion=\"goMapa()\"  txt=\'Mapa\'></boton-sistema>\n		 </div>\n	</div>\n</div>");
$templateCache.put("directivas/secciones/lista/itemLista.html","<div ng-if=\'((index*90) > (enscroll - 1000)) && ((index*90) <= (enscroll + altoholder) + 1000) \' >\n	\n	<img-loader imgurl=\'img_url\' itemid=\'item.id\' itemtipo=\'item.tipo\' hashfile=\'{{item.thumb + \"-260x180.jpg\" }}\' ></img-loader>\n\n	<div class=\'itemLista-count-favs\'><img src=\'img/btns/star-full.svg\'>\n		<div>{{ getFav(favs[\'p_\' + item.id] )}}</div></div>\n	<div class=\'itemLista-name\'>{{item.name}}</div>\n	<div class=\'itemLista-tipo\'>{{item.cat}}</div> \n	<div class=\'itemLista-tel\'>T. {{item.tel}}</div>\n	<div class=\'itemLista-dir\'>{{item.dir}}</div>\n		\n	<div class=\'itemLista-distancia\' ng-show = \' item.distancia \'>{{item.distancia.toFixed(2)}} km.</div>\n\n</div>\n");
$templateCache.put("directivas/secciones/lista/lista.html","<div id=\'lista-content-input\'>\n	<input type=\'text\' placeholder=\'Buscar...\' ng-model=\'txtfiltro\' ng-change=\'keyDownFilter()\' class=\'lista-input-filter\' />\n 	<boton-sistema imagen=\"img/btns/clear.svg\" ng-show=\" txtfiltro != \'\' \" accion=\'resetFiltro()\' id=\'lista-btn_clear\'></boton-sistema>\n</div>\n{{allFavs}}\n<div class=\'listado\' style=\"height:{{screen_alto-132}}px\">\n\n	<div md-ink-ripple item-lista	boton-lista ng-repeat=\"item in array_items | filter: filtro | limitTo:en_pagina as cantidad\" \n					ng-class=\" { \'alpha\': (($index*90) < (enscroll - 1000)) || (($index*90) > (enscroll + altoholder) + 1000) , \'bg-color-bar\': (item.tipo==1), \'bg-color-restaurante\': (item.tipo==2) , \'bg-color-cine\': (item.tipo==3), \'bg-color-evento\': (item.tipo==4),  \'bg-color-teatro\': (item.tipo==5)}\"\n					index=\'{{$index}}\' \n					item=\'item\' \n					enscroll= \'enscroll\' \n					altoholder = \'altoholder\'\n					siempre-visible=\'false\' \n					favs =\' favs \'\n					ng-click=\"select_item(item)\" class=\'item-lista\' \n\n					\n					></div>\n\n	<div boton-base  ng-click=\'cargarMas()\' id=\'listado-btn-cargar-mas\' ng-if=\' total > cantidad.length\'><div>CARGAR MÁS</div></div>\n\n\n</div>\n\n\n<div id=\'lista-sin-resultados\' ng-if=\' total == 0\'>No se encontraron resultados</div>\n\n\n");
$templateCache.put("directivas/secciones/mapa/mapa.html","<div class=\'flexible\'>\n\n	<div id=\'el-mapa\' data-tap-disabled=\"false\"></div>\n\n	<div  id=\'mapa-info-content\' ng-show=\' itemSelected != null \'class=\'mapa-info\'>\n		<div item-lista \n					ng-if = \' itemSelected != null \' \n					index = \'100\'\n					enscroll = \'1000\'\n					altoholder = \'10000\'\n					ng-class=\" {\'bg-color-bar\': (itemSelected.tipo==1), \'bg-color-restaurante\': (itemSelected.tipo==2) , \'bg-color-cine\': (itemSelected.tipo==3), \'bg-color-evento\': (itemSelected.tipo==4), \'bg-color-teatro\': (itemSelected.tipo==5)} \"\n					item=\'itemSelected\' \n					siempre-visible=\'true\'\n					 favs =\' favs \'\n					class=\'item-lista\'></div>\n\n		<div id=\'mapa-botonera\'>\n				<boton-sistema accion=\'goTel()\' id=\'detalle-btn_tel\' imagen=\"img/btns/tel2.svg\"></boton-sistema>\n				<boton-sistema accion=\"goDir()\" id=\'detalle-btn_dir\'  imagen=\"img/btns/dir.svg\"></boton-sistema>\n				<!-- <boton-sistema id=\'detalle-btn_star\'  imagen=\"img/btns/star.svg\"></boton-sistema> -->\n				<boton-sistema accion=\"goInfo()\" id=\'detalle-btn_info\'  imagen=\"img/btns/info.svg\"></boton-sistema>			\n		</div>\n	</div>\n\n</div>\n\n\n");
$templateCache.put("directivas/secciones/reg/reg.html","<div id=\'content-reg\'>\n	<img src=\'img/logo.png\' id=\'reg-logo\' >\n\n	<div id=\'reg-box-shadow\'></div>\n\n	<div id=\'reg-box-content\'>\n\n		<h1>Registro</h1>\n		<boton-sistema md-ink-ripple=\"#FFFFFF\"  id=\'btn_facebook\' accion=\"fb()\" imagen=\"img/reg/btn_facebook.png\"></boton-sistema>\n		<h2>Crear cuenta GEOBAR</h2>\n		<div id=\'reg-form\'> \n\n			<div class=\'reg-row\'>\n				<div class=\'reg-label\'>Nombre</div>\n				<div class=\'reg-input\'><input  ng-class=\'{ \"campoerror\": errorNombre}\' type=\'text\' ng-model=\'reg.nombre\' /></div>\n			</div>\n\n			<div class=\'reg-row\'>\n				<div class=\'reg-label\'>Apellido</div>\n				<div class=\'reg-input\'><input ng-trim ng-class=\'{ \"campoerror\": errorApellido }\' type=\'text\' ng-model=\'reg.apellido\' /></div>\n			</div>\n\n			<div class=\'reg-row\'>\n				<div class=\'reg-label\'>Email</div>\n				<div class=\'reg-input\'><input ng-trim ng-class=\'{ \"campoerror\": errorEmail}\' type=\'email\' ng-model=\'reg.email\' /></div>\n			</div>\n\n			<div class=\'reg-row\'>\n				<div class=\'reg-label\'>CI</div>\n				<div class=\'reg-input\'><input maxlength=\'8\' ng-trim ng-class=\'{ \"campoerror\": errorCi}\' type=\'tel\' ng-model=\'reg.ci\' /></div>\n			</div>\n\n			<div class=\'reg-row\'>\n				<div class=\'reg-label\'>F. Nac.</div>\n				<div class=\'reg-input\'><input  ng-class=\'{ \"campoerror\": errorNac}\' type=\'date\' ng-model=\'reg.nac\'  /></div>\n			</div>\n\n			<div class=\'reg-row\'>\n				<div class=\'reg-label\'>Sexo</div>\n				<div class=\'reg-input\'>\n					\n					<div>Mujer</div>  <check-box  md-ink-ripple  checked=\'sexoF\'   accion=\'elegirSexo(\"female\")\' ></check-box>\n					<div>Hombre</div> <check-box  md-ink-ripple  checked=\'sexoM\'   accion=\'elegirSexo(\"male\")\' ></check-box>\n\n				</div>\n			</div>\n\n		</div>\n\n		<div class=\'reg-content-buttons\'>\n		<md-button  class=\"md-primary btn-omitir\" ng-click=\'omitir()\' > OMITIR </md-button>\n		<md-button  class=\"md-primary\" ng-click=\'enviar()\' > ENVIAR </md-button>\n		</div>\n	</div>\n</div>");
$templateCache.put("directivas/secciones/taxi/taxi.html","<div id=\'taxi-box-shadow\'></div>\n\n<div id=\'taxi-box-content\'>\n\n	<img boton-base accion=\'voyentaxi()\'	src=\'img/taxi/voyentaxi.png\' id=\'taxi-voyentaxi\' />\n	<img boton-base accion=\'easytaxi()\' 	src=\'img/taxi/easytaxi.png\'  id=\'taxi-easytaxi\' />\n\n</div>");
$templateCache.put("directivas/secciones/terms/terms.html","\n\n<div id=\'tems_copy\'>\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt dapibus dui, quis tincidunt lacus adipiscing ut. Praesent scelerisque turpis quam. Praesent laoreet ligula ac quam sollicitudin, eu varius metus tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis sodales tincidunt suscipit. Suspendisse potenti. Mauris sem lectus, laoreet vitae consequat quis, luctus sit amet elit. Cras vitae lacus eu tellus accumsan scelerisque at ac eros. Sed pretium tempor dui. Curabitur id nisi enim. Praesent elit justo, viverra id volutpat id, convallis eu quam. Sed in dui vel nisl laoreet ultrices elementum nec ipsum. Ut vitae semper mauris.\n\nVivamus et tellus sit amet velit lacinia laoreet. Vestibulum nec lectus eros. Nunc nec posuere enim. Pellentesque sem massa, faucibus vel leo in, imperdiet rutrum neque. Morbi sit amet tempus urna. Vivamus vel ante nec mi faucibus facilisis. Donec bibendum justo fringilla massa venenatis cursus. In aliquam luctus consectetur. Suspendisse ornare a mi vitae placerat. Ut sed commodo enim, nec semper magna. Morbi nec volutpat ipsum. Proin elementum, sem et mollis ultrices, mauris ante tincidunt quam, ut posuere quam metus quis sem. Duis vulputate erat ipsum, in blandit risus egestas ac.\n\nVivamus lobortis diam aliquam ante cursus egestas. Aliquam vel placerat orci. Pellentesque ac tristique dui. Ut nec fermentum nisi. Nunc porttitor nisi tortor, a pulvinar orci vulputate a. Aliquam erat volutpat.\n\nQuisque sagittis volutpat eros. Praesent feugiat velit et mi suscipit facilisis. Ut vitae posuere est. Fusce sed velit sed ante accumsan pulvinar. Curabitur quis libero eros. Maecenas rhoncus, purus sit amet iaculis fermentum, nisl felis eleifend neque, eget porta eros lacus sed libero. Quisque vel interdum sapien, sed vehicula urna. Morbi vel quam imperdiet, tincidunt turpis vel, suscipit sapien.\n</div>\n\n\n<div class=\'terms-row\'>\n	<check-box  md-ink-ripple  checked=\'chkEdad\' ></check-box>\n	<div class=\'label\'>Soy mayor de 18 años</div>\n</div>\n\n<md-button  class=\"md-primary\" ng-click=\'aceptar()\' > ACEPTAR </md-button>");}]);

var geobarApp = angular.module('geobarApp', ['ngTouch', 'ngAnimate','ngMaterial',
											 'ngCordova.plugins.device' , 'templates',
	'ngCordova.plugins.facebook' , 'ngCordova.plugins.network' , 'ngCordova.plugins.push_v5' , 'Utils', 'cordovaGeolocationModule', 'plugins.toast'])

//.constant('SERVER', 'http://localhost/_g3ob4r_/server/')
//.constant('SERVER', 'http://mateomenestrina.no-ip.org/_g3ob4r_/server/')
.constant('SERVER', 'http://dev.metamorf.com.uy/geobar/')
.constant('SCREEN_SIZE', {ancho: window.innerWidth, alto: window.innerHeight})

.config(["$mdGestureProvider", function( $mdGestureProvider) {
    $mdGestureProvider.skipClickHijack();
	console.log("CONFIG")
}])

.run(function($http, $cordovaPushV5, $timeout, $cordovaDevice, $window, $rootScope, SERVER, navigateService) {

	function enviar_token($token){

		console.log('ENVIAR TOKEN: ' + $token);

		$rootScope.pushToken  = $token;

		var _uuid, _platform;
		try{
			_uuid = $cordovaDevice.getUUID();
			_platform =  $cordovaDevice.getPlatform();
		}catch(e){

			_uuid =  'dev';
			_platform =  'browser';
		}

		var objSend = {
			uuid :  _uuid,
			platform : _platform,
			pushtoken : $token,
			u: $window.localStorage.getItem('userId')
		};


		var  req = {
			method: 'POST',
			url: SERVER + 'ws.php?method=init',
			headers: {
				'Content-Type':  'application/x-www-form-urlencoded;charset=utf-8'
			},
			data: objSend
		};

		$http(req).then(function(data){ }, function(){ });


	}

	if($window.localStorage.getItem('local_sync_lugares') == null) $window.localStorage.setItem('local_sync_lugares', 0);
	if($window.localStorage.getItem('local_sync_eventos') == null)  $window.localStorage.setItem('local_sync_eventos', 0);
	if($window.localStorage.getItem('distancia') == null) $window.localStorage.setItem('distancia', 5);
	if($window.localStorage.getItem('bares') == null) $window.localStorage.setItem('bares', 1);
	if($window.localStorage.getItem('restaurantes') == null) $window.localStorage.setItem('restaurantes', 1);
	if($window.localStorage.getItem('cines') == null) $window.localStorage.setItem('cines', 1);
	if($window.localStorage.getItem('teatros') == null) $window.localStorage.setItem('teatros', 1);
	if($window.localStorage.getItem('eventos') == null) $window.localStorage.setItem('eventos', 1);
	if($window.localStorage.getItem('favoritos') == null) $window.localStorage.setItem('favoritos', 1);
	if($window.localStorage.getItem('push') == null) $window.localStorage.setItem('push', 1);
	if($window.localStorage.getItem('aceptoTerms') == null) $window.localStorage.setItem('aceptoTerms', 0);
	if($window.localStorage.getItem('userId') == null) $window.localStorage.setItem('userId', 0);
	if($window.localStorage.getItem('favs') == null) $window.localStorage.setItem('favs', '');
	if($window.localStorage.getItem('json_lugares') == null) $window.localStorage.setItem('json_lugares','[{"id":"37","tipo":"1","cat":"Bar","name":"AVALON Resto-bar","tel":"(01) 4463369","dir":"Calle 2 de Mayo 385","lat":"-12.118048","lon":"-77.032147","alt":"0","thumb":"28a7b962f81e6ee438cfed2a78e72cfb.jpg"},{"id":"34","tipo":"1","cat":"Bar","name":"Bass","tel":"","dir":"Charrua 2547 Esq. Brito del Pino","lat":"-34.905281","lon":"-56.157982","alt":"100.1","thumb":"5021d3649daee63a344b9bc44af9ef56.jpg"},{"id":"30","tipo":"1","cat":"Bar","name":"Casitanno","tel":"2409 7236","dir":"Maldonado 2051 (Pablo de María)","lat":"-34.9081366","lon":"-56.1706496","alt":"100.1","thumb":"c2a2ef804baa729648ad7eb67c7e006a.jpg"},{"id":"7","tipo":"5","cat":"Teatro","name":"El Cilindro","tel":"12312321 23","dir":"cerca del parque rodo","lat":"-34.86319730239704","lon":"-56.15334793925285","alt":"37.430","thumb":"f55faab04fd0c40d086baa83afe82361.jpg"},{"id":"32","tipo":"1","cat":"Bar","name":"El Living","tel":"2402 3795","dir":"Juan Paullier y Edil Hugo Prato","lat":"-34.9092933","lon":"-56.1671314","alt":"100.1","thumb":"6212b10071517248f96267682a765bf7.jpg"},{"id":"18","tipo":"2","cat":"Restaurante","name":"El Palenqe","tel":"11111","dir":"dasd","lat":"-34.90543652103986","lon":"-56.211585234850645","alt":"8.645","thumb":"b7f68a58c58413896dea0da3f92a31ef.jpg"},{"id":"1","tipo":"3","cat":"Cine","name":"Esquina Metamorf","tel":"xxxx020","dir":"11Luis Alberto Herrera 941","lat":"-34.90890485114102","lon":"-56.15121147595346","alt":"26.467","thumb":"ab316ee877f25673e1036d80e40994a1.jpg"},{"id":"35","tipo":"1","cat":"Bar","name":"JACKSON BAR","tel":"098 626 480","dir":"Jackson 1220, Montevideo","lat":"-34.906994","lon":"-56.173031","alt":"100.1","thumb":"c696ea093536ff5096e845f06c8acddb.jpg"},{"id":"15","tipo":"2","cat":"Restaurante","name":"La Estada","tel":"waweq","dir":"wewqe","lat":"-34.90795481601594","lon":"-56.146345341112465","alt":"14.086","thumb":"5d9c449f9184504d50bd3f3f25795fda.jpg"},{"id":"29","tipo":"1","cat":"Bar","name":"La Ronda Cafe","tel":"","dir":"","lat":"-34.90986214411416","lon":"-56.20006246492267","alt":"18.124","thumb":"c6ca9bf6e06b6bd7561a7da146745e93.jpg"},{"id":"31","tipo":"1","cat":"Bar","name":"Loop Bar","tel":"09971012","dir":"Maldonado 2047 (esq. Pablo de Maria)","lat":"-34.9080883","lon":"-56.1708158","alt":"100.0","thumb":"cebc455e3e43c06907ef50d1468dcea0.jpg"},{"id":"3","tipo":"3","cat":"Cine","name":"P. Legislativo","tel":"23059020","dir":"Luis Alberto Herrera 213","lat":"-34.891497","lon":"-56.187308","alt":"22.8","thumb":"a803bdf7b833a7290a599607de633888.jpg"}]');
	if($window.localStorage.getItem('json_eventos') == null) $window.localStorage.setItem('json_eventos','[{"id":"23","tipo":"4","cat":"Evento","name":"Jet Black","tel":"","dir":"","lat":"-34.8382628161465","lon":"-56.03090610355139","alt":"15.187","pub_ini":"0000-00-00 00:00:00","pub_fin":"2016-11-30 00:00:00","thumb":"25aa9ebc670e17a21d02f4dcce3f064a.jpg"},{"id":"5","tipo":"4","cat":"Evento","name":"Rodelu","tel":"324234","dir":"324weleñfjkjfñlsdk ñas","lat":"-34.915748","lon":"-56.167437","alt":"14.1","pub_ini":"0000-00-00 00:00:00","pub_fin":"2015-11-02 00:00:00","thumb":"23c20c2b530f5d5812c03f25798e4dda.jpg"},{"id":"6","tipo":"4","cat":"Evento","name":"Skate park","tel":"324234","dir":"324weleñfjs{dlkjfñlsdk ñas","lat":"-34.910883","lon":"-56.133464","alt":"2.8","pub_ini":"0000-00-00 00:00:00","pub_fin":"2015-11-27 00:00:00","thumb":"3acc9f4a636e3a63c91612d108bce36a.jpg"},{"id":"4","tipo":"4","cat":"Evento","name":"Smirnoff Mauss Party","tel":"23123123","dir":"Sheraton","lat":"-34.924265","lon":"-56.158033","alt":"24.6","pub_ini":"0000-00-00 00:00:00","pub_fin":"2015-12-07 00:00:00","thumb":"a5cd9dc8185d604cd7b2050d94f86e3a.jpg"}]');

	$rootScope.pushIosDisabled = false;

	try{
			$cordovaPushV5.initialize({

				"android": {
					senderID: "100997202768"
				},

				"ios": {
					"sound": "true",
					"vibration": "true",
					"badge": "true",
					"clearBadge": "true"
				}
			}).then(function(result){

				$cordovaPushV5.onNotification();
				$cordovaPushV5.onError();
				$rootScope.pushIosDisabled = true;
				$cordovaPushV5.register().then(function(deviceToken) {

					$rootScope.pushIosDisabled = false;
					enviar_token(deviceToken);

				}, function(err) {

					alert("Push registro error: " + err)

				});


			});



			$rootScope.$on('$cordovaPushV5:notificationReceived', function(event, notification) {

				if (notification.additionalData) {
					//alert('notification.idPoi: ' + notification.idPoi);
					if(notification.additionalData.idPoi!=0) {
						$rootScope.navegarAPoi = notification.additionalData.idPoi;
						try{
							var item={ id: notification.additionalData.idPoi };
							navigateService.go('detalle', item);
						}catch(e){}
					}
				}


				/*$cordovaPushV5.finish().then(function (result) {
				 // OK finished - works only with the dev-next version of pushV5.js in ngCordova as of February 8, 2016
				 }, function (err) {
				 // handle error
				 });
				 */




			});

			// WARNING! dangerous to unregister (results in loss of tokenID)
			$cordovaPushV5.unregister(options).then(function(result) {
				// Success!
			}, function(err) {
				// Error
			});



	}catch(e){

		enviar_token('');

	}


}, false);

geobarApp.controller("mainController",  ["$document", "$cordovaNetwork", "$rootScope", "favService", "ToastService", "cordovaGeolocationService", "$timeout", "$scope", "$http", "Loading", "SERVER", "regService", "$location", "$window", "navigateService", "lugaresService", "eventosService", "arService", function($document, $cordovaNetwork, $rootScope, favService, ToastService, cordovaGeolocationService, $timeout, $scope, $http, Loading, SERVER, regService, $location, $window, navigateService, lugaresService, eventosService, arService) {

	$scope.aceptoTerms = -1;
	$scope.showRegistro = false;
	$scope.rootScope = $rootScope;
	$scope.alto_screen = $window.innerHeight;
	$scope.ultima_ubilcacion  = cordovaGeolocationService.getUltimaPosicion();

	$scope.init = function (){

		$rootScope.position = null;

		cordovaGeolocationService.watchPosition();

		$http.get(SERVER + 'sync.php?ac=' + new Date().getTime()).success(function (json_sync) {

			$window.localStorage.setItem('favs', JSON.stringify(json_sync.favs));

			var local_sync_lugares = $window.localStorage.getItem('local_sync_lugares');
			var local_sync_eventos = $window.localStorage.getItem('local_sync_eventos');

			var debe_sincronzar = '';

			if(json_sync.pois.lugares != local_sync_lugares) debe_sincronzar += 'lugares';
			if(json_sync.pois.eventos != local_sync_eventos) debe_sincronzar += 'eventos';

			if(debe_sincronzar != ''){

				$http.get(SERVER+'ws.php?method=getLista&data=' + debe_sincronzar + '&ac=' + new Date().getTime())

				.success(function(data) {


					if(typeof data.lugares != 'undefined'){
						$window.localStorage.setItem('json_lugares', JSON.stringify(data.lugares));
						$window.localStorage.setItem('local_sync_lugares', json_sync.pois.lugares)
					}

					if(typeof data.eventos != 'undefined'){
						$window.localStorage.setItem('json_eventos', JSON.stringify(data.eventos));
						$window.localStorage.setItem('local_sync_eventos', json_sync.pois.eventos)
					}

				    iniciar_app();

				})
				.error(function(){
					iniciar_app()
				});

			} else  iniciar_app();

		}).error(function(){

			iniciar_app()
		});

	};

	function iniciar_app(){

		favService.setAll();

		$rootScope.$watch("position", function (){

			lugaresService.setAll();
			eventosService.setAll();	

		});

		arService.set();
		Loading.ocultar();

		var callbak_cuando_init = mostrar_home;
		if(!angular.isUndefined($rootScope.navegarAPoi)){
			callbak_cuando_init = goPoi;
		}	
	       
		if($scope.showRegistro){

		   	regService.setCallbacks(callbak_cuando_init, callbak_cuando_init)
		   		
		}else{
		   	
		   callbak_cuando_init();

		}

		$document.on('touchmove', hack)
	
	}

	function goPoi(){
		
		var item={ id: $rootScope.navegarAPoi };
		navigateService.go('detalle', item);
	}

	function mostrar_home(){
	 	navigateService.go('home');
	}

	function hack(){
		$document.off('touchmove', hack)
	}

	$scope.aceptoTerms = $window.localStorage.getItem('aceptoTerms');
	$scope.userId = $window.localStorage.getItem('userId');
	$rootScope.userId = $window.localStorage.getItem('userId');

	if($scope.userId==0){
		$scope.showRegistro = true;
	}

}]);	


geobarApp.controller("menuCtrl", ["$scope", "navigateService", function($scope, navigateService){
	
	$scope.navigateService = navigateService;
	
}]);


geobarApp.controller("seccionLoaderController",  ["$scope", "$rootScope", "navigateService", function($scope, $rootScope, navigateService) {
	
	$scope.navigateService = navigateService;
	$scope.active_page =  navigateService.active_page;


	$scope.cliqueando = function (){
		$scope.visible = false;
	}

}]);



// install   :     cordova plugin add cordova-plugin-device
// link      :     https://github.com/apache/cordova-plugin-device

/* globals device: true */
angular.module('ngCordova.plugins.device', [])

  .factory('$cordovaDevice', [function () {

    return {
      /**
       * Returns the whole device object.
       * @see https://github.com/apache/cordova-plugin-device
       * @returns {Object} The device object.
       */
      getDevice: function () {
        return device;
      },

      /**
       * Returns the Cordova version.
       * @see https://github.com/apache/cordova-plugin-device#devicecordova
       * @returns {String} The Cordova version.
       */
      getCordova: function () {
        return device.cordova;
      },

      /**
       * Returns the name of the device's model or product.
       * @see https://github.com/apache/cordova-plugin-device#devicemodel
       * @returns {String} The name of the device's model or product.
       */
      getModel: function () {
        return device.model;
      },

      /**
       * @deprecated device.name is deprecated as of version 2.3.0. Use device.model instead.
       * @returns {String}
       */
      getName: function () {
        return device.name;
      },

      /**
       * Returns the device's operating system name.
       * @see https://github.com/apache/cordova-plugin-device#deviceplatform
       * @returns {String} The device's operating system name.
       */
      getPlatform: function () {
        return device.platform;
      },

      /**
       * Returns the device's Universally Unique Identifier.
       * @see https://github.com/apache/cordova-plugin-device#deviceuuid
       * @returns {String} The device's Universally Unique Identifier
       */
      getUUID: function () {
        return device.uuid;
      },

      /**
       * Returns the operating system version.
       * @see https://github.com/apache/cordova-plugin-device#deviceversion
       * @returns {String}
       */
      getVersion: function () {
        return device.version;
      },

      /**
       * Returns the device manufacturer.
       * @returns {String}
       */
      getManufacturer: function () {
        return device.manufacturer;
      }
    };
  }]);

// install   :   cordova -d plugin add https://github.com/Wizcorp/phonegap-facebook-plugin.git --variable APP_ID="123456789" --variable APP_NAME="myApplication"
// link      :   https://github.com/Wizcorp/phonegap-facebook-plugin

/* globals facebookConnectPlugin: true */
angular.module('ngCordova.plugins.facebook', [])

  .provider('$cordovaFacebook', [function () {

    /**
      * Init browser settings for Facebook plugin
      *
      * @param {number} id
      * @param {string} version
      */
    this.browserInit = function (id, version) {
      this.appID = id;
      this.appVersion = version || 'v2.0';
      facebookConnectPlugin.browserInit(this.appID, this.appVersion);
    };

    this.$get = ['$q', function ($q) {
      return {
        login: function (permissions) {
          var q = $q.defer();
          facebookConnectPlugin.login(permissions, function (res) {
            q.resolve(res);
          }, function (res) {
            q.reject(res);
          });

          return q.promise;
        },

        showDialog: function (options) {
          var q = $q.defer();
          facebookConnectPlugin.showDialog(options, function (res) {
            q.resolve(res);
          }, function (err) {
            q.reject(err);
          });
          return q.promise;
        },

        api: function (path, permissions) {
          var q = $q.defer();
          facebookConnectPlugin.api(path, permissions, function (res) {
            q.resolve(res);
          }, function (err) {
            q.reject(err);
          });
          return q.promise;
        },

        getAccessToken: function () {
          var q = $q.defer();
          facebookConnectPlugin.getAccessToken(function (res) {
            q.resolve(res);
          }, function (err) {
            q.reject(err);
          });
          return q.promise;
        },

        getLoginStatus: function () {
          var q = $q.defer();
          facebookConnectPlugin.getLoginStatus(function (res) {
            q.resolve(res);
          }, function (err) {
            q.reject(err);
          });
          return q.promise;
        },

        logout: function () {
          var q = $q.defer();
          facebookConnectPlugin.logout(function (res) {
            q.resolve(res);
          }, function (err) {
            q.reject(err);
          });
          return q.promise;
        }
      };
    }];
  }]);

// install   :      cordova plugin add cordova-plugin-network-information
// link      :      https://github.com/apache/cordova-plugin-network-information

/* globals Connection: true */
angular.module('ngCordova.plugins.network', [])

  .factory('$cordovaNetwork', ['$rootScope', '$timeout', function ($rootScope, $timeout) {

    /**
      * Fires offline a event
      */
    var offlineEvent = function () {
      var networkState = navigator.connection.type;
      $timeout(function () {
        $rootScope.$broadcast('$cordovaNetwork:offline', networkState);
      });
    };

    /**
      * Fires online a event
      */
    var onlineEvent = function () {
      var networkState = navigator.connection.type;
      $timeout(function () {
        $rootScope.$broadcast('$cordovaNetwork:online', networkState);
      });
    };

    document.addEventListener('deviceready', function () {
      if (navigator.connection) {
        document.addEventListener('offline', offlineEvent, false);
        document.addEventListener('online', onlineEvent, false);
      }
    });

    return {
      getNetwork: function () {
        return navigator.connection.type;
      },

      isOnline: function () {
        var networkState = navigator.connection.type;
        return networkState !== Connection.UNKNOWN && networkState !== Connection.NONE;
      },

      isOffline: function () {
        var networkState = navigator.connection.type;
        return networkState === Connection.UNKNOWN || networkState === Connection.NONE;
      },

      clearOfflineWatch: function () {
        document.removeEventListener('offline', offlineEvent);
        $rootScope.$$listeners['$cordovaNetwork:offline'] = [];
      },

      clearOnlineWatch: function () {
        document.removeEventListener('online', onlineEvent);
        $rootScope.$$listeners['$cordovaNetwork:online'] = [];
      }
    };
  }])
  .run(['$injector', function ($injector) {
    $injector.get('$cordovaNetwork'); //ensure the factory always gets initialised
  }]);


// install   :      cordova plugin add phonegap-plugin-push
// link      :      https://github.com/phonegap/phonegap-plugin-push

angular.module('ngCordova.plugins.push_v5', [])
  .factory('$cordovaPushV5',['$q', '$rootScope', '$timeout', function ($q, $rootScope, $timeout) {
   /*global PushNotification*/

    var push;
    return {
      initialize : function (options) {
        var q = $q.defer();
        push = PushNotification.init(options);
        q.resolve(push);
        return q.promise;
      },
      onNotification : function () {
        $timeout(function () {
          push.on('notification', function (notification) {


            $rootScope.$emit('$cordovaPushV5:notificationReceived', notification);



          });



        });
      },
      onError : function () {
        $timeout(function () {
          push.on('error', function (error) { $rootScope.$emit('$cordovaPushV5:errorOccurred', error);});
        });
      },
      register : function () {
        var q = $q.defer();
        if (push === undefined) {
          q.reject(new Error('init must be called before any other operation'));
        } else {
          push.on('registration', function (data) {
            q.resolve(data.registrationId);
          });
        }
        return q.promise;
      },
      unregister : function () {
        var q = $q.defer();
        if (push === undefined) {
          q.reject(new Error('init must be called before any other operation'));
        } else {
          push.unregister(function (success) {
            q.resolve(success);
          },function (error) {
            q.reject(error);
          });
        }
        return q.promise;
      },
      setBadgeNumber : function (number) {
        var q = $q.defer();
        if (push === undefined) {
          q.reject(new Error('init must be called before any other operation'));
        } else {
          push.setApplicationIconBadgeNumber(function (success) {
            q.resolve(success);
          }, function (error) {
            q.reject(error);
          }, number);
        }
        return q.promise;
      }
    };
  }]);

angular.module('plugins.toast', [])

  .factory('ToastService', ['$q', '$window', function ($q, $window) {

    return {
      
      showShortTop: function (message) {
        var q = $q.defer();
        $window.plugins.toast.showShortTop(message, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      showShortCenter: function (message) {
        var q = $q.defer();
        $window.plugins.toast.showShortCenter(message, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      showShortBottom: function (message) {
        var q = $q.defer();
        $window.plugins.toast.showShortBottom(message, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      showLongTop: function (message) {
        var q = $q.defer();
        $window.plugins.toast.showLongTop(message, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      showLongCenter: function (message) {
        var q = $q.defer();
        $window.plugins.toast.showLongCenter(message, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      showLongBottom: function (message) {
        var q = $q.defer();
        $window.plugins.toast.showLongBottom(message, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },


      show: function (message, duration, position) {
        var q = $q.defer();
        try{

          $window.plugins.toast.show(message, duration, position, function (response) {
             q.resolve(response);
          }, function (error) {
            q.reject(error);
          });

        }catch(e){

          alert(message)
        }
        
        return q.promise;
      }
    };

  }]);
geobarApp.factory('arService', ["$window", "$rootScope", "navigateService", "ToastService", "lugaresService", "eventosService", "Loading", "cordovaGeolocationService", function($window, $rootScope, navigateService, ToastService, lugaresService, eventosService, Loading,cordovaGeolocationService){

    var wikitudePlugin;
	var arExperienceUrl =  "www/AR/index.html";
    var requiredFeatures = [  "geo" ];
    var isDeviceSupported ;
    var startupConfiguration = { "camera_position": "back"  };
    var ya_iniciado = false;

	  return {
        
        set: function(){
            try{

                wikitudePlugin = cordova.require("com.wikitude.phonegap.WikitudePlugin.WikitudePlugin");
                wikitudePlugin.isDeviceSupported(this.onDeviceSupported, this.onDeviceNotSupported, requiredFeatures);
                wikitudePlugin.setOnUrlInvokeCallback(this.onURLInvoked);

            }catch(e){

               console.log('No se puede cargar el AR')
                
            }
        }, 



        hide: function (){
         
            if(ya_iniciado)  wikitudePlugin.close();
           
        },    

        onURLInvoked: function(url){
          
          var _url = decodeURIComponent(url);

          if(_url == 'architectsdk://action=closeWikitudePlugin') wikitudePlugin.close();
          else {

                var split_url = _url.split('architectsdk://action=');
                var method_parms_array = split_url[1].split(':');
                var item;


                if(method_parms_array[1] == 'lugar')  item = lugaresService.getDistancia()[method_parms_array[2]];
                if(method_parms_array[1] == 'evento') item = eventosService.getDistancia()[method_parms_array[2]];

                switch(method_parms_array[0]){

                    case 'dir':   
                        wikitudePlugin.close();
                        Loading.mostrar();

                        setTimeout(function (){

                           //  Loading.ocultar()
                             navigateService.go('mapa', {type:'dir', item: item}); 
                            $rootScope.$apply();
                         }, 100);
                        break;

                    case 'fav':   alert('FPO add favoritos'); break;
                    case 'info': 
                        wikitudePlugin.close();
                        $rootScope.$apply(); 
                        Loading.mostrar();
                         setTimeout(function (){
                             navigateService.go('detalle',  item); 
                        
                        }, 100);
                        break;

                }

          }

          Loading.ocultar();

        },  


        cerrar: function (){
              
        },

    		mostrar: function() {

    			if(isDeviceSupported){

                Loading.mostrar();

                var self = this;

                setTimeout(function (){        
                    
                    //if(!ya_iniciado){

                        wikitudePlugin.loadARchitectWorld(
                                                    self.onARExperienceLoadedSuccessful, 
                                                    self.onARExperienceLoadError,
                                                    arExperienceUrl,
                                                    requiredFeatures,
                                                    startupConfiguration
                                                 );
                        ya_iniciado = true;
                        //document.addEventListener("backbutton", self.backKeyDown);

                 // }  else wikitudePlugin.show();

                  var ultim_pos = cordovaGeolocationService.getUltimaPosicion();

                  if(ultim_pos != null){
                    self.setPosPoisEnWikitude(ultim_pos.coords)
                  }else{
                    navigator.geolocation.getCurrentPosition( self.onLocationUpdated,  self.onLocationError);
                  }

                  
                  

                 // navigator.geolocation.watchPosition(self.onLocationWatch,  function(){}, { timeout: 30000 });
                   
                  Loading.ocultar();

                }, 666);

            }else{
              alert('Este dispositivo no soporta AR');
            // console.log (this.escapeSpecialChars(angular.toJson(lugaresService.get())))
             console.log(this.escapeSpecialChars(angular.toJson(lugaresService.getDistancia())))

            }
            

        },  

        escapeSpecialChars: function($json){

            return $json.replace(/'/g, "´"); 
           
        },


        setPosPoisEnWikitude: function($coord){

           wikitudePlugin.setLocation($coord.latitude, $coord.longitude,  $coord.altitude, $coord.accuracy);
           wikitudePlugin.callJavaScript("setWorld('" + this.escapeSpecialChars(angular.toJson(lugaresService.getDistancia())) + "', '" + this.escapeSpecialChars(angular.toJson(eventosService.getDistancia())) + "');");
            
        }, 



        onLocationWatch: function(e) {

          //console.log(e.coords.latitude+'-'+e.coords.longitude+'-'+ e.coords.altitude+'-'+e.coords.accuracy)
          //wikitudePlugin.setLocation(e.coords.latitude, e.coords.longitude,  e.coords.altitude, e.coords.accuracy);
           
        },
       
        onLocationUpdated: function(e) {

           
            wikitudePlugin.setLocation(e.coords.latitude, e.coords.longitude,  e.coords.altitude, e.coords.accuracy);
            this.setPosPoisEnWikitude(e.coords)
        },

        onLocationError: function() {

            alert('No hemos enctroado tu ubicación global. Revisa tu configuración del GPS.');
            ToastService.show('No hemos enctroado tu ubicación global. Revisa tu configuración del GPS.', 'long', 'center');
        },

        onARExperienceLoadedSuccessful: function(loadedURL) {
          


        },
        
        onARExperienceLoadError: function(errorMessage) {
      
            ToastService.show('Ocurrio un error al cargar la realidad aumentada: ' + errorMessage, 'long', 'center');
        },

        onDeviceSupported:function(){
            isDeviceSupported = true
        },  

        onDeviceNotSupported:function(errorMessage){
            isDeviceSupported = false;
            alert(errorMessage);
        }


    };

}]);
/**
 * Angular Module relying on Apache Cordova Geolocation Plugin (cordova plugin add org.apache.cordova.Geolocation).
 */
var cordovaGeolocationModule = angular.module('cordovaGeolocationModule', []);

// Constants

/**
 * Constants service used in the whole module.
 */
cordovaGeolocationModule.constant('cordovaGeolocationConstants', {
    apiVersion: '1.0.0',
    cordovaVersion: '>=3.4.0'
});

// Services

/**
 * Main service relying on Apache Cordova Geolocation Plugin.
 */
cordovaGeolocationModule.factory('cordovaGeolocationService', ['$rootScope', '$log', 'cordovaGeolocationConstants', function ($rootScope, $log, cordovaGeolocationConstants) {
   
    var pocision = null;

    return {
        /**
         * Return the current API version.
         */
        apiVersion: function () {
            $log.debug('cordovaGeolocationService.apiVersion.');
            return cordovaGeolocationConstants.apiVersion;
        },

        /**
         * Return the cordova API version.
         */
        cordovaVersion: function () {
            $log.debug('cordovaGeolocationService.cordovaVersion.');
            return cordovaGeolocationConstants.cordovaVersion;
        },

        /**
         * Check the geolocation plugin availability.
         * @returns {boolean}
         */
        checkGeolocationAvailability: function () {
            $log.debug('cordovaGeolocationService.checkGeolocationAvailability.');
            if (!navigator.geolocation) {
                $log.warn('Geolocation API is not available.');
                return false;
            }
            return true;
        },

        /**
         * Returns the device's current position to the geolocationSuccess callback with a Position object as the parameter.
         * For more information: https://github.com/apache/cordova-plugin-geolocation/blob/master/doc/index.md#navigatorgeolocationgetcurrentposition
         */
        getCurrentPosition: function (successCallback, errorCallback, options) {
            $log.debug('cordovaGeolocationService.getCurrentPosition.');

            // Checking API availability
            if (!this.checkGeolocationAvailability()) {
             
                return;
            }

            // API call
            navigator.geolocation.getCurrentPosition(

                function (position) {

                    pocision = position;
                    $rootScope.$apply(successCallback(position));

                },
                function (error) {
                    $rootScope.$apply(errorCallback(error));
                },
                options
            );
        },


        getUltimaPosicion: function(){

            return pocision;

        }, 
        watchPosition: function () {
        
            // Checking API availability
            if (!this.checkGeolocationAvailability()) {
                return;
            }

            // API call
            return navigator.geolocation.watchPosition(

               function(position) {
                    

                     pocision = position;
                     $rootScope.position = position;
                     $rootScope.$apply()

                }, function onError(error) {
                  /*  alert('code: '    + error.code    + '\n' +
                          'message: ' + error.message + '\n');*/
                }
            );
        },

        /**
         * Stop watching for changes to the device's location referenced by the watchID parameter.
         * For more information: https://github.com/apache/cordova-plugin-geolocation/blob/master/doc/index.md#navigatorgeolocationclearwatch
         */
        clearWatch: function (watchID) {
            $log.debug('cordovaGeolocationService.clearWatch.');

            // Checking API availability
            if (!this.checkGeolocationAvailability()) {
                return;
            }

            // API call
            navigator.geolocation.clearWatch(watchID);
        }
    };
}]);



geobarApp.service('favService', ["$window", function($window){

    this.all = {};
   
    this.setAll = function(){ 
        try{
            this.all =  JSON.parse( $window.localStorage.getItem('favs'));
        }catch(e){}
        
    };

    this.getAll = function (){
        return  this.all 
    };

    this.getCantFavPoriId = function($idPoi) {
        return this.all['p_' + $idPoi];
    };

    this.setFav =  function($idPoi, $val) {

        var valor_actual = 0;
        if(!angular.isUndefined(this.all['p_' + $idPoi])){
            valor_actual =  parseInt(this.all['p_' + $idPoi]);
        }

        if($val == 0)  this.all['p_' + $idPoi] = valor_actual - 1;
        if($val == 1)  this.all['p_' + $idPoi] = valor_actual + 1;

    }

}]);


geobarApp.service('Loading',function(){
				
				var element = null;

				this.ocultar = function (){
					element.css('display','none');
				};

				this.mostrar = function(){
					element.css('display','block');
				};

				this.setInstancia = function ($elem){
					element = $elem;
				}
		
});


		


geobarApp.factory('lugaresService', ["$window", "cordovaGeolocationService", "DistancePostion", function($window, cordovaGeolocationService, DistancePostion){

	var all = [];
    var all_a_distancia = [];
    var distancia_cargada = 5000;

	return {

		setAll: function() {

            distancia_cargada = $window.localStorage.getItem('distancia');

            var bares = $window.localStorage.getItem('bares');
            var restaurantes = $window.localStorage.getItem('restaurantes');
            var cines = $window.localStorage.getItem('cines');
            var teatro = $window.localStorage.getItem('teatros');

            var array_entero =  JSON.parse( window.localStorage.getItem('json_lugares'));
            var cantidad_lugares = array_entero.length;
            all = [];
            all_a_distancia =  [];
            for(var i=0; i<cantidad_lugares; i++){

               if(array_entero[i].tipo == 1 && bares==1) this.addPoiToAll(array_entero[i]); 
               if(array_entero[i].tipo == 2 && restaurantes==1) this.addPoiToAll(array_entero[i]);
               if(array_entero[i].tipo == 3 && cines==1) this.addPoiToAll(array_entero[i]);
               if(array_entero[i].tipo == 5 && teatro==1) this.addPoiToAll(array_entero[i]);
              
            }

                all.sort(this.compare);


        },

        compare : function (a, b) {
        
          if(typeof(a.distancia) != 'undefined'){

              if (a.distancia < b.distancia)
                return -1;
              if (a.distancia > b.distancia)
                return 1;
          }
        
           return 0;

        }, 

     

        addPoiToAll:function ($poi){

            var my_pos = cordovaGeolocationService.getUltimaPosicion();
        
            if(my_pos!=null){

                var d = DistancePostion.enKilometros(my_pos.coords.latitude, my_pos.coords.longitude, $poi.lat, $poi.lon);
                $poi['distancia'] = d;
                
                if(d <= distancia_cargada){

                    var nuevoPoi = $poi;
                        nuevoPoi.name = nuevoPoi.name.replace(/"/g, "´");
                        nuevoPoi.dir = nuevoPoi.dir.replace(/"/g, "´");
                        all_a_distancia.push(nuevoPoi)

                }

                    

            }



            all.push($poi);  



        },

        getDistancia: function() {
            return all_a_distancia;
        },

        get: function() {
            return all;
        }
    };

}]);

geobarApp.factory('eventosService', ["cordovaGeolocationService", "DistancePostion", "$window", function(cordovaGeolocationService, DistancePostion, $window){

    var all = [];
    var all_a_distancia =   [];
    var distancia_cargada;

    return {
        
        setAll: function() {

            distancia_cargada = $window.localStorage.getItem('distancia');

            var array_entero  = JSON.parse( window.localStorage.getItem('json_eventos'));

            var cantidad = array_entero.length;
            all = [];
            all_a_distancia =   [];

            var my_pos = cordovaGeolocationService.getUltimaPosicion();
            
            for(var i=0; i<cantidad; i++){

                if(my_pos!=null){

                    var dist = DistancePostion.enKilometros(my_pos.coords.latitude, my_pos.coords.longitude, array_entero[i].lat, array_entero[i].lon);
                    array_entero[i]['distancia'] = dist
                   

                }

                var d = new Date();
                var hoy = new Date(d.getFullYear(),d.getMonth(), d.getDate());

                var array_pub_ini =  String(array_entero[i].pub_ini).split(' ');
                var fecha_pub_ini =  array_pub_ini[0].split('-');
                var pub_ini = new Date(Number(fecha_pub_ini[0]), Number(fecha_pub_ini[1])-1, Number(fecha_pub_ini[2]));

                var array_pub_fin =  String(array_entero[i].pub_fin).split(' ');
                var fecha_pub_fin =  array_pub_fin[0].split('-');
                var pub_fin = new Date(Number(fecha_pub_fin[0]), Number(fecha_pub_fin[1])-1, Number(fecha_pub_fin[2]));

                if(hoy.getTime() >= pub_ini.getTime() && hoy.getTime()<= pub_fin.getTime()){

                    all.push(array_entero[i]);  

                    if(dist <= distancia_cargada){
                        var nuevoPoi = array_entero[i];
                            nuevoPoi.name = nuevoPoi.name.replace(/"/g, "´");
                            nuevoPoi.dir = nuevoPoi.dir.replace(/"/g, "´");
                            all_a_distancia.push(nuevoPoi)
                    }
                }
            }
            if(my_pos!=null) {
                all.sort(this.compare);
            }

        },

        compare : function (a, b) {
    
              if(typeof(a.distancia) != 'undefined'){

                  if (a.distancia < b.distancia)
                    return -1;
                  if (a.distancia > b.distancia)
                    return 1;
              }
            
              return 0;

        }, 

        getDistancia: function() {
            return all_a_distancia;
        },
        get: function() {
            return all;
        }
    };

}]);


geobarApp.service('mapaService', function(){

	var map = null;
	this.init = function(){
		try{
			map = plugin.google.maps.Map.getMap();
            map.on(plugin.google.maps.event.MAP_READY, function () {
                map.setClickable( false );
            });
		}catch(e){}
            
	};


 	this.mostrar = function(){

 		var div = document.getElementById('map_canvas');
 			div.style.height = (window.innerHeight-80) + 'px';

 		if(map){
 			map.setVisible(true);
 			map.setClickable(true);
 			map.setDiv(div);
 			map.refreshLayout();

 			var onSuccess = function(location) {

				    map.setOptions({
					  'controls': {
					    'compass': true,
					    'myLocationButton': true,
					    'zoom': true // Only for Android
					  }
					});
				  
					map.animateCamera({
					  'target': location.latLng,
					  'duration': 2000
					}, function() {
					
					});

			};

			var onError = function(msg) {
			  alert("error: " + msg);
			};

			map.getMyLocation(onSuccess, onError);


 		}




 	};


 	this.ocultar = function (){

 		if(map) {
 			map.setVisible(false);
 			map.setClickable( false );
 			
 		}

 	}

});

geobarApp.service('navigateService', ["$log", "mapaService", "$rootScope", "$injector", function($log, mapaService, $rootScope, $injector){

	var en_seccion = '';
	var historia = [];
	var ultima_seccion_eliminada_de_historia = null;
	var self = this;

	this.status = 0;
 	//this.dir_animate  = 'enterSeccion';
 	this.secciones = {};
 	this.active_page = 'home';
	// // Here is your tag
 	document.addEventListener("backbutton", backKeyDown, false);



 	function backKeyDown(){

 		$rootScope.$apply(function(){
 			self.back();
 			var arService = $injector.get('arService');
 			arService.hide()
 			
 		})

 	}

 	this.esPrimerPage = function(){	
 		return (historia.length==1);
 	};

 	this.setSecciones = function ($key, $init){
 		
 		this.secciones[$key] = $init;
 		
 	};

	this.go = function (secc, obj, entra_a_historia, $dir_animate, $recargar){

		if(typeof obj == 'undefined') obj = null;
		if(typeof $recargar == 'undefined') $recargar = true;

		switch(secc){
			
			case 'home':
				
				if(!$recargar) go_execute(secc, obj, entra_a_historia, $dir_animate);
				else{
					this.secciones['home'](obj, function(){
						go_execute(secc, obj, entra_a_historia, $dir_animate)
					});
				}
				break;

			case 'detalle':
				
				if(!$recargar) go_execute(secc, obj, entra_a_historia, $dir_animate);
				else{
					this.secciones['detalle'](obj, function(){
						go_execute(secc, obj, entra_a_historia, $dir_animate)
					})
				}
				break;

			case 'mapa':
			
				if(!$recargar) go_execute(secc, obj, entra_a_historia, $dir_animate);
				else{
					go_execute(secc, obj, entra_a_historia, $dir_animate);
					this.secciones['mapa'](obj);
				}
				break;

			case 'lista':

				if(!$recargar) go_execute(secc, obj, entra_a_historia, $dir_animate);
				else{
					this.secciones['lista'](obj);
					go_execute(secc, obj, entra_a_historia, $dir_animate)
				}

				break;

			default:
				go_execute(secc, obj, entra_a_historia, $dir_animate);
				break;
		}

	};

	function go_execute(secc, obj, entra_a_historia, $dir_animate){

		if(typeof entra_a_historia == 'undefined') entra_a_historia = true;

		if(entra_a_historia) $rootScope.dirAnim = 'enter';
		else $rootScope.dirAnim = 'back';

			self.dir_animate  = $dir_animate;
			self.active_page = secc;
			
			if(historia.length>0){
				if(historia[historia.length-1].secc == secc) entra_a_historia = false;
			}

			if(entra_a_historia) historia.push({'secc': secc, 'obj': obj});
			en_seccion = secc;
			
			self.status++;

	}



	this.back = function (){

		ultima_seccion_eliminada_de_historia = historia[historia.length-1];
		if(historia.length>1) historia.pop();
		
			setTimeout(function(){
				ultima_seccion_eliminada_de_historia =  null;
			},100);

		var penultimo_elemento = historia[historia.length-1];	
		var recargar = false;
		if(penultimo_elemento.secc == 'mapa') recargar = true;

		this.go(penultimo_elemento.secc, penultimo_elemento.obj, false, 'backSeccion', recargar);
	};



	this.habilTranciosinar = function ($secc){
			
			if(ultima_seccion_eliminada_de_historia !=  null && ultima_seccion_eliminada_de_historia.secc == $secc) return true;
			var elem;
			if(historia.length>0){
				elem = historia[historia.length-1];
				if(elem.secc == $secc)  return true;
			}
			if(this.dir_animate == 'enterSeccion' && historia.length > 1){
				 elem = historia[historia.length-2];
				if(elem.secc == $secc)  return true;
			}
			return false;
	}

}]);

geobarApp.factory('regService', function () {

    var scope = null;
    var _callback_ok = null;
    var _callback_cancel = null;

    return {

        set: function ($scope) {

            scope = $scope


        },
        setCallbacks: function ($callback_ok, $callback_cancel) {
            _callback_ok = $callback_ok;
            _callback_cancel = $callback_cancel;
        },
        mostrar: function ($callback_ok, $callback_cancel) {
            _callback_ok = $callback_ok;
            _callback_cancel = $callback_cancel;
            scope.mostrar();
        },

        ocultar: function () {

            scope.mostrar()

        },

        callback_ok: function () {

            if (_callback_ok != null) _callback_ok()

        },

        callback_cancel: function () {

            if (_callback_cancel != null) _callback_cancel()

        }


    }

});



angular.module('Utils',[]) 

    .factory('DistancePostion', function(){
	   
       return {
            enKilometros:function(lat1, lon1, lat2, lon2) {

                var unit = "K";

                var radlat1 = Math.PI * lat1/180;
                var radlat2 = Math.PI * lat2/180;
             /*   var radlon1 = Math.PI * lon1/180;
                 var radlon2 = Math.PI * lon2/180;*/
                var theta = lon1-lon2;
                var radtheta = Math.PI * theta/180;
                var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
                dist = Math.acos(dist);
                dist = dist * 180/Math.PI;
                dist = dist * 60 * 1.1515;
                if (unit=="K") { dist = dist * 1.609344 }
                if (unit=="N") { dist = dist * 0.8684 }
                return dist
            }
    }}) 

    .directive('fadeIn', ["$timeout", function($timeout){
        return {
            restrict: 'A',
            link: function($scope, $element, attrs){
                $element.addClass("ng-hide-remove");
                $element.on('load', function() {
                    
                   $element.addClass("ng-hide-add");
                  
                });
            }
        }
    }]);



geobarApp.directive('botonBase', function() {
  return {
    
    restrict: 'AE', 
    scope: {
    		habil: '@',
    		accion: '&'
	},
    link: function(scope, elem){

    	if(typeof scope.habil == 'undefined') scope.habil = true;
    	elem.bind('touchstart', function(){
            if(!elem.hasClass('botonDisabled')){
                elem.addClass('botonOver');
              
                scope.$apply();

              try{
                if(device.platform == 'Android')  navigator.vibrate(50)    
            }catch(e){}
            
            }
    	});

    	elem.on('touchend', function(){
    		elem.removeClass('botonOver');
              scope.accion();
               scope.$apply()
    	})

        
    }
  };
});
geobarApp.directive('botonLista', function() {
  return {
    
    restrict: 'A', 
  
    link: function(scope, elem){

        function touch_move(){

             elem.removeClass('botonListaOver');
             elem.unbind('touchmove', touch_move)
        }
    	elem.bind('touchstart', function(){
            try{
                 elem.unbind('touchmove', touch_move);
                  elem.removeClass('botonListaOver')
            }catch(e){}
            elem.bind('touchmove', touch_move);
            elem.addClass('botonListaOver');

         try{
                if(device.platform == 'Android')  navigator.vibrate(50)    
            }catch(e){}
            
    	});

    	elem.on('touchend', function(){
          
    		  elem.removeClass('botonListaOver');
              elem.unbind('touchmove', touch_move)  
    	})

    }
  };
});
geobarApp.directive('botonSistema', function() {
  return {
    
    restrict: 'AE', 
    scope: {
    		habil: '@',
    		accion: '&',
    		imagen: '@',
    		txt:  '@'
			
	},

    template: "<img src='{{imagen}}' /><div  class='botonSistemaLabel ' ng-if=' txt!=undefined '>{{txt}}</div>", 

    link: function(scope, elem){

    	if(typeof scope.habil == 'undefined') scope.habil = true;

    	elem.bind('touchstart', function(){

            if(!elem.hasClass('botonDisabled')){
                elem.addClass('botonOver')
            }
            try{
                if(device.platform == 'Android')  navigator.vibrate(50)    
            }catch(e){}
            
    	});

    	elem.on('touchend', function(){
          
    		elem.removeClass('botonOver');
               scope.accion();
               scope.$apply()
    	})


    }
  };
});
geobarApp.directive('checkBox', function() {
  return {
    
    restrict: 'E', 
    scope: {
    	checked: '=',
        accion: '&'
	},
    template:'<div class="checkBox-bg"><div class="checkBox-selected" ng-show=" checked==1"></div></div>',

    link: function(scope, elem){

        elem.addClass('checkBox');


    	elem.on('touchend', function(){
         
    		 if(scope.checked == 1) scope.checked = 0;
             else scope.checked = 1;
             scope.$apply();
             scope.accion()
             
    	})

        
    }
  };
});
geobarApp.directive('elLoading', ["Loading", function(Loading){
				return {
					restrict:'E',
					template:'<div><img src="img/loader.png" /></div>',

					compile:function(element, attributes){
						
						Loading.setInstancia(element);

					}
				}
}]);
geobarApp.directive('imgLoader', function() {
  return {
    
    restrict: 'E', 
   
    scope:{

      imgurl: '=',
      hashfile: '@',
      itemid: '=',
      itemtipo: '='

    },

    template : '<img class="item-lista-img" ng-src="{{ imagen }}" />', 
    link: function(scope, elem){

       
        
        scope.$watch('hashfile', function(){
           scope.imagen = scope.imgurl + scope.hashfile



        });

        elem.children('img')[0].onerror = function () {
            scope.imagen = 'img/default/thumb_' + scope.itemtipo + '.png';
            scope.$apply()
        };
      

    }
  };
});


//server="{{}}" default=''
geobarApp.directive('touchSlider', ["$document", "Loading", "SERVER", "$log", "navigateService", function ($document, Loading, SERVER, $log, navigateService) {

    return {

        restrict: 'E',

        scope: {
            fotos: '=',
            urlImgs: '=',
            imgDefault: '@'

        },

        templateUrl: 'directivas/componentes/touchSlider/touchSlider.html',

        link: function (scope, elem, attrs) {

            scope.t = 0;
            scope.pagina = 0;
            scope.enx = 0;
            scope.server = SERVER;
            var offsetX = 0;
            var finX = 0;
            var ultimo_x = 0;
            var cien_porciento = window.innerWidth;

            scope.array_src_fotos = [];


            scope.$watch('fotos', function ($oldV, $newV) {

                scope.t = 0;
                scope.pagina = 0;
                scope.enx = 0;


                if (scope.fotos && typeof(scope.fotos[0]) == 'object') {

                    scope.array_src_fotos = [];

                    for (var obj_home in scope.fotos) {
                        scope.array_src_fotos.push(scope.fotos[obj_home].home_img)
                    }


                } else {

                    scope.array_src_fotos = scope.fotos
                }

            });

            elem.bind('touchstart', function (e) {

                scope.t = '0s';
                offsetX = (e.touches[0].clientX);
                ultimo_x = scope.enx;
                scope.$apply();

                addListener()

            });

            function doMove(e) {
                scope.enx = Math.round(e.touches[0].clientX - offsetX + ultimo_x);
                scope.$apply();

            }

            function doEnd(e) {

                finX = e.changedTouches[0].clientX;

                if ((finX - offsetX) > -10 && (finX - offsetX) < 10) {
                    scope.t = '.2s';
                    scope.enx = -(scope.pagina * cien_porciento);
                    ultimo_x = scope.enx;
                    scope.$apply();
                    removeListener();
                    if (scope.fotos[scope.pagina].home_og_poi > 0) {

                        var item = {};
                        item.id = scope.fotos[scope.pagina].home_og_poi;
                        setTimeout(function () {

                            navigateService.go('detalle', item);


                        }, 300)


                    }

                    return;
                }

                if (offsetX > finX) {
                    scope.pagina++
                } else {
                    scope.pagina--
                }

                if (scope.pagina < 0) scope.pagina = 0;
                if (scope.pagina >= scope.fotos.length) scope.pagina = scope.fotos.length - 1;

                scope.t = '.2s';
                scope.enx = -(scope.pagina * cien_porciento);
                ultimo_x = scope.enx;

                scope.$apply();
                removeListener()
            }

            function addListener() {

                $document.on('touchmove', doMove);
                $document.on('touchend', doEnd);
            }

            function removeListener() {
                $document.off('touchmove', doMove);
                $document.off('touchend', doEnd)
            }

        }
    };
}]);
geobarApp.directive('config', ["$rootScope", "ToastService", "regService", "$timeout", "$cordovaNetwork", "$window", "$http", "lugaresService", "eventosService", "SERVER", "Loading", function($rootScope, ToastService, regService, $timeout, $cordovaNetwork, $window, $http, lugaresService, eventosService, SERVER, Loading) {
  
  return {
    restrict: 'E',
    templateUrl: 'directivas/secciones/config/config.html',
	  scope:{caca:'@'},
    
    link:function (scope){
      
      scope.screen_alto = window.innerHeight;
	   	scope.visible = true;
      
      scope.chkBares = $window.localStorage.getItem('bares');
      scope.chkRestaurantes = $window.localStorage.getItem('restaurantes');
      scope.chkCines = $window.localStorage.getItem('cines');
      scope.chkTeatros = $window.localStorage.getItem('teatros');
      scope.distancia = $window.localStorage.getItem('distancia');
		  scope.chkPush = $window.localStorage.getItem('push');

      scope.$watch('distancia', function(){
     
        $window.localStorage.setItem('distancia',  scope.distancia);
           
        lugaresService.setAll();
        eventosService.setAll()
        
      });


      scope.setPush = function($clave, $val){

          var isOnline;

          try{
            
            isOnline = $cordovaNetwork.isOnline();

          }catch(e){

            isOnline = true;
          }

          if(isOnline) {
              
              scope.update($clave, $val);


          }else{
              
               ToastService.show('Debes conectarte a internet para llevar a cabo esta acción.', 'long', 'center');
             
               $timeout(function(){
                    scope.chkPush = $val==1?0:1;
               })
          }
          
      };

      scope.goReg = function (){

        regService.mostrar(function (){}, function (){})

      };

      scope.update = function ($clave, $val){
        

        if($clave=='push'){

          Loading.mostrar();

          var  req = {
               method: 'POST',
               url: SERVER + 'ws.php?method=setPush',
               headers: {
                 'Content-Type':  'application/x-www-form-urlencoded;charset=utf-8'
               },
               data: {token: $rootScope.pushToken, act: $val}
          };

          $http(req).then( 

              function(){
                  Loading.ocultar()

              }, function(){
                  Loading.ocultar()
                
              }
          );

          
        }

        $window.localStorage.setItem($clave,  $val);
        lugaresService.setAll();
        $rootScope.$broadcast('cambioListaLugares');


      }

      

    }
  

  };
}]);
geobarApp.directive('detalle', ["navigateService", "ToastService", "Loading", "$http", "SERVER", "$window", "$timeout", "regService", "favService", function(navigateService, ToastService, Loading, $http, SERVER, $window, $timeout, regService, favService) {
  
  return {
  	
    restrict: 'E',
    scope: {},
    templateUrl: 'directivas/secciones/detalle/detalle.html',

    link:function ($scope){
		
    	var _callback;
    	$scope.navigateService = navigateService;
    
    	$scope.goMapa = function (){
    		
    		
    	   if ($window.google && $window.google.maps) {  
              navigateService.go('mapa', {type:'item', item: $scope.item});
           }else{
              ToastService.show('Debes conectarte a internet para ver el mapa.', 'long', 'center');
           }
    	};
    	
    	$scope.goTel =  function (){

    		$window.open('tel://' + $scope.item.tel);
    		
    	};

    	$scope.goFav =  function (){


				var  userId= $window.localStorage.getItem('userId');
			
				if(userId==0){

					regService.mostrar(marcar_como_favorito, function (){})

				}else{

					marcar_como_favorito()

				}


    		

    	};

    	function marcar_como_favorito(){


    		var  userId = $window.localStorage.getItem('userId');

            var objSend = {
                userId : userId, 
                poiId: $scope.item.id
            };
            
            var  req = {
                 method: 'POST',
                 url: SERVER + 'ws.php?method=setFav',
                 headers: {
                   'Content-Type':  'application/x-www-form-urlencoded;charset=utf-8'
                 },
                 data: objSend
            };
            
            Loading.mostrar();

            $http(req).then( 

                function(data){
          			
                	$scope.item.mi_fav = data.data;

                	if(data.data == 0) $scope.item.favs = parseInt($scope.item.favs)  - 1;
                	if(data.data == 1) $scope.item.favs = parseInt($scope.item.favs)  + 1;
                	
                    favService.setFav($scope.item.id, data.data);

                	Loading.ocultar()

                }, function(){
                    
                    ToastService.show('Ocurrio un error. Revisa la conexión a internet', 'long', 'center');   
                    Loading.ocultar()
                  
                }
            )

    	}

        $scope.goFb = function (){

            window.open(SERVER + 'redirect/?u=' + encodeURIComponent($scope.item.fb), '_system');
            
        };

        $scope.goSite = function (){

            window.open(SERVER + 'redirect/?u=' + encodeURIComponent($scope.item.site), '_system');

        };

    	$scope.goDir =  function (){

    		
    	   if ($window.google && $window.google.maps) {  
              navigateService.go('mapa', {type:'dir', item: $scope.item}  )
           }else{
              ToastService.show('Debes conectarte a internet para ver el mapa.', 'long', 'center');
           }
    	};

		$scope._set = function ($obj, $callback){

			_callback = $callback;
		
			$scope.item = $obj;
			Loading.mostrar();

			if(!angular.isUndefined($scope.item.tipo)){
                
				$scope.url_img = 'img/default/';
				$scope.fotos_detalle = [];
				
			}else{
				$scope.fotos_detalle = [];

			}
			
			var  userId= $window.localStorage.getItem('userId');

			$http.get(SERVER+'ws.php?method=getDetalle&id=' + $scope.item.id + '&uid=' + userId).

			  success(function(data) {
					
					$scope.long_desc = '';	
					
					$scope.long_desc = data.long_desc;
					
					$timeout(function (){
						$scope.url_img = SERVER + 'pic/pois/';
						$scope.fotos_detalle =  data.fotos;
					}, 500);
					//
					$scope.item = data;
					Loading.ocultar();
					_callback()

			  }).
			  
			  error(function() {
			  		$scope.long_desc = '';	
			  		$scope.url_img = 'img/default/';
					$scope.fotos_detalle = [$scope.item.tipo + '.png'];
			  		Loading.ocultar();
			  		_callback()
			  });

		};


		navigateService.setSecciones('detalle', $scope._set)

    }

    


  };
}]);
geobarApp.directive('home', ["$window", "navigateService", "ToastService", "SERVER", "$http", "arService", function ($window, navigateService, ToastService, SERVER, $http, arService) {
    return {
        restrict: 'E',
        templateUrl: 'directivas/secciones/home/home.html',
        scope: {},


        link: function (scope) {

            var _callback;
            var ya_cargo = false;
            scope.navigateService = navigateService;
            scope.arService = arService;
            scope.server = SERVER;
            scope.url_img_home = SERVER + 'pic/home/';

            scope.realidad = function () {
                arService.mostrar()
            };

            scope._set = function ($obj, $callback) {
                _callback = $callback;

                if (ya_cargo) {
                    _callback();
                    return;
                }

                scope.goMapa = function () {

                    if ($window.google && $window.google.maps) {
                        scope.navigateService.go('mapa', {type: 'all'})
                    } else {
                        ToastService.show('Debes conectarte a internet para ver el mapa.', 'long', 'center');
                    }

                };

                $http.get(SERVER + 'ws.php?method=getHomeImagesApp').

                    success(function (data) {

                        scope.fotos_home = data;

                        ya_cargo = true;
                        if (scope.fotos_home.length == 0)  sin_fotos();
                        _callback()

                    }).

                    error(function () {
                        sin_fotos();
                        _callback();
                    });

            };


            function sin_fotos() {

                scope.url_img_home = 'img/default/';
                scope.fotos_home = ['home.png'];
            }

            navigateService.setSecciones('home', scope._set)


        }
    };
}]);
geobarApp.directive('lista', ["$window", "$log", "favService", "navigateService", "SCREEN_SIZE", "$filter", "$timeout", "lugaresService", "eventosService", function ($window, $log, favService, navigateService, SCREEN_SIZE, $filter, $timeout, lugaresService, eventosService) {

    return {
        restrict: 'E',
        templateUrl: 'directivas/secciones/lista/lista.html',

        link: function ($scope) {

            $scope.filtro = '';
            $scope.screen_alto = window.innerHeight;
            $scope.en_pagina = 10;
            $scope.favService = favService;

            $scope.$watch('favService.all', function () {
                $scope.favs = favService.getAll();
            });

            //console.log($scope.allFavs);
            // $scope.type = $obj

            var timer;
            var en_lista;
            $scope._set = function ($obj) {
                $scope.filtro = '';
                $scope.txtfiltro = '';
                document.querySelector('.listado').scrollTop = 0;
                $scope.en_pagina = 10;
                if ($obj == 'lugares')  $scope.array_items = lugaresService.get();
                if ($obj == 'eventos') $scope.array_items = eventosService.get();
                $scope.total = $scope.array_items.length;
                en_lista = $obj
            };

            $scope.$on('cambioListaLugares', function () {

                if (en_lista == 'lugares') $scope._set('lugares')

            });


            $scope.resetFiltro = function () {

                $scope.filtro = '';
                $scope.txtfiltro = '';

            };


            navigateService.setSecciones('lista', $scope._set);


            $scope.cargarMas = function () {

                setTimeout(function () {
                    $scope.en_pagina += 10;
                    $scope.$apply()
                }, 300);

            };


            $scope.keyDownFilter = function () {
                $timeout.cancel(timer);
                timer = $timeout(function () {
                    $scope.filtro = $scope.txtfiltro;
                    document.querySelector('.listado').scrollTop = 0;
                    $scope.en_pagina = 10;
                }, 300);
            };


            $scope.$watch('filtro', function () {

                try {
                    $scope.total = $filter('filter')($scope.array_items, $scope.filtro).length
                } catch (e) {
                }

            });


            var holder_scrolleable = angular.element(document.querySelector('.listado'));
            holder_scrolleable.on("scroll", function () {

                var _scrollTop = this.scrollTop; // por donde va el scroll
                var _offsetHeight = this.offsetHeight; // alto de la mascara
                var _scrollHeight = this.scrollHeight; // alto del contenido
                $scope.enscroll = _scrollTop;
                $scope.altoholder = _offsetHeight;
                if ((_offsetHeight + _scrollTop) > _scrollHeight - 300) {
                    $scope.en_pagina += 10;
                }
                $scope.$apply();

            });


            $scope.enscroll = 0;
            $scope.altoholder = 1000;

            $scope.select_item = function ($item) {
                $timeout(function () {
                    navigateService.go('detalle', $item);
                }, 250);


            }
        }
    };
}])

    .directive('itemLista', ["SERVER", function (SERVER) {
        return {
            restrict: 'A',
            scope: {

                item: '=',
                index: '@',
                enscroll: '=',
                altoholder: '=',
                siempreVisible: '@',
                favs: '='
            },

            templateUrl: 'directivas/secciones/lista/itemLista.html',
            link: function ($scope) {

                $scope.img_url = SERVER + 'pic/pois/';

                $scope.getFav = function ($fav) {
                    if (angular.isUndefined($fav)) return 0;
                    return $fav;
                }

            }

        };

    }]);


    geobarApp.directive('mapa', ["$cordovaNetwork", "$q", "favService", "$timeout", "$rootScope", "navigateService", "ToastService", "lugaresService", "eventosService", "DistancePostion", "cordovaGeolocationService", "$window", function($cordovaNetwork, $q, favService, $timeout,$rootScope, navigateService, ToastService, lugaresService, eventosService, DistancePostion, cordovaGeolocationService, $window) {
      

      function load_script() {

           document.getElementById('gMapsScripts').innerHTML = '';

            var s = document.createElement('script'); // use global document since Angular's $document is weak
            s.id = 'gMaps' ;
            s.type = "text/javascript";
            s.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBxU2t0W9wQFwPnGmoXNI-eg95zCy_PiJI&callback=initMap';
            document.getElementById('gMapsScripts').appendChild(s);

       }

      function lazyLoadApi() {

          var deferred = $q.defer();
          $window.initMap = function () {
              $timeout(function(){

                 deferred.resolve();

              })
          };
        
          load_script();

          return deferred.promise;
      }


      return {

        restrict: 'AE',
        scope: {},
        templateUrl: 'directivas/secciones/mapa/mapa.html',

        link: function (scope){

            var map;
            var mapa_ya_inicializado = false;
            var array_markers =  [];
            var myMarker  = null;
            var bounds;
            var mapa_type = '';
            var directionsDisplay;
            var directionsService;
            var map_circle;
            scope.favService = favService;

            scope.itemSelected  = null;
            scope.navigateService = navigateService;

            scope.goInfo = function (){

              navigateService.go('detalle',  scope.itemSelected);
                
            };
            scope.goDir =  function (){

              navigateService.go('mapa', {type:'dir', item: scope.itemSelected});
              
            };
            scope.goTel =  function (){

              $window.open('tel://' + scope.itemSelected.tel);
              
            };

            scope.$watch('favService.all', function () {
                scope.favs = favService.getAll();
            });

            function initialize() {
                
                    var mapOptions = {
                        zoom: 15,
                        center: new google.maps.LatLng(-34.397, 150.644),
                        mapTypeControl:false,
                        streetViewControl:false,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        styles:[
                                  {
                                      featureType: "poi",
                                      elementType: "labels",
                                      stylers: [
                                            { visibility: "off" }
                                      ]
                                  }
                               ]

                    };

                    directionsService = new google.maps.DirectionsService();
                    directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers:true});
                    map = new google.maps.Map(document.getElementById('el-mapa'),  mapOptions);
                 
                    mapa_ya_inicializado = true
            }


            function _dispose(){
                for (var i in array_markers) {
                  array_markers[i].setMap(null);
                }
                if(myMarker != null) myMarker.setMap(null);

                directionsDisplay.setMap(null);
            }


            function agregar_marcador($item){

                var tipo;
                switch($item.tipo){
                  case '1': tipo='bar'; break;
                  case '2': tipo='restaurant'; break;
                  case '3': tipo='cine' ;break;
                  case '4': tipo='evento' ;break;
                  case '5': tipo='teatro' ;break;
                }

                marker = new google.maps.Marker({
                  position: new google.maps.LatLng($item.lat, $item.lon),
                  map: map,
                  optimized: true, 
                  icon: {
                           url:'img/markers/' + tipo + '.png',
                           scaledSize: new google.maps.Size(30, 30),
                           anchor: new google.maps.Point(15,15)
                          }
                });

                array_markers.push(marker);
              
                if(mapa_type == 'all'){
                  
      
                  google.maps.event.addListener(marker, 'click', function(e) {

                    scope.itemSelected = $item;
                    scope.$apply();
                   
                  });


                }
               
                bounds.extend(marker.getPosition());
            }

           scope.$on('cambioListaLugares', function(){
               _dispose();
           }); 


           scope._set = function ($obj){       


                bounds = new google.maps.LatLngBounds(); 
                mapa_type = $obj.type;
                scope.itemSelected = null; 
             
                var my_pos = cordovaGeolocationService.getUltimaPosicion();

                $timeout(function (){
                    
                    _dispose();

                    array_markers = [];
 
                    if(my_pos != null){
                        
                        myMarker = new google.maps.Marker({
                                        position: new google.maps.LatLng(my_pos.coords.latitude, my_pos.coords.longitude),
                                        optimized: true, 
                                        icon: {
                                               url:'img/markers/yo.png',
                                                 scaledSize: new google.maps.Size(20, 30),
                                                 anchor: new google.maps.Point(10,30)
                                              }, 
                                        map: map });

                        bounds.extend(myMarker.getPosition());

                    }

                    try{
                         map_circle.setMap(null)
                    }catch(e){}


                    if(mapa_type == 'dir'){

                        agregar_marcador($obj.item);
                        directionsDisplay.setMap(map);
                        var stroke_color;
                        if($obj.item.tipo ==1) stroke_color = '#ff99ff';
                        if($obj.item.tipo ==2) stroke_color = '#EFE923';
                        if($obj.item.tipo ==3) stroke_color = '#28eaa4';
                        if($obj.item.tipo ==4) stroke_color = '#00ccff';
                        if($obj.item.tipo ==5) stroke_color = '#9282A8';

                        directionsDisplay.setOptions({polylineOptions:{strokeColor: stroke_color, strokeOpacity: 0.7, strokeWeight: 8}})
                        
                    } 
                    
                    if(mapa_type == 'item'){
                        
                        agregar_marcador($obj.item)  
              
                    } 

                    if(mapa_type == 'all'){

                        if(my_pos != null){

                           
                           var circleOptions = {
                              strokeColor: '#FF0000',
                              strokeOpacity: 0.1,
                              strokeWeight: 2,
                              fillColor: '#FF0000',
                              fillOpacity: 0.04,
                              map: map,
                              center: myMarker.getPosition(),
                              radius: ($window.localStorage.getItem('distancia')*1000)
                            };

                            map_circle = new google.maps.Circle(circleOptions);

                            //lugares
                            var lugares = lugaresService.getDistancia();
                            var cantidad_lugares = lugares.length;
                            for (i = 0; i < cantidad_lugares; i++) {  
                            
                            //  if(lugares[i].distancia <= $window.localStorage.getItem('distancia'))
                               agregar_marcador(lugares[i])
                              
                            }
                            
                            //eventos
                            var eventos = eventosService.getDistancia();
                            var cantidad_eventos = eventos.length;
                            for (i = 0; i < cantidad_eventos; i++) {  
                              //if(eventos[i].distancia <= $window.localStorage.getItem('distancia'))
                                agregar_marcador(eventos[i] )
                            }

                        } else {

                            ToastService.show('No hemos enctroado tu ubicación.', 'long', 'center');
                            map.setCenter(new google.maps.LatLng(-34.905754, -56.194327));
                            
                        }

                    }
                    
               
                   
                    $timeout(function (){
                       
                        google.maps.event.trigger(map, 'resize');

                        if($obj.type == 'item'){
                           map.setZoom(16);
                           map.setCenter(new google.maps.LatLng($obj.item.lat, $obj.item.lon));
                        }
                        else if(my_pos != null && $obj.type == 'dir'){
                             map.fitBounds(bounds);
                             ver_ruta()
                        }
                        else if(my_pos != null){

                            map.fitBounds(bounds);
                        }
                        else {}

                    }, 100);

                }, 600);
            };


            function ver_ruta() {
                
                  var request = {
                      origin: myMarker.getPosition(),
                      destination: array_markers[0].getPosition(),
                      
                      travelMode: google.maps.TravelMode['DRIVING']
                  };
                  directionsService.route(request, function(response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                       directionsDisplay.setDirections(response);
                    }
                    console.log(status)
                  });
            }

           


            // lazy load maps           

            function init_with_lazy_load($callback){

              if ($window.google && $window.google.maps) {

                     if(!mapa_ya_inicializado) initialize();
                     if($callback != null)  $callback()
                } else {

                    lazyLoadApi().then(function () {
                        console.log('promise resolved');
                        if ($window.google && $window.google.maps) {
                           if(!mapa_ya_inicializado) initialize();
                           if($callback != null)  $callback()
                        } else {
                          console.log('gmaps not loaded');
                        }
                    }, function () {
                        console.log('promise rejected');
                    });
                }

            }
            


            $rootScope.$on('$cordovaNetwork:online', function(){

                init_with_lazy_load(null);

            });

            init_with_lazy_load(null);
            navigateService.setSecciones('mapa', scope._set);

            
        }
      };
    }]);
geobarApp.directive('reg', ["ToastService", "$rootScope", "Loading", "$http", "SERVER", "regService", "$cordovaDevice", "$cordovaFacebook", function(ToastService, $rootScope,  Loading,  $http, SERVER , regService, $cordovaDevice,  $cordovaFacebook) {
  

  return {

    restrict: 'EA',
    templateUrl: 'directivas/secciones/reg/reg.html',

  	scope : {
    
          showRegistro: '='

    },
      
    link: function (scope){

      regService.set(scope);

  	  scope.visible = true;
  	  scope.chkEdad = false;

      scope.reg = {};
      scope.reg.sexo = 'female';
      scope.sexoF = true;
      
      scope.fb = function (){


       $cordovaFacebook.login(["public_profile", "email", "user_friends"])

        .then(function() {

            Loading.mostrar();
            $cordovaFacebook.api("me?fields=id,first_name,last_name,email,gender", ["public_profile"])
            .then(function(data) {

              var objSend = {

                  uid : data.id, 
                  nombre: data.first_name, 
                  apellido: data.last_name, 
                  email: data.email,
                  sexo: data.gender

              };
       
               objSend.uuid = 'dev';
               objSend.platform = 'browser';
               try{
                objSend.uuid =  $cordovaDevice.getUUID();
                objSend.platform = $cordovaDevice.getPlatform()
               }catch(e){}

            var  req = {
                 method: 'POST',
                 url: SERVER + 'ws.php?method=saveUser',
                 headers: {
                   'Content-Type':  'application/x-www-form-urlencoded;charset=utf-8'
                 },
                 data: objSend
            };

            $http(req).then( 

                function(data){
                    
                    window.localStorage.setItem('userId',  parseInt(data.data));
                    scope.userId = parseInt(data.data);
                    $rootScope.userId = parseInt(data.data);
                    ToastService.show('Gracias por registrarte', 'long', 'center');   
                    Loading.ocultar();
                    scope.showRegistro = false;
                    regService.callback_ok()


                }, function(){
                    Loading.ocultar()
                  
                }
            );
                 
            }, function () {
               Loading.ocultar();
            });

        }, function (error) {
         
        });



      };
      scope.mostrar = function(){

        scope.showRegistro = true
         
      };

      scope.omitir = function(){

        scope.showRegistro = false;

        regService.callback_cancel()
  
          
      };

      scope.elegirSexo = function ($sexo){

        scope.reg.sexo = $sexo;

        if($sexo=='male'){
          scope.sexoF = false;
          scope.sexoM = true
        }else{
          scope.sexoF = true;
          scope.sexoM = false
        }

        scope.$apply();

      };

      scope.enviar = function(){



          scope.errorNombre = false;
          scope.errorApellido = false;
          scope.errorEmail = false;
          scope.errorCi = false;
          scope.errorNac = false;
         
          if(scope.reg.nombre == '' || angular.isUndefined(scope.reg.nombre))  scope.errorNombre = true;
          if(scope.reg.apellido == '' || angular.isUndefined(scope.reg.apellido))  scope.errorApellido = true;
          if(scope.reg.email == '' || angular.isUndefined(scope.reg.email) || !validateEmail(scope.reg.email))  scope.errorEmail = true;
          if(scope.reg.ci == '' || angular.isUndefined(scope.reg.ci) || !validate_ci(scope.reg.ci))  scope.errorCi = true;

          if( angular.isUndefined(scope.reg.nac))  scope.errorNac = true;

          if(getAge(scope.reg.nac)<18){

             ToastService.show('Debes ser mayor de 18 años para registrarte.', 'long', 'center');
              return;

          }else if(scope.errorNombre || scope.errorApellido || scope.errorEmail ||  scope.errorCi || scope.errorNac) {

              ToastService.show('Hay campos incompletos o erroneos', 'long', 'center');
              return;
          }

          scope.reg.fehca_nac = scope.reg.nac.getFullYear()  + '-' + (scope.reg.nac.getMonth()+1) + '-' + scope.reg.nac.getDate();

          scope.reg.uuid = 'dev';
          scope.reg.platform = 'browser';

          try{
            scope.reg.uuid =  $cordovaDevice.getUUID();
            scope.reg.platform = $cordovaDevice.getPlatform()
          }catch(e){}

          var  req = {
               method: 'POST',
               url: SERVER + 'ws.php?method=saveUser',
               headers: {
                 'Content-Type':  'application/x-www-form-urlencoded;charset=utf-8'
               },
               data: scope.reg
          };
          
          Loading.mostrar();

          $http(req).then( 

              function(data){
                  
                  window.localStorage.setItem('userId',  parseInt(data.data));
                  scope.userId = parseInt(data.data);
                 
                  ToastService.show('Gracias por registrarte', 'long', 'center');   
                  Loading.ocultar();
                  scope.showRegistro = false;
                  regService.callback_ok();
                  $rootScope.userId = parseInt(data.data);

              }, function(){
                  Loading.ocultar()
                
              }
          );

   };



    function validateEmail(email) { 
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function getAge(dateString) 
    {
        var today = new Date();
        var birthDate = dateString;
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age--;
        }
        return age;
    }



      function validation_digit(ci){
         var a = 0;
        var i = 0;
        if(ci.length <= 6){
          for(i = ci.length; i < 7; i++){
            ci = '0' + ci;
          }
        }
        for(i = 0; i < 7; i++){
          a += (parseInt("2987634"[i]) * parseInt(ci[i])) % 10;
        }
        if(a%10 === 0){
          return 0;
        }else{
          return 10 - a % 10;
        }
      }

      
      function validate_ci(ci){
        ci = clean_ci(ci);
        var dig = ci[ci.length - 1];
        ci = ci.replace(/[0-9]$/, '');
        return (dig == validation_digit(ci));
      }



      function clean_ci(ci){
        return ci.replace(/\D/g, '');
      }



    }
   
  };
}]); 
geobarApp.directive('taxi', function() {

  return {
    restrict: 'EA',
    templateUrl: 'directivas/secciones/taxi/taxi.html',
	
    
    link:function (scope){

	   	scope.visible = true;

      scope.voyentaxi = function(){

         try{
          if(device.platform=="Android")  window.open('https://play.google.com/store/apps/details?id=info.voyentaxi', '_system');
          else                            window.open('https://itunes.apple.com/us/app/voy-en-taxi/id939470696?l=es&ls=1&mt=8', '_system');
         }catch(e){}
        
      };

      scope.easytaxi = function(){
          try{
            if(device.platform=="Android")  window.open('https://play.google.com/store/apps/details?id=br.com.easytaxi&referrer=adjust_reftag%3DcR558mQRWJVnN', '_system');
            else                            window.open('https://itunes.apple.com/app/id567264775?mt=8', '_system');
          }catch(e){}
      }

    }
   

  };
}); 
geobarApp.directive('terms', ["ToastService", function(ToastService) {
  

  return {
    restrict: 'EA',
      templateUrl: 'directivas/secciones/terms/terms.html',

     scope : {
		aceptoTerms: '='
	 },
    
    link:function (scope){

	  scope.visible = true;
	  scope.chkEdad = false;

      scope.aceptar = function(){

      	if( scope.chkEdad == 1){

      		window.localStorage.setItem('aceptoTerms', 1);
      		scope.aceptoTerms = 1;
      		
      	}else{

      		ToastService.show('Debes ser mayor de 18 años para usar esta aplicación.', 'long', 'center');

      	}
        	
      }


    }
   

  };
}]); 
/*
;window.onerror = function(message, file, line) {
  var error = [];
  error.push('---[error]');
  if (typeof message == "object") {
    var keys = Object.keys(message);
    keys.forEach(function(key) {
      error.push('[' + key + '] ' + message[key]);
    });
  } else {
    error.push(line + ' at ' + file);
    error.push(message);
  }
  alert(error.join("\n"));
};
*/

var app = {

    initialize: function() {
        
        this.bindEvents();
       
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    onDeviceReady: function() { 
      
        try{

            ///window.open = cordova.InAppBrowser.open;
           // StatusBar.hide();
            angular.bootstrap(document, ["geobarApp"]);

          }catch(e){

            angular.bootstrap(document, ["geobarApp"]);

        }

    }
};




app.initialize();