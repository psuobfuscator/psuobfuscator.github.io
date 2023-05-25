(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var __accessCheck = (obj, member, msg) => {
    if (!member.has(obj))
      throw TypeError("Cannot " + msg);
  };
  var __privateAdd = (obj, member, value) => {
    if (member.has(obj))
      throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  };
  var __privateMethod = (obj, member, method) => {
    __accessCheck(obj, member, "access private method");
    return method;
  };

  // node_modules/for-next/for-next.js
  var require_for_next = __commonJS({
    "node_modules/for-next/for-next.js"(exports, module) {
      (function(fn) {
        !!!!!!!!!!!!!!!!!!!!!!!!(typeof module !== "undefined") ? module.exports = fn : window["for-next"] = fn;
      })(async (target, callback = () => {
      }, options = {}) => {
        if (target) {
          return new Promise((resolve, reject) => {
            let iterator = target;
            const length = iterator.length;
            if (typeof target === "number")
              iterator = new Array(target).fill().map((a2, i2) => i2 + 1);
            if (target.constructor === Object)
              iterator = Object.entries(target);
            if (length <= 0)
              return resolve(iterator);
            const {
              interval = 0
            } = options;
            const values = [];
            const every = (items, index, ctx = {}) => {
              const done = index === length - 1;
              const stop2 = (options2 = {}) => {
                const { value = null } = options2;
                values.push(value);
                resolve(values);
              };
              let next = (options2 = {}) => {
                const {
                  skip = false,
                  value = null
                } = options2;
                if (skip) {
                  index += skip;
                  next = () => {
                  };
                }
                values.push(value);
                if (!done) {
                  if (!interval) {
                    every(items, index + 1, skip && ctx || {});
                  } else {
                    setTimeout(every, interval, items, index + 1, skip && ctx || {});
                  }
                } else {
                  resolve(values);
                }
              };
              callback(items[index], { index, next, stop: stop2, values, ctx });
            };
            every(iterator, 0);
          });
        }
      });
    }
  });

  // node_modules/debounce/index.js
  var require_debounce = __commonJS({
    "node_modules/debounce/index.js"(exports, module) {
      function debounce3(func, wait, immediate) {
        var timeout, args, context, timestamp, result;
        if (wait == null)
          wait = 100;
        function later() {
          var last = Date.now() - timestamp;
          if (last < wait && last >= 0) {
            timeout = setTimeout(later, wait - last);
          } else {
            timeout = null;
            if (!immediate) {
              result = func.apply(context, args);
              context = args = null;
            }
          }
        }
        ;
        var debounced = function() {
          context = this;
          args = arguments;
          timestamp = Date.now();
          var callNow = immediate && !timeout;
          if (!timeout)
            timeout = setTimeout(later, wait);
          if (callNow) {
            result = func.apply(context, args);
            context = args = null;
          }
          return result;
        };
        debounced.clear = function() {
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }
        };
        debounced.flush = function() {
          if (timeout) {
            result = func.apply(context, args);
            context = args = null;
            clearTimeout(timeout);
            timeout = null;
          }
        };
        return debounced;
      }
      debounce3.debounce = debounce3;
      module.exports = debounce3;
    }
  });

  // node_modules/freezeframe/dist/freezeframe.min.js
  var require_freezeframe_min = __commonJS({
    "node_modules/freezeframe/dist/freezeframe.min.js"(exports, module) {
      !function(t2, e2) {
        typeof exports == "object" && typeof module == "object" ? module.exports = e2() : typeof define == "function" && define.amd ? define([], e2) : typeof exports == "object" ? exports.Freezeframe = e2() : t2.Freezeframe = e2();
      }(window, function() {
        return function(t2) {
          var e2 = {};
          function n2(i2) {
            if (e2[i2])
              return e2[i2].exports;
            var r2 = e2[i2] = { i: i2, l: false, exports: {} };
            return t2[i2].call(r2.exports, r2, r2.exports, n2), r2.l = true, r2.exports;
          }
          return n2.m = t2, n2.c = e2, n2.d = function(t3, e3, i2) {
            n2.o(t3, e3) || Object.defineProperty(t3, e3, { enumerable: true, get: i2 });
          }, n2.r = function(t3) {
            typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(t3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t3, "__esModule", { value: true });
          }, n2.t = function(t3, e3) {
            if (1 & e3 && (t3 = n2(t3)), 8 & e3)
              return t3;
            if (4 & e3 && typeof t3 == "object" && t3 && t3.__esModule)
              return t3;
            var i2 = Object.create(null);
            if (n2.r(i2), Object.defineProperty(i2, "default", { enumerable: true, value: t3 }), 2 & e3 && typeof t3 != "string")
              for (var r2 in t3)
                n2.d(i2, r2, function(e4) {
                  return t3[e4];
                }.bind(null, r2));
            return i2;
          }, n2.n = function(t3) {
            var e3 = t3 && t3.__esModule ? function() {
              return t3.default;
            } : function() {
              return t3;
            };
            return n2.d(e3, "a", e3), e3;
          }, n2.o = function(t3, e3) {
            return Object.prototype.hasOwnProperty.call(t3, e3);
          }, n2.p = "examples", n2(n2.s = 4);
        }([function(t2, e2, n2) {
          var i2, r2;
          !function(o2, s2) {
            "use strict";
            i2 = [n2(2)], (r2 = function(t3) {
              return function(t4, e3) {
                var n3 = t4.jQuery, i3 = t4.console;
                function r3(t5, e4) {
                  for (var n4 in e4)
                    t5[n4] = e4[n4];
                  return t5;
                }
                var o3 = Array.prototype.slice;
                function s3(t5, e4, a3) {
                  if (!(this instanceof s3))
                    return new s3(t5, e4, a3);
                  var c3, l3 = t5;
                  (typeof t5 == "string" && (l3 = document.querySelectorAll(t5)), l3) ? (this.elements = (c3 = l3, Array.isArray(c3) ? c3 : typeof c3 == "object" && typeof c3.length == "number" ? o3.call(c3) : [c3]), this.options = r3({}, this.options), typeof e4 == "function" ? a3 = e4 : r3(this.options, e4), a3 && this.on("always", a3), this.getImages(), n3 && (this.jqDeferred = new n3.Deferred()), setTimeout(this.check.bind(this))) : i3.error("Bad element for imagesLoaded " + (l3 || t5));
                }
                s3.prototype = Object.create(e3.prototype), s3.prototype.options = {}, s3.prototype.getImages = function() {
                  this.images = [], this.elements.forEach(this.addElementImages, this);
                }, s3.prototype.addElementImages = function(t5) {
                  t5.nodeName == "IMG" && this.addImage(t5), this.options.background === true && this.addElementBackgroundImages(t5);
                  var e4 = t5.nodeType;
                  if (e4 && a2[e4]) {
                    for (var n4 = t5.querySelectorAll("img"), i4 = 0; i4 < n4.length; i4++) {
                      var r4 = n4[i4];
                      this.addImage(r4);
                    }
                    if (typeof this.options.background == "string") {
                      var o4 = t5.querySelectorAll(this.options.background);
                      for (i4 = 0; i4 < o4.length; i4++) {
                        var s4 = o4[i4];
                        this.addElementBackgroundImages(s4);
                      }
                    }
                  }
                };
                var a2 = { 1: true, 9: true, 11: true };
                function c2(t5) {
                  this.img = t5;
                }
                function l2(t5, e4) {
                  this.url = t5, this.element = e4, this.img = new Image();
                }
                return s3.prototype.addElementBackgroundImages = function(t5) {
                  var e4 = getComputedStyle(t5);
                  if (e4)
                    for (var n4 = /url\((['"])?(.*?)\1\)/gi, i4 = n4.exec(e4.backgroundImage); i4 !== null; ) {
                      var r4 = i4 && i4[2];
                      r4 && this.addBackground(r4, t5), i4 = n4.exec(e4.backgroundImage);
                    }
                }, s3.prototype.addImage = function(t5) {
                  var e4 = new c2(t5);
                  this.images.push(e4);
                }, s3.prototype.addBackground = function(t5, e4) {
                  var n4 = new l2(t5, e4);
                  this.images.push(n4);
                }, s3.prototype.check = function() {
                  var t5 = this;
                  function e4(e5, n4, i4) {
                    setTimeout(function() {
                      t5.progress(e5, n4, i4);
                    });
                  }
                  this.progressedCount = 0, this.hasAnyBroken = false, this.images.length ? this.images.forEach(function(t6) {
                    t6.once("progress", e4), t6.check();
                  }) : this.complete();
                }, s3.prototype.progress = function(t5, e4, n4) {
                  this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t5.isLoaded, this.emitEvent("progress", [this, t5, e4]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t5), this.progressedCount == this.images.length && this.complete(), this.options.debug && i3 && i3.log("progress: " + n4, t5, e4);
                }, s3.prototype.complete = function() {
                  var t5 = this.hasAnyBroken ? "fail" : "done";
                  if (this.isComplete = true, this.emitEvent(t5, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                    var e4 = this.hasAnyBroken ? "reject" : "resolve";
                    this.jqDeferred[e4](this);
                  }
                }, c2.prototype = Object.create(e3.prototype), c2.prototype.check = function() {
                  this.getIsImageComplete() ? this.confirm(this.img.naturalWidth !== 0, "naturalWidth") : (this.proxyImage = new Image(), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src);
                }, c2.prototype.getIsImageComplete = function() {
                  return this.img.complete && this.img.naturalWidth;
                }, c2.prototype.confirm = function(t5, e4) {
                  this.isLoaded = t5, this.emitEvent("progress", [this, this.img, e4]);
                }, c2.prototype.handleEvent = function(t5) {
                  var e4 = "on" + t5.type;
                  this[e4] && this[e4](t5);
                }, c2.prototype.onload = function() {
                  this.confirm(true, "onload"), this.unbindEvents();
                }, c2.prototype.onerror = function() {
                  this.confirm(false, "onerror"), this.unbindEvents();
                }, c2.prototype.unbindEvents = function() {
                  this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
                }, l2.prototype = Object.create(c2.prototype), l2.prototype.check = function() {
                  this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(this.img.naturalWidth !== 0, "naturalWidth"), this.unbindEvents());
                }, l2.prototype.unbindEvents = function() {
                  this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
                }, l2.prototype.confirm = function(t5, e4) {
                  this.isLoaded = t5, this.emitEvent("progress", [this, this.element, e4]);
                }, s3.makeJQueryPlugin = function(e4) {
                  (e4 = e4 || t4.jQuery) && ((n3 = e4).fn.imagesLoaded = function(t5, e5) {
                    return new s3(this, t5, e5).jqDeferred.promise(n3(this));
                  });
                }, s3.makeJQueryPlugin(), s3;
              }(o2, t3);
            }.apply(e2, i2)) === void 0 || (t2.exports = r2);
          }(typeof window != "undefined" ? window : this);
        }, function(t2, e2, n2) {
          (t2.exports = n2(3)(false)).push([t2.i, '.ff-container{display:inline-block;position:relative}.ff-container .ff-image{z-index:0;vertical-align:top;opacity:0}.ff-container .ff-canvas{display:inline-block;position:absolute;top:0;left:0;pointer-events:none;z-index:1;vertical-align:top;opacity:0}.ff-container .ff-canvas.ff-canvas-ready{-webkit-transition:opacity 300ms;-o-transition:opacity 300ms;-moz-transition:opacity 300ms;transition:opacity 300ms;opacity:1}.ff-container.ff-active .ff-image{opacity:1}.ff-container.ff-active .ff-canvas.ff-canvas-ready{-webkit-transition:none;-o-transition:none;-moz-transition:none;transition:none;opacity:0}.ff-container.ff-active .ff-overlay{display:none}.ff-container.ff-inactive .ff-canvas.ff-canvas-ready{-webkit-transition:opacity 300ms;-o-transition:opacity 300ms;-moz-transition:opacity 300ms;transition:opacity 300ms;opacity:1}.ff-container.ff-inactive .ff-image{-webkit-transition:opacity 300ms;-o-transition:opacity 300ms;-moz-transition:opacity 300ms;transition:opacity 300ms;-webkit-transition-delay:170ms;-moz-transition-delay:170ms;-o-transition-delay:170ms;transition-delay:170ms;opacity:0}.ff-container.ff-responsive{width:100%}.ff-container.ff-responsive .ff-image,.ff-container.ff-responsive .ff-canvas{width:100%}.ff-container.ff-loading-icon:before{content:"";position:absolute;background-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPSc1MHB4JyBoZWlnaHQ9JzUwcHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLXNwaW4iPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCA1MCkiPjxnIHRyYW5zZm9ybT0icm90YXRlKDApIHRyYW5zbGF0ZSgzNCAwKSI+PGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjgiIGZpbGw9IiNmZmZmZmYiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwLjEiIGJlZ2luPSIwcyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBmcm9tPSIxLjUiIHRvPSIxIiBiZWdpbj0iMHMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9jaXJjbGU+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSB0cmFuc2xhdGUoMzQgMCkiPjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI4IiBmaWxsPSIjZmZmZmZmIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMC4xIiBiZWdpbj0iMC4xMnMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgZnJvbT0iMS41IiB0bz0iMSIgYmVnaW49IjAuMTJzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSg5MCkgdHJhbnNsYXRlKDM0IDApIj48Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iOCIgZmlsbD0iI2ZmZmZmZiI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAuMSIgYmVnaW49IjAuMjVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGZyb209IjEuNSIgdG89IjEiIGJlZ2luPSIwLjI1cyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMTM1KSB0cmFuc2xhdGUoMzQgMCkiPjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI4IiBmaWxsPSIjZmZmZmZmIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMC4xIiBiZWdpbj0iMC4zN3MiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgZnJvbT0iMS41IiB0bz0iMSIgYmVnaW49IjAuMzdzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgxODApIHRyYW5zbGF0ZSgzNCAwKSI+PGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjgiIGZpbGw9IiNmZmZmZmYiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwLjEiIGJlZ2luPSIwLjVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGZyb209IjEuNSIgdG89IjEiIGJlZ2luPSIwLjVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgyMjUpIHRyYW5zbGF0ZSgzNCAwKSI+PGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjgiIGZpbGw9IiNmZmZmZmYiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwLjEiIGJlZ2luPSIwLjYycyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBmcm9tPSIxLjUiIHRvPSIxIiBiZWdpbj0iMC42MnMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9jaXJjbGU+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDI3MCkgdHJhbnNsYXRlKDM0IDApIj48Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iOCIgZmlsbD0iI2ZmZmZmZiI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAuMSIgYmVnaW49IjAuNzVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGZyb209IjEuNSIgdG89IjEiIGJlZ2luPSIwLjc1cyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMzE1KSB0cmFuc2xhdGUoMzQgMCkiPjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI4IiBmaWxsPSIjZmZmZmZmIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMC4xIiBiZWdpbj0iMC44N3MiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgZnJvbT0iMS41IiB0bz0iMSIgYmVnaW49IjAuODdzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48L2c+PC9zdmc+");background-position:center center;background-repeat:no-repeat;height:46px;width:46px;z-index:3;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);-moz-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);-o-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.ff-container .ff-overlay{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAQAAAAA22vlAAAGFklEQVR42t2ce0yVdRjHP9zlKnfQAwoqV80bImCR90tGhJmShVOxVFJBrdSWVmvmnJlSm2ZbWwunlc4ZOf5IV7NJ84KmFpmZioiKigoKyPWct72vJ4dj0Lm8t9Nz/jt/fd73/L6/5/v8fs9z4H8VTjjhjAuu5o8LLtJ3DoEuYnvghS89pY8PnrjjgrPeH0BEd8fbEHRpaVOZqVUQ2m/cLfomGX+8pAfQ8S8gonvglx/TeEToEKbW69vnD6Annrjp9QEevnU/Q0RDmdAp2m6ffSs0DD964KrHBeSEK96EnlgtdBGN5T9kEYQPHvp7AGc8CCCq7ozQTdzdv2U4AXjrTQEueBFGorFN6DaMzZWFU/t2UIAuwhVfIkkSLIiW6lOLfULx1Y8C3PAnmjTBwmg4UTyFQLzx0MMCcieQAaQLlofp1u73B+sjB7gTRCyjBavCWF+xPs2gvQJE+DjGCFZH8+WjuQRrqwB3gm2DF+P+4Z1jJQVotIDsghcEk7H6q4I4/M02TuUHsBNejPa6c2sTemlhImSAF6Pp/M/ZkgJUNREywYtRe3B7mroKkBFetNFXP5vTXz0bLSu8ZKNr/nhDLRstO7xko39Tx0YrAi/G7e+Vt9GKwYs2uqowK0pJE6EgvKSAG7/nK2ejFYaXbPSpkgxlFKACvKSAfR8Pk18BKsELgrGpcovchaRq8IJUSJ5eIqcCVIWXFHBy/1QC5VGA6vCii7i9d+NQOQpJLeBFBTy4vMl+BWgELyng2q95hNijAA3hJQWUPTpKcbV+AWkMLylgzwdDbFOA9vCiAhovb5zQx3oF6AJeUkDVyQXWHqXoBl5SwLF9k6w5TNQVvHSY+K3lh4l6gxcV0FCxIc1gSSGpQ3hJAZWl2QTghVt3+DqFF3+AMwUE4SXt/w4HL5hatoonoZ5db546hheEq3sQ1767Q8I33yKGYOndOx68IDCE3vg4JLypnWRE2+DqgPC3K0glGn+HhC8pIpUoh3zzd24aZpJEJL4OB3+vNnMlExlEON4OJViTUFqWsJwsUulHID1wdhj4C1XZn7KA6aSTQDg+XRsEncHX3lu323k5c3medAYiXlR7OIQ9aG3bfSjobRaQzWRSiMeAv2SL9W/MjpWnrOd1csggnSH049+rIb37+crq3M/JZw7TGEcScRgsu1XUHL6+cfN3riuYzwwmkkIifSw/iNIUvt1Y/EvkWhbxEs/wJE8QTZg1ByAawp/+a9xHLGY2mYxmGAPoZe31g0bw1TUFX5LPPGmVjyCOCFsufjSAf9C0vcTzTV5lJpNJJZG+hNh26awyvNF08PiA91jEyzzLUwyWtkR/W6/7VYX/81JmIUukVT6GYcTQ275GC9Xga2rX7GQZuUxnAsnEE2l/k5cq8M0tRQd7rmKBtMrTGEQUoXK0VigObxIOnxq8jjxeMSf+/oTL1dioMPzFqllbWcocshhDErGWJn7N4evurxftbS4vMpGRJNBH7lZGheDb2vYcChHtrZj4R0mrPEz+/g9F4MvOjtpgtrdPM5T+9FKmfVd2+Gs3874gn7mP7G3Eo/tuJ123rDQ2bdvvISb+GUyy1t5qCm80HTje710WMYuptthbDeHPVTxK/KPNiV+FMQ0Z4O/Urdn1WOKPIFidARk74Vtbd/0YsPqxxB+iXlexXfBHy0d82CnxezpAO+6V6nnbzYl/rPyJX0H4hsbC4g4VvwKJXyF4o7HkSF87Kn4N4csvTNncqeL30m7swuKBl5q7q3ZQwDxeYLztFb/c8LGM/q/xuuaWogO+K3nNXPEPtL3ilxdeGvK6fr479NLTUi0kVvwPD0HDba/45QzzeN2ObV2BV1zL2dahForRYkvsKsyDjZ7TrvzdGfxe/aa9zuKWqFgtZF+YR0oZH7/w4oWO4O3txaWGd1iobC1kX5iHeUkmwy33k68vXWlvF4S6+p/Kxm0gjxyeU7YWsi/MY9TEkUYGOeSxjBXks4jZZHU6BNXZGLt5gJ1exJLMeDKZwUymk8E4RipfC8mB74EfoUSRyHBSSGUkQ4nX4yrv6u17E0AYEUQRTV8MhDjCnzbgaH+X8Q8RGKy7dFBuqQAAAABJRU5ErkJggg==");background-repeat:no-repeat;max-width:94px;max-height:94px;position:absolute;left:0%;right:0%;top:0%;bottom:0%;margin:auto;-webkit-background-size:contain;-moz-background-size:contain;background-size:contain;background-position:center;pointer-events:none;z-index:100}', ""]);
        }, function(t2, e2, n2) {
          var i2, r2;
          typeof window != "undefined" && window, (r2 = typeof (i2 = function() {
            "use strict";
            function t3() {
            }
            var e3 = t3.prototype;
            return e3.on = function(t4, e4) {
              if (t4 && e4) {
                var n3 = this._events = this._events || {}, i3 = n3[t4] = n3[t4] || [];
                return i3.indexOf(e4) == -1 && i3.push(e4), this;
              }
            }, e3.once = function(t4, e4) {
              if (t4 && e4) {
                this.on(t4, e4);
                var n3 = this._onceEvents = this._onceEvents || {};
                return (n3[t4] = n3[t4] || {})[e4] = true, this;
              }
            }, e3.off = function(t4, e4) {
              var n3 = this._events && this._events[t4];
              if (n3 && n3.length) {
                var i3 = n3.indexOf(e4);
                return i3 != -1 && n3.splice(i3, 1), this;
              }
            }, e3.emitEvent = function(t4, e4) {
              var n3 = this._events && this._events[t4];
              if (n3 && n3.length) {
                n3 = n3.slice(0), e4 = e4 || [];
                for (var i3 = this._onceEvents && this._onceEvents[t4], r3 = 0; r3 < n3.length; r3++) {
                  var o2 = n3[r3];
                  i3 && i3[o2] && (this.off(t4, o2), delete i3[o2]), o2.apply(this, e4);
                }
                return this;
              }
            }, e3.allOff = function() {
              delete this._events, delete this._onceEvents;
            }, t3;
          }) == "function" ? i2.call(e2, n2, e2, t2) : i2) === void 0 || (t2.exports = r2);
        }, function(t2, e2, n2) {
          "use strict";
          t2.exports = function(t3) {
            var e3 = [];
            return e3.toString = function() {
              return this.map(function(e4) {
                var n3 = function(t4, e5) {
                  var n4 = t4[1] || "", i2 = t4[3];
                  if (!i2)
                    return n4;
                  if (e5 && typeof btoa == "function") {
                    var r2 = (s2 = i2, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s2)))) + " */"), o2 = i2.sources.map(function(t5) {
                      return "/*# sourceURL=" + i2.sourceRoot + t5 + " */";
                    });
                    return [n4].concat(o2).concat([r2]).join("\n");
                  }
                  var s2;
                  return [n4].join("\n");
                }(e4, t3);
                return e4[2] ? "@media " + e4[2] + "{" + n3 + "}" : n3;
              }).join("");
            }, e3.i = function(t4, n3) {
              typeof t4 == "string" && (t4 = [[null, t4, ""]]);
              for (var i2 = {}, r2 = 0; r2 < this.length; r2++) {
                var o2 = this[r2][0];
                o2 != null && (i2[o2] = true);
              }
              for (r2 = 0; r2 < t4.length; r2++) {
                var s2 = t4[r2];
                s2[0] != null && i2[s2[0]] || (n3 && !s2[2] ? s2[2] = n3 : n3 && (s2[2] = "(" + s2[2] + ") and (" + n3 + ")"), e3.push(s2));
              }
            }, e3;
          };
        }, function(t2, e2, n2) {
          "use strict";
          n2.r(e2);
          var i2, r2 = n2(0), o2 = n2.n(r2);
          !function(t3) {
            t3.START = "start", t3.STOP = "stop", t3.TOGGLE = "toggle";
          }(i2 || (i2 = {}));
          const s2 = (t3) => `\u2728Freezeframe: ${t3}\u2728`, a2 = (t3, ...e3) => {
            console.error(s2(t3), ...e3);
          }, c2 = (t3) => typeof t3 == "string" ? document.querySelectorAll(t3) : t3, l2 = (t3, e3, n3) => {
            const i3 = t3 instanceof Element ? [t3] : t3;
            return Array.from(i3).reduce((t4, e4) => {
              if (e4 instanceof HTMLImageElement)
                t4.push(e4), ((t5) => t5.split(".").pop().toLowerCase().substring(0, 3))(e4.src) !== "gif" && n3.warnings && ((t5, ...e5) => {
                  console.warn(s2(t5), ...e5);
                })("Image does not appear to be a gif", e4);
              else {
                const n4 = e4.querySelectorAll("img");
                n4.length ? t4 = t4.concat(Array.from(n4)) : a2("Invalid element", e4);
              }
              return t4;
            }, []);
          }, u2 = (t3) => [...new Set(t3)], m2 = (t3) => {
            const e3 = window.document.createElement("div");
            e3.innerHTML = t3;
            const n3 = e3.childNodes;
            return n3.length > 1 ? n3 : n3[0];
          };
          var h2, f2, d2 = function() {
            function t3(t4, e3) {
              for (var n3 = 0; n3 < e3.length; n3++) {
                var i3 = e3[n3];
                i3.enumerable = i3.enumerable || false, i3.configurable = true, "value" in i3 && (i3.writable = true), Object.defineProperty(t4, i3.key, i3);
              }
            }
            return function(e3, n3, i3) {
              return n3 && t3(e3.prototype, n3), i3 && t3(e3, i3), e3;
            };
          }(), p2 = (h2 = ["", ""], f2 = ["", ""], Object.freeze(Object.defineProperties(h2, { raw: { value: Object.freeze(f2) } })));
          function g2(t3, e3) {
            if (!(t3 instanceof e3))
              throw new TypeError("Cannot call a class as a function");
          }
          var I2 = function() {
            function t3() {
              for (var e3 = this, n3 = arguments.length, i3 = Array(n3), r3 = 0; r3 < n3; r3++)
                i3[r3] = arguments[r3];
              return g2(this, t3), this.tag = function(t4) {
                for (var n4 = arguments.length, i4 = Array(n4 > 1 ? n4 - 1 : 0), r4 = 1; r4 < n4; r4++)
                  i4[r4 - 1] = arguments[r4];
                return typeof t4 == "function" ? e3.interimTag.bind(e3, t4) : typeof t4 == "string" ? e3.transformEndResult(t4) : (t4 = t4.map(e3.transformString.bind(e3)), e3.transformEndResult(t4.reduce(e3.processSubstitutions.bind(e3, i4))));
              }, i3.length > 0 && Array.isArray(i3[0]) && (i3 = i3[0]), this.transformers = i3.map(function(t4) {
                return typeof t4 == "function" ? t4() : t4;
              }), this.tag;
            }
            return d2(t3, [{ key: "interimTag", value: function(t4, e3) {
              for (var n3 = arguments.length, i3 = Array(n3 > 2 ? n3 - 2 : 0), r3 = 2; r3 < n3; r3++)
                i3[r3 - 2] = arguments[r3];
              return this.tag(p2, t4.apply(void 0, [e3].concat(i3)));
            } }, { key: "processSubstitutions", value: function(t4, e3, n3) {
              var i3 = this.transformSubstitution(t4.shift(), e3);
              return "".concat(e3, i3, n3);
            } }, { key: "transformString", value: function(t4) {
              return this.transformers.reduce(function(t5, e3) {
                return e3.onString ? e3.onString(t5) : t5;
              }, t4);
            } }, { key: "transformSubstitution", value: function(t4, e3) {
              return this.transformers.reduce(function(t5, n3) {
                return n3.onSubstitution ? n3.onSubstitution(t5, e3) : t5;
              }, t4);
            } }, { key: "transformEndResult", value: function(t4) {
              return this.transformers.reduce(function(t5, e3) {
                return e3.onEndResult ? e3.onEndResult(t5) : t5;
              }, t4);
            } }]), t3;
          }(), v = function() {
            var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
            return { onEndResult: function(e3) {
              if (t3 === "")
                return e3.trim();
              if ((t3 = t3.toLowerCase()) === "start" || t3 === "left")
                return e3.replace(/^\s*/, "");
              if (t3 === "end" || t3 === "right")
                return e3.replace(/\s*$/, "");
              throw new Error("Side not supported: " + t3);
            } };
          };
          function y2(t3) {
            if (Array.isArray(t3)) {
              for (var e3 = 0, n3 = Array(t3.length); e3 < t3.length; e3++)
                n3[e3] = t3[e3];
              return n3;
            }
            return Array.from(t3);
          }
          var b2 = function() {
            var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "initial";
            return { onEndResult: function(e3) {
              if (t3 === "initial") {
                var n3 = e3.match(/^[^\S\n]*(?=\S)/gm), i3 = n3 && Math.min.apply(Math, y2(n3.map(function(t4) {
                  return t4.length;
                })));
                if (i3) {
                  var r3 = new RegExp("^.{" + i3 + "}", "gm");
                  return e3.replace(r3, "");
                }
                return e3;
              }
              if (t3 === "all")
                return e3.replace(/^[^\S\n]+/gm, "");
              throw new Error("Unknown type: " + t3);
            } };
          }, Z = function(t3, e3) {
            return { onEndResult: function(n3) {
              if (t3 == null || e3 == null)
                throw new Error("replaceResultTransformer requires at least 2 arguments.");
              return n3.replace(t3, e3);
            } };
          }, j = function(t3, e3) {
            return { onSubstitution: function(n3, i3) {
              if (t3 == null || e3 == null)
                throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");
              return n3 == null ? n3 : n3.toString().replace(t3, e3);
            } };
          }, S = { separator: "", conjunction: "", serial: false }, w2 = function() {
            var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : S;
            return { onSubstitution: function(e3, n3) {
              if (Array.isArray(e3)) {
                var i3 = e3.length, r3 = t3.separator, o3 = t3.conjunction, s3 = t3.serial, a3 = n3.match(/(\n?[^\S\n]+)$/);
                if (e3 = a3 ? e3.join(r3 + a3[1]) : e3.join(r3 + " "), o3 && i3 > 1) {
                  var c3 = e3.lastIndexOf(r3);
                  e3 = e3.slice(0, c3) + (s3 ? r3 : "") + " " + o3 + e3.slice(c3 + 1);
                }
              }
              return e3;
            } };
          }, G = function(t3) {
            return { onSubstitution: function(e3, n3) {
              if (t3 == null || typeof t3 != "string")
                throw new Error("You need to specify a string character to split by.");
              return typeof e3 == "string" && e3.includes(t3) && (e3 = e3.split(t3)), e3;
            } };
          }, W = function(t3) {
            return t3 != null && !Number.isNaN(t3) && typeof t3 != "boolean";
          }, P = function() {
            return { onSubstitution: function(t3) {
              return Array.isArray(t3) ? t3.filter(W) : W(t3) ? t3 : "";
            } };
          }, E = (new I2(w2({ separator: "," }), b2, v), new I2(w2({ separator: ",", conjunction: "and" }), b2, v), new I2(w2({ separator: ",", conjunction: "or" }), b2, v), new I2(G("\n"), P, w2, b2, v));
          new I2(G("\n"), w2, b2, v, j(/&/g, "&amp;"), j(/</g, "&lt;"), j(/>/g, "&gt;"), j(/"/g, "&quot;"), j(/'/g, "&#x27;"), j(/`/g, "&#x60;")), new I2(Z(/(?:\n(?:\s*))+/g, " "), v), new I2(Z(/(?:\n\s*)/g, ""), v), new I2(w2({ separator: "," }), Z(/(?:\s+)/g, " "), v), new I2(w2({ separator: ",", conjunction: "or" }), Z(/(?:\s+)/g, " "), v), new I2(w2({ separator: ",", conjunction: "and" }), Z(/(?:\s+)/g, " "), v), new I2(w2, b2, v), new I2(w2, Z(/(?:\s+)/g, " "), v), new I2(b2, v), new I2(b2("all"), v);
          const R = ".freezeframe", Y = "ff-container", A2 = "ff-loading-icon", x = "ff-image", B2 = "ff-canvas", J = "ff-ready", F2 = "ff-inactive", L = "ff-active", k = "ff-canvas-ready", z = "ff-responsive", M = "ff-overlay", H = { selector: R, responsive: true, trigger: "hover", overlay: false, warnings: true };
          var T = n2(1), X = n2.n(T);
          var V, N, C, U = function(t3, e3, n3, i3) {
            return new (n3 || (n3 = Promise))(function(r3, o3) {
              function s3(t4) {
                try {
                  c3(i3.next(t4));
                } catch (t5) {
                  o3(t5);
                }
              }
              function a3(t4) {
                try {
                  c3(i3.throw(t4));
                } catch (t5) {
                  o3(t5);
                }
              }
              function c3(t4) {
                var e4;
                t4.done ? r3(t4.value) : (e4 = t4.value, e4 instanceof n3 ? e4 : new n3(function(t5) {
                  t5(e4);
                })).then(s3, a3);
              }
              c3((i3 = i3.apply(t3, e3 || [])).next());
            });
          }, O = function(t3, e3, n3) {
            if (!e3.has(t3))
              throw new TypeError("attempted to set private field on non-instance");
            return e3.set(t3, n3), n3;
          }, D2 = function(t3, e3) {
            if (!e3.has(t3))
              throw new TypeError("attempted to get private field on non-instance");
            return e3.get(t3);
          };
          V = new WeakMap(), N = new WeakMap(), C = new WeakMap();
          e2.default = class {
            constructor(t3 = R, e3) {
              this.items = [], this.$images = [], V.set(this, void 0), N.set(this, void 0), this._eventListeners = Object.assign({}, Object.values(i2).reduce((t4, e4) => (t4[e4] = [], t4), {})), C.set(this, []), typeof t3 == "string" || t3 instanceof Element || t3 instanceof HTMLCollection || t3 instanceof NodeList ? (this.options = Object.assign(Object.assign({}, H), e3), O(this, V, t3)) : typeof t3 != "object" || e3 ? a2("Invalid Freezeframe.js configuration:", ...[t3, e3].filter((t4) => t4 !== void 0)) : (this.options = Object.assign(Object.assign({}, H), t3), O(this, V, this.options.selector)), this._init(D2(this, V));
            }
            get _stylesInjected() {
              return !!document.querySelector("style#ff-styles");
            }
            _init(t3) {
              this._injectStylesheet(), O(this, N, "ontouchstart" in window || "onmsgesturechange" in window), this._capture(t3), this._load(this.$images);
            }
            _capture(t3) {
              this.$images = ((...t4) => (...e3) => t4.reduceRight((t5, n3) => (...i3) => t5(n3(...i3, ...e3)))())(c2, l2, u2)(t3, this.options);
            }
            _load(t3) {
              o2()(t3).on("progress", (t4, { img: e3 }) => {
                this._setup(e3);
              });
            }
            _setup(t3) {
              return U(this, void 0, void 0, function* () {
                const e3 = this._wrap(t3);
                this.items.push(e3), yield this._process(e3), this._attach(e3);
              });
            }
            _wrap(t3) {
              const e3 = m2(E`
    <div class="${Y} ${A2}">
    </div>
  `), n3 = m2(E`
    <canvas class="${B2}" width="0" height="0">
    </canvas>
  `);
              var i3, r3;
              return this.options.responsive && e3.classList.add(z), this.options.overlay && e3.appendChild(m2(E`
    <div class="${M}">
    </div>
  `)), t3.classList.add(x), e3.appendChild(n3), r3 = e3, (i3 = t3).parentNode.insertBefore(r3, i3), r3.appendChild(i3), { $container: e3, $canvas: n3, $image: t3 };
            }
            _process(t3) {
              return new Promise((e3) => {
                const { $canvas: n3, $image: i3, $container: r3 } = t3, { clientWidth: o3, clientHeight: s3 } = i3;
                n3.setAttribute("width", o3.toString()), n3.setAttribute("height", s3.toString());
                n3.getContext("2d").drawImage(i3, 0, 0, o3, s3), n3.classList.add(k), n3.addEventListener("transitionend", () => {
                  this._ready(r3), e3(t3);
                }, { once: true });
              });
            }
            _ready(t3) {
              t3.classList.add(J), t3.classList.add(F2), t3.classList.remove(A2);
            }
            _attach(t3) {
              const { $image: e3 } = t3;
              if (!D2(this, N) && this.options.trigger === "hover") {
                const n3 = () => {
                  this._toggleOn(t3), this._emit(i2.START, t3, true), this._emit(i2.TOGGLE, t3, true);
                }, r3 = () => {
                  this._toggleOff(t3), this._emit(i2.START, t3, false), this._emit(i2.TOGGLE, t3, false);
                };
                this._addEventListener(e3, "mouseleave", r3), this._addEventListener(e3, "mouseenter", n3);
              }
              if (D2(this, N) || this.options.trigger === "click") {
                const n3 = () => {
                  this._toggle(t3);
                };
                this._addEventListener(e3, "click", n3);
              }
            }
            _addEventListener(t3, e3, n3) {
              D2(this, C).push({ $image: t3, event: e3, listener: n3 }), t3.addEventListener(e3, n3);
            }
            _removeEventListener(t3, e3, n3) {
              t3.removeEventListener(e3, n3);
            }
            _injectStylesheet() {
              this._stylesInjected || document.head.appendChild(m2(E(`
    <style id="ff-styles">
      ${X.a.toString()}
    </style>
  `)));
            }
            _emit(t3, e3, n3) {
              this._eventListeners[t3].forEach((t4) => {
                t4(Array.isArray(e3) && e3.length === 1 ? e3[0] : e3, n3);
              });
            }
            _toggleOn(t3) {
              const { $container: e3, $image: n3 } = t3;
              e3.classList.contains(J) && (n3.setAttribute("src", n3.src), e3.classList.remove(F2), e3.classList.add(L));
            }
            _toggleOff(t3) {
              const { $container: e3 } = t3;
              e3.classList.contains(J) && (e3.classList.add(F2), e3.classList.remove(L));
            }
            _toggle(t3) {
              const { $container: e3 } = t3, n3 = e3.classList.contains(L);
              return n3 ? this._toggleOff(t3) : this._toggleOn(t3), !n3;
            }
            start() {
              return this.items.forEach((t3) => {
                this._toggleOn(t3);
              }), this._emit(i2.START, this.items, true), this._emit(i2.TOGGLE, this.items, true), this;
            }
            stop() {
              return this.items.forEach((t3) => {
                this._toggleOff(t3);
              }), this._emit(i2.STOP, this.items, false), this._emit(i2.TOGGLE, this.items, false), this;
            }
            toggle() {
              return this.items.forEach((t3) => {
                const e3 = this._toggle(t3);
                e3 ? this._emit(i2.START, this.items, false) : this._emit(i2.STOP, this.items, false), this._emit(i2.TOGGLE, this.items, e3);
              }), this;
            }
            on(t3, e3) {
              return this._eventListeners[t3].push(e3), this;
            }
            destroy() {
              D2(this, C).forEach(({ $image: t3, event: e3, listener: n3 }) => {
                this._removeEventListener(t3, e3, n3);
              });
            }
          };
        }]).default;
      });
    }
  });

  // client/elements/scroll-container.js
  var ScrollContainer = class extends HTMLElement {
    #previousScrollTop = 0;
    get direction() {
      return this.#previousScrollTop < this.scrollTop ? "down" : "up";
    }
    get fold() {
      return this.scrollTop > window.innerHeight ? "below" : "above";
    }
    connectedCallback() {
      this.#previousScrollTop = this.scrollTop;
      this.addEventListener("scroll", this);
    }
    handleEvent(event2) {
      console.log(event2);
      switch (event2.type) {
        case "scroll":
          this.setAttribute("direction", this.direction);
          this.setAttribute("fold", this.fold);
          this.#previousScrollTop = this.scrollTop;
      }
    }
  };
  customElements.define("scroll-container", ScrollContainer);

  // client/legacy/elements.js
  var AutoHeader = class extends HTMLElement {
    lastScrollTop = 0;
    connectedCallback() {
      document.addEventListener("scroll", (e2) => this.onScroll(e2));
    }
    onScroll(event2) {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let isScrollingDown = scrollTop > this.lastScrollTop;
      if (isScrollingDown && scrollTop > 100) {
        this.classList.add("-translate-y-full");
      } else {
        this.classList.remove("-translate-y-full");
      }
      this.lastScrollTop = scrollTop;
    }
  };
  customElements.define("auto-header", AutoHeader);
  var DropdownBox = class extends HTMLElement {
    connectedCallback() {
      this.trigger.addEventListener("click", () => this.toggle());
      this.content && this.content.addEventListener("mouseleave", () => this.setClosed());
    }
    toggle() {
      this.open = !this.open;
    }
    setClosed() {
      this.open = false;
    }
    get open() {
      return !this.content.classList.contains("hidden");
    }
    set open(open) {
      open ? this.content.classList.remove("hidden") : this.content.classList.add("hidden");
    }
    get for() {
      return this.hasAttribute("for") && this.getAttribute("for");
    }
    get trigger() {
      return this.querySelector("dropdown-trigger");
    }
    get content() {
      if (!!this.for) {
        return document.querySelector(this.for);
      } else {
        return this.querySelector("dropdown-content");
      }
    }
  };
  customElements.define("dropdown-box", DropdownBox);
  function hasParentOfType(node, type) {
    if (type !== "BODY" && node.nodeName === "BODY")
      return false;
    if (type === node.nodeName)
      return true;
    return hasParentOfType(node.parentNode, type);
  }
  var ServerCard = class extends HTMLElement {
    getSlug() {
      return this.getAttribute("slug");
    }
    getRank() {
      return this.getAttribute("rank") || "default";
    }
    getViewButton() {
      return this.querySelector("[data-view-button]");
    }
    getJoinButton() {
      return this.querySelector("[data-join-button]");
    }
    connectedCallback() {
      this.addEventListener("click", this.onClick.bind(this));
    }
    onClick(event2) {
      if (hasParentOfType(event2.target, "A"))
        return;
      if (event2.ctrlKey || event2.metaKey) {
        window.open(this.getViewButton().href, "_blank");
        return;
      }
      this.getViewButton().click();
    }
  };
  customElements.define("server-card", ServerCard);

  // client/legacy/discord.js
  var DISCORD_API_VERSION = 10;
  var DISCORD_API_BASE_URL = "https://discord.com/api/v" + DISCORD_API_VERSION;
  var discordInviteStringTypes = {
    DISCORD_GG_INVITE: Symbol("DISCORD_GG_INVITE"),
    DISCORD_GG: Symbol("DISCORD_GG"),
    DISCORD_COM: Symbol("DISCORD_COM"),
    DISCORD_APP_COM: Symbol("DISCORD_APP_COM"),
    SIMPLE_STRING: Symbol("SIMPLE_STRING"),
    INVALID: Symbol("INVALID")
  };

  // client/legacy/discadia.js
  async function fetchEmojis({ q = "", limit = 100, page = 1 } = {}) {
    return fetch(`/api/emojis?q=${q}&limit=${limit}&page=${page}`).then((r2) => r2.json());
  }

  // client/legacy/app_data.js
  var app_data_default = {
    messages: [],
    get view() {
      return document.querySelector('meta[name="view"]')?.content;
    },
    enable_backdrop: false,
    statusIndicatorText: "",
    statusIndicatorIcon: "",
    showStatusIndicator: false,
    setStatusIndicator(text, timeout = Infinity, { icon = "" } = {}) {
      this.statusIndicatorText = text;
      this.statusIndicatorIcon = icon;
      this.showStatusIndicator = true;
      if (timeout < Infinity) {
        setTimeout(() => {
          this.showStatusIndicator = false;
          this.statusIndicatorIcon = "";
        }, timeout);
      }
    }
  };

  // node_modules/alpinejs/dist/module.esm.js
  var flushPending = false;
  var flushing = false;
  var queue = [];
  function scheduler(callback) {
    queueJob(callback);
  }
  function queueJob(job) {
    if (!queue.includes(job))
      queue.push(job);
    queueFlush();
  }
  function dequeueJob(job) {
    let index = queue.indexOf(job);
    if (index !== -1)
      queue.splice(index, 1);
  }
  function queueFlush() {
    if (!flushing && !flushPending) {
      flushPending = true;
      queueMicrotask(flushJobs);
    }
  }
  function flushJobs() {
    flushPending = false;
    flushing = true;
    for (let i2 = 0; i2 < queue.length; i2++) {
      queue[i2]();
    }
    queue.length = 0;
    flushing = false;
  }
  var reactive;
  var effect;
  var release;
  var raw;
  var shouldSchedule = true;
  function disableEffectScheduling(callback) {
    shouldSchedule = false;
    callback();
    shouldSchedule = true;
  }
  function setReactivityEngine(engine2) {
    reactive = engine2.reactive;
    release = engine2.release;
    effect = (callback) => engine2.effect(callback, { scheduler: (task) => {
      if (shouldSchedule) {
        scheduler(task);
      } else {
        task();
      }
    } });
    raw = engine2.raw;
  }
  function overrideEffect(override) {
    effect = override;
  }
  function elementBoundEffect(el) {
    let cleanup2 = () => {
    };
    let wrappedEffect = (callback) => {
      let effectReference = effect(callback);
      if (!el._x_effects) {
        el._x_effects = new Set();
        el._x_runEffects = () => {
          el._x_effects.forEach((i2) => i2());
        };
      }
      el._x_effects.add(effectReference);
      cleanup2 = () => {
        if (effectReference === void 0)
          return;
        el._x_effects.delete(effectReference);
        release(effectReference);
      };
      return effectReference;
    };
    return [wrappedEffect, () => {
      cleanup2();
    }];
  }
  var onAttributeAddeds = [];
  var onElRemoveds = [];
  var onElAddeds = [];
  function onElAdded(callback) {
    onElAddeds.push(callback);
  }
  function onElRemoved(el, callback) {
    if (typeof callback === "function") {
      if (!el._x_cleanups)
        el._x_cleanups = [];
      el._x_cleanups.push(callback);
    } else {
      callback = el;
      onElRemoveds.push(callback);
    }
  }
  function onAttributesAdded(callback) {
    onAttributeAddeds.push(callback);
  }
  function onAttributeRemoved(el, name, callback) {
    if (!el._x_attributeCleanups)
      el._x_attributeCleanups = {};
    if (!el._x_attributeCleanups[name])
      el._x_attributeCleanups[name] = [];
    el._x_attributeCleanups[name].push(callback);
  }
  function cleanupAttributes(el, names) {
    if (!el._x_attributeCleanups)
      return;
    Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
      if (names === void 0 || names.includes(name)) {
        value.forEach((i2) => i2());
        delete el._x_attributeCleanups[name];
      }
    });
  }
  var observer = new MutationObserver(onMutate);
  var currentlyObserving = false;
  function startObservingMutations() {
    observer.observe(document, { subtree: true, childList: true, attributes: true, attributeOldValue: true });
    currentlyObserving = true;
  }
  function stopObservingMutations() {
    flushObserver();
    observer.disconnect();
    currentlyObserving = false;
  }
  var recordQueue = [];
  var willProcessRecordQueue = false;
  function flushObserver() {
    recordQueue = recordQueue.concat(observer.takeRecords());
    if (recordQueue.length && !willProcessRecordQueue) {
      willProcessRecordQueue = true;
      queueMicrotask(() => {
        processRecordQueue();
        willProcessRecordQueue = false;
      });
    }
  }
  function processRecordQueue() {
    onMutate(recordQueue);
    recordQueue.length = 0;
  }
  function mutateDom(callback) {
    if (!currentlyObserving)
      return callback();
    stopObservingMutations();
    let result = callback();
    startObservingMutations();
    return result;
  }
  var isCollecting = false;
  var deferredMutations = [];
  function deferMutations() {
    isCollecting = true;
  }
  function flushAndStopDeferringMutations() {
    isCollecting = false;
    onMutate(deferredMutations);
    deferredMutations = [];
  }
  function onMutate(mutations) {
    if (isCollecting) {
      deferredMutations = deferredMutations.concat(mutations);
      return;
    }
    let addedNodes = [];
    let removedNodes = [];
    let addedAttributes = new Map();
    let removedAttributes = new Map();
    for (let i2 = 0; i2 < mutations.length; i2++) {
      if (mutations[i2].target._x_ignoreMutationObserver)
        continue;
      if (mutations[i2].type === "childList") {
        mutations[i2].addedNodes.forEach((node) => node.nodeType === 1 && addedNodes.push(node));
        mutations[i2].removedNodes.forEach((node) => node.nodeType === 1 && removedNodes.push(node));
      }
      if (mutations[i2].type === "attributes") {
        let el = mutations[i2].target;
        let name = mutations[i2].attributeName;
        let oldValue = mutations[i2].oldValue;
        let add2 = () => {
          if (!addedAttributes.has(el))
            addedAttributes.set(el, []);
          addedAttributes.get(el).push({ name, value: el.getAttribute(name) });
        };
        let remove = () => {
          if (!removedAttributes.has(el))
            removedAttributes.set(el, []);
          removedAttributes.get(el).push(name);
        };
        if (el.hasAttribute(name) && oldValue === null) {
          add2();
        } else if (el.hasAttribute(name)) {
          remove();
          add2();
        } else {
          remove();
        }
      }
    }
    removedAttributes.forEach((attrs, el) => {
      cleanupAttributes(el, attrs);
    });
    addedAttributes.forEach((attrs, el) => {
      onAttributeAddeds.forEach((i2) => i2(el, attrs));
    });
    for (let node of removedNodes) {
      if (addedNodes.includes(node))
        continue;
      onElRemoveds.forEach((i2) => i2(node));
      if (node._x_cleanups) {
        while (node._x_cleanups.length)
          node._x_cleanups.pop()();
      }
    }
    addedNodes.forEach((node) => {
      node._x_ignoreSelf = true;
      node._x_ignore = true;
    });
    for (let node of addedNodes) {
      if (removedNodes.includes(node))
        continue;
      if (!node.isConnected)
        continue;
      delete node._x_ignoreSelf;
      delete node._x_ignore;
      onElAddeds.forEach((i2) => i2(node));
      node._x_ignore = true;
      node._x_ignoreSelf = true;
    }
    addedNodes.forEach((node) => {
      delete node._x_ignoreSelf;
      delete node._x_ignore;
    });
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
  }
  function scope(node) {
    return mergeProxies(closestDataStack(node));
  }
  function addScopeToNode(node, data2, referenceNode) {
    node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
    return () => {
      node._x_dataStack = node._x_dataStack.filter((i2) => i2 !== data2);
    };
  }
  function refreshScope(element, scope2) {
    let existingScope = element._x_dataStack[0];
    Object.entries(scope2).forEach(([key, value]) => {
      existingScope[key] = value;
    });
  }
  function closestDataStack(node) {
    if (node._x_dataStack)
      return node._x_dataStack;
    if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
      return closestDataStack(node.host);
    }
    if (!node.parentNode) {
      return [];
    }
    return closestDataStack(node.parentNode);
  }
  function mergeProxies(objects) {
    let thisProxy = new Proxy({}, {
      ownKeys: () => {
        return Array.from(new Set(objects.flatMap((i2) => Object.keys(i2))));
      },
      has: (target, name) => {
        return objects.some((obj) => obj.hasOwnProperty(name));
      },
      get: (target, name) => {
        return (objects.find((obj) => {
          if (obj.hasOwnProperty(name)) {
            let descriptor = Object.getOwnPropertyDescriptor(obj, name);
            if (descriptor.get && descriptor.get._x_alreadyBound || descriptor.set && descriptor.set._x_alreadyBound) {
              return true;
            }
            if ((descriptor.get || descriptor.set) && descriptor.enumerable) {
              let getter = descriptor.get;
              let setter = descriptor.set;
              let property = descriptor;
              getter = getter && getter.bind(thisProxy);
              setter = setter && setter.bind(thisProxy);
              if (getter)
                getter._x_alreadyBound = true;
              if (setter)
                setter._x_alreadyBound = true;
              Object.defineProperty(obj, name, {
                ...property,
                get: getter,
                set: setter
              });
            }
            return true;
          }
          return false;
        }) || {})[name];
      },
      set: (target, name, value) => {
        let closestObjectWithKey = objects.find((obj) => obj.hasOwnProperty(name));
        if (closestObjectWithKey) {
          closestObjectWithKey[name] = value;
        } else {
          objects[objects.length - 1][name] = value;
        }
        return true;
      }
    });
    return thisProxy;
  }
  function initInterceptors(data2) {
    let isObject2 = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
    let recurse = (obj, basePath = "") => {
      Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }]) => {
        if (enumerable === false || value === void 0)
          return;
        let path = basePath === "" ? key : `${basePath}.${key}`;
        if (typeof value === "object" && value !== null && value._x_interceptor) {
          obj[key] = value.initialize(data2, path, key);
        } else {
          if (isObject2(value) && value !== obj && !(value instanceof Element)) {
            recurse(value, path);
          }
        }
      });
    };
    return recurse(data2);
  }
  function interceptor(callback, mutateObj = () => {
  }) {
    let obj = {
      initialValue: void 0,
      _x_interceptor: true,
      initialize(data2, path, key) {
        return callback(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
      }
    };
    mutateObj(obj);
    return (initialValue) => {
      if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
        let initialize = obj.initialize.bind(obj);
        obj.initialize = (data2, path, key) => {
          let innerValue = initialValue.initialize(data2, path, key);
          obj.initialValue = innerValue;
          return initialize(data2, path, key);
        };
      } else {
        obj.initialValue = initialValue;
      }
      return obj;
    };
  }
  function get(obj, path) {
    return path.split(".").reduce((carry, segment) => carry[segment], obj);
  }
  function set(obj, path, value) {
    if (typeof path === "string")
      path = path.split(".");
    if (path.length === 1)
      obj[path[0]] = value;
    else if (path.length === 0)
      throw error;
    else {
      if (obj[path[0]])
        return set(obj[path[0]], path.slice(1), value);
      else {
        obj[path[0]] = {};
        return set(obj[path[0]], path.slice(1), value);
      }
    }
  }
  var magics = {};
  function magic(name, callback) {
    magics[name] = callback;
  }
  function injectMagics(obj, el) {
    Object.entries(magics).forEach(([name, callback]) => {
      Object.defineProperty(obj, `$${name}`, {
        get() {
          let [utilities, cleanup2] = getElementBoundUtilities(el);
          utilities = { interceptor, ...utilities };
          onElRemoved(el, cleanup2);
          return callback(el, utilities);
        },
        enumerable: false
      });
    });
    return obj;
  }
  function tryCatch(el, expression, callback, ...args) {
    try {
      return callback(...args);
    } catch (e2) {
      handleError(e2, el, expression);
    }
  }
  function handleError(error2, el, expression = void 0) {
    Object.assign(error2, { el, expression });
    console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
    setTimeout(() => {
      throw error2;
    }, 0);
  }
  var shouldAutoEvaluateFunctions = true;
  function dontAutoEvaluateFunctions(callback) {
    let cache2 = shouldAutoEvaluateFunctions;
    shouldAutoEvaluateFunctions = false;
    callback();
    shouldAutoEvaluateFunctions = cache2;
  }
  function evaluate(el, expression, extras = {}) {
    let result;
    evaluateLater(el, expression)((value) => result = value, extras);
    return result;
  }
  function evaluateLater(...args) {
    return theEvaluatorFunction(...args);
  }
  var theEvaluatorFunction = normalEvaluator;
  function setEvaluator(newEvaluator) {
    theEvaluatorFunction = newEvaluator;
  }
  function normalEvaluator(el, expression) {
    let overriddenMagics = {};
    injectMagics(overriddenMagics, el);
    let dataStack = [overriddenMagics, ...closestDataStack(el)];
    if (typeof expression === "function") {
      return generateEvaluatorFromFunction(dataStack, expression);
    }
    let evaluator = generateEvaluatorFromString(dataStack, expression, el);
    return tryCatch.bind(null, el, expression, evaluator);
  }
  function generateEvaluatorFromFunction(dataStack, func) {
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [] } = {}) => {
      let result = func.apply(mergeProxies([scope2, ...dataStack]), params);
      runIfTypeOfFunction(receiver, result);
    };
  }
  var evaluatorMemo = {};
  function generateFunctionFromString(expression, el) {
    if (evaluatorMemo[expression]) {
      return evaluatorMemo[expression];
    }
    let AsyncFunction = Object.getPrototypeOf(async function() {
    }).constructor;
    let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression) || /^(let|const)\s/.test(expression) ? `(() => { ${expression} })()` : expression;
    const safeAsyncFunction = () => {
      try {
        return new AsyncFunction(["__self", "scope"], `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`);
      } catch (error2) {
        handleError(error2, el, expression);
        return Promise.resolve();
      }
    };
    let func = safeAsyncFunction();
    evaluatorMemo[expression] = func;
    return func;
  }
  function generateEvaluatorFromString(dataStack, expression, el) {
    let func = generateFunctionFromString(expression, el);
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [] } = {}) => {
      func.result = void 0;
      func.finished = false;
      let completeScope = mergeProxies([scope2, ...dataStack]);
      if (typeof func === "function") {
        let promise = func(func, completeScope).catch((error2) => handleError(error2, el, expression));
        if (func.finished) {
          runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
          func.result = void 0;
        } else {
          promise.then((result) => {
            runIfTypeOfFunction(receiver, result, completeScope, params, el);
          }).catch((error2) => handleError(error2, el, expression)).finally(() => func.result = void 0);
        }
      }
    };
  }
  function runIfTypeOfFunction(receiver, value, scope2, params, el) {
    if (shouldAutoEvaluateFunctions && typeof value === "function") {
      let result = value.apply(scope2, params);
      if (result instanceof Promise) {
        result.then((i2) => runIfTypeOfFunction(receiver, i2, scope2, params)).catch((error2) => handleError(error2, el, value));
      } else {
        receiver(result);
      }
    } else {
      receiver(value);
    }
  }
  var prefixAsString = "x-";
  function prefix(subject = "") {
    return prefixAsString + subject;
  }
  function setPrefix(newPrefix) {
    prefixAsString = newPrefix;
  }
  var directiveHandlers = {};
  function directive(name, callback) {
    directiveHandlers[name] = callback;
  }
  function directives(el, attributes, originalAttributeOverride) {
    attributes = Array.from(attributes);
    if (el._x_virtualDirectives) {
      let vAttributes = Object.entries(el._x_virtualDirectives).map(([name, value]) => ({ name, value }));
      let staticAttributes = attributesOnly(vAttributes);
      vAttributes = vAttributes.map((attribute) => {
        if (staticAttributes.find((attr) => attr.name === attribute.name)) {
          return {
            name: `x-bind:${attribute.name}`,
            value: `"${attribute.value}"`
          };
        }
        return attribute;
      });
      attributes = attributes.concat(vAttributes);
    }
    let transformedAttributeMap = {};
    let directives2 = attributes.map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
    return directives2.map((directive2) => {
      return getDirectiveHandler(el, directive2);
    });
  }
  function attributesOnly(attributes) {
    return Array.from(attributes).map(toTransformedAttributes()).filter((attr) => !outNonAlpineAttributes(attr));
  }
  var isDeferringHandlers = false;
  var directiveHandlerStacks = new Map();
  var currentHandlerStackKey = Symbol();
  function deferHandlingDirectives(callback) {
    isDeferringHandlers = true;
    let key = Symbol();
    currentHandlerStackKey = key;
    directiveHandlerStacks.set(key, []);
    let flushHandlers = () => {
      while (directiveHandlerStacks.get(key).length)
        directiveHandlerStacks.get(key).shift()();
      directiveHandlerStacks.delete(key);
    };
    let stopDeferring = () => {
      isDeferringHandlers = false;
      flushHandlers();
    };
    callback(flushHandlers);
    stopDeferring();
  }
  function getElementBoundUtilities(el) {
    let cleanups = [];
    let cleanup2 = (callback) => cleanups.push(callback);
    let [effect3, cleanupEffect] = elementBoundEffect(el);
    cleanups.push(cleanupEffect);
    let utilities = {
      Alpine: alpine_default,
      effect: effect3,
      cleanup: cleanup2,
      evaluateLater: evaluateLater.bind(evaluateLater, el),
      evaluate: evaluate.bind(evaluate, el)
    };
    let doCleanup = () => cleanups.forEach((i2) => i2());
    return [utilities, doCleanup];
  }
  function getDirectiveHandler(el, directive2) {
    let noop = () => {
    };
    let handler3 = directiveHandlers[directive2.type] || noop;
    let [utilities, cleanup2] = getElementBoundUtilities(el);
    onAttributeRemoved(el, directive2.original, cleanup2);
    let fullHandler = () => {
      if (el._x_ignore || el._x_ignoreSelf)
        return;
      handler3.inline && handler3.inline(el, directive2, utilities);
      handler3 = handler3.bind(handler3, el, directive2, utilities);
      isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler3) : handler3();
    };
    fullHandler.runCleanups = cleanup2;
    return fullHandler;
  }
  var startingWith = (subject, replacement) => ({ name, value }) => {
    if (name.startsWith(subject))
      name = name.replace(subject, replacement);
    return { name, value };
  };
  var into = (i2) => i2;
  function toTransformedAttributes(callback = () => {
  }) {
    return ({ name, value }) => {
      let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform) => {
        return transform(carry);
      }, { name, value });
      if (newName !== name)
        callback(newName, name);
      return { name: newName, value: newValue };
    };
  }
  var attributeTransformers = [];
  function mapAttributes(callback) {
    attributeTransformers.push(callback);
  }
  function outNonAlpineAttributes({ name }) {
    return alpineAttributeRegex().test(name);
  }
  var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
  function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
    return ({ name, value }) => {
      let typeMatch = name.match(alpineAttributeRegex());
      let valueMatch = name.match(/:([a-zA-Z0-9\-:]+)/);
      let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
      let original = originalAttributeOverride || transformedAttributeMap[name] || name;
      return {
        type: typeMatch ? typeMatch[1] : null,
        value: valueMatch ? valueMatch[1] : null,
        modifiers: modifiers.map((i2) => i2.replace(".", "")),
        expression: value,
        original
      };
    };
  }
  var DEFAULT = "DEFAULT";
  var directiveOrder = [
    "ignore",
    "ref",
    "data",
    "id",
    "tabs",
    "radio",
    "switch",
    "disclosure",
    "bind",
    "init",
    "for",
    "mask",
    "model",
    "modelable",
    "transition",
    "show",
    "if",
    DEFAULT,
    "teleport"
  ];
  function byPriority(a2, b2) {
    let typeA = directiveOrder.indexOf(a2.type) === -1 ? DEFAULT : a2.type;
    let typeB = directiveOrder.indexOf(b2.type) === -1 ? DEFAULT : b2.type;
    return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
  }
  function dispatch(el, name, detail = {}) {
    el.dispatchEvent(new CustomEvent(name, {
      detail,
      bubbles: true,
      composed: true,
      cancelable: true
    }));
  }
  var tickStack = [];
  var isHolding = false;
  function nextTick(callback = () => {
  }) {
    queueMicrotask(() => {
      isHolding || setTimeout(() => {
        releaseNextTicks();
      });
    });
    return new Promise((res) => {
      tickStack.push(() => {
        callback();
        res();
      });
    });
  }
  function releaseNextTicks() {
    isHolding = false;
    while (tickStack.length)
      tickStack.shift()();
  }
  function holdNextTicks() {
    isHolding = true;
  }
  function walk(el, callback) {
    if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
      Array.from(el.children).forEach((el2) => walk(el2, callback));
      return;
    }
    let skip = false;
    callback(el, () => skip = true);
    if (skip)
      return;
    let node = el.firstElementChild;
    while (node) {
      walk(node, callback, false);
      node = node.nextElementSibling;
    }
  }
  function warn(message, ...args) {
    console.warn(`Alpine Warning: ${message}`, ...args);
  }
  function start() {
    if (!document.body)
      warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
    dispatch(document, "alpine:init");
    dispatch(document, "alpine:initializing");
    startObservingMutations();
    onElAdded((el) => initTree(el, walk));
    onElRemoved((el) => destroyTree(el));
    onAttributesAdded((el, attrs) => {
      directives(el, attrs).forEach((handle) => handle());
    });
    let outNestedComponents = (el) => !closestRoot(el.parentElement, true);
    Array.from(document.querySelectorAll(allSelectors())).filter(outNestedComponents).forEach((el) => {
      initTree(el);
    });
    dispatch(document, "alpine:initialized");
  }
  var rootSelectorCallbacks = [];
  var initSelectorCallbacks = [];
  function rootSelectors() {
    return rootSelectorCallbacks.map((fn) => fn());
  }
  function allSelectors() {
    return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn) => fn());
  }
  function addRootSelector(selectorCallback) {
    rootSelectorCallbacks.push(selectorCallback);
  }
  function addInitSelector(selectorCallback) {
    initSelectorCallbacks.push(selectorCallback);
  }
  function closestRoot(el, includeInitSelectors = false) {
    return findClosest(el, (element) => {
      const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
      if (selectors.some((selector) => element.matches(selector)))
        return true;
    });
  }
  function findClosest(el, callback) {
    if (!el)
      return;
    if (callback(el))
      return el;
    if (el._x_teleportBack)
      el = el._x_teleportBack;
    if (!el.parentElement)
      return;
    return findClosest(el.parentElement, callback);
  }
  function isRoot(el) {
    return rootSelectors().some((selector) => el.matches(selector));
  }
  function initTree(el, walker = walk) {
    deferHandlingDirectives(() => {
      walker(el, (el2, skip) => {
        directives(el2, el2.attributes).forEach((handle) => handle());
        el2._x_ignore && skip();
      });
    });
  }
  function destroyTree(root) {
    walk(root, (el) => cleanupAttributes(el));
  }
  function setClasses(el, value) {
    if (Array.isArray(value)) {
      return setClassesFromString(el, value.join(" "));
    } else if (typeof value === "object" && value !== null) {
      return setClassesFromObject(el, value);
    } else if (typeof value === "function") {
      return setClasses(el, value());
    }
    return setClassesFromString(el, value);
  }
  function setClassesFromString(el, classString) {
    let split = (classString2) => classString2.split(" ").filter(Boolean);
    let missingClasses = (classString2) => classString2.split(" ").filter((i2) => !el.classList.contains(i2)).filter(Boolean);
    let addClassesAndReturnUndo = (classes) => {
      el.classList.add(...classes);
      return () => {
        el.classList.remove(...classes);
      };
    };
    classString = classString === true ? classString = "" : classString || "";
    return addClassesAndReturnUndo(missingClasses(classString));
  }
  function setClassesFromObject(el, classObject) {
    let split = (classString) => classString.split(" ").filter(Boolean);
    let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
    let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
    let added = [];
    let removed = [];
    forRemove.forEach((i2) => {
      if (el.classList.contains(i2)) {
        el.classList.remove(i2);
        removed.push(i2);
      }
    });
    forAdd.forEach((i2) => {
      if (!el.classList.contains(i2)) {
        el.classList.add(i2);
        added.push(i2);
      }
    });
    return () => {
      removed.forEach((i2) => el.classList.add(i2));
      added.forEach((i2) => el.classList.remove(i2));
    };
  }
  function setStyles(el, value) {
    if (typeof value === "object" && value !== null) {
      return setStylesFromObject(el, value);
    }
    return setStylesFromString(el, value);
  }
  function setStylesFromObject(el, value) {
    let previousStyles = {};
    Object.entries(value).forEach(([key, value2]) => {
      previousStyles[key] = el.style[key];
      if (!key.startsWith("--")) {
        key = kebabCase(key);
      }
      el.style.setProperty(key, value2);
    });
    setTimeout(() => {
      if (el.style.length === 0) {
        el.removeAttribute("style");
      }
    });
    return () => {
      setStyles(el, previousStyles);
    };
  }
  function setStylesFromString(el, value) {
    let cache2 = el.getAttribute("style", value);
    el.setAttribute("style", value);
    return () => {
      el.setAttribute("style", cache2 || "");
    };
  }
  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  function once(callback, fallback = () => {
  }) {
    let called = false;
    return function() {
      if (!called) {
        called = true;
        callback.apply(this, arguments);
      } else {
        fallback.apply(this, arguments);
      }
    };
  }
  directive("transition", (el, { value, modifiers, expression }, { evaluate: evaluate2 }) => {
    if (typeof expression === "function")
      expression = evaluate2(expression);
    if (!expression) {
      registerTransitionsFromHelper(el, modifiers, value);
    } else {
      registerTransitionsFromClassString(el, expression, value);
    }
  });
  function registerTransitionsFromClassString(el, classString, stage) {
    registerTransitionObject(el, setClasses, "");
    let directiveStorageMap = {
      enter: (classes) => {
        el._x_transition.enter.during = classes;
      },
      "enter-start": (classes) => {
        el._x_transition.enter.start = classes;
      },
      "enter-end": (classes) => {
        el._x_transition.enter.end = classes;
      },
      leave: (classes) => {
        el._x_transition.leave.during = classes;
      },
      "leave-start": (classes) => {
        el._x_transition.leave.start = classes;
      },
      "leave-end": (classes) => {
        el._x_transition.leave.end = classes;
      }
    };
    directiveStorageMap[stage](classString);
  }
  function registerTransitionsFromHelper(el, modifiers, stage) {
    registerTransitionObject(el, setStyles);
    let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
    let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
    let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
    if (modifiers.includes("in") && !doesntSpecify) {
      modifiers = modifiers.filter((i2, index) => index < modifiers.indexOf("out"));
    }
    if (modifiers.includes("out") && !doesntSpecify) {
      modifiers = modifiers.filter((i2, index) => index > modifiers.indexOf("out"));
    }
    let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
    let wantsOpacity = wantsAll || modifiers.includes("opacity");
    let wantsScale = wantsAll || modifiers.includes("scale");
    let opacityValue = wantsOpacity ? 0 : 1;
    let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
    let delay = modifierValue(modifiers, "delay", 0);
    let origin = modifierValue(modifiers, "origin", "center");
    let property = "opacity, transform";
    let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
    let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
    let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
    if (transitioningIn) {
      el._x_transition.enter.during = {
        transformOrigin: origin,
        transitionDelay: delay,
        transitionProperty: property,
        transitionDuration: `${durationIn}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.enter.start = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
      el._x_transition.enter.end = {
        opacity: 1,
        transform: `scale(1)`
      };
    }
    if (transitioningOut) {
      el._x_transition.leave.during = {
        transformOrigin: origin,
        transitionDelay: delay,
        transitionProperty: property,
        transitionDuration: `${durationOut}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.leave.start = {
        opacity: 1,
        transform: `scale(1)`
      };
      el._x_transition.leave.end = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
    }
  }
  function registerTransitionObject(el, setFunction, defaultValue = {}) {
    if (!el._x_transition)
      el._x_transition = {
        enter: { during: defaultValue, start: defaultValue, end: defaultValue },
        leave: { during: defaultValue, start: defaultValue, end: defaultValue },
        in(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.enter.during,
            start: this.enter.start,
            end: this.enter.end
          }, before, after);
        },
        out(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.leave.during,
            start: this.leave.start,
            end: this.leave.end
          }, before, after);
        }
      };
  }
  window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
    const nextTick2 = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
    let clickAwayCompatibleShow = () => nextTick2(show);
    if (value) {
      if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
        el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
      } else {
        el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
      }
      return;
    }
    el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
      el._x_transition.out(() => {
      }, () => resolve(hide));
      el._x_transitioning.beforeCancel(() => reject({ isFromCancelledTransition: true }));
    }) : Promise.resolve(hide);
    queueMicrotask(() => {
      let closest = closestHide(el);
      if (closest) {
        if (!closest._x_hideChildren)
          closest._x_hideChildren = [];
        closest._x_hideChildren.push(el);
      } else {
        nextTick2(() => {
          let hideAfterChildren = (el2) => {
            let carry = Promise.all([
              el2._x_hidePromise,
              ...(el2._x_hideChildren || []).map(hideAfterChildren)
            ]).then(([i2]) => i2());
            delete el2._x_hidePromise;
            delete el2._x_hideChildren;
            return carry;
          };
          hideAfterChildren(el).catch((e2) => {
            if (!e2.isFromCancelledTransition)
              throw e2;
          });
        });
      }
    });
  };
  function closestHide(el) {
    let parent = el.parentNode;
    if (!parent)
      return;
    return parent._x_hidePromise ? parent : closestHide(parent);
  }
  function transition(el, setFunction, { during, start: start2, end } = {}, before = () => {
  }, after = () => {
  }) {
    if (el._x_transitioning)
      el._x_transitioning.cancel();
    if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
      before();
      after();
      return;
    }
    let undoStart, undoDuring, undoEnd;
    performTransition(el, {
      start() {
        undoStart = setFunction(el, start2);
      },
      during() {
        undoDuring = setFunction(el, during);
      },
      before,
      end() {
        undoStart();
        undoEnd = setFunction(el, end);
      },
      after,
      cleanup() {
        undoDuring();
        undoEnd();
      }
    });
  }
  function performTransition(el, stages) {
    let interrupted, reachedBefore, reachedEnd;
    let finish = once(() => {
      mutateDom(() => {
        interrupted = true;
        if (!reachedBefore)
          stages.before();
        if (!reachedEnd) {
          stages.end();
          releaseNextTicks();
        }
        stages.after();
        if (el.isConnected)
          stages.cleanup();
        delete el._x_transitioning;
      });
    });
    el._x_transitioning = {
      beforeCancels: [],
      beforeCancel(callback) {
        this.beforeCancels.push(callback);
      },
      cancel: once(function() {
        while (this.beforeCancels.length) {
          this.beforeCancels.shift()();
        }
        ;
        finish();
      }),
      finish
    };
    mutateDom(() => {
      stages.start();
      stages.during();
    });
    holdNextTicks();
    requestAnimationFrame(() => {
      if (interrupted)
        return;
      let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
      let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
      if (duration === 0)
        duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
      mutateDom(() => {
        stages.before();
      });
      reachedBefore = true;
      requestAnimationFrame(() => {
        if (interrupted)
          return;
        mutateDom(() => {
          stages.end();
        });
        releaseNextTicks();
        setTimeout(el._x_transitioning.finish, duration + delay);
        reachedEnd = true;
      });
    });
  }
  function modifierValue(modifiers, key, fallback) {
    if (modifiers.indexOf(key) === -1)
      return fallback;
    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue)
      return fallback;
    if (key === "scale") {
      if (isNaN(rawValue))
        return fallback;
    }
    if (key === "duration") {
      let match = rawValue.match(/([0-9]+)ms/);
      if (match)
        return match[1];
    }
    if (key === "origin") {
      if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
      }
    }
    return rawValue;
  }
  var isCloning = false;
  function skipDuringClone(callback, fallback = () => {
  }) {
    return (...args) => isCloning ? fallback(...args) : callback(...args);
  }
  function clone(oldEl, newEl) {
    if (!newEl._x_dataStack)
      newEl._x_dataStack = oldEl._x_dataStack;
    isCloning = true;
    dontRegisterReactiveSideEffects(() => {
      cloneTree(newEl);
    });
    isCloning = false;
  }
  function cloneTree(el) {
    let hasRunThroughFirstEl = false;
    let shallowWalker = (el2, callback) => {
      walk(el2, (el3, skip) => {
        if (hasRunThroughFirstEl && isRoot(el3))
          return skip();
        hasRunThroughFirstEl = true;
        callback(el3, skip);
      });
    };
    initTree(el, shallowWalker);
  }
  function dontRegisterReactiveSideEffects(callback) {
    let cache2 = effect;
    overrideEffect((callback2, el) => {
      let storedEffect = cache2(callback2);
      release(storedEffect);
      return () => {
      };
    });
    callback();
    overrideEffect(cache2);
  }
  function bind(el, name, value, modifiers = []) {
    if (!el._x_bindings)
      el._x_bindings = reactive({});
    el._x_bindings[name] = value;
    name = modifiers.includes("camel") ? camelCase(name) : name;
    switch (name) {
      case "value":
        bindInputValue(el, value);
        break;
      case "style":
        bindStyles(el, value);
        break;
      case "class":
        bindClasses(el, value);
        break;
      default:
        bindAttribute(el, name, value);
        break;
    }
  }
  function bindInputValue(el, value) {
    if (el.type === "radio") {
      if (el.attributes.value === void 0) {
        el.value = value;
      }
      if (window.fromModel) {
        el.checked = checkedAttrLooseCompare(el.value, value);
      }
    } else if (el.type === "checkbox") {
      if (Number.isInteger(value)) {
        el.value = value;
      } else if (!Number.isInteger(value) && !Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
        el.value = String(value);
      } else {
        if (Array.isArray(value)) {
          el.checked = value.some((val) => checkedAttrLooseCompare(val, el.value));
        } else {
          el.checked = !!value;
        }
      }
    } else if (el.tagName === "SELECT") {
      updateSelect(el, value);
    } else {
      if (el.value === value)
        return;
      el.value = value;
    }
  }
  function bindClasses(el, value) {
    if (el._x_undoAddedClasses)
      el._x_undoAddedClasses();
    el._x_undoAddedClasses = setClasses(el, value);
  }
  function bindStyles(el, value) {
    if (el._x_undoAddedStyles)
      el._x_undoAddedStyles();
    el._x_undoAddedStyles = setStyles(el, value);
  }
  function bindAttribute(el, name, value) {
    if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
      el.removeAttribute(name);
    } else {
      if (isBooleanAttr(name))
        value = name;
      setIfChanged(el, name, value);
    }
  }
  function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) {
      el.setAttribute(attrName, value);
    }
  }
  function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map((value2) => {
      return value2 + "";
    });
    Array.from(el.options).forEach((option) => {
      option.selected = arrayWrappedValue.includes(option.value);
    });
  }
  function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
  }
  function isBooleanAttr(attrName) {
    const booleanAttributes = [
      "disabled",
      "checked",
      "required",
      "readonly",
      "hidden",
      "open",
      "selected",
      "autofocus",
      "itemscope",
      "multiple",
      "novalidate",
      "allowfullscreen",
      "allowpaymentrequest",
      "formnovalidate",
      "autoplay",
      "controls",
      "loop",
      "muted",
      "playsinline",
      "default",
      "ismap",
      "reversed",
      "async",
      "defer",
      "nomodule"
    ];
    return booleanAttributes.includes(attrName);
  }
  function attributeShouldntBePreservedIfFalsy(name) {
    return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(name);
  }
  function getBinding(el, name, fallback) {
    if (el._x_bindings && el._x_bindings[name] !== void 0)
      return el._x_bindings[name];
    let attr = el.getAttribute(name);
    if (attr === null)
      return typeof fallback === "function" ? fallback() : fallback;
    if (attr === "")
      return true;
    if (isBooleanAttr(name)) {
      return !![name, "true"].includes(attr);
    }
    return attr;
  }
  function debounce(func, wait) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      let context = this, args = arguments;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  function plugin(callback) {
    callback(alpine_default);
  }
  var stores = {};
  var isReactive = false;
  function store(name, value) {
    if (!isReactive) {
      stores = reactive(stores);
      isReactive = true;
    }
    if (value === void 0) {
      return stores[name];
    }
    stores[name] = value;
    if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
      stores[name].init();
    }
    initInterceptors(stores[name]);
  }
  function getStores() {
    return stores;
  }
  var binds = {};
  function bind2(name, bindings) {
    let getBindings = typeof bindings !== "function" ? () => bindings : bindings;
    if (name instanceof Element) {
      applyBindingsObject(name, getBindings());
    } else {
      binds[name] = getBindings;
    }
  }
  function injectBindingProviders(obj) {
    Object.entries(binds).forEach(([name, callback]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback(...args);
          };
        }
      });
    });
    return obj;
  }
  function applyBindingsObject(el, obj, original) {
    let cleanupRunners = [];
    while (cleanupRunners.length)
      cleanupRunners.pop()();
    let attributes = Object.entries(obj).map(([name, value]) => ({ name, value }));
    let staticAttributes = attributesOnly(attributes);
    attributes = attributes.map((attribute) => {
      if (staticAttributes.find((attr) => attr.name === attribute.name)) {
        return {
          name: `x-bind:${attribute.name}`,
          value: `"${attribute.value}"`
        };
      }
      return attribute;
    });
    directives(el, attributes, original).map((handle) => {
      cleanupRunners.push(handle.runCleanups);
      handle();
    });
  }
  var datas = {};
  function data(name, callback) {
    datas[name] = callback;
  }
  function injectDataProviders(obj, context) {
    Object.entries(datas).forEach(([name, callback]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback.bind(context)(...args);
          };
        },
        enumerable: false
      });
    });
    return obj;
  }
  var Alpine = {
    get reactive() {
      return reactive;
    },
    get release() {
      return release;
    },
    get effect() {
      return effect;
    },
    get raw() {
      return raw;
    },
    version: "3.10.4",
    flushAndStopDeferringMutations,
    dontAutoEvaluateFunctions,
    disableEffectScheduling,
    setReactivityEngine,
    closestDataStack,
    skipDuringClone,
    addRootSelector,
    addInitSelector,
    addScopeToNode,
    deferMutations,
    mapAttributes,
    evaluateLater,
    setEvaluator,
    mergeProxies,
    findClosest,
    closestRoot,
    interceptor,
    transition,
    setStyles,
    mutateDom,
    directive,
    throttle,
    debounce,
    evaluate,
    initTree,
    nextTick,
    prefixed: prefix,
    prefix: setPrefix,
    plugin,
    magic,
    store,
    start,
    clone,
    bound: getBinding,
    $data: scope,
    data,
    bind: bind2
  };
  var alpine_default = Alpine;
  function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(",");
    for (let i2 = 0; i2 < list.length; i2++) {
      map[list[i2]] = true;
    }
    return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
  }
  var PatchFlagNames = {
    [1]: `TEXT`,
    [2]: `CLASS`,
    [4]: `STYLE`,
    [8]: `PROPS`,
    [16]: `FULL_PROPS`,
    [32]: `HYDRATE_EVENTS`,
    [64]: `STABLE_FRAGMENT`,
    [128]: `KEYED_FRAGMENT`,
    [256]: `UNKEYED_FRAGMENT`,
    [512]: `NEED_PATCH`,
    [1024]: `DYNAMIC_SLOTS`,
    [2048]: `DEV_ROOT_FRAGMENT`,
    [-1]: `HOISTED`,
    [-2]: `BAIL`
  };
  var slotFlagsText = {
    [1]: "STABLE",
    [2]: "DYNAMIC",
    [3]: "FORWARDED"
  };
  var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
  var EMPTY_OBJ = true ? Object.freeze({}) : {};
  var EMPTY_ARR = true ? Object.freeze([]) : [];
  var extend = Object.assign;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var isArray = Array.isArray;
  var isMap = (val) => toTypeString(val) === "[object Map]";
  var isString = (val) => typeof val === "string";
  var isSymbol = (val) => typeof val === "symbol";
  var isObject = (val) => val !== null && typeof val === "object";
  var objectToString = Object.prototype.toString;
  var toTypeString = (value) => objectToString.call(value);
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  var cacheStringFunction = (fn) => {
    const cache2 = Object.create(null);
    return (str) => {
      const hit = cache2[str];
      return hit || (cache2[str] = fn(str));
    };
  };
  var camelizeRE = /-(\w)/g;
  var camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c2) => c2 ? c2.toUpperCase() : "");
  });
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
  var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
  var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
  var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
  var targetMap = new WeakMap();
  var effectStack = [];
  var activeEffect;
  var ITERATE_KEY = Symbol(true ? "iterate" : "");
  var MAP_KEY_ITERATE_KEY = Symbol(true ? "Map key iterate" : "");
  function isEffect(fn) {
    return fn && fn._isEffect === true;
  }
  function effect2(fn, options = EMPTY_OBJ) {
    if (isEffect(fn)) {
      fn = fn.raw;
    }
    const effect3 = createReactiveEffect(fn, options);
    if (!options.lazy) {
      effect3();
    }
    return effect3;
  }
  function stop(effect3) {
    if (effect3.active) {
      cleanup(effect3);
      if (effect3.options.onStop) {
        effect3.options.onStop();
      }
      effect3.active = false;
    }
  }
  var uid = 0;
  function createReactiveEffect(fn, options) {
    const effect3 = function reactiveEffect() {
      if (!effect3.active) {
        return fn();
      }
      if (!effectStack.includes(effect3)) {
        cleanup(effect3);
        try {
          enableTracking();
          effectStack.push(effect3);
          activeEffect = effect3;
          return fn();
        } finally {
          effectStack.pop();
          resetTracking();
          activeEffect = effectStack[effectStack.length - 1];
        }
      }
    };
    effect3.id = uid++;
    effect3.allowRecurse = !!options.allowRecurse;
    effect3._isEffect = true;
    effect3.active = true;
    effect3.raw = fn;
    effect3.deps = [];
    effect3.options = options;
    return effect3;
  }
  function cleanup(effect3) {
    const { deps } = effect3;
    if (deps.length) {
      for (let i2 = 0; i2 < deps.length; i2++) {
        deps[i2].delete(effect3);
      }
      deps.length = 0;
    }
  }
  var shouldTrack = true;
  var trackStack = [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
  }
  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
  }
  function track(target, type, key) {
    if (!shouldTrack || activeEffect === void 0) {
      return;
    }
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = new Set());
    }
    if (!dep.has(activeEffect)) {
      dep.add(activeEffect);
      activeEffect.deps.push(dep);
      if (activeEffect.options.onTrack) {
        activeEffect.options.onTrack({
          effect: activeEffect,
          target,
          type,
          key
        });
      }
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      return;
    }
    const effects = new Set();
    const add2 = (effectsToAdd) => {
      if (effectsToAdd) {
        effectsToAdd.forEach((effect3) => {
          if (effect3 !== activeEffect || effect3.allowRecurse) {
            effects.add(effect3);
          }
        });
      }
    };
    if (type === "clear") {
      depsMap.forEach(add2);
    } else if (key === "length" && isArray(target)) {
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 >= newValue) {
          add2(dep);
        }
      });
    } else {
      if (key !== void 0) {
        add2(depsMap.get(key));
      }
      switch (type) {
        case "add":
          if (!isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isIntegerKey(key)) {
            add2(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            add2(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
    const run = (effect3) => {
      if (effect3.options.onTrigger) {
        effect3.options.onTrigger({
          effect: effect3,
          target,
          key,
          type,
          newValue,
          oldValue,
          oldTarget
        });
      }
      if (effect3.options.scheduler) {
        effect3.options.scheduler(effect3);
      } else {
        effect3();
      }
    };
    effects.forEach(run);
  }
  var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
  var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
  var get2 = /* @__PURE__ */ createGetter();
  var shallowGet = /* @__PURE__ */ createGetter(false, true);
  var readonlyGet = /* @__PURE__ */ createGetter(true);
  var shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
  var arrayInstrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i2 = 0, l2 = this.length; i2 < l2; i2++) {
        track(arr, "get", i2 + "");
      }
      const res = method.apply(arr, args);
      if (res === -1 || res === false) {
        return method.apply(arr, args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function(...args) {
      pauseTracking();
      const res = method.apply(this, args);
      resetTracking();
      return res;
    };
  });
  function createGetter(isReadonly = false, shallow = false) {
    return function get3(target, key, receiver) {
      if (key === "__v_isReactive") {
        return !isReadonly;
      } else if (key === "__v_isReadonly") {
        return isReadonly;
      } else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
        return target;
      }
      const targetIsArray = isArray(target);
      if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      const res = Reflect.get(target, key, receiver);
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly) {
        track(target, "get", key);
      }
      if (shallow) {
        return res;
      }
      if (isRef(res)) {
        const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
        return shouldUnwrap ? res.value : res;
      }
      if (isObject(res)) {
        return isReadonly ? readonly(res) : reactive2(res);
      }
      return res;
    };
  }
  var set2 = /* @__PURE__ */ createSetter();
  var shallowSet = /* @__PURE__ */ createSetter(true);
  function createSetter(shallow = false) {
    return function set3(target, key, value, receiver) {
      let oldValue = target[key];
      if (!shallow) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
        if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        }
      }
      const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
      const result = Reflect.set(target, key, value, receiver);
      if (target === toRaw(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
      }
      return result;
    };
  }
  function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  function ownKeys(target) {
    track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
  var mutableHandlers = {
    get: get2,
    set: set2,
    deleteProperty,
    has,
    ownKeys
  };
  var readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
      if (true) {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    },
    deleteProperty(target, key) {
      if (true) {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    }
  };
  var shallowReactiveHandlers = extend({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
  });
  var shallowReadonlyHandlers = extend({}, readonlyHandlers, {
    get: shallowReadonlyGet
  });
  var toReactive = (value) => isObject(value) ? reactive2(value) : value;
  var toReadonly = (value) => isObject(value) ? readonly(value) : value;
  var toShallow = (value) => value;
  var getProto = (v) => Reflect.getPrototypeOf(v);
  function get$1(target, key, isReadonly = false, isShallow = false) {
    target = target["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "get", key);
    }
    !isReadonly && track(rawTarget, "get", rawKey);
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) {
      return wrap(target.get(key));
    } else if (has2.call(rawTarget, rawKey)) {
      return wrap(target.get(rawKey));
    } else if (target !== rawTarget) {
      target.get(key);
    }
  }
  function has$1(key, isReadonly = false) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "has", key);
    }
    !isReadonly && track(rawTarget, "has", rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
  }
  function size(target, isReadonly = false) {
    target = target["__v_raw"];
    !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
  }
  function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
      target.add(value);
      trigger(target, "add", value, value);
    }
    return this;
  }
  function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (true) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3.call(target, key);
    target.set(key, value);
    if (!hadKey) {
      trigger(target, "add", key, value);
    } else if (hasChanged(value, oldValue)) {
      trigger(target, "set", key, value, oldValue);
    }
    return this;
  }
  function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (true) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3 ? get3.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = true ? isMap(target) ? new Map(target) : new Set(target) : void 0;
    const result = target.clear();
    if (hadItems) {
      trigger(target, "clear", void 0, void 0, oldTarget);
    }
    return result;
  }
  function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw(target);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    };
  }
  function createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const targetIsMap = isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
      return {
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      if (true) {
        const key = args[0] ? `on key "${args[0]}" ` : ``;
        console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
      }
      return type === "delete" ? false : this;
    };
  }
  var mutableInstrumentations = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  var shallowInstrumentations = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  var readonlyInstrumentations = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  var shallowReadonlyInstrumentations = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  var iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations[method] = createIterableMethod(method, true, false);
    shallowInstrumentations[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
  });
  function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly;
      } else if (key === "__v_isReadonly") {
        return isReadonly;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
  }
  var mutableCollectionHandlers = {
    get: createInstrumentationGetter(false, false)
  };
  var shallowCollectionHandlers = {
    get: createInstrumentationGetter(false, true)
  };
  var readonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, false)
  };
  var shallowReadonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, true)
  };
  function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
      const type = toRawType(target);
      console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
  }
  var reactiveMap = new WeakMap();
  var shallowReactiveMap = new WeakMap();
  var readonlyMap = new WeakMap();
  var shallowReadonlyMap = new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
  }
  function reactive2(target) {
    if (target && target["__v_isReadonly"]) {
      return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
  }
  function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
  }
  function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
      if (true) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
      }
      return target;
    }
    if (target["__v_raw"] && !(isReadonly && target["__v_isReactive"])) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const targetType = getTargetType(target);
    if (targetType === 0) {
      return target;
    }
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
  }
  function toRaw(observed) {
    return observed && toRaw(observed["__v_raw"]) || observed;
  }
  function isRef(r2) {
    return Boolean(r2 && r2.__v_isRef === true);
  }
  magic("nextTick", () => nextTick);
  magic("dispatch", (el) => dispatch.bind(dispatch, el));
  magic("watch", (el, { evaluateLater: evaluateLater2, effect: effect3 }) => (key, callback) => {
    let evaluate2 = evaluateLater2(key);
    let firstTime = true;
    let oldValue;
    let effectReference = effect3(() => evaluate2((value) => {
      JSON.stringify(value);
      if (!firstTime) {
        queueMicrotask(() => {
          callback(value, oldValue);
          oldValue = value;
        });
      } else {
        oldValue = value;
      }
      firstTime = false;
    }));
    el._x_effects.delete(effectReference);
  });
  magic("store", getStores);
  magic("data", (el) => scope(el));
  magic("root", (el) => closestRoot(el));
  magic("refs", (el) => {
    if (el._x_refs_proxy)
      return el._x_refs_proxy;
    el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
    return el._x_refs_proxy;
  });
  function getArrayOfRefObject(el) {
    let refObjects = [];
    let currentEl = el;
    while (currentEl) {
      if (currentEl._x_refs)
        refObjects.push(currentEl._x_refs);
      currentEl = currentEl.parentNode;
    }
    return refObjects;
  }
  var globalIdMemo = {};
  function findAndIncrementId(name) {
    if (!globalIdMemo[name])
      globalIdMemo[name] = 0;
    return ++globalIdMemo[name];
  }
  function closestIdRoot(el, name) {
    return findClosest(el, (element) => {
      if (element._x_ids && element._x_ids[name])
        return true;
    });
  }
  function setIdRoot(el, name) {
    if (!el._x_ids)
      el._x_ids = {};
    if (!el._x_ids[name])
      el._x_ids[name] = findAndIncrementId(name);
  }
  magic("id", (el) => (name, key = null) => {
    let root = closestIdRoot(el, name);
    let id = root ? root._x_ids[name] : findAndIncrementId(name);
    return key ? `${name}-${id}-${key}` : `${name}-${id}`;
  });
  magic("el", (el) => el);
  warnMissingPluginMagic("Focus", "focus", "focus");
  warnMissingPluginMagic("Persist", "persist", "persist");
  function warnMissingPluginMagic(name, magicName, slug) {
    magic(magicName, (el) => warn(`You can't use [$${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
  }
  directive("modelable", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let func = evaluateLater2(expression);
    let innerGet = () => {
      let result;
      func((i2) => result = i2);
      return result;
    };
    let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
    let innerSet = (val) => evaluateInnerSet(() => {
    }, { scope: { __placeholder: val } });
    let initialValue = innerGet();
    innerSet(initialValue);
    queueMicrotask(() => {
      if (!el._x_model)
        return;
      el._x_removeModelListeners["default"]();
      let outerGet = el._x_model.get;
      let outerSet = el._x_model.set;
      effect3(() => innerSet(outerGet()));
      effect3(() => outerSet(innerGet()));
    });
  });
  directive("teleport", (el, { expression }, { cleanup: cleanup2 }) => {
    if (el.tagName.toLowerCase() !== "template")
      warn("x-teleport can only be used on a <template> tag", el);
    let target = document.querySelector(expression);
    if (!target)
      warn(`Cannot find x-teleport element for selector: "${expression}"`);
    let clone2 = el.content.cloneNode(true).firstElementChild;
    el._x_teleport = clone2;
    clone2._x_teleportBack = el;
    if (el._x_forwardEvents) {
      el._x_forwardEvents.forEach((eventName) => {
        clone2.addEventListener(eventName, (e2) => {
          e2.stopPropagation();
          el.dispatchEvent(new e2.constructor(e2.type, e2));
        });
      });
    }
    addScopeToNode(clone2, {}, el);
    mutateDom(() => {
      target.appendChild(clone2);
      initTree(clone2);
      clone2._x_ignore = true;
    });
    cleanup2(() => clone2.remove());
  });
  var handler = () => {
  };
  handler.inline = (el, { modifiers }, { cleanup: cleanup2 }) => {
    modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
    cleanup2(() => {
      modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
    });
  };
  directive("ignore", handler);
  directive("effect", (el, { expression }, { effect: effect3 }) => effect3(evaluateLater(el, expression)));
  function on(el, event2, modifiers, callback) {
    let listenerTarget = el;
    let handler3 = (e2) => callback(e2);
    let options = {};
    let wrapHandler = (callback2, wrapper) => (e2) => wrapper(callback2, e2);
    if (modifiers.includes("dot"))
      event2 = dotSyntax(event2);
    if (modifiers.includes("camel"))
      event2 = camelCase2(event2);
    if (modifiers.includes("passive"))
      options.passive = true;
    if (modifiers.includes("capture"))
      options.capture = true;
    if (modifiers.includes("window"))
      listenerTarget = window;
    if (modifiers.includes("document"))
      listenerTarget = document;
    if (modifiers.includes("prevent"))
      handler3 = wrapHandler(handler3, (next, e2) => {
        e2.preventDefault();
        next(e2);
      });
    if (modifiers.includes("stop"))
      handler3 = wrapHandler(handler3, (next, e2) => {
        e2.stopPropagation();
        next(e2);
      });
    if (modifiers.includes("self"))
      handler3 = wrapHandler(handler3, (next, e2) => {
        e2.target === el && next(e2);
      });
    if (modifiers.includes("away") || modifiers.includes("outside")) {
      listenerTarget = document;
      handler3 = wrapHandler(handler3, (next, e2) => {
        if (el.contains(e2.target))
          return;
        if (e2.target.isConnected === false)
          return;
        if (el.offsetWidth < 1 && el.offsetHeight < 1)
          return;
        if (el._x_isShown === false)
          return;
        next(e2);
      });
    }
    if (modifiers.includes("once")) {
      handler3 = wrapHandler(handler3, (next, e2) => {
        next(e2);
        listenerTarget.removeEventListener(event2, handler3, options);
      });
    }
    handler3 = wrapHandler(handler3, (next, e2) => {
      if (isKeyEvent(event2)) {
        if (isListeningForASpecificKeyThatHasntBeenPressed(e2, modifiers)) {
          return;
        }
      }
      next(e2);
    });
    if (modifiers.includes("debounce")) {
      let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler3 = debounce(handler3, wait);
    }
    if (modifiers.includes("throttle")) {
      let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler3 = throttle(handler3, wait);
    }
    listenerTarget.addEventListener(event2, handler3, options);
    return () => {
      listenerTarget.removeEventListener(event2, handler3, options);
    };
  }
  function dotSyntax(subject) {
    return subject.replace(/-/g, ".");
  }
  function camelCase2(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function kebabCase2(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
  }
  function isKeyEvent(event2) {
    return ["keydown", "keyup"].includes(event2);
  }
  function isListeningForASpecificKeyThatHasntBeenPressed(e2, modifiers) {
    let keyModifiers = modifiers.filter((i2) => {
      return !["window", "document", "prevent", "stop", "once"].includes(i2);
    });
    if (keyModifiers.includes("debounce")) {
      let debounceIndex = keyModifiers.indexOf("debounce");
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.length === 0)
      return false;
    if (keyModifiers.length === 1 && keyToModifiers(e2.key).includes(keyModifiers[0]))
      return false;
    const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter((i2) => !selectedSystemKeyModifiers.includes(i2));
    if (selectedSystemKeyModifiers.length > 0) {
      const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
        if (modifier === "cmd" || modifier === "super")
          modifier = "meta";
        return e2[`${modifier}Key`];
      });
      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        if (keyToModifiers(e2.key).includes(keyModifiers[0]))
          return false;
      }
    }
    return true;
  }
  function keyToModifiers(key) {
    if (!key)
      return [];
    key = kebabCase2(key);
    let modifierToKeyMap = {
      ctrl: "control",
      slash: "/",
      space: "-",
      spacebar: "-",
      cmd: "meta",
      esc: "escape",
      up: "arrow-up",
      down: "arrow-down",
      left: "arrow-left",
      right: "arrow-right",
      period: ".",
      equal: "="
    };
    modifierToKeyMap[key] = key;
    return Object.keys(modifierToKeyMap).map((modifier) => {
      if (modifierToKeyMap[modifier] === key)
        return modifier;
    }).filter((modifier) => modifier);
  }
  directive("model", (el, { modifiers, expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let evaluate2 = evaluateLater(el, expression);
    let assignmentExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
    let evaluateAssignment = evaluateLater(el, assignmentExpression);
    var event2 = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
    let assigmentFunction = generateAssignmentFunction(el, modifiers, expression);
    let removeListener2 = on(el, event2, modifiers, (e2) => {
      evaluateAssignment(() => {
      }, { scope: {
        $event: e2,
        rightSideOfExpression: assigmentFunction
      } });
    });
    if (!el._x_removeModelListeners)
      el._x_removeModelListeners = {};
    el._x_removeModelListeners["default"] = removeListener2;
    cleanup2(() => el._x_removeModelListeners["default"]());
    let evaluateSetModel = evaluateLater(el, `${expression} = __placeholder`);
    el._x_model = {
      get() {
        let result;
        evaluate2((value) => result = value);
        return result;
      },
      set(value) {
        evaluateSetModel(() => {
        }, { scope: { __placeholder: value } });
      }
    };
    el._x_forceModelUpdate = () => {
      evaluate2((value) => {
        if (value === void 0 && expression.match(/\./))
          value = "";
        window.fromModel = true;
        mutateDom(() => bind(el, "value", value));
        delete window.fromModel;
      });
    };
    effect3(() => {
      if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el))
        return;
      el._x_forceModelUpdate();
    });
  });
  function generateAssignmentFunction(el, modifiers, expression) {
    if (el.type === "radio") {
      mutateDom(() => {
        if (!el.hasAttribute("name"))
          el.setAttribute("name", expression);
      });
    }
    return (event2, currentValue) => {
      return mutateDom(() => {
        if (event2 instanceof CustomEvent && event2.detail !== void 0) {
          return event2.detail || event2.target.value;
        } else if (el.type === "checkbox") {
          if (Array.isArray(currentValue)) {
            let newValue = modifiers.includes("number") ? safeParseNumber(event2.target.value) : event2.target.value;
            return event2.target.checked ? currentValue.concat([newValue]) : currentValue.filter((el2) => !checkedAttrLooseCompare2(el2, newValue));
          } else {
            return event2.target.checked;
          }
        } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
          return modifiers.includes("number") ? Array.from(event2.target.selectedOptions).map((option) => {
            let rawValue = option.value || option.text;
            return safeParseNumber(rawValue);
          }) : Array.from(event2.target.selectedOptions).map((option) => {
            return option.value || option.text;
          });
        } else {
          let rawValue = event2.target.value;
          return modifiers.includes("number") ? safeParseNumber(rawValue) : modifiers.includes("trim") ? rawValue.trim() : rawValue;
        }
      });
    };
  }
  function safeParseNumber(rawValue) {
    let number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric2(number) ? number : rawValue;
  }
  function checkedAttrLooseCompare2(valueA, valueB) {
    return valueA == valueB;
  }
  function isNumeric2(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  directive("cloak", (el) => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak")))));
  addInitSelector(() => `[${prefix("init")}]`);
  directive("init", skipDuringClone((el, { expression }, { evaluate: evaluate2 }) => {
    if (typeof expression === "string") {
      return !!expression.trim() && evaluate2(expression, {}, false);
    }
    return evaluate2(expression, {}, false);
  }));
  directive("text", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect3(() => {
      evaluate2((value) => {
        mutateDom(() => {
          el.textContent = value;
        });
      });
    });
  });
  directive("html", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect3(() => {
      evaluate2((value) => {
        mutateDom(() => {
          el.innerHTML = value;
          el._x_ignoreSelf = true;
          initTree(el);
          delete el._x_ignoreSelf;
        });
      });
    });
  });
  mapAttributes(startingWith(":", into(prefix("bind:"))));
  directive("bind", (el, { value, modifiers, expression, original }, { effect: effect3 }) => {
    if (!value) {
      let bindingProviders = {};
      injectBindingProviders(bindingProviders);
      let getBindings = evaluateLater(el, expression);
      getBindings((bindings) => {
        applyBindingsObject(el, bindings, original);
      }, { scope: bindingProviders });
      return;
    }
    if (value === "key")
      return storeKeyForXFor(el, expression);
    let evaluate2 = evaluateLater(el, expression);
    effect3(() => evaluate2((result) => {
      if (result === void 0 && typeof expression === "string" && expression.match(/\./)) {
        result = "";
      }
      mutateDom(() => bind(el, value, result, modifiers));
    }));
  });
  function storeKeyForXFor(el, expression) {
    el._x_keyExpression = expression;
  }
  addRootSelector(() => `[${prefix("data")}]`);
  directive("data", skipDuringClone((el, { expression }, { cleanup: cleanup2 }) => {
    expression = expression === "" ? "{}" : expression;
    let magicContext = {};
    injectMagics(magicContext, el);
    let dataProviderContext = {};
    injectDataProviders(dataProviderContext, magicContext);
    let data2 = evaluate(el, expression, { scope: dataProviderContext });
    if (data2 === void 0)
      data2 = {};
    injectMagics(data2, el);
    let reactiveData = reactive(data2);
    initInterceptors(reactiveData);
    let undo = addScopeToNode(el, reactiveData);
    reactiveData["init"] && evaluate(el, reactiveData["init"]);
    cleanup2(() => {
      reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
      undo();
    });
  }));
  directive("show", (el, { modifiers, expression }, { effect: effect3 }) => {
    let evaluate2 = evaluateLater(el, expression);
    if (!el._x_doHide)
      el._x_doHide = () => {
        mutateDom(() => {
          el.style.setProperty("display", "none", modifiers.includes("important") ? "important" : void 0);
        });
      };
    if (!el._x_doShow)
      el._x_doShow = () => {
        mutateDom(() => {
          if (el.style.length === 1 && el.style.display === "none") {
            el.removeAttribute("style");
          } else {
            el.style.removeProperty("display");
          }
        });
      };
    let hide = () => {
      el._x_doHide();
      el._x_isShown = false;
    };
    let show = () => {
      el._x_doShow();
      el._x_isShown = true;
    };
    let clickAwayCompatibleShow = () => setTimeout(show);
    let toggle = once((value) => value ? show() : hide(), (value) => {
      if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
        el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
      } else {
        value ? clickAwayCompatibleShow() : hide();
      }
    });
    let oldValue;
    let firstTime = true;
    effect3(() => evaluate2((value) => {
      if (!firstTime && value === oldValue)
        return;
      if (modifiers.includes("immediate"))
        value ? clickAwayCompatibleShow() : hide();
      toggle(value);
      oldValue = value;
      firstTime = false;
    }));
  });
  directive("for", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let iteratorNames = parseForExpression(expression);
    let evaluateItems = evaluateLater(el, iteratorNames.items);
    let evaluateKey = evaluateLater(el, el._x_keyExpression || "index");
    el._x_prevKeys = [];
    el._x_lookup = {};
    effect3(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
    cleanup2(() => {
      Object.values(el._x_lookup).forEach((el2) => el2.remove());
      delete el._x_prevKeys;
      delete el._x_lookup;
    });
  });
  function loop(el, iteratorNames, evaluateItems, evaluateKey) {
    let isObject2 = (i2) => typeof i2 === "object" && !Array.isArray(i2);
    let templateEl = el;
    evaluateItems((items) => {
      if (isNumeric3(items) && items >= 0) {
        items = Array.from(Array(items).keys(), (i2) => i2 + 1);
      }
      if (items === void 0)
        items = [];
      let lookup = el._x_lookup;
      let prevKeys = el._x_prevKeys;
      let scopes = [];
      let keys2 = [];
      if (isObject2(items)) {
        items = Object.entries(items).map(([key, value]) => {
          let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
          evaluateKey((value2) => keys2.push(value2), { scope: { index: key, ...scope2 } });
          scopes.push(scope2);
        });
      } else {
        for (let i2 = 0; i2 < items.length; i2++) {
          let scope2 = getIterationScopeVariables(iteratorNames, items[i2], i2, items);
          evaluateKey((value) => keys2.push(value), { scope: { index: i2, ...scope2 } });
          scopes.push(scope2);
        }
      }
      let adds = [];
      let moves = [];
      let removes = [];
      let sames = [];
      for (let i2 = 0; i2 < prevKeys.length; i2++) {
        let key = prevKeys[i2];
        if (keys2.indexOf(key) === -1)
          removes.push(key);
      }
      prevKeys = prevKeys.filter((key) => !removes.includes(key));
      let lastKey = "template";
      for (let i2 = 0; i2 < keys2.length; i2++) {
        let key = keys2[i2];
        let prevIndex = prevKeys.indexOf(key);
        if (prevIndex === -1) {
          prevKeys.splice(i2, 0, key);
          adds.push([lastKey, i2]);
        } else if (prevIndex !== i2) {
          let keyInSpot = prevKeys.splice(i2, 1)[0];
          let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
          prevKeys.splice(i2, 0, keyForSpot);
          prevKeys.splice(prevIndex, 0, keyInSpot);
          moves.push([keyInSpot, keyForSpot]);
        } else {
          sames.push(key);
        }
        lastKey = key;
      }
      for (let i2 = 0; i2 < removes.length; i2++) {
        let key = removes[i2];
        if (!!lookup[key]._x_effects) {
          lookup[key]._x_effects.forEach(dequeueJob);
        }
        lookup[key].remove();
        lookup[key] = null;
        delete lookup[key];
      }
      for (let i2 = 0; i2 < moves.length; i2++) {
        let [keyInSpot, keyForSpot] = moves[i2];
        let elInSpot = lookup[keyInSpot];
        let elForSpot = lookup[keyForSpot];
        let marker = document.createElement("div");
        mutateDom(() => {
          elForSpot.after(marker);
          elInSpot.after(elForSpot);
          elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
          marker.before(elInSpot);
          elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
          marker.remove();
        });
        refreshScope(elForSpot, scopes[keys2.indexOf(keyForSpot)]);
      }
      for (let i2 = 0; i2 < adds.length; i2++) {
        let [lastKey2, index] = adds[i2];
        let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
        if (lastEl._x_currentIfEl)
          lastEl = lastEl._x_currentIfEl;
        let scope2 = scopes[index];
        let key = keys2[index];
        let clone2 = document.importNode(templateEl.content, true).firstElementChild;
        addScopeToNode(clone2, reactive(scope2), templateEl);
        mutateDom(() => {
          lastEl.after(clone2);
          initTree(clone2);
        });
        if (typeof key === "object") {
          warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
        }
        lookup[key] = clone2;
      }
      for (let i2 = 0; i2 < sames.length; i2++) {
        refreshScope(lookup[sames[i2]], scopes[keys2.indexOf(sames[i2])]);
      }
      templateEl._x_prevKeys = keys2;
    });
  }
  function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\s*\(|\)\s*$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch)
      return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].replace(stripParensRE, "").trim();
    let iteratorMatch = item.match(forIteratorRE);
    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, "").trim();
      res.index = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }
    return res;
  }
  function getIterationScopeVariables(iteratorNames, item, index, items) {
    let scopeVariables = {};
    if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
      let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i2) => i2.trim());
      names.forEach((name, i2) => {
        scopeVariables[name] = item[i2];
      });
    } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
      let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i2) => i2.trim());
      names.forEach((name) => {
        scopeVariables[name] = item[name];
      });
    } else {
      scopeVariables[iteratorNames.item] = item;
    }
    if (iteratorNames.index)
      scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection)
      scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }
  function isNumeric3(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function handler2() {
  }
  handler2.inline = (el, { expression }, { cleanup: cleanup2 }) => {
    let root = closestRoot(el);
    if (!root._x_refs)
      root._x_refs = {};
    root._x_refs[expression] = el;
    cleanup2(() => delete root._x_refs[expression]);
  };
  directive("ref", handler2);
  directive("if", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let evaluate2 = evaluateLater(el, expression);
    let show = () => {
      if (el._x_currentIfEl)
        return el._x_currentIfEl;
      let clone2 = el.content.cloneNode(true).firstElementChild;
      addScopeToNode(clone2, {}, el);
      mutateDom(() => {
        el.after(clone2);
        initTree(clone2);
      });
      el._x_currentIfEl = clone2;
      el._x_undoIf = () => {
        walk(clone2, (node) => {
          if (!!node._x_effects) {
            node._x_effects.forEach(dequeueJob);
          }
        });
        clone2.remove();
        delete el._x_currentIfEl;
      };
      return clone2;
    };
    let hide = () => {
      if (!el._x_undoIf)
        return;
      el._x_undoIf();
      delete el._x_undoIf;
    };
    effect3(() => evaluate2((value) => {
      value ? show() : hide();
    }));
    cleanup2(() => el._x_undoIf && el._x_undoIf());
  });
  directive("id", (el, { expression }, { evaluate: evaluate2 }) => {
    let names = evaluate2(expression);
    names.forEach((name) => setIdRoot(el, name));
  });
  mapAttributes(startingWith("@", into(prefix("on:"))));
  directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup: cleanup2 }) => {
    let evaluate2 = expression ? evaluateLater(el, expression) : () => {
    };
    if (el.tagName.toLowerCase() === "template") {
      if (!el._x_forwardEvents)
        el._x_forwardEvents = [];
      if (!el._x_forwardEvents.includes(value))
        el._x_forwardEvents.push(value);
    }
    let removeListener2 = on(el, value, modifiers, (e2) => {
      evaluate2(() => {
      }, { scope: { $event: e2 }, params: [e2] });
    });
    cleanup2(() => removeListener2());
  }));
  warnMissingPluginDirective("Collapse", "collapse", "collapse");
  warnMissingPluginDirective("Intersect", "intersect", "intersect");
  warnMissingPluginDirective("Focus", "trap", "focus");
  warnMissingPluginDirective("Mask", "mask", "mask");
  function warnMissingPluginDirective(name, directiveName2, slug) {
    directive(directiveName2, (el) => warn(`You can't use [x-${directiveName2}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
  }
  alpine_default.setEvaluator(normalEvaluator);
  alpine_default.setReactivityEngine({ reactive: reactive2, effect: effect2, release: stop, raw: toRaw });
  var src_default = alpine_default;
  var module_default = src_default;

  // client/legacy/alpine.js
  module_default.directive("display", (el, { value, modifiers = [], expression }, { evaluate: evaluate2, effect: effect3, cleanup: cleanup2 }) => {
    effect3(() => {
      const display = expression ? evaluate2(expression) : true;
      setTimeout(() => {
        if (display) {
          el.setAttribute("display", "");
        } else {
          el.removeAttribute("display");
          const listener = el.addEventListener("transitionend", () => {
            el.removeEventListener("transitionend", listener);
          });
        }
      }, 1);
    });
  });
  module_default.directive("attribute", (el, { value, modifiers = [], expression }, { evaluate: evaluate2, effect: effect3, cleanup: cleanup2 }) => {
    effect3(() => {
      const attr = expression ? evaluate2(expression) : true;
      setTimeout(() => {
        if (typeof attr === "boolean") {
          if (attr) {
            el.setAttribute(value, "true");
          } else {
            el.setAttribute(value, "false");
          }
          return;
        }
        if (attr) {
          el.setAttribute(value, "");
        } else {
          el.removeAttribute(value);
        }
      }, 1);
    });
  });
  function convertKebabToCamelCase(str) {
    return str.replace(/-([a-z])/g, function(g2) {
      return g2[1].toUpperCase();
    });
  }
  function getKeyKebab(path = []) {
    const values = [];
    path.forEach((key) => {
      values.push(key.replace(/[^a-zA-Z0-9]/, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase());
    });
    return values.join("-");
  }
  var xStates = module_default.reactive({});
  module_default.magic("state", (el, { expression, modifiers = [], evaluate: evaluate2 }) => {
    return xStates;
  });
  module_default.directive("state", async (element, { value, modifiers = [], expression }, { evaluate: evaluate2, effect: effect3, cleanup: cleanup2 }) => {
    const state = module_default.reactive({});
    const tagName = element.tagName.toLowerCase();
    if (value) {
      xStates[convertKebabToCamelCase(value)] = state;
    }
    Array.from(element.attributes).filter((attribute) => attribute.name.startsWith("data-")).forEach((attribute) => {
      const key = convertKebabToCamelCase(attribute.name.substring(5));
      const value2 = attribute.value;
      state[key] = value2;
    });
    const data2 = await evaluate2(`(async () => { return ${expression || "{}"} })()`);
    effect3(() => {
      (function loop2(object, path = []) {
        Object.keys(object).forEach((key) => {
          const value2 = object[key];
          const keyKebab = getKeyKebab([...path, key]);
          const keyCamel = convertKebabToCamelCase(keyKebab);
          const dataKeyPath = `data-${keyKebab}`;
          state[keyCamel] = value2;
          if (value2 === void 0) {
            element.removeAttribute(dataKeyPath);
            return;
          }
          if (value2 === null) {
            element.setAttribute(dataKeyPath, "null");
            return;
          }
          if (typeof value2 === "boolean") {
            if (value2) {
              element.setAttribute(dataKeyPath, "true");
            } else {
              element.setAttribute(dataKeyPath, "false");
            }
            return;
          }
          if (typeof value2 === "string") {
            element.setAttribute(dataKeyPath, value2);
            return;
          }
          if (typeof value2 === "symbol") {
            return;
          }
          if (typeof value2 === "number") {
            element.setAttribute(dataKeyPath, value2);
            return;
          }
          if (Array.isArray(value2)) {
            return;
          }
          if (typeof value2 === "object") {
            loop2(value2, [...path, key]);
            return;
          }
          if (typeof value2 === "function") {
            return;
          }
          console.warn(`[x-state] Not implemented: ${typeof value2}`);
        });
      })(data2);
    });
    const observer2 = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes") {
          const key = convertKebabToCamelCase(mutation.attributeName.replace("data-", ""));
          const value2 = mutation.target.getAttribute(mutation.attributeName);
          state[key] = value2;
        }
      });
    });
    observer2.observe(element, {
      attributes: true
    });
  });
  module_default.magic("delete", (element, { expression, modifiers = [], evaluate: evaluate2 }) => {
    return async (url, data2 = {}) => {
      element.dataset.deleting = true;
      const event2 = new DeleteEvent(url);
      element.dispatchEvent(event2);
      if (event2.defaultPrevented) {
        return;
      }
      return fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrf
        },
        body: JSON.stringify(data2)
      }).then((response) => {
        element.dataset.deleting = false;
        return response.json();
      }).catch((error2) => {
        delete element.dataset.deleting;
        console.error(error2);
      });
    };
  });
  var DeleteEvent = class extends CustomEvent {
    constructor(url) {
      super("delete", {
        bubbles: true,
        cancelable: true,
        detail: {
          url
        }
      });
    }
  };
  module_default.magic("slugifyHandle", () => {
    return (slug) => {
      let result = slug.toLowerCase().replace(/[^a-z-0-9]/g, "-").replace(/-+/g, "-");
      if (result.startsWith("-"))
        result = result.substring(1);
      if (result.endsWith("-"))
        result = result.substring(0, result.length - 1);
      return result;
    };
  });
  module_default.magic("focused", () => {
    return document.querySelectorAll("*:focus").length > 0;
  });

  // client/legacy/loading-spinner.js
  var LoadingSpinner = class extends HTMLElement {
    get size() {
      return this.getAttribute("size") || 50;
    }
    get trackColor() {
      return this.getAttribute("color") || "#414B57";
    }
    get indicatorColor() {
      return this.getAttribute("indicator-color") || "#F1F2F4";
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      this.render();
    }
    render() {
      this.innerHTML = `
            <div>
                <svg class="animate-rotate w-full h-full" width="100" height="100" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25.0001" cy="25.0001" r="18.1637" stroke="${this.trackColor}" stroke-width="6"/>
                    <mask id="path-2-inside-1" fill="${this.indicatorColor}">
                        <path d="M44.7622 32.5739C43.4205 36.075 41.1726 39.1568 38.2488 41.5039C35.325 43.8511 31.8301 45.3794 28.1217 45.9324C24.4133 46.4854 20.6245 46.0433 17.1431 44.6513C13.6617 43.2594 10.6125 40.9675 8.30762 38.0102L12.9734 34.3738C14.634 36.5045 16.8309 38.1557 19.3392 39.1586C21.8476 40.1615 24.5773 40.48 27.2492 40.0816C29.921 39.6831 32.4391 38.582 34.5457 36.8909C36.6523 35.1998 38.2718 32.9794 39.2385 30.457L44.7622 32.5739Z"/>
                    </mask>
                    <path d="M44.7622 32.5739C43.4205 36.075 41.1726 39.1568 38.2488 41.5039C35.325 43.8511 31.8301 45.3794 28.1217 45.9324C24.4133 46.4854 20.6245 46.0433 17.1431 44.6513C13.6617 43.2594 10.6125 40.9675 8.30762 38.0102L12.9734 34.3738C14.634 36.5045 16.8309 38.1557 19.3392 39.1586C21.8476 40.1615 24.5773 40.48 27.2492 40.0816C29.921 39.6831 32.4391 38.582 34.5457 36.8909C36.6523 35.1998 38.2718 32.9794 39.2385 30.457L44.7622 32.5739Z" stroke="${this.indicatorColor}" stroke-width="16" mask="url(#path-2-inside-1)"/>
                </svg>
            </div>
        `;
    }
  };
  customElements.define("loading-spinner", LoadingSpinner);

  // client/legacy/fetch-intercept.js
  var fetcher = window.fetch;
  window.fetch = async (url, options) => {
    return fetcher(url, options).then(function(response) {
      if (response.headers.has("X-Message")) {
        const message = response.headers.get("X-Message");
        const status = response.status;
        let type = "error";
        if (status == 200)
          return response;
        if (status > 200 && status < 300)
          type = "success";
        if (status >= 300 && status < 400)
          type = "info";
        if (status >= 400 && status < 500)
          type = "warning";
        if (status >= 500)
          type = "error";
        window.dispatchEvent(new CustomEvent("message", { detail: { type, message, timeout: 1e4 } }));
      }
      return response;
    });
  };

  // client/legacy/text-field.js
  var _render, render_fn, _sendRequest, sendRequest_fn;
  var TextField = class extends HTMLElement {
    constructor() {
      super();
      __privateAdd(this, _render);
      __privateAdd(this, _sendRequest);
      this.addEventListener("keydown", (event2) => {
        if (event2.key == "Enter") {
          this.querySelector(this.constructor.elements.INPUT).blur();
        }
      });
      setTimeout(() => {
        this.querySelector(this.constructor.elements.INPUT).addEventListener("blur", async (event2) => {
          const action = this.getAttribute(this.constructor.attributes.ACTION);
          const method = this.getAttribute(this.constructor.attributes.METHOD);
          const field = this.getAttribute(this.constructor.attributes.FIELD);
          const value = this.querySelector(this.constructor.elements.INPUT).value;
          const data2 = { [field]: value };
          this.setAttribute(this.constructor.attributes.PENDING, "true");
          await __privateMethod(this, _sendRequest, sendRequest_fn).call(this, action, method, data2);
          this.removeAttribute(this.constructor.attributes.PENDING);
        });
      }, 1);
    }
    static get observedAttributes() {
      return Object.values(this.attributes);
    }
    connectedCallback() {
      __privateMethod(this, _render, render_fn).call(this);
    }
    attributeChangedCallback(name, oldValue, newValue) {
      setTimeout(() => {
        switch (name) {
          case this.constructor.attributes.PLACEHOLDER: {
            this.querySelector(this.constructor.elements.INPUT).setAttribute("placeholder", newValue);
            break;
          }
          case this.constructor.attributes.VALUE: {
            this.querySelector(this.constructor.elements.INPUT).value = newValue;
            break;
          }
        }
      }, 1);
    }
  };
  _render = new WeakSet();
  render_fn = function() {
    this.innerHTML = `
            <label class="focus-within:bg-gray-200/5 py-1.5 px-3 rounded-xl">
                <input class="text-gray-200 bg-transparent focus:outline-none" placeholder="undefined" />
                <i class="uil-pen text-gray-600"></i>
            </label>
        `;
  };
  _sendRequest = new WeakSet();
  sendRequest_fn = async function(action, method, data2 = {}) {
    const csrfToken = this.getAttribute(this.constructor.attributes.CSRF_TOKEN);
    return fetch(action, {
      method: method || "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken
      },
      body: JSON.stringify(data2)
    });
  };
  __publicField(TextField, "tag", "text-field");
  __publicField(TextField, "attributes", {
    PLACEHOLDER: "placeholder",
    VALUE: "value",
    ACTION: "action",
    FIELD: "field",
    METHOD: "method",
    CSRF_TOKEN: "csrf-token",
    PENDING: "pending",
    TYPE: "type"
  });
  __publicField(TextField, "elements", {
    INPUT: "input"
  });
  customElements.define(TextField.tag, TextField);

  // client/legacy/image-field.js
  var _render2, render_fn2, _attachEventListeners, attachEventListeners_fn, _onImageError, onImageError_fn, _onImageLoad, onImageLoad_fn, _uploadImage, uploadImage_fn, _updateLabel, updateLabel_fn, _getLabelInitials, getLabelInitials_fn, _updateLabelSize, updateLabelSize_fn, _updateImageSource, updateImageSource_fn;
  var ImageField = class extends HTMLElement {
    constructor() {
      super(...arguments);
      __privateAdd(this, _render2);
      __privateAdd(this, _attachEventListeners);
      __privateAdd(this, _onImageError);
      __privateAdd(this, _onImageLoad);
      __privateAdd(this, _uploadImage);
      __privateAdd(this, _updateLabel);
      __privateAdd(this, _getLabelInitials);
      __privateAdd(this, _updateLabelSize);
      __privateAdd(this, _updateImageSource);
    }
    static get observedAttributes() {
      return Object.values(this.attributes);
    }
    connectedCallback() {
      __privateMethod(this, _render2, render_fn2).call(this);
      __privateMethod(this, _attachEventListeners, attachEventListeners_fn).call(this);
      __privateMethod(this, _updateLabel, updateLabel_fn).call(this);
    }
    attributeChangedCallback(name, oldValue, newValue) {
      setTimeout(() => {
        switch (name) {
          case this.constructor.attributes.LABEL: {
            __privateMethod(this, _updateLabel, updateLabel_fn).call(this);
            break;
          }
          case this.constructor.attributes.IMAGE_SOURCE: {
            __privateMethod(this, _updateImageSource, updateImageSource_fn).call(this, newValue);
          }
        }
      }, 1);
    }
  };
  _render2 = new WeakSet();
  render_fn2 = function() {
    this.innerHTML = `
            <label class="relative flex flex-col items-center justify-center w-full h-full transition-all overflow-hidden active:!duration-75 active:!scale-90">
                <loading-spinner class="absolute scale-0 transition-all duration-300 [[image-uploading]_&]:!scale-100 [[image-loaded]_&]:scale-0"></loading-spinner>
                <div class="flex w-full h-full absolute transition-all bg-gray-700 scale-100 [[image-source]_&]:scale-0 [[image-error]_&]:!scale-100 [[image-uploading]_&]:!scale-0">
                    <span class="text-gray-200 text-[0.5vw] self-center mx-auto" name="image-field-label"></span>
                </div>
                <img
                    name="image-field-image"
                    class="w-full h-full object-fit self-center transition-all duration-300 scale-0 [[image-loaded]_&]:scale-100 [[image-uploading]_&]:!scale-0 [[image_source='']_&]:!transition-none [[image_source='']_&]:!scale-0"
                />
                <input
                    name="image-field-input"
                    type="file"
                    class="hidden"
                />
            </label>
        `;
  };
  _attachEventListeners = new WeakSet();
  attachEventListeners_fn = function() {
    this.querySelector(this.constructor.elements.IMAGE).addEventListener("error", __privateMethod(this, _onImageError, onImageError_fn).bind(this));
    this.querySelector(this.constructor.elements.IMAGE).addEventListener("load", __privateMethod(this, _onImageLoad, onImageLoad_fn).bind(this));
    this.querySelector(this.constructor.elements.INPUT).addEventListener("change", __privateMethod(this, _uploadImage, uploadImage_fn).bind(this));
  };
  _onImageError = new WeakSet();
  onImageError_fn = function(event2) {
    this.setAttribute(this.constructor.attributes.IMAGE_ERROR, "");
  };
  _onImageLoad = new WeakSet();
  onImageLoad_fn = function(event2) {
    this.setAttribute(this.constructor.attributes.IMAGE_LOADED, "");
  };
  _uploadImage = new WeakSet();
  uploadImage_fn = function(event2) {
    this.setAttribute(this.constructor.attributes.IMAGE_UPLOADING, "");
    const action = this.getAttribute(this.constructor.attributes.ACTION);
    const method = this.getAttribute(this.constructor.attributes.METHOD) || "PATCH";
    const field = this.getAttribute(this.constructor.attributes.FIELD);
    const csrf2 = this.getAttribute(this.constructor.attributes.CSRF_TOKEN);
    const files = event2.target.files;
    const file = files[0];
    const data2 = new FormData();
    data2.append(field, file);
    fetch(action, {
      method,
      body: data2,
      headers: {
        "X-CSRFToken": csrf2
      }
    }).then((r2) => r2.json()).then((data3) => {
      this.removeAttribute(this.constructor.attributes.IMAGE_UPLOADING);
      const source = data3[`${this.getAttribute(this.constructor.attributes.FIELD)}_source`];
      if (data3 && source) {
        this.setAttribute(this.constructor.attributes.IMAGE_SOURCE, source);
      }
      this.querySelector(this.constructor.elements.INPUT).value = "";
      this.dispatchEvent(new CustomEvent(`image-field[${field}]:upload-success`, {
        detail: {
          data: data3
        },
        bubbles: true
      }));
    });
  };
  _updateLabel = new WeakSet();
  updateLabel_fn = function() {
    Object.assign(this.querySelector(this.constructor.elements.LABEL), {
      textContent: __privateMethod(this, _getLabelInitials, getLabelInitials_fn).call(this)
    });
    __privateMethod(this, _updateLabelSize, updateLabelSize_fn).call(this);
  };
  _getLabelInitials = new WeakSet();
  getLabelInitials_fn = function() {
    const label = this.getAttribute(this.constructor.attributes.LABEL);
    if (label) {
      return label.split(" ").map((word) => word[0]).join("");
    }
    return "?";
  };
  _updateLabelSize = new WeakSet();
  updateLabelSize_fn = function() {
    const charCount = __privateMethod(this, _getLabelInitials, getLabelInitials_fn).call(this).length;
    const containerWidth = this.querySelector(this.constructor.elements.LABEL).parentNode.offsetWidth;
    const fontSize = containerWidth / (4 + (charCount > 3 ? charCount - 2 : 0)) * 1.3;
    this.querySelector(this.constructor.elements.LABEL).style.fontSize = `${fontSize}px`;
  };
  _updateImageSource = new WeakSet();
  updateImageSource_fn = function(source) {
    this.removeAttribute(this.constructor.attributes.IMAGE_LOADED);
    this.removeAttribute(this.constructor.attributes.IMAGE_ERROR);
    this.querySelector(this.constructor.elements.IMAGE).src = source;
  };
  __publicField(ImageField, "tag", "image-field");
  __publicField(ImageField, "attributes", {
    ACTION: "action",
    METHOD: "method",
    FIELD: "field",
    LABEL: "label",
    CSRF_TOKEN: "csrf-token",
    IMAGE_SOURCE: "image-source",
    IMAGE_LOADED: "image-loaded",
    IMAGE_ERROR: "image-error",
    IMAGE_UPLOADING: "image-uploading"
  });
  __publicField(ImageField, "elements", {
    IMAGE: '[name="image-field-image"]',
    INPUT: '[name="image-field-input"]',
    LABEL: '[name="image-field-label"]'
  });
  customElements.define(ImageField.tag, ImageField);

  // client/legacy/upload-button.js
  var import_for_next = __toModule(require_for_next());
  var _render3, render_fn3, _attachEventListeners2, attachEventListeners_fn2, _onInputChange, onInputChange_fn, _uploadFiles, uploadFiles_fn, _uploadFile, uploadFile_fn, _getFieldName, getFieldName_fn, _setUploadState, setUploadState_fn, _updateFileLabelText, updateFileLabelText_fn;
  var UploadButton = class extends HTMLElement {
    constructor() {
      super(...arguments);
      __privateAdd(this, _render3);
      __privateAdd(this, _attachEventListeners2);
      __privateAdd(this, _onInputChange);
      __privateAdd(this, _uploadFiles);
      __privateAdd(this, _uploadFile);
      __privateAdd(this, _getFieldName);
      __privateAdd(this, _setUploadState);
      __privateAdd(this, _updateFileLabelText);
    }
    static get observedAttributes() {
      return Object.values(this.attributes);
    }
    connectedCallback() {
      __privateMethod(this, _render3, render_fn3).call(this);
      __privateMethod(this, _attachEventListeners2, attachEventListeners_fn2).call(this);
    }
    attributeChangedCallback(name, oldValue, newValue) {
    }
  };
  _render3 = new WeakSet();
  render_fn3 = function() {
    this.innerHTML = `
            <label class="flex relative group bg-indigo-600 px-3 py-1.5 rounded-lg cursor-pointer select-none hover:bg-white transition-transform scale-100 active:scale-90">
                <div class="flex w-full h-full transition-all relative block z-20">
                    <div class="self-center mx-auto flex pr-1" name="upload-label">
                        <span class="flex [[uploading]_&]:!hidden group-hover:text-gray-800">Upload</span>
                        <span class="hidden [[uploading]_&]:!flex group-hover:text-gray-800">Uploading</span>
                    </div>
                    <div name="file-label-text" class="hidden text-sm bg-white z-10 text-gray-800 -left-1/4 top-0 h-full items-center px-2 py-0.5 rounded-xl self-center [[uploading]_&]:flex"></div>
                    <i class="uil-upload text-sm self-center group-hover:text-gray-800 [[uploading]_&]:hidden"></i>
                </div>
                <input hidden name="upload-input" type="file" multiple class="absolute w-full h-full opacity-0" aria-label="upload file" />
            </label>
        `;
  };
  _attachEventListeners2 = new WeakSet();
  attachEventListeners_fn2 = function() {
    this.querySelector(this.constructor.elements.INPUT).addEventListener("change", __privateMethod(this, _onInputChange, onInputChange_fn).bind(this));
  };
  _onInputChange = new WeakSet();
  onInputChange_fn = function(event2) {
    const files = event2.target.files;
    if (files.length === 0)
      return;
    __privateMethod(this, _uploadFiles, uploadFiles_fn).call(this, files);
  };
  _uploadFiles = new WeakSet();
  uploadFiles_fn = async function(files) {
    __privateMethod(this, _setUploadState, setUploadState_fn).call(this, true);
    this.setAttribute(this.constructor.attributes.TOTAL_FILES, files.length);
    __privateMethod(this, _updateFileLabelText, updateFileLabelText_fn).call(this);
    await (0, import_for_next.default)(files, async (file, { index, next }) => {
      await __privateMethod(this, _uploadFile, uploadFile_fn).call(this, file);
      this.setAttribute(this.constructor.attributes.CURRENT_FILE_NUMBER, index + 1);
      __privateMethod(this, _updateFileLabelText, updateFileLabelText_fn).call(this);
      next();
    });
    __privateMethod(this, _setUploadState, setUploadState_fn).call(this, false);
  };
  _uploadFile = new WeakSet();
  uploadFile_fn = async function(file) {
    const formData = new FormData();
    formData.append(__privateMethod(this, _getFieldName, getFieldName_fn).call(this), file);
    const response = await fetch(this.getAttribute(this.constructor.attributes.ACTION), {
      method: this.getAttribute(this.constructor.attributes.METHOD),
      headers: {
        "X-csrfToken": this.getAttribute(this.constructor.attributes.CSRF_TOKEN)
      },
      body: formData
    });
    if (response.ok) {
      const data2 = await response.json();
      this.dispatchEvent(new CustomEvent("upload", {
        detail: {
          data: data2
        },
        bubbles: true
      }));
    } else {
      console.error("upload error: ", response);
    }
  };
  _getFieldName = new WeakSet();
  getFieldName_fn = function() {
    return this.getAttribute(this.constructor.attributes.FIELD);
  };
  _setUploadState = new WeakSet();
  setUploadState_fn = function(uploading) {
    if (uploading) {
      this.setAttribute(this.constructor.attributes.UPLOADING, "");
    } else {
      this.removeAttribute(this.constructor.attributes.UPLOADING);
    }
  };
  _updateFileLabelText = new WeakSet();
  updateFileLabelText_fn = function() {
    const currentFileNumber = this.getAttribute(this.constructor.attributes.CURRENT_FILE_NUMBER);
    const totalFiles = this.getAttribute(this.constructor.attributes.TOTAL_FILES);
    this.querySelector(this.constructor.elements.FILE_LABEL_TEXT).textContent = `${currentFileNumber || 0}/${totalFiles}`;
  };
  __publicField(UploadButton, "tag", "upload-button");
  __publicField(UploadButton, "attributes", {
    LABEL: "label",
    ACTION: "action",
    FIELD: "field",
    METHOD: "method",
    CSRF_TOKEN: "csrf-token",
    UPLOADING: "uploading",
    UPLOAD_ERROR: "upload-error",
    CURRENT_FILE_NUMBER: "current-file-number",
    TOTAL_FILES: "total-files"
  });
  __publicField(UploadButton, "elements", {
    LABEL: '[name="upload-label"]',
    INPUT: '[name="upload-input"]',
    FILE_LABEL_TEXT: '[name="file-label-text"]'
  });
  customElements.define(UploadButton.tag, UploadButton);

  // client/legacy/fallback-icon.js
  var _render4, render_fn4, _attachEventListeners3, attachEventListeners_fn3, _onImageError2, onImageError_fn2, _onImageLoad2, onImageLoad_fn2, _updateLabel2, updateLabel_fn2, _getLabelInitials2, getLabelInitials_fn2, _updateLabelSize2, updateLabelSize_fn2, _updateImageSource2, updateImageSource_fn2;
  var FallbackIcon = class extends HTMLElement {
    constructor() {
      super(...arguments);
      __privateAdd(this, _render4);
      __privateAdd(this, _attachEventListeners3);
      __privateAdd(this, _onImageError2);
      __privateAdd(this, _onImageLoad2);
      __privateAdd(this, _updateLabel2);
      __privateAdd(this, _getLabelInitials2);
      __privateAdd(this, _updateLabelSize2);
      __privateAdd(this, _updateImageSource2);
    }
    static get observedAttributes() {
      return Object.values(this.attributes);
    }
    connectedCallback() {
      __privateMethod(this, _render4, render_fn4).call(this);
      __privateMethod(this, _attachEventListeners3, attachEventListeners_fn3).call(this);
      __privateMethod(this, _updateLabel2, updateLabel_fn2).call(this);
    }
    attributeChangedCallback(name, oldValue, newValue) {
      setTimeout(() => {
        switch (name) {
          case this.constructor.attributes.LABEL: {
            __privateMethod(this, _updateLabel2, updateLabel_fn2).call(this);
            break;
          }
          case this.constructor.attributes.IMAGE_SOURCE: {
            __privateMethod(this, _updateImageSource2, updateImageSource_fn2).call(this, newValue);
          }
        }
      }, 1);
    }
  };
  _render4 = new WeakSet();
  render_fn4 = function() {
    this.innerHTML = `
            <label class="relative flex flex-col items-center justify-center w-full h-full overflow-hidden">
                <loading-spinner class="absolute scale-0 transition-all duration-300 [[image-uploading]_&]:!scale-100 [[image-loaded]_&]:scale-0"></loading-spinner>
                <div class="flex w-full h-full absolute transition-all scale-100 [[image-source]_&]:scale-0 [[image-error]_&]:!scale-100 [[image-uploading]_&]:!scale-0">
                    <span class="text-gray-200 text-[0.5vw] self-center mx-auto" name="fallback-icon-label"></span>
                </div>
                <img
                    name="fallback-icon-image"
                    class="w-full h-full object-fit self-center transition-all duration-300 scale-0 [[image-loaded]_&]:scale-100 [[image-uploading]_&]:!scale-0"
                />
            </label>
        `;
  };
  _attachEventListeners3 = new WeakSet();
  attachEventListeners_fn3 = function() {
    this.querySelector(this.constructor.elements.IMAGE).addEventListener("error", __privateMethod(this, _onImageError2, onImageError_fn2).bind(this));
    this.querySelector(this.constructor.elements.IMAGE).addEventListener("load", __privateMethod(this, _onImageLoad2, onImageLoad_fn2).bind(this));
  };
  _onImageError2 = new WeakSet();
  onImageError_fn2 = function(event2) {
    this.setAttribute(this.constructor.attributes.IMAGE_ERROR, "");
  };
  _onImageLoad2 = new WeakSet();
  onImageLoad_fn2 = function(event2) {
    this.setAttribute(this.constructor.attributes.IMAGE_LOADED, "");
  };
  _updateLabel2 = new WeakSet();
  updateLabel_fn2 = function() {
    Object.assign(this.querySelector(this.constructor.elements.LABEL), {
      textContent: __privateMethod(this, _getLabelInitials2, getLabelInitials_fn2).call(this)
    });
    __privateMethod(this, _updateLabelSize2, updateLabelSize_fn2).call(this);
  };
  _getLabelInitials2 = new WeakSet();
  getLabelInitials_fn2 = function() {
    const label = this.getAttribute(this.constructor.attributes.LABEL);
    if (label) {
      return label.split(" ").map((word) => word[0]).join("");
    }
    return "?";
  };
  _updateLabelSize2 = new WeakSet();
  updateLabelSize_fn2 = function() {
    const charCount = __privateMethod(this, _getLabelInitials2, getLabelInitials_fn2).call(this).length;
    const containerWidth = this.querySelector(this.constructor.elements.LABEL).parentNode.offsetWidth;
    const fontSize = containerWidth / (4 + (charCount > 3 ? charCount - 2 : 0)) * 1.3;
    this.querySelector(this.constructor.elements.LABEL).style.fontSize = `${fontSize}px`;
  };
  _updateImageSource2 = new WeakSet();
  updateImageSource_fn2 = function(source) {
    if (source) {
      this.querySelector(this.constructor.elements.IMAGE).src = source;
      this.removeAttribute(this.constructor.attributes.IMAGE_LOADED);
      this.removeAttribute(this.constructor.attributes.IMAGE_ERROR);
    }
  };
  __publicField(FallbackIcon, "tag", "fallback-icon");
  __publicField(FallbackIcon, "attributes", {
    LABEL: "label",
    IMAGE_SOURCE: "src",
    IMAGE_LOADED: "image-loaded",
    IMAGE_ERROR: "image-error",
    IMAGE_UPLOADING: "image-uploading"
  });
  __publicField(FallbackIcon, "elements", {
    IMAGE: '[name="fallback-icon-image"]',
    LABEL: '[name="fallback-icon-label"]'
  });
  customElements.define(FallbackIcon.tag, FallbackIcon);

  // client/legacy/dropdown.js
  module_default.magic("dropdown", (target, { expression, modifiers = [], evaluate: evaluate2 }) => {
    return (selector) => {
      const event2 = new DropdownEvent({ selector });
      target.dispatchEvent(event2);
      if (event2.defaultPrevented)
        return;
      const dropdown = document.querySelector(selector);
      if (!dropdown)
        return;
      const targetRect = target.getBoundingClientRect();
      const dropdownRect = dropdown.getBoundingClientRect();
      const top = targetRect.top + targetRect.height;
      const left = targetRect.left - dropdownRect.width;
      dropdown.style.top = `${top}px`;
      dropdown.style.left = `${left}px`;
      dropdown.setAttribute("data-open", "true");
      const onScroll = () => {
        console.log("scroll");
        dropdown.removeAttribute("data-open");
      };
      document.addEventListener("scroll", onScroll);
      const onClick = (event3) => {
        if (dropdown.hasAttribute("data-open") && !target.contains(event3.target)) {
          dropdown.removeAttribute("data-open");
          document.removeEventListener("click", onClick);
        }
      };
      document.addEventListener("click", onClick);
      const onDropdownClick = (event3) => {
        event3.stopPropagation();
      };
      dropdown.addEventListener("click", onDropdownClick);
      const onTargetClick = (event3) => {
        if (dropdown.hasAttribute("data-open")) {
          dropdown.removeAttribute("data-open");
        } else {
          dropdown.setAttribute("data-open", "true");
        }
      };
      target.addEventListener("click", onTargetClick);
    };
  });
  var DropdownEvent = class extends CustomEvent {
    constructor(detail = {}) {
      super("dropdown", {
        bubbles: true,
        composed: true,
        detail
      });
    }
    setSelector(selector) {
      this.detail.selector = selector;
    }
  };

  // client/legacy/discord-server-icon.js
  var _DiscordServerIcon = class extends HTMLElement {
    static get observedAttributes() {
      return Object.values(_DiscordServerIcon.attributes);
    }
    get guildIconUrl() {
      const { GUILD_ID, GUILD_ICON_HASH, ICON_SIZE } = _DiscordServerIcon.attributes;
      const id = this.getAttribute(GUILD_ID);
      const icon = this.getAttribute(GUILD_ICON_HASH);
      const size2 = this.getAttribute(ICON_SIZE) || "48";
      return `https://cdn.discordapp.com/icons/${id}/${icon}?size=${size2}`;
    }
    get iconLoading() {
      const { GUILD_ICON_HASH, GUILD_ICON_LOADED } = _DiscordServerIcon.attributes;
      const icon = this.getAttribute(GUILD_ICON_HASH);
      const iconLoaded = this.getAttribute(GUILD_ICON_LOADED);
      if (!!icon && iconLoaded) {
        return true;
      }
      return false;
    }
    connectedCallback() {
      this.innerHTML = `
            <div class="flex relative w-12 h-12">
                <img
                    alt=""
                    width="48"
                    height="48"
                    name="guild-icon-img"
                    class="rounded-full transition-all ease-in-out duration-300 transform scale-0 [[guild-icon-loaded]_&]:scale-100 [[show-loading-spinner]_&]:scale-0 [[invite-invalid]_&]:scale-0 [[guild-icon-failed]_&]:scale-0"
                    loading="lazy"
                />
                <loading-spinner
                    class="absolute transition-all ease-in-out duration-300 transform scale-0 [[show-loading-spinner]_&]:scale-100"
                ></loading-spinner>
                <div class="flex w-full h-full mr-2 h-full rounded-full bg-gray-700 absolute transition-all ease-in-out duration-300 transform scale-0 scale-0 [[show-as-text]_&]:scale-100 [[show-loading-spinner]_&]:scale-0 [[invite-invalid]_&]:scale-0 [[guild-icon-loaded]_&]:scale-0">
                    <span
                        name="guild-icon-text"
                        class="text-[0.8vw] px-2 whitespace-nowrap self-center mx-auto overflow-ellipsis overflow-hidden ...">
                    </span>
                </div>
            </div>
        `;
      const { GUILD_NAME, SHOW_LOADING_SPINNER, GUILD_ICON_LOADED, GUILD_ICON_FAILED, SHOW_AS_TEXT } = _DiscordServerIcon.attributes;
      const { GUILD_ICON_IMG, GUILD_ICON_TEXT } = _DiscordServerIcon.elements;
      this.querySelector(GUILD_ICON_IMG).addEventListener("load", () => {
        this.removeAttribute(SHOW_LOADING_SPINNER);
        this.setAttribute(GUILD_ICON_LOADED, true);
      });
      this.querySelector(GUILD_ICON_IMG).addEventListener("error", () => {
        this.removeAttribute(SHOW_LOADING_SPINNER);
        this.setAttribute(GUILD_ICON_FAILED, true);
      });
    }
    attributeChangedCallback(name, oldValue, newValue) {
      const { GUILD_ID, GUILD_NAME, GUILD_ICON_HASH } = _DiscordServerIcon.attributes;
      const { GUILD_ICON_LOADED, GUILD_ICON_FAILED } = _DiscordServerIcon.attributes;
      const { SHOW_LOADING_SPINNER, SHOW_AS_TEXT } = _DiscordServerIcon.attributes;
      const { FROM_INVITE, INVITE_INVALID } = _DiscordServerIcon.attributes;
      const { GUILD_ICON_IMG, GUILD_ICON_TEXT } = _DiscordServerIcon.elements;
      setTimeout(async () => {
        switch (name) {
          case GUILD_ICON_LOADED: {
            if (newValue) {
              this.removeAttribute(SHOW_AS_TEXT);
              this.removeAttribute(GUILD_ICON_FAILED);
            }
            break;
          }
          case GUILD_ICON_FAILED: {
            if (newValue) {
              this.querySelector(GUILD_ICON_TEXT).innerText = getAbbreviatedName(this.getAttribute(GUILD_NAME));
              this.setAttribute(SHOW_AS_TEXT, true);
            }
            break;
          }
          case GUILD_ID: {
            const guildIconImgElement = this.querySelector(GUILD_ICON_IMG);
            guildIconImgElement.src = this.guildIconUrl;
            guildIconImgElement.alt = this.getAttribute(GUILD_NAME);
            this.setAttribute(SHOW_LOADING_SPINNER, true);
            this.removeAttribute(SHOW_AS_TEXT);
            break;
          }
          case FROM_INVITE: {
            if (newValue) {
              const invite = this.getAttribute(FROM_INVITE);
              const data2 = await fetch("https://discord.com/api/v8/invites/" + invite).then((res) => res.json());
              if (!data2.guild) {
                this.setAttribute(INVITE_INVALID, true);
                return;
              } else {
                this.removeAttribute(INVITE_INVALID);
              }
              this.setAttribute(GUILD_ID, data2.guild.id);
              this.setAttribute(GUILD_NAME, data2.guild.name);
              this.setAttribute(GUILD_ICON_HASH, data2.guild.icon);
            }
            break;
          }
        }
      }, 1);
    }
    async loadFromInvite(invite) {
      const { FROM_INVITE } = _DiscordServerIcon.attributes;
      this.setAttribute(FROM_INVITE, invite);
    }
  };
  var DiscordServerIcon = _DiscordServerIcon;
  __publicField(DiscordServerIcon, "attributes", {
    GUILD_ID: "guild-id",
    GUILD_NAME: "guild-name",
    GUILD_ICON_HASH: "guild-icon-hash",
    GUILD_ICON_SIZE: "guild-icon-size",
    GUILD_ICON_LOADED: "guild-icon-loaded",
    GUILD_ICON_FAILED: "guild-icon-failed",
    SHOW_LOADING_SPINNER: "show-loading-spinner",
    SHOW_AS_TEXT: "show-as-text",
    FROM_INVITE: "from-invite",
    INVITE_INVALID: "invite-invalid"
  });
  __publicField(DiscordServerIcon, "elements", {
    LOADING_SPINNER: "loading-spinner",
    GUILD_ICON_IMG: '[name="guild-icon-img"]',
    GUILD_ICON_TEXT: '[name="guild-icon-text"]'
  });
  function getAbbreviatedName(name) {
    return name.split(/\s/g).map((word) => word[0]).join("");
  }
  customElements.define("discord-server-icon", DiscordServerIcon);

  // client/legacy/server-context-menu.js
  var ServerContextMenu = class extends HTMLElement {
    static get observedAttributes() {
      return Object.values(this.attributes);
    }
    toggle() {
      const { OPEN } = this.constructor.attributes;
      if (this.hasAttribute(OPEN)) {
        this.removeAttribute(OPEN);
      } else {
        this.setAttribute(OPEN, true);
      }
    }
    connectedCallback() {
      this.innerHTML = `
            <div class="relative flex flex-col">
                <div name="toggle" class="group rounded-md bg-gray-700 border border-gray-600 p-1 cursor-pointer hover:bg-white transform scale-100 active:scale-80 select-none">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="group-hover:fill-gray-800 fill-gray-200" d="M12 8C11.4696 8 10.9609 7.78929 10.5858 7.41421C10.2107 7.03914 10 6.53043 10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6C14 6.53043 13.7893 7.03914 13.4142 7.41421C13.0391 7.78929 12.5304 8 12 8ZM12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14ZM12 20C11.4696 20 10.9609 19.7893 10.5858 19.4142C10.2107 19.0391 10 18.5304 10 18C10 17.4696 10.2107 16.9609 10.5858 16.5858C10.9609 16.2107 11.4696 16 12 16C12.5304 16 13.0391 16.2107 13.4142 16.5858C13.7893 16.9609 14 17.4696 14 18C14 18.5304 13.7893 19.0391 13.4142 19.4142C13.0391 19.7893 12.5304 20 12 20Z" />
                    </svg>
                </div>
                <div name="menu" class="hidden transition-all [[open]_&]:flex max-h-0 [[open]_&]:max-h-[200px] flex-col absolute top-full w-40 right-0 bg-gray-800 rounded-xl p-2">
                    <a name="edit-anchor" class="hidden [[display-edit-link=true]_&]:flex group flex hover:bg-gray-700 rounded-xl p-2 pl-3 select-none cursor-pointer">
                        <span class="text-gray-300 group-hover:text-white grow self-center">Edit</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="fill-gray-300 group-hover:fill-white" d="M15.586 5.58598C15.7705 5.39496 15.9912 5.24259 16.2352 5.13778C16.4792 5.03296 16.7416 4.97779 17.0072 4.97548C17.2728 4.97317 17.5361 5.02377 17.7819 5.12434C18.0277 5.2249 18.251 5.3734 18.4388 5.56119C18.6266 5.74897 18.7751 5.97228 18.8756 6.21807C18.9762 6.46386 19.0268 6.72722 19.0245 6.99278C19.0222 7.25834 18.967 7.52078 18.8622 7.76479C18.7574 8.0088 18.605 8.22949 18.414 8.41398L17.621 9.20698L14.793 6.37898L15.586 5.58598ZM13.379 7.79298L5 16.172V19H7.828L16.208 10.621L13.378 7.79298H13.379Z" fill="white"/>
                        </svg>
                    </a>
                    <a name="report-anchor" class="hidden [[display-report-link=true]_&]:flex group flex hover:bg-gray-700 rounded-xl p-2 pl-3 select-none cursor-pointer">
                        <span class="text-gray-300 group-hover:text-white grow">Report</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="fill-gray-300 group-hover:fill-white" fill-rule="evenodd" clip-rule="evenodd" d="M5 8C5 7.20435 5.31607 6.44129 5.87868 5.87868C6.44129 5.31607 7.20435 5 8 5H18C18.1857 5 18.3678 5.05171 18.5257 5.14935C18.6837 5.24698 18.8114 5.38668 18.8944 5.55279C18.9775 5.71889 19.0126 5.90484 18.996 6.08981C18.9793 6.27477 18.9114 6.45143 18.8 6.6L16.25 10L18.8 13.4C18.9114 13.5486 18.9793 13.7252 18.996 13.9102C19.0126 14.0952 18.9775 14.2811 18.8944 14.4472C18.8114 14.6133 18.6837 14.753 18.5257 14.8507C18.3678 14.9483 18.1857 15 18 15H8C7.73478 15 7.48043 15.1054 7.29289 15.2929C7.10536 15.4804 7 15.7348 7 16V19C7 19.2652 6.89464 19.5196 6.70711 19.7071C6.51957 19.8946 6.26522 20 6 20C5.73478 20 5.48043 19.8946 5.29289 19.7071C5.10536 19.5196 5 19.2652 5 19V8Z" fill="#D1D5DB"/>
                        </svg>
                    </a>
                    <a name="admin-anchor" target="_blank" class="hidden [[display-admin-link=true]_&]:flex group hover:bg-gray-700 rounded-xl p-2 pl-3 select-none cursor-pointer">
                        <span class="text-gray-300 group-hover:text-white grow">Admin</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path class="fill-gray-300 group-hover:fill-white" d="M12.293 5.29289C12.4805 5.10536 12.7349 5 13.0001 5H18.0001C18.2653 5 18.5197 5.10536 18.7072 5.29289C18.8947 5.48043 19.0001 5.73478 19.0001 6V11C19.0001 11.2652 18.8947 11.5196 18.7072 11.7071C18.5197 11.8946 18.2653 12 18.0001 12C17.7349 12 17.4805 11.8946 17.293 11.7071C17.1054 11.5196 17.0001 11.2652 17.0001 11V8.414L10.7071 14.707C10.6148 14.8025 10.5045 14.8787 10.3825 14.9311C10.2605 14.9835 10.1293 15.0111 9.99648 15.0123C9.8637 15.0134 9.73202 14.9881 9.60913 14.9378C9.48623 14.8875 9.37458 14.8133 9.28069 14.7194C9.18679 14.6255 9.11254 14.5139 9.06226 14.391C9.01198 14.2681 8.98668 14.1364 8.98783 14.0036C8.98898 13.8708 9.01657 13.7396 9.06898 13.6176C9.12139 13.4956 9.19757 13.3852 9.29308 13.293L15.5861 7H13.0001C12.7349 7 12.4805 6.89464 12.293 6.70711C12.1054 6.51957 12.0001 6.26522 12.0001 6C12.0001 5.73478 12.1054 5.48043 12.293 5.29289Z" />
                            <path class="fill-gray-300 group-hover:fill-white" d="M5.58579 7.58579C5.96086 7.21071 6.46957 7 7 7H10C10.2652 7 10.5196 7.10536 10.7071 7.29289C10.8946 7.48043 11 7.73478 11 8C11 8.26522 10.8946 8.51957 10.7071 8.70711C10.5196 8.89464 10.2652 9 10 9H7V17H15V14C15 13.7348 15.1054 13.4804 15.2929 13.2929C15.4804 13.1054 15.7348 13 16 13C16.2652 13 16.5196 13.1054 16.7071 13.2929C16.8946 13.4804 17 13.7348 17 14V17C17 17.5304 16.7893 18.0391 16.4142 18.4142C16.0391 18.7893 15.5304 19 15 19H7C6.46957 19 5.96086 18.7893 5.58579 18.4142C5.21071 18.0391 5 17.5304 5 17V9C5 8.46957 5.21071 7.96086 5.58579 7.58579Z" />
                        </svg>   
                    </a> 
                </div>
            </div>
        `;
      const { OPEN } = this.constructor.attributes;
      const { TOGGLE } = this.constructor.elements;
      this.querySelector(TOGGLE).addEventListener("click", this.toggle.bind(this));
      document.addEventListener("click", (event2) => {
        if (event2.target.closest(this.constructor.tag) === null) {
          this.removeAttribute(OPEN);
        }
      });
    }
    attributeChangedCallback(name, oldValue, newValue) {
      const { EDIT_LINK, ADMIN_LINK, REPORT_LINK } = this.constructor.attributes;
      const { EDIT_ANCHOR, ADMIN_ANCHOR, REPORT_ANCHOR } = this.constructor.elements;
      setTimeout(() => {
        switch (name) {
          case EDIT_LINK: {
            this.querySelector(EDIT_ANCHOR).href = this.getAttribute(EDIT_LINK);
            break;
          }
          case ADMIN_LINK: {
            this.querySelector(ADMIN_ANCHOR).href = this.getAttribute(ADMIN_LINK);
            break;
          }
          case REPORT_LINK: {
            this.querySelector(REPORT_ANCHOR).href = this.getAttribute(REPORT_LINK);
            break;
          }
        }
      }, 1);
    }
  };
  __publicField(ServerContextMenu, "tag", "server-context-menu");
  __publicField(ServerContextMenu, "attributes", {
    OPEN: "open",
    EDIT_LINK: "edit-link",
    ADMIN_LINK: "admin-link",
    REPORT_LINK: "report-link"
  });
  __publicField(ServerContextMenu, "elements", {
    TOGGLE: '[name="toggle"]',
    MENU: '[name="menu"]',
    EDIT_ANCHOR: '[name="edit-anchor"]',
    ADMIN_ANCHOR: '[name="admin-anchor"]',
    REPORT_ANCHOR: '[name="report-anchor"]'
  });
  customElements.define(ServerContextMenu.tag, ServerContextMenu);

  // client/legacy/server-report-form.js
  var ServerReportForm = class extends HTMLElement {
    static get observedAttributes() {
      return Object.values(this.attributes);
    }
    connectedCallback() {
      this.innerHTML = `
            <div class="bg-gray-700 rounded-xl p-4">
                <header class="flex flex-col">
                    <h1 class="text-2xl text-white p-2 pt-1 font-medium">Report</h1>
                    <div class="flex bg-gray-900 rounded-xl p-2 grow">
                        <discord-server-icon name="server_icon" class="pr-3"></discord-server-icon>
                        <span name="guild_name" class="self-center font-medium"></span>
                    </div>
                </header>
                <section name="report_types" class="py-2 space-y-2 max-h-80 overflow-auto [[successfully-submitted-report]_&]:!hidden"></section>
                <section name="report_details" class="hidden pt-2 [[selected-report-type]_&]:flex [[successfully-submitted-report]_&]:!hidden">
                    <label class="flex flex-col w-full">
                        <header class="flex pb-1 px-1">
                            <span class="text-lg font-medium grow">Details</span>
                            <div>
                                <span name="report_details_char_count" class="bg-gray-600 text-gray-300 text-sm rounded-lg px-2 py-1 [[err-max-detail-chars]_&]:bg-red-500 [[err-max-detail-chars]_&]:text-white">0 / ?</span>
                            </div>
                        </header>
                        <textarea name="report_details_textarea" rows="8" class="bg-gray-900/50 rounded-xl resize-none p-3 w-full border-2 border-transparent focus:border-white focus:outline-none" placeholder="More details here..">${this.getAttribute(this.constructor.attributes.REPORT_DETAILS) || ""}</textarea>
                    </label>
                </section>
                <section class="hidden [[selected-report-type]_&]:flex pt-3 [[successfully-submitted-report]_&]:!hidden">
                    <button name="report_button" class="flex group grow bg-red-500 rounded-xl p-4 font-medium justify-center hover:bg-white [[report-pending]_&]:bg-white">
                        <span class="text-base group-hover:text-gray-800 [[report-pending]_&]:opacity-0 transform scale-100 transition-all [[report-pending]_&]:scale-0">Report</span>
                        <loading-spinner class="absolute transition-all self-center w-5 h-5 ease-in-out duration-300 transform opacity-0 [[report-pending]_&]:opacity-100 scale-0 [[report-pending]_&]:scale-100 "></loading-spinner>
                    </button>
                </section>
                <section class="hidden [[successfully-submitted-report]_&]:flex flex-col p-4 bg-gray-900/40 rounded-xl mt-2">
                    <span class="font-medium text-red-400 pb-1">Reported</span>
                    <span class="text-gray-300">Thanks for reporting!</span>
                </section>
            </div>
        `;
      this.icon = this.querySelector(this.constructor.elements.SERVER_ICON);
      this.reportTypesContainer = this.querySelector(this.constructor.elements.REPORT_TYPES);
      this.reportDetailsTextArea = this.querySelector(this.constructor.elements.REPORT_DETAILS_TEXTAREA);
      this.reportDetailsTextArea.addEventListener("input", this.onDetailsInput.bind(this));
      this.reportDetailsCharCount = this.querySelector(this.constructor.elements.REPORT_DETAILS_CHAR_COUNT);
      this.querySelector(this.constructor.elements.REPORT_BUTTON).addEventListener("click", this.handleReportButtonClick.bind(this));
    }
    async handleReportButtonClick(event2) {
      if (this.hasAttribute(this.constructor.attributes.REPORT_PENDING))
        return;
      this.sendReportRequest({
        method: "POST",
        headers: {
          "X-csrfToken": this.getAttribute(this.constructor.attributes.CSRF_TOKEN)
        },
        body: JSON.stringify({
          "server_slug": this.getAttribute(this.constructor.attributes.SERVER_SLUG),
          "report_type": this.getAttribute(this.constructor.attributes.SELECTED_REPORT_TYPE),
          "report_details": this.getAttribute(this.constructor.attributes.REPORT_DETAILS)
        })
      });
    }
    async sendReportRequest(request) {
      this.setAttribute(this.constructor.attributes.REPORT_PENDING, true);
      return await fetch(`/server/${this.getAttribute("server-slug")}/report`, request).then((response) => {
        this.removeAttribute(this.constructor.attributes.REPORT_PENDING);
        this.setAttribute(this.constructor.attributes.SUCCESSFULLY_SUBMITTED_REPORT, true);
        return response;
      }).catch((error2) => {
        console.error(error2);
        this.removeAttribute(this.constructor.attributes.REPORT_PENDING);
        window.dispatchEvent(new CustomEvent("message", {
          detail: {
            type: "error",
            message: error2.message,
            timeout: 5e3
          }
        }));
        return error2;
      });
    }
    onDetailsInput(event2) {
      this.setAttribute(this.constructor.attributes.REPORT_DETAILS, event2.target.value);
    }
    renderReportTypes() {
      this.reportTypesContainer.innerHTML = this.reportTypes.filter((reportType) => {
        if (this.hasAttribute(this.constructor.attributes.SELECTED_REPORT_TYPE)) {
          return reportType.type === this.getAttribute(this.constructor.attributes.SELECTED_REPORT_TYPE);
        } else {
          return true;
        }
      }).map((reportType) => {
        const selected = this.getAttribute(this.constructor.attributes.SELECTED_REPORT_TYPE) === reportType.type;
        return `
                    <div name="report_type" data-report-type="${reportType.type}" ${selected ? "data-selected" : ""} class="flex group p-3 bg-gray-800 rounded-xl cursor-pointer select-none hover:bg-red-500 [&[data-selected]]:bg-red-500">
                        <div class="flex grow pr-2 flex-col">
                            <span class="text-white text-base font-medium">${reportType.name}</span>  
                            <div class="flex flex-col text-gray-300 text-sm group-hover:text-white [[data-selected]_&]:text-white">
                                ${reportType.description}
                            </div>
                        </div>
                        <div class="self-center">
                            <svg class="${selected ? "hidden" : ""}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-gray-200 group-hover:fill-white [[data-selected]_&]:fill-white" d="M17.92 11.6199C17.8724 11.4972 17.801 11.385 17.71 11.2899L12.71 6.28994C12.6168 6.1967 12.5061 6.12274 12.3842 6.07228C12.2624 6.02182 12.1319 5.99585 12 5.99585C11.7337 5.99585 11.4783 6.10164 11.29 6.28994C11.1968 6.38318 11.1228 6.49387 11.0723 6.61569C11.0219 6.73751 10.9959 6.86808 10.9959 6.99994C10.9959 7.26624 11.1017 7.52164 11.29 7.70994L14.59 10.9999H7C6.73478 10.9999 6.48043 11.1053 6.29289 11.2928C6.10536 11.4804 6 11.7347 6 11.9999C6 12.2652 6.10536 12.5195 6.29289 12.707C6.48043 12.8946 6.73478 12.9999 7 12.9999H14.59L11.29 16.2899C11.1963 16.3829 11.1219 16.4935 11.0711 16.6154C11.0203 16.7372 10.9942 16.8679 10.9942 16.9999C10.9942 17.132 11.0203 17.2627 11.0711 17.3845C11.1219 17.5064 11.1963 17.617 11.29 17.7099C11.383 17.8037 11.4936 17.8781 11.6154 17.9288C11.7373 17.9796 11.868 18.0057 12 18.0057C12.132 18.0057 12.2627 17.9796 12.3846 17.9288C12.5064 17.8781 12.617 17.8037 12.71 17.7099L17.71 12.7099C17.801 12.6148 17.8724 12.5027 17.92 12.3799C18.02 12.1365 18.02 11.8634 17.92 11.6199Z" />
                            </svg>
                            <svg class="${selected ? "" : "hidden"}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-gray-200 group-hover:fill-white [[data-selected]_&]:fill-white" d="M13.4099 11.9999L17.7099 7.70994C17.8982 7.52164 18.004 7.26624 18.004 6.99994C18.004 6.73364 17.8982 6.47825 17.7099 6.28994C17.5216 6.10164 17.2662 5.99585 16.9999 5.99585C16.7336 5.99585 16.4782 6.10164 16.2899 6.28994L11.9999 10.5899L7.70994 6.28994C7.52164 6.10164 7.26624 5.99585 6.99994 5.99585C6.73364 5.99585 6.47824 6.10164 6.28994 6.28994C6.10164 6.47825 5.99585 6.73364 5.99585 6.99994C5.99585 7.26624 6.10164 7.52164 6.28994 7.70994L10.5899 11.9999L6.28994 16.2899C6.19621 16.3829 6.12182 16.4935 6.07105 16.6154C6.02028 16.7372 5.99414 16.8679 5.99414 16.9999C5.99414 17.132 6.02028 17.2627 6.07105 17.3845C6.12182 17.5064 6.19621 17.617 6.28994 17.7099C6.3829 17.8037 6.4935 17.8781 6.61536 17.9288C6.73722 17.9796 6.86793 18.0057 6.99994 18.0057C7.13195 18.0057 7.26266 17.9796 7.38452 17.9288C7.50638 17.8781 7.61698 17.8037 7.70994 17.7099L11.9999 13.4099L16.2899 17.7099C16.3829 17.8037 16.4935 17.8781 16.6154 17.9288C16.7372 17.9796 16.8679 18.0057 16.9999 18.0057C17.132 18.0057 17.2627 17.9796 17.3845 17.9288C17.5064 17.8781 17.617 17.8037 17.7099 17.7099C17.8037 17.617 17.8781 17.5064 17.9288 17.3845C17.9796 17.2627 18.0057 17.132 18.0057 16.9999C18.0057 16.8679 17.9796 16.7372 17.9288 16.6154C17.8781 16.4935 17.8037 16.3829 17.7099 16.2899L13.4099 11.9999Z" />
                            </svg>
                        </div>
                    </div>
                `;
      }).join("");
      Array.from(this.querySelectorAll(this.constructor.elements.REPORT_TYPE)).forEach((reportTypeElement) => {
        reportTypeElement.addEventListener("click", (event2) => {
          if (this.hasAttribute(this.constructor.attributes.SELECTED_REPORT_TYPE)) {
            this.removeAttribute(this.constructor.attributes.SELECTED_REPORT_TYPE);
          } else {
            this.setAttribute(this.constructor.attributes.SELECTED_REPORT_TYPE, reportTypeElement.dataset.reportType);
            this.reportDetailsTextArea.focus();
          }
        });
      });
    }
    attributeChangedCallback(name, oldValue, newValue) {
      setTimeout(() => {
        switch (name) {
          case this.constructor.attributes.GUILD_ID: {
            this.icon.setAttribute(this.icon.constructor.attributes.GUILD_ID, newValue);
            break;
          }
          case this.constructor.attributes.GUILD_NAME: {
            const span = this.querySelector(this.constructor.elements.GUILD_NAME);
            this.icon.setAttribute(this.icon.constructor.attributes.GUILD_NAME, newValue);
            span.innerText = newValue;
            break;
          }
          case this.constructor.attributes.GUILD_ICON_HASH: {
            this.icon.setAttribute(this.icon.constructor.attributes.GUILD_ICON_HASH, newValue);
            break;
          }
          case this.constructor.attributes.REPORT_TYPES: {
            this.reportTypes = JSON.parse(newValue);
            this.renderReportTypes();
            break;
          }
          case this.constructor.attributes.SELECTED_REPORT_TYPE: {
            this.renderReportTypes();
            break;
          }
          case this.constructor.attributes.REPORT_DETAILS: {
            const maxCharCount = parseInt(this.getAttribute(this.constructor.attributes.MAX_DETAILS_CHAR_COUNT)) || "?";
            this.reportDetailsCharCount.innerText = `${newValue.length} / ${maxCharCount}`;
            if (newValue.length > maxCharCount) {
              this.setAttribute(this.constructor.attributes.ERR_MAX_DETAIL_CHARS, true);
            } else {
              this.removeAttribute(this.constructor.attributes.ERR_MAX_DETAIL_CHARS);
            }
            break;
          }
        }
      }, 1);
    }
  };
  __publicField(ServerReportForm, "tag", "server-report-form");
  __publicField(ServerReportForm, "elements", {
    SERVER_ICON: '[name="server_icon"]',
    GUILD_NAME: '[name="guild_name"]',
    REPORT_TYPES: '[name="report_types"]',
    REPORT_TYPE: '[name="report_type"]',
    REPORT_DETAILS_TEXTAREA: '[name="report_details_textarea"]',
    REPORT_DETAILS_CHAR_COUNT: '[name="report_details_char_count"]',
    REPORT_BUTTON: '[name="report_button"]'
  });
  __publicField(ServerReportForm, "attributes", {
    REPORT_TYPES: "report-types",
    SELECTED_REPORT_TYPE: "selected-report-type",
    SERVER_SLUG: "server-slug",
    GUILD_ID: "guild-id",
    GUILD_NAME: "guild-name",
    GUILD_ICON_HASH: "guild-icon-hash",
    REPORT_DETAILS: "report-details",
    MAX_DETAILS_CHAR_COUNT: "max-details-char-count",
    ERR_MAX_DETAIL_CHARS: "err-max-detail-chars",
    CSRF_TOKEN: "csrf-token",
    REPORT_PENDING: "report-pending",
    SUCCESSFULLY_SUBMITTED_REPORT: "successfully-submitted-report"
  });
  customElements.define(ServerReportForm.tag, ServerReportForm);

  // client/legacy.js
  var import_debounce = __toModule(require_debounce());
  var import_for_next2 = __toModule(require_for_next());

  // node_modules/@alpinejs/collapse/dist/module.esm.js
  function src_default2(Alpine2) {
    Alpine2.directive("collapse", collapse);
    collapse.inline = (el, { modifiers }) => {
      if (!modifiers.includes("min"))
        return;
      el._x_doShow = () => {
      };
      el._x_doHide = () => {
      };
    };
    function collapse(el, { modifiers }) {
      let duration = modifierValue2(modifiers, "duration", 250) / 1e3;
      let floor = modifierValue2(modifiers, "min", 0);
      let fullyHide = !modifiers.includes("min");
      if (!el._x_isShown)
        el.style.height = `${floor}px`;
      if (!el._x_isShown && fullyHide)
        el.hidden = true;
      if (!el._x_isShown)
        el.style.overflow = "hidden";
      let setFunction = (el2, styles) => {
        let revertFunction = Alpine2.setStyles(el2, styles);
        return styles.height ? () => {
        } : revertFunction;
      };
      let transitionStyles = {
        transitionProperty: "height",
        transitionDuration: `${duration}s`,
        transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)"
      };
      el._x_transition = {
        in(before = () => {
        }, after = () => {
        }) {
          if (fullyHide)
            el.hidden = false;
          if (fullyHide)
            el.style.display = null;
          let current = el.getBoundingClientRect().height;
          el.style.height = "auto";
          let full = el.getBoundingClientRect().height;
          if (current === full) {
            current = floor;
          }
          Alpine2.transition(el, Alpine2.setStyles, {
            during: transitionStyles,
            start: { height: current + "px" },
            end: { height: full + "px" }
          }, () => el._x_isShown = true, () => {
            if (el.style.height == `${full}px`) {
              el.style.overflow = null;
            }
          });
        },
        out(before = () => {
        }, after = () => {
        }) {
          let full = el.getBoundingClientRect().height;
          Alpine2.transition(el, setFunction, {
            during: transitionStyles,
            start: { height: full + "px" },
            end: { height: floor + "px" }
          }, () => el.style.overflow = "hidden", () => {
            el._x_isShown = false;
            if (el.style.height == `${floor}px` && fullyHide) {
              el.style.display = "none";
              el.hidden = true;
            }
          });
        }
      };
    }
  }
  function modifierValue2(modifiers, key, fallback) {
    if (modifiers.indexOf(key) === -1)
      return fallback;
    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue)
      return fallback;
    if (key === "duration") {
      let match = rawValue.match(/([0-9]+)ms/);
      if (match)
        return match[1];
    }
    if (key === "min") {
      let match = rawValue.match(/([0-9]+)px/);
      if (match)
        return match[1];
    }
    return rawValue;
  }
  var module_default2 = src_default2;

  // node_modules/@alpinejs/intersect/dist/module.esm.js
  function src_default3(Alpine2) {
    Alpine2.directive("intersect", (el, { value, expression, modifiers }, { evaluateLater: evaluateLater2, cleanup: cleanup2 }) => {
      let evaluate2 = evaluateLater2(expression);
      let options = {
        rootMargin: getRootMargin(modifiers),
        threshold: getThreshhold(modifiers)
      };
      let observer2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting === (value === "leave"))
            return;
          evaluate2();
          modifiers.includes("once") && observer2.disconnect();
        });
      }, options);
      observer2.observe(el);
      cleanup2(() => {
        observer2.disconnect();
      });
    });
  }
  function getThreshhold(modifiers) {
    if (modifiers.includes("full"))
      return 0.99;
    if (modifiers.includes("half"))
      return 0.5;
    if (!modifiers.includes("threshold"))
      return 0;
    let threshold = modifiers[modifiers.indexOf("threshold") + 1];
    if (threshold === "100")
      return 1;
    if (threshold === "0")
      return 0;
    return Number(`.${threshold}`);
  }
  function getLengthValue(rawValue) {
    let match = rawValue.match(/^(-?[0-9]+)(px|%)?$/);
    return match ? match[1] + (match[2] || "px") : void 0;
  }
  function getRootMargin(modifiers) {
    const key = "margin";
    const fallback = "0px 0px 0px 0px";
    const index = modifiers.indexOf(key);
    if (index === -1)
      return fallback;
    let values = [];
    for (let i2 = 1; i2 < 5; i2++) {
      values.push(getLengthValue(modifiers[index + i2] || ""));
    }
    values = values.filter((v) => v !== void 0);
    return values.length ? values.join(" ").trim() : fallback;
  }
  var module_default3 = src_default3;

  // node_modules/@alpinejs/persist/dist/module.esm.js
  function src_default4(Alpine2) {
    let persist = () => {
      let alias;
      let storage = localStorage;
      return Alpine2.interceptor((initialValue, getter, setter, path, key) => {
        let lookup = alias || `_x_${path}`;
        let initial = storageHas(lookup, storage) ? storageGet(lookup, storage) : initialValue;
        setter(initial);
        Alpine2.effect(() => {
          let value = getter();
          storageSet(lookup, value, storage);
          setter(value);
        });
        return initial;
      }, (func) => {
        func.as = (key) => {
          alias = key;
          return func;
        }, func.using = (target) => {
          storage = target;
          return func;
        };
      });
    };
    Object.defineProperty(Alpine2, "$persist", { get: () => persist() });
    Alpine2.magic("persist", persist);
  }
  function storageHas(key, storage) {
    return storage.getItem(key) !== null;
  }
  function storageGet(key, storage) {
    return JSON.parse(storage.getItem(key, storage));
  }
  function storageSet(key, value, storage) {
    storage.setItem(key, JSON.stringify(value));
  }
  var module_default4 = src_default4;

  // client/legacy.js
  window.Alpine = module_default;
  module_default.magic("debounce", () => import_debounce.default);
  module_default.magic("for", () => import_for_next2.default);
  module_default.plugin(module_default2);
  module_default.plugin(module_default3);
  module_default.plugin(module_default4);
  module_default.data("app", () => app_data_default);
  module_default.magic("discord", () => ({
    parseInvite(inviteString) {
      const regex = /(?:(?:(?:https\:\/\/)?discord\.(?:com|gg)\/(?:invite\/)?))?([\w-]+)/g;
      const match = regex.exec(inviteString);
      const code = match && match[1];
      return {
        code
      };
    },
    async fetchInviteData(code) {
      return fetch(`https://discord.com/api/v9/invites/${code}?with_counts=true`).then((res) => res.json());
    }
  }));
  module_default.magic("feedback", () => {
    const feedback = new Set();
    function getFeedbackJSON() {
      return JSON.parse(document.getElementById("feedback")?.innerText || "[]");
    }
    feedback.log = () => {
      console.log(feedback);
    };
    getFeedbackJSON().forEach((key) => feedback.add(key));
    return module_default.reactive(feedback);
  });
  window.csrf = document.querySelector('meta[name="csrf_token"]')?.content;

  // client/layout/custom-element.js
  var _a;
  var custom_element_default = (_a = class extends HTMLElement {
    tagName = null;
    tagString = null;
    sync = (key, fnOrValue) => this.constructor.sync(this, key, fnOrValue);
    handle = (key, ...values) => this.constructor.handle(this, key, ...values);
    static define(tagName, options = {}) {
      if (options.unique) {
        this.tagString = Math.random().toString(36).substring(2, 8);
        this.tagName = `${tagName}-${this.tagString}`;
      } else {
        this.tagName = tagName;
      }
      customElements.define(this.tagName, this);
      return this;
    }
    alias = (id) => this.constructor.alias(this, id);
    static alias(element, id) {
      if (element.constructor.tagString) {
        element.setAttribute("data-alias", `${id}-${element.constructor.tagString}`);
      } else {
        element.setAttribute("data-alias", id);
      }
      return element;
    }
    select = (Element2, alias) => this.constructor.select(Element2, alias, this);
    static select(Element2, alias, parent) {
      let tagName = Element2.tagName || Element2;
      if (alias) {
        return (parent || document).querySelector(`${tagName}[data-alias="${Element2.tagString && `${alias}-${Element2.tagString}` || alias}"]`);
      } else {
        return (parent || document).querySelector(tagName);
      }
    }
    selectAll = (Element2, alias) => this.constructor.selectAll(Element2, alias, this);
    static selectAll(Element2, alias, parent) {
      let tagName = Element2.tagName || Element2;
      if (alias) {
        return (parent || document).querySelectorAll(`${tagName}[data-alias="${Element2.tagString && `${alias}-${Element2.tagString}` || alias}"]`);
      } else {
        return (parent || document).querySelectorAll(tagName);
      }
    }
    push = (...elements) => this.constructor.push(this, ...elements);
    static push(parent, ...elements) {
      elements.forEach((element) => {
        if (element.constructor === String) {
          const nodes = Object.assign(document.createElement("div"), {
            innerHTML: element
          }).childNodes;
          while (nodes.length > 0) {
            parent.appendChild(nodes[0]);
          }
        } else {
          parent.appendChild(element);
        }
      });
      return parent;
    }
    insert = (...elements) => this.constructor.insert(this, ...elements);
    static insert(parent, ...elements) {
      elements.forEach((element, index) => {
        const isFirst = index === 0;
        const inParent = this.some(parent, (child) => child.isSameNode(element));
        const firstElement = this.find(parent, (child) => elements.find((element2) => element2.isSameNode(child)));
        const nextElement = elements[index - 1];
        const nextIsLeft = nextElement && this.indexOf(parent, nextElement) < this.indexOf(parent, element);
        if (element.show && element.hasAttribute("pending-removal")) {
          element.show();
          return;
        }
        if (isFirst && !inParent && !firstElement) {
          parent.appendChild(element);
          if (element.show)
            element.show(index);
          return;
        }
        if (!isFirst && !inParent) {
          this.insertAfter(parent, nextElement, element);
          if (element.show)
            element.show(index);
          return;
        }
        if (isFirst && inParent && nextIsLeft && firstElement || isFirst && !inParent && firstElement) {
          parent.insertBefore(element, firstElement);
          if (element.show)
            element.show(index);
          return;
        }
      });
      return parent;
    }
    replace = (...elements) => this.constructor.replace(this, ...elements);
    static replace(parent, ...elements) {
      this.insert(parent, ...elements);
      [...parent.childNodes].forEach((node, index) => {
        if (!elements.some((child) => child.isSameNode(node))) {
          if (node.hide) {
            if (!node.hasAttribute("pending-removal")) {
              node.hide(index);
            }
          } else {
            node.remove();
          }
        }
      });
      return parent;
    }
    insertAfter = (referenceNode, newNode) => this.constructor.insertAfter(this, referenceNode, newNode);
    static insertAfter(parent, referenceNode, newNode) {
      if (parent.lastChild) {
        if (parent.lastChild.isSameNode(referenceNode)) {
          parent.appendChild(newNode);
        } else {
          parent.insertBefore(newNode, referenceNode.nextSibling);
        }
      } else {
        parent.appendChild(newNode);
      }
    }
    afterEnd = (element) => this.constructor.afterEnd(this, element);
    static afterEnd(parent, element) {
      if (parent.nextSibling) {
        parent.parentNode.insertBefore(element, parent.nextSibling);
      } else {
        parent.parentNode.appendChild(element);
      }
      return parent;
    }
    afterBegin = (element) => this.constructor.afterBegin(this, element);
    static afterBegin(parent, element) {
      if (parent.firstChild) {
        parent.insertBefore(element, parent.firstChild);
      } else {
        parent.appendChild(element);
      }
      return parent;
    }
    beforeEnd = (element) => this.constructor.beforeEnd(this, element);
    static beforeEnd(parent, element) {
      parent.appendChild(element);
      return parent;
    }
    beforeBegin = (element) => this.constructor.beforeBegin(this, element);
    static beforeBegin(parent, element) {
      parent.parentNode.insertBefore(element, parent);
      return parent;
    }
    forEach = (callback) => this.constructor.forEach(this, callback);
    static forEach(parent, callback) {
      for (let i2 = 0; i2 < parent.childNodes.length; i2++) {
        callback(parent.childNodes[i2], i2);
      }
    }
    some = (callback) => this.constructor.some(this, callback);
    static some(element, callback) {
      for (let i2 = 0; i2 < element.children.length; i2++) {
        if (callback(element.children[i2]))
          return true;
      }
      return false;
    }
    shift = () => this.constructor.shift(this);
    static shift(target) {
      const shifted = target.firstChild;
      target.removeChild(shifted);
      return shifted;
    }
    unshift = (...elements) => this.constructor.unshift(this, ...elements);
    static unshift(parent, ...elements) {
      elements.forEach((element) => {
        if (element.constructor === String) {
          const nodes = Object.assign(document.createElement("div"), {
            innerHTML: element
          }).childNodes;
          while (nodes.length > 0) {
            parent.insertBefore(nodes[nodes.length - 1], parent.firstChild);
          }
        } else {
          parent.insertBefore(element, parent.firstChild);
        }
      });
      return parent.length;
    }
    splice = (start2, deleteCount) => this.constructor.splice(this, start2, deleteCount);
    static splice(parent, start2, deleteCount) {
      if (!deleteCount)
        deleteCount = parent.children.length - start2;
      const spliced = [];
      for (let i2 = start2; i2 < start2 + deleteCount; i2++) {
        const element = parent.children[i2];
        element && spliced.push(element);
      }
      spliced.forEach((element) => element && element.remove());
      return spliced;
    }
    filter = (callback) => this.constructor.filter(this, callback);
    static filter(element, callback) {
      const filtered = [];
      for (let i2 = 0; i2 < element.children.length; i2++) {
        if (callback(element.children[i2]))
          filtered.push(element.children[i2]);
      }
      return filtered;
    }
    find = (callback, recursive = false) => this.constructor.find(this, callback, recursive);
    static find(element, callback, recursive = false) {
      for (let i2 = 0; i2 < element.children.length; i2++) {
        if (callback(element.children[i2], i2))
          return element.children[i2];
        if (recursive) {
          const found = this.find(element.children[i2], callback, recursive);
          if (found)
            return found;
        }
      }
      return null;
    }
    indexOf = (element) => this.constructor.indexOf(this, element);
    static indexOf(parent, element) {
      for (let i2 = 0; i2 < parent.children.length; i2++) {
        if (parent.children[i2].isSameNode(element))
          return i2;
      }
      return -1;
    }
    use = (callback) => this.constructor.use(this, callback);
    static use(element, callback) {
      if (element instanceof this.constructor) {
        callback(element);
      } else {
        callback(this.with(element));
      }
      return element;
    }
    classify = (...classNames) => this.constructor.classify(this, ...classNames);
    static classify(element, ...classNames) {
      element.classList.add(...classNames.join(" ").split(" "));
      return element;
    }
    unclassify = (...classNames) => this.constructor.unclassify(this, ...classNames);
    static unclassify(element, ...classNames) {
      element.classList.remove(...classNames.join(" ").split(" "));
      return element;
    }
    attribute = (...attributes) => this.constructor.attribute(this, ...attributes);
    static attribute(element, ...attributes) {
      if (typeof arguments[1] === "function") {
        const callback = arguments[1];
        const observer2 = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            callback(mutation.target.attributes);
          });
        });
        observer2.observe(element, {
          attributes: true
        });
        return element;
      }
      if (typeof arguments[2] === "function") {
        const key = arguments[1];
        const callback = arguments[2];
        const observer2 = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.attributeName === key) {
              if (mutation.oldValue !== mutation.target.attributes[key]) {
                callback(mutation.target.attributes);
              }
            }
          });
        });
        observer2.observe(element, {
          attributes: true
        });
        callback(element.attributes);
        return element;
      }
      if (attributes.length === 1 && attributes[0].constructor === Object) {
        Object.keys(attributes[0]).forEach((key) => {
          const value = attributes[0][key];
          if (value === null) {
            element.removeAttribute(key);
          } else {
            element.setAttribute(key, value);
          }
        });
      } else {
        attributes.forEach((attribute) => {
          element.setAttribute(attribute, "");
        });
      }
      return element;
    }
    content = (content) => this.constructor.content(this, content);
    static content(element, content) {
      if (typeof content === "function") {
        content((value) => {
          element.textContent = value;
        });
        element.addEventListener("DOMCharacterDataModified", (event2) => {
          content(element.textContent);
        });
      } else {
        element.textContent = content;
      }
      return element;
    }
    on = (event2, callback) => this.constructor.on(this, event2, callback);
    static on(element, event2, callback) {
      element.addEventListener(event2, callback);
      return element;
    }
    permit = (event2, payload) => this.constructor.permit(this, event2, payload);
    static permit(element, event2, payload) {
      return element.dispatchEvent(new CustomEvent(event2, {
        detail: payload,
        cancelable: true,
        bubbles: true
      }));
    }
    assign = (properties) => this.constructor.assign(this, properties);
    static assign(element, properties = {}) {
      Object.assign(element, properties);
      return element;
    }
    get length() {
      return this.children.length;
    }
  }, __publicField(_a, "sync", (element, key, fnOrValue) => {
    if (fnOrValue !== void 0) {
      if (typeof fnOrValue === "function") {
        const caller = (event2) => {
          const result = fnOrValue(element[key]);
          if (result !== void 0) {
            element[key] = result;
          }
        };
        element.addEventListener("sync", caller);
        caller();
      } else {
        element[key] = fnOrValue;
        element.dispatchEvent(new CustomEvent("sync"));
      }
      return element;
    } else {
      element.dispatchEvent(new CustomEvent("sync"));
    }
  }), __publicField(_a, "handle", (element, key, ...values) => {
    if (_a[key]) {
      _a[key](element, ...values);
    }
    let parent = element;
    while (parent = parent.parentNode) {
      if (parent[key] && typeof parent[key] === "function") {
        parent[key](...values);
      }
    }
    return element;
  }), __publicField(_a, "with", (...elements) => {
    return new Proxy(elements, {
      get: (target, property) => {
        if (typeof property === "symbol") {
          return target[property];
        }
        if (!Number.isNaN(parseInt(property))) {
          return target[property];
        }
        const lookup = _a[property];
        if (!lookup)
          return target[property];
        if (typeof lookup === "function") {
          return (...args) => {
            const results = [];
            elements.forEach((element) => {
              results.push(lookup.bind(_a)(element, ...args));
            });
            return results.length > 0 ? _a.with(...results) : _a.with(...elements);
          };
        }
      },
      set: (target, property, value) => {
        console.log("set", property, value);
      }
    });
  }), _a).define("layout", { unique: true });

  // node_modules/event-target-shim/index.mjs
  function assertType(condition, message, ...args) {
    if (!condition) {
      throw new TypeError(format(message, args));
    }
  }
  function format(message, args) {
    let i2 = 0;
    return message.replace(/%[os]/gu, () => anyToString(args[i2++]));
  }
  function anyToString(x) {
    if (typeof x !== "object" || x === null) {
      return String(x);
    }
    return Object.prototype.toString.call(x);
  }
  var currentErrorHandler;
  function reportError(maybeError) {
    try {
      const error2 = maybeError instanceof Error ? maybeError : new Error(anyToString(maybeError));
      if (currentErrorHandler) {
        currentErrorHandler(error2);
        return;
      }
      if (typeof dispatchEvent === "function" && typeof ErrorEvent === "function") {
        dispatchEvent(new ErrorEvent("error", { error: error2, message: error2.message }));
      } else if (typeof process !== "undefined" && typeof process.emit === "function") {
        process.emit("uncaughtException", error2);
        return;
      }
      console.error(error2);
    } catch (_a2) {
    }
  }
  var Global = typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : void 0;
  var currentWarnHandler;
  var Warning = class {
    constructor(code, message) {
      this.code = code;
      this.message = message;
    }
    warn(...args) {
      var _a2;
      try {
        if (currentWarnHandler) {
          currentWarnHandler({ ...this, args });
          return;
        }
        const stack = ((_a2 = new Error().stack) !== null && _a2 !== void 0 ? _a2 : "").replace(/^(?:.+?\n){2}/gu, "\n");
        console.warn(this.message, ...args, stack);
      } catch (_b) {
      }
    }
  };
  var InitEventWasCalledWhileDispatching = new Warning("W01", "Unable to initialize event under dispatching.");
  var FalsyWasAssignedToCancelBubble = new Warning("W02", "Assigning any falsy value to 'cancelBubble' property has no effect.");
  var TruthyWasAssignedToReturnValue = new Warning("W03", "Assigning any truthy value to 'returnValue' property has no effect.");
  var NonCancelableEventWasCanceled = new Warning("W04", "Unable to preventDefault on non-cancelable events.");
  var CanceledInPassiveListener = new Warning("W05", "Unable to preventDefault inside passive event listener invocation.");
  var EventListenerWasDuplicated = new Warning("W06", "An event listener wasn't added because it has been added already: %o, %o");
  var OptionWasIgnored = new Warning("W07", "The %o option value was abandoned because the event listener wasn't added as duplicated.");
  var InvalidEventListener = new Warning("W08", "The 'callback' argument must be a function or an object that has 'handleEvent' method: %o");
  var InvalidAttributeHandler = new Warning("W09", "Event attribute handler must be a function: %o");
  var Event = class {
    static get NONE() {
      return NONE;
    }
    static get CAPTURING_PHASE() {
      return CAPTURING_PHASE;
    }
    static get AT_TARGET() {
      return AT_TARGET;
    }
    static get BUBBLING_PHASE() {
      return BUBBLING_PHASE;
    }
    constructor(type, eventInitDict) {
      Object.defineProperty(this, "isTrusted", {
        value: false,
        enumerable: true
      });
      const opts = eventInitDict !== null && eventInitDict !== void 0 ? eventInitDict : {};
      internalDataMap.set(this, {
        type: String(type),
        bubbles: Boolean(opts.bubbles),
        cancelable: Boolean(opts.cancelable),
        composed: Boolean(opts.composed),
        target: null,
        currentTarget: null,
        stopPropagationFlag: false,
        stopImmediatePropagationFlag: false,
        canceledFlag: false,
        inPassiveListenerFlag: false,
        dispatchFlag: false,
        timeStamp: Date.now()
      });
    }
    get type() {
      return $(this).type;
    }
    get target() {
      return $(this).target;
    }
    get srcElement() {
      return $(this).target;
    }
    get currentTarget() {
      return $(this).currentTarget;
    }
    composedPath() {
      const currentTarget = $(this).currentTarget;
      if (currentTarget) {
        return [currentTarget];
      }
      return [];
    }
    get NONE() {
      return NONE;
    }
    get CAPTURING_PHASE() {
      return CAPTURING_PHASE;
    }
    get AT_TARGET() {
      return AT_TARGET;
    }
    get BUBBLING_PHASE() {
      return BUBBLING_PHASE;
    }
    get eventPhase() {
      return $(this).dispatchFlag ? 2 : 0;
    }
    stopPropagation() {
      $(this).stopPropagationFlag = true;
    }
    get cancelBubble() {
      return $(this).stopPropagationFlag;
    }
    set cancelBubble(value) {
      if (value) {
        $(this).stopPropagationFlag = true;
      } else {
        FalsyWasAssignedToCancelBubble.warn();
      }
    }
    stopImmediatePropagation() {
      const data2 = $(this);
      data2.stopPropagationFlag = data2.stopImmediatePropagationFlag = true;
    }
    get bubbles() {
      return $(this).bubbles;
    }
    get cancelable() {
      return $(this).cancelable;
    }
    get returnValue() {
      return !$(this).canceledFlag;
    }
    set returnValue(value) {
      if (!value) {
        setCancelFlag($(this));
      } else {
        TruthyWasAssignedToReturnValue.warn();
      }
    }
    preventDefault() {
      setCancelFlag($(this));
    }
    get defaultPrevented() {
      return $(this).canceledFlag;
    }
    get composed() {
      return $(this).composed;
    }
    get isTrusted() {
      return false;
    }
    get timeStamp() {
      return $(this).timeStamp;
    }
    initEvent(type, bubbles = false, cancelable = false) {
      const data2 = $(this);
      if (data2.dispatchFlag) {
        InitEventWasCalledWhileDispatching.warn();
        return;
      }
      internalDataMap.set(this, {
        ...data2,
        type: String(type),
        bubbles: Boolean(bubbles),
        cancelable: Boolean(cancelable),
        target: null,
        currentTarget: null,
        stopPropagationFlag: false,
        stopImmediatePropagationFlag: false,
        canceledFlag: false
      });
    }
  };
  var NONE = 0;
  var CAPTURING_PHASE = 1;
  var AT_TARGET = 2;
  var BUBBLING_PHASE = 3;
  var internalDataMap = new WeakMap();
  function $(event2, name = "this") {
    const retv = internalDataMap.get(event2);
    assertType(retv != null, "'%s' must be an object that Event constructor created, but got another one: %o", name, event2);
    return retv;
  }
  function setCancelFlag(data2) {
    if (data2.inPassiveListenerFlag) {
      CanceledInPassiveListener.warn();
      return;
    }
    if (!data2.cancelable) {
      NonCancelableEventWasCanceled.warn();
      return;
    }
    data2.canceledFlag = true;
  }
  Object.defineProperty(Event, "NONE", { enumerable: true });
  Object.defineProperty(Event, "CAPTURING_PHASE", { enumerable: true });
  Object.defineProperty(Event, "AT_TARGET", { enumerable: true });
  Object.defineProperty(Event, "BUBBLING_PHASE", { enumerable: true });
  var keys = Object.getOwnPropertyNames(Event.prototype);
  for (let i2 = 0; i2 < keys.length; ++i2) {
    if (keys[i2] === "constructor") {
      continue;
    }
    Object.defineProperty(Event.prototype, keys[i2], { enumerable: true });
  }
  if (typeof Global !== "undefined" && typeof Global.Event !== "undefined") {
    Object.setPrototypeOf(Event.prototype, Global.Event.prototype);
  }
  function createInvalidStateError(message) {
    if (Global.DOMException) {
      return new Global.DOMException(message, "InvalidStateError");
    }
    if (DOMException == null) {
      DOMException = class DOMException2 extends Error {
        constructor(msg) {
          super(msg);
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, DOMException2);
          }
        }
        get code() {
          return 11;
        }
        get name() {
          return "InvalidStateError";
        }
      };
      Object.defineProperties(DOMException.prototype, {
        code: { enumerable: true },
        name: { enumerable: true }
      });
      defineErrorCodeProperties(DOMException);
      defineErrorCodeProperties(DOMException.prototype);
    }
    return new DOMException(message);
  }
  var DOMException;
  var ErrorCodeMap = {
    INDEX_SIZE_ERR: 1,
    DOMSTRING_SIZE_ERR: 2,
    HIERARCHY_REQUEST_ERR: 3,
    WRONG_DOCUMENT_ERR: 4,
    INVALID_CHARACTER_ERR: 5,
    NO_DATA_ALLOWED_ERR: 6,
    NO_MODIFICATION_ALLOWED_ERR: 7,
    NOT_FOUND_ERR: 8,
    NOT_SUPPORTED_ERR: 9,
    INUSE_ATTRIBUTE_ERR: 10,
    INVALID_STATE_ERR: 11,
    SYNTAX_ERR: 12,
    INVALID_MODIFICATION_ERR: 13,
    NAMESPACE_ERR: 14,
    INVALID_ACCESS_ERR: 15,
    VALIDATION_ERR: 16,
    TYPE_MISMATCH_ERR: 17,
    SECURITY_ERR: 18,
    NETWORK_ERR: 19,
    ABORT_ERR: 20,
    URL_MISMATCH_ERR: 21,
    QUOTA_EXCEEDED_ERR: 22,
    TIMEOUT_ERR: 23,
    INVALID_NODE_TYPE_ERR: 24,
    DATA_CLONE_ERR: 25
  };
  function defineErrorCodeProperties(obj) {
    const keys2 = Object.keys(ErrorCodeMap);
    for (let i2 = 0; i2 < keys2.length; ++i2) {
      const key = keys2[i2];
      const value = ErrorCodeMap[key];
      Object.defineProperty(obj, key, {
        get() {
          return value;
        },
        configurable: true,
        enumerable: true
      });
    }
  }
  var EventWrapper = class extends Event {
    static wrap(event2) {
      return new (getWrapperClassOf(event2))(event2);
    }
    constructor(event2) {
      super(event2.type, {
        bubbles: event2.bubbles,
        cancelable: event2.cancelable,
        composed: event2.composed
      });
      if (event2.cancelBubble) {
        super.stopPropagation();
      }
      if (event2.defaultPrevented) {
        super.preventDefault();
      }
      internalDataMap$1.set(this, { original: event2 });
      const keys2 = Object.keys(event2);
      for (let i2 = 0; i2 < keys2.length; ++i2) {
        const key = keys2[i2];
        if (!(key in this)) {
          Object.defineProperty(this, key, defineRedirectDescriptor(event2, key));
        }
      }
    }
    stopPropagation() {
      super.stopPropagation();
      const { original } = $$1(this);
      if ("stopPropagation" in original) {
        original.stopPropagation();
      }
    }
    get cancelBubble() {
      return super.cancelBubble;
    }
    set cancelBubble(value) {
      super.cancelBubble = value;
      const { original } = $$1(this);
      if ("cancelBubble" in original) {
        original.cancelBubble = value;
      }
    }
    stopImmediatePropagation() {
      super.stopImmediatePropagation();
      const { original } = $$1(this);
      if ("stopImmediatePropagation" in original) {
        original.stopImmediatePropagation();
      }
    }
    get returnValue() {
      return super.returnValue;
    }
    set returnValue(value) {
      super.returnValue = value;
      const { original } = $$1(this);
      if ("returnValue" in original) {
        original.returnValue = value;
      }
    }
    preventDefault() {
      super.preventDefault();
      const { original } = $$1(this);
      if ("preventDefault" in original) {
        original.preventDefault();
      }
    }
    get timeStamp() {
      const { original } = $$1(this);
      if ("timeStamp" in original) {
        return original.timeStamp;
      }
      return super.timeStamp;
    }
  };
  var internalDataMap$1 = new WeakMap();
  function $$1(event2) {
    const retv = internalDataMap$1.get(event2);
    assertType(retv != null, "'this' is expected an Event object, but got", event2);
    return retv;
  }
  var wrapperClassCache = new WeakMap();
  wrapperClassCache.set(Object.prototype, EventWrapper);
  if (typeof Global !== "undefined" && typeof Global.Event !== "undefined") {
    wrapperClassCache.set(Global.Event.prototype, EventWrapper);
  }
  function getWrapperClassOf(originalEvent) {
    const prototype = Object.getPrototypeOf(originalEvent);
    if (prototype == null) {
      return EventWrapper;
    }
    let wrapper = wrapperClassCache.get(prototype);
    if (wrapper == null) {
      wrapper = defineWrapper(getWrapperClassOf(prototype), prototype);
      wrapperClassCache.set(prototype, wrapper);
    }
    return wrapper;
  }
  function defineWrapper(BaseEventWrapper, originalPrototype) {
    class CustomEventWrapper extends BaseEventWrapper {
    }
    const keys2 = Object.keys(originalPrototype);
    for (let i2 = 0; i2 < keys2.length; ++i2) {
      Object.defineProperty(CustomEventWrapper.prototype, keys2[i2], defineRedirectDescriptor(originalPrototype, keys2[i2]));
    }
    return CustomEventWrapper;
  }
  function defineRedirectDescriptor(obj, key) {
    const d2 = Object.getOwnPropertyDescriptor(obj, key);
    return {
      get() {
        const original = $$1(this).original;
        const value = original[key];
        if (typeof value === "function") {
          return value.bind(original);
        }
        return value;
      },
      set(value) {
        const original = $$1(this).original;
        original[key] = value;
      },
      configurable: d2.configurable,
      enumerable: d2.enumerable
    };
  }
  function createListener(callback, capture, passive, once2, signal, signalListener) {
    return {
      callback,
      flags: (capture ? 1 : 0) | (passive ? 2 : 0) | (once2 ? 4 : 0),
      signal,
      signalListener
    };
  }
  function setRemoved(listener) {
    listener.flags |= 8;
  }
  function isCapture(listener) {
    return (listener.flags & 1) === 1;
  }
  function isPassive(listener) {
    return (listener.flags & 2) === 2;
  }
  function isOnce(listener) {
    return (listener.flags & 4) === 4;
  }
  function isRemoved(listener) {
    return (listener.flags & 8) === 8;
  }
  function invokeCallback({ callback }, target, event2) {
    try {
      if (typeof callback === "function") {
        callback.call(target, event2);
      } else if (typeof callback.handleEvent === "function") {
        callback.handleEvent(event2);
      }
    } catch (thrownError) {
      reportError(thrownError);
    }
  }
  function findIndexOfListener({ listeners }, callback, capture) {
    for (let i2 = 0; i2 < listeners.length; ++i2) {
      if (listeners[i2].callback === callback && isCapture(listeners[i2]) === capture) {
        return i2;
      }
    }
    return -1;
  }
  function addListener(list, callback, capture, passive, once2, signal) {
    let signalListener;
    if (signal) {
      signalListener = removeListener.bind(null, list, callback, capture);
      signal.addEventListener("abort", signalListener);
    }
    const listener = createListener(callback, capture, passive, once2, signal, signalListener);
    if (list.cow) {
      list.cow = false;
      list.listeners = [...list.listeners, listener];
    } else {
      list.listeners.push(listener);
    }
    return listener;
  }
  function removeListener(list, callback, capture) {
    const index = findIndexOfListener(list, callback, capture);
    if (index !== -1) {
      return removeListenerAt(list, index);
    }
    return false;
  }
  function removeListenerAt(list, index, disableCow = false) {
    const listener = list.listeners[index];
    setRemoved(listener);
    if (listener.signal) {
      listener.signal.removeEventListener("abort", listener.signalListener);
    }
    if (list.cow && !disableCow) {
      list.cow = false;
      list.listeners = list.listeners.filter((_, i2) => i2 !== index);
      return false;
    }
    list.listeners.splice(index, 1);
    return true;
  }
  function createListenerListMap() {
    return Object.create(null);
  }
  function ensureListenerList(listenerMap, type) {
    var _a2;
    return (_a2 = listenerMap[type]) !== null && _a2 !== void 0 ? _a2 : listenerMap[type] = {
      attrCallback: void 0,
      attrListener: void 0,
      cow: false,
      listeners: []
    };
  }
  var EventTarget = class {
    constructor() {
      internalDataMap$2.set(this, createListenerListMap());
    }
    addEventListener(type0, callback0, options0) {
      const listenerMap = $$2(this);
      const { callback, capture, once: once2, passive, signal, type } = normalizeAddOptions(type0, callback0, options0);
      if (callback == null || (signal === null || signal === void 0 ? void 0 : signal.aborted)) {
        return;
      }
      const list = ensureListenerList(listenerMap, type);
      const i2 = findIndexOfListener(list, callback, capture);
      if (i2 !== -1) {
        warnDuplicate(list.listeners[i2], passive, once2, signal);
        return;
      }
      addListener(list, callback, capture, passive, once2, signal);
    }
    removeEventListener(type0, callback0, options0) {
      const listenerMap = $$2(this);
      const { callback, capture, type } = normalizeOptions(type0, callback0, options0);
      const list = listenerMap[type];
      if (callback != null && list) {
        removeListener(list, callback, capture);
      }
    }
    dispatchEvent(e2) {
      const list = $$2(this)[String(e2.type)];
      if (list == null) {
        return true;
      }
      const event2 = e2 instanceof Event ? e2 : EventWrapper.wrap(e2);
      const eventData = $(event2, "event");
      if (eventData.dispatchFlag) {
        throw createInvalidStateError("This event has been in dispatching.");
      }
      eventData.dispatchFlag = true;
      eventData.target = eventData.currentTarget = this;
      if (!eventData.stopPropagationFlag) {
        const { cow, listeners } = list;
        list.cow = true;
        for (let i2 = 0; i2 < listeners.length; ++i2) {
          const listener = listeners[i2];
          if (isRemoved(listener)) {
            continue;
          }
          if (isOnce(listener) && removeListenerAt(list, i2, !cow)) {
            i2 -= 1;
          }
          eventData.inPassiveListenerFlag = isPassive(listener);
          invokeCallback(listener, this, event2);
          eventData.inPassiveListenerFlag = false;
          if (eventData.stopImmediatePropagationFlag) {
            break;
          }
        }
        if (!cow) {
          list.cow = false;
        }
      }
      eventData.target = null;
      eventData.currentTarget = null;
      eventData.stopImmediatePropagationFlag = false;
      eventData.stopPropagationFlag = false;
      eventData.dispatchFlag = false;
      return !eventData.canceledFlag;
    }
  };
  var internalDataMap$2 = new WeakMap();
  function $$2(target, name = "this") {
    const retv = internalDataMap$2.get(target);
    assertType(retv != null, "'%s' must be an object that EventTarget constructor created, but got another one: %o", name, target);
    return retv;
  }
  function normalizeAddOptions(type, callback, options) {
    var _a2;
    assertCallback(callback);
    if (typeof options === "object" && options !== null) {
      return {
        type: String(type),
        callback: callback !== null && callback !== void 0 ? callback : void 0,
        capture: Boolean(options.capture),
        passive: Boolean(options.passive),
        once: Boolean(options.once),
        signal: (_a2 = options.signal) !== null && _a2 !== void 0 ? _a2 : void 0
      };
    }
    return {
      type: String(type),
      callback: callback !== null && callback !== void 0 ? callback : void 0,
      capture: Boolean(options),
      passive: false,
      once: false,
      signal: void 0
    };
  }
  function normalizeOptions(type, callback, options) {
    assertCallback(callback);
    if (typeof options === "object" && options !== null) {
      return {
        type: String(type),
        callback: callback !== null && callback !== void 0 ? callback : void 0,
        capture: Boolean(options.capture)
      };
    }
    return {
      type: String(type),
      callback: callback !== null && callback !== void 0 ? callback : void 0,
      capture: Boolean(options)
    };
  }
  function assertCallback(callback) {
    if (typeof callback === "function" || typeof callback === "object" && callback !== null && typeof callback.handleEvent === "function") {
      return;
    }
    if (callback == null || typeof callback === "object") {
      InvalidEventListener.warn(callback);
      return;
    }
    throw new TypeError(format(InvalidEventListener.message, [callback]));
  }
  function warnDuplicate(listener, passive, once2, signal) {
    EventListenerWasDuplicated.warn(isCapture(listener) ? "capture" : "bubble", listener.callback);
    if (isPassive(listener) !== passive) {
      OptionWasIgnored.warn("passive");
    }
    if (isOnce(listener) !== once2) {
      OptionWasIgnored.warn("once");
    }
    if (listener.signal !== signal) {
      OptionWasIgnored.warn("signal");
    }
  }
  var keys$1 = Object.getOwnPropertyNames(EventTarget.prototype);
  for (let i2 = 0; i2 < keys$1.length; ++i2) {
    if (keys$1[i2] === "constructor") {
      continue;
    }
    Object.defineProperty(EventTarget.prototype, keys$1[i2], { enumerable: true });
  }
  if (typeof Global !== "undefined" && typeof Global.EventTarget !== "undefined") {
    Object.setPrototypeOf(EventTarget.prototype, Global.EventTarget.prototype);
  }

  // client/auth/current/user/event-target.js
  var event_target_default = new class CurrentUserEventTarget extends EventTarget {
    data = null;
    get isLoggedIn() {
      return !!this.data?.id;
    }
    get isStaff() {
      return this.data?.isStaff;
    }
    get isSuperUser() {
      return this.data?.isSuperuser;
    }
    constructor() {
      super();
      fetch("/api/user").then((r2) => r2.json()).then((data2) => {
        this.data = data2;
        this.dispatchEvent(new CustomEvent("load"));
      });
    }
  }();

  // client/server/card/list/view/layout.js
  var layout_default = class ServerListView extends custom_element_default {
    connectedCallback() {
      console.log("[Discadia] Server List View connected.");
    }
  }.define("server-list-view");

  // client/emoji/object.js
  var EmojiObject = class {
    id = null;
    title = null;
    emote = null;
    alt_label = [];
    content_id = null;
    constructor(data2) {
      if (data2) {
        Object.assign(this, data2);
      }
    }
    get type() {
      return this.isGif ? "image/gif" : "image/png";
    }
    get givenFileName() {
      return this.title + "." + this.ext;
    }
    get src() {
      return `https://emoji.discadia.com/${this.filename}.${this.ext}`;
    }
    get filename() {
      return this.emote?.split(".").slice(0, -1).join(".");
    }
    get isGif() {
      return this.emote?.endsWith(".gif");
    }
    get alt() {
      return this.alt_label.join(", ");
    }
    get ext() {
      return this.emote?.split(".").pop();
    }
    get downloadHref() {
      return `https://emoji.discadia.com/${this.emote}?download&filename=${this.title}.${this.ext}`;
    }
    data(extra = {}) {
      return {
        id: this.id,
        title: this.title,
        emote: this.emote,
        ...extra
      };
    }
    matches(emoji) {
      return this.id?.toString() === emoji.id?.toString();
    }
  };

  // node_modules/animejs/lib/anime.es.js
  var defaultInstanceSettings = {
    update: null,
    begin: null,
    loopBegin: null,
    changeBegin: null,
    change: null,
    changeComplete: null,
    loopComplete: null,
    complete: null,
    loop: 1,
    direction: "normal",
    autoplay: true,
    timelineOffset: 0
  };
  var defaultTweenSettings = {
    duration: 1e3,
    delay: 0,
    endDelay: 0,
    easing: "easeOutElastic(1, .5)",
    round: 0
  };
  var validTransforms = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"];
  var cache = {
    CSS: {},
    springs: {}
  };
  function minMax(val, min, max) {
    return Math.min(Math.max(val, min), max);
  }
  function stringContains(str, text) {
    return str.indexOf(text) > -1;
  }
  function applyArguments(func, args) {
    return func.apply(null, args);
  }
  var is = {
    arr: function(a2) {
      return Array.isArray(a2);
    },
    obj: function(a2) {
      return stringContains(Object.prototype.toString.call(a2), "Object");
    },
    pth: function(a2) {
      return is.obj(a2) && a2.hasOwnProperty("totalLength");
    },
    svg: function(a2) {
      return a2 instanceof SVGElement;
    },
    inp: function(a2) {
      return a2 instanceof HTMLInputElement;
    },
    dom: function(a2) {
      return a2.nodeType || is.svg(a2);
    },
    str: function(a2) {
      return typeof a2 === "string";
    },
    fnc: function(a2) {
      return typeof a2 === "function";
    },
    und: function(a2) {
      return typeof a2 === "undefined";
    },
    nil: function(a2) {
      return is.und(a2) || a2 === null;
    },
    hex: function(a2) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a2);
    },
    rgb: function(a2) {
      return /^rgb/.test(a2);
    },
    hsl: function(a2) {
      return /^hsl/.test(a2);
    },
    col: function(a2) {
      return is.hex(a2) || is.rgb(a2) || is.hsl(a2);
    },
    key: function(a2) {
      return !defaultInstanceSettings.hasOwnProperty(a2) && !defaultTweenSettings.hasOwnProperty(a2) && a2 !== "targets" && a2 !== "keyframes";
    }
  };
  function parseEasingParameters(string) {
    var match = /\(([^)]+)\)/.exec(string);
    return match ? match[1].split(",").map(function(p2) {
      return parseFloat(p2);
    }) : [];
  }
  function spring(string, duration) {
    var params = parseEasingParameters(string);
    var mass = minMax(is.und(params[0]) ? 1 : params[0], 0.1, 100);
    var stiffness = minMax(is.und(params[1]) ? 100 : params[1], 0.1, 100);
    var damping = minMax(is.und(params[2]) ? 10 : params[2], 0.1, 100);
    var velocity = minMax(is.und(params[3]) ? 0 : params[3], 0.1, 100);
    var w0 = Math.sqrt(stiffness / mass);
    var zeta = damping / (2 * Math.sqrt(stiffness * mass));
    var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
    var a2 = 1;
    var b2 = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;
    function solver(t2) {
      var progress = duration ? duration * t2 / 1e3 : t2;
      if (zeta < 1) {
        progress = Math.exp(-progress * zeta * w0) * (a2 * Math.cos(wd * progress) + b2 * Math.sin(wd * progress));
      } else {
        progress = (a2 + b2 * progress) * Math.exp(-progress * w0);
      }
      if (t2 === 0 || t2 === 1) {
        return t2;
      }
      return 1 - progress;
    }
    function getDuration() {
      var cached = cache.springs[string];
      if (cached) {
        return cached;
      }
      var frame = 1 / 6;
      var elapsed = 0;
      var rest = 0;
      while (true) {
        elapsed += frame;
        if (solver(elapsed) === 1) {
          rest++;
          if (rest >= 16) {
            break;
          }
        } else {
          rest = 0;
        }
      }
      var duration2 = elapsed * frame * 1e3;
      cache.springs[string] = duration2;
      return duration2;
    }
    return duration ? solver : getDuration;
  }
  function steps(steps2) {
    if (steps2 === void 0)
      steps2 = 10;
    return function(t2) {
      return Math.ceil(minMax(t2, 1e-6, 1) * steps2) * (1 / steps2);
    };
  }
  var bezier = function() {
    var kSplineTableSize = 11;
    var kSampleStepSize = 1 / (kSplineTableSize - 1);
    function A2(aA1, aA2) {
      return 1 - 3 * aA2 + 3 * aA1;
    }
    function B2(aA1, aA2) {
      return 3 * aA2 - 6 * aA1;
    }
    function C(aA1) {
      return 3 * aA1;
    }
    function calcBezier(aT, aA1, aA2) {
      return ((A2(aA1, aA2) * aT + B2(aA1, aA2)) * aT + C(aA1)) * aT;
    }
    function getSlope(aT, aA1, aA2) {
      return 3 * A2(aA1, aA2) * aT * aT + 2 * B2(aA1, aA2) * aT + C(aA1);
    }
    function binarySubdivide(aX, aA, aB, mX1, mX2) {
      var currentX, currentT, i2 = 0;
      do {
        currentT = aA + (aB - aA) / 2;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0) {
          aB = currentT;
        } else {
          aA = currentT;
        }
      } while (Math.abs(currentX) > 1e-7 && ++i2 < 10);
      return currentT;
    }
    function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
      for (var i2 = 0; i2 < 4; ++i2) {
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0) {
          return aGuessT;
        }
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
      }
      return aGuessT;
    }
    function bezier2(mX1, mY1, mX2, mY2) {
      if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
        return;
      }
      var sampleValues = new Float32Array(kSplineTableSize);
      if (mX1 !== mY1 || mX2 !== mY2) {
        for (var i2 = 0; i2 < kSplineTableSize; ++i2) {
          sampleValues[i2] = calcBezier(i2 * kSampleStepSize, mX1, mX2);
        }
      }
      function getTForX(aX) {
        var intervalStart = 0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
          intervalStart += kSampleStepSize;
        }
        --currentSample;
        var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= 1e-3) {
          return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        } else if (initialSlope === 0) {
          return guessForT;
        } else {
          return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
      }
      return function(x) {
        if (mX1 === mY1 && mX2 === mY2) {
          return x;
        }
        if (x === 0 || x === 1) {
          return x;
        }
        return calcBezier(getTForX(x), mY1, mY2);
      };
    }
    return bezier2;
  }();
  var penner = function() {
    var eases = { linear: function() {
      return function(t2) {
        return t2;
      };
    } };
    var functionEasings = {
      Sine: function() {
        return function(t2) {
          return 1 - Math.cos(t2 * Math.PI / 2);
        };
      },
      Circ: function() {
        return function(t2) {
          return 1 - Math.sqrt(1 - t2 * t2);
        };
      },
      Back: function() {
        return function(t2) {
          return t2 * t2 * (3 * t2 - 2);
        };
      },
      Bounce: function() {
        return function(t2) {
          var pow2, b2 = 4;
          while (t2 < ((pow2 = Math.pow(2, --b2)) - 1) / 11) {
          }
          return 1 / Math.pow(4, 3 - b2) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - t2, 2);
        };
      },
      Elastic: function(amplitude, period) {
        if (amplitude === void 0)
          amplitude = 1;
        if (period === void 0)
          period = 0.5;
        var a2 = minMax(amplitude, 1, 10);
        var p2 = minMax(period, 0.1, 2);
        return function(t2) {
          return t2 === 0 || t2 === 1 ? t2 : -a2 * Math.pow(2, 10 * (t2 - 1)) * Math.sin((t2 - 1 - p2 / (Math.PI * 2) * Math.asin(1 / a2)) * (Math.PI * 2) / p2);
        };
      }
    };
    var baseEasings = ["Quad", "Cubic", "Quart", "Quint", "Expo"];
    baseEasings.forEach(function(name, i2) {
      functionEasings[name] = function() {
        return function(t2) {
          return Math.pow(t2, i2 + 2);
        };
      };
    });
    Object.keys(functionEasings).forEach(function(name) {
      var easeIn = functionEasings[name];
      eases["easeIn" + name] = easeIn;
      eases["easeOut" + name] = function(a2, b2) {
        return function(t2) {
          return 1 - easeIn(a2, b2)(1 - t2);
        };
      };
      eases["easeInOut" + name] = function(a2, b2) {
        return function(t2) {
          return t2 < 0.5 ? easeIn(a2, b2)(t2 * 2) / 2 : 1 - easeIn(a2, b2)(t2 * -2 + 2) / 2;
        };
      };
      eases["easeOutIn" + name] = function(a2, b2) {
        return function(t2) {
          return t2 < 0.5 ? (1 - easeIn(a2, b2)(1 - t2 * 2)) / 2 : (easeIn(a2, b2)(t2 * 2 - 1) + 1) / 2;
        };
      };
    });
    return eases;
  }();
  function parseEasings(easing, duration) {
    if (is.fnc(easing)) {
      return easing;
    }
    var name = easing.split("(")[0];
    var ease = penner[name];
    var args = parseEasingParameters(easing);
    switch (name) {
      case "spring":
        return spring(easing, duration);
      case "cubicBezier":
        return applyArguments(bezier, args);
      case "steps":
        return applyArguments(steps, args);
      default:
        return applyArguments(ease, args);
    }
  }
  function selectString(str) {
    try {
      var nodes = document.querySelectorAll(str);
      return nodes;
    } catch (e2) {
      return;
    }
  }
  function filterArray(arr, callback) {
    var len = arr.length;
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    var result = [];
    for (var i2 = 0; i2 < len; i2++) {
      if (i2 in arr) {
        var val = arr[i2];
        if (callback.call(thisArg, val, i2, arr)) {
          result.push(val);
        }
      }
    }
    return result;
  }
  function flattenArray(arr) {
    return arr.reduce(function(a2, b2) {
      return a2.concat(is.arr(b2) ? flattenArray(b2) : b2);
    }, []);
  }
  function toArray(o2) {
    if (is.arr(o2)) {
      return o2;
    }
    if (is.str(o2)) {
      o2 = selectString(o2) || o2;
    }
    if (o2 instanceof NodeList || o2 instanceof HTMLCollection) {
      return [].slice.call(o2);
    }
    return [o2];
  }
  function arrayContains(arr, val) {
    return arr.some(function(a2) {
      return a2 === val;
    });
  }
  function cloneObject(o2) {
    var clone2 = {};
    for (var p2 in o2) {
      clone2[p2] = o2[p2];
    }
    return clone2;
  }
  function replaceObjectProps(o1, o2) {
    var o3 = cloneObject(o1);
    for (var p2 in o1) {
      o3[p2] = o2.hasOwnProperty(p2) ? o2[p2] : o1[p2];
    }
    return o3;
  }
  function mergeObjects(o1, o2) {
    var o3 = cloneObject(o1);
    for (var p2 in o2) {
      o3[p2] = is.und(o1[p2]) ? o2[p2] : o1[p2];
    }
    return o3;
  }
  function rgbToRgba(rgbValue) {
    var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
    return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
  }
  function hexToRgba(hexValue) {
    var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    var hex = hexValue.replace(rgx, function(m2, r3, g3, b3) {
      return r3 + r3 + g3 + g3 + b3 + b3;
    });
    var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var r2 = parseInt(rgb[1], 16);
    var g2 = parseInt(rgb[2], 16);
    var b2 = parseInt(rgb[3], 16);
    return "rgba(" + r2 + "," + g2 + "," + b2 + ",1)";
  }
  function hslToRgba(hslValue) {
    var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
    var h2 = parseInt(hsl[1], 10) / 360;
    var s2 = parseInt(hsl[2], 10) / 100;
    var l2 = parseInt(hsl[3], 10) / 100;
    var a2 = hsl[4] || 1;
    function hue2rgb(p3, q2, t2) {
      if (t2 < 0) {
        t2 += 1;
      }
      if (t2 > 1) {
        t2 -= 1;
      }
      if (t2 < 1 / 6) {
        return p3 + (q2 - p3) * 6 * t2;
      }
      if (t2 < 1 / 2) {
        return q2;
      }
      if (t2 < 2 / 3) {
        return p3 + (q2 - p3) * (2 / 3 - t2) * 6;
      }
      return p3;
    }
    var r2, g2, b2;
    if (s2 == 0) {
      r2 = g2 = b2 = l2;
    } else {
      var q = l2 < 0.5 ? l2 * (1 + s2) : l2 + s2 - l2 * s2;
      var p2 = 2 * l2 - q;
      r2 = hue2rgb(p2, q, h2 + 1 / 3);
      g2 = hue2rgb(p2, q, h2);
      b2 = hue2rgb(p2, q, h2 - 1 / 3);
    }
    return "rgba(" + r2 * 255 + "," + g2 * 255 + "," + b2 * 255 + "," + a2 + ")";
  }
  function colorToRgb(val) {
    if (is.rgb(val)) {
      return rgbToRgba(val);
    }
    if (is.hex(val)) {
      return hexToRgba(val);
    }
    if (is.hsl(val)) {
      return hslToRgba(val);
    }
  }
  function getUnit(val) {
    var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
    if (split) {
      return split[1];
    }
  }
  function getTransformUnit(propName) {
    if (stringContains(propName, "translate") || propName === "perspective") {
      return "px";
    }
    if (stringContains(propName, "rotate") || stringContains(propName, "skew")) {
      return "deg";
    }
  }
  function getFunctionValue(val, animatable) {
    if (!is.fnc(val)) {
      return val;
    }
    return val(animatable.target, animatable.id, animatable.total);
  }
  function getAttribute(el, prop) {
    return el.getAttribute(prop);
  }
  function convertPxToUnit(el, value, unit) {
    var valueUnit = getUnit(value);
    if (arrayContains([unit, "deg", "rad", "turn"], valueUnit)) {
      return value;
    }
    var cached = cache.CSS[value + unit];
    if (!is.und(cached)) {
      return cached;
    }
    var baseline = 100;
    var tempEl = document.createElement(el.tagName);
    var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
    parentEl.appendChild(tempEl);
    tempEl.style.position = "absolute";
    tempEl.style.width = baseline + unit;
    var factor = baseline / tempEl.offsetWidth;
    parentEl.removeChild(tempEl);
    var convertedUnit = factor * parseFloat(value);
    cache.CSS[value + unit] = convertedUnit;
    return convertedUnit;
  }
  function getCSSValue(el, prop, unit) {
    if (prop in el.style) {
      var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || "0";
      return unit ? convertPxToUnit(el, value, unit) : value;
    }
  }
  function getAnimationType(el, prop) {
    if (is.dom(el) && !is.inp(el) && (!is.nil(getAttribute(el, prop)) || is.svg(el) && el[prop])) {
      return "attribute";
    }
    if (is.dom(el) && arrayContains(validTransforms, prop)) {
      return "transform";
    }
    if (is.dom(el) && (prop !== "transform" && getCSSValue(el, prop))) {
      return "css";
    }
    if (el[prop] != null) {
      return "object";
    }
  }
  function getElementTransforms(el) {
    if (!is.dom(el)) {
      return;
    }
    var str = el.style.transform || "";
    var reg = /(\w+)\(([^)]*)\)/g;
    var transforms = new Map();
    var m2;
    while (m2 = reg.exec(str)) {
      transforms.set(m2[1], m2[2]);
    }
    return transforms;
  }
  function getTransformValue(el, propName, animatable, unit) {
    var defaultVal = stringContains(propName, "scale") ? 1 : 0 + getTransformUnit(propName);
    var value = getElementTransforms(el).get(propName) || defaultVal;
    if (animatable) {
      animatable.transforms.list.set(propName, value);
      animatable.transforms["last"] = propName;
    }
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
  function getOriginalTargetValue(target, propName, unit, animatable) {
    switch (getAnimationType(target, propName)) {
      case "transform":
        return getTransformValue(target, propName, animatable, unit);
      case "css":
        return getCSSValue(target, propName, unit);
      case "attribute":
        return getAttribute(target, propName);
      default:
        return target[propName] || 0;
    }
  }
  function getRelativeValue(to, from) {
    var operator = /^(\*=|\+=|-=)/.exec(to);
    if (!operator) {
      return to;
    }
    var u2 = getUnit(to) || 0;
    var x = parseFloat(from);
    var y2 = parseFloat(to.replace(operator[0], ""));
    switch (operator[0][0]) {
      case "+":
        return x + y2 + u2;
      case "-":
        return x - y2 + u2;
      case "*":
        return x * y2 + u2;
    }
  }
  function validateValue(val, unit) {
    if (is.col(val)) {
      return colorToRgb(val);
    }
    if (/\s/g.test(val)) {
      return val;
    }
    var originalUnit = getUnit(val);
    var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
    if (unit) {
      return unitLess + unit;
    }
    return unitLess;
  }
  function getDistance(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  }
  function getCircleLength(el) {
    return Math.PI * 2 * getAttribute(el, "r");
  }
  function getRectLength(el) {
    return getAttribute(el, "width") * 2 + getAttribute(el, "height") * 2;
  }
  function getLineLength(el) {
    return getDistance({ x: getAttribute(el, "x1"), y: getAttribute(el, "y1") }, { x: getAttribute(el, "x2"), y: getAttribute(el, "y2") });
  }
  function getPolylineLength(el) {
    var points = el.points;
    var totalLength = 0;
    var previousPos;
    for (var i2 = 0; i2 < points.numberOfItems; i2++) {
      var currentPos = points.getItem(i2);
      if (i2 > 0) {
        totalLength += getDistance(previousPos, currentPos);
      }
      previousPos = currentPos;
    }
    return totalLength;
  }
  function getPolygonLength(el) {
    var points = el.points;
    return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
  }
  function getTotalLength(el) {
    if (el.getTotalLength) {
      return el.getTotalLength();
    }
    switch (el.tagName.toLowerCase()) {
      case "circle":
        return getCircleLength(el);
      case "rect":
        return getRectLength(el);
      case "line":
        return getLineLength(el);
      case "polyline":
        return getPolylineLength(el);
      case "polygon":
        return getPolygonLength(el);
    }
  }
  function setDashoffset(el) {
    var pathLength = getTotalLength(el);
    el.setAttribute("stroke-dasharray", pathLength);
    return pathLength;
  }
  function getParentSvgEl(el) {
    var parentEl = el.parentNode;
    while (is.svg(parentEl)) {
      if (!is.svg(parentEl.parentNode)) {
        break;
      }
      parentEl = parentEl.parentNode;
    }
    return parentEl;
  }
  function getParentSvg(pathEl, svgData) {
    var svg = svgData || {};
    var parentSvgEl = svg.el || getParentSvgEl(pathEl);
    var rect = parentSvgEl.getBoundingClientRect();
    var viewBoxAttr = getAttribute(parentSvgEl, "viewBox");
    var width = rect.width;
    var height = rect.height;
    var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(" ") : [0, 0, width, height]);
    return {
      el: parentSvgEl,
      viewBox,
      x: viewBox[0] / 1,
      y: viewBox[1] / 1,
      w: width,
      h: height,
      vW: viewBox[2],
      vH: viewBox[3]
    };
  }
  function getPath(path, percent) {
    var pathEl = is.str(path) ? selectString(path)[0] : path;
    var p2 = percent || 100;
    return function(property) {
      return {
        property,
        el: pathEl,
        svg: getParentSvg(pathEl),
        totalLength: getTotalLength(pathEl) * (p2 / 100)
      };
    };
  }
  function getPathProgress(path, progress, isPathTargetInsideSVG) {
    function point(offset) {
      if (offset === void 0)
        offset = 0;
      var l2 = progress + offset >= 1 ? progress + offset : 0;
      return path.el.getPointAtLength(l2);
    }
    var svg = getParentSvg(path.el, path.svg);
    var p2 = point();
    var p0 = point(-1);
    var p1 = point(1);
    var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
    var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;
    switch (path.property) {
      case "x":
        return (p2.x - svg.x) * scaleX;
      case "y":
        return (p2.y - svg.y) * scaleY;
      case "angle":
        return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
    }
  }
  function decomposeValue(val, unit) {
    var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;
    var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + "";
    return {
      original: value,
      numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
      strings: is.str(val) || unit ? value.split(rgx) : []
    };
  }
  function parseTargets(targets) {
    var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
    return filterArray(targetsArray, function(item, pos, self2) {
      return self2.indexOf(item) === pos;
    });
  }
  function getAnimatables(targets) {
    var parsed = parseTargets(targets);
    return parsed.map(function(t2, i2) {
      return { target: t2, id: i2, total: parsed.length, transforms: { list: getElementTransforms(t2) } };
    });
  }
  function normalizePropertyTweens(prop, tweenSettings) {
    var settings = cloneObject(tweenSettings);
    if (/^spring/.test(settings.easing)) {
      settings.duration = spring(settings.easing);
    }
    if (is.arr(prop)) {
      var l2 = prop.length;
      var isFromTo = l2 === 2 && !is.obj(prop[0]);
      if (!isFromTo) {
        if (!is.fnc(tweenSettings.duration)) {
          settings.duration = tweenSettings.duration / l2;
        }
      } else {
        prop = { value: prop };
      }
    }
    var propArray = is.arr(prop) ? prop : [prop];
    return propArray.map(function(v, i2) {
      var obj = is.obj(v) && !is.pth(v) ? v : { value: v };
      if (is.und(obj.delay)) {
        obj.delay = !i2 ? tweenSettings.delay : 0;
      }
      if (is.und(obj.endDelay)) {
        obj.endDelay = i2 === propArray.length - 1 ? tweenSettings.endDelay : 0;
      }
      return obj;
    }).map(function(k) {
      return mergeObjects(k, settings);
    });
  }
  function flattenKeyframes(keyframes) {
    var propertyNames = filterArray(flattenArray(keyframes.map(function(key) {
      return Object.keys(key);
    })), function(p2) {
      return is.key(p2);
    }).reduce(function(a2, b2) {
      if (a2.indexOf(b2) < 0) {
        a2.push(b2);
      }
      return a2;
    }, []);
    var properties = {};
    var loop2 = function(i3) {
      var propName = propertyNames[i3];
      properties[propName] = keyframes.map(function(key) {
        var newKey = {};
        for (var p2 in key) {
          if (is.key(p2)) {
            if (p2 == propName) {
              newKey.value = key[p2];
            }
          } else {
            newKey[p2] = key[p2];
          }
        }
        return newKey;
      });
    };
    for (var i2 = 0; i2 < propertyNames.length; i2++)
      loop2(i2);
    return properties;
  }
  function getProperties(tweenSettings, params) {
    var properties = [];
    var keyframes = params.keyframes;
    if (keyframes) {
      params = mergeObjects(flattenKeyframes(keyframes), params);
    }
    for (var p2 in params) {
      if (is.key(p2)) {
        properties.push({
          name: p2,
          tweens: normalizePropertyTweens(params[p2], tweenSettings)
        });
      }
    }
    return properties;
  }
  function normalizeTweenValues(tween, animatable) {
    var t2 = {};
    for (var p2 in tween) {
      var value = getFunctionValue(tween[p2], animatable);
      if (is.arr(value)) {
        value = value.map(function(v) {
          return getFunctionValue(v, animatable);
        });
        if (value.length === 1) {
          value = value[0];
        }
      }
      t2[p2] = value;
    }
    t2.duration = parseFloat(t2.duration);
    t2.delay = parseFloat(t2.delay);
    return t2;
  }
  function normalizeTweens(prop, animatable) {
    var previousTween;
    return prop.tweens.map(function(t2) {
      var tween = normalizeTweenValues(t2, animatable);
      var tweenValue = tween.value;
      var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
      var toUnit = getUnit(to);
      var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
      var previousValue = previousTween ? previousTween.to.original : originalValue;
      var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
      var fromUnit = getUnit(from) || getUnit(originalValue);
      var unit = toUnit || fromUnit;
      if (is.und(to)) {
        to = previousValue;
      }
      tween.from = decomposeValue(from, unit);
      tween.to = decomposeValue(getRelativeValue(to, from), unit);
      tween.start = previousTween ? previousTween.end : 0;
      tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
      tween.easing = parseEasings(tween.easing, tween.duration);
      tween.isPath = is.pth(tweenValue);
      tween.isPathTargetInsideSVG = tween.isPath && is.svg(animatable.target);
      tween.isColor = is.col(tween.from.original);
      if (tween.isColor) {
        tween.round = 1;
      }
      previousTween = tween;
      return tween;
    });
  }
  var setProgressValue = {
    css: function(t2, p2, v) {
      return t2.style[p2] = v;
    },
    attribute: function(t2, p2, v) {
      return t2.setAttribute(p2, v);
    },
    object: function(t2, p2, v) {
      return t2[p2] = v;
    },
    transform: function(t2, p2, v, transforms, manual) {
      transforms.list.set(p2, v);
      if (p2 === transforms.last || manual) {
        var str = "";
        transforms.list.forEach(function(value, prop) {
          str += prop + "(" + value + ") ";
        });
        t2.style.transform = str;
      }
    }
  };
  function setTargetsValue(targets, properties) {
    var animatables = getAnimatables(targets);
    animatables.forEach(function(animatable) {
      for (var property in properties) {
        var value = getFunctionValue(properties[property], animatable);
        var target = animatable.target;
        var valueUnit = getUnit(value);
        var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
        var unit = valueUnit || getUnit(originalValue);
        var to = getRelativeValue(validateValue(value, unit), originalValue);
        var animType = getAnimationType(target, property);
        setProgressValue[animType](target, property, to, animatable.transforms, true);
      }
    });
  }
  function createAnimation(animatable, prop) {
    var animType = getAnimationType(animatable.target, prop.name);
    if (animType) {
      var tweens = normalizeTweens(prop, animatable);
      var lastTween = tweens[tweens.length - 1];
      return {
        type: animType,
        property: prop.name,
        animatable,
        tweens,
        duration: lastTween.end,
        delay: tweens[0].delay,
        endDelay: lastTween.endDelay
      };
    }
  }
  function getAnimations(animatables, properties) {
    return filterArray(flattenArray(animatables.map(function(animatable) {
      return properties.map(function(prop) {
        return createAnimation(animatable, prop);
      });
    })), function(a2) {
      return !is.und(a2);
    });
  }
  function getInstanceTimings(animations, tweenSettings) {
    var animLength = animations.length;
    var getTlOffset = function(anim) {
      return anim.timelineOffset ? anim.timelineOffset : 0;
    };
    var timings = {};
    timings.duration = animLength ? Math.max.apply(Math, animations.map(function(anim) {
      return getTlOffset(anim) + anim.duration;
    })) : tweenSettings.duration;
    timings.delay = animLength ? Math.min.apply(Math, animations.map(function(anim) {
      return getTlOffset(anim) + anim.delay;
    })) : tweenSettings.delay;
    timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function(anim) {
      return getTlOffset(anim) + anim.duration - anim.endDelay;
    })) : tweenSettings.endDelay;
    return timings;
  }
  var instanceID = 0;
  function createNewInstance(params) {
    var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
    var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
    var properties = getProperties(tweenSettings, params);
    var animatables = getAnimatables(params.targets);
    var animations = getAnimations(animatables, properties);
    var timings = getInstanceTimings(animations, tweenSettings);
    var id = instanceID;
    instanceID++;
    return mergeObjects(instanceSettings, {
      id,
      children: [],
      animatables,
      animations,
      duration: timings.duration,
      delay: timings.delay,
      endDelay: timings.endDelay
    });
  }
  var activeInstances = [];
  var engine = function() {
    var raf;
    function play() {
      if (!raf && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0) {
        raf = requestAnimationFrame(step);
      }
    }
    function step(t2) {
      var activeInstancesLength = activeInstances.length;
      var i2 = 0;
      while (i2 < activeInstancesLength) {
        var activeInstance = activeInstances[i2];
        if (!activeInstance.paused) {
          activeInstance.tick(t2);
          i2++;
        } else {
          activeInstances.splice(i2, 1);
          activeInstancesLength--;
        }
      }
      raf = i2 > 0 ? requestAnimationFrame(step) : void 0;
    }
    function handleVisibilityChange() {
      if (!anime.suspendWhenDocumentHidden) {
        return;
      }
      if (isDocumentHidden()) {
        raf = cancelAnimationFrame(raf);
      } else {
        activeInstances.forEach(function(instance) {
          return instance._onDocumentVisibility();
        });
        engine();
      }
    }
    if (typeof document !== "undefined") {
      document.addEventListener("visibilitychange", handleVisibilityChange);
    }
    return play;
  }();
  function isDocumentHidden() {
    return !!document && document.hidden;
  }
  function anime(params) {
    if (params === void 0)
      params = {};
    var startTime = 0, lastTime = 0, now = 0;
    var children, childrenLength = 0;
    var resolve = null;
    function makePromise(instance2) {
      var promise2 = window.Promise && new Promise(function(_resolve) {
        return resolve = _resolve;
      });
      instance2.finished = promise2;
      return promise2;
    }
    var instance = createNewInstance(params);
    var promise = makePromise(instance);
    function toggleInstanceDirection() {
      var direction = instance.direction;
      if (direction !== "alternate") {
        instance.direction = direction !== "normal" ? "normal" : "reverse";
      }
      instance.reversed = !instance.reversed;
      children.forEach(function(child) {
        return child.reversed = instance.reversed;
      });
    }
    function adjustTime(time) {
      return instance.reversed ? instance.duration - time : time;
    }
    function resetTime() {
      startTime = 0;
      lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
    }
    function seekChild(time, child) {
      if (child) {
        child.seek(time - child.timelineOffset);
      }
    }
    function syncInstanceChildren(time) {
      if (!instance.reversePlayback) {
        for (var i2 = 0; i2 < childrenLength; i2++) {
          seekChild(time, children[i2]);
        }
      } else {
        for (var i$1 = childrenLength; i$1--; ) {
          seekChild(time, children[i$1]);
        }
      }
    }
    function setAnimationsProgress(insTime) {
      var i2 = 0;
      var animations = instance.animations;
      var animationsLength = animations.length;
      while (i2 < animationsLength) {
        var anim = animations[i2];
        var animatable = anim.animatable;
        var tweens = anim.tweens;
        var tweenLength = tweens.length - 1;
        var tween = tweens[tweenLength];
        if (tweenLength) {
          tween = filterArray(tweens, function(t2) {
            return insTime < t2.end;
          })[0] || tween;
        }
        var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
        var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
        var strings = tween.to.strings;
        var round = tween.round;
        var numbers = [];
        var toNumbersLength = tween.to.numbers.length;
        var progress = void 0;
        for (var n2 = 0; n2 < toNumbersLength; n2++) {
          var value = void 0;
          var toNumber = tween.to.numbers[n2];
          var fromNumber = tween.from.numbers[n2] || 0;
          if (!tween.isPath) {
            value = fromNumber + eased * (toNumber - fromNumber);
          } else {
            value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
          }
          if (round) {
            if (!(tween.isColor && n2 > 2)) {
              value = Math.round(value * round) / round;
            }
          }
          numbers.push(value);
        }
        var stringsLength = strings.length;
        if (!stringsLength) {
          progress = numbers[0];
        } else {
          progress = strings[0];
          for (var s2 = 0; s2 < stringsLength; s2++) {
            var a2 = strings[s2];
            var b2 = strings[s2 + 1];
            var n$1 = numbers[s2];
            if (!isNaN(n$1)) {
              if (!b2) {
                progress += n$1 + " ";
              } else {
                progress += n$1 + b2;
              }
            }
          }
        }
        setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
        anim.currentValue = progress;
        i2++;
      }
    }
    function setCallback(cb) {
      if (instance[cb] && !instance.passThrough) {
        instance[cb](instance);
      }
    }
    function countIteration() {
      if (instance.remaining && instance.remaining !== true) {
        instance.remaining--;
      }
    }
    function setInstanceProgress(engineTime) {
      var insDuration = instance.duration;
      var insDelay = instance.delay;
      var insEndDelay = insDuration - instance.endDelay;
      var insTime = adjustTime(engineTime);
      instance.progress = minMax(insTime / insDuration * 100, 0, 100);
      instance.reversePlayback = insTime < instance.currentTime;
      if (children) {
        syncInstanceChildren(insTime);
      }
      if (!instance.began && instance.currentTime > 0) {
        instance.began = true;
        setCallback("begin");
      }
      if (!instance.loopBegan && instance.currentTime > 0) {
        instance.loopBegan = true;
        setCallback("loopBegin");
      }
      if (insTime <= insDelay && instance.currentTime !== 0) {
        setAnimationsProgress(0);
      }
      if (insTime >= insEndDelay && instance.currentTime !== insDuration || !insDuration) {
        setAnimationsProgress(insDuration);
      }
      if (insTime > insDelay && insTime < insEndDelay) {
        if (!instance.changeBegan) {
          instance.changeBegan = true;
          instance.changeCompleted = false;
          setCallback("changeBegin");
        }
        setCallback("change");
        setAnimationsProgress(insTime);
      } else {
        if (instance.changeBegan) {
          instance.changeCompleted = true;
          instance.changeBegan = false;
          setCallback("changeComplete");
        }
      }
      instance.currentTime = minMax(insTime, 0, insDuration);
      if (instance.began) {
        setCallback("update");
      }
      if (engineTime >= insDuration) {
        lastTime = 0;
        countIteration();
        if (!instance.remaining) {
          instance.paused = true;
          if (!instance.completed) {
            instance.completed = true;
            setCallback("loopComplete");
            setCallback("complete");
            if (!instance.passThrough && "Promise" in window) {
              resolve();
              promise = makePromise(instance);
            }
          }
        } else {
          startTime = now;
          setCallback("loopComplete");
          instance.loopBegan = false;
          if (instance.direction === "alternate") {
            toggleInstanceDirection();
          }
        }
      }
    }
    instance.reset = function() {
      var direction = instance.direction;
      instance.passThrough = false;
      instance.currentTime = 0;
      instance.progress = 0;
      instance.paused = true;
      instance.began = false;
      instance.loopBegan = false;
      instance.changeBegan = false;
      instance.completed = false;
      instance.changeCompleted = false;
      instance.reversePlayback = false;
      instance.reversed = direction === "reverse";
      instance.remaining = instance.loop;
      children = instance.children;
      childrenLength = children.length;
      for (var i2 = childrenLength; i2--; ) {
        instance.children[i2].reset();
      }
      if (instance.reversed && instance.loop !== true || direction === "alternate" && instance.loop === 1) {
        instance.remaining++;
      }
      setAnimationsProgress(instance.reversed ? instance.duration : 0);
    };
    instance._onDocumentVisibility = resetTime;
    instance.set = function(targets, properties) {
      setTargetsValue(targets, properties);
      return instance;
    };
    instance.tick = function(t2) {
      now = t2;
      if (!startTime) {
        startTime = now;
      }
      setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
    };
    instance.seek = function(time) {
      setInstanceProgress(adjustTime(time));
    };
    instance.pause = function() {
      instance.paused = true;
      resetTime();
    };
    instance.play = function() {
      if (!instance.paused) {
        return;
      }
      if (instance.completed) {
        instance.reset();
      }
      instance.paused = false;
      activeInstances.push(instance);
      resetTime();
      engine();
    };
    instance.reverse = function() {
      toggleInstanceDirection();
      instance.completed = instance.reversed ? false : true;
      resetTime();
    };
    instance.restart = function() {
      instance.reset();
      instance.play();
    };
    instance.remove = function(targets) {
      var targetsArray = parseTargets(targets);
      removeTargetsFromInstance(targetsArray, instance);
    };
    instance.reset();
    if (instance.autoplay) {
      instance.play();
    }
    return instance;
  }
  function removeTargetsFromAnimations(targetsArray, animations) {
    for (var a2 = animations.length; a2--; ) {
      if (arrayContains(targetsArray, animations[a2].animatable.target)) {
        animations.splice(a2, 1);
      }
    }
  }
  function removeTargetsFromInstance(targetsArray, instance) {
    var animations = instance.animations;
    var children = instance.children;
    removeTargetsFromAnimations(targetsArray, animations);
    for (var c2 = children.length; c2--; ) {
      var child = children[c2];
      var childAnimations = child.animations;
      removeTargetsFromAnimations(targetsArray, childAnimations);
      if (!childAnimations.length && !child.children.length) {
        children.splice(c2, 1);
      }
    }
    if (!animations.length && !children.length) {
      instance.pause();
    }
  }
  function removeTargetsFromActiveInstances(targets) {
    var targetsArray = parseTargets(targets);
    for (var i2 = activeInstances.length; i2--; ) {
      var instance = activeInstances[i2];
      removeTargetsFromInstance(targetsArray, instance);
    }
  }
  function stagger(val, params) {
    if (params === void 0)
      params = {};
    var direction = params.direction || "normal";
    var easing = params.easing ? parseEasings(params.easing) : null;
    var grid = params.grid;
    var axis = params.axis;
    var fromIndex = params.from || 0;
    var fromFirst = fromIndex === "first";
    var fromCenter = fromIndex === "center";
    var fromLast = fromIndex === "last";
    var isRange = is.arr(val);
    var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
    var val2 = isRange ? parseFloat(val[1]) : 0;
    var unit = getUnit(isRange ? val[1] : val) || 0;
    var start2 = params.start || 0 + (isRange ? val1 : 0);
    var values = [];
    var maxValue = 0;
    return function(el, i2, t2) {
      if (fromFirst) {
        fromIndex = 0;
      }
      if (fromCenter) {
        fromIndex = (t2 - 1) / 2;
      }
      if (fromLast) {
        fromIndex = t2 - 1;
      }
      if (!values.length) {
        for (var index = 0; index < t2; index++) {
          if (!grid) {
            values.push(Math.abs(fromIndex - index));
          } else {
            var fromX = !fromCenter ? fromIndex % grid[0] : (grid[0] - 1) / 2;
            var fromY = !fromCenter ? Math.floor(fromIndex / grid[0]) : (grid[1] - 1) / 2;
            var toX = index % grid[0];
            var toY = Math.floor(index / grid[0]);
            var distanceX = fromX - toX;
            var distanceY = fromY - toY;
            var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            if (axis === "x") {
              value = -distanceX;
            }
            if (axis === "y") {
              value = -distanceY;
            }
            values.push(value);
          }
          maxValue = Math.max.apply(Math, values);
        }
        if (easing) {
          values = values.map(function(val3) {
            return easing(val3 / maxValue) * maxValue;
          });
        }
        if (direction === "reverse") {
          values = values.map(function(val3) {
            return axis ? val3 < 0 ? val3 * -1 : -val3 : Math.abs(maxValue - val3);
          });
        }
      }
      var spacing = isRange ? (val2 - val1) / maxValue : val1;
      return start2 + spacing * (Math.round(values[i2] * 100) / 100) + unit;
    };
  }
  function timeline(params) {
    if (params === void 0)
      params = {};
    var tl = anime(params);
    tl.duration = 0;
    tl.add = function(instanceParams, timelineOffset) {
      var tlIndex = activeInstances.indexOf(tl);
      var children = tl.children;
      if (tlIndex > -1) {
        activeInstances.splice(tlIndex, 1);
      }
      function passThrough(ins2) {
        ins2.passThrough = true;
      }
      for (var i2 = 0; i2 < children.length; i2++) {
        passThrough(children[i2]);
      }
      var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
      insParams.targets = insParams.targets || params.targets;
      var tlDuration = tl.duration;
      insParams.autoplay = false;
      insParams.direction = tl.direction;
      insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
      passThrough(tl);
      tl.seek(insParams.timelineOffset);
      var ins = anime(insParams);
      passThrough(ins);
      children.push(ins);
      var timings = getInstanceTimings(children, params);
      tl.delay = timings.delay;
      tl.endDelay = timings.endDelay;
      tl.duration = timings.duration;
      tl.seek(0);
      tl.reset();
      if (tl.autoplay) {
        tl.play();
      }
      return tl;
    };
    return tl;
  }
  anime.version = "3.2.1";
  anime.speed = 1;
  anime.suspendWhenDocumentHidden = true;
  anime.running = activeInstances;
  anime.remove = removeTargetsFromActiveInstances;
  anime.get = getOriginalTargetValue;
  anime.set = setTargetsValue;
  anime.convertPx = convertPxToUnit;
  anime.path = getPath;
  anime.setDashoffset = setDashoffset;
  anime.stagger = stagger;
  anime.timeline = timeline;
  anime.easing = parseEasings;
  anime.penner = penner;
  anime.random = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  var anime_es_default = anime;

  // client/emoji/bar/offset/layout.js
  var layout_default2 = class EmojiBarOffsetCounter extends custom_element_default {
    count = 0;
    constructor() {
      super();
      this.insert(...custom_element_default.with(document.createElement("span")).content("+").alias("prefix").classify("self-center text-indigo-100 text-xs"), ...custom_element_default.with(document.createElement("span")).alias("count").classify("self-center text-indigo-100 text-xs").use(([span]) => {
        this.sync("count", (count) => {
          span.textContent = count;
        });
      }));
    }
    show() {
      if (!this.hidden)
        return;
      this.hidden = false;
      anime_es_default({
        targets: this,
        scale: [0, 1],
        opacity: [0, 1]
      });
    }
    hide() {
      if (this.hidden)
        return;
      this.hidden = true;
      anime_es_default({
        targets: this,
        scale: [1, 0],
        opacity: [1, 0]
      });
    }
  }.define("emoji-bar-offset-counter");

  // client/emoji/bar/modal/list/item/layout.js
  var layout_default3 = class EmojiBarModalListItem extends custom_element_default {
    emoji = new EmojiObject();
    constructor(emoji) {
      super();
      this.sync("emoji", emoji);
      this.classify("flex items-center justify-between w-full px-6 py-1 rounded-xl bg-gray-800").insert(new custom_element_default().classify("flex grow self-center space-x-2 w-full pr-2").insert(...custom_element_default.with(document.createElement("img")).classify("w-14 h-14 object-scale-down rounded-xl overflow-hidden self-center mr-2").attribute({ src: emoji.src, alt: emoji.alt }), ...custom_element_default.with(document.createElement("label")).classify("flex self-center space-x-3 w-full pr-2").insert(...custom_element_default.with(document.createElement("input")).alias("name").classify("self-center border border-gray-500 bg-gray-700 focus:bg-gray-900 border w-full border-gray-700 rounded-xl py-1.5 px-3 w-full focus:outline-none focus:border-gray-600").attribute({ type: "text", value: emoji.title }).on("input", (event2) => {
        this.permit("emoji-title-change", { emoji: this.emoji, title: event2.target.value });
        this.sync("emoji");
      }), ...custom_element_default.with(document.createElement("i")).classify("uil-pen w-6 h-6 self-center"))), new custom_element_default().classify("flex self-center space-x-3").insert(...custom_element_default.with(document.createElement("a")).alias("download").attribute("download").attribute({ href: this.emoji.downloadHref }).classify("flex group items-center justify-center bg-indigo-600 hover:bg-white px-4 py-2 rounded-xl select-none cursor-pointer").use(([a2]) => {
        this.sync("emoji", (emoji2) => {
          a2.href = emoji2.downloadHref;
        });
      }).insert(...custom_element_default.with(document.createElement("i")).classify("uil-cloud-download text-white group-hover:text-gray-800"), ...custom_element_default.with(document.createElement("span")).classify("text-white group-hover:text-gray-800").content("Download").classify("ml-2")), ...custom_element_default.with(document.createElement("button")).alias("remove").classify("flex group w-10 bg-gray-700 items-center justify-center rounded-xl cursor-pointer select-none").on("click", () => {
        anime_es_default({
          targets: this,
          opacity: [1, 0],
          height: [this.offsetHeight, 0],
          duration: 100,
          easing: "easeInOutQuad",
          complete: () => {
            if (this.dispatchEvent(new CustomEvent("deselect", { bubbles: true, detail: emoji }))) {
              this.remove();
            }
          }
        });
      }).insert(...custom_element_default.with(document.createElement("i")).classify("uil-times text-gray-300 group-hover:text-white w-6 h-6"))));
    }
  }.define("emoji-bar-modal-list-item");

  // client/emoji/bar/modal/list/layout.js
  var layout_default4 = class EmojiBarModalListLayout extends custom_element_default {
    emojis = [];
    constructor() {
      super();
      this.sync("emojis", (emojis) => {
        this.replace(...emojis.map((emoji) => {
          return this.find((item) => item.emoji.matches(emoji)) || new layout_default3(emoji);
        }));
      });
    }
  }.define("emoji-bar-modal-list");

  // node_modules/client-zip/index.js
  "stream" in Blob.prototype || Object.defineProperty(Blob.prototype, "stream", { value() {
    return new Response(this).body;
  } }), "setBigUint64" in DataView.prototype || Object.defineProperty(DataView.prototype, "setBigUint64", { value(n2, e2, t2) {
    const i2 = Number(0xffffffffn & e2), o2 = Number(e2 >> 32n);
    this.setUint32(n2 + (t2 ? 0 : 4), i2, t2), this.setUint32(n2 + (t2 ? 4 : 0), o2, t2);
  } });
  var n = (n2) => new DataView(new ArrayBuffer(n2));
  var e = (n2) => new Uint8Array(n2.buffer || n2);
  var t = (n2) => new TextEncoder().encode(String(n2));
  var i = (n2) => Math.min(4294967295, Number(n2));
  var o = (n2) => Math.min(65535, Number(n2));
  function f(n2, i2) {
    if (i2 === void 0 || i2 instanceof Date || (i2 = new Date(i2)), n2 instanceof File)
      return { isFile: 1, t: i2 || new Date(n2.lastModified), i: n2.stream() };
    if (n2 instanceof Response)
      return { isFile: 1, t: i2 || new Date(n2.headers.get("Last-Modified") || Date.now()), i: n2.body };
    if (i2 === void 0)
      i2 = new Date();
    else if (isNaN(i2))
      throw new Error("Invalid modification date.");
    if (n2 === void 0)
      return { isFile: 0, t: i2 };
    if (typeof n2 == "string")
      return { isFile: 1, t: i2, i: t(n2) };
    if (n2 instanceof Blob)
      return { isFile: 1, t: i2, i: n2.stream() };
    if (n2 instanceof Uint8Array || n2 instanceof ReadableStream)
      return { isFile: 1, t: i2, i: n2 };
    if (n2 instanceof ArrayBuffer || ArrayBuffer.isView(n2))
      return { isFile: 1, t: i2, i: e(n2) };
    if (Symbol.asyncIterator in n2)
      return { isFile: 1, t: i2, i: r(n2) };
    throw new TypeError("Unsupported input format.");
  }
  function r(n2) {
    const e2 = "next" in n2 ? n2 : n2[Symbol.asyncIterator]();
    return new ReadableStream({ async pull(n3) {
      let t2 = 0;
      for (; n3.desiredSize > t2; ) {
        const i2 = await e2.next();
        if (!i2.value) {
          n3.close();
          break;
        }
        {
          const e3 = s(i2.value);
          n3.enqueue(e3), t2 += e3.byteLength;
        }
      }
    } });
  }
  function s(n2) {
    return typeof n2 == "string" ? t(n2) : n2 instanceof Uint8Array ? n2 : e(n2);
  }
  function a(n2, e2, i2) {
    if (e2 === void 0 || e2 instanceof Uint8Array || (e2 = t(e2)), n2 instanceof File)
      return { o: u(e2 || t(n2.name)), A: BigInt(n2.size) };
    if (n2 instanceof Response) {
      const o2 = n2.headers.get("content-disposition"), f2 = o2 && o2.match(/;\s*filename\*?=["']?(.*?)["']?$/i), r2 = f2 && f2[1] || n2.url && new URL(n2.url).pathname.split("/").findLast(Boolean), s2 = r2 && decodeURIComponent(r2), a2 = i2 || +n2.headers.get("content-length");
      return { o: u(e2 || t(s2)), A: BigInt(a2) };
    }
    return e2 = u(e2, n2 !== void 0 || i2 !== void 0), typeof n2 == "string" ? { o: e2, A: BigInt(t(n2).length) } : n2 instanceof Blob ? { o: e2, A: BigInt(n2.size) } : n2 instanceof ArrayBuffer || ArrayBuffer.isView(n2) ? { o: e2, A: BigInt(n2.byteLength) } : { o: e2, A: A(n2, i2) };
  }
  function A(n2, e2) {
    return e2 > -1 ? BigInt(e2) : n2 ? void 0 : 0n;
  }
  function u(n2, e2 = 1) {
    if (!n2 || n2.every((n3) => n3 === 47))
      throw new Error("The file must have a name.");
    if (e2)
      for (; n2[n2.length - 1] === 47; )
        n2 = n2.subarray(0, -1);
    else
      n2[n2.length - 1] !== 47 && (n2 = new Uint8Array([...n2, 47]));
    return n2;
  }
  var d = new WebAssembly.Instance(new WebAssembly.Module(Uint8Array.from(atob("AGFzbQEAAAABCgJgAABgAn9/AXwDAwIAAQUDAQACBwkCAW0CAAFjAAEIAQAKlQECSQEDfwNAIAEhAEEAIQIDQCAAQQF2IABBAXFBoIbi7X5scyEAIAJBAWoiAkEIRw0ACyABQQJ0IAA2AgAgAUEBaiIBQYACRw0ACwtJAQF/IAFBf3MhAUGAgAQhAkGAgAQgAGohAANAIAFB/wFxIAItAABzQQJ0KAIAIAFBCHZzIQEgAkEBaiICIABJDQALIAFBf3O4Cw"), (n2) => n2.charCodeAt(0))));
  var { c, m } = d.exports;
  var l = e(m).subarray(65536);
  function y(n2, e2 = 0) {
    for (const t2 of function* (n3) {
      for (; n3.length > 65536; )
        yield n3.subarray(0, 65536), n3 = n3.subarray(65536);
      n3.length && (yield n3);
    }(n2))
      l.set(t2), e2 = c(t2.length, e2);
    return e2;
  }
  function B(n2, e2, t2 = 0) {
    const i2 = n2.getSeconds() >> 1 | n2.getMinutes() << 5 | n2.getHours() << 11, o2 = n2.getDate() | n2.getMonth() + 1 << 5 | n2.getFullYear() - 1980 << 9;
    e2.setUint16(t2, i2, 1), e2.setUint16(t2 + 2, o2, 1);
  }
  function w(t2) {
    const i2 = n(30);
    return i2.setUint32(0, 1347093252), i2.setUint32(4, 754976768), B(t2.t, i2, 10), i2.setUint16(26, t2.o.length, 1), e(i2);
  }
  async function* I(n2) {
    let { i: e2 } = n2;
    if ("then" in e2 && (e2 = await e2), e2 instanceof Uint8Array)
      yield e2, n2.u = y(e2, 0), n2.A = BigInt(e2.length);
    else {
      n2.A = 0n;
      const t2 = e2.getReader();
      for (; ; ) {
        const { value: e3, done: i2 } = await t2.read();
        if (i2)
          break;
        n2.u = y(e3, n2.u), n2.A += BigInt(e3.length), yield e3;
      }
    }
  }
  function g(t2, o2) {
    const f2 = n(16 + (o2 ? 8 : 0));
    return f2.setUint32(0, 1347094280), f2.setUint32(4, t2.isFile ? t2.u : 0, 1), o2 ? (f2.setBigUint64(8, t2.A, 1), f2.setBigUint64(16, t2.A, 1)) : (f2.setUint32(8, i(t2.A), 1), f2.setUint32(12, i(t2.A), 1)), e(f2);
  }
  function b(t2, o2, f2 = 0) {
    const r2 = n(46);
    return r2.setUint32(0, 1347092738), r2.setUint32(4, 755182848), r2.setUint16(8, 2048), B(t2.t, r2, 12), r2.setUint32(16, t2.isFile ? t2.u : 0, 1), r2.setUint32(20, i(t2.A), 1), r2.setUint32(24, i(t2.A), 1), r2.setUint16(28, t2.o.length, 1), r2.setUint16(30, f2, 1), r2.setUint16(40, t2.isFile ? 33204 : 16893, 1), r2.setUint32(42, i(o2), 1), e(r2);
  }
  function p(t2, i2, o2) {
    const f2 = n(o2);
    return f2.setUint16(0, 1, 1), f2.setUint16(2, o2 - 4, 1), 16 & o2 && (f2.setBigUint64(4, t2.A, 1), f2.setBigUint64(12, t2.A, 1)), f2.setBigUint64(o2 - 8, i2, 1), e(f2);
  }
  function D(n2) {
    return n2 instanceof File || n2 instanceof Response ? [[n2], [n2]] : [[n2.input, n2.name, n2.size], [n2.input, n2.lastModified]];
  }
  var h = (n2) => function(n3) {
    let e2 = BigInt(22), t2 = 0n, i2 = 0;
    for (const o2 of n3) {
      if (!o2.o)
        throw new Error("Every file must have a non-empty name.");
      if (o2.A === void 0)
        throw new Error(`Missing size for file "${new TextDecoder().decode(o2.o)}".`);
      const n4 = o2.A >= 0xffffffffn, f2 = t2 >= 0xffffffffn;
      t2 += BigInt(46 + o2.o.length + (n4 && 8)) + o2.A, e2 += BigInt(o2.o.length + 46 + (12 * f2 | 28 * n4)), i2 || (i2 = n4);
    }
    return (i2 || t2 >= 0xffffffffn) && (e2 += BigInt(76)), e2 + t2;
  }(function* (n3) {
    for (const e2 of n3)
      yield a(...D(e2)[0]);
  }(n2));
  function F(n2, e2 = {}) {
    const t2 = { "Content-Type": "application/zip", "Content-Disposition": "attachment" };
    return (typeof e2.length == "bigint" || Number.isInteger(e2.length)) && e2.length > 0 && (t2["Content-Length"] = String(e2.length)), e2.metadata && (t2["Content-Length"] = String(h(e2.metadata))), new Response(Q(n2), { headers: t2 });
  }
  function Q(t2) {
    return r(async function* (t3) {
      const f2 = [];
      let r2 = 0n, s2 = 0n, a2 = 0;
      for await (const n2 of t3) {
        yield w(n2), yield n2.o, n2.isFile && (yield* I(n2));
        const e2 = n2.A >= 0xffffffffn, t4 = 12 * (r2 >= 0xffffffffn) | 28 * e2;
        yield g(n2, e2), f2.push(b(n2, r2, t4)), f2.push(n2.o), t4 && f2.push(p(n2, r2, t4)), e2 && (r2 += 8n), s2++, r2 += BigInt(46 + n2.o.length) + n2.A, a2 || (a2 = e2);
      }
      let A2 = 0n;
      for (const n2 of f2)
        yield n2, A2 += BigInt(n2.length);
      if (a2 || r2 >= 0xffffffffn) {
        const t4 = n(76);
        t4.setUint32(0, 1347094022), t4.setBigUint64(4, BigInt(44), 1), t4.setUint32(12, 755182848), t4.setBigUint64(24, s2, 1), t4.setBigUint64(32, s2, 1), t4.setBigUint64(40, A2, 1), t4.setBigUint64(48, r2, 1), t4.setUint32(56, 1347094023), t4.setBigUint64(64, r2 + A2, 1), t4.setUint32(72, 1, 1), yield e(t4);
      }
      const u2 = n(22);
      u2.setUint32(0, 1347093766), u2.setUint16(8, o(s2), 1), u2.setUint16(10, o(s2), 1), u2.setUint32(12, i(A2), 1), u2.setUint32(16, i(r2), 1), yield e(u2);
    }(async function* (n2) {
      for await (const e2 of n2) {
        const [n3, t3] = D(e2);
        yield Object.assign(f(...t3), a(...n3));
      }
    }(t2)));
  }

  // client/emoji/download-manager.js
  var EmojiDownloadManager = class extends EventTarget {
    downloading = false;
    async zip(emojis) {
      this.downloading = true;
      this.dispatchEvent(new CustomEvent("sync"));
      const inputs = [];
      for await (const emoji of emojis) {
        const response = await fetch(emoji.src);
        const blob = await response.blob();
        inputs.push({
          name: emoji.givenFileName,
          input: blob
        });
      }
      const zipBlob = await F(inputs).blob();
      const blobUrl = window.URL.createObjectURL(zipBlob);
      const a2 = document.createElement("a");
      a2.setAttribute("download", "");
      a2.setAttribute("hidden", "");
      a2.href = blobUrl;
      a2.download = "emojis.zip";
      a2.click();
      window.URL.revokeObjectURL(blobUrl);
      a2.remove();
      this.downloading = false;
      this.dispatchEvent(new CustomEvent("sync"));
    }
  };

  // client/emoji/bar/modal/layout.js
  var layout_default5 = class EmojiBarModalLayout extends custom_element_default {
    emojis = [];
    downloadManager = new EmojiDownloadManager();
    constructor() {
      super();
      this.sync("download", this.downloadManager);
      this.downloadManager.addEventListener("sync", () => {
        this.sync("download", this.downloadManager);
      });
      this.on("emoji-title-change", (event2) => {
        const { emoji, title } = event2.detail;
        emoji.title = title;
        this.sync("emojis");
      });
      this.insert(new custom_element_default().classify("flex flex-col overflow-y-auto pb-8 w-full max-w-4xl mx-auto bg-gray-800 rounded-xl border border-gray-700").insert(...custom_element_default.with(document.createElement("header")).classify("flex px-6 py-4 pb-3").insert(...custom_element_default.with(document.createElement("h1")).content("Download").classify("text-xl text-gray-300 font-medium self-center"), new custom_element_default().classify("flex space-x-2 ml-auto").insert(...custom_element_default.with(document.createElement("button")).attribute("download").alias("download-all").classify("flex group space-x-1 bg-indigo-600 text-gray-200 rounded-xl py-2 px-4 cursor-pointer select-none hover:bg-white duration-100 active:scale-[0.99] transition-all").on("click", () => {
        this.downloadManager.zip(this.emojis);
      }).insert(...custom_element_default.with(document.createElement("span")).content("Download All").classify("group-hover:text-gray-800 pr-1"), ...custom_element_default.with(document.createElement("i")).classify("uil-cloud-download group-hover:text-gray-800").use(([i2]) => {
        this.sync("download", (manager) => {
          if (manager.downloading) {
            i2.classList.add("hidden");
          } else {
            i2.classList.remove("hidden");
          }
        });
      }), ...custom_element_default.with(document.createElement("loading-spinner")).classify("w-4 h-4 self-center").use(([i2]) => {
        this.sync("download", (manager) => {
          if (manager.downloading) {
            i2.classList.remove("hidden");
          } else {
            i2.classList.add("hidden");
          }
        });
      })), ...custom_element_default.with(document.createElement("button")).alias("clear").classify("flex group space-x-1 bg-gray-700 text-gray-200 rounded-xl py-2 px-4 cursor-pointer select-none hover:bg-white duration-100 active:scale-[0.99] transition-all").on("click", () => {
        this.handle("handleDeselectAll");
      }).insert(...custom_element_default.with(document.createElement("span")).content("Clear All").classify("group-hover:text-gray-800 pr-1"), ...custom_element_default.with(document.createElement("i")).classify("uil-trash group-hover:text-gray-800")))), new layout_default4().use(([list]) => {
        this.sync("emojis", (emojis) => {
          list.sync("emojis", emojis);
        });
      })));
    }
    setShown() {
      if (this.hasAttribute("show"))
        return;
      anime_es_default.remove(this);
      this.removeAttribute("hide");
      this.setAttribute("show", "");
      this.animation = anime_es_default({
        targets: this,
        opacity: [0, 1],
        translateY: ["100%", "-80px"],
        complete: () => {
          if (!this.hasAttribute("hide")) {
            this.setAttribute("show", "");
          }
        }
      });
    }
    setHidden() {
      anime_es_default.remove(this);
      this.removeAttribute("show");
      this.animation = anime_es_default({
        targets: this,
        opacity: [1, 0],
        translateY: [0, "110%"],
        complete: () => {
          if (!this.hasAttribute("show")) {
            this.setAttribute("hide", "");
          }
        }
      });
    }
  }.define("emoji-bar-modal");

  // client/emoji/bar/preview/layout.js
  var layout_default6 = class EmojiBarPreview extends custom_element_default {
    animation = null;
    image = this.select("img");
    emoji = null;
    constructor(emoji) {
      super();
      this.sync("emoji", emoji).classify("flex rounded-xl overflow-hidden box-content outline outline-1 outline-indigo-400").replace(...custom_element_default.with(document.createElement("img")).assign({ src: emoji.src, alt: emoji.alt }).classify("flex self-center object-scale-down w-full h-full"));
      this.delay = true;
      setTimeout(() => {
        this.delay = false;
      }, 1e3);
    }
    show(index) {
      anime_es_default.remove(this);
      this.removeAttribute("pending-removal");
      this.animation = anime_es_default({
        targets: this,
        width: [0, 38],
        margin: [0, 4],
        scale: [0, 1],
        opacity: [0, 1],
        delay: this.delay ? index * 50 : 0
      });
    }
    hide(index) {
      anime_es_default.remove(this);
      this.setAttribute("pending-removal", "");
      this.animation = anime_es_default({
        targets: this,
        width: [38, 0],
        margin: [4, 0],
        scale: [1, 0],
        opacity: [1, 0],
        delay: this.delay ? index * 50 : 0,
        complete: () => {
          if (this.hasAttribute("pending-removal")) {
            this.parentNode?.removeChild(this);
          }
        }
      });
    }
  }.define("emoji-bar-preview");

  // client/emoji/bar/layout.js
  var layout_default7 = class EmojiBarLayout extends custom_element_default {
    emojis = [];
    maxPreviews = 5;
    constructor(emojiList) {
      super();
      this.sync("emojis", (emojis) => {
        if (emojis.length === 0) {
          this.hide();
          return;
        } else {
          this.show();
        }
        this.select(layout_default5).sync("emojis", emojis);
      });
      this.insert(new custom_element_default().alias("bar").on("click", () => this.toggleAttribute("open")).classify("flex z-20 h-16 bg-indigo-600 border border-indigo-500 py-2 px-4 rounded-xl w-full select-none cursor-pointer space-x-2 scale-100 duration-100 active:scale-[0.99] transition-all").insert(new custom_element_default().alias("counter").classify("flex self-center").insert(...custom_element_default.with(document.createElement("span")).alias("count").classify("self-center text-3xl font-medium").use((e2) => {
        this.sync("emojis", (emojis) => {
          e2.content(emojis.length);
        });
      }), ...custom_element_default.with(document.createElement("span")).alias("suffix").classify("self-center pl-2 font-medium").use((e2) => {
        this.sync("emojis", (emojis) => {
          if (emojis.length === 1) {
            e2.content("EMOJI");
          } else {
            e2.content("EMOJIS");
          }
        });
      })), new custom_element_default().alias("previews-and-offset").classify("flex grow overflow-hidden").use((proxy) => {
        const [container] = proxy;
        proxy.insert(new custom_element_default().alias("previews").classify("flex").use(([previews]) => {
          this.sync("emojis", (emojis) => {
            this.maxPreviews = Math.floor(container.offsetWidth / 51);
            previews.replace(...emojis.slice(0, this.maxPreviews).map((emoji) => {
              return previews.find((preview) => preview.emoji.matches(emoji)) || new layout_default6(emoji);
            }));
          });
          window.addEventListener("resize", () => {
            this.sync("emojis");
          });
        }), new layout_default2().alias("offset").classify("flex ml-1 self-center justify-center w-8 h-8 bg-indigo-500 border border-indigo-400 rounded-3xl").use(([offset]) => {
          this.sync("emojis", (emojis) => {
            const count = emojis.length - this.maxPreviews;
            if (count > 0) {
              offset.show();
            } else {
              offset.hide();
            }
            offset.sync("count", count);
          });
        }));
      }), new custom_element_default().classify("flex").insert(...custom_element_default.with(document.createElement("i")).alias("arrow").classify("uil-arrow-up flex self-center bg-white w-10 h-10 text-center p-2 rounded-xl text-gray-800 text-2xl [[open]_&]:-rotate-180 transition-all"))), new layout_default5(this).attribute("hide").classify("flex absolute [&[hide]]:hidden mx-auto left-0 right-0 bottom-0 w-full h-[60vh] z-50 !m-0").use(([modal]) => {
        this.sync("emojis", (emojis) => {
          modal.sync("emojis", emojis);
        });
        this.attribute("open", ({ open }) => {
          if (open) {
            modal.setShown();
          } else {
            modal.setHidden();
          }
        });
      }));
      this.afterEnd(new custom_element_default().alias("backdrop").on("click", () => {
        this.removeAttribute("open");
      }).use(([backdrop]) => {
        this.attribute(({ open }) => {
          backdrop.attribute({ show: !!open || null });
        });
      }).classify("fixed w-full h-full z-0 inset-0 bg-black bg-opacity-50 hidden opacity-0 [&[show]]:!flex [&[show]]:!opacity-100 transition-all"));
    }
    show() {
      if (this.hasAttribute("show"))
        return;
      anime_es_default.remove(this);
      this.removeAttribute("hide");
      this.setAttribute("show", "");
      this.animation = anime_es_default({
        targets: this,
        opacity: [0, 1],
        translateY: [100, 0],
        complete: () => {
          if (!this.hasAttribute("hide")) {
            this.setAttribute("show", "");
          }
        }
      });
    }
    hide() {
      anime_es_default.remove(this);
      this.removeAttribute("show");
      if (this.hasAttribute("open")) {
        this.removeAttribute("open");
      }
      this.animation = anime_es_default({
        targets: this,
        opacity: [1, 0],
        translateY: [0, 100],
        complete: () => {
          if (!this.hasAttribute("show")) {
            this.setAttribute("hide", "");
          }
        }
      });
    }
  }.define("emoji-bar");

  // client/emoji/card/layout.js
  var import_freezeframe = __toModule(require_freezeframe_min());
  var scrollListeners = [];
  window.addEventListener("scroll", (event2) => {
    scrollListeners.forEach((listener) => listener(event2));
  });
  var layout_default8 = class EmojiListCardLayout extends custom_element_default {
    emoji = new EmojiObject();
    gifPlaying = false;
    onScreen = false;
    get image() {
      return this.querySelector(".emoji-card-image");
    }
    constructor(emoji) {
      super();
      if (this.hasAttribute("server-provided-emoji")) {
        const serverProvidedEmojis = JSON.parse(document.getElementById("server-provided-emojis").textContent);
        const emoji2 = serverProvidedEmojis.find((emoji3) => {
          return emoji3.id.toString() === this.getAttribute("emoji-id");
        });
        if (emoji2) {
          this.emoji = new EmojiObject(emoji2);
        }
      }
      if (emoji) {
        if (emoji instanceof EmojiObject) {
          this.emoji = emoji;
          this.setAttribute("emoji-id", this.emoji.id);
          this.setAttribute("from-0-scale", "");
          this.classify("flex group [&[selected]]:bg-indigo-600 [&[selected]]:border-indigo-400 hover:bg-white transition-all my-8 self-center cursor-pointer select-none flex-col rounded-xl w-28 h-28 bg-gray-700 border border-gray-600 justify-center transition-all duration-[1.5s] ease-[cubic-bezier(0,.99,.05,.83)] hover:scale-150");
          this.dataset.class = "scale-[1.2]";
          this.replace(...custom_element_default.with(document.createElement("img")).classify("emoji-card-image -- flex transition-all mx-auto h-12 object-scale-down").attribute({
            src: this.emoji.src,
            alt: this.emoji.alt,
            draggable: "false"
          }).on("error", () => {
            this.remove();
          }), ...custom_element_default.with(document.createElement("span")).classify("emoji-card-title -- bg-transparent group-hover:border-gray-200 group-hover:text-gray-800 [[selected]_&]:!border-indigo-400/50 [[selected]_&]:!text-white border border-gray-600 text-gray-300 rounded-xl py-1 px-2 mx-auto text-sm transition-all duration-[1.5s] ease-[cubic-bezier(0,.99,.05,.83)]").content(`:${this.emoji.title.substring(0, 8)}:`));
        } else {
          throw new Error("EmojiListCardLayout must be initialized with an EmojiObject");
        }
      }
    }
    connectedCallback() {
      this.on("click", () => {
        if (this.isMobile()) {
          window.location.href = this.emoji.src;
          return;
        }
        if (event.ctrlKey || event.metaKey) {
          if (event_target_default.isStaff) {
            window.open(`/backend/admin/emoji/emoji/${this.emoji.id}/change/`, "_blank");
            return;
          }
        }
        if (this.hasAttribute("selected")) {
          if (this.dispatchEvent(new CustomEvent("deselect"))) {
            this.removeAttribute("selected");
          }
        } else {
          if (this.dispatchEvent(new CustomEvent("select"))) {
            this.setAttribute("selected", "");
          }
        }
      });
      scrollListeners.push(this.handleVisibility.bind(this));
    }
    isMobile() {
      return window.innerWidth <= 768;
    }
    setupFreezeframe() {
      if (this.hasAttribute("auto-play")) {
        setTimeout(() => {
          this.freezeframe.start();
        }, 500);
      }
      this.freezeframe.on("start", () => {
        this.gifPlaying = true;
      });
      this.freezeframe.on("stop", () => {
        this.gifPlaying = false;
      });
    }
    handleVisibility(event2) {
      const rect = this.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
      if (isVisible) {
        if (!this.gifPlaying) {
          this.onScreen = true;
          if (this.freezeframe)
            this.freezeframe.start();
        }
      } else {
        this.onScreen = false;
        if (this.freezeframe)
          this.freezeframe.stop();
      }
    }
  }.define("emoji-card");

  // client/emoji/card/list/selection/map.js
  var EmojiCardListSelectionMap = class extends Map {
    load() {
      const str = localStorage.getItem("_x_emoji_downloads");
      if (str) {
        const obj = JSON.parse(str);
        for (const [key, value] of Object.entries(obj)) {
          this.set(key, value);
        }
      }
    }
    select(emoji) {
      if (emoji && emoji instanceof EmojiObject) {
        this.set(emoji.id, emoji.data());
        this.save();
      } else {
        throw new Error("EmojiListSelectionMap.select() requires an EmojiObject.");
      }
    }
    deselect(emoji) {
      if (emoji && emoji instanceof EmojiObject) {
        this.delete(emoji.id.toString());
        this.save();
      } else {
        throw new Error("EmojiListSelectionMap.deselect() requires an EmojiObject.");
      }
    }
    set(id, data2) {
      super.set(id.toString(), {
        ts: Date.now(),
        ...data2
      });
    }
    has(emoji) {
      if (emoji && emoji instanceof EmojiObject) {
        return super.has(emoji.id.toString());
      } else {
        throw new Error("EmojiListSelectionMap.has() requires an EmojiObject.");
      }
    }
    save() {
      const obj = {};
      for (const [key, value] of this) {
        obj[key] = value;
      }
      localStorage.setItem("_x_emoji_downloads", JSON.stringify(obj));
    }
    toArray() {
      return [...this.values()];
    }
    toSortedByTsArray() {
      return this.toArray().sort((a2, b2) => {
        return b2.ts - a2.ts;
      });
    }
    toSortedByTsEmojiObjectArray() {
      return this.toSortedByTsArray().map((item) => {
        return new EmojiObject(item);
      });
    }
  };

  // client/add/server/banner/ad/layout.js
  var layout_default9 = class AddServerBannerAd extends custom_element_default {
    connectedCallback() {
      const backgroundUrl = getComputedStyle(this).getPropertyValue("--background-url");
      this.classify("w-full h-full rounded-xl bg-white hover:scale-105 transition-all transform cursor-pointer select-none");
      this.replace(...custom_element_default.with(document.createElement("a")).classify("relative flex my-1 group flex-col overflow-hidden sm:flex-row relative flex-grow p-5").assign({ href: "/add", target: "_blank" }).insert(new custom_element_default().classify("self-center flex-col").insert(...custom_element_default.with(document.createElement("h1")).content("Time to improve your Discord Server Growth!").classify("font-medium text-xl text-gray-800"), ...custom_element_default.with(document.createElement("section")).classify("flex flex-col py-2").insert(...custom_element_default.with(document.createElement("p")).content("Add your Discord server to our list for FREE").classify("text-gray-700"), ...custom_element_default.with(document.createElement("p")).content(`(Over 1 Million pageviews in ${new Date().toLocaleString("default", { month: "long" })} ${new Date().getFullYear()})`).classify("text-gray-600 text-xs"))), new custom_element_default().classify("bg-indigo-500 ml-auto self-center text-white rounded-xl px-3 py-2.5 text-center").content("Add Your Server"), ...custom_element_default.with(document.createElement("img")).classify("absolute right-0 h-full bottom-0 h-full object-cover -z-10").attribute({ "src": backgroundUrl })));
    }
  }.define("add-server-banner-ad");

  // client/emoji/card/list/layout.js
  var layout_default10 = class EmojiCardListLayout extends custom_element_default {
    selection = new EmojiCardListSelectionMap();
    searchQuery = "";
    currentPage = 1;
    hasNextPage = null;
    serverListAd = new layout_default9().classify("w-full basis-full col-span-full");
    insertAdInterval = 3;
    connectedCallback() {
      this.selection.load();
      this.hydrateEmojiListCards();
      if (this.hasAttribute("auto-load")) {
        console.log("Loading more emojis...");
        let nextPageButton = document.querySelector("#next-page-button");
        let callback = (entries) => {
          if (!this.loadingMoreEmojis) {
            this.loadMoreEmojis();
            if (this.currentPage % this.insertAdInterval === 0) {
              this.beforeEnd(this.serverListAd);
            }
          }
        };
        let observer2 = new IntersectionObserver(callback, {
          root: null,
          rootMargin: "0px",
          threshold: 1
        });
        observer2.observe(nextPageButton);
        document.querySelectorAll("#next-page-button").forEach((button) => {
          button.textContent = "Loading";
        });
      }
    }
    hydrateEmojiListCards() {
      const emojiListCards = this.querySelectorAll("emoji-card:not([hydrated])");
      emojiListCards.forEach((emojiListCard, index) => {
        if (emojiListCard.hasAttribute("from-0-scale"))
          emojiListCard.classList.add("scale-0");
        setTimeout(() => {
          if (emojiListCard.hasAttribute("from-0-scale")) {
            emojiListCard.classList.remove("scale-0");
          }
          if (this.selection.has(emojiListCard.emoji)) {
            emojiListCard.setAttribute("selected", "");
          } else {
            emojiListCard.removeAttribute("selected");
          }
          emojiListCard.addEventListener("select", () => {
            this.selection.select(emojiListCard.emoji);
            this.sync("selection");
          });
          emojiListCard.addEventListener("deselect", () => {
            this.selection.deselect(emojiListCard.emoji);
            this.sync("selection");
          });
          emojiListCard.classList.add(...emojiListCard.dataset.class.split(" "));
          emojiListCard.setAttribute("hydrated", "");
          setTimeout(() => {
            emojiListCard.classList.remove(...emojiListCard.dataset.class.split(" "));
          }, 300);
        }, index * 30);
      });
    }
    deselectAll() {
      this.selection.clear();
      this.selection.save();
      this.sync("selection");
      this.deselectAllCards();
    }
    deselectAllCards() {
      const emojiListCards = this.querySelectorAll("emoji-card");
      const duration = 600;
      emojiListCards.forEach((emojiListCard, i2) => {
        setTimeout(() => {
          emojiListCard.removeAttribute("selected");
        }, i2 * duration / emojiListCards.length);
      });
    }
    deselectEmoji(emoji) {
      this.selection.deselect(emoji);
      this.sync("selection");
      this.deselectCard(emoji);
    }
    deselectCard(emoji) {
      this.querySelector('emoji-card[emoji-id="' + emoji.id + '"]')?.removeAttribute("selected");
    }
    isNearBottom({ offset = 100 } = {}) {
      const bottom = document.documentElement.scrollHeight - window.innerHeight - window.scrollY;
      return bottom < offset;
    }
    async loadMoreEmojis() {
      if (!this.loadingMoreEmojis) {
        this.loadingMoreEmojis = true;
        this.currentPage++;
        const response = await fetchEmojis({
          limit: 100,
          q: this.searchQuery,
          page: this.currentPage
        });
        response.data.forEach((emoji) => {
          this.appendChild(new layout_default8(new EmojiObject(emoji)));
        });
        this.hasPreviousPage = response.meta.has_prev;
        this.hasNextPage = !!response.meta.has_next;
        if (!this.hasNextPage) {
          document.getElementById("next-page-button").textContent = "You've reached the end!";
        }
        this.loadingMoreEmojis = false;
        this.hydrateEmojiListCards();
      }
    }
  }.define("emoji-card-list");

  // client/emoji/card/list/view/layout.js
  var layout_default11 = class EmojiListViewLayout extends custom_element_default {
    currentPage = 1;
    loadingMoreEmojis = false;
    hasPreviousPage = false;
    hasNextPage = true;
    get queryParamPage() {
      const query = new URLSearchParams(window.location.search);
      const page = query.get("page");
      return page && parseInt(page) || 1;
    }
    connectedCallback() {
      console.log("[Discadia] Emoji List View connected.");
      this.select(layout_default10).sync("searchQuery", this.getSearchQuery()).sync("selection", (selection) => {
        const emojis = selection.toSortedByTsEmojiObjectArray();
        this.select(layout_default7).sync("emojis", emojis);
      });
      this.on("deselect", (event2) => {
        if (event2.target instanceof layout_default3) {
          const emoji = event2.target.emoji;
          this.select(layout_default10).use(([list]) => {
            list.deselectEmoji(emoji);
          });
        }
      });
    }
    handleDeselectAll() {
      this.select(layout_default10).use(([emojiCardListLayout]) => {
        emojiCardListLayout.deselectAll();
      });
    }
    selectServerProvidedEmojis() {
      const emojis = this.querySelectorAll("emoji-card");
      emojis.forEach((emoji) => {
        if (emoji.hasAttribute("server-provided")) {
          emoji.select();
        }
      });
    }
    getSearchQuery() {
      return document.getElementById("emoji-list-search-input").value;
    }
  }.define("emoji-list-view");

  // client/auth/current/user/username-element.js
  var CurrentUserUsernameElement = class extends HTMLElement {
    connectedCallback() {
      event_target_default.addEventListener("load", () => {
        if (event_target_default.isLoggedIn) {
          this.innerText = event_target_default.data.username;
        }
      });
    }
  };
  customElements.define("current-user-username", CurrentUserUsernameElement);

  // client/auth/current/user/avatar-element.js
  var CurrentUserAvatarElement = class extends HTMLElement {
    get staticAvatarUrl() {
      return this.getAttribute("static-avatar-url");
    }
    connectedCallback() {
      event_target_default.addEventListener("load", () => {
        if (event_target_default.isLoggedIn) {
          const avatarUrl = event_target_default.data.avatar_url;
          this.innerHTML = `<img class="rounded-full h-6 w-6" width="20" height="20" src="${avatarUrl}" onerror="this.src='${this.staticAvatarUrl}'" alt="Discord Avatar">`;
        }
      });
    }
  };
  customElements.define("current-user-avatar", CurrentUserAvatarElement);

  // client/layout.js
  var layout_default12 = class DiscadiaClientLayout extends custom_element_default {
    connectedCallback() {
      console.log("%cDiscadia: client connected.", "background: #4f46e5; color: #fff; padding: 5px; border-radius: 5px;");
      this.setAttribute("user-loading", "");
      event_target_default.addEventListener("load", () => {
        this.removeAttribute("user-loading");
        this.setAttribute("user-loaded", "");
        if (event_target_default.isLoggedIn) {
          this.setAttribute("user-logged-in", "");
        } else {
          this.setAttribute("user-logged-out", "");
        }
        if (event_target_default.isStaff) {
          this.setAttribute("user-staff", "");
        }
        if (event_target_default.isSuperUser) {
          this.setAttribute("user-superuser", "");
        }
      });
      window.Layout = custom_element_default;
    }
  }.define("discadia-client");

  // discordsite/modules/ui/MainMenuElement.js
  var MainMenuElement = class extends HTMLElement {
    connectedCallback() {
      this.getScrollContainer()?.addEventListener("scroll", this.#onDocumentScroll.bind(this));
    }
    getScrollContainer() {
      return document.querySelector(this.getAttribute("scroll-container"));
    }
    lastScrollTop = 0;
    #onDocumentScroll(event2) {
      const scrollContainer = this.getScrollContainer();
      const scrollTop = window.pageYOffset || scrollContainer.scrollTop;
      const isScrollingDown = scrollTop > this.lastScrollTop;
      if (isScrollingDown && scrollTop > 100) {
        this.setScrollContainerDirection("down");
      } else {
        this.setScrollContainerDirection("up");
      }
      this.lastScrollTop = scrollTop;
    }
    setScrollContainerDirection(direction) {
      this.setAttribute("scroll-direction", direction);
    }
  };
  customElements.define("main-menu", MainMenuElement);

  // discordsite/modules/auth/User.js
  var User = class {
    constructor(data2) {
      this.data = data2;
    }
    isAuthenticated() {
      return this.data?.auth;
    }
    isStaff() {
      return this.data?.isStaff;
    }
    isSuperuser() {
      return this.data?.isSuperuser;
    }
    isVerified() {
      return this.data?.verified;
    }
    getUserId() {
      return this.data?.id;
    }
    getDiscordId() {
      return this.data?.discordId;
    }
    getUsername() {
      return this.data?.username;
    }
    getAvatarUrl() {
      return this.data?.avatarUrl;
    }
  };

  // discordsite/modules/api/User.js
  var UserAPI = class {
    static async getCurrentUser() {
      return fetch("/api/user").then((r2) => r2.json()).then((data2) => new User(data2));
    }
  };

  // discordsite/modules/ui/UserMenuElement.js
  var UserMenuElement = class extends HTMLElement {
    async connectedCallback() {
      this.addEventListener("click", this.toggleMenu.bind(this));
      window.addEventListener("click", this.#onWindowClick.bind(this));
      const user = await UserAPI.getCurrentUser();
      this.setUsername(user.getUsername());
      this.setAvatarUrl(user.getAvatarUrl());
      this.toggleAttribute("authenticated", user.isAuthenticated());
    }
    #onWindowClick(event2) {
      if (!this.contains(event2.target)) {
        this.removeAttribute("open");
      }
    }
    toggleMenu() {
      this.toggleAttribute("open");
    }
    setUsername(username) {
      this.querySelector('[name="username"]').textContent = username;
    }
    setAvatarUrl(src) {
      this.querySelector('[name="avatar"]').src = src;
    }
  };
  customElements.define("user-menu", UserMenuElement);
})();
/**
* @author JeremyJaydan <jeremy@parmenter.io>
* @license MIT
* @desc Simple iteration script https://github.com/JeremyJaydan/for-next
*/
