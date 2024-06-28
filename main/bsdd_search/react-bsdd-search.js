var o0 = Object.defineProperty;
var i0 = (r, e, t) => e in r ? o0(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var zt = (r, e, t) => (i0(r, typeof e != "symbol" ? e + "" : e, t), t);
import * as Le from "react";
import N, { createContext as Io, useContext as Yn, useState as ye, useRef as Ke, useEffect as ge, useMemo as vs, useCallback as ze, useLayoutEffect as Pu, useId as Vg, forwardRef as lt, cloneElement as Ws, Children as Xl, createElement as hp } from "react";
import * as a0 from "react-dom";
import s0, { flushSync as c0, createPortal as l0 } from "react-dom";
var Mi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function u0(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Wg = { exports: {} }, js = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var d0 = N, f0 = Symbol.for("react.element"), h0 = Symbol.for("react.fragment"), p0 = Object.prototype.hasOwnProperty, g0 = d0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function jg(r, e, t) {
  var n, o = {}, a = null, s = null;
  t !== void 0 && (a = "" + t), e.key !== void 0 && (a = "" + e.key), e.ref !== void 0 && (s = e.ref);
  for (n in e)
    p0.call(e, n) && !m0.hasOwnProperty(n) && (o[n] = e[n]);
  if (r && r.defaultProps)
    for (n in e = r.defaultProps, e)
      o[n] === void 0 && (o[n] = e[n]);
  return { $$typeof: f0, type: r, key: a, ref: s, props: o, _owner: g0.current };
}
js.Fragment = h0;
js.jsx = jg;
js.jsxs = jg;
Wg.exports = js;
var Te = Wg.exports, Zl = {}, pp = s0;
Zl.createRoot = pp.createRoot, Zl.hydrateRoot = pp.hydrateRoot;
var Yg = { exports: {} }, Qg = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = N;
function v0(r, e) {
  return r === e && (r !== 0 || 1 / r === 1 / e) || r !== r && e !== e;
}
var y0 = typeof Object.is == "function" ? Object.is : v0, C0 = aa.useSyncExternalStore, w0 = aa.useRef, E0 = aa.useEffect, b0 = aa.useMemo, _0 = aa.useDebugValue;
Qg.useSyncExternalStoreWithSelector = function(r, e, t, n, o) {
  var a = w0(null);
  if (a.current === null) {
    var s = { hasValue: !1, value: null };
    a.current = s;
  } else
    s = a.current;
  a = b0(function() {
    function u(v) {
      if (!f) {
        if (f = !0, h = v, v = n(v), o !== void 0 && s.hasValue) {
          var C = s.value;
          if (o(C, v))
            return p = C;
        }
        return p = v;
      }
      if (C = p, y0(h, v))
        return C;
      var E = n(v);
      return o !== void 0 && o(C, E) ? C : (h = v, p = E);
    }
    var f = !1, h, p, g = t === void 0 ? null : t;
    return [function() {
      return u(e());
    }, g === null ? void 0 : function() {
      return u(g());
    }];
  }, [e, t, n, o]);
  var l = C0(r, a[0], a[1]);
  return E0(function() {
    s.hasValue = !0, s.value = l;
  }, [l]), _0(l), l;
};
Yg.exports = Qg;
var S0 = Yg.exports, pr = (
  // prettier-ignore
  // @ts-ignore
  "default" in Le ? Le.default : Le
), gp = Symbol.for("react-redux-context"), mp = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function T0() {
  if (!pr.createContext)
    return {};
  const r = mp[gp] ?? (mp[gp] = /* @__PURE__ */ new Map());
  let e = r.get(pr.createContext);
  return e || (e = pr.createContext(
    null
  ), r.set(pr.createContext, e)), e;
}
var zn = /* @__PURE__ */ T0(), I0 = () => {
  throw new Error("uSES not initialized!");
};
function Nu(r = zn) {
  return function() {
    return pr.useContext(r);
  };
}
var Jg = /* @__PURE__ */ Nu(), Xg = I0, A0 = (r) => {
  Xg = r;
}, R0 = (r, e) => r === e;
function k0(r = zn) {
  const e = r === zn ? Jg : Nu(r), t = (n, o = {}) => {
    const { equalityFn: a = R0, devModeChecks: s = {} } = typeof o == "function" ? { equalityFn: o } : o, {
      store: l,
      subscription: u,
      getServerState: f,
      stabilityCheck: h,
      identityFunctionCheck: p
    } = e();
    pr.useRef(!0);
    const g = pr.useCallback(
      {
        [n.name](C) {
          return n(C);
        }
      }[n.name],
      [n, h, s.stabilityCheck]
    ), v = Xg(
      u.addNestedSub,
      l.getState,
      f || l.getState,
      g,
      a
    );
    return pr.useDebugValue(v), v;
  };
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var P0 = /* @__PURE__ */ k0();
function N0(r) {
  r();
}
function O0() {
  let r = null, e = null;
  return {
    clear() {
      r = null, e = null;
    },
    notify() {
      N0(() => {
        let t = r;
        for (; t; )
          t.callback(), t = t.next;
      });
    },
    get() {
      const t = [];
      let n = r;
      for (; n; )
        t.push(n), n = n.next;
      return t;
    },
    subscribe(t) {
      let n = !0;
      const o = e = {
        callback: t,
        next: null,
        prev: e
      };
      return o.prev ? o.prev.next = o : r = o, function() {
        !n || r === null || (n = !1, o.next ? o.next.prev = o.prev : e = o.prev, o.prev ? o.prev.next = o.next : r = o.next);
      };
    }
  };
}
var vp = {
  notify() {
  },
  get: () => []
};
function M0(r, e) {
  let t, n = vp, o = 0, a = !1;
  function s(E) {
    h();
    const _ = n.subscribe(E);
    let I = !1;
    return () => {
      I || (I = !0, _(), p());
    };
  }
  function l() {
    n.notify();
  }
  function u() {
    C.onStateChange && C.onStateChange();
  }
  function f() {
    return a;
  }
  function h() {
    o++, t || (t = e ? e.addNestedSub(u) : r.subscribe(u), n = O0());
  }
  function p() {
    o--, t && o === 0 && (t(), t = void 0, n.clear(), n = vp);
  }
  function g() {
    a || (a = !0, h());
  }
  function v() {
    a && (a = !1, p());
  }
  const C = {
    addNestedSub: s,
    notifyNestedSubs: l,
    handleChangeWrapper: u,
    isSubscribed: f,
    trySubscribe: g,
    tryUnsubscribe: v,
    getListeners: () => n
  };
  return C;
}
var x0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", L0 = x0 ? pr.useLayoutEffect : pr.useEffect;
function D0({
  store: r,
  context: e,
  children: t,
  serverState: n,
  stabilityCheck: o = "once",
  identityFunctionCheck: a = "once"
}) {
  const s = pr.useMemo(() => {
    const f = M0(r);
    return {
      store: r,
      subscription: f,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      identityFunctionCheck: a
    };
  }, [r, n, o, a]), l = pr.useMemo(() => r.getState(), [r]);
  L0(() => {
    const { subscription: f } = s;
    return f.onStateChange = f.notifyNestedSubs, f.trySubscribe(), l !== r.getState() && f.notifyNestedSubs(), () => {
      f.tryUnsubscribe(), f.onStateChange = void 0;
    };
  }, [s, l]);
  const u = e || zn;
  return /* @__PURE__ */ pr.createElement(u.Provider, { value: s }, t);
}
var U0 = D0;
function Zg(r = zn) {
  const e = r === zn ? Jg : (
    // @ts-ignore
    Nu(r)
  ), t = () => {
    const { store: n } = e();
    return n;
  };
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var F0 = /* @__PURE__ */ Zg();
function H0(r = zn) {
  const e = r === zn ? F0 : Zg(r), t = () => e().dispatch;
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var B0 = /* @__PURE__ */ H0();
A0(S0.useSyncExternalStoreWithSelector);
const K0 = {
  type: "logger",
  log(r) {
    this.output("log", r);
  },
  warn(r) {
    this.output("warn", r);
  },
  error(r) {
    this.output("error", r);
  },
  output(r, e) {
    console && console[r] && console[r].apply(console, e);
  }
};
let q0 = class eu {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || K0, this.options = t, this.debug = t.debug;
  }
  log() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, "log", "", !0);
  }
  warn() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, "warn", "", !0);
  }
  error() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, "error", "");
  }
  deprecate() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, n, o) {
    return o && !this.debug ? null : (typeof e[0] == "string" && (e[0] = `${n}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new eu(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new eu(this.logger, e);
  }
};
var nn = new q0();
class Ys {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((n) => {
      this.observers[n] = this.observers[n] || [], this.observers[n].push(t);
    }), this;
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e] = this.observers[e].filter((n) => n !== t);
    }
  }
  emit(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
      n[o - 1] = arguments[o];
    this.observers[e] && [].concat(this.observers[e]).forEach((s) => {
      s(...n);
    }), this.observers["*"] && [].concat(this.observers["*"]).forEach((s) => {
      s.apply(s, [e, ...n]);
    });
  }
}
function xi() {
  let r, e;
  const t = new Promise((n, o) => {
    r = n, e = o;
  });
  return t.resolve = r, t.reject = e, t;
}
function yp(r) {
  return r == null ? "" : "" + r;
}
function $0(r, e, t) {
  r.forEach((n) => {
    e[n] && (t[n] = e[n]);
  });
}
function Ou(r, e, t) {
  function n(s) {
    return s && s.indexOf("###") > -1 ? s.replace(/###/g, ".") : s;
  }
  function o() {
    return !r || typeof r == "string";
  }
  const a = typeof e != "string" ? [].concat(e) : e.split(".");
  for (; a.length > 1; ) {
    if (o())
      return {};
    const s = n(a.shift());
    !r[s] && t && (r[s] = new t()), Object.prototype.hasOwnProperty.call(r, s) ? r = r[s] : r = {};
  }
  return o() ? {} : {
    obj: r,
    k: n(a.shift())
  };
}
function Cp(r, e, t) {
  const {
    obj: n,
    k: o
  } = Ou(r, e, Object);
  n[o] = t;
}
function G0(r, e, t, n) {
  const {
    obj: o,
    k: a
  } = Ou(r, e, Object);
  o[a] = o[a] || [], n && (o[a] = o[a].concat(t)), n || o[a].push(t);
}
function ys(r, e) {
  const {
    obj: t,
    k: n
  } = Ou(r, e);
  if (t)
    return t[n];
}
function z0(r, e, t) {
  const n = ys(r, t);
  return n !== void 0 ? n : ys(e, t);
}
function em(r, e, t) {
  for (const n in e)
    n !== "__proto__" && n !== "constructor" && (n in r ? typeof r[n] == "string" || r[n] instanceof String || typeof e[n] == "string" || e[n] instanceof String ? t && (r[n] = e[n]) : em(r[n], e[n], t) : r[n] = e[n]);
  return r;
}
function Go(r) {
  return r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var V0 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function W0(r) {
  return typeof r == "string" ? r.replace(/[&<>"'\/]/g, (e) => V0[e]) : r;
}
const j0 = [" ", ",", "?", "!", ";"];
function Y0(r, e, t) {
  e = e || "", t = t || "";
  const n = j0.filter((s) => e.indexOf(s) < 0 && t.indexOf(s) < 0);
  if (n.length === 0)
    return !0;
  const o = new RegExp(`(${n.map((s) => s === "?" ? "\\?" : s).join("|")})`);
  let a = !o.test(r);
  if (!a) {
    const s = r.indexOf(t);
    s > 0 && !o.test(r.substring(0, s)) && (a = !0);
  }
  return a;
}
function Cs(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!r)
    return;
  if (r[e])
    return r[e];
  const n = e.split(t);
  let o = r;
  for (let a = 0; a < n.length; ++a) {
    if (!o || typeof o[n[a]] == "string" && a + 1 < n.length)
      return;
    if (o[n[a]] === void 0) {
      let s = 2, l = n.slice(a, a + s).join(t), u = o[l];
      for (; u === void 0 && n.length > a + s; )
        s++, l = n.slice(a, a + s).join(t), u = o[l];
      if (u === void 0)
        return;
      if (u === null)
        return null;
      if (e.endsWith(l)) {
        if (typeof u == "string")
          return u;
        if (l && typeof u[l] == "string")
          return u[l];
      }
      const f = n.slice(a + s).join(t);
      return f ? Cs(u, f, t) : void 0;
    }
    o = o[n[a]];
  }
  return o;
}
function ws(r) {
  return r && r.indexOf("_") > 0 ? r.replace("_", "-") : r;
}
class wp extends Ys {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const a = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, s = o.ignoreJSONStructure !== void 0 ? o.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let l = [e, t];
    n && typeof n != "string" && (l = l.concat(n)), n && typeof n == "string" && (l = l.concat(a ? n.split(a) : n)), e.indexOf(".") > -1 && (l = e.split("."));
    const u = ys(this.data, l);
    return u || !s || typeof n != "string" ? u : Cs(this.data && this.data[e] && this.data[e][t], n, a);
  }
  addResource(e, t, n, o) {
    let a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const s = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator;
    let l = [e, t];
    n && (l = l.concat(s ? n.split(s) : n)), e.indexOf(".") > -1 && (l = e.split("."), o = t, t = l[1]), this.addNamespaces(t), Cp(this.data, l, o), a.silent || this.emit("added", e, t, n, o);
  }
  addResources(e, t, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const a in n)
      (typeof n[a] == "string" || Object.prototype.toString.apply(n[a]) === "[object Array]") && this.addResource(e, t, a, n[a], {
        silent: !0
      });
    o.silent || this.emit("added", e, t, n);
  }
  addResourceBundle(e, t, n, o, a) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1
    }, l = [e, t];
    e.indexOf(".") > -1 && (l = e.split("."), o = n, n = t, t = l[1]), this.addNamespaces(t);
    let u = ys(this.data, l) || {};
    o ? em(u, n, a) : u = {
      ...u,
      ...n
    }, Cp(this.data, l, u), s.silent || this.emit("added", e, t, n);
  }
  removeResourceBundle(e, t) {
    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return t || (t = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(e, t)
    } : this.getResource(e, t);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const t = this.getDataByLanguage(e);
    return !!(t && Object.keys(t) || []).find((o) => t[o] && Object.keys(t[o]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var tm = {
  processors: {},
  addPostProcessor(r) {
    this.processors[r.name] = r;
  },
  handle(r, e, t, n, o) {
    return r.forEach((a) => {
      this.processors[a] && (e = this.processors[a].process(e, t, n, o));
    }), e;
  }
};
const Ep = {};
class Es extends Ys {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), $0(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = nn.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (e == null)
      return !1;
    const n = this.resolve(e, t);
    return n && n.res !== void 0;
  }
  extractFromKey(e, t) {
    let n = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    n === void 0 && (n = ":");
    const o = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let a = t.ns || this.options.defaultNS || [];
    const s = n && e.indexOf(n) > -1, l = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !Y0(e, n, o);
    if (s && !l) {
      const u = e.match(this.interpolator.nestingRegexp);
      if (u && u.length > 0)
        return {
          key: e,
          namespaces: a
        };
      const f = e.split(n);
      (n !== o || n === o && this.options.ns.indexOf(f[0]) > -1) && (a = f.shift()), e = f.join(o);
    }
    return typeof a == "string" && (a = [a]), {
      key: e,
      namespaces: a
    };
  }
  translate(e, t, n) {
    if (typeof t != "object" && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), typeof t == "object" && (t = {
      ...t
    }), t || (t = {}), e == null)
      return "";
    Array.isArray(e) || (e = [String(e)]);
    const o = t.returnDetails !== void 0 ? t.returnDetails : this.options.returnDetails, a = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator, {
      key: s,
      namespaces: l
    } = this.extractFromKey(e[e.length - 1], t), u = l[l.length - 1], f = t.lng || this.language, h = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (f && f.toLowerCase() === "cimode") {
      if (h) {
        const R = t.nsSeparator || this.options.nsSeparator;
        return o ? {
          res: `${u}${R}${s}`,
          usedKey: s,
          exactUsedKey: s,
          usedLng: f,
          usedNS: u,
          usedParams: this.getUsedParamsDetails(t)
        } : `${u}${R}${s}`;
      }
      return o ? {
        res: s,
        usedKey: s,
        exactUsedKey: s,
        usedLng: f,
        usedNS: u,
        usedParams: this.getUsedParamsDetails(t)
      } : s;
    }
    const p = this.resolve(e, t);
    let g = p && p.res;
    const v = p && p.usedKey || s, C = p && p.exactUsedKey || s, E = Object.prototype.toString.apply(g), _ = ["[object Number]", "[object Function]", "[object RegExp]"], I = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, A = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (A && g && (typeof g != "string" && typeof g != "boolean" && typeof g != "number") && _.indexOf(E) < 0 && !(typeof I == "string" && E === "[object Array]")) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const R = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(v, g, {
          ...t,
          ns: l
        }) : `key '${s} (${this.language})' returned an object instead of string.`;
        return o ? (p.res = R, p.usedParams = this.getUsedParamsDetails(t), p) : R;
      }
      if (a) {
        const R = E === "[object Array]", P = R ? [] : {}, L = R ? C : v;
        for (const q in g)
          if (Object.prototype.hasOwnProperty.call(g, q)) {
            const U = `${L}${a}${q}`;
            P[q] = this.translate(U, {
              ...t,
              joinArrays: !1,
              ns: l
            }), P[q] === U && (P[q] = g[q]);
          }
        g = P;
      }
    } else if (A && typeof I == "string" && E === "[object Array]")
      g = g.join(I), g && (g = this.extendTranslation(g, e, t, n));
    else {
      let R = !1, P = !1;
      const L = t.count !== void 0 && typeof t.count != "string", q = Es.hasDefaultValue(t), U = L ? this.pluralResolver.getSuffix(f, t.count, t) : "", J = t.ordinal && L ? this.pluralResolver.getSuffix(f, t.count, {
        ordinal: !1
      }) : "", Y = t[`defaultValue${U}`] || t[`defaultValue${J}`] || t.defaultValue;
      !this.isValidLookup(g) && q && (R = !0, g = Y), this.isValidLookup(g) || (P = !0, g = s);
      const Z = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && P ? void 0 : g, fe = q && Y !== g && this.options.updateMissing;
      if (P || R || fe) {
        if (this.logger.log(fe ? "updateKey" : "missingKey", f, u, s, fe ? Y : g), a) {
          const ae = this.resolve(s, {
            ...t,
            keySeparator: !1
          });
          ae && ae.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let ne = [];
        const we = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && we && we[0])
          for (let ae = 0; ae < we.length; ae++)
            ne.push(we[ae]);
        else
          this.options.saveMissingTo === "all" ? ne = this.languageUtils.toResolveHierarchy(t.lng || this.language) : ne.push(t.lng || this.language);
        const Q = (ae, oe, Pe) => {
          const Qe = q && Pe !== g ? Pe : Z;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(ae, u, oe, Qe, fe, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(ae, u, oe, Qe, fe, t), this.emit("missingKey", ae, u, oe, g);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && L ? ne.forEach((ae) => {
          this.pluralResolver.getSuffixes(ae, t).forEach((oe) => {
            Q([ae], s + oe, t[`defaultValue${oe}`] || Y);
          });
        }) : Q(ne, s, Y));
      }
      g = this.extendTranslation(g, e, t, p, n), P && g === s && this.options.appendNamespaceToMissingKey && (g = `${u}:${s}`), (P || R) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? g = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}:${s}` : s, R ? g : void 0) : g = this.options.parseMissingKeyHandler(g));
    }
    return o ? (p.res = g, p.usedParams = this.getUsedParamsDetails(t), p) : g;
  }
  extendTranslation(e, t, n, o, a) {
    var s = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...n
      }, n.lng || this.language || o.usedLng, o.usedNS, o.usedKey, {
        resolved: o
      });
    else if (!n.skipInterpolation) {
      n.interpolation && this.interpolator.init({
        ...n,
        interpolation: {
          ...this.options.interpolation,
          ...n.interpolation
        }
      });
      const f = typeof e == "string" && (n && n.interpolation && n.interpolation.skipOnVariables !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let h;
      if (f) {
        const g = e.match(this.interpolator.nestingRegexp);
        h = g && g.length;
      }
      let p = n.replace && typeof n.replace != "string" ? n.replace : n;
      if (this.options.interpolation.defaultVariables && (p = {
        ...this.options.interpolation.defaultVariables,
        ...p
      }), e = this.interpolator.interpolate(e, p, n.lng || this.language, n), f) {
        const g = e.match(this.interpolator.nestingRegexp), v = g && g.length;
        h < v && (n.nest = !1);
      }
      !n.lng && this.options.compatibilityAPI !== "v1" && o && o.res && (n.lng = o.usedLng), n.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var g = arguments.length, v = new Array(g), C = 0; C < g; C++)
          v[C] = arguments[C];
        return a && a[0] === v[0] && !n.context ? (s.logger.warn(`It seems you are nesting recursively key: ${v[0]} in key: ${t[0]}`), null) : s.translate(...v, t);
      }, n)), n.interpolation && this.interpolator.reset();
    }
    const l = n.postProcess || this.options.postProcess, u = typeof l == "string" ? [l] : l;
    return e != null && u && u.length && n.applyPostProcessor !== !1 && (e = tm.handle(u, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...o,
        usedParams: this.getUsedParamsDetails(n)
      },
      ...n
    } : n, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n, o, a, s, l;
    return typeof e == "string" && (e = [e]), e.forEach((u) => {
      if (this.isValidLookup(n))
        return;
      const f = this.extractFromKey(u, t), h = f.key;
      o = h;
      let p = f.namespaces;
      this.options.fallbackNS && (p = p.concat(this.options.fallbackNS));
      const g = t.count !== void 0 && typeof t.count != "string", v = g && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), C = t.context !== void 0 && (typeof t.context == "string" || typeof t.context == "number") && t.context !== "", E = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      p.forEach((_) => {
        this.isValidLookup(n) || (l = _, !Ep[`${E[0]}-${_}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(l) && (Ep[`${E[0]}-${_}`] = !0, this.logger.warn(`key "${o}" for languages "${E.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), E.forEach((I) => {
          if (this.isValidLookup(n))
            return;
          s = I;
          const A = [h];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(A, h, I, _, t);
          else {
            let R;
            g && (R = this.pluralResolver.getSuffix(I, t.count, t));
            const P = `${this.options.pluralSeparator}zero`, L = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (g && (A.push(h + R), t.ordinal && R.indexOf(L) === 0 && A.push(h + R.replace(L, this.options.pluralSeparator)), v && A.push(h + P)), C) {
              const q = `${h}${this.options.contextSeparator}${t.context}`;
              A.push(q), g && (A.push(q + R), t.ordinal && R.indexOf(L) === 0 && A.push(q + R.replace(L, this.options.pluralSeparator)), v && A.push(q + P));
            }
          }
          let S;
          for (; S = A.pop(); )
            this.isValidLookup(n) || (a = S, n = this.getResource(I, _, S, t));
        }));
      });
    }), {
      res: n,
      usedKey: o,
      exactUsedKey: a,
      usedLng: s,
      usedNS: l
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, o) : this.resourceStore.getResource(e, t, n, o);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], n = e.replace && typeof e.replace != "string";
    let o = n ? e.replace : e;
    if (n && typeof e.count < "u" && (o.count = e.count), this.options.interpolation.defaultVariables && (o = {
      ...this.options.interpolation.defaultVariables,
      ...o
    }), !n) {
      o = {
        ...o
      };
      for (const a of t)
        delete o[a];
    }
    return o;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const n in e)
      if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && e[n] !== void 0)
        return !0;
    return !1;
  }
}
function Ll(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
class bp {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = nn.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = ws(e), !e || e.indexOf("-") < 0)
      return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = ws(e), !e || e.indexOf("-") < 0)
      return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (typeof e == "string" && e.indexOf("-") > -1) {
      const t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let n = e.split("-");
      return this.options.lowerCaseLng ? n = n.map((o) => o.toLowerCase()) : n.length === 2 ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Ll(n[1].toLowerCase()))) : n.length === 3 && (n[0] = n[0].toLowerCase(), n[1].length === 2 && (n[1] = n[1].toUpperCase()), n[0] !== "sgn" && n[2].length === 2 && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Ll(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = Ll(n[2].toLowerCase()))), n.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e)
      return null;
    let t;
    return e.forEach((n) => {
      if (t)
        return;
      const o = this.formatLanguageCode(n);
      (!this.options.supportedLngs || this.isSupportedCode(o)) && (t = o);
    }), !t && this.options.supportedLngs && e.forEach((n) => {
      if (t)
        return;
      const o = this.getLanguagePartFromCode(n);
      if (this.isSupportedCode(o))
        return t = o;
      t = this.options.supportedLngs.find((a) => {
        if (a === o)
          return a;
        if (!(a.indexOf("-") < 0 && o.indexOf("-") < 0) && a.indexOf(o) === 0)
          return a;
      });
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e)
      return [];
    if (typeof e == "function" && (e = e(t)), typeof e == "string" && (e = [e]), Object.prototype.toString.apply(e) === "[object Array]")
      return e;
    if (!t)
      return e.default || [];
    let n = e[t];
    return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || [];
  }
  toResolveHierarchy(e, t) {
    const n = this.getFallbackCodes(t || this.options.fallbackLng || [], e), o = [], a = (s) => {
      s && (this.isSupportedCode(s) ? o.push(s) : this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`));
    };
    return typeof e == "string" && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && a(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && a(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && a(this.getLanguagePartFromCode(e))) : typeof e == "string" && a(this.formatLanguageCode(e)), n.forEach((s) => {
      o.indexOf(s) < 0 && a(this.formatLanguageCode(s));
    }), o;
  }
}
let Q0 = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}], J0 = {
  1: function(r) {
    return +(r > 1);
  },
  2: function(r) {
    return +(r != 1);
  },
  3: function(r) {
    return 0;
  },
  4: function(r) {
    return r % 10 == 1 && r % 100 != 11 ? 0 : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? 1 : 2;
  },
  5: function(r) {
    return r == 0 ? 0 : r == 1 ? 1 : r == 2 ? 2 : r % 100 >= 3 && r % 100 <= 10 ? 3 : r % 100 >= 11 ? 4 : 5;
  },
  6: function(r) {
    return r == 1 ? 0 : r >= 2 && r <= 4 ? 1 : 2;
  },
  7: function(r) {
    return r == 1 ? 0 : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? 1 : 2;
  },
  8: function(r) {
    return r == 1 ? 0 : r == 2 ? 1 : r != 8 && r != 11 ? 2 : 3;
  },
  9: function(r) {
    return +(r >= 2);
  },
  10: function(r) {
    return r == 1 ? 0 : r == 2 ? 1 : r < 7 ? 2 : r < 11 ? 3 : 4;
  },
  11: function(r) {
    return r == 1 || r == 11 ? 0 : r == 2 || r == 12 ? 1 : r > 2 && r < 20 ? 2 : 3;
  },
  12: function(r) {
    return +(r % 10 != 1 || r % 100 == 11);
  },
  13: function(r) {
    return +(r !== 0);
  },
  14: function(r) {
    return r == 1 ? 0 : r == 2 ? 1 : r == 3 ? 2 : 3;
  },
  15: function(r) {
    return r % 10 == 1 && r % 100 != 11 ? 0 : r % 10 >= 2 && (r % 100 < 10 || r % 100 >= 20) ? 1 : 2;
  },
  16: function(r) {
    return r % 10 == 1 && r % 100 != 11 ? 0 : r !== 0 ? 1 : 2;
  },
  17: function(r) {
    return r == 1 || r % 10 == 1 && r % 100 != 11 ? 0 : 1;
  },
  18: function(r) {
    return r == 0 ? 0 : r == 1 ? 1 : 2;
  },
  19: function(r) {
    return r == 1 ? 0 : r == 0 || r % 100 > 1 && r % 100 < 11 ? 1 : r % 100 > 10 && r % 100 < 20 ? 2 : 3;
  },
  20: function(r) {
    return r == 1 ? 0 : r == 0 || r % 100 > 0 && r % 100 < 20 ? 1 : 2;
  },
  21: function(r) {
    return r % 100 == 1 ? 1 : r % 100 == 2 ? 2 : r % 100 == 3 || r % 100 == 4 ? 3 : 0;
  },
  22: function(r) {
    return r == 1 ? 0 : r == 2 ? 1 : (r < 0 || r > 10) && r % 10 == 0 ? 2 : 3;
  }
};
const X0 = ["v1", "v2", "v3"], Z0 = ["v4"], _p = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function eI() {
  const r = {};
  return Q0.forEach((e) => {
    e.lngs.forEach((t) => {
      r[t] = {
        numbers: e.nr,
        plurals: J0[e.fc]
      };
    });
  }), r;
}
class tI {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = nn.create("pluralResolver"), (!this.options.compatibilityJSON || Z0.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = eI();
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(ws(e), {
          type: t.ordinal ? "ordinal" : "cardinal"
        });
      } catch {
        return;
      }
    return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)];
  }
  needsPlural(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = this.getRule(e, t);
    return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1;
  }
  getPluralFormsOfKey(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, n).map((o) => `${t}${o}`);
  }
  getSuffixes(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = this.getRule(e, t);
    return n ? this.shouldUseIntlApi() ? n.resolvedOptions().pluralCategories.sort((o, a) => _p[o] - _p[a]).map((o) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : n.numbers.map((o) => this.getSuffix(e, o, t)) : [];
  }
  getSuffix(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const o = this.getRule(e, n);
    return o ? this.shouldUseIntlApi() ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${o.select(t)}` : this.getSuffixRetroCompatible(o, t) : (this.logger.warn(`no plural rule found for: ${e}`), "");
  }
  getSuffixRetroCompatible(e, t) {
    const n = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t));
    let o = e.numbers[n];
    this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 && (o === 2 ? o = "plural" : o === 1 && (o = ""));
    const a = () => this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString();
    return this.options.compatibilityJSON === "v1" ? o === 1 ? "" : typeof o == "number" ? `_plural_${o.toString()}` : a() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 ? a() : this.options.prepend && n.toString() ? this.options.prepend + n.toString() : n.toString();
  }
  shouldUseIntlApi() {
    return !X0.includes(this.options.compatibilityJSON);
  }
}
function Sp(r, e, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, a = z0(r, e, t);
  return !a && o && typeof t == "string" && (a = Cs(r, t, n), a === void 0 && (a = Cs(e, t, n))), a;
}
class rI {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = nn.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || ((t) => t), this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const t = e.interpolation;
    this.escape = t.escape !== void 0 ? t.escape : W0, this.escapeValue = t.escapeValue !== void 0 ? t.escapeValue : !0, this.useRawValueToEscape = t.useRawValueToEscape !== void 0 ? t.useRawValueToEscape : !1, this.prefix = t.prefix ? Go(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? Go(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? Go(t.nestingPrefix) : t.nestingPrefixEscaped || Go("$t("), this.nestingSuffix = t.nestingSuffix ? Go(t.nestingSuffix) : t.nestingSuffixEscaped || Go(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = t.alwaysFormat !== void 0 ? t.alwaysFormat : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = `${this.prefix}(.+?)${this.suffix}`;
    this.regexp = new RegExp(e, "g");
    const t = `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;
    this.regexpUnescape = new RegExp(t, "g");
    const n = `${this.nestingPrefix}(.+?)${this.nestingSuffix}`;
    this.nestingRegexp = new RegExp(n, "g");
  }
  interpolate(e, t, n, o) {
    let a, s, l;
    const u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function f(C) {
      return C.replace(/\$/g, "$$$$");
    }
    const h = (C) => {
      if (C.indexOf(this.formatSeparator) < 0) {
        const A = Sp(t, u, C, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(A, void 0, n, {
          ...o,
          ...t,
          interpolationkey: C
        }) : A;
      }
      const E = C.split(this.formatSeparator), _ = E.shift().trim(), I = E.join(this.formatSeparator).trim();
      return this.format(Sp(t, u, _, this.options.keySeparator, this.options.ignoreJSONStructure), I, n, {
        ...o,
        ...t,
        interpolationkey: _
      });
    };
    this.resetRegExp();
    const p = o && o.missingInterpolationHandler || this.options.missingInterpolationHandler, g = o && o.interpolation && o.interpolation.skipOnVariables !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (C) => f(C)
    }, {
      regex: this.regexp,
      safeValue: (C) => this.escapeValue ? f(this.escape(C)) : f(C)
    }].forEach((C) => {
      for (l = 0; a = C.regex.exec(e); ) {
        const E = a[1].trim();
        if (s = h(E), s === void 0)
          if (typeof p == "function") {
            const I = p(e, a, o);
            s = typeof I == "string" ? I : "";
          } else if (o && Object.prototype.hasOwnProperty.call(o, E))
            s = "";
          else if (g) {
            s = a[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${E} for interpolating ${e}`), s = "";
        else
          typeof s != "string" && !this.useRawValueToEscape && (s = yp(s));
        const _ = C.safeValue(s);
        if (e = e.replace(a[0], _), g ? (C.regex.lastIndex += s.length, C.regex.lastIndex -= a[0].length) : C.regex.lastIndex = 0, l++, l >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o, a, s;
    function l(u, f) {
      const h = this.nestingOptionsSeparator;
      if (u.indexOf(h) < 0)
        return u;
      const p = u.split(new RegExp(`${h}[ ]*{`));
      let g = `{${p[1]}`;
      u = p[0], g = this.interpolate(g, s);
      const v = g.match(/'/g), C = g.match(/"/g);
      (v && v.length % 2 === 0 && !C || C.length % 2 !== 0) && (g = g.replace(/'/g, '"'));
      try {
        s = JSON.parse(g), f && (s = {
          ...f,
          ...s
        });
      } catch (E) {
        return this.logger.warn(`failed parsing options string in nesting for key ${u}`, E), `${u}${h}${g}`;
      }
      return delete s.defaultValue, u;
    }
    for (; o = this.nestingRegexp.exec(e); ) {
      let u = [];
      s = {
        ...n
      }, s = s.replace && typeof s.replace != "string" ? s.replace : s, s.applyPostProcessor = !1, delete s.defaultValue;
      let f = !1;
      if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
        const h = o[1].split(this.formatSeparator).map((p) => p.trim());
        o[1] = h.shift(), u = h, f = !0;
      }
      if (a = t(l.call(this, o[1].trim(), s), s), a && o[0] === e && typeof a != "string")
        return a;
      typeof a != "string" && (a = yp(a)), a || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`), a = ""), f && (a = u.reduce((h, p) => this.format(h, p, n.lng, {
        ...n,
        interpolationkey: o[1].trim()
      }), a.trim())), e = e.replace(o[0], a), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
function nI(r) {
  let e = r.toLowerCase().trim();
  const t = {};
  if (r.indexOf("(") > -1) {
    const n = r.split("(");
    e = n[0].toLowerCase().trim();
    const o = n[1].substring(0, n[1].length - 1);
    e === "currency" && o.indexOf(":") < 0 ? t.currency || (t.currency = o.trim()) : e === "relativetime" && o.indexOf(":") < 0 ? t.range || (t.range = o.trim()) : o.split(";").forEach((s) => {
      if (!s)
        return;
      const [l, ...u] = s.split(":"), f = u.join(":").trim().replace(/^'+|'+$/g, "");
      t[l.trim()] || (t[l.trim()] = f), f === "false" && (t[l.trim()] = !1), f === "true" && (t[l.trim()] = !0), isNaN(f) || (t[l.trim()] = parseInt(f, 10));
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}
function zo(r) {
  const e = {};
  return function(n, o, a) {
    const s = o + JSON.stringify(a);
    let l = e[s];
    return l || (l = r(ws(o), a), e[s] = l), l(n);
  };
}
class oI {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = nn.create("formatter"), this.options = e, this.formats = {
      number: zo((t, n) => {
        const o = new Intl.NumberFormat(t, {
          ...n
        });
        return (a) => o.format(a);
      }),
      currency: zo((t, n) => {
        const o = new Intl.NumberFormat(t, {
          ...n,
          style: "currency"
        });
        return (a) => o.format(a);
      }),
      datetime: zo((t, n) => {
        const o = new Intl.DateTimeFormat(t, {
          ...n
        });
        return (a) => o.format(a);
      }),
      relativetime: zo((t, n) => {
        const o = new Intl.RelativeTimeFormat(t, {
          ...n
        });
        return (a) => o.format(a, n.range || "day");
      }),
      list: zo((t, n) => {
        const o = new Intl.ListFormat(t, {
          ...n
        });
        return (a) => o.format(a);
      })
    }, this.init(e);
  }
  init(e) {
    const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    }).interpolation;
    this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",";
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = zo(t);
  }
  format(e, t, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return t.split(this.formatSeparator).reduce((l, u) => {
      const {
        formatName: f,
        formatOptions: h
      } = nI(u);
      if (this.formats[f]) {
        let p = l;
        try {
          const g = o && o.formatParams && o.formatParams[o.interpolationkey] || {}, v = g.locale || g.lng || o.locale || o.lng || n;
          p = this.formats[f](l, v, {
            ...h,
            ...o,
            ...g
          });
        } catch (g) {
          this.logger.warn(g);
        }
        return p;
      } else
        this.logger.warn(`there was no format function for ${f}`);
      return l;
    }, e);
  }
}
function iI(r, e) {
  r.pending[e] !== void 0 && (delete r.pending[e], r.pendingCount--);
}
class aI extends Ys {
  constructor(e, t, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = o, this.logger = nn.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(n, o.backend, o);
  }
  queueLoad(e, t, n, o) {
    const a = {}, s = {}, l = {}, u = {};
    return e.forEach((f) => {
      let h = !0;
      t.forEach((p) => {
        const g = `${f}|${p}`;
        !n.reload && this.store.hasResourceBundle(f, p) ? this.state[g] = 2 : this.state[g] < 0 || (this.state[g] === 1 ? s[g] === void 0 && (s[g] = !0) : (this.state[g] = 1, h = !1, s[g] === void 0 && (s[g] = !0), a[g] === void 0 && (a[g] = !0), u[p] === void 0 && (u[p] = !0)));
      }), h || (l[f] = !0);
    }), (Object.keys(a).length || Object.keys(s).length) && this.queue.push({
      pending: s,
      pendingCount: Object.keys(s).length,
      loaded: {},
      errors: [],
      callback: o
    }), {
      toLoad: Object.keys(a),
      pending: Object.keys(s),
      toLoadLanguages: Object.keys(l),
      toLoadNamespaces: Object.keys(u)
    };
  }
  loaded(e, t, n) {
    const o = e.split("|"), a = o[0], s = o[1];
    t && this.emit("failedLoading", a, s, t), n && this.store.addResourceBundle(a, s, n), this.state[e] = t ? -1 : 2;
    const l = {};
    this.queue.forEach((u) => {
      G0(u.loaded, [a], s), iI(u, e), t && u.errors.push(t), u.pendingCount === 0 && !u.done && (Object.keys(u.loaded).forEach((f) => {
        l[f] || (l[f] = {});
        const h = u.loaded[f];
        h.length && h.forEach((p) => {
          l[f][p] === void 0 && (l[f][p] = !0);
        });
      }), u.done = !0, u.errors.length ? u.callback(u.errors) : u.callback());
    }), this.emit("loaded", l), this.queue = this.queue.filter((u) => !u.done);
  }
  read(e, t, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, s = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length)
      return s(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: n,
        tried: o,
        wait: a,
        callback: s
      });
      return;
    }
    this.readingCalls++;
    const l = (f, h) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const p = this.waitingReads.shift();
        this.read(p.lng, p.ns, p.fcName, p.tried, p.wait, p.callback);
      }
      if (f && h && o < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, n, o + 1, a * 2, s);
        }, a);
        return;
      }
      s(f, h);
    }, u = this.backend[n].bind(this.backend);
    if (u.length === 2) {
      try {
        const f = u(e, t);
        f && typeof f.then == "function" ? f.then((h) => l(null, h)).catch(l) : l(null, f);
      } catch (f) {
        l(f);
      }
      return;
    }
    return u(e, t, l);
  }
  prepareLoading(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
    typeof e == "string" && (e = this.languageUtils.toResolveHierarchy(e)), typeof t == "string" && (t = [t]);
    const a = this.queueLoad(e, t, n, o);
    if (!a.toLoad.length)
      return a.pending.length || o(), null;
    a.toLoad.forEach((s) => {
      this.loadOne(s);
    });
  }
  load(e, t, n) {
    this.prepareLoading(e, t, {}, n);
  }
  reload(e, t, n) {
    this.prepareLoading(e, t, {
      reload: !0
    }, n);
  }
  loadOne(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const n = e.split("|"), o = n[0], a = n[1];
    this.read(o, a, "read", void 0, void 0, (s, l) => {
      s && this.logger.warn(`${t}loading namespace ${a} for language ${o} failed`, s), !s && l && this.logger.log(`${t}loaded namespace ${a} for language ${o}`, l), this.loaded(e, s, l);
    });
  }
  saveMissing(e, t, n, o, a) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, l = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)) {
      this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(n == null || n === "")) {
      if (this.backend && this.backend.create) {
        const u = {
          ...s,
          isUpdate: a
        }, f = this.backend.create.bind(this.backend);
        if (f.length < 6)
          try {
            let h;
            f.length === 5 ? h = f(e, t, n, o, u) : h = f(e, t, n, o), h && typeof h.then == "function" ? h.then((p) => l(null, p)).catch(l) : l(null, h);
          } catch (h) {
            l(h);
          }
        else
          f(e, t, n, o, l, u);
      }
      !e || !e[0] || this.store.addResource(e[0], t, n, o);
    }
  }
}
function Tp() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function(e) {
      let t = {};
      if (typeof e[1] == "object" && (t = e[1]), typeof e[1] == "string" && (t.defaultValue = e[1]), typeof e[2] == "string" && (t.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
        const n = e[3] || e[2];
        Object.keys(n).forEach((o) => {
          t[o] = n[o];
        });
      }
      return t;
    },
    interpolation: {
      escapeValue: !0,
      format: (r, e, t, n) => r,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0
    }
  };
}
function Ip(r) {
  return typeof r.ns == "string" && (r.ns = [r.ns]), typeof r.fallbackLng == "string" && (r.fallbackLng = [r.fallbackLng]), typeof r.fallbackNS == "string" && (r.fallbackNS = [r.fallbackNS]), r.supportedLngs && r.supportedLngs.indexOf("cimode") < 0 && (r.supportedLngs = r.supportedLngs.concat(["cimode"])), r;
}
function as() {
}
function sI(r) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach((t) => {
    typeof r[t] == "function" && (r[t] = r[t].bind(r));
  });
}
class Yi extends Ys {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Ip(e), this.services = {}, this.logger = nn, this.modules = {
      external: []
    }, sI(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initImmediate)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init() {
    var e = this;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    typeof t == "function" && (n = t, t = {}), !t.defaultNS && t.defaultNS !== !1 && t.ns && (typeof t.ns == "string" ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const o = Tp();
    this.options = {
      ...o,
      ...this.options,
      ...Ip(t)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...o.interpolation,
      ...this.options.interpolation
    }), t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    function a(h) {
      return h ? typeof h == "function" ? new h() : h : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? nn.init(a(this.modules.logger), this.options) : nn.init(null, this.options);
      let h;
      this.modules.formatter ? h = this.modules.formatter : typeof Intl < "u" && (h = oI);
      const p = new bp(this.options);
      this.store = new wp(this.options.resources, this.options);
      const g = this.services;
      g.logger = nn, g.resourceStore = this.store, g.languageUtils = p, g.pluralResolver = new tI(p, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), h && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (g.formatter = a(h), g.formatter.init(g, this.options), this.options.interpolation.format = g.formatter.format.bind(g.formatter)), g.interpolator = new rI(this.options), g.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, g.backendConnector = new aI(a(this.modules.backend), g.resourceStore, g, this.options), g.backendConnector.on("*", function(v) {
        for (var C = arguments.length, E = new Array(C > 1 ? C - 1 : 0), _ = 1; _ < C; _++)
          E[_ - 1] = arguments[_];
        e.emit(v, ...E);
      }), this.modules.languageDetector && (g.languageDetector = a(this.modules.languageDetector), g.languageDetector.init && g.languageDetector.init(g, this.options.detection, this.options)), this.modules.i18nFormat && (g.i18nFormat = a(this.modules.i18nFormat), g.i18nFormat.init && g.i18nFormat.init(this)), this.translator = new Es(this.services, this.options), this.translator.on("*", function(v) {
        for (var C = arguments.length, E = new Array(C > 1 ? C - 1 : 0), _ = 1; _ < C; _++)
          E[_ - 1] = arguments[_];
        e.emit(v, ...E);
      }), this.modules.external.forEach((v) => {
        v.init && v.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, n || (n = as), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const h = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      h.length > 0 && h[0] !== "dev" && (this.options.lng = h[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((h) => {
      this[h] = function() {
        return e.store[h](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((h) => {
      this[h] = function() {
        return e.store[h](...arguments), e;
      };
    });
    const u = xi(), f = () => {
      const h = (p, g) => {
        this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), u.resolve(g), n(p, g);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
        return h(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, h);
    };
    return this.options.resources || !this.options.initImmediate ? f() : setTimeout(f, 0), u;
  }
  loadResources(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : as;
    const o = typeof e == "string" ? e : this.language;
    if (typeof e == "function" && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (o && o.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
        return n();
      const a = [], s = (l) => {
        if (!l || l === "cimode")
          return;
        this.services.languageUtils.toResolveHierarchy(l).forEach((f) => {
          f !== "cimode" && a.indexOf(f) < 0 && a.push(f);
        });
      };
      o ? s(o) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((u) => s(u)), this.options.preload && this.options.preload.forEach((l) => s(l)), this.services.backendConnector.load(a, this.options.ns, (l) => {
        !l && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), n(l);
      });
    } else
      n(null);
  }
  reloadResources(e, t, n) {
    const o = xi();
    return e || (e = this.languages), t || (t = this.options.ns), n || (n = as), this.services.backendConnector.reload(e, t, (a) => {
      o.resolve(), n(a);
    }), o;
  }
  use(e) {
    if (!e)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && tm.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1))
      for (let t = 0; t < this.languages.length; t++) {
        const n = this.languages[t];
        if (!(["cimode", "dev"].indexOf(n) > -1) && this.store.hasLanguageSomeTranslations(n)) {
          this.resolvedLanguage = n;
          break;
        }
      }
  }
  changeLanguage(e, t) {
    var n = this;
    this.isLanguageChangingTo = e;
    const o = xi();
    this.emit("languageChanging", e);
    const a = (u) => {
      this.language = u, this.languages = this.services.languageUtils.toResolveHierarchy(u), this.resolvedLanguage = void 0, this.setResolvedLanguage(u);
    }, s = (u, f) => {
      f ? (a(f), this.translator.changeLanguage(f), this.isLanguageChangingTo = void 0, this.emit("languageChanged", f), this.logger.log("languageChanged", f)) : this.isLanguageChangingTo = void 0, o.resolve(function() {
        return n.t(...arguments);
      }), t && t(u, function() {
        return n.t(...arguments);
      });
    }, l = (u) => {
      !e && !u && this.services.languageDetector && (u = []);
      const f = typeof u == "string" ? u : this.services.languageUtils.getBestMatchFromCodes(u);
      f && (this.language || a(f), this.translator.language || this.translator.changeLanguage(f), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(f)), this.loadResources(f, (h) => {
        s(h, f);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? l(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(l) : this.services.languageDetector.detect(l) : l(e), o;
  }
  getFixedT(e, t, n) {
    var o = this;
    const a = function(s, l) {
      let u;
      if (typeof l != "object") {
        for (var f = arguments.length, h = new Array(f > 2 ? f - 2 : 0), p = 2; p < f; p++)
          h[p - 2] = arguments[p];
        u = o.options.overloadTranslationOptionHandler([s, l].concat(h));
      } else
        u = {
          ...l
        };
      u.lng = u.lng || a.lng, u.lngs = u.lngs || a.lngs, u.ns = u.ns || a.ns, u.keyPrefix = u.keyPrefix || n || a.keyPrefix;
      const g = o.options.keySeparator || ".";
      let v;
      return u.keyPrefix && Array.isArray(s) ? v = s.map((C) => `${u.keyPrefix}${g}${C}`) : v = u.keyPrefix ? `${u.keyPrefix}${g}${s}` : s, o.t(v, u);
    };
    return typeof e == "string" ? a.lng = e : a.lngs = e, a.ns = t, a.keyPrefix = n, a;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const n = t.lng || this.resolvedLanguage || this.languages[0], o = this.options ? this.options.fallbackLng : !1, a = this.languages[this.languages.length - 1];
    if (n.toLowerCase() === "cimode")
      return !0;
    const s = (l, u) => {
      const f = this.services.backendConnector.state[`${l}|${u}`];
      return f === -1 || f === 2;
    };
    if (t.precheck) {
      const l = t.precheck(this, s);
      if (l !== void 0)
        return l;
    }
    return !!(this.hasResourceBundle(n, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || s(n, e) && (!o || s(a, e)));
  }
  loadNamespaces(e, t) {
    const n = xi();
    return this.options.ns ? (typeof e == "string" && (e = [e]), e.forEach((o) => {
      this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
    }), this.loadResources((o) => {
      n.resolve(), t && t(o);
    }), n) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const n = xi();
    typeof e == "string" && (e = [e]);
    const o = this.options.preload || [], a = e.filter((s) => o.indexOf(s) < 0);
    return a.length ? (this.options.preload = o.concat(a), this.loadResources((s) => {
      n.resolve(), t && t(s);
    }), n) : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e)
      return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], n = this.services && this.services.languageUtils || new bp(Tp());
    return t.indexOf(n.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new Yi(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : as;
    const n = e.forkResourceStore;
    n && delete e.forkResourceStore;
    const o = {
      ...this.options,
      ...e,
      isClone: !0
    }, a = new Yi(o);
    return (e.debug !== void 0 || e.prefix !== void 0) && (a.logger = a.logger.clone(e)), ["store", "services", "language"].forEach((l) => {
      a[l] = this[l];
    }), a.services = {
      ...this.services
    }, a.services.utils = {
      hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
    }, n && (a.store = new wp(this.store.data, o), a.services.resourceStore = a.store), a.translator = new Es(a.services, o), a.translator.on("*", function(l) {
      for (var u = arguments.length, f = new Array(u > 1 ? u - 1 : 0), h = 1; h < u; h++)
        f[h - 1] = arguments[h];
      a.emit(l, ...f);
    }), a.init(o, t), a.translator.options = o, a.translator.backendConnector.services.utils = {
      hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
    }, a;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const bt = Yi.createInstance();
bt.createInstance = Yi.createInstance;
bt.createInstance;
bt.dir;
bt.init;
bt.loadResources;
bt.reloadResources;
bt.use;
bt.changeLanguage;
bt.getFixedT;
bt.t;
bt.exists;
bt.setDefaultNamespace;
bt.hasLoadedNamespace;
bt.loadNamespaces;
bt.loadLanguages;
function cI() {
  if (console && console.warn) {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    typeof e[0] == "string" && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e);
  }
}
const Ap = {};
function tu() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  typeof e[0] == "string" && Ap[e[0]] || (typeof e[0] == "string" && (Ap[e[0]] = /* @__PURE__ */ new Date()), cI(...e));
}
const rm = (r, e) => () => {
  if (r.isInitialized)
    e();
  else {
    const t = () => {
      setTimeout(() => {
        r.off("initialized", t);
      }, 0), e();
    };
    r.on("initialized", t);
  }
};
function Rp(r, e, t) {
  r.loadNamespaces(e, rm(r, t));
}
function kp(r, e, t, n) {
  typeof t == "string" && (t = [t]), t.forEach((o) => {
    r.options.ns.indexOf(o) < 0 && r.options.ns.push(o);
  }), r.loadLanguages(e, rm(r, n));
}
function lI(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const n = e.languages[0], o = e.options ? e.options.fallbackLng : !1, a = e.languages[e.languages.length - 1];
  if (n.toLowerCase() === "cimode")
    return !0;
  const s = (l, u) => {
    const f = e.services.backendConnector.state[`${l}|${u}`];
    return f === -1 || f === 2;
  };
  return t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && e.services.backendConnector.backend && e.isLanguageChangingTo && !s(e.isLanguageChangingTo, r) ? !1 : !!(e.hasResourceBundle(n, r) || !e.services.backendConnector.backend || e.options.resources && !e.options.partialBundledLanguages || s(n, r) && (!o || s(a, r)));
}
function uI(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !e.languages || !e.languages.length ? (tu("i18n.languages were undefined or empty", e.languages), !0) : e.options.ignoreJSONStructure !== void 0 ? e.hasLoadedNamespace(r, {
    lng: t.lng,
    precheck: (o, a) => {
      if (t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !a(o.isLanguageChangingTo, r))
        return !1;
    }
  }) : lI(r, e, t);
}
const dI = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, fI = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, hI = (r) => fI[r], pI = (r) => r.replace(dI, hI);
let ru = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: pI
};
function gI() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  ru = {
    ...ru,
    ...r
  };
}
function mI() {
  return ru;
}
let nm;
function vI(r) {
  nm = r;
}
function yI() {
  return nm;
}
const CI = {
  type: "3rdParty",
  init(r) {
    gI(r.options.react), vI(r);
  }
}, wI = Io();
class EI {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(e) {
    e.forEach((t) => {
      this.usedNamespaces[t] || (this.usedNamespaces[t] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const bI = (r, e) => {
  const t = Ke();
  return ge(() => {
    t.current = e ? t.current : r;
  }, [r, e]), t.current;
};
function Mu(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: t
  } = e, {
    i18n: n,
    defaultNS: o
  } = Yn(wI) || {}, a = t || n || yI();
  if (a && !a.reportNamespaces && (a.reportNamespaces = new EI()), !a) {
    tu("You will need to pass in an i18next instance by using initReactI18next");
    const S = (P, L) => typeof L == "string" ? L : L && typeof L == "object" && typeof L.defaultValue == "string" ? L.defaultValue : Array.isArray(P) ? P[P.length - 1] : P, R = [S, {}, !1];
    return R.t = S, R.i18n = {}, R.ready = !1, R;
  }
  a.options.react && a.options.react.wait !== void 0 && tu("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const s = {
    ...mI(),
    ...a.options.react,
    ...e
  }, {
    useSuspense: l,
    keyPrefix: u
  } = s;
  let f = r || o || a.options && a.options.defaultNS;
  f = typeof f == "string" ? [f] : f || ["translation"], a.reportNamespaces.addUsedNamespaces && a.reportNamespaces.addUsedNamespaces(f);
  const h = (a.isInitialized || a.initializedStoreOnce) && f.every((S) => uI(S, a, s));
  function p() {
    return a.getFixedT(e.lng || null, s.nsMode === "fallback" ? f : f[0], u);
  }
  const [g, v] = ye(p);
  let C = f.join();
  e.lng && (C = `${e.lng}${C}`);
  const E = bI(C), _ = Ke(!0);
  ge(() => {
    const {
      bindI18n: S,
      bindI18nStore: R
    } = s;
    _.current = !0, !h && !l && (e.lng ? kp(a, e.lng, f, () => {
      _.current && v(p);
    }) : Rp(a, f, () => {
      _.current && v(p);
    })), h && E && E !== C && _.current && v(p);
    function P() {
      _.current && v(p);
    }
    return S && a && a.on(S, P), R && a && a.store.on(R, P), () => {
      _.current = !1, S && a && S.split(" ").forEach((L) => a.off(L, P)), R && a && R.split(" ").forEach((L) => a.store.off(L, P));
    };
  }, [a, C]);
  const I = Ke(!0);
  ge(() => {
    _.current && !I.current && v(p), I.current = !1;
  }, [a, u]);
  const A = [g, a, h];
  if (A.t = g, A.i18n = a, A.ready = h, h || !h && !l)
    return A;
  throw new Promise((S) => {
    e.lng ? kp(a, e.lng, f, () => S()) : Rp(a, f, () => S());
  });
}
bt.use(CI).init({
  resources: {
    "en-GB": {
      translation: {
        apply: "Assign",
        cancel: "Cancel",
        noDescription: "No description",
        linkTabTitle: "Link",
        settingsTabTitle: "Settings",
        language: "Language",
        selectLanguageInstruction: "Select language",
        selectMainDictionary: "Main dictionary",
        selectFilterDictionaries: "Selection filter dictionaries",
        selectObjects: "Select objects",
        attachToType: "Attach to type",
        generalSettingsLabel: "General settings",
        dictionarySelectionLabel: "Dictionary selection",
        generalSettingsInstruction: "Set the language and the bSDD environment.",
        dictionarySelectionInstruction: "Select the main dictionary and the filter dictionaries to use for the selection of objects. The main dictionary is used to select the objects. The filter dictionaries are used to filter the selection of objects.",
        parameterMappingLabel: "Parameter mapping",
        parameterMappingInstruction: "Define the Revit type parameter in which to store the selected classes for this dictionary.",
        sortFilterDictionariesLabel: "Sort filter dictionaries",
        sortFilterDictionariesInstruction: "The dictionaries will be shown in this order anywhere in the application.",
        dictionaryValidationSummaryLabel: "Validation per dictionary",
        classificationsLabel: "Classifications",
        propertysetsLabel: "Property sets",
        ShowPreview: "Show preview dictionaries",
        entitySelectionInstruction: "Select entities by using the dropdown at the top of the panel.",
        needHelp: "Need help?",
        checkDocumentation: "Check out our documentation",
        appInfoLabel: "App info",
        appInfoInstruction: "Information about this plugin"
      }
    },
    "nl-NL": {
      translation: {
        apply: "Toewijzen",
        cancel: "Annuleren",
        noDescription: "Geen beschrijving",
        linkTabTitle: "Koppelen",
        settingsTabTitle: "Instellingen",
        language: "Taal",
        selectLanguageInstruction: "Selecteer taal",
        selectMainDictionary: "bSDD domein",
        selectFilterDictionaries: "Selectie filter domeinen",
        selectObjects: "Selecteer objecten",
        attachToType: "Koppelen aan type",
        generalSettingsLabel: "Algemene instellingen",
        generalSettingsInstruction: "Stel de taal en de bSDD omgeving in.",
        dictionarySelectionLabel: "Domein selectie",
        dictionarySelectionInstruction: "Selecteer het hoofddomein en de filterdomeinen om te gebruiken voor de selectie van objecten. Het hoofddomein wordt gebruikt om de objecten te selecteren. De filterdomeinen worden gebruikt om de selectie van objecten te filteren.",
        parameterMappingLabel: "Parameter mapping",
        parameterMappingInstruction: "Definieer de Revit type parameter waarin de geselecteerde object typen voor dit domein moeten worden opgeslagen.",
        sortFilterDictionariesLabel: "Sorteer filter domeinen",
        sortFilterDictionariesInstruction: "De domeinen worden overal in de app in deze volgorde getoond.",
        dictionaryValidationSummaryLabel: "Validatie per domein",
        classificationsLabel: "Classificaties",
        propertysetsLabel: "Eigenschappen sets",
        ShowPreview: "Toon voorbeeld domeinen",
        entitySelectionInstruction: "Selecteer objecten in de dropdown bovenaan in het paneel.",
        needHelp: "Hulp nodig?",
        checkDocumentation: "Bekijk onze documentatie",
        appInfoLabel: "App info",
        appInfoInstruction: "Informatie over deze plugin"
      }
    }
  },
  lng: "en-GB",
  fallbackLng: "nl-NL",
  interpolation: {
    escapeValue: !1
  }
});
/*! @azure/msal-browser v2.38.3 2023-10-27 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var nu = function(r, e) {
  return nu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
  }, nu(r, e);
};
function kt(r, e) {
  nu(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var le = function() {
  return le = Object.assign || function(e) {
    for (var t, n = 1, o = arguments.length; n < o; n++) {
      t = arguments[n];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, le.apply(this, arguments);
};
function Pp(r, e) {
  var t = {};
  for (var n in r)
    Object.prototype.hasOwnProperty.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(r); o < n.length; o++)
      e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[o]) && (t[n[o]] = r[n[o]]);
  return t;
}
function G(r, e, t, n) {
  function o(a) {
    return a instanceof t ? a : new t(function(s) {
      s(a);
    });
  }
  return new (t || (t = Promise))(function(a, s) {
    function l(h) {
      try {
        f(n.next(h));
      } catch (p) {
        s(p);
      }
    }
    function u(h) {
      try {
        f(n.throw(h));
      } catch (p) {
        s(p);
      }
    }
    function f(h) {
      h.done ? a(h.value) : o(h.value).then(l, u);
    }
    f((n = n.apply(r, e || [])).next());
  });
}
function z(r, e) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, o, a, s;
  return s = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function l(f) {
    return function(h) {
      return u([f, h]);
    };
  }
  function u(f) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (n = 1, o && (a = f[0] & 2 ? o.return : f[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, f[1])).done)
          return a;
        switch (o = 0, a && (f = [f[0] & 2, a.value]), f[0]) {
          case 0:
          case 1:
            a = f;
            break;
          case 4:
            return t.label++, { value: f[1], done: !1 };
          case 5:
            t.label++, o = f[1], f = [0];
            continue;
          case 7:
            f = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (f[0] === 6 || f[0] === 2)) {
              t = 0;
              continue;
            }
            if (f[0] === 3 && (!a || f[1] > a[0] && f[1] < a[3])) {
              t.label = f[1];
              break;
            }
            if (f[0] === 6 && t.label < a[1]) {
              t.label = a[1], a = f;
              break;
            }
            if (a && t.label < a[2]) {
              t.label = a[2], t.ops.push(f);
              break;
            }
            a[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        f = e.call(r, t);
      } catch (h) {
        f = [6, h], o = 0;
      } finally {
        n = a = 0;
      }
    if (f[0] & 5)
      throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}
function _I(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t)
    return r;
  var n = t.call(r), o, a = [], s;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = n.next()).done; )
      a.push(o.value);
  } catch (l) {
    s = { error: l };
  } finally {
    try {
      o && !o.done && (t = n.return) && t.call(n);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return a;
}
function xu() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r = r.concat(_I(arguments[e]));
  return r;
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var ou = function(r, e) {
  return ou = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
  }, ou(r, e);
};
function or(r, e) {
  ou(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var $e = function() {
  return $e = Object.assign || function(e) {
    for (var t, n = 1, o = arguments.length; n < o; n++) {
      t = arguments[n];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, $e.apply(this, arguments);
};
function _e(r, e, t, n) {
  function o(a) {
    return a instanceof t ? a : new t(function(s) {
      s(a);
    });
  }
  return new (t || (t = Promise))(function(a, s) {
    function l(h) {
      try {
        f(n.next(h));
      } catch (p) {
        s(p);
      }
    }
    function u(h) {
      try {
        f(n.throw(h));
      } catch (p) {
        s(p);
      }
    }
    function f(h) {
      h.done ? a(h.value) : o(h.value).then(l, u);
    }
    f((n = n.apply(r, e || [])).next());
  });
}
function Se(r, e) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, o, a, s;
  return s = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function l(f) {
    return function(h) {
      return u([f, h]);
    };
  }
  function u(f) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (n = 1, o && (a = f[0] & 2 ? o.return : f[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, f[1])).done)
          return a;
        switch (o = 0, a && (f = [f[0] & 2, a.value]), f[0]) {
          case 0:
          case 1:
            a = f;
            break;
          case 4:
            return t.label++, { value: f[1], done: !1 };
          case 5:
            t.label++, o = f[1], f = [0];
            continue;
          case 7:
            f = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (f[0] === 6 || f[0] === 2)) {
              t = 0;
              continue;
            }
            if (f[0] === 3 && (!a || f[1] > a[0] && f[1] < a[3])) {
              t.label = f[1];
              break;
            }
            if (f[0] === 6 && t.label < a[1]) {
              t.label = a[1], a = f;
              break;
            }
            if (a && t.label < a[2]) {
              t.label = a[2], t.ops.push(f);
              break;
            }
            a[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        f = e.call(r, t);
      } catch (h) {
        f = [6, h], o = 0;
      } finally {
        n = a = 0;
      }
    if (f[0] & 5)
      throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}
function Qs() {
  for (var r = 0, e = 0, t = arguments.length; e < t; e++)
    r += arguments[e].length;
  for (var n = Array(r), o = 0, e = 0; e < t; e++)
    for (var a = arguments[e], s = 0, l = a.length; s < l; s++, o++)
      n[o] = a[s];
  return n;
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
var O = {
  LIBRARY_NAME: "MSAL.JS",
  SKU: "msal.js.common",
  // Prefix for all library cache entries
  CACHE_PREFIX: "msal",
  // default authority
  DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/",
  DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com",
  DEFAULT_COMMON_TENANT: "common",
  // ADFS String
  ADFS: "adfs",
  DSTS: "dstsv2",
  // Default AAD Instance Discovery Endpoint
  AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=",
  // CIAM URL
  CIAM_AUTH_URL: ".ciamlogin.com",
  AAD_TENANT_DOMAIN_SUFFIX: ".onmicrosoft.com",
  // Resource delimiter - used for certain cache entries
  RESOURCE_DELIM: "|",
  // Placeholder for non-existent account ids/objects
  NO_ACCOUNT: "NO_ACCOUNT",
  // Claims
  CLAIMS: "claims",
  // Consumer UTID
  CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad",
  // Default scopes
  OPENID_SCOPE: "openid",
  PROFILE_SCOPE: "profile",
  OFFLINE_ACCESS_SCOPE: "offline_access",
  EMAIL_SCOPE: "email",
  // Default response type for authorization code flow
  CODE_RESPONSE_TYPE: "code",
  CODE_GRANT_TYPE: "authorization_code",
  RT_GRANT_TYPE: "refresh_token",
  FRAGMENT_RESPONSE_MODE: "fragment",
  S256_CODE_CHALLENGE_METHOD: "S256",
  URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8",
  AUTHORIZATION_PENDING: "authorization_pending",
  NOT_DEFINED: "not_defined",
  EMPTY_STRING: "",
  NOT_APPLICABLE: "N/A",
  FORWARD_SLASH: "/",
  IMDS_ENDPOINT: "http://169.254.169.254/metadata/instance/compute/location",
  IMDS_VERSION: "2020-06-01",
  IMDS_TIMEOUT: 2e3,
  AZURE_REGION_AUTO_DISCOVER_FLAG: "TryAutoDetect",
  REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX: "login.microsoft.com",
  REGIONAL_AUTH_NON_MSI_QUERY_STRING: "allowestsrnonmsi=true",
  KNOWN_PUBLIC_CLOUDS: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"],
  TOKEN_RESPONSE_TYPE: "token",
  ID_TOKEN_RESPONSE_TYPE: "id_token",
  SHR_NONCE_VALIDITY: 240,
  INVALID_INSTANCE: "invalid_instance"
}, sa = [
  O.OPENID_SCOPE,
  O.PROFILE_SCOPE,
  O.OFFLINE_ACCESS_SCOPE
], Np = Qs(sa, [
  O.EMAIL_SCOPE
]), mr;
(function(r) {
  r.CONTENT_TYPE = "Content-Type", r.RETRY_AFTER = "Retry-After", r.CCS_HEADER = "X-AnchorMailbox", r.WWWAuthenticate = "WWW-Authenticate", r.AuthenticationInfo = "Authentication-Info", r.X_MS_REQUEST_ID = "x-ms-request-id", r.X_MS_HTTP_VERSION = "x-ms-httpver";
})(mr || (mr = {}));
var yt;
(function(r) {
  r.ID_TOKEN = "idtoken", r.CLIENT_INFO = "client.info", r.ADAL_ID_TOKEN = "adal.idtoken", r.ERROR = "error", r.ERROR_DESC = "error.description", r.ACTIVE_ACCOUNT = "active-account", r.ACTIVE_ACCOUNT_FILTERS = "active-account-filters";
})(yt || (yt = {}));
var mo;
(function(r) {
  r.COMMON = "common", r.ORGANIZATIONS = "organizations", r.CONSUMERS = "consumers";
})(mo || (mo = {}));
var Ae;
(function(r) {
  r.CLIENT_ID = "client_id", r.REDIRECT_URI = "redirect_uri", r.RESPONSE_TYPE = "response_type", r.RESPONSE_MODE = "response_mode", r.GRANT_TYPE = "grant_type", r.CLAIMS = "claims", r.SCOPE = "scope", r.ERROR = "error", r.ERROR_DESCRIPTION = "error_description", r.ACCESS_TOKEN = "access_token", r.ID_TOKEN = "id_token", r.REFRESH_TOKEN = "refresh_token", r.EXPIRES_IN = "expires_in", r.STATE = "state", r.NONCE = "nonce", r.PROMPT = "prompt", r.SESSION_STATE = "session_state", r.CLIENT_INFO = "client_info", r.CODE = "code", r.CODE_CHALLENGE = "code_challenge", r.CODE_CHALLENGE_METHOD = "code_challenge_method", r.CODE_VERIFIER = "code_verifier", r.CLIENT_REQUEST_ID = "client-request-id", r.X_CLIENT_SKU = "x-client-SKU", r.X_CLIENT_VER = "x-client-VER", r.X_CLIENT_OS = "x-client-OS", r.X_CLIENT_CPU = "x-client-CPU", r.X_CLIENT_CURR_TELEM = "x-client-current-telemetry", r.X_CLIENT_LAST_TELEM = "x-client-last-telemetry", r.X_MS_LIB_CAPABILITY = "x-ms-lib-capability", r.X_APP_NAME = "x-app-name", r.X_APP_VER = "x-app-ver", r.POST_LOGOUT_URI = "post_logout_redirect_uri", r.ID_TOKEN_HINT = "id_token_hint", r.DEVICE_CODE = "device_code", r.CLIENT_SECRET = "client_secret", r.CLIENT_ASSERTION = "client_assertion", r.CLIENT_ASSERTION_TYPE = "client_assertion_type", r.TOKEN_TYPE = "token_type", r.REQ_CNF = "req_cnf", r.OBO_ASSERTION = "assertion", r.REQUESTED_TOKEN_USE = "requested_token_use", r.ON_BEHALF_OF = "on_behalf_of", r.FOCI = "foci", r.CCS_HEADER = "X-AnchorMailbox", r.RETURN_SPA_CODE = "return_spa_code", r.NATIVE_BROKER = "nativebroker", r.LOGOUT_HINT = "logout_hint";
})(Ae || (Ae = {}));
var jo;
(function(r) {
  r.ACCESS_TOKEN = "access_token", r.XMS_CC = "xms_cc";
})(jo || (jo = {}));
var Ft = {
  LOGIN: "login",
  SELECT_ACCOUNT: "select_account",
  CONSENT: "consent",
  NONE: "none",
  CREATE: "create",
  NO_SESSION: "no_session"
}, Ki;
(function(r) {
  r.ACCOUNT = "account", r.SID = "sid", r.LOGIN_HINT = "login_hint", r.ID_TOKEN = "id_token", r.DOMAIN_HINT = "domain_hint", r.ORGANIZATIONS = "organizations", r.CONSUMERS = "consumers", r.ACCOUNT_ID = "accountIdentifier", r.HOMEACCOUNT_ID = "homeAccountIdentifier";
})(Ki || (Ki = {}));
var Op = {
  PLAIN: "plain",
  S256: "S256"
}, bs;
(function(r) {
  r.QUERY = "query", r.FRAGMENT = "fragment", r.FORM_POST = "form_post";
})(bs || (bs = {}));
var _s;
(function(r) {
  r.IMPLICIT_GRANT = "implicit", r.AUTHORIZATION_CODE_GRANT = "authorization_code", r.CLIENT_CREDENTIALS_GRANT = "client_credentials", r.RESOURCE_OWNER_PASSWORD_GRANT = "password", r.REFRESH_TOKEN_GRANT = "refresh_token", r.DEVICE_CODE_GRANT = "device_code", r.JWT_BEARER = "urn:ietf:params:oauth:grant-type:jwt-bearer";
})(_s || (_s = {}));
var bn;
(function(r) {
  r.MSSTS_ACCOUNT_TYPE = "MSSTS", r.ADFS_ACCOUNT_TYPE = "ADFS", r.MSAV1_ACCOUNT_TYPE = "MSA", r.GENERIC_ACCOUNT_TYPE = "Generic";
})(bn || (bn = {}));
var Ct;
(function(r) {
  r.CACHE_KEY_SEPARATOR = "-", r.CLIENT_INFO_SEPARATOR = ".";
})(Ct || (Ct = {}));
var he;
(function(r) {
  r.ID_TOKEN = "IdToken", r.ACCESS_TOKEN = "AccessToken", r.ACCESS_TOKEN_WITH_AUTH_SCHEME = "AccessToken_With_AuthScheme", r.REFRESH_TOKEN = "RefreshToken";
})(he || (he = {}));
var _n;
(function(r) {
  r[r.ADFS = 1001] = "ADFS", r[r.MSA = 1002] = "MSA", r[r.MSSTS = 1003] = "MSSTS", r[r.GENERIC = 1004] = "GENERIC", r[r.ACCESS_TOKEN = 2001] = "ACCESS_TOKEN", r[r.REFRESH_TOKEN = 2002] = "REFRESH_TOKEN", r[r.ID_TOKEN = 2003] = "ID_TOKEN", r[r.APP_METADATA = 3001] = "APP_METADATA", r[r.UNDEFINED = 9999] = "UNDEFINED";
})(_n || (_n = {}));
var iu = "appmetadata", SI = "client_info", qi = "1", $i = {
  CACHE_KEY: "authority-metadata",
  REFRESH_TIME_SECONDS: 3600 * 24
  // 24 Hours
}, kr;
(function(r) {
  r.CONFIG = "config", r.CACHE = "cache", r.NETWORK = "network", r.HARDCODED_VALUES = "hardcoded_values";
})(kr || (kr = {}));
var It = {
  SCHEMA_VERSION: 5,
  MAX_CUR_HEADER_BYTES: 80,
  MAX_LAST_HEADER_BYTES: 330,
  MAX_CACHED_ERRORS: 50,
  CACHE_KEY: "server-telemetry",
  CATEGORY_SEPARATOR: "|",
  VALUE_SEPARATOR: ",",
  OVERFLOW_TRUE: "1",
  OVERFLOW_FALSE: "0",
  UNKNOWN_ERROR: "unknown_error"
}, Ve;
(function(r) {
  r.BEARER = "Bearer", r.POP = "pop", r.SSH = "ssh-cert";
})(Ve || (Ve = {}));
var Gi = {
  // Default time to throttle RequestThumbprint in seconds
  DEFAULT_THROTTLE_TIME_SECONDS: 60,
  // Default maximum time to throttle in seconds, overrides what the server sends back
  DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600,
  // Prefix for storing throttling entries
  THROTTLING_PREFIX: "throttling",
  // Value assigned to the x-ms-lib-capability header to indicate to the server the library supports throttling
  X_MS_LIB_CAPABILITY_VALUE: "retry-after, h429"
}, Mp = {
  INVALID_GRANT_ERROR: "invalid_grant",
  CLIENT_MISMATCH_ERROR: "client_mismatch"
}, Ss;
(function(r) {
  r.username = "username", r.password = "password";
})(Ss || (Ss = {}));
var Yo;
(function(r) {
  r[r.httpSuccess = 200] = "httpSuccess", r[r.httpBadRequest = 400] = "httpBadRequest";
})(Yo || (Yo = {}));
var qn;
(function(r) {
  r.FAILED_AUTO_DETECTION = "1", r.INTERNAL_CACHE = "2", r.ENVIRONMENT_VARIABLE = "3", r.IMDS = "4";
})(qn || (qn = {}));
var zi;
(function(r) {
  r.CONFIGURED_MATCHES_DETECTED = "1", r.CONFIGURED_NO_AUTO_DETECTION = "2", r.CONFIGURED_NOT_DETECTED = "3", r.AUTO_DETECTION_REQUESTED_SUCCESSFUL = "4", r.AUTO_DETECTION_REQUESTED_FAILED = "5";
})(zi || (zi = {}));
var Gn;
(function(r) {
  r.NO_CACHE_HIT = "0", r.FORCE_REFRESH = "1", r.NO_CACHED_ACCESS_TOKEN = "2", r.CACHED_ACCESS_TOKEN_EXPIRED = "3", r.REFRESH_CACHED_ACCESS_TOKEN = "4", r.CLAIMS_REQUESTED_CACHE_SKIPPED = "5";
})(Gn || (Gn = {}));
var au;
(function(r) {
  r.Jwt = "JWT", r.Jwk = "JWK", r.Pop = "pop";
})(au || (au = {}));
/*! @azure/msal-common v13.3.1 2023-10-27 */
var ss = {
  unexpectedError: {
    code: "unexpected_error",
    desc: "Unexpected error in authentication."
  },
  postRequestFailed: {
    code: "post_request_failed",
    desc: "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details."
  }
}, ue = (
  /** @class */
  function(r) {
    or(e, r);
    function e(t, n, o) {
      var a = this, s = n ? t + ": " + n : t;
      return a = r.call(this, s) || this, Object.setPrototypeOf(a, e.prototype), a.errorCode = t || O.EMPTY_STRING, a.errorMessage = n || O.EMPTY_STRING, a.subError = o || O.EMPTY_STRING, a.name = "AuthError", a;
    }
    return e.prototype.setCorrelationId = function(t) {
      this.correlationId = t;
    }, e.createUnexpectedError = function(t) {
      return new e(ss.unexpectedError.code, ss.unexpectedError.desc + ": " + t);
    }, e.createPostRequestFailed = function(t) {
      return new e(ss.postRequestFailed.code, ss.postRequestFailed.desc + ": " + t);
    }, e;
  }(Error)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Ts = {
  createNewGuid: function() {
    var r = "Crypto interface - createNewGuid() has not been implemented";
    throw ue.createUnexpectedError(r);
  },
  base64Decode: function() {
    var r = "Crypto interface - base64Decode() has not been implemented";
    throw ue.createUnexpectedError(r);
  },
  base64Encode: function() {
    var r = "Crypto interface - base64Encode() has not been implemented";
    throw ue.createUnexpectedError(r);
  },
  generatePkceCodes: function() {
    return _e(this, void 0, void 0, function() {
      var r;
      return Se(this, function(e) {
        throw r = "Crypto interface - generatePkceCodes() has not been implemented", ue.createUnexpectedError(r);
      });
    });
  },
  getPublicKeyThumbprint: function() {
    return _e(this, void 0, void 0, function() {
      var r;
      return Se(this, function(e) {
        throw r = "Crypto interface - getPublicKeyThumbprint() has not been implemented", ue.createUnexpectedError(r);
      });
    });
  },
  removeTokenBindingKey: function() {
    return _e(this, void 0, void 0, function() {
      var r;
      return Se(this, function(e) {
        throw r = "Crypto interface - removeTokenBindingKey() has not been implemented", ue.createUnexpectedError(r);
      });
    });
  },
  clearKeystore: function() {
    return _e(this, void 0, void 0, function() {
      var r;
      return Se(this, function(e) {
        throw r = "Crypto interface - clearKeystore() has not been implemented", ue.createUnexpectedError(r);
      });
    });
  },
  signJwt: function() {
    return _e(this, void 0, void 0, function() {
      var r;
      return Se(this, function(e) {
        throw r = "Crypto interface - signJwt() has not been implemented", ue.createUnexpectedError(r);
      });
    });
  },
  hashString: function() {
    return _e(this, void 0, void 0, function() {
      var r;
      return Se(this, function(e) {
        throw r = "Crypto interface - hashString() has not been implemented", ue.createUnexpectedError(r);
      });
    });
  }
};
/*! @azure/msal-common v13.3.1 2023-10-27 */
var j = {
  clientInfoDecodingError: {
    code: "client_info_decoding_error",
    desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause."
  },
  clientInfoEmptyError: {
    code: "client_info_empty_error",
    desc: "The client info was empty. Please review the trace to determine the root cause."
  },
  tokenParsingError: {
    code: "token_parsing_error",
    desc: "Token cannot be parsed. Please review stack trace to determine root cause."
  },
  nullOrEmptyToken: {
    code: "null_or_empty_token",
    desc: "The token is null or empty. Please review the trace to determine the root cause."
  },
  endpointResolutionError: {
    code: "endpoints_resolution_error",
    desc: "Error: could not resolve endpoints. Please check network and try again."
  },
  networkError: {
    code: "network_error",
    desc: "Network request failed. Please check network trace to determine root cause."
  },
  unableToGetOpenidConfigError: {
    code: "openid_config_error",
    desc: "Could not retrieve endpoints. Check your authority and verify the .well-known/openid-configuration endpoint returns the required endpoints."
  },
  hashNotDeserialized: {
    code: "hash_not_deserialized",
    desc: "The hash parameters could not be deserialized. Please review the trace to determine the root cause."
  },
  blankGuidGenerated: {
    code: "blank_guid_generated",
    desc: "The guid generated was blank. Please review the trace to determine the root cause."
  },
  invalidStateError: {
    code: "invalid_state",
    desc: "State was not the expected format. Please check the logs to determine whether the request was sent using ProtocolUtils.setRequestState()."
  },
  stateMismatchError: {
    code: "state_mismatch",
    desc: "State mismatch error. Please check your network. Continued requests may cause cache overflow."
  },
  stateNotFoundError: {
    code: "state_not_found",
    desc: "State not found"
  },
  nonceMismatchError: {
    code: "nonce_mismatch",
    desc: "Nonce mismatch error. This may be caused by a race condition in concurrent requests."
  },
  nonceNotFoundError: {
    code: "nonce_not_found",
    desc: "nonce not found"
  },
  authTimeNotFoundError: {
    code: "auth_time_not_found",
    desc: "Max Age was requested and the ID token is missing the auth_time variable. auth_time is an optional claim and is not enabled by default - it must be enabled. See https://aka.ms/msaljs/optional-claims for more information."
  },
  maxAgeTranspiredError: {
    code: "max_age_transpired",
    desc: "Max Age is set to 0, or too much time has elapsed since the last end-user authentication."
  },
  noTokensFoundError: {
    code: "no_tokens_found",
    desc: "No tokens were found for the given scopes, and no authorization code was passed to acquireToken. You must retrieve an authorization code before making a call to acquireToken()."
  },
  multipleMatchingTokens: {
    code: "multiple_matching_tokens",
    desc: "The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements such as authority or account."
  },
  multipleMatchingAccounts: {
    code: "multiple_matching_accounts",
    desc: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account"
  },
  multipleMatchingAppMetadata: {
    code: "multiple_matching_appMetadata",
    desc: "The cache contains multiple appMetadata satisfying the given parameters. Please pass more info to obtain the correct appMetadata"
  },
  tokenRequestCannotBeMade: {
    code: "request_cannot_be_made",
    desc: "Token request cannot be made without authorization code or refresh token."
  },
  appendEmptyScopeError: {
    code: "cannot_append_empty_scope",
    desc: "Cannot append null or empty scope to ScopeSet. Please check the stack trace for more info."
  },
  removeEmptyScopeError: {
    code: "cannot_remove_empty_scope",
    desc: "Cannot remove null or empty scope from ScopeSet. Please check the stack trace for more info."
  },
  appendScopeSetError: {
    code: "cannot_append_scopeset",
    desc: "Cannot append ScopeSet due to error."
  },
  emptyInputScopeSetError: {
    code: "empty_input_scopeset",
    desc: "Empty input ScopeSet cannot be processed."
  },
  DeviceCodePollingCancelled: {
    code: "device_code_polling_cancelled",
    desc: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true."
  },
  DeviceCodeExpired: {
    code: "device_code_expired",
    desc: "Device code is expired."
  },
  DeviceCodeUnknownError: {
    code: "device_code_unknown_error",
    desc: "Device code stopped polling for unknown reasons."
  },
  NoAccountInSilentRequest: {
    code: "no_account_in_silent_request",
    desc: "Please pass an account object, silent flow is not supported without account information"
  },
  invalidCacheRecord: {
    code: "invalid_cache_record",
    desc: "Cache record object was null or undefined."
  },
  invalidCacheEnvironment: {
    code: "invalid_cache_environment",
    desc: "Invalid environment when attempting to create cache entry"
  },
  noAccountFound: {
    code: "no_account_found",
    desc: "No account found in cache for given key."
  },
  CachePluginError: {
    code: "no cache plugin set on CacheManager",
    desc: "ICachePlugin needs to be set before using readFromStorage or writeFromStorage"
  },
  noCryptoObj: {
    code: "no_crypto_object",
    desc: "No crypto object detected. This is required for the following operation: "
  },
  invalidCacheType: {
    code: "invalid_cache_type",
    desc: "Invalid cache type"
  },
  unexpectedAccountType: {
    code: "unexpected_account_type",
    desc: "Unexpected account type."
  },
  unexpectedCredentialType: {
    code: "unexpected_credential_type",
    desc: "Unexpected credential type."
  },
  invalidAssertion: {
    code: "invalid_assertion",
    desc: "Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515"
  },
  invalidClientCredential: {
    code: "invalid_client_credential",
    desc: "Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential"
  },
  tokenRefreshRequired: {
    code: "token_refresh_required",
    desc: "Cannot return token from cache because it must be refreshed. This may be due to one of the following reasons: forceRefresh parameter is set to true, claims have been requested, there is no cached access token or it is expired."
  },
  userTimeoutReached: {
    code: "user_timeout_reached",
    desc: "User defined timeout for device code polling reached"
  },
  tokenClaimsRequired: {
    code: "token_claims_cnf_required_for_signedjwt",
    desc: "Cannot generate a POP jwt if the token_claims are not populated"
  },
  noAuthorizationCodeFromServer: {
    code: "authorization_code_missing_from_server_response",
    desc: "Server response does not contain an authorization code to proceed"
  },
  noAzureRegionDetected: {
    code: "no_azure_region_detected",
    desc: "No azure region was detected and no fallback was made available"
  },
  accessTokenEntityNullError: {
    code: "access_token_entity_null",
    desc: "Access token entity is null, please check logs and cache to ensure a valid access token is present."
  },
  bindingKeyNotRemovedError: {
    code: "binding_key_not_removed",
    desc: "Could not remove the credential's binding key from storage."
  },
  logoutNotSupported: {
    code: "end_session_endpoint_not_supported",
    desc: "Provided authority does not support logout."
  },
  keyIdMissing: {
    code: "key_id_missing",
    desc: "A keyId value is missing from the requested bound token's cache record and is required to match the token to it's stored binding key."
  },
  noNetworkConnectivity: {
    code: "no_network_connectivity",
    desc: "No network connectivity. Check your internet connection."
  },
  userCanceledError: {
    code: "user_canceled",
    desc: "User canceled the flow."
  }
}, ie = (
  /** @class */
  function(r) {
    or(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return o.name = "ClientAuthError", Object.setPrototypeOf(o, e.prototype), o;
    }
    return e.createClientInfoDecodingError = function(t) {
      return new e(j.clientInfoDecodingError.code, j.clientInfoDecodingError.desc + " Failed with error: " + t);
    }, e.createClientInfoEmptyError = function() {
      return new e(j.clientInfoEmptyError.code, "" + j.clientInfoEmptyError.desc);
    }, e.createTokenParsingError = function(t) {
      return new e(j.tokenParsingError.code, j.tokenParsingError.desc + " Failed with error: " + t);
    }, e.createTokenNullOrEmptyError = function(t) {
      return new e(j.nullOrEmptyToken.code, j.nullOrEmptyToken.desc + " Raw Token Value: " + t);
    }, e.createEndpointDiscoveryIncompleteError = function(t) {
      return new e(j.endpointResolutionError.code, j.endpointResolutionError.desc + " Detail: " + t);
    }, e.createNetworkError = function(t, n) {
      return new e(j.networkError.code, j.networkError.desc + " | Fetch client threw: " + n + " | Attempted to reach: " + t.split("?")[0]);
    }, e.createUnableToGetOpenidConfigError = function(t) {
      return new e(j.unableToGetOpenidConfigError.code, j.unableToGetOpenidConfigError.desc + " Attempted to retrieve endpoints from: " + t);
    }, e.createHashNotDeserializedError = function(t) {
      return new e(j.hashNotDeserialized.code, j.hashNotDeserialized.desc + " Given Object: " + t);
    }, e.createInvalidStateError = function(t, n) {
      return new e(j.invalidStateError.code, j.invalidStateError.desc + " Invalid State: " + t + ", Root Err: " + n);
    }, e.createStateMismatchError = function() {
      return new e(j.stateMismatchError.code, j.stateMismatchError.desc);
    }, e.createStateNotFoundError = function(t) {
      return new e(j.stateNotFoundError.code, j.stateNotFoundError.desc + ":  " + t);
    }, e.createNonceMismatchError = function() {
      return new e(j.nonceMismatchError.code, j.nonceMismatchError.desc);
    }, e.createAuthTimeNotFoundError = function() {
      return new e(j.authTimeNotFoundError.code, j.authTimeNotFoundError.desc);
    }, e.createMaxAgeTranspiredError = function() {
      return new e(j.maxAgeTranspiredError.code, j.maxAgeTranspiredError.desc);
    }, e.createNonceNotFoundError = function(t) {
      return new e(j.nonceNotFoundError.code, j.nonceNotFoundError.desc + ":  " + t);
    }, e.createMultipleMatchingTokensInCacheError = function() {
      return new e(j.multipleMatchingTokens.code, j.multipleMatchingTokens.desc + ".");
    }, e.createMultipleMatchingAccountsInCacheError = function() {
      return new e(j.multipleMatchingAccounts.code, j.multipleMatchingAccounts.desc);
    }, e.createMultipleMatchingAppMetadataInCacheError = function() {
      return new e(j.multipleMatchingAppMetadata.code, j.multipleMatchingAppMetadata.desc);
    }, e.createTokenRequestCannotBeMadeError = function() {
      return new e(j.tokenRequestCannotBeMade.code, j.tokenRequestCannotBeMade.desc);
    }, e.createAppendEmptyScopeToSetError = function(t) {
      return new e(j.appendEmptyScopeError.code, j.appendEmptyScopeError.desc + " Given Scope: " + t);
    }, e.createRemoveEmptyScopeFromSetError = function(t) {
      return new e(j.removeEmptyScopeError.code, j.removeEmptyScopeError.desc + " Given Scope: " + t);
    }, e.createAppendScopeSetError = function(t) {
      return new e(j.appendScopeSetError.code, j.appendScopeSetError.desc + " Detail Error: " + t);
    }, e.createEmptyInputScopeSetError = function() {
      return new e(j.emptyInputScopeSetError.code, "" + j.emptyInputScopeSetError.desc);
    }, e.createDeviceCodeCancelledError = function() {
      return new e(j.DeviceCodePollingCancelled.code, "" + j.DeviceCodePollingCancelled.desc);
    }, e.createDeviceCodeExpiredError = function() {
      return new e(j.DeviceCodeExpired.code, "" + j.DeviceCodeExpired.desc);
    }, e.createDeviceCodeUnknownError = function() {
      return new e(j.DeviceCodeUnknownError.code, "" + j.DeviceCodeUnknownError.desc);
    }, e.createNoAccountInSilentRequestError = function() {
      return new e(j.NoAccountInSilentRequest.code, "" + j.NoAccountInSilentRequest.desc);
    }, e.createNullOrUndefinedCacheRecord = function() {
      return new e(j.invalidCacheRecord.code, j.invalidCacheRecord.desc);
    }, e.createInvalidCacheEnvironmentError = function() {
      return new e(j.invalidCacheEnvironment.code, j.invalidCacheEnvironment.desc);
    }, e.createNoAccountFoundError = function() {
      return new e(j.noAccountFound.code, j.noAccountFound.desc);
    }, e.createCachePluginError = function() {
      return new e(j.CachePluginError.code, "" + j.CachePluginError.desc);
    }, e.createNoCryptoObjectError = function(t) {
      return new e(j.noCryptoObj.code, "" + j.noCryptoObj.desc + t);
    }, e.createInvalidCacheTypeError = function() {
      return new e(j.invalidCacheType.code, "" + j.invalidCacheType.desc);
    }, e.createUnexpectedAccountTypeError = function() {
      return new e(j.unexpectedAccountType.code, "" + j.unexpectedAccountType.desc);
    }, e.createUnexpectedCredentialTypeError = function() {
      return new e(j.unexpectedCredentialType.code, "" + j.unexpectedCredentialType.desc);
    }, e.createInvalidAssertionError = function() {
      return new e(j.invalidAssertion.code, "" + j.invalidAssertion.desc);
    }, e.createInvalidCredentialError = function() {
      return new e(j.invalidClientCredential.code, "" + j.invalidClientCredential.desc);
    }, e.createRefreshRequiredError = function() {
      return new e(j.tokenRefreshRequired.code, j.tokenRefreshRequired.desc);
    }, e.createUserTimeoutReachedError = function() {
      return new e(j.userTimeoutReached.code, j.userTimeoutReached.desc);
    }, e.createTokenClaimsRequiredError = function() {
      return new e(j.tokenClaimsRequired.code, j.tokenClaimsRequired.desc);
    }, e.createNoAuthCodeInServerResponseError = function() {
      return new e(j.noAuthorizationCodeFromServer.code, j.noAuthorizationCodeFromServer.desc);
    }, e.createBindingKeyNotRemovedError = function() {
      return new e(j.bindingKeyNotRemovedError.code, j.bindingKeyNotRemovedError.desc);
    }, e.createLogoutNotSupportedError = function() {
      return new e(j.logoutNotSupported.code, j.logoutNotSupported.desc);
    }, e.createKeyIdMissingError = function() {
      return new e(j.keyIdMissing.code, j.keyIdMissing.desc);
    }, e.createNoNetworkConnectivityError = function() {
      return new e(j.noNetworkConnectivity.code, j.noNetworkConnectivity.desc);
    }, e.createUserCanceledError = function() {
      return new e(j.userCanceledError.code, j.userCanceledError.desc);
    }, e;
  }(ue)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var re = (
  /** @class */
  function() {
    function r() {
    }
    return r.decodeAuthToken = function(e) {
      if (r.isEmpty(e))
        throw ie.createTokenNullOrEmptyError(e);
      var t = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/, n = t.exec(e);
      if (!n || n.length < 4)
        throw ie.createTokenParsingError("Given token is malformed: " + JSON.stringify(e));
      var o = {
        header: n[1],
        JWSPayload: n[2],
        JWSSig: n[3]
      };
      return o;
    }, r.isEmpty = function(e) {
      return typeof e > "u" || !e || e.length === 0;
    }, r.isEmptyObj = function(e) {
      if (e && !r.isEmpty(e))
        try {
          var t = JSON.parse(e);
          return Object.keys(t).length === 0;
        } catch {
        }
      return !0;
    }, r.startsWith = function(e, t) {
      return e.indexOf(t) === 0;
    }, r.endsWith = function(e, t) {
      return e.length >= t.length && e.lastIndexOf(t) === e.length - t.length;
    }, r.queryStringToObject = function(e) {
      var t = {}, n = e.split("&"), o = function(a) {
        return decodeURIComponent(a.replace(/\+/g, " "));
      };
      return n.forEach(function(a) {
        if (a.trim()) {
          var s = a.split(/=(.+)/g, 2), l = s[0], u = s[1];
          l && u && (t[o(l)] = o(u));
        }
      }), t;
    }, r.trimArrayEntries = function(e) {
      return e.map(function(t) {
        return t.trim();
      });
    }, r.removeEmptyStringsFromArray = function(e) {
      return e.filter(function(t) {
        return !r.isEmpty(t);
      });
    }, r.jsonParseHelper = function(e) {
      try {
        return JSON.parse(e);
      } catch {
        return null;
      }
    }, r.matchPattern = function(e, t) {
      var n = new RegExp(e.replace(/\\/g, "\\\\").replace(/\*/g, "[^ ]*").replace(/\?/g, "\\?"));
      return n.test(t);
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var st;
(function(r) {
  r[r.Error = 0] = "Error", r[r.Warning = 1] = "Warning", r[r.Info = 2] = "Info", r[r.Verbose = 3] = "Verbose", r[r.Trace = 4] = "Trace";
})(st || (st = {}));
var Lu = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.level = st.Info;
      var o = function() {
      }, a = e || r.createDefaultLoggerOptions();
      this.localCallback = a.loggerCallback || o, this.piiLoggingEnabled = a.piiLoggingEnabled || !1, this.level = typeof a.logLevel == "number" ? a.logLevel : st.Info, this.correlationId = a.correlationId || O.EMPTY_STRING, this.packageName = t || O.EMPTY_STRING, this.packageVersion = n || O.EMPTY_STRING;
    }
    return r.createDefaultLoggerOptions = function() {
      return {
        loggerCallback: function() {
        },
        piiLoggingEnabled: !1,
        logLevel: st.Info
      };
    }, r.prototype.clone = function(e, t, n) {
      return new r({ loggerCallback: this.localCallback, piiLoggingEnabled: this.piiLoggingEnabled, logLevel: this.level, correlationId: n || this.correlationId }, e, t);
    }, r.prototype.logMessage = function(e, t) {
      if (!(t.logLevel > this.level || !this.piiLoggingEnabled && t.containsPii)) {
        var n = (/* @__PURE__ */ new Date()).toUTCString(), o;
        re.isEmpty(t.correlationId) ? re.isEmpty(this.correlationId) ? o = "[" + n + "]" : o = "[" + n + "] : [" + this.correlationId + "]" : o = "[" + n + "] : [" + t.correlationId + "]";
        var a = o + " : " + this.packageName + "@" + this.packageVersion + " : " + st[t.logLevel] + " - " + e;
        this.executeCallback(t.logLevel, a, t.containsPii || !1);
      }
    }, r.prototype.executeCallback = function(e, t, n) {
      this.localCallback && this.localCallback(e, t, n);
    }, r.prototype.error = function(e, t) {
      this.logMessage(e, {
        logLevel: st.Error,
        containsPii: !1,
        correlationId: t || O.EMPTY_STRING
      });
    }, r.prototype.errorPii = function(e, t) {
      this.logMessage(e, {
        logLevel: st.Error,
        containsPii: !0,
        correlationId: t || O.EMPTY_STRING
      });
    }, r.prototype.warning = function(e, t) {
      this.logMessage(e, {
        logLevel: st.Warning,
        containsPii: !1,
        correlationId: t || O.EMPTY_STRING
      });
    }, r.prototype.warningPii = function(e, t) {
      this.logMessage(e, {
        logLevel: st.Warning,
        containsPii: !0,
        correlationId: t || O.EMPTY_STRING
      });
    }, r.prototype.info = function(e, t) {
      this.logMessage(e, {
        logLevel: st.Info,
        containsPii: !1,
        correlationId: t || O.EMPTY_STRING
      });
    }, r.prototype.infoPii = function(e, t) {
      this.logMessage(e, {
        logLevel: st.Info,
        containsPii: !0,
        correlationId: t || O.EMPTY_STRING
      });
    }, r.prototype.verbose = function(e, t) {
      this.logMessage(e, {
        logLevel: st.Verbose,
        containsPii: !1,
        correlationId: t || O.EMPTY_STRING
      });
    }, r.prototype.verbosePii = function(e, t) {
      this.logMessage(e, {
        logLevel: st.Verbose,
        containsPii: !0,
        correlationId: t || O.EMPTY_STRING
      });
    }, r.prototype.trace = function(e, t) {
      this.logMessage(e, {
        logLevel: st.Trace,
        containsPii: !1,
        correlationId: t || O.EMPTY_STRING
      });
    }, r.prototype.tracePii = function(e, t) {
      this.logMessage(e, {
        logLevel: st.Trace,
        containsPii: !0,
        correlationId: t || O.EMPTY_STRING
      });
    }, r.prototype.isPiiLoggingEnabled = function() {
      return this.piiLoggingEnabled || !1;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var om = "@azure/msal-common", Du = "13.3.1";
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Qi;
(function(r) {
  r[r.None = 0] = "None", r.AzurePublic = "https://login.microsoftonline.com", r.AzurePpe = "https://login.windows-ppe.net", r.AzureChina = "https://login.chinacloudapi.cn", r.AzureGermany = "https://login.microsoftonline.de", r.AzureUsGovernment = "https://login.microsoftonline.us";
})(Qi || (Qi = {}));
/*! @azure/msal-common v13.3.1 2023-10-27 */
var be = {
  redirectUriNotSet: {
    code: "redirect_uri_empty",
    desc: "A redirect URI is required for all calls, and none has been set."
  },
  postLogoutUriNotSet: {
    code: "post_logout_uri_empty",
    desc: "A post logout redirect has not been set."
  },
  claimsRequestParsingError: {
    code: "claims_request_parsing_error",
    desc: "Could not parse the given claims request object."
  },
  authorityUriInsecure: {
    code: "authority_uri_insecure",
    desc: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options"
  },
  urlParseError: {
    code: "url_parse_error",
    desc: "URL could not be parsed into appropriate segments."
  },
  urlEmptyError: {
    code: "empty_url_error",
    desc: "URL was empty or null."
  },
  emptyScopesError: {
    code: "empty_input_scopes_error",
    desc: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token."
  },
  nonArrayScopesError: {
    code: "nonarray_input_scopes_error",
    desc: "Scopes cannot be passed as non-array."
  },
  clientIdSingleScopeError: {
    code: "clientid_input_scopes_error",
    desc: "Client ID can only be provided as a single scope."
  },
  invalidPrompt: {
    code: "invalid_prompt_value",
    desc: "Supported prompt values are 'login', 'select_account', 'consent', 'create', 'none' and 'no_session'.  Please see here for valid configuration options: https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_common.html#commonauthorizationurlrequest"
  },
  invalidClaimsRequest: {
    code: "invalid_claims",
    desc: "Given claims parameter must be a stringified JSON object."
  },
  tokenRequestEmptyError: {
    code: "token_request_empty",
    desc: "Token request was empty and not found in cache."
  },
  logoutRequestEmptyError: {
    code: "logout_request_empty",
    desc: "The logout request was null or undefined."
  },
  invalidCodeChallengeMethod: {
    code: "invalid_code_challenge_method",
    desc: 'code_challenge_method passed is invalid. Valid values are "plain" and "S256".'
  },
  invalidCodeChallengeParams: {
    code: "pkce_params_missing",
    desc: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request"
  },
  invalidCloudDiscoveryMetadata: {
    code: "invalid_cloud_discovery_metadata",
    desc: "Invalid cloudDiscoveryMetadata provided. Must be a stringified JSON object containing tenant_discovery_endpoint and metadata fields"
  },
  invalidAuthorityMetadata: {
    code: "invalid_authority_metadata",
    desc: "Invalid authorityMetadata provided. Must by a stringified JSON object containing authorization_endpoint, token_endpoint, issuer fields."
  },
  untrustedAuthority: {
    code: "untrusted_authority",
    desc: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter."
  },
  invalidAzureCloudInstance: {
    code: "invalid_azure_cloud_instance",
    desc: "Invalid AzureCloudInstance provided. Please refer MSAL JS docs: aks.ms/msaljs/azure_cloud_instance for valid values"
  },
  missingSshJwk: {
    code: "missing_ssh_jwk",
    desc: "Missing sshJwk in SSH certificate request. A stringified JSON Web Key is required when using the SSH authentication scheme."
  },
  missingSshKid: {
    code: "missing_ssh_kid",
    desc: "Missing sshKid in SSH certificate request. A string that uniquely identifies the public SSH key is required when using the SSH authentication scheme."
  },
  missingNonceAuthenticationHeader: {
    code: "missing_nonce_authentication_header",
    desc: "Unable to find an authentication header containing server nonce. Either the Authentication-Info or WWW-Authenticate headers must be present in order to obtain a server nonce."
  },
  invalidAuthenticationHeader: {
    code: "invalid_authentication_header",
    desc: "Invalid authentication header provided"
  },
  authorityMismatch: {
    code: "authority_mismatch",
    desc: "Authority mismatch error. Authority provided in login request or PublicClientApplication config does not match the environment of the provided account. Please use a matching account or make an interactive request to login to this authority."
  }
}, et = (
  /** @class */
  function(r) {
    or(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return o.name = "ClientConfigurationError", Object.setPrototypeOf(o, e.prototype), o;
    }
    return e.createRedirectUriEmptyError = function() {
      return new e(be.redirectUriNotSet.code, be.redirectUriNotSet.desc);
    }, e.createPostLogoutRedirectUriEmptyError = function() {
      return new e(be.postLogoutUriNotSet.code, be.postLogoutUriNotSet.desc);
    }, e.createClaimsRequestParsingError = function(t) {
      return new e(be.claimsRequestParsingError.code, be.claimsRequestParsingError.desc + " Given value: " + t);
    }, e.createInsecureAuthorityUriError = function(t) {
      return new e(be.authorityUriInsecure.code, be.authorityUriInsecure.desc + " Given URI: " + t);
    }, e.createUrlParseError = function(t) {
      return new e(be.urlParseError.code, be.urlParseError.desc + " Given Error: " + t);
    }, e.createUrlEmptyError = function() {
      return new e(be.urlEmptyError.code, be.urlEmptyError.desc);
    }, e.createEmptyScopesArrayError = function() {
      return new e(be.emptyScopesError.code, "" + be.emptyScopesError.desc);
    }, e.createClientIdSingleScopeError = function(t) {
      return new e(be.clientIdSingleScopeError.code, be.clientIdSingleScopeError.desc + " Given Scopes: " + t);
    }, e.createInvalidPromptError = function(t) {
      return new e(be.invalidPrompt.code, be.invalidPrompt.desc + " Given value: " + t);
    }, e.createInvalidClaimsRequestError = function() {
      return new e(be.invalidClaimsRequest.code, be.invalidClaimsRequest.desc);
    }, e.createEmptyLogoutRequestError = function() {
      return new e(be.logoutRequestEmptyError.code, be.logoutRequestEmptyError.desc);
    }, e.createEmptyTokenRequestError = function() {
      return new e(be.tokenRequestEmptyError.code, be.tokenRequestEmptyError.desc);
    }, e.createInvalidCodeChallengeMethodError = function() {
      return new e(be.invalidCodeChallengeMethod.code, be.invalidCodeChallengeMethod.desc);
    }, e.createInvalidCodeChallengeParamsError = function() {
      return new e(be.invalidCodeChallengeParams.code, be.invalidCodeChallengeParams.desc);
    }, e.createInvalidCloudDiscoveryMetadataError = function() {
      return new e(be.invalidCloudDiscoveryMetadata.code, be.invalidCloudDiscoveryMetadata.desc);
    }, e.createInvalidAuthorityMetadataError = function() {
      return new e(be.invalidAuthorityMetadata.code, be.invalidAuthorityMetadata.desc);
    }, e.createUntrustedAuthorityError = function() {
      return new e(be.untrustedAuthority.code, be.untrustedAuthority.desc);
    }, e.createInvalidAzureCloudInstanceError = function() {
      return new e(be.invalidAzureCloudInstance.code, be.invalidAzureCloudInstance.desc);
    }, e.createMissingSshJwkError = function() {
      return new e(be.missingSshJwk.code, be.missingSshJwk.desc);
    }, e.createMissingSshKidError = function() {
      return new e(be.missingSshKid.code, be.missingSshKid.desc);
    }, e.createMissingNonceAuthenticationHeadersError = function() {
      return new e(be.missingNonceAuthenticationHeader.code, be.missingNonceAuthenticationHeader.desc);
    }, e.createInvalidAuthenticationHeaderError = function(t, n) {
      return new e(be.invalidAuthenticationHeader.code, be.invalidAuthenticationHeader.desc + ". Invalid header: " + t + ". Details: " + n);
    }, e.createAuthorityMismatchError = function() {
      return new e(be.authorityMismatch.code, be.authorityMismatch.desc);
    }, e;
  }(ie)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Dt = (
  /** @class */
  function() {
    function r(e) {
      var t = this, n = e ? re.trimArrayEntries(Qs(e)) : [], o = n ? re.removeEmptyStringsFromArray(n) : [];
      this.validateInputScopes(o), this.scopes = /* @__PURE__ */ new Set(), o.forEach(function(a) {
        return t.scopes.add(a);
      });
    }
    return r.fromString = function(e) {
      var t = e || O.EMPTY_STRING, n = t.split(" ");
      return new r(n);
    }, r.createSearchScopes = function(e) {
      var t = new r(e);
      return t.containsOnlyOIDCScopes() ? t.removeScope(O.OFFLINE_ACCESS_SCOPE) : t.removeOIDCScopes(), t;
    }, r.prototype.validateInputScopes = function(e) {
      if (!e || e.length < 1)
        throw et.createEmptyScopesArrayError();
    }, r.prototype.containsScope = function(e) {
      var t = this.printScopesLowerCase().split(" "), n = new r(t);
      return re.isEmpty(e) ? !1 : n.scopes.has(e.toLowerCase());
    }, r.prototype.containsScopeSet = function(e) {
      var t = this;
      return !e || e.scopes.size <= 0 ? !1 : this.scopes.size >= e.scopes.size && e.asArray().every(function(n) {
        return t.containsScope(n);
      });
    }, r.prototype.containsOnlyOIDCScopes = function() {
      var e = this, t = 0;
      return Np.forEach(function(n) {
        e.containsScope(n) && (t += 1);
      }), this.scopes.size === t;
    }, r.prototype.appendScope = function(e) {
      re.isEmpty(e) || this.scopes.add(e.trim());
    }, r.prototype.appendScopes = function(e) {
      var t = this;
      try {
        e.forEach(function(n) {
          return t.appendScope(n);
        });
      } catch (n) {
        throw ie.createAppendScopeSetError(n);
      }
    }, r.prototype.removeScope = function(e) {
      if (re.isEmpty(e))
        throw ie.createRemoveEmptyScopeFromSetError(e);
      this.scopes.delete(e.trim());
    }, r.prototype.removeOIDCScopes = function() {
      var e = this;
      Np.forEach(function(t) {
        e.scopes.delete(t);
      });
    }, r.prototype.unionScopeSets = function(e) {
      if (!e)
        throw ie.createEmptyInputScopeSetError();
      var t = /* @__PURE__ */ new Set();
      return e.scopes.forEach(function(n) {
        return t.add(n.toLowerCase());
      }), this.scopes.forEach(function(n) {
        return t.add(n.toLowerCase());
      }), t;
    }, r.prototype.intersectingScopeSets = function(e) {
      if (!e)
        throw ie.createEmptyInputScopeSetError();
      e.containsOnlyOIDCScopes() || e.removeOIDCScopes();
      var t = this.unionScopeSets(e), n = e.getScopeCount(), o = this.getScopeCount(), a = t.size;
      return a < o + n;
    }, r.prototype.getScopeCount = function() {
      return this.scopes.size;
    }, r.prototype.asArray = function() {
      var e = [];
      return this.scopes.forEach(function(t) {
        return e.push(t);
      }), e;
    }, r.prototype.printScopes = function() {
      if (this.scopes) {
        var e = this.asArray();
        return e.join(" ");
      }
      return O.EMPTY_STRING;
    }, r.prototype.printScopesLowerCase = function() {
      return this.printScopes().toLowerCase();
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
function Is(r, e) {
  if (re.isEmpty(r))
    throw ie.createClientInfoEmptyError();
  try {
    var t = e.base64Decode(r);
    return JSON.parse(t);
  } catch (n) {
    throw ie.createClientInfoDecodingError(n.message);
  }
}
function Qo(r) {
  if (re.isEmpty(r))
    throw ie.createClientInfoDecodingError("Home account ID was empty.");
  var e = r.split(Ct.CLIENT_INFO_SEPARATOR, 2);
  return {
    uid: e[0],
    utid: e.length < 2 ? O.EMPTY_STRING : e[1]
  };
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Vt;
(function(r) {
  r[r.Default = 0] = "Default", r[r.Adfs = 1] = "Adfs", r[r.Dsts = 2] = "Dsts", r[r.Ciam = 3] = "Ciam";
})(Vt || (Vt = {}));
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Rt = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.generateAccountId = function() {
      var e = [this.homeAccountId, this.environment];
      return e.join(Ct.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.prototype.generateAccountKey = function() {
      return r.generateAccountCacheKey({
        homeAccountId: this.homeAccountId,
        environment: this.environment,
        tenantId: this.realm,
        username: this.username,
        localAccountId: this.localAccountId
      });
    }, r.prototype.generateType = function() {
      switch (this.authorityType) {
        case bn.ADFS_ACCOUNT_TYPE:
          return _n.ADFS;
        case bn.MSAV1_ACCOUNT_TYPE:
          return _n.MSA;
        case bn.MSSTS_ACCOUNT_TYPE:
          return _n.MSSTS;
        case bn.GENERIC_ACCOUNT_TYPE:
          return _n.GENERIC;
        default:
          throw ie.createUnexpectedAccountTypeError();
      }
    }, r.prototype.getAccountInfo = function() {
      return {
        homeAccountId: this.homeAccountId,
        environment: this.environment,
        tenantId: this.realm,
        username: this.username,
        localAccountId: this.localAccountId,
        name: this.name,
        idTokenClaims: this.idTokenClaims,
        nativeAccountId: this.nativeAccountId
      };
    }, r.generateAccountCacheKey = function(e) {
      var t = [
        e.homeAccountId,
        e.environment || O.EMPTY_STRING,
        e.tenantId || O.EMPTY_STRING
      ];
      return t.join(Ct.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.createAccount = function(e, t, n, o, a, s, l, u) {
      var f, h, p, g, v, C, E = new r();
      E.authorityType = bn.MSSTS_ACCOUNT_TYPE, E.clientInfo = e, E.homeAccountId = t, E.nativeAccountId = u;
      var _ = l || o && o.getPreferredCache();
      if (!_)
        throw ie.createInvalidCacheEnvironmentError();
      if (E.environment = _, E.realm = ((f = n == null ? void 0 : n.claims) === null || f === void 0 ? void 0 : f.tid) || O.EMPTY_STRING, n) {
        E.idTokenClaims = n.claims, E.localAccountId = ((h = n == null ? void 0 : n.claims) === null || h === void 0 ? void 0 : h.oid) || ((p = n == null ? void 0 : n.claims) === null || p === void 0 ? void 0 : p.sub) || O.EMPTY_STRING;
        var I = (g = n == null ? void 0 : n.claims) === null || g === void 0 ? void 0 : g.preferred_username, A = !((v = n == null ? void 0 : n.claims) === null || v === void 0) && v.emails ? n.claims.emails[0] : null;
        E.username = I || A || O.EMPTY_STRING, E.name = (C = n == null ? void 0 : n.claims) === null || C === void 0 ? void 0 : C.name;
      }
      return E.cloudGraphHostName = a, E.msGraphHost = s, E;
    }, r.createGenericAccount = function(e, t, n, o, a, s) {
      var l, u, f, h, p = new r();
      p.authorityType = n && n.authorityType === Vt.Adfs ? bn.ADFS_ACCOUNT_TYPE : bn.GENERIC_ACCOUNT_TYPE, p.homeAccountId = e, p.realm = O.EMPTY_STRING;
      var g = s || n && n.getPreferredCache();
      if (!g)
        throw ie.createInvalidCacheEnvironmentError();
      return t && (p.localAccountId = ((l = t == null ? void 0 : t.claims) === null || l === void 0 ? void 0 : l.oid) || ((u = t == null ? void 0 : t.claims) === null || u === void 0 ? void 0 : u.sub) || O.EMPTY_STRING, p.username = ((f = t == null ? void 0 : t.claims) === null || f === void 0 ? void 0 : f.upn) || O.EMPTY_STRING, p.name = ((h = t == null ? void 0 : t.claims) === null || h === void 0 ? void 0 : h.name) || O.EMPTY_STRING, p.idTokenClaims = t == null ? void 0 : t.claims), p.environment = g, p.cloudGraphHostName = o, p.msGraphHost = a, p;
    }, r.generateHomeAccountId = function(e, t, n, o, a) {
      var s, l = !((s = a == null ? void 0 : a.claims) === null || s === void 0) && s.sub ? a.claims.sub : O.EMPTY_STRING;
      if (t === Vt.Adfs || t === Vt.Dsts)
        return l;
      if (e)
        try {
          var u = Is(e, o);
          if (!re.isEmpty(u.uid) && !re.isEmpty(u.utid))
            return "" + u.uid + Ct.CLIENT_INFO_SEPARATOR + u.utid;
        } catch {
        }
      return n.verbose("No client info in response"), l;
    }, r.isAccountEntity = function(e) {
      return e ? e.hasOwnProperty("homeAccountId") && e.hasOwnProperty("environment") && e.hasOwnProperty("realm") && e.hasOwnProperty("localAccountId") && e.hasOwnProperty("username") && e.hasOwnProperty("authorityType") : !1;
    }, r.accountInfoIsEqual = function(e, t, n) {
      if (!e || !t)
        return !1;
      var o = !0;
      if (n) {
        var a = e.idTokenClaims || {}, s = t.idTokenClaims || {};
        o = a.iat === s.iat && a.nonce === s.nonce;
      }
      return e.homeAccountId === t.homeAccountId && e.localAccountId === t.localAccountId && e.username === t.username && e.tenantId === t.tenantId && e.environment === t.environment && e.nativeAccountId === t.nativeAccountId && o;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var sn = (
  /** @class */
  function() {
    function r(e, t) {
      if (re.isEmpty(e))
        throw ie.createTokenNullOrEmptyError(e);
      this.rawToken = e, this.claims = r.extractTokenClaims(e, t);
    }
    return r.extractTokenClaims = function(e, t) {
      var n = re.decodeAuthToken(e);
      try {
        var o = n.JWSPayload, a = t.base64Decode(o);
        return JSON.parse(a);
      } catch (s) {
        throw ie.createTokenParsingError(s);
      }
    }, r.checkMaxAge = function(e, t) {
      var n = 3e5;
      if (t === 0 || Date.now() - n > e + t)
        throw ie.createMaxAgeTranspiredError();
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var er = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.clientId = e, this.cryptoImpl = t, this.commonLogger = n.clone(om, Du);
    }
    return r.prototype.getAllAccounts = function() {
      var e = this, t = this.getAccountKeys();
      if (t.length < 1)
        return [];
      var n = t.reduce(function(a, s) {
        var l = e.getAccount(s);
        return l && a.push(l), a;
      }, []);
      if (n.length < 1)
        return [];
      var o = n.map(function(a) {
        return e.getAccountInfoFromEntity(a);
      });
      return o;
    }, r.prototype.getAccountInfoFilteredBy = function(e) {
      var t = this.getAccountsFilteredBy(e);
      return t.length > 0 ? this.getAccountInfoFromEntity(t[0]) : null;
    }, r.prototype.getAccountInfoFromEntity = function(e) {
      var t = e.getAccountInfo(), n = this.getIdToken(t);
      return n && (t.idToken = n.secret, t.idTokenClaims = new sn(n.secret, this.cryptoImpl).claims), t;
    }, r.prototype.saveCacheRecord = function(e) {
      return _e(this, void 0, void 0, function() {
        return Se(this, function(t) {
          switch (t.label) {
            case 0:
              if (!e)
                throw ie.createNullOrUndefinedCacheRecord();
              return e.account && this.setAccount(e.account), e.idToken && this.setIdTokenCredential(e.idToken), e.accessToken ? [4, this.saveAccessToken(e.accessToken)] : [3, 2];
            case 1:
              t.sent(), t.label = 2;
            case 2:
              return e.refreshToken && this.setRefreshTokenCredential(e.refreshToken), e.appMetadata && this.setAppMetadata(e.appMetadata), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.saveAccessToken = function(e) {
      return _e(this, void 0, void 0, function() {
        var t, n, o, a, s = this;
        return Se(this, function(l) {
          switch (l.label) {
            case 0:
              return t = {
                clientId: e.clientId,
                credentialType: e.credentialType,
                environment: e.environment,
                homeAccountId: e.homeAccountId,
                realm: e.realm,
                tokenType: e.tokenType,
                requestedClaimsHash: e.requestedClaimsHash
              }, n = this.getTokenKeys(), o = Dt.fromString(e.target), a = [], n.accessToken.forEach(function(u) {
                if (s.accessTokenKeyMatchesFilter(u, t, !1)) {
                  var f = s.getAccessTokenCredential(u);
                  if (f && s.credentialMatchesFilter(f, t)) {
                    var h = Dt.fromString(f.target);
                    h.intersectingScopeSets(o) && a.push(s.removeAccessToken(u));
                  }
                }
              }), [4, Promise.all(a)];
            case 1:
              return l.sent(), this.setAccessTokenCredential(e), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.getAccountsFilteredBy = function(e) {
      var t = this, n = this.getAccountKeys(), o = [];
      return n.forEach(function(a) {
        if (t.isAccountKey(a, e.homeAccountId, e.realm)) {
          var s = t.getAccount(a);
          s && (e.homeAccountId && !t.matchHomeAccountId(s, e.homeAccountId) || e.localAccountId && !t.matchLocalAccountId(s, e.localAccountId) || e.username && !t.matchUsername(s, e.username) || e.environment && !t.matchEnvironment(s, e.environment) || e.realm && !t.matchRealm(s, e.realm) || e.nativeAccountId && !t.matchNativeAccountId(s, e.nativeAccountId) || o.push(s));
        }
      }), o;
    }, r.prototype.isAccountKey = function(e, t, n) {
      return !(e.split(Ct.CACHE_KEY_SEPARATOR).length < 3 || t && !e.toLowerCase().includes(t.toLowerCase()) || n && !e.toLowerCase().includes(n.toLowerCase()));
    }, r.prototype.isCredentialKey = function(e) {
      if (e.split(Ct.CACHE_KEY_SEPARATOR).length < 6)
        return !1;
      var t = e.toLowerCase();
      if (t.indexOf(he.ID_TOKEN.toLowerCase()) === -1 && t.indexOf(he.ACCESS_TOKEN.toLowerCase()) === -1 && t.indexOf(he.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase()) === -1 && t.indexOf(he.REFRESH_TOKEN.toLowerCase()) === -1)
        return !1;
      if (t.indexOf(he.REFRESH_TOKEN.toLowerCase()) > -1) {
        var n = "" + he.REFRESH_TOKEN + Ct.CACHE_KEY_SEPARATOR + this.clientId + Ct.CACHE_KEY_SEPARATOR, o = "" + he.REFRESH_TOKEN + Ct.CACHE_KEY_SEPARATOR + qi + Ct.CACHE_KEY_SEPARATOR;
        if (t.indexOf(n.toLowerCase()) === -1 && t.indexOf(o.toLowerCase()) === -1)
          return !1;
      } else if (t.indexOf(this.clientId.toLowerCase()) === -1)
        return !1;
      return !0;
    }, r.prototype.credentialMatchesFilter = function(e, t) {
      return !(t.clientId && !this.matchClientId(e, t.clientId) || t.userAssertionHash && !this.matchUserAssertionHash(e, t.userAssertionHash) || typeof t.homeAccountId == "string" && !this.matchHomeAccountId(e, t.homeAccountId) || t.environment && !this.matchEnvironment(e, t.environment) || t.realm && !this.matchRealm(e, t.realm) || t.credentialType && !this.matchCredentialType(e, t.credentialType) || t.familyId && !this.matchFamilyId(e, t.familyId) || t.target && !this.matchTarget(e, t.target) || (t.requestedClaimsHash || e.requestedClaimsHash) && e.requestedClaimsHash !== t.requestedClaimsHash || e.credentialType === he.ACCESS_TOKEN_WITH_AUTH_SCHEME && (t.tokenType && !this.matchTokenType(e, t.tokenType) || t.tokenType === Ve.SSH && t.keyId && !this.matchKeyId(e, t.keyId)));
    }, r.prototype.getAppMetadataFilteredBy = function(e) {
      return this.getAppMetadataFilteredByInternal(e.environment, e.clientId);
    }, r.prototype.getAppMetadataFilteredByInternal = function(e, t) {
      var n = this, o = this.getKeys(), a = {};
      return o.forEach(function(s) {
        if (n.isAppMetadata(s)) {
          var l = n.getAppMetadata(s);
          l && (e && !n.matchEnvironment(l, e) || t && !n.matchClientId(l, t) || (a[s] = l));
        }
      }), a;
    }, r.prototype.getAuthorityMetadataByAlias = function(e) {
      var t = this, n = this.getAuthorityMetadataKeys(), o = null;
      return n.forEach(function(a) {
        if (!(!t.isAuthorityMetadata(a) || a.indexOf(t.clientId) === -1)) {
          var s = t.getAuthorityMetadata(a);
          s && s.aliases.indexOf(e) !== -1 && (o = s);
        }
      }), o;
    }, r.prototype.removeAllAccounts = function() {
      return _e(this, void 0, void 0, function() {
        var e, t, n = this;
        return Se(this, function(o) {
          switch (o.label) {
            case 0:
              return e = this.getAccountKeys(), t = [], e.forEach(function(a) {
                t.push(n.removeAccount(a));
              }), [4, Promise.all(t)];
            case 1:
              return o.sent(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.removeAccount = function(e) {
      return _e(this, void 0, void 0, function() {
        var t;
        return Se(this, function(n) {
          switch (n.label) {
            case 0:
              if (t = this.getAccount(e), !t)
                throw ie.createNoAccountFoundError();
              return [4, this.removeAccountContext(t)];
            case 1:
              return n.sent(), this.removeItem(e), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.removeAccountContext = function(e) {
      return _e(this, void 0, void 0, function() {
        var t, n, o, a = this;
        return Se(this, function(s) {
          switch (s.label) {
            case 0:
              return t = this.getTokenKeys(), n = e.generateAccountId(), o = [], t.idToken.forEach(function(l) {
                l.indexOf(n) === 0 && a.removeIdToken(l);
              }), t.accessToken.forEach(function(l) {
                l.indexOf(n) === 0 && o.push(a.removeAccessToken(l));
              }), t.refreshToken.forEach(function(l) {
                l.indexOf(n) === 0 && a.removeRefreshToken(l);
              }), [4, Promise.all(o)];
            case 1:
              return s.sent(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.removeAccessToken = function(e) {
      return _e(this, void 0, void 0, function() {
        var t, n, o;
        return Se(this, function(a) {
          switch (a.label) {
            case 0:
              if (t = this.getAccessTokenCredential(e), !t)
                return [
                  2
                  /*return*/
                ];
              if (t.credentialType.toLowerCase() !== he.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase())
                return [3, 4];
              if (t.tokenType !== Ve.POP)
                return [3, 4];
              if (n = t, o = n.keyId, !o)
                return [3, 4];
              a.label = 1;
            case 1:
              return a.trys.push([1, 3, , 4]), [4, this.cryptoImpl.removeTokenBindingKey(o)];
            case 2:
              return a.sent(), [3, 4];
            case 3:
              throw a.sent(), ie.createBindingKeyNotRemovedError();
            case 4:
              return [2, this.removeItem(e)];
          }
        });
      });
    }, r.prototype.removeAppMetadata = function() {
      var e = this, t = this.getKeys();
      return t.forEach(function(n) {
        e.isAppMetadata(n) && e.removeItem(n);
      }), !0;
    }, r.prototype.readCacheRecord = function(e, t, n) {
      var o = this.getTokenKeys(), a = this.readAccountFromCache(e), s = this.getIdToken(e, o), l = this.getAccessToken(e, t, o), u = this.getRefreshToken(e, !1, o), f = this.readAppMetadataFromCache(n);
      return a && s && (a.idTokenClaims = new sn(s.secret, this.cryptoImpl).claims), {
        account: a,
        idToken: s,
        accessToken: l,
        refreshToken: u,
        appMetadata: f
      };
    }, r.prototype.readAccountFromCache = function(e) {
      var t = Rt.generateAccountCacheKey(e);
      return this.getAccount(t);
    }, r.prototype.getIdToken = function(e, t) {
      var n = this;
      this.commonLogger.trace("CacheManager - getIdToken called");
      var o = {
        homeAccountId: e.homeAccountId,
        environment: e.environment,
        credentialType: he.ID_TOKEN,
        clientId: this.clientId,
        realm: e.tenantId
      }, a = this.getIdTokensByFilter(o, t), s = a.length;
      return s < 1 ? (this.commonLogger.info("CacheManager:getIdToken - No token found"), null) : s > 1 ? (this.commonLogger.info("CacheManager:getIdToken - Multiple id tokens found, clearing them"), a.forEach(function(l) {
        n.removeIdToken(l.generateCredentialKey());
      }), null) : (this.commonLogger.info("CacheManager:getIdToken - Returning id token"), a[0]);
    }, r.prototype.getIdTokensByFilter = function(e, t) {
      var n = this, o = t && t.idToken || this.getTokenKeys().idToken, a = [];
      return o.forEach(function(s) {
        if (n.idTokenKeyMatchesFilter(s, $e({ clientId: n.clientId }, e))) {
          var l = n.getIdTokenCredential(s);
          l && n.credentialMatchesFilter(l, e) && a.push(l);
        }
      }), a;
    }, r.prototype.idTokenKeyMatchesFilter = function(e, t) {
      var n = e.toLowerCase();
      return !(t.clientId && n.indexOf(t.clientId.toLowerCase()) === -1 || t.homeAccountId && n.indexOf(t.homeAccountId.toLowerCase()) === -1);
    }, r.prototype.removeIdToken = function(e) {
      this.removeItem(e);
    }, r.prototype.removeRefreshToken = function(e) {
      this.removeItem(e);
    }, r.prototype.getAccessToken = function(e, t, n) {
      var o = this;
      this.commonLogger.trace("CacheManager - getAccessToken called");
      var a = Dt.createSearchScopes(t.scopes), s = t.authenticationScheme || Ve.BEARER, l = s && s.toLowerCase() !== Ve.BEARER.toLowerCase() ? he.ACCESS_TOKEN_WITH_AUTH_SCHEME : he.ACCESS_TOKEN, u = {
        homeAccountId: e.homeAccountId,
        environment: e.environment,
        credentialType: l,
        clientId: this.clientId,
        realm: e.tenantId,
        target: a,
        tokenType: s,
        keyId: t.sshKid,
        requestedClaimsHash: t.requestedClaimsHash
      }, f = n && n.accessToken || this.getTokenKeys().accessToken, h = [];
      f.forEach(function(g) {
        if (o.accessTokenKeyMatchesFilter(g, u, !0)) {
          var v = o.getAccessTokenCredential(g);
          v && o.credentialMatchesFilter(v, u) && h.push(v);
        }
      });
      var p = h.length;
      return p < 1 ? (this.commonLogger.info("CacheManager:getAccessToken - No token found"), null) : p > 1 ? (this.commonLogger.info("CacheManager:getAccessToken - Multiple access tokens found, clearing them"), h.forEach(function(g) {
        o.removeAccessToken(g.generateCredentialKey());
      }), null) : (this.commonLogger.info("CacheManager:getAccessToken - Returning access token"), h[0]);
    }, r.prototype.accessTokenKeyMatchesFilter = function(e, t, n) {
      var o = e.toLowerCase();
      if (t.clientId && o.indexOf(t.clientId.toLowerCase()) === -1 || t.homeAccountId && o.indexOf(t.homeAccountId.toLowerCase()) === -1 || t.realm && o.indexOf(t.realm.toLowerCase()) === -1 || t.requestedClaimsHash && o.indexOf(t.requestedClaimsHash.toLowerCase()) === -1)
        return !1;
      if (t.target)
        for (var a = t.target.asArray(), s = 0; s < a.length; s++) {
          if (n && !o.includes(a[s].toLowerCase()))
            return !1;
          if (!n && o.includes(a[s].toLowerCase()))
            return !0;
        }
      return !0;
    }, r.prototype.getAccessTokensByFilter = function(e) {
      var t = this, n = this.getTokenKeys(), o = [];
      return n.accessToken.forEach(function(a) {
        if (t.accessTokenKeyMatchesFilter(a, e, !0)) {
          var s = t.getAccessTokenCredential(a);
          s && t.credentialMatchesFilter(s, e) && o.push(s);
        }
      }), o;
    }, r.prototype.getRefreshToken = function(e, t, n) {
      var o = this;
      this.commonLogger.trace("CacheManager - getRefreshToken called");
      var a = t ? qi : void 0, s = {
        homeAccountId: e.homeAccountId,
        environment: e.environment,
        credentialType: he.REFRESH_TOKEN,
        clientId: this.clientId,
        familyId: a
      }, l = n && n.refreshToken || this.getTokenKeys().refreshToken, u = [];
      l.forEach(function(h) {
        if (o.refreshTokenKeyMatchesFilter(h, s)) {
          var p = o.getRefreshTokenCredential(h);
          p && o.credentialMatchesFilter(p, s) && u.push(p);
        }
      });
      var f = u.length;
      return f < 1 ? (this.commonLogger.info("CacheManager:getRefreshToken - No refresh token found."), null) : (this.commonLogger.info("CacheManager:getRefreshToken - returning refresh token"), u[0]);
    }, r.prototype.refreshTokenKeyMatchesFilter = function(e, t) {
      var n = e.toLowerCase();
      return !(t.familyId && n.indexOf(t.familyId.toLowerCase()) === -1 || !t.familyId && t.clientId && n.indexOf(t.clientId.toLowerCase()) === -1 || t.homeAccountId && n.indexOf(t.homeAccountId.toLowerCase()) === -1);
    }, r.prototype.readAppMetadataFromCache = function(e) {
      var t = {
        environment: e,
        clientId: this.clientId
      }, n = this.getAppMetadataFilteredBy(t), o = Object.keys(n).map(function(s) {
        return n[s];
      }), a = o.length;
      if (a < 1)
        return null;
      if (a > 1)
        throw ie.createMultipleMatchingAppMetadataInCacheError();
      return o[0];
    }, r.prototype.isAppMetadataFOCI = function(e) {
      var t = this.readAppMetadataFromCache(e);
      return !!(t && t.familyId === qi);
    }, r.prototype.matchHomeAccountId = function(e, t) {
      return typeof e.homeAccountId == "string" && t === e.homeAccountId;
    }, r.prototype.matchLocalAccountId = function(e, t) {
      return typeof e.localAccountId == "string" && t === e.localAccountId;
    }, r.prototype.matchUsername = function(e, t) {
      return typeof e.username == "string" && t.toLowerCase() === e.username.toLowerCase();
    }, r.prototype.matchUserAssertionHash = function(e, t) {
      return !!(e.userAssertionHash && t === e.userAssertionHash);
    }, r.prototype.matchEnvironment = function(e, t) {
      var n = this.getAuthorityMetadataByAlias(t);
      return !!(n && n.aliases.indexOf(e.environment) > -1);
    }, r.prototype.matchCredentialType = function(e, t) {
      return e.credentialType && t.toLowerCase() === e.credentialType.toLowerCase();
    }, r.prototype.matchClientId = function(e, t) {
      return !!(e.clientId && t === e.clientId);
    }, r.prototype.matchFamilyId = function(e, t) {
      return !!(e.familyId && t === e.familyId);
    }, r.prototype.matchRealm = function(e, t) {
      return !!(e.realm && t === e.realm);
    }, r.prototype.matchNativeAccountId = function(e, t) {
      return !!(e.nativeAccountId && t === e.nativeAccountId);
    }, r.prototype.matchTarget = function(e, t) {
      var n = e.credentialType !== he.ACCESS_TOKEN && e.credentialType !== he.ACCESS_TOKEN_WITH_AUTH_SCHEME;
      if (n || !e.target)
        return !1;
      var o = Dt.fromString(e.target);
      return o.containsScopeSet(t);
    }, r.prototype.matchTokenType = function(e, t) {
      return !!(e.tokenType && e.tokenType === t);
    }, r.prototype.matchKeyId = function(e, t) {
      return !!(e.keyId && e.keyId === t);
    }, r.prototype.isAppMetadata = function(e) {
      return e.indexOf(iu) !== -1;
    }, r.prototype.isAuthorityMetadata = function(e) {
      return e.indexOf($i.CACHE_KEY) !== -1;
    }, r.prototype.generateAuthorityMetadataCacheKey = function(e) {
      return $i.CACHE_KEY + "-" + this.clientId + "-" + e;
    }, r.toObject = function(e, t) {
      for (var n in t)
        e[n] = t[n];
      return e;
    }, r;
  }()
), TI = (
  /** @class */
  function(r) {
    or(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.setAccount = function() {
      var t = "Storage interface - setAccount() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(t);
    }, e.prototype.getAccount = function() {
      var t = "Storage interface - getAccount() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(t);
    }, e.prototype.setIdTokenCredential = function() {
      var t = "Storage interface - setIdTokenCredential() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(t);
    }, e.prototype.getIdTokenCredential = function() {
      var t = "Storage interface - getIdTokenCredential() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(t);
    }, e.prototype.setAccessTokenCredential = function() {
      var t = "Storage interface - setAccessTokenCredential() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(t);
    }, e.prototype.getAccessTokenCredential = function() {
      var t = "Storage interface - getAccessTokenCredential() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(t);
    }, e.prototype.setRefreshTokenCredential = function() {
      var t = "Storage interface - setRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(t);
    }, e.prototype.getRefreshTokenCredential = function() {
      var t = "Storage interface - getRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(t);
    }, e.prototype.setAppMetadata = function() {
      var t = "Storage interface - setAppMetadata() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(t);
    }, e.prototype.getAppMetadata = function() {
      var t = "Storage interface - getAppMetadata() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(t);
    }, e.prototype.setServerTelemetry = function() {
      var t = "Storage interface - setServerTelemetry() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(t);
    }, e.prototype.getServerTelemetry = function() {
      var t = "Storage interface - getServerTelemetry() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(t);
    }, e.prototype.setAuthorityMetadata = function() {
      var t = "Storage interface - setAuthorityMetadata() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(t);
    }, e.prototype.getAuthorityMetadata = function() {
      var t = "Storage interface - getAuthorityMetadata() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(t);
    }, e.prototype.getAuthorityMetadataKeys = function() {
      var t = "Storage interface - getAuthorityMetadataKeys() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(t);
    }, e.prototype.setThrottlingCache = function() {
      var t = "Storage interface - setThrottlingCache() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(t);
    }, e.prototype.getThrottlingCache = function() {
      var t = "Storage interface - getThrottlingCache() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(t);
    }, e.prototype.removeItem = function() {
      var t = "Storage interface - removeItem() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(t);
    }, e.prototype.containsKey = function() {
      var t = "Storage interface - containsKey() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(t);
    }, e.prototype.getKeys = function() {
      var t = "Storage interface - getKeys() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(t);
    }, e.prototype.getAccountKeys = function() {
      var t = "Storage interface - getAccountKeys() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(t);
    }, e.prototype.getTokenKeys = function() {
      var t = "Storage interface - getTokenKeys() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(t);
    }, e.prototype.clear = function() {
      return _e(this, void 0, void 0, function() {
        var t;
        return Se(this, function(n) {
          throw t = "Storage interface - clear() has not been implemented for the cacheStorage interface.", ue.createUnexpectedError(t);
        });
      });
    }, e.prototype.updateCredentialCacheKey = function() {
      var t = "Storage interface - updateCredentialCacheKey() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(t);
    }, e;
  }(er)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var II = 300, im = {
  tokenRenewalOffsetSeconds: II,
  preventCorsPreflight: !1
}, AI = {
  loggerCallback: function() {
  },
  piiLoggingEnabled: !1,
  logLevel: st.Info,
  correlationId: O.EMPTY_STRING
}, RI = {
  claimsBasedCachingEnabled: !0
}, kI = {
  sendGetRequestAsync: function() {
    return _e(this, void 0, void 0, function() {
      var r;
      return Se(this, function(e) {
        throw r = "Network interface - sendGetRequestAsync() has not been implemented", ue.createUnexpectedError(r);
      });
    });
  },
  sendPostRequestAsync: function() {
    return _e(this, void 0, void 0, function() {
      var r;
      return Se(this, function(e) {
        throw r = "Network interface - sendPostRequestAsync() has not been implemented", ue.createUnexpectedError(r);
      });
    });
  }
}, PI = {
  sku: O.SKU,
  version: Du,
  cpu: O.EMPTY_STRING,
  os: O.EMPTY_STRING
}, NI = {
  clientSecret: O.EMPTY_STRING,
  clientAssertion: void 0
}, OI = {
  azureCloudInstance: Qi.None,
  tenant: "" + O.DEFAULT_COMMON_TENANT
}, MI = {
  application: {
    appName: "",
    appVersion: ""
  }
};
function xI(r) {
  var e = r.authOptions, t = r.systemOptions, n = r.loggerOptions, o = r.cacheOptions, a = r.storageInterface, s = r.networkInterface, l = r.cryptoInterface, u = r.clientCredentials, f = r.libraryInfo, h = r.telemetry, p = r.serverTelemetryManager, g = r.persistencePlugin, v = r.serializableCache, C = $e($e({}, AI), n);
  return {
    authOptions: LI(e),
    systemOptions: $e($e({}, im), t),
    loggerOptions: C,
    cacheOptions: $e($e({}, RI), o),
    storageInterface: a || new TI(e.clientId, Ts, new Lu(C)),
    networkInterface: s || kI,
    cryptoInterface: l || Ts,
    clientCredentials: u || NI,
    libraryInfo: $e($e({}, PI), f),
    telemetry: $e($e({}, MI), h),
    serverTelemetryManager: p || null,
    persistencePlugin: g || null,
    serializableCache: v || null
  };
}
function LI(r) {
  return $e({ clientCapabilities: [], azureCloudOptions: OI, skipAuthorityMetadataCache: !1 }, r);
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
var wo = (
  /** @class */
  function(r) {
    or(e, r);
    function e(t, n, o) {
      var a = r.call(this, t, n, o) || this;
      return a.name = "ServerError", Object.setPrototypeOf(a, e.prototype), a;
    }
    return e;
  }(ue)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var As = (
  /** @class */
  function() {
    function r() {
    }
    return r.generateThrottlingStorageKey = function(e) {
      return Gi.THROTTLING_PREFIX + "." + JSON.stringify(e);
    }, r.preProcess = function(e, t) {
      var n, o = r.generateThrottlingStorageKey(t), a = e.getThrottlingCache(o);
      if (a) {
        if (a.throttleTime < Date.now()) {
          e.removeItem(o);
          return;
        }
        throw new wo(((n = a.errorCodes) === null || n === void 0 ? void 0 : n.join(" ")) || O.EMPTY_STRING, a.errorMessage, a.subError);
      }
    }, r.postProcess = function(e, t, n) {
      if (r.checkResponseStatus(n) || r.checkResponseForRetryAfter(n)) {
        var o = {
          throttleTime: r.calculateThrottleTime(parseInt(n.headers[mr.RETRY_AFTER])),
          error: n.body.error,
          errorCodes: n.body.error_codes,
          errorMessage: n.body.error_description,
          subError: n.body.suberror
        };
        e.setThrottlingCache(r.generateThrottlingStorageKey(t), o);
      }
    }, r.checkResponseStatus = function(e) {
      return e.status === 429 || e.status >= 500 && e.status < 600;
    }, r.checkResponseForRetryAfter = function(e) {
      return e.headers ? e.headers.hasOwnProperty(mr.RETRY_AFTER) && (e.status < 200 || e.status >= 300) : !1;
    }, r.calculateThrottleTime = function(e) {
      var t = e <= 0 ? 0 : e, n = Date.now() / 1e3;
      return Math.floor(Math.min(n + (t || Gi.DEFAULT_THROTTLE_TIME_SECONDS), n + Gi.DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1e3);
    }, r.removeThrottle = function(e, t, n, o) {
      var a = {
        clientId: t,
        authority: n.authority,
        scopes: n.scopes,
        homeAccountIdentifier: o,
        claims: n.claims,
        authenticationScheme: n.authenticationScheme,
        resourceRequestMethod: n.resourceRequestMethod,
        resourceRequestUri: n.resourceRequestUri,
        shrClaims: n.shrClaims,
        sshKid: n.sshKid
      }, s = this.generateThrottlingStorageKey(a);
      e.removeItem(s);
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var DI = (
  /** @class */
  function() {
    function r(e, t) {
      this.networkClient = e, this.cacheManager = t;
    }
    return r.prototype.sendPostRequest = function(e, t, n) {
      return _e(this, void 0, void 0, function() {
        var o, a;
        return Se(this, function(s) {
          switch (s.label) {
            case 0:
              As.preProcess(this.cacheManager, e), s.label = 1;
            case 1:
              return s.trys.push([1, 3, , 4]), [4, this.networkClient.sendPostRequestAsync(t, n)];
            case 2:
              return o = s.sent(), [3, 4];
            case 3:
              throw a = s.sent(), a instanceof ue ? a : ie.createNetworkError(t, a);
            case 4:
              return As.postProcess(this.cacheManager, e, o), [2, o];
          }
        });
      });
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var gr;
(function(r) {
  r.HOME_ACCOUNT_ID = "home_account_id", r.UPN = "UPN";
})(gr || (gr = {}));
/*! @azure/msal-common v13.3.1 2023-10-27 */
var uo = (
  /** @class */
  function() {
    function r() {
    }
    return r.validateRedirectUri = function(e) {
      if (re.isEmpty(e))
        throw et.createRedirectUriEmptyError();
    }, r.validatePrompt = function(e) {
      var t = [];
      for (var n in Ft)
        t.push(Ft[n]);
      if (t.indexOf(e) < 0)
        throw et.createInvalidPromptError(e);
    }, r.validateClaims = function(e) {
      try {
        JSON.parse(e);
      } catch {
        throw et.createInvalidClaimsRequestError();
      }
    }, r.validateCodeChallengeParams = function(e, t) {
      if (re.isEmpty(e) || re.isEmpty(t))
        throw et.createInvalidCodeChallengeParamsError();
      this.validateCodeChallengeMethod(t);
    }, r.validateCodeChallengeMethod = function(e) {
      if ([
        Op.PLAIN,
        Op.S256
      ].indexOf(e) < 0)
        throw et.createInvalidCodeChallengeMethodError();
    }, r.sanitizeEQParams = function(e, t) {
      return e ? (t.forEach(function(n, o) {
        e[o] && delete e[o];
      }), Object.fromEntries(Object.entries(e).filter(function(n) {
        var o = n[1];
        return o !== "";
      }))) : {};
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Vi = (
  /** @class */
  function() {
    function r() {
      this.parameters = /* @__PURE__ */ new Map();
    }
    return r.prototype.addResponseTypeCode = function() {
      this.parameters.set(Ae.RESPONSE_TYPE, encodeURIComponent(O.CODE_RESPONSE_TYPE));
    }, r.prototype.addResponseTypeForTokenAndIdToken = function() {
      this.parameters.set(Ae.RESPONSE_TYPE, encodeURIComponent(O.TOKEN_RESPONSE_TYPE + " " + O.ID_TOKEN_RESPONSE_TYPE));
    }, r.prototype.addResponseMode = function(e) {
      this.parameters.set(Ae.RESPONSE_MODE, encodeURIComponent(e || bs.QUERY));
    }, r.prototype.addNativeBroker = function() {
      this.parameters.set(Ae.NATIVE_BROKER, encodeURIComponent("1"));
    }, r.prototype.addScopes = function(e, t) {
      t === void 0 && (t = !0);
      var n = t ? Qs(e || [], sa) : e || [], o = new Dt(n);
      this.parameters.set(Ae.SCOPE, encodeURIComponent(o.printScopes()));
    }, r.prototype.addClientId = function(e) {
      this.parameters.set(Ae.CLIENT_ID, encodeURIComponent(e));
    }, r.prototype.addRedirectUri = function(e) {
      uo.validateRedirectUri(e), this.parameters.set(Ae.REDIRECT_URI, encodeURIComponent(e));
    }, r.prototype.addPostLogoutRedirectUri = function(e) {
      uo.validateRedirectUri(e), this.parameters.set(Ae.POST_LOGOUT_URI, encodeURIComponent(e));
    }, r.prototype.addIdTokenHint = function(e) {
      this.parameters.set(Ae.ID_TOKEN_HINT, encodeURIComponent(e));
    }, r.prototype.addDomainHint = function(e) {
      this.parameters.set(Ki.DOMAIN_HINT, encodeURIComponent(e));
    }, r.prototype.addLoginHint = function(e) {
      this.parameters.set(Ki.LOGIN_HINT, encodeURIComponent(e));
    }, r.prototype.addCcsUpn = function(e) {
      this.parameters.set(mr.CCS_HEADER, encodeURIComponent("UPN:" + e));
    }, r.prototype.addCcsOid = function(e) {
      this.parameters.set(mr.CCS_HEADER, encodeURIComponent("Oid:" + e.uid + "@" + e.utid));
    }, r.prototype.addSid = function(e) {
      this.parameters.set(Ki.SID, encodeURIComponent(e));
    }, r.prototype.addClaims = function(e, t) {
      var n = this.addClientCapabilitiesToClaims(e, t);
      uo.validateClaims(n), this.parameters.set(Ae.CLAIMS, encodeURIComponent(n));
    }, r.prototype.addCorrelationId = function(e) {
      this.parameters.set(Ae.CLIENT_REQUEST_ID, encodeURIComponent(e));
    }, r.prototype.addLibraryInfo = function(e) {
      this.parameters.set(Ae.X_CLIENT_SKU, e.sku), this.parameters.set(Ae.X_CLIENT_VER, e.version), e.os && this.parameters.set(Ae.X_CLIENT_OS, e.os), e.cpu && this.parameters.set(Ae.X_CLIENT_CPU, e.cpu);
    }, r.prototype.addApplicationTelemetry = function(e) {
      e != null && e.appName && this.parameters.set(Ae.X_APP_NAME, e.appName), e != null && e.appVersion && this.parameters.set(Ae.X_APP_VER, e.appVersion);
    }, r.prototype.addPrompt = function(e) {
      uo.validatePrompt(e), this.parameters.set("" + Ae.PROMPT, encodeURIComponent(e));
    }, r.prototype.addState = function(e) {
      re.isEmpty(e) || this.parameters.set(Ae.STATE, encodeURIComponent(e));
    }, r.prototype.addNonce = function(e) {
      this.parameters.set(Ae.NONCE, encodeURIComponent(e));
    }, r.prototype.addCodeChallengeParams = function(e, t) {
      if (uo.validateCodeChallengeParams(e, t), e && t)
        this.parameters.set(Ae.CODE_CHALLENGE, encodeURIComponent(e)), this.parameters.set(Ae.CODE_CHALLENGE_METHOD, encodeURIComponent(t));
      else
        throw et.createInvalidCodeChallengeParamsError();
    }, r.prototype.addAuthorizationCode = function(e) {
      this.parameters.set(Ae.CODE, encodeURIComponent(e));
    }, r.prototype.addDeviceCode = function(e) {
      this.parameters.set(Ae.DEVICE_CODE, encodeURIComponent(e));
    }, r.prototype.addRefreshToken = function(e) {
      this.parameters.set(Ae.REFRESH_TOKEN, encodeURIComponent(e));
    }, r.prototype.addCodeVerifier = function(e) {
      this.parameters.set(Ae.CODE_VERIFIER, encodeURIComponent(e));
    }, r.prototype.addClientSecret = function(e) {
      this.parameters.set(Ae.CLIENT_SECRET, encodeURIComponent(e));
    }, r.prototype.addClientAssertion = function(e) {
      re.isEmpty(e) || this.parameters.set(Ae.CLIENT_ASSERTION, encodeURIComponent(e));
    }, r.prototype.addClientAssertionType = function(e) {
      re.isEmpty(e) || this.parameters.set(Ae.CLIENT_ASSERTION_TYPE, encodeURIComponent(e));
    }, r.prototype.addOboAssertion = function(e) {
      this.parameters.set(Ae.OBO_ASSERTION, encodeURIComponent(e));
    }, r.prototype.addRequestTokenUse = function(e) {
      this.parameters.set(Ae.REQUESTED_TOKEN_USE, encodeURIComponent(e));
    }, r.prototype.addGrantType = function(e) {
      this.parameters.set(Ae.GRANT_TYPE, encodeURIComponent(e));
    }, r.prototype.addClientInfo = function() {
      this.parameters.set(SI, "1");
    }, r.prototype.addExtraQueryParameters = function(e) {
      var t = this, n = uo.sanitizeEQParams(e, this.parameters);
      Object.keys(n).forEach(function(o) {
        t.parameters.set(o, e[o]);
      });
    }, r.prototype.addClientCapabilitiesToClaims = function(e, t) {
      var n;
      if (!e)
        n = {};
      else
        try {
          n = JSON.parse(e);
        } catch {
          throw et.createInvalidClaimsRequestError();
        }
      return t && t.length > 0 && (n.hasOwnProperty(jo.ACCESS_TOKEN) || (n[jo.ACCESS_TOKEN] = {}), n[jo.ACCESS_TOKEN][jo.XMS_CC] = {
        values: t
      }), JSON.stringify(n);
    }, r.prototype.addUsername = function(e) {
      this.parameters.set(Ss.username, encodeURIComponent(e));
    }, r.prototype.addPassword = function(e) {
      this.parameters.set(Ss.password, encodeURIComponent(e));
    }, r.prototype.addPopToken = function(e) {
      re.isEmpty(e) || (this.parameters.set(Ae.TOKEN_TYPE, Ve.POP), this.parameters.set(Ae.REQ_CNF, encodeURIComponent(e)));
    }, r.prototype.addSshJwk = function(e) {
      re.isEmpty(e) || (this.parameters.set(Ae.TOKEN_TYPE, Ve.SSH), this.parameters.set(Ae.REQ_CNF, encodeURIComponent(e)));
    }, r.prototype.addServerTelemetry = function(e) {
      this.parameters.set(Ae.X_CLIENT_CURR_TELEM, e.generateCurrentRequestHeaderValue()), this.parameters.set(Ae.X_CLIENT_LAST_TELEM, e.generateLastRequestHeaderValue());
    }, r.prototype.addThrottling = function() {
      this.parameters.set(Ae.X_MS_LIB_CAPABILITY, Gi.X_MS_LIB_CAPABILITY_VALUE);
    }, r.prototype.addLogoutHint = function(e) {
      this.parameters.set(Ae.LOGOUT_HINT, encodeURIComponent(e));
    }, r.prototype.createQueryString = function() {
      var e = new Array();
      return this.parameters.forEach(function(t, n) {
        e.push(n + "=" + t);
      }), e.join("&");
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Uu = (
  /** @class */
  function() {
    function r(e, t) {
      this.config = xI(e), this.logger = new Lu(this.config.loggerOptions, om, Du), this.cryptoUtils = this.config.cryptoInterface, this.cacheManager = this.config.storageInterface, this.networkClient = this.config.networkInterface, this.networkManager = new DI(this.networkClient, this.cacheManager), this.serverTelemetryManager = this.config.serverTelemetryManager, this.authority = this.config.authOptions.authority, this.performanceClient = t;
    }
    return r.prototype.createTokenRequestHeaders = function(e) {
      var t = {};
      if (t[mr.CONTENT_TYPE] = O.URL_FORM_CONTENT_TYPE, !this.config.systemOptions.preventCorsPreflight && e)
        switch (e.type) {
          case gr.HOME_ACCOUNT_ID:
            try {
              var n = Qo(e.credential);
              t[mr.CCS_HEADER] = "Oid:" + n.uid + "@" + n.utid;
            } catch (o) {
              this.logger.verbose("Could not parse home account ID for CCS Header: " + o);
            }
            break;
          case gr.UPN:
            t[mr.CCS_HEADER] = "UPN: " + e.credential;
            break;
        }
      return t;
    }, r.prototype.executePostToTokenEndpoint = function(e, t, n, o) {
      return _e(this, void 0, void 0, function() {
        var a;
        return Se(this, function(s) {
          switch (s.label) {
            case 0:
              return [4, this.networkManager.sendPostRequest(o, e, { body: t, headers: n })];
            case 1:
              return a = s.sent(), this.config.serverTelemetryManager && a.status < 500 && a.status !== 429 && this.config.serverTelemetryManager.clearTelemetryCache(), [2, a];
          }
        });
      });
    }, r.prototype.updateAuthority = function(e) {
      if (!e.discoveryComplete())
        throw ie.createEndpointDiscoveryIncompleteError("Updated authority has not completed endpoint discovery.");
      this.authority = e;
    }, r.prototype.createTokenQueryParameters = function(e) {
      var t = new Vi();
      return e.tokenQueryParameters && t.addExtraQueryParameters(e.tokenQueryParameters), t.createQueryString();
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Fu = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.generateAccountId = function() {
      return r.generateAccountIdForCacheKey(this.homeAccountId, this.environment);
    }, r.prototype.generateCredentialId = function() {
      return r.generateCredentialIdForCacheKey(this.credentialType, this.clientId, this.realm, this.familyId);
    }, r.prototype.generateTarget = function() {
      return r.generateTargetForCacheKey(this.target);
    }, r.prototype.generateCredentialKey = function() {
      return r.generateCredentialCacheKey(this.homeAccountId, this.environment, this.credentialType, this.clientId, this.realm, this.target, this.familyId, this.tokenType, this.requestedClaimsHash);
    }, r.prototype.generateType = function() {
      switch (this.credentialType) {
        case he.ID_TOKEN:
          return _n.ID_TOKEN;
        case he.ACCESS_TOKEN:
        case he.ACCESS_TOKEN_WITH_AUTH_SCHEME:
          return _n.ACCESS_TOKEN;
        case he.REFRESH_TOKEN:
          return _n.REFRESH_TOKEN;
        default:
          throw ie.createUnexpectedCredentialTypeError();
      }
    }, r.generateCredentialCacheKey = function(e, t, n, o, a, s, l, u, f) {
      var h = [
        this.generateAccountIdForCacheKey(e, t),
        this.generateCredentialIdForCacheKey(n, o, a, l),
        this.generateTargetForCacheKey(s),
        this.generateClaimsHashForCacheKey(f),
        this.generateSchemeForCacheKey(u)
      ];
      return h.join(Ct.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.generateAccountIdForCacheKey = function(e, t) {
      var n = [e, t];
      return n.join(Ct.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.generateCredentialIdForCacheKey = function(e, t, n, o) {
      var a = e === he.REFRESH_TOKEN && o || t, s = [
        e,
        a,
        n || O.EMPTY_STRING
      ];
      return s.join(Ct.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.generateTargetForCacheKey = function(e) {
      return (e || O.EMPTY_STRING).toLowerCase();
    }, r.generateClaimsHashForCacheKey = function(e) {
      return (e || O.EMPTY_STRING).toLowerCase();
    }, r.generateSchemeForCacheKey = function(e) {
      return e && e.toLowerCase() !== Ve.BEARER.toLowerCase() ? e.toLowerCase() : O.EMPTY_STRING;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var po = (
  /** @class */
  function(r) {
    or(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.createIdTokenEntity = function(t, n, o, a, s) {
      var l = new e();
      return l.credentialType = he.ID_TOKEN, l.homeAccountId = t, l.environment = n, l.clientId = a, l.secret = o, l.realm = s, l;
    }, e.isIdTokenEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("realm") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") && t.credentialType === he.ID_TOKEN : !1;
    }, e;
  }(Fu)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Pr = (
  /** @class */
  function() {
    function r() {
    }
    return r.nowSeconds = function() {
      return Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3);
    }, r.isTokenExpired = function(e, t) {
      var n = Number(e) || 0, o = r.nowSeconds() + t;
      return o > n;
    }, r.wasClockTurnedBack = function(e) {
      var t = Number(e);
      return t > r.nowSeconds();
    }, r.delay = function(e, t) {
      return new Promise(function(n) {
        return setTimeout(function() {
          return n(t);
        }, e);
      });
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var go = (
  /** @class */
  function(r) {
    or(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.createAccessTokenEntity = function(t, n, o, a, s, l, u, f, h, p, g, v, C, E, _) {
      var I, A, S = new e();
      S.homeAccountId = t, S.credentialType = he.ACCESS_TOKEN, S.secret = o;
      var R = Pr.nowSeconds();
      if (S.cachedAt = R.toString(), S.expiresOn = u.toString(), S.extendedExpiresOn = f.toString(), p && (S.refreshOn = p.toString()), S.environment = n, S.clientId = a, S.realm = s, S.target = l, S.userAssertionHash = v, S.tokenType = re.isEmpty(g) ? Ve.BEARER : g, E && (S.requestedClaims = E, S.requestedClaimsHash = _), ((I = S.tokenType) === null || I === void 0 ? void 0 : I.toLowerCase()) !== Ve.BEARER.toLowerCase())
        switch (S.credentialType = he.ACCESS_TOKEN_WITH_AUTH_SCHEME, S.tokenType) {
          case Ve.POP:
            var P = sn.extractTokenClaims(o, h);
            if (!(!((A = P == null ? void 0 : P.cnf) === null || A === void 0) && A.kid))
              throw ie.createTokenClaimsRequiredError();
            S.keyId = P.cnf.kid;
            break;
          case Ve.SSH:
            S.keyId = C;
        }
      return S;
    }, e.isAccessTokenEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("realm") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") && t.hasOwnProperty("target") && (t.credentialType === he.ACCESS_TOKEN || t.credentialType === he.ACCESS_TOKEN_WITH_AUTH_SCHEME) : !1;
    }, e;
  }(Fu)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Jo = (
  /** @class */
  function(r) {
    or(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.createRefreshTokenEntity = function(t, n, o, a, s, l) {
      var u = new e();
      return u.clientId = a, u.credentialType = he.REFRESH_TOKEN, u.environment = n, u.homeAccountId = t, u.secret = o, u.userAssertionHash = l, s && (u.familyId = s), u;
    }, e.isRefreshTokenEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") && t.credentialType === he.REFRESH_TOKEN : !1;
    }, e;
  }(Fu)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var xp = [
  "interaction_required",
  "consent_required",
  "login_required"
], UI = [
  "message_only",
  "additional_action",
  "basic_action",
  "user_password_expired",
  "consent_required"
], Xo = {
  noTokensFoundError: {
    code: "no_tokens_found",
    desc: "No refresh token found in the cache. Please sign-in."
  },
  native_account_unavailable: {
    code: "native_account_unavailable",
    desc: "The requested account is not available in the native broker. It may have been deleted or logged out. Please sign-in again using an interactive API."
  }
}, zr = (
  /** @class */
  function(r) {
    or(e, r);
    function e(t, n, o, a, s, l, u) {
      var f = r.call(this, t, n, o) || this;
      return Object.setPrototypeOf(f, e.prototype), f.timestamp = a || O.EMPTY_STRING, f.traceId = s || O.EMPTY_STRING, f.correlationId = l || O.EMPTY_STRING, f.claims = u || O.EMPTY_STRING, f.name = "InteractionRequiredAuthError", f;
    }
    return e.isInteractionRequiredError = function(t, n, o) {
      var a = !!t && xp.indexOf(t) > -1, s = !!o && UI.indexOf(o) > -1, l = !!n && xp.some(function(u) {
        return n.indexOf(u) > -1;
      });
      return a || l || s;
    }, e.createNoTokensFoundError = function() {
      return new e(Xo.noTokensFoundError.code, Xo.noTokensFoundError.desc);
    }, e.createNativeAccountUnavailableError = function() {
      return new e(Xo.native_account_unavailable.code, Xo.native_account_unavailable.desc);
    }, e;
  }(ue)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Wi = (
  /** @class */
  function() {
    function r(e, t, n, o, a) {
      this.account = e || null, this.idToken = t || null, this.accessToken = n || null, this.refreshToken = o || null, this.appMetadata = a || null;
    }
    return r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Tn = (
  /** @class */
  function() {
    function r() {
    }
    return r.setRequestState = function(e, t, n) {
      var o = r.generateLibraryState(e, n);
      return re.isEmpty(t) ? o : "" + o + O.RESOURCE_DELIM + t;
    }, r.generateLibraryState = function(e, t) {
      if (!e)
        throw ie.createNoCryptoObjectError("generateLibraryState");
      var n = {
        id: e.createNewGuid()
      };
      t && (n.meta = t);
      var o = JSON.stringify(n);
      return e.base64Encode(o);
    }, r.parseRequestState = function(e, t) {
      if (!e)
        throw ie.createNoCryptoObjectError("parseRequestState");
      if (re.isEmpty(t))
        throw ie.createInvalidStateError(t, "Null, undefined or empty state");
      try {
        var n = t.split(O.RESOURCE_DELIM), o = n[0], a = n.length > 1 ? n.slice(1).join(O.RESOURCE_DELIM) : O.EMPTY_STRING, s = e.base64Decode(o), l = JSON.parse(s);
        return {
          userRequestState: re.isEmpty(a) ? O.EMPTY_STRING : a,
          libraryState: l
        };
      } catch (u) {
        throw ie.createInvalidStateError(t, u);
      }
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var He = (
  /** @class */
  function() {
    function r(e) {
      if (this._urlString = e, re.isEmpty(this._urlString))
        throw et.createUrlEmptyError();
      re.isEmpty(this.getHash()) && (this._urlString = r.canonicalizeUri(e));
    }
    return Object.defineProperty(r.prototype, "urlString", {
      get: function() {
        return this._urlString;
      },
      enumerable: !1,
      configurable: !0
    }), r.canonicalizeUri = function(e) {
      if (e) {
        var t = e.toLowerCase();
        return re.endsWith(t, "?") ? t = t.slice(0, -1) : re.endsWith(t, "?/") && (t = t.slice(0, -2)), re.endsWith(t, "/") || (t += "/"), t;
      }
      return e;
    }, r.prototype.validateAsUri = function() {
      var e;
      try {
        e = this.getUrlComponents();
      } catch (t) {
        throw et.createUrlParseError(t);
      }
      if (!e.HostNameAndPort || !e.PathSegments)
        throw et.createUrlParseError("Given url string: " + this.urlString);
      if (!e.Protocol || e.Protocol.toLowerCase() !== "https:")
        throw et.createInsecureAuthorityUriError(this.urlString);
    }, r.appendQueryString = function(e, t) {
      return re.isEmpty(t) ? e : e.indexOf("?") < 0 ? e + "?" + t : e + "&" + t;
    }, r.removeHashFromUrl = function(e) {
      return r.canonicalizeUri(e.split("#")[0]);
    }, r.prototype.replaceTenantPath = function(e) {
      var t = this.getUrlComponents(), n = t.PathSegments;
      return e && n.length !== 0 && (n[0] === mo.COMMON || n[0] === mo.ORGANIZATIONS) && (n[0] = e), r.constructAuthorityUriFromObject(t);
    }, r.prototype.getHash = function() {
      return r.parseHash(this.urlString);
    }, r.prototype.getUrlComponents = function() {
      var e = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?"), t = this.urlString.match(e);
      if (!t)
        throw et.createUrlParseError("Given url string: " + this.urlString);
      var n = {
        Protocol: t[1],
        HostNameAndPort: t[4],
        AbsolutePath: t[5],
        QueryString: t[7]
      }, o = n.AbsolutePath.split("/");
      return o = o.filter(function(a) {
        return a && a.length > 0;
      }), n.PathSegments = o, !re.isEmpty(n.QueryString) && n.QueryString.endsWith("/") && (n.QueryString = n.QueryString.substring(0, n.QueryString.length - 1)), n;
    }, r.getDomainFromUrl = function(e) {
      var t = RegExp("^([^:/?#]+://)?([^/?#]*)"), n = e.match(t);
      if (!n)
        throw et.createUrlParseError("Given url string: " + e);
      return n[2];
    }, r.getAbsoluteUrl = function(e, t) {
      if (e[0] === O.FORWARD_SLASH) {
        var n = new r(t), o = n.getUrlComponents();
        return o.Protocol + "//" + o.HostNameAndPort + e;
      }
      return e;
    }, r.parseHash = function(e) {
      var t = e.indexOf("#"), n = e.indexOf("#/");
      return n > -1 ? e.substring(n + 2) : t > -1 ? e.substring(t + 1) : O.EMPTY_STRING;
    }, r.parseQueryString = function(e) {
      var t = e.indexOf("?"), n = e.indexOf("/?");
      return n > -1 ? e.substring(n + 2) : t > -1 ? e.substring(t + 1) : O.EMPTY_STRING;
    }, r.constructAuthorityUriFromObject = function(e) {
      return new r(e.Protocol + "//" + e.HostNameAndPort + "/" + e.PathSegments.join("/"));
    }, r.getDeserializedHash = function(e) {
      if (re.isEmpty(e))
        return {};
      var t = r.parseHash(e), n = re.queryStringToObject(re.isEmpty(t) ? e : t);
      if (!n)
        throw ie.createHashNotDeserializedError(JSON.stringify(n));
      return n;
    }, r.getDeserializedQueryString = function(e) {
      if (re.isEmpty(e))
        return {};
      var t = r.parseQueryString(e), n = re.queryStringToObject(re.isEmpty(t) ? e : t);
      if (!n)
        throw ie.createHashNotDeserializedError(JSON.stringify(n));
      return n;
    }, r.hashContainsKnownProperties = function(e) {
      if (re.isEmpty(e) || e.indexOf("=") < 0)
        return !1;
      var t = r.getDeserializedHash(e);
      return !!(t.code || t.error_description || t.error || t.state);
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var F;
(function(r) {
  r.AcquireTokenByCode = "acquireTokenByCode", r.AcquireTokenByRefreshToken = "acquireTokenByRefreshToken", r.AcquireTokenSilent = "acquireTokenSilent", r.AcquireTokenSilentAsync = "acquireTokenSilentAsync", r.AcquireTokenPopup = "acquireTokenPopup", r.CryptoOptsGetPublicKeyThumbprint = "cryptoOptsGetPublicKeyThumbprint", r.CryptoOptsSignJwt = "cryptoOptsSignJwt", r.SilentCacheClientAcquireToken = "silentCacheClientAcquireToken", r.SilentIframeClientAcquireToken = "silentIframeClientAcquireToken", r.SilentRefreshClientAcquireToken = "silentRefreshClientAcquireToken", r.SsoSilent = "ssoSilent", r.StandardInteractionClientGetDiscoveredAuthority = "standardInteractionClientGetDiscoveredAuthority", r.FetchAccountIdWithNativeBroker = "fetchAccountIdWithNativeBroker", r.NativeInteractionClientAcquireToken = "nativeInteractionClientAcquireToken", r.BaseClientCreateTokenRequestHeaders = "baseClientCreateTokenRequestHeaders", r.BrokerHandhshake = "brokerHandshake", r.AcquireTokenByRefreshTokenInBroker = "acquireTokenByRefreshTokenInBroker", r.AcquireTokenByBroker = "acquireTokenByBroker", r.RefreshTokenClientExecuteTokenRequest = "refreshTokenClientExecuteTokenRequest", r.RefreshTokenClientAcquireToken = "refreshTokenClientAcquireToken", r.RefreshTokenClientAcquireTokenWithCachedRefreshToken = "refreshTokenClientAcquireTokenWithCachedRefreshToken", r.RefreshTokenClientAcquireTokenByRefreshToken = "refreshTokenClientAcquireTokenByRefreshToken", r.RefreshTokenClientCreateTokenRequestBody = "refreshTokenClientCreateTokenRequestBody", r.AcquireTokenFromCache = "acquireTokenFromCache", r.AcquireTokenBySilentIframe = "acquireTokenBySilentIframe", r.InitializeBaseRequest = "initializeBaseRequest", r.InitializeSilentRequest = "initializeSilentRequest", r.InitializeClientApplication = "initializeClientApplication", r.SilentIframeClientTokenHelper = "silentIframeClientTokenHelper", r.SilentHandlerInitiateAuthRequest = "silentHandlerInitiateAuthRequest", r.SilentHandlerMonitorIframeForHash = "silentHandlerMonitorIframeForHash", r.SilentHandlerLoadFrame = "silentHandlerLoadFrame", r.StandardInteractionClientCreateAuthCodeClient = "standardInteractionClientCreateAuthCodeClient", r.StandardInteractionClientGetClientConfiguration = "standardInteractionClientGetClientConfiguration", r.StandardInteractionClientInitializeAuthorizationRequest = "standardInteractionClientInitializeAuthorizationRequest", r.StandardInteractionClientInitializeAuthorizationCodeRequest = "standardInteractionClientInitializeAuthorizationCodeRequest", r.GetAuthCodeUrl = "getAuthCodeUrl", r.HandleCodeResponseFromServer = "handleCodeResponseFromServer", r.HandleCodeResponseFromHash = "handleCodeResponseFromHash", r.UpdateTokenEndpointAuthority = "updateTokenEndpointAuthority", r.AuthClientAcquireToken = "authClientAcquireToken", r.AuthClientExecuteTokenRequest = "authClientExecuteTokenRequest", r.AuthClientCreateTokenRequestBody = "authClientCreateTokenRequestBody", r.AuthClientCreateQueryString = "authClientCreateQueryString", r.PopTokenGenerateCnf = "popTokenGenerateCnf", r.PopTokenGenerateKid = "popTokenGenerateKid", r.HandleServerTokenResponse = "handleServerTokenResponse", r.AuthorityFactoryCreateDiscoveredInstance = "authorityFactoryCreateDiscoveredInstance", r.AuthorityResolveEndpointsAsync = "authorityResolveEndpointsAsync", r.AuthorityGetCloudDiscoveryMetadataFromNetwork = "authorityGetCloudDiscoveryMetadataFromNetwork", r.AuthorityUpdateCloudDiscoveryMetadata = "authorityUpdateCloudDiscoveryMetadata", r.AuthorityGetEndpointMetadataFromNetwork = "authorityGetEndpointMetadataFromNetwork", r.AuthorityUpdateEndpointMetadata = "authorityUpdateEndpointMetadata", r.AuthorityUpdateMetadataWithRegionalInformation = "authorityUpdateMetadataWithRegionalInformation", r.RegionDiscoveryDetectRegion = "regionDiscoveryDetectRegion", r.RegionDiscoveryGetRegionFromIMDS = "regionDiscoveryGetRegionFromIMDS", r.RegionDiscoveryGetCurrentVersion = "regionDiscoveryGetCurrentVersion", r.AcquireTokenByCodeAsync = "acquireTokenByCodeAsync", r.GetEndpointMetadataFromNetwork = "getEndpointMetadataFromNetwork", r.GetCloudDiscoveryMetadataFromNetworkMeasurement = "getCloudDiscoveryMetadataFromNetworkMeasurement", r.HandleRedirectPromiseMeasurement = "handleRedirectPromiseMeasurement", r.UpdateCloudDiscoveryMetadataMeasurement = "updateCloudDiscoveryMetadataMeasurement", r.UsernamePasswordClientAcquireToken = "usernamePasswordClientAcquireToken", r.NativeMessageHandlerHandshake = "nativeMessageHandlerHandshake", r.ClearTokensAndKeysWithClaims = "clearTokensAndKeysWithClaims";
})(F || (F = {}));
var Rs;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.InProgress = 1] = "InProgress", r[r.Completed = 2] = "Completed";
})(Rs || (Rs = {}));
var FI = /* @__PURE__ */ new Set([
  "accessTokenSize",
  "durationMs",
  "idTokenSize",
  "matsSilentStatus",
  "matsHttpStatus",
  "refreshTokenSize",
  "queuedTimeMs",
  "startTimeMs",
  "status"
]);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var su;
(function(r) {
  r.SW = "sw", r.UHW = "uhw";
})(su || (su = {}));
var oi = (
  /** @class */
  function() {
    function r(e, t) {
      this.cryptoUtils = e, this.performanceClient = t;
    }
    return r.prototype.generateCnf = function(e) {
      var t, n;
      return _e(this, void 0, void 0, function() {
        var o, a, s;
        return Se(this, function(l) {
          switch (l.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(F.PopTokenGenerateCnf, e.correlationId), (n = this.performanceClient) === null || n === void 0 || n.setPreQueueTime(F.PopTokenGenerateKid, e.correlationId), [4, this.generateKid(e)];
            case 1:
              return o = l.sent(), a = this.cryptoUtils.base64Encode(JSON.stringify(o)), s = {
                kid: o.kid,
                reqCnfString: a
              }, [4, this.cryptoUtils.hashString(a)];
            case 2:
              return [2, (s.reqCnfHash = l.sent(), s)];
          }
        });
      });
    }, r.prototype.generateKid = function(e) {
      var t;
      return _e(this, void 0, void 0, function() {
        var n;
        return Se(this, function(o) {
          switch (o.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(F.PopTokenGenerateKid, e.correlationId), [4, this.cryptoUtils.getPublicKeyThumbprint(e)];
            case 1:
              return n = o.sent(), [2, {
                kid: n,
                xms_ksl: su.SW
              }];
          }
        });
      });
    }, r.prototype.signPopToken = function(e, t, n) {
      return _e(this, void 0, void 0, function() {
        return Se(this, function(o) {
          return [2, this.signPayload(e, t, n)];
        });
      });
    }, r.prototype.signPayload = function(e, t, n, o) {
      return _e(this, void 0, void 0, function() {
        var a, s, l, u, f, h;
        return Se(this, function(p) {
          switch (p.label) {
            case 0:
              return a = n.resourceRequestMethod, s = n.resourceRequestUri, l = n.shrClaims, u = n.shrNonce, f = s ? new He(s) : void 0, h = f == null ? void 0 : f.getUrlComponents(), [4, this.cryptoUtils.signJwt($e({ at: e, ts: Pr.nowSeconds(), m: a == null ? void 0 : a.toUpperCase(), u: h == null ? void 0 : h.HostNameAndPort, nonce: u || this.cryptoUtils.createNewGuid(), p: h == null ? void 0 : h.AbsolutePath, q: h != null && h.QueryString ? [[], h.QueryString] : void 0, client_claims: l || void 0 }, o), t, n.correlationId)];
            case 1:
              return [2, p.sent()];
          }
        });
      });
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var cu = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.generateAppMetadataKey = function() {
      return r.generateAppMetadataCacheKey(this.environment, this.clientId);
    }, r.generateAppMetadataCacheKey = function(e, t) {
      var n = [
        iu,
        e,
        t
      ];
      return n.join(Ct.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.createAppMetadataEntity = function(e, t, n) {
      var o = new r();
      return o.clientId = e, o.environment = t, n && (o.familyId = n), o;
    }, r.isAppMetadataEntity = function(e, t) {
      return t ? e.indexOf(iu) === 0 && t.hasOwnProperty("clientId") && t.hasOwnProperty("environment") : !1;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var HI = (
  /** @class */
  function() {
    function r(e, t) {
      this.cache = e, this.hasChanged = t;
    }
    return Object.defineProperty(r.prototype, "cacheHasChanged", {
      /**
       * boolean which indicates the changes in cache
       */
      get: function() {
        return this.hasChanged;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "tokenCache", {
      /**
       * function to retrieve the token cache
       */
      get: function() {
        return this.cache;
      },
      enumerable: !1,
      configurable: !0
    }), r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var ks = (
  /** @class */
  function() {
    function r(e, t, n, o, a, s, l) {
      this.clientId = e, this.cacheStorage = t, this.cryptoObj = n, this.logger = o, this.serializableCache = a, this.persistencePlugin = s, this.performanceClient = l;
    }
    return r.prototype.validateServerAuthorizationCodeResponse = function(e, t, n) {
      if (!e.state || !t)
        throw e.state ? ie.createStateNotFoundError("Cached State") : ie.createStateNotFoundError("Server State");
      if (decodeURIComponent(e.state) !== decodeURIComponent(t))
        throw ie.createStateMismatchError();
      if (e.error || e.error_description || e.suberror)
        throw zr.isInteractionRequiredError(e.error, e.error_description, e.suberror) ? new zr(e.error || O.EMPTY_STRING, e.error_description, e.suberror, e.timestamp || O.EMPTY_STRING, e.trace_id || O.EMPTY_STRING, e.correlation_id || O.EMPTY_STRING, e.claims || O.EMPTY_STRING) : new wo(e.error || O.EMPTY_STRING, e.error_description, e.suberror);
      e.client_info && Is(e.client_info, n);
    }, r.prototype.validateTokenResponse = function(e) {
      if (e.error || e.error_description || e.suberror) {
        if (zr.isInteractionRequiredError(e.error, e.error_description, e.suberror))
          throw new zr(e.error, e.error_description, e.suberror, e.timestamp || O.EMPTY_STRING, e.trace_id || O.EMPTY_STRING, e.correlation_id || O.EMPTY_STRING, e.claims || O.EMPTY_STRING);
        var t = e.error_codes + " - [" + e.timestamp + "]: " + e.error_description + " - Correlation ID: " + e.correlation_id + " - Trace ID: " + e.trace_id;
        throw new wo(e.error, t, e.suberror);
      }
    }, r.prototype.handleServerTokenResponse = function(e, t, n, o, a, s, l, u, f) {
      var h;
      return _e(this, void 0, void 0, function() {
        var p, g, v, C, E, _, I;
        return Se(this, function(A) {
          switch (A.label) {
            case 0:
              if ((h = this.performanceClient) === null || h === void 0 || h.addQueueMeasurement(F.HandleServerTokenResponse, e.correlation_id), e.id_token) {
                if (p = new sn(e.id_token || O.EMPTY_STRING, this.cryptoObj), a && !re.isEmpty(a.nonce) && p.claims.nonce !== a.nonce)
                  throw ie.createNonceMismatchError();
                if (o.maxAge || o.maxAge === 0) {
                  if (g = p.claims.auth_time, !g)
                    throw ie.createAuthTimeNotFoundError();
                  sn.checkMaxAge(g, o.maxAge);
                }
              }
              this.homeAccountIdentifier = Rt.generateHomeAccountId(e.client_info || O.EMPTY_STRING, t.authorityType, this.logger, this.cryptoObj, p), a && a.state && (v = Tn.parseRequestState(this.cryptoObj, a.state)), e.key_id = e.key_id || o.sshKid || void 0, C = this.generateCacheRecord(e, t, n, o, p, s, a), A.label = 1;
            case 1:
              return A.trys.push([1, , 5, 8]), this.persistencePlugin && this.serializableCache ? (this.logger.verbose("Persistence enabled, calling beforeCacheAccess"), E = new HI(this.serializableCache, !0), [4, this.persistencePlugin.beforeCacheAccess(E)]) : [3, 3];
            case 2:
              A.sent(), A.label = 3;
            case 3:
              return l && !u && C.account && (_ = C.account.generateAccountKey(), I = this.cacheStorage.getAccount(_), !I) ? (this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache"), [2, r.generateAuthenticationResult(this.cryptoObj, t, C, !1, o, p, v, void 0, f)]) : [4, this.cacheStorage.saveCacheRecord(C)];
            case 4:
              return A.sent(), [3, 8];
            case 5:
              return this.persistencePlugin && this.serializableCache && E ? (this.logger.verbose("Persistence enabled, calling afterCacheAccess"), [4, this.persistencePlugin.afterCacheAccess(E)]) : [3, 7];
            case 6:
              A.sent(), A.label = 7;
            case 7:
              return [
                7
                /*endfinally*/
              ];
            case 8:
              return [2, r.generateAuthenticationResult(this.cryptoObj, t, C, !1, o, p, v, e, f)];
          }
        });
      });
    }, r.prototype.generateCacheRecord = function(e, t, n, o, a, s, l) {
      var u = t.getPreferredCache();
      if (re.isEmpty(u))
        throw ie.createInvalidCacheEnvironmentError();
      var f, h;
      !re.isEmpty(e.id_token) && a && (f = po.createIdTokenEntity(this.homeAccountIdentifier, u, e.id_token || O.EMPTY_STRING, this.clientId, a.claims.tid || O.EMPTY_STRING), h = this.generateAccountEntity(e, a, t, l));
      var p = null;
      if (!re.isEmpty(e.access_token)) {
        var g = e.scope ? Dt.fromString(e.scope) : new Dt(o.scopes || []), v = (typeof e.expires_in == "string" ? parseInt(e.expires_in, 10) : e.expires_in) || 0, C = (typeof e.ext_expires_in == "string" ? parseInt(e.ext_expires_in, 10) : e.ext_expires_in) || 0, E = (typeof e.refresh_in == "string" ? parseInt(e.refresh_in, 10) : e.refresh_in) || void 0, _ = n + v, I = _ + C, A = E && E > 0 ? n + E : void 0;
        p = go.createAccessTokenEntity(this.homeAccountIdentifier, u, e.access_token || O.EMPTY_STRING, this.clientId, a ? a.claims.tid || O.EMPTY_STRING : t.tenant, g.printScopes(), _, I, this.cryptoObj, A, e.token_type, s, e.key_id, o.claims, o.requestedClaimsHash);
      }
      var S = null;
      re.isEmpty(e.refresh_token) || (S = Jo.createRefreshTokenEntity(this.homeAccountIdentifier, u, e.refresh_token || O.EMPTY_STRING, this.clientId, e.foci, s));
      var R = null;
      return re.isEmpty(e.foci) || (R = cu.createAppMetadataEntity(this.clientId, u, e.foci)), new Wi(h, f, p, S, R);
    }, r.prototype.generateAccountEntity = function(e, t, n, o) {
      var a = n.authorityType, s = o ? o.cloud_graph_host_name : O.EMPTY_STRING, l = o ? o.msgraph_host : O.EMPTY_STRING;
      if (a === Vt.Adfs)
        return this.logger.verbose("Authority type is ADFS, creating ADFS account"), Rt.createGenericAccount(this.homeAccountIdentifier, t, n, s, l);
      if (re.isEmpty(e.client_info) && n.protocolMode === "AAD")
        throw ie.createClientInfoEmptyError();
      return e.client_info ? Rt.createAccount(e.client_info, this.homeAccountIdentifier, t, n, s, l) : Rt.createGenericAccount(this.homeAccountIdentifier, t, n, s, l);
    }, r.generateAuthenticationResult = function(e, t, n, o, a, s, l, u, f) {
      var h, p, g;
      return _e(this, void 0, void 0, function() {
        var v, C, E, _, I, A, S, R, P, L, q;
        return Se(this, function(U) {
          switch (U.label) {
            case 0:
              if (v = O.EMPTY_STRING, C = [], E = null, I = O.EMPTY_STRING, !n.accessToken)
                return [3, 4];
              if (n.accessToken.tokenType !== Ve.POP)
                return [3, 2];
              if (A = new oi(e), S = n.accessToken, R = S.secret, P = S.keyId, !P)
                throw ie.createKeyIdMissingError();
              return [4, A.signPopToken(R, P, a)];
            case 1:
              return v = U.sent(), [3, 3];
            case 2:
              v = n.accessToken.secret, U.label = 3;
            case 3:
              C = Dt.fromString(n.accessToken.target).asArray(), E = new Date(Number(n.accessToken.expiresOn) * 1e3), _ = new Date(Number(n.accessToken.extendedExpiresOn) * 1e3), U.label = 4;
            case 4:
              return n.appMetadata && (I = n.appMetadata.familyId === qi ? qi : O.EMPTY_STRING), L = (s == null ? void 0 : s.claims.oid) || (s == null ? void 0 : s.claims.sub) || O.EMPTY_STRING, q = (s == null ? void 0 : s.claims.tid) || O.EMPTY_STRING, u != null && u.spa_accountid && n.account && (n.account.nativeAccountId = u == null ? void 0 : u.spa_accountid), [2, {
                authority: t.canonicalAuthority,
                uniqueId: L,
                tenantId: q,
                scopes: C,
                account: n.account ? n.account.getAccountInfo() : null,
                idToken: s ? s.rawToken : O.EMPTY_STRING,
                idTokenClaims: s ? s.claims : {},
                accessToken: v,
                fromCache: o,
                expiresOn: E,
                correlationId: a.correlationId,
                requestId: f || O.EMPTY_STRING,
                extExpiresOn: _,
                familyId: I,
                tokenType: ((h = n.accessToken) === null || h === void 0 ? void 0 : h.tokenType) || O.EMPTY_STRING,
                state: l ? l.userRequestState : O.EMPTY_STRING,
                cloudGraphHostName: ((p = n.account) === null || p === void 0 ? void 0 : p.cloudGraphHostName) || O.EMPTY_STRING,
                msGraphHost: ((g = n.account) === null || g === void 0 ? void 0 : g.msGraphHost) || O.EMPTY_STRING,
                code: u == null ? void 0 : u.spa_code,
                fromNativeBroker: !1
              }];
          }
        });
      });
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var am = (
  /** @class */
  function(r) {
    or(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return o.includeRedirectUri = !0, o;
    }
    return e.prototype.getAuthCodeUrl = function(t) {
      var n, o;
      return _e(this, void 0, void 0, function() {
        var a;
        return Se(this, function(s) {
          switch (s.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.GetAuthCodeUrl, t.correlationId), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(F.AuthClientCreateQueryString, t.correlationId), [4, this.createAuthCodeUrlQueryString(t)];
            case 1:
              return a = s.sent(), [2, He.appendQueryString(this.authority.authorizationEndpoint, a)];
          }
        });
      });
    }, e.prototype.acquireToken = function(t, n) {
      var o, a, s, l, u, f;
      return _e(this, void 0, void 0, function() {
        var h, p, g, v, C, E, _ = this;
        return Se(this, function(I) {
          switch (I.label) {
            case 0:
              if (!t || !t.code)
                throw ie.createTokenRequestCannotBeMadeError();
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(F.AuthClientAcquireToken, t.correlationId), h = (a = this.performanceClient) === null || a === void 0 ? void 0 : a.startMeasurement("AuthCodeClientAcquireToken", t.correlationId), this.logger.info("in acquireToken call in auth-code client"), p = Pr.nowSeconds(), (s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(F.AuthClientExecuteTokenRequest, t.correlationId), [4, this.executeTokenRequest(this.authority, t)];
            case 1:
              return g = I.sent(), v = (l = g.headers) === null || l === void 0 ? void 0 : l[mr.X_MS_REQUEST_ID], C = (u = g.headers) === null || u === void 0 ? void 0 : u[mr.X_MS_HTTP_VERSION], C && (h == null || h.addStaticFields({
                httpVerAuthority: C
              })), E = new ks(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin, this.performanceClient), E.validateTokenResponse(g.body), (f = this.performanceClient) === null || f === void 0 || f.setPreQueueTime(F.HandleServerTokenResponse, t.correlationId), [2, E.handleServerTokenResponse(g.body, this.authority, p, t, n, void 0, void 0, void 0, v).then(function(A) {
                return h == null || h.endMeasurement({
                  success: !0
                }), A;
              }).catch(function(A) {
                throw _.logger.verbose("Error in fetching token in ACC", t.correlationId), h == null || h.endMeasurement({
                  errorCode: A.errorCode,
                  subErrorCode: A.subError,
                  success: !1
                }), A;
              })];
          }
        });
      });
    }, e.prototype.handleFragmentResponse = function(t, n) {
      var o = new ks(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, null, null), a = new He(t), s = He.getDeserializedHash(a.getHash());
      if (o.validateServerAuthorizationCodeResponse(s, n, this.cryptoUtils), !s.code)
        throw ie.createNoAuthCodeInServerResponseError();
      return $e($e({}, s), {
        // Code param is optional in ServerAuthorizationCodeResponse but required in AuthorizationCodePaylod
        code: s.code
      });
    }, e.prototype.getLogoutUri = function(t) {
      if (!t)
        throw et.createEmptyLogoutRequestError();
      var n = this.createLogoutUrlQueryString(t);
      return He.appendQueryString(this.authority.endSessionEndpoint, n);
    }, e.prototype.executeTokenRequest = function(t, n) {
      var o, a;
      return _e(this, void 0, void 0, function() {
        var s, l, u, f, h, p, g;
        return Se(this, function(v) {
          switch (v.label) {
            case 0:
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(F.AuthClientExecuteTokenRequest, n.correlationId), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(F.AuthClientCreateTokenRequestBody, n.correlationId), s = this.createTokenQueryParameters(n), l = He.appendQueryString(t.tokenEndpoint, s), [4, this.createTokenRequestBody(n)];
            case 1:
              if (u = v.sent(), f = void 0, n.clientInfo)
                try {
                  h = Is(n.clientInfo, this.cryptoUtils), f = {
                    credential: "" + h.uid + Ct.CLIENT_INFO_SEPARATOR + h.utid,
                    type: gr.HOME_ACCOUNT_ID
                  };
                } catch (C) {
                  this.logger.verbose("Could not parse client info for CCS Header: " + C);
                }
              return p = this.createTokenRequestHeaders(f || n.ccsCredential), g = {
                clientId: this.config.authOptions.clientId,
                authority: t.canonicalAuthority,
                scopes: n.scopes,
                claims: n.claims,
                authenticationScheme: n.authenticationScheme,
                resourceRequestMethod: n.resourceRequestMethod,
                resourceRequestUri: n.resourceRequestUri,
                shrClaims: n.shrClaims,
                sshKid: n.sshKid
              }, [2, this.executePostToTokenEndpoint(l, u, p, g)];
          }
        });
      });
    }, e.prototype.createTokenRequestBody = function(t) {
      var n, o;
      return _e(this, void 0, void 0, function() {
        var a, s, l, u, f, h, p, p, g;
        return Se(this, function(v) {
          switch (v.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.AuthClientCreateTokenRequestBody, t.correlationId), a = new Vi(), a.addClientId(this.config.authOptions.clientId), this.includeRedirectUri ? a.addRedirectUri(t.redirectUri) : uo.validateRedirectUri(t.redirectUri), a.addScopes(t.scopes), a.addAuthorizationCode(t.code), a.addLibraryInfo(this.config.libraryInfo), a.addApplicationTelemetry(this.config.telemetry.application), a.addThrottling(), this.serverTelemetryManager && a.addServerTelemetry(this.serverTelemetryManager), t.codeVerifier && a.addCodeVerifier(t.codeVerifier), this.config.clientCredentials.clientSecret && a.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion && (s = this.config.clientCredentials.clientAssertion, a.addClientAssertion(s.assertion), a.addClientAssertionType(s.assertionType)), a.addGrantType(_s.AUTHORIZATION_CODE_GRANT), a.addClientInfo(), t.authenticationScheme !== Ve.POP ? [3, 2] : (l = new oi(this.cryptoUtils, this.performanceClient), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(F.PopTokenGenerateCnf, t.correlationId), [4, l.generateCnf(t)]);
            case 1:
              return u = v.sent(), a.addPopToken(u.reqCnfString), [3, 3];
            case 2:
              if (t.authenticationScheme === Ve.SSH)
                if (t.sshJwk)
                  a.addSshJwk(t.sshJwk);
                else
                  throw et.createMissingSshJwkError();
              v.label = 3;
            case 3:
              if (f = t.correlationId || this.config.cryptoInterface.createNewGuid(), a.addCorrelationId(f), (!re.isEmptyObj(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && a.addClaims(t.claims, this.config.authOptions.clientCapabilities), h = void 0, t.clientInfo)
                try {
                  p = Is(t.clientInfo, this.cryptoUtils), h = {
                    credential: "" + p.uid + Ct.CLIENT_INFO_SEPARATOR + p.utid,
                    type: gr.HOME_ACCOUNT_ID
                  };
                } catch (C) {
                  this.logger.verbose("Could not parse client info for CCS Header: " + C);
                }
              else
                h = t.ccsCredential;
              if (this.config.systemOptions.preventCorsPreflight && h)
                switch (h.type) {
                  case gr.HOME_ACCOUNT_ID:
                    try {
                      p = Qo(h.credential), a.addCcsOid(p);
                    } catch (C) {
                      this.logger.verbose("Could not parse home account ID for CCS Header: " + C);
                    }
                    break;
                  case gr.UPN:
                    a.addCcsUpn(h.credential);
                    break;
                }
              return t.tokenBodyParameters && a.addExtraQueryParameters(t.tokenBodyParameters), t.enableSpaAuthorizationCode && (!t.tokenBodyParameters || !t.tokenBodyParameters[Ae.RETURN_SPA_CODE]) && a.addExtraQueryParameters((g = {}, g[Ae.RETURN_SPA_CODE] = "1", g)), [2, a.createQueryString()];
          }
        });
      });
    }, e.prototype.createAuthCodeUrlQueryString = function(t) {
      var n;
      return _e(this, void 0, void 0, function() {
        var o, a, s, l, u, f, f, f, h, p;
        return Se(this, function(g) {
          switch (g.label) {
            case 0:
              if ((n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.AuthClientCreateQueryString, t.correlationId), o = new Vi(), o.addClientId(this.config.authOptions.clientId), a = Qs(t.scopes || [], t.extraScopesToConsent || []), o.addScopes(a), o.addRedirectUri(t.redirectUri), s = t.correlationId || this.config.cryptoInterface.createNewGuid(), o.addCorrelationId(s), o.addResponseMode(t.responseMode), o.addResponseTypeCode(), o.addLibraryInfo(this.config.libraryInfo), o.addApplicationTelemetry(this.config.telemetry.application), o.addClientInfo(), t.codeChallenge && t.codeChallengeMethod && o.addCodeChallengeParams(t.codeChallenge, t.codeChallengeMethod), t.prompt && o.addPrompt(t.prompt), t.domainHint && o.addDomainHint(t.domainHint), t.prompt !== Ft.SELECT_ACCOUNT)
                if (t.sid && t.prompt === Ft.NONE)
                  this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request"), o.addSid(t.sid);
                else if (t.account) {
                  if (l = this.extractAccountSid(t.account), u = this.extractLoginHint(t.account), u) {
                    this.logger.verbose("createAuthCodeUrlQueryString: login_hint claim present on account"), o.addLoginHint(u);
                    try {
                      f = Qo(t.account.homeAccountId), o.addCcsOid(f);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  } else if (l && t.prompt === Ft.NONE) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from account"), o.addSid(l);
                    try {
                      f = Qo(t.account.homeAccountId), o.addCcsOid(f);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  } else if (t.loginHint)
                    this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from request"), o.addLoginHint(t.loginHint), o.addCcsUpn(t.loginHint);
                  else if (t.account.username) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from account"), o.addLoginHint(t.account.username);
                    try {
                      f = Qo(t.account.homeAccountId), o.addCcsOid(f);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  }
                } else
                  t.loginHint && (this.logger.verbose("createAuthCodeUrlQueryString: No account, adding login_hint from request"), o.addLoginHint(t.loginHint), o.addCcsUpn(t.loginHint));
              else
                this.logger.verbose("createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints");
              return t.nonce && o.addNonce(t.nonce), t.state && o.addState(t.state), (!re.isEmpty(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && o.addClaims(t.claims, this.config.authOptions.clientCapabilities), t.extraQueryParameters && o.addExtraQueryParameters(t.extraQueryParameters), t.nativeBroker ? (o.addNativeBroker(), t.authenticationScheme !== Ve.POP ? [3, 2] : (h = new oi(this.cryptoUtils), [4, h.generateCnf(t)])) : [3, 2];
            case 1:
              p = g.sent(), o.addPopToken(p.reqCnfString), g.label = 2;
            case 2:
              return [2, o.createQueryString()];
          }
        });
      });
    }, e.prototype.createLogoutUrlQueryString = function(t) {
      var n = new Vi();
      return t.postLogoutRedirectUri && n.addPostLogoutRedirectUri(t.postLogoutRedirectUri), t.correlationId && n.addCorrelationId(t.correlationId), t.idTokenHint && n.addIdTokenHint(t.idTokenHint), t.state && n.addState(t.state), t.logoutHint && n.addLogoutHint(t.logoutHint), t.extraQueryParameters && n.addExtraQueryParameters(t.extraQueryParameters), n.createQueryString();
    }, e.prototype.extractAccountSid = function(t) {
      var n;
      return ((n = t.idTokenClaims) === null || n === void 0 ? void 0 : n.sid) || null;
    }, e.prototype.extractLoginHint = function(t) {
      var n;
      return ((n = t.idTokenClaims) === null || n === void 0 ? void 0 : n.login_hint) || null;
    }, e;
  }(Uu)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var sm = (
  /** @class */
  function(r) {
    or(e, r);
    function e(t, n) {
      return r.call(this, t, n) || this;
    }
    return e.prototype.acquireToken = function(t) {
      var n, o, a, s, l, u, f;
      return _e(this, void 0, void 0, function() {
        var h, p, g, v, C, E, _ = this;
        return Se(this, function(I) {
          switch (I.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.RefreshTokenClientAcquireToken, t.correlationId), h = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(F.RefreshTokenClientAcquireToken, t.correlationId), this.logger.verbose("RefreshTokenClientAcquireToken called", t.correlationId), p = Pr.nowSeconds(), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(F.RefreshTokenClientExecuteTokenRequest, t.correlationId), [4, this.executeTokenRequest(t, this.authority)];
            case 1:
              return g = I.sent(), v = (s = g.headers) === null || s === void 0 ? void 0 : s[mr.X_MS_HTTP_VERSION], h == null || h.addStaticFields({
                refreshTokenSize: ((l = g.body.refresh_token) === null || l === void 0 ? void 0 : l.length) || 0
              }), v && (h == null || h.addStaticFields({
                httpVerToken: v
              })), C = (u = g.headers) === null || u === void 0 ? void 0 : u[mr.X_MS_REQUEST_ID], E = new ks(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin), E.validateTokenResponse(g.body), (f = this.performanceClient) === null || f === void 0 || f.setPreQueueTime(F.HandleServerTokenResponse, t.correlationId), [2, E.handleServerTokenResponse(g.body, this.authority, p, t, void 0, void 0, !0, t.forceCache, C).then(function(A) {
                return h == null || h.endMeasurement({
                  success: !0
                }), A;
              }).catch(function(A) {
                throw _.logger.verbose("Error in fetching refresh token", t.correlationId), h == null || h.endMeasurement({
                  errorCode: A.errorCode,
                  subErrorCode: A.subError,
                  success: !1
                }), A;
              })];
          }
        });
      });
    }, e.prototype.acquireTokenByRefreshToken = function(t) {
      var n, o, a, s;
      return _e(this, void 0, void 0, function() {
        var l, u, f;
        return Se(this, function(h) {
          if (!t)
            throw et.createEmptyTokenRequestError();
          if ((n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.RefreshTokenClientAcquireTokenByRefreshToken, t.correlationId), !t.account)
            throw ie.createNoAccountInSilentRequestError();
          if (l = this.cacheManager.isAppMetadataFOCI(t.account.environment), l)
            try {
              return (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(F.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), [2, this.acquireTokenWithCachedRefreshToken(t, !0)];
            } catch (p) {
              if (u = p instanceof zr && p.errorCode === Xo.noTokensFoundError.code, f = p instanceof wo && p.errorCode === Mp.INVALID_GRANT_ERROR && p.subError === Mp.CLIENT_MISMATCH_ERROR, u || f)
                return (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(F.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), [2, this.acquireTokenWithCachedRefreshToken(t, !1)];
              throw p;
            }
          return (s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(F.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), [2, this.acquireTokenWithCachedRefreshToken(t, !1)];
        });
      });
    }, e.prototype.acquireTokenWithCachedRefreshToken = function(t, n) {
      var o, a, s;
      return _e(this, void 0, void 0, function() {
        var l, u, f;
        return Se(this, function(h) {
          if ((o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(F.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), l = (a = this.performanceClient) === null || a === void 0 ? void 0 : a.startMeasurement(F.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), this.logger.verbose("RefreshTokenClientAcquireTokenWithCachedRefreshToken called", t.correlationId), u = this.cacheManager.getRefreshToken(t.account, n), !u)
            throw l == null || l.discardMeasurement(), zr.createNoTokensFoundError();
          return l == null || l.endMeasurement({
            success: !0
          }), f = $e($e({}, t), { refreshToken: u.secret, authenticationScheme: t.authenticationScheme || Ve.BEARER, ccsCredential: {
            credential: t.account.homeAccountId,
            type: gr.HOME_ACCOUNT_ID
          } }), (s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(F.RefreshTokenClientAcquireToken, t.correlationId), [2, this.acquireToken(f)];
        });
      });
    }, e.prototype.executeTokenRequest = function(t, n) {
      var o, a, s;
      return _e(this, void 0, void 0, function() {
        var l, u, f, h, p, g;
        return Se(this, function(v) {
          switch (v.label) {
            case 0:
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(F.RefreshTokenClientExecuteTokenRequest, t.correlationId), l = (a = this.performanceClient) === null || a === void 0 ? void 0 : a.startMeasurement(F.RefreshTokenClientExecuteTokenRequest, t.correlationId), (s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(F.RefreshTokenClientCreateTokenRequestBody, t.correlationId), u = this.createTokenQueryParameters(t), f = He.appendQueryString(n.tokenEndpoint, u), [4, this.createTokenRequestBody(t)];
            case 1:
              return h = v.sent(), p = this.createTokenRequestHeaders(t.ccsCredential), g = {
                clientId: this.config.authOptions.clientId,
                authority: n.canonicalAuthority,
                scopes: t.scopes,
                claims: t.claims,
                authenticationScheme: t.authenticationScheme,
                resourceRequestMethod: t.resourceRequestMethod,
                resourceRequestUri: t.resourceRequestUri,
                shrClaims: t.shrClaims,
                sshKid: t.sshKid
              }, [2, this.executePostToTokenEndpoint(f, h, p, g).then(function(C) {
                return l == null || l.endMeasurement({
                  success: !0
                }), C;
              }).catch(function(C) {
                throw l == null || l.endMeasurement({
                  success: !1
                }), C;
              })];
          }
        });
      });
    }, e.prototype.createTokenRequestBody = function(t) {
      var n, o, a;
      return _e(this, void 0, void 0, function() {
        var s, l, u, f, h, p, g;
        return Se(this, function(v) {
          switch (v.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.RefreshTokenClientCreateTokenRequestBody, t.correlationId), s = t.correlationId, l = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(F.BaseClientCreateTokenRequestHeaders, s), u = new Vi(), u.addClientId(this.config.authOptions.clientId), u.addScopes(t.scopes), u.addGrantType(_s.REFRESH_TOKEN_GRANT), u.addClientInfo(), u.addLibraryInfo(this.config.libraryInfo), u.addApplicationTelemetry(this.config.telemetry.application), u.addThrottling(), this.serverTelemetryManager && u.addServerTelemetry(this.serverTelemetryManager), u.addCorrelationId(s), u.addRefreshToken(t.refreshToken), this.config.clientCredentials.clientSecret && u.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion && (f = this.config.clientCredentials.clientAssertion, u.addClientAssertion(f.assertion), u.addClientAssertionType(f.assertionType)), t.authenticationScheme !== Ve.POP ? [3, 2] : (h = new oi(this.cryptoUtils, this.performanceClient), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(F.PopTokenGenerateCnf, t.correlationId), [4, h.generateCnf(t)]);
            case 1:
              return p = v.sent(), u.addPopToken(p.reqCnfString), [3, 3];
            case 2:
              if (t.authenticationScheme === Ve.SSH)
                if (t.sshJwk)
                  u.addSshJwk(t.sshJwk);
                else
                  throw l == null || l.endMeasurement({
                    success: !1
                  }), et.createMissingSshJwkError();
              v.label = 3;
            case 3:
              if ((!re.isEmptyObj(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && u.addClaims(t.claims, this.config.authOptions.clientCapabilities), this.config.systemOptions.preventCorsPreflight && t.ccsCredential)
                switch (t.ccsCredential.type) {
                  case gr.HOME_ACCOUNT_ID:
                    try {
                      g = Qo(t.ccsCredential.credential), u.addCcsOid(g);
                    } catch (C) {
                      this.logger.verbose("Could not parse home account ID for CCS Header: " + C);
                    }
                    break;
                  case gr.UPN:
                    u.addCcsUpn(t.ccsCredential.credential);
                    break;
                }
              return l == null || l.endMeasurement({
                success: !0
              }), [2, u.createQueryString()];
          }
        });
      });
    }, e;
  }(Uu)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var BI = (
  /** @class */
  function(r) {
    or(e, r);
    function e(t, n) {
      return r.call(this, t, n) || this;
    }
    return e.prototype.acquireToken = function(t) {
      return _e(this, void 0, void 0, function() {
        var n, o;
        return Se(this, function(a) {
          switch (a.label) {
            case 0:
              return a.trys.push([0, 2, , 3]), [4, this.acquireCachedToken(t)];
            case 1:
              return [2, a.sent()];
            case 2:
              if (n = a.sent(), n instanceof ie && n.errorCode === j.tokenRefreshRequired.code)
                return o = new sm(this.config, this.performanceClient), [2, o.acquireTokenByRefreshToken(t)];
              throw n;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.acquireCachedToken = function(t) {
      var n, o, a, s, l;
      return _e(this, void 0, void 0, function() {
        var u, f;
        return Se(this, function(h) {
          switch (h.label) {
            case 0:
              if (!t)
                throw et.createEmptyTokenRequestError();
              if (t.forceRefresh)
                throw (n = this.serverTelemetryManager) === null || n === void 0 || n.setCacheOutcome(Gn.FORCE_REFRESH), this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because forceRefresh is true."), ie.createRefreshRequiredError();
              if (!this.config.cacheOptions.claimsBasedCachingEnabled && !re.isEmptyObj(t.claims))
                throw (o = this.serverTelemetryManager) === null || o === void 0 || o.setCacheOutcome(Gn.CLAIMS_REQUESTED_CACHE_SKIPPED), this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because claims-based caching is disabled and claims were requested."), ie.createRefreshRequiredError();
              if (!t.account)
                throw ie.createNoAccountInSilentRequestError();
              if (u = t.authority || this.authority.getPreferredCache(), f = this.cacheManager.readCacheRecord(t.account, t, u), f.accessToken) {
                if (Pr.wasClockTurnedBack(f.accessToken.cachedAt) || Pr.isTokenExpired(f.accessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds))
                  throw (s = this.serverTelemetryManager) === null || s === void 0 || s.setCacheOutcome(Gn.CACHED_ACCESS_TOKEN_EXPIRED), this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token is expired or will expire within " + this.config.systemOptions.tokenRenewalOffsetSeconds + " seconds."), ie.createRefreshRequiredError();
                if (f.accessToken.refreshOn && Pr.isTokenExpired(f.accessToken.refreshOn, 0))
                  throw (l = this.serverTelemetryManager) === null || l === void 0 || l.setCacheOutcome(Gn.REFRESH_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token's refreshOn property has been exceeded'."), ie.createRefreshRequiredError();
              } else
                throw (a = this.serverTelemetryManager) === null || a === void 0 || a.setCacheOutcome(Gn.NO_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties."), ie.createRefreshRequiredError();
              return this.config.serverTelemetryManager && this.config.serverTelemetryManager.incrementCacheHits(), [4, this.generateResultFromCacheRecord(f, t)];
            case 1:
              return [2, h.sent()];
          }
        });
      });
    }, e.prototype.generateResultFromCacheRecord = function(t, n) {
      return _e(this, void 0, void 0, function() {
        var o, a;
        return Se(this, function(s) {
          switch (s.label) {
            case 0:
              if (t.idToken && (o = new sn(t.idToken.secret, this.config.cryptoInterface)), n.maxAge || n.maxAge === 0) {
                if (a = o == null ? void 0 : o.claims.auth_time, !a)
                  throw ie.createAuthTimeNotFoundError();
                sn.checkMaxAge(a, n.maxAge);
              }
              return [4, ks.generateAuthenticationResult(this.cryptoUtils, this.authority, t, !0, n, o)];
            case 1:
              return [2, s.sent()];
          }
        });
      });
    }, e;
  }(Uu)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
function KI(r) {
  return r.hasOwnProperty("authorization_endpoint") && r.hasOwnProperty("token_endpoint") && r.hasOwnProperty("issuer") && r.hasOwnProperty("jwks_uri");
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
var cm = { endpointMetadata: { "https://login.microsoftonline.com/common/": { token_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/common/": { token_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/common/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/common/": { token_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/consumers/": { token_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/consumers/": { token_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/consumers/": { token_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/organizations/": { token_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/organizations/": { token_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/organizations/": { token_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" } }, instanceDiscoveryMetadata: { "https://login.microsoftonline.com/common/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/common/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/common/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/consumers/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/consumers/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/consumers/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/organizations/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/organizations/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/organizations/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] } } }, Lp = cm.endpointMetadata, Dp = cm.instanceDiscoveryMetadata;
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Ji;
(function(r) {
  r.AAD = "AAD", r.OIDC = "OIDC";
})(Ji || (Ji = {}));
/*! @azure/msal-common v13.3.1 2023-10-27 */
var lu = (
  /** @class */
  function() {
    function r() {
      this.expiresAt = Pr.nowSeconds() + $i.REFRESH_TIME_SECONDS;
    }
    return r.prototype.updateCloudDiscoveryMetadata = function(e, t) {
      this.aliases = e.aliases, this.preferred_cache = e.preferred_cache, this.preferred_network = e.preferred_network, this.aliasesFromNetwork = t;
    }, r.prototype.updateEndpointMetadata = function(e, t) {
      this.authorization_endpoint = e.authorization_endpoint, this.token_endpoint = e.token_endpoint, this.end_session_endpoint = e.end_session_endpoint, this.issuer = e.issuer, this.endpointsFromNetwork = t, this.jwks_uri = e.jwks_uri;
    }, r.prototype.updateCanonicalAuthority = function(e) {
      this.canonical_authority = e;
    }, r.prototype.resetExpiresAt = function() {
      this.expiresAt = Pr.nowSeconds() + $i.REFRESH_TIME_SECONDS;
    }, r.prototype.isExpired = function() {
      return this.expiresAt <= Pr.nowSeconds();
    }, r.isAuthorityMetadataEntity = function(e, t) {
      return t ? e.indexOf($i.CACHE_KEY) === 0 && t.hasOwnProperty("aliases") && t.hasOwnProperty("preferred_cache") && t.hasOwnProperty("preferred_network") && t.hasOwnProperty("canonical_authority") && t.hasOwnProperty("authorization_endpoint") && t.hasOwnProperty("token_endpoint") && t.hasOwnProperty("issuer") && t.hasOwnProperty("aliasesFromNetwork") && t.hasOwnProperty("endpointsFromNetwork") && t.hasOwnProperty("expiresAt") && t.hasOwnProperty("jwks_uri") : !1;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
function qI(r) {
  return r.hasOwnProperty("tenant_discovery_endpoint") && r.hasOwnProperty("metadata");
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
function $I(r) {
  return r.hasOwnProperty("error") && r.hasOwnProperty("error_description");
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
var GI = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.networkInterface = e, this.performanceClient = t, this.correlationId = n;
    }
    return r.prototype.detectRegion = function(e, t) {
      var n, o, a, s;
      return _e(this, void 0, void 0, function() {
        var l, u, f, h, p;
        return Se(this, function(g) {
          switch (g.label) {
            case 0:
              if ((n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.RegionDiscoveryDetectRegion, this.correlationId), l = e, l)
                return [3, 8];
              u = r.IMDS_OPTIONS, g.label = 1;
            case 1:
              return g.trys.push([1, 6, , 7]), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(F.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [4, this.getRegionFromIMDS(O.IMDS_VERSION, u)];
            case 2:
              return f = g.sent(), f.status === Yo.httpSuccess && (l = f.body, t.region_source = qn.IMDS), f.status !== Yo.httpBadRequest ? [3, 5] : ((a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(F.RegionDiscoveryGetCurrentVersion, this.correlationId), [4, this.getCurrentVersion(u)]);
            case 3:
              return h = g.sent(), h ? ((s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(F.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [4, this.getRegionFromIMDS(h, u)]) : (t.region_source = qn.FAILED_AUTO_DETECTION, [2, null]);
            case 4:
              p = g.sent(), p.status === Yo.httpSuccess && (l = p.body, t.region_source = qn.IMDS), g.label = 5;
            case 5:
              return [3, 7];
            case 6:
              return g.sent(), t.region_source = qn.FAILED_AUTO_DETECTION, [2, null];
            case 7:
              return [3, 9];
            case 8:
              t.region_source = qn.ENVIRONMENT_VARIABLE, g.label = 9;
            case 9:
              return l || (t.region_source = qn.FAILED_AUTO_DETECTION), [2, l || null];
          }
        });
      });
    }, r.prototype.getRegionFromIMDS = function(e, t) {
      var n;
      return _e(this, void 0, void 0, function() {
        return Se(this, function(o) {
          return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [2, this.networkInterface.sendGetRequestAsync(O.IMDS_ENDPOINT + "?api-version=" + e + "&format=text", t, O.IMDS_TIMEOUT)];
        });
      });
    }, r.prototype.getCurrentVersion = function(e) {
      var t;
      return _e(this, void 0, void 0, function() {
        var n;
        return Se(this, function(o) {
          switch (o.label) {
            case 0:
              (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(F.RegionDiscoveryGetCurrentVersion, this.correlationId), o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(O.IMDS_ENDPOINT + "?format=json", e)];
            case 2:
              return n = o.sent(), n.status === Yo.httpBadRequest && n.body && n.body["newest-versions"] && n.body["newest-versions"].length > 0 ? [2, n.body["newest-versions"][0]] : [2, null];
            case 3:
              return o.sent(), [2, null];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.IMDS_OPTIONS = {
      headers: {
        Metadata: "true"
      }
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Xi = (
  /** @class */
  function() {
    function r(e, t, n, o, a, s, l) {
      this.canonicalAuthority = e, this._canonicalAuthority.validateAsUri(), this.networkInterface = t, this.cacheManager = n, this.authorityOptions = o, this.regionDiscoveryMetadata = { region_used: void 0, region_source: void 0, region_outcome: void 0 }, this.logger = a, this.performanceClient = s, this.correlationId = l, this.regionDiscovery = new GI(t, this.performanceClient, this.correlationId);
    }
    return r.prototype.getAuthorityType = function(e) {
      if (e.HostNameAndPort.endsWith(O.CIAM_AUTH_URL))
        return Vt.Ciam;
      var t = e.PathSegments;
      if (t.length)
        switch (t[0].toLowerCase()) {
          case O.ADFS:
            return Vt.Adfs;
          case O.DSTS:
            return Vt.Dsts;
        }
      return Vt.Default;
    }, Object.defineProperty(r.prototype, "authorityType", {
      // See above for AuthorityType
      get: function() {
        return this.getAuthorityType(this.canonicalAuthorityUrlComponents);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "protocolMode", {
      /**
       * ProtocolMode enum representing the way endpoints are constructed.
       */
      get: function() {
        return this.authorityOptions.protocolMode;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "options", {
      /**
       * Returns authorityOptions which can be used to reinstantiate a new authority instance
       */
      get: function() {
        return this.authorityOptions;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "canonicalAuthority", {
      /**
       * A URL that is the authority set by the developer
       */
      get: function() {
        return this._canonicalAuthority.urlString;
      },
      /**
       * Sets canonical authority.
       */
      set: function(e) {
        this._canonicalAuthority = new He(e), this._canonicalAuthority.validateAsUri(), this._canonicalAuthorityUrlComponents = null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "canonicalAuthorityUrlComponents", {
      /**
       * Get authority components.
       */
      get: function() {
        return this._canonicalAuthorityUrlComponents || (this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents()), this._canonicalAuthorityUrlComponents;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "hostnameAndPort", {
      /**
       * Get hostname and port i.e. login.microsoftonline.com
       */
      get: function() {
        return this.canonicalAuthorityUrlComponents.HostNameAndPort.toLowerCase();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "tenant", {
      /**
       * Get tenant for authority.
       */
      get: function() {
        return this.canonicalAuthorityUrlComponents.PathSegments[0];
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "authorizationEndpoint", {
      /**
       * OAuth /authorize endpoint for requests
       */
      get: function() {
        if (this.discoveryComplete())
          return this.replacePath(this.metadata.authorization_endpoint);
        throw ie.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "tokenEndpoint", {
      /**
       * OAuth /token endpoint for requests
       */
      get: function() {
        if (this.discoveryComplete())
          return this.replacePath(this.metadata.token_endpoint);
        throw ie.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "deviceCodeEndpoint", {
      get: function() {
        if (this.discoveryComplete())
          return this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));
        throw ie.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "endSessionEndpoint", {
      /**
       * OAuth logout endpoint for requests
       */
      get: function() {
        if (this.discoveryComplete()) {
          if (!this.metadata.end_session_endpoint)
            throw ie.createLogoutNotSupportedError();
          return this.replacePath(this.metadata.end_session_endpoint);
        } else
          throw ie.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "selfSignedJwtAudience", {
      /**
       * OAuth issuer for requests
       */
      get: function() {
        if (this.discoveryComplete())
          return this.replacePath(this.metadata.issuer);
        throw ie.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "jwksUri", {
      /**
       * Jwks_uri for token signing keys
       */
      get: function() {
        if (this.discoveryComplete())
          return this.replacePath(this.metadata.jwks_uri);
        throw ie.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.canReplaceTenant = function(e) {
      return e.PathSegments.length === 1 && !r.reservedTenantDomains.has(e.PathSegments[0]) && this.getAuthorityType(e) === Vt.Default && this.protocolMode === Ji.AAD;
    }, r.prototype.replaceTenant = function(e) {
      return e.replace(/{tenant}|{tenantid}/g, this.tenant);
    }, r.prototype.replacePath = function(e) {
      var t = this, n = e, o = new He(this.metadata.canonical_authority), a = o.getUrlComponents(), s = a.PathSegments, l = this.canonicalAuthorityUrlComponents.PathSegments;
      return l.forEach(function(u, f) {
        var h = s[f];
        if (f === 0 && t.canReplaceTenant(a)) {
          var p = new He(t.metadata.authorization_endpoint).getUrlComponents().PathSegments[0];
          h !== p && (t.logger.verbose("Replacing tenant domain name " + h + " with id " + p), h = p);
        }
        u !== h && (n = n.replace("/" + h + "/", "/" + u + "/"));
      }), this.replaceTenant(n);
    }, Object.defineProperty(r.prototype, "defaultOpenIdConfigurationEndpoint", {
      /**
       * The default open id configuration endpoint for any canonical authority.
       */
      get: function() {
        return this.authorityType === Vt.Adfs || this.authorityType === Vt.Dsts || this.protocolMode === Ji.OIDC ? this.canonicalAuthority + ".well-known/openid-configuration" : this.canonicalAuthority + "v2.0/.well-known/openid-configuration";
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.discoveryComplete = function() {
      return !!this.metadata;
    }, r.prototype.resolveEndpointsAsync = function() {
      var e, t, n;
      return _e(this, void 0, void 0, function() {
        var o, a, s, l;
        return Se(this, function(u) {
          switch (u.label) {
            case 0:
              return (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(F.AuthorityResolveEndpointsAsync, this.correlationId), o = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort), o || (o = new lu(), o.updateCanonicalAuthority(this.canonicalAuthority)), (t = this.performanceClient) === null || t === void 0 || t.setPreQueueTime(F.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId), [4, this.updateCloudDiscoveryMetadata(o)];
            case 1:
              return a = u.sent(), this.canonicalAuthority = this.canonicalAuthority.replace(this.hostnameAndPort, o.preferred_network), (n = this.performanceClient) === null || n === void 0 || n.setPreQueueTime(F.AuthorityUpdateEndpointMetadata, this.correlationId), [4, this.updateEndpointMetadata(o)];
            case 2:
              return s = u.sent(), a !== kr.CACHE && s !== kr.CACHE && (o.resetExpiresAt(), o.updateCanonicalAuthority(this.canonicalAuthority)), l = this.cacheManager.generateAuthorityMetadataCacheKey(o.preferred_cache), this.cacheManager.setAuthorityMetadata(l, o), this.metadata = o, [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.updateEndpointMetadata = function(e) {
      var t, n, o, a, s, l;
      return _e(this, void 0, void 0, function() {
        var u, f;
        return Se(this, function(h) {
          switch (h.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(F.AuthorityUpdateEndpointMetadata, this.correlationId), u = this.getEndpointMetadataFromConfig(), u ? (e.updateEndpointMetadata(u, !1), [2, kr.CONFIG]) : this.isAuthoritySameType(e) && e.endpointsFromNetwork && !e.isExpired() ? [2, kr.CACHE] : ((n = this.performanceClient) === null || n === void 0 || n.setPreQueueTime(F.AuthorityGetEndpointMetadataFromNetwork, this.correlationId), [4, this.getEndpointMetadataFromNetwork()]);
            case 1:
              return u = h.sent(), u ? !((o = this.authorityOptions.azureRegionConfiguration) === null || o === void 0) && o.azureRegion ? ((a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(F.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId), [4, this.updateMetadataWithRegionalInformation(u)]) : [3, 3] : [3, 4];
            case 2:
              u = h.sent(), h.label = 3;
            case 3:
              return e.updateEndpointMetadata(u, !0), [2, kr.NETWORK];
            case 4:
              return f = this.getEndpointMetadataFromHardcodedValues(), f && !this.authorityOptions.skipAuthorityMetadataCache ? !((s = this.authorityOptions.azureRegionConfiguration) === null || s === void 0) && s.azureRegion ? ((l = this.performanceClient) === null || l === void 0 || l.setPreQueueTime(F.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId), [4, this.updateMetadataWithRegionalInformation(f)]) : [3, 6] : [3, 7];
            case 5:
              f = h.sent(), h.label = 6;
            case 6:
              return e.updateEndpointMetadata(f, !1), [2, kr.HARDCODED_VALUES];
            case 7:
              throw ie.createUnableToGetOpenidConfigError(this.defaultOpenIdConfigurationEndpoint);
          }
        });
      });
    }, r.prototype.isAuthoritySameType = function(e) {
      var t = new He(e.canonical_authority), n = t.getUrlComponents().PathSegments;
      return n.length === this.canonicalAuthorityUrlComponents.PathSegments.length;
    }, r.prototype.getEndpointMetadataFromConfig = function() {
      if (this.authorityOptions.authorityMetadata)
        try {
          return JSON.parse(this.authorityOptions.authorityMetadata);
        } catch {
          throw et.createInvalidAuthorityMetadataError();
        }
      return null;
    }, r.prototype.getEndpointMetadataFromNetwork = function() {
      var e;
      return _e(this, void 0, void 0, function() {
        var t, n;
        return Se(this, function(o) {
          switch (o.label) {
            case 0:
              (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(F.AuthorityGetEndpointMetadataFromNetwork, this.correlationId), t = {}, o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(this.defaultOpenIdConfigurationEndpoint, t)];
            case 2:
              return n = o.sent(), [2, KI(n.body) ? n.body : null];
            case 3:
              return o.sent(), [2, null];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.getEndpointMetadataFromHardcodedValues = function() {
      return this.canonicalAuthority in Lp ? Lp[this.canonicalAuthority] : null;
    }, r.prototype.updateMetadataWithRegionalInformation = function(e) {
      var t, n, o, a;
      return _e(this, void 0, void 0, function() {
        var s, l;
        return Se(this, function(u) {
          switch (u.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(F.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId), s = (n = this.authorityOptions.azureRegionConfiguration) === null || n === void 0 ? void 0 : n.azureRegion, s ? s !== O.AZURE_REGION_AUTO_DISCOVER_FLAG ? (this.regionDiscoveryMetadata.region_outcome = zi.CONFIGURED_NO_AUTO_DETECTION, this.regionDiscoveryMetadata.region_used = s, [2, r.replaceWithRegionalInformation(e, s)]) : ((o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(F.RegionDiscoveryDetectRegion, this.correlationId), [4, this.regionDiscovery.detectRegion((a = this.authorityOptions.azureRegionConfiguration) === null || a === void 0 ? void 0 : a.environmentRegion, this.regionDiscoveryMetadata)]) : [3, 2];
            case 1:
              if (l = u.sent(), l)
                return this.regionDiscoveryMetadata.region_outcome = zi.AUTO_DETECTION_REQUESTED_SUCCESSFUL, this.regionDiscoveryMetadata.region_used = l, [2, r.replaceWithRegionalInformation(e, l)];
              this.regionDiscoveryMetadata.region_outcome = zi.AUTO_DETECTION_REQUESTED_FAILED, u.label = 2;
            case 2:
              return [2, e];
          }
        });
      });
    }, r.prototype.updateCloudDiscoveryMetadata = function(e) {
      var t, n;
      return _e(this, void 0, void 0, function() {
        var o, a, s;
        return Se(this, function(l) {
          switch (l.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(F.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId), this.logger.verbose("Attempting to get cloud discovery metadata in the config"), this.logger.verbosePii("Known Authorities: " + (this.authorityOptions.knownAuthorities || O.NOT_APPLICABLE)), this.logger.verbosePii("Authority Metadata: " + (this.authorityOptions.authorityMetadata || O.NOT_APPLICABLE)), this.logger.verbosePii("Canonical Authority: " + (e.canonical_authority || O.NOT_APPLICABLE)), o = this.getCloudDiscoveryMetadataFromConfig(), o ? (this.logger.verbose("Found cloud discovery metadata in the config."), e.updateCloudDiscoveryMetadata(o, !1), [2, kr.CONFIG]) : (this.logger.verbose("Did not find cloud discovery metadata in the config... Attempting to get cloud discovery metadata from the cache."), a = e.isExpired(), this.isAuthoritySameType(e) && e.aliasesFromNetwork && !a ? (this.logger.verbose("Found metadata in the cache."), [2, kr.CACHE]) : (a && this.logger.verbose("The metadata entity is expired."), this.logger.verbose("Did not find cloud discovery metadata in the cache... Attempting to get cloud discovery metadata from the network."), (n = this.performanceClient) === null || n === void 0 || n.setPreQueueTime(F.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId), [4, this.getCloudDiscoveryMetadataFromNetwork()]));
            case 1:
              if (o = l.sent(), o)
                return this.logger.verbose("cloud discovery metadata was successfully returned from getCloudDiscoveryMetadataFromNetwork()"), e.updateCloudDiscoveryMetadata(o, !0), [2, kr.NETWORK];
              if (this.logger.verbose("Did not find cloud discovery metadata from the network... Attempting to get cloud discovery metadata from hardcoded values."), s = this.getCloudDiscoveryMetadataFromHarcodedValues(), s && !this.options.skipAuthorityMetadataCache)
                return this.logger.verbose("Found cloud discovery metadata from hardcoded values."), e.updateCloudDiscoveryMetadata(s, !1), [2, kr.HARDCODED_VALUES];
              throw this.logger.error("Did not find cloud discovery metadata from hardcoded values... Metadata could not be obtained from config, cache, network or hardcoded values. Throwing Untrusted Authority Error."), et.createUntrustedAuthorityError();
          }
        });
      });
    }, r.prototype.getCloudDiscoveryMetadataFromConfig = function() {
      if (this.authorityType === Vt.Ciam)
        return this.logger.verbose("CIAM authorities do not support cloud discovery metadata, generate the aliases from authority host."), r.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
      if (this.authorityOptions.cloudDiscoveryMetadata) {
        this.logger.verbose("The cloud discovery metadata has been provided as a network response, in the config.");
        try {
          this.logger.verbose("Attempting to parse the cloud discovery metadata.");
          var e = JSON.parse(this.authorityOptions.cloudDiscoveryMetadata), t = r.getCloudDiscoveryMetadataFromNetworkResponse(e.metadata, this.hostnameAndPort);
          if (this.logger.verbose("Parsed the cloud discovery metadata."), t)
            return this.logger.verbose("There is returnable metadata attached to the parsed cloud discovery metadata."), t;
          this.logger.verbose("There is no metadata attached to the parsed cloud discovery metadata.");
        } catch {
          throw this.logger.verbose("Unable to parse the cloud discovery metadata. Throwing Invalid Cloud Discovery Metadata Error."), et.createInvalidCloudDiscoveryMetadataError();
        }
      }
      return this.isInKnownAuthorities() ? (this.logger.verbose("The host is included in knownAuthorities. Creating new cloud discovery metadata from the host."), r.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort)) : null;
    }, r.prototype.getCloudDiscoveryMetadataFromNetwork = function() {
      var e;
      return _e(this, void 0, void 0, function() {
        var t, n, o, a, s, l, u, f;
        return Se(this, function(h) {
          switch (h.label) {
            case 0:
              (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(F.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId), t = "" + O.AAD_INSTANCE_DISCOVERY_ENDPT + this.canonicalAuthority + "oauth2/v2.0/authorize", n = {}, o = null, h.label = 1;
            case 1:
              return h.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(t, n)];
            case 2:
              if (a = h.sent(), s = void 0, l = void 0, qI(a.body))
                s = a.body, l = s.metadata, this.logger.verbosePii("tenant_discovery_endpoint is: " + s.tenant_discovery_endpoint);
              else if ($I(a.body)) {
                if (this.logger.warning("A CloudInstanceDiscoveryErrorResponse was returned. The cloud instance discovery network request's status code is: " + a.status), s = a.body, s.error === O.INVALID_INSTANCE)
                  return this.logger.error("The CloudInstanceDiscoveryErrorResponse error is invalid_instance."), [2, null];
                this.logger.warning("The CloudInstanceDiscoveryErrorResponse error is " + s.error), this.logger.warning("The CloudInstanceDiscoveryErrorResponse error description is " + s.error_description), this.logger.warning("Setting the value of the CloudInstanceDiscoveryMetadata (returned from the network) to []"), l = [];
              } else
                return this.logger.error("AAD did not return a CloudInstanceDiscoveryResponse or CloudInstanceDiscoveryErrorResponse"), [2, null];
              return this.logger.verbose("Attempting to find a match between the developer's authority and the CloudInstanceDiscoveryMetadata returned from the network request."), o = r.getCloudDiscoveryMetadataFromNetworkResponse(l, this.hostnameAndPort), [3, 4];
            case 3:
              return u = h.sent(), u instanceof ue ? this.logger.error(`There was a network error while attempting to get the cloud discovery instance metadata.
Error: ` + u.errorCode + `
Error Description: ` + u.errorMessage) : (f = u, this.logger.error(`A non-MSALJS error was thrown while attempting to get the cloud instance discovery metadata.
Error: ` + f.name + `
Error Description: ` + f.message)), [2, null];
            case 4:
              return o || (this.logger.warning("The developer's authority was not found within the CloudInstanceDiscoveryMetadata returned from the network request."), this.logger.verbose("Creating custom Authority for custom domain scenario."), o = r.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort)), [2, o];
          }
        });
      });
    }, r.prototype.getCloudDiscoveryMetadataFromHarcodedValues = function() {
      return this.canonicalAuthority in Dp ? Dp[this.canonicalAuthority] : null;
    }, r.prototype.isInKnownAuthorities = function() {
      var e = this, t = this.authorityOptions.knownAuthorities.filter(function(n) {
        return He.getDomainFromUrl(n).toLowerCase() === e.hostnameAndPort;
      });
      return t.length > 0;
    }, r.generateAuthority = function(e, t) {
      var n;
      if (t && t.azureCloudInstance !== Qi.None) {
        var o = t.tenant ? t.tenant : O.DEFAULT_COMMON_TENANT;
        n = t.azureCloudInstance + "/" + o + "/";
      }
      return n || e;
    }, r.createCloudDiscoveryMetadataFromHost = function(e) {
      return {
        preferred_network: e,
        preferred_cache: e,
        aliases: [e]
      };
    }, r.getCloudDiscoveryMetadataFromNetworkResponse = function(e, t) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        if (o.aliases.indexOf(t) > -1)
          return o;
      }
      return null;
    }, r.prototype.getPreferredCache = function() {
      if (this.discoveryComplete())
        return this.metadata.preferred_cache;
      throw ie.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
    }, r.prototype.isAlias = function(e) {
      return this.metadata.aliases.indexOf(e) > -1;
    }, r.isPublicCloudAuthority = function(e) {
      return O.KNOWN_PUBLIC_CLOUDS.indexOf(e) >= 0;
    }, r.buildRegionalAuthorityString = function(e, t, n) {
      var o = new He(e);
      o.validateAsUri();
      var a = o.getUrlComponents(), s = t + "." + a.HostNameAndPort;
      this.isPublicCloudAuthority(a.HostNameAndPort) && (s = t + "." + O.REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX);
      var l = He.constructAuthorityUriFromObject($e($e({}, o.getUrlComponents()), { HostNameAndPort: s })).urlString;
      return n ? l + "?" + n : l;
    }, r.replaceWithRegionalInformation = function(e, t) {
      return e.authorization_endpoint = r.buildRegionalAuthorityString(e.authorization_endpoint, t), e.token_endpoint = r.buildRegionalAuthorityString(e.token_endpoint, t, O.REGIONAL_AUTH_NON_MSI_QUERY_STRING), e.end_session_endpoint && (e.end_session_endpoint = r.buildRegionalAuthorityString(e.end_session_endpoint, t)), e;
    }, r.transformCIAMAuthority = function(e) {
      var t = e.endsWith(O.FORWARD_SLASH) ? e : "" + e + O.FORWARD_SLASH, n = new He(e), o = n.getUrlComponents();
      if (o.PathSegments.length === 0 && o.HostNameAndPort.endsWith(O.CIAM_AUTH_URL)) {
        var a = o.HostNameAndPort.split(".")[0];
        t = "" + t + a + O.AAD_TENANT_DOMAIN_SUFFIX;
      }
      return t;
    }, r.reservedTenantDomains = /* @__PURE__ */ new Set([
      "{tenant}",
      "{tenantid}",
      mo.COMMON,
      mo.CONSUMERS,
      mo.ORGANIZATIONS
    ]), r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Ps = (
  /** @class */
  function() {
    function r() {
    }
    return r.createDiscoveredInstance = function(e, t, n, o, a, s, l) {
      return _e(this, void 0, void 0, function() {
        var u, f, h;
        return Se(this, function(p) {
          switch (p.label) {
            case 0:
              s == null || s.addQueueMeasurement(F.AuthorityFactoryCreateDiscoveredInstance, l), u = Xi.transformCIAMAuthority(e), f = r.createInstance(u, t, n, o, a, s, l), p.label = 1;
            case 1:
              return p.trys.push([1, 3, , 4]), s == null || s.setPreQueueTime(F.AuthorityResolveEndpointsAsync, l), [4, f.resolveEndpointsAsync()];
            case 2:
              return p.sent(), [2, f];
            case 3:
              throw h = p.sent(), ie.createEndpointDiscoveryIncompleteError(h);
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.createInstance = function(e, t, n, o, a, s, l) {
      if (re.isEmpty(e))
        throw et.createUrlEmptyError();
      return new Xi(e, t, n, o, a, s, l);
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Ns = (
  /** @class */
  function() {
    function r() {
      this.failedRequests = [], this.errors = [], this.cacheHits = 0;
    }
    return r.isServerTelemetryEntity = function(e, t) {
      var n = e.indexOf(It.CACHE_KEY) === 0, o = !0;
      return t && (o = t.hasOwnProperty("failedRequests") && t.hasOwnProperty("errors") && t.hasOwnProperty("cacheHits")), n && o;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Up = (
  /** @class */
  function() {
    function r() {
    }
    return r.isThrottlingEntity = function(e, t) {
      var n = !1;
      e && (n = e.indexOf(Gi.THROTTLING_PREFIX) === 0);
      var o = !0;
      return t && (o = t.hasOwnProperty("throttleTime")), n && o;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var zI = {
  sendGetRequestAsync: function() {
    var r = "Network interface - sendGetRequestAsync() has not been implemented for the Network interface.";
    return Promise.reject(ue.createUnexpectedError(r));
  },
  sendPostRequestAsync: function() {
    var r = "Network interface - sendPostRequestAsync() has not been implemented for the Network interface.";
    return Promise.reject(ue.createUnexpectedError(r));
  }
};
/*! @azure/msal-common v13.3.1 2023-10-27 */
var cs = {
  missingKidError: {
    code: "missing_kid_error",
    desc: "The JOSE Header for the requested JWT, JWS or JWK object requires a keyId to be configured as the 'kid' header claim. No 'kid' value was provided."
  },
  missingAlgError: {
    code: "missing_alg_error",
    desc: "The JOSE Header for the requested JWT, JWS or JWK object requires an algorithm to be specified as the 'alg' header claim. No 'alg' value was provided."
  }
}, Fp = (
  /** @class */
  function(r) {
    or(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return o.name = "JoseHeaderError", Object.setPrototypeOf(o, e.prototype), o;
    }
    return e.createMissingKidError = function() {
      return new e(cs.missingKidError.code, cs.missingKidError.desc);
    }, e.createMissingAlgError = function() {
      return new e(cs.missingAlgError.code, cs.missingAlgError.desc);
    }, e;
  }(ue)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var VI = (
  /** @class */
  function() {
    function r(e) {
      this.typ = e.typ, this.alg = e.alg, this.kid = e.kid;
    }
    return r.getShrHeaderString = function(e) {
      if (!e.kid)
        throw Fp.createMissingKidError();
      if (!e.alg)
        throw Fp.createMissingAlgError();
      var t = new r({
        // Access Token PoP headers must have type pop, but the type header can be overriden for special cases
        typ: e.typ || au.Pop,
        kid: e.kid,
        alg: e.alg
      });
      return JSON.stringify(t);
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var WI = (
  /** @class */
  function() {
    function r(e, t) {
      this.cacheOutcome = Gn.NO_CACHE_HIT, this.cacheManager = t, this.apiId = e.apiId, this.correlationId = e.correlationId, this.wrapperSKU = e.wrapperSKU || O.EMPTY_STRING, this.wrapperVer = e.wrapperVer || O.EMPTY_STRING, this.telemetryCacheKey = It.CACHE_KEY + Ct.CACHE_KEY_SEPARATOR + e.clientId;
    }
    return r.prototype.generateCurrentRequestHeaderValue = function() {
      var e = "" + this.apiId + It.VALUE_SEPARATOR + this.cacheOutcome, t = [this.wrapperSKU, this.wrapperVer].join(It.VALUE_SEPARATOR), n = this.getRegionDiscoveryFields(), o = [e, n].join(It.VALUE_SEPARATOR);
      return [It.SCHEMA_VERSION, o, t].join(It.CATEGORY_SEPARATOR);
    }, r.prototype.generateLastRequestHeaderValue = function() {
      var e = this.getLastRequests(), t = r.maxErrorsToSend(e), n = e.failedRequests.slice(0, 2 * t).join(It.VALUE_SEPARATOR), o = e.errors.slice(0, t).join(It.VALUE_SEPARATOR), a = e.errors.length, s = t < a ? It.OVERFLOW_TRUE : It.OVERFLOW_FALSE, l = [a, s].join(It.VALUE_SEPARATOR);
      return [It.SCHEMA_VERSION, e.cacheHits, n, o, l].join(It.CATEGORY_SEPARATOR);
    }, r.prototype.cacheFailedRequest = function(e) {
      var t = this.getLastRequests();
      t.errors.length >= It.MAX_CACHED_ERRORS && (t.failedRequests.shift(), t.failedRequests.shift(), t.errors.shift()), t.failedRequests.push(this.apiId, this.correlationId), re.isEmpty(e.subError) ? re.isEmpty(e.errorCode) ? e && e.toString() ? t.errors.push(e.toString()) : t.errors.push(It.UNKNOWN_ERROR) : t.errors.push(e.errorCode) : t.errors.push(e.subError), this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t);
    }, r.prototype.incrementCacheHits = function() {
      var e = this.getLastRequests();
      return e.cacheHits += 1, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e), e.cacheHits;
    }, r.prototype.getLastRequests = function() {
      var e = new Ns(), t = this.cacheManager.getServerTelemetry(this.telemetryCacheKey);
      return t || e;
    }, r.prototype.clearTelemetryCache = function() {
      var e = this.getLastRequests(), t = r.maxErrorsToSend(e), n = e.errors.length;
      if (t === n)
        this.cacheManager.removeItem(this.telemetryCacheKey);
      else {
        var o = new Ns();
        o.failedRequests = e.failedRequests.slice(t * 2), o.errors = e.errors.slice(t), this.cacheManager.setServerTelemetry(this.telemetryCacheKey, o);
      }
    }, r.maxErrorsToSend = function(e) {
      var t, n = 0, o = 0, a = e.errors.length;
      for (t = 0; t < a; t++) {
        var s = e.failedRequests[2 * t] || O.EMPTY_STRING, l = e.failedRequests[2 * t + 1] || O.EMPTY_STRING, u = e.errors[t] || O.EMPTY_STRING;
        if (o += s.toString().length + l.toString().length + u.length + 3, o < It.MAX_LAST_HEADER_BYTES)
          n += 1;
        else
          break;
      }
      return n;
    }, r.prototype.getRegionDiscoveryFields = function() {
      var e = [];
      return e.push(this.regionUsed || O.EMPTY_STRING), e.push(this.regionSource || O.EMPTY_STRING), e.push(this.regionOutcome || O.EMPTY_STRING), e.join(",");
    }, r.prototype.updateRegionDiscoveryMetadata = function(e) {
      this.regionUsed = e.region_used, this.regionSource = e.region_source, this.regionOutcome = e.region_outcome;
    }, r.prototype.setCacheOutcome = function(e) {
      this.cacheOutcome = e;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var lm = (
  /** @class */
  function() {
    function r(e, t, n, o, a, s) {
      this.authority = t, this.libraryName = o, this.libraryVersion = a, this.applicationTelemetry = s, this.clientId = e, this.logger = n, this.callbacks = /* @__PURE__ */ new Map(), this.eventsByCorrelationId = /* @__PURE__ */ new Map(), this.queueMeasurements = /* @__PURE__ */ new Map(), this.preQueueTimeByCorrelationId = /* @__PURE__ */ new Map();
    }
    return r.prototype.startPerformanceMeasurement = function(e, t) {
      return {};
    }, r.prototype.startPerformanceMeasuremeant = function(e, t) {
      return {};
    }, r.prototype.getIntFields = function() {
      return FI;
    }, r.prototype.getPreQueueTime = function(e, t) {
      var n = this.preQueueTimeByCorrelationId.get(t);
      if (n) {
        if (n.name !== e) {
          this.logger.trace("PerformanceClient.getPreQueueTime: no pre-queue time found for " + e + ", unable to add queue measurement");
          return;
        }
      } else {
        this.logger.trace("PerformanceClient.getPreQueueTime: no pre-queue times found for correlationId: " + t + ", unable to add queue measurement");
        return;
      }
      return n.time;
    }, r.prototype.calculateQueuedTime = function(e, t) {
      return e < 1 ? (this.logger.trace("PerformanceClient: preQueueTime should be a positive integer and not " + e), 0) : t < 1 ? (this.logger.trace("PerformanceClient: currentTime should be a positive integer and not " + t), 0) : t < e ? (this.logger.trace("PerformanceClient: currentTime is less than preQueueTime, check how time is being retrieved"), 0) : t - e;
    }, r.prototype.addQueueMeasurement = function(e, t, n, o) {
      if (!t) {
        this.logger.trace("PerformanceClient.addQueueMeasurement: correlationId not provided for " + e + ", cannot add queue measurement");
        return;
      }
      if (n === 0)
        this.logger.trace("PerformanceClient.addQueueMeasurement: queue time provided for " + e + " is " + n);
      else if (!n) {
        this.logger.trace("PerformanceClient.addQueueMeasurement: no queue time provided for " + e);
        return;
      }
      var a = { eventName: e, queueTime: n, manuallyCompleted: o }, s = this.queueMeasurements.get(t);
      if (s)
        s.push(a), this.queueMeasurements.set(t, s);
      else {
        this.logger.trace("PerformanceClient.addQueueMeasurement: adding correlationId " + t + " to queue measurements");
        var l = [a];
        this.queueMeasurements.set(t, l);
      }
      this.preQueueTimeByCorrelationId.delete(t);
    }, r.prototype.startMeasurement = function(e, t) {
      var n = this, o, a, s = t || this.generateId();
      t || this.logger.info("PerformanceClient: No correlation id provided for " + e + ", generating", s), this.logger.trace("PerformanceClient: Performance measurement started for " + e, s);
      var l = this.startPerformanceMeasuremeant(e, s);
      l.startMeasurement();
      var u = {
        eventId: this.generateId(),
        status: Rs.InProgress,
        authority: this.authority,
        libraryName: this.libraryName,
        libraryVersion: this.libraryVersion,
        clientId: this.clientId,
        name: e,
        startTimeMs: Date.now(),
        correlationId: s,
        appName: (o = this.applicationTelemetry) === null || o === void 0 ? void 0 : o.appName,
        appVersion: (a = this.applicationTelemetry) === null || a === void 0 ? void 0 : a.appVersion
      };
      return this.cacheEventByCorrelationId(u), {
        endMeasurement: function(f) {
          return n.endMeasurement($e($e({}, u), f), l);
        },
        discardMeasurement: function() {
          return n.discardMeasurements(u.correlationId);
        },
        addStaticFields: function(f) {
          return n.addStaticFields(f, u.correlationId);
        },
        increment: function(f) {
          return n.increment(f, u.correlationId);
        },
        measurement: l,
        event: u
      };
    }, r.prototype.endMeasurement = function(e, t) {
      var n = this, o, a, s = this.eventsByCorrelationId.get(e.correlationId);
      if (!s)
        return this.logger.trace("PerformanceClient: Measurement not found for " + e.eventId, e.correlationId), null;
      var l = e.eventId === s.eventId, u = {
        totalQueueTime: 0,
        totalQueueCount: 0,
        manuallyCompletedCount: 0
      };
      l ? (u = this.getQueueInfo(e.correlationId), this.discardCache(s.correlationId)) : (o = s.incompleteSubMeasurements) === null || o === void 0 || o.delete(e.eventId), t == null || t.endMeasurement();
      var f = t == null ? void 0 : t.flushMeasurement();
      if (!f)
        return this.logger.trace("PerformanceClient: Performance measurement not taken", s.correlationId), null;
      if (this.logger.trace("PerformanceClient: Performance measurement ended for " + e.name + ": " + f + " ms", e.correlationId), !l)
        return s[e.name + "DurationMs"] = Math.floor(f), $e({}, s);
      var h = $e($e({}, s), e), p = 0;
      return (a = h.incompleteSubMeasurements) === null || a === void 0 || a.forEach(function(g) {
        n.logger.trace("PerformanceClient: Incomplete submeasurement " + g.name + " found for " + e.name, h.correlationId), p++;
      }), h.incompleteSubMeasurements = void 0, h = $e($e({}, h), { durationMs: Math.round(f), queuedTimeMs: u.totalQueueTime, queuedCount: u.totalQueueCount, queuedManuallyCompletedCount: u.manuallyCompletedCount, status: Rs.Completed, incompleteSubsCount: p }), this.truncateIntegralFields(h, this.getIntFields()), this.emitEvents([h], e.correlationId), h;
    }, r.prototype.addStaticFields = function(e, t) {
      this.logger.trace("PerformanceClient: Updating static fields");
      var n = this.eventsByCorrelationId.get(t);
      n ? this.eventsByCorrelationId.set(t, $e($e({}, n), e)) : this.logger.trace("PerformanceClient: Event not found for", t);
    }, r.prototype.increment = function(e, t) {
      this.logger.trace("PerformanceClient: Updating counters");
      var n = this.eventsByCorrelationId.get(t);
      if (n)
        for (var o in e)
          n.hasOwnProperty(o) || (n[o] = 0), n[o] += e[o];
      else
        this.logger.trace("PerformanceClient: Event not found for", t);
    }, r.prototype.cacheEventByCorrelationId = function(e) {
      var t = this.eventsByCorrelationId.get(e.correlationId);
      t ? (this.logger.trace("PerformanceClient: Performance measurement for " + e.name + " added/updated", e.correlationId), t.incompleteSubMeasurements = t.incompleteSubMeasurements || /* @__PURE__ */ new Map(), t.incompleteSubMeasurements.set(e.eventId, { name: e.name, startTimeMs: e.startTimeMs })) : (this.logger.trace("PerformanceClient: Performance measurement for " + e.name + " started", e.correlationId), this.eventsByCorrelationId.set(e.correlationId, $e({}, e)));
    }, r.prototype.getQueueInfo = function(e) {
      var t = this.queueMeasurements.get(e);
      t || this.logger.trace("PerformanceClient: no queue measurements found for for correlationId: " + e);
      var n = 0, o = 0, a = 0;
      return t == null || t.forEach(function(s) {
        n += s.queueTime, o++, a += s.manuallyCompleted ? 1 : 0;
      }), {
        totalQueueTime: n,
        totalQueueCount: o,
        manuallyCompletedCount: a
      };
    }, r.prototype.discardMeasurements = function(e) {
      this.logger.trace("PerformanceClient: Performance measurements discarded", e), this.eventsByCorrelationId.delete(e);
    }, r.prototype.discardCache = function(e) {
      this.discardMeasurements(e), this.logger.trace("PerformanceClient: QueueMeasurements discarded", e), this.queueMeasurements.delete(e), this.logger.trace("PerformanceClient: Pre-queue times discarded", e), this.preQueueTimeByCorrelationId.delete(e);
    }, r.prototype.addPerformanceCallback = function(e) {
      var t = this.generateId();
      return this.callbacks.set(t, e), this.logger.verbose("PerformanceClient: Performance callback registered with id: " + t), t;
    }, r.prototype.removePerformanceCallback = function(e) {
      var t = this.callbacks.delete(e);
      return t ? this.logger.verbose("PerformanceClient: Performance callback " + e + " removed.") : this.logger.verbose("PerformanceClient: Performance callback " + e + " not removed."), t;
    }, r.prototype.emitEvents = function(e, t) {
      var n = this;
      this.logger.verbose("PerformanceClient: Emitting performance events", t), this.callbacks.forEach(function(o, a) {
        n.logger.trace("PerformanceClient: Emitting event to callback " + a, t), o.apply(null, [e]);
      });
    }, r.prototype.truncateIntegralFields = function(e, t) {
      t.forEach(function(n) {
        n in e && typeof e[n] == "number" && (e[n] = Math.floor(e[n]));
      });
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Hp = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.startMeasurement = function() {
    }, r.prototype.endMeasurement = function() {
    }, r.prototype.flushMeasurement = function() {
      return null;
    }, r;
  }()
), jI = (
  /** @class */
  function(r) {
    or(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.generateId = function() {
      return "callback-id";
    }, e.prototype.startPerformanceMeasuremeant = function() {
      return new Hp();
    }, e.prototype.startPerformanceMeasurement = function() {
      return new Hp();
    }, e.prototype.calculateQueuedTime = function(t, n) {
      return 0;
    }, e.prototype.addQueueMeasurement = function(t, n, o) {
    }, e.prototype.setPreQueueTime = function(t, n) {
    }, e;
  }(lm)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var W = {
  pkceNotGenerated: {
    code: "pkce_not_created",
    desc: "The PKCE code challenge and verifier could not be generated."
  },
  cryptoDoesNotExist: {
    code: "crypto_nonexistent",
    desc: "The crypto object or function is not available."
  },
  httpMethodNotImplementedError: {
    code: "http_method_not_implemented",
    desc: "The HTTP method given has not been implemented in this library."
  },
  emptyNavigateUriError: {
    code: "empty_navigate_uri",
    desc: "Navigation URI is empty. Please check stack trace for more info."
  },
  hashEmptyError: {
    code: "hash_empty_error",
    desc: "Hash value cannot be processed because it is empty. Please verify that your redirectUri is not clearing the hash. For more visit: aka.ms/msaljs/browser-errors."
  },
  hashDoesNotContainStateError: {
    code: "no_state_in_hash",
    desc: "Hash does not contain state. Please verify that the request originated from msal."
  },
  hashDoesNotContainKnownPropertiesError: {
    code: "hash_does_not_contain_known_properties",
    desc: "Hash does not contain known properites. Please verify that your redirectUri is not changing the hash. For more visit: aka.ms/msaljs/browser-errors."
  },
  unableToParseStateError: {
    code: "unable_to_parse_state",
    desc: "Unable to parse state. Please verify that the request originated from msal."
  },
  stateInteractionTypeMismatchError: {
    code: "state_interaction_type_mismatch",
    desc: "Hash contains state but the interaction type does not match the caller."
  },
  interactionInProgress: {
    code: "interaction_in_progress",
    desc: "Interaction is currently in progress. Please ensure that this interaction has been completed before calling an interactive API.  For more visit: aka.ms/msaljs/browser-errors."
  },
  popupWindowError: {
    code: "popup_window_error",
    desc: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser."
  },
  emptyWindowError: {
    code: "empty_window_error",
    desc: "window.open returned null or undefined window object."
  },
  userCancelledError: {
    code: "user_cancelled",
    desc: "User cancelled the flow."
  },
  monitorPopupTimeoutError: {
    code: "monitor_window_timeout",
    desc: "Token acquisition in popup failed due to timeout. For more visit: aka.ms/msaljs/browser-errors."
  },
  monitorIframeTimeoutError: {
    code: "monitor_window_timeout",
    desc: "Token acquisition in iframe failed due to timeout. For more visit: aka.ms/msaljs/browser-errors."
  },
  redirectInIframeError: {
    code: "redirect_in_iframe",
    desc: "Redirects are not supported for iframed or brokered applications. Please ensure you are using MSAL.js in a top frame of the window if using the redirect APIs, or use the popup APIs."
  },
  blockTokenRequestsInHiddenIframeError: {
    code: "block_iframe_reload",
    desc: "Request was blocked inside an iframe because MSAL detected an authentication response. For more visit: aka.ms/msaljs/browser-errors"
  },
  blockAcquireTokenInPopupsError: {
    code: "block_nested_popups",
    desc: "Request was blocked inside a popup because MSAL detected it was running in a popup."
  },
  iframeClosedPrematurelyError: {
    code: "iframe_closed_prematurely",
    desc: "The iframe being monitored was closed prematurely."
  },
  silentLogoutUnsupportedError: {
    code: "silent_logout_unsupported",
    desc: "Silent logout not supported. Please call logoutRedirect or logoutPopup instead."
  },
  noAccountError: {
    code: "no_account_error",
    desc: "No account object provided to acquireTokenSilent and no active account has been set. Please call setActiveAccount or provide an account on the request."
  },
  silentPromptValueError: {
    code: "silent_prompt_value_error",
    desc: "The value given for the prompt value is not valid for silent requests - must be set to 'none' or 'no_session'."
  },
  noTokenRequestCacheError: {
    code: "no_token_request_cache_error",
    desc: "No token request found in cache."
  },
  unableToParseTokenRequestCacheError: {
    code: "unable_to_parse_token_request_cache_error",
    desc: "The cached token request could not be parsed."
  },
  noCachedAuthorityError: {
    code: "no_cached_authority_error",
    desc: "No cached authority found."
  },
  authRequestNotSet: {
    code: "auth_request_not_set_error",
    desc: "Auth Request not set. Please ensure initiateAuthRequest was called from the InteractionHandler"
  },
  invalidCacheType: {
    code: "invalid_cache_type",
    desc: "Invalid cache type"
  },
  notInBrowserEnvironment: {
    code: "non_browser_environment",
    desc: "Login and token requests are not supported in non-browser environments."
  },
  databaseNotOpen: {
    code: "database_not_open",
    desc: "Database is not open!"
  },
  noNetworkConnectivity: {
    code: "no_network_connectivity",
    desc: "No network connectivity. Check your internet connection."
  },
  postRequestFailed: {
    code: "post_request_failed",
    desc: "Network request failed: If the browser threw a CORS error, check that the redirectUri is registered in the Azure App Portal as type 'SPA'"
  },
  getRequestFailed: {
    code: "get_request_failed",
    desc: "Network request failed. Please check the network trace to determine root cause."
  },
  failedToParseNetworkResponse: {
    code: "failed_to_parse_response",
    desc: "Failed to parse network response. Check network trace."
  },
  unableToLoadTokenError: {
    code: "unable_to_load_token",
    desc: "Error loading token to cache."
  },
  signingKeyNotFoundInStorage: {
    code: "crypto_key_not_found",
    desc: "Cryptographic Key or Keypair not found in browser storage."
  },
  authCodeRequired: {
    code: "auth_code_required",
    desc: "An authorization code must be provided (as the `code` property on the request) to this flow."
  },
  authCodeOrNativeAccountRequired: {
    code: "auth_code_or_nativeAccountId_required",
    desc: "An authorization code or nativeAccountId must be provided to this flow."
  },
  spaCodeAndNativeAccountPresent: {
    code: "spa_code_and_nativeAccountId_present",
    desc: "Request cannot contain both spa code and native account id."
  },
  databaseUnavailable: {
    code: "database_unavailable",
    desc: "IndexedDB, which is required for persistent cryptographic key storage, is unavailable. This may be caused by browser privacy features which block persistent storage in third-party contexts."
  },
  unableToAcquireTokenFromNativePlatform: {
    code: "unable_to_acquire_token_from_native_platform",
    desc: "Unable to acquire token from native platform. For a list of possible reasons visit aka.ms/msaljs/browser-errors."
  },
  nativeHandshakeTimeout: {
    code: "native_handshake_timeout",
    desc: "Timed out while attempting to establish connection to browser extension"
  },
  nativeExtensionNotInstalled: {
    code: "native_extension_not_installed",
    desc: "Native extension is not installed. If you think this is a mistake call the initialize function."
  },
  nativeConnectionNotEstablished: {
    code: "native_connection_not_established",
    desc: "Connection to native platform has not been established. Please install a compatible browser extension and run initialize(). For more please visit aka.ms/msaljs/browser-errors."
  },
  nativeBrokerCalledBeforeInitialize: {
    code: "native_broker_called_before_initialize",
    desc: "You must call and await the initialize function before attempting to call any other MSAL API when native brokering is enabled. For more please visit aka.ms/msaljs/browser-errors."
  },
  nativePromptNotSupported: {
    code: "native_prompt_not_supported",
    desc: "The provided prompt is not supported by the native platform. This request should be routed to the web based flow."
  }
}, X = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return Object.setPrototypeOf(o, e.prototype), o.name = "BrowserAuthError", o;
    }
    return e.createPkceNotGeneratedError = function(t) {
      return new e(W.pkceNotGenerated.code, W.pkceNotGenerated.desc + " Detail:" + t);
    }, e.createCryptoNotAvailableError = function(t) {
      return new e(W.cryptoDoesNotExist.code, W.cryptoDoesNotExist.desc + " Detail:" + t);
    }, e.createHttpMethodNotImplementedError = function(t) {
      return new e(W.httpMethodNotImplementedError.code, W.httpMethodNotImplementedError.desc + " Given Method: " + t);
    }, e.createEmptyNavigationUriError = function() {
      return new e(W.emptyNavigateUriError.code, W.emptyNavigateUriError.desc);
    }, e.createEmptyHashError = function(t) {
      return new e(W.hashEmptyError.code, W.hashEmptyError.desc + " Given Url: " + t);
    }, e.createHashDoesNotContainStateError = function() {
      return new e(W.hashDoesNotContainStateError.code, W.hashDoesNotContainStateError.desc);
    }, e.createHashDoesNotContainKnownPropertiesError = function() {
      return new e(W.hashDoesNotContainKnownPropertiesError.code, W.hashDoesNotContainKnownPropertiesError.desc);
    }, e.createUnableToParseStateError = function() {
      return new e(W.unableToParseStateError.code, W.unableToParseStateError.desc);
    }, e.createStateInteractionTypeMismatchError = function() {
      return new e(W.stateInteractionTypeMismatchError.code, W.stateInteractionTypeMismatchError.desc);
    }, e.createInteractionInProgressError = function() {
      return new e(W.interactionInProgress.code, W.interactionInProgress.desc);
    }, e.createPopupWindowError = function(t) {
      var n = W.popupWindowError.desc;
      return n = re.isEmpty(t) ? n : n + " Details: " + t, new e(W.popupWindowError.code, n);
    }, e.createEmptyWindowCreatedError = function() {
      return new e(W.emptyWindowError.code, W.emptyWindowError.desc);
    }, e.createUserCancelledError = function() {
      return new e(W.userCancelledError.code, W.userCancelledError.desc);
    }, e.createMonitorPopupTimeoutError = function() {
      return new e(W.monitorPopupTimeoutError.code, W.monitorPopupTimeoutError.desc);
    }, e.createMonitorIframeTimeoutError = function() {
      return new e(W.monitorIframeTimeoutError.code, W.monitorIframeTimeoutError.desc);
    }, e.createRedirectInIframeError = function(t) {
      return new e(W.redirectInIframeError.code, W.redirectInIframeError.desc + " (window.parent !== window) => " + t);
    }, e.createBlockReloadInHiddenIframeError = function() {
      return new e(W.blockTokenRequestsInHiddenIframeError.code, W.blockTokenRequestsInHiddenIframeError.desc);
    }, e.createBlockAcquireTokenInPopupsError = function() {
      return new e(W.blockAcquireTokenInPopupsError.code, W.blockAcquireTokenInPopupsError.desc);
    }, e.createIframeClosedPrematurelyError = function() {
      return new e(W.iframeClosedPrematurelyError.code, W.iframeClosedPrematurelyError.desc);
    }, e.createSilentLogoutUnsupportedError = function() {
      return new e(W.silentLogoutUnsupportedError.code, W.silentLogoutUnsupportedError.desc);
    }, e.createNoAccountError = function() {
      return new e(W.noAccountError.code, W.noAccountError.desc);
    }, e.createSilentPromptValueError = function(t) {
      return new e(W.silentPromptValueError.code, W.silentPromptValueError.desc + " Given value: " + t);
    }, e.createUnableToParseTokenRequestCacheError = function() {
      return new e(W.unableToParseTokenRequestCacheError.code, W.unableToParseTokenRequestCacheError.desc);
    }, e.createNoTokenRequestCacheError = function() {
      return new e(W.noTokenRequestCacheError.code, W.noTokenRequestCacheError.desc);
    }, e.createAuthRequestNotSetError = function() {
      return new e(W.authRequestNotSet.code, W.authRequestNotSet.desc);
    }, e.createNoCachedAuthorityError = function() {
      return new e(W.noCachedAuthorityError.code, W.noCachedAuthorityError.desc);
    }, e.createInvalidCacheTypeError = function() {
      return new e(W.invalidCacheType.code, "" + W.invalidCacheType.desc);
    }, e.createNonBrowserEnvironmentError = function() {
      return new e(W.notInBrowserEnvironment.code, W.notInBrowserEnvironment.desc);
    }, e.createDatabaseNotOpenError = function() {
      return new e(W.databaseNotOpen.code, W.databaseNotOpen.desc);
    }, e.createNoNetworkConnectivityError = function() {
      return new e(W.noNetworkConnectivity.code, W.noNetworkConnectivity.desc);
    }, e.createPostRequestFailedError = function(t, n) {
      return new e(W.postRequestFailed.code, W.postRequestFailed.desc + " | Network client threw: " + t + " | Attempted to reach: " + n.split("?")[0]);
    }, e.createGetRequestFailedError = function(t, n) {
      return new e(W.getRequestFailed.code, W.getRequestFailed.desc + " | Network client threw: " + t + " | Attempted to reach: " + n.split("?")[0]);
    }, e.createFailedToParseNetworkResponseError = function(t) {
      return new e(W.failedToParseNetworkResponse.code, W.failedToParseNetworkResponse.desc + " | Attempted to reach: " + t.split("?")[0]);
    }, e.createUnableToLoadTokenError = function(t) {
      return new e(W.unableToLoadTokenError.code, W.unableToLoadTokenError.desc + " | " + t);
    }, e.createSigningKeyNotFoundInStorageError = function(t) {
      return new e(W.signingKeyNotFoundInStorage.code, W.signingKeyNotFoundInStorage.desc + " | No match found for KeyId: " + t);
    }, e.createAuthCodeRequiredError = function() {
      return new e(W.authCodeRequired.code, W.authCodeRequired.desc);
    }, e.createAuthCodeOrNativeAccountIdRequiredError = function() {
      return new e(W.authCodeOrNativeAccountRequired.code, W.authCodeOrNativeAccountRequired.desc);
    }, e.createSpaCodeAndNativeAccountIdPresentError = function() {
      return new e(W.spaCodeAndNativeAccountPresent.code, W.spaCodeAndNativeAccountPresent.desc);
    }, e.createDatabaseUnavailableError = function() {
      return new e(W.databaseUnavailable.code, W.databaseUnavailable.desc);
    }, e.createUnableToAcquireTokenFromNativePlatformError = function() {
      return new e(W.unableToAcquireTokenFromNativePlatform.code, W.unableToAcquireTokenFromNativePlatform.desc);
    }, e.createNativeHandshakeTimeoutError = function() {
      return new e(W.nativeHandshakeTimeout.code, W.nativeHandshakeTimeout.desc);
    }, e.createNativeExtensionNotInstalledError = function() {
      return new e(W.nativeExtensionNotInstalled.code, W.nativeExtensionNotInstalled.desc);
    }, e.createNativeConnectionNotEstablishedError = function() {
      return new e(W.nativeConnectionNotEstablished.code, W.nativeConnectionNotEstablished.desc);
    }, e.createNativeBrokerCalledBeforeInitialize = function() {
      return new e(W.nativeBrokerCalledBeforeInitialize.code, W.nativeBrokerCalledBeforeInitialize.desc);
    }, e.createNativePromptParameterNotSupportedError = function() {
      return new e(W.nativePromptNotSupported.code, W.nativePromptNotSupported.desc);
    }, e;
  }(ue)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var $r = {
  /**
   * Interaction in progress cache value
   */
  INTERACTION_IN_PROGRESS_VALUE: "interaction_in_progress",
  /**
   * Invalid grant error code
   */
  INVALID_GRANT_ERROR: "invalid_grant",
  /**
   * Default popup window width
   */
  POPUP_WIDTH: 483,
  /**
   * Default popup window height
   */
  POPUP_HEIGHT: 600,
  /**
   * Name of the popup window starts with
   */
  POPUP_NAME_PREFIX: "msal",
  /**
   * Default popup monitor poll interval in milliseconds
   */
  DEFAULT_POLL_INTERVAL_MS: 30,
  /**
   * Msal-browser SKU
   */
  MSAL_SKU: "msal.js.browser"
}, Hi = {
  CHANNEL_ID: "53ee284d-920a-4b59-9d30-a60315b26836",
  PREFERRED_EXTENSION_ID: "ppnbnpeolgkicgegkbkbjmhlideopiji",
  MATS_TELEMETRY: "MATS"
}, Sn;
(function(r) {
  r.HandshakeRequest = "Handshake", r.HandshakeResponse = "HandshakeResponse", r.GetToken = "GetToken", r.Response = "Response";
})(Sn || (Sn = {}));
var pt;
(function(r) {
  r.LocalStorage = "localStorage", r.SessionStorage = "sessionStorage", r.MemoryStorage = "memoryStorage";
})(pt || (pt = {}));
var rn;
(function(r) {
  r.GET = "GET", r.POST = "POST";
})(rn || (rn = {}));
var Be;
(function(r) {
  r.AUTHORITY = "authority", r.ACQUIRE_TOKEN_ACCOUNT = "acquireToken.account", r.SESSION_STATE = "session.state", r.REQUEST_STATE = "request.state", r.NONCE_IDTOKEN = "nonce.id_token", r.ORIGIN_URI = "request.origin", r.RENEW_STATUS = "token.renew.status", r.URL_HASH = "urlHash", r.REQUEST_PARAMS = "request.params", r.SCOPES = "scopes", r.INTERACTION_STATUS_KEY = "interaction.status", r.CCS_CREDENTIAL = "ccs.credential", r.CORRELATION_ID = "request.correlationId", r.NATIVE_REQUEST = "request.native", r.REDIRECT_CONTEXT = "request.redirect.context";
})(Be || (Be = {}));
var tn;
(function(r) {
  r.ACCOUNT_KEYS = "msal.account.keys", r.TOKEN_KEYS = "msal.token.keys";
})(tn || (tn = {}));
var Zo;
(function(r) {
  r.WRAPPER_SKU = "wrapper.sku", r.WRAPPER_VER = "wrapper.version";
})(Zo || (Zo = {}));
var Ze;
(function(r) {
  r[r.acquireTokenRedirect = 861] = "acquireTokenRedirect", r[r.acquireTokenPopup = 862] = "acquireTokenPopup", r[r.ssoSilent = 863] = "ssoSilent", r[r.acquireTokenSilent_authCode = 864] = "acquireTokenSilent_authCode", r[r.handleRedirectPromise = 865] = "handleRedirectPromise", r[r.acquireTokenByCode = 866] = "acquireTokenByCode", r[r.acquireTokenSilent_silentFlow = 61] = "acquireTokenSilent_silentFlow", r[r.logout = 961] = "logout", r[r.logoutPopup = 962] = "logoutPopup";
})(Ze || (Ze = {}));
var ce;
(function(r) {
  r.Redirect = "redirect", r.Popup = "popup", r.Silent = "silent", r.None = "none";
})(ce || (ce = {}));
var Bp;
(function(r) {
  r.Startup = "startup", r.Login = "login", r.Logout = "logout", r.AcquireToken = "acquireToken", r.SsoSilent = "ssoSilent", r.HandleRedirect = "handleRedirect", r.None = "none";
})(Bp || (Bp = {}));
var Kp = {
  scopes: sa
}, ii = "jwk", qp;
(function(r) {
  r.React = "@azure/msal-react", r.Angular = "@azure/msal-angular";
})(qp || (qp = {}));
var uu = "msal.db", YI = 1, QI = uu + ".keys", rr;
(function(r) {
  r[r.Default = 0] = "Default", r[r.AccessToken = 1] = "AccessToken", r[r.AccessTokenAndRefreshToken = 2] = "AccessTokenAndRefreshToken", r[r.RefreshToken = 3] = "RefreshToken", r[r.RefreshTokenAndNetwork = 4] = "RefreshTokenAndNetwork", r[r.Skip = 5] = "Skip";
})(rr || (rr = {}));
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Zt = {
  redirectUriNotSet: {
    code: "redirect_uri_empty",
    desc: "A redirect URI is required for all calls, and none has been set."
  },
  postLogoutUriNotSet: {
    code: "post_logout_uri_empty",
    desc: "A post logout redirect has not been set."
  },
  storageNotSupportedError: {
    code: "storage_not_supported",
    desc: "Given storage configuration option was not supported."
  },
  noRedirectCallbacksSet: {
    code: "no_redirect_callbacks",
    desc: "No redirect callbacks have been set. Please call setRedirectCallbacks() with the appropriate function arguments before continuing. More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
  },
  invalidCallbackObject: {
    code: "invalid_callback_object",
    desc: "The object passed for the callback was invalid. More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
  },
  stubPcaInstanceCalled: {
    code: "stubbed_public_client_application_called",
    desc: "Stub instance of Public Client Application was called. If using msal-react, please ensure context is not used without a provider. For more visit: aka.ms/msaljs/browser-errors"
  },
  inMemRedirectUnavailable: {
    code: "in_mem_redirect_unavailable",
    desc: "Redirect cannot be supported. In-memory storage was selected and storeAuthStateInCookie=false, which would cause the library to be unable to handle the incoming hash. If you would like to use the redirect API, please use session/localStorage or set storeAuthStateInCookie=true."
  },
  entropyNotProvided: {
    code: "entropy_not_provided",
    desc: "The available browser crypto interface requires entropy set via system.cryptoOptions.entropy configuration option."
  }
}, Os = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return o.name = "BrowserConfigurationAuthError", Object.setPrototypeOf(o, e.prototype), o;
    }
    return e.createRedirectUriEmptyError = function() {
      return new e(Zt.redirectUriNotSet.code, Zt.redirectUriNotSet.desc);
    }, e.createPostLogoutRedirectUriEmptyError = function() {
      return new e(Zt.postLogoutUriNotSet.code, Zt.postLogoutUriNotSet.desc);
    }, e.createStorageNotSupportedError = function(t) {
      return new e(Zt.storageNotSupportedError.code, Zt.storageNotSupportedError.desc + " Given Location: " + t);
    }, e.createRedirectCallbacksNotSetError = function() {
      return new e(Zt.noRedirectCallbacksSet.code, Zt.noRedirectCallbacksSet.desc);
    }, e.createStubPcaInstanceCalledError = function() {
      return new e(Zt.stubPcaInstanceCalled.code, Zt.stubPcaInstanceCalled.desc);
    }, e.createInMemoryRedirectUnavailableError = function() {
      return new e(Zt.inMemRedirectUnavailable.code, Zt.inMemRedirectUnavailable.desc);
    }, e.createEntropyNotProvided = function() {
      return new e(Zt.entropyNotProvided.code, Zt.entropyNotProvided.desc);
    }, e;
  }(ue)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var $p = (
  /** @class */
  function() {
    function r(e) {
      this.validateWindowStorage(e), this.windowStorage = window[e];
    }
    return r.prototype.validateWindowStorage = function(e) {
      if (e !== pt.LocalStorage && e !== pt.SessionStorage)
        throw Os.createStorageNotSupportedError(e);
      var t = !!window[e];
      if (!t)
        throw Os.createStorageNotSupportedError(e);
    }, r.prototype.getItem = function(e) {
      return this.windowStorage.getItem(e);
    }, r.prototype.setItem = function(e, t) {
      this.windowStorage.setItem(e, t);
    }, r.prototype.removeItem = function(e) {
      this.windowStorage.removeItem(e);
    }, r.prototype.getKeys = function() {
      return Object.keys(this.windowStorage);
    }, r.prototype.containsKey = function(e) {
      return this.windowStorage.hasOwnProperty(e);
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var du = (
  /** @class */
  function() {
    function r() {
      this.cache = /* @__PURE__ */ new Map();
    }
    return r.prototype.getItem = function(e) {
      return this.cache.get(e) || null;
    }, r.prototype.setItem = function(e, t) {
      this.cache.set(e, t);
    }, r.prototype.removeItem = function(e) {
      this.cache.delete(e);
    }, r.prototype.getKeys = function() {
      var e = [];
      return this.cache.forEach(function(t, n) {
        e.push(n);
      }), e;
    }, r.prototype.containsKey = function(e) {
      return this.cache.has(e);
    }, r.prototype.clear = function() {
      this.cache.clear();
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var um = (
  /** @class */
  function() {
    function r() {
    }
    return r.extractBrowserRequestState = function(e, t) {
      if (re.isEmpty(t))
        return null;
      try {
        var n = Tn.parseRequestState(e, t);
        return n.libraryState.meta;
      } catch (o) {
        throw ie.createInvalidStateError(t, o);
      }
    }, r.parseServerResponseFromHash = function(e) {
      if (!e)
        return {};
      var t = new He(e);
      return He.getDeserializedHash(t.getHash());
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var fu = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t, n, o, a) {
      var s = r.call(this, t, o, a) || this;
      return s.COOKIE_LIFE_MULTIPLIER = 24 * 60 * 60 * 1e3, s.cacheConfig = n, s.logger = a, s.internalStorage = new du(), s.browserStorage = s.setupBrowserStorage(s.cacheConfig.cacheLocation), s.temporaryCacheStorage = s.setupTemporaryCacheStorage(s.cacheConfig.temporaryCacheLocation, s.cacheConfig.cacheLocation), n.cacheMigrationEnabled && (s.migrateCacheEntries(), s.createKeyMaps()), s;
    }
    return e.prototype.setupBrowserStorage = function(t) {
      switch (t) {
        case pt.LocalStorage:
        case pt.SessionStorage:
          try {
            return new $p(t);
          } catch (n) {
            this.logger.verbose(n);
            break;
          }
      }
      return this.cacheConfig.cacheLocation = pt.MemoryStorage, new du();
    }, e.prototype.setupTemporaryCacheStorage = function(t, n) {
      switch (n) {
        case pt.LocalStorage:
        case pt.SessionStorage:
          try {
            return new $p(t || pt.SessionStorage);
          } catch (o) {
            return this.logger.verbose(o), this.internalStorage;
          }
        case pt.MemoryStorage:
        default:
          return this.internalStorage;
      }
    }, e.prototype.migrateCacheEntries = function() {
      var t = this, n = O.CACHE_PREFIX + "." + yt.ID_TOKEN, o = O.CACHE_PREFIX + "." + yt.CLIENT_INFO, a = O.CACHE_PREFIX + "." + yt.ERROR, s = O.CACHE_PREFIX + "." + yt.ERROR_DESC, l = this.browserStorage.getItem(n), u = this.browserStorage.getItem(o), f = this.browserStorage.getItem(a), h = this.browserStorage.getItem(s), p = [l, u, f, h], g = [yt.ID_TOKEN, yt.CLIENT_INFO, yt.ERROR, yt.ERROR_DESC];
      g.forEach(function(v, C) {
        return t.migrateCacheEntry(v, p[C]);
      });
    }, e.prototype.migrateCacheEntry = function(t, n) {
      n && this.setTemporaryCache(t, n, !0);
    }, e.prototype.createKeyMaps = function() {
      var t = this;
      this.logger.trace("BrowserCacheManager - createKeyMaps called.");
      var n = this.getItem(tn.ACCOUNT_KEYS), o = this.getItem(tn.TOKEN_KEYS + "." + this.clientId);
      if (n && o) {
        this.logger.verbose("BrowserCacheManager:createKeyMaps - account and token key maps already exist, skipping migration.");
        return;
      }
      var a = this.browserStorage.getKeys();
      a.forEach(function(s) {
        if (t.isCredentialKey(s)) {
          var l = t.getItem(s);
          if (l) {
            var u = t.validateAndParseJson(l);
            if (u && u.hasOwnProperty("credentialType"))
              switch (u.credentialType) {
                case he.ID_TOKEN:
                  if (po.isIdTokenEntity(u)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - idToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - idToken with key: " + s + " found, saving key to token key map");
                    var f = er.toObject(new po(), u), h = t.updateCredentialCacheKey(s, f);
                    t.addTokenKey(h, he.ID_TOKEN);
                    return;
                  } else
                    t.logger.trace("BrowserCacheManager:createKeyMaps - key found matching idToken schema with value containing idToken credentialType field but value failed IdTokenEntity validation, skipping."), t.logger.tracePii("BrowserCacheManager:createKeyMaps - failed idToken validation on key: " + s);
                  break;
                case he.ACCESS_TOKEN:
                case he.ACCESS_TOKEN_WITH_AUTH_SCHEME:
                  if (go.isAccessTokenEntity(u)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - accessToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - accessToken with key: " + s + " found, saving key to token key map");
                    var p = er.toObject(new go(), u), h = t.updateCredentialCacheKey(s, p);
                    t.addTokenKey(h, he.ACCESS_TOKEN);
                    return;
                  } else
                    t.logger.trace("BrowserCacheManager:createKeyMaps - key found matching accessToken schema with value containing accessToken credentialType field but value failed AccessTokenEntity validation, skipping."), t.logger.tracePii("BrowserCacheManager:createKeyMaps - failed accessToken validation on key: " + s);
                  break;
                case he.REFRESH_TOKEN:
                  if (Jo.isRefreshTokenEntity(u)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - refreshToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - refreshToken with key: " + s + " found, saving key to token key map");
                    var g = er.toObject(new Jo(), u), h = t.updateCredentialCacheKey(s, g);
                    t.addTokenKey(h, he.REFRESH_TOKEN);
                    return;
                  } else
                    t.logger.trace("BrowserCacheManager:createKeyMaps - key found matching refreshToken schema with value containing refreshToken credentialType field but value failed RefreshTokenEntity validation, skipping."), t.logger.tracePii("BrowserCacheManager:createKeyMaps - failed refreshToken validation on key: " + s);
                  break;
              }
          }
        }
        if (t.isAccountKey(s)) {
          var l = t.getItem(s);
          if (l) {
            var v = t.validateAndParseJson(l);
            v && Rt.isAccountEntity(v) && (t.logger.trace("BrowserCacheManager:createKeyMaps - account found, saving key to account key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - account with key: " + s + " found, saving key to account key map"), t.addAccountKeyToMap(s));
          }
        }
      });
    }, e.prototype.validateAndParseJson = function(t) {
      try {
        var n = JSON.parse(t);
        return n && typeof n == "object" ? n : null;
      } catch {
        return null;
      }
    }, e.prototype.getItem = function(t) {
      return this.browserStorage.getItem(t);
    }, e.prototype.setItem = function(t, n) {
      this.browserStorage.setItem(t, n);
    }, e.prototype.getAccount = function(t) {
      this.logger.trace("BrowserCacheManager.getAccount called");
      var n = this.getItem(t);
      if (!n)
        return this.removeAccountKeyFromMap(t), null;
      var o = this.validateAndParseJson(n);
      return !o || !Rt.isAccountEntity(o) ? (this.removeAccountKeyFromMap(t), null) : er.toObject(new Rt(), o);
    }, e.prototype.setAccount = function(t) {
      this.logger.trace("BrowserCacheManager.setAccount called");
      var n = t.generateAccountKey();
      this.setItem(n, JSON.stringify(t)), this.addAccountKeyToMap(n);
    }, e.prototype.getAccountKeys = function() {
      this.logger.trace("BrowserCacheManager.getAccountKeys called");
      var t = this.getItem(tn.ACCOUNT_KEYS);
      return t ? JSON.parse(t) : (this.logger.verbose("BrowserCacheManager.getAccountKeys - No account keys found"), []);
    }, e.prototype.addAccountKeyToMap = function(t) {
      this.logger.trace("BrowserCacheManager.addAccountKeyToMap called"), this.logger.tracePii("BrowserCacheManager.addAccountKeyToMap called with key: " + t);
      var n = this.getAccountKeys();
      n.indexOf(t) === -1 ? (n.push(t), this.setItem(tn.ACCOUNT_KEYS, JSON.stringify(n)), this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key added")) : this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key already exists in map");
    }, e.prototype.removeAccountKeyFromMap = function(t) {
      this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap called"), this.logger.tracePii("BrowserCacheManager.removeAccountKeyFromMap called with key: " + t);
      var n = this.getAccountKeys(), o = n.indexOf(t);
      o > -1 ? (n.splice(o, 1), this.setItem(tn.ACCOUNT_KEYS, JSON.stringify(n)), this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap account key removed")) : this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap key not found in existing map");
    }, e.prototype.removeAccount = function(t) {
      return G(this, void 0, void 0, function() {
        return z(this, function(n) {
          return r.prototype.removeAccount.call(this, t), this.removeAccountKeyFromMap(t), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.removeIdToken = function(t) {
      r.prototype.removeIdToken.call(this, t), this.removeTokenKey(t, he.ID_TOKEN);
    }, e.prototype.removeAccessToken = function(t) {
      return G(this, void 0, void 0, function() {
        return z(this, function(n) {
          return r.prototype.removeAccessToken.call(this, t), this.removeTokenKey(t, he.ACCESS_TOKEN), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.removeRefreshToken = function(t) {
      r.prototype.removeRefreshToken.call(this, t), this.removeTokenKey(t, he.REFRESH_TOKEN);
    }, e.prototype.getTokenKeys = function() {
      this.logger.trace("BrowserCacheManager.getTokenKeys called");
      var t = this.getItem(tn.TOKEN_KEYS + "." + this.clientId);
      if (t) {
        var n = this.validateAndParseJson(t);
        if (n && n.hasOwnProperty("idToken") && n.hasOwnProperty("accessToken") && n.hasOwnProperty("refreshToken"))
          return n;
        this.logger.error("BrowserCacheManager.getTokenKeys - Token keys found but in an unknown format. Returning empty key map.");
      } else
        this.logger.verbose("BrowserCacheManager.getTokenKeys - No token keys found");
      return {
        idToken: [],
        accessToken: [],
        refreshToken: []
      };
    }, e.prototype.addTokenKey = function(t, n) {
      this.logger.trace("BrowserCacheManager addTokenKey called");
      var o = this.getTokenKeys();
      switch (n) {
        case he.ID_TOKEN:
          o.idToken.indexOf(t) === -1 && (this.logger.info("BrowserCacheManager: addTokenKey - idToken added to map"), o.idToken.push(t));
          break;
        case he.ACCESS_TOKEN:
          o.accessToken.indexOf(t) === -1 && (this.logger.info("BrowserCacheManager: addTokenKey - accessToken added to map"), o.accessToken.push(t));
          break;
        case he.REFRESH_TOKEN:
          o.refreshToken.indexOf(t) === -1 && (this.logger.info("BrowserCacheManager: addTokenKey - refreshToken added to map"), o.refreshToken.push(t));
          break;
        default:
          this.logger.error("BrowserCacheManager:addTokenKey - CredentialType provided invalid. CredentialType: " + n), ie.createUnexpectedCredentialTypeError();
      }
      this.setItem(tn.TOKEN_KEYS + "." + this.clientId, JSON.stringify(o));
    }, e.prototype.removeTokenKey = function(t, n) {
      this.logger.trace("BrowserCacheManager removeTokenKey called");
      var o = this.getTokenKeys();
      switch (n) {
        case he.ID_TOKEN:
          this.logger.infoPii("BrowserCacheManager: removeTokenKey - attempting to remove idToken with key: " + t + " from map");
          var a = o.idToken.indexOf(t);
          a > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - idToken removed from map"), o.idToken.splice(a, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - idToken does not exist in map. Either it was previously removed or it was never added.");
          break;
        case he.ACCESS_TOKEN:
          this.logger.infoPii("BrowserCacheManager: removeTokenKey - attempting to remove accessToken with key: " + t + " from map");
          var s = o.accessToken.indexOf(t);
          s > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - accessToken removed from map"), o.accessToken.splice(s, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - accessToken does not exist in map. Either it was previously removed or it was never added.");
          break;
        case he.REFRESH_TOKEN:
          this.logger.infoPii("BrowserCacheManager: removeTokenKey - attempting to remove refreshToken with key: " + t + " from map");
          var l = o.refreshToken.indexOf(t);
          l > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - refreshToken removed from map"), o.refreshToken.splice(l, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - refreshToken does not exist in map. Either it was previously removed or it was never added.");
          break;
        default:
          this.logger.error("BrowserCacheManager:removeTokenKey - CredentialType provided invalid. CredentialType: " + n), ie.createUnexpectedCredentialTypeError();
      }
      this.setItem(tn.TOKEN_KEYS + "." + this.clientId, JSON.stringify(o));
    }, e.prototype.getIdTokenCredential = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), this.removeTokenKey(t, he.ID_TOKEN), null;
      var o = this.validateAndParseJson(n);
      return !o || !po.isIdTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), this.removeTokenKey(t, he.ID_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getIdTokenCredential: cache hit"), er.toObject(new po(), o));
    }, e.prototype.setIdTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setIdTokenCredential called");
      var n = t.generateCredentialKey();
      this.setItem(n, JSON.stringify(t)), this.addTokenKey(n, he.ID_TOKEN);
    }, e.prototype.getAccessTokenCredential = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), this.removeTokenKey(t, he.ACCESS_TOKEN), null;
      var o = this.validateAndParseJson(n);
      return !o || !go.isAccessTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), this.removeTokenKey(t, he.ACCESS_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: cache hit"), er.toObject(new go(), o));
    }, e.prototype.setAccessTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setAccessTokenCredential called");
      var n = t.generateCredentialKey();
      this.setItem(n, JSON.stringify(t)), this.addTokenKey(n, he.ACCESS_TOKEN);
    }, e.prototype.getRefreshTokenCredential = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), this.removeTokenKey(t, he.REFRESH_TOKEN), null;
      var o = this.validateAndParseJson(n);
      return !o || !Jo.isRefreshTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), this.removeTokenKey(t, he.REFRESH_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: cache hit"), er.toObject(new Jo(), o));
    }, e.prototype.setRefreshTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setRefreshTokenCredential called");
      var n = t.generateCredentialKey();
      this.setItem(n, JSON.stringify(t)), this.addTokenKey(n, he.REFRESH_TOKEN);
    }, e.prototype.getAppMetadata = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return !o || !cu.isAppMetadataEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getAppMetadata: cache hit"), er.toObject(new cu(), o));
    }, e.prototype.setAppMetadata = function(t) {
      this.logger.trace("BrowserCacheManager.setAppMetadata called");
      var n = t.generateAppMetadataKey();
      this.setItem(n, JSON.stringify(t));
    }, e.prototype.getServerTelemetry = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return !o || !Ns.isServerTelemetryEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getServerTelemetry: cache hit"), er.toObject(new Ns(), o));
    }, e.prototype.setServerTelemetry = function(t, n) {
      this.logger.trace("BrowserCacheManager.setServerTelemetry called"), this.setItem(t, JSON.stringify(n));
    }, e.prototype.getAuthorityMetadata = function(t) {
      var n = this.internalStorage.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getAuthorityMetadata: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return o && lu.isAuthorityMetadataEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getAuthorityMetadata: cache hit"), er.toObject(new lu(), o)) : null;
    }, e.prototype.getAuthorityMetadataKeys = function() {
      var t = this, n = this.internalStorage.getKeys();
      return n.filter(function(o) {
        return t.isAuthorityMetadata(o);
      });
    }, e.prototype.setWrapperMetadata = function(t, n) {
      this.internalStorage.setItem(Zo.WRAPPER_SKU, t), this.internalStorage.setItem(Zo.WRAPPER_VER, n);
    }, e.prototype.getWrapperMetadata = function() {
      var t = this.internalStorage.getItem(Zo.WRAPPER_SKU) || O.EMPTY_STRING, n = this.internalStorage.getItem(Zo.WRAPPER_VER) || O.EMPTY_STRING;
      return [t, n];
    }, e.prototype.setAuthorityMetadata = function(t, n) {
      this.logger.trace("BrowserCacheManager.setAuthorityMetadata called"), this.internalStorage.setItem(t, JSON.stringify(n));
    }, e.prototype.getActiveAccount = function() {
      var t = this.generateCacheKey(yt.ACTIVE_ACCOUNT_FILTERS), n = this.getItem(t);
      if (!n) {
        this.logger.trace("BrowserCacheManager.getActiveAccount: No active account filters cache schema found, looking for legacy schema");
        var o = this.generateCacheKey(yt.ACTIVE_ACCOUNT), a = this.getItem(o);
        if (!a)
          return this.logger.trace("BrowserCacheManager.getActiveAccount: No active account found"), null;
        var s = this.getAccountInfoByFilter({ localAccountId: a })[0] || null;
        return s ? (this.logger.trace("BrowserCacheManager.getActiveAccount: Legacy active account cache schema found"), this.logger.trace("BrowserCacheManager.getActiveAccount: Adding active account filters cache schema"), this.setActiveAccount(s), s) : null;
      }
      var l = this.validateAndParseJson(n);
      return l ? (this.logger.trace("BrowserCacheManager.getActiveAccount: Active account filters schema found"), this.getAccountInfoByFilter({
        homeAccountId: l.homeAccountId,
        localAccountId: l.localAccountId
      })[0] || null) : (this.logger.trace("BrowserCacheManager.getActiveAccount: No active account found"), null);
    }, e.prototype.setActiveAccount = function(t) {
      var n = this.generateCacheKey(yt.ACTIVE_ACCOUNT_FILTERS), o = this.generateCacheKey(yt.ACTIVE_ACCOUNT);
      if (t) {
        this.logger.verbose("setActiveAccount: Active account set");
        var a = {
          homeAccountId: t.homeAccountId,
          localAccountId: t.localAccountId
        };
        this.browserStorage.setItem(n, JSON.stringify(a)), this.browserStorage.setItem(o, t.localAccountId);
      } else
        this.logger.verbose("setActiveAccount: No account passed, active account not set"), this.browserStorage.removeItem(n), this.browserStorage.removeItem(o);
    }, e.prototype.getAccountInfoByFilter = function(t) {
      var n = this.getAllAccounts();
      return this.logger.trace("BrowserCacheManager.getAccountInfoByFilter: total " + n.length + " accounts found"), n.filter(function(o) {
        return !(t.username && t.username.toLowerCase() !== o.username.toLowerCase() || t.homeAccountId && t.homeAccountId !== o.homeAccountId || t.localAccountId && t.localAccountId !== o.localAccountId || t.tenantId && t.tenantId !== o.tenantId || t.environment && t.environment !== o.environment);
      });
    }, e.prototype.getAccountInfoByHints = function(t, n) {
      var o = this.getAllAccounts().filter(function(a) {
        if (n) {
          var s = a.idTokenClaims && a.idTokenClaims.sid;
          return n === s;
        }
        return t ? t === a.username : !1;
      });
      if (o.length === 1)
        return o[0];
      if (o.length > 1)
        throw ie.createMultipleMatchingAccountsInCacheError();
      return null;
    }, e.prototype.getThrottlingCache = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return !o || !Up.isThrottlingEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getThrottlingCache: cache hit"), er.toObject(new Up(), o));
    }, e.prototype.setThrottlingCache = function(t, n) {
      this.logger.trace("BrowserCacheManager.setThrottlingCache called"), this.setItem(t, JSON.stringify(n));
    }, e.prototype.getTemporaryCache = function(t, n) {
      var o = n ? this.generateCacheKey(t) : t;
      if (this.cacheConfig.storeAuthStateInCookie) {
        var a = this.getItemCookie(o);
        if (a)
          return this.logger.trace("BrowserCacheManager.getTemporaryCache: storeAuthStateInCookies set to true, retrieving from cookies"), a;
      }
      var s = this.temporaryCacheStorage.getItem(o);
      if (!s) {
        if (this.cacheConfig.cacheLocation === pt.LocalStorage) {
          var l = this.browserStorage.getItem(o);
          if (l)
            return this.logger.trace("BrowserCacheManager.getTemporaryCache: Temporary cache item found in local storage"), l;
        }
        return this.logger.trace("BrowserCacheManager.getTemporaryCache: No cache item found in local storage"), null;
      }
      return this.logger.trace("BrowserCacheManager.getTemporaryCache: Temporary cache item returned"), s;
    }, e.prototype.setTemporaryCache = function(t, n, o) {
      var a = o ? this.generateCacheKey(t) : t;
      this.temporaryCacheStorage.setItem(a, n), this.cacheConfig.storeAuthStateInCookie && (this.logger.trace("BrowserCacheManager.setTemporaryCache: storeAuthStateInCookie set to true, setting item cookie"), this.setItemCookie(a, n));
    }, e.prototype.removeItem = function(t) {
      this.browserStorage.removeItem(t), this.temporaryCacheStorage.removeItem(t), this.cacheConfig.storeAuthStateInCookie && (this.logger.trace("BrowserCacheManager.removeItem: storeAuthStateInCookie is true, clearing item cookie"), this.clearItemCookie(t));
    }, e.prototype.containsKey = function(t) {
      return this.browserStorage.containsKey(t) || this.temporaryCacheStorage.containsKey(t);
    }, e.prototype.getKeys = function() {
      return xu(this.browserStorage.getKeys(), this.temporaryCacheStorage.getKeys());
    }, e.prototype.clear = function() {
      return G(this, void 0, void 0, function() {
        var t = this;
        return z(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this.removeAllAccounts()];
            case 1:
              return n.sent(), this.removeAppMetadata(), this.getKeys().forEach(function(o) {
                (t.browserStorage.containsKey(o) || t.temporaryCacheStorage.containsKey(o)) && (o.indexOf(O.CACHE_PREFIX) !== -1 || o.indexOf(t.clientId) !== -1) && t.removeItem(o);
              }), this.internalStorage.clear(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.clearTokensAndKeysWithClaims = function() {
      return G(this, void 0, void 0, function() {
        var t, n, o = this;
        return z(this, function(a) {
          switch (a.label) {
            case 0:
              return this.logger.trace("BrowserCacheManager.clearTokensAndKeysWithClaims called"), t = this.getTokenKeys(), n = [], t.accessToken.forEach(function(s) {
                var l = o.getAccessTokenCredential(s);
                l != null && l.requestedClaimsHash && s.includes(l.requestedClaimsHash.toLowerCase()) && n.push(o.removeAccessToken(s));
              }), [4, Promise.all(n)];
            case 1:
              return a.sent(), n.length > 0 && this.logger.warning(n.length + " access tokens with claims in the cache keys have been removed from the cache."), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.setItemCookie = function(t, n, o) {
      var a = encodeURIComponent(t) + "=" + encodeURIComponent(n) + ";path=/;SameSite=Lax;";
      if (o) {
        var s = this.getCookieExpirationTime(o);
        a += "expires=" + s + ";";
      }
      this.cacheConfig.secureCookies && (a += "Secure;"), document.cookie = a;
    }, e.prototype.getItemCookie = function(t) {
      for (var n = encodeURIComponent(t) + "=", o = document.cookie.split(";"), a = 0; a < o.length; a++) {
        for (var s = o[a]; s.charAt(0) === " "; )
          s = s.substring(1);
        if (s.indexOf(n) === 0)
          return decodeURIComponent(s.substring(n.length, s.length));
      }
      return O.EMPTY_STRING;
    }, e.prototype.clearMsalCookies = function() {
      var t = this, n = O.CACHE_PREFIX + "." + this.clientId, o = document.cookie.split(";");
      o.forEach(function(a) {
        for (; a.charAt(0) === " "; )
          a = a.substring(1);
        if (a.indexOf(n) === 0) {
          var s = a.split("=")[0];
          t.clearItemCookie(s);
        }
      });
    }, e.prototype.clearItemCookie = function(t) {
      this.setItemCookie(t, O.EMPTY_STRING, -1);
    }, e.prototype.getCookieExpirationTime = function(t) {
      var n = /* @__PURE__ */ new Date(), o = new Date(n.getTime() + t * this.COOKIE_LIFE_MULTIPLIER);
      return o.toUTCString();
    }, e.prototype.getCache = function() {
      return this.browserStorage;
    }, e.prototype.setCache = function() {
    }, e.prototype.generateCacheKey = function(t) {
      var n = this.validateAndParseJson(t);
      return n ? JSON.stringify(t) : re.startsWith(t, O.CACHE_PREFIX) || re.startsWith(t, yt.ADAL_ID_TOKEN) ? t : O.CACHE_PREFIX + "." + this.clientId + "." + t;
    }, e.prototype.generateAuthorityKey = function(t) {
      var n = Tn.parseRequestState(this.cryptoImpl, t).libraryState.id;
      return this.generateCacheKey(Be.AUTHORITY + "." + n);
    }, e.prototype.generateNonceKey = function(t) {
      var n = Tn.parseRequestState(this.cryptoImpl, t).libraryState.id;
      return this.generateCacheKey(Be.NONCE_IDTOKEN + "." + n);
    }, e.prototype.generateStateKey = function(t) {
      var n = Tn.parseRequestState(this.cryptoImpl, t).libraryState.id;
      return this.generateCacheKey(Be.REQUEST_STATE + "." + n);
    }, e.prototype.getCachedAuthority = function(t) {
      var n = this.generateStateKey(t), o = this.getTemporaryCache(n);
      if (!o)
        return null;
      var a = this.generateAuthorityKey(o);
      return this.getTemporaryCache(a);
    }, e.prototype.updateCacheEntries = function(t, n, o, a, s) {
      this.logger.trace("BrowserCacheManager.updateCacheEntries called");
      var l = this.generateStateKey(t);
      this.setTemporaryCache(l, t, !1);
      var u = this.generateNonceKey(t);
      this.setTemporaryCache(u, n, !1);
      var f = this.generateAuthorityKey(t);
      if (this.setTemporaryCache(f, o, !1), s) {
        var h = {
          credential: s.homeAccountId,
          type: gr.HOME_ACCOUNT_ID
        };
        this.setTemporaryCache(Be.CCS_CREDENTIAL, JSON.stringify(h), !0);
      } else if (!re.isEmpty(a)) {
        var h = {
          credential: a,
          type: gr.UPN
        };
        this.setTemporaryCache(Be.CCS_CREDENTIAL, JSON.stringify(h), !0);
      }
    }, e.prototype.resetRequestCache = function(t) {
      var n = this;
      this.logger.trace("BrowserCacheManager.resetRequestCache called"), re.isEmpty(t) || this.getKeys().forEach(function(o) {
        o.indexOf(t) !== -1 && n.removeItem(o);
      }), t && (this.removeItem(this.generateStateKey(t)), this.removeItem(this.generateNonceKey(t)), this.removeItem(this.generateAuthorityKey(t))), this.removeItem(this.generateCacheKey(Be.REQUEST_PARAMS)), this.removeItem(this.generateCacheKey(Be.ORIGIN_URI)), this.removeItem(this.generateCacheKey(Be.URL_HASH)), this.removeItem(this.generateCacheKey(Be.CORRELATION_ID)), this.removeItem(this.generateCacheKey(Be.CCS_CREDENTIAL)), this.removeItem(this.generateCacheKey(Be.NATIVE_REQUEST)), this.setInteractionInProgress(!1);
    }, e.prototype.cleanRequestByState = function(t) {
      if (this.logger.trace("BrowserCacheManager.cleanRequestByState called"), t) {
        var n = this.generateStateKey(t), o = this.temporaryCacheStorage.getItem(n);
        this.logger.infoPii("BrowserCacheManager.cleanRequestByState: Removing temporary cache items for state: " + o), this.resetRequestCache(o || O.EMPTY_STRING);
      }
      this.clearMsalCookies();
    }, e.prototype.cleanRequestByInteractionType = function(t) {
      var n = this;
      this.logger.trace("BrowserCacheManager.cleanRequestByInteractionType called"), this.getKeys().forEach(function(o) {
        if (o.indexOf(Be.REQUEST_STATE) !== -1) {
          var a = n.temporaryCacheStorage.getItem(o);
          if (a) {
            var s = um.extractBrowserRequestState(n.cryptoImpl, a);
            s && s.interactionType === t && (n.logger.infoPii("BrowserCacheManager.cleanRequestByInteractionType: Removing temporary cache items for state: " + a), n.resetRequestCache(a));
          }
        }
      }), this.clearMsalCookies(), this.setInteractionInProgress(!1);
    }, e.prototype.cacheCodeRequest = function(t, n) {
      this.logger.trace("BrowserCacheManager.cacheCodeRequest called");
      var o = n.base64Encode(JSON.stringify(t));
      this.setTemporaryCache(Be.REQUEST_PARAMS, o, !0);
    }, e.prototype.getCachedRequest = function(t, n) {
      this.logger.trace("BrowserCacheManager.getCachedRequest called");
      var o = this.getTemporaryCache(Be.REQUEST_PARAMS, !0);
      if (!o)
        throw X.createNoTokenRequestCacheError();
      var a = this.validateAndParseJson(n.base64Decode(o));
      if (!a)
        throw X.createUnableToParseTokenRequestCacheError();
      if (this.removeItem(this.generateCacheKey(Be.REQUEST_PARAMS)), re.isEmpty(a.authority)) {
        var s = this.generateAuthorityKey(t), l = this.getTemporaryCache(s);
        if (!l)
          throw X.createNoCachedAuthorityError();
        a.authority = l;
      }
      return a;
    }, e.prototype.getCachedNativeRequest = function() {
      this.logger.trace("BrowserCacheManager.getCachedNativeRequest called");
      var t = this.getTemporaryCache(Be.NATIVE_REQUEST, !0);
      if (!t)
        return this.logger.trace("BrowserCacheManager.getCachedNativeRequest: No cached native request found"), null;
      var n = this.validateAndParseJson(t);
      return n || (this.logger.error("BrowserCacheManager.getCachedNativeRequest: Unable to parse native request"), null);
    }, e.prototype.isInteractionInProgress = function(t) {
      var n = this.getInteractionInProgress();
      return t ? n === this.clientId : !!n;
    }, e.prototype.getInteractionInProgress = function() {
      var t = O.CACHE_PREFIX + "." + Be.INTERACTION_STATUS_KEY;
      return this.getTemporaryCache(t, !1);
    }, e.prototype.setInteractionInProgress = function(t) {
      var n = O.CACHE_PREFIX + "." + Be.INTERACTION_STATUS_KEY;
      if (t) {
        if (this.getInteractionInProgress())
          throw X.createInteractionInProgressError();
        this.setTemporaryCache(n, this.clientId, !1);
      } else
        !t && this.getInteractionInProgress() === this.clientId && this.removeItem(n);
    }, e.prototype.getLegacyLoginHint = function() {
      var t = this.getTemporaryCache(yt.ADAL_ID_TOKEN);
      t && (this.browserStorage.removeItem(yt.ADAL_ID_TOKEN), this.logger.verbose("Cached ADAL id token retrieved."));
      var n = this.getTemporaryCache(yt.ID_TOKEN, !0);
      n && (this.removeItem(this.generateCacheKey(yt.ID_TOKEN)), this.logger.verbose("Cached MSAL.js v1 id token retrieved"));
      var o = n || t;
      if (o) {
        var a = new sn(o, this.cryptoImpl);
        if (a.claims && a.claims.preferred_username)
          return this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 preferred_username as loginHint"), a.claims.preferred_username;
        if (a.claims && a.claims.upn)
          return this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 upn as loginHint"), a.claims.upn;
        this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, however, no account hint claim found. Enable preferred_username or upn id token claim to get SSO.");
      }
      return null;
    }, e.prototype.updateCredentialCacheKey = function(t, n) {
      var o = n.generateCredentialKey();
      if (t !== o) {
        var a = this.getItem(t);
        if (a)
          return this.removeItem(t), this.setItem(o, a), this.logger.verbose("Updated an outdated " + n.credentialType + " cache key"), o;
        this.logger.error("Attempted to update an outdated " + n.credentialType + " cache key but no item matching the outdated key was found in storage");
      }
      return t;
    }, e.prototype.getRedirectRequestContext = function() {
      return this.getTemporaryCache(Be.REDIRECT_CONTEXT, !0);
    }, e.prototype.setRedirectRequestContext = function(t) {
      this.setTemporaryCache(Be.REDIRECT_CONTEXT, t, !0);
    }, e;
  }(er)
), JI = function(r, e) {
  var t = {
    cacheLocation: pt.MemoryStorage,
    temporaryCacheLocation: pt.MemoryStorage,
    storeAuthStateInCookie: !1,
    secureCookies: !1,
    cacheMigrationEnabled: !1,
    claimsBasedCachingEnabled: !0
  };
  return new fu(r, t, Ts, e);
};
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Dl = "@azure/msal-browser", ji = "2.38.3";
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var XI = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.sendGetRequestAsync = function(e, t) {
      return G(this, void 0, void 0, function() {
        var n, o, a;
        return z(this, function(s) {
          switch (s.label) {
            case 0:
              return s.trys.push([0, 2, , 3]), [4, fetch(e, {
                method: rn.GET,
                headers: this.getFetchHeaders(t)
              })];
            case 1:
              return n = s.sent(), [3, 3];
            case 2:
              throw o = s.sent(), window.navigator.onLine ? X.createGetRequestFailedError(o, e) : X.createNoNetworkConnectivityError();
            case 3:
              return s.trys.push([3, 5, , 6]), a = {
                headers: this.getHeaderDict(n.headers)
              }, [4, n.json()];
            case 4:
              return [2, (a.body = s.sent(), a.status = n.status, a)];
            case 5:
              throw s.sent(), X.createFailedToParseNetworkResponseError(e);
            case 6:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.sendPostRequestAsync = function(e, t) {
      return G(this, void 0, void 0, function() {
        var n, o, a, s;
        return z(this, function(l) {
          switch (l.label) {
            case 0:
              n = t && t.body || O.EMPTY_STRING, l.label = 1;
            case 1:
              return l.trys.push([1, 3, , 4]), [4, fetch(e, {
                method: rn.POST,
                headers: this.getFetchHeaders(t),
                body: n
              })];
            case 2:
              return o = l.sent(), [3, 4];
            case 3:
              throw a = l.sent(), window.navigator.onLine ? X.createPostRequestFailedError(a, e) : X.createNoNetworkConnectivityError();
            case 4:
              return l.trys.push([4, 6, , 7]), s = {
                headers: this.getHeaderDict(o.headers)
              }, [4, o.json()];
            case 5:
              return [2, (s.body = l.sent(), s.status = o.status, s)];
            case 6:
              throw l.sent(), X.createFailedToParseNetworkResponseError(e);
            case 7:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.getFetchHeaders = function(e) {
      var t = new Headers();
      if (!(e && e.headers))
        return t;
      var n = e.headers;
      return Object.keys(n).forEach(function(o) {
        t.append(o, n[o]);
      }), t;
    }, r.prototype.getHeaderDict = function(e) {
      var t = {};
      return e.forEach(function(n, o) {
        t[o] = n;
      }), t;
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var ZI = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.sendGetRequestAsync = function(e, t) {
      return G(this, void 0, void 0, function() {
        return z(this, function(n) {
          return [2, this.sendRequestAsync(e, rn.GET, t)];
        });
      });
    }, r.prototype.sendPostRequestAsync = function(e, t) {
      return G(this, void 0, void 0, function() {
        return z(this, function(n) {
          return [2, this.sendRequestAsync(e, rn.POST, t)];
        });
      });
    }, r.prototype.sendRequestAsync = function(e, t, n) {
      var o = this;
      return new Promise(function(a, s) {
        var l = new XMLHttpRequest();
        if (l.open(
          t,
          e,
          /* async: */
          !0
        ), o.setXhrHeaders(l, n), l.onload = function() {
          (l.status < 200 || l.status >= 300) && (t === rn.POST ? s(X.createPostRequestFailedError("Failed with status " + l.status, e)) : s(X.createGetRequestFailedError("Failed with status " + l.status, e)));
          try {
            var u = JSON.parse(l.responseText), f = {
              headers: o.getHeaderDict(l),
              body: u,
              status: l.status
            };
            a(f);
          } catch {
            s(X.createFailedToParseNetworkResponseError(e));
          }
        }, l.onerror = function() {
          window.navigator.onLine ? t === rn.POST ? s(X.createPostRequestFailedError("Failed with status " + l.status, e)) : s(X.createGetRequestFailedError("Failed with status " + l.status, e)) : s(X.createNoNetworkConnectivityError());
        }, t === rn.POST && n && n.body)
          l.send(n.body);
        else if (t === rn.GET)
          l.send();
        else
          throw X.createHttpMethodNotImplementedError(t);
      });
    }, r.prototype.setXhrHeaders = function(e, t) {
      if (t && t.headers) {
        var n = t.headers;
        Object.keys(n).forEach(function(o) {
          e.setRequestHeader(o, n[o]);
        });
      }
    }, r.prototype.getHeaderDict = function(e) {
      var t = e.getAllResponseHeaders(), n = t.trim().split(/[\r\n]+/), o = {};
      return n.forEach(function(a) {
        var s = a.split(": "), l = s.shift(), u = s.join(": ");
        l && u && (o[l] = u);
      }), o;
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var ct = (
  /** @class */
  function() {
    function r() {
    }
    return r.clearHash = function(e) {
      e.location.hash = O.EMPTY_STRING, typeof e.history.replaceState == "function" && e.history.replaceState(null, O.EMPTY_STRING, "" + e.location.origin + e.location.pathname + e.location.search);
    }, r.replaceHash = function(e) {
      var t = e.split("#");
      t.shift(), window.location.hash = t.length > 0 ? t.join("#") : O.EMPTY_STRING;
    }, r.isInIframe = function() {
      return window.parent !== window;
    }, r.isInPopup = function() {
      return typeof window < "u" && !!window.opener && window.opener !== window && typeof window.name == "string" && window.name.indexOf($r.POPUP_NAME_PREFIX + ".") === 0;
    }, r.getCurrentUri = function() {
      return window.location.href.split("?")[0].split("#")[0];
    }, r.getHomepage = function() {
      var e = new He(window.location.href), t = e.getUrlComponents();
      return t.Protocol + "//" + t.HostNameAndPort + "/";
    }, r.getBrowserNetworkClient = function() {
      return window.fetch && window.Headers ? new XI() : new ZI();
    }, r.blockReloadInHiddenIframes = function() {
      var e = He.hashContainsKnownProperties(window.location.hash);
      if (e && r.isInIframe())
        throw X.createBlockReloadInHiddenIframeError();
    }, r.blockRedirectInIframe = function(e, t) {
      var n = r.isInIframe();
      if (e === ce.Redirect && n && !t)
        throw X.createRedirectInIframeError(n);
    }, r.blockAcquireTokenInPopups = function() {
      if (r.isInPopup())
        throw X.createBlockAcquireTokenInPopupsError();
    }, r.blockNonBrowserEnvironment = function(e) {
      if (!e)
        throw X.createNonBrowserEnvironmentError();
    }, r.blockNativeBrokerCalledBeforeInitialized = function(e, t) {
      if (e && !t)
        throw X.createNativeBrokerCalledBeforeInitialize();
    }, r.detectIEOrEdge = function() {
      var e = window.navigator.userAgent, t = e.indexOf("MSIE "), n = e.indexOf("Trident/"), o = e.indexOf("Edge/"), a = t > 0 || n > 0, s = o > 0;
      return a || s;
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var dm = (
  /** @class */
  function() {
    function r(e, t, n, o, a, s, l, u, f) {
      this.config = e, this.browserStorage = t, this.browserCrypto = n, this.networkClient = this.config.system.networkClient, this.eventHandler = a, this.navigationClient = s, this.nativeMessageHandler = u, this.correlationId = f || this.browserCrypto.createNewGuid(), this.logger = o.clone($r.MSAL_SKU, ji, this.correlationId), this.performanceClient = l;
    }
    return r.prototype.clearCacheOnLogout = function(e) {
      return G(this, void 0, void 0, function() {
        return z(this, function(t) {
          switch (t.label) {
            case 0:
              if (!e)
                return [3, 5];
              Rt.accountInfoIsEqual(e, this.browserStorage.getActiveAccount(), !1) && (this.logger.verbose("Setting active account to null"), this.browserStorage.setActiveAccount(null)), t.label = 1;
            case 1:
              return t.trys.push([1, 3, , 4]), [4, this.browserStorage.removeAccount(Rt.generateAccountCacheKey(e))];
            case 2:
              return t.sent(), this.logger.verbose("Cleared cache items belonging to the account provided in the logout request."), [3, 4];
            case 3:
              return t.sent(), this.logger.error("Account provided in logout request was not found. Local cache unchanged."), [3, 4];
            case 4:
              return [3, 9];
            case 5:
              return t.trys.push([5, 8, , 9]), this.logger.verbose("No account provided in logout request, clearing all cache items.", this.correlationId), [4, this.browserStorage.clear()];
            case 6:
              return t.sent(), [4, this.browserCrypto.clearKeystore()];
            case 7:
              return t.sent(), [3, 9];
            case 8:
              return t.sent(), this.logger.error("Attempted to clear all MSAL cache items and failed. Local cache unchanged."), [3, 9];
            case 9:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.initializeBaseRequest = function(e, t) {
      return G(this, void 0, void 0, function() {
        var n, o, a, s;
        return z(this, function(l) {
          switch (l.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(F.InitializeBaseRequest, e.correlationId), this.logger.verbose("Initializing BaseAuthRequest"), n = e.authority || this.config.auth.authority, t ? [4, this.validateRequestAuthority(n, t)] : [3, 2];
            case 1:
              l.sent(), l.label = 2;
            case 2:
              if (o = xu(e && e.scopes || []), a = le(le({}, e), {
                correlationId: this.correlationId,
                authority: n,
                scopes: o
              }), !a.authenticationScheme)
                a.authenticationScheme = Ve.BEARER, this.logger.verbose(`Authentication Scheme wasn't explicitly set in request, defaulting to "Bearer" request`);
              else {
                if (a.authenticationScheme === Ve.SSH) {
                  if (!e.sshJwk)
                    throw et.createMissingSshJwkError();
                  if (!e.sshKid)
                    throw et.createMissingSshKidError();
                }
                this.logger.verbose('Authentication Scheme set to "' + a.authenticationScheme + '" as configured in Auth request');
              }
              return this.config.cache.claimsBasedCachingEnabled && e.claims && !re.isEmptyObj(e.claims) ? (s = a, [4, this.browserCrypto.hashString(e.claims)]) : [3, 4];
            case 3:
              s.requestedClaimsHash = l.sent(), l.label = 4;
            case 4:
              return [2, a];
          }
        });
      });
    }, r.prototype.getRedirectUri = function(e) {
      this.logger.verbose("getRedirectUri called");
      var t = e || this.config.auth.redirectUri || ct.getCurrentUri();
      return He.getAbsoluteUrl(t, ct.getCurrentUri());
    }, r.prototype.validateRequestAuthority = function(e, t) {
      return G(this, void 0, void 0, function() {
        var n;
        return z(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, this.getDiscoveredAuthority(e)];
            case 1:
              if (n = o.sent(), !n.isAlias(t.environment))
                throw et.createAuthorityMismatchError();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.initializeServerTelemetryManager = function(e, t) {
      this.logger.verbose("initializeServerTelemetryManager called");
      var n = {
        clientId: this.config.auth.clientId,
        correlationId: this.correlationId,
        apiId: e,
        forceRefresh: t || !1,
        wrapperSKU: this.browserStorage.getWrapperMetadata()[0],
        wrapperVer: this.browserStorage.getWrapperMetadata()[1]
      };
      return new WI(n, this.browserStorage);
    }, r.prototype.getDiscoveredAuthority = function(e) {
      return G(this, void 0, void 0, function() {
        var t;
        return z(this, function(n) {
          switch (n.label) {
            case 0:
              return this.logger.verbose("getDiscoveredAuthority called"), t = {
                protocolMode: this.config.auth.protocolMode,
                knownAuthorities: this.config.auth.knownAuthorities,
                cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                authorityMetadata: this.config.auth.authorityMetadata
              }, e ? (this.logger.verbose("Creating discovered authority with request authority"), [4, Ps.createDiscoveredInstance(e, this.config.system.networkClient, this.browserStorage, t, this.logger)]) : [3, 2];
            case 1:
              return [2, n.sent()];
            case 2:
              return this.logger.verbose("Creating discovered authority with configured authority"), [4, Ps.createDiscoveredInstance(this.config.auth.authority, this.config.system.networkClient, this.browserStorage, t, this.logger)];
            case 3:
              return [2, n.sent()];
          }
        });
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var ui = (
  /** @class */
  function(r) {
    kt(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.initializeAuthorizationCodeRequest = function(t) {
      return G(this, void 0, void 0, function() {
        var n, o;
        return z(this, function(a) {
          switch (a.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(F.StandardInteractionClientInitializeAuthorizationCodeRequest, t.correlationId), this.logger.verbose("initializeAuthorizationRequest called", t.correlationId), [4, this.browserCrypto.generatePkceCodes()];
            case 1:
              return n = a.sent(), o = le(le({}, t), { redirectUri: t.redirectUri, code: O.EMPTY_STRING, codeVerifier: n.verifier }), t.codeChallenge = n.challenge, t.codeChallengeMethod = O.S256_CODE_CHALLENGE_METHOD, [2, o];
          }
        });
      });
    }, e.prototype.initializeLogoutRequest = function(t) {
      this.logger.verbose("initializeLogoutRequest called", t == null ? void 0 : t.correlationId);
      var n = le({ correlationId: this.correlationId || this.browserCrypto.createNewGuid() }, t);
      if (t)
        if (t.logoutHint)
          this.logger.verbose("logoutHint has already been set in logoutRequest");
        else if (t.account) {
          var o = this.getLogoutHintFromIdTokenClaims(t.account);
          o && (this.logger.verbose("Setting logoutHint to login_hint ID Token Claim value for the account provided"), n.logoutHint = o);
        } else
          this.logger.verbose("logoutHint was not set and account was not passed into logout request, logoutHint will not be set");
      else
        this.logger.verbose("logoutHint will not be set since no logout request was configured");
      return !t || t.postLogoutRedirectUri !== null ? t && t.postLogoutRedirectUri ? (this.logger.verbose("Setting postLogoutRedirectUri to uri set on logout request", n.correlationId), n.postLogoutRedirectUri = He.getAbsoluteUrl(t.postLogoutRedirectUri, ct.getCurrentUri())) : this.config.auth.postLogoutRedirectUri === null ? this.logger.verbose("postLogoutRedirectUri configured as null and no uri set on request, not passing post logout redirect", n.correlationId) : this.config.auth.postLogoutRedirectUri ? (this.logger.verbose("Setting postLogoutRedirectUri to configured uri", n.correlationId), n.postLogoutRedirectUri = He.getAbsoluteUrl(this.config.auth.postLogoutRedirectUri, ct.getCurrentUri())) : (this.logger.verbose("Setting postLogoutRedirectUri to current page", n.correlationId), n.postLogoutRedirectUri = He.getAbsoluteUrl(ct.getCurrentUri(), ct.getCurrentUri())) : this.logger.verbose("postLogoutRedirectUri passed as null, not setting post logout redirect uri", n.correlationId), n;
    }, e.prototype.getLogoutHintFromIdTokenClaims = function(t) {
      var n = t.idTokenClaims;
      if (n) {
        if (n.login_hint)
          return n.login_hint;
        this.logger.verbose("The ID Token Claims tied to the provided account do not contain a login_hint claim, logoutHint will not be added to logout request");
      } else
        this.logger.verbose("The provided account does not contain ID Token Claims, logoutHint will not be added to logout request");
      return null;
    }, e.prototype.createAuthCodeClient = function(t, n, o) {
      return G(this, void 0, void 0, function() {
        var a;
        return z(this, function(s) {
          switch (s.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(F.StandardInteractionClientCreateAuthCodeClient, this.correlationId), this.performanceClient.setPreQueueTime(F.StandardInteractionClientGetClientConfiguration, this.correlationId), [4, this.getClientConfiguration(t, n, o)];
            case 1:
              return a = s.sent(), [2, new am(a, this.performanceClient)];
          }
        });
      });
    }, e.prototype.getClientConfiguration = function(t, n, o) {
      return G(this, void 0, void 0, function() {
        var a, s;
        return z(this, function(l) {
          switch (l.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(F.StandardInteractionClientGetClientConfiguration, this.correlationId), this.logger.verbose("getClientConfiguration called", this.correlationId), this.performanceClient.setPreQueueTime(F.StandardInteractionClientGetDiscoveredAuthority, this.correlationId), [4, this.getDiscoveredAuthority(n, o)];
            case 1:
              return a = l.sent(), s = this.config.system.loggerOptions, [2, {
                authOptions: {
                  clientId: this.config.auth.clientId,
                  authority: a,
                  clientCapabilities: this.config.auth.clientCapabilities
                },
                systemOptions: {
                  tokenRenewalOffsetSeconds: this.config.system.tokenRenewalOffsetSeconds,
                  preventCorsPreflight: !0
                },
                loggerOptions: {
                  loggerCallback: s.loggerCallback,
                  piiLoggingEnabled: s.piiLoggingEnabled,
                  logLevel: s.logLevel,
                  correlationId: this.correlationId
                },
                cacheOptions: {
                  claimsBasedCachingEnabled: this.config.cache.claimsBasedCachingEnabled
                },
                cryptoInterface: this.browserCrypto,
                networkInterface: this.networkClient,
                storageInterface: this.browserStorage,
                serverTelemetryManager: t,
                libraryInfo: {
                  sku: $r.MSAL_SKU,
                  version: ji,
                  cpu: O.EMPTY_STRING,
                  os: O.EMPTY_STRING
                },
                telemetry: this.config.telemetry
              }];
          }
        });
      });
    }, e.prototype.validateAndExtractStateFromHash = function(t, n, o) {
      if (this.logger.verbose("validateAndExtractStateFromHash called", o), !t.state)
        throw X.createHashDoesNotContainStateError();
      var a = um.extractBrowserRequestState(this.browserCrypto, t.state);
      if (!a)
        throw X.createUnableToParseStateError();
      if (a.interactionType !== n)
        throw X.createStateInteractionTypeMismatchError();
      return this.logger.verbose("Returning state from hash", o), t.state;
    }, e.prototype.getDiscoveredAuthority = function(t, n) {
      var o;
      return G(this, void 0, void 0, function() {
        var a, s, l, u;
        return z(this, function(f) {
          switch (f.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(F.StandardInteractionClientGetDiscoveredAuthority, this.correlationId), this.logger.verbose("getDiscoveredAuthority called", this.correlationId), a = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(F.StandardInteractionClientGetDiscoveredAuthority, this.correlationId), s = {
                protocolMode: this.config.auth.protocolMode,
                knownAuthorities: this.config.auth.knownAuthorities,
                cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                authorityMetadata: this.config.auth.authorityMetadata,
                skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
              }, l = t || this.config.auth.authority, u = Xi.generateAuthority(l, n || this.config.auth.azureCloudOptions), this.logger.verbose("Creating discovered authority with configured authority", this.correlationId), this.performanceClient.setPreQueueTime(F.AuthorityFactoryCreateDiscoveredInstance, this.correlationId), [4, Ps.createDiscoveredInstance(u, this.config.system.networkClient, this.browserStorage, s, this.logger, this.performanceClient, this.correlationId).then(function(h) {
                return a.endMeasurement({
                  success: !0
                }), h;
              }).catch(function(h) {
                throw a.endMeasurement({
                  errorCode: h.errorCode,
                  subErrorCode: h.subError,
                  success: !1
                }), h;
              })];
            case 1:
              return [2, f.sent()];
          }
        });
      });
    }, e.prototype.initializeAuthorizationRequest = function(t, n) {
      return G(this, void 0, void 0, function() {
        var o, a, s, l, u, f, h;
        return z(this, function(p) {
          switch (p.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(F.StandardInteractionClientInitializeAuthorizationRequest, this.correlationId), this.logger.verbose("initializeAuthorizationRequest called", this.correlationId), o = this.getRedirectUri(t.redirectUri), a = {
                interactionType: n
              }, s = Tn.setRequestState(this.browserCrypto, t && t.state || O.EMPTY_STRING, a), this.performanceClient.setPreQueueTime(F.InitializeBaseRequest, this.correlationId), u = [{}], [4, this.initializeBaseRequest(t)];
            case 1:
              return l = le.apply(void 0, [le.apply(void 0, u.concat([p.sent()])), { redirectUri: o, state: s, nonce: t.nonce || this.browserCrypto.createNewGuid(), responseMode: bs.FRAGMENT }]), f = t.account || this.browserStorage.getActiveAccount(), f && (this.logger.verbose("Setting validated request account", this.correlationId), this.logger.verbosePii("Setting validated request account: " + f.homeAccountId, this.correlationId), l.account = f), re.isEmpty(l.loginHint) && !f && (h = this.browserStorage.getLegacyLoginHint(), h && (l.loginHint = h)), [2, l];
          }
        });
      });
    }, e;
  }(dm)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Hu = (
  /** @class */
  function() {
    function r(e, t, n, o, a) {
      this.authModule = e, this.browserStorage = t, this.authCodeRequest = n, this.logger = o, this.performanceClient = a;
    }
    return r.prototype.handleCodeResponseFromHash = function(e, t, n, o) {
      return G(this, void 0, void 0, function() {
        var a, s, l;
        return z(this, function(u) {
          if (this.performanceClient.addQueueMeasurement(F.HandleCodeResponseFromHash, this.authCodeRequest.correlationId), this.logger.verbose("InteractionHandler.handleCodeResponse called"), re.isEmpty(e))
            throw X.createEmptyHashError(e);
          if (a = this.browserStorage.generateStateKey(t), s = this.browserStorage.getTemporaryCache(a), !s)
            throw ie.createStateNotFoundError("Cached State");
          try {
            l = this.authModule.handleFragmentResponse(e, s);
          } catch (f) {
            throw f instanceof wo && f.subError === W.userCancelledError.code ? X.createUserCancelledError() : f;
          }
          return this.performanceClient.setPreQueueTime(F.HandleCodeResponseFromServer, this.authCodeRequest.correlationId), [2, this.handleCodeResponseFromServer(l, t, n, o)];
        });
      });
    }, r.prototype.handleCodeResponseFromServer = function(e, t, n, o, a) {
      return a === void 0 && (a = !0), G(this, void 0, void 0, function() {
        var s, l, u, f, h, p;
        return z(this, function(g) {
          switch (g.label) {
            case 0:
              if (this.performanceClient.addQueueMeasurement(F.HandleCodeResponseFromServer, this.authCodeRequest.correlationId), this.logger.trace("InteractionHandler.handleCodeResponseFromServer called"), s = this.browserStorage.generateStateKey(t), l = this.browserStorage.getTemporaryCache(s), !l)
                throw ie.createStateNotFoundError("Cached State");
              return u = this.browserStorage.generateNonceKey(l), f = this.browserStorage.getTemporaryCache(u), this.authCodeRequest.code = e.code, e.cloud_instance_host_name ? (this.performanceClient.setPreQueueTime(F.UpdateTokenEndpointAuthority, this.authCodeRequest.correlationId), [4, this.updateTokenEndpointAuthority(e.cloud_instance_host_name, n, o)]) : [3, 2];
            case 1:
              g.sent(), g.label = 2;
            case 2:
              return a && (e.nonce = f || void 0), e.state = l, e.client_info ? this.authCodeRequest.clientInfo = e.client_info : (h = this.checkCcsCredentials(), h && (this.authCodeRequest.ccsCredential = h)), this.performanceClient.setPreQueueTime(F.AuthClientAcquireToken, this.authCodeRequest.correlationId), [4, this.authModule.acquireToken(this.authCodeRequest, e)];
            case 3:
              return p = g.sent(), this.browserStorage.cleanRequestByState(t), [2, p];
          }
        });
      });
    }, r.prototype.updateTokenEndpointAuthority = function(e, t, n) {
      return G(this, void 0, void 0, function() {
        var o, a;
        return z(this, function(s) {
          switch (s.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(F.UpdateTokenEndpointAuthority, this.authCodeRequest.correlationId), o = "https://" + e + "/" + t.tenant + "/", [4, Ps.createDiscoveredInstance(o, n, this.browserStorage, t.options, this.logger, this.performanceClient, this.authCodeRequest.correlationId)];
            case 1:
              return a = s.sent(), this.authModule.updateAuthority(a), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.checkCcsCredentials = function() {
      var e = this.browserStorage.getTemporaryCache(Be.CCS_CREDENTIAL, !0);
      if (e)
        try {
          return JSON.parse(e);
        } catch {
          this.authModule.logger.error("Cache credential could not be parsed"), this.authModule.logger.errorPii("Cache credential could not be parsed: " + e);
        }
      return null;
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Gp = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t, n, o, a, s, l) {
      var u = r.call(this, t, n, o, a, l) || this;
      return u.browserCrypto = s, u;
    }
    return e.prototype.initiateAuthRequest = function(t, n) {
      return G(this, void 0, void 0, function() {
        var o, a;
        return z(this, function(s) {
          switch (s.label) {
            case 0:
              return this.logger.verbose("RedirectHandler.initiateAuthRequest called"), re.isEmpty(t) ? [3, 7] : (n.redirectStartPage && (this.logger.verbose("RedirectHandler.initiateAuthRequest: redirectStartPage set, caching start page"), this.browserStorage.setTemporaryCache(Be.ORIGIN_URI, n.redirectStartPage, !0)), this.browserStorage.setTemporaryCache(Be.CORRELATION_ID, this.authCodeRequest.correlationId, !0), this.browserStorage.cacheCodeRequest(this.authCodeRequest, this.browserCrypto), this.logger.infoPii("RedirectHandler.initiateAuthRequest: Navigate to: " + t), o = {
                apiId: Ze.acquireTokenRedirect,
                timeout: n.redirectTimeout,
                noHistory: !1
              }, typeof n.onRedirectNavigate != "function" ? [3, 4] : (this.logger.verbose("RedirectHandler.initiateAuthRequest: Invoking onRedirectNavigate callback"), a = n.onRedirectNavigate(t), a === !1 ? [3, 2] : (this.logger.verbose("RedirectHandler.initiateAuthRequest: onRedirectNavigate did not return false, navigating"), [4, n.navigationClient.navigateExternal(t, o)])));
            case 1:
              return s.sent(), [
                2
                /*return*/
              ];
            case 2:
              return this.logger.verbose("RedirectHandler.initiateAuthRequest: onRedirectNavigate returned false, stopping navigation"), [
                2
                /*return*/
              ];
            case 3:
              return [3, 6];
            case 4:
              return this.logger.verbose("RedirectHandler.initiateAuthRequest: Navigating window to navigate url"), [4, n.navigationClient.navigateExternal(t, o)];
            case 5:
              return s.sent(), [
                2
                /*return*/
              ];
            case 6:
              return [3, 8];
            case 7:
              throw this.logger.info("RedirectHandler.initiateAuthRequest: Navigate url is empty"), X.createEmptyNavigationUriError();
            case 8:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.handleCodeResponseFromHash = function(t, n, o, a) {
      return G(this, void 0, void 0, function() {
        var s, l, u, f, h, p, g;
        return z(this, function(v) {
          switch (v.label) {
            case 0:
              if (this.logger.verbose("RedirectHandler.handleCodeResponse called"), re.isEmpty(t))
                throw X.createEmptyHashError(t);
              if (this.browserStorage.setInteractionInProgress(!1), s = this.browserStorage.generateStateKey(n), l = this.browserStorage.getTemporaryCache(s), !l)
                throw ie.createStateNotFoundError("Cached State");
              try {
                u = this.authModule.handleFragmentResponse(t, l);
              } catch (C) {
                throw C instanceof wo && C.subError === W.userCancelledError.code ? X.createUserCancelledError() : C;
              }
              return f = this.browserStorage.generateNonceKey(l), h = this.browserStorage.getTemporaryCache(f), this.authCodeRequest.code = u.code, u.cloud_instance_host_name ? [4, this.updateTokenEndpointAuthority(u.cloud_instance_host_name, o, a)] : [3, 2];
            case 1:
              v.sent(), v.label = 2;
            case 2:
              return u.nonce = h || void 0, u.state = l, u.client_info ? this.authCodeRequest.clientInfo = u.client_info : (p = this.checkCcsCredentials(), p && (this.authCodeRequest.ccsCredential = p)), [4, this.authModule.acquireToken(this.authCodeRequest, u)];
            case 3:
              return g = v.sent(), this.browserStorage.cleanRequestByState(n), [2, g];
          }
        });
      });
    }, e;
  }(Hu)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Ee;
(function(r) {
  r.INITIALIZE_START = "msal:initializeStart", r.INITIALIZE_END = "msal:initializeEnd", r.ACCOUNT_ADDED = "msal:accountAdded", r.ACCOUNT_REMOVED = "msal:accountRemoved", r.LOGIN_START = "msal:loginStart", r.LOGIN_SUCCESS = "msal:loginSuccess", r.LOGIN_FAILURE = "msal:loginFailure", r.ACQUIRE_TOKEN_START = "msal:acquireTokenStart", r.ACQUIRE_TOKEN_SUCCESS = "msal:acquireTokenSuccess", r.ACQUIRE_TOKEN_FAILURE = "msal:acquireTokenFailure", r.ACQUIRE_TOKEN_NETWORK_START = "msal:acquireTokenFromNetworkStart", r.SSO_SILENT_START = "msal:ssoSilentStart", r.SSO_SILENT_SUCCESS = "msal:ssoSilentSuccess", r.SSO_SILENT_FAILURE = "msal:ssoSilentFailure", r.ACQUIRE_TOKEN_BY_CODE_START = "msal:acquireTokenByCodeStart", r.ACQUIRE_TOKEN_BY_CODE_SUCCESS = "msal:acquireTokenByCodeSuccess", r.ACQUIRE_TOKEN_BY_CODE_FAILURE = "msal:acquireTokenByCodeFailure", r.HANDLE_REDIRECT_START = "msal:handleRedirectStart", r.HANDLE_REDIRECT_END = "msal:handleRedirectEnd", r.POPUP_OPENED = "msal:popupOpened", r.LOGOUT_START = "msal:logoutStart", r.LOGOUT_SUCCESS = "msal:logoutSuccess", r.LOGOUT_FAILURE = "msal:logoutFailure", r.LOGOUT_END = "msal:logoutEnd", r.RESTORE_FROM_BFCACHE = "msal:restoreFromBFCache";
})(Ee || (Ee = {}));
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var $n;
(function(r) {
  r.USER_INTERACTION_REQUIRED = "USER_INTERACTION_REQUIRED", r.USER_CANCEL = "USER_CANCEL", r.NO_NETWORK = "NO_NETWORK", r.TRANSIENT_ERROR = "TRANSIENT_ERROR", r.PERSISTENT_ERROR = "PERSISTENT_ERROR", r.DISABLED = "DISABLED", r.ACCOUNT_UNAVAILABLE = "ACCOUNT_UNAVAILABLE";
})($n || ($n = {}));
var Li = {
  extensionError: {
    code: "ContentError"
  },
  userSwitch: {
    code: "user_switch",
    desc: "User attempted to switch accounts in the native broker, which is not allowed. All new accounts must sign-in through the standard web flow first, please try again."
  },
  tokensNotFoundInCache: {
    code: "tokens_not_found_in_internal_memory_cache",
    desc: "Tokens not cached in MSAL JS internal memory, please make the WAM request"
  }
}, on = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t, n, o) {
      var a = r.call(this, t, n) || this;
      return Object.setPrototypeOf(a, e.prototype), a.name = "NativeAuthError", a.ext = o, a;
    }
    return e.prototype.isFatal = function() {
      if (this.ext && this.ext.status && (this.ext.status === $n.PERSISTENT_ERROR || this.ext.status === $n.DISABLED))
        return !0;
      switch (this.errorCode) {
        case Li.extensionError.code:
          return !0;
        default:
          return !1;
      }
    }, e.createError = function(t, n, o) {
      if (o && o.status)
        switch (o.status) {
          case $n.ACCOUNT_UNAVAILABLE:
            return zr.createNativeAccountUnavailableError();
          case $n.USER_INTERACTION_REQUIRED:
            return new zr(t, n);
          case $n.USER_CANCEL:
            return X.createUserCancelledError();
          case $n.NO_NETWORK:
            return X.createNoNetworkConnectivityError();
        }
      return new e(t, n, o);
    }, e.createUserSwitchError = function() {
      return new e(Li.userSwitch.code, Li.userSwitch.desc);
    }, e.createTokensNotFoundInCacheError = function() {
      return new e(Li.tokensNotFoundInCache.code, Li.tokensNotFoundInCache.desc);
    }, e;
  }(ue)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var fm = (
  /** @class */
  function(r) {
    kt(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.acquireToken = function(t) {
      return G(this, void 0, void 0, function() {
        var n, o, a, s, l;
        return z(this, function(u) {
          switch (u.label) {
            case 0:
              return n = this.performanceClient.startMeasurement(F.SilentCacheClientAcquireToken, t.correlationId), o = this.initializeServerTelemetryManager(Ze.acquireTokenSilent_silentFlow), [4, this.createSilentFlowClient(o, t.authority, t.azureCloudOptions)];
            case 1:
              a = u.sent(), this.logger.verbose("Silent auth client created"), u.label = 2;
            case 2:
              return u.trys.push([2, 4, , 5]), [4, a.acquireCachedToken(t)];
            case 3:
              return s = u.sent(), n.endMeasurement({
                success: !0,
                fromCache: !0
              }), [2, s];
            case 4:
              throw l = u.sent(), l instanceof X && l.errorCode === W.signingKeyNotFoundInStorage.code && this.logger.verbose("Signing keypair for bound access token not found. Refreshing bound access token and generating a new crypto keypair."), n.endMeasurement({
                errorCode: l instanceof ue && l.errorCode || void 0,
                subErrorCode: l instanceof ue && l.subError || void 0,
                success: !1
              }), l;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.logout = function() {
      return Promise.reject(X.createSilentLogoutUnsupportedError());
    }, e.prototype.createSilentFlowClient = function(t, n, o) {
      return G(this, void 0, void 0, function() {
        var a;
        return z(this, function(s) {
          switch (s.label) {
            case 0:
              return this.performanceClient.setPreQueueTime(F.StandardInteractionClientGetClientConfiguration, this.correlationId), [4, this.getClientConfiguration(t, n, o)];
            case 1:
              return a = s.sent(), [2, new BI(a, this.performanceClient)];
          }
        });
      });
    }, e.prototype.initializeSilentRequest = function(t, n) {
      return G(this, void 0, void 0, function() {
        var o;
        return z(this, function(a) {
          switch (a.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(F.InitializeSilentRequest, this.correlationId), this.performanceClient.setPreQueueTime(F.InitializeBaseRequest, this.correlationId), o = [le({}, t)], [4, this.initializeBaseRequest(t, n)];
            case 1:
              return [2, le.apply(void 0, [le.apply(void 0, o.concat([a.sent()])), { account: n, forceRefresh: t.forceRefresh || !1 }])];
          }
        });
      });
    }, e;
  }(ui)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var ri = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t, n, o, a, s, l, u, f, h, p, g, v) {
      var C = r.call(this, t, n, o, a, s, l, f, h, v) || this;
      return C.apiId = u, C.accountId = p, C.nativeMessageHandler = h, C.nativeStorageManager = g, C.silentCacheClient = new fm(t, C.nativeStorageManager, o, a, s, l, f, h, v), C;
    }
    return e.prototype.acquireToken = function(t) {
      return G(this, void 0, void 0, function() {
        var n, o, a, s, l, u, f;
        return z(this, function(h) {
          switch (h.label) {
            case 0:
              return this.logger.trace("NativeInteractionClient - acquireToken called."), n = this.performanceClient.startMeasurement(F.NativeInteractionClientAcquireToken, t.correlationId), o = Pr.nowSeconds(), [4, this.initializeNativeRequest(t)];
            case 1:
              a = h.sent(), h.label = 2;
            case 2:
              return h.trys.push([2, 4, , 5]), [4, this.acquireTokensFromCache(this.accountId, a)];
            case 3:
              return s = h.sent(), n.endMeasurement({
                success: !0,
                isNativeBroker: !1,
                fromCache: !0
              }), [2, s];
            case 4:
              return h.sent(), this.logger.info("MSAL internal Cache does not contain tokens, proceed to make a native call"), [3, 5];
            case 5:
              return l = {
                method: Sn.GetToken,
                request: a
              }, [4, this.nativeMessageHandler.sendMessage(l)];
            case 6:
              return u = h.sent(), f = this.validateNativeResponse(u), [2, this.handleNativeResponse(f, a, o).then(function(p) {
                return n.endMeasurement({
                  success: !0,
                  isNativeBroker: !0,
                  requestId: p.requestId
                }), p;
              }).catch(function(p) {
                throw n.endMeasurement({
                  success: !1,
                  errorCode: p.errorCode,
                  subErrorCode: p.subError,
                  isNativeBroker: !0
                }), p;
              })];
          }
        });
      });
    }, e.prototype.createSilentCacheRequest = function(t, n) {
      return {
        authority: t.authority,
        correlationId: this.correlationId,
        scopes: Dt.fromString(t.scope).asArray(),
        account: n,
        forceRefresh: !1
      };
    }, e.prototype.acquireTokensFromCache = function(t, n) {
      return G(this, void 0, void 0, function() {
        var o, a, s, l;
        return z(this, function(u) {
          switch (u.label) {
            case 0:
              if (!t)
                throw this.logger.warning("NativeInteractionClient:acquireTokensFromCache - No nativeAccountId provided"), ie.createNoAccountFoundError();
              if (o = this.browserStorage.getAccountInfoFilteredBy({ nativeAccountId: t }), !o)
                throw ie.createNoAccountFoundError();
              u.label = 1;
            case 1:
              return u.trys.push([1, 3, , 4]), a = this.createSilentCacheRequest(n, o), [4, this.silentCacheClient.acquireToken(a)];
            case 2:
              return s = u.sent(), [2, s];
            case 3:
              throw l = u.sent(), l;
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.acquireTokenRedirect = function(t) {
      return G(this, void 0, void 0, function() {
        var n, o, a, s, l, u;
        return z(this, function(f) {
          switch (f.label) {
            case 0:
              return this.logger.trace("NativeInteractionClient - acquireTokenRedirect called."), [4, this.initializeNativeRequest(t)];
            case 1:
              n = f.sent(), o = {
                method: Sn.GetToken,
                request: n
              }, f.label = 2;
            case 2:
              return f.trys.push([2, 4, , 5]), [4, this.nativeMessageHandler.sendMessage(o)];
            case 3:
              return a = f.sent(), this.validateNativeResponse(a), [3, 5];
            case 4:
              if (s = f.sent(), s instanceof on && s.isFatal())
                throw s;
              return [3, 5];
            case 5:
              return this.browserStorage.setTemporaryCache(Be.NATIVE_REQUEST, JSON.stringify(n), !0), l = {
                apiId: Ze.acquireTokenRedirect,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !1
              }, u = this.config.auth.navigateToLoginRequestUrl ? window.location.href : this.getRedirectUri(t.redirectUri), [4, this.navigationClient.navigateExternal(u, l)];
            case 6:
              return f.sent(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.handleRedirectPromise = function() {
      return G(this, void 0, void 0, function() {
        var t, n, o, a, s, l, u, f;
        return z(this, function(h) {
          switch (h.label) {
            case 0:
              if (this.logger.trace("NativeInteractionClient - handleRedirectPromise called."), !this.browserStorage.isInteractionInProgress(!0))
                return this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null."), [2, null];
              if (t = this.browserStorage.getCachedNativeRequest(), !t)
                return this.logger.verbose("NativeInteractionClient - handleRedirectPromise called but there is no cached request, returning null."), [2, null];
              n = t.prompt, o = Pp(t, ["prompt"]), n && this.logger.verbose("NativeInteractionClient - handleRedirectPromise called and prompt was included in the original request, removing prompt from cached request to prevent second interaction with native broker window."), this.browserStorage.removeItem(this.browserStorage.generateCacheKey(Be.NATIVE_REQUEST)), a = {
                method: Sn.GetToken,
                request: o
              }, s = Pr.nowSeconds(), h.label = 1;
            case 1:
              return h.trys.push([1, 3, , 4]), this.logger.verbose("NativeInteractionClient - handleRedirectPromise sending message to native broker."), [4, this.nativeMessageHandler.sendMessage(a)];
            case 2:
              return l = h.sent(), this.validateNativeResponse(l), u = this.handleNativeResponse(l, o, s), this.browserStorage.setInteractionInProgress(!1), [2, u];
            case 3:
              throw f = h.sent(), this.browserStorage.setInteractionInProgress(!1), f;
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.logout = function() {
      return this.logger.trace("NativeInteractionClient - logout called."), Promise.reject("Logout not implemented yet");
    }, e.prototype.handleNativeResponse = function(t, n, o) {
      return G(this, void 0, void 0, function() {
        var a, s, l, u, f, h;
        return z(this, function(p) {
          switch (p.label) {
            case 0:
              if (this.logger.trace("NativeInteractionClient - handleNativeResponse called."), t.account.id !== n.accountId)
                throw on.createUserSwitchError();
              return [4, this.getDiscoveredAuthority(n.authority)];
            case 1:
              return a = p.sent(), s = a.getPreferredCache(), l = this.createIdTokenObj(t), u = this.createHomeAccountIdentifier(t, l), f = this.createAccountEntity(t, u, l, s), [4, this.generateAuthenticationResult(t, n, l, f, a.canonicalAuthority, o)];
            case 2:
              return h = p.sent(), this.cacheAccount(f), this.cacheNativeTokens(t, n, u, f, l, h.accessToken, h.tenantId, o), [2, h];
          }
        });
      });
    }, e.prototype.createIdTokenObj = function(t) {
      return new sn(t.id_token || O.EMPTY_STRING, this.browserCrypto);
    }, e.prototype.createHomeAccountIdentifier = function(t, n) {
      var o = Rt.generateHomeAccountId(t.client_info || O.EMPTY_STRING, Vt.Default, this.logger, this.browserCrypto, n);
      return o;
    }, e.prototype.createAccountEntity = function(t, n, o, a) {
      return Rt.createAccount(t.client_info, n, o, void 0, void 0, void 0, a, t.account.id);
    }, e.prototype.generateScopes = function(t, n) {
      return t.scope ? Dt.fromString(t.scope) : Dt.fromString(n.scope);
    }, e.prototype.generatePopAccessToken = function(t, n) {
      return G(this, void 0, void 0, function() {
        var o, a;
        return z(this, function(s) {
          switch (s.label) {
            case 0:
              if (n.tokenType !== Ve.POP)
                return [3, 2];
              if (t.shr)
                return this.logger.trace("handleNativeServerResponse: SHR is enabled in native layer"), [2, t.shr];
              if (o = new oi(this.browserCrypto), a = {
                resourceRequestMethod: n.resourceRequestMethod,
                resourceRequestUri: n.resourceRequestUri,
                shrClaims: n.shrClaims,
                shrNonce: n.shrNonce
              }, !n.keyId)
                throw ie.createKeyIdMissingError();
              return [4, o.signPopToken(t.access_token, n.keyId, a)];
            case 1:
              return [2, s.sent()];
            case 2:
              return [2, t.access_token];
          }
        });
      });
    }, e.prototype.generateAuthenticationResult = function(t, n, o, a, s, l) {
      return G(this, void 0, void 0, function() {
        var u, f, h, p, g, v, C, E;
        return z(this, function(_) {
          switch (_.label) {
            case 0:
              return u = this.addTelemetryFromNativeResponse(t), f = t.scope ? Dt.fromString(t.scope) : Dt.fromString(n.scope), h = t.account.properties || {}, p = h.UID || o.claims.oid || o.claims.sub || O.EMPTY_STRING, g = h.TenantId || o.claims.tid || O.EMPTY_STRING, [4, this.generatePopAccessToken(t, n)];
            case 1:
              return v = _.sent(), C = n.tokenType === Ve.POP ? Ve.POP : Ve.BEARER, E = {
                authority: s,
                uniqueId: p,
                tenantId: g,
                scopes: f.asArray(),
                account: a.getAccountInfo(),
                idToken: t.id_token,
                idTokenClaims: o.claims,
                accessToken: v,
                fromCache: u ? this.isResponseFromCache(u) : !1,
                expiresOn: new Date(Number(l + t.expires_in) * 1e3),
                tokenType: C,
                correlationId: this.correlationId,
                state: t.state,
                fromNativeBroker: !0
              }, [2, E];
          }
        });
      });
    }, e.prototype.cacheAccount = function(t) {
      var n = this;
      this.browserStorage.setAccount(t), this.browserStorage.removeAccountContext(t).catch(function(o) {
        n.logger.error("Error occurred while removing account context from browser storage. " + o);
      });
    }, e.prototype.cacheNativeTokens = function(t, n, o, a, s, l, u, f) {
      var h = po.createIdTokenEntity(o, n.authority, t.id_token || O.EMPTY_STRING, n.clientId, s.claims.tid || O.EMPTY_STRING), p = n.tokenType === Ve.POP ? O.SHR_NONCE_VALIDITY : (typeof t.expires_in == "string" ? parseInt(t.expires_in, 10) : t.expires_in) || 0, g = f + p, v = this.generateScopes(t, n), C = go.createAccessTokenEntity(o, n.authority, l, n.clientId, s ? s.claims.tid || O.EMPTY_STRING : u, v.printScopes(), g, 0, this.browserCrypto), E = new Wi(a, h, C);
      this.nativeStorageManager.saveCacheRecord(E);
    }, e.prototype.addTelemetryFromNativeResponse = function(t) {
      var n = this.getMATSFromResponse(t);
      return n ? (this.performanceClient.addStaticFields({
        extensionId: this.nativeMessageHandler.getExtensionId(),
        extensionVersion: this.nativeMessageHandler.getExtensionVersion(),
        matsBrokerVersion: n.broker_version,
        matsAccountJoinOnStart: n.account_join_on_start,
        matsAccountJoinOnEnd: n.account_join_on_end,
        matsDeviceJoin: n.device_join,
        matsPromptBehavior: n.prompt_behavior,
        matsApiErrorCode: n.api_error_code,
        matsUiVisible: n.ui_visible,
        matsSilentCode: n.silent_code,
        matsSilentBiSubCode: n.silent_bi_sub_code,
        matsSilentMessage: n.silent_message,
        matsSilentStatus: n.silent_status,
        matsHttpStatus: n.http_status,
        matsHttpEventCount: n.http_event_count
      }, this.correlationId), n) : null;
    }, e.prototype.validateNativeResponse = function(t) {
      if (t.hasOwnProperty("access_token") && t.hasOwnProperty("id_token") && t.hasOwnProperty("client_info") && t.hasOwnProperty("account") && t.hasOwnProperty("scope") && t.hasOwnProperty("expires_in"))
        return t;
      throw on.createUnexpectedError("Response missing expected properties.");
    }, e.prototype.getMATSFromResponse = function(t) {
      if (t.properties.MATS)
        try {
          return JSON.parse(t.properties.MATS);
        } catch {
          this.logger.error("NativeInteractionClient - Error parsing MATS telemetry, returning null instead");
        }
      return null;
    }, e.prototype.isResponseFromCache = function(t) {
      return typeof t.is_cached > "u" ? (this.logger.verbose("NativeInteractionClient - MATS telemetry does not contain field indicating if response was served from cache. Returning false."), !1) : !!t.is_cached;
    }, e.prototype.initializeNativeRequest = function(t) {
      return G(this, void 0, void 0, function() {
        var n, o, a, s, l, u, f, h, p, g, v = this;
        return z(this, function(C) {
          switch (C.label) {
            case 0:
              return this.logger.trace("NativeInteractionClient - initializeNativeRequest called"), n = t.authority || this.config.auth.authority, t.account ? [4, this.validateRequestAuthority(n, t.account)] : [3, 2];
            case 1:
              C.sent(), C.label = 2;
            case 2:
              return o = new He(n), o.validateAsUri(), a = t.scopes, s = Pp(t, ["scopes"]), l = new Dt(a || []), l.appendScopes(sa), u = function() {
                switch (v.apiId) {
                  case Ze.ssoSilent:
                  case Ze.acquireTokenSilent_silentFlow:
                    return v.logger.trace("initializeNativeRequest: silent request sets prompt to none"), Ft.NONE;
                }
                if (!t.prompt) {
                  v.logger.trace("initializeNativeRequest: prompt was not provided");
                  return;
                }
                switch (t.prompt) {
                  case Ft.NONE:
                  case Ft.CONSENT:
                  case Ft.LOGIN:
                    return v.logger.trace("initializeNativeRequest: prompt is compatible with native flow"), t.prompt;
                  default:
                    throw v.logger.trace("initializeNativeRequest: prompt = " + t.prompt + " is not compatible with native flow"), X.createNativePromptParameterNotSupportedError();
                }
              }, f = le(le({}, s), {
                accountId: this.accountId,
                clientId: this.config.auth.clientId,
                authority: o.urlString,
                scope: l.printScopes(),
                redirectUri: this.getRedirectUri(t.redirectUri),
                prompt: u(),
                correlationId: this.correlationId,
                tokenType: t.authenticationScheme,
                windowTitleSubstring: document.title,
                extraParameters: le(le(le({}, t.extraQueryParameters), t.tokenQueryParameters), { telemetry: Hi.MATS_TELEMETRY }),
                extendedExpiryToken: !1
                // Make this configurable?
              }), t.authenticationScheme !== Ve.POP ? [3, 4] : (h = {
                resourceRequestUri: t.resourceRequestUri,
                resourceRequestMethod: t.resourceRequestMethod,
                shrClaims: t.shrClaims,
                shrNonce: t.shrNonce
              }, p = new oi(this.browserCrypto), [4, p.generateCnf(h)]);
            case 3:
              g = C.sent(), f.reqCnf = g.reqCnfString, f.keyId = g.kid, C.label = 4;
            case 4:
              return [2, f];
          }
        });
      });
    }, e;
  }(dm)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var vo = (
  /** @class */
  function() {
    function r(e, t, n, o) {
      this.logger = e, this.handshakeTimeoutMs = t, this.extensionId = o, this.resolvers = /* @__PURE__ */ new Map(), this.handshakeResolvers = /* @__PURE__ */ new Map(), this.responseId = 0, this.messageChannel = new MessageChannel(), this.windowListener = this.onWindowMessage.bind(this), this.performanceClient = n, this.handshakeEvent = n.startMeasurement(F.NativeMessageHandlerHandshake);
    }
    return r.prototype.sendMessage = function(e) {
      return G(this, void 0, void 0, function() {
        var t, n = this;
        return z(this, function(o) {
          return this.logger.trace("NativeMessageHandler - sendMessage called."), t = {
            channel: Hi.CHANNEL_ID,
            extensionId: this.extensionId,
            responseId: this.responseId++,
            body: e
          }, this.logger.trace("NativeMessageHandler - Sending request to browser extension"), this.logger.tracePii("NativeMessageHandler - Sending request to browser extension: " + JSON.stringify(t)), this.messageChannel.port1.postMessage(t), [2, new Promise(function(a, s) {
            n.resolvers.set(t.responseId, { resolve: a, reject: s });
          })];
        });
      });
    }, r.createProvider = function(e, t, n) {
      return G(this, void 0, void 0, function() {
        var o, a;
        return z(this, function(s) {
          switch (s.label) {
            case 0:
              e.trace("NativeMessageHandler - createProvider called."), s.label = 1;
            case 1:
              return s.trys.push([1, 3, , 5]), o = new r(e, t, n, Hi.PREFERRED_EXTENSION_ID), [4, o.sendHandshakeRequest()];
            case 2:
              return s.sent(), [2, o];
            case 3:
              return s.sent(), a = new r(e, t, n), [4, a.sendHandshakeRequest()];
            case 4:
              return s.sent(), [2, a];
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.sendHandshakeRequest = function() {
      return G(this, void 0, void 0, function() {
        var e, t = this;
        return z(this, function(n) {
          return this.logger.trace("NativeMessageHandler - sendHandshakeRequest called."), window.addEventListener("message", this.windowListener, !1), e = {
            channel: Hi.CHANNEL_ID,
            extensionId: this.extensionId,
            responseId: this.responseId++,
            body: {
              method: Sn.HandshakeRequest
            }
          }, this.handshakeEvent.addStaticFields({
            extensionId: this.extensionId,
            extensionHandshakeTimeoutMs: this.handshakeTimeoutMs
          }), this.messageChannel.port1.onmessage = function(o) {
            t.onChannelMessage(o);
          }, window.postMessage(e, window.origin, [this.messageChannel.port2]), [2, new Promise(function(o, a) {
            t.handshakeResolvers.set(e.responseId, { resolve: o, reject: a }), t.timeoutId = window.setTimeout(function() {
              window.removeEventListener("message", t.windowListener, !1), t.messageChannel.port1.close(), t.messageChannel.port2.close(), t.handshakeEvent.endMeasurement({ extensionHandshakeTimedOut: !0, success: !1 }), a(X.createNativeHandshakeTimeoutError()), t.handshakeResolvers.delete(e.responseId);
            }, t.handshakeTimeoutMs);
          })];
        });
      });
    }, r.prototype.onWindowMessage = function(e) {
      if (this.logger.trace("NativeMessageHandler - onWindowMessage called"), e.source === window) {
        var t = e.data;
        if (!(!t.channel || t.channel !== Hi.CHANNEL_ID) && !(t.extensionId && t.extensionId !== this.extensionId) && t.body.method === Sn.HandshakeRequest) {
          this.logger.verbose(t.extensionId ? "Extension with id: " + t.extensionId + " not installed" : "No extension installed"), clearTimeout(this.timeoutId), this.messageChannel.port1.close(), this.messageChannel.port2.close(), window.removeEventListener("message", this.windowListener, !1);
          var n = this.handshakeResolvers.get(t.responseId);
          n && (this.handshakeEvent.endMeasurement({ success: !1, extensionInstalled: !1 }), n.reject(X.createNativeExtensionNotInstalledError()));
        }
      }
    }, r.prototype.onChannelMessage = function(e) {
      this.logger.trace("NativeMessageHandler - onChannelMessage called.");
      var t = e.data, n = this.resolvers.get(t.responseId), o = this.handshakeResolvers.get(t.responseId);
      try {
        var a = t.body.method;
        if (a === Sn.Response) {
          if (!n)
            return;
          var s = t.body.response;
          if (this.logger.trace("NativeMessageHandler - Received response from browser extension"), this.logger.tracePii("NativeMessageHandler - Received response from browser extension: " + JSON.stringify(s)), s.status !== "Success")
            n.reject(on.createError(s.code, s.description, s.ext));
          else if (s.result)
            s.result.code && s.result.description ? n.reject(on.createError(s.result.code, s.result.description, s.result.ext)) : n.resolve(s.result);
          else
            throw ue.createUnexpectedError("Event does not contain result.");
          this.resolvers.delete(t.responseId);
        } else if (a === Sn.HandshakeResponse) {
          if (!o)
            return;
          clearTimeout(this.timeoutId), window.removeEventListener("message", this.windowListener, !1), this.extensionId = t.extensionId, this.extensionVersion = t.body.version, this.logger.verbose("NativeMessageHandler - Received HandshakeResponse from extension: " + this.extensionId), this.handshakeEvent.endMeasurement({ extensionInstalled: !0, success: !0 }), o.resolve(), this.handshakeResolvers.delete(t.responseId);
        }
      } catch (l) {
        this.logger.error("Error parsing response from WAM Extension"), this.logger.errorPii("Error parsing response from WAM Extension: " + l.toString()), this.logger.errorPii("Unable to parse " + e), n ? n.reject(l) : o && o.reject(l);
      }
    }, r.prototype.getExtensionId = function() {
      return this.extensionId;
    }, r.prototype.getExtensionVersion = function() {
      return this.extensionVersion;
    }, r.isNativeAvailable = function(e, t, n, o) {
      if (t.trace("isNativeAvailable called"), !e.system.allowNativeBroker)
        return t.trace("isNativeAvailable: allowNativeBroker is not enabled, returning false"), !1;
      if (!n)
        return t.trace("isNativeAvailable: WAM extension provider is not initialized, returning false"), !1;
      if (o)
        switch (o) {
          case Ve.BEARER:
          case Ve.POP:
            return t.trace("isNativeAvailable: authenticationScheme is supported, returning true"), !0;
          default:
            return t.trace("isNativeAvailable: authenticationScheme is not supported, returning false"), !1;
        }
      return !0;
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var eA = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t, n, o, a, s, l, u, f, h, p) {
      var g = r.call(this, t, n, o, a, s, l, u, h, p) || this;
      return g.nativeStorage = f, g;
    }
    return e.prototype.acquireToken = function(t) {
      return G(this, void 0, void 0, function() {
        var n, o, a, s, l, u, f, h, p, g = this;
        return z(this, function(v) {
          switch (v.label) {
            case 0:
              return this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, ce.Redirect)];
            case 1:
              n = v.sent(), this.browserStorage.updateCacheEntries(n.state, n.nonce, n.authority, n.loginHint || O.EMPTY_STRING, n.account || null), o = this.initializeServerTelemetryManager(Ze.acquireTokenRedirect), a = function(C) {
                C.persisted && (g.logger.verbose("Page was restored from back/forward cache. Clearing temporary cache."), g.browserStorage.cleanRequestByState(n.state), g.eventHandler.emitEvent(Ee.RESTORE_FROM_BFCACHE, ce.Redirect));
              }, v.label = 2;
            case 2:
              return v.trys.push([2, 7, , 8]), this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationCodeRequest, t.correlationId), [4, this.initializeAuthorizationCodeRequest(n)];
            case 3:
              return s = v.sent(), this.performanceClient.setPreQueueTime(F.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(o, n.authority, n.azureCloudOptions)];
            case 4:
              return l = v.sent(), this.logger.verbose("Auth code client created"), u = new Gp(l, this.browserStorage, s, this.logger, this.browserCrypto, this.performanceClient), [4, l.getAuthCodeUrl(le(le({}, n), { nativeBroker: vo.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, t.authenticationScheme) }))];
            case 5:
              return f = v.sent(), h = this.getRedirectStartPage(t.redirectStartPage), this.logger.verbosePii("Redirect start page: " + h), window.addEventListener("pageshow", a), [4, u.initiateAuthRequest(f, {
                navigationClient: this.navigationClient,
                redirectTimeout: this.config.system.redirectNavigationTimeout,
                redirectStartPage: h,
                onRedirectNavigate: t.onRedirectNavigate
              })];
            case 6:
              return [2, v.sent()];
            case 7:
              throw p = v.sent(), p instanceof ue && p.setCorrelationId(this.correlationId), window.removeEventListener("pageshow", a), o.cacheFailedRequest(p), this.browserStorage.cleanRequestByState(n.state), p;
            case 8:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.handleRedirectPromise = function(t) {
      return G(this, void 0, void 0, function() {
        var n, o, a, s, l, u, f, h, p, g, v, C;
        return z(this, function(E) {
          switch (E.label) {
            case 0:
              n = this.initializeServerTelemetryManager(Ze.handleRedirectPromise), E.label = 1;
            case 1:
              if (E.trys.push([1, 10, , 11]), !this.browserStorage.isInteractionInProgress(!0))
                return this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null."), [2, null];
              if (o = this.getRedirectResponseHash(t || window.location.hash), !o)
                return this.logger.info("handleRedirectPromise did not detect a response hash as a result of a redirect. Cleaning temporary cache."), this.browserStorage.cleanRequestByInteractionType(ce.Redirect), [2, null];
              a = void 0;
              try {
                s = He.getDeserializedHash(o), a = this.validateAndExtractStateFromHash(s, ce.Redirect), this.logger.verbose("State extracted from hash");
              } catch (_) {
                return this.logger.info("handleRedirectPromise was unable to extract state due to: " + _), this.browserStorage.cleanRequestByInteractionType(ce.Redirect), [2, null];
              }
              return l = this.browserStorage.getTemporaryCache(Be.ORIGIN_URI, !0) || O.EMPTY_STRING, u = He.removeHashFromUrl(l), f = He.removeHashFromUrl(window.location.href), u === f && this.config.auth.navigateToLoginRequestUrl ? (this.logger.verbose("Current page is loginRequestUrl, handling hash"), [4, this.handleHash(o, a, n)]) : [3, 3];
            case 2:
              return h = E.sent(), l.indexOf("#") > -1 && ct.replaceHash(l), [2, h];
            case 3:
              return this.config.auth.navigateToLoginRequestUrl ? [3, 4] : (this.logger.verbose("NavigateToLoginRequestUrl set to false, handling hash"), [2, this.handleHash(o, a, n)]);
            case 4:
              return !ct.isInIframe() || this.config.system.allowRedirectInIframe ? (this.browserStorage.setTemporaryCache(Be.URL_HASH, o, !0), p = {
                apiId: Ze.handleRedirectPromise,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !0
              }, g = !0, !l || l === "null" ? (v = ct.getHomepage(), this.browserStorage.setTemporaryCache(Be.ORIGIN_URI, v, !0), this.logger.warning("Unable to get valid login request url from cache, redirecting to home page"), [4, this.navigationClient.navigateInternal(v, p)]) : [3, 6]) : [3, 9];
            case 5:
              return g = E.sent(), [3, 8];
            case 6:
              return this.logger.verbose("Navigating to loginRequestUrl: " + l), [4, this.navigationClient.navigateInternal(l, p)];
            case 7:
              g = E.sent(), E.label = 8;
            case 8:
              if (!g)
                return [2, this.handleHash(o, a, n)];
              E.label = 9;
            case 9:
              return [2, null];
            case 10:
              throw C = E.sent(), C instanceof ue && C.setCorrelationId(this.correlationId), n.cacheFailedRequest(C), this.browserStorage.cleanRequestByInteractionType(ce.Redirect), C;
            case 11:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.getRedirectResponseHash = function(t) {
      this.logger.verbose("getRedirectResponseHash called");
      var n = He.hashContainsKnownProperties(t);
      if (n)
        return ct.clearHash(window), this.logger.verbose("Hash contains known properties, returning response hash"), t;
      var o = this.browserStorage.getTemporaryCache(Be.URL_HASH, !0);
      return this.browserStorage.removeItem(this.browserStorage.generateCacheKey(Be.URL_HASH)), this.logger.verbose("Hash does not contain known properties, returning cached hash"), o;
    }, e.prototype.handleHash = function(t, n, o) {
      return G(this, void 0, void 0, function() {
        var a, s, l, u, f, h, p, g = this;
        return z(this, function(v) {
          switch (v.label) {
            case 0:
              if (a = this.browserStorage.getCachedRequest(n, this.browserCrypto), this.logger.verbose("handleHash called, retrieved cached request"), s = He.getDeserializedHash(t), s.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), !this.nativeMessageHandler)
                  throw X.createNativeConnectionNotEstablishedError();
                return l = new ri(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, s.accountId, this.nativeStorage, a.correlationId), u = Tn.parseRequestState(this.browserCrypto, n).userRequestState, [2, l.acquireToken(le(le({}, a), {
                  state: u,
                  prompt: void 0
                  // Server should handle the prompt, ideally native broker can do this part silently
                })).finally(function() {
                  g.browserStorage.cleanRequestByState(n);
                })];
              }
              if (f = this.browserStorage.getCachedAuthority(n), !f)
                throw X.createNoCachedAuthorityError();
              return this.performanceClient.setPreQueueTime(F.StandardInteractionClientCreateAuthCodeClient, a.correlationId), [4, this.createAuthCodeClient(o, f)];
            case 1:
              return h = v.sent(), this.logger.verbose("Auth code client created"), As.removeThrottle(this.browserStorage, this.config.auth.clientId, a), p = new Gp(h, this.browserStorage, a, this.logger, this.browserCrypto, this.performanceClient), [4, p.handleCodeResponseFromHash(t, n, h.authority, this.networkClient)];
            case 2:
              return [2, v.sent()];
          }
        });
      });
    }, e.prototype.logout = function(t) {
      return G(this, void 0, void 0, function() {
        var n, o, a, s, l, u, f;
        return z(this, function(h) {
          switch (h.label) {
            case 0:
              this.logger.verbose("logoutRedirect called"), n = this.initializeLogoutRequest(t), o = this.initializeServerTelemetryManager(Ze.logout), h.label = 1;
            case 1:
              return h.trys.push([1, 10, , 11]), this.eventHandler.emitEvent(Ee.LOGOUT_START, ce.Redirect, t), [4, this.clearCacheOnLogout(n.account)];
            case 2:
              return h.sent(), a = {
                apiId: Ze.logout,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !1
              }, this.performanceClient.setPreQueueTime(F.StandardInteractionClientCreateAuthCodeClient, n.correlationId), [4, this.createAuthCodeClient(o, t && t.authority)];
            case 3:
              return s = h.sent(), this.logger.verbose("Auth code client created"), l = s.getLogoutUri(n), this.eventHandler.emitEvent(Ee.LOGOUT_SUCCESS, ce.Redirect, n), t && typeof t.onRedirectNavigate == "function" ? (u = t.onRedirectNavigate(l), u === !1 ? [3, 5] : (this.logger.verbose("Logout onRedirectNavigate did not return false, navigating"), this.browserStorage.getInteractionInProgress() || this.browserStorage.setInteractionInProgress(!0), [4, this.navigationClient.navigateExternal(l, a)])) : [3, 7];
            case 4:
              return h.sent(), [
                2
                /*return*/
              ];
            case 5:
              this.browserStorage.setInteractionInProgress(!1), this.logger.verbose("Logout onRedirectNavigate returned false, stopping navigation"), h.label = 6;
            case 6:
              return [3, 9];
            case 7:
              return this.browserStorage.getInteractionInProgress() || this.browserStorage.setInteractionInProgress(!0), [4, this.navigationClient.navigateExternal(l, a)];
            case 8:
              return h.sent(), [
                2
                /*return*/
              ];
            case 9:
              return [3, 11];
            case 10:
              throw f = h.sent(), f instanceof ue && f.setCorrelationId(this.correlationId), o.cacheFailedRequest(f), this.eventHandler.emitEvent(Ee.LOGOUT_FAILURE, ce.Redirect, null, f), this.eventHandler.emitEvent(Ee.LOGOUT_END, ce.Redirect), f;
            case 11:
              return this.eventHandler.emitEvent(Ee.LOGOUT_END, ce.Redirect), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.getRedirectStartPage = function(t) {
      var n = t || window.location.href;
      return He.getAbsoluteUrl(n, ct.getCurrentUri());
    }, e;
  }(ui)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var tA = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t, n, o, a, s, l, u, f, h, p) {
      var g = r.call(this, t, n, o, a, s, l, u, h, p) || this;
      return g.unloadWindow = g.unloadWindow.bind(g), g.nativeStorage = f, g;
    }
    return e.prototype.acquireToken = function(t) {
      try {
        var n = this.generatePopupName(t.scopes || sa, t.authority || this.config.auth.authority), o = t.popupWindowAttributes || {};
        if (this.config.system.asyncPopups)
          return this.logger.verbose("asyncPopups set to true, acquiring token"), this.acquireTokenPopupAsync(t, n, o);
        this.logger.verbose("asyncPopup set to false, opening popup before acquiring token");
        var a = this.openSizedPopup("about:blank", n, o);
        return this.acquireTokenPopupAsync(t, n, o, a);
      } catch (s) {
        return Promise.reject(s);
      }
    }, e.prototype.logout = function(t) {
      try {
        this.logger.verbose("logoutPopup called");
        var n = this.initializeLogoutRequest(t), o = this.generateLogoutPopupName(n), a = t && t.authority, s = t && t.mainWindowRedirectUri, l = (t == null ? void 0 : t.popupWindowAttributes) || {};
        if (this.config.system.asyncPopups)
          return this.logger.verbose("asyncPopups set to true"), this.logoutPopupAsync(n, o, l, a, void 0, s);
        this.logger.verbose("asyncPopup set to false, opening popup");
        var u = this.openSizedPopup("about:blank", o, l);
        return this.logoutPopupAsync(n, o, l, a, u, s);
      } catch (f) {
        return Promise.reject(f);
      }
    }, e.prototype.acquireTokenPopupAsync = function(t, n, o, a) {
      return G(this, void 0, void 0, function() {
        var s, l, u, f, h, p, g, v, C, E, _, I, A, S, R, P, L, q = this;
        return z(this, function(U) {
          switch (U.label) {
            case 0:
              return this.logger.verbose("acquireTokenPopupAsync called"), s = this.initializeServerTelemetryManager(Ze.acquireTokenPopup), this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, ce.Popup)];
            case 1:
              l = U.sent(), this.browserStorage.updateCacheEntries(l.state, l.nonce, l.authority, l.loginHint || O.EMPTY_STRING, l.account || null), U.label = 2;
            case 2:
              return U.trys.push([2, 8, , 9]), this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationCodeRequest, t.correlationId), [4, this.initializeAuthorizationCodeRequest(l)];
            case 3:
              return u = U.sent(), this.performanceClient.setPreQueueTime(F.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(s, l.authority, l.azureCloudOptions)];
            case 4:
              return f = U.sent(), this.logger.verbose("Auth code client created"), h = vo.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, t.authenticationScheme), p = void 0, h && (p = this.performanceClient.startMeasurement(F.FetchAccountIdWithNativeBroker, t.correlationId)), [4, f.getAuthCodeUrl(le(le({}, l), { nativeBroker: h }))];
            case 5:
              return g = U.sent(), v = new Hu(f, this.browserStorage, u, this.logger, this.performanceClient), C = {
                popup: a,
                popupName: n,
                popupWindowAttributes: o
              }, E = this.initiateAuthRequest(g, C), this.eventHandler.emitEvent(Ee.POPUP_OPENED, ce.Popup, { popupWindow: E }, null), [4, this.monitorPopupForHash(E)];
            case 6:
              if (_ = U.sent(), I = He.getDeserializedHash(_), A = this.validateAndExtractStateFromHash(I, ce.Popup, l.correlationId), As.removeThrottle(this.browserStorage, this.config.auth.clientId, u), I.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), p && p.endMeasurement({
                  success: !0,
                  isNativeBroker: !0
                }), !this.nativeMessageHandler)
                  throw X.createNativeConnectionNotEstablishedError();
                return S = new ri(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, I.accountId, this.nativeStorage, l.correlationId), R = Tn.parseRequestState(this.browserCrypto, A).userRequestState, [2, S.acquireToken(le(le({}, l), {
                  state: R,
                  prompt: void 0
                  // Server should handle the prompt, ideally native broker can do this part silently
                })).finally(function() {
                  q.browserStorage.cleanRequestByState(A);
                })];
              }
              return [4, v.handleCodeResponseFromHash(_, A, f.authority, this.networkClient)];
            case 7:
              return P = U.sent(), [2, P];
            case 8:
              throw L = U.sent(), a && a.close(), L instanceof ue && L.setCorrelationId(this.correlationId), s.cacheFailedRequest(L), this.browserStorage.cleanRequestByState(l.state), L;
            case 9:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.logoutPopupAsync = function(t, n, o, a, s, l) {
      return G(this, void 0, void 0, function() {
        var u, f, h, p, g, v, C;
        return z(this, function(E) {
          switch (E.label) {
            case 0:
              this.logger.verbose("logoutPopupAsync called"), this.eventHandler.emitEvent(Ee.LOGOUT_START, ce.Popup, t), u = this.initializeServerTelemetryManager(Ze.logoutPopup), E.label = 1;
            case 1:
              return E.trys.push([1, 5, , 6]), [4, this.clearCacheOnLogout(t.account)];
            case 2:
              return E.sent(), this.performanceClient.setPreQueueTime(F.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(u, a)];
            case 3:
              return f = E.sent(), this.logger.verbose("Auth code client created"), h = f.getLogoutUri(t), this.eventHandler.emitEvent(Ee.LOGOUT_SUCCESS, ce.Popup, t), p = this.openPopup(h, { popupName: n, popupWindowAttributes: o, popup: s }), this.eventHandler.emitEvent(Ee.POPUP_OPENED, ce.Popup, { popupWindow: p }, null), [4, this.waitForLogoutPopup(p)];
            case 4:
              return E.sent(), l ? (g = {
                apiId: Ze.logoutPopup,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !1
              }, v = He.getAbsoluteUrl(l, ct.getCurrentUri()), this.logger.verbose("Redirecting main window to url specified in the request"), this.logger.verbosePii("Redirecting main window to: " + v), this.navigationClient.navigateInternal(v, g)) : this.logger.verbose("No main window navigation requested"), [3, 6];
            case 5:
              throw C = E.sent(), s && s.close(), C instanceof ue && C.setCorrelationId(this.correlationId), this.browserStorage.setInteractionInProgress(!1), this.eventHandler.emitEvent(Ee.LOGOUT_FAILURE, ce.Popup, null, C), this.eventHandler.emitEvent(Ee.LOGOUT_END, ce.Popup), u.cacheFailedRequest(C), C;
            case 6:
              return this.eventHandler.emitEvent(Ee.LOGOUT_END, ce.Popup), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.initiateAuthRequest = function(t, n) {
      if (re.isEmpty(t))
        throw this.logger.error("Navigate url is empty"), X.createEmptyNavigationUriError();
      return this.logger.infoPii("Navigate to: " + t), this.openPopup(t, n);
    }, e.prototype.monitorPopupForHash = function(t) {
      var n = this;
      return new Promise(function(o, a) {
        var s = n.config.system.windowHashTimeout / n.config.system.pollIntervalMilliseconds, l = 0;
        n.logger.verbose("PopupHandler.monitorPopupForHash - polling started");
        var u = setInterval(function() {
          if (t.closed) {
            n.logger.error("PopupHandler.monitorPopupForHash - window closed"), n.cleanPopup(), clearInterval(u), a(X.createUserCancelledError());
            return;
          }
          var f = O.EMPTY_STRING, h = O.EMPTY_STRING;
          try {
            f = t.location.href, h = t.location.hash;
          } catch {
          }
          re.isEmpty(f) || f === "about:blank" || (n.logger.verbose("PopupHandler.monitorPopupForHash - popup window is on same origin as caller"), l++, h ? (n.logger.verbose("PopupHandler.monitorPopupForHash - found hash in url"), clearInterval(u), n.cleanPopup(t), He.hashContainsKnownProperties(h) ? (n.logger.verbose("PopupHandler.monitorPopupForHash - hash contains known properties, returning."), o(h)) : (n.logger.error("PopupHandler.monitorPopupForHash - found hash in url but it does not contain known properties. Check that your router is not changing the hash prematurely."), n.logger.errorPii("PopupHandler.monitorPopupForHash - hash found: " + h), a(X.createHashDoesNotContainKnownPropertiesError()))) : l > s && (n.logger.error("PopupHandler.monitorPopupForHash - unable to find hash in url, timing out"), clearInterval(u), a(X.createMonitorPopupTimeoutError())));
        }, n.config.system.pollIntervalMilliseconds);
      });
    }, e.prototype.waitForLogoutPopup = function(t) {
      var n = this;
      return new Promise(function(o) {
        n.logger.verbose("PopupHandler.waitForLogoutPopup - polling started");
        var a = setInterval(function() {
          t.closed && (n.logger.error("PopupHandler.waitForLogoutPopup - window closed"), n.cleanPopup(), clearInterval(a), o());
          var s = O.EMPTY_STRING;
          try {
            s = t.location.href;
          } catch {
          }
          re.isEmpty(s) || s === "about:blank" || (n.logger.verbose("PopupHandler.waitForLogoutPopup - popup window is on same origin as caller, closing."), clearInterval(a), n.cleanPopup(t), o());
        }, n.config.system.pollIntervalMilliseconds);
      });
    }, e.prototype.openPopup = function(t, n) {
      try {
        var o = void 0;
        if (n.popup ? (o = n.popup, this.logger.verbosePii("Navigating popup window to: " + t), o.location.assign(t)) : typeof n.popup > "u" && (this.logger.verbosePii("Opening popup window to: " + t), o = this.openSizedPopup(t, n.popupName, n.popupWindowAttributes)), !o)
          throw X.createEmptyWindowCreatedError();
        return o.focus && o.focus(), this.currentWindow = o, window.addEventListener("beforeunload", this.unloadWindow), o;
      } catch (a) {
        throw this.logger.error("error opening popup " + a.message), this.browserStorage.setInteractionInProgress(!1), X.createPopupWindowError(a.toString());
      }
    }, e.prototype.openSizedPopup = function(t, n, o) {
      var a, s, l, u, f = window.screenLeft ? window.screenLeft : window.screenX, h = window.screenTop ? window.screenTop : window.screenY, p = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, g = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, v = (a = o.popupSize) === null || a === void 0 ? void 0 : a.width, C = (s = o.popupSize) === null || s === void 0 ? void 0 : s.height, E = (l = o.popupPosition) === null || l === void 0 ? void 0 : l.top, _ = (u = o.popupPosition) === null || u === void 0 ? void 0 : u.left;
      return (!v || v < 0 || v > p) && (this.logger.verbose("Default popup window width used. Window width not configured or invalid."), v = $r.POPUP_WIDTH), (!C || C < 0 || C > g) && (this.logger.verbose("Default popup window height used. Window height not configured or invalid."), C = $r.POPUP_HEIGHT), (!E || E < 0 || E > g) && (this.logger.verbose("Default popup window top position used. Window top not configured or invalid."), E = Math.max(0, g / 2 - $r.POPUP_HEIGHT / 2 + h)), (!_ || _ < 0 || _ > p) && (this.logger.verbose("Default popup window left position used. Window left not configured or invalid."), _ = Math.max(0, p / 2 - $r.POPUP_WIDTH / 2 + f)), window.open(t, n, "width=" + v + ", height=" + C + ", top=" + E + ", left=" + _ + ", scrollbars=yes");
    }, e.prototype.unloadWindow = function(t) {
      this.browserStorage.cleanRequestByInteractionType(ce.Popup), this.currentWindow && this.currentWindow.close(), t.preventDefault();
    }, e.prototype.cleanPopup = function(t) {
      t && t.close(), window.removeEventListener("beforeunload", this.unloadWindow), this.browserStorage.setInteractionInProgress(!1);
    }, e.prototype.generatePopupName = function(t, n) {
      return $r.POPUP_NAME_PREFIX + "." + this.config.auth.clientId + "." + t.join("-") + "." + n + "." + this.correlationId;
    }, e.prototype.generateLogoutPopupName = function(t) {
      var n = t.account && t.account.homeAccountId;
      return $r.POPUP_NAME_PREFIX + "." + this.config.auth.clientId + "." + n + "." + this.correlationId;
    }, e;
  }(ui)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var rA = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.navigateInternal = function(e, t) {
      return r.defaultNavigateWindow(e, t);
    }, r.prototype.navigateExternal = function(e, t) {
      return r.defaultNavigateWindow(e, t);
    }, r.defaultNavigateWindow = function(e, t) {
      return t.noHistory ? window.location.replace(e) : window.location.assign(e), new Promise(function(n) {
        setTimeout(function() {
          n(!0);
        }, t.timeout);
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var nA = 6e4, hu = 6e3, oA = 3e4, iA = 2e3;
function aA(r, e) {
  var t = r.auth, n = r.cache, o = r.system, a = r.telemetry, s = {
    clientId: O.EMPTY_STRING,
    authority: "" + O.DEFAULT_AUTHORITY,
    knownAuthorities: [],
    cloudDiscoveryMetadata: O.EMPTY_STRING,
    authorityMetadata: O.EMPTY_STRING,
    redirectUri: O.EMPTY_STRING,
    postLogoutRedirectUri: O.EMPTY_STRING,
    navigateToLoginRequestUrl: !0,
    clientCapabilities: [],
    protocolMode: Ji.AAD,
    azureCloudOptions: {
      azureCloudInstance: Qi.None,
      tenant: O.EMPTY_STRING
    },
    skipAuthorityMetadataCache: !1
  }, l = {
    cacheLocation: pt.SessionStorage,
    temporaryCacheLocation: pt.SessionStorage,
    storeAuthStateInCookie: !1,
    secureCookies: !1,
    // Default cache migration to true if cache location is localStorage since entries are preserved across tabs/windows. Migration has little to no benefit in sessionStorage and memoryStorage
    cacheMigrationEnabled: !!(n && n.cacheLocation === pt.LocalStorage),
    claimsBasedCachingEnabled: !0
  }, u = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    loggerCallback: function() {
    },
    logLevel: st.Info,
    piiLoggingEnabled: !1
  }, f = le(le({}, im), {
    loggerOptions: u,
    networkClient: e ? ct.getBrowserNetworkClient() : zI,
    navigationClient: new rA(),
    loadFrameTimeout: 0,
    // If loadFrameTimeout is provided, use that as default.
    windowHashTimeout: (o == null ? void 0 : o.loadFrameTimeout) || nA,
    iframeHashTimeout: (o == null ? void 0 : o.loadFrameTimeout) || hu,
    navigateFrameWait: e && ct.detectIEOrEdge() ? 500 : 0,
    redirectNavigationTimeout: oA,
    asyncPopups: !1,
    allowRedirectInIframe: !1,
    allowNativeBroker: !1,
    nativeBrokerHandshakeTimeout: (o == null ? void 0 : o.nativeBrokerHandshakeTimeout) || iA,
    pollIntervalMilliseconds: $r.DEFAULT_POLL_INTERVAL_MS,
    cryptoOptions: {
      useMsrCrypto: !1,
      entropy: void 0
    }
  }), h = le(le({}, o), { loggerOptions: (o == null ? void 0 : o.loggerOptions) || u }), p = {
    application: {
      appName: O.EMPTY_STRING,
      appVersion: O.EMPTY_STRING
    }
  }, g = {
    auth: le(le({}, s), t),
    cache: le(le({}, l), n),
    system: le(le({}, f), h),
    telemetry: le(le({}, p), a)
  };
  return g;
}
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var hm = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t, n, o, a, s, l) {
      var u = r.call(this, t, n, o, a, l) || this;
      return u.navigateFrameWait = s.navigateFrameWait, u.pollIntervalMilliseconds = s.pollIntervalMilliseconds, u;
    }
    return e.prototype.initiateAuthRequest = function(t) {
      return G(this, void 0, void 0, function() {
        return z(this, function(n) {
          switch (n.label) {
            case 0:
              if (this.performanceClient.addQueueMeasurement(F.SilentHandlerInitiateAuthRequest, this.authCodeRequest.correlationId), re.isEmpty(t))
                throw this.logger.info("Navigate url is empty"), X.createEmptyNavigationUriError();
              return this.navigateFrameWait ? (this.performanceClient.setPreQueueTime(F.SilentHandlerLoadFrame, this.authCodeRequest.correlationId), [4, this.loadFrame(t)]) : [3, 2];
            case 1:
              return [2, n.sent()];
            case 2:
              return [2, this.loadFrameSync(t)];
          }
        });
      });
    }, e.prototype.monitorIframeForHash = function(t, n) {
      var o = this;
      return this.performanceClient.addQueueMeasurement(F.SilentHandlerMonitorIframeForHash, this.authCodeRequest.correlationId), new Promise(function(a, s) {
        n < hu && o.logger.warning("system.loadFrameTimeout or system.iframeHashTimeout set to lower (" + n + "ms) than the default (" + hu + "ms). This may result in timeouts.");
        var l = window.performance.now(), u = l + n, f = setInterval(function() {
          if (window.performance.now() > u) {
            o.removeHiddenIframe(t), clearInterval(f), s(X.createMonitorIframeTimeoutError());
            return;
          }
          var h = O.EMPTY_STRING, p = t.contentWindow;
          try {
            h = p ? p.location.href : O.EMPTY_STRING;
          } catch {
          }
          if (!re.isEmpty(h)) {
            var g = p ? p.location.hash : O.EMPTY_STRING;
            if (He.hashContainsKnownProperties(g)) {
              o.removeHiddenIframe(t), clearInterval(f), a(g);
              return;
            }
          }
        }, o.pollIntervalMilliseconds);
      });
    }, e.prototype.loadFrame = function(t) {
      var n = this;
      return this.performanceClient.addQueueMeasurement(F.SilentHandlerLoadFrame, this.authCodeRequest.correlationId), new Promise(function(o, a) {
        var s = n.createHiddenIframe();
        setTimeout(function() {
          if (!s) {
            a("Unable to load iframe");
            return;
          }
          s.src = t, o(s);
        }, n.navigateFrameWait);
      });
    }, e.prototype.loadFrameSync = function(t) {
      var n = this.createHiddenIframe();
      return n.src = t, n;
    }, e.prototype.createHiddenIframe = function() {
      var t = document.createElement("iframe");
      return t.style.visibility = "hidden", t.style.position = "absolute", t.style.width = t.style.height = "0", t.style.border = "0", t.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms"), document.getElementsByTagName("body")[0].appendChild(t), t;
    }, e.prototype.removeHiddenIframe = function(t) {
      document.body === t.parentNode && document.body.removeChild(t);
    }, e;
  }(Hu)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var sA = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t, n, o, a, s, l, u, f, h, p, g) {
      var v = r.call(this, t, n, o, a, s, l, f, p, g) || this;
      return v.apiId = u, v.nativeStorage = h, v;
    }
    return e.prototype.acquireToken = function(t) {
      return G(this, void 0, void 0, function() {
        var n, o, a, s, l;
        return z(this, function(u) {
          switch (u.label) {
            case 0:
              if (this.performanceClient.addQueueMeasurement(F.SilentIframeClientAcquireToken, t.correlationId), this.logger.verbose("acquireTokenByIframe called"), n = this.performanceClient.startMeasurement(F.SilentIframeClientAcquireToken, t.correlationId), re.isEmpty(t.loginHint) && re.isEmpty(t.sid) && (!t.account || re.isEmpty(t.account.username)) && this.logger.warning("No user hint provided. The authorization server may need more information to complete this request."), t.prompt && t.prompt !== Ft.NONE && t.prompt !== Ft.NO_SESSION)
                throw n.endMeasurement({
                  success: !1
                }), X.createSilentPromptValueError(t.prompt);
              return this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(le(le({}, t), { prompt: t.prompt || Ft.NONE }), ce.Silent)];
            case 1:
              o = u.sent(), this.browserStorage.updateCacheEntries(o.state, o.nonce, o.authority, o.loginHint || O.EMPTY_STRING, o.account || null), a = this.initializeServerTelemetryManager(this.apiId), u.label = 2;
            case 2:
              return u.trys.push([2, 5, , 6]), this.performanceClient.setPreQueueTime(F.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(a, o.authority, o.azureCloudOptions)];
            case 3:
              return s = u.sent(), this.logger.verbose("Auth code client created"), this.performanceClient.setPreQueueTime(F.SilentIframeClientTokenHelper, t.correlationId), [4, this.silentTokenHelper(s, o).then(function(f) {
                return n.endMeasurement({
                  success: !0,
                  fromCache: !1,
                  requestId: f.requestId
                }), f;
              })];
            case 4:
              return [2, u.sent()];
            case 5:
              throw l = u.sent(), l instanceof ue && l.setCorrelationId(this.correlationId), a.cacheFailedRequest(l), this.browserStorage.cleanRequestByState(o.state), n.endMeasurement({
                errorCode: l instanceof ue && l.errorCode || void 0,
                subErrorCode: l instanceof ue && l.subError || void 0,
                success: !1
              }), l;
            case 6:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.logout = function() {
      return Promise.reject(X.createSilentLogoutUnsupportedError());
    }, e.prototype.silentTokenHelper = function(t, n) {
      return G(this, void 0, void 0, function() {
        var o, a, s, l, u, f, h, p, g, v = this;
        return z(this, function(C) {
          switch (C.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(F.SilentIframeClientTokenHelper, n.correlationId), this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationCodeRequest, n.correlationId), [4, this.initializeAuthorizationCodeRequest(n)];
            case 1:
              return o = C.sent(), this.performanceClient.setPreQueueTime(F.GetAuthCodeUrl, n.correlationId), [4, t.getAuthCodeUrl(le(le({}, n), { nativeBroker: vo.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, n.authenticationScheme) }))];
            case 2:
              return a = C.sent(), s = new hm(t, this.browserStorage, o, this.logger, this.config.system, this.performanceClient), this.performanceClient.setPreQueueTime(F.SilentHandlerInitiateAuthRequest, n.correlationId), [4, s.initiateAuthRequest(a)];
            case 3:
              return l = C.sent(), this.performanceClient.setPreQueueTime(F.SilentHandlerMonitorIframeForHash, n.correlationId), [4, s.monitorIframeForHash(l, this.config.system.iframeHashTimeout)];
            case 4:
              if (u = C.sent(), f = He.getDeserializedHash(u), h = this.validateAndExtractStateFromHash(f, ce.Silent, o.correlationId), f.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), !this.nativeMessageHandler)
                  throw X.createNativeConnectionNotEstablishedError();
                return p = new ri(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.apiId, this.performanceClient, this.nativeMessageHandler, f.accountId, this.browserStorage, this.correlationId), g = Tn.parseRequestState(this.browserCrypto, h).userRequestState, [2, p.acquireToken(le(le({}, n), { state: g, prompt: n.prompt || Ft.NONE })).finally(function() {
                  v.browserStorage.cleanRequestByState(h);
                })];
              }
              return this.performanceClient.setPreQueueTime(F.HandleCodeResponseFromHash, n.correlationId), [2, s.handleCodeResponseFromHash(u, h, t.authority, this.networkClient)];
          }
        });
      });
    }, e;
  }(ui)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var cA = (
  /** @class */
  function(r) {
    kt(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.acquireToken = function(t) {
      return G(this, void 0, void 0, function() {
        var n, o, a, s, l, u = this;
        return z(this, function(f) {
          switch (f.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(F.SilentRefreshClientAcquireToken, t.correlationId), this.performanceClient.setPreQueueTime(F.InitializeBaseRequest, t.correlationId), o = [le({}, t)], [4, this.initializeBaseRequest(t, t.account)];
            case 1:
              return n = le.apply(void 0, o.concat([f.sent()])), a = this.performanceClient.startMeasurement(F.SilentRefreshClientAcquireToken, n.correlationId), s = this.initializeServerTelemetryManager(Ze.acquireTokenSilent_silentFlow), [4, this.createRefreshTokenClient(s, n.authority, n.azureCloudOptions)];
            case 2:
              return l = f.sent(), this.logger.verbose("Refresh token client created"), this.performanceClient.setPreQueueTime(F.RefreshTokenClientAcquireTokenByRefreshToken, t.correlationId), [2, l.acquireTokenByRefreshToken(n).then(function(h) {
                return a.endMeasurement({
                  success: !0,
                  fromCache: h.fromCache,
                  requestId: h.requestId
                }), h;
              }).catch(function(h) {
                throw h instanceof ue && h.setCorrelationId(u.correlationId), s.cacheFailedRequest(h), a.endMeasurement({
                  errorCode: h.errorCode,
                  subErrorCode: h.subError,
                  success: !1
                }), h;
              })];
          }
        });
      });
    }, e.prototype.logout = function() {
      return Promise.reject(X.createSilentLogoutUnsupportedError());
    }, e.prototype.createRefreshTokenClient = function(t, n, o) {
      return G(this, void 0, void 0, function() {
        var a;
        return z(this, function(s) {
          switch (s.label) {
            case 0:
              return this.performanceClient.setPreQueueTime(F.StandardInteractionClientGetClientConfiguration, this.correlationId), [4, this.getClientConfiguration(t, n, o)];
            case 1:
              return a = s.sent(), [2, new sm(a, this.performanceClient)];
          }
        });
      });
    }, e;
  }(ui)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var lA = (
  /** @class */
  function() {
    function r(e, t) {
      this.eventCallbacks = /* @__PURE__ */ new Map(), this.logger = e, this.browserCrypto = t, this.listeningToStorageEvents = !1, this.handleAccountCacheChange = this.handleAccountCacheChange.bind(this);
    }
    return r.prototype.addEventCallback = function(e) {
      if (typeof window < "u") {
        var t = this.browserCrypto.createNewGuid();
        return this.eventCallbacks.set(t, e), this.logger.verbose("Event callback registered with id: " + t), t;
      }
      return null;
    }, r.prototype.removeEventCallback = function(e) {
      this.eventCallbacks.delete(e), this.logger.verbose("Event callback " + e + " removed.");
    }, r.prototype.enableAccountStorageEvents = function() {
      typeof window > "u" || (this.listeningToStorageEvents ? this.logger.verbose("Account storage listener already registered.") : (this.logger.verbose("Adding account storage listener."), this.listeningToStorageEvents = !0, window.addEventListener("storage", this.handleAccountCacheChange)));
    }, r.prototype.disableAccountStorageEvents = function() {
      typeof window > "u" || (this.listeningToStorageEvents ? (this.logger.verbose("Removing account storage listener."), window.removeEventListener("storage", this.handleAccountCacheChange), this.listeningToStorageEvents = !1) : this.logger.verbose("No account storage listener registered."));
    }, r.prototype.emitEvent = function(e, t, n, o) {
      var a = this;
      if (typeof window < "u") {
        var s = {
          eventType: e,
          interactionType: t || null,
          payload: n || null,
          error: o || null,
          timestamp: Date.now()
        };
        this.logger.info("Emitting event: " + e), this.eventCallbacks.forEach(function(l, u) {
          a.logger.verbose("Emitting event to callback " + u + ": " + e), l.apply(null, [s]);
        });
      }
    }, r.prototype.handleAccountCacheChange = function(e) {
      try {
        var t = e.newValue || e.oldValue;
        if (!t)
          return;
        var n = JSON.parse(t);
        if (typeof n != "object" || !Rt.isAccountEntity(n))
          return;
        var o = er.toObject(new Rt(), n), a = o.getAccountInfo();
        !e.oldValue && e.newValue ? (this.logger.info("Account was added to cache in a different window"), this.emitEvent(Ee.ACCOUNT_ADDED, void 0, a)) : !e.newValue && e.oldValue && (this.logger.info("Account was removed from cache in a different window"), this.emitEvent(Ee.ACCOUNT_REMOVED, void 0, a));
      } catch {
        return;
      }
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Lt = (
  /** @class */
  function() {
    function r() {
    }
    return r.decimalToHex = function(e) {
      for (var t = e.toString(16); t.length < 2; )
        t = "0" + t;
      return t;
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var pm = (
  /** @class */
  function() {
    function r(e) {
      this.cryptoObj = e;
    }
    return r.prototype.generateGuid = function() {
      try {
        var e = new Uint8Array(16);
        return this.cryptoObj.getRandomValues(e), e[6] |= 64, e[6] &= 79, e[8] |= 128, e[8] &= 191, Lt.decimalToHex(e[0]) + Lt.decimalToHex(e[1]) + Lt.decimalToHex(e[2]) + Lt.decimalToHex(e[3]) + "-" + Lt.decimalToHex(e[4]) + Lt.decimalToHex(e[5]) + "-" + Lt.decimalToHex(e[6]) + Lt.decimalToHex(e[7]) + "-" + Lt.decimalToHex(e[8]) + Lt.decimalToHex(e[9]) + "-" + Lt.decimalToHex(e[10]) + Lt.decimalToHex(e[11]) + Lt.decimalToHex(e[12]) + Lt.decimalToHex(e[13]) + Lt.decimalToHex(e[14]) + Lt.decimalToHex(e[15]);
      } catch {
        for (var t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", n = "0123456789abcdef", o = 0, a = O.EMPTY_STRING, s = 0; s < 36; s++)
          t[s] !== "-" && t[s] !== "4" && (o = Math.random() * 16 | 0), t[s] === "x" ? a += n[o] : t[s] === "y" ? (o &= 3, o |= 8, a += n[o]) : a += t[s];
        return a;
      }
    }, r.prototype.isGuid = function(e) {
      var t = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      return t.test(e);
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var In = (
  /** @class */
  function() {
    function r() {
    }
    return r.stringToUtf8Arr = function(e) {
      for (var t, n = 0, o = e.length, a = 0; a < o; a++)
        t = e.charCodeAt(a), n += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : t < 2097152 ? 4 : t < 67108864 ? 5 : 6;
      for (var s = new Uint8Array(n), l = 0, u = 0; l < n; u++)
        t = e.charCodeAt(u), t < 128 ? s[l++] = t : t < 2048 ? (s[l++] = 192 + (t >>> 6), s[l++] = 128 + (t & 63)) : t < 65536 ? (s[l++] = 224 + (t >>> 12), s[l++] = 128 + (t >>> 6 & 63), s[l++] = 128 + (t & 63)) : t < 2097152 ? (s[l++] = 240 + (t >>> 18), s[l++] = 128 + (t >>> 12 & 63), s[l++] = 128 + (t >>> 6 & 63), s[l++] = 128 + (t & 63)) : t < 67108864 ? (s[l++] = 248 + (t >>> 24), s[l++] = 128 + (t >>> 18 & 63), s[l++] = 128 + (t >>> 12 & 63), s[l++] = 128 + (t >>> 6 & 63), s[l++] = 128 + (t & 63)) : (s[l++] = 252 + (t >>> 30), s[l++] = 128 + (t >>> 24 & 63), s[l++] = 128 + (t >>> 18 & 63), s[l++] = 128 + (t >>> 12 & 63), s[l++] = 128 + (t >>> 6 & 63), s[l++] = 128 + (t & 63));
      return s;
    }, r.stringToArrayBuffer = function(e) {
      for (var t = new ArrayBuffer(e.length), n = new Uint8Array(t), o = 0; o < e.length; o++)
        n[o] = e.charCodeAt(o);
      return t;
    }, r.utf8ArrToString = function(e) {
      for (var t = O.EMPTY_STRING, n = void 0, o = e.length, a = 0; a < o; a++)
        n = e[a], t += String.fromCharCode(n > 251 && n < 254 && a + 5 < o ? (
          /* six bytes */
          /* (nPart - 252 << 30) may be not so safe in ECMAScript! So...: */
          (n - 252) * 1073741824 + (e[++a] - 128 << 24) + (e[++a] - 128 << 18) + (e[++a] - 128 << 12) + (e[++a] - 128 << 6) + e[++a] - 128
        ) : n > 247 && n < 252 && a + 4 < o ? (
          /* five bytes */
          (n - 248 << 24) + (e[++a] - 128 << 18) + (e[++a] - 128 << 12) + (e[++a] - 128 << 6) + e[++a] - 128
        ) : n > 239 && n < 248 && a + 3 < o ? (
          /* four bytes */
          (n - 240 << 18) + (e[++a] - 128 << 12) + (e[++a] - 128 << 6) + e[++a] - 128
        ) : n > 223 && n < 240 && a + 2 < o ? (
          /* three bytes */
          (n - 224 << 12) + (e[++a] - 128 << 6) + e[++a] - 128
        ) : n > 191 && n < 224 && a + 1 < o ? (
          /* two bytes */
          (n - 192 << 6) + e[++a] - 128
        ) : (
          /* nPart < 127 ? */
          /* one byte */
          n
        ));
      return t;
    }, r.getSortedObjectString = function(e) {
      return JSON.stringify(e, Object.keys(e).sort());
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var gm = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.urlEncode = function(e) {
      return encodeURIComponent(this.encode(e).replace(/=/g, O.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_"));
    }, r.prototype.urlEncodeArr = function(e) {
      return this.base64EncArr(e).replace(/=/g, O.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_");
    }, r.prototype.encode = function(e) {
      var t = In.stringToUtf8Arr(e);
      return this.base64EncArr(t);
    }, r.prototype.base64EncArr = function(e) {
      for (var t = (3 - e.length % 3) % 3, n = O.EMPTY_STRING, o = void 0, a = e.length, s = 0, l = 0; l < a; l++)
        o = l % 3, s |= e[l] << (16 >>> o & 24), (o === 2 || e.length - l === 1) && (n += String.fromCharCode(this.uint6ToB64(s >>> 18 & 63), this.uint6ToB64(s >>> 12 & 63), this.uint6ToB64(s >>> 6 & 63), this.uint6ToB64(s & 63)), s = 0);
      return t === 0 ? n : n.substring(0, n.length - t) + (t === 1 ? "=" : "==");
    }, r.prototype.uint6ToB64 = function(e) {
      return e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : e === 62 ? 43 : e === 63 ? 47 : 65;
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var uA = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.decode = function(e) {
      var t = e.replace(/-/g, "+").replace(/_/g, "/");
      switch (t.length % 4) {
        case 0:
          break;
        case 2:
          t += "==";
          break;
        case 3:
          t += "=";
          break;
        default:
          throw new Error("Invalid base64 string");
      }
      var n = this.base64DecToArr(t);
      return In.utf8ArrToString(n);
    }, r.prototype.base64DecToArr = function(e, t) {
      for (var n = e.replace(/[^A-Za-z0-9\+\/]/g, O.EMPTY_STRING), o = n.length, a = t ? Math.ceil((o * 3 + 1 >>> 2) / t) * t : o * 3 + 1 >>> 2, s = new Uint8Array(a), l = void 0, u = void 0, f = 0, h = 0, p = 0; p < o; p++)
        if (u = p & 3, f |= this.b64ToUint6(n.charCodeAt(p)) << 18 - 6 * u, u === 3 || o - p === 1) {
          for (l = 0; l < 3 && h < a; l++, h++)
            s[h] = f >>> (16 >>> l & 24) & 255;
          f = 0;
        }
      return s;
    }, r.prototype.b64ToUint6 = function(e) {
      return e > 64 && e < 91 ? e - 65 : e > 96 && e < 123 ? e - 71 : e > 47 && e < 58 ? e + 4 : e === 43 ? 62 : e === 47 ? 63 : 0;
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var dA = 32, fA = (
  /** @class */
  function() {
    function r(e) {
      this.base64Encode = new gm(), this.cryptoObj = e;
    }
    return r.prototype.generateCodes = function() {
      return G(this, void 0, void 0, function() {
        var e, t;
        return z(this, function(n) {
          switch (n.label) {
            case 0:
              return e = this.generateCodeVerifier(), [4, this.generateCodeChallengeFromVerifier(e)];
            case 1:
              return t = n.sent(), [2, {
                verifier: e,
                challenge: t
              }];
          }
        });
      });
    }, r.prototype.generateCodeVerifier = function() {
      try {
        var e = new Uint8Array(dA);
        this.cryptoObj.getRandomValues(e);
        var t = this.base64Encode.urlEncodeArr(e);
        return t;
      } catch (n) {
        throw X.createPkceNotGeneratedError(n);
      }
    }, r.prototype.generateCodeChallengeFromVerifier = function(e) {
      return G(this, void 0, void 0, function() {
        var t, n;
        return z(this, function(o) {
          switch (o.label) {
            case 0:
              return o.trys.push([0, 2, , 3]), [4, this.cryptoObj.sha256Digest(e)];
            case 1:
              return t = o.sent(), [2, this.base64Encode.urlEncodeArr(new Uint8Array(t))];
            case 2:
              throw n = o.sent(), X.createPkceNotGeneratedError(n);
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var hA = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getRandomValues = function(e) {
      return window.crypto.getRandomValues(e);
    }, r.prototype.generateKey = function(e, t, n) {
      return G(this, void 0, void 0, function() {
        return z(this, function(o) {
          return [2, window.crypto.subtle.generateKey(e, t, n)];
        });
      });
    }, r.prototype.exportKey = function(e) {
      return G(this, void 0, void 0, function() {
        return z(this, function(t) {
          return [2, window.crypto.subtle.exportKey(ii, e)];
        });
      });
    }, r.prototype.importKey = function(e, t, n, o) {
      return G(this, void 0, void 0, function() {
        return z(this, function(a) {
          return [2, window.crypto.subtle.importKey(ii, e, t, n, o)];
        });
      });
    }, r.prototype.sign = function(e, t, n) {
      return G(this, void 0, void 0, function() {
        return z(this, function(o) {
          return [2, window.crypto.subtle.sign(e, t, n)];
        });
      });
    }, r.prototype.digest = function(e, t) {
      return G(this, void 0, void 0, function() {
        return z(this, function(n) {
          return [2, window.crypto.subtle.digest(e, t)];
        });
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var pA = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.initPrng = function(e) {
      return window.msrCrypto.initPrng(xu(e));
    }, r.prototype.getRandomValues = function(e) {
      return window.msrCrypto.getRandomValues(e);
    }, r.prototype.generateKey = function(e, t, n) {
      return G(this, void 0, void 0, function() {
        return z(this, function(o) {
          return [2, window.msrCrypto.subtle.generateKey(e, t, n)];
        });
      });
    }, r.prototype.exportKey = function(e) {
      return G(this, void 0, void 0, function() {
        return z(this, function(t) {
          return [2, window.msrCrypto.subtle.exportKey(ii, e)];
        });
      });
    }, r.prototype.importKey = function(e, t, n, o) {
      return G(this, void 0, void 0, function() {
        return z(this, function(a) {
          return [2, window.msrCrypto.subtle.importKey(ii, e, t, n, o)];
        });
      });
    }, r.prototype.sign = function(e, t, n) {
      return G(this, void 0, void 0, function() {
        return z(this, function(o) {
          return [2, window.msrCrypto.subtle.sign(e, t, n)];
        });
      });
    }, r.prototype.digest = function(e, t) {
      return G(this, void 0, void 0, function() {
        return z(this, function(n) {
          return [2, window.msrCrypto.subtle.digest(e, t)];
        });
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var gA = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getRandomValues = function(e) {
      return window.msCrypto.getRandomValues(e);
    }, r.prototype.generateKey = function(e, t, n) {
      return G(this, void 0, void 0, function() {
        return z(this, function(o) {
          return [2, new Promise(function(a, s) {
            var l = window.msCrypto.subtle.generateKey(e, t, n);
            l.addEventListener("complete", function(u) {
              a(u.target.result);
            }), l.addEventListener("error", function(u) {
              s(u);
            });
          })];
        });
      });
    }, r.prototype.exportKey = function(e) {
      return G(this, void 0, void 0, function() {
        return z(this, function(t) {
          return [2, new Promise(function(n, o) {
            var a = window.msCrypto.subtle.exportKey(ii, e);
            a.addEventListener("complete", function(s) {
              var l = s.target.result, u = In.utf8ArrToString(new Uint8Array(l)).replace(/\r/g, O.EMPTY_STRING).replace(/\n/g, O.EMPTY_STRING).replace(/\t/g, O.EMPTY_STRING).split(" ").join(O.EMPTY_STRING).replace("\0", O.EMPTY_STRING);
              try {
                n(JSON.parse(u));
              } catch (f) {
                o(f);
              }
            }), a.addEventListener("error", function(s) {
              o(s);
            });
          })];
        });
      });
    }, r.prototype.importKey = function(e, t, n, o) {
      return G(this, void 0, void 0, function() {
        var a, s;
        return z(this, function(l) {
          return a = In.getSortedObjectString(e), s = In.stringToArrayBuffer(a), [2, new Promise(function(u, f) {
            var h = window.msCrypto.subtle.importKey(ii, s, t, n, o);
            h.addEventListener("complete", function(p) {
              u(p.target.result);
            }), h.addEventListener("error", function(p) {
              f(p);
            });
          })];
        });
      });
    }, r.prototype.sign = function(e, t, n) {
      return G(this, void 0, void 0, function() {
        return z(this, function(o) {
          return [2, new Promise(function(a, s) {
            var l = window.msCrypto.subtle.sign(e, t, n);
            l.addEventListener("complete", function(u) {
              a(u.target.result);
            }), l.addEventListener("error", function(u) {
              s(u);
            });
          })];
        });
      });
    }, r.prototype.digest = function(e, t) {
      return G(this, void 0, void 0, function() {
        return z(this, function(n) {
          return [2, new Promise(function(o, a) {
            var s = window.msCrypto.subtle.digest(e, t.buffer);
            s.addEventListener("complete", function(l) {
              o(l.target.result);
            }), s.addEventListener("error", function(l) {
              a(l);
            });
          })];
        });
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var mA = "RSASSA-PKCS1-v1_5", zp = "SHA-256", vA = 2048, yA = new Uint8Array([1, 0, 1]), mm = (
  /** @class */
  function() {
    function r(e, t) {
      var n, o;
      if (this.logger = e, this.cryptoOptions = t, this.hasBrowserCrypto())
        this.logger.verbose("BrowserCrypto: modern crypto interface available"), this.subtleCrypto = new hA();
      else if (this.hasIECrypto())
        this.logger.verbose("BrowserCrypto: MS crypto interface available"), this.subtleCrypto = new gA();
      else if (this.hasMsrCrypto() && (!((n = this.cryptoOptions) === null || n === void 0) && n.useMsrCrypto))
        this.logger.verbose("BrowserCrypto: MSR crypto interface available"), this.subtleCrypto = new pA();
      else
        throw this.hasMsrCrypto() && this.logger.info("BrowserCrypto: MSR Crypto interface available but system.cryptoOptions.useMsrCrypto not enabled"), this.logger.error("BrowserCrypto: No crypto interfaces available."), X.createCryptoNotAvailableError("Browser crypto, msCrypto, or msrCrypto interfaces not available.");
      if (this.subtleCrypto.initPrng) {
        if (this.logger.verbose("BrowserCrypto: Interface requires entropy"), !(!((o = this.cryptoOptions) === null || o === void 0) && o.entropy))
          throw this.logger.error("BrowserCrypto: Interface requires entropy but none provided."), Os.createEntropyNotProvided();
        this.logger.verbose("BrowserCrypto: Entropy provided"), this.subtleCrypto.initPrng(this.cryptoOptions.entropy);
      }
      this.keygenAlgorithmOptions = {
        name: mA,
        hash: zp,
        modulusLength: vA,
        publicExponent: yA
      };
    }
    return r.prototype.hasIECrypto = function() {
      return "msCrypto" in window;
    }, r.prototype.hasBrowserCrypto = function() {
      return "crypto" in window;
    }, r.prototype.hasMsrCrypto = function() {
      return "msrCrypto" in window;
    }, r.prototype.sha256Digest = function(e) {
      return G(this, void 0, void 0, function() {
        var t;
        return z(this, function(n) {
          return t = In.stringToUtf8Arr(e), [2, this.subtleCrypto.digest({ name: zp }, t)];
        });
      });
    }, r.prototype.getRandomValues = function(e) {
      return this.subtleCrypto.getRandomValues(e);
    }, r.prototype.generateKeyPair = function(e, t) {
      return G(this, void 0, void 0, function() {
        return z(this, function(n) {
          return [2, this.subtleCrypto.generateKey(this.keygenAlgorithmOptions, e, t)];
        });
      });
    }, r.prototype.exportJwk = function(e) {
      return G(this, void 0, void 0, function() {
        return z(this, function(t) {
          return [2, this.subtleCrypto.exportKey(e)];
        });
      });
    }, r.prototype.importJwk = function(e, t, n) {
      return G(this, void 0, void 0, function() {
        return z(this, function(o) {
          return [2, this.subtleCrypto.importKey(e, this.keygenAlgorithmOptions, t, n)];
        });
      });
    }, r.prototype.sign = function(e, t) {
      return G(this, void 0, void 0, function() {
        return z(this, function(n) {
          return [2, this.subtleCrypto.sign(this.keygenAlgorithmOptions, e, t)];
        });
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var CA = (
  /** @class */
  function() {
    function r() {
      this.dbName = uu, this.version = YI, this.tableName = QI, this.dbOpen = !1;
    }
    return r.prototype.open = function() {
      return G(this, void 0, void 0, function() {
        var e = this;
        return z(this, function(t) {
          return [2, new Promise(function(n, o) {
            var a = window.indexedDB.open(e.dbName, e.version);
            a.addEventListener("upgradeneeded", function(s) {
              var l = s;
              l.target.result.createObjectStore(e.tableName);
            }), a.addEventListener("success", function(s) {
              var l = s;
              e.db = l.target.result, e.dbOpen = !0, n();
            }), a.addEventListener("error", function() {
              return o(X.createDatabaseUnavailableError());
            });
          })];
        });
      });
    }, r.prototype.closeConnection = function() {
      var e = this.db;
      e && this.dbOpen && (e.close(), this.dbOpen = !1);
    }, r.prototype.validateDbIsOpen = function() {
      return G(this, void 0, void 0, function() {
        return z(this, function(e) {
          switch (e.label) {
            case 0:
              return this.dbOpen ? [3, 2] : [4, this.open()];
            case 1:
              return [2, e.sent()];
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.getItem = function(e) {
      return G(this, void 0, void 0, function() {
        var t = this;
        return z(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return n.sent(), [2, new Promise(function(o, a) {
                if (!t.db)
                  return a(X.createDatabaseNotOpenError());
                var s = t.db.transaction([t.tableName], "readonly"), l = s.objectStore(t.tableName), u = l.get(e);
                u.addEventListener("success", function(f) {
                  var h = f;
                  t.closeConnection(), o(h.target.result);
                }), u.addEventListener("error", function(f) {
                  t.closeConnection(), a(f);
                });
              })];
          }
        });
      });
    }, r.prototype.setItem = function(e, t) {
      return G(this, void 0, void 0, function() {
        var n = this;
        return z(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return o.sent(), [2, new Promise(function(a, s) {
                if (!n.db)
                  return s(X.createDatabaseNotOpenError());
                var l = n.db.transaction([n.tableName], "readwrite"), u = l.objectStore(n.tableName), f = u.put(t, e);
                f.addEventListener("success", function() {
                  n.closeConnection(), a();
                }), f.addEventListener("error", function(h) {
                  n.closeConnection(), s(h);
                });
              })];
          }
        });
      });
    }, r.prototype.removeItem = function(e) {
      return G(this, void 0, void 0, function() {
        var t = this;
        return z(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return n.sent(), [2, new Promise(function(o, a) {
                if (!t.db)
                  return a(X.createDatabaseNotOpenError());
                var s = t.db.transaction([t.tableName], "readwrite"), l = s.objectStore(t.tableName), u = l.delete(e);
                u.addEventListener("success", function() {
                  t.closeConnection(), o();
                }), u.addEventListener("error", function(f) {
                  t.closeConnection(), a(f);
                });
              })];
          }
        });
      });
    }, r.prototype.getKeys = function() {
      return G(this, void 0, void 0, function() {
        var e = this;
        return z(this, function(t) {
          switch (t.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return t.sent(), [2, new Promise(function(n, o) {
                if (!e.db)
                  return o(X.createDatabaseNotOpenError());
                var a = e.db.transaction([e.tableName], "readonly"), s = a.objectStore(e.tableName), l = s.getAllKeys();
                l.addEventListener("success", function(u) {
                  var f = u;
                  e.closeConnection(), n(f.target.result);
                }), l.addEventListener("error", function(u) {
                  e.closeConnection(), o(u);
                });
              })];
          }
        });
      });
    }, r.prototype.containsKey = function(e) {
      return G(this, void 0, void 0, function() {
        var t = this;
        return z(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return n.sent(), [2, new Promise(function(o, a) {
                if (!t.db)
                  return a(X.createDatabaseNotOpenError());
                var s = t.db.transaction([t.tableName], "readonly"), l = s.objectStore(t.tableName), u = l.count(e);
                u.addEventListener("success", function(f) {
                  var h = f;
                  t.closeConnection(), o(h.target.result === 1);
                }), u.addEventListener("error", function(f) {
                  t.closeConnection(), a(f);
                });
              })];
          }
        });
      });
    }, r.prototype.deleteDatabase = function() {
      return G(this, void 0, void 0, function() {
        return z(this, function(e) {
          return this.db && this.dbOpen && this.closeConnection(), [2, new Promise(function(t, n) {
            var o = window.indexedDB.deleteDatabase(uu);
            o.addEventListener("success", function() {
              return t(!0);
            }), o.addEventListener("blocked", function() {
              return t(!0);
            }), o.addEventListener("error", function() {
              return n(!1);
            });
          })];
        });
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Vp = (
  /** @class */
  function() {
    function r(e, t) {
      this.inMemoryCache = new du(), this.indexedDBCache = new CA(), this.logger = e, this.storeName = t;
    }
    return r.prototype.handleDatabaseAccessError = function(e) {
      if (e instanceof X && e.errorCode === W.databaseUnavailable.code)
        this.logger.error("Could not access persistent storage. This may be caused by browser privacy features which block persistent storage in third-party contexts.");
      else
        throw e;
    }, r.prototype.getItem = function(e) {
      return G(this, void 0, void 0, function() {
        var t, n;
        return z(this, function(o) {
          switch (o.label) {
            case 0:
              if (t = this.inMemoryCache.getItem(e), t)
                return [3, 4];
              o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), this.logger.verbose("Queried item not found in in-memory cache, now querying persistent storage."), [4, this.indexedDBCache.getItem(e)];
            case 2:
              return [2, o.sent()];
            case 3:
              return n = o.sent(), this.handleDatabaseAccessError(n), [3, 4];
            case 4:
              return [2, t];
          }
        });
      });
    }, r.prototype.setItem = function(e, t) {
      return G(this, void 0, void 0, function() {
        var n;
        return z(this, function(o) {
          switch (o.label) {
            case 0:
              this.inMemoryCache.setItem(e, t), o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), [4, this.indexedDBCache.setItem(e, t)];
            case 2:
              return o.sent(), [3, 4];
            case 3:
              return n = o.sent(), this.handleDatabaseAccessError(n), [3, 4];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.removeItem = function(e) {
      return G(this, void 0, void 0, function() {
        var t;
        return z(this, function(n) {
          switch (n.label) {
            case 0:
              this.inMemoryCache.removeItem(e), n.label = 1;
            case 1:
              return n.trys.push([1, 3, , 4]), [4, this.indexedDBCache.removeItem(e)];
            case 2:
              return n.sent(), [3, 4];
            case 3:
              return t = n.sent(), this.handleDatabaseAccessError(t), [3, 4];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.getKeys = function() {
      return G(this, void 0, void 0, function() {
        var e, t;
        return z(this, function(n) {
          switch (n.label) {
            case 0:
              if (e = this.inMemoryCache.getKeys(), e.length !== 0)
                return [3, 4];
              n.label = 1;
            case 1:
              return n.trys.push([1, 3, , 4]), this.logger.verbose("In-memory cache is empty, now querying persistent storage."), [4, this.indexedDBCache.getKeys()];
            case 2:
              return [2, n.sent()];
            case 3:
              return t = n.sent(), this.handleDatabaseAccessError(t), [3, 4];
            case 4:
              return [2, e];
          }
        });
      });
    }, r.prototype.containsKey = function(e) {
      return G(this, void 0, void 0, function() {
        var t, n;
        return z(this, function(o) {
          switch (o.label) {
            case 0:
              if (t = this.inMemoryCache.containsKey(e), t)
                return [3, 4];
              o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), this.logger.verbose("Key not found in in-memory cache, now querying persistent storage."), [4, this.indexedDBCache.containsKey(e)];
            case 2:
              return [2, o.sent()];
            case 3:
              return n = o.sent(), this.handleDatabaseAccessError(n), [3, 4];
            case 4:
              return [2, t];
          }
        });
      });
    }, r.prototype.clearInMemory = function() {
      this.logger.verbose("Deleting in-memory keystore " + this.storeName), this.inMemoryCache.clear(), this.logger.verbose("In-memory keystore " + this.storeName + " deleted");
    }, r.prototype.clearPersistent = function() {
      return G(this, void 0, void 0, function() {
        var e, t;
        return z(this, function(n) {
          switch (n.label) {
            case 0:
              return n.trys.push([0, 2, , 3]), this.logger.verbose("Deleting persistent keystore"), [4, this.indexedDBCache.deleteDatabase()];
            case 1:
              return e = n.sent(), e && this.logger.verbose("Persistent keystore deleted"), [2, e];
            case 2:
              return t = n.sent(), this.handleDatabaseAccessError(t), [2, !1];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Ms;
(function(r) {
  r.asymmetricKeys = "asymmetricKeys", r.symmetricKeys = "symmetricKeys";
})(Ms || (Ms = {}));
var wA = (
  /** @class */
  function() {
    function r(e) {
      this.logger = e, this.asymmetricKeys = new Vp(this.logger, Ms.asymmetricKeys), this.symmetricKeys = new Vp(this.logger, Ms.symmetricKeys);
    }
    return r.prototype.clear = function() {
      return G(this, void 0, void 0, function() {
        var e;
        return z(this, function(t) {
          switch (t.label) {
            case 0:
              this.asymmetricKeys.clearInMemory(), this.symmetricKeys.clearInMemory(), t.label = 1;
            case 1:
              return t.trys.push([1, 3, , 4]), [4, this.asymmetricKeys.clearPersistent()];
            case 2:
              return t.sent(), [2, !0];
            case 3:
              return e = t.sent(), e instanceof Error ? this.logger.error("Clearing keystore failed with error: " + e.message) : this.logger.error("Clearing keystore failed with unknown error"), [2, !1];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var EA = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.logger = e, this.browserCrypto = new mm(this.logger, n), this.b64Encode = new gm(), this.b64Decode = new uA(), this.guidGenerator = new pm(this.browserCrypto), this.pkceGenerator = new fA(this.browserCrypto), this.cache = new wA(this.logger), this.performanceClient = t;
    }
    return r.prototype.createNewGuid = function() {
      return this.guidGenerator.generateGuid();
    }, r.prototype.base64Encode = function(e) {
      return this.b64Encode.encode(e);
    }, r.prototype.base64Decode = function(e) {
      return this.b64Decode.decode(e);
    }, r.prototype.generatePkceCodes = function() {
      return G(this, void 0, void 0, function() {
        return z(this, function(e) {
          return [2, this.pkceGenerator.generateCodes()];
        });
      });
    }, r.prototype.getPublicKeyThumbprint = function(e) {
      var t;
      return G(this, void 0, void 0, function() {
        var n, o, a, s, l, u, f, h;
        return z(this, function(p) {
          switch (p.label) {
            case 0:
              return n = (t = this.performanceClient) === null || t === void 0 ? void 0 : t.startMeasurement(F.CryptoOptsGetPublicKeyThumbprint, e.correlationId), [4, this.browserCrypto.generateKeyPair(r.EXTRACTABLE, r.POP_KEY_USAGES)];
            case 1:
              return o = p.sent(), [4, this.browserCrypto.exportJwk(o.publicKey)];
            case 2:
              return a = p.sent(), s = {
                e: a.e,
                kty: a.kty,
                n: a.n
              }, l = In.getSortedObjectString(s), [4, this.hashString(l)];
            case 3:
              return u = p.sent(), [4, this.browserCrypto.exportJwk(o.privateKey)];
            case 4:
              return f = p.sent(), [4, this.browserCrypto.importJwk(f, !1, ["sign"])];
            case 5:
              return h = p.sent(), [4, this.cache.asymmetricKeys.setItem(u, {
                privateKey: h,
                publicKey: o.publicKey,
                requestMethod: e.resourceRequestMethod,
                requestUri: e.resourceRequestUri
              })];
            case 6:
              return p.sent(), n && n.endMeasurement({
                success: !0
              }), [2, u];
          }
        });
      });
    }, r.prototype.removeTokenBindingKey = function(e) {
      return G(this, void 0, void 0, function() {
        var t;
        return z(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this.cache.asymmetricKeys.removeItem(e)];
            case 1:
              return n.sent(), [4, this.cache.asymmetricKeys.containsKey(e)];
            case 2:
              return t = n.sent(), [2, !t];
          }
        });
      });
    }, r.prototype.clearKeystore = function() {
      return G(this, void 0, void 0, function() {
        return z(this, function(e) {
          switch (e.label) {
            case 0:
              return [4, this.cache.clear()];
            case 1:
              return [2, e.sent()];
          }
        });
      });
    }, r.prototype.signJwt = function(e, t, n) {
      var o;
      return G(this, void 0, void 0, function() {
        var a, s, l, u, f, h, p, g, v, C, E, _, I;
        return z(this, function(A) {
          switch (A.label) {
            case 0:
              return a = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(F.CryptoOptsSignJwt, n), [4, this.cache.asymmetricKeys.getItem(t)];
            case 1:
              if (s = A.sent(), !s)
                throw X.createSigningKeyNotFoundInStorageError(t);
              return [4, this.browserCrypto.exportJwk(s.publicKey)];
            case 2:
              return l = A.sent(), u = In.getSortedObjectString(l), f = this.b64Encode.urlEncode(JSON.stringify({ kid: t })), h = VI.getShrHeaderString({ kid: f, alg: l.alg }), p = this.b64Encode.urlEncode(h), e.cnf = {
                jwk: JSON.parse(u)
              }, g = this.b64Encode.urlEncode(JSON.stringify(e)), v = p + "." + g, C = In.stringToArrayBuffer(v), [4, this.browserCrypto.sign(s.privateKey, C)];
            case 3:
              return E = A.sent(), _ = this.b64Encode.urlEncodeArr(new Uint8Array(E)), I = v + "." + _, a && a.endMeasurement({
                success: !0
              }), [2, I];
          }
        });
      });
    }, r.prototype.hashString = function(e) {
      return G(this, void 0, void 0, function() {
        var t, n;
        return z(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, this.browserCrypto.sha256Digest(e)];
            case 1:
              return t = o.sent(), n = new Uint8Array(t), [2, this.b64Encode.urlEncodeArr(n)];
          }
        });
      });
    }, r.POP_KEY_USAGES = ["sign", "verify"], r.EXTRACTABLE = !0, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Wp = (
  /** @class */
  function() {
    function r(e, t) {
      this.correlationId = t, this.measureName = r.makeMeasureName(e, t), this.startMark = r.makeStartMark(e, t), this.endMark = r.makeEndMark(e, t);
    }
    return r.makeMeasureName = function(e, t) {
      return "msal.measure." + e + "." + t;
    }, r.makeStartMark = function(e, t) {
      return "msal.start." + e + "." + t;
    }, r.makeEndMark = function(e, t) {
      return "msal.end." + e + "." + t;
    }, r.supportsBrowserPerformance = function() {
      return typeof window < "u" && typeof window.performance < "u" && typeof window.performance.mark == "function" && typeof window.performance.measure == "function" && typeof window.performance.clearMarks == "function" && typeof window.performance.clearMeasures == "function" && typeof window.performance.getEntriesByName == "function";
    }, r.flushMeasurements = function(e, t) {
      if (r.supportsBrowserPerformance())
        try {
          t.forEach(function(n) {
            var o = r.makeMeasureName(n.name, e), a = window.performance.getEntriesByName(o, "measure");
            a.length > 0 && (window.performance.clearMeasures(o), window.performance.clearMarks(r.makeStartMark(o, e)), window.performance.clearMarks(r.makeEndMark(o, e)));
          });
        } catch {
        }
    }, r.prototype.startMeasurement = function() {
      if (r.supportsBrowserPerformance())
        try {
          window.performance.mark(this.startMark);
        } catch {
        }
    }, r.prototype.endMeasurement = function() {
      if (r.supportsBrowserPerformance())
        try {
          window.performance.mark(this.endMark), window.performance.measure(this.measureName, this.startMark, this.endMark);
        } catch {
        }
    }, r.prototype.flushMeasurement = function() {
      if (r.supportsBrowserPerformance())
        try {
          var e = window.performance.getEntriesByName(this.measureName, "measure");
          if (e.length > 0) {
            var t = e[0].duration;
            return window.performance.clearMeasures(this.measureName), window.performance.clearMarks(this.startMark), window.performance.clearMarks(this.endMark), t;
          }
        } catch {
        }
      return null;
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var bA = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t, n, o, a, s, l, u) {
      var f = r.call(this, t, n, o, a, s, l) || this;
      return f.browserCrypto = new mm(f.logger, u), f.guidGenerator = new pm(f.browserCrypto), f;
    }
    return e.prototype.startPerformanceMeasuremeant = function(t, n) {
      return new Wp(t, n);
    }, e.prototype.generateId = function() {
      return this.guidGenerator.generateGuid();
    }, e.prototype.getPageVisibility = function() {
      var t;
      return ((t = document.visibilityState) === null || t === void 0 ? void 0 : t.toString()) || null;
    }, e.prototype.deleteIncompleteSubMeasurements = function(t) {
      var n = this.eventsByCorrelationId.get(t.event.correlationId), o = n && n.eventId === t.event.eventId, a = [];
      o && (n != null && n.incompleteSubMeasurements) && n.incompleteSubMeasurements.forEach(function(s) {
        a.push(le({}, s));
      }), a.length > 0 && Wp.flushMeasurements(t.event.correlationId, a);
    }, e.prototype.supportsBrowserPerformanceNow = function() {
      return typeof window < "u" && typeof window.performance < "u" && typeof window.performance.now == "function";
    }, e.prototype.startMeasurement = function(t, n) {
      var o = this, a = this.getPageVisibility(), s = r.prototype.startMeasurement.call(this, t, n);
      return le(le({}, s), { endMeasurement: function(l) {
        var u = s.endMeasurement(le({ startPageVisibility: a, endPageVisibility: o.getPageVisibility() }, l));
        return o.deleteIncompleteSubMeasurements(s), u;
      }, discardMeasurement: function() {
        s.discardMeasurement(), o.deleteIncompleteSubMeasurements(s), s.measurement.flushMeasurement();
      } });
    }, e.prototype.setPreQueueTime = function(t, n) {
      if (!this.supportsBrowserPerformanceNow()) {
        this.logger.trace("BrowserPerformanceClient: window performance API not available, unable to set telemetry queue time for " + t);
        return;
      }
      if (!n) {
        this.logger.trace("BrowserPerformanceClient: correlationId for " + t + " not provided, unable to set telemetry queue time");
        return;
      }
      var o = this.preQueueTimeByCorrelationId.get(n);
      o && (this.logger.trace("BrowserPerformanceClient: Incomplete pre-queue " + o.name + " found", n), this.addQueueMeasurement(o.name, n, void 0, !0)), this.preQueueTimeByCorrelationId.set(n, { name: t, time: window.performance.now() });
    }, e.prototype.addQueueMeasurement = function(t, n, o, a) {
      if (!this.supportsBrowserPerformanceNow()) {
        this.logger.trace("BrowserPerformanceClient: window performance API not available, unable to add queue measurement for " + t);
        return;
      }
      if (!n) {
        this.logger.trace("BrowserPerformanceClient: correlationId for " + t + " not provided, unable to add queue measurement");
        return;
      }
      var s = r.prototype.getPreQueueTime.call(this, t, n);
      if (s) {
        var l = window.performance.now(), u = o || r.prototype.calculateQueuedTime.call(this, s, l);
        return r.prototype.addQueueMeasurement.call(this, t, n, u, a);
      }
    }, e;
  }(lm)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var _A = (
  /** @class */
  function() {
    function r(e, t, n, o) {
      this.isBrowserEnvironment = typeof window < "u", this.config = e, this.storage = t, this.logger = n, this.cryptoObj = o;
    }
    return r.prototype.loadExternalTokens = function(e, t, n) {
      if (this.logger.info("TokenCache - loadExternalTokens called"), !t.id_token)
        throw X.createUnableToLoadTokenError("Please ensure server response includes id token.");
      var o = new sn(t.id_token, this.cryptoObj), a, s;
      if (e.account) {
        var l = this.loadAccount(o, e.account.environment, void 0, void 0, e.account.homeAccountId);
        a = new Wi(l, this.loadIdToken(o, l.homeAccountId, e.account.environment, e.account.tenantId), this.loadAccessToken(e, t, l.homeAccountId, e.account.environment, e.account.tenantId, n), this.loadRefreshToken(e, t, l.homeAccountId, e.account.environment));
      } else if (e.authority) {
        var u = Xi.generateAuthority(e.authority, e.azureCloudOptions), f = {
          protocolMode: this.config.auth.protocolMode,
          knownAuthorities: this.config.auth.knownAuthorities,
          cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
          authorityMetadata: this.config.auth.authorityMetadata,
          skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
        };
        if (s = new Xi(u, this.config.system.networkClient, this.storage, f, this.logger), n.clientInfo) {
          this.logger.trace("TokenCache - homeAccountId from options");
          var l = this.loadAccount(o, s.hostnameAndPort, n.clientInfo, s.authorityType);
          a = new Wi(l, this.loadIdToken(o, l.homeAccountId, s.hostnameAndPort, s.tenant), this.loadAccessToken(e, t, l.homeAccountId, s.hostnameAndPort, s.tenant, n), this.loadRefreshToken(e, t, l.homeAccountId, s.hostnameAndPort));
        } else if (t.client_info) {
          this.logger.trace("TokenCache - homeAccountId from response");
          var l = this.loadAccount(o, s.hostnameAndPort, t.client_info, s.authorityType);
          a = new Wi(l, this.loadIdToken(o, l.homeAccountId, s.hostnameAndPort, s.tenant), this.loadAccessToken(e, t, l.homeAccountId, s.hostnameAndPort, s.tenant, n), this.loadRefreshToken(e, t, l.homeAccountId, s.hostnameAndPort));
        } else
          throw X.createUnableToLoadTokenError("Please provide clientInfo in the response or options.");
      } else
        throw X.createUnableToLoadTokenError("Please provide a request with an account or a request with authority.");
      return this.generateAuthenticationResult(e, o, a, s);
    }, r.prototype.loadAccount = function(e, t, n, o, a) {
      var s;
      if (a ? s = a : o !== void 0 && n && (s = Rt.generateHomeAccountId(n, o, this.logger, this.cryptoObj, e)), !s)
        throw X.createUnableToLoadTokenError("Unexpected missing homeAccountId");
      var l = n ? Rt.createAccount(n, s, e, void 0, void 0, void 0, t) : Rt.createGenericAccount(s, e, void 0, void 0, void 0, t);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading account"), this.storage.setAccount(l), l;
      throw X.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.loadIdToken = function(e, t, n, o) {
      var a = po.createIdTokenEntity(t, n, e.rawToken, this.config.auth.clientId, o);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading id token"), this.storage.setIdTokenCredential(a), a;
      throw X.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.loadAccessToken = function(e, t, n, o, a, s) {
      if (!t.access_token)
        return this.logger.verbose("TokenCache - No access token provided for caching"), null;
      if (!t.expires_in)
        throw X.createUnableToLoadTokenError("Please ensure server response includes expires_in value.");
      if (!s.extendedExpiresOn)
        throw X.createUnableToLoadTokenError("Please provide an extendedExpiresOn value in the options.");
      var l = new Dt(e.scopes).printScopes(), u = s.expiresOn || t.expires_in + (/* @__PURE__ */ new Date()).getTime() / 1e3, f = s.extendedExpiresOn, h = go.createAccessTokenEntity(n, o, t.access_token, this.config.auth.clientId, a, l, u, f, this.cryptoObj);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading access token"), this.storage.setAccessTokenCredential(h), h;
      throw X.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.loadRefreshToken = function(e, t, n, o) {
      if (!t.refresh_token)
        return this.logger.verbose("TokenCache - No refresh token provided for caching"), null;
      var a = Jo.createRefreshTokenEntity(n, o, t.refresh_token, this.config.auth.clientId);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading refresh token"), this.storage.setRefreshTokenCredential(a), a;
      throw X.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.generateAuthenticationResult = function(e, t, n, o) {
      var a, s, l, u = O.EMPTY_STRING, f = [], h = null, p;
      n != null && n.accessToken && (u = n.accessToken.secret, f = Dt.fromString(n.accessToken.target).asArray(), h = new Date(Number(n.accessToken.expiresOn) * 1e3), p = new Date(Number(n.accessToken.extendedExpiresOn) * 1e3));
      var g = (t == null ? void 0 : t.claims.oid) || (t == null ? void 0 : t.claims.sub) || O.EMPTY_STRING, v = (t == null ? void 0 : t.claims.tid) || O.EMPTY_STRING;
      return {
        authority: o ? o.canonicalAuthority : O.EMPTY_STRING,
        uniqueId: g,
        tenantId: v,
        scopes: f,
        account: n != null && n.account ? n.account.getAccountInfo() : null,
        idToken: t ? t.rawToken : O.EMPTY_STRING,
        idTokenClaims: t ? t.claims : {},
        accessToken: u,
        fromCache: !0,
        expiresOn: h,
        correlationId: e.correlationId || O.EMPTY_STRING,
        requestId: O.EMPTY_STRING,
        extExpiresOn: p,
        familyId: O.EMPTY_STRING,
        tokenType: ((a = n == null ? void 0 : n.accessToken) === null || a === void 0 ? void 0 : a.tokenType) || O.EMPTY_STRING,
        state: O.EMPTY_STRING,
        cloudGraphHostName: ((s = n == null ? void 0 : n.account) === null || s === void 0 ? void 0 : s.cloudGraphHostName) || O.EMPTY_STRING,
        msGraphHost: ((l = n == null ? void 0 : n.account) === null || l === void 0 ? void 0 : l.msGraphHost) || O.EMPTY_STRING,
        code: void 0,
        fromNativeBroker: !1
      };
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var SA = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t) {
      var n = r.call(this, t) || this;
      return n.includeRedirectUri = !1, n;
    }
    return e;
  }(am)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var TA = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t, n, o, a, s, l, u, f, h, p) {
      var g = r.call(this, t, n, o, a, s, l, f, h, p) || this;
      return g.apiId = u, g;
    }
    return e.prototype.acquireToken = function(t) {
      return G(this, void 0, void 0, function() {
        var n, o, a, s, l, u, f;
        return z(this, function(h) {
          switch (h.label) {
            case 0:
              if (this.logger.trace("SilentAuthCodeClient.acquireToken called"), !t.code)
                throw X.createAuthCodeRequiredError();
              return this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, ce.Silent)];
            case 1:
              n = h.sent(), this.browserStorage.updateCacheEntries(n.state, n.nonce, n.authority, n.loginHint || O.EMPTY_STRING, n.account || null), o = this.initializeServerTelemetryManager(this.apiId), h.label = 2;
            case 2:
              return h.trys.push([2, 4, , 5]), a = le(le({}, n), { code: t.code }), this.performanceClient.setPreQueueTime(F.StandardInteractionClientGetClientConfiguration, t.correlationId), [4, this.getClientConfiguration(o, n.authority)];
            case 3:
              return s = h.sent(), l = new SA(s), this.logger.verbose("Auth code client created"), u = new hm(l, this.browserStorage, a, this.logger, this.config.system, this.performanceClient), [2, u.handleCodeResponseFromServer({
                code: t.code,
                msgraph_host: t.msGraphHost,
                cloud_graph_host_name: t.cloudGraphHostName,
                cloud_instance_host_name: t.cloudInstanceHostName
              }, n.state, l.authority, this.networkClient, !1)];
            case 4:
              throw f = h.sent(), f instanceof ue && f.setCorrelationId(this.correlationId), o.cacheFailedRequest(f), this.browserStorage.cleanRequestByState(n.state), f;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.logout = function() {
      return Promise.reject(X.createSilentLogoutUnsupportedError());
    }, e;
  }(ui)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var IA = (
  /** @class */
  function() {
    function r(e) {
      this.isBrowserEnvironment = typeof window < "u", this.config = aA(e, this.isBrowserEnvironment), this.initialized = !1, this.logger = new Lu(this.config.system.loggerOptions, Dl, ji), this.networkClient = this.config.system.networkClient, this.navigationClient = this.config.system.navigationClient, this.redirectResponse = /* @__PURE__ */ new Map(), this.hybridAuthCodeResponses = /* @__PURE__ */ new Map(), this.performanceClient = this.isBrowserEnvironment ? new bA(this.config.auth.clientId, this.config.auth.authority, this.logger, Dl, ji, this.config.telemetry.application, this.config.system.cryptoOptions) : new jI(this.config.auth.clientId, this.config.auth.authority, this.logger, Dl, ji, this.config.telemetry.application), this.browserCrypto = this.isBrowserEnvironment ? new EA(this.logger, this.performanceClient, this.config.system.cryptoOptions) : Ts, this.eventHandler = new lA(this.logger, this.browserCrypto), this.browserStorage = this.isBrowserEnvironment ? new fu(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger) : JI(this.config.auth.clientId, this.logger);
      var t = {
        cacheLocation: pt.MemoryStorage,
        temporaryCacheLocation: pt.MemoryStorage,
        storeAuthStateInCookie: !1,
        secureCookies: !1,
        cacheMigrationEnabled: !1,
        claimsBasedCachingEnabled: !0
      };
      this.nativeInternalStorage = new fu(this.config.auth.clientId, t, this.browserCrypto, this.logger), this.tokenCache = new _A(this.config, this.browserStorage, this.logger, this.browserCrypto), this.trackPageVisibilityWithMeasurement = this.trackPageVisibilityWithMeasurement.bind(this);
    }
    return r.prototype.initialize = function() {
      return G(this, void 0, void 0, function() {
        var e, t, n, o, a;
        return z(this, function(s) {
          switch (s.label) {
            case 0:
              if (this.logger.trace("initialize called"), this.initialized)
                return this.logger.info("initialize has already been called, exiting early."), [
                  2
                  /*return*/
                ];
              if (e = this.config.system.allowNativeBroker, t = this.performanceClient.startMeasurement(F.InitializeClientApplication), this.eventHandler.emitEvent(Ee.INITIALIZE_START), !e)
                return [3, 4];
              s.label = 1;
            case 1:
              return s.trys.push([1, 3, , 4]), n = this, [4, vo.createProvider(this.logger, this.config.system.nativeBrokerHandshakeTimeout, this.performanceClient)];
            case 2:
              return n.nativeExtensionProvider = s.sent(), [3, 4];
            case 3:
              return o = s.sent(), this.logger.verbose(o), [3, 4];
            case 4:
              return this.config.cache.claimsBasedCachingEnabled ? [3, 6] : (this.logger.verbose("Claims-based caching is disabled. Clearing the previous cache with claims"), a = this.performanceClient.startMeasurement(F.ClearTokensAndKeysWithClaims), [4, this.browserStorage.clearTokensAndKeysWithClaims()]);
            case 5:
              s.sent(), a.endMeasurement({ success: !0 }), s.label = 6;
            case 6:
              return this.initialized = !0, this.eventHandler.emitEvent(Ee.INITIALIZE_END), t.endMeasurement({ allowNativeBroker: e, success: !0 }), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.handleRedirectPromise = function(e) {
      return G(this, void 0, void 0, function() {
        var t, n, o, a, s, l, u, f, h = this;
        return z(this, function(p) {
          return this.logger.verbose("handleRedirectPromise called"), ct.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized), t = this.getAllAccounts(), this.isBrowserEnvironment ? (n = e || O.EMPTY_STRING, o = this.redirectResponse.get(n), typeof o > "u" ? (this.eventHandler.emitEvent(Ee.HANDLE_REDIRECT_START, ce.Redirect), this.logger.verbose("handleRedirectPromise has been called for the first time, storing the promise"), a = this.browserStorage.getCachedNativeRequest(), s = void 0, a && vo.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider) && this.nativeExtensionProvider && !e ? (this.logger.trace("handleRedirectPromise - acquiring token from native platform"), l = new ri(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.handleRedirectPromise, this.performanceClient, this.nativeExtensionProvider, a.accountId, this.nativeInternalStorage, a.correlationId), s = l.handleRedirectPromise()) : (this.logger.trace("handleRedirectPromise - acquiring token from web flow"), u = this.browserStorage.getTemporaryCache(Be.CORRELATION_ID, !0) || O.EMPTY_STRING, f = this.createRedirectClient(u), s = f.handleRedirectPromise(e)), o = s.then(function(g) {
            if (g) {
              var v = t.length < h.getAllAccounts().length;
              v ? (h.eventHandler.emitEvent(Ee.LOGIN_SUCCESS, ce.Redirect, g), h.logger.verbose("handleRedirectResponse returned result, login success")) : (h.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_SUCCESS, ce.Redirect, g), h.logger.verbose("handleRedirectResponse returned result, acquire token success"));
            }
            return h.eventHandler.emitEvent(Ee.HANDLE_REDIRECT_END, ce.Redirect), g;
          }).catch(function(g) {
            throw t.length > 0 ? h.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_FAILURE, ce.Redirect, null, g) : h.eventHandler.emitEvent(Ee.LOGIN_FAILURE, ce.Redirect, null, g), h.eventHandler.emitEvent(Ee.HANDLE_REDIRECT_END, ce.Redirect), g;
          }), this.redirectResponse.set(n, o)) : this.logger.verbose("handleRedirectPromise has been called previously, returning the result from the first call"), [2, o]) : (this.logger.verbose("handleRedirectPromise returns null, not browser environment"), [2, null]);
        });
      });
    }, r.prototype.acquireTokenRedirect = function(e) {
      return G(this, void 0, void 0, function() {
        var t, n, o, a, s, l = this;
        return z(this, function(u) {
          return t = this.getRequestCorrelationId(e), this.logger.verbose("acquireTokenRedirect called", t), this.preflightBrowserEnvironmentCheck(ce.Redirect), n = this.getAllAccounts().length > 0, n ? this.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_START, ce.Redirect, e) : this.eventHandler.emitEvent(Ee.LOGIN_START, ce.Redirect, e), this.nativeExtensionProvider && this.canUseNative(e) ? (a = new ri(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenRedirect, this.performanceClient, this.nativeExtensionProvider, this.getNativeAccountId(e), this.nativeInternalStorage, e.correlationId), o = a.acquireTokenRedirect(e).catch(function(f) {
            if (f instanceof on && f.isFatal()) {
              l.nativeExtensionProvider = void 0;
              var h = l.createRedirectClient(e.correlationId);
              return h.acquireToken(e);
            } else if (f instanceof zr) {
              l.logger.verbose("acquireTokenRedirect - Resolving interaction required error thrown by native broker by falling back to web flow");
              var h = l.createRedirectClient(e.correlationId);
              return h.acquireToken(e);
            }
            throw l.browserStorage.setInteractionInProgress(!1), f;
          })) : (s = this.createRedirectClient(e.correlationId), o = s.acquireToken(e)), [2, o.catch(function(f) {
            throw n ? l.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_FAILURE, ce.Redirect, null, f) : l.eventHandler.emitEvent(Ee.LOGIN_FAILURE, ce.Redirect, null, f), f;
          })];
        });
      });
    }, r.prototype.acquireTokenPopup = function(e) {
      var t = this, n = this.getRequestCorrelationId(e), o = this.performanceClient.startMeasurement(F.AcquireTokenPopup, n);
      try {
        this.logger.verbose("acquireTokenPopup called", n), this.preflightBrowserEnvironmentCheck(ce.Popup);
      } catch (u) {
        return Promise.reject(u);
      }
      var a = this.getAllAccounts();
      a.length > 0 ? this.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_START, ce.Popup, e) : this.eventHandler.emitEvent(Ee.LOGIN_START, ce.Popup, e);
      var s;
      if (this.canUseNative(e))
        s = this.acquireTokenNative(e, Ze.acquireTokenPopup).then(function(u) {
          return t.browserStorage.setInteractionInProgress(!1), o.endMeasurement({
            success: !0,
            isNativeBroker: !0,
            requestId: u.requestId
          }), u;
        }).catch(function(u) {
          if (u instanceof on && u.isFatal()) {
            t.nativeExtensionProvider = void 0;
            var f = t.createPopupClient(e.correlationId);
            return f.acquireToken(e);
          } else if (u instanceof zr) {
            t.logger.verbose("acquireTokenPopup - Resolving interaction required error thrown by native broker by falling back to web flow");
            var f = t.createPopupClient(e.correlationId);
            return f.acquireToken(e);
          }
          throw t.browserStorage.setInteractionInProgress(!1), u;
        });
      else {
        var l = this.createPopupClient(e.correlationId);
        s = l.acquireToken(e);
      }
      return s.then(function(u) {
        var f = a.length < t.getAllAccounts().length;
        return f ? t.eventHandler.emitEvent(Ee.LOGIN_SUCCESS, ce.Popup, u) : t.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_SUCCESS, ce.Popup, u), o.addStaticFields({
          accessTokenSize: u.accessToken.length,
          idTokenSize: u.idToken.length
        }), o.endMeasurement({
          success: !0,
          requestId: u.requestId
        }), u;
      }).catch(function(u) {
        return a.length > 0 ? t.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_FAILURE, ce.Popup, null, u) : t.eventHandler.emitEvent(Ee.LOGIN_FAILURE, ce.Popup, null, u), o.endMeasurement({
          errorCode: u.errorCode,
          subErrorCode: u.subError,
          success: !1
        }), Promise.reject(u);
      });
    }, r.prototype.trackPageVisibilityWithMeasurement = function() {
      var e = this.ssoSilentMeasurement || this.acquireTokenByCodeAsyncMeasurement;
      e && (this.logger.info("Perf: Visibility change detected in ", e.event.name), e.increment({
        visibilityChangeCount: 1
      }));
    }, r.prototype.ssoSilent = function(e) {
      var t;
      return G(this, void 0, void 0, function() {
        var n, o, a, s, l = this;
        return z(this, function(u) {
          return n = this.getRequestCorrelationId(e), o = le(le({}, e), {
            // will be PromptValue.NONE or PromptValue.NO_SESSION
            prompt: e.prompt,
            correlationId: n
          }), this.preflightBrowserEnvironmentCheck(ce.Silent), this.ssoSilentMeasurement = this.performanceClient.startMeasurement(F.SsoSilent, n), (t = this.ssoSilentMeasurement) === null || t === void 0 || t.increment({
            visibilityChangeCount: 0
          }), document.addEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement), this.logger.verbose("ssoSilent called", n), this.eventHandler.emitEvent(Ee.SSO_SILENT_START, ce.Silent, o), this.canUseNative(o) ? a = this.acquireTokenNative(o, Ze.ssoSilent).catch(function(f) {
            if (f instanceof on && f.isFatal()) {
              l.nativeExtensionProvider = void 0;
              var h = l.createSilentIframeClient(o.correlationId);
              return h.acquireToken(o);
            }
            throw f;
          }) : (s = this.createSilentIframeClient(o.correlationId), a = s.acquireToken(o)), [2, a.then(function(f) {
            var h, p;
            return l.eventHandler.emitEvent(Ee.SSO_SILENT_SUCCESS, ce.Silent, f), (h = l.ssoSilentMeasurement) === null || h === void 0 || h.addStaticFields({
              accessTokenSize: f.accessToken.length,
              idTokenSize: f.idToken.length
            }), (p = l.ssoSilentMeasurement) === null || p === void 0 || p.endMeasurement({
              success: !0,
              isNativeBroker: f.fromNativeBroker,
              requestId: f.requestId
            }), f;
          }).catch(function(f) {
            var h;
            throw l.eventHandler.emitEvent(Ee.SSO_SILENT_FAILURE, ce.Silent, null, f), (h = l.ssoSilentMeasurement) === null || h === void 0 || h.endMeasurement({
              errorCode: f.errorCode,
              subErrorCode: f.subError,
              success: !1
            }), f;
          }).finally(function() {
            document.removeEventListener("visibilitychange", l.trackPageVisibilityWithMeasurement);
          })];
        });
      });
    }, r.prototype.acquireTokenByCode = function(e) {
      return G(this, void 0, void 0, function() {
        var t, n, o, a, s = this;
        return z(this, function(l) {
          t = this.getRequestCorrelationId(e), this.preflightBrowserEnvironmentCheck(ce.Silent), this.logger.trace("acquireTokenByCode called", t), this.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_BY_CODE_START, ce.Silent, e), n = this.performanceClient.startMeasurement(F.AcquireTokenByCode, e.correlationId);
          try {
            if (e.code && e.nativeAccountId)
              throw X.createSpaCodeAndNativeAccountIdPresentError();
            if (e.code)
              return o = e.code, a = this.hybridAuthCodeResponses.get(o), a ? (this.logger.verbose("Existing acquireTokenByCode request found", e.correlationId), n.discardMeasurement()) : (this.logger.verbose("Initiating new acquireTokenByCode request", t), a = this.acquireTokenByCodeAsync(le(le({}, e), { correlationId: t })).then(function(u) {
                return s.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_BY_CODE_SUCCESS, ce.Silent, u), s.hybridAuthCodeResponses.delete(o), n.addStaticFields({
                  accessTokenSize: u.accessToken.length,
                  idTokenSize: u.idToken.length
                }), n.endMeasurement({
                  success: !0,
                  isNativeBroker: u.fromNativeBroker,
                  requestId: u.requestId
                }), u;
              }).catch(function(u) {
                throw s.hybridAuthCodeResponses.delete(o), s.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_BY_CODE_FAILURE, ce.Silent, null, u), n.endMeasurement({
                  errorCode: u.errorCode,
                  subErrorCode: u.subError,
                  success: !1
                }), u;
              }), this.hybridAuthCodeResponses.set(o, a)), [2, a];
            if (e.nativeAccountId) {
              if (this.canUseNative(e, e.nativeAccountId))
                return [2, this.acquireTokenNative(e, Ze.acquireTokenByCode, e.nativeAccountId).catch(function(u) {
                  throw u instanceof on && u.isFatal() && (s.nativeExtensionProvider = void 0), u;
                })];
              throw X.createUnableToAcquireTokenFromNativePlatformError();
            } else
              throw X.createAuthCodeOrNativeAccountIdRequiredError();
          } catch (u) {
            throw this.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_BY_CODE_FAILURE, ce.Silent, null, u), n.endMeasurement({
              errorCode: u instanceof ue && u.errorCode || void 0,
              subErrorCode: u instanceof ue && u.subError || void 0,
              success: !1
            }), u;
          }
          return [
            2
            /*return*/
          ];
        });
      });
    }, r.prototype.acquireTokenByCodeAsync = function(e) {
      var t;
      return G(this, void 0, void 0, function() {
        var n, o, a = this;
        return z(this, function(s) {
          switch (s.label) {
            case 0:
              return this.logger.trace("acquireTokenByCodeAsync called", e.correlationId), this.acquireTokenByCodeAsyncMeasurement = this.performanceClient.startMeasurement(F.AcquireTokenByCodeAsync, e.correlationId), (t = this.acquireTokenByCodeAsyncMeasurement) === null || t === void 0 || t.increment({
                visibilityChangeCount: 0
              }), document.addEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement), n = this.createSilentAuthCodeClient(e.correlationId), [4, n.acquireToken(e).then(function(l) {
                var u;
                return (u = a.acquireTokenByCodeAsyncMeasurement) === null || u === void 0 || u.endMeasurement({
                  success: !0,
                  fromCache: l.fromCache,
                  isNativeBroker: l.fromNativeBroker,
                  requestId: l.requestId
                }), l;
              }).catch(function(l) {
                var u;
                throw (u = a.acquireTokenByCodeAsyncMeasurement) === null || u === void 0 || u.endMeasurement({
                  errorCode: l.errorCode,
                  subErrorCode: l.subError,
                  success: !1
                }), l;
              }).finally(function() {
                document.removeEventListener("visibilitychange", a.trackPageVisibilityWithMeasurement);
              })];
            case 1:
              return o = s.sent(), [2, o];
          }
        });
      });
    }, r.prototype.acquireTokenFromCache = function(e, t, n) {
      return G(this, void 0, void 0, function() {
        return z(this, function(o) {
          switch (this.performanceClient.addQueueMeasurement(F.AcquireTokenFromCache, t.correlationId), n.cacheLookupPolicy) {
            case rr.Default:
            case rr.AccessToken:
            case rr.AccessTokenAndRefreshToken:
              return [2, e.acquireToken(t)];
            default:
              throw ie.createRefreshRequiredError();
          }
          return [
            2
            /*return*/
          ];
        });
      });
    }, r.prototype.acquireTokenByRefreshToken = function(e, t) {
      return G(this, void 0, void 0, function() {
        var n;
        return z(this, function(o) {
          switch (this.performanceClient.addQueueMeasurement(F.AcquireTokenByRefreshToken, e.correlationId), t.cacheLookupPolicy) {
            case rr.Default:
            case rr.AccessTokenAndRefreshToken:
            case rr.RefreshToken:
            case rr.RefreshTokenAndNetwork:
              return n = this.createSilentRefreshClient(e.correlationId), this.performanceClient.setPreQueueTime(F.SilentRefreshClientAcquireToken, e.correlationId), [2, n.acquireToken(e)];
            default:
              throw ie.createRefreshRequiredError();
          }
          return [
            2
            /*return*/
          ];
        });
      });
    }, r.prototype.acquireTokenBySilentIframe = function(e) {
      return G(this, void 0, void 0, function() {
        var t;
        return z(this, function(n) {
          return this.performanceClient.addQueueMeasurement(F.AcquireTokenBySilentIframe, e.correlationId), t = this.createSilentIframeClient(e.correlationId), this.performanceClient.setPreQueueTime(F.SilentIframeClientAcquireToken, e.correlationId), [2, t.acquireToken(e)];
        });
      });
    }, r.prototype.logout = function(e) {
      return G(this, void 0, void 0, function() {
        var t;
        return z(this, function(n) {
          return t = this.getRequestCorrelationId(e), this.logger.warning("logout API is deprecated and will be removed in msal-browser v3.0.0. Use logoutRedirect instead.", t), [2, this.logoutRedirect(le({ correlationId: t }, e))];
        });
      });
    }, r.prototype.logoutRedirect = function(e) {
      return G(this, void 0, void 0, function() {
        var t, n;
        return z(this, function(o) {
          return t = this.getRequestCorrelationId(e), this.preflightBrowserEnvironmentCheck(ce.Redirect), n = this.createRedirectClient(t), [2, n.logout(e)];
        });
      });
    }, r.prototype.logoutPopup = function(e) {
      try {
        var t = this.getRequestCorrelationId(e);
        this.preflightBrowserEnvironmentCheck(ce.Popup);
        var n = this.createPopupClient(t);
        return n.logout(e);
      } catch (o) {
        return Promise.reject(o);
      }
    }, r.prototype.getAllAccounts = function() {
      return this.logger.verbose("getAllAccounts called"), this.isBrowserEnvironment ? this.browserStorage.getAllAccounts() : [];
    }, r.prototype.getAccountByUsername = function(e) {
      if (this.logger.trace("getAccountByUsername called"), !e)
        return this.logger.warning("getAccountByUsername: No username provided"), null;
      var t = this.browserStorage.getAccountInfoFilteredBy({ username: e });
      return t ? (this.logger.verbose("getAccountByUsername: Account matching username found, returning"), this.logger.verbosePii("getAccountByUsername: Returning signed-in accounts matching username: " + e), t) : (this.logger.verbose("getAccountByUsername: No matching account found, returning null"), null);
    }, r.prototype.getAccountByHomeId = function(e) {
      if (this.logger.trace("getAccountByHomeId called"), !e)
        return this.logger.warning("getAccountByHomeId: No homeAccountId provided"), null;
      var t = this.browserStorage.getAccountInfoFilteredBy({ homeAccountId: e });
      return t ? (this.logger.verbose("getAccountByHomeId: Account matching homeAccountId found, returning"), this.logger.verbosePii("getAccountByHomeId: Returning signed-in accounts matching homeAccountId: " + e), t) : (this.logger.verbose("getAccountByHomeId: No matching account found, returning null"), null);
    }, r.prototype.getAccountByLocalId = function(e) {
      if (this.logger.trace("getAccountByLocalId called"), !e)
        return this.logger.warning("getAccountByLocalId: No localAccountId provided"), null;
      var t = this.browserStorage.getAccountInfoFilteredBy({ localAccountId: e });
      return t ? (this.logger.verbose("getAccountByLocalId: Account matching localAccountId found, returning"), this.logger.verbosePii("getAccountByLocalId: Returning signed-in accounts matching localAccountId: " + e), t) : (this.logger.verbose("getAccountByLocalId: No matching account found, returning null"), null);
    }, r.prototype.setActiveAccount = function(e) {
      this.browserStorage.setActiveAccount(e);
    }, r.prototype.getActiveAccount = function() {
      return this.browserStorage.getActiveAccount();
    }, r.prototype.preflightBrowserEnvironmentCheck = function(e, t) {
      if (t === void 0 && (t = !0), this.logger.verbose("preflightBrowserEnvironmentCheck started"), ct.blockNonBrowserEnvironment(this.isBrowserEnvironment), ct.blockRedirectInIframe(e, this.config.system.allowRedirectInIframe), ct.blockReloadInHiddenIframes(), ct.blockAcquireTokenInPopups(), ct.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized), e === ce.Redirect && this.config.cache.cacheLocation === pt.MemoryStorage && !this.config.cache.storeAuthStateInCookie)
        throw Os.createInMemoryRedirectUnavailableError();
      (e === ce.Redirect || e === ce.Popup) && this.preflightInteractiveRequest(t);
    }, r.prototype.preflightInteractiveRequest = function(e) {
      this.logger.verbose("preflightInteractiveRequest called, validating app environment"), ct.blockReloadInHiddenIframes(), e && this.browserStorage.setInteractionInProgress(!0);
    }, r.prototype.acquireTokenNative = function(e, t, n) {
      return G(this, void 0, void 0, function() {
        var o;
        return z(this, function(a) {
          if (this.logger.trace("acquireTokenNative called"), !this.nativeExtensionProvider)
            throw X.createNativeConnectionNotEstablishedError();
          return o = new ri(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, t, this.performanceClient, this.nativeExtensionProvider, n || this.getNativeAccountId(e), this.nativeInternalStorage, e.correlationId), [2, o.acquireToken(e)];
        });
      });
    }, r.prototype.canUseNative = function(e, t) {
      if (this.logger.trace("canUseNative called"), !vo.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, e.authenticationScheme))
        return this.logger.trace("canUseNative: isNativeAvailable returned false, returning false"), !1;
      if (e.prompt)
        switch (e.prompt) {
          case Ft.NONE:
          case Ft.CONSENT:
          case Ft.LOGIN:
            this.logger.trace("canUseNative: prompt is compatible with native flow");
            break;
          default:
            return this.logger.trace("canUseNative: prompt = " + e.prompt + " is not compatible with native flow, returning false"), !1;
        }
      return !t && !this.getNativeAccountId(e) ? (this.logger.trace("canUseNative: nativeAccountId is not available, returning false"), !1) : !0;
    }, r.prototype.getNativeAccountId = function(e) {
      var t = e.account || this.browserStorage.getAccountInfoByHints(e.loginHint, e.sid) || this.getActiveAccount();
      return t && t.nativeAccountId || "";
    }, r.prototype.createPopupClient = function(e) {
      return new tA(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createRedirectClient = function(e) {
      return new eA(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentIframeClient = function(e) {
      return new sA(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.ssoSilent, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentCacheClient = function(e) {
      return new fm(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentRefreshClient = function(e) {
      return new cA(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentAuthCodeClient = function(e) {
      return new TA(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenByCode, this.performanceClient, this.nativeExtensionProvider, e);
    }, r.prototype.addEventCallback = function(e) {
      return this.eventHandler.addEventCallback(e);
    }, r.prototype.removeEventCallback = function(e) {
      this.eventHandler.removeEventCallback(e);
    }, r.prototype.addPerformanceCallback = function(e) {
      return this.performanceClient.addPerformanceCallback(e);
    }, r.prototype.removePerformanceCallback = function(e) {
      return this.performanceClient.removePerformanceCallback(e);
    }, r.prototype.enableAccountStorageEvents = function() {
      this.eventHandler.enableAccountStorageEvents();
    }, r.prototype.disableAccountStorageEvents = function() {
      this.eventHandler.disableAccountStorageEvents();
    }, r.prototype.getTokenCache = function() {
      return this.tokenCache;
    }, r.prototype.getLogger = function() {
      return this.logger;
    }, r.prototype.setLogger = function(e) {
      this.logger = e;
    }, r.prototype.initializeWrapperLibrary = function(e, t) {
      this.browserStorage.setWrapperMetadata(e, t);
    }, r.prototype.setNavigationClient = function(e) {
      this.navigationClient = e;
    }, r.prototype.getConfiguration = function() {
      return this.config;
    }, r.prototype.getRequestCorrelationId = function(e) {
      return e != null && e.correlationId ? e.correlationId : this.isBrowserEnvironment ? this.browserCrypto.createNewGuid() : O.EMPTY_STRING;
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var AA = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t) {
      var n = r.call(this, t) || this;
      return n.astsAsyncMeasurement = void 0, n.activeSilentTokenRequests = /* @__PURE__ */ new Map(), n.trackPageVisibility = n.trackPageVisibility.bind(n), n;
    }
    return e.prototype.loginRedirect = function(t) {
      return G(this, void 0, void 0, function() {
        var n;
        return z(this, function(o) {
          return n = this.getRequestCorrelationId(t), this.logger.verbose("loginRedirect called", n), [2, this.acquireTokenRedirect(le({ correlationId: n }, t || Kp))];
        });
      });
    }, e.prototype.loginPopup = function(t) {
      var n = this.getRequestCorrelationId(t);
      return this.logger.verbose("loginPopup called", n), this.acquireTokenPopup(le({ correlationId: n }, t || Kp));
    }, e.prototype.acquireTokenSilent = function(t) {
      return G(this, void 0, void 0, function() {
        var n, o, a, s, l, u, f, h = this;
        return z(this, function(p) {
          if (n = this.getRequestCorrelationId(t), o = this.performanceClient.startMeasurement(F.AcquireTokenSilent, n), o.addStaticFields({
            cacheLookupPolicy: t.cacheLookupPolicy
          }), this.preflightBrowserEnvironmentCheck(ce.Silent), this.logger.verbose("acquireTokenSilent called", n), a = t.account || this.getActiveAccount(), !a)
            throw X.createNoAccountError();
          return s = {
            clientId: this.config.auth.clientId,
            authority: t.authority || O.EMPTY_STRING,
            scopes: t.scopes,
            homeAccountIdentifier: a.homeAccountId,
            claims: t.claims,
            authenticationScheme: t.authenticationScheme,
            resourceRequestMethod: t.resourceRequestMethod,
            resourceRequestUri: t.resourceRequestUri,
            shrClaims: t.shrClaims,
            sshKid: t.sshKid
          }, l = JSON.stringify(s), u = this.activeSilentTokenRequests.get(l), typeof u > "u" ? (this.logger.verbose("acquireTokenSilent called for the first time, storing active request", n), this.performanceClient.setPreQueueTime(F.AcquireTokenSilentAsync, n), f = this.acquireTokenSilentAsync(le(le({}, t), { correlationId: n }), a).then(function(g) {
            return h.activeSilentTokenRequests.delete(l), o.addStaticFields({
              accessTokenSize: g.accessToken.length,
              idTokenSize: g.idToken.length
            }), o.endMeasurement({
              success: !0,
              fromCache: g.fromCache,
              isNativeBroker: g.fromNativeBroker,
              cacheLookupPolicy: t.cacheLookupPolicy,
              requestId: g.requestId
            }), g;
          }).catch(function(g) {
            throw h.activeSilentTokenRequests.delete(l), o.endMeasurement({
              errorCode: g.errorCode,
              subErrorCode: g.subError,
              success: !1
            }), g;
          }), this.activeSilentTokenRequests.set(l, f), [2, f]) : (this.logger.verbose("acquireTokenSilent has been called previously, returning the result from the first call", n), o.discardMeasurement(), [2, u]);
        });
      });
    }, e.prototype.trackPageVisibility = function() {
      this.astsAsyncMeasurement && (this.logger.info("Perf: Visibility change detected"), this.astsAsyncMeasurement.increment({
        visibilityChangeCount: 1
      }));
    }, e.prototype.acquireTokenSilentAsync = function(t, n) {
      var o;
      return G(this, void 0, void 0, function() {
        var a, s, l, u, f, h = this;
        return z(this, function(p) {
          switch (p.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(F.AcquireTokenSilentAsync, t.correlationId), this.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_START, ce.Silent, t), this.astsAsyncMeasurement = this.performanceClient.startMeasurement(F.AcquireTokenSilentAsync, t.correlationId), (o = this.astsAsyncMeasurement) === null || o === void 0 || o.increment({
                visibilityChangeCount: 0
              }), document.addEventListener("visibilitychange", this.trackPageVisibility), vo.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, t.authenticationScheme) && n.nativeAccountId ? (this.logger.verbose("acquireTokenSilent - attempting to acquire token from native platform"), s = le(le({}, t), { account: n }), a = this.acquireTokenNative(s, Ze.acquireTokenSilent_silentFlow).catch(function(g) {
                return G(h, void 0, void 0, function() {
                  var v;
                  return z(this, function(C) {
                    if (g instanceof on && g.isFatal())
                      return this.logger.verbose("acquireTokenSilent - native platform unavailable, falling back to web flow"), this.nativeExtensionProvider = void 0, v = this.createSilentIframeClient(t.correlationId), [2, v.acquireToken(t)];
                    throw g;
                  });
                });
              }), [3, 3]) : [3, 1];
            case 1:
              return this.logger.verbose("acquireTokenSilent - attempting to acquire token from web flow"), l = this.createSilentCacheClient(t.correlationId), this.performanceClient.setPreQueueTime(F.InitializeSilentRequest, t.correlationId), [4, l.initializeSilentRequest(t, n)];
            case 2:
              u = p.sent(), f = le(le({}, t), {
                // set the request's CacheLookupPolicy to Default if it was not optionally passed in
                cacheLookupPolicy: t.cacheLookupPolicy || rr.Default
              }), this.performanceClient.setPreQueueTime(F.AcquireTokenFromCache, u.correlationId), a = this.acquireTokenFromCache(l, u, f).catch(function(g) {
                if (f.cacheLookupPolicy === rr.AccessToken)
                  throw g;
                return ct.blockReloadInHiddenIframes(), h.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_NETWORK_START, ce.Silent, u), h.performanceClient.setPreQueueTime(F.AcquireTokenByRefreshToken, u.correlationId), h.acquireTokenByRefreshToken(u, f).catch(function(v) {
                  var C = v instanceof wo, E = v instanceof zr, _ = v.errorCode === Xo.noTokensFoundError.code, I = v.errorCode === $r.INVALID_GRANT_ERROR;
                  if ((!C || !I || E || f.cacheLookupPolicy === rr.AccessTokenAndRefreshToken || f.cacheLookupPolicy === rr.RefreshToken) && f.cacheLookupPolicy !== rr.Skip && !_)
                    throw v;
                  return h.logger.verbose("Refresh token expired/invalid or CacheLookupPolicy is set to Skip, attempting acquire token by iframe.", t.correlationId), h.performanceClient.setPreQueueTime(F.AcquireTokenBySilentIframe, u.correlationId), h.acquireTokenBySilentIframe(u);
                });
              }), p.label = 3;
            case 3:
              return [2, a.then(function(g) {
                var v;
                return h.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_SUCCESS, ce.Silent, g), (v = h.astsAsyncMeasurement) === null || v === void 0 || v.endMeasurement({
                  success: !0,
                  fromCache: g.fromCache,
                  isNativeBroker: g.fromNativeBroker,
                  requestId: g.requestId
                }), g;
              }).catch(function(g) {
                var v;
                throw h.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_FAILURE, ce.Silent, null, g), (v = h.astsAsyncMeasurement) === null || v === void 0 || v.endMeasurement({
                  errorCode: g.errorCode,
                  subErrorCode: g.subError,
                  success: !1
                }), g;
              }).finally(function() {
                document.removeEventListener("visibilitychange", h.trackPageVisibility);
              })];
          }
        });
      });
    }, e;
  }(IA)
);
function an(r) {
  return Object.keys(r);
}
function Ul(r) {
  return r && typeof r == "object" && !Array.isArray(r);
}
function Bu(r, e) {
  const t = { ...r }, n = e;
  return Ul(r) && Ul(e) && Object.keys(e).forEach((o) => {
    Ul(n[o]) && o in r ? t[o] = Bu(t[o], n[o]) : t[o] = n[o];
  }), t;
}
function RA(r) {
  return r.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
function kA(r) {
  var e;
  return typeof r != "string" || !r.includes("var(--mantine-scale)") ? r : (e = r.match(/^calc\((.*?)\)$/)) == null ? void 0 : e[1].split("*")[0].trim();
}
function PA(r) {
  const e = kA(r);
  return typeof e == "number" ? e : typeof e == "string" ? e.includes("calc") || e.includes("var") ? e : e.includes("px") ? Number(e.replace("px", "")) : e.includes("rem") ? Number(e.replace("rem", "")) * 16 : e.includes("em") ? Number(e.replace("em", "")) * 16 : Number(e) : NaN;
}
function Fl(r) {
  return `calc(${r} * var(--mantine-scale))`;
}
function vm(r, { shouldScale: e = !1 } = {}) {
  function t(n) {
    if (n === 0 || n === "0")
      return "0";
    if (typeof n == "number") {
      const o = `${n / 16}${r}`;
      return e ? Fl(o) : o;
    }
    if (typeof n == "string") {
      if (n.startsWith("calc(") || n.startsWith("var(") || n.startsWith("clamp("))
        return n;
      if (n.includes(" "))
        return n.split(" ").map((a) => t(a)).join(" ");
      if (n.includes(r))
        return e ? Fl(n) : n;
      const o = n.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const a = `${Number(o) / 16}${r}`;
        return e ? Fl(a) : a;
      }
    }
    return n;
  }
  return t;
}
const $ = vm("rem", { shouldScale: !0 }), jp = vm("em");
function Ku(r) {
  return Object.keys(r).reduce((e, t) => (r[t] !== void 0 && (e[t] = r[t]), e), {});
}
function ym(r) {
  return typeof r == "number" ? !0 : typeof r == "string" ? r.startsWith("calc(") || r.startsWith("var(") || r.includes(" ") && r.trim() !== "" ? !0 : /[0-9]/.test(r.trim().replace("-", "")[0]) : !1;
}
function ca(r) {
  return Array.isArray(r) || r === null ? !1 : typeof r == "object" ? r.type !== N.Fragment : !1;
}
function di(r) {
  const e = Io(null);
  return [({ children: o, value: a }) => /* @__PURE__ */ N.createElement(e.Provider, { value: a }, o), () => {
    const o = Yn(e);
    if (o === null)
      throw new Error(r);
    return o;
  }];
}
function NA(r = null) {
  const e = Io(r);
  return [({ children: o, value: a }) => /* @__PURE__ */ N.createElement(e.Provider, { value: a }, o), () => Yn(e)];
}
function Yp(r, e) {
  return (t) => {
    if (typeof t != "string" || t.trim().length === 0)
      throw new Error(e);
    return `${r}-${t}`;
  };
}
function pu(r, e) {
  let t = r;
  for (; (t = t.parentElement) && !t.matches(e); )
    ;
  return t;
}
function OA(r, e, t) {
  for (let n = r - 1; n >= 0; n -= 1)
    if (!e[n].disabled)
      return n;
  if (t) {
    for (let n = e.length - 1; n > -1; n -= 1)
      if (!e[n].disabled)
        return n;
  }
  return r;
}
function MA(r, e, t) {
  for (let n = r + 1; n < e.length; n += 1)
    if (!e[n].disabled)
      return n;
  if (t) {
    for (let n = 0; n < e.length; n += 1)
      if (!e[n].disabled)
        return n;
  }
  return r;
}
function xA(r, e, t) {
  return pu(r, t) === pu(e, t);
}
function LA({
  parentSelector: r,
  siblingSelector: e,
  onKeyDown: t,
  loop: n = !0,
  activateOnFocus: o = !1,
  dir: a = "rtl",
  orientation: s
}) {
  return (l) => {
    var C;
    t == null || t(l);
    const u = Array.from(
      ((C = pu(l.currentTarget, r)) == null ? void 0 : C.querySelectorAll(
        e
      )) || []
    ).filter((E) => xA(l.currentTarget, E, r)), f = u.findIndex((E) => l.currentTarget === E), h = MA(f, u, n), p = OA(f, u, n), g = a === "rtl" ? p : h, v = a === "rtl" ? h : p;
    switch (l.key) {
      case "ArrowRight": {
        s === "horizontal" && (l.stopPropagation(), l.preventDefault(), u[g].focus(), o && u[g].click());
        break;
      }
      case "ArrowLeft": {
        s === "horizontal" && (l.stopPropagation(), l.preventDefault(), u[v].focus(), o && u[v].click());
        break;
      }
      case "ArrowUp": {
        s === "vertical" && (l.stopPropagation(), l.preventDefault(), u[p].focus(), o && u[p].click());
        break;
      }
      case "ArrowDown": {
        s === "vertical" && (l.stopPropagation(), l.preventDefault(), u[h].focus(), o && u[h].click());
        break;
      }
      case "Home": {
        l.stopPropagation(), l.preventDefault(), !u[0].disabled && u[0].focus();
        break;
      }
      case "End": {
        l.stopPropagation(), l.preventDefault();
        const E = u.length - 1;
        !u[E].disabled && u[E].focus();
        break;
      }
    }
  };
}
const DA = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function UA(r) {
  return DA[r];
}
const FA = () => {
};
function HA(r, e = { active: !0 }) {
  return typeof r != "function" || !e.active ? e.onKeyDown || FA : (t) => {
    var n;
    t.key === "Escape" && (r(t), (n = e.onTrigger) == null || n.call(e));
  };
}
function Ht(r, e = "size", t = !0) {
  if (r !== void 0)
    return ym(r) ? t ? $(r) : r : `var(--${e}-${r})`;
}
function qu(r) {
  return Ht(r, "mantine-spacing");
}
function fi(r) {
  return r === void 0 ? "var(--mantine-radius-default)" : Ht(r, "mantine-radius");
}
function Nr(r) {
  return Ht(r, "mantine-font-size");
}
function BA(r) {
  if (r)
    return Ht(r, "mantine-shadow", !1);
}
function Cm(r) {
  var e, t, n = "";
  if (typeof r == "string" || typeof r == "number")
    n += r;
  else if (typeof r == "object")
    if (Array.isArray(r))
      for (e = 0; e < r.length; e++)
        r[e] && (t = Cm(r[e])) && (n && (n += " "), n += t);
    else
      for (e in r)
        r[e] && (n && (n += " "), n += e);
  return n;
}
function Pn() {
  for (var r, e, t = 0, n = ""; t < arguments.length; )
    (r = arguments[t++]) && (e = Cm(r)) && (n && (n += " "), n += e);
  return n;
}
const KA = {};
function qA(r) {
  const e = {};
  return r.forEach((t) => {
    Object.entries(t).forEach(([n, o]) => {
      e[n] ? e[n] = Pn(e[n], o) : e[n] = o;
    });
  }), e;
}
function Js({ theme: r, classNames: e, props: t, stylesCtx: n }) {
  const a = (Array.isArray(e) ? e : [e]).map(
    (s) => typeof s == "function" ? s(r, t, n) : s || KA
  );
  return qA(a);
}
function xs({ theme: r, styles: e, props: t, stylesCtx: n }) {
  return (Array.isArray(e) ? e : [e]).reduce((a, s) => typeof s == "function" ? { ...a, ...s(r, t, n) } : { ...a, ...s }, {});
}
function wm() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function ho(r) {
  const e = Ke(r);
  return ge(() => {
    e.current = r;
  }), vs(() => (...t) => {
    var n;
    return (n = e.current) == null ? void 0 : n.call(e, ...t);
  }, []);
}
function Xs(r, e) {
  const t = ho(r), n = Ke(0);
  return ge(() => () => window.clearTimeout(n.current), []), ze(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(t, e);
  }, [t, e]);
}
const Qp = ["mousedown", "touchstart"];
function $A(r, e, t) {
  const n = Ke();
  return ge(() => {
    const o = (a) => {
      const { target: s } = a ?? {};
      if (Array.isArray(t)) {
        const l = (s == null ? void 0 : s.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(s) && s.tagName !== "HTML";
        t.every((f) => !!f && !a.composedPath().includes(f)) && !l && r();
      } else
        n.current && !n.current.contains(s) && r();
    };
    return (e || Qp).forEach((a) => document.addEventListener(a, o)), () => {
      (e || Qp).forEach((a) => document.removeEventListener(a, o));
    };
  }, [n, r, t]), n;
}
function GA(r, e) {
  try {
    return r.addEventListener("change", e), () => r.removeEventListener("change", e);
  } catch {
    return r.addListener(e), () => r.removeListener(e);
  }
}
function zA(r, e) {
  return typeof e == "boolean" ? e : typeof window < "u" && "matchMedia" in window ? window.matchMedia(r).matches : !1;
}
function VA(r, e, { getInitialValueInEffect: t } = {
  getInitialValueInEffect: !0
}) {
  const [n, o] = ye(
    t ? e : zA(r, e)
  ), a = Ke();
  return ge(() => {
    if ("matchMedia" in window)
      return a.current = window.matchMedia(r), o(a.current.matches), GA(a.current, (s) => o(s.matches));
  }, [r]), n;
}
function WA(r, e, t = { leading: !1 }) {
  const [n, o] = ye(r), a = Ke(!1), s = Ke(null), l = Ke(!1), u = () => window.clearTimeout(s.current);
  return ge(() => {
    a.current && (!l.current && t.leading ? (l.current = !0, o(r)) : (u(), s.current = window.setTimeout(() => {
      l.current = !1, o(r);
    }, e)));
  }, [r, t.leading, e]), ge(() => (a.current = !0, u), []), [n, u];
}
const la = typeof document < "u" ? Pu : ge;
function Eo(r, e) {
  const t = Ke(!1);
  ge(
    () => () => {
      t.current = !1;
    },
    []
  ), ge(() => {
    if (t.current)
      return r();
    t.current = !0;
  }, e);
}
function jA({ opened: r, shouldReturnFocus: e = !0 }) {
  const t = Ke(), n = () => {
    var o;
    t.current && "focus" in t.current && typeof t.current.focus == "function" && ((o = t.current) == null || o.focus({ preventScroll: !0 }));
  };
  return Eo(() => {
    let o = -1;
    const a = (s) => {
      s.key === "Tab" && window.clearTimeout(o);
    };
    return document.addEventListener("keydown", a), r ? t.current = document.activeElement : e && (o = window.setTimeout(n, 10)), () => {
      window.clearTimeout(o), document.removeEventListener("keydown", a);
    };
  }, [r, e]), n;
}
function YA(r, e = "body > :not(script)") {
  const t = wm(), n = Array.from(
    document.querySelectorAll(e)
  ).map((o) => {
    var u;
    if ((u = o == null ? void 0 : o.shadowRoot) != null && u.contains(r) || o.contains(r))
      return;
    const a = o.getAttribute("aria-hidden"), s = o.getAttribute("data-hidden"), l = o.getAttribute("data-focus-id");
    return o.setAttribute("data-focus-id", t), a === null || a === "false" ? o.setAttribute("aria-hidden", "true") : !s && !l && o.setAttribute("data-hidden", a), {
      node: o,
      ariaHidden: s || null
    };
  });
  return () => {
    n.forEach((o) => {
      !o || t !== o.node.getAttribute("data-focus-id") || (o.ariaHidden === null ? o.node.removeAttribute("aria-hidden") : o.node.setAttribute("aria-hidden", o.ariaHidden), o.node.removeAttribute("data-focus-id"), o.node.removeAttribute("data-hidden"));
    });
  };
}
const QA = /input|select|textarea|button|object/, Em = "a, input, select, textarea, button, object, [tabindex]";
function JA(r) {
  return r.style.display === "none";
}
function XA(r) {
  if (r.getAttribute("aria-hidden") || r.getAttribute("hidden") || r.getAttribute("type") === "hidden")
    return !1;
  let t = r;
  for (; t && !(t === document.body || t.nodeType === 11); ) {
    if (JA(t))
      return !1;
    t = t.parentNode;
  }
  return !0;
}
function bm(r) {
  let e = r.getAttribute("tabindex");
  return e === null && (e = void 0), parseInt(e, 10);
}
function gu(r) {
  const e = r.nodeName.toLowerCase(), t = !Number.isNaN(bm(r));
  return /* @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition */ (QA.test(e) && !r.disabled || r instanceof HTMLAnchorElement && r.href || t) && XA(r);
}
function _m(r) {
  const e = bm(r);
  return (Number.isNaN(e) || e >= 0) && gu(r);
}
function ZA(r) {
  return Array.from(r.querySelectorAll(Em)).filter(_m);
}
function eR(r, e) {
  const t = ZA(r);
  if (!t.length) {
    e.preventDefault();
    return;
  }
  const n = t[e.shiftKey ? 0 : t.length - 1], o = r.getRootNode();
  let a = n === o.activeElement || r === o.activeElement;
  const s = o.activeElement;
  if (s.tagName === "INPUT" && s.getAttribute("type") === "radio" && (a = t.filter(
    (h) => h.getAttribute("type") === "radio" && h.getAttribute("name") === s.getAttribute("name")
  ).includes(n)), !a)
    return;
  e.preventDefault();
  const u = t[e.shiftKey ? t.length - 1 : 0];
  u && u.focus();
}
function tR(r = !0) {
  const e = Ke(), t = Ke(null), n = (a) => {
    let s = a.querySelector("[data-autofocus]");
    if (!s) {
      const l = Array.from(a.querySelectorAll(Em));
      s = l.find(_m) || l.find(gu) || null, !s && gu(a) && (s = a);
    }
    s && s.focus({ preventScroll: !0 });
  }, o = ze(
    (a) => {
      if (r) {
        if (a === null) {
          t.current && (t.current(), t.current = null);
          return;
        }
        t.current = YA(a), e.current !== a && (a ? (setTimeout(() => {
          a.getRootNode() && n(a);
        }), e.current = a) : e.current = null);
      }
    },
    [r]
  );
  return ge(() => {
    if (!r)
      return;
    e.current && setTimeout(() => n(e.current));
    const a = (s) => {
      s.key === "Tab" && e.current && eR(e.current, s);
    };
    return document.addEventListener("keydown", a), () => {
      document.removeEventListener("keydown", a), t.current && t.current();
    };
  }, [r]), o;
}
const rR = N["useId".toString()] || (() => {
});
function nR() {
  const r = rR();
  return r ? `mantine-${r.replace(/:/g, "")}` : "";
}
function Ao(r) {
  const e = nR(), [t, n] = ye(e);
  return la(() => {
    n(wm());
  }, []), typeof r == "string" ? r : typeof window > "u" ? e : t;
}
function Sm(r, e) {
  typeof r == "function" ? r(e) : typeof r == "object" && r !== null && "current" in r && (r.current = e);
}
function Tm(...r) {
  return (e) => {
    r.forEach((t) => Sm(t, e));
  };
}
function Mr(...r) {
  return ze(Tm(...r), r);
}
function bo({
  value: r,
  defaultValue: e,
  finalValue: t,
  onChange: n = () => {
  }
}) {
  const [o, a] = ye(
    e !== void 0 ? e : t
  ), s = (l) => {
    a(l), n == null || n(l);
  };
  return r !== void 0 ? [r, n, !0] : [o, s, !1];
}
function Im(r, e) {
  return VA("(prefers-reduced-motion: reduce)", r, e);
}
const Am = Io(null);
function $u() {
  const r = Yn(Am);
  if (!r)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return r;
}
function oR() {
  return $u().cssVariablesResolver;
}
function iR() {
  return $u().classNamesPrefix;
}
function Gu() {
  return $u().getStyleNonce;
}
function aR(r) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(r);
}
function sR(r) {
  let e = r.replace("#", "");
  if (e.length === 3) {
    const s = e.split("");
    e = [
      s[0],
      s[0],
      s[1],
      s[1],
      s[2],
      s[2]
    ].join("");
  }
  const t = parseInt(e, 16), n = t >> 16 & 255, o = t >> 8 & 255, a = t & 255;
  return {
    r: n,
    g: o,
    b: a,
    a: 1
  };
}
function cR(r) {
  const [e, t, n, o] = r.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r: e, g: t, b: n, a: o || 1 };
}
function lR(r) {
  const e = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i, t = r.match(e);
  if (!t)
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  const n = parseInt(t[1], 10), o = parseInt(t[2], 10) / 100, a = parseInt(t[3], 10) / 100, s = t[5] ? parseFloat(t[5]) : void 0, l = (1 - Math.abs(2 * a - 1)) * o, u = n / 60, f = l * (1 - Math.abs(u % 2 - 1)), h = a - l / 2;
  let p, g, v;
  return u >= 0 && u < 1 ? (p = l, g = f, v = 0) : u >= 1 && u < 2 ? (p = f, g = l, v = 0) : u >= 2 && u < 3 ? (p = 0, g = l, v = f) : u >= 3 && u < 4 ? (p = 0, g = f, v = l) : u >= 4 && u < 5 ? (p = f, g = 0, v = l) : (p = l, g = 0, v = f), {
    r: Math.round((p + h) * 255),
    g: Math.round((g + h) * 255),
    b: Math.round((v + h) * 255),
    a: s || 1
  };
}
function Rm(r) {
  return aR(r) ? sR(r) : r.startsWith("rgb") ? cR(r) : r.startsWith("hsl") ? lR(r) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function ls(r, e) {
  if (r.startsWith("var("))
    return r;
  const { r: t, g: n, b: o, a } = Rm(r), s = 1 - e, l = (u) => Math.round(u * s);
  return `rgba(${l(t)}, ${l(n)}, ${l(o)}, ${a})`;
}
function mu(r, e) {
  return typeof r.primaryShade == "number" ? r.primaryShade : e === "dark" ? r.primaryShade.dark : r.primaryShade.light;
}
function Zs({
  color: r,
  theme: e,
  colorScheme: t
}) {
  if (typeof r != "string")
    throw new Error(`[@mantine/core] Failed to parse color. Instead got ${typeof r}`);
  if (r === "white" || r === "black")
    return {
      color: r,
      value: r === "white" ? e.white : e.black,
      shade: void 0,
      isThemeColor: !1,
      variable: `--mantine-color-${r}`
    };
  const [n, o] = r.split("."), a = o ? Number(o) : void 0, s = n in e.colors;
  return s ? {
    color: n,
    value: a !== void 0 ? e.colors[n][a] : e.colors[n][mu(e, t || "light")],
    shade: a,
    isThemeColor: s,
    variable: o ? `--mantine-color-${n}-${a}` : `--mantine-color-${n}-filled`
  } : {
    color: r,
    value: r,
    isThemeColor: s,
    shade: a,
    variable: void 0
  };
}
function Zi(r, e) {
  const t = Zs({ color: r || e.primaryColor, theme: e });
  return t.variable ? `var(${t.variable})` : r;
}
function Jp(r, e) {
  const t = {
    from: (r == null ? void 0 : r.from) || e.defaultGradient.from,
    to: (r == null ? void 0 : r.to) || e.defaultGradient.to,
    deg: (r == null ? void 0 : r.deg) || e.defaultGradient.deg || 0
  }, n = Zi(t.from, e), o = Zi(t.to, e);
  return `linear-gradient(${t.deg}deg, ${n} 0%, ${o} 100%)`;
}
function tr(r, e) {
  if (typeof r != "string" || e > 1 || e < 0)
    return "rgba(0, 0, 0, 1)";
  const { r: t, g: n, b: o } = Rm(r);
  return `rgba(${t}, ${n}, ${o}, ${e})`;
}
const uR = ({
  color: r,
  theme: e,
  variant: t,
  gradient: n
}) => {
  const o = Zs({ color: r, theme: e });
  if (t === "filled")
    return o.isThemeColor ? o.shade === void 0 ? {
      background: `var(--mantine-color-${r}-filled)`,
      hover: `var(--mantine-color-${r}-filled-hover)`,
      color: "var(--mantine-color-white)",
      border: `${$(1)} solid transparent`
    } : {
      background: `var(--mantine-color-${o.color}-${o.shade})`,
      hover: `var(--mantine-color-${o.color}-${o.shade === 9 ? 8 : o.shade + 1})`,
      color: "var(--mantine-color-white)",
      border: `${$(1)} solid transparent`
    } : {
      background: r,
      hover: ls(r, 0.1),
      color: "var(--mantine-color-white)",
      border: `${$(1)} solid transparent`
    };
  if (t === "light") {
    if (o.isThemeColor) {
      if (o.shade === void 0)
        return {
          background: `var(--mantine-color-${r}-light)`,
          hover: `var(--mantine-color-${r}-light-hover)`,
          color: `var(--mantine-color-${r}-light-color)`,
          border: `${$(1)} solid transparent`
        };
      const a = e.colors[o.color][o.shade];
      return {
        background: tr(a, 0.1),
        hover: tr(a, 0.12),
        color: `var(--mantine-color-${o.color}-${Math.min(o.shade, 6)})`,
        border: `${$(1)} solid transparent`
      };
    }
    return {
      background: tr(r, 0.1),
      hover: tr(r, 0.12),
      color: r,
      border: `${$(1)} solid transparent`
    };
  }
  if (t === "outline")
    return o.isThemeColor ? o.shade === void 0 ? {
      background: "transparent",
      hover: `var(--mantine-color-${r}-outline-hover)`,
      color: `var(--mantine-color-${r}-outline)`,
      border: `${$(1)} solid var(--mantine-color-${r}-outline)`
    } : {
      background: "transparent",
      hover: tr(e.colors[o.color][o.shade], 0.05),
      color: `var(--mantine-color-${o.color}-${o.shade})`,
      border: `${$(1)} solid var(--mantine-color-${o.color}-${o.shade})`
    } : {
      background: "transparent",
      hover: tr(r, 0.05),
      color: r,
      border: `${$(1)} solid ${r}`
    };
  if (t === "subtle") {
    if (o.isThemeColor) {
      if (o.shade === void 0)
        return {
          background: "transparent",
          hover: `var(--mantine-color-${r}-light-hover)`,
          color: `var(--mantine-color-${r}-light-color)`,
          border: `${$(1)} solid transparent`
        };
      const a = e.colors[o.color][o.shade];
      return {
        background: "transparent",
        hover: tr(a, 0.12),
        color: `var(--mantine-color-${o.color}-${Math.min(o.shade, 6)})`,
        border: `${$(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: tr(r, 0.12),
      color: r,
      border: `${$(1)} solid transparent`
    };
  }
  return t === "transparent" ? o.isThemeColor ? o.shade === void 0 ? {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${r}-light-color)`,
    border: `${$(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${o.color}-${Math.min(o.shade, 6)})`,
    border: `${$(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: r,
    border: `${$(1)} solid transparent`
  } : t === "white" ? o.isThemeColor ? o.shade === void 0 ? {
    background: "var(--mantine-color-white)",
    hover: ls(e.white, 0.01),
    color: `var(--mantine-color-${r}-filled)`,
    border: `${$(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: ls(e.white, 0.01),
    color: `var(--mantine-color-${o.color}-${o.shade})`,
    border: `${$(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: ls(e.white, 0.01),
    color: r,
    border: `${$(1)} solid transparent`
  } : t === "gradient" ? {
    background: Jp(n, e),
    hover: Jp(n, e),
    color: "var(--mantine-color-white)",
    border: "none"
  } : t === "default" ? {
    background: "var(--mantine-color-default)",
    hover: "var(--mantine-color-default-hover)",
    color: "var(--mantine-color-default-color)",
    border: `${$(1)} solid var(--mantine-color-default-border)`
  } : {};
}, dR = {
  dark: [
    "#C9C9C9",
    "#b8b8b8",
    "#828282",
    "#696969",
    "#424242",
    "#3b3b3b",
    "#2e2e2e",
    "#242424",
    "#1f1f1f",
    "#141414"
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
  ],
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
    "#e7f5ff",
    "#d0ebff",
    "#a5d8ff",
    "#74c0fc",
    "#4dabf7",
    "#339af0",
    "#228be6",
    "#1c7ed6",
    "#1971c2",
    "#1864ab"
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
  ]
}, Xp = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", zu = {
  scale: 1,
  fontSmoothing: !0,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: dR,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: uR,
  fontFamily: Xp,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: !1,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: Xp,
    fontWeight: "700",
    sizes: {
      h1: { fontSize: $(34), lineHeight: "1.3" },
      h2: { fontSize: $(26), lineHeight: "1.35" },
      h3: { fontSize: $(22), lineHeight: "1.4" },
      h4: { fontSize: $(18), lineHeight: "1.45" },
      h5: { fontSize: $(16), lineHeight: "1.5" },
      h6: { fontSize: $(14), lineHeight: "1.5" }
    }
  },
  fontSizes: {
    xs: $(12),
    sm: $(14),
    md: $(16),
    lg: $(18),
    xl: $(20)
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65"
  },
  radius: {
    xs: $(2),
    sm: $(4),
    md: $(8),
    lg: $(16),
    xl: $(32)
  },
  spacing: {
    xs: $(10),
    sm: $(12),
    md: $(16),
    lg: $(20),
    xl: $(32)
  },
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em"
  },
  shadows: {
    xs: `0 ${$(1)} ${$(3)} rgba(0, 0, 0, 0.05), 0 ${$(1)} ${$(2)} rgba(0, 0, 0, 0.1)`,
    sm: `0 ${$(1)} ${$(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${$(10)} ${$(
      15
    )} ${$(-5)}, rgba(0, 0, 0, 0.04) 0 ${$(7)} ${$(7)} ${$(-5)}`,
    md: `0 ${$(1)} ${$(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${$(20)} ${$(
      25
    )} ${$(-5)}, rgba(0, 0, 0, 0.04) 0 ${$(10)} ${$(10)} ${$(-5)}`,
    lg: `0 ${$(1)} ${$(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${$(28)} ${$(
      23
    )} ${$(-7)}, rgba(0, 0, 0, 0.04) 0 ${$(12)} ${$(12)} ${$(-7)}`,
    xl: `0 ${$(1)} ${$(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${$(36)} ${$(
      28
    )} ${$(-7)}, rgba(0, 0, 0, 0.04) 0 ${$(17)} ${$(17)} ${$(-7)}`
  },
  other: {},
  components: {}
};
function Zp(r) {
  return r === "auto" || r === "dark" || r === "light";
}
function fR({
  key: r = "mantine-color-scheme-value"
} = {}) {
  let e;
  return {
    get: (t) => {
      if (typeof window > "u")
        return t;
      try {
        const n = window.localStorage.getItem(r);
        return Zp(n) ? n : t;
      } catch {
        return t;
      }
    },
    set: (t) => {
      try {
        window.localStorage.setItem(r, t);
      } catch (n) {
        console.warn(
          "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
          n
        );
      }
    },
    subscribe: (t) => {
      e = (n) => {
        n.storageArea === window.localStorage && n.key === r && Zp(n.newValue) && t(n.newValue);
      }, window.addEventListener("storage", e);
    },
    unsubscribe: () => {
      window.removeEventListener("storage", e);
    },
    clear: () => {
      window.localStorage.removeItem(r);
    }
  };
}
const hR = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", eg = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function Hl(r) {
  return r < 0 || r > 9 ? !1 : parseInt(r.toString(), 10) === r;
}
function tg(r) {
  if (!(r.primaryColor in r.colors))
    throw new Error(hR);
  if (typeof r.primaryShade == "object" && (!Hl(r.primaryShade.dark) || !Hl(r.primaryShade.light)))
    throw new Error(eg);
  if (typeof r.primaryShade == "number" && !Hl(r.primaryShade))
    throw new Error(eg);
}
function pR(r, e) {
  var n;
  if (!e)
    return tg(r), r;
  const t = Bu(r, e);
  return e.fontFamily && !((n = e.headings) != null && n.fontFamily) && (t.headings.fontFamily = e.fontFamily), tg(t), t;
}
const Vu = Io(null), gR = () => Yn(Vu) || zu;
function Qn() {
  const r = Yn(Vu);
  if (!r)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return r;
}
function km({
  theme: r,
  children: e,
  inherit: t = !0
}) {
  const n = gR(), o = vs(
    () => pR(t ? n : zu, r),
    [r, n, t]
  );
  return /* @__PURE__ */ N.createElement(Vu.Provider, { value: o }, e);
}
km.displayName = "@mantine/core/MantineThemeProvider";
function mR() {
  const r = Qn(), e = Gu(), t = an(r.breakpoints).reduce((n, o) => {
    const a = PA(r.breakpoints[o]);
    return `${n}@media (max-width: ${jp(
      a - 0.1
    )}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${jp(
      a
    )}) {.mantine-hidden-from-${o} {display: none !important;}}`;
  }, "");
  return /* @__PURE__ */ N.createElement(
    "style",
    {
      "data-mantine-styles": "classes",
      nonce: e == null ? void 0 : e(),
      dangerouslySetInnerHTML: { __html: t }
    }
  );
}
function Bl(r) {
  return Object.entries(r).map(([e, t]) => `${e}: ${t};`).join("");
}
function Kl(r, e) {
  return (Array.isArray(r) ? r : [r]).reduce((n, o) => `${o}{${n}}`, e);
}
function vR(r, e) {
  const t = Bl(r.variables), n = t ? Kl(e, t) : "", o = Bl(r.dark), a = o ? Kl(`${e}[data-mantine-color-scheme="dark"]`, o) : "", s = Bl(r.light), l = s ? Kl(`${e}[data-mantine-color-scheme="light"]`, s) : "";
  return `${n}${a}${l}`;
}
function Vo(r, e, t) {
  an(e).forEach(
    (n) => Object.assign(r, { [`--mantine-${t}-${n}`]: e[n] })
  );
}
const Pm = (r) => {
  const e = mu(r, "dark"), t = mu(r, "light"), n = r.defaultRadius in r.radius ? r.radius[r.defaultRadius] : $(r.defaultRadius), o = {
    variables: {
      "--mantine-scale": r.scale.toString(),
      "--mantine-cursor-type": r.cursorType,
      "--mantine-webkit-font-smoothing": r.fontSmoothing ? "antialiased" : "unset",
      "--mantine-color-scheme": "light dark",
      "--mantine-moz-font-smoothing": r.fontSmoothing ? "grayscale" : "unset",
      "--mantine-color-white": r.white,
      "--mantine-color-black": r.black,
      "--mantine-line-height": r.lineHeights.md,
      "--mantine-font-family": r.fontFamily,
      "--mantine-font-family-monospace": r.fontFamilyMonospace,
      "--mantine-font-family-headings": r.headings.fontFamily,
      "--mantine-heading-font-weight": r.headings.fontWeight,
      "--mantine-radius-default": n,
      // Primary colors
      "--mantine-primary-color-filled": `var(--mantine-color-${r.primaryColor}-filled)`,
      "--mantine-primary-color-filled-hover": `var(--mantine-color-${r.primaryColor}-filled-hover)`,
      "--mantine-primary-color-light": `var(--mantine-color-${r.primaryColor}-light)`,
      "--mantine-primary-color-light-hover": `var(--mantine-color-${r.primaryColor}-light-hover)`,
      "--mantine-primary-color-light-color": `var(--mantine-color-${r.primaryColor}-light-color)`
    },
    light: {
      "--mantine-color-bright": "var(--mantine-color-black)",
      "--mantine-color-text": r.black,
      "--mantine-color-body": r.white,
      "--mantine-color-error": "var(--mantine-color-red-6)",
      "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
      "--mantine-color-anchor": `var(--mantine-color-${r.primaryColor}-${t})`,
      "--mantine-color-default": "var(--mantine-color-white)",
      "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
      "--mantine-color-default-color": "var(--mantine-color-black)",
      "--mantine-color-default-border": "var(--mantine-color-gray-4)"
    },
    dark: {
      "--mantine-color-bright": "var(--mantine-color-white)",
      "--mantine-color-text": "var(--mantine-color-dark-0)",
      "--mantine-color-body": "var(--mantine-color-dark-7)",
      "--mantine-color-error": "var(--mantine-color-red-8)",
      "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
      "--mantine-color-anchor": `var(--mantine-color-${r.primaryColor}-4)`,
      "--mantine-color-default": "var(--mantine-color-dark-6)",
      "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
      "--mantine-color-default-color": "var(--mantine-color-white)",
      "--mantine-color-default-border": "var(--mantine-color-dark-4)"
    }
  };
  Vo(o.variables, r.breakpoints, "breakpoint"), Vo(o.variables, r.spacing, "spacing"), Vo(o.variables, r.fontSizes, "font-size"), Vo(o.variables, r.lineHeights, "line-height"), Vo(o.variables, r.shadows, "shadow"), Vo(o.variables, r.radius, "radius"), r.colors[r.primaryColor].forEach((s, l) => {
    o.variables[`--mantine-primary-color-${l}`] = `var(--mantine-color-${r.primaryColor}-${l})`;
  }), an(r.colors).forEach((s) => {
    r.colors[s].forEach((f, h) => {
      o.variables[`--mantine-color-${s}-${h}`] = f;
    });
    const l = `var(--mantine-color-${s}-${t === 9 ? 8 : t + 1})`, u = `var(--mantine-color-${s}-${e === 9 ? 8 : e + 1})`;
    o.light["--mantine-color-dimmed"] = "var(--mantine-color-gray-6)", o.light[`--mantine-color-${s}-text`] = `var(--mantine-color-${s}-filled)`, o.light[`--mantine-color-${s}-filled`] = `var(--mantine-color-${s}-${t})`, o.light[`--mantine-color-${s}-filled-hover`] = l, o.light[`--mantine-color-${s}-light`] = tr(
      r.colors[s][t],
      0.1
    ), o.light[`--mantine-color-${s}-light-hover`] = tr(
      r.colors[s][t],
      0.12
    ), o.light[`--mantine-color-${s}-light-color`] = `var(--mantine-color-${s}-${t})`, o.light[`--mantine-color-${s}-outline`] = `var(--mantine-color-${s}-${t})`, o.light[`--mantine-color-${s}-outline-hover`] = tr(
      r.colors[s][t],
      0.05
    ), o.dark["--mantine-color-dimmed"] = "var(--mantine-color-dark-2)", o.dark[`--mantine-color-${s}-text`] = `var(--mantine-color-${s}-4)`, o.dark[`--mantine-color-${s}-filled`] = `var(--mantine-color-${s}-${e})`, o.dark[`--mantine-color-${s}-filled-hover`] = u, o.dark[`--mantine-color-${s}-light`] = tr(
      r.colors[s][Math.max(0, e - 2)],
      0.15
    ), o.dark[`--mantine-color-${s}-light-hover`] = tr(
      r.colors[s][Math.max(0, e - 2)],
      0.2
    ), o.dark[`--mantine-color-${s}-light-color`] = `var(--mantine-color-${s}-${Math.max(
      e - 5,
      0
    )})`, o.dark[`--mantine-color-${s}-outline`] = `var(--mantine-color-${s}-${Math.max(
      e - 4,
      0
    )})`, o.dark[`--mantine-color-${s}-outline-hover`] = tr(
      r.colors[s][Math.max(e - 4, 0)],
      0.05
    );
  });
  const a = r.headings.sizes;
  return an(a).forEach((s) => {
    o.variables[`--mantine-${s}-font-size`] = a[s].fontSize, o.variables[`--mantine-${s}-line-height`] = a[s].lineHeight, o.variables[`--mantine-${s}-font-weight`] = a[s].fontWeight || r.headings.fontWeight;
  }), o;
};
function yR({ theme: r, generator: e }) {
  const t = Pm(r), n = e == null ? void 0 : e(r);
  return n ? Bu(t, n) : t;
}
const ql = Pm(zu);
function CR(r) {
  const e = {
    variables: {},
    light: {},
    dark: {}
  };
  return an(r.variables).forEach((t) => {
    ql.variables[t] !== r.variables[t] && (e.variables[t] = r.variables[t]);
  }), an(r.light).forEach((t) => {
    ql.light[t] !== r.light[t] && (e.light[t] = r.light[t]);
  }), an(r.dark).forEach((t) => {
    ql.dark[t] !== r.dark[t] && (e.dark[t] = r.dark[t]);
  }), e;
}
function wR(r) {
  return `
  ${r}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${r}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function Nm({ cssVariablesSelector: r }) {
  const e = Qn(), t = Gu(), n = oR(), o = yR({ theme: e, generator: n }), a = r === ":root", s = a ? CR(o) : o, l = vR(s, r);
  return l ? /* @__PURE__ */ N.createElement(
    "style",
    {
      "data-mantine-styles": !0,
      nonce: t == null ? void 0 : t(),
      dangerouslySetInnerHTML: {
        __html: `${l}${a ? "" : wR(r)}`
      }
    }
  ) : null;
}
Nm.displayName = "@mantine/CssVariables";
function ER() {
  const r = console.error;
  console.error = (...e) => {
    e.length > 1 && typeof e[0] == "string" && e[0].toLowerCase().includes("extra attributes from the server") && typeof e[1] == "string" && e[1].toLowerCase().includes("data-mantine-color-scheme") || r(...e);
  };
}
function Di(r, e) {
  var n;
  const t = r !== "auto" ? r : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  (n = e()) == null || n.setAttribute("data-mantine-color-scheme", t);
}
function bR({
  manager: r,
  defaultColorScheme: e,
  getRootElement: t,
  forceColorScheme: n
}) {
  const o = Ke(), [a, s] = ye(() => r.get(e)), l = n || a, u = ze(
    (h) => {
      n || (Di(h, t), s(h), r.set(h));
    },
    [r.set, l, n]
  ), f = ze(() => {
    s(e), Di(e, t), r.clear();
  }, [r.clear, e]);
  return ge(() => (r.subscribe(u), r.unsubscribe), [r.subscribe, r.unsubscribe]), la(() => {
    Di(r.get(e), t);
  }, []), ge(() => {
    var p;
    if (n)
      return Di(n, t), () => {
      };
    o.current = window.matchMedia("(prefers-color-scheme: dark)");
    const h = (g) => {
      a === "auto" && Di(g.matches ? "dark" : "light", t);
    };
    return (p = o.current) == null || p.addEventListener("change", h), () => {
      var g;
      return (g = o.current) == null ? void 0 : g.removeEventListener("change", h);
    };
  }, [a, n]), { colorScheme: l, setColorScheme: u, clearColorScheme: f };
}
function _R({
  respectReducedMotion: r,
  getRootElement: e
}) {
  la(() => {
    var t;
    r && ((t = e()) == null || t.setAttribute("data-respect-reduced-motion", "true"));
  }, [r]);
}
ER();
function Om({
  theme: r,
  children: e,
  getStyleNonce: t,
  withCssVariables: n = !0,
  cssVariablesSelector: o = ":root",
  classNamesPrefix: a = "mantine",
  colorSchemeManager: s = fR(),
  defaultColorScheme: l = "light",
  getRootElement: u = () => document.documentElement,
  cssVariablesResolver: f,
  forceColorScheme: h
}) {
  const { colorScheme: p, setColorScheme: g, clearColorScheme: v } = bR({
    defaultColorScheme: l,
    forceColorScheme: h,
    manager: s,
    getRootElement: u
  });
  return _R({
    respectReducedMotion: (r == null ? void 0 : r.respectReducedMotion) || !1,
    getRootElement: u
  }), /* @__PURE__ */ N.createElement(
    Am.Provider,
    {
      value: {
        colorSchemeManager: s,
        colorScheme: p,
        setColorScheme: g,
        clearColorScheme: v,
        getRootElement: u,
        classNamesPrefix: a,
        getStyleNonce: t,
        cssVariablesResolver: f,
        cssVariablesSelector: o
      }
    },
    /* @__PURE__ */ N.createElement(km, { theme: r }, n && /* @__PURE__ */ N.createElement(Nm, { cssVariablesSelector: o }), /* @__PURE__ */ N.createElement(mR, null), e)
  );
}
Om.displayName = "@mantine/core/MantineProvider";
function Mm({
  classNames: r,
  styles: e,
  props: t,
  stylesCtx: n
}) {
  const o = Qn();
  return {
    resolvedClassNames: Js({
      theme: o,
      classNames: r,
      props: t,
      stylesCtx: n || void 0
    }),
    resolvedStyles: xs({
      theme: o,
      styles: e,
      props: t,
      stylesCtx: n || void 0
    })
  };
}
const SR = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function TR({ theme: r, options: e, unstyled: t }) {
  return Pn(
    (e == null ? void 0 : e.focusable) && !t && (r.focusClassName || SR[r.focusRing]),
    (e == null ? void 0 : e.active) && !t && r.activeClassName
  );
}
function IR({
  selector: r,
  stylesCtx: e,
  options: t,
  props: n,
  theme: o
}) {
  return Js({
    theme: o,
    classNames: t == null ? void 0 : t.classNames,
    props: (t == null ? void 0 : t.props) || n,
    stylesCtx: e
  })[r];
}
function AR({
  selector: r,
  stylesCtx: e,
  theme: t,
  classNames: n,
  props: o
}) {
  return Js({ theme: t, classNames: n, props: o, stylesCtx: e })[r];
}
function RR({ rootSelector: r, selector: e, className: t }) {
  return r === e ? t : void 0;
}
function kR({ selector: r, classes: e, unstyled: t }) {
  return t ? void 0 : e[r];
}
function PR({
  themeName: r,
  classNamesPrefix: e,
  selector: t
}) {
  return r.map((n) => `${e}-${n}-${t}`);
}
function NR({
  themeName: r,
  theme: e,
  selector: t,
  props: n,
  stylesCtx: o
}) {
  return r.map(
    (a) => {
      var s, l;
      return (l = Js({
        theme: e,
        classNames: (s = e.components[a]) == null ? void 0 : s.classNames,
        props: n,
        stylesCtx: o
      })) == null ? void 0 : l[t];
    }
  );
}
function OR({
  options: r,
  classes: e,
  selector: t,
  unstyled: n
}) {
  return r != null && r.variant && !n ? e[`${t}--${r.variant}`] : void 0;
}
function MR({
  theme: r,
  options: e,
  themeName: t,
  selector: n,
  classNamesPrefix: o,
  classNames: a,
  classes: s,
  unstyled: l,
  className: u,
  rootSelector: f,
  props: h,
  stylesCtx: p
}) {
  return Pn(
    TR({ theme: r, options: e, unstyled: l }),
    NR({ theme: r, themeName: t, selector: n, props: h, stylesCtx: p }),
    OR({ options: e, classes: s, selector: n, unstyled: l }),
    AR({ selector: n, stylesCtx: p, theme: r, classNames: a, props: h }),
    IR({ selector: n, stylesCtx: p, options: e, props: h, theme: r }),
    RR({ rootSelector: f, selector: n, className: u }),
    kR({ selector: n, classes: s, unstyled: l }),
    PR({ themeName: t, classNamesPrefix: o, selector: n }),
    e == null ? void 0 : e.className
  );
}
function xR({
  theme: r,
  themeName: e,
  props: t,
  stylesCtx: n,
  selector: o
}) {
  return e.map(
    (a) => {
      var s;
      return xs({
        theme: r,
        styles: (s = r.components[a]) == null ? void 0 : s.styles,
        props: t,
        stylesCtx: n
      })[o];
    }
  ).reduce((a, s) => ({ ...a, ...s }), {});
}
function vu({ style: r, theme: e }) {
  return Array.isArray(r) ? [...r].reduce(
    (t, n) => ({ ...t, ...vu({ style: n, theme: e }) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function LR(r) {
  return r.reduce((e, t) => (t && Object.keys(t).forEach((n) => {
    e[n] = { ...e[n], ...Ku(t[n]) };
  }), e), {});
}
function DR({
  vars: r,
  varsResolver: e,
  theme: t,
  props: n,
  stylesCtx: o,
  selector: a,
  themeName: s
}) {
  var l;
  return (l = LR([
    e == null ? void 0 : e(t, n, o),
    ...s.map((u) => {
      var f, h, p;
      return (p = (h = (f = t.components) == null ? void 0 : f[u]) == null ? void 0 : h.vars) == null ? void 0 : p.call(h, t, n, o);
    }),
    r == null ? void 0 : r(t, n, o)
  ])) == null ? void 0 : l[a];
}
function UR({
  theme: r,
  themeName: e,
  selector: t,
  options: n,
  props: o,
  stylesCtx: a,
  rootSelector: s,
  styles: l,
  style: u,
  vars: f,
  varsResolver: h
}) {
  return {
    ...xR({ theme: r, themeName: e, props: o, stylesCtx: a, selector: t }),
    ...xs({ theme: r, styles: l, props: o, stylesCtx: a })[t],
    ...xs({ theme: r, styles: n == null ? void 0 : n.styles, props: (n == null ? void 0 : n.props) || o, stylesCtx: a })[t],
    ...DR({ theme: r, props: o, stylesCtx: a, vars: f, varsResolver: h, selector: t, themeName: e }),
    ...s === t ? vu({ style: u, theme: r }) : null,
    ...vu({ style: n == null ? void 0 : n.style, theme: r })
  };
}
function ut({
  name: r,
  classes: e,
  props: t,
  stylesCtx: n,
  className: o,
  style: a,
  rootSelector: s = "root",
  unstyled: l,
  classNames: u,
  styles: f,
  vars: h,
  varsResolver: p
}) {
  const g = Qn(), v = iR(), C = (Array.isArray(r) ? r : [r]).filter((E) => E);
  return (E, _) => ({
    className: MR({
      theme: g,
      options: _,
      themeName: C,
      selector: E,
      classNamesPrefix: v,
      classNames: u,
      classes: e,
      unstyled: l,
      className: o,
      rootSelector: s,
      props: t,
      stylesCtx: n
    }),
    style: UR({
      theme: g,
      themeName: C,
      selector: E,
      options: _,
      props: t,
      stylesCtx: n,
      rootSelector: s,
      styles: f,
      style: a,
      vars: h,
      varsResolver: p
    })
  });
}
function Ce(r, e, t) {
  var s;
  const n = Qn(), o = (s = n.components[r]) == null ? void 0 : s.defaultProps, a = typeof o == "function" ? o(n) : o;
  return { ...e, ...a, ...Ku(t) };
}
function rg(r) {
  return an(r).reduce(
    (e, t) => r[t] !== void 0 ? `${e}${RA(t)}:${r[t]};` : e,
    ""
  ).trim();
}
function FR({ selector: r, styles: e, media: t }) {
  const n = e ? rg(e) : "", o = Array.isArray(t) ? t.map((a) => `@media${a.query}{${r}{${rg(a.styles)}}}`) : [];
  return `${n ? `${r}{${n}}` : ""}${o.join("")}`.trim();
}
function HR({ selector: r, styles: e, media: t }) {
  const n = Gu();
  return /* @__PURE__ */ N.createElement(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: n == null ? void 0 : n(),
      dangerouslySetInnerHTML: { __html: FR({ selector: r, styles: e, media: t }) }
    }
  );
}
function ec(r) {
  const {
    m: e,
    mx: t,
    my: n,
    mt: o,
    mb: a,
    ml: s,
    mr: l,
    p: u,
    px: f,
    py: h,
    pt: p,
    pb: g,
    pl: v,
    pr: C,
    bg: E,
    c: _,
    opacity: I,
    ff: A,
    fz: S,
    fw: R,
    lts: P,
    ta: L,
    lh: q,
    fs: U,
    tt: J,
    td: Y,
    w: te,
    miw: Z,
    maw: fe,
    h: ne,
    mih: we,
    mah: Q,
    bgsz: ae,
    bgp: oe,
    bgr: Pe,
    bga: Qe,
    pos: ot,
    top: dt,
    left: Qr,
    bottom: un,
    right: jt,
    inset: ir,
    display: dn,
    hiddenFrom: ar,
    visibleFrom: Ur,
    lightHidden: fn,
    darkHidden: Kt,
    ...wr
  } = r;
  return { styleProps: Ku({
    m: e,
    mx: t,
    my: n,
    mt: o,
    mb: a,
    ml: s,
    mr: l,
    p: u,
    px: f,
    py: h,
    pt: p,
    pb: g,
    pl: v,
    pr: C,
    bg: E,
    c: _,
    opacity: I,
    ff: A,
    fz: S,
    fw: R,
    lts: P,
    ta: L,
    lh: q,
    fs: U,
    tt: J,
    td: Y,
    w: te,
    miw: Z,
    maw: fe,
    h: ne,
    mih: we,
    mah: Q,
    bgsz: ae,
    bgp: oe,
    bgr: Pe,
    bga: Qe,
    pos: ot,
    top: dt,
    left: Qr,
    bottom: un,
    right: jt,
    inset: ir,
    display: dn,
    hiddenFrom: ar,
    visibleFrom: Ur,
    lightHidden: fn,
    darkHidden: Kt
  }), rest: wr };
}
const BR = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  mx: { type: "spacing", property: ["marginRight", "marginLeft"] },
  my: { type: "spacing", property: ["marginTop", "marginBottom"] },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  px: { type: "spacing", property: ["paddingRight", "paddingLeft"] },
  py: { type: "spacing", property: ["paddingTop", "paddingBottom"] },
  bg: { type: "color", property: "background" },
  c: { type: "color", property: "color" },
  opacity: { type: "identity", property: "opacity" },
  ff: { type: "identity", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "identity", property: "fontWeight" },
  lts: { type: "size", property: "letterSpacing" },
  ta: { type: "identity", property: "textAlign" },
  lh: { type: "lineHeight", property: "lineHeight" },
  fs: { type: "identity", property: "fontStyle" },
  tt: { type: "identity", property: "textTransform" },
  td: { type: "identity", property: "textDecoration" },
  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },
  bgsz: { type: "size", property: "backgroundSize" },
  bgp: { type: "identity", property: "backgroundPosition" },
  bgr: { type: "identity", property: "backgroundRepeat" },
  bga: { type: "identity", property: "backgroundAttachment" },
  pos: { type: "identity", property: "position" },
  top: { type: "identity", property: "top" },
  left: { type: "size", property: "left" },
  bottom: { type: "size", property: "bottom" },
  right: { type: "size", property: "right" },
  inset: { type: "size", property: "inset" },
  display: { type: "identity", property: "display" }
};
function KR(r, e) {
  const t = Zs({ color: r, theme: e });
  return t.color === "dimmed" ? "var(--mantine-color-dimmed)" : t.color === "bright" ? "var(--mantine-color-bright)" : t.isThemeColor && t.shade === void 0 ? `var(--mantine-color-${t.color}-text)` : t.variable ? `var(${t.variable})` : t.color;
}
function qR(r, e) {
  return typeof r == "string" && r in e.fontSizes ? `var(--mantine-font-size-${r})` : typeof r == "number" || typeof r == "string" ? $(r) : r;
}
function $R(r) {
  return r;
}
function GR(r, e) {
  return typeof r == "string" && r in e.lineHeights ? `var(--mantine-line-height-${r})` : r;
}
function zR(r) {
  return typeof r == "number" ? $(r) : r;
}
function VR(r, e) {
  if (typeof r == "number")
    return $(r);
  if (typeof r == "string") {
    const t = r.replace("-", "");
    if (!(t in e.spacing))
      return $(r);
    const n = `--mantine-spacing-${t}`;
    return r.startsWith("-") ? `calc(var(${n}) * -1)` : `var(${n})`;
  }
  return r;
}
const $l = {
  color: KR,
  fontSize: qR,
  spacing: VR,
  identity: $R,
  size: zR,
  lineHeight: GR
};
function ng(r) {
  return r.replace("(min-width: ", "").replace("em)", "");
}
function WR({
  media: r,
  ...e
}) {
  const n = Object.keys(r).sort((o, a) => Number(ng(o)) - Number(ng(a))).map((o) => ({ query: o, styles: r[o] }));
  return { ...e, media: n };
}
function jR(r) {
  if (typeof r != "object" || r === null)
    return !1;
  const e = Object.keys(r);
  return !(e.length === 1 && e[0] === "base");
}
function YR(r) {
  return typeof r == "object" && r !== null ? "base" in r ? r.base : void 0 : r;
}
function QR(r) {
  return typeof r == "object" && r !== null ? an(r).filter((e) => e !== "base") : [];
}
function JR(r, e) {
  return typeof r == "object" && r !== null && e in r ? r[e] : r;
}
function XR({
  styleProps: r,
  data: e,
  theme: t
}) {
  return WR(
    an(r).reduce(
      (n, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom")
          return n;
        const a = e[o], s = Array.isArray(a.property) ? a.property : [a.property], l = YR(r[o]);
        if (!jR(r[o]))
          return s.forEach((f) => {
            n.inlineStyles[f] = $l[a.type](l, t);
          }), n;
        n.hasResponsiveStyles = !0;
        const u = QR(r[o]);
        return s.forEach((f) => {
          l && (n.styles[f] = $l[a.type](l, t)), u.forEach((h) => {
            const p = `(min-width: ${t.breakpoints[h]})`;
            n.media[p] = {
              ...n.media[p],
              [f]: $l[a.type](
                JR(r[o], h),
                t
              )
            };
          });
        }), n;
      },
      {
        hasResponsiveStyles: !1,
        styles: {},
        inlineStyles: {},
        media: {}
      }
    )
  );
}
function ZR() {
  return `__m__-${Vg().replace(/:/g, "")}`;
}
function xm(r, e) {
  return Array.isArray(r) ? [...r].reduce(
    (t, n) => ({ ...t, ...xm(n, e) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function Lm(r) {
  return r.startsWith("data-") ? r : `data-${r}`;
}
function ek(r) {
  return Object.keys(r).reduce((e, t) => {
    const n = r[t];
    return n === void 0 || n === "" || n === !1 || n === null || (e[Lm(t)] = r[t]), e;
  }, {});
}
function Dm(r) {
  return r ? typeof r == "string" ? { [Lm(r)]: !0 } : Array.isArray(r) ? [...r].reduce(
    (e, t) => ({ ...e, ...Dm(t) }),
    {}
  ) : ek(r) : null;
}
function yu(r, e) {
  return Array.isArray(r) ? [...r].reduce(
    (t, n) => ({ ...t, ...yu(n, e) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function tk({
  theme: r,
  style: e,
  vars: t,
  styleProps: n
}) {
  const o = yu(e, r), a = yu(t, r);
  return { ...o, ...a, ...n };
}
const Um = lt(
  ({
    component: r,
    style: e,
    __vars: t,
    className: n,
    variant: o,
    mod: a,
    size: s,
    hiddenFrom: l,
    visibleFrom: u,
    lightHidden: f,
    darkHidden: h,
    renderRoot: p,
    ...g
  }, v) => {
    const C = Qn(), E = r || "div", { styleProps: _, rest: I } = ec(g), A = ZR(), S = XR({
      styleProps: _,
      theme: C,
      data: BR
    }), R = {
      ref: v,
      style: tk({
        theme: C,
        style: e,
        vars: t,
        styleProps: S.inlineStyles
      }),
      className: Pn(n, {
        [A]: S.hasResponsiveStyles,
        "mantine-light-hidden": f,
        "mantine-dark-hidden": h,
        [`mantine-hidden-from-${l}`]: l,
        [`mantine-visible-from-${u}`]: u
      }),
      "data-variant": o,
      "data-size": ym(s) ? void 0 : s || void 0,
      ...Dm(a),
      ...I
    };
    return /* @__PURE__ */ N.createElement(N.Fragment, null, S.hasResponsiveStyles && /* @__PURE__ */ N.createElement(
      HR,
      {
        selector: `.${A}`,
        styles: S.styles,
        media: S.media
      }
    ), typeof p == "function" ? p(R) : /* @__PURE__ */ N.createElement(E, { ...R }));
  }
);
Um.displayName = "@mantine/core/Box";
const ke = Um;
function Fm(r) {
  return r;
}
function Ue(r) {
  const e = lt(r);
  return e.extend = Fm, e;
}
function ua(r) {
  const e = lt(r);
  return e.extend = Fm, e;
}
const rk = Io({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function Wu() {
  return Yn(rk);
}
function nk(r) {
  if (!r || typeof r == "string")
    return 0;
  const e = r / 36;
  return Math.round((4 + 15 * e ** 0.25 + e / 5) * 10);
}
function Gl(r) {
  return r != null && r.current ? r.current.scrollHeight : "auto";
}
const Ui = typeof window < "u" && window.requestAnimationFrame;
function ok({
  transitionDuration: r,
  transitionTimingFunction: e = "ease",
  onTransitionEnd: t = () => {
  },
  opened: n
}) {
  const o = Ke(null), a = 0, s = {
    display: "none",
    height: 0,
    overflow: "hidden"
  }, [l, u] = ye(n ? {} : s), f = (C) => {
    c0(() => u(C));
  }, h = (C) => {
    f((E) => ({ ...E, ...C }));
  };
  function p(C) {
    return {
      transition: `height ${r || nk(C)}ms ${e}`
    };
  }
  Eo(() => {
    typeof Ui == "function" && Ui(n ? () => {
      h({ willChange: "height", display: "block", overflow: "hidden" }), Ui(() => {
        const C = Gl(o);
        h({ ...p(C), height: C });
      });
    } : () => {
      const C = Gl(o);
      h({ ...p(C), willChange: "height", height: C }), Ui(() => h({ height: a, overflow: "hidden" }));
    });
  }, [n]);
  const g = (C) => {
    if (!(C.target !== o.current || C.propertyName !== "height"))
      if (n) {
        const E = Gl(o);
        E === l.height ? f({}) : h({ height: E }), t();
      } else
        l.height === a && (f(s), t());
  };
  function v({ style: C = {}, refKey: E = "ref", ..._ } = {}) {
    const I = _[E];
    return {
      "aria-hidden": !n,
      ..._,
      [E]: Tm(o, I),
      onTransitionEnd: g,
      style: { boxSizing: "border-box", ...C, ...l }
    };
  }
  return v;
}
const ik = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: !0
}, Hm = Ue((r, e) => {
  const {
    children: t,
    in: n,
    transitionDuration: o,
    transitionTimingFunction: a,
    style: s,
    onTransitionEnd: l,
    animateOpacity: u,
    ...f
  } = Ce("Collapse", ik, r), h = Qn(), p = Im(), v = (h.respectReducedMotion ? p : !1) ? 0 : o, C = ok({
    opened: n,
    transitionDuration: v,
    transitionTimingFunction: a,
    onTransitionEnd: l
  });
  return v === 0 ? n ? /* @__PURE__ */ N.createElement(ke, { ...f }, t) : null : /* @__PURE__ */ N.createElement(ke, { ...C({ style: xm(s, h), ref: e, ...f }) }, /* @__PURE__ */ N.createElement(
    "div",
    {
      style: {
        opacity: n || !u ? 1 : 0,
        transition: u ? `opacity ${v}ms ${a}` : "none"
      }
    },
    t
  ));
});
Hm.displayName = "@mantine/core/Collapse";
const [ak, xr] = di(
  "ScrollArea.Root component was not found in tree"
);
function ai(r, e) {
  const t = ho(e);
  la(() => {
    let n = 0;
    if (r) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(n), n = window.requestAnimationFrame(t);
      });
      return o.observe(r), () => {
        window.cancelAnimationFrame(n), o.unobserve(r);
      };
    }
  }, [r, t]);
}
const sk = N.forwardRef((r, e) => {
  const { style: t, ...n } = r, o = xr(), [a, s] = N.useState(0), [l, u] = N.useState(0), f = !!(a && l);
  return ai(o.scrollbarX, () => {
    var p;
    const h = ((p = o.scrollbarX) == null ? void 0 : p.offsetHeight) || 0;
    o.onCornerHeightChange(h), u(h);
  }), ai(o.scrollbarY, () => {
    var p;
    const h = ((p = o.scrollbarY) == null ? void 0 : p.offsetWidth) || 0;
    o.onCornerWidthChange(h), s(h);
  }), f ? /* @__PURE__ */ N.createElement("div", { ...n, ref: e, style: { ...t, width: a, height: l } }) : null;
}), ck = N.forwardRef(
  (r, e) => {
    const t = xr(), n = !!(t.scrollbarX && t.scrollbarY);
    return t.type !== "scroll" && n ? /* @__PURE__ */ N.createElement(sk, { ...r, ref: e }) : null;
  }
), lk = {
  scrollHideDelay: 1e3,
  type: "hover"
}, Bm = lt((r, e) => {
  const t = Ce("ScrollAreaRoot", lk, r), { type: n, scrollHideDelay: o, scrollbars: a, ...s } = t, [l, u] = ye(null), [f, h] = ye(null), [p, g] = ye(null), [v, C] = ye(null), [E, _] = ye(null), [I, A] = ye(0), [S, R] = ye(0), [P, L] = ye(!1), [q, U] = ye(!1), J = Mr(e, (Y) => u(Y));
  return /* @__PURE__ */ N.createElement(
    ak,
    {
      value: {
        type: n,
        scrollHideDelay: o,
        scrollArea: l,
        viewport: f,
        onViewportChange: h,
        content: p,
        onContentChange: g,
        scrollbarX: v,
        onScrollbarXChange: C,
        scrollbarXEnabled: P,
        onScrollbarXEnabledChange: L,
        scrollbarY: E,
        onScrollbarYChange: _,
        scrollbarYEnabled: q,
        onScrollbarYEnabledChange: U,
        onCornerWidthChange: A,
        onCornerHeightChange: R
      }
    },
    /* @__PURE__ */ N.createElement(
      ke,
      {
        ...s,
        ref: J,
        __vars: {
          "--sa-corner-width": a !== "xy" ? "0px" : `${I}px`,
          "--sa-corner-height": a !== "xy" ? "0px" : `${S}px`
        }
      }
    )
  );
});
Bm.displayName = "@mantine/core/ScrollAreaRoot";
function Km(r, e) {
  const t = r / e;
  return Number.isNaN(t) ? 0 : t;
}
function tc(r) {
  const e = Km(r.viewport, r.content), t = r.scrollbar.paddingStart + r.scrollbar.paddingEnd, n = (r.scrollbar.size - t) * e;
  return Math.max(n, 18);
}
function qm(r, e) {
  return (t) => {
    if (r[0] === r[1] || e[0] === e[1])
      return e[0];
    const n = (e[1] - e[0]) / (r[1] - r[0]);
    return e[0] + n * (t - r[0]);
  };
}
function uk(r, [e, t]) {
  return Math.min(t, Math.max(e, r));
}
function og(r, e, t = "ltr") {
  const n = tc(e), o = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, a = e.scrollbar.size - o, s = e.content - e.viewport, l = a - n, u = t === "ltr" ? [0, s] : [s * -1, 0], f = uk(r, u);
  return qm([0, s], [0, l])(f);
}
function dk(r, e, t, n = "ltr") {
  const o = tc(t), a = o / 2, s = e || a, l = o - s, u = t.scrollbar.paddingStart + s, f = t.scrollbar.size - t.scrollbar.paddingEnd - l, h = t.content - t.viewport, p = n === "ltr" ? [0, h] : [h * -1, 0];
  return qm([u, f], p)(r);
}
function $m(r, e) {
  return r > 0 && r < e;
}
function Ls(r) {
  return r ? parseInt(r, 10) : 0;
}
function yo(r, e, { checkForDefaultPrevented: t = !0 } = {}) {
  return (n) => {
    r == null || r(n), (t === !1 || !n.defaultPrevented) && (e == null || e(n));
  };
}
const [fk, Gm] = di(
  "ScrollAreaScrollbar was not found in tree"
), zm = lt((r, e) => {
  const {
    sizes: t,
    hasThumb: n,
    onThumbChange: o,
    onThumbPointerUp: a,
    onThumbPointerDown: s,
    onThumbPositionChange: l,
    onDragScroll: u,
    onWheelScroll: f,
    onResize: h,
    ...p
  } = r, g = xr(), [v, C] = N.useState(null), E = Mr(e, (U) => C(U)), _ = N.useRef(null), I = N.useRef(""), { viewport: A } = g, S = t.content - t.viewport, R = ho(f), P = ho(l), L = Xs(h, 10), q = (U) => {
    if (_.current) {
      const J = U.clientX - _.current.left, Y = U.clientY - _.current.top;
      u({ x: J, y: Y });
    }
  };
  return ge(() => {
    const U = (J) => {
      const Y = J.target;
      (v == null ? void 0 : v.contains(Y)) && R(J, S);
    };
    return document.addEventListener("wheel", U, { passive: !1 }), () => document.removeEventListener("wheel", U, { passive: !1 });
  }, [A, v, S, R]), ge(P, [t, P]), ai(v, L), ai(g.content, L), /* @__PURE__ */ N.createElement(
    fk,
    {
      value: {
        scrollbar: v,
        hasThumb: n,
        onThumbChange: ho(o),
        onThumbPointerUp: ho(a),
        onThumbPositionChange: P,
        onThumbPointerDown: ho(s)
      }
    },
    /* @__PURE__ */ N.createElement(
      "div",
      {
        ...p,
        ref: E,
        style: { position: "absolute", ...p.style },
        onPointerDown: yo(r.onPointerDown, (U) => {
          U.button === 0 && (U.target.setPointerCapture(U.pointerId), _.current = v.getBoundingClientRect(), I.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", q(U));
        }),
        onPointerMove: yo(r.onPointerMove, q),
        onPointerUp: yo(r.onPointerUp, (U) => {
          const J = U.target;
          J.hasPointerCapture(U.pointerId) && J.releasePointerCapture(U.pointerId), document.body.style.webkitUserSelect = I.current, _.current = null;
        })
      }
    )
  );
}), hk = lt(
  (r, e) => {
    const { sizes: t, onSizesChange: n, style: o, ...a } = r, s = xr(), [l, u] = ye(), f = Ke(null), h = Mr(e, f, s.onScrollbarXChange);
    return ge(() => {
      f.current && u(getComputedStyle(f.current));
    }, [f]), /* @__PURE__ */ N.createElement(
      zm,
      {
        "data-orientation": "horizontal",
        ...a,
        ref: h,
        sizes: t,
        style: {
          ...o,
          "--sa-thumb-width": `${tc(t)}px`
        },
        onThumbPointerDown: (p) => r.onThumbPointerDown(p.x),
        onDragScroll: (p) => r.onDragScroll(p.x),
        onWheelScroll: (p, g) => {
          if (s.viewport) {
            const v = s.viewport.scrollLeft + p.deltaX;
            r.onWheelScroll(v), $m(v, g) && p.preventDefault();
          }
        },
        onResize: () => {
          f.current && s.viewport && l && n({
            content: s.viewport.scrollWidth,
            viewport: s.viewport.offsetWidth,
            scrollbar: {
              size: f.current.clientWidth,
              paddingStart: Ls(l.paddingLeft),
              paddingEnd: Ls(l.paddingRight)
            }
          });
        }
      }
    );
  }
), pk = lt(
  (r, e) => {
    const { sizes: t, onSizesChange: n, style: o, ...a } = r, s = xr(), [l, u] = N.useState(), f = Ke(null), h = Mr(e, f, s.onScrollbarYChange);
    return ge(() => {
      f.current && u(getComputedStyle(f.current));
    }, [f]), /* @__PURE__ */ N.createElement(
      zm,
      {
        ...a,
        "data-orientation": "vertical",
        ref: h,
        sizes: t,
        style: {
          "--sa-thumb-height": `${tc(t)}px`,
          ...o
        },
        onThumbPointerDown: (p) => r.onThumbPointerDown(p.y),
        onDragScroll: (p) => r.onDragScroll(p.y),
        onWheelScroll: (p, g) => {
          if (s.viewport) {
            const v = s.viewport.scrollTop + p.deltaY;
            r.onWheelScroll(v), $m(v, g) && p.preventDefault();
          }
        },
        onResize: () => {
          f.current && s.viewport && l && n({
            content: s.viewport.scrollHeight,
            viewport: s.viewport.offsetHeight,
            scrollbar: {
              size: f.current.clientHeight,
              paddingStart: Ls(l.paddingTop),
              paddingEnd: Ls(l.paddingBottom)
            }
          });
        }
      }
    );
  }
), ju = lt((r, e) => {
  const { orientation: t = "vertical", ...n } = r, { dir: o } = Wu(), a = xr(), s = Ke(null), l = Ke(0), [u, f] = ye({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), h = Km(u.viewport, u.content), p = {
    ...n,
    sizes: u,
    onSizesChange: f,
    hasThumb: h > 0 && h < 1,
    onThumbChange: (v) => {
      s.current = v;
    },
    onThumbPointerUp: () => {
      l.current = 0;
    },
    onThumbPointerDown: (v) => {
      l.current = v;
    }
  }, g = (v, C) => dk(v, l.current, u, C);
  return t === "horizontal" ? /* @__PURE__ */ N.createElement(
    hk,
    {
      ...p,
      ref: e,
      onThumbPositionChange: () => {
        if (a.viewport && s.current) {
          const v = a.viewport.scrollLeft, C = og(v, u, o);
          s.current.style.transform = `translate3d(${C}px, 0, 0)`;
        }
      },
      onWheelScroll: (v) => {
        a.viewport && (a.viewport.scrollLeft = v);
      },
      onDragScroll: (v) => {
        a.viewport && (a.viewport.scrollLeft = g(v, o));
      }
    }
  ) : t === "vertical" ? /* @__PURE__ */ N.createElement(
    pk,
    {
      ...p,
      ref: e,
      onThumbPositionChange: () => {
        if (a.viewport && s.current) {
          const v = a.viewport.scrollTop, C = og(v, u);
          s.current.style.transform = `translate3d(0, ${C}px, 0)`;
        }
      },
      onWheelScroll: (v) => {
        a.viewport && (a.viewport.scrollTop = v);
      },
      onDragScroll: (v) => {
        a.viewport && (a.viewport.scrollTop = g(v));
      }
    }
  ) : null;
}), Vm = lt(
  (r, e) => {
    const t = xr(), { forceMount: n, ...o } = r, [a, s] = ye(!1), l = r.orientation === "horizontal", u = Xs(() => {
      if (t.viewport) {
        const f = t.viewport.offsetWidth < t.viewport.scrollWidth, h = t.viewport.offsetHeight < t.viewport.scrollHeight;
        s(l ? f : h);
      }
    }, 10);
    return ai(t.viewport, u), ai(t.content, u), n || a ? /* @__PURE__ */ N.createElement(
      ju,
      {
        "data-state": a ? "visible" : "hidden",
        ...o,
        ref: e
      }
    ) : null;
  }
), gk = lt(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = xr(), [a, s] = ye(!1);
    return ge(() => {
      const { scrollArea: l } = o;
      let u = 0;
      if (l) {
        const f = () => {
          window.clearTimeout(u), s(!0);
        }, h = () => {
          u = window.setTimeout(() => s(!1), o.scrollHideDelay);
        };
        return l.addEventListener("pointerenter", f), l.addEventListener("pointerleave", h), () => {
          window.clearTimeout(u), l.removeEventListener("pointerenter", f), l.removeEventListener("pointerleave", h);
        };
      }
    }, [o.scrollArea, o.scrollHideDelay]), t || a ? /* @__PURE__ */ N.createElement(
      Vm,
      {
        "data-state": a ? "visible" : "hidden",
        ...n,
        ref: e
      }
    ) : null;
  }
), mk = lt(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = xr(), a = r.orientation === "horizontal", [s, l] = ye("hidden"), u = Xs(() => l("idle"), 100);
    return ge(() => {
      if (s === "idle") {
        const f = window.setTimeout(() => l("hidden"), o.scrollHideDelay);
        return () => window.clearTimeout(f);
      }
    }, [s, o.scrollHideDelay]), ge(() => {
      const { viewport: f } = o, h = a ? "scrollLeft" : "scrollTop";
      if (f) {
        let p = f[h];
        const g = () => {
          const v = f[h];
          p !== v && (l("scrolling"), u()), p = v;
        };
        return f.addEventListener("scroll", g), () => f.removeEventListener("scroll", g);
      }
    }, [o.viewport, a, u]), t || s !== "hidden" ? /* @__PURE__ */ N.createElement(
      ju,
      {
        "data-state": s === "hidden" ? "hidden" : "visible",
        ...n,
        ref: e,
        onPointerEnter: yo(r.onPointerEnter, () => l("interacting")),
        onPointerLeave: yo(r.onPointerLeave, () => l("idle"))
      }
    ) : null;
  }
), ig = N.forwardRef(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = xr(), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, l = r.orientation === "horizontal";
    return N.useEffect(() => (l ? a(!0) : s(!0), () => {
      l ? a(!1) : s(!1);
    }), [l, a, s]), o.type === "hover" ? /* @__PURE__ */ N.createElement(gk, { ...n, ref: e, forceMount: t }) : o.type === "scroll" ? /* @__PURE__ */ N.createElement(mk, { ...n, ref: e, forceMount: t }) : o.type === "auto" ? /* @__PURE__ */ N.createElement(Vm, { ...n, ref: e, forceMount: t }) : o.type === "always" ? /* @__PURE__ */ N.createElement(ju, { ...n, ref: e }) : null;
  }
);
function vk(r, e = () => {
}) {
  let t = { left: r.scrollLeft, top: r.scrollTop }, n = 0;
  return function o() {
    const a = { left: r.scrollLeft, top: r.scrollTop }, s = t.left !== a.left, l = t.top !== a.top;
    (s || l) && e(), t = a, n = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(n);
}
const yk = lt((r, e) => {
  const { style: t, ...n } = r, o = xr(), a = Gm(), { onThumbPositionChange: s } = a, l = Mr(e, (h) => a.onThumbChange(h)), u = Ke(), f = Xs(() => {
    u.current && (u.current(), u.current = void 0);
  }, 100);
  return ge(() => {
    const { viewport: h } = o;
    if (h) {
      const p = () => {
        if (f(), !u.current) {
          const g = vk(h, s);
          u.current = g, s();
        }
      };
      return s(), h.addEventListener("scroll", p), () => h.removeEventListener("scroll", p);
    }
  }, [o.viewport, f, s]), /* @__PURE__ */ N.createElement(
    "div",
    {
      "data-state": a.hasThumb ? "visible" : "hidden",
      ...n,
      ref: l,
      style: {
        width: "var(--sa-thumb-width)",
        height: "var(--sa-thumb-height)",
        ...t
      },
      onPointerDownCapture: yo(r.onPointerDownCapture, (h) => {
        const g = h.target.getBoundingClientRect(), v = h.clientX - g.left, C = h.clientY - g.top;
        a.onThumbPointerDown({ x: v, y: C });
      }),
      onPointerUp: yo(r.onPointerUp, a.onThumbPointerUp)
    }
  );
}), ag = N.forwardRef(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = Gm();
    return t || o.hasThumb ? /* @__PURE__ */ N.createElement(yk, { ref: e, ...n }) : null;
  }
), Wm = lt(
  ({ children: r, style: e, ...t }, n) => {
    const o = xr(), a = Mr(n, o.onViewportChange);
    return /* @__PURE__ */ N.createElement(
      ke,
      {
        ...t,
        ref: a,
        style: {
          overflowX: o.scrollbarXEnabled ? "scroll" : "hidden",
          overflowY: o.scrollbarYEnabled ? "scroll" : "hidden",
          ...e
        }
      },
      /* @__PURE__ */ N.createElement("div", { style: { minWidth: "100%", display: "table" }, ref: o.onContentChange }, r)
    );
  }
);
Wm.displayName = "@mantine/core/ScrollAreaViewport";
var Yu = { root: "m-d57069b5", viewport: "m-c0783ff9", viewportInner: "m-f8f631dd", scrollbar: "m-c44ba933", thumb: "m-d8b5e363", corner: "m-21657268" };
const jm = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
}, Ck = (r, { scrollbarSize: e }) => ({
  root: {
    "--scrollarea-scrollbar-size": $(e)
  }
}), da = Ue((r, e) => {
  const t = Ce("ScrollArea", jm, r), {
    classNames: n,
    className: o,
    style: a,
    styles: s,
    unstyled: l,
    scrollbarSize: u,
    vars: f,
    type: h,
    scrollHideDelay: p,
    viewportProps: g,
    viewportRef: v,
    onScrollPositionChange: C,
    children: E,
    offsetScrollbars: _,
    scrollbars: I,
    ...A
  } = t, [S, R] = ye(!1), P = ut({
    name: "ScrollArea",
    props: t,
    classes: Yu,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: f,
    varsResolver: Ck
  });
  return /* @__PURE__ */ N.createElement(
    Bm,
    {
      type: h === "never" ? "always" : h,
      scrollHideDelay: p,
      ref: e,
      scrollbars: I,
      ...P("root"),
      ...A
    },
    /* @__PURE__ */ N.createElement(
      Wm,
      {
        ...g,
        ...P("viewport"),
        ref: v,
        "data-offset-scrollbars": _ === !0 ? "xy" : _ || void 0,
        "data-scrollbars": I || void 0,
        onScroll: typeof C == "function" ? ({ currentTarget: L }) => C({
          x: L.scrollLeft,
          y: L.scrollTop
        }) : void 0
      },
      E
    ),
    (I === "xy" || I === "x") && /* @__PURE__ */ N.createElement(
      ig,
      {
        ...P("scrollbar"),
        orientation: "horizontal",
        "data-hidden": h === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => R(!0),
        onMouseLeave: () => R(!1)
      },
      /* @__PURE__ */ N.createElement(ag, { ...P("thumb") })
    ),
    (I === "xy" || I === "y") && /* @__PURE__ */ N.createElement(
      ig,
      {
        ...P("scrollbar"),
        orientation: "vertical",
        "data-hidden": h === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => R(!0),
        onMouseLeave: () => R(!1)
      },
      /* @__PURE__ */ N.createElement(ag, { ...P("thumb") })
    ),
    /* @__PURE__ */ N.createElement(
      ck,
      {
        ...P("corner"),
        "data-hovered": S || void 0,
        "data-hidden": h === "never" || void 0
      }
    )
  );
});
da.displayName = "@mantine/core/ScrollArea";
const Qu = Ue((r, e) => {
  const {
    children: t,
    classNames: n,
    styles: o,
    scrollbarSize: a,
    scrollHideDelay: s,
    type: l,
    dir: u,
    offsetScrollbars: f,
    viewportRef: h,
    onScrollPositionChange: p,
    unstyled: g,
    variant: v,
    viewportProps: C,
    scrollbars: E,
    style: _,
    vars: I,
    ...A
  } = Ce("ScrollAreaAutosize", jm, r);
  return /* @__PURE__ */ N.createElement(ke, { ...A, ref: e, style: [{ display: "flex" }, _] }, /* @__PURE__ */ N.createElement(ke, { style: { display: "flex", flexDirection: "column", flex: 1 } }, /* @__PURE__ */ N.createElement(
    da,
    {
      classNames: n,
      styles: o,
      scrollHideDelay: s,
      scrollbarSize: a,
      type: l,
      dir: u,
      offsetScrollbars: f,
      viewportRef: h,
      onScrollPositionChange: p,
      unstyled: g,
      variant: v,
      viewportProps: C,
      vars: I,
      scrollbars: E
    },
    t
  )));
});
da.classes = Yu;
Qu.displayName = "@mantine/core/ScrollAreaAutosize";
Qu.classes = Yu;
da.Autosize = Qu;
var Ym = { root: "m-87cf2631" };
const wk = {
  __staticSelector: "UnstyledButton"
}, fa = ua(
  (r, e) => {
    const t = Ce("UnstyledButton", wk, r), {
      className: n,
      component: o = "button",
      __staticSelector: a,
      unstyled: s,
      classNames: l,
      styles: u,
      style: f,
      ...h
    } = t, p = ut({
      name: a,
      props: t,
      classes: Ym,
      className: n,
      style: f,
      classNames: l,
      styles: u,
      unstyled: s
    });
    return /* @__PURE__ */ N.createElement(
      ke,
      {
        ...p("root", { focusable: !0 }),
        component: o,
        ref: e,
        type: o === "button" ? "button" : void 0,
        ...h
      }
    );
  }
);
fa.classes = Ym;
fa.displayName = "@mantine/core/UnstyledButton";
const jr = Math.min, Ut = Math.max, Ds = Math.round, us = Math.floor, Vn = (r) => ({
  x: r,
  y: r
}), Ek = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, bk = {
  start: "end",
  end: "start"
};
function Cu(r, e, t) {
  return Ut(r, jr(e, t));
}
function An(r, e) {
  return typeof r == "function" ? r(e) : r;
}
function Yr(r) {
  return r.split("-")[0];
}
function hi(r) {
  return r.split("-")[1];
}
function Ju(r) {
  return r === "x" ? "y" : "x";
}
function Xu(r) {
  return r === "y" ? "height" : "width";
}
function Ro(r) {
  return ["top", "bottom"].includes(Yr(r)) ? "y" : "x";
}
function Zu(r) {
  return Ju(Ro(r));
}
function _k(r, e, t) {
  t === void 0 && (t = !1);
  const n = hi(r), o = Zu(r), a = Xu(o);
  let s = o === "x" ? n === (t ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[a] > e.floating[a] && (s = Us(s)), [s, Us(s)];
}
function Sk(r) {
  const e = Us(r);
  return [wu(r), e, wu(e)];
}
function wu(r) {
  return r.replace(/start|end/g, (e) => bk[e]);
}
function Tk(r, e, t) {
  const n = ["left", "right"], o = ["right", "left"], a = ["top", "bottom"], s = ["bottom", "top"];
  switch (r) {
    case "top":
    case "bottom":
      return t ? e ? o : n : e ? n : o;
    case "left":
    case "right":
      return e ? a : s;
    default:
      return [];
  }
}
function Ik(r, e, t, n) {
  const o = hi(r);
  let a = Tk(Yr(r), t === "start", n);
  return o && (a = a.map((s) => s + "-" + o), e && (a = a.concat(a.map(wu)))), a;
}
function Us(r) {
  return r.replace(/left|right|bottom|top/g, (e) => Ek[e]);
}
function Ak(r) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...r
  };
}
function ed(r) {
  return typeof r != "number" ? Ak(r) : {
    top: r,
    right: r,
    bottom: r,
    left: r
  };
}
function si(r) {
  return {
    ...r,
    top: r.y,
    left: r.x,
    right: r.x + r.width,
    bottom: r.y + r.height
  };
}
function sg(r, e, t) {
  let {
    reference: n,
    floating: o
  } = r;
  const a = Ro(e), s = Zu(e), l = Xu(s), u = Yr(e), f = a === "y", h = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, g = n[l] / 2 - o[l] / 2;
  let v;
  switch (u) {
    case "top":
      v = {
        x: h,
        y: n.y - o.height
      };
      break;
    case "bottom":
      v = {
        x: h,
        y: n.y + n.height
      };
      break;
    case "right":
      v = {
        x: n.x + n.width,
        y: p
      };
      break;
    case "left":
      v = {
        x: n.x - o.width,
        y: p
      };
      break;
    default:
      v = {
        x: n.x,
        y: n.y
      };
  }
  switch (hi(e)) {
    case "start":
      v[s] -= g * (t && f ? -1 : 1);
      break;
    case "end":
      v[s] += g * (t && f ? -1 : 1);
      break;
  }
  return v;
}
const Rk = async (r, e, t) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: s
  } = t, l = a.filter(Boolean), u = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let f = await s.getElementRects({
    reference: r,
    floating: e,
    strategy: o
  }), {
    x: h,
    y: p
  } = sg(f, n, u), g = n, v = {}, C = 0;
  for (let E = 0; E < l.length; E++) {
    const {
      name: _,
      fn: I
    } = l[E], {
      x: A,
      y: S,
      data: R,
      reset: P
    } = await I({
      x: h,
      y: p,
      initialPlacement: n,
      placement: g,
      strategy: o,
      middlewareData: v,
      rects: f,
      platform: s,
      elements: {
        reference: r,
        floating: e
      }
    });
    if (h = A ?? h, p = S ?? p, v = {
      ...v,
      [_]: {
        ...v[_],
        ...R
      }
    }, P && C <= 50) {
      C++, typeof P == "object" && (P.placement && (g = P.placement), P.rects && (f = P.rects === !0 ? await s.getElementRects({
        reference: r,
        floating: e,
        strategy: o
      }) : P.rects), {
        x: h,
        y: p
      } = sg(f, g, u)), E = -1;
      continue;
    }
  }
  return {
    x: h,
    y: p,
    placement: g,
    strategy: o,
    middlewareData: v
  };
};
async function td(r, e) {
  var t;
  e === void 0 && (e = {});
  const {
    x: n,
    y: o,
    platform: a,
    rects: s,
    elements: l,
    strategy: u
  } = r, {
    boundary: f = "clippingAncestors",
    rootBoundary: h = "viewport",
    elementContext: p = "floating",
    altBoundary: g = !1,
    padding: v = 0
  } = An(e, r), C = ed(v), _ = l[g ? p === "floating" ? "reference" : "floating" : p], I = si(await a.getClippingRect({
    element: (t = await (a.isElement == null ? void 0 : a.isElement(_))) == null || t ? _ : _.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(l.floating)),
    boundary: f,
    rootBoundary: h,
    strategy: u
  })), A = p === "floating" ? {
    ...s.floating,
    x: n,
    y: o
  } : s.reference, S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l.floating)), R = await (a.isElement == null ? void 0 : a.isElement(S)) ? await (a.getScale == null ? void 0 : a.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = si(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: A,
    offsetParent: S,
    strategy: u
  }) : A);
  return {
    top: (I.top - P.top + C.top) / R.y,
    bottom: (P.bottom - I.bottom + C.bottom) / R.y,
    left: (I.left - P.left + C.left) / R.x,
    right: (P.right - I.right + C.right) / R.x
  };
}
const cg = (r) => ({
  name: "arrow",
  options: r,
  async fn(e) {
    const {
      x: t,
      y: n,
      placement: o,
      rects: a,
      platform: s,
      elements: l,
      middlewareData: u
    } = e, {
      element: f,
      padding: h = 0
    } = An(r, e) || {};
    if (f == null)
      return {};
    const p = ed(h), g = {
      x: t,
      y: n
    }, v = Zu(o), C = Xu(v), E = await s.getDimensions(f), _ = v === "y", I = _ ? "top" : "left", A = _ ? "bottom" : "right", S = _ ? "clientHeight" : "clientWidth", R = a.reference[C] + a.reference[v] - g[v] - a.floating[C], P = g[v] - a.reference[v], L = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
    let q = L ? L[S] : 0;
    (!q || !await (s.isElement == null ? void 0 : s.isElement(L))) && (q = l.floating[S] || a.floating[C]);
    const U = R / 2 - P / 2, J = q / 2 - E[C] / 2 - 1, Y = jr(p[I], J), te = jr(p[A], J), Z = Y, fe = q - E[C] - te, ne = q / 2 - E[C] / 2 + U, we = Cu(Z, ne, fe), Q = !u.arrow && hi(o) != null && ne != we && a.reference[C] / 2 - (ne < Z ? Y : te) - E[C] / 2 < 0, ae = Q ? ne < Z ? ne - Z : ne - fe : 0;
    return {
      [v]: g[v] + ae,
      data: {
        [v]: we,
        centerOffset: ne - we - ae,
        ...Q && {
          alignmentOffset: ae
        }
      },
      reset: Q
    };
  }
}), kk = function(r) {
  return r === void 0 && (r = {}), {
    name: "flip",
    options: r,
    async fn(e) {
      var t, n;
      const {
        placement: o,
        middlewareData: a,
        rects: s,
        initialPlacement: l,
        platform: u,
        elements: f
      } = e, {
        mainAxis: h = !0,
        crossAxis: p = !0,
        fallbackPlacements: g,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: C = "none",
        flipAlignment: E = !0,
        ..._
      } = An(r, e);
      if ((t = a.arrow) != null && t.alignmentOffset)
        return {};
      const I = Yr(o), A = Yr(l) === l, S = await (u.isRTL == null ? void 0 : u.isRTL(f.floating)), R = g || (A || !E ? [Us(l)] : Sk(l));
      !g && C !== "none" && R.push(...Ik(l, E, C, S));
      const P = [l, ...R], L = await td(e, _), q = [];
      let U = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (h && q.push(L[I]), p) {
        const Z = _k(o, s, S);
        q.push(L[Z[0]], L[Z[1]]);
      }
      if (U = [...U, {
        placement: o,
        overflows: q
      }], !q.every((Z) => Z <= 0)) {
        var J, Y;
        const Z = (((J = a.flip) == null ? void 0 : J.index) || 0) + 1, fe = P[Z];
        if (fe)
          return {
            data: {
              index: Z,
              overflows: U
            },
            reset: {
              placement: fe
            }
          };
        let ne = (Y = U.filter((we) => we.overflows[0] <= 0).sort((we, Q) => we.overflows[1] - Q.overflows[1])[0]) == null ? void 0 : Y.placement;
        if (!ne)
          switch (v) {
            case "bestFit": {
              var te;
              const we = (te = U.map((Q) => [Q.placement, Q.overflows.filter((ae) => ae > 0).reduce((ae, oe) => ae + oe, 0)]).sort((Q, ae) => Q[1] - ae[1])[0]) == null ? void 0 : te[0];
              we && (ne = we);
              break;
            }
            case "initialPlacement":
              ne = l;
              break;
          }
        if (o !== ne)
          return {
            reset: {
              placement: ne
            }
          };
      }
      return {};
    }
  };
};
function Qm(r) {
  const e = jr(...r.map((a) => a.left)), t = jr(...r.map((a) => a.top)), n = Ut(...r.map((a) => a.right)), o = Ut(...r.map((a) => a.bottom));
  return {
    x: e,
    y: t,
    width: n - e,
    height: o - t
  };
}
function Pk(r) {
  const e = r.slice().sort((o, a) => o.y - a.y), t = [];
  let n = null;
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    !n || a.y - n.y > n.height / 2 ? t.push([a]) : t[t.length - 1].push(a), n = a;
  }
  return t.map((o) => si(Qm(o)));
}
const Nk = function(r) {
  return r === void 0 && (r = {}), {
    name: "inline",
    options: r,
    async fn(e) {
      const {
        placement: t,
        elements: n,
        rects: o,
        platform: a,
        strategy: s
      } = e, {
        padding: l = 2,
        x: u,
        y: f
      } = An(r, e), h = Array.from(await (a.getClientRects == null ? void 0 : a.getClientRects(n.reference)) || []), p = Pk(h), g = si(Qm(h)), v = ed(l);
      function C() {
        if (p.length === 2 && p[0].left > p[1].right && u != null && f != null)
          return p.find((_) => u > _.left - v.left && u < _.right + v.right && f > _.top - v.top && f < _.bottom + v.bottom) || g;
        if (p.length >= 2) {
          if (Ro(t) === "y") {
            const Y = p[0], te = p[p.length - 1], Z = Yr(t) === "top", fe = Y.top, ne = te.bottom, we = Z ? Y.left : te.left, Q = Z ? Y.right : te.right, ae = Q - we, oe = ne - fe;
            return {
              top: fe,
              bottom: ne,
              left: we,
              right: Q,
              width: ae,
              height: oe,
              x: we,
              y: fe
            };
          }
          const _ = Yr(t) === "left", I = Ut(...p.map((Y) => Y.right)), A = jr(...p.map((Y) => Y.left)), S = p.filter((Y) => _ ? Y.left === A : Y.right === I), R = S[0].top, P = S[S.length - 1].bottom, L = A, q = I, U = q - L, J = P - R;
          return {
            top: R,
            bottom: P,
            left: L,
            right: q,
            width: U,
            height: J,
            x: L,
            y: R
          };
        }
        return g;
      }
      const E = await a.getElementRects({
        reference: {
          getBoundingClientRect: C
        },
        floating: n.floating,
        strategy: s
      });
      return o.reference.x !== E.reference.x || o.reference.y !== E.reference.y || o.reference.width !== E.reference.width || o.reference.height !== E.reference.height ? {
        reset: {
          rects: E
        }
      } : {};
    }
  };
};
async function Ok(r, e) {
  const {
    placement: t,
    platform: n,
    elements: o
  } = r, a = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), s = Yr(t), l = hi(t), u = Ro(t) === "y", f = ["left", "top"].includes(s) ? -1 : 1, h = a && u ? -1 : 1, p = An(e, r);
  let {
    mainAxis: g,
    crossAxis: v,
    alignmentAxis: C
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...p
  };
  return l && typeof C == "number" && (v = l === "end" ? C * -1 : C), u ? {
    x: v * h,
    y: g * f
  } : {
    x: g * f,
    y: v * h
  };
}
const Mk = function(r) {
  return r === void 0 && (r = 0), {
    name: "offset",
    options: r,
    async fn(e) {
      var t, n;
      const {
        x: o,
        y: a,
        placement: s,
        middlewareData: l
      } = e, u = await Ok(e, r);
      return s === ((t = l.offset) == null ? void 0 : t.placement) && (n = l.arrow) != null && n.alignmentOffset ? {} : {
        x: o + u.x,
        y: a + u.y,
        data: {
          ...u,
          placement: s
        }
      };
    }
  };
}, xk = function(r) {
  return r === void 0 && (r = {}), {
    name: "shift",
    options: r,
    async fn(e) {
      const {
        x: t,
        y: n,
        placement: o
      } = e, {
        mainAxis: a = !0,
        crossAxis: s = !1,
        limiter: l = {
          fn: (_) => {
            let {
              x: I,
              y: A
            } = _;
            return {
              x: I,
              y: A
            };
          }
        },
        ...u
      } = An(r, e), f = {
        x: t,
        y: n
      }, h = await td(e, u), p = Ro(Yr(o)), g = Ju(p);
      let v = f[g], C = f[p];
      if (a) {
        const _ = g === "y" ? "top" : "left", I = g === "y" ? "bottom" : "right", A = v + h[_], S = v - h[I];
        v = Cu(A, v, S);
      }
      if (s) {
        const _ = p === "y" ? "top" : "left", I = p === "y" ? "bottom" : "right", A = C + h[_], S = C - h[I];
        C = Cu(A, C, S);
      }
      const E = l.fn({
        ...e,
        [g]: v,
        [p]: C
      });
      return {
        ...E,
        data: {
          x: E.x - t,
          y: E.y - n
        }
      };
    }
  };
}, Lk = function(r) {
  return r === void 0 && (r = {}), {
    options: r,
    fn(e) {
      const {
        x: t,
        y: n,
        placement: o,
        rects: a,
        middlewareData: s
      } = e, {
        offset: l = 0,
        mainAxis: u = !0,
        crossAxis: f = !0
      } = An(r, e), h = {
        x: t,
        y: n
      }, p = Ro(o), g = Ju(p);
      let v = h[g], C = h[p];
      const E = An(l, e), _ = typeof E == "number" ? {
        mainAxis: E,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...E
      };
      if (u) {
        const S = g === "y" ? "height" : "width", R = a.reference[g] - a.floating[S] + _.mainAxis, P = a.reference[g] + a.reference[S] - _.mainAxis;
        v < R ? v = R : v > P && (v = P);
      }
      if (f) {
        var I, A;
        const S = g === "y" ? "width" : "height", R = ["top", "left"].includes(Yr(o)), P = a.reference[p] - a.floating[S] + (R && ((I = s.offset) == null ? void 0 : I[p]) || 0) + (R ? 0 : _.crossAxis), L = a.reference[p] + a.reference[S] + (R ? 0 : ((A = s.offset) == null ? void 0 : A[p]) || 0) - (R ? _.crossAxis : 0);
        C < P ? C = P : C > L && (C = L);
      }
      return {
        [g]: v,
        [p]: C
      };
    }
  };
}, Dk = function(r) {
  return r === void 0 && (r = {}), {
    name: "size",
    options: r,
    async fn(e) {
      const {
        placement: t,
        rects: n,
        platform: o,
        elements: a
      } = e, {
        apply: s = () => {
        },
        ...l
      } = An(r, e), u = await td(e, l), f = Yr(t), h = hi(t), p = Ro(t) === "y", {
        width: g,
        height: v
      } = n.floating;
      let C, E;
      f === "top" || f === "bottom" ? (C = f, E = h === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (E = f, C = h === "end" ? "top" : "bottom");
      const _ = v - u[C], I = g - u[E], A = !e.middlewareData.shift;
      let S = _, R = I;
      if (p) {
        const L = g - u.left - u.right;
        R = h || A ? jr(I, L) : L;
      } else {
        const L = v - u.top - u.bottom;
        S = h || A ? jr(_, L) : L;
      }
      if (A && !h) {
        const L = Ut(u.left, 0), q = Ut(u.right, 0), U = Ut(u.top, 0), J = Ut(u.bottom, 0);
        p ? R = g - 2 * (L !== 0 || q !== 0 ? L + q : Ut(u.left, u.right)) : S = v - 2 * (U !== 0 || J !== 0 ? U + J : Ut(u.top, u.bottom));
      }
      await s({
        ...e,
        availableWidth: R,
        availableHeight: S
      });
      const P = await o.getDimensions(a.floating);
      return g !== P.width || v !== P.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Wn(r) {
  return Jm(r) ? (r.nodeName || "").toLowerCase() : "#document";
}
function vr(r) {
  var e;
  return (r == null || (e = r.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Nn(r) {
  var e;
  return (e = (Jm(r) ? r.ownerDocument : r.document) || window.document) == null ? void 0 : e.documentElement;
}
function Jm(r) {
  return r instanceof Node || r instanceof vr(r).Node;
}
function Rn(r) {
  return r instanceof Element || r instanceof vr(r).Element;
}
function cn(r) {
  return r instanceof HTMLElement || r instanceof vr(r).HTMLElement;
}
function lg(r) {
  return typeof ShadowRoot > "u" ? !1 : r instanceof ShadowRoot || r instanceof vr(r).ShadowRoot;
}
function ha(r) {
  const {
    overflow: e,
    overflowX: t,
    overflowY: n,
    display: o
  } = Or(r);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + t) && !["inline", "contents"].includes(o);
}
function Uk(r) {
  return ["table", "td", "th"].includes(Wn(r));
}
function rd(r) {
  const e = nd(), t = Or(r);
  return t.transform !== "none" || t.perspective !== "none" || (t.containerType ? t.containerType !== "normal" : !1) || !e && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !e && (t.filter ? t.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (t.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (t.contain || "").includes(n));
}
function Fk(r) {
  let e = ci(r);
  for (; cn(e) && !rc(e); ) {
    if (rd(e))
      return e;
    e = ci(e);
  }
  return null;
}
function nd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function rc(r) {
  return ["html", "body", "#document"].includes(Wn(r));
}
function Or(r) {
  return vr(r).getComputedStyle(r);
}
function nc(r) {
  return Rn(r) ? {
    scrollLeft: r.scrollLeft,
    scrollTop: r.scrollTop
  } : {
    scrollLeft: r.pageXOffset,
    scrollTop: r.pageYOffset
  };
}
function ci(r) {
  if (Wn(r) === "html")
    return r;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    r.assignedSlot || // DOM Element detected.
    r.parentNode || // ShadowRoot detected.
    lg(r) && r.host || // Fallback.
    Nn(r)
  );
  return lg(e) ? e.host : e;
}
function Xm(r) {
  const e = ci(r);
  return rc(e) ? r.ownerDocument ? r.ownerDocument.body : r.body : cn(e) && ha(e) ? e : Xm(e);
}
function ea(r, e, t) {
  var n;
  e === void 0 && (e = []), t === void 0 && (t = !0);
  const o = Xm(r), a = o === ((n = r.ownerDocument) == null ? void 0 : n.body), s = vr(o);
  return a ? e.concat(s, s.visualViewport || [], ha(o) ? o : [], s.frameElement && t ? ea(s.frameElement) : []) : e.concat(o, ea(o, [], t));
}
function Zm(r) {
  const e = Or(r);
  let t = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const o = cn(r), a = o ? r.offsetWidth : t, s = o ? r.offsetHeight : n, l = Ds(t) !== a || Ds(n) !== s;
  return l && (t = a, n = s), {
    width: t,
    height: n,
    $: l
  };
}
function od(r) {
  return Rn(r) ? r : r.contextElement;
}
function ni(r) {
  const e = od(r);
  if (!cn(e))
    return Vn(1);
  const t = e.getBoundingClientRect(), {
    width: n,
    height: o,
    $: a
  } = Zm(e);
  let s = (a ? Ds(t.width) : t.width) / n, l = (a ? Ds(t.height) : t.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const Hk = /* @__PURE__ */ Vn(0);
function ev(r) {
  const e = vr(r);
  return !nd() || !e.visualViewport ? Hk : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Bk(r, e, t) {
  return e === void 0 && (e = !1), !t || e && t !== vr(r) ? !1 : e;
}
function _o(r, e, t, n) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const o = r.getBoundingClientRect(), a = od(r);
  let s = Vn(1);
  e && (n ? Rn(n) && (s = ni(n)) : s = ni(r));
  const l = Bk(a, t, n) ? ev(a) : Vn(0);
  let u = (o.left + l.x) / s.x, f = (o.top + l.y) / s.y, h = o.width / s.x, p = o.height / s.y;
  if (a) {
    const g = vr(a), v = n && Rn(n) ? vr(n) : n;
    let C = g.frameElement;
    for (; C && n && v !== g; ) {
      const E = ni(C), _ = C.getBoundingClientRect(), I = Or(C), A = _.left + (C.clientLeft + parseFloat(I.paddingLeft)) * E.x, S = _.top + (C.clientTop + parseFloat(I.paddingTop)) * E.y;
      u *= E.x, f *= E.y, h *= E.x, p *= E.y, u += A, f += S, C = vr(C).frameElement;
    }
  }
  return si({
    width: h,
    height: p,
    x: u,
    y: f
  });
}
function Kk(r) {
  let {
    rect: e,
    offsetParent: t,
    strategy: n
  } = r;
  const o = cn(t), a = Nn(t);
  if (t === a)
    return e;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Vn(1);
  const u = Vn(0);
  if ((o || !o && n !== "fixed") && ((Wn(t) !== "body" || ha(a)) && (s = nc(t)), cn(t))) {
    const f = _o(t);
    l = ni(t), u.x = f.x + t.clientLeft, u.y = f.y + t.clientTop;
  }
  return {
    width: e.width * l.x,
    height: e.height * l.y,
    x: e.x * l.x - s.scrollLeft * l.x + u.x,
    y: e.y * l.y - s.scrollTop * l.y + u.y
  };
}
function qk(r) {
  return Array.from(r.getClientRects());
}
function tv(r) {
  return _o(Nn(r)).left + nc(r).scrollLeft;
}
function $k(r) {
  const e = Nn(r), t = nc(r), n = r.ownerDocument.body, o = Ut(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), a = Ut(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -t.scrollLeft + tv(r);
  const l = -t.scrollTop;
  return Or(n).direction === "rtl" && (s += Ut(e.clientWidth, n.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: l
  };
}
function Gk(r, e) {
  const t = vr(r), n = Nn(r), o = t.visualViewport;
  let a = n.clientWidth, s = n.clientHeight, l = 0, u = 0;
  if (o) {
    a = o.width, s = o.height;
    const f = nd();
    (!f || f && e === "fixed") && (l = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: l,
    y: u
  };
}
function zk(r, e) {
  const t = _o(r, !0, e === "fixed"), n = t.top + r.clientTop, o = t.left + r.clientLeft, a = cn(r) ? ni(r) : Vn(1), s = r.clientWidth * a.x, l = r.clientHeight * a.y, u = o * a.x, f = n * a.y;
  return {
    width: s,
    height: l,
    x: u,
    y: f
  };
}
function ug(r, e, t) {
  let n;
  if (e === "viewport")
    n = Gk(r, t);
  else if (e === "document")
    n = $k(Nn(r));
  else if (Rn(e))
    n = zk(e, t);
  else {
    const o = ev(r);
    n = {
      ...e,
      x: e.x - o.x,
      y: e.y - o.y
    };
  }
  return si(n);
}
function rv(r, e) {
  const t = ci(r);
  return t === e || !Rn(t) || rc(t) ? !1 : Or(t).position === "fixed" || rv(t, e);
}
function Vk(r, e) {
  const t = e.get(r);
  if (t)
    return t;
  let n = ea(r, [], !1).filter((l) => Rn(l) && Wn(l) !== "body"), o = null;
  const a = Or(r).position === "fixed";
  let s = a ? ci(r) : r;
  for (; Rn(s) && !rc(s); ) {
    const l = Or(s), u = rd(s);
    !u && l.position === "fixed" && (o = null), (a ? !u && !o : !u && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ha(s) && !u && rv(r, s)) ? n = n.filter((h) => h !== s) : o = l, s = ci(s);
  }
  return e.set(r, n), n;
}
function Wk(r) {
  let {
    element: e,
    boundary: t,
    rootBoundary: n,
    strategy: o
  } = r;
  const s = [...t === "clippingAncestors" ? Vk(e, this._c) : [].concat(t), n], l = s[0], u = s.reduce((f, h) => {
    const p = ug(e, h, o);
    return f.top = Ut(p.top, f.top), f.right = jr(p.right, f.right), f.bottom = jr(p.bottom, f.bottom), f.left = Ut(p.left, f.left), f;
  }, ug(e, l, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function jk(r) {
  return Zm(r);
}
function Yk(r, e, t) {
  const n = cn(e), o = Nn(e), a = t === "fixed", s = _o(r, !0, a, e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Vn(0);
  if (n || !n && !a)
    if ((Wn(e) !== "body" || ha(o)) && (l = nc(e)), n) {
      const f = _o(e, !0, a, e);
      u.x = f.x + e.clientLeft, u.y = f.y + e.clientTop;
    } else
      o && (u.x = tv(o));
  return {
    x: s.left + l.scrollLeft - u.x,
    y: s.top + l.scrollTop - u.y,
    width: s.width,
    height: s.height
  };
}
function dg(r, e) {
  return !cn(r) || Or(r).position === "fixed" ? null : e ? e(r) : r.offsetParent;
}
function nv(r, e) {
  const t = vr(r);
  if (!cn(r))
    return t;
  let n = dg(r, e);
  for (; n && Uk(n) && Or(n).position === "static"; )
    n = dg(n, e);
  return n && (Wn(n) === "html" || Wn(n) === "body" && Or(n).position === "static" && !rd(n)) ? t : n || Fk(r) || t;
}
const Qk = async function(r) {
  let {
    reference: e,
    floating: t,
    strategy: n
  } = r;
  const o = this.getOffsetParent || nv, a = this.getDimensions;
  return {
    reference: Yk(e, await o(t), n),
    floating: {
      x: 0,
      y: 0,
      ...await a(t)
    }
  };
};
function Jk(r) {
  return Or(r).direction === "rtl";
}
const Xk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Kk,
  getDocumentElement: Nn,
  getClippingRect: Wk,
  getOffsetParent: nv,
  getElementRects: Qk,
  getClientRects: qk,
  getDimensions: jk,
  getScale: ni,
  isElement: Rn,
  isRTL: Jk
};
function Zk(r, e) {
  let t = null, n;
  const o = Nn(r);
  function a() {
    clearTimeout(n), t && t.disconnect(), t = null;
  }
  function s(l, u) {
    l === void 0 && (l = !1), u === void 0 && (u = 1), a();
    const {
      left: f,
      top: h,
      width: p,
      height: g
    } = r.getBoundingClientRect();
    if (l || e(), !p || !g)
      return;
    const v = us(h), C = us(o.clientWidth - (f + p)), E = us(o.clientHeight - (h + g)), _ = us(f), A = {
      rootMargin: -v + "px " + -C + "px " + -E + "px " + -_ + "px",
      threshold: Ut(0, jr(1, u)) || 1
    };
    let S = !0;
    function R(P) {
      const L = P[0].intersectionRatio;
      if (L !== u) {
        if (!S)
          return s();
        L ? s(!1, L) : n = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      S = !1;
    }
    try {
      t = new IntersectionObserver(R, {
        ...A,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(R, A);
    }
    t.observe(r);
  }
  return s(!0), a;
}
function eP(r, e, t, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, f = od(r), h = o || a ? [...f ? ea(f) : [], ...ea(e)] : [];
  h.forEach((I) => {
    o && I.addEventListener("scroll", t, {
      passive: !0
    }), a && I.addEventListener("resize", t);
  });
  const p = f && l ? Zk(f, t) : null;
  let g = -1, v = null;
  s && (v = new ResizeObserver((I) => {
    let [A] = I;
    A && A.target === f && v && (v.unobserve(e), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      v && v.observe(e);
    })), t();
  }), f && !u && v.observe(f), v.observe(e));
  let C, E = u ? _o(r) : null;
  u && _();
  function _() {
    const I = _o(r);
    E && (I.x !== E.x || I.y !== E.y || I.width !== E.width || I.height !== E.height) && t(), E = I, C = requestAnimationFrame(_);
  }
  return t(), () => {
    h.forEach((I) => {
      o && I.removeEventListener("scroll", t), a && I.removeEventListener("resize", t);
    }), p && p(), v && v.disconnect(), v = null, u && cancelAnimationFrame(C);
  };
}
const tP = (r, e, t) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: Xk,
    ...t
  }, a = {
    ...o.platform,
    _c: n
  };
  return Rk(r, e, {
    ...o,
    platform: a
  });
}, rP = (r) => {
  function e(t) {
    return {}.hasOwnProperty.call(t, "current");
  }
  return {
    name: "arrow",
    options: r,
    fn(t) {
      const {
        element: n,
        padding: o
      } = typeof r == "function" ? r(t) : r;
      return n && e(n) ? n.current != null ? cg({
        element: n.current,
        padding: o
      }).fn(t) : {} : n ? cg({
        element: n,
        padding: o
      }).fn(t) : {};
    }
  };
};
var ms = typeof document < "u" ? Pu : ge;
function Fs(r, e) {
  if (r === e)
    return !0;
  if (typeof r != typeof e)
    return !1;
  if (typeof r == "function" && r.toString() === e.toString())
    return !0;
  let t, n, o;
  if (r && e && typeof r == "object") {
    if (Array.isArray(r)) {
      if (t = r.length, t != e.length)
        return !1;
      for (n = t; n-- !== 0; )
        if (!Fs(r[n], e[n]))
          return !1;
      return !0;
    }
    if (o = Object.keys(r), t = o.length, t !== Object.keys(e).length)
      return !1;
    for (n = t; n-- !== 0; )
      if (!{}.hasOwnProperty.call(e, o[n]))
        return !1;
    for (n = t; n-- !== 0; ) {
      const a = o[n];
      if (!(a === "_owner" && r.$$typeof) && !Fs(r[a], e[a]))
        return !1;
    }
    return !0;
  }
  return r !== r && e !== e;
}
function ov(r) {
  return typeof window > "u" ? 1 : (r.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function fg(r, e) {
  const t = ov(r);
  return Math.round(e * t) / t;
}
function hg(r) {
  const e = Le.useRef(r);
  return ms(() => {
    e.current = r;
  }), e;
}
function nP(r) {
  r === void 0 && (r = {});
  const {
    placement: e = "bottom",
    strategy: t = "absolute",
    middleware: n = [],
    platform: o,
    elements: {
      reference: a,
      floating: s
    } = {},
    transform: l = !0,
    whileElementsMounted: u,
    open: f
  } = r, [h, p] = Le.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [g, v] = Le.useState(n);
  Fs(g, n) || v(n);
  const [C, E] = Le.useState(null), [_, I] = Le.useState(null), A = Le.useCallback((Q) => {
    Q != L.current && (L.current = Q, E(Q));
  }, [E]), S = Le.useCallback((Q) => {
    Q !== q.current && (q.current = Q, I(Q));
  }, [I]), R = a || C, P = s || _, L = Le.useRef(null), q = Le.useRef(null), U = Le.useRef(h), J = hg(u), Y = hg(o), te = Le.useCallback(() => {
    if (!L.current || !q.current)
      return;
    const Q = {
      placement: e,
      strategy: t,
      middleware: g
    };
    Y.current && (Q.platform = Y.current), tP(L.current, q.current, Q).then((ae) => {
      const oe = {
        ...ae,
        isPositioned: !0
      };
      Z.current && !Fs(U.current, oe) && (U.current = oe, a0.flushSync(() => {
        p(oe);
      }));
    });
  }, [g, e, t, Y]);
  ms(() => {
    f === !1 && U.current.isPositioned && (U.current.isPositioned = !1, p((Q) => ({
      ...Q,
      isPositioned: !1
    })));
  }, [f]);
  const Z = Le.useRef(!1);
  ms(() => (Z.current = !0, () => {
    Z.current = !1;
  }), []), ms(() => {
    if (R && (L.current = R), P && (q.current = P), R && P) {
      if (J.current)
        return J.current(R, P, te);
      te();
    }
  }, [R, P, te, J]);
  const fe = Le.useMemo(() => ({
    reference: L,
    floating: q,
    setReference: A,
    setFloating: S
  }), [A, S]), ne = Le.useMemo(() => ({
    reference: R,
    floating: P
  }), [R, P]), we = Le.useMemo(() => {
    const Q = {
      position: t,
      left: 0,
      top: 0
    };
    if (!ne.floating)
      return Q;
    const ae = fg(ne.floating, h.x), oe = fg(ne.floating, h.y);
    return l ? {
      ...Q,
      transform: "translate(" + ae + "px, " + oe + "px)",
      ...ov(ne.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: ae,
      top: oe
    };
  }, [t, l, ne.floating, h.x, h.y]);
  return Le.useMemo(() => ({
    ...h,
    update: te,
    refs: fe,
    elements: ne,
    floatingStyles: we
  }), [h, te, fe, ne, we]);
}
var iv = typeof document < "u" ? Pu : ge;
let zl = !1, oP = 0;
const pg = () => "floating-ui-" + oP++;
function iP() {
  const [r, e] = Le.useState(() => zl ? pg() : void 0);
  return iv(() => {
    r == null && e(pg());
  }, []), Le.useEffect(() => {
    zl || (zl = !0);
  }, []), r;
}
const aP = Le[/* @__PURE__ */ "useId".toString()], sP = aP || iP;
function cP() {
  const r = /* @__PURE__ */ new Map();
  return {
    emit(e, t) {
      var n;
      (n = r.get(e)) == null || n.forEach((o) => o(t));
    },
    on(e, t) {
      r.set(e, [...r.get(e) || [], t]);
    },
    off(e, t) {
      var n;
      r.set(e, ((n = r.get(e)) == null ? void 0 : n.filter((o) => o !== t)) || []);
    }
  };
}
const lP = /* @__PURE__ */ Le.createContext(null), uP = () => Le.useContext(lP);
function dP(r) {
  return (r == null ? void 0 : r.ownerDocument) || document;
}
function fP(r) {
  return dP(r).defaultView || window;
}
function ds(r) {
  return r ? r instanceof Element || r instanceof fP(r).Element : !1;
}
const hP = Le[/* @__PURE__ */ "useInsertionEffect".toString()], pP = hP || ((r) => r());
function gP(r) {
  const e = Le.useRef(() => {
  });
  return pP(() => {
    e.current = r;
  }), Le.useCallback(function() {
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return e.current == null ? void 0 : e.current(...n);
  }, []);
}
function mP(r) {
  var e;
  r === void 0 && (r = {});
  const {
    open: t = !1,
    onOpenChange: n,
    nodeId: o
  } = r, [a, s] = Le.useState(null), l = ((e = r.elements) == null ? void 0 : e.reference) || a, u = nP(r), f = uP(), h = gP((R, P) => {
    R && (g.current.openEvent = P), n == null || n(R, P);
  }), p = Le.useRef(null), g = Le.useRef({}), v = Le.useState(() => cP())[0], C = sP(), E = Le.useCallback((R) => {
    const P = ds(R) ? {
      getBoundingClientRect: () => R.getBoundingClientRect(),
      contextElement: R
    } : R;
    u.refs.setReference(P);
  }, [u.refs]), _ = Le.useCallback((R) => {
    (ds(R) || R === null) && (p.current = R, s(R)), (ds(u.refs.reference.current) || u.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    R !== null && !ds(R)) && u.refs.setReference(R);
  }, [u.refs]), I = Le.useMemo(() => ({
    ...u.refs,
    setReference: _,
    setPositionReference: E,
    domReference: p
  }), [u.refs, _, E]), A = Le.useMemo(() => ({
    ...u.elements,
    domReference: l
  }), [u.elements, l]), S = Le.useMemo(() => ({
    ...u,
    refs: I,
    elements: A,
    dataRef: g,
    nodeId: o,
    floatingId: C,
    events: v,
    open: t,
    onOpenChange: h
  }), [u, o, C, v, t, h, I, A]);
  return iv(() => {
    const R = f == null ? void 0 : f.nodesRef.current.find((P) => P.id === o);
    R && (R.context = S);
  }), Le.useMemo(() => ({
    ...u,
    context: S,
    refs: I,
    elements: A
  }), [u, I, A, S]);
}
function vP(r, e) {
  if (r === "rtl" && (e.includes("right") || e.includes("left"))) {
    const [t, n] = e.split("-"), o = t === "right" ? "left" : "right";
    return n === void 0 ? o : `${o}-${n}`;
  }
  return e;
}
function gg(r, e, t, n) {
  return r === "center" || n === "center" ? { top: e } : r === "end" ? { bottom: t } : r === "start" ? { top: t } : {};
}
function mg(r, e, t, n, o) {
  return r === "center" || n === "center" ? { left: e } : r === "end" ? { [o === "ltr" ? "right" : "left"]: t } : r === "start" ? { [o === "ltr" ? "left" : "right"]: t } : {};
}
const yP = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function CP({
  position: r,
  arrowSize: e,
  arrowOffset: t,
  arrowRadius: n,
  arrowPosition: o,
  arrowX: a,
  arrowY: s,
  dir: l
}) {
  const [u, f = "center"] = r.split("-"), h = {
    width: $(e),
    height: $(e),
    transform: "rotate(45deg)",
    position: "absolute",
    [yP[u]]: $(n)
  }, p = $(-e / 2);
  return u === "left" ? {
    ...h,
    ...gg(f, s, t, o),
    right: p,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  } : u === "right" ? {
    ...h,
    ...gg(f, s, t, o),
    left: p,
    borderRightColor: "transparent",
    borderTopColor: "transparent"
  } : u === "top" ? {
    ...h,
    ...mg(f, a, t, o, l),
    bottom: p,
    borderTopColor: "transparent",
    borderLeftColor: "transparent"
  } : u === "bottom" ? {
    ...h,
    ...mg(f, a, t, o, l),
    top: p,
    borderBottomColor: "transparent",
    borderRightColor: "transparent"
  } : {};
}
const av = lt(
  ({
    position: r,
    arrowSize: e,
    arrowOffset: t,
    arrowRadius: n,
    arrowPosition: o,
    visible: a,
    arrowX: s,
    arrowY: l,
    style: u,
    ...f
  }, h) => {
    const { dir: p } = Wu();
    return a ? /* @__PURE__ */ N.createElement(
      "div",
      {
        ...f,
        ref: h,
        style: {
          ...u,
          ...CP({
            position: r,
            arrowSize: e,
            arrowOffset: t,
            arrowRadius: n,
            arrowPosition: o,
            dir: p,
            arrowX: s,
            arrowY: l
          })
        }
      }
    ) : null;
  }
);
av.displayName = "@mantine/core/FloatingArrow";
const [wP, sv] = di(
  "Popover component was not found in the tree"
);
function cv({
  children: r,
  active: e = !0,
  refProp: t = "ref"
}) {
  const n = tR(e), o = Mr(n, r == null ? void 0 : r.ref);
  return ca(r) ? Ws(r, { [t]: o }) : r;
}
cv.displayName = "@mantine/core/FocusTrap";
function EP(r) {
  const e = document.createElement("div");
  return e.setAttribute("data-portal", "true"), typeof r.className == "string" && e.classList.add(...r.className.split(" ").filter(Boolean)), typeof r.style == "object" && Object.assign(e.style, r.style), typeof r.id == "string" && e.setAttribute("id", r.id), e;
}
const bP = {}, lv = lt((r, e) => {
  const { children: t, target: n, ...o } = Ce("Portal", bP, r), [a, s] = ye(!1), l = Ke(null);
  return la(() => (s(!0), l.current = n ? typeof n == "string" ? document.querySelector(n) : n : EP(o), Sm(e, l.current), !n && l.current && document.body.appendChild(l.current), () => {
    !n && l.current && document.body.removeChild(l.current);
  }), [n]), !a || !l.current ? null : l0(/* @__PURE__ */ N.createElement(N.Fragment, null, t), l.current);
});
lv.displayName = "@mantine/core/Portal";
function uv({ withinPortal: r = !0, children: e, ...t }) {
  return r ? /* @__PURE__ */ N.createElement(lv, { ...t }, e) : /* @__PURE__ */ N.createElement(N.Fragment, null, e);
}
uv.displayName = "@mantine/core/OptionalPortal";
const Fi = (r) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${$(r === "bottom" ? 10 : -10)})` },
  transitionProperty: "transform, opacity"
}), fs = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: "opacity"
  },
  scale: {
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: "scale(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-y": {
    in: { opacity: 1, transform: "scaleY(1)" },
    out: { opacity: 0, transform: "scaleY(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-x": {
    in: { opacity: 1, transform: "scaleX(1)" },
    out: { opacity: 0, transform: "scaleX(0)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "skew-up": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(-${$(20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(${$(20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${$(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${$(20)}) rotate(5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-100%)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(100%)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "slide-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(100%)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "slide-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(-100%)" },
    common: { transformOrigin: "right" },
    transitionProperty: "transform, opacity"
  },
  pop: {
    ...Fi("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...Fi("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...Fi("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...Fi("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...Fi("top"),
    common: { transformOrigin: "top right" }
  }
}, vg = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function _P({
  transition: r,
  state: e,
  duration: t,
  timingFunction: n
}) {
  const o = {
    transitionDuration: `${t}ms`,
    transitionTimingFunction: n
  };
  return typeof r == "string" ? r in fs ? {
    transitionProperty: fs[r].transitionProperty,
    ...o,
    ...fs[r].common,
    ...fs[r][vg[e]]
  } : {} : {
    transitionProperty: r.transitionProperty,
    ...o,
    ...r.common,
    ...r[vg[e]]
  };
}
function SP({
  duration: r,
  exitDuration: e,
  timingFunction: t,
  mounted: n,
  onEnter: o,
  onExit: a,
  onEntered: s,
  onExited: l
}) {
  const u = Qn(), f = Im(), h = u.respectReducedMotion ? f : !1, [p, g] = ye(h ? 0 : r), [v, C] = ye(n ? "entered" : "exited"), E = Ke(-1), _ = (I) => {
    const A = I ? o : a, S = I ? s : l;
    C(I ? "pre-entering" : "pre-exiting"), window.clearTimeout(E.current);
    const R = h ? 0 : I ? r : e;
    if (g(R), R === 0)
      typeof A == "function" && A(), typeof S == "function" && S(), C(I ? "entered" : "exited");
    else {
      const P = window.setTimeout(() => {
        typeof A == "function" && A(), C(I ? "entering" : "exiting");
      }, 10);
      E.current = window.setTimeout(() => {
        window.clearTimeout(P), typeof S == "function" && S(), C(I ? "entered" : "exited");
      }, R);
    }
  };
  return Eo(() => {
    _(n);
  }, [n]), ge(() => () => window.clearTimeout(E.current), []), {
    transitionDuration: p,
    transitionStatus: v,
    transitionTimingFunction: t || "ease"
  };
}
function dv({
  keepMounted: r,
  transition: e = "fade",
  duration: t = 250,
  exitDuration: n = t,
  mounted: o,
  children: a,
  timingFunction: s = "ease",
  onExit: l,
  onEntered: u,
  onEnter: f,
  onExited: h
}) {
  const { transitionDuration: p, transitionStatus: g, transitionTimingFunction: v } = SP({
    mounted: o,
    exitDuration: n,
    duration: t,
    timingFunction: s,
    onExit: l,
    onEntered: u,
    onEnter: f,
    onExited: h
  });
  return p === 0 ? o ? /* @__PURE__ */ N.createElement(N.Fragment, null, a({})) : r ? a({ display: "none" }) : null : g === "exited" ? r ? a({ display: "none" }) : null : /* @__PURE__ */ N.createElement(N.Fragment, null, a(
    _P({
      transition: e,
      duration: p,
      state: g,
      timingFunction: v
    })
  ));
}
dv.displayName = "@mantine/core/Transition";
var fv = { dropdown: "m-38a85659", arrow: "m-a31dc6c1" };
const TP = {}, id = Ue((r, e) => {
  var _, I, A, S;
  const t = Ce("PopoverDropdown", TP, r), {
    className: n,
    style: o,
    vars: a,
    children: s,
    onKeyDownCapture: l,
    variant: u,
    classNames: f,
    styles: h,
    ...p
  } = t, g = sv(), v = jA({
    opened: g.opened,
    shouldReturnFocus: g.returnFocus
  }), C = g.withRoles ? {
    "aria-labelledby": g.getTargetId(),
    id: g.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, E = Mr(e, g.floating);
  return g.disabled ? null : /* @__PURE__ */ N.createElement(uv, { ...g.portalProps, withinPortal: g.withinPortal }, /* @__PURE__ */ N.createElement(
    dv,
    {
      mounted: g.opened,
      ...g.transitionProps,
      transition: ((_ = g.transitionProps) == null ? void 0 : _.transition) || "fade",
      duration: ((I = g.transitionProps) == null ? void 0 : I.duration) ?? 150,
      keepMounted: g.keepMounted,
      exitDuration: typeof ((A = g.transitionProps) == null ? void 0 : A.exitDuration) == "number" ? g.transitionProps.exitDuration : (S = g.transitionProps) == null ? void 0 : S.duration
    },
    (R) => /* @__PURE__ */ N.createElement(cv, { active: g.trapFocus }, /* @__PURE__ */ N.createElement(
      ke,
      {
        ...C,
        ...p,
        variant: u,
        ref: E,
        onKeyDownCapture: HA(g.onClose, {
          active: g.closeOnEscape,
          onTrigger: v,
          onKeyDown: l
        }),
        "data-position": g.placement,
        ...g.getStyles("dropdown", {
          className: n,
          props: t,
          classNames: f,
          styles: h,
          style: [
            {
              ...R,
              zIndex: g.zIndex,
              top: g.y ?? 0,
              left: g.x ?? 0,
              width: g.width === "target" ? void 0 : $(g.width)
            },
            o
          ]
        })
      },
      s,
      /* @__PURE__ */ N.createElement(
        av,
        {
          ref: g.arrowRef,
          arrowX: g.arrowX,
          arrowY: g.arrowY,
          visible: g.withArrow,
          position: g.placement,
          arrowSize: g.arrowSize,
          arrowRadius: g.arrowRadius,
          arrowOffset: g.arrowOffset,
          arrowPosition: g.arrowPosition,
          ...g.getStyles("arrow", {
            props: t,
            classNames: f,
            styles: h
          })
        }
      )
    ))
  ));
});
id.classes = fv;
id.displayName = "@mantine/core/PopoverDropdown";
const IP = {
  refProp: "ref",
  popupType: "dialog"
}, hv = Ue((r, e) => {
  const { children: t, refProp: n, popupType: o, ...a } = Ce(
    "PopoverTarget",
    IP,
    r
  );
  if (!ca(t))
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const s = a, l = sv(), u = Mr(l.reference, t.ref, e), f = l.withRoles ? {
    "aria-haspopup": o,
    "aria-expanded": l.opened,
    "aria-controls": l.getDropdownId(),
    id: l.getTargetId()
  } : {};
  return Ws(t, {
    ...s,
    ...f,
    ...l.targetProps,
    className: Pn(l.targetProps.className, s.className, t.props.className),
    [n]: u,
    ...l.controlled ? null : { onClick: l.onToggle }
  });
});
hv.displayName = "@mantine/core/PopoverTarget";
function AP({
  opened: r,
  floating: e,
  position: t,
  positionDependencies: n
}) {
  const [o, a] = ye(0);
  ge(() => {
    if (e.refs.reference.current && e.refs.floating.current)
      return eP(
        e.refs.reference.current,
        e.refs.floating.current,
        e.update
      );
  }, [
    e.refs.reference.current,
    e.refs.floating.current,
    r,
    o,
    t
  ]), Eo(() => {
    e.update();
  }, n), Eo(() => {
    a((s) => s + 1);
  }, [r]);
}
function RP(r, e) {
  var n, o, a, s;
  const t = [Mk(r.offset)];
  return (n = r.middlewares) != null && n.shift && t.push(xk({ limiter: Lk() })), (o = r.middlewares) != null && o.flip && t.push(kk()), (a = r.middlewares) != null && a.inline && t.push(Nk()), t.push(rP({ element: r.arrowRef, padding: r.arrowOffset })), ((s = r.middlewares) != null && s.size || r.width === "target") && t.push(
    Dk({
      apply({ rects: l, availableWidth: u, availableHeight: f }) {
        var g, v;
        const p = ((g = e().refs.floating.current) == null ? void 0 : g.style) ?? {};
        (v = r.middlewares) != null && v.size && Object.assign(p, {
          maxWidth: `${u}px`,
          maxHeight: `${f}px`
        }), r.width === "target" && Object.assign(p, {
          width: `${l.reference.width}px`
        });
      }
    })
  ), t;
}
function kP(r) {
  const [e, t] = bo({
    value: r.opened,
    defaultValue: r.defaultOpened,
    finalValue: !1,
    onChange: r.onChange
  }), n = () => {
    var s;
    e && ((s = r.onClose) == null || s.call(r), t(!1));
  }, o = () => {
    var s, l;
    e ? ((s = r.onClose) == null || s.call(r), t(!1)) : ((l = r.onOpen) == null || l.call(r), t(!0));
  }, a = mP({
    placement: r.position,
    middleware: RP(r, () => a)
  });
  return AP({
    opened: r.opened,
    position: r.position,
    positionDependencies: r.positionDependencies || [],
    floating: a
  }), Eo(() => {
    var s;
    (s = r.onPositionChange) == null || s.call(r, a.placement);
  }, [a.placement]), Eo(() => {
    var s, l;
    r.opened ? (l = r.onOpen) == null || l.call(r) : (s = r.onClose) == null || s.call(r);
  }, [r.opened]), {
    floating: a,
    controlled: typeof r.opened == "boolean",
    opened: e,
    onClose: n,
    onToggle: o
  };
}
const PP = {
  position: "bottom",
  offset: 8,
  positionDependencies: [],
  transitionProps: { transition: "fade", duration: 150 },
  middlewares: { flip: !0, shift: !0, inline: !1 },
  arrowSize: 7,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: "side",
  closeOnClickOutside: !0,
  withinPortal: !0,
  closeOnEscape: !0,
  trapFocus: !1,
  withRoles: !0,
  returnFocus: !1,
  clickOutsideEvents: ["mousedown", "touchstart"],
  zIndex: UA("popover"),
  __staticSelector: "Popover",
  width: "max-content"
}, NP = (r, { radius: e, shadow: t }) => ({
  dropdown: {
    "--popover-radius": e === void 0 ? void 0 : fi(e),
    "--popover-shadow": BA(t)
  }
});
function Jn(r) {
  var On, gt, Ot, Zn, Fr, _t;
  const e = Ce("Popover", PP, r), {
    children: t,
    position: n,
    offset: o,
    onPositionChange: a,
    positionDependencies: s,
    opened: l,
    transitionProps: u,
    width: f,
    middlewares: h,
    withArrow: p,
    arrowSize: g,
    arrowOffset: v,
    arrowRadius: C,
    arrowPosition: E,
    unstyled: _,
    classNames: I,
    styles: A,
    closeOnClickOutside: S,
    withinPortal: R,
    portalProps: P,
    closeOnEscape: L,
    clickOutsideEvents: q,
    trapFocus: U,
    onClose: J,
    onOpen: Y,
    onChange: te,
    zIndex: Z,
    radius: fe,
    shadow: ne,
    id: we,
    defaultOpened: Q,
    __staticSelector: ae,
    withRoles: oe,
    disabled: Pe,
    returnFocus: Qe,
    variant: ot,
    keepMounted: dt,
    vars: Qr,
    ...un
  } = e, jt = ut({
    name: ae,
    props: e,
    classes: fv,
    classNames: I,
    styles: A,
    unstyled: _,
    rootSelector: "dropdown",
    vars: Qr,
    varsResolver: NP
  }), ir = Ke(null), [dn, ar] = ye(null), [Ur, fn] = ye(null), { dir: Kt } = Wu(), wr = Ao(we), Ye = kP({
    middlewares: h,
    width: f,
    position: vP(Kt, n),
    offset: typeof o == "number" ? o + (p ? g / 2 : 0) : o,
    arrowRef: ir,
    arrowOffset: v,
    onPositionChange: a,
    positionDependencies: s,
    opened: l,
    defaultOpened: Q,
    onChange: te,
    onOpen: Y,
    onClose: J
  });
  $A(() => S && Ye.onClose(), q, [
    dn,
    Ur
  ]);
  const Pt = ze(
    (tt) => {
      ar(tt), Ye.floating.refs.setReference(tt);
    },
    [Ye.floating.refs.setReference]
  ), Nt = ze(
    (tt) => {
      fn(tt), Ye.floating.refs.setFloating(tt);
    },
    [Ye.floating.refs.setFloating]
  );
  return /* @__PURE__ */ N.createElement(
    wP,
    {
      value: {
        returnFocus: Qe,
        disabled: Pe,
        controlled: Ye.controlled,
        reference: Pt,
        floating: Nt,
        x: Ye.floating.x,
        y: Ye.floating.y,
        arrowX: (Ot = (gt = (On = Ye.floating) == null ? void 0 : On.middlewareData) == null ? void 0 : gt.arrow) == null ? void 0 : Ot.x,
        arrowY: (_t = (Fr = (Zn = Ye.floating) == null ? void 0 : Zn.middlewareData) == null ? void 0 : Fr.arrow) == null ? void 0 : _t.y,
        opened: Ye.opened,
        arrowRef: ir,
        transitionProps: u,
        width: f,
        withArrow: p,
        arrowSize: g,
        arrowOffset: v,
        arrowRadius: C,
        arrowPosition: E,
        placement: Ye.floating.placement,
        trapFocus: U,
        withinPortal: R,
        portalProps: P,
        zIndex: Z,
        radius: fe,
        shadow: ne,
        closeOnEscape: L,
        onClose: Ye.onClose,
        onToggle: Ye.onToggle,
        getTargetId: () => `${wr}-target`,
        getDropdownId: () => `${wr}-dropdown`,
        withRoles: oe,
        targetProps: un,
        __staticSelector: ae,
        classNames: I,
        styles: A,
        unstyled: _,
        variant: ot,
        keepMounted: dt,
        getStyles: jt
      }
    },
    t
  );
}
Jn.Target = hv;
Jn.Dropdown = id;
Jn.displayName = "@mantine/core/Popover";
Jn.extend = (r) => r;
var Vr = { root: "m-5ae2e3c", barsLoader: "m-7a2bd4cd", bar: "m-870bb79", "bars-loader-animation": "m-5d2b3b9d", dotsLoader: "m-4e3f22d7", dot: "m-870c4af", "loader-dots-animation": "m-aac34a1", ovalLoader: "m-b34414df", "oval-loader-animation": "m-f8e89c4b" };
const OP = lt(({ className: r, ...e }, t) => /* @__PURE__ */ N.createElement(ke, { component: "span", className: Pn(Vr.barsLoader, r), ...e, ref: t }, /* @__PURE__ */ N.createElement("span", { className: Vr.bar }), /* @__PURE__ */ N.createElement("span", { className: Vr.bar }), /* @__PURE__ */ N.createElement("span", { className: Vr.bar }))), MP = lt(({ className: r, ...e }, t) => /* @__PURE__ */ N.createElement(ke, { component: "span", className: Pn(Vr.dotsLoader, r), ...e, ref: t }, /* @__PURE__ */ N.createElement("span", { className: Vr.dot }), /* @__PURE__ */ N.createElement("span", { className: Vr.dot }), /* @__PURE__ */ N.createElement("span", { className: Vr.dot }))), xP = lt(({ className: r, ...e }, t) => /* @__PURE__ */ N.createElement(ke, { component: "span", className: Pn(Vr.ovalLoader, r), ...e, ref: t })), pv = {
  bars: OP,
  oval: xP,
  dots: MP
}, LP = {
  loaders: pv,
  type: "oval"
}, DP = (r, { size: e, color: t }) => ({
  root: {
    "--loader-size": Ht(e, "loader-size"),
    "--loader-color": t ? Zi(t, r) : void 0
  }
}), oc = Ue((r, e) => {
  const t = Ce("Loader", LP, r), {
    size: n,
    color: o,
    type: a,
    vars: s,
    className: l,
    style: u,
    classNames: f,
    styles: h,
    unstyled: p,
    loaders: g,
    variant: v,
    children: C,
    ...E
  } = t, _ = ut({
    name: "Loader",
    props: t,
    classes: Vr,
    className: l,
    style: u,
    classNames: f,
    styles: h,
    unstyled: p,
    vars: s,
    varsResolver: DP
  });
  return C ? /* @__PURE__ */ N.createElement(ke, { ..._("root"), ref: e, ...E }, C) : /* @__PURE__ */ N.createElement(
    ke,
    {
      ..._("root"),
      ref: e,
      component: g[a],
      variant: v,
      size: n,
      ...E
    }
  );
});
oc.defaultLoaders = pv;
oc.classes = Vr;
oc.displayName = "@mantine/core/Loader";
const gv = lt(
  ({ size: r = "var(--cb-icon-size, 70%)", style: e, ...t }, n) => /* @__PURE__ */ N.createElement(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...e, width: r, height: r },
      ref: n,
      ...t
    },
    /* @__PURE__ */ N.createElement(
      "path",
      {
        d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    )
  )
);
gv.displayName = "@mantine/core/CloseIcon";
var mv = { root: "m-86a44da5", "root--subtle": "m-220c80f2" };
const UP = {
  variant: "subtle"
}, FP = (r, { size: e, radius: t, iconSize: n }) => ({
  root: {
    "--cb-size": Ht(e, "cb-size"),
    "--cb-radius": t === void 0 ? void 0 : fi(t),
    "--cb-icon-size": $(n)
  }
}), ad = ua((r, e) => {
  const t = Ce("CloseButton", UP, r), {
    iconSize: n,
    children: o,
    vars: a,
    radius: s,
    className: l,
    classNames: u,
    style: f,
    styles: h,
    unstyled: p,
    "data-disabled": g,
    disabled: v,
    variant: C,
    ...E
  } = t, _ = ut({
    name: "CloseButton",
    props: t,
    className: l,
    style: f,
    classes: mv,
    classNames: u,
    styles: h,
    unstyled: p,
    vars: a,
    varsResolver: FP
  });
  return /* @__PURE__ */ N.createElement(
    fa,
    {
      ref: e,
      ...E,
      unstyled: p,
      variant: C,
      disabled: v,
      mod: { disabled: v || g },
      ..._("root", { variant: C, active: !0 })
    },
    /* @__PURE__ */ N.createElement(gv, null),
    o
  );
});
ad.classes = mv;
ad.displayName = "@mantine/core/CloseButton";
function HP(r) {
  return Xl.toArray(r).filter(Boolean);
}
var vv = { root: "m-4081bf90" };
const BP = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, KP = (r, { grow: e, preventGrowOverflow: t, gap: n, align: o, justify: a, wrap: s }, { childWidth: l }) => ({
  root: {
    "--group-child-width": e && t ? l : void 0,
    "--group-gap": qu(n),
    "--group-align": o,
    "--group-justify": a,
    "--group-wrap": s
  }
}), Hs = Ue((r, e) => {
  const t = Ce("Group", BP, r), {
    classNames: n,
    className: o,
    style: a,
    styles: s,
    unstyled: l,
    children: u,
    gap: f,
    align: h,
    justify: p,
    wrap: g,
    grow: v,
    preventGrowOverflow: C,
    vars: E,
    variant: _,
    __size: I,
    ...A
  } = t, S = HP(u), R = S.length, P = qu(f ?? "md"), q = { childWidth: `calc(${100 / R}% - (${P} - ${P} / ${R}))` }, U = ut({
    name: "Group",
    props: t,
    stylesCtx: q,
    className: o,
    style: a,
    classes: vv,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: E,
    varsResolver: KP
  });
  return /* @__PURE__ */ N.createElement(
    ke,
    {
      ...U("root"),
      ref: e,
      variant: _,
      mod: { grow: v },
      size: I,
      ...A
    },
    S
  );
});
Hs.classes = vv;
Hs.displayName = "@mantine/core/Group";
const [qP, pa] = NA({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var Lr = { wrapper: "m-6c018570", input: "m-8fb7ebe7", section: "m-82577fc2", placeholder: "m-88bacfd0", root: "m-46b77525", label: "m-8fdc1311", required: "m-78a94662", error: "m-8f816625", description: "m-fe47ce59" };
const yg = {}, $P = (r, { size: e }) => ({
  description: {
    "--input-description-size": e === void 0 ? void 0 : `calc(${Nr(e)} - ${$(2)})`
  }
}), ic = Ue((r, e) => {
  const t = Ce("InputDescription", yg, r), {
    classNames: n,
    className: o,
    style: a,
    styles: s,
    unstyled: l,
    vars: u,
    size: f,
    __staticSelector: h,
    __inheritStyles: p = !0,
    variant: g,
    ...v
  } = Ce("InputDescription", yg, t), C = pa(), E = ut({
    name: ["InputWrapper", h],
    props: t,
    classes: Lr,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    rootSelector: "description",
    vars: u,
    varsResolver: $P
  }), _ = p && (C == null ? void 0 : C.getStyles) || E;
  return /* @__PURE__ */ N.createElement(
    ke,
    {
      component: "p",
      ref: e,
      variant: g,
      size: f,
      ..._("description"),
      ...v
    }
  );
});
ic.classes = Lr;
ic.displayName = "@mantine/core/InputDescription";
const GP = {}, zP = (r, { size: e }) => ({
  error: {
    "--input-error-size": e === void 0 ? void 0 : `calc(${Nr(e)} - ${$(2)})`
  }
}), ac = Ue((r, e) => {
  const t = Ce("InputError", GP, r), {
    classNames: n,
    className: o,
    style: a,
    styles: s,
    unstyled: l,
    vars: u,
    size: f,
    __staticSelector: h,
    __inheritStyles: p = !0,
    variant: g,
    ...v
  } = t, C = ut({
    name: ["InputWrapper", h],
    props: t,
    classes: Lr,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    rootSelector: "error",
    vars: u,
    varsResolver: zP
  }), E = pa(), _ = p && (E == null ? void 0 : E.getStyles) || C;
  return /* @__PURE__ */ N.createElement(
    ke,
    {
      component: "p",
      ref: e,
      variant: g,
      size: f,
      ..._("error"),
      ...v
    }
  );
});
ac.classes = Lr;
ac.displayName = "@mantine/core/InputError";
const Cg = {
  labelElement: "label"
}, VP = (r, { size: e }) => ({
  label: {
    "--input-label-size": Nr(e),
    "--input-asterisk-color": void 0
  }
}), sc = Ue((r, e) => {
  const t = Ce("InputLabel", Cg, r), {
    classNames: n,
    className: o,
    style: a,
    styles: s,
    unstyled: l,
    vars: u,
    labelElement: f,
    size: h,
    required: p,
    htmlFor: g,
    onMouseDown: v,
    children: C,
    __staticSelector: E,
    variant: _,
    ...I
  } = Ce("InputLabel", Cg, t), A = ut({
    name: ["InputWrapper", E],
    props: t,
    classes: Lr,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    rootSelector: "label",
    vars: u,
    varsResolver: VP
  }), S = pa(), R = (S == null ? void 0 : S.getStyles) || A;
  return /* @__PURE__ */ N.createElement(
    ke,
    {
      ...R("label"),
      component: f,
      variant: _,
      size: h,
      ref: e,
      htmlFor: f === "label" ? g : void 0,
      mod: { required: p },
      onMouseDown: (P) => {
        v == null || v(P), !P.defaultPrevented && P.detail > 1 && P.preventDefault();
      },
      ...I
    },
    C,
    p && /* @__PURE__ */ N.createElement("span", { ...R("required"), "aria-hidden": !0 }, " *")
  );
});
sc.classes = Lr;
sc.displayName = "@mantine/core/InputLabel";
const wg = {}, sd = Ue((r, e) => {
  const t = Ce("InputPlaceholder", wg, r), {
    classNames: n,
    className: o,
    style: a,
    styles: s,
    unstyled: l,
    vars: u,
    __staticSelector: f,
    variant: h,
    error: p,
    ...g
  } = Ce("InputPlaceholder", wg, t), v = ut({
    name: ["InputPlaceholder", f],
    props: t,
    classes: Lr,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    rootSelector: "placeholder"
  });
  return /* @__PURE__ */ N.createElement(
    ke,
    {
      ...v("placeholder"),
      mod: { error: !!p },
      component: "span",
      variant: h,
      ref: e,
      ...g
    }
  );
});
sd.classes = Lr;
sd.displayName = "@mantine/core/InputPlaceholder";
function WP(r, { hasDescription: e, hasError: t }) {
  const n = r.findIndex((u) => u === "input"), o = r[n - 1], a = r[n + 1];
  return { offsetBottom: e && a === "description" || t && a === "error", offsetTop: e && o === "description" || t && o === "error" };
}
const jP = {
  labelElement: "label",
  inputContainer: (r) => r,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, YP = (r, { size: e }) => ({
  label: {
    "--input-label-size": Nr(e),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": e === void 0 ? void 0 : `calc(${Nr(e)} - ${$(2)})`
  },
  description: {
    "--input-description-size": e === void 0 ? void 0 : `calc(${Nr(e)} - ${$(2)})`
  }
}), cd = Ue((r, e) => {
  const t = Ce("InputWrapper", jP, r), {
    classNames: n,
    className: o,
    style: a,
    styles: s,
    unstyled: l,
    vars: u,
    size: f,
    variant: h,
    __staticSelector: p,
    inputContainer: g,
    inputWrapperOrder: v,
    label: C,
    error: E,
    description: _,
    labelProps: I,
    descriptionProps: A,
    errorProps: S,
    labelElement: R,
    children: P,
    withAsterisk: L,
    id: q,
    required: U,
    __stylesApiProps: J,
    ...Y
  } = t, te = ut({
    name: ["InputWrapper", p],
    props: J || t,
    classes: Lr,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: u,
    varsResolver: YP
  }), Z = {
    size: f,
    variant: h,
    __staticSelector: p
  }, fe = Ao(q), ne = typeof L == "boolean" ? L : U, we = (S == null ? void 0 : S.id) || `${fe}-error`, Q = (A == null ? void 0 : A.id) || `${fe}-description`, ae = fe, oe = !!E && typeof E != "boolean", Pe = !!_, Qe = `${oe ? we : ""} ${Pe ? Q : ""}`, ot = Qe.trim().length > 0 ? Qe.trim() : void 0, dt = (I == null ? void 0 : I.id) || `${fe}-label`, Qr = C && /* @__PURE__ */ N.createElement(
    sc,
    {
      key: "label",
      labelElement: R,
      id: dt,
      htmlFor: ae,
      required: ne,
      ...Z,
      ...I
    },
    C
  ), un = Pe && /* @__PURE__ */ N.createElement(
    ic,
    {
      key: "description",
      ...A,
      ...Z,
      size: (A == null ? void 0 : A.size) || Z.size,
      id: (A == null ? void 0 : A.id) || Q
    },
    _
  ), jt = /* @__PURE__ */ N.createElement(N.Fragment, { key: "input" }, g(P)), ir = oe && /* @__PURE__ */ N.createElement(
    ac,
    {
      ...S,
      ...Z,
      size: (S == null ? void 0 : S.size) || Z.size,
      key: "error",
      id: (S == null ? void 0 : S.id) || we
    },
    E
  ), dn = v.map((ar) => {
    switch (ar) {
      case "label":
        return Qr;
      case "input":
        return jt;
      case "description":
        return un;
      case "error":
        return ir;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ N.createElement(
    qP,
    {
      value: {
        getStyles: te,
        describedBy: ot,
        inputId: ae,
        labelId: dt,
        ...WP(v, { hasDescription: Pe, hasError: oe })
      }
    },
    /* @__PURE__ */ N.createElement(
      ke,
      {
        ref: e,
        variant: h,
        size: f,
        mod: { error: !!E },
        ...te("root"),
        ...Y
      },
      dn
    )
  );
});
cd.classes = Lr;
cd.displayName = "@mantine/core/InputWrapper";
const QP = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: !0,
  withErrorStyles: !0
}, JP = (r, e, t) => ({
  wrapper: {
    "--input-margin-top": t.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": t.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": Ht(e.size, "input-height"),
    "--input-fz": Nr(e.size),
    "--input-radius": e.radius === void 0 ? void 0 : fi(e.radius),
    "--input-left-section-width": e.leftSectionWidth !== void 0 ? $(e.leftSectionWidth) : void 0,
    "--input-right-section-width": e.rightSectionWidth !== void 0 ? $(e.rightSectionWidth) : void 0,
    "--input-padding-y": e.multiline ? Ht(e.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": e.leftSectionPointerEvents,
    "--input-right-section-pointer-events": e.rightSectionPointerEvents
  }
}), Bt = ua((r, e) => {
  const t = Ce("Input", QP, r), {
    classNames: n,
    className: o,
    style: a,
    styles: s,
    unstyled: l,
    required: u,
    __staticSelector: f,
    __stylesApiProps: h,
    size: p,
    wrapperProps: g,
    error: v,
    disabled: C,
    leftSection: E,
    leftSectionProps: _,
    leftSectionWidth: I,
    rightSection: A,
    rightSectionProps: S,
    rightSectionWidth: R,
    rightSectionPointerEvents: P,
    leftSectionPointerEvents: L,
    variant: q,
    vars: U,
    pointer: J,
    multiline: Y,
    radius: te,
    id: Z,
    withAria: fe,
    withErrorStyles: ne,
    ...we
  } = t, { styleProps: Q, rest: ae } = ec(we), oe = pa(), Pe = { offsetBottom: oe == null ? void 0 : oe.offsetBottom, offsetTop: oe == null ? void 0 : oe.offsetTop }, Qe = ut({
    name: ["Input", f],
    props: h || t,
    classes: Lr,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    stylesCtx: Pe,
    rootSelector: "wrapper",
    vars: U,
    varsResolver: JP
  }), ot = fe ? {
    required: u,
    disabled: C,
    "aria-invalid": !!v,
    "aria-describedby": oe == null ? void 0 : oe.describedBy,
    id: (oe == null ? void 0 : oe.inputId) || Z
  } : {};
  return /* @__PURE__ */ N.createElement(
    ke,
    {
      ...Qe("wrapper"),
      ...Q,
      ...g,
      mod: {
        error: !!v && ne,
        pointer: J,
        disabled: C,
        multiline: Y,
        "data-with-right-section": !!A,
        "data-with-left-section": !!E
      },
      variant: q,
      size: p
    },
    E && /* @__PURE__ */ N.createElement(
      "div",
      {
        ..._,
        "data-position": "left",
        ...Qe("section", {
          className: _ == null ? void 0 : _.className,
          style: _ == null ? void 0 : _.style
        })
      },
      E
    ),
    /* @__PURE__ */ N.createElement(
      ke,
      {
        component: "input",
        ...ae,
        ...ot,
        ref: e,
        required: u,
        mod: { disabled: C, error: !!v && ne },
        variant: q,
        ...Qe("input")
      }
    ),
    A && /* @__PURE__ */ N.createElement(
      "div",
      {
        ...S,
        "data-position": "right",
        ...Qe("section", {
          className: S == null ? void 0 : S.className,
          style: S == null ? void 0 : S.style
        })
      },
      A
    )
  );
});
Bt.classes = Lr;
Bt.Wrapper = cd;
Bt.Label = sc;
Bt.Error = ac;
Bt.Description = ic;
Bt.Placeholder = sd;
Bt.displayName = "@mantine/core/Input";
function XP(r, e, t) {
  const n = Ce(r, e, t), {
    label: o,
    description: a,
    error: s,
    required: l,
    classNames: u,
    styles: f,
    className: h,
    unstyled: p,
    __staticSelector: g,
    __stylesApiProps: v,
    errorProps: C,
    labelProps: E,
    descriptionProps: _,
    wrapperProps: I,
    id: A,
    size: S,
    style: R,
    inputContainer: P,
    inputWrapperOrder: L,
    withAsterisk: q,
    variant: U,
    vars: J,
    ...Y
  } = n, { styleProps: te, rest: Z } = ec(Y), fe = {
    label: o,
    description: a,
    error: s,
    required: l,
    classNames: u,
    className: h,
    __staticSelector: g,
    __stylesApiProps: v || n,
    errorProps: C,
    labelProps: E,
    descriptionProps: _,
    unstyled: p,
    styles: f,
    size: S,
    style: R,
    inputContainer: P,
    inputWrapperOrder: L,
    withAsterisk: q,
    variant: U,
    id: A,
    ...I
  };
  return {
    ...Z,
    classNames: u,
    styles: f,
    unstyled: p,
    wrapperProps: { ...fe, ...te },
    inputProps: {
      required: l,
      classNames: u,
      styles: f,
      unstyled: p,
      size: S,
      __staticSelector: g,
      __stylesApiProps: v || n,
      error: s,
      variant: U,
      id: A
    }
  };
}
const ZP = {
  __staticSelector: "InputBase",
  withAria: !0
}, Xn = ua((r, e) => {
  const { inputProps: t, wrapperProps: n, ...o } = XP("InputBase", ZP, r);
  return /* @__PURE__ */ N.createElement(Bt.Wrapper, { ...n }, /* @__PURE__ */ N.createElement(Bt, { ...t, ...o, ref: e }));
});
Xn.classes = { ...Bt.classes, ...Bt.Wrapper.classes };
Xn.displayName = "@mantine/core/InputBase";
const [eN, ld] = di(
  "Accordion component was not found in the tree"
);
function ud({ style: r, size: e = 16, ...t }) {
  return /* @__PURE__ */ N.createElement(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...r, width: $(e), height: $(e), display: "block" },
      ...t
    },
    /* @__PURE__ */ N.createElement(
      "path",
      {
        d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    )
  );
}
ud.displayName = "@mantine/core/AccordionChevron";
const [tN, yv] = di("Accordion.Item component was not found in the tree");
var ga = { root: "m-9bdbb667", panel: "m-df78851f", content: "m-4ba554d4", itemTitle: "m-8fa820a0", control: "m-4ba585b8", "control--default": "m-6939a5e9", "control--contained": "m-4271d21b", label: "m-df3ffa0f", chevron: "m-3f35ae96", icon: "m-9bd771fe", item: "m-9bd7b098", "item--default": "m-fe19b709", "item--contained": "m-1f921b3b", "item--filled": "m-2cdf939a", "item--separated": "m-9f59b069" };
const rN = {}, dd = Ue((r, e) => {
  const {
    classNames: t,
    className: n,
    style: o,
    styles: a,
    vars: s,
    chevron: l,
    icon: u,
    onClick: f,
    onKeyDown: h,
    children: p,
    disabled: g,
    ...v
  } = Ce("AccordionControl", rN, r), { value: C } = yv(), E = ld(), _ = E.isItemActive(C), I = typeof E.order == "number", A = `h${E.order}`, S = /* @__PURE__ */ N.createElement(
    fa,
    {
      ...v,
      ...E.getStyles("control", { className: n, classNames: t, style: o, styles: a, variant: E.variant }),
      unstyled: E.unstyled,
      mod: [
        "accordion-control",
        { active: _, "chevron-position": E.chevronPosition, disabled: g }
      ],
      ref: e,
      onClick: (R) => {
        f == null || f(R), E.onChange(C);
      },
      type: "button",
      disabled: g,
      "aria-expanded": _,
      "aria-controls": E.getRegionId(C),
      id: E.getControlId(C),
      onKeyDown: LA({
        siblingSelector: "[data-accordion-control]",
        parentSelector: "[data-accordion]",
        activateOnFocus: !1,
        loop: E.loop,
        orientation: "vertical",
        onKeyDown: h
      })
    },
    /* @__PURE__ */ N.createElement(
      ke,
      {
        component: "span",
        mod: { rotate: !E.disableChevronRotation && _, position: E.chevronPosition },
        ...E.getStyles("chevron", { classNames: t, styles: a })
      },
      l || E.chevron
    ),
    /* @__PURE__ */ N.createElement("span", { ...E.getStyles("label", { classNames: t, styles: a }) }, p),
    u && /* @__PURE__ */ N.createElement(
      ke,
      {
        component: "span",
        mod: { "chevron-position": E.chevronPosition },
        ...E.getStyles("icon", { classNames: t, styles: a })
      },
      u
    )
  );
  return I ? /* @__PURE__ */ N.createElement(A, { ...E.getStyles("itemTitle", { classNames: t, styles: a }) }, S) : S;
});
dd.displayName = "@mantine/core/AccordionControl";
dd.classes = ga;
const nN = {}, fd = Ue((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, value: l, ...u } = Ce(
    "AccordionItem",
    nN,
    r
  ), f = ld();
  return /* @__PURE__ */ N.createElement(tN, { value: { value: l } }, /* @__PURE__ */ N.createElement(
    ke,
    {
      ref: e,
      mod: { active: f.isItemActive(l) },
      ...f.getStyles("item", { className: n, classNames: t, styles: a, style: o, variant: f.variant }),
      ...u
    }
  ));
});
fd.displayName = "@mantine/core/AccordionItem";
fd.classes = ga;
const oN = {}, hd = Ue((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, children: l, ...u } = Ce(
    "AccordionPanel",
    oN,
    r
  ), { value: f } = yv(), h = ld();
  return /* @__PURE__ */ N.createElement(
    Hm,
    {
      ref: e,
      ...h.getStyles("panel", { className: n, classNames: t, style: o, styles: a }),
      ...u,
      in: h.isItemActive(f),
      transitionDuration: h.transitionDuration ?? 200,
      role: "region",
      id: h.getRegionId(f),
      "aria-labelledby": h.getControlId(f)
    },
    /* @__PURE__ */ N.createElement("div", { ...h.getStyles("content", { classNames: t, styles: a }) }, l)
  );
});
hd.displayName = "@mantine/core/AccordionPanel";
hd.classes = ga;
const iN = {
  multiple: !1,
  disableChevronRotation: !1,
  chevronPosition: "right",
  variant: "default",
  chevron: /* @__PURE__ */ N.createElement(ud, null)
}, aN = (r, { transitionDuration: e, chevronSize: t, radius: n }) => ({
  root: {
    "--accordion-transition-duration": e === void 0 ? void 0 : `${e}ms`,
    "--accordion-chevron-size": t === void 0 ? void 0 : $(t),
    "--accordion-radius": n === void 0 ? void 0 : fi(n)
  }
});
function Et(r) {
  const e = Ce("Accordion", iN, r), {
    classNames: t,
    className: n,
    style: o,
    styles: a,
    unstyled: s,
    vars: l,
    children: u,
    multiple: f,
    value: h,
    defaultValue: p,
    onChange: g,
    id: v,
    loop: C,
    transitionDuration: E,
    disableChevronRotation: _,
    chevronPosition: I,
    chevronSize: A,
    order: S,
    chevron: R,
    variant: P,
    radius: L,
    ...q
  } = e, U = Ao(v), [J, Y] = bo({
    value: h,
    defaultValue: p,
    finalValue: f ? [] : null,
    onChange: g
  }), te = (ne) => Array.isArray(J) ? J.includes(ne) : ne === J, Z = (ne) => {
    const we = Array.isArray(J) ? J.includes(ne) ? J.filter((Q) => Q !== ne) : [...J, ne] : ne === J ? null : ne;
    Y(we);
  }, fe = ut({
    name: "Accordion",
    classes: ga,
    props: e,
    className: n,
    style: o,
    classNames: t,
    styles: a,
    unstyled: s,
    vars: l,
    varsResolver: aN
  });
  return /* @__PURE__ */ N.createElement(
    eN,
    {
      value: {
        isItemActive: te,
        onChange: Z,
        getControlId: Yp(
          `${U}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: Yp(
          `${U}-panel`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        transitionDuration: E,
        disableChevronRotation: _,
        chevronPosition: I,
        order: S,
        chevron: R,
        loop: C,
        getStyles: fe,
        variant: P,
        unstyled: s
      }
    },
    /* @__PURE__ */ N.createElement(ke, { ...fe("root"), id: U, ...q, variant: P, "data-accordion": !0 }, u)
  );
}
const sN = (r) => r;
Et.extend = sN;
Et.classes = ga;
Et.displayName = "@mantine/core/Accordion";
Et.Item = fd;
Et.Panel = hd;
Et.Control = dd;
Et.Chevron = ud;
function Cv(r) {
  return typeof r == "string" ? { value: r, label: r } : typeof r == "number" ? { value: r.toString(), label: r.toString() } : "group" in r ? {
    group: r.group,
    items: r.items.map((e) => Cv(e))
  } : r;
}
function wv(r) {
  return r ? r.map(Cv) : [];
}
function pd(r) {
  return r.reduce((e, t) => "group" in t ? { ...e, ...pd(t.items) } : (e[t.value] = t, e), {});
}
var Wt = { dropdown: "m-88b62a41", options: "m-b2821a6e", option: "m-92253aa5", search: "m-985517d8", empty: "m-2530cd1d", header: "m-858f94bd", footer: "m-82b967cb", group: "m-254f3e4f", groupLabel: "m-2bb2e9e5", chevron: "m-2943220b", optionsDropdownScrollArea: "m-71d052f9", optionsDropdownOption: "m-390b5f4", optionsDropdownCheckIcon: "m-8ee53fc2" };
const cN = {
  error: null
}, lN = (r, { size: e }) => ({
  chevron: {
    "--combobox-chevron-size": Ht(e, "combobox-chevron-size")
  }
}), gd = Ue((r, e) => {
  const t = Ce("ComboboxChevron", cN, r), { size: n, error: o, style: a, className: s, classNames: l, styles: u, unstyled: f, vars: h, ...p } = t, g = ut({
    name: "ComboboxChevron",
    classes: Wt,
    props: t,
    style: a,
    className: s,
    classNames: l,
    styles: u,
    unstyled: f,
    vars: h,
    varsResolver: lN,
    rootSelector: "chevron"
  });
  return /* @__PURE__ */ N.createElement(
    ke,
    {
      component: "svg",
      ...p,
      ...g("chevron"),
      size: n,
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      mod: ["combobox-chevron", { error: o }],
      ref: e
    },
    /* @__PURE__ */ N.createElement(
      "path",
      {
        d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    )
  );
});
gd.classes = Wt;
gd.displayName = "@mantine/core/ComboboxChevron";
const [uN, Dr] = di(
  "Combobox component was not found in tree"
), Ev = lt(
  ({ size: r, onMouseDown: e, onClick: t, onClear: n, ...o }, a) => /* @__PURE__ */ N.createElement(
    ad,
    {
      ref: a,
      size: r || "sm",
      variant: "transparent",
      tabIndex: -1,
      "aria-hidden": !0,
      ...o,
      onMouseDown: (s) => {
        s.preventDefault(), e == null || e(s);
      },
      onClick: (s) => {
        n(), t == null || t(s);
      }
    }
  )
);
Ev.displayName = "@mantine/core/ComboboxClearButton";
const dN = {}, md = Ue((r, e) => {
  const { classNames: t, styles: n, className: o, style: a, hidden: s, ...l } = Ce(
    "ComboboxDropdown",
    dN,
    r
  ), u = Dr();
  return /* @__PURE__ */ N.createElement(
    Jn.Dropdown,
    {
      ...l,
      ref: e,
      role: "presentation",
      "data-hidden": s || void 0,
      ...u.getStyles("dropdown", { className: o, style: a, classNames: t, styles: n })
    }
  );
});
md.classes = Wt;
md.displayName = "@mantine/core/ComboboxDropdown";
const fN = {
  refProp: "ref"
}, bv = Ue((r, e) => {
  const { children: t, refProp: n } = Ce("ComboboxDropdownTarget", fN, r);
  if (Dr(), !ca(t))
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  return /* @__PURE__ */ N.createElement(Jn.Target, { ref: e, refProp: n }, t);
});
bv.displayName = "@mantine/core/ComboboxDropdownTarget";
const hN = {}, vd = Ue((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, ...l } = Ce(
    "ComboboxEmpty",
    hN,
    r
  ), u = Dr();
  return /* @__PURE__ */ N.createElement(
    ke,
    {
      ref: e,
      ...u.getStyles("empty", { className: n, classNames: t, styles: a, style: o }),
      ...l
    }
  );
});
vd.classes = Wt;
vd.displayName = "@mantine/core/ComboboxEmpty";
function yd({
  onKeyDown: r,
  withKeyboardNavigation: e,
  withAriaAttributes: t,
  withExpandedAttribute: n,
  targetType: o
}) {
  const a = Dr(), [s, l] = ye(null), u = (h) => {
    if (r == null || r(h), !a.readOnly && e) {
      if (h.nativeEvent.code === "ArrowDown" && (h.preventDefault(), a.store.dropdownOpened ? l(a.store.selectNextOption()) : (a.store.openDropdown("keyboard"), l(a.store.selectActiveOption()))), h.nativeEvent.code === "ArrowUp" && (h.preventDefault(), a.store.dropdownOpened ? l(a.store.selectPreviousOption()) : (a.store.openDropdown("keyboard"), l(a.store.selectActiveOption()))), h.nativeEvent.code === "Enter") {
        const p = a.store.getSelectedOptionIndex();
        a.store.dropdownOpened && p !== -1 ? (h.preventDefault(), a.store.clickSelectedOption()) : o === "button" && (h.preventDefault(), a.store.openDropdown("keyboard"));
      }
      h.nativeEvent.code === "Escape" && a.store.closeDropdown("keyboard"), h.nativeEvent.code === "Space" && o === "button" && (h.preventDefault(), a.store.toggleDropdown("keyboard"));
    }
  };
  return {
    ...t ? {
      "aria-haspopup": "listbox",
      "aria-expanded": n && !!(a.store.listId && a.store.dropdownOpened) || void 0,
      "aria-controls": a.store.listId,
      "aria-activedescendant": a.store.dropdownOpened && s || void 0,
      autoComplete: "off",
      "data-expanded": a.store.dropdownOpened ? !0 : void 0
    } : {},
    onKeyDown: u
  };
}
const pN = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1
}, _v = Ue((r, e) => {
  const {
    children: t,
    refProp: n,
    withKeyboardNavigation: o,
    withAriaAttributes: a,
    withExpandedAttribute: s,
    targetType: l,
    ...u
  } = Ce("ComboboxEventsTarget", pN, r);
  if (!ca(t))
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const f = Dr(), h = yd({
    targetType: l,
    withAriaAttributes: a,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: t.props.onKeyDown
  });
  return Ws(t, {
    ...h,
    ...u,
    [n]: Mr(e, f.store.targetRef, t == null ? void 0 : t.ref)
  });
});
_v.displayName = "@mantine/core/ComboboxEventsTarget";
const gN = {}, Cd = Ue((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, ...l } = Ce(
    "ComboboxFooter",
    gN,
    r
  ), u = Dr();
  return /* @__PURE__ */ N.createElement(
    ke,
    {
      ref: e,
      ...u.getStyles("footer", { className: n, classNames: t, style: o, styles: a }),
      ...l
    }
  );
});
Cd.classes = Wt;
Cd.displayName = "@mantine/core/ComboboxFooter";
const mN = {}, wd = Ue((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, children: l, label: u, ...f } = Ce(
    "ComboboxGroup",
    mN,
    r
  ), h = Dr();
  return /* @__PURE__ */ N.createElement(
    ke,
    {
      ref: e,
      ...h.getStyles("group", { className: n, classNames: t, style: o, styles: a }),
      ...f
    },
    u && /* @__PURE__ */ N.createElement("div", { ...h.getStyles("groupLabel", { classNames: t, styles: a }) }, u),
    l
  );
});
wd.classes = Wt;
wd.displayName = "@mantine/core/ComboboxGroup";
const vN = {}, Ed = Ue((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, ...l } = Ce(
    "ComboboxHeader",
    vN,
    r
  ), u = Dr();
  return /* @__PURE__ */ N.createElement(
    ke,
    {
      ref: e,
      ...u.getStyles("header", { className: n, classNames: t, style: o, styles: a }),
      ...l
    }
  );
});
Ed.classes = Wt;
Ed.displayName = "@mantine/core/ComboboxHeader";
const yN = {}, bd = Ue((r, e) => {
  const t = Ce("ComboboxOption", yN, r), {
    classNames: n,
    className: o,
    style: a,
    styles: s,
    vars: l,
    onClick: u,
    id: f,
    active: h,
    onMouseDown: p,
    onMouseOver: g,
    disabled: v,
    selected: C,
    ...E
  } = t, _ = Dr(), I = Vg(), A = f || I;
  return /* @__PURE__ */ N.createElement(
    ke,
    {
      ..._.getStyles("option", { className: o, classNames: n, styles: s, style: a }),
      ...E,
      ref: e,
      id: A,
      mod: [
        "combobox-option",
        { "combobox-active": h, "combobox-disabled": v, "combobox-selected": C }
      ],
      role: "option",
      onClick: (S) => {
        var R;
        v ? S.preventDefault() : ((R = _.onOptionSubmit) == null || R.call(_, t.value, t), u == null || u(S));
      },
      onMouseDown: (S) => {
        S.preventDefault(), p == null || p(S);
      },
      onMouseOver: (S) => {
        _.resetSelectionOnOptionHover && _.store.resetSelectedOption(), g == null || g(S);
      }
    }
  );
});
bd.classes = Wt;
bd.displayName = "@mantine/core/ComboboxOption";
const CN = {}, _d = Ue((r, e) => {
  const t = Ce("ComboboxOptions", CN, r), { classNames: n, className: o, style: a, styles: s, id: l, onMouseDown: u, labelledBy: f, ...h } = t, p = Dr(), g = Ao(l);
  return ge(() => {
    p.store.setListId(g);
  }, [g]), /* @__PURE__ */ N.createElement(
    ke,
    {
      ref: e,
      ...p.getStyles("options", { className: o, style: a, classNames: n, styles: s }),
      ...h,
      id: g,
      role: "listbox",
      "aria-labelledby": f,
      onMouseDown: (v) => {
        v.preventDefault(), u == null || u(v);
      }
    }
  );
});
_d.classes = Wt;
_d.displayName = "@mantine/core/ComboboxOptions";
const wN = {
  withAriaAttributes: !0,
  withKeyboardNavigation: !0
}, Sd = Ue((r, e) => {
  const t = Ce("ComboboxSearch", wN, r), {
    classNames: n,
    styles: o,
    unstyled: a,
    vars: s,
    withAriaAttributes: l,
    onKeyDown: u,
    withKeyboardNavigation: f,
    size: h,
    ...p
  } = t, g = Dr(), v = g.getStyles("search"), C = yd({
    targetType: "input",
    withAriaAttributes: l,
    withKeyboardNavigation: f,
    withExpandedAttribute: !1,
    onKeyDown: u
  });
  return /* @__PURE__ */ N.createElement(
    Bt,
    {
      ref: Mr(e, g.store.searchRef),
      classNames: [{ input: v.className }, n],
      styles: [{ input: v.style }, o],
      size: h || g.size,
      ...C,
      ...p,
      __staticSelector: "Combobox"
    }
  );
});
Sd.classes = Wt;
Sd.displayName = "@mantine/core/ComboboxSearch";
const EN = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1
}, Sv = Ue((r, e) => {
  const {
    children: t,
    refProp: n,
    withKeyboardNavigation: o,
    withAriaAttributes: a,
    withExpandedAttribute: s,
    targetType: l,
    ...u
  } = Ce("ComboboxTarget", EN, r);
  if (!ca(t))
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const f = Dr(), h = yd({
    targetType: l,
    withAriaAttributes: a,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: t.props.onKeyDown
  }), p = Ws(t, {
    ...h,
    ...u
  });
  return /* @__PURE__ */ N.createElement(Jn.Target, { ref: Mr(e, f.store.targetRef) }, p);
});
Sv.displayName = "@mantine/core/ComboboxTarget";
function bN(r, e, t) {
  for (let n = r - 1; n >= 0; n -= 1)
    if (!e[n].hasAttribute("data-combobox-disabled"))
      return n;
  if (t) {
    for (let n = e.length - 1; n > -1; n -= 1)
      if (!e[n].hasAttribute("data-combobox-disabled"))
        return n;
  }
  return r;
}
function _N(r, e, t) {
  for (let n = r + 1; n < e.length; n += 1)
    if (!e[n].hasAttribute("data-combobox-disabled"))
      return n;
  if (t) {
    for (let n = 0; n < e.length; n += 1)
      if (!e[n].hasAttribute("data-combobox-disabled"))
        return n;
  }
  return r;
}
function SN(r) {
  for (let e = 0; e < r.length; e += 1)
    if (!r[e].hasAttribute("data-combobox-disabled"))
      return e;
  return -1;
}
function Td({
  defaultOpened: r,
  opened: e,
  onOpenedChange: t,
  onDropdownClose: n,
  onDropdownOpen: o,
  loop: a = !0,
  scrollBehavior: s = "instant"
} = {}) {
  const [l, u] = bo({
    value: e,
    defaultValue: r,
    finalValue: !1,
    onChange: t
  }), f = Ke(null), h = Ke(-1), p = Ke(null), g = Ke(null), v = Ke(-1), C = Ke(-1), E = Ke(-1), _ = ze(
    (Q = "unknown") => {
      l || (u(!0), o == null || o(Q));
    },
    [u, o, l]
  ), I = ze(
    (Q = "unknown") => {
      l && (u(!1), n == null || n(Q));
    },
    [u, n, l]
  ), A = ze(
    (Q = "unknown") => {
      l ? I(Q) : _(Q);
    },
    [I, _, l]
  ), S = ze(() => {
    const Q = document.querySelector(`#${f.current} [data-combobox-selected]`);
    Q == null || Q.removeAttribute("data-combobox-selected"), Q == null || Q.removeAttribute("aria-selected");
  }, []), R = ze(
    (Q) => {
      const ae = document.getElementById(f.current), oe = ae == null ? void 0 : ae.querySelectorAll("[data-combobox-option]");
      if (!oe)
        return null;
      const Pe = Q >= oe.length ? 0 : Q < 0 ? oe.length - 1 : Q;
      return h.current = Pe, oe != null && oe[Pe] && !oe[Pe].hasAttribute("data-combobox-disabled") ? (S(), oe[Pe].setAttribute("data-combobox-selected", "true"), oe[Pe].setAttribute("aria-selected", "true"), oe[Pe].scrollIntoView({ block: "nearest", behavior: s }), oe[Pe].id) : null;
    },
    [s, S]
  ), P = ze(() => {
    const Q = document.querySelector(
      `#${f.current} [data-combobox-active]`
    );
    if (Q) {
      const ae = document.querySelectorAll(
        `#${f.current} [data-combobox-option]`
      ), oe = Array.from(ae).findIndex((Pe) => Pe === Q);
      return R(oe);
    }
    return R(0);
  }, [R]), L = ze(
    () => R(
      _N(
        h.current,
        document.querySelectorAll(`#${f.current} [data-combobox-option]`),
        a
      )
    ),
    [R, a]
  ), q = ze(
    () => R(
      bN(
        h.current,
        document.querySelectorAll(`#${f.current} [data-combobox-option]`),
        a
      )
    ),
    [R, a]
  ), U = ze(
    () => R(
      SN(
        document.querySelectorAll(`#${f.current} [data-combobox-option]`)
      )
    ),
    [R]
  ), J = ze((Q = "selected") => {
    E.current = window.setTimeout(() => {
      const ae = document.querySelectorAll(
        `#${f.current} [data-combobox-option]`
      ), oe = Array.from(ae).findIndex(
        (Pe) => Pe.hasAttribute(`data-combobox-${Q}`)
      );
      h.current = oe;
    }, 0);
  }, []), Y = ze(() => {
    h.current = -1, S();
  }, [S]), te = ze(() => {
    const Q = document.querySelectorAll(
      `#${f.current} [data-combobox-option]`
    ), ae = Q == null ? void 0 : Q[h.current];
    ae == null || ae.click();
  }, []), Z = ze((Q) => {
    f.current = Q;
  }, []), fe = ze(() => {
    v.current = window.setTimeout(() => p.current.focus(), 0);
  }, []), ne = ze(() => {
    C.current = window.setTimeout(() => g.current.focus(), 0);
  }, []), we = ze(() => h.current, []);
  return ge(
    () => () => {
      window.clearTimeout(v.current), window.clearTimeout(C.current), window.clearTimeout(E.current);
    },
    []
  ), {
    dropdownOpened: l,
    openDropdown: _,
    closeDropdown: I,
    toggleDropdown: A,
    selectedOptionIndex: h.current,
    getSelectedOptionIndex: we,
    selectOption: R,
    selectFirstOption: U,
    selectActiveOption: P,
    selectNextOption: L,
    selectPreviousOption: q,
    resetSelectedOption: Y,
    updateSelectedOptionIndex: J,
    listId: f.current,
    setListId: Z,
    clickSelectedOption: te,
    searchRef: p,
    focusSearchInput: fe,
    targetRef: g,
    focusTarget: ne
  };
}
const TN = {
  keepMounted: !0,
  withinPortal: !0,
  resetSelectionOnOptionHover: !1,
  width: "target",
  transitionProps: { transition: "fade", duration: 0 }
}, IN = (r, { size: e, dropdownPadding: t }) => ({
  options: {
    "--combobox-option-fz": Nr(e),
    "--combobox-option-padding": Ht(e, "combobox-option-padding")
  },
  dropdown: {
    "--combobox-padding": t === void 0 ? void 0 : $(t),
    "--combobox-option-fz": Nr(e),
    "--combobox-option-padding": Ht(e, "combobox-option-padding")
  }
});
function je(r) {
  const e = Ce("Combobox", TN, r), {
    classNames: t,
    styles: n,
    unstyled: o,
    children: a,
    store: s,
    vars: l,
    onOptionSubmit: u,
    size: f,
    dropdownPadding: h,
    resetSelectionOnOptionHover: p,
    __staticSelector: g,
    readOnly: v,
    ...C
  } = e, E = Td(), _ = s || E, I = ut({
    name: g || "Combobox",
    classes: Wt,
    props: e,
    classNames: t,
    styles: n,
    unstyled: o,
    vars: l,
    varsResolver: IN
  });
  return /* @__PURE__ */ N.createElement(
    uN,
    {
      value: {
        getStyles: I,
        store: _,
        onOptionSubmit: u,
        size: f,
        resetSelectionOnOptionHover: p,
        readOnly: v
      }
    },
    /* @__PURE__ */ N.createElement(
      Jn,
      {
        opened: _.dropdownOpened,
        ...C,
        onClose: _.closeDropdown,
        withRoles: !1,
        unstyled: o
      },
      a
    )
  );
}
const AN = (r) => r;
je.extend = AN;
je.classes = Wt;
je.displayName = "@mantine/core/Combobox";
je.Target = Sv;
je.Dropdown = md;
je.Options = _d;
je.Option = bd;
je.Search = Sd;
je.Empty = vd;
je.Chevron = gd;
je.Footer = Cd;
je.Header = Ed;
je.EventsTarget = _v;
je.DropdownTarget = bv;
je.Group = wd;
je.ClearButton = Ev;
var Tv = { root: "m-5f75b09e", body: "m-5f6e695e", labelWrapper: "m-d3ea56bb", label: "m-8ee546b8", description: "m-328f68c0", error: "m-8e8a99cc" };
const RN = Tv, Iv = lt(
  ({
    __staticSelector: r,
    __stylesApiProps: e,
    className: t,
    classNames: n,
    styles: o,
    unstyled: a,
    children: s,
    label: l,
    description: u,
    id: f,
    disabled: h,
    error: p,
    size: g,
    labelPosition: v = "left",
    variant: C,
    style: E,
    vars: _,
    ...I
  }, A) => {
    const S = ut({
      name: r,
      props: e,
      className: t,
      style: E,
      classes: Tv,
      classNames: n,
      styles: o,
      unstyled: a
    });
    return /* @__PURE__ */ N.createElement(
      ke,
      {
        ...S("root"),
        ref: A,
        __vars: {
          "--label-fz": Nr(g),
          "--label-lh": Ht(g, "label-lh")
        },
        mod: { "label-position": v },
        variant: C,
        size: g,
        ...I
      },
      /* @__PURE__ */ N.createElement("div", { ...S("body") }, s, /* @__PURE__ */ N.createElement("div", { ...S("labelWrapper"), "data-disabled": h || void 0 }, l && /* @__PURE__ */ N.createElement("label", { ...S("label"), "data-disabled": h || void 0, htmlFor: f }, l), u && /* @__PURE__ */ N.createElement(Bt.Description, { size: g, __inheritStyles: !1, ...S("description") }, u), p && p !== "boolean" && /* @__PURE__ */ N.createElement(Bt.Error, { size: g, __inheritStyles: !1, ...S("error") }, p)))
    );
  }
);
Iv.displayName = "@mantine/core/InlineInput";
const Av = Io(null), kN = Av.Provider, PN = () => Yn(Av);
function NN({ children: r, role: e }) {
  const t = pa();
  return t ? /* @__PURE__ */ N.createElement("div", { role: e, "aria-labelledby": t.labelId, "aria-describedby": t.describedBy }, r) : /* @__PURE__ */ N.createElement(N.Fragment, null, r);
}
const ON = {}, Id = Ue((r, e) => {
  const { value: t, defaultValue: n, onChange: o, size: a, wrapperProps: s, children: l, ...u } = Ce(
    "CheckboxGroup",
    ON,
    r
  ), [f, h] = bo({
    value: t,
    defaultValue: n,
    finalValue: [],
    onChange: o
  }), p = (g) => {
    const v = g.currentTarget.value;
    h(
      f.includes(v) ? f.filter((C) => C !== v) : [...f, v]
    );
  };
  return /* @__PURE__ */ N.createElement(kN, { value: { value: f, onChange: p, size: a } }, /* @__PURE__ */ N.createElement(
    Bt.Wrapper,
    {
      size: a,
      ref: e,
      ...s,
      ...u,
      labelElement: "div",
      __staticSelector: "CheckboxGroup"
    },
    /* @__PURE__ */ N.createElement(NN, { role: "group" }, l)
  ));
});
Id.classes = Bt.Wrapper.classes;
Id.displayName = "@mantine/core/CheckboxGroup";
function Rv({ size: r, style: e, ...t }) {
  const n = r !== void 0 ? { width: $(r), height: $(r), ...e } : e;
  return /* @__PURE__ */ N.createElement(
    "svg",
    {
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: n,
      "aria-hidden": !0,
      ...t
    },
    /* @__PURE__ */ N.createElement(
      "path",
      {
        d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    )
  );
}
function MN({ indeterminate: r, ...e }) {
  return r ? /* @__PURE__ */ N.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 32 6",
      "aria-hidden": !0,
      ...e
    },
    /* @__PURE__ */ N.createElement("rect", { width: "32", height: "6", fill: "currentColor", rx: "3" })
  ) : /* @__PURE__ */ N.createElement(Rv, { ...e });
}
var kv = { root: "m-bf2d988c", inner: "m-26062bec", input: "m-26063560", icon: "m-bf295423", "input--outline": "m-215c4542" };
const xN = {
  labelPosition: "right",
  icon: MN
}, LN = (r, { radius: e, color: t, size: n, iconColor: o, variant: a }) => {
  const s = Zs({ color: t || r.primaryColor, theme: r }), l = s.isThemeColor && s.shade === void 0 ? `var(--mantine-color-${s.color}-outline)` : s.color;
  return {
    root: {
      "--checkbox-size": Ht(n, "checkbox-size"),
      "--checkbox-radius": e === void 0 ? void 0 : fi(e),
      "--checkbox-color": a === "outline" ? l : Zi(t, r),
      "--checkbox-icon-color": o ? Zi(o, r) : void 0
    }
  };
}, ma = Ue((r, e) => {
  const t = Ce("Checkbox", xN, r), {
    classNames: n,
    className: o,
    style: a,
    styles: s,
    unstyled: l,
    vars: u,
    color: f,
    label: h,
    id: p,
    size: g,
    radius: v,
    wrapperProps: C,
    children: E,
    checked: _,
    labelPosition: I,
    description: A,
    error: S,
    disabled: R,
    variant: P,
    indeterminate: L,
    icon: q,
    rootRef: U,
    iconColor: J,
    onChange: Y,
    ...te
  } = t, Z = PN(), fe = g || (Z == null ? void 0 : Z.size), ne = q, we = ut({
    name: "Checkbox",
    props: t,
    classes: kv,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: u,
    varsResolver: LN
  }), { styleProps: Q, rest: ae } = ec(te), oe = Ao(p), Pe = Z ? {
    checked: Z.value.includes(ae.value),
    onChange: (Qe) => {
      Z.onChange(Qe), Y == null || Y(Qe);
    }
  } : {};
  return /* @__PURE__ */ N.createElement(
    Iv,
    {
      ...we("root"),
      __staticSelector: "Checkbox",
      __stylesApiProps: t,
      id: oe,
      size: fe,
      labelPosition: I,
      label: h,
      description: A,
      error: S,
      disabled: R,
      classNames: n,
      styles: s,
      unstyled: l,
      "data-checked": Pe.checked || _ || void 0,
      variant: P,
      ref: U,
      ...Q,
      ...C
    },
    /* @__PURE__ */ N.createElement(ke, { ...we("inner"), mod: { "data-label-position": I } }, /* @__PURE__ */ N.createElement(
      ke,
      {
        component: "input",
        id: oe,
        ref: e,
        checked: _,
        disabled: R,
        mod: { error: !!S, indeterminate: L },
        ...we("input", { focusable: !0, variant: P }),
        onChange: Y,
        ...ae,
        ...Pe,
        type: "checkbox"
      }
    ), /* @__PURE__ */ N.createElement(ne, { indeterminate: L, ...we("icon") }))
  );
});
ma.classes = { ...kv, ...RN };
ma.displayName = "@mantine/core/Checkbox";
ma.Group = Id;
function ta(r) {
  return "group" in r;
}
function Pv({
  options: r,
  search: e,
  limit: t
}) {
  const n = e.trim().toLowerCase(), o = [];
  for (let a = 0; a < r.length; a += 1) {
    const s = r[a];
    if (o.length === t)
      return o;
    ta(s) && o.push({
      group: s.group,
      items: Pv({
        options: s.items,
        search: e,
        limit: t - o.length
      })
    }), ta(s) || s.label.toLowerCase().includes(n) && o.push(s);
  }
  return o;
}
function DN(r) {
  if (r.length === 0)
    return !0;
  for (const e of r)
    if (!("group" in e) || e.items.length > 0)
      return !1;
  return !0;
}
function Nv(r, e = /* @__PURE__ */ new Set()) {
  if (Array.isArray(r))
    for (const t of r)
      if (ta(t))
        Nv(t.items, e);
      else {
        if (typeof t.value > "u")
          throw new Error("[@mantine/core] Each option must have value property");
        if (typeof t.value != "string")
          throw new Error(
            `[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof t.value}`
          );
        if (e.has(t.value))
          throw new Error(
            `[@mantine/core] Duplicate options are not supported. Option with value "${t.value}" was provided more than once`
          );
        e.add(t.value);
      }
}
function Vl(r, e) {
  return Array.isArray(r) ? r.includes(e) : r === e;
}
function Ov({ data: r, withCheckIcon: e, value: t, checkIconPosition: n, unstyled: o }) {
  if (!ta(r)) {
    const s = e && Vl(t, r.value) && /* @__PURE__ */ N.createElement(Rv, { className: Wt.optionsDropdownCheckIcon });
    return /* @__PURE__ */ N.createElement(
      je.Option,
      {
        value: r.value,
        disabled: r.disabled,
        className: Pn({ [Wt.optionsDropdownOption]: !o }),
        "data-reverse": n === "right" || void 0,
        "data-checked": Vl(t, r.value) || void 0,
        "aria-selected": Vl(t, r.value)
      },
      n === "left" && s,
      /* @__PURE__ */ N.createElement("span", null, r.label),
      n === "right" && s
    );
  }
  const a = r.items.map((s) => /* @__PURE__ */ N.createElement(
    Ov,
    {
      data: s,
      value: t,
      key: s.value,
      unstyled: o,
      withCheckIcon: e,
      checkIconPosition: n
    }
  ));
  return /* @__PURE__ */ N.createElement(je.Group, { label: r.group }, a);
}
function Mv({
  data: r,
  hidden: e,
  hiddenWhenEmpty: t,
  filter: n,
  search: o,
  limit: a,
  maxDropdownHeight: s,
  withScrollArea: l = !0,
  filterOptions: u = !0,
  withCheckIcon: f = !1,
  value: h,
  checkIconPosition: p,
  nothingFoundMessage: g,
  unstyled: v,
  labelId: C
}) {
  Nv(r);
  const _ = typeof o == "string" ? (n || Pv)({
    options: r,
    search: u ? o : "",
    limit: a ?? 1 / 0
  }) : r, I = DN(_), A = _.map((S) => /* @__PURE__ */ N.createElement(
    Ov,
    {
      data: S,
      key: ta(S) ? S.group : S.value,
      withCheckIcon: f,
      value: h,
      checkIconPosition: p,
      unstyled: v
    }
  ));
  return /* @__PURE__ */ N.createElement(je.Dropdown, { hidden: e || t && I }, /* @__PURE__ */ N.createElement(je.Options, { labelledBy: C }, l ? /* @__PURE__ */ N.createElement(
    da.Autosize,
    {
      mah: s ?? 220,
      type: "scroll",
      scrollbarSize: "var(--_combobox-padding)",
      offsetScrollbars: "y",
      className: Wt.optionsDropdownScrollArea
    },
    A
  ) : A, I && g && /* @__PURE__ */ N.createElement(je.Empty, null, g)));
}
const UN = {}, Ad = Ue((r, e) => {
  const t = Ce("Autocomplete", UN, r), {
    classNames: n,
    styles: o,
    unstyled: a,
    vars: s,
    dropdownOpened: l,
    defaultDropdownOpened: u,
    onDropdownClose: f,
    onDropdownOpen: h,
    onFocus: p,
    onBlur: g,
    onClick: v,
    onChange: C,
    data: E,
    value: _,
    defaultValue: I,
    selectFirstOptionOnChange: A,
    onOptionSubmit: S,
    comboboxProps: R,
    readOnly: P,
    disabled: L,
    filter: q,
    limit: U,
    withScrollArea: J,
    maxDropdownHeight: Y,
    size: te,
    id: Z,
    ...fe
  } = t, ne = Ao(Z), we = wv(E), Q = pd(we), [ae, oe] = bo({
    value: _,
    defaultValue: I,
    finalValue: "",
    onChange: C
  }), Pe = Td({
    opened: l,
    defaultOpened: u,
    onDropdownOpen: h,
    onDropdownClose: () => {
      f == null || f(), Pe.resetSelectedOption();
    }
  }), { resolvedClassNames: Qe, resolvedStyles: ot } = Mm({
    props: t,
    styles: o,
    classNames: n
  });
  return ge(() => {
    A && Pe.selectFirstOption();
  }, [A, ae]), /* @__PURE__ */ N.createElement(
    je,
    {
      store: Pe,
      __staticSelector: "Autocomplete",
      classNames: Qe,
      styles: ot,
      unstyled: a,
      readOnly: P,
      onOptionSubmit: (dt) => {
        S == null || S(dt), oe(Q[dt].label), Pe.closeDropdown();
      },
      size: te,
      ...R
    },
    /* @__PURE__ */ N.createElement(je.Target, null, /* @__PURE__ */ N.createElement(
      Xn,
      {
        ref: e,
        ...fe,
        size: te,
        __staticSelector: "Autocomplete",
        disabled: L,
        readOnly: P,
        value: ae,
        onChange: (dt) => {
          oe(dt.currentTarget.value), Pe.openDropdown(), A && Pe.selectFirstOption();
        },
        onFocus: (dt) => {
          Pe.openDropdown(), p == null || p(dt);
        },
        onBlur: (dt) => {
          Pe.closeDropdown(), g == null || g(dt);
        },
        onClick: (dt) => {
          Pe.openDropdown(), v == null || v(dt);
        },
        classNames: Qe,
        styles: ot,
        unstyled: a,
        id: ne
      }
    )),
    /* @__PURE__ */ N.createElement(
      Mv,
      {
        data: we,
        hidden: P || L,
        filter: q,
        search: ae,
        limit: U,
        hiddenWhenEmpty: !0,
        withScrollArea: J,
        maxDropdownHeight: Y,
        unstyled: a,
        labelId: `${ne}-label`
      }
    )
  );
});
Ad.classes = { ...Xn.classes, ...je.classes };
Ad.displayName = "@mantine/core/Autocomplete";
var cc = { root: "m-77c9d27d", inner: "m-80f1301b", loader: "m-a25b86ee", label: "m-811560b9", section: "m-a74036a", group: "m-80d6d844" };
const Eg = {
  orientation: "horizontal"
}, FN = (r, { borderWidth: e }) => ({
  group: { "--button-border-width": $(e) }
}), Rd = Ue((r, e) => {
  const t = Ce("ButtonGroup", Eg, r), {
    className: n,
    style: o,
    classNames: a,
    styles: s,
    unstyled: l,
    orientation: u,
    vars: f,
    borderWidth: h,
    variant: p,
    ...g
  } = Ce("ButtonGroup", Eg, r), v = ut({
    name: "ButtonGroup",
    props: t,
    classes: cc,
    className: n,
    style: o,
    classNames: a,
    styles: s,
    unstyled: l,
    vars: f,
    varsResolver: FN,
    rootSelector: "group"
  });
  return /* @__PURE__ */ N.createElement(
    ke,
    {
      ...v("group"),
      ref: e,
      variant: p,
      mod: { "data-orientation": u },
      role: "group",
      ...g
    }
  );
});
Rd.classes = cc;
Rd.displayName = "@mantine/core/ButtonGroup";
const HN = {}, BN = (r, { radius: e, color: t, gradient: n, variant: o, size: a, justify: s }) => {
  const l = r.variantColorResolver({
    color: t || r.primaryColor,
    theme: r,
    gradient: n,
    variant: o || "filled"
  });
  return {
    root: {
      "--button-justify": s,
      "--button-height": Ht(a, "button-height"),
      "--button-padding-x": Ht(a, "button-padding-x"),
      "--button-fz": a != null && a.includes("compact") ? Nr(a.replace("compact-", "")) : Nr(a),
      "--button-radius": e === void 0 ? void 0 : fi(e),
      "--button-bg": t || o ? l.background : void 0,
      "--button-hover": t || o ? l.hover : void 0,
      "--button-color": t || o ? l.color : void 0,
      "--button-bd": t || o ? l.border : void 0,
      "--button-hover-color": t || o ? l.hoverColor : void 0
    }
  };
}, va = ua((r, e) => {
  const t = Ce("Button", HN, r), {
    style: n,
    vars: o,
    className: a,
    color: s,
    disabled: l,
    children: u,
    leftSection: f,
    rightSection: h,
    fullWidth: p,
    variant: g,
    radius: v,
    loading: C,
    loaderProps: E,
    gradient: _,
    classNames: I,
    styles: A,
    unstyled: S,
    "data-disabled": R,
    ...P
  } = t, L = ut({
    name: "Button",
    props: t,
    classes: cc,
    className: a,
    style: n,
    classNames: I,
    styles: A,
    unstyled: S,
    vars: o,
    varsResolver: BN
  }), q = !!f, U = !!h;
  return /* @__PURE__ */ N.createElement(
    fa,
    {
      ref: e,
      ...L("root", { active: !l && !C && !R }),
      unstyled: S,
      variant: g,
      disabled: l || C,
      mod: {
        disabled: l || R,
        loading: C,
        block: p,
        "with-left-section": q,
        "with-right-section": U
      },
      ...P
    },
    /* @__PURE__ */ N.createElement(ke, { component: "span", ...L("loader"), "aria-hidden": !0 }, /* @__PURE__ */ N.createElement(
      oc,
      {
        color: "var(--button-color)",
        size: "calc(var(--button-height) / 1.8)",
        ...E
      }
    )),
    /* @__PURE__ */ N.createElement("span", { ...L("inner") }, f && /* @__PURE__ */ N.createElement(ke, { component: "span", ...L("section"), mod: { position: "left" } }, f), /* @__PURE__ */ N.createElement(ke, { component: "span", mod: { loading: C }, ...L("label") }, u), h && /* @__PURE__ */ N.createElement(ke, { component: "span", ...L("section"), mod: { position: "right" } }, h))
  );
});
va.classes = cc;
va.displayName = "@mantine/core/Button";
va.Group = Rd;
var xv = { root: "m-7485cace" };
const KN = {}, qN = (r, { size: e, fluid: t }) => ({
  root: {
    "--container-size": t ? void 0 : Ht(e, "container-size")
  }
}), kd = Ue((r, e) => {
  const t = Ce("Container", KN, r), { classNames: n, className: o, style: a, styles: s, unstyled: l, vars: u, fluid: f, ...h } = t, p = ut({
    name: "Container",
    classes: xv,
    props: t,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: u,
    varsResolver: qN
  });
  return /* @__PURE__ */ N.createElement(ke, { ref: e, mod: { fluid: f }, ...p("root"), ...h });
});
kd.classes = xv;
kd.displayName = "@mantine/core/Container";
const $N = {
  searchable: !1,
  withCheckIcon: !0,
  allowDeselect: !0,
  checkIconPosition: "left"
}, lc = Ue((r, e) => {
  const t = Ce("Select", $N, r), {
    classNames: n,
    styles: o,
    unstyled: a,
    vars: s,
    dropdownOpened: l,
    defaultDropdownOpened: u,
    onDropdownClose: f,
    onDropdownOpen: h,
    onFocus: p,
    onBlur: g,
    onClick: v,
    onChange: C,
    data: E,
    value: _,
    defaultValue: I,
    selectFirstOptionOnChange: A,
    onOptionSubmit: S,
    comboboxProps: R,
    readOnly: P,
    disabled: L,
    filter: q,
    limit: U,
    withScrollArea: J,
    maxDropdownHeight: Y,
    size: te,
    searchable: Z,
    rightSection: fe,
    checkIconPosition: ne,
    withCheckIcon: we,
    nothingFoundMessage: Q,
    name: ae,
    form: oe,
    searchValue: Pe,
    defaultSearchValue: Qe,
    onSearchChange: ot,
    allowDeselect: dt,
    error: Qr,
    rightSectionPointerEvents: un,
    id: jt,
    clearable: ir,
    clearButtonProps: dn,
    hiddenInputProps: ar,
    ...Ur
  } = t, fn = vs(() => wv(E), [E]), Kt = vs(() => pd(fn), [fn]), wr = Ao(jt), [Ye, Pt] = bo({
    value: _,
    defaultValue: I,
    finalValue: null,
    onChange: C
  }), Nt = typeof Ye == "string" ? Kt[Ye] : void 0, [On, gt] = bo({
    value: Pe,
    defaultValue: Qe,
    finalValue: Nt ? Nt.label : "",
    onChange: ot
  }), Ot = Td({
    opened: l,
    defaultOpened: u,
    onDropdownOpen: h,
    onDropdownClose: () => {
      f == null || f(), Ot.resetSelectedOption();
    }
  }), { resolvedClassNames: Zn, resolvedStyles: Fr } = Mm({
    props: t,
    styles: o,
    classNames: n
  });
  ge(() => {
    A && Ot.selectFirstOption();
  }, [A, Ye]), ge(() => {
    _ === null && gt(""), typeof _ == "string" && Nt && gt(Nt.label);
  }, [_, Nt]);
  const _t = ir && !!Ye && !L && !P && /* @__PURE__ */ N.createElement(
    je.ClearButton,
    {
      size: te,
      ...dn,
      onClear: () => {
        Pt(null), gt("");
      }
    }
  );
  return /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(
    je,
    {
      store: Ot,
      __staticSelector: "Select",
      classNames: Zn,
      styles: Fr,
      unstyled: a,
      readOnly: P,
      onOptionSubmit: (tt) => {
        S == null || S(tt);
        const Jr = dt && Kt[tt].value === Ye ? null : Kt[tt].value;
        Pt(Jr), gt(typeof Jr == "string" ? Kt[tt].label : ""), Ot.closeDropdown();
      },
      size: te,
      ...R
    },
    /* @__PURE__ */ N.createElement(je.Target, { targetType: Z ? "input" : "button" }, /* @__PURE__ */ N.createElement(
      Xn,
      {
        id: wr,
        ref: e,
        rightSection: fe || _t || /* @__PURE__ */ N.createElement(je.Chevron, { size: te, error: Qr, unstyled: a }),
        rightSectionPointerEvents: un || (_t ? "all" : "none"),
        ...Ur,
        size: te,
        __staticSelector: "Select",
        disabled: L,
        readOnly: P || !Z,
        value: On,
        onChange: (tt) => {
          gt(tt.currentTarget.value), Ot.openDropdown(), A && Ot.selectFirstOption();
        },
        onFocus: (tt) => {
          Z && Ot.openDropdown(), p == null || p(tt);
        },
        onBlur: (tt) => {
          var Jr;
          Z && Ot.closeDropdown(), gt(Ye != null && ((Jr = Kt[Ye]) == null ? void 0 : Jr.label) || ""), g == null || g(tt);
        },
        onClick: (tt) => {
          Z ? Ot.openDropdown() : Ot.toggleDropdown(), v == null || v(tt);
        },
        classNames: Zn,
        styles: Fr,
        unstyled: a,
        pointer: !Z,
        error: Qr
      }
    )),
    /* @__PURE__ */ N.createElement(
      Mv,
      {
        data: fn,
        hidden: P || L,
        filter: q,
        search: On,
        limit: U,
        hiddenWhenEmpty: !Z || !Q,
        withScrollArea: J,
        maxDropdownHeight: Y,
        filterOptions: Z && (Nt == null ? void 0 : Nt.label) !== On,
        value: Ye,
        checkIconPosition: ne,
        withCheckIcon: we,
        nothingFoundMessage: Q,
        unstyled: a,
        labelId: `${wr}-label`
      }
    )
  ), /* @__PURE__ */ N.createElement(
    "input",
    {
      type: "hidden",
      name: ae,
      value: Ye || "",
      form: oe,
      disabled: L,
      ...ar
    }
  ));
});
lc.classes = { ...Xn.classes, ...je.classes };
lc.displayName = "@mantine/core/Select";
var Lv = { root: "m-6d731127" };
const GN = {
  gap: "md",
  align: "stretch",
  justify: "flex-start"
}, zN = (r, { gap: e, align: t, justify: n }) => ({
  root: {
    "--stack-gap": qu(e),
    "--stack-align": t,
    "--stack-justify": n
  }
}), Pd = Ue((r, e) => {
  const t = Ce("Stack", GN, r), {
    classNames: n,
    className: o,
    style: a,
    styles: s,
    unstyled: l,
    vars: u,
    align: f,
    justify: h,
    gap: p,
    variant: g,
    ...v
  } = t, C = ut({
    name: "Stack",
    props: t,
    classes: Lv,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: u,
    varsResolver: zN
  });
  return /* @__PURE__ */ N.createElement(ke, { ref: e, ...C("root"), variant: g, ...v });
});
Pd.classes = Lv;
Pd.displayName = "@mantine/core/Stack";
const VN = {}, Co = Ue((r, e) => {
  const t = Ce("TextInput", VN, r);
  return /* @__PURE__ */ N.createElement(Xn, { component: "input", ref: e, ...t, __staticSelector: "TextInput" });
});
Co.classes = Xn.classes;
Co.displayName = "@mantine/core/TextInput";
const WN = ["h1", "h2", "h3", "h4", "h5", "h6"];
function jN(r, e) {
  const t = e !== void 0 ? e : `h${r}`;
  return WN.includes(t) ? {
    fontSize: `var(--mantine-${t}-font-size)`,
    fontWeight: `var(--mantine-${t}-font-weight)`,
    lineHeight: `var(--mantine-${t}-line-height)`
  } : {
    fontSize: $(t),
    fontWeight: `var(--mantine-h${r}-font-weight)`,
    lineHeight: `var(--mantine-h${r}-line-height)`
  };
}
var Dv = { root: "m-8a5d1357" };
const YN = {
  order: 1
}, QN = (r, { order: e, size: t, lineClamp: n }) => {
  const o = jN(e, t);
  return {
    root: {
      "--title-fw": o.fontWeight,
      "--title-lh": o.lineHeight,
      "--title-fz": o.fontSize,
      "--title-line-clamp": typeof n == "number" ? n.toString() : void 0
    }
  };
}, Bs = Ue((r, e) => {
  const t = Ce("Title", YN, r), {
    classNames: n,
    className: o,
    style: a,
    styles: s,
    unstyled: l,
    order: u,
    vars: f,
    size: h,
    variant: p,
    lineClamp: g,
    ...v
  } = t, C = ut({
    name: "Title",
    props: t,
    classes: Dv,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: f,
    varsResolver: QN
  });
  return [1, 2, 3, 4, 5, 6].includes(u) ? /* @__PURE__ */ N.createElement(
    ke,
    {
      ...C("root"),
      component: `h${u}`,
      variant: p,
      ref: e,
      mod: { order: u, "data-line-clamp": typeof g == "number" },
      size: h,
      ...v
    }
  ) : null;
});
Bs.classes = Dv;
Bs.displayName = "@mantine/core/Title";
var Uv = { exports: {} }, JN = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", XN = JN, ZN = XN;
function Fv() {
}
function Hv() {
}
Hv.resetWarningCache = Fv;
var e1 = function() {
  function r(n, o, a, s, l, u) {
    if (u !== ZN) {
      var f = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw f.name = "Invariant Violation", f;
    }
  }
  r.isRequired = r;
  function e() {
    return r;
  }
  var t = {
    array: r,
    bigint: r,
    bool: r,
    func: r,
    number: r,
    object: r,
    string: r,
    symbol: r,
    any: r,
    arrayOf: e,
    element: r,
    elementType: r,
    instanceOf: e,
    node: r,
    objectOf: e,
    oneOf: e,
    oneOfType: e,
    shape: e,
    exact: e,
    checkPropTypes: Hv,
    resetWarningCache: Fv
  };
  return t.PropTypes = t, t;
};
Uv.exports = e1();
var t1 = Uv.exports;
const lo = /* @__PURE__ */ u0(t1);
var r1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, n1 = Object.defineProperty, o1 = Object.defineProperties, i1 = Object.getOwnPropertyDescriptors, Ks = Object.getOwnPropertySymbols, Bv = Object.prototype.hasOwnProperty, Kv = Object.prototype.propertyIsEnumerable, bg = (r, e, t) => e in r ? n1(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, _g = (r, e) => {
  for (var t in e || (e = {}))
    Bv.call(e, t) && bg(r, t, e[t]);
  if (Ks)
    for (var t of Ks(e))
      Kv.call(e, t) && bg(r, t, e[t]);
  return r;
}, a1 = (r, e) => o1(r, i1(e)), s1 = (r, e) => {
  var t = {};
  for (var n in r)
    Bv.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
  if (r != null && Ks)
    for (var n of Ks(r))
      e.indexOf(n) < 0 && Kv.call(r, n) && (t[n] = r[n]);
  return t;
}, qv = (r, e, t) => {
  const n = lt(
    (o, a) => {
      var s = o, { color: l = "currentColor", size: u = 24, stroke: f = 2, children: h } = s, p = s1(s, ["color", "size", "stroke", "children"]);
      return hp(
        "svg",
        _g(a1(_g({
          ref: a
        }, r1), {
          width: u,
          height: u,
          stroke: l,
          strokeWidth: f,
          className: `tabler-icon tabler-icon-${r}`
        }), p),
        [...t.map(([g, v]) => hp(g, v)), ...h || []]
      );
    }
  );
  return n.propTypes = {
    color: lo.string,
    size: lo.oneOfType([lo.string, lo.number]),
    stroke: lo.oneOfType([lo.string, lo.number])
  }, n.displayName = `${e}`, n;
}, c1 = qv("check", "IconCheck", [
  ["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]
]), l1 = qv("dots", "IconDots", [
  ["path", { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
  ["path", { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]
]);
function u1({ indeterminate: r, ...e }) {
  return r ? /* @__PURE__ */ Te.jsx(l1, { ...e }) : /* @__PURE__ */ Te.jsx(c1, { ...e });
}
const d1 = {
  components: {
    Checkbox: ma.extend({
      defaultProps: {
        icon: u1,
        variant: "outline"
      },
      classNames: {
        input: "checkBox"
      }
    })
  }
}, Sg = {
  names: {
    signUpSignIn: "b2c_1a_signupsignin_c",
    forgotPassword: "b2c_1a_passwordreset_c",
    editProfile: "b2c_1a_profileedit_c"
  },
  authorities: {
    signUpSignIn: {
      authority: "https://authentication.buildingsmart.org/tfp/buildingsmartservices.onmicrosoft.com/b2c_1a_signupsignin_c"
    },
    forgotPassword: {
      authority: "https://authentication.buildingsmart.org/tfp/buildingsmartservices.onmicrosoft.com/b2c_1a_passwordreset_c"
    },
    editProfile: {
      authority: "https://authentication.buildingsmart.org/tfp/buildingsmartservices.onmicrosoft.com/b2c_1a_profileedit_c"
    }
  },
  authorityDomain: "authentication.buildingsmart.org"
}, f1 = {
  auth: {
    clientId: "0fcd615b-f2b7-4514-9046-7b3e545ba341",
    authority: Sg.authorities.signUpSignIn.authority,
    knownAuthorities: [Sg.authorityDomain],
    redirectUri: "/react-bsdd-search/",
    postLogoutRedirectUri: "/react-bsdd-search/",
    navigateToLoginRequestUrl: !1
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: !1
  },
  system: {
    loggerOptions: {
      loggerCallback: (r, e, t) => {
        if (!t)
          switch (r) {
            case st.Error:
              console.error(e);
              return;
            case st.Info:
              console.info(e);
              return;
            case st.Verbose:
              console.debug(e);
              return;
            case st.Warning:
              console.warn(e);
              return;
            default:
              return;
          }
      }
    }
  }
};
class h1 {
  constructor(e = {}) {
    zt(this, "baseUrl", "https://api.bsdd.buildingsmart.org/");
    zt(this, "securityData", null);
    zt(this, "securityWorker");
    zt(this, "abortControllers", /* @__PURE__ */ new Map());
    zt(this, "customFetch", (...e) => fetch(...e));
    zt(this, "baseApiParams", {
      credentials: "same-origin",
      headers: {},
      redirect: "follow",
      referrerPolicy: "no-referrer"
    });
    zt(this, "setSecurityData", (e) => {
      this.securityData = e;
    });
    zt(this, "contentFormatters", {
      "application/json": (e) => e !== null && (typeof e == "object" || typeof e == "string") ? JSON.stringify(e) : e,
      "text/plain": (e) => e !== null && typeof e != "string" ? JSON.stringify(e) : e,
      "multipart/form-data": (e) => Object.keys(e || {}).reduce((t, n) => {
        const o = e[n];
        return t.append(
          n,
          o instanceof Blob ? o : typeof o == "object" && o !== null ? JSON.stringify(o) : `${o}`
        ), t;
      }, new FormData()),
      "application/x-www-form-urlencoded": (e) => this.toQueryString(e)
    });
    zt(this, "createAbortSignal", (e) => {
      if (this.abortControllers.has(e)) {
        const n = this.abortControllers.get(e);
        return n ? n.signal : void 0;
      }
      const t = new AbortController();
      return this.abortControllers.set(e, t), t.signal;
    });
    zt(this, "abortRequest", (e) => {
      const t = this.abortControllers.get(e);
      t && (t.abort(), this.abortControllers.delete(e));
    });
    zt(this, "request", async ({
      body: e,
      secure: t,
      path: n,
      type: o,
      query: a,
      format: s,
      baseUrl: l,
      cancelToken: u,
      ...f
    }) => {
      const h = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {}, p = this.mergeRequestParams(f, h), g = a && this.toQueryString(a), v = this.contentFormatters[
        o || "application/json"
        /* Json */
      ], C = s || p.format;
      return this.customFetch(`${l || this.baseUrl || ""}${n}${g ? `?${g}` : ""}`, {
        ...p,
        headers: {
          ...p.headers || {},
          ...o && o !== "multipart/form-data" ? { "Content-Type": o } : {}
        },
        signal: (u ? this.createAbortSignal(u) : p.signal) || null,
        body: typeof e > "u" || e === null ? null : v(e)
      }).then(async (E) => {
        const _ = E;
        _.data = null, _.error = null;
        const I = C ? await E[C]().then((A) => (_.ok ? _.data = A : _.error = A, _)).catch((A) => (_.error = A, _)) : _;
        if (u && this.abortControllers.delete(u), !E.ok)
          throw I;
        return I;
      });
    });
    Object.assign(this, e);
  }
  encodeQueryParam(e, t) {
    return `${encodeURIComponent(e)}=${encodeURIComponent(typeof t == "number" ? t : `${t}`)}`;
  }
  addQueryParam(e, t) {
    return this.encodeQueryParam(t, e[t]);
  }
  addArrayQueryParam(e, t) {
    return e[t].map((o) => this.encodeQueryParam(t, o)).join("&");
  }
  toQueryString(e) {
    const t = e || {};
    return Object.keys(t).filter((o) => typeof t[o] < "u").map((o) => Array.isArray(t[o]) ? this.addArrayQueryParam(t, o) : this.addQueryParam(t, o)).join("&");
  }
  addQueryParams(e) {
    const t = this.toQueryString(e);
    return t ? `?${t}` : "";
  }
  mergeRequestParams(e, t) {
    return {
      ...this.baseApiParams,
      ...e,
      ...t || {},
      headers: {
        ...this.baseApiParams.headers || {},
        ...e.headers || {},
        ...t && t.headers || {}
      }
    };
  }
}
/**
 * @title Dictionaries API
 * @version v1
 * @license MIT license (https://bsddprototype2020.blob.core.windows.net/public/Copyright_2020_buildingSMART_International.txt)
 * @baseUrl https://api.bsdd.buildingsmart.org/
 * @contact Support <bsdd_support@buildingsmart.org> (https://github.com/buildingSMART/bSDD)
 *
 * <p>API to access the buildingSMART Data Dictionary.</p><p>For manually uploading import files, please go to <a href="https://manage.bsdd.buildingsmart.org">bSDD Management portal</a>. Version history can be found at <a href="https://github.com/buildingSMART/bSDD/blob/master/API%20version%20history.md">Version history</a>.</p><p>Keep an eye on (planned) updates: <a href="https://forums.buildingsmart.org/t/bsdd-tech-updates/4889">bSDD tech updates</a></p><h3>For client developers</h3><p>If you're creating a desktop client that only calls the not secured APIs, you're ready to go.<br/>If you don't use the secured APIs but want to call the other APIs from your website or SPA, then we need the URL of your website to allow CORS.</p><p>If you are going to build a client that is going to use secured APIs, you must request a Client ID. You can do so by sending us an email and give:</p><ul><li>the name of the client application</li><li>type of application:<ul><li>Web application</li><li>Single-page application</li><li>iOS / macOS, Object-C, Swift, Xamarin</li><li>Adroid - Java, Kotlin, Xamarin</li><li>Mobile/desktop</li></ul> <li>which development language are you using? (sometimes the redirectUri to be configured depends on the used library)</li><li>if it is a website or SPA, specify the return url (the login page will redirect to this url after user has logged in)</li></ul>
 */
class p1 extends h1 {
  constructor() {
    super(...arguments);
    zt(this, "api", {
      /**
       * No description
       *
       * @tags Class
       * @name ClassV1List
       * @summary Get Class details - this API replaces api/Classification
      Changes:
      - now returns Material as well
      - "Classification" has been renamed to "Class"
      - "Domain" has been renamed to "Dictionary"
      - "NamespaceUri" has been renamed to "Uri"
       * @request GET:/api/Class/v1
       */
      classV1List: (t, n = {}) => this.request({
        path: "/api/Class/v1",
        method: "GET",
        query: t,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Dictionary
       * @name DictionaryV1List
       * @summary Get list of available Dictionaries. This one replaces /api/Domain. Changes:
      - "Domain" has been renamed to "Dictionary"
      - "NamespaceUri" has been renamed to "Uri"
       * @request GET:/api/Dictionary/v1
       */
      dictionaryV1List: (t, n = {}) => this.request({
        path: "/api/Dictionary/v1",
        method: "GET",
        query: t,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Dictionary
       * @name DictionaryV1ClassesList
       * @summary Get Dictionary with tree of classes.
      This one replaces /api/Domain. See https://github.com/buildingSMART/bSDD/blob/master/Documentation/API%20version%20history.md for changes.
       * @request GET:/api/Dictionary/v1/Classes
       */
      dictionaryV1ClassesList: (t, n = {}) => this.request({
        path: "/api/Dictionary/v1/Classes",
        method: "GET",
        query: t,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Dictionary
       * @name DictionaryV1PropertiesList
       * @summary Get Dictionary with its properties
       * @request GET:/api/Dictionary/v1/Properties
       */
      dictionaryV1PropertiesList: (t, n = {}) => this.request({
        path: "/api/Dictionary/v1/Properties",
        method: "GET",
        query: t,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Dictionary
       * @name DictionaryDownloadSketchupV1Create
       * @summary Download a file with an export of a dictionary in format supported by Sketchup.
      This API replaces /api/RequestExportFile/preview
       * @request POST:/api/DictionaryDownload/sketchup/v1
       * @secure
       */
      dictionaryDownloadSketchupV1Create: (t, n = {}) => this.request({
        path: "/api/DictionaryDownload/sketchup/v1",
        method: "POST",
        query: t,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Dictionary Update
       * @name UploadImportFileV1Create
       * @summary Upload a bSDD import model json file, see https://github.com/buildingSMART/bSDD/tree/master/Model/Import%20Model for more information
       * @request POST:/api/UploadImportFile/v1
       * @secure
       */
      uploadImportFileV1Create: (t, n = {}) => this.request({
        path: "/api/UploadImportFile/v1",
        method: "POST",
        body: t,
        secure: !0,
        type: "multipart/form-data",
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Dictionary Update
       * @name DictionaryV1Update
       * @summary Update the status of a Dictionary
       * @request PUT:/api/Dictionary/v1/{organizationCode}/{code}/{version}
       * @secure
       */
      dictionaryV1Update: (t, n, o, a, s = {}) => this.request({
        path: `/api/Dictionary/v1/${t}/${n}/${o}`,
        method: "PUT",
        body: a,
        secure: !0,
        type: "application/json",
        ...s
      }),
      /**
       * No description
       *
       * @tags Dictionary Update
       * @name DictionaryV1Delete
       * @summary Delete a dictionary version
       * @request DELETE:/api/Dictionary/v1/{organizationCode}/{code}/{version}
       * @secure
       */
      dictionaryV1Delete: (t, n, o, a = {}) => this.request({
        path: `/api/Dictionary/v1/${t}/${n}/${o}`,
        method: "DELETE",
        secure: !0,
        ...a
      }),
      /**
       * No description
       *
       * @tags Dictionary Update
       * @name DictionaryV1Delete2
       * @summary Delete all versions of a dictionary
       * @request DELETE:/api/Dictionary/v1/{organizationCode}/{code}
       * @originalName dictionaryV1Delete
       * @duplicate
       * @secure
       */
      dictionaryV1Delete2: (t, n, o = {}) => this.request({
        path: `/api/Dictionary/v1/${t}/${n}`,
        method: "DELETE",
        secure: !0,
        ...o
      }),
      /**
       * No description
       *
       * @tags Property
       * @name PropertyV4List
       * @summary Get Property details
       * @request GET:/api/Property/v4
       */
      propertyV4List: (t, n = {}) => this.request({
        path: "/api/Property/v4",
        method: "GET",
        query: t,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Property
       * @name PropertyValueV2List
       * @summary Get Property Value details
       * @request GET:/api/PropertyValue/v2
       */
      propertyValueV2List: (t, n = {}) => this.request({
        path: "/api/PropertyValue/v2",
        method: "GET",
        query: t,
        format: "json",
        ...n
      }),
      /**
       * @description The details can be requested per Class via the Class API
       *
       * @tags Search
       * @name TextSearchV1List
       * @summary Search the bSDD database using free text, get list of Classes and/or Properties matching the text.
      Pagination options are for Classes and Properties combined. So if result consists of 10 classes and 5 properties, TotalCount will be 15. Classes will be listed first, so if you then use Offset=10 and Limit=5, you will get the 5 properties.
       * @request GET:/api/TextSearch/v1
       */
      textSearchV1List: (t, n = {}) => this.request({
        path: "/api/TextSearch/v1",
        method: "GET",
        query: t,
        format: "json",
        ...n
      }),
      /**
       * @description The details can be requested per Class via the Class API
       *
       * @tags Search
       * @name SearchInDictionaryV1List
       * @summary Search the bSDD database, get list of Classes without details.
      This version uses new naming and returns one Dictionary instead of a list with always one Dictionary.
      This API replaces /api/SearchList.
       * @request GET:/api/SearchInDictionary/v1
       */
      searchInDictionaryV1List: (t, n = {}) => this.request({
        path: "/api/SearchInDictionary/v1",
        method: "GET",
        query: t,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags Search
       * @name ClassSearchV1List
       * @summary Search the bSDD database using free text, get list of Classes matching the text and optional additional filters.
      Changes with obsolete api/ClassificationSearch:
      - "Classification" has been renamed to "Class"
      - "Domain" has been renamed to "Dictionary"
      - "NamespaceUri" has been renamed to "Uri"
       * @request GET:/api/Class/Search/v1
       */
      classSearchV1List: (t, n = {}) => this.request({
        path: "/api/Class/Search/v1",
        method: "GET",
        query: t,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags z Lookup data
       * @name UnitV1List
       * @summary Get list of all units
       * @request GET:/api/Unit/v1
       */
      unitV1List: (t = {}) => this.request({
        path: "/api/Unit/v1",
        method: "GET",
        format: "json",
        ...t
      }),
      /**
       * No description
       *
       * @tags z Lookup data
       * @name ReferenceDocumentV1List
       * @summary Get list of all ReferenceDocuments
       * @request GET:/api/ReferenceDocument/v1
       */
      referenceDocumentV1List: (t = {}) => this.request({
        path: "/api/ReferenceDocument/v1",
        method: "GET",
        format: "json",
        ...t
      }),
      /**
       * No description
       *
       * @tags z Lookup data
       * @name LanguageV1List
       * @summary Get list of available Languages
       * @request GET:/api/Language/v1
       */
      languageV1List: (t = {}) => this.request({
        path: "/api/Language/v1",
        method: "GET",
        format: "json",
        ...t
      }),
      /**
       * No description
       *
       * @tags z Lookup data
       * @name CountryV1List
       * @summary Get list of all Countries
       * @request GET:/api/Country/v1
       */
      countryV1List: (t = {}) => this.request({
        path: "/api/Country/v1",
        method: "GET",
        format: "json",
        ...t
      }),
      /**
       * @description The details can be requested per Classification via the Classification API
       *
       * @tags zz Obsolete APIs
       * @name TextSearchListOpenV6List
       * @summary Search the bSDD database using free text, get list of Classifications and/or Properties matching the text.
       * @request GET:/api/TextSearchListOpen/v6
       * @deprecated
       */
      textSearchListOpenV6List: (t, n = {}) => this.request({
        path: "/api/TextSearchListOpen/v6",
        method: "GET",
        query: t,
        format: "json",
        ...n
      }),
      /**
       * @description The details can be requested per Classification via the Classification API
       *
       * @tags zz Obsolete APIs
       * @name TextSearchListOpenV5List
       * @summary Search the bSDD database using free text, get list of Classifications and/or Properties matching the text.
       * @request GET:/api/TextSearchListOpen/v5
       * @deprecated
       */
      textSearchListOpenV5List: (t, n = {}) => this.request({
        path: "/api/TextSearchListOpen/v5",
        method: "GET",
        query: t,
        format: "json",
        ...n
      }),
      /**
       * @description The details can be requested per Classification via the Classification API
       *
       * @tags zz Obsolete APIs
       * @name SearchListV2List
       * @summary Secured version of the "Search List API".
      Search the bSDD database, get list of Classifications without details.
       * @request GET:/api/SearchList/v2
       * @deprecated
       * @secure
       */
      searchListV2List: (t, n = {}) => this.request({
        path: "/api/SearchList/v2",
        method: "GET",
        query: t,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * @description The details can be requested per Classification via the Classification API
       *
       * @tags zz Obsolete APIs
       * @name SearchListOpenV2List
       * @summary Search the bSDD database, get list of Classifications without details.
       * @request GET:/api/SearchListOpen/v2
       * @deprecated
       */
      searchListOpenV2List: (t, n = {}) => this.request({
        path: "/api/SearchListOpen/v2",
        method: "GET",
        query: t,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags zz Obsolete APIs
       * @name RequestExportFilePreviewCreate
       * @summary PREVIEW
      Request a file with an export of a domain.
      Only format "Sketchup" is supported. You get an export in xsd format with limited content.
      OBSOLETE: pls use /api/DictionaryDownload/sketchup/v1
       * @request POST:/api/RequestExportFile/preview
       * @deprecated
       * @secure
       */
      requestExportFilePreviewCreate: (t, n = {}) => this.request({
        path: "/api/RequestExportFile/preview",
        method: "POST",
        query: t,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags zz Obsolete APIs
       * @name PropertyV3List
       * @summary Get Property details
       * @request GET:/api/Property/v3
       * @deprecated
       */
      propertyV3List: (t, n = {}) => this.request({
        path: "/api/Property/v3",
        method: "GET",
        query: t,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags zz Obsolete APIs
       * @name PropertyV2List
       * @summary Get Property details
       * @request GET:/api/Property/v2
       * @deprecated
       */
      propertyV2List: (t, n = {}) => this.request({
        path: "/api/Property/v2",
        method: "GET",
        query: t,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags zz Obsolete APIs
       * @name PropertyValueV1List
       * @summary Get Property Value details
       * @request GET:/api/PropertyValue/v1
       * @deprecated
       */
      propertyValueV1List: (t, n = {}) => this.request({
        path: "/api/PropertyValue/v1",
        method: "GET",
        query: t,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags zz Obsolete APIs
       * @name MaterialV2List
       * @summary Get Material details
       * @request GET:/api/Material/v2
       * @deprecated
       */
      materialV2List: (t, n = {}) => this.request({
        path: "/api/Material/v2",
        method: "GET",
        query: t,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags zz Obsolete APIs
       * @name MaterialV1List
       * @summary Get Material details
       * @request GET:/api/Material/v1
       * @deprecated
       */
      materialV1List: (t, n = {}) => this.request({
        path: "/api/Material/v1",
        method: "GET",
        query: t,
        format: "json",
        ...n
      }),
      /**
       * @description This is a preview version! Contracts may change. The details can be requested per Material via the Material API
       *
       * @tags zz Obsolete APIs
       * @name MaterialSearchOpenPreviewList
       * @summary Search the bSDD database, get list of Materials without details.
       * @request GET:/api/Material/SearchOpen/preview
       * @deprecated
       */
      materialSearchOpenPreviewList: (t, n = {}) => this.request({
        path: "/api/Material/SearchOpen/preview",
        method: "GET",
        query: t,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags zz Obsolete APIs
       * @name DomainV3List
       * @summary Get list of available Domains
       * @request GET:/api/Domain/v3
       * @deprecated
       */
      domainV3List: (t, n = {}) => this.request({
        path: "/api/Domain/v3",
        method: "GET",
        query: t,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags zz Obsolete APIs
       * @name DomainV3ClassificationsList
       * @summary Get Domain with the classification and/or material tree
       * @request GET:/api/Domain/v3/Classifications
       * @deprecated
       */
      domainV3ClassificationsList: (t, n = {}) => this.request({
        path: "/api/Domain/v3/Classifications",
        method: "GET",
        query: t,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags zz Obsolete APIs
       * @name DomainV3Update
       * @summary UpdateDomainStatus
       * @request PUT:/api/Domain/v3/{organizationCode}/{code}/{version}
       * @deprecated
       * @secure
       */
      domainV3Update: (t, n, o, a, s = {}) => this.request({
        path: `/api/Domain/v3/${t}/${n}/${o}`,
        method: "PUT",
        body: a,
        secure: !0,
        type: "application/json",
        ...s
      }),
      /**
       * No description
       *
       * @tags zz Obsolete APIs
       * @name DomainV3Delete
       * @summary Delete domain version
       * @request DELETE:/api/Domain/v3/{organizationCode}/{code}/{version}
       * @deprecated
       * @secure
       */
      domainV3Delete: (t, n, o, a = {}) => this.request({
        path: `/api/Domain/v3/${t}/${n}/${o}`,
        method: "DELETE",
        secure: !0,
        ...a
      }),
      /**
       * No description
       *
       * @tags zz Obsolete APIs
       * @name DomainV3Delete2
       * @summary Delete all versions of domain
       * @request DELETE:/api/Domain/v3/{organizationCode}/{code}
       * @deprecated
       * @originalName domainV3Delete
       * @duplicate
       * @secure
       */
      domainV3Delete2: (t, n, o = {}) => this.request({
        path: `/api/Domain/v3/${t}/${n}`,
        method: "DELETE",
        secure: !0,
        ...o
      }),
      /**
       * No description
       *
       * @tags zz Obsolete APIs
       * @name DomainV2List
       * @summary Get list of available Domains
       * @request GET:/api/Domain/v2
       * @deprecated
       */
      domainV2List: (t, n = {}) => this.request({
        path: "/api/Domain/v2",
        method: "GET",
        query: t,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags zz Obsolete APIs
       * @name DomainV2ClassificationsList
       * @summary Get Domain with the classification tree
       * @request GET:/api/Domain/v2/Classifications
       * @deprecated
       */
      domainV2ClassificationsList: (t, n = {}) => this.request({
        path: "/api/Domain/v2/Classifications",
        method: "GET",
        query: t,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags zz Obsolete APIs
       * @name ClassificationV4List
       * @summary Get Classification details - please use api/Class/v1 instead
       * @request GET:/api/Classification/v4
       * @deprecated
       */
      classificationV4List: (t, n = {}) => this.request({
        path: "/api/Classification/v4",
        method: "GET",
        query: t,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags zz Obsolete APIs
       * @name ClassificationV3List
       * @summary Get Classification details - please use api/Class/v1 instead
       * @request GET:/api/Classification/v3
       * @deprecated
       */
      classificationV3List: (t, n = {}) => this.request({
        path: "/api/Classification/v3",
        method: "GET",
        query: t,
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags zz Obsolete APIs
       * @name ClassificationSearchOpenV1List
       * @summary Search the bSDD database using free text - please use api/Class/Search/v1 instead
       * @request GET:/api/ClassificationSearchOpen/v1
       * @deprecated
       */
      classificationSearchOpenV1List: (t, n = {}) => this.request({
        path: "/api/ClassificationSearchOpen/v1",
        method: "GET",
        query: t,
        format: "json",
        ...n
      })
    });
  }
}
class So extends p1 {
  constructor(e) {
    super({ baseUrl: e });
  }
}
const Nd = {
  test: "https://test.bsdd.buildingsmart.org",
  production: "https://api.bsdd.buildingsmart.org"
}, g1 = "production", m1 = B0, hr = P0;
function $v(r) {
  return {
    type: "IfcClassification",
    source: r == null ? void 0 : r.organizationCodeOwner,
    edition: (r == null ? void 0 : r.version) || void 0,
    editionDate: (r == null ? void 0 : r.releaseDate) || void 0,
    name: r == null ? void 0 : r.name,
    location: r == null ? void 0 : r.uri
    // specification: bsddDictionary?.uri,
  };
}
function v1(r) {
  if (!r)
    return { type: void 0, predefinedType: void 0 };
  const e = r.length - [...r].reverse().findIndex((o) => o === o.toLowerCase()), [t, n] = [
    r.slice(0, e),
    r.slice(e)
  ].map((o) => o || void 0);
  return { type: t, predefinedType: n };
}
function At(r) {
  return `Minified Redux error #${r}; visit https://redux.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `;
}
var y1 = /* @__PURE__ */ (() => typeof Symbol == "function" && Symbol.observable || "@@observable")(), Tg = y1, Wl = () => Math.random().toString(36).substring(7).split("").join("."), C1 = {
  INIT: `@@redux/INIT${Wl()}`,
  REPLACE: `@@redux/REPLACE${Wl()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Wl()}`
}, qs = C1;
function Od(r) {
  if (typeof r != "object" || r === null)
    return !1;
  let e = r;
  for (; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(r) === e || Object.getPrototypeOf(r) === null;
}
function Gv(r, e, t) {
  if (typeof r != "function")
    throw new Error(At(2));
  if (typeof e == "function" && typeof t == "function" || typeof t == "function" && typeof arguments[3] == "function")
    throw new Error(At(0));
  if (typeof e == "function" && typeof t > "u" && (t = e, e = void 0), typeof t < "u") {
    if (typeof t != "function")
      throw new Error(At(1));
    return t(Gv)(r, e);
  }
  let n = r, o = e, a = /* @__PURE__ */ new Map(), s = a, l = 0, u = !1;
  function f() {
    s === a && (s = /* @__PURE__ */ new Map(), a.forEach((_, I) => {
      s.set(I, _);
    }));
  }
  function h() {
    if (u)
      throw new Error(At(3));
    return o;
  }
  function p(_) {
    if (typeof _ != "function")
      throw new Error(At(4));
    if (u)
      throw new Error(At(5));
    let I = !0;
    f();
    const A = l++;
    return s.set(A, _), function() {
      if (I) {
        if (u)
          throw new Error(At(6));
        I = !1, f(), s.delete(A), a = null;
      }
    };
  }
  function g(_) {
    if (!Od(_))
      throw new Error(At(7));
    if (typeof _.type > "u")
      throw new Error(At(8));
    if (typeof _.type != "string")
      throw new Error(At(17));
    if (u)
      throw new Error(At(9));
    try {
      u = !0, o = n(o, _);
    } finally {
      u = !1;
    }
    return (a = s).forEach((A) => {
      A();
    }), _;
  }
  function v(_) {
    if (typeof _ != "function")
      throw new Error(At(10));
    n = _, g({
      type: qs.REPLACE
    });
  }
  function C() {
    const _ = p;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(I) {
        if (typeof I != "object" || I === null)
          throw new Error(At(11));
        function A() {
          const R = I;
          R.next && R.next(h());
        }
        return A(), {
          unsubscribe: _(A)
        };
      },
      [Tg]() {
        return this;
      }
    };
  }
  return g({
    type: qs.INIT
  }), {
    dispatch: g,
    subscribe: p,
    getState: h,
    replaceReducer: v,
    [Tg]: C
  };
}
function w1(r) {
  Object.keys(r).forEach((e) => {
    const t = r[e];
    if (typeof t(void 0, {
      type: qs.INIT
    }) > "u")
      throw new Error(At(12));
    if (typeof t(void 0, {
      type: qs.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(At(13));
  });
}
function E1(r) {
  const e = Object.keys(r), t = {};
  for (let a = 0; a < e.length; a++) {
    const s = e[a];
    typeof r[s] == "function" && (t[s] = r[s]);
  }
  const n = Object.keys(t);
  let o;
  try {
    w1(t);
  } catch (a) {
    o = a;
  }
  return function(s = {}, l) {
    if (o)
      throw o;
    let u = !1;
    const f = {};
    for (let h = 0; h < n.length; h++) {
      const p = n[h], g = t[p], v = s[p], C = g(v, l);
      if (typeof C > "u")
        throw l && l.type, new Error(At(14));
      f[p] = C, u = u || C !== v;
    }
    return u = u || n.length !== Object.keys(s).length, u ? f : s;
  };
}
function $s(...r) {
  return r.length === 0 ? (e) => e : r.length === 1 ? r[0] : r.reduce((e, t) => (...n) => e(t(...n)));
}
function b1(...r) {
  return (e) => (t, n) => {
    const o = e(t, n);
    let a = () => {
      throw new Error(At(15));
    };
    const s = {
      getState: o.getState,
      dispatch: (u, ...f) => a(u, ...f)
    }, l = r.map((u) => u(s));
    return a = $s(...l)(o.dispatch), {
      ...o,
      dispatch: a
    };
  };
}
function _1(r) {
  return Od(r) && "type" in r && typeof r.type == "string";
}
var zv = Symbol.for("immer-nothing"), Ig = Symbol.for("immer-draftable"), yr = Symbol.for("immer-state");
function Gr(r, ...e) {
  throw new Error(
    `[Immer] minified error nr: ${r}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var li = Object.getPrototypeOf;
function jn(r) {
  return !!r && !!r[yr];
}
function kn(r) {
  var e;
  return r ? Vv(r) || Array.isArray(r) || !!r[Ig] || !!((e = r.constructor) != null && e[Ig]) || dc(r) || fc(r) : !1;
}
var S1 = Object.prototype.constructor.toString();
function Vv(r) {
  if (!r || typeof r != "object")
    return !1;
  const e = li(r);
  if (e === null)
    return !0;
  const t = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
  return t === Object ? !0 : typeof t == "function" && Function.toString.call(t) === S1;
}
function ra(r, e) {
  uc(r) === 0 ? Object.entries(r).forEach(([t, n]) => {
    e(t, n, r);
  }) : r.forEach((t, n) => e(n, t, r));
}
function uc(r) {
  const e = r[yr];
  return e ? e.type_ : Array.isArray(r) ? 1 : dc(r) ? 2 : fc(r) ? 3 : 0;
}
function Eu(r, e) {
  return uc(r) === 2 ? r.has(e) : Object.prototype.hasOwnProperty.call(r, e);
}
function Wv(r, e, t) {
  const n = uc(r);
  n === 2 ? r.set(e, t) : n === 3 ? r.add(t) : r[e] = t;
}
function T1(r, e) {
  return r === e ? r !== 0 || 1 / r === 1 / e : r !== r && e !== e;
}
function dc(r) {
  return r instanceof Map;
}
function fc(r) {
  return r instanceof Set;
}
function fo(r) {
  return r.copy_ || r.base_;
}
function bu(r, e) {
  if (dc(r))
    return new Map(r);
  if (fc(r))
    return new Set(r);
  if (Array.isArray(r))
    return Array.prototype.slice.call(r);
  if (!e && Vv(r))
    return li(r) ? { ...r } : Object.assign(/* @__PURE__ */ Object.create(null), r);
  const t = Object.getOwnPropertyDescriptors(r);
  delete t[yr];
  let n = Reflect.ownKeys(t);
  for (let o = 0; o < n.length; o++) {
    const a = n[o], s = t[a];
    s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (t[a] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: s.enumerable,
      value: r[a]
    });
  }
  return Object.create(li(r), t);
}
function Md(r, e = !1) {
  return hc(r) || jn(r) || !kn(r) || (uc(r) > 1 && (r.set = r.add = r.clear = r.delete = I1), Object.freeze(r), e && ra(r, (t, n) => Md(n, !0))), r;
}
function I1() {
  Gr(2);
}
function hc(r) {
  return Object.isFrozen(r);
}
var A1 = {};
function To(r) {
  const e = A1[r];
  return e || Gr(0, r), e;
}
var na;
function jv() {
  return na;
}
function R1(r, e) {
  return {
    drafts_: [],
    parent_: r,
    immer_: e,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Ag(r, e) {
  e && (To("Patches"), r.patches_ = [], r.inversePatches_ = [], r.patchListener_ = e);
}
function _u(r) {
  Su(r), r.drafts_.forEach(k1), r.drafts_ = null;
}
function Su(r) {
  r === na && (na = r.parent_);
}
function Rg(r) {
  return na = R1(na, r);
}
function k1(r) {
  const e = r[yr];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : e.revoked_ = !0;
}
function kg(r, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const t = e.drafts_[0];
  return r !== void 0 && r !== t ? (t[yr].modified_ && (_u(e), Gr(4)), kn(r) && (r = Gs(e, r), e.parent_ || zs(e, r)), e.patches_ && To("Patches").generateReplacementPatches_(
    t[yr].base_,
    r,
    e.patches_,
    e.inversePatches_
  )) : r = Gs(e, t, []), _u(e), e.patches_ && e.patchListener_(e.patches_, e.inversePatches_), r !== zv ? r : void 0;
}
function Gs(r, e, t) {
  if (hc(e))
    return e;
  const n = e[yr];
  if (!n)
    return ra(
      e,
      (o, a) => Pg(r, n, e, o, a, t)
    ), e;
  if (n.scope_ !== r)
    return e;
  if (!n.modified_)
    return zs(r, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const o = n.copy_;
    let a = o, s = !1;
    n.type_ === 3 && (a = new Set(o), o.clear(), s = !0), ra(
      a,
      (l, u) => Pg(r, n, o, l, u, t, s)
    ), zs(r, o, !1), t && r.patches_ && To("Patches").generatePatches_(
      n,
      t,
      r.patches_,
      r.inversePatches_
    );
  }
  return n.copy_;
}
function Pg(r, e, t, n, o, a, s) {
  if (jn(o)) {
    const l = a && e && e.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Eu(e.assigned_, n) ? a.concat(n) : void 0, u = Gs(r, o, l);
    if (Wv(t, n, u), jn(u))
      r.canAutoFreeze_ = !1;
    else
      return;
  } else
    s && t.add(o);
  if (kn(o) && !hc(o)) {
    if (!r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1)
      return;
    Gs(r, o), (!e || !e.scope_.parent_) && zs(r, o);
  }
}
function zs(r, e, t = !1) {
  !r.parent_ && r.immer_.autoFreeze_ && r.canAutoFreeze_ && Md(e, t);
}
function P1(r, e) {
  const t = Array.isArray(r), n = {
    type_: t ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: e ? e.scope_ : jv(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: e,
    // The base state.
    base_: r,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let o = n, a = xd;
  t && (o = [n], a = oa);
  const { revoke: s, proxy: l } = Proxy.revocable(o, a);
  return n.draft_ = l, n.revoke_ = s, l;
}
var xd = {
  get(r, e) {
    if (e === yr)
      return r;
    const t = fo(r);
    if (!Eu(t, e))
      return N1(r, t, e);
    const n = t[e];
    return r.finalized_ || !kn(n) ? n : n === jl(r.base_, e) ? (Yl(r), r.copy_[e] = Iu(n, r)) : n;
  },
  has(r, e) {
    return e in fo(r);
  },
  ownKeys(r) {
    return Reflect.ownKeys(fo(r));
  },
  set(r, e, t) {
    const n = Yv(fo(r), e);
    if (n != null && n.set)
      return n.set.call(r.draft_, t), !0;
    if (!r.modified_) {
      const o = jl(fo(r), e), a = o == null ? void 0 : o[yr];
      if (a && a.base_ === t)
        return r.copy_[e] = t, r.assigned_[e] = !1, !0;
      if (T1(t, o) && (t !== void 0 || Eu(r.base_, e)))
        return !0;
      Yl(r), Tu(r);
    }
    return r.copy_[e] === t && // special case: handle new props with value 'undefined'
    (t !== void 0 || e in r.copy_) || // special case: NaN
    Number.isNaN(t) && Number.isNaN(r.copy_[e]) || (r.copy_[e] = t, r.assigned_[e] = !0), !0;
  },
  deleteProperty(r, e) {
    return jl(r.base_, e) !== void 0 || e in r.base_ ? (r.assigned_[e] = !1, Yl(r), Tu(r)) : delete r.assigned_[e], r.copy_ && delete r.copy_[e], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(r, e) {
    const t = fo(r), n = Reflect.getOwnPropertyDescriptor(t, e);
    return n && {
      writable: !0,
      configurable: r.type_ !== 1 || e !== "length",
      enumerable: n.enumerable,
      value: t[e]
    };
  },
  defineProperty() {
    Gr(11);
  },
  getPrototypeOf(r) {
    return li(r.base_);
  },
  setPrototypeOf() {
    Gr(12);
  }
}, oa = {};
ra(xd, (r, e) => {
  oa[r] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
});
oa.deleteProperty = function(r, e) {
  return oa.set.call(this, r, e, void 0);
};
oa.set = function(r, e, t) {
  return xd.set.call(this, r[0], e, t, r[0]);
};
function jl(r, e) {
  const t = r[yr];
  return (t ? fo(t) : r)[e];
}
function N1(r, e, t) {
  var o;
  const n = Yv(e, t);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = n.get) == null ? void 0 : o.call(r.draft_)
  ) : void 0;
}
function Yv(r, e) {
  if (!(e in r))
    return;
  let t = li(r);
  for (; t; ) {
    const n = Object.getOwnPropertyDescriptor(t, e);
    if (n)
      return n;
    t = li(t);
  }
}
function Tu(r) {
  r.modified_ || (r.modified_ = !0, r.parent_ && Tu(r.parent_));
}
function Yl(r) {
  r.copy_ || (r.copy_ = bu(
    r.base_,
    r.scope_.immer_.useStrictShallowCopy_
  ));
}
var O1 = class {
  constructor(r) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, t, n) => {
      if (typeof e == "function" && typeof t != "function") {
        const a = t;
        t = e;
        const s = this;
        return function(u = a, ...f) {
          return s.produce(u, (h) => t.call(this, h, ...f));
        };
      }
      typeof t != "function" && Gr(6), n !== void 0 && typeof n != "function" && Gr(7);
      let o;
      if (kn(e)) {
        const a = Rg(this), s = Iu(e, void 0);
        let l = !0;
        try {
          o = t(s), l = !1;
        } finally {
          l ? _u(a) : Su(a);
        }
        return Ag(a, n), kg(o, a);
      } else if (!e || typeof e != "object") {
        if (o = t(e), o === void 0 && (o = e), o === zv && (o = void 0), this.autoFreeze_ && Md(o, !0), n) {
          const a = [], s = [];
          To("Patches").generateReplacementPatches_(e, o, a, s), n(a, s);
        }
        return o;
      } else
        Gr(1, e);
    }, this.produceWithPatches = (e, t) => {
      if (typeof e == "function")
        return (s, ...l) => this.produceWithPatches(s, (u) => e(u, ...l));
      let n, o;
      return [this.produce(e, t, (s, l) => {
        n = s, o = l;
      }), n, o];
    }, typeof (r == null ? void 0 : r.autoFreeze) == "boolean" && this.setAutoFreeze(r.autoFreeze), typeof (r == null ? void 0 : r.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(r.useStrictShallowCopy);
  }
  createDraft(r) {
    kn(r) || Gr(8), jn(r) && (r = Qv(r));
    const e = Rg(this), t = Iu(r, void 0);
    return t[yr].isManual_ = !0, Su(e), t;
  }
  finishDraft(r, e) {
    const t = r && r[yr];
    (!t || !t.isManual_) && Gr(9);
    const { scope_: n } = t;
    return Ag(n, e), kg(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(r) {
    this.autoFreeze_ = r;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(r) {
    this.useStrictShallowCopy_ = r;
  }
  applyPatches(r, e) {
    let t;
    for (t = e.length - 1; t >= 0; t--) {
      const o = e[t];
      if (o.path.length === 0 && o.op === "replace") {
        r = o.value;
        break;
      }
    }
    t > -1 && (e = e.slice(t + 1));
    const n = To("Patches").applyPatches_;
    return jn(r) ? n(r, e) : this.produce(
      r,
      (o) => n(o, e)
    );
  }
};
function Iu(r, e) {
  const t = dc(r) ? To("MapSet").proxyMap_(r, e) : fc(r) ? To("MapSet").proxySet_(r, e) : P1(r, e);
  return (e ? e.scope_ : jv()).drafts_.push(t), t;
}
function Qv(r) {
  return jn(r) || Gr(10, r), Jv(r);
}
function Jv(r) {
  if (!kn(r) || hc(r))
    return r;
  const e = r[yr];
  let t;
  if (e) {
    if (!e.modified_)
      return e.base_;
    e.finalized_ = !0, t = bu(r, e.scope_.immer_.useStrictShallowCopy_);
  } else
    t = bu(r, !0);
  return ra(t, (n, o) => {
    Wv(t, n, Jv(o));
  }), e && (e.finalized_ = !1), t;
}
var Cr = new O1(), Xv = Cr.produce;
Cr.produceWithPatches.bind(
  Cr
);
Cr.setAutoFreeze.bind(Cr);
Cr.setUseStrictShallowCopy.bind(Cr);
Cr.applyPatches.bind(Cr);
Cr.createDraft.bind(Cr);
Cr.finishDraft.bind(Cr);
function M1(r, e = `expected a function, instead received ${typeof r}`) {
  if (typeof r != "function")
    throw new TypeError(e);
}
function x1(r, e = `expected an object, instead received ${typeof r}`) {
  if (typeof r != "object")
    throw new TypeError(e);
}
function L1(r, e = "expected all items to be functions, instead received the following types: ") {
  if (!r.every((t) => typeof t == "function")) {
    const t = r.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${e}[${t}]`);
  }
}
var Ng = (r) => Array.isArray(r) ? r : [r];
function D1(r) {
  const e = Array.isArray(r[0]) ? r[0] : r;
  return L1(
    e,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), e;
}
function U1(r, e) {
  const t = [], { length: n } = r;
  for (let o = 0; o < n; o++)
    t.push(r[o].apply(null, e));
  return t;
}
var F1 = class {
  constructor(r) {
    this.value = r;
  }
  deref() {
    return this.value;
  }
}, H1 = typeof WeakRef < "u" ? WeakRef : F1, B1 = 0, Og = 1;
function hs() {
  return {
    s: B1,
    v: void 0,
    o: null,
    p: null
  };
}
function Ld(r, e = {}) {
  let t = hs();
  const { resultEqualityCheck: n } = e;
  let o, a = 0;
  function s() {
    var p;
    let l = t;
    const { length: u } = arguments;
    for (let g = 0, v = u; g < v; g++) {
      const C = arguments[g];
      if (typeof C == "function" || typeof C == "object" && C !== null) {
        let E = l.o;
        E === null && (l.o = E = /* @__PURE__ */ new WeakMap());
        const _ = E.get(C);
        _ === void 0 ? (l = hs(), E.set(C, l)) : l = _;
      } else {
        let E = l.p;
        E === null && (l.p = E = /* @__PURE__ */ new Map());
        const _ = E.get(C);
        _ === void 0 ? (l = hs(), E.set(C, l)) : l = _;
      }
    }
    const f = l;
    let h;
    if (l.s === Og ? h = l.v : (h = r.apply(null, arguments), a++), f.s = Og, n) {
      const g = ((p = o == null ? void 0 : o.deref) == null ? void 0 : p.call(o)) ?? o;
      g != null && n(g, h) && (h = g, a !== 0 && a--), o = typeof h == "object" && h !== null || typeof h == "function" ? new H1(h) : h;
    }
    return f.v = h, h;
  }
  return s.clearCache = () => {
    t = hs(), s.resetResultsCount();
  }, s.resultsCount = () => a, s.resetResultsCount = () => {
    a = 0;
  }, s;
}
function Zv(r, ...e) {
  const t = typeof r == "function" ? {
    memoize: r,
    memoizeOptions: e
  } : r, n = (...o) => {
    let a = 0, s = 0, l, u = {}, f = o.pop();
    typeof f == "object" && (u = f, f = o.pop()), M1(
      f,
      `createSelector expects an output function after the inputs, but received: [${typeof f}]`
    );
    const h = {
      ...t,
      ...u
    }, {
      memoize: p,
      memoizeOptions: g = [],
      argsMemoize: v = Ld,
      argsMemoizeOptions: C = [],
      devModeChecks: E = {}
    } = h, _ = Ng(g), I = Ng(C), A = D1(o), S = p(function() {
      return a++, f.apply(
        null,
        arguments
      );
    }, ..._), R = v(function() {
      s++;
      const L = U1(
        A,
        arguments
      );
      return l = S.apply(null, L), l;
    }, ...I);
    return Object.assign(R, {
      resultFunc: f,
      memoizedResultFunc: S,
      dependencies: A,
      dependencyRecomputations: () => s,
      resetDependencyRecomputations: () => {
        s = 0;
      },
      lastResult: () => l,
      recomputations: () => a,
      resetRecomputations: () => {
        a = 0;
      },
      memoize: p,
      argsMemoize: v
    });
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var pi = /* @__PURE__ */ Zv(Ld), K1 = Object.assign(
  (r, e = pi) => {
    x1(
      r,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof r}`
    );
    const t = Object.keys(r), n = t.map(
      (a) => r[a]
    );
    return e(
      n,
      (...a) => a.reduce((s, l, u) => (s[t[u]] = l, s), {})
    );
  },
  { withTypes: () => K1 }
);
function ey(r) {
  return ({ dispatch: t, getState: n }) => (o) => (a) => typeof a == "function" ? a(t, n, r) : o(a);
}
var q1 = ey(), $1 = ey, G1 = (...r) => {
  const e = Zv(...r), t = Object.assign((...n) => {
    const o = e(...n), a = (s, ...l) => o(jn(s) ? Qv(s) : s, ...l);
    return Object.assign(a, o), a;
  }, {
    withTypes: () => t
  });
  return t;
};
G1(Ld);
var z1 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? $s : $s.apply(null, arguments);
}, V1 = (r) => r && typeof r.match == "function";
function Wr(r, e) {
  function t(...n) {
    if (e) {
      let o = e(...n);
      if (!o)
        throw new Error(nr(0));
      return {
        type: r,
        payload: o.payload,
        ..."meta" in o && {
          meta: o.meta
        },
        ..."error" in o && {
          error: o.error
        }
      };
    }
    return {
      type: r,
      payload: n[0]
    };
  }
  return t.toString = () => `${r}`, t.type = r, t.match = (n) => _1(n) && n.type === r, t;
}
var ty = class Bi extends Array {
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, Bi.prototype);
  }
  static get [Symbol.species]() {
    return Bi;
  }
  concat(...e) {
    return super.concat.apply(this, e);
  }
  prepend(...e) {
    return e.length === 1 && Array.isArray(e[0]) ? new Bi(...e[0].concat(this)) : new Bi(...e.concat(this));
  }
};
function Mg(r) {
  return kn(r) ? Xv(r, () => {
  }) : r;
}
function xg(r, e, t) {
  if (r.has(e)) {
    let o = r.get(e);
    return t.update && (o = t.update(o, e, r), r.set(e, o)), o;
  }
  if (!t.insert)
    throw new Error(nr(10));
  const n = t.insert(e, r);
  return r.set(e, n), n;
}
function W1(r) {
  return typeof r == "boolean";
}
var j1 = () => function(e) {
  const {
    thunk: t = !0,
    immutableCheck: n = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: a = !0
  } = e ?? {};
  let s = new ty();
  return t && (W1(t) ? s.push(q1) : s.push($1(t.extraArgument))), s;
}, Y1 = "RTK_autoBatch", ry = (r) => (e) => {
  setTimeout(e, r);
}, Q1 = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : ry(10), J1 = (r = {
  type: "raf"
}) => (e) => (...t) => {
  const n = e(...t);
  let o = !0, a = !1, s = !1;
  const l = /* @__PURE__ */ new Set(), u = r.type === "tick" ? queueMicrotask : r.type === "raf" ? Q1 : r.type === "callback" ? r.queueNotification : ry(r.timeout), f = () => {
    s = !1, a && (a = !1, l.forEach((h) => h()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(h) {
      const p = () => o && h(), g = n.subscribe(p);
      return l.add(h), () => {
        g(), l.delete(h);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(h) {
      var p;
      try {
        return o = !((p = h == null ? void 0 : h.meta) != null && p[Y1]), a = !o, a && (s || (s = !0, u(f))), n.dispatch(h);
      } finally {
        o = !0;
      }
    }
  });
}, X1 = (r) => function(t) {
  const {
    autoBatch: n = !0
  } = t ?? {};
  let o = new ty(r);
  return n && o.push(J1(typeof n == "object" ? n : void 0)), o;
}, Z1 = !0;
function eO(r) {
  const e = j1(), {
    reducer: t = void 0,
    middleware: n,
    devTools: o = !0,
    preloadedState: a = void 0,
    enhancers: s = void 0
  } = r || {};
  let l;
  if (typeof t == "function")
    l = t;
  else if (Od(t))
    l = E1(t);
  else
    throw new Error(nr(1));
  let u;
  typeof n == "function" ? u = n(e) : u = e();
  let f = $s;
  o && (f = z1({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !Z1,
    ...typeof o == "object" && o
  }));
  const h = b1(...u), p = X1(h);
  let g = typeof s == "function" ? s(p) : p();
  const v = f(...g);
  return Gv(l, a, v);
}
function ny(r) {
  const e = {}, t = [];
  let n;
  const o = {
    addCase(a, s) {
      const l = typeof a == "string" ? a : a.type;
      if (!l)
        throw new Error(nr(28));
      if (l in e)
        throw new Error(nr(29));
      return e[l] = s, o;
    },
    addMatcher(a, s) {
      return t.push({
        matcher: a,
        reducer: s
      }), o;
    },
    addDefaultCase(a) {
      return n = a, o;
    }
  };
  return r(o), [e, t, n];
}
function tO(r) {
  return typeof r == "function";
}
function rO(r, e) {
  let [t, n, o] = ny(e), a;
  if (tO(r))
    a = () => Mg(r());
  else {
    const l = Mg(r);
    a = () => l;
  }
  function s(l = a(), u) {
    let f = [t[u.type], ...n.filter(({
      matcher: h
    }) => h(u)).map(({
      reducer: h
    }) => h)];
    return f.filter((h) => !!h).length === 0 && (f = [o]), f.reduce((h, p) => {
      if (p)
        if (jn(h)) {
          const v = p(h, u);
          return v === void 0 ? h : v;
        } else {
          if (kn(h))
            return Xv(h, (g) => p(g, u));
          {
            const g = p(h, u);
            if (g === void 0) {
              if (h === null)
                return h;
              throw new Error(nr(9));
            }
            return g;
          }
        }
      return h;
    }, l);
  }
  return s.getInitialState = a, s;
}
var nO = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", oy = (r = 21) => {
  let e = "", t = r;
  for (; t--; )
    e += nO[Math.random() * 64 | 0];
  return e;
}, oO = (r, e) => V1(r) ? r.match(e) : r(e);
function iO(...r) {
  return (e) => r.some((t) => oO(t, e));
}
var aO = ["name", "message", "stack", "code"], Ql = class {
  constructor(r, e) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    zt(this, "_type");
    this.payload = r, this.meta = e;
  }
}, Lg = class {
  constructor(r, e) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    zt(this, "_type");
    this.payload = r, this.meta = e;
  }
}, sO = (r) => {
  if (typeof r == "object" && r !== null) {
    const e = {};
    for (const t of aO)
      typeof r[t] == "string" && (e[t] = r[t]);
    return e;
  }
  return {
    message: String(r)
  };
}, ln = /* @__PURE__ */ (() => {
  function r(e, t, n) {
    const o = Wr(e + "/fulfilled", (u, f, h, p) => ({
      payload: u,
      meta: {
        ...p || {},
        arg: h,
        requestId: f,
        requestStatus: "fulfilled"
      }
    })), a = Wr(e + "/pending", (u, f, h) => ({
      payload: void 0,
      meta: {
        ...h || {},
        arg: f,
        requestId: u,
        requestStatus: "pending"
      }
    })), s = Wr(e + "/rejected", (u, f, h, p, g) => ({
      payload: p,
      error: (n && n.serializeError || sO)(u || "Rejected"),
      meta: {
        ...g || {},
        arg: h,
        requestId: f,
        rejectedWithValue: !!p,
        requestStatus: "rejected",
        aborted: (u == null ? void 0 : u.name) === "AbortError",
        condition: (u == null ? void 0 : u.name) === "ConditionError"
      }
    }));
    function l(u) {
      return (f, h, p) => {
        const g = n != null && n.idGenerator ? n.idGenerator(u) : oy(), v = new AbortController();
        let C, E;
        function _(A) {
          E = A, v.abort();
        }
        const I = async function() {
          var R, P;
          let A;
          try {
            let L = (R = n == null ? void 0 : n.condition) == null ? void 0 : R.call(n, u, {
              getState: h,
              extra: p
            });
            if (lO(L) && (L = await L), L === !1 || v.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const q = new Promise((U, J) => {
              C = () => {
                J({
                  name: "AbortError",
                  message: E || "Aborted"
                });
              }, v.signal.addEventListener("abort", C);
            });
            f(a(g, u, (P = n == null ? void 0 : n.getPendingMeta) == null ? void 0 : P.call(n, {
              requestId: g,
              arg: u
            }, {
              getState: h,
              extra: p
            }))), A = await Promise.race([q, Promise.resolve(t(u, {
              dispatch: f,
              getState: h,
              extra: p,
              requestId: g,
              signal: v.signal,
              abort: _,
              rejectWithValue: (U, J) => new Ql(U, J),
              fulfillWithValue: (U, J) => new Lg(U, J)
            })).then((U) => {
              if (U instanceof Ql)
                throw U;
              return U instanceof Lg ? o(U.payload, g, u, U.meta) : o(U, g, u);
            })]);
          } catch (L) {
            A = L instanceof Ql ? s(null, g, u, L.payload, L.meta) : s(L, g, u);
          } finally {
            C && v.signal.removeEventListener("abort", C);
          }
          return n && !n.dispatchConditionRejection && s.match(A) && A.meta.condition || f(A), A;
        }();
        return Object.assign(I, {
          abort: _,
          requestId: g,
          arg: u,
          unwrap() {
            return I.then(cO);
          }
        });
      };
    }
    return Object.assign(l, {
      pending: a,
      rejected: s,
      fulfilled: o,
      settled: iO(s, o),
      typePrefix: e
    });
  }
  return r.withTypes = () => r, r;
})();
function cO(r) {
  if (r.meta && r.meta.rejectedWithValue)
    throw r.payload;
  if (r.error)
    throw r.error;
  return r.payload;
}
function lO(r) {
  return r !== null && typeof r == "object" && typeof r.then == "function";
}
var uO = Symbol.for("rtk-slice-createasyncthunk");
function dO(r, e) {
  return `${r}/${e}`;
}
function fO({
  creators: r
} = {}) {
  var t;
  const e = (t = r == null ? void 0 : r.asyncThunk) == null ? void 0 : t[uO];
  return function(o) {
    const {
      name: a,
      reducerPath: s = a
    } = o;
    if (!a)
      throw new Error(nr(11));
    typeof process < "u";
    const l = (typeof o.reducers == "function" ? o.reducers(pO()) : o.reducers) || {}, u = Object.keys(l), f = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, h = {
      addCase(S, R) {
        const P = typeof S == "string" ? S : S.type;
        if (!P)
          throw new Error(nr(12));
        if (P in f.sliceCaseReducersByType)
          throw new Error(nr(13));
        return f.sliceCaseReducersByType[P] = R, h;
      },
      addMatcher(S, R) {
        return f.sliceMatchers.push({
          matcher: S,
          reducer: R
        }), h;
      },
      exposeAction(S, R) {
        return f.actionCreators[S] = R, h;
      },
      exposeCaseReducer(S, R) {
        return f.sliceCaseReducersByName[S] = R, h;
      }
    };
    u.forEach((S) => {
      const R = l[S], P = {
        reducerName: S,
        type: dO(a, S),
        createNotation: typeof o.reducers == "function"
      };
      mO(R) ? yO(P, R, h, e) : gO(P, R, h);
    });
    function p() {
      const [S = {}, R = [], P = void 0] = typeof o.extraReducers == "function" ? ny(o.extraReducers) : [o.extraReducers], L = {
        ...S,
        ...f.sliceCaseReducersByType
      };
      return rO(o.initialState, (q) => {
        for (let U in L)
          q.addCase(U, L[U]);
        for (let U of f.sliceMatchers)
          q.addMatcher(U.matcher, U.reducer);
        for (let U of R)
          q.addMatcher(U.matcher, U.reducer);
        P && q.addDefaultCase(P);
      });
    }
    const g = (S) => S, v = /* @__PURE__ */ new Map();
    let C;
    function E(S, R) {
      return C || (C = p()), C(S, R);
    }
    function _() {
      return C || (C = p()), C.getInitialState();
    }
    function I(S, R = !1) {
      function P(q) {
        let U = q[S];
        return typeof U > "u" && R && (U = _()), U;
      }
      function L(q = g) {
        const U = xg(v, R, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return xg(U, q, {
          insert: () => {
            const J = {};
            for (const [Y, te] of Object.entries(o.selectors ?? {}))
              J[Y] = hO(te, q, _, R);
            return J;
          }
        });
      }
      return {
        reducerPath: S,
        getSelectors: L,
        get selectors() {
          return L(P);
        },
        selectSlice: P
      };
    }
    const A = {
      name: a,
      reducer: E,
      actions: f.actionCreators,
      caseReducers: f.sliceCaseReducersByName,
      getInitialState: _,
      ...I(s),
      injectInto(S, {
        reducerPath: R,
        ...P
      } = {}) {
        const L = R ?? s;
        return S.inject({
          reducerPath: L,
          reducer: E
        }, P), {
          ...A,
          ...I(L, !0)
        };
      }
    };
    return A;
  };
}
function hO(r, e, t, n) {
  function o(a, ...s) {
    let l = e(a);
    return typeof l > "u" && n && (l = t()), r(l, ...s);
  }
  return o.unwrapped = r, o;
}
var gi = fO();
function pO() {
  function r(e, t) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: e,
      ...t
    };
  }
  return r.withTypes = () => r, {
    reducer(e) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [e.name](...t) {
          return e(...t);
        }
      }[e.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(e, t) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: e,
        reducer: t
      };
    },
    asyncThunk: r
  };
}
function gO({
  type: r,
  reducerName: e,
  createNotation: t
}, n, o) {
  let a, s;
  if ("reducer" in n) {
    if (t && !vO(n))
      throw new Error(nr(17));
    a = n.reducer, s = n.prepare;
  } else
    a = n;
  o.addCase(r, a).exposeCaseReducer(e, a).exposeAction(e, s ? Wr(r, s) : Wr(r));
}
function mO(r) {
  return r._reducerDefinitionType === "asyncThunk";
}
function vO(r) {
  return r._reducerDefinitionType === "reducerWithPrepare";
}
function yO({
  type: r,
  reducerName: e
}, t, n, o) {
  if (!o)
    throw new Error(nr(18));
  const {
    payloadCreator: a,
    fulfilled: s,
    pending: l,
    rejected: u,
    settled: f,
    options: h
  } = t, p = o(r, a, h);
  n.exposeAction(e, p), s && n.addCase(p.fulfilled, s), l && n.addCase(p.pending, l), u && n.addCase(p.rejected, u), f && n.addMatcher(p.settled, f), n.exposeCaseReducer(e, {
    fulfilled: s || ps,
    pending: l || ps,
    rejected: u || ps,
    settled: f || ps
  });
}
function ps() {
}
var CO = (r, e) => {
  if (typeof r != "function")
    throw new Error(nr(32));
}, Dd = "listenerMiddleware", wO = (r) => {
  let {
    type: e,
    actionCreator: t,
    matcher: n,
    predicate: o,
    effect: a
  } = r;
  if (e)
    o = Wr(e).match;
  else if (t)
    e = t.type, o = t.match;
  else if (n)
    o = n;
  else if (!o)
    throw new Error(nr(21));
  return CO(a), {
    predicate: o,
    type: e,
    effect: a
  };
}, EO = Object.assign((r) => {
  const {
    type: e,
    predicate: t,
    effect: n
  } = wO(r);
  return {
    id: oy(),
    effect: n,
    type: e,
    predicate: t,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(nr(22));
    }
  };
}, {
  withTypes: () => EO
}), bO = Object.assign(Wr(`${Dd}/add`), {
  withTypes: () => bO
});
Wr(`${Dd}/removeAll`);
var _O = Object.assign(Wr(`${Dd}/remove`), {
  withTypes: () => _O
});
function nr(r) {
  return `Minified Redux Toolkit error #${r}; visit https://redux-toolkit.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `;
}
const SO = {
  bsddApiEnvironment: null,
  mainDictionary: null,
  ifcDictionary: null,
  filterDictionaries: [],
  language: "en-GB",
  includeTestDictionaries: null
}, Dg = (r, e) => {
  r.language = e.payload, bt.changeLanguage(e.payload);
}, iy = Wr("settings/setSettings"), ay = gi({
  name: "settings",
  initialState: SO,
  reducers: {
    setBsddApiEnvironment: (r, { payload: e }) => {
      r.bsddApiEnvironment = e;
    },
    setMainDictionary: (r, { payload: e }) => {
      r.mainDictionary = e;
    },
    setIfcDictionary: (r, { payload: e }) => {
      r.mainDictionary = e;
    },
    setFilterDictionaries: (r, { payload: e }) => {
      r.filterDictionaries = e;
    },
    setLanguage: Dg,
    setIncludeTestDictionaries: (r, e) => {
      r.includeTestDictionaries = e.payload;
    }
  },
  extraReducers: (r) => {
    r.addCase(
      iy,
      (e, {
        payload: {
          bsddApiEnvironment: t,
          mainDictionary: n,
          ifcDictionary: o,
          filterDictionaries: a,
          language: s,
          includeTestDictionaries: l
        }
      }) => {
        JSON.stringify(e.bsddApiEnvironment) !== JSON.stringify(t) && (e.bsddApiEnvironment = t), JSON.stringify(e.mainDictionary) !== JSON.stringify(n) && (e.mainDictionary = n), JSON.stringify(e.ifcDictionary) !== JSON.stringify(o) && (e.ifcDictionary = o), JSON.stringify(e.filterDictionaries) !== JSON.stringify(a) && (e.filterDictionaries = a), JSON.stringify(e.language) !== JSON.stringify(s) && Dg(e, { payload: s, type: "setLanguage" }), JSON.stringify(e.includeTestDictionaries) !== JSON.stringify(l) && (e.includeTestDictionaries = l);
      }
    );
  }
}), Au = (r) => {
  const e = r.settings.bsddApiEnvironment;
  return e !== null ? Nd[e] : null;
}, sy = pi(
  (r) => r.settings.mainDictionary,
  (r) => r.settings.ifcDictionary,
  (r) => r.settings.filterDictionaries,
  (r, e, t) => {
    const n = [r, e, ...t].filter(Boolean), o = new Map(n.map((a) => [a.ifcClassification.location, a]));
    return Array.from(o.values());
  }
), cy = pi(
  sy,
  (r) => r.map((e) => e.ifcClassification.location)
), ly = (r) => r.settings.mainDictionary, TO = (r) => r.settings.includeTestDictionaries;
ay.actions;
const IO = ay.reducer, Ru = 500, AO = 500;
let ei = null, gs = {};
const Ug = {
  classes: {},
  dictionaries: {},
  dictionaryClasses: {},
  loaded: !1
}, RO = (r) => {
  const e = Au(r);
  return e && (!ei || ei.baseUrl !== e) && (ei = new So(e)), ei;
}, Fg = ln("bsdd/fetchDictionaries", ({ bsddApiEnvironment: r, includeTestDictionaries: e }, t) => {
  if (!r)
    return t.rejectWithValue("No bsddApiEnvironment provided");
  const n = new So(r), o = AO;
  let a = 0;
  const s = [];
  return new Promise((l, u) => {
    function f() {
      n.api.dictionaryV1List({ IncludeTestDictionaries: e, Limit: o, Offset: a }).then((h) => {
        h.ok || u(new Error(`HTTP error! status: ${h.status}`));
        const { data: { dictionaries: p, totalCount: g } = {} } = h;
        if (p && typeof g < "u")
          if (s.push(...p), a += o, s.length >= g) {
            const v = s.reduce((C, E) => (C[E.uri] = E, C), {});
            l(v);
          } else
            f();
        else
          u(new Error(`bSDD API error! status: ${h.status}`));
      });
    }
    f();
  });
}), kO = ln("bsdd/fetchDictionaries", async ({ bsddApiEnvironment: r, dictionaryUris: e }, t) => {
  if (!r || !e || e.length === 0)
    return t.rejectWithValue("Invalid parameters");
  const n = new So(r), o = {};
  return await Promise.all(
    e.map(async (a) => {
      var s;
      try {
        const l = await n.api.dictionaryV1List({ Uri: a });
        l.ok && l.data ? (s = l.data.dictionaries) == null || s.forEach((u) => {
          o[u.uri] = u;
        }) : console.error(`Failed to fetch dictionaries for URI: ${a}`);
      } catch (l) {
        console.error(`Error fetching dictionaries for URI: ${a}`, l);
      }
    })
  ), o;
});
async function Hg(r, e, t) {
  const n = await r.api.dictionaryV1ClassesList({
    Uri: e,
    UseNestedClasses: !1,
    Limit: Ru,
    Offset: t
    // languageCode: languageCode || undefined,
  });
  if (!n.ok)
    throw new Error(`HTTP error! status: ${n.status}`);
  return n.data;
}
const PO = async (r, e) => {
  const t = [];
  let n = 0;
  const o = await Hg(r, e, n), a = o.classesTotalCount;
  if (a == null)
    throw new Error("Total count is null or undefined");
  t.push(...o.classes ?? []);
  const s = [];
  for (n = Ru; n < a; n += Ru)
    s.push(Hg(r, e, n));
  return (await Promise.all(s)).forEach((u) => {
    t.push(...u.classes ?? []);
  }), t;
}, uy = ln(
  "bsdd/fetchDictionaryClasses",
  async (r, { getState: e, dispatch: t }) => {
    const n = e();
    if (n.bsdd.dictionaryClasses[r])
      return n.bsdd.dictionaryClasses[r];
    if (gs[r])
      return gs[r];
    const o = RO(n);
    if (!o)
      throw new Error("BsddApi is not initialized");
    const a = PO(o, r).then((s) => (t({ type: "bsdd/addDictionaryClasses", payload: { uri: r, data: s } }), s)).finally(() => {
      delete gs[r];
    });
    return gs[r] = a, a;
  }
), NO = ln(
  "bsdd/fetchAndStoreAllDictionaryClasses",
  async (r, { dispatch: e, rejectWithValue: t }) => {
    const { dictionaryUris: n } = r;
    if (!n || n.length === 0)
      return t("No dictionary URIs provided");
    try {
      return await Promise.all(n.map((o) => e(uy(o)))), "Successfully fetched and stored all dictionary classes";
    } catch {
      return t("Failed to fetch dictionary classes");
    }
  }
), dy = ln(
  "bsdd/updateDictionaries",
  async (r, { getState: e }) => r
), fy = gi({
  name: "bsdd",
  initialState: Ug,
  reducers: {
    resetState: () => Ug,
    addClass: (r, e) => {
      r.classes[e.payload.uri] = e.payload.data;
    },
    addDictionaryClasses: (r, e) => {
      r.dictionaryClasses[e.payload.uri] ? r.dictionaryClasses[e.payload.uri] = [
        ...r.dictionaryClasses[e.payload.uri],
        ...e.payload.data
      ] : r.dictionaryClasses[e.payload.uri] = e.payload.data;
    },
    addDictionary: (r, e) => {
      r.dictionaries[e.payload.uri] = e.payload;
    }
  },
  extraReducers: (r) => {
    r.addCase(Fg.pending, (e) => {
      e.loaded = !1;
    }).addCase(
      Fg.fulfilled,
      (e, t) => {
        e.dictionaries = t.payload, e.loaded = !0;
      }
    ).addCase(uy.rejected, (e, t) => {
      console.error("fetch dictionary classes failed", t.error), e.loaded = !0;
    }).addCase(dy.fulfilled, (e, t) => {
      const n = t.payload;
      e.dictionaries = Object.keys(e.dictionaries).filter((o) => n.includes(o)).reduce((o, a) => (o[a] = e.dictionaries[a], o), {});
    });
  }
});
ln("bsdd/fetchClass", async (r, { getState: e, dispatch: t }) => {
  const n = e();
  if (n.bsdd.classes[r])
    return n.bsdd.classes[r];
  if (!ei)
    throw new Error("BsddApi is not initialized");
  const o = await ei.api.classV1List({
    Uri: r,
    IncludeClassProperties: !0,
    IncludeChildClassReferences: !0,
    IncludeClassRelations: !0
    // IncludeReverseRelations: true,
    // languageCode: languageCode || undefined,
  });
  if (!o.ok)
    throw new Error(`HTTP error! status: ${o.status}`);
  const { data: a } = o;
  return t({ type: "bsdd/addClass", payload: { uri: r, data: a } }), a;
});
const hy = (r) => r.bsdd.dictionaries, OO = (r) => r.bsdd.dictionaryClasses;
fy.actions;
const MO = fy.reducer;
function xO({ callback: r, classifications: e, propertySetMap: t, ifcEntity: n }) {
  const { t: o } = Mu(), a = hr(hy);
  function s(h) {
    if (h in a) {
      const p = a[h];
      if (p)
        return $v(p);
    }
    return null;
  }
  function l(h) {
    return {
      type: "IfcClassificationReference",
      name: h.name,
      location: h.uri || void 0,
      identification: h.code || void 0,
      referencedSource: h.dictionaryUri && s(h.dictionaryUri) || void 0
    };
  }
  function u(h, p, g) {
    const v = h ? { ...JSON.parse(JSON.stringify(h)), hasAssociations: [] } : { hasAssociations: [], isDefinedBy: [] };
    return {
      ...p.reduce((E, _) => {
        var A;
        if ((A = _ == null ? void 0 : _.dictionaryUri) != null && A.includes("https://identifier.buildingsmart.org/uri/buildingsmart/ifc/")) {
          const { type: S, predefinedType: R } = v1(_.code);
          return { ...E, type: S, predefinedType: R };
        }
        const I = l(_);
        return I ? { ...E, hasAssociations: [...E.hasAssociations || [], I] } : E;
      }, v),
      isDefinedBy: Object.values(g).length ? Object.values(g) : []
    };
  }
  const f = () => {
    const h = u(n, e, t);
    console.log(h), r(h);
  };
  return /* @__PURE__ */ Te.jsx(va, { color: "gray", fullWidth: !0, onClick: f, variant: "filled", children: o("apply") });
}
var Vs = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Vs.exports;
(function(r, e) {
  (function() {
    var t, n = "4.17.21", o = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", s = "Expected a function", l = "Invalid `variable` option passed into `_.template`", u = "__lodash_hash_undefined__", f = 500, h = "__lodash_placeholder__", p = 1, g = 2, v = 4, C = 1, E = 2, _ = 1, I = 2, A = 4, S = 8, R = 16, P = 32, L = 64, q = 128, U = 256, J = 512, Y = 30, te = "...", Z = 800, fe = 16, ne = 1, we = 2, Q = 3, ae = 1 / 0, oe = 9007199254740991, Pe = 17976931348623157e292, Qe = 0 / 0, ot = 4294967295, dt = ot - 1, Qr = ot >>> 1, un = [
      ["ary", q],
      ["bind", _],
      ["bindKey", I],
      ["curry", S],
      ["curryRight", R],
      ["flip", J],
      ["partial", P],
      ["partialRight", L],
      ["rearg", U]
    ], jt = "[object Arguments]", ir = "[object Array]", dn = "[object AsyncFunction]", ar = "[object Boolean]", Ur = "[object Date]", fn = "[object DOMException]", Kt = "[object Error]", wr = "[object Function]", Ye = "[object GeneratorFunction]", Pt = "[object Map]", Nt = "[object Number]", On = "[object Null]", gt = "[object Object]", Ot = "[object Promise]", Zn = "[object Proxy]", Fr = "[object RegExp]", _t = "[object Set]", tt = "[object String]", Jr = "[object Symbol]", _y = "[object Undefined]", mi = "[object WeakMap]", Sy = "[object WeakSet]", vi = "[object ArrayBuffer]", ko = "[object DataView]", pc = "[object Float32Array]", gc = "[object Float64Array]", mc = "[object Int8Array]", vc = "[object Int16Array]", yc = "[object Int32Array]", Cc = "[object Uint8Array]", wc = "[object Uint8ClampedArray]", Ec = "[object Uint16Array]", bc = "[object Uint32Array]", Ty = /\b__p \+= '';/g, Iy = /\b(__p \+=) '' \+/g, Ay = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Ud = /&(?:amp|lt|gt|quot|#39);/g, Fd = /[&<>"']/g, Ry = RegExp(Ud.source), ky = RegExp(Fd.source), Py = /<%-([\s\S]+?)%>/g, Ny = /<%([\s\S]+?)%>/g, Hd = /<%=([\s\S]+?)%>/g, Oy = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, My = /^\w*$/, xy = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _c = /[\\^$.*+?()[\]{}|]/g, Ly = RegExp(_c.source), Sc = /^\s+/, Dy = /\s/, Uy = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Fy = /\{\n\/\* \[wrapped with (.+)\] \*/, Hy = /,? & /, By = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Ky = /[()=,{}\[\]\/\s]/, qy = /\\(\\)?/g, $y = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Bd = /\w*$/, Gy = /^[-+]0x[0-9a-f]+$/i, zy = /^0b[01]+$/i, Vy = /^\[object .+?Constructor\]$/, Wy = /^0o[0-7]+$/i, jy = /^(?:0|[1-9]\d*)$/, Yy = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ya = /($^)/, Qy = /['\n\r\u2028\u2029\\]/g, Ca = "\\ud800-\\udfff", Jy = "\\u0300-\\u036f", Xy = "\\ufe20-\\ufe2f", Zy = "\\u20d0-\\u20ff", Kd = Jy + Xy + Zy, qd = "\\u2700-\\u27bf", $d = "a-z\\xdf-\\xf6\\xf8-\\xff", eC = "\\xac\\xb1\\xd7\\xf7", tC = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rC = "\\u2000-\\u206f", nC = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Gd = "A-Z\\xc0-\\xd6\\xd8-\\xde", zd = "\\ufe0e\\ufe0f", Vd = eC + tC + rC + nC, Tc = "['’]", oC = "[" + Ca + "]", Wd = "[" + Vd + "]", wa = "[" + Kd + "]", jd = "\\d+", iC = "[" + qd + "]", Yd = "[" + $d + "]", Qd = "[^" + Ca + Vd + jd + qd + $d + Gd + "]", Ic = "\\ud83c[\\udffb-\\udfff]", aC = "(?:" + wa + "|" + Ic + ")", Jd = "[^" + Ca + "]", Ac = "(?:\\ud83c[\\udde6-\\uddff]){2}", Rc = "[\\ud800-\\udbff][\\udc00-\\udfff]", Po = "[" + Gd + "]", Xd = "\\u200d", Zd = "(?:" + Yd + "|" + Qd + ")", sC = "(?:" + Po + "|" + Qd + ")", ef = "(?:" + Tc + "(?:d|ll|m|re|s|t|ve))?", tf = "(?:" + Tc + "(?:D|LL|M|RE|S|T|VE))?", rf = aC + "?", nf = "[" + zd + "]?", cC = "(?:" + Xd + "(?:" + [Jd, Ac, Rc].join("|") + ")" + nf + rf + ")*", lC = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", uC = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", of = nf + rf + cC, dC = "(?:" + [iC, Ac, Rc].join("|") + ")" + of, fC = "(?:" + [Jd + wa + "?", wa, Ac, Rc, oC].join("|") + ")", hC = RegExp(Tc, "g"), pC = RegExp(wa, "g"), kc = RegExp(Ic + "(?=" + Ic + ")|" + fC + of, "g"), gC = RegExp([
      Po + "?" + Yd + "+" + ef + "(?=" + [Wd, Po, "$"].join("|") + ")",
      sC + "+" + tf + "(?=" + [Wd, Po + Zd, "$"].join("|") + ")",
      Po + "?" + Zd + "+" + ef,
      Po + "+" + tf,
      uC,
      lC,
      jd,
      dC
    ].join("|"), "g"), mC = RegExp("[" + Xd + Ca + Kd + zd + "]"), vC = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, yC = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], CC = -1, rt = {};
    rt[pc] = rt[gc] = rt[mc] = rt[vc] = rt[yc] = rt[Cc] = rt[wc] = rt[Ec] = rt[bc] = !0, rt[jt] = rt[ir] = rt[vi] = rt[ar] = rt[ko] = rt[Ur] = rt[Kt] = rt[wr] = rt[Pt] = rt[Nt] = rt[gt] = rt[Fr] = rt[_t] = rt[tt] = rt[mi] = !1;
    var Xe = {};
    Xe[jt] = Xe[ir] = Xe[vi] = Xe[ko] = Xe[ar] = Xe[Ur] = Xe[pc] = Xe[gc] = Xe[mc] = Xe[vc] = Xe[yc] = Xe[Pt] = Xe[Nt] = Xe[gt] = Xe[Fr] = Xe[_t] = Xe[tt] = Xe[Jr] = Xe[Cc] = Xe[wc] = Xe[Ec] = Xe[bc] = !0, Xe[Kt] = Xe[wr] = Xe[mi] = !1;
    var wC = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, EC = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, bC = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, _C = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, SC = parseFloat, TC = parseInt, af = typeof Mi == "object" && Mi && Mi.Object === Object && Mi, IC = typeof self == "object" && self && self.Object === Object && self, St = af || IC || Function("return this")(), Pc = e && !e.nodeType && e, eo = Pc && !0 && r && !r.nodeType && r, sf = eo && eo.exports === Pc, Nc = sf && af.process, Er = function() {
      try {
        var M = eo && eo.require && eo.require("util").types;
        return M || Nc && Nc.binding && Nc.binding("util");
      } catch {
      }
    }(), cf = Er && Er.isArrayBuffer, lf = Er && Er.isDate, uf = Er && Er.isMap, df = Er && Er.isRegExp, ff = Er && Er.isSet, hf = Er && Er.isTypedArray;
    function sr(M, H, D) {
      switch (D.length) {
        case 0:
          return M.call(H);
        case 1:
          return M.call(H, D[0]);
        case 2:
          return M.call(H, D[0], D[1]);
        case 3:
          return M.call(H, D[0], D[1], D[2]);
      }
      return M.apply(H, D);
    }
    function AC(M, H, D, se) {
      for (var Ie = -1, qe = M == null ? 0 : M.length; ++Ie < qe; ) {
        var mt = M[Ie];
        H(se, mt, D(mt), M);
      }
      return se;
    }
    function br(M, H) {
      for (var D = -1, se = M == null ? 0 : M.length; ++D < se && H(M[D], D, M) !== !1; )
        ;
      return M;
    }
    function RC(M, H) {
      for (var D = M == null ? 0 : M.length; D-- && H(M[D], D, M) !== !1; )
        ;
      return M;
    }
    function pf(M, H) {
      for (var D = -1, se = M == null ? 0 : M.length; ++D < se; )
        if (!H(M[D], D, M))
          return !1;
      return !0;
    }
    function Mn(M, H) {
      for (var D = -1, se = M == null ? 0 : M.length, Ie = 0, qe = []; ++D < se; ) {
        var mt = M[D];
        H(mt, D, M) && (qe[Ie++] = mt);
      }
      return qe;
    }
    function Ea(M, H) {
      var D = M == null ? 0 : M.length;
      return !!D && No(M, H, 0) > -1;
    }
    function Oc(M, H, D) {
      for (var se = -1, Ie = M == null ? 0 : M.length; ++se < Ie; )
        if (D(H, M[se]))
          return !0;
      return !1;
    }
    function nt(M, H) {
      for (var D = -1, se = M == null ? 0 : M.length, Ie = Array(se); ++D < se; )
        Ie[D] = H(M[D], D, M);
      return Ie;
    }
    function xn(M, H) {
      for (var D = -1, se = H.length, Ie = M.length; ++D < se; )
        M[Ie + D] = H[D];
      return M;
    }
    function Mc(M, H, D, se) {
      var Ie = -1, qe = M == null ? 0 : M.length;
      for (se && qe && (D = M[++Ie]); ++Ie < qe; )
        D = H(D, M[Ie], Ie, M);
      return D;
    }
    function kC(M, H, D, se) {
      var Ie = M == null ? 0 : M.length;
      for (se && Ie && (D = M[--Ie]); Ie--; )
        D = H(D, M[Ie], Ie, M);
      return D;
    }
    function xc(M, H) {
      for (var D = -1, se = M == null ? 0 : M.length; ++D < se; )
        if (H(M[D], D, M))
          return !0;
      return !1;
    }
    var PC = Lc("length");
    function NC(M) {
      return M.split("");
    }
    function OC(M) {
      return M.match(By) || [];
    }
    function gf(M, H, D) {
      var se;
      return D(M, function(Ie, qe, mt) {
        if (H(Ie, qe, mt))
          return se = qe, !1;
      }), se;
    }
    function ba(M, H, D, se) {
      for (var Ie = M.length, qe = D + (se ? 1 : -1); se ? qe-- : ++qe < Ie; )
        if (H(M[qe], qe, M))
          return qe;
      return -1;
    }
    function No(M, H, D) {
      return H === H ? GC(M, H, D) : ba(M, mf, D);
    }
    function MC(M, H, D, se) {
      for (var Ie = D - 1, qe = M.length; ++Ie < qe; )
        if (se(M[Ie], H))
          return Ie;
      return -1;
    }
    function mf(M) {
      return M !== M;
    }
    function vf(M, H) {
      var D = M == null ? 0 : M.length;
      return D ? Uc(M, H) / D : Qe;
    }
    function Lc(M) {
      return function(H) {
        return H == null ? t : H[M];
      };
    }
    function Dc(M) {
      return function(H) {
        return M == null ? t : M[H];
      };
    }
    function yf(M, H, D, se, Ie) {
      return Ie(M, function(qe, mt, Je) {
        D = se ? (se = !1, qe) : H(D, qe, mt, Je);
      }), D;
    }
    function xC(M, H) {
      var D = M.length;
      for (M.sort(H); D--; )
        M[D] = M[D].value;
      return M;
    }
    function Uc(M, H) {
      for (var D, se = -1, Ie = M.length; ++se < Ie; ) {
        var qe = H(M[se]);
        qe !== t && (D = D === t ? qe : D + qe);
      }
      return D;
    }
    function Fc(M, H) {
      for (var D = -1, se = Array(M); ++D < M; )
        se[D] = H(D);
      return se;
    }
    function LC(M, H) {
      return nt(H, function(D) {
        return [D, M[D]];
      });
    }
    function Cf(M) {
      return M && M.slice(0, _f(M) + 1).replace(Sc, "");
    }
    function cr(M) {
      return function(H) {
        return M(H);
      };
    }
    function Hc(M, H) {
      return nt(H, function(D) {
        return M[D];
      });
    }
    function yi(M, H) {
      return M.has(H);
    }
    function wf(M, H) {
      for (var D = -1, se = M.length; ++D < se && No(H, M[D], 0) > -1; )
        ;
      return D;
    }
    function Ef(M, H) {
      for (var D = M.length; D-- && No(H, M[D], 0) > -1; )
        ;
      return D;
    }
    function DC(M, H) {
      for (var D = M.length, se = 0; D--; )
        M[D] === H && ++se;
      return se;
    }
    var UC = Dc(wC), FC = Dc(EC);
    function HC(M) {
      return "\\" + _C[M];
    }
    function BC(M, H) {
      return M == null ? t : M[H];
    }
    function Oo(M) {
      return mC.test(M);
    }
    function KC(M) {
      return vC.test(M);
    }
    function qC(M) {
      for (var H, D = []; !(H = M.next()).done; )
        D.push(H.value);
      return D;
    }
    function Bc(M) {
      var H = -1, D = Array(M.size);
      return M.forEach(function(se, Ie) {
        D[++H] = [Ie, se];
      }), D;
    }
    function bf(M, H) {
      return function(D) {
        return M(H(D));
      };
    }
    function Ln(M, H) {
      for (var D = -1, se = M.length, Ie = 0, qe = []; ++D < se; ) {
        var mt = M[D];
        (mt === H || mt === h) && (M[D] = h, qe[Ie++] = D);
      }
      return qe;
    }
    function _a(M) {
      var H = -1, D = Array(M.size);
      return M.forEach(function(se) {
        D[++H] = se;
      }), D;
    }
    function $C(M) {
      var H = -1, D = Array(M.size);
      return M.forEach(function(se) {
        D[++H] = [se, se];
      }), D;
    }
    function GC(M, H, D) {
      for (var se = D - 1, Ie = M.length; ++se < Ie; )
        if (M[se] === H)
          return se;
      return -1;
    }
    function zC(M, H, D) {
      for (var se = D + 1; se--; )
        if (M[se] === H)
          return se;
      return se;
    }
    function Mo(M) {
      return Oo(M) ? WC(M) : PC(M);
    }
    function Hr(M) {
      return Oo(M) ? jC(M) : NC(M);
    }
    function _f(M) {
      for (var H = M.length; H-- && Dy.test(M.charAt(H)); )
        ;
      return H;
    }
    var VC = Dc(bC);
    function WC(M) {
      for (var H = kc.lastIndex = 0; kc.test(M); )
        ++H;
      return H;
    }
    function jC(M) {
      return M.match(kc) || [];
    }
    function YC(M) {
      return M.match(gC) || [];
    }
    var QC = function M(H) {
      H = H == null ? St : xo.defaults(St.Object(), H, xo.pick(St, yC));
      var D = H.Array, se = H.Date, Ie = H.Error, qe = H.Function, mt = H.Math, Je = H.Object, Kc = H.RegExp, JC = H.String, _r = H.TypeError, Sa = D.prototype, XC = qe.prototype, Lo = Je.prototype, Ta = H["__core-js_shared__"], Ia = XC.toString, We = Lo.hasOwnProperty, ZC = 0, Sf = function() {
        var i = /[^.]+$/.exec(Ta && Ta.keys && Ta.keys.IE_PROTO || "");
        return i ? "Symbol(src)_1." + i : "";
      }(), Aa = Lo.toString, ew = Ia.call(Je), tw = St._, rw = Kc(
        "^" + Ia.call(We).replace(_c, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ra = sf ? H.Buffer : t, Dn = H.Symbol, ka = H.Uint8Array, Tf = Ra ? Ra.allocUnsafe : t, Pa = bf(Je.getPrototypeOf, Je), If = Je.create, Af = Lo.propertyIsEnumerable, Na = Sa.splice, Rf = Dn ? Dn.isConcatSpreadable : t, Ci = Dn ? Dn.iterator : t, to = Dn ? Dn.toStringTag : t, Oa = function() {
        try {
          var i = ao(Je, "defineProperty");
          return i({}, "", {}), i;
        } catch {
        }
      }(), nw = H.clearTimeout !== St.clearTimeout && H.clearTimeout, ow = se && se.now !== St.Date.now && se.now, iw = H.setTimeout !== St.setTimeout && H.setTimeout, Ma = mt.ceil, xa = mt.floor, qc = Je.getOwnPropertySymbols, aw = Ra ? Ra.isBuffer : t, kf = H.isFinite, sw = Sa.join, cw = bf(Je.keys, Je), vt = mt.max, Mt = mt.min, lw = se.now, uw = H.parseInt, Pf = mt.random, dw = Sa.reverse, $c = ao(H, "DataView"), wi = ao(H, "Map"), Gc = ao(H, "Promise"), Do = ao(H, "Set"), Ei = ao(H, "WeakMap"), bi = ao(Je, "create"), La = Ei && new Ei(), Uo = {}, fw = so($c), hw = so(wi), pw = so(Gc), gw = so(Do), mw = so(Ei), Da = Dn ? Dn.prototype : t, _i = Da ? Da.valueOf : t, Nf = Da ? Da.toString : t;
      function w(i) {
        if (at(i) && !Re(i) && !(i instanceof De)) {
          if (i instanceof Sr)
            return i;
          if (We.call(i, "__wrapped__"))
            return Oh(i);
        }
        return new Sr(i);
      }
      var Fo = function() {
        function i() {
        }
        return function(c) {
          if (!it(c))
            return {};
          if (If)
            return If(c);
          i.prototype = c;
          var d = new i();
          return i.prototype = t, d;
        };
      }();
      function Ua() {
      }
      function Sr(i, c) {
        this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!c, this.__index__ = 0, this.__values__ = t;
      }
      w.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Py,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Ny,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Hd,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: w
        }
      }, w.prototype = Ua.prototype, w.prototype.constructor = w, Sr.prototype = Fo(Ua.prototype), Sr.prototype.constructor = Sr;
      function De(i) {
        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ot, this.__views__ = [];
      }
      function vw() {
        var i = new De(this.__wrapped__);
        return i.__actions__ = Yt(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = Yt(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = Yt(this.__views__), i;
      }
      function yw() {
        if (this.__filtered__) {
          var i = new De(this);
          i.__dir__ = -1, i.__filtered__ = !0;
        } else
          i = this.clone(), i.__dir__ *= -1;
        return i;
      }
      function Cw() {
        var i = this.__wrapped__.value(), c = this.__dir__, d = Re(i), m = c < 0, y = d ? i.length : 0, b = NE(0, y, this.__views__), T = b.start, k = b.end, x = k - T, B = m ? k : T - 1, K = this.__iteratees__, V = K.length, ee = 0, de = Mt(x, this.__takeCount__);
        if (!d || !m && y == x && de == x)
          return th(i, this.__actions__);
        var me = [];
        e:
          for (; x-- && ee < de; ) {
            B += c;
            for (var Oe = -1, ve = i[B]; ++Oe < V; ) {
              var xe = K[Oe], Fe = xe.iteratee, dr = xe.type, Gt = Fe(ve);
              if (dr == we)
                ve = Gt;
              else if (!Gt) {
                if (dr == ne)
                  continue e;
                break e;
              }
            }
            me[ee++] = ve;
          }
        return me;
      }
      De.prototype = Fo(Ua.prototype), De.prototype.constructor = De;
      function ro(i) {
        var c = -1, d = i == null ? 0 : i.length;
        for (this.clear(); ++c < d; ) {
          var m = i[c];
          this.set(m[0], m[1]);
        }
      }
      function ww() {
        this.__data__ = bi ? bi(null) : {}, this.size = 0;
      }
      function Ew(i) {
        var c = this.has(i) && delete this.__data__[i];
        return this.size -= c ? 1 : 0, c;
      }
      function bw(i) {
        var c = this.__data__;
        if (bi) {
          var d = c[i];
          return d === u ? t : d;
        }
        return We.call(c, i) ? c[i] : t;
      }
      function _w(i) {
        var c = this.__data__;
        return bi ? c[i] !== t : We.call(c, i);
      }
      function Sw(i, c) {
        var d = this.__data__;
        return this.size += this.has(i) ? 0 : 1, d[i] = bi && c === t ? u : c, this;
      }
      ro.prototype.clear = ww, ro.prototype.delete = Ew, ro.prototype.get = bw, ro.prototype.has = _w, ro.prototype.set = Sw;
      function hn(i) {
        var c = -1, d = i == null ? 0 : i.length;
        for (this.clear(); ++c < d; ) {
          var m = i[c];
          this.set(m[0], m[1]);
        }
      }
      function Tw() {
        this.__data__ = [], this.size = 0;
      }
      function Iw(i) {
        var c = this.__data__, d = Fa(c, i);
        if (d < 0)
          return !1;
        var m = c.length - 1;
        return d == m ? c.pop() : Na.call(c, d, 1), --this.size, !0;
      }
      function Aw(i) {
        var c = this.__data__, d = Fa(c, i);
        return d < 0 ? t : c[d][1];
      }
      function Rw(i) {
        return Fa(this.__data__, i) > -1;
      }
      function kw(i, c) {
        var d = this.__data__, m = Fa(d, i);
        return m < 0 ? (++this.size, d.push([i, c])) : d[m][1] = c, this;
      }
      hn.prototype.clear = Tw, hn.prototype.delete = Iw, hn.prototype.get = Aw, hn.prototype.has = Rw, hn.prototype.set = kw;
      function pn(i) {
        var c = -1, d = i == null ? 0 : i.length;
        for (this.clear(); ++c < d; ) {
          var m = i[c];
          this.set(m[0], m[1]);
        }
      }
      function Pw() {
        this.size = 0, this.__data__ = {
          hash: new ro(),
          map: new (wi || hn)(),
          string: new ro()
        };
      }
      function Nw(i) {
        var c = Qa(this, i).delete(i);
        return this.size -= c ? 1 : 0, c;
      }
      function Ow(i) {
        return Qa(this, i).get(i);
      }
      function Mw(i) {
        return Qa(this, i).has(i);
      }
      function xw(i, c) {
        var d = Qa(this, i), m = d.size;
        return d.set(i, c), this.size += d.size == m ? 0 : 1, this;
      }
      pn.prototype.clear = Pw, pn.prototype.delete = Nw, pn.prototype.get = Ow, pn.prototype.has = Mw, pn.prototype.set = xw;
      function no(i) {
        var c = -1, d = i == null ? 0 : i.length;
        for (this.__data__ = new pn(); ++c < d; )
          this.add(i[c]);
      }
      function Lw(i) {
        return this.__data__.set(i, u), this;
      }
      function Dw(i) {
        return this.__data__.has(i);
      }
      no.prototype.add = no.prototype.push = Lw, no.prototype.has = Dw;
      function Br(i) {
        var c = this.__data__ = new hn(i);
        this.size = c.size;
      }
      function Uw() {
        this.__data__ = new hn(), this.size = 0;
      }
      function Fw(i) {
        var c = this.__data__, d = c.delete(i);
        return this.size = c.size, d;
      }
      function Hw(i) {
        return this.__data__.get(i);
      }
      function Bw(i) {
        return this.__data__.has(i);
      }
      function Kw(i, c) {
        var d = this.__data__;
        if (d instanceof hn) {
          var m = d.__data__;
          if (!wi || m.length < o - 1)
            return m.push([i, c]), this.size = ++d.size, this;
          d = this.__data__ = new pn(m);
        }
        return d.set(i, c), this.size = d.size, this;
      }
      Br.prototype.clear = Uw, Br.prototype.delete = Fw, Br.prototype.get = Hw, Br.prototype.has = Bw, Br.prototype.set = Kw;
      function Of(i, c) {
        var d = Re(i), m = !d && co(i), y = !d && !m && Kn(i), b = !d && !m && !y && qo(i), T = d || m || y || b, k = T ? Fc(i.length, JC) : [], x = k.length;
        for (var B in i)
          (c || We.call(i, B)) && !(T && // Safari 9 has enumerable `arguments.length` in strict mode.
          (B == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          y && (B == "offset" || B == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          b && (B == "buffer" || B == "byteLength" || B == "byteOffset") || // Skip index properties.
          yn(B, x))) && k.push(B);
        return k;
      }
      function Mf(i) {
        var c = i.length;
        return c ? i[tl(0, c - 1)] : t;
      }
      function qw(i, c) {
        return Ja(Yt(i), oo(c, 0, i.length));
      }
      function $w(i) {
        return Ja(Yt(i));
      }
      function zc(i, c, d) {
        (d !== t && !Kr(i[c], d) || d === t && !(c in i)) && gn(i, c, d);
      }
      function Si(i, c, d) {
        var m = i[c];
        (!(We.call(i, c) && Kr(m, d)) || d === t && !(c in i)) && gn(i, c, d);
      }
      function Fa(i, c) {
        for (var d = i.length; d--; )
          if (Kr(i[d][0], c))
            return d;
        return -1;
      }
      function Gw(i, c, d, m) {
        return Un(i, function(y, b, T) {
          c(m, y, d(y), T);
        }), m;
      }
      function xf(i, c) {
        return i && Zr(c, wt(c), i);
      }
      function zw(i, c) {
        return i && Zr(c, Jt(c), i);
      }
      function gn(i, c, d) {
        c == "__proto__" && Oa ? Oa(i, c, {
          configurable: !0,
          enumerable: !0,
          value: d,
          writable: !0
        }) : i[c] = d;
      }
      function Vc(i, c) {
        for (var d = -1, m = c.length, y = D(m), b = i == null; ++d < m; )
          y[d] = b ? t : Il(i, c[d]);
        return y;
      }
      function oo(i, c, d) {
        return i === i && (d !== t && (i = i <= d ? i : d), c !== t && (i = i >= c ? i : c)), i;
      }
      function Tr(i, c, d, m, y, b) {
        var T, k = c & p, x = c & g, B = c & v;
        if (d && (T = y ? d(i, m, y, b) : d(i)), T !== t)
          return T;
        if (!it(i))
          return i;
        var K = Re(i);
        if (K) {
          if (T = ME(i), !k)
            return Yt(i, T);
        } else {
          var V = xt(i), ee = V == wr || V == Ye;
          if (Kn(i))
            return oh(i, k);
          if (V == gt || V == jt || ee && !y) {
            if (T = x || ee ? {} : _h(i), !k)
              return x ? bE(i, zw(T, i)) : EE(i, xf(T, i));
          } else {
            if (!Xe[V])
              return y ? i : {};
            T = xE(i, V, k);
          }
        }
        b || (b = new Br());
        var de = b.get(i);
        if (de)
          return de;
        b.set(i, T), Xh(i) ? i.forEach(function(ve) {
          T.add(Tr(ve, c, d, ve, i, b));
        }) : Qh(i) && i.forEach(function(ve, xe) {
          T.set(xe, Tr(ve, c, d, xe, i, b));
        });
        var me = B ? x ? fl : dl : x ? Jt : wt, Oe = K ? t : me(i);
        return br(Oe || i, function(ve, xe) {
          Oe && (xe = ve, ve = i[xe]), Si(T, xe, Tr(ve, c, d, xe, i, b));
        }), T;
      }
      function Vw(i) {
        var c = wt(i);
        return function(d) {
          return Lf(d, i, c);
        };
      }
      function Lf(i, c, d) {
        var m = d.length;
        if (i == null)
          return !m;
        for (i = Je(i); m--; ) {
          var y = d[m], b = c[y], T = i[y];
          if (T === t && !(y in i) || !b(T))
            return !1;
        }
        return !0;
      }
      function Df(i, c, d) {
        if (typeof i != "function")
          throw new _r(s);
        return Ni(function() {
          i.apply(t, d);
        }, c);
      }
      function Ti(i, c, d, m) {
        var y = -1, b = Ea, T = !0, k = i.length, x = [], B = c.length;
        if (!k)
          return x;
        d && (c = nt(c, cr(d))), m ? (b = Oc, T = !1) : c.length >= o && (b = yi, T = !1, c = new no(c));
        e:
          for (; ++y < k; ) {
            var K = i[y], V = d == null ? K : d(K);
            if (K = m || K !== 0 ? K : 0, T && V === V) {
              for (var ee = B; ee--; )
                if (c[ee] === V)
                  continue e;
              x.push(K);
            } else
              b(c, V, m) || x.push(K);
          }
        return x;
      }
      var Un = lh(Xr), Uf = lh(jc, !0);
      function Ww(i, c) {
        var d = !0;
        return Un(i, function(m, y, b) {
          return d = !!c(m, y, b), d;
        }), d;
      }
      function Ha(i, c, d) {
        for (var m = -1, y = i.length; ++m < y; ) {
          var b = i[m], T = c(b);
          if (T != null && (k === t ? T === T && !ur(T) : d(T, k)))
            var k = T, x = b;
        }
        return x;
      }
      function jw(i, c, d, m) {
        var y = i.length;
        for (d = Ne(d), d < 0 && (d = -d > y ? 0 : y + d), m = m === t || m > y ? y : Ne(m), m < 0 && (m += y), m = d > m ? 0 : ep(m); d < m; )
          i[d++] = c;
        return i;
      }
      function Ff(i, c) {
        var d = [];
        return Un(i, function(m, y, b) {
          c(m, y, b) && d.push(m);
        }), d;
      }
      function Tt(i, c, d, m, y) {
        var b = -1, T = i.length;
        for (d || (d = DE), y || (y = []); ++b < T; ) {
          var k = i[b];
          c > 0 && d(k) ? c > 1 ? Tt(k, c - 1, d, m, y) : xn(y, k) : m || (y[y.length] = k);
        }
        return y;
      }
      var Wc = uh(), Hf = uh(!0);
      function Xr(i, c) {
        return i && Wc(i, c, wt);
      }
      function jc(i, c) {
        return i && Hf(i, c, wt);
      }
      function Ba(i, c) {
        return Mn(c, function(d) {
          return Cn(i[d]);
        });
      }
      function io(i, c) {
        c = Hn(c, i);
        for (var d = 0, m = c.length; i != null && d < m; )
          i = i[en(c[d++])];
        return d && d == m ? i : t;
      }
      function Bf(i, c, d) {
        var m = c(i);
        return Re(i) ? m : xn(m, d(i));
      }
      function qt(i) {
        return i == null ? i === t ? _y : On : to && to in Je(i) ? PE(i) : $E(i);
      }
      function Yc(i, c) {
        return i > c;
      }
      function Yw(i, c) {
        return i != null && We.call(i, c);
      }
      function Qw(i, c) {
        return i != null && c in Je(i);
      }
      function Jw(i, c, d) {
        return i >= Mt(c, d) && i < vt(c, d);
      }
      function Qc(i, c, d) {
        for (var m = d ? Oc : Ea, y = i[0].length, b = i.length, T = b, k = D(b), x = 1 / 0, B = []; T--; ) {
          var K = i[T];
          T && c && (K = nt(K, cr(c))), x = Mt(K.length, x), k[T] = !d && (c || y >= 120 && K.length >= 120) ? new no(T && K) : t;
        }
        K = i[0];
        var V = -1, ee = k[0];
        e:
          for (; ++V < y && B.length < x; ) {
            var de = K[V], me = c ? c(de) : de;
            if (de = d || de !== 0 ? de : 0, !(ee ? yi(ee, me) : m(B, me, d))) {
              for (T = b; --T; ) {
                var Oe = k[T];
                if (!(Oe ? yi(Oe, me) : m(i[T], me, d)))
                  continue e;
              }
              ee && ee.push(me), B.push(de);
            }
          }
        return B;
      }
      function Xw(i, c, d, m) {
        return Xr(i, function(y, b, T) {
          c(m, d(y), b, T);
        }), m;
      }
      function Ii(i, c, d) {
        c = Hn(c, i), i = Ah(i, c);
        var m = i == null ? i : i[en(Ar(c))];
        return m == null ? t : sr(m, i, d);
      }
      function Kf(i) {
        return at(i) && qt(i) == jt;
      }
      function Zw(i) {
        return at(i) && qt(i) == vi;
      }
      function eE(i) {
        return at(i) && qt(i) == Ur;
      }
      function Ai(i, c, d, m, y) {
        return i === c ? !0 : i == null || c == null || !at(i) && !at(c) ? i !== i && c !== c : tE(i, c, d, m, Ai, y);
      }
      function tE(i, c, d, m, y, b) {
        var T = Re(i), k = Re(c), x = T ? ir : xt(i), B = k ? ir : xt(c);
        x = x == jt ? gt : x, B = B == jt ? gt : B;
        var K = x == gt, V = B == gt, ee = x == B;
        if (ee && Kn(i)) {
          if (!Kn(c))
            return !1;
          T = !0, K = !1;
        }
        if (ee && !K)
          return b || (b = new Br()), T || qo(i) ? wh(i, c, d, m, y, b) : RE(i, c, x, d, m, y, b);
        if (!(d & C)) {
          var de = K && We.call(i, "__wrapped__"), me = V && We.call(c, "__wrapped__");
          if (de || me) {
            var Oe = de ? i.value() : i, ve = me ? c.value() : c;
            return b || (b = new Br()), y(Oe, ve, d, m, b);
          }
        }
        return ee ? (b || (b = new Br()), kE(i, c, d, m, y, b)) : !1;
      }
      function rE(i) {
        return at(i) && xt(i) == Pt;
      }
      function Jc(i, c, d, m) {
        var y = d.length, b = y, T = !m;
        if (i == null)
          return !b;
        for (i = Je(i); y--; ) {
          var k = d[y];
          if (T && k[2] ? k[1] !== i[k[0]] : !(k[0] in i))
            return !1;
        }
        for (; ++y < b; ) {
          k = d[y];
          var x = k[0], B = i[x], K = k[1];
          if (T && k[2]) {
            if (B === t && !(x in i))
              return !1;
          } else {
            var V = new Br();
            if (m)
              var ee = m(B, K, x, i, c, V);
            if (!(ee === t ? Ai(K, B, C | E, m, V) : ee))
              return !1;
          }
        }
        return !0;
      }
      function qf(i) {
        if (!it(i) || FE(i))
          return !1;
        var c = Cn(i) ? rw : Vy;
        return c.test(so(i));
      }
      function nE(i) {
        return at(i) && qt(i) == Fr;
      }
      function oE(i) {
        return at(i) && xt(i) == _t;
      }
      function iE(i) {
        return at(i) && ns(i.length) && !!rt[qt(i)];
      }
      function $f(i) {
        return typeof i == "function" ? i : i == null ? Xt : typeof i == "object" ? Re(i) ? Vf(i[0], i[1]) : zf(i) : dp(i);
      }
      function Xc(i) {
        if (!Pi(i))
          return cw(i);
        var c = [];
        for (var d in Je(i))
          We.call(i, d) && d != "constructor" && c.push(d);
        return c;
      }
      function aE(i) {
        if (!it(i))
          return qE(i);
        var c = Pi(i), d = [];
        for (var m in i)
          m == "constructor" && (c || !We.call(i, m)) || d.push(m);
        return d;
      }
      function Zc(i, c) {
        return i < c;
      }
      function Gf(i, c) {
        var d = -1, m = Qt(i) ? D(i.length) : [];
        return Un(i, function(y, b, T) {
          m[++d] = c(y, b, T);
        }), m;
      }
      function zf(i) {
        var c = pl(i);
        return c.length == 1 && c[0][2] ? Th(c[0][0], c[0][1]) : function(d) {
          return d === i || Jc(d, i, c);
        };
      }
      function Vf(i, c) {
        return ml(i) && Sh(c) ? Th(en(i), c) : function(d) {
          var m = Il(d, i);
          return m === t && m === c ? Al(d, i) : Ai(c, m, C | E);
        };
      }
      function Ka(i, c, d, m, y) {
        i !== c && Wc(c, function(b, T) {
          if (y || (y = new Br()), it(b))
            sE(i, c, T, d, Ka, m, y);
          else {
            var k = m ? m(yl(i, T), b, T + "", i, c, y) : t;
            k === t && (k = b), zc(i, T, k);
          }
        }, Jt);
      }
      function sE(i, c, d, m, y, b, T) {
        var k = yl(i, d), x = yl(c, d), B = T.get(x);
        if (B) {
          zc(i, d, B);
          return;
        }
        var K = b ? b(k, x, d + "", i, c, T) : t, V = K === t;
        if (V) {
          var ee = Re(x), de = !ee && Kn(x), me = !ee && !de && qo(x);
          K = x, ee || de || me ? Re(k) ? K = k : ft(k) ? K = Yt(k) : de ? (V = !1, K = oh(x, !0)) : me ? (V = !1, K = ih(x, !0)) : K = [] : Oi(x) || co(x) ? (K = k, co(k) ? K = tp(k) : (!it(k) || Cn(k)) && (K = _h(x))) : V = !1;
        }
        V && (T.set(x, K), y(K, x, m, b, T), T.delete(x)), zc(i, d, K);
      }
      function Wf(i, c) {
        var d = i.length;
        if (d)
          return c += c < 0 ? d : 0, yn(c, d) ? i[c] : t;
      }
      function jf(i, c, d) {
        c.length ? c = nt(c, function(b) {
          return Re(b) ? function(T) {
            return io(T, b.length === 1 ? b[0] : b);
          } : b;
        }) : c = [Xt];
        var m = -1;
        c = nt(c, cr(pe()));
        var y = Gf(i, function(b, T, k) {
          var x = nt(c, function(B) {
            return B(b);
          });
          return { criteria: x, index: ++m, value: b };
        });
        return xC(y, function(b, T) {
          return wE(b, T, d);
        });
      }
      function cE(i, c) {
        return Yf(i, c, function(d, m) {
          return Al(i, m);
        });
      }
      function Yf(i, c, d) {
        for (var m = -1, y = c.length, b = {}; ++m < y; ) {
          var T = c[m], k = io(i, T);
          d(k, T) && Ri(b, Hn(T, i), k);
        }
        return b;
      }
      function lE(i) {
        return function(c) {
          return io(c, i);
        };
      }
      function el(i, c, d, m) {
        var y = m ? MC : No, b = -1, T = c.length, k = i;
        for (i === c && (c = Yt(c)), d && (k = nt(i, cr(d))); ++b < T; )
          for (var x = 0, B = c[b], K = d ? d(B) : B; (x = y(k, K, x, m)) > -1; )
            k !== i && Na.call(k, x, 1), Na.call(i, x, 1);
        return i;
      }
      function Qf(i, c) {
        for (var d = i ? c.length : 0, m = d - 1; d--; ) {
          var y = c[d];
          if (d == m || y !== b) {
            var b = y;
            yn(y) ? Na.call(i, y, 1) : ol(i, y);
          }
        }
        return i;
      }
      function tl(i, c) {
        return i + xa(Pf() * (c - i + 1));
      }
      function uE(i, c, d, m) {
        for (var y = -1, b = vt(Ma((c - i) / (d || 1)), 0), T = D(b); b--; )
          T[m ? b : ++y] = i, i += d;
        return T;
      }
      function rl(i, c) {
        var d = "";
        if (!i || c < 1 || c > oe)
          return d;
        do
          c % 2 && (d += i), c = xa(c / 2), c && (i += i);
        while (c);
        return d;
      }
      function Me(i, c) {
        return Cl(Ih(i, c, Xt), i + "");
      }
      function dE(i) {
        return Mf($o(i));
      }
      function fE(i, c) {
        var d = $o(i);
        return Ja(d, oo(c, 0, d.length));
      }
      function Ri(i, c, d, m) {
        if (!it(i))
          return i;
        c = Hn(c, i);
        for (var y = -1, b = c.length, T = b - 1, k = i; k != null && ++y < b; ) {
          var x = en(c[y]), B = d;
          if (x === "__proto__" || x === "constructor" || x === "prototype")
            return i;
          if (y != T) {
            var K = k[x];
            B = m ? m(K, x, k) : t, B === t && (B = it(K) ? K : yn(c[y + 1]) ? [] : {});
          }
          Si(k, x, B), k = k[x];
        }
        return i;
      }
      var Jf = La ? function(i, c) {
        return La.set(i, c), i;
      } : Xt, hE = Oa ? function(i, c) {
        return Oa(i, "toString", {
          configurable: !0,
          enumerable: !1,
          value: kl(c),
          writable: !0
        });
      } : Xt;
      function pE(i) {
        return Ja($o(i));
      }
      function Ir(i, c, d) {
        var m = -1, y = i.length;
        c < 0 && (c = -c > y ? 0 : y + c), d = d > y ? y : d, d < 0 && (d += y), y = c > d ? 0 : d - c >>> 0, c >>>= 0;
        for (var b = D(y); ++m < y; )
          b[m] = i[m + c];
        return b;
      }
      function gE(i, c) {
        var d;
        return Un(i, function(m, y, b) {
          return d = c(m, y, b), !d;
        }), !!d;
      }
      function qa(i, c, d) {
        var m = 0, y = i == null ? m : i.length;
        if (typeof c == "number" && c === c && y <= Qr) {
          for (; m < y; ) {
            var b = m + y >>> 1, T = i[b];
            T !== null && !ur(T) && (d ? T <= c : T < c) ? m = b + 1 : y = b;
          }
          return y;
        }
        return nl(i, c, Xt, d);
      }
      function nl(i, c, d, m) {
        var y = 0, b = i == null ? 0 : i.length;
        if (b === 0)
          return 0;
        c = d(c);
        for (var T = c !== c, k = c === null, x = ur(c), B = c === t; y < b; ) {
          var K = xa((y + b) / 2), V = d(i[K]), ee = V !== t, de = V === null, me = V === V, Oe = ur(V);
          if (T)
            var ve = m || me;
          else
            B ? ve = me && (m || ee) : k ? ve = me && ee && (m || !de) : x ? ve = me && ee && !de && (m || !Oe) : de || Oe ? ve = !1 : ve = m ? V <= c : V < c;
          ve ? y = K + 1 : b = K;
        }
        return Mt(b, dt);
      }
      function Xf(i, c) {
        for (var d = -1, m = i.length, y = 0, b = []; ++d < m; ) {
          var T = i[d], k = c ? c(T) : T;
          if (!d || !Kr(k, x)) {
            var x = k;
            b[y++] = T === 0 ? 0 : T;
          }
        }
        return b;
      }
      function Zf(i) {
        return typeof i == "number" ? i : ur(i) ? Qe : +i;
      }
      function lr(i) {
        if (typeof i == "string")
          return i;
        if (Re(i))
          return nt(i, lr) + "";
        if (ur(i))
          return Nf ? Nf.call(i) : "";
        var c = i + "";
        return c == "0" && 1 / i == -ae ? "-0" : c;
      }
      function Fn(i, c, d) {
        var m = -1, y = Ea, b = i.length, T = !0, k = [], x = k;
        if (d)
          T = !1, y = Oc;
        else if (b >= o) {
          var B = c ? null : IE(i);
          if (B)
            return _a(B);
          T = !1, y = yi, x = new no();
        } else
          x = c ? [] : k;
        e:
          for (; ++m < b; ) {
            var K = i[m], V = c ? c(K) : K;
            if (K = d || K !== 0 ? K : 0, T && V === V) {
              for (var ee = x.length; ee--; )
                if (x[ee] === V)
                  continue e;
              c && x.push(V), k.push(K);
            } else
              y(x, V, d) || (x !== k && x.push(V), k.push(K));
          }
        return k;
      }
      function ol(i, c) {
        return c = Hn(c, i), i = Ah(i, c), i == null || delete i[en(Ar(c))];
      }
      function eh(i, c, d, m) {
        return Ri(i, c, d(io(i, c)), m);
      }
      function $a(i, c, d, m) {
        for (var y = i.length, b = m ? y : -1; (m ? b-- : ++b < y) && c(i[b], b, i); )
          ;
        return d ? Ir(i, m ? 0 : b, m ? b + 1 : y) : Ir(i, m ? b + 1 : 0, m ? y : b);
      }
      function th(i, c) {
        var d = i;
        return d instanceof De && (d = d.value()), Mc(c, function(m, y) {
          return y.func.apply(y.thisArg, xn([m], y.args));
        }, d);
      }
      function il(i, c, d) {
        var m = i.length;
        if (m < 2)
          return m ? Fn(i[0]) : [];
        for (var y = -1, b = D(m); ++y < m; )
          for (var T = i[y], k = -1; ++k < m; )
            k != y && (b[y] = Ti(b[y] || T, i[k], c, d));
        return Fn(Tt(b, 1), c, d);
      }
      function rh(i, c, d) {
        for (var m = -1, y = i.length, b = c.length, T = {}; ++m < y; ) {
          var k = m < b ? c[m] : t;
          d(T, i[m], k);
        }
        return T;
      }
      function al(i) {
        return ft(i) ? i : [];
      }
      function sl(i) {
        return typeof i == "function" ? i : Xt;
      }
      function Hn(i, c) {
        return Re(i) ? i : ml(i, c) ? [i] : Nh(Ge(i));
      }
      var mE = Me;
      function Bn(i, c, d) {
        var m = i.length;
        return d = d === t ? m : d, !c && d >= m ? i : Ir(i, c, d);
      }
      var nh = nw || function(i) {
        return St.clearTimeout(i);
      };
      function oh(i, c) {
        if (c)
          return i.slice();
        var d = i.length, m = Tf ? Tf(d) : new i.constructor(d);
        return i.copy(m), m;
      }
      function cl(i) {
        var c = new i.constructor(i.byteLength);
        return new ka(c).set(new ka(i)), c;
      }
      function vE(i, c) {
        var d = c ? cl(i.buffer) : i.buffer;
        return new i.constructor(d, i.byteOffset, i.byteLength);
      }
      function yE(i) {
        var c = new i.constructor(i.source, Bd.exec(i));
        return c.lastIndex = i.lastIndex, c;
      }
      function CE(i) {
        return _i ? Je(_i.call(i)) : {};
      }
      function ih(i, c) {
        var d = c ? cl(i.buffer) : i.buffer;
        return new i.constructor(d, i.byteOffset, i.length);
      }
      function ah(i, c) {
        if (i !== c) {
          var d = i !== t, m = i === null, y = i === i, b = ur(i), T = c !== t, k = c === null, x = c === c, B = ur(c);
          if (!k && !B && !b && i > c || b && T && x && !k && !B || m && T && x || !d && x || !y)
            return 1;
          if (!m && !b && !B && i < c || B && d && y && !m && !b || k && d && y || !T && y || !x)
            return -1;
        }
        return 0;
      }
      function wE(i, c, d) {
        for (var m = -1, y = i.criteria, b = c.criteria, T = y.length, k = d.length; ++m < T; ) {
          var x = ah(y[m], b[m]);
          if (x) {
            if (m >= k)
              return x;
            var B = d[m];
            return x * (B == "desc" ? -1 : 1);
          }
        }
        return i.index - c.index;
      }
      function sh(i, c, d, m) {
        for (var y = -1, b = i.length, T = d.length, k = -1, x = c.length, B = vt(b - T, 0), K = D(x + B), V = !m; ++k < x; )
          K[k] = c[k];
        for (; ++y < T; )
          (V || y < b) && (K[d[y]] = i[y]);
        for (; B--; )
          K[k++] = i[y++];
        return K;
      }
      function ch(i, c, d, m) {
        for (var y = -1, b = i.length, T = -1, k = d.length, x = -1, B = c.length, K = vt(b - k, 0), V = D(K + B), ee = !m; ++y < K; )
          V[y] = i[y];
        for (var de = y; ++x < B; )
          V[de + x] = c[x];
        for (; ++T < k; )
          (ee || y < b) && (V[de + d[T]] = i[y++]);
        return V;
      }
      function Yt(i, c) {
        var d = -1, m = i.length;
        for (c || (c = D(m)); ++d < m; )
          c[d] = i[d];
        return c;
      }
      function Zr(i, c, d, m) {
        var y = !d;
        d || (d = {});
        for (var b = -1, T = c.length; ++b < T; ) {
          var k = c[b], x = m ? m(d[k], i[k], k, d, i) : t;
          x === t && (x = i[k]), y ? gn(d, k, x) : Si(d, k, x);
        }
        return d;
      }
      function EE(i, c) {
        return Zr(i, gl(i), c);
      }
      function bE(i, c) {
        return Zr(i, Eh(i), c);
      }
      function Ga(i, c) {
        return function(d, m) {
          var y = Re(d) ? AC : Gw, b = c ? c() : {};
          return y(d, i, pe(m, 2), b);
        };
      }
      function Ho(i) {
        return Me(function(c, d) {
          var m = -1, y = d.length, b = y > 1 ? d[y - 1] : t, T = y > 2 ? d[2] : t;
          for (b = i.length > 3 && typeof b == "function" ? (y--, b) : t, T && $t(d[0], d[1], T) && (b = y < 3 ? t : b, y = 1), c = Je(c); ++m < y; ) {
            var k = d[m];
            k && i(c, k, m, b);
          }
          return c;
        });
      }
      function lh(i, c) {
        return function(d, m) {
          if (d == null)
            return d;
          if (!Qt(d))
            return i(d, m);
          for (var y = d.length, b = c ? y : -1, T = Je(d); (c ? b-- : ++b < y) && m(T[b], b, T) !== !1; )
            ;
          return d;
        };
      }
      function uh(i) {
        return function(c, d, m) {
          for (var y = -1, b = Je(c), T = m(c), k = T.length; k--; ) {
            var x = T[i ? k : ++y];
            if (d(b[x], x, b) === !1)
              break;
          }
          return c;
        };
      }
      function _E(i, c, d) {
        var m = c & _, y = ki(i);
        function b() {
          var T = this && this !== St && this instanceof b ? y : i;
          return T.apply(m ? d : this, arguments);
        }
        return b;
      }
      function dh(i) {
        return function(c) {
          c = Ge(c);
          var d = Oo(c) ? Hr(c) : t, m = d ? d[0] : c.charAt(0), y = d ? Bn(d, 1).join("") : c.slice(1);
          return m[i]() + y;
        };
      }
      function Bo(i) {
        return function(c) {
          return Mc(lp(cp(c).replace(hC, "")), i, "");
        };
      }
      function ki(i) {
        return function() {
          var c = arguments;
          switch (c.length) {
            case 0:
              return new i();
            case 1:
              return new i(c[0]);
            case 2:
              return new i(c[0], c[1]);
            case 3:
              return new i(c[0], c[1], c[2]);
            case 4:
              return new i(c[0], c[1], c[2], c[3]);
            case 5:
              return new i(c[0], c[1], c[2], c[3], c[4]);
            case 6:
              return new i(c[0], c[1], c[2], c[3], c[4], c[5]);
            case 7:
              return new i(c[0], c[1], c[2], c[3], c[4], c[5], c[6]);
          }
          var d = Fo(i.prototype), m = i.apply(d, c);
          return it(m) ? m : d;
        };
      }
      function SE(i, c, d) {
        var m = ki(i);
        function y() {
          for (var b = arguments.length, T = D(b), k = b, x = Ko(y); k--; )
            T[k] = arguments[k];
          var B = b < 3 && T[0] !== x && T[b - 1] !== x ? [] : Ln(T, x);
          if (b -= B.length, b < d)
            return mh(
              i,
              c,
              za,
              y.placeholder,
              t,
              T,
              B,
              t,
              t,
              d - b
            );
          var K = this && this !== St && this instanceof y ? m : i;
          return sr(K, this, T);
        }
        return y;
      }
      function fh(i) {
        return function(c, d, m) {
          var y = Je(c);
          if (!Qt(c)) {
            var b = pe(d, 3);
            c = wt(c), d = function(k) {
              return b(y[k], k, y);
            };
          }
          var T = i(c, d, m);
          return T > -1 ? y[b ? c[T] : T] : t;
        };
      }
      function hh(i) {
        return vn(function(c) {
          var d = c.length, m = d, y = Sr.prototype.thru;
          for (i && c.reverse(); m--; ) {
            var b = c[m];
            if (typeof b != "function")
              throw new _r(s);
            if (y && !T && Ya(b) == "wrapper")
              var T = new Sr([], !0);
          }
          for (m = T ? m : d; ++m < d; ) {
            b = c[m];
            var k = Ya(b), x = k == "wrapper" ? hl(b) : t;
            x && vl(x[0]) && x[1] == (q | S | P | U) && !x[4].length && x[9] == 1 ? T = T[Ya(x[0])].apply(T, x[3]) : T = b.length == 1 && vl(b) ? T[k]() : T.thru(b);
          }
          return function() {
            var B = arguments, K = B[0];
            if (T && B.length == 1 && Re(K))
              return T.plant(K).value();
            for (var V = 0, ee = d ? c[V].apply(this, B) : K; ++V < d; )
              ee = c[V].call(this, ee);
            return ee;
          };
        });
      }
      function za(i, c, d, m, y, b, T, k, x, B) {
        var K = c & q, V = c & _, ee = c & I, de = c & (S | R), me = c & J, Oe = ee ? t : ki(i);
        function ve() {
          for (var xe = arguments.length, Fe = D(xe), dr = xe; dr--; )
            Fe[dr] = arguments[dr];
          if (de)
            var Gt = Ko(ve), fr = DC(Fe, Gt);
          if (m && (Fe = sh(Fe, m, y, de)), b && (Fe = ch(Fe, b, T, de)), xe -= fr, de && xe < B) {
            var ht = Ln(Fe, Gt);
            return mh(
              i,
              c,
              za,
              ve.placeholder,
              d,
              Fe,
              ht,
              k,
              x,
              B - xe
            );
          }
          var qr = V ? d : this, En = ee ? qr[i] : i;
          return xe = Fe.length, k ? Fe = GE(Fe, k) : me && xe > 1 && Fe.reverse(), K && x < xe && (Fe.length = x), this && this !== St && this instanceof ve && (En = Oe || ki(En)), En.apply(qr, Fe);
        }
        return ve;
      }
      function ph(i, c) {
        return function(d, m) {
          return Xw(d, i, c(m), {});
        };
      }
      function Va(i, c) {
        return function(d, m) {
          var y;
          if (d === t && m === t)
            return c;
          if (d !== t && (y = d), m !== t) {
            if (y === t)
              return m;
            typeof d == "string" || typeof m == "string" ? (d = lr(d), m = lr(m)) : (d = Zf(d), m = Zf(m)), y = i(d, m);
          }
          return y;
        };
      }
      function ll(i) {
        return vn(function(c) {
          return c = nt(c, cr(pe())), Me(function(d) {
            var m = this;
            return i(c, function(y) {
              return sr(y, m, d);
            });
          });
        });
      }
      function Wa(i, c) {
        c = c === t ? " " : lr(c);
        var d = c.length;
        if (d < 2)
          return d ? rl(c, i) : c;
        var m = rl(c, Ma(i / Mo(c)));
        return Oo(c) ? Bn(Hr(m), 0, i).join("") : m.slice(0, i);
      }
      function TE(i, c, d, m) {
        var y = c & _, b = ki(i);
        function T() {
          for (var k = -1, x = arguments.length, B = -1, K = m.length, V = D(K + x), ee = this && this !== St && this instanceof T ? b : i; ++B < K; )
            V[B] = m[B];
          for (; x--; )
            V[B++] = arguments[++k];
          return sr(ee, y ? d : this, V);
        }
        return T;
      }
      function gh(i) {
        return function(c, d, m) {
          return m && typeof m != "number" && $t(c, d, m) && (d = m = t), c = wn(c), d === t ? (d = c, c = 0) : d = wn(d), m = m === t ? c < d ? 1 : -1 : wn(m), uE(c, d, m, i);
        };
      }
      function ja(i) {
        return function(c, d) {
          return typeof c == "string" && typeof d == "string" || (c = Rr(c), d = Rr(d)), i(c, d);
        };
      }
      function mh(i, c, d, m, y, b, T, k, x, B) {
        var K = c & S, V = K ? T : t, ee = K ? t : T, de = K ? b : t, me = K ? t : b;
        c |= K ? P : L, c &= ~(K ? L : P), c & A || (c &= ~(_ | I));
        var Oe = [
          i,
          c,
          y,
          de,
          V,
          me,
          ee,
          k,
          x,
          B
        ], ve = d.apply(t, Oe);
        return vl(i) && Rh(ve, Oe), ve.placeholder = m, kh(ve, i, c);
      }
      function ul(i) {
        var c = mt[i];
        return function(d, m) {
          if (d = Rr(d), m = m == null ? 0 : Mt(Ne(m), 292), m && kf(d)) {
            var y = (Ge(d) + "e").split("e"), b = c(y[0] + "e" + (+y[1] + m));
            return y = (Ge(b) + "e").split("e"), +(y[0] + "e" + (+y[1] - m));
          }
          return c(d);
        };
      }
      var IE = Do && 1 / _a(new Do([, -0]))[1] == ae ? function(i) {
        return new Do(i);
      } : Ol;
      function vh(i) {
        return function(c) {
          var d = xt(c);
          return d == Pt ? Bc(c) : d == _t ? $C(c) : LC(c, i(c));
        };
      }
      function mn(i, c, d, m, y, b, T, k) {
        var x = c & I;
        if (!x && typeof i != "function")
          throw new _r(s);
        var B = m ? m.length : 0;
        if (B || (c &= ~(P | L), m = y = t), T = T === t ? T : vt(Ne(T), 0), k = k === t ? k : Ne(k), B -= y ? y.length : 0, c & L) {
          var K = m, V = y;
          m = y = t;
        }
        var ee = x ? t : hl(i), de = [
          i,
          c,
          d,
          m,
          y,
          K,
          V,
          b,
          T,
          k
        ];
        if (ee && KE(de, ee), i = de[0], c = de[1], d = de[2], m = de[3], y = de[4], k = de[9] = de[9] === t ? x ? 0 : i.length : vt(de[9] - B, 0), !k && c & (S | R) && (c &= ~(S | R)), !c || c == _)
          var me = _E(i, c, d);
        else
          c == S || c == R ? me = SE(i, c, k) : (c == P || c == (_ | P)) && !y.length ? me = TE(i, c, d, m) : me = za.apply(t, de);
        var Oe = ee ? Jf : Rh;
        return kh(Oe(me, de), i, c);
      }
      function yh(i, c, d, m) {
        return i === t || Kr(i, Lo[d]) && !We.call(m, d) ? c : i;
      }
      function Ch(i, c, d, m, y, b) {
        return it(i) && it(c) && (b.set(c, i), Ka(i, c, t, Ch, b), b.delete(c)), i;
      }
      function AE(i) {
        return Oi(i) ? t : i;
      }
      function wh(i, c, d, m, y, b) {
        var T = d & C, k = i.length, x = c.length;
        if (k != x && !(T && x > k))
          return !1;
        var B = b.get(i), K = b.get(c);
        if (B && K)
          return B == c && K == i;
        var V = -1, ee = !0, de = d & E ? new no() : t;
        for (b.set(i, c), b.set(c, i); ++V < k; ) {
          var me = i[V], Oe = c[V];
          if (m)
            var ve = T ? m(Oe, me, V, c, i, b) : m(me, Oe, V, i, c, b);
          if (ve !== t) {
            if (ve)
              continue;
            ee = !1;
            break;
          }
          if (de) {
            if (!xc(c, function(xe, Fe) {
              if (!yi(de, Fe) && (me === xe || y(me, xe, d, m, b)))
                return de.push(Fe);
            })) {
              ee = !1;
              break;
            }
          } else if (!(me === Oe || y(me, Oe, d, m, b))) {
            ee = !1;
            break;
          }
        }
        return b.delete(i), b.delete(c), ee;
      }
      function RE(i, c, d, m, y, b, T) {
        switch (d) {
          case ko:
            if (i.byteLength != c.byteLength || i.byteOffset != c.byteOffset)
              return !1;
            i = i.buffer, c = c.buffer;
          case vi:
            return !(i.byteLength != c.byteLength || !b(new ka(i), new ka(c)));
          case ar:
          case Ur:
          case Nt:
            return Kr(+i, +c);
          case Kt:
            return i.name == c.name && i.message == c.message;
          case Fr:
          case tt:
            return i == c + "";
          case Pt:
            var k = Bc;
          case _t:
            var x = m & C;
            if (k || (k = _a), i.size != c.size && !x)
              return !1;
            var B = T.get(i);
            if (B)
              return B == c;
            m |= E, T.set(i, c);
            var K = wh(k(i), k(c), m, y, b, T);
            return T.delete(i), K;
          case Jr:
            if (_i)
              return _i.call(i) == _i.call(c);
        }
        return !1;
      }
      function kE(i, c, d, m, y, b) {
        var T = d & C, k = dl(i), x = k.length, B = dl(c), K = B.length;
        if (x != K && !T)
          return !1;
        for (var V = x; V--; ) {
          var ee = k[V];
          if (!(T ? ee in c : We.call(c, ee)))
            return !1;
        }
        var de = b.get(i), me = b.get(c);
        if (de && me)
          return de == c && me == i;
        var Oe = !0;
        b.set(i, c), b.set(c, i);
        for (var ve = T; ++V < x; ) {
          ee = k[V];
          var xe = i[ee], Fe = c[ee];
          if (m)
            var dr = T ? m(Fe, xe, ee, c, i, b) : m(xe, Fe, ee, i, c, b);
          if (!(dr === t ? xe === Fe || y(xe, Fe, d, m, b) : dr)) {
            Oe = !1;
            break;
          }
          ve || (ve = ee == "constructor");
        }
        if (Oe && !ve) {
          var Gt = i.constructor, fr = c.constructor;
          Gt != fr && "constructor" in i && "constructor" in c && !(typeof Gt == "function" && Gt instanceof Gt && typeof fr == "function" && fr instanceof fr) && (Oe = !1);
        }
        return b.delete(i), b.delete(c), Oe;
      }
      function vn(i) {
        return Cl(Ih(i, t, Lh), i + "");
      }
      function dl(i) {
        return Bf(i, wt, gl);
      }
      function fl(i) {
        return Bf(i, Jt, Eh);
      }
      var hl = La ? function(i) {
        return La.get(i);
      } : Ol;
      function Ya(i) {
        for (var c = i.name + "", d = Uo[c], m = We.call(Uo, c) ? d.length : 0; m--; ) {
          var y = d[m], b = y.func;
          if (b == null || b == i)
            return y.name;
        }
        return c;
      }
      function Ko(i) {
        var c = We.call(w, "placeholder") ? w : i;
        return c.placeholder;
      }
      function pe() {
        var i = w.iteratee || Pl;
        return i = i === Pl ? $f : i, arguments.length ? i(arguments[0], arguments[1]) : i;
      }
      function Qa(i, c) {
        var d = i.__data__;
        return UE(c) ? d[typeof c == "string" ? "string" : "hash"] : d.map;
      }
      function pl(i) {
        for (var c = wt(i), d = c.length; d--; ) {
          var m = c[d], y = i[m];
          c[d] = [m, y, Sh(y)];
        }
        return c;
      }
      function ao(i, c) {
        var d = BC(i, c);
        return qf(d) ? d : t;
      }
      function PE(i) {
        var c = We.call(i, to), d = i[to];
        try {
          i[to] = t;
          var m = !0;
        } catch {
        }
        var y = Aa.call(i);
        return m && (c ? i[to] = d : delete i[to]), y;
      }
      var gl = qc ? function(i) {
        return i == null ? [] : (i = Je(i), Mn(qc(i), function(c) {
          return Af.call(i, c);
        }));
      } : Ml, Eh = qc ? function(i) {
        for (var c = []; i; )
          xn(c, gl(i)), i = Pa(i);
        return c;
      } : Ml, xt = qt;
      ($c && xt(new $c(new ArrayBuffer(1))) != ko || wi && xt(new wi()) != Pt || Gc && xt(Gc.resolve()) != Ot || Do && xt(new Do()) != _t || Ei && xt(new Ei()) != mi) && (xt = function(i) {
        var c = qt(i), d = c == gt ? i.constructor : t, m = d ? so(d) : "";
        if (m)
          switch (m) {
            case fw:
              return ko;
            case hw:
              return Pt;
            case pw:
              return Ot;
            case gw:
              return _t;
            case mw:
              return mi;
          }
        return c;
      });
      function NE(i, c, d) {
        for (var m = -1, y = d.length; ++m < y; ) {
          var b = d[m], T = b.size;
          switch (b.type) {
            case "drop":
              i += T;
              break;
            case "dropRight":
              c -= T;
              break;
            case "take":
              c = Mt(c, i + T);
              break;
            case "takeRight":
              i = vt(i, c - T);
              break;
          }
        }
        return { start: i, end: c };
      }
      function OE(i) {
        var c = i.match(Fy);
        return c ? c[1].split(Hy) : [];
      }
      function bh(i, c, d) {
        c = Hn(c, i);
        for (var m = -1, y = c.length, b = !1; ++m < y; ) {
          var T = en(c[m]);
          if (!(b = i != null && d(i, T)))
            break;
          i = i[T];
        }
        return b || ++m != y ? b : (y = i == null ? 0 : i.length, !!y && ns(y) && yn(T, y) && (Re(i) || co(i)));
      }
      function ME(i) {
        var c = i.length, d = new i.constructor(c);
        return c && typeof i[0] == "string" && We.call(i, "index") && (d.index = i.index, d.input = i.input), d;
      }
      function _h(i) {
        return typeof i.constructor == "function" && !Pi(i) ? Fo(Pa(i)) : {};
      }
      function xE(i, c, d) {
        var m = i.constructor;
        switch (c) {
          case vi:
            return cl(i);
          case ar:
          case Ur:
            return new m(+i);
          case ko:
            return vE(i, d);
          case pc:
          case gc:
          case mc:
          case vc:
          case yc:
          case Cc:
          case wc:
          case Ec:
          case bc:
            return ih(i, d);
          case Pt:
            return new m();
          case Nt:
          case tt:
            return new m(i);
          case Fr:
            return yE(i);
          case _t:
            return new m();
          case Jr:
            return CE(i);
        }
      }
      function LE(i, c) {
        var d = c.length;
        if (!d)
          return i;
        var m = d - 1;
        return c[m] = (d > 1 ? "& " : "") + c[m], c = c.join(d > 2 ? ", " : " "), i.replace(Uy, `{
/* [wrapped with ` + c + `] */
`);
      }
      function DE(i) {
        return Re(i) || co(i) || !!(Rf && i && i[Rf]);
      }
      function yn(i, c) {
        var d = typeof i;
        return c = c ?? oe, !!c && (d == "number" || d != "symbol" && jy.test(i)) && i > -1 && i % 1 == 0 && i < c;
      }
      function $t(i, c, d) {
        if (!it(d))
          return !1;
        var m = typeof c;
        return (m == "number" ? Qt(d) && yn(c, d.length) : m == "string" && c in d) ? Kr(d[c], i) : !1;
      }
      function ml(i, c) {
        if (Re(i))
          return !1;
        var d = typeof i;
        return d == "number" || d == "symbol" || d == "boolean" || i == null || ur(i) ? !0 : My.test(i) || !Oy.test(i) || c != null && i in Je(c);
      }
      function UE(i) {
        var c = typeof i;
        return c == "string" || c == "number" || c == "symbol" || c == "boolean" ? i !== "__proto__" : i === null;
      }
      function vl(i) {
        var c = Ya(i), d = w[c];
        if (typeof d != "function" || !(c in De.prototype))
          return !1;
        if (i === d)
          return !0;
        var m = hl(d);
        return !!m && i === m[0];
      }
      function FE(i) {
        return !!Sf && Sf in i;
      }
      var HE = Ta ? Cn : xl;
      function Pi(i) {
        var c = i && i.constructor, d = typeof c == "function" && c.prototype || Lo;
        return i === d;
      }
      function Sh(i) {
        return i === i && !it(i);
      }
      function Th(i, c) {
        return function(d) {
          return d == null ? !1 : d[i] === c && (c !== t || i in Je(d));
        };
      }
      function BE(i) {
        var c = ts(i, function(m) {
          return d.size === f && d.clear(), m;
        }), d = c.cache;
        return c;
      }
      function KE(i, c) {
        var d = i[1], m = c[1], y = d | m, b = y < (_ | I | q), T = m == q && d == S || m == q && d == U && i[7].length <= c[8] || m == (q | U) && c[7].length <= c[8] && d == S;
        if (!(b || T))
          return i;
        m & _ && (i[2] = c[2], y |= d & _ ? 0 : A);
        var k = c[3];
        if (k) {
          var x = i[3];
          i[3] = x ? sh(x, k, c[4]) : k, i[4] = x ? Ln(i[3], h) : c[4];
        }
        return k = c[5], k && (x = i[5], i[5] = x ? ch(x, k, c[6]) : k, i[6] = x ? Ln(i[5], h) : c[6]), k = c[7], k && (i[7] = k), m & q && (i[8] = i[8] == null ? c[8] : Mt(i[8], c[8])), i[9] == null && (i[9] = c[9]), i[0] = c[0], i[1] = y, i;
      }
      function qE(i) {
        var c = [];
        if (i != null)
          for (var d in Je(i))
            c.push(d);
        return c;
      }
      function $E(i) {
        return Aa.call(i);
      }
      function Ih(i, c, d) {
        return c = vt(c === t ? i.length - 1 : c, 0), function() {
          for (var m = arguments, y = -1, b = vt(m.length - c, 0), T = D(b); ++y < b; )
            T[y] = m[c + y];
          y = -1;
          for (var k = D(c + 1); ++y < c; )
            k[y] = m[y];
          return k[c] = d(T), sr(i, this, k);
        };
      }
      function Ah(i, c) {
        return c.length < 2 ? i : io(i, Ir(c, 0, -1));
      }
      function GE(i, c) {
        for (var d = i.length, m = Mt(c.length, d), y = Yt(i); m--; ) {
          var b = c[m];
          i[m] = yn(b, d) ? y[b] : t;
        }
        return i;
      }
      function yl(i, c) {
        if (!(c === "constructor" && typeof i[c] == "function") && c != "__proto__")
          return i[c];
      }
      var Rh = Ph(Jf), Ni = iw || function(i, c) {
        return St.setTimeout(i, c);
      }, Cl = Ph(hE);
      function kh(i, c, d) {
        var m = c + "";
        return Cl(i, LE(m, zE(OE(m), d)));
      }
      function Ph(i) {
        var c = 0, d = 0;
        return function() {
          var m = lw(), y = fe - (m - d);
          if (d = m, y > 0) {
            if (++c >= Z)
              return arguments[0];
          } else
            c = 0;
          return i.apply(t, arguments);
        };
      }
      function Ja(i, c) {
        var d = -1, m = i.length, y = m - 1;
        for (c = c === t ? m : c; ++d < c; ) {
          var b = tl(d, y), T = i[b];
          i[b] = i[d], i[d] = T;
        }
        return i.length = c, i;
      }
      var Nh = BE(function(i) {
        var c = [];
        return i.charCodeAt(0) === 46 && c.push(""), i.replace(xy, function(d, m, y, b) {
          c.push(y ? b.replace(qy, "$1") : m || d);
        }), c;
      });
      function en(i) {
        if (typeof i == "string" || ur(i))
          return i;
        var c = i + "";
        return c == "0" && 1 / i == -ae ? "-0" : c;
      }
      function so(i) {
        if (i != null) {
          try {
            return Ia.call(i);
          } catch {
          }
          try {
            return i + "";
          } catch {
          }
        }
        return "";
      }
      function zE(i, c) {
        return br(un, function(d) {
          var m = "_." + d[0];
          c & d[1] && !Ea(i, m) && i.push(m);
        }), i.sort();
      }
      function Oh(i) {
        if (i instanceof De)
          return i.clone();
        var c = new Sr(i.__wrapped__, i.__chain__);
        return c.__actions__ = Yt(i.__actions__), c.__index__ = i.__index__, c.__values__ = i.__values__, c;
      }
      function VE(i, c, d) {
        (d ? $t(i, c, d) : c === t) ? c = 1 : c = vt(Ne(c), 0);
        var m = i == null ? 0 : i.length;
        if (!m || c < 1)
          return [];
        for (var y = 0, b = 0, T = D(Ma(m / c)); y < m; )
          T[b++] = Ir(i, y, y += c);
        return T;
      }
      function WE(i) {
        for (var c = -1, d = i == null ? 0 : i.length, m = 0, y = []; ++c < d; ) {
          var b = i[c];
          b && (y[m++] = b);
        }
        return y;
      }
      function jE() {
        var i = arguments.length;
        if (!i)
          return [];
        for (var c = D(i - 1), d = arguments[0], m = i; m--; )
          c[m - 1] = arguments[m];
        return xn(Re(d) ? Yt(d) : [d], Tt(c, 1));
      }
      var YE = Me(function(i, c) {
        return ft(i) ? Ti(i, Tt(c, 1, ft, !0)) : [];
      }), QE = Me(function(i, c) {
        var d = Ar(c);
        return ft(d) && (d = t), ft(i) ? Ti(i, Tt(c, 1, ft, !0), pe(d, 2)) : [];
      }), JE = Me(function(i, c) {
        var d = Ar(c);
        return ft(d) && (d = t), ft(i) ? Ti(i, Tt(c, 1, ft, !0), t, d) : [];
      });
      function XE(i, c, d) {
        var m = i == null ? 0 : i.length;
        return m ? (c = d || c === t ? 1 : Ne(c), Ir(i, c < 0 ? 0 : c, m)) : [];
      }
      function ZE(i, c, d) {
        var m = i == null ? 0 : i.length;
        return m ? (c = d || c === t ? 1 : Ne(c), c = m - c, Ir(i, 0, c < 0 ? 0 : c)) : [];
      }
      function eb(i, c) {
        return i && i.length ? $a(i, pe(c, 3), !0, !0) : [];
      }
      function tb(i, c) {
        return i && i.length ? $a(i, pe(c, 3), !0) : [];
      }
      function rb(i, c, d, m) {
        var y = i == null ? 0 : i.length;
        return y ? (d && typeof d != "number" && $t(i, c, d) && (d = 0, m = y), jw(i, c, d, m)) : [];
      }
      function Mh(i, c, d) {
        var m = i == null ? 0 : i.length;
        if (!m)
          return -1;
        var y = d == null ? 0 : Ne(d);
        return y < 0 && (y = vt(m + y, 0)), ba(i, pe(c, 3), y);
      }
      function xh(i, c, d) {
        var m = i == null ? 0 : i.length;
        if (!m)
          return -1;
        var y = m - 1;
        return d !== t && (y = Ne(d), y = d < 0 ? vt(m + y, 0) : Mt(y, m - 1)), ba(i, pe(c, 3), y, !0);
      }
      function Lh(i) {
        var c = i == null ? 0 : i.length;
        return c ? Tt(i, 1) : [];
      }
      function nb(i) {
        var c = i == null ? 0 : i.length;
        return c ? Tt(i, ae) : [];
      }
      function ob(i, c) {
        var d = i == null ? 0 : i.length;
        return d ? (c = c === t ? 1 : Ne(c), Tt(i, c)) : [];
      }
      function ib(i) {
        for (var c = -1, d = i == null ? 0 : i.length, m = {}; ++c < d; ) {
          var y = i[c];
          m[y[0]] = y[1];
        }
        return m;
      }
      function Dh(i) {
        return i && i.length ? i[0] : t;
      }
      function ab(i, c, d) {
        var m = i == null ? 0 : i.length;
        if (!m)
          return -1;
        var y = d == null ? 0 : Ne(d);
        return y < 0 && (y = vt(m + y, 0)), No(i, c, y);
      }
      function sb(i) {
        var c = i == null ? 0 : i.length;
        return c ? Ir(i, 0, -1) : [];
      }
      var cb = Me(function(i) {
        var c = nt(i, al);
        return c.length && c[0] === i[0] ? Qc(c) : [];
      }), lb = Me(function(i) {
        var c = Ar(i), d = nt(i, al);
        return c === Ar(d) ? c = t : d.pop(), d.length && d[0] === i[0] ? Qc(d, pe(c, 2)) : [];
      }), ub = Me(function(i) {
        var c = Ar(i), d = nt(i, al);
        return c = typeof c == "function" ? c : t, c && d.pop(), d.length && d[0] === i[0] ? Qc(d, t, c) : [];
      });
      function db(i, c) {
        return i == null ? "" : sw.call(i, c);
      }
      function Ar(i) {
        var c = i == null ? 0 : i.length;
        return c ? i[c - 1] : t;
      }
      function fb(i, c, d) {
        var m = i == null ? 0 : i.length;
        if (!m)
          return -1;
        var y = m;
        return d !== t && (y = Ne(d), y = y < 0 ? vt(m + y, 0) : Mt(y, m - 1)), c === c ? zC(i, c, y) : ba(i, mf, y, !0);
      }
      function hb(i, c) {
        return i && i.length ? Wf(i, Ne(c)) : t;
      }
      var pb = Me(Uh);
      function Uh(i, c) {
        return i && i.length && c && c.length ? el(i, c) : i;
      }
      function gb(i, c, d) {
        return i && i.length && c && c.length ? el(i, c, pe(d, 2)) : i;
      }
      function mb(i, c, d) {
        return i && i.length && c && c.length ? el(i, c, t, d) : i;
      }
      var vb = vn(function(i, c) {
        var d = i == null ? 0 : i.length, m = Vc(i, c);
        return Qf(i, nt(c, function(y) {
          return yn(y, d) ? +y : y;
        }).sort(ah)), m;
      });
      function yb(i, c) {
        var d = [];
        if (!(i && i.length))
          return d;
        var m = -1, y = [], b = i.length;
        for (c = pe(c, 3); ++m < b; ) {
          var T = i[m];
          c(T, m, i) && (d.push(T), y.push(m));
        }
        return Qf(i, y), d;
      }
      function wl(i) {
        return i == null ? i : dw.call(i);
      }
      function Cb(i, c, d) {
        var m = i == null ? 0 : i.length;
        return m ? (d && typeof d != "number" && $t(i, c, d) ? (c = 0, d = m) : (c = c == null ? 0 : Ne(c), d = d === t ? m : Ne(d)), Ir(i, c, d)) : [];
      }
      function wb(i, c) {
        return qa(i, c);
      }
      function Eb(i, c, d) {
        return nl(i, c, pe(d, 2));
      }
      function bb(i, c) {
        var d = i == null ? 0 : i.length;
        if (d) {
          var m = qa(i, c);
          if (m < d && Kr(i[m], c))
            return m;
        }
        return -1;
      }
      function _b(i, c) {
        return qa(i, c, !0);
      }
      function Sb(i, c, d) {
        return nl(i, c, pe(d, 2), !0);
      }
      function Tb(i, c) {
        var d = i == null ? 0 : i.length;
        if (d) {
          var m = qa(i, c, !0) - 1;
          if (Kr(i[m], c))
            return m;
        }
        return -1;
      }
      function Ib(i) {
        return i && i.length ? Xf(i) : [];
      }
      function Ab(i, c) {
        return i && i.length ? Xf(i, pe(c, 2)) : [];
      }
      function Rb(i) {
        var c = i == null ? 0 : i.length;
        return c ? Ir(i, 1, c) : [];
      }
      function kb(i, c, d) {
        return i && i.length ? (c = d || c === t ? 1 : Ne(c), Ir(i, 0, c < 0 ? 0 : c)) : [];
      }
      function Pb(i, c, d) {
        var m = i == null ? 0 : i.length;
        return m ? (c = d || c === t ? 1 : Ne(c), c = m - c, Ir(i, c < 0 ? 0 : c, m)) : [];
      }
      function Nb(i, c) {
        return i && i.length ? $a(i, pe(c, 3), !1, !0) : [];
      }
      function Ob(i, c) {
        return i && i.length ? $a(i, pe(c, 3)) : [];
      }
      var Mb = Me(function(i) {
        return Fn(Tt(i, 1, ft, !0));
      }), xb = Me(function(i) {
        var c = Ar(i);
        return ft(c) && (c = t), Fn(Tt(i, 1, ft, !0), pe(c, 2));
      }), Lb = Me(function(i) {
        var c = Ar(i);
        return c = typeof c == "function" ? c : t, Fn(Tt(i, 1, ft, !0), t, c);
      });
      function Db(i) {
        return i && i.length ? Fn(i) : [];
      }
      function Ub(i, c) {
        return i && i.length ? Fn(i, pe(c, 2)) : [];
      }
      function Fb(i, c) {
        return c = typeof c == "function" ? c : t, i && i.length ? Fn(i, t, c) : [];
      }
      function El(i) {
        if (!(i && i.length))
          return [];
        var c = 0;
        return i = Mn(i, function(d) {
          if (ft(d))
            return c = vt(d.length, c), !0;
        }), Fc(c, function(d) {
          return nt(i, Lc(d));
        });
      }
      function Fh(i, c) {
        if (!(i && i.length))
          return [];
        var d = El(i);
        return c == null ? d : nt(d, function(m) {
          return sr(c, t, m);
        });
      }
      var Hb = Me(function(i, c) {
        return ft(i) ? Ti(i, c) : [];
      }), Bb = Me(function(i) {
        return il(Mn(i, ft));
      }), Kb = Me(function(i) {
        var c = Ar(i);
        return ft(c) && (c = t), il(Mn(i, ft), pe(c, 2));
      }), qb = Me(function(i) {
        var c = Ar(i);
        return c = typeof c == "function" ? c : t, il(Mn(i, ft), t, c);
      }), $b = Me(El);
      function Gb(i, c) {
        return rh(i || [], c || [], Si);
      }
      function zb(i, c) {
        return rh(i || [], c || [], Ri);
      }
      var Vb = Me(function(i) {
        var c = i.length, d = c > 1 ? i[c - 1] : t;
        return d = typeof d == "function" ? (i.pop(), d) : t, Fh(i, d);
      });
      function Hh(i) {
        var c = w(i);
        return c.__chain__ = !0, c;
      }
      function Wb(i, c) {
        return c(i), i;
      }
      function Xa(i, c) {
        return c(i);
      }
      var jb = vn(function(i) {
        var c = i.length, d = c ? i[0] : 0, m = this.__wrapped__, y = function(b) {
          return Vc(b, i);
        };
        return c > 1 || this.__actions__.length || !(m instanceof De) || !yn(d) ? this.thru(y) : (m = m.slice(d, +d + (c ? 1 : 0)), m.__actions__.push({
          func: Xa,
          args: [y],
          thisArg: t
        }), new Sr(m, this.__chain__).thru(function(b) {
          return c && !b.length && b.push(t), b;
        }));
      });
      function Yb() {
        return Hh(this);
      }
      function Qb() {
        return new Sr(this.value(), this.__chain__);
      }
      function Jb() {
        this.__values__ === t && (this.__values__ = Zh(this.value()));
        var i = this.__index__ >= this.__values__.length, c = i ? t : this.__values__[this.__index__++];
        return { done: i, value: c };
      }
      function Xb() {
        return this;
      }
      function Zb(i) {
        for (var c, d = this; d instanceof Ua; ) {
          var m = Oh(d);
          m.__index__ = 0, m.__values__ = t, c ? y.__wrapped__ = m : c = m;
          var y = m;
          d = d.__wrapped__;
        }
        return y.__wrapped__ = i, c;
      }
      function e_() {
        var i = this.__wrapped__;
        if (i instanceof De) {
          var c = i;
          return this.__actions__.length && (c = new De(this)), c = c.reverse(), c.__actions__.push({
            func: Xa,
            args: [wl],
            thisArg: t
          }), new Sr(c, this.__chain__);
        }
        return this.thru(wl);
      }
      function t_() {
        return th(this.__wrapped__, this.__actions__);
      }
      var r_ = Ga(function(i, c, d) {
        We.call(i, d) ? ++i[d] : gn(i, d, 1);
      });
      function n_(i, c, d) {
        var m = Re(i) ? pf : Ww;
        return d && $t(i, c, d) && (c = t), m(i, pe(c, 3));
      }
      function o_(i, c) {
        var d = Re(i) ? Mn : Ff;
        return d(i, pe(c, 3));
      }
      var i_ = fh(Mh), a_ = fh(xh);
      function s_(i, c) {
        return Tt(Za(i, c), 1);
      }
      function c_(i, c) {
        return Tt(Za(i, c), ae);
      }
      function l_(i, c, d) {
        return d = d === t ? 1 : Ne(d), Tt(Za(i, c), d);
      }
      function Bh(i, c) {
        var d = Re(i) ? br : Un;
        return d(i, pe(c, 3));
      }
      function Kh(i, c) {
        var d = Re(i) ? RC : Uf;
        return d(i, pe(c, 3));
      }
      var u_ = Ga(function(i, c, d) {
        We.call(i, d) ? i[d].push(c) : gn(i, d, [c]);
      });
      function d_(i, c, d, m) {
        i = Qt(i) ? i : $o(i), d = d && !m ? Ne(d) : 0;
        var y = i.length;
        return d < 0 && (d = vt(y + d, 0)), os(i) ? d <= y && i.indexOf(c, d) > -1 : !!y && No(i, c, d) > -1;
      }
      var f_ = Me(function(i, c, d) {
        var m = -1, y = typeof c == "function", b = Qt(i) ? D(i.length) : [];
        return Un(i, function(T) {
          b[++m] = y ? sr(c, T, d) : Ii(T, c, d);
        }), b;
      }), h_ = Ga(function(i, c, d) {
        gn(i, d, c);
      });
      function Za(i, c) {
        var d = Re(i) ? nt : Gf;
        return d(i, pe(c, 3));
      }
      function p_(i, c, d, m) {
        return i == null ? [] : (Re(c) || (c = c == null ? [] : [c]), d = m ? t : d, Re(d) || (d = d == null ? [] : [d]), jf(i, c, d));
      }
      var g_ = Ga(function(i, c, d) {
        i[d ? 0 : 1].push(c);
      }, function() {
        return [[], []];
      });
      function m_(i, c, d) {
        var m = Re(i) ? Mc : yf, y = arguments.length < 3;
        return m(i, pe(c, 4), d, y, Un);
      }
      function v_(i, c, d) {
        var m = Re(i) ? kC : yf, y = arguments.length < 3;
        return m(i, pe(c, 4), d, y, Uf);
      }
      function y_(i, c) {
        var d = Re(i) ? Mn : Ff;
        return d(i, rs(pe(c, 3)));
      }
      function C_(i) {
        var c = Re(i) ? Mf : dE;
        return c(i);
      }
      function w_(i, c, d) {
        (d ? $t(i, c, d) : c === t) ? c = 1 : c = Ne(c);
        var m = Re(i) ? qw : fE;
        return m(i, c);
      }
      function E_(i) {
        var c = Re(i) ? $w : pE;
        return c(i);
      }
      function b_(i) {
        if (i == null)
          return 0;
        if (Qt(i))
          return os(i) ? Mo(i) : i.length;
        var c = xt(i);
        return c == Pt || c == _t ? i.size : Xc(i).length;
      }
      function __(i, c, d) {
        var m = Re(i) ? xc : gE;
        return d && $t(i, c, d) && (c = t), m(i, pe(c, 3));
      }
      var S_ = Me(function(i, c) {
        if (i == null)
          return [];
        var d = c.length;
        return d > 1 && $t(i, c[0], c[1]) ? c = [] : d > 2 && $t(c[0], c[1], c[2]) && (c = [c[0]]), jf(i, Tt(c, 1), []);
      }), es = ow || function() {
        return St.Date.now();
      };
      function T_(i, c) {
        if (typeof c != "function")
          throw new _r(s);
        return i = Ne(i), function() {
          if (--i < 1)
            return c.apply(this, arguments);
        };
      }
      function qh(i, c, d) {
        return c = d ? t : c, c = i && c == null ? i.length : c, mn(i, q, t, t, t, t, c);
      }
      function $h(i, c) {
        var d;
        if (typeof c != "function")
          throw new _r(s);
        return i = Ne(i), function() {
          return --i > 0 && (d = c.apply(this, arguments)), i <= 1 && (c = t), d;
        };
      }
      var bl = Me(function(i, c, d) {
        var m = _;
        if (d.length) {
          var y = Ln(d, Ko(bl));
          m |= P;
        }
        return mn(i, m, c, d, y);
      }), Gh = Me(function(i, c, d) {
        var m = _ | I;
        if (d.length) {
          var y = Ln(d, Ko(Gh));
          m |= P;
        }
        return mn(c, m, i, d, y);
      });
      function zh(i, c, d) {
        c = d ? t : c;
        var m = mn(i, S, t, t, t, t, t, c);
        return m.placeholder = zh.placeholder, m;
      }
      function Vh(i, c, d) {
        c = d ? t : c;
        var m = mn(i, R, t, t, t, t, t, c);
        return m.placeholder = Vh.placeholder, m;
      }
      function Wh(i, c, d) {
        var m, y, b, T, k, x, B = 0, K = !1, V = !1, ee = !0;
        if (typeof i != "function")
          throw new _r(s);
        c = Rr(c) || 0, it(d) && (K = !!d.leading, V = "maxWait" in d, b = V ? vt(Rr(d.maxWait) || 0, c) : b, ee = "trailing" in d ? !!d.trailing : ee);
        function de(ht) {
          var qr = m, En = y;
          return m = y = t, B = ht, T = i.apply(En, qr), T;
        }
        function me(ht) {
          return B = ht, k = Ni(xe, c), K ? de(ht) : T;
        }
        function Oe(ht) {
          var qr = ht - x, En = ht - B, fp = c - qr;
          return V ? Mt(fp, b - En) : fp;
        }
        function ve(ht) {
          var qr = ht - x, En = ht - B;
          return x === t || qr >= c || qr < 0 || V && En >= b;
        }
        function xe() {
          var ht = es();
          if (ve(ht))
            return Fe(ht);
          k = Ni(xe, Oe(ht));
        }
        function Fe(ht) {
          return k = t, ee && m ? de(ht) : (m = y = t, T);
        }
        function dr() {
          k !== t && nh(k), B = 0, m = x = y = k = t;
        }
        function Gt() {
          return k === t ? T : Fe(es());
        }
        function fr() {
          var ht = es(), qr = ve(ht);
          if (m = arguments, y = this, x = ht, qr) {
            if (k === t)
              return me(x);
            if (V)
              return nh(k), k = Ni(xe, c), de(x);
          }
          return k === t && (k = Ni(xe, c)), T;
        }
        return fr.cancel = dr, fr.flush = Gt, fr;
      }
      var I_ = Me(function(i, c) {
        return Df(i, 1, c);
      }), A_ = Me(function(i, c, d) {
        return Df(i, Rr(c) || 0, d);
      });
      function R_(i) {
        return mn(i, J);
      }
      function ts(i, c) {
        if (typeof i != "function" || c != null && typeof c != "function")
          throw new _r(s);
        var d = function() {
          var m = arguments, y = c ? c.apply(this, m) : m[0], b = d.cache;
          if (b.has(y))
            return b.get(y);
          var T = i.apply(this, m);
          return d.cache = b.set(y, T) || b, T;
        };
        return d.cache = new (ts.Cache || pn)(), d;
      }
      ts.Cache = pn;
      function rs(i) {
        if (typeof i != "function")
          throw new _r(s);
        return function() {
          var c = arguments;
          switch (c.length) {
            case 0:
              return !i.call(this);
            case 1:
              return !i.call(this, c[0]);
            case 2:
              return !i.call(this, c[0], c[1]);
            case 3:
              return !i.call(this, c[0], c[1], c[2]);
          }
          return !i.apply(this, c);
        };
      }
      function k_(i) {
        return $h(2, i);
      }
      var P_ = mE(function(i, c) {
        c = c.length == 1 && Re(c[0]) ? nt(c[0], cr(pe())) : nt(Tt(c, 1), cr(pe()));
        var d = c.length;
        return Me(function(m) {
          for (var y = -1, b = Mt(m.length, d); ++y < b; )
            m[y] = c[y].call(this, m[y]);
          return sr(i, this, m);
        });
      }), _l = Me(function(i, c) {
        var d = Ln(c, Ko(_l));
        return mn(i, P, t, c, d);
      }), jh = Me(function(i, c) {
        var d = Ln(c, Ko(jh));
        return mn(i, L, t, c, d);
      }), N_ = vn(function(i, c) {
        return mn(i, U, t, t, t, c);
      });
      function O_(i, c) {
        if (typeof i != "function")
          throw new _r(s);
        return c = c === t ? c : Ne(c), Me(i, c);
      }
      function M_(i, c) {
        if (typeof i != "function")
          throw new _r(s);
        return c = c == null ? 0 : vt(Ne(c), 0), Me(function(d) {
          var m = d[c], y = Bn(d, 0, c);
          return m && xn(y, m), sr(i, this, y);
        });
      }
      function x_(i, c, d) {
        var m = !0, y = !0;
        if (typeof i != "function")
          throw new _r(s);
        return it(d) && (m = "leading" in d ? !!d.leading : m, y = "trailing" in d ? !!d.trailing : y), Wh(i, c, {
          leading: m,
          maxWait: c,
          trailing: y
        });
      }
      function L_(i) {
        return qh(i, 1);
      }
      function D_(i, c) {
        return _l(sl(c), i);
      }
      function U_() {
        if (!arguments.length)
          return [];
        var i = arguments[0];
        return Re(i) ? i : [i];
      }
      function F_(i) {
        return Tr(i, v);
      }
      function H_(i, c) {
        return c = typeof c == "function" ? c : t, Tr(i, v, c);
      }
      function B_(i) {
        return Tr(i, p | v);
      }
      function K_(i, c) {
        return c = typeof c == "function" ? c : t, Tr(i, p | v, c);
      }
      function q_(i, c) {
        return c == null || Lf(i, c, wt(c));
      }
      function Kr(i, c) {
        return i === c || i !== i && c !== c;
      }
      var $_ = ja(Yc), G_ = ja(function(i, c) {
        return i >= c;
      }), co = Kf(function() {
        return arguments;
      }()) ? Kf : function(i) {
        return at(i) && We.call(i, "callee") && !Af.call(i, "callee");
      }, Re = D.isArray, z_ = cf ? cr(cf) : Zw;
      function Qt(i) {
        return i != null && ns(i.length) && !Cn(i);
      }
      function ft(i) {
        return at(i) && Qt(i);
      }
      function V_(i) {
        return i === !0 || i === !1 || at(i) && qt(i) == ar;
      }
      var Kn = aw || xl, W_ = lf ? cr(lf) : eE;
      function j_(i) {
        return at(i) && i.nodeType === 1 && !Oi(i);
      }
      function Y_(i) {
        if (i == null)
          return !0;
        if (Qt(i) && (Re(i) || typeof i == "string" || typeof i.splice == "function" || Kn(i) || qo(i) || co(i)))
          return !i.length;
        var c = xt(i);
        if (c == Pt || c == _t)
          return !i.size;
        if (Pi(i))
          return !Xc(i).length;
        for (var d in i)
          if (We.call(i, d))
            return !1;
        return !0;
      }
      function Q_(i, c) {
        return Ai(i, c);
      }
      function J_(i, c, d) {
        d = typeof d == "function" ? d : t;
        var m = d ? d(i, c) : t;
        return m === t ? Ai(i, c, t, d) : !!m;
      }
      function Sl(i) {
        if (!at(i))
          return !1;
        var c = qt(i);
        return c == Kt || c == fn || typeof i.message == "string" && typeof i.name == "string" && !Oi(i);
      }
      function X_(i) {
        return typeof i == "number" && kf(i);
      }
      function Cn(i) {
        if (!it(i))
          return !1;
        var c = qt(i);
        return c == wr || c == Ye || c == dn || c == Zn;
      }
      function Yh(i) {
        return typeof i == "number" && i == Ne(i);
      }
      function ns(i) {
        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= oe;
      }
      function it(i) {
        var c = typeof i;
        return i != null && (c == "object" || c == "function");
      }
      function at(i) {
        return i != null && typeof i == "object";
      }
      var Qh = uf ? cr(uf) : rE;
      function Z_(i, c) {
        return i === c || Jc(i, c, pl(c));
      }
      function eS(i, c, d) {
        return d = typeof d == "function" ? d : t, Jc(i, c, pl(c), d);
      }
      function tS(i) {
        return Jh(i) && i != +i;
      }
      function rS(i) {
        if (HE(i))
          throw new Ie(a);
        return qf(i);
      }
      function nS(i) {
        return i === null;
      }
      function oS(i) {
        return i == null;
      }
      function Jh(i) {
        return typeof i == "number" || at(i) && qt(i) == Nt;
      }
      function Oi(i) {
        if (!at(i) || qt(i) != gt)
          return !1;
        var c = Pa(i);
        if (c === null)
          return !0;
        var d = We.call(c, "constructor") && c.constructor;
        return typeof d == "function" && d instanceof d && Ia.call(d) == ew;
      }
      var Tl = df ? cr(df) : nE;
      function iS(i) {
        return Yh(i) && i >= -oe && i <= oe;
      }
      var Xh = ff ? cr(ff) : oE;
      function os(i) {
        return typeof i == "string" || !Re(i) && at(i) && qt(i) == tt;
      }
      function ur(i) {
        return typeof i == "symbol" || at(i) && qt(i) == Jr;
      }
      var qo = hf ? cr(hf) : iE;
      function aS(i) {
        return i === t;
      }
      function sS(i) {
        return at(i) && xt(i) == mi;
      }
      function cS(i) {
        return at(i) && qt(i) == Sy;
      }
      var lS = ja(Zc), uS = ja(function(i, c) {
        return i <= c;
      });
      function Zh(i) {
        if (!i)
          return [];
        if (Qt(i))
          return os(i) ? Hr(i) : Yt(i);
        if (Ci && i[Ci])
          return qC(i[Ci]());
        var c = xt(i), d = c == Pt ? Bc : c == _t ? _a : $o;
        return d(i);
      }
      function wn(i) {
        if (!i)
          return i === 0 ? i : 0;
        if (i = Rr(i), i === ae || i === -ae) {
          var c = i < 0 ? -1 : 1;
          return c * Pe;
        }
        return i === i ? i : 0;
      }
      function Ne(i) {
        var c = wn(i), d = c % 1;
        return c === c ? d ? c - d : c : 0;
      }
      function ep(i) {
        return i ? oo(Ne(i), 0, ot) : 0;
      }
      function Rr(i) {
        if (typeof i == "number")
          return i;
        if (ur(i))
          return Qe;
        if (it(i)) {
          var c = typeof i.valueOf == "function" ? i.valueOf() : i;
          i = it(c) ? c + "" : c;
        }
        if (typeof i != "string")
          return i === 0 ? i : +i;
        i = Cf(i);
        var d = zy.test(i);
        return d || Wy.test(i) ? TC(i.slice(2), d ? 2 : 8) : Gy.test(i) ? Qe : +i;
      }
      function tp(i) {
        return Zr(i, Jt(i));
      }
      function dS(i) {
        return i ? oo(Ne(i), -oe, oe) : i === 0 ? i : 0;
      }
      function Ge(i) {
        return i == null ? "" : lr(i);
      }
      var fS = Ho(function(i, c) {
        if (Pi(c) || Qt(c)) {
          Zr(c, wt(c), i);
          return;
        }
        for (var d in c)
          We.call(c, d) && Si(i, d, c[d]);
      }), rp = Ho(function(i, c) {
        Zr(c, Jt(c), i);
      }), is = Ho(function(i, c, d, m) {
        Zr(c, Jt(c), i, m);
      }), hS = Ho(function(i, c, d, m) {
        Zr(c, wt(c), i, m);
      }), pS = vn(Vc);
      function gS(i, c) {
        var d = Fo(i);
        return c == null ? d : xf(d, c);
      }
      var mS = Me(function(i, c) {
        i = Je(i);
        var d = -1, m = c.length, y = m > 2 ? c[2] : t;
        for (y && $t(c[0], c[1], y) && (m = 1); ++d < m; )
          for (var b = c[d], T = Jt(b), k = -1, x = T.length; ++k < x; ) {
            var B = T[k], K = i[B];
            (K === t || Kr(K, Lo[B]) && !We.call(i, B)) && (i[B] = b[B]);
          }
        return i;
      }), vS = Me(function(i) {
        return i.push(t, Ch), sr(np, t, i);
      });
      function yS(i, c) {
        return gf(i, pe(c, 3), Xr);
      }
      function CS(i, c) {
        return gf(i, pe(c, 3), jc);
      }
      function wS(i, c) {
        return i == null ? i : Wc(i, pe(c, 3), Jt);
      }
      function ES(i, c) {
        return i == null ? i : Hf(i, pe(c, 3), Jt);
      }
      function bS(i, c) {
        return i && Xr(i, pe(c, 3));
      }
      function _S(i, c) {
        return i && jc(i, pe(c, 3));
      }
      function SS(i) {
        return i == null ? [] : Ba(i, wt(i));
      }
      function TS(i) {
        return i == null ? [] : Ba(i, Jt(i));
      }
      function Il(i, c, d) {
        var m = i == null ? t : io(i, c);
        return m === t ? d : m;
      }
      function IS(i, c) {
        return i != null && bh(i, c, Yw);
      }
      function Al(i, c) {
        return i != null && bh(i, c, Qw);
      }
      var AS = ph(function(i, c, d) {
        c != null && typeof c.toString != "function" && (c = Aa.call(c)), i[c] = d;
      }, kl(Xt)), RS = ph(function(i, c, d) {
        c != null && typeof c.toString != "function" && (c = Aa.call(c)), We.call(i, c) ? i[c].push(d) : i[c] = [d];
      }, pe), kS = Me(Ii);
      function wt(i) {
        return Qt(i) ? Of(i) : Xc(i);
      }
      function Jt(i) {
        return Qt(i) ? Of(i, !0) : aE(i);
      }
      function PS(i, c) {
        var d = {};
        return c = pe(c, 3), Xr(i, function(m, y, b) {
          gn(d, c(m, y, b), m);
        }), d;
      }
      function NS(i, c) {
        var d = {};
        return c = pe(c, 3), Xr(i, function(m, y, b) {
          gn(d, y, c(m, y, b));
        }), d;
      }
      var OS = Ho(function(i, c, d) {
        Ka(i, c, d);
      }), np = Ho(function(i, c, d, m) {
        Ka(i, c, d, m);
      }), MS = vn(function(i, c) {
        var d = {};
        if (i == null)
          return d;
        var m = !1;
        c = nt(c, function(b) {
          return b = Hn(b, i), m || (m = b.length > 1), b;
        }), Zr(i, fl(i), d), m && (d = Tr(d, p | g | v, AE));
        for (var y = c.length; y--; )
          ol(d, c[y]);
        return d;
      });
      function xS(i, c) {
        return op(i, rs(pe(c)));
      }
      var LS = vn(function(i, c) {
        return i == null ? {} : cE(i, c);
      });
      function op(i, c) {
        if (i == null)
          return {};
        var d = nt(fl(i), function(m) {
          return [m];
        });
        return c = pe(c), Yf(i, d, function(m, y) {
          return c(m, y[0]);
        });
      }
      function DS(i, c, d) {
        c = Hn(c, i);
        var m = -1, y = c.length;
        for (y || (y = 1, i = t); ++m < y; ) {
          var b = i == null ? t : i[en(c[m])];
          b === t && (m = y, b = d), i = Cn(b) ? b.call(i) : b;
        }
        return i;
      }
      function US(i, c, d) {
        return i == null ? i : Ri(i, c, d);
      }
      function FS(i, c, d, m) {
        return m = typeof m == "function" ? m : t, i == null ? i : Ri(i, c, d, m);
      }
      var ip = vh(wt), ap = vh(Jt);
      function HS(i, c, d) {
        var m = Re(i), y = m || Kn(i) || qo(i);
        if (c = pe(c, 4), d == null) {
          var b = i && i.constructor;
          y ? d = m ? new b() : [] : it(i) ? d = Cn(b) ? Fo(Pa(i)) : {} : d = {};
        }
        return (y ? br : Xr)(i, function(T, k, x) {
          return c(d, T, k, x);
        }), d;
      }
      function BS(i, c) {
        return i == null ? !0 : ol(i, c);
      }
      function KS(i, c, d) {
        return i == null ? i : eh(i, c, sl(d));
      }
      function qS(i, c, d, m) {
        return m = typeof m == "function" ? m : t, i == null ? i : eh(i, c, sl(d), m);
      }
      function $o(i) {
        return i == null ? [] : Hc(i, wt(i));
      }
      function $S(i) {
        return i == null ? [] : Hc(i, Jt(i));
      }
      function GS(i, c, d) {
        return d === t && (d = c, c = t), d !== t && (d = Rr(d), d = d === d ? d : 0), c !== t && (c = Rr(c), c = c === c ? c : 0), oo(Rr(i), c, d);
      }
      function zS(i, c, d) {
        return c = wn(c), d === t ? (d = c, c = 0) : d = wn(d), i = Rr(i), Jw(i, c, d);
      }
      function VS(i, c, d) {
        if (d && typeof d != "boolean" && $t(i, c, d) && (c = d = t), d === t && (typeof c == "boolean" ? (d = c, c = t) : typeof i == "boolean" && (d = i, i = t)), i === t && c === t ? (i = 0, c = 1) : (i = wn(i), c === t ? (c = i, i = 0) : c = wn(c)), i > c) {
          var m = i;
          i = c, c = m;
        }
        if (d || i % 1 || c % 1) {
          var y = Pf();
          return Mt(i + y * (c - i + SC("1e-" + ((y + "").length - 1))), c);
        }
        return tl(i, c);
      }
      var WS = Bo(function(i, c, d) {
        return c = c.toLowerCase(), i + (d ? sp(c) : c);
      });
      function sp(i) {
        return Rl(Ge(i).toLowerCase());
      }
      function cp(i) {
        return i = Ge(i), i && i.replace(Yy, UC).replace(pC, "");
      }
      function jS(i, c, d) {
        i = Ge(i), c = lr(c);
        var m = i.length;
        d = d === t ? m : oo(Ne(d), 0, m);
        var y = d;
        return d -= c.length, d >= 0 && i.slice(d, y) == c;
      }
      function YS(i) {
        return i = Ge(i), i && ky.test(i) ? i.replace(Fd, FC) : i;
      }
      function QS(i) {
        return i = Ge(i), i && Ly.test(i) ? i.replace(_c, "\\$&") : i;
      }
      var JS = Bo(function(i, c, d) {
        return i + (d ? "-" : "") + c.toLowerCase();
      }), XS = Bo(function(i, c, d) {
        return i + (d ? " " : "") + c.toLowerCase();
      }), ZS = dh("toLowerCase");
      function eT(i, c, d) {
        i = Ge(i), c = Ne(c);
        var m = c ? Mo(i) : 0;
        if (!c || m >= c)
          return i;
        var y = (c - m) / 2;
        return Wa(xa(y), d) + i + Wa(Ma(y), d);
      }
      function tT(i, c, d) {
        i = Ge(i), c = Ne(c);
        var m = c ? Mo(i) : 0;
        return c && m < c ? i + Wa(c - m, d) : i;
      }
      function rT(i, c, d) {
        i = Ge(i), c = Ne(c);
        var m = c ? Mo(i) : 0;
        return c && m < c ? Wa(c - m, d) + i : i;
      }
      function nT(i, c, d) {
        return d || c == null ? c = 0 : c && (c = +c), uw(Ge(i).replace(Sc, ""), c || 0);
      }
      function oT(i, c, d) {
        return (d ? $t(i, c, d) : c === t) ? c = 1 : c = Ne(c), rl(Ge(i), c);
      }
      function iT() {
        var i = arguments, c = Ge(i[0]);
        return i.length < 3 ? c : c.replace(i[1], i[2]);
      }
      var aT = Bo(function(i, c, d) {
        return i + (d ? "_" : "") + c.toLowerCase();
      });
      function sT(i, c, d) {
        return d && typeof d != "number" && $t(i, c, d) && (c = d = t), d = d === t ? ot : d >>> 0, d ? (i = Ge(i), i && (typeof c == "string" || c != null && !Tl(c)) && (c = lr(c), !c && Oo(i)) ? Bn(Hr(i), 0, d) : i.split(c, d)) : [];
      }
      var cT = Bo(function(i, c, d) {
        return i + (d ? " " : "") + Rl(c);
      });
      function lT(i, c, d) {
        return i = Ge(i), d = d == null ? 0 : oo(Ne(d), 0, i.length), c = lr(c), i.slice(d, d + c.length) == c;
      }
      function uT(i, c, d) {
        var m = w.templateSettings;
        d && $t(i, c, d) && (c = t), i = Ge(i), c = is({}, c, m, yh);
        var y = is({}, c.imports, m.imports, yh), b = wt(y), T = Hc(y, b), k, x, B = 0, K = c.interpolate || ya, V = "__p += '", ee = Kc(
          (c.escape || ya).source + "|" + K.source + "|" + (K === Hd ? $y : ya).source + "|" + (c.evaluate || ya).source + "|$",
          "g"
        ), de = "//# sourceURL=" + (We.call(c, "sourceURL") ? (c.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++CC + "]") + `
`;
        i.replace(ee, function(ve, xe, Fe, dr, Gt, fr) {
          return Fe || (Fe = dr), V += i.slice(B, fr).replace(Qy, HC), xe && (k = !0, V += `' +
__e(` + xe + `) +
'`), Gt && (x = !0, V += `';
` + Gt + `;
__p += '`), Fe && (V += `' +
((__t = (` + Fe + `)) == null ? '' : __t) +
'`), B = fr + ve.length, ve;
        }), V += `';
`;
        var me = We.call(c, "variable") && c.variable;
        if (!me)
          V = `with (obj) {
` + V + `
}
`;
        else if (Ky.test(me))
          throw new Ie(l);
        V = (x ? V.replace(Ty, "") : V).replace(Iy, "$1").replace(Ay, "$1;"), V = "function(" + (me || "obj") + `) {
` + (me ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (k ? ", __e = _.escape" : "") + (x ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + V + `return __p
}`;
        var Oe = up(function() {
          return qe(b, de + "return " + V).apply(t, T);
        });
        if (Oe.source = V, Sl(Oe))
          throw Oe;
        return Oe;
      }
      function dT(i) {
        return Ge(i).toLowerCase();
      }
      function fT(i) {
        return Ge(i).toUpperCase();
      }
      function hT(i, c, d) {
        if (i = Ge(i), i && (d || c === t))
          return Cf(i);
        if (!i || !(c = lr(c)))
          return i;
        var m = Hr(i), y = Hr(c), b = wf(m, y), T = Ef(m, y) + 1;
        return Bn(m, b, T).join("");
      }
      function pT(i, c, d) {
        if (i = Ge(i), i && (d || c === t))
          return i.slice(0, _f(i) + 1);
        if (!i || !(c = lr(c)))
          return i;
        var m = Hr(i), y = Ef(m, Hr(c)) + 1;
        return Bn(m, 0, y).join("");
      }
      function gT(i, c, d) {
        if (i = Ge(i), i && (d || c === t))
          return i.replace(Sc, "");
        if (!i || !(c = lr(c)))
          return i;
        var m = Hr(i), y = wf(m, Hr(c));
        return Bn(m, y).join("");
      }
      function mT(i, c) {
        var d = Y, m = te;
        if (it(c)) {
          var y = "separator" in c ? c.separator : y;
          d = "length" in c ? Ne(c.length) : d, m = "omission" in c ? lr(c.omission) : m;
        }
        i = Ge(i);
        var b = i.length;
        if (Oo(i)) {
          var T = Hr(i);
          b = T.length;
        }
        if (d >= b)
          return i;
        var k = d - Mo(m);
        if (k < 1)
          return m;
        var x = T ? Bn(T, 0, k).join("") : i.slice(0, k);
        if (y === t)
          return x + m;
        if (T && (k += x.length - k), Tl(y)) {
          if (i.slice(k).search(y)) {
            var B, K = x;
            for (y.global || (y = Kc(y.source, Ge(Bd.exec(y)) + "g")), y.lastIndex = 0; B = y.exec(K); )
              var V = B.index;
            x = x.slice(0, V === t ? k : V);
          }
        } else if (i.indexOf(lr(y), k) != k) {
          var ee = x.lastIndexOf(y);
          ee > -1 && (x = x.slice(0, ee));
        }
        return x + m;
      }
      function vT(i) {
        return i = Ge(i), i && Ry.test(i) ? i.replace(Ud, VC) : i;
      }
      var yT = Bo(function(i, c, d) {
        return i + (d ? " " : "") + c.toUpperCase();
      }), Rl = dh("toUpperCase");
      function lp(i, c, d) {
        return i = Ge(i), c = d ? t : c, c === t ? KC(i) ? YC(i) : OC(i) : i.match(c) || [];
      }
      var up = Me(function(i, c) {
        try {
          return sr(i, t, c);
        } catch (d) {
          return Sl(d) ? d : new Ie(d);
        }
      }), CT = vn(function(i, c) {
        return br(c, function(d) {
          d = en(d), gn(i, d, bl(i[d], i));
        }), i;
      });
      function wT(i) {
        var c = i == null ? 0 : i.length, d = pe();
        return i = c ? nt(i, function(m) {
          if (typeof m[1] != "function")
            throw new _r(s);
          return [d(m[0]), m[1]];
        }) : [], Me(function(m) {
          for (var y = -1; ++y < c; ) {
            var b = i[y];
            if (sr(b[0], this, m))
              return sr(b[1], this, m);
          }
        });
      }
      function ET(i) {
        return Vw(Tr(i, p));
      }
      function kl(i) {
        return function() {
          return i;
        };
      }
      function bT(i, c) {
        return i == null || i !== i ? c : i;
      }
      var _T = hh(), ST = hh(!0);
      function Xt(i) {
        return i;
      }
      function Pl(i) {
        return $f(typeof i == "function" ? i : Tr(i, p));
      }
      function TT(i) {
        return zf(Tr(i, p));
      }
      function IT(i, c) {
        return Vf(i, Tr(c, p));
      }
      var AT = Me(function(i, c) {
        return function(d) {
          return Ii(d, i, c);
        };
      }), RT = Me(function(i, c) {
        return function(d) {
          return Ii(i, d, c);
        };
      });
      function Nl(i, c, d) {
        var m = wt(c), y = Ba(c, m);
        d == null && !(it(c) && (y.length || !m.length)) && (d = c, c = i, i = this, y = Ba(c, wt(c)));
        var b = !(it(d) && "chain" in d) || !!d.chain, T = Cn(i);
        return br(y, function(k) {
          var x = c[k];
          i[k] = x, T && (i.prototype[k] = function() {
            var B = this.__chain__;
            if (b || B) {
              var K = i(this.__wrapped__), V = K.__actions__ = Yt(this.__actions__);
              return V.push({ func: x, args: arguments, thisArg: i }), K.__chain__ = B, K;
            }
            return x.apply(i, xn([this.value()], arguments));
          });
        }), i;
      }
      function kT() {
        return St._ === this && (St._ = tw), this;
      }
      function Ol() {
      }
      function PT(i) {
        return i = Ne(i), Me(function(c) {
          return Wf(c, i);
        });
      }
      var NT = ll(nt), OT = ll(pf), MT = ll(xc);
      function dp(i) {
        return ml(i) ? Lc(en(i)) : lE(i);
      }
      function xT(i) {
        return function(c) {
          return i == null ? t : io(i, c);
        };
      }
      var LT = gh(), DT = gh(!0);
      function Ml() {
        return [];
      }
      function xl() {
        return !1;
      }
      function UT() {
        return {};
      }
      function FT() {
        return "";
      }
      function HT() {
        return !0;
      }
      function BT(i, c) {
        if (i = Ne(i), i < 1 || i > oe)
          return [];
        var d = ot, m = Mt(i, ot);
        c = pe(c), i -= ot;
        for (var y = Fc(m, c); ++d < i; )
          c(d);
        return y;
      }
      function KT(i) {
        return Re(i) ? nt(i, en) : ur(i) ? [i] : Yt(Nh(Ge(i)));
      }
      function qT(i) {
        var c = ++ZC;
        return Ge(i) + c;
      }
      var $T = Va(function(i, c) {
        return i + c;
      }, 0), GT = ul("ceil"), zT = Va(function(i, c) {
        return i / c;
      }, 1), VT = ul("floor");
      function WT(i) {
        return i && i.length ? Ha(i, Xt, Yc) : t;
      }
      function jT(i, c) {
        return i && i.length ? Ha(i, pe(c, 2), Yc) : t;
      }
      function YT(i) {
        return vf(i, Xt);
      }
      function QT(i, c) {
        return vf(i, pe(c, 2));
      }
      function JT(i) {
        return i && i.length ? Ha(i, Xt, Zc) : t;
      }
      function XT(i, c) {
        return i && i.length ? Ha(i, pe(c, 2), Zc) : t;
      }
      var ZT = Va(function(i, c) {
        return i * c;
      }, 1), e0 = ul("round"), t0 = Va(function(i, c) {
        return i - c;
      }, 0);
      function r0(i) {
        return i && i.length ? Uc(i, Xt) : 0;
      }
      function n0(i, c) {
        return i && i.length ? Uc(i, pe(c, 2)) : 0;
      }
      return w.after = T_, w.ary = qh, w.assign = fS, w.assignIn = rp, w.assignInWith = is, w.assignWith = hS, w.at = pS, w.before = $h, w.bind = bl, w.bindAll = CT, w.bindKey = Gh, w.castArray = U_, w.chain = Hh, w.chunk = VE, w.compact = WE, w.concat = jE, w.cond = wT, w.conforms = ET, w.constant = kl, w.countBy = r_, w.create = gS, w.curry = zh, w.curryRight = Vh, w.debounce = Wh, w.defaults = mS, w.defaultsDeep = vS, w.defer = I_, w.delay = A_, w.difference = YE, w.differenceBy = QE, w.differenceWith = JE, w.drop = XE, w.dropRight = ZE, w.dropRightWhile = eb, w.dropWhile = tb, w.fill = rb, w.filter = o_, w.flatMap = s_, w.flatMapDeep = c_, w.flatMapDepth = l_, w.flatten = Lh, w.flattenDeep = nb, w.flattenDepth = ob, w.flip = R_, w.flow = _T, w.flowRight = ST, w.fromPairs = ib, w.functions = SS, w.functionsIn = TS, w.groupBy = u_, w.initial = sb, w.intersection = cb, w.intersectionBy = lb, w.intersectionWith = ub, w.invert = AS, w.invertBy = RS, w.invokeMap = f_, w.iteratee = Pl, w.keyBy = h_, w.keys = wt, w.keysIn = Jt, w.map = Za, w.mapKeys = PS, w.mapValues = NS, w.matches = TT, w.matchesProperty = IT, w.memoize = ts, w.merge = OS, w.mergeWith = np, w.method = AT, w.methodOf = RT, w.mixin = Nl, w.negate = rs, w.nthArg = PT, w.omit = MS, w.omitBy = xS, w.once = k_, w.orderBy = p_, w.over = NT, w.overArgs = P_, w.overEvery = OT, w.overSome = MT, w.partial = _l, w.partialRight = jh, w.partition = g_, w.pick = LS, w.pickBy = op, w.property = dp, w.propertyOf = xT, w.pull = pb, w.pullAll = Uh, w.pullAllBy = gb, w.pullAllWith = mb, w.pullAt = vb, w.range = LT, w.rangeRight = DT, w.rearg = N_, w.reject = y_, w.remove = yb, w.rest = O_, w.reverse = wl, w.sampleSize = w_, w.set = US, w.setWith = FS, w.shuffle = E_, w.slice = Cb, w.sortBy = S_, w.sortedUniq = Ib, w.sortedUniqBy = Ab, w.split = sT, w.spread = M_, w.tail = Rb, w.take = kb, w.takeRight = Pb, w.takeRightWhile = Nb, w.takeWhile = Ob, w.tap = Wb, w.throttle = x_, w.thru = Xa, w.toArray = Zh, w.toPairs = ip, w.toPairsIn = ap, w.toPath = KT, w.toPlainObject = tp, w.transform = HS, w.unary = L_, w.union = Mb, w.unionBy = xb, w.unionWith = Lb, w.uniq = Db, w.uniqBy = Ub, w.uniqWith = Fb, w.unset = BS, w.unzip = El, w.unzipWith = Fh, w.update = KS, w.updateWith = qS, w.values = $o, w.valuesIn = $S, w.without = Hb, w.words = lp, w.wrap = D_, w.xor = Bb, w.xorBy = Kb, w.xorWith = qb, w.zip = $b, w.zipObject = Gb, w.zipObjectDeep = zb, w.zipWith = Vb, w.entries = ip, w.entriesIn = ap, w.extend = rp, w.extendWith = is, Nl(w, w), w.add = $T, w.attempt = up, w.camelCase = WS, w.capitalize = sp, w.ceil = GT, w.clamp = GS, w.clone = F_, w.cloneDeep = B_, w.cloneDeepWith = K_, w.cloneWith = H_, w.conformsTo = q_, w.deburr = cp, w.defaultTo = bT, w.divide = zT, w.endsWith = jS, w.eq = Kr, w.escape = YS, w.escapeRegExp = QS, w.every = n_, w.find = i_, w.findIndex = Mh, w.findKey = yS, w.findLast = a_, w.findLastIndex = xh, w.findLastKey = CS, w.floor = VT, w.forEach = Bh, w.forEachRight = Kh, w.forIn = wS, w.forInRight = ES, w.forOwn = bS, w.forOwnRight = _S, w.get = Il, w.gt = $_, w.gte = G_, w.has = IS, w.hasIn = Al, w.head = Dh, w.identity = Xt, w.includes = d_, w.indexOf = ab, w.inRange = zS, w.invoke = kS, w.isArguments = co, w.isArray = Re, w.isArrayBuffer = z_, w.isArrayLike = Qt, w.isArrayLikeObject = ft, w.isBoolean = V_, w.isBuffer = Kn, w.isDate = W_, w.isElement = j_, w.isEmpty = Y_, w.isEqual = Q_, w.isEqualWith = J_, w.isError = Sl, w.isFinite = X_, w.isFunction = Cn, w.isInteger = Yh, w.isLength = ns, w.isMap = Qh, w.isMatch = Z_, w.isMatchWith = eS, w.isNaN = tS, w.isNative = rS, w.isNil = oS, w.isNull = nS, w.isNumber = Jh, w.isObject = it, w.isObjectLike = at, w.isPlainObject = Oi, w.isRegExp = Tl, w.isSafeInteger = iS, w.isSet = Xh, w.isString = os, w.isSymbol = ur, w.isTypedArray = qo, w.isUndefined = aS, w.isWeakMap = sS, w.isWeakSet = cS, w.join = db, w.kebabCase = JS, w.last = Ar, w.lastIndexOf = fb, w.lowerCase = XS, w.lowerFirst = ZS, w.lt = lS, w.lte = uS, w.max = WT, w.maxBy = jT, w.mean = YT, w.meanBy = QT, w.min = JT, w.minBy = XT, w.stubArray = Ml, w.stubFalse = xl, w.stubObject = UT, w.stubString = FT, w.stubTrue = HT, w.multiply = ZT, w.nth = hb, w.noConflict = kT, w.noop = Ol, w.now = es, w.pad = eT, w.padEnd = tT, w.padStart = rT, w.parseInt = nT, w.random = VS, w.reduce = m_, w.reduceRight = v_, w.repeat = oT, w.replace = iT, w.result = DS, w.round = e0, w.runInContext = M, w.sample = C_, w.size = b_, w.snakeCase = aT, w.some = __, w.sortedIndex = wb, w.sortedIndexBy = Eb, w.sortedIndexOf = bb, w.sortedLastIndex = _b, w.sortedLastIndexBy = Sb, w.sortedLastIndexOf = Tb, w.startCase = cT, w.startsWith = lT, w.subtract = t0, w.sum = r0, w.sumBy = n0, w.template = uT, w.times = BT, w.toFinite = wn, w.toInteger = Ne, w.toLength = ep, w.toLower = dT, w.toNumber = Rr, w.toSafeInteger = dS, w.toString = Ge, w.toUpper = fT, w.trim = hT, w.trimEnd = pT, w.trimStart = gT, w.truncate = mT, w.unescape = vT, w.uniqueId = qT, w.upperCase = yT, w.upperFirst = Rl, w.each = Bh, w.eachRight = Kh, w.first = Dh, Nl(w, function() {
        var i = {};
        return Xr(w, function(c, d) {
          We.call(w.prototype, d) || (i[d] = c);
        }), i;
      }(), { chain: !1 }), w.VERSION = n, br(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
        w[i].placeholder = w;
      }), br(["drop", "take"], function(i, c) {
        De.prototype[i] = function(d) {
          d = d === t ? 1 : vt(Ne(d), 0);
          var m = this.__filtered__ && !c ? new De(this) : this.clone();
          return m.__filtered__ ? m.__takeCount__ = Mt(d, m.__takeCount__) : m.__views__.push({
            size: Mt(d, ot),
            type: i + (m.__dir__ < 0 ? "Right" : "")
          }), m;
        }, De.prototype[i + "Right"] = function(d) {
          return this.reverse()[i](d).reverse();
        };
      }), br(["filter", "map", "takeWhile"], function(i, c) {
        var d = c + 1, m = d == ne || d == Q;
        De.prototype[i] = function(y) {
          var b = this.clone();
          return b.__iteratees__.push({
            iteratee: pe(y, 3),
            type: d
          }), b.__filtered__ = b.__filtered__ || m, b;
        };
      }), br(["head", "last"], function(i, c) {
        var d = "take" + (c ? "Right" : "");
        De.prototype[i] = function() {
          return this[d](1).value()[0];
        };
      }), br(["initial", "tail"], function(i, c) {
        var d = "drop" + (c ? "" : "Right");
        De.prototype[i] = function() {
          return this.__filtered__ ? new De(this) : this[d](1);
        };
      }), De.prototype.compact = function() {
        return this.filter(Xt);
      }, De.prototype.find = function(i) {
        return this.filter(i).head();
      }, De.prototype.findLast = function(i) {
        return this.reverse().find(i);
      }, De.prototype.invokeMap = Me(function(i, c) {
        return typeof i == "function" ? new De(this) : this.map(function(d) {
          return Ii(d, i, c);
        });
      }), De.prototype.reject = function(i) {
        return this.filter(rs(pe(i)));
      }, De.prototype.slice = function(i, c) {
        i = Ne(i);
        var d = this;
        return d.__filtered__ && (i > 0 || c < 0) ? new De(d) : (i < 0 ? d = d.takeRight(-i) : i && (d = d.drop(i)), c !== t && (c = Ne(c), d = c < 0 ? d.dropRight(-c) : d.take(c - i)), d);
      }, De.prototype.takeRightWhile = function(i) {
        return this.reverse().takeWhile(i).reverse();
      }, De.prototype.toArray = function() {
        return this.take(ot);
      }, Xr(De.prototype, function(i, c) {
        var d = /^(?:filter|find|map|reject)|While$/.test(c), m = /^(?:head|last)$/.test(c), y = w[m ? "take" + (c == "last" ? "Right" : "") : c], b = m || /^find/.test(c);
        y && (w.prototype[c] = function() {
          var T = this.__wrapped__, k = m ? [1] : arguments, x = T instanceof De, B = k[0], K = x || Re(T), V = function(xe) {
            var Fe = y.apply(w, xn([xe], k));
            return m && ee ? Fe[0] : Fe;
          };
          K && d && typeof B == "function" && B.length != 1 && (x = K = !1);
          var ee = this.__chain__, de = !!this.__actions__.length, me = b && !ee, Oe = x && !de;
          if (!b && K) {
            T = Oe ? T : new De(this);
            var ve = i.apply(T, k);
            return ve.__actions__.push({ func: Xa, args: [V], thisArg: t }), new Sr(ve, ee);
          }
          return me && Oe ? i.apply(this, k) : (ve = this.thru(V), me ? m ? ve.value()[0] : ve.value() : ve);
        });
      }), br(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
        var c = Sa[i], d = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru", m = /^(?:pop|shift)$/.test(i);
        w.prototype[i] = function() {
          var y = arguments;
          if (m && !this.__chain__) {
            var b = this.value();
            return c.apply(Re(b) ? b : [], y);
          }
          return this[d](function(T) {
            return c.apply(Re(T) ? T : [], y);
          });
        };
      }), Xr(De.prototype, function(i, c) {
        var d = w[c];
        if (d) {
          var m = d.name + "";
          We.call(Uo, m) || (Uo[m] = []), Uo[m].push({ name: c, func: d });
        }
      }), Uo[za(t, I).name] = [{
        name: "wrapper",
        func: t
      }], De.prototype.clone = vw, De.prototype.reverse = yw, De.prototype.value = Cw, w.prototype.at = jb, w.prototype.chain = Yb, w.prototype.commit = Qb, w.prototype.next = Jb, w.prototype.plant = Zb, w.prototype.reverse = e_, w.prototype.toJSON = w.prototype.valueOf = w.prototype.value = t_, w.prototype.first = w.prototype.head, Ci && (w.prototype[Ci] = Xb), w;
    }, xo = QC();
    eo ? ((eo.exports = xo)._ = xo, Pc._ = xo) : St._ = xo;
  }).call(Mi);
})(Vs, Vs.exports);
var py = Vs.exports;
const LO = {
  bsddApiEnvironment: null,
  mainDictionary: null,
  ifcDictionary: null,
  filterDictionaries: [],
  language: "en-GB",
  includeTestDictionaries: null
}, Bg = (r, e) => {
  r.language = e.payload, bt.changeLanguage(e.payload);
}, DO = Wr("settings/setSettings"), gy = gi({
  name: "settings",
  initialState: LO,
  reducers: {
    setBsddApiEnvironment: (r, { payload: e }) => {
      r.bsddApiEnvironment = e;
    },
    setMainDictionary: (r, { payload: e }) => {
      r.mainDictionary = e;
    },
    setIfcDictionary: (r, { payload: e }) => {
      r.mainDictionary = e;
    },
    setFilterDictionaries: (r, { payload: e }) => {
      r.filterDictionaries = e;
    },
    setLanguage: Bg,
    setIncludeTestDictionaries: (r, e) => {
      r.includeTestDictionaries = e.payload;
    }
  },
  extraReducers: (r) => {
    r.addCase(
      DO,
      (e, {
        payload: {
          bsddApiEnvironment: t,
          mainDictionary: n,
          ifcDictionary: o,
          filterDictionaries: a,
          language: s,
          includeTestDictionaries: l
        }
      }) => {
        JSON.stringify(e.bsddApiEnvironment) !== JSON.stringify(t) && (e.bsddApiEnvironment = t), JSON.stringify(e.mainDictionary) !== JSON.stringify(n) && (e.mainDictionary = n), JSON.stringify(e.ifcDictionary) !== JSON.stringify(o) && (e.ifcDictionary = o), JSON.stringify(e.filterDictionaries) !== JSON.stringify(a) && (e.filterDictionaries = a), JSON.stringify(e.language) !== JSON.stringify(s) && Bg(e, { payload: s, type: "setLanguage" }), JSON.stringify(e.includeTestDictionaries) !== JSON.stringify(l) && (e.includeTestDictionaries = l);
      }
    );
  }
}), UO = (r) => {
  const e = r.settings.bsddApiEnvironment;
  return e !== null ? Nd[e] : null;
}, FO = pi(
  (r) => r.settings.mainDictionary,
  (r) => r.settings.ifcDictionary,
  (r) => r.settings.filterDictionaries,
  (r, e, t) => {
    const n = [r, e, ...t].filter(Boolean), o = new Map(n.map((a) => [a.ifcClassification.location, a]));
    return Array.from(o.values());
  }
);
pi(
  FO,
  (r) => r.map((e) => e.ifcClassification.location)
);
gy.actions;
gy.reducer;
const ku = 500, HO = 500;
let ti = null, Jl = {};
const Kg = {
  classes: {},
  dictionaries: {},
  dictionaryClasses: {},
  loaded: !1
}, BO = (r) => {
  const e = UO(r);
  return e && (!ti || ti.baseUrl !== e) && (ti = new So(e)), ti;
}, qg = ln("bsdd/fetchDictionaries", ({ bsddApiEnvironment: r, includeTestDictionaries: e }, t) => {
  if (console.log("fetchDictionaries", r), !r)
    return t.rejectWithValue("No bsddApiEnvironment provided");
  const n = new So(r), o = HO;
  let a = 0;
  const s = [];
  return new Promise((l, u) => {
    function f() {
      n.api.dictionaryV1List({ IncludeTestDictionaries: e, Limit: o, Offset: a }).then((h) => {
        h.ok || u(new Error(`HTTP error! status: ${h.status}`));
        const { data: { dictionaries: p, totalCount: g } = {} } = h;
        if (p && typeof g < "u")
          if (s.push(...p), a += o, s.length >= g) {
            const v = s.reduce((C, E) => (C[E.uri] = E, C), {});
            l(v);
          } else
            f();
        else
          u(new Error(`bSDD API error! status: ${h.status}`));
      });
    }
    f();
  });
});
async function $g(r, e, t) {
  const n = await r.api.dictionaryV1ClassesList({
    Uri: e,
    UseNestedClasses: !1,
    Limit: ku,
    Offset: t
    // languageCode: languageCode || undefined,
  });
  if (!n.ok)
    throw new Error(`HTTP error! status: ${n.status}`);
  return n.data;
}
const my = ln(
  "bsdd/fetchDictionaryClasses",
  async (r, { getState: e, dispatch: t }) => {
    const n = e();
    if (n.bsdd.dictionaryClasses[r])
      return n.bsdd.dictionaryClasses[r];
    if (Jl[r])
      return await Jl[r];
    const o = (async () => {
      const a = BO(e());
      if (!a)
        throw new Error("BsddApi is not initialized");
      const s = [];
      let l = 0;
      const u = await $g(a, r, l), f = u.classesTotalCount;
      if (f == null)
        throw new Error("Total count is null or undefined");
      s.push(...u.classes ?? []);
      const h = [];
      for (l = ku; l < f; l += ku)
        h.push(
          $g(a, r, l).then((p) => {
            s.push(...p.classes ?? []);
          })
        );
      return await Promise.all(h), t({ type: "bsdd/addDictionaryClasses", payload: { uri: r, classes: s } }), s;
    })();
    return Jl[r] = o, o;
  }
), vy = gi({
  name: "bsdd",
  initialState: Kg,
  reducers: {
    resetState: () => Kg,
    addClass: (r, e) => {
      r.classes[e.payload.uri] = e.payload.data;
    },
    addDictionaryClasses: (r, e) => {
      r.dictionaryClasses[e.payload.uri] = e.payload.data;
    }
  },
  extraReducers: (r) => {
    r.addCase(qg.pending, (e) => {
      e.loaded = !1;
    }).addCase(qg.fulfilled, (e, t) => {
      console.log("fetch dictionaries fulfilled", t.payload), e.dictionaries = t.payload, e.loaded = !0;
    }).addCase(my.rejected, (e, t) => {
      console.error("fetch dictionary classes failed", t.error), e.loaded = !0;
    });
  }
});
ln("bsdd/fetchClass", async (r, { getState: e, dispatch: t }) => {
  const n = e();
  if (n.bsdd.classes[r])
    return n.bsdd.classes[r];
  if (!ti)
    throw new Error("BsddApi is not initialized");
  const o = await ti.api.classV1List({
    Uri: r,
    IncludeClassProperties: !0,
    IncludeChildClassReferences: !0,
    IncludeClassRelations: !0
    // IncludeReverseRelations: true,
    // languageCode: languageCode || undefined,
  });
  if (!o.ok)
    throw new Error(`HTTP error! status: ${o.status}`);
  const { data: a } = o;
  return t({ type: "bsdd/addClass", payload: { uri: r, data: a } }), a;
});
const KO = (r, e) => r.bsdd.dictionaries[e], qO = (r, e) => r.bsdd.dictionaryClasses[e];
vy.actions;
vy.reducer;
const $O = async (r, e, t) => {
  if (!(r != null && r.location))
    return null;
  const n = qO(e, r.location);
  if (n)
    return n;
  const o = await t(my(r.location));
  return o.payload ? o.payload : (console.error("Failed to fetch dictionary classes"), null);
};
function GO(r, e) {
  return r.identification ? e.find((t) => t.code === r.identification) : e.find((t) => t.name === r.name);
}
function Wo(r, e) {
  return console.error(r), { ifcClassificationReference: e, validationState: "invalid", message: r };
}
async function zO(r, e, t) {
  if (r.location)
    return { ifcClassificationReference: r, validationState: "valid", message: "Location is already set" };
  if (!r.referencedSource || !r.referencedSource.location)
    return Wo(
      "Cannot patch IfcClassificationReference: missing referencedSource or its location",
      r
    );
  const n = await $O(r.referencedSource, t, e);
  if (!n)
    return Wo("Failed to fetch classes for the referencedSource location", r);
  const o = GO(r, n);
  if (!o)
    return Wo(
      "Failed to find a match for the IfcClassificationReference code or name in the classes",
      r
    );
  if (!o.uri)
    return Wo("Failed to find a URI for the matched class", r);
  const { uri: a, code: s, name: l } = o, u = {
    ...r,
    location: a ?? void 0,
    identification: s ?? void 0,
    name: l ?? void 0
  };
  if (!u.referencedSource || !u.referencedSource.location)
    return Wo("referencedSource or its location is missing", u);
  const f = KO(t, u.referencedSource.location);
  return f ? (u.referencedSource = $v(f), {
    ifcClassificationReference: u,
    validationState: "fixed",
    message: null
  }) : Wo("Failed to find a matching dictionary for the matched class", u);
}
const VO = {
  ifcEntities: []
}, yy = gi({
  name: "ifcData",
  initialState: VO,
  reducers: {
    setIfcData: (r, e) => {
      r.ifcEntities = e.payload;
    }
  }
}), { setIfcData: Cy } = yy.actions;
ln(
  "ifcData/setValidated",
  async (r, { dispatch: e, getState: t }) => {
    const n = t(), o = await Promise.all(
      r.map(async (a) => {
        const { hasAssociations: s } = a;
        if (s) {
          const l = (await Promise.all(
            s.map(async (u) => {
              if (u.type === "IfcClassificationReference") {
                const { validationState: f, ifcClassificationReference: h, message: p } = await zO(u, e, n);
                return f === "invalid" ? null : h;
              }
              return u;
            })
          )).filter((u) => u !== null);
          return { ...a, hasAssociations: l };
        }
        return a;
      })
    );
    e(Cy(o));
  }
);
const WO = (r) => r.ifcData.ifcEntities, wy = pi(WO, (r) => r[0]), jO = yy.reducer, Gg = (r) => py.groupBy(r, "dictionaryUri");
async function YO(r, e, t) {
  try {
    const n = await r.api.classV1List({ Uri: e, IncludeClassRelations: !0 }, t);
    if (n.status !== 200)
      throw new Error(`API request failed with status ${n.status}`);
    return n.data;
  } catch (n) {
    return console.error("Error fetching classification:", n), null;
  }
}
function QO(r, e) {
  var n;
  return e ? (n = e.hasAssociations) == null ? void 0 : n.find((o) => {
    var a;
    if (o.type === "IfcClassificationReference") {
      const s = o;
      return ((a = s.referencedSource) == null ? void 0 : a.location) && s.referencedSource.location === r;
    }
    return !1;
  }) : void 0;
}
const JO = (r) => {
  for (let e = r.length - 2; e >= 0; e -= 1)
    if (r[e] === r[e].toLowerCase() && r[e + 1] === r[e + 1].toUpperCase()) {
      if (r[r.length - 1] === r[r.length - 1].toUpperCase())
        return `${r.slice(0, e + 1)}.${r.slice(e + 1)}`;
      break;
    }
  return r;
}, XO = (r, e, t, n) => {
  if (!n)
    return r || "";
  const a = e === "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3" && t ? ` (${JO(t)})` : "";
  return `${r}${a}`;
}, zg = (r, e, t) => r.map((n) => ({
  value: n.uri ?? "",
  label: XO(n.name ?? "", e, n.code, t)
})), ZO = (r, e) => {
  const t = {};
  return Object.entries(e).forEach(([n, o]) => {
    t[n] = r[n] ? zg(r[n], n, !0) : zg(o, n, !1);
  }), t;
};
function eM({ api: r, activeClassificationUri: e, setClassifications: t }) {
  const n = hr(sy), o = hr(cy), a = hr(OO), s = hr(wy), l = hr(hy), [u, f] = ye(0), [h, p] = ye({}), [g, v] = ye([]), [C, E] = ye(
    () => Gg(g)
  ), [_, I] = ye({}), A = ze(
    (P) => {
      const L = {
        headers: { Accept: "text/plain" }
      }, q = new Promise(function(U) {
        const J = {
          Uri: P,
          IncludeClassRelations: !0,
          IncludeClassProperties: !0
        };
        U(
          r.api.classV1List(J, L).then((Y) => Y.status !== 200 ? (console.error(`API request failed with status ${Y.status}`), null) : Y.data).catch((Y) => (console.error("Error fetching classification:", Y), null))
        );
      });
      return p((U) => ({
        ...U,
        classificationUri: q
      })), q;
    },
    [r.api]
  );
  ge(() => {
    E(Gg(g));
  }, [g]), ge(() => {
    if (f(0), e) {
      const P = {};
      e && (P[e] = A(e)), p(P);
    }
  }, [e, A, n]), ge(() => {
    const P = {
      headers: { Accept: "text/plain" }
    };
    f(Object.keys(h).length), u !== Object.keys(h).length && Promise.allSettled(Object.values(h)).then(function(L) {
      const q = L.map((te) => te.status === "fulfilled" ? te.value : null).filter((te) => te !== null);
      L.map(async (te) => {
        if (te.status === "fulfilled") {
          const Z = te.value;
          if (Z && Z.classRelations) {
            const fe = {
              ...h
            };
            Z.classRelations.forEach((ne) => {
              ne.relatedClassUri in Object.keys(h) || (fe[ne.relatedClassUri] = YO(
                r,
                ne.relatedClassUri,
                P
              ));
            }), p(fe);
          }
        }
      });
      const U = q.filter(
        (te) => te.dictionaryUri && o.includes(te.dictionaryUri)
      ), J = Object.keys(_).filter((te) => o.includes(te)).reduce((te, Z) => (te[Z] = _[Z], te), {}), Y = py.groupBy(U, "dictionaryUri");
      Object.entries(Y).forEach(([te, Z]) => {
        Z.some((fe) => fe.uri === J[te]) || (J[te] = Z[0].uri);
      }), I(J), t(U), v(U);
    });
  }, [
    h,
    u,
    _,
    r,
    t,
    n,
    o
  ]), ge(() => {
    t(
      Object.values(_).map((P) => g.find((L) => L.uri === P)).filter((P) => P !== void 0)
    );
  }, [_, g, t]), ge(() => {
    I((P) => o.reduce((q, U) => {
      var te;
      const Y = P[U] || ((te = QO(U, s)) == null ? void 0 : te.location) || "";
      return { ...q, [U]: Y };
    }, {}));
  }, [o, s]);
  const S = ze(
    (P) => (L) => {
      if (!L)
        return;
      if (!g.find(
        (U) => U.uri === L
      )) {
        console.log(`Selected classification '${L}' not found`);
        return;
      }
      I((U) => ({
        ...U,
        [P]: L
      }));
    },
    [g]
  ), R = ZO(C, a);
  return /* @__PURE__ */ Te.jsx(Te.Fragment, { children: Object.entries(R).map(([P, L]) => /* @__PURE__ */ Te.jsx(
    lc,
    {
      mb: "sm",
      label: l[P] ? l[P].name : "",
      data: L,
      value: _[P],
      readOnly: L.length === 1,
      variant: L.length === 1 ? "filled" : "default",
      onChange: (q) => S(P)(q)
    },
    P
  )) });
}
function tM(r) {
  const { label: e, value: t, setValue: n, disabled: o } = r, [a, s] = ye(!1), [l, u] = ye(!0), f = (h) => {
    h.target.indeterminate = !1, n(h.target.checked);
  };
  return ge(() => {
    t === !0 ? (s(!0), u(!1)) : t === !1 ? (s(!1), u(!1)) : t === void 0 && (s(!1), u(!0));
  }, [t]), /* @__PURE__ */ Te.jsx(
    ma,
    {
      label: e,
      checked: a,
      indeterminate: l,
      type: "checkbox",
      onChange: (h) => f(h),
      disabled: o
    }
  );
}
function rM({ propertySet: r, property: e, propertyIndex: t, propertySets: n, setPropertySets: o }) {
  const [a, s] = ye(), l = e, u = r, f = n, h = o;
  return ge(() => {
    var p, g, v;
    switch (l.type) {
      case "IfcPropertySingleValue": {
        l.nominalValue.type === "IfcBoolean" ? s(
          /* @__PURE__ */ Te.jsx(
            tM,
            {
              label: l.name,
              disabled: !1,
              value: l.nominalValue.value,
              setValue: (C) => {
                const E = { ...f }, _ = { ...u };
                if (_.name) {
                  const I = { ...l };
                  I.nominalValue.value = C;
                  const A = _.hasProperties.findIndex(
                    (S) => S.name === l.name
                  );
                  A !== -1 && (_.hasProperties[A] = I, E[_.name] = _, h(E));
                }
              }
            }
          )
        ) : s(
          /* @__PURE__ */ Te.jsx(
            Co,
            {
              label: l.name,
              placeholder: l.nominalValue.value,
              value: l.nominalValue.value,
              onChange: (C) => {
                const E = { ...f }, _ = { ...u };
                if (_.name) {
                  const I = { ...l };
                  I.nominalValue.value = C.target.value;
                  const A = _.hasProperties.findIndex(
                    (S) => S.name === l.name
                  );
                  A != -1 && (_.hasProperties[A] = I, E[_.name] = _, h(E));
                }
              }
            }
          )
        );
        break;
      }
      case "IfcPropertyEnumeratedValue": {
        const C = (g = (p = l.enumerationValues) == null ? void 0 : p[0]) == null ? void 0 : g.value, E = ((v = l.enumerationReference) == null ? void 0 : v.enumerationValues) || [];
        s(
          /* @__PURE__ */ Te.jsx(
            lc,
            {
              label: l.name,
              value: C,
              onChange: (_) => {
                const I = E.find((P) => P.value === _), A = I ? [I] : [], S = { ...f }, R = { ...u };
                if (R.name) {
                  const P = { ...l };
                  P.enumerationValues = A;
                  const L = R.hasProperties.findIndex(
                    (q) => q.name === l.name
                  );
                  L !== -1 && (R.hasProperties[L] = P, S[R.name] = R, h(S));
                }
              },
              data: E.map((_) => ({
                value: _.value,
                label: _.value
              }))
            }
          )
        );
        break;
      }
      default: {
        s(/* @__PURE__ */ Te.jsx(Co, { placeholder: l.name, value: "{ifcProperty.nominalValue}" }));
        break;
      }
    }
  }, [l, u, s, f, h]), a;
}
const nM = {
  Boolean: "IfcBoolean",
  Character: "IfcText",
  Integer: "IfcInteger",
  Real: "IfcReal",
  String: "IfcText",
  Time: "IfcDateTime"
};
function ia(r, e) {
  const t = r && nM[r] || "default";
  let n;
  return r === "Boolean" && typeof e == "string" ? e.toUpperCase() === "TRUE" ? n = !0 : e.toUpperCase() === "FALSE" ? n = !1 : n = void 0 : n = e, {
    type: t,
    value: n
  };
}
function Ey(r, e, t) {
  if (r && r.isDefinedBy) {
    let n = r.isDefinedBy.find((o) => o.name === e);
    if (n || (n = r.isDefinedBy.find((o) => o.name === "")), n)
      return n.hasProperties.find(
        (o) => o.name === t
      );
  }
}
function oM(r, e, t, n) {
  const o = Ey(e, t, n);
  return o && "nominalValue" in o ? ia(r, o.nominalValue.value) : ia(r);
}
function iM(r, e, t, n, o) {
  const a = Ey(e, t, n);
  if (a) {
    if (a.type === "IfcPropertyEnumeratedValue")
      return o.filter(
        (s) => a.enumerationValues ? a.enumerationValues.some((l) => l.value === s.value) : !1
      );
    if ("nominalValue" in a && a.nominalValue) {
      const s = o.find(
        (l) => l.value === a.nominalValue.value
      );
      return s ? [s] : [];
    }
  }
  return [];
}
function aM(r, e, t, n) {
  var l;
  const o = ((l = r.allowedValues) == null ? void 0 : l.map(
    (u) => ia(r.dataType, u.value)
  )) || [], a = {
    type: "IfcPropertyEnumeratedValue",
    name: e,
    enumerationReference: {
      type: "IfcPropertyEnumeration",
      name: e,
      enumerationValues: o
    }
  };
  r.propertyUri && (a.specification = r.propertyUri);
  const s = r.predefinedValue ? [ia(r.dataType, r.predefinedValue)] : iM(
    r.dataType,
    n,
    t,
    e,
    o
  );
  return s.length > 0 && (a.enumerationValues = s), a;
}
function sM(r, e, t, n) {
  const o = {
    type: "IfcPropertySingleValue",
    name: e
  };
  r.propertyUri && (o.specification = r.propertyUri);
  const a = r.predefinedValue ? ia(r.dataType, r.predefinedValue) : oM(r.dataType, n, t, e);
  return a !== null && (o.nominalValue = a), o;
}
function cM(r, e, t) {
  const { propertyCode: n } = r, o = n || "unknown";
  return r.allowedValues ? aM(r, o, e, t) : sM(r, o, e, t);
}
function lM(r) {
  Mu();
  const { classifications: e } = r, { propertySets: t } = r, { setPropertySets: n } = r, { recursiveMode: o } = r, a = hr(wy);
  return ge(() => {
    const s = {};
    (o ? e : e.slice(0, 1)).forEach((u) => {
      var f;
      (f = u.classProperties) == null || f.forEach((h) => {
        if (!h)
          return;
        const p = h.propertySet || u.name;
        s[p] || (s[p] = {
          type: "IfcPropertySet",
          name: p,
          hasProperties: []
        }), s[p].hasProperties.push(cM(h, p, a));
      });
    }), n(s);
  }, [e, n, o, a]), /* @__PURE__ */ Te.jsx("div", { children: Xl.toArray(
    Object.values(t).map((s, l) => /* @__PURE__ */ Te.jsx(Et, { children: /* @__PURE__ */ Te.jsxs(Et.Item, { value: s.name || l.toString(), children: [
      /* @__PURE__ */ Te.jsx(Et.Control, { children: s.name }),
      /* @__PURE__ */ Te.jsx(Et.Panel, { children: /* @__PURE__ */ Te.jsx(Pd, { children: Xl.toArray(
        s.hasProperties.map((u, f) => /* @__PURE__ */ Te.jsx(
          rM,
          {
            propertySet: s,
            property: u,
            propertyIndex: f,
            propertySets: t,
            setPropertySets: n
          }
        ))
      ) }) })
    ] }, s.name) }))
  ) });
}
function uM({ api: r, defaultValue: e, setActiveClassificationUri: t }) {
  var A;
  const [n, o] = ye([]), a = hr(ly), s = Ke(null), l = Ke(e), [u, f] = ye(l.current), [h, p] = ye(((A = l.current) == null ? void 0 : A.label) || ""), [g] = WA(h, 300), [v, C] = ye(!1), E = ze((S) => {
    p(S);
  }, []), _ = ze(
    (S) => {
      const R = n.find((P) => P.value === S);
      R && (f(R), C(!0));
    },
    [n]
  ), I = ze(
    (S) => {
      S.key === "Enter" && n[0] && (p(n[0].label), _(n[0].value), s.current && s.current.blur());
    },
    [n, _, s]
  );
  return ge(() => {
    e && !v && (p(e.label), f(e));
  }, [e, u, v]), ge(() => {
    if (a) {
      const S = {
        headers: { Accept: "text/plain" }
      }, R = {
        SearchText: g,
        DictionaryUri: a.ifcClassification.location
      };
      r.api.searchInDictionaryV1List(R, S).then((P) => {
        var q;
        const L = P.data;
        if (L) {
          if (L.count) {
            const U = (q = L.dictionary) == null ? void 0 : q.classes;
            U && o(
              U.filter((J) => J.uri && J.name).map(
                (J) => ({
                  value: J.uri,
                  label: J.name
                })
              )
            );
          }
        } else
          console.error("API response data is null", P);
      }).catch((P) => {
        console.error("API request failed", P);
      });
    } else
      o([]);
  }, [r.api, g, a]), ge(() => {
    s.current && s.current.focus();
  }, []), ge(() => {
    u && t(u.value);
  }, [u, t]), /* @__PURE__ */ Te.jsx(
    Ad,
    {
      data: n,
      placeholder: "bSDD search...",
      value: h,
      onChange: E,
      onOptionSubmit: _,
      onKeyDown: I,
      ref: s,
      style: { width: "100%" }
    }
  );
}
function dM() {
  const { t: r } = Mu(), e = m1(), [t, n] = ye(), [o, a] = ye(), [s, l] = ye(), [u, f] = ye(!1), [h, p] = ye([]), [g, v] = ye({}), [C, E] = ye(new So(Nd[g1])), _ = hr(ly), [I, A] = ye(null), S = hr(Au), R = hr(Au), P = hr(TO), L = hr(cy), q = ze((Y) => {
    var Z;
    const te = JSON.stringify(Y);
    (Z = window == null ? void 0 : window.bsddBridge) == null || Z.save(te).then((fe) => {
      console.log("Sent to Revit", fe);
    });
  }, []), U = ze(() => {
    var Y;
    (Y = window == null ? void 0 : window.bsddBridge) == null || Y.cancel();
  }, []), J = (Y) => {
    A(Y);
  };
  return ge(() => {
    I && (console.log("settings updated: ", I), e(iy(I)), A(null));
  }, [I, e]), ge(() => {
    S && E(new So(S));
  }, [S]), ge(() => {
  }, [e]), ge(() => {
    (async () => {
      if (window != null && window.bsddBridge) {
        const te = await window.bsddBridge.loadSettings(), { settings: Z, ifcData: fe } = JSON.parse(te);
        if (e(Cy(fe)), J(Z), !fe || fe.length === 0)
          return;
        l(fe[0]);
      }
    })();
  }, []), ge(() => {
    var te;
    if (!s || !_)
      return;
    const Y = _.ifcClassification.location;
    (te = s.hasAssociations) == null || te.forEach((Z) => {
      var fe;
      if (Z.type === "IfcClassificationReference") {
        const ne = Z;
        (fe = ne.referencedSource) != null && fe.location && ne.referencedSource.location === Y && (ne.location && n(ne.location), a({
          label: ne.name,
          value: ne.location
        }));
      }
    });
  }, [_, s]), ge(() => {
    if (S !== null && P !== null) {
      const Y = {
        bsddApiEnvironment: S,
        includeTestDictionaries: P,
        dictionaryUris: L
      };
      e(dy(L)), e(kO(Y)), e(NO(Y));
    }
  }, [S, R, P, e, L]), /* @__PURE__ */ Te.jsxs(kd, { children: [
    /* @__PURE__ */ Te.jsx(Co, { type: "hidden", name: "ifcType", id: "ifcType", value: "" }),
    /* @__PURE__ */ Te.jsx(Co, { type: "hidden", name: "name", id: "name", value: "" }),
    /* @__PURE__ */ Te.jsx(Co, { type: "hidden", name: "material", id: "material", value: "" }),
    /* @__PURE__ */ Te.jsx(Hs, { mx: "md", mt: "lg", mb: "sm", children: /* @__PURE__ */ Te.jsx(uM, { api: C, defaultValue: o, setActiveClassificationUri: n }) }),
    /* @__PURE__ */ Te.jsxs(Et, { defaultValue: ["Classifications"], multiple: !0, children: [
      /* @__PURE__ */ Te.jsxs(Et.Item, { value: "Classifications", children: [
        /* @__PURE__ */ Te.jsx(Et.Control, { children: /* @__PURE__ */ Te.jsx(Bs, { order: 5, children: r("classificationsLabel") }) }),
        /* @__PURE__ */ Te.jsx(Et.Panel, { children: /* @__PURE__ */ Te.jsx(
          eM,
          {
            api: C,
            activeClassificationUri: t,
            setClassifications: p
          }
        ) })
      ] }, "Classifications"),
      /* @__PURE__ */ Te.jsxs(Et.Item, { value: "Propertysets", children: [
        /* @__PURE__ */ Te.jsx(Et.Control, { children: /* @__PURE__ */ Te.jsx(Bs, { order: 5, children: r("propertysetsLabel") }) }),
        /* @__PURE__ */ Te.jsx(Et.Panel, { children: /* @__PURE__ */ Te.jsx(
          lM,
          {
            classifications: h,
            propertySets: g,
            setPropertySets: v,
            recursiveMode: u
          }
        ) })
      ] }, "Propertysets")
    ] }),
    /* @__PURE__ */ Te.jsxs(Hs, { my: "sm", justify: "center", children: [
      /* @__PURE__ */ Te.jsx(
        xO,
        {
          callback: q,
          classifications: h,
          propertySetMap: g,
          ifcEntity: s
        }
      ),
      /* @__PURE__ */ Te.jsx(va, { fullWidth: !0, variant: "light", color: "gray", onClick: U, children: r("cancel") })
    ] })
  ] });
}
function fM() {
  const [r, e] = ye(null);
  return ge(() => {
    const t = new AA(f1);
    e(t);
  }, []), r ? /* @__PURE__ */ Te.jsx(Om, { theme: d1, children: /* @__PURE__ */ Te.jsx(dM, {}) }) : /* @__PURE__ */ Te.jsx("div", { children: "Loading..." });
}
const hM = {
  name: void 0,
  description: void 0,
  tag: void 0,
  predefinedType: void 0,
  isDefinedBy: [],
  hasAssociations: []
}, by = gi({
  name: "ifcEntity",
  initialState: hM,
  reducers: {
    setifcEntity: (r, e) => {
      r.name = e.payload.name, r.description = e.payload.description, r.tag = e.payload.tag, r.predefinedType = e.payload.predefinedType, r.isDefinedBy = e.payload.isDefinedBy, r.hasAssociations = e.payload.hasAssociations;
    },
    setName: (r, e) => {
      r.name = e.payload;
    },
    setDescription: (r, e) => {
      r.description = e.payload;
    },
    setTag: (r, e) => {
      r.tag = e.payload;
    },
    setPredefinedType: (r, e) => {
      r.predefinedType = e.payload;
    },
    setIsDefinedBy: (r, e) => {
      r.isDefinedBy = e.payload;
    },
    setHasAssociations: (r, e) => {
      r.hasAssociations = e.payload;
    }
  }
});
by.actions;
const pM = by.reducer, gM = eO({
  reducer: {
    settings: IO,
    ifcData: jO,
    ifcEntity: pM,
    bsdd: MO
  }
});
Zl.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ Te.jsx(N.StrictMode, { children: /* @__PURE__ */ Te.jsx(U0, { store: gM, children: /* @__PURE__ */ Te.jsx(fM, {}) }) })
);
