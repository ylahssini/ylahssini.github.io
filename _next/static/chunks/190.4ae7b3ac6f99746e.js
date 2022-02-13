(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[190],{3717:function(t,e,n){"use strict";n.d(e,{T2:function(){return ut}});const i={toVector:(t,e)=>(void 0===t&&(t=e),Array.isArray(t)?t:[t,t]),add:(t,e)=>[t[0]+e[0],t[1]+e[1]],sub:(t,e)=>[t[0]-e[0],t[1]-e[1]],addTo(t,e){t[0]+=e[0],t[1]+=e[1]},subTo(t,e){t[0]-=e[0],t[1]-=e[1]}};function s(t,e,n){return 0===e||Math.abs(e)===1/0?Math.pow(t,5*n):t*e*n/(e+n*t)}function r(t,e,n,i=.15){return 0===i?function(t,e,n){return Math.max(e,Math.min(t,n))}(t,e,n):t<e?-s(e-t,n-e,i)+e:t>n?+s(t-n,n-e,i)+n:t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}const u={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function h(t){return t?t[0].toUpperCase()+t.slice(1):""}const l=["gotpointercapture","lostpointercapture"];function d(t){let e=t.substring(2).toLowerCase();const n=!!~e.indexOf("passive");n&&(e=e.replace("passive",""));const i=l.includes(e)?"capturecapture":"capture",s=!!~e.indexOf(i);return s&&(e=e.replace("capture","")),{device:e,capture:s,passive:n}}function f(t){return"touches"in t}function p(t){return f(t)?function(t){return"touchend"===t.type||"touchcancel"===t.type?t.changedTouches:t.targetTouches}(t)[0]:t}function v(t,e){const n=e.clientX-t.clientX,i=e.clientY-t.clientY,s=(e.clientX+t.clientX)/2,r=(e.clientY+t.clientY)/2,o=Math.hypot(n,i);return{angle:-180*Math.atan2(n,i)/Math.PI,distance:o,origin:[s,r]}}function m(t){return function(t){return Array.from(t.touches).filter((e=>{var n,i;return e.target===t.currentTarget||(null===(n=t.currentTarget)||void 0===n||null===(i=n.contains)||void 0===i?void 0:i.call(n,e.target))}))}(t).map((t=>t.identifier))}function g(t,e){const[n,i]=Array.from(t.touches).filter((t=>e.includes(t.identifier)));return v(n,i)}function b(t){const e=p(t);return f(t)?e.identifier:e.pointerId}function _(t){const e=p(t);return[e.clientX,e.clientY]}function y(t){let{deltaX:e,deltaY:n,deltaMode:i}=t;return 1===i?(e*=40,n*=40):2===i&&(e*=800,n*=800),[e,n]}function w(t,...e){return"function"===typeof t?t(...e):t}function S(){}function k(...t){return 0===t.length?S:1===t.length?t[0]:function(){let e;for(const n of t)e=n.apply(this,arguments)||e;return e}}function O(t,e){return Object.assign({},e,t||{})}class A{constructor(t,e,n){this.ctrl=t,this.args=e,this.key=n,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(t){this.ctrl.state[this.key]=t}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:t,shared:e,ingKey:n,args:i}=this;e[n]=t._active=t.active=t._blocked=t._force=!1,t._step=[!1,!1],t.intentional=!1,t._movement=[0,0],t._distance=[0,0],t._direction=[0,0],t._delta=[0,0],t._bounds=[[-1/0,1/0],[-1/0,1/0]],t.args=i,t.axis=void 0,t.memo=void 0,t.elapsedTime=0,t.direction=[0,0],t.distance=[0,0],t.overflow=[0,0],t._movementBound=[!1,!1],t.velocity=[0,0],t.movement=[0,0],t.delta=[0,0],t.timeStamp=0}start(t){const e=this.state,n=this.config;e._active||(this.reset(),this.computeInitial(),e._active=!0,e.target=t.target,e.currentTarget=t.currentTarget,e.lastOffset=n.from?w(n.from,e):e.offset,e.offset=e.lastOffset),e.startTime=e.timeStamp=t.timeStamp}computeValues(t){const e=this.state;e._values=t,e.values=this.config.transform(t)}computeInitial(){const t=this.state;t._initial=t._values,t.initial=t.values}compute(t){const{state:e,config:n,shared:s}=this;e.args=this.args;let o=0;if(t&&(e.event=t,n.preventDefault&&t.cancelable&&e.event.preventDefault(),e.type=t.type,s.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,s.locked=!!document.pointerLockElement,Object.assign(s,function(t){const e={};if("buttons"in t&&(e.buttons=t.buttons),"shiftKey"in t){const{shiftKey:n,altKey:i,metaKey:s,ctrlKey:r}=t;Object.assign(e,{shiftKey:n,altKey:i,metaKey:s,ctrlKey:r})}return e}(t)),s.down=s.pressed=s.buttons%2===1||s.touches>0,o=t.timeStamp-e.timeStamp,e.timeStamp=t.timeStamp,e.elapsedTime=e.timeStamp-e.startTime),e._active){const t=e._delta.map(Math.abs);i.addTo(e._distance,t)}const[a,c]=e._movement,[u,h]=n.threshold,{_step:l,values:d}=e;if(n.hasCustomTransform?(!1===l[0]&&(l[0]=Math.abs(a)>=u&&d[0]),!1===l[1]&&(l[1]=Math.abs(c)>=h&&d[1])):(!1===l[0]&&(l[0]=Math.abs(a)>=u&&Math.sign(a)*u),!1===l[1]&&(l[1]=Math.abs(c)>=h&&Math.sign(c)*h)),e.intentional=!1!==l[0]||!1!==l[1],!e.intentional)return;const f=[0,0];if(n.hasCustomTransform){const[t,e]=d;f[0]=!1!==l[0]?t-l[0]:0,f[1]=!1!==l[1]?e-l[1]:0}else f[0]=!1!==l[0]?a-l[0]:0,f[1]=!1!==l[1]?c-l[1]:0;if(this.intent&&this.intent(f),(e._active&&!e._blocked||e.active)&&(e.first=e._active&&!e.active,e.last=!e._active&&e.active,e.active=s[this.ingKey]=e._active,t)){e.first&&("bounds"in n&&(e._bounds=w(n.bounds,e)),this.setup&&this.setup()),e.movement=f;const t=e.offset;if(this.computeOffset(),!e.last||o>32){e.delta=i.sub(e.offset,t);const n=e.delta.map(Math.abs);i.addTo(e.distance,n),e.direction=e.delta.map(Math.sign),e._direction=e._delta.map(Math.sign),!e.first&&o>0&&(e.velocity=[n[0]/o,n[1]/o])}}const[p,v]=e.offset,[[m,g],[b,_]]=e._bounds;e.overflow=[p<m?-1:p>g?1:0,v<b?-1:v>_?1:0],e._movementBound[0]=!!e.overflow[0]&&(!1===e._movementBound[0]?e._movement[0]:e._movementBound[0]),e._movementBound[1]=!!e.overflow[1]&&(!1===e._movementBound[1]?e._movement[1]:e._movementBound[1]);const y=e._active&&n.rubberband||[0,0];e.offset=function(t,[e,n],[i,s]){const[[o,a],[c,u]]=t;return[r(e,o,a,i),r(n,c,u,s)]}(e._bounds,e.offset,y),this.computeMovement()}emit(){const t=this.state,e=this.shared,n=this.config;if(t._active||this.clean(),(t._blocked||!t.intentional)&&!t._force&&!n.triggerAllEvents)return;const i=this.handler(c(c(c({},e),t),{},{[this.aliasKey]:t.values}));void 0!==i&&(t.memo=i)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}class E extends A{constructor(...t){super(...t),o(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=i.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=i.sub(this.state.offset,this.state.lastOffset)}intent(t){this.state.axis=this.state.axis||function([t,e]){const n=Math.abs(t)-Math.abs(e);return n>0?"x":n<0?"y":void 0}(t),this.state._blocked=(this.config.lockDirection||!!this.config.axis)&&!this.state.axis||!!this.config.axis&&this.config.axis!==this.state.axis,this.state._blocked||(this.config.axis||this.config.lockDirection)&&function(t,e){switch(e){case"x":t[1]=0;break;case"y":t[0]=0}}(t,this.state.axis)}}const I=t=>t,M={enabled:(t=!0)=>t,preventDefault:(t=!1)=>t,triggerAllEvents:(t=!1)=>t,rubberband(t=0){switch(t){case!0:return[.15,.15];case!1:return[0,0];default:return i.toVector(t)}},from:t=>"function"===typeof t?t:null!=t?i.toVector(t):void 0,transform(t,e,n){const i=t||n.shared.transform;return this.hasCustomTransform=!!i,i||I},threshold:t=>i.toVector(t,0)};const T=c(c({},M),{},{axis(t,e,{axis:n}){if(this.lockDirection="lock"===n,!this.lockDirection)return n},bounds(t={}){if("function"===typeof t)return e=>T.bounds(t(e));if("current"in t)return()=>t.current;if("function"===typeof HTMLElement&&t instanceof HTMLElement)return t;const{left:e=-1/0,right:n=1/0,top:i=-1/0,bottom:s=1/0}=t;return[[e,n],[i,s]]}}),x={ArrowRight:(t=1)=>[10*t,0],ArrowLeft:(t=1)=>[-10*t,0],ArrowUp:(t=1)=>[0,-10*t],ArrowDown:(t=1)=>[0,10*t]};const C="undefined"!==typeof window&&window.document&&window.document.createElement;function D(){return C&&"ontouchstart"in window||C&&window.navigator.maxTouchPoints>1}const P={isBrowser:C,gesture:function(){try{return"constructor"in GestureEvent}catch(t){return!1}}(),touch:D(),touchscreen:D(),pointer:C&&"onpointerdown"in window,pointerLock:C&&"exitPointerLock"in window.document},j=c(c({},T),{},{pointerLock(t,e,{pointer:{lock:n=!1,touch:i=!1}={}}){return this.useTouch=i&&P.touch,n&&P.pointerLock},device(t,e){return this.useTouch?"touch":this.pointerLock?"mouse":P.pointer?"pointer":P.touch?"touch":"mouse"},preventScroll(t=!1,e,{preventScrollAxis:n="y"}){return n&&(this.preventScrollAxis=n),!!P.touchscreen&&("number"===typeof t?t:!!t&&250)},pointerCapture(t,e,{pointer:{capture:n=!0,buttons:i=1}={}}){return this.pointerButtons=i,!this.pointerLock&&"pointer"===this.device&&n},threshold(t,e,{filterTaps:n=!1,tapsThreshold:s=3,axis:r}){const o=i.toVector(t,n?s:r?1:0);return this.filterTaps=n,this.tapsThreshold=s,o},swipe({velocity:t=.5,distance:e=50,duration:n=250}={}){return{velocity:this.transform(i.toVector(t)),distance:this.transform(i.toVector(e)),duration:n}},delay(t=0){switch(t){case!0:return 180;case!1:return 0;default:return t}}});const L=c(c({},M),{},{useTouch:(t,e,{pointer:{touch:n=!1}={}})=>n&&P.touch,device(t,e,n){if(n.shared.target&&!P.touch&&P.gesture)return"gesture";if(this.useTouch)return"touch";if(P.touchscreen){if(P.pointer)return"pointer";if(P.touch)return"touch"}},bounds(t,e,{scaleBounds:n={},angleBounds:i={}}){const s=t=>{const e=O(w(n,t),{min:-1/0,max:1/0});return[e.min,e.max]},r=t=>{const e=O(w(i,t),{min:-1/0,max:1/0});return[e.min,e.max]};return"function"!==typeof n&&"function"!==typeof i?[s(),r()]:t=>[s(t),r(t)]},threshold(t,e,n){this.lockDirection="lock"===n.axis;return i.toVector(t,this.lockDirection?[.1,3]:0)}});const K=c(c({},T),{},{mouseOnly:(t=!0)=>t});const B=T;const V=T;const z=c(c({},T),{},{mouseOnly:(t=!0)=>t}),R=new Map,U=new Map;function H(t){R.set(t.key,t.engine),U.set(t.key,t.resolver)}const q={key:"drag",engine:class extends E{constructor(...t){super(...t),o(this,"ingKey","dragging")}reset(){super.reset();const t=this.state;t._pointerId=void 0,t._pointerActive=!1,t._keyboardActive=!1,t._preventScroll=!1,t._delayed=!1,t.swipe=[0,0],t.tap=!1,t.canceled=!1,t.cancel=this.cancel.bind(this)}setup(){const t=this.state;if(t._bounds instanceof HTMLElement){const e=t._bounds.getBoundingClientRect(),n=t.currentTarget.getBoundingClientRect(),i={left:e.left-n.left+t.offset[0],right:e.right-n.right+t.offset[0],top:e.top-n.top+t.offset[1],bottom:e.bottom-n.bottom+t.offset[1]};t._bounds=T.bounds(i)}}cancel(){const t=this.state;t.canceled||(t.canceled=!0,t._active=!1,setTimeout((()=>{this.compute(),this.emit()}),0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(t){const e=this.config,n=this.state;(null==t.buttons||(Array.isArray(e.pointerButtons)?e.pointerButtons.includes(t.buttons):-1===e.pointerButtons||e.pointerButtons===t.buttons))&&(this.ctrl.setEventIds(t),e.pointerCapture&&t.target.setPointerCapture(t.pointerId),n._pointerActive||(this.start(t),this.setupPointer(t),n._pointerId=b(t),n._pointerActive=!0,this.computeValues(_(t)),this.computeInitial(),e.preventScroll?this.setupScrollPrevention(t):e.delay>0?this.setupDelayTrigger(t):this.startPointerDrag(t)))}startPointerDrag(t){const e=this.state;e._active=!0,e._preventScroll=!0,e._delayed=!1,this.compute(t),this.emit()}pointerMove(t){const e=this.state,n=this.config;if(!e._pointerActive)return;if(e.type===t.type&&t.timeStamp===e.timeStamp)return;const s=b(t);if(e._pointerId&&s!==e._pointerId)return;const r=_(t);return document.pointerLockElement===t.target?e._delta=[t.movementX,t.movementY]:(e._delta=i.sub(r,e._values),this.computeValues(r)),i.addTo(e._movement,e._delta),this.compute(t),e._delayed?(this.timeoutStore.remove("dragDelay"),e.active=!1,void this.startPointerDrag(t)):n.preventScroll&&!e._preventScroll?e.axis?e.axis===n.preventScrollAxis||"xy"===n.preventScrollAxis?(e._active=!1,void this.clean()):(this.timeoutStore.remove("startPointerDrag"),void this.startPointerDrag(t)):void 0:void this.emit()}pointerUp(t){this.ctrl.setEventIds(t);try{this.config.pointerCapture&&t.target.hasPointerCapture(t.pointerId)&&t.target.releasePointerCapture(t.pointerId)}catch(o){0}const e=this.state,n=this.config;if(!e._pointerActive)return;const i=b(t);if(e._pointerId&&i!==e._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(t);const[s,r]=e._distance;if(e.tap=s<=n.tapsThreshold&&r<=n.tapsThreshold,e.tap&&n.filterTaps)e._force=!0;else{const[t,i]=e.direction,[s,r]=e.velocity,[o,a]=e.movement,[c,u]=n.swipe.velocity,[h,l]=n.swipe.distance,d=n.swipe.duration;e.elapsedTime<d&&(Math.abs(s)>c&&Math.abs(o)>h&&(e.swipe[0]=t),Math.abs(r)>u&&Math.abs(a)>l&&(e.swipe[1]=i))}this.emit()}pointerClick(t){this.state.tap||(t.preventDefault(),t.stopPropagation())}setupPointer(t){const e=this.config;let n=e.device;e.pointerLock&&t.currentTarget.requestPointerLock(),e.pointerCapture||(this.eventStore.add(this.sharedConfig.window,n,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,n,"end",this.pointerUp.bind(this)),this.eventStore.add(this.sharedConfig.window,n,"cancel",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(t){this.state._preventScroll&&t.cancelable&&t.preventDefault()}setupScrollPrevention(t){!function(t){"persist"in t&&"function"===typeof t.persist&&t.persist()}(t),this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1}),this.eventStore.add(this.sharedConfig.window,"touch","end",this.clean.bind(this),{passive:!1}),this.eventStore.add(this.sharedConfig.window,"touch","cancel",this.clean.bind(this),{passive:!1}),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScroll,t)}setupDelayTrigger(t){this.state._delayed=!0,this.timeoutStore.add("dragDelay",this.startPointerDrag.bind(this),this.config.delay,t)}keyDown(t){const e=x[t.key];if(e){const n=this.state,s=t.shiftKey?10:t.altKey?.1:1;n._delta=e(s),this.start(t),n._keyboardActive=!0,i.addTo(n._movement,n._delta),this.compute(t),this.emit()}}keyUp(t){t.key in x&&(this.state._keyboardActive=!1,this.setActive(),this.compute(t),this.emit())}bind(t){const e=this.config.device;t(e,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(t(e,"change",this.pointerMove.bind(this)),t(e,"end",this.pointerUp.bind(this)),t(e,"cancel",this.pointerUp.bind(this)),t("lostPointerCapture","",this.pointerUp.bind(this))),t("key","down",this.keyDown.bind(this)),t("key","up",this.keyUp.bind(this)),this.config.filterTaps&&t("click","",this.pointerClick.bind(this),{capture:!0,passive:!1})}},resolver:j},X={key:"hover",engine:class extends E{constructor(...t){super(...t),o(this,"ingKey","hovering")}enter(t){this.config.mouseOnly&&"mouse"!==t.pointerType||(this.start(t),this.computeValues(_(t)),this.compute(t),this.emit())}leave(t){if(this.config.mouseOnly&&"mouse"!==t.pointerType)return;const e=this.state;if(!e._active)return;e._active=!1;const n=_(t);e._movement=e._delta=i.sub(n,e._values),this.computeValues(n),this.compute(t),e.delta=e.movement,this.emit()}bind(t){t("pointer","enter",this.enter.bind(this)),t("pointer","leave",this.leave.bind(this))}},resolver:z},Y={key:"move",engine:class extends E{constructor(...t){super(...t),o(this,"ingKey","moving")}move(t){this.config.mouseOnly&&"mouse"!==t.pointerType||(this.state._active?this.moveChange(t):this.moveStart(t),this.timeoutStore.add("moveEnd",this.moveEnd.bind(this)))}moveStart(t){this.start(t),this.computeValues(_(t)),this.compute(t),this.computeInitial(),this.emit()}moveChange(t){if(!this.state._active)return;const e=_(t),n=this.state;n._delta=i.sub(e,n._values),i.addTo(n._movement,n._delta),this.computeValues(e),this.compute(t),this.emit()}moveEnd(t){this.state._active&&(this.state._active=!1,this.compute(t),this.emit())}bind(t){t("pointer","change",this.move.bind(this)),t("pointer","leave",this.moveEnd.bind(this))}},resolver:K},N={key:"pinch",engine:class extends A{constructor(...t){super(...t),o(this,"ingKey","pinching"),o(this,"aliasKey","da")}init(){this.state.offset=[1,0],this.state.lastOffset=[1,0],this.state._pointerEvents=new Map}reset(){super.reset();const t=this.state;t._touchIds=[],t.canceled=!1,t.cancel=this.cancel.bind(this),t.turns=0}computeOffset(){const{type:t,movement:e,lastOffset:n}=this.state;this.state.offset="wheel"===t?i.add(e,n):[(1+e[0])*n[0],e[1]+n[1]]}computeMovement(){const{offset:t,lastOffset:e}=this.state;this.state.movement=[t[0]/e[0],t[1]-e[1]]}intent(t){const e=this.state;if(!e.axis){const n=30*Math.abs(t[0])-Math.abs(t[1]);n<0?e.axis="angle":n>0&&(e.axis="scale")}this.config.lockDirection&&("scale"===e.axis?t[1]=0:"angle"===e.axis&&(t[0]=0))}cancel(){const t=this.state;t.canceled||setTimeout((()=>{t.canceled=!0,t._active=!1,this.compute(),this.emit()}),0)}touchStart(t){this.ctrl.setEventIds(t);const e=this.state,n=this.ctrl.touchIds;if(e._active&&e._touchIds.every((t=>n.has(t))))return;if(n.size<2)return;this.start(t),e._touchIds=Array.from(n).slice(0,2);const i=g(t,e._touchIds);this.pinchStart(t,i)}pointerStart(t){if(null!=t.buttons&&t.buttons%2!==1)return;this.ctrl.setEventIds(t),t.target.setPointerCapture(t.pointerId);const e=this.state,n=e._pointerEvents,i=this.ctrl.pointerIds;if(e._active&&Array.from(n.keys()).every((t=>i.has(t))))return;if(n.size<2&&n.set(t.pointerId,t),e._pointerEvents.size<2)return;this.start(t);const s=v(...Array.from(n.values()));this.pinchStart(t,s)}pinchStart(t,e){this.state.origin=e.origin,this.computeValues([e.distance,e.angle]),this.computeInitial(),this.compute(t),this.emit()}touchMove(t){if(!this.state._active)return;const e=g(t,this.state._touchIds);this.pinchMove(t,e)}pointerMove(t){const e=this.state._pointerEvents;if(e.has(t.pointerId)&&e.set(t.pointerId,t),!this.state._active)return;const n=v(...Array.from(e.values()));this.pinchMove(t,n)}pinchMove(t,e){const n=this.state,i=n._values[1],s=e.angle-i;let r=0;Math.abs(s)>270&&(r+=Math.sign(s)),this.computeValues([e.distance,e.angle-360*r]),n.origin=e.origin,n.turns=r,n._movement=[n._values[0]/n._initial[0]-1,n._values[1]-n._initial[1]],this.compute(t),this.emit()}touchEnd(t){this.ctrl.setEventIds(t),this.state._active&&this.state._touchIds.some((t=>!this.ctrl.touchIds.has(t)))&&(this.state._active=!1,this.compute(t),this.emit())}pointerEnd(t){const e=this.state;this.ctrl.setEventIds(t);try{t.target.releasePointerCapture(t.pointerId)}catch(n){}e._pointerEvents.has(t.pointerId)&&e._pointerEvents.delete(t.pointerId),e._active&&e._pointerEvents.size<2&&(e._active=!1,this.compute(t),this.emit())}gestureStart(t){t.cancelable&&t.preventDefault();const e=this.state;e._active||(this.start(t),this.computeValues([t.scale,t.rotation]),e.origin=[t.clientX,t.clientY],this.compute(t),this.emit())}gestureMove(t){if(t.cancelable&&t.preventDefault(),!this.state._active)return;const e=this.state;this.computeValues([t.scale,t.rotation]),e.origin=[t.clientX,t.clientY];const n=e._movement;e._movement=[t.scale-1,t.rotation],e._delta=i.sub(e._movement,n),this.compute(t),this.emit()}gestureEnd(t){this.state._active&&(this.state._active=!1,this.compute(t),this.emit())}wheel(t){t.ctrlKey&&(this.state._active?this.wheelChange(t):this.wheelStart(t),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this)))}wheelStart(t){this.start(t),this.wheelChange(t)}wheelChange(t){"uv"in t||t.cancelable&&t.preventDefault();const e=this.state;e._delta=[-y(t)[1]/36*e.offset[0],0],i.addTo(e._movement,e._delta),this.state.origin=[t.clientX,t.clientY],this.compute(t),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(t){const e=this.config.device;e?(t(e,"start",this[e+"Start"].bind(this)),t(e,"change",this[e+"Move"].bind(this)),t(e,"end",this[e+"End"].bind(this)),t(e,"cancel",this[e+"End"].bind(this))):t("wheel","",this.wheel.bind(this),{passive:!1})}},resolver:L},G={key:"scroll",engine:class extends E{constructor(...t){super(...t),o(this,"ingKey","scrolling")}scroll(t){this.state._active||this.start(t),this.scrollChange(t),this.timeoutStore.add("scrollEnd",this.scrollEnd.bind(this))}scrollChange(t){t.cancelable&&t.preventDefault();const e=this.state,n=function(t){var e,n;const{scrollX:i,scrollY:s,scrollLeft:r,scrollTop:o}=t.currentTarget;return[null!==(e=null!==i&&void 0!==i?i:r)&&void 0!==e?e:0,null!==(n=null!==s&&void 0!==s?s:o)&&void 0!==n?n:0]}(t);e._delta=i.sub(n,e._values),i.addTo(e._movement,e._delta),this.computeValues(n),this.compute(t),this.emit()}scrollEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(t){t("scroll","",this.scroll.bind(this))}},resolver:B},W={key:"wheel",engine:class extends E{constructor(...t){super(...t),o(this,"ingKey","wheeling")}wheel(t){this.state._active||this.start(t),this.wheelChange(t),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this))}wheelChange(t){const e=this.state;e._delta=y(t),i.addTo(e._movement,e._delta);const[n,s]=e.overflow,[r,o]=e._delta,[a,c]=e._direction;(n<0&&r>0&&a<0||n>0&&r<0&&a>0)&&(e._movement[0]=e._movementBound[0]),(s<0&&o>0&&c<0||s>0&&o<0&&c>0)&&(e._movement[1]=e._movementBound[1]),this.compute(t),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(t){t("wheel","",this.wheel.bind(this))}},resolver:V};var Q=n(7294);function Z(t,e){if(null==t)return{};var n,i,s=function(t,e){if(null==t)return{};var n,i,s={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}const $={target(t){if(t)return()=>"current"in t?t.current:t},enabled:(t=!0)=>t,window:(t=(P.isBrowser?window:void 0))=>t,eventOptions:({passive:t=!0,capture:e=!1}={})=>({passive:t,capture:e}),transform:t=>t},F=["target","eventOptions","window","enabled","transform"];function J(t={},e){const n={};for(const[i,s]of Object.entries(e))switch(typeof s){case"function":n[i]=s.call(n,t[i],i,t);break;case"object":n[i]=J(t[i],s);break;case"boolean":s&&(n[i]=t[i])}return n}class tt{constructor(t){o(this,"_listeners",[]),this._ctrl=t}add(t,e,n,i,s){const r=function(t,e=""){const n=u[t];return t+(n&&n[e]||e)}(e,n),o=c(c({},this._ctrl.config.shared.eventOptions),s);t.addEventListener(r,i,o),this._listeners.push((()=>t.removeEventListener(r,i,o)))}clean(){this._listeners.forEach((t=>t())),this._listeners=[]}}class et{constructor(){o(this,"_timeouts",new Map)}add(t,e,n=140,...i){this.remove(t),this._timeouts.set(t,window.setTimeout(e,n,...i))}remove(t){const e=this._timeouts.get(t);e&&window.clearTimeout(e)}clean(){this._timeouts.forEach((t=>{window.clearTimeout(t)})),this._timeouts.clear()}}class nt{constructor(t){o(this,"gestures",new Set),o(this,"_targetEventStore",new tt(this)),o(this,"gestureEventStores",{}),o(this,"gestureTimeoutStores",{}),o(this,"handlers",{}),o(this,"config",{}),o(this,"pointerIds",new Set),o(this,"touchIds",new Set),o(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),function(t,e){e.drag&&it(t,"drag");e.wheel&&it(t,"wheel");e.scroll&&it(t,"scroll");e.move&&it(t,"move");e.pinch&&it(t,"pinch");e.hover&&it(t,"hover")}(this,t)}setEventIds(t){f(t)?this.touchIds=new Set(m(t)):"pointerId"in t&&("pointerup"===t.type||"pointercancel"===t.type?this.pointerIds.delete(t.pointerId):"pointerdown"===t.type&&this.pointerIds.add(t.pointerId))}applyHandlers(t,e){this.handlers=t,this.nativeHandlers=e}applyConfig(t,e){this.config=function(t,e){const n=t,{target:i,eventOptions:s,window:r,enabled:o,transform:a}=n,u=Z(n,F),h={shared:J({target:i,eventOptions:s,window:r,enabled:o,transform:a},$)};if(e){const t=U.get(e);h[e]=J(c({shared:h.shared},u),t)}else for(const l in u){const t=U.get(l);t&&(h[l]=J(c({shared:h.shared},u[l]),t))}return h}(t,e)}clean(){this._targetEventStore.clean();for(const t of this.gestures)this.gestureEventStores[t].clean(),this.gestureTimeoutStores[t].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...t){const e=this.config.shared,n=e.eventOptions,i={};let s;if(e.target&&(s=e.target(),!s))return;const r=st(i,n,!!s);if(e.enabled){for(const e of this.gestures)if(this.config[e].enabled){new(R.get(e))(this,t,e).bind(r)}for(const e in this.nativeHandlers)r(e,"",(n=>this.nativeHandlers[e](c(c({},this.state.shared),{},{event:n,args:t}))),void 0,!0)}for(const o in i)i[o]=k(...i[o]);if(!s)return i;for(const o in i){const{device:t,capture:e,passive:n}=d(o);this._targetEventStore.add(s,t,"",i[o],{capture:e,passive:n})}}}function it(t,e){t.gestures.add(e),t.gestureEventStores[e]=new tt(t),t.gestureTimeoutStores[e]=new et}const st=(t,e,n)=>(i,s,r,o={},a=!1)=>{var c,l;const d=null!==(c=o.capture)&&void 0!==c?c:e.capture,f=null!==(l=o.passive)&&void 0!==l?l:e.passive;let p=a?i:function(t,e="",n=!1){const i=u[t],s=i&&i[e]||e;return"on"+h(t)+h(s)+(n?"Capture":"")}(i,s,d);n&&f&&(p+="Passive"),t[p]=t[p]||[],t[p].push(r)},rt=/^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;function ot(t,e,n,i,s,r){if(!t.has(n))return;if(!R.has(i))return void 0;const o=n+"Start",a=n+"End";s[i]=t=>{let i;return t.first&&o in e&&e[o](t),n in e&&(i=e[n](t)),t.last&&a in e&&e[a](t),i},r[i]=r[i]||{}}function at(t,e){const[n,i,s]=function(t){const e={},n={},i=new Set;for(let s in t)rt.test(s)?(i.add(RegExp.lastMatch),n[s]=t[s]):e[s]=t[s];return[n,e,i]}(t),r={};return ot(s,n,"onDrag","drag",r,e),ot(s,n,"onWheel","wheel",r,e),ot(s,n,"onScroll","scroll",r,e),ot(s,n,"onPinch","pinch",r,e),ot(s,n,"onMove","move",r,e),ot(s,n,"onHover","hover",r,e),{handlers:r,config:e,nativeHandlers:i}}function ct(t,e={},n,i){const s=Q.useMemo((()=>new nt(t)),[]);if(s.applyHandlers(t,i),s.applyConfig(e,n),Q.useEffect(s.effect.bind(s)),Q.useEffect((()=>s.clean.bind(s)),[]),void 0===e.target)return s.bind.bind(s)}function ut(t,e={}){return([q,N,G,W,Y,X].forEach(H),function(t,e={}){const{handlers:n,nativeHandlers:i,config:s}=at(t,e);return ct(n,s,void 0,i)})(t,e)}},8566:function(t,e,n){"use strict";var i=n(930),s=n(5696),r=n(7980);var o,a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};i.get||i.set?Object.defineProperty(e,n,i):e[n]=t[n]}return e.default=t,e}(n(7294)),c=(o=n(2717))&&o.__esModule?o:{default:o},u=n(5809),h=n(639);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),i.forEach((function(e){l(t,e,n[e])}))}return t}var f=new Set,p=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var v=new Map([["default",function(t){var e=t.root,n=t.src,i=t.width,s=t.quality;0;return"".concat(e,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(s||75)}],["imgix",function(t){var e=t.root,n=t.src,i=t.width,s=t.quality,r=new URL("".concat(e).concat(E(n))),o=r.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||i.toString()),s&&o.set("q",s.toString());return r.href}],["cloudinary",function(t){var e=t.root,n=t.src,i=t.width,s=t.quality,r=["f_auto","c_limit","w_"+i,"q_"+(s||"auto")].join(",")+"/";return"".concat(e).concat(r).concat(E(n))}],["akamai",function(t){var e=t.root,n=t.src,i=t.width;return"".concat(e).concat(E(n),"?imwidth=").concat(i)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function m(t){return void 0!==t.default}var g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||u.imageConfigDefault,b=g.deviceSizes,_=g.imageSizes,y=g.loader,w=g.path,S=(g.domains,[].concat(r(b),r(_)));function k(t){var e=t.src,n=t.unoptimized,i=t.layout,s=t.width,o=t.quality,a=t.sizes,c=t.loader;if(n)return{src:e,srcSet:void 0,sizes:void 0};var u=function(t,e,n){if(n&&("fill"===e||"responsive"===e)){for(var i,s=/(^|\s)(1?\d?\d)vw/g,o=[];i=s.exec(n);i)o.push(parseInt(i[2]));if(o.length){var a=.01*Math.min.apply(Math,o);return{widths:S.filter((function(t){return t>=b[0]*a})),kind:"w"}}return{widths:S,kind:"w"}}return"number"!==typeof t||"fill"===e||"responsive"===e?{widths:b,kind:"w"}:{widths:r(new Set([t,2*t].map((function(t){return S.find((function(e){return e>=t}))||S[S.length-1]})))),kind:"x"}}(s,i,a),h=u.widths,l=u.kind,d=h.length-1;return{sizes:a||"w"!==l?a:"100vw",srcSet:h.map((function(t,n){return"".concat(c({src:e,quality:o,width:t})," ").concat("w"===l?t:n+1).concat(l)})).join(", "),src:c({src:e,quality:o,width:h[d]})}}function O(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function A(t){var e=v.get(y);if(e)return e(d({root:w},t));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(y))}function E(t){return"/"===t[0]?t.slice(1):t}b.sort((function(t,e){return t-e})),S.sort((function(t,e){return t-e}))},639:function(t,e,n){"use strict";var i=n(5696);Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){var e=t.rootRef,n=t.rootMargin,c=t.disabled||!o,u=s.useRef(),h=s.useState(!1),l=i(h,2),d=l[0],f=l[1],p=s.useState(e?e.current:null),v=i(p,2),m=v[0],g=v[1],b=s.useCallback((function(t){u.current&&(u.current(),u.current=void 0),c||d||t&&t.tagName&&(u.current=function(t,e,n){var i=function(t){var e=t.rootMargin||"",n=a.get(e);if(n)return n;var i=new Map,s=new IntersectionObserver((function(t){t.forEach((function(t){var e=i.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)}))}),t);return a.set(e,n={id:e,observer:s,elements:i}),n}(n),s=i.id,r=i.observer,o=i.elements;return o.set(t,e),r.observe(t),function(){o.delete(t),r.unobserve(t),0===o.size&&(r.disconnect(),a.delete(s))}}(t,(function(t){return t&&f(t)}),{root:m,rootMargin:n}))}),[c,m,n,d]);return s.useEffect((function(){if(!o&&!d){var t=r.requestIdleCallback((function(){return f(!0)}));return function(){return r.cancelIdleCallback(t)}}}),[d]),s.useEffect((function(){e&&g(e.current)}),[e]),[b,d]};var s=n(7294),r=n(6286),o="undefined"!==typeof IntersectionObserver;var a=new Map},5809:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.imageConfigDefault=e.VALID_LOADERS=void 0;e.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];e.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},5675:function(t,e,n){n(8566)},2640:function(t,e,n){"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,s,r=[],o=!0,a=!1;try{for(n=n.call(t);!(o=(i=n.next()).done)&&(r.push(i.value),!e||r.length!==e);o=!0);}catch(c){a=!0,s=c}finally{try{o||null==n.return||n.return()}finally{if(a)throw s}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,{Z:function(){return s}})}}]);