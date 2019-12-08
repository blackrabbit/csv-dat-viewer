!(function(e) {
  var t = window.webpackHotUpdate;
  window.webpackHotUpdate = function(e, n) {
    !(function(e, t) {
      if (!k[e] || !w[e]) return;
      for (var n in ((w[e] = !1), t))
        Object.prototype.hasOwnProperty.call(t, n) && (m[n] = t[n]);
      0 == --g && 0 === y && T();
    })(e, n),
      t && t(e, n);
  };
  var n,
    r = !0,
    a = "171c9a54e894b621f62c",
    i = 1e4,
    o = {},
    l = [],
    u = [];
  function c(e) {
    var t = C[e];
    if (!t) return O;
    var r = function(r) {
        return (
          t.hot.active
            ? (C[r]
                ? -1 === C[r].parents.indexOf(e) && C[r].parents.push(e)
                : ((l = [e]), (n = r)),
              -1 === t.children.indexOf(r) && t.children.push(r))
            : (console.warn(
                "[HMR] unexpected require(" + r + ") from disposed module " + e
              ),
              (l = [])),
          O(r)
        );
      },
      a = function(e) {
        return {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return O[e];
          },
          set: function(t) {
            O[e] = t;
          }
        };
      };
    for (var i in O)
      Object.prototype.hasOwnProperty.call(O, i) &&
        "e" !== i &&
        "t" !== i &&
        Object.defineProperty(r, i, a(i));
    return (
      (r.e = function(e) {
        return (
          "ready" === d && p("prepare"),
          y++,
          O.e(e).then(t, function(e) {
            throw (t(), e);
          })
        );
        function t() {
          y--, "prepare" === d && (b[e] || E(e), 0 === y && 0 === g && T());
        }
      }),
      (r.t = function(e, t) {
        return 1 & t && (e = r(e)), O.t(e, -2 & t);
      }),
      r
    );
  }
  function s(e) {
    var t = {
      _acceptedDependencies: {},
      _declinedDependencies: {},
      _selfAccepted: !1,
      _selfDeclined: !1,
      _disposeHandlers: [],
      _main: n !== e,
      active: !0,
      accept: function(e, n) {
        if (void 0 === e) t._selfAccepted = !0;
        else if ("function" == typeof e) t._selfAccepted = e;
        else if ("object" == typeof e)
          for (var r = 0; r < e.length; r++)
            t._acceptedDependencies[e[r]] = n || function() {};
        else t._acceptedDependencies[e] = n || function() {};
      },
      decline: function(e) {
        if (void 0 === e) t._selfDeclined = !0;
        else if ("object" == typeof e)
          for (var n = 0; n < e.length; n++) t._declinedDependencies[e[n]] = !0;
        else t._declinedDependencies[e] = !0;
      },
      dispose: function(e) {
        t._disposeHandlers.push(e);
      },
      addDisposeHandler: function(e) {
        t._disposeHandlers.push(e);
      },
      removeDisposeHandler: function(e) {
        var n = t._disposeHandlers.indexOf(e);
        n >= 0 && t._disposeHandlers.splice(n, 1);
      },
      check: _,
      apply: S,
      status: function(e) {
        if (!e) return d;
        f.push(e);
      },
      addStatusHandler: function(e) {
        f.push(e);
      },
      removeStatusHandler: function(e) {
        var t = f.indexOf(e);
        t >= 0 && f.splice(t, 1);
      },
      data: o[e]
    };
    return (n = void 0), t;
  }
  var f = [],
    d = "idle";
  function p(e) {
    d = e;
    for (var t = 0; t < f.length; t++) f[t].call(null, e);
  }
  var h,
    m,
    v,
    g = 0,
    y = 0,
    b = {},
    w = {},
    k = {};
  function x(e) {
    return +e + "" === e ? +e : e;
  }
  function _(e) {
    if ("idle" !== d) throw new Error("check() is only allowed in idle status");
    return (
      (r = e),
      p("check"),
      ((t = i),
      (t = t || 1e4),
      new Promise(function(e, n) {
        if ("undefined" == typeof XMLHttpRequest)
          return n(new Error("No browser support"));
        try {
          var r = new XMLHttpRequest(),
            i = O.p + "" + a + ".hot-update.json";
          r.open("GET", i, !0), (r.timeout = t), r.send(null);
        } catch (e) {
          return n(e);
        }
        r.onreadystatechange = function() {
          if (4 === r.readyState)
            if (0 === r.status)
              n(new Error("Manifest request to " + i + " timed out."));
            else if (404 === r.status) e();
            else if (200 !== r.status && 304 !== r.status)
              n(new Error("Manifest request to " + i + " failed."));
            else {
              try {
                var t = JSON.parse(r.responseText);
              } catch (e) {
                return void n(e);
              }
              e(t);
            }
        };
      })).then(function(e) {
        if (!e) return p("idle"), null;
        (w = {}), (b = {}), (k = e.c), (v = e.h), p("prepare");
        var t = new Promise(function(e, t) {
          h = { resolve: e, reject: t };
        });
        m = {};
        return E(0), "prepare" === d && 0 === y && 0 === g && T(), t;
      })
    );
    var t;
  }
  function E(e) {
    k[e]
      ? ((w[e] = !0),
        g++,
        (function(e) {
          var t = document.createElement("script");
          (t.charset = "utf-8"),
            (t.src = O.p + "" + e + "." + a + ".hot-update.js"),
            document.head.appendChild(t);
        })(e))
      : (b[e] = !0);
  }
  function T() {
    p("ready");
    var e = h;
    if (((h = null), e))
      if (r)
        Promise.resolve()
          .then(function() {
            return S(r);
          })
          .then(
            function(t) {
              e.resolve(t);
            },
            function(t) {
              e.reject(t);
            }
          );
      else {
        var t = [];
        for (var n in m)
          Object.prototype.hasOwnProperty.call(m, n) && t.push(x(n));
        e.resolve(t);
      }
  }
  function S(t) {
    if ("ready" !== d)
      throw new Error("apply() is only allowed in ready status");
    var n, r, i, u, c;
    function s(e) {
      for (
        var t = [e],
          n = {},
          r = t.map(function(e) {
            return { chain: [e], id: e };
          });
        r.length > 0;

      ) {
        var a = r.pop(),
          i = a.id,
          o = a.chain;
        if ((u = C[i]) && !u.hot._selfAccepted) {
          if (u.hot._selfDeclined)
            return { type: "self-declined", chain: o, moduleId: i };
          if (u.hot._main) return { type: "unaccepted", chain: o, moduleId: i };
          for (var l = 0; l < u.parents.length; l++) {
            var c = u.parents[l],
              s = C[c];
            if (s) {
              if (s.hot._declinedDependencies[i])
                return {
                  type: "declined",
                  chain: o.concat([c]),
                  moduleId: i,
                  parentId: c
                };
              -1 === t.indexOf(c) &&
                (s.hot._acceptedDependencies[i]
                  ? (n[c] || (n[c] = []), f(n[c], [i]))
                  : (delete n[c],
                    t.push(c),
                    r.push({ chain: o.concat([c]), id: c })));
            }
          }
        }
      }
      return {
        type: "accepted",
        moduleId: e,
        outdatedModules: t,
        outdatedDependencies: n
      };
    }
    function f(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        -1 === e.indexOf(r) && e.push(r);
      }
    }
    t = t || {};
    var h = {},
      g = [],
      y = {},
      b = function() {
        console.warn(
          "[HMR] unexpected require(" + _.moduleId + ") to disposed module"
        );
      };
    for (var w in m)
      if (Object.prototype.hasOwnProperty.call(m, w)) {
        var _;
        c = x(w);
        var E = !1,
          T = !1,
          S = !1,
          M = "";
        switch (
          ((_ = m[w] ? s(c) : { type: "disposed", moduleId: w }).chain &&
            (M = "\nUpdate propagation: " + _.chain.join(" -> ")),
          _.type)
        ) {
          case "self-declined":
            t.onDeclined && t.onDeclined(_),
              t.ignoreDeclined ||
                (E = new Error(
                  "Aborted because of self decline: " + _.moduleId + M
                ));
            break;
          case "declined":
            t.onDeclined && t.onDeclined(_),
              t.ignoreDeclined ||
                (E = new Error(
                  "Aborted because of declined dependency: " +
                    _.moduleId +
                    " in " +
                    _.parentId +
                    M
                ));
            break;
          case "unaccepted":
            t.onUnaccepted && t.onUnaccepted(_),
              t.ignoreUnaccepted ||
                (E = new Error(
                  "Aborted because " + c + " is not accepted" + M
                ));
            break;
          case "accepted":
            t.onAccepted && t.onAccepted(_), (T = !0);
            break;
          case "disposed":
            t.onDisposed && t.onDisposed(_), (S = !0);
            break;
          default:
            throw new Error("Unexception type " + _.type);
        }
        if (E) return p("abort"), Promise.reject(E);
        if (T)
          for (c in ((y[c] = m[c]),
          f(g, _.outdatedModules),
          _.outdatedDependencies))
            Object.prototype.hasOwnProperty.call(_.outdatedDependencies, c) &&
              (h[c] || (h[c] = []), f(h[c], _.outdatedDependencies[c]));
        S && (f(g, [_.moduleId]), (y[c] = b));
      }
    var P,
      N = [];
    for (r = 0; r < g.length; r++)
      (c = g[r]),
        C[c] &&
          C[c].hot._selfAccepted &&
          y[c] !== b &&
          N.push({ module: c, errorHandler: C[c].hot._selfAccepted });
    p("dispose"),
      Object.keys(k).forEach(function(e) {
        !1 === k[e] &&
          (function(e) {
            delete installedChunks[e];
          })(e);
      });
    for (var R, D, L = g.slice(); L.length > 0; )
      if (((c = L.pop()), (u = C[c]))) {
        var I = {},
          j = u.hot._disposeHandlers;
        for (i = 0; i < j.length; i++) (n = j[i])(I);
        for (
          o[c] = I, u.hot.active = !1, delete C[c], delete h[c], i = 0;
          i < u.children.length;
          i++
        ) {
          var A = C[u.children[i]];
          A && (P = A.parents.indexOf(c)) >= 0 && A.parents.splice(P, 1);
        }
      }
    for (c in h)
      if (Object.prototype.hasOwnProperty.call(h, c) && (u = C[c]))
        for (D = h[c], i = 0; i < D.length; i++)
          (R = D[i]),
            (P = u.children.indexOf(R)) >= 0 && u.children.splice(P, 1);
    for (c in (p("apply"), (a = v), y))
      Object.prototype.hasOwnProperty.call(y, c) && (e[c] = y[c]);
    var F = null;
    for (c in h)
      if (Object.prototype.hasOwnProperty.call(h, c) && (u = C[c])) {
        D = h[c];
        var z = [];
        for (r = 0; r < D.length; r++)
          if (((R = D[r]), (n = u.hot._acceptedDependencies[R]))) {
            if (-1 !== z.indexOf(n)) continue;
            z.push(n);
          }
        for (r = 0; r < z.length; r++) {
          n = z[r];
          try {
            n(D);
          } catch (e) {
            t.onErrored &&
              t.onErrored({
                type: "accept-errored",
                moduleId: c,
                dependencyId: D[r],
                error: e
              }),
              t.ignoreErrored || F || (F = e);
          }
        }
      }
    for (r = 0; r < N.length; r++) {
      var U = N[r];
      (c = U.module), (l = [c]);
      try {
        O(c);
      } catch (e) {
        if ("function" == typeof U.errorHandler)
          try {
            U.errorHandler(e);
          } catch (n) {
            t.onErrored &&
              t.onErrored({
                type: "self-accept-error-handler-errored",
                moduleId: c,
                error: n,
                originalError: e
              }),
              t.ignoreErrored || F || (F = n),
              F || (F = e);
          }
        else
          t.onErrored &&
            t.onErrored({ type: "self-accept-errored", moduleId: c, error: e }),
            t.ignoreErrored || F || (F = e);
      }
    }
    return F
      ? (p("fail"), Promise.reject(F))
      : (p("idle"),
        new Promise(function(e) {
          e(g);
        }));
  }
  var C = {};
  function O(t) {
    if (C[t]) return C[t].exports;
    var n = (C[t] = {
      i: t,
      l: !1,
      exports: {},
      hot: s(t),
      parents: ((u = l), (l = []), u),
      children: []
    });
    return e[t].call(n.exports, n, n.exports, c(t)), (n.l = !0), n.exports;
  }
  (O.m = e),
    (O.c = C),
    (O.d = function(e, t, n) {
      O.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (O.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (O.t = function(e, t) {
      if ((1 & t && (e = O(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (O.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          O.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (O.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return O.d(t, "a", t), t;
    }),
    (O.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (O.p = "/"),
    (O.h = function() {
      return a;
    }),
    c(72)((O.s = 72));
})([
  function(e, t, n) {
    e.exports = n(55)();
  },
  function(e, t, n) {
    "use strict";
    e.exports = n(46);
  },
  function(e, t, n) {
    var r;
    /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function() {
      "use strict";
      var n = {}.hasOwnProperty;
      function a() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          var r = arguments[t];
          if (r) {
            var i = typeof r;
            if ("string" === i || "number" === i) e.push(r);
            else if (Array.isArray(r) && r.length) {
              var o = a.apply(null, r);
              o && e.push(o);
            } else if ("object" === i)
              for (var l in r) n.call(r, l) && r[l] && e.push(l);
          }
        }
        return e.join(" ");
      }
      e.exports
        ? ((a.default = a), (e.exports = a))
        : void 0 ===
            (r = function() {
              return a;
            }.apply(t, [])) || (e.exports = r);
    })();
  },
  function(e, t, n) {
    var r = n(51),
      a = n(52),
      i = n(53);
    e.exports = function(e, t) {
      return r(e) || a(e, t) || i();
    };
  },
  function(e, t, n) {
    e.exports = n(50);
  },
  function(e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "Point", function() {
        return i;
      });
    var r = function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      },
      a = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      i = (function() {
        function e(t) {
          var n = t.x,
            a = void 0 === n ? 0 : n,
            i = t.y,
            o = void 0 === i ? 0 : i;
          r(this, e), (this.x = a), (this.y = o);
        }
        return (
          a(e, [
            {
              key: "value",
              value: function() {
                return { x: this.x, y: this.y };
              }
            },
            {
              key: "toArray",
              value: function() {
                return [this.x, this.y];
              }
            }
          ]),
          e
        );
      })();
  },
  function(e, t, n) {
    var r = n(21);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var a = { insert: "head", singleton: !1 },
      i = n(12)(r, a);
    r.locals && (e.exports = r.locals),
      r.locals ||
        e.hot.accept(21, function() {
          var t = n(21);
          "string" == typeof t && (t = [[e.i, t, ""]]), i(t);
        }),
      e.hot.dispose(function() {
        i();
      });
  },
  function(e, t) {
    e.exports = function(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    };
  },
  function(e, t) {
    function n(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    e.exports = function(e, t, r) {
      return t && n(e.prototype, t), r && n(e, r), e;
    };
  },
  function(e, t, n) {
    var r = n(20);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var a = { insert: "head", singleton: !1 },
      i = n(12)(r, a);
    r.locals && (e.exports = r.locals),
      r.locals ||
        e.hot.accept(20, function() {
          var t = n(20);
          "string" == typeof t && (t = [[e.i, t, ""]]), i(t);
        }),
      e.hot.dispose(function() {
        i();
      });
  },
  ,
  function(e, t, n) {
    "use strict";
    e.exports = function(e) {
      var t = [];
      return (
        (t.toString = function() {
          return this.map(function(t) {
            var n = (function(e, t) {
              var n = e[1] || "",
                r = e[3];
              if (!r) return n;
              if (t && "function" == typeof btoa) {
                var a =
                    ((o = r),
                    (l = btoa(unescape(encodeURIComponent(JSON.stringify(o))))),
                    (u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      l
                    )),
                    "/*# ".concat(u, " */")),
                  i = r.sources.map(function(e) {
                    return "/*# sourceURL="
                      .concat(r.sourceRoot)
                      .concat(e, " */");
                  });
                return [n]
                  .concat(i)
                  .concat([a])
                  .join("\n");
              }
              var o, l, u;
              return [n].join("\n");
            })(t, e);
            return t[2] ? "@media ".concat(t[2], "{").concat(n, "}") : n;
          }).join("");
        }),
        (t.i = function(e, n) {
          "string" == typeof e && (e = [[null, e, ""]]);
          for (var r = {}, a = 0; a < this.length; a++) {
            var i = this[a][0];
            null != i && (r[i] = !0);
          }
          for (var o = 0; o < e.length; o++) {
            var l = e[o];
            (null != l[0] && r[l[0]]) ||
              (n && !l[2]
                ? (l[2] = n)
                : n && (l[2] = "(".concat(l[2], ") and (").concat(n, ")")),
              t.push(l));
          }
        }),
        t
      );
    };
  },
  function(e, t, n) {
    "use strict";
    var r,
      a = {},
      i = function() {
        return (
          void 0 === r &&
            (r = Boolean(window && document && document.all && !window.atob)),
          r
        );
      },
      o = (function() {
        var e = {};
        return function(t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            e[t] = n;
          }
          return e[t];
        };
      })();
    function l(e, t) {
      for (var n = [], r = {}, a = 0; a < e.length; a++) {
        var i = e[a],
          o = t.base ? i[0] + t.base : i[0],
          l = { css: i[1], media: i[2], sourceMap: i[3] };
        r[o] ? r[o].parts.push(l) : n.push((r[o] = { id: o, parts: [l] }));
      }
      return n;
    }
    function u(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = a[r.id],
          o = 0;
        if (i) {
          for (i.refs++; o < i.parts.length; o++) i.parts[o](r.parts[o]);
          for (; o < r.parts.length; o++) i.parts.push(v(r.parts[o], t));
        } else {
          for (var l = []; o < r.parts.length; o++) l.push(v(r.parts[o], t));
          a[r.id] = { id: r.id, refs: 1, parts: l };
        }
      }
    }
    function c(e) {
      var t = document.createElement("style");
      if (void 0 === e.attributes.nonce) {
        var r = n.nc;
        r && (e.attributes.nonce = r);
      }
      if (
        (Object.keys(e.attributes).forEach(function(n) {
          t.setAttribute(n, e.attributes[n]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(t);
      else {
        var a = o(e.insert || "head");
        if (!a)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        a.appendChild(t);
      }
      return t;
    }
    var s,
      f =
        ((s = []),
        function(e, t) {
          return (s[e] = t), s.filter(Boolean).join("\n");
        });
    function d(e, t, n, r) {
      var a = n ? "" : r.css;
      if (e.styleSheet) e.styleSheet.cssText = f(t, a);
      else {
        var i = document.createTextNode(a),
          o = e.childNodes;
        o[t] && e.removeChild(o[t]),
          o.length ? e.insertBefore(i, o[t]) : e.appendChild(i);
      }
    }
    function p(e, t, n) {
      var r = n.css,
        a = n.media,
        i = n.sourceMap;
      if (
        (a && e.setAttribute("media", a),
        i &&
          btoa &&
          (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = r;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(r));
      }
    }
    var h = null,
      m = 0;
    function v(e, t) {
      var n, r, a;
      if (t.singleton) {
        var i = m++;
        (n = h || (h = c(t))),
          (r = d.bind(null, n, i, !1)),
          (a = d.bind(null, n, i, !0));
      } else
        (n = c(t)),
          (r = p.bind(null, n, t)),
          (a = function() {
            !(function(e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(n);
          });
      return (
        r(e),
        function(t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            r((e = t));
          } else a();
        }
      );
    }
    e.exports = function(e, t) {
      ((t = t || {}).attributes =
        "object" == typeof t.attributes ? t.attributes : {}),
        t.singleton || "boolean" == typeof t.singleton || (t.singleton = i());
      var n = l(e, t);
      return (
        u(n, t),
        function(e) {
          for (var r = [], i = 0; i < n.length; i++) {
            var o = n[i],
              c = a[o.id];
            c && (c.refs--, r.push(c));
          }
          e && u(l(e, t), t);
          for (var s = 0; s < r.length; s++) {
            var f = r[s];
            if (0 === f.refs) {
              for (var d = 0; d < f.parts.length; d++) f.parts[d]();
              delete a[f.id];
            }
          }
        }
      );
    };
  },
  function(e, t, n) {
    var r = n(25);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var a = { insert: "head", singleton: !1 },
      i = n(12)(r, a);
    r.locals && (e.exports = r.locals),
      r.locals ||
        e.hot.accept(25, function() {
          var t = n(25);
          "string" == typeof t && (t = [[e.i, t, ""]]), i(t);
        }),
      e.hot.dispose(function() {
        i();
      });
  },
  ,
  ,
  function(e, t, n) {
    "use strict";
    !(function e() {
      if (
        "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
      ) {
        0;
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (e) {
          console.error(e);
        }
      }
    })(),
      (e.exports = n(47));
  },
  function(e, t, n) {
    var r = n(22);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var a = { insert: "head", singleton: !1 },
      i = n(12)(r, a);
    r.locals && (e.exports = r.locals),
      r.locals ||
        e.hot.accept(22, function() {
          var t = n(22);
          "string" == typeof t && (t = [[e.i, t, ""]]), i(t);
        }),
      e.hot.dispose(function() {
        i();
      });
  },
  function(e, t, n) {
    var r,
      a = n(35),
      i = n(66),
      o = n(67),
      l = 100,
      u = /(\+|\-|\*|\\|[^a-z]|)(\s*)(\()/g;
    e.exports = function(e, t) {
      function n(e, i, c) {
        if (r++ > l) throw ((r = 0), new Error("Call stack overflow for " + c));
        if ("" === e)
          throw new Error(
            i + "(): '" + c + "' must contain a non-whitespace string"
          );
        var s = (function(e) {
          var t = [],
            n = [],
            r = /[\.0-9]([%a-z]+)/gi,
            a = r.exec(e);
          for (; a; )
            a &&
              a[1] &&
              (-1 === n.indexOf(a[1].toLowerCase()) &&
                (t.push(a[1]), n.push(a[1].toLowerCase())),
              (a = r.exec(e)));
          return t;
        })(
          (e = (function(e, t) {
            e = e.replace(/((?:\-[a-z]+\-)?calc)/g, "");
            var r,
              i = "",
              o = e;
            for (; (r = u.exec(o)); ) {
              r[0].index > 0 && (i += o.substring(0, r[0].index));
              var l = a("(", ")", o.substring([0].index));
              if ("" === l.body)
                throw new Error(
                  "'" + e + "' must contain a non-whitespace string"
                );
              var c = n(l.body, "", t);
              (i += l.pre + c), (o = l.post);
            }
            return i + o;
          })(e, c))
        );
        if (s.length > 1 || e.indexOf("var(") > -1) return i + "(" + e + ")";
        var f = s[0] || "";
        "%" === f &&
          (e = e.replace(/\b[0-9\.]+%/g, function(e) {
            return 0.01 * parseFloat(e.slice(0, -1));
          }));
        var d,
          p = e.replace(new RegExp(f, "gi"), "");
        try {
          d = o.eval(p);
        } catch (t) {
          return i + "(" + e + ")";
        }
        return (
          "%" === f && (d *= 100),
          (i.length || "%" === f) && (d = Math.round(d * t) / t),
          (d += f)
        );
      }
      return (
        (r = 0),
        (t = Math.pow(10, void 0 === t ? 5 : t)),
        (e = e.replace(/\n+/g, " ")),
        i(e, /((?:\-[a-z]+\-)?calc)\(/, n)
      );
    };
  },
  function(e, t, n) {
    var r = n(26);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var a = { insert: "head", singleton: !1 },
      i = n(12)(r, a);
    r.locals && (e.exports = r.locals),
      r.locals ||
        e.hot.accept(26, function() {
          var t = n(26);
          "string" == typeof t && (t = [[e.i, t, ""]]), i(t);
        }),
      e.hot.dispose(function() {
        i();
      });
  },
  function(e, t, n) {
    (t = e.exports = n(11)(!1)).push([
      e.i,
      "._18DpFtpZZ0gOr05t-sfR8H {\n  margin-left: 30px;\n  margin-top: 20px;\n  font-size: 14px;\n  color: rgb(140, 153, 180);\n  font-weight: 700;\n  text-transform: uppercase;\n  margin-bottom: 15px;\n}\n\n.MeBGvmFhTjg57F-oae9ME ._18DpFtpZZ0gOr05t-sfR8H  {\n  color: white;\n}\n\n._1v18isMNqCLirsgtW6oyTk {\n  z-index: 15;\n}\n\n._1iZQaKlXhUe_duUwmoVYTS {\n  margin-left: 15px;\n  color: white;\n  padding: 4px;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-transform: underline;\n}\n\n.MeBGvmFhTjg57F-oae9ME span._25Q9yArehQYm1itpS_X9f- {\n  background-color: white;\n  color: rgb(61, 68, 87);\n}",
      ""
    ]),
      (t.locals = {
        sourcedetailslink: "_18DpFtpZZ0gOr05t-sfR8H",
        selected: "MeBGvmFhTjg57F-oae9ME",
        pane: "_1v18isMNqCLirsgtW6oyTk",
        sourcedetailssubitem: "_1iZQaKlXhUe_duUwmoVYTS",
        selectedsubitem: "_25Q9yArehQYm1itpS_X9f-"
      });
  },
  function(e, t, n) {
    (t = e.exports = n(11)(!1)).push([
      e.i,
      "\n.fkq0LurbdMhdr5AiUB0nX {\n  font-family: 'Roboto Mono', monospace;\n  font-size: 12px;\n  border-left: 1px solid #cacaca;\n  border-bottom: 1px solid #cacaca;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  text-overflow: ellipsis; \n  overflow: hidden;\n}\n\n.fkq0LurbdMhdr5AiUB0nX span {\n  padding-left: 5px;\n  padding-right: 5px;\n  width: 100%;\n  white-space: nowrap;\n  text-overflow: ellipsis; \n  overflow: hidden;  \n}\n\n._2dVOAmEQnTO-VlO_uJ9hAR {\n  font-family: 'Source Sans Pro', sans-serif;\n  font-weight: 600;\n  font-size: 13px;\n  border-bottom: 3px solid #cacaca;\n  position: sticky;\n  border-top: 3px solid #cacaca;\n}\n\n._2dVOAmEQnTO-VlO_uJ9hAR span {\n  padding-left: 5px;\n}\n\n._3reuKthvog4l2z6kHo_I-Q {\n  border-left: 3px solid #cacaca;\n}\n\n.roDjsu8mNo2sSu6UqA39o {\n  border-right: 3px solid #cacaca;\n}\n\n.k1zDHiHWe7I4EbbpAXXJq {\n  text-align: left;\n}\n\n._3IJtufvlfTjMjjbGG6M7bD {\n  text-align: right;\n}\n\n._11eyTQe6inVRffoFyNTN7i {\n  border-top: 1px solid #cacaca;\n  border-right: 1px solid #cacaca;\n}\n",
      ""
    ]),
      (t.locals = {
        cell: "fkq0LurbdMhdr5AiUB0nX",
        headercell: "_2dVOAmEQnTO-VlO_uJ9hAR",
        firstcell: "_3reuKthvog4l2z6kHo_I-Q",
        lastcell: "roDjsu8mNo2sSu6UqA39o",
        left: "k1zDHiHWe7I4EbbpAXXJq",
        right: "_3IJtufvlfTjMjjbGG6M7bD",
        table: "_11eyTQe6inVRffoFyNTN7i"
      });
  },
  function(e, t, n) {
    (t = e.exports = n(11)(!1)).push([
      e.i,
      "table.HN0QL_MetHeFacOhcnZjk {\n  width: 100%;\n  text-align: center;\n  padding-left: 100px;\n}\n\ntable.HN0QL_MetHeFacOhcnZjk th {\n  font-size: 11px;\n  border-bottom: 1px solid rgb(110, 110, 110);\n}\n\ntable.HN0QL_MetHeFacOhcnZjk tr, th, td {\n  font-family: 'Roboto Mono', monospace;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  height: 30px;\n  width: 100%;\n}\n\nh3 {\n  font-family: 'Roboto Mono', monospace;\n  margin-top: 20px;\n}\n\nh3 span {\n  background-color: rgb(179, 179, 179);\n  padding: 3px;\n}\n\n._1b1r7TCllcCT-Q5F5bR2q8 {\n  margin-left: 50px;\n}\n\n._3IfUtSo_O-r9e7tUPPlAWj {\n  margin-bottom: 100px;\n}",
      ""
    ]),
      (t.locals = {
        summarystats: "HN0QL_MetHeFacOhcnZjk",
        container: "_1b1r7TCllcCT-Q5F5bR2q8",
        onestatistic: "_3IfUtSo_O-r9e7tUPPlAWj"
      });
  },
  function(e, t) {
    var n;
    n = (function() {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    t.default = u;
    var a = l(n(1)),
      i = l(n(0)),
      o = l(n(2));
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function u(e) {
      var t = e.className,
        n = e.top,
        i = e.left,
        l = e.style,
        u = e.children,
        c = (function(e, t) {
          var n = {};
          for (var r in e)
            t.indexOf(r) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
          return n;
        })(e, ["className", "top", "left", "style", "children"]);
      return a.default.createElement(
        "div",
        r(
          {
            className: (0, o.default)("vx-tooltip-portal", t),
            style: r(
              {
                position: "absolute",
                backgroundColor: "white",
                color: "#666666",
                padding: ".3rem .5rem",
                borderRadius: "3px",
                fontSize: "14px",
                boxShadow: "0 1px 2px rgba(33,33,33,0.2)",
                lineHeight: "1em",
                pointerEvents: "none",
                top: n,
                left: i
              },
              l
            )
          },
          c
        ),
        u
      );
    }
    u.propTypes = {
      left: i.default.oneOfType([i.default.number, i.default.string]),
      top: i.default.oneOfType([i.default.number, i.default.string]),
      className: i.default.string,
      style: i.default.object,
      children: i.default.any
    };
  },
  function(e, t, n) {
    (t = e.exports = n(11)(!1)).push([
      e.i,
      ".zhrVWcTC-RmYK9rv_CbKq {\n  background-color: #fcfcfc;\n  box-shadow: 4px 72px 65px 35px #212121;\n  padding: 20px;\n}\n\n.G45c1bbqi4Hv4jFhPtmtX {\n  height: 40px;\n}\n\nh2 {\n  text-transform: uppercase;\n  font-size: 18px;\n  letter-spacing: 1px;\n  font-weight: 600;\n  display: inline-block;\n}\n\n._25YQniwsG_rJNHnyqz7OmX {\n  margin-left: 20px;\n  margin-top: 2px;\n}\n\n._3N4pQs2iq9ae7qsg91Hpb4 {\n  font-family: 'Roboto Mono', monospace;\n  color: #6e6e6e;\n  font-weight: 500;\n  font-size: 14px;\n}",
      ""
    ]),
      (t.locals = {
        container: "zhrVWcTC-RmYK9rv_CbKq",
        header: "G45c1bbqi4Hv4jFhPtmtX",
        downloadicon: "_25YQniwsG_rJNHnyqz7OmX",
        filedetails: "_3N4pQs2iq9ae7qsg91Hpb4"
      });
  },
  function(e, t, n) {
    (t = e.exports = n(11)(!1)).push([
      e.i,
      "._2pQuirawQ0LV2kiMldlMJh {\n  background-color: rgb(61, 68, 87);\n  display: grid;\n  grid-template-columns: 200px auto;\n  grid-template-rows: auto;\n}\n\n._1INbdzYWvMRRFwJVvWiN6f {\n  background-color: rgb(70, 152, 255);\n  z-index: 10;\n}\n\n._2EKIt_nZ4d_Mdll0D79ch5 {\n  text-transform: uppercase;\n  margin-left: 30px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: white;\n  letter-spacing: 2px;\n  font-weight: 600;\n}",
      ""
    ]),
      (t.locals = {
        container: "_2pQuirawQ0LV2kiMldlMJh",
        header: "_1INbdzYWvMRRFwJVvWiN6f",
        pagetitle: "_2EKIt_nZ4d_Mdll0D79ch5"
      });
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      a = u(n(1)),
      i = u(n(0)),
      o = n(65),
      l = u(n(24));
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var c = i.default.shape({
        top: i.default.number.isRequired,
        right: i.default.number.isRequired,
        bottom: i.default.number.isRequired,
        left: i.default.number.isRequired,
        width: i.default.number.isRequired,
        height: i.default.number.isRequired
      }),
      s = { getRects: i.default.func, rect: c, parentRect: c },
      f = {
        left: i.default.oneOfType([i.default.number, i.default.string]),
        top: i.default.oneOfType([i.default.number, i.default.string]),
        className: i.default.string,
        style: i.default.object,
        children: i.default.any
      },
      d = r({}, s, f, {
        offsetLeft: i.default.number,
        offsetTop: i.default.number
      });
    function p(e) {
      var t = e.left,
        n = e.top,
        i = e.offsetLeft,
        o = void 0 === i ? 10 : i,
        u = e.offsetTop,
        c = void 0 === u ? 10 : u,
        s = e.rect,
        f = e.parentRect,
        d = (e.getRects, e.children),
        p = e.style,
        h = (function(e, t) {
          var n = {};
          for (var r in e)
            t.indexOf(r) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
          return n;
        })(e, [
          "left",
          "top",
          "offsetLeft",
          "offsetTop",
          "rect",
          "parentRect",
          "getRects",
          "children",
          "style"
        ]),
        m = t,
        v = n;
      return (
        s &&
          f &&
          ((m =
            o + s.right > f.right || o + s.right > window.innerWidth
              ? m - s.width - o
              : m + o),
          (v =
            c + s.bottom > f.bottom || c + s.bottom > window.innerHeight
              ? v - s.height - c
              : v + c)),
        a.default.createElement(
          l.default,
          r(
            {
              style: r(
                { top: 0, transform: "translate(" + m + "px, " + v + "px)" },
                p
              )
            },
            h
          ),
          d
        )
      );
    }
    (p.propTypes = d),
      (p.defaultProps = {}),
      (t.default = (0, o.withBoundingRects)(p));
  },
  function(e, t, n) {
    "use strict";
    (function(e) {
      n.d(t, "a", function() {
        return Re;
      });
      var r = n(0),
        a = n.n(r),
        i = n(1),
        o = n.n(i),
        l = n(18),
        u = n.n(l),
        c =
          "undefined" != typeof window
            ? window
            : void 0 !== e
            ? e
            : "undefined" != typeof self
            ? self
            : {},
        s = "object" == typeof c && c && c.Object === Object && c,
        f = "object" == typeof self && self && self.Object === Object && self,
        d = s || f || Function("return this")(),
        p = d.Symbol,
        h = Object.prototype,
        m = h.hasOwnProperty,
        v = h.toString,
        g = p ? p.toStringTag : void 0;
      var y = function(e) {
          var t = m.call(e, g),
            n = e[g];
          try {
            e[g] = void 0;
          } catch (e) {}
          var r = v.call(e);
          return t ? (e[g] = n) : delete e[g], r;
        },
        b = Object.prototype.toString;
      var w = function(e) {
          return b.call(e);
        },
        k = "[object Null]",
        x = "[object Undefined]",
        _ = p ? p.toStringTag : void 0;
      var E = function(e) {
        return null == e
          ? void 0 === e
            ? x
            : k
          : _ && _ in Object(e)
          ? y(e)
          : w(e);
      };
      var T = function(e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t);
        },
        S = "[object AsyncFunction]",
        C = "[object Function]",
        O = "[object GeneratorFunction]",
        M = "[object Proxy]";
      var P,
        N = function(e) {
          if (!T(e)) return !1;
          var t = E(e);
          return t == C || t == O || t == S || t == M;
        },
        R = d["__core-js_shared__"],
        D = (P = /[^.]+$/.exec((R && R.keys && R.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + P
          : "";
      var L = function(e) {
          return !!D && D in e;
        },
        I = Function.prototype.toString;
      var j = function(e) {
          if (null != e) {
            try {
              return I.call(e);
            } catch (e) {}
            try {
              return e + "";
            } catch (e) {}
          }
          return "";
        },
        A = /^\[object .+?Constructor\]$/,
        F = Function.prototype,
        z = Object.prototype,
        U = F.toString,
        W = z.hasOwnProperty,
        H = RegExp(
          "^" +
            U.call(W)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      var q = function(e) {
        return !(!T(e) || L(e)) && (N(e) ? H : A).test(j(e));
      };
      var V = function(e, t) {
        return null == e ? void 0 : e[t];
      };
      var B = function(e, t) {
          var n = V(e, t);
          return q(n) ? n : void 0;
        },
        $ = B(Object, "create");
      var Q = function() {
        (this.__data__ = $ ? $(null) : {}), (this.size = 0);
      };
      var K = function(e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        },
        Y = "__lodash_hash_undefined__",
        X = Object.prototype.hasOwnProperty;
      var Z = function(e) {
          var t = this.__data__;
          if ($) {
            var n = t[e];
            return n === Y ? void 0 : n;
          }
          return X.call(t, e) ? t[e] : void 0;
        },
        G = Object.prototype.hasOwnProperty;
      var J = function(e) {
          var t = this.__data__;
          return $ ? void 0 !== t[e] : G.call(t, e);
        },
        ee = "__lodash_hash_undefined__";
      var te = function(e, t) {
        var n = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (n[e] = $ && void 0 === t ? ee : t),
          this
        );
      };
      function ne(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (ne.prototype.clear = Q),
        (ne.prototype.delete = K),
        (ne.prototype.get = Z),
        (ne.prototype.has = J),
        (ne.prototype.set = te);
      var re = ne;
      var ae = function() {
        (this.__data__ = []), (this.size = 0);
      };
      var ie = function(e, t) {
        return e === t || (e != e && t != t);
      };
      var oe = function(e, t) {
          for (var n = e.length; n--; ) if (ie(e[n][0], t)) return n;
          return -1;
        },
        le = Array.prototype.splice;
      var ue = function(e) {
        var t = this.__data__,
          n = oe(t, e);
        return (
          !(n < 0) &&
          (n == t.length - 1 ? t.pop() : le.call(t, n, 1), --this.size, !0)
        );
      };
      var ce = function(e) {
        var t = this.__data__,
          n = oe(t, e);
        return n < 0 ? void 0 : t[n][1];
      };
      var se = function(e) {
        return oe(this.__data__, e) > -1;
      };
      var fe = function(e, t) {
        var n = this.__data__,
          r = oe(n, e);
        return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
      };
      function de(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (de.prototype.clear = ae),
        (de.prototype.delete = ue),
        (de.prototype.get = ce),
        (de.prototype.has = se),
        (de.prototype.set = fe);
      var pe = de,
        he = B(d, "Map");
      var me = function() {
        (this.size = 0),
          (this.__data__ = {
            hash: new re(),
            map: new (he || pe)(),
            string: new re()
          });
      };
      var ve = function(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      };
      var ge = function(e, t) {
        var n = e.__data__;
        return ve(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
      };
      var ye = function(e) {
        var t = ge(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      };
      var be = function(e) {
        return ge(this, e).get(e);
      };
      var we = function(e) {
        return ge(this, e).has(e);
      };
      var ke = function(e, t) {
        var n = ge(this, e),
          r = n.size;
        return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
      };
      function xe(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (xe.prototype.clear = me),
        (xe.prototype.delete = ye),
        (xe.prototype.get = be),
        (xe.prototype.has = we),
        (xe.prototype.set = ke);
      var _e = xe,
        Ee = "Expected a function";
      function Te(e, t) {
        if ("function" != typeof e || (null != t && "function" != typeof t))
          throw new TypeError(Ee);
        var n = function() {
          var r = arguments,
            a = t ? t.apply(this, r) : r[0],
            i = n.cache;
          if (i.has(a)) return i.get(a);
          var o = e.apply(this, r);
          return (n.cache = i.set(a, o) || i), o;
        };
        return (n.cache = new (Te.Cache || _e)()), n;
      }
      Te.Cache = _e;
      var Se = "__react_svg_text_measurement_id";
      var Ce = Te(
          function(e, t) {
            try {
              var n = document.getElementById(Se);
              if (!n) {
                var r = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "svg"
                );
                (r.style.width = 0),
                  (r.style.height = 0),
                  (r.style.position = "absolute"),
                  (r.style.top = "-100%"),
                  (r.style.left = "-100%"),
                  (n = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "text"
                  )).setAttribute("id", Se),
                  r.appendChild(n),
                  document.body.appendChild(r);
              }
              return (
                Object.assign(n.style, t),
                (n.textContent = e),
                n.getComputedTextLength()
              );
            } catch (e) {
              return null;
            }
          },
          function(e, t) {
            return e + "_" + JSON.stringify(t);
          }
        ),
        Oe = function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        },
        Me = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        Pe =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        Ne = function(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        },
        Re = (function(e) {
          function t(e) {
            Oe(this, t);
            var n = Ne(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
            );
            return (n.state = { wordsByLines: [] }), n;
          }
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            Me(t, [
              {
                key: "componentWillMount",
                value: function() {
                  this.updateWordsByLines(this.props, !0);
                }
              },
              {
                key: "componentWillReceiveProps",
                value: function(e) {
                  var t =
                    this.props.children !== e.children ||
                    this.props.style !== e.style;
                  this.updateWordsByLines(e, t);
                }
              },
              {
                key: "updateWordsByLines",
                value: function(e, t) {
                  if (e.width || e.scaleToFit) {
                    if (t) {
                      var n = e.children
                        ? e.children.toString().split(/\s+/)
                        : [];
                      (this.wordsWithComputedWidth = n.map(function(t) {
                        return { word: t, width: Ce(t, e.style) };
                      })),
                        (this.spaceWidth = Ce(" ", e.style));
                    }
                    var r = this.calculateWordsByLines(
                      this.wordsWithComputedWidth,
                      this.spaceWidth,
                      e.width
                    );
                    this.setState({ wordsByLines: r });
                  } else this.updateWordsWithoutCalculate(e);
                }
              },
              {
                key: "updateWordsWithoutCalculate",
                value: function(e) {
                  var t = e.children ? e.children.toString().split(/\s+/) : [];
                  this.setState({ wordsByLines: [{ words: t }] });
                }
              },
              {
                key: "calculateWordsByLines",
                value: function(e, t, n) {
                  var r = this.props.scaleToFit;
                  return e.reduce(function(e, a) {
                    var i = a.word,
                      o = a.width,
                      l = e[e.length - 1];
                    if (l && (null == n || r || l.width + o + t < n))
                      l.words.push(i), (l.width += o + t);
                    else {
                      var u = { words: [i], width: o };
                      e.push(u);
                    }
                    return e;
                  }, []);
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.dx,
                    n = e.dy,
                    r = e.textAnchor,
                    a = e.verticalAnchor,
                    i = e.scaleToFit,
                    l = e.angle,
                    c = e.lineHeight,
                    s = e.capHeight,
                    f = e.innerRef,
                    d = (function(e, t) {
                      var n = {};
                      for (var r in e)
                        t.indexOf(r) >= 0 ||
                          (Object.prototype.hasOwnProperty.call(e, r) &&
                            (n[r] = e[r]));
                      return n;
                    })(e, [
                      "dx",
                      "dy",
                      "textAnchor",
                      "verticalAnchor",
                      "scaleToFit",
                      "angle",
                      "lineHeight",
                      "capHeight",
                      "innerRef"
                    ]),
                    p = this.state.wordsByLines,
                    h = d.x,
                    m = d.y,
                    v = void 0;
                  switch (a) {
                    case "start":
                      v = u()("calc(" + s + ")");
                      break;
                    case "middle":
                      v = u()(
                        "calc(" +
                          (p.length - 1) / 2 +
                          " * -" +
                          c +
                          " + (" +
                          s +
                          " / 2))"
                      );
                      break;
                    default:
                      v = u()("calc(" + (p.length - 1) + " * -" + c + ")");
                  }
                  var g = [];
                  if (i && p.length) {
                    var y = p[0].width,
                      b = this.props.width / y,
                      w = b,
                      k = h - b * h,
                      x = m - w * m;
                    g.push(
                      "matrix(" + b + ", 0, 0, " + w + ", " + k + ", " + x + ")"
                    );
                  }
                  return (
                    l && g.push("rotate(" + l + ", " + h + ", " + m + ")"),
                    g.length && (d.transform = g.join(" ")),
                    o.a.createElement(
                      "svg",
                      {
                        ref: f,
                        x: t,
                        y: n,
                        fontSize: d.fontSize,
                        style: { overflow: "visible" }
                      },
                      o.a.createElement(
                        "text",
                        Pe({}, d, { textAnchor: r }),
                        p.map(function(e, t) {
                          return o.a.createElement(
                            "tspan",
                            { x: h, dy: 0 === t ? v : c, key: t },
                            e.words.join(" ")
                          );
                        })
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(i.Component);
      (Re.defaultProps = {
        x: 0,
        y: 0,
        dx: 0,
        dy: 0,
        lineHeight: "1em",
        capHeight: "0.71em",
        scaleToFit: !1,
        textAnchor: "start",
        verticalAnchor: "end"
      }),
        (Re.propTypes = {
          scaleToFit: a.a.bool,
          angle: a.a.number,
          textAnchor: a.a.oneOf(["start", "middle", "end", "inherit"]),
          verticalAnchor: a.a.oneOf(["start", "middle", "end"]),
          style: a.a.object,
          innerRef: a.a.func,
          x: a.a.oneOfType([a.a.number, a.a.string]),
          y: a.a.oneOfType([a.a.number, a.a.string]),
          dx: a.a.oneOfType([a.a.number, a.a.string]),
          dy: a.a.oneOfType([a.a.number, a.a.string]),
          lineHeight: a.a.oneOfType([a.a.number, a.a.string]),
          capHeight: a.a.oneOfType([a.a.number, a.a.string])
        });
    }.call(this, n(23)));
  },
  ,
  ,
  function(e, t, n) {
    "use strict";
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r =
        Object.getOwnPropertySymbols,
      a = Object.prototype.hasOwnProperty,
      i = Object.prototype.propertyIsEnumerable;
    function o(e) {
      if (null == e)
        throw new TypeError(
          "Object.assign cannot be called with null or undefined"
        );
      return Object(e);
    }
    e.exports = (function() {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
          return !1;
        for (var t = {}, n = 0; n < 10; n++)
          t["_" + String.fromCharCode(n)] = n;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(t)
            .map(function(e) {
              return t[e];
            })
            .join("")
        )
          return !1;
        var r = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function(e) {
            r[e] = e;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        );
      } catch (e) {
        return !1;
      }
    })()
      ? Object.assign
      : function(e, t) {
          for (var n, l, u = o(e), c = 1; c < arguments.length; c++) {
            for (var s in (n = Object(arguments[c])))
              a.call(n, s) && (u[s] = n[s]);
            if (r) {
              l = r(n);
              for (var f = 0; f < l.length; f++)
                i.call(n, l[f]) && (u[l[f]] = n[l[f]]);
            }
          }
          return u;
        };
  },
  function(e, t) {
    e.exports = function(e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t);
    };
  },
  function(e, t, n) {
    var r = n(58),
      a = "object" == typeof self && self && self.Object === Object && self,
      i = r || a || Function("return this")();
    e.exports = i;
  },
  function(e, t, n) {
    var r = n(33).Symbol;
    e.exports = r;
  },
  function(e, t, n) {
    "use strict";
    function r(e, t, n) {
      e instanceof RegExp && (e = a(e, n)),
        t instanceof RegExp && (t = a(t, n));
      var r = i(e, t, n);
      return (
        r && {
          start: r[0],
          end: r[1],
          pre: n.slice(0, r[0]),
          body: n.slice(r[0] + e.length, r[1]),
          post: n.slice(r[1] + t.length)
        }
      );
    }
    function a(e, t) {
      var n = t.match(e);
      return n ? n[0] : null;
    }
    function i(e, t, n) {
      var r,
        a,
        i,
        o,
        l,
        u = n.indexOf(e),
        c = n.indexOf(t, u + 1),
        s = u;
      if (u >= 0 && c > 0) {
        for (r = [], i = n.length; s >= 0 && !l; )
          s == u
            ? (r.push(s), (u = n.indexOf(e, s + 1)))
            : 1 == r.length
            ? (l = [r.pop(), c])
            : ((a = r.pop()) < i && ((i = a), (o = c)),
              (c = n.indexOf(t, s + 1))),
            (s = u < c && u >= 0 ? u : c);
        r.length && (l = [i, o]);
      }
      return l;
    }
    (e.exports = r), (r.range = i);
  },
  function(e, t, n) {
    var r, a, i;
    /* @license
Papa Parse
v5.1.0
https://github.com/mholt/PapaParse
License: MIT
*/ (a = []),
      void 0 ===
        (i =
          "function" ==
          typeof (r = function e() {
            "use strict";
            var t =
                "undefined" != typeof self
                  ? self
                  : "undefined" != typeof window
                  ? window
                  : void 0 !== t
                  ? t
                  : {},
              n = !t.document && !!t.postMessage,
              r = n && /blob:/i.test((t.location || {}).protocol),
              a = {},
              i = 0,
              o = {
                parse: function(n, r) {
                  var l = (r = r || {}).dynamicTyping || !1;
                  if (
                    (k(l) && ((r.dynamicTypingFunction = l), (l = {})),
                    (r.dynamicTyping = l),
                    (r.transform = !!k(r.transform) && r.transform),
                    r.worker && o.WORKERS_SUPPORTED)
                  ) {
                    var u = (function() {
                      if (!o.WORKERS_SUPPORTED) return !1;
                      var n,
                        r,
                        l =
                          ((n = t.URL || t.webkitURL || null),
                          (r = e.toString()),
                          o.BLOB_URL ||
                            (o.BLOB_URL = n.createObjectURL(
                              new Blob(["(", r, ")();"], {
                                type: "text/javascript"
                              })
                            ))),
                        u = new t.Worker(l);
                      return (u.onmessage = v), (u.id = i++), (a[u.id] = u);
                    })();
                    return (
                      (u.userStep = r.step),
                      (u.userChunk = r.chunk),
                      (u.userComplete = r.complete),
                      (u.userError = r.error),
                      (r.step = k(r.step)),
                      (r.chunk = k(r.chunk)),
                      (r.complete = k(r.complete)),
                      (r.error = k(r.error)),
                      delete r.worker,
                      void u.postMessage({
                        input: n,
                        config: r,
                        workerId: u.id
                      })
                    );
                  }
                  var p = null;
                  return (
                    o.NODE_STREAM_INPUT,
                    "string" == typeof n
                      ? (p = r.download ? new c(r) : new f(r))
                      : !0 === n.readable && k(n.read) && k(n.on)
                      ? (p = new d(r))
                      : ((t.File && n instanceof File) ||
                          n instanceof Object) &&
                        (p = new s(r)),
                    p.stream(n)
                  );
                },
                unparse: function(e, t) {
                  var n = !1,
                    r = !0,
                    a = ",",
                    i = "\r\n",
                    l = '"',
                    u = l + l,
                    c = !1,
                    s = null;
                  !(function() {
                    if ("object" == typeof t) {
                      if (
                        ("string" != typeof t.delimiter ||
                          o.BAD_DELIMITERS.filter(function(e) {
                            return -1 !== t.delimiter.indexOf(e);
                          }).length ||
                          (a = t.delimiter),
                        ("boolean" == typeof t.quotes ||
                          "function" == typeof t.quotes ||
                          Array.isArray(t.quotes)) &&
                          (n = t.quotes),
                        ("boolean" != typeof t.skipEmptyLines &&
                          "string" != typeof t.skipEmptyLines) ||
                          (c = t.skipEmptyLines),
                        "string" == typeof t.newline && (i = t.newline),
                        "string" == typeof t.quoteChar && (l = t.quoteChar),
                        "boolean" == typeof t.header && (r = t.header),
                        Array.isArray(t.columns))
                      ) {
                        if (0 === t.columns.length)
                          throw new Error("Option columns is empty");
                        s = t.columns;
                      }
                      void 0 !== t.escapeChar && (u = t.escapeChar + l);
                    }
                  })();
                  var f = new RegExp(h(l), "g");
                  if (
                    ("string" == typeof e && (e = JSON.parse(e)),
                    Array.isArray(e))
                  ) {
                    if (!e.length || Array.isArray(e[0])) return p(null, e, c);
                    if ("object" == typeof e[0]) return p(s || d(e[0]), e, c);
                  } else if ("object" == typeof e)
                    return (
                      "string" == typeof e.data &&
                        (e.data = JSON.parse(e.data)),
                      Array.isArray(e.data) &&
                        (e.fields || (e.fields = e.meta && e.meta.fields),
                        e.fields ||
                          (e.fields = Array.isArray(e.data[0])
                            ? e.fields
                            : d(e.data[0])),
                        Array.isArray(e.data[0]) ||
                          "object" == typeof e.data[0] ||
                          (e.data = [e.data])),
                      p(e.fields || [], e.data || [], c)
                    );
                  throw new Error("Unable to serialize unrecognized input");
                  function d(e) {
                    if ("object" != typeof e) return [];
                    var t = [];
                    for (var n in e) t.push(n);
                    return t;
                  }
                  function p(e, t, n) {
                    var o = "";
                    "string" == typeof e && (e = JSON.parse(e)),
                      "string" == typeof t && (t = JSON.parse(t));
                    var l = Array.isArray(e) && 0 < e.length,
                      u = !Array.isArray(t[0]);
                    if (l && r) {
                      for (var c = 0; c < e.length; c++)
                        0 < c && (o += a), (o += m(e[c], c));
                      0 < t.length && (o += i);
                    }
                    for (var s = 0; s < t.length; s++) {
                      var f = l ? e.length : t[s].length,
                        d = !1,
                        p = l
                          ? 0 === Object.keys(t[s]).length
                          : 0 === t[s].length;
                      if (
                        (n &&
                          !l &&
                          (d =
                            "greedy" === n
                              ? "" === t[s].join("").trim()
                              : 1 === t[s].length && 0 === t[s][0].length),
                        "greedy" === n && l)
                      ) {
                        for (var h = [], v = 0; v < f; v++) {
                          var g = u ? e[v] : v;
                          h.push(t[s][g]);
                        }
                        d = "" === h.join("").trim();
                      }
                      if (!d) {
                        for (var y = 0; y < f; y++) {
                          0 < y && !p && (o += a);
                          var b = l && u ? e[y] : y;
                          o += m(t[s][b], y);
                        }
                        s < t.length - 1 && (!n || (0 < f && !p)) && (o += i);
                      }
                    }
                    return o;
                  }
                  function m(e, t) {
                    if (null == e) return "";
                    if (e.constructor === Date)
                      return JSON.stringify(e).slice(1, 25);
                    var r = e.toString().replace(f, u);
                    return ("boolean" == typeof n && n) ||
                      ("function" == typeof n && n(e, t)) ||
                      (Array.isArray(n) && n[t]) ||
                      (function(e, t) {
                        for (var n = 0; n < t.length; n++)
                          if (-1 < e.indexOf(t[n])) return !0;
                        return !1;
                      })(r, o.BAD_DELIMITERS) ||
                      -1 < r.indexOf(a) ||
                      " " === r.charAt(0) ||
                      " " === r.charAt(r.length - 1)
                      ? l + r + l
                      : r;
                  }
                }
              };
            if (
              ((o.RECORD_SEP = String.fromCharCode(30)),
              (o.UNIT_SEP = String.fromCharCode(31)),
              (o.BYTE_ORDER_MARK = "\ufeff"),
              (o.BAD_DELIMITERS = ["\r", "\n", '"', o.BYTE_ORDER_MARK]),
              (o.WORKERS_SUPPORTED = !n && !!t.Worker),
              (o.NODE_STREAM_INPUT = 1),
              (o.LocalChunkSize = 10485760),
              (o.RemoteChunkSize = 5242880),
              (o.DefaultDelimiter = ","),
              (o.Parser = m),
              (o.ParserHandle = p),
              (o.NetworkStreamer = c),
              (o.FileStreamer = s),
              (o.StringStreamer = f),
              (o.ReadableStreamStreamer = d),
              t.jQuery)
            ) {
              var l = t.jQuery;
              l.fn.parse = function(e) {
                var n = e.config || {},
                  r = [];
                return (
                  this.each(function(e) {
                    if (
                      "INPUT" !==
                        l(this)
                          .prop("tagName")
                          .toUpperCase() ||
                      "file" !==
                        l(this)
                          .attr("type")
                          .toLowerCase() ||
                      !t.FileReader ||
                      !this.files ||
                      0 === this.files.length
                    )
                      return !0;
                    for (var a = 0; a < this.files.length; a++)
                      r.push({
                        file: this.files[a],
                        inputElem: this,
                        instanceConfig: l.extend({}, n)
                      });
                  }),
                  a(),
                  this
                );
                function a() {
                  if (0 !== r.length) {
                    var t,
                      n,
                      a,
                      u = r[0];
                    if (k(e.before)) {
                      var c = e.before(u.file, u.inputElem);
                      if ("object" == typeof c) {
                        if ("abort" === c.action)
                          return (
                            (t = u.file),
                            (n = u.inputElem),
                            (a = c.reason),
                            void (
                              k(e.error) &&
                              e.error({ name: "AbortError" }, t, n, a)
                            )
                          );
                        if ("skip" === c.action) return void i();
                        "object" == typeof c.config &&
                          (u.instanceConfig = l.extend(
                            u.instanceConfig,
                            c.config
                          ));
                      } else if ("skip" === c) return void i();
                    }
                    var s = u.instanceConfig.complete;
                    (u.instanceConfig.complete = function(e) {
                      k(s) && s(e, u.file, u.inputElem), i();
                    }),
                      o.parse(u.file, u.instanceConfig);
                  } else k(e.complete) && e.complete();
                }
                function i() {
                  r.splice(0, 1), a();
                }
              };
            }
            function u(e) {
              (this._handle = null),
                (this._finished = !1),
                (this._completed = !1),
                (this._halted = !1),
                (this._input = null),
                (this._baseIndex = 0),
                (this._partialLine = ""),
                (this._rowCount = 0),
                (this._start = 0),
                (this._nextChunk = null),
                (this.isFirstChunk = !0),
                (this._completeResults = { data: [], errors: [], meta: {} }),
                function(e) {
                  var t = b(e);
                  (t.chunkSize = parseInt(t.chunkSize)),
                    e.step || e.chunk || (t.chunkSize = null),
                    (this._handle = new p(t)),
                    ((this._handle.streamer = this)._config = t);
                }.call(this, e),
                (this.parseChunk = function(e, n) {
                  if (this.isFirstChunk && k(this._config.beforeFirstChunk)) {
                    var a = this._config.beforeFirstChunk(e);
                    void 0 !== a && (e = a);
                  }
                  (this.isFirstChunk = !1), (this._halted = !1);
                  var i = this._partialLine + e;
                  this._partialLine = "";
                  var l = this._handle.parse(
                    i,
                    this._baseIndex,
                    !this._finished
                  );
                  if (!this._handle.paused() && !this._handle.aborted()) {
                    var u = l.meta.cursor;
                    this._finished ||
                      ((this._partialLine = i.substring(u - this._baseIndex)),
                      (this._baseIndex = u)),
                      l && l.data && (this._rowCount += l.data.length);
                    var c =
                      this._finished ||
                      (this._config.preview &&
                        this._rowCount >= this._config.preview);
                    if (r)
                      t.postMessage({
                        results: l,
                        workerId: o.WORKER_ID,
                        finished: c
                      });
                    else if (k(this._config.chunk) && !n) {
                      if (
                        (this._config.chunk(l, this._handle),
                        this._handle.paused() || this._handle.aborted())
                      )
                        return void (this._halted = !0);
                      (l = void 0), (this._completeResults = void 0);
                    }
                    return (
                      this._config.step ||
                        this._config.chunk ||
                        ((this._completeResults.data = this._completeResults.data.concat(
                          l.data
                        )),
                        (this._completeResults.errors = this._completeResults.errors.concat(
                          l.errors
                        )),
                        (this._completeResults.meta = l.meta)),
                      this._completed ||
                        !c ||
                        !k(this._config.complete) ||
                        (l && l.meta.aborted) ||
                        (this._config.complete(
                          this._completeResults,
                          this._input
                        ),
                        (this._completed = !0)),
                      c || (l && l.meta.paused) || this._nextChunk(),
                      l
                    );
                  }
                  this._halted = !0;
                }),
                (this._sendError = function(e) {
                  k(this._config.error)
                    ? this._config.error(e)
                    : r &&
                      this._config.error &&
                      t.postMessage({
                        workerId: o.WORKER_ID,
                        error: e,
                        finished: !1
                      });
                });
            }
            function c(e) {
              var t;
              (e = e || {}).chunkSize || (e.chunkSize = o.RemoteChunkSize),
                u.call(this, e),
                (this._nextChunk = n
                  ? function() {
                      this._readChunk(), this._chunkLoaded();
                    }
                  : function() {
                      this._readChunk();
                    }),
                (this.stream = function(e) {
                  (this._input = e), this._nextChunk();
                }),
                (this._readChunk = function() {
                  if (this._finished) this._chunkLoaded();
                  else {
                    if (
                      ((t = new XMLHttpRequest()),
                      this._config.withCredentials &&
                        (t.withCredentials = this._config.withCredentials),
                      n ||
                        ((t.onload = w(this._chunkLoaded, this)),
                        (t.onerror = w(this._chunkError, this))),
                      t.open("GET", this._input, !n),
                      this._config.downloadRequestHeaders)
                    ) {
                      var e = this._config.downloadRequestHeaders;
                      for (var r in e) t.setRequestHeader(r, e[r]);
                    }
                    if (this._config.chunkSize) {
                      var a = this._start + this._config.chunkSize - 1;
                      t.setRequestHeader(
                        "Range",
                        "bytes=" + this._start + "-" + a
                      );
                    }
                    try {
                      t.send();
                    } catch (e) {
                      this._chunkError(e.message);
                    }
                    n && 0 === t.status && this._chunkError();
                  }
                }),
                (this._chunkLoaded = function() {
                  4 === t.readyState &&
                    (t.status < 200 || 400 <= t.status
                      ? this._chunkError()
                      : ((this._start += t.responseText.length),
                        (this._finished =
                          !this._config.chunkSize ||
                          this._start >=
                            (function(e) {
                              var t = e.getResponseHeader("Content-Range");
                              return null === t
                                ? -1
                                : parseInt(t.substr(t.lastIndexOf("/") + 1));
                            })(t)),
                        this.parseChunk(t.responseText)));
                }),
                (this._chunkError = function(e) {
                  var n = t.statusText || e;
                  this._sendError(new Error(n));
                });
            }
            function s(e) {
              var t, n;
              (e = e || {}).chunkSize || (e.chunkSize = o.LocalChunkSize),
                u.call(this, e);
              var r = "undefined" != typeof FileReader;
              (this.stream = function(e) {
                (this._input = e),
                  (n = e.slice || e.webkitSlice || e.mozSlice),
                  r
                    ? (((t = new FileReader()).onload = w(
                        this._chunkLoaded,
                        this
                      )),
                      (t.onerror = w(this._chunkError, this)))
                    : (t = new FileReaderSync()),
                  this._nextChunk();
              }),
                (this._nextChunk = function() {
                  this._finished ||
                    (this._config.preview &&
                      !(this._rowCount < this._config.preview)) ||
                    this._readChunk();
                }),
                (this._readChunk = function() {
                  var e = this._input;
                  if (this._config.chunkSize) {
                    var a = Math.min(
                      this._start + this._config.chunkSize,
                      this._input.size
                    );
                    e = n.call(e, this._start, a);
                  }
                  var i = t.readAsText(e, this._config.encoding);
                  r || this._chunkLoaded({ target: { result: i } });
                }),
                (this._chunkLoaded = function(e) {
                  (this._start += this._config.chunkSize),
                    (this._finished =
                      !this._config.chunkSize ||
                      this._start >= this._input.size),
                    this.parseChunk(e.target.result);
                }),
                (this._chunkError = function() {
                  this._sendError(t.error);
                });
            }
            function f(e) {
              var t;
              u.call(this, (e = e || {})),
                (this.stream = function(e) {
                  return (t = e), this._nextChunk();
                }),
                (this._nextChunk = function() {
                  if (!this._finished) {
                    var e = this._config.chunkSize,
                      n = e ? t.substr(0, e) : t;
                    return (
                      (t = e ? t.substr(e) : ""),
                      (this._finished = !t),
                      this.parseChunk(n)
                    );
                  }
                });
            }
            function d(e) {
              u.call(this, (e = e || {}));
              var t = [],
                n = !0,
                r = !1;
              (this.pause = function() {
                u.prototype.pause.apply(this, arguments), this._input.pause();
              }),
                (this.resume = function() {
                  u.prototype.resume.apply(this, arguments),
                    this._input.resume();
                }),
                (this.stream = function(e) {
                  (this._input = e),
                    this._input.on("data", this._streamData),
                    this._input.on("end", this._streamEnd),
                    this._input.on("error", this._streamError);
                }),
                (this._checkIsFinished = function() {
                  r && 1 === t.length && (this._finished = !0);
                }),
                (this._nextChunk = function() {
                  this._checkIsFinished(),
                    t.length ? this.parseChunk(t.shift()) : (n = !0);
                }),
                (this._streamData = w(function(e) {
                  try {
                    t.push(
                      "string" == typeof e
                        ? e
                        : e.toString(this._config.encoding)
                    ),
                      n &&
                        ((n = !1),
                        this._checkIsFinished(),
                        this.parseChunk(t.shift()));
                  } catch (e) {
                    this._streamError(e);
                  }
                }, this)),
                (this._streamError = w(function(e) {
                  this._streamCleanUp(), this._sendError(e);
                }, this)),
                (this._streamEnd = w(function() {
                  this._streamCleanUp(), (r = !0), this._streamData("");
                }, this)),
                (this._streamCleanUp = w(function() {
                  this._input.removeListener("data", this._streamData),
                    this._input.removeListener("end", this._streamEnd),
                    this._input.removeListener("error", this._streamError);
                }, this));
            }
            function p(e) {
              var t,
                n,
                r,
                a = Math.pow(2, 53),
                i = -a,
                l = /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,
                u = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
                c = this,
                s = 0,
                f = 0,
                d = !1,
                p = !1,
                v = [],
                g = { data: [], errors: [], meta: {} };
              if (k(e.step)) {
                var y = e.step;
                e.step = function(t) {
                  if (((g = t), _())) x();
                  else {
                    if ((x(), 0 === g.data.length)) return;
                    (s += t.data.length),
                      e.preview && s > e.preview ? n.abort() : y(g, c);
                  }
                };
              }
              function w(t) {
                return "greedy" === e.skipEmptyLines
                  ? "" === t.join("").trim()
                  : 1 === t.length && 0 === t[0].length;
              }
              function x() {
                if (
                  (g &&
                    r &&
                    (T(
                      "Delimiter",
                      "UndetectableDelimiter",
                      "Unable to auto-detect delimiting character; defaulted to '" +
                        o.DefaultDelimiter +
                        "'"
                    ),
                    (r = !1)),
                  e.skipEmptyLines)
                )
                  for (var t = 0; t < g.data.length; t++)
                    w(g.data[t]) && g.data.splice(t--, 1);
                return (
                  _() &&
                    (function() {
                      if (g)
                        if (Array.isArray(g.data[0])) {
                          for (var t = 0; _() && t < g.data.length; t++)
                            g.data[t].forEach(n);
                          g.data.splice(0, 1);
                        } else g.data.forEach(n);
                      function n(t) {
                        k(e.transformHeader) && (t = e.transformHeader(t)),
                          v.push(t);
                      }
                    })(),
                  (function() {
                    if (!g || (!e.header && !e.dynamicTyping && !e.transform))
                      return g;
                    function t(t, n) {
                      var r,
                        a = e.header ? {} : [];
                      for (r = 0; r < t.length; r++) {
                        var i = r,
                          o = t[r];
                        e.header &&
                          (i = r >= v.length ? "__parsed_extra" : v[r]),
                          e.transform && (o = e.transform(o, i)),
                          (o = E(i, o)),
                          "__parsed_extra" === i
                            ? ((a[i] = a[i] || []), a[i].push(o))
                            : (a[i] = o);
                      }
                      return (
                        e.header &&
                          (r > v.length
                            ? T(
                                "FieldMismatch",
                                "TooManyFields",
                                "Too many fields: expected " +
                                  v.length +
                                  " fields but parsed " +
                                  r,
                                f + n
                              )
                            : r < v.length &&
                              T(
                                "FieldMismatch",
                                "TooFewFields",
                                "Too few fields: expected " +
                                  v.length +
                                  " fields but parsed " +
                                  r,
                                f + n
                              )),
                        a
                      );
                    }
                    var n = 1;
                    return (
                      !g.data.length || Array.isArray(g.data[0])
                        ? ((g.data = g.data.map(t)), (n = g.data.length))
                        : (g.data = t(g.data, 0)),
                      e.header && g.meta && (g.meta.fields = v),
                      (f += n),
                      g
                    );
                  })()
                );
              }
              function _() {
                return e.header && 0 === v.length;
              }
              function E(t, n) {
                return (
                  (r = t),
                  e.dynamicTypingFunction &&
                    void 0 === e.dynamicTyping[r] &&
                    (e.dynamicTyping[r] = e.dynamicTypingFunction(r)),
                  !0 === (e.dynamicTyping[r] || e.dynamicTyping)
                    ? "true" === n ||
                      "TRUE" === n ||
                      ("false" !== n &&
                        "FALSE" !== n &&
                        ((function(e) {
                          if (l.test(e)) {
                            var t = parseFloat(e);
                            if (i < t && t < a) return !0;
                          }
                          return !1;
                        })(n)
                          ? parseFloat(n)
                          : u.test(n)
                          ? new Date(n)
                          : "" === n
                          ? null
                          : n))
                    : n
                );
                var r;
              }
              function T(e, t, n, r) {
                g.errors.push({ type: e, code: t, message: n, row: r });
              }
              (this.parse = function(a, i, l) {
                var u = e.quoteChar || '"';
                if (
                  (e.newline ||
                    (e.newline = (function(e, t) {
                      e = e.substr(0, 1048576);
                      var n = new RegExp(h(t) + "([^]*?)" + h(t), "gm"),
                        r = (e = e.replace(n, "")).split("\r"),
                        a = e.split("\n"),
                        i = 1 < a.length && a[0].length < r[0].length;
                      if (1 === r.length || i) return "\n";
                      for (var o = 0, l = 0; l < r.length; l++)
                        "\n" === r[l][0] && o++;
                      return o >= r.length / 2 ? "\r\n" : "\r";
                    })(a, u)),
                  (r = !1),
                  e.delimiter)
                )
                  k(e.delimiter) &&
                    ((e.delimiter = e.delimiter(a)),
                    (g.meta.delimiter = e.delimiter));
                else {
                  var c = (function(t, n, r, a, i) {
                    var l, u, c, s;
                    i = i || [",", "\t", "|", ";", o.RECORD_SEP, o.UNIT_SEP];
                    for (var f = 0; f < i.length; f++) {
                      var d = i[f],
                        p = 0,
                        h = 0,
                        v = 0;
                      c = void 0;
                      for (
                        var g = new m({
                            comments: a,
                            delimiter: d,
                            newline: n,
                            preview: 10
                          }).parse(t),
                          y = 0;
                        y < g.data.length;
                        y++
                      )
                        if (r && w(g.data[y])) v++;
                        else {
                          var b = g.data[y].length;
                          (h += b),
                            void 0 !== c
                              ? 0 < b && ((p += Math.abs(b - c)), (c = b))
                              : (c = b);
                        }
                      0 < g.data.length && (h /= g.data.length - v),
                        (void 0 === u || p <= u) &&
                          (void 0 === s || s < h) &&
                          1.99 < h &&
                          ((u = p), (l = d), (s = h));
                    }
                    return {
                      successful: !!(e.delimiter = l),
                      bestDelimiter: l
                    };
                  })(
                    a,
                    e.newline,
                    e.skipEmptyLines,
                    e.comments,
                    e.delimitersToGuess
                  );
                  c.successful
                    ? (e.delimiter = c.bestDelimiter)
                    : ((r = !0), (e.delimiter = o.DefaultDelimiter)),
                    (g.meta.delimiter = e.delimiter);
                }
                var s = b(e);
                return (
                  e.preview && e.header && s.preview++,
                  (t = a),
                  (n = new m(s)),
                  (g = n.parse(t, i, l)),
                  x(),
                  d ? { meta: { paused: !0 } } : g || { meta: { paused: !1 } }
                );
              }),
                (this.paused = function() {
                  return d;
                }),
                (this.pause = function() {
                  (d = !0), n.abort(), (t = t.substr(n.getCharIndex()));
                }),
                (this.resume = function() {
                  c.streamer._halted
                    ? ((d = !1), c.streamer.parseChunk(t, !0))
                    : setTimeout(this.resume, 3);
                }),
                (this.aborted = function() {
                  return p;
                }),
                (this.abort = function() {
                  (p = !0),
                    n.abort(),
                    (g.meta.aborted = !0),
                    k(e.complete) && e.complete(g),
                    (t = "");
                });
            }
            function h(e) {
              return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            }
            function m(e) {
              var t,
                n = (e = e || {}).delimiter,
                r = e.newline,
                a = e.comments,
                i = e.step,
                l = e.preview,
                u = e.fastMode,
                c = (t = void 0 === e.quoteChar ? '"' : e.quoteChar);
              if (
                (void 0 !== e.escapeChar && (c = e.escapeChar),
                ("string" != typeof n || -1 < o.BAD_DELIMITERS.indexOf(n)) &&
                  (n = ","),
                a === n)
              )
                throw new Error("Comment character same as delimiter");
              !0 === a
                ? (a = "#")
                : ("string" != typeof a || -1 < o.BAD_DELIMITERS.indexOf(a)) &&
                  (a = !1),
                "\n" !== r && "\r" !== r && "\r\n" !== r && (r = "\n");
              var s = 0,
                f = !1;
              (this.parse = function(e, o, d) {
                if ("string" != typeof e)
                  throw new Error("Input must be a string");
                var p = e.length,
                  m = n.length,
                  v = r.length,
                  g = a.length,
                  y = k(i),
                  b = [],
                  w = [],
                  x = [],
                  _ = (s = 0);
                if (!e) return A();
                if (u || (!1 !== u && -1 === e.indexOf(t))) {
                  for (var E = e.split(r), T = 0; T < E.length; T++) {
                    if (((x = E[T]), (s += x.length), T !== E.length - 1))
                      s += r.length;
                    else if (d) return A();
                    if (!a || x.substr(0, g) !== a) {
                      if (y) {
                        if (((b = []), D(x.split(n)), F(), f)) return A();
                      } else D(x.split(n));
                      if (l && l <= T) return (b = b.slice(0, l)), A(!0);
                    }
                  }
                  return A();
                }
                for (
                  var S = e.indexOf(n, s),
                    C = e.indexOf(r, s),
                    O = new RegExp(h(c) + h(t), "g"),
                    M = e.indexOf(t, s);
                  ;

                )
                  if (e[s] !== t)
                    if (a && 0 === x.length && e.substr(s, g) === a) {
                      if (-1 === C) return A();
                      (s = C + v), (C = e.indexOf(r, s)), (S = e.indexOf(n, s));
                    } else {
                      if (-1 !== S && (S < C || -1 === C)) {
                        if (!(S < M)) {
                          x.push(e.substring(s, S)),
                            (s = S + m),
                            (S = e.indexOf(n, s));
                          continue;
                        }
                        var P = z(S, M, C);
                        if (P && void 0 !== P.nextDelim) {
                          (S = P.nextDelim),
                            (M = P.quoteSearch),
                            x.push(e.substring(s, S)),
                            (s = S + m),
                            (S = e.indexOf(n, s));
                          continue;
                        }
                      }
                      if (-1 === C) break;
                      if ((x.push(e.substring(s, C)), j(C + v), y && (F(), f)))
                        return A();
                      if (l && b.length >= l) return A(!0);
                    }
                  else
                    for (M = s, s++; ; ) {
                      if (-1 === (M = e.indexOf(t, M + 1)))
                        return (
                          d ||
                            w.push({
                              type: "Quotes",
                              code: "MissingQuotes",
                              message: "Quoted field unterminated",
                              row: b.length,
                              index: s
                            }),
                          I()
                        );
                      if (M === p - 1)
                        return I(e.substring(s, M).replace(O, t));
                      if (t !== c || e[M + 1] !== c) {
                        if (t === c || 0 === M || e[M - 1] !== c) {
                          var N = L(-1 === C ? S : Math.min(S, C));
                          if (e[M + 1 + N] === n) {
                            x.push(e.substring(s, M).replace(O, t)),
                              e[(s = M + 1 + N + m)] !== t &&
                                (M = e.indexOf(t, s)),
                              (S = e.indexOf(n, s)),
                              (C = e.indexOf(r, s));
                            break;
                          }
                          var R = L(C);
                          if (e.substr(M + 1 + R, v) === r) {
                            if (
                              (x.push(e.substring(s, M).replace(O, t)),
                              j(M + 1 + R + v),
                              (S = e.indexOf(n, s)),
                              (M = e.indexOf(t, s)),
                              y && (F(), f))
                            )
                              return A();
                            if (l && b.length >= l) return A(!0);
                            break;
                          }
                          w.push({
                            type: "Quotes",
                            code: "InvalidQuotes",
                            message:
                              "Trailing quote on quoted field is malformed",
                            row: b.length,
                            index: s
                          }),
                            M++;
                        }
                      } else M++;
                    }
                return I();
                function D(e) {
                  b.push(e), (_ = s);
                }
                function L(t) {
                  var n = 0;
                  if (-1 !== t) {
                    var r = e.substring(M + 1, t);
                    r && "" === r.trim() && (n = r.length);
                  }
                  return n;
                }
                function I(t) {
                  return (
                    d ||
                      (void 0 === t && (t = e.substr(s)),
                      x.push(t),
                      (s = p),
                      D(x),
                      y && F()),
                    A()
                  );
                }
                function j(t) {
                  (s = t), D(x), (x = []), (C = e.indexOf(r, s));
                }
                function A(e, t) {
                  return {
                    data: t ? b[0] : b,
                    errors: w,
                    meta: {
                      delimiter: n,
                      linebreak: r,
                      aborted: f,
                      truncated: !!e,
                      cursor: _ + (o || 0)
                    }
                  };
                }
                function F() {
                  i(A(void 0, !0)), (b = []), (w = []);
                }
                function z(r, a, i) {
                  var o = { nextDelim: void 0, quoteSearch: void 0 },
                    l = e.indexOf(t, a + 1);
                  if (a < r && r < l && (l < i || -1 === i)) {
                    var u = e.indexOf(n, l);
                    if (-1 === u) return o;
                    l < u && (l = e.indexOf(t, l + 1)), (o = z(u, l, i));
                  } else o = { nextDelim: r, quoteSearch: a };
                  return o;
                }
              }),
                (this.abort = function() {
                  f = !0;
                }),
                (this.getCharIndex = function() {
                  return s;
                });
            }
            function v(e) {
              var t = e.data,
                n = a[t.workerId],
                r = !1;
              if (t.error) n.userError(t.error, t.file);
              else if (t.results && t.results.data) {
                var i = {
                  abort: function() {
                    (r = !0),
                      g(t.workerId, {
                        data: [],
                        errors: [],
                        meta: { aborted: !0 }
                      });
                  },
                  pause: y,
                  resume: y
                };
                if (k(n.userStep)) {
                  for (
                    var o = 0;
                    o < t.results.data.length &&
                    (n.userStep(
                      {
                        data: t.results.data[o],
                        errors: t.results.errors,
                        meta: t.results.meta
                      },
                      i
                    ),
                    !r);
                    o++
                  );
                  delete t.results;
                } else
                  k(n.userChunk) &&
                    (n.userChunk(t.results, i, t.file), delete t.results);
              }
              t.finished && !r && g(t.workerId, t.results);
            }
            function g(e, t) {
              var n = a[e];
              k(n.userComplete) && n.userComplete(t),
                n.terminate(),
                delete a[e];
            }
            function y() {
              throw new Error("Not implemented.");
            }
            function b(e) {
              if ("object" != typeof e || null === e) return e;
              var t = Array.isArray(e) ? [] : {};
              for (var n in e) t[n] = b(e[n]);
              return t;
            }
            function w(e, t) {
              return function() {
                e.apply(t, arguments);
              };
            }
            function k(e) {
              return "function" == typeof e;
            }
            return (
              r &&
                (t.onmessage = function(e) {
                  var n = e.data;
                  if (
                    (void 0 === o.WORKER_ID && n && (o.WORKER_ID = n.workerId),
                    "string" == typeof n.input)
                  )
                    t.postMessage({
                      workerId: o.WORKER_ID,
                      results: o.parse(n.input, n.config),
                      finished: !0
                    });
                  else if (
                    (t.File && n.input instanceof File) ||
                    n.input instanceof Object
                  ) {
                    var r = o.parse(n.input, n.config);
                    r &&
                      t.postMessage({
                        workerId: o.WORKER_ID,
                        results: r,
                        finished: !0
                      });
                  }
                }),
              ((c.prototype = Object.create(u.prototype)).constructor = c),
              ((s.prototype = Object.create(u.prototype)).constructor = s),
              ((f.prototype = Object.create(f.prototype)).constructor = f),
              ((d.prototype = Object.create(u.prototype)).constructor = d),
              o
            );
          })
            ? r.apply(t, a)
            : r) || (e.exports = i);
  },
  function(e, t) {
    function n() {
      return (
        (e.exports = n =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
        n.apply(this, arguments)
      );
    }
    e.exports = n;
  },
  function(e, t, n) {
    var r = n(54);
    e.exports = function(e, t) {
      if (null == e) return {};
      var n,
        a,
        i = r(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (a = 0; a < o.length; a++)
          (n = o[a]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (i[n] = e[n]));
      }
      return i;
    };
  },
  function(e, t, n) {
    var r = n(32),
      a = n(57),
      i = n(59),
      o = "Expected a function",
      l = Math.max,
      u = Math.min;
    e.exports = function(e, t, n) {
      var c,
        s,
        f,
        d,
        p,
        h,
        m = 0,
        v = !1,
        g = !1,
        y = !0;
      if ("function" != typeof e) throw new TypeError(o);
      function b(t) {
        var n = c,
          r = s;
        return (c = s = void 0), (m = t), (d = e.apply(r, n));
      }
      function w(e) {
        var n = e - h;
        return void 0 === h || n >= t || n < 0 || (g && e - m >= f);
      }
      function k() {
        var e = a();
        if (w(e)) return x(e);
        p = setTimeout(
          k,
          (function(e) {
            var n = t - (e - h);
            return g ? u(n, f - (e - m)) : n;
          })(e)
        );
      }
      function x(e) {
        return (p = void 0), y && c ? b(e) : ((c = s = void 0), d);
      }
      function _() {
        var e = a(),
          n = w(e);
        if (((c = arguments), (s = this), (h = e), n)) {
          if (void 0 === p)
            return (function(e) {
              return (m = e), (p = setTimeout(k, t)), v ? b(e) : d;
            })(h);
          if (g) return clearTimeout(p), (p = setTimeout(k, t)), b(h);
        }
        return void 0 === p && (p = setTimeout(k, t)), d;
      }
      return (
        (t = i(t) || 0),
        r(n) &&
          ((v = !!n.leading),
          (f = (g = "maxWait" in n) ? l(i(n.maxWait) || 0, t) : f),
          (y = "trailing" in n ? !!n.trailing : y)),
        (_.cancel = function() {
          void 0 !== p && clearTimeout(p), (m = 0), (c = h = s = p = void 0);
        }),
        (_.flush = function() {
          return void 0 === p ? d : x(a());
        }),
        _
      );
    };
  },
  function(e, t, n) {
    "use strict";
    (function(e) {
      var n = (function() {
          if ("undefined" != typeof Map) return Map;
          function e(e, t) {
            var n = -1;
            return (
              e.some(function(e, r) {
                return e[0] === t && ((n = r), !0);
              }),
              n
            );
          }
          return (function() {
            function t() {
              this.__entries__ = [];
            }
            var n = { size: { configurable: !0 } };
            return (
              (n.size.get = function() {
                return this.__entries__.length;
              }),
              (t.prototype.get = function(t) {
                var n = e(this.__entries__, t),
                  r = this.__entries__[n];
                return r && r[1];
              }),
              (t.prototype.set = function(t, n) {
                var r = e(this.__entries__, t);
                ~r
                  ? (this.__entries__[r][1] = n)
                  : this.__entries__.push([t, n]);
              }),
              (t.prototype.delete = function(t) {
                var n = this.__entries__,
                  r = e(n, t);
                ~r && n.splice(r, 1);
              }),
              (t.prototype.has = function(t) {
                return !!~e(this.__entries__, t);
              }),
              (t.prototype.clear = function() {
                this.__entries__.splice(0);
              }),
              (t.prototype.forEach = function(e, t) {
                void 0 === t && (t = null);
                for (var n = 0, r = this.__entries__; n < r.length; n += 1) {
                  var a = r[n];
                  e.call(t, a[1], a[0]);
                }
              }),
              Object.defineProperties(t.prototype, n),
              t
            );
          })();
        })(),
        r =
          "undefined" != typeof window &&
          "undefined" != typeof document &&
          window.document === document,
        a =
          void 0 !== e && e.Math === Math
            ? e
            : "undefined" != typeof self && self.Math === Math
            ? self
            : "undefined" != typeof window && window.Math === Math
            ? window
            : Function("return this")(),
        i =
          "function" == typeof requestAnimationFrame
            ? requestAnimationFrame.bind(a)
            : function(e) {
                return setTimeout(function() {
                  return e(Date.now());
                }, 1e3 / 60);
              },
        o = 2,
        l = [
          "top",
          "right",
          "bottom",
          "left",
          "width",
          "height",
          "size",
          "weight"
        ],
        u = "undefined" != typeof MutationObserver,
        c = function() {
          (this.connected_ = !1),
            (this.mutationEventsAdded_ = !1),
            (this.mutationsObserver_ = null),
            (this.observers_ = []),
            (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
            (this.refresh = (function(e, t) {
              var n = !1,
                r = !1,
                a = 0;
              function l() {
                n && ((n = !1), e()), r && c();
              }
              function u() {
                i(l);
              }
              function c() {
                var e = Date.now();
                if (n) {
                  if (e - a < o) return;
                  r = !0;
                } else (n = !0), (r = !1), setTimeout(u, t);
                a = e;
              }
              return c;
            })(this.refresh.bind(this), 20));
        };
      (c.prototype.addObserver = function(e) {
        ~this.observers_.indexOf(e) || this.observers_.push(e),
          this.connected_ || this.connect_();
      }),
        (c.prototype.removeObserver = function(e) {
          var t = this.observers_,
            n = t.indexOf(e);
          ~n && t.splice(n, 1),
            !t.length && this.connected_ && this.disconnect_();
        }),
        (c.prototype.refresh = function() {
          this.updateObservers_() && this.refresh();
        }),
        (c.prototype.updateObservers_ = function() {
          var e = this.observers_.filter(function(e) {
            return e.gatherActive(), e.hasActive();
          });
          return (
            e.forEach(function(e) {
              return e.broadcastActive();
            }),
            e.length > 0
          );
        }),
        (c.prototype.connect_ = function() {
          r &&
            !this.connected_ &&
            (document.addEventListener("transitionend", this.onTransitionEnd_),
            window.addEventListener("resize", this.refresh),
            u
              ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
                this.mutationsObserver_.observe(document, {
                  attributes: !0,
                  childList: !0,
                  characterData: !0,
                  subtree: !0
                }))
              : (document.addEventListener("DOMSubtreeModified", this.refresh),
                (this.mutationEventsAdded_ = !0)),
            (this.connected_ = !0));
        }),
        (c.prototype.disconnect_ = function() {
          r &&
            this.connected_ &&
            (document.removeEventListener(
              "transitionend",
              this.onTransitionEnd_
            ),
            window.removeEventListener("resize", this.refresh),
            this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
            this.mutationEventsAdded_ &&
              document.removeEventListener("DOMSubtreeModified", this.refresh),
            (this.mutationsObserver_ = null),
            (this.mutationEventsAdded_ = !1),
            (this.connected_ = !1));
        }),
        (c.prototype.onTransitionEnd_ = function(e) {
          var t = e.propertyName;
          void 0 === t && (t = ""),
            l.some(function(e) {
              return !!~t.indexOf(e);
            }) && this.refresh();
        }),
        (c.getInstance = function() {
          return this.instance_ || (this.instance_ = new c()), this.instance_;
        }),
        (c.instance_ = null);
      var s = function(e, t) {
          for (var n = 0, r = Object.keys(t); n < r.length; n += 1) {
            var a = r[n];
            Object.defineProperty(e, a, {
              value: t[a],
              enumerable: !1,
              writable: !1,
              configurable: !0
            });
          }
          return e;
        },
        f = function(e) {
          return (e && e.ownerDocument && e.ownerDocument.defaultView) || a;
        },
        d = y(0, 0, 0, 0);
      function p(e) {
        return parseFloat(e) || 0;
      }
      function h(e) {
        for (var t = [], n = arguments.length - 1; n-- > 0; )
          t[n] = arguments[n + 1];
        return t.reduce(function(t, n) {
          return t + p(e["border-" + n + "-width"]);
        }, 0);
      }
      function m(e) {
        var t = e.clientWidth,
          n = e.clientHeight;
        if (!t && !n) return d;
        var r = f(e).getComputedStyle(e),
          a = (function(e) {
            for (
              var t = {}, n = 0, r = ["top", "right", "bottom", "left"];
              n < r.length;
              n += 1
            ) {
              var a = r[n],
                i = e["padding-" + a];
              t[a] = p(i);
            }
            return t;
          })(r),
          i = a.left + a.right,
          o = a.top + a.bottom,
          l = p(r.width),
          u = p(r.height);
        if (
          ("border-box" === r.boxSizing &&
            (Math.round(l + i) !== t && (l -= h(r, "left", "right") + i),
            Math.round(u + o) !== n && (u -= h(r, "top", "bottom") + o)),
          !(function(e) {
            return e === f(e).document.documentElement;
          })(e))
        ) {
          var c = Math.round(l + i) - t,
            s = Math.round(u + o) - n;
          1 !== Math.abs(c) && (l -= c), 1 !== Math.abs(s) && (u -= s);
        }
        return y(a.left, a.top, l, u);
      }
      var v =
        "undefined" != typeof SVGGraphicsElement
          ? function(e) {
              return e instanceof f(e).SVGGraphicsElement;
            }
          : function(e) {
              return (
                e instanceof f(e).SVGElement && "function" == typeof e.getBBox
              );
            };
      function g(e) {
        return r
          ? v(e)
            ? (function(e) {
                var t = e.getBBox();
                return y(0, 0, t.width, t.height);
              })(e)
            : m(e)
          : d;
      }
      function y(e, t, n, r) {
        return { x: e, y: t, width: n, height: r };
      }
      var b = function(e) {
        (this.broadcastWidth = 0),
          (this.broadcastHeight = 0),
          (this.contentRect_ = y(0, 0, 0, 0)),
          (this.target = e);
      };
      (b.prototype.isActive = function() {
        var e = g(this.target);
        return (
          (this.contentRect_ = e),
          e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
        );
      }),
        (b.prototype.broadcastRect = function() {
          var e = this.contentRect_;
          return (
            (this.broadcastWidth = e.width),
            (this.broadcastHeight = e.height),
            e
          );
        });
      var w = function(e, t) {
          var n = (function(e) {
            var t = e.x,
              n = e.y,
              r = e.width,
              a = e.height,
              i =
                "undefined" != typeof DOMRectReadOnly
                  ? DOMRectReadOnly
                  : Object,
              o = Object.create(i.prototype);
            return (
              s(o, {
                x: t,
                y: n,
                width: r,
                height: a,
                top: n,
                right: t + r,
                bottom: a + n,
                left: t
              }),
              o
            );
          })(t);
          s(this, { target: e, contentRect: n });
        },
        k = function(e, t, r) {
          if (
            ((this.activeObservations_ = []),
            (this.observations_ = new n()),
            "function" != typeof e)
          )
            throw new TypeError(
              "The callback provided as parameter 1 is not a function."
            );
          (this.callback_ = e), (this.controller_ = t), (this.callbackCtx_ = r);
        };
      (k.prototype.observe = function(e) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if ("undefined" != typeof Element && Element instanceof Object) {
          if (!(e instanceof f(e).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var t = this.observations_;
          t.has(e) ||
            (t.set(e, new b(e)),
            this.controller_.addObserver(this),
            this.controller_.refresh());
        }
      }),
        (k.prototype.unobserve = function(e) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" != typeof Element && Element instanceof Object) {
            if (!(e instanceof f(e).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var t = this.observations_;
            t.has(e) &&
              (t.delete(e), t.size || this.controller_.removeObserver(this));
          }
        }),
        (k.prototype.disconnect = function() {
          this.clearActive(),
            this.observations_.clear(),
            this.controller_.removeObserver(this);
        }),
        (k.prototype.gatherActive = function() {
          var e = this;
          this.clearActive(),
            this.observations_.forEach(function(t) {
              t.isActive() && e.activeObservations_.push(t);
            });
        }),
        (k.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var e = this.callbackCtx_,
              t = this.activeObservations_.map(function(e) {
                return new w(e.target, e.broadcastRect());
              });
            this.callback_.call(e, t, e), this.clearActive();
          }
        }),
        (k.prototype.clearActive = function() {
          this.activeObservations_.splice(0);
        }),
        (k.prototype.hasActive = function() {
          return this.activeObservations_.length > 0;
        });
      var x = "undefined" != typeof WeakMap ? new WeakMap() : new n(),
        _ = function(e) {
          if (!(this instanceof _))
            throw new TypeError("Cannot call a class as a function.");
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          var t = c.getInstance(),
            n = new k(e, t, this);
          x.set(this, n);
        };
      ["observe", "unobserve", "disconnect"].forEach(function(e) {
        _.prototype[e] = function() {
          return (t = x.get(this))[e].apply(t, arguments);
          var t;
        };
      });
      var E = void 0 !== a.ResizeObserver ? a.ResizeObserver : _;
      t.a = E;
    }.call(this, n(23)));
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function(e, t) {
        if (!e) return;
        if (e.target)
          for (e = (t = e).target.ownerSVGElement; e.ownerSVGElement; )
            e = e.ownerSVGElement;
        var n = t,
          a = n.clientX,
          i = n.clientY;
        t.changedTouches &&
          ((a = t.changedTouches[0].clientX),
          (i = t.changedTouches[0].clientY));
        if (e.createSVGPoint) {
          var o = e.createSVGPoint();
          return (
            (o.x = a),
            (o.y = i),
            (o = o.matrixTransform(e.getScreenCTM().inverse())),
            new r.Point({ x: o.x, y: o.y })
          );
        }
        var l = e.getBoundingClientRect();
        return new r.Point({
          x: a - l.left - e.clientLeft,
          y: i - l.top - e.clientTop
        });
      });
    var r = n(5);
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.withTooltipPropTypes = void 0);
    var r =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      a = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
    t.default = function(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : {
              style: {
                position: "relative",
                width: "inherit",
                height: "inherit"
              }
            };
      return (function(n) {
        function o(e) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, o);
          var t = (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          })(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, e));
          return (
            (t.state = {
              tooltipOpen: !1,
              tooltipLeft: void 0,
              tooltipTop: void 0,
              tooltipData: void 0
            }),
            (t.updateTooltip = t.updateTooltip.bind(t)),
            (t.showTooltip = t.showTooltip.bind(t)),
            (t.hideTooltip = t.hideTooltip.bind(t)),
            t
          );
        }
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(o, n),
          a(o, [
            {
              key: "updateTooltip",
              value: function(e) {
                var t = e.tooltipOpen,
                  n = e.tooltipLeft,
                  a = e.tooltipTop,
                  i = e.tooltipData;
                this.setState(function(e) {
                  return r({}, e, {
                    tooltipOpen: t,
                    tooltipLeft: n,
                    tooltipTop: a,
                    tooltipData: i
                  });
                });
              }
            },
            {
              key: "showTooltip",
              value: function(e) {
                var t = e.tooltipLeft,
                  n = e.tooltipTop,
                  r = e.tooltipData;
                this.updateTooltip({
                  tooltipOpen: !0,
                  tooltipLeft: t,
                  tooltipTop: n,
                  tooltipData: r
                });
              }
            },
            {
              key: "hideTooltip",
              value: function() {
                this.updateTooltip({
                  tooltipOpen: !1,
                  tooltipLeft: void 0,
                  tooltipTop: void 0,
                  tooltipData: void 0
                });
              }
            },
            {
              key: "render",
              value: function() {
                return i.default.createElement(
                  "div",
                  t,
                  i.default.createElement(
                    e,
                    r(
                      {
                        updateTooltip: this.updateTooltip,
                        showTooltip: this.showTooltip,
                        hideTooltip: this.hideTooltip
                      },
                      this.state,
                      this.props
                    )
                  )
                );
              }
            }
          ]),
          o
        );
      })(i.default.PureComponent);
    };
    var i = l(n(1)),
      o = l(n(0));
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.withTooltipPropTypes = {
      tooltipOpen: o.default.bool,
      tooltipLeft: o.default.number,
      tooltipTop: o.default.number,
      tooltipData: o.default.object,
      updateTooltip: o.default.func,
      showTooltip: o.default.func,
      hideTooltip: o.default.func
    };
  },
  ,
  ,
  ,
  function(e, t, n) {
    "use strict";
    /** @license React v16.12.0
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = n(31),
      a = "function" == typeof Symbol && Symbol.for,
      i = a ? Symbol.for("react.element") : 60103,
      o = a ? Symbol.for("react.portal") : 60106,
      l = a ? Symbol.for("react.fragment") : 60107,
      u = a ? Symbol.for("react.strict_mode") : 60108,
      c = a ? Symbol.for("react.profiler") : 60114,
      s = a ? Symbol.for("react.provider") : 60109,
      f = a ? Symbol.for("react.context") : 60110,
      d = a ? Symbol.for("react.forward_ref") : 60112,
      p = a ? Symbol.for("react.suspense") : 60113;
    a && Symbol.for("react.suspense_list");
    var h = a ? Symbol.for("react.memo") : 60115,
      m = a ? Symbol.for("react.lazy") : 60116;
    a && Symbol.for("react.fundamental"),
      a && Symbol.for("react.responder"),
      a && Symbol.for("react.scope");
    var v = "function" == typeof Symbol && Symbol.iterator;
    function g(e) {
      for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          n = 1;
        n < arguments.length;
        n++
      )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var y = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
      },
      b = {};
    function w(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = b),
        (this.updater = n || y);
    }
    function k() {}
    function x(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = b),
        (this.updater = n || y);
    }
    (w.prototype.isReactComponent = {}),
      (w.prototype.setState = function(e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e)
          throw Error(g(85));
        this.updater.enqueueSetState(this, e, t, "setState");
      }),
      (w.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }),
      (k.prototype = w.prototype);
    var _ = (x.prototype = new k());
    (_.constructor = x), r(_, w.prototype), (_.isPureReactComponent = !0);
    var E = { current: null },
      T = { current: null },
      S = Object.prototype.hasOwnProperty,
      C = { key: !0, ref: !0, __self: !0, __source: !0 };
    function O(e, t, n) {
      var r,
        a = {},
        o = null,
        l = null;
      if (null != t)
        for (r in (void 0 !== t.ref && (l = t.ref),
        void 0 !== t.key && (o = "" + t.key),
        t))
          S.call(t, r) && !C.hasOwnProperty(r) && (a[r] = t[r]);
      var u = arguments.length - 2;
      if (1 === u) a.children = n;
      else if (1 < u) {
        for (var c = Array(u), s = 0; s < u; s++) c[s] = arguments[s + 2];
        a.children = c;
      }
      if (e && e.defaultProps)
        for (r in (u = e.defaultProps)) void 0 === a[r] && (a[r] = u[r]);
      return {
        $$typeof: i,
        type: e,
        key: o,
        ref: l,
        props: a,
        _owner: T.current
      };
    }
    function M(e) {
      return "object" == typeof e && null !== e && e.$$typeof === i;
    }
    var P = /\/+/g,
      N = [];
    function R(e, t, n, r) {
      if (N.length) {
        var a = N.pop();
        return (
          (a.result = e),
          (a.keyPrefix = t),
          (a.func = n),
          (a.context = r),
          (a.count = 0),
          a
        );
      }
      return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
    }
    function D(e) {
      (e.result = null),
        (e.keyPrefix = null),
        (e.func = null),
        (e.context = null),
        (e.count = 0),
        10 > N.length && N.push(e);
    }
    function L(e, t, n) {
      return null == e
        ? 0
        : (function e(t, n, r, a) {
            var l = typeof t;
            ("undefined" !== l && "boolean" !== l) || (t = null);
            var u = !1;
            if (null === t) u = !0;
            else
              switch (l) {
                case "string":
                case "number":
                  u = !0;
                  break;
                case "object":
                  switch (t.$$typeof) {
                    case i:
                    case o:
                      u = !0;
                  }
              }
            if (u) return r(a, t, "" === n ? "." + I(t, 0) : n), 1;
            if (((u = 0), (n = "" === n ? "." : n + ":"), Array.isArray(t)))
              for (var c = 0; c < t.length; c++) {
                var s = n + I((l = t[c]), c);
                u += e(l, s, r, a);
              }
            else if (
              (null === t || "object" != typeof t
                ? (s = null)
                : (s =
                    "function" == typeof (s = (v && t[v]) || t["@@iterator"])
                      ? s
                      : null),
              "function" == typeof s)
            )
              for (t = s.call(t), c = 0; !(l = t.next()).done; )
                u += e((l = l.value), (s = n + I(l, c++)), r, a);
            else if ("object" === l)
              throw ((r = "" + t),
              Error(
                g(
                  31,
                  "[object Object]" === r
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : r,
                  ""
                )
              ));
            return u;
          })(e, "", t, n);
    }
    function I(e, t) {
      return "object" == typeof e && null !== e && null != e.key
        ? (function(e) {
            var t = { "=": "=0", ":": "=2" };
            return (
              "$" +
              ("" + e).replace(/[=:]/g, function(e) {
                return t[e];
              })
            );
          })(e.key)
        : t.toString(36);
    }
    function j(e, t) {
      e.func.call(e.context, t, e.count++);
    }
    function A(e, t, n) {
      var r = e.result,
        a = e.keyPrefix;
      (e = e.func.call(e.context, t, e.count++)),
        Array.isArray(e)
          ? F(e, r, n, function(e) {
              return e;
            })
          : null != e &&
            (M(e) &&
              (e = (function(e, t) {
                return {
                  $$typeof: i,
                  type: e.type,
                  key: t,
                  ref: e.ref,
                  props: e.props,
                  _owner: e._owner
                };
              })(
                e,
                a +
                  (!e.key || (t && t.key === e.key)
                    ? ""
                    : ("" + e.key).replace(P, "$&/") + "/") +
                  n
              )),
            r.push(e));
    }
    function F(e, t, n, r, a) {
      var i = "";
      null != n && (i = ("" + n).replace(P, "$&/") + "/"),
        L(e, A, (t = R(t, i, r, a))),
        D(t);
    }
    function z() {
      var e = E.current;
      if (null === e) throw Error(g(321));
      return e;
    }
    var U = {
        Children: {
          map: function(e, t, n) {
            if (null == e) return e;
            var r = [];
            return F(e, r, null, t, n), r;
          },
          forEach: function(e, t, n) {
            if (null == e) return e;
            L(e, j, (t = R(null, null, t, n))), D(t);
          },
          count: function(e) {
            return L(
              e,
              function() {
                return null;
              },
              null
            );
          },
          toArray: function(e) {
            var t = [];
            return (
              F(e, t, null, function(e) {
                return e;
              }),
              t
            );
          },
          only: function(e) {
            if (!M(e)) throw Error(g(143));
            return e;
          }
        },
        createRef: function() {
          return { current: null };
        },
        Component: w,
        PureComponent: x,
        createContext: function(e, t) {
          return (
            void 0 === t && (t = null),
            ((e = {
              $$typeof: f,
              _calculateChangedBits: t,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null
            }).Provider = { $$typeof: s, _context: e }),
            (e.Consumer = e)
          );
        },
        forwardRef: function(e) {
          return { $$typeof: d, render: e };
        },
        lazy: function(e) {
          return { $$typeof: m, _ctor: e, _status: -1, _result: null };
        },
        memo: function(e, t) {
          return { $$typeof: h, type: e, compare: void 0 === t ? null : t };
        },
        useCallback: function(e, t) {
          return z().useCallback(e, t);
        },
        useContext: function(e, t) {
          return z().useContext(e, t);
        },
        useEffect: function(e, t) {
          return z().useEffect(e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return z().useImperativeHandle(e, t, n);
        },
        useDebugValue: function() {},
        useLayoutEffect: function(e, t) {
          return z().useLayoutEffect(e, t);
        },
        useMemo: function(e, t) {
          return z().useMemo(e, t);
        },
        useReducer: function(e, t, n) {
          return z().useReducer(e, t, n);
        },
        useRef: function(e) {
          return z().useRef(e);
        },
        useState: function(e) {
          return z().useState(e);
        },
        Fragment: l,
        Profiler: c,
        StrictMode: u,
        Suspense: p,
        createElement: O,
        cloneElement: function(e, t, n) {
          if (null == e) throw Error(g(267, e));
          var a = r({}, e.props),
            o = e.key,
            l = e.ref,
            u = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((l = t.ref), (u = T.current)),
              void 0 !== t.key && (o = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var c = e.type.defaultProps;
            for (s in t)
              S.call(t, s) &&
                !C.hasOwnProperty(s) &&
                (a[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s]);
          }
          var s = arguments.length - 2;
          if (1 === s) a.children = n;
          else if (1 < s) {
            c = Array(s);
            for (var f = 0; f < s; f++) c[f] = arguments[f + 2];
            a.children = c;
          }
          return {
            $$typeof: i,
            type: e.type,
            key: o,
            ref: l,
            props: a,
            _owner: u
          };
        },
        createFactory: function(e) {
          var t = O.bind(null, e);
          return (t.type = e), t;
        },
        isValidElement: M,
        version: "16.12.0",
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          ReactCurrentDispatcher: E,
          ReactCurrentBatchConfig: { suspense: null },
          ReactCurrentOwner: T,
          IsSomeRendererActing: { current: !1 },
          assign: r
        }
      },
      W = { default: U },
      H = (W && U) || W;
    e.exports = H.default || H;
  },
  function(e, t, n) {
    "use strict";
    /** @license React v16.12.0
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = n(1),
      a = n(31),
      i = n(48);
    function o(e) {
      for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          n = 1;
        n < arguments.length;
        n++
      )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    if (!r) throw Error(o(227));
    var l = null,
      u = {};
    function c() {
      if (l)
        for (var e in u) {
          var t = u[e],
            n = l.indexOf(e);
          if (!(-1 < n)) throw Error(o(96, e));
          if (!f[n]) {
            if (!t.extractEvents) throw Error(o(97, e));
            for (var r in ((f[n] = t), (n = t.eventTypes))) {
              var a = void 0,
                i = n[r],
                c = t,
                p = r;
              if (d.hasOwnProperty(p)) throw Error(o(99, p));
              d[p] = i;
              var h = i.phasedRegistrationNames;
              if (h) {
                for (a in h) h.hasOwnProperty(a) && s(h[a], c, p);
                a = !0;
              } else
                i.registrationName
                  ? (s(i.registrationName, c, p), (a = !0))
                  : (a = !1);
              if (!a) throw Error(o(98, r, e));
            }
          }
        }
    }
    function s(e, t, n) {
      if (p[e]) throw Error(o(100, e));
      (p[e] = t), (h[e] = t.eventTypes[n].dependencies);
    }
    var f = [],
      d = {},
      p = {},
      h = {};
    function m(e, t, n, r, a, i, o, l, u) {
      var c = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(n, c);
      } catch (e) {
        this.onError(e);
      }
    }
    var v = !1,
      g = null,
      y = !1,
      b = null,
      w = {
        onError: function(e) {
          (v = !0), (g = e);
        }
      };
    function k(e, t, n, r, a, i, o, l, u) {
      (v = !1), (g = null), m.apply(w, arguments);
    }
    var x = null,
      _ = null,
      E = null;
    function T(e, t, n) {
      var r = e.type || "unknown-event";
      (e.currentTarget = E(n)),
        (function(e, t, n, r, a, i, l, u, c) {
          if ((k.apply(this, arguments), v)) {
            if (!v) throw Error(o(198));
            var s = g;
            (v = !1), (g = null), y || ((y = !0), (b = s));
          }
        })(r, t, void 0, e),
        (e.currentTarget = null);
    }
    function S(e, t) {
      if (null == t) throw Error(o(30));
      return null == e
        ? t
        : Array.isArray(e)
        ? Array.isArray(t)
          ? (e.push.apply(e, t), e)
          : (e.push(t), e)
        : Array.isArray(t)
        ? [e].concat(t)
        : [e, t];
    }
    function C(e, t, n) {
      Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
    }
    var O = null;
    function M(e) {
      if (e) {
        var t = e._dispatchListeners,
          n = e._dispatchInstances;
        if (Array.isArray(t))
          for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
            T(e, t[r], n[r]);
        else t && T(e, t, n);
        (e._dispatchListeners = null),
          (e._dispatchInstances = null),
          e.isPersistent() || e.constructor.release(e);
      }
    }
    function P(e) {
      if ((null !== e && (O = S(O, e)), (e = O), (O = null), e)) {
        if ((C(e, M), O)) throw Error(o(95));
        if (y) throw ((e = b), (y = !1), (b = null), e);
      }
    }
    var N = {
      injectEventPluginOrder: function(e) {
        if (l) throw Error(o(101));
        (l = Array.prototype.slice.call(e)), c();
      },
      injectEventPluginsByName: function(e) {
        var t,
          n = !1;
        for (t in e)
          if (e.hasOwnProperty(t)) {
            var r = e[t];
            if (!u.hasOwnProperty(t) || u[t] !== r) {
              if (u[t]) throw Error(o(102, t));
              (u[t] = r), (n = !0);
            }
          }
        n && c();
      }
    };
    function R(e, t) {
      var n = e.stateNode;
      if (!n) return null;
      var r = x(n);
      if (!r) return null;
      n = r[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
          (r = !r.disabled) ||
            (r = !(
              "button" === (e = e.type) ||
              "input" === e ||
              "select" === e ||
              "textarea" === e
            )),
            (e = !r);
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && "function" != typeof n) throw Error(o(231, t, typeof n));
      return n;
    }
    var D = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    D.hasOwnProperty("ReactCurrentDispatcher") ||
      (D.ReactCurrentDispatcher = { current: null }),
      D.hasOwnProperty("ReactCurrentBatchConfig") ||
        (D.ReactCurrentBatchConfig = { suspense: null });
    var L = /^(.*)[\\\/]/,
      I = "function" == typeof Symbol && Symbol.for,
      j = I ? Symbol.for("react.element") : 60103,
      A = I ? Symbol.for("react.portal") : 60106,
      F = I ? Symbol.for("react.fragment") : 60107,
      z = I ? Symbol.for("react.strict_mode") : 60108,
      U = I ? Symbol.for("react.profiler") : 60114,
      W = I ? Symbol.for("react.provider") : 60109,
      H = I ? Symbol.for("react.context") : 60110,
      q = I ? Symbol.for("react.concurrent_mode") : 60111,
      V = I ? Symbol.for("react.forward_ref") : 60112,
      B = I ? Symbol.for("react.suspense") : 60113,
      $ = I ? Symbol.for("react.suspense_list") : 60120,
      Q = I ? Symbol.for("react.memo") : 60115,
      K = I ? Symbol.for("react.lazy") : 60116;
    I && Symbol.for("react.fundamental"),
      I && Symbol.for("react.responder"),
      I && Symbol.for("react.scope");
    var Y = "function" == typeof Symbol && Symbol.iterator;
    function X(e) {
      return null === e || "object" != typeof e
        ? null
        : "function" == typeof (e = (Y && e[Y]) || e["@@iterator"])
        ? e
        : null;
    }
    function Z(e) {
      if (null == e) return null;
      if ("function" == typeof e) return e.displayName || e.name || null;
      if ("string" == typeof e) return e;
      switch (e) {
        case F:
          return "Fragment";
        case A:
          return "Portal";
        case U:
          return "Profiler";
        case z:
          return "StrictMode";
        case B:
          return "Suspense";
        case $:
          return "SuspenseList";
      }
      if ("object" == typeof e)
        switch (e.$$typeof) {
          case H:
            return "Context.Consumer";
          case W:
            return "Context.Provider";
          case V:
            var t = e.render;
            return (
              (t = t.displayName || t.name || ""),
              e.displayName ||
                ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
            );
          case Q:
            return Z(e.type);
          case K:
            if ((e = 1 === e._status ? e._result : null)) return Z(e);
        }
      return null;
    }
    function G(e) {
      var t = "";
      do {
        e: switch (e.tag) {
          case 3:
          case 4:
          case 6:
          case 7:
          case 10:
          case 9:
            var n = "";
            break e;
          default:
            var r = e._debugOwner,
              a = e._debugSource,
              i = Z(e.type);
            (n = null),
              r && (n = Z(r.type)),
              (r = i),
              (i = ""),
              a
                ? (i =
                    " (at " +
                    a.fileName.replace(L, "") +
                    ":" +
                    a.lineNumber +
                    ")")
                : n && (i = " (created by " + n + ")"),
              (n = "\n    in " + (r || "Unknown") + i);
        }
        (t += n), (e = e.return);
      } while (e);
      return t;
    }
    var J = !(
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
      ),
      ee = null,
      te = null,
      ne = null;
    function re(e) {
      if ((e = _(e))) {
        if ("function" != typeof ee) throw Error(o(280));
        var t = x(e.stateNode);
        ee(e.stateNode, e.type, t);
      }
    }
    function ae(e) {
      te ? (ne ? ne.push(e) : (ne = [e])) : (te = e);
    }
    function ie() {
      if (te) {
        var e = te,
          t = ne;
        if (((ne = te = null), re(e), t))
          for (e = 0; e < t.length; e++) re(t[e]);
      }
    }
    function oe(e, t) {
      return e(t);
    }
    function le(e, t, n, r) {
      return e(t, n, r);
    }
    function ue() {}
    var ce = oe,
      se = !1,
      fe = !1;
    function de() {
      (null === te && null === ne) || (ue(), ie());
    }
    new Map();
    var pe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      he = Object.prototype.hasOwnProperty,
      me = {},
      ve = {};
    function ge(e, t, n, r, a, i) {
      (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = a),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i);
    }
    var ye = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function(e) {
        ye[e] = new ge(e, 0, !1, e, null, !1);
      }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
      ].forEach(function(e) {
        var t = e[0];
        ye[t] = new ge(t, 1, !1, e[1], null, !1);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(
        e
      ) {
        ye[e] = new ge(e, 2, !1, e.toLowerCase(), null, !1);
      }),
      [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
      ].forEach(function(e) {
        ye[e] = new ge(e, 2, !1, e, null, !1);
      }),
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
        .split(" ")
        .forEach(function(e) {
          ye[e] = new ge(e, 3, !1, e.toLowerCase(), null, !1);
        }),
      ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        ye[e] = new ge(e, 3, !0, e, null, !1);
      }),
      ["capture", "download"].forEach(function(e) {
        ye[e] = new ge(e, 4, !1, e, null, !1);
      }),
      ["cols", "rows", "size", "span"].forEach(function(e) {
        ye[e] = new ge(e, 6, !1, e, null, !1);
      }),
      ["rowSpan", "start"].forEach(function(e) {
        ye[e] = new ge(e, 5, !1, e.toLowerCase(), null, !1);
      });
    var be = /[\-:]([a-z])/g;
    function we(e) {
      return e[1].toUpperCase();
    }
    function ke(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
          return e;
        default:
          return "";
      }
    }
    function xe(e, t, n, r) {
      var a = ye.hasOwnProperty(t) ? ye[t] : null;
      (null !== a
        ? 0 === a.type
        : !r &&
          2 < t.length &&
            ("o" === t[0] || "O" === t[0]) &&
            ("n" === t[1] || "N" === t[1])) ||
        ((function(e, t, n, r) {
          if (
            null == t ||
            (function(e, t, n, r) {
              if (null !== n && 0 === n.type) return !1;
              switch (typeof t) {
                case "function":
                case "symbol":
                  return !0;
                case "boolean":
                  return (
                    !r &&
                    (null !== n
                      ? !n.acceptsBooleans
                      : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                        "aria-" !== e)
                  );
                default:
                  return !1;
              }
            })(e, t, n, r)
          )
            return !0;
          if (r) return !1;
          if (null !== n)
            switch (n.type) {
              case 3:
                return !t;
              case 4:
                return !1 === t;
              case 5:
                return isNaN(t);
              case 6:
                return isNaN(t) || 1 > t;
            }
          return !1;
        })(t, n, a, r) && (n = null),
        r || null === a
          ? (function(e) {
              return (
                !!he.call(ve, e) ||
                (!he.call(me, e) &&
                  (pe.test(e) ? (ve[e] = !0) : ((me[e] = !0), !1)))
              );
            })(t) &&
            (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
          : a.mustUseProperty
          ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
          : ((t = a.attributeName),
            (r = a.attributeNamespace),
            null === n
              ? e.removeAttribute(t)
              : ((n =
                  3 === (a = a.type) || (4 === a && !0 === n) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    function _e(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        "input" === e.toLowerCase() &&
        ("checkbox" === t || "radio" === t)
      );
    }
    function Ee(e) {
      e._valueTracker ||
        (e._valueTracker = (function(e) {
          var t = _e(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
          if (
            !e.hasOwnProperty(t) &&
            void 0 !== n &&
            "function" == typeof n.get &&
            "function" == typeof n.set
          ) {
            var a = n.get,
              i = n.set;
            return (
              Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                  return a.call(this);
                },
                set: function(e) {
                  (r = "" + e), i.call(this, e);
                }
              }),
              Object.defineProperty(e, t, { enumerable: n.enumerable }),
              {
                getValue: function() {
                  return r;
                },
                setValue: function(e) {
                  r = "" + e;
                },
                stopTracking: function() {
                  (e._valueTracker = null), delete e[t];
                }
              }
            );
          }
        })(e));
    }
    function Te(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = "";
      return (
        e && (r = _e(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r) !== n && (t.setValue(e), !0)
      );
    }
    function Se(e, t) {
      var n = t.checked;
      return a({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked
      });
    }
    function Ce(e, t) {
      var n = null == t.defaultValue ? "" : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
      (n = ke(null != t.value ? t.value : n)),
        (e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled:
            "checkbox" === t.type || "radio" === t.type
              ? null != t.checked
              : null != t.value
        });
    }
    function Oe(e, t) {
      null != (t = t.checked) && xe(e, "checked", t, !1);
    }
    function Me(e, t) {
      Oe(e, t);
      var n = ke(t.value),
        r = t.type;
      if (null != n)
        "number" === r
          ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n)
          : e.value !== "" + n && (e.value = "" + n);
      else if ("submit" === r || "reset" === r)
        return void e.removeAttribute("value");
      t.hasOwnProperty("value")
        ? Ne(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && Ne(e, t.type, ke(t.defaultValue)),
        null == t.checked &&
          null != t.defaultChecked &&
          (e.defaultChecked = !!t.defaultChecked);
    }
    function Pe(e, t, n) {
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (
          !(
            ("submit" !== r && "reset" !== r) ||
            (void 0 !== t.value && null !== t.value)
          )
        )
          return;
        (t = "" + e._wrapperState.initialValue),
          n || t === e.value || (e.value = t),
          (e.defaultValue = t);
      }
      "" !== (n = e.name) && (e.name = ""),
        (e.defaultChecked = !e.defaultChecked),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        "" !== n && (e.name = n);
    }
    function Ne(e, t, n) {
      ("number" === t && e.ownerDocument.activeElement === e) ||
        (null == n
          ? (e.defaultValue = "" + e._wrapperState.initialValue)
          : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    function Re(e, t) {
      return (
        (e = a({ children: void 0 }, t)),
        (t = (function(e) {
          var t = "";
          return (
            r.Children.forEach(e, function(e) {
              null != e && (t += e);
            }),
            t
          );
        })(t.children)) && (e.children = t),
        e
      );
    }
    function De(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
        for (n = 0; n < e.length; n++)
          (a = t.hasOwnProperty("$" + e[n].value)),
            e[n].selected !== a && (e[n].selected = a),
            a && r && (e[n].defaultSelected = !0);
      } else {
        for (n = "" + ke(n), t = null, a = 0; a < e.length; a++) {
          if (e[a].value === n)
            return (
              (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
            );
          null !== t || e[a].disabled || (t = e[a]);
        }
        null !== t && (t.selected = !0);
      }
    }
    function Le(e, t) {
      if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
      return a({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
      });
    }
    function Ie(e, t) {
      var n = t.value;
      if (null == n) {
        if (((n = t.defaultValue), null != (t = t.children))) {
          if (null != n) throw Error(o(92));
          if (Array.isArray(t)) {
            if (!(1 >= t.length)) throw Error(o(93));
            t = t[0];
          }
          n = t;
        }
        null == n && (n = "");
      }
      e._wrapperState = { initialValue: ke(n) };
    }
    function je(e, t) {
      var n = ke(t.value),
        r = ke(t.defaultValue);
      null != n &&
        ((n = "" + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = "" + r);
    }
    function Ae(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue &&
        "" !== t &&
        null !== t &&
        (e.value = t);
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function(e) {
        var t = e.replace(be, we);
        ye[t] = new ge(t, 1, !1, e, null, !1);
      }),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
        .split(" ")
        .forEach(function(e) {
          var t = e.replace(be, we);
          ye[t] = new ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1);
        }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(be, we);
        ye[t] = new ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1);
      }),
      ["tabIndex", "crossOrigin"].forEach(function(e) {
        ye[e] = new ge(e, 1, !1, e.toLowerCase(), null, !1);
      }),
      (ye.xlinkHref = new ge(
        "xlinkHref",
        1,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0
      )),
      ["src", "href", "action", "formAction"].forEach(function(e) {
        ye[e] = new ge(e, 1, !1, e.toLowerCase(), null, !0);
      });
    var Fe = {
      html: "http://www.w3.org/1999/xhtml",
      mathml: "http://www.w3.org/1998/Math/MathML",
      svg: "http://www.w3.org/2000/svg"
    };
    function ze(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function Ue(e, t) {
      return null == e || "http://www.w3.org/1999/xhtml" === e
        ? ze(t)
        : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
        ? "http://www.w3.org/1999/xhtml"
        : e;
    }
    var We,
      He = (function(e) {
        return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function(t, n, r, a) {
              MSApp.execUnsafeLocalFunction(function() {
                return e(t, n);
              });
            }
          : e;
      })(function(e, t) {
        if (e.namespaceURI !== Fe.svg || "innerHTML" in e) e.innerHTML = t;
        else {
          for (
            (We = We || document.createElement("div")).innerHTML =
              "<svg>" + t.valueOf().toString() + "</svg>",
              t = We.firstChild;
            e.firstChild;

          )
            e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      });
    function qe(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType)
          return void (n.nodeValue = t);
      }
      e.textContent = t;
    }
    function Ve(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
      );
    }
    var Be = {
        animationend: Ve("Animation", "AnimationEnd"),
        animationiteration: Ve("Animation", "AnimationIteration"),
        animationstart: Ve("Animation", "AnimationStart"),
        transitionend: Ve("Transition", "TransitionEnd")
      },
      $e = {},
      Qe = {};
    function Ke(e) {
      if ($e[e]) return $e[e];
      if (!Be[e]) return e;
      var t,
        n = Be[e];
      for (t in n) if (n.hasOwnProperty(t) && t in Qe) return ($e[e] = n[t]);
      return e;
    }
    J &&
      ((Qe = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete Be.animationend.animation,
        delete Be.animationiteration.animation,
        delete Be.animationstart.animation),
      "TransitionEvent" in window || delete Be.transitionend.transition);
    var Ye = Ke("animationend"),
      Xe = Ke("animationiteration"),
      Ze = Ke("animationstart"),
      Ge = Ke("transitionend"),
      Je = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      );
    function et(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do {
          0 != (1026 & (t = e).effectTag) && (n = t.return), (e = t.return);
        } while (e);
      }
      return 3 === t.tag ? n : null;
    }
    function tt(e) {
      if (13 === e.tag) {
        var t = e.memoizedState;
        if (
          (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
          null !== t)
        )
          return t.dehydrated;
      }
      return null;
    }
    function nt(e) {
      if (et(e) !== e) throw Error(o(188));
    }
    function rt(e) {
      if (
        !(e = (function(e) {
          var t = e.alternate;
          if (!t) {
            if (null === (t = et(e))) throw Error(o(188));
            return t !== e ? null : e;
          }
          for (var n = e, r = t; ; ) {
            var a = n.return;
            if (null === a) break;
            var i = a.alternate;
            if (null === i) {
              if (null !== (r = a.return)) {
                n = r;
                continue;
              }
              break;
            }
            if (a.child === i.child) {
              for (i = a.child; i; ) {
                if (i === n) return nt(a), e;
                if (i === r) return nt(a), t;
                i = i.sibling;
              }
              throw Error(o(188));
            }
            if (n.return !== r.return) (n = a), (r = i);
            else {
              for (var l = !1, u = a.child; u; ) {
                if (u === n) {
                  (l = !0), (n = a), (r = i);
                  break;
                }
                if (u === r) {
                  (l = !0), (r = a), (n = i);
                  break;
                }
                u = u.sibling;
              }
              if (!l) {
                for (u = i.child; u; ) {
                  if (u === n) {
                    (l = !0), (n = i), (r = a);
                    break;
                  }
                  if (u === r) {
                    (l = !0), (r = i), (n = a);
                    break;
                  }
                  u = u.sibling;
                }
                if (!l) throw Error(o(189));
              }
            }
            if (n.alternate !== r) throw Error(o(190));
          }
          if (3 !== n.tag) throw Error(o(188));
          return n.stateNode.current === n ? e : t;
        })(e))
      )
        return null;
      for (var t = e; ; ) {
        if (5 === t.tag || 6 === t.tag) return t;
        if (t.child) (t.child.return = t), (t = t.child);
        else {
          if (t === e) break;
          for (; !t.sibling; ) {
            if (!t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      return null;
    }
    var at,
      it,
      ot,
      lt = !1,
      ut = [],
      ct = null,
      st = null,
      ft = null,
      dt = new Map(),
      pt = new Map(),
      ht = [],
      mt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(
        " "
      ),
      vt = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(
        " "
      );
    function gt(e, t, n, r) {
      return {
        blockedOn: e,
        topLevelType: t,
        eventSystemFlags: 32 | n,
        nativeEvent: r
      };
    }
    function yt(e, t) {
      switch (e) {
        case "focus":
        case "blur":
          ct = null;
          break;
        case "dragenter":
        case "dragleave":
          st = null;
          break;
        case "mouseover":
        case "mouseout":
          ft = null;
          break;
        case "pointerover":
        case "pointerout":
          dt.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          pt.delete(t.pointerId);
      }
    }
    function bt(e, t, n, r, a) {
      return null === e || e.nativeEvent !== a
        ? ((e = gt(t, n, r, a)), null !== t && null !== (t = pr(t)) && it(t), e)
        : ((e.eventSystemFlags |= r), e);
    }
    function wt(e) {
      var t = dr(e.target);
      if (null !== t) {
        var n = et(t);
        if (null !== n)
          if (13 === (t = n.tag)) {
            if (null !== (t = tt(n)))
              return (
                (e.blockedOn = t),
                void i.unstable_runWithPriority(e.priority, function() {
                  ot(n);
                })
              );
          } else if (3 === t && n.stateNode.hydrate)
            return void (e.blockedOn =
              3 === n.tag ? n.stateNode.containerInfo : null);
      }
      e.blockedOn = null;
    }
    function kt(e) {
      if (null !== e.blockedOn) return !1;
      var t = Nn(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
      if (null !== t) {
        var n = pr(t);
        return null !== n && it(n), (e.blockedOn = t), !1;
      }
      return !0;
    }
    function xt(e, t, n) {
      kt(e) && n.delete(t);
    }
    function _t() {
      for (lt = !1; 0 < ut.length; ) {
        var e = ut[0];
        if (null !== e.blockedOn) {
          null !== (e = pr(e.blockedOn)) && at(e);
          break;
        }
        var t = Nn(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
        null !== t ? (e.blockedOn = t) : ut.shift();
      }
      null !== ct && kt(ct) && (ct = null),
        null !== st && kt(st) && (st = null),
        null !== ft && kt(ft) && (ft = null),
        dt.forEach(xt),
        pt.forEach(xt);
    }
    function Et(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        lt ||
          ((lt = !0),
          i.unstable_scheduleCallback(i.unstable_NormalPriority, _t)));
    }
    function Tt(e) {
      function t(t) {
        return Et(t, e);
      }
      if (0 < ut.length) {
        Et(ut[0], e);
        for (var n = 1; n < ut.length; n++) {
          var r = ut[n];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      for (
        null !== ct && Et(ct, e),
          null !== st && Et(st, e),
          null !== ft && Et(ft, e),
          dt.forEach(t),
          pt.forEach(t),
          n = 0;
        n < ht.length;
        n++
      )
        (r = ht[n]).blockedOn === e && (r.blockedOn = null);
      for (; 0 < ht.length && null === (n = ht[0]).blockedOn; )
        wt(n), null === n.blockedOn && ht.shift();
    }
    function St(e) {
      return (
        (e = e.target || e.srcElement || window).correspondingUseElement &&
          (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
      );
    }
    function Ct(e) {
      do {
        e = e.return;
      } while (e && 5 !== e.tag);
      return e || null;
    }
    function Ot(e, t, n) {
      (t = R(e, n.dispatchConfig.phasedRegistrationNames[t])) &&
        ((n._dispatchListeners = S(n._dispatchListeners, t)),
        (n._dispatchInstances = S(n._dispatchInstances, e)));
    }
    function Mt(e) {
      if (e && e.dispatchConfig.phasedRegistrationNames) {
        for (var t = e._targetInst, n = []; t; ) n.push(t), (t = Ct(t));
        for (t = n.length; 0 < t--; ) Ot(n[t], "captured", e);
        for (t = 0; t < n.length; t++) Ot(n[t], "bubbled", e);
      }
    }
    function Pt(e, t, n) {
      e &&
        n &&
        n.dispatchConfig.registrationName &&
        (t = R(e, n.dispatchConfig.registrationName)) &&
        ((n._dispatchListeners = S(n._dispatchListeners, t)),
        (n._dispatchInstances = S(n._dispatchInstances, e)));
    }
    function Nt(e) {
      e && e.dispatchConfig.registrationName && Pt(e._targetInst, null, e);
    }
    function Rt(e) {
      C(e, Mt);
    }
    function Dt() {
      return !0;
    }
    function Lt() {
      return !1;
    }
    function It(e, t, n, r) {
      for (var a in ((this.dispatchConfig = e),
      (this._targetInst = t),
      (this.nativeEvent = n),
      (e = this.constructor.Interface)))
        e.hasOwnProperty(a) &&
          ((t = e[a])
            ? (this[a] = t(n))
            : "target" === a
            ? (this.target = r)
            : (this[a] = n[a]));
      return (
        (this.isDefaultPrevented = (null != n.defaultPrevented
        ? n.defaultPrevented
        : !1 === n.returnValue)
          ? Dt
          : Lt),
        (this.isPropagationStopped = Lt),
        this
      );
    }
    function jt(e, t, n, r) {
      if (this.eventPool.length) {
        var a = this.eventPool.pop();
        return this.call(a, e, t, n, r), a;
      }
      return new this(e, t, n, r);
    }
    function At(e) {
      if (!(e instanceof this)) throw Error(o(279));
      e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e);
    }
    function Ft(e) {
      (e.eventPool = []), (e.getPooled = jt), (e.release = At);
    }
    a(It.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e &&
          (e.preventDefault
            ? e.preventDefault()
            : "unknown" != typeof e.returnValue && (e.returnValue = !1),
          (this.isDefaultPrevented = Dt));
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e &&
          (e.stopPropagation
            ? e.stopPropagation()
            : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
          (this.isPropagationStopped = Dt));
      },
      persist: function() {
        this.isPersistent = Dt;
      },
      isPersistent: Lt,
      destructor: function() {
        var e,
          t = this.constructor.Interface;
        for (e in t) this[e] = null;
        (this.nativeEvent = this._targetInst = this.dispatchConfig = null),
          (this.isPropagationStopped = this.isDefaultPrevented = Lt),
          (this._dispatchInstances = this._dispatchListeners = null);
      }
    }),
      (It.Interface = {
        type: null,
        target: null,
        currentTarget: function() {
          return null;
        },
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function(e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: null,
        isTrusted: null
      }),
      (It.extend = function(e) {
        function t() {}
        function n() {
          return r.apply(this, arguments);
        }
        var r = this;
        t.prototype = r.prototype;
        var i = new t();
        return (
          a(i, n.prototype),
          (n.prototype = i),
          (n.prototype.constructor = n),
          (n.Interface = a({}, r.Interface, e)),
          (n.extend = r.extend),
          Ft(n),
          n
        );
      }),
      Ft(It);
    var zt = It.extend({
        animationName: null,
        elapsedTime: null,
        pseudoElement: null
      }),
      Ut = It.extend({
        clipboardData: function(e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
      }),
      Wt = It.extend({ view: null, detail: null }),
      Ht = Wt.extend({ relatedTarget: null });
    function qt(e) {
      var t = e.keyCode;
      return (
        "charCode" in e
          ? 0 === (e = e.charCode) && 13 === t && (e = 13)
          : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
      );
    }
    var Vt = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      },
      Bt = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      },
      $t = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
      };
    function Qt(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : !!(e = $t[e]) && !!t[e];
    }
    function Kt() {
      return Qt;
    }
    for (
      var Yt = Wt.extend({
          key: function(e) {
            if (e.key) {
              var t = Vt[e.key] || e.key;
              if ("Unidentified" !== t) return t;
            }
            return "keypress" === e.type
              ? 13 === (e = qt(e))
                ? "Enter"
                : String.fromCharCode(e)
              : "keydown" === e.type || "keyup" === e.type
              ? Bt[e.keyCode] || "Unidentified"
              : "";
          },
          location: null,
          ctrlKey: null,
          shiftKey: null,
          altKey: null,
          metaKey: null,
          repeat: null,
          locale: null,
          getModifierState: Kt,
          charCode: function(e) {
            return "keypress" === e.type ? qt(e) : 0;
          },
          keyCode: function(e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          },
          which: function(e) {
            return "keypress" === e.type
              ? qt(e)
              : "keydown" === e.type || "keyup" === e.type
              ? e.keyCode
              : 0;
          }
        }),
        Xt = 0,
        Zt = 0,
        Gt = !1,
        Jt = !1,
        en = Wt.extend({
          screenX: null,
          screenY: null,
          clientX: null,
          clientY: null,
          pageX: null,
          pageY: null,
          ctrlKey: null,
          shiftKey: null,
          altKey: null,
          metaKey: null,
          getModifierState: Kt,
          button: null,
          buttons: null,
          relatedTarget: function(e) {
            return (
              e.relatedTarget ||
              (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
            );
          },
          movementX: function(e) {
            if (("movementX" in e)) return e.movementX;
            var t = Xt;
            return (
              (Xt = e.screenX),
              Gt ? ("mousemove" === e.type ? e.screenX - t : 0) : ((Gt = !0), 0)
            );
          },
          movementY: function(e) {
            if (("movementY" in e)) return e.movementY;
            var t = Zt;
            return (
              (Zt = e.screenY),
              Jt ? ("mousemove" === e.type ? e.screenY - t : 0) : ((Jt = !0), 0)
            );
          }
        }),
        tn = en.extend({
          pointerId: null,
          width: null,
          height: null,
          pressure: null,
          tangentialPressure: null,
          tiltX: null,
          tiltY: null,
          twist: null,
          pointerType: null,
          isPrimary: null
        }),
        nn = en.extend({ dataTransfer: null }),
        rn = Wt.extend({
          touches: null,
          targetTouches: null,
          changedTouches: null,
          altKey: null,
          metaKey: null,
          ctrlKey: null,
          shiftKey: null,
          getModifierState: Kt
        }),
        an = It.extend({
          propertyName: null,
          elapsedTime: null,
          pseudoElement: null
        }),
        on = en.extend({
          deltaX: function(e) {
            return ("deltaX" in e)
              ? e.deltaX
              : ("wheelDeltaX" in e)
              ? -e.wheelDeltaX
              : 0;
          },
          deltaY: function(e) {
            return ("deltaY" in e)
              ? e.deltaY
              : ("wheelDeltaY" in e)
              ? -e.wheelDeltaY
              : ("wheelDelta" in e)
              ? -e.wheelDelta
              : 0;
          },
          deltaZ: null,
          deltaMode: null
        }),
        ln = [
          ["blur", "blur", 0],
          ["cancel", "cancel", 0],
          ["click", "click", 0],
          ["close", "close", 0],
          ["contextmenu", "contextMenu", 0],
          ["copy", "copy", 0],
          ["cut", "cut", 0],
          ["auxclick", "auxClick", 0],
          ["dblclick", "doubleClick", 0],
          ["dragend", "dragEnd", 0],
          ["dragstart", "dragStart", 0],
          ["drop", "drop", 0],
          ["focus", "focus", 0],
          ["input", "input", 0],
          ["invalid", "invalid", 0],
          ["keydown", "keyDown", 0],
          ["keypress", "keyPress", 0],
          ["keyup", "keyUp", 0],
          ["mousedown", "mouseDown", 0],
          ["mouseup", "mouseUp", 0],
          ["paste", "paste", 0],
          ["pause", "pause", 0],
          ["play", "play", 0],
          ["pointercancel", "pointerCancel", 0],
          ["pointerdown", "pointerDown", 0],
          ["pointerup", "pointerUp", 0],
          ["ratechange", "rateChange", 0],
          ["reset", "reset", 0],
          ["seeked", "seeked", 0],
          ["submit", "submit", 0],
          ["touchcancel", "touchCancel", 0],
          ["touchend", "touchEnd", 0],
          ["touchstart", "touchStart", 0],
          ["volumechange", "volumeChange", 0],
          ["drag", "drag", 1],
          ["dragenter", "dragEnter", 1],
          ["dragexit", "dragExit", 1],
          ["dragleave", "dragLeave", 1],
          ["dragover", "dragOver", 1],
          ["mousemove", "mouseMove", 1],
          ["mouseout", "mouseOut", 1],
          ["mouseover", "mouseOver", 1],
          ["pointermove", "pointerMove", 1],
          ["pointerout", "pointerOut", 1],
          ["pointerover", "pointerOver", 1],
          ["scroll", "scroll", 1],
          ["toggle", "toggle", 1],
          ["touchmove", "touchMove", 1],
          ["wheel", "wheel", 1],
          ["abort", "abort", 2],
          [Ye, "animationEnd", 2],
          [Xe, "animationIteration", 2],
          [Ze, "animationStart", 2],
          ["canplay", "canPlay", 2],
          ["canplaythrough", "canPlayThrough", 2],
          ["durationchange", "durationChange", 2],
          ["emptied", "emptied", 2],
          ["encrypted", "encrypted", 2],
          ["ended", "ended", 2],
          ["error", "error", 2],
          ["gotpointercapture", "gotPointerCapture", 2],
          ["load", "load", 2],
          ["loadeddata", "loadedData", 2],
          ["loadedmetadata", "loadedMetadata", 2],
          ["loadstart", "loadStart", 2],
          ["lostpointercapture", "lostPointerCapture", 2],
          ["playing", "playing", 2],
          ["progress", "progress", 2],
          ["seeking", "seeking", 2],
          ["stalled", "stalled", 2],
          ["suspend", "suspend", 2],
          ["timeupdate", "timeUpdate", 2],
          [Ge, "transitionEnd", 2],
          ["waiting", "waiting", 2]
        ],
        un = {},
        cn = {},
        sn = 0;
      sn < ln.length;
      sn++
    ) {
      var fn = ln[sn],
        dn = fn[0],
        pn = fn[1],
        hn = fn[2],
        mn = "on" + (pn[0].toUpperCase() + pn.slice(1)),
        vn = {
          phasedRegistrationNames: { bubbled: mn, captured: mn + "Capture" },
          dependencies: [dn],
          eventPriority: hn
        };
      (un[pn] = vn), (cn[dn] = vn);
    }
    var gn = {
        eventTypes: un,
        getEventPriority: function(e) {
          return void 0 !== (e = cn[e]) ? e.eventPriority : 2;
        },
        extractEvents: function(e, t, n, r) {
          var a = cn[e];
          if (!a) return null;
          switch (e) {
            case "keypress":
              if (0 === qt(n)) return null;
            case "keydown":
            case "keyup":
              e = Yt;
              break;
            case "blur":
            case "focus":
              e = Ht;
              break;
            case "click":
              if (2 === n.button) return null;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              e = en;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              e = nn;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              e = rn;
              break;
            case Ye:
            case Xe:
            case Ze:
              e = zt;
              break;
            case Ge:
              e = an;
              break;
            case "scroll":
              e = Wt;
              break;
            case "wheel":
              e = on;
              break;
            case "copy":
            case "cut":
            case "paste":
              e = Ut;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              e = tn;
              break;
            default:
              e = It;
          }
          return Rt((t = e.getPooled(a, t, n, r))), t;
        }
      },
      yn = i.unstable_UserBlockingPriority,
      bn = i.unstable_runWithPriority,
      wn = gn.getEventPriority,
      kn = 10,
      xn = [];
    function _n(e) {
      var t = e.targetInst,
        n = t;
      do {
        if (!n) {
          e.ancestors.push(n);
          break;
        }
        var r = n;
        if (3 === r.tag) r = r.stateNode.containerInfo;
        else {
          for (; r.return; ) r = r.return;
          r = 3 !== r.tag ? null : r.stateNode.containerInfo;
        }
        if (!r) break;
        (5 !== (t = n.tag) && 6 !== t) || e.ancestors.push(n), (n = dr(r));
      } while (n);
      for (n = 0; n < e.ancestors.length; n++) {
        t = e.ancestors[n];
        var a = St(e.nativeEvent);
        r = e.topLevelType;
        for (
          var i = e.nativeEvent, o = e.eventSystemFlags, l = null, u = 0;
          u < f.length;
          u++
        ) {
          var c = f[u];
          c && (c = c.extractEvents(r, t, i, a, o)) && (l = S(l, c));
        }
        P(l);
      }
    }
    var En = !0;
    function Tn(e, t) {
      Sn(t, e, !1);
    }
    function Sn(e, t, n) {
      switch (wn(t)) {
        case 0:
          var r = Cn.bind(null, t, 1);
          break;
        case 1:
          r = On.bind(null, t, 1);
          break;
        default:
          r = Pn.bind(null, t, 1);
      }
      n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1);
    }
    function Cn(e, t, n) {
      se || ue();
      var r = Pn,
        a = se;
      se = !0;
      try {
        le(r, e, t, n);
      } finally {
        (se = a) || de();
      }
    }
    function On(e, t, n) {
      bn(yn, Pn.bind(null, e, t, n));
    }
    function Mn(e, t, n, r) {
      if (xn.length) {
        var a = xn.pop();
        (a.topLevelType = e),
          (a.eventSystemFlags = t),
          (a.nativeEvent = n),
          (a.targetInst = r),
          (e = a);
      } else
        e = {
          topLevelType: e,
          eventSystemFlags: t,
          nativeEvent: n,
          targetInst: r,
          ancestors: []
        };
      try {
        if (((t = _n), (n = e), fe)) t(n, void 0);
        else {
          fe = !0;
          try {
            ce(t, n, void 0);
          } finally {
            (fe = !1), de();
          }
        }
      } finally {
        (e.topLevelType = null),
          (e.nativeEvent = null),
          (e.targetInst = null),
          (e.ancestors.length = 0),
          xn.length < kn && xn.push(e);
      }
    }
    function Pn(e, t, n) {
      if (En)
        if (0 < ut.length && -1 < mt.indexOf(e))
          (e = gt(null, e, t, n)), ut.push(e);
        else {
          var r = Nn(e, t, n);
          null === r
            ? yt(e, n)
            : -1 < mt.indexOf(e)
            ? ((e = gt(r, e, t, n)), ut.push(e))
            : (function(e, t, n, r) {
                switch (t) {
                  case "focus":
                    return (ct = bt(ct, e, t, n, r)), !0;
                  case "dragenter":
                    return (st = bt(st, e, t, n, r)), !0;
                  case "mouseover":
                    return (ft = bt(ft, e, t, n, r)), !0;
                  case "pointerover":
                    var a = r.pointerId;
                    return dt.set(a, bt(dt.get(a) || null, e, t, n, r)), !0;
                  case "gotpointercapture":
                    return (
                      (a = r.pointerId),
                      pt.set(a, bt(pt.get(a) || null, e, t, n, r)),
                      !0
                    );
                }
                return !1;
              })(r, e, t, n) || (yt(e, n), Mn(e, t, n, null));
        }
    }
    function Nn(e, t, n) {
      var r = St(n);
      if (null !== (r = dr(r))) {
        var a = et(r);
        if (null === a) r = null;
        else {
          var i = a.tag;
          if (13 === i) {
            if (null !== (r = tt(a))) return r;
            r = null;
          } else if (3 === i) {
            if (a.stateNode.hydrate)
              return 3 === a.tag ? a.stateNode.containerInfo : null;
            r = null;
          } else a !== r && (r = null);
        }
      }
      return Mn(e, t, n, r), null;
    }
    function Rn(e) {
      if (!J) return !1;
      var t = (e = "on" + e) in document;
      return (
        t ||
          ((t = document.createElement("div")).setAttribute(e, "return;"),
          (t = "function" == typeof t[e])),
        t
      );
    }
    var Dn = new ("function" == typeof WeakMap ? WeakMap : Map)();
    function Ln(e) {
      var t = Dn.get(e);
      return void 0 === t && ((t = new Set()), Dn.set(e, t)), t;
    }
    function In(e, t, n) {
      if (!n.has(e)) {
        switch (e) {
          case "scroll":
            Sn(t, "scroll", !0);
            break;
          case "focus":
          case "blur":
            Sn(t, "focus", !0),
              Sn(t, "blur", !0),
              n.add("blur"),
              n.add("focus");
            break;
          case "cancel":
          case "close":
            Rn(e) && Sn(t, e, !0);
            break;
          case "invalid":
          case "submit":
          case "reset":
            break;
          default:
            -1 === Je.indexOf(e) && Tn(e, t);
        }
        n.add(e);
      }
    }
    var jn = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
      },
      An = ["Webkit", "ms", "Moz", "O"];
    function Fn(e, t, n) {
      return null == t || "boolean" == typeof t || "" === t
        ? ""
        : n ||
          "number" != typeof t ||
          0 === t ||
          (jn.hasOwnProperty(e) && jn[e])
        ? ("" + t).trim()
        : t + "px";
    }
    function zn(e, t) {
      for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
          var r = 0 === n.indexOf("--"),
            a = Fn(n, t[n], r);
          "float" === n && (n = "cssFloat"),
            r ? e.setProperty(n, a) : (e[n] = a);
        }
    }
    Object.keys(jn).forEach(function(e) {
      An.forEach(function(t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (jn[t] = jn[e]);
      });
    });
    var Un = a(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
      }
    );
    function Wn(e, t) {
      if (t) {
        if (Un[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
          throw Error(o(137, e, ""));
        if (null != t.dangerouslySetInnerHTML) {
          if (null != t.children) throw Error(o(60));
          if (
            !(
              "object" == typeof t.dangerouslySetInnerHTML &&
              "__html" in t.dangerouslySetInnerHTML
            )
          )
            throw Error(o(61));
        }
        if (null != t.style && "object" != typeof t.style)
          throw Error(o(62, ""));
      }
    }
    function Hn(e, t) {
      if (-1 === e.indexOf("-")) return "string" == typeof t.is;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function qn(e, t) {
      var n = Ln(
        (e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument)
      );
      t = h[t];
      for (var r = 0; r < t.length; r++) In(t[r], e, n);
    }
    function Vn() {}
    function Bn(e) {
      if (
        void 0 ===
        (e = e || ("undefined" != typeof document ? document : void 0))
      )
        return null;
      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    }
    function $n(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Qn(e, t) {
      var n,
        r = $n(e);
      for (e = 0; r; ) {
        if (3 === r.nodeType) {
          if (((n = e + r.textContent.length), e <= t && n >= t))
            return { node: r, offset: t - e };
          e = n;
        }
        e: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break e;
            }
            r = r.parentNode;
          }
          r = void 0;
        }
        r = $n(r);
      }
    }
    function Kn() {
      for (var e = window, t = Bn(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = "string" == typeof t.contentWindow.location.href;
        } catch (e) {
          n = !1;
        }
        if (!n) break;
        t = Bn((e = t.contentWindow).document);
      }
      return t;
    }
    function Yn(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        (("input" === t &&
          ("text" === e.type ||
            "search" === e.type ||
            "tel" === e.type ||
            "url" === e.type ||
            "password" === e.type)) ||
          "textarea" === t ||
          "true" === e.contentEditable)
      );
    }
    var Xn = "$",
      Zn = "/$",
      Gn = "$?",
      Jn = "$!",
      er = null,
      tr = null;
    function nr(e, t) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!t.autoFocus;
      }
      return !1;
    }
    function rr(e, t) {
      return (
        "textarea" === e ||
        "option" === e ||
        "noscript" === e ||
        "string" == typeof t.children ||
        "number" == typeof t.children ||
        ("object" == typeof t.dangerouslySetInnerHTML &&
          null !== t.dangerouslySetInnerHTML &&
          null != t.dangerouslySetInnerHTML.__html)
      );
    }
    var ar = "function" == typeof setTimeout ? setTimeout : void 0,
      ir = "function" == typeof clearTimeout ? clearTimeout : void 0;
    function or(e) {
      for (; null != e; e = e.nextSibling) {
        var t = e.nodeType;
        if (1 === t || 3 === t) break;
      }
      return e;
    }
    function lr(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (8 === e.nodeType) {
          var n = e.data;
          if (n === Xn || n === Jn || n === Gn) {
            if (0 === t) return e;
            t--;
          } else n === Zn && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var ur = Math.random()
        .toString(36)
        .slice(2),
      cr = "__reactInternalInstance$" + ur,
      sr = "__reactEventHandlers$" + ur,
      fr = "__reactContainere$" + ur;
    function dr(e) {
      var t = e[cr];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[fr] || n[cr])) {
          if (
            ((n = t.alternate),
            null !== t.child || (null !== n && null !== n.child))
          )
            for (e = lr(e); null !== e; ) {
              if ((n = e[cr])) return n;
              e = lr(e);
            }
          return t;
        }
        n = (e = n).parentNode;
      }
      return null;
    }
    function pr(e) {
      return !(e = e[cr] || e[fr]) ||
        (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
        ? null
        : e;
    }
    function hr(e) {
      if (5 === e.tag || 6 === e.tag) return e.stateNode;
      throw Error(o(33));
    }
    function mr(e) {
      return e[sr] || null;
    }
    var vr = null,
      gr = null,
      yr = null;
    function br() {
      if (yr) return yr;
      var e,
        t,
        n = gr,
        r = n.length,
        a = "value" in vr ? vr.value : vr.textContent,
        i = a.length;
      for (e = 0; e < r && n[e] === a[e]; e++);
      var o = r - e;
      for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
      return (yr = a.slice(e, 1 < t ? 1 - t : void 0));
    }
    var wr = It.extend({ data: null }),
      kr = It.extend({ data: null }),
      xr = [9, 13, 27, 32],
      _r = J && "CompositionEvent" in window,
      Er = null;
    J && "documentMode" in document && (Er = document.documentMode);
    var Tr = J && "TextEvent" in window && !Er,
      Sr = J && (!_r || (Er && 8 < Er && 11 >= Er)),
      Cr = String.fromCharCode(32),
      Or = {
        beforeInput: {
          phasedRegistrationNames: {
            bubbled: "onBeforeInput",
            captured: "onBeforeInputCapture"
          },
          dependencies: ["compositionend", "keypress", "textInput", "paste"]
        },
        compositionEnd: {
          phasedRegistrationNames: {
            bubbled: "onCompositionEnd",
            captured: "onCompositionEndCapture"
          },
          dependencies: "blur compositionend keydown keypress keyup mousedown".split(
            " "
          )
        },
        compositionStart: {
          phasedRegistrationNames: {
            bubbled: "onCompositionStart",
            captured: "onCompositionStartCapture"
          },
          dependencies: "blur compositionstart keydown keypress keyup mousedown".split(
            " "
          )
        },
        compositionUpdate: {
          phasedRegistrationNames: {
            bubbled: "onCompositionUpdate",
            captured: "onCompositionUpdateCapture"
          },
          dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(
            " "
          )
        }
      },
      Mr = !1;
    function Pr(e, t) {
      switch (e) {
        case "keyup":
          return -1 !== xr.indexOf(t.keyCode);
        case "keydown":
          return 229 !== t.keyCode;
        case "keypress":
        case "mousedown":
        case "blur":
          return !0;
        default:
          return !1;
      }
    }
    function Nr(e) {
      return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
    }
    var Rr = !1;
    var Dr = {
        eventTypes: Or,
        extractEvents: function(e, t, n, r) {
          var a;
          if (_r)
            e: {
              switch (e) {
                case "compositionstart":
                  var i = Or.compositionStart;
                  break e;
                case "compositionend":
                  i = Or.compositionEnd;
                  break e;
                case "compositionupdate":
                  i = Or.compositionUpdate;
                  break e;
              }
              i = void 0;
            }
          else
            Rr
              ? Pr(e, n) && (i = Or.compositionEnd)
              : "keydown" === e &&
                229 === n.keyCode &&
                (i = Or.compositionStart);
          return (
            i
              ? (Sr &&
                  "ko" !== n.locale &&
                  (Rr || i !== Or.compositionStart
                    ? i === Or.compositionEnd && Rr && (a = br())
                    : ((gr = "value" in (vr = r) ? vr.value : vr.textContent),
                      (Rr = !0))),
                (i = wr.getPooled(i, t, n, r)),
                a ? (i.data = a) : null !== (a = Nr(n)) && (i.data = a),
                Rt(i),
                (a = i))
              : (a = null),
            (e = Tr
              ? (function(e, t) {
                  switch (e) {
                    case "compositionend":
                      return Nr(t);
                    case "keypress":
                      return 32 !== t.which ? null : ((Mr = !0), Cr);
                    case "textInput":
                      return (e = t.data) === Cr && Mr ? null : e;
                    default:
                      return null;
                  }
                })(e, n)
              : (function(e, t) {
                  if (Rr)
                    return "compositionend" === e || (!_r && Pr(e, t))
                      ? ((e = br()), (yr = gr = vr = null), (Rr = !1), e)
                      : null;
                  switch (e) {
                    case "paste":
                      return null;
                    case "keypress":
                      if (
                        !(t.ctrlKey || t.altKey || t.metaKey) ||
                        (t.ctrlKey && t.altKey)
                      ) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which);
                      }
                      return null;
                    case "compositionend":
                      return Sr && "ko" !== t.locale ? null : t.data;
                    default:
                      return null;
                  }
                })(e, n))
              ? (((t = kr.getPooled(Or.beforeInput, t, n, r)).data = e), Rt(t))
              : (t = null),
            null === a ? t : null === t ? a : [a, t]
          );
        }
      },
      Lr = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
      };
    function Ir(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return "input" === t ? !!Lr[e.type] : "textarea" === t;
    }
    var jr = {
      change: {
        phasedRegistrationNames: {
          bubbled: "onChange",
          captured: "onChangeCapture"
        },
        dependencies: "blur change click focus input keydown keyup selectionchange".split(
          " "
        )
      }
    };
    function Ar(e, t, n) {
      return (
        ((e = It.getPooled(jr.change, e, t, n)).type = "change"),
        ae(n),
        Rt(e),
        e
      );
    }
    var Fr = null,
      zr = null;
    function Ur(e) {
      P(e);
    }
    function Wr(e) {
      if (Te(hr(e))) return e;
    }
    function Hr(e, t) {
      if ("change" === e) return t;
    }
    var qr = !1;
    function Vr() {
      Fr && (Fr.detachEvent("onpropertychange", Br), (zr = Fr = null));
    }
    function Br(e) {
      if ("value" === e.propertyName && Wr(zr))
        if (((e = Ar(zr, e, St(e))), se)) P(e);
        else {
          se = !0;
          try {
            oe(Ur, e);
          } finally {
            (se = !1), de();
          }
        }
    }
    function $r(e, t, n) {
      "focus" === e
        ? (Vr(), (zr = n), (Fr = t).attachEvent("onpropertychange", Br))
        : "blur" === e && Vr();
    }
    function Qr(e) {
      if ("selectionchange" === e || "keyup" === e || "keydown" === e)
        return Wr(zr);
    }
    function Kr(e, t) {
      if ("click" === e) return Wr(t);
    }
    function Yr(e, t) {
      if ("input" === e || "change" === e) return Wr(t);
    }
    J &&
      (qr =
        Rn("input") && (!document.documentMode || 9 < document.documentMode));
    var Xr,
      Zr = {
        eventTypes: jr,
        _isInputEventSupported: qr,
        extractEvents: function(e, t, n, r) {
          var a = t ? hr(t) : window,
            i = a.nodeName && a.nodeName.toLowerCase();
          if ("select" === i || ("input" === i && "file" === a.type))
            var o = Hr;
          else if (Ir(a))
            if (qr) o = Yr;
            else {
              o = Qr;
              var l = $r;
            }
          else
            (i = a.nodeName) &&
              "input" === i.toLowerCase() &&
              ("checkbox" === a.type || "radio" === a.type) &&
              (o = Kr);
          if (o && (o = o(e, t))) return Ar(o, n, r);
          l && l(e, a, t),
            "blur" === e &&
              (e = a._wrapperState) &&
              e.controlled &&
              "number" === a.type &&
              Ne(a, "number", a.value);
        }
      },
      Gr = {
        mouseEnter: {
          registrationName: "onMouseEnter",
          dependencies: ["mouseout", "mouseover"]
        },
        mouseLeave: {
          registrationName: "onMouseLeave",
          dependencies: ["mouseout", "mouseover"]
        },
        pointerEnter: {
          registrationName: "onPointerEnter",
          dependencies: ["pointerout", "pointerover"]
        },
        pointerLeave: {
          registrationName: "onPointerLeave",
          dependencies: ["pointerout", "pointerover"]
        }
      },
      Jr = {
        eventTypes: Gr,
        extractEvents: function(e, t, n, r, a) {
          var i = "mouseover" === e || "pointerover" === e,
            o = "mouseout" === e || "pointerout" === e;
          if (
            (i && 0 == (32 & a) && (n.relatedTarget || n.fromElement)) ||
            (!o && !i)
          )
            return null;
          if (
            ((a =
              r.window === r
                ? r
                : (a = r.ownerDocument)
                ? a.defaultView || a.parentWindow
                : window),
            o
              ? ((o = t),
                null !==
                  (t = (t = n.relatedTarget || n.toElement) ? dr(t) : null) &&
                  (t !== (i = et(t)) || (5 !== t.tag && 6 !== t.tag)) &&
                  (t = null))
              : (o = null),
            o === t)
          )
            return null;
          if ("mouseout" === e || "mouseover" === e)
            var l = en,
              u = Gr.mouseLeave,
              c = Gr.mouseEnter,
              s = "mouse";
          else
            ("pointerout" !== e && "pointerover" !== e) ||
              ((l = tn),
              (u = Gr.pointerLeave),
              (c = Gr.pointerEnter),
              (s = "pointer"));
          if (
            ((e = null == o ? a : hr(o)),
            (a = null == t ? a : hr(t)),
            ((u = l.getPooled(u, o, n, r)).type = s + "leave"),
            (u.target = e),
            (u.relatedTarget = a),
            ((r = l.getPooled(c, t, n, r)).type = s + "enter"),
            (r.target = a),
            (r.relatedTarget = e),
            (s = t),
            (l = o) && s)
          )
            e: {
              for (e = s, o = 0, t = c = l; t; t = Ct(t)) o++;
              for (t = 0, a = e; a; a = Ct(a)) t++;
              for (; 0 < o - t; ) (c = Ct(c)), o--;
              for (; 0 < t - o; ) (e = Ct(e)), t--;
              for (; o--; ) {
                if (c === e || c === e.alternate) break e;
                (c = Ct(c)), (e = Ct(e));
              }
              c = null;
            }
          else c = null;
          for (
            e = c, c = [];
            l && l !== e && (null === (o = l.alternate) || o !== e);

          )
            c.push(l), (l = Ct(l));
          for (
            l = [];
            s && s !== e && (null === (o = s.alternate) || o !== e);

          )
            l.push(s), (s = Ct(s));
          for (s = 0; s < c.length; s++) Pt(c[s], "bubbled", u);
          for (s = l.length; 0 < s--; ) Pt(l[s], "captured", r);
          return n === Xr ? ((Xr = null), [u]) : ((Xr = n), [u, r]);
        }
      };
    var ea =
        "function" == typeof Object.is
          ? Object.is
          : function(e, t) {
              return (
                (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
              );
            },
      ta = Object.prototype.hasOwnProperty;
    function na(e, t) {
      if (ea(e, t)) return !0;
      if (
        "object" != typeof e ||
        null === e ||
        "object" != typeof t ||
        null === t
      )
        return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++)
        if (!ta.call(t, n[r]) || !ea(e[n[r]], t[n[r]])) return !1;
      return !0;
    }
    var ra = J && "documentMode" in document && 11 >= document.documentMode,
      aa = {
        select: {
          phasedRegistrationNames: {
            bubbled: "onSelect",
            captured: "onSelectCapture"
          },
          dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(
            " "
          )
        }
      },
      ia = null,
      oa = null,
      la = null,
      ua = !1;
    function ca(e, t) {
      var n =
        t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
      return ua || null == ia || ia !== Bn(n)
        ? null
        : ("selectionStart" in (n = ia) && Yn(n)
            ? (n = { start: n.selectionStart, end: n.selectionEnd })
            : (n = {
                anchorNode: (n = (
                  (n.ownerDocument && n.ownerDocument.defaultView) ||
                  window
                ).getSelection()).anchorNode,
                anchorOffset: n.anchorOffset,
                focusNode: n.focusNode,
                focusOffset: n.focusOffset
              }),
          la && na(la, n)
            ? null
            : ((la = n),
              ((e = It.getPooled(aa.select, oa, e, t)).type = "select"),
              (e.target = ia),
              Rt(e),
              e));
    }
    var sa = {
      eventTypes: aa,
      extractEvents: function(e, t, n, r) {
        var a,
          i =
            r.window === r
              ? r.document
              : 9 === r.nodeType
              ? r
              : r.ownerDocument;
        if (!(a = !i)) {
          e: {
            (i = Ln(i)), (a = h.onSelect);
            for (var o = 0; o < a.length; o++)
              if (!i.has(a[o])) {
                i = !1;
                break e;
              }
            i = !0;
          }
          a = !i;
        }
        if (a) return null;
        switch (((i = t ? hr(t) : window), e)) {
          case "focus":
            (Ir(i) || "true" === i.contentEditable) &&
              ((ia = i), (oa = t), (la = null));
            break;
          case "blur":
            la = oa = ia = null;
            break;
          case "mousedown":
            ua = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            return (ua = !1), ca(n, r);
          case "selectionchange":
            if (ra) break;
          case "keydown":
          case "keyup":
            return ca(n, r);
        }
        return null;
      }
    };
    N.injectEventPluginOrder(
      "ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(
        " "
      )
    ),
      (x = mr),
      (_ = pr),
      (E = hr),
      N.injectEventPluginsByName({
        SimpleEventPlugin: gn,
        EnterLeaveEventPlugin: Jr,
        ChangeEventPlugin: Zr,
        SelectEventPlugin: sa,
        BeforeInputEventPlugin: Dr
      }),
      new Set();
    var fa = [],
      da = -1;
    function pa(e) {
      0 > da || ((e.current = fa[da]), (fa[da] = null), da--);
    }
    function ha(e, t) {
      da++, (fa[da] = e.current), (e.current = t);
    }
    var ma = {},
      va = { current: ma },
      ga = { current: !1 },
      ya = ma;
    function ba(e, t) {
      var n = e.type.contextTypes;
      if (!n) return ma;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
      var a,
        i = {};
      for (a in n) i[a] = t[a];
      return (
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = i)),
        i
      );
    }
    function wa(e) {
      return null != (e = e.childContextTypes);
    }
    function ka(e) {
      pa(ga), pa(va);
    }
    function xa(e) {
      pa(ga), pa(va);
    }
    function _a(e, t, n) {
      if (va.current !== ma) throw Error(o(168));
      ha(va, t), ha(ga, n);
    }
    function Ea(e, t, n) {
      var r = e.stateNode;
      if (((e = t.childContextTypes), "function" != typeof r.getChildContext))
        return n;
      for (var i in (r = r.getChildContext()))
        if (!(i in e)) throw Error(o(108, Z(t) || "Unknown", i));
      return a({}, n, {}, r);
    }
    function Ta(e) {
      var t = e.stateNode;
      return (
        (t = (t && t.__reactInternalMemoizedMergedChildContext) || ma),
        (ya = va.current),
        ha(va, t),
        ha(ga, ga.current),
        !0
      );
    }
    function Sa(e, t, n) {
      var r = e.stateNode;
      if (!r) throw Error(o(169));
      n
        ? ((t = Ea(e, t, ya)),
          (r.__reactInternalMemoizedMergedChildContext = t),
          pa(ga),
          pa(va),
          ha(va, t))
        : pa(ga),
        ha(ga, n);
    }
    var Ca = i.unstable_runWithPriority,
      Oa = i.unstable_scheduleCallback,
      Ma = i.unstable_cancelCallback,
      Pa = i.unstable_shouldYield,
      Na = i.unstable_requestPaint,
      Ra = i.unstable_now,
      Da = i.unstable_getCurrentPriorityLevel,
      La = i.unstable_ImmediatePriority,
      Ia = i.unstable_UserBlockingPriority,
      ja = i.unstable_NormalPriority,
      Aa = i.unstable_LowPriority,
      Fa = i.unstable_IdlePriority,
      za = {},
      Ua = void 0 !== Na ? Na : function() {},
      Wa = null,
      Ha = null,
      qa = !1,
      Va = Ra(),
      Ba =
        1e4 > Va
          ? Ra
          : function() {
              return Ra() - Va;
            };
    function $a() {
      switch (Da()) {
        case La:
          return 99;
        case Ia:
          return 98;
        case ja:
          return 97;
        case Aa:
          return 96;
        case Fa:
          return 95;
        default:
          throw Error(o(332));
      }
    }
    function Qa(e) {
      switch (e) {
        case 99:
          return La;
        case 98:
          return Ia;
        case 97:
          return ja;
        case 96:
          return Aa;
        case 95:
          return Fa;
        default:
          throw Error(o(332));
      }
    }
    function Ka(e, t) {
      return (e = Qa(e)), Ca(e, t);
    }
    function Ya(e, t, n) {
      return (e = Qa(e)), Oa(e, t, n);
    }
    function Xa(e) {
      return null === Wa ? ((Wa = [e]), (Ha = Oa(La, Ga))) : Wa.push(e), za;
    }
    function Za() {
      if (null !== Ha) {
        var e = Ha;
        (Ha = null), Ma(e);
      }
      Ga();
    }
    function Ga() {
      if (!qa && null !== Wa) {
        qa = !0;
        var e = 0;
        try {
          var t = Wa;
          Ka(99, function() {
            for (; e < t.length; e++) {
              var n = t[e];
              do {
                n = n(!0);
              } while (null !== n);
            }
          }),
            (Wa = null);
        } catch (t) {
          throw (null !== Wa && (Wa = Wa.slice(e + 1)), Oa(La, Za), t);
        } finally {
          qa = !1;
        }
      }
    }
    var Ja = 3;
    function ei(e, t, n) {
      return (
        1073741821 - (1 + (((1073741821 - e + t / 10) / (n /= 10)) | 0)) * n
      );
    }
    function ti(e, t) {
      if (e && e.defaultProps)
        for (var n in ((t = a({}, t)), (e = e.defaultProps)))
          void 0 === t[n] && (t[n] = e[n]);
      return t;
    }
    var ni = { current: null },
      ri = null,
      ai = null,
      ii = null;
    function oi() {
      ii = ai = ri = null;
    }
    function li(e, t) {
      var n = e.type._context;
      ha(ni, n._currentValue), (n._currentValue = t);
    }
    function ui(e) {
      var t = ni.current;
      pa(ni), (e.type._context._currentValue = t);
    }
    function ci(e, t) {
      for (; null !== e; ) {
        var n = e.alternate;
        if (e.childExpirationTime < t)
          (e.childExpirationTime = t),
            null !== n &&
              n.childExpirationTime < t &&
              (n.childExpirationTime = t);
        else {
          if (!(null !== n && n.childExpirationTime < t)) break;
          n.childExpirationTime = t;
        }
        e = e.return;
      }
    }
    function si(e, t) {
      (ri = e),
        (ii = ai = null),
        null !== (e = e.dependencies) &&
          null !== e.firstContext &&
          (e.expirationTime >= t && (Bo = !0), (e.firstContext = null));
    }
    function fi(e, t) {
      if (ii !== e && !1 !== t && 0 !== t)
        if (
          (("number" == typeof t && 1073741823 !== t) ||
            ((ii = e), (t = 1073741823)),
          (t = { context: e, observedBits: t, next: null }),
          null === ai)
        ) {
          if (null === ri) throw Error(o(308));
          (ai = t),
            (ri.dependencies = {
              expirationTime: 0,
              firstContext: t,
              responders: null
            });
        } else ai = ai.next = t;
      return e._currentValue;
    }
    var di = !1;
    function pi(e) {
      return {
        baseState: e,
        firstUpdate: null,
        lastUpdate: null,
        firstCapturedUpdate: null,
        lastCapturedUpdate: null,
        firstEffect: null,
        lastEffect: null,
        firstCapturedEffect: null,
        lastCapturedEffect: null
      };
    }
    function hi(e) {
      return {
        baseState: e.baseState,
        firstUpdate: e.firstUpdate,
        lastUpdate: e.lastUpdate,
        firstCapturedUpdate: null,
        lastCapturedUpdate: null,
        firstEffect: null,
        lastEffect: null,
        firstCapturedEffect: null,
        lastCapturedEffect: null
      };
    }
    function mi(e, t) {
      return {
        expirationTime: e,
        suspenseConfig: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
        nextEffect: null
      };
    }
    function vi(e, t) {
      null === e.lastUpdate
        ? (e.firstUpdate = e.lastUpdate = t)
        : ((e.lastUpdate.next = t), (e.lastUpdate = t));
    }
    function gi(e, t) {
      var n = e.alternate;
      if (null === n) {
        var r = e.updateQueue,
          a = null;
        null === r && (r = e.updateQueue = pi(e.memoizedState));
      } else
        (r = e.updateQueue),
          (a = n.updateQueue),
          null === r
            ? null === a
              ? ((r = e.updateQueue = pi(e.memoizedState)),
                (a = n.updateQueue = pi(n.memoizedState)))
              : (r = e.updateQueue = hi(a))
            : null === a && (a = n.updateQueue = hi(r));
      null === a || r === a
        ? vi(r, t)
        : null === r.lastUpdate || null === a.lastUpdate
        ? (vi(r, t), vi(a, t))
        : (vi(r, t), (a.lastUpdate = t));
    }
    function yi(e, t) {
      var n = e.updateQueue;
      null ===
      (n = null === n ? (e.updateQueue = pi(e.memoizedState)) : bi(e, n))
        .lastCapturedUpdate
        ? (n.firstCapturedUpdate = n.lastCapturedUpdate = t)
        : ((n.lastCapturedUpdate.next = t), (n.lastCapturedUpdate = t));
    }
    function bi(e, t) {
      var n = e.alternate;
      return (
        null !== n && t === n.updateQueue && (t = e.updateQueue = hi(t)), t
      );
    }
    function wi(e, t, n, r, i, o) {
      switch (n.tag) {
        case 1:
          return "function" == typeof (e = n.payload) ? e.call(o, r, i) : e;
        case 3:
          e.effectTag = (-4097 & e.effectTag) | 64;
        case 0:
          if (
            null ==
            (i = "function" == typeof (e = n.payload) ? e.call(o, r, i) : e)
          )
            break;
          return a({}, r, i);
        case 2:
          di = !0;
      }
      return r;
    }
    function ki(e, t, n, r, a) {
      di = !1;
      for (
        var i = (t = bi(e, t)).baseState,
          o = null,
          l = 0,
          u = t.firstUpdate,
          c = i;
        null !== u;

      ) {
        var s = u.expirationTime;
        s < a
          ? (null === o && ((o = u), (i = c)), l < s && (l = s))
          : (Cu(s, u.suspenseConfig),
            (c = wi(e, 0, u, c, n, r)),
            null !== u.callback &&
              ((e.effectTag |= 32),
              (u.nextEffect = null),
              null === t.lastEffect
                ? (t.firstEffect = t.lastEffect = u)
                : ((t.lastEffect.nextEffect = u), (t.lastEffect = u)))),
          (u = u.next);
      }
      for (s = null, u = t.firstCapturedUpdate; null !== u; ) {
        var f = u.expirationTime;
        f < a
          ? (null === s && ((s = u), null === o && (i = c)), l < f && (l = f))
          : ((c = wi(e, 0, u, c, n, r)),
            null !== u.callback &&
              ((e.effectTag |= 32),
              (u.nextEffect = null),
              null === t.lastCapturedEffect
                ? (t.firstCapturedEffect = t.lastCapturedEffect = u)
                : ((t.lastCapturedEffect.nextEffect = u),
                  (t.lastCapturedEffect = u)))),
          (u = u.next);
      }
      null === o && (t.lastUpdate = null),
        null === s ? (t.lastCapturedUpdate = null) : (e.effectTag |= 32),
        null === o && null === s && (i = c),
        (t.baseState = i),
        (t.firstUpdate = o),
        (t.firstCapturedUpdate = s),
        Ou(l),
        (e.expirationTime = l),
        (e.memoizedState = c);
    }
    function xi(e, t, n) {
      null !== t.firstCapturedUpdate &&
        (null !== t.lastUpdate &&
          ((t.lastUpdate.next = t.firstCapturedUpdate),
          (t.lastUpdate = t.lastCapturedUpdate)),
        (t.firstCapturedUpdate = t.lastCapturedUpdate = null)),
        _i(t.firstEffect, n),
        (t.firstEffect = t.lastEffect = null),
        _i(t.firstCapturedEffect, n),
        (t.firstCapturedEffect = t.lastCapturedEffect = null);
    }
    function _i(e, t) {
      for (; null !== e; ) {
        var n = e.callback;
        if (null !== n) {
          e.callback = null;
          var r = t;
          if ("function" != typeof n) throw Error(o(191, n));
          n.call(r);
        }
        e = e.nextEffect;
      }
    }
    var Ei = D.ReactCurrentBatchConfig,
      Ti = new r.Component().refs;
    function Si(e, t, n, r) {
      (n = null == (n = n(r, (t = e.memoizedState))) ? t : a({}, t, n)),
        (e.memoizedState = n),
        null !== (r = e.updateQueue) &&
          0 === e.expirationTime &&
          (r.baseState = n);
    }
    var Ci = {
      isMounted: function(e) {
        return !!(e = e._reactInternalFiber) && et(e) === e;
      },
      enqueueSetState: function(e, t, n) {
        e = e._reactInternalFiber;
        var r = hu(),
          a = Ei.suspense;
        ((a = mi((r = mu(r, e, a)), a)).payload = t),
          null != n && (a.callback = n),
          gi(e, a),
          vu(e, r);
      },
      enqueueReplaceState: function(e, t, n) {
        e = e._reactInternalFiber;
        var r = hu(),
          a = Ei.suspense;
        ((a = mi((r = mu(r, e, a)), a)).tag = 1),
          (a.payload = t),
          null != n && (a.callback = n),
          gi(e, a),
          vu(e, r);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternalFiber;
        var n = hu(),
          r = Ei.suspense;
        ((r = mi((n = mu(n, e, r)), r)).tag = 2),
          null != t && (r.callback = t),
          gi(e, r),
          vu(e, n);
      }
    };
    function Oi(e, t, n, r, a, i, o) {
      return "function" == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, i, o)
        : !t.prototype ||
            !t.prototype.isPureReactComponent ||
            !na(n, r) || !na(a, i);
    }
    function Mi(e, t, n) {
      var r = !1,
        a = ma,
        i = t.contextType;
      return (
        "object" == typeof i && null !== i
          ? (i = fi(i))
          : ((a = wa(t) ? ya : va.current),
            (i = (r = null != (r = t.contextTypes)) ? ba(e, a) : ma)),
        (t = new t(n, i)),
        (e.memoizedState =
          null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = Ci),
        (e.stateNode = t),
        (t._reactInternalFiber = e),
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
          (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
      );
    }
    function Pi(e, t, n, r) {
      (e = t.state),
        "function" == typeof t.componentWillReceiveProps &&
          t.componentWillReceiveProps(n, r),
        "function" == typeof t.UNSAFE_componentWillReceiveProps &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Ci.enqueueReplaceState(t, t.state, null);
    }
    function Ni(e, t, n, r) {
      var a = e.stateNode;
      (a.props = n), (a.state = e.memoizedState), (a.refs = Ti);
      var i = t.contextType;
      "object" == typeof i && null !== i
        ? (a.context = fi(i))
        : ((i = wa(t) ? ya : va.current), (a.context = ba(e, i))),
        null !== (i = e.updateQueue) &&
          (ki(e, i, n, a, r), (a.state = e.memoizedState)),
        "function" == typeof (i = t.getDerivedStateFromProps) &&
          (Si(e, t, i, n), (a.state = e.memoizedState)),
        "function" == typeof t.getDerivedStateFromProps ||
          "function" == typeof a.getSnapshotBeforeUpdate ||
          ("function" != typeof a.UNSAFE_componentWillMount &&
            "function" != typeof a.componentWillMount) ||
          ((t = a.state),
          "function" == typeof a.componentWillMount && a.componentWillMount(),
          "function" == typeof a.UNSAFE_componentWillMount &&
            a.UNSAFE_componentWillMount(),
          t !== a.state && Ci.enqueueReplaceState(a, a.state, null),
          null !== (i = e.updateQueue) &&
            (ki(e, i, n, a, r), (a.state = e.memoizedState))),
        "function" == typeof a.componentDidMount && (e.effectTag |= 4);
    }
    var Ri = Array.isArray;
    function Di(e, t, n) {
      if (
        null !== (e = n.ref) &&
        "function" != typeof e &&
        "object" != typeof e
      ) {
        if (n._owner) {
          if ((n = n._owner)) {
            if (1 !== n.tag) throw Error(o(309));
            var r = n.stateNode;
          }
          if (!r) throw Error(o(147, e));
          var a = "" + e;
          return null !== t &&
            null !== t.ref &&
            "function" == typeof t.ref &&
            t.ref._stringRef === a
            ? t.ref
            : (((t = function(e) {
                var t = r.refs;
                t === Ti && (t = r.refs = {}),
                  null === e ? delete t[a] : (t[a] = e);
              })._stringRef = a),
              t);
        }
        if ("string" != typeof e) throw Error(o(284));
        if (!n._owner) throw Error(o(290, e));
      }
      return e;
    }
    function Li(e, t) {
      if ("textarea" !== e.type)
        throw Error(
          o(
            31,
            "[object Object]" === Object.prototype.toString.call(t)
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : t,
            ""
          )
        );
    }
    function Ii(e) {
      function t(t, n) {
        if (e) {
          var r = t.lastEffect;
          null !== r
            ? ((r.nextEffect = n), (t.lastEffect = n))
            : (t.firstEffect = t.lastEffect = n),
            (n.nextEffect = null),
            (n.effectTag = 8);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; null !== r; ) t(n, r), (r = r.sibling);
        return null;
      }
      function r(e, t) {
        for (e = new Map(); null !== t; )
          null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
        return e;
      }
      function a(e, t, n) {
        return ((e = Ku(e, t)).index = 0), (e.sibling = null), e;
      }
      function i(t, n, r) {
        return (
          (t.index = r),
          e
            ? null !== (r = t.alternate)
              ? (r = r.index) < n
                ? ((t.effectTag = 2), n)
                : r
              : ((t.effectTag = 2), n)
            : n
        );
      }
      function l(t) {
        return e && null === t.alternate && (t.effectTag = 2), t;
      }
      function u(e, t, n, r) {
        return null === t || 6 !== t.tag
          ? (((t = Zu(n, e.mode, r)).return = e), t)
          : (((t = a(t, n)).return = e), t);
      }
      function c(e, t, n, r) {
        return null !== t && t.elementType === n.type
          ? (((r = a(t, n.props)).ref = Di(e, t, n)), (r.return = e), r)
          : (((r = Yu(n.type, n.key, n.props, null, e.mode, r)).ref = Di(
              e,
              t,
              n
            )),
            (r.return = e),
            r);
      }
      function s(e, t, n, r) {
        return null === t ||
          4 !== t.tag ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? (((t = Gu(n, e.mode, r)).return = e), t)
          : (((t = a(t, n.children || [])).return = e), t);
      }
      function f(e, t, n, r, i) {
        return null === t || 7 !== t.tag
          ? (((t = Xu(n, e.mode, r, i)).return = e), t)
          : (((t = a(t, n)).return = e), t);
      }
      function d(e, t, n) {
        if ("string" == typeof t || "number" == typeof t)
          return ((t = Zu("" + t, e.mode, n)).return = e), t;
        if ("object" == typeof t && null !== t) {
          switch (t.$$typeof) {
            case j:
              return (
                ((n = Yu(t.type, t.key, t.props, null, e.mode, n)).ref = Di(
                  e,
                  null,
                  t
                )),
                (n.return = e),
                n
              );
            case A:
              return ((t = Gu(t, e.mode, n)).return = e), t;
          }
          if (Ri(t) || X(t))
            return ((t = Xu(t, e.mode, n, null)).return = e), t;
          Li(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var a = null !== t ? t.key : null;
        if ("string" == typeof n || "number" == typeof n)
          return null !== a ? null : u(e, t, "" + n, r);
        if ("object" == typeof n && null !== n) {
          switch (n.$$typeof) {
            case j:
              return n.key === a
                ? n.type === F
                  ? f(e, t, n.props.children, r, a)
                  : c(e, t, n, r)
                : null;
            case A:
              return n.key === a ? s(e, t, n, r) : null;
          }
          if (Ri(n) || X(n)) return null !== a ? null : f(e, t, n, r, null);
          Li(e, n);
        }
        return null;
      }
      function h(e, t, n, r, a) {
        if ("string" == typeof r || "number" == typeof r)
          return u(t, (e = e.get(n) || null), "" + r, a);
        if ("object" == typeof r && null !== r) {
          switch (r.$$typeof) {
            case j:
              return (
                (e = e.get(null === r.key ? n : r.key) || null),
                r.type === F
                  ? f(t, e, r.props.children, a, r.key)
                  : c(t, e, r, a)
              );
            case A:
              return s(
                t,
                (e = e.get(null === r.key ? n : r.key) || null),
                r,
                a
              );
          }
          if (Ri(r) || X(r)) return f(t, (e = e.get(n) || null), r, a, null);
          Li(t, r);
        }
        return null;
      }
      function m(a, o, l, u) {
        for (
          var c = null, s = null, f = o, m = (o = 0), v = null;
          null !== f && m < l.length;
          m++
        ) {
          f.index > m ? ((v = f), (f = null)) : (v = f.sibling);
          var g = p(a, f, l[m], u);
          if (null === g) {
            null === f && (f = v);
            break;
          }
          e && f && null === g.alternate && t(a, f),
            (o = i(g, o, m)),
            null === s ? (c = g) : (s.sibling = g),
            (s = g),
            (f = v);
        }
        if (m === l.length) return n(a, f), c;
        if (null === f) {
          for (; m < l.length; m++)
            null !== (f = d(a, l[m], u)) &&
              ((o = i(f, o, m)),
              null === s ? (c = f) : (s.sibling = f),
              (s = f));
          return c;
        }
        for (f = r(a, f); m < l.length; m++)
          null !== (v = h(f, a, m, l[m], u)) &&
            (e && null !== v.alternate && f.delete(null === v.key ? m : v.key),
            (o = i(v, o, m)),
            null === s ? (c = v) : (s.sibling = v),
            (s = v));
        return (
          e &&
            f.forEach(function(e) {
              return t(a, e);
            }),
          c
        );
      }
      function v(a, l, u, c) {
        var s = X(u);
        if ("function" != typeof s) throw Error(o(150));
        if (null == (u = s.call(u))) throw Error(o(151));
        for (
          var f = (s = null), m = l, v = (l = 0), g = null, y = u.next();
          null !== m && !y.done;
          v++, y = u.next()
        ) {
          m.index > v ? ((g = m), (m = null)) : (g = m.sibling);
          var b = p(a, m, y.value, c);
          if (null === b) {
            null === m && (m = g);
            break;
          }
          e && m && null === b.alternate && t(a, m),
            (l = i(b, l, v)),
            null === f ? (s = b) : (f.sibling = b),
            (f = b),
            (m = g);
        }
        if (y.done) return n(a, m), s;
        if (null === m) {
          for (; !y.done; v++, y = u.next())
            null !== (y = d(a, y.value, c)) &&
              ((l = i(y, l, v)),
              null === f ? (s = y) : (f.sibling = y),
              (f = y));
          return s;
        }
        for (m = r(a, m); !y.done; v++, y = u.next())
          null !== (y = h(m, a, v, y.value, c)) &&
            (e && null !== y.alternate && m.delete(null === y.key ? v : y.key),
            (l = i(y, l, v)),
            null === f ? (s = y) : (f.sibling = y),
            (f = y));
        return (
          e &&
            m.forEach(function(e) {
              return t(a, e);
            }),
          s
        );
      }
      return function(e, r, i, u) {
        var c =
          "object" == typeof i && null !== i && i.type === F && null === i.key;
        c && (i = i.props.children);
        var s = "object" == typeof i && null !== i;
        if (s)
          switch (i.$$typeof) {
            case j:
              e: {
                for (s = i.key, c = r; null !== c; ) {
                  if (c.key === s) {
                    if (7 === c.tag ? i.type === F : c.elementType === i.type) {
                      n(e, c.sibling),
                        ((r = a(
                          c,
                          i.type === F ? i.props.children : i.props
                        )).ref = Di(e, c, i)),
                        (r.return = e),
                        (e = r);
                      break e;
                    }
                    n(e, c);
                    break;
                  }
                  t(e, c), (c = c.sibling);
                }
                i.type === F
                  ? (((r = Xu(i.props.children, e.mode, u, i.key)).return = e),
                    (e = r))
                  : (((u = Yu(
                      i.type,
                      i.key,
                      i.props,
                      null,
                      e.mode,
                      u
                    )).ref = Di(e, r, i)),
                    (u.return = e),
                    (e = u));
              }
              return l(e);
            case A:
              e: {
                for (c = i.key; null !== r; ) {
                  if (r.key === c) {
                    if (
                      4 === r.tag &&
                      r.stateNode.containerInfo === i.containerInfo &&
                      r.stateNode.implementation === i.implementation
                    ) {
                      n(e, r.sibling),
                        ((r = a(r, i.children || [])).return = e),
                        (e = r);
                      break e;
                    }
                    n(e, r);
                    break;
                  }
                  t(e, r), (r = r.sibling);
                }
                ((r = Gu(i, e.mode, u)).return = e), (e = r);
              }
              return l(e);
          }
        if ("string" == typeof i || "number" == typeof i)
          return (
            (i = "" + i),
            null !== r && 6 === r.tag
              ? (n(e, r.sibling), ((r = a(r, i)).return = e), (e = r))
              : (n(e, r), ((r = Zu(i, e.mode, u)).return = e), (e = r)),
            l(e)
          );
        if (Ri(i)) return m(e, r, i, u);
        if (X(i)) return v(e, r, i, u);
        if ((s && Li(e, i), void 0 === i && !c))
          switch (e.tag) {
            case 1:
            case 0:
              throw ((e = e.type),
              Error(o(152, e.displayName || e.name || "Component")));
          }
        return n(e, r);
      };
    }
    var ji = Ii(!0),
      Ai = Ii(!1),
      Fi = {},
      zi = { current: Fi },
      Ui = { current: Fi },
      Wi = { current: Fi };
    function Hi(e) {
      if (e === Fi) throw Error(o(174));
      return e;
    }
    function qi(e, t) {
      ha(Wi, t), ha(Ui, e), ha(zi, Fi);
      var n = t.nodeType;
      switch (n) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : Ue(null, "");
          break;
        default:
          t = Ue(
            (t = (n = 8 === n ? t.parentNode : t).namespaceURI || null),
            (n = n.tagName)
          );
      }
      pa(zi), ha(zi, t);
    }
    function Vi(e) {
      pa(zi), pa(Ui), pa(Wi);
    }
    function Bi(e) {
      Hi(Wi.current);
      var t = Hi(zi.current),
        n = Ue(t, e.type);
      t !== n && (ha(Ui, e), ha(zi, n));
    }
    function $i(e) {
      Ui.current === e && (pa(zi), pa(Ui));
    }
    var Qi = { current: 0 };
    function Ki(e) {
      for (var t = e; null !== t; ) {
        if (13 === t.tag) {
          var n = t.memoizedState;
          if (
            null !== n &&
            (null === (n = n.dehydrated) || n.data === Gn || n.data === Jn)
          )
            return t;
        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
          if (0 != (64 & t.effectTag)) return t;
        } else if (null !== t.child) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        for (; null === t.sibling; ) {
          if (null === t.return || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    function Yi(e, t) {
      return { responder: e, props: t };
    }
    var Xi = D.ReactCurrentDispatcher,
      Zi = D.ReactCurrentBatchConfig,
      Gi = 0,
      Ji = null,
      eo = null,
      to = null,
      no = null,
      ro = null,
      ao = null,
      io = 0,
      oo = null,
      lo = 0,
      uo = !1,
      co = null,
      so = 0;
    function fo() {
      throw Error(o(321));
    }
    function po(e, t) {
      if (null === t) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!ea(e[n], t[n])) return !1;
      return !0;
    }
    function ho(e, t, n, r, a, i) {
      if (
        ((Gi = i),
        (Ji = t),
        (to = null !== e ? e.memoizedState : null),
        (Xi.current = null === to ? Do : Lo),
        (t = n(r, a)),
        uo)
      ) {
        do {
          (uo = !1),
            (so += 1),
            (to = null !== e ? e.memoizedState : null),
            (ao = no),
            (oo = ro = eo = null),
            (Xi.current = Lo),
            (t = n(r, a));
        } while (uo);
        (co = null), (so = 0);
      }
      if (
        ((Xi.current = Ro),
        ((e = Ji).memoizedState = no),
        (e.expirationTime = io),
        (e.updateQueue = oo),
        (e.effectTag |= lo),
        (e = null !== eo && null !== eo.next),
        (Gi = 0),
        (ao = ro = no = to = eo = Ji = null),
        (io = 0),
        (oo = null),
        (lo = 0),
        e)
      )
        throw Error(o(300));
      return t;
    }
    function mo() {
      (Xi.current = Ro),
        (Gi = 0),
        (ao = ro = no = to = eo = Ji = null),
        (io = 0),
        (oo = null),
        (lo = 0),
        (uo = !1),
        (co = null),
        (so = 0);
    }
    function vo() {
      var e = {
        memoizedState: null,
        baseState: null,
        queue: null,
        baseUpdate: null,
        next: null
      };
      return null === ro ? (no = ro = e) : (ro = ro.next = e), ro;
    }
    function go() {
      if (null !== ao)
        (ao = (ro = ao).next), (to = null !== (eo = to) ? eo.next : null);
      else {
        if (null === to) throw Error(o(310));
        var e = {
          memoizedState: (eo = to).memoizedState,
          baseState: eo.baseState,
          queue: eo.queue,
          baseUpdate: eo.baseUpdate,
          next: null
        };
        (ro = null === ro ? (no = e) : (ro.next = e)), (to = eo.next);
      }
      return ro;
    }
    function yo(e, t) {
      return "function" == typeof t ? t(e) : t;
    }
    function bo(e) {
      var t = go(),
        n = t.queue;
      if (null === n) throw Error(o(311));
      if (((n.lastRenderedReducer = e), 0 < so)) {
        var r = n.dispatch;
        if (null !== co) {
          var a = co.get(n);
          if (void 0 !== a) {
            co.delete(n);
            var i = t.memoizedState;
            do {
              (i = e(i, a.action)), (a = a.next);
            } while (null !== a);
            return (
              ea(i, t.memoizedState) || (Bo = !0),
              (t.memoizedState = i),
              t.baseUpdate === n.last && (t.baseState = i),
              (n.lastRenderedState = i),
              [i, r]
            );
          }
        }
        return [t.memoizedState, r];
      }
      r = n.last;
      var l = t.baseUpdate;
      if (
        ((i = t.baseState),
        null !== l
          ? (null !== r && (r.next = null), (r = l.next))
          : (r = null !== r ? r.next : null),
        null !== r)
      ) {
        var u = (a = null),
          c = r,
          s = !1;
        do {
          var f = c.expirationTime;
          f < Gi
            ? (s || ((s = !0), (u = l), (a = i)), f > io && Ou((io = f)))
            : (Cu(f, c.suspenseConfig),
              (i = c.eagerReducer === e ? c.eagerState : e(i, c.action))),
            (l = c),
            (c = c.next);
        } while (null !== c && c !== r);
        s || ((u = l), (a = i)),
          ea(i, t.memoizedState) || (Bo = !0),
          (t.memoizedState = i),
          (t.baseUpdate = u),
          (t.baseState = a),
          (n.lastRenderedState = i);
      }
      return [t.memoizedState, n.dispatch];
    }
    function wo(e) {
      var t = vo();
      return (
        "function" == typeof e && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = (e = t.queue = {
          last: null,
          dispatch: null,
          lastRenderedReducer: yo,
          lastRenderedState: e
        }).dispatch = No.bind(null, Ji, e)),
        [t.memoizedState, e]
      );
    }
    function ko(e) {
      return bo(yo);
    }
    function xo(e, t, n, r) {
      return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === oo
          ? ((oo = { lastEffect: null }).lastEffect = e.next = e)
          : null === (t = oo.lastEffect)
          ? (oo.lastEffect = e.next = e)
          : ((n = t.next), (t.next = e), (e.next = n), (oo.lastEffect = e)),
        e
      );
    }
    function _o(e, t, n, r) {
      var a = vo();
      (lo |= e), (a.memoizedState = xo(t, n, void 0, void 0 === r ? null : r));
    }
    function Eo(e, t, n, r) {
      var a = go();
      r = void 0 === r ? null : r;
      var i = void 0;
      if (null !== eo) {
        var o = eo.memoizedState;
        if (((i = o.destroy), null !== r && po(r, o.deps)))
          return void xo(0, n, i, r);
      }
      (lo |= e), (a.memoizedState = xo(t, n, i, r));
    }
    function To(e, t) {
      return _o(516, 192, e, t);
    }
    function So(e, t) {
      return Eo(516, 192, e, t);
    }
    function Co(e, t) {
      return "function" == typeof t
        ? ((e = e()),
          t(e),
          function() {
            t(null);
          })
        : null != t
        ? ((e = e()),
          (t.current = e),
          function() {
            t.current = null;
          })
        : void 0;
    }
    function Oo() {}
    function Mo(e, t) {
      return (vo().memoizedState = [e, void 0 === t ? null : t]), e;
    }
    function Po(e, t) {
      var n = go();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      return null !== r && null !== t && po(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
    }
    function No(e, t, n) {
      if (!(25 > so)) throw Error(o(301));
      var r = e.alternate;
      if (e === Ji || (null !== r && r === Ji))
        if (
          ((uo = !0),
          (e = {
            expirationTime: Gi,
            suspenseConfig: null,
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null
          }),
          null === co && (co = new Map()),
          void 0 === (n = co.get(t)))
        )
          co.set(t, e);
        else {
          for (t = n; null !== t.next; ) t = t.next;
          t.next = e;
        }
      else {
        var a = hu(),
          i = Ei.suspense;
        i = {
          expirationTime: (a = mu(a, e, i)),
          suspenseConfig: i,
          action: n,
          eagerReducer: null,
          eagerState: null,
          next: null
        };
        var l = t.last;
        if (null === l) i.next = i;
        else {
          var u = l.next;
          null !== u && (i.next = u), (l.next = i);
        }
        if (
          ((t.last = i),
          0 === e.expirationTime &&
            (null === r || 0 === r.expirationTime) &&
            null !== (r = t.lastRenderedReducer))
        )
          try {
            var c = t.lastRenderedState,
              s = r(c, n);
            if (((i.eagerReducer = r), (i.eagerState = s), ea(s, c))) return;
          } catch (e) {}
        vu(e, a);
      }
    }
    var Ro = {
        readContext: fi,
        useCallback: fo,
        useContext: fo,
        useEffect: fo,
        useImperativeHandle: fo,
        useLayoutEffect: fo,
        useMemo: fo,
        useReducer: fo,
        useRef: fo,
        useState: fo,
        useDebugValue: fo,
        useResponder: fo,
        useDeferredValue: fo,
        useTransition: fo
      },
      Do = {
        readContext: fi,
        useCallback: Mo,
        useContext: fi,
        useEffect: To,
        useImperativeHandle: function(e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            _o(4, 36, Co.bind(null, t, e), n)
          );
        },
        useLayoutEffect: function(e, t) {
          return _o(4, 36, e, t);
        },
        useMemo: function(e, t) {
          var n = vo();
          return (
            (t = void 0 === t ? null : t),
            (e = e()),
            (n.memoizedState = [e, t]),
            e
          );
        },
        useReducer: function(e, t, n) {
          var r = vo();
          return (
            (t = void 0 !== n ? n(t) : t),
            (r.memoizedState = r.baseState = t),
            (e = (e = r.queue = {
              last: null,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t
            }).dispatch = No.bind(null, Ji, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function(e) {
          return (e = { current: e }), (vo().memoizedState = e);
        },
        useState: wo,
        useDebugValue: Oo,
        useResponder: Yi,
        useDeferredValue: function(e, t) {
          var n = wo(e),
            r = n[0],
            a = n[1];
          return (
            To(
              function() {
                i.unstable_next(function() {
                  var n = Zi.suspense;
                  Zi.suspense = void 0 === t ? null : t;
                  try {
                    a(e);
                  } finally {
                    Zi.suspense = n;
                  }
                });
              },
              [e, t]
            ),
            r
          );
        },
        useTransition: function(e) {
          var t = wo(!1),
            n = t[0],
            r = t[1];
          return [
            Mo(
              function(t) {
                r(!0),
                  i.unstable_next(function() {
                    var n = Zi.suspense;
                    Zi.suspense = void 0 === e ? null : e;
                    try {
                      r(!1), t();
                    } finally {
                      Zi.suspense = n;
                    }
                  });
              },
              [e, n]
            ),
            n
          ];
        }
      },
      Lo = {
        readContext: fi,
        useCallback: Po,
        useContext: fi,
        useEffect: So,
        useImperativeHandle: function(e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            Eo(4, 36, Co.bind(null, t, e), n)
          );
        },
        useLayoutEffect: function(e, t) {
          return Eo(4, 36, e, t);
        },
        useMemo: function(e, t) {
          var n = go();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && po(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        },
        useReducer: bo,
        useRef: function() {
          return go().memoizedState;
        },
        useState: ko,
        useDebugValue: Oo,
        useResponder: Yi,
        useDeferredValue: function(e, t) {
          var n = ko(),
            r = n[0],
            a = n[1];
          return (
            So(
              function() {
                i.unstable_next(function() {
                  var n = Zi.suspense;
                  Zi.suspense = void 0 === t ? null : t;
                  try {
                    a(e);
                  } finally {
                    Zi.suspense = n;
                  }
                });
              },
              [e, t]
            ),
            r
          );
        },
        useTransition: function(e) {
          var t = ko(),
            n = t[0],
            r = t[1];
          return [
            Po(
              function(t) {
                r(!0),
                  i.unstable_next(function() {
                    var n = Zi.suspense;
                    Zi.suspense = void 0 === e ? null : e;
                    try {
                      r(!1), t();
                    } finally {
                      Zi.suspense = n;
                    }
                  });
              },
              [e, n]
            ),
            n
          ];
        }
      },
      Io = null,
      jo = null,
      Ao = !1;
    function Fo(e, t) {
      var n = $u(5, null, null, 0);
      (n.elementType = "DELETED"),
        (n.type = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (n.effectTag = 8),
        null !== e.lastEffect
          ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
          : (e.firstEffect = e.lastEffect = n);
    }
    function zo(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return (
            null !==
              (t =
                1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
                  ? null
                  : t) && ((e.stateNode = t), !0)
          );
        case 6:
          return (
            null !==
              (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
            ((e.stateNode = t), !0)
          );
        case 13:
        default:
          return !1;
      }
    }
    function Uo(e) {
      if (Ao) {
        var t = jo;
        if (t) {
          var n = t;
          if (!zo(e, t)) {
            if (!(t = or(n.nextSibling)) || !zo(e, t))
              return (
                (e.effectTag = (-1025 & e.effectTag) | 2),
                (Ao = !1),
                void (Io = e)
              );
            Fo(Io, n);
          }
          (Io = e), (jo = or(t.firstChild));
        } else (e.effectTag = (-1025 & e.effectTag) | 2), (Ao = !1), (Io = e);
      }
    }
    function Wo(e) {
      for (
        e = e.return;
        null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

      )
        e = e.return;
      Io = e;
    }
    function Ho(e) {
      if (e !== Io) return !1;
      if (!Ao) return Wo(e), (Ao = !0), !1;
      var t = e.type;
      if (
        5 !== e.tag ||
        ("head" !== t && "body" !== t && !rr(t, e.memoizedProps))
      )
        for (t = jo; t; ) Fo(e, t), (t = or(t.nextSibling));
      if ((Wo(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
          throw Error(o(317));
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if (n === Zn) {
                if (0 === t) {
                  jo = or(e.nextSibling);
                  break e;
                }
                t--;
              } else (n !== Xn && n !== Jn && n !== Gn) || t++;
            }
            e = e.nextSibling;
          }
          jo = null;
        }
      } else jo = Io ? or(e.stateNode.nextSibling) : null;
      return !0;
    }
    function qo() {
      (jo = Io = null), (Ao = !1);
    }
    var Vo = D.ReactCurrentOwner,
      Bo = !1;
    function $o(e, t, n, r) {
      t.child = null === e ? Ai(t, null, n, r) : ji(t, e.child, n, r);
    }
    function Qo(e, t, n, r, a) {
      n = n.render;
      var i = t.ref;
      return (
        si(t, a),
        (r = ho(e, t, n, r, i, a)),
        null === e || Bo
          ? ((t.effectTag |= 1), $o(e, t, r, a), t.child)
          : ((t.updateQueue = e.updateQueue),
            (t.effectTag &= -517),
            e.expirationTime <= a && (e.expirationTime = 0),
            sl(e, t, a))
      );
    }
    function Ko(e, t, n, r, a, i) {
      if (null === e) {
        var o = n.type;
        return "function" != typeof o ||
          Qu(o) ||
          void 0 !== o.defaultProps ||
          null !== n.compare ||
          void 0 !== n.defaultProps
          ? (((e = Yu(n.type, null, r, null, t.mode, i)).ref = t.ref),
            (e.return = t),
            (t.child = e))
          : ((t.tag = 15), (t.type = o), Yo(e, t, o, r, a, i));
      }
      return (
        (o = e.child),
        a < i &&
        ((a = o.memoizedProps),
        (n = null !== (n = n.compare) ? n : na)(a, r) && e.ref === t.ref)
          ? sl(e, t, i)
          : ((t.effectTag |= 1),
            ((e = Ku(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e))
      );
    }
    function Yo(e, t, n, r, a, i) {
      return null !== e &&
        na(e.memoizedProps, r) &&
        e.ref === t.ref &&
        ((Bo = !1), a < i)
        ? sl(e, t, i)
        : Zo(e, t, n, r, i);
    }
    function Xo(e, t) {
      var n = t.ref;
      ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
        (t.effectTag |= 128);
    }
    function Zo(e, t, n, r, a) {
      var i = wa(n) ? ya : va.current;
      return (
        (i = ba(t, i)),
        si(t, a),
        (n = ho(e, t, n, r, i, a)),
        null === e || Bo
          ? ((t.effectTag |= 1), $o(e, t, n, a), t.child)
          : ((t.updateQueue = e.updateQueue),
            (t.effectTag &= -517),
            e.expirationTime <= a && (e.expirationTime = 0),
            sl(e, t, a))
      );
    }
    function Go(e, t, n, r, a) {
      if (wa(n)) {
        var i = !0;
        Ta(t);
      } else i = !1;
      if ((si(t, a), null === t.stateNode))
        null !== e &&
          ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
          Mi(t, n, r),
          Ni(t, n, r, a),
          (r = !0);
      else if (null === e) {
        var o = t.stateNode,
          l = t.memoizedProps;
        o.props = l;
        var u = o.context,
          c = n.contextType;
        "object" == typeof c && null !== c
          ? (c = fi(c))
          : (c = ba(t, (c = wa(n) ? ya : va.current)));
        var s = n.getDerivedStateFromProps,
          f =
            "function" == typeof s ||
            "function" == typeof o.getSnapshotBeforeUpdate;
        f ||
          ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
            "function" != typeof o.componentWillReceiveProps) ||
          ((l !== r || u !== c) && Pi(t, o, r, c)),
          (di = !1);
        var d = t.memoizedState;
        u = o.state = d;
        var p = t.updateQueue;
        null !== p && (ki(t, p, r, o, a), (u = t.memoizedState)),
          l !== r || d !== u || ga.current || di
            ? ("function" == typeof s &&
                (Si(t, n, s, r), (u = t.memoizedState)),
              (l = di || Oi(t, n, l, r, d, u, c))
                ? (f ||
                    ("function" != typeof o.UNSAFE_componentWillMount &&
                      "function" != typeof o.componentWillMount) ||
                    ("function" == typeof o.componentWillMount &&
                      o.componentWillMount(),
                    "function" == typeof o.UNSAFE_componentWillMount &&
                      o.UNSAFE_componentWillMount()),
                  "function" == typeof o.componentDidMount &&
                    (t.effectTag |= 4))
                : ("function" == typeof o.componentDidMount &&
                    (t.effectTag |= 4),
                  (t.memoizedProps = r),
                  (t.memoizedState = u)),
              (o.props = r),
              (o.state = u),
              (o.context = c),
              (r = l))
            : ("function" == typeof o.componentDidMount && (t.effectTag |= 4),
              (r = !1));
      } else
        (o = t.stateNode),
          (l = t.memoizedProps),
          (o.props = t.type === t.elementType ? l : ti(t.type, l)),
          (u = o.context),
          "object" == typeof (c = n.contextType) && null !== c
            ? (c = fi(c))
            : (c = ba(t, (c = wa(n) ? ya : va.current))),
          (f =
            "function" == typeof (s = n.getDerivedStateFromProps) ||
            "function" == typeof o.getSnapshotBeforeUpdate) ||
            ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
              "function" != typeof o.componentWillReceiveProps) ||
            ((l !== r || u !== c) && Pi(t, o, r, c)),
          (di = !1),
          (u = t.memoizedState),
          (d = o.state = u),
          null !== (p = t.updateQueue) &&
            (ki(t, p, r, o, a), (d = t.memoizedState)),
          l !== r || u !== d || ga.current || di
            ? ("function" == typeof s &&
                (Si(t, n, s, r), (d = t.memoizedState)),
              (s = di || Oi(t, n, l, r, u, d, c))
                ? (f ||
                    ("function" != typeof o.UNSAFE_componentWillUpdate &&
                      "function" != typeof o.componentWillUpdate) ||
                    ("function" == typeof o.componentWillUpdate &&
                      o.componentWillUpdate(r, d, c),
                    "function" == typeof o.UNSAFE_componentWillUpdate &&
                      o.UNSAFE_componentWillUpdate(r, d, c)),
                  "function" == typeof o.componentDidUpdate &&
                    (t.effectTag |= 4),
                  "function" == typeof o.getSnapshotBeforeUpdate &&
                    (t.effectTag |= 256))
                : ("function" != typeof o.componentDidUpdate ||
                    (l === e.memoizedProps && u === e.memoizedState) ||
                    (t.effectTag |= 4),
                  "function" != typeof o.getSnapshotBeforeUpdate ||
                    (l === e.memoizedProps && u === e.memoizedState) ||
                    (t.effectTag |= 256),
                  (t.memoizedProps = r),
                  (t.memoizedState = d)),
              (o.props = r),
              (o.state = d),
              (o.context = c),
              (r = s))
            : ("function" != typeof o.componentDidUpdate ||
                (l === e.memoizedProps && u === e.memoizedState) ||
                (t.effectTag |= 4),
              "function" != typeof o.getSnapshotBeforeUpdate ||
                (l === e.memoizedProps && u === e.memoizedState) ||
                (t.effectTag |= 256),
              (r = !1));
      return Jo(e, t, n, r, i, a);
    }
    function Jo(e, t, n, r, a, i) {
      Xo(e, t);
      var o = 0 != (64 & t.effectTag);
      if (!r && !o) return a && Sa(t, n, !1), sl(e, t, i);
      (r = t.stateNode), (Vo.current = t);
      var l =
        o && "function" != typeof n.getDerivedStateFromError
          ? null
          : r.render();
      return (
        (t.effectTag |= 1),
        null !== e && o
          ? ((t.child = ji(t, e.child, null, i)), (t.child = ji(t, null, l, i)))
          : $o(e, t, l, i),
        (t.memoizedState = r.state),
        a && Sa(t, n, !0),
        t.child
      );
    }
    function el(e) {
      var t = e.stateNode;
      t.pendingContext
        ? _a(0, t.pendingContext, t.pendingContext !== t.context)
        : t.context && _a(0, t.context, !1),
        qi(e, t.containerInfo);
    }
    var tl,
      nl,
      rl,
      al,
      il = { dehydrated: null, retryTime: 0 };
    function ol(e, t, n) {
      var r,
        a = t.mode,
        i = t.pendingProps,
        o = Qi.current,
        l = !1;
      if (
        ((r = 0 != (64 & t.effectTag)) ||
          (r = 0 != (2 & o) && (null === e || null !== e.memoizedState)),
        r
          ? ((l = !0), (t.effectTag &= -65))
          : (null !== e && null === e.memoizedState) ||
            void 0 === i.fallback ||
            !0 === i.unstable_avoidThisFallback ||
            (o |= 1),
        ha(Qi, 1 & o),
        null === e)
      ) {
        if ((void 0 !== i.fallback && Uo(t), l)) {
          if (
            ((l = i.fallback),
            ((i = Xu(null, a, 0, null)).return = t),
            0 == (2 & t.mode))
          )
            for (
              e = null !== t.memoizedState ? t.child.child : t.child,
                i.child = e;
              null !== e;

            )
              (e.return = i), (e = e.sibling);
          return (
            ((n = Xu(l, a, n, null)).return = t),
            (i.sibling = n),
            (t.memoizedState = il),
            (t.child = i),
            n
          );
        }
        return (
          (a = i.children),
          (t.memoizedState = null),
          (t.child = Ai(t, null, a, n))
        );
      }
      if (null !== e.memoizedState) {
        if (((a = (e = e.child).sibling), l)) {
          if (
            ((i = i.fallback),
            ((n = Ku(e, e.pendingProps)).return = t),
            0 == (2 & t.mode) &&
              (l = null !== t.memoizedState ? t.child.child : t.child) !==
                e.child)
          )
            for (n.child = l; null !== l; ) (l.return = n), (l = l.sibling);
          return (
            ((a = Ku(a, i, a.expirationTime)).return = t),
            (n.sibling = a),
            (n.childExpirationTime = 0),
            (t.memoizedState = il),
            (t.child = n),
            a
          );
        }
        return (
          (n = ji(t, e.child, i.children, n)),
          (t.memoizedState = null),
          (t.child = n)
        );
      }
      if (((e = e.child), l)) {
        if (
          ((l = i.fallback),
          ((i = Xu(null, a, 0, null)).return = t),
          (i.child = e),
          null !== e && (e.return = i),
          0 == (2 & t.mode))
        )
          for (
            e = null !== t.memoizedState ? t.child.child : t.child, i.child = e;
            null !== e;

          )
            (e.return = i), (e = e.sibling);
        return (
          ((n = Xu(l, a, n, null)).return = t),
          (i.sibling = n),
          (n.effectTag |= 2),
          (i.childExpirationTime = 0),
          (t.memoizedState = il),
          (t.child = i),
          n
        );
      }
      return (t.memoizedState = null), (t.child = ji(t, e, i.children, n));
    }
    function ll(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      var n = e.alternate;
      null !== n && n.expirationTime < t && (n.expirationTime = t),
        ci(e.return, t);
    }
    function ul(e, t, n, r, a, i) {
      var o = e.memoizedState;
      null === o
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            last: r,
            tail: n,
            tailExpiration: 0,
            tailMode: a,
            lastEffect: i
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.last = r),
          (o.tail = n),
          (o.tailExpiration = 0),
          (o.tailMode = a),
          (o.lastEffect = i));
    }
    function cl(e, t, n) {
      var r = t.pendingProps,
        a = r.revealOrder,
        i = r.tail;
      if (($o(e, t, r.children, n), 0 != (2 & (r = Qi.current))))
        (r = (1 & r) | 2), (t.effectTag |= 64);
      else {
        if (null !== e && 0 != (64 & e.effectTag))
          e: for (e = t.child; null !== e; ) {
            if (13 === e.tag) null !== e.memoizedState && ll(e, n);
            else if (19 === e.tag) ll(e, n);
            else if (null !== e.child) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break e;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === t) break e;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        r &= 1;
      }
      if ((ha(Qi, r), 0 == (2 & t.mode))) t.memoizedState = null;
      else
        switch (a) {
          case "forwards":
            for (n = t.child, a = null; null !== n; )
              null !== (e = n.alternate) && null === Ki(e) && (a = n),
                (n = n.sibling);
            null === (n = a)
              ? ((a = t.child), (t.child = null))
              : ((a = n.sibling), (n.sibling = null)),
              ul(t, !1, a, n, i, t.lastEffect);
            break;
          case "backwards":
            for (n = null, a = t.child, t.child = null; null !== a; ) {
              if (null !== (e = a.alternate) && null === Ki(e)) {
                t.child = a;
                break;
              }
              (e = a.sibling), (a.sibling = n), (n = a), (a = e);
            }
            ul(t, !0, n, null, i, t.lastEffect);
            break;
          case "together":
            ul(t, !1, null, null, void 0, t.lastEffect);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function sl(e, t, n) {
      null !== e && (t.dependencies = e.dependencies);
      var r = t.expirationTime;
      if ((0 !== r && Ou(r), t.childExpirationTime < n)) return null;
      if (null !== e && t.child !== e.child) throw Error(o(153));
      if (null !== t.child) {
        for (
          n = Ku((e = t.child), e.pendingProps, e.expirationTime),
            t.child = n,
            n.return = t;
          null !== e.sibling;

        )
          (e = e.sibling),
            ((n = n.sibling = Ku(
              e,
              e.pendingProps,
              e.expirationTime
            )).return = t);
        n.sibling = null;
      }
      return t.child;
    }
    function fl(e) {
      e.effectTag |= 4;
    }
    function dl(e, t) {
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; null !== t; )
            null !== t.alternate && (n = t), (t = t.sibling);
          null === n ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; null !== n; )
            null !== n.alternate && (r = n), (n = n.sibling);
          null === r
            ? t || null === e.tail
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
    }
    function pl(e) {
      switch (e.tag) {
        case 1:
          wa(e.type) && ka();
          var t = e.effectTag;
          return 4096 & t ? ((e.effectTag = (-4097 & t) | 64), e) : null;
        case 3:
          if ((Vi(), xa(), 0 != (64 & (t = e.effectTag)))) throw Error(o(285));
          return (e.effectTag = (-4097 & t) | 64), e;
        case 5:
          return $i(e), null;
        case 13:
          return (
            pa(Qi),
            4096 & (t = e.effectTag)
              ? ((e.effectTag = (-4097 & t) | 64), e)
              : null
          );
        case 19:
          return pa(Qi), null;
        case 4:
          return Vi(), null;
        case 10:
          return ui(e), null;
        default:
          return null;
      }
    }
    function hl(e, t) {
      return { value: e, source: t, stack: G(t) };
    }
    (tl = function(e, t) {
      for (var n = t.child; null !== n; ) {
        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
        else if (4 !== n.tag && null !== n.child) {
          (n.child.return = n), (n = n.child);
          continue;
        }
        if (n === t) break;
        for (; null === n.sibling; ) {
          if (null === n.return || n.return === t) return;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }),
      (nl = function() {}),
      (rl = function(e, t, n, r, i) {
        var o = e.memoizedProps;
        if (o !== r) {
          var l,
            u,
            c = t.stateNode;
          switch ((Hi(zi.current), (e = null), n)) {
            case "input":
              (o = Se(c, o)), (r = Se(c, r)), (e = []);
              break;
            case "option":
              (o = Re(c, o)), (r = Re(c, r)), (e = []);
              break;
            case "select":
              (o = a({}, o, { value: void 0 })),
                (r = a({}, r, { value: void 0 })),
                (e = []);
              break;
            case "textarea":
              (o = Le(c, o)), (r = Le(c, r)), (e = []);
              break;
            default:
              "function" != typeof o.onClick &&
                "function" == typeof r.onClick &&
                (c.onclick = Vn);
          }
          for (l in (Wn(n, r), (n = null), o))
            if (!r.hasOwnProperty(l) && o.hasOwnProperty(l) && null != o[l])
              if ("style" === l)
                for (u in (c = o[l]))
                  c.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
              else
                "dangerouslySetInnerHTML" !== l &&
                  "children" !== l &&
                  "suppressContentEditableWarning" !== l &&
                  "suppressHydrationWarning" !== l &&
                  "autoFocus" !== l &&
                  (p.hasOwnProperty(l)
                    ? e || (e = [])
                    : (e = e || []).push(l, null));
          for (l in r) {
            var s = r[l];
            if (
              ((c = null != o ? o[l] : void 0),
              r.hasOwnProperty(l) && s !== c && (null != s || null != c))
            )
              if ("style" === l)
                if (c) {
                  for (u in c)
                    !c.hasOwnProperty(u) ||
                      (s && s.hasOwnProperty(u)) ||
                      (n || (n = {}), (n[u] = ""));
                  for (u in s)
                    s.hasOwnProperty(u) &&
                      c[u] !== s[u] &&
                      (n || (n = {}), (n[u] = s[u]));
                } else n || (e || (e = []), e.push(l, n)), (n = s);
              else
                "dangerouslySetInnerHTML" === l
                  ? ((s = s ? s.__html : void 0),
                    (c = c ? c.__html : void 0),
                    null != s && c !== s && (e = e || []).push(l, "" + s))
                  : "children" === l
                  ? c === s ||
                    ("string" != typeof s && "number" != typeof s) ||
                    (e = e || []).push(l, "" + s)
                  : "suppressContentEditableWarning" !== l &&
                    "suppressHydrationWarning" !== l &&
                    (p.hasOwnProperty(l)
                      ? (null != s && qn(i, l), e || c === s || (e = []))
                      : (e = e || []).push(l, s));
          }
          n && (e = e || []).push("style", n),
            (i = e),
            (t.updateQueue = i) && fl(t);
        }
      }),
      (al = function(e, t, n, r) {
        n !== r && fl(t);
      });
    var ml = "function" == typeof WeakSet ? WeakSet : Set;
    function vl(e, t) {
      var n = t.source,
        r = t.stack;
      null === r && null !== n && (r = G(n)),
        null !== n && Z(n.type),
        (t = t.value),
        null !== e && 1 === e.tag && Z(e.type);
      try {
        console.error(t);
      } catch (e) {
        setTimeout(function() {
          throw e;
        });
      }
    }
    function gl(e) {
      var t = e.ref;
      if (null !== t)
        if ("function" == typeof t)
          try {
            t(null);
          } catch (t) {
            Uu(e, t);
          }
        else t.current = null;
    }
    function yl(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          bl(2, 0, t);
          break;
        case 1:
          if (256 & t.effectTag && null !== e) {
            var n = e.memoizedProps,
              r = e.memoizedState;
            (t = (e = t.stateNode).getSnapshotBeforeUpdate(
              t.elementType === t.type ? n : ti(t.type, n),
              r
            )),
              (e.__reactInternalSnapshotBeforeUpdate = t);
          }
          break;
        case 3:
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(o(163));
      }
    }
    function bl(e, t, n) {
      if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
        var r = (n = n.next);
        do {
          if (0 != (r.tag & e)) {
            var a = r.destroy;
            (r.destroy = void 0), void 0 !== a && a();
          }
          0 != (r.tag & t) && ((a = r.create), (r.destroy = a())), (r = r.next);
        } while (r !== n);
      }
    }
    function wl(e, t, n) {
      switch (("function" == typeof Vu && Vu(t), t.tag)) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
            var r = e.next;
            Ka(97 < n ? 97 : n, function() {
              var e = r;
              do {
                var n = e.destroy;
                if (void 0 !== n) {
                  var a = t;
                  try {
                    n();
                  } catch (e) {
                    Uu(a, e);
                  }
                }
                e = e.next;
              } while (e !== r);
            });
          }
          break;
        case 1:
          gl(t),
            "function" == typeof (n = t.stateNode).componentWillUnmount &&
              (function(e, t) {
                try {
                  (t.props = e.memoizedProps),
                    (t.state = e.memoizedState),
                    t.componentWillUnmount();
                } catch (t) {
                  Uu(e, t);
                }
              })(t, n);
          break;
        case 5:
          gl(t);
          break;
        case 4:
          El(e, t, n);
      }
    }
    function kl(e) {
      var t = e.alternate;
      (e.return = null),
        (e.child = null),
        (e.memoizedState = null),
        (e.updateQueue = null),
        (e.dependencies = null),
        (e.alternate = null),
        (e.firstEffect = null),
        (e.lastEffect = null),
        (e.pendingProps = null),
        (e.memoizedProps = null),
        null !== t && kl(t);
    }
    function xl(e) {
      return 5 === e.tag || 3 === e.tag || 4 === e.tag;
    }
    function _l(e) {
      e: {
        for (var t = e.return; null !== t; ) {
          if (xl(t)) {
            var n = t;
            break e;
          }
          t = t.return;
        }
        throw Error(o(160));
      }
      switch (((t = n.stateNode), n.tag)) {
        case 5:
          var r = !1;
          break;
        case 3:
        case 4:
          (t = t.containerInfo), (r = !0);
          break;
        default:
          throw Error(o(161));
      }
      16 & n.effectTag && (qe(t, ""), (n.effectTag &= -17));
      e: t: for (n = e; ; ) {
        for (; null === n.sibling; ) {
          if (null === n.return || xl(n.return)) {
            n = null;
            break e;
          }
          n = n.return;
        }
        for (
          n.sibling.return = n.return, n = n.sibling;
          5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

        ) {
          if (2 & n.effectTag) continue t;
          if (null === n.child || 4 === n.tag) continue t;
          (n.child.return = n), (n = n.child);
        }
        if (!(2 & n.effectTag)) {
          n = n.stateNode;
          break e;
        }
      }
      for (var a = e; ; ) {
        var i = 5 === a.tag || 6 === a.tag;
        if (i) {
          var l = i ? a.stateNode : a.stateNode.instance;
          if (n)
            if (r) {
              var u = l;
              (l = n),
                8 === (i = t).nodeType
                  ? i.parentNode.insertBefore(u, l)
                  : i.insertBefore(u, l);
            } else t.insertBefore(l, n);
          else
            r
              ? (8 === (u = t).nodeType
                  ? (i = u.parentNode).insertBefore(l, u)
                  : (i = u).appendChild(l),
                null != (u = u._reactRootContainer) ||
                  null !== i.onclick ||
                  (i.onclick = Vn))
              : t.appendChild(l);
        } else if (4 !== a.tag && null !== a.child) {
          (a.child.return = a), (a = a.child);
          continue;
        }
        if (a === e) break;
        for (; null === a.sibling; ) {
          if (null === a.return || a.return === e) return;
          a = a.return;
        }
        (a.sibling.return = a.return), (a = a.sibling);
      }
    }
    function El(e, t, n) {
      for (var r, a, i = t, l = !1; ; ) {
        if (!l) {
          l = i.return;
          e: for (;;) {
            if (null === l) throw Error(o(160));
            switch (((r = l.stateNode), l.tag)) {
              case 5:
                a = !1;
                break e;
              case 3:
              case 4:
                (r = r.containerInfo), (a = !0);
                break e;
            }
            l = l.return;
          }
          l = !0;
        }
        if (5 === i.tag || 6 === i.tag) {
          e: for (var u = e, c = i, s = n, f = c; ; )
            if ((wl(u, f, s), null !== f.child && 4 !== f.tag))
              (f.child.return = f), (f = f.child);
            else {
              if (f === c) break;
              for (; null === f.sibling; ) {
                if (null === f.return || f.return === c) break e;
                f = f.return;
              }
              (f.sibling.return = f.return), (f = f.sibling);
            }
          a
            ? ((u = r),
              (c = i.stateNode),
              8 === u.nodeType ? u.parentNode.removeChild(c) : u.removeChild(c))
            : r.removeChild(i.stateNode);
        } else if (4 === i.tag) {
          if (null !== i.child) {
            (r = i.stateNode.containerInfo),
              (a = !0),
              (i.child.return = i),
              (i = i.child);
            continue;
          }
        } else if ((wl(e, i, n), null !== i.child)) {
          (i.child.return = i), (i = i.child);
          continue;
        }
        if (i === t) break;
        for (; null === i.sibling; ) {
          if (null === i.return || i.return === t) return;
          4 === (i = i.return).tag && (l = !1);
        }
        (i.sibling.return = i.return), (i = i.sibling);
      }
    }
    function Tl(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          bl(4, 8, t);
          break;
        case 1:
          break;
        case 5:
          var n = t.stateNode;
          if (null != n) {
            var r = t.memoizedProps,
              a = null !== e ? e.memoizedProps : r;
            e = t.type;
            var i = t.updateQueue;
            if (((t.updateQueue = null), null !== i)) {
              for (
                n[sr] = r,
                  "input" === e &&
                    "radio" === r.type &&
                    null != r.name &&
                    Oe(n, r),
                  Hn(e, a),
                  t = Hn(e, r),
                  a = 0;
                a < i.length;
                a += 2
              ) {
                var l = i[a],
                  u = i[a + 1];
                "style" === l
                  ? zn(n, u)
                  : "dangerouslySetInnerHTML" === l
                  ? He(n, u)
                  : "children" === l
                  ? qe(n, u)
                  : xe(n, l, u, t);
              }
              switch (e) {
                case "input":
                  Me(n, r);
                  break;
                case "textarea":
                  je(n, r);
                  break;
                case "select":
                  (t = n._wrapperState.wasMultiple),
                    (n._wrapperState.wasMultiple = !!r.multiple),
                    null != (e = r.value)
                      ? De(n, !!r.multiple, e, !1)
                      : t !== !!r.multiple &&
                        (null != r.defaultValue
                          ? De(n, !!r.multiple, r.defaultValue, !0)
                          : De(n, !!r.multiple, r.multiple ? [] : "", !1));
              }
            }
          }
          break;
        case 6:
          if (null === t.stateNode) throw Error(o(162));
          t.stateNode.nodeValue = t.memoizedProps;
          break;
        case 3:
          (t = t.stateNode).hydrate && ((t.hydrate = !1), Tt(t.containerInfo));
          break;
        case 12:
          break;
        case 13:
          if (
            ((n = t),
            null === t.memoizedState
              ? (r = !1)
              : ((r = !0), (n = t.child), (tu = Ba())),
            null !== n)
          )
            e: for (e = n; ; ) {
              if (5 === e.tag)
                (i = e.stateNode),
                  r
                    ? "function" == typeof (i = i.style).setProperty
                      ? i.setProperty("display", "none", "important")
                      : (i.display = "none")
                    : ((i = e.stateNode),
                      (a =
                        null != (a = e.memoizedProps.style) &&
                        a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (i.style.display = Fn("display", a)));
              else if (6 === e.tag)
                e.stateNode.nodeValue = r ? "" : e.memoizedProps;
              else {
                if (
                  13 === e.tag &&
                  null !== e.memoizedState &&
                  null === e.memoizedState.dehydrated
                ) {
                  ((i = e.child.sibling).return = e), (e = i);
                  continue;
                }
                if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
              }
              if (e === n) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === n) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          Sl(t);
          break;
        case 19:
          Sl(t);
          break;
        case 17:
        case 20:
        case 21:
          break;
        default:
          throw Error(o(163));
      }
    }
    function Sl(e) {
      var t = e.updateQueue;
      if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        null === n && (n = e.stateNode = new ml()),
          t.forEach(function(t) {
            var r = Hu.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          });
      }
    }
    var Cl = "function" == typeof WeakMap ? WeakMap : Map;
    function Ol(e, t, n) {
      ((n = mi(n, null)).tag = 3), (n.payload = { element: null });
      var r = t.value;
      return (
        (n.callback = function() {
          au || ((au = !0), (iu = r)), vl(e, t);
        }),
        n
      );
    }
    function Ml(e, t, n) {
      (n = mi(n, null)).tag = 3;
      var r = e.type.getDerivedStateFromError;
      if ("function" == typeof r) {
        var a = t.value;
        n.payload = function() {
          return vl(e, t), r(a);
        };
      }
      var i = e.stateNode;
      return (
        null !== i &&
          "function" == typeof i.componentDidCatch &&
          (n.callback = function() {
            "function" != typeof r &&
              (null === ou ? (ou = new Set([this])) : ou.add(this), vl(e, t));
            var n = t.stack;
            this.componentDidCatch(t.value, {
              componentStack: null !== n ? n : ""
            });
          }),
        n
      );
    }
    var Pl,
      Nl = Math.ceil,
      Rl = D.ReactCurrentDispatcher,
      Dl = D.ReactCurrentOwner,
      Ll = 0,
      Il = 8,
      jl = 16,
      Al = 32,
      Fl = 0,
      zl = 1,
      Ul = 2,
      Wl = 3,
      Hl = 4,
      ql = 5,
      Vl = Ll,
      Bl = null,
      $l = null,
      Ql = 0,
      Kl = Fl,
      Yl = null,
      Xl = 1073741823,
      Zl = 1073741823,
      Gl = null,
      Jl = 0,
      eu = !1,
      tu = 0,
      nu = 500,
      ru = null,
      au = !1,
      iu = null,
      ou = null,
      lu = !1,
      uu = null,
      cu = 90,
      su = null,
      fu = 0,
      du = null,
      pu = 0;
    function hu() {
      return (Vl & (jl | Al)) !== Ll
        ? 1073741821 - ((Ba() / 10) | 0)
        : 0 !== pu
        ? pu
        : (pu = 1073741821 - ((Ba() / 10) | 0));
    }
    function mu(e, t, n) {
      if (0 == (2 & (t = t.mode))) return 1073741823;
      var r = $a();
      if (0 == (4 & t)) return 99 === r ? 1073741823 : 1073741822;
      if ((Vl & jl) !== Ll) return Ql;
      if (null !== n) e = ei(e, 0 | n.timeoutMs || 5e3, 250);
      else
        switch (r) {
          case 99:
            e = 1073741823;
            break;
          case 98:
            e = ei(e, 150, 100);
            break;
          case 97:
          case 96:
            e = ei(e, 5e3, 250);
            break;
          case 95:
            e = 2;
            break;
          default:
            throw Error(o(326));
        }
      return null !== Bl && e === Ql && --e, e;
    }
    function vu(e, t) {
      if (50 < fu) throw ((fu = 0), (du = null), Error(o(185)));
      if (null !== (e = gu(e, t))) {
        var n = $a();
        1073741823 === t
          ? (Vl & Il) !== Ll && (Vl & (jl | Al)) === Ll
            ? ku(e)
            : (bu(e), Vl === Ll && Za())
          : bu(e),
          (4 & Vl) === Ll ||
            (98 !== n && 99 !== n) ||
            (null === su
              ? (su = new Map([[e, t]]))
              : (void 0 === (n = su.get(e)) || n > t) && su.set(e, t));
      }
    }
    function gu(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      var n = e.alternate;
      null !== n && n.expirationTime < t && (n.expirationTime = t);
      var r = e.return,
        a = null;
      if (null === r && 3 === e.tag) a = e.stateNode;
      else
        for (; null !== r; ) {
          if (
            ((n = r.alternate),
            r.childExpirationTime < t && (r.childExpirationTime = t),
            null !== n &&
              n.childExpirationTime < t &&
              (n.childExpirationTime = t),
            null === r.return && 3 === r.tag)
          ) {
            a = r.stateNode;
            break;
          }
          r = r.return;
        }
      return (
        null !== a && (Bl === a && (Ou(t), Kl === Hl && tc(a, Ql)), nc(a, t)), a
      );
    }
    function yu(e) {
      var t = e.lastExpiredTime;
      return 0 !== t
        ? t
        : ec(e, (t = e.firstPendingTime))
        ? (t = e.lastPingedTime) > (e = e.nextKnownPendingLevel)
          ? t
          : e
        : t;
    }
    function bu(e) {
      if (0 !== e.lastExpiredTime)
        (e.callbackExpirationTime = 1073741823),
          (e.callbackPriority = 99),
          (e.callbackNode = Xa(ku.bind(null, e)));
      else {
        var t = yu(e),
          n = e.callbackNode;
        if (0 === t)
          null !== n &&
            ((e.callbackNode = null),
            (e.callbackExpirationTime = 0),
            (e.callbackPriority = 90));
        else {
          var r = hu();
          if (
            (1073741823 === t
              ? (r = 99)
              : 1 === t || 2 === t
              ? (r = 95)
              : (r =
                  0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r))
                    ? 99
                    : 250 >= r
                    ? 98
                    : 5250 >= r
                    ? 97
                    : 95),
            null !== n)
          ) {
            var a = e.callbackPriority;
            if (e.callbackExpirationTime === t && a >= r) return;
            n !== za && Ma(n);
          }
          (e.callbackExpirationTime = t),
            (e.callbackPriority = r),
            (t =
              1073741823 === t
                ? Xa(ku.bind(null, e))
                : Ya(r, wu.bind(null, e), {
                    timeout: 10 * (1073741821 - t) - Ba()
                  })),
            (e.callbackNode = t);
        }
      }
    }
    function wu(e, t) {
      if (((pu = 0), t)) return rc(e, (t = hu())), bu(e), null;
      var n = yu(e);
      if (0 !== n) {
        if (((t = e.callbackNode), (Vl & (jl | Al)) !== Ll))
          throw Error(o(327));
        if ((Au(), (e === Bl && n === Ql) || Eu(e, n), null !== $l)) {
          var r = Vl;
          Vl |= jl;
          for (var a = Su(); ; )
            try {
              Pu();
              break;
            } catch (t) {
              Tu(e, t);
            }
          if ((oi(), (Vl = r), (Rl.current = a), Kl === zl))
            throw ((t = Yl), Eu(e, n), tc(e, n), bu(e), t);
          if (null === $l)
            switch (
              ((a = e.finishedWork = e.current.alternate),
              (e.finishedExpirationTime = n),
              (r = Kl),
              (Bl = null),
              r)
            ) {
              case Fl:
              case zl:
                throw Error(o(345));
              case Ul:
                rc(e, 2 < n ? 2 : n);
                break;
              case Wl:
                if (
                  (tc(e, n),
                  n === (r = e.lastSuspendedTime) &&
                    (e.nextKnownPendingLevel = Du(a)),
                  1073741823 === Xl && 10 < (a = tu + nu - Ba()))
                ) {
                  if (eu) {
                    var i = e.lastPingedTime;
                    if (0 === i || i >= n) {
                      (e.lastPingedTime = n), Eu(e, n);
                      break;
                    }
                  }
                  if (0 !== (i = yu(e)) && i !== n) break;
                  if (0 !== r && r !== n) {
                    e.lastPingedTime = r;
                    break;
                  }
                  e.timeoutHandle = ar(Lu.bind(null, e), a);
                  break;
                }
                Lu(e);
                break;
              case Hl:
                if (
                  (tc(e, n),
                  n === (r = e.lastSuspendedTime) &&
                    (e.nextKnownPendingLevel = Du(a)),
                  eu && (0 === (a = e.lastPingedTime) || a >= n))
                ) {
                  (e.lastPingedTime = n), Eu(e, n);
                  break;
                }
                if (0 !== (a = yu(e)) && a !== n) break;
                if (0 !== r && r !== n) {
                  e.lastPingedTime = r;
                  break;
                }
                if (
                  (1073741823 !== Zl
                    ? (r = 10 * (1073741821 - Zl) - Ba())
                    : 1073741823 === Xl
                    ? (r = 0)
                    : ((r = 10 * (1073741821 - Xl) - 5e3),
                      0 > (r = (a = Ba()) - r) && (r = 0),
                      (n = 10 * (1073741821 - n) - a) <
                        (r =
                          (120 > r
                            ? 120
                            : 480 > r
                            ? 480
                            : 1080 > r
                            ? 1080
                            : 1920 > r
                            ? 1920
                            : 3e3 > r
                            ? 3e3
                            : 4320 > r
                            ? 4320
                            : 1960 * Nl(r / 1960)) - r) && (r = n)),
                  10 < r)
                ) {
                  e.timeoutHandle = ar(Lu.bind(null, e), r);
                  break;
                }
                Lu(e);
                break;
              case ql:
                if (1073741823 !== Xl && null !== Gl) {
                  i = Xl;
                  var l = Gl;
                  if (
                    (0 >= (r = 0 | l.busyMinDurationMs)
                      ? (r = 0)
                      : ((a = 0 | l.busyDelayMs),
                        (r =
                          (i =
                            Ba() -
                            (10 * (1073741821 - i) -
                              (0 | l.timeoutMs || 5e3))) <= a
                            ? 0
                            : a + r - i)),
                    10 < r)
                  ) {
                    tc(e, n), (e.timeoutHandle = ar(Lu.bind(null, e), r));
                    break;
                  }
                }
                Lu(e);
                break;
              default:
                throw Error(o(329));
            }
          if ((bu(e), e.callbackNode === t)) return wu.bind(null, e);
        }
      }
      return null;
    }
    function ku(e) {
      var t = e.lastExpiredTime;
      if (((t = 0 !== t ? t : 1073741823), e.finishedExpirationTime === t))
        Lu(e);
      else {
        if ((Vl & (jl | Al)) !== Ll) throw Error(o(327));
        if ((Au(), (e === Bl && t === Ql) || Eu(e, t), null !== $l)) {
          var n = Vl;
          Vl |= jl;
          for (var r = Su(); ; )
            try {
              Mu();
              break;
            } catch (t) {
              Tu(e, t);
            }
          if ((oi(), (Vl = n), (Rl.current = r), Kl === zl))
            throw ((n = Yl), Eu(e, t), tc(e, t), bu(e), n);
          if (null !== $l) throw Error(o(261));
          (e.finishedWork = e.current.alternate),
            (e.finishedExpirationTime = t),
            (Bl = null),
            Lu(e),
            bu(e);
        }
      }
      return null;
    }
    function xu(e, t) {
      var n = Vl;
      Vl |= 1;
      try {
        return e(t);
      } finally {
        (Vl = n) === Ll && Za();
      }
    }
    function _u(e, t) {
      var n = Vl;
      (Vl &= -2), (Vl |= Il);
      try {
        return e(t);
      } finally {
        (Vl = n) === Ll && Za();
      }
    }
    function Eu(e, t) {
      (e.finishedWork = null), (e.finishedExpirationTime = 0);
      var n = e.timeoutHandle;
      if ((-1 !== n && ((e.timeoutHandle = -1), ir(n)), null !== $l))
        for (n = $l.return; null !== n; ) {
          var r = n;
          switch (r.tag) {
            case 1:
              var a = r.type.childContextTypes;
              null != a && ka();
              break;
            case 3:
              Vi(), xa();
              break;
            case 5:
              $i(r);
              break;
            case 4:
              Vi();
              break;
            case 13:
            case 19:
              pa(Qi);
              break;
            case 10:
              ui(r);
          }
          n = n.return;
        }
      (Bl = e),
        ($l = Ku(e.current, null)),
        (Ql = t),
        (Kl = Fl),
        (Yl = null),
        (Zl = Xl = 1073741823),
        (Gl = null),
        (Jl = 0),
        (eu = !1);
    }
    function Tu(e, t) {
      for (;;) {
        try {
          if ((oi(), mo(), null === $l || null === $l.return))
            return (Kl = zl), (Yl = t), null;
          e: {
            var n = e,
              r = $l.return,
              a = $l,
              i = t;
            if (
              ((t = Ql),
              (a.effectTag |= 2048),
              (a.firstEffect = a.lastEffect = null),
              null !== i && "object" == typeof i && "function" == typeof i.then)
            ) {
              var o = i,
                l = 0 != (1 & Qi.current),
                u = r;
              do {
                var c;
                if ((c = 13 === u.tag)) {
                  var s = u.memoizedState;
                  if (null !== s) c = null !== s.dehydrated;
                  else {
                    var f = u.memoizedProps;
                    c =
                      void 0 !== f.fallback &&
                      (!0 !== f.unstable_avoidThisFallback || !l);
                  }
                }
                if (c) {
                  var d = u.updateQueue;
                  if (null === d) {
                    var p = new Set();
                    p.add(o), (u.updateQueue = p);
                  } else d.add(o);
                  if (0 == (2 & u.mode)) {
                    if (
                      ((u.effectTag |= 64), (a.effectTag &= -2981), 1 === a.tag)
                    )
                      if (null === a.alternate) a.tag = 17;
                      else {
                        var h = mi(1073741823, null);
                        (h.tag = 2), gi(a, h);
                      }
                    a.expirationTime = 1073741823;
                    break e;
                  }
                  (i = void 0), (a = t);
                  var m = n.pingCache;
                  if (
                    (null === m
                      ? ((m = n.pingCache = new Cl()),
                        (i = new Set()),
                        m.set(o, i))
                      : void 0 === (i = m.get(o)) &&
                        ((i = new Set()), m.set(o, i)),
                    !i.has(a))
                  ) {
                    i.add(a);
                    var v = Wu.bind(null, n, o, a);
                    o.then(v, v);
                  }
                  (u.effectTag |= 4096), (u.expirationTime = t);
                  break e;
                }
                u = u.return;
              } while (null !== u);
              i = Error(
                (Z(a.type) || "A React component") +
                  " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." +
                  G(a)
              );
            }
            Kl !== ql && (Kl = Ul), (i = hl(i, a)), (u = r);
            do {
              switch (u.tag) {
                case 3:
                  (o = i),
                    (u.effectTag |= 4096),
                    (u.expirationTime = t),
                    yi(u, Ol(u, o, t));
                  break e;
                case 1:
                  o = i;
                  var g = u.type,
                    y = u.stateNode;
                  if (
                    0 == (64 & u.effectTag) &&
                    ("function" == typeof g.getDerivedStateFromError ||
                      (null !== y &&
                        "function" == typeof y.componentDidCatch &&
                        (null === ou || !ou.has(y))))
                  ) {
                    (u.effectTag |= 4096),
                      (u.expirationTime = t),
                      yi(u, Ml(u, o, t));
                    break e;
                  }
              }
              u = u.return;
            } while (null !== u);
          }
          $l = Ru($l);
        } catch (e) {
          t = e;
          continue;
        }
        break;
      }
    }
    function Su() {
      var e = Rl.current;
      return (Rl.current = Ro), null === e ? Ro : e;
    }
    function Cu(e, t) {
      e < Xl && 2 < e && (Xl = e),
        null !== t && e < Zl && 2 < e && ((Zl = e), (Gl = t));
    }
    function Ou(e) {
      e > Jl && (Jl = e);
    }
    function Mu() {
      for (; null !== $l; ) $l = Nu($l);
    }
    function Pu() {
      for (; null !== $l && !Pa(); ) $l = Nu($l);
    }
    function Nu(e) {
      var t = Pl(e.alternate, e, Ql);
      return (
        (e.memoizedProps = e.pendingProps),
        null === t && (t = Ru(e)),
        (Dl.current = null),
        t
      );
    }
    function Ru(e) {
      $l = e;
      do {
        var t = $l.alternate;
        if (((e = $l.return), 0 == (2048 & $l.effectTag))) {
          e: {
            var n = t,
              r = Ql,
              i = (t = $l).pendingProps;
            switch (t.tag) {
              case 2:
              case 16:
                break;
              case 15:
              case 0:
                break;
              case 1:
                wa(t.type) && ka();
                break;
              case 3:
                Vi(),
                  xa(),
                  (i = t.stateNode).pendingContext &&
                    ((i.context = i.pendingContext), (i.pendingContext = null)),
                  (null === n || null === n.child) && Ho(t) && fl(t),
                  nl(t);
                break;
              case 5:
                $i(t), (r = Hi(Wi.current));
                var l = t.type;
                if (null !== n && null != t.stateNode)
                  rl(n, t, l, i, r), n.ref !== t.ref && (t.effectTag |= 128);
                else if (i) {
                  var u = Hi(zi.current);
                  if (Ho(t)) {
                    var c = (i = t).stateNode;
                    n = i.type;
                    var s = i.memoizedProps,
                      f = r;
                    switch (
                      ((c[cr] = i), (c[sr] = s), (l = void 0), (r = c), n)
                    ) {
                      case "iframe":
                      case "object":
                      case "embed":
                        Tn("load", r);
                        break;
                      case "video":
                      case "audio":
                        for (c = 0; c < Je.length; c++) Tn(Je[c], r);
                        break;
                      case "source":
                        Tn("error", r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Tn("error", r), Tn("load", r);
                        break;
                      case "form":
                        Tn("reset", r), Tn("submit", r);
                        break;
                      case "details":
                        Tn("toggle", r);
                        break;
                      case "input":
                        Ce(r, s), Tn("invalid", r), qn(f, "onChange");
                        break;
                      case "select":
                        (r._wrapperState = { wasMultiple: !!s.multiple }),
                          Tn("invalid", r),
                          qn(f, "onChange");
                        break;
                      case "textarea":
                        Ie(r, s), Tn("invalid", r), qn(f, "onChange");
                    }
                    for (l in (Wn(n, s), (c = null), s))
                      s.hasOwnProperty(l) &&
                        ((u = s[l]),
                        "children" === l
                          ? "string" == typeof u
                            ? r.textContent !== u && (c = ["children", u])
                            : "number" == typeof u &&
                              r.textContent !== "" + u &&
                              (c = ["children", "" + u])
                          : p.hasOwnProperty(l) && null != u && qn(f, l));
                    switch (n) {
                      case "input":
                        Ee(r), Pe(r, s, !0);
                        break;
                      case "textarea":
                        Ee(r), Ae(r);
                        break;
                      case "select":
                      case "option":
                        break;
                      default:
                        "function" == typeof s.onClick && (r.onclick = Vn);
                    }
                    (l = c), (i.updateQueue = l), (i = null !== l) && fl(t);
                  } else {
                    (n = t),
                      (f = l),
                      (s = i),
                      (c = 9 === r.nodeType ? r : r.ownerDocument),
                      u === Fe.html && (u = ze(f)),
                      u === Fe.html
                        ? "script" === f
                          ? (((s = c.createElement("div")).innerHTML =
                              "<script></script>"),
                            (c = s.removeChild(s.firstChild)))
                          : "string" == typeof s.is
                          ? (c = c.createElement(f, { is: s.is }))
                          : ((c = c.createElement(f)),
                            "select" === f &&
                              ((f = c),
                              s.multiple
                                ? (f.multiple = !0)
                                : s.size && (f.size = s.size)))
                        : (c = c.createElementNS(u, f)),
                      ((s = c)[cr] = n),
                      (s[sr] = i),
                      tl(s, t, !1, !1),
                      (t.stateNode = s);
                    var d = r,
                      h = Hn((f = l), (n = i));
                    switch (f) {
                      case "iframe":
                      case "object":
                      case "embed":
                        Tn("load", s), (r = n);
                        break;
                      case "video":
                      case "audio":
                        for (r = 0; r < Je.length; r++) Tn(Je[r], s);
                        r = n;
                        break;
                      case "source":
                        Tn("error", s), (r = n);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Tn("error", s), Tn("load", s), (r = n);
                        break;
                      case "form":
                        Tn("reset", s), Tn("submit", s), (r = n);
                        break;
                      case "details":
                        Tn("toggle", s), (r = n);
                        break;
                      case "input":
                        Ce(s, n),
                          (r = Se(s, n)),
                          Tn("invalid", s),
                          qn(d, "onChange");
                        break;
                      case "option":
                        r = Re(s, n);
                        break;
                      case "select":
                        (s._wrapperState = { wasMultiple: !!n.multiple }),
                          (r = a({}, n, { value: void 0 })),
                          Tn("invalid", s),
                          qn(d, "onChange");
                        break;
                      case "textarea":
                        Ie(s, n),
                          (r = Le(s, n)),
                          Tn("invalid", s),
                          qn(d, "onChange");
                        break;
                      default:
                        r = n;
                    }
                    Wn(f, r), (c = void 0), (u = f);
                    var m = s,
                      v = r;
                    for (c in v)
                      if (v.hasOwnProperty(c)) {
                        var g = v[c];
                        "style" === c
                          ? zn(m, g)
                          : "dangerouslySetInnerHTML" === c
                          ? null != (g = g ? g.__html : void 0) && He(m, g)
                          : "children" === c
                          ? "string" == typeof g
                            ? ("textarea" !== u || "" !== g) && qe(m, g)
                            : "number" == typeof g && qe(m, "" + g)
                          : "suppressContentEditableWarning" !== c &&
                            "suppressHydrationWarning" !== c &&
                            "autoFocus" !== c &&
                            (p.hasOwnProperty(c)
                              ? null != g && qn(d, c)
                              : null != g && xe(m, c, g, h));
                      }
                    switch (f) {
                      case "input":
                        Ee(s), Pe(s, n, !1);
                        break;
                      case "textarea":
                        Ee(s), Ae(s);
                        break;
                      case "option":
                        null != n.value &&
                          s.setAttribute("value", "" + ke(n.value));
                        break;
                      case "select":
                        ((r = s).multiple = !!n.multiple),
                          null != (s = n.value)
                            ? De(r, !!n.multiple, s, !1)
                            : null != n.defaultValue &&
                              De(r, !!n.multiple, n.defaultValue, !0);
                        break;
                      default:
                        "function" == typeof r.onClick && (s.onclick = Vn);
                    }
                    (i = nr(l, i)) && fl(t);
                  }
                  null !== t.ref && (t.effectTag |= 128);
                } else if (null === t.stateNode) throw Error(o(166));
                break;
              case 6:
                if (n && null != t.stateNode) al(n, t, n.memoizedProps, i);
                else {
                  if ("string" != typeof i && null === t.stateNode)
                    throw Error(o(166));
                  (r = Hi(Wi.current)),
                    Hi(zi.current),
                    Ho(t)
                      ? ((l = (i = t).stateNode),
                        (r = i.memoizedProps),
                        (l[cr] = i),
                        (i = l.nodeValue !== r) && fl(t))
                      : ((l = t),
                        ((i = (9 === r.nodeType
                          ? r
                          : r.ownerDocument
                        ).createTextNode(i))[cr] = l),
                        (t.stateNode = i));
                }
                break;
              case 11:
                break;
              case 13:
                if ((pa(Qi), (i = t.memoizedState), 0 != (64 & t.effectTag))) {
                  t.expirationTime = r;
                  break e;
                }
                (i = null !== i),
                  (l = !1),
                  null === n
                    ? void 0 !== t.memoizedProps.fallback && Ho(t)
                    : ((l = null !== (r = n.memoizedState)),
                      i ||
                        null === r ||
                        (null !== (r = n.child.sibling) &&
                          (null !== (s = t.firstEffect)
                            ? ((t.firstEffect = r), (r.nextEffect = s))
                            : ((t.firstEffect = t.lastEffect = r),
                              (r.nextEffect = null)),
                          (r.effectTag = 8)))),
                  i &&
                    !l &&
                    0 != (2 & t.mode) &&
                    ((null === n &&
                      !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                    0 != (1 & Qi.current)
                      ? Kl === Fl && (Kl = Wl)
                      : ((Kl !== Fl && Kl !== Wl) || (Kl = Hl),
                        0 !== Jl && null !== Bl && (tc(Bl, Ql), nc(Bl, Jl)))),
                  (i || l) && (t.effectTag |= 4);
                break;
              case 7:
              case 8:
              case 12:
                break;
              case 4:
                Vi(), nl(t);
                break;
              case 10:
                ui(t);
                break;
              case 9:
              case 14:
                break;
              case 17:
                wa(t.type) && ka();
                break;
              case 19:
                if ((pa(Qi), null === (i = t.memoizedState))) break;
                if (
                  ((l = 0 != (64 & t.effectTag)), null === (s = i.rendering))
                ) {
                  if (l) dl(i, !1);
                  else if (Kl !== Fl || (null !== n && 0 != (64 & n.effectTag)))
                    for (n = t.child; null !== n; ) {
                      if (null !== (s = Ki(n))) {
                        for (
                          t.effectTag |= 64,
                            dl(i, !1),
                            null !== (l = s.updateQueue) &&
                              ((t.updateQueue = l), (t.effectTag |= 4)),
                            null === i.lastEffect && (t.firstEffect = null),
                            t.lastEffect = i.lastEffect,
                            i = r,
                            l = t.child;
                          null !== l;

                        )
                          (n = i),
                            ((r = l).effectTag &= 2),
                            (r.nextEffect = null),
                            (r.firstEffect = null),
                            (r.lastEffect = null),
                            null === (s = r.alternate)
                              ? ((r.childExpirationTime = 0),
                                (r.expirationTime = n),
                                (r.child = null),
                                (r.memoizedProps = null),
                                (r.memoizedState = null),
                                (r.updateQueue = null),
                                (r.dependencies = null))
                              : ((r.childExpirationTime =
                                  s.childExpirationTime),
                                (r.expirationTime = s.expirationTime),
                                (r.child = s.child),
                                (r.memoizedProps = s.memoizedProps),
                                (r.memoizedState = s.memoizedState),
                                (r.updateQueue = s.updateQueue),
                                (n = s.dependencies),
                                (r.dependencies =
                                  null === n
                                    ? null
                                    : {
                                        expirationTime: n.expirationTime,
                                        firstContext: n.firstContext,
                                        responders: n.responders
                                      })),
                            (l = l.sibling);
                        ha(Qi, (1 & Qi.current) | 2), (t = t.child);
                        break e;
                      }
                      n = n.sibling;
                    }
                } else {
                  if (!l)
                    if (null !== (n = Ki(s))) {
                      if (
                        ((t.effectTag |= 64),
                        (l = !0),
                        null !== (r = n.updateQueue) &&
                          ((t.updateQueue = r), (t.effectTag |= 4)),
                        dl(i, !0),
                        null === i.tail &&
                          "hidden" === i.tailMode &&
                          !s.alternate)
                      ) {
                        null !== (t = t.lastEffect = i.lastEffect) &&
                          (t.nextEffect = null);
                        break;
                      }
                    } else
                      Ba() > i.tailExpiration &&
                        1 < r &&
                        ((t.effectTag |= 64),
                        (l = !0),
                        dl(i, !1),
                        (t.expirationTime = t.childExpirationTime = r - 1));
                  i.isBackwards
                    ? ((s.sibling = t.child), (t.child = s))
                    : (null !== (r = i.last) ? (r.sibling = s) : (t.child = s),
                      (i.last = s));
                }
                if (null !== i.tail) {
                  0 === i.tailExpiration && (i.tailExpiration = Ba() + 500),
                    (r = i.tail),
                    (i.rendering = r),
                    (i.tail = r.sibling),
                    (i.lastEffect = t.lastEffect),
                    (r.sibling = null),
                    (i = Qi.current),
                    ha(Qi, (i = l ? (1 & i) | 2 : 1 & i)),
                    (t = r);
                  break e;
                }
                break;
              case 20:
              case 21:
                break;
              default:
                throw Error(o(156, t.tag));
            }
            t = null;
          }
          if (((i = $l), 1 === Ql || 1 !== i.childExpirationTime)) {
            for (l = 0, r = i.child; null !== r; )
              (n = r.expirationTime) > l && (l = n),
                (s = r.childExpirationTime) > l && (l = s),
                (r = r.sibling);
            i.childExpirationTime = l;
          }
          if (null !== t) return t;
          null !== e &&
            0 == (2048 & e.effectTag) &&
            (null === e.firstEffect && (e.firstEffect = $l.firstEffect),
            null !== $l.lastEffect &&
              (null !== e.lastEffect &&
                (e.lastEffect.nextEffect = $l.firstEffect),
              (e.lastEffect = $l.lastEffect)),
            1 < $l.effectTag &&
              (null !== e.lastEffect
                ? (e.lastEffect.nextEffect = $l)
                : (e.firstEffect = $l),
              (e.lastEffect = $l)));
        } else {
          if (null !== (t = pl($l))) return (t.effectTag &= 2047), t;
          null !== e &&
            ((e.firstEffect = e.lastEffect = null), (e.effectTag |= 2048));
        }
        if (null !== (t = $l.sibling)) return t;
        $l = e;
      } while (null !== $l);
      return Kl === Fl && (Kl = ql), null;
    }
    function Du(e) {
      var t = e.expirationTime;
      return t > (e = e.childExpirationTime) ? t : e;
    }
    function Lu(e) {
      var t = $a();
      return Ka(99, Iu.bind(null, e, t)), null;
    }
    function Iu(e, t) {
      do {
        Au();
      } while (null !== uu);
      if ((Vl & (jl | Al)) !== Ll) throw Error(o(327));
      var n = e.finishedWork,
        r = e.finishedExpirationTime;
      if (null === n) return null;
      if (
        ((e.finishedWork = null),
        (e.finishedExpirationTime = 0),
        n === e.current)
      )
        throw Error(o(177));
      (e.callbackNode = null),
        (e.callbackExpirationTime = 0),
        (e.callbackPriority = 90),
        (e.nextKnownPendingLevel = 0);
      var a = Du(n);
      if (
        ((e.firstPendingTime = a),
        r <= e.lastSuspendedTime
          ? (e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0)
          : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1),
        r <= e.lastPingedTime && (e.lastPingedTime = 0),
        r <= e.lastExpiredTime && (e.lastExpiredTime = 0),
        e === Bl && (($l = Bl = null), (Ql = 0)),
        1 < n.effectTag
          ? null !== n.lastEffect
            ? ((n.lastEffect.nextEffect = n), (a = n.firstEffect))
            : (a = n)
          : (a = n.firstEffect),
        null !== a)
      ) {
        var i = Vl;
        (Vl |= Al), (Dl.current = null), (er = En);
        var l = Kn();
        if (Yn(l)) {
          if ("selectionStart" in l)
            var u = { start: l.selectionStart, end: l.selectionEnd };
          else
            e: {
              var c =
                (u = ((u = l.ownerDocument) && u.defaultView) || window)
                  .getSelection && u.getSelection();
              if (c && 0 !== c.rangeCount) {
                u = c.anchorNode;
                var s = c.anchorOffset,
                  f = c.focusNode;
                c = c.focusOffset;
                try {
                  u.nodeType, f.nodeType;
                } catch (e) {
                  u = null;
                  break e;
                }
                var d = 0,
                  p = -1,
                  h = -1,
                  m = 0,
                  v = 0,
                  g = l,
                  y = null;
                t: for (;;) {
                  for (
                    var b;
                    g !== u || (0 !== s && 3 !== g.nodeType) || (p = d + s),
                      g !== f || (0 !== c && 3 !== g.nodeType) || (h = d + c),
                      3 === g.nodeType && (d += g.nodeValue.length),
                      null !== (b = g.firstChild);

                  )
                    (y = g), (g = b);
                  for (;;) {
                    if (g === l) break t;
                    if (
                      (y === u && ++m === s && (p = d),
                      y === f && ++v === c && (h = d),
                      null !== (b = g.nextSibling))
                    )
                      break;
                    y = (g = y).parentNode;
                  }
                  g = b;
                }
                u = -1 === p || -1 === h ? null : { start: p, end: h };
              } else u = null;
            }
          u = u || { start: 0, end: 0 };
        } else u = null;
        (tr = { focusedElem: l, selectionRange: u }), (En = !1), (ru = a);
        do {
          try {
            ju();
          } catch (e) {
            if (null === ru) throw Error(o(330));
            Uu(ru, e), (ru = ru.nextEffect);
          }
        } while (null !== ru);
        ru = a;
        do {
          try {
            for (l = e, u = t; null !== ru; ) {
              var w = ru.effectTag;
              if ((16 & w && qe(ru.stateNode, ""), 128 & w)) {
                var k = ru.alternate;
                if (null !== k) {
                  var x = k.ref;
                  null !== x &&
                    ("function" == typeof x ? x(null) : (x.current = null));
                }
              }
              switch (1038 & w) {
                case 2:
                  _l(ru), (ru.effectTag &= -3);
                  break;
                case 6:
                  _l(ru), (ru.effectTag &= -3), Tl(ru.alternate, ru);
                  break;
                case 1024:
                  ru.effectTag &= -1025;
                  break;
                case 1028:
                  (ru.effectTag &= -1025), Tl(ru.alternate, ru);
                  break;
                case 4:
                  Tl(ru.alternate, ru);
                  break;
                case 8:
                  El(l, (s = ru), u), kl(s);
              }
              ru = ru.nextEffect;
            }
          } catch (e) {
            if (null === ru) throw Error(o(330));
            Uu(ru, e), (ru = ru.nextEffect);
          }
        } while (null !== ru);
        if (
          ((x = tr),
          (k = Kn()),
          (w = x.focusedElem),
          (u = x.selectionRange),
          k !== w &&
            w &&
            w.ownerDocument &&
            (function e(t, n) {
              return (
                !(!t || !n) &&
                (t === n ||
                  ((!t || 3 !== t.nodeType) &&
                    (n && 3 === n.nodeType
                      ? e(t, n.parentNode)
                      : "contains" in t
                      ? t.contains(n)
                      : !!t.compareDocumentPosition &&
                        !!(16 & t.compareDocumentPosition(n)))))
              );
            })(w.ownerDocument.documentElement, w))
        ) {
          null !== u &&
            Yn(w) &&
            ((k = u.start),
            void 0 === (x = u.end) && (x = k),
            "selectionStart" in w
              ? ((w.selectionStart = k),
                (w.selectionEnd = Math.min(x, w.value.length)))
              : (x =
                  ((k = w.ownerDocument || document) && k.defaultView) ||
                  window).getSelection &&
                ((x = x.getSelection()),
                (s = w.textContent.length),
                (l = Math.min(u.start, s)),
                (u = void 0 === u.end ? l : Math.min(u.end, s)),
                !x.extend && l > u && ((s = u), (u = l), (l = s)),
                (s = Qn(w, l)),
                (f = Qn(w, u)),
                s &&
                  f &&
                  (1 !== x.rangeCount ||
                    x.anchorNode !== s.node ||
                    x.anchorOffset !== s.offset ||
                    x.focusNode !== f.node ||
                    x.focusOffset !== f.offset) &&
                  ((k = k.createRange()).setStart(s.node, s.offset),
                  x.removeAllRanges(),
                  l > u
                    ? (x.addRange(k), x.extend(f.node, f.offset))
                    : (k.setEnd(f.node, f.offset), x.addRange(k))))),
            (k = []);
          for (x = w; (x = x.parentNode); )
            1 === x.nodeType &&
              k.push({ element: x, left: x.scrollLeft, top: x.scrollTop });
          for (
            "function" == typeof w.focus && w.focus(), w = 0;
            w < k.length;
            w++
          )
            ((x = k[w]).element.scrollLeft = x.left),
              (x.element.scrollTop = x.top);
        }
        (tr = null), (En = !!er), (er = null), (e.current = n), (ru = a);
        do {
          try {
            for (w = r; null !== ru; ) {
              var _ = ru.effectTag;
              if (36 & _) {
                var E = ru.alternate;
                switch (((x = w), (k = ru).tag)) {
                  case 0:
                  case 11:
                  case 15:
                    bl(16, 32, k);
                    break;
                  case 1:
                    var T = k.stateNode;
                    if (4 & k.effectTag)
                      if (null === E) T.componentDidMount();
                      else {
                        var S =
                          k.elementType === k.type
                            ? E.memoizedProps
                            : ti(k.type, E.memoizedProps);
                        T.componentDidUpdate(
                          S,
                          E.memoizedState,
                          T.__reactInternalSnapshotBeforeUpdate
                        );
                      }
                    var C = k.updateQueue;
                    null !== C && xi(0, C, T);
                    break;
                  case 3:
                    var O = k.updateQueue;
                    if (null !== O) {
                      if (((l = null), null !== k.child))
                        switch (k.child.tag) {
                          case 5:
                            l = k.child.stateNode;
                            break;
                          case 1:
                            l = k.child.stateNode;
                        }
                      xi(0, O, l);
                    }
                    break;
                  case 5:
                    var M = k.stateNode;
                    null === E &&
                      4 & k.effectTag &&
                      nr(k.type, k.memoizedProps) &&
                      M.focus();
                    break;
                  case 6:
                  case 4:
                  case 12:
                    break;
                  case 13:
                    if (null === k.memoizedState) {
                      var P = k.alternate;
                      if (null !== P) {
                        var N = P.memoizedState;
                        if (null !== N) {
                          var R = N.dehydrated;
                          null !== R && Tt(R);
                        }
                      }
                    }
                    break;
                  case 19:
                  case 17:
                  case 20:
                  case 21:
                    break;
                  default:
                    throw Error(o(163));
                }
              }
              if (128 & _) {
                k = void 0;
                var D = ru.ref;
                if (null !== D) {
                  var L = ru.stateNode;
                  switch (ru.tag) {
                    case 5:
                      k = L;
                      break;
                    default:
                      k = L;
                  }
                  "function" == typeof D ? D(k) : (D.current = k);
                }
              }
              ru = ru.nextEffect;
            }
          } catch (e) {
            if (null === ru) throw Error(o(330));
            Uu(ru, e), (ru = ru.nextEffect);
          }
        } while (null !== ru);
        (ru = null), Ua(), (Vl = i);
      } else e.current = n;
      if (lu) (lu = !1), (uu = e), (cu = t);
      else
        for (ru = a; null !== ru; )
          (t = ru.nextEffect), (ru.nextEffect = null), (ru = t);
      if (
        (0 === (t = e.firstPendingTime) && (ou = null),
        1073741823 === t ? (e === du ? fu++ : ((fu = 0), (du = e))) : (fu = 0),
        "function" == typeof qu && qu(n.stateNode, r),
        bu(e),
        au)
      )
        throw ((au = !1), (e = iu), (iu = null), e);
      return (Vl & Il) !== Ll ? null : (Za(), null);
    }
    function ju() {
      for (; null !== ru; ) {
        var e = ru.effectTag;
        0 != (256 & e) && yl(ru.alternate, ru),
          0 == (512 & e) ||
            lu ||
            ((lu = !0),
            Ya(97, function() {
              return Au(), null;
            })),
          (ru = ru.nextEffect);
      }
    }
    function Au() {
      if (90 !== cu) {
        var e = 97 < cu ? 97 : cu;
        return (cu = 90), Ka(e, Fu);
      }
    }
    function Fu() {
      if (null === uu) return !1;
      var e = uu;
      if (((uu = null), (Vl & (jl | Al)) !== Ll)) throw Error(o(331));
      var t = Vl;
      for (Vl |= Al, e = e.current.firstEffect; null !== e; ) {
        try {
          var n = e;
          if (0 != (512 & n.effectTag))
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                bl(128, 0, n), bl(0, 64, n);
            }
        } catch (t) {
          if (null === e) throw Error(o(330));
          Uu(e, t);
        }
        (n = e.nextEffect), (e.nextEffect = null), (e = n);
      }
      return (Vl = t), Za(), !0;
    }
    function zu(e, t, n) {
      gi(e, (t = Ol(e, (t = hl(n, t)), 1073741823))),
        null !== (e = gu(e, 1073741823)) && bu(e);
    }
    function Uu(e, t) {
      if (3 === e.tag) zu(e, e, t);
      else
        for (var n = e.return; null !== n; ) {
          if (3 === n.tag) {
            zu(n, e, t);
            break;
          }
          if (1 === n.tag) {
            var r = n.stateNode;
            if (
              "function" == typeof n.type.getDerivedStateFromError ||
              ("function" == typeof r.componentDidCatch &&
                (null === ou || !ou.has(r)))
            ) {
              gi(n, (e = Ml(n, (e = hl(t, e)), 1073741823))),
                null !== (n = gu(n, 1073741823)) && bu(n);
              break;
            }
          }
          n = n.return;
        }
    }
    function Wu(e, t, n) {
      var r = e.pingCache;
      null !== r && r.delete(t),
        Bl === e && Ql === n
          ? Kl === Hl || (Kl === Wl && 1073741823 === Xl && Ba() - tu < nu)
            ? Eu(e, Ql)
            : (eu = !0)
          : ec(e, n) &&
            ((0 !== (t = e.lastPingedTime) && t < n) ||
              ((e.lastPingedTime = n),
              e.finishedExpirationTime === n &&
                ((e.finishedExpirationTime = 0), (e.finishedWork = null)),
              bu(e)));
    }
    function Hu(e, t) {
      var n = e.stateNode;
      null !== n && n.delete(t),
        0 === (t = 0) && (t = mu((t = hu()), e, null)),
        null !== (e = gu(e, t)) && bu(e);
    }
    Pl = function(e, t, n) {
      var r = t.expirationTime;
      if (null !== e) {
        var a = t.pendingProps;
        if (e.memoizedProps !== a || ga.current) Bo = !0;
        else {
          if (r < n) {
            switch (((Bo = !1), t.tag)) {
              case 3:
                el(t), qo();
                break;
              case 5:
                if ((Bi(t), 4 & t.mode && 1 !== n && a.hidden))
                  return (t.expirationTime = t.childExpirationTime = 1), null;
                break;
              case 1:
                wa(t.type) && Ta(t);
                break;
              case 4:
                qi(t, t.stateNode.containerInfo);
                break;
              case 10:
                li(t, t.memoizedProps.value);
                break;
              case 13:
                if (null !== t.memoizedState)
                  return 0 !== (r = t.child.childExpirationTime) && r >= n
                    ? ol(e, t, n)
                    : (ha(Qi, 1 & Qi.current),
                      null !== (t = sl(e, t, n)) ? t.sibling : null);
                ha(Qi, 1 & Qi.current);
                break;
              case 19:
                if (
                  ((r = t.childExpirationTime >= n), 0 != (64 & e.effectTag))
                ) {
                  if (r) return cl(e, t, n);
                  t.effectTag |= 64;
                }
                if (
                  (null !== (a = t.memoizedState) &&
                    ((a.rendering = null), (a.tail = null)),
                  ha(Qi, Qi.current),
                  !r)
                )
                  return null;
            }
            return sl(e, t, n);
          }
          Bo = !1;
        }
      } else Bo = !1;
      switch (((t.expirationTime = 0), t.tag)) {
        case 2:
          if (
            ((r = t.type),
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
            (e = t.pendingProps),
            (a = ba(t, va.current)),
            si(t, n),
            (a = ho(null, t, r, e, a, n)),
            (t.effectTag |= 1),
            "object" == typeof a &&
              null !== a &&
              "function" == typeof a.render &&
              void 0 === a.$$typeof)
          ) {
            if (((t.tag = 1), mo(), wa(r))) {
              var i = !0;
              Ta(t);
            } else i = !1;
            t.memoizedState =
              null !== a.state && void 0 !== a.state ? a.state : null;
            var l = r.getDerivedStateFromProps;
            "function" == typeof l && Si(t, r, l, e),
              (a.updater = Ci),
              (t.stateNode = a),
              (a._reactInternalFiber = t),
              Ni(t, r, e, n),
              (t = Jo(null, t, r, !0, i, n));
          } else (t.tag = 0), $o(null, t, a, n), (t = t.child);
          return t;
        case 16:
          if (
            ((a = t.elementType),
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
            (e = t.pendingProps),
            (function(e) {
              if (-1 === e._status) {
                e._status = 0;
                var t = e._ctor;
                (t = t()),
                  (e._result = t),
                  t.then(
                    function(t) {
                      0 === e._status &&
                        ((t = t.default), (e._status = 1), (e._result = t));
                    },
                    function(t) {
                      0 === e._status && ((e._status = 2), (e._result = t));
                    }
                  );
              }
            })(a),
            1 !== a._status)
          )
            throw a._result;
          switch (
            ((a = a._result),
            (t.type = a),
            (i = t.tag = (function(e) {
              if ("function" == typeof e) return Qu(e) ? 1 : 0;
              if (null != e) {
                if ((e = e.$$typeof) === V) return 11;
                if (e === Q) return 14;
              }
              return 2;
            })(a)),
            (e = ti(a, e)),
            i)
          ) {
            case 0:
              t = Zo(null, t, a, e, n);
              break;
            case 1:
              t = Go(null, t, a, e, n);
              break;
            case 11:
              t = Qo(null, t, a, e, n);
              break;
            case 14:
              t = Ko(null, t, a, ti(a.type, e), r, n);
              break;
            default:
              throw Error(o(306, a, ""));
          }
          return t;
        case 0:
          return (
            (r = t.type),
            (a = t.pendingProps),
            Zo(e, t, r, (a = t.elementType === r ? a : ti(r, a)), n)
          );
        case 1:
          return (
            (r = t.type),
            (a = t.pendingProps),
            Go(e, t, r, (a = t.elementType === r ? a : ti(r, a)), n)
          );
        case 3:
          if ((el(t), null === (r = t.updateQueue))) throw Error(o(282));
          if (
            ((a = null !== (a = t.memoizedState) ? a.element : null),
            ki(t, r, t.pendingProps, null, n),
            (r = t.memoizedState.element) === a)
          )
            qo(), (t = sl(e, t, n));
          else {
            if (
              ((a = t.stateNode.hydrate) &&
                ((jo = or(t.stateNode.containerInfo.firstChild)),
                (Io = t),
                (a = Ao = !0)),
              a)
            )
              for (n = Ai(t, null, r, n), t.child = n; n; )
                (n.effectTag = (-3 & n.effectTag) | 1024), (n = n.sibling);
            else $o(e, t, r, n), qo();
            t = t.child;
          }
          return t;
        case 5:
          return (
            Bi(t),
            null === e && Uo(t),
            (r = t.type),
            (a = t.pendingProps),
            (i = null !== e ? e.memoizedProps : null),
            (l = a.children),
            rr(r, a)
              ? (l = null)
              : null !== i && rr(r, i) && (t.effectTag |= 16),
            Xo(e, t),
            4 & t.mode && 1 !== n && a.hidden
              ? ((t.expirationTime = t.childExpirationTime = 1), (t = null))
              : ($o(e, t, l, n), (t = t.child)),
            t
          );
        case 6:
          return null === e && Uo(t), null;
        case 13:
          return ol(e, t, n);
        case 4:
          return (
            qi(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            null === e ? (t.child = ji(t, null, r, n)) : $o(e, t, r, n),
            t.child
          );
        case 11:
          return (
            (r = t.type),
            (a = t.pendingProps),
            Qo(e, t, r, (a = t.elementType === r ? a : ti(r, a)), n)
          );
        case 7:
          return $o(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
          return $o(e, t, t.pendingProps.children, n), t.child;
        case 10:
          e: {
            if (
              ((r = t.type._context),
              (a = t.pendingProps),
              (l = t.memoizedProps),
              li(t, (i = a.value)),
              null !== l)
            ) {
              var u = l.value;
              if (
                0 ===
                (i = ea(u, i)
                  ? 0
                  : 0 |
                    ("function" == typeof r._calculateChangedBits
                      ? r._calculateChangedBits(u, i)
                      : 1073741823))
              ) {
                if (l.children === a.children && !ga.current) {
                  t = sl(e, t, n);
                  break e;
                }
              } else
                for (null !== (u = t.child) && (u.return = t); null !== u; ) {
                  var c = u.dependencies;
                  if (null !== c) {
                    l = u.child;
                    for (var s = c.firstContext; null !== s; ) {
                      if (s.context === r && 0 != (s.observedBits & i)) {
                        1 === u.tag && (((s = mi(n, null)).tag = 2), gi(u, s)),
                          u.expirationTime < n && (u.expirationTime = n),
                          null !== (s = u.alternate) &&
                            s.expirationTime < n &&
                            (s.expirationTime = n),
                          ci(u.return, n),
                          c.expirationTime < n && (c.expirationTime = n);
                        break;
                      }
                      s = s.next;
                    }
                  } else l = 10 === u.tag && u.type === t.type ? null : u.child;
                  if (null !== l) l.return = u;
                  else
                    for (l = u; null !== l; ) {
                      if (l === t) {
                        l = null;
                        break;
                      }
                      if (null !== (u = l.sibling)) {
                        (u.return = l.return), (l = u);
                        break;
                      }
                      l = l.return;
                    }
                  u = l;
                }
            }
            $o(e, t, a.children, n), (t = t.child);
          }
          return t;
        case 9:
          return (
            (a = t.type),
            (r = (i = t.pendingProps).children),
            si(t, n),
            (r = r((a = fi(a, i.unstable_observedBits)))),
            (t.effectTag |= 1),
            $o(e, t, r, n),
            t.child
          );
        case 14:
          return (
            (i = ti((a = t.type), t.pendingProps)),
            Ko(e, t, a, (i = ti(a.type, i)), r, n)
          );
        case 15:
          return Yo(e, t, t.type, t.pendingProps, r, n);
        case 17:
          return (
            (r = t.type),
            (a = t.pendingProps),
            (a = t.elementType === r ? a : ti(r, a)),
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
            (t.tag = 1),
            wa(r) ? ((e = !0), Ta(t)) : (e = !1),
            si(t, n),
            Mi(t, r, a),
            Ni(t, r, a, n),
            Jo(null, t, r, !0, e, n)
          );
        case 19:
          return cl(e, t, n);
      }
      throw Error(o(156, t.tag));
    };
    var qu = null,
      Vu = null;
    function Bu(e, t, n, r) {
      (this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.effectTag = 0),
        (this.lastEffect = this.firstEffect = this.nextEffect = null),
        (this.childExpirationTime = this.expirationTime = 0),
        (this.alternate = null);
    }
    function $u(e, t, n, r) {
      return new Bu(e, t, n, r);
    }
    function Qu(e) {
      return !(!(e = e.prototype) || !e.isReactComponent);
    }
    function Ku(e, t) {
      var n = e.alternate;
      return (
        null === n
          ? (((n = $u(e.tag, t, e.key, e.mode)).elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.effectTag = 0),
            (n.nextEffect = null),
            (n.firstEffect = null),
            (n.lastEffect = null)),
        (n.childExpirationTime = e.childExpirationTime),
        (n.expirationTime = e.expirationTime),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          null === t
            ? null
            : {
                expirationTime: t.expirationTime,
                firstContext: t.firstContext,
                responders: t.responders
              }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
      );
    }
    function Yu(e, t, n, r, a, i) {
      var l = 2;
      if (((r = e), "function" == typeof e)) Qu(e) && (l = 1);
      else if ("string" == typeof e) l = 5;
      else
        e: switch (e) {
          case F:
            return Xu(n.children, a, i, t);
          case q:
            (l = 8), (a |= 7);
            break;
          case z:
            (l = 8), (a |= 1);
            break;
          case U:
            return (
              ((e = $u(12, n, t, 8 | a)).elementType = U),
              (e.type = U),
              (e.expirationTime = i),
              e
            );
          case B:
            return (
              ((e = $u(13, n, t, a)).type = B),
              (e.elementType = B),
              (e.expirationTime = i),
              e
            );
          case $:
            return (
              ((e = $u(19, n, t, a)).elementType = $), (e.expirationTime = i), e
            );
          default:
            if ("object" == typeof e && null !== e)
              switch (e.$$typeof) {
                case W:
                  l = 10;
                  break e;
                case H:
                  l = 9;
                  break e;
                case V:
                  l = 11;
                  break e;
                case Q:
                  l = 14;
                  break e;
                case K:
                  (l = 16), (r = null);
                  break e;
              }
            throw Error(o(130, null == e ? e : typeof e, ""));
        }
      return (
        ((t = $u(l, n, t, a)).elementType = e),
        (t.type = r),
        (t.expirationTime = i),
        t
      );
    }
    function Xu(e, t, n, r) {
      return ((e = $u(7, e, r, t)).expirationTime = n), e;
    }
    function Zu(e, t, n) {
      return ((e = $u(6, e, null, t)).expirationTime = n), e;
    }
    function Gu(e, t, n) {
      return (
        ((t = $u(
          4,
          null !== e.children ? e.children : [],
          e.key,
          t
        )).expirationTime = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation
        }),
        t
      );
    }
    function Ju(e, t, n) {
      (this.tag = t),
        (this.current = null),
        (this.containerInfo = e),
        (this.pingCache = this.pendingChildren = null),
        (this.finishedExpirationTime = 0),
        (this.finishedWork = null),
        (this.timeoutHandle = -1),
        (this.pendingContext = this.context = null),
        (this.hydrate = n),
        (this.callbackNode = null),
        (this.callbackPriority = 90),
        (this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0);
    }
    function ec(e, t) {
      var n = e.firstSuspendedTime;
      return (e = e.lastSuspendedTime), 0 !== n && n >= t && e <= t;
    }
    function tc(e, t) {
      var n = e.firstSuspendedTime,
        r = e.lastSuspendedTime;
      n < t && (e.firstSuspendedTime = t),
        (r > t || 0 === n) && (e.lastSuspendedTime = t),
        t <= e.lastPingedTime && (e.lastPingedTime = 0),
        t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
    }
    function nc(e, t) {
      t > e.firstPendingTime && (e.firstPendingTime = t);
      var n = e.firstSuspendedTime;
      0 !== n &&
        (t >= n
          ? (e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0)
          : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1),
        t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
    }
    function rc(e, t) {
      var n = e.lastExpiredTime;
      (0 === n || n > t) && (e.lastExpiredTime = t);
    }
    function ac(e, t, n, r) {
      var a = t.current,
        i = hu(),
        l = Ei.suspense;
      i = mu(i, a, l);
      e: if (n) {
        t: {
          if (et((n = n._reactInternalFiber)) !== n || 1 !== n.tag)
            throw Error(o(170));
          var u = n;
          do {
            switch (u.tag) {
              case 3:
                u = u.stateNode.context;
                break t;
              case 1:
                if (wa(u.type)) {
                  u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                  break t;
                }
            }
            u = u.return;
          } while (null !== u);
          throw Error(o(171));
        }
        if (1 === n.tag) {
          var c = n.type;
          if (wa(c)) {
            n = Ea(n, c, u);
            break e;
          }
        }
        n = u;
      } else n = ma;
      return (
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = mi(i, l)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        gi(a, t),
        vu(a, i),
        i
      );
    }
    function ic(e) {
      if (!(e = e.current).child) return null;
      switch (e.child.tag) {
        case 5:
        default:
          return e.child.stateNode;
      }
    }
    function oc(e, t) {
      null !== (e = e.memoizedState) &&
        null !== e.dehydrated &&
        e.retryTime < t &&
        (e.retryTime = t);
    }
    function lc(e, t) {
      oc(e, t), (e = e.alternate) && oc(e, t);
    }
    function uc(e, t, n) {
      var r = new Ju(e, t, (n = null != n && !0 === n.hydrate)),
        a = $u(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
      (r.current = a),
        (a.stateNode = r),
        (e[fr] = r.current),
        n &&
          0 !== t &&
          (function(e) {
            var t = Ln(e);
            mt.forEach(function(n) {
              In(n, e, t);
            }),
              vt.forEach(function(n) {
                In(n, e, t);
              });
          })(9 === e.nodeType ? e : e.ownerDocument),
        (this._internalRoot = r);
    }
    function cc(e) {
      return !(
        !e ||
        (1 !== e.nodeType &&
          9 !== e.nodeType &&
          11 !== e.nodeType &&
          (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
      );
    }
    function sc(e, t, n, r, a) {
      var i = n._reactRootContainer;
      if (i) {
        var o = i._internalRoot;
        if ("function" == typeof a) {
          var l = a;
          a = function() {
            var e = ic(o);
            l.call(e);
          };
        }
        ac(t, o, e, a);
      } else {
        if (
          ((i = n._reactRootContainer = (function(e, t) {
            if (
              (t ||
                (t = !(
                  !(t = e
                    ? 9 === e.nodeType
                      ? e.documentElement
                      : e.firstChild
                    : null) ||
                  1 !== t.nodeType ||
                  !t.hasAttribute("data-reactroot")
                )),
              !t)
            )
              for (var n; (n = e.lastChild); ) e.removeChild(n);
            return new uc(e, 0, t ? { hydrate: !0 } : void 0);
          })(n, r)),
          (o = i._internalRoot),
          "function" == typeof a)
        ) {
          var u = a;
          a = function() {
            var e = ic(o);
            u.call(e);
          };
        }
        _u(function() {
          ac(t, o, e, a);
        });
      }
      return ic(o);
    }
    function fc(e, t) {
      var n =
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!cc(t)) throw Error(o(200));
      return (function(e, t, n) {
        var r =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
          $$typeof: A,
          key: null == r ? null : "" + r,
          children: e,
          containerInfo: t,
          implementation: n
        };
      })(e, t, null, n);
    }
    (uc.prototype.render = function(e, t) {
      ac(e, this._internalRoot, null, void 0 === t ? null : t);
    }),
      (uc.prototype.unmount = function(e) {
        var t = this._internalRoot,
          n = void 0 === e ? null : e,
          r = t.containerInfo;
        ac(null, t, null, function() {
          (r[fr] = null), null !== n && n();
        });
      }),
      (at = function(e) {
        if (13 === e.tag) {
          var t = ei(hu(), 150, 100);
          vu(e, t), lc(e, t);
        }
      }),
      (it = function(e) {
        if (13 === e.tag) {
          hu();
          var t = Ja++;
          vu(e, t), lc(e, t);
        }
      }),
      (ot = function(e) {
        if (13 === e.tag) {
          var t = hu();
          vu(e, (t = mu(t, e, null))), lc(e, t);
        }
      }),
      (ee = function(e, t, n) {
        switch (t) {
          case "input":
            if ((Me(e, n), (t = n.name), "radio" === n.type && null != t)) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = mr(r);
                  if (!a) throw Error(o(90));
                  Te(r), Me(r, a);
                }
              }
            }
            break;
          case "textarea":
            je(e, n);
            break;
          case "select":
            null != (t = n.value) && De(e, !!n.multiple, t, !1);
        }
      }),
      (oe = xu),
      (le = function(e, t, n, r) {
        var a = Vl;
        Vl |= 4;
        try {
          return Ka(98, e.bind(null, t, n, r));
        } finally {
          (Vl = a) === Ll && Za();
        }
      }),
      (ue = function() {
        (Vl & (1 | jl | Al)) === Ll &&
          ((function() {
            if (null !== su) {
              var e = su;
              (su = null),
                e.forEach(function(e, t) {
                  rc(t, e), bu(t);
                }),
                Za();
            }
          })(),
          Au());
      }),
      (ce = function(e, t) {
        var n = Vl;
        Vl |= 2;
        try {
          return e(t);
        } finally {
          (Vl = n) === Ll && Za();
        }
      });
    var dc,
      pc,
      hc = {
        createPortal: fc,
        findDOMNode: function(e) {
          if (null == e) return null;
          if (1 === e.nodeType) return e;
          var t = e._reactInternalFiber;
          if (void 0 === t) {
            if ("function" == typeof e.render) throw Error(o(188));
            throw Error(o(268, Object.keys(e)));
          }
          return (e = null === (e = rt(t)) ? null : e.stateNode);
        },
        hydrate: function(e, t, n) {
          if (!cc(t)) throw Error(o(200));
          return sc(null, e, t, !0, n);
        },
        render: function(e, t, n) {
          if (!cc(t)) throw Error(o(200));
          return sc(null, e, t, !1, n);
        },
        unstable_renderSubtreeIntoContainer: function(e, t, n, r) {
          if (!cc(n)) throw Error(o(200));
          if (null == e || void 0 === e._reactInternalFiber) throw Error(o(38));
          return sc(e, t, n, !1, r);
        },
        unmountComponentAtNode: function(e) {
          if (!cc(e)) throw Error(o(40));
          return (
            !!e._reactRootContainer &&
            (_u(function() {
              sc(null, null, e, !1, function() {
                (e._reactRootContainer = null), (e[fr] = null);
              });
            }),
            !0)
          );
        },
        unstable_createPortal: function() {
          return fc.apply(void 0, arguments);
        },
        unstable_batchedUpdates: xu,
        flushSync: function(e, t) {
          if ((Vl & (jl | Al)) !== Ll) throw Error(o(187));
          var n = Vl;
          Vl |= 1;
          try {
            return Ka(99, e.bind(null, t));
          } finally {
            (Vl = n), Za();
          }
        },
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          Events: [
            pr,
            hr,
            mr,
            N.injectEventPluginsByName,
            d,
            Rt,
            function(e) {
              C(e, Nt);
            },
            ae,
            ie,
            Pn,
            P,
            Au,
            { current: !1 }
          ]
        }
      };
    (pc = (dc = {
      findFiberByHostInstance: dr,
      bundleType: 0,
      version: "16.12.0",
      rendererPackageName: "react-dom"
    }).findFiberByHostInstance),
      (function(e) {
        if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
        var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (t.isDisabled || !t.supportsFiber) return !0;
        try {
          var n = t.inject(e);
          (qu = function(e) {
            try {
              t.onCommitFiberRoot(
                n,
                e,
                void 0,
                64 == (64 & e.current.effectTag)
              );
            } catch (e) {}
          }),
            (Vu = function(e) {
              try {
                t.onCommitFiberUnmount(n, e);
              } catch (e) {}
            });
        } catch (e) {}
      })(
        a({}, dc, {
          overrideHookState: null,
          overrideProps: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: D.ReactCurrentDispatcher,
          findHostInstanceByFiber: function(e) {
            return null === (e = rt(e)) ? null : e.stateNode;
          },
          findFiberByHostInstance: function(e) {
            return pc ? pc(e) : null;
          },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null
        })
      );
    var mc = { default: hc },
      vc = (mc && hc) || mc;
    e.exports = vc.default || vc;
  },
  function(e, t, n) {
    "use strict";
    e.exports = n(49);
  },
  function(e, t, n) {
    "use strict";
    /** @license React v0.18.0
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r, a, i, o, l;
    if (
      (Object.defineProperty(t, "__esModule", { value: !0 }),
      "undefined" == typeof window || "function" != typeof MessageChannel)
    ) {
      var u = null,
        c = null,
        s = function() {
          if (null !== u)
            try {
              var e = t.unstable_now();
              u(!0, e), (u = null);
            } catch (e) {
              throw (setTimeout(s, 0), e);
            }
        },
        f = Date.now();
      (t.unstable_now = function() {
        return Date.now() - f;
      }),
        (r = function(e) {
          null !== u ? setTimeout(r, 0, e) : ((u = e), setTimeout(s, 0));
        }),
        (a = function(e, t) {
          c = setTimeout(e, t);
        }),
        (i = function() {
          clearTimeout(c);
        }),
        (o = function() {
          return !1;
        }),
        (l = t.unstable_forceFrameRate = function() {});
    } else {
      var d = window.performance,
        p = window.Date,
        h = window.setTimeout,
        m = window.clearTimeout;
      if ("undefined" != typeof console) {
        var v = window.cancelAnimationFrame;
        "function" != typeof window.requestAnimationFrame &&
          console.error(
            "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
          ),
          "function" != typeof v &&
            console.error(
              "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
            );
      }
      if ("object" == typeof d && "function" == typeof d.now)
        t.unstable_now = function() {
          return d.now();
        };
      else {
        var g = p.now();
        t.unstable_now = function() {
          return p.now() - g;
        };
      }
      var y = !1,
        b = null,
        w = -1,
        k = 5,
        x = 0;
      (o = function() {
        return t.unstable_now() >= x;
      }),
        (l = function() {}),
        (t.unstable_forceFrameRate = function(e) {
          0 > e || 125 < e
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"
              )
            : (k = 0 < e ? Math.floor(1e3 / e) : 5);
        });
      var _ = new MessageChannel(),
        E = _.port2;
      (_.port1.onmessage = function() {
        if (null !== b) {
          var e = t.unstable_now();
          x = e + k;
          try {
            b(!0, e) ? E.postMessage(null) : ((y = !1), (b = null));
          } catch (e) {
            throw (E.postMessage(null), e);
          }
        } else y = !1;
      }),
        (r = function(e) {
          (b = e), y || ((y = !0), E.postMessage(null));
        }),
        (a = function(e, n) {
          w = h(function() {
            e(t.unstable_now());
          }, n);
        }),
        (i = function() {
          m(w), (w = -1);
        });
    }
    function T(e, t) {
      var n = e.length;
      e.push(t);
      e: for (;;) {
        var r = Math.floor((n - 1) / 2),
          a = e[r];
        if (!(void 0 !== a && 0 < O(a, t))) break e;
        (e[r] = t), (e[n] = a), (n = r);
      }
    }
    function S(e) {
      return void 0 === (e = e[0]) ? null : e;
    }
    function C(e) {
      var t = e[0];
      if (void 0 !== t) {
        var n = e.pop();
        if (n !== t) {
          e[0] = n;
          e: for (var r = 0, a = e.length; r < a; ) {
            var i = 2 * (r + 1) - 1,
              o = e[i],
              l = i + 1,
              u = e[l];
            if (void 0 !== o && 0 > O(o, n))
              void 0 !== u && 0 > O(u, o)
                ? ((e[r] = u), (e[l] = n), (r = l))
                : ((e[r] = o), (e[i] = n), (r = i));
            else {
              if (!(void 0 !== u && 0 > O(u, n))) break e;
              (e[r] = u), (e[l] = n), (r = l);
            }
          }
        }
        return t;
      }
      return null;
    }
    function O(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return 0 !== n ? n : e.id - t.id;
    }
    var M = [],
      P = [],
      N = 1,
      R = null,
      D = 3,
      L = !1,
      I = !1,
      j = !1;
    function A(e) {
      for (var t = S(P); null !== t; ) {
        if (null === t.callback) C(P);
        else {
          if (!(t.startTime <= e)) break;
          C(P), (t.sortIndex = t.expirationTime), T(M, t);
        }
        t = S(P);
      }
    }
    function F(e) {
      if (((j = !1), A(e), !I))
        if (null !== S(M)) (I = !0), r(z);
        else {
          var t = S(P);
          null !== t && a(F, t.startTime - e);
        }
    }
    function z(e, n) {
      (I = !1), j && ((j = !1), i()), (L = !0);
      var r = D;
      try {
        for (
          A(n), R = S(M);
          null !== R && (!(R.expirationTime > n) || (e && !o()));

        ) {
          var l = R.callback;
          if (null !== l) {
            (R.callback = null), (D = R.priorityLevel);
            var u = l(R.expirationTime <= n);
            (n = t.unstable_now()),
              "function" == typeof u ? (R.callback = u) : R === S(M) && C(M),
              A(n);
          } else C(M);
          R = S(M);
        }
        if (null !== R) var c = !0;
        else {
          var s = S(P);
          null !== s && a(F, s.startTime - n), (c = !1);
        }
        return c;
      } finally {
        (R = null), (D = r), (L = !1);
      }
    }
    function U(e) {
      switch (e) {
        case 1:
          return -1;
        case 2:
          return 250;
        case 5:
          return 1073741823;
        case 4:
          return 1e4;
        default:
          return 5e3;
      }
    }
    var W = l;
    (t.unstable_ImmediatePriority = 1),
      (t.unstable_UserBlockingPriority = 2),
      (t.unstable_NormalPriority = 3),
      (t.unstable_IdlePriority = 5),
      (t.unstable_LowPriority = 4),
      (t.unstable_runWithPriority = function(e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = D;
        D = e;
        try {
          return t();
        } finally {
          D = n;
        }
      }),
      (t.unstable_next = function(e) {
        switch (D) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = D;
        }
        var n = D;
        D = t;
        try {
          return e();
        } finally {
          D = n;
        }
      }),
      (t.unstable_scheduleCallback = function(e, n, o) {
        var l = t.unstable_now();
        if ("object" == typeof o && null !== o) {
          var u = o.delay;
          (u = "number" == typeof u && 0 < u ? l + u : l),
            (o = "number" == typeof o.timeout ? o.timeout : U(e));
        } else (o = U(e)), (u = l);
        return (
          (e = {
            id: N++,
            callback: n,
            priorityLevel: e,
            startTime: u,
            expirationTime: (o = u + o),
            sortIndex: -1
          }),
          u > l
            ? ((e.sortIndex = u),
              T(P, e),
              null === S(M) && e === S(P) && (j ? i() : (j = !0), a(F, u - l)))
            : ((e.sortIndex = o), T(M, e), I || L || ((I = !0), r(z))),
          e
        );
      }),
      (t.unstable_cancelCallback = function(e) {
        e.callback = null;
      }),
      (t.unstable_wrapCallback = function(e) {
        var t = D;
        return function() {
          var n = D;
          D = t;
          try {
            return e.apply(this, arguments);
          } finally {
            D = n;
          }
        };
      }),
      (t.unstable_getCurrentPriorityLevel = function() {
        return D;
      }),
      (t.unstable_shouldYield = function() {
        var e = t.unstable_now();
        A(e);
        var n = S(M);
        return (
          (n !== R &&
            null !== R &&
            null !== n &&
            null !== n.callback &&
            n.startTime <= e &&
            n.expirationTime < R.expirationTime) ||
          o()
        );
      }),
      (t.unstable_requestPaint = W),
      (t.unstable_continueExecution = function() {
        I || L || ((I = !0), r(z));
      }),
      (t.unstable_pauseExecution = function() {}),
      (t.unstable_getFirstCallbackNode = function() {
        return S(M);
      }),
      (t.unstable_Profiling = null);
  },
  function(e, t, n) {
    var r = (function(e) {
      "use strict";
      var t,
        n = Object.prototype,
        r = n.hasOwnProperty,
        a = "function" == typeof Symbol ? Symbol : {},
        i = a.iterator || "@@iterator",
        o = a.asyncIterator || "@@asyncIterator",
        l = a.toStringTag || "@@toStringTag";
      function u(e, t, n, r) {
        var a = t && t.prototype instanceof m ? t : m,
          i = Object.create(a.prototype),
          o = new C(r || []);
        return (
          (i._invoke = (function(e, t, n) {
            var r = s;
            return function(a, i) {
              if (r === d) throw new Error("Generator is already running");
              if (r === p) {
                if ("throw" === a) throw i;
                return M();
              }
              for (n.method = a, n.arg = i; ; ) {
                var o = n.delegate;
                if (o) {
                  var l = E(o, n);
                  if (l) {
                    if (l === h) continue;
                    return l;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (r === s) throw ((r = p), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = d;
                var u = c(e, t, n);
                if ("normal" === u.type) {
                  if (((r = n.done ? p : f), u.arg === h)) continue;
                  return { value: u.arg, done: n.done };
                }
                "throw" === u.type &&
                  ((r = p), (n.method = "throw"), (n.arg = u.arg));
              }
            };
          })(e, n, o)),
          i
        );
      }
      function c(e, t, n) {
        try {
          return { type: "normal", arg: e.call(t, n) };
        } catch (e) {
          return { type: "throw", arg: e };
        }
      }
      e.wrap = u;
      var s = "suspendedStart",
        f = "suspendedYield",
        d = "executing",
        p = "completed",
        h = {};
      function m() {}
      function v() {}
      function g() {}
      var y = {};
      y[i] = function() {
        return this;
      };
      var b = Object.getPrototypeOf,
        w = b && b(b(O([])));
      w && w !== n && r.call(w, i) && (y = w);
      var k = (g.prototype = m.prototype = Object.create(y));
      function x(e) {
        ["next", "throw", "return"].forEach(function(t) {
          e[t] = function(e) {
            return this._invoke(t, e);
          };
        });
      }
      function _(e) {
        var t;
        this._invoke = function(n, a) {
          function i() {
            return new Promise(function(t, i) {
              !(function t(n, a, i, o) {
                var l = c(e[n], e, a);
                if ("throw" !== l.type) {
                  var u = l.arg,
                    s = u.value;
                  return s && "object" == typeof s && r.call(s, "__await")
                    ? Promise.resolve(s.__await).then(
                        function(e) {
                          t("next", e, i, o);
                        },
                        function(e) {
                          t("throw", e, i, o);
                        }
                      )
                    : Promise.resolve(s).then(
                        function(e) {
                          (u.value = e), i(u);
                        },
                        function(e) {
                          return t("throw", e, i, o);
                        }
                      );
                }
                o(l.arg);
              })(n, a, t, i);
            });
          }
          return (t = t ? t.then(i, i) : i());
        };
      }
      function E(e, n) {
        var r = e.iterator[n.method];
        if (r === t) {
          if (((n.delegate = null), "throw" === n.method)) {
            if (
              e.iterator.return &&
              ((n.method = "return"),
              (n.arg = t),
              E(e, n),
              "throw" === n.method)
            )
              return h;
            (n.method = "throw"),
              (n.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return h;
        }
        var a = c(r, e.iterator, n.arg);
        if ("throw" === a.type)
          return (n.method = "throw"), (n.arg = a.arg), (n.delegate = null), h;
        var i = a.arg;
        return i
          ? i.done
            ? ((n[e.resultName] = i.value),
              (n.next = e.nextLoc),
              "return" !== n.method && ((n.method = "next"), (n.arg = t)),
              (n.delegate = null),
              h)
            : i
          : ((n.method = "throw"),
            (n.arg = new TypeError("iterator result is not an object")),
            (n.delegate = null),
            h);
      }
      function T(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function S(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function C(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(T, this),
          this.reset(!0);
      }
      function O(e) {
        if (e) {
          var n = e[i];
          if (n) return n.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var a = -1,
              o = function n() {
                for (; ++a < e.length; )
                  if (r.call(e, a)) return (n.value = e[a]), (n.done = !1), n;
                return (n.value = t), (n.done = !0), n;
              };
            return (o.next = o);
          }
        }
        return { next: M };
      }
      function M() {
        return { value: t, done: !0 };
      }
      return (
        (v.prototype = k.constructor = g),
        (g.constructor = v),
        (g[l] = v.displayName = "GeneratorFunction"),
        (e.isGeneratorFunction = function(e) {
          var t = "function" == typeof e && e.constructor;
          return (
            !!t &&
            (t === v || "GeneratorFunction" === (t.displayName || t.name))
          );
        }),
        (e.mark = function(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, g)
              : ((e.__proto__ = g), l in e || (e[l] = "GeneratorFunction")),
            (e.prototype = Object.create(k)),
            e
          );
        }),
        (e.awrap = function(e) {
          return { __await: e };
        }),
        x(_.prototype),
        (_.prototype[o] = function() {
          return this;
        }),
        (e.AsyncIterator = _),
        (e.async = function(t, n, r, a) {
          var i = new _(u(t, n, r, a));
          return e.isGeneratorFunction(n)
            ? i
            : i.next().then(function(e) {
                return e.done ? e.value : i.next();
              });
        }),
        x(k),
        (k[l] = "Generator"),
        (k[i] = function() {
          return this;
        }),
        (k.toString = function() {
          return "[object Generator]";
        }),
        (e.keys = function(e) {
          var t = [];
          for (var n in e) t.push(n);
          return (
            t.reverse(),
            function n() {
              for (; t.length; ) {
                var r = t.pop();
                if (r in e) return (n.value = r), (n.done = !1), n;
              }
              return (n.done = !0), n;
            }
          );
        }),
        (e.values = O),
        (C.prototype = {
          constructor: C,
          reset: function(e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = t),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = t),
              this.tryEntries.forEach(S),
              !e)
            )
              for (var n in this)
                "t" === n.charAt(0) &&
                  r.call(this, n) &&
                  !isNaN(+n.slice(1)) &&
                  (this[n] = t);
          },
          stop: function() {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function(e) {
            if (this.done) throw e;
            var n = this;
            function a(r, a) {
              return (
                (l.type = "throw"),
                (l.arg = e),
                (n.next = r),
                a && ((n.method = "next"), (n.arg = t)),
                !!a
              );
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var o = this.tryEntries[i],
                l = o.completion;
              if ("root" === o.tryLoc) return a("end");
              if (o.tryLoc <= this.prev) {
                var u = r.call(o, "catchLoc"),
                  c = r.call(o, "finallyLoc");
                if (u && c) {
                  if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return a(o.finallyLoc);
                } else if (u) {
                  if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                } else {
                  if (!c)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return a(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function(e, t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var a = this.tryEntries[n];
              if (
                a.tryLoc <= this.prev &&
                r.call(a, "finallyLoc") &&
                this.prev < a.finallyLoc
              ) {
                var i = a;
                break;
              }
            }
            i &&
              ("break" === e || "continue" === e) &&
              i.tryLoc <= t &&
              t <= i.finallyLoc &&
              (i = null);
            var o = i ? i.completion : {};
            return (
              (o.type = e),
              (o.arg = t),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), h)
                : this.complete(o)
            );
          },
          complete: function(e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              h
            );
          },
          finish: function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.finallyLoc === e)
                return this.complete(n.completion, n.afterLoc), S(n), h;
            }
          },
          catch: function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.tryLoc === e) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var a = r.arg;
                  S(n);
                }
                return a;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function(e, n, r) {
            return (
              (this.delegate = { iterator: O(e), resultName: n, nextLoc: r }),
              "next" === this.method && (this.arg = t),
              h
            );
          }
        }),
        e
      );
    })(e.exports);
    try {
      regeneratorRuntime = r;
    } catch (e) {
      Function("r", "regeneratorRuntime = r")(r);
    }
  },
  function(e, t) {
    e.exports = function(e) {
      if (Array.isArray(e)) return e;
    };
  },
  function(e, t) {
    e.exports = function(e, t) {
      if (
        Symbol.iterator in Object(e) ||
        "[object Arguments]" === Object.prototype.toString.call(e)
      ) {
        var n = [],
          r = !0,
          a = !1,
          i = void 0;
        try {
          for (
            var o, l = e[Symbol.iterator]();
            !(r = (o = l.next()).done) &&
            (n.push(o.value), !t || n.length !== t);
            r = !0
          );
        } catch (e) {
          (a = !0), (i = e);
        } finally {
          try {
            r || null == l.return || l.return();
          } finally {
            if (a) throw i;
          }
        }
        return n;
      }
    };
  },
  function(e, t) {
    e.exports = function() {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    };
  },
  function(e, t) {
    e.exports = function(e, t) {
      if (null == e) return {};
      var n,
        r,
        a = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++)
        (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a;
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(56);
    function a() {}
    function i() {}
    (i.resetWarningCache = a),
      (e.exports = function() {
        function e(e, t, n, a, i, o) {
          if (o !== r) {
            var l = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ((l.name = "Invariant Violation"), l);
          }
        }
        function t() {
          return e;
        }
        e.isRequired = e;
        var n = {
          array: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: i,
          resetWarningCache: a
        };
        return (n.PropTypes = n), n;
      });
  },
  function(e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  },
  function(e, t, n) {
    var r = n(33);
    e.exports = function() {
      return r.Date.now();
    };
  },
  function(e, t, n) {
    (function(t) {
      var n = "object" == typeof t && t && t.Object === Object && t;
      e.exports = n;
    }.call(this, n(23)));
  },
  function(e, t, n) {
    var r = n(32),
      a = n(60),
      i = NaN,
      o = /^\s+|\s+$/g,
      l = /^[-+]0x[0-9a-f]+$/i,
      u = /^0b[01]+$/i,
      c = /^0o[0-7]+$/i,
      s = parseInt;
    e.exports = function(e) {
      if ("number" == typeof e) return e;
      if (a(e)) return i;
      if (r(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = r(t) ? t + "" : t;
      }
      if ("string" != typeof e) return 0 === e ? e : +e;
      e = e.replace(o, "");
      var n = u.test(e);
      return n || c.test(e) ? s(e.slice(2), n ? 2 : 8) : l.test(e) ? i : +e;
    };
  },
  function(e, t, n) {
    var r = n(61),
      a = n(64),
      i = "[object Symbol]";
    e.exports = function(e) {
      return "symbol" == typeof e || (a(e) && r(e) == i);
    };
  },
  function(e, t, n) {
    var r = n(34),
      a = n(62),
      i = n(63),
      o = "[object Null]",
      l = "[object Undefined]",
      u = r ? r.toStringTag : void 0;
    e.exports = function(e) {
      return null == e
        ? void 0 === e
          ? l
          : o
        : u && u in Object(e)
        ? a(e)
        : i(e);
    };
  },
  function(e, t, n) {
    var r = n(34),
      a = Object.prototype,
      i = a.hasOwnProperty,
      o = a.toString,
      l = r ? r.toStringTag : void 0;
    e.exports = function(e) {
      var t = i.call(e, l),
        n = e[l];
      try {
        e[l] = void 0;
        var r = !0;
      } catch (e) {}
      var a = o.call(e);
      return r && (t ? (e[l] = n) : delete e[l]), a;
    };
  },
  function(e, t) {
    var n = Object.prototype.toString;
    e.exports = function(e) {
      return n.call(e);
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return null != e && "object" == typeof e;
    };
  },
  function(e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "withBoundingRects", function() {
        return g;
      }),
      n.d(t, "withBoundingRectsProps", function() {
        return v;
      });
    var r = n(1),
      a = n.n(r),
      i = n(16),
      o = n.n(i),
      l = n(0),
      u = n.n(l),
      c = function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      },
      s = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      f =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      d = function(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      },
      p = function(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      },
      h = { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 },
      m = u.a.shape({
        top: u.a.number.isRequired,
        right: u.a.number.isRequired,
        bottom: u.a.number.isRequired,
        left: u.a.number.isRequired,
        width: u.a.number.isRequired,
        height: u.a.number.isRequired
      }),
      v = { getRects: u.a.func, rect: m, parentRect: m };
    function g(e) {
      var t = (function(t) {
        function n(e) {
          c(this, n);
          var t = p(
            this,
            (n.__proto__ || Object.getPrototypeOf(n)).call(this, e)
          );
          return (
            (t.state = { rect: void 0, parentRect: void 0 }),
            (t.getRects = t.getRects.bind(t)),
            t
          );
        }
        return (
          d(n, t),
          s(n, [
            {
              key: "componentDidMount",
              value: function() {
                var e = this;
                (this.node = o.a.findDOMNode(this)),
                  this.setState(function() {
                    return e.getRects();
                  });
              }
            },
            {
              key: "getRects",
              value: function() {
                if (!this.node) return this.state;
                var e = this.node,
                  t = this.node.parentNode;
                return {
                  rect: e.getBoundingClientRect ? e.getBoundingClientRect() : h,
                  parentRect:
                    t && t.getBoundingClientRect ? t.getBoundingClientRect() : h
                };
              }
            },
            {
              key: "render",
              value: function() {
                return a.a.createElement(
                  e,
                  f({ getRects: this.getRects }, this.state, this.props)
                );
              }
            }
          ]),
          n
        );
      })(a.a.PureComponent);
      return (
        (t.propTypes = e.propTypes),
        (t.defaultProps = e.defaultProps),
        (t.displayName = "withBoundingRects(" + (e.displayName || "") + ")"),
        t
      );
    }
  },
  function(e, t, n) {
    var r = n(35);
    function a(e, t, n) {
      var i = e;
      return (function(e, t) {
        var n = [],
          a = "string" == typeof t ? new RegExp("\\b(" + t + ")\\(") : t;
        do {
          var i = a.exec(e);
          if (!i) return n;
          if (void 0 === i[1])
            throw new Error(
              "Missing the first couple of parenthesis to get the function identifier in " +
                t
            );
          var o = i[1],
            l = i.index,
            u = r("(", ")", e.substring(l));
          if (!u || u.start !== i[0].length - 1)
            throw new SyntaxError(
              o + "(): missing closing ')' in the value '" + e + "'"
            );
          n.push({ matches: u, functionIdentifier: o }), (e = u.post);
        } while (a.test(e));
        return n;
      })(e, t).reduce(function(e, r) {
        return e.replace(
          r.functionIdentifier + "(" + r.matches.body + ")",
          (function(e, t, n, r, i) {
            return n(a(e, i, n), t, r);
          })(r.matches.body, r.functionIdentifier, n, i, t)
        );
      }, e);
    }
    e.exports = a;
  },
  function(e, t, n) {
    var r = n(68);
    (r.prototype.formulaEval = function() {
      "use strict";
      for (var e, t, n, r = [], a = this.value, i = 0; i < a.length; i++)
        1 === a[i].type || 3 === a[i].type
          ? r.push({ value: 3 === a[i].type ? a[i].show : a[i].value, type: 1 })
          : 13 === a[i].type
          ? r.push({ value: a[i].show, type: 1 })
          : 0 === a[i].type
          ? (r[r.length - 1] = {
              value:
                a[i].show +
                ("-" != a[i].show ? "(" : "") +
                r[r.length - 1].value +
                ("-" != a[i].show ? ")" : ""),
              type: 0
            })
          : 7 === a[i].type
          ? (r[r.length - 1] = {
              value:
                (1 != r[r.length - 1].type ? "(" : "") +
                r[r.length - 1].value +
                (1 != r[r.length - 1].type ? ")" : "") +
                a[i].show,
              type: 7
            })
          : 10 === a[i].type
          ? ((e = r.pop()),
            (t = r.pop()),
            "P" === a[i].show || "C" === a[i].show
              ? r.push({
                  value:
                    "<sup>" +
                    t.value +
                    "</sup>" +
                    a[i].show +
                    "<sub>" +
                    e.value +
                    "</sub>",
                  type: 10
                })
              : r.push({
                  value:
                    (1 != t.type ? "(" : "") +
                    t.value +
                    (1 != t.type ? ")" : "") +
                    "<sup>" +
                    e.value +
                    "</sup>",
                  type: 1
                }))
          : 2 === a[i].type || 9 === a[i].type
          ? ((e = r.pop()),
            (t = r.pop()),
            r.push({
              value:
                (1 != t.type ? "(" : "") +
                t.value +
                (1 != t.type ? ")" : "") +
                a[i].show +
                (1 != e.type ? "(" : "") +
                e.value +
                (1 != e.type ? ")" : ""),
              type: a[i].type
            }))
          : 12 === a[i].type &&
            ((e = r.pop()),
            (t = r.pop()),
            (n = r.pop()),
            r.push({
              value:
                a[i].show + "(" + n.value + "," + t.value + "," + e.value + ")",
              type: 12
            }));
      return r[0].value;
    }),
      (e.exports = r);
  },
  function(e, t, n) {
    var r = n(69);
    (r.prototype.postfixEval = function(e) {
      "use strict";
      ((e = e || {}).PI = Math.PI), (e.E = Math.E);
      for (
        var t, n, a, i = [], o = this.value, l = void 0 !== e.n, u = 0;
        u < o.length;
        u++
      )
        1 === o[u].type
          ? i.push({ value: o[u].value, type: 1 })
          : 3 === o[u].type
          ? i.push({ value: e[o[u].value], type: 1 })
          : 0 === o[u].type
          ? void 0 === i[i.length - 1].type
            ? i[i.length - 1].value.push(o[u])
            : (i[i.length - 1].value = o[u].value(i[i.length - 1].value))
          : 7 === o[u].type
          ? void 0 === i[i.length - 1].type
            ? i[i.length - 1].value.push(o[u])
            : (i[i.length - 1].value = o[u].value(i[i.length - 1].value))
          : 8 === o[u].type
          ? ((t = i.pop()),
            (n = i.pop()),
            i.push({ type: 1, value: o[u].value(n.value, t.value) }))
          : 10 === o[u].type
          ? ((t = i.pop()),
            void 0 === (n = i.pop()).type
              ? ((n.value = n.concat(t)), n.value.push(o[u]), i.push(n))
              : void 0 === t.type
              ? (t.unshift(n), t.push(o[u]), i.push(t))
              : i.push({ type: 1, value: o[u].value(n.value, t.value) }))
          : 2 === o[u].type || 9 === o[u].type
          ? ((t = i.pop()),
            void 0 === (n = i.pop()).type
              ? (console.log(n), (n = n.concat(t)).push(o[u]), i.push(n))
              : void 0 === t.type
              ? (t.unshift(n), t.push(o[u]), i.push(t))
              : i.push({ type: 1, value: o[u].value(n.value, t.value) }))
          : 12 === o[u].type
          ? (void 0 !== (t = i.pop()).type && (t = [t]),
            (n = i.pop()),
            (a = i.pop()),
            i.push({ type: 1, value: o[u].value(a.value, n.value, new r(t)) }))
          : 13 === o[u].type &&
            (l ? i.push({ value: e[o[u].value], type: 3 }) : i.push([o[u]]));
      if (i.length > 1) throw new r.exception("Uncaught Syntax error");
      return i[0].value > 1e15
        ? "Infinity"
        : parseFloat(i[0].value.toFixed(15));
    }),
      (r.eval = function(e, t, n) {
        return void 0 === t
          ? this.lex(e)
              .toPostfix()
              .postfixEval()
          : void 0 === n
          ? void 0 !== t.length
            ? this.lex(e, t)
                .toPostfix()
                .postfixEval()
            : this.lex(e)
                .toPostfix()
                .postfixEval(t)
          : this.lex(e, t)
              .toPostfix()
              .postfixEval(n);
      }),
      (e.exports = r);
  },
  function(e, t, n) {
    var r = n(70);
    (r.prototype.toPostfix = function() {
      "use strict";
      for (
        var e,
          t,
          n,
          a,
          i,
          o = [],
          l = [{ value: "(", type: 4, pre: 0 }],
          u = this.value,
          c = 1;
        c < u.length;
        c++
      )
        if (1 === u[c].type || 3 === u[c].type || 13 === u[c].type)
          1 === u[c].type && (u[c].value = Number(u[c].value)), o.push(u[c]);
        else if (4 === u[c].type) l.push(u[c]);
        else if (5 === u[c].type) for (; 4 !== (t = l.pop()).type; ) o.push(t);
        else if (11 === u[c].type) {
          for (; 4 !== (t = l.pop()).type; ) o.push(t);
          l.push(t);
        } else {
          (a = (e = u[c]).pre), (n = (i = l[l.length - 1]).pre);
          var s = "Math.pow" == i.value && "Math.pow" == e.value;
          if (a > n) l.push(e);
          else {
            for (; (n >= a && !s) || (s && a < n); )
              (t = l.pop()),
                (i = l[l.length - 1]),
                o.push(t),
                (n = i.pre),
                (s = "Math.pow" == e.value && "Math.pow" == i.value);
            l.push(e);
          }
        }
      return new r(o);
    }),
      (e.exports = r);
  },
  function(e, t, n) {
    var r = n(71);
    function a(e, t) {
      for (var n = 0; n < e.length; n++) e[n] += t;
      return e;
    }
    var o = [
        "sin",
        "cos",
        "tan",
        "pi",
        "(",
        ")",
        "P",
        "C",
        "asin",
        "acos",
        "atan",
        "7",
        "8",
        "9",
        "int",
        "cosh",
        "acosh",
        "ln",
        "^",
        "root",
        "4",
        "5",
        "6",
        "/",
        "!",
        "tanh",
        "atanh",
        "Mod",
        "1",
        "2",
        "3",
        "*",
        "sinh",
        "asinh",
        "e",
        "log",
        "0",
        ".",
        "+",
        "-",
        ",",
        "Sigma",
        "n",
        "Pi",
        "pow"
      ],
      l = [
        "sin",
        "cos",
        "tan",
        "&pi;",
        "(",
        ")",
        "P",
        "C",
        "asin",
        "acos",
        "atan",
        "7",
        "8",
        "9",
        "Int",
        "cosh",
        "acosh",
        " ln",
        "^",
        "root",
        "4",
        "5",
        "6",
        "&divide;",
        "!",
        "tanh",
        "atanh",
        " Mod ",
        "1",
        "2",
        "3",
        "&times;",
        "sinh",
        "asinh",
        "e",
        " log",
        "0",
        ".",
        "+",
        "-",
        ",",
        "&Sigma;",
        "n",
        "&Pi;",
        "pow"
      ],
      u = [
        r.math.sin,
        r.math.cos,
        r.math.tan,
        "PI",
        "(",
        ")",
        r.math.P,
        r.math.C,
        r.math.asin,
        r.math.acos,
        r.math.atan,
        "7",
        "8",
        "9",
        Math.floor,
        r.math.cosh,
        r.math.acosh,
        Math.log,
        Math.pow,
        Math.sqrt,
        "4",
        "5",
        "6",
        r.math.div,
        r.math.fact,
        r.math.tanh,
        r.math.atanh,
        r.math.mod,
        "1",
        "2",
        "3",
        r.math.mul,
        r.math.sinh,
        r.math.asinh,
        "E",
        r.math.log,
        "0",
        ".",
        r.math.add,
        r.math.sub,
        ",",
        r.math.sigma,
        "n",
        r.math.Pi,
        Math.pow
      ],
      c = {
        0: 11,
        1: 0,
        2: 3,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 11,
        8: 11,
        9: 1,
        10: 10,
        11: 0,
        12: 11,
        13: 0
      },
      s = [
        0,
        0,
        0,
        3,
        4,
        5,
        10,
        10,
        0,
        0,
        0,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        10,
        0,
        1,
        1,
        1,
        2,
        7,
        0,
        0,
        2,
        1,
        1,
        1,
        2,
        0,
        0,
        3,
        0,
        1,
        6,
        9,
        9,
        11,
        12,
        13,
        12,
        8
      ],
      f = { 0: !0, 1: !0, 3: !0, 4: !0, 6: !0, 8: !0, 9: !0, 12: !0, 13: !0 },
      d = {
        0: !0,
        1: !0,
        2: !0,
        3: !0,
        4: !0,
        5: !0,
        6: !0,
        7: !0,
        8: !0,
        9: !0,
        10: !0,
        11: !0,
        12: !0,
        13: !0
      },
      p = { 0: !0, 3: !0, 4: !0, 8: !0, 12: !0, 13: !0 },
      h = {},
      m = { 0: !0, 1: !0, 3: !0, 4: !0, 6: !0, 8: !0, 12: !0, 13: !0 },
      v = { 1: !0 },
      g = [
        [],
        [
          "1",
          "2",
          "3",
          "7",
          "8",
          "9",
          "4",
          "5",
          "6",
          "+",
          "-",
          "*",
          "/",
          "(",
          ")",
          "^",
          "!",
          "P",
          "C",
          "e",
          "0",
          ".",
          ",",
          "n"
        ],
        ["pi", "ln", "Pi"],
        ["sin", "cos", "tan", "Del", "int", "Mod", "log", "pow"],
        ["asin", "acos", "atan", "cosh", "root", "tanh", "sinh"],
        ["acosh", "atanh", "asinh", "Sigma"]
      ];
    function b(e, t, n, r) {
      for (var a = 0; a < r; a++) if (e[n + a] !== t[a]) return !1;
      return !0;
    }
    (r.addToken = function(e) {
      for (i = 0; i < e.length; i++) {
        x = e[i].token.length;
        var t = -1;
        if (x < g.length)
          for (y = 0; y < g[x].length; y++)
            if (e[i].token === g[x][y]) {
              t = o.indexOf(g[x][y]);
              break;
            }
        -1 === t
          ? (o.push(e[i].token),
            s.push(e[i].type),
            g.length <= e[i].token.length && (g[e[i].token.length] = []),
            g[e[i].token.length].push(e[i].token),
            u.push(e[i].value),
            l.push(e[i].show))
          : ((o[t] = e[i].token),
            (s[t] = e[i].type),
            (u[t] = e[i].value),
            (l[t] = e[i].show));
      }
    }),
      (r.lex = function(e, t) {
        "use strict";
        var n,
          i,
          y,
          w,
          k = [{ type: 4, value: "(", show: "(", pre: 0 }],
          x = [],
          _ = e,
          E = 0,
          T = f,
          S = 0,
          C = h,
          O = "";
        void 0 !== t && r.addToken(t);
        var M = {};
        for (i = 0; i < _.length; i++)
          if (" " != _[i]) {
            n = "";
            e: for (
              y = _.length - i > g.length - 2 ? g.length - 1 : _.length - i;
              y > 0;
              y--
            )
              for (w = 0; w < g[y].length; w++)
                if (b(_, g[y][w], i, y)) {
                  n = g[y][w];
                  break e;
                }
            if (((i += n.length - 1), "" === n))
              throw new r.exception("Can't understand after " + _.slice(i));
            var P = o.indexOf(n),
              N = n,
              R = s[P],
              D = u[P],
              L = c[R],
              I = l[P],
              j = k[k.length - 1];
            for (A = x.length; A--; )
              if (0 === x[A] && -1 !== [0, 2, 3, 5, 9, 11, 12, 13].indexOf(R)) {
                if (!0 !== T[R])
                  throw new r.exception(n + " is not allowed after " + O);
                k.push({ value: ")", type: 5, pre: 0, show: ")" }),
                  (T = d),
                  (C = m),
                  a(x, -1).pop();
              }
            if (!0 !== T[R])
              throw new r.exception(n + " is not allowed after " + O);
            if (
              (!0 === C[R] &&
                ((R = 2),
                (D = r.math.mul),
                (I = "&times;"),
                (L = 3),
                (i -= n.length)),
              (M = { value: D, type: R, pre: L, show: I }),
              0 === R)
            )
              (T = f),
                (C = h),
                a(x, 2).push(2),
                k.push(M),
                k.push({ value: "(", type: 4, pre: 0, show: "(" });
            else if (1 === R)
              1 === j.type ? ((j.value += D), a(x, 1)) : k.push(M),
                (T = d),
                (C = p);
            else if (2 === R) (T = f), (C = h), a(x, 2), k.push(M);
            else if (3 === R) k.push(M), (T = d), (C = m);
            else if (4 === R)
              (E += x.length), (x = []), S++, (T = f), (C = h), k.push(M);
            else if (5 === R) {
              if (!S)
                throw new r.exception(
                  "Closing parenthesis are more than opening one, wait What!!!"
                );
              for (; E--; ) k.push({ value: ")", type: 5, pre: 0, show: ")" });
              (E = 0), S--, (T = d), (C = m), k.push(M);
            } else if (6 === R) {
              if (j.hasDec)
                throw new r.exception(
                  "Two decimals are not allowed in one number"
                );
              1 !== j.type &&
                ((j = { value: 0, type: 1, pre: 0 }), k.push(j), a(x, -1)),
                (T = v),
                a(x, 1),
                (C = h),
                (j.value += D),
                (j.hasDec = !0);
            } else 7 === R && ((T = d), (C = m), a(x, 1), k.push(M));
            8 === R
              ? ((T = f),
                (C = h),
                a(x, 4).push(4),
                k.push(M),
                k.push({ value: "(", type: 4, pre: 0, show: "(" }))
              : 9 === R
              ? (9 === j.type
                  ? j.value === r.math.add
                    ? ((j.value = D), (j.show = I), a(x, 1))
                    : j.value === r.math.sub &&
                      "-" === I &&
                      ((j.value = r.math.add), (j.show = "+"), a(x, 1))
                  : 5 !== j.type &&
                    7 !== j.type &&
                    1 !== j.type &&
                    3 !== j.type &&
                    13 !== j.type
                  ? "-" === N &&
                    ((T = f),
                    (C = h),
                    a(x, 2).push(2),
                    k.push({
                      value: r.math.changeSign,
                      type: 0,
                      pre: 21,
                      show: "-"
                    }),
                    k.push({ value: "(", type: 4, pre: 0, show: "(" }))
                  : (k.push(M), a(x, 2)),
                (T = f),
                (C = h))
              : 10 === R
              ? ((T = f), (C = h), a(x, 2), k.push(M))
              : 11 === R
              ? ((T = f), (C = h), k.push(M))
              : 12 === R
              ? ((T = f),
                (C = h),
                a(x, 6).push(6),
                k.push(M),
                k.push({ value: "(", type: 4, pre: 0 }))
              : 13 === R && ((T = d), (C = m), k.push(M)),
              a(x, -1),
              (O = n);
          }
        for (var A = x.length; A--; )
          0 === x[A] &&
            (k.push({ value: ")", show: ")", type: 5, pre: 3 }),
            a(x, -1).pop());
        if (!0 !== T[5]) throw new r.exception("complete the expression");
        for (; S--; ) k.push({ value: ")", show: ")", type: 5, pre: 3 });
        return k.push({ type: 5, value: ")", show: ")", pre: 0 }), new r(k);
      }),
      (e.exports = r);
  },
  function(e, t) {
    var n = function(e) {
      this.value = e;
    };
    (n.math = {
      isDegree: !0,
      acos: function(e) {
        return n.math.isDegree ? (180 / Math.PI) * Math.acos(e) : Math.acos(e);
      },
      add: function(e, t) {
        return e + t;
      },
      asin: function(e) {
        return n.math.isDegree ? (180 / Math.PI) * Math.asin(e) : Math.asin(e);
      },
      atan: function(e) {
        return n.math.isDegree ? (180 / Math.PI) * Math.atan(e) : Math.atan(e);
      },
      acosh: function(e) {
        return Math.log(e + Math.sqrt(e * e - 1));
      },
      asinh: function(e) {
        return Math.log(e + Math.sqrt(e * e + 1));
      },
      atanh: function(e) {
        return Math.log((1 + e) / (1 - e));
      },
      C: function(e, t) {
        var r = 1,
          a = e - t,
          i = t;
        i < a && ((i = a), (a = t));
        for (var o = i + 1; o <= e; o++) r *= o;
        return r / n.math.fact(a);
      },
      changeSign: function(e) {
        return -e;
      },
      cos: function(e) {
        return n.math.isDegree && (e = n.math.toRadian(e)), Math.cos(e);
      },
      cosh: function(e) {
        return (Math.pow(Math.E, e) + Math.pow(Math.E, -1 * e)) / 2;
      },
      div: function(e, t) {
        return e / t;
      },
      fact: function(e) {
        if (e % 1 != 0) return "NAN";
        for (var t = 1, n = 2; n <= e; n++) t *= n;
        return t;
      },
      inverse: function(e) {
        return 1 / e;
      },
      log: function(e) {
        return Math.log(e) / Math.log(10);
      },
      mod: function(e, t) {
        return e % t;
      },
      mul: function(e, t) {
        return e * t;
      },
      P: function(e, t) {
        for (
          var n = 1, r = Math.floor(e) - Math.floor(t) + 1;
          r <= Math.floor(e);
          r++
        )
          n *= r;
        return n;
      },
      Pi: function(e, t, n) {
        for (var r = 1, a = e; a <= t; a++)
          r *= Number(n.postfixEval({ n: a }));
        return r;
      },
      pow10x: function(e) {
        for (var t = 1; e--; ) t *= 10;
        return t;
      },
      sigma: function(e, t, n) {
        for (var r = 0, a = e; a <= t; a++)
          r += Number(n.postfixEval({ n: a }));
        return r;
      },
      sin: function(e) {
        return n.math.isDegree && (e = n.math.toRadian(e)), Math.sin(e);
      },
      sinh: function(e) {
        return (Math.pow(Math.E, e) - Math.pow(Math.E, -1 * e)) / 2;
      },
      sub: function(e, t) {
        return e - t;
      },
      tan: function(e) {
        return n.math.isDegree && (e = n.math.toRadian(e)), Math.tan(e);
      },
      tanh: function(e) {
        return n.sinha(e) / n.cosha(e);
      },
      toRadian: function(e) {
        return (e * Math.PI) / 180;
      }
    }),
      (n.exception = function(e) {
        this.message = e;
      }),
      (e.exports = n);
  },
  function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(1),
      a = n.n(r),
      i = n(16),
      o = n.n(i),
      l = n(4),
      u = n.n(l),
      c = n(3),
      s = n.n(c),
      f = n(7),
      d = n.n(f),
      p = n(8),
      h = n.n(p);
    var m = (function() {
        function e(t) {
          d()(this, e),
            (this.raw_json_ = t),
            (this.data_config_ = new Map()),
            this.parse_();
        }
        return (
          h()(e, [
            {
              key: "parse_",
              value: function() {
                var e = !0,
                  t = !1,
                  n = void 0;
                try {
                  for (
                    var r, a = this.raw_json_[Symbol.iterator]();
                    !(e = (r = a.next()).done);
                    e = !0
                  ) {
                    var i = r.value;
                    this.data_config_.set(
                      ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
                        /[018]/g,
                        function(e) {
                          return (
                            e ^
                            (crypto.getRandomValues(new Uint8Array(1))[0] &
                              (15 >> (e / 4)))
                          ).toString(16);
                        }
                      ),
                      i
                    );
                  }
                } catch (e) {
                  (t = !0), (n = e);
                } finally {
                  try {
                    e || null == a.return || a.return();
                  } finally {
                    if (t) throw n;
                  }
                }
              }
            },
            {
              key: "getNames",
              value: function() {
                return Array.from(this.data_config_, function(e) {
                  var t = s()(e, 2);
                  t[0];
                  return t[1].name;
                });
              }
            },
            {
              key: "findByName",
              value: function(e) {
                var t = !0,
                  n = !1,
                  r = void 0;
                try {
                  for (
                    var a, i = this.data_config_.entries()[Symbol.iterator]();
                    !(t = (a = i.next()).done);
                    t = !0
                  ) {
                    var o = s()(a.value, 2),
                      l = (o[0], o[1]);
                    if (l.name === e) return l;
                  }
                } catch (e) {
                  (n = !0), (r = e);
                } finally {
                  try {
                    t || null == i.return || i.return();
                  } finally {
                    if (n) throw r;
                  }
                }
                return null;
              }
            }
          ]),
          e
        );
      })(),
      v = (function() {
        function e(t) {
          d()(this, e),
            (this.data_config_path_ = t),
            (this.raw_response_ = []),
            (this.data_config_ = new m(this.raw_response_));
        }
        return (
          h()(e, [
            {
              key: "load",
              value: function() {
                var t;
                return u.a.async(
                  function(n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (t = null),
                            (n.prev = 1),
                            (n.next = 4),
                            u.a.awrap(fetch(this.data_config_path_))
                          );
                        case 4:
                          (t = n.sent), (n.next = 10);
                          break;
                        case 7:
                          return (
                            (n.prev = 7),
                            (n.t0 = n.catch(1)),
                            n.abrupt("return", {
                              status: e.Status.NETWORK_ERROR,
                              exception_if_thrown: n.t0,
                              data_config: this.data_config_
                            })
                          );
                        case 10:
                          return (
                            (n.prev = 10), (n.next = 13), u.a.awrap(t.json())
                          );
                        case 13:
                          (this.raw_response_ = n.sent), (n.next = 19);
                          break;
                        case 16:
                          return (
                            (n.prev = 16),
                            (n.t1 = n.catch(10)),
                            n.abrupt("return", {
                              status: e.Status.JSON_PARSE_ERROR,
                              exception_if_thrown: n.t1,
                              data_config: this.data_config_
                            })
                          );
                        case 19:
                          return (
                            (this.data_config_ = new m(this.raw_response_)),
                            n.abrupt("return", {
                              status: e.Status.SUCCESS,
                              data_config: this.data_config_
                            })
                          );
                        case 21:
                        case "end":
                          return n.stop();
                      }
                  },
                  null,
                  this,
                  [
                    [1, 7],
                    [10, 16]
                  ]
                );
              }
            }
          ]),
          e
        );
      })();
    v.Status = {
      UNSPECIFIED: "unspecified",
      SUCCESS: "success",
      NETWORK_ERROR: "network_error",
      JSON_PARSE_ERROR: "json_parse_error",
      DATA_PARSE_ERROR: "parse_error"
    };
    var g = v,
      y = a.a.createContext(),
      b = n(9),
      w = n.n(b),
      k = "data-sources-pane",
      x = function() {
        var e = Object(r.useContext)(y),
          t = s()(e, 2),
          n = t[0],
          i = t[1];
        function o(e) {
          var t = e.target.dataset.mode || n.mode || "";
          i({ selected_config: e.target.dataset.name, mode: t, data: n.data });
        }
        return a.a.createElement(
          "div",
          { id: k, className: w.a.pane },
          a.a.createElement(
            "ul",
            null,
            n.data.getNames().map(function(e) {
              return a.a.createElement(
                "li",
                {
                  onClick: o,
                  "data-mode": "table",
                  "data-name": e,
                  className:
                    w.a.sourcedetailslink +
                    " " +
                    (n.selected_config == e ? w.a.selected : ""),
                  key: e
                },
                e,
                a.a.createElement(
                  "div",
                  { className: w.a.sourcedetailssubitem },
                  a.a.createElement(
                    "span",
                    {
                      onClick: o,
                      className: "table" == n.mode ? w.a.selectedsubitem : "",
                      "data-mode": "table",
                      "data-name": e
                    },
                    "Table"
                  )
                ),
                a.a.createElement(
                  "div",
                  { className: w.a.sourcedetailssubitem },
                  a.a.createElement(
                    "span",
                    {
                      onClick: o,
                      className: "summary" == n.mode ? w.a.selectedsubitem : "",
                      "data-mode": "summary",
                      "data-name": e
                    },
                    "Summary"
                  )
                )
              );
            })
          )
        );
      };
    var _ = (function() {
        function e(t, n) {
          d()(this, e),
            (this.config_ = n),
            (this.papa_parse_results_ = t),
            (this.headers_ = "data" in t ? t.data.shift() : []),
            (this.data_ =
              "data" in t
                ? (function(e, t) {
                    for (var n = [], r = 0; r < e.length; r++) {
                      var a = e[r];
                      a.length == t && n.push(a);
                    }
                    return n;
                  })(t.data, this.headers_.length)
                : []),
            (this.sortIndexMap_ = new Map());
        }
        return (
          h()(e, [
            {
              key: "isEmpty",
              value: function() {
                return this.data_.length < 1;
              }
            },
            {
              key: "getEstimatedSize",
              value: function() {
                var e = Number(this.config_.row_count);
                return isNaN(e) ? 0 : e;
              }
            },
            {
              key: "getRawUrl",
              value: function() {
                return this.config_.url;
              }
            },
            {
              key: "getRowForSortedByHeader",
              value: function(e, t, n) {
                var r = this,
                  a = n > 0 ? this.getSize() - 1 - e : e;
                if (this.sortIndexMap_.has(t))
                  return this.sortIndexMap_.get(t)[a];
                var i = this.getColumnIndexFromHeaderName(t),
                  o = (function(e) {
                    for (
                      var t = new Array(e).fill(!0), n = 0;
                      n < t.length;
                      n++
                    )
                      t[n] = n;
                    return t;
                  })(this.getSize()).sort(function(e, t) {
                    var n = r.getCell(i, e),
                      a = r.getCell(i, t);
                    return "number" == n.type || "date" == n.type
                      ? n.content - a.content
                      : n.content < a.content
                      ? -1
                      : n.content > a.content
                      ? 1
                      : 0;
                  });
                return this.sortIndexMap_.set(t, o), o[a];
              }
            },
            {
              key: "getColumnIndexFromHeaderName",
              value: function(e) {
                for (var t = 0; t < this.getNumberOfColumns(); t++)
                  if (e == this.getHeaders()[t]) return t;
                return -1;
              }
            },
            {
              key: "getHeaders",
              value: function() {
                return this.headers_;
              }
            },
            {
              key: "getHeaderAt",
              value: function(e) {
                return this.getHeaders()[e];
              }
            },
            {
              key: "getColumn",
              value: function(e) {
                for (
                  var t = this.getColumnIndexFromHeaderName(e), n = [], r = 0;
                  r < this.getSize();
                  r++
                )
                  n.push(this.getCell(t, r));
                return n.map(function(e) {
                  return e.content;
                });
              }
            },
            {
              key: "getSummaryStats",
              value: function(e) {
                for (
                  var t = this.getColumn(e),
                    n = Number.MAX_VALUE,
                    r = Number.MIN_VALUE,
                    a = 0,
                    i = 0,
                    o = 0;
                  o < t.length;
                  o++
                ) {
                  var l = t[o];
                  (n = Math.min(n, l)),
                    (r = Math.max(r, l)),
                    (a += l),
                    ("" != l && null != l) || (i += 1);
                }
                var u = a / t.length;
                var c,
                  s = t.map(function(e) {
                    var t = e - u;
                    return t * t;
                  }),
                  f =
                    (c = s).reduce(function(e, t) {
                      return e + t;
                    }, 0) / c.length,
                  d = Math.sqrt(f);
                return { min: n, max: r, mean: u, null_count: i, std_dev: d };
              }
            },
            {
              key: "getCell",
              value: function(e, t) {
                var n = this.data_[Number(t)][e],
                  r = n;
                if (null == r) return "";
                var a = "string";
                return (
                  isNaN(r)
                    ? isNaN(Date.parse(r)) ||
                      ((a = "date"), (r = Date.parse(r)))
                    : ((a = "number"), (r = Number(r))),
                  { content: r, raw_content: n, type: a }
                );
              }
            },
            {
              key: "getNumberOfColumns",
              value: function() {
                return this.getHeaders().length;
              }
            },
            {
              key: "getSize",
              value: function() {
                return this.data_.length;
              }
            }
          ]),
          e
        );
      })(),
      E = n(36),
      T = n.n(E),
      S = new WeakMap(),
      C = (function() {
        function e(t) {
          d()(this, e), (this.source_details_config_ = t);
        }
        return (
          h()(e, [
            {
              key: "load",
              value: function() {
                var t, n;
                return u.a.async(
                  function(r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            null,
                            (t = function(e) {
                              return u.a.async(function(t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return t.abrupt(
                                        "return",
                                        new Promise(function(t) {
                                          S.has(O(e))
                                            ? t(S.get(O(e)))
                                            : T.a.parse(e, {
                                                download: !0,
                                                delimiter: ",",
                                                keepEmptyRows: !1,
                                                complete: function(e) {
                                                  t(e);
                                                }
                                              });
                                        })
                                      );
                                    case 1:
                                    case "end":
                                      return t.stop();
                                  }
                              });
                            }),
                            (r.next = 4),
                            u.a.awrap(t(this.source_details_config_.url))
                          );
                        case 4:
                          return (
                            (n = r.sent),
                            r.abrupt("return", {
                              status: e.Status.SUCCESS,
                              details: new _(n, this.source_details_config_)
                            })
                          );
                        case 6:
                        case "end":
                          return r.stop();
                      }
                  },
                  null,
                  this
                );
              }
            }
          ]),
          e
        );
      })();
    function O(e) {
      return e
        .split("")
        .reduce(function(e, t) {
          return ((e << 5) - e + t.charCodeAt(0)) | 0;
        }, 0)
        .toString();
    }
    C.Status = {
      UNSPECIFIED: "unspecified",
      SUCCESS: "success",
      NETWORK_ERROR: "network_error",
      JSON_PARSE_ERROR: "json_parse_error",
      DATA_PARSE_ERROR: "parse_error"
    };
    var M = C;
    function P() {
      return (P =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function N(e, t) {
      (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = t);
    }
    function R(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function D(e, t) {
      if (e.length !== t.length) return !1;
      for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
      return !0;
    }
    var L = function(e, t) {
      var n;
      void 0 === t && (t = D);
      var r,
        a = [],
        i = !1;
      return function() {
        for (var o = [], l = 0; l < arguments.length; l++) o[l] = arguments[l];
        return i && n === this && t(o, a)
          ? r
          : ((r = e.apply(this, o)), (i = !0), (n = this), (a = o), r);
      };
    };
    var I =
      "object" == typeof performance && "function" == typeof performance.now
        ? function() {
            return performance.now();
          }
        : function() {
            return Date.now();
          };
    function j(e) {
      cancelAnimationFrame(e.id);
    }
    function A(e, t) {
      var n = I();
      var r = {
        id: requestAnimationFrame(function a() {
          I() - n >= t ? e.call(null) : (r.id = requestAnimationFrame(a));
        })
      };
      return r;
    }
    var F = -1;
    var z = null;
    function U(e) {
      if ((void 0 === e && (e = !1), null === z || e)) {
        var t = document.createElement("div"),
          n = t.style;
        (n.width = "50px"),
          (n.height = "50px"),
          (n.overflow = "scroll"),
          (n.direction = "rtl");
        var r = document.createElement("div"),
          a = r.style;
        return (
          (a.width = "100px"),
          (a.height = "100px"),
          t.appendChild(r),
          document.body.appendChild(t),
          t.scrollLeft > 0
            ? (z = "positive-descending")
            : ((t.scrollLeft = 1),
              (z = 0 === t.scrollLeft ? "negative" : "positive-ascending")),
          document.body.removeChild(t),
          z
        );
      }
      return z;
    }
    var W = 150,
      H = function(e) {
        var t = e.columnIndex;
        e.data;
        return e.rowIndex + ":" + t;
      };
    function q(e) {
      var t,
        n,
        a = e.getColumnOffset,
        i = e.getColumnStartIndexForOffset,
        o = e.getColumnStopIndexForStartIndex,
        l = e.getColumnWidth,
        u = e.getEstimatedTotalHeight,
        c = e.getEstimatedTotalWidth,
        s = e.getOffsetForColumnAndAlignment,
        f = e.getOffsetForRowAndAlignment,
        d = e.getRowHeight,
        p = e.getRowOffset,
        h = e.getRowStartIndexForOffset,
        m = e.getRowStopIndexForStartIndex,
        v = e.initInstanceProps,
        g = e.shouldResetStyleCacheOnItemSizeChange,
        y = e.validateProps;
      return (
        (n = t = (function(e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this)._instanceProps = v(
                n.props,
                R(R(n))
              )),
              (n._resetIsScrollingTimeoutId = null),
              (n._outerRef = void 0),
              (n.state = {
                instance: R(R(n)),
                isScrolling: !1,
                horizontalScrollDirection: "forward",
                scrollLeft:
                  "number" == typeof n.props.initialScrollLeft
                    ? n.props.initialScrollLeft
                    : 0,
                scrollTop:
                  "number" == typeof n.props.initialScrollTop
                    ? n.props.initialScrollTop
                    : 0,
                scrollUpdateWasRequested: !1,
                verticalScrollDirection: "forward"
              }),
              (n._callOnItemsRendered = void 0),
              (n._callOnItemsRendered = L(function(e, t, r, a, i, o, l, u) {
                return n.props.onItemsRendered({
                  overscanColumnStartIndex: e,
                  overscanColumnStopIndex: t,
                  overscanRowStartIndex: r,
                  overscanRowStopIndex: a,
                  visibleColumnStartIndex: i,
                  visibleColumnStopIndex: o,
                  visibleRowStartIndex: l,
                  visibleRowStopIndex: u
                });
              })),
              (n._callOnScroll = void 0),
              (n._callOnScroll = L(function(e, t, r, a, i) {
                return n.props.onScroll({
                  horizontalScrollDirection: r,
                  scrollLeft: e,
                  scrollTop: t,
                  verticalScrollDirection: a,
                  scrollUpdateWasRequested: i
                });
              })),
              (n._getItemStyle = void 0),
              (n._getItemStyle = function(e, t) {
                var r,
                  i,
                  o = n.props,
                  u = o.columnWidth,
                  c = o.direction,
                  s = o.rowHeight,
                  f = n._getItemStyleCache(g && u, g && c, g && s),
                  h = e + ":" + t;
                f.hasOwnProperty(h)
                  ? (r = f[h])
                  : (f[h] =
                      (((i = { position: "absolute" })[
                        "rtl" === c ? "right" : "left"
                      ] = a(n.props, t, n._instanceProps)),
                      (i.top = p(n.props, e, n._instanceProps)),
                      (i.height = d(n.props, e, n._instanceProps)),
                      (i.width = l(n.props, t, n._instanceProps)),
                      (r = i)));
                return r;
              }),
              (n._getItemStyleCache = void 0),
              (n._getItemStyleCache = L(function(e, t, n) {
                return {};
              })),
              (n._onScroll = function(e) {
                var t = e.currentTarget,
                  r = t.clientHeight,
                  a = t.clientWidth,
                  i = t.scrollLeft,
                  o = t.scrollTop,
                  l = t.scrollHeight,
                  u = t.scrollWidth;
                n.setState(function(e) {
                  if (e.scrollLeft === i && e.scrollTop === o) return null;
                  var t = n.props.direction,
                    c = i;
                  if ("rtl" === t)
                    switch (U()) {
                      case "negative":
                        c = -i;
                        break;
                      case "positive-descending":
                        c = u - a - i;
                    }
                  c = Math.max(0, Math.min(c, u - a));
                  var s = Math.max(0, Math.min(o, l - r));
                  return {
                    isScrolling: !0,
                    horizontalScrollDirection:
                      e.scrollLeft < i ? "forward" : "backward",
                    scrollLeft: c,
                    scrollTop: s,
                    verticalScrollDirection:
                      e.scrollTop < o ? "forward" : "backward",
                    scrollUpdateWasRequested: !1
                  };
                }, n._resetIsScrollingDebounced);
              }),
              (n._outerRefSetter = function(e) {
                var t = n.props.outerRef;
                (n._outerRef = e),
                  "function" == typeof t
                    ? t(e)
                    : null != t &&
                      "object" == typeof t &&
                      t.hasOwnProperty("current") &&
                      (t.current = e);
              }),
              (n._resetIsScrollingDebounced = function() {
                null !== n._resetIsScrollingTimeoutId &&
                  j(n._resetIsScrollingTimeoutId),
                  (n._resetIsScrollingTimeoutId = A(n._resetIsScrolling, W));
              }),
              (n._resetIsScrolling = function() {
                (n._resetIsScrollingTimeoutId = null),
                  n.setState({ isScrolling: !1 }, function() {
                    n._getItemStyleCache(-1);
                  });
              }),
              n
            );
          }
          N(t, e),
            (t.getDerivedStateFromProps = function(e, t) {
              return V(e, t), y(e), null;
            });
          var n = t.prototype;
          return (
            (n.scrollTo = function(e) {
              var t = e.scrollLeft,
                n = e.scrollTop;
              void 0 !== t && (t = Math.max(0, t)),
                void 0 !== n && (n = Math.max(0, n)),
                this.setState(function(e) {
                  return (
                    void 0 === t && (t = e.scrollLeft),
                    void 0 === n && (n = e.scrollTop),
                    e.scrollLeft === t && e.scrollTop === n
                      ? null
                      : {
                          horizontalScrollDirection:
                            e.scrollLeft < t ? "forward" : "backward",
                          scrollLeft: t,
                          scrollTop: n,
                          scrollUpdateWasRequested: !0,
                          verticalScrollDirection:
                            e.scrollTop < n ? "forward" : "backward"
                        }
                  );
                }, this._resetIsScrollingDebounced);
            }),
            (n.scrollToItem = function(e) {
              var t = e.align,
                n = void 0 === t ? "auto" : t,
                r = e.columnIndex,
                a = e.rowIndex,
                i = this.props,
                o = i.columnCount,
                l = i.height,
                d = i.rowCount,
                p = i.width,
                h = this.state,
                m = h.scrollLeft,
                v = h.scrollTop,
                g = (function(e) {
                  if ((void 0 === e && (e = !1), -1 === F || e)) {
                    var t = document.createElement("div"),
                      n = t.style;
                    (n.width = "50px"),
                      (n.height = "50px"),
                      (n.overflow = "scroll"),
                      document.body.appendChild(t),
                      (F = t.offsetWidth - t.clientWidth),
                      document.body.removeChild(t);
                  }
                  return F;
                })();
              void 0 !== r && (r = Math.max(0, Math.min(r, o - 1))),
                void 0 !== a && (a = Math.max(0, Math.min(a, d - 1)));
              var y = u(this.props, this._instanceProps),
                b = c(this.props, this._instanceProps) > p ? g : 0,
                w = y > l ? g : 0;
              this.scrollTo({
                scrollLeft:
                  void 0 !== r
                    ? s(this.props, r, n, m, this._instanceProps, w)
                    : m,
                scrollTop:
                  void 0 !== a
                    ? f(this.props, a, n, v, this._instanceProps, b)
                    : v
              });
            }),
            (n.componentDidMount = function() {
              var e = this.props,
                t = e.initialScrollLeft,
                n = e.initialScrollTop;
              if (null != this._outerRef) {
                var r = this._outerRef;
                "number" == typeof t && (r.scrollLeft = t),
                  "number" == typeof n && (r.scrollTop = n);
              }
              this._callPropsCallbacks();
            }),
            (n.componentDidUpdate = function() {
              var e = this.props.direction,
                t = this.state,
                n = t.scrollLeft,
                r = t.scrollTop;
              if (t.scrollUpdateWasRequested && null != this._outerRef) {
                var a = this._outerRef;
                if ("rtl" === e)
                  switch (U()) {
                    case "negative":
                      a.scrollLeft = -n;
                      break;
                    case "positive-ascending":
                      a.scrollLeft = n;
                      break;
                    default:
                      var i = a.clientWidth,
                        o = a.scrollWidth;
                      a.scrollLeft = o - i - n;
                  }
                else a.scrollLeft = Math.max(0, n);
                a.scrollTop = Math.max(0, r);
              }
              this._callPropsCallbacks();
            }),
            (n.componentWillUnmount = function() {
              null !== this._resetIsScrollingTimeoutId &&
                j(this._resetIsScrollingTimeoutId);
            }),
            (n.render = function() {
              var e = this.props,
                t = e.children,
                n = e.className,
                a = e.columnCount,
                i = e.direction,
                o = e.height,
                l = e.innerRef,
                s = e.innerElementType,
                f = e.innerTagName,
                d = e.itemData,
                p = e.itemKey,
                h = void 0 === p ? H : p,
                m = e.outerElementType,
                v = e.outerTagName,
                g = e.rowCount,
                y = e.style,
                b = e.useIsScrolling,
                w = e.width,
                k = this.state.isScrolling,
                x = this._getHorizontalRangeToRender(),
                _ = x[0],
                E = x[1],
                T = this._getVerticalRangeToRender(),
                S = T[0],
                C = T[1],
                O = [];
              if (a > 0 && g)
                for (var M = S; M <= C; M++)
                  for (var N = _; N <= E; N++)
                    O.push(
                      Object(r.createElement)(t, {
                        columnIndex: N,
                        data: d,
                        isScrolling: b ? k : void 0,
                        key: h({ columnIndex: N, data: d, rowIndex: M }),
                        rowIndex: M,
                        style: this._getItemStyle(M, N)
                      })
                    );
              var R = u(this.props, this._instanceProps),
                D = c(this.props, this._instanceProps);
              return Object(r.createElement)(
                m || v || "div",
                {
                  className: n,
                  onScroll: this._onScroll,
                  ref: this._outerRefSetter,
                  style: P(
                    {
                      position: "relative",
                      height: o,
                      width: w,
                      overflow: "auto",
                      WebkitOverflowScrolling: "touch",
                      willChange: "transform",
                      direction: i
                    },
                    y
                  )
                },
                Object(r.createElement)(s || f || "div", {
                  children: O,
                  ref: l,
                  style: {
                    height: R,
                    pointerEvents: k ? "none" : void 0,
                    width: D
                  }
                })
              );
            }),
            (n._callPropsCallbacks = function() {
              var e = this.props,
                t = e.columnCount,
                n = e.onItemsRendered,
                r = e.onScroll,
                a = e.rowCount;
              if ("function" == typeof n && t > 0 && a > 0) {
                var i = this._getHorizontalRangeToRender(),
                  o = i[0],
                  l = i[1],
                  u = i[2],
                  c = i[3],
                  s = this._getVerticalRangeToRender(),
                  f = s[0],
                  d = s[1],
                  p = s[2],
                  h = s[3];
                this._callOnItemsRendered(o, l, f, d, u, c, p, h);
              }
              if ("function" == typeof r) {
                var m = this.state,
                  v = m.horizontalScrollDirection,
                  g = m.scrollLeft,
                  y = m.scrollTop,
                  b = m.scrollUpdateWasRequested,
                  w = m.verticalScrollDirection;
                this._callOnScroll(g, y, v, w, b);
              }
            }),
            (n._getHorizontalRangeToRender = function() {
              var e = this.props,
                t = e.columnCount,
                n = e.overscanColumnCount,
                r = e.overscanColumnsCount,
                a = e.overscanCount,
                l = e.rowCount,
                u = this.state,
                c = u.horizontalScrollDirection,
                s = u.isScrolling,
                f = u.scrollLeft,
                d = n || r || a || 1;
              if (0 === t || 0 === l) return [0, 0, 0, 0];
              var p = i(this.props, f, this._instanceProps),
                h = o(this.props, p, f, this._instanceProps),
                m = s && "backward" !== c ? 1 : Math.max(1, d),
                v = s && "forward" !== c ? 1 : Math.max(1, d);
              return [
                Math.max(0, p - m),
                Math.max(0, Math.min(t - 1, h + v)),
                p,
                h
              ];
            }),
            (n._getVerticalRangeToRender = function() {
              var e = this.props,
                t = e.columnCount,
                n = e.overscanCount,
                r = e.overscanRowCount,
                a = e.overscanRowsCount,
                i = e.rowCount,
                o = this.state,
                l = o.isScrolling,
                u = o.verticalScrollDirection,
                c = o.scrollTop,
                s = r || a || n || 1;
              if (0 === t || 0 === i) return [0, 0, 0, 0];
              var f = h(this.props, c, this._instanceProps),
                d = m(this.props, f, c, this._instanceProps),
                p = l && "backward" !== u ? 1 : Math.max(1, s),
                v = l && "forward" !== u ? 1 : Math.max(1, s);
              return [
                Math.max(0, f - p),
                Math.max(0, Math.min(i - 1, d + v)),
                f,
                d
              ];
            }),
            t
          );
        })(r.PureComponent)),
        (t.defaultProps = {
          direction: "ltr",
          itemData: void 0,
          useIsScrolling: !1
        }),
        n
      );
    }
    var V = function(e, t) {
        e.children,
          e.direction,
          e.height,
          e.innerTagName,
          e.outerTagName,
          e.overscanColumnsCount,
          e.overscanCount,
          e.overscanRowsCount,
          e.width,
          t.instance;
      },
      B = function(e, t) {
        var n = e.rowCount,
          r = t.rowMetadataMap,
          a = t.estimatedRowHeight,
          i = t.lastMeasuredRowIndex,
          o = 0;
        if ((i >= n && (i = n - 1), i >= 0)) {
          var l = r[i];
          o = l.offset + l.size;
        }
        return o + (n - i - 1) * a;
      },
      $ = function(e, t) {
        var n = e.columnCount,
          r = t.columnMetadataMap,
          a = t.estimatedColumnWidth,
          i = t.lastMeasuredColumnIndex,
          o = 0;
        if ((i >= n && (i = n - 1), i >= 0)) {
          var l = r[i];
          o = l.offset + l.size;
        }
        return o + (n - i - 1) * a;
      },
      Q = function(e, t, n, r) {
        var a, i, o;
        if (
          ("column" === e
            ? ((a = r.columnMetadataMap),
              (i = t.columnWidth),
              (o = r.lastMeasuredColumnIndex))
            : ((a = r.rowMetadataMap),
              (i = t.rowHeight),
              (o = r.lastMeasuredRowIndex)),
          n > o)
        ) {
          var l = 0;
          if (o >= 0) {
            var u = a[o];
            l = u.offset + u.size;
          }
          for (var c = o + 1; c <= n; c++) {
            var s = i(c);
            (a[c] = { offset: l, size: s }), (l += s);
          }
          "column" === e
            ? (r.lastMeasuredColumnIndex = n)
            : (r.lastMeasuredRowIndex = n);
        }
        return a[n];
      },
      K = function(e, t, n, r) {
        var a, i;
        return (
          "column" === e
            ? ((a = n.columnMetadataMap), (i = n.lastMeasuredColumnIndex))
            : ((a = n.rowMetadataMap), (i = n.lastMeasuredRowIndex)),
          (i > 0 ? a[i].offset : 0) >= r
            ? Y(e, t, n, i, 0, r)
            : X(e, t, n, Math.max(0, i), r)
        );
      },
      Y = function(e, t, n, r, a, i) {
        for (; a <= r; ) {
          var o = a + Math.floor((r - a) / 2),
            l = Q(e, t, o, n).offset;
          if (l === i) return o;
          l < i ? (a = o + 1) : l > i && (r = o - 1);
        }
        return a > 0 ? a - 1 : 0;
      },
      X = function(e, t, n, r, a) {
        for (
          var i = "column" === e ? t.columnCount : t.rowCount, o = 1;
          r < i && Q(e, t, r, n).offset < a;

        )
          (r += o), (o *= 2);
        return Y(e, t, n, Math.min(r, i - 1), Math.floor(r / 2), a);
      },
      Z = function(e, t, n, r, a, i, o) {
        var l = "column" === e ? t.width : t.height,
          u = Q(e, t, n, i),
          c = "column" === e ? $(t, i) : B(t, i),
          s = Math.max(0, Math.min(c - l, u.offset)),
          f = Math.max(0, u.offset - l + o + u.size);
        switch (
          ("smart" === r && (r = a >= f - l && a <= s + l ? "auto" : "center"),
          r)
        ) {
          case "start":
            return s;
          case "end":
            return f;
          case "center":
            return Math.round(f + (s - f) / 2);
          case "auto":
          default:
            return a >= f && a <= s ? a : f > s ? f : a < f ? f : s;
        }
      },
      G = q({
        getColumnOffset: function(e, t, n) {
          return Q("column", e, t, n).offset;
        },
        getColumnStartIndexForOffset: function(e, t, n) {
          return K("column", e, n, t);
        },
        getColumnStopIndexForStartIndex: function(e, t, n, r) {
          for (
            var a = e.columnCount,
              i = e.width,
              o = Q("column", e, t, r),
              l = n + i,
              u = o.offset + o.size,
              c = t;
            c < a - 1 && u < l;

          )
            c++, (u += Q("column", e, c, r).size);
          return c;
        },
        getColumnWidth: function(e, t, n) {
          return n.columnMetadataMap[t].size;
        },
        getEstimatedTotalHeight: B,
        getEstimatedTotalWidth: $,
        getOffsetForColumnAndAlignment: function(e, t, n, r, a, i) {
          return Z("column", e, t, n, r, a, i);
        },
        getOffsetForRowAndAlignment: function(e, t, n, r, a, i) {
          return Z("row", e, t, n, r, a, i);
        },
        getRowOffset: function(e, t, n) {
          return Q("row", e, t, n).offset;
        },
        getRowHeight: function(e, t, n) {
          return n.rowMetadataMap[t].size;
        },
        getRowStartIndexForOffset: function(e, t, n) {
          return K("row", e, n, t);
        },
        getRowStopIndexForStartIndex: function(e, t, n, r) {
          for (
            var a = e.rowCount,
              i = e.height,
              o = Q("row", e, t, r),
              l = n + i,
              u = o.offset + o.size,
              c = t;
            c < a - 1 && u < l;

          )
            c++, (u += Q("row", e, c, r).size);
          return c;
        },
        initInstanceProps: function(e, t) {
          var n = e,
            r = {
              columnMetadataMap: {},
              estimatedColumnWidth: n.estimatedColumnWidth || 50,
              estimatedRowHeight: n.estimatedRowHeight || 50,
              lastMeasuredColumnIndex: -1,
              lastMeasuredRowIndex: -1,
              rowMetadataMap: {}
            };
          return (
            (t.resetAfterColumnIndex = function(e, n) {
              void 0 === n && (n = !0),
                t.resetAfterIndices({ columnIndex: e, shouldForceUpdate: n });
            }),
            (t.resetAfterRowIndex = function(e, n) {
              void 0 === n && (n = !0),
                t.resetAfterIndices({ rowIndex: e, shouldForceUpdate: n });
            }),
            (t.resetAfterIndices = function(e) {
              var n = e.columnIndex,
                a = e.rowIndex,
                i = e.shouldForceUpdate,
                o = void 0 === i || i;
              "number" == typeof n &&
                (r.lastMeasuredColumnIndex = Math.min(
                  r.lastMeasuredColumnIndex,
                  n - 1
                )),
                "number" == typeof a &&
                  (r.lastMeasuredRowIndex = Math.min(
                    r.lastMeasuredRowIndex,
                    a - 1
                  )),
                t._getItemStyleCache(-1),
                o && t.forceUpdate();
            }),
            r
          );
        },
        shouldResetStyleCacheOnItemSizeChange: !1,
        validateProps: function(e) {
          e.columnWidth, e.rowHeight;
        }
      });
    var J = n(6),
      ee = n.n(J);
    var te = 150;
    var ne = function(e) {
        var t = Object(r.useState)({
            width: window.innerWidth,
            height: window.innerHeight
          }),
          n = s()(t, 2),
          i = n[0],
          o = n[1],
          l = Object(r.useState)({ sort_header_name: null, direction: 1 }),
          u = s()(l, 2),
          c = u[0],
          f = u[1];
        Object(r.useEffect)(function() {
          window.addEventListener(
            "resize",
            (function(e) {
              var t,
                n = arguments,
                r = this;
              return function() {
                var a = r,
                  i = n;
                t && window.cancelAnimationFrame(t),
                  (t = window.requestAnimationFrame(function() {
                    e.apply(a, i);
                  }));
              };
            })(function() {
              o({ width: window.innerWidth, height: window.innerHeight });
            })
          );
        });
        var d, p, h;
        return a.a.createElement(
          "div",
          null,
          a.a.createElement(
            G,
            {
              className: ee.a.table,
              columnCount: e.source_details.getNumberOfColumns(),
              columnWidth: function(e) {
                return te;
              },
              initialScrollLeft: 0,
              initialScrollTop: 0,
              height: ((h = i.height), h - 145),
              rowCount: e.source_details.getSize() + 1,
              rowHeight: function() {
                return 30;
              },
              width:
                ((d = i.width),
                (p = e.source_details.getNumberOfColumns()),
                Math.min(
                  d - document.getElementById(k).offsetWidth - 60,
                  te * p
                ) + 19)
            },
            function(t) {
              var n = t.columnIndex,
                r = t.rowIndex,
                i = t.style,
                o = 0 == n ? ee.a.firstcell : "",
                l =
                  n == e.source_details.getNumberOfColumns() - 1
                    ? ee.a.lastcell
                    : "";
              if (0 == r)
                return (function(t, n, r, i) {
                  var o = e.source_details.getHeaderAt(n);
                  var l = void 0;
                  return (
                    c.sort_header_name == o && 1 == c.direction
                      ? (l = a.a.createElement("span", null, "+"))
                      : c.sort_header_name == o &&
                        -1 == c.direction &&
                        (l = a.a.createElement("span", null, "-")),
                    a.a.createElement(
                      "div",
                      {
                        onClick: function(e) {
                          f({
                            sort_header_name: o,
                            direction: -1 * c.direction
                          });
                        },
                        title: o,
                        style: t,
                        className:
                          ee.a.cell + " " + ee.a.headercell + " " + i + " " + r
                      },
                      a.a.createElement("span", null, o),
                      l
                    )
                  );
                })(i, n, o, l);
              (r -= 1),
                null != c.sort_header_name &&
                  (r = e.source_details.getRowForSortedByHeader(
                    r,
                    c.sort_header_name,
                    c.direction
                  ));
              var u = e.source_details.getCell(n, r),
                s = "number" == u.type ? ee.a.right : ee.a.left;
              return a.a.createElement(
                "div",
                {
                  title: u.raw_content,
                  style: i,
                  className: ee.a.cell + " " + l + " " + o + " " + s
                },
                a.a.createElement("span", null, u.content)
              );
            }
          )
        );
      },
      re = function(e) {
        return a.a.createElement("img", {
          width: "20px",
          height: "20px",
          src: "download_icon.png"
        });
      },
      ae = n(37),
      ie = n.n(ae),
      oe = n(38),
      le = n.n(oe),
      ue = n(0),
      ce = n.n(ue),
      se = n(39),
      fe = n.n(se),
      de = n(40);
    function pe() {
      return (pe =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function he(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    var me = n(2),
      ve = n.n(me),
      ge =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      ye = function(e, t) {
        var n = {};
        for (var r in e)
          t.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
        return n;
      };
    function be(e) {
      var t = e.top,
        n = void 0 === t ? 0 : t,
        r = e.left,
        i = void 0 === r ? 0 : r,
        o = e.transform,
        l = e.className,
        u = e.children,
        c = ye(e, ["top", "left", "transform", "className", "children"]);
      return a.a.createElement(
        "g",
        ge(
          {
            className: ve()("vx-group", l),
            transform: o || "translate(" + i + ", " + n + ")"
          },
          c
        ),
        u
      );
    }
    var we = function(e, t) {
        return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
      },
      ke = function(e) {
        var t;
        return (
          1 === e.length &&
            ((t = e),
            (e = function(e, n) {
              return we(t(e), n);
            })),
          {
            left: function(t, n, r, a) {
              for (null == r && (r = 0), null == a && (a = t.length); r < a; ) {
                var i = (r + a) >>> 1;
                e(t[i], n) < 0 ? (r = i + 1) : (a = i);
              }
              return r;
            },
            right: function(t, n, r, a) {
              for (null == r && (r = 0), null == a && (a = t.length); r < a; ) {
                var i = (r + a) >>> 1;
                e(t[i], n) > 0 ? (a = i) : (r = i + 1);
              }
              return r;
            }
          }
        );
      };
    var xe = ke(we),
      _e = xe.right,
      Ee = (xe.left, _e);
    var Te = function(e, t) {
        var n,
          r,
          a,
          i = e.length,
          o = -1;
        if (null == t) {
          for (; ++o < i; )
            if (null != (n = e[o]) && n >= n)
              for (r = a = n; ++o < i; )
                null != (n = e[o]) && (r > n && (r = n), a < n && (a = n));
        } else
          for (; ++o < i; )
            if (null != (n = t(e[o], o, e)) && n >= n)
              for (r = a = n; ++o < i; )
                null != (n = t(e[o], o, e)) &&
                  (r > n && (r = n), a < n && (a = n));
        return [r, a];
      },
      Se = Array.prototype,
      Ce = Se.slice,
      Oe =
        (Se.map,
        function(e) {
          return function() {
            return e;
          };
        }),
      Me = function(e) {
        return e;
      },
      Pe = function(e, t, n) {
        (e = +e),
          (t = +t),
          (n =
            (a = arguments.length) < 2
              ? ((t = e), (e = 0), 1)
              : a < 3
              ? 1
              : +n);
        for (
          var r = -1,
            a = 0 | Math.max(0, Math.ceil((t - e) / n)),
            i = new Array(a);
          ++r < a;

        )
          i[r] = e + r * n;
        return i;
      },
      Ne = Math.sqrt(50),
      Re = Math.sqrt(10),
      De = Math.sqrt(2),
      Le = function(e, t, n) {
        var r,
          a,
          i,
          o,
          l = -1;
        if (((n = +n), (e = +e) === (t = +t) && n > 0)) return [e];
        if (
          ((r = t < e) && ((a = e), (e = t), (t = a)),
          0 === (o = Ie(e, t, n)) || !isFinite(o))
        )
          return [];
        if (o > 0)
          for (
            e = Math.ceil(e / o),
              t = Math.floor(t / o),
              i = new Array((a = Math.ceil(t - e + 1)));
            ++l < a;

          )
            i[l] = (e + l) * o;
        else
          for (
            e = Math.floor(e * o),
              t = Math.ceil(t * o),
              i = new Array((a = Math.ceil(e - t + 1)));
            ++l < a;

          )
            i[l] = (e - l) / o;
        return r && i.reverse(), i;
      };
    function Ie(e, t, n) {
      var r = (t - e) / Math.max(0, n),
        a = Math.floor(Math.log(r) / Math.LN10),
        i = r / Math.pow(10, a);
      return a >= 0
        ? (i >= Ne ? 10 : i >= Re ? 5 : i >= De ? 2 : 1) * Math.pow(10, a)
        : -Math.pow(10, -a) / (i >= Ne ? 10 : i >= Re ? 5 : i >= De ? 2 : 1);
    }
    function je(e, t, n) {
      var r = Math.abs(t - e) / Math.max(0, n),
        a = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
        i = r / a;
      return (
        i >= Ne ? (a *= 10) : i >= Re ? (a *= 5) : i >= De && (a *= 2),
        t < e ? -a : a
      );
    }
    var Ae = function(e) {
        return Math.ceil(Math.log(e.length) / Math.LN2) + 1;
      },
      Fe = function() {
        var e = Me,
          t = Te,
          n = Ae;
        function r(r) {
          var a,
            i,
            o = r.length,
            l = new Array(o);
          for (a = 0; a < o; ++a) l[a] = e(r[a], a, r);
          var u = t(l),
            c = u[0],
            s = u[1],
            f = n(l, c, s);
          Array.isArray(f) ||
            ((f = je(c, s, f)), (f = Pe(Math.ceil(c / f) * f, s, f)));
          for (var d = f.length; f[0] <= c; ) f.shift(), --d;
          for (; f[d - 1] > s; ) f.pop(), --d;
          var p,
            h = new Array(d + 1);
          for (a = 0; a <= d; ++a)
            ((p = h[a] = []).x0 = a > 0 ? f[a - 1] : c),
              (p.x1 = a < d ? f[a] : s);
          for (a = 0; a < o; ++a)
            c <= (i = l[a]) && i <= s && h[Ee(f, i, 0, d)].push(r[a]);
          return h;
        }
        return (
          (r.value = function(t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : Oe(t)), r)
              : e;
          }),
          (r.domain = function(e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : Oe([e[0], e[1]])), r)
              : t;
          }),
          (r.thresholds = function(e) {
            return arguments.length
              ? ((n =
                  "function" == typeof e
                    ? e
                    : Array.isArray(e)
                    ? Oe(Ce.call(e))
                    : Oe(e)),
                r)
              : n;
          }),
          r
        );
      },
      ze = function(e, t) {
        var n,
          r,
          a = e.length,
          i = -1;
        if (null == t) {
          for (; ++i < a; )
            if (null != (n = e[i]) && n >= n)
              for (r = n; ++i < a; ) null != (n = e[i]) && n > r && (r = n);
        } else
          for (; ++i < a; )
            if (null != (n = t(e[i], i, e)) && n >= n)
              for (r = n; ++i < a; )
                null != (n = t(e[i], i, e)) && n > r && (r = n);
        return r;
      };
    function Ue() {}
    function We(e, t) {
      var n = new Ue();
      if (e instanceof Ue)
        e.each(function(e, t) {
          n.set(t, e);
        });
      else if (Array.isArray(e)) {
        var r,
          a = -1,
          i = e.length;
        if (null == t) for (; ++a < i; ) n.set(a, e[a]);
        else for (; ++a < i; ) n.set(t((r = e[a]), a, e), r);
      } else if (e) for (var o in e) n.set(o, e[o]);
      return n;
    }
    Ue.prototype = We.prototype = {
      constructor: Ue,
      has: function(e) {
        return "$" + e in this;
      },
      get: function(e) {
        return this["$" + e];
      },
      set: function(e, t) {
        return (this["$" + e] = t), this;
      },
      remove: function(e) {
        var t = "$" + e;
        return t in this && delete this[t];
      },
      clear: function() {
        for (var e in this) "$" === e[0] && delete this[e];
      },
      keys: function() {
        var e = [];
        for (var t in this) "$" === t[0] && e.push(t.slice(1));
        return e;
      },
      values: function() {
        var e = [];
        for (var t in this) "$" === t[0] && e.push(this[t]);
        return e;
      },
      entries: function() {
        var e = [];
        for (var t in this)
          "$" === t[0] && e.push({ key: t.slice(1), value: this[t] });
        return e;
      },
      size: function() {
        var e = 0;
        for (var t in this) "$" === t[0] && ++e;
        return e;
      },
      empty: function() {
        for (var e in this) if ("$" === e[0]) return !1;
        return !0;
      },
      each: function(e) {
        for (var t in this) "$" === t[0] && e(this[t], t.slice(1), this);
      }
    };
    var He = We;
    function qe() {}
    var Ve = He.prototype;
    function Be(e, t) {
      var n = new qe();
      if (e instanceof qe)
        e.each(function(e) {
          n.add(e);
        });
      else if (e) {
        var r = -1,
          a = e.length;
        if (null == t) for (; ++r < a; ) n.add(e[r]);
        else for (; ++r < a; ) n.add(t(e[r], r, e));
      }
      return n;
    }
    qe.prototype = Be.prototype = {
      constructor: qe,
      has: Ve.has,
      add: function(e) {
        return (this["$" + (e += "")] = e), this;
      },
      remove: Ve.remove,
      clear: Ve.clear,
      values: Ve.keys,
      size: Ve.size,
      empty: Ve.empty,
      each: Ve.each
    };
    var $e = Array.prototype,
      Qe = $e.map,
      Ke = $e.slice,
      Ye = { name: "implicit" };
    function Xe(e) {
      var t = He(),
        n = [],
        r = Ye;
      function a(a) {
        var i = a + "",
          o = t.get(i);
        if (!o) {
          if (r !== Ye) return r;
          t.set(i, (o = n.push(a)));
        }
        return e[(o - 1) % e.length];
      }
      return (
        (e = null == e ? [] : Ke.call(e)),
        (a.domain = function(e) {
          if (!arguments.length) return n.slice();
          (n = []), (t = He());
          for (var r, i, o = -1, l = e.length; ++o < l; )
            t.has((i = (r = e[o]) + "")) || t.set(i, n.push(r));
          return a;
        }),
        (a.range = function(t) {
          return arguments.length ? ((e = Ke.call(t)), a) : e.slice();
        }),
        (a.unknown = function(e) {
          return arguments.length ? ((r = e), a) : r;
        }),
        (a.copy = function() {
          return Xe()
            .domain(n)
            .range(e)
            .unknown(r);
        }),
        a
      );
    }
    function Ze() {
      var e,
        t,
        n = Xe().unknown(void 0),
        r = n.domain,
        a = n.range,
        i = [0, 1],
        o = !1,
        l = 0,
        u = 0,
        c = 0.5;
      function s() {
        var n = r().length,
          s = i[1] < i[0],
          f = i[s - 0],
          d = i[1 - s];
        (e = (d - f) / Math.max(1, n - l + 2 * u)),
          o && (e = Math.floor(e)),
          (f += (d - f - e * (n - l)) * c),
          (t = e * (1 - l)),
          o && ((f = Math.round(f)), (t = Math.round(t)));
        var p = Pe(n).map(function(t) {
          return f + e * t;
        });
        return a(s ? p.reverse() : p);
      }
      return (
        delete n.unknown,
        (n.domain = function(e) {
          return arguments.length ? (r(e), s()) : r();
        }),
        (n.range = function(e) {
          return arguments.length ? ((i = [+e[0], +e[1]]), s()) : i.slice();
        }),
        (n.rangeRound = function(e) {
          return (i = [+e[0], +e[1]]), (o = !0), s();
        }),
        (n.bandwidth = function() {
          return t;
        }),
        (n.step = function() {
          return e;
        }),
        (n.round = function(e) {
          return arguments.length ? ((o = !!e), s()) : o;
        }),
        (n.padding = function(e) {
          return arguments.length
            ? ((l = u = Math.max(0, Math.min(1, e))), s())
            : l;
        }),
        (n.paddingInner = function(e) {
          return arguments.length
            ? ((l = Math.max(0, Math.min(1, e))), s())
            : l;
        }),
        (n.paddingOuter = function(e) {
          return arguments.length
            ? ((u = Math.max(0, Math.min(1, e))), s())
            : u;
        }),
        (n.align = function(e) {
          return arguments.length
            ? ((c = Math.max(0, Math.min(1, e))), s())
            : c;
        }),
        (n.copy = function() {
          return Ze()
            .domain(r())
            .range(i)
            .round(o)
            .paddingInner(l)
            .paddingOuter(u)
            .align(c);
        }),
        s()
      );
    }
    var Ge = function(e, t) {
        return (
          (e = +e),
          (t = +t),
          function(n) {
            return e * (1 - n) + t * n;
          }
        );
      },
      Je = function(e, t, n) {
        (e.prototype = t.prototype = n), (n.constructor = e);
      };
    function et(e, t) {
      var n = Object.create(e.prototype);
      for (var r in t) n[r] = t[r];
      return n;
    }
    function tt() {}
    var nt = "\\s*([+-]?\\d+)\\s*",
      rt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      at = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      it = /^#([0-9a-f]{3,8})$/,
      ot = new RegExp("^rgb\\(" + [nt, nt, nt] + "\\)$"),
      lt = new RegExp("^rgb\\(" + [at, at, at] + "\\)$"),
      ut = new RegExp("^rgba\\(" + [nt, nt, nt, rt] + "\\)$"),
      ct = new RegExp("^rgba\\(" + [at, at, at, rt] + "\\)$"),
      st = new RegExp("^hsl\\(" + [rt, at, at] + "\\)$"),
      ft = new RegExp("^hsla\\(" + [rt, at, at, rt] + "\\)$"),
      dt = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
      };
    function pt() {
      return this.rgb().formatHex();
    }
    function ht() {
      return this.rgb().formatRgb();
    }
    function mt(e) {
      var t, n;
      return (
        (e = (e + "").trim().toLowerCase()),
        (t = it.exec(e))
          ? ((n = t[1].length),
            (t = parseInt(t[1], 16)),
            6 === n
              ? vt(t)
              : 3 === n
              ? new wt(
                  ((t >> 8) & 15) | ((t >> 4) & 240),
                  ((t >> 4) & 15) | (240 & t),
                  ((15 & t) << 4) | (15 & t),
                  1
                )
              : 8 === n
              ? new wt(
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  (255 & t) / 255
                )
              : 4 === n
              ? new wt(
                  ((t >> 12) & 15) | ((t >> 8) & 240),
                  ((t >> 8) & 15) | ((t >> 4) & 240),
                  ((t >> 4) & 15) | (240 & t),
                  (((15 & t) << 4) | (15 & t)) / 255
                )
              : null)
          : (t = ot.exec(e))
          ? new wt(t[1], t[2], t[3], 1)
          : (t = lt.exec(e))
          ? new wt(
              (255 * t[1]) / 100,
              (255 * t[2]) / 100,
              (255 * t[3]) / 100,
              1
            )
          : (t = ut.exec(e))
          ? gt(t[1], t[2], t[3], t[4])
          : (t = ct.exec(e))
          ? gt((255 * t[1]) / 100, (255 * t[2]) / 100, (255 * t[3]) / 100, t[4])
          : (t = st.exec(e))
          ? Et(t[1], t[2] / 100, t[3] / 100, 1)
          : (t = ft.exec(e))
          ? Et(t[1], t[2] / 100, t[3] / 100, t[4])
          : dt.hasOwnProperty(e)
          ? vt(dt[e])
          : "transparent" === e
          ? new wt(NaN, NaN, NaN, 0)
          : null
      );
    }
    function vt(e) {
      return new wt((e >> 16) & 255, (e >> 8) & 255, 255 & e, 1);
    }
    function gt(e, t, n, r) {
      return r <= 0 && (e = t = n = NaN), new wt(e, t, n, r);
    }
    function yt(e) {
      return (
        e instanceof tt || (e = mt(e)),
        e ? new wt((e = e.rgb()).r, e.g, e.b, e.opacity) : new wt()
      );
    }
    function bt(e, t, n, r) {
      return 1 === arguments.length
        ? yt(e)
        : new wt(e, t, n, null == r ? 1 : r);
    }
    function wt(e, t, n, r) {
      (this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r);
    }
    function kt() {
      return "#" + _t(this.r) + _t(this.g) + _t(this.b);
    }
    function xt() {
      var e = this.opacity;
      return (
        (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e)))
          ? "rgb("
          : "rgba(") +
        Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
        ", " +
        Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
        ", " +
        Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
        (1 === e ? ")" : ", " + e + ")")
      );
    }
    function _t(e) {
      return (
        ((e = Math.max(0, Math.min(255, Math.round(e) || 0))) < 16 ? "0" : "") +
        e.toString(16)
      );
    }
    function Et(e, t, n, r) {
      return (
        r <= 0
          ? (e = t = n = NaN)
          : n <= 0 || n >= 1
          ? (e = t = NaN)
          : t <= 0 && (e = NaN),
        new St(e, t, n, r)
      );
    }
    function Tt(e) {
      if (e instanceof St) return new St(e.h, e.s, e.l, e.opacity);
      if ((e instanceof tt || (e = mt(e)), !e)) return new St();
      if (e instanceof St) return e;
      var t = (e = e.rgb()).r / 255,
        n = e.g / 255,
        r = e.b / 255,
        a = Math.min(t, n, r),
        i = Math.max(t, n, r),
        o = NaN,
        l = i - a,
        u = (i + a) / 2;
      return (
        l
          ? ((o =
              t === i
                ? (n - r) / l + 6 * (n < r)
                : n === i
                ? (r - t) / l + 2
                : (t - n) / l + 4),
            (l /= u < 0.5 ? i + a : 2 - i - a),
            (o *= 60))
          : (l = u > 0 && u < 1 ? 0 : o),
        new St(o, l, u, e.opacity)
      );
    }
    function St(e, t, n, r) {
      (this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r);
    }
    function Ct(e, t, n) {
      return (
        255 *
        (e < 60
          ? t + ((n - t) * e) / 60
          : e < 180
          ? n
          : e < 240
          ? t + ((n - t) * (240 - e)) / 60
          : t)
      );
    }
    function Ot(e, t, n, r, a) {
      var i = e * e,
        o = i * e;
      return (
        ((1 - 3 * e + 3 * i - o) * t +
          (4 - 6 * i + 3 * o) * n +
          (1 + 3 * e + 3 * i - 3 * o) * r +
          o * a) /
        6
      );
    }
    Je(tt, mt, {
      copy: function(e) {
        return Object.assign(new this.constructor(), this, e);
      },
      displayable: function() {
        return this.rgb().displayable();
      },
      hex: pt,
      formatHex: pt,
      formatHsl: function() {
        return Tt(this).formatHsl();
      },
      formatRgb: ht,
      toString: ht
    }),
      Je(
        wt,
        bt,
        et(tt, {
          brighter: function(e) {
            return (
              (e = null == e ? 1 / 0.7 : Math.pow(1 / 0.7, e)),
              new wt(this.r * e, this.g * e, this.b * e, this.opacity)
            );
          },
          darker: function(e) {
            return (
              (e = null == e ? 0.7 : Math.pow(0.7, e)),
              new wt(this.r * e, this.g * e, this.b * e, this.opacity)
            );
          },
          rgb: function() {
            return this;
          },
          displayable: function() {
            return (
              -0.5 <= this.r &&
              this.r < 255.5 &&
              -0.5 <= this.g &&
              this.g < 255.5 &&
              -0.5 <= this.b &&
              this.b < 255.5 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          hex: kt,
          formatHex: kt,
          formatRgb: xt,
          toString: xt
        })
      ),
      Je(
        St,
        function(e, t, n, r) {
          return 1 === arguments.length
            ? Tt(e)
            : new St(e, t, n, null == r ? 1 : r);
        },
        et(tt, {
          brighter: function(e) {
            return (
              (e = null == e ? 1 / 0.7 : Math.pow(1 / 0.7, e)),
              new St(this.h, this.s, this.l * e, this.opacity)
            );
          },
          darker: function(e) {
            return (
              (e = null == e ? 0.7 : Math.pow(0.7, e)),
              new St(this.h, this.s, this.l * e, this.opacity)
            );
          },
          rgb: function() {
            var e = (this.h % 360) + 360 * (this.h < 0),
              t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
              n = this.l,
              r = n + (n < 0.5 ? n : 1 - n) * t,
              a = 2 * n - r;
            return new wt(
              Ct(e >= 240 ? e - 240 : e + 120, a, r),
              Ct(e, a, r),
              Ct(e < 120 ? e + 240 : e - 120, a, r),
              this.opacity
            );
          },
          displayable: function() {
            return (
              ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
              0 <= this.l &&
              this.l <= 1 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          formatHsl: function() {
            var e = this.opacity;
            return (
              (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e)))
                ? "hsl("
                : "hsla(") +
              (this.h || 0) +
              ", " +
              100 * (this.s || 0) +
              "%, " +
              100 * (this.l || 0) +
              "%" +
              (1 === e ? ")" : ", " + e + ")")
            );
          }
        })
      );
    var Mt = function(e) {
      return function() {
        return e;
      };
    };
    function Pt(e, t) {
      return function(n) {
        return e + n * t;
      };
    }
    function Nt(e) {
      return 1 == (e = +e)
        ? Rt
        : function(t, n) {
            return n - t
              ? (function(e, t, n) {
                  return (
                    (e = Math.pow(e, n)),
                    (t = Math.pow(t, n) - e),
                    (n = 1 / n),
                    function(r) {
                      return Math.pow(e + r * t, n);
                    }
                  );
                })(t, n, e)
              : Mt(isNaN(t) ? n : t);
          };
    }
    function Rt(e, t) {
      var n = t - e;
      return n ? Pt(e, n) : Mt(isNaN(e) ? t : e);
    }
    var Dt = (function e(t) {
      var n = Nt(t);
      function r(e, t) {
        var r = n((e = bt(e)).r, (t = bt(t)).r),
          a = n(e.g, t.g),
          i = n(e.b, t.b),
          o = Rt(e.opacity, t.opacity);
        return function(t) {
          return (
            (e.r = r(t)), (e.g = a(t)), (e.b = i(t)), (e.opacity = o(t)), e + ""
          );
        };
      }
      return (r.gamma = e), r;
    })(1);
    function Lt(e) {
      return function(t) {
        var n,
          r,
          a = t.length,
          i = new Array(a),
          o = new Array(a),
          l = new Array(a);
        for (n = 0; n < a; ++n)
          (r = bt(t[n])),
            (i[n] = r.r || 0),
            (o[n] = r.g || 0),
            (l[n] = r.b || 0);
        return (
          (i = e(i)),
          (o = e(o)),
          (l = e(l)),
          (r.opacity = 1),
          function(e) {
            return (r.r = i(e)), (r.g = o(e)), (r.b = l(e)), r + "";
          }
        );
      };
    }
    Lt(function(e) {
      var t = e.length - 1;
      return function(n) {
        var r =
            n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), t - 1) : Math.floor(n * t),
          a = e[r],
          i = e[r + 1],
          o = r > 0 ? e[r - 1] : 2 * a - i,
          l = r < t - 1 ? e[r + 2] : 2 * i - a;
        return Ot((n - r / t) * t, o, a, i, l);
      };
    }),
      Lt(function(e) {
        var t = e.length;
        return function(n) {
          var r = Math.floor(((n %= 1) < 0 ? ++n : n) * t),
            a = e[(r + t - 1) % t],
            i = e[r % t],
            o = e[(r + 1) % t],
            l = e[(r + 2) % t];
          return Ot((n - r / t) * t, a, i, o, l);
        };
      });
    var It = function(e, t) {
      t || (t = []);
      var n,
        r = e ? Math.min(t.length, e.length) : 0,
        a = t.slice();
      return function(i) {
        for (n = 0; n < r; ++n) a[n] = e[n] * (1 - i) + t[n] * i;
        return a;
      };
    };
    function jt(e) {
      return ArrayBuffer.isView(e) && !(e instanceof DataView);
    }
    function At(e, t) {
      var n,
        r = t ? t.length : 0,
        a = e ? Math.min(r, e.length) : 0,
        i = new Array(a),
        o = new Array(r);
      for (n = 0; n < a; ++n) i[n] = qt(e[n], t[n]);
      for (; n < r; ++n) o[n] = t[n];
      return function(e) {
        for (n = 0; n < a; ++n) o[n] = i[n](e);
        return o;
      };
    }
    var Ft = function(e, t) {
        var n = new Date();
        return (
          (e = +e),
          (t = +t),
          function(r) {
            return n.setTime(e * (1 - r) + t * r), n;
          }
        );
      },
      zt = function(e, t) {
        var n,
          r = {},
          a = {};
        for (n in ((null !== e && "object" == typeof e) || (e = {}),
        (null !== t && "object" == typeof t) || (t = {}),
        t))
          n in e ? (r[n] = qt(e[n], t[n])) : (a[n] = t[n]);
        return function(e) {
          for (n in r) a[n] = r[n](e);
          return a;
        };
      },
      Ut = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      Wt = new RegExp(Ut.source, "g");
    var Ht = function(e, t) {
        var n,
          r,
          a,
          i = (Ut.lastIndex = Wt.lastIndex = 0),
          o = -1,
          l = [],
          u = [];
        for (e += "", t += ""; (n = Ut.exec(e)) && (r = Wt.exec(t)); )
          (a = r.index) > i &&
            ((a = t.slice(i, a)), l[o] ? (l[o] += a) : (l[++o] = a)),
            (n = n[0]) === (r = r[0])
              ? l[o]
                ? (l[o] += r)
                : (l[++o] = r)
              : ((l[++o] = null), u.push({ i: o, x: Ge(n, r) })),
            (i = Wt.lastIndex);
        return (
          i < t.length && ((a = t.slice(i)), l[o] ? (l[o] += a) : (l[++o] = a)),
          l.length < 2
            ? u[0]
              ? (function(e) {
                  return function(t) {
                    return e(t) + "";
                  };
                })(u[0].x)
              : (function(e) {
                  return function() {
                    return e;
                  };
                })(t)
            : ((t = u.length),
              function(e) {
                for (var n, r = 0; r < t; ++r) l[(n = u[r]).i] = n.x(e);
                return l.join("");
              })
        );
      },
      qt = function(e, t) {
        var n,
          r = typeof t;
        return null == t || "boolean" === r
          ? Mt(t)
          : ("number" === r
              ? Ge
              : "string" === r
              ? (n = mt(t))
                ? ((t = n), Dt)
                : Ht
              : t instanceof mt
              ? Dt
              : t instanceof Date
              ? Ft
              : jt(t)
              ? It
              : Array.isArray(t)
              ? At
              : ("function" != typeof t.valueOf &&
                  "function" != typeof t.toString) ||
                isNaN(t)
              ? zt
              : Ge)(e, t);
      },
      Vt = function(e, t) {
        return (
          (e = +e),
          (t = +t),
          function(n) {
            return Math.round(e * (1 - n) + t * n);
          }
        );
      },
      Bt = function(e) {
        return function() {
          return e;
        };
      },
      $t = function(e) {
        return +e;
      },
      Qt = [0, 1];
    function Kt(e, t) {
      return (t -= e = +e)
        ? function(n) {
            return (n - e) / t;
          }
        : Bt(t);
    }
    function Yt(e, t, n, r) {
      var a = e[0],
        i = e[1],
        o = t[0],
        l = t[1];
      return (
        i < a ? ((a = n(i, a)), (o = r(l, o))) : ((a = n(a, i)), (o = r(o, l))),
        function(e) {
          return o(a(e));
        }
      );
    }
    function Xt(e, t, n, r) {
      var a = Math.min(e.length, t.length) - 1,
        i = new Array(a),
        o = new Array(a),
        l = -1;
      for (
        e[a] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
        ++l < a;

      )
        (i[l] = n(e[l], e[l + 1])), (o[l] = r(t[l], t[l + 1]));
      return function(t) {
        var n = Ee(e, t, 1, a) - 1;
        return o[n](i[n](t));
      };
    }
    function Zt(e, t) {
      return t
        .domain(e.domain())
        .range(e.range())
        .interpolate(e.interpolate())
        .clamp(e.clamp());
    }
    function Gt(e, t) {
      var n,
        r,
        a,
        i = Qt,
        o = Qt,
        l = qt,
        u = !1;
      function c() {
        return (
          (n = Math.min(i.length, o.length) > 2 ? Xt : Yt), (r = a = null), s
        );
      }
      function s(t) {
        return (
          r ||
          (r = n(
            i,
            o,
            u
              ? (function(e) {
                  return function(t, n) {
                    var r = e((t = +t), (n = +n));
                    return function(e) {
                      return e <= t ? 0 : e >= n ? 1 : r(e);
                    };
                  };
                })(e)
              : e,
            l
          ))
        )(+t);
      }
      return (
        (s.invert = function(e) {
          return (
            a ||
            (a = n(
              o,
              i,
              Kt,
              u
                ? (function(e) {
                    return function(t, n) {
                      var r = e((t = +t), (n = +n));
                      return function(e) {
                        return e <= 0 ? t : e >= 1 ? n : r(e);
                      };
                    };
                  })(t)
                : t
            ))
          )(+e);
        }),
        (s.domain = function(e) {
          return arguments.length ? ((i = Qe.call(e, $t)), c()) : i.slice();
        }),
        (s.range = function(e) {
          return arguments.length ? ((o = Ke.call(e)), c()) : o.slice();
        }),
        (s.rangeRound = function(e) {
          return (o = Ke.call(e)), (l = Vt), c();
        }),
        (s.clamp = function(e) {
          return arguments.length ? ((u = !!e), c()) : u;
        }),
        (s.interpolate = function(e) {
          return arguments.length ? ((l = e), c()) : l;
        }),
        c()
      );
    }
    var Jt = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    function en(e) {
      if (!(t = Jt.exec(e))) throw new Error("invalid format: " + e);
      var t;
      return new tn({
        fill: t[1],
        align: t[2],
        sign: t[3],
        symbol: t[4],
        zero: t[5],
        width: t[6],
        comma: t[7],
        precision: t[8] && t[8].slice(1),
        trim: t[9],
        type: t[10]
      });
    }
    function tn(e) {
      (this.fill = void 0 === e.fill ? " " : e.fill + ""),
        (this.align = void 0 === e.align ? ">" : e.align + ""),
        (this.sign = void 0 === e.sign ? "-" : e.sign + ""),
        (this.symbol = void 0 === e.symbol ? "" : e.symbol + ""),
        (this.zero = !!e.zero),
        (this.width = void 0 === e.width ? void 0 : +e.width),
        (this.comma = !!e.comma),
        (this.precision = void 0 === e.precision ? void 0 : +e.precision),
        (this.trim = !!e.trim),
        (this.type = void 0 === e.type ? "" : e.type + "");
    }
    (en.prototype = tn.prototype),
      (tn.prototype.toString = function() {
        return (
          this.fill +
          this.align +
          this.sign +
          this.symbol +
          (this.zero ? "0" : "") +
          (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
          (this.comma ? "," : "") +
          (void 0 === this.precision
            ? ""
            : "." + Math.max(0, 0 | this.precision)) +
          (this.trim ? "~" : "") +
          this.type
        );
      });
    var nn,
      rn,
      an,
      on,
      ln = function(e, t) {
        if (
          (n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf(
            "e"
          )) < 0
        )
          return null;
        var n,
          r = e.slice(0, n);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
      },
      un = function(e) {
        return (e = ln(Math.abs(e))) ? e[1] : NaN;
      },
      cn = function(e) {
        e: for (var t, n = e.length, r = 1, a = -1; r < n; ++r)
          switch (e[r]) {
            case ".":
              a = t = r;
              break;
            case "0":
              0 === a && (a = r), (t = r);
              break;
            default:
              if (a > 0) {
                if (!+e[r]) break e;
                a = 0;
              }
          }
        return a > 0 ? e.slice(0, a) + e.slice(t + 1) : e;
      },
      sn = function(e, t) {
        var n = ln(e, t);
        if (!n) return e + "";
        var r = n[0],
          a = n[1];
        return a < 0
          ? "0." + new Array(-a).join("0") + r
          : r.length > a + 1
          ? r.slice(0, a + 1) + "." + r.slice(a + 1)
          : r + new Array(a - r.length + 2).join("0");
      },
      fn = {
        "%": function(e, t) {
          return (100 * e).toFixed(t);
        },
        b: function(e) {
          return Math.round(e).toString(2);
        },
        c: function(e) {
          return e + "";
        },
        d: function(e) {
          return Math.round(e).toString(10);
        },
        e: function(e, t) {
          return e.toExponential(t);
        },
        f: function(e, t) {
          return e.toFixed(t);
        },
        g: function(e, t) {
          return e.toPrecision(t);
        },
        o: function(e) {
          return Math.round(e).toString(8);
        },
        p: function(e, t) {
          return sn(100 * e, t);
        },
        r: sn,
        s: function(e, t) {
          var n = ln(e, t);
          if (!n) return e + "";
          var r = n[0],
            a = n[1],
            i = a - (nn = 3 * Math.max(-8, Math.min(8, Math.floor(a / 3)))) + 1,
            o = r.length;
          return i === o
            ? r
            : i > o
            ? r + new Array(i - o + 1).join("0")
            : i > 0
            ? r.slice(0, i) + "." + r.slice(i)
            : "0." +
              new Array(1 - i).join("0") +
              ln(e, Math.max(0, t + i - 1))[0];
        },
        X: function(e) {
          return Math.round(e)
            .toString(16)
            .toUpperCase();
        },
        x: function(e) {
          return Math.round(e).toString(16);
        }
      },
      dn = function(e) {
        return e;
      },
      pn = Array.prototype.map,
      hn = [
        "y",
        "z",
        "a",
        "f",
        "p",
        "n",
        "µ",
        "m",
        "",
        "k",
        "M",
        "G",
        "T",
        "P",
        "E",
        "Z",
        "Y"
      ];
    (rn = (function(e) {
      var t,
        n,
        r =
          void 0 === e.grouping || void 0 === e.thousands
            ? dn
            : ((t = pn.call(e.grouping, Number)),
              (n = e.thousands + ""),
              function(e, r) {
                for (
                  var a = e.length, i = [], o = 0, l = t[0], u = 0;
                  a > 0 &&
                  l > 0 &&
                  (u + l + 1 > r && (l = Math.max(1, r - u)),
                  i.push(e.substring((a -= l), a + l)),
                  !((u += l + 1) > r));

                )
                  l = t[(o = (o + 1) % t.length)];
                return i.reverse().join(n);
              }),
        a = void 0 === e.currency ? "" : e.currency[0] + "",
        i = void 0 === e.currency ? "" : e.currency[1] + "",
        o = void 0 === e.decimal ? "." : e.decimal + "",
        l =
          void 0 === e.numerals
            ? dn
            : (function(e) {
                return function(t) {
                  return t.replace(/[0-9]/g, function(t) {
                    return e[+t];
                  });
                };
              })(pn.call(e.numerals, String)),
        u = void 0 === e.percent ? "%" : e.percent + "",
        c = void 0 === e.minus ? "-" : e.minus + "",
        s = void 0 === e.nan ? "NaN" : e.nan + "";
      function f(e) {
        var t = (e = en(e)).fill,
          n = e.align,
          f = e.sign,
          d = e.symbol,
          p = e.zero,
          h = e.width,
          m = e.comma,
          v = e.precision,
          g = e.trim,
          y = e.type;
        "n" === y
          ? ((m = !0), (y = "g"))
          : fn[y] || (void 0 === v && (v = 12), (g = !0), (y = "g")),
          (p || ("0" === t && "=" === n)) && ((p = !0), (t = "0"), (n = "="));
        var b =
            "$" === d
              ? a
              : "#" === d && /[boxX]/.test(y)
              ? "0" + y.toLowerCase()
              : "",
          w = "$" === d ? i : /[%p]/.test(y) ? u : "",
          k = fn[y],
          x = /[defgprs%]/.test(y);
        function _(e) {
          var a,
            i,
            u,
            d = b,
            _ = w;
          if ("c" === y) (_ = k(e) + _), (e = "");
          else {
            var E = (e = +e) < 0;
            if (
              ((e = isNaN(e) ? s : k(Math.abs(e), v)),
              g && (e = cn(e)),
              E && 0 == +e && (E = !1),
              (d =
                (E ? ("(" === f ? f : c) : "-" === f || "(" === f ? "" : f) +
                d),
              (_ =
                ("s" === y ? hn[8 + nn / 3] : "") +
                _ +
                (E && "(" === f ? ")" : "")),
              x)
            )
              for (a = -1, i = e.length; ++a < i; )
                if (48 > (u = e.charCodeAt(a)) || u > 57) {
                  (_ = (46 === u ? o + e.slice(a + 1) : e.slice(a)) + _),
                    (e = e.slice(0, a));
                  break;
                }
          }
          m && !p && (e = r(e, 1 / 0));
          var T = d.length + e.length + _.length,
            S = T < h ? new Array(h - T + 1).join(t) : "";
          switch (
            (m &&
              p &&
              ((e = r(S + e, S.length ? h - _.length : 1 / 0)), (S = "")),
            n)
          ) {
            case "<":
              e = d + e + _ + S;
              break;
            case "=":
              e = d + S + e + _;
              break;
            case "^":
              e = S.slice(0, (T = S.length >> 1)) + d + e + _ + S.slice(T);
              break;
            default:
              e = S + d + e + _;
          }
          return l(e);
        }
        return (
          (v =
            void 0 === v
              ? 6
              : /[gprs]/.test(y)
              ? Math.max(1, Math.min(21, v))
              : Math.max(0, Math.min(20, v))),
          (_.toString = function() {
            return e + "";
          }),
          _
        );
      }
      return {
        format: f,
        formatPrefix: function(e, t) {
          var n = f((((e = en(e)).type = "f"), e)),
            r = 3 * Math.max(-8, Math.min(8, Math.floor(un(t) / 3))),
            a = Math.pow(10, -r),
            i = hn[8 + r / 3];
          return function(e) {
            return n(a * e) + i;
          };
        }
      };
    })({
      decimal: ".",
      thousands: ",",
      grouping: [3],
      currency: ["$", ""],
      minus: "-"
    })),
      (an = rn.format),
      (on = rn.formatPrefix);
    var mn = function(e, t, n) {
      var r,
        a = e[0],
        i = e[e.length - 1],
        o = je(a, i, null == t ? 10 : t);
      switch ((n = en(null == n ? ",f" : n)).type) {
        case "s":
          var l = Math.max(Math.abs(a), Math.abs(i));
          return (
            null != n.precision ||
              isNaN(
                (r = (function(e, t) {
                  return Math.max(
                    0,
                    3 * Math.max(-8, Math.min(8, Math.floor(un(t) / 3))) -
                      un(Math.abs(e))
                  );
                })(o, l))
              ) ||
              (n.precision = r),
            on(n, l)
          );
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != n.precision ||
            isNaN(
              (r = (function(e, t) {
                return (
                  (e = Math.abs(e)),
                  (t = Math.abs(t) - e),
                  Math.max(0, un(t) - un(e)) + 1
                );
              })(o, Math.max(Math.abs(a), Math.abs(i))))
            ) ||
            (n.precision = r - ("e" === n.type));
          break;
        case "f":
        case "%":
          null != n.precision ||
            isNaN(
              (r = (function(e) {
                return Math.max(0, -un(Math.abs(e)));
              })(o))
            ) ||
            (n.precision = r - 2 * ("%" === n.type));
      }
      return an(n);
    };
    function vn(e) {
      var t = e.domain;
      return (
        (e.ticks = function(e) {
          var n = t();
          return Le(n[0], n[n.length - 1], null == e ? 10 : e);
        }),
        (e.tickFormat = function(e, n) {
          return mn(t(), e, n);
        }),
        (e.nice = function(n) {
          null == n && (n = 10);
          var r,
            a = t(),
            i = 0,
            o = a.length - 1,
            l = a[i],
            u = a[o];
          return (
            u < l && ((r = l), (l = u), (u = r), (r = i), (i = o), (o = r)),
            (r = Ie(l, u, n)) > 0
              ? (r = Ie(
                  (l = Math.floor(l / r) * r),
                  (u = Math.ceil(u / r) * r),
                  n
                ))
              : r < 0 &&
                (r = Ie(
                  (l = Math.ceil(l * r) / r),
                  (u = Math.floor(u * r) / r),
                  n
                )),
            r > 0
              ? ((a[i] = Math.floor(l / r) * r),
                (a[o] = Math.ceil(u / r) * r),
                t(a))
              : r < 0 &&
                ((a[i] = Math.ceil(l * r) / r),
                (a[o] = Math.floor(u * r) / r),
                t(a)),
            e
          );
        }),
        e
      );
    }
    function gn() {
      var e = Gt(Kt, Ge);
      return (
        (e.copy = function() {
          return Zt(e, gn());
        }),
        vn(e)
      );
    }
    var yn = new Date(),
      bn = new Date();
    function wn(e, t, n, r) {
      function a(t) {
        return e((t = 0 === arguments.length ? new Date() : new Date(+t))), t;
      }
      return (
        (a.floor = function(t) {
          return e((t = new Date(+t))), t;
        }),
        (a.ceil = function(n) {
          return e((n = new Date(n - 1))), t(n, 1), e(n), n;
        }),
        (a.round = function(e) {
          var t = a(e),
            n = a.ceil(e);
          return e - t < n - e ? t : n;
        }),
        (a.offset = function(e, n) {
          return t((e = new Date(+e)), null == n ? 1 : Math.floor(n)), e;
        }),
        (a.range = function(n, r, i) {
          var o,
            l = [];
          if (
            ((n = a.ceil(n)),
            (i = null == i ? 1 : Math.floor(i)),
            !(n < r && i > 0))
          )
            return l;
          do {
            l.push((o = new Date(+n))), t(n, i), e(n);
          } while (o < n && n < r);
          return l;
        }),
        (a.filter = function(n) {
          return wn(
            function(t) {
              if (t >= t) for (; e(t), !n(t); ) t.setTime(t - 1);
            },
            function(e, r) {
              if (e >= e)
                if (r < 0) for (; ++r <= 0; ) for (; t(e, -1), !n(e); );
                else for (; --r >= 0; ) for (; t(e, 1), !n(e); );
            }
          );
        }),
        n &&
          ((a.count = function(t, r) {
            return (
              yn.setTime(+t),
              bn.setTime(+r),
              e(yn),
              e(bn),
              Math.floor(n(yn, bn))
            );
          }),
          (a.every = function(e) {
            return (
              (e = Math.floor(e)),
              isFinite(e) && e > 0
                ? e > 1
                  ? a.filter(
                      r
                        ? function(t) {
                            return r(t) % e == 0;
                          }
                        : function(t) {
                            return a.count(0, t) % e == 0;
                          }
                    )
                  : a
                : null
            );
          })),
        a
      );
    }
    var kn = wn(
      function(e) {
        e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
      },
      function(e, t) {
        e.setFullYear(e.getFullYear() + t);
      },
      function(e, t) {
        return t.getFullYear() - e.getFullYear();
      },
      function(e) {
        return e.getFullYear();
      }
    );
    kn.every = function(e) {
      return isFinite((e = Math.floor(e))) && e > 0
        ? wn(
            function(t) {
              t.setFullYear(Math.floor(t.getFullYear() / e) * e),
                t.setMonth(0, 1),
                t.setHours(0, 0, 0, 0);
            },
            function(t, n) {
              t.setFullYear(t.getFullYear() + n * e);
            }
          )
        : null;
    };
    var xn = kn,
      _n =
        (kn.range,
        wn(
          function(e) {
            e.setDate(1), e.setHours(0, 0, 0, 0);
          },
          function(e, t) {
            e.setMonth(e.getMonth() + t);
          },
          function(e, t) {
            return (
              t.getMonth() -
              e.getMonth() +
              12 * (t.getFullYear() - e.getFullYear())
            );
          },
          function(e) {
            return e.getMonth();
          }
        )),
      En = (_n.range, 6e4),
      Tn = 6048e5;
    function Sn(e) {
      return wn(
        function(t) {
          t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
            t.setHours(0, 0, 0, 0);
        },
        function(e, t) {
          e.setDate(e.getDate() + 7 * t);
        },
        function(e, t) {
          return (
            (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * En) / Tn
          );
        }
      );
    }
    var Cn = Sn(0),
      On = Sn(1),
      Mn = Sn(2),
      Pn = Sn(3),
      Nn = Sn(4),
      Rn = Sn(5),
      Dn = Sn(6),
      Ln =
        (Cn.range,
        On.range,
        Mn.range,
        Pn.range,
        Nn.range,
        Rn.range,
        Dn.range,
        wn(
          function(e) {
            e.setHours(0, 0, 0, 0);
          },
          function(e, t) {
            e.setDate(e.getDate() + t);
          },
          function(e, t) {
            return (
              (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * En) /
              864e5
            );
          },
          function(e) {
            return e.getDate() - 1;
          }
        )),
      In = Ln,
      jn =
        (Ln.range,
        wn(
          function(e) {
            e.setTime(
              e -
                e.getMilliseconds() -
                1e3 * e.getSeconds() -
                e.getMinutes() * En
            );
          },
          function(e, t) {
            e.setTime(+e + 36e5 * t);
          },
          function(e, t) {
            return (t - e) / 36e5;
          },
          function(e) {
            return e.getHours();
          }
        )),
      An =
        (jn.range,
        wn(
          function(e) {
            e.setTime(e - e.getMilliseconds() - 1e3 * e.getSeconds());
          },
          function(e, t) {
            e.setTime(+e + t * En);
          },
          function(e, t) {
            return (t - e) / En;
          },
          function(e) {
            return e.getMinutes();
          }
        )),
      Fn =
        (An.range,
        wn(
          function(e) {
            e.setTime(e - e.getMilliseconds());
          },
          function(e, t) {
            e.setTime(+e + 1e3 * t);
          },
          function(e, t) {
            return (t - e) / 1e3;
          },
          function(e) {
            return e.getUTCSeconds();
          }
        )),
      zn =
        (Fn.range,
        wn(
          function() {},
          function(e, t) {
            e.setTime(+e + t);
          },
          function(e, t) {
            return t - e;
          }
        ));
    zn.every = function(e) {
      return (
        (e = Math.floor(e)),
        isFinite(e) && e > 0
          ? e > 1
            ? wn(
                function(t) {
                  t.setTime(Math.floor(t / e) * e);
                },
                function(t, n) {
                  t.setTime(+t + n * e);
                },
                function(t, n) {
                  return (n - t) / e;
                }
              )
            : zn
          : null
      );
    };
    zn.range;
    function Un(e) {
      return wn(
        function(t) {
          t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
            t.setUTCHours(0, 0, 0, 0);
        },
        function(e, t) {
          e.setUTCDate(e.getUTCDate() + 7 * t);
        },
        function(e, t) {
          return (t - e) / Tn;
        }
      );
    }
    var Wn = Un(0),
      Hn = Un(1),
      qn = Un(2),
      Vn = Un(3),
      Bn = Un(4),
      $n = Un(5),
      Qn = Un(6),
      Kn =
        (Wn.range,
        Hn.range,
        qn.range,
        Vn.range,
        Bn.range,
        $n.range,
        Qn.range,
        wn(
          function(e) {
            e.setUTCHours(0, 0, 0, 0);
          },
          function(e, t) {
            e.setUTCDate(e.getUTCDate() + t);
          },
          function(e, t) {
            return (t - e) / 864e5;
          },
          function(e) {
            return e.getUTCDate() - 1;
          }
        )),
      Yn = Kn,
      Xn =
        (Kn.range,
        wn(
          function(e) {
            e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
          },
          function(e, t) {
            e.setUTCFullYear(e.getUTCFullYear() + t);
          },
          function(e, t) {
            return t.getUTCFullYear() - e.getUTCFullYear();
          },
          function(e) {
            return e.getUTCFullYear();
          }
        ));
    Xn.every = function(e) {
      return isFinite((e = Math.floor(e))) && e > 0
        ? wn(
            function(t) {
              t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
                t.setUTCMonth(0, 1),
                t.setUTCHours(0, 0, 0, 0);
            },
            function(t, n) {
              t.setUTCFullYear(t.getUTCFullYear() + n * e);
            }
          )
        : null;
    };
    var Zn = Xn;
    Xn.range;
    function Gn(e) {
      if (0 <= e.y && e.y < 100) {
        var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
        return t.setFullYear(e.y), t;
      }
      return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
    }
    function Jn(e) {
      if (0 <= e.y && e.y < 100) {
        var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
        return t.setUTCFullYear(e.y), t;
      }
      return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
    }
    function er(e, t, n) {
      return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
    }
    var tr,
      nr = { "-": "", _: " ", 0: "0" },
      rr = /^\s*\d+/,
      ar = /^%/,
      ir = /[\\^$*+?|[\]().{}]/g;
    function or(e, t, n) {
      var r = e < 0 ? "-" : "",
        a = (r ? -e : e) + "",
        i = a.length;
      return r + (i < n ? new Array(n - i + 1).join(t) + a : a);
    }
    function lr(e) {
      return e.replace(ir, "\\$&");
    }
    function ur(e) {
      return new RegExp("^(?:" + e.map(lr).join("|") + ")", "i");
    }
    function cr(e) {
      for (var t = {}, n = -1, r = e.length; ++n < r; )
        t[e[n].toLowerCase()] = n;
      return t;
    }
    function sr(e, t, n) {
      var r = rr.exec(t.slice(n, n + 1));
      return r ? ((e.w = +r[0]), n + r[0].length) : -1;
    }
    function fr(e, t, n) {
      var r = rr.exec(t.slice(n, n + 1));
      return r ? ((e.u = +r[0]), n + r[0].length) : -1;
    }
    function dr(e, t, n) {
      var r = rr.exec(t.slice(n, n + 2));
      return r ? ((e.U = +r[0]), n + r[0].length) : -1;
    }
    function pr(e, t, n) {
      var r = rr.exec(t.slice(n, n + 2));
      return r ? ((e.V = +r[0]), n + r[0].length) : -1;
    }
    function hr(e, t, n) {
      var r = rr.exec(t.slice(n, n + 2));
      return r ? ((e.W = +r[0]), n + r[0].length) : -1;
    }
    function mr(e, t, n) {
      var r = rr.exec(t.slice(n, n + 4));
      return r ? ((e.y = +r[0]), n + r[0].length) : -1;
    }
    function vr(e, t, n) {
      var r = rr.exec(t.slice(n, n + 2));
      return r
        ? ((e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length)
        : -1;
    }
    function gr(e, t, n) {
      var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
      return r
        ? ((e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), n + r[0].length)
        : -1;
    }
    function yr(e, t, n) {
      var r = rr.exec(t.slice(n, n + 1));
      return r ? ((e.q = 3 * r[0] - 3), n + r[0].length) : -1;
    }
    function br(e, t, n) {
      var r = rr.exec(t.slice(n, n + 2));
      return r ? ((e.m = r[0] - 1), n + r[0].length) : -1;
    }
    function wr(e, t, n) {
      var r = rr.exec(t.slice(n, n + 2));
      return r ? ((e.d = +r[0]), n + r[0].length) : -1;
    }
    function kr(e, t, n) {
      var r = rr.exec(t.slice(n, n + 3));
      return r ? ((e.m = 0), (e.d = +r[0]), n + r[0].length) : -1;
    }
    function xr(e, t, n) {
      var r = rr.exec(t.slice(n, n + 2));
      return r ? ((e.H = +r[0]), n + r[0].length) : -1;
    }
    function _r(e, t, n) {
      var r = rr.exec(t.slice(n, n + 2));
      return r ? ((e.M = +r[0]), n + r[0].length) : -1;
    }
    function Er(e, t, n) {
      var r = rr.exec(t.slice(n, n + 2));
      return r ? ((e.S = +r[0]), n + r[0].length) : -1;
    }
    function Tr(e, t, n) {
      var r = rr.exec(t.slice(n, n + 3));
      return r ? ((e.L = +r[0]), n + r[0].length) : -1;
    }
    function Sr(e, t, n) {
      var r = rr.exec(t.slice(n, n + 6));
      return r ? ((e.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
    }
    function Cr(e, t, n) {
      var r = ar.exec(t.slice(n, n + 1));
      return r ? n + r[0].length : -1;
    }
    function Or(e, t, n) {
      var r = rr.exec(t.slice(n));
      return r ? ((e.Q = +r[0]), n + r[0].length) : -1;
    }
    function Mr(e, t, n) {
      var r = rr.exec(t.slice(n));
      return r ? ((e.s = +r[0]), n + r[0].length) : -1;
    }
    function Pr(e, t) {
      return or(e.getDate(), t, 2);
    }
    function Nr(e, t) {
      return or(e.getHours(), t, 2);
    }
    function Rr(e, t) {
      return or(e.getHours() % 12 || 12, t, 2);
    }
    function Dr(e, t) {
      return or(1 + In.count(xn(e), e), t, 3);
    }
    function Lr(e, t) {
      return or(e.getMilliseconds(), t, 3);
    }
    function Ir(e, t) {
      return Lr(e, t) + "000";
    }
    function jr(e, t) {
      return or(e.getMonth() + 1, t, 2);
    }
    function Ar(e, t) {
      return or(e.getMinutes(), t, 2);
    }
    function Fr(e, t) {
      return or(e.getSeconds(), t, 2);
    }
    function zr(e) {
      var t = e.getDay();
      return 0 === t ? 7 : t;
    }
    function Ur(e, t) {
      return or(Cn.count(xn(e) - 1, e), t, 2);
    }
    function Wr(e, t) {
      var n = e.getDay();
      return (
        (e = n >= 4 || 0 === n ? Nn(e) : Nn.ceil(e)),
        or(Nn.count(xn(e), e) + (4 === xn(e).getDay()), t, 2)
      );
    }
    function Hr(e) {
      return e.getDay();
    }
    function qr(e, t) {
      return or(On.count(xn(e) - 1, e), t, 2);
    }
    function Vr(e, t) {
      return or(e.getFullYear() % 100, t, 2);
    }
    function Br(e, t) {
      return or(e.getFullYear() % 1e4, t, 4);
    }
    function $r(e) {
      var t = e.getTimezoneOffset();
      return (
        (t > 0 ? "-" : ((t *= -1), "+")) +
        or((t / 60) | 0, "0", 2) +
        or(t % 60, "0", 2)
      );
    }
    function Qr(e, t) {
      return or(e.getUTCDate(), t, 2);
    }
    function Kr(e, t) {
      return or(e.getUTCHours(), t, 2);
    }
    function Yr(e, t) {
      return or(e.getUTCHours() % 12 || 12, t, 2);
    }
    function Xr(e, t) {
      return or(1 + Yn.count(Zn(e), e), t, 3);
    }
    function Zr(e, t) {
      return or(e.getUTCMilliseconds(), t, 3);
    }
    function Gr(e, t) {
      return Zr(e, t) + "000";
    }
    function Jr(e, t) {
      return or(e.getUTCMonth() + 1, t, 2);
    }
    function ea(e, t) {
      return or(e.getUTCMinutes(), t, 2);
    }
    function ta(e, t) {
      return or(e.getUTCSeconds(), t, 2);
    }
    function na(e) {
      var t = e.getUTCDay();
      return 0 === t ? 7 : t;
    }
    function ra(e, t) {
      return or(Wn.count(Zn(e) - 1, e), t, 2);
    }
    function aa(e, t) {
      var n = e.getUTCDay();
      return (
        (e = n >= 4 || 0 === n ? Bn(e) : Bn.ceil(e)),
        or(Bn.count(Zn(e), e) + (4 === Zn(e).getUTCDay()), t, 2)
      );
    }
    function ia(e) {
      return e.getUTCDay();
    }
    function oa(e, t) {
      return or(Hn.count(Zn(e) - 1, e), t, 2);
    }
    function la(e, t) {
      return or(e.getUTCFullYear() % 100, t, 2);
    }
    function ua(e, t) {
      return or(e.getUTCFullYear() % 1e4, t, 4);
    }
    function ca() {
      return "+0000";
    }
    function sa() {
      return "%";
    }
    function fa(e) {
      return +e;
    }
    function da(e) {
      return Math.floor(+e / 1e3);
    }
    !(function(e) {
      (tr = (function(e) {
        var t = e.dateTime,
          n = e.date,
          r = e.time,
          a = e.periods,
          i = e.days,
          o = e.shortDays,
          l = e.months,
          u = e.shortMonths,
          c = ur(a),
          s = cr(a),
          f = ur(i),
          d = cr(i),
          p = ur(o),
          h = cr(o),
          m = ur(l),
          v = cr(l),
          g = ur(u),
          y = cr(u),
          b = {
            a: function(e) {
              return o[e.getDay()];
            },
            A: function(e) {
              return i[e.getDay()];
            },
            b: function(e) {
              return u[e.getMonth()];
            },
            B: function(e) {
              return l[e.getMonth()];
            },
            c: null,
            d: Pr,
            e: Pr,
            f: Ir,
            H: Nr,
            I: Rr,
            j: Dr,
            L: Lr,
            m: jr,
            M: Ar,
            p: function(e) {
              return a[+(e.getHours() >= 12)];
            },
            q: function(e) {
              return 1 + ~~(e.getMonth() / 3);
            },
            Q: fa,
            s: da,
            S: Fr,
            u: zr,
            U: Ur,
            V: Wr,
            w: Hr,
            W: qr,
            x: null,
            X: null,
            y: Vr,
            Y: Br,
            Z: $r,
            "%": sa
          },
          w = {
            a: function(e) {
              return o[e.getUTCDay()];
            },
            A: function(e) {
              return i[e.getUTCDay()];
            },
            b: function(e) {
              return u[e.getUTCMonth()];
            },
            B: function(e) {
              return l[e.getUTCMonth()];
            },
            c: null,
            d: Qr,
            e: Qr,
            f: Gr,
            H: Kr,
            I: Yr,
            j: Xr,
            L: Zr,
            m: Jr,
            M: ea,
            p: function(e) {
              return a[+(e.getUTCHours() >= 12)];
            },
            q: function(e) {
              return 1 + ~~(e.getUTCMonth() / 3);
            },
            Q: fa,
            s: da,
            S: ta,
            u: na,
            U: ra,
            V: aa,
            w: ia,
            W: oa,
            x: null,
            X: null,
            y: la,
            Y: ua,
            Z: ca,
            "%": sa
          },
          k = {
            a: function(e, t, n) {
              var r = p.exec(t.slice(n));
              return r ? ((e.w = h[r[0].toLowerCase()]), n + r[0].length) : -1;
            },
            A: function(e, t, n) {
              var r = f.exec(t.slice(n));
              return r ? ((e.w = d[r[0].toLowerCase()]), n + r[0].length) : -1;
            },
            b: function(e, t, n) {
              var r = g.exec(t.slice(n));
              return r ? ((e.m = y[r[0].toLowerCase()]), n + r[0].length) : -1;
            },
            B: function(e, t, n) {
              var r = m.exec(t.slice(n));
              return r ? ((e.m = v[r[0].toLowerCase()]), n + r[0].length) : -1;
            },
            c: function(e, n, r) {
              return E(e, t, n, r);
            },
            d: wr,
            e: wr,
            f: Sr,
            H: xr,
            I: xr,
            j: kr,
            L: Tr,
            m: br,
            M: _r,
            p: function(e, t, n) {
              var r = c.exec(t.slice(n));
              return r ? ((e.p = s[r[0].toLowerCase()]), n + r[0].length) : -1;
            },
            q: yr,
            Q: Or,
            s: Mr,
            S: Er,
            u: fr,
            U: dr,
            V: pr,
            w: sr,
            W: hr,
            x: function(e, t, r) {
              return E(e, n, t, r);
            },
            X: function(e, t, n) {
              return E(e, r, t, n);
            },
            y: vr,
            Y: mr,
            Z: gr,
            "%": Cr
          };
        function x(e, t) {
          return function(n) {
            var r,
              a,
              i,
              o = [],
              l = -1,
              u = 0,
              c = e.length;
            for (n instanceof Date || (n = new Date(+n)); ++l < c; )
              37 === e.charCodeAt(l) &&
                (o.push(e.slice(u, l)),
                null != (a = nr[(r = e.charAt(++l))])
                  ? (r = e.charAt(++l))
                  : (a = "e" === r ? " " : "0"),
                (i = t[r]) && (r = i(n, a)),
                o.push(r),
                (u = l + 1));
            return o.push(e.slice(u, l)), o.join("");
          };
        }
        function _(e, t) {
          return function(n) {
            var r,
              a,
              i = er(1900, void 0, 1);
            if (E(i, e, (n += ""), 0) != n.length) return null;
            if ("Q" in i) return new Date(i.Q);
            if ("s" in i) return new Date(1e3 * i.s + ("L" in i ? i.L : 0));
            if (
              (!t || "Z" in i || (i.Z = 0),
              "p" in i && (i.H = (i.H % 12) + 12 * i.p),
              void 0 === i.m && (i.m = "q" in i ? i.q : 0),
              "V" in i)
            ) {
              if (i.V < 1 || i.V > 53) return null;
              "w" in i || (i.w = 1),
                "Z" in i
                  ? ((a = (r = Jn(er(i.y, 0, 1))).getUTCDay()),
                    (r = a > 4 || 0 === a ? Hn.ceil(r) : Hn(r)),
                    (r = Yn.offset(r, 7 * (i.V - 1))),
                    (i.y = r.getUTCFullYear()),
                    (i.m = r.getUTCMonth()),
                    (i.d = r.getUTCDate() + ((i.w + 6) % 7)))
                  : ((a = (r = Gn(er(i.y, 0, 1))).getDay()),
                    (r = a > 4 || 0 === a ? On.ceil(r) : On(r)),
                    (r = In.offset(r, 7 * (i.V - 1))),
                    (i.y = r.getFullYear()),
                    (i.m = r.getMonth()),
                    (i.d = r.getDate() + ((i.w + 6) % 7)));
            } else
              ("W" in i || "U" in i) &&
                ("w" in i || (i.w = "u" in i ? i.u % 7 : "W" in i ? 1 : 0),
                (a =
                  "Z" in i
                    ? Jn(er(i.y, 0, 1)).getUTCDay()
                    : Gn(er(i.y, 0, 1)).getDay()),
                (i.m = 0),
                (i.d =
                  "W" in i
                    ? ((i.w + 6) % 7) + 7 * i.W - ((a + 5) % 7)
                    : i.w + 7 * i.U - ((a + 6) % 7)));
            return "Z" in i
              ? ((i.H += (i.Z / 100) | 0), (i.M += i.Z % 100), Jn(i))
              : Gn(i);
          };
        }
        function E(e, t, n, r) {
          for (var a, i, o = 0, l = t.length, u = n.length; o < l; ) {
            if (r >= u) return -1;
            if (37 === (a = t.charCodeAt(o++))) {
              if (
                ((a = t.charAt(o++)),
                !(i = k[a in nr ? t.charAt(o++) : a]) || (r = i(e, n, r)) < 0)
              )
                return -1;
            } else if (a != n.charCodeAt(r++)) return -1;
          }
          return r;
        }
        return (
          (b.x = x(n, b)),
          (b.X = x(r, b)),
          (b.c = x(t, b)),
          (w.x = x(n, w)),
          (w.X = x(r, w)),
          (w.c = x(t, w)),
          {
            format: function(e) {
              var t = x((e += ""), b);
              return (
                (t.toString = function() {
                  return e;
                }),
                t
              );
            },
            parse: function(e) {
              var t = _((e += ""), !1);
              return (
                (t.toString = function() {
                  return e;
                }),
                t
              );
            },
            utcFormat: function(e) {
              var t = x((e += ""), w);
              return (
                (t.toString = function() {
                  return e;
                }),
                t
              );
            },
            utcParse: function(e) {
              var t = _((e += ""), !0);
              return (
                (t.toString = function() {
                  return e;
                }),
                t
              );
            }
          }
        );
      })(e)),
        tr.format,
        tr.parse,
        tr.utcFormat,
        tr.utcParse;
    })({
      dateTime: "%x, %X",
      date: "%-m/%-d/%Y",
      time: "%-I:%M:%S %p",
      periods: ["AM", "PM"],
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ]
    });
    var pa = wn(
        function(e) {
          e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
        },
        function(e, t) {
          e.setUTCMonth(e.getUTCMonth() + t);
        },
        function(e, t) {
          return (
            t.getUTCMonth() -
            e.getUTCMonth() +
            12 * (t.getUTCFullYear() - e.getUTCFullYear())
          );
        },
        function(e) {
          return e.getUTCMonth();
        }
      ),
      ha =
        (pa.range,
        wn(
          function(e) {
            e.setUTCMinutes(0, 0, 0);
          },
          function(e, t) {
            e.setTime(+e + 36e5 * t);
          },
          function(e, t) {
            return (t - e) / 36e5;
          },
          function(e) {
            return e.getUTCHours();
          }
        )),
      ma =
        (ha.range,
        wn(
          function(e) {
            e.setUTCSeconds(0, 0);
          },
          function(e, t) {
            e.setTime(+e + t * En);
          },
          function(e, t) {
            return (t - e) / En;
          },
          function(e) {
            return e.getUTCMinutes();
          }
        )),
      va =
        (ma.range,
        function(e) {
          return e.match(/.{6}/g).map(function(e) {
            return "#" + e;
          });
        }),
      ga =
        (va("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
        va(
          "393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"
        ),
        va(
          "3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"
        ),
        va(
          "1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"
        ),
        Math.PI / 180),
      ya = 180 / Math.PI,
      ba = -0.14861,
      wa = 1.78277,
      ka = -0.29227,
      xa = -0.90649,
      _a = 1.97294,
      Ea = _a * xa,
      Ta = _a * wa,
      Sa = wa * ka - xa * ba;
    function Ca(e, t, n, r) {
      return 1 === arguments.length
        ? (function(e) {
            if (e instanceof Oa) return new Oa(e.h, e.s, e.l, e.opacity);
            e instanceof wt || (e = yt(e));
            var t = e.r / 255,
              n = e.g / 255,
              r = e.b / 255,
              a = (Sa * r + Ea * t - Ta * n) / (Sa + Ea - Ta),
              i = r - a,
              o = (_a * (n - a) - ka * i) / xa,
              l = Math.sqrt(o * o + i * i) / (_a * a * (1 - a)),
              u = l ? Math.atan2(o, i) * ya - 120 : NaN;
            return new Oa(u < 0 ? u + 360 : u, l, a, e.opacity);
          })(e)
        : new Oa(e, t, n, null == r ? 1 : r);
    }
    function Oa(e, t, n, r) {
      (this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r);
    }
    function Ma(e) {
      return (function t(n) {
        function r(t, r) {
          var a = e((t = Ca(t)).h, (r = Ca(r)).h),
            i = Rt(t.s, r.s),
            o = Rt(t.l, r.l),
            l = Rt(t.opacity, r.opacity);
          return function(e) {
            return (
              (t.h = a(e)),
              (t.s = i(e)),
              (t.l = o(Math.pow(e, n))),
              (t.opacity = l(e)),
              t + ""
            );
          };
        }
        return (n = +n), (r.gamma = t), r;
      })(1);
    }
    Je(
      Oa,
      Ca,
      et(tt, {
        brighter: function(e) {
          return (
            (e = null == e ? 1 / 0.7 : Math.pow(1 / 0.7, e)),
            new Oa(this.h, this.s, this.l * e, this.opacity)
          );
        },
        darker: function(e) {
          return (
            (e = null == e ? 0.7 : Math.pow(0.7, e)),
            new Oa(this.h, this.s, this.l * e, this.opacity)
          );
        },
        rgb: function() {
          var e = isNaN(this.h) ? 0 : (this.h + 120) * ga,
            t = +this.l,
            n = isNaN(this.s) ? 0 : this.s * t * (1 - t),
            r = Math.cos(e),
            a = Math.sin(e);
          return new wt(
            255 * (t + n * (ba * r + wa * a)),
            255 * (t + n * (ka * r + xa * a)),
            255 * (t + n * (_a * r)),
            this.opacity
          );
        }
      })
    );
    Ma(function(e, t) {
      var n = t - e;
      return n
        ? Pt(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n)
        : Mt(isNaN(e) ? t : e);
    });
    var Pa = Ma(Rt);
    Pa(Ca(300, 0.5, 0), Ca(-240, 0.5, 1)),
      Pa(Ca(-100, 0.75, 0.35), Ca(80, 1.5, 0.8)),
      Pa(Ca(260, 0.75, 0.35), Ca(80, 1.5, 0.8)),
      Ca();
    function Na(e) {
      var t = e.length;
      return function(n) {
        return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
      };
    }
    Na(
      va(
        "44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"
      )
    ),
      Na(
        va(
          "00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"
        )
      ),
      Na(
        va(
          "00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"
        )
      ),
      Na(
        va(
          "0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"
        )
      );
    var Ra = function(e) {
        var t = e.range,
          n = e.rangeRound,
          r = e.domain,
          a = e.padding,
          i = e.paddingInner,
          o = e.paddingOuter,
          l = e.align,
          u = e.tickFormat,
          c = Ze();
        return (
          (c.type = "band"),
          t && c.range(t),
          n && c.rangeRound(n),
          r && c.domain(r),
          a && c.padding(a),
          i && c.paddingInner(i),
          o && c.paddingOuter(o),
          l && c.align(l),
          u && (c.tickFormat = u),
          c
        );
      },
      Da = function(e) {
        var t = e.range,
          n = e.rangeRound,
          r = e.domain,
          a = e.nice,
          i = void 0 !== a && a,
          o = e.clamp,
          l = void 0 !== o && o,
          u = gn();
        return (
          (u.type = "linear"),
          t && u.range(t),
          n && u.rangeRound(n),
          r && u.domain(r),
          i && u.nice(),
          l && u.clamp(!0),
          u
        );
      };
    Object.prototype.hasOwnProperty;
    var La = n(41),
      Ia = n.n(La),
      ja = n(42),
      Aa = n.n(ja),
      Fa = n(27),
      za = n.n(Fa);
    function Ua(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function Wa() {
      return (Wa =
        Object.assign ||
        function(e) {
          for (var t, n = 1; n < arguments.length; n++)
            for (var r in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e;
        }).apply(this, arguments);
    }
    var Ha = {
        onMouseMove: ce.a.func,
        onMouseLeave: ce.a.func,
        tooltipData: ce.a.any
      },
      qa = Wa({}, Fa.withTooltipPropTypes, {
        children: ce.a.oneOfType([ce.a.object, ce.a.func]).isRequired,
        className: ce.a.string,
        HoverStyles: ce.a.oneOfType([ce.a.object, ce.a.func]),
        renderTooltip: ce.a.func,
        styles: ce.a.objectOf(ce.a.oneOfType([ce.a.string, ce.a.number])),
        TooltipComponent: ce.a.oneOfType([ce.a.object, ce.a.func]),
        tooltipProps: ce.a.object,
        tooltipTimeout: ce.a.number
      }),
      Va = {
        className: null,
        HoverStyles: function() {
          return a.a.createElement(
            "style",
            { type: "text/css" },
            "\n      .vx-arc:hover,\n      .vx-bar:hover,\n      .vx-glyph-dot:hover {\n        opacity: 0.7;\n      }\n    "
          );
        },
        renderTooltip: null,
        styles: { display: "inline-block", position: "relative" },
        TooltipComponent: za.a,
        tooltipProps: null,
        tooltipTimeout: 200
      },
      Ba = (function(e) {
        function t(t) {
          var n;
          return (
            ((n =
              e.call(this, t) || this).handleMouseMove = n.handleMouseMove.bind(
              Ua(Ua(n))
            )),
            (n.handleMouseLeave = n.handleMouseLeave.bind(Ua(Ua(n)))),
            (n.tooltipTimeout = null),
            n
          );
        }
        !(function(e, t) {
          (e.prototype = Object.create(t.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = t);
        })(t, e);
        var n = t.prototype;
        return (
          (n.componentWillUnmount = function() {
            this.tooltipTimeout && clearTimeout(this.tooltipTimeout);
          }),
          (n.handleMouseMove = function(e) {
            var t = e.event,
              n = e.datum,
              r = e.coords,
              a = (function(e, t) {
                if (null == e) return {};
                var n,
                  r,
                  a = {},
                  i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                  (n = i[r]), 0 <= t.indexOf(n) || (a[n] = e[n]);
                return a;
              })(e, ["event", "datum", "coords"]),
              i = this.props.showTooltip;
            this.tooltipTimeout && clearTimeout(this.tooltipTimeout);
            var o = { x: 0, y: 0 };
            t &&
              t.target &&
              "focus" !== t.type &&
              t.target.ownerSVGElement &&
              (o = Ia()(t.target.ownerSVGElement, t)),
              i({
                tooltipLeft: (o = Wa({}, o, r)).x,
                tooltipTop: o.y,
                tooltipData: Wa({ event: t, datum: n }, a)
              });
          }),
          (n.handleMouseLeave = function() {
            var e = this.props,
              t = e.tooltipTimeout,
              n = e.hideTooltip;
            this.tooltipTimeout = setTimeout(function() {
              n();
            }, t);
          }),
          (n.render = function() {
            var e = this.props,
              t = e.children,
              n = e.className,
              r = e.HoverStyles,
              i = e.tooltipData,
              o = e.tooltipOpen,
              l = e.tooltipLeft,
              u = e.tooltipTop,
              c = e.tooltipProps,
              s = e.renderTooltip,
              f = e.styles,
              d = e.TooltipComponent,
              p = {
                onMouseMove: this.handleMouseMove,
                onMouseLeave: this.handleMouseLeave,
                tooltipData: i
              },
              h = s && o && d && s(i);
            return a.a.createElement(
              "div",
              { style: f, className: n },
              "function" == typeof t
                ? t(p)
                : a.a.cloneElement(a.a.Children.only(t), p),
              !!h &&
                a.a.createElement(
                  d,
                  Wa({ key: Math.random(), top: u, left: l }, c),
                  h
                ),
              r && a.a.createElement(r, null)
            );
          }),
          t
        );
      })(a.a.PureComponent);
    (Ba.propTypes = qa), (Ba.defaultProps = Va);
    var $a = Aa()(Ba);
    function Qa(e) {
      return /series/gi.test(e);
    }
    var Ka = 10;
    function Ya(e) {
      var t = e.allData,
        n = e.binCount,
        r = void 0 === n ? Ka : n,
        a = e.binValues,
        i = e.limits,
        o = e.rawDataByIndex,
        l = e.valueAccessor,
        u = Array.isArray(a) ? a.length : r,
        c = {},
        s = Fe(),
        f = Te(t, l);
      if (a) {
        var d = Te(a);
        f = [Math.min(d[0], f[0]), Math.max(d[1], f[1])];
      }
      var p = gn()
        .domain(f)
        .nice(u);
      return (
        s.domain(i || p.domain()).thresholds(a || p.ticks(u)),
        Object.keys(o).forEach(function(e) {
          var t = o[e],
            n = s.value(l)(t),
            r = n.length - 1,
            a = n[r],
            i = n[r - 1],
            u = i && i.x1 === a.x0 && a.x1 === a.x0,
            f = u ? n.slice(0, -1) : n;
          c[e] = f.map(function(e, t) {
            return {
              bin0: e.x0,
              bin1:
                e.x0 === e.x1
                  ? (t > 0 && e.x0 + e.x0 - n[t - 1].x0) || e.x1 + 1
                  : e.x1,
              data: [].concat(e).concat(u && (u && t === r - 1 ? a : [])),
              count: e.length + ((u && t === r - 1 && a.length) || 0),
              id: t.toString()
            };
          });
        }),
        c
      );
    }
    function Xa(e, t) {
      return e.toLowerCase && t.toLowerCase
        ? e.toLowerCase() < t.toLowerCase()
          ? -1
          : e.toLowerCase() > t.toLowerCase()
          ? 1
          : 0
        : e - t;
    }
    var Za = function(e, t) {
      return Xa(e.bin, t.bin);
    };
    function Ga(e) {
      var t = e.rawDataByIndex,
        n = e.valueAccessor,
        r = e.binValues,
        a = void 0 === r ? null : r,
        i = {};
      return (
        Object.keys(t).forEach(function(e) {
          var r = t[e],
            o = {};
          r.forEach(function(e) {
            var t = n(e);
            (o[t] = o[t] || { bin: t, data: [], count: 0, id: t }),
              o[t].data.push(e),
              (o[t].count += 1);
          }),
            (i[e] = a
              ? a.map(function(e) {
                  return o[e] || { bin: e, count: 0, data: [] };
                })
              : Object.values(o).sort(Za));
        }),
        i
      );
    }
    function Ja(e) {
      return (
        (e && e.type && (e.type.displayName || e.type.name)) || "Component"
      );
    }
    function ei(e) {
      var t = e.children,
        n = e.binCount,
        a = e.binType,
        i = e.binValues,
        o = e.limits,
        l = e.valueAccessor,
        u = (function(e) {
          var t = [],
            n = [],
            a = {},
            i = {};
          return (
            r.Children.forEach(e, function(e, r) {
              if (Qa(Ja(e))) {
                var o = e.props.rawData,
                  l = e.props.binnedData;
                o && o.length > 0 && ((a[r] = o), (t = t.concat(o))),
                  l && l.length > 0 && ((i[r] = l), (n = n.concat(l)));
              }
            }),
            {
              allBinnedData: n,
              allRawData: t,
              binnedDataByIndex: i,
              rawDataByIndex: a
            }
          );
        })(t),
        c = u.allRawData,
        s = u.rawDataByIndex,
        f = u.binnedDataByIndex,
        d = f;
      0 === Object.keys(f).length &&
        (d = ("numeric" === a ? Ya : Ga)({
          allData: c,
          rawDataByIndex: s,
          valueAccessor: l,
          limits: o,
          binCount: n,
          binValues: i
        }));
      return (
        Object.values(d).forEach(function(e) {
          !(function(e) {
            var t = 0;
            e.forEach(function(e) {
              (t += isNaN(e.count) ? 0 : e.count), (e.cumulative = t);
            });
            var n = t;
            e.forEach(function(e) {
              (e.density = e.count / n),
                (e.cumulativeDensity = e.cumulative / n);
            });
          })(e);
        }),
        d
      );
    }
    var ti = ce.a.shape({
        id: ce.a.string.isRequired,
        bin0: ce.a.number.isRequired,
        bin1: ce.a.number.isRequired,
        count: ce.a.number.isRequired,
        cumulative: ce.a.number,
        density: ce.a.number,
        cumulativeDensity: ce.a.number
      }),
      ni = ce.a.shape({
        id: ce.a.string.isRequired,
        bin: ce.a.string.isRequired,
        count: ce.a.number.isRequired,
        cumulative: ce.a.number,
        density: ce.a.number,
        cumulativeDensity: ce.a.number
      }),
      ri = ce.a.arrayOf(ce.a.oneOfType([ti, ni])),
      ai = ce.a.shape({
        stroke: ce.a.string,
        strokeWidth: ce.a.number,
        label: ce.a.shape({
          left: ce.a.object,
          right: ce.a.object,
          bottom: ce.a.object,
          top: ce.a.object
        })
      }),
      ii = ce.a.shape({
        stroke: ce.a.string,
        tickLength: ce.a.number,
        label: ce.a.shape({
          left: ce.a.object,
          right: ce.a.object,
          bottom: ce.a.object,
          top: ce.a.object
        })
      }),
      oi = ce.a.shape({ stroke: ce.a.string, strokeWidth: ce.a.number }),
      li = ce.a.shape({
        gridStyles: oi,
        xAxisStyles: ai,
        xTickStyles: ii,
        yAxisStyles: ai,
        yTickStyles: ii
      });
    function ui() {
      return (ui =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var ci = ui({}, Ha, {
        ariaLabel: ce.a.string.isRequired,
        binValues: ce.a.arrayOf(ce.a.oneOfType([ce.a.number, ce.a.string])),
        binCount: ce.a.number,
        binType: ce.a.oneOf(["numeric", "categorical"]),
        children: ce.a.node.isRequired,
        cumulative: ce.a.bool,
        height: ce.a.number.isRequired,
        horizontal: ce.a.bool,
        limits: ce.a.arrayOf(ce.a.number),
        margin: ce.a.shape({
          top: ce.a.number,
          right: ce.a.number,
          bottom: ce.a.number,
          left: ce.a.number
        }),
        normalized: ce.a.bool,
        renderTooltip: ce.a.func,
        theme: li,
        width: ce.a.number.isRequired,
        valueAccessor: ce.a.func
      }),
      si = {
        binCount: 10,
        binType: "numeric",
        binValues: null,
        cumulative: !1,
        horizontal: !1,
        limits: null,
        margin: { top: 32, right: 32, bottom: 64, left: 64 },
        normalized: !1,
        renderTooltip: null,
        theme: {},
        valueAccessor: function(e) {
          return e;
        }
      },
      fi = (function(e) {
        var t, n;
        function r(t) {
          var n;
          return (
            ((n = e.call(this, t) || this).state = n.getStateFromProps(t)), n
          );
        }
        (n = e),
          ((t = r).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n);
        var i = r.prototype;
        return (
          (i.componentWillReceiveProps = function(e) {
            var t = this,
              n = !1;
            ["width", "height", "children"].some(function(n) {
              return t.props[n] !== e[n];
            }) && (n = !0),
              ["margin"].some(function(n) {
                return (
                  (r = t.props[n]),
                  (a = e[n]),
                  (i = Object.keys(r)),
                  (o = Object.keys(a)),
                  !(
                    i.length === o.length &&
                    i.every(function(e) {
                      return r[e] === a[e];
                    })
                  )
                );
                var r, a, i, o;
              }) && (n = !0),
              n && this.setState(this.getStateFromProps(e));
          }),
          (i.getStateFromProps = function(e) {
            var t = this.getDimmensions(e),
              n = this.getBinnedData(e);
            return ui({ binsByIndex: n }, t, this.getScales(e, n, t));
          }),
          (i.getDimmensions = function(e) {
            var t = e || this.props,
              n = t.margin,
              r = t.width,
              a = t.height,
              i = ui({}, si.margin, n);
            return {
              margin: i,
              innerHeight: a - i.top - i.bottom,
              innerWidth: r - i.left - i.right
            };
          }),
          (i.getBinnedData = function(e) {
            var t = e || this.props;
            return ei({
              children: t.children,
              binCount: t.binCount,
              binType: t.binType,
              binValues: t.binValues,
              limits: t.limits,
              valueAccessor: t.valueAccessor
            });
          }),
          (i.getScales = function(e, t, n) {
            var r = n.innerHeight,
              a = n.innerWidth,
              i = e || this.props,
              o = i.binType,
              l = i.binValues,
              u = i.cumulative,
              c = i.horizontal,
              s = i.normalized,
              f = "numeric" === o ? Da : Ra,
              d = (function(e) {
                var t = e.normalized,
                  n = e.cumulative;
                return t && n
                  ? "cumulativeDensity"
                  : n
                  ? "cumulative"
                  : t
                  ? "density"
                  : "count";
              })({ normalized: s, cumulative: u }),
              p = (function(e) {
                var t,
                  n,
                  r = e.binsByIndex,
                  a = e.binType,
                  i = e.valueKey,
                  o = e.binValues;
                if (
                  (Object.values(r).forEach(function(e) {
                    var r = ze(e, function(e) {
                      return e[i];
                    });
                    n ? (n[1] = Math.max(r, n[1])) : (n = [0, r]),
                      "numeric" === a
                        ? t
                          ? ((t[0] = Math.min(e[0].bin0, t[0])),
                            (t[1] = Math.max(e[e.length - 1].bin1, t[1])))
                          : (t = [e[0].bin0, e[e.length - 1].bin1])
                        : (t || (t = {}),
                          e.forEach(function(e) {
                            t[e.bin] = !0;
                          }));
                  }),
                  Array.isArray(o))
                ) {
                  var l = !0;
                  o.forEach(function(e) {
                    e in t || (l = !1);
                  }),
                    l && (t = o);
                }
                return (
                  Array.isArray(t) || (t = Object.keys(t).sort(Xa)),
                  { binDomain: t, valueDomain: n }
                );
              })({ binsByIndex: t, binType: o, binValues: l, valueKey: d }),
              h = p.binDomain,
              m = p.valueDomain,
              v = c ? [r, 0] : [0, a],
              g = c ? [0, a] : [r, 0];
            return (
              c && "categorical" === o && v.reverse(),
              {
                binScale: f({ range: v, domain: h }),
                valueScale: Da({ range: g, domain: m }),
                valueKey: d
              }
            );
          }),
          (i.render = function() {
            var e = this.props.renderTooltip;
            if (e)
              return a.a.createElement(
                $a,
                { renderTooltip: e },
                a.a.createElement(
                  r,
                  ui({}, this.props, { renderTooltip: null })
                )
              );
            var t = this.props,
              n = t.ariaLabel,
              i = t.binType,
              o = t.binValues,
              l = t.children,
              u = t.height,
              c = t.horizontal,
              s = t.onMouseLeave,
              f = t.onMouseMove,
              d = t.theme,
              p = t.valueAccessor,
              h = t.width,
              m = this.state,
              v = m.binsByIndex,
              g = m.binScale,
              y = m.innerHeight,
              b = m.innerWidth,
              w = m.margin,
              k = m.valueKey,
              x = m.valueScale;
            return a.a.createElement(
              "svg",
              { "aria-label": n, role: "img", width: h, height: u },
              a.a.createElement(
                be,
                { left: w.left, top: w.top },
                a.a.Children.map(l, function(e, t) {
                  var n = Ja(e);
                  if (Qa(n)) {
                    var r = v[t];
                    return a.a.cloneElement(e, {
                      binScale: g,
                      binType: i,
                      binnedData: r,
                      horizontal: c,
                      valueAccessor: p,
                      valueKey: k,
                      valueScale: x,
                      onMouseLeave: s,
                      onMouseMove: f
                    });
                  }
                  if (
                    (function(e) {
                      return /axis/gi.test(e);
                    })(n)
                  ) {
                    var l = n[0].toLowerCase(),
                      u =
                        ("XAxis" === n && !c) || ("YAxis" === n && c)
                          ? "bin"
                          : "value",
                      h = e.props.tickValues || ("bin" === u && o ? o : null);
                    return a.a.cloneElement(e, {
                      top:
                        "YAxis" === n || "top" === e.props.orientation ? 0 : y,
                      left:
                        "XAxis" === n || "left" === e.props.orientation ? 0 : b,
                      label: e.props.label || ("value" === u ? k : null),
                      scale: "value" === u ? x : g,
                      axisStyles: ui(
                        {},
                        d[l + "AxisStyles"],
                        e.props.axisStyles
                      ),
                      tickStyles: ui(
                        {},
                        d[l + "TickStyles"],
                        e.props.tickStyles
                      ),
                      tickValues: h
                    });
                  }
                  return e;
                })
              )
            );
          }),
          r
        );
      })(a.a.PureComponent);
    (fi.propTypes = ci), (fi.defaultProps = si), (fi.displayName = "Histogram");
    var di = fi,
      pi = {
        red: [
          "#fff5f5",
          "#ffe3e3",
          "#ffc9c9",
          "#ffa8a8",
          "#ff8787",
          "#ff6b6b",
          "#fa5252",
          "#f03e3e",
          "#e03131",
          "#c92a2a"
        ],
        pink: [
          "#fff0f6",
          "#ffdeeb",
          "#fcc2d7",
          "#faa2c1",
          "#f783ac",
          "#f06595",
          "#e64980",
          "#d6336c",
          "#c2255c",
          "#a61e4d"
        ],
        grape: [
          "#f8f0fc",
          "#f3d9fa",
          "#eebefa",
          "#e599f7",
          "#da77f2",
          "#cc5de8",
          "#be4bdb",
          "#ae3ec9",
          "#9c36b5",
          "#862e9c"
        ],
        violet: [
          "#f3f0ff",
          "#e5dbff",
          "#d0bfff",
          "#b197fc",
          "#9775fa",
          "#845ef7",
          "#7950f2",
          "#7048e8",
          "#6741d9",
          "#5f3dc4"
        ],
        indigo: [
          "#edf2ff",
          "#dbe4ff",
          "#bac8ff",
          "#91a7ff",
          "#748ffc",
          "#5c7cfa",
          "#4c6ef5",
          "#4263eb",
          "#3b5bdb",
          "#364fc7"
        ],
        blue: [
          "#e8f7ff",
          "#ccedff",
          "#a3daff",
          "#72c3fc",
          "#4dadf7",
          "#329af0",
          "#228ae6",
          "#1c7cd6",
          "#1b6ec2",
          "#1862ab"
        ],
        cyan: [
          "#e3fafc",
          "#c5f6fa",
          "#99e9f2",
          "#66d9e8",
          "#3bc9db",
          "#22b8cf",
          "#15aabf",
          "#1098ad",
          "#0c8599",
          "#0b7285"
        ],
        teal: [
          "#e6fcf5",
          "#c3fae8",
          "#96f2d7",
          "#63e6be",
          "#38d9a9",
          "#20c997",
          "#12b886",
          "#0ca678",
          "#099268",
          "#087f5b"
        ],
        green: [
          "#ebfbee",
          "#d3f9d8",
          "#b2f2bb",
          "#8ce99a",
          "#69db7c",
          "#51cf66",
          "#40c057",
          "#37b24d",
          "#2f9e44",
          "#2b8a3e"
        ],
        lime: [
          "#f4fce3",
          "#e9fac8",
          "#d8f5a2",
          "#c0eb75",
          "#a9e34b",
          "#94d82d",
          "#82c91e",
          "#74b816",
          "#66a80f",
          "#5c940d"
        ],
        yellow: [
          "#fff9db",
          "#fff3bf",
          "#ffec99",
          "#ffe066",
          "#ffd43b",
          "#fcc419",
          "#fab005",
          "#f59f00",
          "#f08c00",
          "#e67700"
        ],
        orange: [
          "#fff4e6",
          "#ffe8cc",
          "#ffd8a8",
          "#ffc078",
          "#ffa94d",
          "#ff922b",
          "#fd7e14",
          "#f76707",
          "#e8590c",
          "#d9480f"
        ],
        gray: [
          "#f8f9fa",
          "#f1f3f5",
          "#e9ecef",
          "#dee2e6",
          "#ced4da",
          "#adb5bd",
          "#868e96",
          "#495057",
          "#343a40",
          "#212529"
        ]
      },
      hi = pi.gray,
      mi = function(e, t) {
        void 0 === e && (e = 6),
          void 0 === t &&
            (t = [
              "cyan",
              "yellow",
              "pink",
              "grape",
              "blue",
              "lime",
              "teal",
              "red",
              "violet",
              "orange",
              "indigo",
              "green"
            ]);
        var n = Math.max(0, Math.min(e, pi.red.length - 1));
        return t
          .map(function(e) {
            return pi[e] && pi[e][n];
          })
          .filter(function(e) {
            return e;
          });
      },
      vi = (Object.keys(pi).sort(), hi[7]),
      gi = {
        default: pi.cyan[5],
        dark: pi.cyan[7],
        light: pi.cyan[3],
        disabled: vi,
        lightDisabled: hi[3],
        text: vi,
        black: hi[9],
        darkGray: hi[8],
        lightGray: hi[3],
        grid: hi[4],
        gridDark: hi[8],
        label: vi,
        tickLabel: vi,
        grays: hi,
        categories: [].concat(mi(6), mi(2))
      };
    function yi() {
      return (yi =
        Object.assign ||
        function(e) {
          for (var t, n = 1; n < arguments.length; n++)
            for (var r in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e;
        }).apply(this, arguments);
    }
    var bi = function(e) {
        var t = e.fontFamily,
          n = e.fontSize,
          r = e.letterSpacing,
          a = void 0 === r ? 0 : r,
          i = e.lineHeight,
          o = e.padding;
        return {
          color: vi,
          fontFamily: t,
          fontSize: n,
          letterSpacing: a,
          lineHeight: i + "px",
          paddingBottom: o,
          paddingTop: o
        };
      },
      wi = "BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      ki = { fontWeight: 200 };
    yi(
      {},
      bi({ fontFamily: wi, fontSize: 10, lineHeight: 12, letterSpacing: 0.4 })
    ),
      yi(
        {},
        bi({ fontFamily: wi, fontSize: 12, lineHeight: 16, letterSpacing: 0.4 })
      ),
      yi(
        {},
        bi({ fontFamily: wi, fontSize: 14, lineHeight: 18, letterSpacing: 0.2 })
      ),
      yi({}, bi({ fontFamily: wi, fontSize: 18, lineHeight: 24, spacing: 0 }));
    function xi() {
      return (xi =
        Object.assign ||
        function(e) {
          for (var t, n = 1; n < arguments.length; n++)
            for (var r in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e;
        }).apply(this, arguments);
    }
    var _i = function(e) {
        var t = e.fontFamily,
          n = e.fontSize,
          r = e.letterSpacing;
        return {
          fill: vi,
          stroke: "none",
          fontFamily: t,
          fontSize: n,
          letterSpacing: r
        };
      },
      Ei = "BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      Ti = {
        fontFamily: Ei,
        light: { fontWeight: 200 },
        bold: { fontWeight: 700 },
        start: { textAnchor: "start" },
        middle: { textAnchor: "middle" },
        end: { textAnchor: "end" },
        tiny: xi({}, _i({ fontFamily: Ei, fontSize: 10, letterSpacing: 0.4 })),
        small: xi({}, _i({ fontFamily: Ei, fontSize: 12, letterSpacing: 0.4 })),
        regular: xi(
          {},
          _i({ fontFamily: Ei, fontSize: 14, letterSpacing: 0.2 })
        ),
        large: xi({}, _i({ fontFamily: Ei, fontSize: 18, spacing: 0 }))
      };
    function Si() {
      return (Si =
        Object.assign ||
        function(e) {
          for (var t, n = 1; n < arguments.length; n++)
            for (var r in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e;
        }).apply(this, arguments);
    }
    var Ci = Si({}, Ti.small, Ti.bold, Ti.middle, { pointerEvents: "none" }),
      Oi =
        (Si({}, Ti.tiny, Ti.bold, Ti.middle, { pointerEvents: "none" }),
        Si({}, Ti.small, Ti.light, Ti.middle, { pointerEvents: "none" })),
      Mi = {
        top: Si({}, Oi, { dy: "-0.25em" }),
        right: Si({}, Oi, Ti.start, { dx: "0.25em", dy: "0.25em" }),
        bottom: Si({}, Oi, { dy: "0.25em" }),
        left: Si({}, Oi, Ti.end, { dx: "-0.25em", dy: "0.25em" })
      };
    function Pi() {
      return (Pi =
        Object.assign ||
        function(e) {
          for (var t, n = 1; n < arguments.length; n++)
            for (var r in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e;
        }).apply(this, arguments);
    }
    var Ni = gi,
      Ri = Pi({}, Ci, ki),
      Di = { stroke: Ni.grid, strokeWidth: 1 },
      Li = {
        stroke: Ni.gridDark,
        strokeWidth: 2,
        label: { bottom: Pi({}, Ci), top: Pi({}, Ci) }
      },
      Ii = {
        stroke: Ni.grid,
        strokeWidth: 1,
        label: { left: Pi({}, Ci), right: Pi({}, Ci) }
      },
      ji = {
        colors: Ni,
        labelStyles: Ri,
        gridStyles: Di,
        xAxisStyles: Li,
        xTickStyles: {
          stroke: Ni.grid,
          length: 8,
          label: { bottom: Pi({}, Mi.bottom), top: Pi({}, Mi.top) }
        },
        yAxisStyles: Ii,
        yTickStyles: {
          stroke: Ni.grid,
          length: 8,
          label: { left: Pi({}, Mi.left), right: Pi({}, Mi.right) }
        }
      },
      Ai = Math.PI,
      Fi = 2 * Ai,
      zi = Fi - 1e-6;
    function Ui() {
      (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
    }
    function Wi() {
      return new Ui();
    }
    Ui.prototype = Wi.prototype = {
      constructor: Ui,
      moveTo: function(e, t) {
        this._ +=
          "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t);
      },
      closePath: function() {
        null !== this._x1 &&
          ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
      },
      lineTo: function(e, t) {
        this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t);
      },
      quadraticCurveTo: function(e, t, n, r) {
        this._ +=
          "Q" + +e + "," + +t + "," + (this._x1 = +n) + "," + (this._y1 = +r);
      },
      bezierCurveTo: function(e, t, n, r, a, i) {
        this._ +=
          "C" +
          +e +
          "," +
          +t +
          "," +
          +n +
          "," +
          +r +
          "," +
          (this._x1 = +a) +
          "," +
          (this._y1 = +i);
      },
      arcTo: function(e, t, n, r, a) {
        (e = +e), (t = +t), (n = +n), (r = +r), (a = +a);
        var i = this._x1,
          o = this._y1,
          l = n - e,
          u = r - t,
          c = i - e,
          s = o - t,
          f = c * c + s * s;
        if (a < 0) throw new Error("negative radius: " + a);
        if (null === this._x1)
          this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
        else if (f > 1e-6)
          if (Math.abs(s * l - u * c) > 1e-6 && a) {
            var d = n - i,
              p = r - o,
              h = l * l + u * u,
              m = d * d + p * p,
              v = Math.sqrt(h),
              g = Math.sqrt(f),
              y = a * Math.tan((Ai - Math.acos((h + f - m) / (2 * v * g))) / 2),
              b = y / g,
              w = y / v;
            Math.abs(b - 1) > 1e-6 &&
              (this._ += "L" + (e + b * c) + "," + (t + b * s)),
              (this._ +=
                "A" +
                a +
                "," +
                a +
                ",0,0," +
                +(s * d > c * p) +
                "," +
                (this._x1 = e + w * l) +
                "," +
                (this._y1 = t + w * u));
          } else this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
        else;
      },
      arc: function(e, t, n, r, a, i) {
        (e = +e), (t = +t), (i = !!i);
        var o = (n = +n) * Math.cos(r),
          l = n * Math.sin(r),
          u = e + o,
          c = t + l,
          s = 1 ^ i,
          f = i ? r - a : a - r;
        if (n < 0) throw new Error("negative radius: " + n);
        null === this._x1
          ? (this._ += "M" + u + "," + c)
          : (Math.abs(this._x1 - u) > 1e-6 || Math.abs(this._y1 - c) > 1e-6) &&
            (this._ += "L" + u + "," + c),
          n &&
            (f < 0 && (f = (f % Fi) + Fi),
            f > zi
              ? (this._ +=
                  "A" +
                  n +
                  "," +
                  n +
                  ",0,1," +
                  s +
                  "," +
                  (e - o) +
                  "," +
                  (t - l) +
                  "A" +
                  n +
                  "," +
                  n +
                  ",0,1," +
                  s +
                  "," +
                  (this._x1 = u) +
                  "," +
                  (this._y1 = c))
              : f > 1e-6 &&
                (this._ +=
                  "A" +
                  n +
                  "," +
                  n +
                  ",0," +
                  +(f >= Ai) +
                  "," +
                  s +
                  "," +
                  (this._x1 = e + n * Math.cos(a)) +
                  "," +
                  (this._y1 = t + n * Math.sin(a))));
      },
      rect: function(e, t, n, r) {
        this._ +=
          "M" +
          (this._x0 = this._x1 = +e) +
          "," +
          (this._y0 = this._y1 = +t) +
          "h" +
          +n +
          "v" +
          +r +
          "h" +
          -n +
          "Z";
      },
      toString: function() {
        return this._;
      }
    };
    Math.abs,
      Math.atan2,
      Math.cos,
      Math.max,
      Math.min,
      Math.sin,
      Math.sqrt,
      Math.PI;
    function Hi(e) {
      this._context = e;
    }
    Hi.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        this._point = 0;
      },
      lineEnd: function() {
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(e, t) {
        switch (((e = +e), (t = +t), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(e, t)
                : this._context.moveTo(e, t);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(e, t);
        }
      }
    };
    var qi = function(e) {
      return new Hi(e);
    };
    Bi(qi);
    function Vi(e) {
      this._curve = e;
    }
    function Bi(e) {
      function t(t) {
        return new Vi(e(t));
      }
      return (t._curve = e), t;
    }
    Vi.prototype = {
      areaStart: function() {
        this._curve.areaStart();
      },
      areaEnd: function() {
        this._curve.areaEnd();
      },
      lineStart: function() {
        this._curve.lineStart();
      },
      lineEnd: function() {
        this._curve.lineEnd();
      },
      point: function(e, t) {
        this._curve.point(t * Math.sin(e), t * -Math.cos(e));
      }
    };
    Array.prototype.slice;
    var $i = function(e, t) {
        if ((a = e.length) > 1)
          for (var n, r, a, i = 1, o = e[t[0]], l = o.length; i < a; ++i)
            for (r = o, o = e[t[i]], n = 0; n < l; ++n)
              o[n][1] += o[n][0] = isNaN(r[n][1]) ? r[n][0] : r[n][1];
      },
      Qi = function(e) {
        for (var t = e.length, n = new Array(t); --t >= 0; ) n[t] = t;
        return n;
      };
    var Ki = function(e) {
      var t = e.map(Yi);
      return Qi(e).sort(function(e, n) {
        return t[e] - t[n];
      });
    };
    function Yi(e) {
      for (var t, n = 0, r = -1, a = e.length; ++r < a; )
        (t = +e[r][1]) && (n += t);
      return n;
    }
    function Xi(e) {
      for (var t, n = -1, r = 0, a = e.length, i = -1 / 0; ++n < a; )
        (t = +e[n][1]) > i && ((i = t), (r = n));
      return r;
    }
    var Zi = n(5);
    function Gi(e, t) {
      return Object.keys(e).reduce(function(n, r) {
        return (
          (n[r] = (function(e, t) {
            return "function" == typeof e ? e(t) : e;
          })(e[r], t)),
          n
        );
      }, {});
    }
    var Ji =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      eo = function(e, t) {
        var n = {};
        for (var r in e)
          t.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
        return n;
      };
    function to(e) {
      var t = e.from,
        n = void 0 === t ? new Zi.Point({ x: 0, y: 0 }) : t,
        r = e.to,
        i = void 0 === r ? new Zi.Point({ x: 1, y: 1 }) : r,
        o = e.stroke,
        l = void 0 === o ? "black" : o,
        u = e.strokeWidth,
        c = void 0 === u ? 1 : u,
        s = e.strokeDasharray,
        f = void 0 === s ? "" : s,
        d = e.transform,
        p = void 0 === d ? "" : d,
        h = e.className,
        m = void 0 === h ? "" : h,
        v = e.data,
        g = e.innerRef,
        y = eo(e, [
          "from",
          "to",
          "stroke",
          "strokeWidth",
          "strokeDasharray",
          "transform",
          "className",
          "data",
          "innerRef"
        ]);
      return a.a.createElement(
        "line",
        Ji(
          {
            ref: g,
            className: ve()("vx-line", m),
            x1: n.x,
            y1: n.y,
            x2: i.x,
            y2: i.y,
            stroke: l,
            strokeWidth: c,
            strokeDasharray: f,
            transform: p
          },
          Gi(y, v)
        )
      );
    }
    function no(e) {
      var t = e.className,
        n = e.innerRef,
        r = e.data,
        i = e.x,
        o = void 0 === i ? 0 : i,
        l = e.y,
        u = void 0 === l ? 0 : l,
        c = e.width,
        s = e.height,
        f = e.rx,
        d = e.ry,
        p = e.fill,
        h = void 0 === p ? "steelblue" : p,
        m = e.fillOpacity,
        v = e.stroke,
        g = e.strokeWidth,
        y = e.strokeDasharray,
        b = e.strokeLinecap,
        w = e.strokeLinejoin,
        k = e.strokeMiterlimit,
        x = e.strokeOpacity,
        _ = eo(e, [
          "className",
          "innerRef",
          "data",
          "x",
          "y",
          "width",
          "height",
          "rx",
          "ry",
          "fill",
          "fillOpacity",
          "stroke",
          "strokeWidth",
          "strokeDasharray",
          "strokeLinecap",
          "strokeLinejoin",
          "strokeMiterlimit",
          "strokeOpacity"
        ]);
      return a.a.createElement(
        "rect",
        Ji(
          {
            ref: n,
            className: ve()("vx-bar", t),
            x: o,
            y: u,
            width: c,
            height: s,
            rx: f,
            ry: d,
            fill: h,
            fillOpacity: m,
            stroke: v,
            strokeWidth: g,
            strokeDasharray: y,
            strokeLinecap: b,
            strokeLinejoin: w,
            strokeMiterlimit: k,
            strokeOpacity: x
          },
          Gi(_, r)
        )
      );
    }
    ce.a.string,
      ce.a.any,
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.string,
      ce.a.number,
      ce.a.number,
      ce.a.array,
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.func,
      ce.a.func,
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.func,
      (to.propTypes = { innerRef: ce.a.func }),
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.array,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.string,
      ce.a.number,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.array,
      ce.a.func,
      ce.a.oneOfType([ce.a.string, ce.a.bool, ce.a.object, ce.a.array]),
      ce.a.func,
      ce.a.string,
      ce.a.number,
      ce.a.string,
      ce.a.string,
      ce.a.func,
      ce.a.func,
      ce.a.string,
      ce.a.number,
      ce.a.number,
      ce.a.array,
      ce.a.array,
      ce.a.func,
      ce.a.oneOfType([ce.a.func, ce.a.bool]),
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.bool,
      ce.a.bool,
      (no.propTypes = { innerRef: ce.a.func }),
      ce.a.array.isRequired,
      ce.a.func.isRequired,
      ce.a.func.isRequired,
      ce.a.func.isRequired,
      ce.a.func.isRequired,
      ce.a.func.isRequired,
      ce.a.array.isRequired,
      ce.a.number.isRequired,
      ce.a.string,
      ce.a.number,
      ce.a.number,
      ce.a.array.isRequired,
      ce.a.func.isRequired,
      ce.a.func.isRequired,
      ce.a.func.isRequired,
      ce.a.func.isRequired,
      ce.a.func.isRequired,
      ce.a.array.isRequired,
      ce.a.number.isRequired,
      ce.a.string,
      ce.a.number,
      ce.a.number,
      ce.a.array.isRequired,
      ce.a.func.isRequired,
      ce.a.func.isRequired,
      ce.a.func.isRequired,
      ce.a.func.isRequired,
      ce.a.array.isRequired,
      ce.a.string,
      ce.a.number,
      ce.a.number,
      ce.a.number,
      ce.a.number,
      ce.a.array.isRequired,
      ce.a.func.isRequired,
      ce.a.func.isRequired,
      ce.a.func.isRequired,
      ce.a.func.isRequired,
      ce.a.array.isRequired,
      ce.a.string,
      ce.a.number,
      ce.a.number,
      ce.a.number,
      ce.a.number;
    var ro = {
      ascending: Ki,
      descending: function(e) {
        return Ki(e).reverse();
      },
      insideout: function(e) {
        var t,
          n,
          r = e.length,
          a = e.map(Yi),
          i = (function(e) {
            var t = e.map(Xi);
            return Qi(e).sort(function(e, n) {
              return t[e] - t[n];
            });
          })(e),
          o = 0,
          l = 0,
          u = [],
          c = [];
        for (t = 0; t < r; ++t)
          (n = i[t]),
            o < l ? ((o += a[n]), u.push(n)) : ((l += a[n]), c.push(n));
        return c.reverse().concat(u);
      },
      none: Qi,
      reverse: function(e) {
        return Qi(e).reverse();
      }
    };
    Object.keys(ro);
    var ao = {
      expand: function(e, t) {
        if ((r = e.length) > 0) {
          for (var n, r, a, i = 0, o = e[0].length; i < o; ++i) {
            for (a = n = 0; n < r; ++n) a += e[n][i][1] || 0;
            if (a) for (n = 0; n < r; ++n) e[n][i][1] /= a;
          }
          $i(e, t);
        }
      },
      diverging: function(e, t) {
        if ((l = e.length) > 0)
          for (var n, r, a, i, o, l, u = 0, c = e[t[0]].length; u < c; ++u)
            for (i = o = 0, n = 0; n < l; ++n)
              (a = (r = e[t[n]][u])[1] - r[0]) > 0
                ? ((r[0] = i), (r[1] = i += a))
                : a < 0
                ? ((r[1] = o), (r[0] = o += a))
                : ((r[0] = 0), (r[1] = a));
      },
      none: $i,
      silhouette: function(e, t) {
        if ((n = e.length) > 0) {
          for (var n, r = 0, a = e[t[0]], i = a.length; r < i; ++r) {
            for (var o = 0, l = 0; o < n; ++o) l += e[o][r][1] || 0;
            a[r][1] += a[r][0] = -l / 2;
          }
          $i(e, t);
        }
      },
      wiggle: function(e, t) {
        if ((a = e.length) > 0 && (r = (n = e[t[0]]).length) > 0) {
          for (var n, r, a, i = 0, o = 1; o < r; ++o) {
            for (var l = 0, u = 0, c = 0; l < a; ++l) {
              for (
                var s = e[t[l]],
                  f = s[o][1] || 0,
                  d = (f - (s[o - 1][1] || 0)) / 2,
                  p = 0;
                p < l;
                ++p
              ) {
                var h = e[t[p]];
                d += (h[o][1] || 0) - (h[o - 1][1] || 0);
              }
              (u += f), (c += d * f);
            }
            (n[o - 1][1] += n[o - 1][0] = i), u && (i -= c / u);
          }
          (n[o - 1][1] += n[o - 1][0] = i), $i(e, t);
        }
      }
    };
    Object.keys(ao);
    ce.a.string,
      ce.a.number,
      ce.a.number,
      ce.a.array,
      ce.a.array,
      ce.a.func,
      ce.a.oneOfType([ce.a.func, ce.a.bool]),
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.oneOfType([ce.a.func, ce.a.number]),
      ce.a.oneOfType([ce.a.func, ce.a.array, ce.a.string]),
      ce.a.oneOfType([ce.a.func, ce.a.array, ce.a.string]),
      ce.a.func,
      ce.a.bool;
    ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.number,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.number,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.number,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.number,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.number,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.func,
      ce.a.number.isRequired,
      ce.a.number.isRequired,
      ce.a.string,
      ce.a.number;
    function io(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function oo(e) {
      return (oo =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function lo(e) {
      return (lo = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function uo(e, t) {
      return (uo =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function co(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function so() {
      var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
      null != e && this.setState(e);
    }
    function fo(e) {
      this.setState(
        function(t) {
          var n = this.constructor.getDerivedStateFromProps(e, t);
          return null != n ? n : null;
        }.bind(this)
      );
    }
    function po(e, t) {
      try {
        var n = this.props,
          r = this.state;
        (this.props = e),
          (this.state = t),
          (this.__reactInternalSnapshotFlag = !0),
          (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r));
      } finally {
        (this.props = n), (this.state = r);
      }
    }
    (so.__suppressDeprecationWarning = !0),
      (fo.__suppressDeprecationWarning = !0),
      (po.__suppressDeprecationWarning = !0);
    var ho,
      mo,
      vo = 0,
      go = 0,
      yo = 0,
      bo = 1e3,
      wo = 0,
      ko = 0,
      xo = 0,
      _o =
        "object" == typeof performance && performance.now ? performance : Date,
      Eo =
        "object" == typeof window && window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : function(e) {
              setTimeout(e, 17);
            };
    function To() {
      return ko || (Eo(So), (ko = _o.now() + xo));
    }
    function So() {
      ko = 0;
    }
    function Co() {
      this._call = this._time = this._next = null;
    }
    function Oo(e, t, n) {
      var r = new Co();
      return r.restart(e, t, n), r;
    }
    function Mo() {
      (ko = (wo = _o.now()) + xo), (vo = go = 0);
      try {
        !(function() {
          To(), ++vo;
          for (var e, t = ho; t; )
            (e = ko - t._time) >= 0 && t._call.call(null, e), (t = t._next);
          --vo;
        })();
      } finally {
        (vo = 0),
          (function() {
            var e,
              t,
              n = ho,
              r = 1 / 0;
            for (; n; )
              n._call
                ? (r > n._time && (r = n._time), (e = n), (n = n._next))
                : ((t = n._next),
                  (n._next = null),
                  (n = e ? (e._next = t) : (ho = t)));
            (mo = e), No(r);
          })(),
          (ko = 0);
      }
    }
    function Po() {
      var e = _o.now(),
        t = e - wo;
      t > bo && ((xo -= t), (wo = e));
    }
    function No(e) {
      vo ||
        (go && (go = clearTimeout(go)),
        e - ko > 24
          ? (e < 1 / 0 && (go = setTimeout(Mo, e - _o.now() - xo)),
            yo && (yo = clearInterval(yo)))
          : (yo || ((wo = _o.now()), (yo = setInterval(Po, bo))),
            (vo = 1),
            Eo(Mo)));
    }
    Co.prototype = Oo.prototype = {
      constructor: Co,
      restart: function(e, t, n) {
        if ("function" != typeof e)
          throw new TypeError("callback is not a function");
        (n = (null == n ? To() : +n) + (null == t ? 0 : +t)),
          this._next ||
            mo === this ||
            (mo ? (mo._next = this) : (ho = this), (mo = this)),
          (this._call = e),
          (this._time = n),
          No();
      },
      stop: function() {
        this._call && ((this._call = null), (this._time = 1 / 0), No());
      }
    };
    function Ro(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }
    function Do(e, t, n) {
      (this.key = e), (this.data = t), (this.type = n), (this.state = {});
    }
    Ro(Do.prototype, {
      setState: function(e) {
        var t = this.state;
        Ro(t, "function" == typeof e ? e(t) : e);
      },
      updateData: function(e) {
        return (this.data = e), this;
      },
      updateType: function(e) {
        return (this.type = e), this;
      }
    });
    var Lo = Do;
    var Io = function(e, t, n, r) {
        for (var a = [], i = 0; i < n.length; i++) a[i] = n[i];
        for (var o = 0; o < e.length; o++) void 0 === r[e[o]] && a.push(e[o]);
        return a.sort(function(e, a) {
          var i = r[e],
            o = r[a],
            l = t[e],
            u = t[a];
          if (null != i && null != o) return r[e] - r[a];
          if (null != l && null != u) return t[e] - t[a];
          if (null != i) {
            for (var c = 0; c < n.length; c++) {
              var s = n[c];
              if (t[s]) {
                if (i < r[s] && u > t[s]) return -1;
                if (i > r[s] && u < t[s]) return 1;
              }
            }
            return 1;
          }
          for (var f = 0; f < n.length; f++) {
            var d = n[f];
            if (t[d]) {
              if (o < r[d] && l > t[d]) return 1;
              if (o > r[d] && l < t[d]) return -1;
            }
          }
          return -1;
        });
      },
      jo = "LEAVE";
    function Ao(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(Object(n));
        "function" == typeof Object.getOwnPropertySymbols &&
          (r = r.concat(
            Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })
          )),
          r.forEach(function(t) {
            co(e, t, n[t]);
          });
      }
      return e;
    }
    var Fo,
      zo,
      Uo,
      Wo,
      Ho = 180 / Math.PI,
      qo = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1
      },
      Vo = function(e, t, n, r, a, i) {
        var o, l, u;
        return (
          (o = Math.sqrt(e * e + t * t)) && ((e /= o), (t /= o)),
          (u = e * n + t * r) && ((n -= e * u), (r -= t * u)),
          (l = Math.sqrt(n * n + r * r)) && ((n /= l), (r /= l), (u /= l)),
          e * r < t * n && ((e = -e), (t = -t), (u = -u), (o = -o)),
          {
            translateX: a,
            translateY: i,
            rotate: Math.atan2(t, e) * Ho,
            skewX: Math.atan(u) * Ho,
            scaleX: o,
            scaleY: l
          }
        );
      };
    function Bo(e, t, n, r) {
      function a(e) {
        return e.length ? e.pop() + " " : "";
      }
      return function(i, o) {
        var l = [],
          u = [];
        return (
          (i = e(i)),
          (o = e(o)),
          (function(e, r, a, i, o, l) {
            if (e !== a || r !== i) {
              var u = o.push("translate(", null, t, null, n);
              l.push({ i: u - 4, x: Ge(e, a) }, { i: u - 2, x: Ge(r, i) });
            } else (a || i) && o.push("translate(" + a + t + i + n);
          })(i.translateX, i.translateY, o.translateX, o.translateY, l, u),
          (function(e, t, n, i) {
            e !== t
              ? (e - t > 180 ? (t += 360) : t - e > 180 && (e += 360),
                i.push({
                  i: n.push(a(n) + "rotate(", null, r) - 2,
                  x: Ge(e, t)
                }))
              : t && n.push(a(n) + "rotate(" + t + r);
          })(i.rotate, o.rotate, l, u),
          (function(e, t, n, i) {
            e !== t
              ? i.push({ i: n.push(a(n) + "skewX(", null, r) - 2, x: Ge(e, t) })
              : t && n.push(a(n) + "skewX(" + t + r);
          })(i.skewX, o.skewX, l, u),
          (function(e, t, n, r, i, o) {
            if (e !== n || t !== r) {
              var l = i.push(a(i) + "scale(", null, ",", null, ")");
              o.push({ i: l - 4, x: Ge(e, n) }, { i: l - 2, x: Ge(t, r) });
            } else
              (1 === n && 1 === r) ||
                i.push(a(i) + "scale(" + n + "," + r + ")");
          })(i.scaleX, i.scaleY, o.scaleX, o.scaleY, l, u),
          (i = o = null),
          function(e) {
            for (var t, n = -1, r = u.length; ++n < r; )
              l[(t = u[n]).i] = t.x(e);
            return l.join("");
          }
        );
      };
    }
    Bo(
      function(e) {
        return "none" === e
          ? qo
          : (Fo ||
              ((Fo = document.createElement("DIV")),
              (zo = document.documentElement),
              (Uo = document.defaultView)),
            (Fo.style.transform = e),
            (e = Uo.getComputedStyle(zo.appendChild(Fo), null).getPropertyValue(
              "transform"
            )),
            zo.removeChild(Fo),
            (e = e.slice(7, -1).split(",")),
            Vo(+e[0], +e[1], +e[2], +e[3], +e[4], +e[5]));
      },
      "px, ",
      "px)",
      "deg)"
    );
    var $o = Bo(
      function(e) {
        return null == e
          ? qo
          : (Wo ||
              (Wo = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "g"
              )),
            Wo.setAttribute("transform", e),
            (e = Wo.transform.baseVal.consolidate())
              ? ((e = e.matrix), Vo(e.a, e.b, e.c, e.d, e.e, e.f))
              : qo);
      },
      ", ",
      ")",
      ")"
    );
    function Qo(e, t, n) {
      return function() {
        var r = this,
          a = e ? this.state[e][t] : this.state[t];
        if (a === n) return null;
        var i = (function(e) {
          return "transform" === e ? $o : qt;
        })(t)(a, n);
        return null === e
          ? function(e) {
              r.setState(function() {
                return co({}, t, i(e));
              });
            }
          : function(n) {
              r.setState(function(r) {
                return co({}, e, Ao({}, r[e], co({}, t, i(n))));
              });
            };
      };
    }
    var Ko = function(e, t, n) {
        return Qo.call(this, e, t, n);
      },
      Yo = function(e, t, n) {
        var r = new Co();
        return (
          (t = null == t ? 0 : +t),
          r.restart(
            function(n) {
              r.stop(), e(n + t);
            },
            t,
            n
          ),
          r
        );
      },
      Xo = 1,
      Zo = 2,
      Go = 3,
      Jo = 4,
      el = 5,
      tl = 6,
      nl = function(e, t, n, r, a) {
        var i =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
          o = e.TRANSITION_SCHEDULES;
        if (o) {
          if (n in o) return;
        } else e.TRANSITION_SCHEDULES = {};
        var l = Ao({ stateKey: t, events: i, tweens: a }, r, {
          timer: null,
          state: 0
        });
        rl(e, n, l);
      };
    function rl(e, t, n) {
      var r = e.TRANSITION_SCHEDULES,
        a = Ao({}, n),
        i = a.tweens.length,
        o = new Array(i);
      function l(n) {
        if (a.state !== Xo) return c();
        for (var s in r) {
          var f = r[s];
          if (f.stateKey === a.stateKey) {
            if (f.state === Go) return Yo(l);
            f.state === Jo
              ? ((f.state = tl),
                f.timer.stop(),
                f.events.interrupt &&
                  "function" == typeof f.events.interrupt &&
                  f.events.interrupt.call(this),
                delete r[s])
              : +s < t && ((f.state = tl), f.timer.stop(), delete r[s]);
          }
        }
        if (
          (Yo(function() {
            a.state === Go &&
              ((a.state = Jo), a.timer.restart(u, a.delay, a.time), u(n));
          }),
          (a.state = Zo),
          a.events.start &&
            "function" == typeof a.events.start &&
            a.events.start.call(e),
          a.state === Zo)
        ) {
          a.state = Go;
          for (var d = -1, p = 0; p < i; ++p) {
            var h = a.tweens[p].call(e);
            h && (o[++d] = h);
          }
          o.length = d + 1;
        }
      }
      function u(t) {
        var n = 1;
        t < a.duration
          ? (n = a.ease.call(null, t / a.duration))
          : (a.timer.restart(c), (a.state = el));
        for (var r = -1; ++r < o.length; ) o[r].call(null, n);
        a.state === el &&
          (a.events.end &&
            "function" == typeof a.events.end &&
            a.events.end.call(e),
          c());
      }
      function c() {
        for (var n in ((a.state = tl), a.timer.stop(), delete r[t], r)) return;
        delete e.TRANSITION_SCHEDULES;
      }
      (r[t] = a),
        (a.timer = Oo(
          function(e) {
            (a.state = Xo),
              a.timer.restart(l, a.delay, a.time),
              a.delay <= e && l(e - a.delay);
          },
          0,
          a.time
        ));
    }
    var al = 0;
    var il = {
      time: null,
      delay: 0,
      duration: 250,
      ease: function(e) {
        return +e;
      }
    };
    function ol() {
      var e = this,
        t = Ao(
          {},
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        ),
        n = t.events || {};
      delete t.events,
        Object.keys(n).forEach(function(e) {
          if ("function" != typeof n[e])
            throw new Error("Event handlers must be a function");
          var t, r;
          n[e] =
            ((t = n[e]),
            (r = !1),
            function() {
              r || ((r = !0), t.call(this));
            });
        });
      var r = t.timing || {};
      delete t.timing,
        Object.keys(t).forEach(function(a) {
          var i = [];
          if ("object" === oo(t[a]) && !1 === Array.isArray(t[a]))
            Object.keys(t[a]).forEach(function(n) {
              var r = t[a][n];
              if (Array.isArray(r))
                1 === r.length
                  ? i.push(Ko.call(e, a, n, r[0]))
                  : (e.setState(function(e) {
                      return co({}, a, Ao({}, e[a], co({}, n, r[0])));
                    }),
                    i.push(Ko.call(e, a, n, r[1])));
              else if ("function" == typeof r) {
                i.push(function() {
                  return function(t) {
                    e.setState(function(e) {
                      return co({}, a, Ao({}, e[a], co({}, n, r(t))));
                    });
                  };
                });
              } else
                e.setState(function(e) {
                  return co({}, a, Ao({}, e[a], co({}, n, r)));
                }),
                  i.push(Ko.call(e, a, n, r));
            });
          else {
            var o = t[a];
            if (Array.isArray(o))
              1 === o.length
                ? i.push(Ko.call(e, null, a, o[0]))
                : (e.setState(function() {
                    return co({}, a, o[0]);
                  }),
                  i.push(Ko.call(e, null, a, o[1])));
            else if ("function" == typeof o) {
              i.push(function() {
                return function(t) {
                  e.setState(function() {
                    return co({}, a, o(t));
                  });
                };
              });
            } else
              e.setState(function() {
                return co({}, a, o);
              }),
                i.push(Ko.call(e, null, a, o));
          }
          var l = Ao({}, il, r, { time: To() });
          nl(e, a, ++al, l, i, n);
        });
    }
    function ll(e) {
      var t = this;
      Array.isArray(e)
        ? e.forEach(function(e) {
            ol.call(t, e);
          })
        : ol.call(this, e);
    }
    function ul() {
      var e = this.TRANSITION_SCHEDULES;
      e &&
        Object.keys(e).forEach(function(t) {
          e[t].timer.stop();
        });
    }
    var cl = (function(e) {
      function t() {
        var e, n;
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, t);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          (n = (function(e, t) {
            return !t || ("object" !== oo(t) && "function" != typeof t)
              ? R(e)
              : t;
          })(this, (e = lo(t)).call.apply(e, [this].concat(a)))),
          co(R(R(n)), "state", {
            nodeKeys: [],
            nodeHash: {},
            nodes: [],
            data: null
          }),
          co(R(R(n)), "animate", function() {
            var e = n.state,
              t = e.nodeKeys,
              r = e.nodeHash;
            if (!n.unmounting) {
              for (var a = !1, i = [], o = t.length, l = 0; l < o; l++) {
                var u = t[l],
                  c = r[u];
                c.TRANSITION_SCHEDULES && (a = !0),
                  c.type !== jo || c.TRANSITION_SCHEDULES
                    ? i.push(u)
                    : delete r[u];
              }
              a || n.interval.stop(),
                n.setState(function() {
                  return {
                    nodeKeys: i,
                    nodes: i.map(function(e) {
                      return r[e];
                    })
                  };
                });
            }
          }),
          co(R(R(n)), "interval", null),
          co(R(R(n)), "unmounting", !1),
          n
        );
      }
      var n, r, i;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && uo(e, t);
        })(t, e),
        (n = t),
        (i = [
          {
            key: "getDerivedStateFromProps",
            value: function(e, t) {
              if (e.data !== t.data) {
                for (
                  var n = e.data,
                    r = e.keyAccessor,
                    a = e.start,
                    i = e.enter,
                    o = e.update,
                    l = e.leave,
                    u = t.nodeKeys,
                    c = t.nodeHash,
                    s = {},
                    f = 0;
                  f < u.length;
                  f++
                )
                  s[u[f]] = f;
                for (var d = {}, p = [], h = 0; h < n.length; h++) {
                  var m = n[h],
                    v = r(m, h);
                  (d[v] = h),
                    p.push(v),
                    void 0 === s[v] && (c[v] = new Lo(v, m, "ENTER"));
                }
                for (var g = 0; g < u.length; g++) {
                  var y = u[g],
                    b = c[y];
                  void 0 !== d[y]
                    ? (b.updateData(n[d[y]]), b.updateType("UPDATE"))
                    : b.updateType(jo);
                }
                for (var w = Io(u, s, p, d), k = 0; k < w.length; k++) {
                  var x = w[k],
                    _ = c[x],
                    E = _.data;
                  "ENTER" === _.type
                    ? (_.setState(a(E, d[x])), ll.call(_, i(E, d[x])))
                    : _.type === jo
                    ? ll.call(_, l(E, s[x]))
                    : ll.call(_, o(E, d[x]));
                }
                return {
                  data: n,
                  nodes: w.map(function(e) {
                    return c[e];
                  }),
                  nodeHash: c,
                  nodeKeys: w
                };
              }
              return null;
            }
          }
        ]),
        (r = [
          {
            key: "componentDidMount",
            value: function() {
              this.startInterval();
            }
          },
          {
            key: "componentDidUpdate",
            value: function(e) {
              e.data === this.props.data ||
                this.unmounting ||
                this.startInterval();
            }
          },
          {
            key: "startInterval",
            value: function() {
              var e, t, n, r, a;
              this.interval
                ? this.interval.restart(this.animate)
                : (this.interval =
                    ((e = this.animate),
                    (r = new Co()),
                    (a = t),
                    null == t
                      ? (r.restart(e, t, n), r)
                      : ((t = +t),
                        (n = null == n ? To() : +n),
                        r.restart(
                          function i(o) {
                            (o += a), r.restart(i, (a += t), n), e(o);
                          },
                          t,
                          n
                        ),
                        r)));
            }
          },
          {
            key: "componentWillUnmount",
            value: function() {
              var e = this.state,
                t = e.nodeKeys,
                n = e.nodeHash;
              (this.unmounting = !0),
                this.interval && this.interval.stop(),
                t.forEach(function(e) {
                  ul.call(n[e]);
                });
            }
          },
          {
            key: "render",
            value: function() {
              var e = this.props.children(this.state.nodes);
              return e && a.a.Children.only(e);
            }
          }
        ]) && io(n.prototype, r),
        i && io(n, i),
        t
      );
    })(r.Component);
    (cl.propTypes = {}),
      (cl.defaultProps = {
        enter: function() {},
        update: function() {},
        leave: function() {}
      }),
      (function(e) {
        var t = e.prototype;
        if (!t || !t.isReactComponent)
          throw new Error("Can only polyfill class components");
        if (
          "function" != typeof e.getDerivedStateFromProps &&
          "function" != typeof t.getSnapshotBeforeUpdate
        )
          return e;
        var n = null,
          r = null,
          a = null;
        if (
          ("function" == typeof t.componentWillMount
            ? (n = "componentWillMount")
            : "function" == typeof t.UNSAFE_componentWillMount &&
              (n = "UNSAFE_componentWillMount"),
          "function" == typeof t.componentWillReceiveProps
            ? (r = "componentWillReceiveProps")
            : "function" == typeof t.UNSAFE_componentWillReceiveProps &&
              (r = "UNSAFE_componentWillReceiveProps"),
          "function" == typeof t.componentWillUpdate
            ? (a = "componentWillUpdate")
            : "function" == typeof t.UNSAFE_componentWillUpdate &&
              (a = "UNSAFE_componentWillUpdate"),
          null !== n || null !== r || null !== a)
        ) {
          var i = e.displayName || e.name,
            o =
              "function" == typeof e.getDerivedStateFromProps
                ? "getDerivedStateFromProps()"
                : "getSnapshotBeforeUpdate()";
          throw Error(
            "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" +
              i +
              " uses " +
              o +
              " but also contains the following legacy lifecycles:" +
              (null !== n ? "\n  " + n : "") +
              (null !== r ? "\n  " + r : "") +
              (null !== a ? "\n  " + a : "") +
              "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks"
          );
        }
        if (
          ("function" == typeof e.getDerivedStateFromProps &&
            ((t.componentWillMount = so), (t.componentWillReceiveProps = fo)),
          "function" == typeof t.getSnapshotBeforeUpdate)
        ) {
          if ("function" != typeof t.componentDidUpdate)
            throw new Error(
              "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
            );
          t.componentWillUpdate = po;
          var l = t.componentDidUpdate;
          t.componentDidUpdate = function(e, t, n) {
            var r = this.__reactInternalSnapshotFlag
              ? this.__reactInternalSnapshot
              : n;
            l.call(this, e, t, r);
          };
        }
      })(cl);
    var sl = cl,
      fl = function() {
        return "$$key$$";
      };
    function dl(e) {
      var t = e.show,
        n = e.start,
        r = e.enter,
        i = e.update,
        o = e.leave,
        l = e.children,
        u = "function" == typeof n ? n() : n;
      return a.a.createElement(
        sl,
        {
          data: t ? [u] : [],
          start: function() {
            return u;
          },
          keyAccessor: fl,
          enter:
            "function" == typeof r
              ? r
              : function() {
                  return r;
                },
          update:
            "function" == typeof i
              ? i
              : function() {
                  return i;
                },
          leave:
            "function" == typeof o
              ? o
              : function() {
                  return o;
                }
        },
        function(e) {
          if (!e[0]) return null;
          var t = l(e[0].state);
          return t && a.a.Children.only(t);
        }
      );
    }
    (dl.propTypes = {}), (dl.defaultProps = { show: !0 });
    function pl(e) {
      if ("function" == typeof e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return e.apply(void 0, n);
      }
      return e;
    }
    var hl = {
        rawData: ce.a.arrayOf(ce.a.oneOfType([ce.a.number, ce.a.string])),
        binnedData: ri,
        fill: ce.a.oneOfType([ce.a.func, ce.a.string]),
        fillOpacity: ce.a.oneOfType([ce.a.func, ce.a.number]),
        horizontal: ce.a.bool,
        stroke: ce.a.oneOfType([ce.a.func, ce.a.string]),
        strokeWidth: ce.a.oneOfType([ce.a.func, ce.a.number]),
        valueKey: ce.a.string,
        onClick: ce.a.func,
        binScale: ce.a.func,
        valueScale: ce.a.func,
        onMouseMove: ce.a.func,
        onMouseLeave: ce.a.func,
        keyAccessor: ce.a.func
      },
      ml = {
        rawData: [],
        binnedData: [],
        binScale: null,
        fill: ji.colors.default,
        fillOpacity: 0.7,
        horizontal: !1,
        onClick: null,
        onMouseMove: null,
        onMouseLeave: null,
        stroke: "#FFFFFF",
        strokeWidth: 1,
        valueKey: "count",
        valueScale: null,
        keyAccessor: function(e) {
          return e.id;
        }
      },
      vl = 10,
      gl = function(e) {
        return void 0 === e.bin ? e.bin0 : e.bin;
      },
      yl = function(e) {
        return void 0 === e.bin ? e.bin1 : e.bin;
      };
    function bl(e) {
      var t = e.binnedData,
        n = e.valueScale,
        r = e.binScale,
        i = e.horizontal,
        o = e.keyAccessor,
        l = e.fill,
        u = e.fillOpacity,
        c = e.onClick,
        s = e.onMouseMove,
        f = e.onMouseLeave,
        d = e.stroke,
        p = e.strokeWidth,
        h = e.valueKey,
        m = Math.max.apply(Math, n.range()),
        v = t.map(function(e, n) {
          return r.bandwidth
            ? r.bandwidth()
            : Math.abs(r(t[n].bin1) - r(t[n].bin0));
        }),
        g = function(e) {
          return e[h];
        },
        y = i ? g : gl,
        b = i ? yl : g,
        w = i ? n : r,
        k = i ? r : n;
      return a.a.createElement(
        sl,
        {
          data: t,
          keyAccessor: o,
          start: function(e, t) {
            return {
              x: i ? 0 : w(y(e)),
              y: i ? k(b(e)) : m,
              fill: e.fill || pl(l, e, t),
              width: i ? 0 : v[t],
              height: i ? v[t] : 0
            };
          },
          enter: function(e, t) {
            return {
              x: [i ? 0 : w(y(e))],
              y: [k(b(e))],
              width: [i ? w(y(e)) : v[t]],
              height: [i ? v[t] : m - k(b(e))],
              fill: [e.fill || pl(l, e, t)],
              stroke: [e.stroke || pl(d, e, t)],
              timing: { duration: 300, delay: vl * t }
            };
          },
          update: function(e, t) {
            return {
              x: [i ? 0 : w(y(e))],
              y: [k(b(e))],
              width: [i ? w(y(e)) : v[t]],
              height: [i ? v[t] : m - k(b(e))],
              fill: [e.fill || pl(l, e, t)],
              stroke: [e.stroke || pl(d, e, t)],
              timing: { duration: 300, delay: vl * t }
            };
          },
          leave: function(e, t) {
            return {
              x: i ? 0 : w(y(e)),
              y: i ? k(b(e)) : m,
              width: i ? 0 : v[t],
              height: i ? v[t] : 0,
              timing: { duration: 300, delay: (vl / 2) * t }
            };
          }
        },
        function(e) {
          return a.a.createElement(
            be,
            null,
            e.map(function(e, n) {
              var r = e.key,
                i = e.data,
                o = e.state;
              return a.a.createElement(no, {
                key: "bar" + r,
                x: o.x,
                y: o.y,
                width: o.width,
                height: o.height,
                fill: o.fill,
                stroke: o.stroke,
                fillOpacity: void 0 === u ? pl(u, i, n) : u,
                strokeWidth: i.strokeWidth || pl(p, i, n),
                onClick:
                  c &&
                  function() {
                    return function(e) {
                      c({
                        event: e,
                        datum: i,
                        data: t,
                        color: o.fill,
                        index: n
                      });
                    };
                  },
                onMouseMove:
                  s &&
                  function() {
                    return function(e) {
                      s({
                        event: e,
                        datum: i,
                        data: t,
                        color: o.fill,
                        index: n
                      });
                    };
                  },
                onMouseLeave:
                  f &&
                  function() {
                    return f;
                  }
              });
            })
          );
        }
      );
    }
    (bl.propTypes = hl), (bl.defaultProps = ml);
    var wl = bl,
      kl = {
        animated: ce.a.bool,
        rawData: ce.a.arrayOf(ce.a.oneOfType([ce.a.number, ce.a.string])),
        binnedData: ri,
        fill: ce.a.oneOfType([ce.a.func, ce.a.string]),
        fillOpacity: ce.a.oneOfType([ce.a.func, ce.a.number]),
        horizontal: ce.a.bool,
        stroke: ce.a.oneOfType([ce.a.func, ce.a.string]),
        strokeWidth: ce.a.oneOfType([ce.a.func, ce.a.number]),
        valueKey: ce.a.string,
        onClick: ce.a.func,
        binScale: ce.a.func,
        valueScale: ce.a.func,
        onMouseMove: ce.a.func,
        onMouseLeave: ce.a.func
      },
      xl = {
        animated: !0,
        rawData: [],
        binnedData: [],
        binScale: null,
        fill: ji.colors.default,
        fillOpacity: 0.7,
        horizontal: !1,
        onClick: null,
        onMouseMove: null,
        onMouseLeave: null,
        stroke: "#FFFFFF",
        strokeWidth: 1,
        valueKey: "count",
        valueScale: null
      };
    function _l(e) {
      var t = e.animated,
        n = e.binnedData,
        r = e.binScale,
        i = e.fill,
        o = e.fillOpacity,
        l = e.horizontal,
        u = e.onClick,
        c = e.onMouseMove,
        s = e.onMouseLeave,
        f = e.stroke,
        d = e.strokeWidth,
        p = e.valueKey,
        h = e.valueScale;
      if (!r || !h || !n || 0 === n.length) return null;
      var m = Math.max.apply(Math, h.range());
      return a.a.createElement(
        be,
        null,
        t &&
          a.a.createElement(wl, {
            binnedData: n,
            binScale: r,
            horizontal: l,
            fill: i,
            fillOpacity: o,
            onClick: u,
            onMouseMove: c,
            onMouseLeave: s,
            stroke: f,
            strokeWidth: d,
            valueKey: p,
            valueScale: h
          }),
        !t &&
          n.map(function(e, t) {
            var v = r(e.bin || (l ? e.bin1 : e.bin0)),
              g = l ? h(e[p]) : m - h(e[p]),
              y = r.bandwidth
                ? r.bandwidth()
                : Math.abs(r(n[t].bin1) - r(n[t].bin0)),
              b = e.fill || pl(i, e, t);
            return a.a.createElement(no, {
              key: "bar-" + v,
              x: l ? 0 : v,
              y: l ? v : m - g,
              width: l ? g : y,
              height: l ? y : g,
              fill: b,
              fillOpacity: void 0 === o ? pl(o, e, t) : o,
              stroke: e.stroke || pl(f, e, t),
              strokeWidth: e.strokeWidth || pl(d, e, t),
              onClick:
                u &&
                function() {
                  return function(r) {
                    u({ event: r, data: n, datum: e, color: b, index: t });
                  };
                },
              onMouseMove:
                c &&
                function() {
                  return function(r) {
                    c({ event: r, data: n, datum: e, color: b, index: t });
                  };
                },
              onMouseLeave:
                s &&
                function() {
                  return s;
                }
            });
          })
      );
    }
    (_l.propTypes = kl), (_l.defaultProps = xl), (_l.displayName = "BarSeries");
    var El = _l,
      Tl = n(28);
    function Sl(e) {
      var t = e.bandwidth() / 2;
      return (
        e.round() && (t = Math.round(t)),
        function(n) {
          return e(n) + t;
        }
      );
    }
    function Cl(e) {
      return e;
    }
    var Ol = { top: "top", left: "left", right: "right", bottom: "bottom" };
    var Ml =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Pl = {
        axisClassName: ce.a.string,
        axisLineClassName: ce.a.string,
        hideAxisLine: ce.a.bool,
        hideTicks: ce.a.bool,
        hideZero: ce.a.bool,
        label: ce.a.string,
        labelClassName: ce.a.string,
        labelOffset: ce.a.number,
        labelProps: ce.a.object,
        left: ce.a.number,
        numTicks: ce.a.number,
        orientation: ce.a.oneOf([Ol.top, Ol.right, Ol.bottom, Ol.left]),
        rangePadding: ce.a.number,
        scale: ce.a.func.isRequired,
        stroke: ce.a.string,
        strokeWidth: ce.a.number,
        strokeDasharray: ce.a.string,
        tickClassName: ce.a.string,
        tickFormat: ce.a.func,
        tickLabelProps: ce.a.func,
        tickLength: ce.a.number,
        tickStroke: ce.a.string,
        tickTransform: ce.a.string,
        tickValues: ce.a.array,
        tickComponent: ce.a.func,
        top: ce.a.number,
        children: ce.a.func
      };
    function Nl(e) {
      var t = e.children,
        n = e.axisClassName,
        r = e.axisLineClassName,
        i = e.hideAxisLine,
        o = void 0 !== i && i,
        l = e.hideTicks,
        u = void 0 !== l && l,
        c = e.hideZero,
        s = void 0 !== c && c,
        f = e.label,
        d = void 0 === f ? "" : f,
        p = e.labelClassName,
        h = e.labelOffset,
        m = void 0 === h ? 14 : h,
        v = e.labelProps,
        g =
          void 0 === v
            ? {
                textAnchor: "middle",
                fontFamily: "Arial",
                fontSize: 10,
                fill: "black"
              }
            : v,
        y = e.left,
        b = void 0 === y ? 0 : y,
        w = e.numTicks,
        k = void 0 === w ? 10 : w,
        x = e.orientation,
        _ = void 0 === x ? Ol.bottom : x,
        E = e.rangePadding,
        T = void 0 === E ? 0 : E,
        S = e.scale,
        C = e.stroke,
        O = void 0 === C ? "black" : C,
        M = e.strokeWidth,
        P = void 0 === M ? 1 : M,
        N = e.strokeDasharray,
        R = e.tickClassName,
        D = e.tickFormat,
        L = e.tickLabelProps,
        I =
          void 0 === L
            ? function(e, t) {
                return {
                  textAnchor: "middle",
                  fontFamily: "Arial",
                  fontSize: 10,
                  fill: "black"
                };
              }
            : L,
        j = e.tickLength,
        A = void 0 === j ? 8 : j,
        F = e.tickStroke,
        z = void 0 === F ? "black" : F,
        U = e.tickTransform,
        W = e.tickValues,
        H = e.tickComponent,
        q = e.top,
        V = void 0 === q ? 0 : q,
        B = S.ticks ? S.ticks(k) : S.domain();
      W && (B = W);
      var $ = S.tickFormat ? S.tickFormat() : Cl;
      D && ($ = D);
      var Q = S.range(),
        K = Q[0] + 0.5 - T,
        Y = Q[Q.length - 1] + 0.5 + T,
        X = _ !== Ol.left && _ !== Ol.right,
        Z = _ === Ol.left,
        G = _ === Ol.top,
        J = Z || G ? -1 : 1,
        ee = (S.bandwidth ? Sl : Cl)(S.copy()),
        te = new Zi.Point({ x: X ? K : 0, y: X ? 0 : K }),
        ne = new Zi.Point({ x: X ? Y : 0, y: X ? 0 : Y }),
        re = 10;
      return t
        ? a.a.createElement(
            be,
            { className: ve()("vx-axis", n), top: V, left: b },
            t({
              axisFromPoint: te,
              axisToPoint: ne,
              horizontal: X,
              tickSign: J,
              numTicks: k,
              label: d,
              rangePadding: T,
              tickLength: A,
              tickFormat: $,
              tickPosition: ee,
              ticks: B.map(function(e, t) {
                return {
                  value: e,
                  index: t,
                  from: new Zi.Point({ x: X ? ee(e) : 0, y: X ? 0 : ee(e) }),
                  to: new Zi.Point({
                    x: X ? ee(e) : J * A,
                    y: X ? A * J : ee(e)
                  }),
                  formattedValue: $(e, t)
                };
              })
            })
          )
        : a.a.createElement(
            be,
            { className: ve()("vx-axis", n), top: V, left: b },
            B.map(function(e, t) {
              if (s && 0 === e) return null;
              var n = new Zi.Point({ x: X ? ee(e) : 0, y: X ? 0 : ee(e) }),
                r = new Zi.Point({
                  x: X ? ee(e) : J * A,
                  y: X ? A * J : ee(e)
                }),
                i = I(e, t);
              return (
                (re = Math.max(re, i.fontSize || 0)),
                a.a.createElement(
                  be,
                  {
                    key: "vx-tick-" + e + "-" + t,
                    className: ve()("vx-axis-tick", R),
                    transform: U
                  },
                  !u && a.a.createElement(to, { from: n, to: r, stroke: z }),
                  H
                    ? H(
                        Ml(
                          {
                            x: r.x,
                            y: r.y + (X && !G ? re : 0),
                            formattedValue: $(e, t)
                          },
                          i
                        )
                      )
                    : a.a.createElement(
                        Tl.a,
                        Ml({ x: r.x, y: r.y + (X && !G ? re : 0) }, i),
                        $(e, t)
                      )
                )
              );
            }),
            !o &&
              a.a.createElement(to, {
                className: ve()("vx-axis-line", r),
                from: te,
                to: ne,
                stroke: O,
                strokeWidth: P,
                strokeDasharray: N
              }),
            d &&
              a.a.createElement(
                Tl.a,
                Ml(
                  { className: ve()("vx-axis-label", p) },
                  (function(e) {
                    var t = e.labelOffset,
                      n = e.labelProps,
                      r = e.orientation,
                      a = e.range,
                      i = e.tickLabelFontSize,
                      o = e.tickLength,
                      l = r === Ol.left || r === Ol.top ? -1 : 1,
                      u = void 0,
                      c = void 0,
                      s = null;
                    return (
                      r === Ol.top || r === Ol.bottom
                        ? ((u = (a[0] + a[a.length - 1]) / 2),
                          (c =
                            l *
                            (o + t + i + (r === Ol.bottom ? n.fontSize : 0))))
                        : ((u = l * ((a[0] + a[a.length - 1]) / 2)),
                          (c = -(o + t)),
                          (s = "rotate(" + 90 * l + ")")),
                      { x: u, y: c, transform: s }
                    );
                  })({
                    labelOffset: m,
                    labelProps: g,
                    orientation: _,
                    range: Q,
                    tickLabelFontSize: re,
                    tickLength: A
                  }),
                  g
                ),
                d
              )
          );
    }
    Nl.propTypes = Pl;
    var Rl = {
      axisClassName: ce.a.string,
      axisLineClassName: ce.a.string,
      hideAxisLine: ce.a.bool,
      hideTicks: ce.a.bool,
      hideZero: ce.a.bool,
      label: ce.a.string,
      labelClassName: ce.a.string,
      labelOffset: ce.a.number,
      labelProps: ce.a.object,
      left: ce.a.number,
      numTicks: ce.a.number,
      rangePadding: ce.a.number,
      scale: ce.a.func.isRequired,
      stroke: ce.a.string,
      strokeWidth: ce.a.number,
      strokeDasharray: ce.a.string,
      tickClassName: ce.a.string,
      tickFormat: ce.a.func,
      tickLabelProps: ce.a.func,
      tickLength: ce.a.number,
      tickStroke: ce.a.string,
      tickTransform: ce.a.string,
      tickValues: ce.a.array,
      tickComponent: ce.a.func,
      top: ce.a.number,
      children: ce.a.func
    };
    function Dl(e) {
      var t = e.children,
        n = e.axisClassName,
        r = e.axisLineClassName,
        i = e.hideAxisLine,
        o = e.hideTicks,
        l = e.hideZero,
        u = e.label,
        c = e.labelClassName,
        s = e.labelOffset,
        f = void 0 === s ? 36 : s,
        d = e.labelProps,
        p = e.left,
        h = e.numTicks,
        m = e.rangePadding,
        v = e.scale,
        g = e.stroke,
        y = e.strokeWidth,
        b = e.strokeDasharray,
        w = e.tickClassName,
        k = e.tickFormat,
        x = e.tickLabelProps,
        _ =
          void 0 === x
            ? function(e) {
                e.tick, e.index;
                return {
                  dx: "-0.25em",
                  dy: "0.25em",
                  fill: "black",
                  fontFamily: "Arial",
                  fontSize: 10,
                  textAnchor: "end"
                };
              }
            : x,
        E = e.tickLength,
        T = void 0 === E ? 8 : E,
        S = e.tickStroke,
        C = e.tickTransform,
        O = e.tickValues,
        M = e.tickComponent,
        P = e.top;
      return a.a.createElement(Nl, {
        axisClassName: ve()("vx-axis-left", n),
        axisLineClassName: r,
        hideAxisLine: i,
        hideTicks: o,
        hideZero: l,
        label: u,
        labelClassName: c,
        labelOffset: f,
        labelProps: d,
        left: p,
        numTicks: h,
        orientation: Ol.left,
        rangePadding: m,
        scale: v,
        stroke: g,
        strokeWidth: y,
        strokeDasharray: b,
        tickClassName: w,
        tickFormat: k,
        tickLabelProps: _,
        tickLength: T,
        tickStroke: S,
        tickTransform: C,
        tickValues: O,
        tickComponent: M,
        top: P,
        children: t
      });
    }
    Dl.propTypes = Rl;
    var Ll = {
      axisClassName: ce.a.string,
      axisLineClassName: ce.a.string,
      hideAxisLine: ce.a.bool,
      hideTicks: ce.a.bool,
      hideZero: ce.a.bool,
      label: ce.a.string,
      labelClassName: ce.a.string,
      labelOffset: ce.a.number,
      labelProps: ce.a.object,
      left: ce.a.number,
      numTicks: ce.a.number,
      rangePadding: ce.a.number,
      scale: ce.a.func.isRequired,
      stroke: ce.a.string,
      strokeWidth: ce.a.number,
      strokeDasharray: ce.a.string,
      tickClassName: ce.a.string,
      tickFormat: ce.a.func,
      tickLabelProps: ce.a.func,
      tickLength: ce.a.number,
      tickStroke: ce.a.string,
      tickTransform: ce.a.string,
      tickValues: ce.a.array,
      tickComponent: ce.a.func,
      top: ce.a.number,
      children: ce.a.func
    };
    function Il(e) {
      var t = e.children,
        n = e.axisClassName,
        r = e.axisLineClassName,
        i = e.hideAxisLine,
        o = e.hideTicks,
        l = e.hideZero,
        u = e.label,
        c = e.labelClassName,
        s = e.labelOffset,
        f = void 0 === s ? 36 : s,
        d = e.labelProps,
        p = e.left,
        h = e.numTicks,
        m = e.rangePadding,
        v = e.scale,
        g = e.stroke,
        y = e.strokeWidth,
        b = e.strokeDasharray,
        w = e.tickClassName,
        k = e.tickFormat,
        x = e.tickLabelProps,
        _ =
          void 0 === x
            ? function(e) {
                e.tick, e.index;
                return {
                  dx: "0.25em",
                  dy: "0.25em",
                  fill: "black",
                  fontFamily: "Arial",
                  fontSize: 10,
                  textAnchor: "start"
                };
              }
            : x,
        E = e.tickLength,
        T = void 0 === E ? 8 : E,
        S = e.tickStroke,
        C = e.tickTransform,
        O = e.tickValues,
        M = e.tickComponent,
        P = e.top;
      return a.a.createElement(Nl, {
        axisClassName: ve()("vx-axis-right", n),
        axisLineClassName: r,
        hideAxisLine: i,
        hideTicks: o,
        hideZero: l,
        label: u,
        labelClassName: c,
        labelOffset: f,
        labelProps: d,
        left: p,
        numTicks: h,
        orientation: Ol.right,
        rangePadding: m,
        scale: v,
        stroke: g,
        strokeWidth: y,
        strokeDasharray: b,
        tickClassName: w,
        tickFormat: k,
        tickLabelProps: _,
        tickLength: T,
        tickStroke: S,
        tickTransform: C,
        tickValues: O,
        tickComponent: M,
        top: P,
        children: t
      });
    }
    Il.propTypes = Ll;
    var jl = {
      axisClassName: ce.a.string,
      axisLineClassName: ce.a.string,
      hideAxisLine: ce.a.bool,
      hideTicks: ce.a.bool,
      hideZero: ce.a.bool,
      label: ce.a.string,
      labelClassName: ce.a.string,
      labelOffset: ce.a.number,
      labelProps: ce.a.object,
      left: ce.a.number,
      numTicks: ce.a.number,
      rangePadding: ce.a.number,
      scale: ce.a.func.isRequired,
      stroke: ce.a.string,
      strokeWidth: ce.a.number,
      strokeDasharray: ce.a.string,
      tickClassName: ce.a.string,
      tickFormat: ce.a.func,
      tickLabelProps: ce.a.func,
      tickLength: ce.a.number,
      tickStroke: ce.a.string,
      tickTransform: ce.a.string,
      tickValues: ce.a.array,
      tickComponent: ce.a.func,
      top: ce.a.number,
      children: ce.a.func
    };
    function Al(e) {
      var t = e.children,
        n = e.axisClassName,
        r = e.axisLineClassName,
        i = e.hideAxisLine,
        o = e.hideTicks,
        l = e.hideZero,
        u = e.label,
        c = e.labelClassName,
        s = e.labelOffset,
        f = void 0 === s ? 8 : s,
        d = e.labelProps,
        p = e.left,
        h = e.numTicks,
        m = e.rangePadding,
        v = e.scale,
        g = e.stroke,
        y = e.strokeWidth,
        b = e.strokeDasharray,
        w = e.tickClassName,
        k = e.tickFormat,
        x = e.tickLabelProps,
        _ =
          void 0 === x
            ? function(e) {
                e.tick, e.index;
                return {
                  dy: "-0.25em",
                  fill: "black",
                  fontFamily: "Arial",
                  fontSize: 10,
                  textAnchor: "middle"
                };
              }
            : x,
        E = e.tickLength,
        T = void 0 === E ? 8 : E,
        S = e.tickStroke,
        C = e.tickTransform,
        O = e.tickValues,
        M = e.tickComponent,
        P = e.top;
      return a.a.createElement(Nl, {
        axisClassName: ve()("vx-axis-top", n),
        axisLineClassName: r,
        hideAxisLine: i,
        hideTicks: o,
        hideZero: l,
        label: u,
        labelClassName: c,
        labelOffset: f,
        labelProps: d,
        left: p,
        numTicks: h,
        orientation: Ol.top,
        rangePadding: m,
        scale: v,
        stroke: g,
        strokeWidth: y,
        strokeDasharray: b,
        tickClassName: w,
        tickFormat: k,
        tickLabelProps: _,
        tickLength: T,
        tickStroke: S,
        tickTransform: C,
        tickValues: O,
        tickComponent: M,
        top: P,
        children: t
      });
    }
    Al.propTypes = jl;
    var Fl = {
      axisClassName: ce.a.string,
      axisLineClassName: ce.a.string,
      hideAxisLine: ce.a.bool,
      hideTicks: ce.a.bool,
      hideZero: ce.a.bool,
      label: ce.a.string,
      labelClassName: ce.a.string,
      labelOffset: ce.a.number,
      labelProps: ce.a.object,
      left: ce.a.number,
      numTicks: ce.a.number,
      rangePadding: ce.a.number,
      scale: ce.a.func.isRequired,
      stroke: ce.a.string,
      strokeWidth: ce.a.number,
      strokeDasharray: ce.a.string,
      tickClassName: ce.a.string,
      tickFormat: ce.a.func,
      tickLabelProps: ce.a.func,
      tickLength: ce.a.number,
      tickStroke: ce.a.string,
      tickTransform: ce.a.string,
      tickValues: ce.a.array,
      tickComponent: ce.a.func,
      top: ce.a.number,
      children: ce.a.func
    };
    function zl(e) {
      var t = e.children,
        n = e.axisClassName,
        r = e.axisLineClassName,
        i = e.hideAxisLine,
        o = e.hideTicks,
        l = e.hideZero,
        u = e.label,
        c = e.labelClassName,
        s = e.labelOffset,
        f = void 0 === s ? 8 : s,
        d = e.labelProps,
        p = e.left,
        h = e.numTicks,
        m = e.rangePadding,
        v = e.scale,
        g = e.stroke,
        y = e.strokeWidth,
        b = e.strokeDasharray,
        w = e.tickClassName,
        k = e.tickFormat,
        x = e.tickLabelProps,
        _ =
          void 0 === x
            ? function(e) {
                e.tick, e.index;
                return {
                  dy: "0.25em",
                  fill: "black",
                  fontFamily: "Arial",
                  fontSize: 10,
                  textAnchor: "middle"
                };
              }
            : x,
        E = e.tickLength,
        T = void 0 === E ? 8 : E,
        S = e.tickStroke,
        C = e.tickTransform,
        O = e.tickValues,
        M = e.tickComponent,
        P = e.top;
      return a.a.createElement(Nl, {
        axisClassName: ve()("vx-axis-bottom", n),
        axisLineClassName: r,
        hideAxisLine: i,
        hideTicks: o,
        hideZero: l,
        label: u,
        labelClassName: c,
        labelOffset: f,
        labelProps: d,
        left: p,
        numTicks: h,
        orientation: Ol.bottom,
        rangePadding: m,
        scale: v,
        stroke: g,
        strokeWidth: y,
        strokeDasharray: b,
        tickClassName: w,
        tickFormat: k,
        tickLabelProps: _,
        tickLength: T,
        tickStroke: S,
        tickTransform: C,
        tickValues: O,
        tickComponent: M,
        top: P,
        children: t
      });
    }
    zl.propTypes = Fl;
    var Ul = {
        axisStyles: ai,
        label: ce.a.oneOfType([ce.a.string, ce.a.element]),
        labelProps: ce.a.object,
        numTicks: ce.a.number,
        orientation: ce.a.oneOf(["bottom", "top"]),
        tickStyles: ii,
        tickLabelProps: ce.a.func,
        tickFormat: ce.a.func,
        tickValues: ce.a.arrayOf(ce.a.oneOfType([ce.a.number, ce.a.string])),
        top: ce.a.number,
        left: ce.a.number,
        scale: ce.a.func
      },
      Wl = {
        axisStyles: {},
        label: null,
        labelProps: null,
        left: 0,
        numTicks: null,
        orientation: "bottom",
        scale: null,
        tickFormat: null,
        tickLabelProps: void 0,
        tickStyles: {},
        top: 0,
        tickValues: void 0
      };
    function Hl(e) {
      var t = e.axisStyles,
        n = e.label,
        r = e.labelProps,
        i = e.top,
        o = e.left,
        l = e.numTicks,
        u = e.orientation,
        c = e.scale,
        s = e.tickFormat,
        f = e.tickLabelProps,
        d = e.tickStyles,
        p = e.tickValues;
      if (!c) return null;
      var h = "bottom" === u ? zl : Al,
        m = f;
      return (
        m ||
          (m =
            d.label && d.label[u]
              ? function() {
                  return d.label[u];
                }
              : void 0),
        a.a.createElement(h, {
          top: i,
          left: o,
          hideTicks: !1,
          hideZero: !1,
          label: n,
          labelProps: r || (t.label || {})[u],
          numTicks: l,
          scale: c,
          stroke: t.stroke,
          strokeWidth: t.strokeWidth,
          tickFormat: s,
          tickLength: d.tickLength,
          tickLabelProps: m,
          tickStroke: d.stroke,
          tickValues: p
        })
      );
    }
    (Hl.propTypes = Ul), (Hl.defaultProps = Wl), (Hl.displayName = "XAxis");
    var ql = {
        axisStyles: ai,
        label: ce.a.string,
        labelProps: ce.a.object,
        numTicks: ce.a.number,
        orientation: ce.a.oneOf(["left", "right"]),
        tickStyles: ii,
        tickLabelProps: ce.a.func,
        tickFormat: ce.a.func,
        tickValues: ce.a.arrayOf(ce.a.oneOfType([ce.a.number, ce.a.string])),
        top: ce.a.number,
        left: ce.a.number,
        scale: ce.a.func
      },
      Vl = {
        axisStyles: {},
        label: null,
        labelProps: null,
        left: 0,
        numTicks: 5,
        orientation: "left",
        scale: null,
        tickFormat: null,
        tickLabelProps: void 0,
        tickStyles: {},
        tickValues: void 0,
        top: 0
      };
    function Bl(e) {
      var t = e.axisStyles,
        n = e.label,
        r = e.labelProps,
        i = e.top,
        o = e.left,
        l = e.numTicks,
        u = e.orientation,
        c = e.scale,
        s = e.tickFormat,
        f = e.tickLabelProps,
        d = e.tickStyles,
        p = e.tickValues;
      if (!c) return null;
      var h = "left" === u ? Dl : Il,
        m = f;
      return (
        m ||
          (m =
            d.label && d.label[u]
              ? function() {
                  return d.label[u];
                }
              : void 0),
        a.a.createElement(h, {
          top: i,
          left: o,
          hideTicks: !1,
          hideZero: !1,
          label: n,
          labelProps: r || (t.label || {})[u],
          numTicks: l,
          scale: c,
          stroke: t.stroke,
          strokeWidth: t.strokeWidth,
          tickFormat: s,
          tickLabelProps: m,
          tickLength: d.tickLength,
          tickStroke: d.stroke,
          tickValues: p
        })
      );
    }
    (Bl.propTypes = ql), (Bl.defaultProps = Vl), (Bl.displayName = "YAxis");
    var $l,
      Ql,
      Kl = n(17),
      Yl = n.n(Kl),
      Xl =
        (($l = function(e) {
          var t = e.parentWidth,
            n = le()(e, ["parentWidth"]);
          return a.a.createElement(di, ie()({ width: t }, n));
        }),
        ((Ql = (function(e) {
          var t, n;
          function r(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).state = {
                parentWidth: null,
                parentHeight: null
              }),
              (n.animationFrameID = null),
              (n.debouncedResize = fe()(
                n.resize.bind(he(n)),
                t.debounceTime
              ).bind(he(n))),
              n
            );
          }
          (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n);
          var i = r.prototype;
          return (
            (i.componentDidMount = function() {
              var e = this;
              (this.ro = new de.a(function(t) {
                t.forEach(function(t) {
                  var n = t.contentRect,
                    r = n.width,
                    a = n.height;
                  e.animationFrameID = window.requestAnimationFrame(function() {
                    e.debouncedResize({ width: r, height: a });
                  });
                });
              })),
                this.ro.observe(this.container);
            }),
            (i.componentWillUnmount = function() {
              window.cancelAnimationFrame(this.animationFrameID),
                this.ro.disconnect();
            }),
            (i.resize = function(e) {
              var t = e.width,
                n = e.height;
              this.setState({ parentWidth: t, parentHeight: n });
            }),
            (i.render = function() {
              var e = this,
                t = this.state,
                n = t.parentWidth,
                r = t.parentHeight;
              return a.a.createElement(
                "div",
                {
                  style: { width: "100%", height: "100%" },
                  ref: function(t) {
                    e.container = t;
                  }
                },
                null !== n &&
                  null !== r &&
                  a.a.createElement(
                    $l,
                    pe({ parentWidth: n, parentHeight: r }, this.props)
                  )
              );
            }),
            r
          );
        })(a.a.Component)).propTypes = { debounceTime: ce.a.number }),
        (Ql.defaultProps = { debounceTime: 300 }),
        Ql),
      Zl = function(e) {
        return a.a.createElement(
          Xl,
          {
            ariaLabel: "Histogram",
            orientation: "horizontal",
            cumulative: !1,
            normalized: !0,
            binCount: 15,
            height: 200,
            valueAccessor: function(e) {
              return e;
            },
            binType: "numeric",
            renderTooltip: function(e) {
              e.event;
              var t = e.datum,
                n = (e.data, e.color);
              return a.a.createElement(
                "div",
                null,
                a.a.createElement(
                  "strong",
                  { style: { color: n } },
                  t.bin0,
                  " to ",
                  t.bin1
                ),
                a.a.createElement(
                  "div",
                  null,
                  a.a.createElement("strong", null, "Count "),
                  t.count
                ),
                a.a.createElement(
                  "div",
                  null,
                  a.a.createElement("strong", null, "Cumlative "),
                  t.cumulative
                ),
                a.a.createElement(
                  "div",
                  null,
                  a.a.createElement("strong", null, "Density "),
                  t.density
                )
              );
            }
          },
          a.a.createElement(El, {
            animated: !1,
            fill: "#4698ff",
            rawData: e.raw_data
          }),
          a.a.createElement(Hl, null),
          a.a.createElement(Bl, null)
        );
      },
      Gl = function(e) {
        return a.a.createElement(
          "table",
          { className: Yl.a.summarystats },
          a.a.createElement(
            "thead",
            null,
            a.a.createElement(
              "tr",
              null,
              a.a.createElement("th", null, "Null counts"),
              a.a.createElement("th", null, "Min"),
              a.a.createElement("th", null, "Max"),
              a.a.createElement("th", null, "Mean"),
              a.a.createElement("th", null, "Standard Deviation")
            )
          ),
          a.a.createElement(
            "tbody",
            null,
            a.a.createElement(
              "tr",
              null,
              a.a.createElement("td", null, e.data.null_count),
              a.a.createElement("td", null, e.data.min),
              a.a.createElement("td", null, e.data.max),
              a.a.createElement("td", null, e.data.mean),
              a.a.createElement("td", null, e.data.std_dev)
            )
          )
        );
      },
      Jl = function(e) {
        return a.a.createElement(
          "div",
          { className: Yl.a.onestatistic },
          a.a.createElement(
            "h3",
            null,
            a.a.createElement("span", null, e.header_name)
          ),
          a.a.createElement(Zl, { raw_data: e.column_data }),
          a.a.createElement(Gl, { data: e.summary_data })
        );
      },
      eu = function(e) {
        var t = (function() {
            var t = [],
              n = [],
              r = !0,
              a = !1,
              i = void 0;
            try {
              for (
                var o, l = e.source_details.getHeaders()[Symbol.iterator]();
                !(r = (o = l.next()).done);
                r = !0
              ) {
                var u = o.value,
                  c = e.source_details.getCell(
                    e.source_details.getColumnIndexFromHeaderName(u),
                    0
                  );
                "number" == c.type || "date" == c.type ? t.push(u) : n.push(u);
              }
            } catch (e) {
              (a = !0), (i = e);
            } finally {
              try {
                r || null == l.return || l.return();
              } finally {
                if (a) throw i;
              }
            }
            return [t, n];
          })(),
          n = s()(t, 2),
          r = n[0],
          i = n[1];
        return a.a.createElement(
          "div",
          { className: Yl.a.container },
          i.length > 0 &&
            a.a.createElement(
              "div",
              null,
              a.a.createElement(
                "em",
                null,
                "Non-numerical columns were not summarized:"
              ),
              " ",
              i.map(function(e, t) {
                return a.a.createElement(
                  "span",
                  { key: t },
                  e,
                  t != e.length - 1 && ","
                );
              })
            ),
          r.map(function(t) {
            return a.a.createElement(Jl, {
              header_name: t,
              column_data: e.source_details.getColumn(t),
              summary_data: e.source_details.getSummaryStats(t)
            });
          })
        );
      },
      tu = n(13),
      nu = n.n(tu),
      ru = function(e) {
        var t = Object(r.useContext)(y),
          n = s()(t, 1)[0],
          i = Object(r.useState)({
            selected_name: e.selected_name,
            details: new _({})
          }),
          o = s()(i, 2),
          l = o[0],
          c = o[1];
        Object(r.useEffect)(function() {
          var t, r, a;
          e.selected_name != l.selected_name &&
            u.a.async(function(i) {
              for (;;)
                switch ((i.prev = i.next)) {
                  case 0:
                    if (null !== (t = n.data.findByName(n.selected_config))) {
                      i.next = 3;
                      break;
                    }
                    return i.abrupt("return");
                  case 3:
                    return (r = new M(t)), (i.next = 6), u.a.awrap(r.load());
                  case 6:
                    (a = i.sent).status == M.Status.SUCCESS &&
                      c({ selected_name: e.selected_name, details: a.details });
                  case 8:
                  case "end":
                    return i.stop();
                }
            });
        });
        return a.a.createElement(
          "div",
          { className: nu.a.container },
          a.a.createElement(
            "div",
            { className: nu.a.header },
            e.selected_name &&
              !l.details.isEmpty() &&
              a.a.createElement(function() {
                return a.a.createElement(
                  "div",
                  null,
                  a.a.createElement("h2", null, e.selected_name),
                  a.a.createElement(
                    "span",
                    { className: nu.a.filedetails },
                    " (found ",
                    l.details.getSize().toLocaleString(),
                    "; estimated ",
                    l.details.getEstimatedSize().toLocaleString(),
                    ")"
                  ),
                  a.a.createElement(
                    "span",
                    { className: nu.a.downloadicon },
                    a.a.createElement(
                      "a",
                      { href: l.details.getRawUrl() },
                      a.a.createElement(re, null)
                    )
                  )
                );
              }, null),
            !e.selected_name &&
              l.details.isEmpty() &&
              a.a.createElement(function() {
                return a.a.createElement(
                  "div",
                  null,
                  a.a.createElement(
                    "h2",
                    null,
                    "Please select a data source on the left."
                  )
                );
              }, null)
          ),
          e.selected_name &&
            !l.details.isEmpty() &&
            a.a.createElement(function() {
              return "table" == n.mode
                ? a.a.createElement(ne, { source_details: l.details })
                : a.a.createElement(eu, { source_details: l.details });
            }, null)
        );
      },
      au = n(19),
      iu = n.n(au),
      ou = function() {
        var e = Object(r.useState)({
            selected_config: "",
            mode: "table",
            data: new m([])
          }),
          t = s()(e, 2),
          n = t[0],
          i = t[1];
        return (
          Object(r.useEffect)(function() {
            var e, t;
            u.a.async(function(n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (
                      (e = new g(
                        "https://s3-us-west-2.amazonaws.com/tecton.ai.public/coding_exercise_1/tables.json"
                      )),
                      (n.next = 3),
                      u.a.awrap(e.load())
                    );
                  case 3:
                    (t = n.sent).status == g.Status.SUCCESS &&
                      i({ data: t.data_config });
                  case 5:
                  case "end":
                    return n.stop();
                }
            });
          }, []),
          a.a.createElement(
            "div",
            null,
            a.a.createElement(
              y.Provider,
              { value: [n, i] },
              a.a.createElement(
                "header",
                { className: iu.a.header },
                a.a.createElement(
                  "div",
                  { className: iu.a.pagetitle },
                  "CSV Data Explorer"
                )
              ),
              a.a.createElement(
                "div",
                { className: iu.a.container },
                a.a.createElement(x, null),
                a.a.createElement(ru, { selected_name: n.selected_config })
              )
            )
          )
        );
      };
    o.a.render(a.a.createElement(ou, null), document.getElementById("app")),
      e.hot.accept();
  }
]);
//# sourceMappingURL=bundle.js.map