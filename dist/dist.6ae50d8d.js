// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scripts/dist/index.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) {
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "Focm": [function (require, module, exports) {
    function e(t) {
      return (e = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(t);
    }

    function t(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function r(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    function n(e, t, n) {
      return t && r(e.prototype, t), n && r(e, n), e;
    }

    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && o(e, t);
    }

    function o(e, t) {
      return (o = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function c(e) {
      var t = u();
      return function () {
        var r,
            n = s(e);

        if (t) {
          var a = s(this).constructor;
          r = Reflect.construct(n, arguments, a);
        } else r = n.apply(this, arguments);

        return l(this, r);
      };
    }

    function l(t, r) {
      return !r || "object" !== e(r) && "function" != typeof r ? i(t) : r;
    }

    function i(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }

    function u() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }

    function s(e) {
      return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    function f() {
      for (var e = document.getElementsByClassName("cell"), t = 0; t < 6; t++) {
        for (var r = 0; r < 7; r++) {
          e[r + 7 * t].classList.add("Col" + (r + 1).toString());
        }
      }
    }

    var y = function (e) {
      a(o, React.Component);
      var r = c(o);

      function o(e) {
        var n;
        return t(this, o), (n = r.call(this, e)).state = {
          player1: 1,
          player2: 2,
          currentPlayer: null,
          board: [],
          gameOver: !1,
          message: "",
          history: [{
            squares: Array(42).fill(null)
          }]
        }, n.play = n.play.bind(i(n)), n;
      }

      return n(o, [{
        key: "initBoard",
        value: function value() {
          for (var e = [], t = 0; t < 6; t++) {
            for (var r = [], n = 0; n < 7; n++) {
              r.push(null);
            }

            e.push(r);
          }

          this.setState({
            board: e,
            currentPlayer: this.state.player1,
            gameOver: !1,
            message: ""
          });
        }
      }, {
        key: "togglePlayer",
        value: function value() {
          return this.state.currentPlayer === this.state.player1 ? this.state.player2 : this.state.player1;
        }
      }, {
        key: "play",
        value: function value(e) {
          if (this.state.gameOver) this.setState({
            message: "Game over. Please start a new game."
          });else {
            for (var t = this.state.board, r = 5; r >= 0; r--) {
              if (!t[r][e]) {
                t[r][e] = this.state.currentPlayer, console.log("row: ", r + 1, ", col: ", e + 1);
                break;
              }
            }

            var n = this.checkAll(t);
            n === this.state.player1 ? this.setState({
              board: t,
              gameOver: !0,
              message: "Player 1 (red) wins!"
            }) : n === this.state.player2 ? this.setState({
              board: t,
              gameOver: !0,
              message: "Player 2 (yellow) wins!"
            }) : "draw" === n ? this.setState({
              board: t,
              gameOver: !0,
              message: "Draw game."
            }) : this.setState({
              board: t,
              currentPlayer: this.togglePlayer()
            });
          }
        }
      }, {
        key: "checkVertical",
        value: function value(e) {
          for (var t = 3; t < 6; t++) {
            for (var r = 0; r < 7; r++) {
              if (e[t][r] && e[t][r] === e[t - 1][r] && e[t][r] === e[t - 2][r] && e[t][r] === e[t - 3][r]) return e[t][r];
            }
          }
        }
      }, {
        key: "checkHorizontal",
        value: function value(e) {
          for (var t = 0; t < 6; t++) {
            for (var r = 0; r < 4; r++) {
              if (e[t][r] && e[t][r] === e[t][r + 1] && e[t][r] === e[t][r + 2] && e[t][r] === e[t][r + 3]) return e[t][r];
            }
          }
        }
      }, {
        key: "checkDiagonalRight",
        value: function value(e) {
          for (var t = 3; t < 6; t++) {
            for (var r = 0; r < 4; r++) {
              if (e[t][r] && e[t][r] === e[t - 1][r + 1] && e[t][r] === e[t - 2][r + 2] && e[t][r] === e[t - 3][r + 3]) return e[t][r];
            }
          }
        }
      }, {
        key: "checkDiagonalLeft",
        value: function value(e) {
          for (var t = 3; t < 6; t++) {
            for (var r = 3; r < 7; r++) {
              if (e[t][r] && e[t][r] === e[t - 1][r - 1] && e[t][r] === e[t - 2][r - 2] && e[t][r] === e[t - 3][r - 3]) return e[t][r];
            }
          }
        }
      }, {
        key: "checkDraw",
        value: function value(e) {
          for (var t = 0; t < 6; t++) {
            for (var r = 0; r < 7; r++) {
              if (null === e[t][r]) return null;
            }
          }

          return "draw";
        }
      }, {
        key: "checkAll",
        value: function value(e) {
          return this.checkVertical(e) || this.checkDiagonalRight(e) || this.checkDiagonalLeft(e) || this.checkHorizontal(e) || this.checkDraw(e);
        }
      }, {
        key: "componentWillMount",
        value: function value() {
          this.initBoard();
        }
      }, {
        key: "render",
        value: function value() {
          var e = this,
              t = this.state.history;
          return t = t.concat([{
            squares: this.state.board
          }]), console.log(t), React.createElement("div", null, React.createElement("div", {
            className: "button",
            onClick: function onClick() {
              e.initBoard();
            }
          }, "New Game"), React.createElement("table", null, React.createElement("thead", null), React.createElement("tbody", null, this.state.board.map(function (t, r) {
            return React.createElement(h, {
              key: r,
              row: t,
              play: e.play
            });
          }))), React.createElement("p", {
            className: "message"
          }, this.state.message));
        }
      }]), o;
    }(),
        h = function h(e) {
      var t = e.row,
          r = e.play;
      return React.createElement("tr", null, t.map(function (e, t) {
        return React.createElement(m, {
          key: t,
          value: e,
          columnIndex: t,
          play: r
        });
      }));
    },
        m = function m(e) {
      var t = e.value,
          r = e.columnIndex,
          n = e.play,
          a = "white";
      return 1 === t ? a = "red" : 2 === t && (a = "yellow"), React.createElement("td", null, React.createElement("div", {
        className: "cell",
        onClick: function onClick() {
          n(r);
        }
      }, React.createElement("div", {
        className: a
      })));
    };

    ReactDOM.render(React.createElement(y, null), document.getElementById("main")), f();
  }, {}]
}, {}, ["Focm"], null);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55494" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/dist/index.js"], null)
//# sourceMappingURL=/dist.6ae50d8d.js.map