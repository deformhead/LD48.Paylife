!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=13)}([function(t,e,n){"use strict";n.r(e),function(t){var i=n(2);n.d(e,"destroy",function(){return i.a});var r=n(3);n.d(e,"render",function(){return r.a});var s=n(4);n.d(e,"setup",function(){return s.a});var o=n(5);n.d(e,"start",function(){return o.a});var a=n(6);n.d(e,"update",function(){return a.a}),void 0!==t.hot&&t.hot.accept(["./destroy.js","./render.js","./setup.js","./start.js","./update.js"])}.call(this,n(1)(t))},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t,e,n){"use strict";function i(){console.log("destroy loading scene"),console.log("-------"),delete this.state.redirect}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";function i(){this.context.fillStyle="#181a1f",this.context.fillRect(0,0,this.size.width,this.size.height),this.context.font="16px Courier New",this.context.textAlign="start",this.context.textBaseline="top",this.context.fillStyle="#6b717d",this.context.fillText("/ Theatre",8,8),this.context.fillStyle="#d7dae0",this.context.fillText("$ preloading assets...",8,32),!1===this.preloading&&(this.context.fillText("$ preloading completed",8,56),this.context.fillText("$ loading demo scene...",8,80))}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";function i(){console.log("setup loading scene")}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";function i(){console.log("start loading scene"),this.state.redirect=!1}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";function i(){var t=this;!1===this.preloading&&!1===this.state.redirect&&(setTimeout(function(){t.load("demo")},3e3),this.state.redirect=!0)}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";n.r(e),function(t){var i=n(8);n.d(e,"destroy",function(){return i.a});var r=n(9);n.d(e,"render",function(){return r.a});var s=n(10);n.d(e,"setup",function(){return s.a});var o=n(11);n.d(e,"start",function(){return o.a});var a=n(12);n.d(e,"update",function(){return a.a}),void 0!==t.hot&&t.hot.accept(["./destroy.js","./render.js","./setup.js","./start.js","./update.js"])}.call(this,n(1)(t))},function(t,e,n){"use strict";function i(){console.log("destroy demo scene"),console.log("-------")}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";function i(){this.context.fillStyle="#d7dae0",this.context.fillRect(0,0,this.size.width,this.size.height)}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";function i(){console.log("setup demo scene")}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";function i(){console.log("start demo scene")}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";function i(){}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";n.r(e);var i={};n.r(i),n.d(i,"loading",function(){return o}),n.d(i,"demo",function(){return a});function r(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s=[].concat(r([]),r([]),r([])),o=n(0),a=n(7);new function(t){var e=t.assets,n=t.container,i=t.scenes,r=t.size,s=t.expose||!1,o=t.framerate||60,a=t.sharp||!1,c=t.speed||1,u=null,l=!1;this.preloading=!1,this.scenes=i,this.size=r,this.state={},this.version="0.26.0",this.load=function(t){u=t},this.restart=function(){l=!0},function(){var t=this,i=new function(t,e,n,i){var r=document.createElement("canvas"),s=r.getContext(t),o=window.devicePixelRatio||1;r.setAttribute("id",e),r.setAttribute("height",o*i),r.setAttribute("width",o*n),r.style.height=i+"px",r.style.width=n+"px",s.scale(o,o),this.context=s,this.element=r,this.sharp=function(){this.element.style.imageRendering="-moz-crisp-edges",this.element.style.imageRendering="-webkit-crisp-edges",this.element.style.imageRendering="crisp-edges",this.element.style.imageRendering="pixelated",this.context.imageSmoothingEnabled=!1}}("2d","theatre",this.size.width,this.size.height),r=new function(t,e,n){var i=[],r={current:!1,duration:0,easing:null,elapsed:0,force:{x:0,y:0},shift:{x:0,y:0}};this.position={x:0,y:0},this.size={width:e,height:n},this.add=function(t){for(var e=0,n=i.length-1;n>=0;n-=1){var r=i[n];if(t.destination.z>=r.destination.z){e=n+1;break}}i.splice(e,0,t)},this.idle=function(){r={current:!1,duration:0,easing:null,elapsed:0,force:{x:0,y:0},shift:{x:0,y:0}}},this.render=function(){var e=this;i.forEach(function(n){var i=n.destination,s=n.frame,o=n.source;!0===e.visible(i.x,i.y,s.width,s.height)&&t.drawImage(o,s.x,s.y,s.width,s.height,i.x-(e.position.x+r.shift.x),i.y-(e.position.y+r.shift.y),i.width,i.height)}),i=[]},this.set=function(t,e){this.position.x=t,this.position.y=e},this.shake=function(t,e,n){var i=t.x,s=t.y;r.force={x:i,y:s},r.current=!0,r.duration=e,r.easing=n},this.update=function(t){if(!1!==r.current)if(r.elapsed+t>=r.duration)this.idle();else{r.elapsed+=t;var e=r.easing(r.elapsed/r.duration),n=2*Math.random()*Math.PI;r.shift.x=Math.round(Math.cos(n)*r.force.x*e),r.shift.y=Math.round(Math.sin(n)*r.force.y*e)}},this.visible=function(t,e,n,i){var s=this.position.x+r.shift.x,o=this.position.y+r.shift.y,a=this.size.width,c=this.size.height;return!(t+n<=s||t>=s+a||e+i<=o||e>=o+c)}}(i.context,this.size.width,this.size.height);!0===a&&i.sharp(),n.appendChild(i.element),this.container=n,this.context=i.context,this.element=i.element,this.camera=r,this.assets={},this.delta={},this.delta.render=0,this.delta.update=0,this.scene=this.scenes.loading,this.scene.setup.call(this),this.scene.start.call(this);var s=new function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:60,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=0,i=null,r=null;this.framerate=t,this.speed=e,this.render=function(t){var e=Date.now();null!==i&&t(e-i),requestAnimationFrame(this.render.bind(this,t)),i=e},this.update=function(t){var e=Date.now();for(null!==r&&(n+=e-r);n>=1e3/this.framerate/this.speed;)n-=1e3/this.framerate/this.speed,t(1e3/this.framerate);r=e,setTimeout(this.update.bind(this,t),1e3/Math.max(this.framerate,60))}}(o,c);s.update(function(e){return t.delta.update=e,t.scene.update.call(t),t.camera.update(e),!0===l?(t.scene.start.call(t),void(l=!1)):null!==u?(t.scene.destroy.call(t),t.scene=t.scenes[u],t.scene.setup.call(t),t.scene.start.call(t),void(u=null)):void 0}),s.render(function(e){t.delta.render=e,t.scene.render.call(t),t.camera.render()}),function(t,e){var n=[];t.forEach(function(t){var e=new Promise(function(e,n){if("dataset"===t.type&&(t.getter=function(){return t.source},e(t)),"image"===t.type){var i=new Image;i.src=t.source,i.onload=function(){t.getter=function(){return i},e(t)}}else if("sound"===t.type){var r=new Audio(t.source);r.oncanplaythrough=function(){t.getter=function(){return r.cloneNode()},e(t)}}});n.push(e)}),Promise.all(n).then(e)}(e,function(e){e.forEach(function(e){void 0===t.assets[e.type+"s"]&&(t.assets[e.type+"s"]={}),void 0===t.assets[e.type+"s"][e.scope]&&(t.assets[e.type+"s"][e.scope]={}),t.assets[e.type+"s"][e.scope][e.name]=e.getter}),t.preloading=!1}),this.loop=s,this.preloading=!0}.call(this,t),!0===s&&(window.theatre=this)}({assets:s,container:document.body,expose:!0,scenes:i,sharp:!0,size:{width:320,height:288}})}]);
//# sourceMappingURL=index.js.map