var XT = Object.defineProperty;
var ZT = (r, e, t) => e in r ? XT(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var zt = (r, e, t) => (ZT(r, typeof e != "symbol" ? e + "" : e, t), t);
import * as Le from "react";
import P, { createContext as So, useContext as jn, useState as ge, useRef as Ke, useEffect as me, useMemo as ms, useCallback as ze, useLayoutEffect as Ru, useId as $g, forwardRef as lt, cloneElement as Vs, Children as Xl, createElement as fp } from "react";
import * as e0 from "react-dom";
import t0, { flushSync as r0, createPortal as n0 } from "react-dom";
var Mi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function o0(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Gg = { exports: {} }, Ws = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var i0 = P, a0 = Symbol.for("react.element"), s0 = Symbol.for("react.fragment"), c0 = Object.prototype.hasOwnProperty, l0 = i0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function zg(r, e, t) {
  var n, o = {}, a = null, s = null;
  t !== void 0 && (a = "" + t), e.key !== void 0 && (a = "" + e.key), e.ref !== void 0 && (s = e.ref);
  for (n in e)
    c0.call(e, n) && !u0.hasOwnProperty(n) && (o[n] = e[n]);
  if (r && r.defaultProps)
    for (n in e = r.defaultProps, e)
      o[n] === void 0 && (o[n] = e[n]);
  return { $$typeof: a0, type: r, key: a, ref: s, props: o, _owner: l0.current };
}
Ws.Fragment = s0;
Ws.jsx = zg;
Ws.jsxs = zg;
Gg.exports = Ws;
var Te = Gg.exports, Zl = {}, hp = t0;
Zl.createRoot = hp.createRoot, Zl.hydrateRoot = hp.hydrateRoot;
var Vg = { exports: {} }, Wg = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = P;
function d0(r, e) {
  return r === e && (r !== 0 || 1 / r === 1 / e) || r !== r && e !== e;
}
var f0 = typeof Object.is == "function" ? Object.is : d0, h0 = aa.useSyncExternalStore, p0 = aa.useRef, g0 = aa.useEffect, m0 = aa.useMemo, v0 = aa.useDebugValue;
Wg.useSyncExternalStoreWithSelector = function(r, e, t, n, o) {
  var a = p0(null);
  if (a.current === null) {
    var s = { hasValue: !1, value: null };
    a.current = s;
  } else
    s = a.current;
  a = m0(function() {
    function u(v) {
      if (!f) {
        if (f = !0, h = v, v = n(v), o !== void 0 && s.hasValue) {
          var C = s.value;
          if (o(C, v))
            return p = C;
        }
        return p = v;
      }
      if (C = p, f0(h, v))
        return C;
      var E = n(v);
      return o !== void 0 && o(C, E) ? C : (h = v, p = E);
    }
    var f = !1, h, p, m = t === void 0 ? null : t;
    return [function() {
      return u(e());
    }, m === null ? void 0 : function() {
      return u(m());
    }];
  }, [e, t, n, o]);
  var l = h0(r, a[0], a[1]);
  return g0(function() {
    s.hasValue = !0, s.value = l;
  }, [l]), v0(l), l;
};
Vg.exports = Wg;
var y0 = Vg.exports, hr = (
  // prettier-ignore
  // @ts-ignore
  "default" in Le ? Le.default : Le
), pp = Symbol.for("react-redux-context"), gp = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function C0() {
  if (!hr.createContext)
    return {};
  const r = gp[pp] ?? (gp[pp] = /* @__PURE__ */ new Map());
  let e = r.get(hr.createContext);
  return e || (e = hr.createContext(
    null
  ), r.set(hr.createContext, e)), e;
}
var Gn = /* @__PURE__ */ C0(), w0 = () => {
  throw new Error("uSES not initialized!");
};
function ku(r = Gn) {
  return function() {
    return hr.useContext(r);
  };
}
var jg = /* @__PURE__ */ ku(), Yg = w0, E0 = (r) => {
  Yg = r;
}, b0 = (r, e) => r === e;
function _0(r = Gn) {
  const e = r === Gn ? jg : ku(r), t = (n, o = {}) => {
    const { equalityFn: a = b0, devModeChecks: s = {} } = typeof o == "function" ? { equalityFn: o } : o, {
      store: l,
      subscription: u,
      getServerState: f,
      stabilityCheck: h,
      identityFunctionCheck: p
    } = e();
    hr.useRef(!0);
    const m = hr.useCallback(
      {
        [n.name](C) {
          return n(C);
        }
      }[n.name],
      [n, h, s.stabilityCheck]
    ), v = Yg(
      u.addNestedSub,
      l.getState,
      f || l.getState,
      m,
      a
    );
    return hr.useDebugValue(v), v;
  };
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var S0 = /* @__PURE__ */ _0();
function T0(r) {
  r();
}
function I0() {
  let r = null, e = null;
  return {
    clear() {
      r = null, e = null;
    },
    notify() {
      T0(() => {
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
var mp = {
  notify() {
  },
  get: () => []
};
function A0(r, e) {
  let t, n = mp, o = 0, a = !1;
  function s(E) {
    h();
    const _ = n.subscribe(E);
    let R = !1;
    return () => {
      R || (R = !0, _(), p());
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
    o++, t || (t = e ? e.addNestedSub(u) : r.subscribe(u), n = I0());
  }
  function p() {
    o--, t && o === 0 && (t(), t = void 0, n.clear(), n = mp);
  }
  function m() {
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
    trySubscribe: m,
    tryUnsubscribe: v,
    getListeners: () => n
  };
  return C;
}
var R0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", k0 = R0 ? hr.useLayoutEffect : hr.useEffect;
function P0({
  store: r,
  context: e,
  children: t,
  serverState: n,
  stabilityCheck: o = "once",
  identityFunctionCheck: a = "once"
}) {
  const s = hr.useMemo(() => {
    const f = A0(r);
    return {
      store: r,
      subscription: f,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      identityFunctionCheck: a
    };
  }, [r, n, o, a]), l = hr.useMemo(() => r.getState(), [r]);
  k0(() => {
    const { subscription: f } = s;
    return f.onStateChange = f.notifyNestedSubs, f.trySubscribe(), l !== r.getState() && f.notifyNestedSubs(), () => {
      f.tryUnsubscribe(), f.onStateChange = void 0;
    };
  }, [s, l]);
  const u = e || Gn;
  return /* @__PURE__ */ hr.createElement(u.Provider, { value: s }, t);
}
var N0 = P0;
function Qg(r = Gn) {
  const e = r === Gn ? jg : (
    // @ts-ignore
    ku(r)
  ), t = () => {
    const { store: n } = e();
    return n;
  };
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var O0 = /* @__PURE__ */ Qg();
function M0(r = Gn) {
  const e = r === Gn ? O0 : Qg(r), t = () => e().dispatch;
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var x0 = /* @__PURE__ */ M0();
E0(y0.useSyncExternalStoreWithSelector);
const L0 = {
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
let D0 = class eu {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || L0, this.options = t, this.debug = t.debug;
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
var rn = new D0();
class js {
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
function vp(r) {
  return r == null ? "" : "" + r;
}
function U0(r, e, t) {
  r.forEach((n) => {
    e[n] && (t[n] = e[n]);
  });
}
function Pu(r, e, t) {
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
function yp(r, e, t) {
  const {
    obj: n,
    k: o
  } = Pu(r, e, Object);
  n[o] = t;
}
function F0(r, e, t, n) {
  const {
    obj: o,
    k: a
  } = Pu(r, e, Object);
  o[a] = o[a] || [], n && (o[a] = o[a].concat(t)), n || o[a].push(t);
}
function vs(r, e) {
  const {
    obj: t,
    k: n
  } = Pu(r, e);
  if (t)
    return t[n];
}
function H0(r, e, t) {
  const n = vs(r, t);
  return n !== void 0 ? n : vs(e, t);
}
function Jg(r, e, t) {
  for (const n in e)
    n !== "__proto__" && n !== "constructor" && (n in r ? typeof r[n] == "string" || r[n] instanceof String || typeof e[n] == "string" || e[n] instanceof String ? t && (r[n] = e[n]) : Jg(r[n], e[n], t) : r[n] = e[n]);
  return r;
}
function $o(r) {
  return r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var B0 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function K0(r) {
  return typeof r == "string" ? r.replace(/[&<>"'\/]/g, (e) => B0[e]) : r;
}
const q0 = [" ", ",", "?", "!", ";"];
function $0(r, e, t) {
  e = e || "", t = t || "";
  const n = q0.filter((s) => e.indexOf(s) < 0 && t.indexOf(s) < 0);
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
function ys(r, e) {
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
      return f ? ys(u, f, t) : void 0;
    }
    o = o[n[a]];
  }
  return o;
}
function Cs(r) {
  return r && r.indexOf("_") > 0 ? r.replace("_", "-") : r;
}
class Cp extends js {
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
    const u = vs(this.data, l);
    return u || !s || typeof n != "string" ? u : ys(this.data && this.data[e] && this.data[e][t], n, a);
  }
  addResource(e, t, n, o) {
    let a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const s = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator;
    let l = [e, t];
    n && (l = l.concat(s ? n.split(s) : n)), e.indexOf(".") > -1 && (l = e.split("."), o = t, t = l[1]), this.addNamespaces(t), yp(this.data, l, o), a.silent || this.emit("added", e, t, n, o);
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
    let u = vs(this.data, l) || {};
    o ? Jg(u, n, a) : u = {
      ...u,
      ...n
    }, yp(this.data, l, u), s.silent || this.emit("added", e, t, n);
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
var Xg = {
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
const wp = {};
class ws extends js {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), U0(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = rn.create("translator");
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
    const s = n && e.indexOf(n) > -1, l = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !$0(e, n, o);
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
        const I = t.nsSeparator || this.options.nsSeparator;
        return o ? {
          res: `${u}${I}${s}`,
          usedKey: s,
          exactUsedKey: s,
          usedLng: f,
          usedNS: u,
          usedParams: this.getUsedParamsDetails(t)
        } : `${u}${I}${s}`;
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
    let m = p && p.res;
    const v = p && p.usedKey || s, C = p && p.exactUsedKey || s, E = Object.prototype.toString.apply(m), _ = ["[object Number]", "[object Function]", "[object RegExp]"], R = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, A = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (A && m && (typeof m != "string" && typeof m != "boolean" && typeof m != "number") && _.indexOf(E) < 0 && !(typeof R == "string" && E === "[object Array]")) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const I = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(v, m, {
          ...t,
          ns: l
        }) : `key '${s} (${this.language})' returned an object instead of string.`;
        return o ? (p.res = I, p.usedParams = this.getUsedParamsDetails(t), p) : I;
      }
      if (a) {
        const I = E === "[object Array]", O = I ? [] : {}, L = I ? C : v;
        for (const q in m)
          if (Object.prototype.hasOwnProperty.call(m, q)) {
            const U = `${L}${a}${q}`;
            O[q] = this.translate(U, {
              ...t,
              joinArrays: !1,
              ns: l
            }), O[q] === U && (O[q] = m[q]);
          }
        m = O;
      }
    } else if (A && typeof R == "string" && E === "[object Array]")
      m = m.join(R), m && (m = this.extendTranslation(m, e, t, n));
    else {
      let I = !1, O = !1;
      const L = t.count !== void 0 && typeof t.count != "string", q = ws.hasDefaultValue(t), U = L ? this.pluralResolver.getSuffix(f, t.count, t) : "", Y = t.ordinal && L ? this.pluralResolver.getSuffix(f, t.count, {
        ordinal: !1
      }) : "", Q = t[`defaultValue${U}`] || t[`defaultValue${Y}`] || t.defaultValue;
      !this.isValidLookup(m) && q && (I = !0, m = Q), this.isValidLookup(m) || (O = !0, m = s);
      const ee = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && O ? void 0 : m, fe = q && Q !== m && this.options.updateMissing;
      if (O || I || fe) {
        if (this.logger.log(fe ? "updateKey" : "missingKey", f, u, s, fe ? Q : m), a) {
          const ie = this.resolve(s, {
            ...t,
            keySeparator: !1
          });
          ie && ie.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let oe = [];
        const we = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && we && we[0])
          for (let ie = 0; ie < we.length; ie++)
            oe.push(we[ie]);
        else
          this.options.saveMissingTo === "all" ? oe = this.languageUtils.toResolveHierarchy(t.lng || this.language) : oe.push(t.lng || this.language);
        const J = (ie, re, Pe) => {
          const Qe = q && Pe !== m ? Pe : ee;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(ie, u, re, Qe, fe, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(ie, u, re, Qe, fe, t), this.emit("missingKey", ie, u, re, m);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && L ? oe.forEach((ie) => {
          this.pluralResolver.getSuffixes(ie, t).forEach((re) => {
            J([ie], s + re, t[`defaultValue${re}`] || Q);
          });
        }) : J(oe, s, Q));
      }
      m = this.extendTranslation(m, e, t, p, n), O && m === s && this.options.appendNamespaceToMissingKey && (m = `${u}:${s}`), (O || I) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? m = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}:${s}` : s, I ? m : void 0) : m = this.options.parseMissingKeyHandler(m));
    }
    return o ? (p.res = m, p.usedParams = this.getUsedParamsDetails(t), p) : m;
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
        const m = e.match(this.interpolator.nestingRegexp);
        h = m && m.length;
      }
      let p = n.replace && typeof n.replace != "string" ? n.replace : n;
      if (this.options.interpolation.defaultVariables && (p = {
        ...this.options.interpolation.defaultVariables,
        ...p
      }), e = this.interpolator.interpolate(e, p, n.lng || this.language, n), f) {
        const m = e.match(this.interpolator.nestingRegexp), v = m && m.length;
        h < v && (n.nest = !1);
      }
      !n.lng && this.options.compatibilityAPI !== "v1" && o && o.res && (n.lng = o.usedLng), n.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var m = arguments.length, v = new Array(m), C = 0; C < m; C++)
          v[C] = arguments[C];
        return a && a[0] === v[0] && !n.context ? (s.logger.warn(`It seems you are nesting recursively key: ${v[0]} in key: ${t[0]}`), null) : s.translate(...v, t);
      }, n)), n.interpolation && this.interpolator.reset();
    }
    const l = n.postProcess || this.options.postProcess, u = typeof l == "string" ? [l] : l;
    return e != null && u && u.length && n.applyPostProcessor !== !1 && (e = Xg.handle(u, e, t, this.options && this.options.postProcessPassResolved ? {
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
      const m = t.count !== void 0 && typeof t.count != "string", v = m && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), C = t.context !== void 0 && (typeof t.context == "string" || typeof t.context == "number") && t.context !== "", E = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      p.forEach((_) => {
        this.isValidLookup(n) || (l = _, !wp[`${E[0]}-${_}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(l) && (wp[`${E[0]}-${_}`] = !0, this.logger.warn(`key "${o}" for languages "${E.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), E.forEach((R) => {
          if (this.isValidLookup(n))
            return;
          s = R;
          const A = [h];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(A, h, R, _, t);
          else {
            let I;
            m && (I = this.pluralResolver.getSuffix(R, t.count, t));
            const O = `${this.options.pluralSeparator}zero`, L = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (m && (A.push(h + I), t.ordinal && I.indexOf(L) === 0 && A.push(h + I.replace(L, this.options.pluralSeparator)), v && A.push(h + O)), C) {
              const q = `${h}${this.options.contextSeparator}${t.context}`;
              A.push(q), m && (A.push(q + I), t.ordinal && I.indexOf(L) === 0 && A.push(q + I.replace(L, this.options.pluralSeparator)), v && A.push(q + O));
            }
          }
          let S;
          for (; S = A.pop(); )
            this.isValidLookup(n) || (a = S, n = this.getResource(R, _, S, t));
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
function xl(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
class Ep {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = rn.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = Cs(e), !e || e.indexOf("-") < 0)
      return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = Cs(e), !e || e.indexOf("-") < 0)
      return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (typeof e == "string" && e.indexOf("-") > -1) {
      const t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let n = e.split("-");
      return this.options.lowerCaseLng ? n = n.map((o) => o.toLowerCase()) : n.length === 2 ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = xl(n[1].toLowerCase()))) : n.length === 3 && (n[0] = n[0].toLowerCase(), n[1].length === 2 && (n[1] = n[1].toUpperCase()), n[0] !== "sgn" && n[2].length === 2 && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = xl(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = xl(n[2].toLowerCase()))), n.join("-");
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
let G0 = [{
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
}], z0 = {
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
const V0 = ["v1", "v2", "v3"], W0 = ["v4"], bp = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function j0() {
  const r = {};
  return G0.forEach((e) => {
    e.lngs.forEach((t) => {
      r[t] = {
        numbers: e.nr,
        plurals: z0[e.fc]
      };
    });
  }), r;
}
class Y0 {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = rn.create("pluralResolver"), (!this.options.compatibilityJSON || W0.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = j0();
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(Cs(e), {
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
    return n ? this.shouldUseIntlApi() ? n.resolvedOptions().pluralCategories.sort((o, a) => bp[o] - bp[a]).map((o) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : n.numbers.map((o) => this.getSuffix(e, o, t)) : [];
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
    return !V0.includes(this.options.compatibilityJSON);
  }
}
function _p(r, e, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, a = H0(r, e, t);
  return !a && o && typeof t == "string" && (a = ys(r, t, n), a === void 0 && (a = ys(e, t, n))), a;
}
class Q0 {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = rn.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || ((t) => t), this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const t = e.interpolation;
    this.escape = t.escape !== void 0 ? t.escape : K0, this.escapeValue = t.escapeValue !== void 0 ? t.escapeValue : !0, this.useRawValueToEscape = t.useRawValueToEscape !== void 0 ? t.useRawValueToEscape : !1, this.prefix = t.prefix ? $o(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? $o(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? $o(t.nestingPrefix) : t.nestingPrefixEscaped || $o("$t("), this.nestingSuffix = t.nestingSuffix ? $o(t.nestingSuffix) : t.nestingSuffixEscaped || $o(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = t.alwaysFormat !== void 0 ? t.alwaysFormat : !1, this.resetRegExp();
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
        const A = _p(t, u, C, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(A, void 0, n, {
          ...o,
          ...t,
          interpolationkey: C
        }) : A;
      }
      const E = C.split(this.formatSeparator), _ = E.shift().trim(), R = E.join(this.formatSeparator).trim();
      return this.format(_p(t, u, _, this.options.keySeparator, this.options.ignoreJSONStructure), R, n, {
        ...o,
        ...t,
        interpolationkey: _
      });
    };
    this.resetRegExp();
    const p = o && o.missingInterpolationHandler || this.options.missingInterpolationHandler, m = o && o.interpolation && o.interpolation.skipOnVariables !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
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
            const R = p(e, a, o);
            s = typeof R == "string" ? R : "";
          } else if (o && Object.prototype.hasOwnProperty.call(o, E))
            s = "";
          else if (m) {
            s = a[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${E} for interpolating ${e}`), s = "";
        else
          typeof s != "string" && !this.useRawValueToEscape && (s = vp(s));
        const _ = C.safeValue(s);
        if (e = e.replace(a[0], _), m ? (C.regex.lastIndex += s.length, C.regex.lastIndex -= a[0].length) : C.regex.lastIndex = 0, l++, l >= this.maxReplaces)
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
      let m = `{${p[1]}`;
      u = p[0], m = this.interpolate(m, s);
      const v = m.match(/'/g), C = m.match(/"/g);
      (v && v.length % 2 === 0 && !C || C.length % 2 !== 0) && (m = m.replace(/'/g, '"'));
      try {
        s = JSON.parse(m), f && (s = {
          ...f,
          ...s
        });
      } catch (E) {
        return this.logger.warn(`failed parsing options string in nesting for key ${u}`, E), `${u}${h}${m}`;
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
      typeof a != "string" && (a = vp(a)), a || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`), a = ""), f && (a = u.reduce((h, p) => this.format(h, p, n.lng, {
        ...n,
        interpolationkey: o[1].trim()
      }), a.trim())), e = e.replace(o[0], a), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
function J0(r) {
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
function Go(r) {
  const e = {};
  return function(n, o, a) {
    const s = o + JSON.stringify(a);
    let l = e[s];
    return l || (l = r(Cs(o), a), e[s] = l), l(n);
  };
}
class X0 {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = rn.create("formatter"), this.options = e, this.formats = {
      number: Go((t, n) => {
        const o = new Intl.NumberFormat(t, {
          ...n
        });
        return (a) => o.format(a);
      }),
      currency: Go((t, n) => {
        const o = new Intl.NumberFormat(t, {
          ...n,
          style: "currency"
        });
        return (a) => o.format(a);
      }),
      datetime: Go((t, n) => {
        const o = new Intl.DateTimeFormat(t, {
          ...n
        });
        return (a) => o.format(a);
      }),
      relativetime: Go((t, n) => {
        const o = new Intl.RelativeTimeFormat(t, {
          ...n
        });
        return (a) => o.format(a, n.range || "day");
      }),
      list: Go((t, n) => {
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
    this.formats[e.toLowerCase().trim()] = Go(t);
  }
  format(e, t, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return t.split(this.formatSeparator).reduce((l, u) => {
      const {
        formatName: f,
        formatOptions: h
      } = J0(u);
      if (this.formats[f]) {
        let p = l;
        try {
          const m = o && o.formatParams && o.formatParams[o.interpolationkey] || {}, v = m.locale || m.lng || o.locale || o.lng || n;
          p = this.formats[f](l, v, {
            ...h,
            ...o,
            ...m
          });
        } catch (m) {
          this.logger.warn(m);
        }
        return p;
      } else
        this.logger.warn(`there was no format function for ${f}`);
      return l;
    }, e);
  }
}
function Z0(r, e) {
  r.pending[e] !== void 0 && (delete r.pending[e], r.pendingCount--);
}
class eI extends js {
  constructor(e, t, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = o, this.logger = rn.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(n, o.backend, o);
  }
  queueLoad(e, t, n, o) {
    const a = {}, s = {}, l = {}, u = {};
    return e.forEach((f) => {
      let h = !0;
      t.forEach((p) => {
        const m = `${f}|${p}`;
        !n.reload && this.store.hasResourceBundle(f, p) ? this.state[m] = 2 : this.state[m] < 0 || (this.state[m] === 1 ? s[m] === void 0 && (s[m] = !0) : (this.state[m] = 1, h = !1, s[m] === void 0 && (s[m] = !0), a[m] === void 0 && (a[m] = !0), u[p] === void 0 && (u[p] = !0)));
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
      F0(u.loaded, [a], s), Z0(u, e), t && u.errors.push(t), u.pendingCount === 0 && !u.done && (Object.keys(u.loaded).forEach((f) => {
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
function Sp() {
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
function Tp(r) {
  return typeof r.ns == "string" && (r.ns = [r.ns]), typeof r.fallbackLng == "string" && (r.fallbackLng = [r.fallbackLng]), typeof r.fallbackNS == "string" && (r.fallbackNS = [r.fallbackNS]), r.supportedLngs && r.supportedLngs.indexOf("cimode") < 0 && (r.supportedLngs = r.supportedLngs.concat(["cimode"])), r;
}
function as() {
}
function tI(r) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach((t) => {
    typeof r[t] == "function" && (r[t] = r[t].bind(r));
  });
}
class Yi extends js {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Tp(e), this.services = {}, this.logger = rn, this.modules = {
      external: []
    }, tI(this), t && !this.isInitialized && !e.isClone) {
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
    const o = Sp();
    this.options = {
      ...o,
      ...this.options,
      ...Tp(t)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...o.interpolation,
      ...this.options.interpolation
    }), t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    function a(h) {
      return h ? typeof h == "function" ? new h() : h : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? rn.init(a(this.modules.logger), this.options) : rn.init(null, this.options);
      let h;
      this.modules.formatter ? h = this.modules.formatter : typeof Intl < "u" && (h = X0);
      const p = new Ep(this.options);
      this.store = new Cp(this.options.resources, this.options);
      const m = this.services;
      m.logger = rn, m.resourceStore = this.store, m.languageUtils = p, m.pluralResolver = new Y0(p, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), h && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (m.formatter = a(h), m.formatter.init(m, this.options), this.options.interpolation.format = m.formatter.format.bind(m.formatter)), m.interpolator = new Q0(this.options), m.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, m.backendConnector = new eI(a(this.modules.backend), m.resourceStore, m, this.options), m.backendConnector.on("*", function(v) {
        for (var C = arguments.length, E = new Array(C > 1 ? C - 1 : 0), _ = 1; _ < C; _++)
          E[_ - 1] = arguments[_];
        e.emit(v, ...E);
      }), this.modules.languageDetector && (m.languageDetector = a(this.modules.languageDetector), m.languageDetector.init && m.languageDetector.init(m, this.options.detection, this.options)), this.modules.i18nFormat && (m.i18nFormat = a(this.modules.i18nFormat), m.i18nFormat.init && m.i18nFormat.init(this)), this.translator = new ws(this.services, this.options), this.translator.on("*", function(v) {
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
      const h = (p, m) => {
        this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), u.resolve(m), n(p, m);
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
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Xg.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
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
      const m = o.options.keySeparator || ".";
      let v;
      return u.keyPrefix && Array.isArray(s) ? v = s.map((C) => `${u.keyPrefix}${m}${C}`) : v = u.keyPrefix ? `${u.keyPrefix}${m}${s}` : s, o.t(v, u);
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
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], n = this.services && this.services.languageUtils || new Ep(Sp());
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
    }, n && (a.store = new Cp(this.store.data, o), a.services.resourceStore = a.store), a.translator = new ws(a.services, o), a.translator.on("*", function(l) {
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
function rI() {
  if (console && console.warn) {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    typeof e[0] == "string" && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e);
  }
}
const Ip = {};
function tu() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  typeof e[0] == "string" && Ip[e[0]] || (typeof e[0] == "string" && (Ip[e[0]] = /* @__PURE__ */ new Date()), rI(...e));
}
const Zg = (r, e) => () => {
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
function Ap(r, e, t) {
  r.loadNamespaces(e, Zg(r, t));
}
function Rp(r, e, t, n) {
  typeof t == "string" && (t = [t]), t.forEach((o) => {
    r.options.ns.indexOf(o) < 0 && r.options.ns.push(o);
  }), r.loadLanguages(e, Zg(r, n));
}
function nI(r, e) {
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
function oI(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !e.languages || !e.languages.length ? (tu("i18n.languages were undefined or empty", e.languages), !0) : e.options.ignoreJSONStructure !== void 0 ? e.hasLoadedNamespace(r, {
    lng: t.lng,
    precheck: (o, a) => {
      if (t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !a(o.isLanguageChangingTo, r))
        return !1;
    }
  }) : nI(r, e, t);
}
const iI = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, aI = {
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
}, sI = (r) => aI[r], cI = (r) => r.replace(iI, sI);
let ru = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: cI
};
function lI() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  ru = {
    ...ru,
    ...r
  };
}
function uI() {
  return ru;
}
let em;
function dI(r) {
  em = r;
}
function fI() {
  return em;
}
const hI = {
  type: "3rdParty",
  init(r) {
    lI(r.options.react), dI(r);
  }
}, pI = So();
class gI {
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
const mI = (r, e) => {
  const t = Ke();
  return me(() => {
    t.current = e ? t.current : r;
  }, [r, e]), t.current;
};
function Nu(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: t
  } = e, {
    i18n: n,
    defaultNS: o
  } = jn(pI) || {}, a = t || n || fI();
  if (a && !a.reportNamespaces && (a.reportNamespaces = new gI()), !a) {
    tu("You will need to pass in an i18next instance by using initReactI18next");
    const S = (O, L) => typeof L == "string" ? L : L && typeof L == "object" && typeof L.defaultValue == "string" ? L.defaultValue : Array.isArray(O) ? O[O.length - 1] : O, I = [S, {}, !1];
    return I.t = S, I.i18n = {}, I.ready = !1, I;
  }
  a.options.react && a.options.react.wait !== void 0 && tu("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const s = {
    ...uI(),
    ...a.options.react,
    ...e
  }, {
    useSuspense: l,
    keyPrefix: u
  } = s;
  let f = r || o || a.options && a.options.defaultNS;
  f = typeof f == "string" ? [f] : f || ["translation"], a.reportNamespaces.addUsedNamespaces && a.reportNamespaces.addUsedNamespaces(f);
  const h = (a.isInitialized || a.initializedStoreOnce) && f.every((S) => oI(S, a, s));
  function p() {
    return a.getFixedT(e.lng || null, s.nsMode === "fallback" ? f : f[0], u);
  }
  const [m, v] = ge(p);
  let C = f.join();
  e.lng && (C = `${e.lng}${C}`);
  const E = mI(C), _ = Ke(!0);
  me(() => {
    const {
      bindI18n: S,
      bindI18nStore: I
    } = s;
    _.current = !0, !h && !l && (e.lng ? Rp(a, e.lng, f, () => {
      _.current && v(p);
    }) : Ap(a, f, () => {
      _.current && v(p);
    })), h && E && E !== C && _.current && v(p);
    function O() {
      _.current && v(p);
    }
    return S && a && a.on(S, O), I && a && a.store.on(I, O), () => {
      _.current = !1, S && a && S.split(" ").forEach((L) => a.off(L, O)), I && a && I.split(" ").forEach((L) => a.store.off(L, O));
    };
  }, [a, C]);
  const R = Ke(!0);
  me(() => {
    _.current && !R.current && v(p), R.current = !1;
  }, [a, u]);
  const A = [m, a, h];
  if (A.t = m, A.i18n = a, A.ready = h, h || !h && !l)
    return A;
  throw new Promise((S) => {
    e.lng ? Rp(a, e.lng, f, () => S()) : Ap(a, f, () => S());
  });
}
bt.use(hI).init({
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
        checkDocumentation: "Check out our documentation"
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
        checkDocumentation: "Bekijk onze documentatie"
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
var ce = function() {
  return ce = Object.assign || function(e) {
    for (var t, n = 1, o = arguments.length; n < o; n++) {
      t = arguments[n];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, ce.apply(this, arguments);
};
function kp(r, e) {
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
function vI(r, e) {
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
function Ou() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r = r.concat(vI(arguments[e]));
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
function Ys() {
  for (var r = 0, e = 0, t = arguments.length; e < t; e++)
    r += arguments[e].length;
  for (var n = Array(r), o = 0, e = 0; e < t; e++)
    for (var a = arguments[e], s = 0, l = a.length; s < l; s++, o++)
      n[o] = a[s];
  return n;
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
var N = {
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
  N.OPENID_SCOPE,
  N.PROFILE_SCOPE,
  N.OFFLINE_ACCESS_SCOPE
], Pp = Ys(sa, [
  N.EMAIL_SCOPE
]), gr;
(function(r) {
  r.CONTENT_TYPE = "Content-Type", r.RETRY_AFTER = "Retry-After", r.CCS_HEADER = "X-AnchorMailbox", r.WWWAuthenticate = "WWW-Authenticate", r.AuthenticationInfo = "Authentication-Info", r.X_MS_REQUEST_ID = "x-ms-request-id", r.X_MS_HTTP_VERSION = "x-ms-httpver";
})(gr || (gr = {}));
var yt;
(function(r) {
  r.ID_TOKEN = "idtoken", r.CLIENT_INFO = "client.info", r.ADAL_ID_TOKEN = "adal.idtoken", r.ERROR = "error", r.ERROR_DESC = "error.description", r.ACTIVE_ACCOUNT = "active-account", r.ACTIVE_ACCOUNT_FILTERS = "active-account-filters";
})(yt || (yt = {}));
var go;
(function(r) {
  r.COMMON = "common", r.ORGANIZATIONS = "organizations", r.CONSUMERS = "consumers";
})(go || (go = {}));
var Ae;
(function(r) {
  r.CLIENT_ID = "client_id", r.REDIRECT_URI = "redirect_uri", r.RESPONSE_TYPE = "response_type", r.RESPONSE_MODE = "response_mode", r.GRANT_TYPE = "grant_type", r.CLAIMS = "claims", r.SCOPE = "scope", r.ERROR = "error", r.ERROR_DESCRIPTION = "error_description", r.ACCESS_TOKEN = "access_token", r.ID_TOKEN = "id_token", r.REFRESH_TOKEN = "refresh_token", r.EXPIRES_IN = "expires_in", r.STATE = "state", r.NONCE = "nonce", r.PROMPT = "prompt", r.SESSION_STATE = "session_state", r.CLIENT_INFO = "client_info", r.CODE = "code", r.CODE_CHALLENGE = "code_challenge", r.CODE_CHALLENGE_METHOD = "code_challenge_method", r.CODE_VERIFIER = "code_verifier", r.CLIENT_REQUEST_ID = "client-request-id", r.X_CLIENT_SKU = "x-client-SKU", r.X_CLIENT_VER = "x-client-VER", r.X_CLIENT_OS = "x-client-OS", r.X_CLIENT_CPU = "x-client-CPU", r.X_CLIENT_CURR_TELEM = "x-client-current-telemetry", r.X_CLIENT_LAST_TELEM = "x-client-last-telemetry", r.X_MS_LIB_CAPABILITY = "x-ms-lib-capability", r.X_APP_NAME = "x-app-name", r.X_APP_VER = "x-app-ver", r.POST_LOGOUT_URI = "post_logout_redirect_uri", r.ID_TOKEN_HINT = "id_token_hint", r.DEVICE_CODE = "device_code", r.CLIENT_SECRET = "client_secret", r.CLIENT_ASSERTION = "client_assertion", r.CLIENT_ASSERTION_TYPE = "client_assertion_type", r.TOKEN_TYPE = "token_type", r.REQ_CNF = "req_cnf", r.OBO_ASSERTION = "assertion", r.REQUESTED_TOKEN_USE = "requested_token_use", r.ON_BEHALF_OF = "on_behalf_of", r.FOCI = "foci", r.CCS_HEADER = "X-AnchorMailbox", r.RETURN_SPA_CODE = "return_spa_code", r.NATIVE_BROKER = "nativebroker", r.LOGOUT_HINT = "logout_hint";
})(Ae || (Ae = {}));
var Wo;
(function(r) {
  r.ACCESS_TOKEN = "access_token", r.XMS_CC = "xms_cc";
})(Wo || (Wo = {}));
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
var Np = {
  PLAIN: "plain",
  S256: "S256"
}, Es;
(function(r) {
  r.QUERY = "query", r.FRAGMENT = "fragment", r.FORM_POST = "form_post";
})(Es || (Es = {}));
var bs;
(function(r) {
  r.IMPLICIT_GRANT = "implicit", r.AUTHORIZATION_CODE_GRANT = "authorization_code", r.CLIENT_CREDENTIALS_GRANT = "client_credentials", r.RESOURCE_OWNER_PASSWORD_GRANT = "password", r.REFRESH_TOKEN_GRANT = "refresh_token", r.DEVICE_CODE_GRANT = "device_code", r.JWT_BEARER = "urn:ietf:params:oauth:grant-type:jwt-bearer";
})(bs || (bs = {}));
var wn;
(function(r) {
  r.MSSTS_ACCOUNT_TYPE = "MSSTS", r.ADFS_ACCOUNT_TYPE = "ADFS", r.MSAV1_ACCOUNT_TYPE = "MSA", r.GENERIC_ACCOUNT_TYPE = "Generic";
})(wn || (wn = {}));
var Ct;
(function(r) {
  r.CACHE_KEY_SEPARATOR = "-", r.CLIENT_INFO_SEPARATOR = ".";
})(Ct || (Ct = {}));
var he;
(function(r) {
  r.ID_TOKEN = "IdToken", r.ACCESS_TOKEN = "AccessToken", r.ACCESS_TOKEN_WITH_AUTH_SCHEME = "AccessToken_With_AuthScheme", r.REFRESH_TOKEN = "RefreshToken";
})(he || (he = {}));
var En;
(function(r) {
  r[r.ADFS = 1001] = "ADFS", r[r.MSA = 1002] = "MSA", r[r.MSSTS = 1003] = "MSSTS", r[r.GENERIC = 1004] = "GENERIC", r[r.ACCESS_TOKEN = 2001] = "ACCESS_TOKEN", r[r.REFRESH_TOKEN = 2002] = "REFRESH_TOKEN", r[r.ID_TOKEN = 2003] = "ID_TOKEN", r[r.APP_METADATA = 3001] = "APP_METADATA", r[r.UNDEFINED = 9999] = "UNDEFINED";
})(En || (En = {}));
var iu = "appmetadata", yI = "client_info", qi = "1", $i = {
  CACHE_KEY: "authority-metadata",
  REFRESH_TIME_SECONDS: 3600 * 24
  // 24 Hours
}, Rr;
(function(r) {
  r.CONFIG = "config", r.CACHE = "cache", r.NETWORK = "network", r.HARDCODED_VALUES = "hardcoded_values";
})(Rr || (Rr = {}));
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
}, Op = {
  INVALID_GRANT_ERROR: "invalid_grant",
  CLIENT_MISMATCH_ERROR: "client_mismatch"
}, _s;
(function(r) {
  r.username = "username", r.password = "password";
})(_s || (_s = {}));
var jo;
(function(r) {
  r[r.httpSuccess = 200] = "httpSuccess", r[r.httpBadRequest = 400] = "httpBadRequest";
})(jo || (jo = {}));
var Bn;
(function(r) {
  r.FAILED_AUTO_DETECTION = "1", r.INTERNAL_CACHE = "2", r.ENVIRONMENT_VARIABLE = "3", r.IMDS = "4";
})(Bn || (Bn = {}));
var zi;
(function(r) {
  r.CONFIGURED_MATCHES_DETECTED = "1", r.CONFIGURED_NO_AUTO_DETECTION = "2", r.CONFIGURED_NOT_DETECTED = "3", r.AUTO_DETECTION_REQUESTED_SUCCESSFUL = "4", r.AUTO_DETECTION_REQUESTED_FAILED = "5";
})(zi || (zi = {}));
var qn;
(function(r) {
  r.NO_CACHE_HIT = "0", r.FORCE_REFRESH = "1", r.NO_CACHED_ACCESS_TOKEN = "2", r.CACHED_ACCESS_TOKEN_EXPIRED = "3", r.REFRESH_CACHED_ACCESS_TOKEN = "4", r.CLAIMS_REQUESTED_CACHE_SKIPPED = "5";
})(qn || (qn = {}));
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
}, le = (
  /** @class */
  function(r) {
    or(e, r);
    function e(t, n, o) {
      var a = this, s = n ? t + ": " + n : t;
      return a = r.call(this, s) || this, Object.setPrototypeOf(a, e.prototype), a.errorCode = t || N.EMPTY_STRING, a.errorMessage = n || N.EMPTY_STRING, a.subError = o || N.EMPTY_STRING, a.name = "AuthError", a;
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
var Ss = {
  createNewGuid: function() {
    var r = "Crypto interface - createNewGuid() has not been implemented";
    throw le.createUnexpectedError(r);
  },
  base64Decode: function() {
    var r = "Crypto interface - base64Decode() has not been implemented";
    throw le.createUnexpectedError(r);
  },
  base64Encode: function() {
    var r = "Crypto interface - base64Encode() has not been implemented";
    throw le.createUnexpectedError(r);
  },
  generatePkceCodes: function() {
    return _e(this, void 0, void 0, function() {
      var r;
      return Se(this, function(e) {
        throw r = "Crypto interface - generatePkceCodes() has not been implemented", le.createUnexpectedError(r);
      });
    });
  },
  getPublicKeyThumbprint: function() {
    return _e(this, void 0, void 0, function() {
      var r;
      return Se(this, function(e) {
        throw r = "Crypto interface - getPublicKeyThumbprint() has not been implemented", le.createUnexpectedError(r);
      });
    });
  },
  removeTokenBindingKey: function() {
    return _e(this, void 0, void 0, function() {
      var r;
      return Se(this, function(e) {
        throw r = "Crypto interface - removeTokenBindingKey() has not been implemented", le.createUnexpectedError(r);
      });
    });
  },
  clearKeystore: function() {
    return _e(this, void 0, void 0, function() {
      var r;
      return Se(this, function(e) {
        throw r = "Crypto interface - clearKeystore() has not been implemented", le.createUnexpectedError(r);
      });
    });
  },
  signJwt: function() {
    return _e(this, void 0, void 0, function() {
      var r;
      return Se(this, function(e) {
        throw r = "Crypto interface - signJwt() has not been implemented", le.createUnexpectedError(r);
      });
    });
  },
  hashString: function() {
    return _e(this, void 0, void 0, function() {
      var r;
      return Se(this, function(e) {
        throw r = "Crypto interface - hashString() has not been implemented", le.createUnexpectedError(r);
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
}, ne = (
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
  }(le)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var te = (
  /** @class */
  function() {
    function r() {
    }
    return r.decodeAuthToken = function(e) {
      if (r.isEmpty(e))
        throw ne.createTokenNullOrEmptyError(e);
      var t = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/, n = t.exec(e);
      if (!n || n.length < 4)
        throw ne.createTokenParsingError("Given token is malformed: " + JSON.stringify(e));
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
var Mu = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.level = st.Info;
      var o = function() {
      }, a = e || r.createDefaultLoggerOptions();
      this.localCallback = a.loggerCallback || o, this.piiLoggingEnabled = a.piiLoggingEnabled || !1, this.level = typeof a.logLevel == "number" ? a.logLevel : st.Info, this.correlationId = a.correlationId || N.EMPTY_STRING, this.packageName = t || N.EMPTY_STRING, this.packageVersion = n || N.EMPTY_STRING;
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
        te.isEmpty(t.correlationId) ? te.isEmpty(this.correlationId) ? o = "[" + n + "]" : o = "[" + n + "] : [" + this.correlationId + "]" : o = "[" + n + "] : [" + t.correlationId + "]";
        var a = o + " : " + this.packageName + "@" + this.packageVersion + " : " + st[t.logLevel] + " - " + e;
        this.executeCallback(t.logLevel, a, t.containsPii || !1);
      }
    }, r.prototype.executeCallback = function(e, t, n) {
      this.localCallback && this.localCallback(e, t, n);
    }, r.prototype.error = function(e, t) {
      this.logMessage(e, {
        logLevel: st.Error,
        containsPii: !1,
        correlationId: t || N.EMPTY_STRING
      });
    }, r.prototype.errorPii = function(e, t) {
      this.logMessage(e, {
        logLevel: st.Error,
        containsPii: !0,
        correlationId: t || N.EMPTY_STRING
      });
    }, r.prototype.warning = function(e, t) {
      this.logMessage(e, {
        logLevel: st.Warning,
        containsPii: !1,
        correlationId: t || N.EMPTY_STRING
      });
    }, r.prototype.warningPii = function(e, t) {
      this.logMessage(e, {
        logLevel: st.Warning,
        containsPii: !0,
        correlationId: t || N.EMPTY_STRING
      });
    }, r.prototype.info = function(e, t) {
      this.logMessage(e, {
        logLevel: st.Info,
        containsPii: !1,
        correlationId: t || N.EMPTY_STRING
      });
    }, r.prototype.infoPii = function(e, t) {
      this.logMessage(e, {
        logLevel: st.Info,
        containsPii: !0,
        correlationId: t || N.EMPTY_STRING
      });
    }, r.prototype.verbose = function(e, t) {
      this.logMessage(e, {
        logLevel: st.Verbose,
        containsPii: !1,
        correlationId: t || N.EMPTY_STRING
      });
    }, r.prototype.verbosePii = function(e, t) {
      this.logMessage(e, {
        logLevel: st.Verbose,
        containsPii: !0,
        correlationId: t || N.EMPTY_STRING
      });
    }, r.prototype.trace = function(e, t) {
      this.logMessage(e, {
        logLevel: st.Trace,
        containsPii: !1,
        correlationId: t || N.EMPTY_STRING
      });
    }, r.prototype.tracePii = function(e, t) {
      this.logMessage(e, {
        logLevel: st.Trace,
        containsPii: !0,
        correlationId: t || N.EMPTY_STRING
      });
    }, r.prototype.isPiiLoggingEnabled = function() {
      return this.piiLoggingEnabled || !1;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var tm = "@azure/msal-common", xu = "13.3.1";
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
  }(ne)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Dt = (
  /** @class */
  function() {
    function r(e) {
      var t = this, n = e ? te.trimArrayEntries(Ys(e)) : [], o = n ? te.removeEmptyStringsFromArray(n) : [];
      this.validateInputScopes(o), this.scopes = /* @__PURE__ */ new Set(), o.forEach(function(a) {
        return t.scopes.add(a);
      });
    }
    return r.fromString = function(e) {
      var t = e || N.EMPTY_STRING, n = t.split(" ");
      return new r(n);
    }, r.createSearchScopes = function(e) {
      var t = new r(e);
      return t.containsOnlyOIDCScopes() ? t.removeScope(N.OFFLINE_ACCESS_SCOPE) : t.removeOIDCScopes(), t;
    }, r.prototype.validateInputScopes = function(e) {
      if (!e || e.length < 1)
        throw et.createEmptyScopesArrayError();
    }, r.prototype.containsScope = function(e) {
      var t = this.printScopesLowerCase().split(" "), n = new r(t);
      return te.isEmpty(e) ? !1 : n.scopes.has(e.toLowerCase());
    }, r.prototype.containsScopeSet = function(e) {
      var t = this;
      return !e || e.scopes.size <= 0 ? !1 : this.scopes.size >= e.scopes.size && e.asArray().every(function(n) {
        return t.containsScope(n);
      });
    }, r.prototype.containsOnlyOIDCScopes = function() {
      var e = this, t = 0;
      return Pp.forEach(function(n) {
        e.containsScope(n) && (t += 1);
      }), this.scopes.size === t;
    }, r.prototype.appendScope = function(e) {
      te.isEmpty(e) || this.scopes.add(e.trim());
    }, r.prototype.appendScopes = function(e) {
      var t = this;
      try {
        e.forEach(function(n) {
          return t.appendScope(n);
        });
      } catch (n) {
        throw ne.createAppendScopeSetError(n);
      }
    }, r.prototype.removeScope = function(e) {
      if (te.isEmpty(e))
        throw ne.createRemoveEmptyScopeFromSetError(e);
      this.scopes.delete(e.trim());
    }, r.prototype.removeOIDCScopes = function() {
      var e = this;
      Pp.forEach(function(t) {
        e.scopes.delete(t);
      });
    }, r.prototype.unionScopeSets = function(e) {
      if (!e)
        throw ne.createEmptyInputScopeSetError();
      var t = /* @__PURE__ */ new Set();
      return e.scopes.forEach(function(n) {
        return t.add(n.toLowerCase());
      }), this.scopes.forEach(function(n) {
        return t.add(n.toLowerCase());
      }), t;
    }, r.prototype.intersectingScopeSets = function(e) {
      if (!e)
        throw ne.createEmptyInputScopeSetError();
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
      return N.EMPTY_STRING;
    }, r.prototype.printScopesLowerCase = function() {
      return this.printScopes().toLowerCase();
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
function Ts(r, e) {
  if (te.isEmpty(r))
    throw ne.createClientInfoEmptyError();
  try {
    var t = e.base64Decode(r);
    return JSON.parse(t);
  } catch (n) {
    throw ne.createClientInfoDecodingError(n.message);
  }
}
function Yo(r) {
  if (te.isEmpty(r))
    throw ne.createClientInfoDecodingError("Home account ID was empty.");
  var e = r.split(Ct.CLIENT_INFO_SEPARATOR, 2);
  return {
    uid: e[0],
    utid: e.length < 2 ? N.EMPTY_STRING : e[1]
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
        case wn.ADFS_ACCOUNT_TYPE:
          return En.ADFS;
        case wn.MSAV1_ACCOUNT_TYPE:
          return En.MSA;
        case wn.MSSTS_ACCOUNT_TYPE:
          return En.MSSTS;
        case wn.GENERIC_ACCOUNT_TYPE:
          return En.GENERIC;
        default:
          throw ne.createUnexpectedAccountTypeError();
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
        e.environment || N.EMPTY_STRING,
        e.tenantId || N.EMPTY_STRING
      ];
      return t.join(Ct.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.createAccount = function(e, t, n, o, a, s, l, u) {
      var f, h, p, m, v, C, E = new r();
      E.authorityType = wn.MSSTS_ACCOUNT_TYPE, E.clientInfo = e, E.homeAccountId = t, E.nativeAccountId = u;
      var _ = l || o && o.getPreferredCache();
      if (!_)
        throw ne.createInvalidCacheEnvironmentError();
      if (E.environment = _, E.realm = ((f = n == null ? void 0 : n.claims) === null || f === void 0 ? void 0 : f.tid) || N.EMPTY_STRING, n) {
        E.idTokenClaims = n.claims, E.localAccountId = ((h = n == null ? void 0 : n.claims) === null || h === void 0 ? void 0 : h.oid) || ((p = n == null ? void 0 : n.claims) === null || p === void 0 ? void 0 : p.sub) || N.EMPTY_STRING;
        var R = (m = n == null ? void 0 : n.claims) === null || m === void 0 ? void 0 : m.preferred_username, A = !((v = n == null ? void 0 : n.claims) === null || v === void 0) && v.emails ? n.claims.emails[0] : null;
        E.username = R || A || N.EMPTY_STRING, E.name = (C = n == null ? void 0 : n.claims) === null || C === void 0 ? void 0 : C.name;
      }
      return E.cloudGraphHostName = a, E.msGraphHost = s, E;
    }, r.createGenericAccount = function(e, t, n, o, a, s) {
      var l, u, f, h, p = new r();
      p.authorityType = n && n.authorityType === Vt.Adfs ? wn.ADFS_ACCOUNT_TYPE : wn.GENERIC_ACCOUNT_TYPE, p.homeAccountId = e, p.realm = N.EMPTY_STRING;
      var m = s || n && n.getPreferredCache();
      if (!m)
        throw ne.createInvalidCacheEnvironmentError();
      return t && (p.localAccountId = ((l = t == null ? void 0 : t.claims) === null || l === void 0 ? void 0 : l.oid) || ((u = t == null ? void 0 : t.claims) === null || u === void 0 ? void 0 : u.sub) || N.EMPTY_STRING, p.username = ((f = t == null ? void 0 : t.claims) === null || f === void 0 ? void 0 : f.upn) || N.EMPTY_STRING, p.name = ((h = t == null ? void 0 : t.claims) === null || h === void 0 ? void 0 : h.name) || N.EMPTY_STRING, p.idTokenClaims = t == null ? void 0 : t.claims), p.environment = m, p.cloudGraphHostName = o, p.msGraphHost = a, p;
    }, r.generateHomeAccountId = function(e, t, n, o, a) {
      var s, l = !((s = a == null ? void 0 : a.claims) === null || s === void 0) && s.sub ? a.claims.sub : N.EMPTY_STRING;
      if (t === Vt.Adfs || t === Vt.Dsts)
        return l;
      if (e)
        try {
          var u = Ts(e, o);
          if (!te.isEmpty(u.uid) && !te.isEmpty(u.utid))
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
var an = (
  /** @class */
  function() {
    function r(e, t) {
      if (te.isEmpty(e))
        throw ne.createTokenNullOrEmptyError(e);
      this.rawToken = e, this.claims = r.extractTokenClaims(e, t);
    }
    return r.extractTokenClaims = function(e, t) {
      var n = te.decodeAuthToken(e);
      try {
        var o = n.JWSPayload, a = t.base64Decode(o);
        return JSON.parse(a);
      } catch (s) {
        throw ne.createTokenParsingError(s);
      }
    }, r.checkMaxAge = function(e, t) {
      var n = 3e5;
      if (t === 0 || Date.now() - n > e + t)
        throw ne.createMaxAgeTranspiredError();
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var er = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.clientId = e, this.cryptoImpl = t, this.commonLogger = n.clone(tm, xu);
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
      return n && (t.idToken = n.secret, t.idTokenClaims = new an(n.secret, this.cryptoImpl).claims), t;
    }, r.prototype.saveCacheRecord = function(e) {
      return _e(this, void 0, void 0, function() {
        return Se(this, function(t) {
          switch (t.label) {
            case 0:
              if (!e)
                throw ne.createNullOrUndefinedCacheRecord();
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
                throw ne.createNoAccountFoundError();
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
              throw a.sent(), ne.createBindingKeyNotRemovedError();
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
      return a && s && (a.idTokenClaims = new an(s.secret, this.cryptoImpl).claims), {
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
      f.forEach(function(m) {
        if (o.accessTokenKeyMatchesFilter(m, u, !0)) {
          var v = o.getAccessTokenCredential(m);
          v && o.credentialMatchesFilter(v, u) && h.push(v);
        }
      });
      var p = h.length;
      return p < 1 ? (this.commonLogger.info("CacheManager:getAccessToken - No token found"), null) : p > 1 ? (this.commonLogger.info("CacheManager:getAccessToken - Multiple access tokens found, clearing them"), h.forEach(function(m) {
        o.removeAccessToken(m.generateCredentialKey());
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
        throw ne.createMultipleMatchingAppMetadataInCacheError();
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
), CI = (
  /** @class */
  function(r) {
    or(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.setAccount = function() {
      var t = "Storage interface - setAccount() has not been implemented for the cacheStorage interface.";
      throw le.createUnexpectedError(t);
    }, e.prototype.getAccount = function() {
      var t = "Storage interface - getAccount() has not been implemented for the cacheStorage interface.";
      throw le.createUnexpectedError(t);
    }, e.prototype.setIdTokenCredential = function() {
      var t = "Storage interface - setIdTokenCredential() has not been implemented for the cacheStorage interface.";
      throw le.createUnexpectedError(t);
    }, e.prototype.getIdTokenCredential = function() {
      var t = "Storage interface - getIdTokenCredential() has not been implemented for the cacheStorage interface.";
      throw le.createUnexpectedError(t);
    }, e.prototype.setAccessTokenCredential = function() {
      var t = "Storage interface - setAccessTokenCredential() has not been implemented for the cacheStorage interface.";
      throw le.createUnexpectedError(t);
    }, e.prototype.getAccessTokenCredential = function() {
      var t = "Storage interface - getAccessTokenCredential() has not been implemented for the cacheStorage interface.";
      throw le.createUnexpectedError(t);
    }, e.prototype.setRefreshTokenCredential = function() {
      var t = "Storage interface - setRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
      throw le.createUnexpectedError(t);
    }, e.prototype.getRefreshTokenCredential = function() {
      var t = "Storage interface - getRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
      throw le.createUnexpectedError(t);
    }, e.prototype.setAppMetadata = function() {
      var t = "Storage interface - setAppMetadata() has not been implemented for the cacheStorage interface.";
      throw le.createUnexpectedError(t);
    }, e.prototype.getAppMetadata = function() {
      var t = "Storage interface - getAppMetadata() has not been implemented for the cacheStorage interface.";
      throw le.createUnexpectedError(t);
    }, e.prototype.setServerTelemetry = function() {
      var t = "Storage interface - setServerTelemetry() has not been implemented for the cacheStorage interface.";
      throw le.createUnexpectedError(t);
    }, e.prototype.getServerTelemetry = function() {
      var t = "Storage interface - getServerTelemetry() has not been implemented for the cacheStorage interface.";
      throw le.createUnexpectedError(t);
    }, e.prototype.setAuthorityMetadata = function() {
      var t = "Storage interface - setAuthorityMetadata() has not been implemented for the cacheStorage interface.";
      throw le.createUnexpectedError(t);
    }, e.prototype.getAuthorityMetadata = function() {
      var t = "Storage interface - getAuthorityMetadata() has not been implemented for the cacheStorage interface.";
      throw le.createUnexpectedError(t);
    }, e.prototype.getAuthorityMetadataKeys = function() {
      var t = "Storage interface - getAuthorityMetadataKeys() has not been implemented for the cacheStorage interface.";
      throw le.createUnexpectedError(t);
    }, e.prototype.setThrottlingCache = function() {
      var t = "Storage interface - setThrottlingCache() has not been implemented for the cacheStorage interface.";
      throw le.createUnexpectedError(t);
    }, e.prototype.getThrottlingCache = function() {
      var t = "Storage interface - getThrottlingCache() has not been implemented for the cacheStorage interface.";
      throw le.createUnexpectedError(t);
    }, e.prototype.removeItem = function() {
      var t = "Storage interface - removeItem() has not been implemented for the cacheStorage interface.";
      throw le.createUnexpectedError(t);
    }, e.prototype.containsKey = function() {
      var t = "Storage interface - containsKey() has not been implemented for the cacheStorage interface.";
      throw le.createUnexpectedError(t);
    }, e.prototype.getKeys = function() {
      var t = "Storage interface - getKeys() has not been implemented for the cacheStorage interface.";
      throw le.createUnexpectedError(t);
    }, e.prototype.getAccountKeys = function() {
      var t = "Storage interface - getAccountKeys() has not been implemented for the cacheStorage interface.";
      throw le.createUnexpectedError(t);
    }, e.prototype.getTokenKeys = function() {
      var t = "Storage interface - getTokenKeys() has not been implemented for the cacheStorage interface.";
      throw le.createUnexpectedError(t);
    }, e.prototype.clear = function() {
      return _e(this, void 0, void 0, function() {
        var t;
        return Se(this, function(n) {
          throw t = "Storage interface - clear() has not been implemented for the cacheStorage interface.", le.createUnexpectedError(t);
        });
      });
    }, e.prototype.updateCredentialCacheKey = function() {
      var t = "Storage interface - updateCredentialCacheKey() has not been implemented for the cacheStorage interface.";
      throw le.createUnexpectedError(t);
    }, e;
  }(er)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var wI = 300, rm = {
  tokenRenewalOffsetSeconds: wI,
  preventCorsPreflight: !1
}, EI = {
  loggerCallback: function() {
  },
  piiLoggingEnabled: !1,
  logLevel: st.Info,
  correlationId: N.EMPTY_STRING
}, bI = {
  claimsBasedCachingEnabled: !0
}, _I = {
  sendGetRequestAsync: function() {
    return _e(this, void 0, void 0, function() {
      var r;
      return Se(this, function(e) {
        throw r = "Network interface - sendGetRequestAsync() has not been implemented", le.createUnexpectedError(r);
      });
    });
  },
  sendPostRequestAsync: function() {
    return _e(this, void 0, void 0, function() {
      var r;
      return Se(this, function(e) {
        throw r = "Network interface - sendPostRequestAsync() has not been implemented", le.createUnexpectedError(r);
      });
    });
  }
}, SI = {
  sku: N.SKU,
  version: xu,
  cpu: N.EMPTY_STRING,
  os: N.EMPTY_STRING
}, TI = {
  clientSecret: N.EMPTY_STRING,
  clientAssertion: void 0
}, II = {
  azureCloudInstance: Qi.None,
  tenant: "" + N.DEFAULT_COMMON_TENANT
}, AI = {
  application: {
    appName: "",
    appVersion: ""
  }
};
function RI(r) {
  var e = r.authOptions, t = r.systemOptions, n = r.loggerOptions, o = r.cacheOptions, a = r.storageInterface, s = r.networkInterface, l = r.cryptoInterface, u = r.clientCredentials, f = r.libraryInfo, h = r.telemetry, p = r.serverTelemetryManager, m = r.persistencePlugin, v = r.serializableCache, C = $e($e({}, EI), n);
  return {
    authOptions: kI(e),
    systemOptions: $e($e({}, rm), t),
    loggerOptions: C,
    cacheOptions: $e($e({}, bI), o),
    storageInterface: a || new CI(e.clientId, Ss, new Mu(C)),
    networkInterface: s || _I,
    cryptoInterface: l || Ss,
    clientCredentials: u || TI,
    libraryInfo: $e($e({}, SI), f),
    telemetry: $e($e({}, AI), h),
    serverTelemetryManager: p || null,
    persistencePlugin: m || null,
    serializableCache: v || null
  };
}
function kI(r) {
  return $e({ clientCapabilities: [], azureCloudOptions: II, skipAuthorityMetadataCache: !1 }, r);
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Co = (
  /** @class */
  function(r) {
    or(e, r);
    function e(t, n, o) {
      var a = r.call(this, t, n, o) || this;
      return a.name = "ServerError", Object.setPrototypeOf(a, e.prototype), a;
    }
    return e;
  }(le)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Is = (
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
        throw new Co(((n = a.errorCodes) === null || n === void 0 ? void 0 : n.join(" ")) || N.EMPTY_STRING, a.errorMessage, a.subError);
      }
    }, r.postProcess = function(e, t, n) {
      if (r.checkResponseStatus(n) || r.checkResponseForRetryAfter(n)) {
        var o = {
          throttleTime: r.calculateThrottleTime(parseInt(n.headers[gr.RETRY_AFTER])),
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
      return e.headers ? e.headers.hasOwnProperty(gr.RETRY_AFTER) && (e.status < 200 || e.status >= 300) : !1;
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
var PI = (
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
              Is.preProcess(this.cacheManager, e), s.label = 1;
            case 1:
              return s.trys.push([1, 3, , 4]), [4, this.networkClient.sendPostRequestAsync(t, n)];
            case 2:
              return o = s.sent(), [3, 4];
            case 3:
              throw a = s.sent(), a instanceof le ? a : ne.createNetworkError(t, a);
            case 4:
              return Is.postProcess(this.cacheManager, e, o), [2, o];
          }
        });
      });
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var pr;
(function(r) {
  r.HOME_ACCOUNT_ID = "home_account_id", r.UPN = "UPN";
})(pr || (pr = {}));
/*! @azure/msal-common v13.3.1 2023-10-27 */
var lo = (
  /** @class */
  function() {
    function r() {
    }
    return r.validateRedirectUri = function(e) {
      if (te.isEmpty(e))
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
      if (te.isEmpty(e) || te.isEmpty(t))
        throw et.createInvalidCodeChallengeParamsError();
      this.validateCodeChallengeMethod(t);
    }, r.validateCodeChallengeMethod = function(e) {
      if ([
        Np.PLAIN,
        Np.S256
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
      this.parameters.set(Ae.RESPONSE_TYPE, encodeURIComponent(N.CODE_RESPONSE_TYPE));
    }, r.prototype.addResponseTypeForTokenAndIdToken = function() {
      this.parameters.set(Ae.RESPONSE_TYPE, encodeURIComponent(N.TOKEN_RESPONSE_TYPE + " " + N.ID_TOKEN_RESPONSE_TYPE));
    }, r.prototype.addResponseMode = function(e) {
      this.parameters.set(Ae.RESPONSE_MODE, encodeURIComponent(e || Es.QUERY));
    }, r.prototype.addNativeBroker = function() {
      this.parameters.set(Ae.NATIVE_BROKER, encodeURIComponent("1"));
    }, r.prototype.addScopes = function(e, t) {
      t === void 0 && (t = !0);
      var n = t ? Ys(e || [], sa) : e || [], o = new Dt(n);
      this.parameters.set(Ae.SCOPE, encodeURIComponent(o.printScopes()));
    }, r.prototype.addClientId = function(e) {
      this.parameters.set(Ae.CLIENT_ID, encodeURIComponent(e));
    }, r.prototype.addRedirectUri = function(e) {
      lo.validateRedirectUri(e), this.parameters.set(Ae.REDIRECT_URI, encodeURIComponent(e));
    }, r.prototype.addPostLogoutRedirectUri = function(e) {
      lo.validateRedirectUri(e), this.parameters.set(Ae.POST_LOGOUT_URI, encodeURIComponent(e));
    }, r.prototype.addIdTokenHint = function(e) {
      this.parameters.set(Ae.ID_TOKEN_HINT, encodeURIComponent(e));
    }, r.prototype.addDomainHint = function(e) {
      this.parameters.set(Ki.DOMAIN_HINT, encodeURIComponent(e));
    }, r.prototype.addLoginHint = function(e) {
      this.parameters.set(Ki.LOGIN_HINT, encodeURIComponent(e));
    }, r.prototype.addCcsUpn = function(e) {
      this.parameters.set(gr.CCS_HEADER, encodeURIComponent("UPN:" + e));
    }, r.prototype.addCcsOid = function(e) {
      this.parameters.set(gr.CCS_HEADER, encodeURIComponent("Oid:" + e.uid + "@" + e.utid));
    }, r.prototype.addSid = function(e) {
      this.parameters.set(Ki.SID, encodeURIComponent(e));
    }, r.prototype.addClaims = function(e, t) {
      var n = this.addClientCapabilitiesToClaims(e, t);
      lo.validateClaims(n), this.parameters.set(Ae.CLAIMS, encodeURIComponent(n));
    }, r.prototype.addCorrelationId = function(e) {
      this.parameters.set(Ae.CLIENT_REQUEST_ID, encodeURIComponent(e));
    }, r.prototype.addLibraryInfo = function(e) {
      this.parameters.set(Ae.X_CLIENT_SKU, e.sku), this.parameters.set(Ae.X_CLIENT_VER, e.version), e.os && this.parameters.set(Ae.X_CLIENT_OS, e.os), e.cpu && this.parameters.set(Ae.X_CLIENT_CPU, e.cpu);
    }, r.prototype.addApplicationTelemetry = function(e) {
      e != null && e.appName && this.parameters.set(Ae.X_APP_NAME, e.appName), e != null && e.appVersion && this.parameters.set(Ae.X_APP_VER, e.appVersion);
    }, r.prototype.addPrompt = function(e) {
      lo.validatePrompt(e), this.parameters.set("" + Ae.PROMPT, encodeURIComponent(e));
    }, r.prototype.addState = function(e) {
      te.isEmpty(e) || this.parameters.set(Ae.STATE, encodeURIComponent(e));
    }, r.prototype.addNonce = function(e) {
      this.parameters.set(Ae.NONCE, encodeURIComponent(e));
    }, r.prototype.addCodeChallengeParams = function(e, t) {
      if (lo.validateCodeChallengeParams(e, t), e && t)
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
      te.isEmpty(e) || this.parameters.set(Ae.CLIENT_ASSERTION, encodeURIComponent(e));
    }, r.prototype.addClientAssertionType = function(e) {
      te.isEmpty(e) || this.parameters.set(Ae.CLIENT_ASSERTION_TYPE, encodeURIComponent(e));
    }, r.prototype.addOboAssertion = function(e) {
      this.parameters.set(Ae.OBO_ASSERTION, encodeURIComponent(e));
    }, r.prototype.addRequestTokenUse = function(e) {
      this.parameters.set(Ae.REQUESTED_TOKEN_USE, encodeURIComponent(e));
    }, r.prototype.addGrantType = function(e) {
      this.parameters.set(Ae.GRANT_TYPE, encodeURIComponent(e));
    }, r.prototype.addClientInfo = function() {
      this.parameters.set(yI, "1");
    }, r.prototype.addExtraQueryParameters = function(e) {
      var t = this, n = lo.sanitizeEQParams(e, this.parameters);
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
      return t && t.length > 0 && (n.hasOwnProperty(Wo.ACCESS_TOKEN) || (n[Wo.ACCESS_TOKEN] = {}), n[Wo.ACCESS_TOKEN][Wo.XMS_CC] = {
        values: t
      }), JSON.stringify(n);
    }, r.prototype.addUsername = function(e) {
      this.parameters.set(_s.username, encodeURIComponent(e));
    }, r.prototype.addPassword = function(e) {
      this.parameters.set(_s.password, encodeURIComponent(e));
    }, r.prototype.addPopToken = function(e) {
      te.isEmpty(e) || (this.parameters.set(Ae.TOKEN_TYPE, Ve.POP), this.parameters.set(Ae.REQ_CNF, encodeURIComponent(e)));
    }, r.prototype.addSshJwk = function(e) {
      te.isEmpty(e) || (this.parameters.set(Ae.TOKEN_TYPE, Ve.SSH), this.parameters.set(Ae.REQ_CNF, encodeURIComponent(e)));
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
var Lu = (
  /** @class */
  function() {
    function r(e, t) {
      this.config = RI(e), this.logger = new Mu(this.config.loggerOptions, tm, xu), this.cryptoUtils = this.config.cryptoInterface, this.cacheManager = this.config.storageInterface, this.networkClient = this.config.networkInterface, this.networkManager = new PI(this.networkClient, this.cacheManager), this.serverTelemetryManager = this.config.serverTelemetryManager, this.authority = this.config.authOptions.authority, this.performanceClient = t;
    }
    return r.prototype.createTokenRequestHeaders = function(e) {
      var t = {};
      if (t[gr.CONTENT_TYPE] = N.URL_FORM_CONTENT_TYPE, !this.config.systemOptions.preventCorsPreflight && e)
        switch (e.type) {
          case pr.HOME_ACCOUNT_ID:
            try {
              var n = Yo(e.credential);
              t[gr.CCS_HEADER] = "Oid:" + n.uid + "@" + n.utid;
            } catch (o) {
              this.logger.verbose("Could not parse home account ID for CCS Header: " + o);
            }
            break;
          case pr.UPN:
            t[gr.CCS_HEADER] = "UPN: " + e.credential;
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
        throw ne.createEndpointDiscoveryIncompleteError("Updated authority has not completed endpoint discovery.");
      this.authority = e;
    }, r.prototype.createTokenQueryParameters = function(e) {
      var t = new Vi();
      return e.tokenQueryParameters && t.addExtraQueryParameters(e.tokenQueryParameters), t.createQueryString();
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Du = (
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
          return En.ID_TOKEN;
        case he.ACCESS_TOKEN:
        case he.ACCESS_TOKEN_WITH_AUTH_SCHEME:
          return En.ACCESS_TOKEN;
        case he.REFRESH_TOKEN:
          return En.REFRESH_TOKEN;
        default:
          throw ne.createUnexpectedCredentialTypeError();
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
        n || N.EMPTY_STRING
      ];
      return s.join(Ct.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.generateTargetForCacheKey = function(e) {
      return (e || N.EMPTY_STRING).toLowerCase();
    }, r.generateClaimsHashForCacheKey = function(e) {
      return (e || N.EMPTY_STRING).toLowerCase();
    }, r.generateSchemeForCacheKey = function(e) {
      return e && e.toLowerCase() !== Ve.BEARER.toLowerCase() ? e.toLowerCase() : N.EMPTY_STRING;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var ho = (
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
  }(Du)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var kr = (
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
var po = (
  /** @class */
  function(r) {
    or(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.createAccessTokenEntity = function(t, n, o, a, s, l, u, f, h, p, m, v, C, E, _) {
      var R, A, S = new e();
      S.homeAccountId = t, S.credentialType = he.ACCESS_TOKEN, S.secret = o;
      var I = kr.nowSeconds();
      if (S.cachedAt = I.toString(), S.expiresOn = u.toString(), S.extendedExpiresOn = f.toString(), p && (S.refreshOn = p.toString()), S.environment = n, S.clientId = a, S.realm = s, S.target = l, S.userAssertionHash = v, S.tokenType = te.isEmpty(m) ? Ve.BEARER : m, E && (S.requestedClaims = E, S.requestedClaimsHash = _), ((R = S.tokenType) === null || R === void 0 ? void 0 : R.toLowerCase()) !== Ve.BEARER.toLowerCase())
        switch (S.credentialType = he.ACCESS_TOKEN_WITH_AUTH_SCHEME, S.tokenType) {
          case Ve.POP:
            var O = an.extractTokenClaims(o, h);
            if (!(!((A = O == null ? void 0 : O.cnf) === null || A === void 0) && A.kid))
              throw ne.createTokenClaimsRequiredError();
            S.keyId = O.cnf.kid;
            break;
          case Ve.SSH:
            S.keyId = C;
        }
      return S;
    }, e.isAccessTokenEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("realm") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") && t.hasOwnProperty("target") && (t.credentialType === he.ACCESS_TOKEN || t.credentialType === he.ACCESS_TOKEN_WITH_AUTH_SCHEME) : !1;
    }, e;
  }(Du)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Qo = (
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
  }(Du)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Mp = [
  "interaction_required",
  "consent_required",
  "login_required"
], NI = [
  "message_only",
  "additional_action",
  "basic_action",
  "user_password_expired",
  "consent_required"
], Jo = {
  noTokensFoundError: {
    code: "no_tokens_found",
    desc: "No refresh token found in the cache. Please sign-in."
  },
  native_account_unavailable: {
    code: "native_account_unavailable",
    desc: "The requested account is not available in the native broker. It may have been deleted or logged out. Please sign-in again using an interactive API."
  }
}, Gr = (
  /** @class */
  function(r) {
    or(e, r);
    function e(t, n, o, a, s, l, u) {
      var f = r.call(this, t, n, o) || this;
      return Object.setPrototypeOf(f, e.prototype), f.timestamp = a || N.EMPTY_STRING, f.traceId = s || N.EMPTY_STRING, f.correlationId = l || N.EMPTY_STRING, f.claims = u || N.EMPTY_STRING, f.name = "InteractionRequiredAuthError", f;
    }
    return e.isInteractionRequiredError = function(t, n, o) {
      var a = !!t && Mp.indexOf(t) > -1, s = !!o && NI.indexOf(o) > -1, l = !!n && Mp.some(function(u) {
        return n.indexOf(u) > -1;
      });
      return a || l || s;
    }, e.createNoTokensFoundError = function() {
      return new e(Jo.noTokensFoundError.code, Jo.noTokensFoundError.desc);
    }, e.createNativeAccountUnavailableError = function() {
      return new e(Jo.native_account_unavailable.code, Jo.native_account_unavailable.desc);
    }, e;
  }(le)
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
var _n = (
  /** @class */
  function() {
    function r() {
    }
    return r.setRequestState = function(e, t, n) {
      var o = r.generateLibraryState(e, n);
      return te.isEmpty(t) ? o : "" + o + N.RESOURCE_DELIM + t;
    }, r.generateLibraryState = function(e, t) {
      if (!e)
        throw ne.createNoCryptoObjectError("generateLibraryState");
      var n = {
        id: e.createNewGuid()
      };
      t && (n.meta = t);
      var o = JSON.stringify(n);
      return e.base64Encode(o);
    }, r.parseRequestState = function(e, t) {
      if (!e)
        throw ne.createNoCryptoObjectError("parseRequestState");
      if (te.isEmpty(t))
        throw ne.createInvalidStateError(t, "Null, undefined or empty state");
      try {
        var n = t.split(N.RESOURCE_DELIM), o = n[0], a = n.length > 1 ? n.slice(1).join(N.RESOURCE_DELIM) : N.EMPTY_STRING, s = e.base64Decode(o), l = JSON.parse(s);
        return {
          userRequestState: te.isEmpty(a) ? N.EMPTY_STRING : a,
          libraryState: l
        };
      } catch (u) {
        throw ne.createInvalidStateError(t, u);
      }
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var He = (
  /** @class */
  function() {
    function r(e) {
      if (this._urlString = e, te.isEmpty(this._urlString))
        throw et.createUrlEmptyError();
      te.isEmpty(this.getHash()) && (this._urlString = r.canonicalizeUri(e));
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
        return te.endsWith(t, "?") ? t = t.slice(0, -1) : te.endsWith(t, "?/") && (t = t.slice(0, -2)), te.endsWith(t, "/") || (t += "/"), t;
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
      return te.isEmpty(t) ? e : e.indexOf("?") < 0 ? e + "?" + t : e + "&" + t;
    }, r.removeHashFromUrl = function(e) {
      return r.canonicalizeUri(e.split("#")[0]);
    }, r.prototype.replaceTenantPath = function(e) {
      var t = this.getUrlComponents(), n = t.PathSegments;
      return e && n.length !== 0 && (n[0] === go.COMMON || n[0] === go.ORGANIZATIONS) && (n[0] = e), r.constructAuthorityUriFromObject(t);
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
      }), n.PathSegments = o, !te.isEmpty(n.QueryString) && n.QueryString.endsWith("/") && (n.QueryString = n.QueryString.substring(0, n.QueryString.length - 1)), n;
    }, r.getDomainFromUrl = function(e) {
      var t = RegExp("^([^:/?#]+://)?([^/?#]*)"), n = e.match(t);
      if (!n)
        throw et.createUrlParseError("Given url string: " + e);
      return n[2];
    }, r.getAbsoluteUrl = function(e, t) {
      if (e[0] === N.FORWARD_SLASH) {
        var n = new r(t), o = n.getUrlComponents();
        return o.Protocol + "//" + o.HostNameAndPort + e;
      }
      return e;
    }, r.parseHash = function(e) {
      var t = e.indexOf("#"), n = e.indexOf("#/");
      return n > -1 ? e.substring(n + 2) : t > -1 ? e.substring(t + 1) : N.EMPTY_STRING;
    }, r.parseQueryString = function(e) {
      var t = e.indexOf("?"), n = e.indexOf("/?");
      return n > -1 ? e.substring(n + 2) : t > -1 ? e.substring(t + 1) : N.EMPTY_STRING;
    }, r.constructAuthorityUriFromObject = function(e) {
      return new r(e.Protocol + "//" + e.HostNameAndPort + "/" + e.PathSegments.join("/"));
    }, r.getDeserializedHash = function(e) {
      if (te.isEmpty(e))
        return {};
      var t = r.parseHash(e), n = te.queryStringToObject(te.isEmpty(t) ? e : t);
      if (!n)
        throw ne.createHashNotDeserializedError(JSON.stringify(n));
      return n;
    }, r.getDeserializedQueryString = function(e) {
      if (te.isEmpty(e))
        return {};
      var t = r.parseQueryString(e), n = te.queryStringToObject(te.isEmpty(t) ? e : t);
      if (!n)
        throw ne.createHashNotDeserializedError(JSON.stringify(n));
      return n;
    }, r.hashContainsKnownProperties = function(e) {
      if (te.isEmpty(e) || e.indexOf("=") < 0)
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
var As;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.InProgress = 1] = "InProgress", r[r.Completed = 2] = "Completed";
})(As || (As = {}));
var OI = /* @__PURE__ */ new Set([
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
var ni = (
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
              return a = n.resourceRequestMethod, s = n.resourceRequestUri, l = n.shrClaims, u = n.shrNonce, f = s ? new He(s) : void 0, h = f == null ? void 0 : f.getUrlComponents(), [4, this.cryptoUtils.signJwt($e({ at: e, ts: kr.nowSeconds(), m: a == null ? void 0 : a.toUpperCase(), u: h == null ? void 0 : h.HostNameAndPort, nonce: u || this.cryptoUtils.createNewGuid(), p: h == null ? void 0 : h.AbsolutePath, q: h != null && h.QueryString ? [[], h.QueryString] : void 0, client_claims: l || void 0 }, o), t, n.correlationId)];
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
var MI = (
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
var Rs = (
  /** @class */
  function() {
    function r(e, t, n, o, a, s, l) {
      this.clientId = e, this.cacheStorage = t, this.cryptoObj = n, this.logger = o, this.serializableCache = a, this.persistencePlugin = s, this.performanceClient = l;
    }
    return r.prototype.validateServerAuthorizationCodeResponse = function(e, t, n) {
      if (!e.state || !t)
        throw e.state ? ne.createStateNotFoundError("Cached State") : ne.createStateNotFoundError("Server State");
      if (decodeURIComponent(e.state) !== decodeURIComponent(t))
        throw ne.createStateMismatchError();
      if (e.error || e.error_description || e.suberror)
        throw Gr.isInteractionRequiredError(e.error, e.error_description, e.suberror) ? new Gr(e.error || N.EMPTY_STRING, e.error_description, e.suberror, e.timestamp || N.EMPTY_STRING, e.trace_id || N.EMPTY_STRING, e.correlation_id || N.EMPTY_STRING, e.claims || N.EMPTY_STRING) : new Co(e.error || N.EMPTY_STRING, e.error_description, e.suberror);
      e.client_info && Ts(e.client_info, n);
    }, r.prototype.validateTokenResponse = function(e) {
      if (e.error || e.error_description || e.suberror) {
        if (Gr.isInteractionRequiredError(e.error, e.error_description, e.suberror))
          throw new Gr(e.error, e.error_description, e.suberror, e.timestamp || N.EMPTY_STRING, e.trace_id || N.EMPTY_STRING, e.correlation_id || N.EMPTY_STRING, e.claims || N.EMPTY_STRING);
        var t = e.error_codes + " - [" + e.timestamp + "]: " + e.error_description + " - Correlation ID: " + e.correlation_id + " - Trace ID: " + e.trace_id;
        throw new Co(e.error, t, e.suberror);
      }
    }, r.prototype.handleServerTokenResponse = function(e, t, n, o, a, s, l, u, f) {
      var h;
      return _e(this, void 0, void 0, function() {
        var p, m, v, C, E, _, R;
        return Se(this, function(A) {
          switch (A.label) {
            case 0:
              if ((h = this.performanceClient) === null || h === void 0 || h.addQueueMeasurement(F.HandleServerTokenResponse, e.correlation_id), e.id_token) {
                if (p = new an(e.id_token || N.EMPTY_STRING, this.cryptoObj), a && !te.isEmpty(a.nonce) && p.claims.nonce !== a.nonce)
                  throw ne.createNonceMismatchError();
                if (o.maxAge || o.maxAge === 0) {
                  if (m = p.claims.auth_time, !m)
                    throw ne.createAuthTimeNotFoundError();
                  an.checkMaxAge(m, o.maxAge);
                }
              }
              this.homeAccountIdentifier = Rt.generateHomeAccountId(e.client_info || N.EMPTY_STRING, t.authorityType, this.logger, this.cryptoObj, p), a && a.state && (v = _n.parseRequestState(this.cryptoObj, a.state)), e.key_id = e.key_id || o.sshKid || void 0, C = this.generateCacheRecord(e, t, n, o, p, s, a), A.label = 1;
            case 1:
              return A.trys.push([1, , 5, 8]), this.persistencePlugin && this.serializableCache ? (this.logger.verbose("Persistence enabled, calling beforeCacheAccess"), E = new MI(this.serializableCache, !0), [4, this.persistencePlugin.beforeCacheAccess(E)]) : [3, 3];
            case 2:
              A.sent(), A.label = 3;
            case 3:
              return l && !u && C.account && (_ = C.account.generateAccountKey(), R = this.cacheStorage.getAccount(_), !R) ? (this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache"), [2, r.generateAuthenticationResult(this.cryptoObj, t, C, !1, o, p, v, void 0, f)]) : [4, this.cacheStorage.saveCacheRecord(C)];
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
      if (te.isEmpty(u))
        throw ne.createInvalidCacheEnvironmentError();
      var f, h;
      !te.isEmpty(e.id_token) && a && (f = ho.createIdTokenEntity(this.homeAccountIdentifier, u, e.id_token || N.EMPTY_STRING, this.clientId, a.claims.tid || N.EMPTY_STRING), h = this.generateAccountEntity(e, a, t, l));
      var p = null;
      if (!te.isEmpty(e.access_token)) {
        var m = e.scope ? Dt.fromString(e.scope) : new Dt(o.scopes || []), v = (typeof e.expires_in == "string" ? parseInt(e.expires_in, 10) : e.expires_in) || 0, C = (typeof e.ext_expires_in == "string" ? parseInt(e.ext_expires_in, 10) : e.ext_expires_in) || 0, E = (typeof e.refresh_in == "string" ? parseInt(e.refresh_in, 10) : e.refresh_in) || void 0, _ = n + v, R = _ + C, A = E && E > 0 ? n + E : void 0;
        p = po.createAccessTokenEntity(this.homeAccountIdentifier, u, e.access_token || N.EMPTY_STRING, this.clientId, a ? a.claims.tid || N.EMPTY_STRING : t.tenant, m.printScopes(), _, R, this.cryptoObj, A, e.token_type, s, e.key_id, o.claims, o.requestedClaimsHash);
      }
      var S = null;
      te.isEmpty(e.refresh_token) || (S = Qo.createRefreshTokenEntity(this.homeAccountIdentifier, u, e.refresh_token || N.EMPTY_STRING, this.clientId, e.foci, s));
      var I = null;
      return te.isEmpty(e.foci) || (I = cu.createAppMetadataEntity(this.clientId, u, e.foci)), new Wi(h, f, p, S, I);
    }, r.prototype.generateAccountEntity = function(e, t, n, o) {
      var a = n.authorityType, s = o ? o.cloud_graph_host_name : N.EMPTY_STRING, l = o ? o.msgraph_host : N.EMPTY_STRING;
      if (a === Vt.Adfs)
        return this.logger.verbose("Authority type is ADFS, creating ADFS account"), Rt.createGenericAccount(this.homeAccountIdentifier, t, n, s, l);
      if (te.isEmpty(e.client_info) && n.protocolMode === "AAD")
        throw ne.createClientInfoEmptyError();
      return e.client_info ? Rt.createAccount(e.client_info, this.homeAccountIdentifier, t, n, s, l) : Rt.createGenericAccount(this.homeAccountIdentifier, t, n, s, l);
    }, r.generateAuthenticationResult = function(e, t, n, o, a, s, l, u, f) {
      var h, p, m;
      return _e(this, void 0, void 0, function() {
        var v, C, E, _, R, A, S, I, O, L, q;
        return Se(this, function(U) {
          switch (U.label) {
            case 0:
              if (v = N.EMPTY_STRING, C = [], E = null, R = N.EMPTY_STRING, !n.accessToken)
                return [3, 4];
              if (n.accessToken.tokenType !== Ve.POP)
                return [3, 2];
              if (A = new ni(e), S = n.accessToken, I = S.secret, O = S.keyId, !O)
                throw ne.createKeyIdMissingError();
              return [4, A.signPopToken(I, O, a)];
            case 1:
              return v = U.sent(), [3, 3];
            case 2:
              v = n.accessToken.secret, U.label = 3;
            case 3:
              C = Dt.fromString(n.accessToken.target).asArray(), E = new Date(Number(n.accessToken.expiresOn) * 1e3), _ = new Date(Number(n.accessToken.extendedExpiresOn) * 1e3), U.label = 4;
            case 4:
              return n.appMetadata && (R = n.appMetadata.familyId === qi ? qi : N.EMPTY_STRING), L = (s == null ? void 0 : s.claims.oid) || (s == null ? void 0 : s.claims.sub) || N.EMPTY_STRING, q = (s == null ? void 0 : s.claims.tid) || N.EMPTY_STRING, u != null && u.spa_accountid && n.account && (n.account.nativeAccountId = u == null ? void 0 : u.spa_accountid), [2, {
                authority: t.canonicalAuthority,
                uniqueId: L,
                tenantId: q,
                scopes: C,
                account: n.account ? n.account.getAccountInfo() : null,
                idToken: s ? s.rawToken : N.EMPTY_STRING,
                idTokenClaims: s ? s.claims : {},
                accessToken: v,
                fromCache: o,
                expiresOn: E,
                correlationId: a.correlationId,
                requestId: f || N.EMPTY_STRING,
                extExpiresOn: _,
                familyId: R,
                tokenType: ((h = n.accessToken) === null || h === void 0 ? void 0 : h.tokenType) || N.EMPTY_STRING,
                state: l ? l.userRequestState : N.EMPTY_STRING,
                cloudGraphHostName: ((p = n.account) === null || p === void 0 ? void 0 : p.cloudGraphHostName) || N.EMPTY_STRING,
                msGraphHost: ((m = n.account) === null || m === void 0 ? void 0 : m.msGraphHost) || N.EMPTY_STRING,
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
var nm = (
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
        var h, p, m, v, C, E, _ = this;
        return Se(this, function(R) {
          switch (R.label) {
            case 0:
              if (!t || !t.code)
                throw ne.createTokenRequestCannotBeMadeError();
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(F.AuthClientAcquireToken, t.correlationId), h = (a = this.performanceClient) === null || a === void 0 ? void 0 : a.startMeasurement("AuthCodeClientAcquireToken", t.correlationId), this.logger.info("in acquireToken call in auth-code client"), p = kr.nowSeconds(), (s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(F.AuthClientExecuteTokenRequest, t.correlationId), [4, this.executeTokenRequest(this.authority, t)];
            case 1:
              return m = R.sent(), v = (l = m.headers) === null || l === void 0 ? void 0 : l[gr.X_MS_REQUEST_ID], C = (u = m.headers) === null || u === void 0 ? void 0 : u[gr.X_MS_HTTP_VERSION], C && (h == null || h.addStaticFields({
                httpVerAuthority: C
              })), E = new Rs(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin, this.performanceClient), E.validateTokenResponse(m.body), (f = this.performanceClient) === null || f === void 0 || f.setPreQueueTime(F.HandleServerTokenResponse, t.correlationId), [2, E.handleServerTokenResponse(m.body, this.authority, p, t, n, void 0, void 0, void 0, v).then(function(A) {
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
      var o = new Rs(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, null, null), a = new He(t), s = He.getDeserializedHash(a.getHash());
      if (o.validateServerAuthorizationCodeResponse(s, n, this.cryptoUtils), !s.code)
        throw ne.createNoAuthCodeInServerResponseError();
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
        var s, l, u, f, h, p, m;
        return Se(this, function(v) {
          switch (v.label) {
            case 0:
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(F.AuthClientExecuteTokenRequest, n.correlationId), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(F.AuthClientCreateTokenRequestBody, n.correlationId), s = this.createTokenQueryParameters(n), l = He.appendQueryString(t.tokenEndpoint, s), [4, this.createTokenRequestBody(n)];
            case 1:
              if (u = v.sent(), f = void 0, n.clientInfo)
                try {
                  h = Ts(n.clientInfo, this.cryptoUtils), f = {
                    credential: "" + h.uid + Ct.CLIENT_INFO_SEPARATOR + h.utid,
                    type: pr.HOME_ACCOUNT_ID
                  };
                } catch (C) {
                  this.logger.verbose("Could not parse client info for CCS Header: " + C);
                }
              return p = this.createTokenRequestHeaders(f || n.ccsCredential), m = {
                clientId: this.config.authOptions.clientId,
                authority: t.canonicalAuthority,
                scopes: n.scopes,
                claims: n.claims,
                authenticationScheme: n.authenticationScheme,
                resourceRequestMethod: n.resourceRequestMethod,
                resourceRequestUri: n.resourceRequestUri,
                shrClaims: n.shrClaims,
                sshKid: n.sshKid
              }, [2, this.executePostToTokenEndpoint(l, u, p, m)];
          }
        });
      });
    }, e.prototype.createTokenRequestBody = function(t) {
      var n, o;
      return _e(this, void 0, void 0, function() {
        var a, s, l, u, f, h, p, p, m;
        return Se(this, function(v) {
          switch (v.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.AuthClientCreateTokenRequestBody, t.correlationId), a = new Vi(), a.addClientId(this.config.authOptions.clientId), this.includeRedirectUri ? a.addRedirectUri(t.redirectUri) : lo.validateRedirectUri(t.redirectUri), a.addScopes(t.scopes), a.addAuthorizationCode(t.code), a.addLibraryInfo(this.config.libraryInfo), a.addApplicationTelemetry(this.config.telemetry.application), a.addThrottling(), this.serverTelemetryManager && a.addServerTelemetry(this.serverTelemetryManager), t.codeVerifier && a.addCodeVerifier(t.codeVerifier), this.config.clientCredentials.clientSecret && a.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion && (s = this.config.clientCredentials.clientAssertion, a.addClientAssertion(s.assertion), a.addClientAssertionType(s.assertionType)), a.addGrantType(bs.AUTHORIZATION_CODE_GRANT), a.addClientInfo(), t.authenticationScheme !== Ve.POP ? [3, 2] : (l = new ni(this.cryptoUtils, this.performanceClient), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(F.PopTokenGenerateCnf, t.correlationId), [4, l.generateCnf(t)]);
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
              if (f = t.correlationId || this.config.cryptoInterface.createNewGuid(), a.addCorrelationId(f), (!te.isEmptyObj(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && a.addClaims(t.claims, this.config.authOptions.clientCapabilities), h = void 0, t.clientInfo)
                try {
                  p = Ts(t.clientInfo, this.cryptoUtils), h = {
                    credential: "" + p.uid + Ct.CLIENT_INFO_SEPARATOR + p.utid,
                    type: pr.HOME_ACCOUNT_ID
                  };
                } catch (C) {
                  this.logger.verbose("Could not parse client info for CCS Header: " + C);
                }
              else
                h = t.ccsCredential;
              if (this.config.systemOptions.preventCorsPreflight && h)
                switch (h.type) {
                  case pr.HOME_ACCOUNT_ID:
                    try {
                      p = Yo(h.credential), a.addCcsOid(p);
                    } catch (C) {
                      this.logger.verbose("Could not parse home account ID for CCS Header: " + C);
                    }
                    break;
                  case pr.UPN:
                    a.addCcsUpn(h.credential);
                    break;
                }
              return t.tokenBodyParameters && a.addExtraQueryParameters(t.tokenBodyParameters), t.enableSpaAuthorizationCode && (!t.tokenBodyParameters || !t.tokenBodyParameters[Ae.RETURN_SPA_CODE]) && a.addExtraQueryParameters((m = {}, m[Ae.RETURN_SPA_CODE] = "1", m)), [2, a.createQueryString()];
          }
        });
      });
    }, e.prototype.createAuthCodeUrlQueryString = function(t) {
      var n;
      return _e(this, void 0, void 0, function() {
        var o, a, s, l, u, f, f, f, h, p;
        return Se(this, function(m) {
          switch (m.label) {
            case 0:
              if ((n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.AuthClientCreateQueryString, t.correlationId), o = new Vi(), o.addClientId(this.config.authOptions.clientId), a = Ys(t.scopes || [], t.extraScopesToConsent || []), o.addScopes(a), o.addRedirectUri(t.redirectUri), s = t.correlationId || this.config.cryptoInterface.createNewGuid(), o.addCorrelationId(s), o.addResponseMode(t.responseMode), o.addResponseTypeCode(), o.addLibraryInfo(this.config.libraryInfo), o.addApplicationTelemetry(this.config.telemetry.application), o.addClientInfo(), t.codeChallenge && t.codeChallengeMethod && o.addCodeChallengeParams(t.codeChallenge, t.codeChallengeMethod), t.prompt && o.addPrompt(t.prompt), t.domainHint && o.addDomainHint(t.domainHint), t.prompt !== Ft.SELECT_ACCOUNT)
                if (t.sid && t.prompt === Ft.NONE)
                  this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request"), o.addSid(t.sid);
                else if (t.account) {
                  if (l = this.extractAccountSid(t.account), u = this.extractLoginHint(t.account), u) {
                    this.logger.verbose("createAuthCodeUrlQueryString: login_hint claim present on account"), o.addLoginHint(u);
                    try {
                      f = Yo(t.account.homeAccountId), o.addCcsOid(f);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  } else if (l && t.prompt === Ft.NONE) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from account"), o.addSid(l);
                    try {
                      f = Yo(t.account.homeAccountId), o.addCcsOid(f);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  } else if (t.loginHint)
                    this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from request"), o.addLoginHint(t.loginHint), o.addCcsUpn(t.loginHint);
                  else if (t.account.username) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from account"), o.addLoginHint(t.account.username);
                    try {
                      f = Yo(t.account.homeAccountId), o.addCcsOid(f);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  }
                } else
                  t.loginHint && (this.logger.verbose("createAuthCodeUrlQueryString: No account, adding login_hint from request"), o.addLoginHint(t.loginHint), o.addCcsUpn(t.loginHint));
              else
                this.logger.verbose("createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints");
              return t.nonce && o.addNonce(t.nonce), t.state && o.addState(t.state), (!te.isEmpty(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && o.addClaims(t.claims, this.config.authOptions.clientCapabilities), t.extraQueryParameters && o.addExtraQueryParameters(t.extraQueryParameters), t.nativeBroker ? (o.addNativeBroker(), t.authenticationScheme !== Ve.POP ? [3, 2] : (h = new ni(this.cryptoUtils), [4, h.generateCnf(t)])) : [3, 2];
            case 1:
              p = m.sent(), o.addPopToken(p.reqCnfString), m.label = 2;
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
  }(Lu)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var om = (
  /** @class */
  function(r) {
    or(e, r);
    function e(t, n) {
      return r.call(this, t, n) || this;
    }
    return e.prototype.acquireToken = function(t) {
      var n, o, a, s, l, u, f;
      return _e(this, void 0, void 0, function() {
        var h, p, m, v, C, E, _ = this;
        return Se(this, function(R) {
          switch (R.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.RefreshTokenClientAcquireToken, t.correlationId), h = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(F.RefreshTokenClientAcquireToken, t.correlationId), this.logger.verbose("RefreshTokenClientAcquireToken called", t.correlationId), p = kr.nowSeconds(), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(F.RefreshTokenClientExecuteTokenRequest, t.correlationId), [4, this.executeTokenRequest(t, this.authority)];
            case 1:
              return m = R.sent(), v = (s = m.headers) === null || s === void 0 ? void 0 : s[gr.X_MS_HTTP_VERSION], h == null || h.addStaticFields({
                refreshTokenSize: ((l = m.body.refresh_token) === null || l === void 0 ? void 0 : l.length) || 0
              }), v && (h == null || h.addStaticFields({
                httpVerToken: v
              })), C = (u = m.headers) === null || u === void 0 ? void 0 : u[gr.X_MS_REQUEST_ID], E = new Rs(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin), E.validateTokenResponse(m.body), (f = this.performanceClient) === null || f === void 0 || f.setPreQueueTime(F.HandleServerTokenResponse, t.correlationId), [2, E.handleServerTokenResponse(m.body, this.authority, p, t, void 0, void 0, !0, t.forceCache, C).then(function(A) {
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
            throw ne.createNoAccountInSilentRequestError();
          if (l = this.cacheManager.isAppMetadataFOCI(t.account.environment), l)
            try {
              return (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(F.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), [2, this.acquireTokenWithCachedRefreshToken(t, !0)];
            } catch (p) {
              if (u = p instanceof Gr && p.errorCode === Jo.noTokensFoundError.code, f = p instanceof Co && p.errorCode === Op.INVALID_GRANT_ERROR && p.subError === Op.CLIENT_MISMATCH_ERROR, u || f)
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
            throw l == null || l.discardMeasurement(), Gr.createNoTokensFoundError();
          return l == null || l.endMeasurement({
            success: !0
          }), f = $e($e({}, t), { refreshToken: u.secret, authenticationScheme: t.authenticationScheme || Ve.BEARER, ccsCredential: {
            credential: t.account.homeAccountId,
            type: pr.HOME_ACCOUNT_ID
          } }), (s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(F.RefreshTokenClientAcquireToken, t.correlationId), [2, this.acquireToken(f)];
        });
      });
    }, e.prototype.executeTokenRequest = function(t, n) {
      var o, a, s;
      return _e(this, void 0, void 0, function() {
        var l, u, f, h, p, m;
        return Se(this, function(v) {
          switch (v.label) {
            case 0:
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(F.RefreshTokenClientExecuteTokenRequest, t.correlationId), l = (a = this.performanceClient) === null || a === void 0 ? void 0 : a.startMeasurement(F.RefreshTokenClientExecuteTokenRequest, t.correlationId), (s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(F.RefreshTokenClientCreateTokenRequestBody, t.correlationId), u = this.createTokenQueryParameters(t), f = He.appendQueryString(n.tokenEndpoint, u), [4, this.createTokenRequestBody(t)];
            case 1:
              return h = v.sent(), p = this.createTokenRequestHeaders(t.ccsCredential), m = {
                clientId: this.config.authOptions.clientId,
                authority: n.canonicalAuthority,
                scopes: t.scopes,
                claims: t.claims,
                authenticationScheme: t.authenticationScheme,
                resourceRequestMethod: t.resourceRequestMethod,
                resourceRequestUri: t.resourceRequestUri,
                shrClaims: t.shrClaims,
                sshKid: t.sshKid
              }, [2, this.executePostToTokenEndpoint(f, h, p, m).then(function(C) {
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
        var s, l, u, f, h, p, m;
        return Se(this, function(v) {
          switch (v.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.RefreshTokenClientCreateTokenRequestBody, t.correlationId), s = t.correlationId, l = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(F.BaseClientCreateTokenRequestHeaders, s), u = new Vi(), u.addClientId(this.config.authOptions.clientId), u.addScopes(t.scopes), u.addGrantType(bs.REFRESH_TOKEN_GRANT), u.addClientInfo(), u.addLibraryInfo(this.config.libraryInfo), u.addApplicationTelemetry(this.config.telemetry.application), u.addThrottling(), this.serverTelemetryManager && u.addServerTelemetry(this.serverTelemetryManager), u.addCorrelationId(s), u.addRefreshToken(t.refreshToken), this.config.clientCredentials.clientSecret && u.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion && (f = this.config.clientCredentials.clientAssertion, u.addClientAssertion(f.assertion), u.addClientAssertionType(f.assertionType)), t.authenticationScheme !== Ve.POP ? [3, 2] : (h = new ni(this.cryptoUtils, this.performanceClient), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(F.PopTokenGenerateCnf, t.correlationId), [4, h.generateCnf(t)]);
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
              if ((!te.isEmptyObj(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && u.addClaims(t.claims, this.config.authOptions.clientCapabilities), this.config.systemOptions.preventCorsPreflight && t.ccsCredential)
                switch (t.ccsCredential.type) {
                  case pr.HOME_ACCOUNT_ID:
                    try {
                      m = Yo(t.ccsCredential.credential), u.addCcsOid(m);
                    } catch (C) {
                      this.logger.verbose("Could not parse home account ID for CCS Header: " + C);
                    }
                    break;
                  case pr.UPN:
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
  }(Lu)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var xI = (
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
              if (n = a.sent(), n instanceof ne && n.errorCode === j.tokenRefreshRequired.code)
                return o = new om(this.config, this.performanceClient), [2, o.acquireTokenByRefreshToken(t)];
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
                throw (n = this.serverTelemetryManager) === null || n === void 0 || n.setCacheOutcome(qn.FORCE_REFRESH), this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because forceRefresh is true."), ne.createRefreshRequiredError();
              if (!this.config.cacheOptions.claimsBasedCachingEnabled && !te.isEmptyObj(t.claims))
                throw (o = this.serverTelemetryManager) === null || o === void 0 || o.setCacheOutcome(qn.CLAIMS_REQUESTED_CACHE_SKIPPED), this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because claims-based caching is disabled and claims were requested."), ne.createRefreshRequiredError();
              if (!t.account)
                throw ne.createNoAccountInSilentRequestError();
              if (u = t.authority || this.authority.getPreferredCache(), f = this.cacheManager.readCacheRecord(t.account, t, u), f.accessToken) {
                if (kr.wasClockTurnedBack(f.accessToken.cachedAt) || kr.isTokenExpired(f.accessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds))
                  throw (s = this.serverTelemetryManager) === null || s === void 0 || s.setCacheOutcome(qn.CACHED_ACCESS_TOKEN_EXPIRED), this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token is expired or will expire within " + this.config.systemOptions.tokenRenewalOffsetSeconds + " seconds."), ne.createRefreshRequiredError();
                if (f.accessToken.refreshOn && kr.isTokenExpired(f.accessToken.refreshOn, 0))
                  throw (l = this.serverTelemetryManager) === null || l === void 0 || l.setCacheOutcome(qn.REFRESH_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token's refreshOn property has been exceeded'."), ne.createRefreshRequiredError();
              } else
                throw (a = this.serverTelemetryManager) === null || a === void 0 || a.setCacheOutcome(qn.NO_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties."), ne.createRefreshRequiredError();
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
              if (t.idToken && (o = new an(t.idToken.secret, this.config.cryptoInterface)), n.maxAge || n.maxAge === 0) {
                if (a = o == null ? void 0 : o.claims.auth_time, !a)
                  throw ne.createAuthTimeNotFoundError();
                an.checkMaxAge(a, n.maxAge);
              }
              return [4, Rs.generateAuthenticationResult(this.cryptoUtils, this.authority, t, !0, n, o)];
            case 1:
              return [2, s.sent()];
          }
        });
      });
    }, e;
  }(Lu)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
function LI(r) {
  return r.hasOwnProperty("authorization_endpoint") && r.hasOwnProperty("token_endpoint") && r.hasOwnProperty("issuer") && r.hasOwnProperty("jwks_uri");
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
var im = { endpointMetadata: { "https://login.microsoftonline.com/common/": { token_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/common/": { token_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/common/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/common/": { token_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/consumers/": { token_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/consumers/": { token_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/consumers/": { token_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/organizations/": { token_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/organizations/": { token_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/organizations/": { token_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" } }, instanceDiscoveryMetadata: { "https://login.microsoftonline.com/common/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/common/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/common/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/consumers/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/consumers/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/consumers/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/organizations/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/organizations/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/organizations/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] } } }, xp = im.endpointMetadata, Lp = im.instanceDiscoveryMetadata;
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
      this.expiresAt = kr.nowSeconds() + $i.REFRESH_TIME_SECONDS;
    }
    return r.prototype.updateCloudDiscoveryMetadata = function(e, t) {
      this.aliases = e.aliases, this.preferred_cache = e.preferred_cache, this.preferred_network = e.preferred_network, this.aliasesFromNetwork = t;
    }, r.prototype.updateEndpointMetadata = function(e, t) {
      this.authorization_endpoint = e.authorization_endpoint, this.token_endpoint = e.token_endpoint, this.end_session_endpoint = e.end_session_endpoint, this.issuer = e.issuer, this.endpointsFromNetwork = t, this.jwks_uri = e.jwks_uri;
    }, r.prototype.updateCanonicalAuthority = function(e) {
      this.canonical_authority = e;
    }, r.prototype.resetExpiresAt = function() {
      this.expiresAt = kr.nowSeconds() + $i.REFRESH_TIME_SECONDS;
    }, r.prototype.isExpired = function() {
      return this.expiresAt <= kr.nowSeconds();
    }, r.isAuthorityMetadataEntity = function(e, t) {
      return t ? e.indexOf($i.CACHE_KEY) === 0 && t.hasOwnProperty("aliases") && t.hasOwnProperty("preferred_cache") && t.hasOwnProperty("preferred_network") && t.hasOwnProperty("canonical_authority") && t.hasOwnProperty("authorization_endpoint") && t.hasOwnProperty("token_endpoint") && t.hasOwnProperty("issuer") && t.hasOwnProperty("aliasesFromNetwork") && t.hasOwnProperty("endpointsFromNetwork") && t.hasOwnProperty("expiresAt") && t.hasOwnProperty("jwks_uri") : !1;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
function DI(r) {
  return r.hasOwnProperty("tenant_discovery_endpoint") && r.hasOwnProperty("metadata");
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
function UI(r) {
  return r.hasOwnProperty("error") && r.hasOwnProperty("error_description");
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
var FI = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.networkInterface = e, this.performanceClient = t, this.correlationId = n;
    }
    return r.prototype.detectRegion = function(e, t) {
      var n, o, a, s;
      return _e(this, void 0, void 0, function() {
        var l, u, f, h, p;
        return Se(this, function(m) {
          switch (m.label) {
            case 0:
              if ((n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.RegionDiscoveryDetectRegion, this.correlationId), l = e, l)
                return [3, 8];
              u = r.IMDS_OPTIONS, m.label = 1;
            case 1:
              return m.trys.push([1, 6, , 7]), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(F.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [4, this.getRegionFromIMDS(N.IMDS_VERSION, u)];
            case 2:
              return f = m.sent(), f.status === jo.httpSuccess && (l = f.body, t.region_source = Bn.IMDS), f.status !== jo.httpBadRequest ? [3, 5] : ((a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(F.RegionDiscoveryGetCurrentVersion, this.correlationId), [4, this.getCurrentVersion(u)]);
            case 3:
              return h = m.sent(), h ? ((s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(F.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [4, this.getRegionFromIMDS(h, u)]) : (t.region_source = Bn.FAILED_AUTO_DETECTION, [2, null]);
            case 4:
              p = m.sent(), p.status === jo.httpSuccess && (l = p.body, t.region_source = Bn.IMDS), m.label = 5;
            case 5:
              return [3, 7];
            case 6:
              return m.sent(), t.region_source = Bn.FAILED_AUTO_DETECTION, [2, null];
            case 7:
              return [3, 9];
            case 8:
              t.region_source = Bn.ENVIRONMENT_VARIABLE, m.label = 9;
            case 9:
              return l || (t.region_source = Bn.FAILED_AUTO_DETECTION), [2, l || null];
          }
        });
      });
    }, r.prototype.getRegionFromIMDS = function(e, t) {
      var n;
      return _e(this, void 0, void 0, function() {
        return Se(this, function(o) {
          return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [2, this.networkInterface.sendGetRequestAsync(N.IMDS_ENDPOINT + "?api-version=" + e + "&format=text", t, N.IMDS_TIMEOUT)];
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
              return o.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(N.IMDS_ENDPOINT + "?format=json", e)];
            case 2:
              return n = o.sent(), n.status === jo.httpBadRequest && n.body && n.body["newest-versions"] && n.body["newest-versions"].length > 0 ? [2, n.body["newest-versions"][0]] : [2, null];
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
      this.canonicalAuthority = e, this._canonicalAuthority.validateAsUri(), this.networkInterface = t, this.cacheManager = n, this.authorityOptions = o, this.regionDiscoveryMetadata = { region_used: void 0, region_source: void 0, region_outcome: void 0 }, this.logger = a, this.performanceClient = s, this.correlationId = l, this.regionDiscovery = new FI(t, this.performanceClient, this.correlationId);
    }
    return r.prototype.getAuthorityType = function(e) {
      if (e.HostNameAndPort.endsWith(N.CIAM_AUTH_URL))
        return Vt.Ciam;
      var t = e.PathSegments;
      if (t.length)
        switch (t[0].toLowerCase()) {
          case N.ADFS:
            return Vt.Adfs;
          case N.DSTS:
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
        throw ne.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
        throw ne.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "deviceCodeEndpoint", {
      get: function() {
        if (this.discoveryComplete())
          return this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));
        throw ne.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
            throw ne.createLogoutNotSupportedError();
          return this.replacePath(this.metadata.end_session_endpoint);
        } else
          throw ne.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
        throw ne.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
        throw ne.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
              return s = u.sent(), a !== Rr.CACHE && s !== Rr.CACHE && (o.resetExpiresAt(), o.updateCanonicalAuthority(this.canonicalAuthority)), l = this.cacheManager.generateAuthorityMetadataCacheKey(o.preferred_cache), this.cacheManager.setAuthorityMetadata(l, o), this.metadata = o, [
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
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(F.AuthorityUpdateEndpointMetadata, this.correlationId), u = this.getEndpointMetadataFromConfig(), u ? (e.updateEndpointMetadata(u, !1), [2, Rr.CONFIG]) : this.isAuthoritySameType(e) && e.endpointsFromNetwork && !e.isExpired() ? [2, Rr.CACHE] : ((n = this.performanceClient) === null || n === void 0 || n.setPreQueueTime(F.AuthorityGetEndpointMetadataFromNetwork, this.correlationId), [4, this.getEndpointMetadataFromNetwork()]);
            case 1:
              return u = h.sent(), u ? !((o = this.authorityOptions.azureRegionConfiguration) === null || o === void 0) && o.azureRegion ? ((a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(F.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId), [4, this.updateMetadataWithRegionalInformation(u)]) : [3, 3] : [3, 4];
            case 2:
              u = h.sent(), h.label = 3;
            case 3:
              return e.updateEndpointMetadata(u, !0), [2, Rr.NETWORK];
            case 4:
              return f = this.getEndpointMetadataFromHardcodedValues(), f && !this.authorityOptions.skipAuthorityMetadataCache ? !((s = this.authorityOptions.azureRegionConfiguration) === null || s === void 0) && s.azureRegion ? ((l = this.performanceClient) === null || l === void 0 || l.setPreQueueTime(F.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId), [4, this.updateMetadataWithRegionalInformation(f)]) : [3, 6] : [3, 7];
            case 5:
              f = h.sent(), h.label = 6;
            case 6:
              return e.updateEndpointMetadata(f, !1), [2, Rr.HARDCODED_VALUES];
            case 7:
              throw ne.createUnableToGetOpenidConfigError(this.defaultOpenIdConfigurationEndpoint);
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
              return n = o.sent(), [2, LI(n.body) ? n.body : null];
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
      return this.canonicalAuthority in xp ? xp[this.canonicalAuthority] : null;
    }, r.prototype.updateMetadataWithRegionalInformation = function(e) {
      var t, n, o, a;
      return _e(this, void 0, void 0, function() {
        var s, l;
        return Se(this, function(u) {
          switch (u.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(F.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId), s = (n = this.authorityOptions.azureRegionConfiguration) === null || n === void 0 ? void 0 : n.azureRegion, s ? s !== N.AZURE_REGION_AUTO_DISCOVER_FLAG ? (this.regionDiscoveryMetadata.region_outcome = zi.CONFIGURED_NO_AUTO_DETECTION, this.regionDiscoveryMetadata.region_used = s, [2, r.replaceWithRegionalInformation(e, s)]) : ((o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(F.RegionDiscoveryDetectRegion, this.correlationId), [4, this.regionDiscovery.detectRegion((a = this.authorityOptions.azureRegionConfiguration) === null || a === void 0 ? void 0 : a.environmentRegion, this.regionDiscoveryMetadata)]) : [3, 2];
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
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(F.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId), this.logger.verbose("Attempting to get cloud discovery metadata in the config"), this.logger.verbosePii("Known Authorities: " + (this.authorityOptions.knownAuthorities || N.NOT_APPLICABLE)), this.logger.verbosePii("Authority Metadata: " + (this.authorityOptions.authorityMetadata || N.NOT_APPLICABLE)), this.logger.verbosePii("Canonical Authority: " + (e.canonical_authority || N.NOT_APPLICABLE)), o = this.getCloudDiscoveryMetadataFromConfig(), o ? (this.logger.verbose("Found cloud discovery metadata in the config."), e.updateCloudDiscoveryMetadata(o, !1), [2, Rr.CONFIG]) : (this.logger.verbose("Did not find cloud discovery metadata in the config... Attempting to get cloud discovery metadata from the cache."), a = e.isExpired(), this.isAuthoritySameType(e) && e.aliasesFromNetwork && !a ? (this.logger.verbose("Found metadata in the cache."), [2, Rr.CACHE]) : (a && this.logger.verbose("The metadata entity is expired."), this.logger.verbose("Did not find cloud discovery metadata in the cache... Attempting to get cloud discovery metadata from the network."), (n = this.performanceClient) === null || n === void 0 || n.setPreQueueTime(F.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId), [4, this.getCloudDiscoveryMetadataFromNetwork()]));
            case 1:
              if (o = l.sent(), o)
                return this.logger.verbose("cloud discovery metadata was successfully returned from getCloudDiscoveryMetadataFromNetwork()"), e.updateCloudDiscoveryMetadata(o, !0), [2, Rr.NETWORK];
              if (this.logger.verbose("Did not find cloud discovery metadata from the network... Attempting to get cloud discovery metadata from hardcoded values."), s = this.getCloudDiscoveryMetadataFromHarcodedValues(), s && !this.options.skipAuthorityMetadataCache)
                return this.logger.verbose("Found cloud discovery metadata from hardcoded values."), e.updateCloudDiscoveryMetadata(s, !1), [2, Rr.HARDCODED_VALUES];
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
              (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(F.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId), t = "" + N.AAD_INSTANCE_DISCOVERY_ENDPT + this.canonicalAuthority + "oauth2/v2.0/authorize", n = {}, o = null, h.label = 1;
            case 1:
              return h.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(t, n)];
            case 2:
              if (a = h.sent(), s = void 0, l = void 0, DI(a.body))
                s = a.body, l = s.metadata, this.logger.verbosePii("tenant_discovery_endpoint is: " + s.tenant_discovery_endpoint);
              else if (UI(a.body)) {
                if (this.logger.warning("A CloudInstanceDiscoveryErrorResponse was returned. The cloud instance discovery network request's status code is: " + a.status), s = a.body, s.error === N.INVALID_INSTANCE)
                  return this.logger.error("The CloudInstanceDiscoveryErrorResponse error is invalid_instance."), [2, null];
                this.logger.warning("The CloudInstanceDiscoveryErrorResponse error is " + s.error), this.logger.warning("The CloudInstanceDiscoveryErrorResponse error description is " + s.error_description), this.logger.warning("Setting the value of the CloudInstanceDiscoveryMetadata (returned from the network) to []"), l = [];
              } else
                return this.logger.error("AAD did not return a CloudInstanceDiscoveryResponse or CloudInstanceDiscoveryErrorResponse"), [2, null];
              return this.logger.verbose("Attempting to find a match between the developer's authority and the CloudInstanceDiscoveryMetadata returned from the network request."), o = r.getCloudDiscoveryMetadataFromNetworkResponse(l, this.hostnameAndPort), [3, 4];
            case 3:
              return u = h.sent(), u instanceof le ? this.logger.error(`There was a network error while attempting to get the cloud discovery instance metadata.
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
      return this.canonicalAuthority in Lp ? Lp[this.canonicalAuthority] : null;
    }, r.prototype.isInKnownAuthorities = function() {
      var e = this, t = this.authorityOptions.knownAuthorities.filter(function(n) {
        return He.getDomainFromUrl(n).toLowerCase() === e.hostnameAndPort;
      });
      return t.length > 0;
    }, r.generateAuthority = function(e, t) {
      var n;
      if (t && t.azureCloudInstance !== Qi.None) {
        var o = t.tenant ? t.tenant : N.DEFAULT_COMMON_TENANT;
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
      throw ne.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
    }, r.prototype.isAlias = function(e) {
      return this.metadata.aliases.indexOf(e) > -1;
    }, r.isPublicCloudAuthority = function(e) {
      return N.KNOWN_PUBLIC_CLOUDS.indexOf(e) >= 0;
    }, r.buildRegionalAuthorityString = function(e, t, n) {
      var o = new He(e);
      o.validateAsUri();
      var a = o.getUrlComponents(), s = t + "." + a.HostNameAndPort;
      this.isPublicCloudAuthority(a.HostNameAndPort) && (s = t + "." + N.REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX);
      var l = He.constructAuthorityUriFromObject($e($e({}, o.getUrlComponents()), { HostNameAndPort: s })).urlString;
      return n ? l + "?" + n : l;
    }, r.replaceWithRegionalInformation = function(e, t) {
      return e.authorization_endpoint = r.buildRegionalAuthorityString(e.authorization_endpoint, t), e.token_endpoint = r.buildRegionalAuthorityString(e.token_endpoint, t, N.REGIONAL_AUTH_NON_MSI_QUERY_STRING), e.end_session_endpoint && (e.end_session_endpoint = r.buildRegionalAuthorityString(e.end_session_endpoint, t)), e;
    }, r.transformCIAMAuthority = function(e) {
      var t = e.endsWith(N.FORWARD_SLASH) ? e : "" + e + N.FORWARD_SLASH, n = new He(e), o = n.getUrlComponents();
      if (o.PathSegments.length === 0 && o.HostNameAndPort.endsWith(N.CIAM_AUTH_URL)) {
        var a = o.HostNameAndPort.split(".")[0];
        t = "" + t + a + N.AAD_TENANT_DOMAIN_SUFFIX;
      }
      return t;
    }, r.reservedTenantDomains = /* @__PURE__ */ new Set([
      "{tenant}",
      "{tenantid}",
      go.COMMON,
      go.CONSUMERS,
      go.ORGANIZATIONS
    ]), r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var ks = (
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
              throw h = p.sent(), ne.createEndpointDiscoveryIncompleteError(h);
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.createInstance = function(e, t, n, o, a, s, l) {
      if (te.isEmpty(e))
        throw et.createUrlEmptyError();
      return new Xi(e, t, n, o, a, s, l);
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Ps = (
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
var Dp = (
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
var HI = {
  sendGetRequestAsync: function() {
    var r = "Network interface - sendGetRequestAsync() has not been implemented for the Network interface.";
    return Promise.reject(le.createUnexpectedError(r));
  },
  sendPostRequestAsync: function() {
    var r = "Network interface - sendPostRequestAsync() has not been implemented for the Network interface.";
    return Promise.reject(le.createUnexpectedError(r));
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
}, Up = (
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
  }(le)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var BI = (
  /** @class */
  function() {
    function r(e) {
      this.typ = e.typ, this.alg = e.alg, this.kid = e.kid;
    }
    return r.getShrHeaderString = function(e) {
      if (!e.kid)
        throw Up.createMissingKidError();
      if (!e.alg)
        throw Up.createMissingAlgError();
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
var KI = (
  /** @class */
  function() {
    function r(e, t) {
      this.cacheOutcome = qn.NO_CACHE_HIT, this.cacheManager = t, this.apiId = e.apiId, this.correlationId = e.correlationId, this.wrapperSKU = e.wrapperSKU || N.EMPTY_STRING, this.wrapperVer = e.wrapperVer || N.EMPTY_STRING, this.telemetryCacheKey = It.CACHE_KEY + Ct.CACHE_KEY_SEPARATOR + e.clientId;
    }
    return r.prototype.generateCurrentRequestHeaderValue = function() {
      var e = "" + this.apiId + It.VALUE_SEPARATOR + this.cacheOutcome, t = [this.wrapperSKU, this.wrapperVer].join(It.VALUE_SEPARATOR), n = this.getRegionDiscoveryFields(), o = [e, n].join(It.VALUE_SEPARATOR);
      return [It.SCHEMA_VERSION, o, t].join(It.CATEGORY_SEPARATOR);
    }, r.prototype.generateLastRequestHeaderValue = function() {
      var e = this.getLastRequests(), t = r.maxErrorsToSend(e), n = e.failedRequests.slice(0, 2 * t).join(It.VALUE_SEPARATOR), o = e.errors.slice(0, t).join(It.VALUE_SEPARATOR), a = e.errors.length, s = t < a ? It.OVERFLOW_TRUE : It.OVERFLOW_FALSE, l = [a, s].join(It.VALUE_SEPARATOR);
      return [It.SCHEMA_VERSION, e.cacheHits, n, o, l].join(It.CATEGORY_SEPARATOR);
    }, r.prototype.cacheFailedRequest = function(e) {
      var t = this.getLastRequests();
      t.errors.length >= It.MAX_CACHED_ERRORS && (t.failedRequests.shift(), t.failedRequests.shift(), t.errors.shift()), t.failedRequests.push(this.apiId, this.correlationId), te.isEmpty(e.subError) ? te.isEmpty(e.errorCode) ? e && e.toString() ? t.errors.push(e.toString()) : t.errors.push(It.UNKNOWN_ERROR) : t.errors.push(e.errorCode) : t.errors.push(e.subError), this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t);
    }, r.prototype.incrementCacheHits = function() {
      var e = this.getLastRequests();
      return e.cacheHits += 1, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e), e.cacheHits;
    }, r.prototype.getLastRequests = function() {
      var e = new Ps(), t = this.cacheManager.getServerTelemetry(this.telemetryCacheKey);
      return t || e;
    }, r.prototype.clearTelemetryCache = function() {
      var e = this.getLastRequests(), t = r.maxErrorsToSend(e), n = e.errors.length;
      if (t === n)
        this.cacheManager.removeItem(this.telemetryCacheKey);
      else {
        var o = new Ps();
        o.failedRequests = e.failedRequests.slice(t * 2), o.errors = e.errors.slice(t), this.cacheManager.setServerTelemetry(this.telemetryCacheKey, o);
      }
    }, r.maxErrorsToSend = function(e) {
      var t, n = 0, o = 0, a = e.errors.length;
      for (t = 0; t < a; t++) {
        var s = e.failedRequests[2 * t] || N.EMPTY_STRING, l = e.failedRequests[2 * t + 1] || N.EMPTY_STRING, u = e.errors[t] || N.EMPTY_STRING;
        if (o += s.toString().length + l.toString().length + u.length + 3, o < It.MAX_LAST_HEADER_BYTES)
          n += 1;
        else
          break;
      }
      return n;
    }, r.prototype.getRegionDiscoveryFields = function() {
      var e = [];
      return e.push(this.regionUsed || N.EMPTY_STRING), e.push(this.regionSource || N.EMPTY_STRING), e.push(this.regionOutcome || N.EMPTY_STRING), e.join(",");
    }, r.prototype.updateRegionDiscoveryMetadata = function(e) {
      this.regionUsed = e.region_used, this.regionSource = e.region_source, this.regionOutcome = e.region_outcome;
    }, r.prototype.setCacheOutcome = function(e) {
      this.cacheOutcome = e;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var am = (
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
      return OI;
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
        status: As.InProgress,
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
      return (a = h.incompleteSubMeasurements) === null || a === void 0 || a.forEach(function(m) {
        n.logger.trace("PerformanceClient: Incomplete submeasurement " + m.name + " found for " + e.name, h.correlationId), p++;
      }), h.incompleteSubMeasurements = void 0, h = $e($e({}, h), { durationMs: Math.round(f), queuedTimeMs: u.totalQueueTime, queuedCount: u.totalQueueCount, queuedManuallyCompletedCount: u.manuallyCompletedCount, status: As.Completed, incompleteSubsCount: p }), this.truncateIntegralFields(h, this.getIntFields()), this.emitEvents([h], e.correlationId), h;
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
var Fp = (
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
), qI = (
  /** @class */
  function(r) {
    or(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.generateId = function() {
      return "callback-id";
    }, e.prototype.startPerformanceMeasuremeant = function() {
      return new Fp();
    }, e.prototype.startPerformanceMeasurement = function() {
      return new Fp();
    }, e.prototype.calculateQueuedTime = function(t, n) {
      return 0;
    }, e.prototype.addQueueMeasurement = function(t, n, o) {
    }, e.prototype.setPreQueueTime = function(t, n) {
    }, e;
  }(am)
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
      return n = te.isEmpty(t) ? n : n + " Details: " + t, new e(W.popupWindowError.code, n);
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
  }(le)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var qr = {
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
}, bn;
(function(r) {
  r.HandshakeRequest = "Handshake", r.HandshakeResponse = "HandshakeResponse", r.GetToken = "GetToken", r.Response = "Response";
})(bn || (bn = {}));
var pt;
(function(r) {
  r.LocalStorage = "localStorage", r.SessionStorage = "sessionStorage", r.MemoryStorage = "memoryStorage";
})(pt || (pt = {}));
var tn;
(function(r) {
  r.GET = "GET", r.POST = "POST";
})(tn || (tn = {}));
var Be;
(function(r) {
  r.AUTHORITY = "authority", r.ACQUIRE_TOKEN_ACCOUNT = "acquireToken.account", r.SESSION_STATE = "session.state", r.REQUEST_STATE = "request.state", r.NONCE_IDTOKEN = "nonce.id_token", r.ORIGIN_URI = "request.origin", r.RENEW_STATUS = "token.renew.status", r.URL_HASH = "urlHash", r.REQUEST_PARAMS = "request.params", r.SCOPES = "scopes", r.INTERACTION_STATUS_KEY = "interaction.status", r.CCS_CREDENTIAL = "ccs.credential", r.CORRELATION_ID = "request.correlationId", r.NATIVE_REQUEST = "request.native", r.REDIRECT_CONTEXT = "request.redirect.context";
})(Be || (Be = {}));
var en;
(function(r) {
  r.ACCOUNT_KEYS = "msal.account.keys", r.TOKEN_KEYS = "msal.token.keys";
})(en || (en = {}));
var Xo;
(function(r) {
  r.WRAPPER_SKU = "wrapper.sku", r.WRAPPER_VER = "wrapper.version";
})(Xo || (Xo = {}));
var Ze;
(function(r) {
  r[r.acquireTokenRedirect = 861] = "acquireTokenRedirect", r[r.acquireTokenPopup = 862] = "acquireTokenPopup", r[r.ssoSilent = 863] = "ssoSilent", r[r.acquireTokenSilent_authCode = 864] = "acquireTokenSilent_authCode", r[r.handleRedirectPromise = 865] = "handleRedirectPromise", r[r.acquireTokenByCode = 866] = "acquireTokenByCode", r[r.acquireTokenSilent_silentFlow = 61] = "acquireTokenSilent_silentFlow", r[r.logout = 961] = "logout", r[r.logoutPopup = 962] = "logoutPopup";
})(Ze || (Ze = {}));
var se;
(function(r) {
  r.Redirect = "redirect", r.Popup = "popup", r.Silent = "silent", r.None = "none";
})(se || (se = {}));
var Hp;
(function(r) {
  r.Startup = "startup", r.Login = "login", r.Logout = "logout", r.AcquireToken = "acquireToken", r.SsoSilent = "ssoSilent", r.HandleRedirect = "handleRedirect", r.None = "none";
})(Hp || (Hp = {}));
var Bp = {
  scopes: sa
}, oi = "jwk", Kp;
(function(r) {
  r.React = "@azure/msal-react", r.Angular = "@azure/msal-angular";
})(Kp || (Kp = {}));
var uu = "msal.db", $I = 1, GI = uu + ".keys", rr;
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
}, Ns = (
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
  }(le)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var qp = (
  /** @class */
  function() {
    function r(e) {
      this.validateWindowStorage(e), this.windowStorage = window[e];
    }
    return r.prototype.validateWindowStorage = function(e) {
      if (e !== pt.LocalStorage && e !== pt.SessionStorage)
        throw Ns.createStorageNotSupportedError(e);
      var t = !!window[e];
      if (!t)
        throw Ns.createStorageNotSupportedError(e);
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
var sm = (
  /** @class */
  function() {
    function r() {
    }
    return r.extractBrowserRequestState = function(e, t) {
      if (te.isEmpty(t))
        return null;
      try {
        var n = _n.parseRequestState(e, t);
        return n.libraryState.meta;
      } catch (o) {
        throw ne.createInvalidStateError(t, o);
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
            return new qp(t);
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
            return new qp(t || pt.SessionStorage);
          } catch (o) {
            return this.logger.verbose(o), this.internalStorage;
          }
        case pt.MemoryStorage:
        default:
          return this.internalStorage;
      }
    }, e.prototype.migrateCacheEntries = function() {
      var t = this, n = N.CACHE_PREFIX + "." + yt.ID_TOKEN, o = N.CACHE_PREFIX + "." + yt.CLIENT_INFO, a = N.CACHE_PREFIX + "." + yt.ERROR, s = N.CACHE_PREFIX + "." + yt.ERROR_DESC, l = this.browserStorage.getItem(n), u = this.browserStorage.getItem(o), f = this.browserStorage.getItem(a), h = this.browserStorage.getItem(s), p = [l, u, f, h], m = [yt.ID_TOKEN, yt.CLIENT_INFO, yt.ERROR, yt.ERROR_DESC];
      m.forEach(function(v, C) {
        return t.migrateCacheEntry(v, p[C]);
      });
    }, e.prototype.migrateCacheEntry = function(t, n) {
      n && this.setTemporaryCache(t, n, !0);
    }, e.prototype.createKeyMaps = function() {
      var t = this;
      this.logger.trace("BrowserCacheManager - createKeyMaps called.");
      var n = this.getItem(en.ACCOUNT_KEYS), o = this.getItem(en.TOKEN_KEYS + "." + this.clientId);
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
                  if (ho.isIdTokenEntity(u)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - idToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - idToken with key: " + s + " found, saving key to token key map");
                    var f = er.toObject(new ho(), u), h = t.updateCredentialCacheKey(s, f);
                    t.addTokenKey(h, he.ID_TOKEN);
                    return;
                  } else
                    t.logger.trace("BrowserCacheManager:createKeyMaps - key found matching idToken schema with value containing idToken credentialType field but value failed IdTokenEntity validation, skipping."), t.logger.tracePii("BrowserCacheManager:createKeyMaps - failed idToken validation on key: " + s);
                  break;
                case he.ACCESS_TOKEN:
                case he.ACCESS_TOKEN_WITH_AUTH_SCHEME:
                  if (po.isAccessTokenEntity(u)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - accessToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - accessToken with key: " + s + " found, saving key to token key map");
                    var p = er.toObject(new po(), u), h = t.updateCredentialCacheKey(s, p);
                    t.addTokenKey(h, he.ACCESS_TOKEN);
                    return;
                  } else
                    t.logger.trace("BrowserCacheManager:createKeyMaps - key found matching accessToken schema with value containing accessToken credentialType field but value failed AccessTokenEntity validation, skipping."), t.logger.tracePii("BrowserCacheManager:createKeyMaps - failed accessToken validation on key: " + s);
                  break;
                case he.REFRESH_TOKEN:
                  if (Qo.isRefreshTokenEntity(u)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - refreshToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - refreshToken with key: " + s + " found, saving key to token key map");
                    var m = er.toObject(new Qo(), u), h = t.updateCredentialCacheKey(s, m);
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
      var t = this.getItem(en.ACCOUNT_KEYS);
      return t ? JSON.parse(t) : (this.logger.verbose("BrowserCacheManager.getAccountKeys - No account keys found"), []);
    }, e.prototype.addAccountKeyToMap = function(t) {
      this.logger.trace("BrowserCacheManager.addAccountKeyToMap called"), this.logger.tracePii("BrowserCacheManager.addAccountKeyToMap called with key: " + t);
      var n = this.getAccountKeys();
      n.indexOf(t) === -1 ? (n.push(t), this.setItem(en.ACCOUNT_KEYS, JSON.stringify(n)), this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key added")) : this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key already exists in map");
    }, e.prototype.removeAccountKeyFromMap = function(t) {
      this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap called"), this.logger.tracePii("BrowserCacheManager.removeAccountKeyFromMap called with key: " + t);
      var n = this.getAccountKeys(), o = n.indexOf(t);
      o > -1 ? (n.splice(o, 1), this.setItem(en.ACCOUNT_KEYS, JSON.stringify(n)), this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap account key removed")) : this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap key not found in existing map");
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
      var t = this.getItem(en.TOKEN_KEYS + "." + this.clientId);
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
          this.logger.error("BrowserCacheManager:addTokenKey - CredentialType provided invalid. CredentialType: " + n), ne.createUnexpectedCredentialTypeError();
      }
      this.setItem(en.TOKEN_KEYS + "." + this.clientId, JSON.stringify(o));
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
          this.logger.error("BrowserCacheManager:removeTokenKey - CredentialType provided invalid. CredentialType: " + n), ne.createUnexpectedCredentialTypeError();
      }
      this.setItem(en.TOKEN_KEYS + "." + this.clientId, JSON.stringify(o));
    }, e.prototype.getIdTokenCredential = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), this.removeTokenKey(t, he.ID_TOKEN), null;
      var o = this.validateAndParseJson(n);
      return !o || !ho.isIdTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), this.removeTokenKey(t, he.ID_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getIdTokenCredential: cache hit"), er.toObject(new ho(), o));
    }, e.prototype.setIdTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setIdTokenCredential called");
      var n = t.generateCredentialKey();
      this.setItem(n, JSON.stringify(t)), this.addTokenKey(n, he.ID_TOKEN);
    }, e.prototype.getAccessTokenCredential = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), this.removeTokenKey(t, he.ACCESS_TOKEN), null;
      var o = this.validateAndParseJson(n);
      return !o || !po.isAccessTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), this.removeTokenKey(t, he.ACCESS_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: cache hit"), er.toObject(new po(), o));
    }, e.prototype.setAccessTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setAccessTokenCredential called");
      var n = t.generateCredentialKey();
      this.setItem(n, JSON.stringify(t)), this.addTokenKey(n, he.ACCESS_TOKEN);
    }, e.prototype.getRefreshTokenCredential = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), this.removeTokenKey(t, he.REFRESH_TOKEN), null;
      var o = this.validateAndParseJson(n);
      return !o || !Qo.isRefreshTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), this.removeTokenKey(t, he.REFRESH_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: cache hit"), er.toObject(new Qo(), o));
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
      return !o || !Ps.isServerTelemetryEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getServerTelemetry: cache hit"), er.toObject(new Ps(), o));
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
      this.internalStorage.setItem(Xo.WRAPPER_SKU, t), this.internalStorage.setItem(Xo.WRAPPER_VER, n);
    }, e.prototype.getWrapperMetadata = function() {
      var t = this.internalStorage.getItem(Xo.WRAPPER_SKU) || N.EMPTY_STRING, n = this.internalStorage.getItem(Xo.WRAPPER_VER) || N.EMPTY_STRING;
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
        throw ne.createMultipleMatchingAccountsInCacheError();
      return null;
    }, e.prototype.getThrottlingCache = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return !o || !Dp.isThrottlingEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getThrottlingCache: cache hit"), er.toObject(new Dp(), o));
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
      return Ou(this.browserStorage.getKeys(), this.temporaryCacheStorage.getKeys());
    }, e.prototype.clear = function() {
      return G(this, void 0, void 0, function() {
        var t = this;
        return z(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this.removeAllAccounts()];
            case 1:
              return n.sent(), this.removeAppMetadata(), this.getKeys().forEach(function(o) {
                (t.browserStorage.containsKey(o) || t.temporaryCacheStorage.containsKey(o)) && (o.indexOf(N.CACHE_PREFIX) !== -1 || o.indexOf(t.clientId) !== -1) && t.removeItem(o);
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
      return N.EMPTY_STRING;
    }, e.prototype.clearMsalCookies = function() {
      var t = this, n = N.CACHE_PREFIX + "." + this.clientId, o = document.cookie.split(";");
      o.forEach(function(a) {
        for (; a.charAt(0) === " "; )
          a = a.substring(1);
        if (a.indexOf(n) === 0) {
          var s = a.split("=")[0];
          t.clearItemCookie(s);
        }
      });
    }, e.prototype.clearItemCookie = function(t) {
      this.setItemCookie(t, N.EMPTY_STRING, -1);
    }, e.prototype.getCookieExpirationTime = function(t) {
      var n = /* @__PURE__ */ new Date(), o = new Date(n.getTime() + t * this.COOKIE_LIFE_MULTIPLIER);
      return o.toUTCString();
    }, e.prototype.getCache = function() {
      return this.browserStorage;
    }, e.prototype.setCache = function() {
    }, e.prototype.generateCacheKey = function(t) {
      var n = this.validateAndParseJson(t);
      return n ? JSON.stringify(t) : te.startsWith(t, N.CACHE_PREFIX) || te.startsWith(t, yt.ADAL_ID_TOKEN) ? t : N.CACHE_PREFIX + "." + this.clientId + "." + t;
    }, e.prototype.generateAuthorityKey = function(t) {
      var n = _n.parseRequestState(this.cryptoImpl, t).libraryState.id;
      return this.generateCacheKey(Be.AUTHORITY + "." + n);
    }, e.prototype.generateNonceKey = function(t) {
      var n = _n.parseRequestState(this.cryptoImpl, t).libraryState.id;
      return this.generateCacheKey(Be.NONCE_IDTOKEN + "." + n);
    }, e.prototype.generateStateKey = function(t) {
      var n = _n.parseRequestState(this.cryptoImpl, t).libraryState.id;
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
          type: pr.HOME_ACCOUNT_ID
        };
        this.setTemporaryCache(Be.CCS_CREDENTIAL, JSON.stringify(h), !0);
      } else if (!te.isEmpty(a)) {
        var h = {
          credential: a,
          type: pr.UPN
        };
        this.setTemporaryCache(Be.CCS_CREDENTIAL, JSON.stringify(h), !0);
      }
    }, e.prototype.resetRequestCache = function(t) {
      var n = this;
      this.logger.trace("BrowserCacheManager.resetRequestCache called"), te.isEmpty(t) || this.getKeys().forEach(function(o) {
        o.indexOf(t) !== -1 && n.removeItem(o);
      }), t && (this.removeItem(this.generateStateKey(t)), this.removeItem(this.generateNonceKey(t)), this.removeItem(this.generateAuthorityKey(t))), this.removeItem(this.generateCacheKey(Be.REQUEST_PARAMS)), this.removeItem(this.generateCacheKey(Be.ORIGIN_URI)), this.removeItem(this.generateCacheKey(Be.URL_HASH)), this.removeItem(this.generateCacheKey(Be.CORRELATION_ID)), this.removeItem(this.generateCacheKey(Be.CCS_CREDENTIAL)), this.removeItem(this.generateCacheKey(Be.NATIVE_REQUEST)), this.setInteractionInProgress(!1);
    }, e.prototype.cleanRequestByState = function(t) {
      if (this.logger.trace("BrowserCacheManager.cleanRequestByState called"), t) {
        var n = this.generateStateKey(t), o = this.temporaryCacheStorage.getItem(n);
        this.logger.infoPii("BrowserCacheManager.cleanRequestByState: Removing temporary cache items for state: " + o), this.resetRequestCache(o || N.EMPTY_STRING);
      }
      this.clearMsalCookies();
    }, e.prototype.cleanRequestByInteractionType = function(t) {
      var n = this;
      this.logger.trace("BrowserCacheManager.cleanRequestByInteractionType called"), this.getKeys().forEach(function(o) {
        if (o.indexOf(Be.REQUEST_STATE) !== -1) {
          var a = n.temporaryCacheStorage.getItem(o);
          if (a) {
            var s = sm.extractBrowserRequestState(n.cryptoImpl, a);
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
      if (this.removeItem(this.generateCacheKey(Be.REQUEST_PARAMS)), te.isEmpty(a.authority)) {
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
      var t = N.CACHE_PREFIX + "." + Be.INTERACTION_STATUS_KEY;
      return this.getTemporaryCache(t, !1);
    }, e.prototype.setInteractionInProgress = function(t) {
      var n = N.CACHE_PREFIX + "." + Be.INTERACTION_STATUS_KEY;
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
        var a = new an(o, this.cryptoImpl);
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
), zI = function(r, e) {
  var t = {
    cacheLocation: pt.MemoryStorage,
    temporaryCacheLocation: pt.MemoryStorage,
    storeAuthStateInCookie: !1,
    secureCookies: !1,
    cacheMigrationEnabled: !1,
    claimsBasedCachingEnabled: !0
  };
  return new fu(r, t, Ss, e);
};
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Ll = "@azure/msal-browser", ji = "2.38.3";
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var VI = (
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
                method: tn.GET,
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
              n = t && t.body || N.EMPTY_STRING, l.label = 1;
            case 1:
              return l.trys.push([1, 3, , 4]), [4, fetch(e, {
                method: tn.POST,
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
var WI = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.sendGetRequestAsync = function(e, t) {
      return G(this, void 0, void 0, function() {
        return z(this, function(n) {
          return [2, this.sendRequestAsync(e, tn.GET, t)];
        });
      });
    }, r.prototype.sendPostRequestAsync = function(e, t) {
      return G(this, void 0, void 0, function() {
        return z(this, function(n) {
          return [2, this.sendRequestAsync(e, tn.POST, t)];
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
          (l.status < 200 || l.status >= 300) && (t === tn.POST ? s(X.createPostRequestFailedError("Failed with status " + l.status, e)) : s(X.createGetRequestFailedError("Failed with status " + l.status, e)));
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
          window.navigator.onLine ? t === tn.POST ? s(X.createPostRequestFailedError("Failed with status " + l.status, e)) : s(X.createGetRequestFailedError("Failed with status " + l.status, e)) : s(X.createNoNetworkConnectivityError());
        }, t === tn.POST && n && n.body)
          l.send(n.body);
        else if (t === tn.GET)
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
      e.location.hash = N.EMPTY_STRING, typeof e.history.replaceState == "function" && e.history.replaceState(null, N.EMPTY_STRING, "" + e.location.origin + e.location.pathname + e.location.search);
    }, r.replaceHash = function(e) {
      var t = e.split("#");
      t.shift(), window.location.hash = t.length > 0 ? t.join("#") : N.EMPTY_STRING;
    }, r.isInIframe = function() {
      return window.parent !== window;
    }, r.isInPopup = function() {
      return typeof window < "u" && !!window.opener && window.opener !== window && typeof window.name == "string" && window.name.indexOf(qr.POPUP_NAME_PREFIX + ".") === 0;
    }, r.getCurrentUri = function() {
      return window.location.href.split("?")[0].split("#")[0];
    }, r.getHomepage = function() {
      var e = new He(window.location.href), t = e.getUrlComponents();
      return t.Protocol + "//" + t.HostNameAndPort + "/";
    }, r.getBrowserNetworkClient = function() {
      return window.fetch && window.Headers ? new VI() : new WI();
    }, r.blockReloadInHiddenIframes = function() {
      var e = He.hashContainsKnownProperties(window.location.hash);
      if (e && r.isInIframe())
        throw X.createBlockReloadInHiddenIframeError();
    }, r.blockRedirectInIframe = function(e, t) {
      var n = r.isInIframe();
      if (e === se.Redirect && n && !t)
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
var cm = (
  /** @class */
  function() {
    function r(e, t, n, o, a, s, l, u, f) {
      this.config = e, this.browserStorage = t, this.browserCrypto = n, this.networkClient = this.config.system.networkClient, this.eventHandler = a, this.navigationClient = s, this.nativeMessageHandler = u, this.correlationId = f || this.browserCrypto.createNewGuid(), this.logger = o.clone(qr.MSAL_SKU, ji, this.correlationId), this.performanceClient = l;
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
              if (o = Ou(e && e.scopes || []), a = ce(ce({}, e), {
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
              return this.config.cache.claimsBasedCachingEnabled && e.claims && !te.isEmptyObj(e.claims) ? (s = a, [4, this.browserCrypto.hashString(e.claims)]) : [3, 4];
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
      return new KI(n, this.browserStorage);
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
              }, e ? (this.logger.verbose("Creating discovered authority with request authority"), [4, ks.createDiscoveredInstance(e, this.config.system.networkClient, this.browserStorage, t, this.logger)]) : [3, 2];
            case 1:
              return [2, n.sent()];
            case 2:
              return this.logger.verbose("Creating discovered authority with configured authority"), [4, ks.createDiscoveredInstance(this.config.auth.authority, this.config.system.networkClient, this.browserStorage, t, this.logger)];
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
              return n = a.sent(), o = ce(ce({}, t), { redirectUri: t.redirectUri, code: N.EMPTY_STRING, codeVerifier: n.verifier }), t.codeChallenge = n.challenge, t.codeChallengeMethod = N.S256_CODE_CHALLENGE_METHOD, [2, o];
          }
        });
      });
    }, e.prototype.initializeLogoutRequest = function(t) {
      this.logger.verbose("initializeLogoutRequest called", t == null ? void 0 : t.correlationId);
      var n = ce({ correlationId: this.correlationId || this.browserCrypto.createNewGuid() }, t);
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
              return a = s.sent(), [2, new nm(a, this.performanceClient)];
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
                  sku: qr.MSAL_SKU,
                  version: ji,
                  cpu: N.EMPTY_STRING,
                  os: N.EMPTY_STRING
                },
                telemetry: this.config.telemetry
              }];
          }
        });
      });
    }, e.prototype.validateAndExtractStateFromHash = function(t, n, o) {
      if (this.logger.verbose("validateAndExtractStateFromHash called", o), !t.state)
        throw X.createHashDoesNotContainStateError();
      var a = sm.extractBrowserRequestState(this.browserCrypto, t.state);
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
              }, l = t || this.config.auth.authority, u = Xi.generateAuthority(l, n || this.config.auth.azureCloudOptions), this.logger.verbose("Creating discovered authority with configured authority", this.correlationId), this.performanceClient.setPreQueueTime(F.AuthorityFactoryCreateDiscoveredInstance, this.correlationId), [4, ks.createDiscoveredInstance(u, this.config.system.networkClient, this.browserStorage, s, this.logger, this.performanceClient, this.correlationId).then(function(h) {
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
              }, s = _n.setRequestState(this.browserCrypto, t && t.state || N.EMPTY_STRING, a), this.performanceClient.setPreQueueTime(F.InitializeBaseRequest, this.correlationId), u = [{}], [4, this.initializeBaseRequest(t)];
            case 1:
              return l = ce.apply(void 0, [ce.apply(void 0, u.concat([p.sent()])), { redirectUri: o, state: s, nonce: t.nonce || this.browserCrypto.createNewGuid(), responseMode: Es.FRAGMENT }]), f = t.account || this.browserStorage.getActiveAccount(), f && (this.logger.verbose("Setting validated request account", this.correlationId), this.logger.verbosePii("Setting validated request account: " + f.homeAccountId, this.correlationId), l.account = f), te.isEmpty(l.loginHint) && !f && (h = this.browserStorage.getLegacyLoginHint(), h && (l.loginHint = h)), [2, l];
          }
        });
      });
    }, e;
  }(cm)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Uu = (
  /** @class */
  function() {
    function r(e, t, n, o, a) {
      this.authModule = e, this.browserStorage = t, this.authCodeRequest = n, this.logger = o, this.performanceClient = a;
    }
    return r.prototype.handleCodeResponseFromHash = function(e, t, n, o) {
      return G(this, void 0, void 0, function() {
        var a, s, l;
        return z(this, function(u) {
          if (this.performanceClient.addQueueMeasurement(F.HandleCodeResponseFromHash, this.authCodeRequest.correlationId), this.logger.verbose("InteractionHandler.handleCodeResponse called"), te.isEmpty(e))
            throw X.createEmptyHashError(e);
          if (a = this.browserStorage.generateStateKey(t), s = this.browserStorage.getTemporaryCache(a), !s)
            throw ne.createStateNotFoundError("Cached State");
          try {
            l = this.authModule.handleFragmentResponse(e, s);
          } catch (f) {
            throw f instanceof Co && f.subError === W.userCancelledError.code ? X.createUserCancelledError() : f;
          }
          return this.performanceClient.setPreQueueTime(F.HandleCodeResponseFromServer, this.authCodeRequest.correlationId), [2, this.handleCodeResponseFromServer(l, t, n, o)];
        });
      });
    }, r.prototype.handleCodeResponseFromServer = function(e, t, n, o, a) {
      return a === void 0 && (a = !0), G(this, void 0, void 0, function() {
        var s, l, u, f, h, p;
        return z(this, function(m) {
          switch (m.label) {
            case 0:
              if (this.performanceClient.addQueueMeasurement(F.HandleCodeResponseFromServer, this.authCodeRequest.correlationId), this.logger.trace("InteractionHandler.handleCodeResponseFromServer called"), s = this.browserStorage.generateStateKey(t), l = this.browserStorage.getTemporaryCache(s), !l)
                throw ne.createStateNotFoundError("Cached State");
              return u = this.browserStorage.generateNonceKey(l), f = this.browserStorage.getTemporaryCache(u), this.authCodeRequest.code = e.code, e.cloud_instance_host_name ? (this.performanceClient.setPreQueueTime(F.UpdateTokenEndpointAuthority, this.authCodeRequest.correlationId), [4, this.updateTokenEndpointAuthority(e.cloud_instance_host_name, n, o)]) : [3, 2];
            case 1:
              m.sent(), m.label = 2;
            case 2:
              return a && (e.nonce = f || void 0), e.state = l, e.client_info ? this.authCodeRequest.clientInfo = e.client_info : (h = this.checkCcsCredentials(), h && (this.authCodeRequest.ccsCredential = h)), this.performanceClient.setPreQueueTime(F.AuthClientAcquireToken, this.authCodeRequest.correlationId), [4, this.authModule.acquireToken(this.authCodeRequest, e)];
            case 3:
              return p = m.sent(), this.browserStorage.cleanRequestByState(t), [2, p];
          }
        });
      });
    }, r.prototype.updateTokenEndpointAuthority = function(e, t, n) {
      return G(this, void 0, void 0, function() {
        var o, a;
        return z(this, function(s) {
          switch (s.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(F.UpdateTokenEndpointAuthority, this.authCodeRequest.correlationId), o = "https://" + e + "/" + t.tenant + "/", [4, ks.createDiscoveredInstance(o, n, this.browserStorage, t.options, this.logger, this.performanceClient, this.authCodeRequest.correlationId)];
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
var $p = (
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
              return this.logger.verbose("RedirectHandler.initiateAuthRequest called"), te.isEmpty(t) ? [3, 7] : (n.redirectStartPage && (this.logger.verbose("RedirectHandler.initiateAuthRequest: redirectStartPage set, caching start page"), this.browserStorage.setTemporaryCache(Be.ORIGIN_URI, n.redirectStartPage, !0)), this.browserStorage.setTemporaryCache(Be.CORRELATION_ID, this.authCodeRequest.correlationId, !0), this.browserStorage.cacheCodeRequest(this.authCodeRequest, this.browserCrypto), this.logger.infoPii("RedirectHandler.initiateAuthRequest: Navigate to: " + t), o = {
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
        var s, l, u, f, h, p, m;
        return z(this, function(v) {
          switch (v.label) {
            case 0:
              if (this.logger.verbose("RedirectHandler.handleCodeResponse called"), te.isEmpty(t))
                throw X.createEmptyHashError(t);
              if (this.browserStorage.setInteractionInProgress(!1), s = this.browserStorage.generateStateKey(n), l = this.browserStorage.getTemporaryCache(s), !l)
                throw ne.createStateNotFoundError("Cached State");
              try {
                u = this.authModule.handleFragmentResponse(t, l);
              } catch (C) {
                throw C instanceof Co && C.subError === W.userCancelledError.code ? X.createUserCancelledError() : C;
              }
              return f = this.browserStorage.generateNonceKey(l), h = this.browserStorage.getTemporaryCache(f), this.authCodeRequest.code = u.code, u.cloud_instance_host_name ? [4, this.updateTokenEndpointAuthority(u.cloud_instance_host_name, o, a)] : [3, 2];
            case 1:
              v.sent(), v.label = 2;
            case 2:
              return u.nonce = h || void 0, u.state = l, u.client_info ? this.authCodeRequest.clientInfo = u.client_info : (p = this.checkCcsCredentials(), p && (this.authCodeRequest.ccsCredential = p)), [4, this.authModule.acquireToken(this.authCodeRequest, u)];
            case 3:
              return m = v.sent(), this.browserStorage.cleanRequestByState(n), [2, m];
          }
        });
      });
    }, e;
  }(Uu)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Ee;
(function(r) {
  r.INITIALIZE_START = "msal:initializeStart", r.INITIALIZE_END = "msal:initializeEnd", r.ACCOUNT_ADDED = "msal:accountAdded", r.ACCOUNT_REMOVED = "msal:accountRemoved", r.LOGIN_START = "msal:loginStart", r.LOGIN_SUCCESS = "msal:loginSuccess", r.LOGIN_FAILURE = "msal:loginFailure", r.ACQUIRE_TOKEN_START = "msal:acquireTokenStart", r.ACQUIRE_TOKEN_SUCCESS = "msal:acquireTokenSuccess", r.ACQUIRE_TOKEN_FAILURE = "msal:acquireTokenFailure", r.ACQUIRE_TOKEN_NETWORK_START = "msal:acquireTokenFromNetworkStart", r.SSO_SILENT_START = "msal:ssoSilentStart", r.SSO_SILENT_SUCCESS = "msal:ssoSilentSuccess", r.SSO_SILENT_FAILURE = "msal:ssoSilentFailure", r.ACQUIRE_TOKEN_BY_CODE_START = "msal:acquireTokenByCodeStart", r.ACQUIRE_TOKEN_BY_CODE_SUCCESS = "msal:acquireTokenByCodeSuccess", r.ACQUIRE_TOKEN_BY_CODE_FAILURE = "msal:acquireTokenByCodeFailure", r.HANDLE_REDIRECT_START = "msal:handleRedirectStart", r.HANDLE_REDIRECT_END = "msal:handleRedirectEnd", r.POPUP_OPENED = "msal:popupOpened", r.LOGOUT_START = "msal:logoutStart", r.LOGOUT_SUCCESS = "msal:logoutSuccess", r.LOGOUT_FAILURE = "msal:logoutFailure", r.LOGOUT_END = "msal:logoutEnd", r.RESTORE_FROM_BFCACHE = "msal:restoreFromBFCache";
})(Ee || (Ee = {}));
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Kn;
(function(r) {
  r.USER_INTERACTION_REQUIRED = "USER_INTERACTION_REQUIRED", r.USER_CANCEL = "USER_CANCEL", r.NO_NETWORK = "NO_NETWORK", r.TRANSIENT_ERROR = "TRANSIENT_ERROR", r.PERSISTENT_ERROR = "PERSISTENT_ERROR", r.DISABLED = "DISABLED", r.ACCOUNT_UNAVAILABLE = "ACCOUNT_UNAVAILABLE";
})(Kn || (Kn = {}));
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
}, nn = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t, n, o) {
      var a = r.call(this, t, n) || this;
      return Object.setPrototypeOf(a, e.prototype), a.name = "NativeAuthError", a.ext = o, a;
    }
    return e.prototype.isFatal = function() {
      if (this.ext && this.ext.status && (this.ext.status === Kn.PERSISTENT_ERROR || this.ext.status === Kn.DISABLED))
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
          case Kn.ACCOUNT_UNAVAILABLE:
            return Gr.createNativeAccountUnavailableError();
          case Kn.USER_INTERACTION_REQUIRED:
            return new Gr(t, n);
          case Kn.USER_CANCEL:
            return X.createUserCancelledError();
          case Kn.NO_NETWORK:
            return X.createNoNetworkConnectivityError();
        }
      return new e(t, n, o);
    }, e.createUserSwitchError = function() {
      return new e(Li.userSwitch.code, Li.userSwitch.desc);
    }, e.createTokensNotFoundInCacheError = function() {
      return new e(Li.tokensNotFoundInCache.code, Li.tokensNotFoundInCache.desc);
    }, e;
  }(le)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var lm = (
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
                errorCode: l instanceof le && l.errorCode || void 0,
                subErrorCode: l instanceof le && l.subError || void 0,
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
              return a = s.sent(), [2, new xI(a, this.performanceClient)];
          }
        });
      });
    }, e.prototype.initializeSilentRequest = function(t, n) {
      return G(this, void 0, void 0, function() {
        var o;
        return z(this, function(a) {
          switch (a.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(F.InitializeSilentRequest, this.correlationId), this.performanceClient.setPreQueueTime(F.InitializeBaseRequest, this.correlationId), o = [ce({}, t)], [4, this.initializeBaseRequest(t, n)];
            case 1:
              return [2, ce.apply(void 0, [ce.apply(void 0, o.concat([a.sent()])), { account: n, forceRefresh: t.forceRefresh || !1 }])];
          }
        });
      });
    }, e;
  }(ui)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var ti = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t, n, o, a, s, l, u, f, h, p, m, v) {
      var C = r.call(this, t, n, o, a, s, l, f, h, v) || this;
      return C.apiId = u, C.accountId = p, C.nativeMessageHandler = h, C.nativeStorageManager = m, C.silentCacheClient = new lm(t, C.nativeStorageManager, o, a, s, l, f, h, v), C;
    }
    return e.prototype.acquireToken = function(t) {
      return G(this, void 0, void 0, function() {
        var n, o, a, s, l, u, f;
        return z(this, function(h) {
          switch (h.label) {
            case 0:
              return this.logger.trace("NativeInteractionClient - acquireToken called."), n = this.performanceClient.startMeasurement(F.NativeInteractionClientAcquireToken, t.correlationId), o = kr.nowSeconds(), [4, this.initializeNativeRequest(t)];
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
                method: bn.GetToken,
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
                throw this.logger.warning("NativeInteractionClient:acquireTokensFromCache - No nativeAccountId provided"), ne.createNoAccountFoundError();
              if (o = this.browserStorage.getAccountInfoFilteredBy({ nativeAccountId: t }), !o)
                throw ne.createNoAccountFoundError();
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
                method: bn.GetToken,
                request: n
              }, f.label = 2;
            case 2:
              return f.trys.push([2, 4, , 5]), [4, this.nativeMessageHandler.sendMessage(o)];
            case 3:
              return a = f.sent(), this.validateNativeResponse(a), [3, 5];
            case 4:
              if (s = f.sent(), s instanceof nn && s.isFatal())
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
              n = t.prompt, o = kp(t, ["prompt"]), n && this.logger.verbose("NativeInteractionClient - handleRedirectPromise called and prompt was included in the original request, removing prompt from cached request to prevent second interaction with native broker window."), this.browserStorage.removeItem(this.browserStorage.generateCacheKey(Be.NATIVE_REQUEST)), a = {
                method: bn.GetToken,
                request: o
              }, s = kr.nowSeconds(), h.label = 1;
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
                throw nn.createUserSwitchError();
              return [4, this.getDiscoveredAuthority(n.authority)];
            case 1:
              return a = p.sent(), s = a.getPreferredCache(), l = this.createIdTokenObj(t), u = this.createHomeAccountIdentifier(t, l), f = this.createAccountEntity(t, u, l, s), [4, this.generateAuthenticationResult(t, n, l, f, a.canonicalAuthority, o)];
            case 2:
              return h = p.sent(), this.cacheAccount(f), this.cacheNativeTokens(t, n, u, f, l, h.accessToken, h.tenantId, o), [2, h];
          }
        });
      });
    }, e.prototype.createIdTokenObj = function(t) {
      return new an(t.id_token || N.EMPTY_STRING, this.browserCrypto);
    }, e.prototype.createHomeAccountIdentifier = function(t, n) {
      var o = Rt.generateHomeAccountId(t.client_info || N.EMPTY_STRING, Vt.Default, this.logger, this.browserCrypto, n);
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
              if (o = new ni(this.browserCrypto), a = {
                resourceRequestMethod: n.resourceRequestMethod,
                resourceRequestUri: n.resourceRequestUri,
                shrClaims: n.shrClaims,
                shrNonce: n.shrNonce
              }, !n.keyId)
                throw ne.createKeyIdMissingError();
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
        var u, f, h, p, m, v, C, E;
        return z(this, function(_) {
          switch (_.label) {
            case 0:
              return u = this.addTelemetryFromNativeResponse(t), f = t.scope ? Dt.fromString(t.scope) : Dt.fromString(n.scope), h = t.account.properties || {}, p = h.UID || o.claims.oid || o.claims.sub || N.EMPTY_STRING, m = h.TenantId || o.claims.tid || N.EMPTY_STRING, [4, this.generatePopAccessToken(t, n)];
            case 1:
              return v = _.sent(), C = n.tokenType === Ve.POP ? Ve.POP : Ve.BEARER, E = {
                authority: s,
                uniqueId: p,
                tenantId: m,
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
      var h = ho.createIdTokenEntity(o, n.authority, t.id_token || N.EMPTY_STRING, n.clientId, s.claims.tid || N.EMPTY_STRING), p = n.tokenType === Ve.POP ? N.SHR_NONCE_VALIDITY : (typeof t.expires_in == "string" ? parseInt(t.expires_in, 10) : t.expires_in) || 0, m = f + p, v = this.generateScopes(t, n), C = po.createAccessTokenEntity(o, n.authority, l, n.clientId, s ? s.claims.tid || N.EMPTY_STRING : u, v.printScopes(), m, 0, this.browserCrypto), E = new Wi(a, h, C);
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
      throw nn.createUnexpectedError("Response missing expected properties.");
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
        var n, o, a, s, l, u, f, h, p, m, v = this;
        return z(this, function(C) {
          switch (C.label) {
            case 0:
              return this.logger.trace("NativeInteractionClient - initializeNativeRequest called"), n = t.authority || this.config.auth.authority, t.account ? [4, this.validateRequestAuthority(n, t.account)] : [3, 2];
            case 1:
              C.sent(), C.label = 2;
            case 2:
              return o = new He(n), o.validateAsUri(), a = t.scopes, s = kp(t, ["scopes"]), l = new Dt(a || []), l.appendScopes(sa), u = function() {
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
              }, f = ce(ce({}, s), {
                accountId: this.accountId,
                clientId: this.config.auth.clientId,
                authority: o.urlString,
                scope: l.printScopes(),
                redirectUri: this.getRedirectUri(t.redirectUri),
                prompt: u(),
                correlationId: this.correlationId,
                tokenType: t.authenticationScheme,
                windowTitleSubstring: document.title,
                extraParameters: ce(ce(ce({}, t.extraQueryParameters), t.tokenQueryParameters), { telemetry: Hi.MATS_TELEMETRY }),
                extendedExpiryToken: !1
                // Make this configurable?
              }), t.authenticationScheme !== Ve.POP ? [3, 4] : (h = {
                resourceRequestUri: t.resourceRequestUri,
                resourceRequestMethod: t.resourceRequestMethod,
                shrClaims: t.shrClaims,
                shrNonce: t.shrNonce
              }, p = new ni(this.browserCrypto), [4, p.generateCnf(h)]);
            case 3:
              m = C.sent(), f.reqCnf = m.reqCnfString, f.keyId = m.kid, C.label = 4;
            case 4:
              return [2, f];
          }
        });
      });
    }, e;
  }(cm)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var mo = (
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
              method: bn.HandshakeRequest
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
        if (!(!t.channel || t.channel !== Hi.CHANNEL_ID) && !(t.extensionId && t.extensionId !== this.extensionId) && t.body.method === bn.HandshakeRequest) {
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
        if (a === bn.Response) {
          if (!n)
            return;
          var s = t.body.response;
          if (this.logger.trace("NativeMessageHandler - Received response from browser extension"), this.logger.tracePii("NativeMessageHandler - Received response from browser extension: " + JSON.stringify(s)), s.status !== "Success")
            n.reject(nn.createError(s.code, s.description, s.ext));
          else if (s.result)
            s.result.code && s.result.description ? n.reject(nn.createError(s.result.code, s.result.description, s.result.ext)) : n.resolve(s.result);
          else
            throw le.createUnexpectedError("Event does not contain result.");
          this.resolvers.delete(t.responseId);
        } else if (a === bn.HandshakeResponse) {
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
var jI = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t, n, o, a, s, l, u, f, h, p) {
      var m = r.call(this, t, n, o, a, s, l, u, h, p) || this;
      return m.nativeStorage = f, m;
    }
    return e.prototype.acquireToken = function(t) {
      return G(this, void 0, void 0, function() {
        var n, o, a, s, l, u, f, h, p, m = this;
        return z(this, function(v) {
          switch (v.label) {
            case 0:
              return this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, se.Redirect)];
            case 1:
              n = v.sent(), this.browserStorage.updateCacheEntries(n.state, n.nonce, n.authority, n.loginHint || N.EMPTY_STRING, n.account || null), o = this.initializeServerTelemetryManager(Ze.acquireTokenRedirect), a = function(C) {
                C.persisted && (m.logger.verbose("Page was restored from back/forward cache. Clearing temporary cache."), m.browserStorage.cleanRequestByState(n.state), m.eventHandler.emitEvent(Ee.RESTORE_FROM_BFCACHE, se.Redirect));
              }, v.label = 2;
            case 2:
              return v.trys.push([2, 7, , 8]), this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationCodeRequest, t.correlationId), [4, this.initializeAuthorizationCodeRequest(n)];
            case 3:
              return s = v.sent(), this.performanceClient.setPreQueueTime(F.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(o, n.authority, n.azureCloudOptions)];
            case 4:
              return l = v.sent(), this.logger.verbose("Auth code client created"), u = new $p(l, this.browserStorage, s, this.logger, this.browserCrypto, this.performanceClient), [4, l.getAuthCodeUrl(ce(ce({}, n), { nativeBroker: mo.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, t.authenticationScheme) }))];
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
              throw p = v.sent(), p instanceof le && p.setCorrelationId(this.correlationId), window.removeEventListener("pageshow", a), o.cacheFailedRequest(p), this.browserStorage.cleanRequestByState(n.state), p;
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
        var n, o, a, s, l, u, f, h, p, m, v, C;
        return z(this, function(E) {
          switch (E.label) {
            case 0:
              n = this.initializeServerTelemetryManager(Ze.handleRedirectPromise), E.label = 1;
            case 1:
              if (E.trys.push([1, 10, , 11]), !this.browserStorage.isInteractionInProgress(!0))
                return this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null."), [2, null];
              if (o = this.getRedirectResponseHash(t || window.location.hash), !o)
                return this.logger.info("handleRedirectPromise did not detect a response hash as a result of a redirect. Cleaning temporary cache."), this.browserStorage.cleanRequestByInteractionType(se.Redirect), [2, null];
              a = void 0;
              try {
                s = He.getDeserializedHash(o), a = this.validateAndExtractStateFromHash(s, se.Redirect), this.logger.verbose("State extracted from hash");
              } catch (_) {
                return this.logger.info("handleRedirectPromise was unable to extract state due to: " + _), this.browserStorage.cleanRequestByInteractionType(se.Redirect), [2, null];
              }
              return l = this.browserStorage.getTemporaryCache(Be.ORIGIN_URI, !0) || N.EMPTY_STRING, u = He.removeHashFromUrl(l), f = He.removeHashFromUrl(window.location.href), u === f && this.config.auth.navigateToLoginRequestUrl ? (this.logger.verbose("Current page is loginRequestUrl, handling hash"), [4, this.handleHash(o, a, n)]) : [3, 3];
            case 2:
              return h = E.sent(), l.indexOf("#") > -1 && ct.replaceHash(l), [2, h];
            case 3:
              return this.config.auth.navigateToLoginRequestUrl ? [3, 4] : (this.logger.verbose("NavigateToLoginRequestUrl set to false, handling hash"), [2, this.handleHash(o, a, n)]);
            case 4:
              return !ct.isInIframe() || this.config.system.allowRedirectInIframe ? (this.browserStorage.setTemporaryCache(Be.URL_HASH, o, !0), p = {
                apiId: Ze.handleRedirectPromise,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !0
              }, m = !0, !l || l === "null" ? (v = ct.getHomepage(), this.browserStorage.setTemporaryCache(Be.ORIGIN_URI, v, !0), this.logger.warning("Unable to get valid login request url from cache, redirecting to home page"), [4, this.navigationClient.navigateInternal(v, p)]) : [3, 6]) : [3, 9];
            case 5:
              return m = E.sent(), [3, 8];
            case 6:
              return this.logger.verbose("Navigating to loginRequestUrl: " + l), [4, this.navigationClient.navigateInternal(l, p)];
            case 7:
              m = E.sent(), E.label = 8;
            case 8:
              if (!m)
                return [2, this.handleHash(o, a, n)];
              E.label = 9;
            case 9:
              return [2, null];
            case 10:
              throw C = E.sent(), C instanceof le && C.setCorrelationId(this.correlationId), n.cacheFailedRequest(C), this.browserStorage.cleanRequestByInteractionType(se.Redirect), C;
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
        var a, s, l, u, f, h, p, m = this;
        return z(this, function(v) {
          switch (v.label) {
            case 0:
              if (a = this.browserStorage.getCachedRequest(n, this.browserCrypto), this.logger.verbose("handleHash called, retrieved cached request"), s = He.getDeserializedHash(t), s.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), !this.nativeMessageHandler)
                  throw X.createNativeConnectionNotEstablishedError();
                return l = new ti(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, s.accountId, this.nativeStorage, a.correlationId), u = _n.parseRequestState(this.browserCrypto, n).userRequestState, [2, l.acquireToken(ce(ce({}, a), {
                  state: u,
                  prompt: void 0
                  // Server should handle the prompt, ideally native broker can do this part silently
                })).finally(function() {
                  m.browserStorage.cleanRequestByState(n);
                })];
              }
              if (f = this.browserStorage.getCachedAuthority(n), !f)
                throw X.createNoCachedAuthorityError();
              return this.performanceClient.setPreQueueTime(F.StandardInteractionClientCreateAuthCodeClient, a.correlationId), [4, this.createAuthCodeClient(o, f)];
            case 1:
              return h = v.sent(), this.logger.verbose("Auth code client created"), Is.removeThrottle(this.browserStorage, this.config.auth.clientId, a), p = new $p(h, this.browserStorage, a, this.logger, this.browserCrypto, this.performanceClient), [4, p.handleCodeResponseFromHash(t, n, h.authority, this.networkClient)];
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
              return h.trys.push([1, 10, , 11]), this.eventHandler.emitEvent(Ee.LOGOUT_START, se.Redirect, t), [4, this.clearCacheOnLogout(n.account)];
            case 2:
              return h.sent(), a = {
                apiId: Ze.logout,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !1
              }, this.performanceClient.setPreQueueTime(F.StandardInteractionClientCreateAuthCodeClient, n.correlationId), [4, this.createAuthCodeClient(o, t && t.authority)];
            case 3:
              return s = h.sent(), this.logger.verbose("Auth code client created"), l = s.getLogoutUri(n), this.eventHandler.emitEvent(Ee.LOGOUT_SUCCESS, se.Redirect, n), t && typeof t.onRedirectNavigate == "function" ? (u = t.onRedirectNavigate(l), u === !1 ? [3, 5] : (this.logger.verbose("Logout onRedirectNavigate did not return false, navigating"), this.browserStorage.getInteractionInProgress() || this.browserStorage.setInteractionInProgress(!0), [4, this.navigationClient.navigateExternal(l, a)])) : [3, 7];
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
              throw f = h.sent(), f instanceof le && f.setCorrelationId(this.correlationId), o.cacheFailedRequest(f), this.eventHandler.emitEvent(Ee.LOGOUT_FAILURE, se.Redirect, null, f), this.eventHandler.emitEvent(Ee.LOGOUT_END, se.Redirect), f;
            case 11:
              return this.eventHandler.emitEvent(Ee.LOGOUT_END, se.Redirect), [
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
var YI = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t, n, o, a, s, l, u, f, h, p) {
      var m = r.call(this, t, n, o, a, s, l, u, h, p) || this;
      return m.unloadWindow = m.unloadWindow.bind(m), m.nativeStorage = f, m;
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
        var s, l, u, f, h, p, m, v, C, E, _, R, A, S, I, O, L, q = this;
        return z(this, function(U) {
          switch (U.label) {
            case 0:
              return this.logger.verbose("acquireTokenPopupAsync called"), s = this.initializeServerTelemetryManager(Ze.acquireTokenPopup), this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, se.Popup)];
            case 1:
              l = U.sent(), this.browserStorage.updateCacheEntries(l.state, l.nonce, l.authority, l.loginHint || N.EMPTY_STRING, l.account || null), U.label = 2;
            case 2:
              return U.trys.push([2, 8, , 9]), this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationCodeRequest, t.correlationId), [4, this.initializeAuthorizationCodeRequest(l)];
            case 3:
              return u = U.sent(), this.performanceClient.setPreQueueTime(F.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(s, l.authority, l.azureCloudOptions)];
            case 4:
              return f = U.sent(), this.logger.verbose("Auth code client created"), h = mo.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, t.authenticationScheme), p = void 0, h && (p = this.performanceClient.startMeasurement(F.FetchAccountIdWithNativeBroker, t.correlationId)), [4, f.getAuthCodeUrl(ce(ce({}, l), { nativeBroker: h }))];
            case 5:
              return m = U.sent(), v = new Uu(f, this.browserStorage, u, this.logger, this.performanceClient), C = {
                popup: a,
                popupName: n,
                popupWindowAttributes: o
              }, E = this.initiateAuthRequest(m, C), this.eventHandler.emitEvent(Ee.POPUP_OPENED, se.Popup, { popupWindow: E }, null), [4, this.monitorPopupForHash(E)];
            case 6:
              if (_ = U.sent(), R = He.getDeserializedHash(_), A = this.validateAndExtractStateFromHash(R, se.Popup, l.correlationId), Is.removeThrottle(this.browserStorage, this.config.auth.clientId, u), R.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), p && p.endMeasurement({
                  success: !0,
                  isNativeBroker: !0
                }), !this.nativeMessageHandler)
                  throw X.createNativeConnectionNotEstablishedError();
                return S = new ti(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, R.accountId, this.nativeStorage, l.correlationId), I = _n.parseRequestState(this.browserCrypto, A).userRequestState, [2, S.acquireToken(ce(ce({}, l), {
                  state: I,
                  prompt: void 0
                  // Server should handle the prompt, ideally native broker can do this part silently
                })).finally(function() {
                  q.browserStorage.cleanRequestByState(A);
                })];
              }
              return [4, v.handleCodeResponseFromHash(_, A, f.authority, this.networkClient)];
            case 7:
              return O = U.sent(), [2, O];
            case 8:
              throw L = U.sent(), a && a.close(), L instanceof le && L.setCorrelationId(this.correlationId), s.cacheFailedRequest(L), this.browserStorage.cleanRequestByState(l.state), L;
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
        var u, f, h, p, m, v, C;
        return z(this, function(E) {
          switch (E.label) {
            case 0:
              this.logger.verbose("logoutPopupAsync called"), this.eventHandler.emitEvent(Ee.LOGOUT_START, se.Popup, t), u = this.initializeServerTelemetryManager(Ze.logoutPopup), E.label = 1;
            case 1:
              return E.trys.push([1, 5, , 6]), [4, this.clearCacheOnLogout(t.account)];
            case 2:
              return E.sent(), this.performanceClient.setPreQueueTime(F.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(u, a)];
            case 3:
              return f = E.sent(), this.logger.verbose("Auth code client created"), h = f.getLogoutUri(t), this.eventHandler.emitEvent(Ee.LOGOUT_SUCCESS, se.Popup, t), p = this.openPopup(h, { popupName: n, popupWindowAttributes: o, popup: s }), this.eventHandler.emitEvent(Ee.POPUP_OPENED, se.Popup, { popupWindow: p }, null), [4, this.waitForLogoutPopup(p)];
            case 4:
              return E.sent(), l ? (m = {
                apiId: Ze.logoutPopup,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !1
              }, v = He.getAbsoluteUrl(l, ct.getCurrentUri()), this.logger.verbose("Redirecting main window to url specified in the request"), this.logger.verbosePii("Redirecting main window to: " + v), this.navigationClient.navigateInternal(v, m)) : this.logger.verbose("No main window navigation requested"), [3, 6];
            case 5:
              throw C = E.sent(), s && s.close(), C instanceof le && C.setCorrelationId(this.correlationId), this.browserStorage.setInteractionInProgress(!1), this.eventHandler.emitEvent(Ee.LOGOUT_FAILURE, se.Popup, null, C), this.eventHandler.emitEvent(Ee.LOGOUT_END, se.Popup), u.cacheFailedRequest(C), C;
            case 6:
              return this.eventHandler.emitEvent(Ee.LOGOUT_END, se.Popup), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.initiateAuthRequest = function(t, n) {
      if (te.isEmpty(t))
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
          var f = N.EMPTY_STRING, h = N.EMPTY_STRING;
          try {
            f = t.location.href, h = t.location.hash;
          } catch {
          }
          te.isEmpty(f) || f === "about:blank" || (n.logger.verbose("PopupHandler.monitorPopupForHash - popup window is on same origin as caller"), l++, h ? (n.logger.verbose("PopupHandler.monitorPopupForHash - found hash in url"), clearInterval(u), n.cleanPopup(t), He.hashContainsKnownProperties(h) ? (n.logger.verbose("PopupHandler.monitorPopupForHash - hash contains known properties, returning."), o(h)) : (n.logger.error("PopupHandler.monitorPopupForHash - found hash in url but it does not contain known properties. Check that your router is not changing the hash prematurely."), n.logger.errorPii("PopupHandler.monitorPopupForHash - hash found: " + h), a(X.createHashDoesNotContainKnownPropertiesError()))) : l > s && (n.logger.error("PopupHandler.monitorPopupForHash - unable to find hash in url, timing out"), clearInterval(u), a(X.createMonitorPopupTimeoutError())));
        }, n.config.system.pollIntervalMilliseconds);
      });
    }, e.prototype.waitForLogoutPopup = function(t) {
      var n = this;
      return new Promise(function(o) {
        n.logger.verbose("PopupHandler.waitForLogoutPopup - polling started");
        var a = setInterval(function() {
          t.closed && (n.logger.error("PopupHandler.waitForLogoutPopup - window closed"), n.cleanPopup(), clearInterval(a), o());
          var s = N.EMPTY_STRING;
          try {
            s = t.location.href;
          } catch {
          }
          te.isEmpty(s) || s === "about:blank" || (n.logger.verbose("PopupHandler.waitForLogoutPopup - popup window is on same origin as caller, closing."), clearInterval(a), n.cleanPopup(t), o());
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
      var a, s, l, u, f = window.screenLeft ? window.screenLeft : window.screenX, h = window.screenTop ? window.screenTop : window.screenY, p = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, m = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, v = (a = o.popupSize) === null || a === void 0 ? void 0 : a.width, C = (s = o.popupSize) === null || s === void 0 ? void 0 : s.height, E = (l = o.popupPosition) === null || l === void 0 ? void 0 : l.top, _ = (u = o.popupPosition) === null || u === void 0 ? void 0 : u.left;
      return (!v || v < 0 || v > p) && (this.logger.verbose("Default popup window width used. Window width not configured or invalid."), v = qr.POPUP_WIDTH), (!C || C < 0 || C > m) && (this.logger.verbose("Default popup window height used. Window height not configured or invalid."), C = qr.POPUP_HEIGHT), (!E || E < 0 || E > m) && (this.logger.verbose("Default popup window top position used. Window top not configured or invalid."), E = Math.max(0, m / 2 - qr.POPUP_HEIGHT / 2 + h)), (!_ || _ < 0 || _ > p) && (this.logger.verbose("Default popup window left position used. Window left not configured or invalid."), _ = Math.max(0, p / 2 - qr.POPUP_WIDTH / 2 + f)), window.open(t, n, "width=" + v + ", height=" + C + ", top=" + E + ", left=" + _ + ", scrollbars=yes");
    }, e.prototype.unloadWindow = function(t) {
      this.browserStorage.cleanRequestByInteractionType(se.Popup), this.currentWindow && this.currentWindow.close(), t.preventDefault();
    }, e.prototype.cleanPopup = function(t) {
      t && t.close(), window.removeEventListener("beforeunload", this.unloadWindow), this.browserStorage.setInteractionInProgress(!1);
    }, e.prototype.generatePopupName = function(t, n) {
      return qr.POPUP_NAME_PREFIX + "." + this.config.auth.clientId + "." + t.join("-") + "." + n + "." + this.correlationId;
    }, e.prototype.generateLogoutPopupName = function(t) {
      var n = t.account && t.account.homeAccountId;
      return qr.POPUP_NAME_PREFIX + "." + this.config.auth.clientId + "." + n + "." + this.correlationId;
    }, e;
  }(ui)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var QI = (
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
var JI = 6e4, hu = 6e3, XI = 3e4, ZI = 2e3;
function eA(r, e) {
  var t = r.auth, n = r.cache, o = r.system, a = r.telemetry, s = {
    clientId: N.EMPTY_STRING,
    authority: "" + N.DEFAULT_AUTHORITY,
    knownAuthorities: [],
    cloudDiscoveryMetadata: N.EMPTY_STRING,
    authorityMetadata: N.EMPTY_STRING,
    redirectUri: N.EMPTY_STRING,
    postLogoutRedirectUri: N.EMPTY_STRING,
    navigateToLoginRequestUrl: !0,
    clientCapabilities: [],
    protocolMode: Ji.AAD,
    azureCloudOptions: {
      azureCloudInstance: Qi.None,
      tenant: N.EMPTY_STRING
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
  }, f = ce(ce({}, rm), {
    loggerOptions: u,
    networkClient: e ? ct.getBrowserNetworkClient() : HI,
    navigationClient: new QI(),
    loadFrameTimeout: 0,
    // If loadFrameTimeout is provided, use that as default.
    windowHashTimeout: (o == null ? void 0 : o.loadFrameTimeout) || JI,
    iframeHashTimeout: (o == null ? void 0 : o.loadFrameTimeout) || hu,
    navigateFrameWait: e && ct.detectIEOrEdge() ? 500 : 0,
    redirectNavigationTimeout: XI,
    asyncPopups: !1,
    allowRedirectInIframe: !1,
    allowNativeBroker: !1,
    nativeBrokerHandshakeTimeout: (o == null ? void 0 : o.nativeBrokerHandshakeTimeout) || ZI,
    pollIntervalMilliseconds: qr.DEFAULT_POLL_INTERVAL_MS,
    cryptoOptions: {
      useMsrCrypto: !1,
      entropy: void 0
    }
  }), h = ce(ce({}, o), { loggerOptions: (o == null ? void 0 : o.loggerOptions) || u }), p = {
    application: {
      appName: N.EMPTY_STRING,
      appVersion: N.EMPTY_STRING
    }
  }, m = {
    auth: ce(ce({}, s), t),
    cache: ce(ce({}, l), n),
    system: ce(ce({}, f), h),
    telemetry: ce(ce({}, p), a)
  };
  return m;
}
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var um = (
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
              if (this.performanceClient.addQueueMeasurement(F.SilentHandlerInitiateAuthRequest, this.authCodeRequest.correlationId), te.isEmpty(t))
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
          var h = N.EMPTY_STRING, p = t.contentWindow;
          try {
            h = p ? p.location.href : N.EMPTY_STRING;
          } catch {
          }
          if (!te.isEmpty(h)) {
            var m = p ? p.location.hash : N.EMPTY_STRING;
            if (He.hashContainsKnownProperties(m)) {
              o.removeHiddenIframe(t), clearInterval(f), a(m);
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
  }(Uu)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var tA = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t, n, o, a, s, l, u, f, h, p, m) {
      var v = r.call(this, t, n, o, a, s, l, f, p, m) || this;
      return v.apiId = u, v.nativeStorage = h, v;
    }
    return e.prototype.acquireToken = function(t) {
      return G(this, void 0, void 0, function() {
        var n, o, a, s, l;
        return z(this, function(u) {
          switch (u.label) {
            case 0:
              if (this.performanceClient.addQueueMeasurement(F.SilentIframeClientAcquireToken, t.correlationId), this.logger.verbose("acquireTokenByIframe called"), n = this.performanceClient.startMeasurement(F.SilentIframeClientAcquireToken, t.correlationId), te.isEmpty(t.loginHint) && te.isEmpty(t.sid) && (!t.account || te.isEmpty(t.account.username)) && this.logger.warning("No user hint provided. The authorization server may need more information to complete this request."), t.prompt && t.prompt !== Ft.NONE && t.prompt !== Ft.NO_SESSION)
                throw n.endMeasurement({
                  success: !1
                }), X.createSilentPromptValueError(t.prompt);
              return this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(ce(ce({}, t), { prompt: t.prompt || Ft.NONE }), se.Silent)];
            case 1:
              o = u.sent(), this.browserStorage.updateCacheEntries(o.state, o.nonce, o.authority, o.loginHint || N.EMPTY_STRING, o.account || null), a = this.initializeServerTelemetryManager(this.apiId), u.label = 2;
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
              throw l = u.sent(), l instanceof le && l.setCorrelationId(this.correlationId), a.cacheFailedRequest(l), this.browserStorage.cleanRequestByState(o.state), n.endMeasurement({
                errorCode: l instanceof le && l.errorCode || void 0,
                subErrorCode: l instanceof le && l.subError || void 0,
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
        var o, a, s, l, u, f, h, p, m, v = this;
        return z(this, function(C) {
          switch (C.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(F.SilentIframeClientTokenHelper, n.correlationId), this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationCodeRequest, n.correlationId), [4, this.initializeAuthorizationCodeRequest(n)];
            case 1:
              return o = C.sent(), this.performanceClient.setPreQueueTime(F.GetAuthCodeUrl, n.correlationId), [4, t.getAuthCodeUrl(ce(ce({}, n), { nativeBroker: mo.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, n.authenticationScheme) }))];
            case 2:
              return a = C.sent(), s = new um(t, this.browserStorage, o, this.logger, this.config.system, this.performanceClient), this.performanceClient.setPreQueueTime(F.SilentHandlerInitiateAuthRequest, n.correlationId), [4, s.initiateAuthRequest(a)];
            case 3:
              return l = C.sent(), this.performanceClient.setPreQueueTime(F.SilentHandlerMonitorIframeForHash, n.correlationId), [4, s.monitorIframeForHash(l, this.config.system.iframeHashTimeout)];
            case 4:
              if (u = C.sent(), f = He.getDeserializedHash(u), h = this.validateAndExtractStateFromHash(f, se.Silent, o.correlationId), f.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), !this.nativeMessageHandler)
                  throw X.createNativeConnectionNotEstablishedError();
                return p = new ti(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.apiId, this.performanceClient, this.nativeMessageHandler, f.accountId, this.browserStorage, this.correlationId), m = _n.parseRequestState(this.browserCrypto, h).userRequestState, [2, p.acquireToken(ce(ce({}, n), { state: m, prompt: n.prompt || Ft.NONE })).finally(function() {
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
var rA = (
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
              return this.performanceClient.addQueueMeasurement(F.SilentRefreshClientAcquireToken, t.correlationId), this.performanceClient.setPreQueueTime(F.InitializeBaseRequest, t.correlationId), o = [ce({}, t)], [4, this.initializeBaseRequest(t, t.account)];
            case 1:
              return n = ce.apply(void 0, o.concat([f.sent()])), a = this.performanceClient.startMeasurement(F.SilentRefreshClientAcquireToken, n.correlationId), s = this.initializeServerTelemetryManager(Ze.acquireTokenSilent_silentFlow), [4, this.createRefreshTokenClient(s, n.authority, n.azureCloudOptions)];
            case 2:
              return l = f.sent(), this.logger.verbose("Refresh token client created"), this.performanceClient.setPreQueueTime(F.RefreshTokenClientAcquireTokenByRefreshToken, t.correlationId), [2, l.acquireTokenByRefreshToken(n).then(function(h) {
                return a.endMeasurement({
                  success: !0,
                  fromCache: h.fromCache,
                  requestId: h.requestId
                }), h;
              }).catch(function(h) {
                throw h instanceof le && h.setCorrelationId(u.correlationId), s.cacheFailedRequest(h), a.endMeasurement({
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
              return a = s.sent(), [2, new om(a, this.performanceClient)];
          }
        });
      });
    }, e;
  }(ui)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var nA = (
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
var dm = (
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
        for (var t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", n = "0123456789abcdef", o = 0, a = N.EMPTY_STRING, s = 0; s < 36; s++)
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
var Sn = (
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
      for (var t = N.EMPTY_STRING, n = void 0, o = e.length, a = 0; a < o; a++)
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
var fm = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.urlEncode = function(e) {
      return encodeURIComponent(this.encode(e).replace(/=/g, N.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_"));
    }, r.prototype.urlEncodeArr = function(e) {
      return this.base64EncArr(e).replace(/=/g, N.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_");
    }, r.prototype.encode = function(e) {
      var t = Sn.stringToUtf8Arr(e);
      return this.base64EncArr(t);
    }, r.prototype.base64EncArr = function(e) {
      for (var t = (3 - e.length % 3) % 3, n = N.EMPTY_STRING, o = void 0, a = e.length, s = 0, l = 0; l < a; l++)
        o = l % 3, s |= e[l] << (16 >>> o & 24), (o === 2 || e.length - l === 1) && (n += String.fromCharCode(this.uint6ToB64(s >>> 18 & 63), this.uint6ToB64(s >>> 12 & 63), this.uint6ToB64(s >>> 6 & 63), this.uint6ToB64(s & 63)), s = 0);
      return t === 0 ? n : n.substring(0, n.length - t) + (t === 1 ? "=" : "==");
    }, r.prototype.uint6ToB64 = function(e) {
      return e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : e === 62 ? 43 : e === 63 ? 47 : 65;
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var oA = (
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
      return Sn.utf8ArrToString(n);
    }, r.prototype.base64DecToArr = function(e, t) {
      for (var n = e.replace(/[^A-Za-z0-9\+\/]/g, N.EMPTY_STRING), o = n.length, a = t ? Math.ceil((o * 3 + 1 >>> 2) / t) * t : o * 3 + 1 >>> 2, s = new Uint8Array(a), l = void 0, u = void 0, f = 0, h = 0, p = 0; p < o; p++)
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
var iA = 32, aA = (
  /** @class */
  function() {
    function r(e) {
      this.base64Encode = new fm(), this.cryptoObj = e;
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
        var e = new Uint8Array(iA);
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
var sA = (
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
          return [2, window.crypto.subtle.exportKey(oi, e)];
        });
      });
    }, r.prototype.importKey = function(e, t, n, o) {
      return G(this, void 0, void 0, function() {
        return z(this, function(a) {
          return [2, window.crypto.subtle.importKey(oi, e, t, n, o)];
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
var cA = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.initPrng = function(e) {
      return window.msrCrypto.initPrng(Ou(e));
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
          return [2, window.msrCrypto.subtle.exportKey(oi, e)];
        });
      });
    }, r.prototype.importKey = function(e, t, n, o) {
      return G(this, void 0, void 0, function() {
        return z(this, function(a) {
          return [2, window.msrCrypto.subtle.importKey(oi, e, t, n, o)];
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
var lA = (
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
            var a = window.msCrypto.subtle.exportKey(oi, e);
            a.addEventListener("complete", function(s) {
              var l = s.target.result, u = Sn.utf8ArrToString(new Uint8Array(l)).replace(/\r/g, N.EMPTY_STRING).replace(/\n/g, N.EMPTY_STRING).replace(/\t/g, N.EMPTY_STRING).split(" ").join(N.EMPTY_STRING).replace("\0", N.EMPTY_STRING);
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
          return a = Sn.getSortedObjectString(e), s = Sn.stringToArrayBuffer(a), [2, new Promise(function(u, f) {
            var h = window.msCrypto.subtle.importKey(oi, s, t, n, o);
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
var uA = "RSASSA-PKCS1-v1_5", Gp = "SHA-256", dA = 2048, fA = new Uint8Array([1, 0, 1]), hm = (
  /** @class */
  function() {
    function r(e, t) {
      var n, o;
      if (this.logger = e, this.cryptoOptions = t, this.hasBrowserCrypto())
        this.logger.verbose("BrowserCrypto: modern crypto interface available"), this.subtleCrypto = new sA();
      else if (this.hasIECrypto())
        this.logger.verbose("BrowserCrypto: MS crypto interface available"), this.subtleCrypto = new lA();
      else if (this.hasMsrCrypto() && (!((n = this.cryptoOptions) === null || n === void 0) && n.useMsrCrypto))
        this.logger.verbose("BrowserCrypto: MSR crypto interface available"), this.subtleCrypto = new cA();
      else
        throw this.hasMsrCrypto() && this.logger.info("BrowserCrypto: MSR Crypto interface available but system.cryptoOptions.useMsrCrypto not enabled"), this.logger.error("BrowserCrypto: No crypto interfaces available."), X.createCryptoNotAvailableError("Browser crypto, msCrypto, or msrCrypto interfaces not available.");
      if (this.subtleCrypto.initPrng) {
        if (this.logger.verbose("BrowserCrypto: Interface requires entropy"), !(!((o = this.cryptoOptions) === null || o === void 0) && o.entropy))
          throw this.logger.error("BrowserCrypto: Interface requires entropy but none provided."), Ns.createEntropyNotProvided();
        this.logger.verbose("BrowserCrypto: Entropy provided"), this.subtleCrypto.initPrng(this.cryptoOptions.entropy);
      }
      this.keygenAlgorithmOptions = {
        name: uA,
        hash: Gp,
        modulusLength: dA,
        publicExponent: fA
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
          return t = Sn.stringToUtf8Arr(e), [2, this.subtleCrypto.digest({ name: Gp }, t)];
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
var hA = (
  /** @class */
  function() {
    function r() {
      this.dbName = uu, this.version = $I, this.tableName = GI, this.dbOpen = !1;
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
var zp = (
  /** @class */
  function() {
    function r(e, t) {
      this.inMemoryCache = new du(), this.indexedDBCache = new hA(), this.logger = e, this.storeName = t;
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
var Os;
(function(r) {
  r.asymmetricKeys = "asymmetricKeys", r.symmetricKeys = "symmetricKeys";
})(Os || (Os = {}));
var pA = (
  /** @class */
  function() {
    function r(e) {
      this.logger = e, this.asymmetricKeys = new zp(this.logger, Os.asymmetricKeys), this.symmetricKeys = new zp(this.logger, Os.symmetricKeys);
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
var gA = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.logger = e, this.browserCrypto = new hm(this.logger, n), this.b64Encode = new fm(), this.b64Decode = new oA(), this.guidGenerator = new dm(this.browserCrypto), this.pkceGenerator = new aA(this.browserCrypto), this.cache = new pA(this.logger), this.performanceClient = t;
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
              }, l = Sn.getSortedObjectString(s), [4, this.hashString(l)];
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
        var a, s, l, u, f, h, p, m, v, C, E, _, R;
        return z(this, function(A) {
          switch (A.label) {
            case 0:
              return a = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(F.CryptoOptsSignJwt, n), [4, this.cache.asymmetricKeys.getItem(t)];
            case 1:
              if (s = A.sent(), !s)
                throw X.createSigningKeyNotFoundInStorageError(t);
              return [4, this.browserCrypto.exportJwk(s.publicKey)];
            case 2:
              return l = A.sent(), u = Sn.getSortedObjectString(l), f = this.b64Encode.urlEncode(JSON.stringify({ kid: t })), h = BI.getShrHeaderString({ kid: f, alg: l.alg }), p = this.b64Encode.urlEncode(h), e.cnf = {
                jwk: JSON.parse(u)
              }, m = this.b64Encode.urlEncode(JSON.stringify(e)), v = p + "." + m, C = Sn.stringToArrayBuffer(v), [4, this.browserCrypto.sign(s.privateKey, C)];
            case 3:
              return E = A.sent(), _ = this.b64Encode.urlEncodeArr(new Uint8Array(E)), R = v + "." + _, a && a.endMeasurement({
                success: !0
              }), [2, R];
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
var Vp = (
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
var mA = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t, n, o, a, s, l, u) {
      var f = r.call(this, t, n, o, a, s, l) || this;
      return f.browserCrypto = new hm(f.logger, u), f.guidGenerator = new dm(f.browserCrypto), f;
    }
    return e.prototype.startPerformanceMeasuremeant = function(t, n) {
      return new Vp(t, n);
    }, e.prototype.generateId = function() {
      return this.guidGenerator.generateGuid();
    }, e.prototype.getPageVisibility = function() {
      var t;
      return ((t = document.visibilityState) === null || t === void 0 ? void 0 : t.toString()) || null;
    }, e.prototype.deleteIncompleteSubMeasurements = function(t) {
      var n = this.eventsByCorrelationId.get(t.event.correlationId), o = n && n.eventId === t.event.eventId, a = [];
      o && (n != null && n.incompleteSubMeasurements) && n.incompleteSubMeasurements.forEach(function(s) {
        a.push(ce({}, s));
      }), a.length > 0 && Vp.flushMeasurements(t.event.correlationId, a);
    }, e.prototype.supportsBrowserPerformanceNow = function() {
      return typeof window < "u" && typeof window.performance < "u" && typeof window.performance.now == "function";
    }, e.prototype.startMeasurement = function(t, n) {
      var o = this, a = this.getPageVisibility(), s = r.prototype.startMeasurement.call(this, t, n);
      return ce(ce({}, s), { endMeasurement: function(l) {
        var u = s.endMeasurement(ce({ startPageVisibility: a, endPageVisibility: o.getPageVisibility() }, l));
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
  }(am)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var vA = (
  /** @class */
  function() {
    function r(e, t, n, o) {
      this.isBrowserEnvironment = typeof window < "u", this.config = e, this.storage = t, this.logger = n, this.cryptoObj = o;
    }
    return r.prototype.loadExternalTokens = function(e, t, n) {
      if (this.logger.info("TokenCache - loadExternalTokens called"), !t.id_token)
        throw X.createUnableToLoadTokenError("Please ensure server response includes id token.");
      var o = new an(t.id_token, this.cryptoObj), a, s;
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
      var a = ho.createIdTokenEntity(t, n, e.rawToken, this.config.auth.clientId, o);
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
      var l = new Dt(e.scopes).printScopes(), u = s.expiresOn || t.expires_in + (/* @__PURE__ */ new Date()).getTime() / 1e3, f = s.extendedExpiresOn, h = po.createAccessTokenEntity(n, o, t.access_token, this.config.auth.clientId, a, l, u, f, this.cryptoObj);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading access token"), this.storage.setAccessTokenCredential(h), h;
      throw X.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.loadRefreshToken = function(e, t, n, o) {
      if (!t.refresh_token)
        return this.logger.verbose("TokenCache - No refresh token provided for caching"), null;
      var a = Qo.createRefreshTokenEntity(n, o, t.refresh_token, this.config.auth.clientId);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading refresh token"), this.storage.setRefreshTokenCredential(a), a;
      throw X.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.generateAuthenticationResult = function(e, t, n, o) {
      var a, s, l, u = N.EMPTY_STRING, f = [], h = null, p;
      n != null && n.accessToken && (u = n.accessToken.secret, f = Dt.fromString(n.accessToken.target).asArray(), h = new Date(Number(n.accessToken.expiresOn) * 1e3), p = new Date(Number(n.accessToken.extendedExpiresOn) * 1e3));
      var m = (t == null ? void 0 : t.claims.oid) || (t == null ? void 0 : t.claims.sub) || N.EMPTY_STRING, v = (t == null ? void 0 : t.claims.tid) || N.EMPTY_STRING;
      return {
        authority: o ? o.canonicalAuthority : N.EMPTY_STRING,
        uniqueId: m,
        tenantId: v,
        scopes: f,
        account: n != null && n.account ? n.account.getAccountInfo() : null,
        idToken: t ? t.rawToken : N.EMPTY_STRING,
        idTokenClaims: t ? t.claims : {},
        accessToken: u,
        fromCache: !0,
        expiresOn: h,
        correlationId: e.correlationId || N.EMPTY_STRING,
        requestId: N.EMPTY_STRING,
        extExpiresOn: p,
        familyId: N.EMPTY_STRING,
        tokenType: ((a = n == null ? void 0 : n.accessToken) === null || a === void 0 ? void 0 : a.tokenType) || N.EMPTY_STRING,
        state: N.EMPTY_STRING,
        cloudGraphHostName: ((s = n == null ? void 0 : n.account) === null || s === void 0 ? void 0 : s.cloudGraphHostName) || N.EMPTY_STRING,
        msGraphHost: ((l = n == null ? void 0 : n.account) === null || l === void 0 ? void 0 : l.msGraphHost) || N.EMPTY_STRING,
        code: void 0,
        fromNativeBroker: !1
      };
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var yA = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t) {
      var n = r.call(this, t) || this;
      return n.includeRedirectUri = !1, n;
    }
    return e;
  }(nm)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var CA = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t, n, o, a, s, l, u, f, h, p) {
      var m = r.call(this, t, n, o, a, s, l, f, h, p) || this;
      return m.apiId = u, m;
    }
    return e.prototype.acquireToken = function(t) {
      return G(this, void 0, void 0, function() {
        var n, o, a, s, l, u, f;
        return z(this, function(h) {
          switch (h.label) {
            case 0:
              if (this.logger.trace("SilentAuthCodeClient.acquireToken called"), !t.code)
                throw X.createAuthCodeRequiredError();
              return this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, se.Silent)];
            case 1:
              n = h.sent(), this.browserStorage.updateCacheEntries(n.state, n.nonce, n.authority, n.loginHint || N.EMPTY_STRING, n.account || null), o = this.initializeServerTelemetryManager(this.apiId), h.label = 2;
            case 2:
              return h.trys.push([2, 4, , 5]), a = ce(ce({}, n), { code: t.code }), this.performanceClient.setPreQueueTime(F.StandardInteractionClientGetClientConfiguration, t.correlationId), [4, this.getClientConfiguration(o, n.authority)];
            case 3:
              return s = h.sent(), l = new yA(s), this.logger.verbose("Auth code client created"), u = new um(l, this.browserStorage, a, this.logger, this.config.system, this.performanceClient), [2, u.handleCodeResponseFromServer({
                code: t.code,
                msgraph_host: t.msGraphHost,
                cloud_graph_host_name: t.cloudGraphHostName,
                cloud_instance_host_name: t.cloudInstanceHostName
              }, n.state, l.authority, this.networkClient, !1)];
            case 4:
              throw f = h.sent(), f instanceof le && f.setCorrelationId(this.correlationId), o.cacheFailedRequest(f), this.browserStorage.cleanRequestByState(n.state), f;
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
var wA = (
  /** @class */
  function() {
    function r(e) {
      this.isBrowserEnvironment = typeof window < "u", this.config = eA(e, this.isBrowserEnvironment), this.initialized = !1, this.logger = new Mu(this.config.system.loggerOptions, Ll, ji), this.networkClient = this.config.system.networkClient, this.navigationClient = this.config.system.navigationClient, this.redirectResponse = /* @__PURE__ */ new Map(), this.hybridAuthCodeResponses = /* @__PURE__ */ new Map(), this.performanceClient = this.isBrowserEnvironment ? new mA(this.config.auth.clientId, this.config.auth.authority, this.logger, Ll, ji, this.config.telemetry.application, this.config.system.cryptoOptions) : new qI(this.config.auth.clientId, this.config.auth.authority, this.logger, Ll, ji, this.config.telemetry.application), this.browserCrypto = this.isBrowserEnvironment ? new gA(this.logger, this.performanceClient, this.config.system.cryptoOptions) : Ss, this.eventHandler = new nA(this.logger, this.browserCrypto), this.browserStorage = this.isBrowserEnvironment ? new fu(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger) : zI(this.config.auth.clientId, this.logger);
      var t = {
        cacheLocation: pt.MemoryStorage,
        temporaryCacheLocation: pt.MemoryStorage,
        storeAuthStateInCookie: !1,
        secureCookies: !1,
        cacheMigrationEnabled: !1,
        claimsBasedCachingEnabled: !0
      };
      this.nativeInternalStorage = new fu(this.config.auth.clientId, t, this.browserCrypto, this.logger), this.tokenCache = new vA(this.config, this.browserStorage, this.logger, this.browserCrypto), this.trackPageVisibilityWithMeasurement = this.trackPageVisibilityWithMeasurement.bind(this);
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
              return s.trys.push([1, 3, , 4]), n = this, [4, mo.createProvider(this.logger, this.config.system.nativeBrokerHandshakeTimeout, this.performanceClient)];
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
          return this.logger.verbose("handleRedirectPromise called"), ct.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized), t = this.getAllAccounts(), this.isBrowserEnvironment ? (n = e || N.EMPTY_STRING, o = this.redirectResponse.get(n), typeof o > "u" ? (this.eventHandler.emitEvent(Ee.HANDLE_REDIRECT_START, se.Redirect), this.logger.verbose("handleRedirectPromise has been called for the first time, storing the promise"), a = this.browserStorage.getCachedNativeRequest(), s = void 0, a && mo.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider) && this.nativeExtensionProvider && !e ? (this.logger.trace("handleRedirectPromise - acquiring token from native platform"), l = new ti(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.handleRedirectPromise, this.performanceClient, this.nativeExtensionProvider, a.accountId, this.nativeInternalStorage, a.correlationId), s = l.handleRedirectPromise()) : (this.logger.trace("handleRedirectPromise - acquiring token from web flow"), u = this.browserStorage.getTemporaryCache(Be.CORRELATION_ID, !0) || N.EMPTY_STRING, f = this.createRedirectClient(u), s = f.handleRedirectPromise(e)), o = s.then(function(m) {
            if (m) {
              var v = t.length < h.getAllAccounts().length;
              v ? (h.eventHandler.emitEvent(Ee.LOGIN_SUCCESS, se.Redirect, m), h.logger.verbose("handleRedirectResponse returned result, login success")) : (h.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_SUCCESS, se.Redirect, m), h.logger.verbose("handleRedirectResponse returned result, acquire token success"));
            }
            return h.eventHandler.emitEvent(Ee.HANDLE_REDIRECT_END, se.Redirect), m;
          }).catch(function(m) {
            throw t.length > 0 ? h.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_FAILURE, se.Redirect, null, m) : h.eventHandler.emitEvent(Ee.LOGIN_FAILURE, se.Redirect, null, m), h.eventHandler.emitEvent(Ee.HANDLE_REDIRECT_END, se.Redirect), m;
          }), this.redirectResponse.set(n, o)) : this.logger.verbose("handleRedirectPromise has been called previously, returning the result from the first call"), [2, o]) : (this.logger.verbose("handleRedirectPromise returns null, not browser environment"), [2, null]);
        });
      });
    }, r.prototype.acquireTokenRedirect = function(e) {
      return G(this, void 0, void 0, function() {
        var t, n, o, a, s, l = this;
        return z(this, function(u) {
          return t = this.getRequestCorrelationId(e), this.logger.verbose("acquireTokenRedirect called", t), this.preflightBrowserEnvironmentCheck(se.Redirect), n = this.getAllAccounts().length > 0, n ? this.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_START, se.Redirect, e) : this.eventHandler.emitEvent(Ee.LOGIN_START, se.Redirect, e), this.nativeExtensionProvider && this.canUseNative(e) ? (a = new ti(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenRedirect, this.performanceClient, this.nativeExtensionProvider, this.getNativeAccountId(e), this.nativeInternalStorage, e.correlationId), o = a.acquireTokenRedirect(e).catch(function(f) {
            if (f instanceof nn && f.isFatal()) {
              l.nativeExtensionProvider = void 0;
              var h = l.createRedirectClient(e.correlationId);
              return h.acquireToken(e);
            } else if (f instanceof Gr) {
              l.logger.verbose("acquireTokenRedirect - Resolving interaction required error thrown by native broker by falling back to web flow");
              var h = l.createRedirectClient(e.correlationId);
              return h.acquireToken(e);
            }
            throw l.browserStorage.setInteractionInProgress(!1), f;
          })) : (s = this.createRedirectClient(e.correlationId), o = s.acquireToken(e)), [2, o.catch(function(f) {
            throw n ? l.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_FAILURE, se.Redirect, null, f) : l.eventHandler.emitEvent(Ee.LOGIN_FAILURE, se.Redirect, null, f), f;
          })];
        });
      });
    }, r.prototype.acquireTokenPopup = function(e) {
      var t = this, n = this.getRequestCorrelationId(e), o = this.performanceClient.startMeasurement(F.AcquireTokenPopup, n);
      try {
        this.logger.verbose("acquireTokenPopup called", n), this.preflightBrowserEnvironmentCheck(se.Popup);
      } catch (u) {
        return Promise.reject(u);
      }
      var a = this.getAllAccounts();
      a.length > 0 ? this.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_START, se.Popup, e) : this.eventHandler.emitEvent(Ee.LOGIN_START, se.Popup, e);
      var s;
      if (this.canUseNative(e))
        s = this.acquireTokenNative(e, Ze.acquireTokenPopup).then(function(u) {
          return t.browserStorage.setInteractionInProgress(!1), o.endMeasurement({
            success: !0,
            isNativeBroker: !0,
            requestId: u.requestId
          }), u;
        }).catch(function(u) {
          if (u instanceof nn && u.isFatal()) {
            t.nativeExtensionProvider = void 0;
            var f = t.createPopupClient(e.correlationId);
            return f.acquireToken(e);
          } else if (u instanceof Gr) {
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
        return f ? t.eventHandler.emitEvent(Ee.LOGIN_SUCCESS, se.Popup, u) : t.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_SUCCESS, se.Popup, u), o.addStaticFields({
          accessTokenSize: u.accessToken.length,
          idTokenSize: u.idToken.length
        }), o.endMeasurement({
          success: !0,
          requestId: u.requestId
        }), u;
      }).catch(function(u) {
        return a.length > 0 ? t.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_FAILURE, se.Popup, null, u) : t.eventHandler.emitEvent(Ee.LOGIN_FAILURE, se.Popup, null, u), o.endMeasurement({
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
          return n = this.getRequestCorrelationId(e), o = ce(ce({}, e), {
            // will be PromptValue.NONE or PromptValue.NO_SESSION
            prompt: e.prompt,
            correlationId: n
          }), this.preflightBrowserEnvironmentCheck(se.Silent), this.ssoSilentMeasurement = this.performanceClient.startMeasurement(F.SsoSilent, n), (t = this.ssoSilentMeasurement) === null || t === void 0 || t.increment({
            visibilityChangeCount: 0
          }), document.addEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement), this.logger.verbose("ssoSilent called", n), this.eventHandler.emitEvent(Ee.SSO_SILENT_START, se.Silent, o), this.canUseNative(o) ? a = this.acquireTokenNative(o, Ze.ssoSilent).catch(function(f) {
            if (f instanceof nn && f.isFatal()) {
              l.nativeExtensionProvider = void 0;
              var h = l.createSilentIframeClient(o.correlationId);
              return h.acquireToken(o);
            }
            throw f;
          }) : (s = this.createSilentIframeClient(o.correlationId), a = s.acquireToken(o)), [2, a.then(function(f) {
            var h, p;
            return l.eventHandler.emitEvent(Ee.SSO_SILENT_SUCCESS, se.Silent, f), (h = l.ssoSilentMeasurement) === null || h === void 0 || h.addStaticFields({
              accessTokenSize: f.accessToken.length,
              idTokenSize: f.idToken.length
            }), (p = l.ssoSilentMeasurement) === null || p === void 0 || p.endMeasurement({
              success: !0,
              isNativeBroker: f.fromNativeBroker,
              requestId: f.requestId
            }), f;
          }).catch(function(f) {
            var h;
            throw l.eventHandler.emitEvent(Ee.SSO_SILENT_FAILURE, se.Silent, null, f), (h = l.ssoSilentMeasurement) === null || h === void 0 || h.endMeasurement({
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
          t = this.getRequestCorrelationId(e), this.preflightBrowserEnvironmentCheck(se.Silent), this.logger.trace("acquireTokenByCode called", t), this.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_BY_CODE_START, se.Silent, e), n = this.performanceClient.startMeasurement(F.AcquireTokenByCode, e.correlationId);
          try {
            if (e.code && e.nativeAccountId)
              throw X.createSpaCodeAndNativeAccountIdPresentError();
            if (e.code)
              return o = e.code, a = this.hybridAuthCodeResponses.get(o), a ? (this.logger.verbose("Existing acquireTokenByCode request found", e.correlationId), n.discardMeasurement()) : (this.logger.verbose("Initiating new acquireTokenByCode request", t), a = this.acquireTokenByCodeAsync(ce(ce({}, e), { correlationId: t })).then(function(u) {
                return s.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_BY_CODE_SUCCESS, se.Silent, u), s.hybridAuthCodeResponses.delete(o), n.addStaticFields({
                  accessTokenSize: u.accessToken.length,
                  idTokenSize: u.idToken.length
                }), n.endMeasurement({
                  success: !0,
                  isNativeBroker: u.fromNativeBroker,
                  requestId: u.requestId
                }), u;
              }).catch(function(u) {
                throw s.hybridAuthCodeResponses.delete(o), s.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_BY_CODE_FAILURE, se.Silent, null, u), n.endMeasurement({
                  errorCode: u.errorCode,
                  subErrorCode: u.subError,
                  success: !1
                }), u;
              }), this.hybridAuthCodeResponses.set(o, a)), [2, a];
            if (e.nativeAccountId) {
              if (this.canUseNative(e, e.nativeAccountId))
                return [2, this.acquireTokenNative(e, Ze.acquireTokenByCode, e.nativeAccountId).catch(function(u) {
                  throw u instanceof nn && u.isFatal() && (s.nativeExtensionProvider = void 0), u;
                })];
              throw X.createUnableToAcquireTokenFromNativePlatformError();
            } else
              throw X.createAuthCodeOrNativeAccountIdRequiredError();
          } catch (u) {
            throw this.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_BY_CODE_FAILURE, se.Silent, null, u), n.endMeasurement({
              errorCode: u instanceof le && u.errorCode || void 0,
              subErrorCode: u instanceof le && u.subError || void 0,
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
              throw ne.createRefreshRequiredError();
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
              throw ne.createRefreshRequiredError();
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
          return t = this.getRequestCorrelationId(e), this.logger.warning("logout API is deprecated and will be removed in msal-browser v3.0.0. Use logoutRedirect instead.", t), [2, this.logoutRedirect(ce({ correlationId: t }, e))];
        });
      });
    }, r.prototype.logoutRedirect = function(e) {
      return G(this, void 0, void 0, function() {
        var t, n;
        return z(this, function(o) {
          return t = this.getRequestCorrelationId(e), this.preflightBrowserEnvironmentCheck(se.Redirect), n = this.createRedirectClient(t), [2, n.logout(e)];
        });
      });
    }, r.prototype.logoutPopup = function(e) {
      try {
        var t = this.getRequestCorrelationId(e);
        this.preflightBrowserEnvironmentCheck(se.Popup);
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
      if (t === void 0 && (t = !0), this.logger.verbose("preflightBrowserEnvironmentCheck started"), ct.blockNonBrowserEnvironment(this.isBrowserEnvironment), ct.blockRedirectInIframe(e, this.config.system.allowRedirectInIframe), ct.blockReloadInHiddenIframes(), ct.blockAcquireTokenInPopups(), ct.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized), e === se.Redirect && this.config.cache.cacheLocation === pt.MemoryStorage && !this.config.cache.storeAuthStateInCookie)
        throw Ns.createInMemoryRedirectUnavailableError();
      (e === se.Redirect || e === se.Popup) && this.preflightInteractiveRequest(t);
    }, r.prototype.preflightInteractiveRequest = function(e) {
      this.logger.verbose("preflightInteractiveRequest called, validating app environment"), ct.blockReloadInHiddenIframes(), e && this.browserStorage.setInteractionInProgress(!0);
    }, r.prototype.acquireTokenNative = function(e, t, n) {
      return G(this, void 0, void 0, function() {
        var o;
        return z(this, function(a) {
          if (this.logger.trace("acquireTokenNative called"), !this.nativeExtensionProvider)
            throw X.createNativeConnectionNotEstablishedError();
          return o = new ti(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, t, this.performanceClient, this.nativeExtensionProvider, n || this.getNativeAccountId(e), this.nativeInternalStorage, e.correlationId), [2, o.acquireToken(e)];
        });
      });
    }, r.prototype.canUseNative = function(e, t) {
      if (this.logger.trace("canUseNative called"), !mo.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, e.authenticationScheme))
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
      return new YI(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createRedirectClient = function(e) {
      return new jI(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentIframeClient = function(e) {
      return new tA(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.ssoSilent, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentCacheClient = function(e) {
      return new lm(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentRefreshClient = function(e) {
      return new rA(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentAuthCodeClient = function(e) {
      return new CA(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenByCode, this.performanceClient, this.nativeExtensionProvider, e);
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
      return e != null && e.correlationId ? e.correlationId : this.isBrowserEnvironment ? this.browserCrypto.createNewGuid() : N.EMPTY_STRING;
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var EA = (
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
          return n = this.getRequestCorrelationId(t), this.logger.verbose("loginRedirect called", n), [2, this.acquireTokenRedirect(ce({ correlationId: n }, t || Bp))];
        });
      });
    }, e.prototype.loginPopup = function(t) {
      var n = this.getRequestCorrelationId(t);
      return this.logger.verbose("loginPopup called", n), this.acquireTokenPopup(ce({ correlationId: n }, t || Bp));
    }, e.prototype.acquireTokenSilent = function(t) {
      return G(this, void 0, void 0, function() {
        var n, o, a, s, l, u, f, h = this;
        return z(this, function(p) {
          if (n = this.getRequestCorrelationId(t), o = this.performanceClient.startMeasurement(F.AcquireTokenSilent, n), o.addStaticFields({
            cacheLookupPolicy: t.cacheLookupPolicy
          }), this.preflightBrowserEnvironmentCheck(se.Silent), this.logger.verbose("acquireTokenSilent called", n), a = t.account || this.getActiveAccount(), !a)
            throw X.createNoAccountError();
          return s = {
            clientId: this.config.auth.clientId,
            authority: t.authority || N.EMPTY_STRING,
            scopes: t.scopes,
            homeAccountIdentifier: a.homeAccountId,
            claims: t.claims,
            authenticationScheme: t.authenticationScheme,
            resourceRequestMethod: t.resourceRequestMethod,
            resourceRequestUri: t.resourceRequestUri,
            shrClaims: t.shrClaims,
            sshKid: t.sshKid
          }, l = JSON.stringify(s), u = this.activeSilentTokenRequests.get(l), typeof u > "u" ? (this.logger.verbose("acquireTokenSilent called for the first time, storing active request", n), this.performanceClient.setPreQueueTime(F.AcquireTokenSilentAsync, n), f = this.acquireTokenSilentAsync(ce(ce({}, t), { correlationId: n }), a).then(function(m) {
            return h.activeSilentTokenRequests.delete(l), o.addStaticFields({
              accessTokenSize: m.accessToken.length,
              idTokenSize: m.idToken.length
            }), o.endMeasurement({
              success: !0,
              fromCache: m.fromCache,
              isNativeBroker: m.fromNativeBroker,
              cacheLookupPolicy: t.cacheLookupPolicy,
              requestId: m.requestId
            }), m;
          }).catch(function(m) {
            throw h.activeSilentTokenRequests.delete(l), o.endMeasurement({
              errorCode: m.errorCode,
              subErrorCode: m.subError,
              success: !1
            }), m;
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
              return this.performanceClient.addQueueMeasurement(F.AcquireTokenSilentAsync, t.correlationId), this.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_START, se.Silent, t), this.astsAsyncMeasurement = this.performanceClient.startMeasurement(F.AcquireTokenSilentAsync, t.correlationId), (o = this.astsAsyncMeasurement) === null || o === void 0 || o.increment({
                visibilityChangeCount: 0
              }), document.addEventListener("visibilitychange", this.trackPageVisibility), mo.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, t.authenticationScheme) && n.nativeAccountId ? (this.logger.verbose("acquireTokenSilent - attempting to acquire token from native platform"), s = ce(ce({}, t), { account: n }), a = this.acquireTokenNative(s, Ze.acquireTokenSilent_silentFlow).catch(function(m) {
                return G(h, void 0, void 0, function() {
                  var v;
                  return z(this, function(C) {
                    if (m instanceof nn && m.isFatal())
                      return this.logger.verbose("acquireTokenSilent - native platform unavailable, falling back to web flow"), this.nativeExtensionProvider = void 0, v = this.createSilentIframeClient(t.correlationId), [2, v.acquireToken(t)];
                    throw m;
                  });
                });
              }), [3, 3]) : [3, 1];
            case 1:
              return this.logger.verbose("acquireTokenSilent - attempting to acquire token from web flow"), l = this.createSilentCacheClient(t.correlationId), this.performanceClient.setPreQueueTime(F.InitializeSilentRequest, t.correlationId), [4, l.initializeSilentRequest(t, n)];
            case 2:
              u = p.sent(), f = ce(ce({}, t), {
                // set the request's CacheLookupPolicy to Default if it was not optionally passed in
                cacheLookupPolicy: t.cacheLookupPolicy || rr.Default
              }), this.performanceClient.setPreQueueTime(F.AcquireTokenFromCache, u.correlationId), a = this.acquireTokenFromCache(l, u, f).catch(function(m) {
                if (f.cacheLookupPolicy === rr.AccessToken)
                  throw m;
                return ct.blockReloadInHiddenIframes(), h.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_NETWORK_START, se.Silent, u), h.performanceClient.setPreQueueTime(F.AcquireTokenByRefreshToken, u.correlationId), h.acquireTokenByRefreshToken(u, f).catch(function(v) {
                  var C = v instanceof Co, E = v instanceof Gr, _ = v.errorCode === Jo.noTokensFoundError.code, R = v.errorCode === qr.INVALID_GRANT_ERROR;
                  if ((!C || !R || E || f.cacheLookupPolicy === rr.AccessTokenAndRefreshToken || f.cacheLookupPolicy === rr.RefreshToken) && f.cacheLookupPolicy !== rr.Skip && !_)
                    throw v;
                  return h.logger.verbose("Refresh token expired/invalid or CacheLookupPolicy is set to Skip, attempting acquire token by iframe.", t.correlationId), h.performanceClient.setPreQueueTime(F.AcquireTokenBySilentIframe, u.correlationId), h.acquireTokenBySilentIframe(u);
                });
              }), p.label = 3;
            case 3:
              return [2, a.then(function(m) {
                var v;
                return h.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_SUCCESS, se.Silent, m), (v = h.astsAsyncMeasurement) === null || v === void 0 || v.endMeasurement({
                  success: !0,
                  fromCache: m.fromCache,
                  isNativeBroker: m.fromNativeBroker,
                  requestId: m.requestId
                }), m;
              }).catch(function(m) {
                var v;
                throw h.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_FAILURE, se.Silent, null, m), (v = h.astsAsyncMeasurement) === null || v === void 0 || v.endMeasurement({
                  errorCode: m.errorCode,
                  subErrorCode: m.subError,
                  success: !1
                }), m;
              }).finally(function() {
                document.removeEventListener("visibilitychange", h.trackPageVisibility);
              })];
          }
        });
      });
    }, e;
  }(wA)
);
function on(r) {
  return Object.keys(r);
}
function Dl(r) {
  return r && typeof r == "object" && !Array.isArray(r);
}
function Fu(r, e) {
  const t = { ...r }, n = e;
  return Dl(r) && Dl(e) && Object.keys(e).forEach((o) => {
    Dl(n[o]) && o in r ? t[o] = Fu(t[o], n[o]) : t[o] = n[o];
  }), t;
}
function bA(r) {
  return r.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
function _A(r) {
  var e;
  return typeof r != "string" || !r.includes("var(--mantine-scale)") ? r : (e = r.match(/^calc\((.*?)\)$/)) == null ? void 0 : e[1].split("*")[0].trim();
}
function SA(r) {
  const e = _A(r);
  return typeof e == "number" ? e : typeof e == "string" ? e.includes("calc") || e.includes("var") ? e : e.includes("px") ? Number(e.replace("px", "")) : e.includes("rem") ? Number(e.replace("rem", "")) * 16 : e.includes("em") ? Number(e.replace("em", "")) * 16 : Number(e) : NaN;
}
function Ul(r) {
  return `calc(${r} * var(--mantine-scale))`;
}
function pm(r, { shouldScale: e = !1 } = {}) {
  function t(n) {
    if (n === 0 || n === "0")
      return "0";
    if (typeof n == "number") {
      const o = `${n / 16}${r}`;
      return e ? Ul(o) : o;
    }
    if (typeof n == "string") {
      if (n.startsWith("calc(") || n.startsWith("var(") || n.startsWith("clamp("))
        return n;
      if (n.includes(" "))
        return n.split(" ").map((a) => t(a)).join(" ");
      if (n.includes(r))
        return e ? Ul(n) : n;
      const o = n.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const a = `${Number(o) / 16}${r}`;
        return e ? Ul(a) : a;
      }
    }
    return n;
  }
  return t;
}
const $ = pm("rem", { shouldScale: !0 }), Wp = pm("em");
function Hu(r) {
  return Object.keys(r).reduce((e, t) => (r[t] !== void 0 && (e[t] = r[t]), e), {});
}
function gm(r) {
  return typeof r == "number" ? !0 : typeof r == "string" ? r.startsWith("calc(") || r.startsWith("var(") || r.includes(" ") && r.trim() !== "" ? !0 : /[0-9]/.test(r.trim().replace("-", "")[0]) : !1;
}
function ca(r) {
  return Array.isArray(r) || r === null ? !1 : typeof r == "object" ? r.type !== P.Fragment : !1;
}
function di(r) {
  const e = So(null);
  return [({ children: o, value: a }) => /* @__PURE__ */ P.createElement(e.Provider, { value: a }, o), () => {
    const o = jn(e);
    if (o === null)
      throw new Error(r);
    return o;
  }];
}
function TA(r = null) {
  const e = So(r);
  return [({ children: o, value: a }) => /* @__PURE__ */ P.createElement(e.Provider, { value: a }, o), () => jn(e)];
}
function jp(r, e) {
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
function IA(r, e, t) {
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
function AA(r, e, t) {
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
function RA(r, e, t) {
  return pu(r, t) === pu(e, t);
}
function kA({
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
    ).filter((E) => RA(l.currentTarget, E, r)), f = u.findIndex((E) => l.currentTarget === E), h = AA(f, u, n), p = IA(f, u, n), m = a === "rtl" ? p : h, v = a === "rtl" ? h : p;
    switch (l.key) {
      case "ArrowRight": {
        s === "horizontal" && (l.stopPropagation(), l.preventDefault(), u[m].focus(), o && u[m].click());
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
const PA = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function NA(r) {
  return PA[r];
}
const OA = () => {
};
function MA(r, e = { active: !0 }) {
  return typeof r != "function" || !e.active ? e.onKeyDown || OA : (t) => {
    var n;
    t.key === "Escape" && (r(t), (n = e.onTrigger) == null || n.call(e));
  };
}
function Ht(r, e = "size", t = !0) {
  if (r !== void 0)
    return gm(r) ? t ? $(r) : r : `var(--${e}-${r})`;
}
function Bu(r) {
  return Ht(r, "mantine-spacing");
}
function fi(r) {
  return r === void 0 ? "var(--mantine-radius-default)" : Ht(r, "mantine-radius");
}
function Pr(r) {
  return Ht(r, "mantine-font-size");
}
function xA(r) {
  if (r)
    return Ht(r, "mantine-shadow", !1);
}
function mm(r) {
  var e, t, n = "";
  if (typeof r == "string" || typeof r == "number")
    n += r;
  else if (typeof r == "object")
    if (Array.isArray(r))
      for (e = 0; e < r.length; e++)
        r[e] && (t = mm(r[e])) && (n && (n += " "), n += t);
    else
      for (e in r)
        r[e] && (n && (n += " "), n += e);
  return n;
}
function Rn() {
  for (var r, e, t = 0, n = ""; t < arguments.length; )
    (r = arguments[t++]) && (e = mm(r)) && (n && (n += " "), n += e);
  return n;
}
const LA = {};
function DA(r) {
  const e = {};
  return r.forEach((t) => {
    Object.entries(t).forEach(([n, o]) => {
      e[n] ? e[n] = Rn(e[n], o) : e[n] = o;
    });
  }), e;
}
function Qs({ theme: r, classNames: e, props: t, stylesCtx: n }) {
  const a = (Array.isArray(e) ? e : [e]).map(
    (s) => typeof s == "function" ? s(r, t, n) : s || LA
  );
  return DA(a);
}
function Ms({ theme: r, styles: e, props: t, stylesCtx: n }) {
  return (Array.isArray(e) ? e : [e]).reduce((a, s) => typeof s == "function" ? { ...a, ...s(r, t, n) } : { ...a, ...s }, {});
}
function vm() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function fo(r) {
  const e = Ke(r);
  return me(() => {
    e.current = r;
  }), ms(() => (...t) => {
    var n;
    return (n = e.current) == null ? void 0 : n.call(e, ...t);
  }, []);
}
function Js(r, e) {
  const t = fo(r), n = Ke(0);
  return me(() => () => window.clearTimeout(n.current), []), ze(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(t, e);
  }, [t, e]);
}
const Yp = ["mousedown", "touchstart"];
function UA(r, e, t) {
  const n = Ke();
  return me(() => {
    const o = (a) => {
      const { target: s } = a ?? {};
      if (Array.isArray(t)) {
        const l = (s == null ? void 0 : s.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(s) && s.tagName !== "HTML";
        t.every((f) => !!f && !a.composedPath().includes(f)) && !l && r();
      } else
        n.current && !n.current.contains(s) && r();
    };
    return (e || Yp).forEach((a) => document.addEventListener(a, o)), () => {
      (e || Yp).forEach((a) => document.removeEventListener(a, o));
    };
  }, [n, r, t]), n;
}
function FA(r, e) {
  try {
    return r.addEventListener("change", e), () => r.removeEventListener("change", e);
  } catch {
    return r.addListener(e), () => r.removeListener(e);
  }
}
function HA(r, e) {
  return typeof e == "boolean" ? e : typeof window < "u" && "matchMedia" in window ? window.matchMedia(r).matches : !1;
}
function BA(r, e, { getInitialValueInEffect: t } = {
  getInitialValueInEffect: !0
}) {
  const [n, o] = ge(
    t ? e : HA(r, e)
  ), a = Ke();
  return me(() => {
    if ("matchMedia" in window)
      return a.current = window.matchMedia(r), o(a.current.matches), FA(a.current, (s) => o(s.matches));
  }, [r]), n;
}
function KA(r, e, t = { leading: !1 }) {
  const [n, o] = ge(r), a = Ke(!1), s = Ke(null), l = Ke(!1), u = () => window.clearTimeout(s.current);
  return me(() => {
    a.current && (!l.current && t.leading ? (l.current = !0, o(r)) : (u(), s.current = window.setTimeout(() => {
      l.current = !1, o(r);
    }, e)));
  }, [r, t.leading, e]), me(() => (a.current = !0, u), []), [n, u];
}
const la = typeof document < "u" ? Ru : me;
function wo(r, e) {
  const t = Ke(!1);
  me(
    () => () => {
      t.current = !1;
    },
    []
  ), me(() => {
    if (t.current)
      return r();
    t.current = !0;
  }, e);
}
function qA({ opened: r, shouldReturnFocus: e = !0 }) {
  const t = Ke(), n = () => {
    var o;
    t.current && "focus" in t.current && typeof t.current.focus == "function" && ((o = t.current) == null || o.focus({ preventScroll: !0 }));
  };
  return wo(() => {
    let o = -1;
    const a = (s) => {
      s.key === "Tab" && window.clearTimeout(o);
    };
    return document.addEventListener("keydown", a), r ? t.current = document.activeElement : e && (o = window.setTimeout(n, 10)), () => {
      window.clearTimeout(o), document.removeEventListener("keydown", a);
    };
  }, [r, e]), n;
}
function $A(r, e = "body > :not(script)") {
  const t = vm(), n = Array.from(
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
const GA = /input|select|textarea|button|object/, ym = "a, input, select, textarea, button, object, [tabindex]";
function zA(r) {
  return r.style.display === "none";
}
function VA(r) {
  if (r.getAttribute("aria-hidden") || r.getAttribute("hidden") || r.getAttribute("type") === "hidden")
    return !1;
  let t = r;
  for (; t && !(t === document.body || t.nodeType === 11); ) {
    if (zA(t))
      return !1;
    t = t.parentNode;
  }
  return !0;
}
function Cm(r) {
  let e = r.getAttribute("tabindex");
  return e === null && (e = void 0), parseInt(e, 10);
}
function gu(r) {
  const e = r.nodeName.toLowerCase(), t = !Number.isNaN(Cm(r));
  return /* @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition */ (GA.test(e) && !r.disabled || r instanceof HTMLAnchorElement && r.href || t) && VA(r);
}
function wm(r) {
  const e = Cm(r);
  return (Number.isNaN(e) || e >= 0) && gu(r);
}
function WA(r) {
  return Array.from(r.querySelectorAll(ym)).filter(wm);
}
function jA(r, e) {
  const t = WA(r);
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
function YA(r = !0) {
  const e = Ke(), t = Ke(null), n = (a) => {
    let s = a.querySelector("[data-autofocus]");
    if (!s) {
      const l = Array.from(a.querySelectorAll(ym));
      s = l.find(wm) || l.find(gu) || null, !s && gu(a) && (s = a);
    }
    s && s.focus({ preventScroll: !0 });
  }, o = ze(
    (a) => {
      if (r) {
        if (a === null) {
          t.current && (t.current(), t.current = null);
          return;
        }
        t.current = $A(a), e.current !== a && (a ? (setTimeout(() => {
          a.getRootNode() && n(a);
        }), e.current = a) : e.current = null);
      }
    },
    [r]
  );
  return me(() => {
    if (!r)
      return;
    e.current && setTimeout(() => n(e.current));
    const a = (s) => {
      s.key === "Tab" && e.current && jA(e.current, s);
    };
    return document.addEventListener("keydown", a), () => {
      document.removeEventListener("keydown", a), t.current && t.current();
    };
  }, [r]), o;
}
const QA = P["useId".toString()] || (() => {
});
function JA() {
  const r = QA();
  return r ? `mantine-${r.replace(/:/g, "")}` : "";
}
function To(r) {
  const e = JA(), [t, n] = ge(e);
  return la(() => {
    n(vm());
  }, []), typeof r == "string" ? r : typeof window > "u" ? e : t;
}
function Em(r, e) {
  typeof r == "function" ? r(e) : typeof r == "object" && r !== null && "current" in r && (r.current = e);
}
function bm(...r) {
  return (e) => {
    r.forEach((t) => Em(t, e));
  };
}
function Or(...r) {
  return ze(bm(...r), r);
}
function Eo({
  value: r,
  defaultValue: e,
  finalValue: t,
  onChange: n = () => {
  }
}) {
  const [o, a] = ge(
    e !== void 0 ? e : t
  ), s = (l) => {
    a(l), n == null || n(l);
  };
  return r !== void 0 ? [r, n, !0] : [o, s, !1];
}
function _m(r, e) {
  return BA("(prefers-reduced-motion: reduce)", r, e);
}
const Sm = So(null);
function Ku() {
  const r = jn(Sm);
  if (!r)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return r;
}
function XA() {
  return Ku().cssVariablesResolver;
}
function ZA() {
  return Ku().classNamesPrefix;
}
function qu() {
  return Ku().getStyleNonce;
}
function eR(r) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(r);
}
function tR(r) {
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
function rR(r) {
  const [e, t, n, o] = r.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r: e, g: t, b: n, a: o || 1 };
}
function nR(r) {
  const e = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i, t = r.match(e);
  if (!t)
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  const n = parseInt(t[1], 10), o = parseInt(t[2], 10) / 100, a = parseInt(t[3], 10) / 100, s = t[5] ? parseFloat(t[5]) : void 0, l = (1 - Math.abs(2 * a - 1)) * o, u = n / 60, f = l * (1 - Math.abs(u % 2 - 1)), h = a - l / 2;
  let p, m, v;
  return u >= 0 && u < 1 ? (p = l, m = f, v = 0) : u >= 1 && u < 2 ? (p = f, m = l, v = 0) : u >= 2 && u < 3 ? (p = 0, m = l, v = f) : u >= 3 && u < 4 ? (p = 0, m = f, v = l) : u >= 4 && u < 5 ? (p = f, m = 0, v = l) : (p = l, m = 0, v = f), {
    r: Math.round((p + h) * 255),
    g: Math.round((m + h) * 255),
    b: Math.round((v + h) * 255),
    a: s || 1
  };
}
function Tm(r) {
  return eR(r) ? tR(r) : r.startsWith("rgb") ? rR(r) : r.startsWith("hsl") ? nR(r) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function ls(r, e) {
  if (r.startsWith("var("))
    return r;
  const { r: t, g: n, b: o, a } = Tm(r), s = 1 - e, l = (u) => Math.round(u * s);
  return `rgba(${l(t)}, ${l(n)}, ${l(o)}, ${a})`;
}
function mu(r, e) {
  return typeof r.primaryShade == "number" ? r.primaryShade : e === "dark" ? r.primaryShade.dark : r.primaryShade.light;
}
function Xs({
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
  const t = Xs({ color: r || e.primaryColor, theme: e });
  return t.variable ? `var(${t.variable})` : r;
}
function Qp(r, e) {
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
  const { r: t, g: n, b: o } = Tm(r);
  return `rgba(${t}, ${n}, ${o}, ${e})`;
}
const oR = ({
  color: r,
  theme: e,
  variant: t,
  gradient: n
}) => {
  const o = Xs({ color: r, theme: e });
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
    background: Qp(n, e),
    hover: Qp(n, e),
    color: "var(--mantine-color-white)",
    border: "none"
  } : t === "default" ? {
    background: "var(--mantine-color-default)",
    hover: "var(--mantine-color-default-hover)",
    color: "var(--mantine-color-default-color)",
    border: `${$(1)} solid var(--mantine-color-default-border)`
  } : {};
}, iR = {
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
}, Jp = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", $u = {
  scale: 1,
  fontSmoothing: !0,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: iR,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: oR,
  fontFamily: Jp,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: !1,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: Jp,
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
function Xp(r) {
  return r === "auto" || r === "dark" || r === "light";
}
function aR({
  key: r = "mantine-color-scheme-value"
} = {}) {
  let e;
  return {
    get: (t) => {
      if (typeof window > "u")
        return t;
      try {
        const n = window.localStorage.getItem(r);
        return Xp(n) ? n : t;
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
        n.storageArea === window.localStorage && n.key === r && Xp(n.newValue) && t(n.newValue);
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
const sR = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", Zp = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function Fl(r) {
  return r < 0 || r > 9 ? !1 : parseInt(r.toString(), 10) === r;
}
function eg(r) {
  if (!(r.primaryColor in r.colors))
    throw new Error(sR);
  if (typeof r.primaryShade == "object" && (!Fl(r.primaryShade.dark) || !Fl(r.primaryShade.light)))
    throw new Error(Zp);
  if (typeof r.primaryShade == "number" && !Fl(r.primaryShade))
    throw new Error(Zp);
}
function cR(r, e) {
  var n;
  if (!e)
    return eg(r), r;
  const t = Fu(r, e);
  return e.fontFamily && !((n = e.headings) != null && n.fontFamily) && (t.headings.fontFamily = e.fontFamily), eg(t), t;
}
const Gu = So(null), lR = () => jn(Gu) || $u;
function Yn() {
  const r = jn(Gu);
  if (!r)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return r;
}
function Im({
  theme: r,
  children: e,
  inherit: t = !0
}) {
  const n = lR(), o = ms(
    () => cR(t ? n : $u, r),
    [r, n, t]
  );
  return /* @__PURE__ */ P.createElement(Gu.Provider, { value: o }, e);
}
Im.displayName = "@mantine/core/MantineThemeProvider";
function uR() {
  const r = Yn(), e = qu(), t = on(r.breakpoints).reduce((n, o) => {
    const a = SA(r.breakpoints[o]);
    return `${n}@media (max-width: ${Wp(
      a - 0.1
    )}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${Wp(
      a
    )}) {.mantine-hidden-from-${o} {display: none !important;}}`;
  }, "");
  return /* @__PURE__ */ P.createElement(
    "style",
    {
      "data-mantine-styles": "classes",
      nonce: e == null ? void 0 : e(),
      dangerouslySetInnerHTML: { __html: t }
    }
  );
}
function Hl(r) {
  return Object.entries(r).map(([e, t]) => `${e}: ${t};`).join("");
}
function Bl(r, e) {
  return (Array.isArray(r) ? r : [r]).reduce((n, o) => `${o}{${n}}`, e);
}
function dR(r, e) {
  const t = Hl(r.variables), n = t ? Bl(e, t) : "", o = Hl(r.dark), a = o ? Bl(`${e}[data-mantine-color-scheme="dark"]`, o) : "", s = Hl(r.light), l = s ? Bl(`${e}[data-mantine-color-scheme="light"]`, s) : "";
  return `${n}${a}${l}`;
}
function zo(r, e, t) {
  on(e).forEach(
    (n) => Object.assign(r, { [`--mantine-${t}-${n}`]: e[n] })
  );
}
const Am = (r) => {
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
  zo(o.variables, r.breakpoints, "breakpoint"), zo(o.variables, r.spacing, "spacing"), zo(o.variables, r.fontSizes, "font-size"), zo(o.variables, r.lineHeights, "line-height"), zo(o.variables, r.shadows, "shadow"), zo(o.variables, r.radius, "radius"), r.colors[r.primaryColor].forEach((s, l) => {
    o.variables[`--mantine-primary-color-${l}`] = `var(--mantine-color-${r.primaryColor}-${l})`;
  }), on(r.colors).forEach((s) => {
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
  return on(a).forEach((s) => {
    o.variables[`--mantine-${s}-font-size`] = a[s].fontSize, o.variables[`--mantine-${s}-line-height`] = a[s].lineHeight, o.variables[`--mantine-${s}-font-weight`] = a[s].fontWeight || r.headings.fontWeight;
  }), o;
};
function fR({ theme: r, generator: e }) {
  const t = Am(r), n = e == null ? void 0 : e(r);
  return n ? Fu(t, n) : t;
}
const Kl = Am($u);
function hR(r) {
  const e = {
    variables: {},
    light: {},
    dark: {}
  };
  return on(r.variables).forEach((t) => {
    Kl.variables[t] !== r.variables[t] && (e.variables[t] = r.variables[t]);
  }), on(r.light).forEach((t) => {
    Kl.light[t] !== r.light[t] && (e.light[t] = r.light[t]);
  }), on(r.dark).forEach((t) => {
    Kl.dark[t] !== r.dark[t] && (e.dark[t] = r.dark[t]);
  }), e;
}
function pR(r) {
  return `
  ${r}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${r}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function Rm({ cssVariablesSelector: r }) {
  const e = Yn(), t = qu(), n = XA(), o = fR({ theme: e, generator: n }), a = r === ":root", s = a ? hR(o) : o, l = dR(s, r);
  return l ? /* @__PURE__ */ P.createElement(
    "style",
    {
      "data-mantine-styles": !0,
      nonce: t == null ? void 0 : t(),
      dangerouslySetInnerHTML: {
        __html: `${l}${a ? "" : pR(r)}`
      }
    }
  ) : null;
}
Rm.displayName = "@mantine/CssVariables";
function gR() {
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
function mR({
  manager: r,
  defaultColorScheme: e,
  getRootElement: t,
  forceColorScheme: n
}) {
  const o = Ke(), [a, s] = ge(() => r.get(e)), l = n || a, u = ze(
    (h) => {
      n || (Di(h, t), s(h), r.set(h));
    },
    [r.set, l, n]
  ), f = ze(() => {
    s(e), Di(e, t), r.clear();
  }, [r.clear, e]);
  return me(() => (r.subscribe(u), r.unsubscribe), [r.subscribe, r.unsubscribe]), la(() => {
    Di(r.get(e), t);
  }, []), me(() => {
    var p;
    if (n)
      return Di(n, t), () => {
      };
    o.current = window.matchMedia("(prefers-color-scheme: dark)");
    const h = (m) => {
      a === "auto" && Di(m.matches ? "dark" : "light", t);
    };
    return (p = o.current) == null || p.addEventListener("change", h), () => {
      var m;
      return (m = o.current) == null ? void 0 : m.removeEventListener("change", h);
    };
  }, [a, n]), { colorScheme: l, setColorScheme: u, clearColorScheme: f };
}
function vR({
  respectReducedMotion: r,
  getRootElement: e
}) {
  la(() => {
    var t;
    r && ((t = e()) == null || t.setAttribute("data-respect-reduced-motion", "true"));
  }, [r]);
}
gR();
function km({
  theme: r,
  children: e,
  getStyleNonce: t,
  withCssVariables: n = !0,
  cssVariablesSelector: o = ":root",
  classNamesPrefix: a = "mantine",
  colorSchemeManager: s = aR(),
  defaultColorScheme: l = "light",
  getRootElement: u = () => document.documentElement,
  cssVariablesResolver: f,
  forceColorScheme: h
}) {
  const { colorScheme: p, setColorScheme: m, clearColorScheme: v } = mR({
    defaultColorScheme: l,
    forceColorScheme: h,
    manager: s,
    getRootElement: u
  });
  return vR({
    respectReducedMotion: (r == null ? void 0 : r.respectReducedMotion) || !1,
    getRootElement: u
  }), /* @__PURE__ */ P.createElement(
    Sm.Provider,
    {
      value: {
        colorSchemeManager: s,
        colorScheme: p,
        setColorScheme: m,
        clearColorScheme: v,
        getRootElement: u,
        classNamesPrefix: a,
        getStyleNonce: t,
        cssVariablesResolver: f,
        cssVariablesSelector: o
      }
    },
    /* @__PURE__ */ P.createElement(Im, { theme: r }, n && /* @__PURE__ */ P.createElement(Rm, { cssVariablesSelector: o }), /* @__PURE__ */ P.createElement(uR, null), e)
  );
}
km.displayName = "@mantine/core/MantineProvider";
function Pm({
  classNames: r,
  styles: e,
  props: t,
  stylesCtx: n
}) {
  const o = Yn();
  return {
    resolvedClassNames: Qs({
      theme: o,
      classNames: r,
      props: t,
      stylesCtx: n || void 0
    }),
    resolvedStyles: Ms({
      theme: o,
      styles: e,
      props: t,
      stylesCtx: n || void 0
    })
  };
}
const yR = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function CR({ theme: r, options: e, unstyled: t }) {
  return Rn(
    (e == null ? void 0 : e.focusable) && !t && (r.focusClassName || yR[r.focusRing]),
    (e == null ? void 0 : e.active) && !t && r.activeClassName
  );
}
function wR({
  selector: r,
  stylesCtx: e,
  options: t,
  props: n,
  theme: o
}) {
  return Qs({
    theme: o,
    classNames: t == null ? void 0 : t.classNames,
    props: (t == null ? void 0 : t.props) || n,
    stylesCtx: e
  })[r];
}
function ER({
  selector: r,
  stylesCtx: e,
  theme: t,
  classNames: n,
  props: o
}) {
  return Qs({ theme: t, classNames: n, props: o, stylesCtx: e })[r];
}
function bR({ rootSelector: r, selector: e, className: t }) {
  return r === e ? t : void 0;
}
function _R({ selector: r, classes: e, unstyled: t }) {
  return t ? void 0 : e[r];
}
function SR({
  themeName: r,
  classNamesPrefix: e,
  selector: t
}) {
  return r.map((n) => `${e}-${n}-${t}`);
}
function TR({
  themeName: r,
  theme: e,
  selector: t,
  props: n,
  stylesCtx: o
}) {
  return r.map(
    (a) => {
      var s, l;
      return (l = Qs({
        theme: e,
        classNames: (s = e.components[a]) == null ? void 0 : s.classNames,
        props: n,
        stylesCtx: o
      })) == null ? void 0 : l[t];
    }
  );
}
function IR({
  options: r,
  classes: e,
  selector: t,
  unstyled: n
}) {
  return r != null && r.variant && !n ? e[`${t}--${r.variant}`] : void 0;
}
function AR({
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
  return Rn(
    CR({ theme: r, options: e, unstyled: l }),
    TR({ theme: r, themeName: t, selector: n, props: h, stylesCtx: p }),
    IR({ options: e, classes: s, selector: n, unstyled: l }),
    ER({ selector: n, stylesCtx: p, theme: r, classNames: a, props: h }),
    wR({ selector: n, stylesCtx: p, options: e, props: h, theme: r }),
    bR({ rootSelector: f, selector: n, className: u }),
    _R({ selector: n, classes: s, unstyled: l }),
    SR({ themeName: t, classNamesPrefix: o, selector: n }),
    e == null ? void 0 : e.className
  );
}
function RR({
  theme: r,
  themeName: e,
  props: t,
  stylesCtx: n,
  selector: o
}) {
  return e.map(
    (a) => {
      var s;
      return Ms({
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
function kR(r) {
  return r.reduce((e, t) => (t && Object.keys(t).forEach((n) => {
    e[n] = { ...e[n], ...Hu(t[n]) };
  }), e), {});
}
function PR({
  vars: r,
  varsResolver: e,
  theme: t,
  props: n,
  stylesCtx: o,
  selector: a,
  themeName: s
}) {
  var l;
  return (l = kR([
    e == null ? void 0 : e(t, n, o),
    ...s.map((u) => {
      var f, h, p;
      return (p = (h = (f = t.components) == null ? void 0 : f[u]) == null ? void 0 : h.vars) == null ? void 0 : p.call(h, t, n, o);
    }),
    r == null ? void 0 : r(t, n, o)
  ])) == null ? void 0 : l[a];
}
function NR({
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
    ...RR({ theme: r, themeName: e, props: o, stylesCtx: a, selector: t }),
    ...Ms({ theme: r, styles: l, props: o, stylesCtx: a })[t],
    ...Ms({ theme: r, styles: n == null ? void 0 : n.styles, props: (n == null ? void 0 : n.props) || o, stylesCtx: a })[t],
    ...PR({ theme: r, props: o, stylesCtx: a, vars: f, varsResolver: h, selector: t, themeName: e }),
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
  const m = Yn(), v = ZA(), C = (Array.isArray(r) ? r : [r]).filter((E) => E);
  return (E, _) => ({
    className: AR({
      theme: m,
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
    style: NR({
      theme: m,
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
  const n = Yn(), o = (s = n.components[r]) == null ? void 0 : s.defaultProps, a = typeof o == "function" ? o(n) : o;
  return { ...e, ...a, ...Hu(t) };
}
function tg(r) {
  return on(r).reduce(
    (e, t) => r[t] !== void 0 ? `${e}${bA(t)}:${r[t]};` : e,
    ""
  ).trim();
}
function OR({ selector: r, styles: e, media: t }) {
  const n = e ? tg(e) : "", o = Array.isArray(t) ? t.map((a) => `@media${a.query}{${r}{${tg(a.styles)}}}`) : [];
  return `${n ? `${r}{${n}}` : ""}${o.join("")}`.trim();
}
function MR({ selector: r, styles: e, media: t }) {
  const n = qu();
  return /* @__PURE__ */ P.createElement(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: n == null ? void 0 : n(),
      dangerouslySetInnerHTML: { __html: OR({ selector: r, styles: e, media: t }) }
    }
  );
}
function Zs(r) {
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
    pb: m,
    pl: v,
    pr: C,
    bg: E,
    c: _,
    opacity: R,
    ff: A,
    fz: S,
    fw: I,
    lts: O,
    ta: L,
    lh: q,
    fs: U,
    tt: Y,
    td: Q,
    w: de,
    miw: ee,
    maw: fe,
    h: oe,
    mih: we,
    mah: J,
    bgsz: ie,
    bgp: re,
    bgr: Pe,
    bga: Qe,
    pos: ot,
    top: dt,
    left: Yr,
    bottom: cn,
    right: jt,
    inset: ir,
    display: ln,
    hiddenFrom: ar,
    visibleFrom: Dr,
    lightHidden: un,
    darkHidden: Kt,
    ...Cr
  } = r;
  return { styleProps: Hu({
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
    pb: m,
    pl: v,
    pr: C,
    bg: E,
    c: _,
    opacity: R,
    ff: A,
    fz: S,
    fw: I,
    lts: O,
    ta: L,
    lh: q,
    fs: U,
    tt: Y,
    td: Q,
    w: de,
    miw: ee,
    maw: fe,
    h: oe,
    mih: we,
    mah: J,
    bgsz: ie,
    bgp: re,
    bgr: Pe,
    bga: Qe,
    pos: ot,
    top: dt,
    left: Yr,
    bottom: cn,
    right: jt,
    inset: ir,
    display: ln,
    hiddenFrom: ar,
    visibleFrom: Dr,
    lightHidden: un,
    darkHidden: Kt
  }), rest: Cr };
}
const xR = {
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
function LR(r, e) {
  const t = Xs({ color: r, theme: e });
  return t.color === "dimmed" ? "var(--mantine-color-dimmed)" : t.color === "bright" ? "var(--mantine-color-bright)" : t.isThemeColor && t.shade === void 0 ? `var(--mantine-color-${t.color}-text)` : t.variable ? `var(${t.variable})` : t.color;
}
function DR(r, e) {
  return typeof r == "string" && r in e.fontSizes ? `var(--mantine-font-size-${r})` : typeof r == "number" || typeof r == "string" ? $(r) : r;
}
function UR(r) {
  return r;
}
function FR(r, e) {
  return typeof r == "string" && r in e.lineHeights ? `var(--mantine-line-height-${r})` : r;
}
function HR(r) {
  return typeof r == "number" ? $(r) : r;
}
function BR(r, e) {
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
const ql = {
  color: LR,
  fontSize: DR,
  spacing: BR,
  identity: UR,
  size: HR,
  lineHeight: FR
};
function rg(r) {
  return r.replace("(min-width: ", "").replace("em)", "");
}
function KR({
  media: r,
  ...e
}) {
  const n = Object.keys(r).sort((o, a) => Number(rg(o)) - Number(rg(a))).map((o) => ({ query: o, styles: r[o] }));
  return { ...e, media: n };
}
function qR(r) {
  if (typeof r != "object" || r === null)
    return !1;
  const e = Object.keys(r);
  return !(e.length === 1 && e[0] === "base");
}
function $R(r) {
  return typeof r == "object" && r !== null ? "base" in r ? r.base : void 0 : r;
}
function GR(r) {
  return typeof r == "object" && r !== null ? on(r).filter((e) => e !== "base") : [];
}
function zR(r, e) {
  return typeof r == "object" && r !== null && e in r ? r[e] : r;
}
function VR({
  styleProps: r,
  data: e,
  theme: t
}) {
  return KR(
    on(r).reduce(
      (n, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom")
          return n;
        const a = e[o], s = Array.isArray(a.property) ? a.property : [a.property], l = $R(r[o]);
        if (!qR(r[o]))
          return s.forEach((f) => {
            n.inlineStyles[f] = ql[a.type](l, t);
          }), n;
        n.hasResponsiveStyles = !0;
        const u = GR(r[o]);
        return s.forEach((f) => {
          l && (n.styles[f] = ql[a.type](l, t)), u.forEach((h) => {
            const p = `(min-width: ${t.breakpoints[h]})`;
            n.media[p] = {
              ...n.media[p],
              [f]: ql[a.type](
                zR(r[o], h),
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
function WR() {
  return `__m__-${$g().replace(/:/g, "")}`;
}
function Nm(r, e) {
  return Array.isArray(r) ? [...r].reduce(
    (t, n) => ({ ...t, ...Nm(n, e) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function Om(r) {
  return r.startsWith("data-") ? r : `data-${r}`;
}
function jR(r) {
  return Object.keys(r).reduce((e, t) => {
    const n = r[t];
    return n === void 0 || n === "" || n === !1 || n === null || (e[Om(t)] = r[t]), e;
  }, {});
}
function Mm(r) {
  return r ? typeof r == "string" ? { [Om(r)]: !0 } : Array.isArray(r) ? [...r].reduce(
    (e, t) => ({ ...e, ...Mm(t) }),
    {}
  ) : jR(r) : null;
}
function yu(r, e) {
  return Array.isArray(r) ? [...r].reduce(
    (t, n) => ({ ...t, ...yu(n, e) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function YR({
  theme: r,
  style: e,
  vars: t,
  styleProps: n
}) {
  const o = yu(e, r), a = yu(t, r);
  return { ...o, ...a, ...n };
}
const xm = lt(
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
    ...m
  }, v) => {
    const C = Yn(), E = r || "div", { styleProps: _, rest: R } = Zs(m), A = WR(), S = VR({
      styleProps: _,
      theme: C,
      data: xR
    }), I = {
      ref: v,
      style: YR({
        theme: C,
        style: e,
        vars: t,
        styleProps: S.inlineStyles
      }),
      className: Rn(n, {
        [A]: S.hasResponsiveStyles,
        "mantine-light-hidden": f,
        "mantine-dark-hidden": h,
        [`mantine-hidden-from-${l}`]: l,
        [`mantine-visible-from-${u}`]: u
      }),
      "data-variant": o,
      "data-size": gm(s) ? void 0 : s || void 0,
      ...Mm(a),
      ...R
    };
    return /* @__PURE__ */ P.createElement(P.Fragment, null, S.hasResponsiveStyles && /* @__PURE__ */ P.createElement(
      MR,
      {
        selector: `.${A}`,
        styles: S.styles,
        media: S.media
      }
    ), typeof p == "function" ? p(I) : /* @__PURE__ */ P.createElement(E, { ...I }));
  }
);
xm.displayName = "@mantine/core/Box";
const ke = xm;
function Lm(r) {
  return r;
}
function Ue(r) {
  const e = lt(r);
  return e.extend = Lm, e;
}
function ua(r) {
  const e = lt(r);
  return e.extend = Lm, e;
}
const QR = So({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function zu() {
  return jn(QR);
}
function JR(r) {
  if (!r || typeof r == "string")
    return 0;
  const e = r / 36;
  return Math.round((4 + 15 * e ** 0.25 + e / 5) * 10);
}
function $l(r) {
  return r != null && r.current ? r.current.scrollHeight : "auto";
}
const Ui = typeof window < "u" && window.requestAnimationFrame;
function XR({
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
  }, [l, u] = ge(n ? {} : s), f = (C) => {
    r0(() => u(C));
  }, h = (C) => {
    f((E) => ({ ...E, ...C }));
  };
  function p(C) {
    return {
      transition: `height ${r || JR(C)}ms ${e}`
    };
  }
  wo(() => {
    typeof Ui == "function" && Ui(n ? () => {
      h({ willChange: "height", display: "block", overflow: "hidden" }), Ui(() => {
        const C = $l(o);
        h({ ...p(C), height: C });
      });
    } : () => {
      const C = $l(o);
      h({ ...p(C), willChange: "height", height: C }), Ui(() => h({ height: a, overflow: "hidden" }));
    });
  }, [n]);
  const m = (C) => {
    if (!(C.target !== o.current || C.propertyName !== "height"))
      if (n) {
        const E = $l(o);
        E === l.height ? f({}) : h({ height: E }), t();
      } else
        l.height === a && (f(s), t());
  };
  function v({ style: C = {}, refKey: E = "ref", ..._ } = {}) {
    const R = _[E];
    return {
      "aria-hidden": !n,
      ..._,
      [E]: bm(o, R),
      onTransitionEnd: m,
      style: { boxSizing: "border-box", ...C, ...l }
    };
  }
  return v;
}
const ZR = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: !0
}, Dm = Ue((r, e) => {
  const {
    children: t,
    in: n,
    transitionDuration: o,
    transitionTimingFunction: a,
    style: s,
    onTransitionEnd: l,
    animateOpacity: u,
    ...f
  } = Ce("Collapse", ZR, r), h = Yn(), p = _m(), v = (h.respectReducedMotion ? p : !1) ? 0 : o, C = XR({
    opened: n,
    transitionDuration: v,
    transitionTimingFunction: a,
    onTransitionEnd: l
  });
  return v === 0 ? n ? /* @__PURE__ */ P.createElement(ke, { ...f }, t) : null : /* @__PURE__ */ P.createElement(ke, { ...C({ style: Nm(s, h), ref: e, ...f }) }, /* @__PURE__ */ P.createElement(
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
Dm.displayName = "@mantine/core/Collapse";
const [ek, Mr] = di(
  "ScrollArea.Root component was not found in tree"
);
function ii(r, e) {
  const t = fo(e);
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
const tk = P.forwardRef((r, e) => {
  const { style: t, ...n } = r, o = Mr(), [a, s] = P.useState(0), [l, u] = P.useState(0), f = !!(a && l);
  return ii(o.scrollbarX, () => {
    var p;
    const h = ((p = o.scrollbarX) == null ? void 0 : p.offsetHeight) || 0;
    o.onCornerHeightChange(h), u(h);
  }), ii(o.scrollbarY, () => {
    var p;
    const h = ((p = o.scrollbarY) == null ? void 0 : p.offsetWidth) || 0;
    o.onCornerWidthChange(h), s(h);
  }), f ? /* @__PURE__ */ P.createElement("div", { ...n, ref: e, style: { ...t, width: a, height: l } }) : null;
}), rk = P.forwardRef(
  (r, e) => {
    const t = Mr(), n = !!(t.scrollbarX && t.scrollbarY);
    return t.type !== "scroll" && n ? /* @__PURE__ */ P.createElement(tk, { ...r, ref: e }) : null;
  }
), nk = {
  scrollHideDelay: 1e3,
  type: "hover"
}, Um = lt((r, e) => {
  const t = Ce("ScrollAreaRoot", nk, r), { type: n, scrollHideDelay: o, scrollbars: a, ...s } = t, [l, u] = ge(null), [f, h] = ge(null), [p, m] = ge(null), [v, C] = ge(null), [E, _] = ge(null), [R, A] = ge(0), [S, I] = ge(0), [O, L] = ge(!1), [q, U] = ge(!1), Y = Or(e, (Q) => u(Q));
  return /* @__PURE__ */ P.createElement(
    ek,
    {
      value: {
        type: n,
        scrollHideDelay: o,
        scrollArea: l,
        viewport: f,
        onViewportChange: h,
        content: p,
        onContentChange: m,
        scrollbarX: v,
        onScrollbarXChange: C,
        scrollbarXEnabled: O,
        onScrollbarXEnabledChange: L,
        scrollbarY: E,
        onScrollbarYChange: _,
        scrollbarYEnabled: q,
        onScrollbarYEnabledChange: U,
        onCornerWidthChange: A,
        onCornerHeightChange: I
      }
    },
    /* @__PURE__ */ P.createElement(
      ke,
      {
        ...s,
        ref: Y,
        __vars: {
          "--sa-corner-width": a !== "xy" ? "0px" : `${R}px`,
          "--sa-corner-height": a !== "xy" ? "0px" : `${S}px`
        }
      }
    )
  );
});
Um.displayName = "@mantine/core/ScrollAreaRoot";
function Fm(r, e) {
  const t = r / e;
  return Number.isNaN(t) ? 0 : t;
}
function ec(r) {
  const e = Fm(r.viewport, r.content), t = r.scrollbar.paddingStart + r.scrollbar.paddingEnd, n = (r.scrollbar.size - t) * e;
  return Math.max(n, 18);
}
function Hm(r, e) {
  return (t) => {
    if (r[0] === r[1] || e[0] === e[1])
      return e[0];
    const n = (e[1] - e[0]) / (r[1] - r[0]);
    return e[0] + n * (t - r[0]);
  };
}
function ok(r, [e, t]) {
  return Math.min(t, Math.max(e, r));
}
function ng(r, e, t = "ltr") {
  const n = ec(e), o = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, a = e.scrollbar.size - o, s = e.content - e.viewport, l = a - n, u = t === "ltr" ? [0, s] : [s * -1, 0], f = ok(r, u);
  return Hm([0, s], [0, l])(f);
}
function ik(r, e, t, n = "ltr") {
  const o = ec(t), a = o / 2, s = e || a, l = o - s, u = t.scrollbar.paddingStart + s, f = t.scrollbar.size - t.scrollbar.paddingEnd - l, h = t.content - t.viewport, p = n === "ltr" ? [0, h] : [h * -1, 0];
  return Hm([u, f], p)(r);
}
function Bm(r, e) {
  return r > 0 && r < e;
}
function xs(r) {
  return r ? parseInt(r, 10) : 0;
}
function vo(r, e, { checkForDefaultPrevented: t = !0 } = {}) {
  return (n) => {
    r == null || r(n), (t === !1 || !n.defaultPrevented) && (e == null || e(n));
  };
}
const [ak, Km] = di(
  "ScrollAreaScrollbar was not found in tree"
), qm = lt((r, e) => {
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
  } = r, m = Mr(), [v, C] = P.useState(null), E = Or(e, (U) => C(U)), _ = P.useRef(null), R = P.useRef(""), { viewport: A } = m, S = t.content - t.viewport, I = fo(f), O = fo(l), L = Js(h, 10), q = (U) => {
    if (_.current) {
      const Y = U.clientX - _.current.left, Q = U.clientY - _.current.top;
      u({ x: Y, y: Q });
    }
  };
  return me(() => {
    const U = (Y) => {
      const Q = Y.target;
      (v == null ? void 0 : v.contains(Q)) && I(Y, S);
    };
    return document.addEventListener("wheel", U, { passive: !1 }), () => document.removeEventListener("wheel", U, { passive: !1 });
  }, [A, v, S, I]), me(O, [t, O]), ii(v, L), ii(m.content, L), /* @__PURE__ */ P.createElement(
    ak,
    {
      value: {
        scrollbar: v,
        hasThumb: n,
        onThumbChange: fo(o),
        onThumbPointerUp: fo(a),
        onThumbPositionChange: O,
        onThumbPointerDown: fo(s)
      }
    },
    /* @__PURE__ */ P.createElement(
      "div",
      {
        ...p,
        ref: E,
        style: { position: "absolute", ...p.style },
        onPointerDown: vo(r.onPointerDown, (U) => {
          U.button === 0 && (U.target.setPointerCapture(U.pointerId), _.current = v.getBoundingClientRect(), R.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", q(U));
        }),
        onPointerMove: vo(r.onPointerMove, q),
        onPointerUp: vo(r.onPointerUp, (U) => {
          const Y = U.target;
          Y.hasPointerCapture(U.pointerId) && Y.releasePointerCapture(U.pointerId), document.body.style.webkitUserSelect = R.current, _.current = null;
        })
      }
    )
  );
}), sk = lt(
  (r, e) => {
    const { sizes: t, onSizesChange: n, style: o, ...a } = r, s = Mr(), [l, u] = ge(), f = Ke(null), h = Or(e, f, s.onScrollbarXChange);
    return me(() => {
      f.current && u(getComputedStyle(f.current));
    }, [f]), /* @__PURE__ */ P.createElement(
      qm,
      {
        "data-orientation": "horizontal",
        ...a,
        ref: h,
        sizes: t,
        style: {
          ...o,
          "--sa-thumb-width": `${ec(t)}px`
        },
        onThumbPointerDown: (p) => r.onThumbPointerDown(p.x),
        onDragScroll: (p) => r.onDragScroll(p.x),
        onWheelScroll: (p, m) => {
          if (s.viewport) {
            const v = s.viewport.scrollLeft + p.deltaX;
            r.onWheelScroll(v), Bm(v, m) && p.preventDefault();
          }
        },
        onResize: () => {
          f.current && s.viewport && l && n({
            content: s.viewport.scrollWidth,
            viewport: s.viewport.offsetWidth,
            scrollbar: {
              size: f.current.clientWidth,
              paddingStart: xs(l.paddingLeft),
              paddingEnd: xs(l.paddingRight)
            }
          });
        }
      }
    );
  }
), ck = lt(
  (r, e) => {
    const { sizes: t, onSizesChange: n, style: o, ...a } = r, s = Mr(), [l, u] = P.useState(), f = Ke(null), h = Or(e, f, s.onScrollbarYChange);
    return me(() => {
      f.current && u(getComputedStyle(f.current));
    }, [f]), /* @__PURE__ */ P.createElement(
      qm,
      {
        ...a,
        "data-orientation": "vertical",
        ref: h,
        sizes: t,
        style: {
          "--sa-thumb-height": `${ec(t)}px`,
          ...o
        },
        onThumbPointerDown: (p) => r.onThumbPointerDown(p.y),
        onDragScroll: (p) => r.onDragScroll(p.y),
        onWheelScroll: (p, m) => {
          if (s.viewport) {
            const v = s.viewport.scrollTop + p.deltaY;
            r.onWheelScroll(v), Bm(v, m) && p.preventDefault();
          }
        },
        onResize: () => {
          f.current && s.viewport && l && n({
            content: s.viewport.scrollHeight,
            viewport: s.viewport.offsetHeight,
            scrollbar: {
              size: f.current.clientHeight,
              paddingStart: xs(l.paddingTop),
              paddingEnd: xs(l.paddingBottom)
            }
          });
        }
      }
    );
  }
), Vu = lt((r, e) => {
  const { orientation: t = "vertical", ...n } = r, { dir: o } = zu(), a = Mr(), s = Ke(null), l = Ke(0), [u, f] = ge({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), h = Fm(u.viewport, u.content), p = {
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
  }, m = (v, C) => ik(v, l.current, u, C);
  return t === "horizontal" ? /* @__PURE__ */ P.createElement(
    sk,
    {
      ...p,
      ref: e,
      onThumbPositionChange: () => {
        if (a.viewport && s.current) {
          const v = a.viewport.scrollLeft, C = ng(v, u, o);
          s.current.style.transform = `translate3d(${C}px, 0, 0)`;
        }
      },
      onWheelScroll: (v) => {
        a.viewport && (a.viewport.scrollLeft = v);
      },
      onDragScroll: (v) => {
        a.viewport && (a.viewport.scrollLeft = m(v, o));
      }
    }
  ) : t === "vertical" ? /* @__PURE__ */ P.createElement(
    ck,
    {
      ...p,
      ref: e,
      onThumbPositionChange: () => {
        if (a.viewport && s.current) {
          const v = a.viewport.scrollTop, C = ng(v, u);
          s.current.style.transform = `translate3d(0, ${C}px, 0)`;
        }
      },
      onWheelScroll: (v) => {
        a.viewport && (a.viewport.scrollTop = v);
      },
      onDragScroll: (v) => {
        a.viewport && (a.viewport.scrollTop = m(v));
      }
    }
  ) : null;
}), $m = lt(
  (r, e) => {
    const t = Mr(), { forceMount: n, ...o } = r, [a, s] = ge(!1), l = r.orientation === "horizontal", u = Js(() => {
      if (t.viewport) {
        const f = t.viewport.offsetWidth < t.viewport.scrollWidth, h = t.viewport.offsetHeight < t.viewport.scrollHeight;
        s(l ? f : h);
      }
    }, 10);
    return ii(t.viewport, u), ii(t.content, u), n || a ? /* @__PURE__ */ P.createElement(
      Vu,
      {
        "data-state": a ? "visible" : "hidden",
        ...o,
        ref: e
      }
    ) : null;
  }
), lk = lt(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = Mr(), [a, s] = ge(!1);
    return me(() => {
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
    }, [o.scrollArea, o.scrollHideDelay]), t || a ? /* @__PURE__ */ P.createElement(
      $m,
      {
        "data-state": a ? "visible" : "hidden",
        ...n,
        ref: e
      }
    ) : null;
  }
), uk = lt(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = Mr(), a = r.orientation === "horizontal", [s, l] = ge("hidden"), u = Js(() => l("idle"), 100);
    return me(() => {
      if (s === "idle") {
        const f = window.setTimeout(() => l("hidden"), o.scrollHideDelay);
        return () => window.clearTimeout(f);
      }
    }, [s, o.scrollHideDelay]), me(() => {
      const { viewport: f } = o, h = a ? "scrollLeft" : "scrollTop";
      if (f) {
        let p = f[h];
        const m = () => {
          const v = f[h];
          p !== v && (l("scrolling"), u()), p = v;
        };
        return f.addEventListener("scroll", m), () => f.removeEventListener("scroll", m);
      }
    }, [o.viewport, a, u]), t || s !== "hidden" ? /* @__PURE__ */ P.createElement(
      Vu,
      {
        "data-state": s === "hidden" ? "hidden" : "visible",
        ...n,
        ref: e,
        onPointerEnter: vo(r.onPointerEnter, () => l("interacting")),
        onPointerLeave: vo(r.onPointerLeave, () => l("idle"))
      }
    ) : null;
  }
), og = P.forwardRef(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = Mr(), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, l = r.orientation === "horizontal";
    return P.useEffect(() => (l ? a(!0) : s(!0), () => {
      l ? a(!1) : s(!1);
    }), [l, a, s]), o.type === "hover" ? /* @__PURE__ */ P.createElement(lk, { ...n, ref: e, forceMount: t }) : o.type === "scroll" ? /* @__PURE__ */ P.createElement(uk, { ...n, ref: e, forceMount: t }) : o.type === "auto" ? /* @__PURE__ */ P.createElement($m, { ...n, ref: e, forceMount: t }) : o.type === "always" ? /* @__PURE__ */ P.createElement(Vu, { ...n, ref: e }) : null;
  }
);
function dk(r, e = () => {
}) {
  let t = { left: r.scrollLeft, top: r.scrollTop }, n = 0;
  return function o() {
    const a = { left: r.scrollLeft, top: r.scrollTop }, s = t.left !== a.left, l = t.top !== a.top;
    (s || l) && e(), t = a, n = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(n);
}
const fk = lt((r, e) => {
  const { style: t, ...n } = r, o = Mr(), a = Km(), { onThumbPositionChange: s } = a, l = Or(e, (h) => a.onThumbChange(h)), u = Ke(), f = Js(() => {
    u.current && (u.current(), u.current = void 0);
  }, 100);
  return me(() => {
    const { viewport: h } = o;
    if (h) {
      const p = () => {
        if (f(), !u.current) {
          const m = dk(h, s);
          u.current = m, s();
        }
      };
      return s(), h.addEventListener("scroll", p), () => h.removeEventListener("scroll", p);
    }
  }, [o.viewport, f, s]), /* @__PURE__ */ P.createElement(
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
      onPointerDownCapture: vo(r.onPointerDownCapture, (h) => {
        const m = h.target.getBoundingClientRect(), v = h.clientX - m.left, C = h.clientY - m.top;
        a.onThumbPointerDown({ x: v, y: C });
      }),
      onPointerUp: vo(r.onPointerUp, a.onThumbPointerUp)
    }
  );
}), ig = P.forwardRef(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = Km();
    return t || o.hasThumb ? /* @__PURE__ */ P.createElement(fk, { ref: e, ...n }) : null;
  }
), Gm = lt(
  ({ children: r, style: e, ...t }, n) => {
    const o = Mr(), a = Or(n, o.onViewportChange);
    return /* @__PURE__ */ P.createElement(
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
      /* @__PURE__ */ P.createElement("div", { style: { minWidth: "100%", display: "table" }, ref: o.onContentChange }, r)
    );
  }
);
Gm.displayName = "@mantine/core/ScrollAreaViewport";
var Wu = { root: "m-d57069b5", viewport: "m-c0783ff9", viewportInner: "m-f8f631dd", scrollbar: "m-c44ba933", thumb: "m-d8b5e363", corner: "m-21657268" };
const zm = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
}, hk = (r, { scrollbarSize: e }) => ({
  root: {
    "--scrollarea-scrollbar-size": $(e)
  }
}), da = Ue((r, e) => {
  const t = Ce("ScrollArea", zm, r), {
    classNames: n,
    className: o,
    style: a,
    styles: s,
    unstyled: l,
    scrollbarSize: u,
    vars: f,
    type: h,
    scrollHideDelay: p,
    viewportProps: m,
    viewportRef: v,
    onScrollPositionChange: C,
    children: E,
    offsetScrollbars: _,
    scrollbars: R,
    ...A
  } = t, [S, I] = ge(!1), O = ut({
    name: "ScrollArea",
    props: t,
    classes: Wu,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: f,
    varsResolver: hk
  });
  return /* @__PURE__ */ P.createElement(
    Um,
    {
      type: h === "never" ? "always" : h,
      scrollHideDelay: p,
      ref: e,
      scrollbars: R,
      ...O("root"),
      ...A
    },
    /* @__PURE__ */ P.createElement(
      Gm,
      {
        ...m,
        ...O("viewport"),
        ref: v,
        "data-offset-scrollbars": _ === !0 ? "xy" : _ || void 0,
        "data-scrollbars": R || void 0,
        onScroll: typeof C == "function" ? ({ currentTarget: L }) => C({
          x: L.scrollLeft,
          y: L.scrollTop
        }) : void 0
      },
      E
    ),
    (R === "xy" || R === "x") && /* @__PURE__ */ P.createElement(
      og,
      {
        ...O("scrollbar"),
        orientation: "horizontal",
        "data-hidden": h === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => I(!0),
        onMouseLeave: () => I(!1)
      },
      /* @__PURE__ */ P.createElement(ig, { ...O("thumb") })
    ),
    (R === "xy" || R === "y") && /* @__PURE__ */ P.createElement(
      og,
      {
        ...O("scrollbar"),
        orientation: "vertical",
        "data-hidden": h === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => I(!0),
        onMouseLeave: () => I(!1)
      },
      /* @__PURE__ */ P.createElement(ig, { ...O("thumb") })
    ),
    /* @__PURE__ */ P.createElement(
      rk,
      {
        ...O("corner"),
        "data-hovered": S || void 0,
        "data-hidden": h === "never" || void 0
      }
    )
  );
});
da.displayName = "@mantine/core/ScrollArea";
const ju = Ue((r, e) => {
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
    unstyled: m,
    variant: v,
    viewportProps: C,
    scrollbars: E,
    style: _,
    vars: R,
    ...A
  } = Ce("ScrollAreaAutosize", zm, r);
  return /* @__PURE__ */ P.createElement(ke, { ...A, ref: e, style: [{ display: "flex" }, _] }, /* @__PURE__ */ P.createElement(ke, { style: { display: "flex", flexDirection: "column", flex: 1 } }, /* @__PURE__ */ P.createElement(
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
      unstyled: m,
      variant: v,
      viewportProps: C,
      vars: R,
      scrollbars: E
    },
    t
  )));
});
da.classes = Wu;
ju.displayName = "@mantine/core/ScrollAreaAutosize";
ju.classes = Wu;
da.Autosize = ju;
var Vm = { root: "m-87cf2631" };
const pk = {
  __staticSelector: "UnstyledButton"
}, fa = ua(
  (r, e) => {
    const t = Ce("UnstyledButton", pk, r), {
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
      classes: Vm,
      className: n,
      style: f,
      classNames: l,
      styles: u,
      unstyled: s
    });
    return /* @__PURE__ */ P.createElement(
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
fa.classes = Vm;
fa.displayName = "@mantine/core/UnstyledButton";
const Wr = Math.min, Ut = Math.max, Ls = Math.round, us = Math.floor, zn = (r) => ({
  x: r,
  y: r
}), gk = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, mk = {
  start: "end",
  end: "start"
};
function Cu(r, e, t) {
  return Ut(r, Wr(e, t));
}
function Tn(r, e) {
  return typeof r == "function" ? r(e) : r;
}
function jr(r) {
  return r.split("-")[0];
}
function hi(r) {
  return r.split("-")[1];
}
function Yu(r) {
  return r === "x" ? "y" : "x";
}
function Qu(r) {
  return r === "y" ? "height" : "width";
}
function Io(r) {
  return ["top", "bottom"].includes(jr(r)) ? "y" : "x";
}
function Ju(r) {
  return Yu(Io(r));
}
function vk(r, e, t) {
  t === void 0 && (t = !1);
  const n = hi(r), o = Ju(r), a = Qu(o);
  let s = o === "x" ? n === (t ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[a] > e.floating[a] && (s = Ds(s)), [s, Ds(s)];
}
function yk(r) {
  const e = Ds(r);
  return [wu(r), e, wu(e)];
}
function wu(r) {
  return r.replace(/start|end/g, (e) => mk[e]);
}
function Ck(r, e, t) {
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
function wk(r, e, t, n) {
  const o = hi(r);
  let a = Ck(jr(r), t === "start", n);
  return o && (a = a.map((s) => s + "-" + o), e && (a = a.concat(a.map(wu)))), a;
}
function Ds(r) {
  return r.replace(/left|right|bottom|top/g, (e) => gk[e]);
}
function Ek(r) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...r
  };
}
function Xu(r) {
  return typeof r != "number" ? Ek(r) : {
    top: r,
    right: r,
    bottom: r,
    left: r
  };
}
function ai(r) {
  return {
    ...r,
    top: r.y,
    left: r.x,
    right: r.x + r.width,
    bottom: r.y + r.height
  };
}
function ag(r, e, t) {
  let {
    reference: n,
    floating: o
  } = r;
  const a = Io(e), s = Ju(e), l = Qu(s), u = jr(e), f = a === "y", h = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, m = n[l] / 2 - o[l] / 2;
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
      v[s] -= m * (t && f ? -1 : 1);
      break;
    case "end":
      v[s] += m * (t && f ? -1 : 1);
      break;
  }
  return v;
}
const bk = async (r, e, t) => {
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
  } = ag(f, n, u), m = n, v = {}, C = 0;
  for (let E = 0; E < l.length; E++) {
    const {
      name: _,
      fn: R
    } = l[E], {
      x: A,
      y: S,
      data: I,
      reset: O
    } = await R({
      x: h,
      y: p,
      initialPlacement: n,
      placement: m,
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
        ...I
      }
    }, O && C <= 50) {
      C++, typeof O == "object" && (O.placement && (m = O.placement), O.rects && (f = O.rects === !0 ? await s.getElementRects({
        reference: r,
        floating: e,
        strategy: o
      }) : O.rects), {
        x: h,
        y: p
      } = ag(f, m, u)), E = -1;
      continue;
    }
  }
  return {
    x: h,
    y: p,
    placement: m,
    strategy: o,
    middlewareData: v
  };
};
async function Zu(r, e) {
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
    altBoundary: m = !1,
    padding: v = 0
  } = Tn(e, r), C = Xu(v), _ = l[m ? p === "floating" ? "reference" : "floating" : p], R = ai(await a.getClippingRect({
    element: (t = await (a.isElement == null ? void 0 : a.isElement(_))) == null || t ? _ : _.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(l.floating)),
    boundary: f,
    rootBoundary: h,
    strategy: u
  })), A = p === "floating" ? {
    ...s.floating,
    x: n,
    y: o
  } : s.reference, S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l.floating)), I = await (a.isElement == null ? void 0 : a.isElement(S)) ? await (a.getScale == null ? void 0 : a.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, O = ai(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: A,
    offsetParent: S,
    strategy: u
  }) : A);
  return {
    top: (R.top - O.top + C.top) / I.y,
    bottom: (O.bottom - R.bottom + C.bottom) / I.y,
    left: (R.left - O.left + C.left) / I.x,
    right: (O.right - R.right + C.right) / I.x
  };
}
const sg = (r) => ({
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
    } = Tn(r, e) || {};
    if (f == null)
      return {};
    const p = Xu(h), m = {
      x: t,
      y: n
    }, v = Ju(o), C = Qu(v), E = await s.getDimensions(f), _ = v === "y", R = _ ? "top" : "left", A = _ ? "bottom" : "right", S = _ ? "clientHeight" : "clientWidth", I = a.reference[C] + a.reference[v] - m[v] - a.floating[C], O = m[v] - a.reference[v], L = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
    let q = L ? L[S] : 0;
    (!q || !await (s.isElement == null ? void 0 : s.isElement(L))) && (q = l.floating[S] || a.floating[C]);
    const U = I / 2 - O / 2, Y = q / 2 - E[C] / 2 - 1, Q = Wr(p[R], Y), de = Wr(p[A], Y), ee = Q, fe = q - E[C] - de, oe = q / 2 - E[C] / 2 + U, we = Cu(ee, oe, fe), J = !u.arrow && hi(o) != null && oe != we && a.reference[C] / 2 - (oe < ee ? Q : de) - E[C] / 2 < 0, ie = J ? oe < ee ? oe - ee : oe - fe : 0;
    return {
      [v]: m[v] + ie,
      data: {
        [v]: we,
        centerOffset: oe - we - ie,
        ...J && {
          alignmentOffset: ie
        }
      },
      reset: J
    };
  }
}), _k = function(r) {
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
        fallbackPlacements: m,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: C = "none",
        flipAlignment: E = !0,
        ..._
      } = Tn(r, e);
      if ((t = a.arrow) != null && t.alignmentOffset)
        return {};
      const R = jr(o), A = jr(l) === l, S = await (u.isRTL == null ? void 0 : u.isRTL(f.floating)), I = m || (A || !E ? [Ds(l)] : yk(l));
      !m && C !== "none" && I.push(...wk(l, E, C, S));
      const O = [l, ...I], L = await Zu(e, _), q = [];
      let U = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (h && q.push(L[R]), p) {
        const ee = vk(o, s, S);
        q.push(L[ee[0]], L[ee[1]]);
      }
      if (U = [...U, {
        placement: o,
        overflows: q
      }], !q.every((ee) => ee <= 0)) {
        var Y, Q;
        const ee = (((Y = a.flip) == null ? void 0 : Y.index) || 0) + 1, fe = O[ee];
        if (fe)
          return {
            data: {
              index: ee,
              overflows: U
            },
            reset: {
              placement: fe
            }
          };
        let oe = (Q = U.filter((we) => we.overflows[0] <= 0).sort((we, J) => we.overflows[1] - J.overflows[1])[0]) == null ? void 0 : Q.placement;
        if (!oe)
          switch (v) {
            case "bestFit": {
              var de;
              const we = (de = U.map((J) => [J.placement, J.overflows.filter((ie) => ie > 0).reduce((ie, re) => ie + re, 0)]).sort((J, ie) => J[1] - ie[1])[0]) == null ? void 0 : de[0];
              we && (oe = we);
              break;
            }
            case "initialPlacement":
              oe = l;
              break;
          }
        if (o !== oe)
          return {
            reset: {
              placement: oe
            }
          };
      }
      return {};
    }
  };
};
function Wm(r) {
  const e = Wr(...r.map((a) => a.left)), t = Wr(...r.map((a) => a.top)), n = Ut(...r.map((a) => a.right)), o = Ut(...r.map((a) => a.bottom));
  return {
    x: e,
    y: t,
    width: n - e,
    height: o - t
  };
}
function Sk(r) {
  const e = r.slice().sort((o, a) => o.y - a.y), t = [];
  let n = null;
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    !n || a.y - n.y > n.height / 2 ? t.push([a]) : t[t.length - 1].push(a), n = a;
  }
  return t.map((o) => ai(Wm(o)));
}
const Tk = function(r) {
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
      } = Tn(r, e), h = Array.from(await (a.getClientRects == null ? void 0 : a.getClientRects(n.reference)) || []), p = Sk(h), m = ai(Wm(h)), v = Xu(l);
      function C() {
        if (p.length === 2 && p[0].left > p[1].right && u != null && f != null)
          return p.find((_) => u > _.left - v.left && u < _.right + v.right && f > _.top - v.top && f < _.bottom + v.bottom) || m;
        if (p.length >= 2) {
          if (Io(t) === "y") {
            const Q = p[0], de = p[p.length - 1], ee = jr(t) === "top", fe = Q.top, oe = de.bottom, we = ee ? Q.left : de.left, J = ee ? Q.right : de.right, ie = J - we, re = oe - fe;
            return {
              top: fe,
              bottom: oe,
              left: we,
              right: J,
              width: ie,
              height: re,
              x: we,
              y: fe
            };
          }
          const _ = jr(t) === "left", R = Ut(...p.map((Q) => Q.right)), A = Wr(...p.map((Q) => Q.left)), S = p.filter((Q) => _ ? Q.left === A : Q.right === R), I = S[0].top, O = S[S.length - 1].bottom, L = A, q = R, U = q - L, Y = O - I;
          return {
            top: I,
            bottom: O,
            left: L,
            right: q,
            width: U,
            height: Y,
            x: L,
            y: I
          };
        }
        return m;
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
async function Ik(r, e) {
  const {
    placement: t,
    platform: n,
    elements: o
  } = r, a = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), s = jr(t), l = hi(t), u = Io(t) === "y", f = ["left", "top"].includes(s) ? -1 : 1, h = a && u ? -1 : 1, p = Tn(e, r);
  let {
    mainAxis: m,
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
    y: m * f
  } : {
    x: m * f,
    y: v * h
  };
}
const Ak = function(r) {
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
      } = e, u = await Ik(e, r);
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
}, Rk = function(r) {
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
              x: R,
              y: A
            } = _;
            return {
              x: R,
              y: A
            };
          }
        },
        ...u
      } = Tn(r, e), f = {
        x: t,
        y: n
      }, h = await Zu(e, u), p = Io(jr(o)), m = Yu(p);
      let v = f[m], C = f[p];
      if (a) {
        const _ = m === "y" ? "top" : "left", R = m === "y" ? "bottom" : "right", A = v + h[_], S = v - h[R];
        v = Cu(A, v, S);
      }
      if (s) {
        const _ = p === "y" ? "top" : "left", R = p === "y" ? "bottom" : "right", A = C + h[_], S = C - h[R];
        C = Cu(A, C, S);
      }
      const E = l.fn({
        ...e,
        [m]: v,
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
}, kk = function(r) {
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
      } = Tn(r, e), h = {
        x: t,
        y: n
      }, p = Io(o), m = Yu(p);
      let v = h[m], C = h[p];
      const E = Tn(l, e), _ = typeof E == "number" ? {
        mainAxis: E,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...E
      };
      if (u) {
        const S = m === "y" ? "height" : "width", I = a.reference[m] - a.floating[S] + _.mainAxis, O = a.reference[m] + a.reference[S] - _.mainAxis;
        v < I ? v = I : v > O && (v = O);
      }
      if (f) {
        var R, A;
        const S = m === "y" ? "width" : "height", I = ["top", "left"].includes(jr(o)), O = a.reference[p] - a.floating[S] + (I && ((R = s.offset) == null ? void 0 : R[p]) || 0) + (I ? 0 : _.crossAxis), L = a.reference[p] + a.reference[S] + (I ? 0 : ((A = s.offset) == null ? void 0 : A[p]) || 0) - (I ? _.crossAxis : 0);
        C < O ? C = O : C > L && (C = L);
      }
      return {
        [m]: v,
        [p]: C
      };
    }
  };
}, Pk = function(r) {
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
      } = Tn(r, e), u = await Zu(e, l), f = jr(t), h = hi(t), p = Io(t) === "y", {
        width: m,
        height: v
      } = n.floating;
      let C, E;
      f === "top" || f === "bottom" ? (C = f, E = h === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (E = f, C = h === "end" ? "top" : "bottom");
      const _ = v - u[C], R = m - u[E], A = !e.middlewareData.shift;
      let S = _, I = R;
      if (p) {
        const L = m - u.left - u.right;
        I = h || A ? Wr(R, L) : L;
      } else {
        const L = v - u.top - u.bottom;
        S = h || A ? Wr(_, L) : L;
      }
      if (A && !h) {
        const L = Ut(u.left, 0), q = Ut(u.right, 0), U = Ut(u.top, 0), Y = Ut(u.bottom, 0);
        p ? I = m - 2 * (L !== 0 || q !== 0 ? L + q : Ut(u.left, u.right)) : S = v - 2 * (U !== 0 || Y !== 0 ? U + Y : Ut(u.top, u.bottom));
      }
      await s({
        ...e,
        availableWidth: I,
        availableHeight: S
      });
      const O = await o.getDimensions(a.floating);
      return m !== O.width || v !== O.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Vn(r) {
  return jm(r) ? (r.nodeName || "").toLowerCase() : "#document";
}
function mr(r) {
  var e;
  return (r == null || (e = r.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function kn(r) {
  var e;
  return (e = (jm(r) ? r.ownerDocument : r.document) || window.document) == null ? void 0 : e.documentElement;
}
function jm(r) {
  return r instanceof Node || r instanceof mr(r).Node;
}
function In(r) {
  return r instanceof Element || r instanceof mr(r).Element;
}
function sn(r) {
  return r instanceof HTMLElement || r instanceof mr(r).HTMLElement;
}
function cg(r) {
  return typeof ShadowRoot > "u" ? !1 : r instanceof ShadowRoot || r instanceof mr(r).ShadowRoot;
}
function ha(r) {
  const {
    overflow: e,
    overflowX: t,
    overflowY: n,
    display: o
  } = Nr(r);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + t) && !["inline", "contents"].includes(o);
}
function Nk(r) {
  return ["table", "td", "th"].includes(Vn(r));
}
function ed(r) {
  const e = td(), t = Nr(r);
  return t.transform !== "none" || t.perspective !== "none" || (t.containerType ? t.containerType !== "normal" : !1) || !e && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !e && (t.filter ? t.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (t.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (t.contain || "").includes(n));
}
function Ok(r) {
  let e = si(r);
  for (; sn(e) && !tc(e); ) {
    if (ed(e))
      return e;
    e = si(e);
  }
  return null;
}
function td() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function tc(r) {
  return ["html", "body", "#document"].includes(Vn(r));
}
function Nr(r) {
  return mr(r).getComputedStyle(r);
}
function rc(r) {
  return In(r) ? {
    scrollLeft: r.scrollLeft,
    scrollTop: r.scrollTop
  } : {
    scrollLeft: r.pageXOffset,
    scrollTop: r.pageYOffset
  };
}
function si(r) {
  if (Vn(r) === "html")
    return r;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    r.assignedSlot || // DOM Element detected.
    r.parentNode || // ShadowRoot detected.
    cg(r) && r.host || // Fallback.
    kn(r)
  );
  return cg(e) ? e.host : e;
}
function Ym(r) {
  const e = si(r);
  return tc(e) ? r.ownerDocument ? r.ownerDocument.body : r.body : sn(e) && ha(e) ? e : Ym(e);
}
function ea(r, e, t) {
  var n;
  e === void 0 && (e = []), t === void 0 && (t = !0);
  const o = Ym(r), a = o === ((n = r.ownerDocument) == null ? void 0 : n.body), s = mr(o);
  return a ? e.concat(s, s.visualViewport || [], ha(o) ? o : [], s.frameElement && t ? ea(s.frameElement) : []) : e.concat(o, ea(o, [], t));
}
function Qm(r) {
  const e = Nr(r);
  let t = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const o = sn(r), a = o ? r.offsetWidth : t, s = o ? r.offsetHeight : n, l = Ls(t) !== a || Ls(n) !== s;
  return l && (t = a, n = s), {
    width: t,
    height: n,
    $: l
  };
}
function rd(r) {
  return In(r) ? r : r.contextElement;
}
function ri(r) {
  const e = rd(r);
  if (!sn(e))
    return zn(1);
  const t = e.getBoundingClientRect(), {
    width: n,
    height: o,
    $: a
  } = Qm(e);
  let s = (a ? Ls(t.width) : t.width) / n, l = (a ? Ls(t.height) : t.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const Mk = /* @__PURE__ */ zn(0);
function Jm(r) {
  const e = mr(r);
  return !td() || !e.visualViewport ? Mk : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function xk(r, e, t) {
  return e === void 0 && (e = !1), !t || e && t !== mr(r) ? !1 : e;
}
function bo(r, e, t, n) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const o = r.getBoundingClientRect(), a = rd(r);
  let s = zn(1);
  e && (n ? In(n) && (s = ri(n)) : s = ri(r));
  const l = xk(a, t, n) ? Jm(a) : zn(0);
  let u = (o.left + l.x) / s.x, f = (o.top + l.y) / s.y, h = o.width / s.x, p = o.height / s.y;
  if (a) {
    const m = mr(a), v = n && In(n) ? mr(n) : n;
    let C = m.frameElement;
    for (; C && n && v !== m; ) {
      const E = ri(C), _ = C.getBoundingClientRect(), R = Nr(C), A = _.left + (C.clientLeft + parseFloat(R.paddingLeft)) * E.x, S = _.top + (C.clientTop + parseFloat(R.paddingTop)) * E.y;
      u *= E.x, f *= E.y, h *= E.x, p *= E.y, u += A, f += S, C = mr(C).frameElement;
    }
  }
  return ai({
    width: h,
    height: p,
    x: u,
    y: f
  });
}
function Lk(r) {
  let {
    rect: e,
    offsetParent: t,
    strategy: n
  } = r;
  const o = sn(t), a = kn(t);
  if (t === a)
    return e;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = zn(1);
  const u = zn(0);
  if ((o || !o && n !== "fixed") && ((Vn(t) !== "body" || ha(a)) && (s = rc(t)), sn(t))) {
    const f = bo(t);
    l = ri(t), u.x = f.x + t.clientLeft, u.y = f.y + t.clientTop;
  }
  return {
    width: e.width * l.x,
    height: e.height * l.y,
    x: e.x * l.x - s.scrollLeft * l.x + u.x,
    y: e.y * l.y - s.scrollTop * l.y + u.y
  };
}
function Dk(r) {
  return Array.from(r.getClientRects());
}
function Xm(r) {
  return bo(kn(r)).left + rc(r).scrollLeft;
}
function Uk(r) {
  const e = kn(r), t = rc(r), n = r.ownerDocument.body, o = Ut(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), a = Ut(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -t.scrollLeft + Xm(r);
  const l = -t.scrollTop;
  return Nr(n).direction === "rtl" && (s += Ut(e.clientWidth, n.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: l
  };
}
function Fk(r, e) {
  const t = mr(r), n = kn(r), o = t.visualViewport;
  let a = n.clientWidth, s = n.clientHeight, l = 0, u = 0;
  if (o) {
    a = o.width, s = o.height;
    const f = td();
    (!f || f && e === "fixed") && (l = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: l,
    y: u
  };
}
function Hk(r, e) {
  const t = bo(r, !0, e === "fixed"), n = t.top + r.clientTop, o = t.left + r.clientLeft, a = sn(r) ? ri(r) : zn(1), s = r.clientWidth * a.x, l = r.clientHeight * a.y, u = o * a.x, f = n * a.y;
  return {
    width: s,
    height: l,
    x: u,
    y: f
  };
}
function lg(r, e, t) {
  let n;
  if (e === "viewport")
    n = Fk(r, t);
  else if (e === "document")
    n = Uk(kn(r));
  else if (In(e))
    n = Hk(e, t);
  else {
    const o = Jm(r);
    n = {
      ...e,
      x: e.x - o.x,
      y: e.y - o.y
    };
  }
  return ai(n);
}
function Zm(r, e) {
  const t = si(r);
  return t === e || !In(t) || tc(t) ? !1 : Nr(t).position === "fixed" || Zm(t, e);
}
function Bk(r, e) {
  const t = e.get(r);
  if (t)
    return t;
  let n = ea(r, [], !1).filter((l) => In(l) && Vn(l) !== "body"), o = null;
  const a = Nr(r).position === "fixed";
  let s = a ? si(r) : r;
  for (; In(s) && !tc(s); ) {
    const l = Nr(s), u = ed(s);
    !u && l.position === "fixed" && (o = null), (a ? !u && !o : !u && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ha(s) && !u && Zm(r, s)) ? n = n.filter((h) => h !== s) : o = l, s = si(s);
  }
  return e.set(r, n), n;
}
function Kk(r) {
  let {
    element: e,
    boundary: t,
    rootBoundary: n,
    strategy: o
  } = r;
  const s = [...t === "clippingAncestors" ? Bk(e, this._c) : [].concat(t), n], l = s[0], u = s.reduce((f, h) => {
    const p = lg(e, h, o);
    return f.top = Ut(p.top, f.top), f.right = Wr(p.right, f.right), f.bottom = Wr(p.bottom, f.bottom), f.left = Ut(p.left, f.left), f;
  }, lg(e, l, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function qk(r) {
  return Qm(r);
}
function $k(r, e, t) {
  const n = sn(e), o = kn(e), a = t === "fixed", s = bo(r, !0, a, e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = zn(0);
  if (n || !n && !a)
    if ((Vn(e) !== "body" || ha(o)) && (l = rc(e)), n) {
      const f = bo(e, !0, a, e);
      u.x = f.x + e.clientLeft, u.y = f.y + e.clientTop;
    } else
      o && (u.x = Xm(o));
  return {
    x: s.left + l.scrollLeft - u.x,
    y: s.top + l.scrollTop - u.y,
    width: s.width,
    height: s.height
  };
}
function ug(r, e) {
  return !sn(r) || Nr(r).position === "fixed" ? null : e ? e(r) : r.offsetParent;
}
function ev(r, e) {
  const t = mr(r);
  if (!sn(r))
    return t;
  let n = ug(r, e);
  for (; n && Nk(n) && Nr(n).position === "static"; )
    n = ug(n, e);
  return n && (Vn(n) === "html" || Vn(n) === "body" && Nr(n).position === "static" && !ed(n)) ? t : n || Ok(r) || t;
}
const Gk = async function(r) {
  let {
    reference: e,
    floating: t,
    strategy: n
  } = r;
  const o = this.getOffsetParent || ev, a = this.getDimensions;
  return {
    reference: $k(e, await o(t), n),
    floating: {
      x: 0,
      y: 0,
      ...await a(t)
    }
  };
};
function zk(r) {
  return Nr(r).direction === "rtl";
}
const Vk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Lk,
  getDocumentElement: kn,
  getClippingRect: Kk,
  getOffsetParent: ev,
  getElementRects: Gk,
  getClientRects: Dk,
  getDimensions: qk,
  getScale: ri,
  isElement: In,
  isRTL: zk
};
function Wk(r, e) {
  let t = null, n;
  const o = kn(r);
  function a() {
    clearTimeout(n), t && t.disconnect(), t = null;
  }
  function s(l, u) {
    l === void 0 && (l = !1), u === void 0 && (u = 1), a();
    const {
      left: f,
      top: h,
      width: p,
      height: m
    } = r.getBoundingClientRect();
    if (l || e(), !p || !m)
      return;
    const v = us(h), C = us(o.clientWidth - (f + p)), E = us(o.clientHeight - (h + m)), _ = us(f), A = {
      rootMargin: -v + "px " + -C + "px " + -E + "px " + -_ + "px",
      threshold: Ut(0, Wr(1, u)) || 1
    };
    let S = !0;
    function I(O) {
      const L = O[0].intersectionRatio;
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
      t = new IntersectionObserver(I, {
        ...A,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(I, A);
    }
    t.observe(r);
  }
  return s(!0), a;
}
function jk(r, e, t, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, f = rd(r), h = o || a ? [...f ? ea(f) : [], ...ea(e)] : [];
  h.forEach((R) => {
    o && R.addEventListener("scroll", t, {
      passive: !0
    }), a && R.addEventListener("resize", t);
  });
  const p = f && l ? Wk(f, t) : null;
  let m = -1, v = null;
  s && (v = new ResizeObserver((R) => {
    let [A] = R;
    A && A.target === f && v && (v.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      v && v.observe(e);
    })), t();
  }), f && !u && v.observe(f), v.observe(e));
  let C, E = u ? bo(r) : null;
  u && _();
  function _() {
    const R = bo(r);
    E && (R.x !== E.x || R.y !== E.y || R.width !== E.width || R.height !== E.height) && t(), E = R, C = requestAnimationFrame(_);
  }
  return t(), () => {
    h.forEach((R) => {
      o && R.removeEventListener("scroll", t), a && R.removeEventListener("resize", t);
    }), p && p(), v && v.disconnect(), v = null, u && cancelAnimationFrame(C);
  };
}
const Yk = (r, e, t) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: Vk,
    ...t
  }, a = {
    ...o.platform,
    _c: n
  };
  return bk(r, e, {
    ...o,
    platform: a
  });
}, Qk = (r) => {
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
      return n && e(n) ? n.current != null ? sg({
        element: n.current,
        padding: o
      }).fn(t) : {} : n ? sg({
        element: n,
        padding: o
      }).fn(t) : {};
    }
  };
};
var gs = typeof document < "u" ? Ru : me;
function Us(r, e) {
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
        if (!Us(r[n], e[n]))
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
      if (!(a === "_owner" && r.$$typeof) && !Us(r[a], e[a]))
        return !1;
    }
    return !0;
  }
  return r !== r && e !== e;
}
function tv(r) {
  return typeof window > "u" ? 1 : (r.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function dg(r, e) {
  const t = tv(r);
  return Math.round(e * t) / t;
}
function fg(r) {
  const e = Le.useRef(r);
  return gs(() => {
    e.current = r;
  }), e;
}
function Jk(r) {
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
  }), [m, v] = Le.useState(n);
  Us(m, n) || v(n);
  const [C, E] = Le.useState(null), [_, R] = Le.useState(null), A = Le.useCallback((J) => {
    J != L.current && (L.current = J, E(J));
  }, [E]), S = Le.useCallback((J) => {
    J !== q.current && (q.current = J, R(J));
  }, [R]), I = a || C, O = s || _, L = Le.useRef(null), q = Le.useRef(null), U = Le.useRef(h), Y = fg(u), Q = fg(o), de = Le.useCallback(() => {
    if (!L.current || !q.current)
      return;
    const J = {
      placement: e,
      strategy: t,
      middleware: m
    };
    Q.current && (J.platform = Q.current), Yk(L.current, q.current, J).then((ie) => {
      const re = {
        ...ie,
        isPositioned: !0
      };
      ee.current && !Us(U.current, re) && (U.current = re, e0.flushSync(() => {
        p(re);
      }));
    });
  }, [m, e, t, Q]);
  gs(() => {
    f === !1 && U.current.isPositioned && (U.current.isPositioned = !1, p((J) => ({
      ...J,
      isPositioned: !1
    })));
  }, [f]);
  const ee = Le.useRef(!1);
  gs(() => (ee.current = !0, () => {
    ee.current = !1;
  }), []), gs(() => {
    if (I && (L.current = I), O && (q.current = O), I && O) {
      if (Y.current)
        return Y.current(I, O, de);
      de();
    }
  }, [I, O, de, Y]);
  const fe = Le.useMemo(() => ({
    reference: L,
    floating: q,
    setReference: A,
    setFloating: S
  }), [A, S]), oe = Le.useMemo(() => ({
    reference: I,
    floating: O
  }), [I, O]), we = Le.useMemo(() => {
    const J = {
      position: t,
      left: 0,
      top: 0
    };
    if (!oe.floating)
      return J;
    const ie = dg(oe.floating, h.x), re = dg(oe.floating, h.y);
    return l ? {
      ...J,
      transform: "translate(" + ie + "px, " + re + "px)",
      ...tv(oe.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: ie,
      top: re
    };
  }, [t, l, oe.floating, h.x, h.y]);
  return Le.useMemo(() => ({
    ...h,
    update: de,
    refs: fe,
    elements: oe,
    floatingStyles: we
  }), [h, de, fe, oe, we]);
}
var rv = typeof document < "u" ? Ru : me;
let Gl = !1, Xk = 0;
const hg = () => "floating-ui-" + Xk++;
function Zk() {
  const [r, e] = Le.useState(() => Gl ? hg() : void 0);
  return rv(() => {
    r == null && e(hg());
  }, []), Le.useEffect(() => {
    Gl || (Gl = !0);
  }, []), r;
}
const eP = Le[/* @__PURE__ */ "useId".toString()], tP = eP || Zk;
function rP() {
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
const nP = /* @__PURE__ */ Le.createContext(null), oP = () => Le.useContext(nP);
function iP(r) {
  return (r == null ? void 0 : r.ownerDocument) || document;
}
function aP(r) {
  return iP(r).defaultView || window;
}
function ds(r) {
  return r ? r instanceof Element || r instanceof aP(r).Element : !1;
}
const sP = Le[/* @__PURE__ */ "useInsertionEffect".toString()], cP = sP || ((r) => r());
function lP(r) {
  const e = Le.useRef(() => {
  });
  return cP(() => {
    e.current = r;
  }), Le.useCallback(function() {
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return e.current == null ? void 0 : e.current(...n);
  }, []);
}
function uP(r) {
  var e;
  r === void 0 && (r = {});
  const {
    open: t = !1,
    onOpenChange: n,
    nodeId: o
  } = r, [a, s] = Le.useState(null), l = ((e = r.elements) == null ? void 0 : e.reference) || a, u = Jk(r), f = oP(), h = lP((I, O) => {
    I && (m.current.openEvent = O), n == null || n(I, O);
  }), p = Le.useRef(null), m = Le.useRef({}), v = Le.useState(() => rP())[0], C = tP(), E = Le.useCallback((I) => {
    const O = ds(I) ? {
      getBoundingClientRect: () => I.getBoundingClientRect(),
      contextElement: I
    } : I;
    u.refs.setReference(O);
  }, [u.refs]), _ = Le.useCallback((I) => {
    (ds(I) || I === null) && (p.current = I, s(I)), (ds(u.refs.reference.current) || u.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    I !== null && !ds(I)) && u.refs.setReference(I);
  }, [u.refs]), R = Le.useMemo(() => ({
    ...u.refs,
    setReference: _,
    setPositionReference: E,
    domReference: p
  }), [u.refs, _, E]), A = Le.useMemo(() => ({
    ...u.elements,
    domReference: l
  }), [u.elements, l]), S = Le.useMemo(() => ({
    ...u,
    refs: R,
    elements: A,
    dataRef: m,
    nodeId: o,
    floatingId: C,
    events: v,
    open: t,
    onOpenChange: h
  }), [u, o, C, v, t, h, R, A]);
  return rv(() => {
    const I = f == null ? void 0 : f.nodesRef.current.find((O) => O.id === o);
    I && (I.context = S);
  }), Le.useMemo(() => ({
    ...u,
    context: S,
    refs: R,
    elements: A
  }), [u, R, A, S]);
}
function dP(r, e) {
  if (r === "rtl" && (e.includes("right") || e.includes("left"))) {
    const [t, n] = e.split("-"), o = t === "right" ? "left" : "right";
    return n === void 0 ? o : `${o}-${n}`;
  }
  return e;
}
function pg(r, e, t, n) {
  return r === "center" || n === "center" ? { top: e } : r === "end" ? { bottom: t } : r === "start" ? { top: t } : {};
}
function gg(r, e, t, n, o) {
  return r === "center" || n === "center" ? { left: e } : r === "end" ? { [o === "ltr" ? "right" : "left"]: t } : r === "start" ? { [o === "ltr" ? "left" : "right"]: t } : {};
}
const fP = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function hP({
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
    [fP[u]]: $(n)
  }, p = $(-e / 2);
  return u === "left" ? {
    ...h,
    ...pg(f, s, t, o),
    right: p,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  } : u === "right" ? {
    ...h,
    ...pg(f, s, t, o),
    left: p,
    borderRightColor: "transparent",
    borderTopColor: "transparent"
  } : u === "top" ? {
    ...h,
    ...gg(f, a, t, o, l),
    bottom: p,
    borderTopColor: "transparent",
    borderLeftColor: "transparent"
  } : u === "bottom" ? {
    ...h,
    ...gg(f, a, t, o, l),
    top: p,
    borderBottomColor: "transparent",
    borderRightColor: "transparent"
  } : {};
}
const nv = lt(
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
    const { dir: p } = zu();
    return a ? /* @__PURE__ */ P.createElement(
      "div",
      {
        ...f,
        ref: h,
        style: {
          ...u,
          ...hP({
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
nv.displayName = "@mantine/core/FloatingArrow";
const [pP, ov] = di(
  "Popover component was not found in the tree"
);
function iv({
  children: r,
  active: e = !0,
  refProp: t = "ref"
}) {
  const n = YA(e), o = Or(n, r == null ? void 0 : r.ref);
  return ca(r) ? Vs(r, { [t]: o }) : r;
}
iv.displayName = "@mantine/core/FocusTrap";
function gP(r) {
  const e = document.createElement("div");
  return e.setAttribute("data-portal", "true"), typeof r.className == "string" && e.classList.add(...r.className.split(" ").filter(Boolean)), typeof r.style == "object" && Object.assign(e.style, r.style), typeof r.id == "string" && e.setAttribute("id", r.id), e;
}
const mP = {}, av = lt((r, e) => {
  const { children: t, target: n, ...o } = Ce("Portal", mP, r), [a, s] = ge(!1), l = Ke(null);
  return la(() => (s(!0), l.current = n ? typeof n == "string" ? document.querySelector(n) : n : gP(o), Em(e, l.current), !n && l.current && document.body.appendChild(l.current), () => {
    !n && l.current && document.body.removeChild(l.current);
  }), [n]), !a || !l.current ? null : n0(/* @__PURE__ */ P.createElement(P.Fragment, null, t), l.current);
});
av.displayName = "@mantine/core/Portal";
function sv({ withinPortal: r = !0, children: e, ...t }) {
  return r ? /* @__PURE__ */ P.createElement(av, { ...t }, e) : /* @__PURE__ */ P.createElement(P.Fragment, null, e);
}
sv.displayName = "@mantine/core/OptionalPortal";
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
}, mg = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function vP({
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
    ...fs[r][mg[e]]
  } : {} : {
    transitionProperty: r.transitionProperty,
    ...o,
    ...r.common,
    ...r[mg[e]]
  };
}
function yP({
  duration: r,
  exitDuration: e,
  timingFunction: t,
  mounted: n,
  onEnter: o,
  onExit: a,
  onEntered: s,
  onExited: l
}) {
  const u = Yn(), f = _m(), h = u.respectReducedMotion ? f : !1, [p, m] = ge(h ? 0 : r), [v, C] = ge(n ? "entered" : "exited"), E = Ke(-1), _ = (R) => {
    const A = R ? o : a, S = R ? s : l;
    C(R ? "pre-entering" : "pre-exiting"), window.clearTimeout(E.current);
    const I = h ? 0 : R ? r : e;
    if (m(I), I === 0)
      typeof A == "function" && A(), typeof S == "function" && S(), C(R ? "entered" : "exited");
    else {
      const O = window.setTimeout(() => {
        typeof A == "function" && A(), C(R ? "entering" : "exiting");
      }, 10);
      E.current = window.setTimeout(() => {
        window.clearTimeout(O), typeof S == "function" && S(), C(R ? "entered" : "exited");
      }, I);
    }
  };
  return wo(() => {
    _(n);
  }, [n]), me(() => () => window.clearTimeout(E.current), []), {
    transitionDuration: p,
    transitionStatus: v,
    transitionTimingFunction: t || "ease"
  };
}
function cv({
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
  const { transitionDuration: p, transitionStatus: m, transitionTimingFunction: v } = yP({
    mounted: o,
    exitDuration: n,
    duration: t,
    timingFunction: s,
    onExit: l,
    onEntered: u,
    onEnter: f,
    onExited: h
  });
  return p === 0 ? o ? /* @__PURE__ */ P.createElement(P.Fragment, null, a({})) : r ? a({ display: "none" }) : null : m === "exited" ? r ? a({ display: "none" }) : null : /* @__PURE__ */ P.createElement(P.Fragment, null, a(
    vP({
      transition: e,
      duration: p,
      state: m,
      timingFunction: v
    })
  ));
}
cv.displayName = "@mantine/core/Transition";
var lv = { dropdown: "m-38a85659", arrow: "m-a31dc6c1" };
const CP = {}, nd = Ue((r, e) => {
  var _, R, A, S;
  const t = Ce("PopoverDropdown", CP, r), {
    className: n,
    style: o,
    vars: a,
    children: s,
    onKeyDownCapture: l,
    variant: u,
    classNames: f,
    styles: h,
    ...p
  } = t, m = ov(), v = qA({
    opened: m.opened,
    shouldReturnFocus: m.returnFocus
  }), C = m.withRoles ? {
    "aria-labelledby": m.getTargetId(),
    id: m.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, E = Or(e, m.floating);
  return m.disabled ? null : /* @__PURE__ */ P.createElement(sv, { ...m.portalProps, withinPortal: m.withinPortal }, /* @__PURE__ */ P.createElement(
    cv,
    {
      mounted: m.opened,
      ...m.transitionProps,
      transition: ((_ = m.transitionProps) == null ? void 0 : _.transition) || "fade",
      duration: ((R = m.transitionProps) == null ? void 0 : R.duration) ?? 150,
      keepMounted: m.keepMounted,
      exitDuration: typeof ((A = m.transitionProps) == null ? void 0 : A.exitDuration) == "number" ? m.transitionProps.exitDuration : (S = m.transitionProps) == null ? void 0 : S.duration
    },
    (I) => /* @__PURE__ */ P.createElement(iv, { active: m.trapFocus }, /* @__PURE__ */ P.createElement(
      ke,
      {
        ...C,
        ...p,
        variant: u,
        ref: E,
        onKeyDownCapture: MA(m.onClose, {
          active: m.closeOnEscape,
          onTrigger: v,
          onKeyDown: l
        }),
        "data-position": m.placement,
        ...m.getStyles("dropdown", {
          className: n,
          props: t,
          classNames: f,
          styles: h,
          style: [
            {
              ...I,
              zIndex: m.zIndex,
              top: m.y ?? 0,
              left: m.x ?? 0,
              width: m.width === "target" ? void 0 : $(m.width)
            },
            o
          ]
        })
      },
      s,
      /* @__PURE__ */ P.createElement(
        nv,
        {
          ref: m.arrowRef,
          arrowX: m.arrowX,
          arrowY: m.arrowY,
          visible: m.withArrow,
          position: m.placement,
          arrowSize: m.arrowSize,
          arrowRadius: m.arrowRadius,
          arrowOffset: m.arrowOffset,
          arrowPosition: m.arrowPosition,
          ...m.getStyles("arrow", {
            props: t,
            classNames: f,
            styles: h
          })
        }
      )
    ))
  ));
});
nd.classes = lv;
nd.displayName = "@mantine/core/PopoverDropdown";
const wP = {
  refProp: "ref",
  popupType: "dialog"
}, uv = Ue((r, e) => {
  const { children: t, refProp: n, popupType: o, ...a } = Ce(
    "PopoverTarget",
    wP,
    r
  );
  if (!ca(t))
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const s = a, l = ov(), u = Or(l.reference, t.ref, e), f = l.withRoles ? {
    "aria-haspopup": o,
    "aria-expanded": l.opened,
    "aria-controls": l.getDropdownId(),
    id: l.getTargetId()
  } : {};
  return Vs(t, {
    ...s,
    ...f,
    ...l.targetProps,
    className: Rn(l.targetProps.className, s.className, t.props.className),
    [n]: u,
    ...l.controlled ? null : { onClick: l.onToggle }
  });
});
uv.displayName = "@mantine/core/PopoverTarget";
function EP({
  opened: r,
  floating: e,
  position: t,
  positionDependencies: n
}) {
  const [o, a] = ge(0);
  me(() => {
    if (e.refs.reference.current && e.refs.floating.current)
      return jk(
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
  ]), wo(() => {
    e.update();
  }, n), wo(() => {
    a((s) => s + 1);
  }, [r]);
}
function bP(r, e) {
  var n, o, a, s;
  const t = [Ak(r.offset)];
  return (n = r.middlewares) != null && n.shift && t.push(Rk({ limiter: kk() })), (o = r.middlewares) != null && o.flip && t.push(_k()), (a = r.middlewares) != null && a.inline && t.push(Tk()), t.push(Qk({ element: r.arrowRef, padding: r.arrowOffset })), ((s = r.middlewares) != null && s.size || r.width === "target") && t.push(
    Pk({
      apply({ rects: l, availableWidth: u, availableHeight: f }) {
        var m, v;
        const p = ((m = e().refs.floating.current) == null ? void 0 : m.style) ?? {};
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
function _P(r) {
  const [e, t] = Eo({
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
  }, a = uP({
    placement: r.position,
    middleware: bP(r, () => a)
  });
  return EP({
    opened: r.opened,
    position: r.position,
    positionDependencies: r.positionDependencies || [],
    floating: a
  }), wo(() => {
    var s;
    (s = r.onPositionChange) == null || s.call(r, a.placement);
  }, [a.placement]), wo(() => {
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
const SP = {
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
  zIndex: NA("popover"),
  __staticSelector: "Popover",
  width: "max-content"
}, TP = (r, { radius: e, shadow: t }) => ({
  dropdown: {
    "--popover-radius": e === void 0 ? void 0 : fi(e),
    "--popover-shadow": xA(t)
  }
});
function Qn(r) {
  var Pn, gt, Ot, Xn, Ur, _t;
  const e = Ce("Popover", SP, r), {
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
    arrowSize: m,
    arrowOffset: v,
    arrowRadius: C,
    arrowPosition: E,
    unstyled: _,
    classNames: R,
    styles: A,
    closeOnClickOutside: S,
    withinPortal: I,
    portalProps: O,
    closeOnEscape: L,
    clickOutsideEvents: q,
    trapFocus: U,
    onClose: Y,
    onOpen: Q,
    onChange: de,
    zIndex: ee,
    radius: fe,
    shadow: oe,
    id: we,
    defaultOpened: J,
    __staticSelector: ie,
    withRoles: re,
    disabled: Pe,
    returnFocus: Qe,
    variant: ot,
    keepMounted: dt,
    vars: Yr,
    ...cn
  } = e, jt = ut({
    name: ie,
    props: e,
    classes: lv,
    classNames: R,
    styles: A,
    unstyled: _,
    rootSelector: "dropdown",
    vars: Yr,
    varsResolver: TP
  }), ir = Ke(null), [ln, ar] = ge(null), [Dr, un] = ge(null), { dir: Kt } = zu(), Cr = To(we), Ye = _P({
    middlewares: h,
    width: f,
    position: dP(Kt, n),
    offset: typeof o == "number" ? o + (p ? m / 2 : 0) : o,
    arrowRef: ir,
    arrowOffset: v,
    onPositionChange: a,
    positionDependencies: s,
    opened: l,
    defaultOpened: J,
    onChange: de,
    onOpen: Q,
    onClose: Y
  });
  UA(() => S && Ye.onClose(), q, [
    ln,
    Dr
  ]);
  const Pt = ze(
    (tt) => {
      ar(tt), Ye.floating.refs.setReference(tt);
    },
    [Ye.floating.refs.setReference]
  ), Nt = ze(
    (tt) => {
      un(tt), Ye.floating.refs.setFloating(tt);
    },
    [Ye.floating.refs.setFloating]
  );
  return /* @__PURE__ */ P.createElement(
    pP,
    {
      value: {
        returnFocus: Qe,
        disabled: Pe,
        controlled: Ye.controlled,
        reference: Pt,
        floating: Nt,
        x: Ye.floating.x,
        y: Ye.floating.y,
        arrowX: (Ot = (gt = (Pn = Ye.floating) == null ? void 0 : Pn.middlewareData) == null ? void 0 : gt.arrow) == null ? void 0 : Ot.x,
        arrowY: (_t = (Ur = (Xn = Ye.floating) == null ? void 0 : Xn.middlewareData) == null ? void 0 : Ur.arrow) == null ? void 0 : _t.y,
        opened: Ye.opened,
        arrowRef: ir,
        transitionProps: u,
        width: f,
        withArrow: p,
        arrowSize: m,
        arrowOffset: v,
        arrowRadius: C,
        arrowPosition: E,
        placement: Ye.floating.placement,
        trapFocus: U,
        withinPortal: I,
        portalProps: O,
        zIndex: ee,
        radius: fe,
        shadow: oe,
        closeOnEscape: L,
        onClose: Ye.onClose,
        onToggle: Ye.onToggle,
        getTargetId: () => `${Cr}-target`,
        getDropdownId: () => `${Cr}-dropdown`,
        withRoles: re,
        targetProps: cn,
        __staticSelector: ie,
        classNames: R,
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
Qn.Target = uv;
Qn.Dropdown = nd;
Qn.displayName = "@mantine/core/Popover";
Qn.extend = (r) => r;
var zr = { root: "m-5ae2e3c", barsLoader: "m-7a2bd4cd", bar: "m-870bb79", "bars-loader-animation": "m-5d2b3b9d", dotsLoader: "m-4e3f22d7", dot: "m-870c4af", "loader-dots-animation": "m-aac34a1", ovalLoader: "m-b34414df", "oval-loader-animation": "m-f8e89c4b" };
const IP = lt(({ className: r, ...e }, t) => /* @__PURE__ */ P.createElement(ke, { component: "span", className: Rn(zr.barsLoader, r), ...e, ref: t }, /* @__PURE__ */ P.createElement("span", { className: zr.bar }), /* @__PURE__ */ P.createElement("span", { className: zr.bar }), /* @__PURE__ */ P.createElement("span", { className: zr.bar }))), AP = lt(({ className: r, ...e }, t) => /* @__PURE__ */ P.createElement(ke, { component: "span", className: Rn(zr.dotsLoader, r), ...e, ref: t }, /* @__PURE__ */ P.createElement("span", { className: zr.dot }), /* @__PURE__ */ P.createElement("span", { className: zr.dot }), /* @__PURE__ */ P.createElement("span", { className: zr.dot }))), RP = lt(({ className: r, ...e }, t) => /* @__PURE__ */ P.createElement(ke, { component: "span", className: Rn(zr.ovalLoader, r), ...e, ref: t })), dv = {
  bars: IP,
  oval: RP,
  dots: AP
}, kP = {
  loaders: dv,
  type: "oval"
}, PP = (r, { size: e, color: t }) => ({
  root: {
    "--loader-size": Ht(e, "loader-size"),
    "--loader-color": t ? Zi(t, r) : void 0
  }
}), nc = Ue((r, e) => {
  const t = Ce("Loader", kP, r), {
    size: n,
    color: o,
    type: a,
    vars: s,
    className: l,
    style: u,
    classNames: f,
    styles: h,
    unstyled: p,
    loaders: m,
    variant: v,
    children: C,
    ...E
  } = t, _ = ut({
    name: "Loader",
    props: t,
    classes: zr,
    className: l,
    style: u,
    classNames: f,
    styles: h,
    unstyled: p,
    vars: s,
    varsResolver: PP
  });
  return C ? /* @__PURE__ */ P.createElement(ke, { ..._("root"), ref: e, ...E }, C) : /* @__PURE__ */ P.createElement(
    ke,
    {
      ..._("root"),
      ref: e,
      component: m[a],
      variant: v,
      size: n,
      ...E
    }
  );
});
nc.defaultLoaders = dv;
nc.classes = zr;
nc.displayName = "@mantine/core/Loader";
const fv = lt(
  ({ size: r = "var(--cb-icon-size, 70%)", style: e, ...t }, n) => /* @__PURE__ */ P.createElement(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...e, width: r, height: r },
      ref: n,
      ...t
    },
    /* @__PURE__ */ P.createElement(
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
fv.displayName = "@mantine/core/CloseIcon";
var hv = { root: "m-86a44da5", "root--subtle": "m-220c80f2" };
const NP = {
  variant: "subtle"
}, OP = (r, { size: e, radius: t, iconSize: n }) => ({
  root: {
    "--cb-size": Ht(e, "cb-size"),
    "--cb-radius": t === void 0 ? void 0 : fi(t),
    "--cb-icon-size": $(n)
  }
}), od = ua((r, e) => {
  const t = Ce("CloseButton", NP, r), {
    iconSize: n,
    children: o,
    vars: a,
    radius: s,
    className: l,
    classNames: u,
    style: f,
    styles: h,
    unstyled: p,
    "data-disabled": m,
    disabled: v,
    variant: C,
    ...E
  } = t, _ = ut({
    name: "CloseButton",
    props: t,
    className: l,
    style: f,
    classes: hv,
    classNames: u,
    styles: h,
    unstyled: p,
    vars: a,
    varsResolver: OP
  });
  return /* @__PURE__ */ P.createElement(
    fa,
    {
      ref: e,
      ...E,
      unstyled: p,
      variant: C,
      disabled: v,
      mod: { disabled: v || m },
      ..._("root", { variant: C, active: !0 })
    },
    /* @__PURE__ */ P.createElement(fv, null),
    o
  );
});
od.classes = hv;
od.displayName = "@mantine/core/CloseButton";
function MP(r) {
  return Xl.toArray(r).filter(Boolean);
}
var pv = { root: "m-4081bf90" };
const xP = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, LP = (r, { grow: e, preventGrowOverflow: t, gap: n, align: o, justify: a, wrap: s }, { childWidth: l }) => ({
  root: {
    "--group-child-width": e && t ? l : void 0,
    "--group-gap": Bu(n),
    "--group-align": o,
    "--group-justify": a,
    "--group-wrap": s
  }
}), Fs = Ue((r, e) => {
  const t = Ce("Group", xP, r), {
    classNames: n,
    className: o,
    style: a,
    styles: s,
    unstyled: l,
    children: u,
    gap: f,
    align: h,
    justify: p,
    wrap: m,
    grow: v,
    preventGrowOverflow: C,
    vars: E,
    variant: _,
    __size: R,
    ...A
  } = t, S = MP(u), I = S.length, O = Bu(f ?? "md"), q = { childWidth: `calc(${100 / I}% - (${O} - ${O} / ${I}))` }, U = ut({
    name: "Group",
    props: t,
    stylesCtx: q,
    className: o,
    style: a,
    classes: pv,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: E,
    varsResolver: LP
  });
  return /* @__PURE__ */ P.createElement(
    ke,
    {
      ...U("root"),
      ref: e,
      variant: _,
      mod: { grow: v },
      size: R,
      ...A
    },
    S
  );
});
Fs.classes = pv;
Fs.displayName = "@mantine/core/Group";
const [DP, pa] = TA({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var xr = { wrapper: "m-6c018570", input: "m-8fb7ebe7", section: "m-82577fc2", placeholder: "m-88bacfd0", root: "m-46b77525", label: "m-8fdc1311", required: "m-78a94662", error: "m-8f816625", description: "m-fe47ce59" };
const vg = {}, UP = (r, { size: e }) => ({
  description: {
    "--input-description-size": e === void 0 ? void 0 : `calc(${Pr(e)} - ${$(2)})`
  }
}), oc = Ue((r, e) => {
  const t = Ce("InputDescription", vg, r), {
    classNames: n,
    className: o,
    style: a,
    styles: s,
    unstyled: l,
    vars: u,
    size: f,
    __staticSelector: h,
    __inheritStyles: p = !0,
    variant: m,
    ...v
  } = Ce("InputDescription", vg, t), C = pa(), E = ut({
    name: ["InputWrapper", h],
    props: t,
    classes: xr,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    rootSelector: "description",
    vars: u,
    varsResolver: UP
  }), _ = p && (C == null ? void 0 : C.getStyles) || E;
  return /* @__PURE__ */ P.createElement(
    ke,
    {
      component: "p",
      ref: e,
      variant: m,
      size: f,
      ..._("description"),
      ...v
    }
  );
});
oc.classes = xr;
oc.displayName = "@mantine/core/InputDescription";
const FP = {}, HP = (r, { size: e }) => ({
  error: {
    "--input-error-size": e === void 0 ? void 0 : `calc(${Pr(e)} - ${$(2)})`
  }
}), ic = Ue((r, e) => {
  const t = Ce("InputError", FP, r), {
    classNames: n,
    className: o,
    style: a,
    styles: s,
    unstyled: l,
    vars: u,
    size: f,
    __staticSelector: h,
    __inheritStyles: p = !0,
    variant: m,
    ...v
  } = t, C = ut({
    name: ["InputWrapper", h],
    props: t,
    classes: xr,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    rootSelector: "error",
    vars: u,
    varsResolver: HP
  }), E = pa(), _ = p && (E == null ? void 0 : E.getStyles) || C;
  return /* @__PURE__ */ P.createElement(
    ke,
    {
      component: "p",
      ref: e,
      variant: m,
      size: f,
      ..._("error"),
      ...v
    }
  );
});
ic.classes = xr;
ic.displayName = "@mantine/core/InputError";
const yg = {
  labelElement: "label"
}, BP = (r, { size: e }) => ({
  label: {
    "--input-label-size": Pr(e),
    "--input-asterisk-color": void 0
  }
}), ac = Ue((r, e) => {
  const t = Ce("InputLabel", yg, r), {
    classNames: n,
    className: o,
    style: a,
    styles: s,
    unstyled: l,
    vars: u,
    labelElement: f,
    size: h,
    required: p,
    htmlFor: m,
    onMouseDown: v,
    children: C,
    __staticSelector: E,
    variant: _,
    ...R
  } = Ce("InputLabel", yg, t), A = ut({
    name: ["InputWrapper", E],
    props: t,
    classes: xr,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    rootSelector: "label",
    vars: u,
    varsResolver: BP
  }), S = pa(), I = (S == null ? void 0 : S.getStyles) || A;
  return /* @__PURE__ */ P.createElement(
    ke,
    {
      ...I("label"),
      component: f,
      variant: _,
      size: h,
      ref: e,
      htmlFor: f === "label" ? m : void 0,
      mod: { required: p },
      onMouseDown: (O) => {
        v == null || v(O), !O.defaultPrevented && O.detail > 1 && O.preventDefault();
      },
      ...R
    },
    C,
    p && /* @__PURE__ */ P.createElement("span", { ...I("required"), "aria-hidden": !0 }, " *")
  );
});
ac.classes = xr;
ac.displayName = "@mantine/core/InputLabel";
const Cg = {}, id = Ue((r, e) => {
  const t = Ce("InputPlaceholder", Cg, r), {
    classNames: n,
    className: o,
    style: a,
    styles: s,
    unstyled: l,
    vars: u,
    __staticSelector: f,
    variant: h,
    error: p,
    ...m
  } = Ce("InputPlaceholder", Cg, t), v = ut({
    name: ["InputPlaceholder", f],
    props: t,
    classes: xr,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    rootSelector: "placeholder"
  });
  return /* @__PURE__ */ P.createElement(
    ke,
    {
      ...v("placeholder"),
      mod: { error: !!p },
      component: "span",
      variant: h,
      ref: e,
      ...m
    }
  );
});
id.classes = xr;
id.displayName = "@mantine/core/InputPlaceholder";
function KP(r, { hasDescription: e, hasError: t }) {
  const n = r.findIndex((u) => u === "input"), o = r[n - 1], a = r[n + 1];
  return { offsetBottom: e && a === "description" || t && a === "error", offsetTop: e && o === "description" || t && o === "error" };
}
const qP = {
  labelElement: "label",
  inputContainer: (r) => r,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, $P = (r, { size: e }) => ({
  label: {
    "--input-label-size": Pr(e),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": e === void 0 ? void 0 : `calc(${Pr(e)} - ${$(2)})`
  },
  description: {
    "--input-description-size": e === void 0 ? void 0 : `calc(${Pr(e)} - ${$(2)})`
  }
}), ad = Ue((r, e) => {
  const t = Ce("InputWrapper", qP, r), {
    classNames: n,
    className: o,
    style: a,
    styles: s,
    unstyled: l,
    vars: u,
    size: f,
    variant: h,
    __staticSelector: p,
    inputContainer: m,
    inputWrapperOrder: v,
    label: C,
    error: E,
    description: _,
    labelProps: R,
    descriptionProps: A,
    errorProps: S,
    labelElement: I,
    children: O,
    withAsterisk: L,
    id: q,
    required: U,
    __stylesApiProps: Y,
    ...Q
  } = t, de = ut({
    name: ["InputWrapper", p],
    props: Y || t,
    classes: xr,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: u,
    varsResolver: $P
  }), ee = {
    size: f,
    variant: h,
    __staticSelector: p
  }, fe = To(q), oe = typeof L == "boolean" ? L : U, we = (S == null ? void 0 : S.id) || `${fe}-error`, J = (A == null ? void 0 : A.id) || `${fe}-description`, ie = fe, re = !!E && typeof E != "boolean", Pe = !!_, Qe = `${re ? we : ""} ${Pe ? J : ""}`, ot = Qe.trim().length > 0 ? Qe.trim() : void 0, dt = (R == null ? void 0 : R.id) || `${fe}-label`, Yr = C && /* @__PURE__ */ P.createElement(
    ac,
    {
      key: "label",
      labelElement: I,
      id: dt,
      htmlFor: ie,
      required: oe,
      ...ee,
      ...R
    },
    C
  ), cn = Pe && /* @__PURE__ */ P.createElement(
    oc,
    {
      key: "description",
      ...A,
      ...ee,
      size: (A == null ? void 0 : A.size) || ee.size,
      id: (A == null ? void 0 : A.id) || J
    },
    _
  ), jt = /* @__PURE__ */ P.createElement(P.Fragment, { key: "input" }, m(O)), ir = re && /* @__PURE__ */ P.createElement(
    ic,
    {
      ...S,
      ...ee,
      size: (S == null ? void 0 : S.size) || ee.size,
      key: "error",
      id: (S == null ? void 0 : S.id) || we
    },
    E
  ), ln = v.map((ar) => {
    switch (ar) {
      case "label":
        return Yr;
      case "input":
        return jt;
      case "description":
        return cn;
      case "error":
        return ir;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ P.createElement(
    DP,
    {
      value: {
        getStyles: de,
        describedBy: ot,
        inputId: ie,
        labelId: dt,
        ...KP(v, { hasDescription: Pe, hasError: re })
      }
    },
    /* @__PURE__ */ P.createElement(
      ke,
      {
        ref: e,
        variant: h,
        size: f,
        mod: { error: !!E },
        ...de("root"),
        ...Q
      },
      ln
    )
  );
});
ad.classes = xr;
ad.displayName = "@mantine/core/InputWrapper";
const GP = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: !0,
  withErrorStyles: !0
}, zP = (r, e, t) => ({
  wrapper: {
    "--input-margin-top": t.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": t.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": Ht(e.size, "input-height"),
    "--input-fz": Pr(e.size),
    "--input-radius": e.radius === void 0 ? void 0 : fi(e.radius),
    "--input-left-section-width": e.leftSectionWidth !== void 0 ? $(e.leftSectionWidth) : void 0,
    "--input-right-section-width": e.rightSectionWidth !== void 0 ? $(e.rightSectionWidth) : void 0,
    "--input-padding-y": e.multiline ? Ht(e.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": e.leftSectionPointerEvents,
    "--input-right-section-pointer-events": e.rightSectionPointerEvents
  }
}), Bt = ua((r, e) => {
  const t = Ce("Input", GP, r), {
    classNames: n,
    className: o,
    style: a,
    styles: s,
    unstyled: l,
    required: u,
    __staticSelector: f,
    __stylesApiProps: h,
    size: p,
    wrapperProps: m,
    error: v,
    disabled: C,
    leftSection: E,
    leftSectionProps: _,
    leftSectionWidth: R,
    rightSection: A,
    rightSectionProps: S,
    rightSectionWidth: I,
    rightSectionPointerEvents: O,
    leftSectionPointerEvents: L,
    variant: q,
    vars: U,
    pointer: Y,
    multiline: Q,
    radius: de,
    id: ee,
    withAria: fe,
    withErrorStyles: oe,
    ...we
  } = t, { styleProps: J, rest: ie } = Zs(we), re = pa(), Pe = { offsetBottom: re == null ? void 0 : re.offsetBottom, offsetTop: re == null ? void 0 : re.offsetTop }, Qe = ut({
    name: ["Input", f],
    props: h || t,
    classes: xr,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    stylesCtx: Pe,
    rootSelector: "wrapper",
    vars: U,
    varsResolver: zP
  }), ot = fe ? {
    required: u,
    disabled: C,
    "aria-invalid": !!v,
    "aria-describedby": re == null ? void 0 : re.describedBy,
    id: (re == null ? void 0 : re.inputId) || ee
  } : {};
  return /* @__PURE__ */ P.createElement(
    ke,
    {
      ...Qe("wrapper"),
      ...J,
      ...m,
      mod: {
        error: !!v && oe,
        pointer: Y,
        disabled: C,
        multiline: Q,
        "data-with-right-section": !!A,
        "data-with-left-section": !!E
      },
      variant: q,
      size: p
    },
    E && /* @__PURE__ */ P.createElement(
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
    /* @__PURE__ */ P.createElement(
      ke,
      {
        component: "input",
        ...ie,
        ...ot,
        ref: e,
        required: u,
        mod: { disabled: C, error: !!v && oe },
        variant: q,
        ...Qe("input")
      }
    ),
    A && /* @__PURE__ */ P.createElement(
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
Bt.classes = xr;
Bt.Wrapper = ad;
Bt.Label = ac;
Bt.Error = ic;
Bt.Description = oc;
Bt.Placeholder = id;
Bt.displayName = "@mantine/core/Input";
function VP(r, e, t) {
  const n = Ce(r, e, t), {
    label: o,
    description: a,
    error: s,
    required: l,
    classNames: u,
    styles: f,
    className: h,
    unstyled: p,
    __staticSelector: m,
    __stylesApiProps: v,
    errorProps: C,
    labelProps: E,
    descriptionProps: _,
    wrapperProps: R,
    id: A,
    size: S,
    style: I,
    inputContainer: O,
    inputWrapperOrder: L,
    withAsterisk: q,
    variant: U,
    vars: Y,
    ...Q
  } = n, { styleProps: de, rest: ee } = Zs(Q), fe = {
    label: o,
    description: a,
    error: s,
    required: l,
    classNames: u,
    className: h,
    __staticSelector: m,
    __stylesApiProps: v || n,
    errorProps: C,
    labelProps: E,
    descriptionProps: _,
    unstyled: p,
    styles: f,
    size: S,
    style: I,
    inputContainer: O,
    inputWrapperOrder: L,
    withAsterisk: q,
    variant: U,
    id: A,
    ...R
  };
  return {
    ...ee,
    classNames: u,
    styles: f,
    unstyled: p,
    wrapperProps: { ...fe, ...de },
    inputProps: {
      required: l,
      classNames: u,
      styles: f,
      unstyled: p,
      size: S,
      __staticSelector: m,
      __stylesApiProps: v || n,
      error: s,
      variant: U,
      id: A
    }
  };
}
const WP = {
  __staticSelector: "InputBase",
  withAria: !0
}, Jn = ua((r, e) => {
  const { inputProps: t, wrapperProps: n, ...o } = VP("InputBase", WP, r);
  return /* @__PURE__ */ P.createElement(Bt.Wrapper, { ...n }, /* @__PURE__ */ P.createElement(Bt, { ...t, ...o, ref: e }));
});
Jn.classes = { ...Bt.classes, ...Bt.Wrapper.classes };
Jn.displayName = "@mantine/core/InputBase";
const [jP, sd] = di(
  "Accordion component was not found in the tree"
);
function cd({ style: r, size: e = 16, ...t }) {
  return /* @__PURE__ */ P.createElement(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...r, width: $(e), height: $(e), display: "block" },
      ...t
    },
    /* @__PURE__ */ P.createElement(
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
cd.displayName = "@mantine/core/AccordionChevron";
const [YP, gv] = di("Accordion.Item component was not found in the tree");
var ga = { root: "m-9bdbb667", panel: "m-df78851f", content: "m-4ba554d4", itemTitle: "m-8fa820a0", control: "m-4ba585b8", "control--default": "m-6939a5e9", "control--contained": "m-4271d21b", label: "m-df3ffa0f", chevron: "m-3f35ae96", icon: "m-9bd771fe", item: "m-9bd7b098", "item--default": "m-fe19b709", "item--contained": "m-1f921b3b", "item--filled": "m-2cdf939a", "item--separated": "m-9f59b069" };
const QP = {}, ld = Ue((r, e) => {
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
    disabled: m,
    ...v
  } = Ce("AccordionControl", QP, r), { value: C } = gv(), E = sd(), _ = E.isItemActive(C), R = typeof E.order == "number", A = `h${E.order}`, S = /* @__PURE__ */ P.createElement(
    fa,
    {
      ...v,
      ...E.getStyles("control", { className: n, classNames: t, style: o, styles: a, variant: E.variant }),
      unstyled: E.unstyled,
      mod: [
        "accordion-control",
        { active: _, "chevron-position": E.chevronPosition, disabled: m }
      ],
      ref: e,
      onClick: (I) => {
        f == null || f(I), E.onChange(C);
      },
      type: "button",
      disabled: m,
      "aria-expanded": _,
      "aria-controls": E.getRegionId(C),
      id: E.getControlId(C),
      onKeyDown: kA({
        siblingSelector: "[data-accordion-control]",
        parentSelector: "[data-accordion]",
        activateOnFocus: !1,
        loop: E.loop,
        orientation: "vertical",
        onKeyDown: h
      })
    },
    /* @__PURE__ */ P.createElement(
      ke,
      {
        component: "span",
        mod: { rotate: !E.disableChevronRotation && _, position: E.chevronPosition },
        ...E.getStyles("chevron", { classNames: t, styles: a })
      },
      l || E.chevron
    ),
    /* @__PURE__ */ P.createElement("span", { ...E.getStyles("label", { classNames: t, styles: a }) }, p),
    u && /* @__PURE__ */ P.createElement(
      ke,
      {
        component: "span",
        mod: { "chevron-position": E.chevronPosition },
        ...E.getStyles("icon", { classNames: t, styles: a })
      },
      u
    )
  );
  return R ? /* @__PURE__ */ P.createElement(A, { ...E.getStyles("itemTitle", { classNames: t, styles: a }) }, S) : S;
});
ld.displayName = "@mantine/core/AccordionControl";
ld.classes = ga;
const JP = {}, ud = Ue((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, value: l, ...u } = Ce(
    "AccordionItem",
    JP,
    r
  ), f = sd();
  return /* @__PURE__ */ P.createElement(YP, { value: { value: l } }, /* @__PURE__ */ P.createElement(
    ke,
    {
      ref: e,
      mod: { active: f.isItemActive(l) },
      ...f.getStyles("item", { className: n, classNames: t, styles: a, style: o, variant: f.variant }),
      ...u
    }
  ));
});
ud.displayName = "@mantine/core/AccordionItem";
ud.classes = ga;
const XP = {}, dd = Ue((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, children: l, ...u } = Ce(
    "AccordionPanel",
    XP,
    r
  ), { value: f } = gv(), h = sd();
  return /* @__PURE__ */ P.createElement(
    Dm,
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
    /* @__PURE__ */ P.createElement("div", { ...h.getStyles("content", { classNames: t, styles: a }) }, l)
  );
});
dd.displayName = "@mantine/core/AccordionPanel";
dd.classes = ga;
const ZP = {
  multiple: !1,
  disableChevronRotation: !1,
  chevronPosition: "right",
  variant: "default",
  chevron: /* @__PURE__ */ P.createElement(cd, null)
}, eN = (r, { transitionDuration: e, chevronSize: t, radius: n }) => ({
  root: {
    "--accordion-transition-duration": e === void 0 ? void 0 : `${e}ms`,
    "--accordion-chevron-size": t === void 0 ? void 0 : $(t),
    "--accordion-radius": n === void 0 ? void 0 : fi(n)
  }
});
function Et(r) {
  const e = Ce("Accordion", ZP, r), {
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
    onChange: m,
    id: v,
    loop: C,
    transitionDuration: E,
    disableChevronRotation: _,
    chevronPosition: R,
    chevronSize: A,
    order: S,
    chevron: I,
    variant: O,
    radius: L,
    ...q
  } = e, U = To(v), [Y, Q] = Eo({
    value: h,
    defaultValue: p,
    finalValue: f ? [] : null,
    onChange: m
  }), de = (oe) => Array.isArray(Y) ? Y.includes(oe) : oe === Y, ee = (oe) => {
    const we = Array.isArray(Y) ? Y.includes(oe) ? Y.filter((J) => J !== oe) : [...Y, oe] : oe === Y ? null : oe;
    Q(we);
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
    varsResolver: eN
  });
  return /* @__PURE__ */ P.createElement(
    jP,
    {
      value: {
        isItemActive: de,
        onChange: ee,
        getControlId: jp(
          `${U}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: jp(
          `${U}-panel`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        transitionDuration: E,
        disableChevronRotation: _,
        chevronPosition: R,
        order: S,
        chevron: I,
        loop: C,
        getStyles: fe,
        variant: O,
        unstyled: s
      }
    },
    /* @__PURE__ */ P.createElement(ke, { ...fe("root"), id: U, ...q, variant: O, "data-accordion": !0 }, u)
  );
}
const tN = (r) => r;
Et.extend = tN;
Et.classes = ga;
Et.displayName = "@mantine/core/Accordion";
Et.Item = ud;
Et.Panel = dd;
Et.Control = ld;
Et.Chevron = cd;
function mv(r) {
  return typeof r == "string" ? { value: r, label: r } : typeof r == "number" ? { value: r.toString(), label: r.toString() } : "group" in r ? {
    group: r.group,
    items: r.items.map((e) => mv(e))
  } : r;
}
function vv(r) {
  return r ? r.map(mv) : [];
}
function fd(r) {
  return r.reduce((e, t) => "group" in t ? { ...e, ...fd(t.items) } : (e[t.value] = t, e), {});
}
var Wt = { dropdown: "m-88b62a41", options: "m-b2821a6e", option: "m-92253aa5", search: "m-985517d8", empty: "m-2530cd1d", header: "m-858f94bd", footer: "m-82b967cb", group: "m-254f3e4f", groupLabel: "m-2bb2e9e5", chevron: "m-2943220b", optionsDropdownScrollArea: "m-71d052f9", optionsDropdownOption: "m-390b5f4", optionsDropdownCheckIcon: "m-8ee53fc2" };
const rN = {
  error: null
}, nN = (r, { size: e }) => ({
  chevron: {
    "--combobox-chevron-size": Ht(e, "combobox-chevron-size")
  }
}), hd = Ue((r, e) => {
  const t = Ce("ComboboxChevron", rN, r), { size: n, error: o, style: a, className: s, classNames: l, styles: u, unstyled: f, vars: h, ...p } = t, m = ut({
    name: "ComboboxChevron",
    classes: Wt,
    props: t,
    style: a,
    className: s,
    classNames: l,
    styles: u,
    unstyled: f,
    vars: h,
    varsResolver: nN,
    rootSelector: "chevron"
  });
  return /* @__PURE__ */ P.createElement(
    ke,
    {
      component: "svg",
      ...p,
      ...m("chevron"),
      size: n,
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      mod: ["combobox-chevron", { error: o }],
      ref: e
    },
    /* @__PURE__ */ P.createElement(
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
hd.classes = Wt;
hd.displayName = "@mantine/core/ComboboxChevron";
const [oN, Lr] = di(
  "Combobox component was not found in tree"
), yv = lt(
  ({ size: r, onMouseDown: e, onClick: t, onClear: n, ...o }, a) => /* @__PURE__ */ P.createElement(
    od,
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
yv.displayName = "@mantine/core/ComboboxClearButton";
const iN = {}, pd = Ue((r, e) => {
  const { classNames: t, styles: n, className: o, style: a, hidden: s, ...l } = Ce(
    "ComboboxDropdown",
    iN,
    r
  ), u = Lr();
  return /* @__PURE__ */ P.createElement(
    Qn.Dropdown,
    {
      ...l,
      ref: e,
      role: "presentation",
      "data-hidden": s || void 0,
      ...u.getStyles("dropdown", { className: o, style: a, classNames: t, styles: n })
    }
  );
});
pd.classes = Wt;
pd.displayName = "@mantine/core/ComboboxDropdown";
const aN = {
  refProp: "ref"
}, Cv = Ue((r, e) => {
  const { children: t, refProp: n } = Ce("ComboboxDropdownTarget", aN, r);
  if (Lr(), !ca(t))
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  return /* @__PURE__ */ P.createElement(Qn.Target, { ref: e, refProp: n }, t);
});
Cv.displayName = "@mantine/core/ComboboxDropdownTarget";
const sN = {}, gd = Ue((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, ...l } = Ce(
    "ComboboxEmpty",
    sN,
    r
  ), u = Lr();
  return /* @__PURE__ */ P.createElement(
    ke,
    {
      ref: e,
      ...u.getStyles("empty", { className: n, classNames: t, styles: a, style: o }),
      ...l
    }
  );
});
gd.classes = Wt;
gd.displayName = "@mantine/core/ComboboxEmpty";
function md({
  onKeyDown: r,
  withKeyboardNavigation: e,
  withAriaAttributes: t,
  withExpandedAttribute: n,
  targetType: o
}) {
  const a = Lr(), [s, l] = ge(null), u = (h) => {
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
const cN = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1
}, wv = Ue((r, e) => {
  const {
    children: t,
    refProp: n,
    withKeyboardNavigation: o,
    withAriaAttributes: a,
    withExpandedAttribute: s,
    targetType: l,
    ...u
  } = Ce("ComboboxEventsTarget", cN, r);
  if (!ca(t))
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const f = Lr(), h = md({
    targetType: l,
    withAriaAttributes: a,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: t.props.onKeyDown
  });
  return Vs(t, {
    ...h,
    ...u,
    [n]: Or(e, f.store.targetRef, t == null ? void 0 : t.ref)
  });
});
wv.displayName = "@mantine/core/ComboboxEventsTarget";
const lN = {}, vd = Ue((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, ...l } = Ce(
    "ComboboxFooter",
    lN,
    r
  ), u = Lr();
  return /* @__PURE__ */ P.createElement(
    ke,
    {
      ref: e,
      ...u.getStyles("footer", { className: n, classNames: t, style: o, styles: a }),
      ...l
    }
  );
});
vd.classes = Wt;
vd.displayName = "@mantine/core/ComboboxFooter";
const uN = {}, yd = Ue((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, children: l, label: u, ...f } = Ce(
    "ComboboxGroup",
    uN,
    r
  ), h = Lr();
  return /* @__PURE__ */ P.createElement(
    ke,
    {
      ref: e,
      ...h.getStyles("group", { className: n, classNames: t, style: o, styles: a }),
      ...f
    },
    u && /* @__PURE__ */ P.createElement("div", { ...h.getStyles("groupLabel", { classNames: t, styles: a }) }, u),
    l
  );
});
yd.classes = Wt;
yd.displayName = "@mantine/core/ComboboxGroup";
const dN = {}, Cd = Ue((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, ...l } = Ce(
    "ComboboxHeader",
    dN,
    r
  ), u = Lr();
  return /* @__PURE__ */ P.createElement(
    ke,
    {
      ref: e,
      ...u.getStyles("header", { className: n, classNames: t, style: o, styles: a }),
      ...l
    }
  );
});
Cd.classes = Wt;
Cd.displayName = "@mantine/core/ComboboxHeader";
const fN = {}, wd = Ue((r, e) => {
  const t = Ce("ComboboxOption", fN, r), {
    classNames: n,
    className: o,
    style: a,
    styles: s,
    vars: l,
    onClick: u,
    id: f,
    active: h,
    onMouseDown: p,
    onMouseOver: m,
    disabled: v,
    selected: C,
    ...E
  } = t, _ = Lr(), R = $g(), A = f || R;
  return /* @__PURE__ */ P.createElement(
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
        var I;
        v ? S.preventDefault() : ((I = _.onOptionSubmit) == null || I.call(_, t.value, t), u == null || u(S));
      },
      onMouseDown: (S) => {
        S.preventDefault(), p == null || p(S);
      },
      onMouseOver: (S) => {
        _.resetSelectionOnOptionHover && _.store.resetSelectedOption(), m == null || m(S);
      }
    }
  );
});
wd.classes = Wt;
wd.displayName = "@mantine/core/ComboboxOption";
const hN = {}, Ed = Ue((r, e) => {
  const t = Ce("ComboboxOptions", hN, r), { classNames: n, className: o, style: a, styles: s, id: l, onMouseDown: u, labelledBy: f, ...h } = t, p = Lr(), m = To(l);
  return me(() => {
    p.store.setListId(m);
  }, [m]), /* @__PURE__ */ P.createElement(
    ke,
    {
      ref: e,
      ...p.getStyles("options", { className: o, style: a, classNames: n, styles: s }),
      ...h,
      id: m,
      role: "listbox",
      "aria-labelledby": f,
      onMouseDown: (v) => {
        v.preventDefault(), u == null || u(v);
      }
    }
  );
});
Ed.classes = Wt;
Ed.displayName = "@mantine/core/ComboboxOptions";
const pN = {
  withAriaAttributes: !0,
  withKeyboardNavigation: !0
}, bd = Ue((r, e) => {
  const t = Ce("ComboboxSearch", pN, r), {
    classNames: n,
    styles: o,
    unstyled: a,
    vars: s,
    withAriaAttributes: l,
    onKeyDown: u,
    withKeyboardNavigation: f,
    size: h,
    ...p
  } = t, m = Lr(), v = m.getStyles("search"), C = md({
    targetType: "input",
    withAriaAttributes: l,
    withKeyboardNavigation: f,
    withExpandedAttribute: !1,
    onKeyDown: u
  });
  return /* @__PURE__ */ P.createElement(
    Bt,
    {
      ref: Or(e, m.store.searchRef),
      classNames: [{ input: v.className }, n],
      styles: [{ input: v.style }, o],
      size: h || m.size,
      ...C,
      ...p,
      __staticSelector: "Combobox"
    }
  );
});
bd.classes = Wt;
bd.displayName = "@mantine/core/ComboboxSearch";
const gN = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1
}, Ev = Ue((r, e) => {
  const {
    children: t,
    refProp: n,
    withKeyboardNavigation: o,
    withAriaAttributes: a,
    withExpandedAttribute: s,
    targetType: l,
    ...u
  } = Ce("ComboboxTarget", gN, r);
  if (!ca(t))
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const f = Lr(), h = md({
    targetType: l,
    withAriaAttributes: a,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: t.props.onKeyDown
  }), p = Vs(t, {
    ...h,
    ...u
  });
  return /* @__PURE__ */ P.createElement(Qn.Target, { ref: Or(e, f.store.targetRef) }, p);
});
Ev.displayName = "@mantine/core/ComboboxTarget";
function mN(r, e, t) {
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
function vN(r, e, t) {
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
function yN(r) {
  for (let e = 0; e < r.length; e += 1)
    if (!r[e].hasAttribute("data-combobox-disabled"))
      return e;
  return -1;
}
function _d({
  defaultOpened: r,
  opened: e,
  onOpenedChange: t,
  onDropdownClose: n,
  onDropdownOpen: o,
  loop: a = !0,
  scrollBehavior: s = "instant"
} = {}) {
  const [l, u] = Eo({
    value: e,
    defaultValue: r,
    finalValue: !1,
    onChange: t
  }), f = Ke(null), h = Ke(-1), p = Ke(null), m = Ke(null), v = Ke(-1), C = Ke(-1), E = Ke(-1), _ = ze(
    (J = "unknown") => {
      l || (u(!0), o == null || o(J));
    },
    [u, o, l]
  ), R = ze(
    (J = "unknown") => {
      l && (u(!1), n == null || n(J));
    },
    [u, n, l]
  ), A = ze(
    (J = "unknown") => {
      l ? R(J) : _(J);
    },
    [R, _, l]
  ), S = ze(() => {
    const J = document.querySelector(`#${f.current} [data-combobox-selected]`);
    J == null || J.removeAttribute("data-combobox-selected"), J == null || J.removeAttribute("aria-selected");
  }, []), I = ze(
    (J) => {
      const ie = document.getElementById(f.current), re = ie == null ? void 0 : ie.querySelectorAll("[data-combobox-option]");
      if (!re)
        return null;
      const Pe = J >= re.length ? 0 : J < 0 ? re.length - 1 : J;
      return h.current = Pe, re != null && re[Pe] && !re[Pe].hasAttribute("data-combobox-disabled") ? (S(), re[Pe].setAttribute("data-combobox-selected", "true"), re[Pe].setAttribute("aria-selected", "true"), re[Pe].scrollIntoView({ block: "nearest", behavior: s }), re[Pe].id) : null;
    },
    [s, S]
  ), O = ze(() => {
    const J = document.querySelector(
      `#${f.current} [data-combobox-active]`
    );
    if (J) {
      const ie = document.querySelectorAll(
        `#${f.current} [data-combobox-option]`
      ), re = Array.from(ie).findIndex((Pe) => Pe === J);
      return I(re);
    }
    return I(0);
  }, [I]), L = ze(
    () => I(
      vN(
        h.current,
        document.querySelectorAll(`#${f.current} [data-combobox-option]`),
        a
      )
    ),
    [I, a]
  ), q = ze(
    () => I(
      mN(
        h.current,
        document.querySelectorAll(`#${f.current} [data-combobox-option]`),
        a
      )
    ),
    [I, a]
  ), U = ze(
    () => I(
      yN(
        document.querySelectorAll(`#${f.current} [data-combobox-option]`)
      )
    ),
    [I]
  ), Y = ze((J = "selected") => {
    E.current = window.setTimeout(() => {
      const ie = document.querySelectorAll(
        `#${f.current} [data-combobox-option]`
      ), re = Array.from(ie).findIndex(
        (Pe) => Pe.hasAttribute(`data-combobox-${J}`)
      );
      h.current = re;
    }, 0);
  }, []), Q = ze(() => {
    h.current = -1, S();
  }, [S]), de = ze(() => {
    const J = document.querySelectorAll(
      `#${f.current} [data-combobox-option]`
    ), ie = J == null ? void 0 : J[h.current];
    ie == null || ie.click();
  }, []), ee = ze((J) => {
    f.current = J;
  }, []), fe = ze(() => {
    v.current = window.setTimeout(() => p.current.focus(), 0);
  }, []), oe = ze(() => {
    C.current = window.setTimeout(() => m.current.focus(), 0);
  }, []), we = ze(() => h.current, []);
  return me(
    () => () => {
      window.clearTimeout(v.current), window.clearTimeout(C.current), window.clearTimeout(E.current);
    },
    []
  ), {
    dropdownOpened: l,
    openDropdown: _,
    closeDropdown: R,
    toggleDropdown: A,
    selectedOptionIndex: h.current,
    getSelectedOptionIndex: we,
    selectOption: I,
    selectFirstOption: U,
    selectActiveOption: O,
    selectNextOption: L,
    selectPreviousOption: q,
    resetSelectedOption: Q,
    updateSelectedOptionIndex: Y,
    listId: f.current,
    setListId: ee,
    clickSelectedOption: de,
    searchRef: p,
    focusSearchInput: fe,
    targetRef: m,
    focusTarget: oe
  };
}
const CN = {
  keepMounted: !0,
  withinPortal: !0,
  resetSelectionOnOptionHover: !1,
  width: "target",
  transitionProps: { transition: "fade", duration: 0 }
}, wN = (r, { size: e, dropdownPadding: t }) => ({
  options: {
    "--combobox-option-fz": Pr(e),
    "--combobox-option-padding": Ht(e, "combobox-option-padding")
  },
  dropdown: {
    "--combobox-padding": t === void 0 ? void 0 : $(t),
    "--combobox-option-fz": Pr(e),
    "--combobox-option-padding": Ht(e, "combobox-option-padding")
  }
});
function je(r) {
  const e = Ce("Combobox", CN, r), {
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
    __staticSelector: m,
    readOnly: v,
    ...C
  } = e, E = _d(), _ = s || E, R = ut({
    name: m || "Combobox",
    classes: Wt,
    props: e,
    classNames: t,
    styles: n,
    unstyled: o,
    vars: l,
    varsResolver: wN
  });
  return /* @__PURE__ */ P.createElement(
    oN,
    {
      value: {
        getStyles: R,
        store: _,
        onOptionSubmit: u,
        size: f,
        resetSelectionOnOptionHover: p,
        readOnly: v
      }
    },
    /* @__PURE__ */ P.createElement(
      Qn,
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
const EN = (r) => r;
je.extend = EN;
je.classes = Wt;
je.displayName = "@mantine/core/Combobox";
je.Target = Ev;
je.Dropdown = pd;
je.Options = Ed;
je.Option = wd;
je.Search = bd;
je.Empty = gd;
je.Chevron = hd;
je.Footer = vd;
je.Header = Cd;
je.EventsTarget = wv;
je.DropdownTarget = Cv;
je.Group = yd;
je.ClearButton = yv;
var bv = { root: "m-5f75b09e", body: "m-5f6e695e", labelWrapper: "m-d3ea56bb", label: "m-8ee546b8", description: "m-328f68c0", error: "m-8e8a99cc" };
const bN = bv, _v = lt(
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
    size: m,
    labelPosition: v = "left",
    variant: C,
    style: E,
    vars: _,
    ...R
  }, A) => {
    const S = ut({
      name: r,
      props: e,
      className: t,
      style: E,
      classes: bv,
      classNames: n,
      styles: o,
      unstyled: a
    });
    return /* @__PURE__ */ P.createElement(
      ke,
      {
        ...S("root"),
        ref: A,
        __vars: {
          "--label-fz": Pr(m),
          "--label-lh": Ht(m, "label-lh")
        },
        mod: { "label-position": v },
        variant: C,
        size: m,
        ...R
      },
      /* @__PURE__ */ P.createElement("div", { ...S("body") }, s, /* @__PURE__ */ P.createElement("div", { ...S("labelWrapper"), "data-disabled": h || void 0 }, l && /* @__PURE__ */ P.createElement("label", { ...S("label"), "data-disabled": h || void 0, htmlFor: f }, l), u && /* @__PURE__ */ P.createElement(Bt.Description, { size: m, __inheritStyles: !1, ...S("description") }, u), p && p !== "boolean" && /* @__PURE__ */ P.createElement(Bt.Error, { size: m, __inheritStyles: !1, ...S("error") }, p)))
    );
  }
);
_v.displayName = "@mantine/core/InlineInput";
const Sv = So(null), _N = Sv.Provider, SN = () => jn(Sv);
function TN({ children: r, role: e }) {
  const t = pa();
  return t ? /* @__PURE__ */ P.createElement("div", { role: e, "aria-labelledby": t.labelId, "aria-describedby": t.describedBy }, r) : /* @__PURE__ */ P.createElement(P.Fragment, null, r);
}
const IN = {}, Sd = Ue((r, e) => {
  const { value: t, defaultValue: n, onChange: o, size: a, wrapperProps: s, children: l, ...u } = Ce(
    "CheckboxGroup",
    IN,
    r
  ), [f, h] = Eo({
    value: t,
    defaultValue: n,
    finalValue: [],
    onChange: o
  }), p = (m) => {
    const v = m.currentTarget.value;
    h(
      f.includes(v) ? f.filter((C) => C !== v) : [...f, v]
    );
  };
  return /* @__PURE__ */ P.createElement(_N, { value: { value: f, onChange: p, size: a } }, /* @__PURE__ */ P.createElement(
    Bt.Wrapper,
    {
      size: a,
      ref: e,
      ...s,
      ...u,
      labelElement: "div",
      __staticSelector: "CheckboxGroup"
    },
    /* @__PURE__ */ P.createElement(TN, { role: "group" }, l)
  ));
});
Sd.classes = Bt.Wrapper.classes;
Sd.displayName = "@mantine/core/CheckboxGroup";
function Tv({ size: r, style: e, ...t }) {
  const n = r !== void 0 ? { width: $(r), height: $(r), ...e } : e;
  return /* @__PURE__ */ P.createElement(
    "svg",
    {
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: n,
      "aria-hidden": !0,
      ...t
    },
    /* @__PURE__ */ P.createElement(
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
function AN({ indeterminate: r, ...e }) {
  return r ? /* @__PURE__ */ P.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 32 6",
      "aria-hidden": !0,
      ...e
    },
    /* @__PURE__ */ P.createElement("rect", { width: "32", height: "6", fill: "currentColor", rx: "3" })
  ) : /* @__PURE__ */ P.createElement(Tv, { ...e });
}
var Iv = { root: "m-bf2d988c", inner: "m-26062bec", input: "m-26063560", icon: "m-bf295423", "input--outline": "m-215c4542" };
const RN = {
  labelPosition: "right",
  icon: AN
}, kN = (r, { radius: e, color: t, size: n, iconColor: o, variant: a }) => {
  const s = Xs({ color: t || r.primaryColor, theme: r }), l = s.isThemeColor && s.shade === void 0 ? `var(--mantine-color-${s.color}-outline)` : s.color;
  return {
    root: {
      "--checkbox-size": Ht(n, "checkbox-size"),
      "--checkbox-radius": e === void 0 ? void 0 : fi(e),
      "--checkbox-color": a === "outline" ? l : Zi(t, r),
      "--checkbox-icon-color": o ? Zi(o, r) : void 0
    }
  };
}, ma = Ue((r, e) => {
  const t = Ce("Checkbox", RN, r), {
    classNames: n,
    className: o,
    style: a,
    styles: s,
    unstyled: l,
    vars: u,
    color: f,
    label: h,
    id: p,
    size: m,
    radius: v,
    wrapperProps: C,
    children: E,
    checked: _,
    labelPosition: R,
    description: A,
    error: S,
    disabled: I,
    variant: O,
    indeterminate: L,
    icon: q,
    rootRef: U,
    iconColor: Y,
    onChange: Q,
    ...de
  } = t, ee = SN(), fe = m || (ee == null ? void 0 : ee.size), oe = q, we = ut({
    name: "Checkbox",
    props: t,
    classes: Iv,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: u,
    varsResolver: kN
  }), { styleProps: J, rest: ie } = Zs(de), re = To(p), Pe = ee ? {
    checked: ee.value.includes(ie.value),
    onChange: (Qe) => {
      ee.onChange(Qe), Q == null || Q(Qe);
    }
  } : {};
  return /* @__PURE__ */ P.createElement(
    _v,
    {
      ...we("root"),
      __staticSelector: "Checkbox",
      __stylesApiProps: t,
      id: re,
      size: fe,
      labelPosition: R,
      label: h,
      description: A,
      error: S,
      disabled: I,
      classNames: n,
      styles: s,
      unstyled: l,
      "data-checked": Pe.checked || _ || void 0,
      variant: O,
      ref: U,
      ...J,
      ...C
    },
    /* @__PURE__ */ P.createElement(ke, { ...we("inner"), mod: { "data-label-position": R } }, /* @__PURE__ */ P.createElement(
      ke,
      {
        component: "input",
        id: re,
        ref: e,
        checked: _,
        disabled: I,
        mod: { error: !!S, indeterminate: L },
        ...we("input", { focusable: !0, variant: O }),
        onChange: Q,
        ...ie,
        ...Pe,
        type: "checkbox"
      }
    ), /* @__PURE__ */ P.createElement(oe, { indeterminate: L, ...we("icon") }))
  );
});
ma.classes = { ...Iv, ...bN };
ma.displayName = "@mantine/core/Checkbox";
ma.Group = Sd;
function ta(r) {
  return "group" in r;
}
function Av({
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
      items: Av({
        options: s.items,
        search: e,
        limit: t - o.length
      })
    }), ta(s) || s.label.toLowerCase().includes(n) && o.push(s);
  }
  return o;
}
function PN(r) {
  if (r.length === 0)
    return !0;
  for (const e of r)
    if (!("group" in e) || e.items.length > 0)
      return !1;
  return !0;
}
function Rv(r, e = /* @__PURE__ */ new Set()) {
  if (Array.isArray(r))
    for (const t of r)
      if (ta(t))
        Rv(t.items, e);
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
function zl(r, e) {
  return Array.isArray(r) ? r.includes(e) : r === e;
}
function kv({ data: r, withCheckIcon: e, value: t, checkIconPosition: n, unstyled: o }) {
  if (!ta(r)) {
    const s = e && zl(t, r.value) && /* @__PURE__ */ P.createElement(Tv, { className: Wt.optionsDropdownCheckIcon });
    return /* @__PURE__ */ P.createElement(
      je.Option,
      {
        value: r.value,
        disabled: r.disabled,
        className: Rn({ [Wt.optionsDropdownOption]: !o }),
        "data-reverse": n === "right" || void 0,
        "data-checked": zl(t, r.value) || void 0,
        "aria-selected": zl(t, r.value)
      },
      n === "left" && s,
      /* @__PURE__ */ P.createElement("span", null, r.label),
      n === "right" && s
    );
  }
  const a = r.items.map((s) => /* @__PURE__ */ P.createElement(
    kv,
    {
      data: s,
      value: t,
      key: s.value,
      unstyled: o,
      withCheckIcon: e,
      checkIconPosition: n
    }
  ));
  return /* @__PURE__ */ P.createElement(je.Group, { label: r.group }, a);
}
function Pv({
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
  nothingFoundMessage: m,
  unstyled: v,
  labelId: C
}) {
  Rv(r);
  const _ = typeof o == "string" ? (n || Av)({
    options: r,
    search: u ? o : "",
    limit: a ?? 1 / 0
  }) : r, R = PN(_), A = _.map((S) => /* @__PURE__ */ P.createElement(
    kv,
    {
      data: S,
      key: ta(S) ? S.group : S.value,
      withCheckIcon: f,
      value: h,
      checkIconPosition: p,
      unstyled: v
    }
  ));
  return /* @__PURE__ */ P.createElement(je.Dropdown, { hidden: e || t && R }, /* @__PURE__ */ P.createElement(je.Options, { labelledBy: C }, l ? /* @__PURE__ */ P.createElement(
    da.Autosize,
    {
      mah: s ?? 220,
      type: "scroll",
      scrollbarSize: "var(--_combobox-padding)",
      offsetScrollbars: "y",
      className: Wt.optionsDropdownScrollArea
    },
    A
  ) : A, R && m && /* @__PURE__ */ P.createElement(je.Empty, null, m)));
}
const NN = {}, Td = Ue((r, e) => {
  const t = Ce("Autocomplete", NN, r), {
    classNames: n,
    styles: o,
    unstyled: a,
    vars: s,
    dropdownOpened: l,
    defaultDropdownOpened: u,
    onDropdownClose: f,
    onDropdownOpen: h,
    onFocus: p,
    onBlur: m,
    onClick: v,
    onChange: C,
    data: E,
    value: _,
    defaultValue: R,
    selectFirstOptionOnChange: A,
    onOptionSubmit: S,
    comboboxProps: I,
    readOnly: O,
    disabled: L,
    filter: q,
    limit: U,
    withScrollArea: Y,
    maxDropdownHeight: Q,
    size: de,
    id: ee,
    ...fe
  } = t, oe = To(ee), we = vv(E), J = fd(we), [ie, re] = Eo({
    value: _,
    defaultValue: R,
    finalValue: "",
    onChange: C
  }), Pe = _d({
    opened: l,
    defaultOpened: u,
    onDropdownOpen: h,
    onDropdownClose: () => {
      f == null || f(), Pe.resetSelectedOption();
    }
  }), { resolvedClassNames: Qe, resolvedStyles: ot } = Pm({
    props: t,
    styles: o,
    classNames: n
  });
  return me(() => {
    A && Pe.selectFirstOption();
  }, [A, ie]), /* @__PURE__ */ P.createElement(
    je,
    {
      store: Pe,
      __staticSelector: "Autocomplete",
      classNames: Qe,
      styles: ot,
      unstyled: a,
      readOnly: O,
      onOptionSubmit: (dt) => {
        S == null || S(dt), re(J[dt].label), Pe.closeDropdown();
      },
      size: de,
      ...I
    },
    /* @__PURE__ */ P.createElement(je.Target, null, /* @__PURE__ */ P.createElement(
      Jn,
      {
        ref: e,
        ...fe,
        size: de,
        __staticSelector: "Autocomplete",
        disabled: L,
        readOnly: O,
        value: ie,
        onChange: (dt) => {
          re(dt.currentTarget.value), Pe.openDropdown(), A && Pe.selectFirstOption();
        },
        onFocus: (dt) => {
          Pe.openDropdown(), p == null || p(dt);
        },
        onBlur: (dt) => {
          Pe.closeDropdown(), m == null || m(dt);
        },
        onClick: (dt) => {
          Pe.openDropdown(), v == null || v(dt);
        },
        classNames: Qe,
        styles: ot,
        unstyled: a,
        id: oe
      }
    )),
    /* @__PURE__ */ P.createElement(
      Pv,
      {
        data: we,
        hidden: O || L,
        filter: q,
        search: ie,
        limit: U,
        hiddenWhenEmpty: !0,
        withScrollArea: Y,
        maxDropdownHeight: Q,
        unstyled: a,
        labelId: `${oe}-label`
      }
    )
  );
});
Td.classes = { ...Jn.classes, ...je.classes };
Td.displayName = "@mantine/core/Autocomplete";
var sc = { root: "m-77c9d27d", inner: "m-80f1301b", loader: "m-a25b86ee", label: "m-811560b9", section: "m-a74036a", group: "m-80d6d844" };
const wg = {
  orientation: "horizontal"
}, ON = (r, { borderWidth: e }) => ({
  group: { "--button-border-width": $(e) }
}), Id = Ue((r, e) => {
  const t = Ce("ButtonGroup", wg, r), {
    className: n,
    style: o,
    classNames: a,
    styles: s,
    unstyled: l,
    orientation: u,
    vars: f,
    borderWidth: h,
    variant: p,
    ...m
  } = Ce("ButtonGroup", wg, r), v = ut({
    name: "ButtonGroup",
    props: t,
    classes: sc,
    className: n,
    style: o,
    classNames: a,
    styles: s,
    unstyled: l,
    vars: f,
    varsResolver: ON,
    rootSelector: "group"
  });
  return /* @__PURE__ */ P.createElement(
    ke,
    {
      ...v("group"),
      ref: e,
      variant: p,
      mod: { "data-orientation": u },
      role: "group",
      ...m
    }
  );
});
Id.classes = sc;
Id.displayName = "@mantine/core/ButtonGroup";
const MN = {}, xN = (r, { radius: e, color: t, gradient: n, variant: o, size: a, justify: s }) => {
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
      "--button-fz": a != null && a.includes("compact") ? Pr(a.replace("compact-", "")) : Pr(a),
      "--button-radius": e === void 0 ? void 0 : fi(e),
      "--button-bg": t || o ? l.background : void 0,
      "--button-hover": t || o ? l.hover : void 0,
      "--button-color": t || o ? l.color : void 0,
      "--button-bd": t || o ? l.border : void 0,
      "--button-hover-color": t || o ? l.hoverColor : void 0
    }
  };
}, va = ua((r, e) => {
  const t = Ce("Button", MN, r), {
    style: n,
    vars: o,
    className: a,
    color: s,
    disabled: l,
    children: u,
    leftSection: f,
    rightSection: h,
    fullWidth: p,
    variant: m,
    radius: v,
    loading: C,
    loaderProps: E,
    gradient: _,
    classNames: R,
    styles: A,
    unstyled: S,
    "data-disabled": I,
    ...O
  } = t, L = ut({
    name: "Button",
    props: t,
    classes: sc,
    className: a,
    style: n,
    classNames: R,
    styles: A,
    unstyled: S,
    vars: o,
    varsResolver: xN
  }), q = !!f, U = !!h;
  return /* @__PURE__ */ P.createElement(
    fa,
    {
      ref: e,
      ...L("root", { active: !l && !C && !I }),
      unstyled: S,
      variant: m,
      disabled: l || C,
      mod: {
        disabled: l || I,
        loading: C,
        block: p,
        "with-left-section": q,
        "with-right-section": U
      },
      ...O
    },
    /* @__PURE__ */ P.createElement(ke, { component: "span", ...L("loader"), "aria-hidden": !0 }, /* @__PURE__ */ P.createElement(
      nc,
      {
        color: "var(--button-color)",
        size: "calc(var(--button-height) / 1.8)",
        ...E
      }
    )),
    /* @__PURE__ */ P.createElement("span", { ...L("inner") }, f && /* @__PURE__ */ P.createElement(ke, { component: "span", ...L("section"), mod: { position: "left" } }, f), /* @__PURE__ */ P.createElement(ke, { component: "span", mod: { loading: C }, ...L("label") }, u), h && /* @__PURE__ */ P.createElement(ke, { component: "span", ...L("section"), mod: { position: "right" } }, h))
  );
});
va.classes = sc;
va.displayName = "@mantine/core/Button";
va.Group = Id;
var Nv = { root: "m-7485cace" };
const LN = {}, DN = (r, { size: e, fluid: t }) => ({
  root: {
    "--container-size": t ? void 0 : Ht(e, "container-size")
  }
}), Ad = Ue((r, e) => {
  const t = Ce("Container", LN, r), { classNames: n, className: o, style: a, styles: s, unstyled: l, vars: u, fluid: f, ...h } = t, p = ut({
    name: "Container",
    classes: Nv,
    props: t,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: u,
    varsResolver: DN
  });
  return /* @__PURE__ */ P.createElement(ke, { ref: e, mod: { fluid: f }, ...p("root"), ...h });
});
Ad.classes = Nv;
Ad.displayName = "@mantine/core/Container";
const UN = {
  searchable: !1,
  withCheckIcon: !0,
  allowDeselect: !0,
  checkIconPosition: "left"
}, cc = Ue((r, e) => {
  const t = Ce("Select", UN, r), {
    classNames: n,
    styles: o,
    unstyled: a,
    vars: s,
    dropdownOpened: l,
    defaultDropdownOpened: u,
    onDropdownClose: f,
    onDropdownOpen: h,
    onFocus: p,
    onBlur: m,
    onClick: v,
    onChange: C,
    data: E,
    value: _,
    defaultValue: R,
    selectFirstOptionOnChange: A,
    onOptionSubmit: S,
    comboboxProps: I,
    readOnly: O,
    disabled: L,
    filter: q,
    limit: U,
    withScrollArea: Y,
    maxDropdownHeight: Q,
    size: de,
    searchable: ee,
    rightSection: fe,
    checkIconPosition: oe,
    withCheckIcon: we,
    nothingFoundMessage: J,
    name: ie,
    form: re,
    searchValue: Pe,
    defaultSearchValue: Qe,
    onSearchChange: ot,
    allowDeselect: dt,
    error: Yr,
    rightSectionPointerEvents: cn,
    id: jt,
    clearable: ir,
    clearButtonProps: ln,
    hiddenInputProps: ar,
    ...Dr
  } = t, un = ms(() => vv(E), [E]), Kt = ms(() => fd(un), [un]), Cr = To(jt), [Ye, Pt] = Eo({
    value: _,
    defaultValue: R,
    finalValue: null,
    onChange: C
  }), Nt = typeof Ye == "string" ? Kt[Ye] : void 0, [Pn, gt] = Eo({
    value: Pe,
    defaultValue: Qe,
    finalValue: Nt ? Nt.label : "",
    onChange: ot
  }), Ot = _d({
    opened: l,
    defaultOpened: u,
    onDropdownOpen: h,
    onDropdownClose: () => {
      f == null || f(), Ot.resetSelectedOption();
    }
  }), { resolvedClassNames: Xn, resolvedStyles: Ur } = Pm({
    props: t,
    styles: o,
    classNames: n
  });
  me(() => {
    A && Ot.selectFirstOption();
  }, [A, Ye]), me(() => {
    _ === null && gt(""), typeof _ == "string" && Nt && gt(Nt.label);
  }, [_, Nt]);
  const _t = ir && !!Ye && !L && !O && /* @__PURE__ */ P.createElement(
    je.ClearButton,
    {
      size: de,
      ...ln,
      onClear: () => {
        Pt(null), gt("");
      }
    }
  );
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(
    je,
    {
      store: Ot,
      __staticSelector: "Select",
      classNames: Xn,
      styles: Ur,
      unstyled: a,
      readOnly: O,
      onOptionSubmit: (tt) => {
        S == null || S(tt);
        const Qr = dt && Kt[tt].value === Ye ? null : Kt[tt].value;
        Pt(Qr), gt(typeof Qr == "string" ? Kt[tt].label : ""), Ot.closeDropdown();
      },
      size: de,
      ...I
    },
    /* @__PURE__ */ P.createElement(je.Target, { targetType: ee ? "input" : "button" }, /* @__PURE__ */ P.createElement(
      Jn,
      {
        id: Cr,
        ref: e,
        rightSection: fe || _t || /* @__PURE__ */ P.createElement(je.Chevron, { size: de, error: Yr, unstyled: a }),
        rightSectionPointerEvents: cn || (_t ? "all" : "none"),
        ...Dr,
        size: de,
        __staticSelector: "Select",
        disabled: L,
        readOnly: O || !ee,
        value: Pn,
        onChange: (tt) => {
          gt(tt.currentTarget.value), Ot.openDropdown(), A && Ot.selectFirstOption();
        },
        onFocus: (tt) => {
          ee && Ot.openDropdown(), p == null || p(tt);
        },
        onBlur: (tt) => {
          var Qr;
          ee && Ot.closeDropdown(), gt(Ye != null && ((Qr = Kt[Ye]) == null ? void 0 : Qr.label) || ""), m == null || m(tt);
        },
        onClick: (tt) => {
          ee ? Ot.openDropdown() : Ot.toggleDropdown(), v == null || v(tt);
        },
        classNames: Xn,
        styles: Ur,
        unstyled: a,
        pointer: !ee,
        error: Yr
      }
    )),
    /* @__PURE__ */ P.createElement(
      Pv,
      {
        data: un,
        hidden: O || L,
        filter: q,
        search: Pn,
        limit: U,
        hiddenWhenEmpty: !ee || !J,
        withScrollArea: Y,
        maxDropdownHeight: Q,
        filterOptions: ee && (Nt == null ? void 0 : Nt.label) !== Pn,
        value: Ye,
        checkIconPosition: oe,
        withCheckIcon: we,
        nothingFoundMessage: J,
        unstyled: a,
        labelId: `${Cr}-label`
      }
    )
  ), /* @__PURE__ */ P.createElement(
    "input",
    {
      type: "hidden",
      name: ie,
      value: Ye || "",
      form: re,
      disabled: L,
      ...ar
    }
  ));
});
cc.classes = { ...Jn.classes, ...je.classes };
cc.displayName = "@mantine/core/Select";
var Ov = { root: "m-6d731127" };
const FN = {
  gap: "md",
  align: "stretch",
  justify: "flex-start"
}, HN = (r, { gap: e, align: t, justify: n }) => ({
  root: {
    "--stack-gap": Bu(e),
    "--stack-align": t,
    "--stack-justify": n
  }
}), Rd = Ue((r, e) => {
  const t = Ce("Stack", FN, r), {
    classNames: n,
    className: o,
    style: a,
    styles: s,
    unstyled: l,
    vars: u,
    align: f,
    justify: h,
    gap: p,
    variant: m,
    ...v
  } = t, C = ut({
    name: "Stack",
    props: t,
    classes: Ov,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: u,
    varsResolver: HN
  });
  return /* @__PURE__ */ P.createElement(ke, { ref: e, ...C("root"), variant: m, ...v });
});
Rd.classes = Ov;
Rd.displayName = "@mantine/core/Stack";
const BN = {}, yo = Ue((r, e) => {
  const t = Ce("TextInput", BN, r);
  return /* @__PURE__ */ P.createElement(Jn, { component: "input", ref: e, ...t, __staticSelector: "TextInput" });
});
yo.classes = Jn.classes;
yo.displayName = "@mantine/core/TextInput";
const KN = ["h1", "h2", "h3", "h4", "h5", "h6"];
function qN(r, e) {
  const t = e !== void 0 ? e : `h${r}`;
  return KN.includes(t) ? {
    fontSize: `var(--mantine-${t}-font-size)`,
    fontWeight: `var(--mantine-${t}-font-weight)`,
    lineHeight: `var(--mantine-${t}-line-height)`
  } : {
    fontSize: $(t),
    fontWeight: `var(--mantine-h${r}-font-weight)`,
    lineHeight: `var(--mantine-h${r}-line-height)`
  };
}
var Mv = { root: "m-8a5d1357" };
const $N = {
  order: 1
}, GN = (r, { order: e, size: t, lineClamp: n }) => {
  const o = qN(e, t);
  return {
    root: {
      "--title-fw": o.fontWeight,
      "--title-lh": o.lineHeight,
      "--title-fz": o.fontSize,
      "--title-line-clamp": typeof n == "number" ? n.toString() : void 0
    }
  };
}, Hs = Ue((r, e) => {
  const t = Ce("Title", $N, r), {
    classNames: n,
    className: o,
    style: a,
    styles: s,
    unstyled: l,
    order: u,
    vars: f,
    size: h,
    variant: p,
    lineClamp: m,
    ...v
  } = t, C = ut({
    name: "Title",
    props: t,
    classes: Mv,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: f,
    varsResolver: GN
  });
  return [1, 2, 3, 4, 5, 6].includes(u) ? /* @__PURE__ */ P.createElement(
    ke,
    {
      ...C("root"),
      component: `h${u}`,
      variant: p,
      ref: e,
      mod: { order: u, "data-line-clamp": typeof m == "number" },
      size: h,
      ...v
    }
  ) : null;
});
Hs.classes = Mv;
Hs.displayName = "@mantine/core/Title";
var xv = { exports: {} }, zN = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", VN = zN, WN = VN;
function Lv() {
}
function Dv() {
}
Dv.resetWarningCache = Lv;
var jN = function() {
  function r(n, o, a, s, l, u) {
    if (u !== WN) {
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
    checkPropTypes: Dv,
    resetWarningCache: Lv
  };
  return t.PropTypes = t, t;
};
xv.exports = jN();
var YN = xv.exports;
const co = /* @__PURE__ */ o0(YN);
var QN = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, JN = Object.defineProperty, XN = Object.defineProperties, ZN = Object.getOwnPropertyDescriptors, Bs = Object.getOwnPropertySymbols, Uv = Object.prototype.hasOwnProperty, Fv = Object.prototype.propertyIsEnumerable, Eg = (r, e, t) => e in r ? JN(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, bg = (r, e) => {
  for (var t in e || (e = {}))
    Uv.call(e, t) && Eg(r, t, e[t]);
  if (Bs)
    for (var t of Bs(e))
      Fv.call(e, t) && Eg(r, t, e[t]);
  return r;
}, e1 = (r, e) => XN(r, ZN(e)), t1 = (r, e) => {
  var t = {};
  for (var n in r)
    Uv.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
  if (r != null && Bs)
    for (var n of Bs(r))
      e.indexOf(n) < 0 && Fv.call(r, n) && (t[n] = r[n]);
  return t;
}, Hv = (r, e, t) => {
  const n = lt(
    (o, a) => {
      var s = o, { color: l = "currentColor", size: u = 24, stroke: f = 2, children: h } = s, p = t1(s, ["color", "size", "stroke", "children"]);
      return fp(
        "svg",
        bg(e1(bg({
          ref: a
        }, QN), {
          width: u,
          height: u,
          stroke: l,
          strokeWidth: f,
          className: `tabler-icon tabler-icon-${r}`
        }), p),
        [...t.map(([m, v]) => fp(m, v)), ...h || []]
      );
    }
  );
  return n.propTypes = {
    color: co.string,
    size: co.oneOfType([co.string, co.number]),
    stroke: co.oneOfType([co.string, co.number])
  }, n.displayName = `${e}`, n;
}, r1 = Hv("check", "IconCheck", [
  ["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]
]), n1 = Hv("dots", "IconDots", [
  ["path", { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
  ["path", { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]
]);
function o1({ indeterminate: r, ...e }) {
  return r ? /* @__PURE__ */ Te.jsx(n1, { ...e }) : /* @__PURE__ */ Te.jsx(r1, { ...e });
}
const i1 = {
  components: {
    Checkbox: ma.extend({
      defaultProps: {
        icon: o1,
        variant: "outline"
      },
      classNames: {
        input: "checkBox"
      }
    })
  }
}, _g = {
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
}, a1 = {
  auth: {
    clientId: "0fcd615b-f2b7-4514-9046-7b3e545ba341",
    authority: _g.authorities.signUpSignIn.authority,
    knownAuthorities: [_g.authorityDomain],
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
class s1 {
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
      const h = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {}, p = this.mergeRequestParams(f, h), m = a && this.toQueryString(a), v = this.contentFormatters[
        o || "application/json"
        /* Json */
      ], C = s || p.format;
      return this.customFetch(`${l || this.baseUrl || ""}${n}${m ? `?${m}` : ""}`, {
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
        const R = C ? await E[C]().then((A) => (_.ok ? _.data = A : _.error = A, _)).catch((A) => (_.error = A, _)) : _;
        if (u && this.abortControllers.delete(u), !E.ok)
          throw R;
        return R;
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
class c1 extends s1 {
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
class ci extends c1 {
  constructor(e) {
    super({ baseUrl: e });
  }
}
const kd = {
  test: "https://test.bsdd.buildingsmart.org",
  production: "https://api.bsdd.buildingsmart.org"
}, l1 = "production", u1 = x0, $n = S0;
function Bv(r) {
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
function d1(r) {
  if (!r)
    return { type: void 0, predefinedType: void 0 };
  const e = r.length - [...r].reverse().findIndex((o) => o === o.toLowerCase()), [t, n] = [
    r.slice(0, e),
    r.slice(e)
  ].map((o) => o || void 0);
  return { type: t, predefinedType: n };
}
function f1({ callback: r, domains: e, classifications: t, propertySetMap: n, ifcEntity: o }) {
  const { t: a } = Nu();
  function s(h) {
    if (h in e) {
      const p = e[h];
      if (p)
        return Bv(p);
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
  function u(h, p, m) {
    const v = h ? { ...JSON.parse(JSON.stringify(h)), hasAssociations: [] } : { hasAssociations: [], isDefinedBy: [] };
    return {
      ...p.reduce((E, _) => {
        var A;
        if ((A = _ == null ? void 0 : _.dictionaryUri) != null && A.includes("https://identifier.buildingsmart.org/uri/buildingsmart/ifc/")) {
          const { type: S, predefinedType: I } = d1(_.code);
          return { ...E, type: S, predefinedType: I };
        }
        const R = l(_);
        return R ? { ...E, hasAssociations: [...E.hasAssociations || [], R] } : E;
      }, v),
      isDefinedBy: Object.values(m).length ? Object.values(m) : []
    };
  }
  const f = () => {
    const h = u(o, t, n);
    console.log(h), r(h);
  };
  return /* @__PURE__ */ Te.jsx(va, { color: "gray", fullWidth: !0, onClick: f, variant: "filled", children: a("apply") });
}
var Ks = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Ks.exports;
(function(r, e) {
  (function() {
    var t, n = "4.17.21", o = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", s = "Expected a function", l = "Invalid `variable` option passed into `_.template`", u = "__lodash_hash_undefined__", f = 500, h = "__lodash_placeholder__", p = 1, m = 2, v = 4, C = 1, E = 2, _ = 1, R = 2, A = 4, S = 8, I = 16, O = 32, L = 64, q = 128, U = 256, Y = 512, Q = 30, de = "...", ee = 800, fe = 16, oe = 1, we = 2, J = 3, ie = 1 / 0, re = 9007199254740991, Pe = 17976931348623157e292, Qe = 0 / 0, ot = 4294967295, dt = ot - 1, Yr = ot >>> 1, cn = [
      ["ary", q],
      ["bind", _],
      ["bindKey", R],
      ["curry", S],
      ["curryRight", I],
      ["flip", Y],
      ["partial", O],
      ["partialRight", L],
      ["rearg", U]
    ], jt = "[object Arguments]", ir = "[object Array]", ln = "[object AsyncFunction]", ar = "[object Boolean]", Dr = "[object Date]", un = "[object DOMException]", Kt = "[object Error]", Cr = "[object Function]", Ye = "[object GeneratorFunction]", Pt = "[object Map]", Nt = "[object Number]", Pn = "[object Null]", gt = "[object Object]", Ot = "[object Promise]", Xn = "[object Proxy]", Ur = "[object RegExp]", _t = "[object Set]", tt = "[object String]", Qr = "[object Symbol]", vy = "[object Undefined]", mi = "[object WeakMap]", yy = "[object WeakSet]", vi = "[object ArrayBuffer]", Ro = "[object DataView]", hc = "[object Float32Array]", pc = "[object Float64Array]", gc = "[object Int8Array]", mc = "[object Int16Array]", vc = "[object Int32Array]", yc = "[object Uint8Array]", Cc = "[object Uint8ClampedArray]", wc = "[object Uint16Array]", Ec = "[object Uint32Array]", Cy = /\b__p \+= '';/g, wy = /\b(__p \+=) '' \+/g, Ey = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Dd = /&(?:amp|lt|gt|quot|#39);/g, Ud = /[&<>"']/g, by = RegExp(Dd.source), _y = RegExp(Ud.source), Sy = /<%-([\s\S]+?)%>/g, Ty = /<%([\s\S]+?)%>/g, Fd = /<%=([\s\S]+?)%>/g, Iy = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ay = /^\w*$/, Ry = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, bc = /[\\^$.*+?()[\]{}|]/g, ky = RegExp(bc.source), _c = /^\s+/, Py = /\s/, Ny = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Oy = /\{\n\/\* \[wrapped with (.+)\] \*/, My = /,? & /, xy = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Ly = /[()=,{}\[\]\/\s]/, Dy = /\\(\\)?/g, Uy = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Hd = /\w*$/, Fy = /^[-+]0x[0-9a-f]+$/i, Hy = /^0b[01]+$/i, By = /^\[object .+?Constructor\]$/, Ky = /^0o[0-7]+$/i, qy = /^(?:0|[1-9]\d*)$/, $y = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ya = /($^)/, Gy = /['\n\r\u2028\u2029\\]/g, Ca = "\\ud800-\\udfff", zy = "\\u0300-\\u036f", Vy = "\\ufe20-\\ufe2f", Wy = "\\u20d0-\\u20ff", Bd = zy + Vy + Wy, Kd = "\\u2700-\\u27bf", qd = "a-z\\xdf-\\xf6\\xf8-\\xff", jy = "\\xac\\xb1\\xd7\\xf7", Yy = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Qy = "\\u2000-\\u206f", Jy = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", $d = "A-Z\\xc0-\\xd6\\xd8-\\xde", Gd = "\\ufe0e\\ufe0f", zd = jy + Yy + Qy + Jy, Sc = "['’]", Xy = "[" + Ca + "]", Vd = "[" + zd + "]", wa = "[" + Bd + "]", Wd = "\\d+", Zy = "[" + Kd + "]", jd = "[" + qd + "]", Yd = "[^" + Ca + zd + Wd + Kd + qd + $d + "]", Tc = "\\ud83c[\\udffb-\\udfff]", eC = "(?:" + wa + "|" + Tc + ")", Qd = "[^" + Ca + "]", Ic = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ac = "[\\ud800-\\udbff][\\udc00-\\udfff]", ko = "[" + $d + "]", Jd = "\\u200d", Xd = "(?:" + jd + "|" + Yd + ")", tC = "(?:" + ko + "|" + Yd + ")", Zd = "(?:" + Sc + "(?:d|ll|m|re|s|t|ve))?", ef = "(?:" + Sc + "(?:D|LL|M|RE|S|T|VE))?", tf = eC + "?", rf = "[" + Gd + "]?", rC = "(?:" + Jd + "(?:" + [Qd, Ic, Ac].join("|") + ")" + rf + tf + ")*", nC = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", oC = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", nf = rf + tf + rC, iC = "(?:" + [Zy, Ic, Ac].join("|") + ")" + nf, aC = "(?:" + [Qd + wa + "?", wa, Ic, Ac, Xy].join("|") + ")", sC = RegExp(Sc, "g"), cC = RegExp(wa, "g"), Rc = RegExp(Tc + "(?=" + Tc + ")|" + aC + nf, "g"), lC = RegExp([
      ko + "?" + jd + "+" + Zd + "(?=" + [Vd, ko, "$"].join("|") + ")",
      tC + "+" + ef + "(?=" + [Vd, ko + Xd, "$"].join("|") + ")",
      ko + "?" + Xd + "+" + Zd,
      ko + "+" + ef,
      oC,
      nC,
      Wd,
      iC
    ].join("|"), "g"), uC = RegExp("[" + Jd + Ca + Bd + Gd + "]"), dC = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, fC = [
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
    ], hC = -1, rt = {};
    rt[hc] = rt[pc] = rt[gc] = rt[mc] = rt[vc] = rt[yc] = rt[Cc] = rt[wc] = rt[Ec] = !0, rt[jt] = rt[ir] = rt[vi] = rt[ar] = rt[Ro] = rt[Dr] = rt[Kt] = rt[Cr] = rt[Pt] = rt[Nt] = rt[gt] = rt[Ur] = rt[_t] = rt[tt] = rt[mi] = !1;
    var Xe = {};
    Xe[jt] = Xe[ir] = Xe[vi] = Xe[Ro] = Xe[ar] = Xe[Dr] = Xe[hc] = Xe[pc] = Xe[gc] = Xe[mc] = Xe[vc] = Xe[Pt] = Xe[Nt] = Xe[gt] = Xe[Ur] = Xe[_t] = Xe[tt] = Xe[Qr] = Xe[yc] = Xe[Cc] = Xe[wc] = Xe[Ec] = !0, Xe[Kt] = Xe[Cr] = Xe[mi] = !1;
    var pC = {
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
    }, gC = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, mC = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, vC = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, yC = parseFloat, CC = parseInt, of = typeof Mi == "object" && Mi && Mi.Object === Object && Mi, wC = typeof self == "object" && self && self.Object === Object && self, St = of || wC || Function("return this")(), kc = e && !e.nodeType && e, Zn = kc && !0 && r && !r.nodeType && r, af = Zn && Zn.exports === kc, Pc = af && of.process, wr = function() {
      try {
        var M = Zn && Zn.require && Zn.require("util").types;
        return M || Pc && Pc.binding && Pc.binding("util");
      } catch {
      }
    }(), sf = wr && wr.isArrayBuffer, cf = wr && wr.isDate, lf = wr && wr.isMap, uf = wr && wr.isRegExp, df = wr && wr.isSet, ff = wr && wr.isTypedArray;
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
    function EC(M, H, D, ae) {
      for (var Ie = -1, qe = M == null ? 0 : M.length; ++Ie < qe; ) {
        var mt = M[Ie];
        H(ae, mt, D(mt), M);
      }
      return ae;
    }
    function Er(M, H) {
      for (var D = -1, ae = M == null ? 0 : M.length; ++D < ae && H(M[D], D, M) !== !1; )
        ;
      return M;
    }
    function bC(M, H) {
      for (var D = M == null ? 0 : M.length; D-- && H(M[D], D, M) !== !1; )
        ;
      return M;
    }
    function hf(M, H) {
      for (var D = -1, ae = M == null ? 0 : M.length; ++D < ae; )
        if (!H(M[D], D, M))
          return !1;
      return !0;
    }
    function Nn(M, H) {
      for (var D = -1, ae = M == null ? 0 : M.length, Ie = 0, qe = []; ++D < ae; ) {
        var mt = M[D];
        H(mt, D, M) && (qe[Ie++] = mt);
      }
      return qe;
    }
    function Ea(M, H) {
      var D = M == null ? 0 : M.length;
      return !!D && Po(M, H, 0) > -1;
    }
    function Nc(M, H, D) {
      for (var ae = -1, Ie = M == null ? 0 : M.length; ++ae < Ie; )
        if (D(H, M[ae]))
          return !0;
      return !1;
    }
    function nt(M, H) {
      for (var D = -1, ae = M == null ? 0 : M.length, Ie = Array(ae); ++D < ae; )
        Ie[D] = H(M[D], D, M);
      return Ie;
    }
    function On(M, H) {
      for (var D = -1, ae = H.length, Ie = M.length; ++D < ae; )
        M[Ie + D] = H[D];
      return M;
    }
    function Oc(M, H, D, ae) {
      var Ie = -1, qe = M == null ? 0 : M.length;
      for (ae && qe && (D = M[++Ie]); ++Ie < qe; )
        D = H(D, M[Ie], Ie, M);
      return D;
    }
    function _C(M, H, D, ae) {
      var Ie = M == null ? 0 : M.length;
      for (ae && Ie && (D = M[--Ie]); Ie--; )
        D = H(D, M[Ie], Ie, M);
      return D;
    }
    function Mc(M, H) {
      for (var D = -1, ae = M == null ? 0 : M.length; ++D < ae; )
        if (H(M[D], D, M))
          return !0;
      return !1;
    }
    var SC = xc("length");
    function TC(M) {
      return M.split("");
    }
    function IC(M) {
      return M.match(xy) || [];
    }
    function pf(M, H, D) {
      var ae;
      return D(M, function(Ie, qe, mt) {
        if (H(Ie, qe, mt))
          return ae = qe, !1;
      }), ae;
    }
    function ba(M, H, D, ae) {
      for (var Ie = M.length, qe = D + (ae ? 1 : -1); ae ? qe-- : ++qe < Ie; )
        if (H(M[qe], qe, M))
          return qe;
      return -1;
    }
    function Po(M, H, D) {
      return H === H ? FC(M, H, D) : ba(M, gf, D);
    }
    function AC(M, H, D, ae) {
      for (var Ie = D - 1, qe = M.length; ++Ie < qe; )
        if (ae(M[Ie], H))
          return Ie;
      return -1;
    }
    function gf(M) {
      return M !== M;
    }
    function mf(M, H) {
      var D = M == null ? 0 : M.length;
      return D ? Dc(M, H) / D : Qe;
    }
    function xc(M) {
      return function(H) {
        return H == null ? t : H[M];
      };
    }
    function Lc(M) {
      return function(H) {
        return M == null ? t : M[H];
      };
    }
    function vf(M, H, D, ae, Ie) {
      return Ie(M, function(qe, mt, Je) {
        D = ae ? (ae = !1, qe) : H(D, qe, mt, Je);
      }), D;
    }
    function RC(M, H) {
      var D = M.length;
      for (M.sort(H); D--; )
        M[D] = M[D].value;
      return M;
    }
    function Dc(M, H) {
      for (var D, ae = -1, Ie = M.length; ++ae < Ie; ) {
        var qe = H(M[ae]);
        qe !== t && (D = D === t ? qe : D + qe);
      }
      return D;
    }
    function Uc(M, H) {
      for (var D = -1, ae = Array(M); ++D < M; )
        ae[D] = H(D);
      return ae;
    }
    function kC(M, H) {
      return nt(H, function(D) {
        return [D, M[D]];
      });
    }
    function yf(M) {
      return M && M.slice(0, bf(M) + 1).replace(_c, "");
    }
    function cr(M) {
      return function(H) {
        return M(H);
      };
    }
    function Fc(M, H) {
      return nt(H, function(D) {
        return M[D];
      });
    }
    function yi(M, H) {
      return M.has(H);
    }
    function Cf(M, H) {
      for (var D = -1, ae = M.length; ++D < ae && Po(H, M[D], 0) > -1; )
        ;
      return D;
    }
    function wf(M, H) {
      for (var D = M.length; D-- && Po(H, M[D], 0) > -1; )
        ;
      return D;
    }
    function PC(M, H) {
      for (var D = M.length, ae = 0; D--; )
        M[D] === H && ++ae;
      return ae;
    }
    var NC = Lc(pC), OC = Lc(gC);
    function MC(M) {
      return "\\" + vC[M];
    }
    function xC(M, H) {
      return M == null ? t : M[H];
    }
    function No(M) {
      return uC.test(M);
    }
    function LC(M) {
      return dC.test(M);
    }
    function DC(M) {
      for (var H, D = []; !(H = M.next()).done; )
        D.push(H.value);
      return D;
    }
    function Hc(M) {
      var H = -1, D = Array(M.size);
      return M.forEach(function(ae, Ie) {
        D[++H] = [Ie, ae];
      }), D;
    }
    function Ef(M, H) {
      return function(D) {
        return M(H(D));
      };
    }
    function Mn(M, H) {
      for (var D = -1, ae = M.length, Ie = 0, qe = []; ++D < ae; ) {
        var mt = M[D];
        (mt === H || mt === h) && (M[D] = h, qe[Ie++] = D);
      }
      return qe;
    }
    function _a(M) {
      var H = -1, D = Array(M.size);
      return M.forEach(function(ae) {
        D[++H] = ae;
      }), D;
    }
    function UC(M) {
      var H = -1, D = Array(M.size);
      return M.forEach(function(ae) {
        D[++H] = [ae, ae];
      }), D;
    }
    function FC(M, H, D) {
      for (var ae = D - 1, Ie = M.length; ++ae < Ie; )
        if (M[ae] === H)
          return ae;
      return -1;
    }
    function HC(M, H, D) {
      for (var ae = D + 1; ae--; )
        if (M[ae] === H)
          return ae;
      return ae;
    }
    function Oo(M) {
      return No(M) ? KC(M) : SC(M);
    }
    function Fr(M) {
      return No(M) ? qC(M) : TC(M);
    }
    function bf(M) {
      for (var H = M.length; H-- && Py.test(M.charAt(H)); )
        ;
      return H;
    }
    var BC = Lc(mC);
    function KC(M) {
      for (var H = Rc.lastIndex = 0; Rc.test(M); )
        ++H;
      return H;
    }
    function qC(M) {
      return M.match(Rc) || [];
    }
    function $C(M) {
      return M.match(lC) || [];
    }
    var GC = function M(H) {
      H = H == null ? St : Mo.defaults(St.Object(), H, Mo.pick(St, fC));
      var D = H.Array, ae = H.Date, Ie = H.Error, qe = H.Function, mt = H.Math, Je = H.Object, Bc = H.RegExp, zC = H.String, br = H.TypeError, Sa = D.prototype, VC = qe.prototype, xo = Je.prototype, Ta = H["__core-js_shared__"], Ia = VC.toString, We = xo.hasOwnProperty, WC = 0, _f = function() {
        var i = /[^.]+$/.exec(Ta && Ta.keys && Ta.keys.IE_PROTO || "");
        return i ? "Symbol(src)_1." + i : "";
      }(), Aa = xo.toString, jC = Ia.call(Je), YC = St._, QC = Bc(
        "^" + Ia.call(We).replace(bc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ra = af ? H.Buffer : t, xn = H.Symbol, ka = H.Uint8Array, Sf = Ra ? Ra.allocUnsafe : t, Pa = Ef(Je.getPrototypeOf, Je), Tf = Je.create, If = xo.propertyIsEnumerable, Na = Sa.splice, Af = xn ? xn.isConcatSpreadable : t, Ci = xn ? xn.iterator : t, eo = xn ? xn.toStringTag : t, Oa = function() {
        try {
          var i = io(Je, "defineProperty");
          return i({}, "", {}), i;
        } catch {
        }
      }(), JC = H.clearTimeout !== St.clearTimeout && H.clearTimeout, XC = ae && ae.now !== St.Date.now && ae.now, ZC = H.setTimeout !== St.setTimeout && H.setTimeout, Ma = mt.ceil, xa = mt.floor, Kc = Je.getOwnPropertySymbols, ew = Ra ? Ra.isBuffer : t, Rf = H.isFinite, tw = Sa.join, rw = Ef(Je.keys, Je), vt = mt.max, Mt = mt.min, nw = ae.now, ow = H.parseInt, kf = mt.random, iw = Sa.reverse, qc = io(H, "DataView"), wi = io(H, "Map"), $c = io(H, "Promise"), Lo = io(H, "Set"), Ei = io(H, "WeakMap"), bi = io(Je, "create"), La = Ei && new Ei(), Do = {}, aw = ao(qc), sw = ao(wi), cw = ao($c), lw = ao(Lo), uw = ao(Ei), Da = xn ? xn.prototype : t, _i = Da ? Da.valueOf : t, Pf = Da ? Da.toString : t;
      function w(i) {
        if (at(i) && !Re(i) && !(i instanceof De)) {
          if (i instanceof _r)
            return i;
          if (We.call(i, "__wrapped__"))
            return Nh(i);
        }
        return new _r(i);
      }
      var Uo = function() {
        function i() {
        }
        return function(c) {
          if (!it(c))
            return {};
          if (Tf)
            return Tf(c);
          i.prototype = c;
          var d = new i();
          return i.prototype = t, d;
        };
      }();
      function Ua() {
      }
      function _r(i, c) {
        this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!c, this.__index__ = 0, this.__values__ = t;
      }
      w.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Sy,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Ty,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Fd,
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
      }, w.prototype = Ua.prototype, w.prototype.constructor = w, _r.prototype = Uo(Ua.prototype), _r.prototype.constructor = _r;
      function De(i) {
        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ot, this.__views__ = [];
      }
      function dw() {
        var i = new De(this.__wrapped__);
        return i.__actions__ = Yt(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = Yt(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = Yt(this.__views__), i;
      }
      function fw() {
        if (this.__filtered__) {
          var i = new De(this);
          i.__dir__ = -1, i.__filtered__ = !0;
        } else
          i = this.clone(), i.__dir__ *= -1;
        return i;
      }
      function hw() {
        var i = this.__wrapped__.value(), c = this.__dir__, d = Re(i), g = c < 0, y = d ? i.length : 0, b = TE(0, y, this.__views__), T = b.start, k = b.end, x = k - T, B = g ? k : T - 1, K = this.__iteratees__, V = K.length, Z = 0, ue = Mt(x, this.__takeCount__);
        if (!d || !g && y == x && ue == x)
          return eh(i, this.__actions__);
        var ve = [];
        e:
          for (; x-- && Z < ue; ) {
            B += c;
            for (var Oe = -1, ye = i[B]; ++Oe < V; ) {
              var xe = K[Oe], Fe = xe.iteratee, dr = xe.type, Gt = Fe(ye);
              if (dr == we)
                ye = Gt;
              else if (!Gt) {
                if (dr == oe)
                  continue e;
                break e;
              }
            }
            ve[Z++] = ye;
          }
        return ve;
      }
      De.prototype = Uo(Ua.prototype), De.prototype.constructor = De;
      function to(i) {
        var c = -1, d = i == null ? 0 : i.length;
        for (this.clear(); ++c < d; ) {
          var g = i[c];
          this.set(g[0], g[1]);
        }
      }
      function pw() {
        this.__data__ = bi ? bi(null) : {}, this.size = 0;
      }
      function gw(i) {
        var c = this.has(i) && delete this.__data__[i];
        return this.size -= c ? 1 : 0, c;
      }
      function mw(i) {
        var c = this.__data__;
        if (bi) {
          var d = c[i];
          return d === u ? t : d;
        }
        return We.call(c, i) ? c[i] : t;
      }
      function vw(i) {
        var c = this.__data__;
        return bi ? c[i] !== t : We.call(c, i);
      }
      function yw(i, c) {
        var d = this.__data__;
        return this.size += this.has(i) ? 0 : 1, d[i] = bi && c === t ? u : c, this;
      }
      to.prototype.clear = pw, to.prototype.delete = gw, to.prototype.get = mw, to.prototype.has = vw, to.prototype.set = yw;
      function dn(i) {
        var c = -1, d = i == null ? 0 : i.length;
        for (this.clear(); ++c < d; ) {
          var g = i[c];
          this.set(g[0], g[1]);
        }
      }
      function Cw() {
        this.__data__ = [], this.size = 0;
      }
      function ww(i) {
        var c = this.__data__, d = Fa(c, i);
        if (d < 0)
          return !1;
        var g = c.length - 1;
        return d == g ? c.pop() : Na.call(c, d, 1), --this.size, !0;
      }
      function Ew(i) {
        var c = this.__data__, d = Fa(c, i);
        return d < 0 ? t : c[d][1];
      }
      function bw(i) {
        return Fa(this.__data__, i) > -1;
      }
      function _w(i, c) {
        var d = this.__data__, g = Fa(d, i);
        return g < 0 ? (++this.size, d.push([i, c])) : d[g][1] = c, this;
      }
      dn.prototype.clear = Cw, dn.prototype.delete = ww, dn.prototype.get = Ew, dn.prototype.has = bw, dn.prototype.set = _w;
      function fn(i) {
        var c = -1, d = i == null ? 0 : i.length;
        for (this.clear(); ++c < d; ) {
          var g = i[c];
          this.set(g[0], g[1]);
        }
      }
      function Sw() {
        this.size = 0, this.__data__ = {
          hash: new to(),
          map: new (wi || dn)(),
          string: new to()
        };
      }
      function Tw(i) {
        var c = Qa(this, i).delete(i);
        return this.size -= c ? 1 : 0, c;
      }
      function Iw(i) {
        return Qa(this, i).get(i);
      }
      function Aw(i) {
        return Qa(this, i).has(i);
      }
      function Rw(i, c) {
        var d = Qa(this, i), g = d.size;
        return d.set(i, c), this.size += d.size == g ? 0 : 1, this;
      }
      fn.prototype.clear = Sw, fn.prototype.delete = Tw, fn.prototype.get = Iw, fn.prototype.has = Aw, fn.prototype.set = Rw;
      function ro(i) {
        var c = -1, d = i == null ? 0 : i.length;
        for (this.__data__ = new fn(); ++c < d; )
          this.add(i[c]);
      }
      function kw(i) {
        return this.__data__.set(i, u), this;
      }
      function Pw(i) {
        return this.__data__.has(i);
      }
      ro.prototype.add = ro.prototype.push = kw, ro.prototype.has = Pw;
      function Hr(i) {
        var c = this.__data__ = new dn(i);
        this.size = c.size;
      }
      function Nw() {
        this.__data__ = new dn(), this.size = 0;
      }
      function Ow(i) {
        var c = this.__data__, d = c.delete(i);
        return this.size = c.size, d;
      }
      function Mw(i) {
        return this.__data__.get(i);
      }
      function xw(i) {
        return this.__data__.has(i);
      }
      function Lw(i, c) {
        var d = this.__data__;
        if (d instanceof dn) {
          var g = d.__data__;
          if (!wi || g.length < o - 1)
            return g.push([i, c]), this.size = ++d.size, this;
          d = this.__data__ = new fn(g);
        }
        return d.set(i, c), this.size = d.size, this;
      }
      Hr.prototype.clear = Nw, Hr.prototype.delete = Ow, Hr.prototype.get = Mw, Hr.prototype.has = xw, Hr.prototype.set = Lw;
      function Nf(i, c) {
        var d = Re(i), g = !d && so(i), y = !d && !g && Hn(i), b = !d && !g && !y && Ko(i), T = d || g || y || b, k = T ? Uc(i.length, zC) : [], x = k.length;
        for (var B in i)
          (c || We.call(i, B)) && !(T && // Safari 9 has enumerable `arguments.length` in strict mode.
          (B == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          y && (B == "offset" || B == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          b && (B == "buffer" || B == "byteLength" || B == "byteOffset") || // Skip index properties.
          mn(B, x))) && k.push(B);
        return k;
      }
      function Of(i) {
        var c = i.length;
        return c ? i[el(0, c - 1)] : t;
      }
      function Dw(i, c) {
        return Ja(Yt(i), no(c, 0, i.length));
      }
      function Uw(i) {
        return Ja(Yt(i));
      }
      function Gc(i, c, d) {
        (d !== t && !Br(i[c], d) || d === t && !(c in i)) && hn(i, c, d);
      }
      function Si(i, c, d) {
        var g = i[c];
        (!(We.call(i, c) && Br(g, d)) || d === t && !(c in i)) && hn(i, c, d);
      }
      function Fa(i, c) {
        for (var d = i.length; d--; )
          if (Br(i[d][0], c))
            return d;
        return -1;
      }
      function Fw(i, c, d, g) {
        return Ln(i, function(y, b, T) {
          c(g, y, d(y), T);
        }), g;
      }
      function Mf(i, c) {
        return i && Xr(c, wt(c), i);
      }
      function Hw(i, c) {
        return i && Xr(c, Jt(c), i);
      }
      function hn(i, c, d) {
        c == "__proto__" && Oa ? Oa(i, c, {
          configurable: !0,
          enumerable: !0,
          value: d,
          writable: !0
        }) : i[c] = d;
      }
      function zc(i, c) {
        for (var d = -1, g = c.length, y = D(g), b = i == null; ++d < g; )
          y[d] = b ? t : Tl(i, c[d]);
        return y;
      }
      function no(i, c, d) {
        return i === i && (d !== t && (i = i <= d ? i : d), c !== t && (i = i >= c ? i : c)), i;
      }
      function Sr(i, c, d, g, y, b) {
        var T, k = c & p, x = c & m, B = c & v;
        if (d && (T = y ? d(i, g, y, b) : d(i)), T !== t)
          return T;
        if (!it(i))
          return i;
        var K = Re(i);
        if (K) {
          if (T = AE(i), !k)
            return Yt(i, T);
        } else {
          var V = xt(i), Z = V == Cr || V == Ye;
          if (Hn(i))
            return nh(i, k);
          if (V == gt || V == jt || Z && !y) {
            if (T = x || Z ? {} : bh(i), !k)
              return x ? mE(i, Hw(T, i)) : gE(i, Mf(T, i));
          } else {
            if (!Xe[V])
              return y ? i : {};
            T = RE(i, V, k);
          }
        }
        b || (b = new Hr());
        var ue = b.get(i);
        if (ue)
          return ue;
        b.set(i, T), Jh(i) ? i.forEach(function(ye) {
          T.add(Sr(ye, c, d, ye, i, b));
        }) : Yh(i) && i.forEach(function(ye, xe) {
          T.set(xe, Sr(ye, c, d, xe, i, b));
        });
        var ve = B ? x ? dl : ul : x ? Jt : wt, Oe = K ? t : ve(i);
        return Er(Oe || i, function(ye, xe) {
          Oe && (xe = ye, ye = i[xe]), Si(T, xe, Sr(ye, c, d, xe, i, b));
        }), T;
      }
      function Bw(i) {
        var c = wt(i);
        return function(d) {
          return xf(d, i, c);
        };
      }
      function xf(i, c, d) {
        var g = d.length;
        if (i == null)
          return !g;
        for (i = Je(i); g--; ) {
          var y = d[g], b = c[y], T = i[y];
          if (T === t && !(y in i) || !b(T))
            return !1;
        }
        return !0;
      }
      function Lf(i, c, d) {
        if (typeof i != "function")
          throw new br(s);
        return Ni(function() {
          i.apply(t, d);
        }, c);
      }
      function Ti(i, c, d, g) {
        var y = -1, b = Ea, T = !0, k = i.length, x = [], B = c.length;
        if (!k)
          return x;
        d && (c = nt(c, cr(d))), g ? (b = Nc, T = !1) : c.length >= o && (b = yi, T = !1, c = new ro(c));
        e:
          for (; ++y < k; ) {
            var K = i[y], V = d == null ? K : d(K);
            if (K = g || K !== 0 ? K : 0, T && V === V) {
              for (var Z = B; Z--; )
                if (c[Z] === V)
                  continue e;
              x.push(K);
            } else
              b(c, V, g) || x.push(K);
          }
        return x;
      }
      var Ln = ch(Jr), Df = ch(Wc, !0);
      function Kw(i, c) {
        var d = !0;
        return Ln(i, function(g, y, b) {
          return d = !!c(g, y, b), d;
        }), d;
      }
      function Ha(i, c, d) {
        for (var g = -1, y = i.length; ++g < y; ) {
          var b = i[g], T = c(b);
          if (T != null && (k === t ? T === T && !ur(T) : d(T, k)))
            var k = T, x = b;
        }
        return x;
      }
      function qw(i, c, d, g) {
        var y = i.length;
        for (d = Ne(d), d < 0 && (d = -d > y ? 0 : y + d), g = g === t || g > y ? y : Ne(g), g < 0 && (g += y), g = d > g ? 0 : Zh(g); d < g; )
          i[d++] = c;
        return i;
      }
      function Uf(i, c) {
        var d = [];
        return Ln(i, function(g, y, b) {
          c(g, y, b) && d.push(g);
        }), d;
      }
      function Tt(i, c, d, g, y) {
        var b = -1, T = i.length;
        for (d || (d = PE), y || (y = []); ++b < T; ) {
          var k = i[b];
          c > 0 && d(k) ? c > 1 ? Tt(k, c - 1, d, g, y) : On(y, k) : g || (y[y.length] = k);
        }
        return y;
      }
      var Vc = lh(), Ff = lh(!0);
      function Jr(i, c) {
        return i && Vc(i, c, wt);
      }
      function Wc(i, c) {
        return i && Ff(i, c, wt);
      }
      function Ba(i, c) {
        return Nn(c, function(d) {
          return vn(i[d]);
        });
      }
      function oo(i, c) {
        c = Un(c, i);
        for (var d = 0, g = c.length; i != null && d < g; )
          i = i[Zr(c[d++])];
        return d && d == g ? i : t;
      }
      function Hf(i, c, d) {
        var g = c(i);
        return Re(i) ? g : On(g, d(i));
      }
      function qt(i) {
        return i == null ? i === t ? vy : Pn : eo && eo in Je(i) ? SE(i) : UE(i);
      }
      function jc(i, c) {
        return i > c;
      }
      function $w(i, c) {
        return i != null && We.call(i, c);
      }
      function Gw(i, c) {
        return i != null && c in Je(i);
      }
      function zw(i, c, d) {
        return i >= Mt(c, d) && i < vt(c, d);
      }
      function Yc(i, c, d) {
        for (var g = d ? Nc : Ea, y = i[0].length, b = i.length, T = b, k = D(b), x = 1 / 0, B = []; T--; ) {
          var K = i[T];
          T && c && (K = nt(K, cr(c))), x = Mt(K.length, x), k[T] = !d && (c || y >= 120 && K.length >= 120) ? new ro(T && K) : t;
        }
        K = i[0];
        var V = -1, Z = k[0];
        e:
          for (; ++V < y && B.length < x; ) {
            var ue = K[V], ve = c ? c(ue) : ue;
            if (ue = d || ue !== 0 ? ue : 0, !(Z ? yi(Z, ve) : g(B, ve, d))) {
              for (T = b; --T; ) {
                var Oe = k[T];
                if (!(Oe ? yi(Oe, ve) : g(i[T], ve, d)))
                  continue e;
              }
              Z && Z.push(ve), B.push(ue);
            }
          }
        return B;
      }
      function Vw(i, c, d, g) {
        return Jr(i, function(y, b, T) {
          c(g, d(y), b, T);
        }), g;
      }
      function Ii(i, c, d) {
        c = Un(c, i), i = Ih(i, c);
        var g = i == null ? i : i[Zr(Ir(c))];
        return g == null ? t : sr(g, i, d);
      }
      function Bf(i) {
        return at(i) && qt(i) == jt;
      }
      function Ww(i) {
        return at(i) && qt(i) == vi;
      }
      function jw(i) {
        return at(i) && qt(i) == Dr;
      }
      function Ai(i, c, d, g, y) {
        return i === c ? !0 : i == null || c == null || !at(i) && !at(c) ? i !== i && c !== c : Yw(i, c, d, g, Ai, y);
      }
      function Yw(i, c, d, g, y, b) {
        var T = Re(i), k = Re(c), x = T ? ir : xt(i), B = k ? ir : xt(c);
        x = x == jt ? gt : x, B = B == jt ? gt : B;
        var K = x == gt, V = B == gt, Z = x == B;
        if (Z && Hn(i)) {
          if (!Hn(c))
            return !1;
          T = !0, K = !1;
        }
        if (Z && !K)
          return b || (b = new Hr()), T || Ko(i) ? Ch(i, c, d, g, y, b) : bE(i, c, x, d, g, y, b);
        if (!(d & C)) {
          var ue = K && We.call(i, "__wrapped__"), ve = V && We.call(c, "__wrapped__");
          if (ue || ve) {
            var Oe = ue ? i.value() : i, ye = ve ? c.value() : c;
            return b || (b = new Hr()), y(Oe, ye, d, g, b);
          }
        }
        return Z ? (b || (b = new Hr()), _E(i, c, d, g, y, b)) : !1;
      }
      function Qw(i) {
        return at(i) && xt(i) == Pt;
      }
      function Qc(i, c, d, g) {
        var y = d.length, b = y, T = !g;
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
            var V = new Hr();
            if (g)
              var Z = g(B, K, x, i, c, V);
            if (!(Z === t ? Ai(K, B, C | E, g, V) : Z))
              return !1;
          }
        }
        return !0;
      }
      function Kf(i) {
        if (!it(i) || OE(i))
          return !1;
        var c = vn(i) ? QC : By;
        return c.test(ao(i));
      }
      function Jw(i) {
        return at(i) && qt(i) == Ur;
      }
      function Xw(i) {
        return at(i) && xt(i) == _t;
      }
      function Zw(i) {
        return at(i) && ns(i.length) && !!rt[qt(i)];
      }
      function qf(i) {
        return typeof i == "function" ? i : i == null ? Xt : typeof i == "object" ? Re(i) ? zf(i[0], i[1]) : Gf(i) : up(i);
      }
      function Jc(i) {
        if (!Pi(i))
          return rw(i);
        var c = [];
        for (var d in Je(i))
          We.call(i, d) && d != "constructor" && c.push(d);
        return c;
      }
      function eE(i) {
        if (!it(i))
          return DE(i);
        var c = Pi(i), d = [];
        for (var g in i)
          g == "constructor" && (c || !We.call(i, g)) || d.push(g);
        return d;
      }
      function Xc(i, c) {
        return i < c;
      }
      function $f(i, c) {
        var d = -1, g = Qt(i) ? D(i.length) : [];
        return Ln(i, function(y, b, T) {
          g[++d] = c(y, b, T);
        }), g;
      }
      function Gf(i) {
        var c = hl(i);
        return c.length == 1 && c[0][2] ? Sh(c[0][0], c[0][1]) : function(d) {
          return d === i || Qc(d, i, c);
        };
      }
      function zf(i, c) {
        return gl(i) && _h(c) ? Sh(Zr(i), c) : function(d) {
          var g = Tl(d, i);
          return g === t && g === c ? Il(d, i) : Ai(c, g, C | E);
        };
      }
      function Ka(i, c, d, g, y) {
        i !== c && Vc(c, function(b, T) {
          if (y || (y = new Hr()), it(b))
            tE(i, c, T, d, Ka, g, y);
          else {
            var k = g ? g(vl(i, T), b, T + "", i, c, y) : t;
            k === t && (k = b), Gc(i, T, k);
          }
        }, Jt);
      }
      function tE(i, c, d, g, y, b, T) {
        var k = vl(i, d), x = vl(c, d), B = T.get(x);
        if (B) {
          Gc(i, d, B);
          return;
        }
        var K = b ? b(k, x, d + "", i, c, T) : t, V = K === t;
        if (V) {
          var Z = Re(x), ue = !Z && Hn(x), ve = !Z && !ue && Ko(x);
          K = x, Z || ue || ve ? Re(k) ? K = k : ft(k) ? K = Yt(k) : ue ? (V = !1, K = nh(x, !0)) : ve ? (V = !1, K = oh(x, !0)) : K = [] : Oi(x) || so(x) ? (K = k, so(k) ? K = ep(k) : (!it(k) || vn(k)) && (K = bh(x))) : V = !1;
        }
        V && (T.set(x, K), y(K, x, g, b, T), T.delete(x)), Gc(i, d, K);
      }
      function Vf(i, c) {
        var d = i.length;
        if (d)
          return c += c < 0 ? d : 0, mn(c, d) ? i[c] : t;
      }
      function Wf(i, c, d) {
        c.length ? c = nt(c, function(b) {
          return Re(b) ? function(T) {
            return oo(T, b.length === 1 ? b[0] : b);
          } : b;
        }) : c = [Xt];
        var g = -1;
        c = nt(c, cr(pe()));
        var y = $f(i, function(b, T, k) {
          var x = nt(c, function(B) {
            return B(b);
          });
          return { criteria: x, index: ++g, value: b };
        });
        return RC(y, function(b, T) {
          return pE(b, T, d);
        });
      }
      function rE(i, c) {
        return jf(i, c, function(d, g) {
          return Il(i, g);
        });
      }
      function jf(i, c, d) {
        for (var g = -1, y = c.length, b = {}; ++g < y; ) {
          var T = c[g], k = oo(i, T);
          d(k, T) && Ri(b, Un(T, i), k);
        }
        return b;
      }
      function nE(i) {
        return function(c) {
          return oo(c, i);
        };
      }
      function Zc(i, c, d, g) {
        var y = g ? AC : Po, b = -1, T = c.length, k = i;
        for (i === c && (c = Yt(c)), d && (k = nt(i, cr(d))); ++b < T; )
          for (var x = 0, B = c[b], K = d ? d(B) : B; (x = y(k, K, x, g)) > -1; )
            k !== i && Na.call(k, x, 1), Na.call(i, x, 1);
        return i;
      }
      function Yf(i, c) {
        for (var d = i ? c.length : 0, g = d - 1; d--; ) {
          var y = c[d];
          if (d == g || y !== b) {
            var b = y;
            mn(y) ? Na.call(i, y, 1) : nl(i, y);
          }
        }
        return i;
      }
      function el(i, c) {
        return i + xa(kf() * (c - i + 1));
      }
      function oE(i, c, d, g) {
        for (var y = -1, b = vt(Ma((c - i) / (d || 1)), 0), T = D(b); b--; )
          T[g ? b : ++y] = i, i += d;
        return T;
      }
      function tl(i, c) {
        var d = "";
        if (!i || c < 1 || c > re)
          return d;
        do
          c % 2 && (d += i), c = xa(c / 2), c && (i += i);
        while (c);
        return d;
      }
      function Me(i, c) {
        return yl(Th(i, c, Xt), i + "");
      }
      function iE(i) {
        return Of(qo(i));
      }
      function aE(i, c) {
        var d = qo(i);
        return Ja(d, no(c, 0, d.length));
      }
      function Ri(i, c, d, g) {
        if (!it(i))
          return i;
        c = Un(c, i);
        for (var y = -1, b = c.length, T = b - 1, k = i; k != null && ++y < b; ) {
          var x = Zr(c[y]), B = d;
          if (x === "__proto__" || x === "constructor" || x === "prototype")
            return i;
          if (y != T) {
            var K = k[x];
            B = g ? g(K, x, k) : t, B === t && (B = it(K) ? K : mn(c[y + 1]) ? [] : {});
          }
          Si(k, x, B), k = k[x];
        }
        return i;
      }
      var Qf = La ? function(i, c) {
        return La.set(i, c), i;
      } : Xt, sE = Oa ? function(i, c) {
        return Oa(i, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Rl(c),
          writable: !0
        });
      } : Xt;
      function cE(i) {
        return Ja(qo(i));
      }
      function Tr(i, c, d) {
        var g = -1, y = i.length;
        c < 0 && (c = -c > y ? 0 : y + c), d = d > y ? y : d, d < 0 && (d += y), y = c > d ? 0 : d - c >>> 0, c >>>= 0;
        for (var b = D(y); ++g < y; )
          b[g] = i[g + c];
        return b;
      }
      function lE(i, c) {
        var d;
        return Ln(i, function(g, y, b) {
          return d = c(g, y, b), !d;
        }), !!d;
      }
      function qa(i, c, d) {
        var g = 0, y = i == null ? g : i.length;
        if (typeof c == "number" && c === c && y <= Yr) {
          for (; g < y; ) {
            var b = g + y >>> 1, T = i[b];
            T !== null && !ur(T) && (d ? T <= c : T < c) ? g = b + 1 : y = b;
          }
          return y;
        }
        return rl(i, c, Xt, d);
      }
      function rl(i, c, d, g) {
        var y = 0, b = i == null ? 0 : i.length;
        if (b === 0)
          return 0;
        c = d(c);
        for (var T = c !== c, k = c === null, x = ur(c), B = c === t; y < b; ) {
          var K = xa((y + b) / 2), V = d(i[K]), Z = V !== t, ue = V === null, ve = V === V, Oe = ur(V);
          if (T)
            var ye = g || ve;
          else
            B ? ye = ve && (g || Z) : k ? ye = ve && Z && (g || !ue) : x ? ye = ve && Z && !ue && (g || !Oe) : ue || Oe ? ye = !1 : ye = g ? V <= c : V < c;
          ye ? y = K + 1 : b = K;
        }
        return Mt(b, dt);
      }
      function Jf(i, c) {
        for (var d = -1, g = i.length, y = 0, b = []; ++d < g; ) {
          var T = i[d], k = c ? c(T) : T;
          if (!d || !Br(k, x)) {
            var x = k;
            b[y++] = T === 0 ? 0 : T;
          }
        }
        return b;
      }
      function Xf(i) {
        return typeof i == "number" ? i : ur(i) ? Qe : +i;
      }
      function lr(i) {
        if (typeof i == "string")
          return i;
        if (Re(i))
          return nt(i, lr) + "";
        if (ur(i))
          return Pf ? Pf.call(i) : "";
        var c = i + "";
        return c == "0" && 1 / i == -ie ? "-0" : c;
      }
      function Dn(i, c, d) {
        var g = -1, y = Ea, b = i.length, T = !0, k = [], x = k;
        if (d)
          T = !1, y = Nc;
        else if (b >= o) {
          var B = c ? null : wE(i);
          if (B)
            return _a(B);
          T = !1, y = yi, x = new ro();
        } else
          x = c ? [] : k;
        e:
          for (; ++g < b; ) {
            var K = i[g], V = c ? c(K) : K;
            if (K = d || K !== 0 ? K : 0, T && V === V) {
              for (var Z = x.length; Z--; )
                if (x[Z] === V)
                  continue e;
              c && x.push(V), k.push(K);
            } else
              y(x, V, d) || (x !== k && x.push(V), k.push(K));
          }
        return k;
      }
      function nl(i, c) {
        return c = Un(c, i), i = Ih(i, c), i == null || delete i[Zr(Ir(c))];
      }
      function Zf(i, c, d, g) {
        return Ri(i, c, d(oo(i, c)), g);
      }
      function $a(i, c, d, g) {
        for (var y = i.length, b = g ? y : -1; (g ? b-- : ++b < y) && c(i[b], b, i); )
          ;
        return d ? Tr(i, g ? 0 : b, g ? b + 1 : y) : Tr(i, g ? b + 1 : 0, g ? y : b);
      }
      function eh(i, c) {
        var d = i;
        return d instanceof De && (d = d.value()), Oc(c, function(g, y) {
          return y.func.apply(y.thisArg, On([g], y.args));
        }, d);
      }
      function ol(i, c, d) {
        var g = i.length;
        if (g < 2)
          return g ? Dn(i[0]) : [];
        for (var y = -1, b = D(g); ++y < g; )
          for (var T = i[y], k = -1; ++k < g; )
            k != y && (b[y] = Ti(b[y] || T, i[k], c, d));
        return Dn(Tt(b, 1), c, d);
      }
      function th(i, c, d) {
        for (var g = -1, y = i.length, b = c.length, T = {}; ++g < y; ) {
          var k = g < b ? c[g] : t;
          d(T, i[g], k);
        }
        return T;
      }
      function il(i) {
        return ft(i) ? i : [];
      }
      function al(i) {
        return typeof i == "function" ? i : Xt;
      }
      function Un(i, c) {
        return Re(i) ? i : gl(i, c) ? [i] : Ph(Ge(i));
      }
      var uE = Me;
      function Fn(i, c, d) {
        var g = i.length;
        return d = d === t ? g : d, !c && d >= g ? i : Tr(i, c, d);
      }
      var rh = JC || function(i) {
        return St.clearTimeout(i);
      };
      function nh(i, c) {
        if (c)
          return i.slice();
        var d = i.length, g = Sf ? Sf(d) : new i.constructor(d);
        return i.copy(g), g;
      }
      function sl(i) {
        var c = new i.constructor(i.byteLength);
        return new ka(c).set(new ka(i)), c;
      }
      function dE(i, c) {
        var d = c ? sl(i.buffer) : i.buffer;
        return new i.constructor(d, i.byteOffset, i.byteLength);
      }
      function fE(i) {
        var c = new i.constructor(i.source, Hd.exec(i));
        return c.lastIndex = i.lastIndex, c;
      }
      function hE(i) {
        return _i ? Je(_i.call(i)) : {};
      }
      function oh(i, c) {
        var d = c ? sl(i.buffer) : i.buffer;
        return new i.constructor(d, i.byteOffset, i.length);
      }
      function ih(i, c) {
        if (i !== c) {
          var d = i !== t, g = i === null, y = i === i, b = ur(i), T = c !== t, k = c === null, x = c === c, B = ur(c);
          if (!k && !B && !b && i > c || b && T && x && !k && !B || g && T && x || !d && x || !y)
            return 1;
          if (!g && !b && !B && i < c || B && d && y && !g && !b || k && d && y || !T && y || !x)
            return -1;
        }
        return 0;
      }
      function pE(i, c, d) {
        for (var g = -1, y = i.criteria, b = c.criteria, T = y.length, k = d.length; ++g < T; ) {
          var x = ih(y[g], b[g]);
          if (x) {
            if (g >= k)
              return x;
            var B = d[g];
            return x * (B == "desc" ? -1 : 1);
          }
        }
        return i.index - c.index;
      }
      function ah(i, c, d, g) {
        for (var y = -1, b = i.length, T = d.length, k = -1, x = c.length, B = vt(b - T, 0), K = D(x + B), V = !g; ++k < x; )
          K[k] = c[k];
        for (; ++y < T; )
          (V || y < b) && (K[d[y]] = i[y]);
        for (; B--; )
          K[k++] = i[y++];
        return K;
      }
      function sh(i, c, d, g) {
        for (var y = -1, b = i.length, T = -1, k = d.length, x = -1, B = c.length, K = vt(b - k, 0), V = D(K + B), Z = !g; ++y < K; )
          V[y] = i[y];
        for (var ue = y; ++x < B; )
          V[ue + x] = c[x];
        for (; ++T < k; )
          (Z || y < b) && (V[ue + d[T]] = i[y++]);
        return V;
      }
      function Yt(i, c) {
        var d = -1, g = i.length;
        for (c || (c = D(g)); ++d < g; )
          c[d] = i[d];
        return c;
      }
      function Xr(i, c, d, g) {
        var y = !d;
        d || (d = {});
        for (var b = -1, T = c.length; ++b < T; ) {
          var k = c[b], x = g ? g(d[k], i[k], k, d, i) : t;
          x === t && (x = i[k]), y ? hn(d, k, x) : Si(d, k, x);
        }
        return d;
      }
      function gE(i, c) {
        return Xr(i, pl(i), c);
      }
      function mE(i, c) {
        return Xr(i, wh(i), c);
      }
      function Ga(i, c) {
        return function(d, g) {
          var y = Re(d) ? EC : Fw, b = c ? c() : {};
          return y(d, i, pe(g, 2), b);
        };
      }
      function Fo(i) {
        return Me(function(c, d) {
          var g = -1, y = d.length, b = y > 1 ? d[y - 1] : t, T = y > 2 ? d[2] : t;
          for (b = i.length > 3 && typeof b == "function" ? (y--, b) : t, T && $t(d[0], d[1], T) && (b = y < 3 ? t : b, y = 1), c = Je(c); ++g < y; ) {
            var k = d[g];
            k && i(c, k, g, b);
          }
          return c;
        });
      }
      function ch(i, c) {
        return function(d, g) {
          if (d == null)
            return d;
          if (!Qt(d))
            return i(d, g);
          for (var y = d.length, b = c ? y : -1, T = Je(d); (c ? b-- : ++b < y) && g(T[b], b, T) !== !1; )
            ;
          return d;
        };
      }
      function lh(i) {
        return function(c, d, g) {
          for (var y = -1, b = Je(c), T = g(c), k = T.length; k--; ) {
            var x = T[i ? k : ++y];
            if (d(b[x], x, b) === !1)
              break;
          }
          return c;
        };
      }
      function vE(i, c, d) {
        var g = c & _, y = ki(i);
        function b() {
          var T = this && this !== St && this instanceof b ? y : i;
          return T.apply(g ? d : this, arguments);
        }
        return b;
      }
      function uh(i) {
        return function(c) {
          c = Ge(c);
          var d = No(c) ? Fr(c) : t, g = d ? d[0] : c.charAt(0), y = d ? Fn(d, 1).join("") : c.slice(1);
          return g[i]() + y;
        };
      }
      function Ho(i) {
        return function(c) {
          return Oc(cp(sp(c).replace(sC, "")), i, "");
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
          var d = Uo(i.prototype), g = i.apply(d, c);
          return it(g) ? g : d;
        };
      }
      function yE(i, c, d) {
        var g = ki(i);
        function y() {
          for (var b = arguments.length, T = D(b), k = b, x = Bo(y); k--; )
            T[k] = arguments[k];
          var B = b < 3 && T[0] !== x && T[b - 1] !== x ? [] : Mn(T, x);
          if (b -= B.length, b < d)
            return gh(
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
          var K = this && this !== St && this instanceof y ? g : i;
          return sr(K, this, T);
        }
        return y;
      }
      function dh(i) {
        return function(c, d, g) {
          var y = Je(c);
          if (!Qt(c)) {
            var b = pe(d, 3);
            c = wt(c), d = function(k) {
              return b(y[k], k, y);
            };
          }
          var T = i(c, d, g);
          return T > -1 ? y[b ? c[T] : T] : t;
        };
      }
      function fh(i) {
        return gn(function(c) {
          var d = c.length, g = d, y = _r.prototype.thru;
          for (i && c.reverse(); g--; ) {
            var b = c[g];
            if (typeof b != "function")
              throw new br(s);
            if (y && !T && Ya(b) == "wrapper")
              var T = new _r([], !0);
          }
          for (g = T ? g : d; ++g < d; ) {
            b = c[g];
            var k = Ya(b), x = k == "wrapper" ? fl(b) : t;
            x && ml(x[0]) && x[1] == (q | S | O | U) && !x[4].length && x[9] == 1 ? T = T[Ya(x[0])].apply(T, x[3]) : T = b.length == 1 && ml(b) ? T[k]() : T.thru(b);
          }
          return function() {
            var B = arguments, K = B[0];
            if (T && B.length == 1 && Re(K))
              return T.plant(K).value();
            for (var V = 0, Z = d ? c[V].apply(this, B) : K; ++V < d; )
              Z = c[V].call(this, Z);
            return Z;
          };
        });
      }
      function za(i, c, d, g, y, b, T, k, x, B) {
        var K = c & q, V = c & _, Z = c & R, ue = c & (S | I), ve = c & Y, Oe = Z ? t : ki(i);
        function ye() {
          for (var xe = arguments.length, Fe = D(xe), dr = xe; dr--; )
            Fe[dr] = arguments[dr];
          if (ue)
            var Gt = Bo(ye), fr = PC(Fe, Gt);
          if (g && (Fe = ah(Fe, g, y, ue)), b && (Fe = sh(Fe, b, T, ue)), xe -= fr, ue && xe < B) {
            var ht = Mn(Fe, Gt);
            return gh(
              i,
              c,
              za,
              ye.placeholder,
              d,
              Fe,
              ht,
              k,
              x,
              B - xe
            );
          }
          var Kr = V ? d : this, Cn = Z ? Kr[i] : i;
          return xe = Fe.length, k ? Fe = FE(Fe, k) : ve && xe > 1 && Fe.reverse(), K && x < xe && (Fe.length = x), this && this !== St && this instanceof ye && (Cn = Oe || ki(Cn)), Cn.apply(Kr, Fe);
        }
        return ye;
      }
      function hh(i, c) {
        return function(d, g) {
          return Vw(d, i, c(g), {});
        };
      }
      function Va(i, c) {
        return function(d, g) {
          var y;
          if (d === t && g === t)
            return c;
          if (d !== t && (y = d), g !== t) {
            if (y === t)
              return g;
            typeof d == "string" || typeof g == "string" ? (d = lr(d), g = lr(g)) : (d = Xf(d), g = Xf(g)), y = i(d, g);
          }
          return y;
        };
      }
      function cl(i) {
        return gn(function(c) {
          return c = nt(c, cr(pe())), Me(function(d) {
            var g = this;
            return i(c, function(y) {
              return sr(y, g, d);
            });
          });
        });
      }
      function Wa(i, c) {
        c = c === t ? " " : lr(c);
        var d = c.length;
        if (d < 2)
          return d ? tl(c, i) : c;
        var g = tl(c, Ma(i / Oo(c)));
        return No(c) ? Fn(Fr(g), 0, i).join("") : g.slice(0, i);
      }
      function CE(i, c, d, g) {
        var y = c & _, b = ki(i);
        function T() {
          for (var k = -1, x = arguments.length, B = -1, K = g.length, V = D(K + x), Z = this && this !== St && this instanceof T ? b : i; ++B < K; )
            V[B] = g[B];
          for (; x--; )
            V[B++] = arguments[++k];
          return sr(Z, y ? d : this, V);
        }
        return T;
      }
      function ph(i) {
        return function(c, d, g) {
          return g && typeof g != "number" && $t(c, d, g) && (d = g = t), c = yn(c), d === t ? (d = c, c = 0) : d = yn(d), g = g === t ? c < d ? 1 : -1 : yn(g), oE(c, d, g, i);
        };
      }
      function ja(i) {
        return function(c, d) {
          return typeof c == "string" && typeof d == "string" || (c = Ar(c), d = Ar(d)), i(c, d);
        };
      }
      function gh(i, c, d, g, y, b, T, k, x, B) {
        var K = c & S, V = K ? T : t, Z = K ? t : T, ue = K ? b : t, ve = K ? t : b;
        c |= K ? O : L, c &= ~(K ? L : O), c & A || (c &= ~(_ | R));
        var Oe = [
          i,
          c,
          y,
          ue,
          V,
          ve,
          Z,
          k,
          x,
          B
        ], ye = d.apply(t, Oe);
        return ml(i) && Ah(ye, Oe), ye.placeholder = g, Rh(ye, i, c);
      }
      function ll(i) {
        var c = mt[i];
        return function(d, g) {
          if (d = Ar(d), g = g == null ? 0 : Mt(Ne(g), 292), g && Rf(d)) {
            var y = (Ge(d) + "e").split("e"), b = c(y[0] + "e" + (+y[1] + g));
            return y = (Ge(b) + "e").split("e"), +(y[0] + "e" + (+y[1] - g));
          }
          return c(d);
        };
      }
      var wE = Lo && 1 / _a(new Lo([, -0]))[1] == ie ? function(i) {
        return new Lo(i);
      } : Nl;
      function mh(i) {
        return function(c) {
          var d = xt(c);
          return d == Pt ? Hc(c) : d == _t ? UC(c) : kC(c, i(c));
        };
      }
      function pn(i, c, d, g, y, b, T, k) {
        var x = c & R;
        if (!x && typeof i != "function")
          throw new br(s);
        var B = g ? g.length : 0;
        if (B || (c &= ~(O | L), g = y = t), T = T === t ? T : vt(Ne(T), 0), k = k === t ? k : Ne(k), B -= y ? y.length : 0, c & L) {
          var K = g, V = y;
          g = y = t;
        }
        var Z = x ? t : fl(i), ue = [
          i,
          c,
          d,
          g,
          y,
          K,
          V,
          b,
          T,
          k
        ];
        if (Z && LE(ue, Z), i = ue[0], c = ue[1], d = ue[2], g = ue[3], y = ue[4], k = ue[9] = ue[9] === t ? x ? 0 : i.length : vt(ue[9] - B, 0), !k && c & (S | I) && (c &= ~(S | I)), !c || c == _)
          var ve = vE(i, c, d);
        else
          c == S || c == I ? ve = yE(i, c, k) : (c == O || c == (_ | O)) && !y.length ? ve = CE(i, c, d, g) : ve = za.apply(t, ue);
        var Oe = Z ? Qf : Ah;
        return Rh(Oe(ve, ue), i, c);
      }
      function vh(i, c, d, g) {
        return i === t || Br(i, xo[d]) && !We.call(g, d) ? c : i;
      }
      function yh(i, c, d, g, y, b) {
        return it(i) && it(c) && (b.set(c, i), Ka(i, c, t, yh, b), b.delete(c)), i;
      }
      function EE(i) {
        return Oi(i) ? t : i;
      }
      function Ch(i, c, d, g, y, b) {
        var T = d & C, k = i.length, x = c.length;
        if (k != x && !(T && x > k))
          return !1;
        var B = b.get(i), K = b.get(c);
        if (B && K)
          return B == c && K == i;
        var V = -1, Z = !0, ue = d & E ? new ro() : t;
        for (b.set(i, c), b.set(c, i); ++V < k; ) {
          var ve = i[V], Oe = c[V];
          if (g)
            var ye = T ? g(Oe, ve, V, c, i, b) : g(ve, Oe, V, i, c, b);
          if (ye !== t) {
            if (ye)
              continue;
            Z = !1;
            break;
          }
          if (ue) {
            if (!Mc(c, function(xe, Fe) {
              if (!yi(ue, Fe) && (ve === xe || y(ve, xe, d, g, b)))
                return ue.push(Fe);
            })) {
              Z = !1;
              break;
            }
          } else if (!(ve === Oe || y(ve, Oe, d, g, b))) {
            Z = !1;
            break;
          }
        }
        return b.delete(i), b.delete(c), Z;
      }
      function bE(i, c, d, g, y, b, T) {
        switch (d) {
          case Ro:
            if (i.byteLength != c.byteLength || i.byteOffset != c.byteOffset)
              return !1;
            i = i.buffer, c = c.buffer;
          case vi:
            return !(i.byteLength != c.byteLength || !b(new ka(i), new ka(c)));
          case ar:
          case Dr:
          case Nt:
            return Br(+i, +c);
          case Kt:
            return i.name == c.name && i.message == c.message;
          case Ur:
          case tt:
            return i == c + "";
          case Pt:
            var k = Hc;
          case _t:
            var x = g & C;
            if (k || (k = _a), i.size != c.size && !x)
              return !1;
            var B = T.get(i);
            if (B)
              return B == c;
            g |= E, T.set(i, c);
            var K = Ch(k(i), k(c), g, y, b, T);
            return T.delete(i), K;
          case Qr:
            if (_i)
              return _i.call(i) == _i.call(c);
        }
        return !1;
      }
      function _E(i, c, d, g, y, b) {
        var T = d & C, k = ul(i), x = k.length, B = ul(c), K = B.length;
        if (x != K && !T)
          return !1;
        for (var V = x; V--; ) {
          var Z = k[V];
          if (!(T ? Z in c : We.call(c, Z)))
            return !1;
        }
        var ue = b.get(i), ve = b.get(c);
        if (ue && ve)
          return ue == c && ve == i;
        var Oe = !0;
        b.set(i, c), b.set(c, i);
        for (var ye = T; ++V < x; ) {
          Z = k[V];
          var xe = i[Z], Fe = c[Z];
          if (g)
            var dr = T ? g(Fe, xe, Z, c, i, b) : g(xe, Fe, Z, i, c, b);
          if (!(dr === t ? xe === Fe || y(xe, Fe, d, g, b) : dr)) {
            Oe = !1;
            break;
          }
          ye || (ye = Z == "constructor");
        }
        if (Oe && !ye) {
          var Gt = i.constructor, fr = c.constructor;
          Gt != fr && "constructor" in i && "constructor" in c && !(typeof Gt == "function" && Gt instanceof Gt && typeof fr == "function" && fr instanceof fr) && (Oe = !1);
        }
        return b.delete(i), b.delete(c), Oe;
      }
      function gn(i) {
        return yl(Th(i, t, xh), i + "");
      }
      function ul(i) {
        return Hf(i, wt, pl);
      }
      function dl(i) {
        return Hf(i, Jt, wh);
      }
      var fl = La ? function(i) {
        return La.get(i);
      } : Nl;
      function Ya(i) {
        for (var c = i.name + "", d = Do[c], g = We.call(Do, c) ? d.length : 0; g--; ) {
          var y = d[g], b = y.func;
          if (b == null || b == i)
            return y.name;
        }
        return c;
      }
      function Bo(i) {
        var c = We.call(w, "placeholder") ? w : i;
        return c.placeholder;
      }
      function pe() {
        var i = w.iteratee || kl;
        return i = i === kl ? qf : i, arguments.length ? i(arguments[0], arguments[1]) : i;
      }
      function Qa(i, c) {
        var d = i.__data__;
        return NE(c) ? d[typeof c == "string" ? "string" : "hash"] : d.map;
      }
      function hl(i) {
        for (var c = wt(i), d = c.length; d--; ) {
          var g = c[d], y = i[g];
          c[d] = [g, y, _h(y)];
        }
        return c;
      }
      function io(i, c) {
        var d = xC(i, c);
        return Kf(d) ? d : t;
      }
      function SE(i) {
        var c = We.call(i, eo), d = i[eo];
        try {
          i[eo] = t;
          var g = !0;
        } catch {
        }
        var y = Aa.call(i);
        return g && (c ? i[eo] = d : delete i[eo]), y;
      }
      var pl = Kc ? function(i) {
        return i == null ? [] : (i = Je(i), Nn(Kc(i), function(c) {
          return If.call(i, c);
        }));
      } : Ol, wh = Kc ? function(i) {
        for (var c = []; i; )
          On(c, pl(i)), i = Pa(i);
        return c;
      } : Ol, xt = qt;
      (qc && xt(new qc(new ArrayBuffer(1))) != Ro || wi && xt(new wi()) != Pt || $c && xt($c.resolve()) != Ot || Lo && xt(new Lo()) != _t || Ei && xt(new Ei()) != mi) && (xt = function(i) {
        var c = qt(i), d = c == gt ? i.constructor : t, g = d ? ao(d) : "";
        if (g)
          switch (g) {
            case aw:
              return Ro;
            case sw:
              return Pt;
            case cw:
              return Ot;
            case lw:
              return _t;
            case uw:
              return mi;
          }
        return c;
      });
      function TE(i, c, d) {
        for (var g = -1, y = d.length; ++g < y; ) {
          var b = d[g], T = b.size;
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
      function IE(i) {
        var c = i.match(Oy);
        return c ? c[1].split(My) : [];
      }
      function Eh(i, c, d) {
        c = Un(c, i);
        for (var g = -1, y = c.length, b = !1; ++g < y; ) {
          var T = Zr(c[g]);
          if (!(b = i != null && d(i, T)))
            break;
          i = i[T];
        }
        return b || ++g != y ? b : (y = i == null ? 0 : i.length, !!y && ns(y) && mn(T, y) && (Re(i) || so(i)));
      }
      function AE(i) {
        var c = i.length, d = new i.constructor(c);
        return c && typeof i[0] == "string" && We.call(i, "index") && (d.index = i.index, d.input = i.input), d;
      }
      function bh(i) {
        return typeof i.constructor == "function" && !Pi(i) ? Uo(Pa(i)) : {};
      }
      function RE(i, c, d) {
        var g = i.constructor;
        switch (c) {
          case vi:
            return sl(i);
          case ar:
          case Dr:
            return new g(+i);
          case Ro:
            return dE(i, d);
          case hc:
          case pc:
          case gc:
          case mc:
          case vc:
          case yc:
          case Cc:
          case wc:
          case Ec:
            return oh(i, d);
          case Pt:
            return new g();
          case Nt:
          case tt:
            return new g(i);
          case Ur:
            return fE(i);
          case _t:
            return new g();
          case Qr:
            return hE(i);
        }
      }
      function kE(i, c) {
        var d = c.length;
        if (!d)
          return i;
        var g = d - 1;
        return c[g] = (d > 1 ? "& " : "") + c[g], c = c.join(d > 2 ? ", " : " "), i.replace(Ny, `{
/* [wrapped with ` + c + `] */
`);
      }
      function PE(i) {
        return Re(i) || so(i) || !!(Af && i && i[Af]);
      }
      function mn(i, c) {
        var d = typeof i;
        return c = c ?? re, !!c && (d == "number" || d != "symbol" && qy.test(i)) && i > -1 && i % 1 == 0 && i < c;
      }
      function $t(i, c, d) {
        if (!it(d))
          return !1;
        var g = typeof c;
        return (g == "number" ? Qt(d) && mn(c, d.length) : g == "string" && c in d) ? Br(d[c], i) : !1;
      }
      function gl(i, c) {
        if (Re(i))
          return !1;
        var d = typeof i;
        return d == "number" || d == "symbol" || d == "boolean" || i == null || ur(i) ? !0 : Ay.test(i) || !Iy.test(i) || c != null && i in Je(c);
      }
      function NE(i) {
        var c = typeof i;
        return c == "string" || c == "number" || c == "symbol" || c == "boolean" ? i !== "__proto__" : i === null;
      }
      function ml(i) {
        var c = Ya(i), d = w[c];
        if (typeof d != "function" || !(c in De.prototype))
          return !1;
        if (i === d)
          return !0;
        var g = fl(d);
        return !!g && i === g[0];
      }
      function OE(i) {
        return !!_f && _f in i;
      }
      var ME = Ta ? vn : Ml;
      function Pi(i) {
        var c = i && i.constructor, d = typeof c == "function" && c.prototype || xo;
        return i === d;
      }
      function _h(i) {
        return i === i && !it(i);
      }
      function Sh(i, c) {
        return function(d) {
          return d == null ? !1 : d[i] === c && (c !== t || i in Je(d));
        };
      }
      function xE(i) {
        var c = ts(i, function(g) {
          return d.size === f && d.clear(), g;
        }), d = c.cache;
        return c;
      }
      function LE(i, c) {
        var d = i[1], g = c[1], y = d | g, b = y < (_ | R | q), T = g == q && d == S || g == q && d == U && i[7].length <= c[8] || g == (q | U) && c[7].length <= c[8] && d == S;
        if (!(b || T))
          return i;
        g & _ && (i[2] = c[2], y |= d & _ ? 0 : A);
        var k = c[3];
        if (k) {
          var x = i[3];
          i[3] = x ? ah(x, k, c[4]) : k, i[4] = x ? Mn(i[3], h) : c[4];
        }
        return k = c[5], k && (x = i[5], i[5] = x ? sh(x, k, c[6]) : k, i[6] = x ? Mn(i[5], h) : c[6]), k = c[7], k && (i[7] = k), g & q && (i[8] = i[8] == null ? c[8] : Mt(i[8], c[8])), i[9] == null && (i[9] = c[9]), i[0] = c[0], i[1] = y, i;
      }
      function DE(i) {
        var c = [];
        if (i != null)
          for (var d in Je(i))
            c.push(d);
        return c;
      }
      function UE(i) {
        return Aa.call(i);
      }
      function Th(i, c, d) {
        return c = vt(c === t ? i.length - 1 : c, 0), function() {
          for (var g = arguments, y = -1, b = vt(g.length - c, 0), T = D(b); ++y < b; )
            T[y] = g[c + y];
          y = -1;
          for (var k = D(c + 1); ++y < c; )
            k[y] = g[y];
          return k[c] = d(T), sr(i, this, k);
        };
      }
      function Ih(i, c) {
        return c.length < 2 ? i : oo(i, Tr(c, 0, -1));
      }
      function FE(i, c) {
        for (var d = i.length, g = Mt(c.length, d), y = Yt(i); g--; ) {
          var b = c[g];
          i[g] = mn(b, d) ? y[b] : t;
        }
        return i;
      }
      function vl(i, c) {
        if (!(c === "constructor" && typeof i[c] == "function") && c != "__proto__")
          return i[c];
      }
      var Ah = kh(Qf), Ni = ZC || function(i, c) {
        return St.setTimeout(i, c);
      }, yl = kh(sE);
      function Rh(i, c, d) {
        var g = c + "";
        return yl(i, kE(g, HE(IE(g), d)));
      }
      function kh(i) {
        var c = 0, d = 0;
        return function() {
          var g = nw(), y = fe - (g - d);
          if (d = g, y > 0) {
            if (++c >= ee)
              return arguments[0];
          } else
            c = 0;
          return i.apply(t, arguments);
        };
      }
      function Ja(i, c) {
        var d = -1, g = i.length, y = g - 1;
        for (c = c === t ? g : c; ++d < c; ) {
          var b = el(d, y), T = i[b];
          i[b] = i[d], i[d] = T;
        }
        return i.length = c, i;
      }
      var Ph = xE(function(i) {
        var c = [];
        return i.charCodeAt(0) === 46 && c.push(""), i.replace(Ry, function(d, g, y, b) {
          c.push(y ? b.replace(Dy, "$1") : g || d);
        }), c;
      });
      function Zr(i) {
        if (typeof i == "string" || ur(i))
          return i;
        var c = i + "";
        return c == "0" && 1 / i == -ie ? "-0" : c;
      }
      function ao(i) {
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
      function HE(i, c) {
        return Er(cn, function(d) {
          var g = "_." + d[0];
          c & d[1] && !Ea(i, g) && i.push(g);
        }), i.sort();
      }
      function Nh(i) {
        if (i instanceof De)
          return i.clone();
        var c = new _r(i.__wrapped__, i.__chain__);
        return c.__actions__ = Yt(i.__actions__), c.__index__ = i.__index__, c.__values__ = i.__values__, c;
      }
      function BE(i, c, d) {
        (d ? $t(i, c, d) : c === t) ? c = 1 : c = vt(Ne(c), 0);
        var g = i == null ? 0 : i.length;
        if (!g || c < 1)
          return [];
        for (var y = 0, b = 0, T = D(Ma(g / c)); y < g; )
          T[b++] = Tr(i, y, y += c);
        return T;
      }
      function KE(i) {
        for (var c = -1, d = i == null ? 0 : i.length, g = 0, y = []; ++c < d; ) {
          var b = i[c];
          b && (y[g++] = b);
        }
        return y;
      }
      function qE() {
        var i = arguments.length;
        if (!i)
          return [];
        for (var c = D(i - 1), d = arguments[0], g = i; g--; )
          c[g - 1] = arguments[g];
        return On(Re(d) ? Yt(d) : [d], Tt(c, 1));
      }
      var $E = Me(function(i, c) {
        return ft(i) ? Ti(i, Tt(c, 1, ft, !0)) : [];
      }), GE = Me(function(i, c) {
        var d = Ir(c);
        return ft(d) && (d = t), ft(i) ? Ti(i, Tt(c, 1, ft, !0), pe(d, 2)) : [];
      }), zE = Me(function(i, c) {
        var d = Ir(c);
        return ft(d) && (d = t), ft(i) ? Ti(i, Tt(c, 1, ft, !0), t, d) : [];
      });
      function VE(i, c, d) {
        var g = i == null ? 0 : i.length;
        return g ? (c = d || c === t ? 1 : Ne(c), Tr(i, c < 0 ? 0 : c, g)) : [];
      }
      function WE(i, c, d) {
        var g = i == null ? 0 : i.length;
        return g ? (c = d || c === t ? 1 : Ne(c), c = g - c, Tr(i, 0, c < 0 ? 0 : c)) : [];
      }
      function jE(i, c) {
        return i && i.length ? $a(i, pe(c, 3), !0, !0) : [];
      }
      function YE(i, c) {
        return i && i.length ? $a(i, pe(c, 3), !0) : [];
      }
      function QE(i, c, d, g) {
        var y = i == null ? 0 : i.length;
        return y ? (d && typeof d != "number" && $t(i, c, d) && (d = 0, g = y), qw(i, c, d, g)) : [];
      }
      function Oh(i, c, d) {
        var g = i == null ? 0 : i.length;
        if (!g)
          return -1;
        var y = d == null ? 0 : Ne(d);
        return y < 0 && (y = vt(g + y, 0)), ba(i, pe(c, 3), y);
      }
      function Mh(i, c, d) {
        var g = i == null ? 0 : i.length;
        if (!g)
          return -1;
        var y = g - 1;
        return d !== t && (y = Ne(d), y = d < 0 ? vt(g + y, 0) : Mt(y, g - 1)), ba(i, pe(c, 3), y, !0);
      }
      function xh(i) {
        var c = i == null ? 0 : i.length;
        return c ? Tt(i, 1) : [];
      }
      function JE(i) {
        var c = i == null ? 0 : i.length;
        return c ? Tt(i, ie) : [];
      }
      function XE(i, c) {
        var d = i == null ? 0 : i.length;
        return d ? (c = c === t ? 1 : Ne(c), Tt(i, c)) : [];
      }
      function ZE(i) {
        for (var c = -1, d = i == null ? 0 : i.length, g = {}; ++c < d; ) {
          var y = i[c];
          g[y[0]] = y[1];
        }
        return g;
      }
      function Lh(i) {
        return i && i.length ? i[0] : t;
      }
      function eb(i, c, d) {
        var g = i == null ? 0 : i.length;
        if (!g)
          return -1;
        var y = d == null ? 0 : Ne(d);
        return y < 0 && (y = vt(g + y, 0)), Po(i, c, y);
      }
      function tb(i) {
        var c = i == null ? 0 : i.length;
        return c ? Tr(i, 0, -1) : [];
      }
      var rb = Me(function(i) {
        var c = nt(i, il);
        return c.length && c[0] === i[0] ? Yc(c) : [];
      }), nb = Me(function(i) {
        var c = Ir(i), d = nt(i, il);
        return c === Ir(d) ? c = t : d.pop(), d.length && d[0] === i[0] ? Yc(d, pe(c, 2)) : [];
      }), ob = Me(function(i) {
        var c = Ir(i), d = nt(i, il);
        return c = typeof c == "function" ? c : t, c && d.pop(), d.length && d[0] === i[0] ? Yc(d, t, c) : [];
      });
      function ib(i, c) {
        return i == null ? "" : tw.call(i, c);
      }
      function Ir(i) {
        var c = i == null ? 0 : i.length;
        return c ? i[c - 1] : t;
      }
      function ab(i, c, d) {
        var g = i == null ? 0 : i.length;
        if (!g)
          return -1;
        var y = g;
        return d !== t && (y = Ne(d), y = y < 0 ? vt(g + y, 0) : Mt(y, g - 1)), c === c ? HC(i, c, y) : ba(i, gf, y, !0);
      }
      function sb(i, c) {
        return i && i.length ? Vf(i, Ne(c)) : t;
      }
      var cb = Me(Dh);
      function Dh(i, c) {
        return i && i.length && c && c.length ? Zc(i, c) : i;
      }
      function lb(i, c, d) {
        return i && i.length && c && c.length ? Zc(i, c, pe(d, 2)) : i;
      }
      function ub(i, c, d) {
        return i && i.length && c && c.length ? Zc(i, c, t, d) : i;
      }
      var db = gn(function(i, c) {
        var d = i == null ? 0 : i.length, g = zc(i, c);
        return Yf(i, nt(c, function(y) {
          return mn(y, d) ? +y : y;
        }).sort(ih)), g;
      });
      function fb(i, c) {
        var d = [];
        if (!(i && i.length))
          return d;
        var g = -1, y = [], b = i.length;
        for (c = pe(c, 3); ++g < b; ) {
          var T = i[g];
          c(T, g, i) && (d.push(T), y.push(g));
        }
        return Yf(i, y), d;
      }
      function Cl(i) {
        return i == null ? i : iw.call(i);
      }
      function hb(i, c, d) {
        var g = i == null ? 0 : i.length;
        return g ? (d && typeof d != "number" && $t(i, c, d) ? (c = 0, d = g) : (c = c == null ? 0 : Ne(c), d = d === t ? g : Ne(d)), Tr(i, c, d)) : [];
      }
      function pb(i, c) {
        return qa(i, c);
      }
      function gb(i, c, d) {
        return rl(i, c, pe(d, 2));
      }
      function mb(i, c) {
        var d = i == null ? 0 : i.length;
        if (d) {
          var g = qa(i, c);
          if (g < d && Br(i[g], c))
            return g;
        }
        return -1;
      }
      function vb(i, c) {
        return qa(i, c, !0);
      }
      function yb(i, c, d) {
        return rl(i, c, pe(d, 2), !0);
      }
      function Cb(i, c) {
        var d = i == null ? 0 : i.length;
        if (d) {
          var g = qa(i, c, !0) - 1;
          if (Br(i[g], c))
            return g;
        }
        return -1;
      }
      function wb(i) {
        return i && i.length ? Jf(i) : [];
      }
      function Eb(i, c) {
        return i && i.length ? Jf(i, pe(c, 2)) : [];
      }
      function bb(i) {
        var c = i == null ? 0 : i.length;
        return c ? Tr(i, 1, c) : [];
      }
      function _b(i, c, d) {
        return i && i.length ? (c = d || c === t ? 1 : Ne(c), Tr(i, 0, c < 0 ? 0 : c)) : [];
      }
      function Sb(i, c, d) {
        var g = i == null ? 0 : i.length;
        return g ? (c = d || c === t ? 1 : Ne(c), c = g - c, Tr(i, c < 0 ? 0 : c, g)) : [];
      }
      function Tb(i, c) {
        return i && i.length ? $a(i, pe(c, 3), !1, !0) : [];
      }
      function Ib(i, c) {
        return i && i.length ? $a(i, pe(c, 3)) : [];
      }
      var Ab = Me(function(i) {
        return Dn(Tt(i, 1, ft, !0));
      }), Rb = Me(function(i) {
        var c = Ir(i);
        return ft(c) && (c = t), Dn(Tt(i, 1, ft, !0), pe(c, 2));
      }), kb = Me(function(i) {
        var c = Ir(i);
        return c = typeof c == "function" ? c : t, Dn(Tt(i, 1, ft, !0), t, c);
      });
      function Pb(i) {
        return i && i.length ? Dn(i) : [];
      }
      function Nb(i, c) {
        return i && i.length ? Dn(i, pe(c, 2)) : [];
      }
      function Ob(i, c) {
        return c = typeof c == "function" ? c : t, i && i.length ? Dn(i, t, c) : [];
      }
      function wl(i) {
        if (!(i && i.length))
          return [];
        var c = 0;
        return i = Nn(i, function(d) {
          if (ft(d))
            return c = vt(d.length, c), !0;
        }), Uc(c, function(d) {
          return nt(i, xc(d));
        });
      }
      function Uh(i, c) {
        if (!(i && i.length))
          return [];
        var d = wl(i);
        return c == null ? d : nt(d, function(g) {
          return sr(c, t, g);
        });
      }
      var Mb = Me(function(i, c) {
        return ft(i) ? Ti(i, c) : [];
      }), xb = Me(function(i) {
        return ol(Nn(i, ft));
      }), Lb = Me(function(i) {
        var c = Ir(i);
        return ft(c) && (c = t), ol(Nn(i, ft), pe(c, 2));
      }), Db = Me(function(i) {
        var c = Ir(i);
        return c = typeof c == "function" ? c : t, ol(Nn(i, ft), t, c);
      }), Ub = Me(wl);
      function Fb(i, c) {
        return th(i || [], c || [], Si);
      }
      function Hb(i, c) {
        return th(i || [], c || [], Ri);
      }
      var Bb = Me(function(i) {
        var c = i.length, d = c > 1 ? i[c - 1] : t;
        return d = typeof d == "function" ? (i.pop(), d) : t, Uh(i, d);
      });
      function Fh(i) {
        var c = w(i);
        return c.__chain__ = !0, c;
      }
      function Kb(i, c) {
        return c(i), i;
      }
      function Xa(i, c) {
        return c(i);
      }
      var qb = gn(function(i) {
        var c = i.length, d = c ? i[0] : 0, g = this.__wrapped__, y = function(b) {
          return zc(b, i);
        };
        return c > 1 || this.__actions__.length || !(g instanceof De) || !mn(d) ? this.thru(y) : (g = g.slice(d, +d + (c ? 1 : 0)), g.__actions__.push({
          func: Xa,
          args: [y],
          thisArg: t
        }), new _r(g, this.__chain__).thru(function(b) {
          return c && !b.length && b.push(t), b;
        }));
      });
      function $b() {
        return Fh(this);
      }
      function Gb() {
        return new _r(this.value(), this.__chain__);
      }
      function zb() {
        this.__values__ === t && (this.__values__ = Xh(this.value()));
        var i = this.__index__ >= this.__values__.length, c = i ? t : this.__values__[this.__index__++];
        return { done: i, value: c };
      }
      function Vb() {
        return this;
      }
      function Wb(i) {
        for (var c, d = this; d instanceof Ua; ) {
          var g = Nh(d);
          g.__index__ = 0, g.__values__ = t, c ? y.__wrapped__ = g : c = g;
          var y = g;
          d = d.__wrapped__;
        }
        return y.__wrapped__ = i, c;
      }
      function jb() {
        var i = this.__wrapped__;
        if (i instanceof De) {
          var c = i;
          return this.__actions__.length && (c = new De(this)), c = c.reverse(), c.__actions__.push({
            func: Xa,
            args: [Cl],
            thisArg: t
          }), new _r(c, this.__chain__);
        }
        return this.thru(Cl);
      }
      function Yb() {
        return eh(this.__wrapped__, this.__actions__);
      }
      var Qb = Ga(function(i, c, d) {
        We.call(i, d) ? ++i[d] : hn(i, d, 1);
      });
      function Jb(i, c, d) {
        var g = Re(i) ? hf : Kw;
        return d && $t(i, c, d) && (c = t), g(i, pe(c, 3));
      }
      function Xb(i, c) {
        var d = Re(i) ? Nn : Uf;
        return d(i, pe(c, 3));
      }
      var Zb = dh(Oh), e_ = dh(Mh);
      function t_(i, c) {
        return Tt(Za(i, c), 1);
      }
      function r_(i, c) {
        return Tt(Za(i, c), ie);
      }
      function n_(i, c, d) {
        return d = d === t ? 1 : Ne(d), Tt(Za(i, c), d);
      }
      function Hh(i, c) {
        var d = Re(i) ? Er : Ln;
        return d(i, pe(c, 3));
      }
      function Bh(i, c) {
        var d = Re(i) ? bC : Df;
        return d(i, pe(c, 3));
      }
      var o_ = Ga(function(i, c, d) {
        We.call(i, d) ? i[d].push(c) : hn(i, d, [c]);
      });
      function i_(i, c, d, g) {
        i = Qt(i) ? i : qo(i), d = d && !g ? Ne(d) : 0;
        var y = i.length;
        return d < 0 && (d = vt(y + d, 0)), os(i) ? d <= y && i.indexOf(c, d) > -1 : !!y && Po(i, c, d) > -1;
      }
      var a_ = Me(function(i, c, d) {
        var g = -1, y = typeof c == "function", b = Qt(i) ? D(i.length) : [];
        return Ln(i, function(T) {
          b[++g] = y ? sr(c, T, d) : Ii(T, c, d);
        }), b;
      }), s_ = Ga(function(i, c, d) {
        hn(i, d, c);
      });
      function Za(i, c) {
        var d = Re(i) ? nt : $f;
        return d(i, pe(c, 3));
      }
      function c_(i, c, d, g) {
        return i == null ? [] : (Re(c) || (c = c == null ? [] : [c]), d = g ? t : d, Re(d) || (d = d == null ? [] : [d]), Wf(i, c, d));
      }
      var l_ = Ga(function(i, c, d) {
        i[d ? 0 : 1].push(c);
      }, function() {
        return [[], []];
      });
      function u_(i, c, d) {
        var g = Re(i) ? Oc : vf, y = arguments.length < 3;
        return g(i, pe(c, 4), d, y, Ln);
      }
      function d_(i, c, d) {
        var g = Re(i) ? _C : vf, y = arguments.length < 3;
        return g(i, pe(c, 4), d, y, Df);
      }
      function f_(i, c) {
        var d = Re(i) ? Nn : Uf;
        return d(i, rs(pe(c, 3)));
      }
      function h_(i) {
        var c = Re(i) ? Of : iE;
        return c(i);
      }
      function p_(i, c, d) {
        (d ? $t(i, c, d) : c === t) ? c = 1 : c = Ne(c);
        var g = Re(i) ? Dw : aE;
        return g(i, c);
      }
      function g_(i) {
        var c = Re(i) ? Uw : cE;
        return c(i);
      }
      function m_(i) {
        if (i == null)
          return 0;
        if (Qt(i))
          return os(i) ? Oo(i) : i.length;
        var c = xt(i);
        return c == Pt || c == _t ? i.size : Jc(i).length;
      }
      function v_(i, c, d) {
        var g = Re(i) ? Mc : lE;
        return d && $t(i, c, d) && (c = t), g(i, pe(c, 3));
      }
      var y_ = Me(function(i, c) {
        if (i == null)
          return [];
        var d = c.length;
        return d > 1 && $t(i, c[0], c[1]) ? c = [] : d > 2 && $t(c[0], c[1], c[2]) && (c = [c[0]]), Wf(i, Tt(c, 1), []);
      }), es = XC || function() {
        return St.Date.now();
      };
      function C_(i, c) {
        if (typeof c != "function")
          throw new br(s);
        return i = Ne(i), function() {
          if (--i < 1)
            return c.apply(this, arguments);
        };
      }
      function Kh(i, c, d) {
        return c = d ? t : c, c = i && c == null ? i.length : c, pn(i, q, t, t, t, t, c);
      }
      function qh(i, c) {
        var d;
        if (typeof c != "function")
          throw new br(s);
        return i = Ne(i), function() {
          return --i > 0 && (d = c.apply(this, arguments)), i <= 1 && (c = t), d;
        };
      }
      var El = Me(function(i, c, d) {
        var g = _;
        if (d.length) {
          var y = Mn(d, Bo(El));
          g |= O;
        }
        return pn(i, g, c, d, y);
      }), $h = Me(function(i, c, d) {
        var g = _ | R;
        if (d.length) {
          var y = Mn(d, Bo($h));
          g |= O;
        }
        return pn(c, g, i, d, y);
      });
      function Gh(i, c, d) {
        c = d ? t : c;
        var g = pn(i, S, t, t, t, t, t, c);
        return g.placeholder = Gh.placeholder, g;
      }
      function zh(i, c, d) {
        c = d ? t : c;
        var g = pn(i, I, t, t, t, t, t, c);
        return g.placeholder = zh.placeholder, g;
      }
      function Vh(i, c, d) {
        var g, y, b, T, k, x, B = 0, K = !1, V = !1, Z = !0;
        if (typeof i != "function")
          throw new br(s);
        c = Ar(c) || 0, it(d) && (K = !!d.leading, V = "maxWait" in d, b = V ? vt(Ar(d.maxWait) || 0, c) : b, Z = "trailing" in d ? !!d.trailing : Z);
        function ue(ht) {
          var Kr = g, Cn = y;
          return g = y = t, B = ht, T = i.apply(Cn, Kr), T;
        }
        function ve(ht) {
          return B = ht, k = Ni(xe, c), K ? ue(ht) : T;
        }
        function Oe(ht) {
          var Kr = ht - x, Cn = ht - B, dp = c - Kr;
          return V ? Mt(dp, b - Cn) : dp;
        }
        function ye(ht) {
          var Kr = ht - x, Cn = ht - B;
          return x === t || Kr >= c || Kr < 0 || V && Cn >= b;
        }
        function xe() {
          var ht = es();
          if (ye(ht))
            return Fe(ht);
          k = Ni(xe, Oe(ht));
        }
        function Fe(ht) {
          return k = t, Z && g ? ue(ht) : (g = y = t, T);
        }
        function dr() {
          k !== t && rh(k), B = 0, g = x = y = k = t;
        }
        function Gt() {
          return k === t ? T : Fe(es());
        }
        function fr() {
          var ht = es(), Kr = ye(ht);
          if (g = arguments, y = this, x = ht, Kr) {
            if (k === t)
              return ve(x);
            if (V)
              return rh(k), k = Ni(xe, c), ue(x);
          }
          return k === t && (k = Ni(xe, c)), T;
        }
        return fr.cancel = dr, fr.flush = Gt, fr;
      }
      var w_ = Me(function(i, c) {
        return Lf(i, 1, c);
      }), E_ = Me(function(i, c, d) {
        return Lf(i, Ar(c) || 0, d);
      });
      function b_(i) {
        return pn(i, Y);
      }
      function ts(i, c) {
        if (typeof i != "function" || c != null && typeof c != "function")
          throw new br(s);
        var d = function() {
          var g = arguments, y = c ? c.apply(this, g) : g[0], b = d.cache;
          if (b.has(y))
            return b.get(y);
          var T = i.apply(this, g);
          return d.cache = b.set(y, T) || b, T;
        };
        return d.cache = new (ts.Cache || fn)(), d;
      }
      ts.Cache = fn;
      function rs(i) {
        if (typeof i != "function")
          throw new br(s);
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
      function __(i) {
        return qh(2, i);
      }
      var S_ = uE(function(i, c) {
        c = c.length == 1 && Re(c[0]) ? nt(c[0], cr(pe())) : nt(Tt(c, 1), cr(pe()));
        var d = c.length;
        return Me(function(g) {
          for (var y = -1, b = Mt(g.length, d); ++y < b; )
            g[y] = c[y].call(this, g[y]);
          return sr(i, this, g);
        });
      }), bl = Me(function(i, c) {
        var d = Mn(c, Bo(bl));
        return pn(i, O, t, c, d);
      }), Wh = Me(function(i, c) {
        var d = Mn(c, Bo(Wh));
        return pn(i, L, t, c, d);
      }), T_ = gn(function(i, c) {
        return pn(i, U, t, t, t, c);
      });
      function I_(i, c) {
        if (typeof i != "function")
          throw new br(s);
        return c = c === t ? c : Ne(c), Me(i, c);
      }
      function A_(i, c) {
        if (typeof i != "function")
          throw new br(s);
        return c = c == null ? 0 : vt(Ne(c), 0), Me(function(d) {
          var g = d[c], y = Fn(d, 0, c);
          return g && On(y, g), sr(i, this, y);
        });
      }
      function R_(i, c, d) {
        var g = !0, y = !0;
        if (typeof i != "function")
          throw new br(s);
        return it(d) && (g = "leading" in d ? !!d.leading : g, y = "trailing" in d ? !!d.trailing : y), Vh(i, c, {
          leading: g,
          maxWait: c,
          trailing: y
        });
      }
      function k_(i) {
        return Kh(i, 1);
      }
      function P_(i, c) {
        return bl(al(c), i);
      }
      function N_() {
        if (!arguments.length)
          return [];
        var i = arguments[0];
        return Re(i) ? i : [i];
      }
      function O_(i) {
        return Sr(i, v);
      }
      function M_(i, c) {
        return c = typeof c == "function" ? c : t, Sr(i, v, c);
      }
      function x_(i) {
        return Sr(i, p | v);
      }
      function L_(i, c) {
        return c = typeof c == "function" ? c : t, Sr(i, p | v, c);
      }
      function D_(i, c) {
        return c == null || xf(i, c, wt(c));
      }
      function Br(i, c) {
        return i === c || i !== i && c !== c;
      }
      var U_ = ja(jc), F_ = ja(function(i, c) {
        return i >= c;
      }), so = Bf(function() {
        return arguments;
      }()) ? Bf : function(i) {
        return at(i) && We.call(i, "callee") && !If.call(i, "callee");
      }, Re = D.isArray, H_ = sf ? cr(sf) : Ww;
      function Qt(i) {
        return i != null && ns(i.length) && !vn(i);
      }
      function ft(i) {
        return at(i) && Qt(i);
      }
      function B_(i) {
        return i === !0 || i === !1 || at(i) && qt(i) == ar;
      }
      var Hn = ew || Ml, K_ = cf ? cr(cf) : jw;
      function q_(i) {
        return at(i) && i.nodeType === 1 && !Oi(i);
      }
      function $_(i) {
        if (i == null)
          return !0;
        if (Qt(i) && (Re(i) || typeof i == "string" || typeof i.splice == "function" || Hn(i) || Ko(i) || so(i)))
          return !i.length;
        var c = xt(i);
        if (c == Pt || c == _t)
          return !i.size;
        if (Pi(i))
          return !Jc(i).length;
        for (var d in i)
          if (We.call(i, d))
            return !1;
        return !0;
      }
      function G_(i, c) {
        return Ai(i, c);
      }
      function z_(i, c, d) {
        d = typeof d == "function" ? d : t;
        var g = d ? d(i, c) : t;
        return g === t ? Ai(i, c, t, d) : !!g;
      }
      function _l(i) {
        if (!at(i))
          return !1;
        var c = qt(i);
        return c == Kt || c == un || typeof i.message == "string" && typeof i.name == "string" && !Oi(i);
      }
      function V_(i) {
        return typeof i == "number" && Rf(i);
      }
      function vn(i) {
        if (!it(i))
          return !1;
        var c = qt(i);
        return c == Cr || c == Ye || c == ln || c == Xn;
      }
      function jh(i) {
        return typeof i == "number" && i == Ne(i);
      }
      function ns(i) {
        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= re;
      }
      function it(i) {
        var c = typeof i;
        return i != null && (c == "object" || c == "function");
      }
      function at(i) {
        return i != null && typeof i == "object";
      }
      var Yh = lf ? cr(lf) : Qw;
      function W_(i, c) {
        return i === c || Qc(i, c, hl(c));
      }
      function j_(i, c, d) {
        return d = typeof d == "function" ? d : t, Qc(i, c, hl(c), d);
      }
      function Y_(i) {
        return Qh(i) && i != +i;
      }
      function Q_(i) {
        if (ME(i))
          throw new Ie(a);
        return Kf(i);
      }
      function J_(i) {
        return i === null;
      }
      function X_(i) {
        return i == null;
      }
      function Qh(i) {
        return typeof i == "number" || at(i) && qt(i) == Nt;
      }
      function Oi(i) {
        if (!at(i) || qt(i) != gt)
          return !1;
        var c = Pa(i);
        if (c === null)
          return !0;
        var d = We.call(c, "constructor") && c.constructor;
        return typeof d == "function" && d instanceof d && Ia.call(d) == jC;
      }
      var Sl = uf ? cr(uf) : Jw;
      function Z_(i) {
        return jh(i) && i >= -re && i <= re;
      }
      var Jh = df ? cr(df) : Xw;
      function os(i) {
        return typeof i == "string" || !Re(i) && at(i) && qt(i) == tt;
      }
      function ur(i) {
        return typeof i == "symbol" || at(i) && qt(i) == Qr;
      }
      var Ko = ff ? cr(ff) : Zw;
      function eS(i) {
        return i === t;
      }
      function tS(i) {
        return at(i) && xt(i) == mi;
      }
      function rS(i) {
        return at(i) && qt(i) == yy;
      }
      var nS = ja(Xc), oS = ja(function(i, c) {
        return i <= c;
      });
      function Xh(i) {
        if (!i)
          return [];
        if (Qt(i))
          return os(i) ? Fr(i) : Yt(i);
        if (Ci && i[Ci])
          return DC(i[Ci]());
        var c = xt(i), d = c == Pt ? Hc : c == _t ? _a : qo;
        return d(i);
      }
      function yn(i) {
        if (!i)
          return i === 0 ? i : 0;
        if (i = Ar(i), i === ie || i === -ie) {
          var c = i < 0 ? -1 : 1;
          return c * Pe;
        }
        return i === i ? i : 0;
      }
      function Ne(i) {
        var c = yn(i), d = c % 1;
        return c === c ? d ? c - d : c : 0;
      }
      function Zh(i) {
        return i ? no(Ne(i), 0, ot) : 0;
      }
      function Ar(i) {
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
        i = yf(i);
        var d = Hy.test(i);
        return d || Ky.test(i) ? CC(i.slice(2), d ? 2 : 8) : Fy.test(i) ? Qe : +i;
      }
      function ep(i) {
        return Xr(i, Jt(i));
      }
      function iS(i) {
        return i ? no(Ne(i), -re, re) : i === 0 ? i : 0;
      }
      function Ge(i) {
        return i == null ? "" : lr(i);
      }
      var aS = Fo(function(i, c) {
        if (Pi(c) || Qt(c)) {
          Xr(c, wt(c), i);
          return;
        }
        for (var d in c)
          We.call(c, d) && Si(i, d, c[d]);
      }), tp = Fo(function(i, c) {
        Xr(c, Jt(c), i);
      }), is = Fo(function(i, c, d, g) {
        Xr(c, Jt(c), i, g);
      }), sS = Fo(function(i, c, d, g) {
        Xr(c, wt(c), i, g);
      }), cS = gn(zc);
      function lS(i, c) {
        var d = Uo(i);
        return c == null ? d : Mf(d, c);
      }
      var uS = Me(function(i, c) {
        i = Je(i);
        var d = -1, g = c.length, y = g > 2 ? c[2] : t;
        for (y && $t(c[0], c[1], y) && (g = 1); ++d < g; )
          for (var b = c[d], T = Jt(b), k = -1, x = T.length; ++k < x; ) {
            var B = T[k], K = i[B];
            (K === t || Br(K, xo[B]) && !We.call(i, B)) && (i[B] = b[B]);
          }
        return i;
      }), dS = Me(function(i) {
        return i.push(t, yh), sr(rp, t, i);
      });
      function fS(i, c) {
        return pf(i, pe(c, 3), Jr);
      }
      function hS(i, c) {
        return pf(i, pe(c, 3), Wc);
      }
      function pS(i, c) {
        return i == null ? i : Vc(i, pe(c, 3), Jt);
      }
      function gS(i, c) {
        return i == null ? i : Ff(i, pe(c, 3), Jt);
      }
      function mS(i, c) {
        return i && Jr(i, pe(c, 3));
      }
      function vS(i, c) {
        return i && Wc(i, pe(c, 3));
      }
      function yS(i) {
        return i == null ? [] : Ba(i, wt(i));
      }
      function CS(i) {
        return i == null ? [] : Ba(i, Jt(i));
      }
      function Tl(i, c, d) {
        var g = i == null ? t : oo(i, c);
        return g === t ? d : g;
      }
      function wS(i, c) {
        return i != null && Eh(i, c, $w);
      }
      function Il(i, c) {
        return i != null && Eh(i, c, Gw);
      }
      var ES = hh(function(i, c, d) {
        c != null && typeof c.toString != "function" && (c = Aa.call(c)), i[c] = d;
      }, Rl(Xt)), bS = hh(function(i, c, d) {
        c != null && typeof c.toString != "function" && (c = Aa.call(c)), We.call(i, c) ? i[c].push(d) : i[c] = [d];
      }, pe), _S = Me(Ii);
      function wt(i) {
        return Qt(i) ? Nf(i) : Jc(i);
      }
      function Jt(i) {
        return Qt(i) ? Nf(i, !0) : eE(i);
      }
      function SS(i, c) {
        var d = {};
        return c = pe(c, 3), Jr(i, function(g, y, b) {
          hn(d, c(g, y, b), g);
        }), d;
      }
      function TS(i, c) {
        var d = {};
        return c = pe(c, 3), Jr(i, function(g, y, b) {
          hn(d, y, c(g, y, b));
        }), d;
      }
      var IS = Fo(function(i, c, d) {
        Ka(i, c, d);
      }), rp = Fo(function(i, c, d, g) {
        Ka(i, c, d, g);
      }), AS = gn(function(i, c) {
        var d = {};
        if (i == null)
          return d;
        var g = !1;
        c = nt(c, function(b) {
          return b = Un(b, i), g || (g = b.length > 1), b;
        }), Xr(i, dl(i), d), g && (d = Sr(d, p | m | v, EE));
        for (var y = c.length; y--; )
          nl(d, c[y]);
        return d;
      });
      function RS(i, c) {
        return np(i, rs(pe(c)));
      }
      var kS = gn(function(i, c) {
        return i == null ? {} : rE(i, c);
      });
      function np(i, c) {
        if (i == null)
          return {};
        var d = nt(dl(i), function(g) {
          return [g];
        });
        return c = pe(c), jf(i, d, function(g, y) {
          return c(g, y[0]);
        });
      }
      function PS(i, c, d) {
        c = Un(c, i);
        var g = -1, y = c.length;
        for (y || (y = 1, i = t); ++g < y; ) {
          var b = i == null ? t : i[Zr(c[g])];
          b === t && (g = y, b = d), i = vn(b) ? b.call(i) : b;
        }
        return i;
      }
      function NS(i, c, d) {
        return i == null ? i : Ri(i, c, d);
      }
      function OS(i, c, d, g) {
        return g = typeof g == "function" ? g : t, i == null ? i : Ri(i, c, d, g);
      }
      var op = mh(wt), ip = mh(Jt);
      function MS(i, c, d) {
        var g = Re(i), y = g || Hn(i) || Ko(i);
        if (c = pe(c, 4), d == null) {
          var b = i && i.constructor;
          y ? d = g ? new b() : [] : it(i) ? d = vn(b) ? Uo(Pa(i)) : {} : d = {};
        }
        return (y ? Er : Jr)(i, function(T, k, x) {
          return c(d, T, k, x);
        }), d;
      }
      function xS(i, c) {
        return i == null ? !0 : nl(i, c);
      }
      function LS(i, c, d) {
        return i == null ? i : Zf(i, c, al(d));
      }
      function DS(i, c, d, g) {
        return g = typeof g == "function" ? g : t, i == null ? i : Zf(i, c, al(d), g);
      }
      function qo(i) {
        return i == null ? [] : Fc(i, wt(i));
      }
      function US(i) {
        return i == null ? [] : Fc(i, Jt(i));
      }
      function FS(i, c, d) {
        return d === t && (d = c, c = t), d !== t && (d = Ar(d), d = d === d ? d : 0), c !== t && (c = Ar(c), c = c === c ? c : 0), no(Ar(i), c, d);
      }
      function HS(i, c, d) {
        return c = yn(c), d === t ? (d = c, c = 0) : d = yn(d), i = Ar(i), zw(i, c, d);
      }
      function BS(i, c, d) {
        if (d && typeof d != "boolean" && $t(i, c, d) && (c = d = t), d === t && (typeof c == "boolean" ? (d = c, c = t) : typeof i == "boolean" && (d = i, i = t)), i === t && c === t ? (i = 0, c = 1) : (i = yn(i), c === t ? (c = i, i = 0) : c = yn(c)), i > c) {
          var g = i;
          i = c, c = g;
        }
        if (d || i % 1 || c % 1) {
          var y = kf();
          return Mt(i + y * (c - i + yC("1e-" + ((y + "").length - 1))), c);
        }
        return el(i, c);
      }
      var KS = Ho(function(i, c, d) {
        return c = c.toLowerCase(), i + (d ? ap(c) : c);
      });
      function ap(i) {
        return Al(Ge(i).toLowerCase());
      }
      function sp(i) {
        return i = Ge(i), i && i.replace($y, NC).replace(cC, "");
      }
      function qS(i, c, d) {
        i = Ge(i), c = lr(c);
        var g = i.length;
        d = d === t ? g : no(Ne(d), 0, g);
        var y = d;
        return d -= c.length, d >= 0 && i.slice(d, y) == c;
      }
      function $S(i) {
        return i = Ge(i), i && _y.test(i) ? i.replace(Ud, OC) : i;
      }
      function GS(i) {
        return i = Ge(i), i && ky.test(i) ? i.replace(bc, "\\$&") : i;
      }
      var zS = Ho(function(i, c, d) {
        return i + (d ? "-" : "") + c.toLowerCase();
      }), VS = Ho(function(i, c, d) {
        return i + (d ? " " : "") + c.toLowerCase();
      }), WS = uh("toLowerCase");
      function jS(i, c, d) {
        i = Ge(i), c = Ne(c);
        var g = c ? Oo(i) : 0;
        if (!c || g >= c)
          return i;
        var y = (c - g) / 2;
        return Wa(xa(y), d) + i + Wa(Ma(y), d);
      }
      function YS(i, c, d) {
        i = Ge(i), c = Ne(c);
        var g = c ? Oo(i) : 0;
        return c && g < c ? i + Wa(c - g, d) : i;
      }
      function QS(i, c, d) {
        i = Ge(i), c = Ne(c);
        var g = c ? Oo(i) : 0;
        return c && g < c ? Wa(c - g, d) + i : i;
      }
      function JS(i, c, d) {
        return d || c == null ? c = 0 : c && (c = +c), ow(Ge(i).replace(_c, ""), c || 0);
      }
      function XS(i, c, d) {
        return (d ? $t(i, c, d) : c === t) ? c = 1 : c = Ne(c), tl(Ge(i), c);
      }
      function ZS() {
        var i = arguments, c = Ge(i[0]);
        return i.length < 3 ? c : c.replace(i[1], i[2]);
      }
      var eT = Ho(function(i, c, d) {
        return i + (d ? "_" : "") + c.toLowerCase();
      });
      function tT(i, c, d) {
        return d && typeof d != "number" && $t(i, c, d) && (c = d = t), d = d === t ? ot : d >>> 0, d ? (i = Ge(i), i && (typeof c == "string" || c != null && !Sl(c)) && (c = lr(c), !c && No(i)) ? Fn(Fr(i), 0, d) : i.split(c, d)) : [];
      }
      var rT = Ho(function(i, c, d) {
        return i + (d ? " " : "") + Al(c);
      });
      function nT(i, c, d) {
        return i = Ge(i), d = d == null ? 0 : no(Ne(d), 0, i.length), c = lr(c), i.slice(d, d + c.length) == c;
      }
      function oT(i, c, d) {
        var g = w.templateSettings;
        d && $t(i, c, d) && (c = t), i = Ge(i), c = is({}, c, g, vh);
        var y = is({}, c.imports, g.imports, vh), b = wt(y), T = Fc(y, b), k, x, B = 0, K = c.interpolate || ya, V = "__p += '", Z = Bc(
          (c.escape || ya).source + "|" + K.source + "|" + (K === Fd ? Uy : ya).source + "|" + (c.evaluate || ya).source + "|$",
          "g"
        ), ue = "//# sourceURL=" + (We.call(c, "sourceURL") ? (c.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++hC + "]") + `
`;
        i.replace(Z, function(ye, xe, Fe, dr, Gt, fr) {
          return Fe || (Fe = dr), V += i.slice(B, fr).replace(Gy, MC), xe && (k = !0, V += `' +
__e(` + xe + `) +
'`), Gt && (x = !0, V += `';
` + Gt + `;
__p += '`), Fe && (V += `' +
((__t = (` + Fe + `)) == null ? '' : __t) +
'`), B = fr + ye.length, ye;
        }), V += `';
`;
        var ve = We.call(c, "variable") && c.variable;
        if (!ve)
          V = `with (obj) {
` + V + `
}
`;
        else if (Ly.test(ve))
          throw new Ie(l);
        V = (x ? V.replace(Cy, "") : V).replace(wy, "$1").replace(Ey, "$1;"), V = "function(" + (ve || "obj") + `) {
` + (ve ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (k ? ", __e = _.escape" : "") + (x ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + V + `return __p
}`;
        var Oe = lp(function() {
          return qe(b, ue + "return " + V).apply(t, T);
        });
        if (Oe.source = V, _l(Oe))
          throw Oe;
        return Oe;
      }
      function iT(i) {
        return Ge(i).toLowerCase();
      }
      function aT(i) {
        return Ge(i).toUpperCase();
      }
      function sT(i, c, d) {
        if (i = Ge(i), i && (d || c === t))
          return yf(i);
        if (!i || !(c = lr(c)))
          return i;
        var g = Fr(i), y = Fr(c), b = Cf(g, y), T = wf(g, y) + 1;
        return Fn(g, b, T).join("");
      }
      function cT(i, c, d) {
        if (i = Ge(i), i && (d || c === t))
          return i.slice(0, bf(i) + 1);
        if (!i || !(c = lr(c)))
          return i;
        var g = Fr(i), y = wf(g, Fr(c)) + 1;
        return Fn(g, 0, y).join("");
      }
      function lT(i, c, d) {
        if (i = Ge(i), i && (d || c === t))
          return i.replace(_c, "");
        if (!i || !(c = lr(c)))
          return i;
        var g = Fr(i), y = Cf(g, Fr(c));
        return Fn(g, y).join("");
      }
      function uT(i, c) {
        var d = Q, g = de;
        if (it(c)) {
          var y = "separator" in c ? c.separator : y;
          d = "length" in c ? Ne(c.length) : d, g = "omission" in c ? lr(c.omission) : g;
        }
        i = Ge(i);
        var b = i.length;
        if (No(i)) {
          var T = Fr(i);
          b = T.length;
        }
        if (d >= b)
          return i;
        var k = d - Oo(g);
        if (k < 1)
          return g;
        var x = T ? Fn(T, 0, k).join("") : i.slice(0, k);
        if (y === t)
          return x + g;
        if (T && (k += x.length - k), Sl(y)) {
          if (i.slice(k).search(y)) {
            var B, K = x;
            for (y.global || (y = Bc(y.source, Ge(Hd.exec(y)) + "g")), y.lastIndex = 0; B = y.exec(K); )
              var V = B.index;
            x = x.slice(0, V === t ? k : V);
          }
        } else if (i.indexOf(lr(y), k) != k) {
          var Z = x.lastIndexOf(y);
          Z > -1 && (x = x.slice(0, Z));
        }
        return x + g;
      }
      function dT(i) {
        return i = Ge(i), i && by.test(i) ? i.replace(Dd, BC) : i;
      }
      var fT = Ho(function(i, c, d) {
        return i + (d ? " " : "") + c.toUpperCase();
      }), Al = uh("toUpperCase");
      function cp(i, c, d) {
        return i = Ge(i), c = d ? t : c, c === t ? LC(i) ? $C(i) : IC(i) : i.match(c) || [];
      }
      var lp = Me(function(i, c) {
        try {
          return sr(i, t, c);
        } catch (d) {
          return _l(d) ? d : new Ie(d);
        }
      }), hT = gn(function(i, c) {
        return Er(c, function(d) {
          d = Zr(d), hn(i, d, El(i[d], i));
        }), i;
      });
      function pT(i) {
        var c = i == null ? 0 : i.length, d = pe();
        return i = c ? nt(i, function(g) {
          if (typeof g[1] != "function")
            throw new br(s);
          return [d(g[0]), g[1]];
        }) : [], Me(function(g) {
          for (var y = -1; ++y < c; ) {
            var b = i[y];
            if (sr(b[0], this, g))
              return sr(b[1], this, g);
          }
        });
      }
      function gT(i) {
        return Bw(Sr(i, p));
      }
      function Rl(i) {
        return function() {
          return i;
        };
      }
      function mT(i, c) {
        return i == null || i !== i ? c : i;
      }
      var vT = fh(), yT = fh(!0);
      function Xt(i) {
        return i;
      }
      function kl(i) {
        return qf(typeof i == "function" ? i : Sr(i, p));
      }
      function CT(i) {
        return Gf(Sr(i, p));
      }
      function wT(i, c) {
        return zf(i, Sr(c, p));
      }
      var ET = Me(function(i, c) {
        return function(d) {
          return Ii(d, i, c);
        };
      }), bT = Me(function(i, c) {
        return function(d) {
          return Ii(i, d, c);
        };
      });
      function Pl(i, c, d) {
        var g = wt(c), y = Ba(c, g);
        d == null && !(it(c) && (y.length || !g.length)) && (d = c, c = i, i = this, y = Ba(c, wt(c)));
        var b = !(it(d) && "chain" in d) || !!d.chain, T = vn(i);
        return Er(y, function(k) {
          var x = c[k];
          i[k] = x, T && (i.prototype[k] = function() {
            var B = this.__chain__;
            if (b || B) {
              var K = i(this.__wrapped__), V = K.__actions__ = Yt(this.__actions__);
              return V.push({ func: x, args: arguments, thisArg: i }), K.__chain__ = B, K;
            }
            return x.apply(i, On([this.value()], arguments));
          });
        }), i;
      }
      function _T() {
        return St._ === this && (St._ = YC), this;
      }
      function Nl() {
      }
      function ST(i) {
        return i = Ne(i), Me(function(c) {
          return Vf(c, i);
        });
      }
      var TT = cl(nt), IT = cl(hf), AT = cl(Mc);
      function up(i) {
        return gl(i) ? xc(Zr(i)) : nE(i);
      }
      function RT(i) {
        return function(c) {
          return i == null ? t : oo(i, c);
        };
      }
      var kT = ph(), PT = ph(!0);
      function Ol() {
        return [];
      }
      function Ml() {
        return !1;
      }
      function NT() {
        return {};
      }
      function OT() {
        return "";
      }
      function MT() {
        return !0;
      }
      function xT(i, c) {
        if (i = Ne(i), i < 1 || i > re)
          return [];
        var d = ot, g = Mt(i, ot);
        c = pe(c), i -= ot;
        for (var y = Uc(g, c); ++d < i; )
          c(d);
        return y;
      }
      function LT(i) {
        return Re(i) ? nt(i, Zr) : ur(i) ? [i] : Yt(Ph(Ge(i)));
      }
      function DT(i) {
        var c = ++WC;
        return Ge(i) + c;
      }
      var UT = Va(function(i, c) {
        return i + c;
      }, 0), FT = ll("ceil"), HT = Va(function(i, c) {
        return i / c;
      }, 1), BT = ll("floor");
      function KT(i) {
        return i && i.length ? Ha(i, Xt, jc) : t;
      }
      function qT(i, c) {
        return i && i.length ? Ha(i, pe(c, 2), jc) : t;
      }
      function $T(i) {
        return mf(i, Xt);
      }
      function GT(i, c) {
        return mf(i, pe(c, 2));
      }
      function zT(i) {
        return i && i.length ? Ha(i, Xt, Xc) : t;
      }
      function VT(i, c) {
        return i && i.length ? Ha(i, pe(c, 2), Xc) : t;
      }
      var WT = Va(function(i, c) {
        return i * c;
      }, 1), jT = ll("round"), YT = Va(function(i, c) {
        return i - c;
      }, 0);
      function QT(i) {
        return i && i.length ? Dc(i, Xt) : 0;
      }
      function JT(i, c) {
        return i && i.length ? Dc(i, pe(c, 2)) : 0;
      }
      return w.after = C_, w.ary = Kh, w.assign = aS, w.assignIn = tp, w.assignInWith = is, w.assignWith = sS, w.at = cS, w.before = qh, w.bind = El, w.bindAll = hT, w.bindKey = $h, w.castArray = N_, w.chain = Fh, w.chunk = BE, w.compact = KE, w.concat = qE, w.cond = pT, w.conforms = gT, w.constant = Rl, w.countBy = Qb, w.create = lS, w.curry = Gh, w.curryRight = zh, w.debounce = Vh, w.defaults = uS, w.defaultsDeep = dS, w.defer = w_, w.delay = E_, w.difference = $E, w.differenceBy = GE, w.differenceWith = zE, w.drop = VE, w.dropRight = WE, w.dropRightWhile = jE, w.dropWhile = YE, w.fill = QE, w.filter = Xb, w.flatMap = t_, w.flatMapDeep = r_, w.flatMapDepth = n_, w.flatten = xh, w.flattenDeep = JE, w.flattenDepth = XE, w.flip = b_, w.flow = vT, w.flowRight = yT, w.fromPairs = ZE, w.functions = yS, w.functionsIn = CS, w.groupBy = o_, w.initial = tb, w.intersection = rb, w.intersectionBy = nb, w.intersectionWith = ob, w.invert = ES, w.invertBy = bS, w.invokeMap = a_, w.iteratee = kl, w.keyBy = s_, w.keys = wt, w.keysIn = Jt, w.map = Za, w.mapKeys = SS, w.mapValues = TS, w.matches = CT, w.matchesProperty = wT, w.memoize = ts, w.merge = IS, w.mergeWith = rp, w.method = ET, w.methodOf = bT, w.mixin = Pl, w.negate = rs, w.nthArg = ST, w.omit = AS, w.omitBy = RS, w.once = __, w.orderBy = c_, w.over = TT, w.overArgs = S_, w.overEvery = IT, w.overSome = AT, w.partial = bl, w.partialRight = Wh, w.partition = l_, w.pick = kS, w.pickBy = np, w.property = up, w.propertyOf = RT, w.pull = cb, w.pullAll = Dh, w.pullAllBy = lb, w.pullAllWith = ub, w.pullAt = db, w.range = kT, w.rangeRight = PT, w.rearg = T_, w.reject = f_, w.remove = fb, w.rest = I_, w.reverse = Cl, w.sampleSize = p_, w.set = NS, w.setWith = OS, w.shuffle = g_, w.slice = hb, w.sortBy = y_, w.sortedUniq = wb, w.sortedUniqBy = Eb, w.split = tT, w.spread = A_, w.tail = bb, w.take = _b, w.takeRight = Sb, w.takeRightWhile = Tb, w.takeWhile = Ib, w.tap = Kb, w.throttle = R_, w.thru = Xa, w.toArray = Xh, w.toPairs = op, w.toPairsIn = ip, w.toPath = LT, w.toPlainObject = ep, w.transform = MS, w.unary = k_, w.union = Ab, w.unionBy = Rb, w.unionWith = kb, w.uniq = Pb, w.uniqBy = Nb, w.uniqWith = Ob, w.unset = xS, w.unzip = wl, w.unzipWith = Uh, w.update = LS, w.updateWith = DS, w.values = qo, w.valuesIn = US, w.without = Mb, w.words = cp, w.wrap = P_, w.xor = xb, w.xorBy = Lb, w.xorWith = Db, w.zip = Ub, w.zipObject = Fb, w.zipObjectDeep = Hb, w.zipWith = Bb, w.entries = op, w.entriesIn = ip, w.extend = tp, w.extendWith = is, Pl(w, w), w.add = UT, w.attempt = lp, w.camelCase = KS, w.capitalize = ap, w.ceil = FT, w.clamp = FS, w.clone = O_, w.cloneDeep = x_, w.cloneDeepWith = L_, w.cloneWith = M_, w.conformsTo = D_, w.deburr = sp, w.defaultTo = mT, w.divide = HT, w.endsWith = qS, w.eq = Br, w.escape = $S, w.escapeRegExp = GS, w.every = Jb, w.find = Zb, w.findIndex = Oh, w.findKey = fS, w.findLast = e_, w.findLastIndex = Mh, w.findLastKey = hS, w.floor = BT, w.forEach = Hh, w.forEachRight = Bh, w.forIn = pS, w.forInRight = gS, w.forOwn = mS, w.forOwnRight = vS, w.get = Tl, w.gt = U_, w.gte = F_, w.has = wS, w.hasIn = Il, w.head = Lh, w.identity = Xt, w.includes = i_, w.indexOf = eb, w.inRange = HS, w.invoke = _S, w.isArguments = so, w.isArray = Re, w.isArrayBuffer = H_, w.isArrayLike = Qt, w.isArrayLikeObject = ft, w.isBoolean = B_, w.isBuffer = Hn, w.isDate = K_, w.isElement = q_, w.isEmpty = $_, w.isEqual = G_, w.isEqualWith = z_, w.isError = _l, w.isFinite = V_, w.isFunction = vn, w.isInteger = jh, w.isLength = ns, w.isMap = Yh, w.isMatch = W_, w.isMatchWith = j_, w.isNaN = Y_, w.isNative = Q_, w.isNil = X_, w.isNull = J_, w.isNumber = Qh, w.isObject = it, w.isObjectLike = at, w.isPlainObject = Oi, w.isRegExp = Sl, w.isSafeInteger = Z_, w.isSet = Jh, w.isString = os, w.isSymbol = ur, w.isTypedArray = Ko, w.isUndefined = eS, w.isWeakMap = tS, w.isWeakSet = rS, w.join = ib, w.kebabCase = zS, w.last = Ir, w.lastIndexOf = ab, w.lowerCase = VS, w.lowerFirst = WS, w.lt = nS, w.lte = oS, w.max = KT, w.maxBy = qT, w.mean = $T, w.meanBy = GT, w.min = zT, w.minBy = VT, w.stubArray = Ol, w.stubFalse = Ml, w.stubObject = NT, w.stubString = OT, w.stubTrue = MT, w.multiply = WT, w.nth = sb, w.noConflict = _T, w.noop = Nl, w.now = es, w.pad = jS, w.padEnd = YS, w.padStart = QS, w.parseInt = JS, w.random = BS, w.reduce = u_, w.reduceRight = d_, w.repeat = XS, w.replace = ZS, w.result = PS, w.round = jT, w.runInContext = M, w.sample = h_, w.size = m_, w.snakeCase = eT, w.some = v_, w.sortedIndex = pb, w.sortedIndexBy = gb, w.sortedIndexOf = mb, w.sortedLastIndex = vb, w.sortedLastIndexBy = yb, w.sortedLastIndexOf = Cb, w.startCase = rT, w.startsWith = nT, w.subtract = YT, w.sum = QT, w.sumBy = JT, w.template = oT, w.times = xT, w.toFinite = yn, w.toInteger = Ne, w.toLength = Zh, w.toLower = iT, w.toNumber = Ar, w.toSafeInteger = iS, w.toString = Ge, w.toUpper = aT, w.trim = sT, w.trimEnd = cT, w.trimStart = lT, w.truncate = uT, w.unescape = dT, w.uniqueId = DT, w.upperCase = fT, w.upperFirst = Al, w.each = Hh, w.eachRight = Bh, w.first = Lh, Pl(w, function() {
        var i = {};
        return Jr(w, function(c, d) {
          We.call(w.prototype, d) || (i[d] = c);
        }), i;
      }(), { chain: !1 }), w.VERSION = n, Er(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
        w[i].placeholder = w;
      }), Er(["drop", "take"], function(i, c) {
        De.prototype[i] = function(d) {
          d = d === t ? 1 : vt(Ne(d), 0);
          var g = this.__filtered__ && !c ? new De(this) : this.clone();
          return g.__filtered__ ? g.__takeCount__ = Mt(d, g.__takeCount__) : g.__views__.push({
            size: Mt(d, ot),
            type: i + (g.__dir__ < 0 ? "Right" : "")
          }), g;
        }, De.prototype[i + "Right"] = function(d) {
          return this.reverse()[i](d).reverse();
        };
      }), Er(["filter", "map", "takeWhile"], function(i, c) {
        var d = c + 1, g = d == oe || d == J;
        De.prototype[i] = function(y) {
          var b = this.clone();
          return b.__iteratees__.push({
            iteratee: pe(y, 3),
            type: d
          }), b.__filtered__ = b.__filtered__ || g, b;
        };
      }), Er(["head", "last"], function(i, c) {
        var d = "take" + (c ? "Right" : "");
        De.prototype[i] = function() {
          return this[d](1).value()[0];
        };
      }), Er(["initial", "tail"], function(i, c) {
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
      }, Jr(De.prototype, function(i, c) {
        var d = /^(?:filter|find|map|reject)|While$/.test(c), g = /^(?:head|last)$/.test(c), y = w[g ? "take" + (c == "last" ? "Right" : "") : c], b = g || /^find/.test(c);
        y && (w.prototype[c] = function() {
          var T = this.__wrapped__, k = g ? [1] : arguments, x = T instanceof De, B = k[0], K = x || Re(T), V = function(xe) {
            var Fe = y.apply(w, On([xe], k));
            return g && Z ? Fe[0] : Fe;
          };
          K && d && typeof B == "function" && B.length != 1 && (x = K = !1);
          var Z = this.__chain__, ue = !!this.__actions__.length, ve = b && !Z, Oe = x && !ue;
          if (!b && K) {
            T = Oe ? T : new De(this);
            var ye = i.apply(T, k);
            return ye.__actions__.push({ func: Xa, args: [V], thisArg: t }), new _r(ye, Z);
          }
          return ve && Oe ? i.apply(this, k) : (ye = this.thru(V), ve ? g ? ye.value()[0] : ye.value() : ye);
        });
      }), Er(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
        var c = Sa[i], d = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru", g = /^(?:pop|shift)$/.test(i);
        w.prototype[i] = function() {
          var y = arguments;
          if (g && !this.__chain__) {
            var b = this.value();
            return c.apply(Re(b) ? b : [], y);
          }
          return this[d](function(T) {
            return c.apply(Re(T) ? T : [], y);
          });
        };
      }), Jr(De.prototype, function(i, c) {
        var d = w[c];
        if (d) {
          var g = d.name + "";
          We.call(Do, g) || (Do[g] = []), Do[g].push({ name: c, func: d });
        }
      }), Do[za(t, R).name] = [{
        name: "wrapper",
        func: t
      }], De.prototype.clone = dw, De.prototype.reverse = fw, De.prototype.value = hw, w.prototype.at = qb, w.prototype.chain = $b, w.prototype.commit = Gb, w.prototype.next = zb, w.prototype.plant = Wb, w.prototype.reverse = jb, w.prototype.toJSON = w.prototype.valueOf = w.prototype.value = Yb, w.prototype.first = w.prototype.head, Ci && (w.prototype[Ci] = Vb), w;
    }, Mo = GC();
    Zn ? ((Zn.exports = Mo)._ = Mo, kc._ = Mo) : St._ = Mo;
  }).call(Mi);
})(Ks, Ks.exports);
var Kv = Ks.exports;
function At(r) {
  return `Minified Redux error #${r}; visit https://redux.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `;
}
var h1 = /* @__PURE__ */ (() => typeof Symbol == "function" && Symbol.observable || "@@observable")(), Sg = h1, Vl = () => Math.random().toString(36).substring(7).split("").join("."), p1 = {
  INIT: `@@redux/INIT${Vl()}`,
  REPLACE: `@@redux/REPLACE${Vl()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Vl()}`
}, qs = p1;
function Pd(r) {
  if (typeof r != "object" || r === null)
    return !1;
  let e = r;
  for (; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(r) === e || Object.getPrototypeOf(r) === null;
}
function qv(r, e, t) {
  if (typeof r != "function")
    throw new Error(At(2));
  if (typeof e == "function" && typeof t == "function" || typeof t == "function" && typeof arguments[3] == "function")
    throw new Error(At(0));
  if (typeof e == "function" && typeof t > "u" && (t = e, e = void 0), typeof t < "u") {
    if (typeof t != "function")
      throw new Error(At(1));
    return t(qv)(r, e);
  }
  let n = r, o = e, a = /* @__PURE__ */ new Map(), s = a, l = 0, u = !1;
  function f() {
    s === a && (s = /* @__PURE__ */ new Map(), a.forEach((_, R) => {
      s.set(R, _);
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
    let R = !0;
    f();
    const A = l++;
    return s.set(A, _), function() {
      if (R) {
        if (u)
          throw new Error(At(6));
        R = !1, f(), s.delete(A), a = null;
      }
    };
  }
  function m(_) {
    if (!Pd(_))
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
    n = _, m({
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
      subscribe(R) {
        if (typeof R != "object" || R === null)
          throw new Error(At(11));
        function A() {
          const I = R;
          I.next && I.next(h());
        }
        return A(), {
          unsubscribe: _(A)
        };
      },
      [Sg]() {
        return this;
      }
    };
  }
  return m({
    type: qs.INIT
  }), {
    dispatch: m,
    subscribe: p,
    getState: h,
    replaceReducer: v,
    [Sg]: C
  };
}
function g1(r) {
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
function m1(r) {
  const e = Object.keys(r), t = {};
  for (let a = 0; a < e.length; a++) {
    const s = e[a];
    typeof r[s] == "function" && (t[s] = r[s]);
  }
  const n = Object.keys(t);
  let o;
  try {
    g1(t);
  } catch (a) {
    o = a;
  }
  return function(s = {}, l) {
    if (o)
      throw o;
    let u = !1;
    const f = {};
    for (let h = 0; h < n.length; h++) {
      const p = n[h], m = t[p], v = s[p], C = m(v, l);
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
function v1(...r) {
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
function y1(r) {
  return Pd(r) && "type" in r && typeof r.type == "string";
}
var $v = Symbol.for("immer-nothing"), Tg = Symbol.for("immer-draftable"), vr = Symbol.for("immer-state");
function $r(r, ...e) {
  throw new Error(
    `[Immer] minified error nr: ${r}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var li = Object.getPrototypeOf;
function Wn(r) {
  return !!r && !!r[vr];
}
function An(r) {
  var e;
  return r ? Gv(r) || Array.isArray(r) || !!r[Tg] || !!((e = r.constructor) != null && e[Tg]) || uc(r) || dc(r) : !1;
}
var C1 = Object.prototype.constructor.toString();
function Gv(r) {
  if (!r || typeof r != "object")
    return !1;
  const e = li(r);
  if (e === null)
    return !0;
  const t = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
  return t === Object ? !0 : typeof t == "function" && Function.toString.call(t) === C1;
}
function ra(r, e) {
  lc(r) === 0 ? Object.entries(r).forEach(([t, n]) => {
    e(t, n, r);
  }) : r.forEach((t, n) => e(n, t, r));
}
function lc(r) {
  const e = r[vr];
  return e ? e.type_ : Array.isArray(r) ? 1 : uc(r) ? 2 : dc(r) ? 3 : 0;
}
function Eu(r, e) {
  return lc(r) === 2 ? r.has(e) : Object.prototype.hasOwnProperty.call(r, e);
}
function zv(r, e, t) {
  const n = lc(r);
  n === 2 ? r.set(e, t) : n === 3 ? r.add(t) : r[e] = t;
}
function w1(r, e) {
  return r === e ? r !== 0 || 1 / r === 1 / e : r !== r && e !== e;
}
function uc(r) {
  return r instanceof Map;
}
function dc(r) {
  return r instanceof Set;
}
function uo(r) {
  return r.copy_ || r.base_;
}
function bu(r, e) {
  if (uc(r))
    return new Map(r);
  if (dc(r))
    return new Set(r);
  if (Array.isArray(r))
    return Array.prototype.slice.call(r);
  if (!e && Gv(r))
    return li(r) ? { ...r } : Object.assign(/* @__PURE__ */ Object.create(null), r);
  const t = Object.getOwnPropertyDescriptors(r);
  delete t[vr];
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
function Nd(r, e = !1) {
  return fc(r) || Wn(r) || !An(r) || (lc(r) > 1 && (r.set = r.add = r.clear = r.delete = E1), Object.freeze(r), e && ra(r, (t, n) => Nd(n, !0))), r;
}
function E1() {
  $r(2);
}
function fc(r) {
  return Object.isFrozen(r);
}
var b1 = {};
function _o(r) {
  const e = b1[r];
  return e || $r(0, r), e;
}
var na;
function Vv() {
  return na;
}
function _1(r, e) {
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
function Ig(r, e) {
  e && (_o("Patches"), r.patches_ = [], r.inversePatches_ = [], r.patchListener_ = e);
}
function _u(r) {
  Su(r), r.drafts_.forEach(S1), r.drafts_ = null;
}
function Su(r) {
  r === na && (na = r.parent_);
}
function Ag(r) {
  return na = _1(na, r);
}
function S1(r) {
  const e = r[vr];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : e.revoked_ = !0;
}
function Rg(r, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const t = e.drafts_[0];
  return r !== void 0 && r !== t ? (t[vr].modified_ && (_u(e), $r(4)), An(r) && (r = Gs(e, r), e.parent_ || zs(e, r)), e.patches_ && _o("Patches").generateReplacementPatches_(
    t[vr].base_,
    r,
    e.patches_,
    e.inversePatches_
  )) : r = Gs(e, t, []), _u(e), e.patches_ && e.patchListener_(e.patches_, e.inversePatches_), r !== $v ? r : void 0;
}
function Gs(r, e, t) {
  if (fc(e))
    return e;
  const n = e[vr];
  if (!n)
    return ra(
      e,
      (o, a) => kg(r, n, e, o, a, t)
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
      (l, u) => kg(r, n, o, l, u, t, s)
    ), zs(r, o, !1), t && r.patches_ && _o("Patches").generatePatches_(
      n,
      t,
      r.patches_,
      r.inversePatches_
    );
  }
  return n.copy_;
}
function kg(r, e, t, n, o, a, s) {
  if (Wn(o)) {
    const l = a && e && e.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Eu(e.assigned_, n) ? a.concat(n) : void 0, u = Gs(r, o, l);
    if (zv(t, n, u), Wn(u))
      r.canAutoFreeze_ = !1;
    else
      return;
  } else
    s && t.add(o);
  if (An(o) && !fc(o)) {
    if (!r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1)
      return;
    Gs(r, o), (!e || !e.scope_.parent_) && zs(r, o);
  }
}
function zs(r, e, t = !1) {
  !r.parent_ && r.immer_.autoFreeze_ && r.canAutoFreeze_ && Nd(e, t);
}
function T1(r, e) {
  const t = Array.isArray(r), n = {
    type_: t ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: e ? e.scope_ : Vv(),
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
  let o = n, a = Od;
  t && (o = [n], a = oa);
  const { revoke: s, proxy: l } = Proxy.revocable(o, a);
  return n.draft_ = l, n.revoke_ = s, l;
}
var Od = {
  get(r, e) {
    if (e === vr)
      return r;
    const t = uo(r);
    if (!Eu(t, e))
      return I1(r, t, e);
    const n = t[e];
    return r.finalized_ || !An(n) ? n : n === Wl(r.base_, e) ? (jl(r), r.copy_[e] = Iu(n, r)) : n;
  },
  has(r, e) {
    return e in uo(r);
  },
  ownKeys(r) {
    return Reflect.ownKeys(uo(r));
  },
  set(r, e, t) {
    const n = Wv(uo(r), e);
    if (n != null && n.set)
      return n.set.call(r.draft_, t), !0;
    if (!r.modified_) {
      const o = Wl(uo(r), e), a = o == null ? void 0 : o[vr];
      if (a && a.base_ === t)
        return r.copy_[e] = t, r.assigned_[e] = !1, !0;
      if (w1(t, o) && (t !== void 0 || Eu(r.base_, e)))
        return !0;
      jl(r), Tu(r);
    }
    return r.copy_[e] === t && // special case: handle new props with value 'undefined'
    (t !== void 0 || e in r.copy_) || // special case: NaN
    Number.isNaN(t) && Number.isNaN(r.copy_[e]) || (r.copy_[e] = t, r.assigned_[e] = !0), !0;
  },
  deleteProperty(r, e) {
    return Wl(r.base_, e) !== void 0 || e in r.base_ ? (r.assigned_[e] = !1, jl(r), Tu(r)) : delete r.assigned_[e], r.copy_ && delete r.copy_[e], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(r, e) {
    const t = uo(r), n = Reflect.getOwnPropertyDescriptor(t, e);
    return n && {
      writable: !0,
      configurable: r.type_ !== 1 || e !== "length",
      enumerable: n.enumerable,
      value: t[e]
    };
  },
  defineProperty() {
    $r(11);
  },
  getPrototypeOf(r) {
    return li(r.base_);
  },
  setPrototypeOf() {
    $r(12);
  }
}, oa = {};
ra(Od, (r, e) => {
  oa[r] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
});
oa.deleteProperty = function(r, e) {
  return oa.set.call(this, r, e, void 0);
};
oa.set = function(r, e, t) {
  return Od.set.call(this, r[0], e, t, r[0]);
};
function Wl(r, e) {
  const t = r[vr];
  return (t ? uo(t) : r)[e];
}
function I1(r, e, t) {
  var o;
  const n = Wv(e, t);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = n.get) == null ? void 0 : o.call(r.draft_)
  ) : void 0;
}
function Wv(r, e) {
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
function jl(r) {
  r.copy_ || (r.copy_ = bu(
    r.base_,
    r.scope_.immer_.useStrictShallowCopy_
  ));
}
var A1 = class {
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
      typeof t != "function" && $r(6), n !== void 0 && typeof n != "function" && $r(7);
      let o;
      if (An(e)) {
        const a = Ag(this), s = Iu(e, void 0);
        let l = !0;
        try {
          o = t(s), l = !1;
        } finally {
          l ? _u(a) : Su(a);
        }
        return Ig(a, n), Rg(o, a);
      } else if (!e || typeof e != "object") {
        if (o = t(e), o === void 0 && (o = e), o === $v && (o = void 0), this.autoFreeze_ && Nd(o, !0), n) {
          const a = [], s = [];
          _o("Patches").generateReplacementPatches_(e, o, a, s), n(a, s);
        }
        return o;
      } else
        $r(1, e);
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
    An(r) || $r(8), Wn(r) && (r = jv(r));
    const e = Ag(this), t = Iu(r, void 0);
    return t[vr].isManual_ = !0, Su(e), t;
  }
  finishDraft(r, e) {
    const t = r && r[vr];
    (!t || !t.isManual_) && $r(9);
    const { scope_: n } = t;
    return Ig(n, e), Rg(void 0, n);
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
    const n = _o("Patches").applyPatches_;
    return Wn(r) ? n(r, e) : this.produce(
      r,
      (o) => n(o, e)
    );
  }
};
function Iu(r, e) {
  const t = uc(r) ? _o("MapSet").proxyMap_(r, e) : dc(r) ? _o("MapSet").proxySet_(r, e) : T1(r, e);
  return (e ? e.scope_ : Vv()).drafts_.push(t), t;
}
function jv(r) {
  return Wn(r) || $r(10, r), Yv(r);
}
function Yv(r) {
  if (!An(r) || fc(r))
    return r;
  const e = r[vr];
  let t;
  if (e) {
    if (!e.modified_)
      return e.base_;
    e.finalized_ = !0, t = bu(r, e.scope_.immer_.useStrictShallowCopy_);
  } else
    t = bu(r, !0);
  return ra(t, (n, o) => {
    zv(t, n, Yv(o));
  }), e && (e.finalized_ = !1), t;
}
var yr = new A1(), Qv = yr.produce;
yr.produceWithPatches.bind(
  yr
);
yr.setAutoFreeze.bind(yr);
yr.setUseStrictShallowCopy.bind(yr);
yr.applyPatches.bind(yr);
yr.createDraft.bind(yr);
yr.finishDraft.bind(yr);
function R1(r, e = `expected a function, instead received ${typeof r}`) {
  if (typeof r != "function")
    throw new TypeError(e);
}
function k1(r, e = `expected an object, instead received ${typeof r}`) {
  if (typeof r != "object")
    throw new TypeError(e);
}
function P1(r, e = "expected all items to be functions, instead received the following types: ") {
  if (!r.every((t) => typeof t == "function")) {
    const t = r.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${e}[${t}]`);
  }
}
var Pg = (r) => Array.isArray(r) ? r : [r];
function N1(r) {
  const e = Array.isArray(r[0]) ? r[0] : r;
  return P1(
    e,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), e;
}
function O1(r, e) {
  const t = [], { length: n } = r;
  for (let o = 0; o < n; o++)
    t.push(r[o].apply(null, e));
  return t;
}
var M1 = class {
  constructor(r) {
    this.value = r;
  }
  deref() {
    return this.value;
  }
}, x1 = typeof WeakRef < "u" ? WeakRef : M1, L1 = 0, Ng = 1;
function hs() {
  return {
    s: L1,
    v: void 0,
    o: null,
    p: null
  };
}
function Md(r, e = {}) {
  let t = hs();
  const { resultEqualityCheck: n } = e;
  let o, a = 0;
  function s() {
    var p;
    let l = t;
    const { length: u } = arguments;
    for (let m = 0, v = u; m < v; m++) {
      const C = arguments[m];
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
    if (l.s === Ng ? h = l.v : (h = r.apply(null, arguments), a++), f.s = Ng, n) {
      const m = ((p = o == null ? void 0 : o.deref) == null ? void 0 : p.call(o)) ?? o;
      m != null && n(m, h) && (h = m, a !== 0 && a--), o = typeof h == "object" && h !== null || typeof h == "function" ? new x1(h) : h;
    }
    return f.v = h, h;
  }
  return s.clearCache = () => {
    t = hs(), s.resetResultsCount();
  }, s.resultsCount = () => a, s.resetResultsCount = () => {
    a = 0;
  }, s;
}
function Jv(r, ...e) {
  const t = typeof r == "function" ? {
    memoize: r,
    memoizeOptions: e
  } : r, n = (...o) => {
    let a = 0, s = 0, l, u = {}, f = o.pop();
    typeof f == "object" && (u = f, f = o.pop()), R1(
      f,
      `createSelector expects an output function after the inputs, but received: [${typeof f}]`
    );
    const h = {
      ...t,
      ...u
    }, {
      memoize: p,
      memoizeOptions: m = [],
      argsMemoize: v = Md,
      argsMemoizeOptions: C = [],
      devModeChecks: E = {}
    } = h, _ = Pg(m), R = Pg(C), A = N1(o), S = p(function() {
      return a++, f.apply(
        null,
        arguments
      );
    }, ..._), I = v(function() {
      s++;
      const L = O1(
        A,
        arguments
      );
      return l = S.apply(null, L), l;
    }, ...R);
    return Object.assign(I, {
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
var pi = /* @__PURE__ */ Jv(Md), D1 = Object.assign(
  (r, e = pi) => {
    k1(
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
  { withTypes: () => D1 }
);
function Xv(r) {
  return ({ dispatch: t, getState: n }) => (o) => (a) => typeof a == "function" ? a(t, n, r) : o(a);
}
var U1 = Xv(), F1 = Xv, H1 = (...r) => {
  const e = Jv(...r), t = Object.assign((...n) => {
    const o = e(...n), a = (s, ...l) => o(Wn(s) ? jv(s) : s, ...l);
    return Object.assign(a, o), a;
  }, {
    withTypes: () => t
  });
  return t;
};
H1(Md);
var B1 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? $s : $s.apply(null, arguments);
}, K1 = (r) => r && typeof r.match == "function";
function Vr(r, e) {
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
  return t.toString = () => `${r}`, t.type = r, t.match = (n) => y1(n) && n.type === r, t;
}
var Zv = class Bi extends Array {
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
function Og(r) {
  return An(r) ? Qv(r, () => {
  }) : r;
}
function Mg(r, e, t) {
  if (r.has(e)) {
    let o = r.get(e);
    return t.update && (o = t.update(o, e, r), r.set(e, o)), o;
  }
  if (!t.insert)
    throw new Error(nr(10));
  const n = t.insert(e, r);
  return r.set(e, n), n;
}
function q1(r) {
  return typeof r == "boolean";
}
var $1 = () => function(e) {
  const {
    thunk: t = !0,
    immutableCheck: n = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: a = !0
  } = e ?? {};
  let s = new Zv();
  return t && (q1(t) ? s.push(U1) : s.push(F1(t.extraArgument))), s;
}, G1 = "RTK_autoBatch", ey = (r) => (e) => {
  setTimeout(e, r);
}, z1 = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : ey(10), V1 = (r = {
  type: "raf"
}) => (e) => (...t) => {
  const n = e(...t);
  let o = !0, a = !1, s = !1;
  const l = /* @__PURE__ */ new Set(), u = r.type === "tick" ? queueMicrotask : r.type === "raf" ? z1 : r.type === "callback" ? r.queueNotification : ey(r.timeout), f = () => {
    s = !1, a && (a = !1, l.forEach((h) => h()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(h) {
      const p = () => o && h(), m = n.subscribe(p);
      return l.add(h), () => {
        m(), l.delete(h);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(h) {
      var p;
      try {
        return o = !((p = h == null ? void 0 : h.meta) != null && p[G1]), a = !o, a && (s || (s = !0, u(f))), n.dispatch(h);
      } finally {
        o = !0;
      }
    }
  });
}, W1 = (r) => function(t) {
  const {
    autoBatch: n = !0
  } = t ?? {};
  let o = new Zv(r);
  return n && o.push(V1(typeof n == "object" ? n : void 0)), o;
}, j1 = !0;
function Y1(r) {
  const e = $1(), {
    reducer: t = void 0,
    middleware: n,
    devTools: o = !0,
    preloadedState: a = void 0,
    enhancers: s = void 0
  } = r || {};
  let l;
  if (typeof t == "function")
    l = t;
  else if (Pd(t))
    l = m1(t);
  else
    throw new Error(nr(1));
  let u;
  typeof n == "function" ? u = n(e) : u = e();
  let f = $s;
  o && (f = B1({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !j1,
    ...typeof o == "object" && o
  }));
  const h = v1(...u), p = W1(h);
  let m = typeof s == "function" ? s(p) : p();
  const v = f(...m);
  return qv(l, a, v);
}
function ty(r) {
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
function Q1(r) {
  return typeof r == "function";
}
function J1(r, e) {
  let [t, n, o] = ty(e), a;
  if (Q1(r))
    a = () => Og(r());
  else {
    const l = Og(r);
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
        if (Wn(h)) {
          const v = p(h, u);
          return v === void 0 ? h : v;
        } else {
          if (An(h))
            return Qv(h, (m) => p(m, u));
          {
            const m = p(h, u);
            if (m === void 0) {
              if (h === null)
                return h;
              throw new Error(nr(9));
            }
            return m;
          }
        }
      return h;
    }, l);
  }
  return s.getInitialState = a, s;
}
var X1 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", ry = (r = 21) => {
  let e = "", t = r;
  for (; t--; )
    e += X1[Math.random() * 64 | 0];
  return e;
}, Z1 = (r, e) => K1(r) ? r.match(e) : r(e);
function eO(...r) {
  return (e) => r.some((t) => Z1(t, e));
}
var tO = ["name", "message", "stack", "code"], Yl = class {
  constructor(r, e) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    zt(this, "_type");
    this.payload = r, this.meta = e;
  }
}, xg = class {
  constructor(r, e) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    zt(this, "_type");
    this.payload = r, this.meta = e;
  }
}, rO = (r) => {
  if (typeof r == "object" && r !== null) {
    const e = {};
    for (const t of tO)
      typeof r[t] == "string" && (e[t] = r[t]);
    return e;
  }
  return {
    message: String(r)
  };
}, Ao = /* @__PURE__ */ (() => {
  function r(e, t, n) {
    const o = Vr(e + "/fulfilled", (u, f, h, p) => ({
      payload: u,
      meta: {
        ...p || {},
        arg: h,
        requestId: f,
        requestStatus: "fulfilled"
      }
    })), a = Vr(e + "/pending", (u, f, h) => ({
      payload: void 0,
      meta: {
        ...h || {},
        arg: f,
        requestId: u,
        requestStatus: "pending"
      }
    })), s = Vr(e + "/rejected", (u, f, h, p, m) => ({
      payload: p,
      error: (n && n.serializeError || rO)(u || "Rejected"),
      meta: {
        ...m || {},
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
        const m = n != null && n.idGenerator ? n.idGenerator(u) : ry(), v = new AbortController();
        let C, E;
        function _(A) {
          E = A, v.abort();
        }
        const R = async function() {
          var I, O;
          let A;
          try {
            let L = (I = n == null ? void 0 : n.condition) == null ? void 0 : I.call(n, u, {
              getState: h,
              extra: p
            });
            if (oO(L) && (L = await L), L === !1 || v.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const q = new Promise((U, Y) => {
              C = () => {
                Y({
                  name: "AbortError",
                  message: E || "Aborted"
                });
              }, v.signal.addEventListener("abort", C);
            });
            f(a(m, u, (O = n == null ? void 0 : n.getPendingMeta) == null ? void 0 : O.call(n, {
              requestId: m,
              arg: u
            }, {
              getState: h,
              extra: p
            }))), A = await Promise.race([q, Promise.resolve(t(u, {
              dispatch: f,
              getState: h,
              extra: p,
              requestId: m,
              signal: v.signal,
              abort: _,
              rejectWithValue: (U, Y) => new Yl(U, Y),
              fulfillWithValue: (U, Y) => new xg(U, Y)
            })).then((U) => {
              if (U instanceof Yl)
                throw U;
              return U instanceof xg ? o(U.payload, m, u, U.meta) : o(U, m, u);
            })]);
          } catch (L) {
            A = L instanceof Yl ? s(null, m, u, L.payload, L.meta) : s(L, m, u);
          } finally {
            C && v.signal.removeEventListener("abort", C);
          }
          return n && !n.dispatchConditionRejection && s.match(A) && A.meta.condition || f(A), A;
        }();
        return Object.assign(R, {
          abort: _,
          requestId: m,
          arg: u,
          unwrap() {
            return R.then(nO);
          }
        });
      };
    }
    return Object.assign(l, {
      pending: a,
      rejected: s,
      fulfilled: o,
      settled: eO(s, o),
      typePrefix: e
    });
  }
  return r.withTypes = () => r, r;
})();
function nO(r) {
  if (r.meta && r.meta.rejectedWithValue)
    throw r.payload;
  if (r.error)
    throw r.error;
  return r.payload;
}
function oO(r) {
  return r !== null && typeof r == "object" && typeof r.then == "function";
}
var iO = Symbol.for("rtk-slice-createasyncthunk");
function aO(r, e) {
  return `${r}/${e}`;
}
function sO({
  creators: r
} = {}) {
  var t;
  const e = (t = r == null ? void 0 : r.asyncThunk) == null ? void 0 : t[iO];
  return function(o) {
    const {
      name: a,
      reducerPath: s = a
    } = o;
    if (!a)
      throw new Error(nr(11));
    typeof process < "u";
    const l = (typeof o.reducers == "function" ? o.reducers(lO()) : o.reducers) || {}, u = Object.keys(l), f = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, h = {
      addCase(S, I) {
        const O = typeof S == "string" ? S : S.type;
        if (!O)
          throw new Error(nr(12));
        if (O in f.sliceCaseReducersByType)
          throw new Error(nr(13));
        return f.sliceCaseReducersByType[O] = I, h;
      },
      addMatcher(S, I) {
        return f.sliceMatchers.push({
          matcher: S,
          reducer: I
        }), h;
      },
      exposeAction(S, I) {
        return f.actionCreators[S] = I, h;
      },
      exposeCaseReducer(S, I) {
        return f.sliceCaseReducersByName[S] = I, h;
      }
    };
    u.forEach((S) => {
      const I = l[S], O = {
        reducerName: S,
        type: aO(a, S),
        createNotation: typeof o.reducers == "function"
      };
      dO(I) ? hO(O, I, h, e) : uO(O, I, h);
    });
    function p() {
      const [S = {}, I = [], O = void 0] = typeof o.extraReducers == "function" ? ty(o.extraReducers) : [o.extraReducers], L = {
        ...S,
        ...f.sliceCaseReducersByType
      };
      return J1(o.initialState, (q) => {
        for (let U in L)
          q.addCase(U, L[U]);
        for (let U of f.sliceMatchers)
          q.addMatcher(U.matcher, U.reducer);
        for (let U of I)
          q.addMatcher(U.matcher, U.reducer);
        O && q.addDefaultCase(O);
      });
    }
    const m = (S) => S, v = /* @__PURE__ */ new Map();
    let C;
    function E(S, I) {
      return C || (C = p()), C(S, I);
    }
    function _() {
      return C || (C = p()), C.getInitialState();
    }
    function R(S, I = !1) {
      function O(q) {
        let U = q[S];
        return typeof U > "u" && I && (U = _()), U;
      }
      function L(q = m) {
        const U = Mg(v, I, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Mg(U, q, {
          insert: () => {
            const Y = {};
            for (const [Q, de] of Object.entries(o.selectors ?? {}))
              Y[Q] = cO(de, q, _, I);
            return Y;
          }
        });
      }
      return {
        reducerPath: S,
        getSelectors: L,
        get selectors() {
          return L(O);
        },
        selectSlice: O
      };
    }
    const A = {
      name: a,
      reducer: E,
      actions: f.actionCreators,
      caseReducers: f.sliceCaseReducersByName,
      getInitialState: _,
      ...R(s),
      injectInto(S, {
        reducerPath: I,
        ...O
      } = {}) {
        const L = I ?? s;
        return S.inject({
          reducerPath: L,
          reducer: E
        }, O), {
          ...A,
          ...R(L, !0)
        };
      }
    };
    return A;
  };
}
function cO(r, e, t, n) {
  function o(a, ...s) {
    let l = e(a);
    return typeof l > "u" && n && (l = t()), r(l, ...s);
  }
  return o.unwrapped = r, o;
}
var gi = sO();
function lO() {
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
function uO({
  type: r,
  reducerName: e,
  createNotation: t
}, n, o) {
  let a, s;
  if ("reducer" in n) {
    if (t && !fO(n))
      throw new Error(nr(17));
    a = n.reducer, s = n.prepare;
  } else
    a = n;
  o.addCase(r, a).exposeCaseReducer(e, a).exposeAction(e, s ? Vr(r, s) : Vr(r));
}
function dO(r) {
  return r._reducerDefinitionType === "asyncThunk";
}
function fO(r) {
  return r._reducerDefinitionType === "reducerWithPrepare";
}
function hO({
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
var pO = (r, e) => {
  if (typeof r != "function")
    throw new Error(nr(32));
}, xd = "listenerMiddleware", gO = (r) => {
  let {
    type: e,
    actionCreator: t,
    matcher: n,
    predicate: o,
    effect: a
  } = r;
  if (e)
    o = Vr(e).match;
  else if (t)
    e = t.type, o = t.match;
  else if (n)
    o = n;
  else if (!o)
    throw new Error(nr(21));
  return pO(a), {
    predicate: o,
    type: e,
    effect: a
  };
}, mO = Object.assign((r) => {
  const {
    type: e,
    predicate: t,
    effect: n
  } = gO(r);
  return {
    id: ry(),
    effect: n,
    type: e,
    predicate: t,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(nr(22));
    }
  };
}, {
  withTypes: () => mO
}), vO = Object.assign(Vr(`${xd}/add`), {
  withTypes: () => vO
});
Vr(`${xd}/removeAll`);
var yO = Object.assign(Vr(`${xd}/remove`), {
  withTypes: () => yO
});
function nr(r) {
  return `Minified Redux Toolkit error #${r}; visit https://redux-toolkit.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `;
}
const CO = {
  bsddApiEnvironment: null,
  mainDictionary: null,
  ifcDictionary: null,
  filterDictionaries: [],
  language: "en-GB",
  includeTestDictionaries: null
}, Lg = (r, e) => {
  r.language = e.payload, bt.changeLanguage(e.payload);
}, wO = Vr("settings/setSettings"), ny = gi({
  name: "settings",
  initialState: CO,
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
    setLanguage: Lg,
    setIncludeTestDictionaries: (r, e) => {
      r.includeTestDictionaries = e.payload;
    }
  },
  extraReducers: (r) => {
    r.addCase(
      wO,
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
        JSON.stringify(e.bsddApiEnvironment) !== JSON.stringify(t) && (e.bsddApiEnvironment = t), JSON.stringify(e.mainDictionary) !== JSON.stringify(n) && (e.mainDictionary = n), JSON.stringify(e.ifcDictionary) !== JSON.stringify(o) && (e.ifcDictionary = o), JSON.stringify(e.filterDictionaries) !== JSON.stringify(a) && (e.filterDictionaries = a), JSON.stringify(e.language) !== JSON.stringify(s) && Lg(e, { payload: s, type: "setLanguage" }), JSON.stringify(e.includeTestDictionaries) !== JSON.stringify(l) && (e.includeTestDictionaries = l);
      }
    );
  }
}), EO = (r) => {
  const e = r.settings.bsddApiEnvironment;
  return e !== null ? kd[e] : null;
}, bO = pi(
  (r) => r.settings.mainDictionary,
  (r) => r.settings.ifcDictionary,
  (r) => r.settings.filterDictionaries,
  (r, e, t) => {
    const n = [r, e, ...t].filter(Boolean), o = new Map(n.map((a) => [a.ifcClassification.location, a]));
    return Array.from(o.values());
  }
);
pi(
  bO,
  (r) => r.map((e) => e.ifcClassification.location)
);
ny.actions;
ny.reducer;
const Au = 500, _O = 500;
let Zo = null, Ql = {};
const Dg = {
  classes: {},
  dictionaries: {},
  dictionaryClasses: {},
  loaded: !1
}, SO = (r) => {
  const e = EO(r);
  return e && (!Zo || Zo.baseUrl !== e) && (Zo = new ci(e)), Zo;
}, Ug = Ao("bsdd/fetchDictionaries", ({ bsddApiEnvironment: r, includeTestDictionaries: e }, t) => {
  if (console.log("fetchDictionaries", r), !r)
    return t.rejectWithValue("No bsddApiEnvironment provided");
  const n = new ci(r), o = _O;
  let a = 0;
  const s = [];
  return new Promise((l, u) => {
    function f() {
      n.api.dictionaryV1List({ IncludeTestDictionaries: e, Limit: o, Offset: a }).then((h) => {
        h.ok || u(new Error(`HTTP error! status: ${h.status}`));
        const { data: { dictionaries: p, totalCount: m } = {} } = h;
        if (p && typeof m < "u")
          if (s.push(...p), a += o, s.length >= m) {
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
async function Fg(r, e, t) {
  const n = await r.api.dictionaryV1ClassesList({
    Uri: e,
    UseNestedClasses: !1,
    Limit: Au,
    Offset: t
    // languageCode: languageCode || undefined,
  });
  if (!n.ok)
    throw new Error(`HTTP error! status: ${n.status}`);
  return n.data;
}
const oy = Ao(
  "bsdd/fetchDictionaryClasses",
  async (r, { getState: e, dispatch: t }) => {
    const n = e();
    if (n.bsdd.dictionaryClasses[r])
      return n.bsdd.dictionaryClasses[r];
    if (Ql[r])
      return await Ql[r];
    const o = (async () => {
      const a = SO(e());
      if (!a)
        throw new Error("BsddApi is not initialized");
      const s = [];
      let l = 0;
      const u = await Fg(a, r, l), f = u.classesTotalCount;
      if (f == null)
        throw new Error("Total count is null or undefined");
      s.push(...u.classes ?? []);
      const h = [];
      for (l = Au; l < f; l += Au)
        h.push(
          Fg(a, r, l).then((p) => {
            s.push(...p.classes ?? []);
          })
        );
      return await Promise.all(h), t({ type: "bsdd/addDictionaryClasses", payload: { uri: r, classes: s } }), s;
    })();
    return Ql[r] = o, o;
  }
), iy = gi({
  name: "bsdd",
  initialState: Dg,
  reducers: {
    resetState: () => Dg,
    addClass: (r, e) => {
      r.classes[e.payload.uri] = e.payload.data;
    },
    addDictionaryClasses: (r, e) => {
      r.dictionaryClasses[e.payload.uri] = e.payload.data;
    }
  },
  extraReducers: (r) => {
    r.addCase(Ug.pending, (e) => {
      e.loaded = !1;
    }).addCase(Ug.fulfilled, (e, t) => {
      console.log("fetch dictionaries fulfilled", t.payload), e.dictionaries = t.payload, e.loaded = !0;
    }).addCase(oy.rejected, (e, t) => {
      console.error("fetch dictionary classes failed", t.error), e.loaded = !0;
    });
  }
});
Ao("bsdd/fetchClass", async (r, { getState: e, dispatch: t }) => {
  const n = e();
  if (n.bsdd.classes[r])
    return n.bsdd.classes[r];
  if (!Zo)
    throw new Error("BsddApi is not initialized");
  const o = await Zo.api.classV1List({
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
const TO = (r, e) => r.bsdd.dictionaries[e], IO = (r, e) => r.bsdd.dictionaryClasses[e];
iy.actions;
iy.reducer;
const AO = async (r, e, t) => {
  if (!(r != null && r.location))
    return null;
  const n = IO(e, r.location);
  if (n)
    return n;
  const o = await t(oy(r.location));
  return o.payload ? o.payload : (console.error("Failed to fetch dictionary classes"), null);
};
function RO(r, e) {
  return r.identification ? e.find((t) => t.code === r.identification) : e.find((t) => t.name === r.name);
}
function Vo(r, e) {
  return console.error(r), { ifcClassificationReference: e, validationState: "invalid", message: r };
}
async function kO(r, e, t) {
  if (r.location)
    return { ifcClassificationReference: r, validationState: "valid", message: "Location is already set" };
  if (!r.referencedSource || !r.referencedSource.location)
    return Vo(
      "Cannot patch IfcClassificationReference: missing referencedSource or its location",
      r
    );
  const n = await AO(r.referencedSource, t, e);
  if (!n)
    return Vo("Failed to fetch classes for the referencedSource location", r);
  const o = RO(r, n);
  if (!o)
    return Vo(
      "Failed to find a match for the IfcClassificationReference code or name in the classes",
      r
    );
  if (!o.uri)
    return Vo("Failed to find a URI for the matched class", r);
  const { uri: a, code: s, name: l } = o, u = {
    ...r,
    location: a ?? void 0,
    identification: s ?? void 0,
    name: l ?? void 0
  };
  if (!u.referencedSource || !u.referencedSource.location)
    return Vo("referencedSource or its location is missing", u);
  const f = TO(t, u.referencedSource.location);
  return f ? (u.referencedSource = Bv(f), {
    ifcClassificationReference: u,
    validationState: "fixed",
    message: null
  }) : Vo("Failed to find a matching dictionary for the matched class", u);
}
const PO = {
  ifcEntities: []
}, ay = gi({
  name: "ifcData",
  initialState: PO,
  reducers: {
    setIfcData: (r, e) => {
      r.ifcEntities = e.payload;
    }
  }
}), { setIfcData: sy } = ay.actions;
Ao(
  "ifcData/setValidated",
  async (r, { dispatch: e, getState: t }) => {
    const n = t(), o = await Promise.all(
      r.map(async (a) => {
        const { hasAssociations: s } = a;
        if (s) {
          const l = (await Promise.all(
            s.map(async (u) => {
              if (u.type === "IfcClassificationReference") {
                const { validationState: f, ifcClassificationReference: h, message: p } = await kO(u, e, n);
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
    e(sy(o));
  }
);
const NO = (r) => r.ifcData.ifcEntities, cy = pi(NO, (r) => r[0]), OO = ay.reducer, MO = {
  bsddApiEnvironment: null,
  mainDictionary: null,
  ifcDictionary: null,
  filterDictionaries: [],
  language: "en-GB",
  includeTestDictionaries: null
}, Hg = (r, e) => {
  r.language = e.payload, bt.changeLanguage(e.payload);
}, ly = Vr("settings/setSettings"), uy = gi({
  name: "settings",
  initialState: MO,
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
    setLanguage: Hg,
    setIncludeTestDictionaries: (r, e) => {
      r.includeTestDictionaries = e.payload;
    }
  },
  extraReducers: (r) => {
    r.addCase(
      ly,
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
        JSON.stringify(e.bsddApiEnvironment) !== JSON.stringify(t) && (e.bsddApiEnvironment = t), JSON.stringify(e.mainDictionary) !== JSON.stringify(n) && (e.mainDictionary = n), JSON.stringify(e.ifcDictionary) !== JSON.stringify(o) && (e.ifcDictionary = o), JSON.stringify(e.filterDictionaries) !== JSON.stringify(a) && (e.filterDictionaries = a), JSON.stringify(e.language) !== JSON.stringify(s) && Hg(e, { payload: s, type: "setLanguage" }), JSON.stringify(e.includeTestDictionaries) !== JSON.stringify(l) && (e.includeTestDictionaries = l);
      }
    );
  }
}), dy = (r) => {
  const e = r.settings.bsddApiEnvironment;
  return e !== null ? kd[e] : null;
}, Ld = pi(
  (r) => r.settings.mainDictionary,
  (r) => r.settings.ifcDictionary,
  (r) => r.settings.filterDictionaries,
  (r, e, t) => {
    const n = [r, e, ...t].filter(Boolean), o = new Map(n.map((a) => [a.ifcClassification.location, a]));
    return Array.from(o.values());
  }
), xO = pi(
  Ld,
  (r) => r.map((e) => e.ifcClassification.location)
), fy = (r) => r.settings.mainDictionary;
uy.actions;
const LO = uy.reducer, Bg = (r) => Kv.groupBy(r, "dictionaryUri");
async function DO(r, e, t) {
  try {
    const n = await r.api.classV1List({ Uri: e, IncludeClassRelations: !0 }, t);
    if (n.status !== 200)
      throw new Error(`API request failed with status ${n.status}`);
    return n.data;
  } catch (n) {
    return console.error("Error fetching classification:", n), null;
  }
}
function UO(r, e) {
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
function FO({ api: r, activeClassificationUri: e, setClassifications: t, domains: n }) {
  const o = $n(Ld), a = $n(xO), s = $n(cy), [l, u] = ge(0), [f, h] = ge({}), [p, m] = ge([]), [v, C] = ge(
    () => Bg(p)
  ), [E, _] = ge({}), R = ze(
    (S) => {
      const I = {
        headers: { Accept: "text/plain" }
      }, O = new Promise(function(L) {
        const q = {
          Uri: S,
          IncludeClassRelations: !0,
          IncludeClassProperties: !0
        };
        L(
          r.api.classV1List(q, I).then((U) => U.status !== 200 ? (console.error(`API request failed with status ${U.status}`), null) : U.data).catch((U) => (console.error("Error fetching classification:", U), null))
        );
      });
      return h((L) => ({
        ...L,
        classificationUri: O
      })), O;
    },
    [r.api]
  );
  me(() => {
    C(Bg(p));
  }, [p]), me(() => {
    if (u(0), e) {
      const S = {};
      e && (S[e] = R(e)), h(S);
    }
  }, [e, R]), me(() => {
    const S = {
      headers: { Accept: "text/plain" }
    };
    u(Object.keys(f).length), l !== Object.keys(f).length && Promise.allSettled(Object.values(f)).then(function(I) {
      const O = I.map((Y) => Y.status === "fulfilled" ? Y.value : null).filter((Y) => Y !== null);
      I.map(async (Y) => {
        if (Y.status === "fulfilled") {
          const Q = Y.value;
          if (Q && Q.classRelations) {
            const de = {
              ...f
            };
            Q.classRelations.forEach((ee) => {
              ee.relatedClassUri in Object.keys(f) || (de[ee.relatedClassUri] = DO(
                r,
                ee.relatedClassUri,
                S
              ));
            }), h(de);
          }
        }
      });
      const L = O.filter(
        (Y) => Y.dictionaryUri && a.includes(Y.dictionaryUri)
      ), q = Object.keys(E).filter((Y) => a.includes(Y)).reduce((Y, Q) => (Y[Q] = E[Q], Y), {}), U = Kv.groupBy(L, "dictionaryUri");
      Object.entries(U).forEach(([Y, Q]) => {
        Q.some((de) => de.uri === q[Y]) || (q[Y] = Q[0].uri);
      }), _(q), t(L), m(L);
    });
  }, [
    f,
    l,
    E,
    r,
    t,
    o,
    a
  ]), me(() => {
    t(
      Object.values(E).map((S) => p.find((I) => I.uri === S)).filter((S) => S !== void 0)
    );
  }, [E, p, t]), me(() => {
    const S = {};
    a.forEach((I) => {
      const O = UO(I, s);
      O && (S[I] = O.location || "");
    }), _(S);
  }, [a, s]);
  const A = ze(
    (S) => (I) => {
      if (!I)
        return;
      if (!p.find(
        (q) => q.uri === I
      )) {
        console.log(`Selected classification '${I}' not found`);
        return;
      }
      const L = { ...E, [S]: I };
      _(L);
    },
    [p, E]
  );
  return /* @__PURE__ */ Te.jsx(Te.Fragment, { children: Object.entries(v).map(([S, I]) => /* @__PURE__ */ Te.jsx(
    cc,
    {
      mb: "sm",
      label: n[S] ? n[S].name : "",
      data: I.map((O) => ({
        value: O.uri,
        label: O.name
      })),
      value: E[S],
      readOnly: I.length === 1,
      variant: I.length === 1 ? "filled" : "default",
      onChange: (O) => A(S)(O)
    },
    S
  )) });
}
function HO(r) {
  const { label: e, value: t, setValue: n, disabled: o } = r, [a, s] = ge(), [l, u] = ge(void 0), f = (h) => {
    h.target.indeterminate = !1, n(h.target.checked);
  };
  return me(() => {
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
function BO({ propertySet: r, property: e, propertyIndex: t, propertySets: n, setPropertySets: o }) {
  const [a, s] = ge(), l = e, u = r, f = n, h = o;
  return me(() => {
    var p, m, v;
    switch (l.type) {
      case "IfcPropertySingleValue": {
        l.nominalValue.type === "IfcBoolean" ? s(
          /* @__PURE__ */ Te.jsx(
            HO,
            {
              label: l.name,
              disabled: !1,
              value: l.nominalValue.value,
              setValue: (C) => {
                const E = { ...f }, _ = { ...u };
                if (_.name) {
                  const R = { ...l };
                  R.nominalValue.value = C;
                  const A = _.hasProperties.findIndex(
                    (S) => S.name === l.name
                  );
                  A !== -1 && (_.hasProperties[A] = R, E[_.name] = _, h(E));
                }
              }
            }
          )
        ) : s(
          /* @__PURE__ */ Te.jsx(
            yo,
            {
              label: l.name,
              placeholder: l.nominalValue.value,
              value: l.nominalValue.value,
              onChange: (C) => {
                const E = { ...f }, _ = { ...u };
                if (_.name) {
                  const R = { ...l };
                  R.nominalValue.value = C.target.value;
                  const A = _.hasProperties.findIndex(
                    (S) => S.name === l.name
                  );
                  A != -1 && (_.hasProperties[A] = R, E[_.name] = _, h(E));
                }
              }
            }
          )
        );
        break;
      }
      case "IfcPropertyEnumeratedValue": {
        const C = (m = (p = l.enumerationValues) == null ? void 0 : p[0]) == null ? void 0 : m.value, E = ((v = l.enumerationReference) == null ? void 0 : v.enumerationValues) || [];
        s(
          /* @__PURE__ */ Te.jsx(
            cc,
            {
              label: l.name,
              value: C,
              onChange: (_) => {
                const R = E.find((O) => O.value === _), A = R ? [R] : [], S = { ...f }, I = { ...u };
                if (I.name) {
                  const O = { ...l };
                  O.enumerationValues = A;
                  const L = I.hasProperties.findIndex(
                    (q) => q.name === l.name
                  );
                  L !== -1 && (I.hasProperties[L] = O, S[I.name] = I, h(S));
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
        s(/* @__PURE__ */ Te.jsx(yo, { placeholder: l.name, value: "{ifcProperty.nominalValue}" }));
        break;
      }
    }
  }, [l, u, s, f, h]), a;
}
const KO = {
  Boolean: "IfcBoolean",
  Character: "IfcText",
  Integer: "IfcInteger",
  Real: "IfcReal",
  String: "IfcText",
  Time: "IfcDateTime"
};
function ia(r, e) {
  const t = r && KO[r] || "default";
  let n;
  return r === "Boolean" && typeof e == "string" ? e.toUpperCase() === "TRUE" ? n = !0 : e.toUpperCase() === "FALSE" ? n = !1 : n = void 0 : n = e, {
    type: t,
    value: n
  };
}
function hy(r, e, t) {
  if (r && r.isDefinedBy) {
    let n = r.isDefinedBy.find((o) => o.name === e);
    if (n || (n = r.isDefinedBy.find((o) => o.name === "")), n)
      return n.hasProperties.find(
        (o) => o.name === t
      );
  }
}
function qO(r, e, t, n) {
  const o = hy(e, t, n);
  return o && "nominalValue" in o ? ia(r, o.nominalValue.value) : ia(r);
}
function $O(r, e, t, n, o) {
  const a = hy(e, t, n);
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
function GO(r, e, t, n) {
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
  const s = r.predefinedValue ? [ia(r.dataType, r.predefinedValue)] : $O(
    r.dataType,
    n,
    t,
    e,
    o
  );
  return s.length > 0 && (a.enumerationValues = s), a;
}
function zO(r, e, t, n) {
  const o = {
    type: "IfcPropertySingleValue",
    name: e
  };
  r.propertyUri && (o.specification = r.propertyUri);
  const a = r.predefinedValue ? ia(r.dataType, r.predefinedValue) : qO(r.dataType, n, t, e);
  return a !== null && (o.nominalValue = a), o;
}
function VO(r, e, t) {
  const { propertyCode: n } = r, o = n || "unknown";
  return r.allowedValues ? GO(r, o, e, t) : zO(r, o, e, t);
}
function WO(r) {
  Nu();
  const { classifications: e } = r, { propertySets: t } = r, { setPropertySets: n } = r, { recursiveMode: o } = r, a = $n(cy);
  return me(() => {
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
        }), s[p].hasProperties.push(VO(h, p, a));
      });
    }), n(s);
  }, [e, n, o, a]), /* @__PURE__ */ Te.jsx("div", { children: Xl.toArray(
    Object.values(t).map((s, l) => /* @__PURE__ */ Te.jsx(Et, { children: /* @__PURE__ */ Te.jsxs(Et.Item, { value: s.name || l.toString(), children: [
      /* @__PURE__ */ Te.jsx(Et.Control, { children: s.name }),
      /* @__PURE__ */ Te.jsx(Et.Panel, { children: /* @__PURE__ */ Te.jsx(Rd, { children: Xl.toArray(
        s.hasProperties.map((u, f) => /* @__PURE__ */ Te.jsx(
          BO,
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
function jO({ api: r, defaultValue: e, setActiveClassificationUri: t }) {
  var A;
  const [n, o] = ge([]), a = $n(fy), s = Ke(null), l = Ke(e), [u, f] = ge(l.current), [h, p] = ge(((A = l.current) == null ? void 0 : A.label) || ""), [m] = KA(h, 300), [v, C] = ge(!1), E = ze((S) => {
    p(S);
  }, []), _ = ze(
    (S) => {
      const I = n.find((O) => O.value === S);
      I && (f(I), C(!0));
    },
    [n]
  ), R = ze(
    (S) => {
      S.key === "Enter" && n[0] && (p(n[0].label), _(n[0].value), s.current && s.current.blur());
    },
    [n, _, s]
  );
  return me(() => {
    e && !v && (p(e.label), f(e));
  }, [e, u, v]), me(() => {
    if (a) {
      const S = {
        headers: { Accept: "text/plain" }
      }, I = {
        SearchText: m,
        DictionaryUri: a.ifcClassification.location
      };
      r.api.searchInDictionaryV1List(I, S).then((O) => {
        var q;
        const L = O.data;
        if (L) {
          if (L.count) {
            const U = (q = L.dictionary) == null ? void 0 : q.classes;
            U && o(
              U.filter((Y) => Y.uri && Y.name).map(
                (Y) => ({
                  value: Y.uri,
                  label: Y.name
                })
              )
            );
          }
        } else
          console.error("API response data is null", O);
      }).catch((O) => {
        console.error("API request failed", O);
      });
    } else
      o([]);
  }, [r.api, m, a]), me(() => {
    s.current && s.current.focus();
  }, []), me(() => {
    u && t(u.value);
  }, [u, t]), /* @__PURE__ */ Te.jsx(
    Td,
    {
      data: n,
      placeholder: "bSDD search...",
      value: h,
      onChange: E,
      onOptionSubmit: _,
      onKeyDown: R,
      ref: s,
      style: { width: "100%" }
    }
  );
}
const YO = async (r, e) => {
  try {
    const t = await r.api.dictionaryV1List({
      Uri: e,
      IncludeTestDictionaries: !0
    }), { dictionaries: n } = t.data;
    if (n)
      return n.reduce((o, a) => a.uri ? { ...o, [a.uri]: a } : o, {});
  } catch (t) {
    console.error(`Failed to fetch dictionary ${e}:`, t);
  }
  return {};
};
function QO() {
  const { t: r } = Nu(), e = u1(), [t, n] = ge(), [o, a] = ge(), [s, l] = ge(), [u, f] = ge(!1), [h, p] = ge({}), [m, v] = ge([]), [C, E] = ge({}), [_, R] = ge(new ci(kd[l1])), A = $n(fy), [S, I] = ge(null), O = $n(dy), L = $n(Ld), q = ze((Q) => {
    var ee;
    const de = JSON.stringify(Q);
    (ee = window == null ? void 0 : window.bsddBridge) == null || ee.save(de).then((fe) => {
      console.log("Sent to Revit", fe);
    });
  }, []), U = ze(() => {
    var Q;
    (Q = window == null ? void 0 : window.bsddBridge) == null || Q.cancel();
  }, []), Y = (Q) => {
    I(Q);
  };
  return me(() => {
    S && (e(ly(S)), I(null));
  }, [S, e]), me(() => {
    O && R(new ci(O));
  }, [O]), me(() => {
  }, [e]), me(() => {
    (async () => {
      if (window != null && window.bsddBridge) {
        const de = await window.bsddBridge.loadSettings(), { settings: ee, ifcData: fe } = JSON.parse(de);
        if (e(sy(fe)), Y(ee), !fe || fe.length === 0)
          return;
        l(fe[0]);
      }
    })();
  }, []), me(() => {
    var de;
    if (!s || !A)
      return;
    const Q = A.ifcClassification.location;
    (de = s.hasAssociations) == null || de.forEach((ee) => {
      var fe;
      if (ee.type === "IfcClassificationReference") {
        const oe = ee;
        (fe = oe.referencedSource) != null && fe.location && oe.referencedSource.location === Q && (oe.location && n(oe.location), a({
          label: oe.name,
          value: oe.location
        }));
      }
    });
  }, [A, s]), me(() => {
    (async () => {
      const ee = (await Promise.all(
        L.map((fe) => YO(_, fe.ifcClassification.location))
      )).reduce((fe, oe) => ({ ...fe, ...oe }), {});
      p(ee);
    })();
  }, [_, L]), /* @__PURE__ */ Te.jsxs(Ad, { children: [
    /* @__PURE__ */ Te.jsx(yo, { type: "hidden", name: "ifcType", id: "ifcType", value: "" }),
    /* @__PURE__ */ Te.jsx(yo, { type: "hidden", name: "name", id: "name", value: "" }),
    /* @__PURE__ */ Te.jsx(yo, { type: "hidden", name: "material", id: "material", value: "" }),
    /* @__PURE__ */ Te.jsx(Fs, { mx: "md", mt: "lg", mb: "sm", children: /* @__PURE__ */ Te.jsx(jO, { api: _, defaultValue: o, setActiveClassificationUri: n }) }),
    /* @__PURE__ */ Te.jsxs(Et, { defaultValue: ["Classifications"], multiple: !0, children: [
      /* @__PURE__ */ Te.jsxs(Et.Item, { value: "Classifications", children: [
        /* @__PURE__ */ Te.jsx(Et.Control, { children: /* @__PURE__ */ Te.jsx(Hs, { order: 5, children: r("classificationsLabel") }) }),
        /* @__PURE__ */ Te.jsx(Et.Panel, { children: /* @__PURE__ */ Te.jsx(
          FO,
          {
            api: _,
            activeClassificationUri: t,
            setClassifications: v,
            domains: h
          }
        ) })
      ] }, "Classifications"),
      /* @__PURE__ */ Te.jsxs(Et.Item, { value: "Propertysets", children: [
        /* @__PURE__ */ Te.jsx(Et.Control, { children: /* @__PURE__ */ Te.jsx(Hs, { order: 5, children: r("propertysetsLabel") }) }),
        /* @__PURE__ */ Te.jsx(Et.Panel, { children: /* @__PURE__ */ Te.jsx(
          WO,
          {
            classifications: m,
            propertySets: C,
            setPropertySets: E,
            recursiveMode: u
          }
        ) })
      ] }, "Propertysets")
    ] }),
    /* @__PURE__ */ Te.jsxs(Fs, { my: "sm", justify: "center", children: [
      /* @__PURE__ */ Te.jsx(
        f1,
        {
          callback: q,
          domains: h,
          classifications: m,
          propertySetMap: C,
          ifcEntity: s
        }
      ),
      /* @__PURE__ */ Te.jsx(va, { fullWidth: !0, variant: "light", color: "gray", onClick: U, children: r("cancel") })
    ] })
  ] });
}
function JO() {
  const [r, e] = ge(null);
  return me(() => {
    const t = new EA(a1);
    e(t);
  }, []), r ? /* @__PURE__ */ Te.jsx(km, { theme: i1, children: /* @__PURE__ */ Te.jsx(QO, {}) }) : /* @__PURE__ */ Te.jsx("div", { children: "Loading..." });
}
const py = 500, XO = 500;
let ei = null, Jl = {};
const Kg = {
  classes: {},
  dictionaries: {},
  dictionaryClasses: {},
  loaded: !1
}, ZO = (r) => {
  const e = dy(r);
  return e && (!ei || ei.baseUrl !== e) && (ei = new ci(e)), ei;
}, qg = Ao("bsdd/fetchDictionaries", (r, e) => {
  if (console.log("fetchDictionaries", r), !r)
    return e.rejectWithValue("No bsddApiEnvironment provided");
  const t = new ci(r), n = XO;
  let o = 0;
  const a = [];
  return new Promise((s, l) => {
    function u() {
      t.api.dictionaryV1List({ IncludeTestDictionaries: !0, Limit: n, Offset: o }).then((f) => {
        f.ok || l(new Error(`HTTP error! status: ${f.status}`));
        const { data: { dictionaries: h, totalCount: p } = {} } = f;
        if (h && typeof p < "u")
          if (a.push(...h), o += n, a.length >= p) {
            const m = a.reduce((v, C) => (v[C.uri] = C, v), {});
            s(m);
          } else
            u();
        else
          l(new Error(`bSDD API error! status: ${f.status}`));
      });
    }
    u();
  });
}), eM = Ao(
  "bsdd/fetchDictionaryClasses",
  async (r, { getState: e, dispatch: t }) => {
    const n = e();
    if (n.bsdd.dictionaryClasses[r])
      return n.bsdd.dictionaryClasses[r];
    if (Jl[r])
      return await Jl[r];
    const o = (async () => {
      const s = ZO(e());
      if (!s)
        throw new Error("BsddApi is not initialized");
      const l = [];
      let u = 0, f;
      for (; ; ) {
        const h = await tM(s, r, u), p = h.classes ?? [];
        if (l.push(...p), u === 0 && (f = h.classesTotalCount, f == null))
          throw new Error("Total count is null or undefined");
        if (f != null && l.length >= f)
          break;
        u += py;
      }
      return t({ type: "bsdd/addDictionaryClasses", payload: { uri: r, classes: l } }), l;
    })();
    return Jl[r] = o, await o;
  }
), gy = gi({
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
    }).addCase(eM.rejected, (e, t) => {
      console.error("fetch dictionary classes failed", t.error), e.loaded = !0;
    });
  }
});
Ao("bsdd/fetchClass", async (r, { getState: e, dispatch: t }) => {
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
async function tM(r, e, t) {
  const n = await r.api.dictionaryV1ClassesList({
    Uri: e,
    UseNestedClasses: !1,
    Limit: py,
    Offset: t
    // languageCode: languageCode || undefined,
  });
  if (!n.ok)
    throw new Error(`HTTP error! status: ${n.status}`);
  return n.data;
}
gy.actions;
const rM = gy.reducer, nM = {
  name: void 0,
  description: void 0,
  tag: void 0,
  predefinedType: void 0,
  isDefinedBy: [],
  hasAssociations: []
}, my = gi({
  name: "ifcEntity",
  initialState: nM,
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
my.actions;
const oM = my.reducer, iM = Y1({
  reducer: {
    settings: LO,
    ifcData: OO,
    ifcEntity: oM,
    bsdd: rM
  }
});
Zl.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ Te.jsx(P.StrictMode, { children: /* @__PURE__ */ Te.jsx(N0, { store: iM, children: /* @__PURE__ */ Te.jsx(JO, {}) }) })
);
