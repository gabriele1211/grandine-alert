(function () {
  const M = document.createElement("link").relList;
  if (M && M.supports && M.supports("modulepreload")) return;
  for (const x of document.querySelectorAll('link[rel="modulepreload"]')) d(x);
  new MutationObserver((x) => {
    for (const C of x)
      if (C.type === "childList")
        for (const N of C.addedNodes)
          N.tagName === "LINK" && N.rel === "modulepreload" && d(N);
  }).observe(document, { childList: !0, subtree: !0 });
  function j(x) {
    const C = {};
    return (
      x.integrity && (C.integrity = x.integrity),
      x.referrerPolicy && (C.referrerPolicy = x.referrerPolicy),
      x.crossOrigin === "use-credentials"
        ? (C.credentials = "include")
        : x.crossOrigin === "anonymous"
          ? (C.credentials = "omit")
          : (C.credentials = "same-origin"),
      C
    );
  }
  function d(x) {
    if (x.ep) return;
    x.ep = !0;
    const C = j(x);
    fetch(x.href, C);
  }
})();
function Xd(S) {
  return S && S.__esModule && Object.prototype.hasOwnProperty.call(S, "default")
    ? S.default
    : S;
}
var Ef = { exports: {} },
  Ln = {};
var Nd;
function a0() {
  if (Nd) return Ln;
  Nd = 1;
  var S = Symbol.for("react.transitional.element"),
    M = Symbol.for("react.fragment");
  function j(d, x, C) {
    var N = null;
    if (
      (C !== void 0 && (N = "" + C),
      x.key !== void 0 && (N = "" + x.key),
      "key" in x)
    ) {
      C = {};
      for (var Z in x) Z !== "key" && (C[Z] = x[Z]);
    } else C = x;
    return (
      (x = C.ref),
      { $$typeof: S, type: d, key: N, ref: x !== void 0 ? x : null, props: C }
    );
  }
  return ((Ln.Fragment = M), (Ln.jsx = j), (Ln.jsxs = j), Ln);
}
var _d;
function e0() {
  return (_d || ((_d = 1), (Ef.exports = a0())), Ef.exports);
}
var f = e0(),
  Af = { exports: {} },
  W = {};
var Od;
function n0() {
  if (Od) return W;
  Od = 1;
  var S = Symbol.for("react.transitional.element"),
    M = Symbol.for("react.portal"),
    j = Symbol.for("react.fragment"),
    d = Symbol.for("react.strict_mode"),
    x = Symbol.for("react.profiler"),
    C = Symbol.for("react.consumer"),
    N = Symbol.for("react.context"),
    Z = Symbol.for("react.forward_ref"),
    O = Symbol.for("react.suspense"),
    b = Symbol.for("react.memo"),
    D = Symbol.for("react.lazy"),
    R = Symbol.for("react.activity"),
    J = Symbol.iterator;
  function al(r) {
    return r === null || typeof r != "object"
      ? null
      : ((r = (J && r[J]) || r["@@iterator"]),
        typeof r == "function" ? r : null);
  }
  var cl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    I = Object.assign,
    Sl = {};
  function pl(r, T, U) {
    ((this.props = r),
      (this.context = T),
      (this.refs = Sl),
      (this.updater = U || cl));
  }
  ((pl.prototype.isReactComponent = {}),
    (pl.prototype.setState = function (r, T) {
      if (typeof r != "object" && typeof r != "function" && r != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, r, T, "setState");
    }),
    (pl.prototype.forceUpdate = function (r) {
      this.updater.enqueueForceUpdate(this, r, "forceUpdate");
    }));
  function jl() {}
  jl.prototype = pl.prototype;
  function il(r, T, U) {
    ((this.props = r),
      (this.context = T),
      (this.refs = Sl),
      (this.updater = U || cl));
  }
  var hl = (il.prototype = new jl());
  ((hl.constructor = il), I(hl, pl.prototype), (hl.isPureReactComponent = !0));
  var K = Array.isArray;
  function fl() {}
  var L = { H: null, A: null, T: null, S: null },
    Ml = Object.prototype.hasOwnProperty;
  function Tl(r, T, U) {
    var q = U.ref;
    return {
      $$typeof: S,
      type: r,
      key: T,
      ref: q !== void 0 ? q : null,
      props: U,
    };
  }
  function et(r, T) {
    return Tl(r.type, T, r.props);
  }
  function Vl(r) {
    return typeof r == "object" && r !== null && r.$$typeof === S;
  }
  function Xl(r) {
    var T = { "=": "=0", ":": "=2" };
    return (
      "$" +
      r.replace(/[=:]/g, function (U) {
        return T[U];
      })
    );
  }
  var rt = /\/+/g;
  function dt(r, T) {
    return typeof r == "object" && r !== null && r.key != null
      ? Xl("" + r.key)
      : T.toString(36);
  }
  function tt(r) {
    switch (r.status) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw r.reason;
      default:
        switch (
          (typeof r.status == "string"
            ? r.then(fl, fl)
            : ((r.status = "pending"),
              r.then(
                function (T) {
                  r.status === "pending" &&
                    ((r.status = "fulfilled"), (r.value = T));
                },
                function (T) {
                  r.status === "pending" &&
                    ((r.status = "rejected"), (r.reason = T));
                },
              )),
          r.status)
        ) {
          case "fulfilled":
            return r.value;
          case "rejected":
            throw r.reason;
        }
    }
    throw r;
  }
  function z(r, T, U, q, $) {
    var P = typeof r;
    (P === "undefined" || P === "boolean") && (r = null);
    var ol = !1;
    if (r === null) ol = !0;
    else
      switch (P) {
        case "bigint":
        case "string":
        case "number":
          ol = !0;
          break;
        case "object":
          switch (r.$$typeof) {
            case S:
            case M:
              ol = !0;
              break;
            case D:
              return ((ol = r._init), z(ol(r._payload), T, U, q, $));
          }
      }
    if (ol)
      return (
        ($ = $(r)),
        (ol = q === "" ? "." + dt(r, 0) : q),
        K($)
          ? ((U = ""),
            ol != null && (U = ol.replace(rt, "$&/") + "/"),
            z($, T, U, "", function (Kl) {
              return Kl;
            }))
          : $ != null &&
            (Vl($) &&
              ($ = et(
                $,
                U +
                  ($.key == null || (r && r.key === $.key)
                    ? ""
                    : ("" + $.key).replace(rt, "$&/") + "/") +
                  ol,
              )),
            T.push($)),
        1
      );
    ol = 0;
    var Bl = q === "" ? "." : q + ":";
    if (K(r))
      for (var Ul = 0; Ul < r.length; Ul++)
        ((q = r[Ul]), (P = Bl + dt(q, Ul)), (ol += z(q, T, U, P, $)));
    else if (((Ul = al(r)), typeof Ul == "function"))
      for (r = Ul.call(r), Ul = 0; !(q = r.next()).done;)
        ((q = q.value), (P = Bl + dt(q, Ul++)), (ol += z(q, T, U, P, $)));
    else if (P === "object") {
      if (typeof r.then == "function") return z(tt(r), T, U, q, $);
      throw (
        (T = String(r)),
        Error(
          "Objects are not valid as a React child (found: " +
            (T === "[object Object]"
              ? "object with keys {" + Object.keys(r).join(", ") + "}"
              : T) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return ol;
  }
  function _(r, T, U) {
    if (r == null) return r;
    var q = [],
      $ = 0;
    return (
      z(r, q, "", "", function (P) {
        return T.call(U, P, $++);
      }),
      q
    );
  }
  function V(r) {
    if (r._status === -1) {
      var T = r._result;
      ((T = T()),
        T.then(
          function (U) {
            (r._status === 0 || r._status === -1) &&
              ((r._status = 1), (r._result = U));
          },
          function (U) {
            (r._status === 0 || r._status === -1) &&
              ((r._status = 2), (r._result = U));
          },
        ),
        r._status === -1 && ((r._status = 0), (r._result = T)));
    }
    if (r._status === 1) return r._result.default;
    throw r._result;
  }
  var sl =
      typeof reportError == "function"
        ? reportError
        : function (r) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var T = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof r == "object" &&
                  r !== null &&
                  typeof r.message == "string"
                    ? String(r.message)
                    : String(r),
                error: r,
              });
              if (!window.dispatchEvent(T)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", r);
              return;
            }
            console.error(r);
          },
    vl = {
      map: _,
      forEach: function (r, T, U) {
        _(
          r,
          function () {
            T.apply(this, arguments);
          },
          U,
        );
      },
      count: function (r) {
        var T = 0;
        return (
          _(r, function () {
            T++;
          }),
          T
        );
      },
      toArray: function (r) {
        return (
          _(r, function (T) {
            return T;
          }) || []
        );
      },
      only: function (r) {
        if (!Vl(r))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return r;
      },
    };
  return (
    (W.Activity = R),
    (W.Children = vl),
    (W.Component = pl),
    (W.Fragment = j),
    (W.Profiler = x),
    (W.PureComponent = il),
    (W.StrictMode = d),
    (W.Suspense = O),
    (W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = L),
    (W.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (r) {
        return L.H.useMemoCache(r);
      },
    }),
    (W.cache = function (r) {
      return function () {
        return r.apply(null, arguments);
      };
    }),
    (W.cacheSignal = function () {
      return null;
    }),
    (W.cloneElement = function (r, T, U) {
      if (r == null)
        throw Error(
          "The argument must be a React element, but you passed " + r + ".",
        );
      var q = I({}, r.props),
        $ = r.key;
      if (T != null)
        for (P in (T.key !== void 0 && ($ = "" + T.key), T))
          !Ml.call(T, P) ||
            P === "key" ||
            P === "__self" ||
            P === "__source" ||
            (P === "ref" && T.ref === void 0) ||
            (q[P] = T[P]);
      var P = arguments.length - 2;
      if (P === 1) q.children = U;
      else if (1 < P) {
        for (var ol = Array(P), Bl = 0; Bl < P; Bl++)
          ol[Bl] = arguments[Bl + 2];
        q.children = ol;
      }
      return Tl(r.type, $, q);
    }),
    (W.createContext = function (r) {
      return (
        (r = {
          $$typeof: N,
          _currentValue: r,
          _currentValue2: r,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (r.Provider = r),
        (r.Consumer = { $$typeof: C, _context: r }),
        r
      );
    }),
    (W.createElement = function (r, T, U) {
      var q,
        $ = {},
        P = null;
      if (T != null)
        for (q in (T.key !== void 0 && (P = "" + T.key), T))
          Ml.call(T, q) &&
            q !== "key" &&
            q !== "__self" &&
            q !== "__source" &&
            ($[q] = T[q]);
      var ol = arguments.length - 2;
      if (ol === 1) $.children = U;
      else if (1 < ol) {
        for (var Bl = Array(ol), Ul = 0; Ul < ol; Ul++)
          Bl[Ul] = arguments[Ul + 2];
        $.children = Bl;
      }
      if (r && r.defaultProps)
        for (q in ((ol = r.defaultProps), ol))
          $[q] === void 0 && ($[q] = ol[q]);
      return Tl(r, P, $);
    }),
    (W.createRef = function () {
      return { current: null };
    }),
    (W.forwardRef = function (r) {
      return { $$typeof: Z, render: r };
    }),
    (W.isValidElement = Vl),
    (W.lazy = function (r) {
      return { $$typeof: D, _payload: { _status: -1, _result: r }, _init: V };
    }),
    (W.memo = function (r, T) {
      return { $$typeof: b, type: r, compare: T === void 0 ? null : T };
    }),
    (W.startTransition = function (r) {
      var T = L.T,
        U = {};
      L.T = U;
      try {
        var q = r(),
          $ = L.S;
        ($ !== null && $(U, q),
          typeof q == "object" &&
            q !== null &&
            typeof q.then == "function" &&
            q.then(fl, sl));
      } catch (P) {
        sl(P);
      } finally {
        (T !== null && U.types !== null && (T.types = U.types), (L.T = T));
      }
    }),
    (W.unstable_useCacheRefresh = function () {
      return L.H.useCacheRefresh();
    }),
    (W.use = function (r) {
      return L.H.use(r);
    }),
    (W.useActionState = function (r, T, U) {
      return L.H.useActionState(r, T, U);
    }),
    (W.useCallback = function (r, T) {
      return L.H.useCallback(r, T);
    }),
    (W.useContext = function (r) {
      return L.H.useContext(r);
    }),
    (W.useDebugValue = function () {}),
    (W.useDeferredValue = function (r, T) {
      return L.H.useDeferredValue(r, T);
    }),
    (W.useEffect = function (r, T) {
      return L.H.useEffect(r, T);
    }),
    (W.useEffectEvent = function (r) {
      return L.H.useEffectEvent(r);
    }),
    (W.useId = function () {
      return L.H.useId();
    }),
    (W.useImperativeHandle = function (r, T, U) {
      return L.H.useImperativeHandle(r, T, U);
    }),
    (W.useInsertionEffect = function (r, T) {
      return L.H.useInsertionEffect(r, T);
    }),
    (W.useLayoutEffect = function (r, T) {
      return L.H.useLayoutEffect(r, T);
    }),
    (W.useMemo = function (r, T) {
      return L.H.useMemo(r, T);
    }),
    (W.useOptimistic = function (r, T) {
      return L.H.useOptimistic(r, T);
    }),
    (W.useReducer = function (r, T, U) {
      return L.H.useReducer(r, T, U);
    }),
    (W.useRef = function (r) {
      return L.H.useRef(r);
    }),
    (W.useState = function (r) {
      return L.H.useState(r);
    }),
    (W.useSyncExternalStore = function (r, T, U) {
      return L.H.useSyncExternalStore(r, T, U);
    }),
    (W.useTransition = function () {
      return L.H.useTransition();
    }),
    (W.version = "19.2.8"),
    W
  );
}
var Dd;
function Of() {
  return (Dd || ((Dd = 1), (Af.exports = n0())), Af.exports);
}
var w = Of();
const u0 = Xd(w);
var Tf = { exports: {} },
  Qn = {},
  xf = { exports: {} },
  jf = {};
var Ud;
function i0() {
  return (
    Ud ||
      ((Ud = 1),
      (function (S) {
        function M(z, _) {
          var V = z.length;
          z.push(_);
          l: for (; 0 < V;) {
            var sl = (V - 1) >>> 1,
              vl = z[sl];
            if (0 < x(vl, _)) ((z[sl] = _), (z[V] = vl), (V = sl));
            else break l;
          }
        }
        function j(z) {
          return z.length === 0 ? null : z[0];
        }
        function d(z) {
          if (z.length === 0) return null;
          var _ = z[0],
            V = z.pop();
          if (V !== _) {
            z[0] = V;
            l: for (var sl = 0, vl = z.length, r = vl >>> 1; sl < r;) {
              var T = 2 * (sl + 1) - 1,
                U = z[T],
                q = T + 1,
                $ = z[q];
              if (0 > x(U, V))
                q < vl && 0 > x($, U)
                  ? ((z[sl] = $), (z[q] = V), (sl = q))
                  : ((z[sl] = U), (z[T] = V), (sl = T));
              else if (q < vl && 0 > x($, V))
                ((z[sl] = $), (z[q] = V), (sl = q));
              else break l;
            }
          }
          return _;
        }
        function x(z, _) {
          var V = z.sortIndex - _.sortIndex;
          return V !== 0 ? V : z.id - _.id;
        }
        if (
          ((S.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var C = performance;
          S.unstable_now = function () {
            return C.now();
          };
        } else {
          var N = Date,
            Z = N.now();
          S.unstable_now = function () {
            return N.now() - Z;
          };
        }
        var O = [],
          b = [],
          D = 1,
          R = null,
          J = 3,
          al = !1,
          cl = !1,
          I = !1,
          Sl = !1,
          pl = typeof setTimeout == "function" ? setTimeout : null,
          jl = typeof clearTimeout == "function" ? clearTimeout : null,
          il = typeof setImmediate < "u" ? setImmediate : null;
        function hl(z) {
          for (var _ = j(b); _ !== null;) {
            if (_.callback === null) d(b);
            else if (_.startTime <= z)
              (d(b), (_.sortIndex = _.expirationTime), M(O, _));
            else break;
            _ = j(b);
          }
        }
        function K(z) {
          if (((I = !1), hl(z), !cl))
            if (j(O) !== null) ((cl = !0), fl || ((fl = !0), Xl()));
            else {
              var _ = j(b);
              _ !== null && tt(K, _.startTime - z);
            }
        }
        var fl = !1,
          L = -1,
          Ml = 5,
          Tl = -1;
        function et() {
          return Sl ? !0 : !(S.unstable_now() - Tl < Ml);
        }
        function Vl() {
          if (((Sl = !1), fl)) {
            var z = S.unstable_now();
            Tl = z;
            var _ = !0;
            try {
              l: {
                ((cl = !1), I && ((I = !1), jl(L), (L = -1)), (al = !0));
                var V = J;
                try {
                  t: {
                    for (
                      hl(z), R = j(O);
                      R !== null && !(R.expirationTime > z && et());
                    ) {
                      var sl = R.callback;
                      if (typeof sl == "function") {
                        ((R.callback = null), (J = R.priorityLevel));
                        var vl = sl(R.expirationTime <= z);
                        if (((z = S.unstable_now()), typeof vl == "function")) {
                          ((R.callback = vl), hl(z), (_ = !0));
                          break t;
                        }
                        (R === j(O) && d(O), hl(z));
                      } else d(O);
                      R = j(O);
                    }
                    if (R !== null) _ = !0;
                    else {
                      var r = j(b);
                      (r !== null && tt(K, r.startTime - z), (_ = !1));
                    }
                  }
                  break l;
                } finally {
                  ((R = null), (J = V), (al = !1));
                }
                _ = void 0;
              }
            } finally {
              _ ? Xl() : (fl = !1);
            }
          }
        }
        var Xl;
        if (typeof il == "function")
          Xl = function () {
            il(Vl);
          };
        else if (typeof MessageChannel < "u") {
          var rt = new MessageChannel(),
            dt = rt.port2;
          ((rt.port1.onmessage = Vl),
            (Xl = function () {
              dt.postMessage(null);
            }));
        } else
          Xl = function () {
            pl(Vl, 0);
          };
        function tt(z, _) {
          L = pl(function () {
            z(S.unstable_now());
          }, _);
        }
        ((S.unstable_IdlePriority = 5),
          (S.unstable_ImmediatePriority = 1),
          (S.unstable_LowPriority = 4),
          (S.unstable_NormalPriority = 3),
          (S.unstable_Profiling = null),
          (S.unstable_UserBlockingPriority = 2),
          (S.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (S.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Ml = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (S.unstable_getCurrentPriorityLevel = function () {
            return J;
          }),
          (S.unstable_next = function (z) {
            switch (J) {
              case 1:
              case 2:
              case 3:
                var _ = 3;
                break;
              default:
                _ = J;
            }
            var V = J;
            J = _;
            try {
              return z();
            } finally {
              J = V;
            }
          }),
          (S.unstable_requestPaint = function () {
            Sl = !0;
          }),
          (S.unstable_runWithPriority = function (z, _) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                z = 3;
            }
            var V = J;
            J = z;
            try {
              return _();
            } finally {
              J = V;
            }
          }),
          (S.unstable_scheduleCallback = function (z, _, V) {
            var sl = S.unstable_now();
            switch (
              (typeof V == "object" && V !== null
                ? ((V = V.delay),
                  (V = typeof V == "number" && 0 < V ? sl + V : sl))
                : (V = sl),
              z)
            ) {
              case 1:
                var vl = -1;
                break;
              case 2:
                vl = 250;
                break;
              case 5:
                vl = 1073741823;
                break;
              case 4:
                vl = 1e4;
                break;
              default:
                vl = 5e3;
            }
            return (
              (vl = V + vl),
              (z = {
                id: D++,
                callback: _,
                priorityLevel: z,
                startTime: V,
                expirationTime: vl,
                sortIndex: -1,
              }),
              V > sl
                ? ((z.sortIndex = V),
                  M(b, z),
                  j(O) === null &&
                    z === j(b) &&
                    (I ? (jl(L), (L = -1)) : (I = !0), tt(K, V - sl)))
                : ((z.sortIndex = vl),
                  M(O, z),
                  cl || al || ((cl = !0), fl || ((fl = !0), Xl()))),
              z
            );
          }),
          (S.unstable_shouldYield = et),
          (S.unstable_wrapCallback = function (z) {
            var _ = J;
            return function () {
              var V = J;
              J = _;
              try {
                return z.apply(this, arguments);
              } finally {
                J = V;
              }
            };
          }));
      })(jf)),
    jf
  );
}
var Rd;
function c0() {
  return (Rd || ((Rd = 1), (xf.exports = i0())), xf.exports);
}
var Mf = { exports: {} },
  lt = {};
var Cd;
function f0() {
  if (Cd) return lt;
  Cd = 1;
  var S = Of();
  function M(O) {
    var b = "https://react.dev/errors/" + O;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var D = 2; D < arguments.length; D++)
        b += "&args[]=" + encodeURIComponent(arguments[D]);
    }
    return (
      "Minified React error #" +
      O +
      "; visit " +
      b +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function j() {}
  var d = {
      d: {
        f: j,
        r: function () {
          throw Error(M(522));
        },
        D: j,
        C: j,
        L: j,
        m: j,
        X: j,
        S: j,
        M: j,
      },
      p: 0,
      findDOMNode: null,
    },
    x = Symbol.for("react.portal");
  function C(O, b, D) {
    var R =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: x,
      key: R == null ? null : "" + R,
      children: O,
      containerInfo: b,
      implementation: D,
    };
  }
  var N = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Z(O, b) {
    if (O === "font") return "";
    if (typeof b == "string") return b === "use-credentials" ? b : "";
  }
  return (
    (lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d),
    (lt.createPortal = function (O, b) {
      var D =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!b || (b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11))
        throw Error(M(299));
      return C(O, b, null, D);
    }),
    (lt.flushSync = function (O) {
      var b = N.T,
        D = d.p;
      try {
        if (((N.T = null), (d.p = 2), O)) return O();
      } finally {
        ((N.T = b), (d.p = D), d.d.f());
      }
    }),
    (lt.preconnect = function (O, b) {
      typeof O == "string" &&
        (b
          ? ((b = b.crossOrigin),
            (b =
              typeof b == "string"
                ? b === "use-credentials"
                  ? b
                  : ""
                : void 0))
          : (b = null),
        d.d.C(O, b));
    }),
    (lt.prefetchDNS = function (O) {
      typeof O == "string" && d.d.D(O);
    }),
    (lt.preinit = function (O, b) {
      if (typeof O == "string" && b && typeof b.as == "string") {
        var D = b.as,
          R = Z(D, b.crossOrigin),
          J = typeof b.integrity == "string" ? b.integrity : void 0,
          al = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
        D === "style"
          ? d.d.S(O, typeof b.precedence == "string" ? b.precedence : void 0, {
              crossOrigin: R,
              integrity: J,
              fetchPriority: al,
            })
          : D === "script" &&
            d.d.X(O, {
              crossOrigin: R,
              integrity: J,
              fetchPriority: al,
              nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            });
      }
    }),
    (lt.preinitModule = function (O, b) {
      if (typeof O == "string")
        if (typeof b == "object" && b !== null) {
          if (b.as == null || b.as === "script") {
            var D = Z(b.as, b.crossOrigin);
            d.d.M(O, {
              crossOrigin: D,
              integrity: typeof b.integrity == "string" ? b.integrity : void 0,
              nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            });
          }
        } else b == null && d.d.M(O);
    }),
    (lt.preload = function (O, b) {
      if (
        typeof O == "string" &&
        typeof b == "object" &&
        b !== null &&
        typeof b.as == "string"
      ) {
        var D = b.as,
          R = Z(D, b.crossOrigin);
        d.d.L(O, D, {
          crossOrigin: R,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          nonce: typeof b.nonce == "string" ? b.nonce : void 0,
          type: typeof b.type == "string" ? b.type : void 0,
          fetchPriority:
            typeof b.fetchPriority == "string" ? b.fetchPriority : void 0,
          referrerPolicy:
            typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0,
          imageSrcSet:
            typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0,
          imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0,
          media: typeof b.media == "string" ? b.media : void 0,
        });
      }
    }),
    (lt.preloadModule = function (O, b) {
      if (typeof O == "string")
        if (b) {
          var D = Z(b.as, b.crossOrigin);
          d.d.m(O, {
            as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
            crossOrigin: D,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          });
        } else d.d.m(O);
    }),
    (lt.requestFormReset = function (O) {
      d.d.r(O);
    }),
    (lt.unstable_batchedUpdates = function (O, b) {
      return O(b);
    }),
    (lt.useFormState = function (O, b, D) {
      return N.H.useFormState(O, b, D);
    }),
    (lt.useFormStatus = function () {
      return N.H.useHostTransitionStatus();
    }),
    (lt.version = "19.2.8"),
    lt
  );
}
var Hd;
function s0() {
  if (Hd) return Mf.exports;
  Hd = 1;
  function S() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S);
      } catch (M) {
        console.error(M);
      }
  }
  return (S(), (Mf.exports = f0()), Mf.exports);
}
var qd;
function o0() {
  if (qd) return Qn;
  qd = 1;
  var S = c0(),
    M = Of(),
    j = s0();
  function d(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function x(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function C(l) {
    var t = l,
      a = l;
    if (l.alternate) for (; t.return;) t = t.return;
    else {
      l = t;
      do ((t = l), (t.flags & 4098) !== 0 && (a = t.return), (l = t.return));
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function N(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Z(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function O(l) {
    if (C(l) !== l) throw Error(d(188));
  }
  function b(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = C(l)), t === null)) throw Error(d(188));
      return t !== l ? null : l;
    }
    for (var a = l, e = t; ;) {
      var n = a.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((e = n.return), e !== null)) {
          a = e;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u;) {
          if (u === a) return (O(n), l);
          if (u === e) return (O(n), t);
          u = u.sibling;
        }
        throw Error(d(188));
      }
      if (a.return !== e.return) ((a = n), (e = u));
      else {
        for (var i = !1, c = n.child; c;) {
          if (c === a) {
            ((i = !0), (a = n), (e = u));
            break;
          }
          if (c === e) {
            ((i = !0), (e = n), (a = u));
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = u.child; c;) {
            if (c === a) {
              ((i = !0), (a = u), (e = n));
              break;
            }
            if (c === e) {
              ((i = !0), (e = u), (a = n));
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(d(189));
        }
      }
      if (a.alternate !== e) throw Error(d(190));
    }
    if (a.tag !== 3) throw Error(d(188));
    return a.stateNode.current === a ? l : t;
  }
  function D(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null;) {
      if (((t = D(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var R = Object.assign,
    J = Symbol.for("react.element"),
    al = Symbol.for("react.transitional.element"),
    cl = Symbol.for("react.portal"),
    I = Symbol.for("react.fragment"),
    Sl = Symbol.for("react.strict_mode"),
    pl = Symbol.for("react.profiler"),
    jl = Symbol.for("react.consumer"),
    il = Symbol.for("react.context"),
    hl = Symbol.for("react.forward_ref"),
    K = Symbol.for("react.suspense"),
    fl = Symbol.for("react.suspense_list"),
    L = Symbol.for("react.memo"),
    Ml = Symbol.for("react.lazy"),
    Tl = Symbol.for("react.activity"),
    et = Symbol.for("react.memo_cache_sentinel"),
    Vl = Symbol.iterator;
  function Xl(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (Vl && l[Vl]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var rt = Symbol.for("react.client.reference");
  function dt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === rt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case I:
        return "Fragment";
      case pl:
        return "Profiler";
      case Sl:
        return "StrictMode";
      case K:
        return "Suspense";
      case fl:
        return "SuspenseList";
      case Tl:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case cl:
          return "Portal";
        case il:
          return l.displayName || "Context";
        case jl:
          return (l._context.displayName || "Context") + ".Consumer";
        case hl:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case L:
          return (
            (t = l.displayName || null),
            t !== null ? t : dt(l.type) || "Memo"
          );
        case Ml:
          ((t = l._payload), (l = l._init));
          try {
            return dt(l(t));
          } catch {}
      }
    return null;
  }
  var tt = Array.isArray,
    z = M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    _ = j.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    V = { pending: !1, data: null, method: null, action: null },
    sl = [],
    vl = -1;
  function r(l) {
    return { current: l };
  }
  function T(l) {
    0 > vl || ((l.current = sl[vl]), (sl[vl] = null), vl--);
  }
  function U(l, t) {
    (vl++, (sl[vl] = l.current), (l.current = t));
  }
  var q = r(null),
    $ = r(null),
    P = r(null),
    ol = r(null);
  function Bl(l, t) {
    switch ((U(P, t), U($, l), U(q, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Fr(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          ((t = Fr(t)), (l = Ir(t, l)));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    (T(q), U(q, l));
  }
  function Ul() {
    (T(q), T($), T(P));
  }
  function Kl(l) {
    l.memoizedState !== null && U(ol, l);
    var t = q.current,
      a = Ir(t, l.type);
    t !== a && (U($, l), U(q, a));
  }
  function ia(l) {
    ($.current === l && (T(q), T($)),
      ol.current === l && (T(ol), (qn._currentValue = V)));
  }
  var Le, le;
  function zt(l) {
    if (Le === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((Le = (t && t[1]) || ""),
          (le =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Le +
      l +
      le
    );
  }
  var Qt = !1;
  function ca(l, t) {
    if (!l || Qt) return "";
    Qt = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var e = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var A = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(A.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(A, []);
                } catch (g) {
                  var y = g;
                }
                Reflect.construct(l, [], A);
              } else {
                try {
                  A.call();
                } catch (g) {
                  y = g;
                }
                l.call(A.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                y = g;
              }
              (A = l()) &&
                typeof A.catch == "function" &&
                A.catch(function () {});
            }
          } catch (g) {
            if (g && y && typeof g.stack == "string") return [g.stack, y.stack];
          }
          return [null, null];
        },
      };
      e.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        e.DetermineComponentFrameRoot,
        "name",
      );
      n &&
        n.configurable &&
        Object.defineProperty(e.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = e.DetermineComponentFrameRoot(),
        i = u[0],
        c = u[1];
      if (i && c) {
        var s = i.split(`
`),
          v = c.split(`
`);
        for (
          n = e = 0;
          e < s.length && !s[e].includes("DetermineComponentFrameRoot");
        )
          e++;
        for (; n < v.length && !v[n].includes("DetermineComponentFrameRoot");)
          n++;
        if (e === s.length || n === v.length)
          for (
            e = s.length - 1, n = v.length - 1;
            1 <= e && 0 <= n && s[e] !== v[n];
          )
            n--;
        for (; 1 <= e && 0 <= n; e--, n--)
          if (s[e] !== v[n]) {
            if (e !== 1 || n !== 1)
              do
                if ((e--, n--, 0 > n || s[e] !== v[n])) {
                  var p =
                    `
` + s[e].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      p.includes("<anonymous>") &&
                      (p = p.replace("<anonymous>", l.displayName)),
                    p
                  );
                }
              while (1 <= e && 0 <= n);
            break;
          }
      }
    } finally {
      ((Qt = !1), (Error.prepareStackTrace = a));
    }
    return (a = l ? l.displayName || l.name : "") ? zt(a) : "";
  }
  function Qe(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return zt(l.type);
      case 16:
        return zt("Lazy");
      case 13:
        return l.child !== t && t !== null
          ? zt("Suspense Fallback")
          : zt("Suspense");
      case 19:
        return zt("SuspenseList");
      case 0:
      case 15:
        return ca(l.type, !1);
      case 11:
        return ca(l.type.render, !1);
      case 1:
        return ca(l.type, !0);
      case 31:
        return zt("Activity");
      default:
        return "";
    }
  }
  function Xn(l) {
    try {
      var t = "",
        a = null;
      do ((t += Qe(l, a)), (a = l), (l = l.return));
      while (l);
      return t;
    } catch (e) {
      return (
        `
Error generating stack: ` +
        e.message +
        `
` +
        e.stack
      );
    }
  }
  var Xe = Object.prototype.hasOwnProperty,
    Ze = S.unstable_scheduleCallback,
    Ve = S.unstable_cancelCallback,
    ui = S.unstable_shouldYield,
    ii = S.unstable_requestPaint,
    $l = S.unstable_now,
    qt = S.unstable_getCurrentPriorityLevel,
    Ra = S.unstable_ImmediatePriority,
    Ke = S.unstable_UserBlockingPriority,
    Ca = S.unstable_NormalPriority,
    Je = S.unstable_LowPriority,
    Zn = S.unstable_IdlePriority,
    ci = S.log,
    fi = S.unstable_setDisableYieldValue,
    Y = null,
    Q = null;
  function bl(l) {
    if (
      (typeof ci == "function" && fi(l),
      Q && typeof Q.setStrictMode == "function")
    )
      try {
        Q.setStrictMode(Y, l);
      } catch {}
  }
  var Ol = Math.clz32 ? Math.clz32 : Vn,
    fa = Math.log,
    mt = Math.LN2;
  function Vn(l) {
    return ((l >>>= 0), l === 0 ? 32 : (31 - ((fa(l) / mt) | 0)) | 0);
  }
  var we = 256,
    Ha = 262144,
    te = 4194304;
  function Et(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Kn(l, t, a) {
    var e = l.pendingLanes;
    if (e === 0) return 0;
    var n = 0,
      u = l.suspendedLanes,
      i = l.pingedLanes;
    l = l.warmLanes;
    var c = e & 134217727;
    return (
      c !== 0
        ? ((e = c & ~u),
          e !== 0
            ? (n = Et(e))
            : ((i &= c),
              i !== 0
                ? (n = Et(i))
                : a || ((a = c & ~l), a !== 0 && (n = Et(a)))))
        : ((c = e & ~u),
          c !== 0
            ? (n = Et(c))
            : i !== 0
              ? (n = Et(i))
              : a || ((a = e & ~l), a !== 0 && (n = Et(a)))),
      n === 0
        ? 0
        : t !== 0 &&
            t !== n &&
            (t & u) === 0 &&
            ((u = n & -n),
            (a = t & -t),
            u >= a || (u === 32 && (a & 4194048) !== 0))
          ? t
          : n
    );
  }
  function $e(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Zd(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Df() {
    var l = te;
    return ((te <<= 1), (te & 62914560) === 0 && (te = 4194304), l);
  }
  function si(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function We(l, t) {
    ((l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
  }
  function Vd(l, t, a, e, n, u) {
    var i = l.pendingLanes;
    ((l.pendingLanes = a),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= a),
      (l.entangledLanes &= a),
      (l.errorRecoveryDisabledLanes &= a),
      (l.shellSuspendCounter = 0));
    var c = l.entanglements,
      s = l.expirationTimes,
      v = l.hiddenUpdates;
    for (a = i & ~a; 0 < a;) {
      var p = 31 - Ol(a),
        A = 1 << p;
      ((c[p] = 0), (s[p] = -1));
      var y = v[p];
      if (y !== null)
        for (v[p] = null, p = 0; p < y.length; p++) {
          var g = y[p];
          g !== null && (g.lane &= -536870913);
        }
      a &= ~A;
    }
    (e !== 0 && Uf(l, e, 0),
      u !== 0 && n === 0 && l.tag !== 0 && (l.suspendedLanes |= u & ~(i & ~t)));
  }
  function Uf(l, t, a) {
    ((l.pendingLanes |= t), (l.suspendedLanes &= ~t));
    var e = 31 - Ol(t);
    ((l.entangledLanes |= t),
      (l.entanglements[e] = l.entanglements[e] | 1073741824 | (a & 261930)));
  }
  function Rf(l, t) {
    var a = (l.entangledLanes |= t);
    for (l = l.entanglements; a;) {
      var e = 31 - Ol(a),
        n = 1 << e;
      ((n & t) | (l[e] & t) && (l[e] |= t), (a &= ~n));
    }
  }
  function Cf(l, t) {
    var a = t & -t;
    return (
      (a = (a & 42) !== 0 ? 1 : oi(a)),
      (a & (l.suspendedLanes | t)) !== 0 ? 0 : a
    );
  }
  function oi(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function ri(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Hf() {
    var l = _.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : zd(l.type));
  }
  function qf(l, t) {
    var a = _.p;
    try {
      return ((_.p = l), t());
    } finally {
      _.p = a;
    }
  }
  var sa = Math.random().toString(36).slice(2),
    Wl = "__reactFiber$" + sa,
    nt = "__reactProps$" + sa,
    ae = "__reactContainer$" + sa,
    di = "__reactEvents$" + sa,
    Kd = "__reactListeners$" + sa,
    Jd = "__reactHandles$" + sa,
    Bf = "__reactResources$" + sa,
    ke = "__reactMarker$" + sa;
  function mi(l) {
    (delete l[Wl], delete l[nt], delete l[di], delete l[Kd], delete l[Jd]);
  }
  function ee(l) {
    var t = l[Wl];
    if (t) return t;
    for (var a = l.parentNode; a;) {
      if ((t = a[ae] || a[Wl])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (l = ud(l); l !== null;) {
            if ((a = l[Wl])) return a;
            l = ud(l);
          }
        return t;
      }
      ((l = a), (a = l.parentNode));
    }
    return null;
  }
  function ne(l) {
    if ((l = l[Wl] || l[ae])) {
      var t = l.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return l;
    }
    return null;
  }
  function Fe(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(d(33));
  }
  function ue(l) {
    var t = l[Bf];
    return (
      t ||
        (t = l[Bf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Jl(l) {
    l[ke] = !0;
  }
  var Yf = new Set(),
    Gf = {};
  function qa(l, t) {
    (ie(l, t), ie(l + "Capture", t));
  }
  function ie(l, t) {
    for (Gf[l] = t, l = 0; l < t.length; l++) Yf.add(t[l]);
  }
  var wd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Lf = {},
    Qf = {};
  function $d(l) {
    return Xe.call(Qf, l)
      ? !0
      : Xe.call(Lf, l)
        ? !1
        : wd.test(l)
          ? (Qf[l] = !0)
          : ((Lf[l] = !0), !1);
  }
  function Jn(l, t, a) {
    if ($d(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var e = t.toLowerCase().slice(0, 5);
            if (e !== "data-" && e !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function wn(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Xt(l, t, a, e) {
    if (e === null) l.removeAttribute(a);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + e);
    }
  }
  function At(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Xf(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Wd(l, t, a) {
    var e = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (
      !l.hasOwnProperty(t) &&
      typeof e < "u" &&
      typeof e.get == "function" &&
      typeof e.set == "function"
    ) {
      var n = e.get,
        u = e.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (i) {
            ((a = "" + i), u.call(this, i));
          },
        }),
        Object.defineProperty(l, t, { enumerable: e.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (i) {
            a = "" + i;
          },
          stopTracking: function () {
            ((l._valueTracker = null), delete l[t]);
          },
        }
      );
    }
  }
  function hi(l) {
    if (!l._valueTracker) {
      var t = Xf(l) ? "checked" : "value";
      l._valueTracker = Wd(l, t, "" + l[t]);
    }
  }
  function Zf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      e = "";
    return (
      l && (e = Xf(l) ? (l.checked ? "true" : "false") : l.value),
      (l = e),
      l !== a ? (t.setValue(l), !0) : !1
    );
  }
  function $n(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var kd = /[\n"\\]/g;
  function Tt(l) {
    return l.replace(kd, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function vi(l, t, a, e, n, u, i, c) {
    ((l.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.type = i)
        : l.removeAttribute("type"),
      t != null
        ? i === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + At(t))
          : l.value !== "" + At(t) && (l.value = "" + At(t))
        : (i !== "submit" && i !== "reset") || l.removeAttribute("value"),
      t != null
        ? yi(l, i, At(t))
        : a != null
          ? yi(l, i, At(a))
          : e != null && l.removeAttribute("value"),
      n == null && u != null && (l.defaultChecked = !!u),
      n != null &&
        (l.checked = n && typeof n != "function" && typeof n != "symbol"),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.name = "" + At(c))
        : l.removeAttribute("name"));
  }
  function Vf(l, t, a, e, n, u, i, c) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (l.type = u),
      t != null || a != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || t != null)) {
        hi(l);
        return;
      }
      ((a = a != null ? "" + At(a) : ""),
        (t = t != null ? "" + At(t) : a),
        c || t === l.value || (l.value = t),
        (l.defaultValue = t));
    }
    ((e = e ?? n),
      (e = typeof e != "function" && typeof e != "symbol" && !!e),
      (l.checked = c ? l.checked : !!e),
      (l.defaultChecked = !!e),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (l.name = i),
      hi(l));
  }
  function yi(l, t, a) {
    (t === "number" && $n(l.ownerDocument) === l) ||
      l.defaultValue === "" + a ||
      (l.defaultValue = "" + a);
  }
  function ce(l, t, a, e) {
    if (((l = l.options), t)) {
      t = {};
      for (var n = 0; n < a.length; n++) t["$" + a[n]] = !0;
      for (a = 0; a < l.length; a++)
        ((n = t.hasOwnProperty("$" + l[a].value)),
          l[a].selected !== n && (l[a].selected = n),
          n && e && (l[a].defaultSelected = !0));
    } else {
      for (a = "" + At(a), t = null, n = 0; n < l.length; n++) {
        if (l[n].value === a) {
          ((l[n].selected = !0), e && (l[n].defaultSelected = !0));
          return;
        }
        t !== null || l[n].disabled || (t = l[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Kf(l, t, a) {
    if (
      t != null &&
      ((t = "" + At(t)), t !== l.value && (l.value = t), a == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + At(a) : "";
  }
  function Jf(l, t, a, e) {
    if (t == null) {
      if (e != null) {
        if (a != null) throw Error(d(92));
        if (tt(e)) {
          if (1 < e.length) throw Error(d(93));
          e = e[0];
        }
        a = e;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = At(t)),
      (l.defaultValue = a),
      (e = l.textContent),
      e === a && e !== "" && e !== null && (l.value = e),
      hi(l));
  }
  function fe(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Fd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function wf(l, t, a) {
    var e = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? e
        ? l.setProperty(t, "")
        : t === "float"
          ? (l.cssFloat = "")
          : (l[t] = "")
      : e
        ? l.setProperty(t, a)
        : typeof a != "number" || a === 0 || Fd.has(t)
          ? t === "float"
            ? (l.cssFloat = a)
            : (l[t] = ("" + a).trim())
          : (l[t] = a + "px");
  }
  function $f(l, t, a) {
    if (t != null && typeof t != "object") throw Error(d(62));
    if (((l = l.style), a != null)) {
      for (var e in a)
        !a.hasOwnProperty(e) ||
          (t != null && t.hasOwnProperty(e)) ||
          (e.indexOf("--") === 0
            ? l.setProperty(e, "")
            : e === "float"
              ? (l.cssFloat = "")
              : (l[e] = ""));
      for (var n in t)
        ((e = t[n]), t.hasOwnProperty(n) && a[n] !== e && wf(l, n, e));
    } else for (var u in t) t.hasOwnProperty(u) && wf(l, u, t[u]);
  }
  function gi(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var Id = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Pd =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Wn(l) {
    return Pd.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function Zt() {}
  var Si = null;
  function pi(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var se = null,
    oe = null;
  function Wf(l) {
    var t = ne(l);
    if (t && (l = t.stateNode)) {
      var a = l[nt] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (vi(
              l,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = l; a.parentNode;) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + Tt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var e = a[t];
              if (e !== l && e.form === l.form) {
                var n = e[nt] || null;
                if (!n) throw Error(d(90));
                vi(
                  e,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name,
                );
              }
            }
            for (t = 0; t < a.length; t++)
              ((e = a[t]), e.form === l.form && Zf(e));
          }
          break l;
        case "textarea":
          Kf(l, a.value, a.defaultValue);
          break l;
        case "select":
          ((t = a.value), t != null && ce(l, !!a.multiple, t, !1));
      }
    }
  }
  var bi = !1;
  function kf(l, t, a) {
    if (bi) return l(t, a);
    bi = !0;
    try {
      var e = l(t);
      return e;
    } finally {
      if (
        ((bi = !1),
        (se !== null || oe !== null) &&
          (qu(), se && ((t = se), (l = oe), (oe = se = null), Wf(t), l)))
      )
        for (t = 0; t < l.length; t++) Wf(l[t]);
    }
  }
  function Ie(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var e = a[nt] || null;
    if (e === null) return null;
    a = e[t];
    l: switch (t) {
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
      case "onMouseEnter":
        ((e = !e.disabled) ||
          ((l = l.type),
          (e = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !e));
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(d(231, t, typeof a));
    return a;
  }
  var Vt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    zi = !1;
  if (Vt)
    try {
      var Pe = {};
      (Object.defineProperty(Pe, "passive", {
        get: function () {
          zi = !0;
        },
      }),
        window.addEventListener("test", Pe, Pe),
        window.removeEventListener("test", Pe, Pe));
    } catch {
      zi = !1;
    }
  var oa = null,
    Ei = null,
    kn = null;
  function Ff() {
    if (kn) return kn;
    var l,
      t = Ei,
      a = t.length,
      e,
      n = "value" in oa ? oa.value : oa.textContent,
      u = n.length;
    for (l = 0; l < a && t[l] === n[l]; l++);
    var i = a - l;
    for (e = 1; e <= i && t[a - e] === n[u - e]; e++);
    return (kn = n.slice(l, 1 < e ? 1 - e : void 0));
  }
  function Fn(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function In() {
    return !0;
  }
  function If() {
    return !1;
  }
  function ut(l) {
    function t(a, e, n, u, i) {
      ((this._reactName = a),
        (this._targetInst = n),
        (this.type = e),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null));
      for (var c in l)
        l.hasOwnProperty(c) && ((a = l[c]), (this[c] = a ? a(u) : u[c]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? In
          : If),
        (this.isPropagationStopped = If),
        this
      );
    }
    return (
      R(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = In));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = In));
        },
        persist: function () {},
        isPersistent: In,
      }),
      t
    );
  }
  var Ba = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Pn = ut(Ba),
    ln = R({}, Ba, { view: 0, detail: 0 }),
    lm = ut(ln),
    Ai,
    Ti,
    tn,
    lu = R({}, ln, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ji,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== tn &&
              (tn && l.type === "mousemove"
                ? ((Ai = l.screenX - tn.screenX), (Ti = l.screenY - tn.screenY))
                : (Ti = Ai = 0),
              (tn = l)),
            Ai);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : Ti;
      },
    }),
    Pf = ut(lu),
    tm = R({}, lu, { dataTransfer: 0 }),
    am = ut(tm),
    em = R({}, ln, { relatedTarget: 0 }),
    xi = ut(em),
    nm = R({}, Ba, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    um = ut(nm),
    im = R({}, Ba, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    cm = ut(im),
    fm = R({}, Ba, { data: 0 }),
    ls = ut(fm),
    sm = {
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
      MozPrintableKey: "Unidentified",
    },
    om = {
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
      224: "Meta",
    },
    rm = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function dm(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = rm[l])
        ? !!t[l]
        : !1;
  }
  function ji() {
    return dm;
  }
  var mm = R({}, ln, {
      key: function (l) {
        if (l.key) {
          var t = sm[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Fn(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
            ? om[l.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ji,
      charCode: function (l) {
        return l.type === "keypress" ? Fn(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Fn(l)
          : l.type === "keydown" || l.type === "keyup"
            ? l.keyCode
            : 0;
      },
    }),
    hm = ut(mm),
    vm = R({}, lu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ts = ut(vm),
    ym = R({}, ln, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ji,
    }),
    gm = ut(ym),
    Sm = R({}, Ba, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    pm = ut(Sm),
    bm = R({}, lu, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
            ? -l.wheelDeltaX
            : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
            ? -l.wheelDeltaY
            : "wheelDelta" in l
              ? -l.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    zm = ut(bm),
    Em = R({}, Ba, { newState: 0, oldState: 0 }),
    Am = ut(Em),
    Tm = [9, 13, 27, 32],
    Mi = Vt && "CompositionEvent" in window,
    an = null;
  Vt && "documentMode" in document && (an = document.documentMode);
  var xm = Vt && "TextEvent" in window && !an,
    as = Vt && (!Mi || (an && 8 < an && 11 >= an)),
    es = " ",
    ns = !1;
  function us(l, t) {
    switch (l) {
      case "keyup":
        return Tm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function is(l) {
    return (
      (l = l.detail),
      typeof l == "object" && "data" in l ? l.data : null
    );
  }
  var re = !1;
  function jm(l, t) {
    switch (l) {
      case "compositionend":
        return is(t);
      case "keypress":
        return t.which !== 32 ? null : ((ns = !0), es);
      case "textInput":
        return ((l = t.data), l === es && ns ? null : l);
      default:
        return null;
    }
  }
  function Mm(l, t) {
    if (re)
      return l === "compositionend" || (!Mi && us(l, t))
        ? ((l = Ff()), (kn = Ei = oa = null), (re = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return as && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Nm = {
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
    week: !0,
  };
  function cs(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Nm[l.type] : t === "textarea";
  }
  function fs(l, t, a, e) {
    (se ? (oe ? oe.push(e) : (oe = [e])) : (se = e),
      (t = Zu(t, "onChange")),
      0 < t.length &&
        ((a = new Pn("onChange", "change", null, a, e)),
        l.push({ event: a, listeners: t })));
  }
  var en = null,
    nn = null;
  function _m(l) {
    Kr(l, 0);
  }
  function tu(l) {
    var t = Fe(l);
    if (Zf(t)) return l;
  }
  function ss(l, t) {
    if (l === "change") return t;
  }
  var os = !1;
  if (Vt) {
    var Ni;
    if (Vt) {
      var _i = "oninput" in document;
      if (!_i) {
        var rs = document.createElement("div");
        (rs.setAttribute("oninput", "return;"),
          (_i = typeof rs.oninput == "function"));
      }
      Ni = _i;
    } else Ni = !1;
    os = Ni && (!document.documentMode || 9 < document.documentMode);
  }
  function ds() {
    en && (en.detachEvent("onpropertychange", ms), (nn = en = null));
  }
  function ms(l) {
    if (l.propertyName === "value" && tu(nn)) {
      var t = [];
      (fs(t, nn, l, pi(l)), kf(_m, t));
    }
  }
  function Om(l, t, a) {
    l === "focusin"
      ? (ds(), (en = t), (nn = a), en.attachEvent("onpropertychange", ms))
      : l === "focusout" && ds();
  }
  function Dm(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return tu(nn);
  }
  function Um(l, t) {
    if (l === "click") return tu(t);
  }
  function Rm(l, t) {
    if (l === "input" || l === "change") return tu(t);
  }
  function Cm(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var ht = typeof Object.is == "function" ? Object.is : Cm;
  function un(l, t) {
    if (ht(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(l),
      e = Object.keys(t);
    if (a.length !== e.length) return !1;
    for (e = 0; e < a.length; e++) {
      var n = a[e];
      if (!Xe.call(t, n) || !ht(l[n], t[n])) return !1;
    }
    return !0;
  }
  function hs(l) {
    for (; l && l.firstChild;) l = l.firstChild;
    return l;
  }
  function vs(l, t) {
    var a = hs(l);
    l = 0;
    for (var e; a;) {
      if (a.nodeType === 3) {
        if (((e = l + a.textContent.length), l <= t && e >= t))
          return { node: a, offset: t - l };
        l = e;
      }
      l: {
        for (; a;) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = hs(a);
    }
  }
  function ys(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? ys(l, t.parentNode)
            : "contains" in l
              ? l.contains(t)
              : l.compareDocumentPosition
                ? !!(l.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function gs(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = $n(l.document); t instanceof l.HTMLIFrameElement;) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = $n(l.document);
    }
    return t;
  }
  function Oi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var Hm = Vt && "documentMode" in document && 11 >= document.documentMode,
    de = null,
    Di = null,
    cn = null,
    Ui = !1;
  function Ss(l, t, a) {
    var e =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Ui ||
      de == null ||
      de !== $n(e) ||
      ((e = de),
      "selectionStart" in e && Oi(e)
        ? (e = { start: e.selectionStart, end: e.selectionEnd })
        : ((e = (
            (e.ownerDocument && e.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (e = {
            anchorNode: e.anchorNode,
            anchorOffset: e.anchorOffset,
            focusNode: e.focusNode,
            focusOffset: e.focusOffset,
          })),
      (cn && un(cn, e)) ||
        ((cn = e),
        (e = Zu(Di, "onSelect")),
        0 < e.length &&
          ((t = new Pn("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: e }),
          (t.target = de))));
  }
  function Ya(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var me = {
      animationend: Ya("Animation", "AnimationEnd"),
      animationiteration: Ya("Animation", "AnimationIteration"),
      animationstart: Ya("Animation", "AnimationStart"),
      transitionrun: Ya("Transition", "TransitionRun"),
      transitionstart: Ya("Transition", "TransitionStart"),
      transitioncancel: Ya("Transition", "TransitionCancel"),
      transitionend: Ya("Transition", "TransitionEnd"),
    },
    Ri = {},
    ps = {};
  Vt &&
    ((ps = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete me.animationend.animation,
      delete me.animationiteration.animation,
      delete me.animationstart.animation),
    "TransitionEvent" in window || delete me.transitionend.transition);
  function Ga(l) {
    if (Ri[l]) return Ri[l];
    if (!me[l]) return l;
    var t = me[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in ps) return (Ri[l] = t[a]);
    return l;
  }
  var bs = Ga("animationend"),
    zs = Ga("animationiteration"),
    Es = Ga("animationstart"),
    qm = Ga("transitionrun"),
    Bm = Ga("transitionstart"),
    Ym = Ga("transitioncancel"),
    As = Ga("transitionend"),
    Ts = new Map(),
    Ci =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Ci.push("scrollEnd");
  function Rt(l, t) {
    (Ts.set(l, t), qa(t, [l]));
  }
  var au =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    xt = [],
    he = 0,
    Hi = 0;
  function eu() {
    for (var l = he, t = (Hi = he = 0); t < l;) {
      var a = xt[t];
      xt[t++] = null;
      var e = xt[t];
      xt[t++] = null;
      var n = xt[t];
      xt[t++] = null;
      var u = xt[t];
      if (((xt[t++] = null), e !== null && n !== null)) {
        var i = e.pending;
        (i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
          (e.pending = n));
      }
      u !== 0 && xs(a, n, u);
    }
  }
  function nu(l, t, a, e) {
    ((xt[he++] = l),
      (xt[he++] = t),
      (xt[he++] = a),
      (xt[he++] = e),
      (Hi |= e),
      (l.lanes |= e),
      (l = l.alternate),
      l !== null && (l.lanes |= e));
  }
  function qi(l, t, a, e) {
    return (nu(l, t, a, e), uu(l));
  }
  function La(l, t) {
    return (nu(l, null, null, t), uu(l));
  }
  function xs(l, t, a) {
    l.lanes |= a;
    var e = l.alternate;
    e !== null && (e.lanes |= a);
    for (var n = !1, u = l.return; u !== null;)
      ((u.childLanes |= a),
        (e = u.alternate),
        e !== null && (e.childLanes |= a),
        u.tag === 22 &&
          ((l = u.stateNode), l === null || l._visibility & 1 || (n = !0)),
        (l = u),
        (u = u.return));
    return l.tag === 3
      ? ((u = l.stateNode),
        n &&
          t !== null &&
          ((n = 31 - Ol(a)),
          (l = u.hiddenUpdates),
          (e = l[n]),
          e === null ? (l[n] = [t]) : e.push(t),
          (t.lane = a | 536870912)),
        u)
      : null;
  }
  function uu(l) {
    if (50 < _n) throw ((_n = 0), (Kc = null), Error(d(185)));
    for (var t = l.return; t !== null;) ((l = t), (t = l.return));
    return l.tag === 3 ? l.stateNode : null;
  }
  var ve = {};
  function Gm(l, t, a, e) {
    ((this.tag = l),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = e),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function vt(l, t, a, e) {
    return new Gm(l, t, a, e);
  }
  function Bi(l) {
    return ((l = l.prototype), !(!l || !l.isReactComponent));
  }
  function Kt(l, t) {
    var a = l.alternate;
    return (
      a === null
        ? ((a = vt(l.tag, t, l.key, l.mode)),
          (a.elementType = l.elementType),
          (a.type = l.type),
          (a.stateNode = l.stateNode),
          (a.alternate = l),
          (l.alternate = a))
        : ((a.pendingProps = t),
          (a.type = l.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = l.flags & 65011712),
      (a.childLanes = l.childLanes),
      (a.lanes = l.lanes),
      (a.child = l.child),
      (a.memoizedProps = l.memoizedProps),
      (a.memoizedState = l.memoizedState),
      (a.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = l.sibling),
      (a.index = l.index),
      (a.ref = l.ref),
      (a.refCleanup = l.refCleanup),
      a
    );
  }
  function js(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return (
      a === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = a.childLanes),
          (l.lanes = a.lanes),
          (l.child = a.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = a.memoizedProps),
          (l.memoizedState = a.memoizedState),
          (l.updateQueue = a.updateQueue),
          (l.type = a.type),
          (t = a.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function iu(l, t, a, e, n, u) {
    var i = 0;
    if (((e = l), typeof l == "function")) Bi(l) && (i = 1);
    else if (typeof l == "string")
      i = Vh(l, a, q.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
          ? 27
          : 5;
    else
      l: switch (l) {
        case Tl:
          return (
            (l = vt(31, a, t, n)),
            (l.elementType = Tl),
            (l.lanes = u),
            l
          );
        case I:
          return Qa(a.children, n, u, t);
        case Sl:
          ((i = 8), (n |= 24));
          break;
        case pl:
          return (
            (l = vt(12, a, t, n | 2)),
            (l.elementType = pl),
            (l.lanes = u),
            l
          );
        case K:
          return ((l = vt(13, a, t, n)), (l.elementType = K), (l.lanes = u), l);
        case fl:
          return (
            (l = vt(19, a, t, n)),
            (l.elementType = fl),
            (l.lanes = u),
            l
          );
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case il:
                i = 10;
                break l;
              case jl:
                i = 9;
                break l;
              case hl:
                i = 11;
                break l;
              case L:
                i = 14;
                break l;
              case Ml:
                ((i = 16), (e = null));
                break l;
            }
          ((i = 29),
            (a = Error(d(130, l === null ? "null" : typeof l, ""))),
            (e = null));
      }
    return (
      (t = vt(i, a, t, n)),
      (t.elementType = l),
      (t.type = e),
      (t.lanes = u),
      t
    );
  }
  function Qa(l, t, a, e) {
    return ((l = vt(7, l, e, t)), (l.lanes = a), l);
  }
  function Yi(l, t, a) {
    return ((l = vt(6, l, null, t)), (l.lanes = a), l);
  }
  function Ms(l) {
    var t = vt(18, null, null, 0);
    return ((t.stateNode = l), t);
  }
  function Gi(l, t, a) {
    return (
      (t = vt(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var Ns = new WeakMap();
  function jt(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = Ns.get(l);
      return a !== void 0
        ? a
        : ((t = { value: l, source: t, stack: Xn(t) }), Ns.set(l, t), t);
    }
    return { value: l, source: t, stack: Xn(t) };
  }
  var ye = [],
    ge = 0,
    cu = null,
    fn = 0,
    Mt = [],
    Nt = 0,
    ra = null,
    Bt = 1,
    Yt = "";
  function Jt(l, t) {
    ((ye[ge++] = fn), (ye[ge++] = cu), (cu = l), (fn = t));
  }
  function _s(l, t, a) {
    ((Mt[Nt++] = Bt), (Mt[Nt++] = Yt), (Mt[Nt++] = ra), (ra = l));
    var e = Bt;
    l = Yt;
    var n = 32 - Ol(e) - 1;
    ((e &= ~(1 << n)), (a += 1));
    var u = 32 - Ol(t) + n;
    if (30 < u) {
      var i = n - (n % 5);
      ((u = (e & ((1 << i) - 1)).toString(32)),
        (e >>= i),
        (n -= i),
        (Bt = (1 << (32 - Ol(t) + n)) | (a << n) | e),
        (Yt = u + l));
    } else ((Bt = (1 << u) | (a << n) | e), (Yt = l));
  }
  function Li(l) {
    l.return !== null && (Jt(l, 1), _s(l, 1, 0));
  }
  function Qi(l) {
    for (; l === cu;)
      ((cu = ye[--ge]), (ye[ge] = null), (fn = ye[--ge]), (ye[ge] = null));
    for (; l === ra;)
      ((ra = Mt[--Nt]),
        (Mt[Nt] = null),
        (Yt = Mt[--Nt]),
        (Mt[Nt] = null),
        (Bt = Mt[--Nt]),
        (Mt[Nt] = null));
  }
  function Os(l, t) {
    ((Mt[Nt++] = Bt),
      (Mt[Nt++] = Yt),
      (Mt[Nt++] = ra),
      (Bt = t.id),
      (Yt = t.overflow),
      (ra = l));
  }
  var kl = null,
    Nl = null,
    ul = !1,
    da = null,
    _t = !1,
    Xi = Error(d(519));
  function ma(l) {
    var t = Error(
      d(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (sn(jt(t, l)), Xi);
  }
  function Ds(l) {
    var t = l.stateNode,
      a = l.type,
      e = l.memoizedProps;
    switch (((t[Wl] = l), (t[nt] = e), a)) {
      case "dialog":
        (tl("cancel", t), tl("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        tl("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Dn.length; a++) tl(Dn[a], t);
        break;
      case "source":
        tl("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (tl("error", t), tl("load", t));
        break;
      case "details":
        tl("toggle", t);
        break;
      case "input":
        (tl("invalid", t),
          Vf(
            t,
            e.value,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name,
            !0,
          ));
        break;
      case "select":
        tl("invalid", t);
        break;
      case "textarea":
        (tl("invalid", t), Jf(t, e.value, e.defaultValue, e.children));
    }
    ((a = e.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      e.suppressHydrationWarning === !0 ||
      Wr(t.textContent, a)
        ? (e.popover != null && (tl("beforetoggle", t), tl("toggle", t)),
          e.onScroll != null && tl("scroll", t),
          e.onScrollEnd != null && tl("scrollend", t),
          e.onClick != null && (t.onclick = Zt),
          (t = !0))
        : (t = !1),
      t || ma(l, !0));
  }
  function Us(l) {
    for (kl = l.return; kl;)
      switch (kl.tag) {
        case 5:
        case 31:
        case 13:
          _t = !1;
          return;
        case 27:
        case 3:
          _t = !0;
          return;
        default:
          kl = kl.return;
      }
  }
  function Se(l) {
    if (l !== kl) return !1;
    if (!ul) return (Us(l), (ul = !0), !1);
    var t = l.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = l.type),
          (a =
            !(a !== "form" && a !== "button") || cf(l.type, l.memoizedProps))),
        (a = !a)),
      a && Nl && ma(l),
      Us(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(d(317));
      Nl = nd(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(d(317));
      Nl = nd(l);
    } else
      t === 27
        ? ((t = Nl), Ma(l.type) ? ((l = df), (df = null), (Nl = l)) : (Nl = t))
        : (Nl = kl ? Dt(l.stateNode.nextSibling) : null);
    return !0;
  }
  function Xa() {
    ((Nl = kl = null), (ul = !1));
  }
  function Zi() {
    var l = da;
    return (
      l !== null &&
        (st === null ? (st = l) : st.push.apply(st, l), (da = null)),
      l
    );
  }
  function sn(l) {
    da === null ? (da = [l]) : da.push(l);
  }
  var Vi = r(null),
    Za = null,
    wt = null;
  function ha(l, t, a) {
    (U(Vi, t._currentValue), (t._currentValue = a));
  }
  function $t(l) {
    ((l._currentValue = Vi.current), T(Vi));
  }
  function Ki(l, t, a) {
    for (; l !== null;) {
      var e = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), e !== null && (e.childLanes |= t))
          : e !== null && (e.childLanes & t) !== t && (e.childLanes |= t),
        l === a)
      )
        break;
      l = l.return;
    }
  }
  function Ji(l, t, a, e) {
    var n = l.child;
    for (n !== null && (n.return = l); n !== null;) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        l: for (; u !== null;) {
          var c = u;
          u = n;
          for (var s = 0; s < t.length; s++)
            if (c.context === t[s]) {
              ((u.lanes |= a),
                (c = u.alternate),
                c !== null && (c.lanes |= a),
                Ki(u.return, a, l),
                e || (i = null));
              break l;
            }
          u = c.next;
        }
      } else if (n.tag === 18) {
        if (((i = n.return), i === null)) throw Error(d(341));
        ((i.lanes |= a),
          (u = i.alternate),
          u !== null && (u.lanes |= a),
          Ki(i, a, l),
          (i = null));
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null;) {
          if (i === l) {
            i = null;
            break;
          }
          if (((n = i.sibling), n !== null)) {
            ((n.return = i.return), (i = n));
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function pe(l, t, a, e) {
    l = null;
    for (var n = t, u = !1; n !== null;) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(d(387));
        if (((i = i.memoizedProps), i !== null)) {
          var c = n.type;
          ht(n.pendingProps.value, i.value) ||
            (l !== null ? l.push(c) : (l = [c]));
        }
      } else if (n === ol.current) {
        if (((i = n.alternate), i === null)) throw Error(d(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (l !== null ? l.push(qn) : (l = [qn]));
      }
      n = n.return;
    }
    (l !== null && Ji(t, l, a, e), (t.flags |= 262144));
  }
  function fu(l) {
    for (l = l.firstContext; l !== null;) {
      if (!ht(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Va(l) {
    ((Za = l),
      (wt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null));
  }
  function Fl(l) {
    return Rs(Za, l);
  }
  function su(l, t) {
    return (Za === null && Va(l), Rs(l, t));
  }
  function Rs(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), wt === null)) {
      if (l === null) throw Error(d(308));
      ((wt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288));
    } else wt = wt.next = t;
    return a;
  }
  var Lm =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, e) {
                  l.push(e);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                l.forEach(function (a) {
                  return a();
                }));
            };
          },
    Qm = S.unstable_scheduleCallback,
    Xm = S.unstable_NormalPriority,
    Yl = {
      $$typeof: il,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function wi() {
    return { controller: new Lm(), data: new Map(), refCount: 0 };
  }
  function on(l) {
    (l.refCount--,
      l.refCount === 0 &&
        Qm(Xm, function () {
          l.controller.abort();
        }));
  }
  var rn = null,
    $i = 0,
    be = 0,
    ze = null;
  function Zm(l, t) {
    if (rn === null) {
      var a = (rn = []);
      (($i = 0),
        (be = Fc()),
        (ze = {
          status: "pending",
          value: void 0,
          then: function (e) {
            a.push(e);
          },
        }));
    }
    return ($i++, t.then(Cs, Cs), t);
  }
  function Cs() {
    if (--$i === 0 && rn !== null) {
      ze !== null && (ze.status = "fulfilled");
      var l = rn;
      ((rn = null), (be = 0), (ze = null));
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Vm(l, t) {
    var a = [],
      e = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          a.push(n);
        },
      };
    return (
      l.then(
        function () {
          ((e.status = "fulfilled"), (e.value = t));
          for (var n = 0; n < a.length; n++) (0, a[n])(t);
        },
        function (n) {
          for (e.status = "rejected", e.reason = n, n = 0; n < a.length; n++)
            (0, a[n])(void 0);
        },
      ),
      e
    );
  }
  var Hs = z.S;
  z.S = function (l, t) {
    ((pr = $l()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Zm(l, t),
      Hs !== null && Hs(l, t));
  };
  var Ka = r(null);
  function Wi() {
    var l = Ka.current;
    return l !== null ? l : xl.pooledCache;
  }
  function ou(l, t) {
    t === null ? U(Ka, Ka.current) : U(Ka, t.pool);
  }
  function qs() {
    var l = Wi();
    return l === null ? null : { parent: Yl._currentValue, pool: l };
  }
  var Ee = Error(d(460)),
    ki = Error(d(474)),
    ru = Error(d(542)),
    du = { then: function () {} };
  function Bs(l) {
    return ((l = l.status), l === "fulfilled" || l === "rejected");
  }
  function Ys(l, t, a) {
    switch (
      ((a = l[a]),
      a === void 0 ? l.push(t) : a !== t && (t.then(Zt, Zt), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), Ls(l), l);
      default:
        if (typeof t.status == "string") t.then(Zt, Zt);
        else {
          if (((l = xl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(d(482));
          ((l = t),
            (l.status = "pending"),
            l.then(
              function (e) {
                if (t.status === "pending") {
                  var n = t;
                  ((n.status = "fulfilled"), (n.value = e));
                }
              },
              function (e) {
                if (t.status === "pending") {
                  var n = t;
                  ((n.status = "rejected"), (n.reason = e));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), Ls(l), l);
        }
        throw ((wa = t), Ee);
    }
  }
  function Ja(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((wa = a), Ee)
        : a;
    }
  }
  var wa = null;
  function Gs() {
    if (wa === null) throw Error(d(459));
    var l = wa;
    return ((wa = null), l);
  }
  function Ls(l) {
    if (l === Ee || l === ru) throw Error(d(483));
  }
  var Ae = null,
    dn = 0;
  function mu(l) {
    var t = dn;
    return ((dn += 1), Ae === null && (Ae = []), Ys(Ae, l, t));
  }
  function mn(l, t) {
    ((t = t.props.ref), (l.ref = t !== void 0 ? t : null));
  }
  function hu(l, t) {
    throw t.$$typeof === J
      ? Error(d(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          d(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l,
          ),
        ));
  }
  function Qs(l) {
    function t(m, o) {
      if (l) {
        var h = m.deletions;
        h === null ? ((m.deletions = [o]), (m.flags |= 16)) : h.push(o);
      }
    }
    function a(m, o) {
      if (!l) return null;
      for (; o !== null;) (t(m, o), (o = o.sibling));
      return null;
    }
    function e(m) {
      for (var o = new Map(); m !== null;)
        (m.key !== null ? o.set(m.key, m) : o.set(m.index, m), (m = m.sibling));
      return o;
    }
    function n(m, o) {
      return ((m = Kt(m, o)), (m.index = 0), (m.sibling = null), m);
    }
    function u(m, o, h) {
      return (
        (m.index = h),
        l
          ? ((h = m.alternate),
            h !== null
              ? ((h = h.index), h < o ? ((m.flags |= 67108866), o) : h)
              : ((m.flags |= 67108866), o))
          : ((m.flags |= 1048576), o)
      );
    }
    function i(m) {
      return (l && m.alternate === null && (m.flags |= 67108866), m);
    }
    function c(m, o, h, E) {
      return o === null || o.tag !== 6
        ? ((o = Yi(h, m.mode, E)), (o.return = m), o)
        : ((o = n(o, h)), (o.return = m), o);
    }
    function s(m, o, h, E) {
      var G = h.type;
      return G === I
        ? p(m, o, h.props.children, E, h.key)
        : o !== null &&
            (o.elementType === G ||
              (typeof G == "object" &&
                G !== null &&
                G.$$typeof === Ml &&
                Ja(G) === o.type))
          ? ((o = n(o, h.props)), mn(o, h), (o.return = m), o)
          : ((o = iu(h.type, h.key, h.props, null, m.mode, E)),
            mn(o, h),
            (o.return = m),
            o);
    }
    function v(m, o, h, E) {
      return o === null ||
        o.tag !== 4 ||
        o.stateNode.containerInfo !== h.containerInfo ||
        o.stateNode.implementation !== h.implementation
        ? ((o = Gi(h, m.mode, E)), (o.return = m), o)
        : ((o = n(o, h.children || [])), (o.return = m), o);
    }
    function p(m, o, h, E, G) {
      return o === null || o.tag !== 7
        ? ((o = Qa(h, m.mode, E, G)), (o.return = m), o)
        : ((o = n(o, h)), (o.return = m), o);
    }
    function A(m, o, h) {
      if (
        (typeof o == "string" && o !== "") ||
        typeof o == "number" ||
        typeof o == "bigint"
      )
        return ((o = Yi("" + o, m.mode, h)), (o.return = m), o);
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case al:
            return (
              (h = iu(o.type, o.key, o.props, null, m.mode, h)),
              mn(h, o),
              (h.return = m),
              h
            );
          case cl:
            return ((o = Gi(o, m.mode, h)), (o.return = m), o);
          case Ml:
            return ((o = Ja(o)), A(m, o, h));
        }
        if (tt(o) || Xl(o))
          return ((o = Qa(o, m.mode, h, null)), (o.return = m), o);
        if (typeof o.then == "function") return A(m, mu(o), h);
        if (o.$$typeof === il) return A(m, su(m, o), h);
        hu(m, o);
      }
      return null;
    }
    function y(m, o, h, E) {
      var G = o !== null ? o.key : null;
      if (
        (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
      )
        return G !== null ? null : c(m, o, "" + h, E);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case al:
            return h.key === G ? s(m, o, h, E) : null;
          case cl:
            return h.key === G ? v(m, o, h, E) : null;
          case Ml:
            return ((h = Ja(h)), y(m, o, h, E));
        }
        if (tt(h) || Xl(h)) return G !== null ? null : p(m, o, h, E, null);
        if (typeof h.then == "function") return y(m, o, mu(h), E);
        if (h.$$typeof === il) return y(m, o, su(m, h), E);
        hu(m, h);
      }
      return null;
    }
    function g(m, o, h, E, G) {
      if (
        (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
      )
        return ((m = m.get(h) || null), c(o, m, "" + E, G));
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case al:
            return (
              (m = m.get(E.key === null ? h : E.key) || null),
              s(o, m, E, G)
            );
          case cl:
            return (
              (m = m.get(E.key === null ? h : E.key) || null),
              v(o, m, E, G)
            );
          case Ml:
            return ((E = Ja(E)), g(m, o, h, E, G));
        }
        if (tt(E) || Xl(E))
          return ((m = m.get(h) || null), p(o, m, E, G, null));
        if (typeof E.then == "function") return g(m, o, h, mu(E), G);
        if (E.$$typeof === il) return g(m, o, h, su(o, E), G);
        hu(o, E);
      }
      return null;
    }
    function H(m, o, h, E) {
      for (
        var G = null, rl = null, B = o, F = (o = 0), nl = null;
        B !== null && F < h.length;
        F++
      ) {
        B.index > F ? ((nl = B), (B = null)) : (nl = B.sibling);
        var dl = y(m, B, h[F], E);
        if (dl === null) {
          B === null && (B = nl);
          break;
        }
        (l && B && dl.alternate === null && t(m, B),
          (o = u(dl, o, F)),
          rl === null ? (G = dl) : (rl.sibling = dl),
          (rl = dl),
          (B = nl));
      }
      if (F === h.length) return (a(m, B), ul && Jt(m, F), G);
      if (B === null) {
        for (; F < h.length; F++)
          ((B = A(m, h[F], E)),
            B !== null &&
              ((o = u(B, o, F)),
              rl === null ? (G = B) : (rl.sibling = B),
              (rl = B)));
        return (ul && Jt(m, F), G);
      }
      for (B = e(B); F < h.length; F++)
        ((nl = g(B, m, F, h[F], E)),
          nl !== null &&
            (l &&
              nl.alternate !== null &&
              B.delete(nl.key === null ? F : nl.key),
            (o = u(nl, o, F)),
            rl === null ? (G = nl) : (rl.sibling = nl),
            (rl = nl)));
      return (
        l &&
          B.forEach(function (Ua) {
            return t(m, Ua);
          }),
        ul && Jt(m, F),
        G
      );
    }
    function X(m, o, h, E) {
      if (h == null) throw Error(d(151));
      for (
        var G = null, rl = null, B = o, F = (o = 0), nl = null, dl = h.next();
        B !== null && !dl.done;
        F++, dl = h.next()
      ) {
        B.index > F ? ((nl = B), (B = null)) : (nl = B.sibling);
        var Ua = y(m, B, dl.value, E);
        if (Ua === null) {
          B === null && (B = nl);
          break;
        }
        (l && B && Ua.alternate === null && t(m, B),
          (o = u(Ua, o, F)),
          rl === null ? (G = Ua) : (rl.sibling = Ua),
          (rl = Ua),
          (B = nl));
      }
      if (dl.done) return (a(m, B), ul && Jt(m, F), G);
      if (B === null) {
        for (; !dl.done; F++, dl = h.next())
          ((dl = A(m, dl.value, E)),
            dl !== null &&
              ((o = u(dl, o, F)),
              rl === null ? (G = dl) : (rl.sibling = dl),
              (rl = dl)));
        return (ul && Jt(m, F), G);
      }
      for (B = e(B); !dl.done; F++, dl = h.next())
        ((dl = g(B, m, F, dl.value, E)),
          dl !== null &&
            (l &&
              dl.alternate !== null &&
              B.delete(dl.key === null ? F : dl.key),
            (o = u(dl, o, F)),
            rl === null ? (G = dl) : (rl.sibling = dl),
            (rl = dl)));
      return (
        l &&
          B.forEach(function (t0) {
            return t(m, t0);
          }),
        ul && Jt(m, F),
        G
      );
    }
    function Al(m, o, h, E) {
      if (
        (typeof h == "object" &&
          h !== null &&
          h.type === I &&
          h.key === null &&
          (h = h.props.children),
        typeof h == "object" && h !== null)
      ) {
        switch (h.$$typeof) {
          case al:
            l: {
              for (var G = h.key; o !== null;) {
                if (o.key === G) {
                  if (((G = h.type), G === I)) {
                    if (o.tag === 7) {
                      (a(m, o.sibling),
                        (E = n(o, h.props.children)),
                        (E.return = m),
                        (m = E));
                      break l;
                    }
                  } else if (
                    o.elementType === G ||
                    (typeof G == "object" &&
                      G !== null &&
                      G.$$typeof === Ml &&
                      Ja(G) === o.type)
                  ) {
                    (a(m, o.sibling),
                      (E = n(o, h.props)),
                      mn(E, h),
                      (E.return = m),
                      (m = E));
                    break l;
                  }
                  a(m, o);
                  break;
                } else t(m, o);
                o = o.sibling;
              }
              h.type === I
                ? ((E = Qa(h.props.children, m.mode, E, h.key)),
                  (E.return = m),
                  (m = E))
                : ((E = iu(h.type, h.key, h.props, null, m.mode, E)),
                  mn(E, h),
                  (E.return = m),
                  (m = E));
            }
            return i(m);
          case cl:
            l: {
              for (G = h.key; o !== null;) {
                if (o.key === G)
                  if (
                    o.tag === 4 &&
                    o.stateNode.containerInfo === h.containerInfo &&
                    o.stateNode.implementation === h.implementation
                  ) {
                    (a(m, o.sibling),
                      (E = n(o, h.children || [])),
                      (E.return = m),
                      (m = E));
                    break l;
                  } else {
                    a(m, o);
                    break;
                  }
                else t(m, o);
                o = o.sibling;
              }
              ((E = Gi(h, m.mode, E)), (E.return = m), (m = E));
            }
            return i(m);
          case Ml:
            return ((h = Ja(h)), Al(m, o, h, E));
        }
        if (tt(h)) return H(m, o, h, E);
        if (Xl(h)) {
          if (((G = Xl(h)), typeof G != "function")) throw Error(d(150));
          return ((h = G.call(h)), X(m, o, h, E));
        }
        if (typeof h.then == "function") return Al(m, o, mu(h), E);
        if (h.$$typeof === il) return Al(m, o, su(m, h), E);
        hu(m, h);
      }
      return (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
        ? ((h = "" + h),
          o !== null && o.tag === 6
            ? (a(m, o.sibling), (E = n(o, h)), (E.return = m), (m = E))
            : (a(m, o), (E = Yi(h, m.mode, E)), (E.return = m), (m = E)),
          i(m))
        : a(m, o);
    }
    return function (m, o, h, E) {
      try {
        dn = 0;
        var G = Al(m, o, h, E);
        return ((Ae = null), G);
      } catch (B) {
        if (B === Ee || B === ru) throw B;
        var rl = vt(29, B, null, m.mode);
        return ((rl.lanes = E), (rl.return = m), rl);
      }
    };
  }
  var $a = Qs(!0),
    Xs = Qs(!1),
    va = !1;
  function Fi(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ii(l, t) {
    ((l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        }));
  }
  function ya(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ga(l, t, a) {
    var e = l.updateQueue;
    if (e === null) return null;
    if (((e = e.shared), (ml & 2) !== 0)) {
      var n = e.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t),
        (t = uu(l)),
        xs(l, null, a),
        t
      );
    }
    return (nu(l, e, t, a), uu(l));
  }
  function hn(l, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var e = t.lanes;
      ((e &= l.pendingLanes), (a |= e), (t.lanes = a), Rf(l, a));
    }
  }
  function Pi(l, t) {
    var a = l.updateQueue,
      e = l.alternate;
    if (e !== null && ((e = e.updateQueue), a === e)) {
      var n = null,
        u = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var i = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (u === null ? (n = u = i) : (u = u.next = i), (a = a.next));
        } while (a !== null);
        u === null ? (n = u = t) : (u = u.next = t);
      } else n = u = t;
      ((a = {
        baseState: e.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: e.shared,
        callbacks: e.callbacks,
      }),
        (l.updateQueue = a));
      return;
    }
    ((l = a.lastBaseUpdate),
      l === null ? (a.firstBaseUpdate = t) : (l.next = t),
      (a.lastBaseUpdate = t));
  }
  var lc = !1;
  function vn() {
    if (lc) {
      var l = ze;
      if (l !== null) throw l;
    }
  }
  function yn(l, t, a, e) {
    lc = !1;
    var n = l.updateQueue;
    va = !1;
    var u = n.firstBaseUpdate,
      i = n.lastBaseUpdate,
      c = n.shared.pending;
    if (c !== null) {
      n.shared.pending = null;
      var s = c,
        v = s.next;
      ((s.next = null), i === null ? (u = v) : (i.next = v), (i = s));
      var p = l.alternate;
      p !== null &&
        ((p = p.updateQueue),
        (c = p.lastBaseUpdate),
        c !== i &&
          (c === null ? (p.firstBaseUpdate = v) : (c.next = v),
          (p.lastBaseUpdate = s)));
    }
    if (u !== null) {
      var A = n.baseState;
      ((i = 0), (p = v = s = null), (c = u));
      do {
        var y = c.lane & -536870913,
          g = y !== c.lane;
        if (g ? (el & y) === y : (e & y) === y) {
          (y !== 0 && y === be && (lc = !0),
            p !== null &&
              (p = p.next =
                {
                  lane: 0,
                  tag: c.tag,
                  payload: c.payload,
                  callback: null,
                  next: null,
                }));
          l: {
            var H = l,
              X = c;
            y = t;
            var Al = a;
            switch (X.tag) {
              case 1:
                if (((H = X.payload), typeof H == "function")) {
                  A = H.call(Al, A, y);
                  break l;
                }
                A = H;
                break l;
              case 3:
                H.flags = (H.flags & -65537) | 128;
              case 0:
                if (
                  ((H = X.payload),
                  (y = typeof H == "function" ? H.call(Al, A, y) : H),
                  y == null)
                )
                  break l;
                A = R({}, A, y);
                break l;
              case 2:
                va = !0;
            }
          }
          ((y = c.callback),
            y !== null &&
              ((l.flags |= 64),
              g && (l.flags |= 8192),
              (g = n.callbacks),
              g === null ? (n.callbacks = [y]) : g.push(y)));
        } else
          ((g = {
            lane: y,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            p === null ? ((v = p = g), (s = A)) : (p = p.next = g),
            (i |= y));
        if (((c = c.next), c === null)) {
          if (((c = n.shared.pending), c === null)) break;
          ((g = c),
            (c = g.next),
            (g.next = null),
            (n.lastBaseUpdate = g),
            (n.shared.pending = null));
        }
      } while (!0);
      (p === null && (s = A),
        (n.baseState = s),
        (n.firstBaseUpdate = v),
        (n.lastBaseUpdate = p),
        u === null && (n.shared.lanes = 0),
        (Ea |= i),
        (l.lanes = i),
        (l.memoizedState = A));
    }
  }
  function Zs(l, t) {
    if (typeof l != "function") throw Error(d(191, l));
    l.call(t);
  }
  function Vs(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++) Zs(a[l], t);
  }
  var Te = r(null),
    vu = r(0);
  function Ks(l, t) {
    ((l = ea), U(vu, l), U(Te, t), (ea = l | t.baseLanes));
  }
  function tc() {
    (U(vu, ea), U(Te, Te.current));
  }
  function ac() {
    ((ea = vu.current), T(Te), T(vu));
  }
  var yt = r(null),
    Ot = null;
  function Sa(l) {
    var t = l.alternate;
    (U(Hl, Hl.current & 1),
      U(yt, l),
      Ot === null &&
        (t === null || Te.current !== null || t.memoizedState !== null) &&
        (Ot = l));
  }
  function ec(l) {
    (U(Hl, Hl.current), U(yt, l), Ot === null && (Ot = l));
  }
  function Js(l) {
    l.tag === 22
      ? (U(Hl, Hl.current), U(yt, l), Ot === null && (Ot = l))
      : pa();
  }
  function pa() {
    (U(Hl, Hl.current), U(yt, yt.current));
  }
  function gt(l) {
    (T(yt), Ot === l && (Ot = null), T(Hl));
  }
  var Hl = r(0);
  function yu(l) {
    for (var t = l; t !== null;) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || of(a) || rf(a)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Wt = 0,
    k = null,
    zl = null,
    Gl = null,
    gu = !1,
    xe = !1,
    Wa = !1,
    Su = 0,
    gn = 0,
    je = null,
    Km = 0;
  function Rl() {
    throw Error(d(321));
  }
  function nc(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!ht(l[a], t[a])) return !1;
    return !0;
  }
  function uc(l, t, a, e, n, u) {
    return (
      (Wt = u),
      (k = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (z.H = l === null || l.memoizedState === null ? Oo : bc),
      (Wa = !1),
      (u = a(e, n)),
      (Wa = !1),
      xe && (u = $s(t, a, e, n)),
      ws(l),
      u
    );
  }
  function ws(l) {
    z.H = bn;
    var t = zl !== null && zl.next !== null;
    if (((Wt = 0), (Gl = zl = k = null), (gu = !1), (gn = 0), (je = null), t))
      throw Error(d(300));
    l === null ||
      Ll ||
      ((l = l.dependencies), l !== null && fu(l) && (Ll = !0));
  }
  function $s(l, t, a, e) {
    k = l;
    var n = 0;
    do {
      if ((xe && (je = null), (gn = 0), (xe = !1), 25 <= n))
        throw Error(d(301));
      if (((n += 1), (Gl = zl = null), l.updateQueue != null)) {
        var u = l.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((z.H = Do), (u = t(a, e)));
    } while (xe);
    return u;
  }
  function Jm() {
    var l = z.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? Sn(t) : t),
      (l = l.useState()[0]),
      (zl !== null ? zl.memoizedState : null) !== l && (k.flags |= 1024),
      t
    );
  }
  function ic() {
    var l = Su !== 0;
    return ((Su = 0), l);
  }
  function cc(l, t, a) {
    ((t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a));
  }
  function fc(l) {
    if (gu) {
      for (l = l.memoizedState; l !== null;) {
        var t = l.queue;
        (t !== null && (t.pending = null), (l = l.next));
      }
      gu = !1;
    }
    ((Wt = 0), (Gl = zl = k = null), (xe = !1), (gn = Su = 0), (je = null));
  }
  function at() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Gl === null ? (k.memoizedState = Gl = l) : (Gl = Gl.next = l), Gl);
  }
  function ql() {
    if (zl === null) {
      var l = k.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = zl.next;
    var t = Gl === null ? k.memoizedState : Gl.next;
    if (t !== null) ((Gl = t), (zl = l));
    else {
      if (l === null)
        throw k.alternate === null ? Error(d(467)) : Error(d(310));
      ((zl = l),
        (l = {
          memoizedState: zl.memoizedState,
          baseState: zl.baseState,
          baseQueue: zl.baseQueue,
          queue: zl.queue,
          next: null,
        }),
        Gl === null ? (k.memoizedState = Gl = l) : (Gl = Gl.next = l));
    }
    return Gl;
  }
  function pu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Sn(l) {
    var t = gn;
    return (
      (gn += 1),
      je === null && (je = []),
      (l = Ys(je, l, t)),
      (t = k),
      (Gl === null ? t.memoizedState : Gl.next) === null &&
        ((t = t.alternate),
        (z.H = t === null || t.memoizedState === null ? Oo : bc)),
      l
    );
  }
  function bu(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Sn(l);
      if (l.$$typeof === il) return Fl(l);
    }
    throw Error(d(438, String(l)));
  }
  function sc(l) {
    var t = null,
      a = k.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var e = k.alternate;
      e !== null &&
        ((e = e.updateQueue),
        e !== null &&
          ((e = e.memoCache),
          e != null &&
            (t = {
              data: e.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = pu()), (k.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), e = 0; e < l; e++) a[e] = et;
    return (t.index++, a);
  }
  function kt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function zu(l) {
    var t = ql();
    return oc(t, zl, l);
  }
  function oc(l, t, a) {
    var e = l.queue;
    if (e === null) throw Error(d(311));
    e.lastRenderedReducer = a;
    var n = l.baseQueue,
      u = e.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        ((n.next = u.next), (u.next = i));
      }
      ((t.baseQueue = n = u), (e.pending = null));
    }
    if (((u = l.baseState), n === null)) l.memoizedState = u;
    else {
      t = n.next;
      var c = (i = null),
        s = null,
        v = t,
        p = !1;
      do {
        var A = v.lane & -536870913;
        if (A !== v.lane ? (el & A) === A : (Wt & A) === A) {
          var y = v.revertLane;
          if (y === 0)
            (s !== null &&
              (s = s.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: v.action,
                  hasEagerState: v.hasEagerState,
                  eagerState: v.eagerState,
                  next: null,
                }),
              A === be && (p = !0));
          else if ((Wt & y) === y) {
            ((v = v.next), y === be && (p = !0));
            continue;
          } else
            ((A = {
              lane: 0,
              revertLane: v.revertLane,
              gesture: null,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null,
            }),
              s === null ? ((c = s = A), (i = u)) : (s = s.next = A),
              (k.lanes |= y),
              (Ea |= y));
          ((A = v.action),
            Wa && a(u, A),
            (u = v.hasEagerState ? v.eagerState : a(u, A)));
        } else
          ((y = {
            lane: A,
            revertLane: v.revertLane,
            gesture: v.gesture,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null,
          }),
            s === null ? ((c = s = y), (i = u)) : (s = s.next = y),
            (k.lanes |= A),
            (Ea |= A));
        v = v.next;
      } while (v !== null && v !== t);
      if (
        (s === null ? (i = u) : (s.next = c),
        !ht(u, l.memoizedState) && ((Ll = !0), p && ((a = ze), a !== null)))
      )
        throw a;
      ((l.memoizedState = u),
        (l.baseState = i),
        (l.baseQueue = s),
        (e.lastRenderedState = u));
    }
    return (n === null && (e.lanes = 0), [l.memoizedState, e.dispatch]);
  }
  function rc(l) {
    var t = ql(),
      a = t.queue;
    if (a === null) throw Error(d(311));
    a.lastRenderedReducer = l;
    var e = a.dispatch,
      n = a.pending,
      u = t.memoizedState;
    if (n !== null) {
      a.pending = null;
      var i = (n = n.next);
      do ((u = l(u, i.action)), (i = i.next));
      while (i !== n);
      (ht(u, t.memoizedState) || (Ll = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (a.lastRenderedState = u));
    }
    return [u, e];
  }
  function Ws(l, t, a) {
    var e = k,
      n = ql(),
      u = ul;
    if (u) {
      if (a === void 0) throw Error(d(407));
      a = a();
    } else a = t();
    var i = !ht((zl || n).memoizedState, a);
    if (
      (i && ((n.memoizedState = a), (Ll = !0)),
      (n = n.queue),
      hc(Is.bind(null, e, n, l), [l]),
      n.getSnapshot !== t || i || (Gl !== null && Gl.memoizedState.tag & 1))
    ) {
      if (
        ((e.flags |= 2048),
        Me(9, { destroy: void 0 }, Fs.bind(null, e, n, a, t), null),
        xl === null)
      )
        throw Error(d(349));
      u || (Wt & 127) !== 0 || ks(e, t, a);
    }
    return a;
  }
  function ks(l, t, a) {
    ((l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = k.updateQueue),
      t === null
        ? ((t = pu()), (k.updateQueue = t), (t.stores = [l]))
        : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l)));
  }
  function Fs(l, t, a, e) {
    ((t.value = a), (t.getSnapshot = e), Ps(t) && lo(l));
  }
  function Is(l, t, a) {
    return a(function () {
      Ps(t) && lo(l);
    });
  }
  function Ps(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !ht(l, a);
    } catch {
      return !0;
    }
  }
  function lo(l) {
    var t = La(l, 2);
    t !== null && ot(t, l, 2);
  }
  function dc(l) {
    var t = at();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), Wa)) {
        bl(!0);
        try {
          a();
        } finally {
          bl(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: kt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function to(l, t, a, e) {
    return ((l.baseState = a), oc(l, zl, typeof e == "function" ? e : kt));
  }
  function wm(l, t, a, e, n) {
    if (Tu(l)) throw Error(d(485));
    if (((l = t.action), l !== null)) {
      var u = {
        payload: n,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          u.listeners.push(i);
        },
      };
      (z.T !== null ? a(!0) : (u.isTransition = !1),
        e(u),
        (a = t.pending),
        a === null
          ? ((u.next = t.pending = u), ao(t, u))
          : ((u.next = a.next), (t.pending = a.next = u)));
    }
  }
  function ao(l, t) {
    var a = t.action,
      e = t.payload,
      n = l.state;
    if (t.isTransition) {
      var u = z.T,
        i = {};
      z.T = i;
      try {
        var c = a(n, e),
          s = z.S;
        (s !== null && s(i, c), eo(l, t, c));
      } catch (v) {
        mc(l, t, v);
      } finally {
        (u !== null && i.types !== null && (u.types = i.types), (z.T = u));
      }
    } else
      try {
        ((u = a(n, e)), eo(l, t, u));
      } catch (v) {
        mc(l, t, v);
      }
  }
  function eo(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (e) {
            no(l, t, e);
          },
          function (e) {
            return mc(l, t, e);
          },
        )
      : no(l, t, a);
  }
  function no(l, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      uo(t),
      (l.state = a),
      (t = l.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (l.pending = null) : ((a = a.next), (t.next = a), ao(l, a))));
  }
  function mc(l, t, a) {
    var e = l.pending;
    if (((l.pending = null), e !== null)) {
      e = e.next;
      do ((t.status = "rejected"), (t.reason = a), uo(t), (t = t.next));
      while (t !== e);
    }
    l.action = null;
  }
  function uo(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function io(l, t) {
    return t;
  }
  function co(l, t) {
    if (ul) {
      var a = xl.formState;
      if (a !== null) {
        l: {
          var e = k;
          if (ul) {
            if (Nl) {
              t: {
                for (var n = Nl, u = _t; n.nodeType !== 8;) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (((n = Dt(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                ((u = n.data), (n = u === "F!" || u === "F" ? n : null));
              }
              if (n) {
                ((Nl = Dt(n.nextSibling)), (e = n.data === "F!"));
                break l;
              }
            }
            ma(e);
          }
          e = !1;
        }
        e && (t = a[0]);
      }
    }
    return (
      (a = at()),
      (a.memoizedState = a.baseState = t),
      (e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: io,
        lastRenderedState: t,
      }),
      (a.queue = e),
      (a = Mo.bind(null, k, e)),
      (e.dispatch = a),
      (e = dc(!1)),
      (u = pc.bind(null, k, !1, e.queue)),
      (e = at()),
      (n = { state: t, dispatch: null, action: l, pending: null }),
      (e.queue = n),
      (a = wm.bind(null, k, n, u, a)),
      (n.dispatch = a),
      (e.memoizedState = l),
      [t, a, !1]
    );
  }
  function fo(l) {
    var t = ql();
    return so(t, zl, l);
  }
  function so(l, t, a) {
    if (
      ((t = oc(l, t, io)[0]),
      (l = zu(kt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var e = Sn(t);
      } catch (i) {
        throw i === Ee ? ru : i;
      }
    else e = t;
    t = ql();
    var n = t.queue,
      u = n.dispatch;
    return (
      a !== t.memoizedState &&
        ((k.flags |= 2048),
        Me(9, { destroy: void 0 }, $m.bind(null, n, a), null)),
      [e, u, l]
    );
  }
  function $m(l, t) {
    l.action = t;
  }
  function oo(l) {
    var t = ql(),
      a = zl;
    if (a !== null) return so(t, a, l);
    (ql(), (t = t.memoizedState), (a = ql()));
    var e = a.queue.dispatch;
    return ((a.memoizedState = l), [t, e, !1]);
  }
  function Me(l, t, a, e) {
    return (
      (l = { tag: l, create: a, deps: e, inst: t, next: null }),
      (t = k.updateQueue),
      t === null && ((t = pu()), (k.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = l.next = l)
        : ((e = a.next), (a.next = l), (l.next = e), (t.lastEffect = l)),
      l
    );
  }
  function ro() {
    return ql().memoizedState;
  }
  function Eu(l, t, a, e) {
    var n = at();
    ((k.flags |= l),
      (n.memoizedState = Me(
        1 | t,
        { destroy: void 0 },
        a,
        e === void 0 ? null : e,
      )));
  }
  function Au(l, t, a, e) {
    var n = ql();
    e = e === void 0 ? null : e;
    var u = n.memoizedState.inst;
    zl !== null && e !== null && nc(e, zl.memoizedState.deps)
      ? (n.memoizedState = Me(t, u, a, e))
      : ((k.flags |= l), (n.memoizedState = Me(1 | t, u, a, e)));
  }
  function mo(l, t) {
    Eu(8390656, 8, l, t);
  }
  function hc(l, t) {
    Au(2048, 8, l, t);
  }
  function Wm(l) {
    k.flags |= 4;
    var t = k.updateQueue;
    if (t === null) ((t = pu()), (k.updateQueue = t), (t.events = [l]));
    else {
      var a = t.events;
      a === null ? (t.events = [l]) : a.push(l);
    }
  }
  function ho(l) {
    var t = ql().memoizedState;
    return (
      Wm({ ref: t, nextImpl: l }),
      function () {
        if ((ml & 2) !== 0) throw Error(d(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function vo(l, t) {
    return Au(4, 2, l, t);
  }
  function yo(l, t) {
    return Au(4, 4, l, t);
  }
  function go(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function So(l, t, a) {
    ((a = a != null ? a.concat([l]) : null), Au(4, 4, go.bind(null, t, l), a));
  }
  function vc() {}
  function po(l, t) {
    var a = ql();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    return t !== null && nc(t, e[1]) ? e[0] : ((a.memoizedState = [l, t]), l);
  }
  function bo(l, t) {
    var a = ql();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    if (t !== null && nc(t, e[1])) return e[0];
    if (((e = l()), Wa)) {
      bl(!0);
      try {
        l();
      } finally {
        bl(!1);
      }
    }
    return ((a.memoizedState = [e, t]), e);
  }
  function yc(l, t, a) {
    return a === void 0 || ((Wt & 1073741824) !== 0 && (el & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = zr()), (k.lanes |= l), (Ea |= l), a);
  }
  function zo(l, t, a, e) {
    return ht(a, t)
      ? a
      : Te.current !== null
        ? ((l = yc(l, a, e)), ht(l, t) || (Ll = !0), l)
        : (Wt & 42) === 0 || ((Wt & 1073741824) !== 0 && (el & 261930) === 0)
          ? ((Ll = !0), (l.memoizedState = a))
          : ((l = zr()), (k.lanes |= l), (Ea |= l), t);
  }
  function Eo(l, t, a, e, n) {
    var u = _.p;
    _.p = u !== 0 && 8 > u ? u : 8;
    var i = z.T,
      c = {};
    ((z.T = c), pc(l, !1, t, a));
    try {
      var s = n(),
        v = z.S;
      if (
        (v !== null && v(c, s),
        s !== null && typeof s == "object" && typeof s.then == "function")
      ) {
        var p = Vm(s, e);
        pn(l, t, p, bt(l));
      } else pn(l, t, e, bt(l));
    } catch (A) {
      pn(l, t, { then: function () {}, status: "rejected", reason: A }, bt());
    } finally {
      ((_.p = u),
        i !== null && c.types !== null && (i.types = c.types),
        (z.T = i));
    }
  }
  function km() {}
  function gc(l, t, a, e) {
    if (l.tag !== 5) throw Error(d(476));
    var n = Ao(l).queue;
    Eo(
      l,
      n,
      t,
      V,
      a === null
        ? km
        : function () {
            return (To(l), a(e));
          },
    );
  }
  function Ao(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: V,
      baseState: V,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: kt,
        lastRenderedState: V,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: kt,
          lastRenderedState: a,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function To(l) {
    var t = Ao(l);
    (t.next === null && (t = l.alternate.memoizedState),
      pn(l, t.next.queue, {}, bt()));
  }
  function Sc() {
    return Fl(qn);
  }
  function xo() {
    return ql().memoizedState;
  }
  function jo() {
    return ql().memoizedState;
  }
  function Fm(l) {
    for (var t = l.return; t !== null;) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = bt();
          l = ya(a);
          var e = ga(t, l, a);
          (e !== null && (ot(e, t, a), hn(e, t, a)),
            (t = { cache: wi() }),
            (l.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Im(l, t, a) {
    var e = bt();
    ((a = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Tu(l)
        ? No(t, a)
        : ((a = qi(l, t, a, e)), a !== null && (ot(a, l, e), _o(a, t, e))));
  }
  function Mo(l, t, a) {
    var e = bt();
    pn(l, t, a, e);
  }
  function pn(l, t, a, e) {
    var n = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Tu(l)) No(t, n);
    else {
      var u = l.alternate;
      if (
        l.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var i = t.lastRenderedState,
            c = u(i, a);
          if (((n.hasEagerState = !0), (n.eagerState = c), ht(c, i)))
            return (nu(l, t, n, 0), xl === null && eu(), !1);
        } catch {}
      if (((a = qi(l, t, n, e)), a !== null))
        return (ot(a, l, e), _o(a, t, e), !0);
    }
    return !1;
  }
  function pc(l, t, a, e) {
    if (
      ((e = {
        lane: 2,
        revertLane: Fc(),
        gesture: null,
        action: e,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Tu(l))
    ) {
      if (t) throw Error(d(479));
    } else ((t = qi(l, a, e, 2)), t !== null && ot(t, l, 2));
  }
  function Tu(l) {
    var t = l.alternate;
    return l === k || (t !== null && t === k);
  }
  function No(l, t) {
    xe = gu = !0;
    var a = l.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (l.pending = t));
  }
  function _o(l, t, a) {
    if ((a & 4194048) !== 0) {
      var e = t.lanes;
      ((e &= l.pendingLanes), (a |= e), (t.lanes = a), Rf(l, a));
    }
  }
  var bn = {
    readContext: Fl,
    use: bu,
    useCallback: Rl,
    useContext: Rl,
    useEffect: Rl,
    useImperativeHandle: Rl,
    useLayoutEffect: Rl,
    useInsertionEffect: Rl,
    useMemo: Rl,
    useReducer: Rl,
    useRef: Rl,
    useState: Rl,
    useDebugValue: Rl,
    useDeferredValue: Rl,
    useTransition: Rl,
    useSyncExternalStore: Rl,
    useId: Rl,
    useHostTransitionStatus: Rl,
    useFormState: Rl,
    useActionState: Rl,
    useOptimistic: Rl,
    useMemoCache: Rl,
    useCacheRefresh: Rl,
  };
  bn.useEffectEvent = Rl;
  var Oo = {
      readContext: Fl,
      use: bu,
      useCallback: function (l, t) {
        return ((at().memoizedState = [l, t === void 0 ? null : t]), l);
      },
      useContext: Fl,
      useEffect: mo,
      useImperativeHandle: function (l, t, a) {
        ((a = a != null ? a.concat([l]) : null),
          Eu(4194308, 4, go.bind(null, t, l), a));
      },
      useLayoutEffect: function (l, t) {
        return Eu(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        Eu(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var a = at();
        t = t === void 0 ? null : t;
        var e = l();
        if (Wa) {
          bl(!0);
          try {
            l();
          } finally {
            bl(!1);
          }
        }
        return ((a.memoizedState = [e, t]), e);
      },
      useReducer: function (l, t, a) {
        var e = at();
        if (a !== void 0) {
          var n = a(t);
          if (Wa) {
            bl(!0);
            try {
              a(t);
            } finally {
              bl(!1);
            }
          }
        } else n = t;
        return (
          (e.memoizedState = e.baseState = n),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: n,
          }),
          (e.queue = l),
          (l = l.dispatch = Im.bind(null, k, l)),
          [e.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = at();
        return ((l = { current: l }), (t.memoizedState = l));
      },
      useState: function (l) {
        l = dc(l);
        var t = l.queue,
          a = Mo.bind(null, k, t);
        return ((t.dispatch = a), [l.memoizedState, a]);
      },
      useDebugValue: vc,
      useDeferredValue: function (l, t) {
        var a = at();
        return yc(a, l, t);
      },
      useTransition: function () {
        var l = dc(!1);
        return (
          (l = Eo.bind(null, k, l.queue, !0, !1)),
          (at().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, a) {
        var e = k,
          n = at();
        if (ul) {
          if (a === void 0) throw Error(d(407));
          a = a();
        } else {
          if (((a = t()), xl === null)) throw Error(d(349));
          (el & 127) !== 0 || ks(e, t, a);
        }
        n.memoizedState = a;
        var u = { value: a, getSnapshot: t };
        return (
          (n.queue = u),
          mo(Is.bind(null, e, u, l), [l]),
          (e.flags |= 2048),
          Me(9, { destroy: void 0 }, Fs.bind(null, e, u, a, t), null),
          a
        );
      },
      useId: function () {
        var l = at(),
          t = xl.identifierPrefix;
        if (ul) {
          var a = Yt,
            e = Bt;
          ((a = (e & ~(1 << (32 - Ol(e) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = Su++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_"));
        } else ((a = Km++), (t = "_" + t + "r_" + a.toString(32) + "_"));
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: Sc,
      useFormState: co,
      useActionState: co,
      useOptimistic: function (l) {
        var t = at();
        t.memoizedState = t.baseState = l;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = pc.bind(null, k, !0, a)),
          (a.dispatch = t),
          [l, t]
        );
      },
      useMemoCache: sc,
      useCacheRefresh: function () {
        return (at().memoizedState = Fm.bind(null, k));
      },
      useEffectEvent: function (l) {
        var t = at(),
          a = { impl: l };
        return (
          (t.memoizedState = a),
          function () {
            if ((ml & 2) !== 0) throw Error(d(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    bc = {
      readContext: Fl,
      use: bu,
      useCallback: po,
      useContext: Fl,
      useEffect: hc,
      useImperativeHandle: So,
      useInsertionEffect: vo,
      useLayoutEffect: yo,
      useMemo: bo,
      useReducer: zu,
      useRef: ro,
      useState: function () {
        return zu(kt);
      },
      useDebugValue: vc,
      useDeferredValue: function (l, t) {
        var a = ql();
        return zo(a, zl.memoizedState, l, t);
      },
      useTransition: function () {
        var l = zu(kt)[0],
          t = ql().memoizedState;
        return [typeof l == "boolean" ? l : Sn(l), t];
      },
      useSyncExternalStore: Ws,
      useId: xo,
      useHostTransitionStatus: Sc,
      useFormState: fo,
      useActionState: fo,
      useOptimistic: function (l, t) {
        var a = ql();
        return to(a, zl, l, t);
      },
      useMemoCache: sc,
      useCacheRefresh: jo,
    };
  bc.useEffectEvent = ho;
  var Do = {
    readContext: Fl,
    use: bu,
    useCallback: po,
    useContext: Fl,
    useEffect: hc,
    useImperativeHandle: So,
    useInsertionEffect: vo,
    useLayoutEffect: yo,
    useMemo: bo,
    useReducer: rc,
    useRef: ro,
    useState: function () {
      return rc(kt);
    },
    useDebugValue: vc,
    useDeferredValue: function (l, t) {
      var a = ql();
      return zl === null ? yc(a, l, t) : zo(a, zl.memoizedState, l, t);
    },
    useTransition: function () {
      var l = rc(kt)[0],
        t = ql().memoizedState;
      return [typeof l == "boolean" ? l : Sn(l), t];
    },
    useSyncExternalStore: Ws,
    useId: xo,
    useHostTransitionStatus: Sc,
    useFormState: oo,
    useActionState: oo,
    useOptimistic: function (l, t) {
      var a = ql();
      return zl !== null
        ? to(a, zl, l, t)
        : ((a.baseState = l), [l, a.queue.dispatch]);
    },
    useMemoCache: sc,
    useCacheRefresh: jo,
  };
  Do.useEffectEvent = ho;
  function zc(l, t, a, e) {
    ((t = l.memoizedState),
      (a = a(e, t)),
      (a = a == null ? t : R({}, t, a)),
      (l.memoizedState = a),
      l.lanes === 0 && (l.updateQueue.baseState = a));
  }
  var Ec = {
    enqueueSetState: function (l, t, a) {
      l = l._reactInternals;
      var e = bt(),
        n = ya(e);
      ((n.payload = t),
        a != null && (n.callback = a),
        (t = ga(l, n, e)),
        t !== null && (ot(t, l, e), hn(t, l, e)));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var e = bt(),
        n = ya(e);
      ((n.tag = 1),
        (n.payload = t),
        a != null && (n.callback = a),
        (t = ga(l, n, e)),
        t !== null && (ot(t, l, e), hn(t, l, e)));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = bt(),
        e = ya(a);
      ((e.tag = 2),
        t != null && (e.callback = t),
        (t = ga(l, e, a)),
        t !== null && (ot(t, l, a), hn(t, l, a)));
    },
  };
  function Uo(l, t, a, e, n, u, i) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(e, u, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !un(a, e) || !un(n, u)
          : !0
    );
  }
  function Ro(l, t, a, e) {
    ((l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, e),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, e),
      t.state !== l && Ec.enqueueReplaceState(t, t.state, null));
  }
  function ka(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var e in t) e !== "ref" && (a[e] = t[e]);
    }
    if ((l = l.defaultProps)) {
      a === t && (a = R({}, a));
      for (var n in l) a[n] === void 0 && (a[n] = l[n]);
    }
    return a;
  }
  function Co(l) {
    au(l);
  }
  function Ho(l) {
    console.error(l);
  }
  function qo(l) {
    au(l);
  }
  function xu(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function Bo(l, t, a) {
    try {
      var e = l.onCaughtError;
      e(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Ac(l, t, a) {
    return (
      (a = ya(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        xu(l, t);
      }),
      a
    );
  }
  function Yo(l) {
    return ((l = ya(l)), (l.tag = 3), l);
  }
  function Go(l, t, a, e) {
    var n = a.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = e.value;
      ((l.payload = function () {
        return n(u);
      }),
        (l.callback = function () {
          Bo(t, a, e);
        }));
    }
    var i = a.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (l.callback = function () {
        (Bo(t, a, e),
          typeof n != "function" &&
            (Aa === null ? (Aa = new Set([this])) : Aa.add(this)));
        var c = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: c !== null ? c : "",
        });
      });
  }
  function Pm(l, t, a, e, n) {
    if (
      ((a.flags |= 32768),
      e !== null && typeof e == "object" && typeof e.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && pe(t, a, n, !0),
        (a = yt.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              Ot === null ? Bu() : a.alternate === null && Cl === 0 && (Cl = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = n),
              e === du
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([e])) : t.add(e),
                  $c(l, e, n)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              e === du
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([e]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([e])) : a.add(e)),
                  $c(l, e, n)),
              !1
            );
        }
        throw Error(d(435, a.tag));
      }
      return ($c(l, e, n), Bu(), !1);
    }
    if (ul)
      return (
        (t = yt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            e !== Xi && ((l = Error(d(422), { cause: e })), sn(jt(l, a))))
          : (e !== Xi && ((t = Error(d(423), { cause: e })), sn(jt(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (n &= -n),
            (l.lanes |= n),
            (e = jt(e, a)),
            (n = Ac(l.stateNode, e, n)),
            Pi(l, n),
            Cl !== 4 && (Cl = 2)),
        !1
      );
    var u = Error(d(520), { cause: e });
    if (
      ((u = jt(u, a)),
      Nn === null ? (Nn = [u]) : Nn.push(u),
      Cl !== 4 && (Cl = 2),
      t === null)
    )
      return !0;
    ((e = jt(e, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (l = n & -n),
            (a.lanes |= l),
            (l = Ac(a.stateNode, e, l)),
            Pi(a, l),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (u = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (Aa === null || !Aa.has(u)))))
          )
            return (
              (a.flags |= 65536),
              (n &= -n),
              (a.lanes |= n),
              (n = Yo(n)),
              Go(n, l, a, e),
              Pi(a, n),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Tc = Error(d(461)),
    Ll = !1;
  function Il(l, t, a, e) {
    t.child = l === null ? Xs(t, null, a, e) : $a(t, l.child, a, e);
  }
  function Lo(l, t, a, e, n) {
    a = a.render;
    var u = t.ref;
    if ("ref" in e) {
      var i = {};
      for (var c in e) c !== "ref" && (i[c] = e[c]);
    } else i = e;
    return (
      Va(t),
      (e = uc(l, t, a, i, u, n)),
      (c = ic()),
      l !== null && !Ll
        ? (cc(l, t, n), Ft(l, t, n))
        : (ul && c && Li(t), (t.flags |= 1), Il(l, t, e, n), t.child)
    );
  }
  function Qo(l, t, a, e, n) {
    if (l === null) {
      var u = a.type;
      return typeof u == "function" &&
        !Bi(u) &&
        u.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = u), Xo(l, t, u, e, n))
        : ((l = iu(a.type, null, e, t, t.mode, n)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((u = l.child), !Uc(l, n))) {
      var i = u.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : un), a(i, e) && l.ref === t.ref)
      )
        return Ft(l, t, n);
    }
    return (
      (t.flags |= 1),
      (l = Kt(u, e)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function Xo(l, t, a, e, n) {
    if (l !== null) {
      var u = l.memoizedProps;
      if (un(u, e) && l.ref === t.ref)
        if (((Ll = !1), (t.pendingProps = e = u), Uc(l, n)))
          (l.flags & 131072) !== 0 && (Ll = !0);
        else return ((t.lanes = l.lanes), Ft(l, t, n));
    }
    return xc(l, t, a, e, n);
  }
  function Zo(l, t, a, e) {
    var n = e.children,
      u = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | a : a), l !== null)) {
          for (e = t.child = l.child, n = 0; e !== null;)
            ((n = n | e.lanes | e.childLanes), (e = e.sibling));
          e = n & ~u;
        } else ((e = 0), (t.child = null));
        return Vo(l, t, u, a, e);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && ou(t, u !== null ? u.cachePool : null),
          u !== null ? Ks(t, u) : tc(),
          Js(t));
      else
        return (
          (e = t.lanes = 536870912),
          Vo(l, t, u !== null ? u.baseLanes | a : a, a, e)
        );
    } else
      u !== null
        ? (ou(t, u.cachePool), Ks(t, u), pa(), (t.memoizedState = null))
        : (l !== null && ou(t, null), tc(), pa());
    return (Il(l, t, n, a), t.child);
  }
  function zn(l, t) {
    return (
      (l !== null && l.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Vo(l, t, a, e, n) {
    var u = Wi();
    return (
      (u = u === null ? null : { parent: Yl._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: a, cachePool: u }),
      l !== null && ou(t, null),
      tc(),
      Js(t),
      l !== null && pe(l, t, e, !0),
      (t.childLanes = n),
      null
    );
  }
  function ju(l, t) {
    return (
      (t = Nu({ mode: t.mode, children: t.children }, l.mode)),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function Ko(l, t, a) {
    return (
      $a(t, l.child, null, a),
      (l = ju(t, t.pendingProps)),
      (l.flags |= 2),
      gt(t),
      (t.memoizedState = null),
      l
    );
  }
  function lh(l, t, a) {
    var e = t.pendingProps,
      n = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if (ul) {
        if (e.mode === "hidden")
          return ((l = ju(t, e)), (t.lanes = 536870912), zn(null, l));
        if (
          (ec(t),
          (l = Nl)
            ? ((l = ed(l, _t)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: ra !== null ? { id: Bt, overflow: Yt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = Ms(l)),
                (a.return = t),
                (t.child = a),
                (kl = t),
                (Nl = null)))
            : (l = null),
          l === null)
        )
          throw ma(t);
        return ((t.lanes = 536870912), null);
      }
      return ju(t, e);
    }
    var u = l.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if ((ec(t), n))
        if (t.flags & 256) ((t.flags &= -257), (t = Ko(l, t, a)));
        else if (t.memoizedState !== null)
          ((t.child = l.child), (t.flags |= 128), (t = null));
        else throw Error(d(558));
      else if (
        (Ll || pe(l, t, a, !1), (n = (a & l.childLanes) !== 0), Ll || n)
      ) {
        if (
          ((e = xl),
          e !== null && ((i = Cf(e, a)), i !== 0 && i !== u.retryLane))
        )
          throw ((u.retryLane = i), La(l, i), ot(e, l, i), Tc);
        (Bu(), (t = Ko(l, t, a)));
      } else
        ((l = u.treeContext),
          (Nl = Dt(i.nextSibling)),
          (kl = t),
          (ul = !0),
          (da = null),
          (_t = !1),
          l !== null && Os(t, l),
          (t = ju(t, e)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (l = Kt(l.child, { mode: e.mode, children: e.children })),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function Mu(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(d(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function xc(l, t, a, e, n) {
    return (
      Va(t),
      (a = uc(l, t, a, e, void 0, n)),
      (e = ic()),
      l !== null && !Ll
        ? (cc(l, t, n), Ft(l, t, n))
        : (ul && e && Li(t), (t.flags |= 1), Il(l, t, a, n), t.child)
    );
  }
  function Jo(l, t, a, e, n, u) {
    return (
      Va(t),
      (t.updateQueue = null),
      (a = $s(t, e, a, n)),
      ws(l),
      (e = ic()),
      l !== null && !Ll
        ? (cc(l, t, u), Ft(l, t, u))
        : (ul && e && Li(t), (t.flags |= 1), Il(l, t, a, u), t.child)
    );
  }
  function wo(l, t, a, e, n) {
    if ((Va(t), t.stateNode === null)) {
      var u = ve,
        i = a.contextType;
      (typeof i == "object" && i !== null && (u = Fl(i)),
        (u = new a(e, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Ec),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = e),
        (u.state = t.memoizedState),
        (u.refs = {}),
        Fi(t),
        (i = a.contextType),
        (u.context = typeof i == "object" && i !== null ? Fl(i) : ve),
        (u.state = t.memoizedState),
        (i = a.getDerivedStateFromProps),
        typeof i == "function" && (zc(t, a, i, e), (u.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((i = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          i !== u.state && Ec.enqueueReplaceState(u, u.state, null),
          yn(t, e, u, n),
          vn(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == "function" && (t.flags |= 4194308),
        (e = !0));
    } else if (l === null) {
      u = t.stateNode;
      var c = t.memoizedProps,
        s = ka(a, c);
      u.props = s;
      var v = u.context,
        p = a.contextType;
      ((i = ve), typeof p == "object" && p !== null && (i = Fl(p)));
      var A = a.getDerivedStateFromProps;
      ((p =
        typeof A == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (c = t.pendingProps !== c),
        p ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((c || v !== i) && Ro(t, u, e, i)),
        (va = !1));
      var y = t.memoizedState;
      ((u.state = y),
        yn(t, e, u, n),
        vn(),
        (v = t.memoizedState),
        c || y !== v || va
          ? (typeof A == "function" && (zc(t, a, A, e), (v = t.memoizedState)),
            (s = va || Uo(t, a, s, e, y, v, i))
              ? (p ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = e),
                (t.memoizedState = v)),
            (u.props = e),
            (u.state = v),
            (u.context = i),
            (e = s))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (e = !1)));
    } else {
      ((u = t.stateNode),
        Ii(l, t),
        (i = t.memoizedProps),
        (p = ka(a, i)),
        (u.props = p),
        (A = t.pendingProps),
        (y = u.context),
        (v = a.contextType),
        (s = ve),
        typeof v == "object" && v !== null && (s = Fl(v)),
        (c = a.getDerivedStateFromProps),
        (v =
          typeof c == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((i !== A || y !== s) && Ro(t, u, e, s)),
        (va = !1),
        (y = t.memoizedState),
        (u.state = y),
        yn(t, e, u, n),
        vn());
      var g = t.memoizedState;
      i !== A ||
      y !== g ||
      va ||
      (l !== null && l.dependencies !== null && fu(l.dependencies))
        ? (typeof c == "function" && (zc(t, a, c, e), (g = t.memoizedState)),
          (p =
            va ||
            Uo(t, a, p, e, y, g, s) ||
            (l !== null && l.dependencies !== null && fu(l.dependencies)))
            ? (v ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(e, g, s),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(e, g, s)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (i === l.memoizedProps && y === l.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (i === l.memoizedProps && y === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = e),
              (t.memoizedState = g)),
          (u.props = e),
          (u.state = g),
          (u.context = s),
          (e = p))
        : (typeof u.componentDidUpdate != "function" ||
            (i === l.memoizedProps && y === l.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (i === l.memoizedProps && y === l.memoizedState) ||
            (t.flags |= 1024),
          (e = !1));
    }
    return (
      (u = e),
      Mu(l, t),
      (e = (t.flags & 128) !== 0),
      u || e
        ? ((u = t.stateNode),
          (a =
            e && typeof a.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (t.flags |= 1),
          l !== null && e
            ? ((t.child = $a(t, l.child, null, n)),
              (t.child = $a(t, null, a, n)))
            : Il(l, t, a, n),
          (t.memoizedState = u.state),
          (l = t.child))
        : (l = Ft(l, t, n)),
      l
    );
  }
  function $o(l, t, a, e) {
    return (Xa(), (t.flags |= 256), Il(l, t, a, e), t.child);
  }
  var jc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Mc(l) {
    return { baseLanes: l, cachePool: qs() };
  }
  function Nc(l, t, a) {
    return ((l = l !== null ? l.childLanes & ~a : 0), t && (l |= pt), l);
  }
  function Wo(l, t, a) {
    var e = t.pendingProps,
      n = !1,
      u = (t.flags & 128) !== 0,
      i;
    if (
      ((i = u) ||
        (i =
          l !== null && l.memoizedState === null ? !1 : (Hl.current & 2) !== 0),
      i && ((n = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (ul) {
        if (
          (n ? Sa(t) : pa(),
          (l = Nl)
            ? ((l = ed(l, _t)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: ra !== null ? { id: Bt, overflow: Yt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = Ms(l)),
                (a.return = t),
                (t.child = a),
                (kl = t),
                (Nl = null)))
            : (l = null),
          l === null)
        )
          throw ma(t);
        return (rf(l) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var c = e.children;
      return (
        (e = e.fallback),
        n
          ? (pa(),
            (n = t.mode),
            (c = Nu({ mode: "hidden", children: c }, n)),
            (e = Qa(e, n, a, null)),
            (c.return = t),
            (e.return = t),
            (c.sibling = e),
            (t.child = c),
            (e = t.child),
            (e.memoizedState = Mc(a)),
            (e.childLanes = Nc(l, i, a)),
            (t.memoizedState = jc),
            zn(null, e))
          : (Sa(t), _c(t, c))
      );
    }
    var s = l.memoizedState;
    if (s !== null && ((c = s.dehydrated), c !== null)) {
      if (u)
        t.flags & 256
          ? (Sa(t), (t.flags &= -257), (t = Oc(l, t, a)))
          : t.memoizedState !== null
            ? (pa(), (t.child = l.child), (t.flags |= 128), (t = null))
            : (pa(),
              (c = e.fallback),
              (n = t.mode),
              (e = Nu({ mode: "visible", children: e.children }, n)),
              (c = Qa(c, n, a, null)),
              (c.flags |= 2),
              (e.return = t),
              (c.return = t),
              (e.sibling = c),
              (t.child = e),
              $a(t, l.child, null, a),
              (e = t.child),
              (e.memoizedState = Mc(a)),
              (e.childLanes = Nc(l, i, a)),
              (t.memoizedState = jc),
              (t = zn(null, e)));
      else if ((Sa(t), rf(c))) {
        if (((i = c.nextSibling && c.nextSibling.dataset), i)) var v = i.dgst;
        ((i = v),
          (e = Error(d(419))),
          (e.stack = ""),
          (e.digest = i),
          sn({ value: e, source: null, stack: null }),
          (t = Oc(l, t, a)));
      } else if (
        (Ll || pe(l, t, a, !1), (i = (a & l.childLanes) !== 0), Ll || i)
      ) {
        if (
          ((i = xl),
          i !== null && ((e = Cf(i, a)), e !== 0 && e !== s.retryLane))
        )
          throw ((s.retryLane = e), La(l, e), ot(i, l, e), Tc);
        (of(c) || Bu(), (t = Oc(l, t, a)));
      } else
        of(c)
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = s.treeContext),
            (Nl = Dt(c.nextSibling)),
            (kl = t),
            (ul = !0),
            (da = null),
            (_t = !1),
            l !== null && Os(t, l),
            (t = _c(t, e.children)),
            (t.flags |= 4096));
      return t;
    }
    return n
      ? (pa(),
        (c = e.fallback),
        (n = t.mode),
        (s = l.child),
        (v = s.sibling),
        (e = Kt(s, { mode: "hidden", children: e.children })),
        (e.subtreeFlags = s.subtreeFlags & 65011712),
        v !== null ? (c = Kt(v, c)) : ((c = Qa(c, n, a, null)), (c.flags |= 2)),
        (c.return = t),
        (e.return = t),
        (e.sibling = c),
        (t.child = e),
        zn(null, e),
        (e = t.child),
        (c = l.child.memoizedState),
        c === null
          ? (c = Mc(a))
          : ((n = c.cachePool),
            n !== null
              ? ((s = Yl._currentValue),
                (n = n.parent !== s ? { parent: s, pool: s } : n))
              : (n = qs()),
            (c = { baseLanes: c.baseLanes | a, cachePool: n })),
        (e.memoizedState = c),
        (e.childLanes = Nc(l, i, a)),
        (t.memoizedState = jc),
        zn(l.child, e))
      : (Sa(t),
        (a = l.child),
        (l = a.sibling),
        (a = Kt(a, { mode: "visible", children: e.children })),
        (a.return = t),
        (a.sibling = null),
        l !== null &&
          ((i = t.deletions),
          i === null ? ((t.deletions = [l]), (t.flags |= 16)) : i.push(l)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function _c(l, t) {
    return (
      (t = Nu({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function Nu(l, t) {
    return ((l = vt(22, l, null, t)), (l.lanes = 0), l);
  }
  function Oc(l, t, a) {
    return (
      $a(t, l.child, null, a),
      (l = _c(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function ko(l, t, a) {
    l.lanes |= t;
    var e = l.alternate;
    (e !== null && (e.lanes |= t), Ki(l.return, t, a));
  }
  function Dc(l, t, a, e, n, u) {
    var i = l.memoizedState;
    i === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: e,
          tail: a,
          tailMode: n,
          treeForkCount: u,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = e),
        (i.tail = a),
        (i.tailMode = n),
        (i.treeForkCount = u));
  }
  function Fo(l, t, a) {
    var e = t.pendingProps,
      n = e.revealOrder,
      u = e.tail;
    e = e.children;
    var i = Hl.current,
      c = (i & 2) !== 0;
    if (
      (c ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1),
      U(Hl, i),
      Il(l, t, e, a),
      (e = ul ? fn : 0),
      !c && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null;) {
        if (l.tag === 13) l.memoizedState !== null && ko(l, a, t);
        else if (l.tag === 19) ko(l, a, t);
        else if (l.child !== null) {
          ((l.child.return = l), (l = l.child));
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null;) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        ((l.sibling.return = l.return), (l = l.sibling));
      }
    switch (n) {
      case "forwards":
        for (a = t.child, n = null; a !== null;)
          ((l = a.alternate),
            l !== null && yu(l) === null && (n = a),
            (a = a.sibling));
        ((a = n),
          a === null
            ? ((n = t.child), (t.child = null))
            : ((n = a.sibling), (a.sibling = null)),
          Dc(t, !1, n, a, u, e));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, n = t.child, t.child = null; n !== null;) {
          if (((l = n.alternate), l !== null && yu(l) === null)) {
            t.child = n;
            break;
          }
          ((l = n.sibling), (n.sibling = a), (a = n), (n = l));
        }
        Dc(t, !0, a, null, u, e);
        break;
      case "together":
        Dc(t, !1, null, null, void 0, e);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ft(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (Ea |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((pe(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(d(153));
    if (t.child !== null) {
      for (
        l = t.child, a = Kt(l, l.pendingProps), t.child = a, a.return = t;
        l.sibling !== null;
      )
        ((l = l.sibling),
          (a = a.sibling = Kt(l, l.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function Uc(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && fu(l)));
  }
  function th(l, t, a) {
    switch (t.tag) {
      case 3:
        (Bl(t, t.stateNode.containerInfo),
          ha(t, Yl, l.memoizedState.cache),
          Xa());
        break;
      case 27:
      case 5:
        Kl(t);
        break;
      case 4:
        Bl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ha(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), ec(t), null);
        break;
      case 13:
        var e = t.memoizedState;
        if (e !== null)
          return e.dehydrated !== null
            ? (Sa(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? Wo(l, t, a)
              : (Sa(t), (l = Ft(l, t, a)), l !== null ? l.sibling : null);
        Sa(t);
        break;
      case 19:
        var n = (l.flags & 128) !== 0;
        if (
          ((e = (a & t.childLanes) !== 0),
          e || (pe(l, t, a, !1), (e = (a & t.childLanes) !== 0)),
          n)
        ) {
          if (e) return Fo(l, t, a);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          U(Hl, Hl.current),
          e)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Zo(l, t, a, t.pendingProps));
      case 24:
        ha(t, Yl, l.memoizedState.cache);
    }
    return Ft(l, t, a);
  }
  function Io(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Ll = !0;
      else {
        if (!Uc(l, a) && (t.flags & 128) === 0) return ((Ll = !1), th(l, t, a));
        Ll = (l.flags & 131072) !== 0;
      }
    else ((Ll = !1), ul && (t.flags & 1048576) !== 0 && _s(t, fn, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          var e = t.pendingProps;
          if (((l = Ja(t.elementType)), (t.type = l), typeof l == "function"))
            Bi(l)
              ? ((e = ka(l, e)), (t.tag = 1), (t = wo(null, t, l, e, a)))
              : ((t.tag = 0), (t = xc(null, t, l, e, a)));
          else {
            if (l != null) {
              var n = l.$$typeof;
              if (n === hl) {
                ((t.tag = 11), (t = Lo(null, t, l, e, a)));
                break l;
              } else if (n === L) {
                ((t.tag = 14), (t = Qo(null, t, l, e, a)));
                break l;
              }
            }
            throw ((t = dt(l) || l), Error(d(306, t, "")));
          }
        }
        return t;
      case 0:
        return xc(l, t, t.type, t.pendingProps, a);
      case 1:
        return ((e = t.type), (n = ka(e, t.pendingProps)), wo(l, t, e, n, a));
      case 3:
        l: {
          if ((Bl(t, t.stateNode.containerInfo), l === null))
            throw Error(d(387));
          e = t.pendingProps;
          var u = t.memoizedState;
          ((n = u.element), Ii(l, t), yn(t, e, null, a));
          var i = t.memoizedState;
          if (
            ((e = i.cache),
            ha(t, Yl, e),
            e !== u.cache && Ji(t, [Yl], a, !0),
            vn(),
            (e = i.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: e, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = $o(l, t, e, a);
              break l;
            } else if (e !== n) {
              ((n = jt(Error(d(424)), t)), sn(n), (t = $o(l, t, e, a)));
              break l;
            } else
              for (
                l = t.stateNode.containerInfo,
                  l.nodeType === 9
                    ? (l = l.body)
                    : (l = l.nodeName === "HTML" ? l.ownerDocument.body : l),
                  Nl = Dt(l.firstChild),
                  kl = t,
                  ul = !0,
                  da = null,
                  _t = !0,
                  a = Xs(t, null, e, a),
                  t.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
          else {
            if ((Xa(), e === n)) {
              t = Ft(l, t, a);
              break l;
            }
            Il(l, t, e, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Mu(l, t),
          l === null
            ? (a = sd(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : ul ||
                ((a = t.type),
                (l = t.pendingProps),
                (e = Vu(P.current).createElement(a)),
                (e[Wl] = t),
                (e[nt] = l),
                Pl(e, a, l),
                Jl(e),
                (t.stateNode = e))
            : (t.memoizedState = sd(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Kl(t),
          l === null &&
            ul &&
            ((e = t.stateNode = id(t.type, t.pendingProps, P.current)),
            (kl = t),
            (_t = !0),
            (n = Nl),
            Ma(t.type) ? ((df = n), (Nl = Dt(e.firstChild))) : (Nl = n)),
          Il(l, t, t.pendingProps.children, a),
          Mu(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            ul &&
            ((n = e = Nl) &&
              ((e = Dh(e, t.type, t.pendingProps, _t)),
              e !== null
                ? ((t.stateNode = e),
                  (kl = t),
                  (Nl = Dt(e.firstChild)),
                  (_t = !1),
                  (n = !0))
                : (n = !1)),
            n || ma(t)),
          Kl(t),
          (n = t.type),
          (u = t.pendingProps),
          (i = l !== null ? l.memoizedProps : null),
          (e = u.children),
          cf(n, u) ? (e = null) : i !== null && cf(n, i) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = uc(l, t, Jm, null, null, a)), (qn._currentValue = n)),
          Mu(l, t),
          Il(l, t, e, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            ul &&
            ((l = a = Nl) &&
              ((a = Uh(a, t.pendingProps, _t)),
              a !== null
                ? ((t.stateNode = a), (kl = t), (Nl = null), (l = !0))
                : (l = !1)),
            l || ma(t)),
          null
        );
      case 13:
        return Wo(l, t, a);
      case 4:
        return (
          Bl(t, t.stateNode.containerInfo),
          (e = t.pendingProps),
          l === null ? (t.child = $a(t, null, e, a)) : Il(l, t, e, a),
          t.child
        );
      case 11:
        return Lo(l, t, t.type, t.pendingProps, a);
      case 7:
        return (Il(l, t, t.pendingProps, a), t.child);
      case 8:
        return (Il(l, t, t.pendingProps.children, a), t.child);
      case 12:
        return (Il(l, t, t.pendingProps.children, a), t.child);
      case 10:
        return (
          (e = t.pendingProps),
          ha(t, t.type, e.value),
          Il(l, t, e.children, a),
          t.child
        );
      case 9:
        return (
          (n = t.type._context),
          (e = t.pendingProps.children),
          Va(t),
          (n = Fl(n)),
          (e = e(n)),
          (t.flags |= 1),
          Il(l, t, e, a),
          t.child
        );
      case 14:
        return Qo(l, t, t.type, t.pendingProps, a);
      case 15:
        return Xo(l, t, t.type, t.pendingProps, a);
      case 19:
        return Fo(l, t, a);
      case 31:
        return lh(l, t, a);
      case 22:
        return Zo(l, t, a, t.pendingProps);
      case 24:
        return (
          Va(t),
          (e = Fl(Yl)),
          l === null
            ? ((n = Wi()),
              n === null &&
                ((n = xl),
                (u = wi()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= a),
                (n = u)),
              (t.memoizedState = { parent: e, cache: n }),
              Fi(t),
              ha(t, Yl, n))
            : ((l.lanes & a) !== 0 && (Ii(l, t), yn(t, null, null, a), vn()),
              (n = l.memoizedState),
              (u = t.memoizedState),
              n.parent !== e
                ? ((n = { parent: e, cache: e }),
                  (t.memoizedState = n),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = n),
                  ha(t, Yl, e))
                : ((e = u.cache),
                  ha(t, Yl, e),
                  e !== n.cache && Ji(t, [Yl], a, !0))),
          Il(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(d(156, t.tag));
  }
  function It(l) {
    l.flags |= 4;
  }
  function Rc(l, t, a, e, n) {
    if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
      if (((l.flags |= 16777216), (n & 335544128) === n))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (xr()) l.flags |= 8192;
        else throw ((wa = du), ki);
    } else l.flags &= -16777217;
  }
  function Po(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !hd(t)))
      if (xr()) l.flags |= 8192;
      else throw ((wa = du), ki);
  }
  function _u(l, t) {
    (t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? Df() : 536870912), (l.lanes |= t), (De |= t)));
  }
  function En(l, t) {
    if (!ul)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null;)
            (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (l.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = l.tail;
          for (var e = null; a !== null;)
            (a.alternate !== null && (e = a), (a = a.sibling));
          e === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (e.sibling = null);
      }
  }
  function _l(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      a = 0,
      e = 0;
    if (t)
      for (var n = l.child; n !== null;)
        ((a |= n.lanes | n.childLanes),
          (e |= n.subtreeFlags & 65011712),
          (e |= n.flags & 65011712),
          (n.return = l),
          (n = n.sibling));
    else
      for (n = l.child; n !== null;)
        ((a |= n.lanes | n.childLanes),
          (e |= n.subtreeFlags),
          (e |= n.flags),
          (n.return = l),
          (n = n.sibling));
    return ((l.subtreeFlags |= e), (l.childLanes = a), t);
  }
  function ah(l, t, a) {
    var e = t.pendingProps;
    switch ((Qi(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (_l(t), null);
      case 1:
        return (_l(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (e = null),
          l !== null && (e = l.memoizedState.cache),
          t.memoizedState.cache !== e && (t.flags |= 2048),
          $t(Yl),
          Ul(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            (Se(t)
              ? It(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Zi())),
          _l(t),
          null
        );
      case 26:
        var n = t.type,
          u = t.memoizedState;
        return (
          l === null
            ? (It(t),
              u !== null ? (_l(t), Po(t, u)) : (_l(t), Rc(t, n, null, e, a)))
            : u
              ? u !== l.memoizedState
                ? (It(t), _l(t), Po(t, u))
                : (_l(t), (t.flags &= -16777217))
              : ((l = l.memoizedProps),
                l !== e && It(t),
                _l(t),
                Rc(t, n, l, e, a)),
          null
        );
      case 27:
        if (
          (ia(t),
          (a = P.current),
          (n = t.type),
          l !== null && t.stateNode != null)
        )
          l.memoizedProps !== e && It(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(d(166));
            return (_l(t), null);
          }
          ((l = q.current),
            Se(t) ? Ds(t) : ((l = id(n, e, a)), (t.stateNode = l), It(t)));
        }
        return (_l(t), null);
      case 5:
        if ((ia(t), (n = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== e && It(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(d(166));
            return (_l(t), null);
          }
          if (((u = q.current), Se(t))) Ds(t);
          else {
            var i = Vu(P.current);
            switch (u) {
              case 1:
                u = i.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    u = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n,
                    );
                    break;
                  case "script":
                    ((u = i.createElement("div")),
                      (u.innerHTML = "<script><\/script>"),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case "select":
                    ((u =
                      typeof e.is == "string"
                        ? i.createElement("select", { is: e.is })
                        : i.createElement("select")),
                      e.multiple
                        ? (u.multiple = !0)
                        : e.size && (u.size = e.size));
                    break;
                  default:
                    u =
                      typeof e.is == "string"
                        ? i.createElement(n, { is: e.is })
                        : i.createElement(n);
                }
            }
            ((u[Wl] = t), (u[nt] = e));
            l: for (i = t.child; i !== null;) {
              if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null;) {
                if (i.return === null || i.return === t) break l;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            t.stateNode = u;
            l: switch ((Pl(u, n, e), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!e.autoFocus;
                break l;
              case "img":
                e = !0;
                break l;
              default:
                e = !1;
            }
            e && It(t);
          }
        }
        return (
          _l(t),
          Rc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a),
          null
        );
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== e && It(t);
        else {
          if (typeof e != "string" && t.stateNode === null) throw Error(d(166));
          if (((l = P.current), Se(t))) {
            if (
              ((l = t.stateNode),
              (a = t.memoizedProps),
              (e = null),
              (n = kl),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  e = n.memoizedProps;
              }
            ((l[Wl] = t),
              (l = !!(
                l.nodeValue === a ||
                (e !== null && e.suppressHydrationWarning === !0) ||
                Wr(l.nodeValue, a)
              )),
              l || ma(t, !0));
          } else
            ((l = Vu(l).createTextNode(e)), (l[Wl] = t), (t.stateNode = l));
        }
        return (_l(t), null);
      case 31:
        if (((a = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((e = Se(t)), a !== null)) {
            if (l === null) {
              if (!e) throw Error(d(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(d(557));
              l[Wl] = t;
            } else
              (Xa(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (_l(t), (l = !1));
          } else
            ((a = Zi()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = a),
              (l = !0));
          if (!l) return t.flags & 256 ? (gt(t), t) : (gt(t), null);
          if ((t.flags & 128) !== 0) throw Error(d(558));
        }
        return (_l(t), null);
      case 13:
        if (
          ((e = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((n = Se(t)), e !== null && e.dehydrated !== null)) {
            if (l === null) {
              if (!n) throw Error(d(318));
              if (
                ((n = t.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(d(317));
              n[Wl] = t;
            } else
              (Xa(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (_l(t), (n = !1));
          } else
            ((n = Zi()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = n),
              (n = !0));
          if (!n) return t.flags & 256 ? (gt(t), t) : (gt(t), null);
        }
        return (
          gt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = e !== null),
              (l = l !== null && l.memoizedState !== null),
              a &&
                ((e = t.child),
                (n = null),
                e.alternate !== null &&
                  e.alternate.memoizedState !== null &&
                  e.alternate.memoizedState.cachePool !== null &&
                  (n = e.alternate.memoizedState.cachePool.pool),
                (u = null),
                e.memoizedState !== null &&
                  e.memoizedState.cachePool !== null &&
                  (u = e.memoizedState.cachePool.pool),
                u !== n && (e.flags |= 2048)),
              a !== l && a && (t.child.flags |= 8192),
              _u(t, t.updateQueue),
              _l(t),
              null)
        );
      case 4:
        return (Ul(), l === null && tf(t.stateNode.containerInfo), _l(t), null);
      case 10:
        return ($t(t.type), _l(t), null);
      case 19:
        if ((T(Hl), (e = t.memoizedState), e === null)) return (_l(t), null);
        if (((n = (t.flags & 128) !== 0), (u = e.rendering), u === null))
          if (n) En(e, !1);
          else {
            if (Cl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null;) {
                if (((u = yu(l)), u !== null)) {
                  for (
                    t.flags |= 128,
                      En(e, !1),
                      l = u.updateQueue,
                      t.updateQueue = l,
                      _u(t, l),
                      t.subtreeFlags = 0,
                      l = a,
                      a = t.child;
                    a !== null;
                  )
                    (js(a, l), (a = a.sibling));
                  return (
                    U(Hl, (Hl.current & 1) | 2),
                    ul && Jt(t, e.treeForkCount),
                    t.child
                  );
                }
                l = l.sibling;
              }
            e.tail !== null &&
              $l() > Cu &&
              ((t.flags |= 128), (n = !0), En(e, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((l = yu(u)), l !== null)) {
              if (
                ((t.flags |= 128),
                (n = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                _u(t, l),
                En(e, !0),
                e.tail === null &&
                  e.tailMode === "hidden" &&
                  !u.alternate &&
                  !ul)
              )
                return (_l(t), null);
            } else
              2 * $l() - e.renderingStartTime > Cu &&
                a !== 536870912 &&
                ((t.flags |= 128), (n = !0), En(e, !1), (t.lanes = 4194304));
          e.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((l = e.last),
              l !== null ? (l.sibling = u) : (t.child = u),
              (e.last = u));
        }
        return e.tail !== null
          ? ((l = e.tail),
            (e.rendering = l),
            (e.tail = l.sibling),
            (e.renderingStartTime = $l()),
            (l.sibling = null),
            (a = Hl.current),
            U(Hl, n ? (a & 1) | 2 : a & 1),
            ul && Jt(t, e.treeForkCount),
            l)
          : (_l(t), null);
      case 22:
      case 23:
        return (
          gt(t),
          ac(),
          (e = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== e && (t.flags |= 8192)
            : e && (t.flags |= 8192),
          e
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (_l(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : _l(t),
          (a = t.updateQueue),
          a !== null && _u(t, a.retryQueue),
          (a = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          (e = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (e = t.memoizedState.cachePool.pool),
          e !== a && (t.flags |= 2048),
          l !== null && T(Ka),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          $t(Yl),
          _l(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(d(156, t.tag));
  }
  function eh(l, t) {
    switch ((Qi(t), t.tag)) {
      case 1:
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          $t(Yl),
          Ul(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (ia(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((gt(t), t.alternate === null)) throw Error(d(340));
          Xa();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 13:
        if (
          (gt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(d(340));
          Xa();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return (T(Hl), null);
      case 4:
        return (Ul(), null);
      case 10:
        return ($t(t.type), null);
      case 22:
      case 23:
        return (
          gt(t),
          ac(),
          l !== null && T(Ka),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return ($t(Yl), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function lr(l, t) {
    switch ((Qi(t), t.tag)) {
      case 3:
        ($t(Yl), Ul());
        break;
      case 26:
      case 27:
      case 5:
        ia(t);
        break;
      case 4:
        Ul();
        break;
      case 31:
        t.memoizedState !== null && gt(t);
        break;
      case 13:
        gt(t);
        break;
      case 19:
        T(Hl);
        break;
      case 10:
        $t(t.type);
        break;
      case 22:
      case 23:
        (gt(t), ac(), l !== null && T(Ka));
        break;
      case 24:
        $t(Yl);
    }
  }
  function An(l, t) {
    try {
      var a = t.updateQueue,
        e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            e = void 0;
            var u = a.create,
              i = a.inst;
            ((e = u()), (i.destroy = e));
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (c) {
      gl(t, t.return, c);
    }
  }
  function ba(l, t, a) {
    try {
      var e = t.updateQueue,
        n = e !== null ? e.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        e = u;
        do {
          if ((e.tag & l) === l) {
            var i = e.inst,
              c = i.destroy;
            if (c !== void 0) {
              ((i.destroy = void 0), (n = t));
              var s = a,
                v = c;
              try {
                v();
              } catch (p) {
                gl(n, s, p);
              }
            }
          }
          e = e.next;
        } while (e !== u);
      }
    } catch (p) {
      gl(t, t.return, p);
    }
  }
  function tr(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Vs(t, a);
      } catch (e) {
        gl(l, l.return, e);
      }
    }
  }
  function ar(l, t, a) {
    ((a.props = ka(l.type, l.memoizedProps)), (a.state = l.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (e) {
      gl(l, t, e);
    }
  }
  function Tn(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var e = l.stateNode;
            break;
          case 30:
            e = l.stateNode;
            break;
          default:
            e = l.stateNode;
        }
        typeof a == "function" ? (l.refCleanup = a(e)) : (a.current = e);
      }
    } catch (n) {
      gl(l, t, n);
    }
  }
  function Gt(l, t) {
    var a = l.ref,
      e = l.refCleanup;
    if (a !== null)
      if (typeof e == "function")
        try {
          e();
        } catch (n) {
          gl(l, t, n);
        } finally {
          ((l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (n) {
          gl(l, t, n);
        }
      else a.current = null;
  }
  function er(l) {
    var t = l.type,
      a = l.memoizedProps,
      e = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break l;
        case "img":
          a.src ? (e.src = a.src) : a.srcSet && (e.srcset = a.srcSet);
      }
    } catch (n) {
      gl(l, l.return, n);
    }
  }
  function Cc(l, t, a) {
    try {
      var e = l.stateNode;
      (xh(e, l.type, a, t), (e[nt] = t));
    } catch (n) {
      gl(l, l.return, n);
    }
  }
  function nr(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && Ma(l.type)) ||
      l.tag === 4
    );
  }
  function Hc(l) {
    l: for (;;) {
      for (; l.sibling === null;) {
        if (l.return === null || nr(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;
      ) {
        if (
          (l.tag === 27 && Ma(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        ((l.child.return = l), (l = l.child));
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function qc(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      ((l = l.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(l, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            t.appendChild(l),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = Zt)));
    else if (
      e !== 4 &&
      (e === 27 && Ma(l.type) && ((a = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (qc(l, t, a), l = l.sibling; l !== null;)
        (qc(l, t, a), (l = l.sibling));
  }
  function Ou(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      ((l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l));
    else if (
      e !== 4 &&
      (e === 27 && Ma(l.type) && (a = l.stateNode), (l = l.child), l !== null)
    )
      for (Ou(l, t, a), l = l.sibling; l !== null;)
        (Ou(l, t, a), (l = l.sibling));
  }
  function ur(l) {
    var t = l.stateNode,
      a = l.memoizedProps;
    try {
      for (var e = l.type, n = t.attributes; n.length;)
        t.removeAttributeNode(n[0]);
      (Pl(t, e, a), (t[Wl] = l), (t[nt] = a));
    } catch (u) {
      gl(l, l.return, u);
    }
  }
  var Pt = !1,
    Ql = !1,
    Bc = !1,
    ir = typeof WeakSet == "function" ? WeakSet : Set,
    wl = null;
  function nh(l, t) {
    if (((l = l.containerInfo), (nf = Fu), (l = gs(l)), Oi(l))) {
      if ("selectionStart" in l)
        var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var e = a.getSelection && a.getSelection();
          if (e && e.rangeCount !== 0) {
            a = e.anchorNode;
            var n = e.anchorOffset,
              u = e.focusNode;
            e = e.focusOffset;
            try {
              (a.nodeType, u.nodeType);
            } catch {
              a = null;
              break l;
            }
            var i = 0,
              c = -1,
              s = -1,
              v = 0,
              p = 0,
              A = l,
              y = null;
            t: for (;;) {
              for (
                var g;
                A !== a || (n !== 0 && A.nodeType !== 3) || (c = i + n),
                  A !== u || (e !== 0 && A.nodeType !== 3) || (s = i + e),
                  A.nodeType === 3 && (i += A.nodeValue.length),
                  (g = A.firstChild) !== null;
              )
                ((y = A), (A = g));
              for (;;) {
                if (A === l) break t;
                if (
                  (y === a && ++v === n && (c = i),
                  y === u && ++p === e && (s = i),
                  (g = A.nextSibling) !== null)
                )
                  break;
                ((A = y), (y = A.parentNode));
              }
              A = g;
            }
            a = c === -1 || s === -1 ? null : { start: c, end: s };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      uf = { focusedElem: l, selectionRange: a }, Fu = !1, wl = t;
      wl !== null;
    )
      if (
        ((t = wl), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)
      )
        ((l.return = t), (wl = l));
      else
        for (; wl !== null;) {
          switch (((t = wl), (u = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              if (
                (l & 4) !== 0 &&
                ((l = t.updateQueue),
                (l = l !== null ? l.events : null),
                l !== null)
              )
                for (a = 0; a < l.length; a++)
                  ((n = l[a]), (n.ref.impl = n.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && u !== null) {
                ((l = void 0),
                  (a = t),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (e = a.stateNode));
                try {
                  var H = ka(a.type, n);
                  ((l = e.getSnapshotBeforeUpdate(H, u)),
                    (e.__reactInternalSnapshotBeforeUpdate = l));
                } catch (X) {
                  gl(a, a.return, X);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)
                )
                  sf(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      sf(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(d(163));
          }
          if (((l = t.sibling), l !== null)) {
            ((l.return = t.return), (wl = l));
            break;
          }
          wl = t.return;
        }
  }
  function cr(l, t, a) {
    var e = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (ta(l, a), e & 4 && An(5, a));
        break;
      case 1:
        if ((ta(l, a), e & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (i) {
              gl(a, a.return, i);
            }
          else {
            var n = ka(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(n, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              gl(a, a.return, i);
            }
          }
        (e & 64 && tr(a), e & 512 && Tn(a, a.return));
        break;
      case 3:
        if ((ta(l, a), e & 64 && ((l = a.updateQueue), l !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Vs(l, t);
          } catch (i) {
            gl(a, a.return, i);
          }
        }
        break;
      case 27:
        t === null && e & 4 && ur(a);
      case 26:
      case 5:
        (ta(l, a), t === null && e & 4 && er(a), e & 512 && Tn(a, a.return));
        break;
      case 12:
        ta(l, a);
        break;
      case 31:
        (ta(l, a), e & 4 && or(l, a));
        break;
      case 13:
        (ta(l, a),
          e & 4 && rr(l, a),
          e & 64 &&
            ((l = a.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((a = mh.bind(null, a)), Rh(l, a)))));
        break;
      case 22:
        if (((e = a.memoizedState !== null || Pt), !e)) {
          ((t = (t !== null && t.memoizedState !== null) || Ql), (n = Pt));
          var u = Ql;
          ((Pt = e),
            (Ql = t) && !u ? aa(l, a, (a.subtreeFlags & 8772) !== 0) : ta(l, a),
            (Pt = n),
            (Ql = u));
        }
        break;
      case 30:
        break;
      default:
        ta(l, a);
    }
  }
  function fr(l) {
    var t = l.alternate;
    (t !== null && ((l.alternate = null), fr(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && mi(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null));
  }
  var Dl = null,
    it = !1;
  function la(l, t, a) {
    for (a = a.child; a !== null;) (sr(l, t, a), (a = a.sibling));
  }
  function sr(l, t, a) {
    if (Q && typeof Q.onCommitFiberUnmount == "function")
      try {
        Q.onCommitFiberUnmount(Y, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (Ql || Gt(a, t),
          la(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        Ql || Gt(a, t);
        var e = Dl,
          n = it;
        (Ma(a.type) && ((Dl = a.stateNode), (it = !1)),
          la(l, t, a),
          Rn(a.stateNode),
          (Dl = e),
          (it = n));
        break;
      case 5:
        Ql || Gt(a, t);
      case 6:
        if (
          ((e = Dl),
          (n = it),
          (Dl = null),
          la(l, t, a),
          (Dl = e),
          (it = n),
          Dl !== null)
        )
          if (it)
            try {
              (Dl.nodeType === 9
                ? Dl.body
                : Dl.nodeName === "HTML"
                  ? Dl.ownerDocument.body
                  : Dl
              ).removeChild(a.stateNode);
            } catch (u) {
              gl(a, t, u);
            }
          else
            try {
              Dl.removeChild(a.stateNode);
            } catch (u) {
              gl(a, t, u);
            }
        break;
      case 18:
        Dl !== null &&
          (it
            ? ((l = Dl),
              td(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                    ? l.ownerDocument.body
                    : l,
                a.stateNode,
              ),
              Ge(l))
            : td(Dl, a.stateNode));
        break;
      case 4:
        ((e = Dl),
          (n = it),
          (Dl = a.stateNode.containerInfo),
          (it = !0),
          la(l, t, a),
          (Dl = e),
          (it = n));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (ba(2, a, t), Ql || ba(4, a, t), la(l, t, a));
        break;
      case 1:
        (Ql ||
          (Gt(a, t),
          (e = a.stateNode),
          typeof e.componentWillUnmount == "function" && ar(a, t, e)),
          la(l, t, a));
        break;
      case 21:
        la(l, t, a);
        break;
      case 22:
        ((Ql = (e = Ql) || a.memoizedState !== null), la(l, t, a), (Ql = e));
        break;
      default:
        la(l, t, a);
    }
  }
  function or(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        Ge(l);
      } catch (a) {
        gl(t, t.return, a);
      }
    }
  }
  function rr(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        Ge(l);
      } catch (a) {
        gl(t, t.return, a);
      }
  }
  function uh(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return (t === null && (t = l.stateNode = new ir()), t);
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new ir()),
          t
        );
      default:
        throw Error(d(435, l.tag));
    }
  }
  function Du(l, t) {
    var a = uh(l);
    t.forEach(function (e) {
      if (!a.has(e)) {
        a.add(e);
        var n = hh.bind(null, l, e);
        e.then(n, n);
      }
    });
  }
  function ct(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var e = 0; e < a.length; e++) {
        var n = a[e],
          u = l,
          i = t,
          c = i;
        l: for (; c !== null;) {
          switch (c.tag) {
            case 27:
              if (Ma(c.type)) {
                ((Dl = c.stateNode), (it = !1));
                break l;
              }
              break;
            case 5:
              ((Dl = c.stateNode), (it = !1));
              break l;
            case 3:
            case 4:
              ((Dl = c.stateNode.containerInfo), (it = !0));
              break l;
          }
          c = c.return;
        }
        if (Dl === null) throw Error(d(160));
        (sr(u, i, n),
          (Dl = null),
          (it = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null;) (dr(t, l), (t = t.sibling));
  }
  var Ct = null;
  function dr(l, t) {
    var a = l.alternate,
      e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ct(t, l),
          ft(l),
          e & 4 && (ba(3, l, l.return), An(3, l), ba(5, l, l.return)));
        break;
      case 1:
        (ct(t, l),
          ft(l),
          e & 512 && (Ql || a === null || Gt(a, a.return)),
          e & 64 &&
            Pt &&
            ((l = l.updateQueue),
            l !== null &&
              ((e = l.callbacks),
              e !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? e : a.concat(e))))));
        break;
      case 26:
        var n = Ct;
        if (
          (ct(t, l),
          ft(l),
          e & 512 && (Ql || a === null || Gt(a, a.return)),
          e & 4)
        ) {
          var u = a !== null ? a.memoizedState : null;
          if (((e = l.memoizedState), a === null))
            if (e === null)
              if (l.stateNode === null) {
                l: {
                  ((e = l.type),
                    (a = l.memoizedProps),
                    (n = n.ownerDocument || n));
                  t: switch (e) {
                    case "title":
                      ((u = n.getElementsByTagName("title")[0]),
                        (!u ||
                          u[ke] ||
                          u[Wl] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = n.createElement(e)),
                          n.head.insertBefore(
                            u,
                            n.querySelector("head > title"),
                          )),
                        Pl(u, e, a),
                        (u[Wl] = l),
                        Jl(u),
                        (e = u));
                      break l;
                    case "link":
                      var i = dd("link", "href", n).get(e + (a.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (
                            ((u = i[c]),
                            u.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              u.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              u.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              u.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      ((u = n.createElement(e)),
                        Pl(u, e, a),
                        n.head.appendChild(u));
                      break;
                    case "meta":
                      if (
                        (i = dd("meta", "content", n).get(
                          e + (a.content || ""),
                        ))
                      ) {
                        for (c = 0; c < i.length; c++)
                          if (
                            ((u = i[c]),
                            u.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              u.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              u.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              u.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      ((u = n.createElement(e)),
                        Pl(u, e, a),
                        n.head.appendChild(u));
                      break;
                    default:
                      throw Error(d(468, e));
                  }
                  ((u[Wl] = l), Jl(u), (e = u));
                }
                l.stateNode = e;
              } else md(n, l.type, l.stateNode);
            else l.stateNode = rd(n, e, l.memoizedProps);
          else
            u !== e
              ? (u === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : u.count--,
                e === null
                  ? md(n, l.type, l.stateNode)
                  : rd(n, e, l.memoizedProps))
              : e === null &&
                l.stateNode !== null &&
                Cc(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (ct(t, l),
          ft(l),
          e & 512 && (Ql || a === null || Gt(a, a.return)),
          a !== null && e & 4 && Cc(l, l.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (ct(t, l),
          ft(l),
          e & 512 && (Ql || a === null || Gt(a, a.return)),
          l.flags & 32)
        ) {
          n = l.stateNode;
          try {
            fe(n, "");
          } catch (H) {
            gl(l, l.return, H);
          }
        }
        (e & 4 &&
          l.stateNode != null &&
          ((n = l.memoizedProps), Cc(l, n, a !== null ? a.memoizedProps : n)),
          e & 1024 && (Bc = !0));
        break;
      case 6:
        if ((ct(t, l), ft(l), e & 4)) {
          if (l.stateNode === null) throw Error(d(162));
          ((e = l.memoizedProps), (a = l.stateNode));
          try {
            a.nodeValue = e;
          } catch (H) {
            gl(l, l.return, H);
          }
        }
        break;
      case 3:
        if (
          ((wu = null),
          (n = Ct),
          (Ct = Ku(t.containerInfo)),
          ct(t, l),
          (Ct = n),
          ft(l),
          e & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Ge(t.containerInfo);
          } catch (H) {
            gl(l, l.return, H);
          }
        Bc && ((Bc = !1), mr(l));
        break;
      case 4:
        ((e = Ct),
          (Ct = Ku(l.stateNode.containerInfo)),
          ct(t, l),
          ft(l),
          (Ct = e));
        break;
      case 12:
        (ct(t, l), ft(l));
        break;
      case 31:
        (ct(t, l),
          ft(l),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), Du(l, e))));
        break;
      case 13:
        (ct(t, l),
          ft(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (Ru = $l()),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), Du(l, e))));
        break;
      case 22:
        n = l.memoizedState !== null;
        var s = a !== null && a.memoizedState !== null,
          v = Pt,
          p = Ql;
        if (
          ((Pt = v || n),
          (Ql = p || s),
          ct(t, l),
          (Ql = p),
          (Pt = v),
          ft(l),
          e & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (a === null || s || Pt || Ql || Fa(l)),
              a = null,
              t = l;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                s = a = t;
                try {
                  if (((u = s.stateNode), n))
                    ((i = u.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"));
                  else {
                    c = s.stateNode;
                    var A = s.memoizedProps.style,
                      y =
                        A != null && A.hasOwnProperty("display")
                          ? A.display
                          : null;
                    c.style.display =
                      y == null || typeof y == "boolean" ? "" : ("" + y).trim();
                  }
                } catch (H) {
                  gl(s, s.return, H);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                s = t;
                try {
                  s.stateNode.nodeValue = n ? "" : s.memoizedProps;
                } catch (H) {
                  gl(s, s.return, H);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                s = t;
                try {
                  var g = s.stateNode;
                  n ? ad(g, !0) : ad(s.stateNode, !1);
                } catch (H) {
                  gl(s, s.return, H);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null;) {
              if (t.return === null || t.return === l) break l;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        e & 4 &&
          ((e = l.updateQueue),
          e !== null &&
            ((a = e.retryQueue),
            a !== null && ((e.retryQueue = null), Du(l, a))));
        break;
      case 19:
        (ct(t, l),
          ft(l),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), Du(l, e))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ct(t, l), ft(l));
    }
  }
  function ft(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, e = l.return; e !== null;) {
          if (nr(e)) {
            a = e;
            break;
          }
          e = e.return;
        }
        if (a == null) throw Error(d(160));
        switch (a.tag) {
          case 27:
            var n = a.stateNode,
              u = Hc(l);
            Ou(l, u, n);
            break;
          case 5:
            var i = a.stateNode;
            a.flags & 32 && (fe(i, ""), (a.flags &= -33));
            var c = Hc(l);
            Ou(l, c, i);
            break;
          case 3:
          case 4:
            var s = a.stateNode.containerInfo,
              v = Hc(l);
            qc(l, v, s);
            break;
          default:
            throw Error(d(161));
        }
      } catch (p) {
        gl(l, l.return, p);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function mr(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null;) {
        var t = l;
        (mr(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling));
      }
  }
  function ta(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null;) (cr(l, t.alternate, t), (t = t.sibling));
  }
  function Fa(l) {
    for (l = l.child; l !== null;) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (ba(4, t, t.return), Fa(t));
          break;
        case 1:
          Gt(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && ar(t, t.return, a),
            Fa(t));
          break;
        case 27:
          Rn(t.stateNode);
        case 26:
        case 5:
          (Gt(t, t.return), Fa(t));
          break;
        case 22:
          t.memoizedState === null && Fa(t);
          break;
        case 30:
          Fa(t);
          break;
        default:
          Fa(t);
      }
      l = l.sibling;
    }
  }
  function aa(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
      var e = t.alternate,
        n = l,
        u = t,
        i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (aa(n, u, a), An(4, u));
          break;
        case 1:
          if (
            (aa(n, u, a),
            (e = u),
            (n = e.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (v) {
              gl(e, e.return, v);
            }
          if (((e = u), (n = e.updateQueue), n !== null)) {
            var c = e.stateNode;
            try {
              var s = n.shared.hiddenCallbacks;
              if (s !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < s.length; n++)
                  Zs(s[n], c);
            } catch (v) {
              gl(e, e.return, v);
            }
          }
          (a && i & 64 && tr(u), Tn(u, u.return));
          break;
        case 27:
          ur(u);
        case 26:
        case 5:
          (aa(n, u, a), a && e === null && i & 4 && er(u), Tn(u, u.return));
          break;
        case 12:
          aa(n, u, a);
          break;
        case 31:
          (aa(n, u, a), a && i & 4 && or(n, u));
          break;
        case 13:
          (aa(n, u, a), a && i & 4 && rr(n, u));
          break;
        case 22:
          (u.memoizedState === null && aa(n, u, a), Tn(u, u.return));
          break;
        case 30:
          break;
        default:
          aa(n, u, a);
      }
      t = t.sibling;
    }
  }
  function Yc(l, t) {
    var a = null;
    (l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (a = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== a && (l != null && l.refCount++, a != null && on(a)));
  }
  function Gc(l, t) {
    ((l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && on(l)));
  }
  function Ht(l, t, a, e) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) (hr(l, t, a, e), (t = t.sibling));
  }
  function hr(l, t, a, e) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Ht(l, t, a, e), n & 2048 && An(9, t));
        break;
      case 1:
        Ht(l, t, a, e);
        break;
      case 3:
        (Ht(l, t, a, e),
          n & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && on(l))));
        break;
      case 12:
        if (n & 2048) {
          (Ht(l, t, a, e), (l = t.stateNode));
          try {
            var u = t.memoizedProps,
              i = u.id,
              c = u.onPostCommit;
            typeof c == "function" &&
              c(
                i,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0,
              );
          } catch (s) {
            gl(t, t.return, s);
          }
        } else Ht(l, t, a, e);
        break;
      case 31:
        Ht(l, t, a, e);
        break;
      case 13:
        Ht(l, t, a, e);
        break;
      case 23:
        break;
      case 22:
        ((u = t.stateNode),
          (i = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? Ht(l, t, a, e)
              : xn(l, t)
            : u._visibility & 2
              ? Ht(l, t, a, e)
              : ((u._visibility |= 2),
                Ne(l, t, a, e, (t.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && Yc(i, t));
        break;
      case 24:
        (Ht(l, t, a, e), n & 2048 && Gc(t.alternate, t));
        break;
      default:
        Ht(l, t, a, e);
    }
  }
  function Ne(l, t, a, e, n) {
    for (
      n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var u = l,
        i = t,
        c = a,
        s = e,
        v = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (Ne(u, i, c, s, n), An(8, i));
          break;
        case 23:
          break;
        case 22:
          var p = i.stateNode;
          (i.memoizedState !== null
            ? p._visibility & 2
              ? Ne(u, i, c, s, n)
              : xn(u, i)
            : ((p._visibility |= 2), Ne(u, i, c, s, n)),
            n && v & 2048 && Yc(i.alternate, i));
          break;
        case 24:
          (Ne(u, i, c, s, n), n && v & 2048 && Gc(i.alternate, i));
          break;
        default:
          Ne(u, i, c, s, n);
      }
      t = t.sibling;
    }
  }
  function xn(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) {
        var a = l,
          e = t,
          n = e.flags;
        switch (e.tag) {
          case 22:
            (xn(a, e), n & 2048 && Yc(e.alternate, e));
            break;
          case 24:
            (xn(a, e), n & 2048 && Gc(e.alternate, e));
            break;
          default:
            xn(a, e);
        }
        t = t.sibling;
      }
  }
  var jn = 8192;
  function _e(l, t, a) {
    if (l.subtreeFlags & jn)
      for (l = l.child; l !== null;) (vr(l, t, a), (l = l.sibling));
  }
  function vr(l, t, a) {
    switch (l.tag) {
      case 26:
        (_e(l, t, a),
          l.flags & jn &&
            l.memoizedState !== null &&
            Kh(a, Ct, l.memoizedState, l.memoizedProps));
        break;
      case 5:
        _e(l, t, a);
        break;
      case 3:
      case 4:
        var e = Ct;
        ((Ct = Ku(l.stateNode.containerInfo)), _e(l, t, a), (Ct = e));
        break;
      case 22:
        l.memoizedState === null &&
          ((e = l.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = jn), (jn = 16777216), _e(l, t, a), (jn = e))
            : _e(l, t, a));
        break;
      default:
        _e(l, t, a);
    }
  }
  function yr(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do ((t = l.sibling), (l.sibling = null), (l = t));
      while (l !== null);
    }
  }
  function Mn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          ((wl = e), Sr(e, l));
        }
      yr(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null;) (gr(l), (l = l.sibling));
  }
  function gr(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (Mn(l), l.flags & 2048 && ba(9, l, l.return));
        break;
      case 3:
        Mn(l);
        break;
      case 12:
        Mn(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), Uu(l))
          : Mn(l);
        break;
      default:
        Mn(l);
    }
  }
  function Uu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          ((wl = e), Sr(e, l));
        }
      yr(l);
    }
    for (l = l.child; l !== null;) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          (ba(8, t, t.return), Uu(t));
          break;
        case 22:
          ((a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), Uu(t)));
          break;
        default:
          Uu(t);
      }
      l = l.sibling;
    }
  }
  function Sr(l, t) {
    for (; wl !== null;) {
      var a = wl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ba(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var e = a.memoizedState.cachePool.pool;
            e != null && e.refCount++;
          }
          break;
        case 24:
          on(a.memoizedState.cache);
      }
      if (((e = a.child), e !== null)) ((e.return = a), (wl = e));
      else
        l: for (a = l; wl !== null;) {
          e = wl;
          var n = e.sibling,
            u = e.return;
          if ((fr(e), e === a)) {
            wl = null;
            break l;
          }
          if (n !== null) {
            ((n.return = u), (wl = n));
            break l;
          }
          wl = u;
        }
    }
  }
  var ih = {
      getCacheForType: function (l) {
        var t = Fl(Yl),
          a = t.data.get(l);
        return (a === void 0 && ((a = l()), t.data.set(l, a)), a);
      },
      cacheSignal: function () {
        return Fl(Yl).controller.signal;
      },
    },
    ch = typeof WeakMap == "function" ? WeakMap : Map,
    ml = 0,
    xl = null,
    ll = null,
    el = 0,
    yl = 0,
    St = null,
    za = !1,
    Oe = !1,
    Lc = !1,
    ea = 0,
    Cl = 0,
    Ea = 0,
    Ia = 0,
    Qc = 0,
    pt = 0,
    De = 0,
    Nn = null,
    st = null,
    Xc = !1,
    Ru = 0,
    pr = 0,
    Cu = 1 / 0,
    Hu = null,
    Aa = null,
    Zl = 0,
    Ta = null,
    Ue = null,
    na = 0,
    Zc = 0,
    Vc = null,
    br = null,
    _n = 0,
    Kc = null;
  function bt() {
    return (ml & 2) !== 0 && el !== 0 ? el & -el : z.T !== null ? Fc() : Hf();
  }
  function zr() {
    if (pt === 0)
      if ((el & 536870912) === 0 || ul) {
        var l = Ha;
        ((Ha <<= 1), (Ha & 3932160) === 0 && (Ha = 262144), (pt = l));
      } else pt = 536870912;
    return ((l = yt.current), l !== null && (l.flags |= 32), pt);
  }
  function ot(l, t, a) {
    (((l === xl && (yl === 2 || yl === 9)) || l.cancelPendingCommit !== null) &&
      (Re(l, 0), xa(l, el, pt, !1)),
      We(l, a),
      ((ml & 2) === 0 || l !== xl) &&
        (l === xl &&
          ((ml & 2) === 0 && (Ia |= a), Cl === 4 && xa(l, el, pt, !1)),
        Lt(l)));
  }
  function Er(l, t, a) {
    if ((ml & 6) !== 0) throw Error(d(327));
    var e = (!a && (t & 127) === 0 && (t & l.expiredLanes) === 0) || $e(l, t),
      n = e ? oh(l, t) : wc(l, t, !0),
      u = e;
    do {
      if (n === 0) {
        Oe && !e && xa(l, t, 0, !1);
        break;
      } else {
        if (((a = l.current.alternate), u && !fh(a))) {
          ((n = wc(l, t, !1)), (u = !1));
          continue;
        }
        if (n === 2) {
          if (((u = t), l.errorRecoveryDisabledLanes & u)) var i = 0;
          else
            ((i = l.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              n = Nn;
              var s = c.current.memoizedState.isDehydrated;
              if ((s && (Re(c, i).flags |= 256), (i = wc(c, i, !1)), i !== 2)) {
                if (Lc && !s) {
                  ((c.errorRecoveryDisabledLanes |= u), (Ia |= u), (n = 4));
                  break l;
                }
                ((u = st),
                  (st = n),
                  u !== null &&
                    (st === null ? (st = u) : st.push.apply(st, u)));
              }
              n = i;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          (Re(l, 0), xa(l, t, 0, !0));
          break;
        }
        l: {
          switch (((e = l), (u = n), u)) {
            case 0:
            case 1:
              throw Error(d(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              xa(e, t, pt, !za);
              break l;
            case 2:
              st = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(d(329));
          }
          if ((t & 62914560) === t && ((n = Ru + 300 - $l()), 10 < n)) {
            if ((xa(e, t, pt, !za), Kn(e, 0, !0) !== 0)) break l;
            ((na = t),
              (e.timeoutHandle = Pr(
                Ar.bind(
                  null,
                  e,
                  a,
                  st,
                  Hu,
                  Xc,
                  t,
                  pt,
                  Ia,
                  De,
                  za,
                  u,
                  "Throttled",
                  -0,
                  0,
                ),
                n,
              )));
            break l;
          }
          Ar(e, a, st, Hu, Xc, t, pt, Ia, De, za, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Lt(l);
  }
  function Ar(l, t, a, e, n, u, i, c, s, v, p, A, y, g) {
    if (
      ((l.timeoutHandle = -1),
      (A = t.subtreeFlags),
      A & 8192 || (A & 16785408) === 16785408)
    ) {
      ((A = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Zt,
      }),
        vr(t, u, A));
      var H =
        (u & 62914560) === u ? Ru - $l() : (u & 4194048) === u ? pr - $l() : 0;
      if (((H = Jh(A, H)), H !== null)) {
        ((na = u),
          (l.cancelPendingCommit = H(
            Dr.bind(null, l, t, u, a, e, n, i, c, s, p, A, null, y, g),
          )),
          xa(l, u, i, !v));
        return;
      }
    }
    Dr(l, t, u, a, e, n, i, c, s);
  }
  function fh(l) {
    for (var t = l; ;) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var e = 0; e < a.length; e++) {
          var n = a[e],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!ht(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        ((a.return = t), (t = a));
      else {
        if (t === l) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function xa(l, t, a, e) {
    ((t &= ~Qc),
      (t &= ~Ia),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      e && (l.warmLanes |= t),
      (e = l.expirationTimes));
    for (var n = t; 0 < n;) {
      var u = 31 - Ol(n),
        i = 1 << u;
      ((e[u] = -1), (n &= ~i));
    }
    a !== 0 && Uf(l, a, t);
  }
  function qu() {
    return (ml & 6) === 0 ? (On(0), !1) : !0;
  }
  function Jc() {
    if (ll !== null) {
      if (yl === 0) var l = ll.return;
      else ((l = ll), (wt = Za = null), fc(l), (Ae = null), (dn = 0), (l = ll));
      for (; l !== null;) (lr(l.alternate, l), (l = l.return));
      ll = null;
    }
  }
  function Re(l, t) {
    var a = l.timeoutHandle;
    (a !== -1 && ((l.timeoutHandle = -1), Nh(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      (na = 0),
      Jc(),
      (xl = l),
      (ll = a = Kt(l.current, null)),
      (el = t),
      (yl = 0),
      (St = null),
      (za = !1),
      (Oe = $e(l, t)),
      (Lc = !1),
      (De = pt = Qc = Ia = Ea = Cl = 0),
      (st = Nn = null),
      (Xc = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var e = l.entangledLanes;
    if (e !== 0)
      for (l = l.entanglements, e &= t; 0 < e;) {
        var n = 31 - Ol(e),
          u = 1 << n;
        ((t |= l[n]), (e &= ~u));
      }
    return ((ea = t), eu(), a);
  }
  function Tr(l, t) {
    ((k = null),
      (z.H = bn),
      t === Ee || t === ru
        ? ((t = Gs()), (yl = 3))
        : t === ki
          ? ((t = Gs()), (yl = 4))
          : (yl =
              t === Tc
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (St = t),
      ll === null && ((Cl = 1), xu(l, jt(t, l.current))));
  }
  function xr() {
    var l = yt.current;
    return l === null
      ? !0
      : (el & 4194048) === el
        ? Ot === null
        : (el & 62914560) === el || (el & 536870912) !== 0
          ? l === Ot
          : !1;
  }
  function jr() {
    var l = z.H;
    return ((z.H = bn), l === null ? bn : l);
  }
  function Mr() {
    var l = z.A;
    return ((z.A = ih), l);
  }
  function Bu() {
    ((Cl = 4),
      za || ((el & 4194048) !== el && yt.current !== null) || (Oe = !0),
      ((Ea & 134217727) === 0 && (Ia & 134217727) === 0) ||
        xl === null ||
        xa(xl, el, pt, !1));
  }
  function wc(l, t, a) {
    var e = ml;
    ml |= 2;
    var n = jr(),
      u = Mr();
    ((xl !== l || el !== t) && ((Hu = null), Re(l, t)), (t = !1));
    var i = Cl;
    l: do
      try {
        if (yl !== 0 && ll !== null) {
          var c = ll,
            s = St;
          switch (yl) {
            case 8:
              (Jc(), (i = 6));
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              yt.current === null && (t = !0);
              var v = yl;
              if (((yl = 0), (St = null), Ce(l, c, s, v), a && Oe)) {
                i = 0;
                break l;
              }
              break;
            default:
              ((v = yl), (yl = 0), (St = null), Ce(l, c, s, v));
          }
        }
        (sh(), (i = Cl));
        break;
      } catch (p) {
        Tr(l, p);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (wt = Za = null),
      (ml = e),
      (z.H = n),
      (z.A = u),
      ll === null && ((xl = null), (el = 0), eu()),
      i
    );
  }
  function sh() {
    for (; ll !== null;) Nr(ll);
  }
  function oh(l, t) {
    var a = ml;
    ml |= 2;
    var e = jr(),
      n = Mr();
    xl !== l || el !== t
      ? ((Hu = null), (Cu = $l() + 500), Re(l, t))
      : (Oe = $e(l, t));
    l: do
      try {
        if (yl !== 0 && ll !== null) {
          t = ll;
          var u = St;
          t: switch (yl) {
            case 1:
              ((yl = 0), (St = null), Ce(l, t, u, 1));
              break;
            case 2:
            case 9:
              if (Bs(u)) {
                ((yl = 0), (St = null), _r(t));
                break;
              }
              ((t = function () {
                ((yl !== 2 && yl !== 9) || xl !== l || (yl = 7), Lt(l));
              }),
                u.then(t, t));
              break l;
            case 3:
              yl = 7;
              break l;
            case 4:
              yl = 5;
              break l;
            case 7:
              Bs(u)
                ? ((yl = 0), (St = null), _r(t))
                : ((yl = 0), (St = null), Ce(l, t, u, 7));
              break;
            case 5:
              var i = null;
              switch (ll.tag) {
                case 26:
                  i = ll.memoizedState;
                case 5:
                case 27:
                  var c = ll;
                  if (i ? hd(i) : c.stateNode.complete) {
                    ((yl = 0), (St = null));
                    var s = c.sibling;
                    if (s !== null) ll = s;
                    else {
                      var v = c.return;
                      v !== null ? ((ll = v), Yu(v)) : (ll = null);
                    }
                    break t;
                  }
              }
              ((yl = 0), (St = null), Ce(l, t, u, 5));
              break;
            case 6:
              ((yl = 0), (St = null), Ce(l, t, u, 6));
              break;
            case 8:
              (Jc(), (Cl = 6));
              break l;
            default:
              throw Error(d(462));
          }
        }
        rh();
        break;
      } catch (p) {
        Tr(l, p);
      }
    while (!0);
    return (
      (wt = Za = null),
      (z.H = e),
      (z.A = n),
      (ml = a),
      ll !== null ? 0 : ((xl = null), (el = 0), eu(), Cl)
    );
  }
  function rh() {
    for (; ll !== null && !ui();) Nr(ll);
  }
  function Nr(l) {
    var t = Io(l.alternate, l, ea);
    ((l.memoizedProps = l.pendingProps), t === null ? Yu(l) : (ll = t));
  }
  function _r(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Jo(a, t, t.pendingProps, t.type, void 0, el);
        break;
      case 11:
        t = Jo(a, t, t.pendingProps, t.type.render, t.ref, el);
        break;
      case 5:
        fc(t);
      default:
        (lr(a, t), (t = ll = js(t, ea)), (t = Io(a, t, ea)));
    }
    ((l.memoizedProps = l.pendingProps), t === null ? Yu(l) : (ll = t));
  }
  function Ce(l, t, a, e) {
    ((wt = Za = null), fc(t), (Ae = null), (dn = 0));
    var n = t.return;
    try {
      if (Pm(l, n, t, a, el)) {
        ((Cl = 1), xu(l, jt(a, l.current)), (ll = null));
        return;
      }
    } catch (u) {
      if (n !== null) throw ((ll = n), u);
      ((Cl = 1), xu(l, jt(a, l.current)), (ll = null));
      return;
    }
    t.flags & 32768
      ? (ul || e === 1
          ? (l = !0)
          : Oe || (el & 536870912) !== 0
            ? (l = !1)
            : ((za = l = !0),
              (e === 2 || e === 9 || e === 3 || e === 6) &&
                ((e = yt.current),
                e !== null && e.tag === 13 && (e.flags |= 16384))),
        Or(t, l))
      : Yu(t);
  }
  function Yu(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Or(t, za);
        return;
      }
      l = t.return;
      var a = ah(t.alternate, t, ea);
      if (a !== null) {
        ll = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ll = t;
        return;
      }
      ll = t = l;
    } while (t !== null);
    Cl === 0 && (Cl = 5);
  }
  function Or(l, t) {
    do {
      var a = eh(l.alternate, l);
      if (a !== null) {
        ((a.flags &= 32767), (ll = a));
        return;
      }
      if (
        ((a = l.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        ll = l;
        return;
      }
      ll = l = a;
    } while (l !== null);
    ((Cl = 6), (ll = null));
  }
  function Dr(l, t, a, e, n, u, i, c, s) {
    l.cancelPendingCommit = null;
    do Gu();
    while (Zl !== 0);
    if ((ml & 6) !== 0) throw Error(d(327));
    if (t !== null) {
      if (t === l.current) throw Error(d(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= Hi),
        Vd(l, a, u, i, c, s),
        l === xl && ((ll = xl = null), (el = 0)),
        (Ue = t),
        (Ta = l),
        (na = a),
        (Zc = u),
        (Vc = n),
        (br = e),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            vh(Ca, function () {
              return (qr(), null);
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (e = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || e)
      ) {
        ((e = z.T), (z.T = null), (n = _.p), (_.p = 2), (i = ml), (ml |= 4));
        try {
          nh(l, t, a);
        } finally {
          ((ml = i), (_.p = n), (z.T = e));
        }
      }
      ((Zl = 1), Ur(), Rr(), Cr());
    }
  }
  function Ur() {
    if (Zl === 1) {
      Zl = 0;
      var l = Ta,
        t = Ue,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = z.T), (z.T = null));
        var e = _.p;
        _.p = 2;
        var n = ml;
        ml |= 4;
        try {
          dr(t, l);
          var u = uf,
            i = gs(l.containerInfo),
            c = u.focusedElem,
            s = u.selectionRange;
          if (
            i !== c &&
            c &&
            c.ownerDocument &&
            ys(c.ownerDocument.documentElement, c)
          ) {
            if (s !== null && Oi(c)) {
              var v = s.start,
                p = s.end;
              if ((p === void 0 && (p = v), "selectionStart" in c))
                ((c.selectionStart = v),
                  (c.selectionEnd = Math.min(p, c.value.length)));
              else {
                var A = c.ownerDocument || document,
                  y = (A && A.defaultView) || window;
                if (y.getSelection) {
                  var g = y.getSelection(),
                    H = c.textContent.length,
                    X = Math.min(s.start, H),
                    Al = s.end === void 0 ? X : Math.min(s.end, H);
                  !g.extend && X > Al && ((i = Al), (Al = X), (X = i));
                  var m = vs(c, X),
                    o = vs(c, Al);
                  if (
                    m &&
                    o &&
                    (g.rangeCount !== 1 ||
                      g.anchorNode !== m.node ||
                      g.anchorOffset !== m.offset ||
                      g.focusNode !== o.node ||
                      g.focusOffset !== o.offset)
                  ) {
                    var h = A.createRange();
                    (h.setStart(m.node, m.offset),
                      g.removeAllRanges(),
                      X > Al
                        ? (g.addRange(h), g.extend(o.node, o.offset))
                        : (h.setEnd(o.node, o.offset), g.addRange(h)));
                  }
                }
              }
            }
            for (A = [], g = c; (g = g.parentNode);)
              g.nodeType === 1 &&
                A.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
            for (
              typeof c.focus == "function" && c.focus(), c = 0;
              c < A.length;
              c++
            ) {
              var E = A[c];
              ((E.element.scrollLeft = E.left), (E.element.scrollTop = E.top));
            }
          }
          ((Fu = !!nf), (uf = nf = null));
        } finally {
          ((ml = n), (_.p = e), (z.T = a));
        }
      }
      ((l.current = t), (Zl = 2));
    }
  }
  function Rr() {
    if (Zl === 2) {
      Zl = 0;
      var l = Ta,
        t = Ue,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = z.T), (z.T = null));
        var e = _.p;
        _.p = 2;
        var n = ml;
        ml |= 4;
        try {
          cr(l, t.alternate, t);
        } finally {
          ((ml = n), (_.p = e), (z.T = a));
        }
      }
      Zl = 3;
    }
  }
  function Cr() {
    if (Zl === 4 || Zl === 3) {
      ((Zl = 0), ii());
      var l = Ta,
        t = Ue,
        a = na,
        e = br;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Zl = 5)
        : ((Zl = 0), (Ue = Ta = null), Hr(l, l.pendingLanes));
      var n = l.pendingLanes;
      if (
        (n === 0 && (Aa = null),
        ri(a),
        (t = t.stateNode),
        Q && typeof Q.onCommitFiberRoot == "function")
      )
        try {
          Q.onCommitFiberRoot(Y, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (e !== null) {
        ((t = z.T), (n = _.p), (_.p = 2), (z.T = null));
        try {
          for (var u = l.onRecoverableError, i = 0; i < e.length; i++) {
            var c = e[i];
            u(c.value, { componentStack: c.stack });
          }
        } finally {
          ((z.T = t), (_.p = n));
        }
      }
      ((na & 3) !== 0 && Gu(),
        Lt(l),
        (n = l.pendingLanes),
        (a & 261930) !== 0 && (n & 42) !== 0
          ? l === Kc
            ? _n++
            : ((_n = 0), (Kc = l))
          : (_n = 0),
        On(0));
    }
  }
  function Hr(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), on(t)));
  }
  function Gu() {
    return (Ur(), Rr(), Cr(), qr());
  }
  function qr() {
    if (Zl !== 5) return !1;
    var l = Ta,
      t = Zc;
    Zc = 0;
    var a = ri(na),
      e = z.T,
      n = _.p;
    try {
      ((_.p = 32 > a ? 32 : a), (z.T = null), (a = Vc), (Vc = null));
      var u = Ta,
        i = na;
      if (((Zl = 0), (Ue = Ta = null), (na = 0), (ml & 6) !== 0))
        throw Error(d(331));
      var c = ml;
      if (
        ((ml |= 4),
        gr(u.current),
        hr(u, u.current, i, a),
        (ml = c),
        On(0, !1),
        Q && typeof Q.onPostCommitFiberRoot == "function")
      )
        try {
          Q.onPostCommitFiberRoot(Y, u);
        } catch {}
      return !0;
    } finally {
      ((_.p = n), (z.T = e), Hr(l, t));
    }
  }
  function Br(l, t, a) {
    ((t = jt(a, t)),
      (t = Ac(l.stateNode, t, 2)),
      (l = ga(l, t, 2)),
      l !== null && (We(l, 2), Lt(l)));
  }
  function gl(l, t, a) {
    if (l.tag === 3) Br(l, l, a);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          Br(t, l, a);
          break;
        } else if (t.tag === 1) {
          var e = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof e.componentDidCatch == "function" &&
              (Aa === null || !Aa.has(e)))
          ) {
            ((l = jt(a, l)),
              (a = Yo(2)),
              (e = ga(t, a, 2)),
              e !== null && (Go(a, e, t, l), We(e, 2), Lt(e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function $c(l, t, a) {
    var e = l.pingCache;
    if (e === null) {
      e = l.pingCache = new ch();
      var n = new Set();
      e.set(t, n);
    } else ((n = e.get(t)), n === void 0 && ((n = new Set()), e.set(t, n)));
    n.has(a) ||
      ((Lc = !0), n.add(a), (l = dh.bind(null, l, t, a)), t.then(l, l));
  }
  function dh(l, t, a) {
    var e = l.pingCache;
    (e !== null && e.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      xl === l &&
        (el & a) === a &&
        (Cl === 4 || (Cl === 3 && (el & 62914560) === el && 300 > $l() - Ru)
          ? (ml & 2) === 0 && Re(l, 0)
          : (Qc |= a),
        De === el && (De = 0)),
      Lt(l));
  }
  function Yr(l, t) {
    (t === 0 && (t = Df()), (l = La(l, t)), l !== null && (We(l, t), Lt(l)));
  }
  function mh(l) {
    var t = l.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), Yr(l, a));
  }
  function hh(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var e = l.stateNode,
          n = l.memoizedState;
        n !== null && (a = n.retryLane);
        break;
      case 19:
        e = l.stateNode;
        break;
      case 22:
        e = l.stateNode._retryCache;
        break;
      default:
        throw Error(d(314));
    }
    (e !== null && e.delete(t), Yr(l, a));
  }
  function vh(l, t) {
    return Ze(l, t);
  }
  var Lu = null,
    He = null,
    Wc = !1,
    Qu = !1,
    kc = !1,
    ja = 0;
  function Lt(l) {
    (l !== He &&
      l.next === null &&
      (He === null ? (Lu = He = l) : (He = He.next = l)),
      (Qu = !0),
      Wc || ((Wc = !0), gh()));
  }
  function On(l, t) {
    if (!kc && Qu) {
      kc = !0;
      do
        for (var a = !1, e = Lu; e !== null;) {
          if (l !== 0) {
            var n = e.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = e.suspendedLanes,
                c = e.pingedLanes;
              ((u = (1 << (31 - Ol(42 | l) + 1)) - 1),
                (u &= n & ~(i & ~c)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((a = !0), Xr(e, u));
          } else
            ((u = el),
              (u = Kn(
                e,
                e === xl ? u : 0,
                e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || $e(e, u) || ((a = !0), Xr(e, u)));
          e = e.next;
        }
      while (a);
      kc = !1;
    }
  }
  function yh() {
    Gr();
  }
  function Gr() {
    Qu = Wc = !1;
    var l = 0;
    ja !== 0 && Mh() && (l = ja);
    for (var t = $l(), a = null, e = Lu; e !== null;) {
      var n = e.next,
        u = Lr(e, t);
      (u === 0
        ? ((e.next = null),
          a === null ? (Lu = n) : (a.next = n),
          n === null && (He = a))
        : ((a = e), (l !== 0 || (u & 3) !== 0) && (Qu = !0)),
        (e = n));
    }
    ((Zl !== 0 && Zl !== 5) || On(l), ja !== 0 && (ja = 0));
  }
  function Lr(l, t) {
    for (
      var a = l.suspendedLanes,
        e = l.pingedLanes,
        n = l.expirationTimes,
        u = l.pendingLanes & -62914561;
      0 < u;
    ) {
      var i = 31 - Ol(u),
        c = 1 << i,
        s = n[i];
      (s === -1
        ? ((c & a) === 0 || (c & e) !== 0) && (n[i] = Zd(c, t))
        : s <= t && (l.expiredLanes |= c),
        (u &= ~c));
    }
    if (
      ((t = xl),
      (a = el),
      (a = Kn(
        l,
        l === t ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      (e = l.callbackNode),
      a === 0 ||
        (l === t && (yl === 2 || yl === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        e !== null && e !== null && Ve(e),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((a & 3) === 0 || $e(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((e !== null && Ve(e), ri(a))) {
        case 2:
        case 8:
          a = Ke;
          break;
        case 32:
          a = Ca;
          break;
        case 268435456:
          a = Zn;
          break;
        default:
          a = Ca;
      }
      return (
        (e = Qr.bind(null, l)),
        (a = Ze(a, e)),
        (l.callbackPriority = t),
        (l.callbackNode = a),
        t
      );
    }
    return (
      e !== null && e !== null && Ve(e),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function Qr(l, t) {
    if (Zl !== 0 && Zl !== 5)
      return ((l.callbackNode = null), (l.callbackPriority = 0), null);
    var a = l.callbackNode;
    if (Gu() && l.callbackNode !== a) return null;
    var e = el;
    return (
      (e = Kn(
        l,
        l === xl ? e : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      e === 0
        ? null
        : (Er(l, e, t),
          Lr(l, $l()),
          l.callbackNode != null && l.callbackNode === a
            ? Qr.bind(null, l)
            : null)
    );
  }
  function Xr(l, t) {
    if (Gu()) return null;
    Er(l, t, !0);
  }
  function gh() {
    _h(function () {
      (ml & 6) !== 0 ? Ze(Ra, yh) : Gr();
    });
  }
  function Fc() {
    if (ja === 0) {
      var l = be;
      (l === 0 && ((l = we), (we <<= 1), (we & 261888) === 0 && (we = 256)),
        (ja = l));
    }
    return ja;
  }
  function Zr(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
        ? l
        : Wn("" + l);
  }
  function Vr(l, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      l.id && a.setAttribute("form", l.id),
      t.parentNode.insertBefore(a, t),
      (l = new FormData(l)),
      a.parentNode.removeChild(a),
      l
    );
  }
  function Sh(l, t, a, e, n) {
    if (t === "submit" && a && a.stateNode === n) {
      var u = Zr((n[nt] || null).action),
        i = e.submitter;
      i &&
        ((t = (t = i[nt] || null)
          ? Zr(t.formAction)
          : i.getAttribute("formAction")),
        t !== null && ((u = t), (i = null)));
      var c = new Pn("action", "action", null, e, n);
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (e.defaultPrevented) {
                if (ja !== 0) {
                  var s = i ? Vr(n, i) : new FormData(n);
                  gc(
                    a,
                    { pending: !0, data: s, method: n.method, action: u },
                    null,
                    s,
                  );
                }
              } else
                typeof u == "function" &&
                  (c.preventDefault(),
                  (s = i ? Vr(n, i) : new FormData(n)),
                  gc(
                    a,
                    { pending: !0, data: s, method: n.method, action: u },
                    u,
                    s,
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var Ic = 0; Ic < Ci.length; Ic++) {
    var Pc = Ci[Ic],
      ph = Pc.toLowerCase(),
      bh = Pc[0].toUpperCase() + Pc.slice(1);
    Rt(ph, "on" + bh);
  }
  (Rt(bs, "onAnimationEnd"),
    Rt(zs, "onAnimationIteration"),
    Rt(Es, "onAnimationStart"),
    Rt("dblclick", "onDoubleClick"),
    Rt("focusin", "onFocus"),
    Rt("focusout", "onBlur"),
    Rt(qm, "onTransitionRun"),
    Rt(Bm, "onTransitionStart"),
    Rt(Ym, "onTransitionCancel"),
    Rt(As, "onTransitionEnd"),
    ie("onMouseEnter", ["mouseout", "mouseover"]),
    ie("onMouseLeave", ["mouseout", "mouseover"]),
    ie("onPointerEnter", ["pointerout", "pointerover"]),
    ie("onPointerLeave", ["pointerout", "pointerover"]),
    qa(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    qa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    qa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    qa(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    qa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    qa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Dn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    zh = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Dn),
    );
  function Kr(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var e = l[a],
        n = e.event;
      e = e.listeners;
      l: {
        var u = void 0;
        if (t)
          for (var i = e.length - 1; 0 <= i; i--) {
            var c = e[i],
              s = c.instance,
              v = c.currentTarget;
            if (((c = c.listener), s !== u && n.isPropagationStopped()))
              break l;
            ((u = c), (n.currentTarget = v));
            try {
              u(n);
            } catch (p) {
              au(p);
            }
            ((n.currentTarget = null), (u = s));
          }
        else
          for (i = 0; i < e.length; i++) {
            if (
              ((c = e[i]),
              (s = c.instance),
              (v = c.currentTarget),
              (c = c.listener),
              s !== u && n.isPropagationStopped())
            )
              break l;
            ((u = c), (n.currentTarget = v));
            try {
              u(n);
            } catch (p) {
              au(p);
            }
            ((n.currentTarget = null), (u = s));
          }
      }
    }
  }
  function tl(l, t) {
    var a = t[di];
    a === void 0 && (a = t[di] = new Set());
    var e = l + "__bubble";
    a.has(e) || (Jr(t, l, 2, !1), a.add(e));
  }
  function lf(l, t, a) {
    var e = 0;
    (t && (e |= 4), Jr(a, l, e, t));
  }
  var Xu = "_reactListening" + Math.random().toString(36).slice(2);
  function tf(l) {
    if (!l[Xu]) {
      ((l[Xu] = !0),
        Yf.forEach(function (a) {
          a !== "selectionchange" && (zh.has(a) || lf(a, !1, l), lf(a, !0, l));
        }));
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Xu] || ((t[Xu] = !0), lf("selectionchange", !1, t));
    }
  }
  function Jr(l, t, a, e) {
    switch (zd(t)) {
      case 2:
        var n = Wh;
        break;
      case 8:
        n = kh;
        break;
      default:
        n = gf;
    }
    ((a = n.bind(null, t, a, l)),
      (n = void 0),
      !zi ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (n = !0),
      e
        ? n !== void 0
          ? l.addEventListener(t, a, { capture: !0, passive: n })
          : l.addEventListener(t, a, !0)
        : n !== void 0
          ? l.addEventListener(t, a, { passive: n })
          : l.addEventListener(t, a, !1));
  }
  function af(l, t, a, e, n) {
    var u = e;
    if ((t & 1) === 0 && (t & 2) === 0 && e !== null)
      l: for (;;) {
        if (e === null) return;
        var i = e.tag;
        if (i === 3 || i === 4) {
          var c = e.stateNode.containerInfo;
          if (c === n) break;
          if (i === 4)
            for (i = e.return; i !== null;) {
              var s = i.tag;
              if ((s === 3 || s === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; c !== null;) {
            if (((i = ee(c)), i === null)) return;
            if (((s = i.tag), s === 5 || s === 6 || s === 26 || s === 27)) {
              e = u = i;
              continue l;
            }
            c = c.parentNode;
          }
        }
        e = e.return;
      }
    kf(function () {
      var v = u,
        p = pi(a),
        A = [];
      l: {
        var y = Ts.get(l);
        if (y !== void 0) {
          var g = Pn,
            H = l;
          switch (l) {
            case "keypress":
              if (Fn(a) === 0) break l;
            case "keydown":
            case "keyup":
              g = hm;
              break;
            case "focusin":
              ((H = "focus"), (g = xi));
              break;
            case "focusout":
              ((H = "blur"), (g = xi));
              break;
            case "beforeblur":
            case "afterblur":
              g = xi;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = Pf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = am;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = gm;
              break;
            case bs:
            case zs:
            case Es:
              g = um;
              break;
            case As:
              g = pm;
              break;
            case "scroll":
            case "scrollend":
              g = lm;
              break;
            case "wheel":
              g = zm;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = cm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = ts;
              break;
            case "toggle":
            case "beforetoggle":
              g = Am;
          }
          var X = (t & 4) !== 0,
            Al = !X && (l === "scroll" || l === "scrollend"),
            m = X ? (y !== null ? y + "Capture" : null) : y;
          X = [];
          for (var o = v, h; o !== null;) {
            var E = o;
            if (
              ((h = E.stateNode),
              (E = E.tag),
              (E !== 5 && E !== 26 && E !== 27) ||
                h === null ||
                m === null ||
                ((E = Ie(o, m)), E != null && X.push(Un(o, E, h))),
              Al)
            )
              break;
            o = o.return;
          }
          0 < X.length &&
            ((y = new g(y, H, null, a, p)), A.push({ event: y, listeners: X }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((y = l === "mouseover" || l === "pointerover"),
            (g = l === "mouseout" || l === "pointerout"),
            y &&
              a !== Si &&
              (H = a.relatedTarget || a.fromElement) &&
              (ee(H) || H[ae]))
          )
            break l;
          if (
            (g || y) &&
            ((y =
              p.window === p
                ? p
                : (y = p.ownerDocument)
                  ? y.defaultView || y.parentWindow
                  : window),
            g
              ? ((H = a.relatedTarget || a.toElement),
                (g = v),
                (H = H ? ee(H) : null),
                H !== null &&
                  ((Al = C(H)),
                  (X = H.tag),
                  H !== Al || (X !== 5 && X !== 27 && X !== 6)) &&
                  (H = null))
              : ((g = null), (H = v)),
            g !== H)
          ) {
            if (
              ((X = Pf),
              (E = "onMouseLeave"),
              (m = "onMouseEnter"),
              (o = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((X = ts),
                (E = "onPointerLeave"),
                (m = "onPointerEnter"),
                (o = "pointer")),
              (Al = g == null ? y : Fe(g)),
              (h = H == null ? y : Fe(H)),
              (y = new X(E, o + "leave", g, a, p)),
              (y.target = Al),
              (y.relatedTarget = h),
              (E = null),
              ee(p) === v &&
                ((X = new X(m, o + "enter", H, a, p)),
                (X.target = h),
                (X.relatedTarget = Al),
                (E = X)),
              (Al = E),
              g && H)
            )
              t: {
                for (X = Eh, m = g, o = H, h = 0, E = m; E; E = X(E)) h++;
                E = 0;
                for (var G = o; G; G = X(G)) E++;
                for (; 0 < h - E;) ((m = X(m)), h--);
                for (; 0 < E - h;) ((o = X(o)), E--);
                for (; h--;) {
                  if (m === o || (o !== null && m === o.alternate)) {
                    X = m;
                    break t;
                  }
                  ((m = X(m)), (o = X(o)));
                }
                X = null;
              }
            else X = null;
            (g !== null && wr(A, y, g, X, !1),
              H !== null && Al !== null && wr(A, Al, H, X, !0));
          }
        }
        l: {
          if (
            ((y = v ? Fe(v) : window),
            (g = y.nodeName && y.nodeName.toLowerCase()),
            g === "select" || (g === "input" && y.type === "file"))
          )
            var rl = ss;
          else if (cs(y))
            if (os) rl = Rm;
            else {
              rl = Dm;
              var B = Om;
            }
          else
            ((g = y.nodeName),
              !g ||
              g.toLowerCase() !== "input" ||
              (y.type !== "checkbox" && y.type !== "radio")
                ? v && gi(v.elementType) && (rl = ss)
                : (rl = Um));
          if (rl && (rl = rl(l, v))) {
            fs(A, rl, a, p);
            break l;
          }
          (B && B(l, y, v),
            l === "focusout" &&
              v &&
              y.type === "number" &&
              v.memoizedProps.value != null &&
              yi(y, "number", y.value));
        }
        switch (((B = v ? Fe(v) : window), l)) {
          case "focusin":
            (cs(B) || B.contentEditable === "true") &&
              ((de = B), (Di = v), (cn = null));
            break;
          case "focusout":
            cn = Di = de = null;
            break;
          case "mousedown":
            Ui = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Ui = !1), Ss(A, a, p));
            break;
          case "selectionchange":
            if (Hm) break;
          case "keydown":
          case "keyup":
            Ss(A, a, p);
        }
        var F;
        if (Mi)
          l: {
            switch (l) {
              case "compositionstart":
                var nl = "onCompositionStart";
                break l;
              case "compositionend":
                nl = "onCompositionEnd";
                break l;
              case "compositionupdate":
                nl = "onCompositionUpdate";
                break l;
            }
            nl = void 0;
          }
        else
          re
            ? us(l, a) && (nl = "onCompositionEnd")
            : l === "keydown" &&
              a.keyCode === 229 &&
              (nl = "onCompositionStart");
        (nl &&
          (as &&
            a.locale !== "ko" &&
            (re || nl !== "onCompositionStart"
              ? nl === "onCompositionEnd" && re && (F = Ff())
              : ((oa = p),
                (Ei = "value" in oa ? oa.value : oa.textContent),
                (re = !0))),
          (B = Zu(v, nl)),
          0 < B.length &&
            ((nl = new ls(nl, l, null, a, p)),
            A.push({ event: nl, listeners: B }),
            F ? (nl.data = F) : ((F = is(a)), F !== null && (nl.data = F)))),
          (F = xm ? jm(l, a) : Mm(l, a)) &&
            ((nl = Zu(v, "onBeforeInput")),
            0 < nl.length &&
              ((B = new ls("onBeforeInput", "beforeinput", null, a, p)),
              A.push({ event: B, listeners: nl }),
              (B.data = F))),
          Sh(A, l, v, a, p));
      }
      Kr(A, t);
    });
  }
  function Un(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function Zu(l, t) {
    for (var a = t + "Capture", e = []; l !== null;) {
      var n = l,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = Ie(l, a)),
          n != null && e.unshift(Un(l, n, u)),
          (n = Ie(l, t)),
          n != null && e.push(Un(l, n, u))),
        l.tag === 3)
      )
        return e;
      l = l.return;
    }
    return [];
  }
  function Eh(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function wr(l, t, a, e, n) {
    for (var u = t._reactName, i = []; a !== null && a !== e;) {
      var c = a,
        s = c.alternate,
        v = c.stateNode;
      if (((c = c.tag), s !== null && s === e)) break;
      ((c !== 5 && c !== 26 && c !== 27) ||
        v === null ||
        ((s = v),
        n
          ? ((v = Ie(a, u)), v != null && i.unshift(Un(a, v, s)))
          : n || ((v = Ie(a, u)), v != null && i.push(Un(a, v, s)))),
        (a = a.return));
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var Ah = /\r\n?/g,
    Th = /\u0000|\uFFFD/g;
  function $r(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        Ah,
        `
`,
      )
      .replace(Th, "");
  }
  function Wr(l, t) {
    return ((t = $r(t)), $r(l) === t);
  }
  function El(l, t, a, e, n, u) {
    switch (a) {
      case "children":
        typeof e == "string"
          ? t === "body" || (t === "textarea" && e === "") || fe(l, e)
          : (typeof e == "number" || typeof e == "bigint") &&
            t !== "body" &&
            fe(l, "" + e);
        break;
      case "className":
        wn(l, "class", e);
        break;
      case "tabIndex":
        wn(l, "tabindex", e);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        wn(l, a, e);
        break;
      case "style":
        $f(l, e, u);
        break;
      case "data":
        if (t !== "object") {
          wn(l, "data", e);
          break;
        }
      case "src":
      case "href":
        if (e === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (
          e == null ||
          typeof e == "function" ||
          typeof e == "symbol" ||
          typeof e == "boolean"
        ) {
          l.removeAttribute(a);
          break;
        }
        ((e = Wn("" + e)), l.setAttribute(a, e));
        break;
      case "action":
      case "formAction":
        if (typeof e == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == "function" &&
            (a === "formAction"
              ? (t !== "input" && El(l, t, "name", n.name, n, null),
                El(l, t, "formEncType", n.formEncType, n, null),
                El(l, t, "formMethod", n.formMethod, n, null),
                El(l, t, "formTarget", n.formTarget, n, null))
              : (El(l, t, "encType", n.encType, n, null),
                El(l, t, "method", n.method, n, null),
                El(l, t, "target", n.target, n, null)));
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        ((e = Wn("" + e)), l.setAttribute(a, e));
        break;
      case "onClick":
        e != null && (l.onclick = Zt);
        break;
      case "onScroll":
        e != null && tl("scroll", l);
        break;
      case "onScrollEnd":
        e != null && tl("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(d(61));
          if (((a = e.__html), a != null)) {
            if (n.children != null) throw Error(d(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "muted":
        l.muted = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          e == null ||
          typeof e == "function" ||
          typeof e == "boolean" ||
          typeof e == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        ((a = Wn("" + e)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        e != null && typeof e != "function" && typeof e != "symbol"
          ? l.setAttribute(a, "" + e)
          : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        e && typeof e != "function" && typeof e != "symbol"
          ? l.setAttribute(a, "")
          : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        e === !0
          ? l.setAttribute(a, "")
          : e !== !1 &&
              e != null &&
              typeof e != "function" &&
              typeof e != "symbol"
            ? l.setAttribute(a, e)
            : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        e != null &&
        typeof e != "function" &&
        typeof e != "symbol" &&
        !isNaN(e) &&
        1 <= e
          ? l.setAttribute(a, e)
          : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e)
          ? l.removeAttribute(a)
          : l.setAttribute(a, e);
        break;
      case "popover":
        (tl("beforetoggle", l), tl("toggle", l), Jn(l, "popover", e));
        break;
      case "xlinkActuate":
        Xt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", e);
        break;
      case "xlinkArcrole":
        Xt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", e);
        break;
      case "xlinkRole":
        Xt(l, "http://www.w3.org/1999/xlink", "xlink:role", e);
        break;
      case "xlinkShow":
        Xt(l, "http://www.w3.org/1999/xlink", "xlink:show", e);
        break;
      case "xlinkTitle":
        Xt(l, "http://www.w3.org/1999/xlink", "xlink:title", e);
        break;
      case "xlinkType":
        Xt(l, "http://www.w3.org/1999/xlink", "xlink:type", e);
        break;
      case "xmlBase":
        Xt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", e);
        break;
      case "xmlLang":
        Xt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", e);
        break;
      case "xmlSpace":
        Xt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", e);
        break;
      case "is":
        Jn(l, "is", e);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Id.get(a) || a), Jn(l, a, e));
    }
  }
  function ef(l, t, a, e, n, u) {
    switch (a) {
      case "style":
        $f(l, e, u);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(d(61));
          if (((a = e.__html), a != null)) {
            if (n.children != null) throw Error(d(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof e == "string"
          ? fe(l, e)
          : (typeof e == "number" || typeof e == "bigint") && fe(l, "" + e);
        break;
      case "onScroll":
        e != null && tl("scroll", l);
        break;
      case "onScrollEnd":
        e != null && tl("scrollend", l);
        break;
      case "onClick":
        e != null && (l.onclick = Zt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Gf.hasOwnProperty(a))
          l: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((n = a.endsWith("Capture")),
              (t = a.slice(2, n ? a.length - 7 : void 0)),
              (u = l[nt] || null),
              (u = u != null ? u[a] : null),
              typeof u == "function" && l.removeEventListener(t, u, n),
              typeof e == "function")
            ) {
              (typeof u != "function" &&
                u !== null &&
                (a in l
                  ? (l[a] = null)
                  : l.hasAttribute(a) && l.removeAttribute(a)),
                l.addEventListener(t, e, n));
              break l;
            }
            a in l
              ? (l[a] = e)
              : e === !0
                ? l.setAttribute(a, "")
                : Jn(l, a, e);
          }
    }
  }
  function Pl(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (tl("error", l), tl("load", l));
        var e = !1,
          n = !1,
          u;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var i = a[u];
            if (i != null)
              switch (u) {
                case "src":
                  e = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(d(137, t));
                default:
                  El(l, t, u, i, a, null);
              }
          }
        (n && El(l, t, "srcSet", a.srcSet, a, null),
          e && El(l, t, "src", a.src, a, null));
        return;
      case "input":
        tl("invalid", l);
        var c = (u = i = n = null),
          s = null,
          v = null;
        for (e in a)
          if (a.hasOwnProperty(e)) {
            var p = a[e];
            if (p != null)
              switch (e) {
                case "name":
                  n = p;
                  break;
                case "type":
                  i = p;
                  break;
                case "checked":
                  s = p;
                  break;
                case "defaultChecked":
                  v = p;
                  break;
                case "value":
                  u = p;
                  break;
                case "defaultValue":
                  c = p;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (p != null) throw Error(d(137, t));
                  break;
                default:
                  El(l, t, e, p, a, null);
              }
          }
        Vf(l, u, c, s, v, i, n, !1);
        return;
      case "select":
        (tl("invalid", l), (e = i = u = null));
        for (n in a)
          if (a.hasOwnProperty(n) && ((c = a[n]), c != null))
            switch (n) {
              case "value":
                u = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                e = c;
              default:
                El(l, t, n, c, a, null);
            }
        ((t = u),
          (a = i),
          (l.multiple = !!e),
          t != null ? ce(l, !!e, t, !1) : a != null && ce(l, !!e, a, !0));
        return;
      case "textarea":
        (tl("invalid", l), (u = n = e = null));
        for (i in a)
          if (a.hasOwnProperty(i) && ((c = a[i]), c != null))
            switch (i) {
              case "value":
                e = c;
                break;
              case "defaultValue":
                n = c;
                break;
              case "children":
                u = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(d(91));
                break;
              default:
                El(l, t, i, c, a, null);
            }
        Jf(l, e, n, u);
        return;
      case "option":
        for (s in a)
          a.hasOwnProperty(s) &&
            ((e = a[s]), e != null) &&
            (s === "selected"
              ? (l.selected =
                  e && typeof e != "function" && typeof e != "symbol")
              : El(l, t, s, e, a, null));
        return;
      case "dialog":
        (tl("beforetoggle", l),
          tl("toggle", l),
          tl("cancel", l),
          tl("close", l));
        break;
      case "iframe":
      case "object":
        tl("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < Dn.length; e++) tl(Dn[e], l);
        break;
      case "image":
        (tl("error", l), tl("load", l));
        break;
      case "details":
        tl("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        (tl("error", l), tl("load", l));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (v in a)
          if (a.hasOwnProperty(v) && ((e = a[v]), e != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(137, t));
              default:
                El(l, t, v, e, a, null);
            }
        return;
      default:
        if (gi(t)) {
          for (p in a)
            a.hasOwnProperty(p) &&
              ((e = a[p]), e !== void 0 && ef(l, t, p, e, a, void 0));
          return;
        }
    }
    for (c in a)
      a.hasOwnProperty(c) && ((e = a[c]), e != null && El(l, t, c, e, a, null));
  }
  function xh(l, t, a, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          u = null,
          i = null,
          c = null,
          s = null,
          v = null,
          p = null;
        for (g in a) {
          var A = a[g];
          if (a.hasOwnProperty(g) && A != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                s = A;
              default:
                e.hasOwnProperty(g) || El(l, t, g, null, e, A);
            }
        }
        for (var y in e) {
          var g = e[y];
          if (((A = a[y]), e.hasOwnProperty(y) && (g != null || A != null)))
            switch (y) {
              case "type":
                u = g;
                break;
              case "name":
                n = g;
                break;
              case "checked":
                v = g;
                break;
              case "defaultChecked":
                p = g;
                break;
              case "value":
                i = g;
                break;
              case "defaultValue":
                c = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(d(137, t));
                break;
              default:
                g !== A && El(l, t, y, g, e, A);
            }
        }
        vi(l, i, c, s, v, p, u, n);
        return;
      case "select":
        g = i = c = y = null;
        for (u in a)
          if (((s = a[u]), a.hasOwnProperty(u) && s != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                g = s;
              default:
                e.hasOwnProperty(u) || El(l, t, u, null, e, s);
            }
        for (n in e)
          if (
            ((u = e[n]),
            (s = a[n]),
            e.hasOwnProperty(n) && (u != null || s != null))
          )
            switch (n) {
              case "value":
                y = u;
                break;
              case "defaultValue":
                c = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== s && El(l, t, n, u, e, s);
            }
        ((t = c),
          (a = i),
          (e = g),
          y != null
            ? ce(l, !!a, y, !1)
            : !!e != !!a &&
              (t != null ? ce(l, !!a, t, !0) : ce(l, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        g = y = null;
        for (c in a)
          if (
            ((n = a[c]),
            a.hasOwnProperty(c) && n != null && !e.hasOwnProperty(c))
          )
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                El(l, t, c, null, e, n);
            }
        for (i in e)
          if (
            ((n = e[i]),
            (u = a[i]),
            e.hasOwnProperty(i) && (n != null || u != null))
          )
            switch (i) {
              case "value":
                y = n;
                break;
              case "defaultValue":
                g = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(d(91));
                break;
              default:
                n !== u && El(l, t, i, n, e, u);
            }
        Kf(l, y, g);
        return;
      case "option":
        for (var H in a)
          ((y = a[H]),
            a.hasOwnProperty(H) &&
              y != null &&
              !e.hasOwnProperty(H) &&
              (H === "selected" ? (l.selected = !1) : El(l, t, H, null, e, y)));
        for (s in e)
          ((y = e[s]),
            (g = a[s]),
            e.hasOwnProperty(s) &&
              y !== g &&
              (y != null || g != null) &&
              (s === "selected"
                ? (l.selected =
                    y && typeof y != "function" && typeof y != "symbol")
                : El(l, t, s, y, e, g)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var X in a)
          ((y = a[X]),
            a.hasOwnProperty(X) &&
              y != null &&
              !e.hasOwnProperty(X) &&
              El(l, t, X, null, e, y));
        for (v in e)
          if (
            ((y = e[v]),
            (g = a[v]),
            e.hasOwnProperty(v) && y !== g && (y != null || g != null))
          )
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(d(137, t));
                break;
              default:
                El(l, t, v, y, e, g);
            }
        return;
      default:
        if (gi(t)) {
          for (var Al in a)
            ((y = a[Al]),
              a.hasOwnProperty(Al) &&
                y !== void 0 &&
                !e.hasOwnProperty(Al) &&
                ef(l, t, Al, void 0, e, y));
          for (p in e)
            ((y = e[p]),
              (g = a[p]),
              !e.hasOwnProperty(p) ||
                y === g ||
                (y === void 0 && g === void 0) ||
                ef(l, t, p, y, e, g));
          return;
        }
    }
    for (var m in a)
      ((y = a[m]),
        a.hasOwnProperty(m) &&
          y != null &&
          !e.hasOwnProperty(m) &&
          El(l, t, m, null, e, y));
    for (A in e)
      ((y = e[A]),
        (g = a[A]),
        !e.hasOwnProperty(A) ||
          y === g ||
          (y == null && g == null) ||
          El(l, t, A, y, e, g));
  }
  function kr(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function jh() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, t = 0, a = performance.getEntriesByType("resource"), e = 0;
        e < a.length;
        e++
      ) {
        var n = a[e],
          u = n.transferSize,
          i = n.initiatorType,
          c = n.duration;
        if (u && c && kr(i)) {
          for (i = 0, c = n.responseEnd, e += 1; e < a.length; e++) {
            var s = a[e],
              v = s.startTime;
            if (v > c) break;
            var p = s.transferSize,
              A = s.initiatorType;
            p &&
              kr(A) &&
              ((s = s.responseEnd), (i += p * (s < c ? 1 : (c - v) / (s - v))));
          }
          if ((--e, (t += (8 * (u + i)) / (n.duration / 1e3)), l++, 10 < l))
            break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection &&
      ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var nf = null,
    uf = null;
  function Vu(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Fr(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ir(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function cf(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ff = null;
  function Mh() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === ff
        ? !1
        : ((ff = l), !0)
      : ((ff = null), !1);
  }
  var Pr = typeof setTimeout == "function" ? setTimeout : void 0,
    Nh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ld = typeof Promise == "function" ? Promise : void 0,
    _h =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ld < "u"
          ? function (l) {
              return ld.resolve(null).then(l).catch(Oh);
            }
          : Pr;
  function Oh(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function Ma(l) {
    return l === "head";
  }
  function td(l, t) {
    var a = t,
      e = 0;
    do {
      var n = a.nextSibling;
      if ((l.removeChild(a), n && n.nodeType === 8))
        if (((a = n.data), a === "/$" || a === "/&")) {
          if (e === 0) {
            (l.removeChild(n), Ge(t));
            return;
          }
          e--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          e++;
        else if (a === "html") Rn(l.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = l.ownerDocument.head), Rn(a));
          for (var u = a.firstChild; u;) {
            var i = u.nextSibling,
              c = u.nodeName;
            (u[ke] ||
              c === "SCRIPT" ||
              c === "STYLE" ||
              (c === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(u),
              (u = i));
          }
        } else a === "body" && Rn(l.ownerDocument.body);
      a = n;
    } while (a);
    Ge(t);
  }
  function ad(l, t) {
    var a = l;
    l = 0;
    do {
      var e = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        e && e.nodeType === 8)
      )
        if (((a = e.data), a === "/$")) {
          if (l === 0) break;
          l--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || l++;
      a = e;
    } while (a);
  }
  function sf(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (sf(a), mi(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function Dh(l, t, a, e) {
    for (; l.nodeType === 1;) {
      var n = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (e) {
        if (!l[ke])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((u = l.getAttribute("rel")),
                u === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== n.rel ||
                l.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                l.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                l.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((u = l.getAttribute("src")),
                (u !== (n.src == null ? null : n.src) ||
                  l.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  l.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && l.getAttribute("name") === u) return l;
      } else return l;
      if (((l = Dt(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function Uh(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3;)
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !a) ||
        ((l = Dt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function ed(l, t) {
    for (; l.nodeType !== 8;)
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = Dt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function of(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function rf(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState !== "loading")
    );
  }
  function Rh(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading") t();
    else {
      var e = function () {
        (t(), a.removeEventListener("DOMContentLoaded", e));
      };
      (a.addEventListener("DOMContentLoaded", e), (l._reactRetry = e));
    }
  }
  function Dt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var df = null;
  function nd(l) {
    l = l.nextSibling;
    for (var t = 0; l;) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return Dt(l.nextSibling);
          t--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function ud(l) {
    l = l.previousSibling;
    for (var t = 0; l;) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function id(l, t, a) {
    switch (((t = Vu(a)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(d(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(d(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(d(454));
        return l;
      default:
        throw Error(d(451));
    }
  }
  function Rn(l) {
    for (var t = l.attributes; t.length;) l.removeAttributeNode(t[0]);
    mi(l);
  }
  var Ut = new Map(),
    cd = new Set();
  function Ku(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
        ? l
        : l.ownerDocument;
  }
  var ua = _.d;
  _.d = { f: Ch, r: Hh, D: qh, C: Bh, L: Yh, m: Gh, X: Qh, S: Lh, M: Xh };
  function Ch() {
    var l = ua.f(),
      t = qu();
    return l || t;
  }
  function Hh(l) {
    var t = ne(l);
    t !== null && t.tag === 5 && t.type === "form" ? To(t) : ua.r(l);
  }
  var qe = typeof document > "u" ? null : document;
  function fd(l, t, a) {
    var e = qe;
    if (e && typeof t == "string" && t) {
      var n = Tt(t);
      ((n = 'link[rel="' + l + '"][href="' + n + '"]'),
        typeof a == "string" && (n += '[crossorigin="' + a + '"]'),
        cd.has(n) ||
          (cd.add(n),
          (l = { rel: l, crossOrigin: a, href: t }),
          e.querySelector(n) === null &&
            ((t = e.createElement("link")),
            Pl(t, "link", l),
            Jl(t),
            e.head.appendChild(t))));
    }
  }
  function qh(l) {
    (ua.D(l), fd("dns-prefetch", l, null));
  }
  function Bh(l, t) {
    (ua.C(l, t), fd("preconnect", l, t));
  }
  function Yh(l, t, a) {
    ua.L(l, t, a);
    var e = qe;
    if (e && l && t) {
      var n = 'link[rel="preload"][as="' + Tt(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((n += '[imagesrcset="' + Tt(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (n += '[imagesizes="' + Tt(a.imageSizes) + '"]'))
        : (n += '[href="' + Tt(l) + '"]');
      var u = n;
      switch (t) {
        case "style":
          u = Be(l);
          break;
        case "script":
          u = Ye(l);
      }
      Ut.has(u) ||
        ((l = R(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : l,
            as: t,
          },
          a,
        )),
        Ut.set(u, l),
        e.querySelector(n) !== null ||
          (t === "style" && e.querySelector(Cn(u))) ||
          (t === "script" && e.querySelector(Hn(u))) ||
          ((t = e.createElement("link")),
          Pl(t, "link", l),
          Jl(t),
          e.head.appendChild(t)));
    }
  }
  function Gh(l, t) {
    ua.m(l, t);
    var a = qe;
    if (a && l) {
      var e = t && typeof t.as == "string" ? t.as : "script",
        n =
          'link[rel="modulepreload"][as="' + Tt(e) + '"][href="' + Tt(l) + '"]',
        u = n;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Ye(l);
      }
      if (
        !Ut.has(u) &&
        ((l = R({ rel: "modulepreload", href: l }, t)),
        Ut.set(u, l),
        a.querySelector(n) === null)
      ) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Hn(u))) return;
        }
        ((e = a.createElement("link")),
          Pl(e, "link", l),
          Jl(e),
          a.head.appendChild(e));
      }
    }
  }
  function Lh(l, t, a) {
    ua.S(l, t, a);
    var e = qe;
    if (e && l) {
      var n = ue(e).hoistableStyles,
        u = Be(l);
      t = t || "default";
      var i = n.get(u);
      if (!i) {
        var c = { loading: 0, preload: null };
        if ((i = e.querySelector(Cn(u)))) c.loading = 5;
        else {
          ((l = R({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = Ut.get(u)) && mf(l, a));
          var s = (i = e.createElement("link"));
          (Jl(s),
            Pl(s, "link", l),
            (s._p = new Promise(function (v, p) {
              ((s.onload = v), (s.onerror = p));
            })),
            s.addEventListener("load", function () {
              c.loading |= 1;
            }),
            s.addEventListener("error", function () {
              c.loading |= 2;
            }),
            (c.loading |= 4),
            Ju(i, t, e));
        }
        ((i = { type: "stylesheet", instance: i, count: 1, state: c }),
          n.set(u, i));
      }
    }
  }
  function Qh(l, t) {
    ua.X(l, t);
    var a = qe;
    if (a && l) {
      var e = ue(a).hoistableScripts,
        n = Ye(l),
        u = e.get(n);
      u ||
        ((u = a.querySelector(Hn(n))),
        u ||
          ((l = R({ src: l, async: !0 }, t)),
          (t = Ut.get(n)) && hf(l, t),
          (u = a.createElement("script")),
          Jl(u),
          Pl(u, "link", l),
          a.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        e.set(n, u));
    }
  }
  function Xh(l, t) {
    ua.M(l, t);
    var a = qe;
    if (a && l) {
      var e = ue(a).hoistableScripts,
        n = Ye(l),
        u = e.get(n);
      u ||
        ((u = a.querySelector(Hn(n))),
        u ||
          ((l = R({ src: l, async: !0, type: "module" }, t)),
          (t = Ut.get(n)) && hf(l, t),
          (u = a.createElement("script")),
          Jl(u),
          Pl(u, "link", l),
          a.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        e.set(n, u));
    }
  }
  function sd(l, t, a, e) {
    var n = (n = P.current) ? Ku(n) : null;
    if (!n) throw Error(d(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = Be(a.href)),
            (a = ue(n).hoistableStyles),
            (e = a.get(t)),
            e ||
              ((e = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, e)),
            e)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          l = Be(a.href);
          var u = ue(n).hoistableStyles,
            i = u.get(l);
          if (
            (i ||
              ((n = n.ownerDocument || n),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(l, i),
              (u = n.querySelector(Cn(l))) &&
                !u._p &&
                ((i.instance = u), (i.state.loading = 5)),
              Ut.has(l) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                Ut.set(l, a),
                u || Zh(n, l, a, i.state))),
            t && e === null)
          )
            throw Error(d(528, ""));
          return i;
        }
        if (t && e !== null) throw Error(d(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Ye(a)),
              (a = ue(n).hoistableScripts),
              (e = a.get(t)),
              e ||
                ((e = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, e)),
              e)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(d(444, l));
    }
  }
  function Be(l) {
    return 'href="' + Tt(l) + '"';
  }
  function Cn(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function od(l) {
    return R({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Zh(l, t, a, e) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (e.loading = 1)
      : ((t = l.createElement("link")),
        (e.preload = t),
        t.addEventListener("load", function () {
          return (e.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (e.loading |= 2);
        }),
        Pl(t, "link", a),
        Jl(t),
        l.head.appendChild(t));
  }
  function Ye(l) {
    return '[src="' + Tt(l) + '"]';
  }
  function Hn(l) {
    return "script[async]" + l;
  }
  function rd(l, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var e = l.querySelector('style[data-href~="' + Tt(a.href) + '"]');
          if (e) return ((t.instance = e), Jl(e), e);
          var n = R({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (e = (l.ownerDocument || l).createElement("style")),
            Jl(e),
            Pl(e, "style", n),
            Ju(e, a.precedence, l),
            (t.instance = e)
          );
        case "stylesheet":
          n = Be(a.href);
          var u = l.querySelector(Cn(n));
          if (u) return ((t.state.loading |= 4), (t.instance = u), Jl(u), u);
          ((e = od(a)),
            (n = Ut.get(n)) && mf(e, n),
            (u = (l.ownerDocument || l).createElement("link")),
            Jl(u));
          var i = u;
          return (
            (i._p = new Promise(function (c, s) {
              ((i.onload = c), (i.onerror = s));
            })),
            Pl(u, "link", e),
            (t.state.loading |= 4),
            Ju(u, a.precedence, l),
            (t.instance = u)
          );
        case "script":
          return (
            (u = Ye(a.src)),
            (n = l.querySelector(Hn(u)))
              ? ((t.instance = n), Jl(n), n)
              : ((e = a),
                (n = Ut.get(u)) && ((e = R({}, a)), hf(e, n)),
                (l = l.ownerDocument || l),
                (n = l.createElement("script")),
                Jl(n),
                Pl(n, "link", e),
                l.head.appendChild(n),
                (t.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(d(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((e = t.instance), (t.state.loading |= 4), Ju(e, a.precedence, l));
    return t.instance;
  }
  function Ju(l, t, a) {
    for (
      var e = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        n = e.length ? e[e.length - 1] : null,
        u = n,
        i = 0;
      i < e.length;
      i++
    ) {
      var c = e[i];
      if (c.dataset.precedence === t) u = c;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(l, u.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
  }
  function mf(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title));
  }
  function hf(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity));
  }
  var wu = null;
  function dd(l, t, a) {
    if (wu === null) {
      var e = new Map(),
        n = (wu = new Map());
      n.set(a, e);
    } else ((n = wu), (e = n.get(a)), e || ((e = new Map()), n.set(a, e)));
    if (e.has(l)) return e;
    for (
      e.set(l, null), a = a.getElementsByTagName(l), n = 0;
      n < a.length;
      n++
    ) {
      var u = a[n];
      if (
        !(
          u[ke] ||
          u[Wl] ||
          (l === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = u.getAttribute(t) || "";
        i = l + i;
        var c = e.get(i);
        c ? c.push(u) : e.set(i, [u]);
      }
    }
    return e;
  }
  function md(l, t, a) {
    ((l = l.ownerDocument || l),
      l.head.insertBefore(
        a,
        t === "title" ? l.querySelector("head > title") : null,
      ));
  }
  function Vh(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((l = t.disabled), typeof t.precedence == "string" && l == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function hd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Kh(l, t, a, e) {
    if (
      a.type === "stylesheet" &&
      (typeof e.media != "string" || matchMedia(e.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var n = Be(e.href),
          u = t.querySelector(Cn(n));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = $u.bind(l)), t.then(l, l)),
            (a.state.loading |= 4),
            (a.instance = u),
            Jl(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (e = od(e)),
          (n = Ut.get(n)) && mf(e, n),
          (u = u.createElement("link")),
          Jl(u));
        var i = u;
        ((i._p = new Promise(function (c, s) {
          ((i.onload = c), (i.onerror = s));
        })),
          Pl(u, "link", e),
          (a.instance = u));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (l.count++,
          (a = $u.bind(l)),
          t.addEventListener("load", a),
          t.addEventListener("error", a)));
    }
  }
  var vf = 0;
  function Jh(l, t) {
    return (
      l.stylesheets && l.count === 0 && ku(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (a) {
            var e = setTimeout(function () {
              if ((l.stylesheets && ku(l, l.stylesheets), l.unsuspend)) {
                var u = l.unsuspend;
                ((l.unsuspend = null), u());
              }
            }, 6e4 + t);
            0 < l.imgBytes && vf === 0 && (vf = 62500 * jh());
            var n = setTimeout(
              function () {
                if (
                  ((l.waitingForImages = !1),
                  l.count === 0 &&
                    (l.stylesheets && ku(l, l.stylesheets), l.unsuspend))
                ) {
                  var u = l.unsuspend;
                  ((l.unsuspend = null), u());
                }
              },
              (l.imgBytes > vf ? 50 : 800) + t,
            );
            return (
              (l.unsuspend = a),
              function () {
                ((l.unsuspend = null), clearTimeout(e), clearTimeout(n));
              }
            );
          }
        : null
    );
  }
  function $u() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) ku(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        ((this.unsuspend = null), l());
      }
    }
  }
  var Wu = null;
  function ku(l, t) {
    ((l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Wu = new Map()),
        t.forEach(wh, l),
        (Wu = null),
        $u.call(l)));
  }
  function wh(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Wu.get(l);
      if (a) var e = a.get(null);
      else {
        ((a = new Map()), Wu.set(l, a));
        for (
          var n = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (a.set(i.dataset.precedence, i), (e = i));
        }
        e && a.set(null, e);
      }
      ((n = t.instance),
        (i = n.getAttribute("data-precedence")),
        (u = a.get(i) || e),
        u === e && a.set(null, n),
        a.set(i, n),
        this.count++,
        (e = $u.bind(this)),
        n.addEventListener("load", e),
        n.addEventListener("error", e),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(n, l.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var qn = {
    $$typeof: il,
    Provider: null,
    Consumer: null,
    _currentValue: V,
    _currentValue2: V,
    _threadCount: 0,
  };
  function $h(l, t, a, e, n, u, i, c, s) {
    ((this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = si(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = si(0)),
      (this.hiddenUpdates = si(null)),
      (this.identifierPrefix = e),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = s),
      (this.incompleteTransitions = new Map()));
  }
  function vd(l, t, a, e, n, u, i, c, s, v, p, A) {
    return (
      (l = new $h(l, t, a, i, s, v, p, A, c)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = vt(3, null, null, t)),
      (l.current = u),
      (u.stateNode = l),
      (t = wi()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: e, isDehydrated: a, cache: t }),
      Fi(u),
      l
    );
  }
  function yd(l) {
    return l ? ((l = ve), l) : ve;
  }
  function gd(l, t, a, e, n, u) {
    ((n = yd(n)),
      e.context === null ? (e.context = n) : (e.pendingContext = n),
      (e = ya(t)),
      (e.payload = { element: a }),
      (u = u === void 0 ? null : u),
      u !== null && (e.callback = u),
      (a = ga(l, e, t)),
      a !== null && (ot(a, l, t), hn(a, l, t)));
  }
  function Sd(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function yf(l, t) {
    (Sd(l, t), (l = l.alternate) && Sd(l, t));
  }
  function pd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = La(l, 67108864);
      (t !== null && ot(t, l, 67108864), yf(l, 67108864));
    }
  }
  function bd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = bt();
      t = oi(t);
      var a = La(l, t);
      (a !== null && ot(a, l, t), yf(l, t));
    }
  }
  var Fu = !0;
  function Wh(l, t, a, e) {
    var n = z.T;
    z.T = null;
    var u = _.p;
    try {
      ((_.p = 2), gf(l, t, a, e));
    } finally {
      ((_.p = u), (z.T = n));
    }
  }
  function kh(l, t, a, e) {
    var n = z.T;
    z.T = null;
    var u = _.p;
    try {
      ((_.p = 8), gf(l, t, a, e));
    } finally {
      ((_.p = u), (z.T = n));
    }
  }
  function gf(l, t, a, e) {
    if (Fu) {
      var n = Sf(e);
      if (n === null) (af(l, t, e, Iu, a), Ed(l, e));
      else if (Ih(n, l, t, a, e)) e.stopPropagation();
      else if ((Ed(l, e), t & 4 && -1 < Fh.indexOf(l))) {
        for (; n !== null;) {
          var u = ne(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var i = Et(u.pendingLanes);
                  if (i !== 0) {
                    var c = u;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i;) {
                      var s = 1 << (31 - Ol(i));
                      ((c.entanglements[1] |= s), (i &= ~s));
                    }
                    (Lt(u), (ml & 6) === 0 && ((Cu = $l() + 500), On(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((c = La(u, 2)), c !== null && ot(c, u, 2), qu(), yf(u, 2));
            }
          if (((u = Sf(e)), u === null && af(l, t, e, Iu, a), u === n)) break;
          n = u;
        }
        n !== null && e.stopPropagation();
      } else af(l, t, e, null, a);
    }
  }
  function Sf(l) {
    return ((l = pi(l)), pf(l));
  }
  var Iu = null;
  function pf(l) {
    if (((Iu = null), (l = ee(l)), l !== null)) {
      var t = C(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = N(t)), l !== null)) return l;
          l = null;
        } else if (a === 31) {
          if (((l = Z(t)), l !== null)) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return ((Iu = l), null);
  }
  function zd(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (qt()) {
          case Ra:
            return 2;
          case Ke:
            return 8;
          case Ca:
          case Je:
            return 32;
          case Zn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var bf = !1,
    Na = null,
    _a = null,
    Oa = null,
    Bn = new Map(),
    Yn = new Map(),
    Da = [],
    Fh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Ed(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Na = null;
        break;
      case "dragenter":
      case "dragleave":
        _a = null;
        break;
      case "mouseover":
      case "mouseout":
        Oa = null;
        break;
      case "pointerover":
      case "pointerout":
        Bn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Yn.delete(t.pointerId);
    }
  }
  function Gn(l, t, a, e, n, u) {
    return l === null || l.nativeEvent !== u
      ? ((l = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: e,
          nativeEvent: u,
          targetContainers: [n],
        }),
        t !== null && ((t = ne(t)), t !== null && pd(t)),
        l)
      : ((l.eventSystemFlags |= e),
        (t = l.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        l);
  }
  function Ih(l, t, a, e, n) {
    switch (t) {
      case "focusin":
        return ((Na = Gn(Na, l, t, a, e, n)), !0);
      case "dragenter":
        return ((_a = Gn(_a, l, t, a, e, n)), !0);
      case "mouseover":
        return ((Oa = Gn(Oa, l, t, a, e, n)), !0);
      case "pointerover":
        var u = n.pointerId;
        return (Bn.set(u, Gn(Bn.get(u) || null, l, t, a, e, n)), !0);
      case "gotpointercapture":
        return (
          (u = n.pointerId),
          Yn.set(u, Gn(Yn.get(u) || null, l, t, a, e, n)),
          !0
        );
    }
    return !1;
  }
  function Ad(l) {
    var t = ee(l.target);
    if (t !== null) {
      var a = C(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = N(a)), t !== null)) {
            ((l.blockedOn = t),
              qf(l.priority, function () {
                bd(a);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = Z(a)), t !== null)) {
            ((l.blockedOn = t),
              qf(l.priority, function () {
                bd(a);
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Pu(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length;) {
      var a = Sf(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var e = new a.constructor(a.type, a);
        ((Si = e), a.target.dispatchEvent(e), (Si = null));
      } else return ((t = ne(a)), t !== null && pd(t), (l.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function Td(l, t, a) {
    Pu(l) && a.delete(t);
  }
  function Ph() {
    ((bf = !1),
      Na !== null && Pu(Na) && (Na = null),
      _a !== null && Pu(_a) && (_a = null),
      Oa !== null && Pu(Oa) && (Oa = null),
      Bn.forEach(Td),
      Yn.forEach(Td));
  }
  function li(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      bf ||
        ((bf = !0),
        S.unstable_scheduleCallback(S.unstable_NormalPriority, Ph)));
  }
  var ti = null;
  function xd(l) {
    ti !== l &&
      ((ti = l),
      S.unstable_scheduleCallback(S.unstable_NormalPriority, function () {
        ti === l && (ti = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t],
            e = l[t + 1],
            n = l[t + 2];
          if (typeof e != "function") {
            if (pf(e || a) === null) continue;
            break;
          }
          var u = ne(a);
          u !== null &&
            (l.splice(t, 3),
            (t -= 3),
            gc(u, { pending: !0, data: n, method: a.method, action: e }, e, n));
        }
      }));
  }
  function Ge(l) {
    function t(s) {
      return li(s, l);
    }
    (Na !== null && li(Na, l),
      _a !== null && li(_a, l),
      Oa !== null && li(Oa, l),
      Bn.forEach(t),
      Yn.forEach(t));
    for (var a = 0; a < Da.length; a++) {
      var e = Da[a];
      e.blockedOn === l && (e.blockedOn = null);
    }
    for (; 0 < Da.length && ((a = Da[0]), a.blockedOn === null);)
      (Ad(a), a.blockedOn === null && Da.shift());
    if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
      for (e = 0; e < a.length; e += 3) {
        var n = a[e],
          u = a[e + 1],
          i = n[nt] || null;
        if (typeof u == "function") i || xd(a);
        else if (i) {
          var c = null;
          if (u && u.hasAttribute("formAction")) {
            if (((n = u), (i = u[nt] || null))) c = i.formAction;
            else if (pf(n) !== null) continue;
          } else c = i.action;
          (typeof c == "function" ? (a[e + 1] = c) : (a.splice(e, 3), (e -= 3)),
            xd(a));
        }
      }
  }
  function jd() {
    function l(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (n = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (n !== null && (n(), (n = null)), e || setTimeout(a, 20));
    }
    function a() {
      if (!e && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var e = !1,
        n = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          ((e = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            n !== null && (n(), (n = null)));
        }
      );
    }
  }
  function zf(l) {
    this._internalRoot = l;
  }
  ((ai.prototype.render = zf.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(d(409));
      var a = t.current,
        e = bt();
      gd(a, e, l, t, null, null);
    }),
    (ai.prototype.unmount = zf.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          (gd(l.current, 2, null, l, null, null), qu(), (t[ae] = null));
        }
      }));
  function ai(l) {
    this._internalRoot = l;
  }
  ai.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = Hf();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < Da.length && t !== 0 && t < Da[a].priority; a++);
      (Da.splice(a, 0, l), a === 0 && Ad(l));
    }
  };
  var Md = M.version;
  if (Md !== "19.2.8") throw Error(d(527, Md, "19.2.8"));
  _.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(d(188))
        : ((l = Object.keys(l).join(",")), Error(d(268, l)));
    return (
      (l = b(t)),
      (l = l !== null ? D(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var l0 = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.2.8",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ei = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ei.isDisabled && ei.supportsFiber)
      try {
        ((Y = ei.inject(l0)), (Q = ei));
      } catch {}
  }
  return (
    (Qn.createRoot = function (l, t) {
      if (!x(l)) throw Error(d(299));
      var a = !1,
        e = "",
        n = Co,
        u = Ho,
        i = qo;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (e = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = vd(l, 1, !1, null, null, a, e, null, n, u, i, jd)),
        (l[ae] = t.current),
        tf(l),
        new zf(t)
      );
    }),
    (Qn.hydrateRoot = function (l, t, a) {
      if (!x(l)) throw Error(d(299));
      var e = !1,
        n = "",
        u = Co,
        i = Ho,
        c = qo,
        s = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (e = !0),
          a.identifierPrefix !== void 0 && (n = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (u = a.onUncaughtError),
          a.onCaughtError !== void 0 && (i = a.onCaughtError),
          a.onRecoverableError !== void 0 && (c = a.onRecoverableError),
          a.formState !== void 0 && (s = a.formState)),
        (t = vd(l, 1, !0, t, a ?? null, e, n, s, u, i, c, jd)),
        (t.context = yd(null)),
        (a = t.current),
        (e = bt()),
        (e = oi(e)),
        (n = ya(e)),
        (n.callback = null),
        ga(a, n, e),
        (a = e),
        (t.current.lanes = a),
        We(t, a),
        Lt(t),
        (l[ae] = t.current),
        tf(l),
        new ai(t)
      );
    }),
    (Qn.version = "19.2.8"),
    Qn
  );
}
var Bd;
function r0() {
  if (Bd) return Tf.exports;
  Bd = 1;
  function S() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S);
      } catch (M) {
        console.error(M);
      }
  }
  return (S(), (Tf.exports = o0()), Tf.exports);
}
var d0 = r0();
const m0 = Xd(d0),
  h0 = "modulepreload",
  v0 = function (S, M) {
    return new URL(S, M).href;
  },
  Yd = {},
  _f = function (M, j, d) {
    let x = Promise.resolve();
    if (j && j.length > 0) {
      let b = function (D) {
        return Promise.all(
          D.map((R) =>
            Promise.resolve(R).then(
              (J) => ({ status: "fulfilled", value: J }),
              (J) => ({ status: "rejected", reason: J }),
            ),
          ),
        );
      };
      const N = document.getElementsByTagName("link"),
        Z = document.querySelector("meta[property=csp-nonce]"),
        O = Z?.nonce || Z?.getAttribute("nonce");
      x = b(
        j.map((D) => {
          if (((D = v0(D, d)), D in Yd)) return;
          Yd[D] = !0;
          const R = D.endsWith(".css"),
            J = R ? '[rel="stylesheet"]' : "";
          if (d)
            for (let cl = N.length - 1; cl >= 0; cl--) {
              const I = N[cl];
              if (I.href === D && (!R || I.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${D}"]${J}`)) return;
          const al = document.createElement("link");
          if (
            ((al.rel = R ? "stylesheet" : h0),
            R || (al.as = "script"),
            (al.crossOrigin = ""),
            (al.href = D),
            O && al.setAttribute("nonce", O),
            document.head.appendChild(al),
            R)
          )
            return new Promise((cl, I) => {
              (al.addEventListener("load", cl),
                al.addEventListener("error", () =>
                  I(new Error(`Unable to preload CSS for ${D}`)),
                ));
            });
        }),
      );
    }
    function C(N) {
      const Z = new Event("vite:preloadError", { cancelable: !0 });
      if (((Z.payload = N), window.dispatchEvent(Z), !Z.defaultPrevented))
        throw N;
    }
    return x.then((N) => {
      for (const Z of N || []) Z.status === "rejected" && C(Z.reason);
      return M().catch(C);
    });
  },
  Nf = "1.1.24",
  y0 = (S, M) => {
    const j = S.split(".").map(Number),
      d = M.split(".").map(Number);
    for (let x = 0; x < 3; x++) {
      if ((j[x] ?? 0) > (d[x] ?? 0)) return !0;
      if ((j[x] ?? 0) < (d[x] ?? 0)) return !1;
    }
    return !1;
  },
  Gd = (S, M) => {
    const d = ((M.lat - S.lat) * Math.PI) / 180,
      x = ((M.lon - S.lon) * Math.PI) / 180,
      C =
        Math.sin(d / 2) ** 2 +
        Math.cos((S.lat * Math.PI) / 180) *
          Math.cos((M.lat * Math.PI) / 180) *
          Math.sin(x / 2) ** 2;
    return 2 * 6371 * Math.asin(Math.sqrt(C));
  };
const radarWorldPoint = (S, M, j = 6) => {
    const d = 256 * 2 ** j,
      x = Math.sin((Math.max(-85.05112878, Math.min(85.05112878, S)) * Math.PI) / 180);
    return {
      x: ((M + 180) / 360) * d,
      y: (0.5 - Math.log((1 + x) / (1 - x)) / (4 * Math.PI)) * d,
    };
  },
  radarWorldLatLng = (S, M, j = 6) => {
    const d = 256 * 2 ** j,
      x = Math.PI - (2 * Math.PI * M) / d;
    return {
      lat: (Math.atan(Math.sinh(x)) * 180) / Math.PI,
      lon: (S / d) * 360 - 180,
    };
  },
  radarPixelLatLng = (S, M, j) => {
    const d = radarWorldPoint(S.lat, S.lon);
    return radarWorldLatLng(d.x + M - 128, d.y + j - 128);
  },
  radarImageBounds = (S) => {
    const M = radarWorldPoint(S.lat, S.lon),
      j = radarWorldLatLng(M.x - 128, M.y - 128),
      d = radarWorldLatLng(M.x + 128, M.y + 128);
    return [
      [d.lat, j.lon],
      [j.lat, d.lon],
    ];
  },
  radarFrameUrl = (S, M, j) =>
    `${S}${M}/256/6/${Number(j.lat).toFixed(6)}/${Number(j.lon).toFixed(6)}/2/1_1.png`;
async function ni(S) {
  const M = await fetch("https://api.rainviewer.com/public/weather-maps.json", {
    cache: "no-store",
  });
  if (!M.ok) throw new Error();
  const j = await M.json(),
    d = (j?.radar?.past ?? []).slice(-6);
  if (!d.length) throw new Error();
  return d.map((x) => ({
    url: radarFrameUrl(j.host, x.path, S),
    tileUrl: `${j.host}${x.path}/256/{z}/{x}/{y}/2/1_1.png`,
    time: x.time,
    host: j.host,
    path: x.path,
  }));
}
const g0 = (S) =>
    S >= 4
      ? "molto forte"
      : S === 3
        ? "forte"
        : S === 2
          ? "moderata"
          : S === 1
            ? "debole"
            : "assente",
  S0 = (S, M) => {
    if (Math.hypot(S, M) < 3) return "non definita";
    const j = [
        "nord",
        "nord-est",
        "est",
        "sud-est",
        "sud",
        "sud-ovest",
        "ovest",
        "nord-ovest",
      ],
      d = ((Math.atan2(S, -M) * 180) / Math.PI + 360) % 360;
    return j[Math.round(d / 45) % 8];
  },
  p0 = (S, M, j, d) =>
    d < 45
      ? 0
      : S > 155 && j > 125 && M < 170
        ? 4
        : S > 155 && M < 145 && j < 125
          ? 3
          : S > 155 && M > 120 && j < 135
            ? 2
            : j > 105 && (j > S * 1.08 || M > S * 1.15)
              ? 1
              : 0;
async function b0(S, M) {
  const j = radarFrameUrl(S.host, S.path, M),
    d = await fetch(j, { cache: "no-store" });
  if (!d.ok) throw new Error();
  const x = await createImageBitmap(await d.blob()),
    C = document.createElement("canvas");
  ((C.width = x.width), (C.height = x.height));
  const N = C.getContext("2d", { willReadFrequently: !0 });
  if (!N) throw new Error();
  (N.drawImage(x, 0, 0), x.close());
  const Z = N.getImageData(0, 0, C.width, C.height).data,
    O = C.width / 2,
    b = C.height / 2,
    D = (156.54303392 * Math.cos((M.lat * Math.PI) / 180)) / 64;
  const points = [], pointMap = new Map();
  for (let Sl = 1; Sl < C.height; Sl += 2)
    for (let pl = 1; pl < C.width; pl += 2) {
      const jl = Math.hypot(pl - O, Sl - b) * D;
      if (jl > 150) continue;
      const il = (Sl * C.width + pl) * 4,
        hl = p0(Z[il], Z[il + 1], Z[il + 2], Z[il + 3]);
      if (!hl) continue;
      const point = { x: pl, y: Sl, score: hl, distance: jl };
      (points.push(point), pointMap.set(`${pl},${Sl}`, point));
    }
  if (!points.length) return [];
  const visited = new Set(), components = [];
  for (const start of points) {
    const startKey = `${start.x},${start.y}`;
    if (visited.has(startKey)) continue;
    const queue = [start], cell = [];
    visited.add(startKey);
    while (queue.length) {
      const point = queue.pop();
      cell.push(point);
      for (let dx = -4; dx <= 4; dx += 2)
        for (let dy = -4; dy <= 4; dy += 2) {
          if (!dx && !dy) continue;
          const key = `${point.x + dx},${point.y + dy}`,
            neighbor = pointMap.get(key);
          if (neighbor && !visited.has(key))
            (visited.add(key), queue.push(neighbor));
        }
    }
    const counts = [0, 0, 0, 0, 0];
    for (const point of cell) counts[point.score] += 1;
    const rawPeak = Math.max(...cell.map((point) => point.score)),
      qualifiedScore =
        counts[4] >= 6
          ? 4
          : counts[3] + counts[4] >= 8
            ? 3
            : counts[2] + counts[3] + counts[4] >= 10
              ? 2
              : counts[1] + counts[2] + counts[3] + counts[4] >= 12
                ? 1
                : 0;
    if (!qualifiedScore) continue;
    const significant = cell.filter((point) => point.score >= qualifiedScore);
    let weight = 0, sumX = 0, sumY = 0;
    for (const point of significant) {
      const pointWeight = point.score * point.score;
      ((weight += pointWeight),
        (sumX += point.x * pointWeight),
        (sumY += point.y * pointWeight));
    }
    const centerX = sumX / weight,
      centerY = sumY / weight,
      marker = significant.reduce((best, point) =>
        point.score > best.score ||
        (point.score === best.score &&
          Math.hypot(point.x - centerX, point.y - centerY) <
            Math.hypot(best.x - centerX, best.y - centerY))
          ? point
          : best,
      significant[0]),
      distance = Math.min(...significant.map((point) => point.distance));
    components.push({
      distance,
      score: qualifiedScore,
      rawPeak,
      localizedPeak: rawPeak > qualifiedScore,
      x: centerX,
      y: centerY,
      markerX: marker.x,
      markerY: marker.y,
      size: cell.length,
      priority: qualifiedScore * 1e5 + rawPeak * 1e4 + cell.length * 20 - distance,
    });
  }
  return components.sort((first, second) => second.priority - first.priority);
}
async function Ld(S, M) {
  if (S.length < 2)
    return {
      available: !1,
      distance: null,
      intensity: "assente",
      trend: "non determinabile",
      speed: null,
      eta: null,
      direction: "non definita",
      target: "non determinabile",
      closestApproach: null,
      echoX: null,
      echoY: null,
      echoLat: null,
      echoLon: null,
      angle: null,
      peakTime: null,
      note: "Servono almeno due immagini radar.",
    };
  try {
    const j = await Promise.all(S.map((jl) => b0(jl, M))),
      lastIndex = (() => {
        for (let index = j.length - 1; index >= 0; index--)
          if (j[index].length) return index;
        return -1;
      })(),
      tracks = [];
    if (lastIndex >= 0) {
      for (const lastSample of j[lastIndex]) {
        const track = [{ sample: lastSample, index: lastIndex }];
        let tracked = lastSample;
        for (let index = lastIndex - 1; index >= 0; index--) {
          if (!j[index].length) continue;
          const match = j[index].reduce((best, candidate) => {
            const distance = Math.hypot(candidate.x - tracked.x, candidate.y - tracked.y),
              bestDistance = best
                ? Math.hypot(best.x - tracked.x, best.y - tracked.y)
                : 1 / 0;
            return distance < bestDistance ? candidate : best;
          }, null);
          if (match && Math.hypot(match.x - tracked.x, match.y - tracked.y) <= 42)
            ((tracked = match), track.unshift({ sample: tracked, index }));
        }
        const oldest = track[0].sample,
          current = track.at(-1).sample,
          center = 128,
          oldDistance = Math.hypot(oldest.x - center, oldest.y - center),
          currentDistance = Math.hypot(current.x - center, current.y - center),
          moveX = current.x - oldest.x,
          moveY = current.y - oldest.y,
          movePower = moveX * moveX + moveY * moveY,
          projection =
            movePower > 9
              ? ((center - current.x) * moveX + (center - current.y) * moveY) /
                movePower
              : -1,
          closestPixels =
            projection > 0
              ? Math.hypot(
                  current.x + projection * moveX - center,
                  current.y + projection * moveY - center,
                )
              : currentDistance,
          kmPerPixel =
            (156.54303392 * Math.cos((M.lat * Math.PI) / 180)) / 64,
          closestKm = closestPixels * kmPerPixel,
          movementPixels = Math.hypot(moveX, moveY),
          reliableMovement = track.length >= 3 && movementPixels >= 6,
          movementTowardTarget = reliableMovement && projection > 0,
          approaching = oldDistance - currentDistance > 4,
          direct = movementTowardTarget && approaching && closestKm <= 15,
          near = movementTowardTarget && closestKm <= 30,
          relevance =
            (direct ? 24000 : near ? 14000 : approaching ? 6000 : 0) +
            (movementTowardTarget ? 6500 : reliableMovement ? 1000 : -2500) +
            Math.max(0, 150 - current.distance) * 45 +
            current.score * 450 +
            current.rawPeak * 120 +
            Math.min(current.size, 250);
        tracks.push({ track, relevance });
      }
    }
    const d = tracks.sort((first, second) => second.relevance - first.relevance)[0]?.track ?? [];
    if (!d.length)
      return {
        available: !0,
        distance: null,
        intensity: "assente",
        trend: "non determinabile",
        speed: null,
        eta: null,
        direction: "non definita",
        target: "non determinabile",
        closestApproach: null,
        echoX: null,
        echoY: null,
        echoLat: null,
        echoLon: null,
        angle: null,
        peakTime: null,
        note: "Nessuna precipitazione significativa rilevata entro 150 km.",
      };
    const x = d[0],
      C = d.at(-1),
      N = x.sample,
      Z = C.sample,
      O = d.reduce((jl, il) =>
        il.sample.score > jl.sample.score ||
        (il.sample.score === jl.sample.score &&
          il.sample.distance < jl.sample.distance)
          ? il
          : jl,
      ),
      b = 128,
      D = Math.hypot(Z.x - b, Z.y - b),
      R = N ? Math.hypot(N.x - b, N.y - b) : D,
      J = (156.54303392 * Math.cos((M.lat * Math.PI) / 180)) / 64,
      al = Math.max((S.at(-1).time - S[0].time) / 3600, 0.1),
      cl = (D - R) * J,
      moveX = Z.x - N.x,
      moveY = Z.y - N.y,
      movePower = moveX * moveX + moveY * moveY,
      projection =
        movePower > 9
          ? ((b - Z.x) * moveX + (b - Z.y) * moveY) / movePower
          : -1,
      closestPixels =
        projection > 0
          ? Math.hypot(
              Z.x + projection * moveX - b,
              Z.y + projection * moveY - b,
            )
          : D,
      closestApproach = closestPixels * J,
      I = Math.abs(cl) / al,
      Sl =
        d.length < 2
          ? "non determinabile"
          : cl < -7
            ? "in avvicinamento"
            : cl > 7
              ? "in allontanamento"
              : "quasi stabile",
      target =
        d.length < 3 || movePower <= 9
          ? "non determinabile"
          : Sl === "in avvicinamento" &&
              projection > 0 &&
              closestApproach <= 15
            ? "telefono"
            : projection > 0 && closestApproach <= 30
              ? "passaggio vicino"
              : "altra zona",
      pl =
        target === "telefono" && I >= 8
          ? Math.round((Z.distance / I) * 60)
          : null;
    const echoPoint = radarPixelLatLng(M, O.sample.markerX, O.sample.markerY);
    return {
      available: !0,
      distance: Math.round(Z.distance),
      intensity: g0(O.sample.score),
      intensityDetail: O.sample.localizedPeak
        ? `Picco ${g0(O.sample.rawPeak)} localizzato, superficie prevalente ${g0(O.sample.score)}`
        : `Intensità ${g0(O.sample.score)} confermata su una superficie significativa`,
      trend: Sl,
      speed: Sl === "non determinabile" ? null : Math.round(I),
      eta: pl,
      direction: d.length > 1 ? S0(Z.x - N.x, Z.y - N.y) : "non definita",
      target,
      closestApproach: Math.round(closestApproach),
      echoX: (O.sample.markerX / 256) * 100,
      echoY: (O.sample.markerY / 256) * 100,
      echoLat: echoPoint.lat,
      echoLon: echoPoint.lon,
      angle:
        movePower > 9 ? (Math.atan2(moveY, moveX) * 180) / Math.PI : null,
      peakTime: S[O.index].time,
      note: "Stima automatica ricavata dal movimento delle ultime immagini radar; non conferma da sola la grandine.",
    };
  } catch {
    return {
      available: !1,
      distance: null,
      intensity: "assente",
      trend: "non determinabile",
      speed: null,
      eta: null,
      direction: "non definita",
      target: "non determinabile",
      closestApproach: null,
      echoX: null,
      echoY: null,
      echoLat: null,
      echoLon: null,
      angle: null,
      peakTime: null,
      note: "Analisi automatica temporaneamente non disponibile.",
    };
  }
}
const z0 = (S) =>
  ({
    nord: -90,
    "nord-est": -45,
    est: 0,
    "sud-est": 45,
    sud: 90,
    "sud-ovest": 135,
    ovest: 180,
    "nord-ovest": 225,
  })[S] ?? 0;
function countryContains(S, M, j) {
  const d = (C) => {
    let N = !1;
    for (let Z = 0, O = C.length - 1; Z < C.length; O = Z++) {
      const b = C[Z][0],
        D = C[Z][1],
        R = C[O][0],
        J = C[O][1];
      D > j != J > j && M < ((R - b) * (j - D)) / (J - D) + b && (N = !N);
    }
    return N;
  };
  const x = S?.geometry;
  return x?.type === "Polygon"
    ? d(x.coordinates[0])
    : x?.type === "MultiPolygon"
      ? x.coordinates.some((C) => d(C[0]))
      : !1;
}
function E0({ point: S, frame: M, analysis: radarAnalysis, tone: radarTone }) {
  const j = w.useRef(null),
    d = w.useRef(null),
    x = w.useRef(null),
    analysisRef = w.useRef(radarAnalysis),
    frameRef = w.useRef(M),
    [echoPoint, setEchoPoint] = w.useState(null),
    updateEchoPoint = () => {
      const analysis = analysisRef.current,
        frame = frameRef.current;
      if (
        !d.current ||
        !analysis ||
        !frame ||
        analysis.peakTime !== frame.time ||
        analysis.echoLat === null ||
        analysis.echoLon === null
      ) {
        setEchoPoint(null);
        return;
      }
      const point = d.current.latLngToContainerPoint([
        analysis.echoLat,
        analysis.echoLon,
      ]);
      setEchoPoint({ x: point.x, y: point.y });
    };
  (w.useEffect(() => {
    ((analysisRef.current = radarAnalysis),
      (frameRef.current = M),
      updateEchoPoint());
  }, [
    radarAnalysis?.echoLat,
    radarAnalysis?.echoLon,
    radarAnalysis?.peakTime,
    M?.time,
  ]),
  w.useEffect(() => {
    if (!d.current) return;
    const map = d.current;
    return (
      map.on("moveend zoomend resize", updateEchoPoint),
      updateEchoPoint(),
      () => map.off("moveend zoomend resize", updateEchoPoint)
    );
  }, [S?.lat, S?.lon]),
  0);
  return (
    w.useEffect(() => {
      if (!j.current || !S) return;
      let C = !1;
      return (
        (async () => {
          const N = await _f(
            () => import("./leaflet-v1.1.23.js").then((D) => D.l),
            [],
            import.meta.url,
          );
          if (C || !j.current) return;
          ((d.current = N.map(j.current, {
            zoomControl: !1,
            attributionControl: !1,
            dragging: !1,
            scrollWheelZoom: !1,
            doubleClickZoom: !1,
            boxZoom: !1,
            keyboard: !1,
            touchZoom: !1,
            zoomSnap: 0.1,
            zoomAnimation: !1,
          }).setView([S.lat, S.lon], 6)),
            d.current.createPane("waterPane"),
            (d.current.getPane("waterPane").style.zIndex = "230"),
            (d.current.getPane("waterPane").style.pointerEvents = "none"),
            N.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
              maxZoom: 19,
              className: "baseMapTiles",
            }).addTo(d.current),
            M &&
              (x.current = N.imageOverlay(M.url, radarImageBounds(S), {
                opacity: 0.88,
                className: "radarTiles",
                interactive: !1,
              }).addTo(d.current)));
          const Z = [50, 100, 150].map((D) =>
              N.circle([S.lat, S.lon], {
                radius: D * 1e3,
                color: "#a8f6ef",
                weight: 1.4,
                opacity: 0.7,
                fill: !1,
                interactive: !1,
              }).addTo(d.current),
            ),
            O = (S.lat * Math.PI) / 180;
          ([50, 100, 150].forEach((D) => {
            const R = S.lat + (D / 111.32) * 0.7071,
              J = S.lon + (D / (111.32 * Math.cos(O))) * 0.7071;
            N.marker([R, J], {
              interactive: !1,
              icon: N.divIcon({
                className: "distanceMapLabel",
                html: `${D} km`,
                iconSize: [54, 24],
                iconAnchor: [27, 12],
              }),
            }).addTo(d.current);
          }),
            fetch("./assets/countries-110m.geojson")
              .then((D) => D.json())
              .then((D) => {
                if (C || !d.current) return;
                const waterHoles = (D.features ?? []).flatMap((J) => {
                    const featureGeometry = J?.geometry;
                    if (featureGeometry?.type === "Polygon")
                      return [featureGeometry.coordinates[0]];
                    if (featureGeometry?.type === "MultiPolygon")
                      return featureGeometry.coordinates.map((part) => part[0]);
                    return [];
                  }),
                  waterMask = [
                    [
                      [-85, -180],
                      [-85, 180],
                      [85, 180],
                      [85, -180],
                      [-85, -180],
                    ],
                    ...waterHoles.map((ring) =>
                      ring.map(([lon, lat]) => [lat, lon]),
                    ),
                  ];
                N.polygon(waterMask, {
                  pane: "waterPane",
                  interactive: !1,
                  stroke: !1,
                  fill: !0,
                  fillColor: "#33798a",
                  fillOpacity: 0.27,
                  fillRule: "evenodd",
                  className: "dynamicSeaMask",
                }).addTo(d.current);
                const R = D.features?.find((J) =>
                  countryContains(J, S.lon, S.lat),
                );
                R &&
                  (N.geoJSON(R, {
                    interactive: !1,
                    style: {
                      color: "#00151d",
                      weight: 6,
                      opacity: 0.82,
                      fillOpacity: 0,
                    },
                  }).addTo(d.current),
                  N.geoJSON(R, {
                    interactive: !1,
                    style: {
                      color: "#70fff4",
                      weight: 2.7,
                      opacity: 1,
                      fillColor: "#1fe0d1",
                      fillOpacity: 0.018,
                    },
                  }).addTo(d.current));
              })
              .catch(() => {}),
            setTimeout(() => {
              (d.current?.invalidateSize(),
                d.current?.fitBounds(Z[2].getBounds(), {
                  padding: [8, 8],
                  animate: !1,
                }),
                updateEchoPoint());
            }, 80));
        })(),
        () => {
          ((C = !0), d.current?.remove(), (d.current = null));
        }
      );
    }, [S?.lat, S?.lon]),
    w.useEffect(() => {
      !d.current ||
        !M ||
        (async () => {
          const C = await _f(
            () => import("./leaflet-v1.1.23.js").then((N) => N.l),
            [],
            import.meta.url,
          );
          (x.current && d.current.removeLayer(x.current),
            (x.current = C.imageOverlay(M.url, radarImageBounds(S), {
              opacity: 0.88,
              className: "radarTiles",
              interactive: !1,
            }).addTo(d.current)),
            updateEchoPoint());
        })();
    }, [M?.url]),
    f.jsxs(f.Fragment, {
      children: [
        f.jsx("div", {
          ref: j,
          className: "leafletRadar",
          "aria-label": "Cartina geografica con precipitazioni radar",
        }),
        echoPoint &&
          radarAnalysis?.direction !== "non definita" &&
          radarAnalysis?.trend !== "non determinabile" &&
          radarAnalysis?.angle !== null &&
          f.jsxs("div", {
            className: `movementArrow ${radarTone}`,
            style: {
              left: `${echoPoint.x}px`,
              top: `${echoPoint.y}px`,
              transform: `translate(0,-50%) rotate(${radarAnalysis.angle ?? z0(radarAnalysis.direction)}deg)`,
            },
            children: [f.jsx("i", {}), f.jsx("b", { children: "➤" })],
          }),
        echoPoint &&
          f.jsx("div", {
            className: `echoMarker ${radarTone}`,
            style: { left: `${echoPoint.x}px`, top: `${echoPoint.y}px` },
            "aria-label": "Eco radar analizzato",
          }),
      ],
    })
  );
}
function A0({ items: S }) {
  const M = S.map((x, C) => ({
      x: 24 + C * (70 / Math.max(1, S.length - 1)),
      y: Math.max(8, 58 - Math.min(100, x.score) * 0.5),
      ...x,
    })),
    j = M.map((x) => `${x.x},${x.y}`).join(" "),
    d = `M ${M[0].x} 60 L ${M.map((x) => `${x.x} ${x.y}`).join(" L ")} L ${M.at(-1)?.x ?? 92} 60 Z`;
  return f.jsx("div", {
    className: "marketChart",
    role: "img",
    "aria-label":
      "Andamento del rischio temporalesco nelle prossime quattro ore",
    children: f.jsx("div", {
      className: "marketPlot",
      children: f.jsxs("div", {
        className: "marketCanvas",
        children: [
          f.jsxs("svg", {
            viewBox: "0 0 100 68",
            "aria-hidden": "true",
            children: [
              f.jsxs("defs", {
                children: [
                  f.jsxs("linearGradient", {
                    id: "riskLine",
                    x1: "0",
                    y1: "1",
                    x2: "0",
                    y2: "0",
                    children: [
                      f.jsx("stop", { offset: "0", stopColor: "#18aa78" }),
                      f.jsx("stop", { offset: ".52", stopColor: "#f1b832" }),
                      f.jsx("stop", { offset: "1", stopColor: "#ef4c43" }),
                    ],
                  }),
                  f.jsxs("linearGradient", {
                    id: "riskArea",
                    x1: "0",
                    y1: "0",
                    x2: "0",
                    y2: "1",
                    children: [
                      f.jsx("stop", {
                        offset: "0",
                        stopColor: "#ef6558",
                        stopOpacity: ".25",
                      }),
                      f.jsx("stop", {
                        offset: "1",
                        stopColor: "#1caf80",
                        stopOpacity: ".03",
                      }),
                    ],
                  }),
                ],
              }),
              f.jsx("rect", {
                className: "marketZoneHigh",
                x: "0",
                y: "4",
                width: "100",
                height: "18",
              }),
              f.jsx("rect", {
                className: "marketZoneMid",
                x: "0",
                y: "22",
                width: "100",
                height: "18",
              }),
              f.jsx("rect", {
                className: "marketZoneLow",
                x: "0",
                y: "40",
                width: "100",
                height: "20",
              }),
              f.jsx("path", {
                className: "marketGrid",
                d: "M0 4H100 M0 22H100 M0 40H100 M0 60H100",
              }),
              f.jsxs("text", {
                className: "axisLabel axisHigh",
                x: "3",
                y: "11",
                children: [
                  f.jsx("tspan", { x: "3", children: "RISCHIO" }),
                  f.jsx("tspan", { x: "3", dy: "5", children: "ALTO" }),
                ],
              }),
              f.jsxs("text", {
                className: "axisLabel axisLow",
                x: "3",
                y: "51",
                children: [
                  f.jsx("tspan", { x: "3", children: "RISCHIO" }),
                  f.jsx("tspan", { x: "3", dy: "5", children: "BASSO" }),
                ],
              }),
              f.jsx("path", { className: "marketArea", d }),
              f.jsx("polyline", { className: "marketLine", points: j }),
              M.map((x) =>
                f.jsxs(
                  "g",
                  {
                    children: [
                      f.jsx("circle", { cx: x.x, cy: x.y, r: "2.35" }),
                      f.jsx("text", {
                        x: x.x,
                        y: Math.max(5, x.y - 4.2),
                        children: x.score,
                      }),
                    ],
                  },
                  x.time,
                ),
              ),
            ],
          }),
          f.jsx("div", {
            className: "marketTimes",
            children: S.map((x) => f.jsx("span", { children: x.time }, x.time)),
          }),
        ],
      }),
    }),
  });
}
function formatArrivalTime(minutes) {
  const totalMinutes = Math.max(0, Math.round(minutes));
  if (totalMinutes < 60)
    return `${totalMinutes} ${totalMinutes === 1 ? "minuto" : "minuti"}`;
  const hours = Math.floor(totalMinutes / 60),
    remainingMinutes = totalMinutes % 60,
    hoursText = `${hours} ${hours === 1 ? "ora" : "ore"}`;
  return remainingMinutes
    ? `${hoursText} e ${remainingMinutes} ${remainingMinutes === 1 ? "minuto" : "minuti"}`
    : hoursText;
}
function Qd({ title: S, analysis: M }) {
  return f.jsxs("section", {
    className: `radarInsight ${M?.distance === null ? "empty" : ""}`,
    children: [
      f.jsxs("div", {
        className: "radarInsightHead",
        children: [
          f.jsxs("div", {
            children: [
              M?.distance !== null &&
                f.jsx("small", { children: "ANALISI RADAR AUTOMATICA" }),
              f.jsx("h3", {
                children:
                  M?.distance === null ? "Nessun fenomeno rilevato" : S,
              }),
            ],
          }),
          f.jsx("span", {
            className: M?.intensity.replace(" ", "-") ?? "attesa",
            children: M ? M.intensity.toUpperCase() : "IN ANALISI",
          }),
        ],
      }),
      M
        ? M.distance === null
          ? f.jsx("p", {
              className: "emptyRadarText",
              children: "Nessun eco significativo rilevato entro 150 km.",
            })
          : f.jsxs(f.Fragment, {
            children: [
              f.jsxs("div", {
                className: "radarInsightGrid",
                children: [
                  f.jsxs("b", {
                    children: [
                      M.distance === null ? "—" : M.distance + " km",
                      f.jsx("small", { children: "eco più vicino" }),
                    ],
                  }),
                  f.jsxs("b", {
                    children: [
                      M.trend,
                      f.jsx("small", { children: "tendenza" }),
                    ],
                  }),
                  f.jsxs("b", {
                    children: [
                      M.direction,
                      f.jsx("small", { children: "direzione stimata" }),
                    ],
                  }),
                  f.jsxs("b", {
                    className: "targetBox",
                    children: [
                      M.target === "telefono"
                        ? "Zona telefono"
                        : M.target === "passaggio vicino"
                          ? "Passaggio vicino"
                          : M.target === "altra zona" &&
                              M.direction !== "non definita"
                            ? "Verso " + M.direction
                            : "Da verificare",
                      f.jsx("small", { children: "obiettivo stimato" }),
                    ],
                  }),
                ],
              }),
              M.eta &&
                f.jsxs("p", {
                  className: "radarEta",
                  children: [
                    "Arrivo indicativo nella zona: ",
                    f.jsx("strong", { children: formatArrivalTime(M.eta) }),
                  ],
                }),
              M.closestApproach !== null &&
                M.target !== "non determinabile" &&
                f.jsxs("p", {
                  className: "trajectoryNote",
                  children: [
                    "Distanza minima stimata dal telefono: ",
                    f.jsxs("strong", { children: [M.closestApproach, " km"] }),
                  ],
                }),
              M.intensityDetail &&
                f.jsx("p", {
                  className: "intensityDetail",
                  children: M.intensityDetail,
                }),
              f.jsx("p", { children: M.note }),
            ],
            })
        : f.jsx("p", { children: "Confronto delle immagini radar in corso…" }),
    ],
  });
}
function T0({ center: S, onSelect: M }) {
  const j = w.useRef(null),
    d = w.useRef(M);
  return (
    (d.current = M),
    w.useEffect(() => {
      if (!j.current) return;
      let x = !1,
        C;
      return (
        (async () => {
          const N = await _f(
            () => import("./leaflet-v1.1.23.js").then((O) => O.l),
            [],
            import.meta.url,
          );
          if (x || !j.current) return;
          ((C = N.map(j.current, {
            zoomControl: !0,
            attributionControl: !0,
          }).setView([S.lat, S.lon], 14)),
            N.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
              maxZoom: 19,
              attribution: "&copy; OpenStreetMap",
            }).addTo(C));
          let Z = N.circleMarker([S.lat, S.lon], {
            radius: 10,
            color: "white",
            weight: 3,
            fillColor: "#ed3f36",
            fillOpacity: 1,
          }).addTo(C);
          (C.on("click", (O) => {
            const b = { lat: O.latlng.lat, lon: O.latlng.lng };
            (Z.setLatLng(O.latlng), d.current(b));
          }),
            setTimeout(() => C.invalidateSize(), 80));
        })(),
        () => {
          ((x = !0), C?.remove());
        }
      );
    }, [S.lat, S.lon]),
    f.jsx("div", {
      ref: j,
      className: "carPickerMap",
      "aria-label": "Mappa per scegliere la posizione dell'auto",
    })
  );
}
async function Pa(S) {
  const M = async (K) => {
      const fl = new URLSearchParams({
          latitude: String(S.lat),
          longitude: String(S.lon),
          timezone: "auto",
          forecast_days: "2",
          models: K,
          current: "temperature_2m",
          hourly: "precipitation,cape,weather_code,wind_gusts_10m",
        }),
        L = await fetch("https://api.open-meteo.com/v1/forecast?" + fl);
      if (!L.ok) throw new Error();
      return L.json();
    },
    j = new URLSearchParams({
      latitude: String(S.lat),
      longitude: String(S.lon),
      timezone: "auto",
      forecast_days: "2",
      current: "temperature_2m",
      hourly: "precipitation_probability,wind_gusts_10m",
    }),
    [d, x, C, N] = await Promise.all([
      M("ecmwf_ifs025"),
      M("icon_seamless"),
      M("gfs_seamless"),
      fetch("https://api.open-meteo.com/v1/forecast?" + j).then((K) => {
        if (!K.ok) throw new Error();
        return K.json();
      }),
    ]),
    Z = (K) => {
      const fl = Math.max(
          0,
          K.hourly.time.findIndex((Ml) => new Date(Ml) >= new Date()),
        ),
        L = (Ml) => {
          const Tl = Number(K.hourly.precipitation[Ml] ?? 0),
            et = Number(K.hourly.cape[Ml] ?? 0),
            Vl = Number(K.hourly.wind_gusts_10m[Ml] ?? 0),
            Xl = Number(K.hourly.weather_code[Ml]) >= 95;
          return Math.min(
            100,
            (Xl ? 35 : 0) +
              (Tl >= 5 ? 20 : Tl >= 1 ? 10 : 0) +
              (et >= 1500 ? 30 : et >= 700 ? 18 : et >= 300 ? 8 : 0) +
              (Vl >= 65 ? 15 : Vl >= 45 ? 8 : 0),
          );
        };
      return { start: fl, scores: [0, 1, 2, 3].map((Ml) => L(fl + Ml)) };
    },
    O = [
      { name: "ECMWF", data: Z(d) },
      { name: "ICON", data: Z(x) },
      { name: "GFS", data: Z(C) },
    ],
    b = O.map((K) => {
      const fl = Math.max(...K.data.scores);
      return {
        name: K.name,
        score: fl,
        level: fl >= 65 ? "elevato" : fl >= 30 ? "attenzione" : "basso",
      };
    }),
    D = Math.round(b.reduce((K, fl) => K + fl.score, 0) / b.length),
    R = Math.max(...b.map((K) => K.score)) - Math.min(...b.map((K) => K.score)),
    J = b.filter((K) => Math.abs(K.score - D) <= 15).length,
    al = Math.min(79, 35 + J * 12 + (R <= 15 ? 10 : R <= 30 ? 4 : 0)),
    cl = D,
    I = O[0].data.start,
    Sl = [0, 1, 2, 3].map((K) => ({
      time: new Date(d.hourly.time[I + K]).toLocaleTimeString("it-IT", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      score: Math.round(O.reduce((fl, L) => fl + L.data.scores[K], 0) / 3),
    })),
    pl = Math.max(
      0,
      N.hourly.time.findIndex((K) => new Date(K) >= new Date()),
    ),
    jl = Math.max(
      0,
      ...N.hourly.precipitation_probability.slice(pl, pl + 4).map(Number),
    ),
    il = Math.max(
      ...O.flatMap((K) =>
        K.data.scores.map((fl, L) =>
          Number(
            (K.name === "ECMWF" ? d : K.name === "ICON" ? x : C).hourly
              .wind_gusts_10m[K.data.start + L] ?? 0,
          ),
        ),
      ),
    ),
    hl = {
      score: cl,
      temp: Number(N.current.temperature_2m),
      rain: jl,
      gust: il,
      trend: Sl,
      models: b,
      confidence: al,
      agreement: J,
    };
  return cl >= 65
    ? {
        level: "elevato",
        title: "Temporali forti possibili",
        detail:
          "Più modelli indicano condizioni favorevoli a temporali forti e possibile grandine. Manca ancora la conferma del radar.",
        ...hl,
      }
    : cl >= 30
      ? {
          level: "attenzione",
          title: "Situazione da controllare",
          detail:
            "I modelli rilevano alcuni segnali favorevoli a temporali con possibile grandine nelle prossime ore.",
          ...hl,
        }
      : {
          level: "basso",
          title: "Rischio basso secondo i modelli",
          detail:
            "I modelli non mostrano condizioni favorevoli alla grandine nelle prossime ore.",
          ...hl,
        };
}
function x0() {
  const [S, M] = w.useState("radar"),
    [j, d] = w.useState(() => {
      if (typeof window > "u") return null;
      try {
        const Y = localStorage.getItem("grandine-phone-position");
        return Y ? JSON.parse(Y) : null;
      } catch {
        return null;
      }
    }),
    [x, C] = w.useState(() => {
      if (typeof window > "u") return null;
      const Y = localStorage.getItem("grandine-car");
      return Y ? JSON.parse(Y) : null;
    }),
    [N, Z] = w.useState(null),
    [O, b] = w.useState(null),
    [D, R] = w.useState([]),
    [J, al] = w.useState(0),
    [cl, I] = w.useState(!1),
    [Sl, pl] = w.useState(!0),
    [jl, il] = w.useState(!1),
    [hl, K] = w.useState(null),
    [fl, L] = w.useState(!1),
    [Ml, Tl] = w.useState("Tocca il pulsante per controllare la zona."),
    [et, Vl] = w.useState(0),
    [Xl, rt] = w.useState(900),
    [dt, tt] = w.useState(null),
    [z, _] = w.useState(!1),
    [V, sl] = w.useState(!1),
    [vl, r] = w.useState(
      () =>
        typeof window < "u" &&
        localStorage.getItem("grandine-start-guide-v1") !== "done",
    ),
    [T, U] = w.useState(
      () =>
        typeof window < "u" &&
        localStorage.getItem("grandine-release-seen") !== Nf,
    ),
    [q, $] = w.useState(!1),
    [P, ol] = w.useState(!1),
    [Bl, Ul] = w.useState(null),
    [Kl, ia] = w.useState(null),
    [Le, le] = w.useState(null),
    [settingsOpen, setSettingsOpen] = w.useState(!1),
    [notifyPrefs, setNotifyPrefs] = w.useState(() => {
      const Y = {
        enabled: !1,
        phone: !0,
        car: !0,
        distance: "50",
        intensity: "forte",
        quiet: !1,
        quietFrom: "23:00",
        quietTo: "07:00",
      };
      try {
        return { ...Y, ...JSON.parse(localStorage.getItem("grandine-notification-settings") || "{}") };
      } catch {
        return Y;
      }
    }),
    [notifyStatus, setNotifyStatus] = w.useState(() =>
      typeof Notification === "undefined"
        ? "non supportate"
        : Notification.permission === "granted"
          ? "autorizzate"
          : Notification.permission === "denied"
            ? "bloccate"
            : "da autorizzare",
    ),
    zt = w.useRef(j),
    Qt = w.useRef(j),
    ca = w.useRef(0),
    Zl = w.useRef(null);
  (w.useEffect(() => {
    zt.current = j;
  }, [j]),
    w.useEffect(() => {
      "serviceWorker" in navigator &&
        navigator.serviceWorker.register("./sw.js").catch(() => {});
      const Y =
        window.matchMedia("(display-mode: standalone)").matches ||
        navigator.standalone === !0;
      sl(Y);
      const Q = (Ol) => {
          (Ol.preventDefault(), tt(Ol));
        },
        bl = () => {
          (sl(!0), tt(null));
        };
      return (
        window.addEventListener("beforeinstallprompt", Q),
        window.addEventListener("appinstalled", bl),
        () => {
          (window.removeEventListener("beforeinstallprompt", Q),
            window.removeEventListener("appinstalled", bl));
        }
      );
    }, []),
    w.useEffect(() => {
      let Y = !1;
      const Q = async () => {
          try {
            const fa = await fetch(`./version.json?t=${Date.now()}`, {
              cache: "no-store",
            });
            if (!fa.ok) return;
            const mt = await fa.json();
            !Y && y0(mt.latest, Nf) && Ul(mt);
          } catch {}
        },
        bl = () => {
          document.visibilityState === "visible" && Q();
        };
      Q();
      const Ol = window.setInterval(Q, 9e5);
      return (
        window.addEventListener("focus", Q),
        document.addEventListener("visibilitychange", bl),
        () => {
          ((Y = !0),
            window.clearInterval(Ol),
            window.removeEventListener("focus", Q),
            document.removeEventListener("visibilitychange", bl));
        }
      );
    }, []),
    w.useEffect(() => {
      const Y = localStorage.getItem("grandine-car");
      if (!Y) return;
      const Q = JSON.parse(Y);
      Pa(Q)
        .then(b)
        .catch(() => {});
    }, []),
    w.useEffect(() => {
      !localStorage.getItem("grandine-phone-position") ||
        !j ||
        (L(!0),
        Tl("Uso l’ultima posizione salvata sul telefono…"),
        Promise.allSettled([Pa(j), ni(j)]).then((Q) => {
          (Q[0].status === "fulfilled" && Z(Q[0].value),
            Q[1].status === "fulfilled" ? (R(Q[1].value), al(0), I(!1)) : I(!0),
            Tl(
              "Posizione salvata ripristinata. Premi Aggiorna solo se ti sei spostato.",
            ),
            (Qt.current = j),
            (ca.current = Date.now()),
            Vl(Date.now() + 6e5),
            rt(600),
            L(!1));
        }));
    }, []),
    w.useEffect(() => {
      let Y = null,
        Q = !1;
      return (
        (async () => {
          try {
            if (!navigator.geolocation) return;
            let Ol = P;
            if (
              (navigator.permissions &&
                !Ol &&
                (Ol =
                  (await navigator.permissions.query({ name: "geolocation" }))
                    .state === "granted"),
              !Ol || Q)
            )
              return;
            Y = navigator.geolocation.watchPosition(
              async (fa) => {
                if (Q) return;
                const mt = {
                    lat: fa.coords.latitude,
                    lon: fa.coords.longitude,
                  },
                  Vn = zt.current;
                (!Vn || Gd(Vn, mt) >= 0.05) &&
                  ((zt.current = mt),
                  d(mt),
                  localStorage.setItem(
                    "grandine-phone-position",
                    JSON.stringify(mt),
                  ));
                const Ha = !Qt.current || Gd(Qt.current, mt) >= 1,
                  te = Date.now() - ca.current >= 6e5;
                if (!Ha && !te) return;
                (L(!0),
                  Tl(
                    Ha
                      ? "Spostamento rilevato: aggiorno radar e rischio…"
                      : "Aggiornamento automatico della zona…",
                  ));
                const Et = await Promise.allSettled([Pa(mt), ni(mt)]);
                (Et[0].status === "fulfilled" && Z(Et[0].value),
                  Et[1].status === "fulfilled"
                    ? (R(Et[1].value), al(0), I(!1))
                    : I(!0),
                  (Qt.current = mt),
                  (ca.current = Date.now()),
                  Tl("Posizione del telefono aggiornata automaticamente."),
                  Vl(Date.now() + 6e5),
                  rt(600),
                  L(!1));
              },
              () => {},
              { enableHighAccuracy: !0, maximumAge: 6e4, timeout: 2e4 },
            );
          } catch {}
        })(),
        () => {
          ((Q = !0), Y !== null && navigator.geolocation.clearWatch(Y));
        }
      );
    }, [P]),
    w.useEffect(() => {
      if (D.length < 2 || !Sl) return;
      const Y = D[J],
        Q = Y && Kl?.peakTime === Y.time,
        bl = window.setTimeout(
          () => al((Ol) => (Ol + 1) % D.length),
          Q ? 2800 : 1100,
        );
      return () => window.clearTimeout(bl);
    }, [D, J, Sl, Kl?.peakTime]),
    w.useEffect(() => {
      let Y = !1;
      if (!j || D.length < 2) {
        ia(null);
        return;
      }
      return (
        ia(null),
        Ld(D, j).then((Q) => {
          Y || ia(Q);
        }),
        () => {
          Y = !0;
        }
      );
    }, [D, j?.lat, j?.lon]),
    w.useEffect(() => {
      let Y = !1;
      if (!x || D.length < 2) {
        le(null);
        return;
      }
      return (
        le(null),
        Ld(D, x).then((Q) => {
          Y || le(Q);
        }),
        () => {
          Y = !0;
        }
      );
    }, [D, x?.lat, x?.lon]),
    w.useEffect(() => {
      if (!j || !et) return;
      const Y = window.setInterval(() => {
        const Q = Math.ceil((et - Date.now()) / 1e3);
        Q <= 0
          ? (Pa(j)
              .then(Z)
              .then(() => Tl("Aggiornamento automatico completato."))
              .catch(() => Tl("Aggiornamento automatico non riuscito.")),
            ni(j)
              .then((bl) => {
                (R(bl), al(0), I(!1));
              })
              .catch(() => I(!0)),
            x &&
              Pa(x)
                .then(b)
                .catch(() => {}),
            Vl(Date.now() + 6e5),
            rt(600))
          : rt(Q);
      }, 1e3);
      return () => window.clearInterval(Y);
    }, [j, x, et]));
  const Qe = () => {
      (L(!0),
        Tl("Rilevamento della posizione…"),
        navigator.geolocation.getCurrentPosition(
          async (Y) => {
            const Q = { lat: Y.coords.latitude, lon: Y.coords.longitude };
            ((zt.current = Q),
              d(Q),
              localStorage.setItem(
                "grandine-phone-position",
                JSON.stringify(Q),
              ));
            const bl = await Promise.allSettled([Pa(Q), ni(Q)]);
            (bl[0].status === "fulfilled"
              ? (Z(bl[0].value),
                Tl(
                  "Controllo aggiornato. Il telefono verrà seguito durante gli spostamenti.",
                ))
              : Tl("Posizione trovata, dati meteo non disponibili."),
              bl[1].status === "fulfilled"
                ? (R(bl[1].value), al(0), I(!1))
                : I(!0),
              (Qt.current = Q),
              (ca.current = Date.now()),
              ol(!0),
              Vl(Date.now() + 6e5),
              rt(600),
              L(!1));
          },
          () => {
            (Tl("Permesso posizione non concesso."), L(!1));
          },
          { enableHighAccuracy: !0, timeout: 12e3 },
        ));
    },
    Xn = async () => {
      if (!j) {
        Tl("Prima rileva la posizione.");
        return;
      }
      (C(j),
        localStorage.setItem("grandine-car", JSON.stringify(j)),
        b(N),
        Tl("Posizione auto salvata su questo telefono."));
    },
    Xe = () => {
      (K(x ?? j ?? { lat: 44.4949, lon: 11.3426 }), il(!0));
    },
    Ze = () => {
      (localStorage.setItem("grandine-start-guide-v1", "done"), r(!1), Qe());
    },
    Ve = () => {
      (localStorage.setItem("grandine-start-guide-v1", "done"), r(!1));
    },
    ui = () => {
      (localStorage.setItem("grandine-release-seen", Nf), U(!1));
    },
    ii = async () => {
      if (hl) {
        (C(hl),
          localStorage.setItem("grandine-car", JSON.stringify(hl)),
          il(!1),
          Tl("Posizione auto scelta sulla mappa e salvata."));
        try {
          b(await Pa(hl));
        } catch {}
      }
    },
    $l = (Y) => Y.lat.toFixed(4) + ", " + Y.lon.toFixed(4),
    qt = D[J] ?? null,
    Ra = (Y) =>
      Y
        ? new Date(Y.time * 1e3).toLocaleTimeString("it-IT", {
            hour: "2-digit",
            minute: "2-digit",
          })
        : "--:--",
    Ke = D.length > 1 ? (J / (D.length - 1)) * 100 : 0,
    Ca = !!(
      qt &&
      Kl?.peakTime === qt.time &&
      Kl.direction !== "non definita" &&
      Kl.trend !== "non determinabile" &&
      Kl.angle !== null
    ),
    Xa = !!(
      qt &&
      Kl?.peakTime === qt.time &&
      Kl.echoX !== null &&
      Kl.echoY !== null
    ),
    Je =
      Kl?.target === "telefono"
        ? "danger"
        : Kl?.trend === "in avvicinamento"
          ? "approaching"
        : "observed",
    Zn =
      Kl?.target === "telefono"
        ? "Possibile traiettoria verso il telefono"
        : Kl?.target === "passaggio vicino"
          ? "Possibile passaggio vicino al telefono"
        : Kl?.trend === "in avvicinamento"
          ? "Fenomeno in avvicinamento"
          : `Movimento verso ${Kl?.direction ?? "direzione non definita"}`,
    Pn =
      Kl?.target === "telefono"
        ? "OBIETTIVO STIMATO: ZONA DEL TELEFONO"
        : Kl?.target === "passaggio vicino"
          ? "OBIETTIVO: PASSAGGIO VICINO, NON DIRETTO"
        : Kl?.target === "altra zona" && Kl?.direction !== "non definita"
          ? `OBIETTIVO STIMATO: ALTRA ZONA VERSO ${Kl.direction}`
          : Kl?.trend === "quasi stabile"
            ? "OBIETTIVO: NESSUNO, FENOMENO QUASI STABILE"
            : "OBIETTIVO: NON ANCORA DETERMINABILE",
    Za = { assente: 0, debole: 1, moderata: 2, forte: 3, "molto forte": 4 },
    el = (Y, Q) => {
      if (!Y) return -1;
      const bl = Za[Y.intensity] ?? 0;
      return (
        (Y.target === "telefono" ? 100 : 0) +
        (Y.target === "passaggio vicino" ? 65 : 0) +
        (Y.trend === "in avvicinamento" ? 35 : 0) +
        bl * 12 -
        (Y.distance ?? 150) / 100 +
        (Q === "auto" ? 0.1 : 0)
      );
    },
    Vr = [
      { analysis: Kl, location: "telefono", label: "Telefono" },
      ...(x ? [{ analysis: Le, location: "auto", label: "Auto parcheggiata" }] : []),
    ].sort((Y, Q) => el(Q.analysis, Q.location) - el(Y.analysis, Y.location))[0] ?? {
      analysis: Kl,
      location: "telefono",
      label: "Telefono",
    },
    Jr = Vr.analysis,
    yr = Jr?.target === "telefono",
    Or = yr && ((Za[Jr?.intensity] ?? 0) >= 3),
    ri = !Jr || Jr.distance === null
      ? {
          tone: "clear",
          label: "RADAR NON CONFERMA",
          text: "Nessun eco significativo osservato entro 150 km: resta valida la stima dei modelli.",
        }
      : Or
        ? {
            tone: "danger",
            label: "RISCHIO AUMENTATO DAL RADAR",
            text: `Eco ${Jr.intensity} diretto verso ${Vr.location === "auto" ? "l’auto parcheggiata" : "il telefono"}: situazione più importante di quella indicata dai soli modelli.`,
          }
        : Jr.trend === "in avvicinamento"
          ? {
              tone: "approaching",
              label: "RADAR DA SORVEGLIARE",
              text: `Eco ${Jr.intensity} in avvicinamento a ${Jr.distance} km, ma senza traiettoria diretta confermata.`,
            }
          : {
              tone: "observed",
              label: "ECO OSSERVATO · RISCHIO INVARIATO",
              text: `Eco ${Jr.intensity} a ${Jr.distance} km: al momento non aumenta il rischio previsto per telefono o auto.`,
            },
    sr = (Y, Q) =>
      Y?.target === "telefono"
        ? Q === "auto"
          ? "Zona dell’auto parcheggiata"
          : "Zona del telefono"
        : Y?.target === "passaggio vicino"
          ? "Passaggio vicino"
          : Y?.target === "altra zona"
            ? "Altra zona"
            : "Da verificare",
    ci = async () => {
      dt
        ? (await dt.prompt(),
          (await dt.userChoice).outcome === "accepted" && sl(!0),
          tt(null))
        : _(!0);
    },
    fi = async () => {
      try {
        const registrations = navigator.serviceWorker
          ? await navigator.serviceWorker.getRegistrations()
          : [];
        const Q = await caches.keys();
        await Promise.all([
          ...Q.filter((bl) => bl.startsWith("grandine-alert-")).map((bl) =>
            caches.delete(bl),
          ),
          ...registrations.map((registration) => registration.unregister()),
        ]);
      } catch {}
      window.location.replace(`./?force-update=${Bl?.latest ?? Nf}&t=${Date.now()}`);
    },
    tl = (Y) => {
      const Q = Y.target;
      if (
        Q instanceof Element &&
        Q.closest(
          "button,input,.radarPlayback,.leaflet-container,.mapModal,.installModal,.startModal,.bottomNav",
        )
      ) {
        Zl.current = null;
        return;
      }
      const bl = Y.touches?.[0];
      bl && (Zl.current = { x: bl.clientX, y: bl.clientY, page: S });
    },
    nl = (Y) => {
      const Q = Zl.current,
        bl = Y.changedTouches?.[0];
      Zl.current = null;
      if (!Q || !bl) return;
      const Ol = bl.clientX - Q.x,
        fa = bl.clientY - Q.y;
      if (Math.abs(Ol) < 72 || Math.abs(Ol) < Math.abs(fa) * 1.35) return;
      const mt = Ol < 0 ? "risk" : "radar";
      mt !== Q.page && (M(mt), window.scrollTo({ top: 0, behavior: "smooth" }));
    },
    saveNotifyPref = (Y, Q) => {
      setNotifyPrefs((bl) => {
        const Ol = { ...bl, [Y]: Q };
        localStorage.setItem("grandine-notification-settings", JSON.stringify(Ol));
        return Ol;
      });
    },
    testNotification = async () => {
      if (!("Notification" in window) || !("serviceWorker" in navigator)) {
        setNotifyStatus("non supportate su questo avvio");
        return;
      }
      try {
        let Y = Notification.permission;
        Y === "default" && (Y = await Notification.requestPermission());
        if (Y !== "granted") {
          setNotifyStatus(Y === "denied" ? "bloccate nelle impostazioni" : "permesso non concesso");
          return;
        }
        const Q = await navigator.serviceWorker.ready;
        await Q.showNotification("Grandine Alert · Notifica di prova", {
          body: "Le notifiche sono attive. Gli avvisi reali verranno collegati nella fase successiva.",
          icon: "./icons/grandine-icon-192.png",
          badge: "./icons/grandine-icon-192.png",
          tag: "grandine-alert-test",
        });
        (saveNotifyPref("enabled", !0), setNotifyStatus("autorizzate · prova inviata"));
      } catch {
        setNotifyStatus("prova non riuscita");
      }
    };
  return f.jsxs("main", {
    onTouchStart: tl,
    onTouchEnd: nl,
    children: [
      f.jsxs("header", {
        children: [
          f.jsx("img", {
            className: "brandIcon",
            src: "./icons/app-icon.svg",
            alt: "Icona radar e grandine",
          }),
          f.jsxs("div", {
            children: [
              f.jsx("h1", { children: "Grandine Alert" }),
              f.jsx("small", { children: "APP METEO LOCALE · v1.1.24" }),
            ],
          }),
          f.jsx("button", {
            className: "settingsButton",
            onClick: () => setSettingsOpen(!0),
            "aria-label": "Impostazioni notifiche",
            children: "🔔",
          }),
          f.jsx("button", {
            className: "info",
            onClick: () => $(!0),
            "aria-label": "Come usare Radar e Rischio",
            children: "i",
          }),
        ],
      }),
      T &&
        f.jsxs("section", {
          className: "releaseNotice",
          children: [
            f.jsx("span", { children: "✓" }),
            f.jsxs("div", {
              children: [
                f.jsx("small", { children: "AGGIORNAMENTO COMPLETATO" }),
                f.jsx("strong", { children: "Grandine Alert 1.1.24" }),
                f.jsx("p", {
                  children:
                    "Cerchio e freccia ora coincidono con gli stessi pixel radar mostrati sulla cartina.",
                }),
              ],
            }),
            f.jsx("button", {
              onClick: ui,
              "aria-label": "Chiudi avviso aggiornamento",
              children: "×",
            }),
          ],
        }),
      Bl &&
        f.jsxs("section", {
          className: "updateNotice",
          children: [
            f.jsx("span", { children: "↻" }),
            f.jsxs("div", {
              children: [
                f.jsx("small", { children: "AGGIORNAMENTO DISPONIBILE" }),
                f.jsx("strong", { children: Bl.label }),
                f.jsx("p", { children: Bl.message }),
              ],
            }),
            f.jsx("button", { onClick: fi, children: "Aggiorna ora" }),
          ],
        }),
      !V &&
        f.jsxs("section", {
          className: "installCard installCardTop",
          children: [
            f.jsx("img", {
              src: "./icons/app-icon.svg",
              alt: "Icona Grandine Alert: nuvola, grandine e automobile",
            }),
            f.jsxs("div", {
              children: [
                f.jsx("small", { children: "INSTALLA GRANDINE ALERT" }),
                f.jsx("h3", { children: "Portala sulla schermata Home" }),
                f.jsxs("p", {
                  children: [
                    f.jsx("b", { children: "Su iPhone:" }),
                    " apri con Safari, tocca ",
                    f.jsx("b", { children: "Condividi □↑" }),
                    " e scegli ",
                    f.jsx("b", { children: "Aggiungi alla schermata Home" }),
                    ".",
                  ],
                }),
                f.jsx("button", {
                  onClick: ci,
                  children: "Mostra come installare",
                }),
              ],
            }),
          ],
        }),
      S === "radar"
        ? f.jsxs("div", {
            className: "appPage radarPage",
            children: [
              f.jsxs("section", {
                className: "hero",
                children: [
                  f.jsxs("div", {
                    className: "heroCopy",
                    children: [
                      f.jsxs("span", {
                        className: "live",
                        children: [
                          "● ",
                          qt
                            ? Sl
                              ? "RADAR ANIMATO"
                              : "RADAR IN PAUSA"
                            : "CONTROLLO POSIZIONE",
                        ],
                      }),
                      f.jsxs("h2", {
                        children: [
                          "Il cielo cambia. ",
                          f.jsx("em", { children: "Tu puoi anticiparlo." }),
                        ],
                      }),
                      f.jsx("p", {
                        children: j
                          ? "Ultima ora di precipitazioni entro 150 km dal telefono."
                          : "Attiva la posizione per vedere le precipitazioni intorno a te.",
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "radar " + (qt ? "active" : "idle"),
                    children: [
                      j
                        ? f.jsx(E0, {
                            point: j,
                            frame: qt,
                            analysis: Kl,
                            tone: Je,
                          })
                        : f.jsx("div", { className: "radarImage" }),
                      f.jsx("div", { className: "labelSweep" }),
                      f.jsx("div", { className: "sweep" }),
                      f.jsx("div", { className: "cross" }),
                      f.jsx("span", { className: "north", children: "N" }),
                      f.jsx("b", {
                        className: "centerDot",
                        "aria-label": "Posizione del telefono",
                      }),
                    ],
                  }),
                  qt
                    ? f.jsxs("div", {
                        className: "radarPlayback",
                        children: [
                          f.jsxs("div", {
                            className: "playbackTimes",
                            children: [
                              f.jsx("span", { children: Ra(D[0]) }),
                              f.jsxs("b", {
                                children: [
                                  f.jsx("button", {
                                    className: "playbackToggle",
                                    onClick: () => pl((Y) => !Y),
                                    "aria-label": Sl
                                      ? "Metti in pausa"
                                      : "Avvia animazione",
                                    children: Sl ? "⏸" : "▶",
                                  }),
                                  " ",
                                  Ra(qt),
                                ],
                              }),
                              f.jsx("span", { children: Ra(D.at(-1) ?? null) }),
                            ],
                          }),
                          f.jsxs("div", {
                            className: "playbackTrack",
                            children: [
                              f.jsx("i", { style: { width: Ke + "%" } }),
                              f.jsx("em", { style: { left: Ke + "%" } }),
                              f.jsx("input", {
                                type: "range",
                                min: "0",
                                max: Math.max(0, D.length - 1),
                                step: "1",
                                value: J,
                                onPointerDown: () => pl(!1),
                                onChange: (Y) => {
                                  (pl(!1), al(Number(Y.target.value)));
                                },
                                "aria-label":
                                  "Scegli manualmente l'ora del radar",
                              }),
                            ],
                          }),
                          f.jsxs("small", {
                            children: [
                              "Trascina per scegliere l’ora ",
                              f.jsx("strong", {
                                children: Sl ? "automatico" : "in pausa",
                              }),
                            ],
                          }),
                        ],
                      })
                    : f.jsx("div", {
                        className: "radarStatus",
                        children: cl
                          ? "Radar momentaneamente non disponibile"
                          : "In attesa del GPS",
                      }),
                ],
              }),
              f.jsx(Qd, {
                title: "Fenomeni intorno al telefono",
                analysis: Kl,
              }),
              f.jsxs("section", {
                className: "radarGuide",
                children: [
                  f.jsxs("div", {
                    className: "guideTitle",
                    children: [
                      f.jsx("span", { children: "◉" }),
                      f.jsxs("div", {
                        children: [
                          f.jsx("small", { children: "COME LEGGERE IL RADAR" }),
                          f.jsx("h3", { children: "Intensità e spostamento" }),
                        ],
                      }),
                    ],
                  }),
                  f.jsx("p", {
                    children:
                      "Il punto rosso è il telefono. I cerchi geografici indicano distanze reali di 50, 100 e 150 km. L’animazione mostra gli ultimi 50 minuti: sul fotogramma di massima visibilità compare la direzione stimata.",
                  }),
                  f.jsxs("div", {
                    className: "radarLegend",
                    children: [
                      f.jsxs("span", {
                        children: [f.jsx("i", { className: "weak" }), "Debole"],
                      }),
                      f.jsxs("span", {
                        children: [
                          f.jsx("i", { className: "moderate" }),
                          "Moderata",
                        ],
                      }),
                      f.jsxs("span", {
                        children: [
                          f.jsx("i", { className: "strong" }),
                          "Forte",
                        ],
                      }),
                      f.jsxs("span", {
                        children: [
                          f.jsx("i", { className: "extreme" }),
                          "Molto forte",
                        ],
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "arrowLegend",
                    children: [
                      f.jsx("h4", { children: "Come leggere le frecce" }),
                      f.jsxs("span", {
                        children: [
                          f.jsx("i", {
                            className: "arrowWhite",
                            children: "→",
                          }),
                          f.jsx("b", { children: "Bianca" }),
                          " movimento osservato",
                        ],
                      }),
                      f.jsxs("span", {
                        children: [
                          f.jsx("i", {
                            className: "arrowYellow",
                            children: "→",
                          }),
                          f.jsx("b", { children: "Gialla" }),
                          " fenomeno in avvicinamento",
                        ],
                      }),
                      f.jsxs("span", {
                        children: [
                          f.jsx("i", { className: "arrowRed", children: "→" }),
                          f.jsx("b", { children: "Rossa" }),
                          " possibile traiettoria verso telefono o auto",
                        ],
                      }),
                      f.jsxs("span", {
                        children: [
                          f.jsx("i", {
                            className: "arrowDashed",
                            children: "⇢",
                          }),
                          f.jsx("b", { children: "Tratteggiata" }),
                          " direzione poco affidabile",
                        ],
                      }),
                      f.jsx("small", {
                        children:
                          "Nessuna freccia significa che il movimento non è abbastanza chiaro. La freccia è una stima ottenuta confrontando le immagini radar precedenti.",
                      }),
                    ],
                  }),
                  f.jsxs("p", {
                    className: "guideNote",
                    children: [
                      f.jsx("b", { children: "Grandine:" }),
                      " rosso o viola indicano una cella intensa, ma non confermano da soli la grandine.",
                    ],
                  }),
                ],
              }),
              !j &&
                f.jsx("button", {
                  className: "primary radarLocate",
                  onClick: Qe,
                  disabled: fl,
                  children: fl
                    ? "Controllo in corso…"
                    : "Attiva posizione e radar",
                }),
            ],
          })
        : f.jsxs("div", {
            className: "appPage riskPage",
            children: [
              f.jsxs("div", {
                className: "pageHeading",
                children: [
                  f.jsx("small", { children: "VALUTAZIONE METEO LOCALE" }),
                  f.jsx("h2", { children: "Valutazione grandine" }),
                  f.jsx("p", {
                    children:
                      "Previsione dei modelli e osservazione radar, mostrate separatamente.",
                  }),
                ],
              }),
              f.jsxs("section", {
                className: "risk " + (N?.level ?? "waiting"),
                children: [
                  N &&
                    f.jsxs("div", {
                      className: "riskGauge",
                      "aria-label": `Indice previsto dai modelli ${N.score} su 100`,
                      children: [
                        f.jsx("div", {
                          className: "gaugeArc",
                          children: f.jsx("i", {
                            style: {
                              transform: `rotate(${180 + N.score * 1.8}deg)`,
                            },
                          }),
                        }),
                        f.jsxs("div", {
                          className: "gaugeValue",
                          children: [
                            f.jsx("b", { children: N.score }),
                            f.jsx("span", { children: "su 100" }),
                          ],
                        }),
                        f.jsxs("div", {
                          className: "gaugeLabels",
                          children: [
                            f.jsx("span", { children: "BASSO" }),
                            f.jsx("span", { "aria-hidden": "true" }),
                            f.jsx("span", { children: "ALTO" }),
                          ],
                        }),
                      ],
                    }),
                  f.jsxs("div", {
                    className: "riskTop",
                    children: [
                      f.jsx("div", {
                        className: "orb",
                        children: N ? (N.level === "basso" ? "✓" : "!") : "⌖",
                      }),
                      f.jsxs("div", {
                        children: [
                          f.jsx("small", {
                            children: N ? N.level.toUpperCase() : "IN ATTESA",
                          }),
                          f.jsx("h3", {
                            children: N?.title ?? "Localizzazione necessaria",
                          }),
                        ],
                      }),
                    ],
                  }),
                  f.jsx("p", {
                    children:
                      N?.detail ??
                      "Autorizza la posizione per eseguire il primo controllo.",
                  }),
                  N &&
                    f.jsxs("section", {
                      className: `combinedRisk ${ri.tone}`,
                      children: [
                        f.jsxs("div", {
                          children: [
                            f.jsx("small", { children: "VALUTAZIONE COMPLESSIVA" }),
                            f.jsx("strong", { children: ri.label }),
                          ],
                        }),
                        f.jsx("p", { children: ri.text }),
                        Jr?.distance !== null && Jr &&
                          f.jsxs("div", {
                            className: "combinedFacts",
                            children: [
                              f.jsx("b", { children: Jr.intensity }),
                              f.jsx("b", { children: Jr.distance + " km" }),
                              f.jsx("b", { children: Jr.trend }),
                              f.jsx("b", { children: sr(Jr, Vr.location) }),
                            ],
                          }),
                        f.jsx("small", {
                          className: "combinedDisclaimer",
                          children: "Il radar rileva precipitazioni e movimento: non conferma da solo la presenza di grandine.",
                        }),
                      ],
                    }),
                  N &&
                    f.jsxs("section", {
                      className: `riskRadarSummary ${
                        Or
                          ? "danger"
                          : yr || Jr?.trend === "in avvicinamento"
                            ? "approaching"
                            : Jr?.distance === null
                              ? "clear"
                              : "observed"
                      }`,
                      children: [
                        f.jsxs("div", {
                          className: "riskRadarSummaryHead",
                          children: [
                            f.jsxs("div", {
                              children: [
                                f.jsx("small", { children: `RADAR OSSERVATO · ${Vr.label.toUpperCase()}` }),
                                f.jsx("strong", {
                                  children: Jr
                                    ? Jr.distance === null
                                      ? "Nessun eco significativo"
                                      : yr
                                        ? Vr.location === "auto"
                                          ? "Possibile traiettoria verso l’auto parcheggiata"
                                          : "Possibile traiettoria verso il telefono"
                                        : Jr.trend === "in avvicinamento"
                                          ? "Fenomeno in avvicinamento"
                                          : "Fenomeno presente nella zona"
                                    : "Analisi radar in corso…",
                                }),
                              ],
                            }),
                            f.jsx("span", {
                              children: Jr
                                ? Jr.intensity.toUpperCase()
                                : "IN ANALISI",
                            }),
                          ],
                        }),
                        Jr?.distance !== null && Jr
                          ? f.jsxs("div", {
                              className: "riskRadarFacts",
                              children: [
                                f.jsxs("b", {
                                  children: [
                                    Jr.distance + " km",
                                    f.jsx("small", { children: "distanza eco" }),
                                  ],
                                }),
                                f.jsxs("b", {
                                  children: [
                                    Jr.trend,
                                    f.jsx("small", { children: "tendenza" }),
                                  ],
                                }),
                                f.jsxs("b", {
                                  children: [
                                    sr(Jr, Vr.location),
                                    f.jsx("small", { children: "obiettivo stimato" }),
                                  ],
                                }),
                              ],
                            })
                          : f.jsx("p", {
                              children: Jr
                                ? "Il radar non rileva precipitazioni significative entro 150 km."
                                : "Sto confrontando le ultime immagini disponibili.",
                            }),
                        x &&
                          f.jsxs("div", {
                            className: "radarMonitoredLocations",
                            children: [
                              f.jsxs("span", { children: ["Telefono: ", Kl?.distance === null || !Kl ? "nessun eco" : `${Kl.intensity}, ${sr(Kl, "telefono")}`] }),
                              f.jsxs("span", { children: ["Auto: ", Le?.distance === null || !Le ? "nessun eco" : `${Le.intensity}, ${sr(Le, "auto")}`] }),
                            ],
                          }),
                        Or &&
                          f.jsx("p", {
                            className: "radarPriorityWarning",
                            children: `⚠ Eco ${Jr.intensity} con traiettoria stimata verso ${Vr.location === "auto" ? "l’auto parcheggiata" : "il telefono"}. Controlla la pagina Radar: è una stima, non una conferma di grandine.`,
                          }),
                      ],
                    }),
                  N &&
                    f.jsxs(f.Fragment, {
                      children: [
                        f.jsxs("div", {
                          className: "metrics",
                          children: [
                            f.jsxs("b", {
                              children: [
                                Math.round(N.temp),
                                "°",
                                f.jsx("small", { children: "Temperatura" }),
                              ],
                            }),
                            f.jsxs("b", {
                              children: [
                                N.rain,
                                "%",
                                f.jsx("small", { children: "Pioggia" }),
                              ],
                            }),
                            f.jsxs("b", {
                              children: [
                                Math.round(N.gust),
                                f.jsx("small", { children: "Raffiche km/h" }),
                              ],
                            }),
                          ],
                        }),
                        f.jsxs("div", {
                          className: "trend",
                          children: [
                            f.jsxs("div", {
                              className: "trendTitle",
                              children: [
                                f.jsx("b", { children: "Prossime 4 ore" }),
                                f.jsx("span", {
                                  children: "indice temporalesco",
                                }),
                              ],
                            }),
                            f.jsx(A0, { items: N.trend }),
                          ],
                        }),
                        f.jsxs("div", {
                          className: "reliability",
                          children: [
                            f.jsxs("div", {
                              className: "reliabilityHead",
                              children: [
                                f.jsxs("div", {
                                  children: [
                                    f.jsx("small", {
                                      children: "AFFIDABILITÀ DELLA STIMA",
                                    }),
                                    f.jsxs("b", {
                                      children: [N.confidence, "/100"],
                                    }),
                                  ],
                                }),
                                f.jsxs("span", {
                                  children: [
                                    N.agreement,
                                    " modelli su 3 concordano",
                                  ],
                                }),
                              ],
                            }),
                            f.jsx("div", {
                              className: "confidenceBar",
                              children: f.jsx("i", {
                                style: { width: N.confidence + "%" },
                              }),
                            }),
                            f.jsx("div", {
                              className: "modelList",
                              children: N.models.map((Y) =>
                                f.jsxs(
                                  "div",
                                  {
                                    children: [
                                      f.jsx("strong", { children: Y.name }),
                                      f.jsx("span", {
                                        className: Y.level,
                                        children: Y.score,
                                      }),
                                    ],
                                  },
                                  Y.name,
                                ),
                              ),
                            }),
                            f.jsx("p", {
                              children:
                                "Confronto modelli attivo · radar mostrato separatamente, non ancora incluso nel punteggio",
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
              f.jsxs("section", {
                className: "position",
                children: [
                  f.jsx("div", { className: "pin", children: "⌖" }),
                  f.jsxs("div", {
                    children: [
                      f.jsx("small", { children: "POSIZIONE DEL TELEFONO" }),
                      f.jsx("strong", {
                        children: j ? $l(j) : "Non ancora rilevata",
                      }),
                      f.jsx("span", { children: Ml }),
                    ],
                  }),
                  N && f.jsx("i", { children: N.score }),
                ],
              }),
              f.jsx("button", {
                className: "primary",
                onClick: Qe,
                disabled: fl,
                children: fl
                  ? "Controllo in corso…"
                  : j
                    ? "Aggiorna posizione e rischio"
                    : "Usa la mia posizione",
              }),
              j &&
                f.jsxs("div", {
                  className: "autoRefresh",
                  children: [
                    f.jsx("span", { children: "↻ Aggiornamento automatico" }),
                    f.jsxs("b", {
                      children: [
                        String(Math.floor(Xl / 60)).padStart(2, "0"),
                        ":",
                        String(Xl % 60).padStart(2, "0"),
                      ],
                    }),
                  ],
                }),
              f.jsxs("section", {
                className: "car",
                children: [
                  f.jsx("div", {
                    className: "carPic",
                    children: f.jsx("span", { children: "▰" }),
                  }),
                  f.jsxs("div", {
                    children: [
                      f.jsx("small", { children: "AUTO PARCHEGGIATA" }),
                      f.jsx("h3", {
                        children: x
                          ? "Posizione auto salvata"
                          : "La tua auto è altrove?",
                      }),
                      f.jsx("p", {
                        children: x
                          ? $l(x) + " · " + (O?.title ?? "da controllare")
                          : "Salva il punto in cui ti trovi oppure sceglilo direttamente sulla cartina.",
                      }),
                      f.jsxs("div", {
                        className: "carActions",
                        children: [
                          f.jsx("button", {
                            onClick: Xn,
                            children: x
                              ? "Salva auto qui"
                              : "Usa posizione attuale",
                          }),
                          f.jsx("button", {
                            className: "mapButton",
                            onClick: Xe,
                            children: "⌖ Scegli sulla mappa",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
      f.jsxs("footer", {
        children: [
          f.jsxs("div", {
            className: "signature",
            children: [
              f.jsx("img", {
                className: "gfMonogram",
                src: "./assets/gf-logo.png",
                alt: "Monogramma GF",
              }),
              f.jsxs("div", {
                className: "signatureText",
                children: [
                  f.jsx("strong", { children: "Grandine Alert" }),
              f.jsx("span", { children: "Versione 1.1.24" }),
                  f.jsx("small", { children: "© 2026 Gabriele Facchini" }),
                ],
              }),
            ],
          }),
          f.jsx("p", {
            children:
              "Cartografia © OpenStreetMap · radar RainViewer · previsioni Open-Meteo. Il rischio è una stima e non garantisce presenza o assenza di grandine.",
          }),
        ],
      }),
      f.jsxs("nav", {
        className: "bottomNav",
        "aria-label": "Navigazione principale",
        children: [
          f.jsxs("button", {
            className: S === "radar" ? "active" : "",
            onClick: () => {
              (M("radar"), window.scrollTo({ top: 0, behavior: "smooth" }));
            },
            children: [f.jsx("span", { children: "◉" }), "Radar"],
          }),
          f.jsxs("button", {
            className: S === "risk" ? "active" : "",
            onClick: () => {
              (M("risk"), window.scrollTo({ top: 0, behavior: "smooth" }));
            },
            children: [f.jsx("span", { children: "⚠" }), "Rischio"],
          }),
        ],
      }),
      jl &&
        hl &&
        f.jsx("div", {
          className: "mapModal",
          role: "dialog",
          "aria-modal": "true",
          "aria-label": "Scegli posizione auto",
          children: f.jsxs("div", {
            className: "mapSheet",
            children: [
              f.jsxs("div", {
                className: "mapSheetHead",
                children: [
                  f.jsxs("div", {
                    children: [
                      f.jsx("small", { children: "POSIZIONE AUTO" }),
                      f.jsx("h2", { children: "Tocca il punto sulla mappa" }),
                    ],
                  }),
                  f.jsx("button", {
                    onClick: () => il(!1),
                    "aria-label": "Chiudi",
                    children: "×",
                  }),
                ],
              }),
              f.jsx(T0, { center: x ?? j ?? hl, onSelect: K }),
              f.jsxs("div", {
                className: "selectedCoords",
                children: [
                  f.jsx("span", { children: "⌖ Punto selezionato" }),
                  f.jsx("b", { children: $l(hl) }),
                ],
              }),
              f.jsx("button", {
                className: "confirmMap",
                onClick: ii,
                children: "Conferma posizione auto",
              }),
            ],
          }),
        }),
      z &&
        f.jsx("div", {
          className: "installModal",
          role: "dialog",
          "aria-modal": "true",
          "aria-label": "Installa Grandine Alert",
          children: f.jsxs("div", {
            className: "installSheet",
            children: [
              f.jsx("button", {
                className: "installClose",
                onClick: () => _(!1),
                "aria-label": "Chiudi",
                children: "×",
              }),
              f.jsx("img", { src: "./icons/app-icon.svg", alt: "" }),
              f.jsx("small", { children: "INSTALLAZIONE SU IPHONE" }),
              f.jsx("h2", { children: "Portala sulla schermata Home" }),
              f.jsxs("ol", {
                children: [
                  f.jsxs("li", {
                    children: [
                      "Apri questa pagina con ",
                      f.jsx("b", { children: "Safari" }),
                      ".",
                    ],
                  }),
                  f.jsxs("li", {
                    children: [
                      "Tocca il pulsante ",
                      f.jsx("b", { children: "Condividi" }),
                      " □↑.",
                    ],
                  }),
                  f.jsxs("li", {
                    children: [
                      "Scegli ",
                      f.jsx("b", { children: "Aggiungi alla schermata Home" }),
                      ".",
                    ],
                  }),
                  f.jsxs("li", {
                    children: [
                      "Attiva ",
                      f.jsx("b", { children: "Apri come app web" }),
                      " e tocca Aggiungi.",
                    ],
                  }),
                ],
              }),
              f.jsx("button", {
                className: "installDone",
                onClick: () => _(!1),
                children: "Ho capito",
              }),
            ],
          }),
        }),
      settingsOpen &&
        f.jsx("div", {
          className: "startModal notificationModal",
          role: "dialog",
          "aria-modal": "true",
          "aria-label": "Impostazioni notifiche",
          children: f.jsxs("div", {
            className: "notificationSheet",
            children: [
              f.jsx("button", {
                className: "installClose",
                onClick: () => setSettingsOpen(!1),
                "aria-label": "Chiudi",
                children: "×",
              }),
              f.jsx("small", { children: "IMPOSTAZIONI" }),
              f.jsx("h2", { children: "Avvisi grandine" }),
              f.jsx("p", {
                className: "notificationIntro",
                children:
                  "Scegli quando desideri essere avvisato. Le preferenze restano salvate su questo telefono.",
              }),
              f.jsxs("label", {
                className: "notificationToggle mainToggle",
                children: [
                  f.jsxs("span", {
                    children: [
                      f.jsx("b", { children: "Notifiche" }),
                      f.jsx("small", { children: notifyStatus }),
                    ],
                  }),
                  f.jsx("input", {
                    type: "checkbox",
                    checked: notifyPrefs.enabled,
                    onChange: (Y) => saveNotifyPref("enabled", Y.target.checked),
                  }),
                ],
              }),
              f.jsx("h3", { children: "Posizioni controllate" }),
              f.jsxs("div", {
                className: "notificationChecks",
                children: [
                  f.jsxs("label", {
                    children: [
                      f.jsx("input", {
                        type: "checkbox",
                        checked: notifyPrefs.phone,
                        onChange: (Y) => saveNotifyPref("phone", Y.target.checked),
                      }),
                      f.jsx("span", { children: "Telefono" }),
                    ],
                  }),
                  f.jsxs("label", {
                    children: [
                      f.jsx("input", {
                        type: "checkbox",
                        checked: notifyPrefs.car,
                        onChange: (Y) => saveNotifyPref("car", Y.target.checked),
                      }),
                      f.jsx("span", { children: "Auto parcheggiata" }),
                    ],
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "notificationSelects",
                children: [
                  f.jsxs("label", {
                    children: [
                      f.jsx("span", { children: "Distanza di preavviso" }),
                      f.jsxs("select", {
                        value: notifyPrefs.distance,
                        onChange: (Y) => saveNotifyPref("distance", Y.target.value),
                        children: [
                          f.jsx("option", { value: "20", children: "20 km" }),
                          f.jsx("option", { value: "50", children: "50 km" }),
                          f.jsx("option", { value: "100", children: "100 km" }),
                          f.jsx("option", { value: "150", children: "150 km" }),
                        ],
                      }),
                    ],
                  }),
                  f.jsxs("label", {
                    children: [
                      f.jsx("span", { children: "Intensità minima" }),
                      f.jsxs("select", {
                        value: notifyPrefs.intensity,
                        onChange: (Y) => saveNotifyPref("intensity", Y.target.value),
                        children: [
                          f.jsx("option", { value: "moderata", children: "Moderata" }),
                          f.jsx("option", { value: "forte", children: "Forte" }),
                          f.jsx("option", { value: "molto forte", children: "Molto forte" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              f.jsxs("label", {
                className: "notificationToggle quietToggle",
                children: [
                  f.jsxs("span", {
                    children: [
                      f.jsx("b", { children: "Fascia silenziosa" }),
                      f.jsx("small", { children: "Sospende gli avvisi non urgenti" }),
                    ],
                  }),
                  f.jsx("input", {
                    type: "checkbox",
                    checked: notifyPrefs.quiet,
                    onChange: (Y) => saveNotifyPref("quiet", Y.target.checked),
                  }),
                ],
              }),
              notifyPrefs.quiet &&
                f.jsxs("div", {
                  className: "quietTimes",
                  children: [
                    f.jsxs("label", {
                      children: [
                        "Dalle",
                        f.jsx("input", {
                          type: "time",
                          value: notifyPrefs.quietFrom,
                          onChange: (Y) => saveNotifyPref("quietFrom", Y.target.value),
                        }),
                      ],
                    }),
                    f.jsxs("label", {
                      children: [
                        "Alle",
                        f.jsx("input", {
                          type: "time",
                          value: notifyPrefs.quietTo,
                          onChange: (Y) => saveNotifyPref("quietTo", Y.target.value),
                        }),
                      ],
                    }),
                  ],
                }),
              f.jsx("button", {
                className: "notificationTest",
                onClick: testNotification,
                children: "🔔 Prova notifica",
              }),
              f.jsx("p", {
                className: "notificationNote",
                children:
                  "Questa versione prova il permesso e salva le preferenze. Gli avvisi automatici ad app chiusa verranno attivati con il servizio online nella fase successiva.",
              }),
            ],
          }),
        }),
      q &&
        f.jsx("div", {
          className: "startModal",
          role: "dialog",
          "aria-modal": "true",
          "aria-label": "Spiegazione dei pulsanti Radar e Rischio",
          children: f.jsxs("div", {
            className: "startSheet navHelpSheet",
            children: [
              f.jsx("button", {
                className: "installClose",
                onClick: () => $(!1),
                "aria-label": "Chiudi",
                children: "×",
              }),
              f.jsx("small", { children: "COME USARE L’APP" }),
              f.jsx("h2", { children: "Radar e Rischio" }),
              f.jsx("p", {
                children:
                  "I due pulsanti in fondo mostrano informazioni diverse ma complementari.",
              }),
              f.jsxs("div", {
                className: "navExplain radarExplain",
                children: [
                  f.jsx("b", { children: "◉" }),
                  f.jsxs("span", {
                    children: [
                      f.jsx("strong", { children: "Radar" }),
                      f.jsx("small", {
                        children:
                          "Mostra sulla cartina dove stanno piovendo i temporali e come si sono spostati negli ultimi 50 minuti.",
                      }),
                    ],
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "navExplain riskExplain",
                children: [
                  f.jsx("b", { children: "⚠" }),
                  f.jsxs("span", {
                    children: [
                      f.jsx("strong", { children: "Rischio" }),
                      f.jsx("small", {
                        children:
                          "Stima la possibilità di grandine nella tua posizione durante le prossime quattro ore.",
                      }),
                    ],
                  }),
                ],
              }),
              f.jsx("p", {
                className: "navHelpNote",
                children:
                  "Il radar mostra ciò che sta accadendo; Rischio indica ciò che potrebbe accadere.",
              }),
              f.jsx("button", {
                className: "startNow",
                onClick: () => $(!1),
                children: "Ho capito",
              }),
            ],
          }),
        }),
      vl &&
        !j &&
        f.jsx("div", {
          className: "startModal",
          role: "dialog",
          "aria-modal": "true",
          "aria-label": "Come avviare Grandine Alert",
          children: f.jsxs("div", {
            className: "startSheet",
            children: [
              f.jsx("img", {
                src: "./icons/app-icon.svg",
                alt: "Nuvola con grandine sopra un’auto",
              }),
              f.jsx("small", { children: "PRIMO AVVIO" }),
              f.jsx("h2", { children: "Attiva la tua posizione" }),
              f.jsx("p", {
                children:
                  "Per mostrare radar e rischio grandine nella tua zona, Grandine Alert deve conoscere la posizione del telefono.",
              }),
              f.jsxs("div", {
                className: "startStep",
                children: [
                  f.jsx("b", { children: "1" }),
                  f.jsxs("span", {
                    children: [
                      "Tocca il pulsante ",
                      f.jsx("strong", { children: "Attiva posizione e radar" }),
                      ".",
                    ],
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "startStep",
                children: [
                  f.jsx("b", { children: "2" }),
                  f.jsxs("span", {
                    children: [
                      "Quando l’iPhone lo richiede, scegli ",
                      f.jsx("strong", { children: "Consenti" }),
                      ".",
                    ],
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "startTabs",
                children: [
                  f.jsxs("span", {
                    children: [
                      f.jsx("b", { children: "◉ Radar" }),
                      " temporali in atto",
                    ],
                  }),
                  f.jsxs("span", {
                    children: [
                      f.jsx("b", { children: "⚠ Rischio" }),
                      " previsione 4 ore",
                    ],
                  }),
                ],
              }),
              f.jsx("button", {
                className: "startNow",
                onClick: Ze,
                children: "⌖ Attiva posizione e radar",
              }),
              f.jsx("button", {
                className: "startLater",
                onClick: Ve,
                children: "Lo farò più tardi",
              }),
            ],
          }),
        }),
    ],
  });
}
m0.createRoot(document.getElementById("root")).render(
  f.jsx(u0.StrictMode, { children: f.jsx(x0, {}) }),
);
export { Xd as g };
