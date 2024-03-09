var xT = Object.defineProperty;
var LT = (r, e, t) => e in r ? xT(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var zt = (r, e, t) => (LT(r, typeof e != "symbol" ? e + "" : e, t), t);
import * as Le from "react";
import P, { createContext as _o, useContext as Vn, useState as pe, useRef as Ke, useEffect as ye, useMemo as fs, useCallback as ze, useLayoutEffect as Tu, useId as Og, forwardRef as ht, cloneElement as Ks, Children as Ql } from "react";
import * as DT from "react-dom";
import UT, { flushSync as FT, createPortal as HT } from "react-dom";
var Ni = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Mg = { exports: {} }, qs = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var BT = P, KT = Symbol.for("react.element"), qT = Symbol.for("react.fragment"), $T = Object.prototype.hasOwnProperty, GT = BT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, zT = { key: !0, ref: !0, __self: !0, __source: !0 };
function xg(r, e, t) {
  var n, o = {}, a = null, s = null;
  t !== void 0 && (a = "" + t), e.key !== void 0 && (a = "" + e.key), e.ref !== void 0 && (s = e.ref);
  for (n in e)
    $T.call(e, n) && !zT.hasOwnProperty(n) && (o[n] = e[n]);
  if (r && r.defaultProps)
    for (n in e = r.defaultProps, e)
      o[n] === void 0 && (o[n] = e[n]);
  return { $$typeof: KT, type: r, key: a, ref: s, props: o, _owner: GT.current };
}
qs.Fragment = qT;
qs.jsx = xg;
qs.jsxs = xg;
Mg.exports = qs;
var Re = Mg.exports, Jl = {}, sp = UT;
Jl.createRoot = sp.createRoot, Jl.hydrateRoot = sp.hydrateRoot;
var Lg = { exports: {} }, Dg = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var na = P;
function WT(r, e) {
  return r === e && (r !== 0 || 1 / r === 1 / e) || r !== r && e !== e;
}
var VT = typeof Object.is == "function" ? Object.is : WT, jT = na.useSyncExternalStore, YT = na.useRef, QT = na.useEffect, JT = na.useMemo, XT = na.useDebugValue;
Dg.useSyncExternalStoreWithSelector = function(r, e, t, n, o) {
  var a = YT(null);
  if (a.current === null) {
    var s = { hasValue: !1, value: null };
    a.current = s;
  } else
    s = a.current;
  a = JT(function() {
    function u(v) {
      if (!f) {
        if (f = !0, h = v, v = n(v), o !== void 0 && s.hasValue) {
          var C = s.value;
          if (o(C, v))
            return p = C;
        }
        return p = v;
      }
      if (C = p, VT(h, v))
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
  var l = jT(r, a[0], a[1]);
  return QT(function() {
    s.hasValue = !0, s.value = l;
  }, [l]), XT(l), l;
};
Lg.exports = Dg;
var ZT = Lg.exports, hr = (
  // prettier-ignore
  // @ts-ignore
  "default" in Le ? Le.default : Le
), cp = Symbol.for("react-redux-context"), lp = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function e0() {
  if (!hr.createContext)
    return {};
  const r = lp[cp] ?? (lp[cp] = /* @__PURE__ */ new Map());
  let e = r.get(hr.createContext);
  return e || (e = hr.createContext(
    null
  ), r.set(hr.createContext, e)), e;
}
var $n = /* @__PURE__ */ e0(), t0 = () => {
  throw new Error("uSES not initialized!");
};
function Iu(r = $n) {
  return function() {
    return hr.useContext(r);
  };
}
var Ug = /* @__PURE__ */ Iu(), Fg = t0, r0 = (r) => {
  Fg = r;
}, n0 = (r, e) => r === e;
function o0(r = $n) {
  const e = r === $n ? Ug : Iu(r), t = (n, o = {}) => {
    const { equalityFn: a = n0, devModeChecks: s = {} } = typeof o == "function" ? { equalityFn: o } : o, {
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
    ), v = Fg(
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
var i0 = /* @__PURE__ */ o0();
function a0(r) {
  r();
}
function s0() {
  let r = null, e = null;
  return {
    clear() {
      r = null, e = null;
    },
    notify() {
      a0(() => {
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
var up = {
  notify() {
  },
  get: () => []
};
function c0(r, e) {
  let t, n = up, o = 0, a = !1;
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
    o++, t || (t = e ? e.addNestedSub(u) : r.subscribe(u), n = s0());
  }
  function p() {
    o--, t && o === 0 && (t(), t = void 0, n.clear(), n = up);
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
var l0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", u0 = l0 ? hr.useLayoutEffect : hr.useEffect;
function d0({
  store: r,
  context: e,
  children: t,
  serverState: n,
  stabilityCheck: o = "once",
  identityFunctionCheck: a = "once"
}) {
  const s = hr.useMemo(() => {
    const f = c0(r);
    return {
      store: r,
      subscription: f,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      identityFunctionCheck: a
    };
  }, [r, n, o, a]), l = hr.useMemo(() => r.getState(), [r]);
  u0(() => {
    const { subscription: f } = s;
    return f.onStateChange = f.notifyNestedSubs, f.trySubscribe(), l !== r.getState() && f.notifyNestedSubs(), () => {
      f.tryUnsubscribe(), f.onStateChange = void 0;
    };
  }, [s, l]);
  const u = e || $n;
  return /* @__PURE__ */ hr.createElement(u.Provider, { value: s }, t);
}
var f0 = d0;
function Hg(r = $n) {
  const e = r === $n ? Ug : (
    // @ts-ignore
    Iu(r)
  ), t = () => {
    const { store: n } = e();
    return n;
  };
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var h0 = /* @__PURE__ */ Hg();
function p0(r = $n) {
  const e = r === $n ? h0 : Hg(r), t = () => e().dispatch;
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var g0 = /* @__PURE__ */ p0();
r0(ZT.useSyncExternalStoreWithSelector);
const m0 = {
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
let v0 = class Xl {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || m0, this.options = t, this.debug = t.debug;
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
    return new Xl(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Xl(this.logger, e);
  }
};
var tn = new v0();
class $s {
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
function Oi() {
  let r, e;
  const t = new Promise((n, o) => {
    r = n, e = o;
  });
  return t.resolve = r, t.reject = e, t;
}
function dp(r) {
  return r == null ? "" : "" + r;
}
function y0(r, e, t) {
  r.forEach((n) => {
    e[n] && (t[n] = e[n]);
  });
}
function Au(r, e, t) {
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
function fp(r, e, t) {
  const {
    obj: n,
    k: o
  } = Au(r, e, Object);
  n[o] = t;
}
function C0(r, e, t, n) {
  const {
    obj: o,
    k: a
  } = Au(r, e, Object);
  o[a] = o[a] || [], n && (o[a] = o[a].concat(t)), n || o[a].push(t);
}
function hs(r, e) {
  const {
    obj: t,
    k: n
  } = Au(r, e);
  if (t)
    return t[n];
}
function w0(r, e, t) {
  const n = hs(r, t);
  return n !== void 0 ? n : hs(e, t);
}
function Bg(r, e, t) {
  for (const n in e)
    n !== "__proto__" && n !== "constructor" && (n in r ? typeof r[n] == "string" || r[n] instanceof String || typeof e[n] == "string" || e[n] instanceof String ? t && (r[n] = e[n]) : Bg(r[n], e[n], t) : r[n] = e[n]);
  return r;
}
function qo(r) {
  return r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var E0 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function b0(r) {
  return typeof r == "string" ? r.replace(/[&<>"'\/]/g, (e) => E0[e]) : r;
}
const _0 = [" ", ",", "?", "!", ";"];
function S0(r, e, t) {
  e = e || "", t = t || "";
  const n = _0.filter((s) => e.indexOf(s) < 0 && t.indexOf(s) < 0);
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
function ps(r, e) {
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
      return f ? ps(u, f, t) : void 0;
    }
    o = o[n[a]];
  }
  return o;
}
function gs(r) {
  return r && r.indexOf("_") > 0 ? r.replace("_", "-") : r;
}
class hp extends $s {
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
    const u = hs(this.data, l);
    return u || !s || typeof n != "string" ? u : ps(this.data && this.data[e] && this.data[e][t], n, a);
  }
  addResource(e, t, n, o) {
    let a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const s = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator;
    let l = [e, t];
    n && (l = l.concat(s ? n.split(s) : n)), e.indexOf(".") > -1 && (l = e.split("."), o = t, t = l[1]), this.addNamespaces(t), fp(this.data, l, o), a.silent || this.emit("added", e, t, n, o);
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
    let u = hs(this.data, l) || {};
    o ? Bg(u, n, a) : u = {
      ...u,
      ...n
    }, fp(this.data, l, u), s.silent || this.emit("added", e, t, n);
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
var Kg = {
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
const pp = {};
class ms extends $s {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), y0(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = tn.create("translator");
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
    const s = n && e.indexOf(n) > -1, l = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !S0(e, n, o);
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
        const A = t.nsSeparator || this.options.nsSeparator;
        return o ? {
          res: `${u}${A}${s}`,
          usedKey: s,
          exactUsedKey: s,
          usedLng: f,
          usedNS: u,
          usedParams: this.getUsedParamsDetails(t)
        } : `${u}${A}${s}`;
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
    const v = p && p.usedKey || s, C = p && p.exactUsedKey || s, E = Object.prototype.toString.apply(m), _ = ["[object Number]", "[object Function]", "[object RegExp]"], R = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, I = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (I && m && (typeof m != "string" && typeof m != "boolean" && typeof m != "number") && _.indexOf(E) < 0 && !(typeof R == "string" && E === "[object Array]")) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const A = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(v, m, {
          ...t,
          ns: l
        }) : `key '${s} (${this.language})' returned an object instead of string.`;
        return o ? (p.res = A, p.usedParams = this.getUsedParamsDetails(t), p) : A;
      }
      if (a) {
        const A = E === "[object Array]", O = A ? [] : {}, L = A ? C : v;
        for (const q in m)
          if (Object.prototype.hasOwnProperty.call(m, q)) {
            const D = `${L}${a}${q}`;
            O[q] = this.translate(D, {
              ...t,
              joinArrays: !1,
              ns: l
            }), O[q] === D && (O[q] = m[q]);
          }
        m = O;
      }
    } else if (I && typeof R == "string" && E === "[object Array]")
      m = m.join(R), m && (m = this.extendTranslation(m, e, t, n));
    else {
      let A = !1, O = !1;
      const L = t.count !== void 0 && typeof t.count != "string", q = ms.hasDefaultValue(t), D = L ? this.pluralResolver.getSuffix(f, t.count, t) : "", Q = t.ordinal && L ? this.pluralResolver.getSuffix(f, t.count, {
        ordinal: !1
      }) : "", X = t[`defaultValue${D}`] || t[`defaultValue${Q}`] || t.defaultValue;
      !this.isValidLookup(m) && q && (A = !0, m = X), this.isValidLookup(m) || (O = !0, m = s);
      const ne = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && O ? void 0 : m, fe = q && X !== m && this.options.updateMissing;
      if (O || A || fe) {
        if (this.logger.log(fe ? "updateKey" : "missingKey", f, u, s, fe ? X : m), a) {
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
        const Y = (ie, te, Pe) => {
          const Qe = q && Pe !== m ? Pe : ne;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(ie, u, te, Qe, fe, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(ie, u, te, Qe, fe, t), this.emit("missingKey", ie, u, te, m);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && L ? oe.forEach((ie) => {
          this.pluralResolver.getSuffixes(ie, t).forEach((te) => {
            Y([ie], s + te, t[`defaultValue${te}`] || X);
          });
        }) : Y(oe, s, X));
      }
      m = this.extendTranslation(m, e, t, p, n), O && m === s && this.options.appendNamespaceToMissingKey && (m = `${u}:${s}`), (O || A) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? m = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}:${s}` : s, A ? m : void 0) : m = this.options.parseMissingKeyHandler(m));
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
    return e != null && u && u.length && n.applyPostProcessor !== !1 && (e = Kg.handle(u, e, t, this.options && this.options.postProcessPassResolved ? {
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
        this.isValidLookup(n) || (l = _, !pp[`${E[0]}-${_}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(l) && (pp[`${E[0]}-${_}`] = !0, this.logger.warn(`key "${o}" for languages "${E.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), E.forEach((R) => {
          if (this.isValidLookup(n))
            return;
          s = R;
          const I = [h];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(I, h, R, _, t);
          else {
            let A;
            m && (A = this.pluralResolver.getSuffix(R, t.count, t));
            const O = `${this.options.pluralSeparator}zero`, L = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (m && (I.push(h + A), t.ordinal && A.indexOf(L) === 0 && I.push(h + A.replace(L, this.options.pluralSeparator)), v && I.push(h + O)), C) {
              const q = `${h}${this.options.contextSeparator}${t.context}`;
              I.push(q), m && (I.push(q + A), t.ordinal && A.indexOf(L) === 0 && I.push(q + A.replace(L, this.options.pluralSeparator)), v && I.push(q + O));
            }
          }
          let S;
          for (; S = I.pop(); )
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
function Ol(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
class gp {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = tn.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = gs(e), !e || e.indexOf("-") < 0)
      return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = gs(e), !e || e.indexOf("-") < 0)
      return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (typeof e == "string" && e.indexOf("-") > -1) {
      const t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let n = e.split("-");
      return this.options.lowerCaseLng ? n = n.map((o) => o.toLowerCase()) : n.length === 2 ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Ol(n[1].toLowerCase()))) : n.length === 3 && (n[0] = n[0].toLowerCase(), n[1].length === 2 && (n[1] = n[1].toUpperCase()), n[0] !== "sgn" && n[2].length === 2 && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Ol(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = Ol(n[2].toLowerCase()))), n.join("-");
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
let T0 = [{
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
}], I0 = {
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
const A0 = ["v1", "v2", "v3"], R0 = ["v4"], mp = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function k0() {
  const r = {};
  return T0.forEach((e) => {
    e.lngs.forEach((t) => {
      r[t] = {
        numbers: e.nr,
        plurals: I0[e.fc]
      };
    });
  }), r;
}
class P0 {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = tn.create("pluralResolver"), (!this.options.compatibilityJSON || R0.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = k0();
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(gs(e), {
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
    return n ? this.shouldUseIntlApi() ? n.resolvedOptions().pluralCategories.sort((o, a) => mp[o] - mp[a]).map((o) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : n.numbers.map((o) => this.getSuffix(e, o, t)) : [];
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
    return !A0.includes(this.options.compatibilityJSON);
  }
}
function vp(r, e, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, a = w0(r, e, t);
  return !a && o && typeof t == "string" && (a = ps(r, t, n), a === void 0 && (a = ps(e, t, n))), a;
}
class N0 {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = tn.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || ((t) => t), this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const t = e.interpolation;
    this.escape = t.escape !== void 0 ? t.escape : b0, this.escapeValue = t.escapeValue !== void 0 ? t.escapeValue : !0, this.useRawValueToEscape = t.useRawValueToEscape !== void 0 ? t.useRawValueToEscape : !1, this.prefix = t.prefix ? qo(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? qo(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? qo(t.nestingPrefix) : t.nestingPrefixEscaped || qo("$t("), this.nestingSuffix = t.nestingSuffix ? qo(t.nestingSuffix) : t.nestingSuffixEscaped || qo(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = t.alwaysFormat !== void 0 ? t.alwaysFormat : !1, this.resetRegExp();
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
        const I = vp(t, u, C, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(I, void 0, n, {
          ...o,
          ...t,
          interpolationkey: C
        }) : I;
      }
      const E = C.split(this.formatSeparator), _ = E.shift().trim(), R = E.join(this.formatSeparator).trim();
      return this.format(vp(t, u, _, this.options.keySeparator, this.options.ignoreJSONStructure), R, n, {
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
          typeof s != "string" && !this.useRawValueToEscape && (s = dp(s));
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
      typeof a != "string" && (a = dp(a)), a || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`), a = ""), f && (a = u.reduce((h, p) => this.format(h, p, n.lng, {
        ...n,
        interpolationkey: o[1].trim()
      }), a.trim())), e = e.replace(o[0], a), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
function O0(r) {
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
function $o(r) {
  const e = {};
  return function(n, o, a) {
    const s = o + JSON.stringify(a);
    let l = e[s];
    return l || (l = r(gs(o), a), e[s] = l), l(n);
  };
}
class M0 {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = tn.create("formatter"), this.options = e, this.formats = {
      number: $o((t, n) => {
        const o = new Intl.NumberFormat(t, {
          ...n
        });
        return (a) => o.format(a);
      }),
      currency: $o((t, n) => {
        const o = new Intl.NumberFormat(t, {
          ...n,
          style: "currency"
        });
        return (a) => o.format(a);
      }),
      datetime: $o((t, n) => {
        const o = new Intl.DateTimeFormat(t, {
          ...n
        });
        return (a) => o.format(a);
      }),
      relativetime: $o((t, n) => {
        const o = new Intl.RelativeTimeFormat(t, {
          ...n
        });
        return (a) => o.format(a, n.range || "day");
      }),
      list: $o((t, n) => {
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
    this.formats[e.toLowerCase().trim()] = $o(t);
  }
  format(e, t, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return t.split(this.formatSeparator).reduce((l, u) => {
      const {
        formatName: f,
        formatOptions: h
      } = O0(u);
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
function x0(r, e) {
  r.pending[e] !== void 0 && (delete r.pending[e], r.pendingCount--);
}
class L0 extends $s {
  constructor(e, t, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = o, this.logger = tn.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(n, o.backend, o);
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
      C0(u.loaded, [a], s), x0(u, e), t && u.errors.push(t), u.pendingCount === 0 && !u.done && (Object.keys(u.loaded).forEach((f) => {
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
function yp() {
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
function Cp(r) {
  return typeof r.ns == "string" && (r.ns = [r.ns]), typeof r.fallbackLng == "string" && (r.fallbackLng = [r.fallbackLng]), typeof r.fallbackNS == "string" && (r.fallbackNS = [r.fallbackNS]), r.supportedLngs && r.supportedLngs.indexOf("cimode") < 0 && (r.supportedLngs = r.supportedLngs.concat(["cimode"])), r;
}
function rs() {
}
function D0(r) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach((t) => {
    typeof r[t] == "function" && (r[t] = r[t].bind(r));
  });
}
class Vi extends $s {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Cp(e), this.services = {}, this.logger = tn, this.modules = {
      external: []
    }, D0(this), t && !this.isInitialized && !e.isClone) {
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
    const o = yp();
    this.options = {
      ...o,
      ...this.options,
      ...Cp(t)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...o.interpolation,
      ...this.options.interpolation
    }), t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    function a(h) {
      return h ? typeof h == "function" ? new h() : h : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? tn.init(a(this.modules.logger), this.options) : tn.init(null, this.options);
      let h;
      this.modules.formatter ? h = this.modules.formatter : typeof Intl < "u" && (h = M0);
      const p = new gp(this.options);
      this.store = new hp(this.options.resources, this.options);
      const m = this.services;
      m.logger = tn, m.resourceStore = this.store, m.languageUtils = p, m.pluralResolver = new P0(p, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), h && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (m.formatter = a(h), m.formatter.init(m, this.options), this.options.interpolation.format = m.formatter.format.bind(m.formatter)), m.interpolator = new N0(this.options), m.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, m.backendConnector = new L0(a(this.modules.backend), m.resourceStore, m, this.options), m.backendConnector.on("*", function(v) {
        for (var C = arguments.length, E = new Array(C > 1 ? C - 1 : 0), _ = 1; _ < C; _++)
          E[_ - 1] = arguments[_];
        e.emit(v, ...E);
      }), this.modules.languageDetector && (m.languageDetector = a(this.modules.languageDetector), m.languageDetector.init && m.languageDetector.init(m, this.options.detection, this.options)), this.modules.i18nFormat && (m.i18nFormat = a(this.modules.i18nFormat), m.i18nFormat.init && m.i18nFormat.init(this)), this.translator = new ms(this.services, this.options), this.translator.on("*", function(v) {
        for (var C = arguments.length, E = new Array(C > 1 ? C - 1 : 0), _ = 1; _ < C; _++)
          E[_ - 1] = arguments[_];
        e.emit(v, ...E);
      }), this.modules.external.forEach((v) => {
        v.init && v.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, n || (n = rs), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
    const u = Oi(), f = () => {
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
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : rs;
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
    const o = Oi();
    return e || (e = this.languages), t || (t = this.options.ns), n || (n = rs), this.services.backendConnector.reload(e, t, (a) => {
      o.resolve(), n(a);
    }), o;
  }
  use(e) {
    if (!e)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Kg.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
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
    const o = Oi();
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
    const n = Oi();
    return this.options.ns ? (typeof e == "string" && (e = [e]), e.forEach((o) => {
      this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
    }), this.loadResources((o) => {
      n.resolve(), t && t(o);
    }), n) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const n = Oi();
    typeof e == "string" && (e = [e]);
    const o = this.options.preload || [], a = e.filter((s) => o.indexOf(s) < 0);
    return a.length ? (this.options.preload = o.concat(a), this.loadResources((s) => {
      n.resolve(), t && t(s);
    }), n) : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e)
      return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], n = this.services && this.services.languageUtils || new gp(yp());
    return t.indexOf(n.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new Vi(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : rs;
    const n = e.forkResourceStore;
    n && delete e.forkResourceStore;
    const o = {
      ...this.options,
      ...e,
      isClone: !0
    }, a = new Vi(o);
    return (e.debug !== void 0 || e.prefix !== void 0) && (a.logger = a.logger.clone(e)), ["store", "services", "language"].forEach((l) => {
      a[l] = this[l];
    }), a.services = {
      ...this.services
    }, a.services.utils = {
      hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
    }, n && (a.store = new hp(this.store.data, o), a.services.resourceStore = a.store), a.translator = new ms(a.services, o), a.translator.on("*", function(l) {
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
const Bt = Vi.createInstance();
Bt.createInstance = Vi.createInstance;
Bt.createInstance;
Bt.dir;
Bt.init;
Bt.loadResources;
Bt.reloadResources;
Bt.use;
Bt.changeLanguage;
Bt.getFixedT;
Bt.t;
Bt.exists;
Bt.setDefaultNamespace;
Bt.hasLoadedNamespace;
Bt.loadNamespaces;
Bt.loadLanguages;
function U0() {
  if (console && console.warn) {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    typeof e[0] == "string" && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e);
  }
}
const wp = {};
function Zl() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  typeof e[0] == "string" && wp[e[0]] || (typeof e[0] == "string" && (wp[e[0]] = /* @__PURE__ */ new Date()), U0(...e));
}
const qg = (r, e) => () => {
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
function Ep(r, e, t) {
  r.loadNamespaces(e, qg(r, t));
}
function bp(r, e, t, n) {
  typeof t == "string" && (t = [t]), t.forEach((o) => {
    r.options.ns.indexOf(o) < 0 && r.options.ns.push(o);
  }), r.loadLanguages(e, qg(r, n));
}
function F0(r, e) {
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
function H0(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !e.languages || !e.languages.length ? (Zl("i18n.languages were undefined or empty", e.languages), !0) : e.options.ignoreJSONStructure !== void 0 ? e.hasLoadedNamespace(r, {
    lng: t.lng,
    precheck: (o, a) => {
      if (t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !a(o.isLanguageChangingTo, r))
        return !1;
    }
  }) : F0(r, e, t);
}
const B0 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, K0 = {
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
}, q0 = (r) => K0[r], $0 = (r) => r.replace(B0, q0);
let eu = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: $0
};
function G0() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  eu = {
    ...eu,
    ...r
  };
}
function z0() {
  return eu;
}
let $g;
function W0(r) {
  $g = r;
}
function V0() {
  return $g;
}
const j0 = {
  type: "3rdParty",
  init(r) {
    G0(r.options.react), W0(r);
  }
}, Y0 = _o();
class Q0 {
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
const J0 = (r, e) => {
  const t = Ke();
  return ye(() => {
    t.current = e ? t.current : r;
  }, [r, e]), t.current;
};
function Ru(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: t
  } = e, {
    i18n: n,
    defaultNS: o
  } = Vn(Y0) || {}, a = t || n || V0();
  if (a && !a.reportNamespaces && (a.reportNamespaces = new Q0()), !a) {
    Zl("You will need to pass in an i18next instance by using initReactI18next");
    const S = (O, L) => typeof L == "string" ? L : L && typeof L == "object" && typeof L.defaultValue == "string" ? L.defaultValue : Array.isArray(O) ? O[O.length - 1] : O, A = [S, {}, !1];
    return A.t = S, A.i18n = {}, A.ready = !1, A;
  }
  a.options.react && a.options.react.wait !== void 0 && Zl("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const s = {
    ...z0(),
    ...a.options.react,
    ...e
  }, {
    useSuspense: l,
    keyPrefix: u
  } = s;
  let f = r || o || a.options && a.options.defaultNS;
  f = typeof f == "string" ? [f] : f || ["translation"], a.reportNamespaces.addUsedNamespaces && a.reportNamespaces.addUsedNamespaces(f);
  const h = (a.isInitialized || a.initializedStoreOnce) && f.every((S) => H0(S, a, s));
  function p() {
    return a.getFixedT(e.lng || null, s.nsMode === "fallback" ? f : f[0], u);
  }
  const [m, v] = pe(p);
  let C = f.join();
  e.lng && (C = `${e.lng}${C}`);
  const E = J0(C), _ = Ke(!0);
  ye(() => {
    const {
      bindI18n: S,
      bindI18nStore: A
    } = s;
    _.current = !0, !h && !l && (e.lng ? bp(a, e.lng, f, () => {
      _.current && v(p);
    }) : Ep(a, f, () => {
      _.current && v(p);
    })), h && E && E !== C && _.current && v(p);
    function O() {
      _.current && v(p);
    }
    return S && a && a.on(S, O), A && a && a.store.on(A, O), () => {
      _.current = !1, S && a && S.split(" ").forEach((L) => a.off(L, O)), A && a && A.split(" ").forEach((L) => a.store.off(L, O));
    };
  }, [a, C]);
  const R = Ke(!0);
  ye(() => {
    _.current && !R.current && v(p), R.current = !1;
  }, [a, u]);
  const I = [m, a, h];
  if (I.t = m, I.i18n = a, I.ready = h, h || !h && !l)
    return I;
  throw new Promise((S) => {
    e.lng ? bp(a, e.lng, f, () => S()) : Ep(a, f, () => S());
  });
}
Bt.use(j0).init({
  resources: {
    en: {
      translation: {
        "No description": "No description",
        Link: "Link",
        Settings: "Settings",
        Language: "Language",
        "Select language": "Select language",
        "bSDD environment": "bSDD environment",
        "Main dictionary": "Main dictionary",
        "Selection filter dictionaries": "Selection filter dictionaries",
        "Select objects": "Select objects",
        "Attach to type": "Attach to type",
        "General settings": "General settings",
        "Dictionary selection": "Dictionary selection",
        "General settings help text": "Set the language and the bSDD environment.",
        "Dictionary selection help text": "Select the main dictionary and the filter dictionaries to use for the selection of objects. The main dictionary is used to select the objects. The filter dictionaries are used to filter the selection of objects.",
        "Parameter mapping": "Parameter mapping",
        "Parameter mapping help text": "Define the Revit type parameter in which to store the selected classes for this dictionary.",
        "Sort filter dictionaries": "Sort filter dictionaries",
        "Sort filter dictionaries help text": "The dictionaries will be shown in this order anywhere in the application.",
        "Validation per dictionary": "Validation per dictionary",
        Classifications: "Classifications",
        Propertysets: "Property sets"
      }
    },
    nl: {
      translation: {
        "No description": "Geen beschrijving",
        Link: "Koppelen",
        Settings: "Instellingen",
        Language: "Taal",
        "Select language": "Selecteer taal",
        "bSDD environment": "bSDD omgeving",
        "Main dictionary": "bSDD domein",
        "Selection filter dictionaries": "Selectie filter domeinen",
        "Select objects": "Selecteer objecten",
        "Attach to type": "Koppelen aan type",
        "General settings": "Algemene instellingen",
        "General settings help text": "Stel de taal en de bSDD omgeving in.",
        "Dictionary selection": "Domein selectie",
        "Dictionary selection help text": "Selecteer het hoofddomein en de filterdomeinen om te gebruiken voor de selectie van objecten. Het hoofddomein wordt gebruikt om de objecten te selecteren. De filterdomeinen worden gebruikt om de selectie van objecten te filteren.",
        "Parameter mapping": "Parameter mapping",
        "Parameter mapping help text": "Definieer de Revit type parameter waarin de geselecteerde object typen voor dit domein moeten worden opgeslagen.",
        "Sort filter dictionaries": "Sorteer filter domeinen",
        "Sort filter dictionaries help text": "De domeinen worden overal in de app in deze volgorde getoond.",
        "Validation per dictionary": "Validatie per domein",
        Classifications: "Classificaties",
        Propertysets: "Eigenschappen sets"
      }
    }
  },
  lng: "nl",
  fallbackLng: "en",
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
var tu = function(r, e) {
  return tu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
  }, tu(r, e);
};
function Rt(r, e) {
  tu(r, e);
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
function _p(r, e) {
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
function X0(r, e) {
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
function ku() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r = r.concat(X0(arguments[e]));
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
var ru = function(r, e) {
  return ru = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
  }, ru(r, e);
};
function or(r, e) {
  ru(r, e);
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
function Gs() {
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
}, oa = [
  N.OPENID_SCOPE,
  N.PROFILE_SCOPE,
  N.OFFLINE_ACCESS_SCOPE
], Sp = Gs(oa, [
  N.EMAIL_SCOPE
]), gr;
(function(r) {
  r.CONTENT_TYPE = "Content-Type", r.RETRY_AFTER = "Retry-After", r.CCS_HEADER = "X-AnchorMailbox", r.WWWAuthenticate = "WWW-Authenticate", r.AuthenticationInfo = "Authentication-Info", r.X_MS_REQUEST_ID = "x-ms-request-id", r.X_MS_HTTP_VERSION = "x-ms-httpver";
})(gr || (gr = {}));
var yt;
(function(r) {
  r.ID_TOKEN = "idtoken", r.CLIENT_INFO = "client.info", r.ADAL_ID_TOKEN = "adal.idtoken", r.ERROR = "error", r.ERROR_DESC = "error.description", r.ACTIVE_ACCOUNT = "active-account", r.ACTIVE_ACCOUNT_FILTERS = "active-account-filters";
})(yt || (yt = {}));
var ho;
(function(r) {
  r.COMMON = "common", r.ORGANIZATIONS = "organizations", r.CONSUMERS = "consumers";
})(ho || (ho = {}));
var Ie;
(function(r) {
  r.CLIENT_ID = "client_id", r.REDIRECT_URI = "redirect_uri", r.RESPONSE_TYPE = "response_type", r.RESPONSE_MODE = "response_mode", r.GRANT_TYPE = "grant_type", r.CLAIMS = "claims", r.SCOPE = "scope", r.ERROR = "error", r.ERROR_DESCRIPTION = "error_description", r.ACCESS_TOKEN = "access_token", r.ID_TOKEN = "id_token", r.REFRESH_TOKEN = "refresh_token", r.EXPIRES_IN = "expires_in", r.STATE = "state", r.NONCE = "nonce", r.PROMPT = "prompt", r.SESSION_STATE = "session_state", r.CLIENT_INFO = "client_info", r.CODE = "code", r.CODE_CHALLENGE = "code_challenge", r.CODE_CHALLENGE_METHOD = "code_challenge_method", r.CODE_VERIFIER = "code_verifier", r.CLIENT_REQUEST_ID = "client-request-id", r.X_CLIENT_SKU = "x-client-SKU", r.X_CLIENT_VER = "x-client-VER", r.X_CLIENT_OS = "x-client-OS", r.X_CLIENT_CPU = "x-client-CPU", r.X_CLIENT_CURR_TELEM = "x-client-current-telemetry", r.X_CLIENT_LAST_TELEM = "x-client-last-telemetry", r.X_MS_LIB_CAPABILITY = "x-ms-lib-capability", r.X_APP_NAME = "x-app-name", r.X_APP_VER = "x-app-ver", r.POST_LOGOUT_URI = "post_logout_redirect_uri", r.ID_TOKEN_HINT = "id_token_hint", r.DEVICE_CODE = "device_code", r.CLIENT_SECRET = "client_secret", r.CLIENT_ASSERTION = "client_assertion", r.CLIENT_ASSERTION_TYPE = "client_assertion_type", r.TOKEN_TYPE = "token_type", r.REQ_CNF = "req_cnf", r.OBO_ASSERTION = "assertion", r.REQUESTED_TOKEN_USE = "requested_token_use", r.ON_BEHALF_OF = "on_behalf_of", r.FOCI = "foci", r.CCS_HEADER = "X-AnchorMailbox", r.RETURN_SPA_CODE = "return_spa_code", r.NATIVE_BROKER = "nativebroker", r.LOGOUT_HINT = "logout_hint";
})(Ie || (Ie = {}));
var Wo;
(function(r) {
  r.ACCESS_TOKEN = "access_token", r.XMS_CC = "xms_cc";
})(Wo || (Wo = {}));
var Ut = {
  LOGIN: "login",
  SELECT_ACCOUNT: "select_account",
  CONSENT: "consent",
  NONE: "none",
  CREATE: "create",
  NO_SESSION: "no_session"
}, Hi;
(function(r) {
  r.ACCOUNT = "account", r.SID = "sid", r.LOGIN_HINT = "login_hint", r.ID_TOKEN = "id_token", r.DOMAIN_HINT = "domain_hint", r.ORGANIZATIONS = "organizations", r.CONSUMERS = "consumers", r.ACCOUNT_ID = "accountIdentifier", r.HOMEACCOUNT_ID = "homeAccountIdentifier";
})(Hi || (Hi = {}));
var Tp = {
  PLAIN: "plain",
  S256: "S256"
}, vs;
(function(r) {
  r.QUERY = "query", r.FRAGMENT = "fragment", r.FORM_POST = "form_post";
})(vs || (vs = {}));
var ys;
(function(r) {
  r.IMPLICIT_GRANT = "implicit", r.AUTHORIZATION_CODE_GRANT = "authorization_code", r.CLIENT_CREDENTIALS_GRANT = "client_credentials", r.RESOURCE_OWNER_PASSWORD_GRANT = "password", r.REFRESH_TOKEN_GRANT = "refresh_token", r.DEVICE_CODE_GRANT = "device_code", r.JWT_BEARER = "urn:ietf:params:oauth:grant-type:jwt-bearer";
})(ys || (ys = {}));
var Cn;
(function(r) {
  r.MSSTS_ACCOUNT_TYPE = "MSSTS", r.ADFS_ACCOUNT_TYPE = "ADFS", r.MSAV1_ACCOUNT_TYPE = "MSA", r.GENERIC_ACCOUNT_TYPE = "Generic";
})(Cn || (Cn = {}));
var Ct;
(function(r) {
  r.CACHE_KEY_SEPARATOR = "-", r.CLIENT_INFO_SEPARATOR = ".";
})(Ct || (Ct = {}));
var he;
(function(r) {
  r.ID_TOKEN = "IdToken", r.ACCESS_TOKEN = "AccessToken", r.ACCESS_TOKEN_WITH_AUTH_SCHEME = "AccessToken_With_AuthScheme", r.REFRESH_TOKEN = "RefreshToken";
})(he || (he = {}));
var wn;
(function(r) {
  r[r.ADFS = 1001] = "ADFS", r[r.MSA = 1002] = "MSA", r[r.MSSTS = 1003] = "MSSTS", r[r.GENERIC = 1004] = "GENERIC", r[r.ACCESS_TOKEN = 2001] = "ACCESS_TOKEN", r[r.REFRESH_TOKEN = 2002] = "REFRESH_TOKEN", r[r.ID_TOKEN = 2003] = "ID_TOKEN", r[r.APP_METADATA = 3001] = "APP_METADATA", r[r.UNDEFINED = 9999] = "UNDEFINED";
})(wn || (wn = {}));
var nu = "appmetadata", Z0 = "client_info", Bi = "1", Ki = {
  CACHE_KEY: "authority-metadata",
  REFRESH_TIME_SECONDS: 3600 * 24
  // 24 Hours
}, Rr;
(function(r) {
  r.CONFIG = "config", r.CACHE = "cache", r.NETWORK = "network", r.HARDCODED_VALUES = "hardcoded_values";
})(Rr || (Rr = {}));
var Tt = {
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
}, We;
(function(r) {
  r.BEARER = "Bearer", r.POP = "pop", r.SSH = "ssh-cert";
})(We || (We = {}));
var qi = {
  // Default time to throttle RequestThumbprint in seconds
  DEFAULT_THROTTLE_TIME_SECONDS: 60,
  // Default maximum time to throttle in seconds, overrides what the server sends back
  DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600,
  // Prefix for storing throttling entries
  THROTTLING_PREFIX: "throttling",
  // Value assigned to the x-ms-lib-capability header to indicate to the server the library supports throttling
  X_MS_LIB_CAPABILITY_VALUE: "retry-after, h429"
}, Ip = {
  INVALID_GRANT_ERROR: "invalid_grant",
  CLIENT_MISMATCH_ERROR: "client_mismatch"
}, Cs;
(function(r) {
  r.username = "username", r.password = "password";
})(Cs || (Cs = {}));
var Vo;
(function(r) {
  r[r.httpSuccess = 200] = "httpSuccess", r[r.httpBadRequest = 400] = "httpBadRequest";
})(Vo || (Vo = {}));
var Bn;
(function(r) {
  r.FAILED_AUTO_DETECTION = "1", r.INTERNAL_CACHE = "2", r.ENVIRONMENT_VARIABLE = "3", r.IMDS = "4";
})(Bn || (Bn = {}));
var $i;
(function(r) {
  r.CONFIGURED_MATCHES_DETECTED = "1", r.CONFIGURED_NO_AUTO_DETECTION = "2", r.CONFIGURED_NOT_DETECTED = "3", r.AUTO_DETECTION_REQUESTED_SUCCESSFUL = "4", r.AUTO_DETECTION_REQUESTED_FAILED = "5";
})($i || ($i = {}));
var qn;
(function(r) {
  r.NO_CACHE_HIT = "0", r.FORCE_REFRESH = "1", r.NO_CACHED_ACCESS_TOKEN = "2", r.CACHED_ACCESS_TOKEN_EXPIRED = "3", r.REFRESH_CACHED_ACCESS_TOKEN = "4", r.CLAIMS_REQUESTED_CACHE_SKIPPED = "5";
})(qn || (qn = {}));
var ou;
(function(r) {
  r.Jwt = "JWT", r.Jwk = "JWK", r.Pop = "pop";
})(ou || (ou = {}));
/*! @azure/msal-common v13.3.1 2023-10-27 */
var ns = {
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
      return a = r.call(this, s) || this, Object.setPrototypeOf(a, e.prototype), a.errorCode = t || N.EMPTY_STRING, a.errorMessage = n || N.EMPTY_STRING, a.subError = o || N.EMPTY_STRING, a.name = "AuthError", a;
    }
    return e.prototype.setCorrelationId = function(t) {
      this.correlationId = t;
    }, e.createUnexpectedError = function(t) {
      return new e(ns.unexpectedError.code, ns.unexpectedError.desc + ": " + t);
    }, e.createPostRequestFailed = function(t) {
      return new e(ns.postRequestFailed.code, ns.postRequestFailed.desc + ": " + t);
    }, e;
  }(Error)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var ws = {
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
}, re = (
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
var ee = (
  /** @class */
  function() {
    function r() {
    }
    return r.decodeAuthToken = function(e) {
      if (r.isEmpty(e))
        throw re.createTokenNullOrEmptyError(e);
      var t = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/, n = t.exec(e);
      if (!n || n.length < 4)
        throw re.createTokenParsingError("Given token is malformed: " + JSON.stringify(e));
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
var Pu = (
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
        ee.isEmpty(t.correlationId) ? ee.isEmpty(this.correlationId) ? o = "[" + n + "]" : o = "[" + n + "] : [" + this.correlationId + "]" : o = "[" + n + "] : [" + t.correlationId + "]";
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
var Gg = "@azure/msal-common", Nu = "13.3.1";
/*! @azure/msal-common v13.3.1 2023-10-27 */
var ji;
(function(r) {
  r[r.None = 0] = "None", r.AzurePublic = "https://login.microsoftonline.com", r.AzurePpe = "https://login.windows-ppe.net", r.AzureChina = "https://login.chinacloudapi.cn", r.AzureGermany = "https://login.microsoftonline.de", r.AzureUsGovernment = "https://login.microsoftonline.us";
})(ji || (ji = {}));
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
  }(re)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Lt = (
  /** @class */
  function() {
    function r(e) {
      var t = this, n = e ? ee.trimArrayEntries(Gs(e)) : [], o = n ? ee.removeEmptyStringsFromArray(n) : [];
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
      return ee.isEmpty(e) ? !1 : n.scopes.has(e.toLowerCase());
    }, r.prototype.containsScopeSet = function(e) {
      var t = this;
      return !e || e.scopes.size <= 0 ? !1 : this.scopes.size >= e.scopes.size && e.asArray().every(function(n) {
        return t.containsScope(n);
      });
    }, r.prototype.containsOnlyOIDCScopes = function() {
      var e = this, t = 0;
      return Sp.forEach(function(n) {
        e.containsScope(n) && (t += 1);
      }), this.scopes.size === t;
    }, r.prototype.appendScope = function(e) {
      ee.isEmpty(e) || this.scopes.add(e.trim());
    }, r.prototype.appendScopes = function(e) {
      var t = this;
      try {
        e.forEach(function(n) {
          return t.appendScope(n);
        });
      } catch (n) {
        throw re.createAppendScopeSetError(n);
      }
    }, r.prototype.removeScope = function(e) {
      if (ee.isEmpty(e))
        throw re.createRemoveEmptyScopeFromSetError(e);
      this.scopes.delete(e.trim());
    }, r.prototype.removeOIDCScopes = function() {
      var e = this;
      Sp.forEach(function(t) {
        e.scopes.delete(t);
      });
    }, r.prototype.unionScopeSets = function(e) {
      if (!e)
        throw re.createEmptyInputScopeSetError();
      var t = /* @__PURE__ */ new Set();
      return e.scopes.forEach(function(n) {
        return t.add(n.toLowerCase());
      }), this.scopes.forEach(function(n) {
        return t.add(n.toLowerCase());
      }), t;
    }, r.prototype.intersectingScopeSets = function(e) {
      if (!e)
        throw re.createEmptyInputScopeSetError();
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
function Es(r, e) {
  if (ee.isEmpty(r))
    throw re.createClientInfoEmptyError();
  try {
    var t = e.base64Decode(r);
    return JSON.parse(t);
  } catch (n) {
    throw re.createClientInfoDecodingError(n.message);
  }
}
function jo(r) {
  if (ee.isEmpty(r))
    throw re.createClientInfoDecodingError("Home account ID was empty.");
  var e = r.split(Ct.CLIENT_INFO_SEPARATOR, 2);
  return {
    uid: e[0],
    utid: e.length < 2 ? N.EMPTY_STRING : e[1]
  };
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Wt;
(function(r) {
  r[r.Default = 0] = "Default", r[r.Adfs = 1] = "Adfs", r[r.Dsts = 2] = "Dsts", r[r.Ciam = 3] = "Ciam";
})(Wt || (Wt = {}));
/*! @azure/msal-common v13.3.1 2023-10-27 */
var At = (
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
        case Cn.ADFS_ACCOUNT_TYPE:
          return wn.ADFS;
        case Cn.MSAV1_ACCOUNT_TYPE:
          return wn.MSA;
        case Cn.MSSTS_ACCOUNT_TYPE:
          return wn.MSSTS;
        case Cn.GENERIC_ACCOUNT_TYPE:
          return wn.GENERIC;
        default:
          throw re.createUnexpectedAccountTypeError();
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
      E.authorityType = Cn.MSSTS_ACCOUNT_TYPE, E.clientInfo = e, E.homeAccountId = t, E.nativeAccountId = u;
      var _ = l || o && o.getPreferredCache();
      if (!_)
        throw re.createInvalidCacheEnvironmentError();
      if (E.environment = _, E.realm = ((f = n == null ? void 0 : n.claims) === null || f === void 0 ? void 0 : f.tid) || N.EMPTY_STRING, n) {
        E.idTokenClaims = n.claims, E.localAccountId = ((h = n == null ? void 0 : n.claims) === null || h === void 0 ? void 0 : h.oid) || ((p = n == null ? void 0 : n.claims) === null || p === void 0 ? void 0 : p.sub) || N.EMPTY_STRING;
        var R = (m = n == null ? void 0 : n.claims) === null || m === void 0 ? void 0 : m.preferred_username, I = !((v = n == null ? void 0 : n.claims) === null || v === void 0) && v.emails ? n.claims.emails[0] : null;
        E.username = R || I || N.EMPTY_STRING, E.name = (C = n == null ? void 0 : n.claims) === null || C === void 0 ? void 0 : C.name;
      }
      return E.cloudGraphHostName = a, E.msGraphHost = s, E;
    }, r.createGenericAccount = function(e, t, n, o, a, s) {
      var l, u, f, h, p = new r();
      p.authorityType = n && n.authorityType === Wt.Adfs ? Cn.ADFS_ACCOUNT_TYPE : Cn.GENERIC_ACCOUNT_TYPE, p.homeAccountId = e, p.realm = N.EMPTY_STRING;
      var m = s || n && n.getPreferredCache();
      if (!m)
        throw re.createInvalidCacheEnvironmentError();
      return t && (p.localAccountId = ((l = t == null ? void 0 : t.claims) === null || l === void 0 ? void 0 : l.oid) || ((u = t == null ? void 0 : t.claims) === null || u === void 0 ? void 0 : u.sub) || N.EMPTY_STRING, p.username = ((f = t == null ? void 0 : t.claims) === null || f === void 0 ? void 0 : f.upn) || N.EMPTY_STRING, p.name = ((h = t == null ? void 0 : t.claims) === null || h === void 0 ? void 0 : h.name) || N.EMPTY_STRING, p.idTokenClaims = t == null ? void 0 : t.claims), p.environment = m, p.cloudGraphHostName = o, p.msGraphHost = a, p;
    }, r.generateHomeAccountId = function(e, t, n, o, a) {
      var s, l = !((s = a == null ? void 0 : a.claims) === null || s === void 0) && s.sub ? a.claims.sub : N.EMPTY_STRING;
      if (t === Wt.Adfs || t === Wt.Dsts)
        return l;
      if (e)
        try {
          var u = Es(e, o);
          if (!ee.isEmpty(u.uid) && !ee.isEmpty(u.utid))
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
var on = (
  /** @class */
  function() {
    function r(e, t) {
      if (ee.isEmpty(e))
        throw re.createTokenNullOrEmptyError(e);
      this.rawToken = e, this.claims = r.extractTokenClaims(e, t);
    }
    return r.extractTokenClaims = function(e, t) {
      var n = ee.decodeAuthToken(e);
      try {
        var o = n.JWSPayload, a = t.base64Decode(o);
        return JSON.parse(a);
      } catch (s) {
        throw re.createTokenParsingError(s);
      }
    }, r.checkMaxAge = function(e, t) {
      var n = 3e5;
      if (t === 0 || Date.now() - n > e + t)
        throw re.createMaxAgeTranspiredError();
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var er = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.clientId = e, this.cryptoImpl = t, this.commonLogger = n.clone(Gg, Nu);
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
      return n && (t.idToken = n.secret, t.idTokenClaims = new on(n.secret, this.cryptoImpl).claims), t;
    }, r.prototype.saveCacheRecord = function(e) {
      return _e(this, void 0, void 0, function() {
        return Se(this, function(t) {
          switch (t.label) {
            case 0:
              if (!e)
                throw re.createNullOrUndefinedCacheRecord();
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
              }, n = this.getTokenKeys(), o = Lt.fromString(e.target), a = [], n.accessToken.forEach(function(u) {
                if (s.accessTokenKeyMatchesFilter(u, t, !1)) {
                  var f = s.getAccessTokenCredential(u);
                  if (f && s.credentialMatchesFilter(f, t)) {
                    var h = Lt.fromString(f.target);
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
        var n = "" + he.REFRESH_TOKEN + Ct.CACHE_KEY_SEPARATOR + this.clientId + Ct.CACHE_KEY_SEPARATOR, o = "" + he.REFRESH_TOKEN + Ct.CACHE_KEY_SEPARATOR + Bi + Ct.CACHE_KEY_SEPARATOR;
        if (t.indexOf(n.toLowerCase()) === -1 && t.indexOf(o.toLowerCase()) === -1)
          return !1;
      } else if (t.indexOf(this.clientId.toLowerCase()) === -1)
        return !1;
      return !0;
    }, r.prototype.credentialMatchesFilter = function(e, t) {
      return !(t.clientId && !this.matchClientId(e, t.clientId) || t.userAssertionHash && !this.matchUserAssertionHash(e, t.userAssertionHash) || typeof t.homeAccountId == "string" && !this.matchHomeAccountId(e, t.homeAccountId) || t.environment && !this.matchEnvironment(e, t.environment) || t.realm && !this.matchRealm(e, t.realm) || t.credentialType && !this.matchCredentialType(e, t.credentialType) || t.familyId && !this.matchFamilyId(e, t.familyId) || t.target && !this.matchTarget(e, t.target) || (t.requestedClaimsHash || e.requestedClaimsHash) && e.requestedClaimsHash !== t.requestedClaimsHash || e.credentialType === he.ACCESS_TOKEN_WITH_AUTH_SCHEME && (t.tokenType && !this.matchTokenType(e, t.tokenType) || t.tokenType === We.SSH && t.keyId && !this.matchKeyId(e, t.keyId)));
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
                throw re.createNoAccountFoundError();
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
              if (t.tokenType !== We.POP)
                return [3, 4];
              if (n = t, o = n.keyId, !o)
                return [3, 4];
              a.label = 1;
            case 1:
              return a.trys.push([1, 3, , 4]), [4, this.cryptoImpl.removeTokenBindingKey(o)];
            case 2:
              return a.sent(), [3, 4];
            case 3:
              throw a.sent(), re.createBindingKeyNotRemovedError();
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
      return a && s && (a.idTokenClaims = new on(s.secret, this.cryptoImpl).claims), {
        account: a,
        idToken: s,
        accessToken: l,
        refreshToken: u,
        appMetadata: f
      };
    }, r.prototype.readAccountFromCache = function(e) {
      var t = At.generateAccountCacheKey(e);
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
      var a = Lt.createSearchScopes(t.scopes), s = t.authenticationScheme || We.BEARER, l = s && s.toLowerCase() !== We.BEARER.toLowerCase() ? he.ACCESS_TOKEN_WITH_AUTH_SCHEME : he.ACCESS_TOKEN, u = {
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
      var a = t ? Bi : void 0, s = {
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
        throw re.createMultipleMatchingAppMetadataInCacheError();
      return o[0];
    }, r.prototype.isAppMetadataFOCI = function(e) {
      var t = this.readAppMetadataFromCache(e);
      return !!(t && t.familyId === Bi);
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
      var o = Lt.fromString(e.target);
      return o.containsScopeSet(t);
    }, r.prototype.matchTokenType = function(e, t) {
      return !!(e.tokenType && e.tokenType === t);
    }, r.prototype.matchKeyId = function(e, t) {
      return !!(e.keyId && e.keyId === t);
    }, r.prototype.isAppMetadata = function(e) {
      return e.indexOf(nu) !== -1;
    }, r.prototype.isAuthorityMetadata = function(e) {
      return e.indexOf(Ki.CACHE_KEY) !== -1;
    }, r.prototype.generateAuthorityMetadataCacheKey = function(e) {
      return Ki.CACHE_KEY + "-" + this.clientId + "-" + e;
    }, r.toObject = function(e, t) {
      for (var n in t)
        e[n] = t[n];
      return e;
    }, r;
  }()
), eI = (
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
var tI = 300, zg = {
  tokenRenewalOffsetSeconds: tI,
  preventCorsPreflight: !1
}, rI = {
  loggerCallback: function() {
  },
  piiLoggingEnabled: !1,
  logLevel: st.Info,
  correlationId: N.EMPTY_STRING
}, nI = {
  claimsBasedCachingEnabled: !0
}, oI = {
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
}, iI = {
  sku: N.SKU,
  version: Nu,
  cpu: N.EMPTY_STRING,
  os: N.EMPTY_STRING
}, aI = {
  clientSecret: N.EMPTY_STRING,
  clientAssertion: void 0
}, sI = {
  azureCloudInstance: ji.None,
  tenant: "" + N.DEFAULT_COMMON_TENANT
}, cI = {
  application: {
    appName: "",
    appVersion: ""
  }
};
function lI(r) {
  var e = r.authOptions, t = r.systemOptions, n = r.loggerOptions, o = r.cacheOptions, a = r.storageInterface, s = r.networkInterface, l = r.cryptoInterface, u = r.clientCredentials, f = r.libraryInfo, h = r.telemetry, p = r.serverTelemetryManager, m = r.persistencePlugin, v = r.serializableCache, C = $e($e({}, rI), n);
  return {
    authOptions: uI(e),
    systemOptions: $e($e({}, zg), t),
    loggerOptions: C,
    cacheOptions: $e($e({}, nI), o),
    storageInterface: a || new eI(e.clientId, ws, new Pu(C)),
    networkInterface: s || oI,
    cryptoInterface: l || ws,
    clientCredentials: u || aI,
    libraryInfo: $e($e({}, iI), f),
    telemetry: $e($e({}, cI), h),
    serverTelemetryManager: p || null,
    persistencePlugin: m || null,
    serializableCache: v || null
  };
}
function uI(r) {
  return $e({ clientCapabilities: [], azureCloudOptions: sI, skipAuthorityMetadataCache: !1 }, r);
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
var yo = (
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
var bs = (
  /** @class */
  function() {
    function r() {
    }
    return r.generateThrottlingStorageKey = function(e) {
      return qi.THROTTLING_PREFIX + "." + JSON.stringify(e);
    }, r.preProcess = function(e, t) {
      var n, o = r.generateThrottlingStorageKey(t), a = e.getThrottlingCache(o);
      if (a) {
        if (a.throttleTime < Date.now()) {
          e.removeItem(o);
          return;
        }
        throw new yo(((n = a.errorCodes) === null || n === void 0 ? void 0 : n.join(" ")) || N.EMPTY_STRING, a.errorMessage, a.subError);
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
      return Math.floor(Math.min(n + (t || qi.DEFAULT_THROTTLE_TIME_SECONDS), n + qi.DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1e3);
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
var dI = (
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
              bs.preProcess(this.cacheManager, e), s.label = 1;
            case 1:
              return s.trys.push([1, 3, , 4]), [4, this.networkClient.sendPostRequestAsync(t, n)];
            case 2:
              return o = s.sent(), [3, 4];
            case 3:
              throw a = s.sent(), a instanceof ue ? a : re.createNetworkError(t, a);
            case 4:
              return bs.postProcess(this.cacheManager, e, o), [2, o];
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
var so = (
  /** @class */
  function() {
    function r() {
    }
    return r.validateRedirectUri = function(e) {
      if (ee.isEmpty(e))
        throw et.createRedirectUriEmptyError();
    }, r.validatePrompt = function(e) {
      var t = [];
      for (var n in Ut)
        t.push(Ut[n]);
      if (t.indexOf(e) < 0)
        throw et.createInvalidPromptError(e);
    }, r.validateClaims = function(e) {
      try {
        JSON.parse(e);
      } catch {
        throw et.createInvalidClaimsRequestError();
      }
    }, r.validateCodeChallengeParams = function(e, t) {
      if (ee.isEmpty(e) || ee.isEmpty(t))
        throw et.createInvalidCodeChallengeParamsError();
      this.validateCodeChallengeMethod(t);
    }, r.validateCodeChallengeMethod = function(e) {
      if ([
        Tp.PLAIN,
        Tp.S256
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
var Gi = (
  /** @class */
  function() {
    function r() {
      this.parameters = /* @__PURE__ */ new Map();
    }
    return r.prototype.addResponseTypeCode = function() {
      this.parameters.set(Ie.RESPONSE_TYPE, encodeURIComponent(N.CODE_RESPONSE_TYPE));
    }, r.prototype.addResponseTypeForTokenAndIdToken = function() {
      this.parameters.set(Ie.RESPONSE_TYPE, encodeURIComponent(N.TOKEN_RESPONSE_TYPE + " " + N.ID_TOKEN_RESPONSE_TYPE));
    }, r.prototype.addResponseMode = function(e) {
      this.parameters.set(Ie.RESPONSE_MODE, encodeURIComponent(e || vs.QUERY));
    }, r.prototype.addNativeBroker = function() {
      this.parameters.set(Ie.NATIVE_BROKER, encodeURIComponent("1"));
    }, r.prototype.addScopes = function(e, t) {
      t === void 0 && (t = !0);
      var n = t ? Gs(e || [], oa) : e || [], o = new Lt(n);
      this.parameters.set(Ie.SCOPE, encodeURIComponent(o.printScopes()));
    }, r.prototype.addClientId = function(e) {
      this.parameters.set(Ie.CLIENT_ID, encodeURIComponent(e));
    }, r.prototype.addRedirectUri = function(e) {
      so.validateRedirectUri(e), this.parameters.set(Ie.REDIRECT_URI, encodeURIComponent(e));
    }, r.prototype.addPostLogoutRedirectUri = function(e) {
      so.validateRedirectUri(e), this.parameters.set(Ie.POST_LOGOUT_URI, encodeURIComponent(e));
    }, r.prototype.addIdTokenHint = function(e) {
      this.parameters.set(Ie.ID_TOKEN_HINT, encodeURIComponent(e));
    }, r.prototype.addDomainHint = function(e) {
      this.parameters.set(Hi.DOMAIN_HINT, encodeURIComponent(e));
    }, r.prototype.addLoginHint = function(e) {
      this.parameters.set(Hi.LOGIN_HINT, encodeURIComponent(e));
    }, r.prototype.addCcsUpn = function(e) {
      this.parameters.set(gr.CCS_HEADER, encodeURIComponent("UPN:" + e));
    }, r.prototype.addCcsOid = function(e) {
      this.parameters.set(gr.CCS_HEADER, encodeURIComponent("Oid:" + e.uid + "@" + e.utid));
    }, r.prototype.addSid = function(e) {
      this.parameters.set(Hi.SID, encodeURIComponent(e));
    }, r.prototype.addClaims = function(e, t) {
      var n = this.addClientCapabilitiesToClaims(e, t);
      so.validateClaims(n), this.parameters.set(Ie.CLAIMS, encodeURIComponent(n));
    }, r.prototype.addCorrelationId = function(e) {
      this.parameters.set(Ie.CLIENT_REQUEST_ID, encodeURIComponent(e));
    }, r.prototype.addLibraryInfo = function(e) {
      this.parameters.set(Ie.X_CLIENT_SKU, e.sku), this.parameters.set(Ie.X_CLIENT_VER, e.version), e.os && this.parameters.set(Ie.X_CLIENT_OS, e.os), e.cpu && this.parameters.set(Ie.X_CLIENT_CPU, e.cpu);
    }, r.prototype.addApplicationTelemetry = function(e) {
      e != null && e.appName && this.parameters.set(Ie.X_APP_NAME, e.appName), e != null && e.appVersion && this.parameters.set(Ie.X_APP_VER, e.appVersion);
    }, r.prototype.addPrompt = function(e) {
      so.validatePrompt(e), this.parameters.set("" + Ie.PROMPT, encodeURIComponent(e));
    }, r.prototype.addState = function(e) {
      ee.isEmpty(e) || this.parameters.set(Ie.STATE, encodeURIComponent(e));
    }, r.prototype.addNonce = function(e) {
      this.parameters.set(Ie.NONCE, encodeURIComponent(e));
    }, r.prototype.addCodeChallengeParams = function(e, t) {
      if (so.validateCodeChallengeParams(e, t), e && t)
        this.parameters.set(Ie.CODE_CHALLENGE, encodeURIComponent(e)), this.parameters.set(Ie.CODE_CHALLENGE_METHOD, encodeURIComponent(t));
      else
        throw et.createInvalidCodeChallengeParamsError();
    }, r.prototype.addAuthorizationCode = function(e) {
      this.parameters.set(Ie.CODE, encodeURIComponent(e));
    }, r.prototype.addDeviceCode = function(e) {
      this.parameters.set(Ie.DEVICE_CODE, encodeURIComponent(e));
    }, r.prototype.addRefreshToken = function(e) {
      this.parameters.set(Ie.REFRESH_TOKEN, encodeURIComponent(e));
    }, r.prototype.addCodeVerifier = function(e) {
      this.parameters.set(Ie.CODE_VERIFIER, encodeURIComponent(e));
    }, r.prototype.addClientSecret = function(e) {
      this.parameters.set(Ie.CLIENT_SECRET, encodeURIComponent(e));
    }, r.prototype.addClientAssertion = function(e) {
      ee.isEmpty(e) || this.parameters.set(Ie.CLIENT_ASSERTION, encodeURIComponent(e));
    }, r.prototype.addClientAssertionType = function(e) {
      ee.isEmpty(e) || this.parameters.set(Ie.CLIENT_ASSERTION_TYPE, encodeURIComponent(e));
    }, r.prototype.addOboAssertion = function(e) {
      this.parameters.set(Ie.OBO_ASSERTION, encodeURIComponent(e));
    }, r.prototype.addRequestTokenUse = function(e) {
      this.parameters.set(Ie.REQUESTED_TOKEN_USE, encodeURIComponent(e));
    }, r.prototype.addGrantType = function(e) {
      this.parameters.set(Ie.GRANT_TYPE, encodeURIComponent(e));
    }, r.prototype.addClientInfo = function() {
      this.parameters.set(Z0, "1");
    }, r.prototype.addExtraQueryParameters = function(e) {
      var t = this, n = so.sanitizeEQParams(e, this.parameters);
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
      this.parameters.set(Cs.username, encodeURIComponent(e));
    }, r.prototype.addPassword = function(e) {
      this.parameters.set(Cs.password, encodeURIComponent(e));
    }, r.prototype.addPopToken = function(e) {
      ee.isEmpty(e) || (this.parameters.set(Ie.TOKEN_TYPE, We.POP), this.parameters.set(Ie.REQ_CNF, encodeURIComponent(e)));
    }, r.prototype.addSshJwk = function(e) {
      ee.isEmpty(e) || (this.parameters.set(Ie.TOKEN_TYPE, We.SSH), this.parameters.set(Ie.REQ_CNF, encodeURIComponent(e)));
    }, r.prototype.addServerTelemetry = function(e) {
      this.parameters.set(Ie.X_CLIENT_CURR_TELEM, e.generateCurrentRequestHeaderValue()), this.parameters.set(Ie.X_CLIENT_LAST_TELEM, e.generateLastRequestHeaderValue());
    }, r.prototype.addThrottling = function() {
      this.parameters.set(Ie.X_MS_LIB_CAPABILITY, qi.X_MS_LIB_CAPABILITY_VALUE);
    }, r.prototype.addLogoutHint = function(e) {
      this.parameters.set(Ie.LOGOUT_HINT, encodeURIComponent(e));
    }, r.prototype.createQueryString = function() {
      var e = new Array();
      return this.parameters.forEach(function(t, n) {
        e.push(n + "=" + t);
      }), e.join("&");
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Ou = (
  /** @class */
  function() {
    function r(e, t) {
      this.config = lI(e), this.logger = new Pu(this.config.loggerOptions, Gg, Nu), this.cryptoUtils = this.config.cryptoInterface, this.cacheManager = this.config.storageInterface, this.networkClient = this.config.networkInterface, this.networkManager = new dI(this.networkClient, this.cacheManager), this.serverTelemetryManager = this.config.serverTelemetryManager, this.authority = this.config.authOptions.authority, this.performanceClient = t;
    }
    return r.prototype.createTokenRequestHeaders = function(e) {
      var t = {};
      if (t[gr.CONTENT_TYPE] = N.URL_FORM_CONTENT_TYPE, !this.config.systemOptions.preventCorsPreflight && e)
        switch (e.type) {
          case pr.HOME_ACCOUNT_ID:
            try {
              var n = jo(e.credential);
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
        throw re.createEndpointDiscoveryIncompleteError("Updated authority has not completed endpoint discovery.");
      this.authority = e;
    }, r.prototype.createTokenQueryParameters = function(e) {
      var t = new Gi();
      return e.tokenQueryParameters && t.addExtraQueryParameters(e.tokenQueryParameters), t.createQueryString();
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Mu = (
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
          return wn.ID_TOKEN;
        case he.ACCESS_TOKEN:
        case he.ACCESS_TOKEN_WITH_AUTH_SCHEME:
          return wn.ACCESS_TOKEN;
        case he.REFRESH_TOKEN:
          return wn.REFRESH_TOKEN;
        default:
          throw re.createUnexpectedCredentialTypeError();
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
      return e && e.toLowerCase() !== We.BEARER.toLowerCase() ? e.toLowerCase() : N.EMPTY_STRING;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var uo = (
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
  }(Mu)
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
var fo = (
  /** @class */
  function(r) {
    or(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.createAccessTokenEntity = function(t, n, o, a, s, l, u, f, h, p, m, v, C, E, _) {
      var R, I, S = new e();
      S.homeAccountId = t, S.credentialType = he.ACCESS_TOKEN, S.secret = o;
      var A = kr.nowSeconds();
      if (S.cachedAt = A.toString(), S.expiresOn = u.toString(), S.extendedExpiresOn = f.toString(), p && (S.refreshOn = p.toString()), S.environment = n, S.clientId = a, S.realm = s, S.target = l, S.userAssertionHash = v, S.tokenType = ee.isEmpty(m) ? We.BEARER : m, E && (S.requestedClaims = E, S.requestedClaimsHash = _), ((R = S.tokenType) === null || R === void 0 ? void 0 : R.toLowerCase()) !== We.BEARER.toLowerCase())
        switch (S.credentialType = he.ACCESS_TOKEN_WITH_AUTH_SCHEME, S.tokenType) {
          case We.POP:
            var O = on.extractTokenClaims(o, h);
            if (!(!((I = O == null ? void 0 : O.cnf) === null || I === void 0) && I.kid))
              throw re.createTokenClaimsRequiredError();
            S.keyId = O.cnf.kid;
            break;
          case We.SSH:
            S.keyId = C;
        }
      return S;
    }, e.isAccessTokenEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("realm") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") && t.hasOwnProperty("target") && (t.credentialType === he.ACCESS_TOKEN || t.credentialType === he.ACCESS_TOKEN_WITH_AUTH_SCHEME) : !1;
    }, e;
  }(Mu)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Yo = (
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
  }(Mu)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Ap = [
  "interaction_required",
  "consent_required",
  "login_required"
], fI = [
  "message_only",
  "additional_action",
  "basic_action",
  "user_password_expired",
  "consent_required"
], Qo = {
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
      var a = !!t && Ap.indexOf(t) > -1, s = !!o && fI.indexOf(o) > -1, l = !!n && Ap.some(function(u) {
        return n.indexOf(u) > -1;
      });
      return a || l || s;
    }, e.createNoTokensFoundError = function() {
      return new e(Qo.noTokensFoundError.code, Qo.noTokensFoundError.desc);
    }, e.createNativeAccountUnavailableError = function() {
      return new e(Qo.native_account_unavailable.code, Qo.native_account_unavailable.desc);
    }, e;
  }(ue)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var zi = (
  /** @class */
  function() {
    function r(e, t, n, o, a) {
      this.account = e || null, this.idToken = t || null, this.accessToken = n || null, this.refreshToken = o || null, this.appMetadata = a || null;
    }
    return r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var bn = (
  /** @class */
  function() {
    function r() {
    }
    return r.setRequestState = function(e, t, n) {
      var o = r.generateLibraryState(e, n);
      return ee.isEmpty(t) ? o : "" + o + N.RESOURCE_DELIM + t;
    }, r.generateLibraryState = function(e, t) {
      if (!e)
        throw re.createNoCryptoObjectError("generateLibraryState");
      var n = {
        id: e.createNewGuid()
      };
      t && (n.meta = t);
      var o = JSON.stringify(n);
      return e.base64Encode(o);
    }, r.parseRequestState = function(e, t) {
      if (!e)
        throw re.createNoCryptoObjectError("parseRequestState");
      if (ee.isEmpty(t))
        throw re.createInvalidStateError(t, "Null, undefined or empty state");
      try {
        var n = t.split(N.RESOURCE_DELIM), o = n[0], a = n.length > 1 ? n.slice(1).join(N.RESOURCE_DELIM) : N.EMPTY_STRING, s = e.base64Decode(o), l = JSON.parse(s);
        return {
          userRequestState: ee.isEmpty(a) ? N.EMPTY_STRING : a,
          libraryState: l
        };
      } catch (u) {
        throw re.createInvalidStateError(t, u);
      }
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var He = (
  /** @class */
  function() {
    function r(e) {
      if (this._urlString = e, ee.isEmpty(this._urlString))
        throw et.createUrlEmptyError();
      ee.isEmpty(this.getHash()) && (this._urlString = r.canonicalizeUri(e));
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
        return ee.endsWith(t, "?") ? t = t.slice(0, -1) : ee.endsWith(t, "?/") && (t = t.slice(0, -2)), ee.endsWith(t, "/") || (t += "/"), t;
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
      return ee.isEmpty(t) ? e : e.indexOf("?") < 0 ? e + "?" + t : e + "&" + t;
    }, r.removeHashFromUrl = function(e) {
      return r.canonicalizeUri(e.split("#")[0]);
    }, r.prototype.replaceTenantPath = function(e) {
      var t = this.getUrlComponents(), n = t.PathSegments;
      return e && n.length !== 0 && (n[0] === ho.COMMON || n[0] === ho.ORGANIZATIONS) && (n[0] = e), r.constructAuthorityUriFromObject(t);
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
      }), n.PathSegments = o, !ee.isEmpty(n.QueryString) && n.QueryString.endsWith("/") && (n.QueryString = n.QueryString.substring(0, n.QueryString.length - 1)), n;
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
      if (ee.isEmpty(e))
        return {};
      var t = r.parseHash(e), n = ee.queryStringToObject(ee.isEmpty(t) ? e : t);
      if (!n)
        throw re.createHashNotDeserializedError(JSON.stringify(n));
      return n;
    }, r.getDeserializedQueryString = function(e) {
      if (ee.isEmpty(e))
        return {};
      var t = r.parseQueryString(e), n = ee.queryStringToObject(ee.isEmpty(t) ? e : t);
      if (!n)
        throw re.createHashNotDeserializedError(JSON.stringify(n));
      return n;
    }, r.hashContainsKnownProperties = function(e) {
      if (ee.isEmpty(e) || e.indexOf("=") < 0)
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
var _s;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.InProgress = 1] = "InProgress", r[r.Completed = 2] = "Completed";
})(_s || (_s = {}));
var hI = /* @__PURE__ */ new Set([
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
var iu;
(function(r) {
  r.SW = "sw", r.UHW = "uhw";
})(iu || (iu = {}));
var ri = (
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
                xms_ksl: iu.SW
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
var au = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.generateAppMetadataKey = function() {
      return r.generateAppMetadataCacheKey(this.environment, this.clientId);
    }, r.generateAppMetadataCacheKey = function(e, t) {
      var n = [
        nu,
        e,
        t
      ];
      return n.join(Ct.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.createAppMetadataEntity = function(e, t, n) {
      var o = new r();
      return o.clientId = e, o.environment = t, n && (o.familyId = n), o;
    }, r.isAppMetadataEntity = function(e, t) {
      return t ? e.indexOf(nu) === 0 && t.hasOwnProperty("clientId") && t.hasOwnProperty("environment") : !1;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var pI = (
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
var Ss = (
  /** @class */
  function() {
    function r(e, t, n, o, a, s, l) {
      this.clientId = e, this.cacheStorage = t, this.cryptoObj = n, this.logger = o, this.serializableCache = a, this.persistencePlugin = s, this.performanceClient = l;
    }
    return r.prototype.validateServerAuthorizationCodeResponse = function(e, t, n) {
      if (!e.state || !t)
        throw e.state ? re.createStateNotFoundError("Cached State") : re.createStateNotFoundError("Server State");
      if (decodeURIComponent(e.state) !== decodeURIComponent(t))
        throw re.createStateMismatchError();
      if (e.error || e.error_description || e.suberror)
        throw Gr.isInteractionRequiredError(e.error, e.error_description, e.suberror) ? new Gr(e.error || N.EMPTY_STRING, e.error_description, e.suberror, e.timestamp || N.EMPTY_STRING, e.trace_id || N.EMPTY_STRING, e.correlation_id || N.EMPTY_STRING, e.claims || N.EMPTY_STRING) : new yo(e.error || N.EMPTY_STRING, e.error_description, e.suberror);
      e.client_info && Es(e.client_info, n);
    }, r.prototype.validateTokenResponse = function(e) {
      if (e.error || e.error_description || e.suberror) {
        if (Gr.isInteractionRequiredError(e.error, e.error_description, e.suberror))
          throw new Gr(e.error, e.error_description, e.suberror, e.timestamp || N.EMPTY_STRING, e.trace_id || N.EMPTY_STRING, e.correlation_id || N.EMPTY_STRING, e.claims || N.EMPTY_STRING);
        var t = e.error_codes + " - [" + e.timestamp + "]: " + e.error_description + " - Correlation ID: " + e.correlation_id + " - Trace ID: " + e.trace_id;
        throw new yo(e.error, t, e.suberror);
      }
    }, r.prototype.handleServerTokenResponse = function(e, t, n, o, a, s, l, u, f) {
      var h;
      return _e(this, void 0, void 0, function() {
        var p, m, v, C, E, _, R;
        return Se(this, function(I) {
          switch (I.label) {
            case 0:
              if ((h = this.performanceClient) === null || h === void 0 || h.addQueueMeasurement(F.HandleServerTokenResponse, e.correlation_id), e.id_token) {
                if (p = new on(e.id_token || N.EMPTY_STRING, this.cryptoObj), a && !ee.isEmpty(a.nonce) && p.claims.nonce !== a.nonce)
                  throw re.createNonceMismatchError();
                if (o.maxAge || o.maxAge === 0) {
                  if (m = p.claims.auth_time, !m)
                    throw re.createAuthTimeNotFoundError();
                  on.checkMaxAge(m, o.maxAge);
                }
              }
              this.homeAccountIdentifier = At.generateHomeAccountId(e.client_info || N.EMPTY_STRING, t.authorityType, this.logger, this.cryptoObj, p), a && a.state && (v = bn.parseRequestState(this.cryptoObj, a.state)), e.key_id = e.key_id || o.sshKid || void 0, C = this.generateCacheRecord(e, t, n, o, p, s, a), I.label = 1;
            case 1:
              return I.trys.push([1, , 5, 8]), this.persistencePlugin && this.serializableCache ? (this.logger.verbose("Persistence enabled, calling beforeCacheAccess"), E = new pI(this.serializableCache, !0), [4, this.persistencePlugin.beforeCacheAccess(E)]) : [3, 3];
            case 2:
              I.sent(), I.label = 3;
            case 3:
              return l && !u && C.account && (_ = C.account.generateAccountKey(), R = this.cacheStorage.getAccount(_), !R) ? (this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache"), [2, r.generateAuthenticationResult(this.cryptoObj, t, C, !1, o, p, v, void 0, f)]) : [4, this.cacheStorage.saveCacheRecord(C)];
            case 4:
              return I.sent(), [3, 8];
            case 5:
              return this.persistencePlugin && this.serializableCache && E ? (this.logger.verbose("Persistence enabled, calling afterCacheAccess"), [4, this.persistencePlugin.afterCacheAccess(E)]) : [3, 7];
            case 6:
              I.sent(), I.label = 7;
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
      if (ee.isEmpty(u))
        throw re.createInvalidCacheEnvironmentError();
      var f, h;
      !ee.isEmpty(e.id_token) && a && (f = uo.createIdTokenEntity(this.homeAccountIdentifier, u, e.id_token || N.EMPTY_STRING, this.clientId, a.claims.tid || N.EMPTY_STRING), h = this.generateAccountEntity(e, a, t, l));
      var p = null;
      if (!ee.isEmpty(e.access_token)) {
        var m = e.scope ? Lt.fromString(e.scope) : new Lt(o.scopes || []), v = (typeof e.expires_in == "string" ? parseInt(e.expires_in, 10) : e.expires_in) || 0, C = (typeof e.ext_expires_in == "string" ? parseInt(e.ext_expires_in, 10) : e.ext_expires_in) || 0, E = (typeof e.refresh_in == "string" ? parseInt(e.refresh_in, 10) : e.refresh_in) || void 0, _ = n + v, R = _ + C, I = E && E > 0 ? n + E : void 0;
        p = fo.createAccessTokenEntity(this.homeAccountIdentifier, u, e.access_token || N.EMPTY_STRING, this.clientId, a ? a.claims.tid || N.EMPTY_STRING : t.tenant, m.printScopes(), _, R, this.cryptoObj, I, e.token_type, s, e.key_id, o.claims, o.requestedClaimsHash);
      }
      var S = null;
      ee.isEmpty(e.refresh_token) || (S = Yo.createRefreshTokenEntity(this.homeAccountIdentifier, u, e.refresh_token || N.EMPTY_STRING, this.clientId, e.foci, s));
      var A = null;
      return ee.isEmpty(e.foci) || (A = au.createAppMetadataEntity(this.clientId, u, e.foci)), new zi(h, f, p, S, A);
    }, r.prototype.generateAccountEntity = function(e, t, n, o) {
      var a = n.authorityType, s = o ? o.cloud_graph_host_name : N.EMPTY_STRING, l = o ? o.msgraph_host : N.EMPTY_STRING;
      if (a === Wt.Adfs)
        return this.logger.verbose("Authority type is ADFS, creating ADFS account"), At.createGenericAccount(this.homeAccountIdentifier, t, n, s, l);
      if (ee.isEmpty(e.client_info) && n.protocolMode === "AAD")
        throw re.createClientInfoEmptyError();
      return e.client_info ? At.createAccount(e.client_info, this.homeAccountIdentifier, t, n, s, l) : At.createGenericAccount(this.homeAccountIdentifier, t, n, s, l);
    }, r.generateAuthenticationResult = function(e, t, n, o, a, s, l, u, f) {
      var h, p, m;
      return _e(this, void 0, void 0, function() {
        var v, C, E, _, R, I, S, A, O, L, q;
        return Se(this, function(D) {
          switch (D.label) {
            case 0:
              if (v = N.EMPTY_STRING, C = [], E = null, R = N.EMPTY_STRING, !n.accessToken)
                return [3, 4];
              if (n.accessToken.tokenType !== We.POP)
                return [3, 2];
              if (I = new ri(e), S = n.accessToken, A = S.secret, O = S.keyId, !O)
                throw re.createKeyIdMissingError();
              return [4, I.signPopToken(A, O, a)];
            case 1:
              return v = D.sent(), [3, 3];
            case 2:
              v = n.accessToken.secret, D.label = 3;
            case 3:
              C = Lt.fromString(n.accessToken.target).asArray(), E = new Date(Number(n.accessToken.expiresOn) * 1e3), _ = new Date(Number(n.accessToken.extendedExpiresOn) * 1e3), D.label = 4;
            case 4:
              return n.appMetadata && (R = n.appMetadata.familyId === Bi ? Bi : N.EMPTY_STRING), L = (s == null ? void 0 : s.claims.oid) || (s == null ? void 0 : s.claims.sub) || N.EMPTY_STRING, q = (s == null ? void 0 : s.claims.tid) || N.EMPTY_STRING, u != null && u.spa_accountid && n.account && (n.account.nativeAccountId = u == null ? void 0 : u.spa_accountid), [2, {
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
var Wg = (
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
                throw re.createTokenRequestCannotBeMadeError();
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(F.AuthClientAcquireToken, t.correlationId), h = (a = this.performanceClient) === null || a === void 0 ? void 0 : a.startMeasurement("AuthCodeClientAcquireToken", t.correlationId), this.logger.info("in acquireToken call in auth-code client"), p = kr.nowSeconds(), (s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(F.AuthClientExecuteTokenRequest, t.correlationId), [4, this.executeTokenRequest(this.authority, t)];
            case 1:
              return m = R.sent(), v = (l = m.headers) === null || l === void 0 ? void 0 : l[gr.X_MS_REQUEST_ID], C = (u = m.headers) === null || u === void 0 ? void 0 : u[gr.X_MS_HTTP_VERSION], C && (h == null || h.addStaticFields({
                httpVerAuthority: C
              })), E = new Ss(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin, this.performanceClient), E.validateTokenResponse(m.body), (f = this.performanceClient) === null || f === void 0 || f.setPreQueueTime(F.HandleServerTokenResponse, t.correlationId), [2, E.handleServerTokenResponse(m.body, this.authority, p, t, n, void 0, void 0, void 0, v).then(function(I) {
                return h == null || h.endMeasurement({
                  success: !0
                }), I;
              }).catch(function(I) {
                throw _.logger.verbose("Error in fetching token in ACC", t.correlationId), h == null || h.endMeasurement({
                  errorCode: I.errorCode,
                  subErrorCode: I.subError,
                  success: !1
                }), I;
              })];
          }
        });
      });
    }, e.prototype.handleFragmentResponse = function(t, n) {
      var o = new Ss(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, null, null), a = new He(t), s = He.getDeserializedHash(a.getHash());
      if (o.validateServerAuthorizationCodeResponse(s, n, this.cryptoUtils), !s.code)
        throw re.createNoAuthCodeInServerResponseError();
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
                  h = Es(n.clientInfo, this.cryptoUtils), f = {
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
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.AuthClientCreateTokenRequestBody, t.correlationId), a = new Gi(), a.addClientId(this.config.authOptions.clientId), this.includeRedirectUri ? a.addRedirectUri(t.redirectUri) : so.validateRedirectUri(t.redirectUri), a.addScopes(t.scopes), a.addAuthorizationCode(t.code), a.addLibraryInfo(this.config.libraryInfo), a.addApplicationTelemetry(this.config.telemetry.application), a.addThrottling(), this.serverTelemetryManager && a.addServerTelemetry(this.serverTelemetryManager), t.codeVerifier && a.addCodeVerifier(t.codeVerifier), this.config.clientCredentials.clientSecret && a.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion && (s = this.config.clientCredentials.clientAssertion, a.addClientAssertion(s.assertion), a.addClientAssertionType(s.assertionType)), a.addGrantType(ys.AUTHORIZATION_CODE_GRANT), a.addClientInfo(), t.authenticationScheme !== We.POP ? [3, 2] : (l = new ri(this.cryptoUtils, this.performanceClient), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(F.PopTokenGenerateCnf, t.correlationId), [4, l.generateCnf(t)]);
            case 1:
              return u = v.sent(), a.addPopToken(u.reqCnfString), [3, 3];
            case 2:
              if (t.authenticationScheme === We.SSH)
                if (t.sshJwk)
                  a.addSshJwk(t.sshJwk);
                else
                  throw et.createMissingSshJwkError();
              v.label = 3;
            case 3:
              if (f = t.correlationId || this.config.cryptoInterface.createNewGuid(), a.addCorrelationId(f), (!ee.isEmptyObj(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && a.addClaims(t.claims, this.config.authOptions.clientCapabilities), h = void 0, t.clientInfo)
                try {
                  p = Es(t.clientInfo, this.cryptoUtils), h = {
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
                      p = jo(h.credential), a.addCcsOid(p);
                    } catch (C) {
                      this.logger.verbose("Could not parse home account ID for CCS Header: " + C);
                    }
                    break;
                  case pr.UPN:
                    a.addCcsUpn(h.credential);
                    break;
                }
              return t.tokenBodyParameters && a.addExtraQueryParameters(t.tokenBodyParameters), t.enableSpaAuthorizationCode && (!t.tokenBodyParameters || !t.tokenBodyParameters[Ie.RETURN_SPA_CODE]) && a.addExtraQueryParameters((m = {}, m[Ie.RETURN_SPA_CODE] = "1", m)), [2, a.createQueryString()];
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
              if ((n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.AuthClientCreateQueryString, t.correlationId), o = new Gi(), o.addClientId(this.config.authOptions.clientId), a = Gs(t.scopes || [], t.extraScopesToConsent || []), o.addScopes(a), o.addRedirectUri(t.redirectUri), s = t.correlationId || this.config.cryptoInterface.createNewGuid(), o.addCorrelationId(s), o.addResponseMode(t.responseMode), o.addResponseTypeCode(), o.addLibraryInfo(this.config.libraryInfo), o.addApplicationTelemetry(this.config.telemetry.application), o.addClientInfo(), t.codeChallenge && t.codeChallengeMethod && o.addCodeChallengeParams(t.codeChallenge, t.codeChallengeMethod), t.prompt && o.addPrompt(t.prompt), t.domainHint && o.addDomainHint(t.domainHint), t.prompt !== Ut.SELECT_ACCOUNT)
                if (t.sid && t.prompt === Ut.NONE)
                  this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request"), o.addSid(t.sid);
                else if (t.account) {
                  if (l = this.extractAccountSid(t.account), u = this.extractLoginHint(t.account), u) {
                    this.logger.verbose("createAuthCodeUrlQueryString: login_hint claim present on account"), o.addLoginHint(u);
                    try {
                      f = jo(t.account.homeAccountId), o.addCcsOid(f);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  } else if (l && t.prompt === Ut.NONE) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from account"), o.addSid(l);
                    try {
                      f = jo(t.account.homeAccountId), o.addCcsOid(f);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  } else if (t.loginHint)
                    this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from request"), o.addLoginHint(t.loginHint), o.addCcsUpn(t.loginHint);
                  else if (t.account.username) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from account"), o.addLoginHint(t.account.username);
                    try {
                      f = jo(t.account.homeAccountId), o.addCcsOid(f);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  }
                } else
                  t.loginHint && (this.logger.verbose("createAuthCodeUrlQueryString: No account, adding login_hint from request"), o.addLoginHint(t.loginHint), o.addCcsUpn(t.loginHint));
              else
                this.logger.verbose("createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints");
              return t.nonce && o.addNonce(t.nonce), t.state && o.addState(t.state), (!ee.isEmpty(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && o.addClaims(t.claims, this.config.authOptions.clientCapabilities), t.extraQueryParameters && o.addExtraQueryParameters(t.extraQueryParameters), t.nativeBroker ? (o.addNativeBroker(), t.authenticationScheme !== We.POP ? [3, 2] : (h = new ri(this.cryptoUtils), [4, h.generateCnf(t)])) : [3, 2];
            case 1:
              p = m.sent(), o.addPopToken(p.reqCnfString), m.label = 2;
            case 2:
              return [2, o.createQueryString()];
          }
        });
      });
    }, e.prototype.createLogoutUrlQueryString = function(t) {
      var n = new Gi();
      return t.postLogoutRedirectUri && n.addPostLogoutRedirectUri(t.postLogoutRedirectUri), t.correlationId && n.addCorrelationId(t.correlationId), t.idTokenHint && n.addIdTokenHint(t.idTokenHint), t.state && n.addState(t.state), t.logoutHint && n.addLogoutHint(t.logoutHint), t.extraQueryParameters && n.addExtraQueryParameters(t.extraQueryParameters), n.createQueryString();
    }, e.prototype.extractAccountSid = function(t) {
      var n;
      return ((n = t.idTokenClaims) === null || n === void 0 ? void 0 : n.sid) || null;
    }, e.prototype.extractLoginHint = function(t) {
      var n;
      return ((n = t.idTokenClaims) === null || n === void 0 ? void 0 : n.login_hint) || null;
    }, e;
  }(Ou)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Vg = (
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
              })), C = (u = m.headers) === null || u === void 0 ? void 0 : u[gr.X_MS_REQUEST_ID], E = new Ss(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin), E.validateTokenResponse(m.body), (f = this.performanceClient) === null || f === void 0 || f.setPreQueueTime(F.HandleServerTokenResponse, t.correlationId), [2, E.handleServerTokenResponse(m.body, this.authority, p, t, void 0, void 0, !0, t.forceCache, C).then(function(I) {
                return h == null || h.endMeasurement({
                  success: !0
                }), I;
              }).catch(function(I) {
                throw _.logger.verbose("Error in fetching refresh token", t.correlationId), h == null || h.endMeasurement({
                  errorCode: I.errorCode,
                  subErrorCode: I.subError,
                  success: !1
                }), I;
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
            throw re.createNoAccountInSilentRequestError();
          if (l = this.cacheManager.isAppMetadataFOCI(t.account.environment), l)
            try {
              return (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(F.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), [2, this.acquireTokenWithCachedRefreshToken(t, !0)];
            } catch (p) {
              if (u = p instanceof Gr && p.errorCode === Qo.noTokensFoundError.code, f = p instanceof yo && p.errorCode === Ip.INVALID_GRANT_ERROR && p.subError === Ip.CLIENT_MISMATCH_ERROR, u || f)
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
          }), f = $e($e({}, t), { refreshToken: u.secret, authenticationScheme: t.authenticationScheme || We.BEARER, ccsCredential: {
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
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.RefreshTokenClientCreateTokenRequestBody, t.correlationId), s = t.correlationId, l = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(F.BaseClientCreateTokenRequestHeaders, s), u = new Gi(), u.addClientId(this.config.authOptions.clientId), u.addScopes(t.scopes), u.addGrantType(ys.REFRESH_TOKEN_GRANT), u.addClientInfo(), u.addLibraryInfo(this.config.libraryInfo), u.addApplicationTelemetry(this.config.telemetry.application), u.addThrottling(), this.serverTelemetryManager && u.addServerTelemetry(this.serverTelemetryManager), u.addCorrelationId(s), u.addRefreshToken(t.refreshToken), this.config.clientCredentials.clientSecret && u.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion && (f = this.config.clientCredentials.clientAssertion, u.addClientAssertion(f.assertion), u.addClientAssertionType(f.assertionType)), t.authenticationScheme !== We.POP ? [3, 2] : (h = new ri(this.cryptoUtils, this.performanceClient), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(F.PopTokenGenerateCnf, t.correlationId), [4, h.generateCnf(t)]);
            case 1:
              return p = v.sent(), u.addPopToken(p.reqCnfString), [3, 3];
            case 2:
              if (t.authenticationScheme === We.SSH)
                if (t.sshJwk)
                  u.addSshJwk(t.sshJwk);
                else
                  throw l == null || l.endMeasurement({
                    success: !1
                  }), et.createMissingSshJwkError();
              v.label = 3;
            case 3:
              if ((!ee.isEmptyObj(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && u.addClaims(t.claims, this.config.authOptions.clientCapabilities), this.config.systemOptions.preventCorsPreflight && t.ccsCredential)
                switch (t.ccsCredential.type) {
                  case pr.HOME_ACCOUNT_ID:
                    try {
                      m = jo(t.ccsCredential.credential), u.addCcsOid(m);
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
  }(Ou)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var gI = (
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
              if (n = a.sent(), n instanceof re && n.errorCode === j.tokenRefreshRequired.code)
                return o = new Vg(this.config, this.performanceClient), [2, o.acquireTokenByRefreshToken(t)];
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
                throw (n = this.serverTelemetryManager) === null || n === void 0 || n.setCacheOutcome(qn.FORCE_REFRESH), this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because forceRefresh is true."), re.createRefreshRequiredError();
              if (!this.config.cacheOptions.claimsBasedCachingEnabled && !ee.isEmptyObj(t.claims))
                throw (o = this.serverTelemetryManager) === null || o === void 0 || o.setCacheOutcome(qn.CLAIMS_REQUESTED_CACHE_SKIPPED), this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because claims-based caching is disabled and claims were requested."), re.createRefreshRequiredError();
              if (!t.account)
                throw re.createNoAccountInSilentRequestError();
              if (u = t.authority || this.authority.getPreferredCache(), f = this.cacheManager.readCacheRecord(t.account, t, u), f.accessToken) {
                if (kr.wasClockTurnedBack(f.accessToken.cachedAt) || kr.isTokenExpired(f.accessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds))
                  throw (s = this.serverTelemetryManager) === null || s === void 0 || s.setCacheOutcome(qn.CACHED_ACCESS_TOKEN_EXPIRED), this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token is expired or will expire within " + this.config.systemOptions.tokenRenewalOffsetSeconds + " seconds."), re.createRefreshRequiredError();
                if (f.accessToken.refreshOn && kr.isTokenExpired(f.accessToken.refreshOn, 0))
                  throw (l = this.serverTelemetryManager) === null || l === void 0 || l.setCacheOutcome(qn.REFRESH_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token's refreshOn property has been exceeded'."), re.createRefreshRequiredError();
              } else
                throw (a = this.serverTelemetryManager) === null || a === void 0 || a.setCacheOutcome(qn.NO_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties."), re.createRefreshRequiredError();
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
              if (t.idToken && (o = new on(t.idToken.secret, this.config.cryptoInterface)), n.maxAge || n.maxAge === 0) {
                if (a = o == null ? void 0 : o.claims.auth_time, !a)
                  throw re.createAuthTimeNotFoundError();
                on.checkMaxAge(a, n.maxAge);
              }
              return [4, Ss.generateAuthenticationResult(this.cryptoUtils, this.authority, t, !0, n, o)];
            case 1:
              return [2, s.sent()];
          }
        });
      });
    }, e;
  }(Ou)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
function mI(r) {
  return r.hasOwnProperty("authorization_endpoint") && r.hasOwnProperty("token_endpoint") && r.hasOwnProperty("issuer") && r.hasOwnProperty("jwks_uri");
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
var jg = { endpointMetadata: { "https://login.microsoftonline.com/common/": { token_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/common/": { token_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/common/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/common/": { token_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/consumers/": { token_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/consumers/": { token_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/consumers/": { token_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/organizations/": { token_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/organizations/": { token_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/organizations/": { token_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" } }, instanceDiscoveryMetadata: { "https://login.microsoftonline.com/common/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/common/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/common/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/consumers/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/consumers/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/consumers/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/organizations/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/organizations/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/organizations/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] } } }, Rp = jg.endpointMetadata, kp = jg.instanceDiscoveryMetadata;
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Yi;
(function(r) {
  r.AAD = "AAD", r.OIDC = "OIDC";
})(Yi || (Yi = {}));
/*! @azure/msal-common v13.3.1 2023-10-27 */
var su = (
  /** @class */
  function() {
    function r() {
      this.expiresAt = kr.nowSeconds() + Ki.REFRESH_TIME_SECONDS;
    }
    return r.prototype.updateCloudDiscoveryMetadata = function(e, t) {
      this.aliases = e.aliases, this.preferred_cache = e.preferred_cache, this.preferred_network = e.preferred_network, this.aliasesFromNetwork = t;
    }, r.prototype.updateEndpointMetadata = function(e, t) {
      this.authorization_endpoint = e.authorization_endpoint, this.token_endpoint = e.token_endpoint, this.end_session_endpoint = e.end_session_endpoint, this.issuer = e.issuer, this.endpointsFromNetwork = t, this.jwks_uri = e.jwks_uri;
    }, r.prototype.updateCanonicalAuthority = function(e) {
      this.canonical_authority = e;
    }, r.prototype.resetExpiresAt = function() {
      this.expiresAt = kr.nowSeconds() + Ki.REFRESH_TIME_SECONDS;
    }, r.prototype.isExpired = function() {
      return this.expiresAt <= kr.nowSeconds();
    }, r.isAuthorityMetadataEntity = function(e, t) {
      return t ? e.indexOf(Ki.CACHE_KEY) === 0 && t.hasOwnProperty("aliases") && t.hasOwnProperty("preferred_cache") && t.hasOwnProperty("preferred_network") && t.hasOwnProperty("canonical_authority") && t.hasOwnProperty("authorization_endpoint") && t.hasOwnProperty("token_endpoint") && t.hasOwnProperty("issuer") && t.hasOwnProperty("aliasesFromNetwork") && t.hasOwnProperty("endpointsFromNetwork") && t.hasOwnProperty("expiresAt") && t.hasOwnProperty("jwks_uri") : !1;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
function vI(r) {
  return r.hasOwnProperty("tenant_discovery_endpoint") && r.hasOwnProperty("metadata");
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
function yI(r) {
  return r.hasOwnProperty("error") && r.hasOwnProperty("error_description");
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
var CI = (
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
              return f = m.sent(), f.status === Vo.httpSuccess && (l = f.body, t.region_source = Bn.IMDS), f.status !== Vo.httpBadRequest ? [3, 5] : ((a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(F.RegionDiscoveryGetCurrentVersion, this.correlationId), [4, this.getCurrentVersion(u)]);
            case 3:
              return h = m.sent(), h ? ((s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(F.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [4, this.getRegionFromIMDS(h, u)]) : (t.region_source = Bn.FAILED_AUTO_DETECTION, [2, null]);
            case 4:
              p = m.sent(), p.status === Vo.httpSuccess && (l = p.body, t.region_source = Bn.IMDS), m.label = 5;
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
              return n = o.sent(), n.status === Vo.httpBadRequest && n.body && n.body["newest-versions"] && n.body["newest-versions"].length > 0 ? [2, n.body["newest-versions"][0]] : [2, null];
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
var Qi = (
  /** @class */
  function() {
    function r(e, t, n, o, a, s, l) {
      this.canonicalAuthority = e, this._canonicalAuthority.validateAsUri(), this.networkInterface = t, this.cacheManager = n, this.authorityOptions = o, this.regionDiscoveryMetadata = { region_used: void 0, region_source: void 0, region_outcome: void 0 }, this.logger = a, this.performanceClient = s, this.correlationId = l, this.regionDiscovery = new CI(t, this.performanceClient, this.correlationId);
    }
    return r.prototype.getAuthorityType = function(e) {
      if (e.HostNameAndPort.endsWith(N.CIAM_AUTH_URL))
        return Wt.Ciam;
      var t = e.PathSegments;
      if (t.length)
        switch (t[0].toLowerCase()) {
          case N.ADFS:
            return Wt.Adfs;
          case N.DSTS:
            return Wt.Dsts;
        }
      return Wt.Default;
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
        throw re.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
        throw re.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "deviceCodeEndpoint", {
      get: function() {
        if (this.discoveryComplete())
          return this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));
        throw re.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
            throw re.createLogoutNotSupportedError();
          return this.replacePath(this.metadata.end_session_endpoint);
        } else
          throw re.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
        throw re.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
        throw re.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.canReplaceTenant = function(e) {
      return e.PathSegments.length === 1 && !r.reservedTenantDomains.has(e.PathSegments[0]) && this.getAuthorityType(e) === Wt.Default && this.protocolMode === Yi.AAD;
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
        return this.authorityType === Wt.Adfs || this.authorityType === Wt.Dsts || this.protocolMode === Yi.OIDC ? this.canonicalAuthority + ".well-known/openid-configuration" : this.canonicalAuthority + "v2.0/.well-known/openid-configuration";
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
              return (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(F.AuthorityResolveEndpointsAsync, this.correlationId), o = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort), o || (o = new su(), o.updateCanonicalAuthority(this.canonicalAuthority)), (t = this.performanceClient) === null || t === void 0 || t.setPreQueueTime(F.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId), [4, this.updateCloudDiscoveryMetadata(o)];
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
              throw re.createUnableToGetOpenidConfigError(this.defaultOpenIdConfigurationEndpoint);
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
              return n = o.sent(), [2, mI(n.body) ? n.body : null];
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
      return this.canonicalAuthority in Rp ? Rp[this.canonicalAuthority] : null;
    }, r.prototype.updateMetadataWithRegionalInformation = function(e) {
      var t, n, o, a;
      return _e(this, void 0, void 0, function() {
        var s, l;
        return Se(this, function(u) {
          switch (u.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(F.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId), s = (n = this.authorityOptions.azureRegionConfiguration) === null || n === void 0 ? void 0 : n.azureRegion, s ? s !== N.AZURE_REGION_AUTO_DISCOVER_FLAG ? (this.regionDiscoveryMetadata.region_outcome = $i.CONFIGURED_NO_AUTO_DETECTION, this.regionDiscoveryMetadata.region_used = s, [2, r.replaceWithRegionalInformation(e, s)]) : ((o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(F.RegionDiscoveryDetectRegion, this.correlationId), [4, this.regionDiscovery.detectRegion((a = this.authorityOptions.azureRegionConfiguration) === null || a === void 0 ? void 0 : a.environmentRegion, this.regionDiscoveryMetadata)]) : [3, 2];
            case 1:
              if (l = u.sent(), l)
                return this.regionDiscoveryMetadata.region_outcome = $i.AUTO_DETECTION_REQUESTED_SUCCESSFUL, this.regionDiscoveryMetadata.region_used = l, [2, r.replaceWithRegionalInformation(e, l)];
              this.regionDiscoveryMetadata.region_outcome = $i.AUTO_DETECTION_REQUESTED_FAILED, u.label = 2;
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
      if (this.authorityType === Wt.Ciam)
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
              if (a = h.sent(), s = void 0, l = void 0, vI(a.body))
                s = a.body, l = s.metadata, this.logger.verbosePii("tenant_discovery_endpoint is: " + s.tenant_discovery_endpoint);
              else if (yI(a.body)) {
                if (this.logger.warning("A CloudInstanceDiscoveryErrorResponse was returned. The cloud instance discovery network request's status code is: " + a.status), s = a.body, s.error === N.INVALID_INSTANCE)
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
      return this.canonicalAuthority in kp ? kp[this.canonicalAuthority] : null;
    }, r.prototype.isInKnownAuthorities = function() {
      var e = this, t = this.authorityOptions.knownAuthorities.filter(function(n) {
        return He.getDomainFromUrl(n).toLowerCase() === e.hostnameAndPort;
      });
      return t.length > 0;
    }, r.generateAuthority = function(e, t) {
      var n;
      if (t && t.azureCloudInstance !== ji.None) {
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
      throw re.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
      ho.COMMON,
      ho.CONSUMERS,
      ho.ORGANIZATIONS
    ]), r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Ts = (
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
              s == null || s.addQueueMeasurement(F.AuthorityFactoryCreateDiscoveredInstance, l), u = Qi.transformCIAMAuthority(e), f = r.createInstance(u, t, n, o, a, s, l), p.label = 1;
            case 1:
              return p.trys.push([1, 3, , 4]), s == null || s.setPreQueueTime(F.AuthorityResolveEndpointsAsync, l), [4, f.resolveEndpointsAsync()];
            case 2:
              return p.sent(), [2, f];
            case 3:
              throw h = p.sent(), re.createEndpointDiscoveryIncompleteError(h);
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.createInstance = function(e, t, n, o, a, s, l) {
      if (ee.isEmpty(e))
        throw et.createUrlEmptyError();
      return new Qi(e, t, n, o, a, s, l);
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Is = (
  /** @class */
  function() {
    function r() {
      this.failedRequests = [], this.errors = [], this.cacheHits = 0;
    }
    return r.isServerTelemetryEntity = function(e, t) {
      var n = e.indexOf(Tt.CACHE_KEY) === 0, o = !0;
      return t && (o = t.hasOwnProperty("failedRequests") && t.hasOwnProperty("errors") && t.hasOwnProperty("cacheHits")), n && o;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Pp = (
  /** @class */
  function() {
    function r() {
    }
    return r.isThrottlingEntity = function(e, t) {
      var n = !1;
      e && (n = e.indexOf(qi.THROTTLING_PREFIX) === 0);
      var o = !0;
      return t && (o = t.hasOwnProperty("throttleTime")), n && o;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var wI = {
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
var os = {
  missingKidError: {
    code: "missing_kid_error",
    desc: "The JOSE Header for the requested JWT, JWS or JWK object requires a keyId to be configured as the 'kid' header claim. No 'kid' value was provided."
  },
  missingAlgError: {
    code: "missing_alg_error",
    desc: "The JOSE Header for the requested JWT, JWS or JWK object requires an algorithm to be specified as the 'alg' header claim. No 'alg' value was provided."
  }
}, Np = (
  /** @class */
  function(r) {
    or(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return o.name = "JoseHeaderError", Object.setPrototypeOf(o, e.prototype), o;
    }
    return e.createMissingKidError = function() {
      return new e(os.missingKidError.code, os.missingKidError.desc);
    }, e.createMissingAlgError = function() {
      return new e(os.missingAlgError.code, os.missingAlgError.desc);
    }, e;
  }(ue)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var EI = (
  /** @class */
  function() {
    function r(e) {
      this.typ = e.typ, this.alg = e.alg, this.kid = e.kid;
    }
    return r.getShrHeaderString = function(e) {
      if (!e.kid)
        throw Np.createMissingKidError();
      if (!e.alg)
        throw Np.createMissingAlgError();
      var t = new r({
        // Access Token PoP headers must have type pop, but the type header can be overriden for special cases
        typ: e.typ || ou.Pop,
        kid: e.kid,
        alg: e.alg
      });
      return JSON.stringify(t);
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var bI = (
  /** @class */
  function() {
    function r(e, t) {
      this.cacheOutcome = qn.NO_CACHE_HIT, this.cacheManager = t, this.apiId = e.apiId, this.correlationId = e.correlationId, this.wrapperSKU = e.wrapperSKU || N.EMPTY_STRING, this.wrapperVer = e.wrapperVer || N.EMPTY_STRING, this.telemetryCacheKey = Tt.CACHE_KEY + Ct.CACHE_KEY_SEPARATOR + e.clientId;
    }
    return r.prototype.generateCurrentRequestHeaderValue = function() {
      var e = "" + this.apiId + Tt.VALUE_SEPARATOR + this.cacheOutcome, t = [this.wrapperSKU, this.wrapperVer].join(Tt.VALUE_SEPARATOR), n = this.getRegionDiscoveryFields(), o = [e, n].join(Tt.VALUE_SEPARATOR);
      return [Tt.SCHEMA_VERSION, o, t].join(Tt.CATEGORY_SEPARATOR);
    }, r.prototype.generateLastRequestHeaderValue = function() {
      var e = this.getLastRequests(), t = r.maxErrorsToSend(e), n = e.failedRequests.slice(0, 2 * t).join(Tt.VALUE_SEPARATOR), o = e.errors.slice(0, t).join(Tt.VALUE_SEPARATOR), a = e.errors.length, s = t < a ? Tt.OVERFLOW_TRUE : Tt.OVERFLOW_FALSE, l = [a, s].join(Tt.VALUE_SEPARATOR);
      return [Tt.SCHEMA_VERSION, e.cacheHits, n, o, l].join(Tt.CATEGORY_SEPARATOR);
    }, r.prototype.cacheFailedRequest = function(e) {
      var t = this.getLastRequests();
      t.errors.length >= Tt.MAX_CACHED_ERRORS && (t.failedRequests.shift(), t.failedRequests.shift(), t.errors.shift()), t.failedRequests.push(this.apiId, this.correlationId), ee.isEmpty(e.subError) ? ee.isEmpty(e.errorCode) ? e && e.toString() ? t.errors.push(e.toString()) : t.errors.push(Tt.UNKNOWN_ERROR) : t.errors.push(e.errorCode) : t.errors.push(e.subError), this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t);
    }, r.prototype.incrementCacheHits = function() {
      var e = this.getLastRequests();
      return e.cacheHits += 1, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e), e.cacheHits;
    }, r.prototype.getLastRequests = function() {
      var e = new Is(), t = this.cacheManager.getServerTelemetry(this.telemetryCacheKey);
      return t || e;
    }, r.prototype.clearTelemetryCache = function() {
      var e = this.getLastRequests(), t = r.maxErrorsToSend(e), n = e.errors.length;
      if (t === n)
        this.cacheManager.removeItem(this.telemetryCacheKey);
      else {
        var o = new Is();
        o.failedRequests = e.failedRequests.slice(t * 2), o.errors = e.errors.slice(t), this.cacheManager.setServerTelemetry(this.telemetryCacheKey, o);
      }
    }, r.maxErrorsToSend = function(e) {
      var t, n = 0, o = 0, a = e.errors.length;
      for (t = 0; t < a; t++) {
        var s = e.failedRequests[2 * t] || N.EMPTY_STRING, l = e.failedRequests[2 * t + 1] || N.EMPTY_STRING, u = e.errors[t] || N.EMPTY_STRING;
        if (o += s.toString().length + l.toString().length + u.length + 3, o < Tt.MAX_LAST_HEADER_BYTES)
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
var Yg = (
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
      return hI;
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
        status: _s.InProgress,
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
      }), h.incompleteSubMeasurements = void 0, h = $e($e({}, h), { durationMs: Math.round(f), queuedTimeMs: u.totalQueueTime, queuedCount: u.totalQueueCount, queuedManuallyCompletedCount: u.manuallyCompletedCount, status: _s.Completed, incompleteSubsCount: p }), this.truncateIntegralFields(h, this.getIntFields()), this.emitEvents([h], e.correlationId), h;
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
var Op = (
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
), _I = (
  /** @class */
  function(r) {
    or(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.generateId = function() {
      return "callback-id";
    }, e.prototype.startPerformanceMeasuremeant = function() {
      return new Op();
    }, e.prototype.startPerformanceMeasurement = function() {
      return new Op();
    }, e.prototype.calculateQueuedTime = function(t, n) {
      return 0;
    }, e.prototype.addQueueMeasurement = function(t, n, o) {
    }, e.prototype.setPreQueueTime = function(t, n) {
    }, e;
  }(Yg)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var V = {
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
}, J = (
  /** @class */
  function(r) {
    Rt(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return Object.setPrototypeOf(o, e.prototype), o.name = "BrowserAuthError", o;
    }
    return e.createPkceNotGeneratedError = function(t) {
      return new e(V.pkceNotGenerated.code, V.pkceNotGenerated.desc + " Detail:" + t);
    }, e.createCryptoNotAvailableError = function(t) {
      return new e(V.cryptoDoesNotExist.code, V.cryptoDoesNotExist.desc + " Detail:" + t);
    }, e.createHttpMethodNotImplementedError = function(t) {
      return new e(V.httpMethodNotImplementedError.code, V.httpMethodNotImplementedError.desc + " Given Method: " + t);
    }, e.createEmptyNavigationUriError = function() {
      return new e(V.emptyNavigateUriError.code, V.emptyNavigateUriError.desc);
    }, e.createEmptyHashError = function(t) {
      return new e(V.hashEmptyError.code, V.hashEmptyError.desc + " Given Url: " + t);
    }, e.createHashDoesNotContainStateError = function() {
      return new e(V.hashDoesNotContainStateError.code, V.hashDoesNotContainStateError.desc);
    }, e.createHashDoesNotContainKnownPropertiesError = function() {
      return new e(V.hashDoesNotContainKnownPropertiesError.code, V.hashDoesNotContainKnownPropertiesError.desc);
    }, e.createUnableToParseStateError = function() {
      return new e(V.unableToParseStateError.code, V.unableToParseStateError.desc);
    }, e.createStateInteractionTypeMismatchError = function() {
      return new e(V.stateInteractionTypeMismatchError.code, V.stateInteractionTypeMismatchError.desc);
    }, e.createInteractionInProgressError = function() {
      return new e(V.interactionInProgress.code, V.interactionInProgress.desc);
    }, e.createPopupWindowError = function(t) {
      var n = V.popupWindowError.desc;
      return n = ee.isEmpty(t) ? n : n + " Details: " + t, new e(V.popupWindowError.code, n);
    }, e.createEmptyWindowCreatedError = function() {
      return new e(V.emptyWindowError.code, V.emptyWindowError.desc);
    }, e.createUserCancelledError = function() {
      return new e(V.userCancelledError.code, V.userCancelledError.desc);
    }, e.createMonitorPopupTimeoutError = function() {
      return new e(V.monitorPopupTimeoutError.code, V.monitorPopupTimeoutError.desc);
    }, e.createMonitorIframeTimeoutError = function() {
      return new e(V.monitorIframeTimeoutError.code, V.monitorIframeTimeoutError.desc);
    }, e.createRedirectInIframeError = function(t) {
      return new e(V.redirectInIframeError.code, V.redirectInIframeError.desc + " (window.parent !== window) => " + t);
    }, e.createBlockReloadInHiddenIframeError = function() {
      return new e(V.blockTokenRequestsInHiddenIframeError.code, V.blockTokenRequestsInHiddenIframeError.desc);
    }, e.createBlockAcquireTokenInPopupsError = function() {
      return new e(V.blockAcquireTokenInPopupsError.code, V.blockAcquireTokenInPopupsError.desc);
    }, e.createIframeClosedPrematurelyError = function() {
      return new e(V.iframeClosedPrematurelyError.code, V.iframeClosedPrematurelyError.desc);
    }, e.createSilentLogoutUnsupportedError = function() {
      return new e(V.silentLogoutUnsupportedError.code, V.silentLogoutUnsupportedError.desc);
    }, e.createNoAccountError = function() {
      return new e(V.noAccountError.code, V.noAccountError.desc);
    }, e.createSilentPromptValueError = function(t) {
      return new e(V.silentPromptValueError.code, V.silentPromptValueError.desc + " Given value: " + t);
    }, e.createUnableToParseTokenRequestCacheError = function() {
      return new e(V.unableToParseTokenRequestCacheError.code, V.unableToParseTokenRequestCacheError.desc);
    }, e.createNoTokenRequestCacheError = function() {
      return new e(V.noTokenRequestCacheError.code, V.noTokenRequestCacheError.desc);
    }, e.createAuthRequestNotSetError = function() {
      return new e(V.authRequestNotSet.code, V.authRequestNotSet.desc);
    }, e.createNoCachedAuthorityError = function() {
      return new e(V.noCachedAuthorityError.code, V.noCachedAuthorityError.desc);
    }, e.createInvalidCacheTypeError = function() {
      return new e(V.invalidCacheType.code, "" + V.invalidCacheType.desc);
    }, e.createNonBrowserEnvironmentError = function() {
      return new e(V.notInBrowserEnvironment.code, V.notInBrowserEnvironment.desc);
    }, e.createDatabaseNotOpenError = function() {
      return new e(V.databaseNotOpen.code, V.databaseNotOpen.desc);
    }, e.createNoNetworkConnectivityError = function() {
      return new e(V.noNetworkConnectivity.code, V.noNetworkConnectivity.desc);
    }, e.createPostRequestFailedError = function(t, n) {
      return new e(V.postRequestFailed.code, V.postRequestFailed.desc + " | Network client threw: " + t + " | Attempted to reach: " + n.split("?")[0]);
    }, e.createGetRequestFailedError = function(t, n) {
      return new e(V.getRequestFailed.code, V.getRequestFailed.desc + " | Network client threw: " + t + " | Attempted to reach: " + n.split("?")[0]);
    }, e.createFailedToParseNetworkResponseError = function(t) {
      return new e(V.failedToParseNetworkResponse.code, V.failedToParseNetworkResponse.desc + " | Attempted to reach: " + t.split("?")[0]);
    }, e.createUnableToLoadTokenError = function(t) {
      return new e(V.unableToLoadTokenError.code, V.unableToLoadTokenError.desc + " | " + t);
    }, e.createSigningKeyNotFoundInStorageError = function(t) {
      return new e(V.signingKeyNotFoundInStorage.code, V.signingKeyNotFoundInStorage.desc + " | No match found for KeyId: " + t);
    }, e.createAuthCodeRequiredError = function() {
      return new e(V.authCodeRequired.code, V.authCodeRequired.desc);
    }, e.createAuthCodeOrNativeAccountIdRequiredError = function() {
      return new e(V.authCodeOrNativeAccountRequired.code, V.authCodeOrNativeAccountRequired.desc);
    }, e.createSpaCodeAndNativeAccountIdPresentError = function() {
      return new e(V.spaCodeAndNativeAccountPresent.code, V.spaCodeAndNativeAccountPresent.desc);
    }, e.createDatabaseUnavailableError = function() {
      return new e(V.databaseUnavailable.code, V.databaseUnavailable.desc);
    }, e.createUnableToAcquireTokenFromNativePlatformError = function() {
      return new e(V.unableToAcquireTokenFromNativePlatform.code, V.unableToAcquireTokenFromNativePlatform.desc);
    }, e.createNativeHandshakeTimeoutError = function() {
      return new e(V.nativeHandshakeTimeout.code, V.nativeHandshakeTimeout.desc);
    }, e.createNativeExtensionNotInstalledError = function() {
      return new e(V.nativeExtensionNotInstalled.code, V.nativeExtensionNotInstalled.desc);
    }, e.createNativeConnectionNotEstablishedError = function() {
      return new e(V.nativeConnectionNotEstablished.code, V.nativeConnectionNotEstablished.desc);
    }, e.createNativeBrokerCalledBeforeInitialize = function() {
      return new e(V.nativeBrokerCalledBeforeInitialize.code, V.nativeBrokerCalledBeforeInitialize.desc);
    }, e.createNativePromptParameterNotSupportedError = function() {
      return new e(V.nativePromptNotSupported.code, V.nativePromptNotSupported.desc);
    }, e;
  }(ue)
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
}, Ui = {
  CHANNEL_ID: "53ee284d-920a-4b59-9d30-a60315b26836",
  PREFERRED_EXTENSION_ID: "ppnbnpeolgkicgegkbkbjmhlideopiji",
  MATS_TELEMETRY: "MATS"
}, En;
(function(r) {
  r.HandshakeRequest = "Handshake", r.HandshakeResponse = "HandshakeResponse", r.GetToken = "GetToken", r.Response = "Response";
})(En || (En = {}));
var pt;
(function(r) {
  r.LocalStorage = "localStorage", r.SessionStorage = "sessionStorage", r.MemoryStorage = "memoryStorage";
})(pt || (pt = {}));
var en;
(function(r) {
  r.GET = "GET", r.POST = "POST";
})(en || (en = {}));
var Be;
(function(r) {
  r.AUTHORITY = "authority", r.ACQUIRE_TOKEN_ACCOUNT = "acquireToken.account", r.SESSION_STATE = "session.state", r.REQUEST_STATE = "request.state", r.NONCE_IDTOKEN = "nonce.id_token", r.ORIGIN_URI = "request.origin", r.RENEW_STATUS = "token.renew.status", r.URL_HASH = "urlHash", r.REQUEST_PARAMS = "request.params", r.SCOPES = "scopes", r.INTERACTION_STATUS_KEY = "interaction.status", r.CCS_CREDENTIAL = "ccs.credential", r.CORRELATION_ID = "request.correlationId", r.NATIVE_REQUEST = "request.native", r.REDIRECT_CONTEXT = "request.redirect.context";
})(Be || (Be = {}));
var Zr;
(function(r) {
  r.ACCOUNT_KEYS = "msal.account.keys", r.TOKEN_KEYS = "msal.token.keys";
})(Zr || (Zr = {}));
var Jo;
(function(r) {
  r.WRAPPER_SKU = "wrapper.sku", r.WRAPPER_VER = "wrapper.version";
})(Jo || (Jo = {}));
var Ze;
(function(r) {
  r[r.acquireTokenRedirect = 861] = "acquireTokenRedirect", r[r.acquireTokenPopup = 862] = "acquireTokenPopup", r[r.ssoSilent = 863] = "ssoSilent", r[r.acquireTokenSilent_authCode = 864] = "acquireTokenSilent_authCode", r[r.handleRedirectPromise = 865] = "handleRedirectPromise", r[r.acquireTokenByCode = 866] = "acquireTokenByCode", r[r.acquireTokenSilent_silentFlow = 61] = "acquireTokenSilent_silentFlow", r[r.logout = 961] = "logout", r[r.logoutPopup = 962] = "logoutPopup";
})(Ze || (Ze = {}));
var se;
(function(r) {
  r.Redirect = "redirect", r.Popup = "popup", r.Silent = "silent", r.None = "none";
})(se || (se = {}));
var Mp;
(function(r) {
  r.Startup = "startup", r.Login = "login", r.Logout = "logout", r.AcquireToken = "acquireToken", r.SsoSilent = "ssoSilent", r.HandleRedirect = "handleRedirect", r.None = "none";
})(Mp || (Mp = {}));
var xp = {
  scopes: oa
}, ni = "jwk", Lp;
(function(r) {
  r.React = "@azure/msal-react", r.Angular = "@azure/msal-angular";
})(Lp || (Lp = {}));
var cu = "msal.db", SI = 1, TI = cu + ".keys", rr;
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
}, As = (
  /** @class */
  function(r) {
    Rt(e, r);
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
var Dp = (
  /** @class */
  function() {
    function r(e) {
      this.validateWindowStorage(e), this.windowStorage = window[e];
    }
    return r.prototype.validateWindowStorage = function(e) {
      if (e !== pt.LocalStorage && e !== pt.SessionStorage)
        throw As.createStorageNotSupportedError(e);
      var t = !!window[e];
      if (!t)
        throw As.createStorageNotSupportedError(e);
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
var lu = (
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
var Qg = (
  /** @class */
  function() {
    function r() {
    }
    return r.extractBrowserRequestState = function(e, t) {
      if (ee.isEmpty(t))
        return null;
      try {
        var n = bn.parseRequestState(e, t);
        return n.libraryState.meta;
      } catch (o) {
        throw re.createInvalidStateError(t, o);
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
var uu = (
  /** @class */
  function(r) {
    Rt(e, r);
    function e(t, n, o, a) {
      var s = r.call(this, t, o, a) || this;
      return s.COOKIE_LIFE_MULTIPLIER = 24 * 60 * 60 * 1e3, s.cacheConfig = n, s.logger = a, s.internalStorage = new lu(), s.browserStorage = s.setupBrowserStorage(s.cacheConfig.cacheLocation), s.temporaryCacheStorage = s.setupTemporaryCacheStorage(s.cacheConfig.temporaryCacheLocation, s.cacheConfig.cacheLocation), n.cacheMigrationEnabled && (s.migrateCacheEntries(), s.createKeyMaps()), s;
    }
    return e.prototype.setupBrowserStorage = function(t) {
      switch (t) {
        case pt.LocalStorage:
        case pt.SessionStorage:
          try {
            return new Dp(t);
          } catch (n) {
            this.logger.verbose(n);
            break;
          }
      }
      return this.cacheConfig.cacheLocation = pt.MemoryStorage, new lu();
    }, e.prototype.setupTemporaryCacheStorage = function(t, n) {
      switch (n) {
        case pt.LocalStorage:
        case pt.SessionStorage:
          try {
            return new Dp(t || pt.SessionStorage);
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
      var n = this.getItem(Zr.ACCOUNT_KEYS), o = this.getItem(Zr.TOKEN_KEYS + "." + this.clientId);
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
                  if (uo.isIdTokenEntity(u)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - idToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - idToken with key: " + s + " found, saving key to token key map");
                    var f = er.toObject(new uo(), u), h = t.updateCredentialCacheKey(s, f);
                    t.addTokenKey(h, he.ID_TOKEN);
                    return;
                  } else
                    t.logger.trace("BrowserCacheManager:createKeyMaps - key found matching idToken schema with value containing idToken credentialType field but value failed IdTokenEntity validation, skipping."), t.logger.tracePii("BrowserCacheManager:createKeyMaps - failed idToken validation on key: " + s);
                  break;
                case he.ACCESS_TOKEN:
                case he.ACCESS_TOKEN_WITH_AUTH_SCHEME:
                  if (fo.isAccessTokenEntity(u)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - accessToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - accessToken with key: " + s + " found, saving key to token key map");
                    var p = er.toObject(new fo(), u), h = t.updateCredentialCacheKey(s, p);
                    t.addTokenKey(h, he.ACCESS_TOKEN);
                    return;
                  } else
                    t.logger.trace("BrowserCacheManager:createKeyMaps - key found matching accessToken schema with value containing accessToken credentialType field but value failed AccessTokenEntity validation, skipping."), t.logger.tracePii("BrowserCacheManager:createKeyMaps - failed accessToken validation on key: " + s);
                  break;
                case he.REFRESH_TOKEN:
                  if (Yo.isRefreshTokenEntity(u)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - refreshToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - refreshToken with key: " + s + " found, saving key to token key map");
                    var m = er.toObject(new Yo(), u), h = t.updateCredentialCacheKey(s, m);
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
            v && At.isAccountEntity(v) && (t.logger.trace("BrowserCacheManager:createKeyMaps - account found, saving key to account key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - account with key: " + s + " found, saving key to account key map"), t.addAccountKeyToMap(s));
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
      return !o || !At.isAccountEntity(o) ? (this.removeAccountKeyFromMap(t), null) : er.toObject(new At(), o);
    }, e.prototype.setAccount = function(t) {
      this.logger.trace("BrowserCacheManager.setAccount called");
      var n = t.generateAccountKey();
      this.setItem(n, JSON.stringify(t)), this.addAccountKeyToMap(n);
    }, e.prototype.getAccountKeys = function() {
      this.logger.trace("BrowserCacheManager.getAccountKeys called");
      var t = this.getItem(Zr.ACCOUNT_KEYS);
      return t ? JSON.parse(t) : (this.logger.verbose("BrowserCacheManager.getAccountKeys - No account keys found"), []);
    }, e.prototype.addAccountKeyToMap = function(t) {
      this.logger.trace("BrowserCacheManager.addAccountKeyToMap called"), this.logger.tracePii("BrowserCacheManager.addAccountKeyToMap called with key: " + t);
      var n = this.getAccountKeys();
      n.indexOf(t) === -1 ? (n.push(t), this.setItem(Zr.ACCOUNT_KEYS, JSON.stringify(n)), this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key added")) : this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key already exists in map");
    }, e.prototype.removeAccountKeyFromMap = function(t) {
      this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap called"), this.logger.tracePii("BrowserCacheManager.removeAccountKeyFromMap called with key: " + t);
      var n = this.getAccountKeys(), o = n.indexOf(t);
      o > -1 ? (n.splice(o, 1), this.setItem(Zr.ACCOUNT_KEYS, JSON.stringify(n)), this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap account key removed")) : this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap key not found in existing map");
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
      var t = this.getItem(Zr.TOKEN_KEYS + "." + this.clientId);
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
          this.logger.error("BrowserCacheManager:addTokenKey - CredentialType provided invalid. CredentialType: " + n), re.createUnexpectedCredentialTypeError();
      }
      this.setItem(Zr.TOKEN_KEYS + "." + this.clientId, JSON.stringify(o));
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
          this.logger.error("BrowserCacheManager:removeTokenKey - CredentialType provided invalid. CredentialType: " + n), re.createUnexpectedCredentialTypeError();
      }
      this.setItem(Zr.TOKEN_KEYS + "." + this.clientId, JSON.stringify(o));
    }, e.prototype.getIdTokenCredential = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), this.removeTokenKey(t, he.ID_TOKEN), null;
      var o = this.validateAndParseJson(n);
      return !o || !uo.isIdTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), this.removeTokenKey(t, he.ID_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getIdTokenCredential: cache hit"), er.toObject(new uo(), o));
    }, e.prototype.setIdTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setIdTokenCredential called");
      var n = t.generateCredentialKey();
      this.setItem(n, JSON.stringify(t)), this.addTokenKey(n, he.ID_TOKEN);
    }, e.prototype.getAccessTokenCredential = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), this.removeTokenKey(t, he.ACCESS_TOKEN), null;
      var o = this.validateAndParseJson(n);
      return !o || !fo.isAccessTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), this.removeTokenKey(t, he.ACCESS_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: cache hit"), er.toObject(new fo(), o));
    }, e.prototype.setAccessTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setAccessTokenCredential called");
      var n = t.generateCredentialKey();
      this.setItem(n, JSON.stringify(t)), this.addTokenKey(n, he.ACCESS_TOKEN);
    }, e.prototype.getRefreshTokenCredential = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), this.removeTokenKey(t, he.REFRESH_TOKEN), null;
      var o = this.validateAndParseJson(n);
      return !o || !Yo.isRefreshTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), this.removeTokenKey(t, he.REFRESH_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: cache hit"), er.toObject(new Yo(), o));
    }, e.prototype.setRefreshTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setRefreshTokenCredential called");
      var n = t.generateCredentialKey();
      this.setItem(n, JSON.stringify(t)), this.addTokenKey(n, he.REFRESH_TOKEN);
    }, e.prototype.getAppMetadata = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return !o || !au.isAppMetadataEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getAppMetadata: cache hit"), er.toObject(new au(), o));
    }, e.prototype.setAppMetadata = function(t) {
      this.logger.trace("BrowserCacheManager.setAppMetadata called");
      var n = t.generateAppMetadataKey();
      this.setItem(n, JSON.stringify(t));
    }, e.prototype.getServerTelemetry = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return !o || !Is.isServerTelemetryEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getServerTelemetry: cache hit"), er.toObject(new Is(), o));
    }, e.prototype.setServerTelemetry = function(t, n) {
      this.logger.trace("BrowserCacheManager.setServerTelemetry called"), this.setItem(t, JSON.stringify(n));
    }, e.prototype.getAuthorityMetadata = function(t) {
      var n = this.internalStorage.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getAuthorityMetadata: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return o && su.isAuthorityMetadataEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getAuthorityMetadata: cache hit"), er.toObject(new su(), o)) : null;
    }, e.prototype.getAuthorityMetadataKeys = function() {
      var t = this, n = this.internalStorage.getKeys();
      return n.filter(function(o) {
        return t.isAuthorityMetadata(o);
      });
    }, e.prototype.setWrapperMetadata = function(t, n) {
      this.internalStorage.setItem(Jo.WRAPPER_SKU, t), this.internalStorage.setItem(Jo.WRAPPER_VER, n);
    }, e.prototype.getWrapperMetadata = function() {
      var t = this.internalStorage.getItem(Jo.WRAPPER_SKU) || N.EMPTY_STRING, n = this.internalStorage.getItem(Jo.WRAPPER_VER) || N.EMPTY_STRING;
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
        throw re.createMultipleMatchingAccountsInCacheError();
      return null;
    }, e.prototype.getThrottlingCache = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return !o || !Pp.isThrottlingEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getThrottlingCache: cache hit"), er.toObject(new Pp(), o));
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
      return ku(this.browserStorage.getKeys(), this.temporaryCacheStorage.getKeys());
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
      return n ? JSON.stringify(t) : ee.startsWith(t, N.CACHE_PREFIX) || ee.startsWith(t, yt.ADAL_ID_TOKEN) ? t : N.CACHE_PREFIX + "." + this.clientId + "." + t;
    }, e.prototype.generateAuthorityKey = function(t) {
      var n = bn.parseRequestState(this.cryptoImpl, t).libraryState.id;
      return this.generateCacheKey(Be.AUTHORITY + "." + n);
    }, e.prototype.generateNonceKey = function(t) {
      var n = bn.parseRequestState(this.cryptoImpl, t).libraryState.id;
      return this.generateCacheKey(Be.NONCE_IDTOKEN + "." + n);
    }, e.prototype.generateStateKey = function(t) {
      var n = bn.parseRequestState(this.cryptoImpl, t).libraryState.id;
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
      } else if (!ee.isEmpty(a)) {
        var h = {
          credential: a,
          type: pr.UPN
        };
        this.setTemporaryCache(Be.CCS_CREDENTIAL, JSON.stringify(h), !0);
      }
    }, e.prototype.resetRequestCache = function(t) {
      var n = this;
      this.logger.trace("BrowserCacheManager.resetRequestCache called"), ee.isEmpty(t) || this.getKeys().forEach(function(o) {
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
            var s = Qg.extractBrowserRequestState(n.cryptoImpl, a);
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
        throw J.createNoTokenRequestCacheError();
      var a = this.validateAndParseJson(n.base64Decode(o));
      if (!a)
        throw J.createUnableToParseTokenRequestCacheError();
      if (this.removeItem(this.generateCacheKey(Be.REQUEST_PARAMS)), ee.isEmpty(a.authority)) {
        var s = this.generateAuthorityKey(t), l = this.getTemporaryCache(s);
        if (!l)
          throw J.createNoCachedAuthorityError();
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
          throw J.createInteractionInProgressError();
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
        var a = new on(o, this.cryptoImpl);
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
), II = function(r, e) {
  var t = {
    cacheLocation: pt.MemoryStorage,
    temporaryCacheLocation: pt.MemoryStorage,
    storeAuthStateInCookie: !1,
    secureCookies: !1,
    cacheMigrationEnabled: !1,
    claimsBasedCachingEnabled: !0
  };
  return new uu(r, t, ws, e);
};
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Ml = "@azure/msal-browser", Wi = "2.38.3";
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var AI = (
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
                method: en.GET,
                headers: this.getFetchHeaders(t)
              })];
            case 1:
              return n = s.sent(), [3, 3];
            case 2:
              throw o = s.sent(), window.navigator.onLine ? J.createGetRequestFailedError(o, e) : J.createNoNetworkConnectivityError();
            case 3:
              return s.trys.push([3, 5, , 6]), a = {
                headers: this.getHeaderDict(n.headers)
              }, [4, n.json()];
            case 4:
              return [2, (a.body = s.sent(), a.status = n.status, a)];
            case 5:
              throw s.sent(), J.createFailedToParseNetworkResponseError(e);
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
                method: en.POST,
                headers: this.getFetchHeaders(t),
                body: n
              })];
            case 2:
              return o = l.sent(), [3, 4];
            case 3:
              throw a = l.sent(), window.navigator.onLine ? J.createPostRequestFailedError(a, e) : J.createNoNetworkConnectivityError();
            case 4:
              return l.trys.push([4, 6, , 7]), s = {
                headers: this.getHeaderDict(o.headers)
              }, [4, o.json()];
            case 5:
              return [2, (s.body = l.sent(), s.status = o.status, s)];
            case 6:
              throw l.sent(), J.createFailedToParseNetworkResponseError(e);
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
var RI = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.sendGetRequestAsync = function(e, t) {
      return G(this, void 0, void 0, function() {
        return z(this, function(n) {
          return [2, this.sendRequestAsync(e, en.GET, t)];
        });
      });
    }, r.prototype.sendPostRequestAsync = function(e, t) {
      return G(this, void 0, void 0, function() {
        return z(this, function(n) {
          return [2, this.sendRequestAsync(e, en.POST, t)];
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
          (l.status < 200 || l.status >= 300) && (t === en.POST ? s(J.createPostRequestFailedError("Failed with status " + l.status, e)) : s(J.createGetRequestFailedError("Failed with status " + l.status, e)));
          try {
            var u = JSON.parse(l.responseText), f = {
              headers: o.getHeaderDict(l),
              body: u,
              status: l.status
            };
            a(f);
          } catch {
            s(J.createFailedToParseNetworkResponseError(e));
          }
        }, l.onerror = function() {
          window.navigator.onLine ? t === en.POST ? s(J.createPostRequestFailedError("Failed with status " + l.status, e)) : s(J.createGetRequestFailedError("Failed with status " + l.status, e)) : s(J.createNoNetworkConnectivityError());
        }, t === en.POST && n && n.body)
          l.send(n.body);
        else if (t === en.GET)
          l.send();
        else
          throw J.createHttpMethodNotImplementedError(t);
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
      return window.fetch && window.Headers ? new AI() : new RI();
    }, r.blockReloadInHiddenIframes = function() {
      var e = He.hashContainsKnownProperties(window.location.hash);
      if (e && r.isInIframe())
        throw J.createBlockReloadInHiddenIframeError();
    }, r.blockRedirectInIframe = function(e, t) {
      var n = r.isInIframe();
      if (e === se.Redirect && n && !t)
        throw J.createRedirectInIframeError(n);
    }, r.blockAcquireTokenInPopups = function() {
      if (r.isInPopup())
        throw J.createBlockAcquireTokenInPopupsError();
    }, r.blockNonBrowserEnvironment = function(e) {
      if (!e)
        throw J.createNonBrowserEnvironmentError();
    }, r.blockNativeBrokerCalledBeforeInitialized = function(e, t) {
      if (e && !t)
        throw J.createNativeBrokerCalledBeforeInitialize();
    }, r.detectIEOrEdge = function() {
      var e = window.navigator.userAgent, t = e.indexOf("MSIE "), n = e.indexOf("Trident/"), o = e.indexOf("Edge/"), a = t > 0 || n > 0, s = o > 0;
      return a || s;
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Jg = (
  /** @class */
  function() {
    function r(e, t, n, o, a, s, l, u, f) {
      this.config = e, this.browserStorage = t, this.browserCrypto = n, this.networkClient = this.config.system.networkClient, this.eventHandler = a, this.navigationClient = s, this.nativeMessageHandler = u, this.correlationId = f || this.browserCrypto.createNewGuid(), this.logger = o.clone(qr.MSAL_SKU, Wi, this.correlationId), this.performanceClient = l;
    }
    return r.prototype.clearCacheOnLogout = function(e) {
      return G(this, void 0, void 0, function() {
        return z(this, function(t) {
          switch (t.label) {
            case 0:
              if (!e)
                return [3, 5];
              At.accountInfoIsEqual(e, this.browserStorage.getActiveAccount(), !1) && (this.logger.verbose("Setting active account to null"), this.browserStorage.setActiveAccount(null)), t.label = 1;
            case 1:
              return t.trys.push([1, 3, , 4]), [4, this.browserStorage.removeAccount(At.generateAccountCacheKey(e))];
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
              if (o = ku(e && e.scopes || []), a = ce(ce({}, e), {
                correlationId: this.correlationId,
                authority: n,
                scopes: o
              }), !a.authenticationScheme)
                a.authenticationScheme = We.BEARER, this.logger.verbose(`Authentication Scheme wasn't explicitly set in request, defaulting to "Bearer" request`);
              else {
                if (a.authenticationScheme === We.SSH) {
                  if (!e.sshJwk)
                    throw et.createMissingSshJwkError();
                  if (!e.sshKid)
                    throw et.createMissingSshKidError();
                }
                this.logger.verbose('Authentication Scheme set to "' + a.authenticationScheme + '" as configured in Auth request');
              }
              return this.config.cache.claimsBasedCachingEnabled && e.claims && !ee.isEmptyObj(e.claims) ? (s = a, [4, this.browserCrypto.hashString(e.claims)]) : [3, 4];
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
      return new bI(n, this.browserStorage);
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
              }, e ? (this.logger.verbose("Creating discovered authority with request authority"), [4, Ts.createDiscoveredInstance(e, this.config.system.networkClient, this.browserStorage, t, this.logger)]) : [3, 2];
            case 1:
              return [2, n.sent()];
            case 2:
              return this.logger.verbose("Creating discovered authority with configured authority"), [4, Ts.createDiscoveredInstance(this.config.auth.authority, this.config.system.networkClient, this.browserStorage, t, this.logger)];
            case 3:
              return [2, n.sent()];
          }
        });
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var li = (
  /** @class */
  function(r) {
    Rt(e, r);
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
              return a = s.sent(), [2, new Wg(a, this.performanceClient)];
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
                  version: Wi,
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
        throw J.createHashDoesNotContainStateError();
      var a = Qg.extractBrowserRequestState(this.browserCrypto, t.state);
      if (!a)
        throw J.createUnableToParseStateError();
      if (a.interactionType !== n)
        throw J.createStateInteractionTypeMismatchError();
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
              }, l = t || this.config.auth.authority, u = Qi.generateAuthority(l, n || this.config.auth.azureCloudOptions), this.logger.verbose("Creating discovered authority with configured authority", this.correlationId), this.performanceClient.setPreQueueTime(F.AuthorityFactoryCreateDiscoveredInstance, this.correlationId), [4, Ts.createDiscoveredInstance(u, this.config.system.networkClient, this.browserStorage, s, this.logger, this.performanceClient, this.correlationId).then(function(h) {
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
              }, s = bn.setRequestState(this.browserCrypto, t && t.state || N.EMPTY_STRING, a), this.performanceClient.setPreQueueTime(F.InitializeBaseRequest, this.correlationId), u = [{}], [4, this.initializeBaseRequest(t)];
            case 1:
              return l = ce.apply(void 0, [ce.apply(void 0, u.concat([p.sent()])), { redirectUri: o, state: s, nonce: t.nonce || this.browserCrypto.createNewGuid(), responseMode: vs.FRAGMENT }]), f = t.account || this.browserStorage.getActiveAccount(), f && (this.logger.verbose("Setting validated request account", this.correlationId), this.logger.verbosePii("Setting validated request account: " + f.homeAccountId, this.correlationId), l.account = f), ee.isEmpty(l.loginHint) && !f && (h = this.browserStorage.getLegacyLoginHint(), h && (l.loginHint = h)), [2, l];
          }
        });
      });
    }, e;
  }(Jg)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var xu = (
  /** @class */
  function() {
    function r(e, t, n, o, a) {
      this.authModule = e, this.browserStorage = t, this.authCodeRequest = n, this.logger = o, this.performanceClient = a;
    }
    return r.prototype.handleCodeResponseFromHash = function(e, t, n, o) {
      return G(this, void 0, void 0, function() {
        var a, s, l;
        return z(this, function(u) {
          if (this.performanceClient.addQueueMeasurement(F.HandleCodeResponseFromHash, this.authCodeRequest.correlationId), this.logger.verbose("InteractionHandler.handleCodeResponse called"), ee.isEmpty(e))
            throw J.createEmptyHashError(e);
          if (a = this.browserStorage.generateStateKey(t), s = this.browserStorage.getTemporaryCache(a), !s)
            throw re.createStateNotFoundError("Cached State");
          try {
            l = this.authModule.handleFragmentResponse(e, s);
          } catch (f) {
            throw f instanceof yo && f.subError === V.userCancelledError.code ? J.createUserCancelledError() : f;
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
                throw re.createStateNotFoundError("Cached State");
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
              return this.performanceClient.addQueueMeasurement(F.UpdateTokenEndpointAuthority, this.authCodeRequest.correlationId), o = "https://" + e + "/" + t.tenant + "/", [4, Ts.createDiscoveredInstance(o, n, this.browserStorage, t.options, this.logger, this.performanceClient, this.authCodeRequest.correlationId)];
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
var Up = (
  /** @class */
  function(r) {
    Rt(e, r);
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
              return this.logger.verbose("RedirectHandler.initiateAuthRequest called"), ee.isEmpty(t) ? [3, 7] : (n.redirectStartPage && (this.logger.verbose("RedirectHandler.initiateAuthRequest: redirectStartPage set, caching start page"), this.browserStorage.setTemporaryCache(Be.ORIGIN_URI, n.redirectStartPage, !0)), this.browserStorage.setTemporaryCache(Be.CORRELATION_ID, this.authCodeRequest.correlationId, !0), this.browserStorage.cacheCodeRequest(this.authCodeRequest, this.browserCrypto), this.logger.infoPii("RedirectHandler.initiateAuthRequest: Navigate to: " + t), o = {
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
              throw this.logger.info("RedirectHandler.initiateAuthRequest: Navigate url is empty"), J.createEmptyNavigationUriError();
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
              if (this.logger.verbose("RedirectHandler.handleCodeResponse called"), ee.isEmpty(t))
                throw J.createEmptyHashError(t);
              if (this.browserStorage.setInteractionInProgress(!1), s = this.browserStorage.generateStateKey(n), l = this.browserStorage.getTemporaryCache(s), !l)
                throw re.createStateNotFoundError("Cached State");
              try {
                u = this.authModule.handleFragmentResponse(t, l);
              } catch (C) {
                throw C instanceof yo && C.subError === V.userCancelledError.code ? J.createUserCancelledError() : C;
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
  }(xu)
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
var Mi = {
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
}, rn = (
  /** @class */
  function(r) {
    Rt(e, r);
    function e(t, n, o) {
      var a = r.call(this, t, n) || this;
      return Object.setPrototypeOf(a, e.prototype), a.name = "NativeAuthError", a.ext = o, a;
    }
    return e.prototype.isFatal = function() {
      if (this.ext && this.ext.status && (this.ext.status === Kn.PERSISTENT_ERROR || this.ext.status === Kn.DISABLED))
        return !0;
      switch (this.errorCode) {
        case Mi.extensionError.code:
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
            return J.createUserCancelledError();
          case Kn.NO_NETWORK:
            return J.createNoNetworkConnectivityError();
        }
      return new e(t, n, o);
    }, e.createUserSwitchError = function() {
      return new e(Mi.userSwitch.code, Mi.userSwitch.desc);
    }, e.createTokensNotFoundInCacheError = function() {
      return new e(Mi.tokensNotFoundInCache.code, Mi.tokensNotFoundInCache.desc);
    }, e;
  }(ue)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Xg = (
  /** @class */
  function(r) {
    Rt(e, r);
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
              throw l = u.sent(), l instanceof J && l.errorCode === V.signingKeyNotFoundInStorage.code && this.logger.verbose("Signing keypair for bound access token not found. Refreshing bound access token and generating a new crypto keypair."), n.endMeasurement({
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
      return Promise.reject(J.createSilentLogoutUnsupportedError());
    }, e.prototype.createSilentFlowClient = function(t, n, o) {
      return G(this, void 0, void 0, function() {
        var a;
        return z(this, function(s) {
          switch (s.label) {
            case 0:
              return this.performanceClient.setPreQueueTime(F.StandardInteractionClientGetClientConfiguration, this.correlationId), [4, this.getClientConfiguration(t, n, o)];
            case 1:
              return a = s.sent(), [2, new gI(a, this.performanceClient)];
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
  }(li)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var ei = (
  /** @class */
  function(r) {
    Rt(e, r);
    function e(t, n, o, a, s, l, u, f, h, p, m, v) {
      var C = r.call(this, t, n, o, a, s, l, f, h, v) || this;
      return C.apiId = u, C.accountId = p, C.nativeMessageHandler = h, C.nativeStorageManager = m, C.silentCacheClient = new Xg(t, C.nativeStorageManager, o, a, s, l, f, h, v), C;
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
                method: En.GetToken,
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
        scopes: Lt.fromString(t.scope).asArray(),
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
                throw this.logger.warning("NativeInteractionClient:acquireTokensFromCache - No nativeAccountId provided"), re.createNoAccountFoundError();
              if (o = this.browserStorage.getAccountInfoFilteredBy({ nativeAccountId: t }), !o)
                throw re.createNoAccountFoundError();
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
                method: En.GetToken,
                request: n
              }, f.label = 2;
            case 2:
              return f.trys.push([2, 4, , 5]), [4, this.nativeMessageHandler.sendMessage(o)];
            case 3:
              return a = f.sent(), this.validateNativeResponse(a), [3, 5];
            case 4:
              if (s = f.sent(), s instanceof rn && s.isFatal())
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
              n = t.prompt, o = _p(t, ["prompt"]), n && this.logger.verbose("NativeInteractionClient - handleRedirectPromise called and prompt was included in the original request, removing prompt from cached request to prevent second interaction with native broker window."), this.browserStorage.removeItem(this.browserStorage.generateCacheKey(Be.NATIVE_REQUEST)), a = {
                method: En.GetToken,
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
                throw rn.createUserSwitchError();
              return [4, this.getDiscoveredAuthority(n.authority)];
            case 1:
              return a = p.sent(), s = a.getPreferredCache(), l = this.createIdTokenObj(t), u = this.createHomeAccountIdentifier(t, l), f = this.createAccountEntity(t, u, l, s), [4, this.generateAuthenticationResult(t, n, l, f, a.canonicalAuthority, o)];
            case 2:
              return h = p.sent(), this.cacheAccount(f), this.cacheNativeTokens(t, n, u, f, l, h.accessToken, h.tenantId, o), [2, h];
          }
        });
      });
    }, e.prototype.createIdTokenObj = function(t) {
      return new on(t.id_token || N.EMPTY_STRING, this.browserCrypto);
    }, e.prototype.createHomeAccountIdentifier = function(t, n) {
      var o = At.generateHomeAccountId(t.client_info || N.EMPTY_STRING, Wt.Default, this.logger, this.browserCrypto, n);
      return o;
    }, e.prototype.createAccountEntity = function(t, n, o, a) {
      return At.createAccount(t.client_info, n, o, void 0, void 0, void 0, a, t.account.id);
    }, e.prototype.generateScopes = function(t, n) {
      return t.scope ? Lt.fromString(t.scope) : Lt.fromString(n.scope);
    }, e.prototype.generatePopAccessToken = function(t, n) {
      return G(this, void 0, void 0, function() {
        var o, a;
        return z(this, function(s) {
          switch (s.label) {
            case 0:
              if (n.tokenType !== We.POP)
                return [3, 2];
              if (t.shr)
                return this.logger.trace("handleNativeServerResponse: SHR is enabled in native layer"), [2, t.shr];
              if (o = new ri(this.browserCrypto), a = {
                resourceRequestMethod: n.resourceRequestMethod,
                resourceRequestUri: n.resourceRequestUri,
                shrClaims: n.shrClaims,
                shrNonce: n.shrNonce
              }, !n.keyId)
                throw re.createKeyIdMissingError();
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
              return u = this.addTelemetryFromNativeResponse(t), f = t.scope ? Lt.fromString(t.scope) : Lt.fromString(n.scope), h = t.account.properties || {}, p = h.UID || o.claims.oid || o.claims.sub || N.EMPTY_STRING, m = h.TenantId || o.claims.tid || N.EMPTY_STRING, [4, this.generatePopAccessToken(t, n)];
            case 1:
              return v = _.sent(), C = n.tokenType === We.POP ? We.POP : We.BEARER, E = {
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
      var h = uo.createIdTokenEntity(o, n.authority, t.id_token || N.EMPTY_STRING, n.clientId, s.claims.tid || N.EMPTY_STRING), p = n.tokenType === We.POP ? N.SHR_NONCE_VALIDITY : (typeof t.expires_in == "string" ? parseInt(t.expires_in, 10) : t.expires_in) || 0, m = f + p, v = this.generateScopes(t, n), C = fo.createAccessTokenEntity(o, n.authority, l, n.clientId, s ? s.claims.tid || N.EMPTY_STRING : u, v.printScopes(), m, 0, this.browserCrypto), E = new zi(a, h, C);
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
      throw rn.createUnexpectedError("Response missing expected properties.");
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
              return o = new He(n), o.validateAsUri(), a = t.scopes, s = _p(t, ["scopes"]), l = new Lt(a || []), l.appendScopes(oa), u = function() {
                switch (v.apiId) {
                  case Ze.ssoSilent:
                  case Ze.acquireTokenSilent_silentFlow:
                    return v.logger.trace("initializeNativeRequest: silent request sets prompt to none"), Ut.NONE;
                }
                if (!t.prompt) {
                  v.logger.trace("initializeNativeRequest: prompt was not provided");
                  return;
                }
                switch (t.prompt) {
                  case Ut.NONE:
                  case Ut.CONSENT:
                  case Ut.LOGIN:
                    return v.logger.trace("initializeNativeRequest: prompt is compatible with native flow"), t.prompt;
                  default:
                    throw v.logger.trace("initializeNativeRequest: prompt = " + t.prompt + " is not compatible with native flow"), J.createNativePromptParameterNotSupportedError();
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
                extraParameters: ce(ce(ce({}, t.extraQueryParameters), t.tokenQueryParameters), { telemetry: Ui.MATS_TELEMETRY }),
                extendedExpiryToken: !1
                // Make this configurable?
              }), t.authenticationScheme !== We.POP ? [3, 4] : (h = {
                resourceRequestUri: t.resourceRequestUri,
                resourceRequestMethod: t.resourceRequestMethod,
                shrClaims: t.shrClaims,
                shrNonce: t.shrNonce
              }, p = new ri(this.browserCrypto), [4, p.generateCnf(h)]);
            case 3:
              m = C.sent(), f.reqCnf = m.reqCnfString, f.keyId = m.kid, C.label = 4;
            case 4:
              return [2, f];
          }
        });
      });
    }, e;
  }(Jg)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var po = (
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
            channel: Ui.CHANNEL_ID,
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
              return s.trys.push([1, 3, , 5]), o = new r(e, t, n, Ui.PREFERRED_EXTENSION_ID), [4, o.sendHandshakeRequest()];
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
            channel: Ui.CHANNEL_ID,
            extensionId: this.extensionId,
            responseId: this.responseId++,
            body: {
              method: En.HandshakeRequest
            }
          }, this.handshakeEvent.addStaticFields({
            extensionId: this.extensionId,
            extensionHandshakeTimeoutMs: this.handshakeTimeoutMs
          }), this.messageChannel.port1.onmessage = function(o) {
            t.onChannelMessage(o);
          }, window.postMessage(e, window.origin, [this.messageChannel.port2]), [2, new Promise(function(o, a) {
            t.handshakeResolvers.set(e.responseId, { resolve: o, reject: a }), t.timeoutId = window.setTimeout(function() {
              window.removeEventListener("message", t.windowListener, !1), t.messageChannel.port1.close(), t.messageChannel.port2.close(), t.handshakeEvent.endMeasurement({ extensionHandshakeTimedOut: !0, success: !1 }), a(J.createNativeHandshakeTimeoutError()), t.handshakeResolvers.delete(e.responseId);
            }, t.handshakeTimeoutMs);
          })];
        });
      });
    }, r.prototype.onWindowMessage = function(e) {
      if (this.logger.trace("NativeMessageHandler - onWindowMessage called"), e.source === window) {
        var t = e.data;
        if (!(!t.channel || t.channel !== Ui.CHANNEL_ID) && !(t.extensionId && t.extensionId !== this.extensionId) && t.body.method === En.HandshakeRequest) {
          this.logger.verbose(t.extensionId ? "Extension with id: " + t.extensionId + " not installed" : "No extension installed"), clearTimeout(this.timeoutId), this.messageChannel.port1.close(), this.messageChannel.port2.close(), window.removeEventListener("message", this.windowListener, !1);
          var n = this.handshakeResolvers.get(t.responseId);
          n && (this.handshakeEvent.endMeasurement({ success: !1, extensionInstalled: !1 }), n.reject(J.createNativeExtensionNotInstalledError()));
        }
      }
    }, r.prototype.onChannelMessage = function(e) {
      this.logger.trace("NativeMessageHandler - onChannelMessage called.");
      var t = e.data, n = this.resolvers.get(t.responseId), o = this.handshakeResolvers.get(t.responseId);
      try {
        var a = t.body.method;
        if (a === En.Response) {
          if (!n)
            return;
          var s = t.body.response;
          if (this.logger.trace("NativeMessageHandler - Received response from browser extension"), this.logger.tracePii("NativeMessageHandler - Received response from browser extension: " + JSON.stringify(s)), s.status !== "Success")
            n.reject(rn.createError(s.code, s.description, s.ext));
          else if (s.result)
            s.result.code && s.result.description ? n.reject(rn.createError(s.result.code, s.result.description, s.result.ext)) : n.resolve(s.result);
          else
            throw ue.createUnexpectedError("Event does not contain result.");
          this.resolvers.delete(t.responseId);
        } else if (a === En.HandshakeResponse) {
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
          case We.BEARER:
          case We.POP:
            return t.trace("isNativeAvailable: authenticationScheme is supported, returning true"), !0;
          default:
            return t.trace("isNativeAvailable: authenticationScheme is not supported, returning false"), !1;
        }
      return !0;
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var kI = (
  /** @class */
  function(r) {
    Rt(e, r);
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
              return l = v.sent(), this.logger.verbose("Auth code client created"), u = new Up(l, this.browserStorage, s, this.logger, this.browserCrypto, this.performanceClient), [4, l.getAuthCodeUrl(ce(ce({}, n), { nativeBroker: po.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, t.authenticationScheme) }))];
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
              throw C = E.sent(), C instanceof ue && C.setCorrelationId(this.correlationId), n.cacheFailedRequest(C), this.browserStorage.cleanRequestByInteractionType(se.Redirect), C;
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
                  throw J.createNativeConnectionNotEstablishedError();
                return l = new ei(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, s.accountId, this.nativeStorage, a.correlationId), u = bn.parseRequestState(this.browserCrypto, n).userRequestState, [2, l.acquireToken(ce(ce({}, a), {
                  state: u,
                  prompt: void 0
                  // Server should handle the prompt, ideally native broker can do this part silently
                })).finally(function() {
                  m.browserStorage.cleanRequestByState(n);
                })];
              }
              if (f = this.browserStorage.getCachedAuthority(n), !f)
                throw J.createNoCachedAuthorityError();
              return this.performanceClient.setPreQueueTime(F.StandardInteractionClientCreateAuthCodeClient, a.correlationId), [4, this.createAuthCodeClient(o, f)];
            case 1:
              return h = v.sent(), this.logger.verbose("Auth code client created"), bs.removeThrottle(this.browserStorage, this.config.auth.clientId, a), p = new Up(h, this.browserStorage, a, this.logger, this.browserCrypto, this.performanceClient), [4, p.handleCodeResponseFromHash(t, n, h.authority, this.networkClient)];
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
              throw f = h.sent(), f instanceof ue && f.setCorrelationId(this.correlationId), o.cacheFailedRequest(f), this.eventHandler.emitEvent(Ee.LOGOUT_FAILURE, se.Redirect, null, f), this.eventHandler.emitEvent(Ee.LOGOUT_END, se.Redirect), f;
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
  }(li)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var PI = (
  /** @class */
  function(r) {
    Rt(e, r);
    function e(t, n, o, a, s, l, u, f, h, p) {
      var m = r.call(this, t, n, o, a, s, l, u, h, p) || this;
      return m.unloadWindow = m.unloadWindow.bind(m), m.nativeStorage = f, m;
    }
    return e.prototype.acquireToken = function(t) {
      try {
        var n = this.generatePopupName(t.scopes || oa, t.authority || this.config.auth.authority), o = t.popupWindowAttributes || {};
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
        var s, l, u, f, h, p, m, v, C, E, _, R, I, S, A, O, L, q = this;
        return z(this, function(D) {
          switch (D.label) {
            case 0:
              return this.logger.verbose("acquireTokenPopupAsync called"), s = this.initializeServerTelemetryManager(Ze.acquireTokenPopup), this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, se.Popup)];
            case 1:
              l = D.sent(), this.browserStorage.updateCacheEntries(l.state, l.nonce, l.authority, l.loginHint || N.EMPTY_STRING, l.account || null), D.label = 2;
            case 2:
              return D.trys.push([2, 8, , 9]), this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationCodeRequest, t.correlationId), [4, this.initializeAuthorizationCodeRequest(l)];
            case 3:
              return u = D.sent(), this.performanceClient.setPreQueueTime(F.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(s, l.authority, l.azureCloudOptions)];
            case 4:
              return f = D.sent(), this.logger.verbose("Auth code client created"), h = po.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, t.authenticationScheme), p = void 0, h && (p = this.performanceClient.startMeasurement(F.FetchAccountIdWithNativeBroker, t.correlationId)), [4, f.getAuthCodeUrl(ce(ce({}, l), { nativeBroker: h }))];
            case 5:
              return m = D.sent(), v = new xu(f, this.browserStorage, u, this.logger, this.performanceClient), C = {
                popup: a,
                popupName: n,
                popupWindowAttributes: o
              }, E = this.initiateAuthRequest(m, C), this.eventHandler.emitEvent(Ee.POPUP_OPENED, se.Popup, { popupWindow: E }, null), [4, this.monitorPopupForHash(E)];
            case 6:
              if (_ = D.sent(), R = He.getDeserializedHash(_), I = this.validateAndExtractStateFromHash(R, se.Popup, l.correlationId), bs.removeThrottle(this.browserStorage, this.config.auth.clientId, u), R.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), p && p.endMeasurement({
                  success: !0,
                  isNativeBroker: !0
                }), !this.nativeMessageHandler)
                  throw J.createNativeConnectionNotEstablishedError();
                return S = new ei(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, R.accountId, this.nativeStorage, l.correlationId), A = bn.parseRequestState(this.browserCrypto, I).userRequestState, [2, S.acquireToken(ce(ce({}, l), {
                  state: A,
                  prompt: void 0
                  // Server should handle the prompt, ideally native broker can do this part silently
                })).finally(function() {
                  q.browserStorage.cleanRequestByState(I);
                })];
              }
              return [4, v.handleCodeResponseFromHash(_, I, f.authority, this.networkClient)];
            case 7:
              return O = D.sent(), [2, O];
            case 8:
              throw L = D.sent(), a && a.close(), L instanceof ue && L.setCorrelationId(this.correlationId), s.cacheFailedRequest(L), this.browserStorage.cleanRequestByState(l.state), L;
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
              throw C = E.sent(), s && s.close(), C instanceof ue && C.setCorrelationId(this.correlationId), this.browserStorage.setInteractionInProgress(!1), this.eventHandler.emitEvent(Ee.LOGOUT_FAILURE, se.Popup, null, C), this.eventHandler.emitEvent(Ee.LOGOUT_END, se.Popup), u.cacheFailedRequest(C), C;
            case 6:
              return this.eventHandler.emitEvent(Ee.LOGOUT_END, se.Popup), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.initiateAuthRequest = function(t, n) {
      if (ee.isEmpty(t))
        throw this.logger.error("Navigate url is empty"), J.createEmptyNavigationUriError();
      return this.logger.infoPii("Navigate to: " + t), this.openPopup(t, n);
    }, e.prototype.monitorPopupForHash = function(t) {
      var n = this;
      return new Promise(function(o, a) {
        var s = n.config.system.windowHashTimeout / n.config.system.pollIntervalMilliseconds, l = 0;
        n.logger.verbose("PopupHandler.monitorPopupForHash - polling started");
        var u = setInterval(function() {
          if (t.closed) {
            n.logger.error("PopupHandler.monitorPopupForHash - window closed"), n.cleanPopup(), clearInterval(u), a(J.createUserCancelledError());
            return;
          }
          var f = N.EMPTY_STRING, h = N.EMPTY_STRING;
          try {
            f = t.location.href, h = t.location.hash;
          } catch {
          }
          ee.isEmpty(f) || f === "about:blank" || (n.logger.verbose("PopupHandler.monitorPopupForHash - popup window is on same origin as caller"), l++, h ? (n.logger.verbose("PopupHandler.monitorPopupForHash - found hash in url"), clearInterval(u), n.cleanPopup(t), He.hashContainsKnownProperties(h) ? (n.logger.verbose("PopupHandler.monitorPopupForHash - hash contains known properties, returning."), o(h)) : (n.logger.error("PopupHandler.monitorPopupForHash - found hash in url but it does not contain known properties. Check that your router is not changing the hash prematurely."), n.logger.errorPii("PopupHandler.monitorPopupForHash - hash found: " + h), a(J.createHashDoesNotContainKnownPropertiesError()))) : l > s && (n.logger.error("PopupHandler.monitorPopupForHash - unable to find hash in url, timing out"), clearInterval(u), a(J.createMonitorPopupTimeoutError())));
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
          ee.isEmpty(s) || s === "about:blank" || (n.logger.verbose("PopupHandler.waitForLogoutPopup - popup window is on same origin as caller, closing."), clearInterval(a), n.cleanPopup(t), o());
        }, n.config.system.pollIntervalMilliseconds);
      });
    }, e.prototype.openPopup = function(t, n) {
      try {
        var o = void 0;
        if (n.popup ? (o = n.popup, this.logger.verbosePii("Navigating popup window to: " + t), o.location.assign(t)) : typeof n.popup > "u" && (this.logger.verbosePii("Opening popup window to: " + t), o = this.openSizedPopup(t, n.popupName, n.popupWindowAttributes)), !o)
          throw J.createEmptyWindowCreatedError();
        return o.focus && o.focus(), this.currentWindow = o, window.addEventListener("beforeunload", this.unloadWindow), o;
      } catch (a) {
        throw this.logger.error("error opening popup " + a.message), this.browserStorage.setInteractionInProgress(!1), J.createPopupWindowError(a.toString());
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
  }(li)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var NI = (
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
var OI = 6e4, du = 6e3, MI = 3e4, xI = 2e3;
function LI(r, e) {
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
    protocolMode: Yi.AAD,
    azureCloudOptions: {
      azureCloudInstance: ji.None,
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
  }, f = ce(ce({}, zg), {
    loggerOptions: u,
    networkClient: e ? ct.getBrowserNetworkClient() : wI,
    navigationClient: new NI(),
    loadFrameTimeout: 0,
    // If loadFrameTimeout is provided, use that as default.
    windowHashTimeout: (o == null ? void 0 : o.loadFrameTimeout) || OI,
    iframeHashTimeout: (o == null ? void 0 : o.loadFrameTimeout) || du,
    navigateFrameWait: e && ct.detectIEOrEdge() ? 500 : 0,
    redirectNavigationTimeout: MI,
    asyncPopups: !1,
    allowRedirectInIframe: !1,
    allowNativeBroker: !1,
    nativeBrokerHandshakeTimeout: (o == null ? void 0 : o.nativeBrokerHandshakeTimeout) || xI,
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
var Zg = (
  /** @class */
  function(r) {
    Rt(e, r);
    function e(t, n, o, a, s, l) {
      var u = r.call(this, t, n, o, a, l) || this;
      return u.navigateFrameWait = s.navigateFrameWait, u.pollIntervalMilliseconds = s.pollIntervalMilliseconds, u;
    }
    return e.prototype.initiateAuthRequest = function(t) {
      return G(this, void 0, void 0, function() {
        return z(this, function(n) {
          switch (n.label) {
            case 0:
              if (this.performanceClient.addQueueMeasurement(F.SilentHandlerInitiateAuthRequest, this.authCodeRequest.correlationId), ee.isEmpty(t))
                throw this.logger.info("Navigate url is empty"), J.createEmptyNavigationUriError();
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
        n < du && o.logger.warning("system.loadFrameTimeout or system.iframeHashTimeout set to lower (" + n + "ms) than the default (" + du + "ms). This may result in timeouts.");
        var l = window.performance.now(), u = l + n, f = setInterval(function() {
          if (window.performance.now() > u) {
            o.removeHiddenIframe(t), clearInterval(f), s(J.createMonitorIframeTimeoutError());
            return;
          }
          var h = N.EMPTY_STRING, p = t.contentWindow;
          try {
            h = p ? p.location.href : N.EMPTY_STRING;
          } catch {
          }
          if (!ee.isEmpty(h)) {
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
  }(xu)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var DI = (
  /** @class */
  function(r) {
    Rt(e, r);
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
              if (this.performanceClient.addQueueMeasurement(F.SilentIframeClientAcquireToken, t.correlationId), this.logger.verbose("acquireTokenByIframe called"), n = this.performanceClient.startMeasurement(F.SilentIframeClientAcquireToken, t.correlationId), ee.isEmpty(t.loginHint) && ee.isEmpty(t.sid) && (!t.account || ee.isEmpty(t.account.username)) && this.logger.warning("No user hint provided. The authorization server may need more information to complete this request."), t.prompt && t.prompt !== Ut.NONE && t.prompt !== Ut.NO_SESSION)
                throw n.endMeasurement({
                  success: !1
                }), J.createSilentPromptValueError(t.prompt);
              return this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(ce(ce({}, t), { prompt: t.prompt || Ut.NONE }), se.Silent)];
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
      return Promise.reject(J.createSilentLogoutUnsupportedError());
    }, e.prototype.silentTokenHelper = function(t, n) {
      return G(this, void 0, void 0, function() {
        var o, a, s, l, u, f, h, p, m, v = this;
        return z(this, function(C) {
          switch (C.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(F.SilentIframeClientTokenHelper, n.correlationId), this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationCodeRequest, n.correlationId), [4, this.initializeAuthorizationCodeRequest(n)];
            case 1:
              return o = C.sent(), this.performanceClient.setPreQueueTime(F.GetAuthCodeUrl, n.correlationId), [4, t.getAuthCodeUrl(ce(ce({}, n), { nativeBroker: po.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, n.authenticationScheme) }))];
            case 2:
              return a = C.sent(), s = new Zg(t, this.browserStorage, o, this.logger, this.config.system, this.performanceClient), this.performanceClient.setPreQueueTime(F.SilentHandlerInitiateAuthRequest, n.correlationId), [4, s.initiateAuthRequest(a)];
            case 3:
              return l = C.sent(), this.performanceClient.setPreQueueTime(F.SilentHandlerMonitorIframeForHash, n.correlationId), [4, s.monitorIframeForHash(l, this.config.system.iframeHashTimeout)];
            case 4:
              if (u = C.sent(), f = He.getDeserializedHash(u), h = this.validateAndExtractStateFromHash(f, se.Silent, o.correlationId), f.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), !this.nativeMessageHandler)
                  throw J.createNativeConnectionNotEstablishedError();
                return p = new ei(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.apiId, this.performanceClient, this.nativeMessageHandler, f.accountId, this.browserStorage, this.correlationId), m = bn.parseRequestState(this.browserCrypto, h).userRequestState, [2, p.acquireToken(ce(ce({}, n), { state: m, prompt: n.prompt || Ut.NONE })).finally(function() {
                  v.browserStorage.cleanRequestByState(h);
                })];
              }
              return this.performanceClient.setPreQueueTime(F.HandleCodeResponseFromHash, n.correlationId), [2, s.handleCodeResponseFromHash(u, h, t.authority, this.networkClient)];
          }
        });
      });
    }, e;
  }(li)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var UI = (
  /** @class */
  function(r) {
    Rt(e, r);
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
      return Promise.reject(J.createSilentLogoutUnsupportedError());
    }, e.prototype.createRefreshTokenClient = function(t, n, o) {
      return G(this, void 0, void 0, function() {
        var a;
        return z(this, function(s) {
          switch (s.label) {
            case 0:
              return this.performanceClient.setPreQueueTime(F.StandardInteractionClientGetClientConfiguration, this.correlationId), [4, this.getClientConfiguration(t, n, o)];
            case 1:
              return a = s.sent(), [2, new Vg(a, this.performanceClient)];
          }
        });
      });
    }, e;
  }(li)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var FI = (
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
        if (typeof n != "object" || !At.isAccountEntity(n))
          return;
        var o = er.toObject(new At(), n), a = o.getAccountInfo();
        !e.oldValue && e.newValue ? (this.logger.info("Account was added to cache in a different window"), this.emitEvent(Ee.ACCOUNT_ADDED, void 0, a)) : !e.newValue && e.oldValue && (this.logger.info("Account was removed from cache in a different window"), this.emitEvent(Ee.ACCOUNT_REMOVED, void 0, a));
      } catch {
        return;
      }
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var xt = (
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
var em = (
  /** @class */
  function() {
    function r(e) {
      this.cryptoObj = e;
    }
    return r.prototype.generateGuid = function() {
      try {
        var e = new Uint8Array(16);
        return this.cryptoObj.getRandomValues(e), e[6] |= 64, e[6] &= 79, e[8] |= 128, e[8] &= 191, xt.decimalToHex(e[0]) + xt.decimalToHex(e[1]) + xt.decimalToHex(e[2]) + xt.decimalToHex(e[3]) + "-" + xt.decimalToHex(e[4]) + xt.decimalToHex(e[5]) + "-" + xt.decimalToHex(e[6]) + xt.decimalToHex(e[7]) + "-" + xt.decimalToHex(e[8]) + xt.decimalToHex(e[9]) + "-" + xt.decimalToHex(e[10]) + xt.decimalToHex(e[11]) + xt.decimalToHex(e[12]) + xt.decimalToHex(e[13]) + xt.decimalToHex(e[14]) + xt.decimalToHex(e[15]);
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
var _n = (
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
var tm = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.urlEncode = function(e) {
      return encodeURIComponent(this.encode(e).replace(/=/g, N.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_"));
    }, r.prototype.urlEncodeArr = function(e) {
      return this.base64EncArr(e).replace(/=/g, N.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_");
    }, r.prototype.encode = function(e) {
      var t = _n.stringToUtf8Arr(e);
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
var HI = (
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
      return _n.utf8ArrToString(n);
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
var BI = 32, KI = (
  /** @class */
  function() {
    function r(e) {
      this.base64Encode = new tm(), this.cryptoObj = e;
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
        var e = new Uint8Array(BI);
        this.cryptoObj.getRandomValues(e);
        var t = this.base64Encode.urlEncodeArr(e);
        return t;
      } catch (n) {
        throw J.createPkceNotGeneratedError(n);
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
              throw n = o.sent(), J.createPkceNotGeneratedError(n);
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
var qI = (
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
          return [2, window.crypto.subtle.exportKey(ni, e)];
        });
      });
    }, r.prototype.importKey = function(e, t, n, o) {
      return G(this, void 0, void 0, function() {
        return z(this, function(a) {
          return [2, window.crypto.subtle.importKey(ni, e, t, n, o)];
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
var $I = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.initPrng = function(e) {
      return window.msrCrypto.initPrng(ku(e));
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
          return [2, window.msrCrypto.subtle.exportKey(ni, e)];
        });
      });
    }, r.prototype.importKey = function(e, t, n, o) {
      return G(this, void 0, void 0, function() {
        return z(this, function(a) {
          return [2, window.msrCrypto.subtle.importKey(ni, e, t, n, o)];
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
var GI = (
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
            var a = window.msCrypto.subtle.exportKey(ni, e);
            a.addEventListener("complete", function(s) {
              var l = s.target.result, u = _n.utf8ArrToString(new Uint8Array(l)).replace(/\r/g, N.EMPTY_STRING).replace(/\n/g, N.EMPTY_STRING).replace(/\t/g, N.EMPTY_STRING).split(" ").join(N.EMPTY_STRING).replace("\0", N.EMPTY_STRING);
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
          return a = _n.getSortedObjectString(e), s = _n.stringToArrayBuffer(a), [2, new Promise(function(u, f) {
            var h = window.msCrypto.subtle.importKey(ni, s, t, n, o);
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
var zI = "RSASSA-PKCS1-v1_5", Fp = "SHA-256", WI = 2048, VI = new Uint8Array([1, 0, 1]), rm = (
  /** @class */
  function() {
    function r(e, t) {
      var n, o;
      if (this.logger = e, this.cryptoOptions = t, this.hasBrowserCrypto())
        this.logger.verbose("BrowserCrypto: modern crypto interface available"), this.subtleCrypto = new qI();
      else if (this.hasIECrypto())
        this.logger.verbose("BrowserCrypto: MS crypto interface available"), this.subtleCrypto = new GI();
      else if (this.hasMsrCrypto() && (!((n = this.cryptoOptions) === null || n === void 0) && n.useMsrCrypto))
        this.logger.verbose("BrowserCrypto: MSR crypto interface available"), this.subtleCrypto = new $I();
      else
        throw this.hasMsrCrypto() && this.logger.info("BrowserCrypto: MSR Crypto interface available but system.cryptoOptions.useMsrCrypto not enabled"), this.logger.error("BrowserCrypto: No crypto interfaces available."), J.createCryptoNotAvailableError("Browser crypto, msCrypto, or msrCrypto interfaces not available.");
      if (this.subtleCrypto.initPrng) {
        if (this.logger.verbose("BrowserCrypto: Interface requires entropy"), !(!((o = this.cryptoOptions) === null || o === void 0) && o.entropy))
          throw this.logger.error("BrowserCrypto: Interface requires entropy but none provided."), As.createEntropyNotProvided();
        this.logger.verbose("BrowserCrypto: Entropy provided"), this.subtleCrypto.initPrng(this.cryptoOptions.entropy);
      }
      this.keygenAlgorithmOptions = {
        name: zI,
        hash: Fp,
        modulusLength: WI,
        publicExponent: VI
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
          return t = _n.stringToUtf8Arr(e), [2, this.subtleCrypto.digest({ name: Fp }, t)];
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
var jI = (
  /** @class */
  function() {
    function r() {
      this.dbName = cu, this.version = SI, this.tableName = TI, this.dbOpen = !1;
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
              return o(J.createDatabaseUnavailableError());
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
                  return a(J.createDatabaseNotOpenError());
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
                  return s(J.createDatabaseNotOpenError());
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
                  return a(J.createDatabaseNotOpenError());
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
                  return o(J.createDatabaseNotOpenError());
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
                  return a(J.createDatabaseNotOpenError());
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
            var o = window.indexedDB.deleteDatabase(cu);
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
var Hp = (
  /** @class */
  function() {
    function r(e, t) {
      this.inMemoryCache = new lu(), this.indexedDBCache = new jI(), this.logger = e, this.storeName = t;
    }
    return r.prototype.handleDatabaseAccessError = function(e) {
      if (e instanceof J && e.errorCode === V.databaseUnavailable.code)
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
var Rs;
(function(r) {
  r.asymmetricKeys = "asymmetricKeys", r.symmetricKeys = "symmetricKeys";
})(Rs || (Rs = {}));
var YI = (
  /** @class */
  function() {
    function r(e) {
      this.logger = e, this.asymmetricKeys = new Hp(this.logger, Rs.asymmetricKeys), this.symmetricKeys = new Hp(this.logger, Rs.symmetricKeys);
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
var QI = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.logger = e, this.browserCrypto = new rm(this.logger, n), this.b64Encode = new tm(), this.b64Decode = new HI(), this.guidGenerator = new em(this.browserCrypto), this.pkceGenerator = new KI(this.browserCrypto), this.cache = new YI(this.logger), this.performanceClient = t;
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
              }, l = _n.getSortedObjectString(s), [4, this.hashString(l)];
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
        return z(this, function(I) {
          switch (I.label) {
            case 0:
              return a = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(F.CryptoOptsSignJwt, n), [4, this.cache.asymmetricKeys.getItem(t)];
            case 1:
              if (s = I.sent(), !s)
                throw J.createSigningKeyNotFoundInStorageError(t);
              return [4, this.browserCrypto.exportJwk(s.publicKey)];
            case 2:
              return l = I.sent(), u = _n.getSortedObjectString(l), f = this.b64Encode.urlEncode(JSON.stringify({ kid: t })), h = EI.getShrHeaderString({ kid: f, alg: l.alg }), p = this.b64Encode.urlEncode(h), e.cnf = {
                jwk: JSON.parse(u)
              }, m = this.b64Encode.urlEncode(JSON.stringify(e)), v = p + "." + m, C = _n.stringToArrayBuffer(v), [4, this.browserCrypto.sign(s.privateKey, C)];
            case 3:
              return E = I.sent(), _ = this.b64Encode.urlEncodeArr(new Uint8Array(E)), R = v + "." + _, a && a.endMeasurement({
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
var Bp = (
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
var JI = (
  /** @class */
  function(r) {
    Rt(e, r);
    function e(t, n, o, a, s, l, u) {
      var f = r.call(this, t, n, o, a, s, l) || this;
      return f.browserCrypto = new rm(f.logger, u), f.guidGenerator = new em(f.browserCrypto), f;
    }
    return e.prototype.startPerformanceMeasuremeant = function(t, n) {
      return new Bp(t, n);
    }, e.prototype.generateId = function() {
      return this.guidGenerator.generateGuid();
    }, e.prototype.getPageVisibility = function() {
      var t;
      return ((t = document.visibilityState) === null || t === void 0 ? void 0 : t.toString()) || null;
    }, e.prototype.deleteIncompleteSubMeasurements = function(t) {
      var n = this.eventsByCorrelationId.get(t.event.correlationId), o = n && n.eventId === t.event.eventId, a = [];
      o && (n != null && n.incompleteSubMeasurements) && n.incompleteSubMeasurements.forEach(function(s) {
        a.push(ce({}, s));
      }), a.length > 0 && Bp.flushMeasurements(t.event.correlationId, a);
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
  }(Yg)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var XI = (
  /** @class */
  function() {
    function r(e, t, n, o) {
      this.isBrowserEnvironment = typeof window < "u", this.config = e, this.storage = t, this.logger = n, this.cryptoObj = o;
    }
    return r.prototype.loadExternalTokens = function(e, t, n) {
      if (this.logger.info("TokenCache - loadExternalTokens called"), !t.id_token)
        throw J.createUnableToLoadTokenError("Please ensure server response includes id token.");
      var o = new on(t.id_token, this.cryptoObj), a, s;
      if (e.account) {
        var l = this.loadAccount(o, e.account.environment, void 0, void 0, e.account.homeAccountId);
        a = new zi(l, this.loadIdToken(o, l.homeAccountId, e.account.environment, e.account.tenantId), this.loadAccessToken(e, t, l.homeAccountId, e.account.environment, e.account.tenantId, n), this.loadRefreshToken(e, t, l.homeAccountId, e.account.environment));
      } else if (e.authority) {
        var u = Qi.generateAuthority(e.authority, e.azureCloudOptions), f = {
          protocolMode: this.config.auth.protocolMode,
          knownAuthorities: this.config.auth.knownAuthorities,
          cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
          authorityMetadata: this.config.auth.authorityMetadata,
          skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
        };
        if (s = new Qi(u, this.config.system.networkClient, this.storage, f, this.logger), n.clientInfo) {
          this.logger.trace("TokenCache - homeAccountId from options");
          var l = this.loadAccount(o, s.hostnameAndPort, n.clientInfo, s.authorityType);
          a = new zi(l, this.loadIdToken(o, l.homeAccountId, s.hostnameAndPort, s.tenant), this.loadAccessToken(e, t, l.homeAccountId, s.hostnameAndPort, s.tenant, n), this.loadRefreshToken(e, t, l.homeAccountId, s.hostnameAndPort));
        } else if (t.client_info) {
          this.logger.trace("TokenCache - homeAccountId from response");
          var l = this.loadAccount(o, s.hostnameAndPort, t.client_info, s.authorityType);
          a = new zi(l, this.loadIdToken(o, l.homeAccountId, s.hostnameAndPort, s.tenant), this.loadAccessToken(e, t, l.homeAccountId, s.hostnameAndPort, s.tenant, n), this.loadRefreshToken(e, t, l.homeAccountId, s.hostnameAndPort));
        } else
          throw J.createUnableToLoadTokenError("Please provide clientInfo in the response or options.");
      } else
        throw J.createUnableToLoadTokenError("Please provide a request with an account or a request with authority.");
      return this.generateAuthenticationResult(e, o, a, s);
    }, r.prototype.loadAccount = function(e, t, n, o, a) {
      var s;
      if (a ? s = a : o !== void 0 && n && (s = At.generateHomeAccountId(n, o, this.logger, this.cryptoObj, e)), !s)
        throw J.createUnableToLoadTokenError("Unexpected missing homeAccountId");
      var l = n ? At.createAccount(n, s, e, void 0, void 0, void 0, t) : At.createGenericAccount(s, e, void 0, void 0, void 0, t);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading account"), this.storage.setAccount(l), l;
      throw J.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.loadIdToken = function(e, t, n, o) {
      var a = uo.createIdTokenEntity(t, n, e.rawToken, this.config.auth.clientId, o);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading id token"), this.storage.setIdTokenCredential(a), a;
      throw J.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.loadAccessToken = function(e, t, n, o, a, s) {
      if (!t.access_token)
        return this.logger.verbose("TokenCache - No access token provided for caching"), null;
      if (!t.expires_in)
        throw J.createUnableToLoadTokenError("Please ensure server response includes expires_in value.");
      if (!s.extendedExpiresOn)
        throw J.createUnableToLoadTokenError("Please provide an extendedExpiresOn value in the options.");
      var l = new Lt(e.scopes).printScopes(), u = s.expiresOn || t.expires_in + (/* @__PURE__ */ new Date()).getTime() / 1e3, f = s.extendedExpiresOn, h = fo.createAccessTokenEntity(n, o, t.access_token, this.config.auth.clientId, a, l, u, f, this.cryptoObj);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading access token"), this.storage.setAccessTokenCredential(h), h;
      throw J.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.loadRefreshToken = function(e, t, n, o) {
      if (!t.refresh_token)
        return this.logger.verbose("TokenCache - No refresh token provided for caching"), null;
      var a = Yo.createRefreshTokenEntity(n, o, t.refresh_token, this.config.auth.clientId);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading refresh token"), this.storage.setRefreshTokenCredential(a), a;
      throw J.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.generateAuthenticationResult = function(e, t, n, o) {
      var a, s, l, u = N.EMPTY_STRING, f = [], h = null, p;
      n != null && n.accessToken && (u = n.accessToken.secret, f = Lt.fromString(n.accessToken.target).asArray(), h = new Date(Number(n.accessToken.expiresOn) * 1e3), p = new Date(Number(n.accessToken.extendedExpiresOn) * 1e3));
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
var ZI = (
  /** @class */
  function(r) {
    Rt(e, r);
    function e(t) {
      var n = r.call(this, t) || this;
      return n.includeRedirectUri = !1, n;
    }
    return e;
  }(Wg)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var eA = (
  /** @class */
  function(r) {
    Rt(e, r);
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
                throw J.createAuthCodeRequiredError();
              return this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, se.Silent)];
            case 1:
              n = h.sent(), this.browserStorage.updateCacheEntries(n.state, n.nonce, n.authority, n.loginHint || N.EMPTY_STRING, n.account || null), o = this.initializeServerTelemetryManager(this.apiId), h.label = 2;
            case 2:
              return h.trys.push([2, 4, , 5]), a = ce(ce({}, n), { code: t.code }), this.performanceClient.setPreQueueTime(F.StandardInteractionClientGetClientConfiguration, t.correlationId), [4, this.getClientConfiguration(o, n.authority)];
            case 3:
              return s = h.sent(), l = new ZI(s), this.logger.verbose("Auth code client created"), u = new Zg(l, this.browserStorage, a, this.logger, this.config.system, this.performanceClient), [2, u.handleCodeResponseFromServer({
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
      return Promise.reject(J.createSilentLogoutUnsupportedError());
    }, e;
  }(li)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var tA = (
  /** @class */
  function() {
    function r(e) {
      this.isBrowserEnvironment = typeof window < "u", this.config = LI(e, this.isBrowserEnvironment), this.initialized = !1, this.logger = new Pu(this.config.system.loggerOptions, Ml, Wi), this.networkClient = this.config.system.networkClient, this.navigationClient = this.config.system.navigationClient, this.redirectResponse = /* @__PURE__ */ new Map(), this.hybridAuthCodeResponses = /* @__PURE__ */ new Map(), this.performanceClient = this.isBrowserEnvironment ? new JI(this.config.auth.clientId, this.config.auth.authority, this.logger, Ml, Wi, this.config.telemetry.application, this.config.system.cryptoOptions) : new _I(this.config.auth.clientId, this.config.auth.authority, this.logger, Ml, Wi, this.config.telemetry.application), this.browserCrypto = this.isBrowserEnvironment ? new QI(this.logger, this.performanceClient, this.config.system.cryptoOptions) : ws, this.eventHandler = new FI(this.logger, this.browserCrypto), this.browserStorage = this.isBrowserEnvironment ? new uu(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger) : II(this.config.auth.clientId, this.logger);
      var t = {
        cacheLocation: pt.MemoryStorage,
        temporaryCacheLocation: pt.MemoryStorage,
        storeAuthStateInCookie: !1,
        secureCookies: !1,
        cacheMigrationEnabled: !1,
        claimsBasedCachingEnabled: !0
      };
      this.nativeInternalStorage = new uu(this.config.auth.clientId, t, this.browserCrypto, this.logger), this.tokenCache = new XI(this.config, this.browserStorage, this.logger, this.browserCrypto), this.trackPageVisibilityWithMeasurement = this.trackPageVisibilityWithMeasurement.bind(this);
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
              return s.trys.push([1, 3, , 4]), n = this, [4, po.createProvider(this.logger, this.config.system.nativeBrokerHandshakeTimeout, this.performanceClient)];
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
          return this.logger.verbose("handleRedirectPromise called"), ct.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized), t = this.getAllAccounts(), this.isBrowserEnvironment ? (n = e || N.EMPTY_STRING, o = this.redirectResponse.get(n), typeof o > "u" ? (this.eventHandler.emitEvent(Ee.HANDLE_REDIRECT_START, se.Redirect), this.logger.verbose("handleRedirectPromise has been called for the first time, storing the promise"), a = this.browserStorage.getCachedNativeRequest(), s = void 0, a && po.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider) && this.nativeExtensionProvider && !e ? (this.logger.trace("handleRedirectPromise - acquiring token from native platform"), l = new ei(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.handleRedirectPromise, this.performanceClient, this.nativeExtensionProvider, a.accountId, this.nativeInternalStorage, a.correlationId), s = l.handleRedirectPromise()) : (this.logger.trace("handleRedirectPromise - acquiring token from web flow"), u = this.browserStorage.getTemporaryCache(Be.CORRELATION_ID, !0) || N.EMPTY_STRING, f = this.createRedirectClient(u), s = f.handleRedirectPromise(e)), o = s.then(function(m) {
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
          return t = this.getRequestCorrelationId(e), this.logger.verbose("acquireTokenRedirect called", t), this.preflightBrowserEnvironmentCheck(se.Redirect), n = this.getAllAccounts().length > 0, n ? this.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_START, se.Redirect, e) : this.eventHandler.emitEvent(Ee.LOGIN_START, se.Redirect, e), this.nativeExtensionProvider && this.canUseNative(e) ? (a = new ei(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenRedirect, this.performanceClient, this.nativeExtensionProvider, this.getNativeAccountId(e), this.nativeInternalStorage, e.correlationId), o = a.acquireTokenRedirect(e).catch(function(f) {
            if (f instanceof rn && f.isFatal()) {
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
          if (u instanceof rn && u.isFatal()) {
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
            if (f instanceof rn && f.isFatal()) {
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
              throw J.createSpaCodeAndNativeAccountIdPresentError();
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
                  throw u instanceof rn && u.isFatal() && (s.nativeExtensionProvider = void 0), u;
                })];
              throw J.createUnableToAcquireTokenFromNativePlatformError();
            } else
              throw J.createAuthCodeOrNativeAccountIdRequiredError();
          } catch (u) {
            throw this.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_BY_CODE_FAILURE, se.Silent, null, u), n.endMeasurement({
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
              throw re.createRefreshRequiredError();
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
              throw re.createRefreshRequiredError();
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
        throw As.createInMemoryRedirectUnavailableError();
      (e === se.Redirect || e === se.Popup) && this.preflightInteractiveRequest(t);
    }, r.prototype.preflightInteractiveRequest = function(e) {
      this.logger.verbose("preflightInteractiveRequest called, validating app environment"), ct.blockReloadInHiddenIframes(), e && this.browserStorage.setInteractionInProgress(!0);
    }, r.prototype.acquireTokenNative = function(e, t, n) {
      return G(this, void 0, void 0, function() {
        var o;
        return z(this, function(a) {
          if (this.logger.trace("acquireTokenNative called"), !this.nativeExtensionProvider)
            throw J.createNativeConnectionNotEstablishedError();
          return o = new ei(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, t, this.performanceClient, this.nativeExtensionProvider, n || this.getNativeAccountId(e), this.nativeInternalStorage, e.correlationId), [2, o.acquireToken(e)];
        });
      });
    }, r.prototype.canUseNative = function(e, t) {
      if (this.logger.trace("canUseNative called"), !po.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, e.authenticationScheme))
        return this.logger.trace("canUseNative: isNativeAvailable returned false, returning false"), !1;
      if (e.prompt)
        switch (e.prompt) {
          case Ut.NONE:
          case Ut.CONSENT:
          case Ut.LOGIN:
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
      return new PI(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createRedirectClient = function(e) {
      return new kI(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentIframeClient = function(e) {
      return new DI(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.ssoSilent, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentCacheClient = function(e) {
      return new Xg(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentRefreshClient = function(e) {
      return new UI(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentAuthCodeClient = function(e) {
      return new eA(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenByCode, this.performanceClient, this.nativeExtensionProvider, e);
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
var rA = (
  /** @class */
  function(r) {
    Rt(e, r);
    function e(t) {
      var n = r.call(this, t) || this;
      return n.astsAsyncMeasurement = void 0, n.activeSilentTokenRequests = /* @__PURE__ */ new Map(), n.trackPageVisibility = n.trackPageVisibility.bind(n), n;
    }
    return e.prototype.loginRedirect = function(t) {
      return G(this, void 0, void 0, function() {
        var n;
        return z(this, function(o) {
          return n = this.getRequestCorrelationId(t), this.logger.verbose("loginRedirect called", n), [2, this.acquireTokenRedirect(ce({ correlationId: n }, t || xp))];
        });
      });
    }, e.prototype.loginPopup = function(t) {
      var n = this.getRequestCorrelationId(t);
      return this.logger.verbose("loginPopup called", n), this.acquireTokenPopup(ce({ correlationId: n }, t || xp));
    }, e.prototype.acquireTokenSilent = function(t) {
      return G(this, void 0, void 0, function() {
        var n, o, a, s, l, u, f, h = this;
        return z(this, function(p) {
          if (n = this.getRequestCorrelationId(t), o = this.performanceClient.startMeasurement(F.AcquireTokenSilent, n), o.addStaticFields({
            cacheLookupPolicy: t.cacheLookupPolicy
          }), this.preflightBrowserEnvironmentCheck(se.Silent), this.logger.verbose("acquireTokenSilent called", n), a = t.account || this.getActiveAccount(), !a)
            throw J.createNoAccountError();
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
              }), document.addEventListener("visibilitychange", this.trackPageVisibility), po.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, t.authenticationScheme) && n.nativeAccountId ? (this.logger.verbose("acquireTokenSilent - attempting to acquire token from native platform"), s = ce(ce({}, t), { account: n }), a = this.acquireTokenNative(s, Ze.acquireTokenSilent_silentFlow).catch(function(m) {
                return G(h, void 0, void 0, function() {
                  var v;
                  return z(this, function(C) {
                    if (m instanceof rn && m.isFatal())
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
                  var C = v instanceof yo, E = v instanceof Gr, _ = v.errorCode === Qo.noTokensFoundError.code, R = v.errorCode === qr.INVALID_GRANT_ERROR;
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
  }(tA)
);
function nn(r) {
  return Object.keys(r);
}
function xl(r) {
  return r && typeof r == "object" && !Array.isArray(r);
}
function Lu(r, e) {
  const t = { ...r }, n = e;
  return xl(r) && xl(e) && Object.keys(e).forEach((o) => {
    xl(n[o]) && o in r ? t[o] = Lu(t[o], n[o]) : t[o] = n[o];
  }), t;
}
function nA(r) {
  return r.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
function oA(r) {
  var e;
  return typeof r != "string" || !r.includes("var(--mantine-scale)") ? r : (e = r.match(/^calc\((.*?)\)$/)) == null ? void 0 : e[1].split("*")[0].trim();
}
function iA(r) {
  const e = oA(r);
  return typeof e == "number" ? e : typeof e == "string" ? e.includes("calc") || e.includes("var") ? e : e.includes("px") ? Number(e.replace("px", "")) : e.includes("rem") ? Number(e.replace("rem", "")) * 16 : e.includes("em") ? Number(e.replace("em", "")) * 16 : Number(e) : NaN;
}
function Ll(r) {
  return `calc(${r} * var(--mantine-scale))`;
}
function nm(r, { shouldScale: e = !1 } = {}) {
  function t(n) {
    if (n === 0 || n === "0")
      return "0";
    if (typeof n == "number") {
      const o = `${n / 16}${r}`;
      return e ? Ll(o) : o;
    }
    if (typeof n == "string") {
      if (n.startsWith("calc(") || n.startsWith("var(") || n.startsWith("clamp("))
        return n;
      if (n.includes(" "))
        return n.split(" ").map((a) => t(a)).join(" ");
      if (n.includes(r))
        return e ? Ll(n) : n;
      const o = n.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const a = `${Number(o) / 16}${r}`;
        return e ? Ll(a) : a;
      }
    }
    return n;
  }
  return t;
}
const $ = nm("rem", { shouldScale: !0 }), Kp = nm("em");
function Du(r) {
  return Object.keys(r).reduce((e, t) => (r[t] !== void 0 && (e[t] = r[t]), e), {});
}
function om(r) {
  return typeof r == "number" ? !0 : typeof r == "string" ? r.startsWith("calc(") || r.startsWith("var(") || r.includes(" ") && r.trim() !== "" ? !0 : /[0-9]/.test(r.trim().replace("-", "")[0]) : !1;
}
function ia(r) {
  return Array.isArray(r) || r === null ? !1 : typeof r == "object" ? r.type !== P.Fragment : !1;
}
function ui(r) {
  const e = _o(null);
  return [({ children: o, value: a }) => /* @__PURE__ */ P.createElement(e.Provider, { value: a }, o), () => {
    const o = Vn(e);
    if (o === null)
      throw new Error(r);
    return o;
  }];
}
function aA(r = null) {
  const e = _o(r);
  return [({ children: o, value: a }) => /* @__PURE__ */ P.createElement(e.Provider, { value: a }, o), () => Vn(e)];
}
function qp(r, e) {
  return (t) => {
    if (typeof t != "string" || t.trim().length === 0)
      throw new Error(e);
    return `${r}-${t}`;
  };
}
function fu(r, e) {
  let t = r;
  for (; (t = t.parentElement) && !t.matches(e); )
    ;
  return t;
}
function sA(r, e, t) {
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
function cA(r, e, t) {
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
function lA(r, e, t) {
  return fu(r, t) === fu(e, t);
}
function uA({
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
      ((C = fu(l.currentTarget, r)) == null ? void 0 : C.querySelectorAll(
        e
      )) || []
    ).filter((E) => lA(l.currentTarget, E, r)), f = u.findIndex((E) => l.currentTarget === E), h = cA(f, u, n), p = sA(f, u, n), m = a === "rtl" ? p : h, v = a === "rtl" ? h : p;
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
const dA = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function fA(r) {
  return dA[r];
}
const hA = () => {
};
function pA(r, e = { active: !0 }) {
  return typeof r != "function" || !e.active ? e.onKeyDown || hA : (t) => {
    var n;
    t.key === "Escape" && (r(t), (n = e.onTrigger) == null || n.call(e));
  };
}
function Ft(r, e = "size", t = !0) {
  if (r !== void 0)
    return om(r) ? t ? $(r) : r : `var(--${e}-${r})`;
}
function Uu(r) {
  return Ft(r, "mantine-spacing");
}
function di(r) {
  return r === void 0 ? "var(--mantine-radius-default)" : Ft(r, "mantine-radius");
}
function Pr(r) {
  return Ft(r, "mantine-font-size");
}
function gA(r) {
  if (r)
    return Ft(r, "mantine-shadow", !1);
}
function im(r) {
  var e, t, n = "";
  if (typeof r == "string" || typeof r == "number")
    n += r;
  else if (typeof r == "object")
    if (Array.isArray(r))
      for (e = 0; e < r.length; e++)
        r[e] && (t = im(r[e])) && (n && (n += " "), n += t);
    else
      for (e in r)
        r[e] && (n && (n += " "), n += e);
  return n;
}
function Rn() {
  for (var r, e, t = 0, n = ""; t < arguments.length; )
    (r = arguments[t++]) && (e = im(r)) && (n && (n += " "), n += e);
  return n;
}
const mA = {};
function vA(r) {
  const e = {};
  return r.forEach((t) => {
    Object.entries(t).forEach(([n, o]) => {
      e[n] ? e[n] = Rn(e[n], o) : e[n] = o;
    });
  }), e;
}
function zs({ theme: r, classNames: e, props: t, stylesCtx: n }) {
  const a = (Array.isArray(e) ? e : [e]).map(
    (s) => typeof s == "function" ? s(r, t, n) : s || mA
  );
  return vA(a);
}
function ks({ theme: r, styles: e, props: t, stylesCtx: n }) {
  return (Array.isArray(e) ? e : [e]).reduce((a, s) => typeof s == "function" ? { ...a, ...s(r, t, n) } : { ...a, ...s }, {});
}
function am() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function lo(r) {
  const e = Ke(r);
  return ye(() => {
    e.current = r;
  }), fs(() => (...t) => {
    var n;
    return (n = e.current) == null ? void 0 : n.call(e, ...t);
  }, []);
}
function Ws(r, e) {
  const t = lo(r), n = Ke(0);
  return ye(() => () => window.clearTimeout(n.current), []), ze(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(t, e);
  }, [t, e]);
}
const $p = ["mousedown", "touchstart"];
function yA(r, e, t) {
  const n = Ke();
  return ye(() => {
    const o = (a) => {
      const { target: s } = a ?? {};
      if (Array.isArray(t)) {
        const l = (s == null ? void 0 : s.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(s) && s.tagName !== "HTML";
        t.every((f) => !!f && !a.composedPath().includes(f)) && !l && r();
      } else
        n.current && !n.current.contains(s) && r();
    };
    return (e || $p).forEach((a) => document.addEventListener(a, o)), () => {
      (e || $p).forEach((a) => document.removeEventListener(a, o));
    };
  }, [n, r, t]), n;
}
function CA(r, e) {
  try {
    return r.addEventListener("change", e), () => r.removeEventListener("change", e);
  } catch {
    return r.addListener(e), () => r.removeListener(e);
  }
}
function wA(r, e) {
  return typeof e == "boolean" ? e : typeof window < "u" && "matchMedia" in window ? window.matchMedia(r).matches : !1;
}
function EA(r, e, { getInitialValueInEffect: t } = {
  getInitialValueInEffect: !0
}) {
  const [n, o] = pe(
    t ? e : wA(r, e)
  ), a = Ke();
  return ye(() => {
    if ("matchMedia" in window)
      return a.current = window.matchMedia(r), o(a.current.matches), CA(a.current, (s) => o(s.matches));
  }, [r]), n;
}
function bA(r, e, t = { leading: !1 }) {
  const [n, o] = pe(r), a = Ke(!1), s = Ke(null), l = Ke(!1), u = () => window.clearTimeout(s.current);
  return ye(() => {
    a.current && (!l.current && t.leading ? (l.current = !0, o(r)) : (u(), s.current = window.setTimeout(() => {
      l.current = !1, o(r);
    }, e)));
  }, [r, t.leading, e]), ye(() => (a.current = !0, u), []), [n, u];
}
const aa = typeof document < "u" ? Tu : ye;
function Co(r, e) {
  const t = Ke(!1);
  ye(
    () => () => {
      t.current = !1;
    },
    []
  ), ye(() => {
    if (t.current)
      return r();
    t.current = !0;
  }, e);
}
function _A({ opened: r, shouldReturnFocus: e = !0 }) {
  const t = Ke(), n = () => {
    var o;
    t.current && "focus" in t.current && typeof t.current.focus == "function" && ((o = t.current) == null || o.focus({ preventScroll: !0 }));
  };
  return Co(() => {
    let o = -1;
    const a = (s) => {
      s.key === "Tab" && window.clearTimeout(o);
    };
    return document.addEventListener("keydown", a), r ? t.current = document.activeElement : e && (o = window.setTimeout(n, 10)), () => {
      window.clearTimeout(o), document.removeEventListener("keydown", a);
    };
  }, [r, e]), n;
}
function SA(r, e = "body > :not(script)") {
  const t = am(), n = Array.from(
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
const TA = /input|select|textarea|button|object/, sm = "a, input, select, textarea, button, object, [tabindex]";
function IA(r) {
  return r.style.display === "none";
}
function AA(r) {
  if (r.getAttribute("aria-hidden") || r.getAttribute("hidden") || r.getAttribute("type") === "hidden")
    return !1;
  let t = r;
  for (; t && !(t === document.body || t.nodeType === 11); ) {
    if (IA(t))
      return !1;
    t = t.parentNode;
  }
  return !0;
}
function cm(r) {
  let e = r.getAttribute("tabindex");
  return e === null && (e = void 0), parseInt(e, 10);
}
function hu(r) {
  const e = r.nodeName.toLowerCase(), t = !Number.isNaN(cm(r));
  return /* @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition */ (TA.test(e) && !r.disabled || r instanceof HTMLAnchorElement && r.href || t) && AA(r);
}
function lm(r) {
  const e = cm(r);
  return (Number.isNaN(e) || e >= 0) && hu(r);
}
function RA(r) {
  return Array.from(r.querySelectorAll(sm)).filter(lm);
}
function kA(r, e) {
  const t = RA(r);
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
function PA(r = !0) {
  const e = Ke(), t = Ke(null), n = (a) => {
    let s = a.querySelector("[data-autofocus]");
    if (!s) {
      const l = Array.from(a.querySelectorAll(sm));
      s = l.find(lm) || l.find(hu) || null, !s && hu(a) && (s = a);
    }
    s && s.focus({ preventScroll: !0 });
  }, o = ze(
    (a) => {
      if (r) {
        if (a === null) {
          t.current && (t.current(), t.current = null);
          return;
        }
        t.current = SA(a), e.current !== a && (a ? (setTimeout(() => {
          a.getRootNode() && n(a);
        }), e.current = a) : e.current = null);
      }
    },
    [r]
  );
  return ye(() => {
    if (!r)
      return;
    e.current && setTimeout(() => n(e.current));
    const a = (s) => {
      s.key === "Tab" && e.current && kA(e.current, s);
    };
    return document.addEventListener("keydown", a), () => {
      document.removeEventListener("keydown", a), t.current && t.current();
    };
  }, [r]), o;
}
const NA = P["useId".toString()] || (() => {
});
function OA() {
  const r = NA();
  return r ? `mantine-${r.replace(/:/g, "")}` : "";
}
function So(r) {
  const e = OA(), [t, n] = pe(e);
  return aa(() => {
    n(am());
  }, []), typeof r == "string" ? r : typeof window > "u" ? e : t;
}
function um(r, e) {
  typeof r == "function" ? r(e) : typeof r == "object" && r !== null && "current" in r && (r.current = e);
}
function dm(...r) {
  return (e) => {
    r.forEach((t) => um(t, e));
  };
}
function Or(...r) {
  return ze(dm(...r), r);
}
function wo({
  value: r,
  defaultValue: e,
  finalValue: t,
  onChange: n = () => {
  }
}) {
  const [o, a] = pe(
    e !== void 0 ? e : t
  ), s = (l) => {
    a(l), n == null || n(l);
  };
  return r !== void 0 ? [r, n, !0] : [o, s, !1];
}
function fm(r, e) {
  return EA("(prefers-reduced-motion: reduce)", r, e);
}
const hm = _o(null);
function Fu() {
  const r = Vn(hm);
  if (!r)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return r;
}
function MA() {
  return Fu().cssVariablesResolver;
}
function xA() {
  return Fu().classNamesPrefix;
}
function Hu() {
  return Fu().getStyleNonce;
}
function LA(r) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(r);
}
function DA(r) {
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
function UA(r) {
  const [e, t, n, o] = r.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r: e, g: t, b: n, a: o || 1 };
}
function FA(r) {
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
function pm(r) {
  return LA(r) ? DA(r) : r.startsWith("rgb") ? UA(r) : r.startsWith("hsl") ? FA(r) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function is(r, e) {
  if (r.startsWith("var("))
    return r;
  const { r: t, g: n, b: o, a } = pm(r), s = 1 - e, l = (u) => Math.round(u * s);
  return `rgba(${l(t)}, ${l(n)}, ${l(o)}, ${a})`;
}
function pu(r, e) {
  return typeof r.primaryShade == "number" ? r.primaryShade : e === "dark" ? r.primaryShade.dark : r.primaryShade.light;
}
function Vs({
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
    value: a !== void 0 ? e.colors[n][a] : e.colors[n][pu(e, t || "light")],
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
function Ji(r, e) {
  const t = Vs({ color: r || e.primaryColor, theme: e });
  return t.variable ? `var(${t.variable})` : r;
}
function Gp(r, e) {
  const t = {
    from: (r == null ? void 0 : r.from) || e.defaultGradient.from,
    to: (r == null ? void 0 : r.to) || e.defaultGradient.to,
    deg: (r == null ? void 0 : r.deg) || e.defaultGradient.deg || 0
  }, n = Ji(t.from, e), o = Ji(t.to, e);
  return `linear-gradient(${t.deg}deg, ${n} 0%, ${o} 100%)`;
}
function tr(r, e) {
  if (typeof r != "string" || e > 1 || e < 0)
    return "rgba(0, 0, 0, 1)";
  const { r: t, g: n, b: o } = pm(r);
  return `rgba(${t}, ${n}, ${o}, ${e})`;
}
const HA = ({
  color: r,
  theme: e,
  variant: t,
  gradient: n
}) => {
  const o = Vs({ color: r, theme: e });
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
      hover: is(r, 0.1),
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
    hover: is(e.white, 0.01),
    color: `var(--mantine-color-${r}-filled)`,
    border: `${$(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: is(e.white, 0.01),
    color: `var(--mantine-color-${o.color}-${o.shade})`,
    border: `${$(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: is(e.white, 0.01),
    color: r,
    border: `${$(1)} solid transparent`
  } : t === "gradient" ? {
    background: Gp(n, e),
    hover: Gp(n, e),
    color: "var(--mantine-color-white)",
    border: "none"
  } : t === "default" ? {
    background: "var(--mantine-color-default)",
    hover: "var(--mantine-color-default-hover)",
    color: "var(--mantine-color-default-color)",
    border: `${$(1)} solid var(--mantine-color-default-border)`
  } : {};
}, BA = {
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
}, zp = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", Bu = {
  scale: 1,
  fontSmoothing: !0,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: BA,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: HA,
  fontFamily: zp,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: !1,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: zp,
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
function Wp(r) {
  return r === "auto" || r === "dark" || r === "light";
}
function KA({
  key: r = "mantine-color-scheme-value"
} = {}) {
  let e;
  return {
    get: (t) => {
      if (typeof window > "u")
        return t;
      try {
        const n = window.localStorage.getItem(r);
        return Wp(n) ? n : t;
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
        n.storageArea === window.localStorage && n.key === r && Wp(n.newValue) && t(n.newValue);
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
const qA = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", Vp = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function Dl(r) {
  return r < 0 || r > 9 ? !1 : parseInt(r.toString(), 10) === r;
}
function jp(r) {
  if (!(r.primaryColor in r.colors))
    throw new Error(qA);
  if (typeof r.primaryShade == "object" && (!Dl(r.primaryShade.dark) || !Dl(r.primaryShade.light)))
    throw new Error(Vp);
  if (typeof r.primaryShade == "number" && !Dl(r.primaryShade))
    throw new Error(Vp);
}
function $A(r, e) {
  var n;
  if (!e)
    return jp(r), r;
  const t = Lu(r, e);
  return e.fontFamily && !((n = e.headings) != null && n.fontFamily) && (t.headings.fontFamily = e.fontFamily), jp(t), t;
}
const Ku = _o(null), GA = () => Vn(Ku) || Bu;
function jn() {
  const r = Vn(Ku);
  if (!r)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return r;
}
function gm({
  theme: r,
  children: e,
  inherit: t = !0
}) {
  const n = GA(), o = fs(
    () => $A(t ? n : Bu, r),
    [r, n, t]
  );
  return /* @__PURE__ */ P.createElement(Ku.Provider, { value: o }, e);
}
gm.displayName = "@mantine/core/MantineThemeProvider";
function zA() {
  const r = jn(), e = Hu(), t = nn(r.breakpoints).reduce((n, o) => {
    const a = iA(r.breakpoints[o]);
    return `${n}@media (max-width: ${Kp(
      a - 0.1
    )}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${Kp(
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
function Ul(r) {
  return Object.entries(r).map(([e, t]) => `${e}: ${t};`).join("");
}
function Fl(r, e) {
  return (Array.isArray(r) ? r : [r]).reduce((n, o) => `${o}{${n}}`, e);
}
function WA(r, e) {
  const t = Ul(r.variables), n = t ? Fl(e, t) : "", o = Ul(r.dark), a = o ? Fl(`${e}[data-mantine-color-scheme="dark"]`, o) : "", s = Ul(r.light), l = s ? Fl(`${e}[data-mantine-color-scheme="light"]`, s) : "";
  return `${n}${a}${l}`;
}
function Go(r, e, t) {
  nn(e).forEach(
    (n) => Object.assign(r, { [`--mantine-${t}-${n}`]: e[n] })
  );
}
const mm = (r) => {
  const e = pu(r, "dark"), t = pu(r, "light"), n = r.defaultRadius in r.radius ? r.radius[r.defaultRadius] : $(r.defaultRadius), o = {
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
  Go(o.variables, r.breakpoints, "breakpoint"), Go(o.variables, r.spacing, "spacing"), Go(o.variables, r.fontSizes, "font-size"), Go(o.variables, r.lineHeights, "line-height"), Go(o.variables, r.shadows, "shadow"), Go(o.variables, r.radius, "radius"), r.colors[r.primaryColor].forEach((s, l) => {
    o.variables[`--mantine-primary-color-${l}`] = `var(--mantine-color-${r.primaryColor}-${l})`;
  }), nn(r.colors).forEach((s) => {
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
  return nn(a).forEach((s) => {
    o.variables[`--mantine-${s}-font-size`] = a[s].fontSize, o.variables[`--mantine-${s}-line-height`] = a[s].lineHeight, o.variables[`--mantine-${s}-font-weight`] = a[s].fontWeight || r.headings.fontWeight;
  }), o;
};
function VA({ theme: r, generator: e }) {
  const t = mm(r), n = e == null ? void 0 : e(r);
  return n ? Lu(t, n) : t;
}
const Hl = mm(Bu);
function jA(r) {
  const e = {
    variables: {},
    light: {},
    dark: {}
  };
  return nn(r.variables).forEach((t) => {
    Hl.variables[t] !== r.variables[t] && (e.variables[t] = r.variables[t]);
  }), nn(r.light).forEach((t) => {
    Hl.light[t] !== r.light[t] && (e.light[t] = r.light[t]);
  }), nn(r.dark).forEach((t) => {
    Hl.dark[t] !== r.dark[t] && (e.dark[t] = r.dark[t]);
  }), e;
}
function YA(r) {
  return `
  ${r}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${r}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function vm({ cssVariablesSelector: r }) {
  const e = jn(), t = Hu(), n = MA(), o = VA({ theme: e, generator: n }), a = r === ":root", s = a ? jA(o) : o, l = WA(s, r);
  return l ? /* @__PURE__ */ P.createElement(
    "style",
    {
      "data-mantine-styles": !0,
      nonce: t == null ? void 0 : t(),
      dangerouslySetInnerHTML: {
        __html: `${l}${a ? "" : YA(r)}`
      }
    }
  ) : null;
}
vm.displayName = "@mantine/CssVariables";
function QA() {
  const r = console.error;
  console.error = (...e) => {
    e.length > 1 && typeof e[0] == "string" && e[0].toLowerCase().includes("extra attributes from the server") && typeof e[1] == "string" && e[1].toLowerCase().includes("data-mantine-color-scheme") || r(...e);
  };
}
function xi(r, e) {
  var n;
  const t = r !== "auto" ? r : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  (n = e()) == null || n.setAttribute("data-mantine-color-scheme", t);
}
function JA({
  manager: r,
  defaultColorScheme: e,
  getRootElement: t,
  forceColorScheme: n
}) {
  const o = Ke(), [a, s] = pe(() => r.get(e)), l = n || a, u = ze(
    (h) => {
      n || (xi(h, t), s(h), r.set(h));
    },
    [r.set, l, n]
  ), f = ze(() => {
    s(e), xi(e, t), r.clear();
  }, [r.clear, e]);
  return ye(() => (r.subscribe(u), r.unsubscribe), [r.subscribe, r.unsubscribe]), aa(() => {
    xi(r.get(e), t);
  }, []), ye(() => {
    var p;
    if (n)
      return xi(n, t), () => {
      };
    o.current = window.matchMedia("(prefers-color-scheme: dark)");
    const h = (m) => {
      a === "auto" && xi(m.matches ? "dark" : "light", t);
    };
    return (p = o.current) == null || p.addEventListener("change", h), () => {
      var m;
      return (m = o.current) == null ? void 0 : m.removeEventListener("change", h);
    };
  }, [a, n]), { colorScheme: l, setColorScheme: u, clearColorScheme: f };
}
function XA({
  respectReducedMotion: r,
  getRootElement: e
}) {
  aa(() => {
    var t;
    r && ((t = e()) == null || t.setAttribute("data-respect-reduced-motion", "true"));
  }, [r]);
}
QA();
function ym({
  theme: r,
  children: e,
  getStyleNonce: t,
  withCssVariables: n = !0,
  cssVariablesSelector: o = ":root",
  classNamesPrefix: a = "mantine",
  colorSchemeManager: s = KA(),
  defaultColorScheme: l = "light",
  getRootElement: u = () => document.documentElement,
  cssVariablesResolver: f,
  forceColorScheme: h
}) {
  const { colorScheme: p, setColorScheme: m, clearColorScheme: v } = JA({
    defaultColorScheme: l,
    forceColorScheme: h,
    manager: s,
    getRootElement: u
  });
  return XA({
    respectReducedMotion: (r == null ? void 0 : r.respectReducedMotion) || !1,
    getRootElement: u
  }), /* @__PURE__ */ P.createElement(
    hm.Provider,
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
    /* @__PURE__ */ P.createElement(gm, { theme: r }, n && /* @__PURE__ */ P.createElement(vm, { cssVariablesSelector: o }), /* @__PURE__ */ P.createElement(zA, null), e)
  );
}
ym.displayName = "@mantine/core/MantineProvider";
function Cm({
  classNames: r,
  styles: e,
  props: t,
  stylesCtx: n
}) {
  const o = jn();
  return {
    resolvedClassNames: zs({
      theme: o,
      classNames: r,
      props: t,
      stylesCtx: n || void 0
    }),
    resolvedStyles: ks({
      theme: o,
      styles: e,
      props: t,
      stylesCtx: n || void 0
    })
  };
}
const ZA = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function eR({ theme: r, options: e, unstyled: t }) {
  return Rn(
    (e == null ? void 0 : e.focusable) && !t && (r.focusClassName || ZA[r.focusRing]),
    (e == null ? void 0 : e.active) && !t && r.activeClassName
  );
}
function tR({
  selector: r,
  stylesCtx: e,
  options: t,
  props: n,
  theme: o
}) {
  return zs({
    theme: o,
    classNames: t == null ? void 0 : t.classNames,
    props: (t == null ? void 0 : t.props) || n,
    stylesCtx: e
  })[r];
}
function rR({
  selector: r,
  stylesCtx: e,
  theme: t,
  classNames: n,
  props: o
}) {
  return zs({ theme: t, classNames: n, props: o, stylesCtx: e })[r];
}
function nR({ rootSelector: r, selector: e, className: t }) {
  return r === e ? t : void 0;
}
function oR({ selector: r, classes: e, unstyled: t }) {
  return t ? void 0 : e[r];
}
function iR({
  themeName: r,
  classNamesPrefix: e,
  selector: t
}) {
  return r.map((n) => `${e}-${n}-${t}`);
}
function aR({
  themeName: r,
  theme: e,
  selector: t,
  props: n,
  stylesCtx: o
}) {
  return r.map(
    (a) => {
      var s, l;
      return (l = zs({
        theme: e,
        classNames: (s = e.components[a]) == null ? void 0 : s.classNames,
        props: n,
        stylesCtx: o
      })) == null ? void 0 : l[t];
    }
  );
}
function sR({
  options: r,
  classes: e,
  selector: t,
  unstyled: n
}) {
  return r != null && r.variant && !n ? e[`${t}--${r.variant}`] : void 0;
}
function cR({
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
    eR({ theme: r, options: e, unstyled: l }),
    aR({ theme: r, themeName: t, selector: n, props: h, stylesCtx: p }),
    sR({ options: e, classes: s, selector: n, unstyled: l }),
    rR({ selector: n, stylesCtx: p, theme: r, classNames: a, props: h }),
    tR({ selector: n, stylesCtx: p, options: e, props: h, theme: r }),
    nR({ rootSelector: f, selector: n, className: u }),
    oR({ selector: n, classes: s, unstyled: l }),
    iR({ themeName: t, classNamesPrefix: o, selector: n }),
    e == null ? void 0 : e.className
  );
}
function lR({
  theme: r,
  themeName: e,
  props: t,
  stylesCtx: n,
  selector: o
}) {
  return e.map(
    (a) => {
      var s;
      return ks({
        theme: r,
        styles: (s = r.components[a]) == null ? void 0 : s.styles,
        props: t,
        stylesCtx: n
      })[o];
    }
  ).reduce((a, s) => ({ ...a, ...s }), {});
}
function gu({ style: r, theme: e }) {
  return Array.isArray(r) ? [...r].reduce(
    (t, n) => ({ ...t, ...gu({ style: n, theme: e }) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function uR(r) {
  return r.reduce((e, t) => (t && Object.keys(t).forEach((n) => {
    e[n] = { ...e[n], ...Du(t[n]) };
  }), e), {});
}
function dR({
  vars: r,
  varsResolver: e,
  theme: t,
  props: n,
  stylesCtx: o,
  selector: a,
  themeName: s
}) {
  var l;
  return (l = uR([
    e == null ? void 0 : e(t, n, o),
    ...s.map((u) => {
      var f, h, p;
      return (p = (h = (f = t.components) == null ? void 0 : f[u]) == null ? void 0 : h.vars) == null ? void 0 : p.call(h, t, n, o);
    }),
    r == null ? void 0 : r(t, n, o)
  ])) == null ? void 0 : l[a];
}
function fR({
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
    ...lR({ theme: r, themeName: e, props: o, stylesCtx: a, selector: t }),
    ...ks({ theme: r, styles: l, props: o, stylesCtx: a })[t],
    ...ks({ theme: r, styles: n == null ? void 0 : n.styles, props: (n == null ? void 0 : n.props) || o, stylesCtx: a })[t],
    ...dR({ theme: r, props: o, stylesCtx: a, vars: f, varsResolver: h, selector: t, themeName: e }),
    ...s === t ? gu({ style: u, theme: r }) : null,
    ...gu({ style: n == null ? void 0 : n.style, theme: r })
  };
}
function lt({
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
  const m = jn(), v = xA(), C = (Array.isArray(r) ? r : [r]).filter((E) => E);
  return (E, _) => ({
    className: cR({
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
    style: fR({
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
  const n = jn(), o = (s = n.components[r]) == null ? void 0 : s.defaultProps, a = typeof o == "function" ? o(n) : o;
  return { ...e, ...a, ...Du(t) };
}
function Yp(r) {
  return nn(r).reduce(
    (e, t) => r[t] !== void 0 ? `${e}${nA(t)}:${r[t]};` : e,
    ""
  ).trim();
}
function hR({ selector: r, styles: e, media: t }) {
  const n = e ? Yp(e) : "", o = Array.isArray(t) ? t.map((a) => `@media${a.query}{${r}{${Yp(a.styles)}}}`) : [];
  return `${n ? `${r}{${n}}` : ""}${o.join("")}`.trim();
}
function pR({ selector: r, styles: e, media: t }) {
  const n = Hu();
  return /* @__PURE__ */ P.createElement(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: n == null ? void 0 : n(),
      dangerouslySetInnerHTML: { __html: hR({ selector: r, styles: e, media: t }) }
    }
  );
}
function js(r) {
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
    ff: I,
    fz: S,
    fw: A,
    lts: O,
    ta: L,
    lh: q,
    fs: D,
    tt: Q,
    td: X,
    w: le,
    miw: ne,
    maw: fe,
    h: oe,
    mih: we,
    mah: Y,
    bgsz: ie,
    bgp: te,
    bgr: Pe,
    bga: Qe,
    pos: ot,
    top: ut,
    left: jr,
    bottom: sn,
    right: jt,
    inset: ir,
    display: cn,
    hiddenFrom: ar,
    visibleFrom: Dr,
    lightHidden: ln,
    darkHidden: Kt,
    ...Cr
  } = r;
  return { styleProps: Du({
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
    ff: I,
    fz: S,
    fw: A,
    lts: O,
    ta: L,
    lh: q,
    fs: D,
    tt: Q,
    td: X,
    w: le,
    miw: ne,
    maw: fe,
    h: oe,
    mih: we,
    mah: Y,
    bgsz: ie,
    bgp: te,
    bgr: Pe,
    bga: Qe,
    pos: ot,
    top: ut,
    left: jr,
    bottom: sn,
    right: jt,
    inset: ir,
    display: cn,
    hiddenFrom: ar,
    visibleFrom: Dr,
    lightHidden: ln,
    darkHidden: Kt
  }), rest: Cr };
}
const gR = {
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
function mR(r, e) {
  const t = Vs({ color: r, theme: e });
  return t.color === "dimmed" ? "var(--mantine-color-dimmed)" : t.color === "bright" ? "var(--mantine-color-bright)" : t.isThemeColor && t.shade === void 0 ? `var(--mantine-color-${t.color}-text)` : t.variable ? `var(${t.variable})` : t.color;
}
function vR(r, e) {
  return typeof r == "string" && r in e.fontSizes ? `var(--mantine-font-size-${r})` : typeof r == "number" || typeof r == "string" ? $(r) : r;
}
function yR(r) {
  return r;
}
function CR(r, e) {
  return typeof r == "string" && r in e.lineHeights ? `var(--mantine-line-height-${r})` : r;
}
function wR(r) {
  return typeof r == "number" ? $(r) : r;
}
function ER(r, e) {
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
const Bl = {
  color: mR,
  fontSize: vR,
  spacing: ER,
  identity: yR,
  size: wR,
  lineHeight: CR
};
function Qp(r) {
  return r.replace("(min-width: ", "").replace("em)", "");
}
function bR({
  media: r,
  ...e
}) {
  const n = Object.keys(r).sort((o, a) => Number(Qp(o)) - Number(Qp(a))).map((o) => ({ query: o, styles: r[o] }));
  return { ...e, media: n };
}
function _R(r) {
  if (typeof r != "object" || r === null)
    return !1;
  const e = Object.keys(r);
  return !(e.length === 1 && e[0] === "base");
}
function SR(r) {
  return typeof r == "object" && r !== null ? "base" in r ? r.base : void 0 : r;
}
function TR(r) {
  return typeof r == "object" && r !== null ? nn(r).filter((e) => e !== "base") : [];
}
function IR(r, e) {
  return typeof r == "object" && r !== null && e in r ? r[e] : r;
}
function AR({
  styleProps: r,
  data: e,
  theme: t
}) {
  return bR(
    nn(r).reduce(
      (n, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom")
          return n;
        const a = e[o], s = Array.isArray(a.property) ? a.property : [a.property], l = SR(r[o]);
        if (!_R(r[o]))
          return s.forEach((f) => {
            n.inlineStyles[f] = Bl[a.type](l, t);
          }), n;
        n.hasResponsiveStyles = !0;
        const u = TR(r[o]);
        return s.forEach((f) => {
          l && (n.styles[f] = Bl[a.type](l, t)), u.forEach((h) => {
            const p = `(min-width: ${t.breakpoints[h]})`;
            n.media[p] = {
              ...n.media[p],
              [f]: Bl[a.type](
                IR(r[o], h),
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
function RR() {
  return `__m__-${Og().replace(/:/g, "")}`;
}
function wm(r, e) {
  return Array.isArray(r) ? [...r].reduce(
    (t, n) => ({ ...t, ...wm(n, e) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function Em(r) {
  return r.startsWith("data-") ? r : `data-${r}`;
}
function kR(r) {
  return Object.keys(r).reduce((e, t) => {
    const n = r[t];
    return n === void 0 || n === "" || n === !1 || n === null || (e[Em(t)] = r[t]), e;
  }, {});
}
function bm(r) {
  return r ? typeof r == "string" ? { [Em(r)]: !0 } : Array.isArray(r) ? [...r].reduce(
    (e, t) => ({ ...e, ...bm(t) }),
    {}
  ) : kR(r) : null;
}
function mu(r, e) {
  return Array.isArray(r) ? [...r].reduce(
    (t, n) => ({ ...t, ...mu(n, e) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function PR({
  theme: r,
  style: e,
  vars: t,
  styleProps: n
}) {
  const o = mu(e, r), a = mu(t, r);
  return { ...o, ...a, ...n };
}
const _m = ht(
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
    const C = jn(), E = r || "div", { styleProps: _, rest: R } = js(m), I = RR(), S = AR({
      styleProps: _,
      theme: C,
      data: gR
    }), A = {
      ref: v,
      style: PR({
        theme: C,
        style: e,
        vars: t,
        styleProps: S.inlineStyles
      }),
      className: Rn(n, {
        [I]: S.hasResponsiveStyles,
        "mantine-light-hidden": f,
        "mantine-dark-hidden": h,
        [`mantine-hidden-from-${l}`]: l,
        [`mantine-visible-from-${u}`]: u
      }),
      "data-variant": o,
      "data-size": om(s) ? void 0 : s || void 0,
      ...bm(a),
      ...R
    };
    return /* @__PURE__ */ P.createElement(P.Fragment, null, S.hasResponsiveStyles && /* @__PURE__ */ P.createElement(
      pR,
      {
        selector: `.${I}`,
        styles: S.styles,
        media: S.media
      }
    ), typeof p == "function" ? p(A) : /* @__PURE__ */ P.createElement(E, { ...A }));
  }
);
_m.displayName = "@mantine/core/Box";
const ke = _m;
function Sm(r) {
  return r;
}
function Ue(r) {
  const e = ht(r);
  return e.extend = Sm, e;
}
function sa(r) {
  const e = ht(r);
  return e.extend = Sm, e;
}
const NR = _o({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function qu() {
  return Vn(NR);
}
function OR(r) {
  if (!r || typeof r == "string")
    return 0;
  const e = r / 36;
  return Math.round((4 + 15 * e ** 0.25 + e / 5) * 10);
}
function Kl(r) {
  return r != null && r.current ? r.current.scrollHeight : "auto";
}
const Li = typeof window < "u" && window.requestAnimationFrame;
function MR({
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
  }, [l, u] = pe(n ? {} : s), f = (C) => {
    FT(() => u(C));
  }, h = (C) => {
    f((E) => ({ ...E, ...C }));
  };
  function p(C) {
    return {
      transition: `height ${r || OR(C)}ms ${e}`
    };
  }
  Co(() => {
    typeof Li == "function" && Li(n ? () => {
      h({ willChange: "height", display: "block", overflow: "hidden" }), Li(() => {
        const C = Kl(o);
        h({ ...p(C), height: C });
      });
    } : () => {
      const C = Kl(o);
      h({ ...p(C), willChange: "height", height: C }), Li(() => h({ height: a, overflow: "hidden" }));
    });
  }, [n]);
  const m = (C) => {
    if (!(C.target !== o.current || C.propertyName !== "height"))
      if (n) {
        const E = Kl(o);
        E === l.height ? f({}) : h({ height: E }), t();
      } else
        l.height === a && (f(s), t());
  };
  function v({ style: C = {}, refKey: E = "ref", ..._ } = {}) {
    const R = _[E];
    return {
      "aria-hidden": !n,
      ..._,
      [E]: dm(o, R),
      onTransitionEnd: m,
      style: { boxSizing: "border-box", ...C, ...l }
    };
  }
  return v;
}
const xR = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: !0
}, Tm = Ue((r, e) => {
  const {
    children: t,
    in: n,
    transitionDuration: o,
    transitionTimingFunction: a,
    style: s,
    onTransitionEnd: l,
    animateOpacity: u,
    ...f
  } = Ce("Collapse", xR, r), h = jn(), p = fm(), v = (h.respectReducedMotion ? p : !1) ? 0 : o, C = MR({
    opened: n,
    transitionDuration: v,
    transitionTimingFunction: a,
    onTransitionEnd: l
  });
  return v === 0 ? n ? /* @__PURE__ */ P.createElement(ke, { ...f }, t) : null : /* @__PURE__ */ P.createElement(ke, { ...C({ style: wm(s, h), ref: e, ...f }) }, /* @__PURE__ */ P.createElement(
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
Tm.displayName = "@mantine/core/Collapse";
const [LR, Mr] = ui(
  "ScrollArea.Root component was not found in tree"
);
function oi(r, e) {
  const t = lo(e);
  aa(() => {
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
const DR = P.forwardRef((r, e) => {
  const { style: t, ...n } = r, o = Mr(), [a, s] = P.useState(0), [l, u] = P.useState(0), f = !!(a && l);
  return oi(o.scrollbarX, () => {
    var p;
    const h = ((p = o.scrollbarX) == null ? void 0 : p.offsetHeight) || 0;
    o.onCornerHeightChange(h), u(h);
  }), oi(o.scrollbarY, () => {
    var p;
    const h = ((p = o.scrollbarY) == null ? void 0 : p.offsetWidth) || 0;
    o.onCornerWidthChange(h), s(h);
  }), f ? /* @__PURE__ */ P.createElement("div", { ...n, ref: e, style: { ...t, width: a, height: l } }) : null;
}), UR = P.forwardRef(
  (r, e) => {
    const t = Mr(), n = !!(t.scrollbarX && t.scrollbarY);
    return t.type !== "scroll" && n ? /* @__PURE__ */ P.createElement(DR, { ...r, ref: e }) : null;
  }
), FR = {
  scrollHideDelay: 1e3,
  type: "hover"
}, Im = ht((r, e) => {
  const t = Ce("ScrollAreaRoot", FR, r), { type: n, scrollHideDelay: o, scrollbars: a, ...s } = t, [l, u] = pe(null), [f, h] = pe(null), [p, m] = pe(null), [v, C] = pe(null), [E, _] = pe(null), [R, I] = pe(0), [S, A] = pe(0), [O, L] = pe(!1), [q, D] = pe(!1), Q = Or(e, (X) => u(X));
  return /* @__PURE__ */ P.createElement(
    LR,
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
        onScrollbarYEnabledChange: D,
        onCornerWidthChange: I,
        onCornerHeightChange: A
      }
    },
    /* @__PURE__ */ P.createElement(
      ke,
      {
        ...s,
        ref: Q,
        __vars: {
          "--sa-corner-width": a !== "xy" ? "0px" : `${R}px`,
          "--sa-corner-height": a !== "xy" ? "0px" : `${S}px`
        }
      }
    )
  );
});
Im.displayName = "@mantine/core/ScrollAreaRoot";
function Am(r, e) {
  const t = r / e;
  return Number.isNaN(t) ? 0 : t;
}
function Ys(r) {
  const e = Am(r.viewport, r.content), t = r.scrollbar.paddingStart + r.scrollbar.paddingEnd, n = (r.scrollbar.size - t) * e;
  return Math.max(n, 18);
}
function Rm(r, e) {
  return (t) => {
    if (r[0] === r[1] || e[0] === e[1])
      return e[0];
    const n = (e[1] - e[0]) / (r[1] - r[0]);
    return e[0] + n * (t - r[0]);
  };
}
function HR(r, [e, t]) {
  return Math.min(t, Math.max(e, r));
}
function Jp(r, e, t = "ltr") {
  const n = Ys(e), o = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, a = e.scrollbar.size - o, s = e.content - e.viewport, l = a - n, u = t === "ltr" ? [0, s] : [s * -1, 0], f = HR(r, u);
  return Rm([0, s], [0, l])(f);
}
function BR(r, e, t, n = "ltr") {
  const o = Ys(t), a = o / 2, s = e || a, l = o - s, u = t.scrollbar.paddingStart + s, f = t.scrollbar.size - t.scrollbar.paddingEnd - l, h = t.content - t.viewport, p = n === "ltr" ? [0, h] : [h * -1, 0];
  return Rm([u, f], p)(r);
}
function km(r, e) {
  return r > 0 && r < e;
}
function Ps(r) {
  return r ? parseInt(r, 10) : 0;
}
function go(r, e, { checkForDefaultPrevented: t = !0 } = {}) {
  return (n) => {
    r == null || r(n), (t === !1 || !n.defaultPrevented) && (e == null || e(n));
  };
}
const [KR, Pm] = ui(
  "ScrollAreaScrollbar was not found in tree"
), Nm = ht((r, e) => {
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
  } = r, m = Mr(), [v, C] = P.useState(null), E = Or(e, (D) => C(D)), _ = P.useRef(null), R = P.useRef(""), { viewport: I } = m, S = t.content - t.viewport, A = lo(f), O = lo(l), L = Ws(h, 10), q = (D) => {
    if (_.current) {
      const Q = D.clientX - _.current.left, X = D.clientY - _.current.top;
      u({ x: Q, y: X });
    }
  };
  return ye(() => {
    const D = (Q) => {
      const X = Q.target;
      (v == null ? void 0 : v.contains(X)) && A(Q, S);
    };
    return document.addEventListener("wheel", D, { passive: !1 }), () => document.removeEventListener("wheel", D, { passive: !1 });
  }, [I, v, S, A]), ye(O, [t, O]), oi(v, L), oi(m.content, L), /* @__PURE__ */ P.createElement(
    KR,
    {
      value: {
        scrollbar: v,
        hasThumb: n,
        onThumbChange: lo(o),
        onThumbPointerUp: lo(a),
        onThumbPositionChange: O,
        onThumbPointerDown: lo(s)
      }
    },
    /* @__PURE__ */ P.createElement(
      "div",
      {
        ...p,
        ref: E,
        style: { position: "absolute", ...p.style },
        onPointerDown: go(r.onPointerDown, (D) => {
          D.button === 0 && (D.target.setPointerCapture(D.pointerId), _.current = v.getBoundingClientRect(), R.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", q(D));
        }),
        onPointerMove: go(r.onPointerMove, q),
        onPointerUp: go(r.onPointerUp, (D) => {
          const Q = D.target;
          Q.hasPointerCapture(D.pointerId) && Q.releasePointerCapture(D.pointerId), document.body.style.webkitUserSelect = R.current, _.current = null;
        })
      }
    )
  );
}), qR = ht(
  (r, e) => {
    const { sizes: t, onSizesChange: n, style: o, ...a } = r, s = Mr(), [l, u] = pe(), f = Ke(null), h = Or(e, f, s.onScrollbarXChange);
    return ye(() => {
      f.current && u(getComputedStyle(f.current));
    }, [f]), /* @__PURE__ */ P.createElement(
      Nm,
      {
        "data-orientation": "horizontal",
        ...a,
        ref: h,
        sizes: t,
        style: {
          ...o,
          "--sa-thumb-width": `${Ys(t)}px`
        },
        onThumbPointerDown: (p) => r.onThumbPointerDown(p.x),
        onDragScroll: (p) => r.onDragScroll(p.x),
        onWheelScroll: (p, m) => {
          if (s.viewport) {
            const v = s.viewport.scrollLeft + p.deltaX;
            r.onWheelScroll(v), km(v, m) && p.preventDefault();
          }
        },
        onResize: () => {
          f.current && s.viewport && l && n({
            content: s.viewport.scrollWidth,
            viewport: s.viewport.offsetWidth,
            scrollbar: {
              size: f.current.clientWidth,
              paddingStart: Ps(l.paddingLeft),
              paddingEnd: Ps(l.paddingRight)
            }
          });
        }
      }
    );
  }
), $R = ht(
  (r, e) => {
    const { sizes: t, onSizesChange: n, style: o, ...a } = r, s = Mr(), [l, u] = P.useState(), f = Ke(null), h = Or(e, f, s.onScrollbarYChange);
    return ye(() => {
      f.current && u(getComputedStyle(f.current));
    }, [f]), /* @__PURE__ */ P.createElement(
      Nm,
      {
        ...a,
        "data-orientation": "vertical",
        ref: h,
        sizes: t,
        style: {
          "--sa-thumb-height": `${Ys(t)}px`,
          ...o
        },
        onThumbPointerDown: (p) => r.onThumbPointerDown(p.y),
        onDragScroll: (p) => r.onDragScroll(p.y),
        onWheelScroll: (p, m) => {
          if (s.viewport) {
            const v = s.viewport.scrollTop + p.deltaY;
            r.onWheelScroll(v), km(v, m) && p.preventDefault();
          }
        },
        onResize: () => {
          f.current && s.viewport && l && n({
            content: s.viewport.scrollHeight,
            viewport: s.viewport.offsetHeight,
            scrollbar: {
              size: f.current.clientHeight,
              paddingStart: Ps(l.paddingTop),
              paddingEnd: Ps(l.paddingBottom)
            }
          });
        }
      }
    );
  }
), $u = ht((r, e) => {
  const { orientation: t = "vertical", ...n } = r, { dir: o } = qu(), a = Mr(), s = Ke(null), l = Ke(0), [u, f] = pe({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), h = Am(u.viewport, u.content), p = {
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
  }, m = (v, C) => BR(v, l.current, u, C);
  return t === "horizontal" ? /* @__PURE__ */ P.createElement(
    qR,
    {
      ...p,
      ref: e,
      onThumbPositionChange: () => {
        if (a.viewport && s.current) {
          const v = a.viewport.scrollLeft, C = Jp(v, u, o);
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
    $R,
    {
      ...p,
      ref: e,
      onThumbPositionChange: () => {
        if (a.viewport && s.current) {
          const v = a.viewport.scrollTop, C = Jp(v, u);
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
}), Om = ht(
  (r, e) => {
    const t = Mr(), { forceMount: n, ...o } = r, [a, s] = pe(!1), l = r.orientation === "horizontal", u = Ws(() => {
      if (t.viewport) {
        const f = t.viewport.offsetWidth < t.viewport.scrollWidth, h = t.viewport.offsetHeight < t.viewport.scrollHeight;
        s(l ? f : h);
      }
    }, 10);
    return oi(t.viewport, u), oi(t.content, u), n || a ? /* @__PURE__ */ P.createElement(
      $u,
      {
        "data-state": a ? "visible" : "hidden",
        ...o,
        ref: e
      }
    ) : null;
  }
), GR = ht(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = Mr(), [a, s] = pe(!1);
    return ye(() => {
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
      Om,
      {
        "data-state": a ? "visible" : "hidden",
        ...n,
        ref: e
      }
    ) : null;
  }
), zR = ht(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = Mr(), a = r.orientation === "horizontal", [s, l] = pe("hidden"), u = Ws(() => l("idle"), 100);
    return ye(() => {
      if (s === "idle") {
        const f = window.setTimeout(() => l("hidden"), o.scrollHideDelay);
        return () => window.clearTimeout(f);
      }
    }, [s, o.scrollHideDelay]), ye(() => {
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
      $u,
      {
        "data-state": s === "hidden" ? "hidden" : "visible",
        ...n,
        ref: e,
        onPointerEnter: go(r.onPointerEnter, () => l("interacting")),
        onPointerLeave: go(r.onPointerLeave, () => l("idle"))
      }
    ) : null;
  }
), Xp = P.forwardRef(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = Mr(), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, l = r.orientation === "horizontal";
    return P.useEffect(() => (l ? a(!0) : s(!0), () => {
      l ? a(!1) : s(!1);
    }), [l, a, s]), o.type === "hover" ? /* @__PURE__ */ P.createElement(GR, { ...n, ref: e, forceMount: t }) : o.type === "scroll" ? /* @__PURE__ */ P.createElement(zR, { ...n, ref: e, forceMount: t }) : o.type === "auto" ? /* @__PURE__ */ P.createElement(Om, { ...n, ref: e, forceMount: t }) : o.type === "always" ? /* @__PURE__ */ P.createElement($u, { ...n, ref: e }) : null;
  }
);
function WR(r, e = () => {
}) {
  let t = { left: r.scrollLeft, top: r.scrollTop }, n = 0;
  return function o() {
    const a = { left: r.scrollLeft, top: r.scrollTop }, s = t.left !== a.left, l = t.top !== a.top;
    (s || l) && e(), t = a, n = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(n);
}
const VR = ht((r, e) => {
  const { style: t, ...n } = r, o = Mr(), a = Pm(), { onThumbPositionChange: s } = a, l = Or(e, (h) => a.onThumbChange(h)), u = Ke(), f = Ws(() => {
    u.current && (u.current(), u.current = void 0);
  }, 100);
  return ye(() => {
    const { viewport: h } = o;
    if (h) {
      const p = () => {
        if (f(), !u.current) {
          const m = WR(h, s);
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
      onPointerDownCapture: go(r.onPointerDownCapture, (h) => {
        const m = h.target.getBoundingClientRect(), v = h.clientX - m.left, C = h.clientY - m.top;
        a.onThumbPointerDown({ x: v, y: C });
      }),
      onPointerUp: go(r.onPointerUp, a.onThumbPointerUp)
    }
  );
}), Zp = P.forwardRef(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = Pm();
    return t || o.hasThumb ? /* @__PURE__ */ P.createElement(VR, { ref: e, ...n }) : null;
  }
), Mm = ht(
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
Mm.displayName = "@mantine/core/ScrollAreaViewport";
var Gu = { root: "m-d57069b5", viewport: "m-c0783ff9", viewportInner: "m-f8f631dd", scrollbar: "m-c44ba933", thumb: "m-d8b5e363", corner: "m-21657268" };
const xm = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
}, jR = (r, { scrollbarSize: e }) => ({
  root: {
    "--scrollarea-scrollbar-size": $(e)
  }
}), ca = Ue((r, e) => {
  const t = Ce("ScrollArea", xm, r), {
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
    ...I
  } = t, [S, A] = pe(!1), O = lt({
    name: "ScrollArea",
    props: t,
    classes: Gu,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: f,
    varsResolver: jR
  });
  return /* @__PURE__ */ P.createElement(
    Im,
    {
      type: h === "never" ? "always" : h,
      scrollHideDelay: p,
      ref: e,
      scrollbars: R,
      ...O("root"),
      ...I
    },
    /* @__PURE__ */ P.createElement(
      Mm,
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
      Xp,
      {
        ...O("scrollbar"),
        orientation: "horizontal",
        "data-hidden": h === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => A(!0),
        onMouseLeave: () => A(!1)
      },
      /* @__PURE__ */ P.createElement(Zp, { ...O("thumb") })
    ),
    (R === "xy" || R === "y") && /* @__PURE__ */ P.createElement(
      Xp,
      {
        ...O("scrollbar"),
        orientation: "vertical",
        "data-hidden": h === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => A(!0),
        onMouseLeave: () => A(!1)
      },
      /* @__PURE__ */ P.createElement(Zp, { ...O("thumb") })
    ),
    /* @__PURE__ */ P.createElement(
      UR,
      {
        ...O("corner"),
        "data-hovered": S || void 0,
        "data-hidden": h === "never" || void 0
      }
    )
  );
});
ca.displayName = "@mantine/core/ScrollArea";
const zu = Ue((r, e) => {
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
    ...I
  } = Ce("ScrollAreaAutosize", xm, r);
  return /* @__PURE__ */ P.createElement(ke, { ...I, ref: e, style: [{ display: "flex" }, _] }, /* @__PURE__ */ P.createElement(ke, { style: { display: "flex", flexDirection: "column", flex: 1 } }, /* @__PURE__ */ P.createElement(
    ca,
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
ca.classes = Gu;
zu.displayName = "@mantine/core/ScrollAreaAutosize";
zu.classes = Gu;
ca.Autosize = zu;
var Lm = { root: "m-87cf2631" };
const YR = {
  __staticSelector: "UnstyledButton"
}, la = sa(
  (r, e) => {
    const t = Ce("UnstyledButton", YR, r), {
      className: n,
      component: o = "button",
      __staticSelector: a,
      unstyled: s,
      classNames: l,
      styles: u,
      style: f,
      ...h
    } = t, p = lt({
      name: a,
      props: t,
      classes: Lm,
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
la.classes = Lm;
la.displayName = "@mantine/core/UnstyledButton";
const Wr = Math.min, Dt = Math.max, Ns = Math.round, as = Math.floor, Gn = (r) => ({
  x: r,
  y: r
}), QR = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, JR = {
  start: "end",
  end: "start"
};
function vu(r, e, t) {
  return Dt(r, Wr(e, t));
}
function Tn(r, e) {
  return typeof r == "function" ? r(e) : r;
}
function Vr(r) {
  return r.split("-")[0];
}
function fi(r) {
  return r.split("-")[1];
}
function Wu(r) {
  return r === "x" ? "y" : "x";
}
function Vu(r) {
  return r === "y" ? "height" : "width";
}
function To(r) {
  return ["top", "bottom"].includes(Vr(r)) ? "y" : "x";
}
function ju(r) {
  return Wu(To(r));
}
function XR(r, e, t) {
  t === void 0 && (t = !1);
  const n = fi(r), o = ju(r), a = Vu(o);
  let s = o === "x" ? n === (t ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[a] > e.floating[a] && (s = Os(s)), [s, Os(s)];
}
function ZR(r) {
  const e = Os(r);
  return [yu(r), e, yu(e)];
}
function yu(r) {
  return r.replace(/start|end/g, (e) => JR[e]);
}
function ek(r, e, t) {
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
function tk(r, e, t, n) {
  const o = fi(r);
  let a = ek(Vr(r), t === "start", n);
  return o && (a = a.map((s) => s + "-" + o), e && (a = a.concat(a.map(yu)))), a;
}
function Os(r) {
  return r.replace(/left|right|bottom|top/g, (e) => QR[e]);
}
function rk(r) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...r
  };
}
function Yu(r) {
  return typeof r != "number" ? rk(r) : {
    top: r,
    right: r,
    bottom: r,
    left: r
  };
}
function ii(r) {
  return {
    ...r,
    top: r.y,
    left: r.x,
    right: r.x + r.width,
    bottom: r.y + r.height
  };
}
function eg(r, e, t) {
  let {
    reference: n,
    floating: o
  } = r;
  const a = To(e), s = ju(e), l = Vu(s), u = Vr(e), f = a === "y", h = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, m = n[l] / 2 - o[l] / 2;
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
  switch (fi(e)) {
    case "start":
      v[s] -= m * (t && f ? -1 : 1);
      break;
    case "end":
      v[s] += m * (t && f ? -1 : 1);
      break;
  }
  return v;
}
const nk = async (r, e, t) => {
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
  } = eg(f, n, u), m = n, v = {}, C = 0;
  for (let E = 0; E < l.length; E++) {
    const {
      name: _,
      fn: R
    } = l[E], {
      x: I,
      y: S,
      data: A,
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
    if (h = I ?? h, p = S ?? p, v = {
      ...v,
      [_]: {
        ...v[_],
        ...A
      }
    }, O && C <= 50) {
      C++, typeof O == "object" && (O.placement && (m = O.placement), O.rects && (f = O.rects === !0 ? await s.getElementRects({
        reference: r,
        floating: e,
        strategy: o
      }) : O.rects), {
        x: h,
        y: p
      } = eg(f, m, u)), E = -1;
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
async function Qu(r, e) {
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
  } = Tn(e, r), C = Yu(v), _ = l[m ? p === "floating" ? "reference" : "floating" : p], R = ii(await a.getClippingRect({
    element: (t = await (a.isElement == null ? void 0 : a.isElement(_))) == null || t ? _ : _.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(l.floating)),
    boundary: f,
    rootBoundary: h,
    strategy: u
  })), I = p === "floating" ? {
    ...s.floating,
    x: n,
    y: o
  } : s.reference, S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l.floating)), A = await (a.isElement == null ? void 0 : a.isElement(S)) ? await (a.getScale == null ? void 0 : a.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, O = ii(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: I,
    offsetParent: S,
    strategy: u
  }) : I);
  return {
    top: (R.top - O.top + C.top) / A.y,
    bottom: (O.bottom - R.bottom + C.bottom) / A.y,
    left: (R.left - O.left + C.left) / A.x,
    right: (O.right - R.right + C.right) / A.x
  };
}
const tg = (r) => ({
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
    const p = Yu(h), m = {
      x: t,
      y: n
    }, v = ju(o), C = Vu(v), E = await s.getDimensions(f), _ = v === "y", R = _ ? "top" : "left", I = _ ? "bottom" : "right", S = _ ? "clientHeight" : "clientWidth", A = a.reference[C] + a.reference[v] - m[v] - a.floating[C], O = m[v] - a.reference[v], L = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
    let q = L ? L[S] : 0;
    (!q || !await (s.isElement == null ? void 0 : s.isElement(L))) && (q = l.floating[S] || a.floating[C]);
    const D = A / 2 - O / 2, Q = q / 2 - E[C] / 2 - 1, X = Wr(p[R], Q), le = Wr(p[I], Q), ne = X, fe = q - E[C] - le, oe = q / 2 - E[C] / 2 + D, we = vu(ne, oe, fe), Y = !u.arrow && fi(o) != null && oe != we && a.reference[C] / 2 - (oe < ne ? X : le) - E[C] / 2 < 0, ie = Y ? oe < ne ? oe - ne : oe - fe : 0;
    return {
      [v]: m[v] + ie,
      data: {
        [v]: we,
        centerOffset: oe - we - ie,
        ...Y && {
          alignmentOffset: ie
        }
      },
      reset: Y
    };
  }
}), ok = function(r) {
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
      const R = Vr(o), I = Vr(l) === l, S = await (u.isRTL == null ? void 0 : u.isRTL(f.floating)), A = m || (I || !E ? [Os(l)] : ZR(l));
      !m && C !== "none" && A.push(...tk(l, E, C, S));
      const O = [l, ...A], L = await Qu(e, _), q = [];
      let D = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (h && q.push(L[R]), p) {
        const ne = XR(o, s, S);
        q.push(L[ne[0]], L[ne[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: q
      }], !q.every((ne) => ne <= 0)) {
        var Q, X;
        const ne = (((Q = a.flip) == null ? void 0 : Q.index) || 0) + 1, fe = O[ne];
        if (fe)
          return {
            data: {
              index: ne,
              overflows: D
            },
            reset: {
              placement: fe
            }
          };
        let oe = (X = D.filter((we) => we.overflows[0] <= 0).sort((we, Y) => we.overflows[1] - Y.overflows[1])[0]) == null ? void 0 : X.placement;
        if (!oe)
          switch (v) {
            case "bestFit": {
              var le;
              const we = (le = D.map((Y) => [Y.placement, Y.overflows.filter((ie) => ie > 0).reduce((ie, te) => ie + te, 0)]).sort((Y, ie) => Y[1] - ie[1])[0]) == null ? void 0 : le[0];
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
function Dm(r) {
  const e = Wr(...r.map((a) => a.left)), t = Wr(...r.map((a) => a.top)), n = Dt(...r.map((a) => a.right)), o = Dt(...r.map((a) => a.bottom));
  return {
    x: e,
    y: t,
    width: n - e,
    height: o - t
  };
}
function ik(r) {
  const e = r.slice().sort((o, a) => o.y - a.y), t = [];
  let n = null;
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    !n || a.y - n.y > n.height / 2 ? t.push([a]) : t[t.length - 1].push(a), n = a;
  }
  return t.map((o) => ii(Dm(o)));
}
const ak = function(r) {
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
      } = Tn(r, e), h = Array.from(await (a.getClientRects == null ? void 0 : a.getClientRects(n.reference)) || []), p = ik(h), m = ii(Dm(h)), v = Yu(l);
      function C() {
        if (p.length === 2 && p[0].left > p[1].right && u != null && f != null)
          return p.find((_) => u > _.left - v.left && u < _.right + v.right && f > _.top - v.top && f < _.bottom + v.bottom) || m;
        if (p.length >= 2) {
          if (To(t) === "y") {
            const X = p[0], le = p[p.length - 1], ne = Vr(t) === "top", fe = X.top, oe = le.bottom, we = ne ? X.left : le.left, Y = ne ? X.right : le.right, ie = Y - we, te = oe - fe;
            return {
              top: fe,
              bottom: oe,
              left: we,
              right: Y,
              width: ie,
              height: te,
              x: we,
              y: fe
            };
          }
          const _ = Vr(t) === "left", R = Dt(...p.map((X) => X.right)), I = Wr(...p.map((X) => X.left)), S = p.filter((X) => _ ? X.left === I : X.right === R), A = S[0].top, O = S[S.length - 1].bottom, L = I, q = R, D = q - L, Q = O - A;
          return {
            top: A,
            bottom: O,
            left: L,
            right: q,
            width: D,
            height: Q,
            x: L,
            y: A
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
async function sk(r, e) {
  const {
    placement: t,
    platform: n,
    elements: o
  } = r, a = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), s = Vr(t), l = fi(t), u = To(t) === "y", f = ["left", "top"].includes(s) ? -1 : 1, h = a && u ? -1 : 1, p = Tn(e, r);
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
const ck = function(r) {
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
      } = e, u = await sk(e, r);
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
}, lk = function(r) {
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
              y: I
            } = _;
            return {
              x: R,
              y: I
            };
          }
        },
        ...u
      } = Tn(r, e), f = {
        x: t,
        y: n
      }, h = await Qu(e, u), p = To(Vr(o)), m = Wu(p);
      let v = f[m], C = f[p];
      if (a) {
        const _ = m === "y" ? "top" : "left", R = m === "y" ? "bottom" : "right", I = v + h[_], S = v - h[R];
        v = vu(I, v, S);
      }
      if (s) {
        const _ = p === "y" ? "top" : "left", R = p === "y" ? "bottom" : "right", I = C + h[_], S = C - h[R];
        C = vu(I, C, S);
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
}, uk = function(r) {
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
      }, p = To(o), m = Wu(p);
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
        const S = m === "y" ? "height" : "width", A = a.reference[m] - a.floating[S] + _.mainAxis, O = a.reference[m] + a.reference[S] - _.mainAxis;
        v < A ? v = A : v > O && (v = O);
      }
      if (f) {
        var R, I;
        const S = m === "y" ? "width" : "height", A = ["top", "left"].includes(Vr(o)), O = a.reference[p] - a.floating[S] + (A && ((R = s.offset) == null ? void 0 : R[p]) || 0) + (A ? 0 : _.crossAxis), L = a.reference[p] + a.reference[S] + (A ? 0 : ((I = s.offset) == null ? void 0 : I[p]) || 0) - (A ? _.crossAxis : 0);
        C < O ? C = O : C > L && (C = L);
      }
      return {
        [m]: v,
        [p]: C
      };
    }
  };
}, dk = function(r) {
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
      } = Tn(r, e), u = await Qu(e, l), f = Vr(t), h = fi(t), p = To(t) === "y", {
        width: m,
        height: v
      } = n.floating;
      let C, E;
      f === "top" || f === "bottom" ? (C = f, E = h === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (E = f, C = h === "end" ? "top" : "bottom");
      const _ = v - u[C], R = m - u[E], I = !e.middlewareData.shift;
      let S = _, A = R;
      if (p) {
        const L = m - u.left - u.right;
        A = h || I ? Wr(R, L) : L;
      } else {
        const L = v - u.top - u.bottom;
        S = h || I ? Wr(_, L) : L;
      }
      if (I && !h) {
        const L = Dt(u.left, 0), q = Dt(u.right, 0), D = Dt(u.top, 0), Q = Dt(u.bottom, 0);
        p ? A = m - 2 * (L !== 0 || q !== 0 ? L + q : Dt(u.left, u.right)) : S = v - 2 * (D !== 0 || Q !== 0 ? D + Q : Dt(u.top, u.bottom));
      }
      await s({
        ...e,
        availableWidth: A,
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
function zn(r) {
  return Um(r) ? (r.nodeName || "").toLowerCase() : "#document";
}
function mr(r) {
  var e;
  return (r == null || (e = r.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function kn(r) {
  var e;
  return (e = (Um(r) ? r.ownerDocument : r.document) || window.document) == null ? void 0 : e.documentElement;
}
function Um(r) {
  return r instanceof Node || r instanceof mr(r).Node;
}
function In(r) {
  return r instanceof Element || r instanceof mr(r).Element;
}
function an(r) {
  return r instanceof HTMLElement || r instanceof mr(r).HTMLElement;
}
function rg(r) {
  return typeof ShadowRoot > "u" ? !1 : r instanceof ShadowRoot || r instanceof mr(r).ShadowRoot;
}
function ua(r) {
  const {
    overflow: e,
    overflowX: t,
    overflowY: n,
    display: o
  } = Nr(r);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + t) && !["inline", "contents"].includes(o);
}
function fk(r) {
  return ["table", "td", "th"].includes(zn(r));
}
function Ju(r) {
  const e = Xu(), t = Nr(r);
  return t.transform !== "none" || t.perspective !== "none" || (t.containerType ? t.containerType !== "normal" : !1) || !e && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !e && (t.filter ? t.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (t.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (t.contain || "").includes(n));
}
function hk(r) {
  let e = ai(r);
  for (; an(e) && !Qs(e); ) {
    if (Ju(e))
      return e;
    e = ai(e);
  }
  return null;
}
function Xu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Qs(r) {
  return ["html", "body", "#document"].includes(zn(r));
}
function Nr(r) {
  return mr(r).getComputedStyle(r);
}
function Js(r) {
  return In(r) ? {
    scrollLeft: r.scrollLeft,
    scrollTop: r.scrollTop
  } : {
    scrollLeft: r.pageXOffset,
    scrollTop: r.pageYOffset
  };
}
function ai(r) {
  if (zn(r) === "html")
    return r;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    r.assignedSlot || // DOM Element detected.
    r.parentNode || // ShadowRoot detected.
    rg(r) && r.host || // Fallback.
    kn(r)
  );
  return rg(e) ? e.host : e;
}
function Fm(r) {
  const e = ai(r);
  return Qs(e) ? r.ownerDocument ? r.ownerDocument.body : r.body : an(e) && ua(e) ? e : Fm(e);
}
function Xi(r, e, t) {
  var n;
  e === void 0 && (e = []), t === void 0 && (t = !0);
  const o = Fm(r), a = o === ((n = r.ownerDocument) == null ? void 0 : n.body), s = mr(o);
  return a ? e.concat(s, s.visualViewport || [], ua(o) ? o : [], s.frameElement && t ? Xi(s.frameElement) : []) : e.concat(o, Xi(o, [], t));
}
function Hm(r) {
  const e = Nr(r);
  let t = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const o = an(r), a = o ? r.offsetWidth : t, s = o ? r.offsetHeight : n, l = Ns(t) !== a || Ns(n) !== s;
  return l && (t = a, n = s), {
    width: t,
    height: n,
    $: l
  };
}
function Zu(r) {
  return In(r) ? r : r.contextElement;
}
function ti(r) {
  const e = Zu(r);
  if (!an(e))
    return Gn(1);
  const t = e.getBoundingClientRect(), {
    width: n,
    height: o,
    $: a
  } = Hm(e);
  let s = (a ? Ns(t.width) : t.width) / n, l = (a ? Ns(t.height) : t.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const pk = /* @__PURE__ */ Gn(0);
function Bm(r) {
  const e = mr(r);
  return !Xu() || !e.visualViewport ? pk : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function gk(r, e, t) {
  return e === void 0 && (e = !1), !t || e && t !== mr(r) ? !1 : e;
}
function Eo(r, e, t, n) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const o = r.getBoundingClientRect(), a = Zu(r);
  let s = Gn(1);
  e && (n ? In(n) && (s = ti(n)) : s = ti(r));
  const l = gk(a, t, n) ? Bm(a) : Gn(0);
  let u = (o.left + l.x) / s.x, f = (o.top + l.y) / s.y, h = o.width / s.x, p = o.height / s.y;
  if (a) {
    const m = mr(a), v = n && In(n) ? mr(n) : n;
    let C = m.frameElement;
    for (; C && n && v !== m; ) {
      const E = ti(C), _ = C.getBoundingClientRect(), R = Nr(C), I = _.left + (C.clientLeft + parseFloat(R.paddingLeft)) * E.x, S = _.top + (C.clientTop + parseFloat(R.paddingTop)) * E.y;
      u *= E.x, f *= E.y, h *= E.x, p *= E.y, u += I, f += S, C = mr(C).frameElement;
    }
  }
  return ii({
    width: h,
    height: p,
    x: u,
    y: f
  });
}
function mk(r) {
  let {
    rect: e,
    offsetParent: t,
    strategy: n
  } = r;
  const o = an(t), a = kn(t);
  if (t === a)
    return e;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Gn(1);
  const u = Gn(0);
  if ((o || !o && n !== "fixed") && ((zn(t) !== "body" || ua(a)) && (s = Js(t)), an(t))) {
    const f = Eo(t);
    l = ti(t), u.x = f.x + t.clientLeft, u.y = f.y + t.clientTop;
  }
  return {
    width: e.width * l.x,
    height: e.height * l.y,
    x: e.x * l.x - s.scrollLeft * l.x + u.x,
    y: e.y * l.y - s.scrollTop * l.y + u.y
  };
}
function vk(r) {
  return Array.from(r.getClientRects());
}
function Km(r) {
  return Eo(kn(r)).left + Js(r).scrollLeft;
}
function yk(r) {
  const e = kn(r), t = Js(r), n = r.ownerDocument.body, o = Dt(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), a = Dt(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -t.scrollLeft + Km(r);
  const l = -t.scrollTop;
  return Nr(n).direction === "rtl" && (s += Dt(e.clientWidth, n.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: l
  };
}
function Ck(r, e) {
  const t = mr(r), n = kn(r), o = t.visualViewport;
  let a = n.clientWidth, s = n.clientHeight, l = 0, u = 0;
  if (o) {
    a = o.width, s = o.height;
    const f = Xu();
    (!f || f && e === "fixed") && (l = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: l,
    y: u
  };
}
function wk(r, e) {
  const t = Eo(r, !0, e === "fixed"), n = t.top + r.clientTop, o = t.left + r.clientLeft, a = an(r) ? ti(r) : Gn(1), s = r.clientWidth * a.x, l = r.clientHeight * a.y, u = o * a.x, f = n * a.y;
  return {
    width: s,
    height: l,
    x: u,
    y: f
  };
}
function ng(r, e, t) {
  let n;
  if (e === "viewport")
    n = Ck(r, t);
  else if (e === "document")
    n = yk(kn(r));
  else if (In(e))
    n = wk(e, t);
  else {
    const o = Bm(r);
    n = {
      ...e,
      x: e.x - o.x,
      y: e.y - o.y
    };
  }
  return ii(n);
}
function qm(r, e) {
  const t = ai(r);
  return t === e || !In(t) || Qs(t) ? !1 : Nr(t).position === "fixed" || qm(t, e);
}
function Ek(r, e) {
  const t = e.get(r);
  if (t)
    return t;
  let n = Xi(r, [], !1).filter((l) => In(l) && zn(l) !== "body"), o = null;
  const a = Nr(r).position === "fixed";
  let s = a ? ai(r) : r;
  for (; In(s) && !Qs(s); ) {
    const l = Nr(s), u = Ju(s);
    !u && l.position === "fixed" && (o = null), (a ? !u && !o : !u && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ua(s) && !u && qm(r, s)) ? n = n.filter((h) => h !== s) : o = l, s = ai(s);
  }
  return e.set(r, n), n;
}
function bk(r) {
  let {
    element: e,
    boundary: t,
    rootBoundary: n,
    strategy: o
  } = r;
  const s = [...t === "clippingAncestors" ? Ek(e, this._c) : [].concat(t), n], l = s[0], u = s.reduce((f, h) => {
    const p = ng(e, h, o);
    return f.top = Dt(p.top, f.top), f.right = Wr(p.right, f.right), f.bottom = Wr(p.bottom, f.bottom), f.left = Dt(p.left, f.left), f;
  }, ng(e, l, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function _k(r) {
  return Hm(r);
}
function Sk(r, e, t) {
  const n = an(e), o = kn(e), a = t === "fixed", s = Eo(r, !0, a, e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Gn(0);
  if (n || !n && !a)
    if ((zn(e) !== "body" || ua(o)) && (l = Js(e)), n) {
      const f = Eo(e, !0, a, e);
      u.x = f.x + e.clientLeft, u.y = f.y + e.clientTop;
    } else
      o && (u.x = Km(o));
  return {
    x: s.left + l.scrollLeft - u.x,
    y: s.top + l.scrollTop - u.y,
    width: s.width,
    height: s.height
  };
}
function og(r, e) {
  return !an(r) || Nr(r).position === "fixed" ? null : e ? e(r) : r.offsetParent;
}
function $m(r, e) {
  const t = mr(r);
  if (!an(r))
    return t;
  let n = og(r, e);
  for (; n && fk(n) && Nr(n).position === "static"; )
    n = og(n, e);
  return n && (zn(n) === "html" || zn(n) === "body" && Nr(n).position === "static" && !Ju(n)) ? t : n || hk(r) || t;
}
const Tk = async function(r) {
  let {
    reference: e,
    floating: t,
    strategy: n
  } = r;
  const o = this.getOffsetParent || $m, a = this.getDimensions;
  return {
    reference: Sk(e, await o(t), n),
    floating: {
      x: 0,
      y: 0,
      ...await a(t)
    }
  };
};
function Ik(r) {
  return Nr(r).direction === "rtl";
}
const Ak = {
  convertOffsetParentRelativeRectToViewportRelativeRect: mk,
  getDocumentElement: kn,
  getClippingRect: bk,
  getOffsetParent: $m,
  getElementRects: Tk,
  getClientRects: vk,
  getDimensions: _k,
  getScale: ti,
  isElement: In,
  isRTL: Ik
};
function Rk(r, e) {
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
    const v = as(h), C = as(o.clientWidth - (f + p)), E = as(o.clientHeight - (h + m)), _ = as(f), I = {
      rootMargin: -v + "px " + -C + "px " + -E + "px " + -_ + "px",
      threshold: Dt(0, Wr(1, u)) || 1
    };
    let S = !0;
    function A(O) {
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
      t = new IntersectionObserver(A, {
        ...I,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(A, I);
    }
    t.observe(r);
  }
  return s(!0), a;
}
function kk(r, e, t, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, f = Zu(r), h = o || a ? [...f ? Xi(f) : [], ...Xi(e)] : [];
  h.forEach((R) => {
    o && R.addEventListener("scroll", t, {
      passive: !0
    }), a && R.addEventListener("resize", t);
  });
  const p = f && l ? Rk(f, t) : null;
  let m = -1, v = null;
  s && (v = new ResizeObserver((R) => {
    let [I] = R;
    I && I.target === f && v && (v.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      v && v.observe(e);
    })), t();
  }), f && !u && v.observe(f), v.observe(e));
  let C, E = u ? Eo(r) : null;
  u && _();
  function _() {
    const R = Eo(r);
    E && (R.x !== E.x || R.y !== E.y || R.width !== E.width || R.height !== E.height) && t(), E = R, C = requestAnimationFrame(_);
  }
  return t(), () => {
    h.forEach((R) => {
      o && R.removeEventListener("scroll", t), a && R.removeEventListener("resize", t);
    }), p && p(), v && v.disconnect(), v = null, u && cancelAnimationFrame(C);
  };
}
const Pk = (r, e, t) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: Ak,
    ...t
  }, a = {
    ...o.platform,
    _c: n
  };
  return nk(r, e, {
    ...o,
    platform: a
  });
}, Nk = (r) => {
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
      return n && e(n) ? n.current != null ? tg({
        element: n.current,
        padding: o
      }).fn(t) : {} : n ? tg({
        element: n,
        padding: o
      }).fn(t) : {};
    }
  };
};
var ds = typeof document < "u" ? Tu : ye;
function Ms(r, e) {
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
        if (!Ms(r[n], e[n]))
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
      if (!(a === "_owner" && r.$$typeof) && !Ms(r[a], e[a]))
        return !1;
    }
    return !0;
  }
  return r !== r && e !== e;
}
function Gm(r) {
  return typeof window > "u" ? 1 : (r.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ig(r, e) {
  const t = Gm(r);
  return Math.round(e * t) / t;
}
function ag(r) {
  const e = Le.useRef(r);
  return ds(() => {
    e.current = r;
  }), e;
}
function Ok(r) {
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
  Ms(m, n) || v(n);
  const [C, E] = Le.useState(null), [_, R] = Le.useState(null), I = Le.useCallback((Y) => {
    Y != L.current && (L.current = Y, E(Y));
  }, [E]), S = Le.useCallback((Y) => {
    Y !== q.current && (q.current = Y, R(Y));
  }, [R]), A = a || C, O = s || _, L = Le.useRef(null), q = Le.useRef(null), D = Le.useRef(h), Q = ag(u), X = ag(o), le = Le.useCallback(() => {
    if (!L.current || !q.current)
      return;
    const Y = {
      placement: e,
      strategy: t,
      middleware: m
    };
    X.current && (Y.platform = X.current), Pk(L.current, q.current, Y).then((ie) => {
      const te = {
        ...ie,
        isPositioned: !0
      };
      ne.current && !Ms(D.current, te) && (D.current = te, DT.flushSync(() => {
        p(te);
      }));
    });
  }, [m, e, t, X]);
  ds(() => {
    f === !1 && D.current.isPositioned && (D.current.isPositioned = !1, p((Y) => ({
      ...Y,
      isPositioned: !1
    })));
  }, [f]);
  const ne = Le.useRef(!1);
  ds(() => (ne.current = !0, () => {
    ne.current = !1;
  }), []), ds(() => {
    if (A && (L.current = A), O && (q.current = O), A && O) {
      if (Q.current)
        return Q.current(A, O, le);
      le();
    }
  }, [A, O, le, Q]);
  const fe = Le.useMemo(() => ({
    reference: L,
    floating: q,
    setReference: I,
    setFloating: S
  }), [I, S]), oe = Le.useMemo(() => ({
    reference: A,
    floating: O
  }), [A, O]), we = Le.useMemo(() => {
    const Y = {
      position: t,
      left: 0,
      top: 0
    };
    if (!oe.floating)
      return Y;
    const ie = ig(oe.floating, h.x), te = ig(oe.floating, h.y);
    return l ? {
      ...Y,
      transform: "translate(" + ie + "px, " + te + "px)",
      ...Gm(oe.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: ie,
      top: te
    };
  }, [t, l, oe.floating, h.x, h.y]);
  return Le.useMemo(() => ({
    ...h,
    update: le,
    refs: fe,
    elements: oe,
    floatingStyles: we
  }), [h, le, fe, oe, we]);
}
var zm = typeof document < "u" ? Tu : ye;
let ql = !1, Mk = 0;
const sg = () => "floating-ui-" + Mk++;
function xk() {
  const [r, e] = Le.useState(() => ql ? sg() : void 0);
  return zm(() => {
    r == null && e(sg());
  }, []), Le.useEffect(() => {
    ql || (ql = !0);
  }, []), r;
}
const Lk = Le[/* @__PURE__ */ "useId".toString()], Dk = Lk || xk;
function Uk() {
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
const Fk = /* @__PURE__ */ Le.createContext(null), Hk = () => Le.useContext(Fk);
function Bk(r) {
  return (r == null ? void 0 : r.ownerDocument) || document;
}
function Kk(r) {
  return Bk(r).defaultView || window;
}
function ss(r) {
  return r ? r instanceof Element || r instanceof Kk(r).Element : !1;
}
const qk = Le[/* @__PURE__ */ "useInsertionEffect".toString()], $k = qk || ((r) => r());
function Gk(r) {
  const e = Le.useRef(() => {
  });
  return $k(() => {
    e.current = r;
  }), Le.useCallback(function() {
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return e.current == null ? void 0 : e.current(...n);
  }, []);
}
function zk(r) {
  var e;
  r === void 0 && (r = {});
  const {
    open: t = !1,
    onOpenChange: n,
    nodeId: o
  } = r, [a, s] = Le.useState(null), l = ((e = r.elements) == null ? void 0 : e.reference) || a, u = Ok(r), f = Hk(), h = Gk((A, O) => {
    A && (m.current.openEvent = O), n == null || n(A, O);
  }), p = Le.useRef(null), m = Le.useRef({}), v = Le.useState(() => Uk())[0], C = Dk(), E = Le.useCallback((A) => {
    const O = ss(A) ? {
      getBoundingClientRect: () => A.getBoundingClientRect(),
      contextElement: A
    } : A;
    u.refs.setReference(O);
  }, [u.refs]), _ = Le.useCallback((A) => {
    (ss(A) || A === null) && (p.current = A, s(A)), (ss(u.refs.reference.current) || u.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    A !== null && !ss(A)) && u.refs.setReference(A);
  }, [u.refs]), R = Le.useMemo(() => ({
    ...u.refs,
    setReference: _,
    setPositionReference: E,
    domReference: p
  }), [u.refs, _, E]), I = Le.useMemo(() => ({
    ...u.elements,
    domReference: l
  }), [u.elements, l]), S = Le.useMemo(() => ({
    ...u,
    refs: R,
    elements: I,
    dataRef: m,
    nodeId: o,
    floatingId: C,
    events: v,
    open: t,
    onOpenChange: h
  }), [u, o, C, v, t, h, R, I]);
  return zm(() => {
    const A = f == null ? void 0 : f.nodesRef.current.find((O) => O.id === o);
    A && (A.context = S);
  }), Le.useMemo(() => ({
    ...u,
    context: S,
    refs: R,
    elements: I
  }), [u, R, I, S]);
}
function Wk(r, e) {
  if (r === "rtl" && (e.includes("right") || e.includes("left"))) {
    const [t, n] = e.split("-"), o = t === "right" ? "left" : "right";
    return n === void 0 ? o : `${o}-${n}`;
  }
  return e;
}
function cg(r, e, t, n) {
  return r === "center" || n === "center" ? { top: e } : r === "end" ? { bottom: t } : r === "start" ? { top: t } : {};
}
function lg(r, e, t, n, o) {
  return r === "center" || n === "center" ? { left: e } : r === "end" ? { [o === "ltr" ? "right" : "left"]: t } : r === "start" ? { [o === "ltr" ? "left" : "right"]: t } : {};
}
const Vk = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function jk({
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
    [Vk[u]]: $(n)
  }, p = $(-e / 2);
  return u === "left" ? {
    ...h,
    ...cg(f, s, t, o),
    right: p,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  } : u === "right" ? {
    ...h,
    ...cg(f, s, t, o),
    left: p,
    borderRightColor: "transparent",
    borderTopColor: "transparent"
  } : u === "top" ? {
    ...h,
    ...lg(f, a, t, o, l),
    bottom: p,
    borderTopColor: "transparent",
    borderLeftColor: "transparent"
  } : u === "bottom" ? {
    ...h,
    ...lg(f, a, t, o, l),
    top: p,
    borderBottomColor: "transparent",
    borderRightColor: "transparent"
  } : {};
}
const Wm = ht(
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
    const { dir: p } = qu();
    return a ? /* @__PURE__ */ P.createElement(
      "div",
      {
        ...f,
        ref: h,
        style: {
          ...u,
          ...jk({
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
Wm.displayName = "@mantine/core/FloatingArrow";
const [Yk, Vm] = ui(
  "Popover component was not found in the tree"
);
function jm({
  children: r,
  active: e = !0,
  refProp: t = "ref"
}) {
  const n = PA(e), o = Or(n, r == null ? void 0 : r.ref);
  return ia(r) ? Ks(r, { [t]: o }) : r;
}
jm.displayName = "@mantine/core/FocusTrap";
function Qk(r) {
  const e = document.createElement("div");
  return e.setAttribute("data-portal", "true"), typeof r.className == "string" && e.classList.add(...r.className.split(" ").filter(Boolean)), typeof r.style == "object" && Object.assign(e.style, r.style), typeof r.id == "string" && e.setAttribute("id", r.id), e;
}
const Jk = {}, Ym = ht((r, e) => {
  const { children: t, target: n, ...o } = Ce("Portal", Jk, r), [a, s] = pe(!1), l = Ke(null);
  return aa(() => (s(!0), l.current = n ? typeof n == "string" ? document.querySelector(n) : n : Qk(o), um(e, l.current), !n && l.current && document.body.appendChild(l.current), () => {
    !n && l.current && document.body.removeChild(l.current);
  }), [n]), !a || !l.current ? null : HT(/* @__PURE__ */ P.createElement(P.Fragment, null, t), l.current);
});
Ym.displayName = "@mantine/core/Portal";
function Qm({ withinPortal: r = !0, children: e, ...t }) {
  return r ? /* @__PURE__ */ P.createElement(Ym, { ...t }, e) : /* @__PURE__ */ P.createElement(P.Fragment, null, e);
}
Qm.displayName = "@mantine/core/OptionalPortal";
const Di = (r) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${$(r === "bottom" ? 10 : -10)})` },
  transitionProperty: "transform, opacity"
}), cs = {
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
    ...Di("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...Di("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...Di("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...Di("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...Di("top"),
    common: { transformOrigin: "top right" }
  }
}, ug = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function Xk({
  transition: r,
  state: e,
  duration: t,
  timingFunction: n
}) {
  const o = {
    transitionDuration: `${t}ms`,
    transitionTimingFunction: n
  };
  return typeof r == "string" ? r in cs ? {
    transitionProperty: cs[r].transitionProperty,
    ...o,
    ...cs[r].common,
    ...cs[r][ug[e]]
  } : {} : {
    transitionProperty: r.transitionProperty,
    ...o,
    ...r.common,
    ...r[ug[e]]
  };
}
function Zk({
  duration: r,
  exitDuration: e,
  timingFunction: t,
  mounted: n,
  onEnter: o,
  onExit: a,
  onEntered: s,
  onExited: l
}) {
  const u = jn(), f = fm(), h = u.respectReducedMotion ? f : !1, [p, m] = pe(h ? 0 : r), [v, C] = pe(n ? "entered" : "exited"), E = Ke(-1), _ = (R) => {
    const I = R ? o : a, S = R ? s : l;
    C(R ? "pre-entering" : "pre-exiting"), window.clearTimeout(E.current);
    const A = h ? 0 : R ? r : e;
    if (m(A), A === 0)
      typeof I == "function" && I(), typeof S == "function" && S(), C(R ? "entered" : "exited");
    else {
      const O = window.setTimeout(() => {
        typeof I == "function" && I(), C(R ? "entering" : "exiting");
      }, 10);
      E.current = window.setTimeout(() => {
        window.clearTimeout(O), typeof S == "function" && S(), C(R ? "entered" : "exited");
      }, A);
    }
  };
  return Co(() => {
    _(n);
  }, [n]), ye(() => () => window.clearTimeout(E.current), []), {
    transitionDuration: p,
    transitionStatus: v,
    transitionTimingFunction: t || "ease"
  };
}
function Jm({
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
  const { transitionDuration: p, transitionStatus: m, transitionTimingFunction: v } = Zk({
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
    Xk({
      transition: e,
      duration: p,
      state: m,
      timingFunction: v
    })
  ));
}
Jm.displayName = "@mantine/core/Transition";
var Xm = { dropdown: "m-38a85659", arrow: "m-a31dc6c1" };
const eP = {}, ed = Ue((r, e) => {
  var _, R, I, S;
  const t = Ce("PopoverDropdown", eP, r), {
    className: n,
    style: o,
    vars: a,
    children: s,
    onKeyDownCapture: l,
    variant: u,
    classNames: f,
    styles: h,
    ...p
  } = t, m = Vm(), v = _A({
    opened: m.opened,
    shouldReturnFocus: m.returnFocus
  }), C = m.withRoles ? {
    "aria-labelledby": m.getTargetId(),
    id: m.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, E = Or(e, m.floating);
  return m.disabled ? null : /* @__PURE__ */ P.createElement(Qm, { ...m.portalProps, withinPortal: m.withinPortal }, /* @__PURE__ */ P.createElement(
    Jm,
    {
      mounted: m.opened,
      ...m.transitionProps,
      transition: ((_ = m.transitionProps) == null ? void 0 : _.transition) || "fade",
      duration: ((R = m.transitionProps) == null ? void 0 : R.duration) ?? 150,
      keepMounted: m.keepMounted,
      exitDuration: typeof ((I = m.transitionProps) == null ? void 0 : I.exitDuration) == "number" ? m.transitionProps.exitDuration : (S = m.transitionProps) == null ? void 0 : S.duration
    },
    (A) => /* @__PURE__ */ P.createElement(jm, { active: m.trapFocus }, /* @__PURE__ */ P.createElement(
      ke,
      {
        ...C,
        ...p,
        variant: u,
        ref: E,
        onKeyDownCapture: pA(m.onClose, {
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
              ...A,
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
        Wm,
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
ed.classes = Xm;
ed.displayName = "@mantine/core/PopoverDropdown";
const tP = {
  refProp: "ref",
  popupType: "dialog"
}, Zm = Ue((r, e) => {
  const { children: t, refProp: n, popupType: o, ...a } = Ce(
    "PopoverTarget",
    tP,
    r
  );
  if (!ia(t))
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const s = a, l = Vm(), u = Or(l.reference, t.ref, e), f = l.withRoles ? {
    "aria-haspopup": o,
    "aria-expanded": l.opened,
    "aria-controls": l.getDropdownId(),
    id: l.getTargetId()
  } : {};
  return Ks(t, {
    ...s,
    ...f,
    ...l.targetProps,
    className: Rn(l.targetProps.className, s.className, t.props.className),
    [n]: u,
    ...l.controlled ? null : { onClick: l.onToggle }
  });
});
Zm.displayName = "@mantine/core/PopoverTarget";
function rP({
  opened: r,
  floating: e,
  position: t,
  positionDependencies: n
}) {
  const [o, a] = pe(0);
  ye(() => {
    if (e.refs.reference.current && e.refs.floating.current)
      return kk(
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
  ]), Co(() => {
    e.update();
  }, n), Co(() => {
    a((s) => s + 1);
  }, [r]);
}
function nP(r, e) {
  var n, o, a, s;
  const t = [ck(r.offset)];
  return (n = r.middlewares) != null && n.shift && t.push(lk({ limiter: uk() })), (o = r.middlewares) != null && o.flip && t.push(ok()), (a = r.middlewares) != null && a.inline && t.push(ak()), t.push(Nk({ element: r.arrowRef, padding: r.arrowOffset })), ((s = r.middlewares) != null && s.size || r.width === "target") && t.push(
    dk({
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
function oP(r) {
  const [e, t] = wo({
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
  }, a = zk({
    placement: r.position,
    middleware: nP(r, () => a)
  });
  return rP({
    opened: r.opened,
    position: r.position,
    positionDependencies: r.positionDependencies || [],
    floating: a
  }), Co(() => {
    var s;
    (s = r.onPositionChange) == null || s.call(r, a.placement);
  }, [a.placement]), Co(() => {
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
const iP = {
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
  zIndex: fA("popover"),
  __staticSelector: "Popover",
  width: "max-content"
}, aP = (r, { radius: e, shadow: t }) => ({
  dropdown: {
    "--popover-radius": e === void 0 ? void 0 : di(e),
    "--popover-shadow": gA(t)
  }
});
function Yn(r) {
  var Pn, gt, Nt, Jn, Ur, bt;
  const e = Ce("Popover", iP, r), {
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
    styles: I,
    closeOnClickOutside: S,
    withinPortal: A,
    portalProps: O,
    closeOnEscape: L,
    clickOutsideEvents: q,
    trapFocus: D,
    onClose: Q,
    onOpen: X,
    onChange: le,
    zIndex: ne,
    radius: fe,
    shadow: oe,
    id: we,
    defaultOpened: Y,
    __staticSelector: ie,
    withRoles: te,
    disabled: Pe,
    returnFocus: Qe,
    variant: ot,
    keepMounted: ut,
    vars: jr,
    ...sn
  } = e, jt = lt({
    name: ie,
    props: e,
    classes: Xm,
    classNames: R,
    styles: I,
    unstyled: _,
    rootSelector: "dropdown",
    vars: jr,
    varsResolver: aP
  }), ir = Ke(null), [cn, ar] = pe(null), [Dr, ln] = pe(null), { dir: Kt } = qu(), Cr = So(we), Ye = oP({
    middlewares: h,
    width: f,
    position: Wk(Kt, n),
    offset: typeof o == "number" ? o + (p ? m / 2 : 0) : o,
    arrowRef: ir,
    arrowOffset: v,
    onPositionChange: a,
    positionDependencies: s,
    opened: l,
    defaultOpened: Y,
    onChange: le,
    onOpen: X,
    onClose: Q
  });
  yA(() => S && Ye.onClose(), q, [
    cn,
    Dr
  ]);
  const kt = ze(
    (tt) => {
      ar(tt), Ye.floating.refs.setReference(tt);
    },
    [Ye.floating.refs.setReference]
  ), Pt = ze(
    (tt) => {
      ln(tt), Ye.floating.refs.setFloating(tt);
    },
    [Ye.floating.refs.setFloating]
  );
  return /* @__PURE__ */ P.createElement(
    Yk,
    {
      value: {
        returnFocus: Qe,
        disabled: Pe,
        controlled: Ye.controlled,
        reference: kt,
        floating: Pt,
        x: Ye.floating.x,
        y: Ye.floating.y,
        arrowX: (Nt = (gt = (Pn = Ye.floating) == null ? void 0 : Pn.middlewareData) == null ? void 0 : gt.arrow) == null ? void 0 : Nt.x,
        arrowY: (bt = (Ur = (Jn = Ye.floating) == null ? void 0 : Jn.middlewareData) == null ? void 0 : Ur.arrow) == null ? void 0 : bt.y,
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
        trapFocus: D,
        withinPortal: A,
        portalProps: O,
        zIndex: ne,
        radius: fe,
        shadow: oe,
        closeOnEscape: L,
        onClose: Ye.onClose,
        onToggle: Ye.onToggle,
        getTargetId: () => `${Cr}-target`,
        getDropdownId: () => `${Cr}-dropdown`,
        withRoles: te,
        targetProps: sn,
        __staticSelector: ie,
        classNames: R,
        styles: I,
        unstyled: _,
        variant: ot,
        keepMounted: ut,
        getStyles: jt
      }
    },
    t
  );
}
Yn.Target = Zm;
Yn.Dropdown = ed;
Yn.displayName = "@mantine/core/Popover";
Yn.extend = (r) => r;
var zr = { root: "m-5ae2e3c", barsLoader: "m-7a2bd4cd", bar: "m-870bb79", "bars-loader-animation": "m-5d2b3b9d", dotsLoader: "m-4e3f22d7", dot: "m-870c4af", "loader-dots-animation": "m-aac34a1", ovalLoader: "m-b34414df", "oval-loader-animation": "m-f8e89c4b" };
const sP = ht(({ className: r, ...e }, t) => /* @__PURE__ */ P.createElement(ke, { component: "span", className: Rn(zr.barsLoader, r), ...e, ref: t }, /* @__PURE__ */ P.createElement("span", { className: zr.bar }), /* @__PURE__ */ P.createElement("span", { className: zr.bar }), /* @__PURE__ */ P.createElement("span", { className: zr.bar }))), cP = ht(({ className: r, ...e }, t) => /* @__PURE__ */ P.createElement(ke, { component: "span", className: Rn(zr.dotsLoader, r), ...e, ref: t }, /* @__PURE__ */ P.createElement("span", { className: zr.dot }), /* @__PURE__ */ P.createElement("span", { className: zr.dot }), /* @__PURE__ */ P.createElement("span", { className: zr.dot }))), lP = ht(({ className: r, ...e }, t) => /* @__PURE__ */ P.createElement(ke, { component: "span", className: Rn(zr.ovalLoader, r), ...e, ref: t })), ev = {
  bars: sP,
  oval: lP,
  dots: cP
}, uP = {
  loaders: ev,
  type: "oval"
}, dP = (r, { size: e, color: t }) => ({
  root: {
    "--loader-size": Ft(e, "loader-size"),
    "--loader-color": t ? Ji(t, r) : void 0
  }
}), Xs = Ue((r, e) => {
  const t = Ce("Loader", uP, r), {
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
  } = t, _ = lt({
    name: "Loader",
    props: t,
    classes: zr,
    className: l,
    style: u,
    classNames: f,
    styles: h,
    unstyled: p,
    vars: s,
    varsResolver: dP
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
Xs.defaultLoaders = ev;
Xs.classes = zr;
Xs.displayName = "@mantine/core/Loader";
const tv = ht(
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
tv.displayName = "@mantine/core/CloseIcon";
var rv = { root: "m-86a44da5", "root--subtle": "m-220c80f2" };
const fP = {
  variant: "subtle"
}, hP = (r, { size: e, radius: t, iconSize: n }) => ({
  root: {
    "--cb-size": Ft(e, "cb-size"),
    "--cb-radius": t === void 0 ? void 0 : di(t),
    "--cb-icon-size": $(n)
  }
}), td = sa((r, e) => {
  const t = Ce("CloseButton", fP, r), {
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
  } = t, _ = lt({
    name: "CloseButton",
    props: t,
    className: l,
    style: f,
    classes: rv,
    classNames: u,
    styles: h,
    unstyled: p,
    vars: a,
    varsResolver: hP
  });
  return /* @__PURE__ */ P.createElement(
    la,
    {
      ref: e,
      ...E,
      unstyled: p,
      variant: C,
      disabled: v,
      mod: { disabled: v || m },
      ..._("root", { variant: C, active: !0 })
    },
    /* @__PURE__ */ P.createElement(tv, null),
    o
  );
});
td.classes = rv;
td.displayName = "@mantine/core/CloseButton";
function pP(r) {
  return Ql.toArray(r).filter(Boolean);
}
var nv = { root: "m-4081bf90" };
const gP = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, mP = (r, { grow: e, preventGrowOverflow: t, gap: n, align: o, justify: a, wrap: s }, { childWidth: l }) => ({
  root: {
    "--group-child-width": e && t ? l : void 0,
    "--group-gap": Uu(n),
    "--group-align": o,
    "--group-justify": a,
    "--group-wrap": s
  }
}), xs = Ue((r, e) => {
  const t = Ce("Group", gP, r), {
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
    ...I
  } = t, S = pP(u), A = S.length, O = Uu(f ?? "md"), q = { childWidth: `calc(${100 / A}% - (${O} - ${O} / ${A}))` }, D = lt({
    name: "Group",
    props: t,
    stylesCtx: q,
    className: o,
    style: a,
    classes: nv,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: E,
    varsResolver: mP
  });
  return /* @__PURE__ */ P.createElement(
    ke,
    {
      ...D("root"),
      ref: e,
      variant: _,
      mod: { grow: v },
      size: R,
      ...I
    },
    S
  );
});
xs.classes = nv;
xs.displayName = "@mantine/core/Group";
const [vP, da] = aA({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var xr = { wrapper: "m-6c018570", input: "m-8fb7ebe7", section: "m-82577fc2", placeholder: "m-88bacfd0", root: "m-46b77525", label: "m-8fdc1311", required: "m-78a94662", error: "m-8f816625", description: "m-fe47ce59" };
const dg = {}, yP = (r, { size: e }) => ({
  description: {
    "--input-description-size": e === void 0 ? void 0 : `calc(${Pr(e)} - ${$(2)})`
  }
}), Zs = Ue((r, e) => {
  const t = Ce("InputDescription", dg, r), {
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
  } = Ce("InputDescription", dg, t), C = da(), E = lt({
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
    varsResolver: yP
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
Zs.classes = xr;
Zs.displayName = "@mantine/core/InputDescription";
const CP = {}, wP = (r, { size: e }) => ({
  error: {
    "--input-error-size": e === void 0 ? void 0 : `calc(${Pr(e)} - ${$(2)})`
  }
}), ec = Ue((r, e) => {
  const t = Ce("InputError", CP, r), {
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
  } = t, C = lt({
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
    varsResolver: wP
  }), E = da(), _ = p && (E == null ? void 0 : E.getStyles) || C;
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
ec.classes = xr;
ec.displayName = "@mantine/core/InputError";
const fg = {
  labelElement: "label"
}, EP = (r, { size: e }) => ({
  label: {
    "--input-label-size": Pr(e),
    "--input-asterisk-color": void 0
  }
}), tc = Ue((r, e) => {
  const t = Ce("InputLabel", fg, r), {
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
  } = Ce("InputLabel", fg, t), I = lt({
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
    varsResolver: EP
  }), S = da(), A = (S == null ? void 0 : S.getStyles) || I;
  return /* @__PURE__ */ P.createElement(
    ke,
    {
      ...A("label"),
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
    p && /* @__PURE__ */ P.createElement("span", { ...A("required"), "aria-hidden": !0 }, " *")
  );
});
tc.classes = xr;
tc.displayName = "@mantine/core/InputLabel";
const hg = {}, rd = Ue((r, e) => {
  const t = Ce("InputPlaceholder", hg, r), {
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
  } = Ce("InputPlaceholder", hg, t), v = lt({
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
rd.classes = xr;
rd.displayName = "@mantine/core/InputPlaceholder";
function bP(r, { hasDescription: e, hasError: t }) {
  const n = r.findIndex((u) => u === "input"), o = r[n - 1], a = r[n + 1];
  return { offsetBottom: e && a === "description" || t && a === "error", offsetTop: e && o === "description" || t && o === "error" };
}
const _P = {
  labelElement: "label",
  inputContainer: (r) => r,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, SP = (r, { size: e }) => ({
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
}), nd = Ue((r, e) => {
  const t = Ce("InputWrapper", _P, r), {
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
    descriptionProps: I,
    errorProps: S,
    labelElement: A,
    children: O,
    withAsterisk: L,
    id: q,
    required: D,
    __stylesApiProps: Q,
    ...X
  } = t, le = lt({
    name: ["InputWrapper", p],
    props: Q || t,
    classes: xr,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: u,
    varsResolver: SP
  }), ne = {
    size: f,
    variant: h,
    __staticSelector: p
  }, fe = So(q), oe = typeof L == "boolean" ? L : D, we = (S == null ? void 0 : S.id) || `${fe}-error`, Y = (I == null ? void 0 : I.id) || `${fe}-description`, ie = fe, te = !!E && typeof E != "boolean", Pe = !!_, Qe = `${te ? we : ""} ${Pe ? Y : ""}`, ot = Qe.trim().length > 0 ? Qe.trim() : void 0, ut = (R == null ? void 0 : R.id) || `${fe}-label`, jr = C && /* @__PURE__ */ P.createElement(
    tc,
    {
      key: "label",
      labelElement: A,
      id: ut,
      htmlFor: ie,
      required: oe,
      ...ne,
      ...R
    },
    C
  ), sn = Pe && /* @__PURE__ */ P.createElement(
    Zs,
    {
      key: "description",
      ...I,
      ...ne,
      size: (I == null ? void 0 : I.size) || ne.size,
      id: (I == null ? void 0 : I.id) || Y
    },
    _
  ), jt = /* @__PURE__ */ P.createElement(P.Fragment, { key: "input" }, m(O)), ir = te && /* @__PURE__ */ P.createElement(
    ec,
    {
      ...S,
      ...ne,
      size: (S == null ? void 0 : S.size) || ne.size,
      key: "error",
      id: (S == null ? void 0 : S.id) || we
    },
    E
  ), cn = v.map((ar) => {
    switch (ar) {
      case "label":
        return jr;
      case "input":
        return jt;
      case "description":
        return sn;
      case "error":
        return ir;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ P.createElement(
    vP,
    {
      value: {
        getStyles: le,
        describedBy: ot,
        inputId: ie,
        labelId: ut,
        ...bP(v, { hasDescription: Pe, hasError: te })
      }
    },
    /* @__PURE__ */ P.createElement(
      ke,
      {
        ref: e,
        variant: h,
        size: f,
        mod: { error: !!E },
        ...le("root"),
        ...X
      },
      cn
    )
  );
});
nd.classes = xr;
nd.displayName = "@mantine/core/InputWrapper";
const TP = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: !0,
  withErrorStyles: !0
}, IP = (r, e, t) => ({
  wrapper: {
    "--input-margin-top": t.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": t.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": Ft(e.size, "input-height"),
    "--input-fz": Pr(e.size),
    "--input-radius": e.radius === void 0 ? void 0 : di(e.radius),
    "--input-left-section-width": e.leftSectionWidth !== void 0 ? $(e.leftSectionWidth) : void 0,
    "--input-right-section-width": e.rightSectionWidth !== void 0 ? $(e.rightSectionWidth) : void 0,
    "--input-padding-y": e.multiline ? Ft(e.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": e.leftSectionPointerEvents,
    "--input-right-section-pointer-events": e.rightSectionPointerEvents
  }
}), Ht = sa((r, e) => {
  const t = Ce("Input", TP, r), {
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
    rightSection: I,
    rightSectionProps: S,
    rightSectionWidth: A,
    rightSectionPointerEvents: O,
    leftSectionPointerEvents: L,
    variant: q,
    vars: D,
    pointer: Q,
    multiline: X,
    radius: le,
    id: ne,
    withAria: fe,
    withErrorStyles: oe,
    ...we
  } = t, { styleProps: Y, rest: ie } = js(we), te = da(), Pe = { offsetBottom: te == null ? void 0 : te.offsetBottom, offsetTop: te == null ? void 0 : te.offsetTop }, Qe = lt({
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
    vars: D,
    varsResolver: IP
  }), ot = fe ? {
    required: u,
    disabled: C,
    "aria-invalid": !!v,
    "aria-describedby": te == null ? void 0 : te.describedBy,
    id: (te == null ? void 0 : te.inputId) || ne
  } : {};
  return /* @__PURE__ */ P.createElement(
    ke,
    {
      ...Qe("wrapper"),
      ...Y,
      ...m,
      mod: {
        error: !!v && oe,
        pointer: Q,
        disabled: C,
        multiline: X,
        "data-with-right-section": !!I,
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
    I && /* @__PURE__ */ P.createElement(
      "div",
      {
        ...S,
        "data-position": "right",
        ...Qe("section", {
          className: S == null ? void 0 : S.className,
          style: S == null ? void 0 : S.style
        })
      },
      I
    )
  );
});
Ht.classes = xr;
Ht.Wrapper = nd;
Ht.Label = tc;
Ht.Error = ec;
Ht.Description = Zs;
Ht.Placeholder = rd;
Ht.displayName = "@mantine/core/Input";
function AP(r, e, t) {
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
    id: I,
    size: S,
    style: A,
    inputContainer: O,
    inputWrapperOrder: L,
    withAsterisk: q,
    variant: D,
    vars: Q,
    ...X
  } = n, { styleProps: le, rest: ne } = js(X), fe = {
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
    style: A,
    inputContainer: O,
    inputWrapperOrder: L,
    withAsterisk: q,
    variant: D,
    id: I,
    ...R
  };
  return {
    ...ne,
    classNames: u,
    styles: f,
    unstyled: p,
    wrapperProps: { ...fe, ...le },
    inputProps: {
      required: l,
      classNames: u,
      styles: f,
      unstyled: p,
      size: S,
      __staticSelector: m,
      __stylesApiProps: v || n,
      error: s,
      variant: D,
      id: I
    }
  };
}
const RP = {
  __staticSelector: "InputBase",
  withAria: !0
}, Qn = sa((r, e) => {
  const { inputProps: t, wrapperProps: n, ...o } = AP("InputBase", RP, r);
  return /* @__PURE__ */ P.createElement(Ht.Wrapper, { ...n }, /* @__PURE__ */ P.createElement(Ht, { ...t, ...o, ref: e }));
});
Qn.classes = { ...Ht.classes, ...Ht.Wrapper.classes };
Qn.displayName = "@mantine/core/InputBase";
const [kP, od] = ui(
  "Accordion component was not found in the tree"
);
function id({ style: r, size: e = 16, ...t }) {
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
id.displayName = "@mantine/core/AccordionChevron";
const [PP, ov] = ui("Accordion.Item component was not found in the tree");
var fa = { root: "m-9bdbb667", panel: "m-df78851f", content: "m-4ba554d4", itemTitle: "m-8fa820a0", control: "m-4ba585b8", "control--default": "m-6939a5e9", "control--contained": "m-4271d21b", label: "m-df3ffa0f", chevron: "m-3f35ae96", icon: "m-9bd771fe", item: "m-9bd7b098", "item--default": "m-fe19b709", "item--contained": "m-1f921b3b", "item--filled": "m-2cdf939a", "item--separated": "m-9f59b069" };
const NP = {}, ad = Ue((r, e) => {
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
  } = Ce("AccordionControl", NP, r), { value: C } = ov(), E = od(), _ = E.isItemActive(C), R = typeof E.order == "number", I = `h${E.order}`, S = /* @__PURE__ */ P.createElement(
    la,
    {
      ...v,
      ...E.getStyles("control", { className: n, classNames: t, style: o, styles: a, variant: E.variant }),
      unstyled: E.unstyled,
      mod: [
        "accordion-control",
        { active: _, "chevron-position": E.chevronPosition, disabled: m }
      ],
      ref: e,
      onClick: (A) => {
        f == null || f(A), E.onChange(C);
      },
      type: "button",
      disabled: m,
      "aria-expanded": _,
      "aria-controls": E.getRegionId(C),
      id: E.getControlId(C),
      onKeyDown: uA({
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
  return R ? /* @__PURE__ */ P.createElement(I, { ...E.getStyles("itemTitle", { classNames: t, styles: a }) }, S) : S;
});
ad.displayName = "@mantine/core/AccordionControl";
ad.classes = fa;
const OP = {}, sd = Ue((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, value: l, ...u } = Ce(
    "AccordionItem",
    OP,
    r
  ), f = od();
  return /* @__PURE__ */ P.createElement(PP, { value: { value: l } }, /* @__PURE__ */ P.createElement(
    ke,
    {
      ref: e,
      mod: { active: f.isItemActive(l) },
      ...f.getStyles("item", { className: n, classNames: t, styles: a, style: o, variant: f.variant }),
      ...u
    }
  ));
});
sd.displayName = "@mantine/core/AccordionItem";
sd.classes = fa;
const MP = {}, cd = Ue((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, children: l, ...u } = Ce(
    "AccordionPanel",
    MP,
    r
  ), { value: f } = ov(), h = od();
  return /* @__PURE__ */ P.createElement(
    Tm,
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
cd.displayName = "@mantine/core/AccordionPanel";
cd.classes = fa;
const xP = {
  multiple: !1,
  disableChevronRotation: !1,
  chevronPosition: "right",
  variant: "default",
  chevron: /* @__PURE__ */ P.createElement(id, null)
}, LP = (r, { transitionDuration: e, chevronSize: t, radius: n }) => ({
  root: {
    "--accordion-transition-duration": e === void 0 ? void 0 : `${e}ms`,
    "--accordion-chevron-size": t === void 0 ? void 0 : $(t),
    "--accordion-radius": n === void 0 ? void 0 : di(n)
  }
});
function Et(r) {
  const e = Ce("Accordion", xP, r), {
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
    chevronSize: I,
    order: S,
    chevron: A,
    variant: O,
    radius: L,
    ...q
  } = e, D = So(v), [Q, X] = wo({
    value: h,
    defaultValue: p,
    finalValue: f ? [] : null,
    onChange: m
  }), le = (oe) => Array.isArray(Q) ? Q.includes(oe) : oe === Q, ne = (oe) => {
    const we = Array.isArray(Q) ? Q.includes(oe) ? Q.filter((Y) => Y !== oe) : [...Q, oe] : oe === Q ? null : oe;
    X(we);
  }, fe = lt({
    name: "Accordion",
    classes: fa,
    props: e,
    className: n,
    style: o,
    classNames: t,
    styles: a,
    unstyled: s,
    vars: l,
    varsResolver: LP
  });
  return /* @__PURE__ */ P.createElement(
    kP,
    {
      value: {
        isItemActive: le,
        onChange: ne,
        getControlId: qp(
          `${D}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: qp(
          `${D}-panel`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        transitionDuration: E,
        disableChevronRotation: _,
        chevronPosition: R,
        order: S,
        chevron: A,
        loop: C,
        getStyles: fe,
        variant: O,
        unstyled: s
      }
    },
    /* @__PURE__ */ P.createElement(ke, { ...fe("root"), id: D, ...q, variant: O, "data-accordion": !0 }, u)
  );
}
const DP = (r) => r;
Et.extend = DP;
Et.classes = fa;
Et.displayName = "@mantine/core/Accordion";
Et.Item = sd;
Et.Panel = cd;
Et.Control = ad;
Et.Chevron = id;
function iv(r) {
  return typeof r == "string" ? { value: r, label: r } : typeof r == "number" ? { value: r.toString(), label: r.toString() } : "group" in r ? {
    group: r.group,
    items: r.items.map((e) => iv(e))
  } : r;
}
function av(r) {
  return r ? r.map(iv) : [];
}
function ld(r) {
  return r.reduce((e, t) => "group" in t ? { ...e, ...ld(t.items) } : (e[t.value] = t, e), {});
}
var Vt = { dropdown: "m-88b62a41", options: "m-b2821a6e", option: "m-92253aa5", search: "m-985517d8", empty: "m-2530cd1d", header: "m-858f94bd", footer: "m-82b967cb", group: "m-254f3e4f", groupLabel: "m-2bb2e9e5", chevron: "m-2943220b", optionsDropdownScrollArea: "m-71d052f9", optionsDropdownOption: "m-390b5f4", optionsDropdownCheckIcon: "m-8ee53fc2" };
const UP = {
  error: null
}, FP = (r, { size: e }) => ({
  chevron: {
    "--combobox-chevron-size": Ft(e, "combobox-chevron-size")
  }
}), ud = Ue((r, e) => {
  const t = Ce("ComboboxChevron", UP, r), { size: n, error: o, style: a, className: s, classNames: l, styles: u, unstyled: f, vars: h, ...p } = t, m = lt({
    name: "ComboboxChevron",
    classes: Vt,
    props: t,
    style: a,
    className: s,
    classNames: l,
    styles: u,
    unstyled: f,
    vars: h,
    varsResolver: FP,
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
ud.classes = Vt;
ud.displayName = "@mantine/core/ComboboxChevron";
const [HP, Lr] = ui(
  "Combobox component was not found in tree"
), sv = ht(
  ({ size: r, onMouseDown: e, onClick: t, onClear: n, ...o }, a) => /* @__PURE__ */ P.createElement(
    td,
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
sv.displayName = "@mantine/core/ComboboxClearButton";
const BP = {}, dd = Ue((r, e) => {
  const { classNames: t, styles: n, className: o, style: a, hidden: s, ...l } = Ce(
    "ComboboxDropdown",
    BP,
    r
  ), u = Lr();
  return /* @__PURE__ */ P.createElement(
    Yn.Dropdown,
    {
      ...l,
      ref: e,
      role: "presentation",
      "data-hidden": s || void 0,
      ...u.getStyles("dropdown", { className: o, style: a, classNames: t, styles: n })
    }
  );
});
dd.classes = Vt;
dd.displayName = "@mantine/core/ComboboxDropdown";
const KP = {
  refProp: "ref"
}, cv = Ue((r, e) => {
  const { children: t, refProp: n } = Ce("ComboboxDropdownTarget", KP, r);
  if (Lr(), !ia(t))
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  return /* @__PURE__ */ P.createElement(Yn.Target, { ref: e, refProp: n }, t);
});
cv.displayName = "@mantine/core/ComboboxDropdownTarget";
const qP = {}, fd = Ue((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, ...l } = Ce(
    "ComboboxEmpty",
    qP,
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
fd.classes = Vt;
fd.displayName = "@mantine/core/ComboboxEmpty";
function hd({
  onKeyDown: r,
  withKeyboardNavigation: e,
  withAriaAttributes: t,
  withExpandedAttribute: n,
  targetType: o
}) {
  const a = Lr(), [s, l] = pe(null), u = (h) => {
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
const $P = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1
}, lv = Ue((r, e) => {
  const {
    children: t,
    refProp: n,
    withKeyboardNavigation: o,
    withAriaAttributes: a,
    withExpandedAttribute: s,
    targetType: l,
    ...u
  } = Ce("ComboboxEventsTarget", $P, r);
  if (!ia(t))
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const f = Lr(), h = hd({
    targetType: l,
    withAriaAttributes: a,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: t.props.onKeyDown
  });
  return Ks(t, {
    ...h,
    ...u,
    [n]: Or(e, f.store.targetRef, t == null ? void 0 : t.ref)
  });
});
lv.displayName = "@mantine/core/ComboboxEventsTarget";
const GP = {}, pd = Ue((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, ...l } = Ce(
    "ComboboxFooter",
    GP,
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
pd.classes = Vt;
pd.displayName = "@mantine/core/ComboboxFooter";
const zP = {}, gd = Ue((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, children: l, label: u, ...f } = Ce(
    "ComboboxGroup",
    zP,
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
gd.classes = Vt;
gd.displayName = "@mantine/core/ComboboxGroup";
const WP = {}, md = Ue((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, ...l } = Ce(
    "ComboboxHeader",
    WP,
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
md.classes = Vt;
md.displayName = "@mantine/core/ComboboxHeader";
const VP = {}, vd = Ue((r, e) => {
  const t = Ce("ComboboxOption", VP, r), {
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
  } = t, _ = Lr(), R = Og(), I = f || R;
  return /* @__PURE__ */ P.createElement(
    ke,
    {
      ..._.getStyles("option", { className: o, classNames: n, styles: s, style: a }),
      ...E,
      ref: e,
      id: I,
      mod: [
        "combobox-option",
        { "combobox-active": h, "combobox-disabled": v, "combobox-selected": C }
      ],
      role: "option",
      onClick: (S) => {
        var A;
        v ? S.preventDefault() : ((A = _.onOptionSubmit) == null || A.call(_, t.value, t), u == null || u(S));
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
vd.classes = Vt;
vd.displayName = "@mantine/core/ComboboxOption";
const jP = {}, yd = Ue((r, e) => {
  const t = Ce("ComboboxOptions", jP, r), { classNames: n, className: o, style: a, styles: s, id: l, onMouseDown: u, labelledBy: f, ...h } = t, p = Lr(), m = So(l);
  return ye(() => {
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
yd.classes = Vt;
yd.displayName = "@mantine/core/ComboboxOptions";
const YP = {
  withAriaAttributes: !0,
  withKeyboardNavigation: !0
}, Cd = Ue((r, e) => {
  const t = Ce("ComboboxSearch", YP, r), {
    classNames: n,
    styles: o,
    unstyled: a,
    vars: s,
    withAriaAttributes: l,
    onKeyDown: u,
    withKeyboardNavigation: f,
    size: h,
    ...p
  } = t, m = Lr(), v = m.getStyles("search"), C = hd({
    targetType: "input",
    withAriaAttributes: l,
    withKeyboardNavigation: f,
    withExpandedAttribute: !1,
    onKeyDown: u
  });
  return /* @__PURE__ */ P.createElement(
    Ht,
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
Cd.classes = Vt;
Cd.displayName = "@mantine/core/ComboboxSearch";
const QP = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1
}, uv = Ue((r, e) => {
  const {
    children: t,
    refProp: n,
    withKeyboardNavigation: o,
    withAriaAttributes: a,
    withExpandedAttribute: s,
    targetType: l,
    ...u
  } = Ce("ComboboxTarget", QP, r);
  if (!ia(t))
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const f = Lr(), h = hd({
    targetType: l,
    withAriaAttributes: a,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: t.props.onKeyDown
  }), p = Ks(t, {
    ...h,
    ...u
  });
  return /* @__PURE__ */ P.createElement(Yn.Target, { ref: Or(e, f.store.targetRef) }, p);
});
uv.displayName = "@mantine/core/ComboboxTarget";
function JP(r, e, t) {
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
function XP(r, e, t) {
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
function ZP(r) {
  for (let e = 0; e < r.length; e += 1)
    if (!r[e].hasAttribute("data-combobox-disabled"))
      return e;
  return -1;
}
function wd({
  defaultOpened: r,
  opened: e,
  onOpenedChange: t,
  onDropdownClose: n,
  onDropdownOpen: o,
  loop: a = !0,
  scrollBehavior: s = "instant"
} = {}) {
  const [l, u] = wo({
    value: e,
    defaultValue: r,
    finalValue: !1,
    onChange: t
  }), f = Ke(null), h = Ke(-1), p = Ke(null), m = Ke(null), v = Ke(-1), C = Ke(-1), E = Ke(-1), _ = ze(
    (Y = "unknown") => {
      l || (u(!0), o == null || o(Y));
    },
    [u, o, l]
  ), R = ze(
    (Y = "unknown") => {
      l && (u(!1), n == null || n(Y));
    },
    [u, n, l]
  ), I = ze(
    (Y = "unknown") => {
      l ? R(Y) : _(Y);
    },
    [R, _, l]
  ), S = ze(() => {
    const Y = document.querySelector(`#${f.current} [data-combobox-selected]`);
    Y == null || Y.removeAttribute("data-combobox-selected"), Y == null || Y.removeAttribute("aria-selected");
  }, []), A = ze(
    (Y) => {
      const ie = document.getElementById(f.current), te = ie == null ? void 0 : ie.querySelectorAll("[data-combobox-option]");
      if (!te)
        return null;
      const Pe = Y >= te.length ? 0 : Y < 0 ? te.length - 1 : Y;
      return h.current = Pe, te != null && te[Pe] && !te[Pe].hasAttribute("data-combobox-disabled") ? (S(), te[Pe].setAttribute("data-combobox-selected", "true"), te[Pe].setAttribute("aria-selected", "true"), te[Pe].scrollIntoView({ block: "nearest", behavior: s }), te[Pe].id) : null;
    },
    [s, S]
  ), O = ze(() => {
    const Y = document.querySelector(
      `#${f.current} [data-combobox-active]`
    );
    if (Y) {
      const ie = document.querySelectorAll(
        `#${f.current} [data-combobox-option]`
      ), te = Array.from(ie).findIndex((Pe) => Pe === Y);
      return A(te);
    }
    return A(0);
  }, [A]), L = ze(
    () => A(
      XP(
        h.current,
        document.querySelectorAll(`#${f.current} [data-combobox-option]`),
        a
      )
    ),
    [A, a]
  ), q = ze(
    () => A(
      JP(
        h.current,
        document.querySelectorAll(`#${f.current} [data-combobox-option]`),
        a
      )
    ),
    [A, a]
  ), D = ze(
    () => A(
      ZP(
        document.querySelectorAll(`#${f.current} [data-combobox-option]`)
      )
    ),
    [A]
  ), Q = ze((Y = "selected") => {
    E.current = window.setTimeout(() => {
      const ie = document.querySelectorAll(
        `#${f.current} [data-combobox-option]`
      ), te = Array.from(ie).findIndex(
        (Pe) => Pe.hasAttribute(`data-combobox-${Y}`)
      );
      h.current = te;
    }, 0);
  }, []), X = ze(() => {
    h.current = -1, S();
  }, [S]), le = ze(() => {
    const Y = document.querySelectorAll(
      `#${f.current} [data-combobox-option]`
    ), ie = Y == null ? void 0 : Y[h.current];
    ie == null || ie.click();
  }, []), ne = ze((Y) => {
    f.current = Y;
  }, []), fe = ze(() => {
    v.current = window.setTimeout(() => p.current.focus(), 0);
  }, []), oe = ze(() => {
    C.current = window.setTimeout(() => m.current.focus(), 0);
  }, []), we = ze(() => h.current, []);
  return ye(
    () => () => {
      window.clearTimeout(v.current), window.clearTimeout(C.current), window.clearTimeout(E.current);
    },
    []
  ), {
    dropdownOpened: l,
    openDropdown: _,
    closeDropdown: R,
    toggleDropdown: I,
    selectedOptionIndex: h.current,
    getSelectedOptionIndex: we,
    selectOption: A,
    selectFirstOption: D,
    selectActiveOption: O,
    selectNextOption: L,
    selectPreviousOption: q,
    resetSelectedOption: X,
    updateSelectedOptionIndex: Q,
    listId: f.current,
    setListId: ne,
    clickSelectedOption: le,
    searchRef: p,
    focusSearchInput: fe,
    targetRef: m,
    focusTarget: oe
  };
}
const eN = {
  keepMounted: !0,
  withinPortal: !0,
  resetSelectionOnOptionHover: !1,
  width: "target",
  transitionProps: { transition: "fade", duration: 0 }
}, tN = (r, { size: e, dropdownPadding: t }) => ({
  options: {
    "--combobox-option-fz": Pr(e),
    "--combobox-option-padding": Ft(e, "combobox-option-padding")
  },
  dropdown: {
    "--combobox-padding": t === void 0 ? void 0 : $(t),
    "--combobox-option-fz": Pr(e),
    "--combobox-option-padding": Ft(e, "combobox-option-padding")
  }
});
function je(r) {
  const e = Ce("Combobox", eN, r), {
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
  } = e, E = wd(), _ = s || E, R = lt({
    name: m || "Combobox",
    classes: Vt,
    props: e,
    classNames: t,
    styles: n,
    unstyled: o,
    vars: l,
    varsResolver: tN
  });
  return /* @__PURE__ */ P.createElement(
    HP,
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
      Yn,
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
const rN = (r) => r;
je.extend = rN;
je.classes = Vt;
je.displayName = "@mantine/core/Combobox";
je.Target = uv;
je.Dropdown = dd;
je.Options = yd;
je.Option = vd;
je.Search = Cd;
je.Empty = fd;
je.Chevron = ud;
je.Footer = pd;
je.Header = md;
je.EventsTarget = lv;
je.DropdownTarget = cv;
je.Group = gd;
je.ClearButton = sv;
var dv = { root: "m-5f75b09e", body: "m-5f6e695e", labelWrapper: "m-d3ea56bb", label: "m-8ee546b8", description: "m-328f68c0", error: "m-8e8a99cc" };
const nN = dv, fv = ht(
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
  }, I) => {
    const S = lt({
      name: r,
      props: e,
      className: t,
      style: E,
      classes: dv,
      classNames: n,
      styles: o,
      unstyled: a
    });
    return /* @__PURE__ */ P.createElement(
      ke,
      {
        ...S("root"),
        ref: I,
        __vars: {
          "--label-fz": Pr(m),
          "--label-lh": Ft(m, "label-lh")
        },
        mod: { "label-position": v },
        variant: C,
        size: m,
        ...R
      },
      /* @__PURE__ */ P.createElement("div", { ...S("body") }, s, /* @__PURE__ */ P.createElement("div", { ...S("labelWrapper"), "data-disabled": h || void 0 }, l && /* @__PURE__ */ P.createElement("label", { ...S("label"), "data-disabled": h || void 0, htmlFor: f }, l), u && /* @__PURE__ */ P.createElement(Ht.Description, { size: m, __inheritStyles: !1, ...S("description") }, u), p && p !== "boolean" && /* @__PURE__ */ P.createElement(Ht.Error, { size: m, __inheritStyles: !1, ...S("error") }, p)))
    );
  }
);
fv.displayName = "@mantine/core/InlineInput";
const hv = _o(null), oN = hv.Provider, iN = () => Vn(hv);
function aN({ children: r, role: e }) {
  const t = da();
  return t ? /* @__PURE__ */ P.createElement("div", { role: e, "aria-labelledby": t.labelId, "aria-describedby": t.describedBy }, r) : /* @__PURE__ */ P.createElement(P.Fragment, null, r);
}
const sN = {}, Ed = Ue((r, e) => {
  const { value: t, defaultValue: n, onChange: o, size: a, wrapperProps: s, children: l, ...u } = Ce(
    "CheckboxGroup",
    sN,
    r
  ), [f, h] = wo({
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
  return /* @__PURE__ */ P.createElement(oN, { value: { value: f, onChange: p, size: a } }, /* @__PURE__ */ P.createElement(
    Ht.Wrapper,
    {
      size: a,
      ref: e,
      ...s,
      ...u,
      labelElement: "div",
      __staticSelector: "CheckboxGroup"
    },
    /* @__PURE__ */ P.createElement(aN, { role: "group" }, l)
  ));
});
Ed.classes = Ht.Wrapper.classes;
Ed.displayName = "@mantine/core/CheckboxGroup";
function pv({ size: r, style: e, ...t }) {
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
function cN({ indeterminate: r, ...e }) {
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
  ) : /* @__PURE__ */ P.createElement(pv, { ...e });
}
var gv = { root: "m-bf2d988c", inner: "m-26062bec", input: "m-26063560", icon: "m-bf295423", "input--outline": "m-215c4542" };
const lN = {
  labelPosition: "right",
  icon: cN
}, uN = (r, { radius: e, color: t, size: n, iconColor: o, variant: a }) => {
  const s = Vs({ color: t || r.primaryColor, theme: r }), l = s.isThemeColor && s.shade === void 0 ? `var(--mantine-color-${s.color}-outline)` : s.color;
  return {
    root: {
      "--checkbox-size": Ft(n, "checkbox-size"),
      "--checkbox-radius": e === void 0 ? void 0 : di(e),
      "--checkbox-color": a === "outline" ? l : Ji(t, r),
      "--checkbox-icon-color": o ? Ji(o, r) : void 0
    }
  };
}, rc = Ue((r, e) => {
  const t = Ce("Checkbox", lN, r), {
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
    description: I,
    error: S,
    disabled: A,
    variant: O,
    indeterminate: L,
    icon: q,
    rootRef: D,
    iconColor: Q,
    onChange: X,
    ...le
  } = t, ne = iN(), fe = m || (ne == null ? void 0 : ne.size), oe = q, we = lt({
    name: "Checkbox",
    props: t,
    classes: gv,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: u,
    varsResolver: uN
  }), { styleProps: Y, rest: ie } = js(le), te = So(p), Pe = ne ? {
    checked: ne.value.includes(ie.value),
    onChange: (Qe) => {
      ne.onChange(Qe), X == null || X(Qe);
    }
  } : {};
  return /* @__PURE__ */ P.createElement(
    fv,
    {
      ...we("root"),
      __staticSelector: "Checkbox",
      __stylesApiProps: t,
      id: te,
      size: fe,
      labelPosition: R,
      label: h,
      description: I,
      error: S,
      disabled: A,
      classNames: n,
      styles: s,
      unstyled: l,
      "data-checked": Pe.checked || _ || void 0,
      variant: O,
      ref: D,
      ...Y,
      ...C
    },
    /* @__PURE__ */ P.createElement(ke, { ...we("inner"), mod: { "data-label-position": R } }, /* @__PURE__ */ P.createElement(
      ke,
      {
        component: "input",
        id: te,
        ref: e,
        checked: _,
        disabled: A,
        mod: { error: !!S, indeterminate: L },
        ...we("input", { focusable: !0, variant: O }),
        onChange: X,
        ...ie,
        ...Pe,
        type: "checkbox"
      }
    ), /* @__PURE__ */ P.createElement(oe, { indeterminate: L, ...we("icon") }))
  );
});
rc.classes = { ...gv, ...nN };
rc.displayName = "@mantine/core/Checkbox";
rc.Group = Ed;
function Zi(r) {
  return "group" in r;
}
function mv({
  options: r,
  search: e,
  limit: t
}) {
  const n = e.trim().toLowerCase(), o = [];
  for (let a = 0; a < r.length; a += 1) {
    const s = r[a];
    if (o.length === t)
      return o;
    Zi(s) && o.push({
      group: s.group,
      items: mv({
        options: s.items,
        search: e,
        limit: t - o.length
      })
    }), Zi(s) || s.label.toLowerCase().includes(n) && o.push(s);
  }
  return o;
}
function dN(r) {
  if (r.length === 0)
    return !0;
  for (const e of r)
    if (!("group" in e) || e.items.length > 0)
      return !1;
  return !0;
}
function vv(r, e = /* @__PURE__ */ new Set()) {
  if (Array.isArray(r))
    for (const t of r)
      if (Zi(t))
        vv(t.items, e);
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
function $l(r, e) {
  return Array.isArray(r) ? r.includes(e) : r === e;
}
function yv({ data: r, withCheckIcon: e, value: t, checkIconPosition: n, unstyled: o }) {
  if (!Zi(r)) {
    const s = e && $l(t, r.value) && /* @__PURE__ */ P.createElement(pv, { className: Vt.optionsDropdownCheckIcon });
    return /* @__PURE__ */ P.createElement(
      je.Option,
      {
        value: r.value,
        disabled: r.disabled,
        className: Rn({ [Vt.optionsDropdownOption]: !o }),
        "data-reverse": n === "right" || void 0,
        "data-checked": $l(t, r.value) || void 0,
        "aria-selected": $l(t, r.value)
      },
      n === "left" && s,
      /* @__PURE__ */ P.createElement("span", null, r.label),
      n === "right" && s
    );
  }
  const a = r.items.map((s) => /* @__PURE__ */ P.createElement(
    yv,
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
function Cv({
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
  vv(r);
  const _ = typeof o == "string" ? (n || mv)({
    options: r,
    search: u ? o : "",
    limit: a ?? 1 / 0
  }) : r, R = dN(_), I = _.map((S) => /* @__PURE__ */ P.createElement(
    yv,
    {
      data: S,
      key: Zi(S) ? S.group : S.value,
      withCheckIcon: f,
      value: h,
      checkIconPosition: p,
      unstyled: v
    }
  ));
  return /* @__PURE__ */ P.createElement(je.Dropdown, { hidden: e || t && R }, /* @__PURE__ */ P.createElement(je.Options, { labelledBy: C }, l ? /* @__PURE__ */ P.createElement(
    ca.Autosize,
    {
      mah: s ?? 220,
      type: "scroll",
      scrollbarSize: "var(--_combobox-padding)",
      offsetScrollbars: "y",
      className: Vt.optionsDropdownScrollArea
    },
    I
  ) : I, R && m && /* @__PURE__ */ P.createElement(je.Empty, null, m)));
}
const fN = {}, bd = Ue((r, e) => {
  const t = Ce("Autocomplete", fN, r), {
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
    selectFirstOptionOnChange: I,
    onOptionSubmit: S,
    comboboxProps: A,
    readOnly: O,
    disabled: L,
    filter: q,
    limit: D,
    withScrollArea: Q,
    maxDropdownHeight: X,
    size: le,
    id: ne,
    ...fe
  } = t, oe = So(ne), we = av(E), Y = ld(we), [ie, te] = wo({
    value: _,
    defaultValue: R,
    finalValue: "",
    onChange: C
  }), Pe = wd({
    opened: l,
    defaultOpened: u,
    onDropdownOpen: h,
    onDropdownClose: () => {
      f == null || f(), Pe.resetSelectedOption();
    }
  }), { resolvedClassNames: Qe, resolvedStyles: ot } = Cm({
    props: t,
    styles: o,
    classNames: n
  });
  return ye(() => {
    I && Pe.selectFirstOption();
  }, [I, ie]), /* @__PURE__ */ P.createElement(
    je,
    {
      store: Pe,
      __staticSelector: "Autocomplete",
      classNames: Qe,
      styles: ot,
      unstyled: a,
      readOnly: O,
      onOptionSubmit: (ut) => {
        S == null || S(ut), te(Y[ut].label), Pe.closeDropdown();
      },
      size: le,
      ...A
    },
    /* @__PURE__ */ P.createElement(je.Target, null, /* @__PURE__ */ P.createElement(
      Qn,
      {
        ref: e,
        ...fe,
        size: le,
        __staticSelector: "Autocomplete",
        disabled: L,
        readOnly: O,
        value: ie,
        onChange: (ut) => {
          te(ut.currentTarget.value), Pe.openDropdown(), I && Pe.selectFirstOption();
        },
        onFocus: (ut) => {
          Pe.openDropdown(), p == null || p(ut);
        },
        onBlur: (ut) => {
          Pe.closeDropdown(), m == null || m(ut);
        },
        onClick: (ut) => {
          Pe.openDropdown(), v == null || v(ut);
        },
        classNames: Qe,
        styles: ot,
        unstyled: a,
        id: oe
      }
    )),
    /* @__PURE__ */ P.createElement(
      Cv,
      {
        data: we,
        hidden: O || L,
        filter: q,
        search: ie,
        limit: D,
        hiddenWhenEmpty: !0,
        withScrollArea: Q,
        maxDropdownHeight: X,
        unstyled: a,
        labelId: `${oe}-label`
      }
    )
  );
});
bd.classes = { ...Qn.classes, ...je.classes };
bd.displayName = "@mantine/core/Autocomplete";
var nc = { root: "m-77c9d27d", inner: "m-80f1301b", loader: "m-a25b86ee", label: "m-811560b9", section: "m-a74036a", group: "m-80d6d844" };
const pg = {
  orientation: "horizontal"
}, hN = (r, { borderWidth: e }) => ({
  group: { "--button-border-width": $(e) }
}), _d = Ue((r, e) => {
  const t = Ce("ButtonGroup", pg, r), {
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
  } = Ce("ButtonGroup", pg, r), v = lt({
    name: "ButtonGroup",
    props: t,
    classes: nc,
    className: n,
    style: o,
    classNames: a,
    styles: s,
    unstyled: l,
    vars: f,
    varsResolver: hN,
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
_d.classes = nc;
_d.displayName = "@mantine/core/ButtonGroup";
const pN = {}, gN = (r, { radius: e, color: t, gradient: n, variant: o, size: a, justify: s }) => {
  const l = r.variantColorResolver({
    color: t || r.primaryColor,
    theme: r,
    gradient: n,
    variant: o || "filled"
  });
  return {
    root: {
      "--button-justify": s,
      "--button-height": Ft(a, "button-height"),
      "--button-padding-x": Ft(a, "button-padding-x"),
      "--button-fz": a != null && a.includes("compact") ? Pr(a.replace("compact-", "")) : Pr(a),
      "--button-radius": e === void 0 ? void 0 : di(e),
      "--button-bg": t || o ? l.background : void 0,
      "--button-hover": t || o ? l.hover : void 0,
      "--button-color": t || o ? l.color : void 0,
      "--button-bd": t || o ? l.border : void 0,
      "--button-hover-color": t || o ? l.hoverColor : void 0
    }
  };
}, ha = sa((r, e) => {
  const t = Ce("Button", pN, r), {
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
    styles: I,
    unstyled: S,
    "data-disabled": A,
    ...O
  } = t, L = lt({
    name: "Button",
    props: t,
    classes: nc,
    className: a,
    style: n,
    classNames: R,
    styles: I,
    unstyled: S,
    vars: o,
    varsResolver: gN
  }), q = !!f, D = !!h;
  return /* @__PURE__ */ P.createElement(
    la,
    {
      ref: e,
      ...L("root", { active: !l && !C && !A }),
      unstyled: S,
      variant: m,
      disabled: l || C,
      mod: {
        disabled: l || A,
        loading: C,
        block: p,
        "with-left-section": q,
        "with-right-section": D
      },
      ...O
    },
    /* @__PURE__ */ P.createElement(ke, { component: "span", ...L("loader"), "aria-hidden": !0 }, /* @__PURE__ */ P.createElement(
      Xs,
      {
        color: "var(--button-color)",
        size: "calc(var(--button-height) / 1.8)",
        ...E
      }
    )),
    /* @__PURE__ */ P.createElement("span", { ...L("inner") }, f && /* @__PURE__ */ P.createElement(ke, { component: "span", ...L("section"), mod: { position: "left" } }, f), /* @__PURE__ */ P.createElement(ke, { component: "span", mod: { loading: C }, ...L("label") }, u), h && /* @__PURE__ */ P.createElement(ke, { component: "span", ...L("section"), mod: { position: "right" } }, h))
  );
});
ha.classes = nc;
ha.displayName = "@mantine/core/Button";
ha.Group = _d;
var wv = { root: "m-7485cace" };
const mN = {}, vN = (r, { size: e, fluid: t }) => ({
  root: {
    "--container-size": t ? void 0 : Ft(e, "container-size")
  }
}), Sd = Ue((r, e) => {
  const t = Ce("Container", mN, r), { classNames: n, className: o, style: a, styles: s, unstyled: l, vars: u, fluid: f, ...h } = t, p = lt({
    name: "Container",
    classes: wv,
    props: t,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: u,
    varsResolver: vN
  });
  return /* @__PURE__ */ P.createElement(ke, { ref: e, mod: { fluid: f }, ...p("root"), ...h });
});
Sd.classes = wv;
Sd.displayName = "@mantine/core/Container";
const yN = {
  searchable: !1,
  withCheckIcon: !0,
  allowDeselect: !0,
  checkIconPosition: "left"
}, oc = Ue((r, e) => {
  const t = Ce("Select", yN, r), {
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
    selectFirstOptionOnChange: I,
    onOptionSubmit: S,
    comboboxProps: A,
    readOnly: O,
    disabled: L,
    filter: q,
    limit: D,
    withScrollArea: Q,
    maxDropdownHeight: X,
    size: le,
    searchable: ne,
    rightSection: fe,
    checkIconPosition: oe,
    withCheckIcon: we,
    nothingFoundMessage: Y,
    name: ie,
    form: te,
    searchValue: Pe,
    defaultSearchValue: Qe,
    onSearchChange: ot,
    allowDeselect: ut,
    error: jr,
    rightSectionPointerEvents: sn,
    id: jt,
    clearable: ir,
    clearButtonProps: cn,
    hiddenInputProps: ar,
    ...Dr
  } = t, ln = fs(() => av(E), [E]), Kt = fs(() => ld(ln), [ln]), Cr = So(jt), [Ye, kt] = wo({
    value: _,
    defaultValue: R,
    finalValue: null,
    onChange: C
  }), Pt = typeof Ye == "string" ? Kt[Ye] : void 0, [Pn, gt] = wo({
    value: Pe,
    defaultValue: Qe,
    finalValue: Pt ? Pt.label : "",
    onChange: ot
  }), Nt = wd({
    opened: l,
    defaultOpened: u,
    onDropdownOpen: h,
    onDropdownClose: () => {
      f == null || f(), Nt.resetSelectedOption();
    }
  }), { resolvedClassNames: Jn, resolvedStyles: Ur } = Cm({
    props: t,
    styles: o,
    classNames: n
  });
  ye(() => {
    I && Nt.selectFirstOption();
  }, [I, Ye]), ye(() => {
    _ === null && gt(""), typeof _ == "string" && Pt && gt(Pt.label);
  }, [_, Pt]);
  const bt = ir && !!Ye && !L && !O && /* @__PURE__ */ P.createElement(
    je.ClearButton,
    {
      size: le,
      ...cn,
      onClear: () => {
        kt(null), gt("");
      }
    }
  );
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(
    je,
    {
      store: Nt,
      __staticSelector: "Select",
      classNames: Jn,
      styles: Ur,
      unstyled: a,
      readOnly: O,
      onOptionSubmit: (tt) => {
        S == null || S(tt);
        const Yr = ut && Kt[tt].value === Ye ? null : Kt[tt].value;
        kt(Yr), gt(typeof Yr == "string" ? Kt[tt].label : ""), Nt.closeDropdown();
      },
      size: le,
      ...A
    },
    /* @__PURE__ */ P.createElement(je.Target, { targetType: ne ? "input" : "button" }, /* @__PURE__ */ P.createElement(
      Qn,
      {
        id: Cr,
        ref: e,
        rightSection: fe || bt || /* @__PURE__ */ P.createElement(je.Chevron, { size: le, error: jr, unstyled: a }),
        rightSectionPointerEvents: sn || (bt ? "all" : "none"),
        ...Dr,
        size: le,
        __staticSelector: "Select",
        disabled: L,
        readOnly: O || !ne,
        value: Pn,
        onChange: (tt) => {
          gt(tt.currentTarget.value), Nt.openDropdown(), I && Nt.selectFirstOption();
        },
        onFocus: (tt) => {
          ne && Nt.openDropdown(), p == null || p(tt);
        },
        onBlur: (tt) => {
          var Yr;
          ne && Nt.closeDropdown(), gt(Ye != null && ((Yr = Kt[Ye]) == null ? void 0 : Yr.label) || ""), m == null || m(tt);
        },
        onClick: (tt) => {
          ne ? Nt.openDropdown() : Nt.toggleDropdown(), v == null || v(tt);
        },
        classNames: Jn,
        styles: Ur,
        unstyled: a,
        pointer: !ne,
        error: jr
      }
    )),
    /* @__PURE__ */ P.createElement(
      Cv,
      {
        data: ln,
        hidden: O || L,
        filter: q,
        search: Pn,
        limit: D,
        hiddenWhenEmpty: !ne || !Y,
        withScrollArea: Q,
        maxDropdownHeight: X,
        filterOptions: ne && (Pt == null ? void 0 : Pt.label) !== Pn,
        value: Ye,
        checkIconPosition: oe,
        withCheckIcon: we,
        nothingFoundMessage: Y,
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
      form: te,
      disabled: L,
      ...ar
    }
  ));
});
oc.classes = { ...Qn.classes, ...je.classes };
oc.displayName = "@mantine/core/Select";
var Ev = { root: "m-6d731127" };
const CN = {
  gap: "md",
  align: "stretch",
  justify: "flex-start"
}, wN = (r, { gap: e, align: t, justify: n }) => ({
  root: {
    "--stack-gap": Uu(e),
    "--stack-align": t,
    "--stack-justify": n
  }
}), Td = Ue((r, e) => {
  const t = Ce("Stack", CN, r), {
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
  } = t, C = lt({
    name: "Stack",
    props: t,
    classes: Ev,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: u,
    varsResolver: wN
  });
  return /* @__PURE__ */ P.createElement(ke, { ref: e, ...C("root"), variant: m, ...v });
});
Td.classes = Ev;
Td.displayName = "@mantine/core/Stack";
const EN = {}, mo = Ue((r, e) => {
  const t = Ce("TextInput", EN, r);
  return /* @__PURE__ */ P.createElement(Qn, { component: "input", ref: e, ...t, __staticSelector: "TextInput" });
});
mo.classes = Qn.classes;
mo.displayName = "@mantine/core/TextInput";
const bN = ["h1", "h2", "h3", "h4", "h5", "h6"];
function _N(r, e) {
  const t = e !== void 0 ? e : `h${r}`;
  return bN.includes(t) ? {
    fontSize: `var(--mantine-${t}-font-size)`,
    fontWeight: `var(--mantine-${t}-font-weight)`,
    lineHeight: `var(--mantine-${t}-line-height)`
  } : {
    fontSize: $(t),
    fontWeight: `var(--mantine-h${r}-font-weight)`,
    lineHeight: `var(--mantine-h${r}-line-height)`
  };
}
var bv = { root: "m-8a5d1357" };
const SN = {
  order: 1
}, TN = (r, { order: e, size: t, lineClamp: n }) => {
  const o = _N(e, t);
  return {
    root: {
      "--title-fw": o.fontWeight,
      "--title-lh": o.lineHeight,
      "--title-fz": o.fontSize,
      "--title-line-clamp": typeof n == "number" ? n.toString() : void 0
    }
  };
}, Ls = Ue((r, e) => {
  const t = Ce("Title", SN, r), {
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
  } = t, C = lt({
    name: "Title",
    props: t,
    classes: bv,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: f,
    varsResolver: TN
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
Ls.classes = bv;
Ls.displayName = "@mantine/core/Title";
const IN = {
  /** Put your mantine theme override here */
}, gg = {
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
}, AN = {
  auth: {
    clientId: "0fcd615b-f2b7-4514-9046-7b3e545ba341",
    authority: gg.authorities.signUpSignIn.authority,
    knownAuthorities: [gg.authorityDomain],
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
class RN {
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
        const R = C ? await E[C]().then((I) => (_.ok ? _.data = I : _.error = I, _)).catch((I) => (_.error = I, _)) : _;
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
class kN extends RN {
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
class si extends kN {
  constructor(e) {
    super({ baseUrl: e });
  }
}
const PN = g0, vo = i0;
function _v(r) {
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
function NN(r) {
  if (!r)
    return { type: void 0, predefinedType: void 0 };
  const e = r.length - [...r].reverse().findIndex((o) => o === o.toLowerCase()), [t, n] = [
    r.slice(0, e),
    r.slice(e)
  ].map((o) => o || void 0);
  return { type: t, predefinedType: n };
}
function ON({ callback: r, domains: e, classifications: t, propertySetMap: n, ifcEntity: o }) {
  const { t: a } = Ru();
  function s(h) {
    if (h in e) {
      const p = e[h];
      if (p)
        return _v(p);
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
        var I;
        if ((I = _ == null ? void 0 : _.dictionaryUri) != null && I.includes("https://identifier.buildingsmart.org/uri/buildingsmart/ifc/")) {
          const { type: S, predefinedType: A } = NN(_.code);
          return { ...E, type: S, predefinedType: A };
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
  return /* @__PURE__ */ Re.jsx(ha, { color: "gray", fullWidth: !0, onClick: f, variant: "filled", children: a("Save") });
}
var Ds = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Ds.exports;
(function(r, e) {
  (function() {
    var t, n = "4.17.21", o = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", s = "Expected a function", l = "Invalid `variable` option passed into `_.template`", u = "__lodash_hash_undefined__", f = 500, h = "__lodash_placeholder__", p = 1, m = 2, v = 4, C = 1, E = 2, _ = 1, R = 2, I = 4, S = 8, A = 16, O = 32, L = 64, q = 128, D = 256, Q = 512, X = 30, le = "...", ne = 800, fe = 16, oe = 1, we = 2, Y = 3, ie = 1 / 0, te = 9007199254740991, Pe = 17976931348623157e292, Qe = 0 / 0, ot = 4294967295, ut = ot - 1, jr = ot >>> 1, sn = [
      ["ary", q],
      ["bind", _],
      ["bindKey", R],
      ["curry", S],
      ["curryRight", A],
      ["flip", Q],
      ["partial", O],
      ["partialRight", L],
      ["rearg", D]
    ], jt = "[object Arguments]", ir = "[object Array]", cn = "[object AsyncFunction]", ar = "[object Boolean]", Dr = "[object Date]", ln = "[object DOMException]", Kt = "[object Error]", Cr = "[object Function]", Ye = "[object GeneratorFunction]", kt = "[object Map]", Pt = "[object Number]", Pn = "[object Null]", gt = "[object Object]", Nt = "[object Promise]", Jn = "[object Proxy]", Ur = "[object RegExp]", bt = "[object Set]", tt = "[object String]", Yr = "[object Symbol]", Zv = "[object Undefined]", pi = "[object WeakMap]", ey = "[object WeakSet]", gi = "[object ArrayBuffer]", Ao = "[object DataView]", dc = "[object Float32Array]", fc = "[object Float64Array]", hc = "[object Int8Array]", pc = "[object Int16Array]", gc = "[object Int32Array]", mc = "[object Uint8Array]", vc = "[object Uint8ClampedArray]", yc = "[object Uint16Array]", Cc = "[object Uint32Array]", ty = /\b__p \+= '';/g, ry = /\b(__p \+=) '' \+/g, ny = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Nd = /&(?:amp|lt|gt|quot|#39);/g, Od = /[&<>"']/g, oy = RegExp(Nd.source), iy = RegExp(Od.source), ay = /<%-([\s\S]+?)%>/g, sy = /<%([\s\S]+?)%>/g, Md = /<%=([\s\S]+?)%>/g, cy = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ly = /^\w*$/, uy = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, wc = /[\\^$.*+?()[\]{}|]/g, dy = RegExp(wc.source), Ec = /^\s+/, fy = /\s/, hy = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, py = /\{\n\/\* \[wrapped with (.+)\] \*/, gy = /,? & /, my = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, vy = /[()=,{}\[\]\/\s]/, yy = /\\(\\)?/g, Cy = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, xd = /\w*$/, wy = /^[-+]0x[0-9a-f]+$/i, Ey = /^0b[01]+$/i, by = /^\[object .+?Constructor\]$/, _y = /^0o[0-7]+$/i, Sy = /^(?:0|[1-9]\d*)$/, Ty = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, pa = /($^)/, Iy = /['\n\r\u2028\u2029\\]/g, ga = "\\ud800-\\udfff", Ay = "\\u0300-\\u036f", Ry = "\\ufe20-\\ufe2f", ky = "\\u20d0-\\u20ff", Ld = Ay + Ry + ky, Dd = "\\u2700-\\u27bf", Ud = "a-z\\xdf-\\xf6\\xf8-\\xff", Py = "\\xac\\xb1\\xd7\\xf7", Ny = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Oy = "\\u2000-\\u206f", My = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Fd = "A-Z\\xc0-\\xd6\\xd8-\\xde", Hd = "\\ufe0e\\ufe0f", Bd = Py + Ny + Oy + My, bc = "['’]", xy = "[" + ga + "]", Kd = "[" + Bd + "]", ma = "[" + Ld + "]", qd = "\\d+", Ly = "[" + Dd + "]", $d = "[" + Ud + "]", Gd = "[^" + ga + Bd + qd + Dd + Ud + Fd + "]", _c = "\\ud83c[\\udffb-\\udfff]", Dy = "(?:" + ma + "|" + _c + ")", zd = "[^" + ga + "]", Sc = "(?:\\ud83c[\\udde6-\\uddff]){2}", Tc = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ro = "[" + Fd + "]", Wd = "\\u200d", Vd = "(?:" + $d + "|" + Gd + ")", Uy = "(?:" + Ro + "|" + Gd + ")", jd = "(?:" + bc + "(?:d|ll|m|re|s|t|ve))?", Yd = "(?:" + bc + "(?:D|LL|M|RE|S|T|VE))?", Qd = Dy + "?", Jd = "[" + Hd + "]?", Fy = "(?:" + Wd + "(?:" + [zd, Sc, Tc].join("|") + ")" + Jd + Qd + ")*", Hy = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", By = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Xd = Jd + Qd + Fy, Ky = "(?:" + [Ly, Sc, Tc].join("|") + ")" + Xd, qy = "(?:" + [zd + ma + "?", ma, Sc, Tc, xy].join("|") + ")", $y = RegExp(bc, "g"), Gy = RegExp(ma, "g"), Ic = RegExp(_c + "(?=" + _c + ")|" + qy + Xd, "g"), zy = RegExp([
      Ro + "?" + $d + "+" + jd + "(?=" + [Kd, Ro, "$"].join("|") + ")",
      Uy + "+" + Yd + "(?=" + [Kd, Ro + Vd, "$"].join("|") + ")",
      Ro + "?" + Vd + "+" + jd,
      Ro + "+" + Yd,
      By,
      Hy,
      qd,
      Ky
    ].join("|"), "g"), Wy = RegExp("[" + Wd + ga + Ld + Hd + "]"), Vy = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, jy = [
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
    ], Yy = -1, rt = {};
    rt[dc] = rt[fc] = rt[hc] = rt[pc] = rt[gc] = rt[mc] = rt[vc] = rt[yc] = rt[Cc] = !0, rt[jt] = rt[ir] = rt[gi] = rt[ar] = rt[Ao] = rt[Dr] = rt[Kt] = rt[Cr] = rt[kt] = rt[Pt] = rt[gt] = rt[Ur] = rt[bt] = rt[tt] = rt[pi] = !1;
    var Xe = {};
    Xe[jt] = Xe[ir] = Xe[gi] = Xe[Ao] = Xe[ar] = Xe[Dr] = Xe[dc] = Xe[fc] = Xe[hc] = Xe[pc] = Xe[gc] = Xe[kt] = Xe[Pt] = Xe[gt] = Xe[Ur] = Xe[bt] = Xe[tt] = Xe[Yr] = Xe[mc] = Xe[vc] = Xe[yc] = Xe[Cc] = !0, Xe[Kt] = Xe[Cr] = Xe[pi] = !1;
    var Qy = {
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
    }, Jy = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Xy = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Zy = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, eC = parseFloat, tC = parseInt, Zd = typeof Ni == "object" && Ni && Ni.Object === Object && Ni, rC = typeof self == "object" && self && self.Object === Object && self, _t = Zd || rC || Function("return this")(), Ac = e && !e.nodeType && e, Xn = Ac && !0 && r && !r.nodeType && r, ef = Xn && Xn.exports === Ac, Rc = ef && Zd.process, wr = function() {
      try {
        var M = Xn && Xn.require && Xn.require("util").types;
        return M || Rc && Rc.binding && Rc.binding("util");
      } catch {
      }
    }(), tf = wr && wr.isArrayBuffer, rf = wr && wr.isDate, nf = wr && wr.isMap, of = wr && wr.isRegExp, af = wr && wr.isSet, sf = wr && wr.isTypedArray;
    function sr(M, H, U) {
      switch (U.length) {
        case 0:
          return M.call(H);
        case 1:
          return M.call(H, U[0]);
        case 2:
          return M.call(H, U[0], U[1]);
        case 3:
          return M.call(H, U[0], U[1], U[2]);
      }
      return M.apply(H, U);
    }
    function nC(M, H, U, ae) {
      for (var Te = -1, qe = M == null ? 0 : M.length; ++Te < qe; ) {
        var mt = M[Te];
        H(ae, mt, U(mt), M);
      }
      return ae;
    }
    function Er(M, H) {
      for (var U = -1, ae = M == null ? 0 : M.length; ++U < ae && H(M[U], U, M) !== !1; )
        ;
      return M;
    }
    function oC(M, H) {
      for (var U = M == null ? 0 : M.length; U-- && H(M[U], U, M) !== !1; )
        ;
      return M;
    }
    function cf(M, H) {
      for (var U = -1, ae = M == null ? 0 : M.length; ++U < ae; )
        if (!H(M[U], U, M))
          return !1;
      return !0;
    }
    function Nn(M, H) {
      for (var U = -1, ae = M == null ? 0 : M.length, Te = 0, qe = []; ++U < ae; ) {
        var mt = M[U];
        H(mt, U, M) && (qe[Te++] = mt);
      }
      return qe;
    }
    function va(M, H) {
      var U = M == null ? 0 : M.length;
      return !!U && ko(M, H, 0) > -1;
    }
    function kc(M, H, U) {
      for (var ae = -1, Te = M == null ? 0 : M.length; ++ae < Te; )
        if (U(H, M[ae]))
          return !0;
      return !1;
    }
    function nt(M, H) {
      for (var U = -1, ae = M == null ? 0 : M.length, Te = Array(ae); ++U < ae; )
        Te[U] = H(M[U], U, M);
      return Te;
    }
    function On(M, H) {
      for (var U = -1, ae = H.length, Te = M.length; ++U < ae; )
        M[Te + U] = H[U];
      return M;
    }
    function Pc(M, H, U, ae) {
      var Te = -1, qe = M == null ? 0 : M.length;
      for (ae && qe && (U = M[++Te]); ++Te < qe; )
        U = H(U, M[Te], Te, M);
      return U;
    }
    function iC(M, H, U, ae) {
      var Te = M == null ? 0 : M.length;
      for (ae && Te && (U = M[--Te]); Te--; )
        U = H(U, M[Te], Te, M);
      return U;
    }
    function Nc(M, H) {
      for (var U = -1, ae = M == null ? 0 : M.length; ++U < ae; )
        if (H(M[U], U, M))
          return !0;
      return !1;
    }
    var aC = Oc("length");
    function sC(M) {
      return M.split("");
    }
    function cC(M) {
      return M.match(my) || [];
    }
    function lf(M, H, U) {
      var ae;
      return U(M, function(Te, qe, mt) {
        if (H(Te, qe, mt))
          return ae = qe, !1;
      }), ae;
    }
    function ya(M, H, U, ae) {
      for (var Te = M.length, qe = U + (ae ? 1 : -1); ae ? qe-- : ++qe < Te; )
        if (H(M[qe], qe, M))
          return qe;
      return -1;
    }
    function ko(M, H, U) {
      return H === H ? wC(M, H, U) : ya(M, uf, U);
    }
    function lC(M, H, U, ae) {
      for (var Te = U - 1, qe = M.length; ++Te < qe; )
        if (ae(M[Te], H))
          return Te;
      return -1;
    }
    function uf(M) {
      return M !== M;
    }
    function df(M, H) {
      var U = M == null ? 0 : M.length;
      return U ? xc(M, H) / U : Qe;
    }
    function Oc(M) {
      return function(H) {
        return H == null ? t : H[M];
      };
    }
    function Mc(M) {
      return function(H) {
        return M == null ? t : M[H];
      };
    }
    function ff(M, H, U, ae, Te) {
      return Te(M, function(qe, mt, Je) {
        U = ae ? (ae = !1, qe) : H(U, qe, mt, Je);
      }), U;
    }
    function uC(M, H) {
      var U = M.length;
      for (M.sort(H); U--; )
        M[U] = M[U].value;
      return M;
    }
    function xc(M, H) {
      for (var U, ae = -1, Te = M.length; ++ae < Te; ) {
        var qe = H(M[ae]);
        qe !== t && (U = U === t ? qe : U + qe);
      }
      return U;
    }
    function Lc(M, H) {
      for (var U = -1, ae = Array(M); ++U < M; )
        ae[U] = H(U);
      return ae;
    }
    function dC(M, H) {
      return nt(H, function(U) {
        return [U, M[U]];
      });
    }
    function hf(M) {
      return M && M.slice(0, vf(M) + 1).replace(Ec, "");
    }
    function cr(M) {
      return function(H) {
        return M(H);
      };
    }
    function Dc(M, H) {
      return nt(H, function(U) {
        return M[U];
      });
    }
    function mi(M, H) {
      return M.has(H);
    }
    function pf(M, H) {
      for (var U = -1, ae = M.length; ++U < ae && ko(H, M[U], 0) > -1; )
        ;
      return U;
    }
    function gf(M, H) {
      for (var U = M.length; U-- && ko(H, M[U], 0) > -1; )
        ;
      return U;
    }
    function fC(M, H) {
      for (var U = M.length, ae = 0; U--; )
        M[U] === H && ++ae;
      return ae;
    }
    var hC = Mc(Qy), pC = Mc(Jy);
    function gC(M) {
      return "\\" + Zy[M];
    }
    function mC(M, H) {
      return M == null ? t : M[H];
    }
    function Po(M) {
      return Wy.test(M);
    }
    function vC(M) {
      return Vy.test(M);
    }
    function yC(M) {
      for (var H, U = []; !(H = M.next()).done; )
        U.push(H.value);
      return U;
    }
    function Uc(M) {
      var H = -1, U = Array(M.size);
      return M.forEach(function(ae, Te) {
        U[++H] = [Te, ae];
      }), U;
    }
    function mf(M, H) {
      return function(U) {
        return M(H(U));
      };
    }
    function Mn(M, H) {
      for (var U = -1, ae = M.length, Te = 0, qe = []; ++U < ae; ) {
        var mt = M[U];
        (mt === H || mt === h) && (M[U] = h, qe[Te++] = U);
      }
      return qe;
    }
    function Ca(M) {
      var H = -1, U = Array(M.size);
      return M.forEach(function(ae) {
        U[++H] = ae;
      }), U;
    }
    function CC(M) {
      var H = -1, U = Array(M.size);
      return M.forEach(function(ae) {
        U[++H] = [ae, ae];
      }), U;
    }
    function wC(M, H, U) {
      for (var ae = U - 1, Te = M.length; ++ae < Te; )
        if (M[ae] === H)
          return ae;
      return -1;
    }
    function EC(M, H, U) {
      for (var ae = U + 1; ae--; )
        if (M[ae] === H)
          return ae;
      return ae;
    }
    function No(M) {
      return Po(M) ? _C(M) : aC(M);
    }
    function Fr(M) {
      return Po(M) ? SC(M) : sC(M);
    }
    function vf(M) {
      for (var H = M.length; H-- && fy.test(M.charAt(H)); )
        ;
      return H;
    }
    var bC = Mc(Xy);
    function _C(M) {
      for (var H = Ic.lastIndex = 0; Ic.test(M); )
        ++H;
      return H;
    }
    function SC(M) {
      return M.match(Ic) || [];
    }
    function TC(M) {
      return M.match(zy) || [];
    }
    var IC = function M(H) {
      H = H == null ? _t : Oo.defaults(_t.Object(), H, Oo.pick(_t, jy));
      var U = H.Array, ae = H.Date, Te = H.Error, qe = H.Function, mt = H.Math, Je = H.Object, Fc = H.RegExp, AC = H.String, br = H.TypeError, wa = U.prototype, RC = qe.prototype, Mo = Je.prototype, Ea = H["__core-js_shared__"], ba = RC.toString, Ve = Mo.hasOwnProperty, kC = 0, yf = function() {
        var i = /[^.]+$/.exec(Ea && Ea.keys && Ea.keys.IE_PROTO || "");
        return i ? "Symbol(src)_1." + i : "";
      }(), _a = Mo.toString, PC = ba.call(Je), NC = _t._, OC = Fc(
        "^" + ba.call(Ve).replace(wc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Sa = ef ? H.Buffer : t, xn = H.Symbol, Ta = H.Uint8Array, Cf = Sa ? Sa.allocUnsafe : t, Ia = mf(Je.getPrototypeOf, Je), wf = Je.create, Ef = Mo.propertyIsEnumerable, Aa = wa.splice, bf = xn ? xn.isConcatSpreadable : t, vi = xn ? xn.iterator : t, Zn = xn ? xn.toStringTag : t, Ra = function() {
        try {
          var i = oo(Je, "defineProperty");
          return i({}, "", {}), i;
        } catch {
        }
      }(), MC = H.clearTimeout !== _t.clearTimeout && H.clearTimeout, xC = ae && ae.now !== _t.Date.now && ae.now, LC = H.setTimeout !== _t.setTimeout && H.setTimeout, ka = mt.ceil, Pa = mt.floor, Hc = Je.getOwnPropertySymbols, DC = Sa ? Sa.isBuffer : t, _f = H.isFinite, UC = wa.join, FC = mf(Je.keys, Je), vt = mt.max, Ot = mt.min, HC = ae.now, BC = H.parseInt, Sf = mt.random, KC = wa.reverse, Bc = oo(H, "DataView"), yi = oo(H, "Map"), Kc = oo(H, "Promise"), xo = oo(H, "Set"), Ci = oo(H, "WeakMap"), wi = oo(Je, "create"), Na = Ci && new Ci(), Lo = {}, qC = io(Bc), $C = io(yi), GC = io(Kc), zC = io(xo), WC = io(Ci), Oa = xn ? xn.prototype : t, Ei = Oa ? Oa.valueOf : t, Tf = Oa ? Oa.toString : t;
      function w(i) {
        if (at(i) && !Ae(i) && !(i instanceof De)) {
          if (i instanceof _r)
            return i;
          if (Ve.call(i, "__wrapped__"))
            return Ih(i);
        }
        return new _r(i);
      }
      var Do = function() {
        function i() {
        }
        return function(c) {
          if (!it(c))
            return {};
          if (wf)
            return wf(c);
          i.prototype = c;
          var d = new i();
          return i.prototype = t, d;
        };
      }();
      function Ma() {
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
        escape: ay,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: sy,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Md,
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
      }, w.prototype = Ma.prototype, w.prototype.constructor = w, _r.prototype = Do(Ma.prototype), _r.prototype.constructor = _r;
      function De(i) {
        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ot, this.__views__ = [];
      }
      function VC() {
        var i = new De(this.__wrapped__);
        return i.__actions__ = Yt(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = Yt(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = Yt(this.__views__), i;
      }
      function jC() {
        if (this.__filtered__) {
          var i = new De(this);
          i.__dir__ = -1, i.__filtered__ = !0;
        } else
          i = this.clone(), i.__dir__ *= -1;
        return i;
      }
      function YC() {
        var i = this.__wrapped__.value(), c = this.__dir__, d = Ae(i), g = c < 0, y = d ? i.length : 0, b = sE(0, y, this.__views__), T = b.start, k = b.end, x = k - T, B = g ? k : T - 1, K = this.__iteratees__, W = K.length, Z = 0, de = Ot(x, this.__takeCount__);
        if (!d || !g && y == x && de == x)
          return Yf(i, this.__actions__);
        var me = [];
        e:
          for (; x-- && Z < de; ) {
            B += c;
            for (var Oe = -1, ve = i[B]; ++Oe < W; ) {
              var xe = K[Oe], Fe = xe.iteratee, dr = xe.type, Gt = Fe(ve);
              if (dr == we)
                ve = Gt;
              else if (!Gt) {
                if (dr == oe)
                  continue e;
                break e;
              }
            }
            me[Z++] = ve;
          }
        return me;
      }
      De.prototype = Do(Ma.prototype), De.prototype.constructor = De;
      function eo(i) {
        var c = -1, d = i == null ? 0 : i.length;
        for (this.clear(); ++c < d; ) {
          var g = i[c];
          this.set(g[0], g[1]);
        }
      }
      function QC() {
        this.__data__ = wi ? wi(null) : {}, this.size = 0;
      }
      function JC(i) {
        var c = this.has(i) && delete this.__data__[i];
        return this.size -= c ? 1 : 0, c;
      }
      function XC(i) {
        var c = this.__data__;
        if (wi) {
          var d = c[i];
          return d === u ? t : d;
        }
        return Ve.call(c, i) ? c[i] : t;
      }
      function ZC(i) {
        var c = this.__data__;
        return wi ? c[i] !== t : Ve.call(c, i);
      }
      function ew(i, c) {
        var d = this.__data__;
        return this.size += this.has(i) ? 0 : 1, d[i] = wi && c === t ? u : c, this;
      }
      eo.prototype.clear = QC, eo.prototype.delete = JC, eo.prototype.get = XC, eo.prototype.has = ZC, eo.prototype.set = ew;
      function un(i) {
        var c = -1, d = i == null ? 0 : i.length;
        for (this.clear(); ++c < d; ) {
          var g = i[c];
          this.set(g[0], g[1]);
        }
      }
      function tw() {
        this.__data__ = [], this.size = 0;
      }
      function rw(i) {
        var c = this.__data__, d = xa(c, i);
        if (d < 0)
          return !1;
        var g = c.length - 1;
        return d == g ? c.pop() : Aa.call(c, d, 1), --this.size, !0;
      }
      function nw(i) {
        var c = this.__data__, d = xa(c, i);
        return d < 0 ? t : c[d][1];
      }
      function ow(i) {
        return xa(this.__data__, i) > -1;
      }
      function iw(i, c) {
        var d = this.__data__, g = xa(d, i);
        return g < 0 ? (++this.size, d.push([i, c])) : d[g][1] = c, this;
      }
      un.prototype.clear = tw, un.prototype.delete = rw, un.prototype.get = nw, un.prototype.has = ow, un.prototype.set = iw;
      function dn(i) {
        var c = -1, d = i == null ? 0 : i.length;
        for (this.clear(); ++c < d; ) {
          var g = i[c];
          this.set(g[0], g[1]);
        }
      }
      function aw() {
        this.size = 0, this.__data__ = {
          hash: new eo(),
          map: new (yi || un)(),
          string: new eo()
        };
      }
      function sw(i) {
        var c = Wa(this, i).delete(i);
        return this.size -= c ? 1 : 0, c;
      }
      function cw(i) {
        return Wa(this, i).get(i);
      }
      function lw(i) {
        return Wa(this, i).has(i);
      }
      function uw(i, c) {
        var d = Wa(this, i), g = d.size;
        return d.set(i, c), this.size += d.size == g ? 0 : 1, this;
      }
      dn.prototype.clear = aw, dn.prototype.delete = sw, dn.prototype.get = cw, dn.prototype.has = lw, dn.prototype.set = uw;
      function to(i) {
        var c = -1, d = i == null ? 0 : i.length;
        for (this.__data__ = new dn(); ++c < d; )
          this.add(i[c]);
      }
      function dw(i) {
        return this.__data__.set(i, u), this;
      }
      function fw(i) {
        return this.__data__.has(i);
      }
      to.prototype.add = to.prototype.push = dw, to.prototype.has = fw;
      function Hr(i) {
        var c = this.__data__ = new un(i);
        this.size = c.size;
      }
      function hw() {
        this.__data__ = new un(), this.size = 0;
      }
      function pw(i) {
        var c = this.__data__, d = c.delete(i);
        return this.size = c.size, d;
      }
      function gw(i) {
        return this.__data__.get(i);
      }
      function mw(i) {
        return this.__data__.has(i);
      }
      function vw(i, c) {
        var d = this.__data__;
        if (d instanceof un) {
          var g = d.__data__;
          if (!yi || g.length < o - 1)
            return g.push([i, c]), this.size = ++d.size, this;
          d = this.__data__ = new dn(g);
        }
        return d.set(i, c), this.size = d.size, this;
      }
      Hr.prototype.clear = hw, Hr.prototype.delete = pw, Hr.prototype.get = gw, Hr.prototype.has = mw, Hr.prototype.set = vw;
      function If(i, c) {
        var d = Ae(i), g = !d && ao(i), y = !d && !g && Hn(i), b = !d && !g && !y && Bo(i), T = d || g || y || b, k = T ? Lc(i.length, AC) : [], x = k.length;
        for (var B in i)
          (c || Ve.call(i, B)) && !(T && // Safari 9 has enumerable `arguments.length` in strict mode.
          (B == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          y && (B == "offset" || B == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          b && (B == "buffer" || B == "byteLength" || B == "byteOffset") || // Skip index properties.
          gn(B, x))) && k.push(B);
        return k;
      }
      function Af(i) {
        var c = i.length;
        return c ? i[Xc(0, c - 1)] : t;
      }
      function yw(i, c) {
        return Va(Yt(i), ro(c, 0, i.length));
      }
      function Cw(i) {
        return Va(Yt(i));
      }
      function qc(i, c, d) {
        (d !== t && !Br(i[c], d) || d === t && !(c in i)) && fn(i, c, d);
      }
      function bi(i, c, d) {
        var g = i[c];
        (!(Ve.call(i, c) && Br(g, d)) || d === t && !(c in i)) && fn(i, c, d);
      }
      function xa(i, c) {
        for (var d = i.length; d--; )
          if (Br(i[d][0], c))
            return d;
        return -1;
      }
      function ww(i, c, d, g) {
        return Ln(i, function(y, b, T) {
          c(g, y, d(y), T);
        }), g;
      }
      function Rf(i, c) {
        return i && Jr(c, wt(c), i);
      }
      function Ew(i, c) {
        return i && Jr(c, Jt(c), i);
      }
      function fn(i, c, d) {
        c == "__proto__" && Ra ? Ra(i, c, {
          configurable: !0,
          enumerable: !0,
          value: d,
          writable: !0
        }) : i[c] = d;
      }
      function $c(i, c) {
        for (var d = -1, g = c.length, y = U(g), b = i == null; ++d < g; )
          y[d] = b ? t : _l(i, c[d]);
        return y;
      }
      function ro(i, c, d) {
        return i === i && (d !== t && (i = i <= d ? i : d), c !== t && (i = i >= c ? i : c)), i;
      }
      function Sr(i, c, d, g, y, b) {
        var T, k = c & p, x = c & m, B = c & v;
        if (d && (T = y ? d(i, g, y, b) : d(i)), T !== t)
          return T;
        if (!it(i))
          return i;
        var K = Ae(i);
        if (K) {
          if (T = lE(i), !k)
            return Yt(i, T);
        } else {
          var W = Mt(i), Z = W == Cr || W == Ye;
          if (Hn(i))
            return Xf(i, k);
          if (W == gt || W == jt || Z && !y) {
            if (T = x || Z ? {} : vh(i), !k)
              return x ? Xw(i, Ew(T, i)) : Jw(i, Rf(T, i));
          } else {
            if (!Xe[W])
              return y ? i : {};
            T = uE(i, W, k);
          }
        }
        b || (b = new Hr());
        var de = b.get(i);
        if (de)
          return de;
        b.set(i, T), Wh(i) ? i.forEach(function(ve) {
          T.add(Sr(ve, c, d, ve, i, b));
        }) : Gh(i) && i.forEach(function(ve, xe) {
          T.set(xe, Sr(ve, c, d, xe, i, b));
        });
        var me = B ? x ? ll : cl : x ? Jt : wt, Oe = K ? t : me(i);
        return Er(Oe || i, function(ve, xe) {
          Oe && (xe = ve, ve = i[xe]), bi(T, xe, Sr(ve, c, d, xe, i, b));
        }), T;
      }
      function bw(i) {
        var c = wt(i);
        return function(d) {
          return kf(d, i, c);
        };
      }
      function kf(i, c, d) {
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
      function Pf(i, c, d) {
        if (typeof i != "function")
          throw new br(s);
        return ki(function() {
          i.apply(t, d);
        }, c);
      }
      function _i(i, c, d, g) {
        var y = -1, b = va, T = !0, k = i.length, x = [], B = c.length;
        if (!k)
          return x;
        d && (c = nt(c, cr(d))), g ? (b = kc, T = !1) : c.length >= o && (b = mi, T = !1, c = new to(c));
        e:
          for (; ++y < k; ) {
            var K = i[y], W = d == null ? K : d(K);
            if (K = g || K !== 0 ? K : 0, T && W === W) {
              for (var Z = B; Z--; )
                if (c[Z] === W)
                  continue e;
              x.push(K);
            } else
              b(c, W, g) || x.push(K);
          }
        return x;
      }
      var Ln = nh(Qr), Nf = nh(zc, !0);
      function _w(i, c) {
        var d = !0;
        return Ln(i, function(g, y, b) {
          return d = !!c(g, y, b), d;
        }), d;
      }
      function La(i, c, d) {
        for (var g = -1, y = i.length; ++g < y; ) {
          var b = i[g], T = c(b);
          if (T != null && (k === t ? T === T && !ur(T) : d(T, k)))
            var k = T, x = b;
        }
        return x;
      }
      function Sw(i, c, d, g) {
        var y = i.length;
        for (d = Ne(d), d < 0 && (d = -d > y ? 0 : y + d), g = g === t || g > y ? y : Ne(g), g < 0 && (g += y), g = d > g ? 0 : jh(g); d < g; )
          i[d++] = c;
        return i;
      }
      function Of(i, c) {
        var d = [];
        return Ln(i, function(g, y, b) {
          c(g, y, b) && d.push(g);
        }), d;
      }
      function St(i, c, d, g, y) {
        var b = -1, T = i.length;
        for (d || (d = fE), y || (y = []); ++b < T; ) {
          var k = i[b];
          c > 0 && d(k) ? c > 1 ? St(k, c - 1, d, g, y) : On(y, k) : g || (y[y.length] = k);
        }
        return y;
      }
      var Gc = oh(), Mf = oh(!0);
      function Qr(i, c) {
        return i && Gc(i, c, wt);
      }
      function zc(i, c) {
        return i && Mf(i, c, wt);
      }
      function Da(i, c) {
        return Nn(c, function(d) {
          return mn(i[d]);
        });
      }
      function no(i, c) {
        c = Un(c, i);
        for (var d = 0, g = c.length; i != null && d < g; )
          i = i[Xr(c[d++])];
        return d && d == g ? i : t;
      }
      function xf(i, c, d) {
        var g = c(i);
        return Ae(i) ? g : On(g, d(i));
      }
      function qt(i) {
        return i == null ? i === t ? Zv : Pn : Zn && Zn in Je(i) ? aE(i) : CE(i);
      }
      function Wc(i, c) {
        return i > c;
      }
      function Tw(i, c) {
        return i != null && Ve.call(i, c);
      }
      function Iw(i, c) {
        return i != null && c in Je(i);
      }
      function Aw(i, c, d) {
        return i >= Ot(c, d) && i < vt(c, d);
      }
      function Vc(i, c, d) {
        for (var g = d ? kc : va, y = i[0].length, b = i.length, T = b, k = U(b), x = 1 / 0, B = []; T--; ) {
          var K = i[T];
          T && c && (K = nt(K, cr(c))), x = Ot(K.length, x), k[T] = !d && (c || y >= 120 && K.length >= 120) ? new to(T && K) : t;
        }
        K = i[0];
        var W = -1, Z = k[0];
        e:
          for (; ++W < y && B.length < x; ) {
            var de = K[W], me = c ? c(de) : de;
            if (de = d || de !== 0 ? de : 0, !(Z ? mi(Z, me) : g(B, me, d))) {
              for (T = b; --T; ) {
                var Oe = k[T];
                if (!(Oe ? mi(Oe, me) : g(i[T], me, d)))
                  continue e;
              }
              Z && Z.push(me), B.push(de);
            }
          }
        return B;
      }
      function Rw(i, c, d, g) {
        return Qr(i, function(y, b, T) {
          c(g, d(y), b, T);
        }), g;
      }
      function Si(i, c, d) {
        c = Un(c, i), i = Eh(i, c);
        var g = i == null ? i : i[Xr(Ir(c))];
        return g == null ? t : sr(g, i, d);
      }
      function Lf(i) {
        return at(i) && qt(i) == jt;
      }
      function kw(i) {
        return at(i) && qt(i) == gi;
      }
      function Pw(i) {
        return at(i) && qt(i) == Dr;
      }
      function Ti(i, c, d, g, y) {
        return i === c ? !0 : i == null || c == null || !at(i) && !at(c) ? i !== i && c !== c : Nw(i, c, d, g, Ti, y);
      }
      function Nw(i, c, d, g, y, b) {
        var T = Ae(i), k = Ae(c), x = T ? ir : Mt(i), B = k ? ir : Mt(c);
        x = x == jt ? gt : x, B = B == jt ? gt : B;
        var K = x == gt, W = B == gt, Z = x == B;
        if (Z && Hn(i)) {
          if (!Hn(c))
            return !1;
          T = !0, K = !1;
        }
        if (Z && !K)
          return b || (b = new Hr()), T || Bo(i) ? ph(i, c, d, g, y, b) : oE(i, c, x, d, g, y, b);
        if (!(d & C)) {
          var de = K && Ve.call(i, "__wrapped__"), me = W && Ve.call(c, "__wrapped__");
          if (de || me) {
            var Oe = de ? i.value() : i, ve = me ? c.value() : c;
            return b || (b = new Hr()), y(Oe, ve, d, g, b);
          }
        }
        return Z ? (b || (b = new Hr()), iE(i, c, d, g, y, b)) : !1;
      }
      function Ow(i) {
        return at(i) && Mt(i) == kt;
      }
      function jc(i, c, d, g) {
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
            var W = new Hr();
            if (g)
              var Z = g(B, K, x, i, c, W);
            if (!(Z === t ? Ti(K, B, C | E, g, W) : Z))
              return !1;
          }
        }
        return !0;
      }
      function Df(i) {
        if (!it(i) || pE(i))
          return !1;
        var c = mn(i) ? OC : by;
        return c.test(io(i));
      }
      function Mw(i) {
        return at(i) && qt(i) == Ur;
      }
      function xw(i) {
        return at(i) && Mt(i) == bt;
      }
      function Lw(i) {
        return at(i) && Za(i.length) && !!rt[qt(i)];
      }
      function Uf(i) {
        return typeof i == "function" ? i : i == null ? Xt : typeof i == "object" ? Ae(i) ? Bf(i[0], i[1]) : Hf(i) : ip(i);
      }
      function Yc(i) {
        if (!Ri(i))
          return FC(i);
        var c = [];
        for (var d in Je(i))
          Ve.call(i, d) && d != "constructor" && c.push(d);
        return c;
      }
      function Dw(i) {
        if (!it(i))
          return yE(i);
        var c = Ri(i), d = [];
        for (var g in i)
          g == "constructor" && (c || !Ve.call(i, g)) || d.push(g);
        return d;
      }
      function Qc(i, c) {
        return i < c;
      }
      function Ff(i, c) {
        var d = -1, g = Qt(i) ? U(i.length) : [];
        return Ln(i, function(y, b, T) {
          g[++d] = c(y, b, T);
        }), g;
      }
      function Hf(i) {
        var c = dl(i);
        return c.length == 1 && c[0][2] ? Ch(c[0][0], c[0][1]) : function(d) {
          return d === i || jc(d, i, c);
        };
      }
      function Bf(i, c) {
        return hl(i) && yh(c) ? Ch(Xr(i), c) : function(d) {
          var g = _l(d, i);
          return g === t && g === c ? Sl(d, i) : Ti(c, g, C | E);
        };
      }
      function Ua(i, c, d, g, y) {
        i !== c && Gc(c, function(b, T) {
          if (y || (y = new Hr()), it(b))
            Uw(i, c, T, d, Ua, g, y);
          else {
            var k = g ? g(gl(i, T), b, T + "", i, c, y) : t;
            k === t && (k = b), qc(i, T, k);
          }
        }, Jt);
      }
      function Uw(i, c, d, g, y, b, T) {
        var k = gl(i, d), x = gl(c, d), B = T.get(x);
        if (B) {
          qc(i, d, B);
          return;
        }
        var K = b ? b(k, x, d + "", i, c, T) : t, W = K === t;
        if (W) {
          var Z = Ae(x), de = !Z && Hn(x), me = !Z && !de && Bo(x);
          K = x, Z || de || me ? Ae(k) ? K = k : dt(k) ? K = Yt(k) : de ? (W = !1, K = Xf(x, !0)) : me ? (W = !1, K = Zf(x, !0)) : K = [] : Pi(x) || ao(x) ? (K = k, ao(k) ? K = Yh(k) : (!it(k) || mn(k)) && (K = vh(x))) : W = !1;
        }
        W && (T.set(x, K), y(K, x, g, b, T), T.delete(x)), qc(i, d, K);
      }
      function Kf(i, c) {
        var d = i.length;
        if (d)
          return c += c < 0 ? d : 0, gn(c, d) ? i[c] : t;
      }
      function qf(i, c, d) {
        c.length ? c = nt(c, function(b) {
          return Ae(b) ? function(T) {
            return no(T, b.length === 1 ? b[0] : b);
          } : b;
        }) : c = [Xt];
        var g = -1;
        c = nt(c, cr(ge()));
        var y = Ff(i, function(b, T, k) {
          var x = nt(c, function(B) {
            return B(b);
          });
          return { criteria: x, index: ++g, value: b };
        });
        return uC(y, function(b, T) {
          return Qw(b, T, d);
        });
      }
      function Fw(i, c) {
        return $f(i, c, function(d, g) {
          return Sl(i, g);
        });
      }
      function $f(i, c, d) {
        for (var g = -1, y = c.length, b = {}; ++g < y; ) {
          var T = c[g], k = no(i, T);
          d(k, T) && Ii(b, Un(T, i), k);
        }
        return b;
      }
      function Hw(i) {
        return function(c) {
          return no(c, i);
        };
      }
      function Jc(i, c, d, g) {
        var y = g ? lC : ko, b = -1, T = c.length, k = i;
        for (i === c && (c = Yt(c)), d && (k = nt(i, cr(d))); ++b < T; )
          for (var x = 0, B = c[b], K = d ? d(B) : B; (x = y(k, K, x, g)) > -1; )
            k !== i && Aa.call(k, x, 1), Aa.call(i, x, 1);
        return i;
      }
      function Gf(i, c) {
        for (var d = i ? c.length : 0, g = d - 1; d--; ) {
          var y = c[d];
          if (d == g || y !== b) {
            var b = y;
            gn(y) ? Aa.call(i, y, 1) : tl(i, y);
          }
        }
        return i;
      }
      function Xc(i, c) {
        return i + Pa(Sf() * (c - i + 1));
      }
      function Bw(i, c, d, g) {
        for (var y = -1, b = vt(ka((c - i) / (d || 1)), 0), T = U(b); b--; )
          T[g ? b : ++y] = i, i += d;
        return T;
      }
      function Zc(i, c) {
        var d = "";
        if (!i || c < 1 || c > te)
          return d;
        do
          c % 2 && (d += i), c = Pa(c / 2), c && (i += i);
        while (c);
        return d;
      }
      function Me(i, c) {
        return ml(wh(i, c, Xt), i + "");
      }
      function Kw(i) {
        return Af(Ko(i));
      }
      function qw(i, c) {
        var d = Ko(i);
        return Va(d, ro(c, 0, d.length));
      }
      function Ii(i, c, d, g) {
        if (!it(i))
          return i;
        c = Un(c, i);
        for (var y = -1, b = c.length, T = b - 1, k = i; k != null && ++y < b; ) {
          var x = Xr(c[y]), B = d;
          if (x === "__proto__" || x === "constructor" || x === "prototype")
            return i;
          if (y != T) {
            var K = k[x];
            B = g ? g(K, x, k) : t, B === t && (B = it(K) ? K : gn(c[y + 1]) ? [] : {});
          }
          bi(k, x, B), k = k[x];
        }
        return i;
      }
      var zf = Na ? function(i, c) {
        return Na.set(i, c), i;
      } : Xt, $w = Ra ? function(i, c) {
        return Ra(i, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Il(c),
          writable: !0
        });
      } : Xt;
      function Gw(i) {
        return Va(Ko(i));
      }
      function Tr(i, c, d) {
        var g = -1, y = i.length;
        c < 0 && (c = -c > y ? 0 : y + c), d = d > y ? y : d, d < 0 && (d += y), y = c > d ? 0 : d - c >>> 0, c >>>= 0;
        for (var b = U(y); ++g < y; )
          b[g] = i[g + c];
        return b;
      }
      function zw(i, c) {
        var d;
        return Ln(i, function(g, y, b) {
          return d = c(g, y, b), !d;
        }), !!d;
      }
      function Fa(i, c, d) {
        var g = 0, y = i == null ? g : i.length;
        if (typeof c == "number" && c === c && y <= jr) {
          for (; g < y; ) {
            var b = g + y >>> 1, T = i[b];
            T !== null && !ur(T) && (d ? T <= c : T < c) ? g = b + 1 : y = b;
          }
          return y;
        }
        return el(i, c, Xt, d);
      }
      function el(i, c, d, g) {
        var y = 0, b = i == null ? 0 : i.length;
        if (b === 0)
          return 0;
        c = d(c);
        for (var T = c !== c, k = c === null, x = ur(c), B = c === t; y < b; ) {
          var K = Pa((y + b) / 2), W = d(i[K]), Z = W !== t, de = W === null, me = W === W, Oe = ur(W);
          if (T)
            var ve = g || me;
          else
            B ? ve = me && (g || Z) : k ? ve = me && Z && (g || !de) : x ? ve = me && Z && !de && (g || !Oe) : de || Oe ? ve = !1 : ve = g ? W <= c : W < c;
          ve ? y = K + 1 : b = K;
        }
        return Ot(b, ut);
      }
      function Wf(i, c) {
        for (var d = -1, g = i.length, y = 0, b = []; ++d < g; ) {
          var T = i[d], k = c ? c(T) : T;
          if (!d || !Br(k, x)) {
            var x = k;
            b[y++] = T === 0 ? 0 : T;
          }
        }
        return b;
      }
      function Vf(i) {
        return typeof i == "number" ? i : ur(i) ? Qe : +i;
      }
      function lr(i) {
        if (typeof i == "string")
          return i;
        if (Ae(i))
          return nt(i, lr) + "";
        if (ur(i))
          return Tf ? Tf.call(i) : "";
        var c = i + "";
        return c == "0" && 1 / i == -ie ? "-0" : c;
      }
      function Dn(i, c, d) {
        var g = -1, y = va, b = i.length, T = !0, k = [], x = k;
        if (d)
          T = !1, y = kc;
        else if (b >= o) {
          var B = c ? null : rE(i);
          if (B)
            return Ca(B);
          T = !1, y = mi, x = new to();
        } else
          x = c ? [] : k;
        e:
          for (; ++g < b; ) {
            var K = i[g], W = c ? c(K) : K;
            if (K = d || K !== 0 ? K : 0, T && W === W) {
              for (var Z = x.length; Z--; )
                if (x[Z] === W)
                  continue e;
              c && x.push(W), k.push(K);
            } else
              y(x, W, d) || (x !== k && x.push(W), k.push(K));
          }
        return k;
      }
      function tl(i, c) {
        return c = Un(c, i), i = Eh(i, c), i == null || delete i[Xr(Ir(c))];
      }
      function jf(i, c, d, g) {
        return Ii(i, c, d(no(i, c)), g);
      }
      function Ha(i, c, d, g) {
        for (var y = i.length, b = g ? y : -1; (g ? b-- : ++b < y) && c(i[b], b, i); )
          ;
        return d ? Tr(i, g ? 0 : b, g ? b + 1 : y) : Tr(i, g ? b + 1 : 0, g ? y : b);
      }
      function Yf(i, c) {
        var d = i;
        return d instanceof De && (d = d.value()), Pc(c, function(g, y) {
          return y.func.apply(y.thisArg, On([g], y.args));
        }, d);
      }
      function rl(i, c, d) {
        var g = i.length;
        if (g < 2)
          return g ? Dn(i[0]) : [];
        for (var y = -1, b = U(g); ++y < g; )
          for (var T = i[y], k = -1; ++k < g; )
            k != y && (b[y] = _i(b[y] || T, i[k], c, d));
        return Dn(St(b, 1), c, d);
      }
      function Qf(i, c, d) {
        for (var g = -1, y = i.length, b = c.length, T = {}; ++g < y; ) {
          var k = g < b ? c[g] : t;
          d(T, i[g], k);
        }
        return T;
      }
      function nl(i) {
        return dt(i) ? i : [];
      }
      function ol(i) {
        return typeof i == "function" ? i : Xt;
      }
      function Un(i, c) {
        return Ae(i) ? i : hl(i, c) ? [i] : Th(Ge(i));
      }
      var Ww = Me;
      function Fn(i, c, d) {
        var g = i.length;
        return d = d === t ? g : d, !c && d >= g ? i : Tr(i, c, d);
      }
      var Jf = MC || function(i) {
        return _t.clearTimeout(i);
      };
      function Xf(i, c) {
        if (c)
          return i.slice();
        var d = i.length, g = Cf ? Cf(d) : new i.constructor(d);
        return i.copy(g), g;
      }
      function il(i) {
        var c = new i.constructor(i.byteLength);
        return new Ta(c).set(new Ta(i)), c;
      }
      function Vw(i, c) {
        var d = c ? il(i.buffer) : i.buffer;
        return new i.constructor(d, i.byteOffset, i.byteLength);
      }
      function jw(i) {
        var c = new i.constructor(i.source, xd.exec(i));
        return c.lastIndex = i.lastIndex, c;
      }
      function Yw(i) {
        return Ei ? Je(Ei.call(i)) : {};
      }
      function Zf(i, c) {
        var d = c ? il(i.buffer) : i.buffer;
        return new i.constructor(d, i.byteOffset, i.length);
      }
      function eh(i, c) {
        if (i !== c) {
          var d = i !== t, g = i === null, y = i === i, b = ur(i), T = c !== t, k = c === null, x = c === c, B = ur(c);
          if (!k && !B && !b && i > c || b && T && x && !k && !B || g && T && x || !d && x || !y)
            return 1;
          if (!g && !b && !B && i < c || B && d && y && !g && !b || k && d && y || !T && y || !x)
            return -1;
        }
        return 0;
      }
      function Qw(i, c, d) {
        for (var g = -1, y = i.criteria, b = c.criteria, T = y.length, k = d.length; ++g < T; ) {
          var x = eh(y[g], b[g]);
          if (x) {
            if (g >= k)
              return x;
            var B = d[g];
            return x * (B == "desc" ? -1 : 1);
          }
        }
        return i.index - c.index;
      }
      function th(i, c, d, g) {
        for (var y = -1, b = i.length, T = d.length, k = -1, x = c.length, B = vt(b - T, 0), K = U(x + B), W = !g; ++k < x; )
          K[k] = c[k];
        for (; ++y < T; )
          (W || y < b) && (K[d[y]] = i[y]);
        for (; B--; )
          K[k++] = i[y++];
        return K;
      }
      function rh(i, c, d, g) {
        for (var y = -1, b = i.length, T = -1, k = d.length, x = -1, B = c.length, K = vt(b - k, 0), W = U(K + B), Z = !g; ++y < K; )
          W[y] = i[y];
        for (var de = y; ++x < B; )
          W[de + x] = c[x];
        for (; ++T < k; )
          (Z || y < b) && (W[de + d[T]] = i[y++]);
        return W;
      }
      function Yt(i, c) {
        var d = -1, g = i.length;
        for (c || (c = U(g)); ++d < g; )
          c[d] = i[d];
        return c;
      }
      function Jr(i, c, d, g) {
        var y = !d;
        d || (d = {});
        for (var b = -1, T = c.length; ++b < T; ) {
          var k = c[b], x = g ? g(d[k], i[k], k, d, i) : t;
          x === t && (x = i[k]), y ? fn(d, k, x) : bi(d, k, x);
        }
        return d;
      }
      function Jw(i, c) {
        return Jr(i, fl(i), c);
      }
      function Xw(i, c) {
        return Jr(i, gh(i), c);
      }
      function Ba(i, c) {
        return function(d, g) {
          var y = Ae(d) ? nC : ww, b = c ? c() : {};
          return y(d, i, ge(g, 2), b);
        };
      }
      function Uo(i) {
        return Me(function(c, d) {
          var g = -1, y = d.length, b = y > 1 ? d[y - 1] : t, T = y > 2 ? d[2] : t;
          for (b = i.length > 3 && typeof b == "function" ? (y--, b) : t, T && $t(d[0], d[1], T) && (b = y < 3 ? t : b, y = 1), c = Je(c); ++g < y; ) {
            var k = d[g];
            k && i(c, k, g, b);
          }
          return c;
        });
      }
      function nh(i, c) {
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
      function oh(i) {
        return function(c, d, g) {
          for (var y = -1, b = Je(c), T = g(c), k = T.length; k--; ) {
            var x = T[i ? k : ++y];
            if (d(b[x], x, b) === !1)
              break;
          }
          return c;
        };
      }
      function Zw(i, c, d) {
        var g = c & _, y = Ai(i);
        function b() {
          var T = this && this !== _t && this instanceof b ? y : i;
          return T.apply(g ? d : this, arguments);
        }
        return b;
      }
      function ih(i) {
        return function(c) {
          c = Ge(c);
          var d = Po(c) ? Fr(c) : t, g = d ? d[0] : c.charAt(0), y = d ? Fn(d, 1).join("") : c.slice(1);
          return g[i]() + y;
        };
      }
      function Fo(i) {
        return function(c) {
          return Pc(np(rp(c).replace($y, "")), i, "");
        };
      }
      function Ai(i) {
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
          var d = Do(i.prototype), g = i.apply(d, c);
          return it(g) ? g : d;
        };
      }
      function eE(i, c, d) {
        var g = Ai(i);
        function y() {
          for (var b = arguments.length, T = U(b), k = b, x = Ho(y); k--; )
            T[k] = arguments[k];
          var B = b < 3 && T[0] !== x && T[b - 1] !== x ? [] : Mn(T, x);
          if (b -= B.length, b < d)
            return uh(
              i,
              c,
              Ka,
              y.placeholder,
              t,
              T,
              B,
              t,
              t,
              d - b
            );
          var K = this && this !== _t && this instanceof y ? g : i;
          return sr(K, this, T);
        }
        return y;
      }
      function ah(i) {
        return function(c, d, g) {
          var y = Je(c);
          if (!Qt(c)) {
            var b = ge(d, 3);
            c = wt(c), d = function(k) {
              return b(y[k], k, y);
            };
          }
          var T = i(c, d, g);
          return T > -1 ? y[b ? c[T] : T] : t;
        };
      }
      function sh(i) {
        return pn(function(c) {
          var d = c.length, g = d, y = _r.prototype.thru;
          for (i && c.reverse(); g--; ) {
            var b = c[g];
            if (typeof b != "function")
              throw new br(s);
            if (y && !T && za(b) == "wrapper")
              var T = new _r([], !0);
          }
          for (g = T ? g : d; ++g < d; ) {
            b = c[g];
            var k = za(b), x = k == "wrapper" ? ul(b) : t;
            x && pl(x[0]) && x[1] == (q | S | O | D) && !x[4].length && x[9] == 1 ? T = T[za(x[0])].apply(T, x[3]) : T = b.length == 1 && pl(b) ? T[k]() : T.thru(b);
          }
          return function() {
            var B = arguments, K = B[0];
            if (T && B.length == 1 && Ae(K))
              return T.plant(K).value();
            for (var W = 0, Z = d ? c[W].apply(this, B) : K; ++W < d; )
              Z = c[W].call(this, Z);
            return Z;
          };
        });
      }
      function Ka(i, c, d, g, y, b, T, k, x, B) {
        var K = c & q, W = c & _, Z = c & R, de = c & (S | A), me = c & Q, Oe = Z ? t : Ai(i);
        function ve() {
          for (var xe = arguments.length, Fe = U(xe), dr = xe; dr--; )
            Fe[dr] = arguments[dr];
          if (de)
            var Gt = Ho(ve), fr = fC(Fe, Gt);
          if (g && (Fe = th(Fe, g, y, de)), b && (Fe = rh(Fe, b, T, de)), xe -= fr, de && xe < B) {
            var ft = Mn(Fe, Gt);
            return uh(
              i,
              c,
              Ka,
              ve.placeholder,
              d,
              Fe,
              ft,
              k,
              x,
              B - xe
            );
          }
          var Kr = W ? d : this, yn = Z ? Kr[i] : i;
          return xe = Fe.length, k ? Fe = wE(Fe, k) : me && xe > 1 && Fe.reverse(), K && x < xe && (Fe.length = x), this && this !== _t && this instanceof ve && (yn = Oe || Ai(yn)), yn.apply(Kr, Fe);
        }
        return ve;
      }
      function ch(i, c) {
        return function(d, g) {
          return Rw(d, i, c(g), {});
        };
      }
      function qa(i, c) {
        return function(d, g) {
          var y;
          if (d === t && g === t)
            return c;
          if (d !== t && (y = d), g !== t) {
            if (y === t)
              return g;
            typeof d == "string" || typeof g == "string" ? (d = lr(d), g = lr(g)) : (d = Vf(d), g = Vf(g)), y = i(d, g);
          }
          return y;
        };
      }
      function al(i) {
        return pn(function(c) {
          return c = nt(c, cr(ge())), Me(function(d) {
            var g = this;
            return i(c, function(y) {
              return sr(y, g, d);
            });
          });
        });
      }
      function $a(i, c) {
        c = c === t ? " " : lr(c);
        var d = c.length;
        if (d < 2)
          return d ? Zc(c, i) : c;
        var g = Zc(c, ka(i / No(c)));
        return Po(c) ? Fn(Fr(g), 0, i).join("") : g.slice(0, i);
      }
      function tE(i, c, d, g) {
        var y = c & _, b = Ai(i);
        function T() {
          for (var k = -1, x = arguments.length, B = -1, K = g.length, W = U(K + x), Z = this && this !== _t && this instanceof T ? b : i; ++B < K; )
            W[B] = g[B];
          for (; x--; )
            W[B++] = arguments[++k];
          return sr(Z, y ? d : this, W);
        }
        return T;
      }
      function lh(i) {
        return function(c, d, g) {
          return g && typeof g != "number" && $t(c, d, g) && (d = g = t), c = vn(c), d === t ? (d = c, c = 0) : d = vn(d), g = g === t ? c < d ? 1 : -1 : vn(g), Bw(c, d, g, i);
        };
      }
      function Ga(i) {
        return function(c, d) {
          return typeof c == "string" && typeof d == "string" || (c = Ar(c), d = Ar(d)), i(c, d);
        };
      }
      function uh(i, c, d, g, y, b, T, k, x, B) {
        var K = c & S, W = K ? T : t, Z = K ? t : T, de = K ? b : t, me = K ? t : b;
        c |= K ? O : L, c &= ~(K ? L : O), c & I || (c &= ~(_ | R));
        var Oe = [
          i,
          c,
          y,
          de,
          W,
          me,
          Z,
          k,
          x,
          B
        ], ve = d.apply(t, Oe);
        return pl(i) && bh(ve, Oe), ve.placeholder = g, _h(ve, i, c);
      }
      function sl(i) {
        var c = mt[i];
        return function(d, g) {
          if (d = Ar(d), g = g == null ? 0 : Ot(Ne(g), 292), g && _f(d)) {
            var y = (Ge(d) + "e").split("e"), b = c(y[0] + "e" + (+y[1] + g));
            return y = (Ge(b) + "e").split("e"), +(y[0] + "e" + (+y[1] - g));
          }
          return c(d);
        };
      }
      var rE = xo && 1 / Ca(new xo([, -0]))[1] == ie ? function(i) {
        return new xo(i);
      } : kl;
      function dh(i) {
        return function(c) {
          var d = Mt(c);
          return d == kt ? Uc(c) : d == bt ? CC(c) : dC(c, i(c));
        };
      }
      function hn(i, c, d, g, y, b, T, k) {
        var x = c & R;
        if (!x && typeof i != "function")
          throw new br(s);
        var B = g ? g.length : 0;
        if (B || (c &= ~(O | L), g = y = t), T = T === t ? T : vt(Ne(T), 0), k = k === t ? k : Ne(k), B -= y ? y.length : 0, c & L) {
          var K = g, W = y;
          g = y = t;
        }
        var Z = x ? t : ul(i), de = [
          i,
          c,
          d,
          g,
          y,
          K,
          W,
          b,
          T,
          k
        ];
        if (Z && vE(de, Z), i = de[0], c = de[1], d = de[2], g = de[3], y = de[4], k = de[9] = de[9] === t ? x ? 0 : i.length : vt(de[9] - B, 0), !k && c & (S | A) && (c &= ~(S | A)), !c || c == _)
          var me = Zw(i, c, d);
        else
          c == S || c == A ? me = eE(i, c, k) : (c == O || c == (_ | O)) && !y.length ? me = tE(i, c, d, g) : me = Ka.apply(t, de);
        var Oe = Z ? zf : bh;
        return _h(Oe(me, de), i, c);
      }
      function fh(i, c, d, g) {
        return i === t || Br(i, Mo[d]) && !Ve.call(g, d) ? c : i;
      }
      function hh(i, c, d, g, y, b) {
        return it(i) && it(c) && (b.set(c, i), Ua(i, c, t, hh, b), b.delete(c)), i;
      }
      function nE(i) {
        return Pi(i) ? t : i;
      }
      function ph(i, c, d, g, y, b) {
        var T = d & C, k = i.length, x = c.length;
        if (k != x && !(T && x > k))
          return !1;
        var B = b.get(i), K = b.get(c);
        if (B && K)
          return B == c && K == i;
        var W = -1, Z = !0, de = d & E ? new to() : t;
        for (b.set(i, c), b.set(c, i); ++W < k; ) {
          var me = i[W], Oe = c[W];
          if (g)
            var ve = T ? g(Oe, me, W, c, i, b) : g(me, Oe, W, i, c, b);
          if (ve !== t) {
            if (ve)
              continue;
            Z = !1;
            break;
          }
          if (de) {
            if (!Nc(c, function(xe, Fe) {
              if (!mi(de, Fe) && (me === xe || y(me, xe, d, g, b)))
                return de.push(Fe);
            })) {
              Z = !1;
              break;
            }
          } else if (!(me === Oe || y(me, Oe, d, g, b))) {
            Z = !1;
            break;
          }
        }
        return b.delete(i), b.delete(c), Z;
      }
      function oE(i, c, d, g, y, b, T) {
        switch (d) {
          case Ao:
            if (i.byteLength != c.byteLength || i.byteOffset != c.byteOffset)
              return !1;
            i = i.buffer, c = c.buffer;
          case gi:
            return !(i.byteLength != c.byteLength || !b(new Ta(i), new Ta(c)));
          case ar:
          case Dr:
          case Pt:
            return Br(+i, +c);
          case Kt:
            return i.name == c.name && i.message == c.message;
          case Ur:
          case tt:
            return i == c + "";
          case kt:
            var k = Uc;
          case bt:
            var x = g & C;
            if (k || (k = Ca), i.size != c.size && !x)
              return !1;
            var B = T.get(i);
            if (B)
              return B == c;
            g |= E, T.set(i, c);
            var K = ph(k(i), k(c), g, y, b, T);
            return T.delete(i), K;
          case Yr:
            if (Ei)
              return Ei.call(i) == Ei.call(c);
        }
        return !1;
      }
      function iE(i, c, d, g, y, b) {
        var T = d & C, k = cl(i), x = k.length, B = cl(c), K = B.length;
        if (x != K && !T)
          return !1;
        for (var W = x; W--; ) {
          var Z = k[W];
          if (!(T ? Z in c : Ve.call(c, Z)))
            return !1;
        }
        var de = b.get(i), me = b.get(c);
        if (de && me)
          return de == c && me == i;
        var Oe = !0;
        b.set(i, c), b.set(c, i);
        for (var ve = T; ++W < x; ) {
          Z = k[W];
          var xe = i[Z], Fe = c[Z];
          if (g)
            var dr = T ? g(Fe, xe, Z, c, i, b) : g(xe, Fe, Z, i, c, b);
          if (!(dr === t ? xe === Fe || y(xe, Fe, d, g, b) : dr)) {
            Oe = !1;
            break;
          }
          ve || (ve = Z == "constructor");
        }
        if (Oe && !ve) {
          var Gt = i.constructor, fr = c.constructor;
          Gt != fr && "constructor" in i && "constructor" in c && !(typeof Gt == "function" && Gt instanceof Gt && typeof fr == "function" && fr instanceof fr) && (Oe = !1);
        }
        return b.delete(i), b.delete(c), Oe;
      }
      function pn(i) {
        return ml(wh(i, t, kh), i + "");
      }
      function cl(i) {
        return xf(i, wt, fl);
      }
      function ll(i) {
        return xf(i, Jt, gh);
      }
      var ul = Na ? function(i) {
        return Na.get(i);
      } : kl;
      function za(i) {
        for (var c = i.name + "", d = Lo[c], g = Ve.call(Lo, c) ? d.length : 0; g--; ) {
          var y = d[g], b = y.func;
          if (b == null || b == i)
            return y.name;
        }
        return c;
      }
      function Ho(i) {
        var c = Ve.call(w, "placeholder") ? w : i;
        return c.placeholder;
      }
      function ge() {
        var i = w.iteratee || Al;
        return i = i === Al ? Uf : i, arguments.length ? i(arguments[0], arguments[1]) : i;
      }
      function Wa(i, c) {
        var d = i.__data__;
        return hE(c) ? d[typeof c == "string" ? "string" : "hash"] : d.map;
      }
      function dl(i) {
        for (var c = wt(i), d = c.length; d--; ) {
          var g = c[d], y = i[g];
          c[d] = [g, y, yh(y)];
        }
        return c;
      }
      function oo(i, c) {
        var d = mC(i, c);
        return Df(d) ? d : t;
      }
      function aE(i) {
        var c = Ve.call(i, Zn), d = i[Zn];
        try {
          i[Zn] = t;
          var g = !0;
        } catch {
        }
        var y = _a.call(i);
        return g && (c ? i[Zn] = d : delete i[Zn]), y;
      }
      var fl = Hc ? function(i) {
        return i == null ? [] : (i = Je(i), Nn(Hc(i), function(c) {
          return Ef.call(i, c);
        }));
      } : Pl, gh = Hc ? function(i) {
        for (var c = []; i; )
          On(c, fl(i)), i = Ia(i);
        return c;
      } : Pl, Mt = qt;
      (Bc && Mt(new Bc(new ArrayBuffer(1))) != Ao || yi && Mt(new yi()) != kt || Kc && Mt(Kc.resolve()) != Nt || xo && Mt(new xo()) != bt || Ci && Mt(new Ci()) != pi) && (Mt = function(i) {
        var c = qt(i), d = c == gt ? i.constructor : t, g = d ? io(d) : "";
        if (g)
          switch (g) {
            case qC:
              return Ao;
            case $C:
              return kt;
            case GC:
              return Nt;
            case zC:
              return bt;
            case WC:
              return pi;
          }
        return c;
      });
      function sE(i, c, d) {
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
              c = Ot(c, i + T);
              break;
            case "takeRight":
              i = vt(i, c - T);
              break;
          }
        }
        return { start: i, end: c };
      }
      function cE(i) {
        var c = i.match(py);
        return c ? c[1].split(gy) : [];
      }
      function mh(i, c, d) {
        c = Un(c, i);
        for (var g = -1, y = c.length, b = !1; ++g < y; ) {
          var T = Xr(c[g]);
          if (!(b = i != null && d(i, T)))
            break;
          i = i[T];
        }
        return b || ++g != y ? b : (y = i == null ? 0 : i.length, !!y && Za(y) && gn(T, y) && (Ae(i) || ao(i)));
      }
      function lE(i) {
        var c = i.length, d = new i.constructor(c);
        return c && typeof i[0] == "string" && Ve.call(i, "index") && (d.index = i.index, d.input = i.input), d;
      }
      function vh(i) {
        return typeof i.constructor == "function" && !Ri(i) ? Do(Ia(i)) : {};
      }
      function uE(i, c, d) {
        var g = i.constructor;
        switch (c) {
          case gi:
            return il(i);
          case ar:
          case Dr:
            return new g(+i);
          case Ao:
            return Vw(i, d);
          case dc:
          case fc:
          case hc:
          case pc:
          case gc:
          case mc:
          case vc:
          case yc:
          case Cc:
            return Zf(i, d);
          case kt:
            return new g();
          case Pt:
          case tt:
            return new g(i);
          case Ur:
            return jw(i);
          case bt:
            return new g();
          case Yr:
            return Yw(i);
        }
      }
      function dE(i, c) {
        var d = c.length;
        if (!d)
          return i;
        var g = d - 1;
        return c[g] = (d > 1 ? "& " : "") + c[g], c = c.join(d > 2 ? ", " : " "), i.replace(hy, `{
/* [wrapped with ` + c + `] */
`);
      }
      function fE(i) {
        return Ae(i) || ao(i) || !!(bf && i && i[bf]);
      }
      function gn(i, c) {
        var d = typeof i;
        return c = c ?? te, !!c && (d == "number" || d != "symbol" && Sy.test(i)) && i > -1 && i % 1 == 0 && i < c;
      }
      function $t(i, c, d) {
        if (!it(d))
          return !1;
        var g = typeof c;
        return (g == "number" ? Qt(d) && gn(c, d.length) : g == "string" && c in d) ? Br(d[c], i) : !1;
      }
      function hl(i, c) {
        if (Ae(i))
          return !1;
        var d = typeof i;
        return d == "number" || d == "symbol" || d == "boolean" || i == null || ur(i) ? !0 : ly.test(i) || !cy.test(i) || c != null && i in Je(c);
      }
      function hE(i) {
        var c = typeof i;
        return c == "string" || c == "number" || c == "symbol" || c == "boolean" ? i !== "__proto__" : i === null;
      }
      function pl(i) {
        var c = za(i), d = w[c];
        if (typeof d != "function" || !(c in De.prototype))
          return !1;
        if (i === d)
          return !0;
        var g = ul(d);
        return !!g && i === g[0];
      }
      function pE(i) {
        return !!yf && yf in i;
      }
      var gE = Ea ? mn : Nl;
      function Ri(i) {
        var c = i && i.constructor, d = typeof c == "function" && c.prototype || Mo;
        return i === d;
      }
      function yh(i) {
        return i === i && !it(i);
      }
      function Ch(i, c) {
        return function(d) {
          return d == null ? !1 : d[i] === c && (c !== t || i in Je(d));
        };
      }
      function mE(i) {
        var c = Ja(i, function(g) {
          return d.size === f && d.clear(), g;
        }), d = c.cache;
        return c;
      }
      function vE(i, c) {
        var d = i[1], g = c[1], y = d | g, b = y < (_ | R | q), T = g == q && d == S || g == q && d == D && i[7].length <= c[8] || g == (q | D) && c[7].length <= c[8] && d == S;
        if (!(b || T))
          return i;
        g & _ && (i[2] = c[2], y |= d & _ ? 0 : I);
        var k = c[3];
        if (k) {
          var x = i[3];
          i[3] = x ? th(x, k, c[4]) : k, i[4] = x ? Mn(i[3], h) : c[4];
        }
        return k = c[5], k && (x = i[5], i[5] = x ? rh(x, k, c[6]) : k, i[6] = x ? Mn(i[5], h) : c[6]), k = c[7], k && (i[7] = k), g & q && (i[8] = i[8] == null ? c[8] : Ot(i[8], c[8])), i[9] == null && (i[9] = c[9]), i[0] = c[0], i[1] = y, i;
      }
      function yE(i) {
        var c = [];
        if (i != null)
          for (var d in Je(i))
            c.push(d);
        return c;
      }
      function CE(i) {
        return _a.call(i);
      }
      function wh(i, c, d) {
        return c = vt(c === t ? i.length - 1 : c, 0), function() {
          for (var g = arguments, y = -1, b = vt(g.length - c, 0), T = U(b); ++y < b; )
            T[y] = g[c + y];
          y = -1;
          for (var k = U(c + 1); ++y < c; )
            k[y] = g[y];
          return k[c] = d(T), sr(i, this, k);
        };
      }
      function Eh(i, c) {
        return c.length < 2 ? i : no(i, Tr(c, 0, -1));
      }
      function wE(i, c) {
        for (var d = i.length, g = Ot(c.length, d), y = Yt(i); g--; ) {
          var b = c[g];
          i[g] = gn(b, d) ? y[b] : t;
        }
        return i;
      }
      function gl(i, c) {
        if (!(c === "constructor" && typeof i[c] == "function") && c != "__proto__")
          return i[c];
      }
      var bh = Sh(zf), ki = LC || function(i, c) {
        return _t.setTimeout(i, c);
      }, ml = Sh($w);
      function _h(i, c, d) {
        var g = c + "";
        return ml(i, dE(g, EE(cE(g), d)));
      }
      function Sh(i) {
        var c = 0, d = 0;
        return function() {
          var g = HC(), y = fe - (g - d);
          if (d = g, y > 0) {
            if (++c >= ne)
              return arguments[0];
          } else
            c = 0;
          return i.apply(t, arguments);
        };
      }
      function Va(i, c) {
        var d = -1, g = i.length, y = g - 1;
        for (c = c === t ? g : c; ++d < c; ) {
          var b = Xc(d, y), T = i[b];
          i[b] = i[d], i[d] = T;
        }
        return i.length = c, i;
      }
      var Th = mE(function(i) {
        var c = [];
        return i.charCodeAt(0) === 46 && c.push(""), i.replace(uy, function(d, g, y, b) {
          c.push(y ? b.replace(yy, "$1") : g || d);
        }), c;
      });
      function Xr(i) {
        if (typeof i == "string" || ur(i))
          return i;
        var c = i + "";
        return c == "0" && 1 / i == -ie ? "-0" : c;
      }
      function io(i) {
        if (i != null) {
          try {
            return ba.call(i);
          } catch {
          }
          try {
            return i + "";
          } catch {
          }
        }
        return "";
      }
      function EE(i, c) {
        return Er(sn, function(d) {
          var g = "_." + d[0];
          c & d[1] && !va(i, g) && i.push(g);
        }), i.sort();
      }
      function Ih(i) {
        if (i instanceof De)
          return i.clone();
        var c = new _r(i.__wrapped__, i.__chain__);
        return c.__actions__ = Yt(i.__actions__), c.__index__ = i.__index__, c.__values__ = i.__values__, c;
      }
      function bE(i, c, d) {
        (d ? $t(i, c, d) : c === t) ? c = 1 : c = vt(Ne(c), 0);
        var g = i == null ? 0 : i.length;
        if (!g || c < 1)
          return [];
        for (var y = 0, b = 0, T = U(ka(g / c)); y < g; )
          T[b++] = Tr(i, y, y += c);
        return T;
      }
      function _E(i) {
        for (var c = -1, d = i == null ? 0 : i.length, g = 0, y = []; ++c < d; ) {
          var b = i[c];
          b && (y[g++] = b);
        }
        return y;
      }
      function SE() {
        var i = arguments.length;
        if (!i)
          return [];
        for (var c = U(i - 1), d = arguments[0], g = i; g--; )
          c[g - 1] = arguments[g];
        return On(Ae(d) ? Yt(d) : [d], St(c, 1));
      }
      var TE = Me(function(i, c) {
        return dt(i) ? _i(i, St(c, 1, dt, !0)) : [];
      }), IE = Me(function(i, c) {
        var d = Ir(c);
        return dt(d) && (d = t), dt(i) ? _i(i, St(c, 1, dt, !0), ge(d, 2)) : [];
      }), AE = Me(function(i, c) {
        var d = Ir(c);
        return dt(d) && (d = t), dt(i) ? _i(i, St(c, 1, dt, !0), t, d) : [];
      });
      function RE(i, c, d) {
        var g = i == null ? 0 : i.length;
        return g ? (c = d || c === t ? 1 : Ne(c), Tr(i, c < 0 ? 0 : c, g)) : [];
      }
      function kE(i, c, d) {
        var g = i == null ? 0 : i.length;
        return g ? (c = d || c === t ? 1 : Ne(c), c = g - c, Tr(i, 0, c < 0 ? 0 : c)) : [];
      }
      function PE(i, c) {
        return i && i.length ? Ha(i, ge(c, 3), !0, !0) : [];
      }
      function NE(i, c) {
        return i && i.length ? Ha(i, ge(c, 3), !0) : [];
      }
      function OE(i, c, d, g) {
        var y = i == null ? 0 : i.length;
        return y ? (d && typeof d != "number" && $t(i, c, d) && (d = 0, g = y), Sw(i, c, d, g)) : [];
      }
      function Ah(i, c, d) {
        var g = i == null ? 0 : i.length;
        if (!g)
          return -1;
        var y = d == null ? 0 : Ne(d);
        return y < 0 && (y = vt(g + y, 0)), ya(i, ge(c, 3), y);
      }
      function Rh(i, c, d) {
        var g = i == null ? 0 : i.length;
        if (!g)
          return -1;
        var y = g - 1;
        return d !== t && (y = Ne(d), y = d < 0 ? vt(g + y, 0) : Ot(y, g - 1)), ya(i, ge(c, 3), y, !0);
      }
      function kh(i) {
        var c = i == null ? 0 : i.length;
        return c ? St(i, 1) : [];
      }
      function ME(i) {
        var c = i == null ? 0 : i.length;
        return c ? St(i, ie) : [];
      }
      function xE(i, c) {
        var d = i == null ? 0 : i.length;
        return d ? (c = c === t ? 1 : Ne(c), St(i, c)) : [];
      }
      function LE(i) {
        for (var c = -1, d = i == null ? 0 : i.length, g = {}; ++c < d; ) {
          var y = i[c];
          g[y[0]] = y[1];
        }
        return g;
      }
      function Ph(i) {
        return i && i.length ? i[0] : t;
      }
      function DE(i, c, d) {
        var g = i == null ? 0 : i.length;
        if (!g)
          return -1;
        var y = d == null ? 0 : Ne(d);
        return y < 0 && (y = vt(g + y, 0)), ko(i, c, y);
      }
      function UE(i) {
        var c = i == null ? 0 : i.length;
        return c ? Tr(i, 0, -1) : [];
      }
      var FE = Me(function(i) {
        var c = nt(i, nl);
        return c.length && c[0] === i[0] ? Vc(c) : [];
      }), HE = Me(function(i) {
        var c = Ir(i), d = nt(i, nl);
        return c === Ir(d) ? c = t : d.pop(), d.length && d[0] === i[0] ? Vc(d, ge(c, 2)) : [];
      }), BE = Me(function(i) {
        var c = Ir(i), d = nt(i, nl);
        return c = typeof c == "function" ? c : t, c && d.pop(), d.length && d[0] === i[0] ? Vc(d, t, c) : [];
      });
      function KE(i, c) {
        return i == null ? "" : UC.call(i, c);
      }
      function Ir(i) {
        var c = i == null ? 0 : i.length;
        return c ? i[c - 1] : t;
      }
      function qE(i, c, d) {
        var g = i == null ? 0 : i.length;
        if (!g)
          return -1;
        var y = g;
        return d !== t && (y = Ne(d), y = y < 0 ? vt(g + y, 0) : Ot(y, g - 1)), c === c ? EC(i, c, y) : ya(i, uf, y, !0);
      }
      function $E(i, c) {
        return i && i.length ? Kf(i, Ne(c)) : t;
      }
      var GE = Me(Nh);
      function Nh(i, c) {
        return i && i.length && c && c.length ? Jc(i, c) : i;
      }
      function zE(i, c, d) {
        return i && i.length && c && c.length ? Jc(i, c, ge(d, 2)) : i;
      }
      function WE(i, c, d) {
        return i && i.length && c && c.length ? Jc(i, c, t, d) : i;
      }
      var VE = pn(function(i, c) {
        var d = i == null ? 0 : i.length, g = $c(i, c);
        return Gf(i, nt(c, function(y) {
          return gn(y, d) ? +y : y;
        }).sort(eh)), g;
      });
      function jE(i, c) {
        var d = [];
        if (!(i && i.length))
          return d;
        var g = -1, y = [], b = i.length;
        for (c = ge(c, 3); ++g < b; ) {
          var T = i[g];
          c(T, g, i) && (d.push(T), y.push(g));
        }
        return Gf(i, y), d;
      }
      function vl(i) {
        return i == null ? i : KC.call(i);
      }
      function YE(i, c, d) {
        var g = i == null ? 0 : i.length;
        return g ? (d && typeof d != "number" && $t(i, c, d) ? (c = 0, d = g) : (c = c == null ? 0 : Ne(c), d = d === t ? g : Ne(d)), Tr(i, c, d)) : [];
      }
      function QE(i, c) {
        return Fa(i, c);
      }
      function JE(i, c, d) {
        return el(i, c, ge(d, 2));
      }
      function XE(i, c) {
        var d = i == null ? 0 : i.length;
        if (d) {
          var g = Fa(i, c);
          if (g < d && Br(i[g], c))
            return g;
        }
        return -1;
      }
      function ZE(i, c) {
        return Fa(i, c, !0);
      }
      function eb(i, c, d) {
        return el(i, c, ge(d, 2), !0);
      }
      function tb(i, c) {
        var d = i == null ? 0 : i.length;
        if (d) {
          var g = Fa(i, c, !0) - 1;
          if (Br(i[g], c))
            return g;
        }
        return -1;
      }
      function rb(i) {
        return i && i.length ? Wf(i) : [];
      }
      function nb(i, c) {
        return i && i.length ? Wf(i, ge(c, 2)) : [];
      }
      function ob(i) {
        var c = i == null ? 0 : i.length;
        return c ? Tr(i, 1, c) : [];
      }
      function ib(i, c, d) {
        return i && i.length ? (c = d || c === t ? 1 : Ne(c), Tr(i, 0, c < 0 ? 0 : c)) : [];
      }
      function ab(i, c, d) {
        var g = i == null ? 0 : i.length;
        return g ? (c = d || c === t ? 1 : Ne(c), c = g - c, Tr(i, c < 0 ? 0 : c, g)) : [];
      }
      function sb(i, c) {
        return i && i.length ? Ha(i, ge(c, 3), !1, !0) : [];
      }
      function cb(i, c) {
        return i && i.length ? Ha(i, ge(c, 3)) : [];
      }
      var lb = Me(function(i) {
        return Dn(St(i, 1, dt, !0));
      }), ub = Me(function(i) {
        var c = Ir(i);
        return dt(c) && (c = t), Dn(St(i, 1, dt, !0), ge(c, 2));
      }), db = Me(function(i) {
        var c = Ir(i);
        return c = typeof c == "function" ? c : t, Dn(St(i, 1, dt, !0), t, c);
      });
      function fb(i) {
        return i && i.length ? Dn(i) : [];
      }
      function hb(i, c) {
        return i && i.length ? Dn(i, ge(c, 2)) : [];
      }
      function pb(i, c) {
        return c = typeof c == "function" ? c : t, i && i.length ? Dn(i, t, c) : [];
      }
      function yl(i) {
        if (!(i && i.length))
          return [];
        var c = 0;
        return i = Nn(i, function(d) {
          if (dt(d))
            return c = vt(d.length, c), !0;
        }), Lc(c, function(d) {
          return nt(i, Oc(d));
        });
      }
      function Oh(i, c) {
        if (!(i && i.length))
          return [];
        var d = yl(i);
        return c == null ? d : nt(d, function(g) {
          return sr(c, t, g);
        });
      }
      var gb = Me(function(i, c) {
        return dt(i) ? _i(i, c) : [];
      }), mb = Me(function(i) {
        return rl(Nn(i, dt));
      }), vb = Me(function(i) {
        var c = Ir(i);
        return dt(c) && (c = t), rl(Nn(i, dt), ge(c, 2));
      }), yb = Me(function(i) {
        var c = Ir(i);
        return c = typeof c == "function" ? c : t, rl(Nn(i, dt), t, c);
      }), Cb = Me(yl);
      function wb(i, c) {
        return Qf(i || [], c || [], bi);
      }
      function Eb(i, c) {
        return Qf(i || [], c || [], Ii);
      }
      var bb = Me(function(i) {
        var c = i.length, d = c > 1 ? i[c - 1] : t;
        return d = typeof d == "function" ? (i.pop(), d) : t, Oh(i, d);
      });
      function Mh(i) {
        var c = w(i);
        return c.__chain__ = !0, c;
      }
      function _b(i, c) {
        return c(i), i;
      }
      function ja(i, c) {
        return c(i);
      }
      var Sb = pn(function(i) {
        var c = i.length, d = c ? i[0] : 0, g = this.__wrapped__, y = function(b) {
          return $c(b, i);
        };
        return c > 1 || this.__actions__.length || !(g instanceof De) || !gn(d) ? this.thru(y) : (g = g.slice(d, +d + (c ? 1 : 0)), g.__actions__.push({
          func: ja,
          args: [y],
          thisArg: t
        }), new _r(g, this.__chain__).thru(function(b) {
          return c && !b.length && b.push(t), b;
        }));
      });
      function Tb() {
        return Mh(this);
      }
      function Ib() {
        return new _r(this.value(), this.__chain__);
      }
      function Ab() {
        this.__values__ === t && (this.__values__ = Vh(this.value()));
        var i = this.__index__ >= this.__values__.length, c = i ? t : this.__values__[this.__index__++];
        return { done: i, value: c };
      }
      function Rb() {
        return this;
      }
      function kb(i) {
        for (var c, d = this; d instanceof Ma; ) {
          var g = Ih(d);
          g.__index__ = 0, g.__values__ = t, c ? y.__wrapped__ = g : c = g;
          var y = g;
          d = d.__wrapped__;
        }
        return y.__wrapped__ = i, c;
      }
      function Pb() {
        var i = this.__wrapped__;
        if (i instanceof De) {
          var c = i;
          return this.__actions__.length && (c = new De(this)), c = c.reverse(), c.__actions__.push({
            func: ja,
            args: [vl],
            thisArg: t
          }), new _r(c, this.__chain__);
        }
        return this.thru(vl);
      }
      function Nb() {
        return Yf(this.__wrapped__, this.__actions__);
      }
      var Ob = Ba(function(i, c, d) {
        Ve.call(i, d) ? ++i[d] : fn(i, d, 1);
      });
      function Mb(i, c, d) {
        var g = Ae(i) ? cf : _w;
        return d && $t(i, c, d) && (c = t), g(i, ge(c, 3));
      }
      function xb(i, c) {
        var d = Ae(i) ? Nn : Of;
        return d(i, ge(c, 3));
      }
      var Lb = ah(Ah), Db = ah(Rh);
      function Ub(i, c) {
        return St(Ya(i, c), 1);
      }
      function Fb(i, c) {
        return St(Ya(i, c), ie);
      }
      function Hb(i, c, d) {
        return d = d === t ? 1 : Ne(d), St(Ya(i, c), d);
      }
      function xh(i, c) {
        var d = Ae(i) ? Er : Ln;
        return d(i, ge(c, 3));
      }
      function Lh(i, c) {
        var d = Ae(i) ? oC : Nf;
        return d(i, ge(c, 3));
      }
      var Bb = Ba(function(i, c, d) {
        Ve.call(i, d) ? i[d].push(c) : fn(i, d, [c]);
      });
      function Kb(i, c, d, g) {
        i = Qt(i) ? i : Ko(i), d = d && !g ? Ne(d) : 0;
        var y = i.length;
        return d < 0 && (d = vt(y + d, 0)), es(i) ? d <= y && i.indexOf(c, d) > -1 : !!y && ko(i, c, d) > -1;
      }
      var qb = Me(function(i, c, d) {
        var g = -1, y = typeof c == "function", b = Qt(i) ? U(i.length) : [];
        return Ln(i, function(T) {
          b[++g] = y ? sr(c, T, d) : Si(T, c, d);
        }), b;
      }), $b = Ba(function(i, c, d) {
        fn(i, d, c);
      });
      function Ya(i, c) {
        var d = Ae(i) ? nt : Ff;
        return d(i, ge(c, 3));
      }
      function Gb(i, c, d, g) {
        return i == null ? [] : (Ae(c) || (c = c == null ? [] : [c]), d = g ? t : d, Ae(d) || (d = d == null ? [] : [d]), qf(i, c, d));
      }
      var zb = Ba(function(i, c, d) {
        i[d ? 0 : 1].push(c);
      }, function() {
        return [[], []];
      });
      function Wb(i, c, d) {
        var g = Ae(i) ? Pc : ff, y = arguments.length < 3;
        return g(i, ge(c, 4), d, y, Ln);
      }
      function Vb(i, c, d) {
        var g = Ae(i) ? iC : ff, y = arguments.length < 3;
        return g(i, ge(c, 4), d, y, Nf);
      }
      function jb(i, c) {
        var d = Ae(i) ? Nn : Of;
        return d(i, Xa(ge(c, 3)));
      }
      function Yb(i) {
        var c = Ae(i) ? Af : Kw;
        return c(i);
      }
      function Qb(i, c, d) {
        (d ? $t(i, c, d) : c === t) ? c = 1 : c = Ne(c);
        var g = Ae(i) ? yw : qw;
        return g(i, c);
      }
      function Jb(i) {
        var c = Ae(i) ? Cw : Gw;
        return c(i);
      }
      function Xb(i) {
        if (i == null)
          return 0;
        if (Qt(i))
          return es(i) ? No(i) : i.length;
        var c = Mt(i);
        return c == kt || c == bt ? i.size : Yc(i).length;
      }
      function Zb(i, c, d) {
        var g = Ae(i) ? Nc : zw;
        return d && $t(i, c, d) && (c = t), g(i, ge(c, 3));
      }
      var e_ = Me(function(i, c) {
        if (i == null)
          return [];
        var d = c.length;
        return d > 1 && $t(i, c[0], c[1]) ? c = [] : d > 2 && $t(c[0], c[1], c[2]) && (c = [c[0]]), qf(i, St(c, 1), []);
      }), Qa = xC || function() {
        return _t.Date.now();
      };
      function t_(i, c) {
        if (typeof c != "function")
          throw new br(s);
        return i = Ne(i), function() {
          if (--i < 1)
            return c.apply(this, arguments);
        };
      }
      function Dh(i, c, d) {
        return c = d ? t : c, c = i && c == null ? i.length : c, hn(i, q, t, t, t, t, c);
      }
      function Uh(i, c) {
        var d;
        if (typeof c != "function")
          throw new br(s);
        return i = Ne(i), function() {
          return --i > 0 && (d = c.apply(this, arguments)), i <= 1 && (c = t), d;
        };
      }
      var Cl = Me(function(i, c, d) {
        var g = _;
        if (d.length) {
          var y = Mn(d, Ho(Cl));
          g |= O;
        }
        return hn(i, g, c, d, y);
      }), Fh = Me(function(i, c, d) {
        var g = _ | R;
        if (d.length) {
          var y = Mn(d, Ho(Fh));
          g |= O;
        }
        return hn(c, g, i, d, y);
      });
      function Hh(i, c, d) {
        c = d ? t : c;
        var g = hn(i, S, t, t, t, t, t, c);
        return g.placeholder = Hh.placeholder, g;
      }
      function Bh(i, c, d) {
        c = d ? t : c;
        var g = hn(i, A, t, t, t, t, t, c);
        return g.placeholder = Bh.placeholder, g;
      }
      function Kh(i, c, d) {
        var g, y, b, T, k, x, B = 0, K = !1, W = !1, Z = !0;
        if (typeof i != "function")
          throw new br(s);
        c = Ar(c) || 0, it(d) && (K = !!d.leading, W = "maxWait" in d, b = W ? vt(Ar(d.maxWait) || 0, c) : b, Z = "trailing" in d ? !!d.trailing : Z);
        function de(ft) {
          var Kr = g, yn = y;
          return g = y = t, B = ft, T = i.apply(yn, Kr), T;
        }
        function me(ft) {
          return B = ft, k = ki(xe, c), K ? de(ft) : T;
        }
        function Oe(ft) {
          var Kr = ft - x, yn = ft - B, ap = c - Kr;
          return W ? Ot(ap, b - yn) : ap;
        }
        function ve(ft) {
          var Kr = ft - x, yn = ft - B;
          return x === t || Kr >= c || Kr < 0 || W && yn >= b;
        }
        function xe() {
          var ft = Qa();
          if (ve(ft))
            return Fe(ft);
          k = ki(xe, Oe(ft));
        }
        function Fe(ft) {
          return k = t, Z && g ? de(ft) : (g = y = t, T);
        }
        function dr() {
          k !== t && Jf(k), B = 0, g = x = y = k = t;
        }
        function Gt() {
          return k === t ? T : Fe(Qa());
        }
        function fr() {
          var ft = Qa(), Kr = ve(ft);
          if (g = arguments, y = this, x = ft, Kr) {
            if (k === t)
              return me(x);
            if (W)
              return Jf(k), k = ki(xe, c), de(x);
          }
          return k === t && (k = ki(xe, c)), T;
        }
        return fr.cancel = dr, fr.flush = Gt, fr;
      }
      var r_ = Me(function(i, c) {
        return Pf(i, 1, c);
      }), n_ = Me(function(i, c, d) {
        return Pf(i, Ar(c) || 0, d);
      });
      function o_(i) {
        return hn(i, Q);
      }
      function Ja(i, c) {
        if (typeof i != "function" || c != null && typeof c != "function")
          throw new br(s);
        var d = function() {
          var g = arguments, y = c ? c.apply(this, g) : g[0], b = d.cache;
          if (b.has(y))
            return b.get(y);
          var T = i.apply(this, g);
          return d.cache = b.set(y, T) || b, T;
        };
        return d.cache = new (Ja.Cache || dn)(), d;
      }
      Ja.Cache = dn;
      function Xa(i) {
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
      function i_(i) {
        return Uh(2, i);
      }
      var a_ = Ww(function(i, c) {
        c = c.length == 1 && Ae(c[0]) ? nt(c[0], cr(ge())) : nt(St(c, 1), cr(ge()));
        var d = c.length;
        return Me(function(g) {
          for (var y = -1, b = Ot(g.length, d); ++y < b; )
            g[y] = c[y].call(this, g[y]);
          return sr(i, this, g);
        });
      }), wl = Me(function(i, c) {
        var d = Mn(c, Ho(wl));
        return hn(i, O, t, c, d);
      }), qh = Me(function(i, c) {
        var d = Mn(c, Ho(qh));
        return hn(i, L, t, c, d);
      }), s_ = pn(function(i, c) {
        return hn(i, D, t, t, t, c);
      });
      function c_(i, c) {
        if (typeof i != "function")
          throw new br(s);
        return c = c === t ? c : Ne(c), Me(i, c);
      }
      function l_(i, c) {
        if (typeof i != "function")
          throw new br(s);
        return c = c == null ? 0 : vt(Ne(c), 0), Me(function(d) {
          var g = d[c], y = Fn(d, 0, c);
          return g && On(y, g), sr(i, this, y);
        });
      }
      function u_(i, c, d) {
        var g = !0, y = !0;
        if (typeof i != "function")
          throw new br(s);
        return it(d) && (g = "leading" in d ? !!d.leading : g, y = "trailing" in d ? !!d.trailing : y), Kh(i, c, {
          leading: g,
          maxWait: c,
          trailing: y
        });
      }
      function d_(i) {
        return Dh(i, 1);
      }
      function f_(i, c) {
        return wl(ol(c), i);
      }
      function h_() {
        if (!arguments.length)
          return [];
        var i = arguments[0];
        return Ae(i) ? i : [i];
      }
      function p_(i) {
        return Sr(i, v);
      }
      function g_(i, c) {
        return c = typeof c == "function" ? c : t, Sr(i, v, c);
      }
      function m_(i) {
        return Sr(i, p | v);
      }
      function v_(i, c) {
        return c = typeof c == "function" ? c : t, Sr(i, p | v, c);
      }
      function y_(i, c) {
        return c == null || kf(i, c, wt(c));
      }
      function Br(i, c) {
        return i === c || i !== i && c !== c;
      }
      var C_ = Ga(Wc), w_ = Ga(function(i, c) {
        return i >= c;
      }), ao = Lf(function() {
        return arguments;
      }()) ? Lf : function(i) {
        return at(i) && Ve.call(i, "callee") && !Ef.call(i, "callee");
      }, Ae = U.isArray, E_ = tf ? cr(tf) : kw;
      function Qt(i) {
        return i != null && Za(i.length) && !mn(i);
      }
      function dt(i) {
        return at(i) && Qt(i);
      }
      function b_(i) {
        return i === !0 || i === !1 || at(i) && qt(i) == ar;
      }
      var Hn = DC || Nl, __ = rf ? cr(rf) : Pw;
      function S_(i) {
        return at(i) && i.nodeType === 1 && !Pi(i);
      }
      function T_(i) {
        if (i == null)
          return !0;
        if (Qt(i) && (Ae(i) || typeof i == "string" || typeof i.splice == "function" || Hn(i) || Bo(i) || ao(i)))
          return !i.length;
        var c = Mt(i);
        if (c == kt || c == bt)
          return !i.size;
        if (Ri(i))
          return !Yc(i).length;
        for (var d in i)
          if (Ve.call(i, d))
            return !1;
        return !0;
      }
      function I_(i, c) {
        return Ti(i, c);
      }
      function A_(i, c, d) {
        d = typeof d == "function" ? d : t;
        var g = d ? d(i, c) : t;
        return g === t ? Ti(i, c, t, d) : !!g;
      }
      function El(i) {
        if (!at(i))
          return !1;
        var c = qt(i);
        return c == Kt || c == ln || typeof i.message == "string" && typeof i.name == "string" && !Pi(i);
      }
      function R_(i) {
        return typeof i == "number" && _f(i);
      }
      function mn(i) {
        if (!it(i))
          return !1;
        var c = qt(i);
        return c == Cr || c == Ye || c == cn || c == Jn;
      }
      function $h(i) {
        return typeof i == "number" && i == Ne(i);
      }
      function Za(i) {
        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= te;
      }
      function it(i) {
        var c = typeof i;
        return i != null && (c == "object" || c == "function");
      }
      function at(i) {
        return i != null && typeof i == "object";
      }
      var Gh = nf ? cr(nf) : Ow;
      function k_(i, c) {
        return i === c || jc(i, c, dl(c));
      }
      function P_(i, c, d) {
        return d = typeof d == "function" ? d : t, jc(i, c, dl(c), d);
      }
      function N_(i) {
        return zh(i) && i != +i;
      }
      function O_(i) {
        if (gE(i))
          throw new Te(a);
        return Df(i);
      }
      function M_(i) {
        return i === null;
      }
      function x_(i) {
        return i == null;
      }
      function zh(i) {
        return typeof i == "number" || at(i) && qt(i) == Pt;
      }
      function Pi(i) {
        if (!at(i) || qt(i) != gt)
          return !1;
        var c = Ia(i);
        if (c === null)
          return !0;
        var d = Ve.call(c, "constructor") && c.constructor;
        return typeof d == "function" && d instanceof d && ba.call(d) == PC;
      }
      var bl = of ? cr(of) : Mw;
      function L_(i) {
        return $h(i) && i >= -te && i <= te;
      }
      var Wh = af ? cr(af) : xw;
      function es(i) {
        return typeof i == "string" || !Ae(i) && at(i) && qt(i) == tt;
      }
      function ur(i) {
        return typeof i == "symbol" || at(i) && qt(i) == Yr;
      }
      var Bo = sf ? cr(sf) : Lw;
      function D_(i) {
        return i === t;
      }
      function U_(i) {
        return at(i) && Mt(i) == pi;
      }
      function F_(i) {
        return at(i) && qt(i) == ey;
      }
      var H_ = Ga(Qc), B_ = Ga(function(i, c) {
        return i <= c;
      });
      function Vh(i) {
        if (!i)
          return [];
        if (Qt(i))
          return es(i) ? Fr(i) : Yt(i);
        if (vi && i[vi])
          return yC(i[vi]());
        var c = Mt(i), d = c == kt ? Uc : c == bt ? Ca : Ko;
        return d(i);
      }
      function vn(i) {
        if (!i)
          return i === 0 ? i : 0;
        if (i = Ar(i), i === ie || i === -ie) {
          var c = i < 0 ? -1 : 1;
          return c * Pe;
        }
        return i === i ? i : 0;
      }
      function Ne(i) {
        var c = vn(i), d = c % 1;
        return c === c ? d ? c - d : c : 0;
      }
      function jh(i) {
        return i ? ro(Ne(i), 0, ot) : 0;
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
        i = hf(i);
        var d = Ey.test(i);
        return d || _y.test(i) ? tC(i.slice(2), d ? 2 : 8) : wy.test(i) ? Qe : +i;
      }
      function Yh(i) {
        return Jr(i, Jt(i));
      }
      function K_(i) {
        return i ? ro(Ne(i), -te, te) : i === 0 ? i : 0;
      }
      function Ge(i) {
        return i == null ? "" : lr(i);
      }
      var q_ = Uo(function(i, c) {
        if (Ri(c) || Qt(c)) {
          Jr(c, wt(c), i);
          return;
        }
        for (var d in c)
          Ve.call(c, d) && bi(i, d, c[d]);
      }), Qh = Uo(function(i, c) {
        Jr(c, Jt(c), i);
      }), ts = Uo(function(i, c, d, g) {
        Jr(c, Jt(c), i, g);
      }), $_ = Uo(function(i, c, d, g) {
        Jr(c, wt(c), i, g);
      }), G_ = pn($c);
      function z_(i, c) {
        var d = Do(i);
        return c == null ? d : Rf(d, c);
      }
      var W_ = Me(function(i, c) {
        i = Je(i);
        var d = -1, g = c.length, y = g > 2 ? c[2] : t;
        for (y && $t(c[0], c[1], y) && (g = 1); ++d < g; )
          for (var b = c[d], T = Jt(b), k = -1, x = T.length; ++k < x; ) {
            var B = T[k], K = i[B];
            (K === t || Br(K, Mo[B]) && !Ve.call(i, B)) && (i[B] = b[B]);
          }
        return i;
      }), V_ = Me(function(i) {
        return i.push(t, hh), sr(Jh, t, i);
      });
      function j_(i, c) {
        return lf(i, ge(c, 3), Qr);
      }
      function Y_(i, c) {
        return lf(i, ge(c, 3), zc);
      }
      function Q_(i, c) {
        return i == null ? i : Gc(i, ge(c, 3), Jt);
      }
      function J_(i, c) {
        return i == null ? i : Mf(i, ge(c, 3), Jt);
      }
      function X_(i, c) {
        return i && Qr(i, ge(c, 3));
      }
      function Z_(i, c) {
        return i && zc(i, ge(c, 3));
      }
      function eS(i) {
        return i == null ? [] : Da(i, wt(i));
      }
      function tS(i) {
        return i == null ? [] : Da(i, Jt(i));
      }
      function _l(i, c, d) {
        var g = i == null ? t : no(i, c);
        return g === t ? d : g;
      }
      function rS(i, c) {
        return i != null && mh(i, c, Tw);
      }
      function Sl(i, c) {
        return i != null && mh(i, c, Iw);
      }
      var nS = ch(function(i, c, d) {
        c != null && typeof c.toString != "function" && (c = _a.call(c)), i[c] = d;
      }, Il(Xt)), oS = ch(function(i, c, d) {
        c != null && typeof c.toString != "function" && (c = _a.call(c)), Ve.call(i, c) ? i[c].push(d) : i[c] = [d];
      }, ge), iS = Me(Si);
      function wt(i) {
        return Qt(i) ? If(i) : Yc(i);
      }
      function Jt(i) {
        return Qt(i) ? If(i, !0) : Dw(i);
      }
      function aS(i, c) {
        var d = {};
        return c = ge(c, 3), Qr(i, function(g, y, b) {
          fn(d, c(g, y, b), g);
        }), d;
      }
      function sS(i, c) {
        var d = {};
        return c = ge(c, 3), Qr(i, function(g, y, b) {
          fn(d, y, c(g, y, b));
        }), d;
      }
      var cS = Uo(function(i, c, d) {
        Ua(i, c, d);
      }), Jh = Uo(function(i, c, d, g) {
        Ua(i, c, d, g);
      }), lS = pn(function(i, c) {
        var d = {};
        if (i == null)
          return d;
        var g = !1;
        c = nt(c, function(b) {
          return b = Un(b, i), g || (g = b.length > 1), b;
        }), Jr(i, ll(i), d), g && (d = Sr(d, p | m | v, nE));
        for (var y = c.length; y--; )
          tl(d, c[y]);
        return d;
      });
      function uS(i, c) {
        return Xh(i, Xa(ge(c)));
      }
      var dS = pn(function(i, c) {
        return i == null ? {} : Fw(i, c);
      });
      function Xh(i, c) {
        if (i == null)
          return {};
        var d = nt(ll(i), function(g) {
          return [g];
        });
        return c = ge(c), $f(i, d, function(g, y) {
          return c(g, y[0]);
        });
      }
      function fS(i, c, d) {
        c = Un(c, i);
        var g = -1, y = c.length;
        for (y || (y = 1, i = t); ++g < y; ) {
          var b = i == null ? t : i[Xr(c[g])];
          b === t && (g = y, b = d), i = mn(b) ? b.call(i) : b;
        }
        return i;
      }
      function hS(i, c, d) {
        return i == null ? i : Ii(i, c, d);
      }
      function pS(i, c, d, g) {
        return g = typeof g == "function" ? g : t, i == null ? i : Ii(i, c, d, g);
      }
      var Zh = dh(wt), ep = dh(Jt);
      function gS(i, c, d) {
        var g = Ae(i), y = g || Hn(i) || Bo(i);
        if (c = ge(c, 4), d == null) {
          var b = i && i.constructor;
          y ? d = g ? new b() : [] : it(i) ? d = mn(b) ? Do(Ia(i)) : {} : d = {};
        }
        return (y ? Er : Qr)(i, function(T, k, x) {
          return c(d, T, k, x);
        }), d;
      }
      function mS(i, c) {
        return i == null ? !0 : tl(i, c);
      }
      function vS(i, c, d) {
        return i == null ? i : jf(i, c, ol(d));
      }
      function yS(i, c, d, g) {
        return g = typeof g == "function" ? g : t, i == null ? i : jf(i, c, ol(d), g);
      }
      function Ko(i) {
        return i == null ? [] : Dc(i, wt(i));
      }
      function CS(i) {
        return i == null ? [] : Dc(i, Jt(i));
      }
      function wS(i, c, d) {
        return d === t && (d = c, c = t), d !== t && (d = Ar(d), d = d === d ? d : 0), c !== t && (c = Ar(c), c = c === c ? c : 0), ro(Ar(i), c, d);
      }
      function ES(i, c, d) {
        return c = vn(c), d === t ? (d = c, c = 0) : d = vn(d), i = Ar(i), Aw(i, c, d);
      }
      function bS(i, c, d) {
        if (d && typeof d != "boolean" && $t(i, c, d) && (c = d = t), d === t && (typeof c == "boolean" ? (d = c, c = t) : typeof i == "boolean" && (d = i, i = t)), i === t && c === t ? (i = 0, c = 1) : (i = vn(i), c === t ? (c = i, i = 0) : c = vn(c)), i > c) {
          var g = i;
          i = c, c = g;
        }
        if (d || i % 1 || c % 1) {
          var y = Sf();
          return Ot(i + y * (c - i + eC("1e-" + ((y + "").length - 1))), c);
        }
        return Xc(i, c);
      }
      var _S = Fo(function(i, c, d) {
        return c = c.toLowerCase(), i + (d ? tp(c) : c);
      });
      function tp(i) {
        return Tl(Ge(i).toLowerCase());
      }
      function rp(i) {
        return i = Ge(i), i && i.replace(Ty, hC).replace(Gy, "");
      }
      function SS(i, c, d) {
        i = Ge(i), c = lr(c);
        var g = i.length;
        d = d === t ? g : ro(Ne(d), 0, g);
        var y = d;
        return d -= c.length, d >= 0 && i.slice(d, y) == c;
      }
      function TS(i) {
        return i = Ge(i), i && iy.test(i) ? i.replace(Od, pC) : i;
      }
      function IS(i) {
        return i = Ge(i), i && dy.test(i) ? i.replace(wc, "\\$&") : i;
      }
      var AS = Fo(function(i, c, d) {
        return i + (d ? "-" : "") + c.toLowerCase();
      }), RS = Fo(function(i, c, d) {
        return i + (d ? " " : "") + c.toLowerCase();
      }), kS = ih("toLowerCase");
      function PS(i, c, d) {
        i = Ge(i), c = Ne(c);
        var g = c ? No(i) : 0;
        if (!c || g >= c)
          return i;
        var y = (c - g) / 2;
        return $a(Pa(y), d) + i + $a(ka(y), d);
      }
      function NS(i, c, d) {
        i = Ge(i), c = Ne(c);
        var g = c ? No(i) : 0;
        return c && g < c ? i + $a(c - g, d) : i;
      }
      function OS(i, c, d) {
        i = Ge(i), c = Ne(c);
        var g = c ? No(i) : 0;
        return c && g < c ? $a(c - g, d) + i : i;
      }
      function MS(i, c, d) {
        return d || c == null ? c = 0 : c && (c = +c), BC(Ge(i).replace(Ec, ""), c || 0);
      }
      function xS(i, c, d) {
        return (d ? $t(i, c, d) : c === t) ? c = 1 : c = Ne(c), Zc(Ge(i), c);
      }
      function LS() {
        var i = arguments, c = Ge(i[0]);
        return i.length < 3 ? c : c.replace(i[1], i[2]);
      }
      var DS = Fo(function(i, c, d) {
        return i + (d ? "_" : "") + c.toLowerCase();
      });
      function US(i, c, d) {
        return d && typeof d != "number" && $t(i, c, d) && (c = d = t), d = d === t ? ot : d >>> 0, d ? (i = Ge(i), i && (typeof c == "string" || c != null && !bl(c)) && (c = lr(c), !c && Po(i)) ? Fn(Fr(i), 0, d) : i.split(c, d)) : [];
      }
      var FS = Fo(function(i, c, d) {
        return i + (d ? " " : "") + Tl(c);
      });
      function HS(i, c, d) {
        return i = Ge(i), d = d == null ? 0 : ro(Ne(d), 0, i.length), c = lr(c), i.slice(d, d + c.length) == c;
      }
      function BS(i, c, d) {
        var g = w.templateSettings;
        d && $t(i, c, d) && (c = t), i = Ge(i), c = ts({}, c, g, fh);
        var y = ts({}, c.imports, g.imports, fh), b = wt(y), T = Dc(y, b), k, x, B = 0, K = c.interpolate || pa, W = "__p += '", Z = Fc(
          (c.escape || pa).source + "|" + K.source + "|" + (K === Md ? Cy : pa).source + "|" + (c.evaluate || pa).source + "|$",
          "g"
        ), de = "//# sourceURL=" + (Ve.call(c, "sourceURL") ? (c.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Yy + "]") + `
`;
        i.replace(Z, function(ve, xe, Fe, dr, Gt, fr) {
          return Fe || (Fe = dr), W += i.slice(B, fr).replace(Iy, gC), xe && (k = !0, W += `' +
__e(` + xe + `) +
'`), Gt && (x = !0, W += `';
` + Gt + `;
__p += '`), Fe && (W += `' +
((__t = (` + Fe + `)) == null ? '' : __t) +
'`), B = fr + ve.length, ve;
        }), W += `';
`;
        var me = Ve.call(c, "variable") && c.variable;
        if (!me)
          W = `with (obj) {
` + W + `
}
`;
        else if (vy.test(me))
          throw new Te(l);
        W = (x ? W.replace(ty, "") : W).replace(ry, "$1").replace(ny, "$1;"), W = "function(" + (me || "obj") + `) {
` + (me ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (k ? ", __e = _.escape" : "") + (x ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + W + `return __p
}`;
        var Oe = op(function() {
          return qe(b, de + "return " + W).apply(t, T);
        });
        if (Oe.source = W, El(Oe))
          throw Oe;
        return Oe;
      }
      function KS(i) {
        return Ge(i).toLowerCase();
      }
      function qS(i) {
        return Ge(i).toUpperCase();
      }
      function $S(i, c, d) {
        if (i = Ge(i), i && (d || c === t))
          return hf(i);
        if (!i || !(c = lr(c)))
          return i;
        var g = Fr(i), y = Fr(c), b = pf(g, y), T = gf(g, y) + 1;
        return Fn(g, b, T).join("");
      }
      function GS(i, c, d) {
        if (i = Ge(i), i && (d || c === t))
          return i.slice(0, vf(i) + 1);
        if (!i || !(c = lr(c)))
          return i;
        var g = Fr(i), y = gf(g, Fr(c)) + 1;
        return Fn(g, 0, y).join("");
      }
      function zS(i, c, d) {
        if (i = Ge(i), i && (d || c === t))
          return i.replace(Ec, "");
        if (!i || !(c = lr(c)))
          return i;
        var g = Fr(i), y = pf(g, Fr(c));
        return Fn(g, y).join("");
      }
      function WS(i, c) {
        var d = X, g = le;
        if (it(c)) {
          var y = "separator" in c ? c.separator : y;
          d = "length" in c ? Ne(c.length) : d, g = "omission" in c ? lr(c.omission) : g;
        }
        i = Ge(i);
        var b = i.length;
        if (Po(i)) {
          var T = Fr(i);
          b = T.length;
        }
        if (d >= b)
          return i;
        var k = d - No(g);
        if (k < 1)
          return g;
        var x = T ? Fn(T, 0, k).join("") : i.slice(0, k);
        if (y === t)
          return x + g;
        if (T && (k += x.length - k), bl(y)) {
          if (i.slice(k).search(y)) {
            var B, K = x;
            for (y.global || (y = Fc(y.source, Ge(xd.exec(y)) + "g")), y.lastIndex = 0; B = y.exec(K); )
              var W = B.index;
            x = x.slice(0, W === t ? k : W);
          }
        } else if (i.indexOf(lr(y), k) != k) {
          var Z = x.lastIndexOf(y);
          Z > -1 && (x = x.slice(0, Z));
        }
        return x + g;
      }
      function VS(i) {
        return i = Ge(i), i && oy.test(i) ? i.replace(Nd, bC) : i;
      }
      var jS = Fo(function(i, c, d) {
        return i + (d ? " " : "") + c.toUpperCase();
      }), Tl = ih("toUpperCase");
      function np(i, c, d) {
        return i = Ge(i), c = d ? t : c, c === t ? vC(i) ? TC(i) : cC(i) : i.match(c) || [];
      }
      var op = Me(function(i, c) {
        try {
          return sr(i, t, c);
        } catch (d) {
          return El(d) ? d : new Te(d);
        }
      }), YS = pn(function(i, c) {
        return Er(c, function(d) {
          d = Xr(d), fn(i, d, Cl(i[d], i));
        }), i;
      });
      function QS(i) {
        var c = i == null ? 0 : i.length, d = ge();
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
      function JS(i) {
        return bw(Sr(i, p));
      }
      function Il(i) {
        return function() {
          return i;
        };
      }
      function XS(i, c) {
        return i == null || i !== i ? c : i;
      }
      var ZS = sh(), eT = sh(!0);
      function Xt(i) {
        return i;
      }
      function Al(i) {
        return Uf(typeof i == "function" ? i : Sr(i, p));
      }
      function tT(i) {
        return Hf(Sr(i, p));
      }
      function rT(i, c) {
        return Bf(i, Sr(c, p));
      }
      var nT = Me(function(i, c) {
        return function(d) {
          return Si(d, i, c);
        };
      }), oT = Me(function(i, c) {
        return function(d) {
          return Si(i, d, c);
        };
      });
      function Rl(i, c, d) {
        var g = wt(c), y = Da(c, g);
        d == null && !(it(c) && (y.length || !g.length)) && (d = c, c = i, i = this, y = Da(c, wt(c)));
        var b = !(it(d) && "chain" in d) || !!d.chain, T = mn(i);
        return Er(y, function(k) {
          var x = c[k];
          i[k] = x, T && (i.prototype[k] = function() {
            var B = this.__chain__;
            if (b || B) {
              var K = i(this.__wrapped__), W = K.__actions__ = Yt(this.__actions__);
              return W.push({ func: x, args: arguments, thisArg: i }), K.__chain__ = B, K;
            }
            return x.apply(i, On([this.value()], arguments));
          });
        }), i;
      }
      function iT() {
        return _t._ === this && (_t._ = NC), this;
      }
      function kl() {
      }
      function aT(i) {
        return i = Ne(i), Me(function(c) {
          return Kf(c, i);
        });
      }
      var sT = al(nt), cT = al(cf), lT = al(Nc);
      function ip(i) {
        return hl(i) ? Oc(Xr(i)) : Hw(i);
      }
      function uT(i) {
        return function(c) {
          return i == null ? t : no(i, c);
        };
      }
      var dT = lh(), fT = lh(!0);
      function Pl() {
        return [];
      }
      function Nl() {
        return !1;
      }
      function hT() {
        return {};
      }
      function pT() {
        return "";
      }
      function gT() {
        return !0;
      }
      function mT(i, c) {
        if (i = Ne(i), i < 1 || i > te)
          return [];
        var d = ot, g = Ot(i, ot);
        c = ge(c), i -= ot;
        for (var y = Lc(g, c); ++d < i; )
          c(d);
        return y;
      }
      function vT(i) {
        return Ae(i) ? nt(i, Xr) : ur(i) ? [i] : Yt(Th(Ge(i)));
      }
      function yT(i) {
        var c = ++kC;
        return Ge(i) + c;
      }
      var CT = qa(function(i, c) {
        return i + c;
      }, 0), wT = sl("ceil"), ET = qa(function(i, c) {
        return i / c;
      }, 1), bT = sl("floor");
      function _T(i) {
        return i && i.length ? La(i, Xt, Wc) : t;
      }
      function ST(i, c) {
        return i && i.length ? La(i, ge(c, 2), Wc) : t;
      }
      function TT(i) {
        return df(i, Xt);
      }
      function IT(i, c) {
        return df(i, ge(c, 2));
      }
      function AT(i) {
        return i && i.length ? La(i, Xt, Qc) : t;
      }
      function RT(i, c) {
        return i && i.length ? La(i, ge(c, 2), Qc) : t;
      }
      var kT = qa(function(i, c) {
        return i * c;
      }, 1), PT = sl("round"), NT = qa(function(i, c) {
        return i - c;
      }, 0);
      function OT(i) {
        return i && i.length ? xc(i, Xt) : 0;
      }
      function MT(i, c) {
        return i && i.length ? xc(i, ge(c, 2)) : 0;
      }
      return w.after = t_, w.ary = Dh, w.assign = q_, w.assignIn = Qh, w.assignInWith = ts, w.assignWith = $_, w.at = G_, w.before = Uh, w.bind = Cl, w.bindAll = YS, w.bindKey = Fh, w.castArray = h_, w.chain = Mh, w.chunk = bE, w.compact = _E, w.concat = SE, w.cond = QS, w.conforms = JS, w.constant = Il, w.countBy = Ob, w.create = z_, w.curry = Hh, w.curryRight = Bh, w.debounce = Kh, w.defaults = W_, w.defaultsDeep = V_, w.defer = r_, w.delay = n_, w.difference = TE, w.differenceBy = IE, w.differenceWith = AE, w.drop = RE, w.dropRight = kE, w.dropRightWhile = PE, w.dropWhile = NE, w.fill = OE, w.filter = xb, w.flatMap = Ub, w.flatMapDeep = Fb, w.flatMapDepth = Hb, w.flatten = kh, w.flattenDeep = ME, w.flattenDepth = xE, w.flip = o_, w.flow = ZS, w.flowRight = eT, w.fromPairs = LE, w.functions = eS, w.functionsIn = tS, w.groupBy = Bb, w.initial = UE, w.intersection = FE, w.intersectionBy = HE, w.intersectionWith = BE, w.invert = nS, w.invertBy = oS, w.invokeMap = qb, w.iteratee = Al, w.keyBy = $b, w.keys = wt, w.keysIn = Jt, w.map = Ya, w.mapKeys = aS, w.mapValues = sS, w.matches = tT, w.matchesProperty = rT, w.memoize = Ja, w.merge = cS, w.mergeWith = Jh, w.method = nT, w.methodOf = oT, w.mixin = Rl, w.negate = Xa, w.nthArg = aT, w.omit = lS, w.omitBy = uS, w.once = i_, w.orderBy = Gb, w.over = sT, w.overArgs = a_, w.overEvery = cT, w.overSome = lT, w.partial = wl, w.partialRight = qh, w.partition = zb, w.pick = dS, w.pickBy = Xh, w.property = ip, w.propertyOf = uT, w.pull = GE, w.pullAll = Nh, w.pullAllBy = zE, w.pullAllWith = WE, w.pullAt = VE, w.range = dT, w.rangeRight = fT, w.rearg = s_, w.reject = jb, w.remove = jE, w.rest = c_, w.reverse = vl, w.sampleSize = Qb, w.set = hS, w.setWith = pS, w.shuffle = Jb, w.slice = YE, w.sortBy = e_, w.sortedUniq = rb, w.sortedUniqBy = nb, w.split = US, w.spread = l_, w.tail = ob, w.take = ib, w.takeRight = ab, w.takeRightWhile = sb, w.takeWhile = cb, w.tap = _b, w.throttle = u_, w.thru = ja, w.toArray = Vh, w.toPairs = Zh, w.toPairsIn = ep, w.toPath = vT, w.toPlainObject = Yh, w.transform = gS, w.unary = d_, w.union = lb, w.unionBy = ub, w.unionWith = db, w.uniq = fb, w.uniqBy = hb, w.uniqWith = pb, w.unset = mS, w.unzip = yl, w.unzipWith = Oh, w.update = vS, w.updateWith = yS, w.values = Ko, w.valuesIn = CS, w.without = gb, w.words = np, w.wrap = f_, w.xor = mb, w.xorBy = vb, w.xorWith = yb, w.zip = Cb, w.zipObject = wb, w.zipObjectDeep = Eb, w.zipWith = bb, w.entries = Zh, w.entriesIn = ep, w.extend = Qh, w.extendWith = ts, Rl(w, w), w.add = CT, w.attempt = op, w.camelCase = _S, w.capitalize = tp, w.ceil = wT, w.clamp = wS, w.clone = p_, w.cloneDeep = m_, w.cloneDeepWith = v_, w.cloneWith = g_, w.conformsTo = y_, w.deburr = rp, w.defaultTo = XS, w.divide = ET, w.endsWith = SS, w.eq = Br, w.escape = TS, w.escapeRegExp = IS, w.every = Mb, w.find = Lb, w.findIndex = Ah, w.findKey = j_, w.findLast = Db, w.findLastIndex = Rh, w.findLastKey = Y_, w.floor = bT, w.forEach = xh, w.forEachRight = Lh, w.forIn = Q_, w.forInRight = J_, w.forOwn = X_, w.forOwnRight = Z_, w.get = _l, w.gt = C_, w.gte = w_, w.has = rS, w.hasIn = Sl, w.head = Ph, w.identity = Xt, w.includes = Kb, w.indexOf = DE, w.inRange = ES, w.invoke = iS, w.isArguments = ao, w.isArray = Ae, w.isArrayBuffer = E_, w.isArrayLike = Qt, w.isArrayLikeObject = dt, w.isBoolean = b_, w.isBuffer = Hn, w.isDate = __, w.isElement = S_, w.isEmpty = T_, w.isEqual = I_, w.isEqualWith = A_, w.isError = El, w.isFinite = R_, w.isFunction = mn, w.isInteger = $h, w.isLength = Za, w.isMap = Gh, w.isMatch = k_, w.isMatchWith = P_, w.isNaN = N_, w.isNative = O_, w.isNil = x_, w.isNull = M_, w.isNumber = zh, w.isObject = it, w.isObjectLike = at, w.isPlainObject = Pi, w.isRegExp = bl, w.isSafeInteger = L_, w.isSet = Wh, w.isString = es, w.isSymbol = ur, w.isTypedArray = Bo, w.isUndefined = D_, w.isWeakMap = U_, w.isWeakSet = F_, w.join = KE, w.kebabCase = AS, w.last = Ir, w.lastIndexOf = qE, w.lowerCase = RS, w.lowerFirst = kS, w.lt = H_, w.lte = B_, w.max = _T, w.maxBy = ST, w.mean = TT, w.meanBy = IT, w.min = AT, w.minBy = RT, w.stubArray = Pl, w.stubFalse = Nl, w.stubObject = hT, w.stubString = pT, w.stubTrue = gT, w.multiply = kT, w.nth = $E, w.noConflict = iT, w.noop = kl, w.now = Qa, w.pad = PS, w.padEnd = NS, w.padStart = OS, w.parseInt = MS, w.random = bS, w.reduce = Wb, w.reduceRight = Vb, w.repeat = xS, w.replace = LS, w.result = fS, w.round = PT, w.runInContext = M, w.sample = Yb, w.size = Xb, w.snakeCase = DS, w.some = Zb, w.sortedIndex = QE, w.sortedIndexBy = JE, w.sortedIndexOf = XE, w.sortedLastIndex = ZE, w.sortedLastIndexBy = eb, w.sortedLastIndexOf = tb, w.startCase = FS, w.startsWith = HS, w.subtract = NT, w.sum = OT, w.sumBy = MT, w.template = BS, w.times = mT, w.toFinite = vn, w.toInteger = Ne, w.toLength = jh, w.toLower = KS, w.toNumber = Ar, w.toSafeInteger = K_, w.toString = Ge, w.toUpper = qS, w.trim = $S, w.trimEnd = GS, w.trimStart = zS, w.truncate = WS, w.unescape = VS, w.uniqueId = yT, w.upperCase = jS, w.upperFirst = Tl, w.each = xh, w.eachRight = Lh, w.first = Ph, Rl(w, function() {
        var i = {};
        return Qr(w, function(c, d) {
          Ve.call(w.prototype, d) || (i[d] = c);
        }), i;
      }(), { chain: !1 }), w.VERSION = n, Er(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
        w[i].placeholder = w;
      }), Er(["drop", "take"], function(i, c) {
        De.prototype[i] = function(d) {
          d = d === t ? 1 : vt(Ne(d), 0);
          var g = this.__filtered__ && !c ? new De(this) : this.clone();
          return g.__filtered__ ? g.__takeCount__ = Ot(d, g.__takeCount__) : g.__views__.push({
            size: Ot(d, ot),
            type: i + (g.__dir__ < 0 ? "Right" : "")
          }), g;
        }, De.prototype[i + "Right"] = function(d) {
          return this.reverse()[i](d).reverse();
        };
      }), Er(["filter", "map", "takeWhile"], function(i, c) {
        var d = c + 1, g = d == oe || d == Y;
        De.prototype[i] = function(y) {
          var b = this.clone();
          return b.__iteratees__.push({
            iteratee: ge(y, 3),
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
          return Si(d, i, c);
        });
      }), De.prototype.reject = function(i) {
        return this.filter(Xa(ge(i)));
      }, De.prototype.slice = function(i, c) {
        i = Ne(i);
        var d = this;
        return d.__filtered__ && (i > 0 || c < 0) ? new De(d) : (i < 0 ? d = d.takeRight(-i) : i && (d = d.drop(i)), c !== t && (c = Ne(c), d = c < 0 ? d.dropRight(-c) : d.take(c - i)), d);
      }, De.prototype.takeRightWhile = function(i) {
        return this.reverse().takeWhile(i).reverse();
      }, De.prototype.toArray = function() {
        return this.take(ot);
      }, Qr(De.prototype, function(i, c) {
        var d = /^(?:filter|find|map|reject)|While$/.test(c), g = /^(?:head|last)$/.test(c), y = w[g ? "take" + (c == "last" ? "Right" : "") : c], b = g || /^find/.test(c);
        y && (w.prototype[c] = function() {
          var T = this.__wrapped__, k = g ? [1] : arguments, x = T instanceof De, B = k[0], K = x || Ae(T), W = function(xe) {
            var Fe = y.apply(w, On([xe], k));
            return g && Z ? Fe[0] : Fe;
          };
          K && d && typeof B == "function" && B.length != 1 && (x = K = !1);
          var Z = this.__chain__, de = !!this.__actions__.length, me = b && !Z, Oe = x && !de;
          if (!b && K) {
            T = Oe ? T : new De(this);
            var ve = i.apply(T, k);
            return ve.__actions__.push({ func: ja, args: [W], thisArg: t }), new _r(ve, Z);
          }
          return me && Oe ? i.apply(this, k) : (ve = this.thru(W), me ? g ? ve.value()[0] : ve.value() : ve);
        });
      }), Er(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
        var c = wa[i], d = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru", g = /^(?:pop|shift)$/.test(i);
        w.prototype[i] = function() {
          var y = arguments;
          if (g && !this.__chain__) {
            var b = this.value();
            return c.apply(Ae(b) ? b : [], y);
          }
          return this[d](function(T) {
            return c.apply(Ae(T) ? T : [], y);
          });
        };
      }), Qr(De.prototype, function(i, c) {
        var d = w[c];
        if (d) {
          var g = d.name + "";
          Ve.call(Lo, g) || (Lo[g] = []), Lo[g].push({ name: c, func: d });
        }
      }), Lo[Ka(t, R).name] = [{
        name: "wrapper",
        func: t
      }], De.prototype.clone = VC, De.prototype.reverse = jC, De.prototype.value = YC, w.prototype.at = Sb, w.prototype.chain = Tb, w.prototype.commit = Ib, w.prototype.next = Ab, w.prototype.plant = kb, w.prototype.reverse = Pb, w.prototype.toJSON = w.prototype.valueOf = w.prototype.value = Nb, w.prototype.first = w.prototype.head, vi && (w.prototype[vi] = Rb), w;
    }, Oo = IC();
    Xn ? ((Xn.exports = Oo)._ = Oo, Ac._ = Oo) : _t._ = Oo;
  }).call(Ni);
})(Ds, Ds.exports);
var Sv = Ds.exports;
function It(r) {
  return `Minified Redux error #${r}; visit https://redux.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `;
}
var MN = /* @__PURE__ */ (() => typeof Symbol == "function" && Symbol.observable || "@@observable")(), mg = MN, Gl = () => Math.random().toString(36).substring(7).split("").join("."), xN = {
  INIT: `@@redux/INIT${Gl()}`,
  REPLACE: `@@redux/REPLACE${Gl()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Gl()}`
}, Us = xN;
function Id(r) {
  if (typeof r != "object" || r === null)
    return !1;
  let e = r;
  for (; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(r) === e || Object.getPrototypeOf(r) === null;
}
function Tv(r, e, t) {
  if (typeof r != "function")
    throw new Error(It(2));
  if (typeof e == "function" && typeof t == "function" || typeof t == "function" && typeof arguments[3] == "function")
    throw new Error(It(0));
  if (typeof e == "function" && typeof t > "u" && (t = e, e = void 0), typeof t < "u") {
    if (typeof t != "function")
      throw new Error(It(1));
    return t(Tv)(r, e);
  }
  let n = r, o = e, a = /* @__PURE__ */ new Map(), s = a, l = 0, u = !1;
  function f() {
    s === a && (s = /* @__PURE__ */ new Map(), a.forEach((_, R) => {
      s.set(R, _);
    }));
  }
  function h() {
    if (u)
      throw new Error(It(3));
    return o;
  }
  function p(_) {
    if (typeof _ != "function")
      throw new Error(It(4));
    if (u)
      throw new Error(It(5));
    let R = !0;
    f();
    const I = l++;
    return s.set(I, _), function() {
      if (R) {
        if (u)
          throw new Error(It(6));
        R = !1, f(), s.delete(I), a = null;
      }
    };
  }
  function m(_) {
    if (!Id(_))
      throw new Error(It(7));
    if (typeof _.type > "u")
      throw new Error(It(8));
    if (typeof _.type != "string")
      throw new Error(It(17));
    if (u)
      throw new Error(It(9));
    try {
      u = !0, o = n(o, _);
    } finally {
      u = !1;
    }
    return (a = s).forEach((I) => {
      I();
    }), _;
  }
  function v(_) {
    if (typeof _ != "function")
      throw new Error(It(10));
    n = _, m({
      type: Us.REPLACE
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
          throw new Error(It(11));
        function I() {
          const A = R;
          A.next && A.next(h());
        }
        return I(), {
          unsubscribe: _(I)
        };
      },
      [mg]() {
        return this;
      }
    };
  }
  return m({
    type: Us.INIT
  }), {
    dispatch: m,
    subscribe: p,
    getState: h,
    replaceReducer: v,
    [mg]: C
  };
}
function LN(r) {
  Object.keys(r).forEach((e) => {
    const t = r[e];
    if (typeof t(void 0, {
      type: Us.INIT
    }) > "u")
      throw new Error(It(12));
    if (typeof t(void 0, {
      type: Us.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(It(13));
  });
}
function DN(r) {
  const e = Object.keys(r), t = {};
  for (let a = 0; a < e.length; a++) {
    const s = e[a];
    typeof r[s] == "function" && (t[s] = r[s]);
  }
  const n = Object.keys(t);
  let o;
  try {
    LN(t);
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
        throw l && l.type, new Error(It(14));
      f[p] = C, u = u || C !== v;
    }
    return u = u || n.length !== Object.keys(s).length, u ? f : s;
  };
}
function Fs(...r) {
  return r.length === 0 ? (e) => e : r.length === 1 ? r[0] : r.reduce((e, t) => (...n) => e(t(...n)));
}
function UN(...r) {
  return (e) => (t, n) => {
    const o = e(t, n);
    let a = () => {
      throw new Error(It(15));
    };
    const s = {
      getState: o.getState,
      dispatch: (u, ...f) => a(u, ...f)
    }, l = r.map((u) => u(s));
    return a = Fs(...l)(o.dispatch), {
      ...o,
      dispatch: a
    };
  };
}
function FN(r) {
  return Id(r) && "type" in r && typeof r.type == "string";
}
var Iv = Symbol.for("immer-nothing"), vg = Symbol.for("immer-draftable"), vr = Symbol.for("immer-state");
function $r(r, ...e) {
  throw new Error(
    `[Immer] minified error nr: ${r}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var ci = Object.getPrototypeOf;
function Wn(r) {
  return !!r && !!r[vr];
}
function An(r) {
  var e;
  return r ? Av(r) || Array.isArray(r) || !!r[vg] || !!((e = r.constructor) != null && e[vg]) || ac(r) || sc(r) : !1;
}
var HN = Object.prototype.constructor.toString();
function Av(r) {
  if (!r || typeof r != "object")
    return !1;
  const e = ci(r);
  if (e === null)
    return !0;
  const t = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
  return t === Object ? !0 : typeof t == "function" && Function.toString.call(t) === HN;
}
function ea(r, e) {
  ic(r) === 0 ? Object.entries(r).forEach(([t, n]) => {
    e(t, n, r);
  }) : r.forEach((t, n) => e(n, t, r));
}
function ic(r) {
  const e = r[vr];
  return e ? e.type_ : Array.isArray(r) ? 1 : ac(r) ? 2 : sc(r) ? 3 : 0;
}
function Cu(r, e) {
  return ic(r) === 2 ? r.has(e) : Object.prototype.hasOwnProperty.call(r, e);
}
function Rv(r, e, t) {
  const n = ic(r);
  n === 2 ? r.set(e, t) : n === 3 ? r.add(t) : r[e] = t;
}
function BN(r, e) {
  return r === e ? r !== 0 || 1 / r === 1 / e : r !== r && e !== e;
}
function ac(r) {
  return r instanceof Map;
}
function sc(r) {
  return r instanceof Set;
}
function co(r) {
  return r.copy_ || r.base_;
}
function wu(r, e) {
  if (ac(r))
    return new Map(r);
  if (sc(r))
    return new Set(r);
  if (Array.isArray(r))
    return Array.prototype.slice.call(r);
  if (!e && Av(r))
    return ci(r) ? { ...r } : Object.assign(/* @__PURE__ */ Object.create(null), r);
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
  return Object.create(ci(r), t);
}
function Ad(r, e = !1) {
  return cc(r) || Wn(r) || !An(r) || (ic(r) > 1 && (r.set = r.add = r.clear = r.delete = KN), Object.freeze(r), e && ea(r, (t, n) => Ad(n, !0))), r;
}
function KN() {
  $r(2);
}
function cc(r) {
  return Object.isFrozen(r);
}
var qN = {};
function bo(r) {
  const e = qN[r];
  return e || $r(0, r), e;
}
var ta;
function kv() {
  return ta;
}
function $N(r, e) {
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
function yg(r, e) {
  e && (bo("Patches"), r.patches_ = [], r.inversePatches_ = [], r.patchListener_ = e);
}
function Eu(r) {
  bu(r), r.drafts_.forEach(GN), r.drafts_ = null;
}
function bu(r) {
  r === ta && (ta = r.parent_);
}
function Cg(r) {
  return ta = $N(ta, r);
}
function GN(r) {
  const e = r[vr];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : e.revoked_ = !0;
}
function wg(r, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const t = e.drafts_[0];
  return r !== void 0 && r !== t ? (t[vr].modified_ && (Eu(e), $r(4)), An(r) && (r = Hs(e, r), e.parent_ || Bs(e, r)), e.patches_ && bo("Patches").generateReplacementPatches_(
    t[vr].base_,
    r,
    e.patches_,
    e.inversePatches_
  )) : r = Hs(e, t, []), Eu(e), e.patches_ && e.patchListener_(e.patches_, e.inversePatches_), r !== Iv ? r : void 0;
}
function Hs(r, e, t) {
  if (cc(e))
    return e;
  const n = e[vr];
  if (!n)
    return ea(
      e,
      (o, a) => Eg(r, n, e, o, a, t)
    ), e;
  if (n.scope_ !== r)
    return e;
  if (!n.modified_)
    return Bs(r, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const o = n.copy_;
    let a = o, s = !1;
    n.type_ === 3 && (a = new Set(o), o.clear(), s = !0), ea(
      a,
      (l, u) => Eg(r, n, o, l, u, t, s)
    ), Bs(r, o, !1), t && r.patches_ && bo("Patches").generatePatches_(
      n,
      t,
      r.patches_,
      r.inversePatches_
    );
  }
  return n.copy_;
}
function Eg(r, e, t, n, o, a, s) {
  if (Wn(o)) {
    const l = a && e && e.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Cu(e.assigned_, n) ? a.concat(n) : void 0, u = Hs(r, o, l);
    if (Rv(t, n, u), Wn(u))
      r.canAutoFreeze_ = !1;
    else
      return;
  } else
    s && t.add(o);
  if (An(o) && !cc(o)) {
    if (!r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1)
      return;
    Hs(r, o), (!e || !e.scope_.parent_) && Bs(r, o);
  }
}
function Bs(r, e, t = !1) {
  !r.parent_ && r.immer_.autoFreeze_ && r.canAutoFreeze_ && Ad(e, t);
}
function zN(r, e) {
  const t = Array.isArray(r), n = {
    type_: t ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: e ? e.scope_ : kv(),
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
  let o = n, a = Rd;
  t && (o = [n], a = ra);
  const { revoke: s, proxy: l } = Proxy.revocable(o, a);
  return n.draft_ = l, n.revoke_ = s, l;
}
var Rd = {
  get(r, e) {
    if (e === vr)
      return r;
    const t = co(r);
    if (!Cu(t, e))
      return WN(r, t, e);
    const n = t[e];
    return r.finalized_ || !An(n) ? n : n === zl(r.base_, e) ? (Wl(r), r.copy_[e] = Su(n, r)) : n;
  },
  has(r, e) {
    return e in co(r);
  },
  ownKeys(r) {
    return Reflect.ownKeys(co(r));
  },
  set(r, e, t) {
    const n = Pv(co(r), e);
    if (n != null && n.set)
      return n.set.call(r.draft_, t), !0;
    if (!r.modified_) {
      const o = zl(co(r), e), a = o == null ? void 0 : o[vr];
      if (a && a.base_ === t)
        return r.copy_[e] = t, r.assigned_[e] = !1, !0;
      if (BN(t, o) && (t !== void 0 || Cu(r.base_, e)))
        return !0;
      Wl(r), _u(r);
    }
    return r.copy_[e] === t && // special case: handle new props with value 'undefined'
    (t !== void 0 || e in r.copy_) || // special case: NaN
    Number.isNaN(t) && Number.isNaN(r.copy_[e]) || (r.copy_[e] = t, r.assigned_[e] = !0), !0;
  },
  deleteProperty(r, e) {
    return zl(r.base_, e) !== void 0 || e in r.base_ ? (r.assigned_[e] = !1, Wl(r), _u(r)) : delete r.assigned_[e], r.copy_ && delete r.copy_[e], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(r, e) {
    const t = co(r), n = Reflect.getOwnPropertyDescriptor(t, e);
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
    return ci(r.base_);
  },
  setPrototypeOf() {
    $r(12);
  }
}, ra = {};
ea(Rd, (r, e) => {
  ra[r] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
});
ra.deleteProperty = function(r, e) {
  return ra.set.call(this, r, e, void 0);
};
ra.set = function(r, e, t) {
  return Rd.set.call(this, r[0], e, t, r[0]);
};
function zl(r, e) {
  const t = r[vr];
  return (t ? co(t) : r)[e];
}
function WN(r, e, t) {
  var o;
  const n = Pv(e, t);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = n.get) == null ? void 0 : o.call(r.draft_)
  ) : void 0;
}
function Pv(r, e) {
  if (!(e in r))
    return;
  let t = ci(r);
  for (; t; ) {
    const n = Object.getOwnPropertyDescriptor(t, e);
    if (n)
      return n;
    t = ci(t);
  }
}
function _u(r) {
  r.modified_ || (r.modified_ = !0, r.parent_ && _u(r.parent_));
}
function Wl(r) {
  r.copy_ || (r.copy_ = wu(
    r.base_,
    r.scope_.immer_.useStrictShallowCopy_
  ));
}
var VN = class {
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
        const a = Cg(this), s = Su(e, void 0);
        let l = !0;
        try {
          o = t(s), l = !1;
        } finally {
          l ? Eu(a) : bu(a);
        }
        return yg(a, n), wg(o, a);
      } else if (!e || typeof e != "object") {
        if (o = t(e), o === void 0 && (o = e), o === Iv && (o = void 0), this.autoFreeze_ && Ad(o, !0), n) {
          const a = [], s = [];
          bo("Patches").generateReplacementPatches_(e, o, a, s), n(a, s);
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
    An(r) || $r(8), Wn(r) && (r = Nv(r));
    const e = Cg(this), t = Su(r, void 0);
    return t[vr].isManual_ = !0, bu(e), t;
  }
  finishDraft(r, e) {
    const t = r && r[vr];
    (!t || !t.isManual_) && $r(9);
    const { scope_: n } = t;
    return yg(n, e), wg(void 0, n);
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
    const n = bo("Patches").applyPatches_;
    return Wn(r) ? n(r, e) : this.produce(
      r,
      (o) => n(o, e)
    );
  }
};
function Su(r, e) {
  const t = ac(r) ? bo("MapSet").proxyMap_(r, e) : sc(r) ? bo("MapSet").proxySet_(r, e) : zN(r, e);
  return (e ? e.scope_ : kv()).drafts_.push(t), t;
}
function Nv(r) {
  return Wn(r) || $r(10, r), Ov(r);
}
function Ov(r) {
  if (!An(r) || cc(r))
    return r;
  const e = r[vr];
  let t;
  if (e) {
    if (!e.modified_)
      return e.base_;
    e.finalized_ = !0, t = wu(r, e.scope_.immer_.useStrictShallowCopy_);
  } else
    t = wu(r, !0);
  return ea(t, (n, o) => {
    Rv(t, n, Ov(o));
  }), e && (e.finalized_ = !1), t;
}
var yr = new VN(), Mv = yr.produce;
yr.produceWithPatches.bind(
  yr
);
yr.setAutoFreeze.bind(yr);
yr.setUseStrictShallowCopy.bind(yr);
yr.applyPatches.bind(yr);
yr.createDraft.bind(yr);
yr.finishDraft.bind(yr);
function jN(r, e = `expected a function, instead received ${typeof r}`) {
  if (typeof r != "function")
    throw new TypeError(e);
}
function YN(r, e = `expected an object, instead received ${typeof r}`) {
  if (typeof r != "object")
    throw new TypeError(e);
}
function QN(r, e = "expected all items to be functions, instead received the following types: ") {
  if (!r.every((t) => typeof t == "function")) {
    const t = r.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${e}[${t}]`);
  }
}
var bg = (r) => Array.isArray(r) ? r : [r];
function JN(r) {
  const e = Array.isArray(r[0]) ? r[0] : r;
  return QN(
    e,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), e;
}
function XN(r, e) {
  const t = [], { length: n } = r;
  for (let o = 0; o < n; o++)
    t.push(r[o].apply(null, e));
  return t;
}
var ZN = class {
  constructor(r) {
    this.value = r;
  }
  deref() {
    return this.value;
  }
}, e1 = typeof WeakRef < "u" ? WeakRef : ZN, t1 = 0, _g = 1;
function ls() {
  return {
    s: t1,
    v: void 0,
    o: null,
    p: null
  };
}
function kd(r, e = {}) {
  let t = ls();
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
        _ === void 0 ? (l = ls(), E.set(C, l)) : l = _;
      } else {
        let E = l.p;
        E === null && (l.p = E = /* @__PURE__ */ new Map());
        const _ = E.get(C);
        _ === void 0 ? (l = ls(), E.set(C, l)) : l = _;
      }
    }
    const f = l;
    let h;
    if (l.s === _g ? h = l.v : (h = r.apply(null, arguments), a++), f.s = _g, n) {
      const m = ((p = o == null ? void 0 : o.deref) == null ? void 0 : p.call(o)) ?? o;
      m != null && n(m, h) && (h = m, a !== 0 && a--), o = typeof h == "object" && h !== null || typeof h == "function" ? new e1(h) : h;
    }
    return f.v = h, h;
  }
  return s.clearCache = () => {
    t = ls(), s.resetResultsCount();
  }, s.resultsCount = () => a, s.resetResultsCount = () => {
    a = 0;
  }, s;
}
function xv(r, ...e) {
  const t = typeof r == "function" ? {
    memoize: r,
    memoizeOptions: e
  } : r, n = (...o) => {
    let a = 0, s = 0, l, u = {}, f = o.pop();
    typeof f == "object" && (u = f, f = o.pop()), jN(
      f,
      `createSelector expects an output function after the inputs, but received: [${typeof f}]`
    );
    const h = {
      ...t,
      ...u
    }, {
      memoize: p,
      memoizeOptions: m = [],
      argsMemoize: v = kd,
      argsMemoizeOptions: C = [],
      devModeChecks: E = {}
    } = h, _ = bg(m), R = bg(C), I = JN(o), S = p(function() {
      return a++, f.apply(
        null,
        arguments
      );
    }, ..._), A = v(function() {
      s++;
      const L = XN(
        I,
        arguments
      );
      return l = S.apply(null, L), l;
    }, ...R);
    return Object.assign(A, {
      resultFunc: f,
      memoizedResultFunc: S,
      dependencies: I,
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
var lc = /* @__PURE__ */ xv(kd), r1 = Object.assign(
  (r, e = lc) => {
    YN(
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
  { withTypes: () => r1 }
);
function Lv(r) {
  return ({ dispatch: t, getState: n }) => (o) => (a) => typeof a == "function" ? a(t, n, r) : o(a);
}
var n1 = Lv(), o1 = Lv, i1 = (...r) => {
  const e = xv(...r), t = Object.assign((...n) => {
    const o = e(...n), a = (s, ...l) => o(Wn(s) ? Nv(s) : s, ...l);
    return Object.assign(a, o), a;
  }, {
    withTypes: () => t
  });
  return t;
};
i1(kd);
var a1 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Fs : Fs.apply(null, arguments);
}, s1 = (r) => r && typeof r.match == "function";
function Sn(r, e) {
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
  return t.toString = () => `${r}`, t.type = r, t.match = (n) => FN(n) && n.type === r, t;
}
var Dv = class Fi extends Array {
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, Fi.prototype);
  }
  static get [Symbol.species]() {
    return Fi;
  }
  concat(...e) {
    return super.concat.apply(this, e);
  }
  prepend(...e) {
    return e.length === 1 && Array.isArray(e[0]) ? new Fi(...e[0].concat(this)) : new Fi(...e.concat(this));
  }
};
function Sg(r) {
  return An(r) ? Mv(r, () => {
  }) : r;
}
function Tg(r, e, t) {
  if (r.has(e)) {
    let o = r.get(e);
    return t.update && (o = t.update(o, e, r), r.set(e, o)), o;
  }
  if (!t.insert)
    throw new Error(nr(10));
  const n = t.insert(e, r);
  return r.set(e, n), n;
}
function c1(r) {
  return typeof r == "boolean";
}
var l1 = () => function(e) {
  const {
    thunk: t = !0,
    immutableCheck: n = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: a = !0
  } = e ?? {};
  let s = new Dv();
  return t && (c1(t) ? s.push(n1) : s.push(o1(t.extraArgument))), s;
}, u1 = "RTK_autoBatch", Uv = (r) => (e) => {
  setTimeout(e, r);
}, d1 = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Uv(10), f1 = (r = {
  type: "raf"
}) => (e) => (...t) => {
  const n = e(...t);
  let o = !0, a = !1, s = !1;
  const l = /* @__PURE__ */ new Set(), u = r.type === "tick" ? queueMicrotask : r.type === "raf" ? d1 : r.type === "callback" ? r.queueNotification : Uv(r.timeout), f = () => {
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
        return o = !((p = h == null ? void 0 : h.meta) != null && p[u1]), a = !o, a && (s || (s = !0, u(f))), n.dispatch(h);
      } finally {
        o = !0;
      }
    }
  });
}, h1 = (r) => function(t) {
  const {
    autoBatch: n = !0
  } = t ?? {};
  let o = new Dv(r);
  return n && o.push(f1(typeof n == "object" ? n : void 0)), o;
}, p1 = !0;
function g1(r) {
  const e = l1(), {
    reducer: t = void 0,
    middleware: n,
    devTools: o = !0,
    preloadedState: a = void 0,
    enhancers: s = void 0
  } = r || {};
  let l;
  if (typeof t == "function")
    l = t;
  else if (Id(t))
    l = DN(t);
  else
    throw new Error(nr(1));
  let u;
  typeof n == "function" ? u = n(e) : u = e();
  let f = Fs;
  o && (f = a1({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !p1,
    ...typeof o == "object" && o
  }));
  const h = UN(...u), p = h1(h);
  let m = typeof s == "function" ? s(p) : p();
  const v = f(...m);
  return Tv(l, a, v);
}
function Fv(r) {
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
function m1(r) {
  return typeof r == "function";
}
function v1(r, e) {
  let [t, n, o] = Fv(e), a;
  if (m1(r))
    a = () => Sg(r());
  else {
    const l = Sg(r);
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
            return Mv(h, (m) => p(m, u));
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
var y1 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Hv = (r = 21) => {
  let e = "", t = r;
  for (; t--; )
    e += y1[Math.random() * 64 | 0];
  return e;
}, C1 = (r, e) => s1(r) ? r.match(e) : r(e);
function w1(...r) {
  return (e) => r.some((t) => C1(t, e));
}
var E1 = ["name", "message", "stack", "code"], Vl = class {
  constructor(r, e) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    zt(this, "_type");
    this.payload = r, this.meta = e;
  }
}, Ig = class {
  constructor(r, e) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    zt(this, "_type");
    this.payload = r, this.meta = e;
  }
}, b1 = (r) => {
  if (typeof r == "object" && r !== null) {
    const e = {};
    for (const t of E1)
      typeof r[t] == "string" && (e[t] = r[t]);
    return e;
  }
  return {
    message: String(r)
  };
}, Io = /* @__PURE__ */ (() => {
  function r(e, t, n) {
    const o = Sn(e + "/fulfilled", (u, f, h, p) => ({
      payload: u,
      meta: {
        ...p || {},
        arg: h,
        requestId: f,
        requestStatus: "fulfilled"
      }
    })), a = Sn(e + "/pending", (u, f, h) => ({
      payload: void 0,
      meta: {
        ...h || {},
        arg: f,
        requestId: u,
        requestStatus: "pending"
      }
    })), s = Sn(e + "/rejected", (u, f, h, p, m) => ({
      payload: p,
      error: (n && n.serializeError || b1)(u || "Rejected"),
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
        const m = n != null && n.idGenerator ? n.idGenerator(u) : Hv(), v = new AbortController();
        let C, E;
        function _(I) {
          E = I, v.abort();
        }
        const R = async function() {
          var A, O;
          let I;
          try {
            let L = (A = n == null ? void 0 : n.condition) == null ? void 0 : A.call(n, u, {
              getState: h,
              extra: p
            });
            if (S1(L) && (L = await L), L === !1 || v.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const q = new Promise((D, Q) => {
              C = () => {
                Q({
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
            }))), I = await Promise.race([q, Promise.resolve(t(u, {
              dispatch: f,
              getState: h,
              extra: p,
              requestId: m,
              signal: v.signal,
              abort: _,
              rejectWithValue: (D, Q) => new Vl(D, Q),
              fulfillWithValue: (D, Q) => new Ig(D, Q)
            })).then((D) => {
              if (D instanceof Vl)
                throw D;
              return D instanceof Ig ? o(D.payload, m, u, D.meta) : o(D, m, u);
            })]);
          } catch (L) {
            I = L instanceof Vl ? s(null, m, u, L.payload, L.meta) : s(L, m, u);
          } finally {
            C && v.signal.removeEventListener("abort", C);
          }
          return n && !n.dispatchConditionRejection && s.match(I) && I.meta.condition || f(I), I;
        }();
        return Object.assign(R, {
          abort: _,
          requestId: m,
          arg: u,
          unwrap() {
            return R.then(_1);
          }
        });
      };
    }
    return Object.assign(l, {
      pending: a,
      rejected: s,
      fulfilled: o,
      settled: w1(s, o),
      typePrefix: e
    });
  }
  return r.withTypes = () => r, r;
})();
function _1(r) {
  if (r.meta && r.meta.rejectedWithValue)
    throw r.payload;
  if (r.error)
    throw r.error;
  return r.payload;
}
function S1(r) {
  return r !== null && typeof r == "object" && typeof r.then == "function";
}
var T1 = Symbol.for("rtk-slice-createasyncthunk");
function I1(r, e) {
  return `${r}/${e}`;
}
function A1({
  creators: r
} = {}) {
  var t;
  const e = (t = r == null ? void 0 : r.asyncThunk) == null ? void 0 : t[T1];
  return function(o) {
    const {
      name: a,
      reducerPath: s = a
    } = o;
    if (!a)
      throw new Error(nr(11));
    typeof process < "u";
    const l = (typeof o.reducers == "function" ? o.reducers(k1()) : o.reducers) || {}, u = Object.keys(l), f = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, h = {
      addCase(S, A) {
        const O = typeof S == "string" ? S : S.type;
        if (!O)
          throw new Error(nr(12));
        if (O in f.sliceCaseReducersByType)
          throw new Error(nr(13));
        return f.sliceCaseReducersByType[O] = A, h;
      },
      addMatcher(S, A) {
        return f.sliceMatchers.push({
          matcher: S,
          reducer: A
        }), h;
      },
      exposeAction(S, A) {
        return f.actionCreators[S] = A, h;
      },
      exposeCaseReducer(S, A) {
        return f.sliceCaseReducersByName[S] = A, h;
      }
    };
    u.forEach((S) => {
      const A = l[S], O = {
        reducerName: S,
        type: I1(a, S),
        createNotation: typeof o.reducers == "function"
      };
      N1(A) ? M1(O, A, h, e) : P1(O, A, h);
    });
    function p() {
      const [S = {}, A = [], O = void 0] = typeof o.extraReducers == "function" ? Fv(o.extraReducers) : [o.extraReducers], L = {
        ...S,
        ...f.sliceCaseReducersByType
      };
      return v1(o.initialState, (q) => {
        for (let D in L)
          q.addCase(D, L[D]);
        for (let D of f.sliceMatchers)
          q.addMatcher(D.matcher, D.reducer);
        for (let D of A)
          q.addMatcher(D.matcher, D.reducer);
        O && q.addDefaultCase(O);
      });
    }
    const m = (S) => S, v = /* @__PURE__ */ new Map();
    let C;
    function E(S, A) {
      return C || (C = p()), C(S, A);
    }
    function _() {
      return C || (C = p()), C.getInitialState();
    }
    function R(S, A = !1) {
      function O(q) {
        let D = q[S];
        return typeof D > "u" && A && (D = _()), D;
      }
      function L(q = m) {
        const D = Tg(v, A, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Tg(D, q, {
          insert: () => {
            const Q = {};
            for (const [X, le] of Object.entries(o.selectors ?? {}))
              Q[X] = R1(le, q, _, A);
            return Q;
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
    const I = {
      name: a,
      reducer: E,
      actions: f.actionCreators,
      caseReducers: f.sliceCaseReducersByName,
      getInitialState: _,
      ...R(s),
      injectInto(S, {
        reducerPath: A,
        ...O
      } = {}) {
        const L = A ?? s;
        return S.inject({
          reducerPath: L,
          reducer: E
        }, O), {
          ...I,
          ...R(L, !0)
        };
      }
    };
    return I;
  };
}
function R1(r, e, t, n) {
  function o(a, ...s) {
    let l = e(a);
    return typeof l > "u" && n && (l = t()), r(l, ...s);
  }
  return o.unwrapped = r, o;
}
var hi = A1();
function k1() {
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
function P1({
  type: r,
  reducerName: e,
  createNotation: t
}, n, o) {
  let a, s;
  if ("reducer" in n) {
    if (t && !O1(n))
      throw new Error(nr(17));
    a = n.reducer, s = n.prepare;
  } else
    a = n;
  o.addCase(r, a).exposeCaseReducer(e, a).exposeAction(e, s ? Sn(r, s) : Sn(r));
}
function N1(r) {
  return r._reducerDefinitionType === "asyncThunk";
}
function O1(r) {
  return r._reducerDefinitionType === "reducerWithPrepare";
}
function M1({
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
    fulfilled: s || us,
    pending: l || us,
    rejected: u || us,
    settled: f || us
  });
}
function us() {
}
var x1 = (r, e) => {
  if (typeof r != "function")
    throw new Error(nr(32));
}, Pd = "listenerMiddleware", L1 = (r) => {
  let {
    type: e,
    actionCreator: t,
    matcher: n,
    predicate: o,
    effect: a
  } = r;
  if (e)
    o = Sn(e).match;
  else if (t)
    e = t.type, o = t.match;
  else if (n)
    o = n;
  else if (!o)
    throw new Error(nr(21));
  return x1(a), {
    predicate: o,
    type: e,
    effect: a
  };
}, D1 = Object.assign((r) => {
  const {
    type: e,
    predicate: t,
    effect: n
  } = L1(r);
  return {
    id: Hv(),
    effect: n,
    type: e,
    predicate: t,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(nr(22));
    }
  };
}, {
  withTypes: () => D1
}), U1 = Object.assign(Sn(`${Pd}/add`), {
  withTypes: () => U1
});
Sn(`${Pd}/removeAll`);
var F1 = Object.assign(Sn(`${Pd}/remove`), {
  withTypes: () => F1
});
function nr(r) {
  return `Minified Redux Toolkit error #${r}; visit https://redux-toolkit.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `;
}
const Bv = {
  test: "https://test.bsdd.buildingsmart.org",
  production: "https://api.bsdd.buildingsmart.org"
}, H1 = {
  bsddApiEnvironment: "test",
  mainDictionary: null,
  filterDictionaries: [],
  language: "EN"
}, Kv = hi({
  name: "settings",
  initialState: H1,
  reducers: {
    setSettings: (r, e) => {
      r.bsddApiEnvironment = e.payload.bsddApiEnvironment, r.mainDictionary = e.payload.mainDictionary, r.filterDictionaries = e.payload.filterDictionaries, r.language = e.payload.language;
    },
    setBsddApiEnvironment: (r, e) => {
      r.bsddApiEnvironment = e.payload;
    },
    setMainDictionary: (r, e) => {
      r.mainDictionary = e.payload;
    },
    setFilterDictionaries: (r, e) => {
      r.filterDictionaries = e.payload;
    },
    setLanguage: (r, e) => {
      r.language = e.payload;
    }
  }
}), qv = (r) => {
  const e = r.settings.bsddApiEnvironment;
  return e !== null ? Bv[e] : null;
}, uc = lc(
  (r) => r.settings.mainDictionary,
  (r) => r.settings.filterDictionaries,
  (r, e) => r ? [r, ...e] : e
), B1 = lc(
  uc,
  (r) => r.map((e) => e.ifcClassification.location)
), $v = (r) => r.settings.mainDictionary, { setSettings: K1, setBsddApiEnvironment: SO, setMainDictionary: TO, setFilterDictionaries: IO, setLanguage: AO } = Kv.actions, q1 = Kv.reducer, Ag = (r) => Sv.groupBy(r, "dictionaryUri");
async function $1(r, e, t) {
  try {
    const n = await r.api.classV1List({ Uri: e, IncludeClassRelations: !0 }, t);
    if (n.status !== 200)
      throw new Error(`API request failed with status ${n.status}`);
    return n.data;
  } catch (n) {
    return console.error("Error fetching classification:", n), null;
  }
}
function G1({ api: r, activeClassificationUri: e, setClassifications: t, domains: n }) {
  const o = vo(uc), a = vo(B1), [s, l] = pe(0), [u, f] = pe({}), [h, p] = pe([]), [m, v] = pe(
    () => Ag(h)
  ), [C, E] = pe({}), _ = ze(
    (I) => {
      const S = {
        headers: { Accept: "text/plain" }
      }, A = new Promise(function(O) {
        const L = {
          Uri: I,
          IncludeClassRelations: !0,
          IncludeClassProperties: !0
        };
        O(
          r.api.classV1List(L, S).then((q) => q.status !== 200 ? (console.error(`API request failed with status ${q.status}`), null) : q.data).catch((q) => (console.error("Error fetching classification:", q), null))
        );
      });
      return f((O) => ({
        ...O,
        classificationUri: A
      })), A;
    },
    [r.api]
  );
  ye(() => {
    v(Ag(h));
  }, [h]), ye(() => {
    if (l(0), e) {
      const I = {};
      e && (I[e] = _(e)), f(I);
    }
  }, [e, _]), ye(() => {
    const I = {
      headers: { Accept: "text/plain" }
    };
    l(Object.keys(u).length), s !== Object.keys(u).length && Promise.allSettled(Object.values(u)).then(function(S) {
      const A = S.map((D) => D.status === "fulfilled" ? D.value : null).filter((D) => D !== null);
      S.map(async (D) => {
        if (D.status === "fulfilled") {
          const Q = D.value;
          if (Q && Q.classRelations) {
            const X = {
              ...u
            };
            Q.classRelations.forEach((le) => {
              le.relatedClassUri in Object.keys(u) || (X[le.relatedClassUri] = $1(
                r,
                le.relatedClassUri,
                I
              ));
            }), f(X);
          }
        }
      });
      const O = A.filter(
        (D) => D.dictionaryUri && a.includes(D.dictionaryUri)
      ), L = Object.keys(C).filter((D) => a.includes(D)).reduce((D, Q) => (D[Q] = C[Q], D), {}), q = Sv.groupBy(O, "dictionaryUri");
      Object.entries(q).forEach(([D, Q]) => {
        Q.some((X) => X.uri === L[D]) || (L[D] = Q[0].uri);
      }), E(L), t(O), p(O);
    });
  }, [
    u,
    s,
    C,
    r,
    t,
    o,
    a
  ]), ye(() => {
    t(
      Object.values(C).map((I) => h.find((S) => S.uri === I)).filter((I) => I !== void 0)
    );
  }, [C, h, t]);
  const R = ze(
    (I) => (S) => {
      if (!S)
        return;
      if (!h.find(
        (L) => L.uri === S
      )) {
        console.log(`Selected classification '${S}' not found`);
        return;
      }
      const O = { ...C, [I]: S };
      E(O);
    },
    [h, C]
  );
  return /* @__PURE__ */ Re.jsx(Re.Fragment, { children: Object.entries(m).map(([I, S]) => /* @__PURE__ */ Re.jsx(
    oc,
    {
      mb: "sm",
      label: n[I] ? n[I].name : "",
      data: S.map((A) => ({
        value: A.uri,
        label: A.name
      })),
      value: C[I],
      readOnly: S.length === 1,
      variant: S.length === 1 ? "filled" : "default",
      onChange: (A) => R(I)(A)
    },
    I
  )) });
}
const z1 = {
  bsddApiEnvironment: "test",
  mainDictionary: null,
  filterDictionaries: [],
  language: "EN"
}, Gv = hi({
  name: "settings",
  initialState: z1,
  reducers: {
    setSettings: (r, e) => {
      r.bsddApiEnvironment = e.payload.bsddApiEnvironment, r.mainDictionary = e.payload.mainDictionary, r.filterDictionaries = e.payload.filterDictionaries, r.language = e.payload.language;
    },
    setBsddApiEnvironment: (r, e) => {
      r.bsddApiEnvironment = e.payload;
    },
    setMainDictionary: (r, e) => {
      r.mainDictionary = e.payload;
    },
    setFilterDictionaries: (r, e) => {
      r.filterDictionaries = e.payload;
    },
    setLanguage: (r, e) => {
      r.language = e.payload;
    }
  }
}), W1 = (r) => {
  const e = r.settings.bsddApiEnvironment;
  return e !== null ? Bv[e] : null;
};
lc(
  (r) => r.settings.mainDictionary,
  (r) => r.settings.filterDictionaries,
  (r, e) => r ? [r, ...e] : e
);
Gv.actions;
Gv.reducer;
const zv = 500, V1 = 500;
let Xo = null, jl = {};
const Rg = {
  classes: {},
  dictionaries: {},
  dictionaryClasses: {},
  loaded: !1
}, j1 = (r) => {
  const e = W1(r);
  return e && (!Xo || Xo.baseUrl !== e) && (Xo = new si(e)), Xo;
}, kg = Io("bsdd/fetchDictionaries", (r, e) => {
  if (console.log("fetchDictionaries", r), !r)
    return e.rejectWithValue("No bsddApiEnvironment provided");
  const t = new si(r), n = V1;
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
}), Wv = Io(
  "bsdd/fetchDictionaryClasses",
  async (r, { getState: e, dispatch: t }) => {
    const n = e();
    if (n.bsdd.dictionaryClasses[r])
      return n.bsdd.dictionaryClasses[r];
    if (jl[r])
      return await jl[r];
    const o = (async () => {
      const s = j1(e());
      if (!s)
        throw new Error("BsddApi is not initialized");
      const l = [];
      let u = 0, f;
      for (; ; ) {
        const h = await Y1(s, r, u), p = h.classes ?? [];
        if (l.push(...p), u === 0 && (f = h.classesTotalCount, f == null))
          throw new Error("Total count is null or undefined");
        if (f != null && l.length >= f)
          break;
        u += zv;
      }
      return t({ type: "bsdd/addDictionaryClasses", payload: { uri: r, classes: l } }), l;
    })();
    return jl[r] = o, await o;
  }
), Vv = hi({
  name: "bsdd",
  initialState: Rg,
  reducers: {
    resetState: () => Rg,
    addClass: (r, e) => {
      r.classes[e.payload.uri] = e.payload.data;
    },
    addDictionaryClasses: (r, e) => {
      r.dictionaryClasses[e.payload.uri] = e.payload.data;
    }
  },
  extraReducers: (r) => {
    r.addCase(kg.pending, (e) => {
      e.loaded = !1;
    }).addCase(kg.fulfilled, (e, t) => {
      console.log("fetch dictionaries fulfilled", t.payload), e.dictionaries = t.payload, e.loaded = !0;
    }).addCase(Wv.rejected, (e, t) => {
      console.error("fetch dictionary classes failed", t.error), e.loaded = !0;
    });
  }
});
Io("bsdd/fetchClass", async (r, { getState: e, dispatch: t }) => {
  const n = e();
  if (n.bsdd.classes[r])
    return n.bsdd.classes[r];
  if (!Xo)
    throw new Error("BsddApi is not initialized");
  const o = await Xo.api.classV1List({
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
async function Y1(r, e, t) {
  const n = await r.api.dictionaryV1ClassesList({
    Uri: e,
    UseNestedClasses: !1,
    Limit: zv,
    Offset: t
    // languageCode: languageCode || undefined,
  });
  if (!n.ok)
    throw new Error(`HTTP error! status: ${n.status}`);
  return n.data;
}
const Q1 = (r, e) => r.bsdd.dictionaries[e], J1 = (r, e) => r.bsdd.dictionaryClasses[e];
Vv.actions;
Vv.reducer;
const X1 = async (r, e, t) => {
  if (!(r != null && r.location))
    return null;
  const n = J1(e, r.location);
  if (n)
    return n;
  const o = await t(Wv(r.location));
  return o.payload ? o.payload : (console.error("Failed to fetch dictionary classes"), null);
};
function Z1(r, e) {
  return r.identification ? e.find((t) => t.code === r.identification) : e.find((t) => t.name === r.name);
}
function zo(r, e) {
  return console.error(r), { ifcClassificationReference: e, validationState: "invalid", message: r };
}
async function eO(r, e, t) {
  if (r.location)
    return { ifcClassificationReference: r, validationState: "valid", message: "Location is already set" };
  if (!r.referencedSource || !r.referencedSource.location)
    return zo(
      "Cannot patch IfcClassificationReference: missing referencedSource or its location",
      r
    );
  const n = await X1(r.referencedSource, t, e);
  if (!n)
    return zo("Failed to fetch classes for the referencedSource location", r);
  const o = Z1(r, n);
  if (!o)
    return zo(
      "Failed to find a match for the IfcClassificationReference name or code in the classes",
      r
    );
  if (!o.uri)
    return zo("Failed to find a URI for the matched class", r);
  const { uri: a, code: s, name: l } = o, u = {
    ...r,
    location: a ?? void 0,
    identification: s ?? void 0,
    name: l ?? void 0
  };
  if (!u.referencedSource || !u.referencedSource.location)
    return zo("referencedSource or its location is missing", u);
  const f = Q1(t, u.referencedSource.location);
  return f ? (u.referencedSource = _v(f), {
    ifcClassificationReference: u,
    validationState: "fixed",
    message: null
  }) : zo("Failed to find a matching dictionary for the matched class", u);
}
const tO = {
  ifcEntities: []
}, jv = hi({
  name: "ifcData",
  initialState: tO,
  reducers: {
    setIfcData: (r, e) => {
      r.ifcEntities = e.payload;
    }
  }
}), { setIfcData: Yv } = jv.actions;
Io(
  "ifcData/setValidated",
  async (r, { dispatch: e, getState: t }) => {
    const n = t(), o = await Promise.all(
      r.map(async (a) => {
        const { hasAssociations: s } = a;
        if (s) {
          const l = (await Promise.all(
            s.map(async (u) => {
              if (u.type === "IfcClassificationReference") {
                const { validationState: f, ifcClassificationReference: h, message: p } = await eO(u, e, n);
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
    e(Yv(o));
  }
);
const rO = jv.reducer;
function nO(r) {
  const { label: e, value: t, setValue: n, disabled: o } = r, [a, s] = pe(), [l, u] = pe(void 0), f = (h) => {
    h.target.indeterminate = !1, n(h.target.checked);
  };
  return ye(() => {
    t === !0 ? (s(!0), u(!1)) : t === !1 ? (s(!1), u(!1)) : t === void 0 && (s(!1), u(!0));
  }, [t]), /* @__PURE__ */ Re.jsx(
    rc,
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
function oO({ propertySet: r, property: e, propertyIndex: t, propertySets: n, setPropertySets: o }) {
  const [a, s] = pe(), l = e, u = r, f = n, h = o;
  return ye(() => {
    switch (l.type) {
      case "IfcPropertySingleValue": {
        l.nominalValue.type === "IfcBoolean" ? s(
          /* @__PURE__ */ Re.jsx(
            nO,
            {
              label: l.name,
              disabled: !1,
              value: l.nominalValue.value,
              setValue: (p) => {
                const m = { ...f }, v = { ...u };
                if (v.name) {
                  const C = { ...l };
                  C.nominalValue.value = p;
                  const E = v.hasProperties.findIndex(
                    (_) => _.name === l.name
                  );
                  E != -1 && (v.hasProperties[E] = C, m[v.name] = v, h(m));
                }
              }
            }
          )
        ) : s(
          /* @__PURE__ */ Re.jsx(
            mo,
            {
              label: l.name,
              placeholder: l.nominalValue.value,
              value: l.nominalValue.value,
              onChange: (p) => {
                const m = { ...f }, v = { ...u };
                if (v.name) {
                  const C = { ...l };
                  C.nominalValue.value = p.target.value;
                  const E = v.hasProperties.findIndex(
                    (_) => _.name === l.name
                  );
                  E != -1 && (v.hasProperties[E] = C, m[v.name] = v, h(m));
                }
              }
            }
          )
        );
        break;
      }
      case "IfcPropertyEnumeratedValue": {
        s(
          /* @__PURE__ */ Re.jsx(
            oc,
            {
              label: l.name,
              value: l.enumerationValues,
              onChange: (p) => {
                const m = { ...f }, v = { ...u };
                if (v.name) {
                  const C = { ...l };
                  C.enumerationValues = [p];
                  const E = v.hasProperties.findIndex(
                    (_) => _.name === l.name
                  );
                  E != -1 && (v.hasProperties[E] = C, m[v.name] = v, h(m));
                }
              },
              data: l.enumerationReference.enumerationValues.map((p, m) => ({
                value: p,
                label: p
              }))
            }
          )
        );
        break;
      }
      default: {
        s(/* @__PURE__ */ Re.jsx(mo, { placeholder: l.name, value: "{ifcProperty.nominalValue}" }));
        break;
      }
    }
  }, [l, u, s, f, h]), a;
}
function iO(r, e) {
  switch (r) {
    case "Boolean": {
      const t = {
        type: "IfcBoolean"
      };
      switch (e) {
        case !0:
        case "TRUE":
          return t.value = !0, t;
        case !1:
        case "FALSE":
          return t.value = !1, t;
        default:
          return t.value = void 0, t;
      }
    }
    case "Character": {
      const t = {
        type: "default"
      };
      return e && (t.value = e), t;
    }
    case "Integer": {
      const t = {
        type: "IfcInteger"
      };
      return e && (t.value = e), t;
    }
    case "Real": {
      const t = {
        type: "IfcReal"
      };
      return e && (t.value = e), t;
    }
    case "String": {
      const t = {
        type: "default"
      };
      return e && (t.value = e), t;
    }
    case "Time": {
      const t = {
        type: "IfcDate"
      };
      return e && (t.value = e), t;
    }
    default: {
      const t = {
        type: "default"
      };
      return e && (t.value = e), t;
    }
  }
}
function aO(r) {
  if (r.allowedValues) {
    const t = {
      type: "IfcPropertyEnumeratedValue",
      name: r.name,
      enumerationReference: {
        type: "IfcPropertyEnumeration",
        name: r.name,
        enumerationValues: r.allowedValues.map((n) => n.value)
      }
    };
    return r.propertyUri && (t.specification = r.propertyUri), t;
  }
  const e = {
    type: "IfcPropertySingleValue",
    name: r.name
  };
  return r.propertyUri && (e.specification = r.propertyUri), e.nominalValue = iO(
    r.dataType,
    r.predefinedValue
  ), e;
}
function sO(r) {
  Ru();
  const { classifications: e } = r, { propertySets: t } = r, { setPropertySets: n } = r, { recursiveMode: o } = r;
  return ye(() => {
    const a = {};
    (o ? e : e.slice(0, 1)).forEach((l) => {
      var u;
      (u = l.classProperties) == null || u.forEach((f) => {
        const h = f.propertySet || l.name;
        a[h] || (a[h] = {
          type: "IfcPropertySet",
          name: h,
          hasProperties: []
        }), a[h].hasProperties.push(aO(f));
      });
    }), n(a);
  }, [e, n, o]), /* @__PURE__ */ Re.jsx("div", { children: Ql.toArray(
    Object.values(t).map((a, s) => /* @__PURE__ */ Re.jsx(Et, { children: /* @__PURE__ */ Re.jsxs(Et.Item, { value: a.name || s.toString(), children: [
      /* @__PURE__ */ Re.jsx(Et.Control, { children: a.name }),
      /* @__PURE__ */ Re.jsx(Et.Panel, { children: /* @__PURE__ */ Re.jsx(Td, { children: Ql.toArray(
        a.hasProperties.map((l, u) => /* @__PURE__ */ Re.jsx(
          oO,
          {
            propertySet: a,
            property: l,
            propertyIndex: u,
            propertySets: t,
            setPropertySets: n
          }
        ))
      ) }) })
    ] }, a.name) }))
  ) });
}
const cO = 25;
function lO({ api: r, defaultValue: e, setActiveClassificationUri: t }) {
  var A;
  const [n, o] = pe([]), [a, s] = pe(!1);
  vo(uc);
  const l = vo($v), u = Ke(null), f = Ke(e), [h, p] = pe(f.current), [m, v] = pe(((A = f.current) == null ? void 0 : A.label) || ""), [C] = bA(m, 300), [E, _] = pe(!1), R = ze((O) => {
    v(O);
  }, []), I = ze(
    (O) => {
      const L = n.find((q) => q.value === O);
      L && (p(L), s(!1), _(!0));
    },
    [n]
  ), S = ze(
    (O) => {
      O.key === "Enter" && n[0] && (v(n[0].label), I(n[0].value), u.current && u.current.blur());
    },
    [n, I, u]
  );
  return ye(() => {
    e && !E && (v(e.label), p(e));
  }, [e, h, E]), ye(() => {
    if (C !== "" && l) {
      const O = {
        headers: { Accept: "text/plain" }
      }, L = {
        SearchText: C,
        DictionaryUri: l.ifcClassification.location,
        Limit: cO
      };
      r.api.searchInDictionaryV1List(L, O).then((q) => {
        var Q;
        const D = q.data;
        if (D.count) {
          const X = (Q = D.dictionary) == null ? void 0 : Q.classes;
          X && o(
            X.filter((le) => le.uri && le.name).map(
              (le) => ({
                value: le.uri,
                label: le.name
              })
            )
          );
        }
      });
    } else
      o([]);
  }, [r.api, C, l]), ye(() => {
    u.current && u.current.focus();
  }, []), ye(() => {
    h && t(h.value);
  }, [h, t]), /* @__PURE__ */ Re.jsx(
    bd,
    {
      data: n,
      placeholder: "bSDD search...",
      value: m,
      onChange: R,
      onOptionSubmit: I,
      onKeyDown: S,
      dropdownOpened: a,
      onDropdownOpen: () => s(!0),
      ref: u,
      style: { width: "100%" }
    }
  );
}
const uO = async (r, e) => {
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
function dO() {
  const { t: r } = Ru(), e = PN(), [t, n] = pe(), [o, a] = pe(), [s, l] = pe(), [u, f] = pe(!1), [h, p] = pe({}), [m, v] = pe([]), [C, E] = pe({}), [_, R] = pe(new si("https://test.bsdd.buildingsmart.org")), I = vo($v), [S, A] = pe(null), O = vo(qv), L = vo(uc), q = ze((X) => {
    var ne;
    const le = JSON.stringify(X);
    (ne = window == null ? void 0 : window.bsddBridge) == null || ne.save(le).then((fe) => {
      console.log("Sent to Revit", fe);
    });
  }, []), D = ze(() => {
    var X;
    (X = window == null ? void 0 : window.bsddBridge) == null || X.cancel();
  }, []), Q = (X) => {
    A(X);
  };
  return ye(() => {
    S && (e(K1(S)), A(null));
  }, [S, e]), ye(() => {
    O && R(new si(O));
  }, [O]), ye(() => {
  }, [e]), ye(() => {
    (async () => {
      if (window != null && window.bsddBridge) {
        const le = await window.bsddBridge.loadSettings(), { settings: ne, ifcData: fe } = JSON.parse(le);
        if (e(Yv(fe)), Q(ne), !fe || fe.length === 0)
          return;
        l(fe[0]);
      }
    })();
  }, []), ye(() => {
    var le;
    if (!s || !I)
      return;
    const X = I.ifcClassification.location;
    (le = s.hasAssociations) == null || le.forEach((ne) => {
      var fe;
      if (ne.type === "IfcClassificationReference") {
        const oe = ne;
        if ((fe = oe.referencedSource) != null && fe.location && oe.referencedSource.location === X) {
          if (!oe.location)
            return;
          n(oe.location), a({
            label: oe.name,
            value: oe.location
          });
        }
      }
    });
  }, [I, s]), ye(() => {
    (async () => {
      const ne = (await Promise.all(
        L.map((fe) => uO(_, fe.ifcClassification.location))
      )).reduce((fe, oe) => ({ ...fe, ...oe }), {});
      p(ne);
    })();
  }, [_, L]), /* @__PURE__ */ Re.jsxs(Sd, { children: [
    /* @__PURE__ */ Re.jsx(mo, { type: "hidden", name: "ifcType", id: "ifcType", value: "" }),
    /* @__PURE__ */ Re.jsx(mo, { type: "hidden", name: "name", id: "name", value: "" }),
    /* @__PURE__ */ Re.jsx(mo, { type: "hidden", name: "material", id: "material", value: "" }),
    /* @__PURE__ */ Re.jsx(xs, { mx: "md", mt: "lg", mb: "sm", children: /* @__PURE__ */ Re.jsx(lO, { api: _, defaultValue: o, setActiveClassificationUri: n }) }),
    /* @__PURE__ */ Re.jsxs(Et, { defaultValue: ["Classifications"], multiple: !0, children: [
      /* @__PURE__ */ Re.jsxs(Et.Item, { value: "Classifications", children: [
        /* @__PURE__ */ Re.jsx(Et.Control, { children: /* @__PURE__ */ Re.jsx(Ls, { order: 5, children: r("Classifications") }) }),
        /* @__PURE__ */ Re.jsx(Et.Panel, { children: /* @__PURE__ */ Re.jsx(
          G1,
          {
            api: _,
            activeClassificationUri: t,
            setClassifications: v,
            domains: h
          }
        ) })
      ] }, "Classifications"),
      /* @__PURE__ */ Re.jsxs(Et.Item, { value: "Propertysets", children: [
        /* @__PURE__ */ Re.jsx(Et.Control, { children: /* @__PURE__ */ Re.jsx(Ls, { order: 5, children: r("Propertysets") }) }),
        /* @__PURE__ */ Re.jsx(Et.Panel, { children: /* @__PURE__ */ Re.jsx(
          sO,
          {
            classifications: m,
            propertySets: C,
            setPropertySets: E,
            recursiveMode: u
          }
        ) })
      ] }, "Propertysets")
    ] }),
    /* @__PURE__ */ Re.jsxs(xs, { my: "sm", justify: "center", children: [
      /* @__PURE__ */ Re.jsx(
        ON,
        {
          callback: q,
          domains: h,
          classifications: m,
          propertySetMap: C,
          ifcEntity: s
        }
      ),
      /* @__PURE__ */ Re.jsx(ha, { fullWidth: !0, variant: "light", color: "gray", onClick: D, children: r("Cancel") })
    ] })
  ] });
}
function fO() {
  const [r, e] = pe(null);
  return ye(() => {
    const t = new rA(AN);
    e(t);
  }, []), r ? /* @__PURE__ */ Re.jsx(ym, { theme: IN, children: /* @__PURE__ */ Re.jsx(dO, {}) }) : /* @__PURE__ */ Re.jsx("div", { children: "Loading..." });
}
const Qv = 500, hO = 500;
let Zo = null, Yl = {};
const Pg = {
  classes: {},
  dictionaries: {},
  dictionaryClasses: {},
  loaded: !1
}, pO = (r) => {
  const e = qv(r);
  return e && (!Zo || Zo.baseUrl !== e) && (Zo = new si(e)), Zo;
}, Ng = Io("bsdd/fetchDictionaries", (r, e) => {
  if (console.log("fetchDictionaries", r), !r)
    return e.rejectWithValue("No bsddApiEnvironment provided");
  const t = new si(r), n = hO;
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
}), gO = Io(
  "bsdd/fetchDictionaryClasses",
  async (r, { getState: e, dispatch: t }) => {
    const n = e();
    if (n.bsdd.dictionaryClasses[r])
      return n.bsdd.dictionaryClasses[r];
    if (Yl[r])
      return await Yl[r];
    const o = (async () => {
      const s = pO(e());
      if (!s)
        throw new Error("BsddApi is not initialized");
      const l = [];
      let u = 0, f;
      for (; ; ) {
        const h = await mO(s, r, u), p = h.classes ?? [];
        if (l.push(...p), u === 0 && (f = h.classesTotalCount, f == null))
          throw new Error("Total count is null or undefined");
        if (f != null && l.length >= f)
          break;
        u += Qv;
      }
      return t({ type: "bsdd/addDictionaryClasses", payload: { uri: r, classes: l } }), l;
    })();
    return Yl[r] = o, await o;
  }
), Jv = hi({
  name: "bsdd",
  initialState: Pg,
  reducers: {
    resetState: () => Pg,
    addClass: (r, e) => {
      r.classes[e.payload.uri] = e.payload.data;
    },
    addDictionaryClasses: (r, e) => {
      r.dictionaryClasses[e.payload.uri] = e.payload.data;
    }
  },
  extraReducers: (r) => {
    r.addCase(Ng.pending, (e) => {
      e.loaded = !1;
    }).addCase(Ng.fulfilled, (e, t) => {
      console.log("fetch dictionaries fulfilled", t.payload), e.dictionaries = t.payload, e.loaded = !0;
    }).addCase(gO.rejected, (e, t) => {
      console.error("fetch dictionary classes failed", t.error), e.loaded = !0;
    });
  }
});
Io("bsdd/fetchClass", async (r, { getState: e, dispatch: t }) => {
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
async function mO(r, e, t) {
  const n = await r.api.dictionaryV1ClassesList({
    Uri: e,
    UseNestedClasses: !1,
    Limit: Qv,
    Offset: t
    // languageCode: languageCode || undefined,
  });
  if (!n.ok)
    throw new Error(`HTTP error! status: ${n.status}`);
  return n.data;
}
Jv.actions;
const vO = Jv.reducer, yO = {
  name: void 0,
  description: void 0,
  tag: void 0,
  predefinedType: void 0,
  isDefinedBy: [],
  hasAssociations: []
}, Xv = hi({
  name: "ifcEntity",
  initialState: yO,
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
Xv.actions;
const CO = Xv.reducer, wO = g1({
  reducer: {
    settings: q1,
    ifcData: rO,
    ifcEntity: CO,
    bsdd: vO
  }
});
Jl.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ Re.jsx(P.StrictMode, { children: /* @__PURE__ */ Re.jsx(f0, { store: wO, children: /* @__PURE__ */ Re.jsx(fO, {}) }) })
);
