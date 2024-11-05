!function(){var t,e,a={};function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=Array(e);a<e;a++)r[a]=t[a];return r}function s(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,void 0);var a=Object.prototype.toString.call(t).slice(8,-1);if("Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return r(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=/*#__PURE__*/function(){var t;function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,e),this.state=s(t.map(function(t){return s(t)})),this.status=e.Status.idle,this.score=0,this.initialState=s(t.map(function(t){return s(t)}))}return t=[{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.state}},{key:"getStatus",value:function(){return this.updateStatus(),this.status}},{key:"start",value:function(){this.status=e.Status.playing,this.state=s(this.initialState.map(function(t){return s(t)})),this.createRandomTile(),this.createRandomTile(),this.printTiles()}},{key:"restart",value:function(){this.clearTheBoard(),this.printTiles(),this.status=e.Status.idle,this.score=0}},{key:"moveRight",value:function(){if(this.status===e.Status.playing){for(var t=!1,a=0;a<4;a++)for(var r=!1,s=2;s>=0;s--)if(this.state[a][s]>0){for(var i=0,n=!1;0===this.state[a][s+i+1];)i++;if(r||this.state[a][s+i+1]!==this.state[a][s]||(i++,n=!0),i>0){if(!r&&n){r=!0;var o=2*this.state[a][s+i];this.state[a][s+i]=o,this.score+=o}else r=!1,this.state[a][s+i]=this.state[a][s];this.state[a][s]=0,t=!0}}return t&&this.createRandomTile(),t}}},{key:"moveLeft",value:function(){if(this.status===e.Status.playing){for(var t=!1,a=0;a<4;a++)for(var r=!1,s=1;s<4;s++)if(this.state[a][s]>0){for(var i=0,n=!1;0===this.state[a][s-i-1];)i++;if(r||this.state[a][s-i-1]!==this.state[a][s]||(i++,n=!0),i>0){if(!r&&n){r=!0;var o=2*this.state[a][s-i];this.state[a][s-i]=o,this.score+=o}else r=!1,this.state[a][s-i]=this.state[a][s];this.state[a][s]=0,t=!0}}return t&&this.createRandomTile(),t}}},{key:"moveUp",value:function(){if(this.status===e.Status.playing){for(var t=!1,a=0;a<4;a++)for(var r=!1,s=1;s<4;s++)if(this.state[s][a]>0){for(var i=0,n=!1;s-i-1>=0&&0===this.state[s-i-1][a];)i++;if(!r&&s-i-1>=0&&this.state[s-i-1][a]===this.state[s][a]&&(i++,n=!0),i>0){if(!r&&n){r=!0;var o=2*this.state[s-i][a];this.state[s-i][a]=o,this.score+=o}else r=!1,this.state[s-i][a]=this.state[s][a];this.state[s][a]=0,t=!0}}return t&&this.createRandomTile(),t}}},{key:"moveDown",value:function(){if(this.status===e.Status.playing){for(var t=!1,a=0;a<4;a++)for(var r=!1,s=2;s>=0;s--)if(this.state[s][a]>0){for(var i=0,n=!1;s+i+1<this.state.length&&0===this.state[s+i+1][a];)i++;if(!r&&s+i+1<this.state.length&&this.state[s+i+1][a]===this.state[s][a]&&(i++,n=!0),i>0){if(!r&&n){r=!0;var o=2*this.state[s+i][a];this.state[s+i][a]=o,this.score+=o}else r=!1,this.state[s+i][a]=this.state[s][a];this.state[s][a]=0,t=!0}}return t&&this.createRandomTile(),t}}},{key:"isPlaying",value:function(){return this.getStatus()===e.Status.playing}},{key:"createRandomTile",value:function(){for(var t=this.randomNumber(3);!this.state[t].includes(0);)t=this.randomNumber(3);for(var e=this.randomNumber(3);0!==this.state[t][e];)e=this.randomNumber(3);var a=this.state.map(function(t){return t.slice()});a[t][e]=this.generateCellValue(),this.state=a,this.printTiles()}},{key:"randomNumber",value:function(t){return Math.round(Math.random()*t)}},{key:"generateCellValue",value:function(){return Math.random()>.9?4:2}},{key:"updateStatus",value:function(){this.didPlayerWin()?this.status=e.Status.win:this.didPlayerLose()&&(this.status=e.Status.lose)}},{key:"didPlayerWin",value:function(){var t=!0,e=!1,a=void 0;try{for(var r,s=this.state.flat()[Symbol.iterator]();!(t=(r=s.next()).done);t=!0){var i=r.value;if(2048===i)return!0}}catch(t){e=!0,a=t}finally{try{t||null==s.return||s.return()}finally{if(e)throw a}}return!1}},{key:"didPlayerLose",value:function(){var t=!0,e=!1,a=void 0;try{for(var r,s=this.state.flat()[Symbol.iterator]();!(t=(r=s.next()).done);t=!0){var i=r.value;if(0===i)return!1}}catch(t){e=!0,a=t}finally{try{t||null==s.return||s.return()}finally{if(e)throw a}}for(var n=0;n<=3;n++)for(var o=0;o<=2;o++)if(this.state[n][o]===this.state[n][o+1])return!1;for(var u=0;u<=3;u++)for(var l=0;l<=2;l++)if(this.state[l][u]===this.state[l+1][u])return!1;return!0}},{key:"printTiles",value:function(){for(var t=document.getElementsByClassName("field-cell"),e=this.state.flat(),a=0;a<e.length;a++){var r=t[a],s=e[a];s>0?void 0!==r&&(r.textContent=s,r.className="field-cell field-cell--".concat(s)):void 0!==r&&(r.textContent="",r.className="field-cell")}}},{key:"clearTheBoard",value:function(){this.state=this.initialState.map(function(t){return s(t)})}}],function(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(e.prototype,t),e}();e={idle:"idle",playing:"playing",win:"win",lose:"lose"},(t="Status")in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e;var n=new(a=i),o=document.querySelector(".start"),u=document.querySelector(".game-score"),l=document.querySelector(".message-lose"),h=document.querySelector(".message-win"),c=document.querySelector(".message-start");function f(t){t.preventDefault();var e=!1;switch(t.key){case"ArrowUp":e=n.moveUp();break;case"ArrowDown":e=n.moveDown();break;case"ArrowRight":e=n.moveRight();break;case"ArrowLeft":e=n.moveLeft()}if(e){r=n.getScore(),u.textContent=r;var r,s=n.getStatus();s===a.Status.lose?l.classList.remove("hidden"):s===a.Status.win&&h.classList.remove("hidden")}}o.addEventListener("click",function(){o.classList.contains("start")?(o.className="button restart",o.textContent="Restart",c.classList.add("hidden"),n.start()):(o.className="button start",o.textContent="Start",c.classList.remove("hidden"),h.classList.add("hidden"),l.classList.add("hidden"),document.removeEventListener("keydown",f),n.restart()),document.addEventListener("keydown",f)})}();
//# sourceMappingURL=index.5c8b4422.js.map
