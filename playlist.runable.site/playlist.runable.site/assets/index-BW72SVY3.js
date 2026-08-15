function Wx(e, i) {
    for (var s = 0; s < i.length; s++) {
        const r = i[s];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const u in r)
                if (u !== "default" && !(u in e)) {
                    const c = Object.getOwnPropertyDescriptor(r, u);
                    c && Object.defineProperty(e, u, c.get ? c : {
                        enumerable: !0,
                        get: () => r[u]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload")) return;
    for (const u of document.querySelectorAll('link[rel="modulepreload"]')) r(u);
    new MutationObserver(u => {
        for (const c of u)
            if (c.type === "childList")
                for (const f of c.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && r(f)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function s(u) {
        const c = {};
        return u.integrity && (c.integrity = u.integrity), u.referrerPolicy && (c.referrerPolicy = u.referrerPolicy), u.crossOrigin === "use-credentials" ? c.credentials = "include" : u.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c
    }

    function r(u) {
        if (u.ep) return;
        u.ep = !0;
        const c = s(u);
        fetch(u.href, c)
    }
})();

function $x(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Bc = {
        exports: {}
    },
    ks = {};
var Ly;

function tT() {
    if (Ly) return ks;
    Ly = 1;
    var e = Symbol.for("react.transitional.element"),
        i = Symbol.for("react.fragment");

    function s(r, u, c) {
        var f = null;
        if (c !== void 0 && (f = "" + c), u.key !== void 0 && (f = "" + u.key), "key" in u) {
            c = {};
            for (var m in u) m !== "key" && (c[m] = u[m])
        } else c = u;
        return u = c.ref, {
            $$typeof: e,
            type: r,
            key: f,
            ref: u !== void 0 ? u : null,
            props: c
        }
    }
    return ks.Fragment = i, ks.jsx = s, ks.jsxs = s, ks
}
var By;

function eT() {
    return By || (By = 1, Bc.exports = tT()), Bc.exports
}
var x = eT(),
    Hc = {
        exports: {}
    },
    ct = {};
var Hy;

function nT() {
    if (Hy) return ct;
    Hy = 1;
    var e = Symbol.for("react.transitional.element"),
        i = Symbol.for("react.portal"),
        s = Symbol.for("react.fragment"),
        r = Symbol.for("react.strict_mode"),
        u = Symbol.for("react.profiler"),
        c = Symbol.for("react.consumer"),
        f = Symbol.for("react.context"),
        m = Symbol.for("react.forward_ref"),
        d = Symbol.for("react.suspense"),
        p = Symbol.for("react.memo"),
        y = Symbol.for("react.lazy"),
        v = Symbol.iterator;

    function S(E) {
        return E === null || typeof E != "object" ? null : (E = v && E[v] || E["@@iterator"], typeof E == "function" ? E : null)
    }
    var R = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        w = Object.assign,
        C = {};

    function D(E, G, F) {
        this.props = E, this.context = G, this.refs = C, this.updater = F || R
    }
    D.prototype.isReactComponent = {}, D.prototype.setState = function(E, G) {
        if (typeof E != "object" && typeof E != "function" && E != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, E, G, "setState")
    }, D.prototype.forceUpdate = function(E) {
        this.updater.enqueueForceUpdate(this, E, "forceUpdate")
    };

    function V() {}
    V.prototype = D.prototype;

    function K(E, G, F) {
        this.props = E, this.context = G, this.refs = C, this.updater = F || R
    }
    var B = K.prototype = new V;
    B.constructor = K, w(B, D.prototype), B.isPureReactComponent = !0;
    var q = Array.isArray,
        _ = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        },
        Q = Object.prototype.hasOwnProperty;

    function tt(E, G, F, Z, it, xt) {
        return F = xt.ref, {
            $$typeof: e,
            type: E,
            key: G,
            ref: F !== void 0 ? F : null,
            props: xt
        }
    }

    function Y(E, G) {
        return tt(E.type, G, void 0, void 0, void 0, E.props)
    }

    function et(E) {
        return typeof E == "object" && E !== null && E.$$typeof === e
    }

    function J(E) {
        var G = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + E.replace(/[=:]/g, function(F) {
            return G[F]
        })
    }
    var ot = /\/+/g;

    function ut(E, G) {
        return typeof E == "object" && E !== null && E.key != null ? J("" + E.key) : G.toString(36)
    }

    function bt() {}

    function gt(E) {
        switch (E.status) {
            case "fulfilled":
                return E.value;
            case "rejected":
                throw E.reason;
            default:
                switch (typeof E.status == "string" ? E.then(bt, bt) : (E.status = "pending", E.then(function(G) {
                    E.status === "pending" && (E.status = "fulfilled", E.value = G)
                }, function(G) {
                    E.status === "pending" && (E.status = "rejected", E.reason = G)
                })), E.status) {
                    case "fulfilled":
                        return E.value;
                    case "rejected":
                        throw E.reason
                }
        }
        throw E
    }

    function vt(E, G, F, Z, it) {
        var xt = typeof E;
        (xt === "undefined" || xt === "boolean") && (E = null);
        var lt = !1;
        if (E === null) lt = !0;
        else switch (xt) {
            case "bigint":
            case "string":
            case "number":
                lt = !0;
                break;
            case "object":
                switch (E.$$typeof) {
                    case e:
                    case i:
                        lt = !0;
                        break;
                    case y:
                        return lt = E._init, vt(lt(E._payload), G, F, Z, it)
                }
        }
        if (lt) return it = it(E), lt = Z === "" ? "." + ut(E, 0) : Z, q(it) ? (F = "", lt != null && (F = lt.replace(ot, "$&/") + "/"), vt(it, G, F, "", function(Rn) {
            return Rn
        })) : it != null && (et(it) && (it = Y(it, F + (it.key == null || E && E.key === it.key ? "" : ("" + it.key).replace(ot, "$&/") + "/") + lt)), G.push(it)), 1;
        lt = 0;
        var ve = Z === "" ? "." : Z + ":";
        if (q(E))
            for (var Ut = 0; Ut < E.length; Ut++) Z = E[Ut], xt = ve + ut(Z, Ut), lt += vt(Z, G, F, xt, it);
        else if (Ut = S(E), typeof Ut == "function")
            for (E = Ut.call(E), Ut = 0; !(Z = E.next()).done;) Z = Z.value, xt = ve + ut(Z, Ut++), lt += vt(Z, G, F, xt, it);
        else if (xt === "object") {
            if (typeof E.then == "function") return vt(gt(E), G, F, Z, it);
            throw G = String(E), Error("Objects are not valid as a React child (found: " + (G === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : G) + "). If you meant to render a collection of children, use an array instead.")
        }
        return lt
    }

    function z(E, G, F) {
        if (E == null) return E;
        var Z = [],
            it = 0;
        return vt(E, Z, "", "", function(xt) {
            return G.call(F, xt, it++)
        }), Z
    }

    function X(E) {
        if (E._status === -1) {
            var G = E._result;
            G = G(), G.then(function(F) {
                (E._status === 0 || E._status === -1) && (E._status = 1, E._result = F)
            }, function(F) {
                (E._status === 0 || E._status === -1) && (E._status = 2, E._result = F)
            }), E._status === -1 && (E._status = 0, E._result = G)
        }
        if (E._status === 1) return E._result.default;
        throw E._result
    }
    var I = typeof reportError == "function" ? reportError : function(E) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var G = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
                error: E
            });
            if (!window.dispatchEvent(G)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", E);
            return
        }
        console.error(E)
    };

    function ft() {}
    return ct.Children = {
        map: z,
        forEach: function(E, G, F) {
            z(E, function() {
                G.apply(this, arguments)
            }, F)
        },
        count: function(E) {
            var G = 0;
            return z(E, function() {
                G++
            }), G
        },
        toArray: function(E) {
            return z(E, function(G) {
                return G
            }) || []
        },
        only: function(E) {
            if (!et(E)) throw Error("React.Children.only expected to receive a single React element child.");
            return E
        }
    }, ct.Component = D, ct.Fragment = s, ct.Profiler = u, ct.PureComponent = K, ct.StrictMode = r, ct.Suspense = d, ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _, ct.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(E) {
            return _.H.useMemoCache(E)
        }
    }, ct.cache = function(E) {
        return function() {
            return E.apply(null, arguments)
        }
    }, ct.cloneElement = function(E, G, F) {
        if (E == null) throw Error("The argument must be a React element, but you passed " + E + ".");
        var Z = w({}, E.props),
            it = E.key,
            xt = void 0;
        if (G != null)
            for (lt in G.ref !== void 0 && (xt = void 0), G.key !== void 0 && (it = "" + G.key), G) !Q.call(G, lt) || lt === "key" || lt === "__self" || lt === "__source" || lt === "ref" && G.ref === void 0 || (Z[lt] = G[lt]);
        var lt = arguments.length - 2;
        if (lt === 1) Z.children = F;
        else if (1 < lt) {
            for (var ve = Array(lt), Ut = 0; Ut < lt; Ut++) ve[Ut] = arguments[Ut + 2];
            Z.children = ve
        }
        return tt(E.type, it, void 0, void 0, xt, Z)
    }, ct.createContext = function(E) {
        return E = {
            $$typeof: f,
            _currentValue: E,
            _currentValue2: E,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, E.Provider = E, E.Consumer = {
            $$typeof: c,
            _context: E
        }, E
    }, ct.createElement = function(E, G, F) {
        var Z, it = {},
            xt = null;
        if (G != null)
            for (Z in G.key !== void 0 && (xt = "" + G.key), G) Q.call(G, Z) && Z !== "key" && Z !== "__self" && Z !== "__source" && (it[Z] = G[Z]);
        var lt = arguments.length - 2;
        if (lt === 1) it.children = F;
        else if (1 < lt) {
            for (var ve = Array(lt), Ut = 0; Ut < lt; Ut++) ve[Ut] = arguments[Ut + 2];
            it.children = ve
        }
        if (E && E.defaultProps)
            for (Z in lt = E.defaultProps, lt) it[Z] === void 0 && (it[Z] = lt[Z]);
        return tt(E, xt, void 0, void 0, null, it)
    }, ct.createRef = function() {
        return {
            current: null
        }
    }, ct.forwardRef = function(E) {
        return {
            $$typeof: m,
            render: E
        }
    }, ct.isValidElement = et, ct.lazy = function(E) {
        return {
            $$typeof: y,
            _payload: {
                _status: -1,
                _result: E
            },
            _init: X
        }
    }, ct.memo = function(E, G) {
        return {
            $$typeof: p,
            type: E,
            compare: G === void 0 ? null : G
        }
    }, ct.startTransition = function(E) {
        var G = _.T,
            F = {};
        _.T = F;
        try {
            var Z = E(),
                it = _.S;
            it !== null && it(F, Z), typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(ft, I)
        } catch (xt) {
            I(xt)
        } finally {
            _.T = G
        }
    }, ct.unstable_useCacheRefresh = function() {
        return _.H.useCacheRefresh()
    }, ct.use = function(E) {
        return _.H.use(E)
    }, ct.useActionState = function(E, G, F) {
        return _.H.useActionState(E, G, F)
    }, ct.useCallback = function(E, G) {
        return _.H.useCallback(E, G)
    }, ct.useContext = function(E) {
        return _.H.useContext(E)
    }, ct.useDebugValue = function() {}, ct.useDeferredValue = function(E, G) {
        return _.H.useDeferredValue(E, G)
    }, ct.useEffect = function(E, G, F) {
        var Z = _.H;
        if (typeof F == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return Z.useEffect(E, G)
    }, ct.useId = function() {
        return _.H.useId()
    }, ct.useImperativeHandle = function(E, G, F) {
        return _.H.useImperativeHandle(E, G, F)
    }, ct.useInsertionEffect = function(E, G) {
        return _.H.useInsertionEffect(E, G)
    }, ct.useLayoutEffect = function(E, G) {
        return _.H.useLayoutEffect(E, G)
    }, ct.useMemo = function(E, G) {
        return _.H.useMemo(E, G)
    }, ct.useOptimistic = function(E, G) {
        return _.H.useOptimistic(E, G)
    }, ct.useReducer = function(E, G, F) {
        return _.H.useReducer(E, G, F)
    }, ct.useRef = function(E) {
        return _.H.useRef(E)
    }, ct.useState = function(E) {
        return _.H.useState(E)
    }, ct.useSyncExternalStore = function(E, G, F) {
        return _.H.useSyncExternalStore(E, G, F)
    }, ct.useTransition = function() {
        return _.H.useTransition()
    }, ct.version = "19.1.0", ct
}
var qy;

function ho() {
    return qy || (qy = 1, Hc.exports = nT()), Hc.exports
}
var k = ho();
const iT = $x(k),
    aT = Wx({
        __proto__: null,
        default: iT
    }, [k]);
var qc = {
        exports: {}
    },
    Vs = {},
    Pc = {
        exports: {}
    },
    Gc = {};
var Py;

function sT() {
    return Py || (Py = 1, (function(e) {
        function i(z, X) {
            var I = z.length;
            z.push(X);
            t: for (; 0 < I;) {
                var ft = I - 1 >>> 1,
                    E = z[ft];
                if (0 < u(E, X)) z[ft] = X, z[I] = E, I = ft;
                else break t
            }
        }

        function s(z) {
            return z.length === 0 ? null : z[0]
        }

        function r(z) {
            if (z.length === 0) return null;
            var X = z[0],
                I = z.pop();
            if (I !== X) {
                z[0] = I;
                t: for (var ft = 0, E = z.length, G = E >>> 1; ft < G;) {
                    var F = 2 * (ft + 1) - 1,
                        Z = z[F],
                        it = F + 1,
                        xt = z[it];
                    if (0 > u(Z, I)) it < E && 0 > u(xt, Z) ? (z[ft] = xt, z[it] = I, ft = it) : (z[ft] = Z, z[F] = I, ft = F);
                    else if (it < E && 0 > u(xt, I)) z[ft] = xt, z[it] = I, ft = it;
                    else break t
                }
            }
            return X
        }

        function u(z, X) {
            var I = z.sortIndex - X.sortIndex;
            return I !== 0 ? I : z.id - X.id
        }
        if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var c = performance;
            e.unstable_now = function() {
                return c.now()
            }
        } else {
            var f = Date,
                m = f.now();
            e.unstable_now = function() {
                return f.now() - m
            }
        }
        var d = [],
            p = [],
            y = 1,
            v = null,
            S = 3,
            R = !1,
            w = !1,
            C = !1,
            D = !1,
            V = typeof setTimeout == "function" ? setTimeout : null,
            K = typeof clearTimeout == "function" ? clearTimeout : null,
            B = typeof setImmediate < "u" ? setImmediate : null;

        function q(z) {
            for (var X = s(p); X !== null;) {
                if (X.callback === null) r(p);
                else if (X.startTime <= z) r(p), X.sortIndex = X.expirationTime, i(d, X);
                else break;
                X = s(p)
            }
        }

        function _(z) {
            if (C = !1, q(z), !w)
                if (s(d) !== null) w = !0, Q || (Q = !0, ut());
                else {
                    var X = s(p);
                    X !== null && vt(_, X.startTime - z)
                }
        }
        var Q = !1,
            tt = -1,
            Y = 5,
            et = -1;

        function J() {
            return D ? !0 : !(e.unstable_now() - et < Y)
        }

        function ot() {
            if (D = !1, Q) {
                var z = e.unstable_now();
                et = z;
                var X = !0;
                try {
                    t: {
                        w = !1,
                        C && (C = !1, K(tt), tt = -1),
                        R = !0;
                        var I = S;
                        try {
                            e: {
                                for (q(z), v = s(d); v !== null && !(v.expirationTime > z && J());) {
                                    var ft = v.callback;
                                    if (typeof ft == "function") {
                                        v.callback = null, S = v.priorityLevel;
                                        var E = ft(v.expirationTime <= z);
                                        if (z = e.unstable_now(), typeof E == "function") {
                                            v.callback = E, q(z), X = !0;
                                            break e
                                        }
                                        v === s(d) && r(d), q(z)
                                    } else r(d);
                                    v = s(d)
                                }
                                if (v !== null) X = !0;
                                else {
                                    var G = s(p);
                                    G !== null && vt(_, G.startTime - z), X = !1
                                }
                            }
                            break t
                        }
                        finally {
                            v = null, S = I, R = !1
                        }
                        X = void 0
                    }
                }
                finally {
                    X ? ut() : Q = !1
                }
            }
        }
        var ut;
        if (typeof B == "function") ut = function() {
            B(ot)
        };
        else if (typeof MessageChannel < "u") {
            var bt = new MessageChannel,
                gt = bt.port2;
            bt.port1.onmessage = ot, ut = function() {
                gt.postMessage(null)
            }
        } else ut = function() {
            V(ot, 0)
        };

        function vt(z, X) {
            tt = V(function() {
                z(e.unstable_now())
            }, X)
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(z) {
            z.callback = null
        }, e.unstable_forceFrameRate = function(z) {
            0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Y = 0 < z ? Math.floor(1e3 / z) : 5
        }, e.unstable_getCurrentPriorityLevel = function() {
            return S
        }, e.unstable_next = function(z) {
            switch (S) {
                case 1:
                case 2:
                case 3:
                    var X = 3;
                    break;
                default:
                    X = S
            }
            var I = S;
            S = X;
            try {
                return z()
            } finally {
                S = I
            }
        }, e.unstable_requestPaint = function() {
            D = !0
        }, e.unstable_runWithPriority = function(z, X) {
            switch (z) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    z = 3
            }
            var I = S;
            S = z;
            try {
                return X()
            } finally {
                S = I
            }
        }, e.unstable_scheduleCallback = function(z, X, I) {
            var ft = e.unstable_now();
            switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? ft + I : ft) : I = ft, z) {
                case 1:
                    var E = -1;
                    break;
                case 2:
                    E = 250;
                    break;
                case 5:
                    E = 1073741823;
                    break;
                case 4:
                    E = 1e4;
                    break;
                default:
                    E = 5e3
            }
            return E = I + E, z = {
                id: y++,
                callback: X,
                priorityLevel: z,
                startTime: I,
                expirationTime: E,
                sortIndex: -1
            }, I > ft ? (z.sortIndex = I, i(p, z), s(d) === null && z === s(p) && (C ? (K(tt), tt = -1) : C = !0, vt(_, I - ft))) : (z.sortIndex = E, i(d, z), w || R || (w = !0, Q || (Q = !0, ut()))), z
        }, e.unstable_shouldYield = J, e.unstable_wrapCallback = function(z) {
            var X = S;
            return function() {
                var I = S;
                S = X;
                try {
                    return z.apply(this, arguments)
                } finally {
                    S = I
                }
            }
        }
    })(Gc)), Gc
}
var Gy;

function rT() {
    return Gy || (Gy = 1, Pc.exports = sT()), Pc.exports
}
var Kc = {
        exports: {}
    },
    le = {};
var Ky;

function lT() {
    if (Ky) return le;
    Ky = 1;
    var e = ho();

    function i(d) {
        var p = "https://react.dev/errors/" + d;
        if (1 < arguments.length) {
            p += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var y = 2; y < arguments.length; y++) p += "&args[]=" + encodeURIComponent(arguments[y])
        }
        return "Minified React error #" + d + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function s() {}
    var r = {
            d: {
                f: s,
                r: function() {
                    throw Error(i(522))
                },
                D: s,
                C: s,
                L: s,
                m: s,
                X: s,
                S: s,
                M: s
            },
            p: 0,
            findDOMNode: null
        },
        u = Symbol.for("react.portal");

    function c(d, p, y) {
        var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: u,
            key: v == null ? null : "" + v,
            children: d,
            containerInfo: p,
            implementation: y
        }
    }
    var f = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function m(d, p) {
        if (d === "font") return "";
        if (typeof p == "string") return p === "use-credentials" ? p : ""
    }
    return le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, le.createPortal = function(d, p) {
        var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11) throw Error(i(299));
        return c(d, p, null, y)
    }, le.flushSync = function(d) {
        var p = f.T,
            y = r.p;
        try {
            if (f.T = null, r.p = 2, d) return d()
        } finally {
            f.T = p, r.p = y, r.d.f()
        }
    }, le.preconnect = function(d, p) {
        typeof d == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, r.d.C(d, p))
    }, le.prefetchDNS = function(d) {
        typeof d == "string" && r.d.D(d)
    }, le.preinit = function(d, p) {
        if (typeof d == "string" && p && typeof p.as == "string") {
            var y = p.as,
                v = m(y, p.crossOrigin),
                S = typeof p.integrity == "string" ? p.integrity : void 0,
                R = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
            y === "style" ? r.d.S(d, typeof p.precedence == "string" ? p.precedence : void 0, {
                crossOrigin: v,
                integrity: S,
                fetchPriority: R
            }) : y === "script" && r.d.X(d, {
                crossOrigin: v,
                integrity: S,
                fetchPriority: R,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0
            })
        }
    }, le.preinitModule = function(d, p) {
        if (typeof d == "string")
            if (typeof p == "object" && p !== null) {
                if (p.as == null || p.as === "script") {
                    var y = m(p.as, p.crossOrigin);
                    r.d.M(d, {
                        crossOrigin: y,
                        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                        nonce: typeof p.nonce == "string" ? p.nonce : void 0
                    })
                }
            } else p == null && r.d.M(d)
    }, le.preload = function(d, p) {
        if (typeof d == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
            var y = p.as,
                v = m(y, p.crossOrigin);
            r.d.L(d, y, {
                crossOrigin: v,
                integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0,
                type: typeof p.type == "string" ? p.type : void 0,
                fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
                referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
                imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
                imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
                media: typeof p.media == "string" ? p.media : void 0
            })
        }
    }, le.preloadModule = function(d, p) {
        if (typeof d == "string")
            if (p) {
                var y = m(p.as, p.crossOrigin);
                r.d.m(d, {
                    as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
                    crossOrigin: y,
                    integrity: typeof p.integrity == "string" ? p.integrity : void 0
                })
            } else r.d.m(d)
    }, le.requestFormReset = function(d) {
        r.d.r(d)
    }, le.unstable_batchedUpdates = function(d, p) {
        return d(p)
    }, le.useFormState = function(d, p, y) {
        return f.H.useFormState(d, p, y)
    }, le.useFormStatus = function() {
        return f.H.useHostTransitionStatus()
    }, le.version = "19.1.0", le
}
var Qy;

function Zv() {
    if (Qy) return Kc.exports;
    Qy = 1;

    function e() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
        } catch (i) {
            console.error(i)
        }
    }
    return e(), Kc.exports = lT(), Kc.exports
}
var Yy;

function oT() {
    if (Yy) return Vs;
    Yy = 1;
    var e = rT(),
        i = ho(),
        s = Zv();

    function r(t) {
        var n = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            n += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++) n += "&args[]=" + encodeURIComponent(arguments[a])
        }
        return "Minified React error #" + t + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function u(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }

    function c(t) {
        var n = t,
            a = t;
        if (t.alternate)
            for (; n.return;) n = n.return;
        else {
            t = n;
            do n = t, (n.flags & 4098) !== 0 && (a = n.return), t = n.return; while (t)
        }
        return n.tag === 3 ? a : null
    }

    function f(t) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n === null && (t = t.alternate, t !== null && (n = t.memoizedState)), n !== null) return n.dehydrated
        }
        return null
    }

    function m(t) {
        if (c(t) !== t) throw Error(r(188))
    }

    function d(t) {
        var n = t.alternate;
        if (!n) {
            if (n = c(t), n === null) throw Error(r(188));
            return n !== t ? null : t
        }
        for (var a = t, l = n;;) {
            var o = a.return;
            if (o === null) break;
            var h = o.alternate;
            if (h === null) {
                if (l = o.return, l !== null) {
                    a = l;
                    continue
                }
                break
            }
            if (o.child === h.child) {
                for (h = o.child; h;) {
                    if (h === a) return m(o), t;
                    if (h === l) return m(o), n;
                    h = h.sibling
                }
                throw Error(r(188))
            }
            if (a.return !== l.return) a = o, l = h;
            else {
                for (var g = !1, b = o.child; b;) {
                    if (b === a) {
                        g = !0, a = o, l = h;
                        break
                    }
                    if (b === l) {
                        g = !0, l = o, a = h;
                        break
                    }
                    b = b.sibling
                }
                if (!g) {
                    for (b = h.child; b;) {
                        if (b === a) {
                            g = !0, a = h, l = o;
                            break
                        }
                        if (b === l) {
                            g = !0, l = h, a = o;
                            break
                        }
                        b = b.sibling
                    }
                    if (!g) throw Error(r(189))
                }
            }
            if (a.alternate !== l) throw Error(r(190))
        }
        if (a.tag !== 3) throw Error(r(188));
        return a.stateNode.current === a ? t : n
    }

    function p(t) {
        var n = t.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6) return t;
        for (t = t.child; t !== null;) {
            if (n = p(t), n !== null) return n;
            t = t.sibling
        }
        return null
    }
    var y = Object.assign,
        v = Symbol.for("react.element"),
        S = Symbol.for("react.transitional.element"),
        R = Symbol.for("react.portal"),
        w = Symbol.for("react.fragment"),
        C = Symbol.for("react.strict_mode"),
        D = Symbol.for("react.profiler"),
        V = Symbol.for("react.provider"),
        K = Symbol.for("react.consumer"),
        B = Symbol.for("react.context"),
        q = Symbol.for("react.forward_ref"),
        _ = Symbol.for("react.suspense"),
        Q = Symbol.for("react.suspense_list"),
        tt = Symbol.for("react.memo"),
        Y = Symbol.for("react.lazy"),
        et = Symbol.for("react.activity"),
        J = Symbol.for("react.memo_cache_sentinel"),
        ot = Symbol.iterator;

    function ut(t) {
        return t === null || typeof t != "object" ? null : (t = ot && t[ot] || t["@@iterator"], typeof t == "function" ? t : null)
    }
    var bt = Symbol.for("react.client.reference");

    function gt(t) {
        if (t == null) return null;
        if (typeof t == "function") return t.$$typeof === bt ? null : t.displayName || t.name || null;
        if (typeof t == "string") return t;
        switch (t) {
            case w:
                return "Fragment";
            case D:
                return "Profiler";
            case C:
                return "StrictMode";
            case _:
                return "Suspense";
            case Q:
                return "SuspenseList";
            case et:
                return "Activity"
        }
        if (typeof t == "object") switch (t.$$typeof) {
            case R:
                return "Portal";
            case B:
                return (t.displayName || "Context") + ".Provider";
            case K:
                return (t._context.displayName || "Context") + ".Consumer";
            case q:
                var n = t.render;
                return t = t.displayName, t || (t = n.displayName || n.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
            case tt:
                return n = t.displayName || null, n !== null ? n : gt(t.type) || "Memo";
            case Y:
                n = t._payload, t = t._init;
                try {
                    return gt(t(n))
                } catch {}
        }
        return null
    }
    var vt = Array.isArray,
        z = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        X = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        I = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        ft = [],
        E = -1;

    function G(t) {
        return {
            current: t
        }
    }

    function F(t) {
        0 > E || (t.current = ft[E], ft[E] = null, E--)
    }

    function Z(t, n) {
        E++, ft[E] = t.current, t.current = n
    }
    var it = G(null),
        xt = G(null),
        lt = G(null),
        ve = G(null);

    function Ut(t, n) {
        switch (Z(lt, n), Z(xt, t), Z(it, null), n.nodeType) {
            case 9:
            case 11:
                t = (t = n.documentElement) && (t = t.namespaceURI) ? hy(t) : 0;
                break;
            default:
                if (t = n.tagName, n = n.namespaceURI) n = hy(n), t = dy(n, t);
                else switch (t) {
                    case "svg":
                        t = 1;
                        break;
                    case "math":
                        t = 2;
                        break;
                    default:
                        t = 0
                }
        }
        F(it), Z(it, t)
    }

    function Rn() {
        F(it), F(xt), F(lt)
    }

    function Eo(t) {
        t.memoizedState !== null && Z(ve, t);
        var n = it.current,
            a = dy(n, t.type);
        n !== a && (Z(xt, t), Z(it, a))
    }

    function cr(t) {
        xt.current === t && (F(it), F(xt)), ve.current === t && (F(ve), Ds._currentValue = I)
    }
    var Ao = Object.prototype.hasOwnProperty,
        Ro = e.unstable_scheduleCallback,
        Oo = e.unstable_cancelCallback,
        D1 = e.unstable_shouldYield,
        N1 = e.unstable_requestPaint,
        Ie = e.unstable_now,
        j1 = e.unstable_getCurrentPriorityLevel,
        Yh = e.unstable_ImmediatePriority,
        Xh = e.unstable_UserBlockingPriority,
        fr = e.unstable_NormalPriority,
        U1 = e.unstable_LowPriority,
        Zh = e.unstable_IdlePriority,
        z1 = e.log,
        k1 = e.unstable_setDisableYieldValue,
        La = null,
        be = null;

    function On(t) {
        if (typeof z1 == "function" && k1(t), be && typeof be.setStrictMode == "function") try {
            be.setStrictMode(La, t)
        } catch {}
    }
    var Se = Math.clz32 ? Math.clz32 : L1,
        V1 = Math.log,
        _1 = Math.LN2;

    function L1(t) {
        return t >>>= 0, t === 0 ? 32 : 31 - (V1(t) / _1 | 0) | 0
    }
    var hr = 256,
        dr = 4194304;

    function li(t) {
        var n = t & 42;
        if (n !== 0) return n;
        switch (t & -t) {
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
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t & 4194048;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return t & 62914560;
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
                return t
        }
    }

    function mr(t, n, a) {
        var l = t.pendingLanes;
        if (l === 0) return 0;
        var o = 0,
            h = t.suspendedLanes,
            g = t.pingedLanes;
        t = t.warmLanes;
        var b = l & 134217727;
        return b !== 0 ? (l = b & ~h, l !== 0 ? o = li(l) : (g &= b, g !== 0 ? o = li(g) : a || (a = b & ~t, a !== 0 && (o = li(a))))) : (b = l & ~h, b !== 0 ? o = li(b) : g !== 0 ? o = li(g) : a || (a = l & ~t, a !== 0 && (o = li(a)))), o === 0 ? 0 : n !== 0 && n !== o && (n & h) === 0 && (h = o & -o, a = n & -n, h >= a || h === 32 && (a & 4194048) !== 0) ? n : o
    }

    function Ba(t, n) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & n) === 0
    }

    function B1(t, n) {
        switch (t) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return n + 250;
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
                return n + 5e3;
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
                return -1
        }
    }

    function Fh() {
        var t = hr;
        return hr <<= 1, (hr & 4194048) === 0 && (hr = 256), t
    }

    function Ih() {
        var t = dr;
        return dr <<= 1, (dr & 62914560) === 0 && (dr = 4194304), t
    }

    function Co(t) {
        for (var n = [], a = 0; 31 > a; a++) n.push(t);
        return n
    }

    function Ha(t, n) {
        t.pendingLanes |= n, n !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0)
    }

    function H1(t, n, a, l, o, h) {
        var g = t.pendingLanes;
        t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
        var b = t.entanglements,
            T = t.expirationTimes,
            N = t.hiddenUpdates;
        for (a = g & ~a; 0 < a;) {
            var L = 31 - Se(a),
                P = 1 << L;
            b[L] = 0, T[L] = -1;
            var j = N[L];
            if (j !== null)
                for (N[L] = null, L = 0; L < j.length; L++) {
                    var U = j[L];
                    U !== null && (U.lane &= -536870913)
                }
            a &= ~P
        }
        l !== 0 && Jh(t, l, 0), h !== 0 && o === 0 && t.tag !== 0 && (t.suspendedLanes |= h & ~(g & ~n))
    }

    function Jh(t, n, a) {
        t.pendingLanes |= n, t.suspendedLanes &= ~n;
        var l = 31 - Se(n);
        t.entangledLanes |= n, t.entanglements[l] = t.entanglements[l] | 1073741824 | a & 4194090
    }

    function Wh(t, n) {
        var a = t.entangledLanes |= n;
        for (t = t.entanglements; a;) {
            var l = 31 - Se(a),
                o = 1 << l;
            o & n | t[l] & n && (t[l] |= n), a &= ~o
        }
    }

    function Mo(t) {
        switch (t) {
            case 2:
                t = 1;
                break;
            case 8:
                t = 4;
                break;
            case 32:
                t = 16;
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
                t = 128;
                break;
            case 268435456:
                t = 134217728;
                break;
            default:
                t = 0
        }
        return t
    }

    function Do(t) {
        return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function $h() {
        var t = X.p;
        return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : jy(t.type))
    }

    function q1(t, n) {
        var a = X.p;
        try {
            return X.p = t, n()
        } finally {
            X.p = a
        }
    }
    var Cn = Math.random().toString(36).slice(2),
        se = "__reactFiber$" + Cn,
        de = "__reactProps$" + Cn,
        _i = "__reactContainer$" + Cn,
        No = "__reactEvents$" + Cn,
        P1 = "__reactListeners$" + Cn,
        G1 = "__reactHandles$" + Cn,
        td = "__reactResources$" + Cn,
        qa = "__reactMarker$" + Cn;

    function jo(t) {
        delete t[se], delete t[de], delete t[No], delete t[P1], delete t[G1]
    }

    function Li(t) {
        var n = t[se];
        if (n) return n;
        for (var a = t.parentNode; a;) {
            if (n = a[_i] || a[se]) {
                if (a = n.alternate, n.child !== null || a !== null && a.child !== null)
                    for (t = gy(t); t !== null;) {
                        if (a = t[se]) return a;
                        t = gy(t)
                    }
                return n
            }
            t = a, a = t.parentNode
        }
        return null
    }

    function Bi(t) {
        if (t = t[se] || t[_i]) {
            var n = t.tag;
            if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3) return t
        }
        return null
    }

    function Pa(t) {
        var n = t.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6) return t.stateNode;
        throw Error(r(33))
    }

    function Hi(t) {
        var n = t[td];
        return n || (n = t[td] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), n
    }

    function Ft(t) {
        t[qa] = !0
    }
    var ed = new Set,
        nd = {};

    function oi(t, n) {
        qi(t, n), qi(t + "Capture", n)
    }

    function qi(t, n) {
        for (nd[t] = n, t = 0; t < n.length; t++) ed.add(n[t])
    }
    var K1 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        id = {},
        ad = {};

    function Q1(t) {
        return Ao.call(ad, t) ? !0 : Ao.call(id, t) ? !1 : K1.test(t) ? ad[t] = !0 : (id[t] = !0, !1)
    }

    function pr(t, n, a) {
        if (Q1(n))
            if (a === null) t.removeAttribute(n);
            else {
                switch (typeof a) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        t.removeAttribute(n);
                        return;
                    case "boolean":
                        var l = n.toLowerCase().slice(0, 5);
                        if (l !== "data-" && l !== "aria-") {
                            t.removeAttribute(n);
                            return
                        }
                }
                t.setAttribute(n, "" + a)
            }
    }

    function yr(t, n, a) {
        if (a === null) t.removeAttribute(n);
        else {
            switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(n);
                    return
            }
            t.setAttribute(n, "" + a)
        }
    }

    function un(t, n, a, l) {
        if (l === null) t.removeAttribute(a);
        else {
            switch (typeof l) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(a);
                    return
            }
            t.setAttributeNS(n, a, "" + l)
        }
    }
    var Uo, sd;

    function Pi(t) {
        if (Uo === void 0) try {
            throw Error()
        } catch (a) {
            var n = a.stack.trim().match(/\n( *(at )?)/);
            Uo = n && n[1] || "", sd = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + Uo + t + sd
    }
    var zo = !1;

    function ko(t, n) {
        if (!t || zo) return "";
        zo = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var l = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (n) {
                            var P = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(P.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(P, [])
                                } catch (U) {
                                    var j = U
                                }
                                Reflect.construct(t, [], P)
                            } else {
                                try {
                                    P.call()
                                } catch (U) {
                                    j = U
                                }
                                t.call(P.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (U) {
                                j = U
                            }(P = t()) && typeof P.catch == "function" && P.catch(function() {})
                        }
                    } catch (U) {
                        if (U && j && typeof U.stack == "string") return [U.stack, j.stack]
                    }
                    return [null, null]
                }
            };
            l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var o = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
            o && o.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var h = l.DetermineComponentFrameRoot(),
                g = h[0],
                b = h[1];
            if (g && b) {
                var T = g.split(`
`),
                    N = b.split(`
`);
                for (o = l = 0; l < T.length && !T[l].includes("DetermineComponentFrameRoot");) l++;
                for (; o < N.length && !N[o].includes("DetermineComponentFrameRoot");) o++;
                if (l === T.length || o === N.length)
                    for (l = T.length - 1, o = N.length - 1; 1 <= l && 0 <= o && T[l] !== N[o];) o--;
                for (; 1 <= l && 0 <= o; l--, o--)
                    if (T[l] !== N[o]) {
                        if (l !== 1 || o !== 1)
                            do
                                if (l--, o--, 0 > o || T[l] !== N[o]) {
                                    var L = `
` + T[l].replace(" at new ", " at ");
                                    return t.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", t.displayName)), L
                                }
                        while (1 <= l && 0 <= o);
                        break
                    }
            }
        } finally {
            zo = !1, Error.prepareStackTrace = a
        }
        return (a = t ? t.displayName || t.name : "") ? Pi(a) : ""
    }

    function Y1(t) {
        switch (t.tag) {
            case 26:
            case 27:
            case 5:
                return Pi(t.type);
            case 16:
                return Pi("Lazy");
            case 13:
                return Pi("Suspense");
            case 19:
                return Pi("SuspenseList");
            case 0:
            case 15:
                return ko(t.type, !1);
            case 11:
                return ko(t.type.render, !1);
            case 1:
                return ko(t.type, !0);
            case 31:
                return Pi("Activity");
            default:
                return ""
        }
    }

    function rd(t) {
        try {
            var n = "";
            do n += Y1(t), t = t.return; while (t);
            return n
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }

    function Ne(t) {
        switch (typeof t) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return t;
            case "object":
                return t;
            default:
                return ""
        }
    }

    function ld(t) {
        var n = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (n === "checkbox" || n === "radio")
    }

    function X1(t) {
        var n = ld(t) ? "checked" : "value",
            a = Object.getOwnPropertyDescriptor(t.constructor.prototype, n),
            l = "" + t[n];
        if (!t.hasOwnProperty(n) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var o = a.get,
                h = a.set;
            return Object.defineProperty(t, n, {
                configurable: !0,
                get: function() {
                    return o.call(this)
                },
                set: function(g) {
                    l = "" + g, h.call(this, g)
                }
            }), Object.defineProperty(t, n, {
                enumerable: a.enumerable
            }), {
                getValue: function() {
                    return l
                },
                setValue: function(g) {
                    l = "" + g
                },
                stopTracking: function() {
                    t._valueTracker = null, delete t[n]
                }
            }
        }
    }

    function gr(t) {
        t._valueTracker || (t._valueTracker = X1(t))
    }

    function od(t) {
        if (!t) return !1;
        var n = t._valueTracker;
        if (!n) return !0;
        var a = n.getValue(),
            l = "";
        return t && (l = ld(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== a ? (n.setValue(t), !0) : !1
    }

    function vr(t) {
        if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var Z1 = /[\n"\\]/g;

    function je(t) {
        return t.replace(Z1, function(n) {
            return "\\" + n.charCodeAt(0).toString(16) + " "
        })
    }

    function Vo(t, n, a, l, o, h, g, b) {
        t.name = "", g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? t.type = g : t.removeAttribute("type"), n != null ? g === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + Ne(n)) : t.value !== "" + Ne(n) && (t.value = "" + Ne(n)) : g !== "submit" && g !== "reset" || t.removeAttribute("value"), n != null ? _o(t, g, Ne(n)) : a != null ? _o(t, g, Ne(a)) : l != null && t.removeAttribute("value"), o == null && h != null && (t.defaultChecked = !!h), o != null && (t.checked = o && typeof o != "function" && typeof o != "symbol"), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? t.name = "" + Ne(b) : t.removeAttribute("name")
    }

    function ud(t, n, a, l, o, h, g, b) {
        if (h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (t.type = h), n != null || a != null) {
            if (!(h !== "submit" && h !== "reset" || n != null)) return;
            a = a != null ? "" + Ne(a) : "", n = n != null ? "" + Ne(n) : a, b || n === t.value || (t.value = n), t.defaultValue = n
        }
        l = l ? ? o, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = b ? t.checked : !!l, t.defaultChecked = !!l, g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (t.name = g)
    }

    function _o(t, n, a) {
        n === "number" && vr(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a)
    }

    function Gi(t, n, a, l) {
        if (t = t.options, n) {
            n = {};
            for (var o = 0; o < a.length; o++) n["$" + a[o]] = !0;
            for (a = 0; a < t.length; a++) o = n.hasOwnProperty("$" + t[a].value), t[a].selected !== o && (t[a].selected = o), o && l && (t[a].defaultSelected = !0)
        } else {
            for (a = "" + Ne(a), n = null, o = 0; o < t.length; o++) {
                if (t[o].value === a) {
                    t[o].selected = !0, l && (t[o].defaultSelected = !0);
                    return
                }
                n !== null || t[o].disabled || (n = t[o])
            }
            n !== null && (n.selected = !0)
        }
    }

    function cd(t, n, a) {
        if (n != null && (n = "" + Ne(n), n !== t.value && (t.value = n), a == null)) {
            t.defaultValue !== n && (t.defaultValue = n);
            return
        }
        t.defaultValue = a != null ? "" + Ne(a) : ""
    }

    function fd(t, n, a, l) {
        if (n == null) {
            if (l != null) {
                if (a != null) throw Error(r(92));
                if (vt(l)) {
                    if (1 < l.length) throw Error(r(93));
                    l = l[0]
                }
                a = l
            }
            a == null && (a = ""), n = a
        }
        a = Ne(n), t.defaultValue = a, l = t.textContent, l === a && l !== "" && l !== null && (t.value = l)
    }

    function Ki(t, n) {
        if (n) {
            var a = t.firstChild;
            if (a && a === t.lastChild && a.nodeType === 3) {
                a.nodeValue = n;
                return
            }
        }
        t.textContent = n
    }
    var F1 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function hd(t, n, a) {
        var l = n.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? l ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "" : l ? t.setProperty(n, a) : typeof a != "number" || a === 0 || F1.has(n) ? n === "float" ? t.cssFloat = a : t[n] = ("" + a).trim() : t[n] = a + "px"
    }

    function dd(t, n, a) {
        if (n != null && typeof n != "object") throw Error(r(62));
        if (t = t.style, a != null) {
            for (var l in a) !a.hasOwnProperty(l) || n != null && n.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
            for (var o in n) l = n[o], n.hasOwnProperty(o) && a[o] !== l && hd(t, o, l)
        } else
            for (var h in n) n.hasOwnProperty(h) && hd(t, h, n[h])
    }

    function Lo(t) {
        if (t.indexOf("-") === -1) return !1;
        switch (t) {
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
                return !0
        }
    }
    var I1 = new Map([
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
            ["xHeight", "x-height"]
        ]),
        J1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function br(t) {
        return J1.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }
    var Bo = null;

    function Ho(t) {
        return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
    }
    var Qi = null,
        Yi = null;

    function md(t) {
        var n = Bi(t);
        if (n && (t = n.stateNode)) {
            var a = t[de] || null;
            t: switch (t = n.stateNode, n.type) {
                case "input":
                    if (Vo(t, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), n = a.name, a.type === "radio" && n != null) {
                        for (a = t; a.parentNode;) a = a.parentNode;
                        for (a = a.querySelectorAll('input[name="' + je("" + n) + '"][type="radio"]'), n = 0; n < a.length; n++) {
                            var l = a[n];
                            if (l !== t && l.form === t.form) {
                                var o = l[de] || null;
                                if (!o) throw Error(r(90));
                                Vo(l, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name)
                            }
                        }
                        for (n = 0; n < a.length; n++) l = a[n], l.form === t.form && od(l)
                    }
                    break t;
                case "textarea":
                    cd(t, a.value, a.defaultValue);
                    break t;
                case "select":
                    n = a.value, n != null && Gi(t, !!a.multiple, n, !1)
            }
        }
    }
    var qo = !1;

    function pd(t, n, a) {
        if (qo) return t(n, a);
        qo = !0;
        try {
            var l = t(n);
            return l
        } finally {
            if (qo = !1, (Qi !== null || Yi !== null) && (al(), Qi && (n = Qi, t = Yi, Yi = Qi = null, md(n), t)))
                for (n = 0; n < t.length; n++) md(t[n])
        }
    }

    function Ga(t, n) {
        var a = t.stateNode;
        if (a === null) return null;
        var l = a[de] || null;
        if (l === null) return null;
        a = l[n];
        t: switch (n) {
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
                (l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
                break t;
            default:
                t = !1
        }
        if (t) return null;
        if (a && typeof a != "function") throw Error(r(231, n, typeof a));
        return a
    }
    var cn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        Po = !1;
    if (cn) try {
        var Ka = {};
        Object.defineProperty(Ka, "passive", {
            get: function() {
                Po = !0
            }
        }), window.addEventListener("test", Ka, Ka), window.removeEventListener("test", Ka, Ka)
    } catch {
        Po = !1
    }
    var Mn = null,
        Go = null,
        Sr = null;

    function yd() {
        if (Sr) return Sr;
        var t, n = Go,
            a = n.length,
            l, o = "value" in Mn ? Mn.value : Mn.textContent,
            h = o.length;
        for (t = 0; t < a && n[t] === o[t]; t++);
        var g = a - t;
        for (l = 1; l <= g && n[a - l] === o[h - l]; l++);
        return Sr = o.slice(t, 1 < l ? 1 - l : void 0)
    }

    function xr(t) {
        var n = t.keyCode;
        return "charCode" in t ? (t = t.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
    }

    function Tr() {
        return !0
    }

    function gd() {
        return !1
    }

    function me(t) {
        function n(a, l, o, h, g) {
            this._reactName = a, this._targetInst = o, this.type = l, this.nativeEvent = h, this.target = g, this.currentTarget = null;
            for (var b in t) t.hasOwnProperty(b) && (a = t[b], this[b] = a ? a(h) : h[b]);
            return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? Tr : gd, this.isPropagationStopped = gd, this
        }
        return y(n.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Tr)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Tr)
            },
            persist: function() {},
            isPersistent: Tr
        }), n
    }
    var ui = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(t) {
                return t.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        wr = me(ui),
        Qa = y({}, ui, {
            view: 0,
            detail: 0
        }),
        W1 = me(Qa),
        Ko, Qo, Ya, Er = y({}, Qa, {
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
            getModifierState: Xo,
            button: 0,
            buttons: 0,
            relatedTarget: function(t) {
                return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
            },
            movementX: function(t) {
                return "movementX" in t ? t.movementX : (t !== Ya && (Ya && t.type === "mousemove" ? (Ko = t.screenX - Ya.screenX, Qo = t.screenY - Ya.screenY) : Qo = Ko = 0, Ya = t), Ko)
            },
            movementY: function(t) {
                return "movementY" in t ? t.movementY : Qo
            }
        }),
        vd = me(Er),
        $1 = y({}, Er, {
            dataTransfer: 0
        }),
        tS = me($1),
        eS = y({}, Qa, {
            relatedTarget: 0
        }),
        Yo = me(eS),
        nS = y({}, ui, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        iS = me(nS),
        aS = y({}, ui, {
            clipboardData: function(t) {
                return "clipboardData" in t ? t.clipboardData : window.clipboardData
            }
        }),
        sS = me(aS),
        rS = y({}, ui, {
            data: 0
        }),
        bd = me(rS),
        lS = {
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
        oS = {
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
        uS = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function cS(t) {
        var n = this.nativeEvent;
        return n.getModifierState ? n.getModifierState(t) : (t = uS[t]) ? !!n[t] : !1
    }

    function Xo() {
        return cS
    }
    var fS = y({}, Qa, {
            key: function(t) {
                if (t.key) {
                    var n = lS[t.key] || t.key;
                    if (n !== "Unidentified") return n
                }
                return t.type === "keypress" ? (t = xr(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? oS[t.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Xo,
            charCode: function(t) {
                return t.type === "keypress" ? xr(t) : 0
            },
            keyCode: function(t) {
                return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            },
            which: function(t) {
                return t.type === "keypress" ? xr(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            }
        }),
        hS = me(fS),
        dS = y({}, Er, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        Sd = me(dS),
        mS = y({}, Qa, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Xo
        }),
        pS = me(mS),
        yS = y({}, ui, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        gS = me(yS),
        vS = y({}, Er, {
            deltaX: function(t) {
                return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
            },
            deltaY: function(t) {
                return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        bS = me(vS),
        SS = y({}, ui, {
            newState: 0,
            oldState: 0
        }),
        xS = me(SS),
        TS = [9, 13, 27, 32],
        Zo = cn && "CompositionEvent" in window,
        Xa = null;
    cn && "documentMode" in document && (Xa = document.documentMode);
    var wS = cn && "TextEvent" in window && !Xa,
        xd = cn && (!Zo || Xa && 8 < Xa && 11 >= Xa),
        Td = " ",
        wd = !1;

    function Ed(t, n) {
        switch (t) {
            case "keyup":
                return TS.indexOf(n.keyCode) !== -1;
            case "keydown":
                return n.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function Ad(t) {
        return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
    }
    var Xi = !1;

    function ES(t, n) {
        switch (t) {
            case "compositionend":
                return Ad(n);
            case "keypress":
                return n.which !== 32 ? null : (wd = !0, Td);
            case "textInput":
                return t = n.data, t === Td && wd ? null : t;
            default:
                return null
        }
    }

    function AS(t, n) {
        if (Xi) return t === "compositionend" || !Zo && Ed(t, n) ? (t = yd(), Sr = Go = Mn = null, Xi = !1, t) : null;
        switch (t) {
            case "paste":
                return null;
            case "keypress":
                if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
                    if (n.char && 1 < n.char.length) return n.char;
                    if (n.which) return String.fromCharCode(n.which)
                }
                return null;
            case "compositionend":
                return xd && n.locale !== "ko" ? null : n.data;
            default:
                return null
        }
    }
    var RS = {
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

    function Rd(t) {
        var n = t && t.nodeName && t.nodeName.toLowerCase();
        return n === "input" ? !!RS[t.type] : n === "textarea"
    }

    function Od(t, n, a, l) {
        Qi ? Yi ? Yi.push(l) : Yi = [l] : Qi = l, n = cl(n, "onChange"), 0 < n.length && (a = new wr("onChange", "change", null, a, l), t.push({
            event: a,
            listeners: n
        }))
    }
    var Za = null,
        Fa = null;

    function OS(t) {
        ly(t, 0)
    }

    function Ar(t) {
        var n = Pa(t);
        if (od(n)) return t
    }

    function Cd(t, n) {
        if (t === "change") return n
    }
    var Md = !1;
    if (cn) {
        var Fo;
        if (cn) {
            var Io = "oninput" in document;
            if (!Io) {
                var Dd = document.createElement("div");
                Dd.setAttribute("oninput", "return;"), Io = typeof Dd.oninput == "function"
            }
            Fo = Io
        } else Fo = !1;
        Md = Fo && (!document.documentMode || 9 < document.documentMode)
    }

    function Nd() {
        Za && (Za.detachEvent("onpropertychange", jd), Fa = Za = null)
    }

    function jd(t) {
        if (t.propertyName === "value" && Ar(Fa)) {
            var n = [];
            Od(n, Fa, t, Ho(t)), pd(OS, n)
        }
    }

    function CS(t, n, a) {
        t === "focusin" ? (Nd(), Za = n, Fa = a, Za.attachEvent("onpropertychange", jd)) : t === "focusout" && Nd()
    }

    function MS(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown") return Ar(Fa)
    }

    function DS(t, n) {
        if (t === "click") return Ar(n)
    }

    function NS(t, n) {
        if (t === "input" || t === "change") return Ar(n)
    }

    function jS(t, n) {
        return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n
    }
    var xe = typeof Object.is == "function" ? Object.is : jS;

    function Ia(t, n) {
        if (xe(t, n)) return !0;
        if (typeof t != "object" || t === null || typeof n != "object" || n === null) return !1;
        var a = Object.keys(t),
            l = Object.keys(n);
        if (a.length !== l.length) return !1;
        for (l = 0; l < a.length; l++) {
            var o = a[l];
            if (!Ao.call(n, o) || !xe(t[o], n[o])) return !1
        }
        return !0
    }

    function Ud(t) {
        for (; t && t.firstChild;) t = t.firstChild;
        return t
    }

    function zd(t, n) {
        var a = Ud(t);
        t = 0;
        for (var l; a;) {
            if (a.nodeType === 3) {
                if (l = t + a.textContent.length, t <= n && l >= n) return {
                    node: a,
                    offset: n - t
                };
                t = l
            }
            t: {
                for (; a;) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break t
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = Ud(a)
        }
    }

    function kd(t, n) {
        return t && n ? t === n ? !0 : t && t.nodeType === 3 ? !1 : n && n.nodeType === 3 ? kd(t, n.parentNode) : "contains" in t ? t.contains(n) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(n) & 16) : !1 : !1
    }

    function Vd(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var n = vr(t.document); n instanceof t.HTMLIFrameElement;) {
            try {
                var a = typeof n.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a) t = n.contentWindow;
            else break;
            n = vr(t.document)
        }
        return n
    }

    function Jo(t) {
        var n = t && t.nodeName && t.nodeName.toLowerCase();
        return n && (n === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || n === "textarea" || t.contentEditable === "true")
    }
    var US = cn && "documentMode" in document && 11 >= document.documentMode,
        Zi = null,
        Wo = null,
        Ja = null,
        $o = !1;

    function _d(t, n, a) {
        var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        $o || Zi == null || Zi !== vr(l) || (l = Zi, "selectionStart" in l && Jo(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }), Ja && Ia(Ja, l) || (Ja = l, l = cl(Wo, "onSelect"), 0 < l.length && (n = new wr("onSelect", "select", null, n, a), t.push({
            event: n,
            listeners: l
        }), n.target = Zi)))
    }

    function ci(t, n) {
        var a = {};
        return a[t.toLowerCase()] = n.toLowerCase(), a["Webkit" + t] = "webkit" + n, a["Moz" + t] = "moz" + n, a
    }
    var Fi = {
            animationend: ci("Animation", "AnimationEnd"),
            animationiteration: ci("Animation", "AnimationIteration"),
            animationstart: ci("Animation", "AnimationStart"),
            transitionrun: ci("Transition", "TransitionRun"),
            transitionstart: ci("Transition", "TransitionStart"),
            transitioncancel: ci("Transition", "TransitionCancel"),
            transitionend: ci("Transition", "TransitionEnd")
        },
        tu = {},
        Ld = {};
    cn && (Ld = document.createElement("div").style, "AnimationEvent" in window || (delete Fi.animationend.animation, delete Fi.animationiteration.animation, delete Fi.animationstart.animation), "TransitionEvent" in window || delete Fi.transitionend.transition);

    function fi(t) {
        if (tu[t]) return tu[t];
        if (!Fi[t]) return t;
        var n = Fi[t],
            a;
        for (a in n)
            if (n.hasOwnProperty(a) && a in Ld) return tu[t] = n[a];
        return t
    }
    var Bd = fi("animationend"),
        Hd = fi("animationiteration"),
        qd = fi("animationstart"),
        zS = fi("transitionrun"),
        kS = fi("transitionstart"),
        VS = fi("transitioncancel"),
        Pd = fi("transitionend"),
        Gd = new Map,
        eu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    eu.push("scrollEnd");

    function Pe(t, n) {
        Gd.set(t, n), oi(n, [t])
    }
    var Kd = new WeakMap;

    function Ue(t, n) {
        if (typeof t == "object" && t !== null) {
            var a = Kd.get(t);
            return a !== void 0 ? a : (n = {
                value: t,
                source: n,
                stack: rd(n)
            }, Kd.set(t, n), n)
        }
        return {
            value: t,
            source: n,
            stack: rd(n)
        }
    }
    var ze = [],
        Ii = 0,
        nu = 0;

    function Rr() {
        for (var t = Ii, n = nu = Ii = 0; n < t;) {
            var a = ze[n];
            ze[n++] = null;
            var l = ze[n];
            ze[n++] = null;
            var o = ze[n];
            ze[n++] = null;
            var h = ze[n];
            if (ze[n++] = null, l !== null && o !== null) {
                var g = l.pending;
                g === null ? o.next = o : (o.next = g.next, g.next = o), l.pending = o
            }
            h !== 0 && Qd(a, o, h)
        }
    }

    function Or(t, n, a, l) {
        ze[Ii++] = t, ze[Ii++] = n, ze[Ii++] = a, ze[Ii++] = l, nu |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l)
    }

    function iu(t, n, a, l) {
        return Or(t, n, a, l), Cr(t)
    }

    function Ji(t, n) {
        return Or(t, null, null, n), Cr(t)
    }

    function Qd(t, n, a) {
        t.lanes |= a;
        var l = t.alternate;
        l !== null && (l.lanes |= a);
        for (var o = !1, h = t.return; h !== null;) h.childLanes |= a, l = h.alternate, l !== null && (l.childLanes |= a), h.tag === 22 && (t = h.stateNode, t === null || t._visibility & 1 || (o = !0)), t = h, h = h.return;
        return t.tag === 3 ? (h = t.stateNode, o && n !== null && (o = 31 - Se(a), t = h.hiddenUpdates, l = t[o], l === null ? t[o] = [n] : l.push(n), n.lane = a | 536870912), h) : null
    }

    function Cr(t) {
        if (50 < Ts) throw Ts = 0, uc = null, Error(r(185));
        for (var n = t.return; n !== null;) t = n, n = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var Wi = {};

    function _S(t, n, a, l) {
        this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function Te(t, n, a, l) {
        return new _S(t, n, a, l)
    }

    function au(t) {
        return t = t.prototype, !(!t || !t.isReactComponent)
    }

    function fn(t, n) {
        var a = t.alternate;
        return a === null ? (a = Te(t.tag, n, t.key, t.mode), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a.alternate = t, t.alternate = a) : (a.pendingProps = n, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = t.flags & 65011712, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, n = t.dependencies, a.dependencies = n === null ? null : {
            lanes: n.lanes,
            firstContext: n.firstContext
        }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a
    }

    function Yd(t, n) {
        t.flags &= 65011714;
        var a = t.alternate;
        return a === null ? (t.childLanes = 0, t.lanes = n, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, n = a.dependencies, t.dependencies = n === null ? null : {
            lanes: n.lanes,
            firstContext: n.firstContext
        }), t
    }

    function Mr(t, n, a, l, o, h) {
        var g = 0;
        if (l = t, typeof t == "function") au(t) && (g = 1);
        else if (typeof t == "string") g = Bx(t, a, it.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else t: switch (t) {
            case et:
                return t = Te(31, a, n, o), t.elementType = et, t.lanes = h, t;
            case w:
                return hi(a.children, o, h, n);
            case C:
                g = 8, o |= 24;
                break;
            case D:
                return t = Te(12, a, n, o | 2), t.elementType = D, t.lanes = h, t;
            case _:
                return t = Te(13, a, n, o), t.elementType = _, t.lanes = h, t;
            case Q:
                return t = Te(19, a, n, o), t.elementType = Q, t.lanes = h, t;
            default:
                if (typeof t == "object" && t !== null) switch (t.$$typeof) {
                    case V:
                    case B:
                        g = 10;
                        break t;
                    case K:
                        g = 9;
                        break t;
                    case q:
                        g = 11;
                        break t;
                    case tt:
                        g = 14;
                        break t;
                    case Y:
                        g = 16, l = null;
                        break t
                }
                g = 29, a = Error(r(130, t === null ? "null" : typeof t, "")), l = null
        }
        return n = Te(g, a, n, o), n.elementType = t, n.type = l, n.lanes = h, n
    }

    function hi(t, n, a, l) {
        return t = Te(7, t, l, n), t.lanes = a, t
    }

    function su(t, n, a) {
        return t = Te(6, t, null, n), t.lanes = a, t
    }

    function ru(t, n, a) {
        return n = Te(4, t.children !== null ? t.children : [], t.key, n), n.lanes = a, n.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        }, n
    }
    var $i = [],
        ta = 0,
        Dr = null,
        Nr = 0,
        ke = [],
        Ve = 0,
        di = null,
        hn = 1,
        dn = "";

    function mi(t, n) {
        $i[ta++] = Nr, $i[ta++] = Dr, Dr = t, Nr = n
    }

    function Xd(t, n, a) {
        ke[Ve++] = hn, ke[Ve++] = dn, ke[Ve++] = di, di = t;
        var l = hn;
        t = dn;
        var o = 32 - Se(l) - 1;
        l &= ~(1 << o), a += 1;
        var h = 32 - Se(n) + o;
        if (30 < h) {
            var g = o - o % 5;
            h = (l & (1 << g) - 1).toString(32), l >>= g, o -= g, hn = 1 << 32 - Se(n) + o | a << o | l, dn = h + t
        } else hn = 1 << h | a << o | l, dn = t
    }

    function lu(t) {
        t.return !== null && (mi(t, 1), Xd(t, 1, 0))
    }

    function ou(t) {
        for (; t === Dr;) Dr = $i[--ta], $i[ta] = null, Nr = $i[--ta], $i[ta] = null;
        for (; t === di;) di = ke[--Ve], ke[Ve] = null, dn = ke[--Ve], ke[Ve] = null, hn = ke[--Ve], ke[Ve] = null
    }
    var ue = null,
        Vt = null,
        wt = !1,
        pi = null,
        Je = !1,
        uu = Error(r(519));

    function yi(t) {
        var n = Error(r(418, ""));
        throw ts(Ue(n, t)), uu
    }

    function Zd(t) {
        var n = t.stateNode,
            a = t.type,
            l = t.memoizedProps;
        switch (n[se] = t, n[de] = l, a) {
            case "dialog":
                pt("cancel", n), pt("close", n);
                break;
            case "iframe":
            case "object":
            case "embed":
                pt("load", n);
                break;
            case "video":
            case "audio":
                for (a = 0; a < Es.length; a++) pt(Es[a], n);
                break;
            case "source":
                pt("error", n);
                break;
            case "img":
            case "image":
            case "link":
                pt("error", n), pt("load", n);
                break;
            case "details":
                pt("toggle", n);
                break;
            case "input":
                pt("invalid", n), ud(n, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0), gr(n);
                break;
            case "select":
                pt("invalid", n);
                break;
            case "textarea":
                pt("invalid", n), fd(n, l.value, l.defaultValue, l.children), gr(n)
        }
        a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || n.textContent === "" + a || l.suppressHydrationWarning === !0 || fy(n.textContent, a) ? (l.popover != null && (pt("beforetoggle", n), pt("toggle", n)), l.onScroll != null && pt("scroll", n), l.onScrollEnd != null && pt("scrollend", n), l.onClick != null && (n.onclick = fl), n = !0) : n = !1, n || yi(t)
    }

    function Fd(t) {
        for (ue = t.return; ue;) switch (ue.tag) {
            case 5:
            case 13:
                Je = !1;
                return;
            case 27:
            case 3:
                Je = !0;
                return;
            default:
                ue = ue.return
        }
    }

    function Wa(t) {
        if (t !== ue) return !1;
        if (!wt) return Fd(t), wt = !0, !1;
        var n = t.tag,
            a;
        if ((a = n !== 3 && n !== 27) && ((a = n === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || Ac(t.type, t.memoizedProps)), a = !a), a && Vt && yi(t), Fd(t), n === 13) {
            if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
            t: {
                for (t = t.nextSibling, n = 0; t;) {
                    if (t.nodeType === 8)
                        if (a = t.data, a === "/$") {
                            if (n === 0) {
                                Vt = Ke(t.nextSibling);
                                break t
                            }
                            n--
                        } else a !== "$" && a !== "$!" && a !== "$?" || n++;
                    t = t.nextSibling
                }
                Vt = null
            }
        } else n === 27 ? (n = Vt, Qn(t.type) ? (t = Mc, Mc = null, Vt = t) : Vt = n) : Vt = ue ? Ke(t.stateNode.nextSibling) : null;
        return !0
    }

    function $a() {
        Vt = ue = null, wt = !1
    }

    function Id() {
        var t = pi;
        return t !== null && (ge === null ? ge = t : ge.push.apply(ge, t), pi = null), t
    }

    function ts(t) {
        pi === null ? pi = [t] : pi.push(t)
    }
    var cu = G(null),
        gi = null,
        mn = null;

    function Dn(t, n, a) {
        Z(cu, n._currentValue), n._currentValue = a
    }

    function pn(t) {
        t._currentValue = cu.current, F(cu)
    }

    function fu(t, n, a) {
        for (; t !== null;) {
            var l = t.alternate;
            if ((t.childLanes & n) !== n ? (t.childLanes |= n, l !== null && (l.childLanes |= n)) : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n), t === a) break;
            t = t.return
        }
    }

    function hu(t, n, a, l) {
        var o = t.child;
        for (o !== null && (o.return = t); o !== null;) {
            var h = o.dependencies;
            if (h !== null) {
                var g = o.child;
                h = h.firstContext;
                t: for (; h !== null;) {
                    var b = h;
                    h = o;
                    for (var T = 0; T < n.length; T++)
                        if (b.context === n[T]) {
                            h.lanes |= a, b = h.alternate, b !== null && (b.lanes |= a), fu(h.return, a, t), l || (g = null);
                            break t
                        }
                    h = b.next
                }
            } else if (o.tag === 18) {
                if (g = o.return, g === null) throw Error(r(341));
                g.lanes |= a, h = g.alternate, h !== null && (h.lanes |= a), fu(g, a, t), g = null
            } else g = o.child;
            if (g !== null) g.return = o;
            else
                for (g = o; g !== null;) {
                    if (g === t) {
                        g = null;
                        break
                    }
                    if (o = g.sibling, o !== null) {
                        o.return = g.return, g = o;
                        break
                    }
                    g = g.return
                }
            o = g
        }
    }

    function es(t, n, a, l) {
        t = null;
        for (var o = n, h = !1; o !== null;) {
            if (!h) {
                if ((o.flags & 524288) !== 0) h = !0;
                else if ((o.flags & 262144) !== 0) break
            }
            if (o.tag === 10) {
                var g = o.alternate;
                if (g === null) throw Error(r(387));
                if (g = g.memoizedProps, g !== null) {
                    var b = o.type;
                    xe(o.pendingProps.value, g.value) || (t !== null ? t.push(b) : t = [b])
                }
            } else if (o === ve.current) {
                if (g = o.alternate, g === null) throw Error(r(387));
                g.memoizedState.memoizedState !== o.memoizedState.memoizedState && (t !== null ? t.push(Ds) : t = [Ds])
            }
            o = o.return
        }
        t !== null && hu(n, t, a, l), n.flags |= 262144
    }

    function jr(t) {
        for (t = t.firstContext; t !== null;) {
            if (!xe(t.context._currentValue, t.memoizedValue)) return !0;
            t = t.next
        }
        return !1
    }

    function vi(t) {
        gi = t, mn = null, t = t.dependencies, t !== null && (t.firstContext = null)
    }

    function re(t) {
        return Jd(gi, t)
    }

    function Ur(t, n) {
        return gi === null && vi(t), Jd(t, n)
    }

    function Jd(t, n) {
        var a = n._currentValue;
        if (n = {
                context: n,
                memoizedValue: a,
                next: null
            }, mn === null) {
            if (t === null) throw Error(r(308));
            mn = n, t.dependencies = {
                lanes: 0,
                firstContext: n
            }, t.flags |= 524288
        } else mn = mn.next = n;
        return a
    }
    var LS = typeof AbortController < "u" ? AbortController : function() {
            var t = [],
                n = this.signal = {
                    aborted: !1,
                    addEventListener: function(a, l) {
                        t.push(l)
                    }
                };
            this.abort = function() {
                n.aborted = !0, t.forEach(function(a) {
                    return a()
                })
            }
        },
        BS = e.unstable_scheduleCallback,
        HS = e.unstable_NormalPriority,
        Qt = {
            $$typeof: B,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function du() {
        return {
            controller: new LS,
            data: new Map,
            refCount: 0
        }
    }

    function ns(t) {
        t.refCount--, t.refCount === 0 && BS(HS, function() {
            t.controller.abort()
        })
    }
    var is = null,
        mu = 0,
        ea = 0,
        na = null;

    function qS(t, n) {
        if (is === null) {
            var a = is = [];
            mu = 0, ea = yc(), na = {
                status: "pending",
                value: void 0,
                then: function(l) {
                    a.push(l)
                }
            }
        }
        return mu++, n.then(Wd, Wd), n
    }

    function Wd() {
        if (--mu === 0 && is !== null) {
            na !== null && (na.status = "fulfilled");
            var t = is;
            is = null, ea = 0, na = null;
            for (var n = 0; n < t.length; n++)(0, t[n])()
        }
    }

    function PS(t, n) {
        var a = [],
            l = {
                status: "pending",
                value: null,
                reason: null,
                then: function(o) {
                    a.push(o)
                }
            };
        return t.then(function() {
            l.status = "fulfilled", l.value = n;
            for (var o = 0; o < a.length; o++)(0, a[o])(n)
        }, function(o) {
            for (l.status = "rejected", l.reason = o, o = 0; o < a.length; o++)(0, a[o])(void 0)
        }), l
    }
    var $d = z.S;
    z.S = function(t, n) {
        typeof n == "object" && n !== null && typeof n.then == "function" && qS(t, n), $d !== null && $d(t, n)
    };
    var bi = G(null);

    function pu() {
        var t = bi.current;
        return t !== null ? t : jt.pooledCache
    }

    function zr(t, n) {
        n === null ? Z(bi, bi.current) : Z(bi, n.pool)
    }

    function tm() {
        var t = pu();
        return t === null ? null : {
            parent: Qt._currentValue,
            pool: t
        }
    }
    var as = Error(r(460)),
        em = Error(r(474)),
        kr = Error(r(542)),
        yu = {
            then: function() {}
        };

    function nm(t) {
        return t = t.status, t === "fulfilled" || t === "rejected"
    }

    function Vr() {}

    function im(t, n, a) {
        switch (a = t[a], a === void 0 ? t.push(n) : a !== n && (n.then(Vr, Vr), n = a), n.status) {
            case "fulfilled":
                return n.value;
            case "rejected":
                throw t = n.reason, sm(t), t;
            default:
                if (typeof n.status == "string") n.then(Vr, Vr);
                else {
                    if (t = jt, t !== null && 100 < t.shellSuspendCounter) throw Error(r(482));
                    t = n, t.status = "pending", t.then(function(l) {
                        if (n.status === "pending") {
                            var o = n;
                            o.status = "fulfilled", o.value = l
                        }
                    }, function(l) {
                        if (n.status === "pending") {
                            var o = n;
                            o.status = "rejected", o.reason = l
                        }
                    })
                }
                switch (n.status) {
                    case "fulfilled":
                        return n.value;
                    case "rejected":
                        throw t = n.reason, sm(t), t
                }
                throw ss = n, as
        }
    }
    var ss = null;

    function am() {
        if (ss === null) throw Error(r(459));
        var t = ss;
        return ss = null, t
    }

    function sm(t) {
        if (t === as || t === kr) throw Error(r(483))
    }
    var Nn = !1;

    function gu(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function vu(t, n) {
        t = t.updateQueue, n.updateQueue === t && (n.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }

    function jn(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function Un(t, n, a) {
        var l = t.updateQueue;
        if (l === null) return null;
        if (l = l.shared, (Et & 2) !== 0) {
            var o = l.pending;
            return o === null ? n.next = n : (n.next = o.next, o.next = n), l.pending = n, n = Cr(t), Qd(t, null, a), n
        }
        return Or(t, l, n, a), Cr(t)
    }

    function rs(t, n, a) {
        if (n = n.updateQueue, n !== null && (n = n.shared, (a & 4194048) !== 0)) {
            var l = n.lanes;
            l &= t.pendingLanes, a |= l, n.lanes = a, Wh(t, a)
        }
    }

    function bu(t, n) {
        var a = t.updateQueue,
            l = t.alternate;
        if (l !== null && (l = l.updateQueue, a === l)) {
            var o = null,
                h = null;
            if (a = a.firstBaseUpdate, a !== null) {
                do {
                    var g = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null
                    };
                    h === null ? o = h = g : h = h.next = g, a = a.next
                } while (a !== null);
                h === null ? o = h = n : h = h.next = n
            } else o = h = n;
            a = {
                baseState: l.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: h,
                shared: l.shared,
                callbacks: l.callbacks
            }, t.updateQueue = a;
            return
        }
        t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = n : t.next = n, a.lastBaseUpdate = n
    }
    var Su = !1;

    function ls() {
        if (Su) {
            var t = na;
            if (t !== null) throw t
        }
    }

    function os(t, n, a, l) {
        Su = !1;
        var o = t.updateQueue;
        Nn = !1;
        var h = o.firstBaseUpdate,
            g = o.lastBaseUpdate,
            b = o.shared.pending;
        if (b !== null) {
            o.shared.pending = null;
            var T = b,
                N = T.next;
            T.next = null, g === null ? h = N : g.next = N, g = T;
            var L = t.alternate;
            L !== null && (L = L.updateQueue, b = L.lastBaseUpdate, b !== g && (b === null ? L.firstBaseUpdate = N : b.next = N, L.lastBaseUpdate = T))
        }
        if (h !== null) {
            var P = o.baseState;
            g = 0, L = N = T = null, b = h;
            do {
                var j = b.lane & -536870913,
                    U = j !== b.lane;
                if (U ? (St & j) === j : (l & j) === j) {
                    j !== 0 && j === ea && (Su = !0), L !== null && (L = L.next = {
                        lane: 0,
                        tag: b.tag,
                        payload: b.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var rt = t,
                            at = b;j = n;
                        var Ct = a;
                        switch (at.tag) {
                            case 1:
                                if (rt = at.payload, typeof rt == "function") {
                                    P = rt.call(Ct, P, j);
                                    break t
                                }
                                P = rt;
                                break t;
                            case 3:
                                rt.flags = rt.flags & -65537 | 128;
                            case 0:
                                if (rt = at.payload, j = typeof rt == "function" ? rt.call(Ct, P, j) : rt, j == null) break t;
                                P = y({}, P, j);
                                break t;
                            case 2:
                                Nn = !0
                        }
                    }
                    j = b.callback, j !== null && (t.flags |= 64, U && (t.flags |= 8192), U = o.callbacks, U === null ? o.callbacks = [j] : U.push(j))
                } else U = {
                    lane: j,
                    tag: b.tag,
                    payload: b.payload,
                    callback: b.callback,
                    next: null
                }, L === null ? (N = L = U, T = P) : L = L.next = U, g |= j;
                if (b = b.next, b === null) {
                    if (b = o.shared.pending, b === null) break;
                    U = b, b = U.next, U.next = null, o.lastBaseUpdate = U, o.shared.pending = null
                }
            } while (!0);
            L === null && (T = P), o.baseState = T, o.firstBaseUpdate = N, o.lastBaseUpdate = L, h === null && (o.shared.lanes = 0), qn |= g, t.lanes = g, t.memoizedState = P
        }
    }

    function rm(t, n) {
        if (typeof t != "function") throw Error(r(191, t));
        t.call(n)
    }

    function lm(t, n) {
        var a = t.callbacks;
        if (a !== null)
            for (t.callbacks = null, t = 0; t < a.length; t++) rm(a[t], n)
    }
    var ia = G(null),
        _r = G(0);

    function om(t, n) {
        t = Tn, Z(_r, t), Z(ia, n), Tn = t | n.baseLanes
    }

    function xu() {
        Z(_r, Tn), Z(ia, ia.current)
    }

    function Tu() {
        Tn = _r.current, F(ia), F(_r)
    }
    var zn = 0,
        ht = null,
        Rt = null,
        Pt = null,
        Lr = !1,
        aa = !1,
        Si = !1,
        Br = 0,
        us = 0,
        sa = null,
        GS = 0;

    function Ht() {
        throw Error(r(321))
    }

    function wu(t, n) {
        if (n === null) return !1;
        for (var a = 0; a < n.length && a < t.length; a++)
            if (!xe(t[a], n[a])) return !1;
        return !0
    }

    function Eu(t, n, a, l, o, h) {
        return zn = h, ht = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, z.H = t === null || t.memoizedState === null ? Qm : Ym, Si = !1, h = a(l, o), Si = !1, aa && (h = cm(n, a, l, o)), um(t), h
    }

    function um(t) {
        z.H = Qr;
        var n = Rt !== null && Rt.next !== null;
        if (zn = 0, Pt = Rt = ht = null, Lr = !1, us = 0, sa = null, n) throw Error(r(300));
        t === null || It || (t = t.dependencies, t !== null && jr(t) && (It = !0))
    }

    function cm(t, n, a, l) {
        ht = t;
        var o = 0;
        do {
            if (aa && (sa = null), us = 0, aa = !1, 25 <= o) throw Error(r(301));
            if (o += 1, Pt = Rt = null, t.updateQueue != null) {
                var h = t.updateQueue;
                h.lastEffect = null, h.events = null, h.stores = null, h.memoCache != null && (h.memoCache.index = 0)
            }
            z.H = IS, h = n(a, l)
        } while (aa);
        return h
    }

    function KS() {
        var t = z.H,
            n = t.useState()[0];
        return n = typeof n.then == "function" ? cs(n) : n, t = t.useState()[0], (Rt !== null ? Rt.memoizedState : null) !== t && (ht.flags |= 1024), n
    }

    function Au() {
        var t = Br !== 0;
        return Br = 0, t
    }

    function Ru(t, n, a) {
        n.updateQueue = t.updateQueue, n.flags &= -2053, t.lanes &= ~a
    }

    function Ou(t) {
        if (Lr) {
            for (t = t.memoizedState; t !== null;) {
                var n = t.queue;
                n !== null && (n.pending = null), t = t.next
            }
            Lr = !1
        }
        zn = 0, Pt = Rt = ht = null, aa = !1, us = Br = 0, sa = null
    }

    function pe() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Pt === null ? ht.memoizedState = Pt = t : Pt = Pt.next = t, Pt
    }

    function Gt() {
        if (Rt === null) {
            var t = ht.alternate;
            t = t !== null ? t.memoizedState : null
        } else t = Rt.next;
        var n = Pt === null ? ht.memoizedState : Pt.next;
        if (n !== null) Pt = n, Rt = t;
        else {
            if (t === null) throw ht.alternate === null ? Error(r(467)) : Error(r(310));
            Rt = t, t = {
                memoizedState: Rt.memoizedState,
                baseState: Rt.baseState,
                baseQueue: Rt.baseQueue,
                queue: Rt.queue,
                next: null
            }, Pt === null ? ht.memoizedState = Pt = t : Pt = Pt.next = t
        }
        return Pt
    }

    function Cu() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }

    function cs(t) {
        var n = us;
        return us += 1, sa === null && (sa = []), t = im(sa, t, n), n = ht, (Pt === null ? n.memoizedState : Pt.next) === null && (n = n.alternate, z.H = n === null || n.memoizedState === null ? Qm : Ym), t
    }

    function Hr(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function") return cs(t);
            if (t.$$typeof === B) return re(t)
        }
        throw Error(r(438, String(t)))
    }

    function Mu(t) {
        var n = null,
            a = ht.updateQueue;
        if (a !== null && (n = a.memoCache), n == null) {
            var l = ht.alternate;
            l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (n = {
                data: l.data.map(function(o) {
                    return o.slice()
                }),
                index: 0
            })))
        }
        if (n == null && (n = {
                data: [],
                index: 0
            }), a === null && (a = Cu(), ht.updateQueue = a), a.memoCache = n, a = n.data[n.index], a === void 0)
            for (a = n.data[n.index] = Array(t), l = 0; l < t; l++) a[l] = J;
        return n.index++, a
    }

    function yn(t, n) {
        return typeof n == "function" ? n(t) : n
    }

    function qr(t) {
        var n = Gt();
        return Du(n, Rt, t)
    }

    function Du(t, n, a) {
        var l = t.queue;
        if (l === null) throw Error(r(311));
        l.lastRenderedReducer = a;
        var o = t.baseQueue,
            h = l.pending;
        if (h !== null) {
            if (o !== null) {
                var g = o.next;
                o.next = h.next, h.next = g
            }
            n.baseQueue = o = h, l.pending = null
        }
        if (h = t.baseState, o === null) t.memoizedState = h;
        else {
            n = o.next;
            var b = g = null,
                T = null,
                N = n,
                L = !1;
            do {
                var P = N.lane & -536870913;
                if (P !== N.lane ? (St & P) === P : (zn & P) === P) {
                    var j = N.revertLane;
                    if (j === 0) T !== null && (T = T.next = {
                        lane: 0,
                        revertLane: 0,
                        action: N.action,
                        hasEagerState: N.hasEagerState,
                        eagerState: N.eagerState,
                        next: null
                    }), P === ea && (L = !0);
                    else if ((zn & j) === j) {
                        N = N.next, j === ea && (L = !0);
                        continue
                    } else P = {
                        lane: 0,
                        revertLane: N.revertLane,
                        action: N.action,
                        hasEagerState: N.hasEagerState,
                        eagerState: N.eagerState,
                        next: null
                    }, T === null ? (b = T = P, g = h) : T = T.next = P, ht.lanes |= j, qn |= j;
                    P = N.action, Si && a(h, P), h = N.hasEagerState ? N.eagerState : a(h, P)
                } else j = {
                    lane: P,
                    revertLane: N.revertLane,
                    action: N.action,
                    hasEagerState: N.hasEagerState,
                    eagerState: N.eagerState,
                    next: null
                }, T === null ? (b = T = j, g = h) : T = T.next = j, ht.lanes |= P, qn |= P;
                N = N.next
            } while (N !== null && N !== n);
            if (T === null ? g = h : T.next = b, !xe(h, t.memoizedState) && (It = !0, L && (a = na, a !== null))) throw a;
            t.memoizedState = h, t.baseState = g, t.baseQueue = T, l.lastRenderedState = h
        }
        return o === null && (l.lanes = 0), [t.memoizedState, l.dispatch]
    }

    function Nu(t) {
        var n = Gt(),
            a = n.queue;
        if (a === null) throw Error(r(311));
        a.lastRenderedReducer = t;
        var l = a.dispatch,
            o = a.pending,
            h = n.memoizedState;
        if (o !== null) {
            a.pending = null;
            var g = o = o.next;
            do h = t(h, g.action), g = g.next; while (g !== o);
            xe(h, n.memoizedState) || (It = !0), n.memoizedState = h, n.baseQueue === null && (n.baseState = h), a.lastRenderedState = h
        }
        return [h, l]
    }

    function fm(t, n, a) {
        var l = ht,
            o = Gt(),
            h = wt;
        if (h) {
            if (a === void 0) throw Error(r(407));
            a = a()
        } else a = n();
        var g = !xe((Rt || o).memoizedState, a);
        g && (o.memoizedState = a, It = !0), o = o.queue;
        var b = mm.bind(null, l, o, t);
        if (fs(2048, 8, b, [t]), o.getSnapshot !== n || g || Pt !== null && Pt.memoizedState.tag & 1) {
            if (l.flags |= 2048, ra(9, Pr(), dm.bind(null, l, o, a, n), null), jt === null) throw Error(r(349));
            h || (zn & 124) !== 0 || hm(l, n, a)
        }
        return a
    }

    function hm(t, n, a) {
        t.flags |= 16384, t = {
            getSnapshot: n,
            value: a
        }, n = ht.updateQueue, n === null ? (n = Cu(), ht.updateQueue = n, n.stores = [t]) : (a = n.stores, a === null ? n.stores = [t] : a.push(t))
    }

    function dm(t, n, a, l) {
        n.value = a, n.getSnapshot = l, pm(n) && ym(t)
    }

    function mm(t, n, a) {
        return a(function() {
            pm(n) && ym(t)
        })
    }

    function pm(t) {
        var n = t.getSnapshot;
        t = t.value;
        try {
            var a = n();
            return !xe(t, a)
        } catch {
            return !0
        }
    }

    function ym(t) {
        var n = Ji(t, 2);
        n !== null && Oe(n, t, 2)
    }

    function ju(t) {
        var n = pe();
        if (typeof t == "function") {
            var a = t;
            if (t = a(), Si) {
                On(!0);
                try {
                    a()
                } finally {
                    On(!1)
                }
            }
        }
        return n.memoizedState = n.baseState = t, n.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: yn,
            lastRenderedState: t
        }, n
    }

    function gm(t, n, a, l) {
        return t.baseState = a, Du(t, Rt, typeof l == "function" ? l : yn)
    }

    function QS(t, n, a, l, o) {
        if (Kr(t)) throw Error(r(485));
        if (t = n.action, t !== null) {
            var h = {
                payload: o,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(g) {
                    h.listeners.push(g)
                }
            };
            z.T !== null ? a(!0) : h.isTransition = !1, l(h), a = n.pending, a === null ? (h.next = n.pending = h, vm(n, h)) : (h.next = a.next, n.pending = a.next = h)
        }
    }

    function vm(t, n) {
        var a = n.action,
            l = n.payload,
            o = t.state;
        if (n.isTransition) {
            var h = z.T,
                g = {};
            z.T = g;
            try {
                var b = a(o, l),
                    T = z.S;
                T !== null && T(g, b), bm(t, n, b)
            } catch (N) {
                Uu(t, n, N)
            } finally {
                z.T = h
            }
        } else try {
            h = a(o, l), bm(t, n, h)
        } catch (N) {
            Uu(t, n, N)
        }
    }

    function bm(t, n, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(l) {
            Sm(t, n, l)
        }, function(l) {
            return Uu(t, n, l)
        }) : Sm(t, n, a)
    }

    function Sm(t, n, a) {
        n.status = "fulfilled", n.value = a, xm(n), t.state = a, n = t.pending, n !== null && (a = n.next, a === n ? t.pending = null : (a = a.next, n.next = a, vm(t, a)))
    }

    function Uu(t, n, a) {
        var l = t.pending;
        if (t.pending = null, l !== null) {
            l = l.next;
            do n.status = "rejected", n.reason = a, xm(n), n = n.next; while (n !== l)
        }
        t.action = null
    }

    function xm(t) {
        t = t.listeners;
        for (var n = 0; n < t.length; n++)(0, t[n])()
    }

    function Tm(t, n) {
        return n
    }

    function wm(t, n) {
        if (wt) {
            var a = jt.formState;
            if (a !== null) {
                t: {
                    var l = ht;
                    if (wt) {
                        if (Vt) {
                            e: {
                                for (var o = Vt, h = Je; o.nodeType !== 8;) {
                                    if (!h) {
                                        o = null;
                                        break e
                                    }
                                    if (o = Ke(o.nextSibling), o === null) {
                                        o = null;
                                        break e
                                    }
                                }
                                h = o.data,
                                o = h === "F!" || h === "F" ? o : null
                            }
                            if (o) {
                                Vt = Ke(o.nextSibling), l = o.data === "F!";
                                break t
                            }
                        }
                        yi(l)
                    }
                    l = !1
                }
                l && (n = a[0])
            }
        }
        return a = pe(), a.memoizedState = a.baseState = n, l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Tm,
            lastRenderedState: n
        }, a.queue = l, a = Pm.bind(null, ht, l), l.dispatch = a, l = ju(!1), h = Lu.bind(null, ht, !1, l.queue), l = pe(), o = {
            state: n,
            dispatch: null,
            action: t,
            pending: null
        }, l.queue = o, a = QS.bind(null, ht, o, h, a), o.dispatch = a, l.memoizedState = t, [n, a, !1]
    }

    function Em(t) {
        var n = Gt();
        return Am(n, Rt, t)
    }

    function Am(t, n, a) {
        if (n = Du(t, n, Tm)[0], t = qr(yn)[0], typeof n == "object" && n !== null && typeof n.then == "function") try {
            var l = cs(n)
        } catch (g) {
            throw g === as ? kr : g
        } else l = n;
        n = Gt();
        var o = n.queue,
            h = o.dispatch;
        return a !== n.memoizedState && (ht.flags |= 2048, ra(9, Pr(), YS.bind(null, o, a), null)), [l, h, t]
    }

    function YS(t, n) {
        t.action = n
    }

    function Rm(t) {
        var n = Gt(),
            a = Rt;
        if (a !== null) return Am(n, a, t);
        Gt(), n = n.memoizedState, a = Gt();
        var l = a.queue.dispatch;
        return a.memoizedState = t, [n, l, !1]
    }

    function ra(t, n, a, l) {
        return t = {
            tag: t,
            create: a,
            deps: l,
            inst: n,
            next: null
        }, n = ht.updateQueue, n === null && (n = Cu(), ht.updateQueue = n), a = n.lastEffect, a === null ? n.lastEffect = t.next = t : (l = a.next, a.next = t, t.next = l, n.lastEffect = t), t
    }

    function Pr() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }

    function Om() {
        return Gt().memoizedState
    }

    function Gr(t, n, a, l) {
        var o = pe();
        l = l === void 0 ? null : l, ht.flags |= t, o.memoizedState = ra(1 | n, Pr(), a, l)
    }

    function fs(t, n, a, l) {
        var o = Gt();
        l = l === void 0 ? null : l;
        var h = o.memoizedState.inst;
        Rt !== null && l !== null && wu(l, Rt.memoizedState.deps) ? o.memoizedState = ra(n, h, a, l) : (ht.flags |= t, o.memoizedState = ra(1 | n, h, a, l))
    }

    function Cm(t, n) {
        Gr(8390656, 8, t, n)
    }

    function Mm(t, n) {
        fs(2048, 8, t, n)
    }

    function Dm(t, n) {
        return fs(4, 2, t, n)
    }

    function Nm(t, n) {
        return fs(4, 4, t, n)
    }

    function jm(t, n) {
        if (typeof n == "function") {
            t = t();
            var a = n(t);
            return function() {
                typeof a == "function" ? a() : n(null)
            }
        }
        if (n != null) return t = t(), n.current = t,
            function() {
                n.current = null
            }
    }

    function Um(t, n, a) {
        a = a != null ? a.concat([t]) : null, fs(4, 4, jm.bind(null, n, t), a)
    }

    function zu() {}

    function zm(t, n) {
        var a = Gt();
        n = n === void 0 ? null : n;
        var l = a.memoizedState;
        return n !== null && wu(n, l[1]) ? l[0] : (a.memoizedState = [t, n], t)
    }

    function km(t, n) {
        var a = Gt();
        n = n === void 0 ? null : n;
        var l = a.memoizedState;
        if (n !== null && wu(n, l[1])) return l[0];
        if (l = t(), Si) {
            On(!0);
            try {
                t()
            } finally {
                On(!1)
            }
        }
        return a.memoizedState = [l, n], l
    }

    function ku(t, n, a) {
        return a === void 0 || (zn & 1073741824) !== 0 ? t.memoizedState = n : (t.memoizedState = a, t = Lp(), ht.lanes |= t, qn |= t, a)
    }

    function Vm(t, n, a, l) {
        return xe(a, n) ? a : ia.current !== null ? (t = ku(t, a, l), xe(t, n) || (It = !0), t) : (zn & 42) === 0 ? (It = !0, t.memoizedState = a) : (t = Lp(), ht.lanes |= t, qn |= t, n)
    }

    function _m(t, n, a, l, o) {
        var h = X.p;
        X.p = h !== 0 && 8 > h ? h : 8;
        var g = z.T,
            b = {};
        z.T = b, Lu(t, !1, n, a);
        try {
            var T = o(),
                N = z.S;
            if (N !== null && N(b, T), T !== null && typeof T == "object" && typeof T.then == "function") {
                var L = PS(T, l);
                hs(t, n, L, Re(t))
            } else hs(t, n, l, Re(t))
        } catch (P) {
            hs(t, n, {
                then: function() {},
                status: "rejected",
                reason: P
            }, Re())
        } finally {
            X.p = h, z.T = g
        }
    }

    function XS() {}

    function Vu(t, n, a, l) {
        if (t.tag !== 5) throw Error(r(476));
        var o = Lm(t).queue;
        _m(t, o, n, I, a === null ? XS : function() {
            return Bm(t), a(l)
        })
    }

    function Lm(t) {
        var n = t.memoizedState;
        if (n !== null) return n;
        n = {
            memoizedState: I,
            baseState: I,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: yn,
                lastRenderedState: I
            },
            next: null
        };
        var a = {};
        return n.next = {
            memoizedState: a,
            baseState: a,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: yn,
                lastRenderedState: a
            },
            next: null
        }, t.memoizedState = n, t = t.alternate, t !== null && (t.memoizedState = n), n
    }

    function Bm(t) {
        var n = Lm(t).next.queue;
        hs(t, n, {}, Re())
    }

    function _u() {
        return re(Ds)
    }

    function Hm() {
        return Gt().memoizedState
    }

    function qm() {
        return Gt().memoizedState
    }

    function ZS(t) {
        for (var n = t.return; n !== null;) {
            switch (n.tag) {
                case 24:
                case 3:
                    var a = Re();
                    t = jn(a);
                    var l = Un(n, t, a);
                    l !== null && (Oe(l, n, a), rs(l, n, a)), n = {
                        cache: du()
                    }, t.payload = n;
                    return
            }
            n = n.return
        }
    }

    function FS(t, n, a) {
        var l = Re();
        a = {
            lane: l,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Kr(t) ? Gm(n, a) : (a = iu(t, n, a, l), a !== null && (Oe(a, t, l), Km(a, n, l)))
    }

    function Pm(t, n, a) {
        var l = Re();
        hs(t, n, a, l)
    }

    function hs(t, n, a, l) {
        var o = {
            lane: l,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Kr(t)) Gm(n, o);
        else {
            var h = t.alternate;
            if (t.lanes === 0 && (h === null || h.lanes === 0) && (h = n.lastRenderedReducer, h !== null)) try {
                var g = n.lastRenderedState,
                    b = h(g, a);
                if (o.hasEagerState = !0, o.eagerState = b, xe(b, g)) return Or(t, n, o, 0), jt === null && Rr(), !1
            } catch {}
            if (a = iu(t, n, o, l), a !== null) return Oe(a, t, l), Km(a, n, l), !0
        }
        return !1
    }

    function Lu(t, n, a, l) {
        if (l = {
                lane: 2,
                revertLane: yc(),
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Kr(t)) {
            if (n) throw Error(r(479))
        } else n = iu(t, a, l, 2), n !== null && Oe(n, t, 2)
    }

    function Kr(t) {
        var n = t.alternate;
        return t === ht || n !== null && n === ht
    }

    function Gm(t, n) {
        aa = Lr = !0;
        var a = t.pending;
        a === null ? n.next = n : (n.next = a.next, a.next = n), t.pending = n
    }

    function Km(t, n, a) {
        if ((a & 4194048) !== 0) {
            var l = n.lanes;
            l &= t.pendingLanes, a |= l, n.lanes = a, Wh(t, a)
        }
    }
    var Qr = {
            readContext: re,
            use: Hr,
            useCallback: Ht,
            useContext: Ht,
            useEffect: Ht,
            useImperativeHandle: Ht,
            useLayoutEffect: Ht,
            useInsertionEffect: Ht,
            useMemo: Ht,
            useReducer: Ht,
            useRef: Ht,
            useState: Ht,
            useDebugValue: Ht,
            useDeferredValue: Ht,
            useTransition: Ht,
            useSyncExternalStore: Ht,
            useId: Ht,
            useHostTransitionStatus: Ht,
            useFormState: Ht,
            useActionState: Ht,
            useOptimistic: Ht,
            useMemoCache: Ht,
            useCacheRefresh: Ht
        },
        Qm = {
            readContext: re,
            use: Hr,
            useCallback: function(t, n) {
                return pe().memoizedState = [t, n === void 0 ? null : n], t
            },
            useContext: re,
            useEffect: Cm,
            useImperativeHandle: function(t, n, a) {
                a = a != null ? a.concat([t]) : null, Gr(4194308, 4, jm.bind(null, n, t), a)
            },
            useLayoutEffect: function(t, n) {
                return Gr(4194308, 4, t, n)
            },
            useInsertionEffect: function(t, n) {
                Gr(4, 2, t, n)
            },
            useMemo: function(t, n) {
                var a = pe();
                n = n === void 0 ? null : n;
                var l = t();
                if (Si) {
                    On(!0);
                    try {
                        t()
                    } finally {
                        On(!1)
                    }
                }
                return a.memoizedState = [l, n], l
            },
            useReducer: function(t, n, a) {
                var l = pe();
                if (a !== void 0) {
                    var o = a(n);
                    if (Si) {
                        On(!0);
                        try {
                            a(n)
                        } finally {
                            On(!1)
                        }
                    }
                } else o = n;
                return l.memoizedState = l.baseState = o, t = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: t,
                    lastRenderedState: o
                }, l.queue = t, t = t.dispatch = FS.bind(null, ht, t), [l.memoizedState, t]
            },
            useRef: function(t) {
                var n = pe();
                return t = {
                    current: t
                }, n.memoizedState = t
            },
            useState: function(t) {
                t = ju(t);
                var n = t.queue,
                    a = Pm.bind(null, ht, n);
                return n.dispatch = a, [t.memoizedState, a]
            },
            useDebugValue: zu,
            useDeferredValue: function(t, n) {
                var a = pe();
                return ku(a, t, n)
            },
            useTransition: function() {
                var t = ju(!1);
                return t = _m.bind(null, ht, t.queue, !0, !1), pe().memoizedState = t, [!1, t]
            },
            useSyncExternalStore: function(t, n, a) {
                var l = ht,
                    o = pe();
                if (wt) {
                    if (a === void 0) throw Error(r(407));
                    a = a()
                } else {
                    if (a = n(), jt === null) throw Error(r(349));
                    (St & 124) !== 0 || hm(l, n, a)
                }
                o.memoizedState = a;
                var h = {
                    value: a,
                    getSnapshot: n
                };
                return o.queue = h, Cm(mm.bind(null, l, h, t), [t]), l.flags |= 2048, ra(9, Pr(), dm.bind(null, l, h, a, n), null), a
            },
            useId: function() {
                var t = pe(),
                    n = jt.identifierPrefix;
                if (wt) {
                    var a = dn,
                        l = hn;
                    a = (l & ~(1 << 32 - Se(l) - 1)).toString(32) + a, n = "«" + n + "R" + a, a = Br++, 0 < a && (n += "H" + a.toString(32)), n += "»"
                } else a = GS++, n = "«" + n + "r" + a.toString(32) + "»";
                return t.memoizedState = n
            },
            useHostTransitionStatus: _u,
            useFormState: wm,
            useActionState: wm,
            useOptimistic: function(t) {
                var n = pe();
                n.memoizedState = n.baseState = t;
                var a = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return n.queue = a, n = Lu.bind(null, ht, !0, a), a.dispatch = n, [t, n]
            },
            useMemoCache: Mu,
            useCacheRefresh: function() {
                return pe().memoizedState = ZS.bind(null, ht)
            }
        },
        Ym = {
            readContext: re,
            use: Hr,
            useCallback: zm,
            useContext: re,
            useEffect: Mm,
            useImperativeHandle: Um,
            useInsertionEffect: Dm,
            useLayoutEffect: Nm,
            useMemo: km,
            useReducer: qr,
            useRef: Om,
            useState: function() {
                return qr(yn)
            },
            useDebugValue: zu,
            useDeferredValue: function(t, n) {
                var a = Gt();
                return Vm(a, Rt.memoizedState, t, n)
            },
            useTransition: function() {
                var t = qr(yn)[0],
                    n = Gt().memoizedState;
                return [typeof t == "boolean" ? t : cs(t), n]
            },
            useSyncExternalStore: fm,
            useId: Hm,
            useHostTransitionStatus: _u,
            useFormState: Em,
            useActionState: Em,
            useOptimistic: function(t, n) {
                var a = Gt();
                return gm(a, Rt, t, n)
            },
            useMemoCache: Mu,
            useCacheRefresh: qm
        },
        IS = {
            readContext: re,
            use: Hr,
            useCallback: zm,
            useContext: re,
            useEffect: Mm,
            useImperativeHandle: Um,
            useInsertionEffect: Dm,
            useLayoutEffect: Nm,
            useMemo: km,
            useReducer: Nu,
            useRef: Om,
            useState: function() {
                return Nu(yn)
            },
            useDebugValue: zu,
            useDeferredValue: function(t, n) {
                var a = Gt();
                return Rt === null ? ku(a, t, n) : Vm(a, Rt.memoizedState, t, n)
            },
            useTransition: function() {
                var t = Nu(yn)[0],
                    n = Gt().memoizedState;
                return [typeof t == "boolean" ? t : cs(t), n]
            },
            useSyncExternalStore: fm,
            useId: Hm,
            useHostTransitionStatus: _u,
            useFormState: Rm,
            useActionState: Rm,
            useOptimistic: function(t, n) {
                var a = Gt();
                return Rt !== null ? gm(a, Rt, t, n) : (a.baseState = t, [t, a.queue.dispatch])
            },
            useMemoCache: Mu,
            useCacheRefresh: qm
        },
        la = null,
        ds = 0;

    function Yr(t) {
        var n = ds;
        return ds += 1, la === null && (la = []), im(la, t, n)
    }

    function ms(t, n) {
        n = n.props.ref, t.ref = n !== void 0 ? n : null
    }

    function Xr(t, n) {
        throw n.$$typeof === v ? Error(r(525)) : (t = Object.prototype.toString.call(n), Error(r(31, t === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : t)))
    }

    function Xm(t) {
        var n = t._init;
        return n(t._payload)
    }

    function Zm(t) {
        function n(O, A) {
            if (t) {
                var M = O.deletions;
                M === null ? (O.deletions = [A], O.flags |= 16) : M.push(A)
            }
        }

        function a(O, A) {
            if (!t) return null;
            for (; A !== null;) n(O, A), A = A.sibling;
            return null
        }

        function l(O) {
            for (var A = new Map; O !== null;) O.key !== null ? A.set(O.key, O) : A.set(O.index, O), O = O.sibling;
            return A
        }

        function o(O, A) {
            return O = fn(O, A), O.index = 0, O.sibling = null, O
        }

        function h(O, A, M) {
            return O.index = M, t ? (M = O.alternate, M !== null ? (M = M.index, M < A ? (O.flags |= 67108866, A) : M) : (O.flags |= 67108866, A)) : (O.flags |= 1048576, A)
        }

        function g(O) {
            return t && O.alternate === null && (O.flags |= 67108866), O
        }

        function b(O, A, M, H) {
            return A === null || A.tag !== 6 ? (A = su(M, O.mode, H), A.return = O, A) : (A = o(A, M), A.return = O, A)
        }

        function T(O, A, M, H) {
            var W = M.type;
            return W === w ? L(O, A, M.props.children, H, M.key) : A !== null && (A.elementType === W || typeof W == "object" && W !== null && W.$$typeof === Y && Xm(W) === A.type) ? (A = o(A, M.props), ms(A, M), A.return = O, A) : (A = Mr(M.type, M.key, M.props, null, O.mode, H), ms(A, M), A.return = O, A)
        }

        function N(O, A, M, H) {
            return A === null || A.tag !== 4 || A.stateNode.containerInfo !== M.containerInfo || A.stateNode.implementation !== M.implementation ? (A = ru(M, O.mode, H), A.return = O, A) : (A = o(A, M.children || []), A.return = O, A)
        }

        function L(O, A, M, H, W) {
            return A === null || A.tag !== 7 ? (A = hi(M, O.mode, H, W), A.return = O, A) : (A = o(A, M), A.return = O, A)
        }

        function P(O, A, M) {
            if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint") return A = su("" + A, O.mode, M), A.return = O, A;
            if (typeof A == "object" && A !== null) {
                switch (A.$$typeof) {
                    case S:
                        return M = Mr(A.type, A.key, A.props, null, O.mode, M), ms(M, A), M.return = O, M;
                    case R:
                        return A = ru(A, O.mode, M), A.return = O, A;
                    case Y:
                        var H = A._init;
                        return A = H(A._payload), P(O, A, M)
                }
                if (vt(A) || ut(A)) return A = hi(A, O.mode, M, null), A.return = O, A;
                if (typeof A.then == "function") return P(O, Yr(A), M);
                if (A.$$typeof === B) return P(O, Ur(O, A), M);
                Xr(O, A)
            }
            return null
        }

        function j(O, A, M, H) {
            var W = A !== null ? A.key : null;
            if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint") return W !== null ? null : b(O, A, "" + M, H);
            if (typeof M == "object" && M !== null) {
                switch (M.$$typeof) {
                    case S:
                        return M.key === W ? T(O, A, M, H) : null;
                    case R:
                        return M.key === W ? N(O, A, M, H) : null;
                    case Y:
                        return W = M._init, M = W(M._payload), j(O, A, M, H)
                }
                if (vt(M) || ut(M)) return W !== null ? null : L(O, A, M, H, null);
                if (typeof M.then == "function") return j(O, A, Yr(M), H);
                if (M.$$typeof === B) return j(O, A, Ur(O, M), H);
                Xr(O, M)
            }
            return null
        }

        function U(O, A, M, H, W) {
            if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint") return O = O.get(M) || null, b(A, O, "" + H, W);
            if (typeof H == "object" && H !== null) {
                switch (H.$$typeof) {
                    case S:
                        return O = O.get(H.key === null ? M : H.key) || null, T(A, O, H, W);
                    case R:
                        return O = O.get(H.key === null ? M : H.key) || null, N(A, O, H, W);
                    case Y:
                        var dt = H._init;
                        return H = dt(H._payload), U(O, A, M, H, W)
                }
                if (vt(H) || ut(H)) return O = O.get(M) || null, L(A, O, H, W, null);
                if (typeof H.then == "function") return U(O, A, M, Yr(H), W);
                if (H.$$typeof === B) return U(O, A, M, Ur(A, H), W);
                Xr(A, H)
            }
            return null
        }

        function rt(O, A, M, H) {
            for (var W = null, dt = null, nt = A, st = A = 0, Wt = null; nt !== null && st < M.length; st++) {
                nt.index > st ? (Wt = nt, nt = null) : Wt = nt.sibling;
                var Tt = j(O, nt, M[st], H);
                if (Tt === null) {
                    nt === null && (nt = Wt);
                    break
                }
                t && nt && Tt.alternate === null && n(O, nt), A = h(Tt, A, st), dt === null ? W = Tt : dt.sibling = Tt, dt = Tt, nt = Wt
            }
            if (st === M.length) return a(O, nt), wt && mi(O, st), W;
            if (nt === null) {
                for (; st < M.length; st++) nt = P(O, M[st], H), nt !== null && (A = h(nt, A, st), dt === null ? W = nt : dt.sibling = nt, dt = nt);
                return wt && mi(O, st), W
            }
            for (nt = l(nt); st < M.length; st++) Wt = U(nt, O, st, M[st], H), Wt !== null && (t && Wt.alternate !== null && nt.delete(Wt.key === null ? st : Wt.key), A = h(Wt, A, st), dt === null ? W = Wt : dt.sibling = Wt, dt = Wt);
            return t && nt.forEach(function(In) {
                return n(O, In)
            }), wt && mi(O, st), W
        }

        function at(O, A, M, H) {
            if (M == null) throw Error(r(151));
            for (var W = null, dt = null, nt = A, st = A = 0, Wt = null, Tt = M.next(); nt !== null && !Tt.done; st++, Tt = M.next()) {
                nt.index > st ? (Wt = nt, nt = null) : Wt = nt.sibling;
                var In = j(O, nt, Tt.value, H);
                if (In === null) {
                    nt === null && (nt = Wt);
                    break
                }
                t && nt && In.alternate === null && n(O, nt), A = h(In, A, st), dt === null ? W = In : dt.sibling = In, dt = In, nt = Wt
            }
            if (Tt.done) return a(O, nt), wt && mi(O, st), W;
            if (nt === null) {
                for (; !Tt.done; st++, Tt = M.next()) Tt = P(O, Tt.value, H), Tt !== null && (A = h(Tt, A, st), dt === null ? W = Tt : dt.sibling = Tt, dt = Tt);
                return wt && mi(O, st), W
            }
            for (nt = l(nt); !Tt.done; st++, Tt = M.next()) Tt = U(nt, O, st, Tt.value, H), Tt !== null && (t && Tt.alternate !== null && nt.delete(Tt.key === null ? st : Tt.key), A = h(Tt, A, st), dt === null ? W = Tt : dt.sibling = Tt, dt = Tt);
            return t && nt.forEach(function(Jx) {
                return n(O, Jx)
            }), wt && mi(O, st), W
        }

        function Ct(O, A, M, H) {
            if (typeof M == "object" && M !== null && M.type === w && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
                switch (M.$$typeof) {
                    case S:
                        t: {
                            for (var W = M.key; A !== null;) {
                                if (A.key === W) {
                                    if (W = M.type, W === w) {
                                        if (A.tag === 7) {
                                            a(O, A.sibling), H = o(A, M.props.children), H.return = O, O = H;
                                            break t
                                        }
                                    } else if (A.elementType === W || typeof W == "object" && W !== null && W.$$typeof === Y && Xm(W) === A.type) {
                                        a(O, A.sibling), H = o(A, M.props), ms(H, M), H.return = O, O = H;
                                        break t
                                    }
                                    a(O, A);
                                    break
                                } else n(O, A);
                                A = A.sibling
                            }
                            M.type === w ? (H = hi(M.props.children, O.mode, H, M.key), H.return = O, O = H) : (H = Mr(M.type, M.key, M.props, null, O.mode, H), ms(H, M), H.return = O, O = H)
                        }
                        return g(O);
                    case R:
                        t: {
                            for (W = M.key; A !== null;) {
                                if (A.key === W)
                                    if (A.tag === 4 && A.stateNode.containerInfo === M.containerInfo && A.stateNode.implementation === M.implementation) {
                                        a(O, A.sibling), H = o(A, M.children || []), H.return = O, O = H;
                                        break t
                                    } else {
                                        a(O, A);
                                        break
                                    }
                                else n(O, A);
                                A = A.sibling
                            }
                            H = ru(M, O.mode, H),
                            H.return = O,
                            O = H
                        }
                        return g(O);
                    case Y:
                        return W = M._init, M = W(M._payload), Ct(O, A, M, H)
                }
                if (vt(M)) return rt(O, A, M, H);
                if (ut(M)) {
                    if (W = ut(M), typeof W != "function") throw Error(r(150));
                    return M = W.call(M), at(O, A, M, H)
                }
                if (typeof M.then == "function") return Ct(O, A, Yr(M), H);
                if (M.$$typeof === B) return Ct(O, A, Ur(O, M), H);
                Xr(O, M)
            }
            return typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint" ? (M = "" + M, A !== null && A.tag === 6 ? (a(O, A.sibling), H = o(A, M), H.return = O, O = H) : (a(O, A), H = su(M, O.mode, H), H.return = O, O = H), g(O)) : a(O, A)
        }
        return function(O, A, M, H) {
            try {
                ds = 0;
                var W = Ct(O, A, M, H);
                return la = null, W
            } catch (nt) {
                if (nt === as || nt === kr) throw nt;
                var dt = Te(29, nt, null, O.mode);
                return dt.lanes = H, dt.return = O, dt
            }
        }
    }
    var oa = Zm(!0),
        Fm = Zm(!1),
        _e = G(null),
        We = null;

    function kn(t) {
        var n = t.alternate;
        Z(Yt, Yt.current & 1), Z(_e, t), We === null && (n === null || ia.current !== null || n.memoizedState !== null) && (We = t)
    }

    function Im(t) {
        if (t.tag === 22) {
            if (Z(Yt, Yt.current), Z(_e, t), We === null) {
                var n = t.alternate;
                n !== null && n.memoizedState !== null && (We = t)
            }
        } else Vn()
    }

    function Vn() {
        Z(Yt, Yt.current), Z(_e, _e.current)
    }

    function gn(t) {
        F(_e), We === t && (We = null), F(Yt)
    }
    var Yt = G(0);

    function Zr(t) {
        for (var n = t; n !== null;) {
            if (n.tag === 13) {
                var a = n.memoizedState;
                if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || Cc(a))) return n
            } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
                if ((n.flags & 128) !== 0) return n
            } else if (n.child !== null) {
                n.child.return = n, n = n.child;
                continue
            }
            if (n === t) break;
            for (; n.sibling === null;) {
                if (n.return === null || n.return === t) return null;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
        return null
    }

    function Bu(t, n, a, l) {
        n = t.memoizedState, a = a(l, n), a = a == null ? n : y({}, n, a), t.memoizedState = a, t.lanes === 0 && (t.updateQueue.baseState = a)
    }
    var Hu = {
        enqueueSetState: function(t, n, a) {
            t = t._reactInternals;
            var l = Re(),
                o = jn(l);
            o.payload = n, a != null && (o.callback = a), n = Un(t, o, l), n !== null && (Oe(n, t, l), rs(n, t, l))
        },
        enqueueReplaceState: function(t, n, a) {
            t = t._reactInternals;
            var l = Re(),
                o = jn(l);
            o.tag = 1, o.payload = n, a != null && (o.callback = a), n = Un(t, o, l), n !== null && (Oe(n, t, l), rs(n, t, l))
        },
        enqueueForceUpdate: function(t, n) {
            t = t._reactInternals;
            var a = Re(),
                l = jn(a);
            l.tag = 2, n != null && (l.callback = n), n = Un(t, l, a), n !== null && (Oe(n, t, a), rs(n, t, a))
        }
    };

    function Jm(t, n, a, l, o, h, g) {
        return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, h, g) : n.prototype && n.prototype.isPureReactComponent ? !Ia(a, l) || !Ia(o, h) : !0
    }

    function Wm(t, n, a, l) {
        t = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(a, l), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(a, l), n.state !== t && Hu.enqueueReplaceState(n, n.state, null)
    }

    function xi(t, n) {
        var a = n;
        if ("ref" in n) {
            a = {};
            for (var l in n) l !== "ref" && (a[l] = n[l])
        }
        if (t = t.defaultProps) {
            a === n && (a = y({}, a));
            for (var o in t) a[o] === void 0 && (a[o] = t[o])
        }
        return a
    }
    var Fr = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var n = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t
            });
            if (!window.dispatchEvent(n)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return
        }
        console.error(t)
    };

    function $m(t) {
        Fr(t)
    }

    function tp(t) {
        console.error(t)
    }

    function ep(t) {
        Fr(t)
    }

    function Ir(t, n) {
        try {
            var a = t.onUncaughtError;
            a(n.value, {
                componentStack: n.stack
            })
        } catch (l) {
            setTimeout(function() {
                throw l
            })
        }
    }

    function np(t, n, a) {
        try {
            var l = t.onCaughtError;
            l(a.value, {
                componentStack: a.stack,
                errorBoundary: n.tag === 1 ? n.stateNode : null
            })
        } catch (o) {
            setTimeout(function() {
                throw o
            })
        }
    }

    function qu(t, n, a) {
        return a = jn(a), a.tag = 3, a.payload = {
            element: null
        }, a.callback = function() {
            Ir(t, n)
        }, a
    }

    function ip(t) {
        return t = jn(t), t.tag = 3, t
    }

    function ap(t, n, a, l) {
        var o = a.type.getDerivedStateFromError;
        if (typeof o == "function") {
            var h = l.value;
            t.payload = function() {
                return o(h)
            }, t.callback = function() {
                np(n, a, l)
            }
        }
        var g = a.stateNode;
        g !== null && typeof g.componentDidCatch == "function" && (t.callback = function() {
            np(n, a, l), typeof o != "function" && (Pn === null ? Pn = new Set([this]) : Pn.add(this));
            var b = l.stack;
            this.componentDidCatch(l.value, {
                componentStack: b !== null ? b : ""
            })
        })
    }

    function JS(t, n, a, l, o) {
        if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
            if (n = a.alternate, n !== null && es(n, a, o, !0), a = _e.current, a !== null) {
                switch (a.tag) {
                    case 13:
                        return We === null ? fc() : a.alternate === null && _t === 0 && (_t = 3), a.flags &= -257, a.flags |= 65536, a.lanes = o, l === yu ? a.flags |= 16384 : (n = a.updateQueue, n === null ? a.updateQueue = new Set([l]) : n.add(l), dc(t, l, o)), !1;
                    case 22:
                        return a.flags |= 65536, l === yu ? a.flags |= 16384 : (n = a.updateQueue, n === null ? (n = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([l])
                        }, a.updateQueue = n) : (a = n.retryQueue, a === null ? n.retryQueue = new Set([l]) : a.add(l)), dc(t, l, o)), !1
                }
                throw Error(r(435, a.tag))
            }
            return dc(t, l, o), fc(), !1
        }
        if (wt) return n = _e.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = o, l !== uu && (t = Error(r(422), {
            cause: l
        }), ts(Ue(t, a)))) : (l !== uu && (n = Error(r(423), {
            cause: l
        }), ts(Ue(n, a))), t = t.current.alternate, t.flags |= 65536, o &= -o, t.lanes |= o, l = Ue(l, a), o = qu(t.stateNode, l, o), bu(t, o), _t !== 4 && (_t = 2)), !1;
        var h = Error(r(520), {
            cause: l
        });
        if (h = Ue(h, a), xs === null ? xs = [h] : xs.push(h), _t !== 4 && (_t = 2), n === null) return !0;
        l = Ue(l, a), a = n;
        do {
            switch (a.tag) {
                case 3:
                    return a.flags |= 65536, t = o & -o, a.lanes |= t, t = qu(a.stateNode, l, t), bu(a, t), !1;
                case 1:
                    if (n = a.type, h = a.stateNode, (a.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Pn === null || !Pn.has(h)))) return a.flags |= 65536, o &= -o, a.lanes |= o, o = ip(o), ap(o, t, a, l), bu(a, o), !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var sp = Error(r(461)),
        It = !1;

    function $t(t, n, a, l) {
        n.child = t === null ? Fm(n, null, a, l) : oa(n, t.child, a, l)
    }

    function rp(t, n, a, l, o) {
        a = a.render;
        var h = n.ref;
        if ("ref" in l) {
            var g = {};
            for (var b in l) b !== "ref" && (g[b] = l[b])
        } else g = l;
        return vi(n), l = Eu(t, n, a, g, h, o), b = Au(), t !== null && !It ? (Ru(t, n, o), vn(t, n, o)) : (wt && b && lu(n), n.flags |= 1, $t(t, n, l, o), n.child)
    }

    function lp(t, n, a, l, o) {
        if (t === null) {
            var h = a.type;
            return typeof h == "function" && !au(h) && h.defaultProps === void 0 && a.compare === null ? (n.tag = 15, n.type = h, op(t, n, h, l, o)) : (t = Mr(a.type, null, l, n, n.mode, o), t.ref = n.ref, t.return = n, n.child = t)
        }
        if (h = t.child, !Fu(t, o)) {
            var g = h.memoizedProps;
            if (a = a.compare, a = a !== null ? a : Ia, a(g, l) && t.ref === n.ref) return vn(t, n, o)
        }
        return n.flags |= 1, t = fn(h, l), t.ref = n.ref, t.return = n, n.child = t
    }

    function op(t, n, a, l, o) {
        if (t !== null) {
            var h = t.memoizedProps;
            if (Ia(h, l) && t.ref === n.ref)
                if (It = !1, n.pendingProps = l = h, Fu(t, o))(t.flags & 131072) !== 0 && (It = !0);
                else return n.lanes = t.lanes, vn(t, n, o)
        }
        return Pu(t, n, a, l, o)
    }

    function up(t, n, a) {
        var l = n.pendingProps,
            o = l.children,
            h = t !== null ? t.memoizedState : null;
        if (l.mode === "hidden") {
            if ((n.flags & 128) !== 0) {
                if (l = h !== null ? h.baseLanes | a : a, t !== null) {
                    for (o = n.child = t.child, h = 0; o !== null;) h = h | o.lanes | o.childLanes, o = o.sibling;
                    n.childLanes = h & ~l
                } else n.childLanes = 0, n.child = null;
                return cp(t, n, l, a)
            }
            if ((a & 536870912) !== 0) n.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, t !== null && zr(n, h !== null ? h.cachePool : null), h !== null ? om(n, h) : xu(), Im(n);
            else return n.lanes = n.childLanes = 536870912, cp(t, n, h !== null ? h.baseLanes | a : a, a)
        } else h !== null ? (zr(n, h.cachePool), om(n, h), Vn(), n.memoizedState = null) : (t !== null && zr(n, null), xu(), Vn());
        return $t(t, n, o, a), n.child
    }

    function cp(t, n, a, l) {
        var o = pu();
        return o = o === null ? null : {
            parent: Qt._currentValue,
            pool: o
        }, n.memoizedState = {
            baseLanes: a,
            cachePool: o
        }, t !== null && zr(n, null), xu(), Im(n), t !== null && es(t, n, l, !0), null
    }

    function Jr(t, n) {
        var a = n.ref;
        if (a === null) t !== null && t.ref !== null && (n.flags |= 4194816);
        else {
            if (typeof a != "function" && typeof a != "object") throw Error(r(284));
            (t === null || t.ref !== a) && (n.flags |= 4194816)
        }
    }

    function Pu(t, n, a, l, o) {
        return vi(n), a = Eu(t, n, a, l, void 0, o), l = Au(), t !== null && !It ? (Ru(t, n, o), vn(t, n, o)) : (wt && l && lu(n), n.flags |= 1, $t(t, n, a, o), n.child)
    }

    function fp(t, n, a, l, o, h) {
        return vi(n), n.updateQueue = null, a = cm(n, l, a, o), um(t), l = Au(), t !== null && !It ? (Ru(t, n, h), vn(t, n, h)) : (wt && l && lu(n), n.flags |= 1, $t(t, n, a, h), n.child)
    }

    function hp(t, n, a, l, o) {
        if (vi(n), n.stateNode === null) {
            var h = Wi,
                g = a.contextType;
            typeof g == "object" && g !== null && (h = re(g)), h = new a(l, h), n.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, h.updater = Hu, n.stateNode = h, h._reactInternals = n, h = n.stateNode, h.props = l, h.state = n.memoizedState, h.refs = {}, gu(n), g = a.contextType, h.context = typeof g == "object" && g !== null ? re(g) : Wi, h.state = n.memoizedState, g = a.getDerivedStateFromProps, typeof g == "function" && (Bu(n, a, g, l), h.state = n.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (g = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), g !== h.state && Hu.enqueueReplaceState(h, h.state, null), os(n, l, h, o), ls(), h.state = n.memoizedState), typeof h.componentDidMount == "function" && (n.flags |= 4194308), l = !0
        } else if (t === null) {
            h = n.stateNode;
            var b = n.memoizedProps,
                T = xi(a, b);
            h.props = T;
            var N = h.context,
                L = a.contextType;
            g = Wi, typeof L == "object" && L !== null && (g = re(L));
            var P = a.getDerivedStateFromProps;
            L = typeof P == "function" || typeof h.getSnapshotBeforeUpdate == "function", b = n.pendingProps !== b, L || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (b || N !== g) && Wm(n, h, l, g), Nn = !1;
            var j = n.memoizedState;
            h.state = j, os(n, l, h, o), ls(), N = n.memoizedState, b || j !== N || Nn ? (typeof P == "function" && (Bu(n, a, P, l), N = n.memoizedState), (T = Nn || Jm(n, a, T, l, j, N, g)) ? (L || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = l, n.memoizedState = N), h.props = l, h.state = N, h.context = g, l = T) : (typeof h.componentDidMount == "function" && (n.flags |= 4194308), l = !1)
        } else {
            h = n.stateNode, vu(t, n), g = n.memoizedProps, L = xi(a, g), h.props = L, P = n.pendingProps, j = h.context, N = a.contextType, T = Wi, typeof N == "object" && N !== null && (T = re(N)), b = a.getDerivedStateFromProps, (N = typeof b == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (g !== P || j !== T) && Wm(n, h, l, T), Nn = !1, j = n.memoizedState, h.state = j, os(n, l, h, o), ls();
            var U = n.memoizedState;
            g !== P || j !== U || Nn || t !== null && t.dependencies !== null && jr(t.dependencies) ? (typeof b == "function" && (Bu(n, a, b, l), U = n.memoizedState), (L = Nn || Jm(n, a, L, l, j, U, T) || t !== null && t.dependencies !== null && jr(t.dependencies)) ? (N || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(l, U, T), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(l, U, T)), typeof h.componentDidUpdate == "function" && (n.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || g === t.memoizedProps && j === t.memoizedState || (n.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || g === t.memoizedProps && j === t.memoizedState || (n.flags |= 1024), n.memoizedProps = l, n.memoizedState = U), h.props = l, h.state = U, h.context = T, l = L) : (typeof h.componentDidUpdate != "function" || g === t.memoizedProps && j === t.memoizedState || (n.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || g === t.memoizedProps && j === t.memoizedState || (n.flags |= 1024), l = !1)
        }
        return h = l, Jr(t, n), l = (n.flags & 128) !== 0, h || l ? (h = n.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : h.render(), n.flags |= 1, t !== null && l ? (n.child = oa(n, t.child, null, o), n.child = oa(n, null, a, o)) : $t(t, n, a, o), n.memoizedState = h.state, t = n.child) : t = vn(t, n, o), t
    }

    function dp(t, n, a, l) {
        return $a(), n.flags |= 256, $t(t, n, a, l), n.child
    }
    var Gu = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function Ku(t) {
        return {
            baseLanes: t,
            cachePool: tm()
        }
    }

    function Qu(t, n, a) {
        return t = t !== null ? t.childLanes & ~a : 0, n && (t |= Le), t
    }

    function mp(t, n, a) {
        var l = n.pendingProps,
            o = !1,
            h = (n.flags & 128) !== 0,
            g;
        if ((g = h) || (g = t !== null && t.memoizedState === null ? !1 : (Yt.current & 2) !== 0), g && (o = !0, n.flags &= -129), g = (n.flags & 32) !== 0, n.flags &= -33, t === null) {
            if (wt) {
                if (o ? kn(n) : Vn(), wt) {
                    var b = Vt,
                        T;
                    if (T = b) {
                        t: {
                            for (T = b, b = Je; T.nodeType !== 8;) {
                                if (!b) {
                                    b = null;
                                    break t
                                }
                                if (T = Ke(T.nextSibling), T === null) {
                                    b = null;
                                    break t
                                }
                            }
                            b = T
                        }
                        b !== null ? (n.memoizedState = {
                            dehydrated: b,
                            treeContext: di !== null ? {
                                id: hn,
                                overflow: dn
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, T = Te(18, null, null, 0), T.stateNode = b, T.return = n, n.child = T, ue = n, Vt = null, T = !0) : T = !1
                    }
                    T || yi(n)
                }
                if (b = n.memoizedState, b !== null && (b = b.dehydrated, b !== null)) return Cc(b) ? n.lanes = 32 : n.lanes = 536870912, null;
                gn(n)
            }
            return b = l.children, l = l.fallback, o ? (Vn(), o = n.mode, b = Wr({
                mode: "hidden",
                children: b
            }, o), l = hi(l, o, a, null), b.return = n, l.return = n, b.sibling = l, n.child = b, o = n.child, o.memoizedState = Ku(a), o.childLanes = Qu(t, g, a), n.memoizedState = Gu, l) : (kn(n), Yu(n, b))
        }
        if (T = t.memoizedState, T !== null && (b = T.dehydrated, b !== null)) {
            if (h) n.flags & 256 ? (kn(n), n.flags &= -257, n = Xu(t, n, a)) : n.memoizedState !== null ? (Vn(), n.child = t.child, n.flags |= 128, n = null) : (Vn(), o = l.fallback, b = n.mode, l = Wr({
                mode: "visible",
                children: l.children
            }, b), o = hi(o, b, a, null), o.flags |= 2, l.return = n, o.return = n, l.sibling = o, n.child = l, oa(n, t.child, null, a), l = n.child, l.memoizedState = Ku(a), l.childLanes = Qu(t, g, a), n.memoizedState = Gu, n = o);
            else if (kn(n), Cc(b)) {
                if (g = b.nextSibling && b.nextSibling.dataset, g) var N = g.dgst;
                g = N, l = Error(r(419)), l.stack = "", l.digest = g, ts({
                    value: l,
                    source: null,
                    stack: null
                }), n = Xu(t, n, a)
            } else if (It || es(t, n, a, !1), g = (a & t.childLanes) !== 0, It || g) {
                if (g = jt, g !== null && (l = a & -a, l = (l & 42) !== 0 ? 1 : Mo(l), l = (l & (g.suspendedLanes | a)) !== 0 ? 0 : l, l !== 0 && l !== T.retryLane)) throw T.retryLane = l, Ji(t, l), Oe(g, t, l), sp;
                b.data === "$?" || fc(), n = Xu(t, n, a)
            } else b.data === "$?" ? (n.flags |= 192, n.child = t.child, n = null) : (t = T.treeContext, Vt = Ke(b.nextSibling), ue = n, wt = !0, pi = null, Je = !1, t !== null && (ke[Ve++] = hn, ke[Ve++] = dn, ke[Ve++] = di, hn = t.id, dn = t.overflow, di = n), n = Yu(n, l.children), n.flags |= 4096);
            return n
        }
        return o ? (Vn(), o = l.fallback, b = n.mode, T = t.child, N = T.sibling, l = fn(T, {
            mode: "hidden",
            children: l.children
        }), l.subtreeFlags = T.subtreeFlags & 65011712, N !== null ? o = fn(N, o) : (o = hi(o, b, a, null), o.flags |= 2), o.return = n, l.return = n, l.sibling = o, n.child = l, l = o, o = n.child, b = t.child.memoizedState, b === null ? b = Ku(a) : (T = b.cachePool, T !== null ? (N = Qt._currentValue, T = T.parent !== N ? {
            parent: N,
            pool: N
        } : T) : T = tm(), b = {
            baseLanes: b.baseLanes | a,
            cachePool: T
        }), o.memoizedState = b, o.childLanes = Qu(t, g, a), n.memoizedState = Gu, l) : (kn(n), a = t.child, t = a.sibling, a = fn(a, {
            mode: "visible",
            children: l.children
        }), a.return = n, a.sibling = null, t !== null && (g = n.deletions, g === null ? (n.deletions = [t], n.flags |= 16) : g.push(t)), n.child = a, n.memoizedState = null, a)
    }

    function Yu(t, n) {
        return n = Wr({
            mode: "visible",
            children: n
        }, t.mode), n.return = t, t.child = n
    }

    function Wr(t, n) {
        return t = Te(22, t, null, n), t.lanes = 0, t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }, t
    }

    function Xu(t, n, a) {
        return oa(n, t.child, null, a), t = Yu(n, n.pendingProps.children), t.flags |= 2, n.memoizedState = null, t
    }

    function pp(t, n, a) {
        t.lanes |= n;
        var l = t.alternate;
        l !== null && (l.lanes |= n), fu(t.return, n, a)
    }

    function Zu(t, n, a, l, o) {
        var h = t.memoizedState;
        h === null ? t.memoizedState = {
            isBackwards: n,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: a,
            tailMode: o
        } : (h.isBackwards = n, h.rendering = null, h.renderingStartTime = 0, h.last = l, h.tail = a, h.tailMode = o)
    }

    function yp(t, n, a) {
        var l = n.pendingProps,
            o = l.revealOrder,
            h = l.tail;
        if ($t(t, n, l.children, a), l = Yt.current, (l & 2) !== 0) l = l & 1 | 2, n.flags |= 128;
        else {
            if (t !== null && (t.flags & 128) !== 0) t: for (t = n.child; t !== null;) {
                if (t.tag === 13) t.memoizedState !== null && pp(t, a, n);
                else if (t.tag === 19) pp(t, a, n);
                else if (t.child !== null) {
                    t.child.return = t, t = t.child;
                    continue
                }
                if (t === n) break t;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === n) break t;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
            l &= 1
        }
        switch (Z(Yt, l), o) {
            case "forwards":
                for (a = n.child, o = null; a !== null;) t = a.alternate, t !== null && Zr(t) === null && (o = a), a = a.sibling;
                a = o, a === null ? (o = n.child, n.child = null) : (o = a.sibling, a.sibling = null), Zu(n, !1, o, a, h);
                break;
            case "backwards":
                for (a = null, o = n.child, n.child = null; o !== null;) {
                    if (t = o.alternate, t !== null && Zr(t) === null) {
                        n.child = o;
                        break
                    }
                    t = o.sibling, o.sibling = a, a = o, o = t
                }
                Zu(n, !0, a, null, h);
                break;
            case "together":
                Zu(n, !1, null, null, void 0);
                break;
            default:
                n.memoizedState = null
        }
        return n.child
    }

    function vn(t, n, a) {
        if (t !== null && (n.dependencies = t.dependencies), qn |= n.lanes, (a & n.childLanes) === 0)
            if (t !== null) {
                if (es(t, n, a, !1), (a & n.childLanes) === 0) return null
            } else return null;
        if (t !== null && n.child !== t.child) throw Error(r(153));
        if (n.child !== null) {
            for (t = n.child, a = fn(t, t.pendingProps), n.child = a, a.return = n; t.sibling !== null;) t = t.sibling, a = a.sibling = fn(t, t.pendingProps), a.return = n;
            a.sibling = null
        }
        return n.child
    }

    function Fu(t, n) {
        return (t.lanes & n) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && jr(t)))
    }

    function WS(t, n, a) {
        switch (n.tag) {
            case 3:
                Ut(n, n.stateNode.containerInfo), Dn(n, Qt, t.memoizedState.cache), $a();
                break;
            case 27:
            case 5:
                Eo(n);
                break;
            case 4:
                Ut(n, n.stateNode.containerInfo);
                break;
            case 10:
                Dn(n, n.type, n.memoizedProps.value);
                break;
            case 13:
                var l = n.memoizedState;
                if (l !== null) return l.dehydrated !== null ? (kn(n), n.flags |= 128, null) : (a & n.child.childLanes) !== 0 ? mp(t, n, a) : (kn(n), t = vn(t, n, a), t !== null ? t.sibling : null);
                kn(n);
                break;
            case 19:
                var o = (t.flags & 128) !== 0;
                if (l = (a & n.childLanes) !== 0, l || (es(t, n, a, !1), l = (a & n.childLanes) !== 0), o) {
                    if (l) return yp(t, n, a);
                    n.flags |= 128
                }
                if (o = n.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Z(Yt, Yt.current), l) break;
                return null;
            case 22:
            case 23:
                return n.lanes = 0, up(t, n, a);
            case 24:
                Dn(n, Qt, t.memoizedState.cache)
        }
        return vn(t, n, a)
    }

    function gp(t, n, a) {
        if (t !== null)
            if (t.memoizedProps !== n.pendingProps) It = !0;
            else {
                if (!Fu(t, a) && (n.flags & 128) === 0) return It = !1, WS(t, n, a);
                It = (t.flags & 131072) !== 0
            }
        else It = !1, wt && (n.flags & 1048576) !== 0 && Xd(n, Nr, n.index);
        switch (n.lanes = 0, n.tag) {
            case 16:
                t: {
                    t = n.pendingProps;
                    var l = n.elementType,
                        o = l._init;
                    if (l = o(l._payload), n.type = l, typeof l == "function") au(l) ? (t = xi(l, t), n.tag = 1, n = hp(null, n, l, t, a)) : (n.tag = 0, n = Pu(null, n, l, t, a));
                    else {
                        if (l != null) {
                            if (o = l.$$typeof, o === q) {
                                n.tag = 11, n = rp(null, n, l, t, a);
                                break t
                            } else if (o === tt) {
                                n.tag = 14, n = lp(null, n, l, t, a);
                                break t
                            }
                        }
                        throw n = gt(l) || l, Error(r(306, n, ""))
                    }
                }
                return n;
            case 0:
                return Pu(t, n, n.type, n.pendingProps, a);
            case 1:
                return l = n.type, o = xi(l, n.pendingProps), hp(t, n, l, o, a);
            case 3:
                t: {
                    if (Ut(n, n.stateNode.containerInfo), t === null) throw Error(r(387));l = n.pendingProps;
                    var h = n.memoizedState;o = h.element,
                    vu(t, n),
                    os(n, l, null, a);
                    var g = n.memoizedState;
                    if (l = g.cache, Dn(n, Qt, l), l !== h.cache && hu(n, [Qt], a, !0), ls(), l = g.element, h.isDehydrated)
                        if (h = {
                                element: l,
                                isDehydrated: !1,
                                cache: g.cache
                            }, n.updateQueue.baseState = h, n.memoizedState = h, n.flags & 256) {
                            n = dp(t, n, l, a);
                            break t
                        } else if (l !== o) {
                        o = Ue(Error(r(424)), n), ts(o), n = dp(t, n, l, a);
                        break t
                    } else
                        for (t = n.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Vt = Ke(t.firstChild), ue = n, wt = !0, pi = null, Je = !0, a = Fm(n, null, l, a), n.child = a; a;) a.flags = a.flags & -3 | 4096, a = a.sibling;
                    else {
                        if ($a(), l === o) {
                            n = vn(t, n, a);
                            break t
                        }
                        $t(t, n, l, a)
                    }
                    n = n.child
                }
                return n;
            case 26:
                return Jr(t, n), t === null ? (a = xy(n.type, null, n.pendingProps, null)) ? n.memoizedState = a : wt || (a = n.type, t = n.pendingProps, l = hl(lt.current).createElement(a), l[se] = n, l[de] = t, ee(l, a, t), Ft(l), n.stateNode = l) : n.memoizedState = xy(n.type, t.memoizedProps, n.pendingProps, t.memoizedState), null;
            case 27:
                return Eo(n), t === null && wt && (l = n.stateNode = vy(n.type, n.pendingProps, lt.current), ue = n, Je = !0, o = Vt, Qn(n.type) ? (Mc = o, Vt = Ke(l.firstChild)) : Vt = o), $t(t, n, n.pendingProps.children, a), Jr(t, n), t === null && (n.flags |= 4194304), n.child;
            case 5:
                return t === null && wt && ((o = l = Vt) && (l = Rx(l, n.type, n.pendingProps, Je), l !== null ? (n.stateNode = l, ue = n, Vt = Ke(l.firstChild), Je = !1, o = !0) : o = !1), o || yi(n)), Eo(n), o = n.type, h = n.pendingProps, g = t !== null ? t.memoizedProps : null, l = h.children, Ac(o, h) ? l = null : g !== null && Ac(o, g) && (n.flags |= 32), n.memoizedState !== null && (o = Eu(t, n, KS, null, null, a), Ds._currentValue = o), Jr(t, n), $t(t, n, l, a), n.child;
            case 6:
                return t === null && wt && ((t = a = Vt) && (a = Ox(a, n.pendingProps, Je), a !== null ? (n.stateNode = a, ue = n, Vt = null, t = !0) : t = !1), t || yi(n)), null;
            case 13:
                return mp(t, n, a);
            case 4:
                return Ut(n, n.stateNode.containerInfo), l = n.pendingProps, t === null ? n.child = oa(n, null, l, a) : $t(t, n, l, a), n.child;
            case 11:
                return rp(t, n, n.type, n.pendingProps, a);
            case 7:
                return $t(t, n, n.pendingProps, a), n.child;
            case 8:
                return $t(t, n, n.pendingProps.children, a), n.child;
            case 12:
                return $t(t, n, n.pendingProps.children, a), n.child;
            case 10:
                return l = n.pendingProps, Dn(n, n.type, l.value), $t(t, n, l.children, a), n.child;
            case 9:
                return o = n.type._context, l = n.pendingProps.children, vi(n), o = re(o), l = l(o), n.flags |= 1, $t(t, n, l, a), n.child;
            case 14:
                return lp(t, n, n.type, n.pendingProps, a);
            case 15:
                return op(t, n, n.type, n.pendingProps, a);
            case 19:
                return yp(t, n, a);
            case 31:
                return l = n.pendingProps, a = n.mode, l = {
                    mode: l.mode,
                    children: l.children
                }, t === null ? (a = Wr(l, a), a.ref = n.ref, n.child = a, a.return = n, n = a) : (a = fn(t.child, l), a.ref = n.ref, n.child = a, a.return = n, n = a), n;
            case 22:
                return up(t, n, a);
            case 24:
                return vi(n), l = re(Qt), t === null ? (o = pu(), o === null && (o = jt, h = du(), o.pooledCache = h, h.refCount++, h !== null && (o.pooledCacheLanes |= a), o = h), n.memoizedState = {
                    parent: l,
                    cache: o
                }, gu(n), Dn(n, Qt, o)) : ((t.lanes & a) !== 0 && (vu(t, n), os(n, null, null, a), ls()), o = t.memoizedState, h = n.memoizedState, o.parent !== l ? (o = {
                    parent: l,
                    cache: l
                }, n.memoizedState = o, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = o), Dn(n, Qt, l)) : (l = h.cache, Dn(n, Qt, l), l !== o.cache && hu(n, [Qt], a, !0))), $t(t, n, n.pendingProps.children, a), n.child;
            case 29:
                throw n.pendingProps
        }
        throw Error(r(156, n.tag))
    }

    function bn(t) {
        t.flags |= 4
    }

    function vp(t, n) {
        if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0) t.flags &= -16777217;
        else if (t.flags |= 16777216, !Ry(n)) {
            if (n = _e.current, n !== null && ((St & 4194048) === St ? We !== null : (St & 62914560) !== St && (St & 536870912) === 0 || n !== We)) throw ss = yu, em;
            t.flags |= 8192
        }
    }

    function $r(t, n) {
        n !== null && (t.flags |= 4), t.flags & 16384 && (n = t.tag !== 22 ? Ih() : 536870912, t.lanes |= n, ha |= n)
    }

    function ps(t, n) {
        if (!wt) switch (t.tailMode) {
            case "hidden":
                n = t.tail;
                for (var a = null; n !== null;) n.alternate !== null && (a = n), n = n.sibling;
                a === null ? t.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = t.tail;
                for (var l = null; a !== null;) a.alternate !== null && (l = a), a = a.sibling;
                l === null ? n || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null
        }
    }

    function kt(t) {
        var n = t.alternate !== null && t.alternate.child === t.child,
            a = 0,
            l = 0;
        if (n)
            for (var o = t.child; o !== null;) a |= o.lanes | o.childLanes, l |= o.subtreeFlags & 65011712, l |= o.flags & 65011712, o.return = t, o = o.sibling;
        else
            for (o = t.child; o !== null;) a |= o.lanes | o.childLanes, l |= o.subtreeFlags, l |= o.flags, o.return = t, o = o.sibling;
        return t.subtreeFlags |= l, t.childLanes = a, n
    }

    function $S(t, n, a) {
        var l = n.pendingProps;
        switch (ou(n), n.tag) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return kt(n), null;
            case 1:
                return kt(n), null;
            case 3:
                return a = n.stateNode, l = null, t !== null && (l = t.memoizedState.cache), n.memoizedState.cache !== l && (n.flags |= 2048), pn(Qt), Rn(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (Wa(n) ? bn(n) : t === null || t.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Id())), kt(n), null;
            case 26:
                return a = n.memoizedState, t === null ? (bn(n), a !== null ? (kt(n), vp(n, a)) : (kt(n), n.flags &= -16777217)) : a ? a !== t.memoizedState ? (bn(n), kt(n), vp(n, a)) : (kt(n), n.flags &= -16777217) : (t.memoizedProps !== l && bn(n), kt(n), n.flags &= -16777217), null;
            case 27:
                cr(n), a = lt.current;
                var o = n.type;
                if (t !== null && n.stateNode != null) t.memoizedProps !== l && bn(n);
                else {
                    if (!l) {
                        if (n.stateNode === null) throw Error(r(166));
                        return kt(n), null
                    }
                    t = it.current, Wa(n) ? Zd(n) : (t = vy(o, l, a), n.stateNode = t, bn(n))
                }
                return kt(n), null;
            case 5:
                if (cr(n), a = n.type, t !== null && n.stateNode != null) t.memoizedProps !== l && bn(n);
                else {
                    if (!l) {
                        if (n.stateNode === null) throw Error(r(166));
                        return kt(n), null
                    }
                    if (t = it.current, Wa(n)) Zd(n);
                    else {
                        switch (o = hl(lt.current), t) {
                            case 1:
                                t = o.createElementNS("http://www.w3.org/2000/svg", a);
                                break;
                            case 2:
                                t = o.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                                break;
                            default:
                                switch (a) {
                                    case "svg":
                                        t = o.createElementNS("http://www.w3.org/2000/svg", a);
                                        break;
                                    case "math":
                                        t = o.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                                        break;
                                    case "script":
                                        t = o.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                                        break;
                                    case "select":
                                        t = typeof l.is == "string" ? o.createElement("select", {
                                            is: l.is
                                        }) : o.createElement("select"), l.multiple ? t.multiple = !0 : l.size && (t.size = l.size);
                                        break;
                                    default:
                                        t = typeof l.is == "string" ? o.createElement(a, {
                                            is: l.is
                                        }) : o.createElement(a)
                                }
                        }
                        t[se] = n, t[de] = l;
                        t: for (o = n.child; o !== null;) {
                            if (o.tag === 5 || o.tag === 6) t.appendChild(o.stateNode);
                            else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                                o.child.return = o, o = o.child;
                                continue
                            }
                            if (o === n) break t;
                            for (; o.sibling === null;) {
                                if (o.return === null || o.return === n) break t;
                                o = o.return
                            }
                            o.sibling.return = o.return, o = o.sibling
                        }
                        n.stateNode = t;
                        t: switch (ee(t, a, l), a) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                t = !!l.autoFocus;
                                break t;
                            case "img":
                                t = !0;
                                break t;
                            default:
                                t = !1
                        }
                        t && bn(n)
                    }
                }
                return kt(n), n.flags &= -16777217, null;
            case 6:
                if (t && n.stateNode != null) t.memoizedProps !== l && bn(n);
                else {
                    if (typeof l != "string" && n.stateNode === null) throw Error(r(166));
                    if (t = lt.current, Wa(n)) {
                        if (t = n.stateNode, a = n.memoizedProps, l = null, o = ue, o !== null) switch (o.tag) {
                            case 27:
                            case 5:
                                l = o.memoizedProps
                        }
                        t[se] = n, t = !!(t.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || fy(t.nodeValue, a)), t || yi(n)
                    } else t = hl(t).createTextNode(l), t[se] = n, n.stateNode = t
                }
                return kt(n), null;
            case 13:
                if (l = n.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                    if (o = Wa(n), l !== null && l.dehydrated !== null) {
                        if (t === null) {
                            if (!o) throw Error(r(318));
                            if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(r(317));
                            o[se] = n
                        } else $a(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
                        kt(n), o = !1
                    } else o = Id(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = o), o = !0;
                    if (!o) return n.flags & 256 ? (gn(n), n) : (gn(n), null)
                }
                if (gn(n), (n.flags & 128) !== 0) return n.lanes = a, n;
                if (a = l !== null, t = t !== null && t.memoizedState !== null, a) {
                    l = n.child, o = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (o = l.alternate.memoizedState.cachePool.pool);
                    var h = null;
                    l.memoizedState !== null && l.memoizedState.cachePool !== null && (h = l.memoizedState.cachePool.pool), h !== o && (l.flags |= 2048)
                }
                return a !== t && a && (n.child.flags |= 8192), $r(n, n.updateQueue), kt(n), null;
            case 4:
                return Rn(), t === null && Sc(n.stateNode.containerInfo), kt(n), null;
            case 10:
                return pn(n.type), kt(n), null;
            case 19:
                if (F(Yt), o = n.memoizedState, o === null) return kt(n), null;
                if (l = (n.flags & 128) !== 0, h = o.rendering, h === null)
                    if (l) ps(o, !1);
                    else {
                        if (_t !== 0 || t !== null && (t.flags & 128) !== 0)
                            for (t = n.child; t !== null;) {
                                if (h = Zr(t), h !== null) {
                                    for (n.flags |= 128, ps(o, !1), t = h.updateQueue, n.updateQueue = t, $r(n, t), n.subtreeFlags = 0, t = a, a = n.child; a !== null;) Yd(a, t), a = a.sibling;
                                    return Z(Yt, Yt.current & 1 | 2), n.child
                                }
                                t = t.sibling
                            }
                        o.tail !== null && Ie() > nl && (n.flags |= 128, l = !0, ps(o, !1), n.lanes = 4194304)
                    }
                else {
                    if (!l)
                        if (t = Zr(h), t !== null) {
                            if (n.flags |= 128, l = !0, t = t.updateQueue, n.updateQueue = t, $r(n, t), ps(o, !0), o.tail === null && o.tailMode === "hidden" && !h.alternate && !wt) return kt(n), null
                        } else 2 * Ie() - o.renderingStartTime > nl && a !== 536870912 && (n.flags |= 128, l = !0, ps(o, !1), n.lanes = 4194304);
                    o.isBackwards ? (h.sibling = n.child, n.child = h) : (t = o.last, t !== null ? t.sibling = h : n.child = h, o.last = h)
                }
                return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = Ie(), n.sibling = null, t = Yt.current, Z(Yt, l ? t & 1 | 2 : t & 1), n) : (kt(n), null);
            case 22:
            case 23:
                return gn(n), Tu(), l = n.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (n.flags |= 8192) : l && (n.flags |= 8192), l ? (a & 536870912) !== 0 && (n.flags & 128) === 0 && (kt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : kt(n), a = n.updateQueue, a !== null && $r(n, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== a && (n.flags |= 2048), t !== null && F(bi), null;
            case 24:
                return a = null, t !== null && (a = t.memoizedState.cache), n.memoizedState.cache !== a && (n.flags |= 2048), pn(Qt), kt(n), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(r(156, n.tag))
    }

    function tx(t, n) {
        switch (ou(n), n.tag) {
            case 1:
                return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
            case 3:
                return pn(Qt), Rn(), t = n.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (n.flags = t & -65537 | 128, n) : null;
            case 26:
            case 27:
            case 5:
                return cr(n), null;
            case 13:
                if (gn(n), t = n.memoizedState, t !== null && t.dehydrated !== null) {
                    if (n.alternate === null) throw Error(r(340));
                    $a()
                }
                return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
            case 19:
                return F(Yt), null;
            case 4:
                return Rn(), null;
            case 10:
                return pn(n.type), null;
            case 22:
            case 23:
                return gn(n), Tu(), t !== null && F(bi), t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
            case 24:
                return pn(Qt), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function bp(t, n) {
        switch (ou(n), n.tag) {
            case 3:
                pn(Qt), Rn();
                break;
            case 26:
            case 27:
            case 5:
                cr(n);
                break;
            case 4:
                Rn();
                break;
            case 13:
                gn(n);
                break;
            case 19:
                F(Yt);
                break;
            case 10:
                pn(n.type);
                break;
            case 22:
            case 23:
                gn(n), Tu(), t !== null && F(bi);
                break;
            case 24:
                pn(Qt)
        }
    }

    function ys(t, n) {
        try {
            var a = n.updateQueue,
                l = a !== null ? a.lastEffect : null;
            if (l !== null) {
                var o = l.next;
                a = o;
                do {
                    if ((a.tag & t) === t) {
                        l = void 0;
                        var h = a.create,
                            g = a.inst;
                        l = h(), g.destroy = l
                    }
                    a = a.next
                } while (a !== o)
            }
        } catch (b) {
            Mt(n, n.return, b)
        }
    }

    function _n(t, n, a) {
        try {
            var l = n.updateQueue,
                o = l !== null ? l.lastEffect : null;
            if (o !== null) {
                var h = o.next;
                l = h;
                do {
                    if ((l.tag & t) === t) {
                        var g = l.inst,
                            b = g.destroy;
                        if (b !== void 0) {
                            g.destroy = void 0, o = n;
                            var T = a,
                                N = b;
                            try {
                                N()
                            } catch (L) {
                                Mt(o, T, L)
                            }
                        }
                    }
                    l = l.next
                } while (l !== h)
            }
        } catch (L) {
            Mt(n, n.return, L)
        }
    }

    function Sp(t) {
        var n = t.updateQueue;
        if (n !== null) {
            var a = t.stateNode;
            try {
                lm(n, a)
            } catch (l) {
                Mt(t, t.return, l)
            }
        }
    }

    function xp(t, n, a) {
        a.props = xi(t.type, t.memoizedProps), a.state = t.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (l) {
            Mt(t, n, l)
        }
    }

    function gs(t, n) {
        try {
            var a = t.ref;
            if (a !== null) {
                switch (t.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var l = t.stateNode;
                        break;
                    case 30:
                        l = t.stateNode;
                        break;
                    default:
                        l = t.stateNode
                }
                typeof a == "function" ? t.refCleanup = a(l) : a.current = l
            }
        } catch (o) {
            Mt(t, n, o)
        }
    }

    function $e(t, n) {
        var a = t.ref,
            l = t.refCleanup;
        if (a !== null)
            if (typeof l == "function") try {
                l()
            } catch (o) {
                Mt(t, n, o)
            } finally {
                t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null)
            } else if (typeof a == "function") try {
                a(null)
            } catch (o) {
                Mt(t, n, o)
            } else a.current = null
    }

    function Tp(t) {
        var n = t.type,
            a = t.memoizedProps,
            l = t.stateNode;
        try {
            t: switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    a.autoFocus && l.focus();
                    break t;
                case "img":
                    a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet)
            }
        }
        catch (o) {
            Mt(t, t.return, o)
        }
    }

    function Iu(t, n, a) {
        try {
            var l = t.stateNode;
            xx(l, t.type, a, n), l[de] = n
        } catch (o) {
            Mt(t, t.return, o)
        }
    }

    function wp(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Qn(t.type) || t.tag === 4
    }

    function Ju(t) {
        t: for (;;) {
            for (; t.sibling === null;) {
                if (t.return === null || wp(t.return)) return null;
                t = t.return
            }
            for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
                if (t.tag === 27 && Qn(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
                t.child.return = t, t = t.child
            }
            if (!(t.flags & 2)) return t.stateNode
        }
    }

    function Wu(t, n, a) {
        var l = t.tag;
        if (l === 5 || l === 6) t = t.stateNode, n ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, n) : (n = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, n.appendChild(t), a = a._reactRootContainer, a != null || n.onclick !== null || (n.onclick = fl));
        else if (l !== 4 && (l === 27 && Qn(t.type) && (a = t.stateNode, n = null), t = t.child, t !== null))
            for (Wu(t, n, a), t = t.sibling; t !== null;) Wu(t, n, a), t = t.sibling
    }

    function tl(t, n, a) {
        var l = t.tag;
        if (l === 5 || l === 6) t = t.stateNode, n ? a.insertBefore(t, n) : a.appendChild(t);
        else if (l !== 4 && (l === 27 && Qn(t.type) && (a = t.stateNode), t = t.child, t !== null))
            for (tl(t, n, a), t = t.sibling; t !== null;) tl(t, n, a), t = t.sibling
    }

    function Ep(t) {
        var n = t.stateNode,
            a = t.memoizedProps;
        try {
            for (var l = t.type, o = n.attributes; o.length;) n.removeAttributeNode(o[0]);
            ee(n, l, a), n[se] = t, n[de] = a
        } catch (h) {
            Mt(t, t.return, h)
        }
    }
    var Sn = !1,
        qt = !1,
        $u = !1,
        Ap = typeof WeakSet == "function" ? WeakSet : Set,
        Jt = null;

    function ex(t, n) {
        if (t = t.containerInfo, wc = vl, t = Vd(t), Jo(t)) {
            if ("selectionStart" in t) var a = {
                start: t.selectionStart,
                end: t.selectionEnd
            };
            else t: {
                a = (a = t.ownerDocument) && a.defaultView || window;
                var l = a.getSelection && a.getSelection();
                if (l && l.rangeCount !== 0) {
                    a = l.anchorNode;
                    var o = l.anchorOffset,
                        h = l.focusNode;
                    l = l.focusOffset;
                    try {
                        a.nodeType, h.nodeType
                    } catch {
                        a = null;
                        break t
                    }
                    var g = 0,
                        b = -1,
                        T = -1,
                        N = 0,
                        L = 0,
                        P = t,
                        j = null;
                    e: for (;;) {
                        for (var U; P !== a || o !== 0 && P.nodeType !== 3 || (b = g + o), P !== h || l !== 0 && P.nodeType !== 3 || (T = g + l), P.nodeType === 3 && (g += P.nodeValue.length), (U = P.firstChild) !== null;) j = P, P = U;
                        for (;;) {
                            if (P === t) break e;
                            if (j === a && ++N === o && (b = g), j === h && ++L === l && (T = g), (U = P.nextSibling) !== null) break;
                            P = j, j = P.parentNode
                        }
                        P = U
                    }
                    a = b === -1 || T === -1 ? null : {
                        start: b,
                        end: T
                    }
                } else a = null
            }
            a = a || {
                start: 0,
                end: 0
            }
        } else a = null;
        for (Ec = {
                focusedElem: t,
                selectionRange: a
            }, vl = !1, Jt = n; Jt !== null;)
            if (n = Jt, t = n.child, (n.subtreeFlags & 1024) !== 0 && t !== null) t.return = n, Jt = t;
            else
                for (; Jt !== null;) {
                    switch (n = Jt, h = n.alternate, t = n.flags, n.tag) {
                        case 0:
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((t & 1024) !== 0 && h !== null) {
                                t = void 0, a = n, o = h.memoizedProps, h = h.memoizedState, l = a.stateNode;
                                try {
                                    var rt = xi(a.type, o, a.elementType === a.type);
                                    t = l.getSnapshotBeforeUpdate(rt, h), l.__reactInternalSnapshotBeforeUpdate = t
                                } catch (at) {
                                    Mt(a, a.return, at)
                                }
                            }
                            break;
                        case 3:
                            if ((t & 1024) !== 0) {
                                if (t = n.stateNode.containerInfo, a = t.nodeType, a === 9) Oc(t);
                                else if (a === 1) switch (t.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        Oc(t);
                                        break;
                                    default:
                                        t.textContent = ""
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
                            if ((t & 1024) !== 0) throw Error(r(163))
                    }
                    if (t = n.sibling, t !== null) {
                        t.return = n.return, Jt = t;
                        break
                    }
                    Jt = n.return
                }
    }

    function Rp(t, n, a) {
        var l = a.flags;
        switch (a.tag) {
            case 0:
            case 11:
            case 15:
                Ln(t, a), l & 4 && ys(5, a);
                break;
            case 1:
                if (Ln(t, a), l & 4)
                    if (t = a.stateNode, n === null) try {
                        t.componentDidMount()
                    } catch (g) {
                        Mt(a, a.return, g)
                    } else {
                        var o = xi(a.type, n.memoizedProps);
                        n = n.memoizedState;
                        try {
                            t.componentDidUpdate(o, n, t.__reactInternalSnapshotBeforeUpdate)
                        } catch (g) {
                            Mt(a, a.return, g)
                        }
                    }
                l & 64 && Sp(a), l & 512 && gs(a, a.return);
                break;
            case 3:
                if (Ln(t, a), l & 64 && (t = a.updateQueue, t !== null)) {
                    if (n = null, a.child !== null) switch (a.child.tag) {
                        case 27:
                        case 5:
                            n = a.child.stateNode;
                            break;
                        case 1:
                            n = a.child.stateNode
                    }
                    try {
                        lm(t, n)
                    } catch (g) {
                        Mt(a, a.return, g)
                    }
                }
                break;
            case 27:
                n === null && l & 4 && Ep(a);
            case 26:
            case 5:
                Ln(t, a), n === null && l & 4 && Tp(a), l & 512 && gs(a, a.return);
                break;
            case 12:
                Ln(t, a);
                break;
            case 13:
                Ln(t, a), l & 4 && Mp(t, a), l & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (a = cx.bind(null, a), Cx(t, a))));
                break;
            case 22:
                if (l = a.memoizedState !== null || Sn, !l) {
                    n = n !== null && n.memoizedState !== null || qt, o = Sn;
                    var h = qt;
                    Sn = l, (qt = n) && !h ? Bn(t, a, (a.subtreeFlags & 8772) !== 0) : Ln(t, a), Sn = o, qt = h
                }
                break;
            case 30:
                break;
            default:
                Ln(t, a)
        }
    }

    function Op(t) {
        var n = t.alternate;
        n !== null && (t.alternate = null, Op(n)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (n = t.stateNode, n !== null && jo(n)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
    }
    var zt = null,
        ye = !1;

    function xn(t, n, a) {
        for (a = a.child; a !== null;) Cp(t, n, a), a = a.sibling
    }

    function Cp(t, n, a) {
        if (be && typeof be.onCommitFiberUnmount == "function") try {
            be.onCommitFiberUnmount(La, a)
        } catch {}
        switch (a.tag) {
            case 26:
                qt || $e(a, n), xn(t, n, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
                break;
            case 27:
                qt || $e(a, n);
                var l = zt,
                    o = ye;
                Qn(a.type) && (zt = a.stateNode, ye = !1), xn(t, n, a), Rs(a.stateNode), zt = l, ye = o;
                break;
            case 5:
                qt || $e(a, n);
            case 6:
                if (l = zt, o = ye, zt = null, xn(t, n, a), zt = l, ye = o, zt !== null)
                    if (ye) try {
                        (zt.nodeType === 9 ? zt.body : zt.nodeName === "HTML" ? zt.ownerDocument.body : zt).removeChild(a.stateNode)
                    } catch (h) {
                        Mt(a, n, h)
                    } else try {
                        zt.removeChild(a.stateNode)
                    } catch (h) {
                        Mt(a, n, h)
                    }
                break;
            case 18:
                zt !== null && (ye ? (t = zt, yy(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, a.stateNode), zs(t)) : yy(zt, a.stateNode));
                break;
            case 4:
                l = zt, o = ye, zt = a.stateNode.containerInfo, ye = !0, xn(t, n, a), zt = l, ye = o;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                qt || _n(2, a, n), qt || _n(4, a, n), xn(t, n, a);
                break;
            case 1:
                qt || ($e(a, n), l = a.stateNode, typeof l.componentWillUnmount == "function" && xp(a, n, l)), xn(t, n, a);
                break;
            case 21:
                xn(t, n, a);
                break;
            case 22:
                qt = (l = qt) || a.memoizedState !== null, xn(t, n, a), qt = l;
                break;
            default:
                xn(t, n, a)
        }
    }

    function Mp(t, n) {
        if (n.memoizedState === null && (t = n.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
            zs(t)
        } catch (a) {
            Mt(n, n.return, a)
        }
    }

    function nx(t) {
        switch (t.tag) {
            case 13:
            case 19:
                var n = t.stateNode;
                return n === null && (n = t.stateNode = new Ap), n;
            case 22:
                return t = t.stateNode, n = t._retryCache, n === null && (n = t._retryCache = new Ap), n;
            default:
                throw Error(r(435, t.tag))
        }
    }

    function tc(t, n) {
        var a = nx(t);
        n.forEach(function(l) {
            var o = fx.bind(null, t, l);
            a.has(l) || (a.add(l), l.then(o, o))
        })
    }

    function we(t, n) {
        var a = n.deletions;
        if (a !== null)
            for (var l = 0; l < a.length; l++) {
                var o = a[l],
                    h = t,
                    g = n,
                    b = g;
                t: for (; b !== null;) {
                    switch (b.tag) {
                        case 27:
                            if (Qn(b.type)) {
                                zt = b.stateNode, ye = !1;
                                break t
                            }
                            break;
                        case 5:
                            zt = b.stateNode, ye = !1;
                            break t;
                        case 3:
                        case 4:
                            zt = b.stateNode.containerInfo, ye = !0;
                            break t
                    }
                    b = b.return
                }
                if (zt === null) throw Error(r(160));
                Cp(h, g, o), zt = null, ye = !1, h = o.alternate, h !== null && (h.return = null), o.return = null
            }
        if (n.subtreeFlags & 13878)
            for (n = n.child; n !== null;) Dp(n, t), n = n.sibling
    }
    var Ge = null;

    function Dp(t, n) {
        var a = t.alternate,
            l = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                we(n, t), Ee(t), l & 4 && (_n(3, t, t.return), ys(3, t), _n(5, t, t.return));
                break;
            case 1:
                we(n, t), Ee(t), l & 512 && (qt || a === null || $e(a, a.return)), l & 64 && Sn && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (a = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
                break;
            case 26:
                var o = Ge;
                if (we(n, t), Ee(t), l & 512 && (qt || a === null || $e(a, a.return)), l & 4) {
                    var h = a !== null ? a.memoizedState : null;
                    if (l = t.memoizedState, a === null)
                        if (l === null)
                            if (t.stateNode === null) {
                                t: {
                                    l = t.type,
                                    a = t.memoizedProps,
                                    o = o.ownerDocument || o;e: switch (l) {
                                        case "title":
                                            h = o.getElementsByTagName("title")[0], (!h || h[qa] || h[se] || h.namespaceURI === "http://www.w3.org/2000/svg" || h.hasAttribute("itemprop")) && (h = o.createElement(l), o.head.insertBefore(h, o.querySelector("head > title"))), ee(h, l, a), h[se] = t, Ft(h), l = h;
                                            break t;
                                        case "link":
                                            var g = Ey("link", "href", o).get(l + (a.href || ""));
                                            if (g) {
                                                for (var b = 0; b < g.length; b++)
                                                    if (h = g[b], h.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && h.getAttribute("rel") === (a.rel == null ? null : a.rel) && h.getAttribute("title") === (a.title == null ? null : a.title) && h.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                        g.splice(b, 1);
                                                        break e
                                                    }
                                            }
                                            h = o.createElement(l), ee(h, l, a), o.head.appendChild(h);
                                            break;
                                        case "meta":
                                            if (g = Ey("meta", "content", o).get(l + (a.content || ""))) {
                                                for (b = 0; b < g.length; b++)
                                                    if (h = g[b], h.getAttribute("content") === (a.content == null ? null : "" + a.content) && h.getAttribute("name") === (a.name == null ? null : a.name) && h.getAttribute("property") === (a.property == null ? null : a.property) && h.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && h.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                        g.splice(b, 1);
                                                        break e
                                                    }
                                            }
                                            h = o.createElement(l), ee(h, l, a), o.head.appendChild(h);
                                            break;
                                        default:
                                            throw Error(r(468, l))
                                    }
                                    h[se] = t,
                                    Ft(h),
                                    l = h
                                }
                                t.stateNode = l
                            }
                    else Ay(o, t.type, t.stateNode);
                    else t.stateNode = wy(o, l, t.memoizedProps);
                    else h !== l ? (h === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : h.count--, l === null ? Ay(o, t.type, t.stateNode) : wy(o, l, t.memoizedProps)) : l === null && t.stateNode !== null && Iu(t, t.memoizedProps, a.memoizedProps)
                }
                break;
            case 27:
                we(n, t), Ee(t), l & 512 && (qt || a === null || $e(a, a.return)), a !== null && l & 4 && Iu(t, t.memoizedProps, a.memoizedProps);
                break;
            case 5:
                if (we(n, t), Ee(t), l & 512 && (qt || a === null || $e(a, a.return)), t.flags & 32) {
                    o = t.stateNode;
                    try {
                        Ki(o, "")
                    } catch (U) {
                        Mt(t, t.return, U)
                    }
                }
                l & 4 && t.stateNode != null && (o = t.memoizedProps, Iu(t, o, a !== null ? a.memoizedProps : o)), l & 1024 && ($u = !0);
                break;
            case 6:
                if (we(n, t), Ee(t), l & 4) {
                    if (t.stateNode === null) throw Error(r(162));
                    l = t.memoizedProps, a = t.stateNode;
                    try {
                        a.nodeValue = l
                    } catch (U) {
                        Mt(t, t.return, U)
                    }
                }
                break;
            case 3:
                if (pl = null, o = Ge, Ge = dl(n.containerInfo), we(n, t), Ge = o, Ee(t), l & 4 && a !== null && a.memoizedState.isDehydrated) try {
                    zs(n.containerInfo)
                } catch (U) {
                    Mt(t, t.return, U)
                }
                $u && ($u = !1, Np(t));
                break;
            case 4:
                l = Ge, Ge = dl(t.stateNode.containerInfo), we(n, t), Ee(t), Ge = l;
                break;
            case 12:
                we(n, t), Ee(t);
                break;
            case 13:
                we(n, t), Ee(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (rc = Ie()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, tc(t, l)));
                break;
            case 22:
                o = t.memoizedState !== null;
                var T = a !== null && a.memoizedState !== null,
                    N = Sn,
                    L = qt;
                if (Sn = N || o, qt = L || T, we(n, t), qt = L, Sn = N, Ee(t), l & 8192) t: for (n = t.stateNode, n._visibility = o ? n._visibility & -2 : n._visibility | 1, o && (a === null || T || Sn || qt || Ti(t)), a = null, n = t;;) {
                    if (n.tag === 5 || n.tag === 26) {
                        if (a === null) {
                            T = a = n;
                            try {
                                if (h = T.stateNode, o) g = h.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none";
                                else {
                                    b = T.stateNode;
                                    var P = T.memoizedProps.style,
                                        j = P != null && P.hasOwnProperty("display") ? P.display : null;
                                    b.style.display = j == null || typeof j == "boolean" ? "" : ("" + j).trim()
                                }
                            } catch (U) {
                                Mt(T, T.return, U)
                            }
                        }
                    } else if (n.tag === 6) {
                        if (a === null) {
                            T = n;
                            try {
                                T.stateNode.nodeValue = o ? "" : T.memoizedProps
                            } catch (U) {
                                Mt(T, T.return, U)
                            }
                        }
                    } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === t) && n.child !== null) {
                        n.child.return = n, n = n.child;
                        continue
                    }
                    if (n === t) break t;
                    for (; n.sibling === null;) {
                        if (n.return === null || n.return === t) break t;
                        a === n && (a = null), n = n.return
                    }
                    a === n && (a = null), n.sibling.return = n.return, n = n.sibling
                }
                l & 4 && (l = t.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, tc(t, a))));
                break;
            case 19:
                we(n, t), Ee(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, tc(t, l)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                we(n, t), Ee(t)
        }
    }

    function Ee(t) {
        var n = t.flags;
        if (n & 2) {
            try {
                for (var a, l = t.return; l !== null;) {
                    if (wp(l)) {
                        a = l;
                        break
                    }
                    l = l.return
                }
                if (a == null) throw Error(r(160));
                switch (a.tag) {
                    case 27:
                        var o = a.stateNode,
                            h = Ju(t);
                        tl(t, h, o);
                        break;
                    case 5:
                        var g = a.stateNode;
                        a.flags & 32 && (Ki(g, ""), a.flags &= -33);
                        var b = Ju(t);
                        tl(t, b, g);
                        break;
                    case 3:
                    case 4:
                        var T = a.stateNode.containerInfo,
                            N = Ju(t);
                        Wu(t, N, T);
                        break;
                    default:
                        throw Error(r(161))
                }
            } catch (L) {
                Mt(t, t.return, L)
            }
            t.flags &= -3
        }
        n & 4096 && (t.flags &= -4097)
    }

    function Np(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null;) {
                var n = t;
                Np(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), t = t.sibling
            }
    }

    function Ln(t, n) {
        if (n.subtreeFlags & 8772)
            for (n = n.child; n !== null;) Rp(t, n.alternate, n), n = n.sibling
    }

    function Ti(t) {
        for (t = t.child; t !== null;) {
            var n = t;
            switch (n.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    _n(4, n, n.return), Ti(n);
                    break;
                case 1:
                    $e(n, n.return);
                    var a = n.stateNode;
                    typeof a.componentWillUnmount == "function" && xp(n, n.return, a), Ti(n);
                    break;
                case 27:
                    Rs(n.stateNode);
                case 26:
                case 5:
                    $e(n, n.return), Ti(n);
                    break;
                case 22:
                    n.memoizedState === null && Ti(n);
                    break;
                case 30:
                    Ti(n);
                    break;
                default:
                    Ti(n)
            }
            t = t.sibling
        }
    }

    function Bn(t, n, a) {
        for (a = a && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null;) {
            var l = n.alternate,
                o = t,
                h = n,
                g = h.flags;
            switch (h.tag) {
                case 0:
                case 11:
                case 15:
                    Bn(o, h, a), ys(4, h);
                    break;
                case 1:
                    if (Bn(o, h, a), l = h, o = l.stateNode, typeof o.componentDidMount == "function") try {
                        o.componentDidMount()
                    } catch (N) {
                        Mt(l, l.return, N)
                    }
                    if (l = h, o = l.updateQueue, o !== null) {
                        var b = l.stateNode;
                        try {
                            var T = o.shared.hiddenCallbacks;
                            if (T !== null)
                                for (o.shared.hiddenCallbacks = null, o = 0; o < T.length; o++) rm(T[o], b)
                        } catch (N) {
                            Mt(l, l.return, N)
                        }
                    }
                    a && g & 64 && Sp(h), gs(h, h.return);
                    break;
                case 27:
                    Ep(h);
                case 26:
                case 5:
                    Bn(o, h, a), a && l === null && g & 4 && Tp(h), gs(h, h.return);
                    break;
                case 12:
                    Bn(o, h, a);
                    break;
                case 13:
                    Bn(o, h, a), a && g & 4 && Mp(o, h);
                    break;
                case 22:
                    h.memoizedState === null && Bn(o, h, a), gs(h, h.return);
                    break;
                case 30:
                    break;
                default:
                    Bn(o, h, a)
            }
            n = n.sibling
        }
    }

    function ec(t, n) {
        var a = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (t = n.memoizedState.cachePool.pool), t !== a && (t != null && t.refCount++, a != null && ns(a))
    }

    function nc(t, n) {
        t = null, n.alternate !== null && (t = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== t && (n.refCount++, t != null && ns(t))
    }

    function tn(t, n, a, l) {
        if (n.subtreeFlags & 10256)
            for (n = n.child; n !== null;) jp(t, n, a, l), n = n.sibling
    }

    function jp(t, n, a, l) {
        var o = n.flags;
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                tn(t, n, a, l), o & 2048 && ys(9, n);
                break;
            case 1:
                tn(t, n, a, l);
                break;
            case 3:
                tn(t, n, a, l), o & 2048 && (t = null, n.alternate !== null && (t = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== t && (n.refCount++, t != null && ns(t)));
                break;
            case 12:
                if (o & 2048) {
                    tn(t, n, a, l), t = n.stateNode;
                    try {
                        var h = n.memoizedProps,
                            g = h.id,
                            b = h.onPostCommit;
                        typeof b == "function" && b(g, n.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                    } catch (T) {
                        Mt(n, n.return, T)
                    }
                } else tn(t, n, a, l);
                break;
            case 13:
                tn(t, n, a, l);
                break;
            case 23:
                break;
            case 22:
                h = n.stateNode, g = n.alternate, n.memoizedState !== null ? h._visibility & 2 ? tn(t, n, a, l) : vs(t, n) : h._visibility & 2 ? tn(t, n, a, l) : (h._visibility |= 2, ua(t, n, a, l, (n.subtreeFlags & 10256) !== 0)), o & 2048 && ec(g, n);
                break;
            case 24:
                tn(t, n, a, l), o & 2048 && nc(n.alternate, n);
                break;
            default:
                tn(t, n, a, l)
        }
    }

    function ua(t, n, a, l, o) {
        for (o = o && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null;) {
            var h = t,
                g = n,
                b = a,
                T = l,
                N = g.flags;
            switch (g.tag) {
                case 0:
                case 11:
                case 15:
                    ua(h, g, b, T, o), ys(8, g);
                    break;
                case 23:
                    break;
                case 22:
                    var L = g.stateNode;
                    g.memoizedState !== null ? L._visibility & 2 ? ua(h, g, b, T, o) : vs(h, g) : (L._visibility |= 2, ua(h, g, b, T, o)), o && N & 2048 && ec(g.alternate, g);
                    break;
                case 24:
                    ua(h, g, b, T, o), o && N & 2048 && nc(g.alternate, g);
                    break;
                default:
                    ua(h, g, b, T, o)
            }
            n = n.sibling
        }
    }

    function vs(t, n) {
        if (n.subtreeFlags & 10256)
            for (n = n.child; n !== null;) {
                var a = t,
                    l = n,
                    o = l.flags;
                switch (l.tag) {
                    case 22:
                        vs(a, l), o & 2048 && ec(l.alternate, l);
                        break;
                    case 24:
                        vs(a, l), o & 2048 && nc(l.alternate, l);
                        break;
                    default:
                        vs(a, l)
                }
                n = n.sibling
            }
    }
    var bs = 8192;

    function ca(t) {
        if (t.subtreeFlags & bs)
            for (t = t.child; t !== null;) Up(t), t = t.sibling
    }

    function Up(t) {
        switch (t.tag) {
            case 26:
                ca(t), t.flags & bs && t.memoizedState !== null && qx(Ge, t.memoizedState, t.memoizedProps);
                break;
            case 5:
                ca(t);
                break;
            case 3:
            case 4:
                var n = Ge;
                Ge = dl(t.stateNode.containerInfo), ca(t), Ge = n;
                break;
            case 22:
                t.memoizedState === null && (n = t.alternate, n !== null && n.memoizedState !== null ? (n = bs, bs = 16777216, ca(t), bs = n) : ca(t));
                break;
            default:
                ca(t)
        }
    }

    function zp(t) {
        var n = t.alternate;
        if (n !== null && (t = n.child, t !== null)) {
            n.child = null;
            do n = t.sibling, t.sibling = null, t = n; while (t !== null)
        }
    }

    function Ss(t) {
        var n = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (n !== null)
                for (var a = 0; a < n.length; a++) {
                    var l = n[a];
                    Jt = l, Vp(l, t)
                }
            zp(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) kp(t), t = t.sibling
    }

    function kp(t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                Ss(t), t.flags & 2048 && _n(9, t, t.return);
                break;
            case 3:
                Ss(t);
                break;
            case 12:
                Ss(t);
                break;
            case 22:
                var n = t.stateNode;
                t.memoizedState !== null && n._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (n._visibility &= -3, el(t)) : Ss(t);
                break;
            default:
                Ss(t)
        }
    }

    function el(t) {
        var n = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (n !== null)
                for (var a = 0; a < n.length; a++) {
                    var l = n[a];
                    Jt = l, Vp(l, t)
                }
            zp(t)
        }
        for (t = t.child; t !== null;) {
            switch (n = t, n.tag) {
                case 0:
                case 11:
                case 15:
                    _n(8, n, n.return), el(n);
                    break;
                case 22:
                    a = n.stateNode, a._visibility & 2 && (a._visibility &= -3, el(n));
                    break;
                default:
                    el(n)
            }
            t = t.sibling
        }
    }

    function Vp(t, n) {
        for (; Jt !== null;) {
            var a = Jt;
            switch (a.tag) {
                case 0:
                case 11:
                case 15:
                    _n(8, a, n);
                    break;
                case 23:
                case 22:
                    if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                        var l = a.memoizedState.cachePool.pool;
                        l != null && l.refCount++
                    }
                    break;
                case 24:
                    ns(a.memoizedState.cache)
            }
            if (l = a.child, l !== null) l.return = a, Jt = l;
            else t: for (a = t; Jt !== null;) {
                l = Jt;
                var o = l.sibling,
                    h = l.return;
                if (Op(l), l === a) {
                    Jt = null;
                    break t
                }
                if (o !== null) {
                    o.return = h, Jt = o;
                    break t
                }
                Jt = h
            }
        }
    }
    var ix = {
            getCacheForType: function(t) {
                var n = re(Qt),
                    a = n.data.get(t);
                return a === void 0 && (a = t(), n.data.set(t, a)), a
            }
        },
        ax = typeof WeakMap == "function" ? WeakMap : Map,
        Et = 0,
        jt = null,
        mt = null,
        St = 0,
        At = 0,
        Ae = null,
        Hn = !1,
        fa = !1,
        ic = !1,
        Tn = 0,
        _t = 0,
        qn = 0,
        wi = 0,
        ac = 0,
        Le = 0,
        ha = 0,
        xs = null,
        ge = null,
        sc = !1,
        rc = 0,
        nl = 1 / 0,
        il = null,
        Pn = null,
        te = 0,
        Gn = null,
        da = null,
        ma = 0,
        lc = 0,
        oc = null,
        _p = null,
        Ts = 0,
        uc = null;

    function Re() {
        if ((Et & 2) !== 0 && St !== 0) return St & -St;
        if (z.T !== null) {
            var t = ea;
            return t !== 0 ? t : yc()
        }
        return $h()
    }

    function Lp() {
        Le === 0 && (Le = (St & 536870912) === 0 || wt ? Fh() : 536870912);
        var t = _e.current;
        return t !== null && (t.flags |= 32), Le
    }

    function Oe(t, n, a) {
        (t === jt && (At === 2 || At === 9) || t.cancelPendingCommit !== null) && (pa(t, 0), Kn(t, St, Le, !1)), Ha(t, a), ((Et & 2) === 0 || t !== jt) && (t === jt && ((Et & 2) === 0 && (wi |= a), _t === 4 && Kn(t, St, Le, !1)), en(t))
    }

    function Bp(t, n, a) {
        if ((Et & 6) !== 0) throw Error(r(327));
        var l = !a && (n & 124) === 0 && (n & t.expiredLanes) === 0 || Ba(t, n),
            o = l ? lx(t, n) : hc(t, n, !0),
            h = l;
        do {
            if (o === 0) {
                fa && !l && Kn(t, n, 0, !1);
                break
            } else {
                if (a = t.current.alternate, h && !sx(a)) {
                    o = hc(t, n, !1), h = !1;
                    continue
                }
                if (o === 2) {
                    if (h = n, t.errorRecoveryDisabledLanes & h) var g = 0;
                    else g = t.pendingLanes & -536870913, g = g !== 0 ? g : g & 536870912 ? 536870912 : 0;
                    if (g !== 0) {
                        n = g;
                        t: {
                            var b = t;o = xs;
                            var T = b.current.memoizedState.isDehydrated;
                            if (T && (pa(b, g).flags |= 256), g = hc(b, g, !1), g !== 2) {
                                if (ic && !T) {
                                    b.errorRecoveryDisabledLanes |= h, wi |= h, o = 4;
                                    break t
                                }
                                h = ge, ge = o, h !== null && (ge === null ? ge = h : ge.push.apply(ge, h))
                            }
                            o = g
                        }
                        if (h = !1, o !== 2) continue
                    }
                }
                if (o === 1) {
                    pa(t, 0), Kn(t, n, 0, !0);
                    break
                }
                t: {
                    switch (l = t, h = o, h) {
                        case 0:
                        case 1:
                            throw Error(r(345));
                        case 4:
                            if ((n & 4194048) !== n) break;
                        case 6:
                            Kn(l, n, Le, !Hn);
                            break t;
                        case 2:
                            ge = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(r(329))
                    }
                    if ((n & 62914560) === n && (o = rc + 300 - Ie(), 10 < o)) {
                        if (Kn(l, n, Le, !Hn), mr(l, 0, !0) !== 0) break t;
                        l.timeoutHandle = my(Hp.bind(null, l, a, ge, il, sc, n, Le, wi, ha, Hn, h, 2, -0, 0), o);
                        break t
                    }
                    Hp(l, a, ge, il, sc, n, Le, wi, ha, Hn, h, 0, -0, 0)
                }
            }
            break
        } while (!0);
        en(t)
    }

    function Hp(t, n, a, l, o, h, g, b, T, N, L, P, j, U) {
        if (t.timeoutHandle = -1, P = n.subtreeFlags, (P & 8192 || (P & 16785408) === 16785408) && (Ms = {
                stylesheets: null,
                count: 0,
                unsuspend: Hx
            }, Up(n), P = Px(), P !== null)) {
            t.cancelPendingCommit = P(Xp.bind(null, t, n, h, a, l, o, g, b, T, L, 1, j, U)), Kn(t, h, g, !N);
            return
        }
        Xp(t, n, h, a, l, o, g, b, T)
    }

    function sx(t) {
        for (var n = t;;) {
            var a = n.tag;
            if ((a === 0 || a === 11 || a === 15) && n.flags & 16384 && (a = n.updateQueue, a !== null && (a = a.stores, a !== null)))
                for (var l = 0; l < a.length; l++) {
                    var o = a[l],
                        h = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!xe(h(), o)) return !1
                    } catch {
                        return !1
                    }
                }
            if (a = n.child, n.subtreeFlags & 16384 && a !== null) a.return = n, n = a;
            else {
                if (n === t) break;
                for (; n.sibling === null;) {
                    if (n.return === null || n.return === t) return !0;
                    n = n.return
                }
                n.sibling.return = n.return, n = n.sibling
            }
        }
        return !0
    }

    function Kn(t, n, a, l) {
        n &= ~ac, n &= ~wi, t.suspendedLanes |= n, t.pingedLanes &= ~n, l && (t.warmLanes |= n), l = t.expirationTimes;
        for (var o = n; 0 < o;) {
            var h = 31 - Se(o),
                g = 1 << h;
            l[h] = -1, o &= ~g
        }
        a !== 0 && Jh(t, a, n)
    }

    function al() {
        return (Et & 6) === 0 ? (ws(0), !1) : !0
    }

    function cc() {
        if (mt !== null) {
            if (At === 0) var t = mt.return;
            else t = mt, mn = gi = null, Ou(t), la = null, ds = 0, t = mt;
            for (; t !== null;) bp(t.alternate, t), t = t.return;
            mt = null
        }
    }

    function pa(t, n) {
        var a = t.timeoutHandle;
        a !== -1 && (t.timeoutHandle = -1, wx(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), cc(), jt = t, mt = a = fn(t.current, null), St = n, At = 0, Ae = null, Hn = !1, fa = Ba(t, n), ic = !1, ha = Le = ac = wi = qn = _t = 0, ge = xs = null, sc = !1, (n & 8) !== 0 && (n |= n & 32);
        var l = t.entangledLanes;
        if (l !== 0)
            for (t = t.entanglements, l &= n; 0 < l;) {
                var o = 31 - Se(l),
                    h = 1 << o;
                n |= t[o], l &= ~h
            }
        return Tn = n, Rr(), a
    }

    function qp(t, n) {
        ht = null, z.H = Qr, n === as || n === kr ? (n = am(), At = 3) : n === em ? (n = am(), At = 4) : At = n === sp ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Ae = n, mt === null && (_t = 1, Ir(t, Ue(n, t.current)))
    }

    function Pp() {
        var t = z.H;
        return z.H = Qr, t === null ? Qr : t
    }

    function Gp() {
        var t = z.A;
        return z.A = ix, t
    }

    function fc() {
        _t = 4, Hn || (St & 4194048) !== St && _e.current !== null || (fa = !0), (qn & 134217727) === 0 && (wi & 134217727) === 0 || jt === null || Kn(jt, St, Le, !1)
    }

    function hc(t, n, a) {
        var l = Et;
        Et |= 2;
        var o = Pp(),
            h = Gp();
        (jt !== t || St !== n) && (il = null, pa(t, n)), n = !1;
        var g = _t;
        t: do try {
                if (At !== 0 && mt !== null) {
                    var b = mt,
                        T = Ae;
                    switch (At) {
                        case 8:
                            cc(), g = 6;
                            break t;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            _e.current === null && (n = !0);
                            var N = At;
                            if (At = 0, Ae = null, ya(t, b, T, N), a && fa) {
                                g = 0;
                                break t
                            }
                            break;
                        default:
                            N = At, At = 0, Ae = null, ya(t, b, T, N)
                    }
                }
                rx(), g = _t;
                break
            } catch (L) {
                qp(t, L)
            }
            while (!0);
            return n && t.shellSuspendCounter++, mn = gi = null, Et = l, z.H = o, z.A = h, mt === null && (jt = null, St = 0, Rr()), g
    }

    function rx() {
        for (; mt !== null;) Kp(mt)
    }

    function lx(t, n) {
        var a = Et;
        Et |= 2;
        var l = Pp(),
            o = Gp();
        jt !== t || St !== n ? (il = null, nl = Ie() + 500, pa(t, n)) : fa = Ba(t, n);
        t: do try {
                if (At !== 0 && mt !== null) {
                    n = mt;
                    var h = Ae;
                    e: switch (At) {
                        case 1:
                            At = 0, Ae = null, ya(t, n, h, 1);
                            break;
                        case 2:
                        case 9:
                            if (nm(h)) {
                                At = 0, Ae = null, Qp(n);
                                break
                            }
                            n = function() {
                                At !== 2 && At !== 9 || jt !== t || (At = 7), en(t)
                            }, h.then(n, n);
                            break t;
                        case 3:
                            At = 7;
                            break t;
                        case 4:
                            At = 5;
                            break t;
                        case 7:
                            nm(h) ? (At = 0, Ae = null, Qp(n)) : (At = 0, Ae = null, ya(t, n, h, 7));
                            break;
                        case 5:
                            var g = null;
                            switch (mt.tag) {
                                case 26:
                                    g = mt.memoizedState;
                                case 5:
                                case 27:
                                    var b = mt;
                                    if (!g || Ry(g)) {
                                        At = 0, Ae = null;
                                        var T = b.sibling;
                                        if (T !== null) mt = T;
                                        else {
                                            var N = b.return;
                                            N !== null ? (mt = N, sl(N)) : mt = null
                                        }
                                        break e
                                    }
                            }
                            At = 0, Ae = null, ya(t, n, h, 5);
                            break;
                        case 6:
                            At = 0, Ae = null, ya(t, n, h, 6);
                            break;
                        case 8:
                            cc(), _t = 6;
                            break t;
                        default:
                            throw Error(r(462))
                    }
                }
                ox();
                break
            } catch (L) {
                qp(t, L)
            }
            while (!0);
            return mn = gi = null, z.H = l, z.A = o, Et = a, mt !== null ? 0 : (jt = null, St = 0, Rr(), _t)
    }

    function ox() {
        for (; mt !== null && !D1();) Kp(mt)
    }

    function Kp(t) {
        var n = gp(t.alternate, t, Tn);
        t.memoizedProps = t.pendingProps, n === null ? sl(t) : mt = n
    }

    function Qp(t) {
        var n = t,
            a = n.alternate;
        switch (n.tag) {
            case 15:
            case 0:
                n = fp(a, n, n.pendingProps, n.type, void 0, St);
                break;
            case 11:
                n = fp(a, n, n.pendingProps, n.type.render, n.ref, St);
                break;
            case 5:
                Ou(n);
            default:
                bp(a, n), n = mt = Yd(n, Tn), n = gp(a, n, Tn)
        }
        t.memoizedProps = t.pendingProps, n === null ? sl(t) : mt = n
    }

    function ya(t, n, a, l) {
        mn = gi = null, Ou(n), la = null, ds = 0;
        var o = n.return;
        try {
            if (JS(t, o, n, a, St)) {
                _t = 1, Ir(t, Ue(a, t.current)), mt = null;
                return
            }
        } catch (h) {
            if (o !== null) throw mt = o, h;
            _t = 1, Ir(t, Ue(a, t.current)), mt = null;
            return
        }
        n.flags & 32768 ? (wt || l === 1 ? t = !0 : fa || (St & 536870912) !== 0 ? t = !1 : (Hn = t = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = _e.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Yp(n, t)) : sl(n)
    }

    function sl(t) {
        var n = t;
        do {
            if ((n.flags & 32768) !== 0) {
                Yp(n, Hn);
                return
            }
            t = n.return;
            var a = $S(n.alternate, n, Tn);
            if (a !== null) {
                mt = a;
                return
            }
            if (n = n.sibling, n !== null) {
                mt = n;
                return
            }
            mt = n = t
        } while (n !== null);
        _t === 0 && (_t = 5)
    }

    function Yp(t, n) {
        do {
            var a = tx(t.alternate, t);
            if (a !== null) {
                a.flags &= 32767, mt = a;
                return
            }
            if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !n && (t = t.sibling, t !== null)) {
                mt = t;
                return
            }
            mt = t = a
        } while (t !== null);
        _t = 6, mt = null
    }

    function Xp(t, n, a, l, o, h, g, b, T) {
        t.cancelPendingCommit = null;
        do rl(); while (te !== 0);
        if ((Et & 6) !== 0) throw Error(r(327));
        if (n !== null) {
            if (n === t.current) throw Error(r(177));
            if (h = n.lanes | n.childLanes, h |= nu, H1(t, a, h, g, b, T), t === jt && (mt = jt = null, St = 0), da = n, Gn = t, ma = a, lc = h, oc = o, _p = l, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, hx(fr, function() {
                    return Wp(), null
                })) : (t.callbackNode = null, t.callbackPriority = 0), l = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || l) {
                l = z.T, z.T = null, o = X.p, X.p = 2, g = Et, Et |= 4;
                try {
                    ex(t, n, a)
                } finally {
                    Et = g, X.p = o, z.T = l
                }
            }
            te = 1, Zp(), Fp(), Ip()
        }
    }

    function Zp() {
        if (te === 1) {
            te = 0;
            var t = Gn,
                n = da,
                a = (n.flags & 13878) !== 0;
            if ((n.subtreeFlags & 13878) !== 0 || a) {
                a = z.T, z.T = null;
                var l = X.p;
                X.p = 2;
                var o = Et;
                Et |= 4;
                try {
                    Dp(n, t);
                    var h = Ec,
                        g = Vd(t.containerInfo),
                        b = h.focusedElem,
                        T = h.selectionRange;
                    if (g !== b && b && b.ownerDocument && kd(b.ownerDocument.documentElement, b)) {
                        if (T !== null && Jo(b)) {
                            var N = T.start,
                                L = T.end;
                            if (L === void 0 && (L = N), "selectionStart" in b) b.selectionStart = N, b.selectionEnd = Math.min(L, b.value.length);
                            else {
                                var P = b.ownerDocument || document,
                                    j = P && P.defaultView || window;
                                if (j.getSelection) {
                                    var U = j.getSelection(),
                                        rt = b.textContent.length,
                                        at = Math.min(T.start, rt),
                                        Ct = T.end === void 0 ? at : Math.min(T.end, rt);
                                    !U.extend && at > Ct && (g = Ct, Ct = at, at = g);
                                    var O = zd(b, at),
                                        A = zd(b, Ct);
                                    if (O && A && (U.rangeCount !== 1 || U.anchorNode !== O.node || U.anchorOffset !== O.offset || U.focusNode !== A.node || U.focusOffset !== A.offset)) {
                                        var M = P.createRange();
                                        M.setStart(O.node, O.offset), U.removeAllRanges(), at > Ct ? (U.addRange(M), U.extend(A.node, A.offset)) : (M.setEnd(A.node, A.offset), U.addRange(M))
                                    }
                                }
                            }
                        }
                        for (P = [], U = b; U = U.parentNode;) U.nodeType === 1 && P.push({
                            element: U,
                            left: U.scrollLeft,
                            top: U.scrollTop
                        });
                        for (typeof b.focus == "function" && b.focus(), b = 0; b < P.length; b++) {
                            var H = P[b];
                            H.element.scrollLeft = H.left, H.element.scrollTop = H.top
                        }
                    }
                    vl = !!wc, Ec = wc = null
                } finally {
                    Et = o, X.p = l, z.T = a
                }
            }
            t.current = n, te = 2
        }
    }

    function Fp() {
        if (te === 2) {
            te = 0;
            var t = Gn,
                n = da,
                a = (n.flags & 8772) !== 0;
            if ((n.subtreeFlags & 8772) !== 0 || a) {
                a = z.T, z.T = null;
                var l = X.p;
                X.p = 2;
                var o = Et;
                Et |= 4;
                try {
                    Rp(t, n.alternate, n)
                } finally {
                    Et = o, X.p = l, z.T = a
                }
            }
            te = 3
        }
    }

    function Ip() {
        if (te === 4 || te === 3) {
            te = 0, N1();
            var t = Gn,
                n = da,
                a = ma,
                l = _p;
            (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? te = 5 : (te = 0, da = Gn = null, Jp(t, t.pendingLanes));
            var o = t.pendingLanes;
            if (o === 0 && (Pn = null), Do(a), n = n.stateNode, be && typeof be.onCommitFiberRoot == "function") try {
                be.onCommitFiberRoot(La, n, void 0, (n.current.flags & 128) === 128)
            } catch {}
            if (l !== null) {
                n = z.T, o = X.p, X.p = 2, z.T = null;
                try {
                    for (var h = t.onRecoverableError, g = 0; g < l.length; g++) {
                        var b = l[g];
                        h(b.value, {
                            componentStack: b.stack
                        })
                    }
                } finally {
                    z.T = n, X.p = o
                }
            }(ma & 3) !== 0 && rl(), en(t), o = t.pendingLanes, (a & 4194090) !== 0 && (o & 42) !== 0 ? t === uc ? Ts++ : (Ts = 0, uc = t) : Ts = 0, ws(0)
        }
    }

    function Jp(t, n) {
        (t.pooledCacheLanes &= n) === 0 && (n = t.pooledCache, n != null && (t.pooledCache = null, ns(n)))
    }

    function rl(t) {
        return Zp(), Fp(), Ip(), Wp()
    }

    function Wp() {
        if (te !== 5) return !1;
        var t = Gn,
            n = lc;
        lc = 0;
        var a = Do(ma),
            l = z.T,
            o = X.p;
        try {
            X.p = 32 > a ? 32 : a, z.T = null, a = oc, oc = null;
            var h = Gn,
                g = ma;
            if (te = 0, da = Gn = null, ma = 0, (Et & 6) !== 0) throw Error(r(331));
            var b = Et;
            if (Et |= 4, kp(h.current), jp(h, h.current, g, a), Et = b, ws(0, !1), be && typeof be.onPostCommitFiberRoot == "function") try {
                be.onPostCommitFiberRoot(La, h)
            } catch {}
            return !0
        } finally {
            X.p = o, z.T = l, Jp(t, n)
        }
    }

    function $p(t, n, a) {
        n = Ue(a, n), n = qu(t.stateNode, n, 2), t = Un(t, n, 2), t !== null && (Ha(t, 2), en(t))
    }

    function Mt(t, n, a) {
        if (t.tag === 3) $p(t, t, a);
        else
            for (; n !== null;) {
                if (n.tag === 3) {
                    $p(n, t, a);
                    break
                } else if (n.tag === 1) {
                    var l = n.stateNode;
                    if (typeof n.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Pn === null || !Pn.has(l))) {
                        t = Ue(a, t), a = ip(2), l = Un(n, a, 2), l !== null && (ap(a, l, n, t), Ha(l, 2), en(l));
                        break
                    }
                }
                n = n.return
            }
    }

    function dc(t, n, a) {
        var l = t.pingCache;
        if (l === null) {
            l = t.pingCache = new ax;
            var o = new Set;
            l.set(n, o)
        } else o = l.get(n), o === void 0 && (o = new Set, l.set(n, o));
        o.has(a) || (ic = !0, o.add(a), t = ux.bind(null, t, n, a), n.then(t, t))
    }

    function ux(t, n, a) {
        var l = t.pingCache;
        l !== null && l.delete(n), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, jt === t && (St & a) === a && (_t === 4 || _t === 3 && (St & 62914560) === St && 300 > Ie() - rc ? (Et & 2) === 0 && pa(t, 0) : ac |= a, ha === St && (ha = 0)), en(t)
    }

    function ty(t, n) {
        n === 0 && (n = Ih()), t = Ji(t, n), t !== null && (Ha(t, n), en(t))
    }

    function cx(t) {
        var n = t.memoizedState,
            a = 0;
        n !== null && (a = n.retryLane), ty(t, a)
    }

    function fx(t, n) {
        var a = 0;
        switch (t.tag) {
            case 13:
                var l = t.stateNode,
                    o = t.memoizedState;
                o !== null && (a = o.retryLane);
                break;
            case 19:
                l = t.stateNode;
                break;
            case 22:
                l = t.stateNode._retryCache;
                break;
            default:
                throw Error(r(314))
        }
        l !== null && l.delete(n), ty(t, a)
    }

    function hx(t, n) {
        return Ro(t, n)
    }
    var ll = null,
        ga = null,
        mc = !1,
        ol = !1,
        pc = !1,
        Ei = 0;

    function en(t) {
        t !== ga && t.next === null && (ga === null ? ll = ga = t : ga = ga.next = t), ol = !0, mc || (mc = !0, mx())
    }

    function ws(t, n) {
        if (!pc && ol) {
            pc = !0;
            do
                for (var a = !1, l = ll; l !== null;) {
                    if (t !== 0) {
                        var o = l.pendingLanes;
                        if (o === 0) var h = 0;
                        else {
                            var g = l.suspendedLanes,
                                b = l.pingedLanes;
                            h = (1 << 31 - Se(42 | t) + 1) - 1, h &= o & ~(g & ~b), h = h & 201326741 ? h & 201326741 | 1 : h ? h | 2 : 0
                        }
                        h !== 0 && (a = !0, ay(l, h))
                    } else h = St, h = mr(l, l === jt ? h : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), (h & 3) === 0 || Ba(l, h) || (a = !0, ay(l, h));
                    l = l.next
                }
            while (a);
            pc = !1
        }
    }

    function dx() {
        ey()
    }

    function ey() {
        ol = mc = !1;
        var t = 0;
        Ei !== 0 && (Tx() && (t = Ei), Ei = 0);
        for (var n = Ie(), a = null, l = ll; l !== null;) {
            var o = l.next,
                h = ny(l, n);
            h === 0 ? (l.next = null, a === null ? ll = o : a.next = o, o === null && (ga = a)) : (a = l, (t !== 0 || (h & 3) !== 0) && (ol = !0)), l = o
        }
        ws(t)
    }

    function ny(t, n) {
        for (var a = t.suspendedLanes, l = t.pingedLanes, o = t.expirationTimes, h = t.pendingLanes & -62914561; 0 < h;) {
            var g = 31 - Se(h),
                b = 1 << g,
                T = o[g];
            T === -1 ? ((b & a) === 0 || (b & l) !== 0) && (o[g] = B1(b, n)) : T <= n && (t.expiredLanes |= b), h &= ~b
        }
        if (n = jt, a = St, a = mr(t, t === n ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), l = t.callbackNode, a === 0 || t === n && (At === 2 || At === 9) || t.cancelPendingCommit !== null) return l !== null && l !== null && Oo(l), t.callbackNode = null, t.callbackPriority = 0;
        if ((a & 3) === 0 || Ba(t, a)) {
            if (n = a & -a, n === t.callbackPriority) return n;
            switch (l !== null && Oo(l), Do(a)) {
                case 2:
                case 8:
                    a = Xh;
                    break;
                case 32:
                    a = fr;
                    break;
                case 268435456:
                    a = Zh;
                    break;
                default:
                    a = fr
            }
            return l = iy.bind(null, t), a = Ro(a, l), t.callbackPriority = n, t.callbackNode = a, n
        }
        return l !== null && l !== null && Oo(l), t.callbackPriority = 2, t.callbackNode = null, 2
    }

    function iy(t, n) {
        if (te !== 0 && te !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
        var a = t.callbackNode;
        if (rl() && t.callbackNode !== a) return null;
        var l = St;
        return l = mr(t, t === jt ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), l === 0 ? null : (Bp(t, l, n), ny(t, Ie()), t.callbackNode != null && t.callbackNode === a ? iy.bind(null, t) : null)
    }

    function ay(t, n) {
        if (rl()) return null;
        Bp(t, n, !0)
    }

    function mx() {
        Ex(function() {
            (Et & 6) !== 0 ? Ro(Yh, dx) : ey()
        })
    }

    function yc() {
        return Ei === 0 && (Ei = Fh()), Ei
    }

    function sy(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : br("" + t)
    }

    function ry(t, n) {
        var a = n.ownerDocument.createElement("input");
        return a.name = n.name, a.value = n.value, t.id && a.setAttribute("form", t.id), n.parentNode.insertBefore(a, n), t = new FormData(t), a.parentNode.removeChild(a), t
    }

    function px(t, n, a, l, o) {
        if (n === "submit" && a && a.stateNode === o) {
            var h = sy((o[de] || null).action),
                g = l.submitter;
            g && (n = (n = g[de] || null) ? sy(n.formAction) : g.getAttribute("formAction"), n !== null && (h = n, g = null));
            var b = new wr("action", "action", null, l, o);
            t.push({
                event: b,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (l.defaultPrevented) {
                            if (Ei !== 0) {
                                var T = g ? ry(o, g) : new FormData(o);
                                Vu(a, {
                                    pending: !0,
                                    data: T,
                                    method: o.method,
                                    action: h
                                }, null, T)
                            }
                        } else typeof h == "function" && (b.preventDefault(), T = g ? ry(o, g) : new FormData(o), Vu(a, {
                            pending: !0,
                            data: T,
                            method: o.method,
                            action: h
                        }, h, T))
                    },
                    currentTarget: o
                }]
            })
        }
    }
    for (var gc = 0; gc < eu.length; gc++) {
        var vc = eu[gc],
            yx = vc.toLowerCase(),
            gx = vc[0].toUpperCase() + vc.slice(1);
        Pe(yx, "on" + gx)
    }
    Pe(Bd, "onAnimationEnd"), Pe(Hd, "onAnimationIteration"), Pe(qd, "onAnimationStart"), Pe("dblclick", "onDoubleClick"), Pe("focusin", "onFocus"), Pe("focusout", "onBlur"), Pe(zS, "onTransitionRun"), Pe(kS, "onTransitionStart"), Pe(VS, "onTransitionCancel"), Pe(Pd, "onTransitionEnd"), qi("onMouseEnter", ["mouseout", "mouseover"]), qi("onMouseLeave", ["mouseout", "mouseover"]), qi("onPointerEnter", ["pointerout", "pointerover"]), qi("onPointerLeave", ["pointerout", "pointerover"]), oi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), oi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), oi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), oi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), oi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), oi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Es = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        vx = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Es));

    function ly(t, n) {
        n = (n & 4) !== 0;
        for (var a = 0; a < t.length; a++) {
            var l = t[a],
                o = l.event;
            l = l.listeners;
            t: {
                var h = void 0;
                if (n)
                    for (var g = l.length - 1; 0 <= g; g--) {
                        var b = l[g],
                            T = b.instance,
                            N = b.currentTarget;
                        if (b = b.listener, T !== h && o.isPropagationStopped()) break t;
                        h = b, o.currentTarget = N;
                        try {
                            h(o)
                        } catch (L) {
                            Fr(L)
                        }
                        o.currentTarget = null, h = T
                    } else
                        for (g = 0; g < l.length; g++) {
                            if (b = l[g], T = b.instance, N = b.currentTarget, b = b.listener, T !== h && o.isPropagationStopped()) break t;
                            h = b, o.currentTarget = N;
                            try {
                                h(o)
                            } catch (L) {
                                Fr(L)
                            }
                            o.currentTarget = null, h = T
                        }
            }
        }
    }

    function pt(t, n) {
        var a = n[No];
        a === void 0 && (a = n[No] = new Set);
        var l = t + "__bubble";
        a.has(l) || (oy(n, t, 2, !1), a.add(l))
    }

    function bc(t, n, a) {
        var l = 0;
        n && (l |= 4), oy(a, t, l, n)
    }
    var ul = "_reactListening" + Math.random().toString(36).slice(2);

    function Sc(t) {
        if (!t[ul]) {
            t[ul] = !0, ed.forEach(function(a) {
                a !== "selectionchange" && (vx.has(a) || bc(a, !1, t), bc(a, !0, t))
            });
            var n = t.nodeType === 9 ? t : t.ownerDocument;
            n === null || n[ul] || (n[ul] = !0, bc("selectionchange", !1, n))
        }
    }

    function oy(t, n, a, l) {
        switch (jy(n)) {
            case 2:
                var o = Qx;
                break;
            case 8:
                o = Yx;
                break;
            default:
                o = zc
        }
        a = o.bind(null, n, a, t), o = void 0, !Po || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (o = !0), l ? o !== void 0 ? t.addEventListener(n, a, {
            capture: !0,
            passive: o
        }) : t.addEventListener(n, a, !0) : o !== void 0 ? t.addEventListener(n, a, {
            passive: o
        }) : t.addEventListener(n, a, !1)
    }

    function xc(t, n, a, l, o) {
        var h = l;
        if ((n & 1) === 0 && (n & 2) === 0 && l !== null) t: for (;;) {
            if (l === null) return;
            var g = l.tag;
            if (g === 3 || g === 4) {
                var b = l.stateNode.containerInfo;
                if (b === o) break;
                if (g === 4)
                    for (g = l.return; g !== null;) {
                        var T = g.tag;
                        if ((T === 3 || T === 4) && g.stateNode.containerInfo === o) return;
                        g = g.return
                    }
                for (; b !== null;) {
                    if (g = Li(b), g === null) return;
                    if (T = g.tag, T === 5 || T === 6 || T === 26 || T === 27) {
                        l = h = g;
                        continue t
                    }
                    b = b.parentNode
                }
            }
            l = l.return
        }
        pd(function() {
            var N = h,
                L = Ho(a),
                P = [];
            t: {
                var j = Gd.get(t);
                if (j !== void 0) {
                    var U = wr,
                        rt = t;
                    switch (t) {
                        case "keypress":
                            if (xr(a) === 0) break t;
                        case "keydown":
                        case "keyup":
                            U = hS;
                            break;
                        case "focusin":
                            rt = "focus", U = Yo;
                            break;
                        case "focusout":
                            rt = "blur", U = Yo;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            U = Yo;
                            break;
                        case "click":
                            if (a.button === 2) break t;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            U = vd;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            U = tS;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            U = pS;
                            break;
                        case Bd:
                        case Hd:
                        case qd:
                            U = iS;
                            break;
                        case Pd:
                            U = gS;
                            break;
                        case "scroll":
                        case "scrollend":
                            U = W1;
                            break;
                        case "wheel":
                            U = bS;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            U = sS;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            U = Sd;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            U = xS
                    }
                    var at = (n & 4) !== 0,
                        Ct = !at && (t === "scroll" || t === "scrollend"),
                        O = at ? j !== null ? j + "Capture" : null : j;
                    at = [];
                    for (var A = N, M; A !== null;) {
                        var H = A;
                        if (M = H.stateNode, H = H.tag, H !== 5 && H !== 26 && H !== 27 || M === null || O === null || (H = Ga(A, O), H != null && at.push(As(A, H, M))), Ct) break;
                        A = A.return
                    }
                    0 < at.length && (j = new U(j, rt, null, a, L), P.push({
                        event: j,
                        listeners: at
                    }))
                }
            }
            if ((n & 7) === 0) {
                t: {
                    if (j = t === "mouseover" || t === "pointerover", U = t === "mouseout" || t === "pointerout", j && a !== Bo && (rt = a.relatedTarget || a.fromElement) && (Li(rt) || rt[_i])) break t;
                    if ((U || j) && (j = L.window === L ? L : (j = L.ownerDocument) ? j.defaultView || j.parentWindow : window, U ? (rt = a.relatedTarget || a.toElement, U = N, rt = rt ? Li(rt) : null, rt !== null && (Ct = c(rt), at = rt.tag, rt !== Ct || at !== 5 && at !== 27 && at !== 6) && (rt = null)) : (U = null, rt = N), U !== rt)) {
                        if (at = vd, H = "onMouseLeave", O = "onMouseEnter", A = "mouse", (t === "pointerout" || t === "pointerover") && (at = Sd, H = "onPointerLeave", O = "onPointerEnter", A = "pointer"), Ct = U == null ? j : Pa(U), M = rt == null ? j : Pa(rt), j = new at(H, A + "leave", U, a, L), j.target = Ct, j.relatedTarget = M, H = null, Li(L) === N && (at = new at(O, A + "enter", rt, a, L), at.target = M, at.relatedTarget = Ct, H = at), Ct = H, U && rt) e: {
                            for (at = U, O = rt, A = 0, M = at; M; M = va(M)) A++;
                            for (M = 0, H = O; H; H = va(H)) M++;
                            for (; 0 < A - M;) at = va(at),
                            A--;
                            for (; 0 < M - A;) O = va(O),
                            M--;
                            for (; A--;) {
                                if (at === O || O !== null && at === O.alternate) break e;
                                at = va(at), O = va(O)
                            }
                            at = null
                        }
                        else at = null;
                        U !== null && uy(P, j, U, at, !1), rt !== null && Ct !== null && uy(P, Ct, rt, at, !0)
                    }
                }
                t: {
                    if (j = N ? Pa(N) : window, U = j.nodeName && j.nodeName.toLowerCase(), U === "select" || U === "input" && j.type === "file") var W = Cd;
                    else if (Rd(j))
                        if (Md) W = NS;
                        else {
                            W = MS;
                            var dt = CS
                        }
                    else U = j.nodeName,
                    !U || U.toLowerCase() !== "input" || j.type !== "checkbox" && j.type !== "radio" ? N && Lo(N.elementType) && (W = Cd) : W = DS;
                    if (W && (W = W(t, N))) {
                        Od(P, W, a, L);
                        break t
                    }
                    dt && dt(t, j, N),
                    t === "focusout" && N && j.type === "number" && N.memoizedProps.value != null && _o(j, "number", j.value)
                }
                switch (dt = N ? Pa(N) : window, t) {
                    case "focusin":
                        (Rd(dt) || dt.contentEditable === "true") && (Zi = dt, Wo = N, Ja = null);
                        break;
                    case "focusout":
                        Ja = Wo = Zi = null;
                        break;
                    case "mousedown":
                        $o = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        $o = !1, _d(P, a, L);
                        break;
                    case "selectionchange":
                        if (US) break;
                    case "keydown":
                    case "keyup":
                        _d(P, a, L)
                }
                var nt;
                if (Zo) t: {
                    switch (t) {
                        case "compositionstart":
                            var st = "onCompositionStart";
                            break t;
                        case "compositionend":
                            st = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            st = "onCompositionUpdate";
                            break t
                    }
                    st = void 0
                }
                else Xi ? Ed(t, a) && (st = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (st = "onCompositionStart");st && (xd && a.locale !== "ko" && (Xi || st !== "onCompositionStart" ? st === "onCompositionEnd" && Xi && (nt = yd()) : (Mn = L, Go = "value" in Mn ? Mn.value : Mn.textContent, Xi = !0)), dt = cl(N, st), 0 < dt.length && (st = new bd(st, t, null, a, L), P.push({
                    event: st,
                    listeners: dt
                }), nt ? st.data = nt : (nt = Ad(a), nt !== null && (st.data = nt)))),
                (nt = wS ? ES(t, a) : AS(t, a)) && (st = cl(N, "onBeforeInput"), 0 < st.length && (dt = new bd("onBeforeInput", "beforeinput", null, a, L), P.push({
                    event: dt,
                    listeners: st
                }), dt.data = nt)),
                px(P, t, N, a, L)
            }
            ly(P, n)
        })
    }

    function As(t, n, a) {
        return {
            instance: t,
            listener: n,
            currentTarget: a
        }
    }

    function cl(t, n) {
        for (var a = n + "Capture", l = []; t !== null;) {
            var o = t,
                h = o.stateNode;
            if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || h === null || (o = Ga(t, a), o != null && l.unshift(As(t, o, h)), o = Ga(t, n), o != null && l.push(As(t, o, h))), t.tag === 3) return l;
            t = t.return
        }
        return []
    }

    function va(t) {
        if (t === null) return null;
        do t = t.return; while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }

    function uy(t, n, a, l, o) {
        for (var h = n._reactName, g = []; a !== null && a !== l;) {
            var b = a,
                T = b.alternate,
                N = b.stateNode;
            if (b = b.tag, T !== null && T === l) break;
            b !== 5 && b !== 26 && b !== 27 || N === null || (T = N, o ? (N = Ga(a, h), N != null && g.unshift(As(a, N, T))) : o || (N = Ga(a, h), N != null && g.push(As(a, N, T)))), a = a.return
        }
        g.length !== 0 && t.push({
            event: n,
            listeners: g
        })
    }
    var bx = /\r\n?/g,
        Sx = /\u0000|\uFFFD/g;

    function cy(t) {
        return (typeof t == "string" ? t : "" + t).replace(bx, `
`).replace(Sx, "")
    }

    function fy(t, n) {
        return n = cy(n), cy(t) === n
    }

    function fl() {}

    function Ot(t, n, a, l, o, h) {
        switch (a) {
            case "children":
                typeof l == "string" ? n === "body" || n === "textarea" && l === "" || Ki(t, l) : (typeof l == "number" || typeof l == "bigint") && n !== "body" && Ki(t, "" + l);
                break;
            case "className":
                yr(t, "class", l);
                break;
            case "tabIndex":
                yr(t, "tabindex", l);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                yr(t, a, l);
                break;
            case "style":
                dd(t, l, h);
                break;
            case "data":
                if (n !== "object") {
                    yr(t, "data", l);
                    break
                }
            case "src":
            case "href":
                if (l === "" && (n !== "a" || a !== "href")) {
                    t.removeAttribute(a);
                    break
                }
                if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
                    t.removeAttribute(a);
                    break
                }
                l = br("" + l), t.setAttribute(a, l);
                break;
            case "action":
            case "formAction":
                if (typeof l == "function") {
                    t.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof h == "function" && (a === "formAction" ? (n !== "input" && Ot(t, n, "name", o.name, o, null), Ot(t, n, "formEncType", o.formEncType, o, null), Ot(t, n, "formMethod", o.formMethod, o, null), Ot(t, n, "formTarget", o.formTarget, o, null)) : (Ot(t, n, "encType", o.encType, o, null), Ot(t, n, "method", o.method, o, null), Ot(t, n, "target", o.target, o, null)));
                if (l == null || typeof l == "symbol" || typeof l == "boolean") {
                    t.removeAttribute(a);
                    break
                }
                l = br("" + l), t.setAttribute(a, l);
                break;
            case "onClick":
                l != null && (t.onclick = fl);
                break;
            case "onScroll":
                l != null && pt("scroll", t);
                break;
            case "onScrollEnd":
                l != null && pt("scrollend", t);
                break;
            case "dangerouslySetInnerHTML":
                if (l != null) {
                    if (typeof l != "object" || !("__html" in l)) throw Error(r(61));
                    if (a = l.__html, a != null) {
                        if (o.children != null) throw Error(r(60));
                        t.innerHTML = a
                    }
                }
                break;
            case "multiple":
                t.multiple = l && typeof l != "function" && typeof l != "symbol";
                break;
            case "muted":
                t.muted = l && typeof l != "function" && typeof l != "symbol";
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
                if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
                    t.removeAttribute("xlink:href");
                    break
                }
                a = br("" + l), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, "" + l) : t.removeAttribute(a);
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
                l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
                break;
            case "capture":
            case "download":
                l === !0 ? t.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, l) : t.removeAttribute(a);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(a, l) : t.removeAttribute(a);
                break;
            case "rowSpan":
            case "start":
                l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(a) : t.setAttribute(a, l);
                break;
            case "popover":
                pt("beforetoggle", t), pt("toggle", t), pr(t, "popover", l);
                break;
            case "xlinkActuate":
                un(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
                break;
            case "xlinkArcrole":
                un(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
                break;
            case "xlinkRole":
                un(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
                break;
            case "xlinkShow":
                un(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
                break;
            case "xlinkTitle":
                un(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
                break;
            case "xlinkType":
                un(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
                break;
            case "xmlBase":
                un(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
                break;
            case "xmlLang":
                un(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
                break;
            case "xmlSpace":
                un(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
                break;
            case "is":
                pr(t, "is", l);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = I1.get(a) || a, pr(t, a, l))
        }
    }

    function Tc(t, n, a, l, o, h) {
        switch (a) {
            case "style":
                dd(t, l, h);
                break;
            case "dangerouslySetInnerHTML":
                if (l != null) {
                    if (typeof l != "object" || !("__html" in l)) throw Error(r(61));
                    if (a = l.__html, a != null) {
                        if (o.children != null) throw Error(r(60));
                        t.innerHTML = a
                    }
                }
                break;
            case "children":
                typeof l == "string" ? Ki(t, l) : (typeof l == "number" || typeof l == "bigint") && Ki(t, "" + l);
                break;
            case "onScroll":
                l != null && pt("scroll", t);
                break;
            case "onScrollEnd":
                l != null && pt("scrollend", t);
                break;
            case "onClick":
                l != null && (t.onclick = fl);
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
                if (!nd.hasOwnProperty(a)) t: {
                    if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), n = a.slice(2, o ? a.length - 7 : void 0), h = t[de] || null, h = h != null ? h[a] : null, typeof h == "function" && t.removeEventListener(n, h, o), typeof l == "function")) {
                        typeof h != "function" && h !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(n, l, o);
                        break t
                    }
                    a in t ? t[a] = l : l === !0 ? t.setAttribute(a, "") : pr(t, a, l)
                }
        }
    }

    function ee(t, n, a) {
        switch (n) {
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
                pt("error", t), pt("load", t);
                var l = !1,
                    o = !1,
                    h;
                for (h in a)
                    if (a.hasOwnProperty(h)) {
                        var g = a[h];
                        if (g != null) switch (h) {
                            case "src":
                                l = !0;
                                break;
                            case "srcSet":
                                o = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(r(137, n));
                            default:
                                Ot(t, n, h, g, a, null)
                        }
                    }
                o && Ot(t, n, "srcSet", a.srcSet, a, null), l && Ot(t, n, "src", a.src, a, null);
                return;
            case "input":
                pt("invalid", t);
                var b = h = g = o = null,
                    T = null,
                    N = null;
                for (l in a)
                    if (a.hasOwnProperty(l)) {
                        var L = a[l];
                        if (L != null) switch (l) {
                            case "name":
                                o = L;
                                break;
                            case "type":
                                g = L;
                                break;
                            case "checked":
                                T = L;
                                break;
                            case "defaultChecked":
                                N = L;
                                break;
                            case "value":
                                h = L;
                                break;
                            case "defaultValue":
                                b = L;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (L != null) throw Error(r(137, n));
                                break;
                            default:
                                Ot(t, n, l, L, a, null)
                        }
                    }
                ud(t, h, b, T, N, g, o, !1), gr(t);
                return;
            case "select":
                pt("invalid", t), l = g = h = null;
                for (o in a)
                    if (a.hasOwnProperty(o) && (b = a[o], b != null)) switch (o) {
                        case "value":
                            h = b;
                            break;
                        case "defaultValue":
                            g = b;
                            break;
                        case "multiple":
                            l = b;
                        default:
                            Ot(t, n, o, b, a, null)
                    }
                n = h, a = g, t.multiple = !!l, n != null ? Gi(t, !!l, n, !1) : a != null && Gi(t, !!l, a, !0);
                return;
            case "textarea":
                pt("invalid", t), h = o = l = null;
                for (g in a)
                    if (a.hasOwnProperty(g) && (b = a[g], b != null)) switch (g) {
                        case "value":
                            l = b;
                            break;
                        case "defaultValue":
                            o = b;
                            break;
                        case "children":
                            h = b;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (b != null) throw Error(r(91));
                            break;
                        default:
                            Ot(t, n, g, b, a, null)
                    }
                fd(t, l, o, h), gr(t);
                return;
            case "option":
                for (T in a) a.hasOwnProperty(T) && (l = a[T], l != null) && (T === "selected" ? t.selected = l && typeof l != "function" && typeof l != "symbol" : Ot(t, n, T, l, a, null));
                return;
            case "dialog":
                pt("beforetoggle", t), pt("toggle", t), pt("cancel", t), pt("close", t);
                break;
            case "iframe":
            case "object":
                pt("load", t);
                break;
            case "video":
            case "audio":
                for (l = 0; l < Es.length; l++) pt(Es[l], t);
                break;
            case "image":
                pt("error", t), pt("load", t);
                break;
            case "details":
                pt("toggle", t);
                break;
            case "embed":
            case "source":
            case "link":
                pt("error", t), pt("load", t);
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
                for (N in a)
                    if (a.hasOwnProperty(N) && (l = a[N], l != null)) switch (N) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(r(137, n));
                        default:
                            Ot(t, n, N, l, a, null)
                    }
                return;
            default:
                if (Lo(n)) {
                    for (L in a) a.hasOwnProperty(L) && (l = a[L], l !== void 0 && Tc(t, n, L, l, a, void 0));
                    return
                }
        }
        for (b in a) a.hasOwnProperty(b) && (l = a[b], l != null && Ot(t, n, b, l, a, null))
    }

    function xx(t, n, a, l) {
        switch (n) {
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
                var o = null,
                    h = null,
                    g = null,
                    b = null,
                    T = null,
                    N = null,
                    L = null;
                for (U in a) {
                    var P = a[U];
                    if (a.hasOwnProperty(U) && P != null) switch (U) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            T = P;
                        default:
                            l.hasOwnProperty(U) || Ot(t, n, U, null, l, P)
                    }
                }
                for (var j in l) {
                    var U = l[j];
                    if (P = a[j], l.hasOwnProperty(j) && (U != null || P != null)) switch (j) {
                        case "type":
                            h = U;
                            break;
                        case "name":
                            o = U;
                            break;
                        case "checked":
                            N = U;
                            break;
                        case "defaultChecked":
                            L = U;
                            break;
                        case "value":
                            g = U;
                            break;
                        case "defaultValue":
                            b = U;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (U != null) throw Error(r(137, n));
                            break;
                        default:
                            U !== P && Ot(t, n, j, U, l, P)
                    }
                }
                Vo(t, g, b, T, N, L, h, o);
                return;
            case "select":
                U = g = b = j = null;
                for (h in a)
                    if (T = a[h], a.hasOwnProperty(h) && T != null) switch (h) {
                        case "value":
                            break;
                        case "multiple":
                            U = T;
                        default:
                            l.hasOwnProperty(h) || Ot(t, n, h, null, l, T)
                    }
                for (o in l)
                    if (h = l[o], T = a[o], l.hasOwnProperty(o) && (h != null || T != null)) switch (o) {
                        case "value":
                            j = h;
                            break;
                        case "defaultValue":
                            b = h;
                            break;
                        case "multiple":
                            g = h;
                        default:
                            h !== T && Ot(t, n, o, h, l, T)
                    }
                n = b, a = g, l = U, j != null ? Gi(t, !!a, j, !1) : !!l != !!a && (n != null ? Gi(t, !!a, n, !0) : Gi(t, !!a, a ? [] : "", !1));
                return;
            case "textarea":
                U = j = null;
                for (b in a)
                    if (o = a[b], a.hasOwnProperty(b) && o != null && !l.hasOwnProperty(b)) switch (b) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            Ot(t, n, b, null, l, o)
                    }
                for (g in l)
                    if (o = l[g], h = a[g], l.hasOwnProperty(g) && (o != null || h != null)) switch (g) {
                        case "value":
                            j = o;
                            break;
                        case "defaultValue":
                            U = o;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (o != null) throw Error(r(91));
                            break;
                        default:
                            o !== h && Ot(t, n, g, o, l, h)
                    }
                cd(t, j, U);
                return;
            case "option":
                for (var rt in a) j = a[rt], a.hasOwnProperty(rt) && j != null && !l.hasOwnProperty(rt) && (rt === "selected" ? t.selected = !1 : Ot(t, n, rt, null, l, j));
                for (T in l) j = l[T], U = a[T], l.hasOwnProperty(T) && j !== U && (j != null || U != null) && (T === "selected" ? t.selected = j && typeof j != "function" && typeof j != "symbol" : Ot(t, n, T, j, l, U));
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
                for (var at in a) j = a[at], a.hasOwnProperty(at) && j != null && !l.hasOwnProperty(at) && Ot(t, n, at, null, l, j);
                for (N in l)
                    if (j = l[N], U = a[N], l.hasOwnProperty(N) && j !== U && (j != null || U != null)) switch (N) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (j != null) throw Error(r(137, n));
                            break;
                        default:
                            Ot(t, n, N, j, l, U)
                    }
                return;
            default:
                if (Lo(n)) {
                    for (var Ct in a) j = a[Ct], a.hasOwnProperty(Ct) && j !== void 0 && !l.hasOwnProperty(Ct) && Tc(t, n, Ct, void 0, l, j);
                    for (L in l) j = l[L], U = a[L], !l.hasOwnProperty(L) || j === U || j === void 0 && U === void 0 || Tc(t, n, L, j, l, U);
                    return
                }
        }
        for (var O in a) j = a[O], a.hasOwnProperty(O) && j != null && !l.hasOwnProperty(O) && Ot(t, n, O, null, l, j);
        for (P in l) j = l[P], U = a[P], !l.hasOwnProperty(P) || j === U || j == null && U == null || Ot(t, n, P, j, l, U)
    }
    var wc = null,
        Ec = null;

    function hl(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }

    function hy(t) {
        switch (t) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function dy(t, n) {
        if (t === 0) switch (n) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return t === 1 && n === "foreignObject" ? 0 : t
    }

    function Ac(t, n) {
        return t === "textarea" || t === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null
    }
    var Rc = null;

    function Tx() {
        var t = window.event;
        return t && t.type === "popstate" ? t === Rc ? !1 : (Rc = t, !0) : (Rc = null, !1)
    }
    var my = typeof setTimeout == "function" ? setTimeout : void 0,
        wx = typeof clearTimeout == "function" ? clearTimeout : void 0,
        py = typeof Promise == "function" ? Promise : void 0,
        Ex = typeof queueMicrotask == "function" ? queueMicrotask : typeof py < "u" ? function(t) {
            return py.resolve(null).then(t).catch(Ax)
        } : my;

    function Ax(t) {
        setTimeout(function() {
            throw t
        })
    }

    function Qn(t) {
        return t === "head"
    }

    function yy(t, n) {
        var a = n,
            l = 0,
            o = 0;
        do {
            var h = a.nextSibling;
            if (t.removeChild(a), h && h.nodeType === 8)
                if (a = h.data, a === "/$") {
                    if (0 < l && 8 > l) {
                        a = l;
                        var g = t.ownerDocument;
                        if (a & 1 && Rs(g.documentElement), a & 2 && Rs(g.body), a & 4)
                            for (a = g.head, Rs(a), g = a.firstChild; g;) {
                                var b = g.nextSibling,
                                    T = g.nodeName;
                                g[qa] || T === "SCRIPT" || T === "STYLE" || T === "LINK" && g.rel.toLowerCase() === "stylesheet" || a.removeChild(g), g = b
                            }
                    }
                    if (o === 0) {
                        t.removeChild(h), zs(n);
                        return
                    }
                    o--
                } else a === "$" || a === "$?" || a === "$!" ? o++ : l = a.charCodeAt(0) - 48;
            else l = 0;
            a = h
        } while (a);
        zs(n)
    }

    function Oc(t) {
        var n = t.firstChild;
        for (n && n.nodeType === 10 && (n = n.nextSibling); n;) {
            var a = n;
            switch (n = n.nextSibling, a.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    Oc(a), jo(a);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (a.rel.toLowerCase() === "stylesheet") continue
            }
            t.removeChild(a)
        }
    }

    function Rx(t, n, a, l) {
        for (; t.nodeType === 1;) {
            var o = a;
            if (t.nodeName.toLowerCase() !== n.toLowerCase()) {
                if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break
            } else if (l) {
                if (!t[qa]) switch (n) {
                    case "meta":
                        if (!t.hasAttribute("itemprop")) break;
                        return t;
                    case "link":
                        if (h = t.getAttribute("rel"), h === "stylesheet" && t.hasAttribute("data-precedence")) break;
                        if (h !== o.rel || t.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || t.getAttribute("title") !== (o.title == null ? null : o.title)) break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence")) break;
                        return t;
                    case "script":
                        if (h = t.getAttribute("src"), (h !== (o.src == null ? null : o.src) || t.getAttribute("type") !== (o.type == null ? null : o.type) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && h && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
                        return t;
                    default:
                        return t
                }
            } else if (n === "input" && t.type === "hidden") {
                var h = o.name == null ? null : "" + o.name;
                if (o.type === "hidden" && t.getAttribute("name") === h) return t
            } else return t;
            if (t = Ke(t.nextSibling), t === null) break
        }
        return null
    }

    function Ox(t, n, a) {
        if (n === "") return null;
        for (; t.nodeType !== 3;)
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = Ke(t.nextSibling), t === null)) return null;
        return t
    }

    function Cc(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete"
    }

    function Cx(t, n) {
        var a = t.ownerDocument;
        if (t.data !== "$?" || a.readyState === "complete") n();
        else {
            var l = function() {
                n(), a.removeEventListener("DOMContentLoaded", l)
            };
            a.addEventListener("DOMContentLoaded", l), t._reactRetry = l
        }
    }

    function Ke(t) {
        for (; t != null; t = t.nextSibling) {
            var n = t.nodeType;
            if (n === 1 || n === 3) break;
            if (n === 8) {
                if (n = t.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F") break;
                if (n === "/$") return null
            }
        }
        return t
    }
    var Mc = null;

    function gy(t) {
        t = t.previousSibling;
        for (var n = 0; t;) {
            if (t.nodeType === 8) {
                var a = t.data;
                if (a === "$" || a === "$!" || a === "$?") {
                    if (n === 0) return t;
                    n--
                } else a === "/$" && n++
            }
            t = t.previousSibling
        }
        return null
    }

    function vy(t, n, a) {
        switch (n = hl(a), t) {
            case "html":
                if (t = n.documentElement, !t) throw Error(r(452));
                return t;
            case "head":
                if (t = n.head, !t) throw Error(r(453));
                return t;
            case "body":
                if (t = n.body, !t) throw Error(r(454));
                return t;
            default:
                throw Error(r(451))
        }
    }

    function Rs(t) {
        for (var n = t.attributes; n.length;) t.removeAttributeNode(n[0]);
        jo(t)
    }
    var Be = new Map,
        by = new Set;

    function dl(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var wn = X.d;
    X.d = {
        f: Mx,
        r: Dx,
        D: Nx,
        C: jx,
        L: Ux,
        m: zx,
        X: Vx,
        S: kx,
        M: _x
    };

    function Mx() {
        var t = wn.f(),
            n = al();
        return t || n
    }

    function Dx(t) {
        var n = Bi(t);
        n !== null && n.tag === 5 && n.type === "form" ? Bm(n) : wn.r(t)
    }
    var ba = typeof document > "u" ? null : document;

    function Sy(t, n, a) {
        var l = ba;
        if (l && typeof n == "string" && n) {
            var o = je(n);
            o = 'link[rel="' + t + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), by.has(o) || (by.add(o), t = {
                rel: t,
                crossOrigin: a,
                href: n
            }, l.querySelector(o) === null && (n = l.createElement("link"), ee(n, "link", t), Ft(n), l.head.appendChild(n)))
        }
    }

    function Nx(t) {
        wn.D(t), Sy("dns-prefetch", t, null)
    }

    function jx(t, n) {
        wn.C(t, n), Sy("preconnect", t, n)
    }

    function Ux(t, n, a) {
        wn.L(t, n, a);
        var l = ba;
        if (l && t && n) {
            var o = 'link[rel="preload"][as="' + je(n) + '"]';
            n === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + je(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + je(a.imageSizes) + '"]')) : o += '[href="' + je(t) + '"]';
            var h = o;
            switch (n) {
                case "style":
                    h = Sa(t);
                    break;
                case "script":
                    h = xa(t)
            }
            Be.has(h) || (t = y({
                rel: "preload",
                href: n === "image" && a && a.imageSrcSet ? void 0 : t,
                as: n
            }, a), Be.set(h, t), l.querySelector(o) !== null || n === "style" && l.querySelector(Os(h)) || n === "script" && l.querySelector(Cs(h)) || (n = l.createElement("link"), ee(n, "link", t), Ft(n), l.head.appendChild(n)))
        }
    }

    function zx(t, n) {
        wn.m(t, n);
        var a = ba;
        if (a && t) {
            var l = n && typeof n.as == "string" ? n.as : "script",
                o = 'link[rel="modulepreload"][as="' + je(l) + '"][href="' + je(t) + '"]',
                h = o;
            switch (l) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    h = xa(t)
            }
            if (!Be.has(h) && (t = y({
                    rel: "modulepreload",
                    href: t
                }, n), Be.set(h, t), a.querySelector(o) === null)) {
                switch (l) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (a.querySelector(Cs(h))) return
                }
                l = a.createElement("link"), ee(l, "link", t), Ft(l), a.head.appendChild(l)
            }
        }
    }

    function kx(t, n, a) {
        wn.S(t, n, a);
        var l = ba;
        if (l && t) {
            var o = Hi(l).hoistableStyles,
                h = Sa(t);
            n = n || "default";
            var g = o.get(h);
            if (!g) {
                var b = {
                    loading: 0,
                    preload: null
                };
                if (g = l.querySelector(Os(h))) b.loading = 5;
                else {
                    t = y({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": n
                    }, a), (a = Be.get(h)) && Dc(t, a);
                    var T = g = l.createElement("link");
                    Ft(T), ee(T, "link", t), T._p = new Promise(function(N, L) {
                        T.onload = N, T.onerror = L
                    }), T.addEventListener("load", function() {
                        b.loading |= 1
                    }), T.addEventListener("error", function() {
                        b.loading |= 2
                    }), b.loading |= 4, ml(g, n, l)
                }
                g = {
                    type: "stylesheet",
                    instance: g,
                    count: 1,
                    state: b
                }, o.set(h, g)
            }
        }
    }

    function Vx(t, n) {
        wn.X(t, n);
        var a = ba;
        if (a && t) {
            var l = Hi(a).hoistableScripts,
                o = xa(t),
                h = l.get(o);
            h || (h = a.querySelector(Cs(o)), h || (t = y({
                src: t,
                async: !0
            }, n), (n = Be.get(o)) && Nc(t, n), h = a.createElement("script"), Ft(h), ee(h, "link", t), a.head.appendChild(h)), h = {
                type: "script",
                instance: h,
                count: 1,
                state: null
            }, l.set(o, h))
        }
    }

    function _x(t, n) {
        wn.M(t, n);
        var a = ba;
        if (a && t) {
            var l = Hi(a).hoistableScripts,
                o = xa(t),
                h = l.get(o);
            h || (h = a.querySelector(Cs(o)), h || (t = y({
                src: t,
                async: !0,
                type: "module"
            }, n), (n = Be.get(o)) && Nc(t, n), h = a.createElement("script"), Ft(h), ee(h, "link", t), a.head.appendChild(h)), h = {
                type: "script",
                instance: h,
                count: 1,
                state: null
            }, l.set(o, h))
        }
    }

    function xy(t, n, a, l) {
        var o = (o = lt.current) ? dl(o) : null;
        if (!o) throw Error(r(446));
        switch (t) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof a.precedence == "string" && typeof a.href == "string" ? (n = Sa(a.href), a = Hi(o).hoistableStyles, l = a.get(n), l || (l = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, a.set(n, l)), l) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                    t = Sa(a.href);
                    var h = Hi(o).hoistableStyles,
                        g = h.get(t);
                    if (g || (o = o.ownerDocument || o, g = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, h.set(t, g), (h = o.querySelector(Os(t))) && !h._p && (g.instance = h, g.state.loading = 5), Be.has(t) || (a = {
                            rel: "preload",
                            as: "style",
                            href: a.href,
                            crossOrigin: a.crossOrigin,
                            integrity: a.integrity,
                            media: a.media,
                            hrefLang: a.hrefLang,
                            referrerPolicy: a.referrerPolicy
                        }, Be.set(t, a), h || Lx(o, t, a, g.state))), n && l === null) throw Error(r(528, ""));
                    return g
                }
                if (n && l !== null) throw Error(r(529, ""));
                return null;
            case "script":
                return n = a.async, a = a.src, typeof a == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = xa(a), a = Hi(o).hoistableScripts, l = a.get(n), l || (l = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, a.set(n, l)), l) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(r(444, t))
        }
    }

    function Sa(t) {
        return 'href="' + je(t) + '"'
    }

    function Os(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }

    function Ty(t) {
        return y({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }

    function Lx(t, n, a, l) {
        t.querySelector('link[rel="preload"][as="style"][' + n + "]") ? l.loading = 1 : (n = t.createElement("link"), l.preload = n, n.addEventListener("load", function() {
            return l.loading |= 1
        }), n.addEventListener("error", function() {
            return l.loading |= 2
        }), ee(n, "link", a), Ft(n), t.head.appendChild(n))
    }

    function xa(t) {
        return '[src="' + je(t) + '"]'
    }

    function Cs(t) {
        return "script[async]" + t
    }

    function wy(t, n, a) {
        if (n.count++, n.instance === null) switch (n.type) {
            case "style":
                var l = t.querySelector('style[data-href~="' + je(a.href) + '"]');
                if (l) return n.instance = l, Ft(l), l;
                var o = y({}, a, {
                    "data-href": a.href,
                    "data-precedence": a.precedence,
                    href: null,
                    precedence: null
                });
                return l = (t.ownerDocument || t).createElement("style"), Ft(l), ee(l, "style", o), ml(l, a.precedence, t), n.instance = l;
            case "stylesheet":
                o = Sa(a.href);
                var h = t.querySelector(Os(o));
                if (h) return n.state.loading |= 4, n.instance = h, Ft(h), h;
                l = Ty(a), (o = Be.get(o)) && Dc(l, o), h = (t.ownerDocument || t).createElement("link"), Ft(h);
                var g = h;
                return g._p = new Promise(function(b, T) {
                    g.onload = b, g.onerror = T
                }), ee(h, "link", l), n.state.loading |= 4, ml(h, a.precedence, t), n.instance = h;
            case "script":
                return h = xa(a.src), (o = t.querySelector(Cs(h))) ? (n.instance = o, Ft(o), o) : (l = a, (o = Be.get(h)) && (l = y({}, a), Nc(l, o)), t = t.ownerDocument || t, o = t.createElement("script"), Ft(o), ee(o, "link", l), t.head.appendChild(o), n.instance = o);
            case "void":
                return null;
            default:
                throw Error(r(443, n.type))
        } else n.type === "stylesheet" && (n.state.loading & 4) === 0 && (l = n.instance, n.state.loading |= 4, ml(l, a.precedence, t));
        return n.instance
    }

    function ml(t, n, a) {
        for (var l = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), o = l.length ? l[l.length - 1] : null, h = o, g = 0; g < l.length; g++) {
            var b = l[g];
            if (b.dataset.precedence === n) h = b;
            else if (h !== o) break
        }
        h ? h.parentNode.insertBefore(t, h.nextSibling) : (n = a.nodeType === 9 ? a.head : a, n.insertBefore(t, n.firstChild))
    }

    function Dc(t, n) {
        t.crossOrigin == null && (t.crossOrigin = n.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy), t.title == null && (t.title = n.title)
    }

    function Nc(t, n) {
        t.crossOrigin == null && (t.crossOrigin = n.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy), t.integrity == null && (t.integrity = n.integrity)
    }
    var pl = null;

    function Ey(t, n, a) {
        if (pl === null) {
            var l = new Map,
                o = pl = new Map;
            o.set(a, l)
        } else o = pl, l = o.get(a), l || (l = new Map, o.set(a, l));
        if (l.has(t)) return l;
        for (l.set(t, null), a = a.getElementsByTagName(t), o = 0; o < a.length; o++) {
            var h = a[o];
            if (!(h[qa] || h[se] || t === "link" && h.getAttribute("rel") === "stylesheet") && h.namespaceURI !== "http://www.w3.org/2000/svg") {
                var g = h.getAttribute(n) || "";
                g = t + g;
                var b = l.get(g);
                b ? b.push(h) : l.set(g, [h])
            }
        }
        return l
    }

    function Ay(t, n, a) {
        t = t.ownerDocument || t, t.head.insertBefore(a, n === "title" ? t.querySelector("head > title") : null)
    }

    function Bx(t, n, a) {
        if (a === 1 || n.itemProp != null) return !1;
        switch (t) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "") break;
                return !0;
            case "link":
                if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError) break;
                return n.rel === "stylesheet" ? (t = n.disabled, typeof n.precedence == "string" && t == null) : !0;
            case "script":
                if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string") return !0
        }
        return !1
    }

    function Ry(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }
    var Ms = null;

    function Hx() {}

    function qx(t, n, a) {
        if (Ms === null) throw Error(r(475));
        var l = Ms;
        if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
            if (n.instance === null) {
                var o = Sa(a.href),
                    h = t.querySelector(Os(o));
                if (h) {
                    t = h._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = yl.bind(l), t.then(l, l)), n.state.loading |= 4, n.instance = h, Ft(h);
                    return
                }
                h = t.ownerDocument || t, a = Ty(a), (o = Be.get(o)) && Dc(a, o), h = h.createElement("link"), Ft(h);
                var g = h;
                g._p = new Promise(function(b, T) {
                    g.onload = b, g.onerror = T
                }), ee(h, "link", a), n.instance = h
            }
            l.stylesheets === null && (l.stylesheets = new Map), l.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (l.count++, n = yl.bind(l), t.addEventListener("load", n), t.addEventListener("error", n))
        }
    }

    function Px() {
        if (Ms === null) throw Error(r(475));
        var t = Ms;
        return t.stylesheets && t.count === 0 && jc(t, t.stylesheets), 0 < t.count ? function(n) {
            var a = setTimeout(function() {
                if (t.stylesheets && jc(t, t.stylesheets), t.unsuspend) {
                    var l = t.unsuspend;
                    t.unsuspend = null, l()
                }
            }, 6e4);
            return t.unsuspend = n,
                function() {
                    t.unsuspend = null, clearTimeout(a)
                }
        } : null
    }

    function yl() {
        if (this.count--, this.count === 0) {
            if (this.stylesheets) jc(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null, t()
            }
        }
    }
    var gl = null;

    function jc(t, n) {
        t.stylesheets = null, t.unsuspend !== null && (t.count++, gl = new Map, n.forEach(Gx, t), gl = null, yl.call(t))
    }

    function Gx(t, n) {
        if (!(n.state.loading & 4)) {
            var a = gl.get(t);
            if (a) var l = a.get(null);
            else {
                a = new Map, gl.set(t, a);
                for (var o = t.querySelectorAll("link[data-precedence],style[data-precedence]"), h = 0; h < o.length; h++) {
                    var g = o[h];
                    (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") && (a.set(g.dataset.precedence, g), l = g)
                }
                l && a.set(null, l)
            }
            o = n.instance, g = o.getAttribute("data-precedence"), h = a.get(g) || l, h === l && a.set(null, o), a.set(g, o), this.count++, l = yl.bind(this), o.addEventListener("load", l), o.addEventListener("error", l), h ? h.parentNode.insertBefore(o, h.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(o, t.firstChild)), n.state.loading |= 4
        }
    }
    var Ds = {
        $$typeof: B,
        Provider: null,
        Consumer: null,
        _currentValue: I,
        _currentValue2: I,
        _threadCount: 0
    };

    function Kx(t, n, a, l, o, h, g, b) {
        this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Co(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Co(0), this.hiddenUpdates = Co(null), this.identifierPrefix = l, this.onUncaughtError = o, this.onCaughtError = h, this.onRecoverableError = g, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = new Map
    }

    function Oy(t, n, a, l, o, h, g, b, T, N, L, P) {
        return t = new Kx(t, n, a, g, b, T, N, P), n = 1, h === !0 && (n |= 24), h = Te(3, null, null, n), t.current = h, h.stateNode = t, n = du(), n.refCount++, t.pooledCache = n, n.refCount++, h.memoizedState = {
            element: l,
            isDehydrated: a,
            cache: n
        }, gu(h), t
    }

    function Cy(t) {
        return t ? (t = Wi, t) : Wi
    }

    function My(t, n, a, l, o, h) {
        o = Cy(o), l.context === null ? l.context = o : l.pendingContext = o, l = jn(n), l.payload = {
            element: a
        }, h = h === void 0 ? null : h, h !== null && (l.callback = h), a = Un(t, l, n), a !== null && (Oe(a, t, n), rs(a, t, n))
    }

    function Dy(t, n) {
        if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
            var a = t.retryLane;
            t.retryLane = a !== 0 && a < n ? a : n
        }
    }

    function Uc(t, n) {
        Dy(t, n), (t = t.alternate) && Dy(t, n)
    }

    function Ny(t) {
        if (t.tag === 13) {
            var n = Ji(t, 67108864);
            n !== null && Oe(n, t, 67108864), Uc(t, 67108864)
        }
    }
    var vl = !0;

    function Qx(t, n, a, l) {
        var o = z.T;
        z.T = null;
        var h = X.p;
        try {
            X.p = 2, zc(t, n, a, l)
        } finally {
            X.p = h, z.T = o
        }
    }

    function Yx(t, n, a, l) {
        var o = z.T;
        z.T = null;
        var h = X.p;
        try {
            X.p = 8, zc(t, n, a, l)
        } finally {
            X.p = h, z.T = o
        }
    }

    function zc(t, n, a, l) {
        if (vl) {
            var o = kc(l);
            if (o === null) xc(t, n, l, bl, a), Uy(t, l);
            else if (Zx(o, t, n, a, l)) l.stopPropagation();
            else if (Uy(t, l), n & 4 && -1 < Xx.indexOf(t)) {
                for (; o !== null;) {
                    var h = Bi(o);
                    if (h !== null) switch (h.tag) {
                        case 3:
                            if (h = h.stateNode, h.current.memoizedState.isDehydrated) {
                                var g = li(h.pendingLanes);
                                if (g !== 0) {
                                    var b = h;
                                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; g;) {
                                        var T = 1 << 31 - Se(g);
                                        b.entanglements[1] |= T, g &= ~T
                                    }
                                    en(h), (Et & 6) === 0 && (nl = Ie() + 500, ws(0))
                                }
                            }
                            break;
                        case 13:
                            b = Ji(h, 2), b !== null && Oe(b, h, 2), al(), Uc(h, 2)
                    }
                    if (h = kc(l), h === null && xc(t, n, l, bl, a), h === o) break;
                    o = h
                }
                o !== null && l.stopPropagation()
            } else xc(t, n, l, null, a)
        }
    }

    function kc(t) {
        return t = Ho(t), Vc(t)
    }
    var bl = null;

    function Vc(t) {
        if (bl = null, t = Li(t), t !== null) {
            var n = c(t);
            if (n === null) t = null;
            else {
                var a = n.tag;
                if (a === 13) {
                    if (t = f(n), t !== null) return t;
                    t = null
                } else if (a === 3) {
                    if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
                    t = null
                } else n !== t && (t = null)
            }
        }
        return bl = t, null
    }

    function jy(t) {
        switch (t) {
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
                switch (j1()) {
                    case Yh:
                        return 2;
                    case Xh:
                        return 8;
                    case fr:
                    case U1:
                        return 32;
                    case Zh:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var _c = !1,
        Yn = null,
        Xn = null,
        Zn = null,
        Ns = new Map,
        js = new Map,
        Fn = [],
        Xx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function Uy(t, n) {
        switch (t) {
            case "focusin":
            case "focusout":
                Yn = null;
                break;
            case "dragenter":
            case "dragleave":
                Xn = null;
                break;
            case "mouseover":
            case "mouseout":
                Zn = null;
                break;
            case "pointerover":
            case "pointerout":
                Ns.delete(n.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                js.delete(n.pointerId)
        }
    }

    function Us(t, n, a, l, o, h) {
        return t === null || t.nativeEvent !== h ? (t = {
            blockedOn: n,
            domEventName: a,
            eventSystemFlags: l,
            nativeEvent: h,
            targetContainers: [o]
        }, n !== null && (n = Bi(n), n !== null && Ny(n)), t) : (t.eventSystemFlags |= l, n = t.targetContainers, o !== null && n.indexOf(o) === -1 && n.push(o), t)
    }

    function Zx(t, n, a, l, o) {
        switch (n) {
            case "focusin":
                return Yn = Us(Yn, t, n, a, l, o), !0;
            case "dragenter":
                return Xn = Us(Xn, t, n, a, l, o), !0;
            case "mouseover":
                return Zn = Us(Zn, t, n, a, l, o), !0;
            case "pointerover":
                var h = o.pointerId;
                return Ns.set(h, Us(Ns.get(h) || null, t, n, a, l, o)), !0;
            case "gotpointercapture":
                return h = o.pointerId, js.set(h, Us(js.get(h) || null, t, n, a, l, o)), !0
        }
        return !1
    }

    function zy(t) {
        var n = Li(t.target);
        if (n !== null) {
            var a = c(n);
            if (a !== null) {
                if (n = a.tag, n === 13) {
                    if (n = f(a), n !== null) {
                        t.blockedOn = n, q1(t.priority, function() {
                            if (a.tag === 13) {
                                var l = Re();
                                l = Mo(l);
                                var o = Ji(a, l);
                                o !== null && Oe(o, a, l), Uc(a, l)
                            }
                        });
                        return
                    }
                } else if (n === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }

    function Sl(t) {
        if (t.blockedOn !== null) return !1;
        for (var n = t.targetContainers; 0 < n.length;) {
            var a = kc(t.nativeEvent);
            if (a === null) {
                a = t.nativeEvent;
                var l = new a.constructor(a.type, a);
                Bo = l, a.target.dispatchEvent(l), Bo = null
            } else return n = Bi(a), n !== null && Ny(n), t.blockedOn = a, !1;
            n.shift()
        }
        return !0
    }

    function ky(t, n, a) {
        Sl(t) && a.delete(n)
    }

    function Fx() {
        _c = !1, Yn !== null && Sl(Yn) && (Yn = null), Xn !== null && Sl(Xn) && (Xn = null), Zn !== null && Sl(Zn) && (Zn = null), Ns.forEach(ky), js.forEach(ky)
    }

    function xl(t, n) {
        t.blockedOn === n && (t.blockedOn = null, _c || (_c = !0, e.unstable_scheduleCallback(e.unstable_NormalPriority, Fx)))
    }
    var Tl = null;

    function Vy(t) {
        Tl !== t && (Tl = t, e.unstable_scheduleCallback(e.unstable_NormalPriority, function() {
            Tl === t && (Tl = null);
            for (var n = 0; n < t.length; n += 3) {
                var a = t[n],
                    l = t[n + 1],
                    o = t[n + 2];
                if (typeof l != "function") {
                    if (Vc(l || a) === null) continue;
                    break
                }
                var h = Bi(a);
                h !== null && (t.splice(n, 3), n -= 3, Vu(h, {
                    pending: !0,
                    data: o,
                    method: a.method,
                    action: l
                }, l, o))
            }
        }))
    }

    function zs(t) {
        function n(T) {
            return xl(T, t)
        }
        Yn !== null && xl(Yn, t), Xn !== null && xl(Xn, t), Zn !== null && xl(Zn, t), Ns.forEach(n), js.forEach(n);
        for (var a = 0; a < Fn.length; a++) {
            var l = Fn[a];
            l.blockedOn === t && (l.blockedOn = null)
        }
        for (; 0 < Fn.length && (a = Fn[0], a.blockedOn === null);) zy(a), a.blockedOn === null && Fn.shift();
        if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
            for (l = 0; l < a.length; l += 3) {
                var o = a[l],
                    h = a[l + 1],
                    g = o[de] || null;
                if (typeof h == "function") g || Vy(a);
                else if (g) {
                    var b = null;
                    if (h && h.hasAttribute("formAction")) {
                        if (o = h, g = h[de] || null) b = g.formAction;
                        else if (Vc(o) !== null) continue
                    } else b = g.action;
                    typeof b == "function" ? a[l + 1] = b : (a.splice(l, 3), l -= 3), Vy(a)
                }
            }
    }

    function Lc(t) {
        this._internalRoot = t
    }
    wl.prototype.render = Lc.prototype.render = function(t) {
        var n = this._internalRoot;
        if (n === null) throw Error(r(409));
        var a = n.current,
            l = Re();
        My(a, l, t, n, null, null)
    }, wl.prototype.unmount = Lc.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var n = t.containerInfo;
            My(t.current, 2, null, t, null, null), al(), n[_i] = null
        }
    };

    function wl(t) {
        this._internalRoot = t
    }
    wl.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var n = $h();
            t = {
                blockedOn: null,
                target: t,
                priority: n
            };
            for (var a = 0; a < Fn.length && n !== 0 && n < Fn[a].priority; a++);
            Fn.splice(a, 0, t), a === 0 && zy(t)
        }
    };
    var _y = i.version;
    if (_y !== "19.1.0") throw Error(r(527, _y, "19.1.0"));
    X.findDOMNode = function(t) {
        var n = t._reactInternals;
        if (n === void 0) throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
        return t = d(n), t = t !== null ? p(t) : null, t = t === null ? null : t.stateNode, t
    };
    var Ix = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: z,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var El = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!El.isDisabled && El.supportsFiber) try {
            La = El.inject(Ix), be = El
        } catch {}
    }
    return Vs.createRoot = function(t, n) {
        if (!u(t)) throw Error(r(299));
        var a = !1,
            l = "",
            o = $m,
            h = tp,
            g = ep,
            b = null;
        return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (o = n.onUncaughtError), n.onCaughtError !== void 0 && (h = n.onCaughtError), n.onRecoverableError !== void 0 && (g = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (b = n.unstable_transitionCallbacks)), n = Oy(t, 1, !1, null, null, a, l, o, h, g, b, null), t[_i] = n.current, Sc(t), new Lc(n)
    }, Vs.hydrateRoot = function(t, n, a) {
        if (!u(t)) throw Error(r(299));
        var l = !1,
            o = "",
            h = $m,
            g = tp,
            b = ep,
            T = null,
            N = null;
        return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (h = a.onUncaughtError), a.onCaughtError !== void 0 && (g = a.onCaughtError), a.onRecoverableError !== void 0 && (b = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (T = a.unstable_transitionCallbacks), a.formState !== void 0 && (N = a.formState)), n = Oy(t, 1, !0, n, a ? ? null, l, o, h, g, b, T, N), n.context = Cy(null), a = n.current, l = Re(), l = Mo(l), o = jn(l), o.callback = null, Un(a, o, l), a = l, n.current.lanes = a, Ha(n, a), en(n), t[_i] = n.current, Sc(t), new wl(n)
    }, Vs.version = "19.1.0", Vs
}
var Xy;

function uT() {
    if (Xy) return qc.exports;
    Xy = 1;

    function e() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
        } catch (i) {
            console.error(i)
        }
    }
    return e(), qc.exports = oT(), qc.exports
}
var cT = uT();

function fT(e, i) {
    if (e instanceof RegExp) return {
        keys: !1,
        pattern: e
    };
    var s, r, u, c, f = [],
        m = "",
        d = e.split("/");
    for (d[0] || d.shift(); u = d.shift();) s = u[0], s === "*" ? (f.push(s), m += u[1] === "?" ? "(?:/(.*))?" : "/(.*)") : s === ":" ? (r = u.indexOf("?", 1), c = u.indexOf(".", 1), f.push(u.substring(1, ~r ? r : ~c ? c : u.length)), m += ~r && !~c ? "(?:/([^/]+?))?" : "/([^/]+?)", ~c && (m += (~r ? "?" : "") + "\\" + u.substring(c))) : m += "/" + u;
    return {
        keys: f,
        pattern: new RegExp("^" + m + (i ? "(?=$|/)" : "/?$"), "i")
    }
}
var Qc = {
        exports: {}
    },
    Yc = {};
var Zy;

function hT() {
    if (Zy) return Yc;
    Zy = 1;
    var e = ho();

    function i(v, S) {
        return v === S && (v !== 0 || 1 / v === 1 / S) || v !== v && S !== S
    }
    var s = typeof Object.is == "function" ? Object.is : i,
        r = e.useState,
        u = e.useEffect,
        c = e.useLayoutEffect,
        f = e.useDebugValue;

    function m(v, S) {
        var R = S(),
            w = r({
                inst: {
                    value: R,
                    getSnapshot: S
                }
            }),
            C = w[0].inst,
            D = w[1];
        return c(function() {
            C.value = R, C.getSnapshot = S, d(C) && D({
                inst: C
            })
        }, [v, R, S]), u(function() {
            return d(C) && D({
                inst: C
            }), v(function() {
                d(C) && D({
                    inst: C
                })
            })
        }, [v]), f(R), R
    }

    function d(v) {
        var S = v.getSnapshot;
        v = v.value;
        try {
            var R = S();
            return !s(v, R)
        } catch {
            return !0
        }
    }

    function p(v, S) {
        return S()
    }
    var y = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? p : m;
    return Yc.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : y, Yc
}
var Fy;

function dT() {
    return Fy || (Fy = 1, Qc.exports = hT()), Qc.exports
}
var mT = dT();
const pT = aT.useInsertionEffect,
    yT = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    gT = yT ? k.useLayoutEffect : k.useEffect,
    vT = pT || gT,
    Fv = e => {
        const i = k.useRef([e, (...s) => i[0](...s)]).current;
        return vT(() => {
            i[0] = e
        }), i[1]
    },
    bT = "popstate",
    nh = "pushState",
    ih = "replaceState",
    ST = "hashchange",
    Iy = [bT, nh, ih, ST],
    xT = e => {
        for (const i of Iy) addEventListener(i, e);
        return () => {
            for (const i of Iy) removeEventListener(i, e)
        }
    },
    Iv = (e, i) => mT.useSyncExternalStore(xT, e, i),
    Jy = () => location.search,
    TT = ({
        ssrSearch: e
    } = {}) => Iv(Jy, e != null ? () => e : Jy),
    Wy = () => location.pathname,
    wT = ({
        ssrPath: e
    } = {}) => Iv(Wy, e != null ? () => e : Wy),
    ET = (e, {
        replace: i = !1,
        state: s = null
    } = {}) => history[i ? ih : nh](s, "", e),
    AT = (e = {}) => [wT(e), ET],
    $y = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[$y] > "u") {
    for (const e of [nh, ih]) {
        const i = history[e];
        history[e] = function() {
            const s = i.apply(this, arguments),
                r = new Event(e);
            return r.arguments = arguments, dispatchEvent(r), s
        }
    }
    Object.defineProperty(window, $y, {
        value: !0
    })
}
const RT = (e, i) => i.toLowerCase().indexOf(e.toLowerCase()) ? "~" + i : i.slice(e.length) || "/",
    Jv = (e = "") => e === "/" ? "" : e,
    OT = (e, i) => e[0] === "~" ? e.slice(1) : Jv(i) + e,
    CT = (e = "", i) => RT(tg(Jv(e)), tg(i)),
    tg = e => {
        try {
            return decodeURI(e)
        } catch {
            return e
        }
    },
    Wv = {
        hook: AT,
        searchHook: TT,
        parser: fT,
        base: "",
        ssrPath: void 0,
        ssrSearch: void 0,
        ssrContext: void 0,
        hrefs: e => e,
        aroundNav: (e, i, s) => e(i, s)
    },
    $v = k.createContext(Wv),
    ar = () => k.useContext($v),
    t0 = {},
    e0 = k.createContext(t0),
    MT = () => k.useContext(e0),
    mo = e => {
        const [i, s] = e.hook(e);
        return [CT(e.base, i), Fv((r, u) => e.aroundNav(s, OT(r, e.base), u))]
    },
    n0 = () => mo(ar()),
    i0 = (e, i, s, r) => {
        const {
            pattern: u,
            keys: c
        } = i instanceof RegExp ? {
            keys: !1,
            pattern: i
        } : e(i || "*", r), f = u.exec(s) || [], [m, ...d] = f;
        return m !== void 0 ? [!0, (() => {
            const p = c !== !1 ? Object.fromEntries(c.map((v, S) => [v, d[S]])) : f.groups;
            let y = { ...d
            };
            return p && Object.assign(y, p), y
        })(), ...r ? [m] : []] : [!1, null]
    },
    a0 = ({
        children: e,
        ...i
    }) => {
        const s = ar(),
            r = i.hook ? Wv : s;
        let u = r;
        const [c, f = i.ssrSearch ? ? ""] = i.ssrPath ? .split("?") ? ? [];
        c && (i.ssrSearch = f, i.ssrPath = c), i.hrefs = i.hrefs ? ? i.hook ? .hrefs, i.searchHook = i.searchHook ? ? i.hook ? .searchHook;
        let m = k.useRef({}),
            d = m.current,
            p = d;
        for (let y in r) {
            const v = y === "base" ? r[y] + (i[y] ? ? "") : i[y] ? ? r[y];
            d === p && v !== p[y] && (m.current = p = { ...p
            }), p[y] = v, (v !== r[y] || v !== u[y]) && (u = p)
        }
        return k.createElement($v.Provider, {
            value: u,
            children: e
        })
    },
    eg = ({
        children: e,
        component: i
    }, s) => i ? k.createElement(i, {
        params: s
    }) : typeof e == "function" ? e(s) : e,
    DT = e => {
        let i = k.useRef(t0);
        const s = i.current;
        return i.current = Object.keys(e).length !== Object.keys(s).length || Object.entries(e).some(([r, u]) => u !== s[r]) ? e : s
    },
    Al = ({
        path: e,
        nest: i,
        match: s,
        ...r
    }) => {
        const u = ar(),
            [c] = mo(u),
            [f, m, d] = s ? ? i0(u.parser, e, c, i),
            p = DT({ ...MT(),
                ...m
            });
        if (!f) return null;
        const y = d ? k.createElement(a0, {
            base: d
        }, eg(r, p)) : eg(r, p);
        return k.createElement(e0.Provider, {
            value: p,
            children: y
        })
    };
k.forwardRef((e, i) => {
    const s = ar(),
        [r, u] = mo(s),
        {
            to: c = "",
            href: f = c,
            onClick: m,
            asChild: d,
            children: p,
            className: y,
            replace: v,
            state: S,
            transition: R,
            ...w
        } = e,
        C = Fv(V => {
            V.ctrlKey || V.metaKey || V.altKey || V.shiftKey || V.button !== 0 || (m ? .(V), V.defaultPrevented || (V.preventDefault(), u(f, e)))
        }),
        D = s.hrefs(f[0] === "~" ? f.slice(1) : s.base + f, s);
    return d && k.isValidElement(p) ? k.cloneElement(p, {
        onClick: C,
        href: D
    }) : k.createElement("a", { ...w,
        onClick: C,
        href: D,
        className: y ? .call ? y(r === f) : y,
        children: p,
        ref: i
    })
});
const s0 = e => Array.isArray(e) ? e.flatMap(i => s0(i && i.type === k.Fragment ? i.props.children : i)) : [e],
    NT = ({
        children: e,
        location: i
    }) => {
        const s = ar(),
            [r] = mo(s);
        for (const u of s0(e)) {
            let c = 0;
            if (k.isValidElement(u) && (c = i0(s.parser, u.props.path, i || r, u.props.nest))[0]) return k.cloneElement(u, {
                match: c
            })
        }
        return null
    },
    ah = k.createContext({});

function sh(e) {
    const i = k.useRef(null);
    return i.current === null && (i.current = e()), i.current
}
const jT = typeof window < "u",
    Il = jT ? k.useLayoutEffect : k.useEffect,
    po = k.createContext(null);

function rh(e, i) {
    e.indexOf(i) === -1 && e.push(i)
}

function Jl(e, i) {
    const s = e.indexOf(i);
    s > -1 && e.splice(s, 1)
}
const ln = (e, i, s) => s > i ? i : s < e ? e : s;
let yo = () => {};
const ii = {},
    r0 = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
    l0 = e => typeof e == "object" && e !== null,
    o0 = e => /^0[^.\s]+$/u.test(e);

function u0(e) {
    let i;
    return () => (i === void 0 && (i = e()), i)
}
const qe = e => e,
    sr = (...e) => e.reduce((i, s) => r => s(i(r))),
    Is = (e, i, s) => {
        const r = i - e;
        return r ? (s - e) / r : 1
    };
class lh {
    constructor() {
        this.subscriptions = []
    }
    add(i) {
        return rh(this.subscriptions, i), () => Jl(this.subscriptions, i)
    }
    notify(i, s, r) {
        const u = this.subscriptions.length;
        if (u)
            if (u === 1) this.subscriptions[0](i, s, r);
            else
                for (let c = 0; c < u; c++) {
                    const f = this.subscriptions[c];
                    f && f(i, s, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const De = e => e * 1e3,
    He = e => e / 1e3,
    c0 = (e, i) => i ? e * (1e3 / i) : 0,
    f0 = (e, i, s) => (((1 - 3 * s + 3 * i) * e + (3 * s - 6 * i)) * e + 3 * i) * e,
    UT = 1e-7,
    zT = 12;

function kT(e, i, s, r, u) {
    let c, f, m = 0;
    do f = i + (s - i) / 2, c = f0(f, r, u) - e, c > 0 ? s = f : i = f; while (Math.abs(c) > UT && ++m < zT);
    return f
}

function rr(e, i, s, r) {
    if (e === i && s === r) return qe;
    const u = c => kT(c, 0, 1, e, s);
    return c => c === 0 || c === 1 ? c : f0(u(c), i, r)
}
const h0 = e => i => i <= .5 ? e(2 * i) / 2 : (2 - e(2 * (1 - i))) / 2,
    d0 = e => i => 1 - e(1 - i),
    m0 = rr(.33, 1.53, .69, .99),
    oh = d0(m0),
    p0 = h0(oh),
    y0 = e => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * oh(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
    uh = e => 1 - Math.sin(Math.acos(e)),
    g0 = d0(uh),
    v0 = h0(uh),
    VT = rr(.42, 0, 1, 1),
    _T = rr(0, 0, .58, 1),
    b0 = rr(.42, 0, .58, 1),
    LT = e => Array.isArray(e) && typeof e[0] != "number",
    S0 = e => Array.isArray(e) && typeof e[0] == "number",
    BT = {
        linear: qe,
        easeIn: VT,
        easeInOut: b0,
        easeOut: _T,
        circIn: uh,
        circInOut: v0,
        circOut: g0,
        backIn: oh,
        backInOut: p0,
        backOut: m0,
        anticipate: y0
    },
    HT = e => typeof e == "string",
    ng = e => {
        if (S0(e)) {
            yo(e.length === 4);
            const [i, s, r, u] = e;
            return rr(i, s, r, u)
        } else if (HT(e)) return BT[e];
        return e
    },
    Rl = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];

function qT(e) {
    let i = new Set,
        s = new Set,
        r = !1,
        u = !1;
    const c = new WeakSet;
    let f = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function m(p) {
        c.has(p) && (d.schedule(p), e()), p(f)
    }
    const d = {
        schedule: (p, y = !1, v = !1) => {
            const R = v && r ? i : s;
            return y && c.add(p), R.add(p), p
        },
        cancel: p => {
            s.delete(p), c.delete(p)
        },
        process: p => {
            if (f = p, r) {
                u = !0;
                return
            }
            r = !0;
            const y = i;
            i = s, s = y, i.forEach(m), i.clear(), r = !1, u && (u = !1, d.process(p))
        }
    };
    return d
}
const PT = 40;

function x0(e, i) {
    let s = !1,
        r = !0;
    const u = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        c = () => s = !0,
        f = Rl.reduce((B, q) => (B[q] = qT(c), B), {}),
        {
            setup: m,
            read: d,
            resolveKeyframes: p,
            preUpdate: y,
            update: v,
            preRender: S,
            render: R,
            postRender: w
        } = f,
        C = () => {
            const B = ii.useManualTiming,
                q = B ? u.timestamp : performance.now();
            s = !1, B || (u.delta = r ? 1e3 / 60 : Math.max(Math.min(q - u.timestamp, PT), 1)), u.timestamp = q, u.isProcessing = !0, m.process(u), d.process(u), p.process(u), y.process(u), v.process(u), S.process(u), R.process(u), w.process(u), u.isProcessing = !1, s && i && (r = !1, e(C))
        },
        D = () => {
            s = !0, r = !0, u.isProcessing || e(C)
        };
    return {
        schedule: Rl.reduce((B, q) => {
            const _ = f[q];
            return B[q] = (Q, tt = !1, Y = !1) => (s || D(), _.schedule(Q, tt, Y)), B
        }, {}),
        cancel: B => {
            for (let q = 0; q < Rl.length; q++) f[Rl[q]].cancel(B)
        },
        state: u,
        steps: f
    }
}
const {
    schedule: Nt,
    cancel: ai,
    state: ne,
    steps: Xc
} = x0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : qe, !0);
let _l;

function GT() {
    _l = void 0
}
const fe = {
        now: () => (_l === void 0 && fe.set(ne.isProcessing || ii.useManualTiming ? ne.timestamp : performance.now()), _l),
        set: e => {
            _l = e, queueMicrotask(GT)
        }
    },
    T0 = e => i => typeof i == "string" && i.startsWith(e),
    w0 = T0("--"),
    KT = T0("var(--"),
    ch = e => KT(e) ? QT.test(e.split("/*")[0].trim()) : !1,
    QT = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

function ig(e) {
    return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--")
}
const za = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    Js = { ...za,
        transform: e => ln(0, 1, e)
    },
    Ol = { ...za,
        default: 1
    },
    Qs = e => Math.round(e * 1e5) / 1e5,
    fh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function YT(e) {
    return e == null
}
const XT = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    hh = (e, i) => s => !!(typeof s == "string" && XT.test(s) && s.startsWith(e) || i && !YT(s) && Object.prototype.hasOwnProperty.call(s, i)),
    E0 = (e, i, s) => r => {
        if (typeof r != "string") return r;
        const [u, c, f, m] = r.match(fh);
        return {
            [e]: parseFloat(u),
            [i]: parseFloat(c),
            [s]: parseFloat(f),
            alpha: m !== void 0 ? parseFloat(m) : 1
        }
    },
    ZT = e => ln(0, 255, e),
    Zc = { ...za,
        transform: e => Math.round(ZT(e))
    },
    Mi = {
        test: hh("rgb", "red"),
        parse: E0("red", "green", "blue"),
        transform: ({
            red: e,
            green: i,
            blue: s,
            alpha: r = 1
        }) => "rgba(" + Zc.transform(e) + ", " + Zc.transform(i) + ", " + Zc.transform(s) + ", " + Qs(Js.transform(r)) + ")"
    };

function FT(e) {
    let i = "",
        s = "",
        r = "",
        u = "";
    return e.length > 5 ? (i = e.substring(1, 3), s = e.substring(3, 5), r = e.substring(5, 7), u = e.substring(7, 9)) : (i = e.substring(1, 2), s = e.substring(2, 3), r = e.substring(3, 4), u = e.substring(4, 5), i += i, s += s, r += r, u += u), {
        red: parseInt(i, 16),
        green: parseInt(s, 16),
        blue: parseInt(r, 16),
        alpha: u ? parseInt(u, 16) / 255 : 1
    }
}
const vf = {
        test: hh("#"),
        parse: FT,
        transform: Mi.transform
    },
    lr = e => ({
        test: i => typeof i == "string" && i.endsWith(e) && i.split(" ").length === 1,
        parse: parseFloat,
        transform: i => `${i}${e}`
    }),
    An = lr("deg"),
    rn = lr("%"),
    $ = lr("px"),
    IT = lr("vh"),
    JT = lr("vw"),
    ag = { ...rn,
        parse: e => rn.parse(e) / 100,
        transform: e => rn.transform(e * 100)
    },
    Ea = {
        test: hh("hsl", "hue"),
        parse: E0("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: i,
            lightness: s,
            alpha: r = 1
        }) => "hsla(" + Math.round(e) + ", " + rn.transform(Qs(i)) + ", " + rn.transform(Qs(s)) + ", " + Qs(Js.transform(r)) + ")"
    },
    Kt = {
        test: e => Mi.test(e) || vf.test(e) || Ea.test(e),
        parse: e => Mi.test(e) ? Mi.parse(e) : Ea.test(e) ? Ea.parse(e) : vf.parse(e),
        transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Mi.transform(e) : Ea.transform(e),
        getAnimatableNone: e => {
            const i = Kt.parse(e);
            return i.alpha = 0, Kt.transform(i)
        }
    },
    WT = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function $T(e) {
    return isNaN(e) && typeof e == "string" && (e.match(fh) ? .length || 0) + (e.match(WT) ? .length || 0) > 0
}
const A0 = "number",
    R0 = "color",
    t2 = "var",
    e2 = "var(",
    sg = "${}",
    n2 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function Ma(e) {
    const i = e.toString(),
        s = [],
        r = {
            color: [],
            number: [],
            var: []
        },
        u = [];
    let c = 0;
    const m = i.replace(n2, d => (Kt.test(d) ? (r.color.push(c), u.push(R0), s.push(Kt.parse(d))) : d.startsWith(e2) ? (r.var.push(c), u.push(t2), s.push(d)) : (r.number.push(c), u.push(A0), s.push(parseFloat(d))), ++c, sg)).split(sg);
    return {
        values: s,
        split: m,
        indexes: r,
        types: u
    }
}

function i2(e) {
    return Ma(e).values
}

function O0({
    split: e,
    types: i
}) {
    const s = e.length;
    return r => {
        let u = "";
        for (let c = 0; c < s; c++)
            if (u += e[c], r[c] !== void 0) {
                const f = i[c];
                f === A0 ? u += Qs(r[c]) : f === R0 ? u += Kt.transform(r[c]) : u += r[c]
            }
        return u
    }
}

function a2(e) {
    return O0(Ma(e))
}
const s2 = e => typeof e == "number" ? 0 : Kt.test(e) ? Kt.getAnimatableNone(e) : e,
    r2 = (e, i) => typeof e == "number" ? i ? .trim().endsWith("/") ? e : 0 : s2(e);

function l2(e) {
    const i = Ma(e);
    return O0(i)(i.values.map((r, u) => r2(r, i.split[u])))
}
const Fe = {
    test: $T,
    parse: i2,
    createTransformer: a2,
    getAnimatableNone: l2
};

function Fc(e, i, s) {
    return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? e + (i - e) * 6 * s : s < 1 / 2 ? i : s < 2 / 3 ? e + (i - e) * (2 / 3 - s) * 6 : e
}

function o2({
    hue: e,
    saturation: i,
    lightness: s,
    alpha: r
}) {
    e /= 360, i /= 100, s /= 100;
    let u = 0,
        c = 0,
        f = 0;
    if (!i) u = c = f = s;
    else {
        const m = s < .5 ? s * (1 + i) : s + i - s * i,
            d = 2 * s - m;
        u = Fc(d, m, e + 1 / 3), c = Fc(d, m, e), f = Fc(d, m, e - 1 / 3)
    }
    return {
        red: Math.round(u * 255),
        green: Math.round(c * 255),
        blue: Math.round(f * 255),
        alpha: r
    }
}

function Wl(e, i) {
    return s => s > 0 ? i : e
}
const Dt = (e, i, s) => e + (i - e) * s,
    Ic = (e, i, s) => {
        const r = e * e,
            u = s * (i * i - r) + r;
        return u < 0 ? 0 : Math.sqrt(u)
    },
    u2 = [vf, Mi, Ea],
    c2 = e => u2.find(i => i.test(e));

function rg(e) {
    const i = c2(e);
    if (!i) return !1;
    let s = i.parse(e);
    return i === Ea && (s = o2(s)), s
}
const lg = (e, i) => {
        const s = rg(e),
            r = rg(i);
        if (!s || !r) return Wl(e, i);
        const u = { ...s
        };
        return c => (u.red = Ic(s.red, r.red, c), u.green = Ic(s.green, r.green, c), u.blue = Ic(s.blue, r.blue, c), u.alpha = Dt(s.alpha, r.alpha, c), Mi.transform(u))
    },
    bf = new Set(["none", "hidden"]);

function f2(e, i) {
    return bf.has(e) ? s => s <= 0 ? e : i : s => s >= 1 ? i : e
}

function h2(e, i) {
    return s => Dt(e, i, s)
}

function dh(e) {
    return typeof e == "number" ? h2 : typeof e == "string" ? ch(e) ? Wl : Kt.test(e) ? lg : p2 : Array.isArray(e) ? C0 : typeof e == "object" ? Kt.test(e) ? lg : d2 : Wl
}

function C0(e, i) {
    const s = [...e],
        r = s.length,
        u = e.map((c, f) => dh(c)(c, i[f]));
    return c => {
        for (let f = 0; f < r; f++) s[f] = u[f](c);
        return s
    }
}

function d2(e, i) {
    const s = { ...e,
            ...i
        },
        r = {};
    for (const u in s) e[u] !== void 0 && i[u] !== void 0 && (r[u] = dh(e[u])(e[u], i[u]));
    return u => {
        for (const c in r) s[c] = r[c](u);
        return s
    }
}

function m2(e, i) {
    const s = [],
        r = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let u = 0; u < i.values.length; u++) {
        const c = i.types[u],
            f = e.indexes[c][r[c]],
            m = e.values[f] ? ? 0;
        s[u] = m, r[c]++
    }
    return s
}
const p2 = (e, i) => {
    const s = Fe.createTransformer(i),
        r = Ma(e),
        u = Ma(i);
    return r.indexes.var.length === u.indexes.var.length && r.indexes.color.length === u.indexes.color.length && r.indexes.number.length >= u.indexes.number.length ? bf.has(e) && !u.values.length || bf.has(i) && !r.values.length ? f2(e, i) : sr(C0(m2(r, u), u.values), s) : Wl(e, i)
};

function M0(e, i, s) {
    return typeof e == "number" && typeof i == "number" && typeof s == "number" ? Dt(e, i, s) : dh(e)(e, i)
}
const y2 = e => {
        const i = ({
            timestamp: s
        }) => e(s);
        return {
            start: (s = !0) => Nt.update(i, s),
            stop: () => ai(i),
            now: () => ne.isProcessing ? ne.timestamp : fe.now()
        }
    },
    D0 = (e, i, s = 10) => {
        let r = "";
        const u = Math.max(Math.round(i / s), 2);
        for (let c = 0; c < u; c++) r += Math.round(e(c / (u - 1)) * 1e4) / 1e4 + ", ";
        return `linear(${r.substring(0,r.length-2)})`
    },
    $l = 2e4;

function mh(e) {
    let i = 0;
    const s = 50;
    let r = e.next(i);
    for (; !r.done && i < $l;) i += s, r = e.next(i);
    return i >= $l ? 1 / 0 : i
}

function g2(e, i = 100, s) {
    const r = s({ ...e,
            keyframes: [0, i]
        }),
        u = Math.min(mh(r), $l);
    return {
        type: "keyframes",
        ease: c => r.next(u * c).value / i,
        duration: He(u)
    }
}
const Lt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
};

function Sf(e, i) {
    return e * Math.sqrt(1 - i * i)
}
const v2 = 12;

function b2(e, i, s) {
    let r = s;
    for (let u = 1; u < v2; u++) r = r - e(r) / i(r);
    return r
}
const Jc = .001;

function S2({
    duration: e = Lt.duration,
    bounce: i = Lt.bounce,
    velocity: s = Lt.velocity,
    mass: r = Lt.mass
}) {
    let u, c, f = 1 - i;
    f = ln(Lt.minDamping, Lt.maxDamping, f), e = ln(Lt.minDuration, Lt.maxDuration, He(e)), f < 1 ? (u = p => {
        const y = p * f,
            v = y * e,
            S = y - s,
            R = Sf(p, f),
            w = Math.exp(-v);
        return Jc - S / R * w
    }, c = p => {
        const v = p * f * e,
            S = v * s + s,
            R = Math.pow(f, 2) * Math.pow(p, 2) * e,
            w = Math.exp(-v),
            C = Sf(Math.pow(p, 2), f);
        return (-u(p) + Jc > 0 ? -1 : 1) * ((S - R) * w) / C
    }) : (u = p => {
        const y = Math.exp(-p * e),
            v = (p - s) * e + 1;
        return -Jc + y * v
    }, c = p => {
        const y = Math.exp(-p * e),
            v = (s - p) * (e * e);
        return y * v
    });
    const m = 5 / e,
        d = b2(u, c, m);
    if (e = De(e), isNaN(d)) return {
        stiffness: Lt.stiffness,
        damping: Lt.damping,
        duration: e
    }; {
        const p = Math.pow(d, 2) * r;
        return {
            stiffness: p,
            damping: f * 2 * Math.sqrt(r * p),
            duration: e
        }
    }
}
const x2 = ["duration", "bounce"],
    T2 = ["stiffness", "damping", "mass"];

function og(e, i) {
    return i.some(s => e[s] !== void 0)
}

function w2(e) {
    let i = {
        velocity: Lt.velocity,
        stiffness: Lt.stiffness,
        damping: Lt.damping,
        mass: Lt.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!og(e, T2) && og(e, x2))
        if (i.velocity = 0, e.visualDuration) {
            const s = e.visualDuration,
                r = 2 * Math.PI / (s * 1.2),
                u = r * r,
                c = 2 * ln(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(u);
            i = { ...i,
                mass: Lt.mass,
                stiffness: u,
                damping: c
            }
        } else {
            const s = S2({ ...e,
                velocity: 0
            });
            i = { ...i,
                ...s,
                mass: Lt.mass
            }, i.isResolvedFromDuration = !0
        }
    return i
}

function to(e = Lt.visualDuration, i = Lt.bounce) {
    const s = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: i
    } : e;
    let {
        restSpeed: r,
        restDelta: u
    } = s;
    const c = s.keyframes[0],
        f = s.keyframes[s.keyframes.length - 1],
        m = {
            done: !1,
            value: c
        },
        {
            stiffness: d,
            damping: p,
            mass: y,
            duration: v,
            velocity: S,
            isResolvedFromDuration: R
        } = w2({ ...s,
            velocity: -He(s.velocity || 0)
        }),
        w = S || 0,
        C = p / (2 * Math.sqrt(d * y)),
        D = f - c,
        V = He(Math.sqrt(d / y)),
        K = Math.abs(D) < 5;
    r || (r = K ? Lt.restSpeed.granular : Lt.restSpeed.default), u || (u = K ? Lt.restDelta.granular : Lt.restDelta.default);
    let B, q, _, Q, tt, Y;
    if (C < 1) _ = Sf(V, C), Q = (w + C * V * D) / _, B = J => {
        const ot = Math.exp(-C * V * J);
        return f - ot * (Q * Math.sin(_ * J) + D * Math.cos(_ * J))
    }, tt = C * V * Q + D * _, Y = C * V * D - Q * _, q = J => Math.exp(-C * V * J) * (tt * Math.sin(_ * J) + Y * Math.cos(_ * J));
    else if (C === 1) {
        B = ot => f - Math.exp(-V * ot) * (D + (w + V * D) * ot);
        const J = w + V * D;
        q = ot => Math.exp(-V * ot) * (V * J * ot - w)
    } else {
        const J = V * Math.sqrt(C * C - 1);
        B = gt => {
            const vt = Math.exp(-C * V * gt),
                z = Math.min(J * gt, 300);
            return f - vt * ((w + C * V * D) * Math.sinh(z) + J * D * Math.cosh(z)) / J
        };
        const ot = (w + C * V * D) / J,
            ut = C * V * ot - D * J,
            bt = C * V * D - ot * J;
        q = gt => {
            const vt = Math.exp(-C * V * gt),
                z = Math.min(J * gt, 300);
            return vt * (ut * Math.sinh(z) + bt * Math.cosh(z))
        }
    }
    const et = {
        calculatedDuration: R && v || null,
        velocity: J => De(q(J)),
        next: J => {
            if (!R && C < 1) {
                const ut = Math.exp(-C * V * J),
                    bt = Math.sin(_ * J),
                    gt = Math.cos(_ * J),
                    vt = f - ut * (Q * bt + D * gt),
                    z = De(ut * (tt * bt + Y * gt));
                return m.done = Math.abs(z) <= r && Math.abs(f - vt) <= u, m.value = m.done ? f : vt, m
            }
            const ot = B(J);
            if (R) m.done = J >= v;
            else {
                const ut = De(q(J));
                m.done = Math.abs(ut) <= r && Math.abs(f - ot) <= u
            }
            return m.value = m.done ? f : ot, m
        },
        toString: () => {
            const J = Math.min(mh(et), $l),
                ot = D0(ut => et.next(J * ut).value, J, 30);
            return J + "ms " + ot
        },
        toTransition: () => {}
    };
    return et
}
to.applyToOptions = e => {
    const i = g2(e, 100, to);
    return e.ease = i.ease, e.duration = De(i.duration), e.type = "keyframes", e
};
const E2 = 5;

function N0(e, i, s) {
    const r = Math.max(i - E2, 0);
    return c0(s - e(r), i - r)
}

function xf({
    keyframes: e,
    velocity: i = 0,
    power: s = .8,
    timeConstant: r = 325,
    bounceDamping: u = 10,
    bounceStiffness: c = 500,
    modifyTarget: f,
    min: m,
    max: d,
    restDelta: p = .5,
    restSpeed: y
}) {
    const v = e[0],
        S = {
            done: !1,
            value: v
        },
        R = Y => m !== void 0 && Y < m || d !== void 0 && Y > d,
        w = Y => m === void 0 ? d : d === void 0 || Math.abs(m - Y) < Math.abs(d - Y) ? m : d;
    let C = s * i;
    const D = v + C,
        V = f === void 0 ? D : f(D);
    V !== D && (C = V - v);
    const K = Y => -C * Math.exp(-Y / r),
        B = Y => V + K(Y),
        q = Y => {
            const et = K(Y),
                J = B(Y);
            S.done = Math.abs(et) <= p, S.value = S.done ? V : J
        };
    let _, Q;
    const tt = Y => {
        R(S.value) && (_ = Y, Q = to({
            keyframes: [S.value, w(S.value)],
            velocity: N0(B, Y, S.value),
            damping: u,
            stiffness: c,
            restDelta: p,
            restSpeed: y
        }))
    };
    return tt(0), {
        calculatedDuration: null,
        next: Y => {
            let et = !1;
            return !Q && _ === void 0 && (et = !0, q(Y), tt(Y)), _ !== void 0 && Y >= _ ? Q.next(Y - _) : (!et && q(Y), S)
        }
    }
}

function A2(e, i, s) {
    const r = [],
        u = s || ii.mix || M0,
        c = e.length - 1;
    for (let f = 0; f < c; f++) {
        let m = u(e[f], e[f + 1]);
        if (i) {
            const d = Array.isArray(i) ? i[f] || qe : i;
            m = sr(d, m)
        }
        r.push(m)
    }
    return r
}

function R2(e, i, {
    clamp: s = !0,
    ease: r,
    mixer: u
} = {}) {
    const c = e.length;
    if (yo(c === i.length), c === 1) return () => i[0];
    if (c === 2 && i[0] === i[1]) return () => i[1];
    const f = e[0] === e[1];
    e[0] > e[c - 1] && (e = [...e].reverse(), i = [...i].reverse());
    const m = A2(i, r, u),
        d = m.length,
        p = y => {
            if (f && y < e[0]) return i[0];
            let v = 0;
            if (d > 1)
                for (; v < e.length - 2 && !(y < e[v + 1]); v++);
            const S = Is(e[v], e[v + 1], y);
            return m[v](S)
        };
    return s ? y => p(ln(e[0], e[c - 1], y)) : p
}

function O2(e, i) {
    const s = e[e.length - 1];
    for (let r = 1; r <= i; r++) {
        const u = Is(0, i, r);
        e.push(Dt(s, 1, u))
    }
}

function C2(e) {
    const i = [0];
    return O2(i, e.length - 1), i
}

function M2(e, i) {
    return e.map(s => s * i)
}

function D2(e, i) {
    return e.map(() => i || b0).splice(0, e.length - 1)
}

function Ys({
    duration: e = 300,
    keyframes: i,
    times: s,
    ease: r = "easeInOut"
}) {
    const u = LT(r) ? r.map(ng) : ng(r),
        c = {
            done: !1,
            value: i[0]
        },
        f = M2(s && s.length === i.length ? s : C2(i), e),
        m = R2(f, i, {
            ease: Array.isArray(u) ? u : D2(i, u)
        });
    return {
        calculatedDuration: e,
        next: d => (c.value = m(d), c.done = d >= e, c)
    }
}
const N2 = e => e !== null;

function go(e, {
    repeat: i,
    repeatType: s = "loop"
}, r, u = 1) {
    const c = e.filter(N2),
        m = u < 0 || i && s !== "loop" && i % 2 === 1 ? 0 : c.length - 1;
    return !m || r === void 0 ? c[m] : r
}
const j2 = {
    decay: xf,
    inertia: xf,
    tween: Ys,
    keyframes: Ys,
    spring: to
};

function j0(e) {
    typeof e.type == "string" && (e.type = j2[e.type])
}
class ph {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(i => {
            this.resolve = i
        })
    }
    notifyFinished() {
        this.resolve()
    }
    then(i, s) {
        return this.finished.then(i, s)
    }
}
const U2 = e => e / 100;
class eo extends ph {
    constructor(i) {
        super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
            done: !1,
            value: void 0
        }, this.stop = () => {
            const {
                motionValue: s
            } = this.options;
            s && s.updatedAt !== fe.now() && this.tick(fe.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop ? .())
        }, this.options = i, this.initAnimation(), this.play(), i.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {
            options: i
        } = this;
        j0(i);
        const {
            type: s = Ys,
            repeat: r = 0,
            repeatDelay: u = 0,
            repeatType: c,
            velocity: f = 0
        } = i;
        let {
            keyframes: m
        } = i;
        const d = s || Ys;
        d !== Ys && typeof m[0] != "number" && (this.mixKeyframes = sr(U2, M0(m[0], m[1])), m = [0, 100]);
        const p = d({ ...i,
            keyframes: m
        });
        c === "mirror" && (this.mirroredGenerator = d({ ...i,
            keyframes: [...m].reverse(),
            velocity: -f
        })), p.calculatedDuration === null && (p.calculatedDuration = mh(p));
        const {
            calculatedDuration: y
        } = p;
        this.calculatedDuration = y, this.resolvedDuration = y + u, this.totalDuration = this.resolvedDuration * (r + 1) - u, this.generator = p
    }
    updateTime(i) {
        const s = Math.round(i - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = s
    }
    tick(i, s = !1) {
        const {
            generator: r,
            totalDuration: u,
            mixKeyframes: c,
            mirroredGenerator: f,
            resolvedDuration: m,
            calculatedDuration: d
        } = this;
        if (this.startTime === null) return r.next(0);
        const {
            delay: p = 0,
            keyframes: y,
            repeat: v,
            repeatType: S,
            repeatDelay: R,
            type: w,
            onUpdate: C,
            finalKeyframe: D
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, i) : this.speed < 0 && (this.startTime = Math.min(i - u / this.speed, this.startTime)), s ? this.currentTime = i : this.updateTime(i);
        const V = this.currentTime - p * (this.playbackSpeed >= 0 ? 1 : -1),
            K = this.playbackSpeed >= 0 ? V < 0 : V > u;
        this.currentTime = Math.max(V, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = u);
        let B = this.currentTime,
            q = r;
        if (v) {
            const Y = Math.min(this.currentTime, u) / m;
            let et = Math.floor(Y),
                J = Y % 1;
            !J && Y >= 1 && (J = 1), J === 1 && et--, et = Math.min(et, v + 1), et % 2 && (S === "reverse" ? (J = 1 - J, R && (J -= R / m)) : S === "mirror" && (q = f)), B = ln(0, 1, J) * m
        }
        let _;
        K ? (this.delayState.value = y[0], _ = this.delayState) : _ = q.next(B), c && !K && (_.value = c(_.value));
        let {
            done: Q
        } = _;
        !K && d !== null && (Q = this.playbackSpeed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
        const tt = this.holdTime === null && (this.state === "finished" || this.state === "running" && Q);
        return tt && w !== xf && (_.value = go(y, this.options, D, this.speed)), C && C(_.value), tt && this.finish(), _
    }
    then(i, s) {
        return this.finished.then(i, s)
    }
    get duration() {
        return He(this.calculatedDuration)
    }
    get iterationDuration() {
        const {
            delay: i = 0
        } = this.options || {};
        return this.duration + He(i)
    }
    get time() {
        return He(this.currentTime)
    }
    set time(i) {
        i = De(i), this.currentTime = i, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = i : this.driver && (this.startTime = this.driver.now() - i / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = i, this.tick(i))
    }
    getGeneratorVelocity() {
        const i = this.currentTime;
        if (i <= 0) return this.options.velocity || 0;
        if (this.generator.velocity) return this.generator.velocity(i);
        const s = this.generator.next(i).value;
        return N0(r => this.generator.next(r).value, i, s)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(i) {
        const s = this.playbackSpeed !== i;
        s && this.driver && this.updateTime(fe.now()), this.playbackSpeed = i, s && this.driver && (this.time = He(this.currentTime))
    }
    play() {
        if (this.isStopped) return;
        const {
            driver: i = y2,
            startTime: s
        } = this.options;
        this.driver || (this.driver = i(u => this.tick(u))), this.options.onPlay ? .();
        const r = this.driver.now();
        this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = s ? ? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        this.state = "paused", this.updateTime(fe.now()), this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null
    }
    finish() {
        this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete ? .()
    }
    cancel() {
        this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel ? .()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(i) {
        return this.startTime = 0, this.tick(i, !0)
    }
    attachTimeline(i) {
        return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver ? .stop(), i.observe(this)
    }
}

function z2(e) {
    for (let i = 1; i < e.length; i++) e[i] ? ? (e[i] = e[i - 1])
}
const Di = e => e * 180 / Math.PI,
    Tf = e => {
        const i = Di(Math.atan2(e[1], e[0]));
        return wf(i)
    },
    k2 = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
        rotate: Tf,
        rotateZ: Tf,
        skewX: e => Di(Math.atan(e[1])),
        skewY: e => Di(Math.atan(e[2])),
        skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
    },
    wf = e => (e = e % 360, e < 0 && (e += 360), e),
    ug = Tf,
    cg = e => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
    fg = e => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
    V2 = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: cg,
        scaleY: fg,
        scale: e => (cg(e) + fg(e)) / 2,
        rotateX: e => wf(Di(Math.atan2(e[6], e[5]))),
        rotateY: e => wf(Di(Math.atan2(-e[2], e[0]))),
        rotateZ: ug,
        rotate: ug,
        skewX: e => Di(Math.atan(e[4])),
        skewY: e => Di(Math.atan(e[1])),
        skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
    };

function Ef(e) {
    return e.includes("scale") ? 1 : 0
}

function Af(e, i) {
    if (!e || e === "none") return Ef(i);
    const s = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, u;
    if (s) r = V2, u = s;
    else {
        const m = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = k2, u = m
    }
    if (!u) return Ef(i);
    const c = r[i],
        f = u[1].split(",").map(L2);
    return typeof c == "function" ? c(f) : f[c]
}
const _2 = (e, i) => {
    const {
        transform: s = "none"
    } = getComputedStyle(e);
    return Af(s, i)
};

function L2(e) {
    return parseFloat(e.trim())
}
const ka = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    Va = new Set([...ka, "pathRotation"]),
    hg = e => e === za || e === $,
    B2 = new Set(["x", "y", "z"]),
    H2 = ka.filter(e => !B2.has(e));

function q2(e) {
    const i = [];
    return H2.forEach(s => {
        const r = e.getValue(s);
        r !== void 0 && (i.push([s, r.get()]), r.set(s.startsWith("scale") ? 1 : 0))
    }), i
}
const ti = {
    width: ({
        x: e
    }, {
        paddingLeft: i = "0",
        paddingRight: s = "0",
        boxSizing: r
    }) => {
        const u = e.max - e.min;
        return r === "border-box" ? u : u - parseFloat(i) - parseFloat(s)
    },
    height: ({
        y: e
    }, {
        paddingTop: i = "0",
        paddingBottom: s = "0",
        boxSizing: r
    }) => {
        const u = e.max - e.min;
        return r === "border-box" ? u : u - parseFloat(i) - parseFloat(s)
    },
    top: (e, {
        top: i
    }) => parseFloat(i),
    left: (e, {
        left: i
    }) => parseFloat(i),
    bottom: ({
        y: e
    }, {
        top: i
    }) => parseFloat(i) + (e.max - e.min),
    right: ({
        x: e
    }, {
        left: i
    }) => parseFloat(i) + (e.max - e.min),
    x: (e, {
        transform: i
    }) => Af(i, "x"),
    y: (e, {
        transform: i
    }) => Af(i, "y")
};
ti.translateX = ti.x;
ti.translateY = ti.y;
const ji = new Set;
let Rf = !1,
    Of = !1,
    Cf = !1;

function U0() {
    if (Of) {
        const e = Array.from(ji).filter(r => r.needsMeasurement),
            i = new Set(e.map(r => r.element)),
            s = new Map;
        i.forEach(r => {
            const u = q2(r);
            u.length && (s.set(r, u), r.render())
        }), e.forEach(r => r.measureInitialState()), i.forEach(r => {
            r.render();
            const u = s.get(r);
            u && u.forEach(([c, f]) => {
                r.getValue(c) ? .set(f)
            })
        }), e.forEach(r => r.measureEndState()), e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        })
    }
    Of = !1, Rf = !1, ji.forEach(e => e.complete(Cf)), ji.clear()
}

function z0() {
    ji.forEach(e => {
        e.readKeyframes(), e.needsMeasurement && (Of = !0)
    })
}

function P2() {
    Cf = !0, z0(), U0(), Cf = !1
}
class yh {
    constructor(i, s, r, u, c, f = !1) {
        this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...i], this.onComplete = s, this.name = r, this.motionValue = u, this.element = c, this.isAsync = f
    }
    scheduleResolve() {
        this.state = "scheduled", this.isAsync ? (ji.add(this), Rf || (Rf = !0, Nt.read(z0), Nt.resolveKeyframes(U0))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: i,
            name: s,
            element: r,
            motionValue: u
        } = this;
        if (i[0] === null) {
            const c = u ? .get(),
                f = i[i.length - 1];
            if (c !== void 0) i[0] = c;
            else if (r && s) {
                const m = r.readValue(s, f);
                m != null && (i[0] = m)
            }
            i[0] === void 0 && (i[0] = f), u && c === void 0 && u.set(i[0])
        }
        z2(i)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(i = !1) {
        this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i), ji.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (ji.delete(this), this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const G2 = e => e.startsWith("--");

function k0(e, i, s) {
    G2(i) ? e.style.setProperty(i, s) : e.style[i] = s
}
const K2 = {};

function V0(e, i) {
    const s = u0(e);
    return () => K2[i] ? ? s()
}
const Q2 = V0(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
    _0 = V0(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }, "linearEasing"),
    Ps = ([e, i, s, r]) => `cubic-bezier(${e}, ${i}, ${s}, ${r})`,
    dg = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: Ps([0, .65, .55, 1]),
        circOut: Ps([.55, 0, 1, .45]),
        backIn: Ps([.31, .01, .66, -.59]),
        backOut: Ps([.33, 1.53, .69, .99])
    };

function L0(e, i) {
    if (e) return typeof e == "function" ? _0() ? D0(e, i) : "ease-out" : S0(e) ? Ps(e) : Array.isArray(e) ? e.map(s => L0(s, i) || dg.easeOut) : dg[e]
}

function Y2(e, i, s, {
    delay: r = 0,
    duration: u = 300,
    repeat: c = 0,
    repeatType: f = "loop",
    ease: m = "easeOut",
    times: d
} = {}, p = void 0) {
    const y = {
        [i]: s
    };
    d && (y.offset = d);
    const v = L0(m, u);
    Array.isArray(v) && (y.easing = v);
    const S = {
        delay: r,
        duration: u,
        easing: Array.isArray(v) ? "linear" : v,
        fill: "both",
        iterations: c + 1,
        direction: f === "reverse" ? "alternate" : "normal"
    };
    return p && (S.pseudoElement = p), e.animate(y, S)
}

function B0(e) {
    return typeof e == "function" && "applyToOptions" in e
}

function X2({
    type: e,
    ...i
}) {
    return B0(e) && _0() ? e.applyToOptions(i) : (i.duration ? ? (i.duration = 300), i.ease ? ? (i.ease = "easeOut"), i)
}
class H0 extends ph {
    constructor(i) {
        if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !i) return;
        const {
            element: s,
            name: r,
            keyframes: u,
            pseudoElement: c,
            allowFlatten: f = !1,
            finalKeyframe: m,
            onComplete: d
        } = i;
        this.isPseudoElement = !!c, this.allowFlatten = f, this.options = i, yo(typeof i.type != "string");
        const p = X2(i);
        this.animation = Y2(s, r, u, p, c), p.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
            if (this.finishedTime = this.time, !c) {
                const y = go(u, this.options, m, this.speed);
                this.updateMotionValue && this.updateMotionValue(y), k0(s, r, y), this.animation.cancel()
            }
            d ? .(), this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.finish ? .()
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped) return;
        this.isStopped = !0;
        const {
            state: i
        } = this;
        i === "idle" || i === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        const i = this.options ? .element;
        !this.isPseudoElement && i ? .isConnected && this.animation.commitStyles ? .()
    }
    get duration() {
        const i = this.animation.effect ? .getComputedTiming ? .().duration || 0;
        return He(Number(i))
    }
    get iterationDuration() {
        const {
            delay: i = 0
        } = this.options || {};
        return this.duration + He(i)
    }
    get time() {
        return He(Number(this.animation.currentTime) || 0)
    }
    set time(i) {
        const s = this.finishedTime !== null;
        this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = De(i), s && this.animation.pause()
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(i) {
        i < 0 && (this.finishedTime = null), this.animation.playbackRate = i
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return this.manualStartTime ? ? Number(this.animation.startTime)
    }
    set startTime(i) {
        this.manualStartTime = this.animation.startTime = i
    }
    attachTimeline({
        timeline: i,
        rangeStart: s,
        rangeEnd: r,
        observe: u
    }) {
        return this.allowFlatten && this.animation.effect ? .updateTiming({
            easing: "linear"
        }), this.animation.onfinish = null, i && Q2() ? (this.animation.timeline = i, s && (this.animation.rangeStart = s), r && (this.animation.rangeEnd = r), qe) : u(this)
    }
}
const q0 = {
    anticipate: y0,
    backInOut: p0,
    circInOut: v0
};

function Z2(e) {
    return e in q0
}

function F2(e) {
    typeof e.ease == "string" && Z2(e.ease) && (e.ease = q0[e.ease])
}
const Wc = 10;
class I2 extends H0 {
    constructor(i) {
        F2(i), j0(i), super(i), i.startTime !== void 0 && i.autoplay !== !1 && (this.startTime = i.startTime), this.options = i
    }
    updateMotionValue(i) {
        const {
            motionValue: s,
            onUpdate: r,
            onComplete: u,
            element: c,
            ...f
        } = this.options;
        if (!s) return;
        if (i !== void 0) {
            s.set(i);
            return
        }
        const m = new eo({ ...f,
                autoplay: !1
            }),
            d = Math.max(Wc, fe.now() - this.startTime),
            p = ln(0, Wc, d - Wc),
            y = m.sample(d).value,
            {
                name: v
            } = this.options;
        c && v && k0(c, v, y), s.setWithVelocity(m.sample(Math.max(0, d - p)).value, y, p), m.stop()
    }
}
const mg = (e, i) => i === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Fe.test(e) || e === "0") && !e.startsWith("url("));

function J2(e) {
    const i = e[0];
    if (e.length === 1) return !0;
    for (let s = 0; s < e.length; s++)
        if (e[s] !== i) return !0
}

function W2(e, i, s, r) {
    const u = e[0];
    if (u === null) return !1;
    if (i === "display" || i === "visibility") return !0;
    const c = e[e.length - 1],
        f = mg(u, i),
        m = mg(c, i);
    return !f || !m ? !1 : J2(e) || (s === "spring" || B0(s)) && r
}

function Mf(e) {
    e.duration = 0, e.type = "keyframes"
}
const P0 = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
    $2 = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;

function tw(e) {
    for (let i = 0; i < e.length; i++)
        if (typeof e[i] == "string" && $2.test(e[i])) return !0;
    return !1
}
const ew = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]),
    nw = u0(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

function iw(e) {
    const {
        motionValue: i,
        name: s,
        repeatDelay: r,
        repeatType: u,
        damping: c,
        type: f,
        keyframes: m
    } = e, d = i ? .owner ? .current;
    if (!(d instanceof HTMLElement) && !(d instanceof SVGElement)) return !1;
    const {
        onUpdate: p,
        transformTemplate: y
    } = i.owner.getProps();
    return nw() && s && (P0.has(s) || ew.has(s) && tw(m)) && (s !== "transform" || !y) && !p && !r && u !== "mirror" && c !== 0 && f !== "inertia"
}
const aw = 40;
class sw extends ph {
    constructor({
        autoplay: i = !0,
        delay: s = 0,
        type: r = "keyframes",
        repeat: u = 0,
        repeatDelay: c = 0,
        repeatType: f = "loop",
        keyframes: m,
        name: d,
        motionValue: p,
        element: y,
        ...v
    }) {
        super(), this.stop = () => {
            this._animation && (this._animation.stop(), this.stopTimeline ? .()), this.keyframeResolver ? .cancel()
        }, this.createdAt = fe.now();
        const S = {
                autoplay: i,
                delay: s,
                type: r,
                repeat: u,
                repeatDelay: c,
                repeatType: f,
                name: d,
                motionValue: p,
                element: y,
                ...v
            },
            R = y ? .KeyframeResolver || yh;
        this.keyframeResolver = new R(m, (w, C, D) => this.onKeyframesResolved(w, C, S, !D), d, p, y), this.keyframeResolver ? .scheduleResolve()
    }
    onKeyframesResolved(i, s, r, u) {
        this.keyframeResolver = void 0;
        const {
            name: c,
            type: f,
            velocity: m,
            delay: d,
            isHandoff: p,
            onUpdate: y
        } = r;
        this.resolvedAt = fe.now();
        let v = !0;
        W2(i, c, f, m) || (v = !1, (ii.instantAnimations || !d) && y ? .(go(i, r, s)), i[0] = i[i.length - 1], Mf(r), r.repeat = 0);
        const R = {
                startTime: u ? this.resolvedAt ? this.resolvedAt - this.createdAt > aw ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
                finalKeyframe: s,
                ...r,
                keyframes: i
            },
            w = v && !p && iw(R),
            C = R.motionValue ? .owner ? .current;
        let D;
        if (w) try {
            D = new I2({ ...R,
                element: C
            })
        } catch {
            D = new eo(R)
        } else D = new eo(R);
        D.finished.then(() => {
            this.notifyFinished()
        }).catch(qe), this.pendingTimeline && (this.stopTimeline = D.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = D
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(i, s) {
        return this.finished.finally(i).then(() => {})
    }
    get animation() {
        return this._animation || (this.keyframeResolver ? .resume(), P2()), this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(i) {
        this.animation.time = i
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(i) {
        this.animation.speed = i
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(i) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(i) : this.pendingTimeline = i, () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        this._animation && this.animation.cancel(), this.keyframeResolver ? .cancel()
    }
}

function G0(e, i, s, r = 0, u = 1) {
    const c = Array.from(e).sort((p, y) => p.sortNodePosition(y)).indexOf(i),
        f = e.size,
        m = (f - 1) * r;
    return typeof s == "function" ? s(c, f) : u === 1 ? c * r : m - c * r
}
const pg = 30,
    rw = e => !isNaN(parseFloat(e));
class lw {
    constructor(i, s = {}) {
        this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = r => {
            const u = fe.now();
            if (this.updatedAt !== u && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && (this.events.change ? .notify(this.current), this.dependents))
                for (const c of this.dependents) c.dirty()
        }, this.hasAnimated = !1, this.setCurrent(i), this.owner = s.owner
    }
    setCurrent(i) {
        this.current = i, this.updatedAt = fe.now(), this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = rw(this.current))
    }
    setPrevFrameValue(i = this.current) {
        this.prevFrameValue = i, this.prevUpdatedAt = this.updatedAt
    }
    onChange(i) {
        return this.on("change", i)
    }
    on(i, s) {
        this.events[i] || (this.events[i] = new lh);
        const r = this.events[i].add(s);
        return i === "change" ? () => {
            r(), Nt.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : r
    }
    clearListeners() {
        for (const i in this.events) this.events[i].clear()
    }
    attach(i, s) {
        this.passiveEffect = i, this.stopPassiveEffect = s
    }
    set(i) {
        this.passiveEffect ? this.passiveEffect(i, this.updateAndNotify) : this.updateAndNotify(i)
    }
    setWithVelocity(i, s, r) {
        this.set(s), this.prev = void 0, this.prevFrameValue = i, this.prevUpdatedAt = this.updatedAt - r
    }
    jump(i, s = !0) {
        this.updateAndNotify(i), this.prev = i, this.prevUpdatedAt = this.prevFrameValue = void 0, s && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        this.events.change ? .notify(this.current)
    }
    addDependent(i) {
        this.dependents || (this.dependents = new Set), this.dependents.add(i)
    }
    removeDependent(i) {
        this.dependents && this.dependents.delete(i)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const i = fe.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > pg) return 0;
        const s = Math.min(this.updatedAt - this.prevUpdatedAt, pg);
        return c0(parseFloat(this.current) - parseFloat(this.prevFrameValue), s)
    }
    start(i) {
        return this.stop(), new Promise(s => {
            this.hasAnimated = !0, this.animation = i(s), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.dependents ? .clear(), this.events.destroy ? .notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function Da(e, i) {
    return new lw(e, i)
}

function K0(e, i) {
    if (e ? .inherit && i) {
        const {
            inherit: s,
            ...r
        } = e;
        return { ...i,
            ...r
        }
    }
    return e
}

function gh(e, i) {
    const s = e ? .[i] ? ? e ? .default ? ? e;
    return s !== e ? K0(s, e) : s
}
const ow = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    uw = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    cw = {
        type: "keyframes",
        duration: .8
    },
    fw = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    hw = (e, {
        keyframes: i
    }) => i.length > 2 ? cw : Va.has(e) ? e.startsWith("scale") ? uw(i[1]) : ow : fw,
    dw = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);

function mw(e) {
    for (const i in e)
        if (!dw.has(i)) return !0;
    return !1
}
const vh = (e, i, s, r = {}, u, c) => f => {
        const m = gh(r, e) || {},
            d = m.delay || r.delay || 0;
        let {
            elapsed: p = 0
        } = r;
        p = p - De(d);
        const y = {
            keyframes: Array.isArray(s) ? s : [null, s],
            ease: "easeOut",
            velocity: i.getVelocity(),
            ...m,
            delay: -p,
            onUpdate: S => {
                i.set(S), m.onUpdate && m.onUpdate(S)
            },
            onComplete: () => {
                f(), m.onComplete && m.onComplete()
            },
            name: e,
            motionValue: i,
            element: c ? void 0 : u
        };
        mw(m) || Object.assign(y, hw(e, y)), y.duration && (y.duration = De(y.duration)), y.repeatDelay && (y.repeatDelay = De(y.repeatDelay)), y.from !== void 0 && (y.keyframes[0] = y.from);
        let v = !1;
        if ((y.type === !1 || y.duration === 0 && !y.repeatDelay) && (Mf(y), y.delay === 0 && (v = !0)), (ii.instantAnimations || ii.skipAnimations || u ? .shouldSkipAnimations || m.skipAnimations) && (v = !0, Mf(y), y.delay = 0), y.allowFlatten = !m.type && !m.ease, v && !c && i.get() !== void 0) {
            const S = go(y.keyframes, m);
            if (S !== void 0) {
                Nt.update(() => {
                    y.onUpdate(S), y.onComplete()
                });
                return
            }
        }
        return m.isSync ? new eo(y) : new sw(y)
    },
    pw = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function yw(e) {
    const i = pw.exec(e);
    if (!i) return [, ];
    const [, s, r, u] = i;
    return [`--${s??r}`, u]
}

function Q0(e, i, s = 1) {
    const [r, u] = yw(e);
    if (!r) return;
    const c = window.getComputedStyle(i).getPropertyValue(r);
    if (c) {
        const f = c.trim();
        return r0(f) ? parseFloat(f) : f
    }
    return ch(u) ? Q0(u, i, s + 1) : u
}

function yg(e) {
    const i = [{}, {}];
    return e ? .values.forEach((s, r) => {
        i[0][r] = s.get(), i[1][r] = s.getVelocity()
    }), i
}

function bh(e, i, s, r) {
    if (typeof i == "function") {
        const [u, c] = yg(r);
        i = i(s !== void 0 ? s : e.custom, u, c)
    }
    if (typeof i == "string" && (i = e.variants && e.variants[i]), typeof i == "function") {
        const [u, c] = yg(r);
        i = i(s !== void 0 ? s : e.custom, u, c)
    }
    return i
}

function Ui(e, i, s) {
    const r = e.getProps();
    return bh(r, i, s !== void 0 ? s : r.custom, e)
}
const Y0 = new Set(["width", "height", "top", "left", "right", "bottom", ...ka]),
    Df = e => Array.isArray(e);

function gw(e, i, s) {
    e.hasValue(i) ? e.getValue(i).set(s) : e.addValue(i, Da(s))
}

function vw(e) {
    return Df(e) ? e[e.length - 1] || 0 : e
}

function bw(e, i) {
    const s = Ui(e, i);
    let {
        transitionEnd: r = {},
        transition: u = {},
        ...c
    } = s || {};
    c = { ...c,
        ...r
    };
    for (const f in c) {
        const m = vw(c[f]);
        gw(e, f, m)
    }
}
const ie = e => !!(e && e.getVelocity);

function Sw(e) {
    return !!(ie(e) && e.add)
}

function Nf(e, i) {
    const s = e.getValue("willChange");
    if (Sw(s)) return s.add(i);
    if (!s && ii.WillChange) {
        const r = new ii.WillChange("auto");
        e.addValue("willChange", r), r.add(i)
    }
}

function Sh(e) {
    return e.replace(/([A-Z])/g, i => `-${i.toLowerCase()}`)
}
const xw = "framerAppearId",
    X0 = "data-" + Sh(xw);

function Z0(e) {
    return e.props[X0]
}

function Tw({
    protectedKeys: e,
    needsAnimating: i
}, s) {
    const r = e.hasOwnProperty(s) && i[s] !== !0;
    return i[s] = !1, r
}

function F0(e, i, {
    delay: s = 0,
    transitionOverride: r,
    type: u
} = {}) {
    let {
        transition: c,
        transitionEnd: f,
        ...m
    } = i;
    const d = e.getDefaultTransition();
    c = c ? K0(c, d) : d;
    const p = c ? .reduceMotion,
        y = c ? .skipAnimations;
    r && (c = r);
    const v = [],
        S = u && e.animationState && e.animationState.getState()[u],
        R = c ? .path;
    R && R.animateVisualElement(e, m, c, s, v);
    for (const w in m) {
        const C = e.getValue(w, e.latestValues[w] ? ? null),
            D = m[w];
        if (D === void 0 || S && Tw(S, w)) continue;
        const V = {
            delay: s,
            ...gh(c || {}, w)
        };
        y && (V.skipAnimations = !0);
        const K = C.get();
        if (K !== void 0 && !C.isAnimating() && !Array.isArray(D) && D === K && !V.velocity) {
            Nt.update(() => C.set(D));
            continue
        }
        let B = !1;
        if (window.MotionHandoffAnimation) {
            const Q = Z0(e);
            if (Q) {
                const tt = window.MotionHandoffAnimation(Q, w, Nt);
                tt !== null && (V.startTime = tt, B = !0)
            }
        }
        Nf(e, w);
        const q = p ? ? e.shouldReduceMotion;
        C.start(vh(w, C, D, q && Y0.has(w) ? {
            type: !1
        } : V, e, B));
        const _ = C.animation;
        _ && v.push(_)
    }
    if (f) {
        const w = () => Nt.update(() => {
            f && bw(e, f)
        });
        v.length ? Promise.all(v).then(w) : w()
    }
    return v
}

function jf(e, i, s = {}) {
    const r = Ui(e, i, s.type === "exit" ? e.presenceContext ? .custom : void 0);
    let {
        transition: u = e.getDefaultTransition() || {}
    } = r || {};
    s.transitionOverride && (u = s.transitionOverride);
    const c = r ? () => Promise.all(F0(e, r, s)) : () => Promise.resolve(),
        f = e.variantChildren && e.variantChildren.size ? (d = 0) => {
            const {
                delayChildren: p = 0,
                staggerChildren: y,
                staggerDirection: v
            } = u;
            return ww(e, i, d, p, y, v, s)
        } : () => Promise.resolve(),
        {
            when: m
        } = u;
    if (m) {
        const [d, p] = m === "beforeChildren" ? [c, f] : [f, c];
        return d().then(() => p())
    } else return Promise.all([c(), f(s.delay)])
}

function ww(e, i, s = 0, r = 0, u = 0, c = 1, f) {
    const m = [];
    for (const d of e.variantChildren) d.notify("AnimationStart", i), m.push(jf(d, i, { ...f,
        delay: s + (typeof r == "function" ? 0 : r) + G0(e.variantChildren, d, r, u, c)
    }).then(() => d.notify("AnimationComplete", i)));
    return Promise.all(m)
}

function Ew(e, i, s = {}) {
    e.notify("AnimationStart", i);
    let r;
    if (Array.isArray(i)) {
        const u = i.map(c => jf(e, c, s));
        r = Promise.all(u)
    } else if (typeof i == "string") r = jf(e, i, s);
    else {
        const u = typeof i == "function" ? Ui(e, i, s.custom) : i;
        r = Promise.all(F0(e, u, s))
    }
    return r.then(() => {
        e.notify("AnimationComplete", i)
    })
}
const Aw = {
        test: e => e === "auto",
        parse: e => e
    },
    I0 = e => i => i.test(e),
    J0 = [za, $, rn, An, JT, IT, Aw],
    gg = e => J0.find(I0(e));

function Rw(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || o0(e) : !0
}
const Ow = new Set(["brightness", "contrast", "saturate", "opacity"]);

function Cw(e) {
    const [i, s] = e.slice(0, -1).split("(");
    if (i === "drop-shadow") return e;
    const [r] = s.match(fh) || [];
    if (!r) return e;
    const u = s.replace(r, "");
    let c = Ow.has(i) ? 1 : 0;
    return r !== s && (c *= 100), i + "(" + c + u + ")"
}
const Mw = /\b([a-z-]*)\(.*?\)/gu,
    Uf = { ...Fe,
        getAnimatableNone: e => {
            const i = e.match(Mw);
            return i ? i.map(Cw).join(" ") : e
        }
    },
    zf = { ...Fe,
        getAnimatableNone: e => {
            const i = Fe.parse(e);
            return Fe.createTransformer(e)(i.map(r => typeof r == "number" ? 0 : typeof r == "object" ? { ...r,
                alpha: 1
            } : r))
        }
    },
    vg = { ...za,
        transform: Math.round
    },
    Dw = {
        rotate: An,
        pathRotation: An,
        rotateX: An,
        rotateY: An,
        rotateZ: An,
        scale: Ol,
        scaleX: Ol,
        scaleY: Ol,
        scaleZ: Ol,
        skew: An,
        skewX: An,
        skewY: An,
        distance: $,
        translateX: $,
        translateY: $,
        translateZ: $,
        x: $,
        y: $,
        z: $,
        perspective: $,
        transformPerspective: $,
        opacity: Js,
        originX: ag,
        originY: ag,
        originZ: $
    },
    no = {
        borderWidth: $,
        borderTopWidth: $,
        borderRightWidth: $,
        borderBottomWidth: $,
        borderLeftWidth: $,
        borderRadius: $,
        borderTopLeftRadius: $,
        borderTopRightRadius: $,
        borderBottomRightRadius: $,
        borderBottomLeftRadius: $,
        width: $,
        maxWidth: $,
        height: $,
        maxHeight: $,
        top: $,
        right: $,
        bottom: $,
        left: $,
        inset: $,
        insetBlock: $,
        insetBlockStart: $,
        insetBlockEnd: $,
        insetInline: $,
        insetInlineStart: $,
        insetInlineEnd: $,
        padding: $,
        paddingTop: $,
        paddingRight: $,
        paddingBottom: $,
        paddingLeft: $,
        paddingBlock: $,
        paddingBlockStart: $,
        paddingBlockEnd: $,
        paddingInline: $,
        paddingInlineStart: $,
        paddingInlineEnd: $,
        margin: $,
        marginTop: $,
        marginRight: $,
        marginBottom: $,
        marginLeft: $,
        marginBlock: $,
        marginBlockStart: $,
        marginBlockEnd: $,
        marginInline: $,
        marginInlineStart: $,
        marginInlineEnd: $,
        fontSize: $,
        backgroundPositionX: $,
        backgroundPositionY: $,
        ...Dw,
        zIndex: vg,
        fillOpacity: Js,
        strokeOpacity: Js,
        numOctaves: vg
    },
    Nw = { ...no,
        color: Kt,
        backgroundColor: Kt,
        outlineColor: Kt,
        fill: Kt,
        stroke: Kt,
        borderColor: Kt,
        borderTopColor: Kt,
        borderRightColor: Kt,
        borderBottomColor: Kt,
        borderLeftColor: Kt,
        filter: Uf,
        WebkitFilter: Uf,
        mask: zf,
        WebkitMask: zf
    },
    W0 = e => Nw[e],
    jw = new Set([Uf, zf]);

function $0(e, i) {
    let s = W0(e);
    return jw.has(s) || (s = Fe), s.getAnimatableNone ? s.getAnimatableNone(i) : void 0
}
const Uw = new Set(["auto", "none", "0"]);

function zw(e, i, s) {
    let r = 0,
        u;
    for (; r < e.length && !u;) {
        const c = e[r];
        typeof c == "string" && !Uw.has(c) && Ma(c).values.length && (u = e[r]), r++
    }
    if (u && s)
        for (const c of i) e[c] = $0(s, u)
}
class kw extends yh {
    constructor(i, s, r, u, c) {
        super(i, s, r, u, c, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: i,
            element: s,
            name: r
        } = this;
        if (!s || !s.current) return;
        super.readKeyframes();
        for (let y = 0; y < i.length; y++) {
            let v = i[y];
            if (typeof v == "string" && (v = v.trim(), ch(v))) {
                const S = Q0(v, s.current);
                S !== void 0 && (i[y] = S), y === i.length - 1 && (this.finalKeyframe = v)
            }
        }
        if (this.resolveNoneKeyframes(), !Y0.has(r) || i.length !== 2) return;
        const [u, c] = i, f = gg(u), m = gg(c), d = ig(u), p = ig(c);
        if (d !== p && ti[r]) {
            this.needsMeasurement = !0;
            return
        }
        if (f !== m)
            if (hg(f) && hg(m))
                for (let y = 0; y < i.length; y++) {
                    const v = i[y];
                    typeof v == "string" && (i[y] = parseFloat(v))
                } else ti[r] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: i,
            name: s
        } = this, r = [];
        for (let u = 0; u < i.length; u++)(i[u] === null || Rw(i[u])) && r.push(u);
        r.length && zw(i, r, s)
    }
    measureInitialState() {
        const {
            element: i,
            unresolvedKeyframes: s,
            name: r
        } = this;
        if (!i || !i.current) return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ti[r](i.measureViewportBox(), window.getComputedStyle(i.current)), s[0] = this.measuredOrigin;
        const u = s[s.length - 1];
        u !== void 0 && i.getValue(r, u).jump(u, !1)
    }
    measureEndState() {
        const {
            element: i,
            name: s,
            unresolvedKeyframes: r
        } = this;
        if (!i || !i.current) return;
        const u = i.getValue(s);
        u && u.jump(this.measuredOrigin, !1);
        const c = r.length - 1,
            f = r[c];
        r[c] = ti[s](i.measureViewportBox(), window.getComputedStyle(i.current)), f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f), this.removedTransforms ? .length && this.removedTransforms.forEach(([m, d]) => {
            i.getValue(m).set(d)
        }), this.resolveNoneKeyframes()
    }
}
const xh = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"];

function tb(e, i, s) {
    if (e == null) return [];
    if (e instanceof EventTarget) return [e];
    if (typeof e == "string") {
        let r = document;
        const u = s ? .[e] ? ? r.querySelectorAll(e);
        return u ? Array.from(u) : []
    }
    return Array.from(e).filter(r => r != null)
}
const kf = (e, i) => i && typeof e == "number" ? i.transform(e) : e;

function Ll(e) {
    return l0(e) && "offsetHeight" in e && !("ownerSVGElement" in e)
}
const {
    schedule: Th
} = x0(queueMicrotask, !1), Ye = {
    x: !1,
    y: !1
};

function eb() {
    return Ye.x || Ye.y
}

function Vw(e) {
    return e === "x" || e === "y" ? Ye[e] ? null : (Ye[e] = !0, () => {
        Ye[e] = !1
    }) : Ye.x || Ye.y ? null : (Ye.x = Ye.y = !0, () => {
        Ye.x = Ye.y = !1
    })
}

function nb(e, i) {
    const s = tb(e),
        r = new AbortController,
        u = {
            passive: !0,
            ...i,
            signal: r.signal
        };
    return [s, u, () => r.abort()]
}

function _w(e) {
    return !(e.pointerType === "touch" || eb())
}

function Lw(e, i, s = {}) {
    const [r, u, c] = nb(e, s);
    return r.forEach(f => {
        let m = !1,
            d = !1,
            p;
        const y = () => {
                f.removeEventListener("pointerleave", w)
            },
            v = D => {
                p && (p(D), p = void 0), y()
            },
            S = D => {
                m = !1, window.removeEventListener("pointerup", S), window.removeEventListener("pointercancel", S), d && (d = !1, v(D))
            },
            R = () => {
                m = !0, window.addEventListener("pointerup", S, u), window.addEventListener("pointercancel", S, u)
            },
            w = D => {
                if (D.pointerType !== "touch") {
                    if (m) {
                        d = !0;
                        return
                    }
                    v(D)
                }
            },
            C = D => {
                if (!_w(D)) return;
                d = !1;
                const V = i(f, D);
                typeof V == "function" && (p = V, f.addEventListener("pointerleave", w, u))
            };
        f.addEventListener("pointerenter", C, u), f.addEventListener("pointerdown", R, u)
    }), c
}
const ib = (e, i) => i ? e === i ? !0 : ib(e, i.parentElement) : !1,
    wh = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1,
    Bw = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function Hw(e) {
    return Bw.has(e.tagName) || e.isContentEditable === !0
}
const qw = new Set(["INPUT", "SELECT", "TEXTAREA"]);

function Pw(e) {
    return qw.has(e.tagName) || e.isContentEditable === !0
}
const Bl = new WeakSet;

function bg(e) {
    return i => {
        i.key === "Enter" && e(i)
    }
}

function $c(e, i) {
    e.dispatchEvent(new PointerEvent("pointer" + i, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const Gw = (e, i) => {
    const s = e.currentTarget;
    if (!s) return;
    const r = bg(() => {
        if (Bl.has(s)) return;
        $c(s, "down");
        const u = bg(() => {
                $c(s, "up")
            }),
            c = () => $c(s, "cancel");
        s.addEventListener("keyup", u, i), s.addEventListener("blur", c, i)
    });
    s.addEventListener("keydown", r, i), s.addEventListener("blur", () => s.removeEventListener("keydown", r), i)
};

function Sg(e) {
    return wh(e) && !eb()
}
const xg = new WeakSet;

function Kw(e, i, s = {}) {
    const [r, u, c] = nb(e, s), f = m => {
        const d = m.currentTarget;
        if (!Sg(m) || xg.has(m)) return;
        Bl.add(d), s.stopPropagation && xg.add(m);
        const p = i(d, m),
            y = { ...u,
                capture: !0
            },
            v = (w, C) => {
                window.removeEventListener("pointerup", S, y), window.removeEventListener("pointercancel", R, y), Bl.has(d) && Bl.delete(d), Sg(w) && typeof p == "function" && p(w, {
                    success: C
                })
            },
            S = w => {
                v(w, d === window || d === document || s.useGlobalTarget || ib(d, w.target))
            },
            R = w => {
                v(w, !1)
            };
        window.addEventListener("pointerup", S, y), window.addEventListener("pointercancel", R, y)
    };
    return r.forEach(m => {
        (s.useGlobalTarget ? window : m).addEventListener("pointerdown", f, u), Ll(m) && (m.addEventListener("focus", p => Gw(p, u)), !Hw(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0))
    }), c
}

function Eh(e) {
    return l0(e) && "ownerSVGElement" in e
}
const Hl = new WeakMap;
let ql;
const ab = (e, i, s) => (r, u) => u && u[0] ? u[0][e + "Size"] : Eh(r) && "getBBox" in r ? r.getBBox()[i] : r[s],
    Qw = ab("inline", "width", "offsetWidth"),
    Yw = ab("block", "height", "offsetHeight");

function Xw({
    target: e,
    borderBoxSize: i
}) {
    Hl.get(e) ? .forEach(s => {
        s(e, {
            get width() {
                return Qw(e, i)
            },
            get height() {
                return Yw(e, i)
            }
        })
    })
}

function Zw(e) {
    e.forEach(Xw)
}

function Fw() {
    typeof ResizeObserver > "u" || (ql = new ResizeObserver(Zw))
}

function Iw(e, i) {
    ql || Fw();
    const s = tb(e);
    return s.forEach(r => {
        let u = Hl.get(r);
        u || (u = new Set, Hl.set(r, u)), u.add(i), ql ? .observe(r)
    }), () => {
        s.forEach(r => {
            const u = Hl.get(r);
            u ? .delete(i), u ? .size || ql ? .unobserve(r)
        })
    }
}
const Pl = new Set;
let Aa;

function Jw() {
    Aa = () => {
        const e = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        Pl.forEach(i => i(e))
    }, window.addEventListener("resize", Aa)
}

function Ww(e) {
    return Pl.add(e), Aa || Jw(), () => {
        Pl.delete(e), !Pl.size && typeof Aa == "function" && (window.removeEventListener("resize", Aa), Aa = void 0)
    }
}

function Tg(e, i) {
    return typeof e == "function" ? Ww(e) : Iw(e, i)
}

function $w(e) {
    return Eh(e) && e.tagName === "svg"
}
const tE = [...J0, Kt, Fe],
    eE = e => tE.find(I0(e)),
    wg = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    Ra = () => ({
        x: wg(),
        y: wg()
    }),
    Eg = () => ({
        min: 0,
        max: 0
    }),
    Xt = () => ({
        x: Eg(),
        y: Eg()
    }),
    nE = new WeakMap;

function vo(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}

function Ws(e) {
    return typeof e == "string" || Array.isArray(e)
}
const Ah = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    Rh = ["initial", ...Ah];

function bo(e) {
    return vo(e.animate) || Rh.some(i => Ws(e[i]))
}

function sb(e) {
    return !!(bo(e) || e.variants)
}

function iE(e, i, s) {
    for (const r in i) {
        const u = i[r],
            c = s[r];
        if (ie(u)) e.addValue(r, u);
        else if (ie(c)) e.addValue(r, Da(u, {
            owner: e
        }));
        else if (c !== u)
            if (e.hasValue(r)) {
                const f = e.getValue(r);
                f.liveStyle === !0 ? f.jump(u) : f.hasAnimated || f.set(u)
            } else {
                const f = e.getStaticValue(r);
                e.addValue(r, Da(f !== void 0 ? f : u, {
                    owner: e
                }))
            }
    }
    for (const r in s) i[r] === void 0 && e.removeValue(r);
    return i
}
const Vf = {
        current: null
    },
    rb = {
        current: !1
    },
    aE = typeof window < "u";

function sE() {
    if (rb.current = !0, !!aE)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                i = () => Vf.current = e.matches;
            e.addEventListener("change", i), i()
        } else Vf.current = !1
}
const Ag = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let io = {};

function lb(e) {
    io = e
}

function rE() {
    return io
}
class lE {
    scrapeMotionValuesFromProps(i, s, r) {
        return {}
    }
    constructor({
        parent: i,
        props: s,
        presenceContext: r,
        reducedMotionConfig: u,
        skipAnimations: c,
        blockInitialAnimation: f,
        visualState: m
    }, d = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map, this.KeyframeResolver = yh, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const R = fe.now();
            this.renderScheduledAt < R && (this.renderScheduledAt = R, Nt.render(this.render, !1, !0))
        };
        const {
            latestValues: p,
            renderState: y
        } = m;
        this.latestValues = p, this.baseTarget = { ...p
        }, this.initialValues = s.initial ? { ...p
        } : {}, this.renderState = y, this.parent = i, this.props = s, this.presenceContext = r, this.depth = i ? i.depth + 1 : 0, this.reducedMotionConfig = u, this.skipAnimationsConfig = c, this.options = d, this.blockInitialAnimation = !!f, this.isControllingVariants = bo(s), this.isVariantNode = sb(s), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(i && i.current);
        const {
            willChange: v,
            ...S
        } = this.scrapeMotionValuesFromProps(s, {}, this);
        for (const R in S) {
            const w = S[R];
            p[R] !== void 0 && ie(w) && w.set(p[R])
        }
    }
    mount(i) {
        if (this.hasBeenMounted)
            for (const s in this.initialValues) this.values.get(s) ? .jump(this.initialValues[s]), this.latestValues[s] = this.initialValues[s];
        this.current = i, nE.set(i, this), this.projection && !this.projection.instance && this.projection.mount(i), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((s, r) => this.bindToMotionValue(r, s)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (rb.current || sE(), this.shouldReduceMotion = Vf.current), this.shouldSkipAnimations = this.skipAnimationsConfig ? ? !1, this.parent ? .addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0
    }
    unmount() {
        this.projection && this.projection.unmount(), ai(this.notifyUpdate), ai(this.render), this.valueSubscriptions.forEach(i => i()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent ? .removeChild(this);
        for (const i in this.events) this.events[i].clear();
        for (const i in this.features) {
            const s = this.features[i];
            s && (s.unmount(), s.isMounted = !1)
        }
        this.current = null
    }
    addChild(i) {
        this.children.add(i), this.enteringChildren ? ? (this.enteringChildren = new Set), this.enteringChildren.add(i)
    }
    removeChild(i) {
        this.children.delete(i), this.enteringChildren && this.enteringChildren.delete(i)
    }
    bindToMotionValue(i, s) {
        if (this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)(), s.accelerate && P0.has(i) && this.current instanceof HTMLElement) {
            const {
                factory: f,
                keyframes: m,
                times: d,
                ease: p,
                duration: y
            } = s.accelerate, v = new H0({
                element: this.current,
                name: i,
                keyframes: m,
                times: d,
                ease: p,
                duration: De(y)
            }), S = f(v);
            this.valueSubscriptions.set(i, () => {
                S(), v.cancel()
            });
            return
        }
        const r = Va.has(i);
        r && this.onBindTransform && this.onBindTransform();
        const u = s.on("change", f => {
            this.latestValues[i] = f, this.props.onUpdate && Nt.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
        });
        let c;
        typeof window < "u" && window.MotionCheckAppearSync && (c = window.MotionCheckAppearSync(this, i, s)), this.valueSubscriptions.set(i, () => {
            u(), c && c()
        })
    }
    sortNodePosition(i) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== i.type ? 0 : this.sortInstanceNodePosition(this.current, i.current)
    }
    updateFeatures() {
        let i = "animation";
        for (i in io) {
            const s = io[i];
            if (!s) continue;
            const {
                isEnabled: r,
                Feature: u
            } = s;
            if (!this.features[i] && u && r(this.props) && (this.features[i] = new u(this)), this.features[i]) {
                const c = this.features[i];
                c.isMounted ? c.update() : (c.mount(), c.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Xt()
    }
    getStaticValue(i) {
        return this.latestValues[i]
    }
    setStaticValue(i, s) {
        this.latestValues[i] = s
    }
    update(i, s) {
        (i.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = i, this.prevPresenceContext = this.presenceContext, this.presenceContext = s;
        for (let r = 0; r < Ag.length; r++) {
            const u = Ag[r];
            this.propEventSubscriptions[u] && (this.propEventSubscriptions[u](), delete this.propEventSubscriptions[u]);
            const c = "on" + u,
                f = i[c];
            f && (this.propEventSubscriptions[u] = this.on(u, f))
        }
        this.prevMotionValues = iE(this, this.scrapeMotionValuesFromProps(i, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(i) {
        return this.props.variants ? this.props.variants[i] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(i) {
        const s = this.getClosestVariantNode();
        if (s) return s.variantChildren && s.variantChildren.add(i), () => s.variantChildren.delete(i)
    }
    addValue(i, s) {
        const r = this.values.get(i);
        s !== r && (r && this.removeValue(i), this.bindToMotionValue(i, s), this.values.set(i, s), this.latestValues[i] = s.get())
    }
    removeValue(i) {
        this.values.delete(i);
        const s = this.valueSubscriptions.get(i);
        s && (s(), this.valueSubscriptions.delete(i)), delete this.latestValues[i], this.removeValueFromRenderState(i, this.renderState)
    }
    hasValue(i) {
        return this.values.has(i)
    }
    getValue(i, s) {
        if (this.props.values && this.props.values[i]) return this.props.values[i];
        let r = this.values.get(i);
        return r === void 0 && s !== void 0 && (r = Da(s === null ? void 0 : s, {
            owner: this
        }), this.addValue(i, r)), r
    }
    readValue(i, s) {
        let r = this.latestValues[i] !== void 0 || !this.current ? this.latestValues[i] : this.getBaseTargetFromProps(this.props, i) ? ? this.readValueFromInstance(this.current, i, this.options);
        return r != null && (typeof r == "string" && (r0(r) || o0(r)) ? r = parseFloat(r) : !eE(r) && Fe.test(s) && (r = $0(i, s)), this.setBaseTarget(i, ie(r) ? r.get() : r)), ie(r) ? r.get() : r
    }
    setBaseTarget(i, s) {
        this.baseTarget[i] = s
    }
    getBaseTarget(i) {
        const {
            initial: s
        } = this.props;
        let r;
        if (typeof s == "string" || typeof s == "object") {
            const c = bh(this.props, s, this.presenceContext ? .custom);
            c && (r = c[i])
        }
        if (s && r !== void 0) return r;
        const u = this.getBaseTargetFromProps(this.props, i);
        return u !== void 0 && !ie(u) ? u : this.initialValues[i] !== void 0 && r === void 0 ? void 0 : this.baseTarget[i]
    }
    on(i, s) {
        return this.events[i] || (this.events[i] = new lh), this.events[i].add(s)
    }
    notify(i, ...s) {
        this.events[i] && this.events[i].notify(...s)
    }
    scheduleRenderMicrotask() {
        Th.render(this.render)
    }
}
class ob extends lE {
    constructor() {
        super(...arguments), this.KeyframeResolver = kw
    }
    sortInstanceNodePosition(i, s) {
        return i.compareDocumentPosition(s) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(i, s) {
        const r = i.style;
        return r ? r[s] : void 0
    }
    removeValueFromRenderState(i, {
        vars: s,
        style: r
    }) {
        delete s[i], delete r[i]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: i
        } = this.props;
        ie(i) && (this.childSubscription = i.on("change", s => {
            this.current && (this.current.textContent = `${s}`)
        }))
    }
}
class ri {
    constructor(i) {
        this.isMounted = !1, this.node = i
    }
    update() {}
}

function ub({
    top: e,
    left: i,
    right: s,
    bottom: r
}) {
    return {
        x: {
            min: i,
            max: s
        },
        y: {
            min: e,
            max: r
        }
    }
}

function oE({
    x: e,
    y: i
}) {
    return {
        top: i.min,
        right: e.max,
        bottom: i.max,
        left: e.min
    }
}

function uE(e, i) {
    if (!i) return e;
    const s = i({
            x: e.left,
            y: e.top
        }),
        r = i({
            x: e.right,
            y: e.bottom
        });
    return {
        top: s.y,
        left: s.x,
        bottom: r.y,
        right: r.x
    }
}

function tf(e) {
    return e === void 0 || e === 1
}

function _f({
    scale: e,
    scaleX: i,
    scaleY: s
}) {
    return !tf(e) || !tf(i) || !tf(s)
}

function Ci(e) {
    return _f(e) || cb(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function cb(e) {
    return Rg(e.x) || Rg(e.y)
}

function Rg(e) {
    return e && e !== "0%"
}

function ao(e, i, s) {
    const r = e - s,
        u = i * r;
    return s + u
}

function Og(e, i, s, r, u) {
    return u !== void 0 && (e = ao(e, u, r)), ao(e, s, r) + i
}

function Lf(e, i = 0, s = 1, r, u) {
    e.min = Og(e.min, i, s, r, u), e.max = Og(e.max, i, s, r, u)
}

function fb(e, {
    x: i,
    y: s
}) {
    Lf(e.x, i.translate, i.scale, i.originPoint), Lf(e.y, s.translate, s.scale, s.originPoint)
}
const Cg = .999999999999,
    Mg = 1.0000000000001;

function cE(e, i, s, r = !1) {
    const u = s.length;
    if (!u) return;
    i.x = i.y = 1;
    let c, f;
    for (let m = 0; m < u; m++) {
        c = s[m], f = c.projectionDelta;
        const {
            visualElement: d
        } = c.options;
        d && d.props.style && d.props.style.display === "contents" || (r && c.options.layoutScroll && c.scroll && c !== c.root && (sn(e.x, -c.scroll.offset.x), sn(e.y, -c.scroll.offset.y)), f && (i.x *= f.x.scale, i.y *= f.y.scale, fb(e, f)), r && Ci(c.latestValues) && Gl(e, c.latestValues, c.layout ? .layoutBox))
    }
    i.x < Mg && i.x > Cg && (i.x = 1), i.y < Mg && i.y > Cg && (i.y = 1)
}

function sn(e, i) {
    e.min += i, e.max += i
}

function Dg(e, i, s, r, u = .5) {
    const c = Dt(e.min, e.max, u);
    Lf(e, i, s, c, r)
}

function Ng(e, i) {
    return typeof e == "string" ? parseFloat(e) / 100 * (i.max - i.min) : e
}

function Gl(e, i, s) {
    const r = s ? ? e;
    Dg(e.x, Ng(i.x, r.x), i.scaleX, i.scale, i.originX), Dg(e.y, Ng(i.y, r.y), i.scaleY, i.scale, i.originY)
}

function hb(e, i) {
    return ub(uE(e.getBoundingClientRect(), i))
}

function fE(e, i, s) {
    const r = hb(e, s),
        {
            scroll: u
        } = i;
    return u && (sn(r.x, u.offset.x), sn(r.y, u.offset.y)), r
}
const hE = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    dE = ka.length;

function mE(e, i, s) {
    let r = "",
        u = !0;
    for (let f = 0; f < dE; f++) {
        const m = ka[f],
            d = e[m];
        if (d === void 0) continue;
        let p = !0;
        if (typeof d == "number") p = d === (m.startsWith("scale") ? 1 : 0);
        else {
            const y = parseFloat(d);
            p = m.startsWith("scale") ? y === 1 : y === 0
        }
        if (!p || s) {
            const y = kf(d, no[m]);
            if (!p) {
                u = !1;
                const v = hE[m] || m;
                r += `${v}(${y}) `
            }
            s && (i[m] = y)
        }
    }
    const c = e.pathRotation;
    return c && (u = !1, r += `rotate(${kf(c,no.pathRotation)}) `), r = r.trim(), s ? r = s(i, u ? "" : r) : u && (r = "none"), r
}

function Oh(e, i, s) {
    const {
        style: r,
        vars: u,
        transformOrigin: c
    } = e;
    let f = !1,
        m = !1;
    for (const d in i) {
        const p = i[d];
        if (Va.has(d)) {
            f = !0;
            continue
        } else if (w0(d)) {
            u[d] = p;
            continue
        } else {
            const y = kf(p, no[d]);
            d.startsWith("origin") ? (m = !0, c[d] = y) : r[d] = y
        }
    }
    if (i.transform || (f || s ? r.transform = mE(i, e.transform, s) : r.transform && (r.transform = "none")), m) {
        const {
            originX: d = "50%",
            originY: p = "50%",
            originZ: y = 0
        } = c;
        r.transformOrigin = `${d} ${p} ${y}`
    }
}

function db(e, {
    style: i,
    vars: s
}, r, u) {
    const c = e.style;
    let f;
    for (f in i) c[f] = i[f];
    u ? .applyProjectionStyles(c, r);
    for (f in s) c.setProperty(f, s[f])
}

function jg(e, i) {
    return i.max === i.min ? 0 : e / (i.max - i.min) * 100
}
const _s = {
        correct: (e, i) => {
            if (!i.target) return e;
            if (typeof e == "string")
                if ($.test(e)) e = parseFloat(e);
                else return e;
            const s = jg(e, i.target.x),
                r = jg(e, i.target.y);
            return `${s}% ${r}%`
        }
    },
    pE = {
        correct: (e, {
            treeScale: i,
            projectionDelta: s
        }) => {
            const r = e,
                u = Fe.parse(e);
            if (u.length > 5) return r;
            const c = Fe.createTransformer(e),
                f = typeof u[0] != "number" ? 1 : 0,
                m = s.x.scale * i.x,
                d = s.y.scale * i.y;
            u[0 + f] /= m, u[1 + f] /= d;
            const p = Dt(m, d, .5);
            return typeof u[2 + f] == "number" && (u[2 + f] /= p), typeof u[3 + f] == "number" && (u[3 + f] /= p), c(u)
        }
    },
    Bf = {
        borderRadius: { ..._s,
            applyTo: [...xh]
        },
        borderTopLeftRadius: _s,
        borderTopRightRadius: _s,
        borderBottomLeftRadius: _s,
        borderBottomRightRadius: _s,
        boxShadow: pE
    };

function mb(e, {
    layout: i,
    layoutId: s
}) {
    return Va.has(e) || e.startsWith("origin") || (i || s !== void 0) && (!!Bf[e] || e === "opacity")
}

function Ch(e, i, s) {
    const r = e.style,
        u = i ? .style,
        c = {};
    if (!r) return c;
    for (const f in r)(ie(r[f]) || u && ie(u[f]) || mb(f, e) || s ? .getValue(f) ? .liveStyle !== void 0) && (c[f] = r[f]);
    return c
}

function yE(e) {
    return window.getComputedStyle(e)
}
class gE extends ob {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = db
    }
    mount(i) {
        yo(!!i.style), super.mount(i)
    }
    readValueFromInstance(i, s) {
        if (Va.has(s)) return this.projection ? .isProjecting ? Ef(s) : _2(i, s); {
            const r = yE(i),
                u = (w0(s) ? r.getPropertyValue(s) : r[s]) || 0;
            return typeof u == "string" ? u.trim() : u
        }
    }
    measureInstanceViewportBox(i, {
        transformPagePoint: s
    }) {
        return hb(i, s)
    }
    build(i, s, r) {
        Oh(i, s, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(i, s, r) {
        return Ch(i, s, r)
    }
}
const vE = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    bE = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function SE(e, i, s = 1, r = 0, u = !0) {
    e.pathLength = 1;
    const c = u ? vE : bE;
    e[c.offset] = `${-r}`, e[c.array] = `${i} ${s}`
}
const pb = ["transform", "opacity", "offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];

function yb(e, {
    attrX: i,
    attrY: s,
    attrScale: r,
    pathLength: u,
    pathSpacing: c = 1,
    pathOffset: f = 0,
    ...m
}, d, p, y) {
    if (Oh(e, m, p), d) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    const {
        attrs: v,
        style: S
    } = e;
    for (const R of pb) v[R] !== void 0 && (S[R] = v[R], delete v[R]);
    (S.transform || v.transformOrigin) && (S.transformOrigin = v.transformOrigin ? ? "50% 50%", delete v.transformOrigin), S.transform && (S.transformBox = y ? .transformBox ? ? "fill-box", delete v.transformBox), i !== void 0 && (v.x = i), s !== void 0 && (v.y = s), r !== void 0 && (v.scale = r), u !== void 0 && SE(v, u, c, f, !1)
}
const gb = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]),
    vb = e => typeof e == "string" && e.toLowerCase() === "svg";

function xE(e, i, s, r) {
    db(e, i, void 0, r);
    for (const u in i.attrs) e.setAttribute(gb.has(u) ? u : Sh(u), i.attrs[u])
}

function bb(e, i, s) {
    const r = Ch(e, i, s);
    for (const u in e)
        if (ie(e[u]) || ie(i[u])) {
            const c = ka.indexOf(u) !== -1 ? "attr" + u.charAt(0).toUpperCase() + u.substring(1) : u;
            r[c] = e[u]
        }
    return r
}
class TE extends ob {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Xt
    }
    getBaseTargetFromProps(i, s) {
        return i[s]
    }
    readValueFromInstance(i, s) {
        if (Va.has(s)) {
            const r = W0(s);
            return r && r.default || 0
        }
        if (pb.includes(s)) {
            const u = getComputedStyle(i)[s];
            if (typeof u == "string" && u) return u.trim()
        }
        return s = gb.has(s) ? s : Sh(s), i.getAttribute(s)
    }
    scrapeMotionValuesFromProps(i, s, r) {
        return bb(i, s, r)
    }
    build(i, s, r) {
        yb(i, s, this.isSVGTag, r.transformTemplate, r.style)
    }
    renderInstance(i, s, r, u) {
        xE(i, s, r, u)
    }
    mount(i) {
        this.isSVGTag = vb(i.tagName), super.mount(i)
    }
}
const wE = Rh.length;

function Sb(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
        const s = e.parent ? Sb(e.parent) || {} : {};
        return e.props.initial !== void 0 && (s.initial = e.props.initial), s
    }
    const i = {};
    for (let s = 0; s < wE; s++) {
        const r = Rh[s],
            u = e.props[r];
        (Ws(u) || u === !1) && (i[r] = u)
    }
    return i
}

function xb(e, i) {
    if (!Array.isArray(i)) return !1;
    const s = i.length;
    if (s !== e.length) return !1;
    for (let r = 0; r < s; r++)
        if (i[r] !== e[r]) return !1;
    return !0
}
const EE = [...Ah].reverse(),
    AE = Ah.length;

function RE(e) {
    return i => Promise.all(i.map(({
        animation: s,
        options: r
    }) => Ew(e, s, r)))
}

function OE(e) {
    let i = RE(e),
        s = Ug(),
        r = !0,
        u = !1;
    const c = p => (y, v) => {
        const S = Ui(e, v, p === "exit" ? e.presenceContext ? .custom : void 0);
        if (S) {
            const {
                transition: R,
                transitionEnd: w,
                ...C
            } = S;
            y = { ...y,
                ...C,
                ...w
            }
        }
        return y
    };

    function f(p) {
        i = p(e)
    }

    function m(p) {
        const {
            props: y
        } = e, v = Sb(e.parent) || {}, S = [], R = new Set;
        let w = {},
            C = 1 / 0;
        for (let V = 0; V < AE; V++) {
            const K = EE[V],
                B = s[K],
                q = y[K] !== void 0 ? y[K] : v[K],
                _ = Ws(q),
                Q = K === p ? B.isActive : null;
            Q === !1 && (C = V);
            let tt = q === v[K] && q !== y[K] && _;
            if (tt && (r || u) && e.manuallyAnimateOnMount && (tt = !1), B.protectedKeys = { ...w
                }, !B.isActive && Q === null || !q && !B.prevProp || vo(q) || typeof q == "boolean") continue;
            if (K === "exit" && B.isActive && Q !== !0) {
                B.prevResolvedValues && (w = { ...w,
                    ...B.prevResolvedValues
                });
                continue
            }
            const Y = CE(B.prevProp, q);
            let et = Y || K === p && B.isActive && !tt && _ || V > C && _,
                J = !1;
            const ot = Array.isArray(q) ? q : [q];
            let ut = ot.reduce(c(K), {});
            Q === !1 && (ut = {});
            const {
                prevResolvedValues: bt = {}
            } = B, gt = { ...bt,
                ...ut
            }, vt = I => {
                et = !0, R.has(I) && (J = !0, R.delete(I)), B.needsAnimating[I] = !0;
                const ft = e.getValue(I);
                ft && (ft.liveStyle = !1)
            };
            for (const I in gt) {
                const ft = ut[I],
                    E = bt[I];
                if (w.hasOwnProperty(I)) continue;
                let G = !1;
                Df(ft) && Df(E) ? G = !xb(ft, E) || Y : G = ft !== E, G ? ft != null ? vt(I) : R.add(I) : ft !== void 0 && R.has(I) ? vt(I) : B.protectedKeys[I] = !0
            }
            B.prevProp = q, B.prevResolvedValues = ut, B.isActive && (w = { ...w,
                ...ut
            }), (r || u) && e.blockInitialAnimation && (et = !1);
            const z = tt && Y;
            et && (!z || J) && S.push(...ot.map(I => {
                const ft = {
                    type: K
                };
                if (typeof I == "string" && (r || u) && !z && e.manuallyAnimateOnMount && e.parent) {
                    const {
                        parent: E
                    } = e, G = Ui(E, I);
                    if (E.enteringChildren && G) {
                        const {
                            delayChildren: F
                        } = G.transition || {};
                        ft.delay = G0(E.enteringChildren, e, F)
                    }
                }
                return {
                    animation: I,
                    options: ft
                }
            }))
        }
        if (R.size) {
            const V = {};
            if (typeof y.initial != "boolean") {
                const K = Ui(e, Array.isArray(y.initial) ? y.initial[0] : y.initial);
                K && K.transition && (V.transition = K.transition)
            }
            R.forEach(K => {
                const B = e.getBaseTarget(K),
                    q = e.getValue(K);
                q && (q.liveStyle = !0), V[K] = B ? ? null
            }), S.push({
                animation: V
            })
        }
        let D = !!S.length;
        return r && (y.initial === !1 || y.initial === y.animate) && !e.manuallyAnimateOnMount && (D = !1), r = !1, u = !1, D ? i(S) : Promise.resolve()
    }

    function d(p, y) {
        if (s[p].isActive === y) return Promise.resolve();
        e.variantChildren ? .forEach(S => S.animationState ? .setActive(p, y)), s[p].isActive = y;
        const v = m(p);
        for (const S in s) s[S].protectedKeys = {};
        return v
    }
    return {
        animateChanges: m,
        setActive: d,
        setAnimateFunction: f,
        getState: () => s,
        reset: () => {
            s = Ug(), u = !0
        }
    }
}

function CE(e, i) {
    return typeof i == "string" ? i !== e : Array.isArray(i) ? !xb(i, e) : !1
}

function Ai(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function Ug() {
    return {
        animate: Ai(!0),
        whileInView: Ai(),
        whileHover: Ai(),
        whileTap: Ai(),
        whileDrag: Ai(),
        whileFocus: Ai(),
        exit: Ai()
    }
}

function Hf(e, i) {
    e.min = i.min, e.max = i.max
}

function Qe(e, i) {
    Hf(e.x, i.x), Hf(e.y, i.y)
}

function zg(e, i) {
    e.translate = i.translate, e.scale = i.scale, e.originPoint = i.originPoint, e.origin = i.origin
}
const Tb = 1e-4,
    ME = 1 - Tb,
    DE = 1 + Tb,
    wb = .01,
    NE = 0 - wb,
    jE = 0 + wb;

function he(e) {
    return e.max - e.min
}

function UE(e, i, s) {
    return Math.abs(e - i) <= s
}

function kg(e, i, s, r = .5) {
    e.origin = r, e.originPoint = Dt(i.min, i.max, e.origin), e.scale = he(s) / he(i), e.translate = Dt(s.min, s.max, e.origin) - e.originPoint, (e.scale >= ME && e.scale <= DE || isNaN(e.scale)) && (e.scale = 1), (e.translate >= NE && e.translate <= jE || isNaN(e.translate)) && (e.translate = 0)
}

function Xs(e, i, s, r) {
    kg(e.x, i.x, s.x, r ? r.originX : void 0), kg(e.y, i.y, s.y, r ? r.originY : void 0)
}

function Vg(e, i, s, r = 0) {
    const u = r ? Dt(s.min, s.max, r) : s.min;
    e.min = u + i.min, e.max = e.min + he(i)
}

function zE(e, i, s, r) {
    Vg(e.x, i.x, s.x, r ? .x), Vg(e.y, i.y, s.y, r ? .y)
}

function _g(e, i, s, r = 0) {
    const u = r ? Dt(s.min, s.max, r) : s.min;
    e.min = i.min - u, e.max = e.min + he(i)
}

function so(e, i, s, r) {
    _g(e.x, i.x, s.x, r ? .x), _g(e.y, i.y, s.y, r ? .y)
}

function Lg(e, i, s, r, u) {
    return e -= i, e = ao(e, 1 / s, r), u !== void 0 && (e = ao(e, 1 / u, r)), e
}

function kE(e, i = 0, s = 1, r = .5, u, c = e, f = e) {
    if (rn.test(i) && (i = parseFloat(i), i = Dt(f.min, f.max, i / 100) - f.min), typeof i != "number") return;
    let m = Dt(c.min, c.max, r);
    e === c && (m -= i), e.min = Lg(e.min, i, s, m, u), e.max = Lg(e.max, i, s, m, u)
}

function Bg(e, i, [s, r, u], c, f) {
    kE(e, i[s], i[r], i[u], i.scale, c, f)
}
const VE = ["x", "scaleX", "originX"],
    _E = ["y", "scaleY", "originY"];

function Hg(e, i, s, r) {
    Bg(e.x, i, VE, s ? s.x : void 0, r ? r.x : void 0), Bg(e.y, i, _E, s ? s.y : void 0, r ? r.y : void 0)
}

function qg(e) {
    return e.translate === 0 && e.scale === 1
}

function Eb(e) {
    return qg(e.x) && qg(e.y)
}

function Pg(e, i) {
    return e.min === i.min && e.max === i.max
}

function LE(e, i) {
    return Pg(e.x, i.x) && Pg(e.y, i.y)
}

function Gg(e, i) {
    return Math.round(e.min) === Math.round(i.min) && Math.round(e.max) === Math.round(i.max)
}

function Ab(e, i) {
    return Gg(e.x, i.x) && Gg(e.y, i.y)
}

function Kg(e) {
    return he(e.x) / he(e.y)
}

function Qg(e, i) {
    return e.translate === i.translate && e.scale === i.scale && e.originPoint === i.originPoint
}

function nn(e) {
    return [e("x"), e("y")]
}

function BE(e, i, s) {
    let r = "";
    const u = e.x.translate / i.x,
        c = e.y.translate / i.y,
        f = s ? .z || 0;
    if ((u || c || f) && (r = `translate3d(${u}px, ${c}px, ${f}px) `), (i.x !== 1 || i.y !== 1) && (r += `scale(${1/i.x}, ${1/i.y}) `), s) {
        const {
            transformPerspective: p,
            rotate: y,
            pathRotation: v,
            rotateX: S,
            rotateY: R,
            skewX: w,
            skewY: C
        } = s;
        p && (r = `perspective(${p}px) ${r}`), y && (r += `rotate(${y}deg) `), v && (r += `rotate(${v}deg) `), S && (r += `rotateX(${S}deg) `), R && (r += `rotateY(${R}deg) `), w && (r += `skewX(${w}deg) `), C && (r += `skewY(${C}deg) `)
    }
    const m = e.x.scale * i.x,
        d = e.y.scale * i.y;
    return (m !== 1 || d !== 1) && (r += `scale(${m}, ${d})`), r || "none"
}
const HE = xh.length,
    Yg = e => typeof e == "string" ? parseFloat(e) : e,
    Xg = e => typeof e == "number" || $.test(e);

function qE(e, i, s, r, u, c) {
    u ? (e.opacity = Dt(0, s.opacity ? ? 1, PE(r)), e.opacityExit = Dt(i.opacity ? ? 1, 0, GE(r))) : c && (e.opacity = Dt(i.opacity ? ? 1, s.opacity ? ? 1, r));
    for (let f = 0; f < HE; f++) {
        const m = xh[f];
        let d = Zg(i, m),
            p = Zg(s, m);
        if (d === void 0 && p === void 0) continue;
        d || (d = 0), p || (p = 0), d === 0 || p === 0 || Xg(d) === Xg(p) ? (e[m] = Math.max(Dt(Yg(d), Yg(p), r), 0), (rn.test(p) || rn.test(d)) && (e[m] += "%")) : e[m] = p
    }(i.rotate || s.rotate) && (e.rotate = Dt(i.rotate || 0, s.rotate || 0, r))
}

function Zg(e, i) {
    return e[i] !== void 0 ? e[i] : e.borderRadius
}
const PE = Rb(0, .5, g0),
    GE = Rb(.5, .95, qe);

function Rb(e, i, s) {
    return r => r < e ? 0 : r > i ? 1 : s(Is(e, i, r))
}

function KE(e, i, s) {
    const r = ie(e) ? e : Da(e);
    return r.start(vh("", r, i, s)), r.animation
}

function $s(e, i, s, r = {
    passive: !0
}) {
    return e.addEventListener(i, s, r), () => e.removeEventListener(i, s, r)
}
const QE = (e, i) => e.depth - i.depth;
class YE {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(i) {
        rh(this.children, i), this.isDirty = !0
    }
    remove(i) {
        Jl(this.children, i), this.isDirty = !0
    }
    forEach(i) {
        this.isDirty && this.children.sort(QE), this.isDirty = !1, this.children.forEach(i)
    }
}

function XE(e, i) {
    const s = fe.now(),
        r = ({
            timestamp: u
        }) => {
            const c = u - s;
            c >= i && (ai(r), e(c - i))
        };
    return Nt.setup(r, !0), () => ai(r)
}

function Kl(e) {
    return ie(e) ? e.get() : e
}
class ZE {
    constructor() {
        this.members = []
    }
    add(i) {
        rh(this.members, i);
        for (let s = this.members.length - 1; s >= 0; s--) {
            const r = this.members[s];
            if (r === i || r === this.lead || r === this.prevLead) continue;
            const u = r.instance;
            (!u || u.isConnected === !1) && !r.snapshot && (Jl(this.members, r), r.unmount())
        }
        i.scheduleRender()
    }
    remove(i) {
        if (Jl(this.members, i), i === this.prevLead && (this.prevLead = void 0), i === this.lead) {
            const s = this.members[this.members.length - 1];
            s && this.promote(s)
        }
    }
    relegate(i) {
        for (let s = this.members.indexOf(i) - 1; s >= 0; s--) {
            const r = this.members[s];
            if (r.isPresent !== !1 && r.instance ? .isConnected !== !1) return this.promote(r), !0
        }
        return !1
    }
    promote(i, s) {
        const r = this.lead;
        if (i !== r && (this.prevLead = r, this.lead = i, i.show(), r)) {
            r.updateSnapshot(), i.scheduleRender();
            const {
                layoutDependency: u
            } = r.options, {
                layoutDependency: c
            } = i.options;
            (u === void 0 || u !== c) && (i.resumeFrom = r, s && (r.preserveOpacity = !0), r.snapshot && (i.snapshot = r.snapshot, i.snapshot.latestValues = r.animationValues || r.latestValues), i.root ? .isUpdating && (i.isLayoutDirty = !0)), i.options.crossfade === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(i => {
            i.options.onExitComplete ? .(), i.resumingFrom ? .options.onExitComplete ? .()
        })
    }
    scheduleRender() {
        this.members.forEach(i => i.instance && i.scheduleRender(!1))
    }
    removeLeadSnapshot() {
        this.lead ? .snapshot && (this.lead.snapshot = void 0)
    }
}
const Ql = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    },
    ef = ["", "X", "Y", "Z"],
    FE = 1e3;
let IE = 0;

function nf(e, i, s, r) {
    const {
        latestValues: u
    } = i;
    u[e] && (s[e] = u[e], i.setStaticValue(e, 0), r && (r[e] = 0))
}

function Ob(e) {
    if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
    const {
        visualElement: i
    } = e.options;
    if (!i) return;
    const s = Z0(i);
    if (window.MotionHasOptimisedAnimation(s, "transform")) {
        const {
            layout: u,
            layoutId: c
        } = e.options;
        window.MotionCancelOptimisedAnimation(s, "transform", Nt, !(u || c))
    }
    const {
        parent: r
    } = e;
    r && !r.hasCheckedOptimisedAppear && Ob(r)
}

function Cb({
    attachResizeListener: e,
    defaultParent: i,
    measureScroll: s,
    checkIsScrollRoot: r,
    resetTransform: u
}) {
    return class {
        constructor(f = {}, m = i ? .()) {
            this.id = IE++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, this.nodes.forEach($E), this.nodes.forEach(sA), this.nodes.forEach(rA), this.nodes.forEach(tA)
            }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = f, this.root = m ? m.root || m : this, this.path = m ? [...m.path, m] : [], this.parent = m, this.depth = m ? m.depth + 1 : 0;
            for (let d = 0; d < this.path.length; d++) this.path[d].shouldResetTransform = !0;
            this.root === this && (this.nodes = new YE)
        }
        addEventListener(f, m) {
            return this.eventHandlers.has(f) || this.eventHandlers.set(f, new lh), this.eventHandlers.get(f).add(m)
        }
        notifyListeners(f, ...m) {
            const d = this.eventHandlers.get(f);
            d && d.notify(...m)
        }
        hasListeners(f) {
            return this.eventHandlers.has(f)
        }
        mount(f) {
            if (this.instance) return;
            this.isSVG = Eh(f) && !$w(f), this.instance = f;
            const {
                layoutId: m,
                layout: d,
                visualElement: p
            } = this.options;
            if (p && !p.current && p.mount(f), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (d || m) && (this.isLayoutDirty = !0), e) {
                let y, v = 0;
                const S = () => this.root.updateBlockedByResize = !1;
                Nt.read(() => {
                    v = window.innerWidth
                }), e(f, () => {
                    const R = window.innerWidth;
                    R !== v && (v = R, this.root.updateBlockedByResize = !0, y && y(), y = XE(S, 250), Ql.hasAnimatedSinceResize && (Ql.hasAnimatedSinceResize = !1, this.nodes.forEach(Jg)))
                })
            }
            m && this.root.registerSharedNode(m, this), this.options.animate !== !1 && p && (m || d) && this.addEventListener("didUpdate", ({
                delta: y,
                hasLayoutChanged: v,
                hasRelativeLayoutChanged: S,
                layout: R
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const w = this.options.transition || p.getDefaultTransition() || fA,
                    {
                        onLayoutAnimationStart: C,
                        onLayoutAnimationComplete: D
                    } = p.getProps(),
                    V = !this.targetLayout || !Ab(this.targetLayout, R),
                    K = !v && S;
                if (this.options.layoutRoot || this.resumeFrom || K || v && (V || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                    const B = { ...gh(w, "layout"),
                        onPlay: C,
                        onComplete: D
                    };
                    (p.shouldReduceMotion || this.options.layoutRoot) && (B.delay = 0, B.type = !1), this.startAnimation(B), this.setAnimationOrigin(y, K, B.path)
                } else v || Jg(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = R
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const f = this.getStack();
            f && f.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), ai(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(lA), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: f
            } = this.options;
            return f && f.getProps().transformTemplate
        }
        willUpdate(f = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ob(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let y = 0; y < this.path.length; y++) {
                const v = this.path[y];
                v.shouldResetTransform = !0, (typeof v.latestValues.x == "string" || typeof v.latestValues.y == "string") && (v.isLayoutDirty = !0), v.updateScroll("snapshot"), v.options.layoutRoot && v.willUpdate(!1)
            }
            const {
                layoutId: m,
                layout: d
            } = this.options;
            if (m === void 0 && !d) return;
            const p = this.getTransformTemplate();
            this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0, this.updateSnapshot(), f && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                const d = this.updateBlockedByResize;
                this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), d && this.nodes.forEach(nA), this.nodes.forEach(Fg);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(Ig);
                return
            }
            this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(iA), this.nodes.forEach(aA), this.nodes.forEach(JE), this.nodes.forEach(WE)) : this.nodes.forEach(Ig), this.clearAllSnapshots();
            const m = fe.now();
            ne.delta = ln(0, 1e3 / 60, m - ne.timestamp), ne.timestamp = m, ne.isProcessing = !0, Xc.update.process(ne), Xc.preRender.process(ne), Xc.render.process(ne), ne.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, Th.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(eA), this.sharedNodes.forEach(oA)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Nt.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Nt.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !he(this.snapshot.measuredBox.x) && !he(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let d = 0; d < this.path.length; d++) this.path[d].updateScroll();
            const f = this.layout;
            this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = Xt()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: m
            } = this.options;
            m && m.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0)
        }
        updateScroll(f = "measure") {
            let m = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === f && (m = !1), m && this.instance) {
                const d = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: f,
                    isRoot: d,
                    offset: s(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : d
                }
            }
        }
        resetTransform() {
            if (!u) return;
            const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                m = this.projectionDelta && !Eb(this.projectionDelta),
                d = this.getTransformTemplate(),
                p = d ? d(this.latestValues, "") : void 0,
                y = p !== this.prevTransformTemplateValue;
            f && this.instance && (m || Ci(this.latestValues) || y) && (u(this.instance, p), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(f = !0) {
            const m = this.measurePageBox();
            let d = this.removeElementScroll(m);
            return f && (d = this.removeTransform(d)), hA(d), {
                animationId: this.root.animationId,
                measuredBox: m,
                layoutBox: d,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {
                visualElement: f
            } = this.options;
            if (!f) return Xt();
            const m = f.measureViewportBox();
            if (!(this.scroll ? .wasRoot || this.path.some(dA))) {
                const {
                    scroll: p
                } = this.root;
                p && (sn(m.x, p.offset.x), sn(m.y, p.offset.y))
            }
            return m
        }
        removeElementScroll(f) {
            const m = Xt();
            if (Qe(m, f), this.scroll ? .wasRoot) return m;
            for (let d = 0; d < this.path.length; d++) {
                const p = this.path[d],
                    {
                        scroll: y,
                        options: v
                    } = p;
                p !== this.root && y && v.layoutScroll && (y.wasRoot && Qe(m, f), sn(m.x, y.offset.x), sn(m.y, y.offset.y))
            }
            return m
        }
        applyTransform(f, m = !1, d) {
            const p = d || Xt();
            Qe(p, f);
            for (let y = 0; y < this.path.length; y++) {
                const v = this.path[y];
                !m && v.options.layoutScroll && v.scroll && v !== v.root && (sn(p.x, -v.scroll.offset.x), sn(p.y, -v.scroll.offset.y)), Ci(v.latestValues) && Gl(p, v.latestValues, v.layout ? .layoutBox)
            }
            return Ci(this.latestValues) && Gl(p, this.latestValues, this.layout ? .layoutBox), p
        }
        removeTransform(f) {
            const m = Xt();
            Qe(m, f);
            for (let d = 0; d < this.path.length; d++) {
                const p = this.path[d];
                if (!Ci(p.latestValues)) continue;
                let y;
                p.instance && (_f(p.latestValues) && p.updateSnapshot(), y = Xt(), Qe(y, p.measurePageBox())), Hg(m, p.latestValues, p.snapshot ? .layoutBox, y)
            }
            return Ci(this.latestValues) && Hg(m, this.latestValues), m
        }
        setTargetDelta(f) {
            this.targetDelta = f, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(f) {
            this.options = { ...this.options,
                ...f,
                crossfade: f.crossfade !== void 0 ? f.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ne.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(f = !1) {
            const m = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = m.isSharedProjectionDirty);
            const d = !!this.resumingFrom || this !== m;
            if (!(f || d && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent ? .isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: y,
                layoutId: v
            } = this.options;
            if (!this.layout || !(y || v)) return;
            this.resolvedRelativeTargetAt = ne.timestamp;
            const S = this.getClosestProjectingParent();
            S && this.linkedParentVersion !== S.layoutVersion && !S.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && S && S.layout ? this.createRelativeTarget(S, this.layout.layoutBox, S.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Xt(), this.targetWithTransforms = Xt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), zE(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Qe(this.target, this.layout.layoutBox), fb(this.target, this.targetDelta)) : Qe(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && S && !!S.resumingFrom == !!this.resumingFrom && !S.options.layoutScroll && S.target && this.animationProgress !== 1 ? this.createRelativeTarget(S, this.target, S.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || _f(this.parent.latestValues) || cb(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(f, m, d) {
            this.relativeParent = f, this.linkedParentVersion = f.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Xt(), this.relativeTargetOrigin = Xt(), so(this.relativeTargetOrigin, m, d, this.options.layoutAnchor || void 0), Qe(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            const f = this.getLead(),
                m = !!this.resumingFrom || this !== f;
            let d = !0;
            if ((this.isProjectionDirty || this.parent ? .isProjectionDirty) && (d = !1), m && (this.isSharedProjectionDirty || this.isTransformDirty) && (d = !1), this.resolvedRelativeTargetAt === ne.timestamp && (d = !1), d) return;
            const {
                layout: p,
                layoutId: y
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(p || y)) return;
            Qe(this.layoutCorrected, this.layout.layoutBox);
            const v = this.treeScale.x,
                S = this.treeScale.y;
            cE(this.layoutCorrected, this.treeScale, this.path, m), f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox, f.targetWithTransforms = Xt());
            const {
                target: R
            } = f;
            if (!R) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (zg(this.prevProjectionDelta.x, this.projectionDelta.x), zg(this.prevProjectionDelta.y, this.projectionDelta.y)), Xs(this.projectionDelta, this.layoutCorrected, R, this.latestValues), (this.treeScale.x !== v || this.treeScale.y !== S || !Qg(this.projectionDelta.x, this.prevProjectionDelta.x) || !Qg(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", R))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(f = !0) {
            if (this.options.visualElement ? .scheduleRender(), f) {
                const m = this.getStack();
                m && m.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Ra(), this.projectionDelta = Ra(), this.projectionDeltaWithTransform = Ra()
        }
        setAnimationOrigin(f, m = !1, d) {
            const p = this.snapshot,
                y = p ? p.latestValues : {},
                v = { ...this.latestValues
                },
                S = Ra();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !m;
            const R = Xt(),
                w = p ? p.source : void 0,
                C = this.layout ? this.layout.source : void 0,
                D = w !== C,
                V = this.getStack(),
                K = !V || V.members.length <= 1,
                B = !!(D && !K && this.options.crossfade === !0 && !this.path.some(cA));
            this.animationProgress = 0;
            let q;
            const _ = d ? .interpolateProjection(f);
            this.mixTargetDelta = Q => {
                const tt = Q / 1e3,
                    Y = _ ? .(tt);
                Y ? (S.x.translate = Y.x, S.x.scale = Dt(f.x.scale, 1, tt), S.x.origin = f.x.origin, S.x.originPoint = f.x.originPoint, S.y.translate = Y.y, S.y.scale = Dt(f.y.scale, 1, tt), S.y.origin = f.y.origin, S.y.originPoint = f.y.originPoint) : (Wg(S.x, f.x, tt), Wg(S.y, f.y, tt)), this.setTargetDelta(S), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (so(R, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), uA(this.relativeTarget, this.relativeTargetOrigin, R, tt), q && LE(this.relativeTarget, q) && (this.isProjectionDirty = !1), q || (q = Xt()), Qe(q, this.relativeTarget)), D && (this.animationValues = v, qE(v, y, this.latestValues, tt, B, K)), Y && Y.rotate !== void 0 && (this.animationValues || (this.animationValues = v), this.animationValues.pathRotation = Y.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = tt
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(f) {
            this.notifyListeners("animationStart"), this.currentAnimation ? .stop(), this.resumingFrom ? .currentAnimation ? .stop(), this.pendingAnimation && (ai(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Nt.update(() => {
                Ql.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Da(0)), this.motionValue.jump(0, !1), this.currentAnimation = KE(this.motionValue, [0, 1e3], { ...f,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: m => {
                        this.mixTargetDelta(m), f.onUpdate && f.onUpdate(m)
                    },
                    onComplete: () => {
                        f.onComplete && f.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const f = this.getStack();
            f && f.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(FE), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const f = this.getLead();
            let {
                targetWithTransforms: m,
                target: d,
                layout: p,
                latestValues: y
            } = f;
            if (!(!m || !d || !p)) {
                if (this !== f && this.layout && p && Mb(this.options.animationType, this.layout.layoutBox, p.layoutBox)) {
                    d = this.target || Xt();
                    const v = he(this.layout.layoutBox.x);
                    d.x.min = f.target.x.min, d.x.max = d.x.min + v;
                    const S = he(this.layout.layoutBox.y);
                    d.y.min = f.target.y.min, d.y.max = d.y.min + S
                }
                Qe(m, d), Gl(m, y), Xs(this.projectionDeltaWithTransform, this.layoutCorrected, m, y)
            }
        }
        registerSharedNode(f, m) {
            this.sharedNodes.has(f) || this.sharedNodes.set(f, new ZE), this.sharedNodes.get(f).add(m);
            const p = m.options.initialPromotionConfig;
            m.promote({
                transition: p ? p.transition : void 0,
                preserveFollowOpacity: p && p.shouldPreserveFollowOpacity ? p.shouldPreserveFollowOpacity(m) : void 0
            })
        }
        isLead() {
            const f = this.getStack();
            return f ? f.lead === this : !0
        }
        getLead() {
            const {
                layoutId: f
            } = this.options;
            return f ? this.getStack() ? .lead || this : this
        }
        getPrevLead() {
            const {
                layoutId: f
            } = this.options;
            return f ? this.getStack() ? .prevLead : void 0
        }
        getStack() {
            const {
                layoutId: f
            } = this.options;
            if (f) return this.root.sharedNodes.get(f)
        }
        promote({
            needsReset: f,
            transition: m,
            preserveFollowOpacity: d
        } = {}) {
            const p = this.getStack();
            p && p.promote(this, d), f && (this.projectionDelta = void 0, this.needsReset = !0), m && this.setOptions({
                transition: m
            })
        }
        relegate() {
            const f = this.getStack();
            return f ? f.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: f
            } = this.options;
            if (!f) return;
            let m = !1;
            const {
                latestValues: d
            } = f;
            if ((d.z || d.rotate || d.rotateX || d.rotateY || d.rotateZ || d.skewX || d.skewY) && (m = !0), !m) return;
            const p = {};
            d.z && nf("z", f, p, this.animationValues);
            for (let y = 0; y < ef.length; y++) nf(`rotate${ef[y]}`, f, p, this.animationValues), nf(`skew${ef[y]}`, f, p, this.animationValues);
            f.render();
            for (const y in p) f.setStaticValue(y, p[y]), this.animationValues && (this.animationValues[y] = p[y]);
            f.scheduleRender()
        }
        applyProjectionStyles(f, m) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
                f.visibility = "hidden";
                return
            }
            const d = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1, f.visibility = "", f.opacity = "", f.pointerEvents = Kl(m ? .pointerEvents) || "", f.transform = d ? d(this.latestValues, "") : "none";
                return
            }
            const p = this.getLead();
            if (!this.projectionDelta || !this.layout || !p.target) {
                this.options.layoutId && (f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, f.pointerEvents = Kl(m ? .pointerEvents) || ""), this.hasProjected && !Ci(this.latestValues) && (f.transform = d ? d({}, "") : "none", this.hasProjected = !1);
                return
            }
            f.visibility = "";
            const y = p.animationValues || p.latestValues;
            this.applyTransformsToTarget();
            let v = BE(this.projectionDeltaWithTransform, this.treeScale, y);
            d && (v = d(y, v)), f.transform = v;
            const {
                x: S,
                y: R
            } = this.projectionDelta;
            f.transformOrigin = `${S.origin*100}% ${R.origin*100}% 0`, p.animationValues ? f.opacity = p === this ? y.opacity ? ? this.latestValues.opacity ? ? 1 : this.preserveOpacity ? this.latestValues.opacity : y.opacityExit : f.opacity = p === this ? y.opacity !== void 0 ? y.opacity : "" : y.opacityExit !== void 0 ? y.opacityExit : 0;
            for (const w in Bf) {
                if (y[w] === void 0) continue;
                const {
                    correct: C,
                    applyTo: D,
                    isCSSVariable: V
                } = Bf[w], K = v === "none" ? y[w] : C(y[w], p);
                if (D) {
                    const B = D.length;
                    for (let q = 0; q < B; q++) f[D[q]] = K
                } else V ? this.options.visualElement.renderState.vars[w] = K : f[w] = K
            }
            this.options.layoutId && (f.pointerEvents = p === this ? Kl(m ? .pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(f => f.currentAnimation ? .stop()), this.root.nodes.forEach(Fg), this.root.sharedNodes.clear()
        }
    }
}

function JE(e) {
    e.updateLayout()
}

function WE(e) {
    const i = e.resumeFrom ? .snapshot || e.snapshot;
    if (e.isLead() && e.layout && i && e.hasListeners("didUpdate")) {
        const {
            layoutBox: s,
            measuredBox: r
        } = e.layout, {
            animationType: u
        } = e.options, c = i.source !== e.layout.source;
        if (u === "size") nn(y => {
            const v = c ? i.measuredBox[y] : i.layoutBox[y],
                S = he(v);
            v.min = s[y].min, v.max = v.min + S
        });
        else if (u === "x" || u === "y") {
            const y = u === "x" ? "y" : "x";
            Hf(c ? i.measuredBox[y] : i.layoutBox[y], s[y])
        } else Mb(u, i.layoutBox, s) && nn(y => {
            const v = c ? i.measuredBox[y] : i.layoutBox[y],
                S = he(s[y]);
            v.max = v.min + S, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[y].max = e.relativeTarget[y].min + S)
        });
        const f = Ra();
        Xs(f, s, i.layoutBox);
        const m = Ra();
        c ? Xs(m, e.applyTransform(r, !0), i.measuredBox) : Xs(m, s, i.layoutBox);
        const d = !Eb(f);
        let p = !1;
        if (!e.resumeFrom) {
            const y = e.getClosestProjectingParent();
            if (y && !y.resumeFrom) {
                const {
                    snapshot: v,
                    layout: S
                } = y;
                if (v && S) {
                    const R = e.options.layoutAnchor || void 0,
                        w = Xt();
                    so(w, i.layoutBox, v.layoutBox, R);
                    const C = Xt();
                    so(C, s, S.layoutBox, R), Ab(w, C) || (p = !0), y.options.layoutRoot && (e.relativeTarget = C, e.relativeTargetOrigin = w, e.relativeParent = y)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: s,
            snapshot: i,
            delta: m,
            layoutDelta: f,
            hasLayoutChanged: d,
            hasRelativeLayoutChanged: p
        })
    } else if (e.isLead()) {
        const {
            onExitComplete: s
        } = e.options;
        s && s()
    }
    e.options.transition = void 0
}

function $E(e) {
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function tA(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function eA(e) {
    e.clearSnapshot()
}

function Fg(e) {
    e.clearMeasurements()
}

function nA(e) {
    e.isLayoutDirty = !0, e.updateLayout()
}

function Ig(e) {
    e.isLayoutDirty = !1
}

function iA(e) {
    e.isAnimationBlocked && e.layout && !e.isLayoutDirty && (e.snapshot = e.layout, e.isLayoutDirty = !0)
}

function aA(e) {
    const {
        visualElement: i
    } = e.options;
    i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function Jg(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function sA(e) {
    e.resolveTargetDelta()
}

function rA(e) {
    e.calcProjection()
}

function lA(e) {
    e.resetSkewAndRotation()
}

function oA(e) {
    e.removeLeadSnapshot()
}

function Wg(e, i, s) {
    e.translate = Dt(i.translate, 0, s), e.scale = Dt(i.scale, 1, s), e.origin = i.origin, e.originPoint = i.originPoint
}

function $g(e, i, s, r) {
    e.min = Dt(i.min, s.min, r), e.max = Dt(i.max, s.max, r)
}

function uA(e, i, s, r) {
    $g(e.x, i.x, s.x, r), $g(e.y, i.y, s.y, r)
}

function cA(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const fA = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    tv = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
    ev = tv("applewebkit/") && !tv("chrome/") ? Math.round : qe;

function nv(e) {
    e.min = ev(e.min), e.max = ev(e.max)
}

function hA(e) {
    nv(e.x), nv(e.y)
}

function Mb(e, i, s) {
    return e === "position" || e === "preserve-aspect" && !UE(Kg(i), Kg(s), .2)
}

function dA(e) {
    return e !== e.root && e.scroll ? .wasRoot
}
const mA = Cb({
        attachResizeListener: (e, i) => $s(e, "resize", i),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body ? .scrollLeft || 0,
            y: document.documentElement.scrollTop || document.body ? .scrollTop || 0
        }),
        checkIsScrollRoot: () => !0
    }),
    af = {
        current: void 0
    },
    Db = Cb({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!af.current) {
                const e = new mA({});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), af.current = e
            }
            return af.current
        },
        resetTransform: (e, i) => {
            e.style.transform = i !== void 0 ? i : "none"
        },
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    }),
    Mh = k.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    });

function iv(e, i) {
    if (typeof e == "function") return e(i);
    e != null && (e.current = i)
}

function pA(...e) {
    return i => {
        let s = !1;
        const r = e.map(u => {
            const c = iv(u, i);
            return !s && typeof c == "function" && (s = !0), c
        });
        if (s) return () => {
            for (let u = 0; u < r.length; u++) {
                const c = r[u];
                typeof c == "function" ? c() : iv(e[u], null)
            }
        }
    }
}

function yA(...e) {
    return k.useCallback(pA(...e), e)
}
class gA extends k.Component {
    getSnapshotBeforeUpdate(i) {
        const s = this.props.childRef.current;
        if (Ll(s) && i.isPresent && !this.props.isPresent && this.props.pop !== !1) {
            const r = s.offsetParent,
                u = Ll(r) && r.offsetWidth || 0,
                c = Ll(r) && r.offsetHeight || 0,
                f = getComputedStyle(s),
                m = this.props.sizeRef.current;
            m.height = parseFloat(f.height), m.width = parseFloat(f.width), m.top = s.offsetTop, m.left = s.offsetLeft, m.right = u - m.width - m.left, m.bottom = c - m.height - m.top, m.direction = f.direction
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function vA({
    children: e,
    isPresent: i,
    anchorX: s,
    anchorY: r,
    root: u,
    pop: c
}) {
    const f = k.useId(),
        m = k.useRef(null),
        d = k.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            direction: "ltr"
        }),
        {
            nonce: p
        } = k.useContext(Mh),
        y = c !== !1 ? e.props ? .ref ? ? e ? .ref : void 0,
        v = yA(m, y);
    return k.useInsertionEffect(() => {
        const {
            width: S,
            height: R,
            top: w,
            left: C,
            right: D,
            bottom: V,
            direction: K
        } = d.current;
        if (i || c === !1 || !m.current || !S || !R) return;
        const B = K === "rtl",
            q = s === "left" ? B ? `right: ${D}` : `left: ${C}` : B ? `left: ${C}` : `right: ${D}`,
            _ = r === "bottom" ? `bottom: ${V}` : `top: ${w}`;
        m.current.dataset.motionPopId = f;
        const Q = document.createElement("style");
        p && (Q.nonce = p);
        const tt = u ? ? document.head;
        return tt.appendChild(Q), Q.sheet && Q.sheet.insertRule(`
          [data-motion-pop-id="${f}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${R}px !important;
            ${q}px !important;
            ${_}px !important;
          }
        `), () => {
            m.current ? .removeAttribute("data-motion-pop-id"), tt.contains(Q) && tt.removeChild(Q)
        }
    }, [i]), x.jsx(gA, {
        isPresent: i,
        childRef: m,
        sizeRef: d,
        pop: c,
        children: c === !1 ? e : k.cloneElement(e, {
            ref: v
        })
    })
}
const bA = ({
    children: e,
    initial: i,
    isPresent: s,
    onExitComplete: r,
    custom: u,
    presenceAffectsLayout: c,
    mode: f,
    anchorX: m,
    anchorY: d,
    root: p
}) => {
    const y = sh(SA),
        v = k.useId(),
        S = k.useRef(s),
        R = k.useRef(r);
    Il(() => {
        S.current = s, R.current = r
    });
    let w = !0,
        C = k.useMemo(() => (w = !1, {
            id: v,
            initial: i,
            isPresent: s,
            custom: u,
            onExitComplete: D => {
                y.set(D, !0);
                for (const V of y.values())
                    if (!V) return;
                r && r()
            },
            register: D => (y.set(D, !1), () => {
                y.delete(D), !S.current && !y.size && R.current ? .()
            })
        }), [s, y, r]);
    return c && w && (C = { ...C
    }), k.useMemo(() => {
        y.forEach((D, V) => y.set(V, !1))
    }, [s]), k.useEffect(() => {
        !s && !y.size && r && r()
    }, [s]), e = x.jsx(vA, {
        pop: f === "popLayout",
        isPresent: s,
        anchorX: m,
        anchorY: d,
        root: p,
        children: e
    }), x.jsx(po.Provider, {
        value: C,
        children: e
    })
};

function SA() {
    return new Map
}

function Nb(e = !0) {
    const i = k.useContext(po);
    if (i === null) return [!0, null];
    const {
        isPresent: s,
        onExitComplete: r,
        register: u
    } = i, c = k.useId();
    k.useEffect(() => {
        if (e) return u(c)
    }, [e]);
    const f = k.useCallback(() => e && r && r(c), [c, r, e]);
    return !s && r ? [!1, f] : [!0]
}
const Cl = e => e.key || "";

function av(e) {
    const i = [];
    return k.Children.forEach(e, s => {
        k.isValidElement(s) && i.push(s)
    }), i
}
const xA = ({
        children: e,
        custom: i,
        initial: s = !0,
        onExitComplete: r,
        presenceAffectsLayout: u = !0,
        mode: c = "sync",
        propagate: f = !1,
        anchorX: m = "left",
        anchorY: d = "top",
        root: p
    }) => {
        const [y, v] = Nb(f), S = k.useMemo(() => av(e), [e]), R = f && !y ? [] : S.map(Cl), w = k.useRef(!0), C = k.useRef(S), D = sh(() => new Map), V = k.useRef(new Set), [K, B] = k.useState(S), [q, _] = k.useState(S);
        Il(() => {
            f && !y && !q.length && v ? .()
        }, [y, f, q.length, v]), Il(() => {
            w.current = !1, C.current = S;
            for (let Y = 0; Y < q.length; Y++) {
                const et = Cl(q[Y]);
                R.includes(et) ? (D.delete(et), V.current.delete(et)) : D.get(et) !== !0 && D.set(et, !1)
            }
        }, [q, R.length, R.join("-")]);
        const Q = [];
        if (S !== K) {
            let Y = [...S];
            for (let et = 0; et < q.length; et++) {
                const J = q[et],
                    ot = Cl(J);
                R.includes(ot) || (Y.splice(et, 0, J), Q.push(J))
            }
            return c === "wait" && Q.length && (Y = Q), _(av(Y)), B(S), null
        }
        const {
            forceRender: tt
        } = k.useContext(ah);
        return x.jsx(x.Fragment, {
            children: q.map(Y => {
                const et = Cl(Y),
                    J = f && !y ? !1 : S === q || R.includes(et),
                    ot = () => {
                        if (V.current.has(et)) return;
                        if (D.has(et)) V.current.add(et), D.set(et, !0);
                        else return;
                        let ut = !0;
                        D.forEach(bt => {
                            bt || (ut = !1)
                        }), ut && (tt ? .(), _(C.current), f && v ? .(), r && r())
                    };
                return x.jsx(bA, {
                    isPresent: J,
                    initial: !w.current || s ? void 0 : !1,
                    custom: i,
                    presenceAffectsLayout: u,
                    mode: c,
                    root: p,
                    onExitComplete: J ? void 0 : ot,
                    anchorX: m,
                    anchorY: d,
                    children: Y
                }, et)
            })
        })
    },
    jb = k.createContext({
        strict: !1
    }),
    sv = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    };
let rv = !1;

function TA() {
    if (rv) return;
    const e = {};
    for (const i in sv) e[i] = {
        isEnabled: s => sv[i].some(r => !!s[r])
    };
    lb(e), rv = !0
}

function Ub() {
    return TA(), rE()
}

function wA(e) {
    const i = Ub();
    for (const s in e) i[s] = { ...i[s],
        ...e[s]
    };
    lb(i)
}
const So = k.createContext({});

function EA(e, i) {
    if (bo(e)) {
        const {
            initial: s,
            animate: r
        } = e;
        return {
            initial: s === !1 || Ws(s) ? s : void 0,
            animate: Ws(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? i : {}
}

function AA(e) {
    const {
        initial: i,
        animate: s
    } = EA(e, k.useContext(So));
    return k.useMemo(() => ({
        initial: i,
        animate: s
    }), [lv(i), lv(s)])
}

function lv(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Dh = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function zb(e, i, s) {
    for (const r in i) !ie(i[r]) && !mb(r, s) && (e[r] = i[r])
}

function RA({
    transformTemplate: e
}, i) {
    return k.useMemo(() => {
        const s = Dh();
        return Oh(s, i, e), Object.assign({}, s.vars, s.style)
    }, [i])
}

function OA(e, i) {
    const s = e.style || {},
        r = {};
    return zb(r, s, e), Object.assign(r, RA(e, i)), r
}

function CA(e, i) {
    const s = {},
        r = OA(e, i);
    return e.drag && e.dragListener !== !1 && (s.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (s.tabIndex = 0), s.style = r, s
}
const kb = () => ({ ...Dh(),
    attrs: {}
});

function MA(e, i, s, r) {
    const u = k.useMemo(() => {
        const c = kb();
        return yb(c, i, vb(r), e.transformTemplate, e.style), { ...c.attrs,
            style: { ...c.style
            }
        }
    }, [i]);
    if (e.style) {
        const c = {};
        zb(c, e.style, e), u.style = { ...c,
            ...u.style
        }
    }
    return u
}
const DA = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);

function ro(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || DA.has(e)
}

function NA(e, i) {
    return e.startsWith("on") ? !ro(e) : i ? .(e) ? ? !ro(e)
}

function jA(e, i, s, r) {
    const u = {};
    for (const c in e) c === "values" && typeof e.values == "object" || ie(e[c]) || (NA(c, r) || s === !0 && ro(c) || !i && !ro(c) || e.draggable && c.startsWith("onDrag")) && (u[c] = e[c]);
    return u
}
const UA = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Nh(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(UA.indexOf(e) > -1 || /[A-Z]/u.test(e))
}

function zA(e, i, s, {
    latestValues: r
}, u, c = !1, f, m) {
    const p = (f ? ? Nh(e) ? MA : CA)(i, r, u, e),
        y = jA(i, typeof e == "string", c, m),
        v = e !== k.Fragment ? { ...y,
            ...p,
            ref: s
        } : {},
        {
            children: S
        } = i,
        R = k.useMemo(() => ie(S) ? S.get() : S, [S]);
    return k.createElement(e, { ...v,
        children: R
    })
}

function kA({
    scrapeMotionValuesFromProps: e,
    createRenderState: i
}, s, r, u) {
    return {
        latestValues: VA(s, r, u, e),
        renderState: i()
    }
}

function VA(e, i, s, r) {
    const u = {},
        c = r(e, {});
    for (const S in c) u[S] = Kl(c[S]);
    let {
        initial: f,
        animate: m
    } = e;
    const d = bo(e),
        p = sb(e);
    i && p && !d && e.inherit !== !1 && (f === void 0 && (f = i.initial), m === void 0 && (m = i.animate));
    let y = s ? s.initial === !1 : !1;
    y = y || f === !1;
    const v = y ? m : f;
    if (v && typeof v != "boolean" && !vo(v)) {
        const S = Array.isArray(v) ? v : [v];
        for (let R = 0; R < S.length; R++) {
            const w = bh(e, S[R]);
            if (w) {
                const {
                    transitionEnd: C,
                    transition: D,
                    ...V
                } = w;
                for (const K in V) {
                    let B = V[K];
                    if (Array.isArray(B)) {
                        const q = y ? B.length - 1 : 0;
                        B = B[q]
                    }
                    B !== null && (u[K] = B)
                }
                for (const K in C) u[K] = C[K]
            }
        }
    }
    return u
}
const Vb = e => (i, s) => {
        const r = k.useContext(So),
            u = k.useContext(po),
            c = () => kA(e, i, r, u);
        return s ? c() : sh(c)
    },
    _A = Vb({
        scrapeMotionValuesFromProps: Ch,
        createRenderState: Dh
    }),
    LA = Vb({
        scrapeMotionValuesFromProps: bb,
        createRenderState: kb
    }),
    BA = Symbol.for("motionComponentSymbol");

function HA(e, i, s) {
    const r = k.useRef(s);
    k.useInsertionEffect(() => {
        r.current = s
    });
    const u = k.useRef(null);
    return k.useCallback(c => {
        c && e.onMount ? .(c), i && (c ? i.mount(c) : i.unmount());
        const f = r.current;
        if (typeof f == "function")
            if (c) {
                const m = f(c);
                typeof m == "function" && (u.current = m)
            } else u.current ? (u.current(), u.current = null) : f(c);
        else f && (f.current = c)
    }, [i])
}
const _b = k.createContext({});

function Ta(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function qA(e, i, s, r, u, c) {
    const {
        visualElement: f
    } = k.useContext(So), m = k.useContext(jb), d = k.useContext(po), p = k.useContext(Mh), y = p.reducedMotion, v = p.skipAnimations, S = k.useRef(null), R = k.useRef(!1);
    r = r || m.renderer, !S.current && r && (S.current = r(e, {
        visualState: i,
        parent: f,
        props: s,
        presenceContext: d,
        blockInitialAnimation: d ? d.initial === !1 : !1,
        reducedMotionConfig: y,
        skipAnimations: v,
        isSVG: c
    }), R.current && S.current && (S.current.manuallyAnimateOnMount = !0));
    const w = S.current,
        C = k.useContext(_b);
    w && !w.projection && u && (w.type === "html" || w.type === "svg") && PA(S.current, s, u, C);
    const D = k.useRef(!1);
    k.useInsertionEffect(() => {
        w && D.current && w.update(s, d)
    });
    const V = s[X0],
        K = k.useRef(!!V && typeof window < "u" && !window.MotionHandoffIsComplete ? .(V) && window.MotionHasOptimisedAnimation ? .(V));
    return Il(() => {
        R.current = !0, w && (D.current = !0, window.MotionIsMounted = !0, w.updateFeatures(), w.scheduleRenderMicrotask(), K.current && w.animationState && w.animationState.animateChanges())
    }), k.useEffect(() => {
        w && (!K.current && w.animationState && w.animationState.animateChanges(), K.current && (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete ? .(V)
        }), K.current = !1), w.enteringChildren = void 0)
    }), w
}

function PA(e, i, s, r) {
    const {
        layoutId: u,
        layout: c,
        drag: f,
        dragConstraints: m,
        layoutScroll: d,
        layoutRoot: p,
        layoutAnchor: y,
        layoutCrossfade: v
    } = i;
    e.projection = new s(e.latestValues, i["data-framer-portal-id"] ? void 0 : Lb(e.parent)), e.projection.setOptions({
        layoutId: u,
        layout: c,
        alwaysMeasureLayout: !!f || m && Ta(m),
        visualElement: e,
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: r,
        crossfade: v,
        layoutScroll: d,
        layoutRoot: p,
        layoutAnchor: y
    })
}

function Lb(e) {
    if (e) return e.options.allowProjection !== !1 ? e.projection : Lb(e.parent)
}

function sf(e, {
    forwardMotionProps: i = !1,
    type: s
} = {}, r, u) {
    r && wA(r);
    const c = s ? s === "svg" : Nh(e),
        f = c ? LA : _A;

    function m(p, y) {
        let v;
        const S = { ...k.useContext(Mh),
                ...p,
                layoutId: GA(p)
            },
            {
                isStatic: R,
                isValidProp: w
            } = S,
            C = AA(p),
            D = f(p, R);
        if (!R && typeof window < "u") {
            KA();
            const V = QA(S);
            v = V.MeasureLayout, C.visualElement = qA(e, D, S, u, V.ProjectionNode, c)
        }
        return x.jsxs(So.Provider, {
            value: C,
            children: [v && C.visualElement ? x.jsx(v, {
                visualElement: C.visualElement,
                ...S
            }) : null, zA(e, p, HA(D, C.visualElement, y), D, R, i, c, w)]
        })
    }
    m.displayName = `motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;
    const d = k.forwardRef(m);
    return d[BA] = e, d
}

function GA({
    layoutId: e
}) {
    const i = k.useContext(ah).id;
    return i && e !== void 0 ? i + "-" + e : e
}

function KA(e, i) {
    k.useContext(jb).strict
}

function QA(e) {
    const i = Ub(),
        {
            drag: s,
            layout: r
        } = i;
    if (!s && !r) return {};
    const u = { ...s,
        ...r
    };
    return {
        MeasureLayout: s ? .isEnabled(e) || r ? .isEnabled(e) ? u.MeasureLayout : void 0,
        ProjectionNode: u.ProjectionNode
    }
}

function YA(e, i) {
    if (typeof Proxy > "u") return sf;
    const s = new Map,
        r = (c, f) => sf(c, f, e, i),
        u = (c, f) => r(c, f);
    return new Proxy(u, {
        get: (c, f) => f === "create" ? r : (s.has(f) || s.set(f, sf(f, void 0, e, i)), s.get(f))
    })
}
const XA = (e, i) => i.isSVG ? ? Nh(e) ? new TE(i) : new gE(i, {
    allowProjection: e !== k.Fragment
});
class ZA extends ri {
    constructor(i) {
        super(i), i.animationState || (i.animationState = OE(i))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: i
        } = this.node.getProps();
        vo(i) && (this.unmountControls = i.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: i
        } = this.node.getProps(), {
            animate: s
        } = this.node.prevProps || {};
        i !== s && this.updateAnimationControlsSubscription()
    }
    unmount() {
        this.node.animationState.reset(), this.unmountControls ? .()
    }
}
let FA = 0;
class IA extends ri {
    constructor() {
        super(...arguments), this.id = FA++, this.isExitComplete = !1
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: i,
            onExitComplete: s
        } = this.node.presenceContext, {
            isPresent: r
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || i === r) return;
        if (i && r === !1) {
            if (this.isExitComplete) {
                const {
                    initial: c,
                    custom: f
                } = this.node.getProps();
                if (typeof c == "string" || typeof c == "object" && c !== null && !Array.isArray(c)) {
                    const m = Ui(this.node, c, f);
                    if (m) {
                        const {
                            transition: d,
                            transitionEnd: p,
                            ...y
                        } = m;
                        for (const v in y) this.node.getValue(v) ? .jump(y[v])
                    }
                }
                this.node.animationState.reset(), this.node.animationState.animateChanges()
            } else this.node.animationState.setActive("exit", !1);
            this.isExitComplete = !1;
            return
        }
        const u = this.node.animationState.setActive("exit", !i);
        s && !i && u.then(() => {
            this.isExitComplete = !0, s(this.id)
        })
    }
    mount() {
        const {
            register: i,
            onExitComplete: s
        } = this.node.presenceContext || {};
        s && s(this.id), i && (this.unmount = i(this.id))
    }
    unmount() {}
}
const JA = {
    animation: {
        Feature: ZA
    },
    exit: {
        Feature: IA
    }
};

function or(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const WA = e => i => wh(i) && e(i, or(i));

function Zs(e, i, s, r) {
    return $s(e, i, WA(s), r)
}
const Bb = ({
        current: e
    }) => e ? e.ownerDocument.defaultView : null,
    ov = (e, i) => Math.abs(e - i);

function $A(e, i) {
    const s = ov(e.x, i.x),
        r = ov(e.y, i.y);
    return Math.sqrt(s ** 2 + r ** 2)
}
const uv = new Set(["auto", "scroll"]);
class Hb {
    constructor(i, s, {
        transformPagePoint: r,
        contextWindow: u = window,
        dragSnapToOrigin: c = !1,
        distanceThreshold: f = 3,
        element: m
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map, this.removeScrollListeners = null, this.onElementScroll = w => {
                this.handleScroll(w.target)
            }, this.onWindowScroll = () => {
                this.handleScroll(window)
            }, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Ml(this.lastRawMoveEventInfo, this.transformPagePoint));
                const w = rf(this.lastMoveEventInfo, this.history),
                    C = this.startEvent !== null,
                    D = $A(w.offset, {
                        x: 0,
                        y: 0
                    }) >= this.distanceThreshold;
                if (!C && !D) return;
                const {
                    point: V
                } = w, {
                    timestamp: K
                } = ne;
                this.history.push({ ...V,
                    timestamp: K
                });
                const {
                    onStart: B,
                    onMove: q
                } = this.handlers;
                C || (B && B(this.lastMoveEvent, w), this.startEvent = this.lastMoveEvent), q && q(this.lastMoveEvent, w)
            }, this.handlePointerMove = (w, C) => {
                this.lastMoveEvent = w, this.lastRawMoveEventInfo = C, this.lastMoveEventInfo = Ml(C, this.transformPagePoint), Nt.update(this.updatePoint, !0)
            }, this.handlePointerUp = (w, C) => {
                this.end();
                const {
                    onEnd: D,
                    onSessionEnd: V,
                    resumeAnimation: K
                } = this.handlers;
                if ((this.dragSnapToOrigin || !this.startEvent) && K && K(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const B = rf(w.type === "pointercancel" ? this.lastMoveEventInfo : Ml(C, this.transformPagePoint), this.history);
                this.startEvent && D && D(w, B), V && V(w, B)
            }, !wh(i)) return;
        this.dragSnapToOrigin = c, this.handlers = s, this.transformPagePoint = r, this.distanceThreshold = f, this.contextWindow = u || window;
        const d = or(i),
            p = Ml(d, this.transformPagePoint),
            {
                point: y
            } = p,
            {
                timestamp: v
            } = ne;
        this.history = [{ ...y,
            timestamp: v
        }];
        const {
            onSessionStart: S
        } = s;
        S && S(i, rf(p, this.history));
        const R = {
            passive: !0,
            capture: !0
        };
        this.removeListeners = sr(Zs(this.contextWindow, "pointermove", this.handlePointerMove, R), Zs(this.contextWindow, "pointerup", this.handlePointerUp, R), Zs(this.contextWindow, "pointercancel", this.handlePointerUp, R)), m && this.startScrollTracking(m)
    }
    startScrollTracking(i) {
        let s = i.parentElement;
        for (; s;) {
            const r = getComputedStyle(s);
            (uv.has(r.overflowX) || uv.has(r.overflowY)) && this.scrollPositions.set(s, {
                x: s.scrollLeft,
                y: s.scrollTop
            }), s = s.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }), window.addEventListener("scroll", this.onElementScroll, {
            capture: !0
        }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0
            }), window.removeEventListener("scroll", this.onWindowScroll)
        }
    }
    handleScroll(i) {
        const s = this.scrollPositions.get(i);
        if (!s) return;
        const r = i === window,
            u = r ? {
                x: window.scrollX,
                y: window.scrollY
            } : {
                x: i.scrollLeft,
                y: i.scrollTop
            },
            c = {
                x: u.x - s.x,
                y: u.y - s.y
            };
        c.x === 0 && c.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += c.x, this.lastMoveEventInfo.point.y += c.y) : this.history.length > 0 && (this.history[0].x -= c.x, this.history[0].y -= c.y), this.scrollPositions.set(i, u), Nt.update(this.updatePoint, !0))
    }
    updateHandlers(i) {
        this.handlers = i
    }
    end() {
        this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), ai(this.updatePoint)
    }
}

function Ml(e, i) {
    return i ? {
        point: i(e.point)
    } : e
}

function cv(e, i) {
    return {
        x: e.x - i.x,
        y: e.y - i.y
    }
}

function rf({
    point: e
}, i) {
    return {
        point: e,
        delta: cv(e, qb(i)),
        offset: cv(e, tR(i)),
        velocity: eR(i, .1)
    }
}

function tR(e) {
    return e[0]
}

function qb(e) {
    return e[e.length - 1]
}

function eR(e, i) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    let s = e.length - 1,
        r = null;
    const u = qb(e);
    for (; s >= 0 && (r = e[s], !(u.timestamp - r.timestamp > De(i)));) s--;
    if (!r) return {
        x: 0,
        y: 0
    };
    r === e[0] && e.length > 2 && u.timestamp - r.timestamp > De(i) * 2 && (r = e[1]);
    const c = He(u.timestamp - r.timestamp);
    if (c === 0) return {
        x: 0,
        y: 0
    };
    const f = {
        x: (u.x - r.x) / c,
        y: (u.y - r.y) / c
    };
    return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f
}

function nR(e, {
    min: i,
    max: s
}, r) {
    return i !== void 0 && e < i ? e = r ? Dt(i, e, r.min) : Math.max(e, i) : s !== void 0 && e > s && (e = r ? Dt(s, e, r.max) : Math.min(e, s)), e
}

function fv(e, i, s) {
    return {
        min: i !== void 0 ? e.min + i : void 0,
        max: s !== void 0 ? e.max + s - (e.max - e.min) : void 0
    }
}

function iR(e, {
    top: i,
    left: s,
    bottom: r,
    right: u
}) {
    return {
        x: fv(e.x, s, u),
        y: fv(e.y, i, r)
    }
}

function hv(e, i) {
    let s = i.min - e.min,
        r = i.max - e.max;
    return i.max - i.min < e.max - e.min && ([s, r] = [r, s]), {
        min: s,
        max: r
    }
}

function aR(e, i) {
    return {
        x: hv(e.x, i.x),
        y: hv(e.y, i.y)
    }
}

function sR(e, i) {
    let s = .5;
    const r = he(e),
        u = he(i);
    return u > r ? s = Is(i.min, i.max - r, e.min) : r > u && (s = Is(e.min, e.max - u, i.min)), ln(0, 1, s)
}

function rR(e, i) {
    const s = {};
    return i.min !== void 0 && (s.min = i.min - e.min), i.max !== void 0 && (s.max = i.max - e.min), s
}
const qf = .35;

function lR(e = qf) {
    return e === !1 ? e = 0 : e === !0 && (e = qf), {
        x: dv(e, "left", "right"),
        y: dv(e, "top", "bottom")
    }
}

function dv(e, i, s) {
    return {
        min: mv(e, i),
        max: mv(e, s)
    }
}

function mv(e, i) {
    return typeof e == "number" ? e : e[i] || 0
}
const oR = new WeakMap;
class uR {
    constructor(i) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Xt(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = i
    }
    start(i, {
        snapToCursor: s = !1,
        distanceThreshold: r
    } = {}) {
        const {
            presenceContext: u
        } = this.visualElement;
        if (u && u.isPresent === !1) return;
        const c = v => {
                s && this.snapToCursor(or(v).point), this.stopAnimation()
            },
            f = (v, S) => {
                const {
                    drag: R,
                    dragPropagation: w,
                    onDragStart: C
                } = this.getProps();
                if (R && !w && (this.openDragLock && this.openDragLock(), this.openDragLock = Vw(R), !this.openDragLock)) return;
                this.latestPointerEvent = v, this.latestPanInfo = S, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), nn(V => {
                    let K = this.getAxisMotionValue(V).get() || 0;
                    if (rn.test(K)) {
                        const {
                            projection: B
                        } = this.visualElement;
                        if (B && B.layout) {
                            const q = B.layout.layoutBox[V];
                            q && (K = he(q) * (parseFloat(K) / 100))
                        }
                    }
                    this.originPoint[V] = K
                }), C && Nt.update(() => C(v, S), !1, !0), Nf(this.visualElement, "transform");
                const {
                    animationState: D
                } = this.visualElement;
                D && D.setActive("whileDrag", !0)
            },
            m = (v, S) => {
                this.latestPointerEvent = v, this.latestPanInfo = S;
                const {
                    dragPropagation: R,
                    dragDirectionLock: w,
                    onDirectionLock: C,
                    onDrag: D
                } = this.getProps();
                if (!R && !this.openDragLock) return;
                const {
                    offset: V
                } = S;
                if (w && this.currentDirection === null) {
                    this.currentDirection = fR(V), this.currentDirection !== null && C && C(this.currentDirection);
                    return
                }
                this.updateAxis("x", S.point, V), this.updateAxis("y", S.point, V), this.visualElement.render(), D && Nt.update(() => D(v, S), !1, !0)
            },
            d = (v, S) => {
                this.latestPointerEvent = v, this.latestPanInfo = S, this.stop(v, S), this.latestPointerEvent = null, this.latestPanInfo = null
            },
            p = () => {
                const {
                    dragSnapToOrigin: v
                } = this.getProps();
                (v || this.constraints) && this.startAnimation({
                    x: 0,
                    y: 0
                })
            },
            {
                dragSnapToOrigin: y
            } = this.getProps();
        this.panSession = new Hb(i, {
            onSessionStart: c,
            onStart: f,
            onMove: m,
            onSessionEnd: d,
            resumeAnimation: p
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: y,
            distanceThreshold: r,
            contextWindow: Bb(this.visualElement),
            element: this.visualElement.current
        })
    }
    stop(i, s) {
        const r = i || this.latestPointerEvent,
            u = s || this.latestPanInfo,
            c = this.isDragging;
        if (this.cancel(), !c || !u || !r) return;
        const {
            velocity: f
        } = u;
        this.startAnimation(f);
        const {
            onDragEnd: m
        } = this.getProps();
        m && Nt.postRender(() => m(r, u))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: i,
            animationState: s
        } = this.visualElement;
        i && (i.isAnimationBlocked = !1), this.endPanSession();
        const {
            dragPropagation: r
        } = this.getProps();
        !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), s && s.setActive("whileDrag", !1)
    }
    endPanSession() {
        this.panSession && this.panSession.end(), this.panSession = void 0
    }
    updateAxis(i, s, r) {
        const {
            drag: u
        } = this.getProps();
        if (!r || !Dl(i, u, this.currentDirection)) return;
        const c = this.getAxisMotionValue(i);
        let f = this.originPoint[i] + r[i];
        this.constraints && this.constraints[i] && (f = nR(f, this.constraints[i], this.elastic[i])), c.set(f)
    }
    resolveConstraints() {
        const {
            dragConstraints: i,
            dragElastic: s
        } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection ? .layout, u = this.constraints;
        i && Ta(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && r ? this.constraints = iR(r.layoutBox, i) : this.constraints = !1, this.elastic = lR(s), u !== this.constraints && !Ta(i) && r && this.constraints && !this.hasMutatedConstraints && nn(c => {
            this.constraints !== !1 && this.getAxisMotionValue(c) && (this.constraints[c] = rR(r.layoutBox[c], this.constraints[c]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: i,
            onMeasureDragConstraints: s
        } = this.getProps();
        if (!i || !Ta(i)) return !1;
        const r = i.current,
            {
                projection: u
            } = this.visualElement;
        if (!u || !u.layout) return !1;
        u.root && (u.root.scroll = void 0, u.root.updateScroll());
        const c = fE(r, u.root, this.visualElement.getTransformPagePoint());
        let f = aR(u.layout.layoutBox, c);
        if (s) {
            const m = s(oE(f));
            this.hasMutatedConstraints = !!m, m && (f = ub(m))
        }
        return f
    }
    startAnimation(i) {
        const {
            drag: s,
            dragMomentum: r,
            dragElastic: u,
            dragTransition: c,
            dragSnapToOrigin: f,
            onDragTransitionEnd: m
        } = this.getProps(), d = this.constraints || {}, p = nn(y => {
            if (!Dl(y, s, this.currentDirection)) return;
            let v = d && d[y] || {};
            (f === !0 || f === y) && (v = {
                min: 0,
                max: 0
            });
            const S = u ? 200 : 1e6,
                R = u ? 40 : 1e7,
                w = {
                    type: "inertia",
                    velocity: r ? i[y] : 0,
                    bounceStiffness: S,
                    bounceDamping: R,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...c,
                    ...v
                };
            return this.startAxisValueAnimation(y, w)
        });
        return Promise.all(p).then(m)
    }
    startAxisValueAnimation(i, s) {
        const r = this.getAxisMotionValue(i);
        return Nf(this.visualElement, i), r.start(vh(i, r, 0, s, this.visualElement, !1))
    }
    stopAnimation() {
        nn(i => this.getAxisMotionValue(i).stop())
    }
    getAxisMotionValue(i) {
        const s = `_drag${i.toUpperCase()}`,
            u = this.visualElement.getProps()[s];
        return u || this.visualElement.getValue(i, this.visualElement.latestValues[i] ? ? 0)
    }
    snapToCursor(i) {
        nn(s => {
            const {
                drag: r
            } = this.getProps();
            if (!Dl(s, r, this.currentDirection)) return;
            const {
                projection: u
            } = this.visualElement, c = this.getAxisMotionValue(s);
            if (u && u.layout) {
                const {
                    min: f,
                    max: m
                } = u.layout.layoutBox[s], d = c.get() || 0;
                c.set(i[s] - Dt(f, m, .5) + d)
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: i,
            dragConstraints: s
        } = this.getProps(), {
            projection: r
        } = this.visualElement;
        if (!Ta(s) || !r || !this.constraints) return;
        this.stopAnimation();
        const u = {
            x: 0,
            y: 0
        };
        nn(f => {
            const m = this.getAxisMotionValue(f);
            if (m && this.constraints !== !1) {
                const d = m.get();
                u[f] = sR({
                    min: d,
                    max: d
                }, this.constraints[f])
            }
        });
        const {
            transformTemplate: c
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = c ? c({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.constraints = !1, this.resolveConstraints(), nn(f => {
            if (!Dl(f, i, null)) return;
            const m = this.getAxisMotionValue(f),
                {
                    min: d,
                    max: p
                } = this.constraints[f];
            m.set(Dt(d, p, u[f]))
        }), this.visualElement.render()
    }
    addListeners() {
        if (!this.visualElement.current) return;
        oR.set(this.visualElement, this);
        const i = this.visualElement.current,
            s = Zs(i, "pointerdown", p => {
                const {
                    drag: y,
                    dragListener: v = !0
                } = this.getProps(), S = p.target, R = S !== i && Pw(S);
                y && v && !R && this.start(p)
            });
        let r;
        const u = () => {
                const {
                    dragConstraints: p
                } = this.getProps();
                Ta(p) && p.current && (this.constraints = this.resolveRefConstraints(), r || (r = cR(i, p.current, () => this.scalePositionWithinConstraints())))
            },
            {
                projection: c
            } = this.visualElement,
            f = c.addEventListener("measure", u);
        c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()), Nt.read(u);
        const m = $s(window, "resize", () => this.scalePositionWithinConstraints()),
            d = c.addEventListener("didUpdate", (({
                delta: p,
                hasLayoutChanged: y
            }) => {
                this.isDragging && y && (nn(v => {
                    const S = this.getAxisMotionValue(v);
                    S && (this.originPoint[v] += p[v].translate, S.set(S.get() + p[v].translate))
                }), this.visualElement.render())
            }));
        return () => {
            m(), s(), f(), d && d(), r && r()
        }
    }
    getProps() {
        const i = this.visualElement.getProps(),
            {
                drag: s = !1,
                dragDirectionLock: r = !1,
                dragPropagation: u = !1,
                dragConstraints: c = !1,
                dragElastic: f = qf,
                dragMomentum: m = !0
            } = i;
        return { ...i,
            drag: s,
            dragDirectionLock: r,
            dragPropagation: u,
            dragConstraints: c,
            dragElastic: f,
            dragMomentum: m
        }
    }
}

function pv(e) {
    let i = !0;
    return () => {
        if (i) {
            i = !1;
            return
        }
        e()
    }
}

function cR(e, i, s) {
    const r = Tg(e, pv(s)),
        u = Tg(i, pv(s));
    return () => {
        r(), u()
    }
}

function Dl(e, i, s) {
    return (i === !0 || i === e) && (s === null || s === e)
}

function fR(e, i = 10) {
    let s = null;
    return Math.abs(e.y) > i ? s = "y" : Math.abs(e.x) > i && (s = "x"), s
}
class hR extends ri {
    constructor(i) {
        super(i), this.removeGroupControls = qe, this.removeListeners = qe, this.controls = new uR(i)
    }
    mount() {
        const {
            dragControls: i
        } = this.node.getProps();
        i && (this.removeGroupControls = i.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || qe
    }
    update() {
        const {
            dragControls: i
        } = this.node.getProps(), {
            dragControls: s
        } = this.node.prevProps || {};
        i !== s && (this.removeGroupControls(), i && (this.removeGroupControls = i.subscribe(this.controls)))
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession()
    }
}
const lf = e => (i, s) => {
    e && Nt.update(() => e(i, s), !1, !0)
};
class dR extends ri {
    constructor() {
        super(...arguments), this.removePointerDownListener = qe
    }
    onPointerDown(i) {
        this.session = new Hb(i, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Bb(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: i,
            onPanStart: s,
            onPan: r,
            onPanEnd: u
        } = this.node.getProps();
        return {
            onSessionStart: lf(i),
            onStart: lf(s),
            onMove: lf(r),
            onEnd: (c, f) => {
                delete this.session, u && Nt.postRender(() => u(c, f))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Zs(this.node.current, "pointerdown", i => this.onPointerDown(i))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
let of = !1;
class mR extends k.Component {
    componentDidMount() {
        const {
            visualElement: i,
            layoutGroup: s,
            switchLayoutGroup: r,
            layoutId: u
        } = this.props, {
            projection: c
        } = i;
        c && (s.group && s.group.add(c), r && r.register && u && r.register(c), of && c.root.didUpdate(), c.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), c.setOptions({ ...c.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
        })), Ql.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(i) {
        const {
            layoutDependency: s,
            visualElement: r,
            drag: u,
            isPresent: c
        } = this.props, {
            projection: f
        } = r;
        return f && (f.isPresent = c, i.layoutDependency !== s && f.setOptions({ ...f.options,
            layoutDependency: s
        }), of = !0, u || i.layoutDependency !== s || s === void 0 || i.isPresent !== c ? f.willUpdate() : this.safeToRemove(), i.isPresent !== c && (c ? f.promote() : f.relegate() || Nt.postRender(() => {
            const m = f.getStack();
            (!m || !m.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            visualElement: i,
            layoutAnchor: s
        } = this.props, {
            projection: r
        } = i;
        r && (r.options.layoutAnchor = s, r.root.didUpdate(), Th.postRender(() => {
            !r.currentAnimation && r.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: i,
            layoutGroup: s,
            switchLayoutGroup: r
        } = this.props, {
            projection: u
        } = i; of = !0, u && (u.scheduleCheckAfterUnmount(), s && s.group && s.group.remove(u), r && r.deregister && r.deregister(u))
    }
    safeToRemove() {
        const {
            safeToRemove: i
        } = this.props;
        i && i()
    }
    render() {
        return null
    }
}

function Pb(e) {
    const [i, s] = Nb(), r = k.useContext(ah);
    return x.jsx(mR, { ...e,
        layoutGroup: r,
        switchLayoutGroup: k.useContext(_b),
        isPresent: i,
        safeToRemove: s
    })
}
const pR = {
    pan: {
        Feature: dR
    },
    drag: {
        Feature: hR,
        ProjectionNode: Db,
        MeasureLayout: Pb
    }
};

function yv(e, i, s) {
    const {
        props: r
    } = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", s === "Start");
    const u = "onHover" + s,
        c = r[u];
    c && Nt.postRender(() => c(i, or(i)))
}
class yR extends ri {
    mount() {
        const {
            current: i
        } = this.node;
        i && (this.unmount = Lw(i, (s, r) => (yv(this.node, r, "Start"), u => yv(this.node, u, "End"))))
    }
    unmount() {}
}
class gR extends ri {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let i = !1;
        try {
            i = this.node.current.matches(":focus-visible")
        } catch {
            i = !0
        }!i || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = sr($s(this.node.current, "focus", () => this.onFocus()), $s(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}

function gv(e, i, s) {
    const {
        props: r
    } = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", s === "Start");
    const u = "onTap" + (s === "End" ? "" : s),
        c = r[u];
    c && Nt.postRender(() => c(i, or(i)))
}
class vR extends ri {
    mount() {
        const {
            current: i
        } = this.node;
        if (!i) return;
        const {
            globalTapTarget: s,
            propagate: r
        } = this.node.props;
        this.unmount = Kw(i, (u, c) => (gv(this.node, c, "Start"), (f, {
            success: m
        }) => gv(this.node, f, m ? "End" : "Cancel")), {
            useGlobalTarget: s,
            stopPropagation: r ? .tap === !1
        })
    }
    unmount() {}
}
const Pf = new WeakMap,
    uf = new WeakMap,
    bR = e => {
        const i = Pf.get(e.target);
        i && i(e)
    },
    SR = e => {
        e.forEach(bR)
    };

function xR({
    root: e,
    ...i
}) {
    const s = e || document;
    uf.has(s) || uf.set(s, {});
    const r = uf.get(s),
        u = JSON.stringify(i);
    return r[u] || (r[u] = new IntersectionObserver(SR, {
        root: e,
        ...i
    })), r[u]
}

function TR(e, i, s) {
    const r = xR(i);
    return Pf.set(e, s), r.observe(e), () => {
        Pf.delete(e), r.unobserve(e)
    }
}
const wR = {
    some: 0,
    all: 1
};
class ER extends ri {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.stopObserver ? .();
        const {
            viewport: i = {}
        } = this.node.getProps(), {
            root: s,
            margin: r,
            amount: u = "some",
            once: c
        } = i, f = {
            root: s ? s.current : void 0,
            rootMargin: r,
            threshold: typeof u == "number" ? u : wR[u]
        }, m = d => {
            const {
                isIntersecting: p
            } = d;
            if (this.isInView === p || (this.isInView = p, c && !p && this.hasEnteredView)) return;
            p && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", p);
            const {
                onViewportEnter: y,
                onViewportLeave: v
            } = this.node.getProps(), S = p ? y : v;
            S && S(d)
        };
        this.stopObserver = TR(this.node.current, f, m)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: i,
            prevProps: s
        } = this.node;
        ["amount", "margin", "root"].some(AR(i, s)) && this.startObserver()
    }
    unmount() {
        this.stopObserver ? .(), this.hasEnteredView = !1, this.isInView = !1
    }
}

function AR({
    viewport: e = {}
}, {
    viewport: i = {}
} = {}) {
    return s => e[s] !== i[s]
}
const RR = {
        inView: {
            Feature: ER
        },
        tap: {
            Feature: vR
        },
        focus: {
            Feature: gR
        },
        hover: {
            Feature: yR
        }
    },
    OR = {
        layout: {
            ProjectionNode: Db,
            MeasureLayout: Pb
        }
    },
    CR = { ...JA,
        ...RR,
        ...pR,
        ...OR
    },
    MR = YA(CR, XA),
    tr = MR;
const Gb = (...e) => e.filter((i, s, r) => !!i && i.trim() !== "" && r.indexOf(i) === s).join(" ").trim();
const DR = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const NR = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, s, r) => r ? r.toUpperCase() : s.toLowerCase());
const vv = e => {
    const i = NR(e);
    return i.charAt(0).toUpperCase() + i.slice(1)
};
var jR = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const UR = e => {
    for (const i in e)
        if (i.startsWith("aria-") || i === "role" || i === "title") return !0;
    return !1
};
const zR = k.forwardRef(({
    color: e = "currentColor",
    size: i = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: r,
    className: u = "",
    children: c,
    iconNode: f,
    ...m
}, d) => k.createElement("svg", {
    ref: d,
    ...jR,
    width: i,
    height: i,
    stroke: e,
    strokeWidth: r ? Number(s) * 24 / Number(i) : s,
    className: Gb("lucide", u),
    ...!c && !UR(m) && {
        "aria-hidden": "true"
    },
    ...m
}, [...f.map(([p, y]) => k.createElement(p, y)), ...Array.isArray(c) ? c : [c]]));
const ae = (e, i) => {
    const s = k.forwardRef(({
        className: r,
        ...u
    }, c) => k.createElement(zR, {
        ref: c,
        iconNode: i,
        className: Gb(`lucide-${DR(vv(e))}`, `lucide-${e}`, r),
        ...u
    }));
    return s.displayName = vv(e), s
};
const kR = [
        ["path", {
            d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
            key: "169zse"
        }]
    ],
    VR = ae("activity", kR);
const _R = [
        ["path", {
            d: "M3 3v16a2 2 0 0 0 2 2h16",
            key: "c24i48"
        }],
        ["path", {
            d: "M18 17V9",
            key: "2bz60n"
        }],
        ["path", {
            d: "M13 17V5",
            key: "1frdt8"
        }],
        ["path", {
            d: "M8 17v-3",
            key: "17ska0"
        }]
    ],
    Kb = ae("chart-column", _R);
const LR = [
        ["path", {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }]
    ],
    Gf = ae("check", LR);
const BR = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }]
    ],
    HR = ae("circle-check", BR);
const qR = [
        ["path", {
            d: "M15 3h6v6",
            key: "1q9fwt"
        }],
        ["path", {
            d: "M10 14 21 3",
            key: "gplh6r"
        }],
        ["path", {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp"
        }]
    ],
    Qb = ae("external-link", qR);
const PR = [
        ["polyline", {
            points: "22 12 16 12 14 15 10 15 8 12 2 12",
            key: "o97t9d"
        }],
        ["path", {
            d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
            key: "oot6mr"
        }]
    ],
    GR = ae("inbox", PR);
const KR = [
        ["path", {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }]
    ],
    Yb = ae("loader-circle", KR);
const QR = [
        ["rect", {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2",
            key: "1w4ew1"
        }],
        ["path", {
            d: "M7 11V7a5 5 0 0 1 10 0v4",
            key: "fwvmzm"
        }]
    ],
    YR = ae("lock", QR);
const XR = [
        ["path", {
            d: "m16 17 5-5-5-5",
            key: "1bji2h"
        }],
        ["path", {
            d: "M21 12H9",
            key: "dn1m92"
        }],
        ["path", {
            d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
            key: "1uf3rs"
        }]
    ],
    ZR = ae("log-out", XR);
const FR = [
        ["path", {
            d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",
            key: "10dyio"
        }],
        ["path", {
            d: "M10 19v-3.96 3.15",
            key: "1irgej"
        }],
        ["path", {
            d: "M7 19h5",
            key: "qswx4l"
        }],
        ["rect", {
            width: "6",
            height: "10",
            x: "16",
            y: "12",
            rx: "2",
            key: "1egngj"
        }]
    ],
    IR = ae("monitor-smartphone", FR);
const JR = [
        ["path", {
            d: "M14 4.1 12 6",
            key: "ita8i4"
        }],
        ["path", {
            d: "m5.1 8-2.9-.8",
            key: "1go3kf"
        }],
        ["path", {
            d: "m6 12-1.9 2",
            key: "mnht97"
        }],
        ["path", {
            d: "M7.2 2.2 8 5.1",
            key: "1cfko1"
        }],
        ["path", {
            d: "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",
            key: "s0h3yz"
        }]
    ],
    WR = ae("mouse-pointer-click", JR);
const $R = [
        ["path", {
            d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
            key: "1a8usu"
        }],
        ["path", {
            d: "m15 5 4 4",
            key: "1mk7zo"
        }]
    ],
    tO = ae("pencil", $R);
const eO = [
        ["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }],
        ["path", {
            d: "M12 5v14",
            key: "s699le"
        }]
    ],
    nO = ae("plus", eO);
const iO = [
        ["path", {
            d: "M16.247 7.761a6 6 0 0 1 0 8.478",
            key: "1fwjs5"
        }],
        ["path", {
            d: "M19.075 4.933a10 10 0 0 1 0 14.134",
            key: "ehdyv1"
        }],
        ["path", {
            d: "M4.925 19.067a10 10 0 0 1 0-14.134",
            key: "1q22gi"
        }],
        ["path", {
            d: "M7.753 16.239a6 6 0 0 1 0-8.478",
            key: "r2q7qm"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "2",
            key: "1c9p78"
        }]
    ],
    aO = ae("radio", iO);
const sO = [
        ["path", {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
            key: "1357e3"
        }],
        ["path", {
            d: "M3 3v5h5",
            key: "1xhq8a"
        }]
    ],
    rO = ae("rotate-ccw", sO);
const lO = [
        ["path", {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }],
        ["path", {
            d: "M16 3.128a4 4 0 0 1 0 7.744",
            key: "16gr8j"
        }],
        ["path", {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }],
        ["circle", {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }]
    ],
    Xb = ae("users", lO);
const oO = [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ],
    Zb = ae("x", oO),
    jh = [{
        key: "all",
        hi: "सभी",
        en: "All"
    }, {
        key: "safar",
        hi: "सफ़र",
        en: "Journeys"
    }, {
        key: "dukaan",
        hi: "दुकान-अड्डा",
        en: "Shops & Addas"
    }, {
        key: "bachpan",
        hi: "बचपन-स्कूल",
        en: "School Days"
    }, {
        key: "kshetriya",
        hi: "क्षेत्रीय",
        en: "Regional"
    }, {
        key: "bhakti",
        hi: "भक्ति-देश",
        en: "Bhakti & Desh"
    }, {
        key: "tyohar",
        hi: "त्योहार",
        en: "Festivals"
    }, {
        key: "shaadi",
        hi: "शादी-बारात",
        en: "Weddings"
    }, {
        key: "raat",
        hi: "रात-महफ़िल",
        en: "Late Night"
    }, {
        key: "rozmarra",
        hi: "रोज़मर्रा",
        en: "Everyday"
    }],
    Ri = {
        title: "Deluxe Saloon",
        hi: "डीलक्स सैलून",
        desc: "90s Bollywood bangers that play at Indian barber shops. The site that started it all.",
        owner: "@ybhrdwj",
        url: "https://saloon.wtf",
        thumb: "/thumbs/site-00.jpg"
    },
    uO = [{
        id: 1,
        title: "Cutting Shop",
        desc: "Telugu cutting shop bangers",
        owner: "@chakra5027",
        url: "http://cuttingshop.lol",
        category: "dukaan",
        views: 26
    }, {
        id: 2,
        title: "नानी का घर",
        desc: "Nani ka ghar, grandparents radio",
        owner: "@Prasanna_163",
        url: "http://nani-ka-ghar.vercel.app",
        category: "rozmarra",
        views: 8
    }, {
        id: 3,
        title: "वो गर्मी की छुट्टियाँ",
        desc: "90s hits and summer holidays",
        owner: "@sachinsharmadev",
        url: "http://90s-hits.vercel.app",
        category: "bachpan",
        views: 20
    }, {
        id: 4,
        title: "Digital Bus",
        desc: "Old Hindi songs for the long way home",
        owner: "@Yash_Shinde_024",
        url: "http://digitalbus.me",
        category: "safar",
        views: 233
    }, {
        id: 5,
        title: "జ్ఞాపకాలు",
        desc: "Telugu nostalgia, cutting shop retro",
        owner: "@phanindra_ai",
        url: "http://telugu-nostalgia-jnapakalu.netlify.app",
        category: "kshetriya",
        views: 510
    }, {
        id: 6,
        title: "बारात बैंड",
        desc: "Indian wedding baraat band",
        owner: "@UdayDolas",
        url: "http://baraat-band.vercel.app",
        category: "shaadi",
        views: 149
    }, {
        id: 7,
        title: "School Ke Baad",
        desc: "Cartoon title tracks after school",
        owner: "@isayushsingh",
        url: "http://schoolkebaad.fun",
        category: "bachpan",
        views: 84
    }, {
        id: 8,
        title: "दंत चिकित्सालय",
        desc: "Dental waiting room calm",
        owner: "@ai_artist1411",
        url: "http://calm-dental-waiting.lovable.app",
        category: "rozmarra",
        views: 15
    }, {
        id: 9,
        title: "Nostalgiclist",
        desc: "Turns these sites into real YT Music playlists",
        owner: "@asiiff98",
        url: "http://nostalgiclist.vercel.app",
        category: "rozmarra",
        views: 132
    }, {
        id: 10,
        title: "भोजपुरी रात",
        desc: "Bhojpuri night songs",
        owner: "@screen_state",
        url: "http://bhojpuri-raat.vercel.app",
        category: "kshetriya",
        views: 655
    }, {
        id: 11,
        title: "Padayappa",
        desc: "Family cassette, AR Rahman era",
        owner: "@iamrkvin",
        url: "http://padayappa.vercel.app",
        category: "kshetriya",
        views: 39
    }, {
        id: 12,
        title: "FiBeats",
        desc: "Older beats and playlists",
        owner: "@RamslamOO7",
        url: "https://ramslam007.github.io/fibeats",
        category: "rozmarra",
        dead: !0,
        views: 471
    }, {
        id: 13,
        title: "छठ गीत",
        desc: "Chhath geet",
        owner: "@ketan_keshri",
        url: "http://chhath-geet.netlify.app",
        category: "tyohar",
        views: 10
    }, {
        id: 14,
        title: "देशभक्ति रेडियो",
        desc: "Patriotic radio",
        owner: "@Nimesh07",
        url: "http://deshbhaktiradio.netlify.app",
        category: "bhakti",
        views: 4
    }, {
        id: 15,
        title: "Midnight Express",
        desc: "Indian train journeys",
        owner: "@shntanuuhere",
        url: "http://train.hereco.xyz",
        category: "safar",
        views: 82
    }, {
        id: 16,
        title: "இளையராஜா",
        desc: "Ilaiyaraaja late-night",
        owner: "@meetlynnjoseph",
        url: "http://ilaya-raja.vercel.app",
        category: "kshetriya",
        views: 1132
    }, {
        id: 17,
        title: "छठ पूजा रेडियो",
        desc: "Chhath Puja songs from Bihar",
        owner: "@20thkim",
        url: "http://chhathpuja-ten.vercel.app",
        category: "tyohar",
        views: 107
    }, {
        id: 18,
        title: "കാപ്പിയും പാട്ടും",
        desc: "Malayalam digital chaya kada",
        owner: "@YADUKRISHNGIRi",
        url: "http://kappiyumpaattum.vercel.app",
        category: "dukaan",
        views: 1709
    }, {
        id: 19,
        title: "भक्ति सागर",
        desc: "90s Bhakti Sagar TV",
        owner: "@guptamayank35",
        url: "http://bhaktisagar.netlify.app",
        category: "bhakti",
        views: 810
    }, {
        id: 20,
        title: "बर्तन वाली प्लेलिस्ट",
        desc: "Har plate ka apna gaana",
        owner: "@WhyisAkash",
        url: "http://bartan-wali-playlist.vercel.app",
        category: "rozmarra",
        views: 47
    }, {
        id: 21,
        title: "Mastii Ki Pathshala",
        desc: "School classroom nostalgia",
        owner: "@shuttermonkz",
        url: "http://wohyaadein.lovable.app",
        category: "bachpan",
        views: 52
    }, {
        id: 22,
        title: "हरियाणा रोडवेज",
        desc: "Haryana Roadways bus, route 47",
        owner: "@taashuu_",
        url: "http://haryanaroadways.wtf",
        category: "safar",
        views: 13445
    }, {
        id: 23,
        title: "Auto Waala",
        desc: "Meter se chalenge, gaane dil se bajenge",
        owner: "@ahmed_kashib",
        url: "http://auto-waala-beta.vercel.app",
        category: "safar",
        views: 52
    }, {
        id: 24,
        title: "Pahadi Radio",
        desc: "Uttarakhand pahadi roadways",
        owner: "@milesxmore",
        url: "http://ukroadways.vercel.app",
        category: "safar",
        views: 88
    }, {
        id: 25,
        title: "मी मराठी",
        desc: "Marathi playlists",
        owner: "@IndulkarC35767",
        url: "http://mi-marathi.vercel.app",
        category: "kshetriya",
        views: 23
    }, {
        id: 26,
        title: "Mehfil",
        desc: "Late night music for late night people",
        owner: "@asimkumarhansda",
        url: "http://mehfil-wtf.vercel.app",
        category: "raat",
        views: 30
    }, {
        id: 27,
        title: "Conductor FM",
        desc: "Last stop, best song",
        owner: "@Nikhilkdev007",
        url: "http://conductor-fm.nikhilkumar007.com",
        category: "safar",
        views: 43
    }, {
        id: 28,
        title: "Safar FM",
        desc: "Songs for the road",
        owner: "@shivamdotdev",
        url: "http://safarfm.vercel.app",
        category: "safar",
        views: 41699
    }, {
        id: 29,
        title: "Seven Sisters FM",
        desc: "Northeast India music",
        owner: "@audaciousSneha",
        url: "http://seven-sisters-fm.pages.dev",
        category: "kshetriya",
        views: 21642
    }, {
        id: 30,
        title: "जय जवान जय किसान",
        desc: "Haryanvi tractor and farmer songs",
        owner: "@rajatKa25917800",
        url: "http://site-final-lyart.vercel.app",
        category: "bhakti",
        views: 22
    }, {
        id: 31,
        title: "Humsafar Express",
        desc: "Indian bus journey songs",
        owner: "@usualTechNerd",
        url: "http://indian-bus-songs.vercel.app",
        category: "safar",
        views: 1347
    }, {
        id: 32,
        title: "Truck Playlist",
        desc: "Highway truck playlist",
        owner: "@naanfictionn",
        url: "http://truck-play.netlify.app",
        category: "safar",
        views: 1488
    }, {
        id: 33,
        title: "90s Nostalgia TV",
        desc: "90s cartoon theme songs",
        owner: "@2orderequity",
        url: "http://90stv.vercel.app",
        category: "bachpan",
        views: 756
    }, {
        id: 34,
        title: "Caravan",
        desc: "Woh din bhi kya din the, regional bus uncle",
        owner: "@Z0D404",
        url: "http://caravan.naveengumaste.me",
        category: "safar",
        views: 920
    }, {
        id: 35,
        title: "हॉर्न ओके प्लीज़",
        desc: "Highway bangers from Indian trucks",
        owner: "@thehirenthakkar",
        url: "http://horn-ok-please-gray.vercel.app",
        category: "safar",
        views: 81736
    }, {
        id: 36,
        title: "Sharod Adda",
        desc: "Durga Puja adda vibes",
        owner: "@S4Sanjay_das",
        url: "http://sharod-adda.vercel.app",
        category: "tyohar",
        views: 3371
    }, {
        id: 37,
        title: "Town Bus Hits",
        desc: "Tamil Nadu town bus music",
        owner: "@ananyeahplsno",
        url: "http://town-bus.vercel.app",
        category: "safar",
        views: 347
    }, {
        id: 38,
        title: "हिमाचल रोडवेज़",
        desc: "Himachal pahadi roadways",
        owner: "@AkshitVrma",
        url: "http://roadways.wtf",
        category: "safar",
        views: 176948
    }, {
        id: 39,
        title: "सफ़र-ए-यूपी",
        desc: "UP Roadways bus and 90s songs",
        owner: "@Shashwat_web3",
        url: "http://safar-e-up.vercel.app",
        category: "safar",
        dead: !0,
        views: 129429
    }, {
        id: 40,
        title: "DJ Rakes",
        desc: "Baraat dance and DJ hooks",
        owner: "@TheSuryanshD",
        url: "http://djrakes.runable.site",
        category: "shaadi",
        views: 31,
        pinned: 1
    }, {
        id: 41,
        title: "Punjabi Wedding DJ",
        desc: "Dhole vajao oye, OG Punjabi wedding bangers",
        owner: "@aaina_narang",
        url: "http://punjabi-wedding-dj.vercel.app",
        category: "shaadi",
        views: 4793
    }, {
        id: 42,
        title: "Sindu Ahamu",
        desc: "Sri Lankan 2000s bangers",
        owner: "@rasaljaya",
        url: "http://sindhuahamu.vercel.app",
        category: "kshetriya",
        views: 3010
    }, {
        id: 43,
        title: "Pind Radio",
        desc: "Interactive Punjabi dhol",
        owner: "@pahwaginni",
        url: "http://pind-radio.vercel.app",
        category: "shaadi",
        views: 6002
    }, {
        id: 44,
        title: "Rearview",
        desc: "Bollywood travel, school-college days",
        owner: "@yuvraj_io",
        url: "http://rearview-jade.vercel.app",
        category: "safar",
        views: 1921
    }, {
        id: 45,
        title: "मज़दूर अड्डा",
        desc: "Dihari majdoor adda",
        owner: "@XShadowTech",
        url: "http://majdoor-ashy.vercel.app",
        category: "dukaan",
        views: 2020
    }, {
        id: 46,
        title: "Musafir",
        desc: "Drive your own truck through the 90s, horn included",
        owner: "@saket_builds",
        url: "https://musafir.vercel.app",
        category: "safar",
        views: 111
    }, {
        id: 47,
        title: "आज़ाद भारत",
        desc: "India's most patriotic songs",
        owner: "@salRoid",
        url: "https://azaad-bharat.vercel.app",
        category: "bhakti",
        views: 9456
    }, {
        id: 48,
        title: "Kassita",
        desc: "Old cassette shop, the international corner",
        owner: "@hamzaalabou",
        url: "http://kassita.xyz",
        category: "dukaan",
        views: 12836
    }, {
        id: 49,
        title: "गली",
        desc: "What if a gali was a website",
        owner: "@sumitwhodesign",
        url: "https://gali-roan.vercel.app",
        category: "dukaan",
        views: 79
    }, {
        id: 50,
        title: "Desi Gym",
        desc: "500 rupaye wali desi gym, chatpate Bollywood songs",
        owner: "@Athaxv05",
        url: "https://desi-gym.vercel.app",
        category: "dukaan",
        views: 21
    }, {
        id: 51,
        title: "Scenote",
        desc: "Bring your own playlist, swap the scene",
        owner: "@sansynx",
        url: "https://scenote.pages.dev",
        category: "rozmarra",
        views: 122
    }, {
        id: 52,
        title: "Sukoon",
        desc: "Old songs, pura sukoon",
        owner: "@ParthBhuptani10",
        url: "http://sukoon-old-songs.vercel.app",
        category: "raat",
        views: 5
    }, {
        id: 53,
        title: "Sangeet",
        desc: "Poos ki raat wali feeling, perfect for 2 AM",
        owner: "@TheSuryanshD",
        url: "https://sangeet.runable.site",
        category: "raat",
        views: 8567,
        pinned: 2
    }, {
        id: 54,
        title: "Purane Naghme",
        desc: "90s Hindi songs, playing off the shop's speaker",
        owner: "@Suryansh777777",
        url: "https://www.wohdin.xyz",
        category: "dukaan",
        views: 4
    }, {
        id: 55,
        title: "Chhath Puja Radio",
        desc: "Sharda Sinha's chhath geet, arghya by the ghat",
        owner: "@Vinit_Shahdeo",
        url: "http://chhathpujaradio.vercel.app",
        category: "tyohar",
        views: 24831
    }, {
        id: 56,
        title: "Durga Pujo",
        desc: "Pujo is coming, songs for the pandal",
        owner: "@Shubhammcr7_",
        url: "https://durgapujosong.vercel.app",
        category: "tyohar",
        views: 2945
    }, {
        id: 57,
        title: "आख़िरी जाम",
        desc: "Bollywood night, one last drink",
        owner: "@itspankaj0718",
        url: "http://aakhri-jaam.vercel.app",
        category: "raat",
        views: 2478
    }, {
        id: 58,
        title: "Kalesh FM",
        desc: "Construction, brawls, horns, the real Indian road",
        owner: "@wokepadia",
        url: "https://kalesh-fm.pages.dev",
        category: "safar",
        views: 2404
    }, {
        id: 59,
        title: "Dhun",
        desc: "Bollywood bangers, now with a DHH playlist",
        owner: "@Avichal_08",
        url: "https://dhun.dploy.avichal.me",
        category: "rozmarra",
        views: 1572
    }, {
        id: 60,
        title: "Odia Old Album",
        desc: "140+ cassette-era Odia album bangers",
        owner: "@swopnajit2",
        url: "https://sidd.app/odia-old-album-songs",
        category: "kshetriya",
        views: 1533
    }, {
        id: 61,
        title: "Chai Route Radio",
        desc: "Chai tapri, 2 rupaye ki litti, radio in the corner",
        owner: "@anjalisinggh12",
        url: "https://chaiwala-ruby.vercel.app",
        category: "dukaan",
        views: 1025
    }, {
        id: 62,
        title: "महाशिवरात्रि",
        desc: "Pure Shiva chants, a sacred night",
        owner: "@thinkofyash04",
        url: "https://mahashivratri-immersive.vercel.app",
        category: "tyohar",
        views: 837
    }, {
        id: 63,
        title: "Chhath Radio",
        desc: "Chhath Puja redesigned, warmth in digital space",
        owner: "@anjalisinggh12",
        url: "http://chhatt.vercel.app",
        category: "tyohar",
        views: 830
    }, {
        id: 64,
        title: "सफ़र FM (Highway)",
        desc: "Highway bus radio, window-seat vibes",
        owner: "@Ankitsingh97923",
        url: "https://safar-fm-three.vercel.app",
        category: "safar",
        views: 601
    }, {
        id: 65,
        title: "छठ के गीत",
        desc: "Purane paramparik Chhath Puja geet",
        owner: "@meisabikumar",
        url: "https://chhath-music.vercel.app",
        category: "tyohar",
        views: 5
    }, {
        id: 66,
        title: "Mero Nepal",
        desc: "The deluxe saloon, Nepali edition",
        owner: "@0xBlurr",
        url: "https://timro.fun",
        category: "kshetriya",
        views: 3
    }, {
        id: 67,
        title: "Bhojpuri Cult",
        desc: "Lollypop Lagelu, Pawan Singh era",
        owner: "@Prsnt50",
        url: "https://bhojpuri.cfd",
        category: "kshetriya",
        views: 4
    }, {
        id: 68,
        title: "Marwadi Heritage",
        desc: "Rajasthani folk and songs",
        owner: "@RanjeetLuhar",
        url: "https://rajasthani-heritage.vercel.app",
        category: "kshetriya",
        views: 2
    }];

function cO(e) {
    return `/thumbs/site-${String(e).padStart(2,"0")}.jpg`
}

function Kf(e) {
    return `https://x.com/${e.replace("@","")}`
}
var _a = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    fO = class extends _a {#
        t;#
        e;#
        n;
        constructor() {
            super(), this.#n = e => {
                if (typeof window < "u" && window.addEventListener) {
                    const i = () => e();
                    return window.addEventListener("visibilitychange", i, !1), () => {
                        window.removeEventListener("visibilitychange", i)
                    }
                }
            }
        }
        onSubscribe() {
            this.#e || this.setEventListener(this.#n)
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#e ? .(), this.#e = void 0)
        }
        setEventListener(e) {
            this.#n = e, this.#e ? .(), this.#e = e(i => {
                typeof i == "boolean" ? this.setFocused(i) : this.onFocus()
            })
        }
        setFocused(e) {
            this.#t !== e && (this.#t = e, this.onFocus())
        }
        onFocus() {
            const e = this.isFocused();
            this.listeners.forEach(i => {
                i(e)
            })
        }
        isFocused() {
            return typeof this.#t == "boolean" ? this.#t : globalThis.document ? .visibilityState !== "hidden"
        }
    },
    Uh = new fO,
    hO = {
        setTimeout: (e, i) => setTimeout(e, i),
        clearTimeout: e => clearTimeout(e),
        setInterval: (e, i) => setInterval(e, i),
        clearInterval: e => clearInterval(e)
    },
    dO = class {#
        t = hO;#
        e = !1;
        setTimeoutProvider(e) {
            this.#t = e
        }
        setTimeout(e, i) {
            return this.#t.setTimeout(e, i)
        }
        clearTimeout(e) {
            this.#t.clearTimeout(e)
        }
        setInterval(e, i) {
            return this.#t.setInterval(e, i)
        }
        clearInterval(e) {
            this.#t.clearInterval(e)
        }
    },
    Ni = new dO;

function mO(e) {
    setTimeout(e, 0)
}
var pO = typeof window > "u" || "Deno" in globalThis;

function ce() {}

function yO(e, i) {
    return typeof e == "function" ? e(i) : e
}

function Qf(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function Fb(e, i) {
    return Math.max(e + (i || 0) - Date.now(), 0)
}

function ei(e, i) {
    return typeof e == "function" ? e(i) : e
}

function Me(e, i) {
    return typeof e == "function" ? e(i) : e
}

function bv(e, i) {
    const {
        type: s = "all",
        exact: r,
        fetchStatus: u,
        predicate: c,
        queryKey: f,
        stale: m
    } = e;
    if (f) {
        if (r) {
            if (i.queryHash !== zh(f, i.options)) return !1
        } else if (!er(i.queryKey, f)) return !1
    }
    if (s !== "all") {
        const d = i.isActive();
        if (s === "active" && !d || s === "inactive" && d) return !1
    }
    return !(typeof m == "boolean" && i.isStale() !== m || u && u !== i.state.fetchStatus || c && !c(i))
}

function Sv(e, i) {
    const {
        exact: s,
        status: r,
        predicate: u,
        mutationKey: c
    } = e;
    if (c) {
        if (!i.options.mutationKey) return !1;
        if (s) {
            if (zi(i.options.mutationKey) !== zi(c)) return !1
        } else if (!er(i.options.mutationKey, c)) return !1
    }
    return !(r && i.state.status !== r || u && !u(i))
}

function zh(e, i) {
    return (i ? .queryKeyHashFn || zi)(e)
}

function zi(e) {
    return JSON.stringify(e, (i, s) => Yf(s) ? Object.keys(s).sort().reduce((r, u) => (r[u] = s[u], r), {}) : s)
}

function er(e, i) {
    return e === i ? !0 : typeof e != typeof i ? !1 : e && i && typeof e == "object" && typeof i == "object" ? Object.keys(i).every(s => er(e[s], i[s])) : !1
}
var gO = Object.prototype.hasOwnProperty;

function Ib(e, i, s = 0) {
    if (e === i) return e;
    if (s > 500) return i;
    const r = xv(e) && xv(i);
    if (!r && !(Yf(e) && Yf(i))) return i;
    const c = (r ? e : Object.keys(e)).length,
        f = r ? i : Object.keys(i),
        m = f.length,
        d = r ? new Array(m) : {};
    let p = 0;
    for (let y = 0; y < m; y++) {
        const v = r ? y : f[y],
            S = e[v],
            R = i[v];
        if (S === R) {
            d[v] = S, (r ? y < c : gO.call(e, v)) && p++;
            continue
        }
        if (S === null || R === null || typeof S != "object" || typeof R != "object") {
            d[v] = R;
            continue
        }
        const w = Ib(S, R, s + 1);
        d[v] = w, w === S && p++
    }
    return c === m && p === c ? e : d
}

function lo(e, i) {
    if (!i || Object.keys(e).length !== Object.keys(i).length) return !1;
    for (const s in e)
        if (e[s] !== i[s]) return !1;
    return !0
}

function xv(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function Yf(e) {
    if (!Tv(e)) return !1;
    const i = e.constructor;
    if (i === void 0) return !0;
    const s = i.prototype;
    return !(!Tv(s) || !s.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function Tv(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function vO(e) {
    return new Promise(i => {
        Ni.setTimeout(i, e)
    })
}

function Xf(e, i, s) {
    return typeof s.structuralSharing == "function" ? s.structuralSharing(e, i) : s.structuralSharing !== !1 ? Ib(e, i) : i
}

function bO(e, i, s = 0) {
    const r = [...e, i];
    return s && r.length > s ? r.slice(1) : r
}

function SO(e, i, s = 0) {
    const r = [i, ...e];
    return s && r.length > s ? r.slice(0, -1) : r
}
var Ce = Symbol();

function Jb(e, i) {
    return !e.queryFn && i ? .initialPromise ? () => i.initialPromise : !e.queryFn || e.queryFn === Ce ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}

function kh(e, i) {
    return typeof e == "function" ? e(...i) : !!e
}

function xO(e, i, s) {
    let r = !1,
        u;
    return Object.defineProperty(e, "signal", {
        enumerable: !0,
        get: () => (u ? ? = i(), r || (r = !0, u.aborted ? s() : u.addEventListener("abort", s, {
            once: !0
        })), u)
    }), e
}
var nr = (() => {
    let e = () => pO;
    return {
        isServer() {
            return e()
        },
        setIsServer(i) {
            e = i
        }
    }
})();

function Zf() {
    let e, i;
    const s = new Promise((u, c) => {
        e = u, i = c
    });
    s.status = "pending", s.catch(() => {});

    function r(u) {
        Object.assign(s, u), delete s.resolve, delete s.reject
    }
    return s.resolve = u => {
        r({
            status: "fulfilled",
            value: u
        }), e(u)
    }, s.reject = u => {
        r({
            status: "rejected",
            reason: u
        }), i(u)
    }, s
}
var TO = mO;

function wO() {
    let e = [],
        i = 0,
        s = m => {
            m()
        },
        r = m => {
            m()
        },
        u = TO;
    const c = m => {
            i ? e.push(m) : u(() => {
                s(m)
            })
        },
        f = () => {
            const m = e;
            e = [], m.length && u(() => {
                r(() => {
                    m.forEach(d => {
                        s(d)
                    })
                })
            })
        };
    return {
        batch: m => {
            let d;
            i++;
            try {
                d = m()
            } finally {
                i--, i || f()
            }
            return d
        },
        batchCalls: m => (...d) => {
            c(() => {
                m(...d)
            })
        },
        schedule: c,
        setNotifyFunction: m => {
            s = m
        },
        setBatchNotifyFunction: m => {
            r = m
        },
        setScheduler: m => {
            u = m
        }
    }
}
var Zt = wO(),
    EO = class extends _a {#
        t = !0;#
        e;#
        n;
        constructor() {
            super(), this.#n = e => {
                if (typeof window < "u" && window.addEventListener) {
                    const i = () => e(!0),
                        s = () => e(!1);
                    return window.addEventListener("online", i, !1), window.addEventListener("offline", s, !1), () => {
                        window.removeEventListener("online", i), window.removeEventListener("offline", s)
                    }
                }
            }
        }
        onSubscribe() {
            this.#e || this.setEventListener(this.#n)
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#e ? .(), this.#e = void 0)
        }
        setEventListener(e) {
            this.#n = e, this.#e ? .(), this.#e = e(this.setOnline.bind(this))
        }
        setOnline(e) {
            this.#t !== e && (this.#t = e, this.listeners.forEach(s => {
                s(e)
            }))
        }
        isOnline() {
            return this.#t
        }
    },
    oo = new EO;

function AO(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function Wb(e) {
    return (e ? ? "online") === "online" ? oo.isOnline() : !0
}
var Ff = class extends Error {
    constructor(e) {
        super("CancelledError"), this.revert = e ? .revert, this.silent = e ? .silent
    }
};

function $b(e) {
    let i = !1,
        s = 0,
        r;
    const u = Zf(),
        c = () => u.status !== "pending",
        f = C => {
            if (!c()) {
                const D = new Ff(C);
                S(D), e.onCancel ? .(D)
            }
        },
        m = () => {
            i = !0
        },
        d = () => {
            i = !1
        },
        p = () => Uh.isFocused() && (e.networkMode === "always" || oo.isOnline()) && e.canRun(),
        y = () => Wb(e.networkMode) && e.canRun(),
        v = C => {
            c() || (r ? .(), u.resolve(C))
        },
        S = C => {
            c() || (r ? .(), u.reject(C))
        },
        R = () => new Promise(C => {
            r = D => {
                (c() || p()) && C(D)
            }, e.onPause ? .()
        }).then(() => {
            r = void 0, c() || e.onContinue ? .()
        }),
        w = () => {
            if (c()) return;
            let C;
            const D = s === 0 ? e.initialPromise : void 0;
            try {
                C = D ? ? e.fn()
            } catch (V) {
                C = Promise.reject(V)
            }
            Promise.resolve(C).then(v).catch(V => {
                if (c()) return;
                const K = e.retry ? ? (nr.isServer() ? 0 : 3),
                    B = e.retryDelay ? ? AO,
                    q = typeof B == "function" ? B(s, V) : B,
                    _ = K === !0 || typeof K == "number" && s < K || typeof K == "function" && K(s, V);
                if (i || !_) {
                    S(V);
                    return
                }
                s++, e.onFail ? .(s, V), vO(q).then(() => p() ? void 0 : R()).then(() => {
                    i ? S(V) : w()
                })
            })
        };
    return {
        promise: u,
        status: () => u.status,
        cancel: f,
        continue: () => (r ? .(), u),
        cancelRetry: m,
        continueRetry: d,
        canStart: y,
        start: () => (y() ? w() : R().then(w), u)
    }
}
var t1 = class {#
    t;
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(), Qf(this.gcTime) && (this.#t = Ni.setTimeout(() => {
            this.optionalRemove()
        }, this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ? ? (nr.isServer() ? 1 / 0 : 300 * 1e3))
    }
    clearGcTimeout() {
        this.#t !== void 0 && (Ni.clearTimeout(this.#t), this.#t = void 0)
    }
};

function RO(e) {
    return {
        onFetch: (i, s) => {
            const r = i.options,
                u = i.fetchOptions ? .meta ? .fetchMore ? .direction,
                c = i.state.data ? .pages || [],
                f = i.state.data ? .pageParams || [];
            let m = {
                    pages: [],
                    pageParams: []
                },
                d = 0;
            const p = async () => {
                let y = !1;
                const v = w => {
                        xO(w, () => i.signal, () => y = !0)
                    },
                    S = Jb(i.options, i.fetchOptions),
                    R = async (w, C, D) => {
                        if (y) return Promise.reject(i.signal.reason);
                        if (C == null && w.pages.length) return Promise.resolve(w);
                        const K = (() => {
                                const Q = {
                                    client: i.client,
                                    queryKey: i.queryKey,
                                    pageParam: C,
                                    direction: D ? "backward" : "forward",
                                    meta: i.options.meta
                                };
                                return v(Q), Q
                            })(),
                            B = await S(K),
                            {
                                maxPages: q
                            } = i.options,
                            _ = D ? SO : bO;
                        return {
                            pages: _(w.pages, B, q),
                            pageParams: _(w.pageParams, C, q)
                        }
                    };
                if (u && c.length) {
                    const w = u === "backward",
                        C = w ? OO : wv,
                        D = {
                            pages: c,
                            pageParams: f
                        },
                        V = C(r, D);
                    m = await R(D, V, w)
                } else {
                    const w = e ? ? c.length;
                    do {
                        const C = d === 0 ? f[0] ? ? r.initialPageParam : wv(r, m);
                        if (d > 0 && C == null) break;
                        m = await R(m, C), d++
                    } while (d < w)
                }
                return m
            };
            i.options.persister ? i.fetchFn = () => i.options.persister ? .(p, {
                client: i.client,
                queryKey: i.queryKey,
                meta: i.options.meta,
                signal: i.signal
            }, s) : i.fetchFn = p
        }
    }
}

function wv(e, {
    pages: i,
    pageParams: s
}) {
    const r = i.length - 1;
    return i.length > 0 ? e.getNextPageParam(i[r], i, s[r], s) : void 0
}

function OO(e, {
    pages: i,
    pageParams: s
}) {
    return i.length > 0 ? e.getPreviousPageParam ? .(i[0], i, s[0], s) : void 0
}
var CO = class extends t1 {#
    t;#
    e;#
    n;#
    i;#
    s;#
    a;#
    l;#
    r;
    constructor(e) {
        super(), this.#r = !1, this.#l = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#s = e.client, this.#i = this.#s.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#e = Av(this.options), this.state = e.state ? ? this.#e, this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get queryType() {
        return this.#t
    }
    get promise() {
        return this.#a ? .promise
    }
    setOptions(e) {
        if (this.options = { ...this.#l,
                ...e
            }, e ? ._type && (this.#t = e._type), this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
            const i = Av(this.options);
            i.data !== void 0 && (this.setState(Ev(i.data, i.dataUpdatedAt)), this.#e = i)
        }
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && this.#i.remove(this)
    }
    setData(e, i) {
        const s = Xf(this.state.data, e, this.options);
        return this.#o({
            data: s,
            type: "success",
            dataUpdatedAt: i ? .updatedAt,
            manual: i ? .manual
        }), s
    }
    setState(e) {
        this.#o({
            type: "setState",
            state: e
        })
    }
    cancel(e) {
        const i = this.#a ? .promise;
        return this.#a ? .cancel(e), i ? i.then(ce).catch(ce) : Promise.resolve()
    }
    destroy() {
        super.destroy(), this.cancel({
            silent: !0
        })
    }
    get resetState() {
        return this.#e
    }
    reset() {
        this.destroy(), this.setState(this.resetState)
    }
    isActive() {
        return this.observers.some(e => Me(e.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Ce || !this.isFetched()
    }
    isFetched() {
        return this.state.dataUpdateCount + this.state.errorUpdateCount > 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(e => ei(e.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(e = 0) {
        return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !Fb(this.state.dataUpdatedAt, e)
    }
    onFocus() {
        this.observers.find(i => i.shouldFetchOnWindowFocus()) ? .refetch({
            cancelRefetch: !1
        }), this.#a ? .continue()
    }
    onOnline() {
        this.observers.find(i => i.shouldFetchOnReconnect()) ? .refetch({
            cancelRefetch: !1
        }), this.#a ? .continue()
    }
    addObserver(e) {
        this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#i.notify({
            type: "observerAdded",
            query: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.observers.includes(e) && (this.observers = this.observers.filter(i => i !== e), this.observers.length || (this.#a && (this.#r || this.#c() ? this.#a.cancel({
            revert: !0
        }) : this.#a.cancelRetry()), this.scheduleGc()), this.#i.notify({
            type: "observerRemoved",
            query: this,
            observer: e
        }))
    }
    getObserversCount() {
        return this.observers.length
    }#
    c() {
        return this.state.fetchStatus === "paused" && this.state.status === "pending"
    }
    invalidate() {
        this.state.isInvalidated || this.#o({
            type: "invalidate"
        })
    }
    async fetch(e, i) {
        if (this.state.fetchStatus !== "idle" && this.#a ? .status() !== "rejected") {
            if (this.state.data !== void 0 && i ? .cancelRefetch) this.cancel({
                silent: !0
            });
            else if (this.#a) return this.#a.continueRetry(), this.#a.promise
        }
        if (e && this.setOptions(e), !this.options.queryFn) {
            const d = this.observers.find(p => p.options.queryFn);
            d && this.setOptions(d.options)
        }
        const s = new AbortController,
            r = d => {
                Object.defineProperty(d, "signal", {
                    enumerable: !0,
                    get: () => (this.#r = !0, s.signal)
                })
            },
            u = () => {
                const d = Jb(this.options, i),
                    y = (() => {
                        const v = {
                            client: this.#s,
                            queryKey: this.queryKey,
                            meta: this.meta
                        };
                        return r(v), v
                    })();
                return this.#r = !1, this.options.persister ? this.options.persister(d, y, this) : d(y)
            },
            f = (() => {
                const d = {
                    fetchOptions: i,
                    options: this.options,
                    queryKey: this.queryKey,
                    client: this.#s,
                    state: this.state,
                    fetchFn: u
                };
                return r(d), d
            })();
        (this.#t === "infinite" ? RO(this.options.pages) : this.options.behavior) ? .onFetch(f, this), this.#n = this.state, (this.state.fetchStatus === "idle" || this.state.fetchMeta !== f.fetchOptions ? .meta) && this.#o({
            type: "fetch",
            meta: f.fetchOptions ? .meta
        }), this.#a = $b({
            initialPromise: i ? .initialPromise,
            fn: f.fetchFn,
            onCancel: d => {
                d instanceof Ff && d.revert && this.setState({ ...this.#n,
                    fetchStatus: "idle"
                }), s.abort()
            },
            onFail: (d, p) => {
                this.#o({
                    type: "failed",
                    failureCount: d,
                    error: p
                })
            },
            onPause: () => {
                this.#o({
                    type: "pause"
                })
            },
            onContinue: () => {
                this.#o({
                    type: "continue"
                })
            },
            retry: f.options.retry,
            retryDelay: f.options.retryDelay,
            networkMode: f.options.networkMode,
            canRun: () => !0
        });
        try {
            const d = await this.#a.start();
            if (d === void 0) throw new Error(`${this.queryHash} data is undefined`);
            return this.setData(d), this.#i.config.onSuccess ? .(d, this), this.#i.config.onSettled ? .(d, this.state.error, this), d
        } catch (d) {
            if (d instanceof Ff) {
                if (d.silent) return this.#a.promise;
                if (d.revert) {
                    if (this.state.data === void 0) throw d;
                    return this.state.data
                }
            }
            throw this.#o({
                type: "error",
                error: d
            }), this.#i.config.onError ? .(d, this), this.#i.config.onSettled ? .(this.state.data, d, this), d
        } finally {
            this.scheduleGc()
        }
    }#
    o(e) {
        const i = s => {
            switch (e.type) {
                case "failed":
                    return { ...s,
                        fetchFailureCount: e.failureCount,
                        fetchFailureReason: e.error
                    };
                case "pause":
                    return { ...s,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...s,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return { ...s,
                        ...e1(s.data, this.options),
                        fetchMeta: e.meta ? ? null
                    };
                case "success":
                    const r = { ...s,
                        ...Ev(e.data, e.dataUpdatedAt),
                        dataUpdateCount: s.dataUpdateCount + 1,
                        ...!e.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                    return this.#n = e.manual ? r : void 0, r;
                case "error":
                    const u = e.error;
                    return { ...s,
                        error: u,
                        errorUpdateCount: s.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: s.fetchFailureCount + 1,
                        fetchFailureReason: u,
                        fetchStatus: "idle",
                        status: "error",
                        isInvalidated: !0
                    };
                case "invalidate":
                    return { ...s,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...s,
                        ...e.state
                    }
            }
        };
        this.state = i(this.state), Zt.batch(() => {
            this.observers.forEach(s => {
                s.onQueryUpdate()
            }), this.#i.notify({
                query: this,
                type: "updated",
                action: e
            })
        })
    }
};

function e1(e, i) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Wb(i.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function Ev(e, i) {
    return {
        data: e,
        dataUpdatedAt: i ? ? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success"
    }
}

function Av(e) {
    const i = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        s = i !== void 0,
        r = s ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: i,
        dataUpdateCount: 0,
        dataUpdatedAt: s ? r ? ? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: s ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var MO = class extends _a {
    constructor(e, i) {
        super(), this.options = i, this.#t = e, this.#r = null, this.#l = Zf(), this.bindMethods(), this.setOptions(i)
    }#
    t;#
    e = void 0;#
    n = void 0;#
    i = void 0;#
    s;#
    a;#
    l;#
    r;#
    c;#
    o;#
    m;#
    f;#
    h;#
    u;#
    p = new Set;
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (this.#e.addObserver(this), Rv(this.#e, this.options) ? this.#d() : this.updateResult(), this.#b())
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return If(this.#e, this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return If(this.#e, this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set, this.#S(), this.#x(), this.#e.removeObserver(this)
    }
    setOptions(e) {
        const i = this.options,
            s = this.#e;
        if (this.options = this.#t.defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Me(this.options.enabled, this.#e) != "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        this.#T(), this.#e.setOptions(this.options), i._defaulted && !lo(this.options, i) && this.#t.getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: this.#e,
            observer: this
        });
        const r = this.hasListeners();
        r && Ov(this.#e, s, this.options, i) && this.#d(), this.updateResult(), r && (this.#e !== s || Me(this.options.enabled, this.#e) !== Me(i.enabled, this.#e) || ei(this.options.staleTime, this.#e) !== ei(i.staleTime, this.#e)) && this.#y();
        const u = this.#g();
        r && (this.#e !== s || Me(this.options.enabled, this.#e) !== Me(i.enabled, this.#e) || u !== this.#u) && this.#v(u)
    }
    getOptimisticResult(e) {
        const i = this.#t.getQueryCache().build(this.#t, e),
            s = this.createResult(i, e);
        return NO(this, s) && (this.#i = s, this.#a = this.options, this.#s = this.#e.state), s
    }
    getCurrentResult() {
        return this.#i
    }
    trackResult(e, i) {
        return new Proxy(e, {
            get: (s, r) => (this.trackProp(r), i ? .(r), r === "promise" && (this.trackProp("data"), !this.options.experimental_prefetchInRender && this.#l.status === "pending" && this.#l.reject(new Error("experimental_prefetchInRender feature flag is not enabled"))), Reflect.get(s, r))
        })
    }
    trackProp(e) {
        this.#p.add(e)
    }
    getCurrentQuery() {
        return this.#e
    }
    refetch({ ...e
    } = {}) {
        return this.fetch({ ...e
        })
    }
    fetchOptimistic(e) {
        const i = this.#t.defaultQueryOptions(e),
            s = this.#t.getQueryCache().build(this.#t, i);
        return s.fetch().then(() => this.createResult(s, i))
    }
    fetch(e) {
        return this.#d({ ...e,
            cancelRefetch: e.cancelRefetch ? ? !0
        }).then(() => (this.updateResult(), this.#i))
    }#
    d(e) {
        this.#T();
        let i = this.#e.fetch(this.options, e);
        return e ? .throwOnError || (i = i.catch(ce)), i
    }#
    y() {
        this.#S();
        const e = ei(this.options.staleTime, this.#e);
        if (nr.isServer() || this.#i.isStale || !Qf(e)) return;
        const s = Fb(this.#i.dataUpdatedAt, e) + 1;
        this.#f = Ni.setTimeout(() => {
            this.#i.isStale || this.updateResult()
        }, s)
    }#
    g() {
        return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.#e) : this.options.refetchInterval) ? ? !1
    }#
    v(e) {
        this.#x(), this.#u = e, !(nr.isServer() || Me(this.options.enabled, this.#e) === !1 || !Qf(this.#u) || this.#u === 0) && (this.#h = Ni.setInterval(() => {
            (this.options.refetchIntervalInBackground || Uh.isFocused()) && this.#d()
        }, this.#u))
    }#
    b() {
        this.#y(), this.#v(this.#g())
    }#
    S() {
        this.#f !== void 0 && (Ni.clearTimeout(this.#f), this.#f = void 0)
    }#
    x() {
        this.#h !== void 0 && (Ni.clearInterval(this.#h), this.#h = void 0)
    }
    createResult(e, i) {
        const s = this.#e,
            r = this.options,
            u = this.#i,
            c = this.#s,
            f = this.#a,
            d = e !== s ? e.state : this.#n,
            {
                state: p
            } = e;
        let y = { ...p
            },
            v = !1,
            S;
        if (i._optimisticResults) {
            const Y = this.hasListeners(),
                et = !Y && Rv(e, i),
                J = Y && Ov(e, s, i, r);
            (et || J) && (y = { ...y,
                ...e1(p.data, e.options)
            }), i._optimisticResults === "isRestoring" && (y.fetchStatus = "idle")
        }
        let {
            error: R,
            errorUpdatedAt: w,
            status: C
        } = y;
        S = y.data;
        let D = !1;
        if (i.placeholderData !== void 0 && S === void 0 && C === "pending") {
            let Y;
            u ? .isPlaceholderData && i.placeholderData === f ? .placeholderData ? (Y = u.data, D = !0) : Y = typeof i.placeholderData == "function" ? i.placeholderData(this.#m ? .state.data, this.#m) : i.placeholderData, Y !== void 0 && (C = "success", S = Xf(u ? .data, Y, i), v = !0)
        }
        if (i.select && S !== void 0 && !D)
            if (u && S === c ? .data && i.select === this.#c) S = this.#o;
            else try {
                this.#c = i.select, S = i.select(S), S = Xf(u ? .data, S, i), this.#o = S, this.#r = null
            } catch (Y) {
                this.#r = Y
            }
        this.#r && (R = this.#r, S = this.#o, w = Date.now(), C = "error");
        const V = y.fetchStatus === "fetching",
            K = C === "pending",
            B = C === "error",
            q = K && V,
            _ = S !== void 0,
            tt = {
                status: C,
                fetchStatus: y.fetchStatus,
                isPending: K,
                isSuccess: C === "success",
                isError: B,
                isInitialLoading: q,
                isLoading: q,
                data: S,
                dataUpdatedAt: y.dataUpdatedAt,
                error: R,
                errorUpdatedAt: w,
                failureCount: y.fetchFailureCount,
                failureReason: y.fetchFailureReason,
                errorUpdateCount: y.errorUpdateCount,
                isFetched: e.isFetched(),
                isFetchedAfterMount: y.dataUpdateCount > d.dataUpdateCount || y.errorUpdateCount > d.errorUpdateCount,
                isFetching: V,
                isRefetching: V && !K,
                isLoadingError: B && !_,
                isPaused: y.fetchStatus === "paused",
                isPlaceholderData: v,
                isRefetchError: B && _,
                isStale: Vh(e, i),
                refetch: this.refetch,
                promise: this.#l,
                isEnabled: Me(i.enabled, e) !== !1
            };
        if (this.options.experimental_prefetchInRender) {
            const Y = tt.data !== void 0,
                et = tt.status === "error" && !Y,
                J = bt => {
                    et ? bt.reject(tt.error) : Y && bt.resolve(tt.data)
                },
                ot = () => {
                    const bt = this.#l = tt.promise = Zf();
                    J(bt)
                },
                ut = this.#l;
            switch (ut.status) {
                case "pending":
                    e.queryHash === s.queryHash && J(ut);
                    break;
                case "fulfilled":
                    (et || tt.data !== ut.value) && ot();
                    break;
                case "rejected":
                    (!et || tt.error !== ut.reason) && ot();
                    break
            }
        }
        return tt
    }
    updateResult() {
        const e = this.#i,
            i = this.createResult(this.#e, this.options);
        if (this.#s = this.#e.state, this.#a = this.options, this.#s.data !== void 0 && (this.#m = this.#e), lo(i, e)) return;
        this.#i = i;
        const s = () => {
            if (!e) return !0;
            const {
                notifyOnChangeProps: r
            } = this.options, u = typeof r == "function" ? r() : r;
            if (u === "all" || !u && !this.#p.size) return !0;
            const c = new Set(u ? ? this.#p);
            return this.options.throwOnError && c.add("error"), Object.keys(this.#i).some(f => {
                const m = f;
                return this.#i[m] !== e[m] && c.has(m)
            })
        };
        this.#w({
            listeners: s()
        })
    }#
    T() {
        const e = this.#t.getQueryCache().build(this.#t, this.options);
        if (e === this.#e) return;
        const i = this.#e;
        this.#e = e, this.#n = e.state, this.hasListeners() && (i ? .removeObserver(this), e.addObserver(this))
    }
    onQueryUpdate() {
        this.updateResult(), this.hasListeners() && this.#b()
    }#
    w(e) {
        Zt.batch(() => {
            e.listeners && this.listeners.forEach(i => {
                i(this.#i)
            }), this.#t.getQueryCache().notify({
                query: this.#e,
                type: "observerResultsUpdated"
            })
        })
    }
};

function DO(e, i) {
    return Me(i.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && Me(i.retryOnMount, e) === !1)
}

function Rv(e, i) {
    return DO(e, i) || e.state.data !== void 0 && If(e, i, i.refetchOnMount)
}

function If(e, i, s) {
    if (Me(i.enabled, e) !== !1 && ei(i.staleTime, e) !== "static") {
        const r = typeof s == "function" ? s(e) : s;
        return r === "always" || r !== !1 && Vh(e, i)
    }
    return !1
}

function Ov(e, i, s, r) {
    return (e !== i || Me(r.enabled, e) === !1) && (!s.suspense || e.state.status !== "error") && Vh(e, s)
}

function Vh(e, i) {
    return Me(i.enabled, e) !== !1 && e.isStaleByTime(ei(i.staleTime, e))
}

function NO(e, i) {
    return !lo(e.getCurrentResult(), i)
}
var jO = class extends t1 {#
    t;#
    e;#
    n;#
    i;
    constructor(e) {
        super(), this.#t = e.client, this.mutationId = e.mutationId, this.#n = e.mutationCache, this.#e = [], this.state = e.state || n1(), this.setOptions(e.options), this.scheduleGc()
    }
    setOptions(e) {
        this.options = e, this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(e) {
        this.#e.includes(e) || (this.#e.push(e), this.clearGcTimeout(), this.#n.notify({
            type: "observerAdded",
            mutation: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.#e = this.#e.filter(i => i !== e), this.scheduleGc(), this.#n.notify({
            type: "observerRemoved",
            mutation: this,
            observer: e
        })
    }
    optionalRemove() {
        this.#e.length || (this.state.status === "pending" ? this.scheduleGc() : this.#n.remove(this))
    }
    continue () {
        return this.#i ? .continue() ? ? this.execute(this.state.variables)
    }
    async execute(e) {
        const i = () => {
                this.#s({
                    type: "continue"
                })
            },
            s = {
                client: this.#t,
                meta: this.options.meta,
                mutationKey: this.options.mutationKey
            };
        this.#i = $b({
            fn: () => this.options.mutationFn ? this.options.mutationFn(e, s) : Promise.reject(new Error("No mutationFn found")),
            onFail: (c, f) => {
                this.#s({
                    type: "failed",
                    failureCount: c,
                    error: f
                })
            },
            onPause: () => {
                this.#s({
                    type: "pause"
                })
            },
            onContinue: i,
            retry: this.options.retry ? ? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => this.#n.canRun(this)
        });
        const r = this.state.status === "pending",
            u = !this.#i.canStart();
        try {
            if (r) i();
            else {
                this.#s({
                    type: "pending",
                    variables: e,
                    isPaused: u
                }), this.#n.config.onMutate && await this.#n.config.onMutate(e, this, s);
                const f = await this.options.onMutate ? .(e, s);
                f !== this.state.context && this.#s({
                    type: "pending",
                    context: f,
                    variables: e,
                    isPaused: u
                })
            }
            const c = await this.#i.start();
            return await this.#n.config.onSuccess ? .(c, e, this.state.context, this, s), await this.options.onSuccess ? .(c, e, this.state.context, s), await this.#n.config.onSettled ? .(c, null, this.state.variables, this.state.context, this, s), await this.options.onSettled ? .(c, null, e, this.state.context, s), this.#s({
                type: "success",
                data: c
            }), c
        } catch (c) {
            try {
                await this.#n.config.onError ? .(c, e, this.state.context, this, s)
            } catch (f) {
                Promise.reject(f)
            }
            try {
                await this.options.onError ? .(c, e, this.state.context, s)
            } catch (f) {
                Promise.reject(f)
            }
            try {
                await this.#n.config.onSettled ? .(void 0, c, this.state.variables, this.state.context, this, s)
            } catch (f) {
                Promise.reject(f)
            }
            try {
                await this.options.onSettled ? .(void 0, c, e, this.state.context, s)
            } catch (f) {
                Promise.reject(f)
            }
            throw this.#s({
                type: "error",
                error: c
            }), c
        } finally {
            this.#n.runNext(this)
        }
    }#
    s(e) {
        const i = s => {
            switch (e.type) {
                case "failed":
                    return { ...s,
                        failureCount: e.failureCount,
                        failureReason: e.error
                    };
                case "pause":
                    return { ...s,
                        isPaused: !0
                    };
                case "continue":
                    return { ...s,
                        isPaused: !1
                    };
                case "pending":
                    return { ...s,
                        context: e.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: e.isPaused,
                        status: "pending",
                        variables: e.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return { ...s,
                        data: e.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: !1
                    };
                case "error":
                    return { ...s,
                        data: void 0,
                        error: e.error,
                        failureCount: s.failureCount + 1,
                        failureReason: e.error,
                        isPaused: !1,
                        status: "error"
                    }
            }
        };
        this.state = i(this.state), Zt.batch(() => {
            this.#e.forEach(s => {
                s.onMutationUpdate(e)
            }), this.#n.notify({
                mutation: this,
                type: "updated",
                action: e
            })
        })
    }
};

function n1() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var UO = class extends _a {
    constructor(e = {}) {
        super(), this.config = e, this.#t = new Set, this.#e = new Map, this.#n = 0
    }#
    t;#
    e;#
    n;
    build(e, i, s) {
        const r = new jO({
            client: e,
            mutationCache: this,
            mutationId: ++this.#n,
            options: e.defaultMutationOptions(i),
            state: s
        });
        return this.add(r), r
    }
    add(e) {
        this.#t.add(e);
        const i = Nl(e);
        if (typeof i == "string") {
            const s = this.#e.get(i);
            s ? s.push(e) : this.#e.set(i, [e])
        }
        this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        if (this.#t.delete(e)) {
            const i = Nl(e);
            if (typeof i == "string") {
                const s = this.#e.get(i);
                if (s)
                    if (s.length > 1) {
                        const r = s.indexOf(e);
                        r !== -1 && s.splice(r, 1)
                    } else s[0] === e && this.#e.delete(i)
            }
        }
        this.notify({
            type: "removed",
            mutation: e
        })
    }
    canRun(e) {
        const i = Nl(e);
        if (typeof i == "string") {
            const r = this.#e.get(i) ? .find(u => u.state.status === "pending");
            return !r || r === e
        } else return !0
    }
    runNext(e) {
        const i = Nl(e);
        return typeof i == "string" ? this.#e.get(i) ? .find(r => r !== e && r.state.isPaused) ? .continue() ? ? Promise.resolve() : Promise.resolve()
    }
    clear() {
        Zt.batch(() => {
            this.#t.forEach(e => {
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }), this.#t.clear(), this.#e.clear()
        })
    }
    getAll() {
        return Array.from(this.#t)
    }
    find(e) {
        const i = {
            exact: !0,
            ...e
        };
        return this.getAll().find(s => Sv(i, s))
    }
    findAll(e = {}) {
        return this.getAll().filter(i => Sv(e, i))
    }
    notify(e) {
        Zt.batch(() => {
            this.listeners.forEach(i => {
                i(e)
            })
        })
    }
    resumePausedMutations() {
        const e = this.getAll().filter(i => i.state.isPaused);
        return Zt.batch(() => Promise.all(e.map(i => i.continue().catch(ce))))
    }
};

function Nl(e) {
    return e.options.scope ? .id
}
var zO = class extends _a {#
        t;#
        e = void 0;#
        n;#
        i;
        constructor(i, s) {
            super(), this.#t = i, this.setOptions(s), this.bindMethods(), this.#s()
        }
        bindMethods() {
            this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
        }
        setOptions(i) {
            const s = this.options;
            this.options = this.#t.defaultMutationOptions(i), lo(this.options, s) || this.#t.getMutationCache().notify({
                type: "observerOptionsUpdated",
                mutation: this.#n,
                observer: this
            }), s ? .mutationKey && this.options.mutationKey && zi(s.mutationKey) !== zi(this.options.mutationKey) ? this.reset() : this.#n ? .state.status === "pending" && this.#n.setOptions(this.options)
        }
        onUnsubscribe() {
            this.hasListeners() || this.#n ? .removeObserver(this)
        }
        onMutationUpdate(i) {
            this.#s(), this.#a(i)
        }
        getCurrentResult() {
            return this.#e
        }
        reset() {
            this.#n ? .removeObserver(this), this.#n = void 0, this.#s(), this.#a()
        }
        mutate(i, s) {
            return this.#i = s, this.#n ? .removeObserver(this), this.#n = this.#t.getMutationCache().build(this.#t, this.options), this.#n.addObserver(this), this.#n.execute(i)
        }#
        s() {
            const i = this.#n ? .state ? ? n1();
            this.#e = { ...i,
                isPending: i.status === "pending",
                isSuccess: i.status === "success",
                isError: i.status === "error",
                isIdle: i.status === "idle",
                mutate: this.mutate,
                reset: this.reset
            }
        }#
        a(i) {
            Zt.batch(() => {
                if (this.#i && this.hasListeners()) {
                    const s = this.#e.variables,
                        r = this.#e.context,
                        u = {
                            client: this.#t,
                            meta: this.options.meta,
                            mutationKey: this.options.mutationKey
                        };
                    if (i ? .type === "success") {
                        try {
                            this.#i.onSuccess ? .(i.data, s, r, u)
                        } catch (c) {
                            Promise.reject(c)
                        }
                        try {
                            this.#i.onSettled ? .(i.data, null, s, r, u)
                        } catch (c) {
                            Promise.reject(c)
                        }
                    } else if (i ? .type === "error") {
                        try {
                            this.#i.onError ? .(i.error, s, r, u)
                        } catch (c) {
                            Promise.reject(c)
                        }
                        try {
                            this.#i.onSettled ? .(void 0, i.error, s, r, u)
                        } catch (c) {
                            Promise.reject(c)
                        }
                    }
                }
                this.listeners.forEach(s => {
                    s(this.#e)
                })
            })
        }
    },
    kO = class extends _a {
        constructor(e = {}) {
            super(), this.config = e, this.#t = new Map
        }#
        t;
        build(e, i, s) {
            const r = i.queryKey,
                u = i.queryHash ? ? zh(r, i);
            let c = this.get(u);
            return c || (c = new CO({
                client: e,
                queryKey: r,
                queryHash: u,
                options: e.defaultQueryOptions(i),
                state: s,
                defaultOptions: e.getQueryDefaults(r)
            }), this.add(c)), c
        }
        add(e) {
            this.#t.has(e.queryHash) || (this.#t.set(e.queryHash, e), this.notify({
                type: "added",
                query: e
            }))
        }
        remove(e) {
            const i = this.#t.get(e.queryHash);
            i && (e.destroy(), i === e && this.#t.delete(e.queryHash), this.notify({
                type: "removed",
                query: e
            }))
        }
        clear() {
            Zt.batch(() => {
                this.getAll().forEach(e => {
                    this.remove(e)
                })
            })
        }
        get(e) {
            return this.#t.get(e)
        }
        getAll() {
            return [...this.#t.values()]
        }
        find(e) {
            const i = {
                exact: !0,
                ...e
            };
            return this.getAll().find(s => bv(i, s))
        }
        findAll(e = {}) {
            const i = this.getAll();
            return Object.keys(e).length > 0 ? i.filter(s => bv(e, s)) : i
        }
        notify(e) {
            Zt.batch(() => {
                this.listeners.forEach(i => {
                    i(e)
                })
            })
        }
        onFocus() {
            Zt.batch(() => {
                this.getAll().forEach(e => {
                    e.onFocus()
                })
            })
        }
        onOnline() {
            Zt.batch(() => {
                this.getAll().forEach(e => {
                    e.onOnline()
                })
            })
        }
    },
    VO = class {#
        t;#
        e;#
        n;#
        i;#
        s;#
        a;#
        l;#
        r;
        constructor(e = {}) {
            this.#t = e.queryCache || new kO, this.#e = e.mutationCache || new UO, this.#n = e.defaultOptions || {}, this.#i = new Map, this.#s = new Map, this.#a = 0
        }
        mount() {
            this.#a++, this.#a === 1 && (this.#l = Uh.subscribe(async e => {
                e && (await this.resumePausedMutations(), this.#t.onFocus())
            }), this.#r = oo.subscribe(async e => {
                e && (await this.resumePausedMutations(), this.#t.onOnline())
            }))
        }
        unmount() {
            this.#a--, this.#a === 0 && (this.#l ? .(), this.#l = void 0, this.#r ? .(), this.#r = void 0)
        }
        isFetching(e) {
            return this.#t.findAll({ ...e,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(e) {
            return this.#e.findAll({ ...e,
                status: "pending"
            }).length
        }
        getQueryData(e) {
            const i = this.defaultQueryOptions({
                queryKey: e
            });
            return this.#t.get(i.queryHash) ? .state.data
        }
        ensureQueryData(e) {
            const i = this.defaultQueryOptions(e),
                s = this.#t.build(this, i),
                r = s.state.data;
            return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && s.isStaleByTime(ei(i.staleTime, s)) && this.prefetchQuery(i), Promise.resolve(r))
        }
        getQueriesData(e) {
            return this.#t.findAll(e).map(({
                queryKey: i,
                state: s
            }) => {
                const r = s.data;
                return [i, r]
            })
        }
        setQueryData(e, i, s) {
            const r = this.defaultQueryOptions({
                    queryKey: e
                }),
                c = this.#t.get(r.queryHash) ? .state.data,
                f = yO(i, c);
            if (f !== void 0) return this.#t.build(this, r).setData(f, { ...s,
                manual: !0
            })
        }
        setQueriesData(e, i, s) {
            return Zt.batch(() => this.#t.findAll(e).map(({
                queryKey: r
            }) => [r, this.setQueryData(r, i, s)]))
        }
        getQueryState(e) {
            const i = this.defaultQueryOptions({
                queryKey: e
            });
            return this.#t.get(i.queryHash) ? .state
        }
        removeQueries(e) {
            const i = this.#t;
            Zt.batch(() => {
                i.findAll(e).forEach(s => {
                    i.remove(s)
                })
            })
        }
        resetQueries(e, i) {
            const s = this.#t;
            return Zt.batch(() => (s.findAll(e).forEach(r => {
                r.reset()
            }), this.refetchQueries({
                type: "active",
                ...e
            }, i)))
        }
        cancelQueries(e, i = {}) {
            const s = {
                    revert: !0,
                    ...i
                },
                r = Zt.batch(() => this.#t.findAll(e).map(u => u.cancel(s)));
            return Promise.all(r).then(ce).catch(ce)
        }
        invalidateQueries(e, i = {}) {
            return Zt.batch(() => (this.#t.findAll(e).forEach(s => {
                s.invalidate()
            }), e ? .refetchType === "none" ? Promise.resolve() : this.refetchQueries({ ...e,
                type: e ? .refetchType ? ? e ? .type ? ? "active"
            }, i)))
        }
        refetchQueries(e, i = {}) {
            const s = { ...i,
                    cancelRefetch: i.cancelRefetch ? ? !0
                },
                r = Zt.batch(() => this.#t.findAll(e).filter(u => !u.isDisabled() && !u.isStatic()).map(u => {
                    let c = u.fetch(void 0, s);
                    return s.throwOnError || (c = c.catch(ce)), u.state.fetchStatus === "paused" ? Promise.resolve() : c
                }));
            return Promise.all(r).then(ce)
        }
        fetchQuery(e) {
            const i = this.defaultQueryOptions(e);
            i.retry === void 0 && (i.retry = !1);
            const s = this.#t.build(this, i);
            return s.isStaleByTime(ei(i.staleTime, s)) ? s.fetch(i) : Promise.resolve(s.state.data)
        }
        prefetchQuery(e) {
            return this.fetchQuery(e).then(ce).catch(ce)
        }
        fetchInfiniteQuery(e) {
            return e._type = "infinite", this.fetchQuery(e)
        }
        prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(ce).catch(ce)
        }
        ensureInfiniteQueryData(e) {
            return e._type = "infinite", this.ensureQueryData(e)
        }
        resumePausedMutations() {
            return oo.isOnline() ? this.#e.resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return this.#t
        }
        getMutationCache() {
            return this.#e
        }
        getDefaultOptions() {
            return this.#n
        }
        setDefaultOptions(e) {
            this.#n = e
        }
        setQueryDefaults(e, i) {
            this.#i.set(zi(e), {
                queryKey: e,
                defaultOptions: i
            })
        }
        getQueryDefaults(e) {
            const i = [...this.#i.values()],
                s = {};
            return i.forEach(r => {
                er(e, r.queryKey) && Object.assign(s, r.defaultOptions)
            }), s
        }
        setMutationDefaults(e, i) {
            this.#s.set(zi(e), {
                mutationKey: e,
                defaultOptions: i
            })
        }
        getMutationDefaults(e) {
            const i = [...this.#s.values()],
                s = {};
            return i.forEach(r => {
                er(e, r.mutationKey) && Object.assign(s, r.defaultOptions)
            }), s
        }
        defaultQueryOptions(e) {
            if (e._defaulted) return e;
            const i = { ...this.#n.queries,
                ...this.getQueryDefaults(e.queryKey),
                ...e,
                _defaulted: !0
            };
            return i.queryHash || (i.queryHash = zh(i.queryKey, i)), i.refetchOnReconnect === void 0 && (i.refetchOnReconnect = i.networkMode !== "always"), i.throwOnError === void 0 && (i.throwOnError = !!i.suspense), !i.networkMode && i.persister && (i.networkMode = "offlineFirst"), i.queryFn === Ce && (i.enabled = !1), i
        }
        defaultMutationOptions(e) {
            return e ? ._defaulted ? e : { ...this.#n.mutations,
                ...e ? .mutationKey && this.getMutationDefaults(e.mutationKey),
                ...e,
                _defaulted : !0
            }
        }
        clear() {
            this.#t.clear(), this.#e.clear()
        }
    },
    i1 = k.createContext(void 0),
    _h = e => {
        const i = k.useContext(i1);
        if (!i) throw new Error("No QueryClient set, use QueryClientProvider to set one");
        return i
    },
    _O = ({
        client: e,
        children: i
    }) => (k.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), x.jsx(i1.Provider, {
        value: e,
        children: i
    })),
    a1 = k.createContext(!1),
    LO = () => k.useContext(a1);
a1.Provider;

function BO() {
    let e = !1;
    return {
        clearReset: () => {
            e = !1
        },
        reset: () => {
            e = !0
        },
        isReset: () => e
    }
}
var HO = k.createContext(BO()),
    qO = () => k.useContext(HO),
    PO = (e, i, s) => {
        const r = s ? .state.error && typeof e.throwOnError == "function" ? kh(e.throwOnError, [s.state.error, s]) : e.throwOnError;
        (e.suspense || e.experimental_prefetchInRender || r) && (i.isReset() || (e.retryOnMount = !1))
    },
    GO = e => {
        k.useEffect(() => {
            e.clearReset()
        }, [e])
    },
    KO = ({
        result: e,
        errorResetBoundary: i,
        throwOnError: s,
        query: r,
        suspense: u
    }) => e.isError && !i.isReset() && !e.isFetching && r && (u && e.data === void 0 || kh(s, [e.error, r])),
    QO = e => {
        if (e.suspense) {
            const s = u => u === "static" ? u : Math.max(u ? ? 1e3, 1e3),
                r = e.staleTime;
            e.staleTime = typeof r == "function" ? (...u) => s(r(...u)) : s(r), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3))
        }
    },
    YO = (e, i) => e.isLoading && e.isFetching && !i,
    XO = (e, i) => e ? .suspense && i.isPending,
    Cv = (e, i, s) => i.fetchOptimistic(e).catch(() => {
        s.clearReset()
    });

function ZO(e, i, s) {
    const r = LO(),
        u = qO(),
        c = _h(),
        f = c.defaultQueryOptions(e);
    c.getDefaultOptions().queries ? ._experimental_beforeQuery ? .(f);
    const m = c.getQueryCache().get(f.queryHash);
    f._optimisticResults = r ? "isRestoring" : "optimistic", QO(f), PO(f, u, m), GO(u);
    const d = !c.getQueryCache().get(f.queryHash),
        [p] = k.useState(() => new i(c, f)),
        y = p.getOptimisticResult(f),
        v = !r && e.subscribed !== !1;
    if (k.useSyncExternalStore(k.useCallback(S => {
            const R = v ? p.subscribe(Zt.batchCalls(S)) : ce;
            return p.updateResult(), R
        }, [p, v]), () => p.getCurrentResult(), () => p.getCurrentResult()), k.useEffect(() => {
            p.setOptions(f)
        }, [f, p]), XO(f, y)) throw Cv(f, p, u);
    if (KO({
            result: y,
            errorResetBoundary: u,
            throwOnError: f.throwOnError,
            query: m,
            suspense: f.suspense
        })) throw y.error;
    return c.getDefaultOptions().queries ? ._experimental_afterQuery ? .(f, y), f.experimental_prefetchInRender && !nr.isServer() && YO(y, r) && (d ? Cv(f, p, u) : m ? .promise) ? .catch(ce).finally(() => {
        p.updateResult()
    }), f.notifyOnChangeProps ? y : p.trackResult(y)
}

function ur(e, i) {
    return ZO(e, MO)
}

function Lh(e, i) {
    const s = _h(),
        [r] = k.useState(() => new zO(s, e));
    k.useEffect(() => {
        r.setOptions(e)
    }, [r, e]);
    const u = k.useSyncExternalStore(k.useCallback(f => r.subscribe(Zt.batchCalls(f)), [r]), () => r.getCurrentResult(), () => r.getCurrentResult()),
        c = k.useCallback((f, m) => {
            r.mutate(f, m).catch(ce)
        }, [r]);
    if (u.error && kh(r.options.throwOnError, [u.error])) throw u.error;
    return { ...u,
        mutate: c,
        mutateAsync: u.mutate
    }
}

function FO(e) {
    return e[0] ? ? {}
}

function ir(e) {
    return Array.isArray(e) ? e : e == null ? [] : [e]
}
const Mv = "orpc",
    IO = "@orpc/shared",
    JO = "1.14.7";
class WO extends Error {
    constructor(...i) {
        super(...i), this.name = "AbortError"
    }
}

function $O(e) {
    let i;
    return () => {
        if (i) return i.result;
        const s = e();
        return i = {
            result: s
        }, s
    }
}

function tC(e) {
    let i = Promise.resolve();
    return (...s) => i = i.catch(() => {}).then(() => e(...s))
}
const eC = 2,
    nC = `__${IO}@${JO}/otel/config__`;

function xo() {
    return globalThis[nC]
}

function Bh(e, i = {}, s) {
    return xo() ? .tracer ? .startSpan(e, i, s)
}

function ki(e, i, s = {}) {
    if (!e) return;
    const r = iC(i);
    e.recordException(r), (!s.signal ? .aborted || s.signal.reason !== i) && e.setStatus({
        code: eC,
        message: r.message
    })
}

function iC(e) {
    if (e instanceof Error) {
        const i = {
            message: e.message,
            name: e.name,
            stack: e.stack
        };
        return "code" in e && (typeof e.code == "string" || typeof e.code == "number") && (i.code = e.code), i
    }
    return {
        message: String(e)
    }
}
async function Gs({
    name: e,
    context: i,
    ...s
}, r) {
    const u = xo() ? .tracer;
    if (!u) return r();
    const c = async f => {
        try {
            return await r(f)
        } catch (m) {
            throw ki(f, m, s), m
        } finally {
            f.end()
        }
    };
    return i ? u.startActiveSpan(e, s, i, c) : u.startActiveSpan(e, s, c)
}
async function Na(e, i) {
    const s = xo();
    if (!e || !s) return i();
    const r = s.trace.setSpan(s.context.active(), e);
    return s.context.with(r, i)
}

function si(e) {
    return !e || typeof e != "object" ? !1 : "next" in e && typeof e.next == "function" && Symbol.asyncIterator in e && typeof e[Symbol.asyncIterator] == "function"
}
const aC = Symbol.for("asyncDispose"),
    sC = Symbol.asyncDispose ? ? aC;
class Hh {#
    t = !1;#
    e = !1;#
    n;#
    i;
    constructor(i, s) {
        this.#n = s, this.#i = tC(async () => {
            if (this.#t) return {
                done: !0,
                value: void 0
            };
            try {
                const r = await i();
                return r.done && (this.#t = !0), r
            } catch (r) {
                throw this.#t = !0, r
            } finally {
                this.#t && !this.#e && (this.#e = !0, await this.#n("next"))
            }
        })
    }
    next() {
        return this.#i()
    }
    async
    return (i) {
        return this.#t = !0, this.#e || (this.#e = !0, await this.#n("return")), {
            done: !0,
            value: i
        }
    }
    async
    throw (i) {
        throw this.#t = !0, this.#e || (this.#e = !0, await this.#n("throw")), i
    }
    async [sC]() {
        this.#t = !0, this.#e || (this.#e = !0, await this.#n("dispose"))
    }[Symbol.asyncIterator]() {
        return this
    }
}

function Dv({
    name: e,
    ...i
}, s) {
    let r;
    return new Hh(async () => {
        r ? ? = Bh(e);
        try {
            const u = await Na(r, () => s.next());
            return r ? .addEvent(u.done ? "completed" : "yielded"), u
        } catch (u) {
            throw ki(r, u, i), u
        }
    }, async u => {
        try {
            u !== "next" && await Na(r, () => s.return ? .())
        } catch (c) {
            throw ki(r, c, i), c
        } finally {
            r ? .end()
        }
    })
}

function Jf(e, i, s) {
    const r = (u, c) => {
        const f = e[c];
        return f ? f({ ...u,
            next: (m = u) => r(m, c + 1)
        }) : s(u)
    };
    return r(i, 0)
}

function Yl(e) {
    if (e) return JSON.parse(e)
}

function ja(e) {
    return JSON.stringify(e)
}

function rC(e) {
    return Vi(e) ? Object.getPrototypeOf(e) ? .constructor : null
}

function s1(e) {
    if (!e || typeof e != "object") return !1;
    const i = Object.getPrototypeOf(e);
    return i === Object.prototype || !i || !i.constructor
}

function Vi(e) {
    return !!e && (typeof e == "object" || typeof e == "function")
}

function lC(e, i) {
    let s = e;
    for (const r of i) {
        if (!Vi(s)) return;
        s = s[r]
    }
    return s
}

function jl(e, ...i) {
    return typeof e == "function" ? e(...i) : e
}

function r1(e) {
    return new Proxy(e, {
        get(i, s, r) {
            const u = Reflect.get(i, s, r);
            return s !== "then" || typeof u != "function" ? u : new Proxy(u, {
                apply(c, f, m) {
                    if (m.length !== 2 || m.some(p => !uC(p))) return Reflect.apply(c, f, m);
                    let d = !0;
                    m[0].call(f, r1(new Proxy(i, {
                        get: (p, y, v) => {
                            if (d && y === "then") {
                                d = !1;
                                return
                            }
                            return Reflect.get(p, y, v)
                        }
                    })))
                }
            })
        }
    })
}
const oC = /^\s*function\s*\(\)\s*\{\s*\[native code\]\s*\}\s*$/;

function uC(e) {
    return typeof e == "function" && oC.test(e.toString())
}

function cC(e) {
    try {
        return decodeURIComponent(e)
    } catch {
        return e
    }
}
const fC = "@orpc/client",
    hC = "1.14.7",
    qh = {
        BAD_REQUEST: {
            status: 400,
            message: "Bad Request"
        },
        UNAUTHORIZED: {
            status: 401,
            message: "Unauthorized"
        },
        FORBIDDEN: {
            status: 403,
            message: "Forbidden"
        },
        NOT_FOUND: {
            status: 404,
            message: "Not Found"
        },
        METHOD_NOT_SUPPORTED: {
            status: 405,
            message: "Method Not Supported"
        },
        NOT_ACCEPTABLE: {
            status: 406,
            message: "Not Acceptable"
        },
        TIMEOUT: {
            status: 408,
            message: "Request Timeout"
        },
        CONFLICT: {
            status: 409,
            message: "Conflict"
        },
        PRECONDITION_FAILED: {
            status: 412,
            message: "Precondition Failed"
        },
        PAYLOAD_TOO_LARGE: {
            status: 413,
            message: "Payload Too Large"
        },
        UNSUPPORTED_MEDIA_TYPE: {
            status: 415,
            message: "Unsupported Media Type"
        },
        UNPROCESSABLE_CONTENT: {
            status: 422,
            message: "Unprocessable Content"
        },
        TOO_MANY_REQUESTS: {
            status: 429,
            message: "Too Many Requests"
        },
        CLIENT_CLOSED_REQUEST: {
            status: 499,
            message: "Client Closed Request"
        },
        INTERNAL_SERVER_ERROR: {
            status: 500,
            message: "Internal Server Error"
        },
        NOT_IMPLEMENTED: {
            status: 501,
            message: "Not Implemented"
        },
        BAD_GATEWAY: {
            status: 502,
            message: "Bad Gateway"
        },
        SERVICE_UNAVAILABLE: {
            status: 503,
            message: "Service Unavailable"
        },
        GATEWAY_TIMEOUT: {
            status: 504,
            message: "Gateway Timeout"
        }
    };

function dC(e, i) {
    return i ? ? qh[e] ? .status ? ? 500
}

function mC(e, i) {
    return i || qh[e] ? .message || e
}
let Ul;
const Qh = class Qh extends Error {
    defined;
    code;
    status;
    data;
    constructor(i, ...s) {
        const r = FO(s);
        if (r.status !== void 0 && !Ph(r.status)) throw new Error("[ORPCError] Invalid error status code.");
        const u = mC(i, r.message);
        super(u, r), this.code = i, this.status = dC(i, r.status), this.defined = r.defined ? ? !1, this.data = r.data
    }
    toJSON() {
        return {
            defined: this.defined,
            code: this.code,
            status: this.status,
            message: this.message,
            data: this.data
        }
    }
    static[Symbol.hasInstance](i) {
        if (Ul.has(this)) {
            const s = rC(i);
            if (s && Ul.has(s)) return !0
        }
        return super[Symbol.hasInstance](i)
    }
};
(() => {
    const i = Symbol.for(`__${fC}@${hC}/error/ORPC_ERROR_CONSTRUCTORS__`);
    globalThis[i] ? ? = new WeakSet, Ul = globalThis[i], Ul.add(Qh)
})();
let Ua = Qh;

function pC(e) {
    return e instanceof Ua ? e : new Ua("INTERNAL_SERVER_ERROR", {
        message: "Internal server error",
        cause: e
    })
}

function Ph(e) {
    return e < 200 || e >= 400
}

function l1(e) {
    if (!s1(e)) return !1;
    const i = ["defined", "code", "status", "message", "data"];
    return Object.keys(e).some(s => !i.includes(s)) ? !1 : "defined" in e && typeof e.defined == "boolean" && "code" in e && typeof e.code == "string" && "status" in e && typeof e.status == "number" && Ph(e.status) && "message" in e && typeof e.message == "string"
}

function o1(e, i = {}) {
    return new Ua(e.code, { ...i,
        ...e
    })
}
class To extends TypeError {}
class yC extends TypeError {}
class Ca extends Error {
    data;
    constructor(i) {
        super(i ? .message ? ? "An error event was received", i), this.data = i ? .data
    }
}

function gC(e) {
    const i = e.replace(/\n+$/, "").split(/\n/),
        s = {
            data: void 0,
            event: void 0,
            id: void 0,
            retry: void 0,
            comments: []
        };
    for (const r of i) {
        const u = r.indexOf(":"),
            c = u === -1 ? r : r.slice(0, u),
            f = u === -1 ? "" : r.slice(u + 1).replace(/^\s/, "");
        if (u === 0) s.comments.push(f);
        else if (c === "data") s.data ? ? = "", s.data += `${f}
`;
        else if (c === "event") s.event = f;
        else if (c === "id") s.id = f;
        else if (c === "retry") {
            const m = Number.parseInt(f);
            Number.isInteger(m) && m >= 0 && m.toString() === f && (s.retry = m)
        }
    }
    return s.data = s.data ? .replace(/\n$/, ""), s
}
class vC {
    constructor(i = {}) {
        this.options = i
    }
    incomplete = "";
    feed(i) {
        this.incomplete += i;
        const s = this.incomplete.lastIndexOf(`

`);
        if (s === -1) return;
        const r = this.incomplete.slice(0, s).split(/\n\n/);
        this.incomplete = this.incomplete.slice(s + 2);
        for (const u of r) {
            const c = gC(`${u}

`);
            this.options.onEvent && this.options.onEvent(c)
        }
    }
    end() {
        if (this.incomplete) throw new yC("Event Iterator ended before complete")
    }
}
class bC extends TransformStream {
    constructor() {
        let i;
        super({
            start(s) {
                i = new vC({
                    onEvent: r => {
                        s.enqueue(r)
                    }
                })
            },
            transform(s) {
                i.feed(s)
            },
            flush() {
                i.end()
            }
        })
    }
}

function u1(e) {
    if (e.includes(`
`)) throw new To("Event's id must not contain a newline character")
}

function SC(e) {
    if (e.includes(`
`)) throw new To("Event's event must not contain a newline character")
}

function c1(e) {
    if (!Number.isInteger(e) || e < 0) throw new To("Event's retry must be a integer and >= 0")
}

function f1(e) {
    if (e.includes(`
`)) throw new To("Event's comment must not contain a newline character")
}

function xC(e) {
    const i = e ? .split(/\n/) ? ? [];
    let s = "";
    for (const r of i) s += `data: ${r}
`;
    return s
}

function TC(e) {
    let i = "";
    for (const s of e ? ? []) f1(s), i += `: ${s}
`;
    return i
}

function zl(e) {
    let i = "";
    return i += TC(e.comments), e.event !== void 0 && (SC(e.event), i += `event: ${e.event}
`), e.retry !== void 0 && (c1(e.retry), i += `retry: ${e.retry}
`), e.id !== void 0 && (u1(e.id), i += `id: ${e.id}
`), i += xC(e.data), i += `
`, i
}
const h1 = Symbol("ORPC_EVENT_SOURCE_META");

function Fs(e, i) {
    if (i.id === void 0 && i.retry === void 0 && !i.comments ? .length) return e;
    if (i.id !== void 0 && u1(i.id), i.retry !== void 0 && c1(i.retry), i.comments !== void 0)
        for (const s of i.comments) f1(s);
    return new Proxy(e, {
        get(s, r, u) {
            return r === h1 ? i : Reflect.get(s, r, u)
        }
    })
}

function uo(e) {
    return Vi(e) ? Reflect.get(e, h1) : void 0
}

function wC(e, i = "inline") {
    const s = e.replace(/[^\x20-\x7E]/g, "_").replace(/"/g, '\\"'),
        r = encodeURIComponent(e).replace(/['()*]/g, u => `%${u.charCodeAt(0).toString(16).toUpperCase()}`).replace(/%(7C|60|5E)/g, (u, c) => String.fromCharCode(Number.parseInt(c, 16)));
    return `${i}; filename="${s}"; filename*=utf-8''${r}`
}

function EC(e) {
    const i = e.match(/filename\*=(UTF-8'')?([^;]*)/i);
    if (i && typeof i[2] == "string") return cC(i[2]);
    const s = e.match(/filename="((?:\\"|[^"])*)"/i);
    if (s && typeof s[1] == "string") return s[1].replace(/\\"/g, '"')
}

function AC(e, i) {
    const s = { ...e
    };
    for (const r in i) Array.isArray(i[r]) ? s[r] = [...ir(s[r]), ...i[r]] : i[r] !== void 0 && (Array.isArray(s[r]) ? s[r] = [...s[r], i[r]] : s[r] !== void 0 ? s[r] = [s[r], i[r]] : s[r] = i[r]);
    return s
}

function Nv(e, i) {
    const s = async r => {
        let u = await i.error(r);
        if (u !== r) {
            const c = uo(r);
            c && Vi(u) && (u = Fs(u, c))
        }
        return u
    };
    return new Hh(async () => {
        const {
            done: r,
            value: u
        } = await (async () => {
            try {
                return await e.next()
            } catch (f) {
                throw await s(f)
            }
        })();
        let c = await i.value(u, r);
        if (c !== u) {
            const f = uo(u);
            f && Vi(c) && (c = Fs(c, f))
        }
        return {
            done: r,
            value: c
        }
    }, async () => {
        try {
            await e.return ? .()
        } catch (r) {
            throw await s(r)
        }
    })
}

function RC(e) {
    return { ...e,
        context: e.context ? ? {}
    }
}

function d1(e, i = {}) {
    const s = i.path ? ? [],
        r = async (...[c, f = {}]) => await e.call(s, c, RC(f)),
        u = new Proxy(r, {
            get(c, f) {
                return typeof f != "string" ? Reflect.get(c, f) : d1(e, { ...i,
                    path: [...s, f]
                })
            }
        });
    return r1(u)
}

function OC(e, i = {}) {
    const r = e ? .pipeThrough(new TextDecoderStream).pipeThrough(new bC) ? .getReader();
    let u, c = !1;
    return new Hh(async () => {
        u ? ? = Bh("consume_event_iterator_stream");
        try {
            for (;;) {
                if (r === void 0) return {
                    done: !0,
                    value: void 0
                };
                const {
                    done: f,
                    value: m
                } = await Na(u, () => r.read());
                if (f) {
                    if (c) throw new WO("Stream was cancelled");
                    return {
                        done: !0,
                        value: void 0
                    }
                }
                switch (m.event) {
                    case "message":
                        {
                            let d = Yl(m.data);
                            return Vi(d) && (d = Fs(d, m)),
                            u ? .addEvent("message"),
                            {
                                done: !1,
                                value: d
                            }
                        }
                    case "error":
                        {
                            let d = new Ca({
                                data: Yl(m.data)
                            });
                            throw d = Fs(d, m),
                            u ? .addEvent("error"),
                            d
                        }
                    case "done":
                        {
                            let d = Yl(m.data);
                            return Vi(d) && (d = Fs(d, m)),
                            u ? .addEvent("done"),
                            {
                                done: !0,
                                value: d
                            }
                        }
                    default:
                        u ? .addEvent("maybe_keepalive")
                }
            }
        } catch (f) {
            throw f instanceof Ca || ki(u, f, i), f
        }
    }, async f => {
        try {
            f !== "next" && (c = !0, u ? .addEvent("cancelled")), await Na(u, () => r ? .cancel())
        } catch (m) {
            throw ki(u, m, i), m
        } finally {
            u ? .end()
        }
    })
}

function CC(e, i = {}) {
    const s = i.eventIteratorKeepAliveEnabled ? ? !0,
        r = i.eventIteratorKeepAliveInterval ? ? 5e3,
        u = i.eventIteratorKeepAliveComment ? ? "",
        c = i.eventIteratorInitialCommentEnabled ? ? !0,
        f = i.eventIteratorInitialComment ? ? "";
    let m = !1,
        d, p;
    return new ReadableStream({
        start(v) {
            p = Bh("stream_event_iterator"), c && v.enqueue(zl({
                comments: [f]
            }))
        },
        async pull(v) {
            try {
                s && (d = setInterval(() => {
                    v.enqueue(zl({
                        comments: [u]
                    })), p ? .addEvent("keepalive")
                }, r));
                const S = await Na(p, () => e.next());
                if (clearInterval(d), m) return;
                const R = uo(S.value);
                if (!S.done || S.value !== void 0 || R !== void 0) {
                    const w = S.done ? "done" : "message";
                    v.enqueue(zl({ ...R,
                        event: w,
                        data: ja(S.value)
                    })), p ? .addEvent(w)
                }
                S.done && (v.close(), p ? .end())
            } catch (S) {
                if (clearInterval(d), m) return;
                S instanceof Ca ? (v.enqueue(zl({ ...uo(S),
                    event: "error",
                    data: ja(S.data)
                })), p ? .addEvent("error"), v.close()) : (ki(p, S), v.error(S)), p ? .end()
            }
        },
        async cancel() {
            try {
                m = !0, clearInterval(d), p ? .addEvent("cancelled"), await Na(p, () => e.return ? .())
            } catch (v) {
                throw ki(p, v), v
            } finally {
                p ? .end()
            }
        }
    }).pipeThrough(new TextEncoderStream)
}

function MC(e, i = {}) {
    return Gs({
        name: "parse_standard_body",
        signal: i.signal
    }, async () => {
        const s = e.headers.get("content-disposition");
        if (typeof s == "string") {
            const c = EC(s) ? ? "blob",
                f = await e.blob();
            return new File([f], c, {
                type: f.type
            })
        }
        const r = e.headers.get("content-type");
        if (!r || r.startsWith("application/json")) {
            const c = await e.text();
            return Yl(c)
        }
        if (r.startsWith("multipart/form-data")) return await e.formData();
        if (r.startsWith("application/x-www-form-urlencoded")) {
            const c = await e.text();
            return new URLSearchParams(c)
        }
        if (r.startsWith("text/event-stream")) return OC(e.body, i);
        if (r.startsWith("text/plain")) return await e.text();
        const u = await e.blob();
        return new File([u], "blob", {
            type: u.type
        })
    })
}

function DC(e, i, s = {}) {
    if (e instanceof ReadableStream) return e;
    const r = i.get("content-disposition");
    if (i.delete("content-type"), i.delete("content-disposition"), e !== void 0) return e instanceof Blob ? (i.set("content-type", e.type), i.set("content-length", e.size.toString()), i.set("content-disposition", r ? ? wC(e instanceof File ? e.name : "blob")), e) : e instanceof FormData || e instanceof URLSearchParams ? e : si(e) ? (i.set("content-type", "text/event-stream"), CC(e, s)) : (i.set("content-type", "application/json"), ja(e))
}

function m1(e, i = {}) {
    return e.forEach((s, r) => {
        Array.isArray(i[r]) ? i[r].push(s) : i[r] !== void 0 ? i[r] = [i[r], s] : i[r] = s
    }), i
}

function NC(e, i = new Headers) {
    for (const [s, r] of Object.entries(e))
        if (Array.isArray(r))
            for (const u of r) i.append(s, u);
        else r !== void 0 && i.append(s, r);
    return i
}

function jC(e, i = {}) {
    const s = NC(e.headers),
        r = DC(e.body, s, i);
    return new Request(e.url, {
        signal: e.signal,
        method: e.method,
        headers: s,
        body: r
    })
}

function UC(e, i = {}) {
    return {
        body: $O(() => MC(e, i)),
        status: e.status,
        get headers() {
            const s = m1(e.headers);
            return Object.defineProperty(this, "headers", {
                value: s,
                writable: !0
            }), s
        },
        set headers(s) {
            Object.defineProperty(this, "headers", {
                value: s,
                writable: !0
            })
        }
    }
}
class p1 {
    plugins;
    constructor(i = []) {
        this.plugins = [...i].sort((s, r) => (s.order ? ? 0) - (r.order ? ? 0))
    }
    init(i) {
        for (const s of this.plugins) s.init ? .(i)
    }
}
class zC {
    constructor(i, s, r = {}) {
        this.codec = i, this.sender = s, new p1(r.plugins).init(r), this.interceptors = ir(r.interceptors), this.clientInterceptors = ir(r.clientInterceptors)
    }
    interceptors;
    clientInterceptors;
    call(i, s, r) {
        return Gs({
            name: `${Mv}.${i.join("/")}`,
            signal: r.signal
        }, u => (u ? .setAttribute("rpc.system", Mv), u ? .setAttribute("rpc.method", i.join(".")), si(s) && (s = Dv({
            name: "consume_event_iterator_input",
            signal: r.signal
        }, s)), Jf(this.interceptors, { ...r,
            path: i,
            input: s
        }, async ({
            path: c,
            input: f,
            ...m
        }) => {
            const d = xo();
            let p;
            const y = d ? .trace.getActiveSpan() ? ? u;
            y && d && (p = d ? .trace.setSpan(d.context.active(), y));
            const v = await Gs({
                    name: "encode_request",
                    context: p
                }, () => this.codec.encode(c, f, m)),
                S = await Jf(this.clientInterceptors, { ...m,
                    input: f,
                    path: c,
                    request: v
                }, ({
                    input: w,
                    path: C,
                    request: D,
                    ...V
                }) => Gs({
                    name: "send_request",
                    signal: V.signal,
                    context: p
                }, () => this.sender.call(D, V, C, w))),
                R = await Gs({
                    name: "decode_response",
                    context: p
                }, () => this.codec.decode(S, m, c, f));
            return si(R) ? Dv({
                name: "consume_event_iterator_output",
                signal: m.signal
            }, R) : R
        })))
    }
}
const oe = {
    BIGINT: 0,
    DATE: 1,
    NAN: 2,
    UNDEFINED: 3,
    URL: 4,
    REGEXP: 5,
    SET: 6,
    MAP: 7
};
class kC {
    customSerializers;
    constructor(i = {}) {
        if (this.customSerializers = i.customJsonSerializers ? ? [], this.customSerializers.length !== new Set(this.customSerializers.map(s => s.type)).size) throw new Error("Custom serializer type must be unique.")
    }
    serialize(i, s = [], r = [], u = [], c = []) {
        for (const f of this.customSerializers)
            if (f.condition(i)) {
                const m = this.serialize(f.serialize(i), s, r, u, c);
                return r.push([f.type, ...s]), m
            }
        if (i instanceof Blob) return u.push(s), c.push(i), [i, r, u, c];
        if (typeof i == "bigint") return r.push([oe.BIGINT, ...s]), [i.toString(), r, u, c];
        if (i instanceof Date) return r.push([oe.DATE, ...s]), Number.isNaN(i.getTime()) ? [null, r, u, c] : [i.toISOString(), r, u, c];
        if (Number.isNaN(i)) return r.push([oe.NAN, ...s]), [null, r, u, c];
        if (i instanceof URL) return r.push([oe.URL, ...s]), [i.toString(), r, u, c];
        if (i instanceof RegExp) return r.push([oe.REGEXP, ...s]), [i.toString(), r, u, c];
        if (i instanceof Set) {
            const f = this.serialize(Array.from(i), s, r, u, c);
            return r.push([oe.SET, ...s]), f
        }
        if (i instanceof Map) {
            const f = this.serialize(Array.from(i.entries()), s, r, u, c);
            return r.push([oe.MAP, ...s]), f
        }
        if (Array.isArray(i)) return [i.map((m, d) => m === void 0 ? (r.push([oe.UNDEFINED, ...s, d]), null) : this.serialize(m, [...s, d], r, u, c)[0]), r, u, c];
        if (s1(i)) {
            const f = {};
            for (const m in i) m === "toJSON" && typeof i[m] == "function" || (f[m] = this.serialize(i[m], [...s, m], r, u, c)[0]);
            return [f, r, u, c]
        }
        return [i, r, u, c]
    }
    deserialize(i, s, r, u) {
        const c = {
            data: i
        };
        r && u && r.forEach((f, m) => {
            let d = c,
                p = "data";
            f.forEach(y => {
                if (d = d[p], p = y, !Object.hasOwn(d, p)) throw new Error(`Security error: accessing non-existent path during deserialization. Path segment: ${p}`)
            }), d[p] = u(m)
        });
        for (const f of s) {
            const m = f[0];
            let d = c,
                p = "data";
            for (let y = 1; y < f.length; y++)
                if (d = d[p], p = f[y], !Object.hasOwn(d, p)) throw new Error(`Security error: accessing non-existent path during deserialization. Path segment: ${p}`);
            for (const y of this.customSerializers)
                if (y.type === m) {
                    d[p] = y.deserialize(d[p]);
                    break
                }
            switch (m) {
                case oe.BIGINT:
                    d[p] = BigInt(d[p]);
                    break;
                case oe.DATE:
                    d[p] = new Date(d[p] ? ? "Invalid Date");
                    break;
                case oe.NAN:
                    d[p] = Number.NaN;
                    break;
                case oe.UNDEFINED:
                    d[p] = void 0;
                    break;
                case oe.URL:
                    d[p] = new URL(d[p]);
                    break;
                case oe.REGEXP:
                    {
                        const [, y, v] = d[p].match(/^\/(.*)\/([a-z]*)$/);d[p] = new RegExp(y, v);
                        break
                    }
                case oe.SET:
                    d[p] = new Set(d[p]);
                    break;
                case oe.MAP:
                    d[p] = new Map(d[p]);
                    break
            }
        }
        return c.data
    }
}

function VC(e) {
    return `/${e.map(encodeURIComponent).join("/")}`
}

function _C(e) {
    return typeof e.forEach == "function" ? m1(e) : e
}

function LC(e) {
    return Object.entries(qh).find(([, i]) => i.status === e) ? .[0] ? ? "MALFORMED_ORPC_ERROR_RESPONSE"
}
class BC {
    constructor(i, s) {
        this.serializer = i, this.baseUrl = s.url, this.maxUrlLength = s.maxUrlLength ? ? 2083, this.fallbackMethod = s.fallbackMethod ? ? "POST", this.expectedMethod = s.method ? ? this.fallbackMethod, this.headers = s.headers ? ? {}
    }
    baseUrl;
    maxUrlLength;
    fallbackMethod;
    expectedMethod;
    headers;
    async encode(i, s, r) {
        let u = _C(await jl(this.headers, r, i, s));
        r.lastEventId !== void 0 && (u = AC(u, {
            "last-event-id": r.lastEventId
        }));
        const c = await jl(this.expectedMethod, r, i, s),
            f = await jl(this.baseUrl, r, i, s),
            m = new URL(f);
        m.pathname = `${m.pathname.replace(/\/$/,"")}${VC(i)}`;
        const d = this.serializer.serialize(s);
        if (c === "GET" && !(d instanceof FormData) && !si(d)) {
            const p = await jl(this.maxUrlLength, r, i, s),
                y = new URL(m);
            if (y.searchParams.append("data", ja(d)), y.toString().length <= p) return {
                body: void 0,
                method: c,
                headers: u,
                url: y,
                signal: r.signal
            }
        }
        return {
            url: m,
            method: c === "GET" ? this.fallbackMethod : c,
            headers: u,
            body: d,
            signal: r.signal
        }
    }
    async decode(i) {
        const s = !Ph(i.status),
            r = await (async () => {
                let u = !1;
                try {
                    const c = await i.body();
                    return u = !0, this.serializer.deserialize(c)
                } catch (c) {
                    throw u ? new Error("Invalid RPC response format.", {
                        cause: c
                    }) : new Error("Cannot parse response body, please check the response body and content-type.", {
                        cause: c
                    })
                }
            })();
        if (!s) throw l1(r) ? o1(r) : new Ua(LC(i.status), {
            status: i.status,
            data: { ...i,
                body: r
            }
        });
        return r
    }
}
class HC {
    constructor(i) {
        this.jsonSerializer = i
    }
    serialize(i) {
        return si(i) ? Nv(i, {
            value: async s => this.#t(s, !1),
            error: async s => new Ca({
                data: this.#t(pC(s).toJSON(), !1),
                cause: s
            })
        }) : this.#t(i, !0)
    }#
    t(i, s) {
        const [r, u, c, f] = this.jsonSerializer.serialize(i), m = u.length === 0 ? void 0 : u;
        if (!s || f.length === 0) return {
            json: r,
            meta: m
        };
        const d = new FormData;
        return d.set("data", ja({
            json: r,
            meta: m,
            maps: c
        })), f.forEach((p, y) => {
            d.set(y.toString(), p)
        }), d
    }
    deserialize(i) {
        return si(i) ? Nv(i, {
            value: async s => this.#e(s),
            error: async s => {
                if (!(s instanceof Ca)) return s;
                const r = this.#e(s.data);
                return l1(r) ? o1(r, {
                    cause: s
                }) : new Ca({
                    data: r,
                    cause: s
                })
            }
        }) : this.#e(i)
    }#
    e(i) {
        if (i === void 0) return;
        if (!(i instanceof FormData)) return this.jsonSerializer.deserialize(i.json, i.meta ? ? []);
        const s = JSON.parse(i.get("data"));
        return this.jsonSerializer.deserialize(s.json, s.meta ? ? [], s.maps, r => i.get(r.toString()))
    }
}
class qC extends zC {
    constructor(i, s) {
        const r = new kC(s),
            u = new HC(r),
            c = new BC(u, s);
        super(c, i, s)
    }
}
class PC extends p1 {
    initRuntimeAdapter(i) {
        for (const s of this.plugins) s.initRuntimeAdapter ? .(i)
    }
}
class GC {
    fetch;
    toFetchRequestOptions;
    adapterInterceptors;
    constructor(i) {
        new PC(i.plugins).initRuntimeAdapter(i), this.fetch = i.fetch ? ? globalThis.fetch.bind(globalThis), this.toFetchRequestOptions = i, this.adapterInterceptors = ir(i.adapterInterceptors)
    }
    async call(i, s, r, u) {
        const c = jC(i, this.toFetchRequestOptions),
            f = await Jf(this.adapterInterceptors, { ...s,
                request: c,
                path: r,
                input: u,
                init: {
                    redirect: "manual"
                }
            }, ({
                request: d,
                path: p,
                input: y,
                init: v,
                ...S
            }) => this.fetch(d, v, S, p, y));
        return UC(f, {
            signal: c.signal
        })
    }
}
class KC extends qC {
    constructor(i) {
        const s = new GC(i);
        super(s, i)
    }
}

function wa(e, i = {}) {
    return [e, { ...i.input !== void 0 ? {
            input: i.input
        } : {},
        ...i.type !== void 0 ? {
            type: i.type
        } : {},
        ...i.fnOptions !== void 0 ? {
            fnOptions: i.fnOptions
        } : {}
    }]
}

function QC(e) {
    return {
        key(i) {
            return wa(e, i)
        }
    }
}

function YC(e) {
    return async i => {
        const s = await e(i);
        let r;
        for await (const u of s) {
            if (i.signal.aborted) throw i.signal.reason;
            r = {
                chunk: u
            }, i.client.setQueryData(i.queryKey, u)
        }
        if (!r) throw new Error(`Live query for ${ja(i.queryKey)} did not yield any data. Ensure the query function returns an AsyncIterable with at least one chunk.`);
        return r.chunk
    }
}

function XC(e, {
    refetchMode: i = "reset",
    maxChunks: s = Number.POSITIVE_INFINITY
} = {}) {
    return async r => {
        const u = r.client.getQueryCache().find({
                queryKey: r.queryKey,
                exact: !0
            }),
            c = !!u && u.state.data !== void 0;
        c && (i === "reset" ? u.setState({
            status: "pending",
            data: void 0,
            error: null,
            fetchStatus: "fetching"
        }) : r.client.setQueryData(r.queryKey, (y = []) => Ls(y, s)));
        let f = [];
        const m = await e(r),
            d = !c || i !== "replace";
        r.client.setQueryData(r.queryKey, (y = []) => Ls(y, s));
        for await (const y of m) {
            if (r.signal.aborted) throw r.signal.reason;
            f.push(y), f = Ls(f, s), d && r.client.setQueryData(r.queryKey, (v = []) => Ls([...v, y], s))
        }
        d || r.client.setQueryData(r.queryKey, f);
        const p = r.client.getQueryData(r.queryKey);
        return p ? Ls(p, s) : f
    }
}

function Ls(e, i) {
    return e.length <= i ? e : e.slice(e.length - i)
}
const Bs = Symbol("ORPC_OPERATION_CONTEXT");

function ZC(e, i) {
    const s = {
        call: e,
        queryKey(...[r = {}]) {
            return r = { ...i.experimental_defaults ? .queryKey,
                ...r
            }, r.queryKey ? ? wa(i.path, {
                type: "query",
                input: r.input
            })
        },
        queryOptions(...[r = {}]) {
            r = { ...i.experimental_defaults ? .queryOptions,
                ...r
            };
            const u = s.queryKey(r);
            return {
                queryFn: ({
                    signal: c
                }) => {
                    if (r.input === Ce) throw new Error("queryFn should not be called with skipToken used as input");
                    return e(r.input, {
                        signal: c,
                        context: {
                            [Bs]: {
                                key: u,
                                type: "query"
                            },
                            ...r.context
                        }
                    })
                },
                ...r.input === Ce ? {
                    enabled: !1
                } : {},
                ...r,
                queryKey: u
            }
        },
        experimental_streamedKey(...[r = {}]) {
            return r = { ...i.experimental_defaults ? .experimental_streamedKey,
                ...r
            }, r.queryKey ? ? wa(i.path, {
                type: "streamed",
                input: r.input,
                fnOptions: r.queryFnOptions
            })
        },
        experimental_streamedOptions(...[r = {}]) {
            r = { ...i.experimental_defaults ? .experimental_streamedOptions,
                ...r
            };
            const u = s.experimental_streamedKey(r);
            return {
                queryFn: XC(async ({
                    signal: c
                }) => {
                    if (r.input === Ce) throw new Error("queryFn should not be called with skipToken used as input");
                    const f = await e(r.input, {
                        signal: c,
                        context: {
                            [Bs]: {
                                key: u,
                                type: "streamed"
                            },
                            ...r.context
                        }
                    });
                    if (!si(f)) throw new Error("streamedQuery requires an event iterator output");
                    return f
                }, r.queryFnOptions),
                ...r.input === Ce ? {
                    enabled: !1
                } : {},
                ...r,
                queryKey: u
            }
        },
        experimental_liveKey(...[r = {}]) {
            return r = { ...i.experimental_defaults ? .experimental_liveKey,
                ...r
            }, r.queryKey ? ? wa(i.path, {
                type: "live",
                input: r.input
            })
        },
        experimental_liveOptions(...[r = {}]) {
            r = { ...i.experimental_defaults ? .experimental_liveOptions,
                ...r
            };
            const u = s.experimental_liveKey(r);
            return {
                queryFn: YC(async ({
                    signal: c
                }) => {
                    if (r.input === Ce) throw new Error("queryFn should not be called with skipToken used as input");
                    const f = await e(r.input, {
                        signal: c,
                        context: {
                            [Bs]: {
                                key: u,
                                type: "live"
                            },
                            ...r.context
                        }
                    });
                    if (!si(f)) throw new Error("liveQuery requires an event iterator output");
                    return f
                }),
                ...r.input === Ce ? {
                    enabled: !1
                } : {},
                ...r,
                queryKey: u
            }
        },
        infiniteKey(r) {
            return r = { ...i.experimental_defaults ? .infiniteKey,
                ...r
            }, r.queryKey ? ? wa(i.path, {
                type: "infinite",
                input: r.input === Ce ? Ce : r.input(r.initialPageParam)
            })
        },
        infiniteOptions(r) {
            r = { ...i.experimental_defaults ? .infiniteOptions,
                ...r
            };
            const u = s.infiniteKey(r);
            return {
                queryFn: ({
                    pageParam: c,
                    signal: f
                }) => {
                    if (r.input === Ce) throw new Error("queryFn should not be called with skipToken used as input");
                    return e(r.input(c), {
                        signal: f,
                        context: {
                            [Bs]: {
                                key: u,
                                type: "infinite"
                            },
                            ...r.context
                        }
                    })
                },
                ...r.input === Ce ? {
                    enabled: !1
                } : {},
                ...r,
                queryKey: u
            }
        },
        mutationKey(...[r = {}]) {
            return r = { ...i.experimental_defaults ? .mutationKey,
                ...r
            }, r.mutationKey ? ? wa(i.path, {
                type: "mutation"
            })
        },
        mutationOptions(...[r = {}]) {
            r = { ...i.experimental_defaults ? .mutationOptions,
                ...r
            };
            const u = s.mutationKey(r);
            return {
                mutationFn: c => e(c, {
                    context: {
                        [Bs]: {
                            key: u,
                            type: "mutation"
                        },
                        ...r.context
                    }
                }),
                ...r,
                mutationKey: u
            }
        }
    };
    return s
}

function y1(e, i = {}) {
    const s = ir(i.path),
        r = QC(s),
        u = ZC(e, {
            path: s,
            experimental_defaults: i.experimental_defaults
        });
    return new Proxy({ ...r,
        ...u
    }, {
        get(f, m) {
            const d = Reflect.get(f, m);
            if (typeof m != "string") return d;
            const p = y1(e[m], { ...i,
                path: [...s, m],
                experimental_defaults: lC(i.experimental_defaults, [m])
            });
            return typeof d != "function" ? p : new Proxy(d, {
                get(y, v) {
                    return Reflect.get(p, v)
                }
            })
        }
    })
}
var FC = {};
const Xl = Object.create(null),
    Hs = e => FC || globalThis.Deno ? .env.toObject() || globalThis.__env__ || (e ? Xl : globalThis),
    Jn = new Proxy(Xl, {
        get(e, i) {
            return Hs()[i] ? ? Xl[i]
        },
        has(e, i) {
            return i in Hs() || i in Xl
        },
        set(e, i, s) {
            const r = Hs(!0);
            return r[i] = s, !0
        },
        deleteProperty(e, i) {
            if (!i) return !1;
            const s = Hs(!0);
            return delete s[i], !0
        },
        ownKeys() {
            const e = Hs(!0);
            return Object.keys(e)
        }
    });
Jn.NODE_ENV;
var Zl = class extends Error {
    constructor(e, i) {
        super(e, i), this.name = "BetterAuthError", this.message = e, this.stack = ""
    }
};
const IC = 47;

function g1(e) {
    let i = e.length;
    for (; i > 0 && e.charCodeAt(i - 1) === IC;) i--;
    return i === e.length ? e : e.slice(0, i)
}

function JC(e) {
    try {
        return (g1(new URL(e).pathname) || "/") !== "/"
    } catch {
        throw new Zl(`Invalid base URL: ${e}. Please provide a valid base URL.`)
    }
}

function WC(e) {
    try {
        const i = new URL(e);
        if (i.protocol !== "http:" && i.protocol !== "https:") throw new Zl(`Invalid base URL: ${e}. URL must include 'http://' or 'https://'`)
    } catch (i) {
        throw i instanceof Zl ? i : new Zl(`Invalid base URL: ${e}. Please provide a valid base URL.`, {
            cause: i
        })
    }
}

function cf(e, i = "/api/auth") {
    if (WC(e), JC(e)) return e;
    const s = g1(e);
    return !i || i === "/" ? s : (i = i.startsWith("/") ? i : `/${i}`, `${s}${i}`)
}

function $C(e, i, s, r, u) {
    if (e) return cf(e, i); {
        const c = Jn.BETTER_AUTH_URL || Jn.NEXT_PUBLIC_BETTER_AUTH_URL || Jn.PUBLIC_BETTER_AUTH_URL || Jn.NUXT_PUBLIC_BETTER_AUTH_URL || Jn.NUXT_PUBLIC_AUTH_URL || (Jn.BASE_URL !== "/" ? Jn.BASE_URL : void 0);
        if (c) return cf(c, i)
    }
    if (typeof window < "u" && window.location) return cf(window.location.origin, i)
}
const tM = {
        proto: /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
        constructor: /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
        protoShort: /"__proto__"\s*:/,
        constructorShort: /"constructor"\s*:/
    },
    eM = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/,
    jv = {
        true: !0,
        false: !1,
        null: null,
        undefined: void 0,
        nan: NaN,
        infinity: Number.POSITIVE_INFINITY,
        "-infinity": Number.NEGATIVE_INFINITY
    },
    nM = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,7}))?(?:Z|([+-])(\d{2}):(\d{2}))$/;

function iM(e) {
    return e instanceof Date && !isNaN(e.getTime())
}

function aM(e) {
    const i = nM.exec(e);
    if (!i) return null;
    const [, s, r, u, c, f, m, d, p, y, v] = i, S = new Date(Date.UTC(parseInt(s, 10), parseInt(r, 10) - 1, parseInt(u, 10), parseInt(c, 10), parseInt(f, 10), parseInt(m, 10), d ? parseInt(d.padEnd(3, "0"), 10) : 0));
    if (p) {
        const R = (parseInt(y, 10) * 60 + parseInt(v, 10)) * (p === "+" ? -1 : 1);
        S.setUTCMinutes(S.getUTCMinutes() + R)
    }
    return iM(S) ? S : null
}

function sM(e, i = {}) {
    const {
        strict: s = !1,
        warnings: r = !1,
        reviver: u,
        parseDates: c = !0
    } = i;
    if (typeof e != "string") return e;
    const f = e.trim(),
        m = f.toLowerCase();
    if (m.length <= 9 && m in jv) return jv[m];
    if (!eM.test(f)) {
        if (s) throw new SyntaxError("[better-json] Invalid JSON");
        return e
    }
    if (Object.entries(tM).some(([d, p]) => {
            const y = p.test(f);
            return y && r && console.warn(`[better-json] Detected potential prototype pollution attempt using ${d} pattern`), y
        }) && s) throw new Error("[better-json] Potential prototype pollution attempt detected");
    try {
        return JSON.parse(f, (p, y) => {
            if (p === "__proto__" || p === "constructor" && y && typeof y == "object" && "prototype" in y) {
                r && console.warn(`[better-json] Dropping "${p}" key to prevent prototype pollution`);
                return
            }
            if (c && typeof y == "string") {
                const v = aM(y);
                if (v) return v
            }
            return u ? u(p, y) : y
        })
    } catch (d) {
        if (s) throw d;
        return e
    }
}

function rM(e, i = {
    strict: !0
}) {
    return sM(e, i)
}
const lM = ["javascript:", "data:", "vbscript:"];

function oM(e) {
    let i;
    try {
        i = new URL(e)
    } catch {
        return !0
    }
    return !lM.includes(i.protocol)
}
const uM = {
    id: "redirect",
    name: "Redirect",
    hooks: {
        onSuccess(e) {
            if (e.data ? .url && e.data ? .redirect && oM(e.data.url) && typeof window < "u" && window.location && window.location) try {
                window.location.href = e.data.url
            } catch {}
        }
    }
};
let Ze = [],
    Wn = 0;
const Fl = 4,
    cM = globalThis.nanostoresGlobal || = {
        epoch: 0
    };
let fM = () => {
    for (Wn = 0; Wn < Ze.length; Wn += Fl) Ze[Wn](Ze[Wn + 1].value, Ze[Wn + 2], Ze[Wn + 3]);
    Ze.length = 0
};
const Uv = e => {
        let i = [],
            s = {
                get() {
                    return s.lc || s.listen(() => {})(), s.value
                },
                init: e,
                lc: 0,
                listen(r) {
                    return s.lc = i.push(r), () => {
                        for (let c = Wn + Fl; c < Ze.length;) Ze[c] === r ? Ze.splice(c, Fl) : c += Fl;
                        let u = i.indexOf(r);
                        ~u && (i.splice(u, 1), --s.lc || s.off())
                    }
                },
                notify(r, u) {
                    cM.epoch++;
                    let c = !Ze.length && !0;
                    for (let f of i) Ze.push(f, s, r, u);
                    c && fM()
                },
                off() {},
                set(r) {
                    let u = s.value;
                    u !== r && (s.value = r, s.notify(u))
                },
                subscribe(r) {
                    let u = s.listen(r);
                    return r(s.value), u
                },
                value: e
            };
        return s
    },
    hM = 2,
    dM = 5,
    kl = 6,
    Vl = 10;
let v1 = (e, i, s, r) => (e.events = e.events || {}, e.events[s + Vl] || (e.events[s + Vl] = r(u => {
        e.events[s].reduceRight((c, f) => (f(c), c), {
            shared: {},
            ...u
        })
    })), e.events[s] = e.events[s] || [], e.events[s].push(i), () => {
        let u = e.events[s],
            c = u.indexOf(i);
        u.splice(c, 1), u.length || (delete e.events[s], e.events[s + Vl](), delete e.events[s + Vl])
    }),
    mM = (e, i) => v1(e, i, hM, s => {
        let r = e.set,
            u = e.setKey;
        return e.setKey && (e.setKey = (c, f) => {
            let m;
            if (s({
                    abort: () => {
                        m = !0
                    },
                    changed: c,
                    newValue: { ...e.value,
                        [c]: f
                    }
                }), !m) return u(c, f)
        }), e.set = c => {
            let f;
            if (s({
                    abort: () => {
                        f = !0
                    },
                    newValue: c
                }), !f) return r(c)
        }, () => {
            e.set = r, e.setKey = u
        }
    });
const pM = 1e3;
let yM = (e, i) => v1(e, r => {
    let u = i(r);
    u && e.events[kl].push(u)
}, dM, r => {
    let u = e.listen;
    e.listen = (...f) => (!e.lc && !e.active && (e.active = !0, r()), u(...f));
    let c = e.off;
    return e.events[kl] = [], e.off = () => {
        c(), setTimeout(() => {
            if (e.active && !e.lc) {
                e.active = !1;
                for (let f of e.events[kl]) f();
                e.events[kl] = []
            }
        }, pM)
    }, () => {
        e.listen = u, e.off = c
    }
});

function gM(e, i, s) {
    let r = new Set(i);
    return e.listen((u, c, f) => {
        (f === void 0 ? i.some(m => u[m] !== c[m]) : r.has(f) || r.has(f.split(/\.|\[/)[0])) && s(u, c, f)
    })
}

function zv(e) {
    if (typeof e != "object" || e === null) return !1;
    const i = Object.getPrototypeOf(e);
    return i === Object.prototype || i === null
}

function co(e, i) {
    if (e === i) return !0;
    if (Array.isArray(e) && Array.isArray(i)) {
        if (e.length !== i.length) return !1;
        for (let s = 0; s < e.length; s++)
            if (!co(e[s], i[s])) return !1;
        return !0
    }
    if (zv(e) && zv(i)) {
        const s = Object.keys(e),
            r = Object.keys(i);
        if (s.length !== r.length) return !1;
        for (const u of s)
            if (!(u in i) || !co(e[u], i[u])) return !1;
        return !0
    }
    return !1
}

function vM(e, i) {
    return mM(e, ({
        newValue: s,
        abort: r
    }) => {
        i(e.value, s) && r()
    })
}
const ff = Symbol.for("better-auth:broadcast-channel"),
    bM = () => Math.floor(Date.now() / 1e3);
var SM = class {
    listeners = new Set;
    name;
    constructor(e = "better-auth.message") {
        this.name = e
    }
    subscribe(e) {
        return this.listeners.add(e), () => {
            this.listeners.delete(e)
        }
    }
    post(e) {
        if (!(typeof window > "u")) try {
            localStorage.setItem(this.name, JSON.stringify({ ...e,
                timestamp: bM()
            }))
        } catch {}
    }
    setup() {
        if (typeof window > "u" || typeof window.addEventListener > "u") return () => {};
        const e = i => {
            if (i.key !== this.name) return;
            const s = JSON.parse(i.newValue ? ? "{}");
            s ? .event !== "session" || !s ? .data || this.listeners.forEach(r => r(s))
        };
        return window.addEventListener("storage", e), () => {
            window.removeEventListener("storage", e)
        }
    }
};

function hf(e = "better-auth.message") {
    return globalThis[ff] || (globalThis[ff] = new SM(e)), globalThis[ff]
}
const df = Symbol.for("better-auth:focus-manager");
var xM = class {
    listeners = new Set;
    subscribe(e) {
        return this.listeners.add(e), () => {
            this.listeners.delete(e)
        }
    }
    setFocused(e) {
        this.listeners.forEach(i => i(e))
    }
    setup() {
        if (typeof window > "u" || typeof document > "u" || typeof window.addEventListener > "u") return () => {};
        const e = () => {
            document.visibilityState === "visible" && this.setFocused(!0)
        };
        return document.addEventListener("visibilitychange", e, !1), () => {
            document.removeEventListener("visibilitychange", e, !1)
        }
    }
};

function kv() {
    return globalThis[df] || (globalThis[df] = new xM), globalThis[df]
}
const mf = Symbol.for("better-auth:online-manager");
var TM = class {
    listeners = new Set;
    isOnline = typeof navigator < "u" ? navigator.onLine : !0;
    subscribe(e) {
        return this.listeners.add(e), () => {
            this.listeners.delete(e)
        }
    }
    setOnline(e) {
        this.isOnline = e, this.listeners.forEach(i => i(e))
    }
    setup() {
        if (typeof window > "u" || typeof window.addEventListener > "u") return () => {};
        const e = () => this.setOnline(!0),
            i = () => this.setOnline(!1);
        return window.addEventListener("online", e, !1), window.addEventListener("offline", i, !1), () => {
            window.removeEventListener("online", e, !1), window.removeEventListener("offline", i, !1)
        }
    }
};

function pf() {
    return globalThis[mf] || (globalThis[mf] = new TM), globalThis[mf]
}
const yf = () => Math.floor(Date.now() / 1e3),
    wM = 5;

function EM(e) {
    const {
        fetchSession: i,
        shouldPollSession: s = () => !0,
        sessionSignal: r,
        options: u = {}
    } = e, c = u.sessionOptions ? .refetchInterval ? ? 0, f = u.sessionOptions ? .refetchOnWindowFocus ? ? !0, m = u.sessionOptions ? .refetchWhenOffline ? ? !1, d = {
        isInitialized: !1,
        lastSessionRequest: 0
    }, p = () => m || pf().isOnline, y = B => {
        if (p()) {
            if (B ? .event === "storage") {
                i();
                return
            }
            if (B ? .event === "poll") {
                d.lastSessionRequest = yf(), i();
                return
            }
            if (B ? .event === "visibilitychange") {
                if (yf() - d.lastSessionRequest < wM) return;
                d.lastSessionRequest = yf(), i();
                return
            }
            i()
        }
    }, v = B => {
        hf().post({
            event: "session",
            data: {
                trigger: B
            },
            clientId: Math.random().toString(36).substring(7)
        })
    }, S = () => {
        c && c > 0 && (d.pollInterval = setInterval(() => {
            s() && y({
                event: "poll"
            })
        }, c * 1e3))
    }, R = () => {
        d.unsubscribeBroadcast = hf().subscribe(() => {
            y({
                event: "storage"
            })
        })
    }, w = () => {
        f && (d.unsubscribeFocus = kv().subscribe(() => {
            y({
                event: "visibilitychange"
            })
        }))
    }, C = () => {
        d.unsubscribeOnline = pf().subscribe(B => {
            B && y({
                event: "visibilitychange"
            })
        })
    }, D = () => {
        d.unsubscribeSignal = r.listen(() => {
            i()
        })
    };
    return {
        init: () => {
            d.isInitialized || (d.isInitialized = !0, S(), R(), w(), C(), D(), d.cleanupBroadcastSetup = hf().setup(), d.cleanupFocusSetup = kv().setup(), d.cleanupOnlineSetup = pf().setup())
        },
        cleanup: () => {
            d.isInitialized && (d.pollInterval && (clearInterval(d.pollInterval), d.pollInterval = void 0), d.unsubscribeBroadcast && (d.unsubscribeBroadcast(), d.unsubscribeBroadcast = void 0), d.unsubscribeFocus && (d.unsubscribeFocus(), d.unsubscribeFocus = void 0), d.unsubscribeOnline && (d.unsubscribeOnline(), d.unsubscribeOnline = void 0), d.unsubscribeSignal && (d.unsubscribeSignal(), d.unsubscribeSignal = void 0), d.cleanupBroadcastSetup && (d.cleanupBroadcastSetup(), d.cleanupBroadcastSetup = void 0), d.cleanupFocusSetup && (d.cleanupFocusSetup(), d.cleanupFocusSetup = void 0), d.cleanupOnlineSetup && (d.cleanupOnlineSetup(), d.cleanupOnlineSetup = void 0), d.isInitialized = !1, d.lastSessionRequest = 0)
        },
        triggerRefetch: y,
        broadcastSessionUpdate: v
    }
}
const AM = () => typeof window > "u";

function Vv(e) {
    return typeof e == "object" && e !== null && "data" in e && "error" in e ? e : {
        data: e,
        error: null
    }
}

function RM(e) {
    return !e || e.session === null && e.user === null ? null : e
}

function OM(e, i) {
    return co(e.data, i.data) && e.error === i.error && e.isPending === i.isPending && e.isRefetching === i.isRefetching && e.refetch === i.refetch
}

function CM(e, i) {
    const s = Uv(!1);
    let r;
    const u = p => m(p),
        c = Uv({
            data: null,
            error: null,
            isPending: !0,
            isRefetching: !1,
            refetch: u
        });
    vM(c, OM);
    const f = p => {
            if (r !== p) return;
            const y = c.get();
            r = void 0, !(!y.isPending && !y.isRefetching) && c.set({ ...y,
                isPending: !1,
                isRefetching: !1,
                refetch: u
            })
        },
        m = async p => {
            r ? .abort();
            const y = new AbortController;
            r = y;
            const v = c.get();
            c.set({ ...v,
                isPending: v.data === null,
                isRefetching: !0,
                error: null,
                refetch: u
            });
            try {
                const S = await e("/get-session", {
                    method: "GET",
                    query: p ? .query,
                    signal: y.signal
                });
                if (y.signal.aborted) {
                    f(y);
                    return
                }
                let {
                    data: R,
                    error: w
                } = Vv(S);
                if (R ? .needsRefresh) try {
                    const K = await e("/get-session", {
                        method: "POST",
                        signal: y.signal
                    });
                    if (y.signal.aborted) {
                        f(y);
                        return
                    }({
                        data: R,
                        error: w
                    } = Vv(K))
                } catch {
                    if (y.signal.aborted) {
                        f(y);
                        return
                    }
                }
                if (w) {
                    const K = c.get(),
                        B = w ? .status === 401;
                    c.set({
                        data: B ? null : K.data,
                        error: w,
                        isPending: !1,
                        isRefetching: !1,
                        refetch: u
                    });
                    return
                }
                const C = RM(R),
                    D = c.get(),
                    V = D.data != null && C != null && co(D.data, C) ? D.data : C;
                c.set({
                    data: V,
                    error: null,
                    isPending: !1,
                    isRefetching: !1,
                    refetch: u
                })
            } catch (S) {
                if (y.signal.aborted) {
                    f(y);
                    return
                }
                const R = c.get();
                c.set({
                    data: R.data,
                    error: S,
                    isPending: !1,
                    isRefetching: !1,
                    refetch: u
                })
            }
        };
    let d = () => {};
    return yM(c, () => {
        let p;
        AM() || (p = setTimeout(() => {
            m()
        }, 0));
        const y = EM({
            fetchSession: m,
            shouldPollSession: () => c.get().data != null,
            sessionSignal: s,
            options: i
        });
        return y.init(), d = y.broadcastSessionUpdate, () => {
            p && clearTimeout(p);
            const v = r;
            v ? .abort(), v && f(v), y.cleanup()
        }
    }), {
        session: c,
        $sessionSignal: s,
        broadcastSessionUpdate: p => d(p)
    }
}

function gf(e) {
    if (e === null || typeof e != "object") return !1;
    const i = Object.getPrototypeOf(e);
    return i !== null && i !== Object.prototype && Object.getPrototypeOf(i) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0
}

function Wf(e, i, s = ".", r) {
    if (!gf(i)) return Wf(e, {}, s, r);
    const u = { ...i
    };
    for (const c of Object.keys(e)) {
        if (c === "__proto__" || c === "constructor") continue;
        const f = e[c];
        f != null && (r && r(u, c, f, s) || (Array.isArray(f) && Array.isArray(u[c]) ? u[c] = [...f, ...u[c]] : gf(f) && gf(u[c]) ? u[c] = Wf(f, u[c], (s ? `${s}.` : "") + c.toString(), r) : u[c] = f))
    }
    return u
}

function MM(e) {
    return (...i) => i.reduce((s, r) => Wf(s, r, "", e), {})
}
const DM = MM();
var NM = Object.defineProperty,
    jM = Object.defineProperties,
    UM = Object.getOwnPropertyDescriptors,
    _v = Object.getOwnPropertySymbols,
    zM = Object.prototype.hasOwnProperty,
    kM = Object.prototype.propertyIsEnumerable,
    Lv = (e, i, s) => i in e ? NM(e, i, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : e[i] = s,
    Xe = (e, i) => {
        for (var s in i || (i = {})) zM.call(i, s) && Lv(e, s, i[s]);
        if (_v)
            for (var s of _v(i)) kM.call(i, s) && Lv(e, s, i[s]);
        return e
    },
    an = (e, i) => jM(e, UM(i)),
    VM = class extends Error {
        constructor(e, i, s) {
            super(i || e.toString(), {
                cause: s
            }), this.status = e, this.statusText = i, this.error = s, Error.captureStackTrace(this, this.constructor)
        }
    },
    _M = async (e, i) => {
        var s, r, u, c, f, m;
        let d = i || {};
        const p = {
            onRequest: [i ? .onRequest],
            onResponse: [i ? .onResponse],
            onSuccess: [i ? .onSuccess],
            onError: [i ? .onError],
            onRetry: [i ? .onRetry]
        };
        if (!i || !i ? .plugins) return {
            url: e,
            options: d,
            hooks: p
        };
        for (const y of i ? .plugins || []) {
            if (y.init) {
                const v = await ((s = y.init) == null ? void 0 : s.call(y, e.toString(), i));
                d = v.options || d, e = v.url
            }
            p.onRequest.push((r = y.hooks) == null ? void 0 : r.onRequest), p.onResponse.push((u = y.hooks) == null ? void 0 : u.onResponse), p.onSuccess.push((c = y.hooks) == null ? void 0 : c.onSuccess), p.onError.push((f = y.hooks) == null ? void 0 : f.onError), p.onRetry.push((m = y.hooks) == null ? void 0 : m.onRetry)
        }
        return {
            url: e,
            options: d,
            hooks: p
        }
    },
    Bv = class {
        constructor(e) {
            this.options = e
        }
        shouldAttemptRetry(e, i) {
            return this.options.shouldRetry ? Promise.resolve(e < this.options.attempts && this.options.shouldRetry(i)) : Promise.resolve(e < this.options.attempts)
        }
        getDelay() {
            return this.options.delay
        }
    },
    LM = class {
        constructor(e) {
            this.options = e
        }
        shouldAttemptRetry(e, i) {
            return this.options.shouldRetry ? Promise.resolve(e < this.options.attempts && this.options.shouldRetry(i)) : Promise.resolve(e < this.options.attempts)
        }
        getDelay(e) {
            return Math.min(this.options.maxDelay, this.options.baseDelay * 2 ** e)
        }
    };

function BM(e) {
    if (typeof e == "number") return new Bv({
        type: "linear",
        attempts: e,
        delay: 1e3
    });
    switch (e.type) {
        case "linear":
            return new Bv(e);
        case "exponential":
            return new LM(e);
        default:
            throw new Error("Invalid retry strategy")
    }
}
var HM = async e => {
        const i = {},
            s = async r => typeof r == "function" ? await r() : r;
        if (e ? .auth) {
            if (e.auth.type === "Bearer") {
                const r = await s(e.auth.token);
                if (!r) return i;
                i.authorization = `Bearer ${r}`
            } else if (e.auth.type === "Basic") {
                const [r, u] = await Promise.all([s(e.auth.username), s(e.auth.password)]);
                if (!r || !u) return i;
                i.authorization = `Basic ${btoa(`${r}:${u}`)}`
            } else if (e.auth.type === "Custom") {
                const [r, u] = await Promise.all([s(e.auth.prefix), s(e.auth.value)]);
                if (!u) return i;
                i.authorization = `${r??""} ${u}`
            }
        }
        return i
    },
    qM = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;

function PM(e) {
    const i = e.headers.get("content-type"),
        s = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]);
    if (!i) return "json";
    const r = i.split(";").shift() || "";
    return qM.test(r) ? "json" : s.has(r) || r.startsWith("text/") ? "text" : "blob"
}

function GM(e) {
    try {
        return JSON.parse(e), !0
    } catch {
        return !1
    }
}

function b1(e) {
    if (e === void 0) return !1;
    const i = typeof e;
    return i === "string" || i === "number" || i === "boolean" || i === null ? !0 : i !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function"
}

function Hv(e) {
    try {
        return JSON.parse(e)
    } catch {
        return e
    }
}

function qv(e) {
    return typeof e == "function"
}

function KM(e) {
    if (e ? .customFetchImpl) return e.customFetchImpl;
    if (typeof globalThis < "u" && qv(globalThis.fetch)) return globalThis.fetch;
    if (typeof window < "u" && qv(window.fetch)) return window.fetch;
    throw new Error("No fetch implementation found")
}

function S1(...e) {
    const i = {};
    for (const s of e)
        if (s)
            if (s instanceof Headers) s.forEach((r, u) => {
                i[u] = r
            });
            else {
                const r = Array.isArray(s) ? s : Object.entries(s);
                for (const [u, c] of r) c != null && (i[u] = c)
            }
    return i
}
async function QM(e) {
    const i = new Headers(S1(e ? .headers, await HM(e)));
    if (!i.has("content-type")) {
        const s = YM(e ? .body);
        s && i.set("content-type", s)
    }
    return i
}

function YM(e) {
    return b1(e) ? "application/json" : null
}

function XM(e) {
    const i = e.get("content-type");
    return i ? i.split(";")[0].trim().toLowerCase() : null
}

function ZM(e, i) {
    const {
        body: s
    } = e;
    return s ? !b1(s) || typeof s == "string" ? s : XM(i) === "application/x-www-form-urlencoded" ? new URLSearchParams(s).toString() : JSON.stringify(s) : null
}

function FM(e, i) {
    var s;
    if (i ? .method) return i.method.toUpperCase();
    if (e.startsWith("@")) {
        const r = (s = e.split("@")[1]) == null ? void 0 : s.split("/")[0];
        return T1.includes(r) ? r.toUpperCase() : i ? .body ? "POST" : "GET"
    }
    return i ? .body ? "POST" : "GET"
}

function IM(e, i) {
    let s;
    return !e ? .signal && e ? .timeout && (s = setTimeout(() => i ? .abort(), e ? .timeout)), {
        abortTimeout: s,
        clearTimeout: () => {
            s && clearTimeout(s)
        }
    }
}
var JM = class x1 extends Error {
    constructor(i, s) {
        super(s || JSON.stringify(i, null, 2)), this.issues = i, Object.setPrototypeOf(this, x1.prototype)
    }
};
async function Ks(e, i) {
    const s = await e["~standard"].validate(i);
    if (s.issues) throw new JM(s.issues);
    return s.value
}
var T1 = ["get", "post", "put", "patch", "delete"],
    WM = e => ({
        id: "apply-schema",
        name: "Apply Schema",
        version: "1.0.0",
        async init(i, s) {
            var r, u, c, f;
            const m = ((u = (r = e.plugins) == null ? void 0 : r.find(d => {
                var p;
                return (p = d.schema) != null && p.config ? i.startsWith(d.schema.config.baseURL || "") || i.startsWith(d.schema.config.prefix || "") : !1
            })) == null ? void 0 : u.schema) || e.schema;
            if (m) {
                let d = i;
                (c = m.config) != null && c.prefix && d.startsWith(m.config.prefix) && (d = d.replace(m.config.prefix, ""), m.config.baseURL && (i = i.replace(m.config.prefix, m.config.baseURL))), (f = m.config) != null && f.baseURL && d.startsWith(m.config.baseURL) && (d = d.replace(m.config.baseURL, "")), d.startsWith("/") && d.charAt(1) === "@" && (d = d.substring(1));
                const p = m.schema[d];
                if (p) {
                    let y = s ? .headers;
                    if (p.headers && !s ? .disableValidation) {
                        const S = {};
                        if (s ? .headers) {
                            if (s.headers instanceof Headers) s.headers.forEach((C, D) => {
                                S[D.toLowerCase()] = C
                            });
                            else if (typeof s.headers == "object")
                                for (const [C, D] of Object.entries(s.headers)) D != null && (S[C.toLowerCase()] = D)
                        }
                        const R = await Ks(p.headers, S),
                            w = {};
                        for (const [C, D] of Object.entries(R)) w[C.toLowerCase()] = D;
                        y = w
                    }
                    let v = an(Xe({}, s), {
                        method: p.method,
                        output: p.output,
                        headers: y
                    });
                    return s ? .disableValidation || (v = an(Xe({}, v), {
                        body: p.input ? await Ks(p.input, s ? .body) : s ? .body,
                        params: p.params ? await Ks(p.params, s ? .params) : s ? .params,
                        query: p.query ? await Ks(p.query, s ? .query) : s ? .query
                    })), {
                        url: i,
                        options: v
                    }
                }
            }
            return {
                url: i,
                options: s
            }
        }
    }),
    $M = e => {
        async function i(s, r) {
            const u = an(Xe(Xe({}, e), r), {
                headers: S1(e ? .headers, r ? .headers),
                plugins: [...e ? .plugins || [], WM(e || {}), ...r ? .plugins || []]
            });
            if (e ? .catchAllError) try {
                return await $f(s, u)
            } catch (c) {
                return {
                    data: null,
                    error: {
                        status: 500,
                        statusText: "Fetch Error",
                        message: "Fetch related error. Captured by catchAllError option. See error property for more details.",
                        error: c
                    }
                }
            }
            return await $f(s, u)
        }
        return i
    },
    t3 = e => e === "." || e === "..";

function e3(e, i) {
    let s = e;
    for (const [r, u] of i) s = s.replace(r, u);
    if (t3(s)) throw new TypeError("Path parameters cannot be reserved path segments");
    return encodeURIComponent(s)
}

function n3(e, i) {
    const {
        baseURL: s,
        params: r,
        query: u
    } = i || {
        query: {},
        params: {},
        baseURL: ""
    };
    let c = e.startsWith("http") ? e.split("/").slice(0, 3).join("/") : s || "";
    if (e.startsWith("@")) {
        const S = e.toString().split("@")[1].split("/")[0];
        T1.includes(S) && (e = e.replace(`@${S}/`, "/"))
    }
    c.endsWith("/") || (c += "/");
    let [f, m] = e.replace(c, "").split("?");
    const d = new URLSearchParams(m);
    for (const [S, R] of Object.entries(u || {})) {
        if (R == null) continue;
        let w;
        if (typeof R == "string") w = R;
        else if (Array.isArray(R)) {
            for (const C of R) d.append(S, C);
            continue
        } else w = JSON.stringify(R);
        d.set(S, w)
    }
    const p = new Map;
    if (r)
        if (Array.isArray(r)) {
            const S = f.split("/").filter(R => R.startsWith(":"));
            for (const [R, w] of S.entries()) {
                const C = r[R];
                p.set(w, String(C))
            }
        } else
            for (const [S, R] of Object.entries(r)) p.set(`:${S}`, String(R));
    f = f.split("/").map(S => e3(S, p)).join("/"), f = f.replace(/^\/+/, "");
    let y = d.toString();
    return y = y.length > 0 ? `?${y}`.replace(/\+/g, "%20") : "", c.startsWith("http") ? new URL(`${f}${y}`, c) : `${c}${f}${y}`
}
var $f = async (e, i) => {
        var s, r, u, c, f, m, d, p;
        const {
            hooks: y,
            url: v,
            options: S
        } = await _M(e, i), R = KM(S), w = new AbortController, C = (s = S.signal) != null ? s : w.signal, D = n3(v, S), V = await QM(S), K = ZM(S, V), B = FM(v, S), q = an(Xe({}, S), {
            url: D,
            headers: V,
            body: K,
            method: B,
            signal: C
        });
        for (const bt of y.onRequest)
            if (bt) {
                const gt = await bt(q);
                typeof gt == "object" && gt !== null && Object.assign(q, gt)
            }("pipeTo" in q && typeof q.pipeTo == "function" || typeof((r = i ? .body) == null ? void 0 : r.pipe) == "function") && ("duplex" in q || (q.duplex = "half"));
        const {
            clearTimeout: _
        } = IM(S, w);
        let Q = await R(q.url, q);
        _();
        const tt = {
            response: Q,
            request: q
        };
        for (const bt of y.onResponse)
            if (bt) {
                const gt = await bt(an(Xe({}, tt), {
                    response: (u = i ? .hookOptions) != null && u.cloneResponse ? Q.clone() : Q
                }));
                gt instanceof Response ? Q = gt : typeof gt == "object" && gt !== null && (Q = gt.response)
            }
        if (Q.ok) {
            if (!(q.method !== "HEAD")) return {
                data: "",
                error: null
            };
            const gt = PM(Q),
                vt = {
                    data: null,
                    response: Q,
                    request: q
                };
            if (gt === "json" || gt === "text") {
                const z = await Q.text(),
                    X = (c = q.jsonParser) != null ? c : Hv;
                vt.data = await X(z)
            } else vt.data = await Q[gt]();
            q ? .output && q.output && !q.disableValidation && (vt.data = await Ks(q.output, vt.data));
            for (const z of y.onSuccess) z && await z(an(Xe({}, vt), {
                response: (f = i ? .hookOptions) != null && f.cloneResponse ? Q.clone() : Q
            }));
            return i ? .throw ? vt.data : {
                data: vt.data,
                error: null
            }
        }
        const Y = (m = i ? .jsonParser) != null ? m : Hv,
            et = await Q.text(),
            J = GM(et),
            ot = J ? await Y(et) : null,
            ut = {
                response: Q,
                responseText: et,
                request: q,
                error: an(Xe({}, ot), {
                    status: Q.status,
                    statusText: Q.statusText
                })
            };
        for (const bt of y.onError) bt && await bt(an(Xe({}, ut), {
            response: (d = i ? .hookOptions) != null && d.cloneResponse ? Q.clone() : Q
        }));
        if (i ? .retry) {
            const bt = BM(i.retry),
                gt = (p = i.retryAttempt) != null ? p : 0;
            if (await bt.shouldAttemptRetry(gt, Q)) {
                for (const z of y.onRetry) z && await z(tt);
                const vt = bt.getDelay(gt);
                return await new Promise(z => setTimeout(z, vt)), await $f(e, an(Xe({}, i), {
                    retryAttempt: gt + 1
                }))
            }
        }
        if (i ? .throw) throw new VM(Q.status, Q.statusText, J ? ot : et);
        return {
            data: null,
            error: an(Xe({}, ot), {
                status: Q.status,
                statusText: Q.statusText
            })
        }
    },
    Oi = {};
const i3 = e => {
        if (typeof process > "u") return;
        const i = e ? ? "/api/auth";
        if (Oi.NEXT_PUBLIC_AUTH_URL) return Oi.NEXT_PUBLIC_AUTH_URL;
        if (typeof window > "u") {
            if (Oi.NEXTAUTH_URL) try {
                return Oi.NEXTAUTH_URL
            } catch {}
            if (Oi.VERCEL_URL) try {
                const s = Oi.VERCEL_URL.startsWith("http") ? "" : "https://";
                return `${new URL(`${s}${Oi.VERCEL_URL}`).origin}${i}`
            } catch {}
        }
    },
    a3 = (e, i) => {
        const s = "credentials" in Request.prototype,
            r = $C(e ? .baseURL, e ? .basePath) ? ? i3(e ? .basePath) ? ? "/api/auth",
            u = e ? .plugins ? .flatMap(_ => _.fetchPlugins).filter(_ => _ !== void 0) || [],
            c = {
                id: "lifecycle-hooks",
                name: "lifecycle-hooks",
                hooks: {
                    onSuccess: e ? .fetchOptions ? .onSuccess,
                    onError: e ? .fetchOptions ? .onError,
                    onRequest: e ? .fetchOptions ? .onRequest,
                    onResponse: e ? .fetchOptions ? .onResponse
                }
            },
            {
                onSuccess: f,
                onError: m,
                onRequest: d,
                onResponse: p,
                ...y
            } = e ? .fetchOptions || {},
            v = $M({
                baseURL: r,
                ...s ? {
                    credentials: "include"
                } : {},
                method: "GET",
                jsonParser(_) {
                    return _ ? rM(_, {
                        strict: !1
                    }) : null
                },
                customFetchImpl: fetch,
                ...y,
                plugins: [c, ...y.plugins || [], ...e ? .disableDefaultFetchPlugins ? [] : [uM], ...u]
            }),
            {
                $sessionSignal: S,
                session: R,
                broadcastSessionUpdate: w
            } = CM(v, e),
            C = e ? .plugins || [];
        let D = {};
        const V = {
                $sessionSignal: S,
                session: R
            },
            K = {
                "/sign-out": "POST",
                "/revoke-sessions": "POST",
                "/revoke-other-sessions": "POST",
                "/delete-user": "POST"
            },
            B = [{
                signal: "$sessionSignal",
                matcher(_) {
                    return _ === "/sign-out" || _ === "/update-user" || _ === "/update-session" || _ === "/sign-up/email" || _ === "/sign-in/email" || _ === "/delete-user" || _ === "/verify-email" || _ === "/revoke-sessions" || _ === "/revoke-session" || _ === "/revoke-other-sessions" || _ === "/change-email" || _ === "/change-password"
                },
                callback(_) {
                    _ === "/sign-out" ? w("signout") : (_ === "/update-user" || _ === "/update-session") && w("updateUser")
                }
            }];
        for (const _ of C) _.getAtoms && Object.assign(V, _.getAtoms ? .(v)), _.pathMethods && Object.assign(K, _.pathMethods), _.atomListeners && B.push(..._.atomListeners);
        const q = {
            notify: _ => {
                V[_].set(!V[_].get())
            },
            listen: (_, Q) => {
                V[_].subscribe(Q)
            },
            atoms: V
        };
        for (const _ of C) _.getActions && (D = DM(_.getActions ? .(v, q, e) ? ? {}, D));
        return {
            get baseURL() {
                return r
            },
            pluginsActions: D,
            pluginsAtoms: V,
            pluginPathMethods: K,
            atomListeners: B,
            $fetch: v,
            $store: q
        }
    };

function s3(e) {
    return typeof e == "object" && e !== null && "get" in e && typeof e.get == "function" && "lc" in e && typeof e.lc == "number"
}

function r3(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}
const l3 = new RegExp("[\\p{Ll}\\d]+|\\p{Lu}+(?!\\p{Ll})|\\p{Lu}[\\p{Ll}\\d]+|\\p{Lo}+", "gu"),
    o3 = /['\u2019]/g;

function u3(e) {
    return e.replace(o3, "").match(l3) ? ? []
}

function c3(e) {
    return u3(e).map(i => i.toLowerCase()).join("-")
}

function f3(e, i, s) {
    const r = i[e],
        {
            fetchOptions: u,
            query: c,
            ...f
        } = s || {};
    return r || (u ? .method ? u.method : f && Object.keys(f).length > 0 ? "POST" : "GET")
}

function h3(e, i, s, r, u) {
    function c(f = []) {
        return new Proxy(function() {}, {
            get(m, d) {
                if (typeof d != "string" || d === "then" || d === "catch" || d === "finally") return;
                const p = [...f, d];
                let y = e;
                for (const v of p)
                    if (y && typeof y == "object" && v in y) y = y[v];
                    else {
                        y = void 0;
                        break
                    }
                return typeof y == "function" || s3(y) ? y : c(p)
            },
            apply: async (m, d, p) => {
                const y = "/" + f.map(c3).join("/"),
                    v = p[0] || {},
                    S = p[1] || {},
                    {
                        query: R,
                        fetchOptions: w,
                        ...C
                    } = v,
                    D = { ...S,
                        ...w
                    },
                    V = f3(y, s, v);
                return await i(y, { ...D,
                    body: V === "GET" ? void 0 : { ...C,
                        ...D ? .body || {}
                    },
                    query: R || D ? .query,
                    method: V,
                    async onSuccess(K) {
                        if (await D ? .onSuccess ? .(K), !u || D.disableSignal) return;
                        const B = u.filter(_ => _.matcher(y));
                        if (!B.length) return;
                        const q = new Set;
                        for (const _ of B) {
                            const Q = r[_.signal];
                            if (!Q) return;
                            if (q.has(_.signal)) continue;
                            q.add(_.signal);
                            const tt = Q.get();
                            setTimeout(() => {
                                Q.set(!tt)
                            }, 10), _.callback ? .(y)
                        }
                    }
                })
            }
        })
    }
    return c()
}

function d3(e, i = {}) {
    const s = k.useRef(e.get()),
        {
            keys: r,
            deps: u = [e, r]
        } = i,
        c = k.useCallback(m => {
            const d = p => {
                s.current !== p && (s.current = p, m())
            };
            return d(e.value), r ? .length ? gM(e, r, d) : e.listen(d)
        }, u),
        f = () => s.current;
    return k.useSyncExternalStore(c, f, f)
}

function m3(e) {
    return `use${r3(e)}`
}

function p3(e) {
    const {
        pluginPathMethods: i,
        pluginsActions: s,
        pluginsAtoms: r,
        $fetch: u,
        $store: c,
        atomListeners: f
    } = a3(e), m = {};
    for (const [d, p] of Object.entries(r)) m[m3(d)] = () => d3(p);
    return h3({ ...s,
        ...m,
        $fetch: u,
        $store: c
    }, u, i, r, f)
}
const Gh = "og_bearer_token";

function wo() {
    return localStorage.getItem(Gh) ? ? ""
}

function y3(e) {
    localStorage.setItem(Gh, e)
}

function Pv() {
    localStorage.removeItem(Gh)
}
const w1 = p3({
        baseURL: window.location.origin,
        basePath: "/api/auth",
        fetchOptions: {
            auth: {
                type: "Bearer",
                token: () => wo()
            },
            onSuccess: e => {
                const i = e.response.headers.get("set-auth-token");
                i && y3(i)
            }
        }
    }),
    g3 = new KC({
        url: `${window.location.origin}/api/rpc`,
        headers: () => {
            const e = wo();
            return e ? {
                Authorization: `Bearer ${e}`
            } : {}
        }
    }),
    E1 = d1(g3),
    on = y1(E1);

function v3() {
    return Lh(on.submissions.submit.mutationOptions())
}

function b3() {
    return ur(on.submissions.approved.queryOptions({
        staleTime: 6e4
    }))
}

function S3(e) {
    return ur(on.submissions.list.queryOptions({
        enabled: e,
        retry: !1
    }))
}

function A1() {
    const e = _h();
    return () => {
        e.invalidateQueries({
            queryKey: on.submissions.list.key()
        }), e.invalidateQueries({
            queryKey: on.submissions.approved.key()
        })
    }
}

function x3() {
    const e = A1();
    return Lh(on.submissions.approve.mutationOptions({
        onSuccess: e
    }))
}

function T3() {
    const e = A1();
    return Lh(on.submissions.setStatus.mutationOptions({
        onSuccess: e
    }))
}

function w3() {
    try {
        return crypto.randomUUID()
    } catch {
        return `${Date.now()}-${Math.random().toString(36).slice(2,12)}`
    }
}

function R1(e, i) {
    let s = e.getItem(i);
    return s || (s = w3(), e.setItem(i, s)), s
}

function E3() {
    return R1(localStorage, "og_vid")
}

function A3() {
    return R1(sessionStorage, "og_sid")
}

function ni(e, i = {}) {
    try {
        if (wo()) return;
        E1.analytics.track({
            visitorId: E3(),
            sessionId: A3(),
            type: e,
            referrer: document.referrer || void 0,
            ...i
        }).catch(() => {})
    } catch {}
}

function R3() {
    const [e, i] = k.useState(!1);
    return x.jsxs(x.Fragment, {
        children: [x.jsxs("button", {
            onClick: () => {
                i(!0), ni("submit_open")
            },
            className: "chip flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm",
            style: {
                borderColor: "var(--lamp)",
                color: "var(--lamp)"
            },
            children: [x.jsx(nO, {
                size: 14
            }), "अपनी साइट जोड़ें", x.jsx("span", {
                className: "ml-0.5 text-[11px] opacity-70",
                children: "Submit yours"
            })]
        }), x.jsx(O3, {
            open: e,
            onClose: () => i(!1)
        })]
    })
}

function O3({
    open: e,
    onClose: i
}) {
    const [s, r] = k.useState(""), [u, c] = k.useState(""), [f, m] = k.useState(""), d = v3(), p = () => {
        i(), setTimeout(() => {
            d.reset(), r(""), c(""), m("")
        }, 250)
    }, y = S => {
        if (S.preventDefault(), d.isPending) return;
        m("");
        const R = u.trim();
        if (!/^(https?:\/\/)?(www\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+/i.test(R)) {
            m("X पोस्ट का सही लिंक डालिए, जैसे x.com/aapka_handle/status/...");
            return
        }
        d.mutate({
            siteUrl: s,
            tweetUrl: R
        }, {
            onSuccess: () => ni("submit_success", {
                label: s
            })
        })
    }, v = {
        background: "var(--night)",
        border: "1px solid var(--night-3)",
        color: "var(--moon)"
    };
    return x.jsx(xA, {
        children: e && x.jsx(tr.div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: .2
            },
            className: "fixed inset-0 z-50 flex items-center justify-center px-4",
            style: {
                background: "rgba(18, 33, 46, 0.45)",
                backdropFilter: "blur(4px)"
            },
            onClick: p,
            children: x.jsx(tr.div, {
                initial: {
                    opacity: 0,
                    y: 24,
                    scale: .98
                },
                animate: {
                    opacity: 1,
                    y: 0,
                    scale: 1
                },
                exit: {
                    opacity: 0,
                    y: 16,
                    scale: .98
                },
                transition: {
                    duration: .3,
                    ease: [.22, 1, .36, 1]
                },
                className: "w-full max-w-md rounded-2xl p-6 shadow-xl sm:p-8",
                style: {
                    background: "var(--night-2)",
                    border: "1px solid var(--night-3)"
                },
                onClick: S => S.stopPropagation(),
                children: d.isSuccess ? x.jsxs("div", {
                    className: "py-6 text-center",
                    children: [x.jsx(HR, {
                        size: 40,
                        className: "mx-auto",
                        style: {
                            color: "var(--lamp)"
                        }
                    }), x.jsx("h3", {
                        className: "font-display mt-4 text-2xl",
                        style: {
                            color: "var(--moon)"
                        },
                        children: "शुक्रिया!"
                    }), x.jsx("p", {
                        className: "mt-2 text-sm leading-relaxed",
                        style: {
                            color: "var(--moon-dim)"
                        },
                        children: "आपकी साइट मिल गई। रिव्यू के बाद इस लिस्ट में जोड़ दी जाएगी।"
                    }), x.jsx("button", {
                        onClick: p,
                        className: "mt-6 rounded-full px-6 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90",
                        style: {
                            background: "var(--lamp)"
                        },
                        children: "ठीक है"
                    })]
                }) : x.jsxs(x.Fragment, {
                    children: [x.jsxs("div", {
                        className: "flex items-start justify-between",
                        children: [x.jsxs("div", {
                            children: [x.jsx("h3", {
                                className: "font-display text-2xl",
                                style: {
                                    color: "var(--moon)"
                                },
                                children: "अपनी साइट जोड़ें"
                            }), x.jsx("p", {
                                className: "mt-1.5 text-sm leading-relaxed",
                                style: {
                                    color: "var(--moon-dim)"
                                },
                                children: "अपनी प्लेलिस्ट साइट का लिंक और उसके बारे में किया गया X पोस्ट भेजिए।"
                            })]
                        }), x.jsx("button", {
                            onClick: p,
                            className: "rounded-full border p-1.5 transition-colors hover:border-[rgba(36,137,211,0.55)]",
                            style: {
                                borderColor: "var(--night-3)",
                                color: "var(--moon-dim)"
                            },
                            "aria-label": "Close",
                            children: x.jsx(Zb, {
                                size: 14
                            })
                        })]
                    }), x.jsxs("form", {
                        onSubmit: y,
                        className: "mt-6 space-y-4",
                        children: [x.jsxs("div", {
                            children: [x.jsx("label", {
                                className: "font-mono2 mb-1.5 block text-[11px] uppercase tracking-[0.2em]",
                                style: {
                                    color: "var(--moon-dim)"
                                },
                                children: "साइट का URL"
                            }), x.jsx("input", {
                                type: "text",
                                required: !0,
                                value: s,
                                onChange: S => r(S.target.value),
                                placeholder: "https://meri-playlist.vercel.app",
                                className: "w-full rounded-lg px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[var(--lamp)]",
                                style: v
                            })]
                        }), x.jsxs("div", {
                            children: [x.jsx("label", {
                                className: "font-mono2 mb-1.5 block text-[11px] uppercase tracking-[0.2em]",
                                style: {
                                    color: "var(--moon-dim)"
                                },
                                children: "X (Twitter) पोस्ट का लिंक"
                            }), x.jsx("input", {
                                type: "text",
                                required: !0,
                                value: u,
                                onChange: S => c(S.target.value),
                                placeholder: "https://x.com/aapka_handle/status/...",
                                className: "w-full rounded-lg px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[var(--lamp)]",
                                style: v
                            })]
                        }), (f || d.isError) && x.jsx("p", {
                            className: "text-sm",
                            style: {
                                color: "#c0392b"
                            },
                            children: f || "कुछ गड़बड़ हो गई, लिंक चेक करके दोबारा कोशिश कीजिए।"
                        }), x.jsxs("button", {
                            type: "submit",
                            disabled: d.isPending,
                            className: "flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60",
                            style: {
                                background: "var(--lamp)"
                            },
                            children: [d.isPending && x.jsx(Yb, {
                                size: 14,
                                className: "animate-spin"
                            }), "भेज दीजिए"]
                        })]
                    })]
                })
            })
        })
    })
}

function C3({
    site: e
}) {
    return e.dead ? x.jsx("div", {
        className: "tv-screen",
        children: x.jsx("div", {
            className: "tv-static",
            children: x.jsx("span", {
                children: "NO SIGNAL"
            })
        })
    }) : e.thumbUrl ? x.jsx("div", {
        className: "tv-screen",
        children: x.jsx("img", {
            src: e.thumbUrl,
            alt: e.title,
            loading: "lazy"
        })
    }) : e.id >= 1e3 ? x.jsx("div", {
        className: "tv-screen",
        children: x.jsxs("div", {
            className: "flex h-full w-full flex-col items-center justify-center gap-1.5 px-4 text-center",
            style: {
                background: "radial-gradient(120% 90% at 50% 0%, rgba(36,137,211,0.35) 0%, rgba(20,42,66,0.95) 55%, #0b1a2a 100%)"
            },
            children: [x.jsx("span", {
                className: "font-display text-lg leading-snug text-white",
                children: e.title
            }), x.jsx("span", {
                className: "font-mono2 text-[11px] tracking-wide",
                style: {
                    color: "rgba(255,255,255,0.65)"
                },
                children: e.url.replace(/^https?:\/\//, "").replace(/\/$/, "")
            })]
        })
    }) : x.jsx("div", {
        className: "tv-screen",
        children: x.jsx("img", {
            src: cO(e.id),
            alt: e.title,
            loading: "lazy"
        })
    })
}

function M3({
    site: e,
    index: i
}) {
    return x.jsxs(tr.div, {
        initial: {
            opacity: 0,
            y: 28
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: !0,
            margin: "-40px"
        },
        transition: {
            duration: .55,
            delay: i % 3 * .08,
            ease: [.22, 1, .36, 1]
        },
        className: "tv-card relative",
        children: [x.jsx("div", {
            className: "tv-glow"
        }), x.jsx("a", {
            href: e.url,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "block",
            onClick: () => ni("site_click", {
                siteId: e.id,
                label: e.title
            }),
            children: x.jsxs("div", {
                className: "tv",
                children: [x.jsx(C3, {
                    site: e
                }), x.jsxs("div", {
                    className: "tv-plate",
                    children: [x.jsx("span", {
                        className: "tv-brand",
                        children: e.url.replace(/^https?:\/\//, "").replace(/\/$/, "")
                    }), x.jsxs("div", {
                        className: "flex gap-1.5 shrink-0",
                        children: [x.jsx("span", {
                            className: "tv-knob"
                        }), x.jsx("span", {
                            className: "tv-knob"
                        })]
                    })]
                })]
            })
        }), x.jsxs("div", {
            className: "px-1.5 pt-4",
            children: [x.jsxs("div", {
                className: "flex items-start justify-between gap-3",
                children: [x.jsx("h3", {
                    className: "font-display text-xl leading-snug",
                    style: {
                        color: "var(--moon)"
                    },
                    children: e.title
                }), x.jsx("a", {
                    href: e.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "mt-1 shrink-0 rounded-full border p-1.5 transition-colors hover:border-[rgba(36,137,211,0.55)]",
                    style: {
                        borderColor: "var(--night-3)",
                        color: "var(--lamp)"
                    },
                    "aria-label": `Visit ${e.title}`,
                    onClick: () => ni("site_click", {
                        siteId: e.id,
                        label: e.title
                    }),
                    children: x.jsx(Qb, {
                        size: 13
                    })
                })]
            }), x.jsx("p", {
                className: "mt-1 text-sm",
                style: {
                    color: "var(--moon-dim)"
                },
                children: e.desc
            }), e.owner && x.jsx("a", {
                href: Kf(e.owner),
                target: "_blank",
                rel: "noopener noreferrer",
                className: "font-mono2 mt-2 inline-block text-xs transition-colors hover:underline",
                style: {
                    color: "var(--lamp)"
                },
                onClick: () => ni("owner_click", {
                    siteId: e.id,
                    label: e.owner
                }),
                children: e.owner
            })]
        })]
    })
}

function D3() {
    const [e, i] = k.useState("all"), {
        data: s
    } = b3();
    k.useEffect(() => {
        ni("page_view")
    }, []);
    const r = k.useMemo(() => {
            const c = (s ? ? []).map(f => ({
                id: 1e3 + f.id,
                title: f.title ? ? "",
                desc: f.description ? ? "",
                owner: f.owner ? ? "",
                url: f.siteUrl,
                category: f.category ? ? "rozmarra",
                views: f.views ? ? 0,
                thumbUrl: f.thumbUrl
            }));
            return [...uO, ...c]
        }, [s]),
        u = k.useMemo(() => [...e === "all" ? r : r.filter(c => c.category === e)].sort((c, f) => c.pinned || f.pinned ? (c.pinned ? ? 1 / 0) - (f.pinned ? ? 1 / 0) : (f.views ? ? 0) - (c.views ? ? 0)), [e, r]);
    return x.jsxs("div", {
        className: "min-h-screen",
        style: {
            background: "var(--night)"
        },
        children: [x.jsxs("header", {
            className: "relative overflow-hidden sm:flex sm:min-h-[72vh] sm:items-end md:min-h-[86vh]",
            children: [x.jsx("img", {
                src: "/images/hero-bench.jpg",
                alt: "",
                className: "block w-full sm:hidden"
            }), x.jsx("div", {
                className: "absolute inset-0 hidden bg-cover bg-top sm:block",
                style: {
                    backgroundImage: "url(/images/hero-bench.jpg)"
                }
            }), x.jsx("div", {
                className: "absolute inset-0",
                style: {
                    background: "linear-gradient(180deg, rgba(238,246,252,0) 0%, rgba(238,246,252,0) 48%, rgba(238,246,252,0.85) 76%, var(--night) 94%)"
                }
            }), x.jsx("div", {
                className: "relative mx-auto max-w-5xl px-4 pb-8 pt-5 text-center sm:px-6 sm:pb-14 sm:pt-0",
                children: x.jsx(tr.p, {
                    initial: {
                        opacity: 0,
                        y: 18
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        delay: .15
                    },
                    className: "mx-auto max-w-2xl text-base leading-relaxed sm:text-lg",
                    style: {
                        color: "var(--moon-dim)"
                    },
                    children: "पुरानी यादों की हर प्लेलिस्ट, एक जगह।"
                })
            })]
        }), x.jsxs("main", {
            className: "mx-auto max-w-6xl px-4 sm:px-6 2xl:max-w-7xl",
            children: [x.jsx("section", {
                className: "mx-auto max-w-2xl pb-14 sm:pb-20",
                children: x.jsxs(tr.div, {
                    initial: {
                        opacity: 0,
                        y: 24
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .6
                    },
                    children: [x.jsxs("div", {
                        className: "mb-6 flex items-center justify-center gap-3",
                        children: [x.jsx("span", {
                            className: "h-px w-12",
                            style: {
                                background: "var(--night-3)"
                            }
                        }), x.jsx("span", {
                            className: "font-mono2 text-[11px] uppercase tracking-[0.3em]",
                            style: {
                                color: "var(--lamp)"
                            },
                            children: "जहाँ से शुरुआत हुई"
                        }), x.jsx("span", {
                            className: "h-px w-12",
                            style: {
                                background: "var(--night-3)"
                            }
                        })]
                    }), x.jsxs("div", {
                        className: "tv-card relative",
                        children: [x.jsx("div", {
                            className: "tv-glow",
                            style: {
                                opacity: .6
                            }
                        }), x.jsx("a", {
                            href: Ri.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "block",
                            onClick: () => ni("site_click", {
                                siteId: 0,
                                label: "Deluxe Saloon (saloon.wtf)"
                            }),
                            children: x.jsxs("div", {
                                className: "tv",
                                children: [x.jsx("div", {
                                    className: "tv-screen",
                                    children: x.jsx("img", {
                                        src: Ri.thumb,
                                        alt: Ri.title
                                    })
                                }), x.jsxs("div", {
                                    className: "tv-plate",
                                    children: [x.jsx("span", {
                                        className: "tv-brand",
                                        children: "saloon.wtf"
                                    }), x.jsxs("div", {
                                        className: "flex gap-1.5 shrink-0",
                                        children: [x.jsx("span", {
                                            className: "tv-knob"
                                        }), x.jsx("span", {
                                            className: "tv-knob"
                                        })]
                                    })]
                                })]
                            })
                        }), x.jsxs("div", {
                            className: "pt-5 text-center",
                            children: [x.jsx("h2", {
                                className: "font-display text-2xl sm:text-3xl",
                                style: {
                                    color: "var(--moon)"
                                },
                                children: Ri.hi
                            }), x.jsx("p", {
                                className: "mt-2 text-sm",
                                style: {
                                    color: "var(--moon-dim)"
                                },
                                children: Ri.desc
                            }), x.jsx("a", {
                                href: Kf(Ri.owner),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "font-mono2 mt-2 inline-block text-xs hover:underline",
                                style: {
                                    color: "var(--lamp)"
                                },
                                children: Ri.owner
                            })]
                        })]
                    })]
                })
            }), x.jsxs("section", {
                className: "pb-10",
                children: [x.jsxs("div", {
                    className: "mb-6 flex flex-wrap items-center gap-3 sm:mb-8",
                    children: [x.jsx(aO, {
                        size: 16,
                        style: {
                            color: "var(--lamp)"
                        }
                    }), x.jsx("h2", {
                        className: "font-display text-xl sm:text-2xl",
                        style: {
                            color: "var(--moon)"
                        },
                        children: "सारी प्लेलिस्ट साइटें"
                    }), x.jsxs("span", {
                        className: "font-mono2 text-xs",
                        style: {
                            color: "var(--moon-dim)"
                        },
                        children: [u.length, "/", r.length]
                    }), x.jsx("div", {
                        className: "ml-auto",
                        children: x.jsx(R3, {})
                    })]
                }), x.jsx("div", {
                    className: "-mx-4 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:-mx-6 sm:px-6",
                    children: x.jsx("div", {
                        className: "flex gap-2.5",
                        children: jh.map(c => x.jsxs("button", {
                            onClick: () => {
                                i(c.key), ni("category_click", {
                                    label: c.en
                                })
                            },
                            className: `chip rounded-full px-4 py-1.5 text-sm ${e===c.key?"active":""}`,
                            children: [c.hi, x.jsx("span", {
                                className: "ml-1.5 text-[11px] opacity-70",
                                children: c.en
                            })]
                        }, c.key))
                    })
                })]
            }), x.jsx("section", {
                className: "grid grid-cols-1 gap-x-6 gap-y-10 pb-20 sm:grid-cols-2 sm:gap-y-14 sm:pb-28 lg:grid-cols-3 lg:gap-x-8 2xl:grid-cols-4",
                children: u.map((c, f) => x.jsx(M3, {
                    site: c,
                    index: f
                }, c.id))
            })]
        }), x.jsx("footer", {
            className: "border-t pb-16 pt-12",
            style: {
                borderColor: "var(--night-3)"
            },
            children: x.jsxs("div", {
                className: "mx-auto max-w-3xl px-4 text-center sm:px-6",
                children: [x.jsx("p", {
                    className: "font-display text-xl",
                    style: {
                        color: "var(--moon)"
                    },
                    children: "एक आईडिया, अनेक कहानियाँ"
                }), x.jsxs("p", {
                    className: "mt-3 text-sm leading-relaxed",
                    style: {
                        color: "var(--moon-dim)"
                    },
                    children: ["The original idea was posted by", " ", x.jsx("a", {
                        href: Kf("@ybhrdwj"),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "hover:underline",
                        style: {
                            color: "var(--lamp)"
                        },
                        children: "@ybhrdwj"
                    }), " ", "as saloon.wtf. The internet took it and made it its own. Every site here belongs to its creator, credited above."]
                }), x.jsx("p", {
                    className: "font-mono2 mt-6 text-[11px] uppercase tracking-[0.3em]",
                    style: {
                        color: "var(--moon-dim)",
                        opacity: .6
                    },
                    children: "curated with love, late at night"
                })]
            })
        })]
    })
}

function O1(e) {
    return ur(on.analytics.overview.queryOptions({
        enabled: e,
        retry: !1,
        refetchInterval: 3e4
    }))
}

function N3(e) {
    return ur(on.analytics.visitors.queryOptions({
        enabled: e,
        retry: !1,
        refetchInterval: 3e4
    }))
}

function j3(e) {
    return ur(on.analytics.visitorEvents.queryOptions({
        input: {
            visitorId: e ? ? ""
        },
        enabled: !!e,
        retry: !1
    }))
}
const U3 = {
    page_view: {
        hi: "पेज खोला",
        color: "#8a6d1a"
    },
    site_click: {
        hi: "प्लेलिस्ट खोली",
        color: "#2489d3"
    },
    owner_click: {
        hi: "क्रिएटर प्रोफ़ाइल क्लिक",
        color: "#6b5ca5"
    },
    category_click: {
        hi: "कैटेगरी फ़िल्टर",
        color: "#1b6b4a"
    },
    submit_open: {
        hi: "सबमिट फ़ॉर्म खोला",
        color: "#a66a2b"
    },
    submit_success: {
        hi: "साइट सबमिट की",
        color: "#1b6b4a"
    }
};

function z3(e) {
    if (!e) return "अज्ञात डिवाइस";
    const i = /Mobile|Android|iPhone|iPad/i.test(e);
    let s = "ब्राउज़र";
    return /Edg\//.test(e) ? s = "Edge" : /Chrome\//.test(e) ? s = "Chrome" : /Firefox\//.test(e) ? s = "Firefox" : /Safari\//.test(e) && (s = "Safari"), `${i?"मोबाइल":"डेस्कटॉप"} - ${s}`
}

function fo(e) {
    return new Date(e).toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short"
    })
}

function Oa({
    children: e,
    className: i = ""
}) {
    return x.jsx("div", {
        className: `rounded-xl p-5 ${i}`,
        style: {
            background: "var(--night-2)",
            border: "1px solid var(--night-3)"
        },
        children: e
    })
}

function k3({
    enabled: e
}) {
    const {
        data: i,
        isLoading: s
    } = O1(e);
    if (s || !i) return x.jsx("p", {
        className: "text-sm",
        style: {
            color: "var(--moon-dim)"
        },
        children: "लोड हो रहा है..."
    });
    const r = [{
            label: "कुल विज़िटर",
            value: i.totals.visitors,
            icon: Xb
        }, {
            label: "कुल विज़िट",
            value: i.totals.sessions,
            icon: VR
        }, {
            label: "पेज व्यू",
            value: i.totals.pageViews,
            icon: Kb
        }, {
            label: "प्लेलिस्ट क्लिक",
            value: i.totals.siteClicks,
            icon: WR
        }],
        u = Math.max(1, ...i.daily.map(f => f.views + f.clicks)),
        c = Math.max(1, ...i.topSites.map(f => f.clicks));
    return x.jsxs("div", {
        className: "space-y-6",
        children: [x.jsx("div", {
            className: "grid grid-cols-2 gap-4 lg:grid-cols-4",
            children: r.map(f => x.jsxs(Oa, {
                children: [x.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [x.jsx(f.icon, {
                        size: 14,
                        style: {
                            color: "var(--lamp)"
                        }
                    }), x.jsx("span", {
                        className: "font-mono2 text-[11px] uppercase tracking-[0.15em]",
                        style: {
                            color: "var(--moon-dim)"
                        },
                        children: f.label
                    })]
                }), x.jsx("p", {
                    className: "font-display mt-2 text-3xl",
                    style: {
                        color: "var(--moon)"
                    },
                    children: f.value
                })]
            }, f.label))
        }), x.jsxs(Oa, {
            children: [x.jsx("h3", {
                className: "font-display text-lg",
                style: {
                    color: "var(--moon)"
                },
                children: "पिछले 14 दिन"
            }), x.jsx("div", {
                className: "mt-4 flex h-36 items-end gap-1.5",
                children: i.daily.map(f => x.jsxs("div", {
                    className: "group relative flex-1",
                    children: [x.jsxs("div", {
                        className: "flex flex-col justify-end gap-px",
                        style: {
                            height: "8.5rem"
                        },
                        children: [x.jsx("div", {
                            className: "w-full rounded-t-sm",
                            style: {
                                height: `${f.clicks/u*100}%`,
                                background: "var(--lamp)",
                                minHeight: f.clicks ? 3 : 0
                            }
                        }), x.jsx("div", {
                            className: "w-full",
                            style: {
                                height: `${f.views/u*100}%`,
                                background: "rgba(36,137,211,0.28)",
                                minHeight: f.views ? 3 : 0
                            }
                        })]
                    }), x.jsxs("div", {
                        className: "pointer-events-none absolute -top-9 left-1/2 z-10 hidden -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-1 text-[10px] group-hover:block",
                        style: {
                            background: "var(--moon)",
                            color: "var(--night)"
                        },
                        children: [f.date.slice(5), " : ", f.views, " व्यू, ", f.clicks, " क्लिक"]
                    })]
                }, f.date))
            }), x.jsxs("div", {
                className: "font-mono2 mt-3 flex gap-4 text-[11px]",
                style: {
                    color: "var(--moon-dim)"
                },
                children: [x.jsxs("span", {
                    className: "flex items-center gap-1.5",
                    children: [x.jsx("span", {
                        className: "h-2 w-2 rounded-sm",
                        style: {
                            background: "rgba(36,137,211,0.28)"
                        }
                    }), " पेज व्यू"]
                }), x.jsxs("span", {
                    className: "flex items-center gap-1.5",
                    children: [x.jsx("span", {
                        className: "h-2 w-2 rounded-sm",
                        style: {
                            background: "var(--lamp)"
                        }
                    }), " प्लेलिस्ट क्लिक"]
                })]
            })]
        }), x.jsxs("div", {
            className: "grid gap-6 lg:grid-cols-2",
            children: [x.jsxs(Oa, {
                children: [x.jsx("h3", {
                    className: "font-display text-lg",
                    style: {
                        color: "var(--moon)"
                    },
                    children: "सबसे ज़्यादा खोली गई प्लेलिस्ट"
                }), i.topSites.length === 0 && x.jsx("p", {
                    className: "mt-3 text-sm",
                    style: {
                        color: "var(--moon-dim)"
                    },
                    children: "अभी तक कोई क्लिक नहीं।"
                }), x.jsx("div", {
                    className: "mt-4 space-y-3",
                    children: i.topSites.map((f, m) => x.jsxs("div", {
                        children: [x.jsxs("div", {
                            className: "flex items-baseline justify-between gap-3",
                            children: [x.jsxs("span", {
                                className: "truncate text-sm",
                                style: {
                                    color: "var(--moon)"
                                },
                                children: [x.jsxs("span", {
                                    className: "font-mono2 mr-2 text-[11px]",
                                    style: {
                                        color: "var(--moon-dim)"
                                    },
                                    children: [m + 1, "."]
                                }), f.label]
                            }), x.jsx("span", {
                                className: "font-mono2 shrink-0 text-xs",
                                style: {
                                    color: "var(--lamp)"
                                },
                                children: f.clicks
                            })]
                        }), x.jsx("div", {
                            className: "mt-1.5 h-1.5 rounded-full",
                            style: {
                                background: "var(--night)"
                            },
                            children: x.jsx("div", {
                                className: "h-full rounded-full",
                                style: {
                                    width: `${f.clicks/c*100}%`,
                                    background: "var(--lamp)"
                                }
                            })
                        })]
                    }, `${f.siteId}-${f.label}`))
                })]
            }), x.jsxs(Oa, {
                children: [x.jsx("h3", {
                    className: "font-display text-lg",
                    style: {
                        color: "var(--moon)"
                    },
                    children: "कैटेगरी फ़िल्टर"
                }), i.categories.length === 0 && x.jsx("p", {
                    className: "mt-3 text-sm",
                    style: {
                        color: "var(--moon-dim)"
                    },
                    children: "अभी तक कोई फ़िल्टर क्लिक नहीं।"
                }), x.jsx("div", {
                    className: "mt-4 flex flex-wrap gap-2",
                    children: i.categories.map(f => x.jsxs("span", {
                        className: "font-mono2 rounded-full px-3 py-1.5 text-xs",
                        style: {
                            background: "var(--night)",
                            border: "1px solid var(--night-3)",
                            color: "var(--moon)"
                        },
                        children: [f.label, " ", x.jsx("span", {
                            style: {
                                color: "var(--lamp)"
                            },
                            children: f.clicks
                        })]
                    }, f.label))
                })]
            })]
        })]
    })
}

function V3({
    visitorId: e
}) {
    const {
        data: i,
        isLoading: s
    } = j3(e);
    return s ? x.jsx("p", {
        className: "mt-4 text-sm",
        style: {
            color: "var(--moon-dim)"
        },
        children: "लोड हो रहा है..."
    }) : x.jsx("div", {
        className: "mt-4 space-y-2 border-t pt-4",
        style: {
            borderColor: "var(--night-3)"
        },
        children: i ? .map(r => {
            const u = U3[r.type] ? ? {
                hi: r.type,
                color: "var(--moon-dim)"
            };
            return x.jsxs("div", {
                className: "flex items-baseline gap-3 text-sm",
                children: [x.jsx("span", {
                    className: "font-mono2 shrink-0 text-[11px]",
                    style: {
                        color: "var(--moon-dim)"
                    },
                    children: fo(r.createdAt)
                }), x.jsx("span", {
                    className: "font-mono2 shrink-0 rounded-full px-2 py-0.5 text-[10px]",
                    style: {
                        color: u.color,
                        background: "var(--night)"
                    },
                    children: u.hi
                }), r.label && x.jsx("span", {
                    className: "truncate",
                    style: {
                        color: "var(--moon)"
                    },
                    children: r.label
                })]
            }, r.id)
        })
    })
}

function _3({
    enabled: e
}) {
    const {
        data: i,
        isLoading: s
    } = N3(e), [r, u] = k.useState(null);
    return s || !i ? x.jsx("p", {
        className: "text-sm",
        style: {
            color: "var(--moon-dim)"
        },
        children: "लोड हो रहा है..."
    }) : i.length === 0 ? x.jsx("p", {
        className: "text-sm",
        style: {
            color: "var(--moon-dim)"
        },
        children: "अभी तक कोई विज़िटर नहीं।"
    }) : x.jsx("div", {
        className: "space-y-3",
        children: i.map(c => {
            const f = r === c.visitorId;
            return x.jsxs(Oa, {
                children: [x.jsxs("button", {
                    className: "block w-full text-left",
                    onClick: () => u(f ? null : c.visitorId),
                    children: [x.jsxs("div", {
                        className: "flex flex-wrap items-center gap-x-4 gap-y-1.5",
                        children: [x.jsx("span", {
                            className: "font-mono2 text-xs",
                            style: {
                                color: "var(--lamp)"
                            },
                            children: c.visitorId.slice(0, 8)
                        }), x.jsxs("span", {
                            className: "flex items-center gap-1.5 text-xs",
                            style: {
                                color: "var(--moon-dim)"
                            },
                            children: [x.jsx(IR, {
                                size: 12
                            }), z3(c.ua)]
                        }), x.jsxs("span", {
                            className: "font-mono2 ml-auto text-[11px]",
                            style: {
                                color: "var(--moon-dim)"
                            },
                            children: ["आख़िरी बार: ", fo(c.lastSeen)]
                        })]
                    }), x.jsxs("div", {
                        className: "font-mono2 mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[11px]",
                        style: {
                            color: "var(--moon-dim)"
                        },
                        children: [x.jsxs("span", {
                            children: ["विज़िट ", x.jsx("b", {
                                style: {
                                    color: "var(--moon)"
                                },
                                children: c.sessions
                            })]
                        }), x.jsxs("span", {
                            children: ["पेज व्यू ", x.jsx("b", {
                                style: {
                                    color: "var(--moon)"
                                },
                                children: c.pageViews
                            })]
                        }), x.jsxs("span", {
                            children: ["प्लेलिस्ट क्लिक ", x.jsx("b", {
                                style: {
                                    color: "var(--moon)"
                                },
                                children: c.siteClicks
                            })]
                        }), x.jsxs("span", {
                            children: ["कुल इंटरैक्शन ", x.jsx("b", {
                                style: {
                                    color: "var(--moon)"
                                },
                                children: c.events
                            })]
                        }), x.jsxs("span", {
                            children: ["पहली बार: ", fo(c.firstSeen)]
                        })]
                    })]
                }), f && x.jsx(V3, {
                    visitorId: c.visitorId
                })]
            }, c.visitorId)
        })
    })
}
const Gv = {
    pending: {
        hi: "पेंडिंग",
        color: "#8a6d1a",
        bg: "rgba(212, 168, 43, 0.14)"
    },
    accepted: {
        hi: "स्वीकृत",
        color: "#1b6b4a",
        bg: "rgba(27, 107, 74, 0.12)"
    },
    rejected: {
        hi: "अस्वीकृत",
        color: "#a63a2b",
        bg: "rgba(166, 58, 43, 0.12)"
    }
};

function L3(e) {
    try {
        const i = new URL(e).pathname.split("/")[1];
        return i && i !== "i" ? `@${i}` : ""
    } catch {
        return ""
    }
}
const qs = {
    background: "var(--night)",
    border: "1px solid var(--night-3)",
    color: "var(--moon)"
};

function B3({
    s: e,
    onDone: i
}) {
    const s = x3(),
        [r, u] = k.useState(e.title ? ? ""),
        [c, f] = k.useState(e.description ? ? ""),
        [m, d] = k.useState(e.owner ? ? L3(e.tweetUrl)),
        [p, y] = k.useState(e.category ? ? "rozmarra"),
        [v, S] = k.useState(String(e.views || "")),
        R = w => {
            w.preventDefault(), !s.isPending && s.mutate({
                id: e.id,
                title: r.trim(),
                description: c.trim(),
                owner: m.trim(),
                category: p,
                views: Math.max(0, parseInt(v, 10) || 0)
            }, {
                onSuccess: i
            })
        };
    return x.jsxs("form", {
        onSubmit: R,
        className: "mt-4 space-y-3 border-t pt-4",
        style: {
            borderColor: "var(--night-3)"
        },
        children: [x.jsxs("div", {
            className: "grid gap-3 sm:grid-cols-2",
            children: [x.jsxs("div", {
                children: [x.jsx("label", {
                    className: "font-mono2 mb-1 block text-[11px] uppercase tracking-[0.15em]",
                    style: {
                        color: "var(--moon-dim)"
                    },
                    children: "साइट का नाम"
                }), x.jsx("input", {
                    value: r,
                    onChange: w => u(w.target.value),
                    required: !0,
                    maxLength: 80,
                    placeholder: "जैसे: यूपी बस ड्राइवर",
                    className: "w-full rounded-lg px-3 py-2 text-sm outline-none",
                    style: qs
                })]
            }), x.jsxs("div", {
                children: [x.jsx("label", {
                    className: "font-mono2 mb-1 block text-[11px] uppercase tracking-[0.15em]",
                    style: {
                        color: "var(--moon-dim)"
                    },
                    children: "क्रिएटर हैंडल"
                }), x.jsx("input", {
                    value: m,
                    onChange: w => d(w.target.value),
                    maxLength: 40,
                    placeholder: "@handle",
                    className: "w-full rounded-lg px-3 py-2 text-sm outline-none",
                    style: qs
                })]
            })]
        }), x.jsxs("div", {
            children: [x.jsx("label", {
                className: "font-mono2 mb-1 block text-[11px] uppercase tracking-[0.15em]",
                style: {
                    color: "var(--moon-dim)"
                },
                children: "छोटा विवरण"
            }), x.jsx("input", {
                value: c,
                onChange: w => f(w.target.value),
                required: !0,
                maxLength: 200,
                placeholder: "एक लाइन में साइट के बारे में",
                className: "w-full rounded-lg px-3 py-2 text-sm outline-none",
                style: qs
            })]
        }), x.jsxs("div", {
            className: "grid gap-3 sm:grid-cols-2",
            children: [x.jsxs("div", {
                children: [x.jsx("label", {
                    className: "font-mono2 mb-1 block text-[11px] uppercase tracking-[0.15em]",
                    style: {
                        color: "var(--moon-dim)"
                    },
                    children: "कैटेगरी"
                }), x.jsx("select", {
                    value: p,
                    onChange: w => y(w.target.value),
                    className: "w-full rounded-lg px-3 py-2 text-sm outline-none",
                    style: qs,
                    children: jh.filter(w => w.key !== "all").map(w => x.jsxs("option", {
                        value: w.key,
                        children: [w.hi, " (", w.en, ")"]
                    }, w.key))
                })]
            }), x.jsxs("div", {
                children: [x.jsx("label", {
                    className: "font-mono2 mb-1 block text-[11px] uppercase tracking-[0.15em]",
                    style: {
                        color: "var(--moon-dim)"
                    },
                    children: "व्यूज़ (X पोस्ट के, सॉर्टिंग के लिए)"
                }), x.jsx("input", {
                    value: v,
                    onChange: w => S(w.target.value.replace(/[^\d]/g, "")),
                    inputMode: "numeric",
                    placeholder: "जैसे: 120",
                    className: "w-full rounded-lg px-3 py-2 text-sm outline-none",
                    style: qs
                })]
            })]
        }), s.isError && x.jsx("p", {
            className: "text-xs",
            style: {
                color: "#a63a2b"
            },
            children: "सेव नहीं हो पाया, दोबारा कोशिश कीजिए।"
        }), x.jsxs("div", {
            className: "flex flex-wrap items-center gap-2",
            children: [x.jsxs("button", {
                type: "submit",
                disabled: s.isPending,
                className: "flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60",
                style: {
                    background: "#1b6b4a"
                },
                children: [x.jsx(Gf, {
                    size: 12
                }), s.isPending ? "सेव हो रहा है..." : "स्वीकार करके साइट पर दिखाएँ"]
            }), x.jsx("button", {
                type: "button",
                onClick: i,
                className: "rounded-full border px-4 py-1.5 text-xs transition-colors hover:border-[rgba(36,137,211,0.55)]",
                style: {
                    borderColor: "var(--night-3)",
                    color: "var(--moon-dim)"
                },
                children: "रद्द करें"
            })]
        })]
    })
}

function H3({
    enabled: e
}) {
    const {
        data: i,
        isLoading: s
    } = S3(e), r = T3(), [u, c] = k.useState(null);
    return x.jsxs("div", {
        className: "space-y-4",
        children: [s && x.jsx("p", {
            className: "text-sm",
            style: {
                color: "var(--moon-dim)"
            },
            children: "लोड हो रहा है..."
        }), !s && (i ? .length ? ? 0) === 0 && x.jsx("p", {
            className: "text-sm",
            style: {
                color: "var(--moon-dim)"
            },
            children: "अभी तक कोई रिक्वेस्ट नहीं आई।"
        }), i ? .map(f => {
            const m = Gv[f.status] ? ? Gv.pending;
            return x.jsxs(Oa, {
                children: [x.jsxs("div", {
                    className: "flex flex-wrap items-center gap-x-3 gap-y-1.5",
                    children: [x.jsxs("a", {
                        href: f.siteUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-center gap-1.5 text-sm font-medium hover:underline",
                        style: {
                            color: "var(--moon)"
                        },
                        children: [f.siteUrl.replace(/^https?:\/\//, "").replace(/\/$/, ""), x.jsx(Qb, {
                            size: 12,
                            style: {
                                color: "var(--lamp)"
                            }
                        })]
                    }), x.jsx("span", {
                        className: "font-mono2 rounded-full px-2.5 py-0.5 text-[11px]",
                        style: {
                            color: m.color,
                            background: m.bg
                        },
                        children: m.hi
                    }), f.status === "accepted" && (f.title ? x.jsxs("span", {
                        className: "font-mono2 flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px]",
                        style: {
                            color: "#1b6b4a",
                            background: "rgba(27, 107, 74, 0.12)"
                        },
                        children: [x.jsx(Gf, {
                            size: 10
                        }), "साइट पर जोड़ी गई"]
                    }) : x.jsx("span", {
                        className: "font-mono2 rounded-full px-2.5 py-0.5 text-[11px]",
                        style: {
                            color: "#b8860b",
                            background: "rgba(184, 134, 11, 0.12)"
                        },
                        children: "मेटाडेटा बाकी"
                    }))]
                }), x.jsx("a", {
                    href: f.tweetUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "font-mono2 mt-1.5 block break-all text-xs hover:underline",
                    style: {
                        color: "var(--lamp)"
                    },
                    children: f.tweetUrl
                }), f.status === "accepted" && f.title && x.jsxs("div", {
                    className: "mt-2 flex flex-wrap items-center gap-2",
                    children: [x.jsx("span", {
                        className: "text-sm font-medium",
                        style: {
                            color: "var(--moon)"
                        },
                        children: f.title
                    }), x.jsx("span", {
                        className: "font-mono2 rounded-full px-2.5 py-0.5 text-[11px]",
                        style: {
                            color: "var(--lamp)",
                            background: "rgba(36, 137, 211, 0.12)"
                        },
                        children: jh.find(d => d.key === f.category) ? .hi ? ? f.category
                    }), x.jsxs("span", {
                        className: "font-mono2 text-[11px]",
                        style: {
                            color: "var(--moon-dim)"
                        },
                        children: [f.views, " व्यूज़"]
                    })]
                }), x.jsxs("div", {
                    className: "mt-3 flex flex-wrap items-center gap-2",
                    children: [f.status === "pending" ? x.jsxs(x.Fragment, {
                        children: [x.jsxs("button", {
                            onClick: () => c(u === f.id ? null : f.id),
                            className: "flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-90",
                            style: {
                                background: "#1b6b4a"
                            },
                            children: [x.jsx(Gf, {
                                size: 12
                            }), "स्वीकार करें"]
                        }), x.jsxs("button", {
                            onClick: () => r.mutate({
                                id: f.id,
                                status: "rejected"
                            }),
                            disabled: r.isPending,
                            className: "flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-medium transition-colors hover:border-[#a63a2b]",
                            style: {
                                borderColor: "var(--night-3)",
                                color: "#a63a2b"
                            },
                            children: [x.jsx(Zb, {
                                size: 12
                            }), "अस्वीकार करें"]
                        })]
                    }) : x.jsxs(x.Fragment, {
                        children: [f.status === "accepted" && x.jsxs("button", {
                            onClick: () => c(u === f.id ? null : f.id),
                            className: "flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs transition-colors hover:border-[rgba(36,137,211,0.55)]",
                            style: {
                                borderColor: "var(--night-3)",
                                color: "var(--lamp)"
                            },
                            children: [x.jsx(tO, {
                                size: 11
                            }), "एडिट करें"]
                        }), x.jsxs("button", {
                            onClick: () => r.mutate({
                                id: f.id,
                                status: "pending"
                            }),
                            disabled: r.isPending,
                            className: "flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs transition-colors hover:border-[rgba(36,137,211,0.55)]",
                            style: {
                                borderColor: "var(--night-3)",
                                color: "var(--moon-dim)"
                            },
                            children: [x.jsx(rO, {
                                size: 11
                            }), "पेंडिंग पर वापस"]
                        })]
                    }), x.jsx("span", {
                        className: "font-mono2 ml-auto text-[11px]",
                        style: {
                            color: "var(--moon-dim)"
                        },
                        children: fo(f.createdAt)
                    })]
                }), u === f.id && x.jsx(B3, {
                    s: f,
                    onDone: () => c(null)
                })]
            }, f.id)
        })]
    })
}
const q3 = [{
    key: "overview",
    hi: "ओवरव्यू",
    icon: Kb
}, {
    key: "visitors",
    hi: "विज़िटर",
    icon: Xb
}, {
    key: "submissions",
    hi: "साइट रिक्वेस्ट",
    icon: GR
}];

function Kv({
    initialTab: e = "overview"
}) {
    const [, i] = n0(), [s, r] = k.useState(e), u = !!wo(), {
        error: c
    } = O1(u);
    if (k.useEffect(() => {
            if (!u) {
                i("/login");
                return
            }
            c && (Pv(), i("/login"))
        }, [u, c, i]), !u || c) return x.jsx("div", {
        className: "flex min-h-screen items-center justify-center",
        style: {
            background: "var(--night)"
        },
        children: x.jsx("p", {
            className: "text-sm",
            style: {
                color: "var(--moon-dim)"
            },
            children: "लोड हो रहा है..."
        })
    });
    const f = async () => {
        await w1.signOut(), Pv(), i("/login")
    };
    return x.jsx("div", {
        className: "min-h-screen px-4 py-12 sm:px-6",
        style: {
            background: "var(--night)"
        },
        children: x.jsxs("div", {
            className: "mx-auto max-w-4xl",
            children: [x.jsxs("div", {
                className: "flex items-center gap-3",
                children: [x.jsx("h1", {
                    className: "font-display text-2xl",
                    style: {
                        color: "var(--moon)"
                    },
                    children: "एडमिन डैशबोर्ड"
                }), x.jsxs("button", {
                    onClick: f,
                    className: "ml-auto flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs transition-colors hover:border-[rgba(36,137,211,0.55)]",
                    style: {
                        borderColor: "var(--night-3)",
                        color: "var(--moon-dim)"
                    },
                    children: [x.jsx(ZR, {
                        size: 12
                    }), "साइन आउट"]
                })]
            }), x.jsx("div", {
                className: "mt-6 flex flex-wrap gap-2",
                children: q3.map(m => x.jsxs("button", {
                    onClick: () => r(m.key),
                    className: `chip flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm ${s===m.key?"active":""}`,
                    children: [x.jsx(m.icon, {
                        size: 13
                    }), m.hi]
                }, m.key))
            }), x.jsxs("div", {
                className: "mt-8",
                children: [s === "overview" && x.jsx(k3, {
                    enabled: u
                }), s === "visitors" && x.jsx(_3, {
                    enabled: u
                }), s === "submissions" && x.jsx(H3, {
                    enabled: u
                })]
            })]
        })
    })
}

function P3() {
    const [, e] = n0(), [i, s] = k.useState(""), [r, u] = k.useState(""), [c, f] = k.useState(""), [m, d] = k.useState(!1), p = async v => {
        if (v.preventDefault(), m) return;
        f(""), d(!0);
        const S = await w1.signIn.email({
            email: i,
            password: r
        });
        if (d(!1), S.error) {
            f("ग़लत ईमेल या पासवर्ड।");
            return
        }
        e("/admin")
    }, y = {
        background: "var(--night)",
        border: "1px solid var(--night-3)",
        color: "var(--moon)"
    };
    return x.jsx("div", {
        className: "flex min-h-screen items-center justify-center px-4",
        style: {
            background: "var(--night)"
        },
        children: x.jsxs("div", {
            className: "w-full max-w-sm rounded-2xl p-8",
            style: {
                background: "var(--night-2)",
                border: "1px solid var(--night-3)"
            },
            children: [x.jsx("div", {
                className: "mx-auto flex h-11 w-11 items-center justify-center rounded-full",
                style: {
                    background: "var(--lamp-soft)"
                },
                children: x.jsx(YR, {
                    size: 18,
                    style: {
                        color: "var(--lamp)"
                    }
                })
            }), x.jsx("h1", {
                className: "font-display mt-4 text-center text-2xl",
                style: {
                    color: "var(--moon)"
                },
                children: "एडमिन लॉगिन"
            }), x.jsx("p", {
                className: "mt-1.5 text-center text-sm",
                style: {
                    color: "var(--moon-dim)"
                },
                children: "साइट रिक्वेस्ट देखने के लिए साइन इन कीजिए।"
            }), x.jsxs("form", {
                onSubmit: p,
                className: "mt-6 space-y-4",
                children: [x.jsxs("div", {
                    children: [x.jsx("label", {
                        className: "font-mono2 mb-1.5 block text-[11px] uppercase tracking-[0.2em]",
                        style: {
                            color: "var(--moon-dim)"
                        },
                        children: "ईमेल"
                    }), x.jsx("input", {
                        type: "email",
                        required: !0,
                        autoComplete: "email",
                        value: i,
                        onChange: v => s(v.target.value),
                        className: "w-full rounded-lg px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[var(--lamp)]",
                        style: y
                    })]
                }), x.jsxs("div", {
                    children: [x.jsx("label", {
                        className: "font-mono2 mb-1.5 block text-[11px] uppercase tracking-[0.2em]",
                        style: {
                            color: "var(--moon-dim)"
                        },
                        children: "पासवर्ड"
                    }), x.jsx("input", {
                        type: "password",
                        required: !0,
                        autoComplete: "current-password",
                        value: r,
                        onChange: v => u(v.target.value),
                        className: "w-full rounded-lg px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[var(--lamp)]",
                        style: y
                    })]
                }), c && x.jsx("p", {
                    className: "text-sm",
                    style: {
                        color: "#c0392b"
                    },
                    children: c
                }), x.jsxs("button", {
                    type: "submit",
                    disabled: m,
                    className: "flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60",
                    style: {
                        background: "var(--lamp)"
                    },
                    children: [m && x.jsx(Yb, {
                        size: 14,
                        className: "animate-spin"
                    }), "साइन इन"]
                })]
            })]
        })
    })
}
const G3 = new VO;

function K3({
    children: e
}) {
    return x.jsx(_O, {
        client: G3,
        children: e
    })
}
Zv();
let Q3 = {
        data: ""
    },
    Y3 = e => {
        if (typeof window == "object") {
            let i = (e ? e.querySelector("#_goober") : window._goober) || Object.assign(document.createElement("style"), {
                innerHTML: " ",
                id: "_goober"
            });
            return i.nonce = window.__nonce__, i.parentNode || (e || document.head).appendChild(i), i.firstChild
        }
        return e || Q3
    },
    X3 = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
    Z3 = /\/\*[^]*?\*\/|  +/g,
    Qv = /\n+/g,
    $n = (e, i) => {
        let s = "",
            r = "",
            u = "";
        for (let c in e) {
            let f = e[c];
            c[0] == "@" ? c[1] == "i" ? s = c + " " + f + ";" : r += c[1] == "f" ? $n(f, c) : c + "{" + $n(f, c[1] == "k" ? "" : i) + "}" : typeof f == "object" ? r += $n(f, i ? i.replace(/([^,])+/g, m => c.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, d => /&/.test(d) ? d.replace(/&/g, m) : m ? m + " " + d : d)) : c) : f != null && (c = /^--/.test(c) ? c : c.replace(/[A-Z]/g, "-$&").toLowerCase(), u += $n.p ? $n.p(c, f) : c + ":" + f + ";")
        }
        return s + (i && u ? i + "{" + u + "}" : u) + r
    },
    En = {},
    C1 = e => {
        if (typeof e == "object") {
            let i = "";
            for (let s in e) i += s + C1(e[s]);
            return i
        }
        return e
    },
    F3 = (e, i, s, r, u) => {
        let c = C1(e),
            f = En[c] || (En[c] = (d => {
                let p = 0,
                    y = 11;
                for (; p < d.length;) y = 101 * y + d.charCodeAt(p++) >>> 0;
                return "go" + y
            })(c));
        if (!En[f]) {
            let d = c !== e ? e : (p => {
                let y, v, S = [{}];
                for (; y = X3.exec(p.replace(Z3, ""));) y[4] ? S.shift() : y[3] ? (v = y[3].replace(Qv, " ").trim(), S.unshift(S[0][v] = S[0][v] || {})) : S[0][y[1]] = y[2].replace(Qv, " ").trim();
                return S[0]
            })(e);
            En[f] = $n(u ? {
                ["@keyframes " + f]: d
            } : d, s ? "" : "." + f)
        }
        let m = s && En.g ? En.g : null;
        return s && (En.g = En[f]), ((d, p, y, v) => {
            v ? p.data = p.data.replace(v, d) : p.data.indexOf(d) === -1 && (p.data = y ? d + p.data : p.data + d)
        })(En[f], i, r, m), f
    },
    I3 = (e, i, s) => e.reduce((r, u, c) => {
        let f = i[c];
        if (f && f.call) {
            let m = f(s),
                d = m && m.props && m.props.className || /^go/.test(m) && m;
            f = d ? "." + d : m && typeof m == "object" ? m.props ? "" : $n(m, "") : m === !1 ? "" : m
        }
        return r + u + (f ? ? "")
    }, "");

function Kh(e) {
    let i = this || {},
        s = e.call ? e(i.p) : e;
    return F3(s.unshift ? s.raw ? I3(s, [].slice.call(arguments, 1), i.p) : s.reduce((r, u) => Object.assign(r, u && u.call ? u(i.p) : u), {}) : s, Y3(i.target), i.g, i.o, i.k)
}
let M1, th, eh;
Kh.bind({
    g: 1
});
Kh.bind({
    k: 1
});

function J3(e, i, s, r) {
    $n.p = i, M1 = e, th = s, eh = r
}

function Yv(e, i) {
    let s = this || {};
    return function() {
        let r = arguments;

        function u(c, f) {
            let m = Object.assign({}, c),
                d = m.className || u.className;
            s.p = Object.assign({
                theme: th && th()
            }, m), s.o = / *go\d+/.test(d), m.className = Kh.apply(s, r) + (d ? " " + d : ""), i && (m.ref = f);
            let p = e;
            return e[0] && (p = m.as || e, delete m.as), eh && p[0] && eh(m), M1(p, m)
        }
        return i ? i(u) : u
    }
}
const W3 = new Set(["P", "SPAN", "A", "LABEL", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "TD", "TH", "BLOCKQUOTE", "PRE", "CODE", "EM", "STRONG", "SMALL", "SUB", "SUP", "ABBR", "CITE", "Q", "DFN", "TIME", "MARK"]);
["* { cursor: crosshair !important; }", `${[...W3].map(e=>e.toLowerCase()).join(", ")} { cursor: text !important; }`, "[data-runable-interactive], [data-runable-interactive] * { cursor: pointer !important; }", "[data-runable-ignore], [data-runable-ignore] * { cursor: auto !important; }", "[data-runable-badge], [data-runable-badge] * { cursor: pointer !important; }"].join(`
`);
k.createContext(null);
const yt = {
    primary: "oklch(0.8489 0.146 208.1)",
    primaryForeground: "oklch(0 0 0)",
    foreground: "oklch(1 0 89.9 / 0.8)",
    mutedForeground: "#7E7E7E",
    popover: "#282828",
    secondary700: "#303030",
    secondary800: "#282828",
    secondary200: "#c3c3c3",
    secondary100: "#ededed",
    secondary500: "#383838",
    secondary900: "#212121",
    border: "#333333",
    accent: "oklch(1 0 89.9 / 0.039)",
    font: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
};
J3(k.createElement);
const Xv = typeof document > "u" ? null : document.createElement("div"),
    Bt = Xv ? Yv.bind({
        target: Xv
    }) : Yv;
Bt("div")
`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 12px;
  border: 0.5px solid ${yt.border};
  background-color: ${yt.popover};
  padding: 8px;
  font-family: ${yt.font};
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
`;
Bt("div")
`
  overflow-x: auto;
`;
Bt("div")
`
  display: flex;
  gap: 8px;
  padding: 8px 6px 2px 0;
`;
Bt("div")
`
  position: relative;
  flex-shrink: 0;
  &:hover .remove-btn {
    display: flex;
  }
  &:hover .index-badge {
    display: none;
  }
`;
Bt("img")
`
  height: 56px;
  width: 56px;
  border-radius: 8px;
  object-fit: cover;
  display: block;
`;
Bt("span")
`
  position: absolute;
  right: -6px;
  top: -6px;
  display: flex;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 10px;
  font-weight: 600;
  line-height: 1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;
Bt("button")
`
  position: absolute;
  right: -6px;
  top: -6px;
  display: none;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${yt.secondary700};
  color: ${yt.secondary200};
  border: none;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 0;
  &:hover {
    color: ${yt.foreground};
  }
`;
Bt("div")
`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;
Bt("button")
`
  display: flex;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  transition:
    background-color 0.15s ease,
    color 0.15s ease;
  padding: 0;
  background: ${e=>e.$variant==="fg"?yt.foreground:yt.accent};
  color: ${e=>e.$variant==="fg"?yt.popover:yt.mutedForeground};
  cursor: ${e=>e.$variant==="disabled"?"default":"pointer"};
  &:hover {
    color: ${e=>e.$variant!=="disabled"?yt.foreground:void 0};
  }
`;
Bt("textarea")
`
  flex: 1;
  min-width: 0;
  resize: none;
  border: none;
  background: transparent;
  padding: 4px 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: ${yt.foreground};
  outline: none;
  font-family: ${yt.font};
  &::placeholder {
    color: ${yt.mutedForeground};
  }
  &:disabled {
    opacity: 0.5;
  }
`;
Bt("div")
`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  border-radius: 12px;
  border: 1px solid ${yt.border};
  background: ${yt.secondary700};
  padding: 10px;
  font-family: ${yt.font};
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
`;
Bt("div")
`
  display: flex;
  height: 32px;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: white;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 12px;
  font-weight: 500;
  color: ${yt.secondary900};
`;
Bt("div")
`
  display: flex;
  align-items: center;
`;
Bt("button")
`
  display: flex;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: ${e=>e.$disabled?yt.mutedForeground:yt.secondary100};
  cursor: ${e=>e.$disabled?"default":"pointer"};
  transition: color 0.15s ease;
  padding: 0;
  &:hover {
    color: ${e=>e.$disabled?void 0:yt.foreground};
  }
`;
Bt("div")
`
  display: flex;
  align-items: center;
  gap: 8px;
`;
Bt("button")
`
  display: flex;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid ${yt.secondary500};
  background: rgba(0, 0, 0, 0.05);
  padding-left: 10px;
  padding-right: 10px;
  font-size: 12px;
  font-weight: 500;
  color: ${yt.secondary200};
  cursor: pointer;
  font-family: ${yt.font};
  transition: color 0.15s ease;
  &:hover {
    color: ${yt.foreground};
  }
`;
Bt("button")
`
  display: flex;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: none;
  background: ${yt.primary};
  padding-left: 10px;
  padding-right: 10px;
  font-size: 12px;
  font-weight: 500;
  color: ${yt.primaryForeground};
  cursor: pointer;
  font-family: ${yt.font};
  transition: background-color 0.15s ease;
  &:hover {
    background: color-mix(in oklab, ${yt.primary} 85%, black);
  }
`;
Bt("div")
`
  border-radius: 12px;
  border: 1px solid ${yt.border};
  background: ${yt.secondary700};
  padding: 4px;
  font-family: ${yt.font};
  box-sizing: border-box;
  max-height: 240px;
  overflow-y: auto;
  min-width: 260px;
  * {
    box-sizing: border-box;
  }
`;
const $3 = Bt("button")
`
  display: flex;
  width: 28px;
  height: 28px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: ${yt.mutedForeground};
  cursor: pointer;
  flex-shrink: 0;
  padding: 0;
  opacity: 0;
  transition:
    opacity 0.12s ease,
    color 0.12s ease,
    background 0.12s ease;
  &:hover {
    color: #f87171;
    background: rgba(248, 113, 113, 0.1);
  }
`;
Bt("div")
`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-radius: 8px;
  background: transparent;
  transition: background 0.12s ease;
  &:hover {
    background: ${yt.secondary800};
  }
  &:hover ${$3} {
    opacity: 1;
  }
`;
Bt("div")
`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${yt.primary};
  color: ${yt.primaryForeground};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 600;
  flex-shrink: 0;
`;
Bt("span")
`
  flex: 1;
  min-width: 0;
  font-size: 13px;
  font-weight: 500;
  color: ${yt.secondary200};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

function t4({
    size: e = 16
}) {
    return x.jsxs("svg", {
        width: e,
        height: e,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [x.jsx("path", {
            d: "M10.7602 14.9542C12.0038 14.9542 13.0119 13.9461 13.0119 12.7024C13.0119 11.4588 12.0038 10.4507 10.7602 10.4507C9.93434 10.4507 9.21233 10.8953 8.82043 11.5582L8.76855 11.62C8.35431 12.1137 7.59426 12.1123 7.18182 11.6171L7.11497 11.5369C6.7203 10.8858 6.00497 10.4507 5.18801 10.4507C3.9444 10.4507 2.93625 11.4588 2.93625 12.7024C2.93625 13.9461 3.9444 14.9542 5.18801 14.9542C5.99402 14.9542 6.70113 14.5307 7.09894 13.8941L7.18899 13.7883C7.60088 13.3045 8.34765 13.3031 8.7613 13.7855L8.83587 13.8724C9.23108 14.5211 9.94504 14.9542 10.7602 14.9542Z",
            fill: "white"
        }), x.jsx("path", {
            d: "M7.20609 4.29404C7.82789 3.21703 7.45889 1.83987 6.38188 1.21807C5.30489 0.596265 3.92772 0.965272 3.30592 2.04227C2.89297 2.75753 2.91701 3.6052 3.29525 4.27604L3.32282 4.35173C3.54327 4.95733 3.16203 5.61486 2.52691 5.72442L2.42374 5.74224C1.66263 5.75857 0.928259 6.1605 0.519812 6.86795C-0.101994 7.94496 0.267016 9.32211 1.34401 9.94392C2.42101 10.5657 3.79818 10.1967 4.41998 9.11971C4.82291 8.42182 4.80978 7.59789 4.45757 6.93512L4.41084 6.80382C4.19775 6.2052 4.56996 5.5578 5.1945 5.44073L5.30707 5.41965C6.06643 5.4017 6.79851 4.99996 7.20609 4.29404Z",
            fill: "white"
        }), x.jsx("path", {
            d: "M11.5568 9.1197C12.1786 10.1967 13.5557 10.5657 14.6328 9.9439C15.7097 9.3221 16.0787 7.94493 15.4569 6.86794C15.044 6.1527 14.2979 5.74972 13.5278 5.74181L13.4485 5.72782C12.8138 5.61595 12.435 4.95703 12.6576 4.35224L12.6938 4.25388C13.0602 3.58659 13.0793 2.74968 12.6709 2.04227C12.049 0.965273 10.6719 0.596264 9.59488 1.21807C8.51789 1.83988 8.14887 3.21704 8.77069 4.29403C9.17364 4.99196 9.89381 5.39256 10.6439 5.41889L10.7809 5.44405C11.4059 5.55883 11.7804 6.20485 11.5695 6.80426L11.5316 6.91209C11.1673 7.57872 11.1492 8.4137 11.5568 9.1197Z",
            fill: "white"
        })]
    })
}
const e4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAAAgCAYAAAABmdoHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAC8bSURBVHgBnZxZrJzned/fb51v1jNnJ88hqUNS1GYtpBU7tiM4VmwnsYMWagMUhlGghhMEdYHC7k2BAAXMXKV3tq+CXMW+SwsUDgq0aIHWqlOnshVblC1ZokSJoriffc7MmZlv5tv6+z8fk7qIkxihTPMs3/K+z/J//s/yjud+wT/9y1f6acu9kA0mv5ostC+m43QrbET9MneuzEpXFaWLWqHL54XzgsBVWe68JObOyrlJ6qoqcvFy080GU+f80vn8rppkLlmI3PQodZ7vuyoIXSNxbj4quK1ynu5uRs7PZq4oAhdEfM/zfX5WZp6ruCDgWcWMd8WhcxE/H82ci317rT/PXBXx3Nxzza5zWRm5POO56Zxrdb3ngpL756VrLDfcbHfM+xou5v4sLW3fIV/nGV/MuKeTuEr3Br7zeKdrN9kDa9c69Lu8dCXXVXHkvAn7TFhwxD6Pjp0f8IykxZ54X8b+WJffCpzvIlccTPgdMhtmLkRGJe+IWqwh46aU54QhMo1dwfO9gvdJEHHDvi5ZR9VsaUlcO3GlRBciM/ZWjTLnr7adm+amD/uDbkrfc55tD1nM565Ebj43InJ7V6Xf8yzXaHMdeyq4LvAGVZLcCNLJq+U4+2631/qzweVLg1/Edry/74LkD69sYUBf7vTDLxyNXN+rMhcXvktN8iiphZCOZs6PA8daXICyG2HhZmVgC8/YaAMFlBG/n2b2Rt2TD1MEGbio9NwE4bE3V/J1iRGF7RDDwXC53/NC12pXbnw4d36jgXHyu/HUxSg4Hc54RuVyXesheNaUrLdcejCvDQV78BCuH6LAskK9CK8RodapvavAHn2+r9hTgQ4CKRoDqGSIIVrLMlfGiYvasctHrBdHyPICPdXPqdBKUcngUhfgHfl8pjewDtaNofnsKWfPfivGGBCOFCnlehX74D4Z2GDivC5rZz2enKId1kYkZ2lgZLq+yb/znEsC3jU3Q/H0DGRdzAtzKGeO47uw0zKnqzCeZjd06biw+3w8QU5fHk9t3Z6crMhsnZX+dewdYzOjw/R9/t+WGj9wLNDEx/hkiI3lyM2OkM88/WaUJH+QXr504x9kZP2vXelPx+VXi8D/innfBO/qIeyjwnXWm64YTd1MXsHPKxYYdfC0NDNkCBBOISUWCBVJd9q+m7PxHOMMUF4+FpqFpoRKMuI6P8Ez2UiesfhAm+PnBzPXXEncFEN1s8xF/cRlKMv3JfDQvKzyUBZ/fa/A8GKX7qKcREYSm1fH5dxlVWBIVHWaeCiG0GqYwQftyCWh58YYFXbgsjHPw3h0zzSXYkBPx/2s28+xQpTq5bWRSLnNXuQmhxi6DAYFZxMQVZBSymDDGmGr3MUgb5p5hmJal5umzvUaoO7cFO/nc0PxKkSSOER+gGE2Y9AdRQPXPk6gdxcThY3KENUDQR3PdYWWU9j9kpHszX+gVdzVBUBWKRQTeiYYDIbsc79dq2fx3EoGxLVRz3ezIWvCcfwm7xvJS9EZiFxgnF67vp9N8jyARboDMLzC/3oeDP/AXX5+8AsbmdCrCKoXm4G3NZmhvKgyGC3xpqJkOVG9GB+DUYiUIGcz38JFQzCPDXnenGuRQzcxSNc+KxZuyIIUJLCoE9nPmyDanJAV4OYZG6h2RggSo0NRBEAEhdPIWNHwGCOUJwrCyymKXmyY0U332DHP7yz6bjwo5NQ4v6AVvND1fswWMjdH2UEAwuYh0cuvDZxr0iH+y3pKwnmjH7spxuPhLAH7Tgil47sjFzaFVrmF9lDgQhgKDHlCU34FbRCa6plSDCtn7zOTU4VT6GtDoQrlN50hsKJoZYgBSky5HwcIcJiM6BAtJSi/cnPQyBOqYxCtXujGeygcIxR1qDwZoTMKkuDoExzSU2RYSEB8kBhj8oVaPKdkndKdoki8CHU5LmpEZU+EnzpsY4CQHkMz/c/DpgqhJpGoQkfSn5zbCRVBweB4goGz18C/AXY///NQzf85CHaxu+heBDm3smruWp3AzRBFhqIqNhkhDCH06kbi2m2PcJiDmp5bgvMsL/kWRmTiAUIIsXz8EsNDqA0f2sEz5pVBdGsV7oFQW4lnghGkNUAzx9fJZgcjDXB28QGEiABKBDcgZAYYdHNR/Kdyq1tNC7PjHYTVDw0Bh3uZ4m5t4J3QxUJhnivDShG6QnrUbrhFIB9Td1kAFzvKLdQoJDZQLFHP9TbgT3CbEqPJBxhcD2chlCRdrQXEzUsz4Iqv+w0cBvQTL/UQXNxuGQ9qIqsQtJRRijsGXXEnHJN9NRI5XGH8zg+5Tw5BiPfZnw96tE+AuoTdOYC1ejIwOlDy/TEoJ/4mklfx/QJGXvJe8TChsyfyp/B+RFhkfc2VTv2OoOav+ZS94PgF9/SWuFdG0hDi+a4JfwvgGEJAhfVKTsB+LXSKewI2HtGs6qI7dBnGhFYcqIRr+EG5NffKF6PLL1/8O41s649e2hoX5bfZ7hYYa4KY4AmPrdco1UFoAW7jEcNDVjGGdzk8cqkfGILuH+Su7c3c8loDPoSQy9RNQdwZJFoUZw55j0EohZECJZQIq0DrSyCHj/BTyGajR1jB+ESKxzkGC9xPxlJYad4WIsAZXt7GSI4HOX8xvMUAx6qVuboaueUV3g9yyYEzwlNUpXijntkAWT23gIAO92ZuOkGIKKrimUQS11prw7NLd3IJw8cgO11oAJDVASEXsP8Ci56zL4XCgGe0+H2Jcg9HJD3wpnbHc4sxqI0CSyUMyKgr3tlRmM1NyY2ub8R6ikH7bd/QsiKc+93A4krSrBGkg+HJeVtLgdu/zx5byD7W9c5Cn8kjRm4RBqaQK16Fg5c4awLyiKY0oAJ5psQmN3JvXIxrmw7HgXaMhrnrrfcQMeF/nPK+wrUxqgCH8QGGEKQX2vqgr8JqCCAo9ASudoriuHa0YAGqNIYHt9xWGQffTi5f2fq5RiYONnLxi0mj2FI21wSFFBLaijtY0AowfYRSKmVuGEZ6nIMilUsaChee8dRnzrfcfhrCbXLXYZFjH8RCyCt935TQCHJ3slu5C6vwVBTRblR4ou8OQC85nOJ/SAKRwpFOdfEnlAE4u00EPSUcn1iP3VIDI4yMEtTeSYhrobgJ/GEN4xikGBAC3FopHXp0i63SUNFHIesLrJvnbLPYBpyo3W+4Dj8TSvaU5UIBQpS4w30598SxDCRwQ35/RDhtk6iFCLzfLPg9SsOoY0LbwmLojnmnQvle6vNuEC6U4nECHCyfiHuBNKI4wgVRAvbvI8uFCKTHSXKFSkUhUKckNO6OPHfuhGeZ78MgdhRUhhihDBWnIHK7tUXnjo5Kt9jBqBqxoVMECBQYTQ9ny4gCGSDRBRWFyOKSSeIZoV9ZJSpBaWagQMXPncI+IDLkeXLkijUHGGksboyziFpkyK7gma2OyC77n/F1X6gJXz/RdvOdCeG42spmkxf7X3uv/zeMbGu1/Oog97Y6pL4HslV4ToySE4zgTaSeQg6VWQQQvycvtBzh3HWjgnBXuj283gcp3gDJxIz7hM4UDz+zHFuOcmfsDBkW8JLbWP97R85d6CNAjARa5R5GKffxqhbvamG0l7ZAhwI0wqO6KP0AD/N5bodQO+CvjxDF5ZYg+PJ+ZdstFK1SSRNhncZgJ3CgmCz3uBAp91yHn+2z6BN9VToaIBNIjJcOEdCJtdBtE2a7GH0fjhJx/dYSWShhf4zRnufZPZxMnLcA4Q+0/uXSnV8QY6qs5CDj7CaF0Yl3dwirTRQMmiyDQItcV0KmIzjhFGTx09RtbEaW3TQTZceFhfayqg2vjSGsI8PtCSEJfreNzOrMHSWzrwxnPNyfu+1DdNQLDU1ijJBI5nKFY0WBCebMs9v8cEK47+NE4tQ5gltfbRAOMX6VKzCw2M8tUWsSDrtrkRlFt4vxoPA5HLyNY+c4S9TWs6FL88CFyCFahZtTbuqg5+KI6IYx54oyG92t2XT3q39lW+Kd7sSfXNkqy+pP56o5IYxzhJRdvFK84/Gms4fvDCv37Hrg9koJuzLoXIaT7WPdZyDGhyjzVLNy58hQrh7JID3Xl5JY5ColiBWykB0Q66lTIAhh8n2I/zpI0YSz3CBReHYRL0KACUI9KlUqQCBAVQtvSkGPcyuBO5KA8fIZda81wuoh715rFaa4dRDn1ix0F/j5WxDjJiHt4Z5zt0kCNtbwZGDNU8YEMpzGaO6iuK44IvwsSwkBCPg8iHuQKhkglKCQOe+nzGUhPVCGB7SLc50GMd8B2SaZkAHExtIf6ijjQnGELEDcPbTawojnTuW2IR7fAQlCZYyEs3kl2dYcKeB5PQwSbo9zhm6RdayTtb6zn7m1fuWG4kcyYkoJBVZe4gCSiQoNDULtAgawR8bf4r5j9BURDpUktEC6HDkVGAqcHZSF2SisYVweBnUAXekTXVLL6TzXI2kgJyIZmFppZKIslH2fXg7cDlGrt9JyVBsMWNI5aKgwD/J3l0iKhoRoSklAO1yNyLWAkc+Kj4Sf/Fffyv/nHw8MyVj6V0cI7FGEcAHovgHHOIunL2FEPzz2zPB68I0f7mYOvo/QMtdD6LupiheFewIjOoOgWKe7jlTbYOynzpAw8PSPnozwxNzdJoSuIcSrd8fuCG9qgSa34UOPY5grpDA/OgCxCY6LvcDtYoCVnksiMeaaZxYwekoKc2LkCeC5ydqUoS6Aog0EssGab5IVfnARWEcJm3jv0UycMXSnln2EA09c4Doco4uhvYsTbOCRMaj1BE6RYdRdCNz7x4Qf1bUAmRaosQaxPdtWepCrUsCf3CUYxi1Q4oVziRnOGFnEEM53DwuLAKo/H4M0e4ORe2otcWOg+gMgZapcM1eRNXZb6+RvIEigQjERQjyqVBmBkPYeiPDGztTKPgdpTDmldJvseUZRr0mIX2UPSsI6rK8HYu0QAdbJqBUaV0ErGQy+6IZYbQCvK+BOetYKaLoqlPaE7txDiDik+LsC5VnEYGbw5A+sqFwRE4Yjq6ORBGPAM3duvQNXnUOZPKMtyjSLY5VCQEnWsoKepmTresYqkWJ7d05BPXPLi9lXDMm+8O0r/buz6k+XQZUbLHSEUDpY+H3qSb91su1WyJzSXJ4N2pyI3SFetYAxHilcAsfow72O0rbgKT8FBcaTwp2HxP6EFyk3v40QTvH9RIgJms1ZYA+ljHjOExjU60D5KVAgh0ssIrihapC+WEMIOoGUhIwEw8CpnUqdCcTmGKOQwexCgIUU6BTuF7p7OMquYBthnsN4B4SroYwGdDkkJVYGtU8t74VTkfsLiP8SCrmDsE6hgJ25DMh3F0DMu7zzEbLVm/x7f+aMPz0Jer0HT9pkTdrHGxR8s7kIP8aLg6Xp2H14s+ve3U/hmYHVxaZkiiso+Bi55oR4GcAYZ1Pht8MaT4EsUVCyD/gfRraMsodcJz6bYCCLJAE7IPFmp3QplnMJnvrmcUVYw5jIloco+ElQWdn/w6DwdUIXr3YD+OECMsVWQMDQ7aM86DQZMOQF4xb6qb66uRS7W1CIABDpkEgs4qB3QSm/mFtZjZSIaIWBI5tZqUw6s3AehYAAICG5LxOVdibiz4XpQMmKnLSoVGAPH5v+xpf+OCj+8e987lQzeeEeltrFys8tOHcPDiVL/wmWPgWt7io8wTUOCCsyhAGbO4XxTTD1CwiRMO5eParcE/CeNaD+eC7vC93JtjwcQqw2E1XxZ1aaZD4zd+0QKydMrsEF3kJxGyAVuQuxnzSaDbSVFoZaB4hHSGuz0ZtUxmO8jKDnHm+TeYFkEkoDLjglxK6ppUV4En+QsWQ84wlC6R1C1ZMoaQEFd0FAZYs3KLvEKHRd2ZOyR4z6YbSj+tQAmjCBlSwKsdnHR9Z8t9zxcSSMC6ca8Lst+NdbINfZlQiiXxmHiQhnbx5Qf8Jo+sryEPpJ1nuXsJRDHdZAnSPI/T/dCt21qQyekKeYyb851/wSxv3D/co9s+xwCFEPZIf8f51I8Bphqo1criKrVepY5+LcsvEZRnyPZ6lmuBirjBGiG+c+ezpmLTMrfJ9qKXvF+JB1yj19EoRD9vUU6Po6kenjmzHIi3NihYlqdV5dnJZsV+lEyCkHcMYe38+wqi4OFiPbE+3CwvQHVpy7NYT3soY1ZDg6JktFIssY8MGoTFqh/1bw+Of/9ZfzYnZxE+OZ8rKTnYa1cwKU+HFi6/fwpF+F2L1NKPnYSYUWiCIWMEIZPQkIBWHfbntKyOzUSDTHCKd473UQ7ilC2G891Ob6ukAqTzxP2NxgsbfJYJ4i5oubiM+EoFmT987UU+PZyt7UwVSYWV/uuFU/szLhBwhx37lfusdAwj6edAdj3MTIbgHZJ2OVSjz3TK90b+Is5wiLPyW83SZ8UBHCmCrz/AHo/HSrtB7mJdDgh9sTlxHmLwH3UEy3juMs4givgXgd0HffOg0K2XOyOXgUpYM39tgfWRqvc52gtCLlM+sN995QqwYF4C+qI51nTSfZ8zaIMKHss9HwrVPRbhSGaicoAd2bWS2ZtWHgRJUVeDFlLPcyxvwQyYz6KpskB/uTmdvJlZnjJBjz46DwMShzHwTqIsdTrOvKiD2RuJzCKV7ZmVk7LuFaEk43V4bJeqfIWbraJsQ9hN6OMLwO69qF2pwHIOZwbEWUIci4iLMcIeOHgMYRBndI2UhdE4r1ZNUkLeiggf3cp6S0SX2xtHZbackZSfYg2Pzt37nc86oTGTecAcL/840RiBObBZcI4lnI85tY+ceXK3dz6rubGMnFvhKaig3P3QbZzV087STEbxUS3EchKlZG/HuWxe7ngnEQBgX12J2KhYdqRWFAOBPIhNHRlKZ3TRglzKCxFdDoHkb7QTgAzg1nwEOPZ+5TZDM/hWTuEyPPkn0NILO7hMMtEHKbDT0STd0xML4FCuwj9EMUOsLDPtovcQAIO2FtZ65UHOToR+5tnOVslGH4lA4QcIgDvT0SWuMgJAYtTHpOmDqA3z0Ep7u4pPcF8LfKsuLH+qo6sEeyxQX2+8uktW/tgWag67yglURGvIJM3iGcdNjnDMc5iwze4+asUkYYUWJx7qcUWPuENRk2CaNrgYLa123k+psnQJOidpz947nbgpd9bDV2P+aeFiHzNTodHyJpUvsIfCYBUw0T2oMz+NAF/TTFCIdk6OoiqbzzBIb5NrybaI1xYVhEqGeoLb6Jo50jEu0RucYaAMAeKM+yV5IEQGFPHQ6ePWcfq2Ti2J3bZR0rrOmQzELlERmh5IvIyHYpVwFQwdbn/+W/p/GbYMjuGNP7NMz+6qhyv0aaOwA2VXR8FEt/SwVHFZpVQYej3J8F7rOnEkoSpM4g0CqKnZV1rUhk7GMnQAcEvkA9ZVm1Fv57e1y551HUngSp6iwedV1JAUb4ITb559uZ+zVI8XWeuQmPm8kVVHmuanK6g8HEUhQGcg8FbGKE18lMn4fcjxHiOkLZwSFSPH2ZDT8KT2wC8y8d8G7iyGpLKEwmRb3u1RTP5rofwUnaIPeElstJPP9xYH6IY8S8sw06im+0MLplvPnHA2XfJD0I4inQ761UNcO57eVGioPQNhKiPMP6DnnmExjmfYqcD4uXoeAucrpHeP0gYXaIsjKIUQdE+fSZBG4ImCNfyVJDAOJnaugrwUkwOungHR6CmAjd/Nv2jJv98grrQHlDtLqE4pXVn+mKB5bsF46n7kzsDHWWoB0bUIQFUEdNDlXIn12GruDc98RJQbsnKKS/xmKUrbfolNw+GLtn6QRs0+1YBbFiuOIIlBtOQU6+bi013X1acGeAySPCe3uhbbW6VE0c5DTV2MGzGBkNLshmZERRkwZtCoLvHs+s8T1n0TcxgkcIUbfGnvvIamSbf5w6l0JJpf4egnhrElhj9UmMSH3cbYzw4oLqSoFqAKTLvgm0CTfaBon6KFzh9JPA6zaCFyop3N4le8nxnHfJFC4QYmZVYWH0PHyvCXzv4eE94koD4//Rgee+AMf5j9RAeqDd60NH+OAdGHYXFPlLTQpQ+f/gAmGM8LGfqcmHAXZJaIKalJ8mnBYUuRa9tEaRvK51kQyhmNC8/bk1wiUGH1fKXElWCGHvYsy/0nNWHKVkhUGRXRN6xyiLRNk90lRJJUeZKuFQCOaZ6nitsPa/3CH0NEVNAhy65lVLXD+BMqg0cYoMdE5va51rd/idssLvQFvOYVinuW/I2mIc4EmKw9+D314U8uOAt6kEPA26Hud1U3uWWweSxIJMm/B1ic28ilMLreV8J9Gd6qI3gCQh/4eWKvcGztjgec+faLj/9T4mguHl6A28ICTGVitVD1Rl8gKHP2It0u1dQmhMbW0ELy2saeFpGIXyUp4En/jily5risFDAWPMKhY0+xqzwVs7pUFsFCnuhxbv9/mBaqAj9dW4/mmg8iao8tsnK4wFzoHAHyWEjiCltyG6qogLaq+yiE2EpvuWWdQ5vOIqKHEJjrRLW6WJzffxKNV7NK+wTPiY5uqJUYBULs2G7gHtOZmlWjtNvPEJKt0q1D6+WHcCtjDS7xJbnmHdYwxHSnidQrKEJk+ncO7OoJyX4SkLvEdTCHsocYOEoCA52cBIfNWO4GuP8ax9wsMynn8drtHFSHpOCYQz0v2pVQSPNFVP7CW+FTnvcf0pCrKPUkJ5bX/ifn2jY/zyHaD7SQrOV7FiFZtP8O43ReaR0WdOUSlX9Z+/TXhdHsTuIdbzIqRcdast+Ng15HTGSg0y1MBR9nOJIoOtKzQZncdhFHXuUCi9PZpiMA33A2R+kWx4m1C7BB0Ygq47k8x9mEy0yX3X6AXf16yZEip0t1uqbkbHhH7uVbw+RFYRRrYPaqhMo1A7mtVJl7Qk3t3AmY8JrxE8MoMvhjhIpbYh9cdKcKYa46P/7He/oowZCmSK/x5ueZ6NbSPo2yj1Caz/BjUPwey2CnqeDbAZedU8VDPI3GsgyEMIOvR9q/mooKmCZEZ1/h4LOKe+nwik7kvqEPCDvTmlhCZFzcJGdRbwPGVcoyJ0m1yfUK0Xsq7zHvXSRqDkYliaMe1yzcN49BXC1yNkNGMVFBHOQRbCv3AWjPYhsrH7INNJssRVNuxXlfX03uGacygJvk62GRo5v4UXEyUMRSbsew4CqEe7T6NQBoEfucOpZzNqEc+Qgt6GUixjDFstFS4RbiO09b7DYtCr+wTlnv9+Nzc0V2tNpZizoKDW0GK/ZzGKp8koX4fTvDzw3CegCZ2gftZN9vdJEiIVaO8j8yegDvskFYfI8sMg8g/oUizFDbeMUakNtQ1S7Skx4b/HmhgvHHek+hrg8DYlBVGfq6DVIc4awYmVHV6j3JGC8hotmvI3A2TonVu7sAXIzEv1lW2s0bi5pk/UH11ch6UROiP2m4lbanxL9T5NTWBoagWq0VsMZjZ4GvVbg+AzX/y9z+2k1QmV/nfgP58mNCjsPLdYlwe+e/fYXVpJHDKzWTHL/lDCLTa1gdce4G4XyNKuahaLhy4pLLCgR0CzzU5g7YsYhSk1/gAZ003VYfjZQrNuX6itoXD5FBnWTL03Z4VjFxWqWgfuOhliEwPcamkEinYSm+5AeEn8jG9cQKMi1zdV72G922z6uV7lXp2Ell2NKOJepzK9hpN0gsomNEZ44BzlLNHmOeZlG7F+5iwrGqNI8gg8mgwNA7kPoT3RDGxeTT3HNoJUje85OOf1oWdhYxWjOwDRzpJY9OT9yPkWRvVhOiTfB1mXWZeQsA8aNOFXr1A7lEHeIrwp3G621SWhk+GJR5EVkkVfY6/n2b/KKDEE/mzTmSEcWA+SBAvnUQg+wgzuqD9JKLuLQd0HRe6A9rtk1O9gjN1uFyozd7v79fDmZCw0q6xzoZnIFOMoUo0MIXt0VCKXDEPU5GyFHjXt4vNvj5pOAcpOCIcz0Cyb1rN8KiAnZK/SiyZsNCmt2cMuzWihO3Z5NTj7+d/7KFBycT2phTNWzQX0eIdNa3T5ObzgUAOHIJQKb1N+H8GrHlHPjQ2KbHMJYc6zr6+JnGpGCWO8R6Gzg2BVeGyzgSsY4glVoVnQalyTYPXbNjRbhWB8TWqoJY4tnKZGM6XuNVK5ZJIZAqpu9ihc8BiFRjz/Es3tt4/1bNJqeJzWJ+TZJiT7lZBQnKO0XqYSGwCaLLgeNJUUm3h0B/S6xy9bCFehaR2O9voB/IWQIuNfiKylbcT5DijV4/lnsHD6vMaXnqHafRv+qMz15YMCkq/0H9SijvjuNHRramS3GyYP0Ysl1tQl9MlwtQY56S+R7Z1qax/O/YBIcgTsfwg00CTGPZx5VRQC57ife1aOuJGKJqADQuJ/2VZdMabdBxdGVkMUnbIf1eZahLoBbaIp5aOw13QzzYtBCxKQtQDF1DNVPzMk8y4g7cES5QdN6sJp1Y9tLTQtydPYz2ys1pZ+ntlUpAdaavQ8BuZTDWsSohu6Xr1Z7GWujgBo20q8/xb8xhd/t38q8V74DqXtR0Eewa9g7sIitRWerh7jqqBRfM2mDipTiEoGmngUmR2X6o9RxcfqP3s6cT/ihyuEoQWUfgak2cVzNqzY6VlbRKFUyYGyn4arx6I1iqOiblcTpqhVU01/vlO5T6+iGBQoMqtKtcZ5SN5IvXPKAOIizr0/Vj2OIiHrWTDSjgIIMVMN11Ui5LwPxT/M/q6NSxsBWvILQ+T34TtPLSVkhSQj8mz28lhPTV3Nv+UYBdyjVOZMIZK1nySM71MSWEHxDV+lDJwMY1CtaFkTEBoHAoVnvm9JgyZKuupw8K4NuOg9UENJ1GtHcrDAKMABzxDpP2KN/2i1aYMJr9FxeRVHb3CNhh6/N1QypS4H8oKXHaGjV7cJWxiYqg1TkqkCXpWAOKWqAqDrXPNlYWStP226oXEFGaDGWKZTCsahcUHyPvqqDUMgwokZpKf+KCUTlZzEs1S3zDA0P7FYQ3ZBj3ORRuBhWkemja6bDjIb87azD8oQQP5iXn3Du/zilX7p5e8Rd/u3j9XTC2mfkP3YsJpvU6/jwrOqcaqwixAXECavt2zvPVL3U6TOsnih1jWcZbNZWve+hwB3FEapyHVBKAm+XU8nUybQWusm9Q7e/Bhp9+uk8VsYya1UfKcykq12hg4+XAXut8RNENKKioqKteIN/NfA8PV3N3VW0ddwJI+xRGMHDcgQuhbGVWQtjdizKguNy/Q/XyEd/CX6g+KhcxCxh8MQpeGGgWXC0YPSwyboY9zHq0swAL7Vg1RiUFb+ym7hfmXNcz+mO/AodbxrPIQuE81/m8XE0J056J7OEGCIG3C0JnJ6X41veNjrIPcGxvE9GRfOMdYs07w2EKfRfu7JkMc6ZZZtMnvZjqr6auhr8FG5pIwoxqHnZL/qWc7mlUUOZXCagu0Q4kbj3A6eaMRJozzpcT2/V6CHpJu49Ci18wgiA2qbzWyGLrLzDxqPGr0/tL6lSuUhMkrhGjGF4kxDjqxRs2slHSTdk/neon/5+UuD8bz6FobrnuzXM+EPo10h1pDNa/DtPrBzmjCgYVAN/Kn/pdHmGxD8RzGokTYWytOcexoesweUN9SToxwRAtnrmggIauKuWeEpD1ImOET5CRrbIkRh1yiVzIaNPL3o2wbvko1IIWp2f+xEYPWvZ5fVhOZeQmaHsKPR47ZNdgbGbTQRu6JkASHexytVilDI1KSGCO24qoUOTaOS7dnAoCr+E/Y0wZnW4UQNnttj3z8e5jaqpMzsNIpT7UnhUslEF5RTdtdReKZWdwOuc56i711kIr6o+ZaHSQwe72k8qUb7JxcCa7ZfIKNW2UfF328SEkYg0E94d1ok7rtH7C9s8q6QuhpNan7eNYsQzYAr4eTHiiKKHkClhkU1UdtZacvybV4th0dGqlviGEVeA0NfZBxjGopLVbWji9hPUmgSnLvU/BuGlVKuEgqJ8MdQqDmCijTqjb6VNR6zWR/D8jSUybPmuWfdjbmdP1CPlu9oLQX9tiuT+Jvu31wa2Iz/V158aQsPek8jKAc8SNXnY8E8BjXRKR9WpJqKjdFjhA02LX7yMCHqGhBpkwHiBHChMAxMeDqg0QA6j1XpBg00OaAiZkvnA9RyENGWdyFszYjlZR1edYZAB1By7lW/US0qVbDRo2W2+xjcKmFzgedsawhQcM960rnWHRgffHUgMu5ZAqE+ZmFtr9KMT9V0OYsyyT737c9qIi3e2YVzLJEE6KRVEpQW0nvI4qc03S+y1+sYkqry00o1wVL0xkmtypBVjNZzlSw18OT/sZO55+icBBrtYW9ax3WSk5h1HbKeVygQT3nPVEQUxczgnTqMIsQR6S5Yl47BBRi8eFPNgbL6BFerWf+bahqlHs/yrZRRGRqdoPp9HwitQMaEGt0U5PJRkEfYs7MJOk6YVzbhqlm0UlOtbZ230BRszc2tIa459EZsXFnjRhWwp/MAepcShfL4wbrkthrM1GEYJQsgmKdMM3Vn09+/dOOvD5J87f/88Ovzsvyyah7KBPtCLOC6ROFKo0+r38ai5JW5ZYw1UZfFi8OKHBZiV54q6p6h2phFq0p8nJXG2UKMZEeVeZ4Vc819iLMMOnc1d7JQAEocYHQbDU2CkHDIM/E8hc7QdEAGCTppFm1SSKHqlxaGPOOyruirtqfwqBAl/ieu2BVUawiP9xQoqK3ZdI05lfWxNt+rnUkH/QgMNP81LWJHM+2gxy3Cz7rSMTN0QmpUDyKKgsjQUk2tWoVeyZNPScdz11TQ5ff/W60wEGlG7+xe5uwY4IyXRTpElOkYHFUviLIyzRz0kqMW1Ag1hi6oDruQ9p2R8zoty/BL9uP5hZ3G0tSvVa3Yj8Z6NFkZUYXPQKQVItMu2W1CKEvhVzHKn1NaCEkYSg2YYUBC1Gw0sxEfzQ3O4BQ6HKOjfJEmkHVaitAXLihRqGmTkhgJSk5RUmfzAI8QJ5trOA30sCOAw+k3yq9+5Ct/PbSoP7/5z7/0feL65zAYZdo27KbJi20Q7RyK351VxkFOqT+V13Bvh7w81ZgCOzspAq++nwxJqX4c1Mi4ykNHmUKqZ7xmqgMXKmxq/PgBWimLszFgLzC+dJDXkxNLGKlmoEQoazQK7DkybtmNTF/IKr4TCv3Uj9Phm6hOUvAJ408zO8zEz9TQL307t1hVvnnsWuLZmtQ3bUaajcKpNDWRlRZ2lUlusL5jI7MkHvZizwxWiZKQKmLdmmVTOUF9zBug+h41uf90SGICb9XEykDnQ+10mm+er4MFhsQotNFvQbRndnxOcUyoZUf3dIIZRPI6TeOGOpysUfYiq7lhJWUl9YixyL6coCpFWGmVDSvjVCotWIgE+TR2rlkwO3id5maglsFRJNP0rapteqWnE15BLeMCoy8HaoeAhDOdUYWOaJIXBFT41iksAZKvMN4wXnij/Hcf/sxf2db/dyTuD1+6stX3yxep3G8tIuyjsj5fqklKjfZrEkGGcCL2jZcJ1mUgR2VgLSONrsjKNS+mOfUjzYOr7iIyrbkmndTWqLCnOXoMJq7HR1pqY4JQyMJtgxjLKLilY2pKOPI6U2sH6h7U6PMeYUfGvEbYVHN+k9x/iEEIFSXNQVZYSURdAR0GU+kjgDwrUdE+RnmNvonGbap6IA26BIcrzWhgIIZonrxYZx9BO40YUf2ggl8rYEiZQQin+feHEP5L9O9mCFpG+18P4ECsX5Me6vdqoqfBddPSs9NKOp8ao4z5ODMO1V1uupGOuUlurClUCFMZJq8sBGsOrR5s9I2YTylFrJ9su33eqZNKyj4UCnUkL1bhGxSuRmN+ltiBEZ0Vro8gNkCyFKTr2LE4vU+HgJN+k2iBnobwrao0hFS1X4MOQaNps2s66WUGDU3ym35tuKVm9zBiXlqms3qav6huFF7wvPv9/3c07m+cu/zaX7x8EZl/G2PZUm3rhrKUSE1awZ5nlWTxC00hqBbV4yX34CrLKFxCUG3nDga0qBPW8gsU0sIDj/K62v/akFKFag1+Ze0IdfP3p54NwOlUm7PuogcXLKxDoMKpeqmGNKp1Bb7xAQ0udrwaPRUlFPY0sCdDbXme9dV0AERH+xdY/BJGqnl/zVLq1JUxiaoOxRqJzr26jdUJPCs5KAGJw/o85R0eejrWhAQ1wMiz+qDquvs87wb85gqIoY7E+9PKCpSh59cnvq0n4tUn170axfSRDjoIPSODiwmTapKXyCEUAsiJi9pRK3Hb3OiijYwrw4yoS81UThC7oIQQ9Jpm5KHG1as6LOlUlEbXVQQPW626QKSDxVE9faIzhFE+t7JFKW5VlQ9Oo0d11d76kuTs4nHySEWNuT5Woi6sV0an6hPmCjz2kQe5zpY2dPL+Rhb6/8T920uv/qxN/dzDvX/00ktbbOFFQH1LXiWPrs+4+DaLtA1krvFSerNGHtuRwmFlBdJZUfOsvXll4UqopWxOv9NoyAJEVtyp7fv28nFZP1ceZGdxfatR2nlKJRNd3k+rEdSrbDpiySYIcp6jERVlfs6G7DTrRSnRkdg6HU1cVm2KZ8tolDBoMlQGplqcDvPKqicYUkvIgiOII85Z16yqTFnNB3U/hUQlQCrZsATWUGBQzn3nmP2z0JtH4nOhPtHA2m2Sh33cgqoGg+yBokLpDiJeWJFUQwJT1bAUjtVO00cq6HMrIEGawY9bNXfygFuFpITq+exwWp8C596I5xVU2lWyqHTIhiKqG4wtnHlG3j0bVtCp/UTF4bQ2JDthNJqAPImVUHTARnxCp/VV+pACrHMs8YBkdUY5rz92QWdJNf6lz+Mg5IpfZ0PV4ZTxKhyHN6LU/dzDvX/rxxT8yZUr/dmsuAwh/rISARUp1XZQqNCQnhQhoq6MponC0rI0MttUQlDVs14riWdZqkoAGhuSIkfzyiYANI6scJXphM4Dcu3XB77NIBRCJdNDiMJ6qNFlJQj1KX0ZzWuQsHOgqHiYBuSKBx/QIl7R8B88j5+0w7qAmWo6NVBGVxnaKXGpDaJO55UY7PAL1b3WGvUhGqEm5TlHJ8zC8TWu+/6RPgVBqEVxeS6jVr3Q2cRKpTOptFLmM8/4UxvecjRS96EO8wqBTUJWKsMo6vkuKS7otSzcqPcrnfZ1/FBHDgPPjM4ny2xSMhmrJackC75W6kCIkrNA1CKwjoY5M/xmfjC1Jr44gZBHH7VAXIPHZVb6kBPoxJc+viBZ7bn0/hFljK6d9Nf6RekqEVMhvn5/d1h/AI5Ov2vqVxwRjqlPf7DhCr/8Rif1L/9tH8Dy937gCsa2tTMuLq81qn+hcKUuvQyh+eCTYcRdlG1KQIL5wryhskqxeBa1O8tIZQzqHR7mvnEj8ciTKPNALQ8txPOsOa2pUJUzCq+ulRkZFV+T4fFijdJotkuGJcNXQmMFXvEn3pt7vhWGZfArIKr+Hei4l+pStSlYQ73j1R8pUljJufZgoam4mgxSg34y+oL/+/p9SDx1Kx3IGeS+vUuHk2OQIUQIqQ7A6kNdlN5Ts8tlRGgg1scvKBwSBu0DWlSKMCIPv6E9pFPzqkXNNCPPt/lAwwJF/REEGGGojwLIKtu/ssFwGUPZQeGgio7+KfrZJwlN6kq8+KtOpfuEYSF1QSKhcWQ7SqeTMIf6GIKmOXU5ndlZVGWjOjSinqOyxCKlgq+TzjoVrg/G2aNZ1eNfZVbSCMmIUyegEw7wiG/lYePrP8u//kFG9rPIlmbZC4lffWKWe890omALRfc1KSBUsNM2OgXO9+JcQ7VibHyF6nlWh1QpeSBB2GhyYBxHiC0+0bEsrbIsUgVh+xgji/yVlUcS0ExClfFlmjFT+ApqhFCvMPbr7RhKeSZbq3PJaBS2D3hXH+nuPChnyEATa2/XiJw/eNsh654Qjo/47j/QwM7noTlQCuLkIMljINEbu1PXWm27ghCle60SzeLWVhpuZz+zNk4Gz/zg+di9clOIXdgAZheCPaLm5hMCF1YTG13Oc6G0PqoKhKdllUYN9bYwDGfGWc5QOqULn3JDdXDk4rUFN7kzqj8ywK9DsY7A6dOQPH1+iCLNjo36WhNciCW7FjJ5rcg+FyOnP2kci5CkoqpqX0oadEBYWYo+g0RhOmh49sE4QmDS9UHglzeK4/xVvxt9Nztyf+Z+wY+O+r+TVcw3jKyFgAAAAABJRU5ErkJggg==";

function n4() {
    const [e, i] = k.useState(!1);
    return x.jsxs("a", {
        href: "https://runable.com",
        target: "_blank",
        rel: "noopener noreferrer",
        "data-runable-ignore": !0,
        "data-runable-badge": !0,
        onMouseEnter: () => i(!0),
        onMouseLeave: () => i(!1),
        style: {
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 1e4,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            paddingLeft: 14,
            paddingRight: 16,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 32,
            backdropFilter: "blur(16px)",
            textDecoration: "none",
            cursor: "pointer",
            overflow: "hidden",
            transform: e ? "translateY(-1px)" : "translateY(0px)",
            boxShadow: e ? "0 4px 20px rgba(0, 170, 255, 0.25)" : "none",
            transition: "transform 0.18s ease, box-shadow 0.18s ease"
        },
        children: [x.jsx("div", {
            style: {
                position: "absolute",
                inset: 0,
                background: "linear-gradient(90deg, rgba(0, 231, 255, 0.08) 0%, rgba(0, 231, 255, 0) 100%), #282828",
                transition: "opacity 0.18s ease",
                opacity: e ? 0 : 1
            }
        }), x.jsx("div", {
            style: {
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${e4})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "opacity 0.18s ease",
                opacity: e ? 1 : 0
            }
        }), x.jsxs("div", {
            style: {
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: 7
            },
            children: [x.jsx(t4, {
                size: 17
            }), x.jsx("span", {
                style: {
                    color: "white",
                    fontSize: 13,
                    fontFamily: "'ID Grotesk Trial', sans-serif",
                    fontWeight: 500,
                    lineHeight: "1",
                    whiteSpace: "nowrap",
                    letterSpacing: "0.01em"
                },
                children: "Made with Runable"
            })]
        })]
    })
}

function i4() {
    return x.jsxs(K3, {
        children: [x.jsxs(NT, {
            children: [x.jsx(Al, {
                path: "/",
                component: D3
            }), x.jsx(Al, {
                path: "/admin",
                component: Kv
            }), x.jsx(Al, {
                path: "/submissions",
                children: x.jsx(Kv, {
                    initialTab: "submissions"
                })
            }), x.jsx(Al, {
                path: "/login",
                component: P3
            })]
        }), !1, x.jsx(n4, {})]
    })
}
cT.createRoot(document.getElementById("root")).render(x.jsx(k.StrictMode, {
    children: x.jsx(a0, {
        children: x.jsx(i4, {})
    })
}));