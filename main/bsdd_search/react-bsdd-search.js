var jT = Object.defineProperty;
var YT = (r, e, t) => e in r ? jT(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Vt = (r, e, t) => (YT(r, typeof e != "symbol" ? e + "" : e, t), t);
import * as De from "react";
import k, { createContext as To, useContext as jn, useState as Ee, useRef as Ke, useEffect as ve, useMemo as ps, useCallback as ze, useLayoutEffect as Ru, useId as Fg, forwardRef as ut, cloneElement as Gs, Children as Jl, createElement as up } from "react";
import * as QT from "react-dom";
import JT, { flushSync as XT, createPortal as ZT } from "react-dom";
var Ri = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function e0(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Hg = { exports: {} }, zs = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var t0 = k, r0 = Symbol.for("react.element"), n0 = Symbol.for("react.fragment"), o0 = Object.prototype.hasOwnProperty, i0 = t0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bg(r, e, t) {
  var n, o = {}, a = null, s = null;
  t !== void 0 && (a = "" + t), e.key !== void 0 && (a = "" + e.key), e.ref !== void 0 && (s = e.ref);
  for (n in e)
    o0.call(e, n) && !a0.hasOwnProperty(n) && (o[n] = e[n]);
  if (r && r.defaultProps)
    for (n in e = r.defaultProps, e)
      o[n] === void 0 && (o[n] = e[n]);
  return { $$typeof: r0, type: r, key: a, ref: s, props: o, _owner: i0.current };
}
zs.Fragment = n0;
zs.jsx = Bg;
zs.jsxs = Bg;
Hg.exports = zs;
var we = Hg.exports, Xl = {}, dp = JT;
Xl.createRoot = dp.createRoot, Xl.hydrateRoot = dp.hydrateRoot;
var Kg = { exports: {} }, qg = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ra = k;
function s0(r, e) {
  return r === e && (r !== 0 || 1 / r === 1 / e) || r !== r && e !== e;
}
var c0 = typeof Object.is == "function" ? Object.is : s0, l0 = ra.useSyncExternalStore, u0 = ra.useRef, d0 = ra.useEffect, f0 = ra.useMemo, h0 = ra.useDebugValue;
qg.useSyncExternalStoreWithSelector = function(r, e, t, n, o) {
  var a = u0(null);
  if (a.current === null) {
    var s = { hasValue: !1, value: null };
    a.current = s;
  } else
    s = a.current;
  a = f0(function() {
    function u(v) {
      if (!f) {
        if (f = !0, h = v, v = n(v), o !== void 0 && s.hasValue) {
          var C = s.value;
          if (o(C, v))
            return p = C;
        }
        return p = v;
      }
      if (C = p, c0(h, v))
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
  var l = l0(r, a[0], a[1]);
  return d0(function() {
    s.hasValue = !0, s.value = l;
  }, [l]), h0(l), l;
};
Kg.exports = qg;
var p0 = Kg.exports, pr = (
  // prettier-ignore
  // @ts-ignore
  "default" in De ? De.default : De
), fp = Symbol.for("react-redux-context"), hp = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function g0() {
  if (!pr.createContext)
    return {};
  const r = hp[fp] ?? (hp[fp] = /* @__PURE__ */ new Map());
  let e = r.get(pr.createContext);
  return e || (e = pr.createContext(
    null
  ), r.set(pr.createContext, e)), e;
}
var Gn = /* @__PURE__ */ g0(), m0 = () => {
  throw new Error("uSES not initialized!");
};
function ku(r = Gn) {
  return function() {
    return pr.useContext(r);
  };
}
var $g = /* @__PURE__ */ ku(), Gg = m0, v0 = (r) => {
  Gg = r;
}, y0 = (r, e) => r === e;
function C0(r = Gn) {
  const e = r === Gn ? $g : ku(r), t = (n, o = {}) => {
    const { equalityFn: a = y0, devModeChecks: s = {} } = typeof o == "function" ? { equalityFn: o } : o, {
      store: l,
      subscription: u,
      getServerState: f,
      stabilityCheck: h,
      identityFunctionCheck: p
    } = e();
    pr.useRef(!0);
    const m = pr.useCallback(
      {
        [n.name](C) {
          return n(C);
        }
      }[n.name],
      [n, h, s.stabilityCheck]
    ), v = Gg(
      u.addNestedSub,
      l.getState,
      f || l.getState,
      m,
      a
    );
    return pr.useDebugValue(v), v;
  };
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var w0 = /* @__PURE__ */ C0();
function E0(r) {
  r();
}
function b0() {
  let r = null, e = null;
  return {
    clear() {
      r = null, e = null;
    },
    notify() {
      E0(() => {
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
var pp = {
  notify() {
  },
  get: () => []
};
function _0(r, e) {
  let t, n = pp, o = 0, a = !1;
  function s(E) {
    h();
    const _ = n.subscribe(E);
    let A = !1;
    return () => {
      A || (A = !0, _(), p());
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
    o++, t || (t = e ? e.addNestedSub(u) : r.subscribe(u), n = b0());
  }
  function p() {
    o--, t && o === 0 && (t(), t = void 0, n.clear(), n = pp);
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
var S0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", T0 = S0 ? pr.useLayoutEffect : pr.useEffect;
function I0({
  store: r,
  context: e,
  children: t,
  serverState: n,
  stabilityCheck: o = "once",
  identityFunctionCheck: a = "once"
}) {
  const s = pr.useMemo(() => {
    const f = _0(r);
    return {
      store: r,
      subscription: f,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      identityFunctionCheck: a
    };
  }, [r, n, o, a]), l = pr.useMemo(() => r.getState(), [r]);
  T0(() => {
    const { subscription: f } = s;
    return f.onStateChange = f.notifyNestedSubs, f.trySubscribe(), l !== r.getState() && f.notifyNestedSubs(), () => {
      f.tryUnsubscribe(), f.onStateChange = void 0;
    };
  }, [s, l]);
  const u = e || Gn;
  return /* @__PURE__ */ pr.createElement(u.Provider, { value: s }, t);
}
var A0 = I0;
function zg(r = Gn) {
  const e = r === Gn ? $g : (
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
var R0 = /* @__PURE__ */ zg();
function k0(r = Gn) {
  const e = r === Gn ? R0 : zg(r), t = () => e().dispatch;
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var P0 = /* @__PURE__ */ k0();
v0(p0.useSyncExternalStoreWithSelector);
const N0 = {
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
let O0 = class Zl {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || N0, this.options = t, this.debug = t.debug;
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
    return new Zl(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Zl(this.logger, e);
  }
};
var rn = new O0();
class Vs {
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
function ki() {
  let r, e;
  const t = new Promise((n, o) => {
    r = n, e = o;
  });
  return t.resolve = r, t.reject = e, t;
}
function gp(r) {
  return r == null ? "" : "" + r;
}
function M0(r, e, t) {
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
function mp(r, e, t) {
  const {
    obj: n,
    k: o
  } = Pu(r, e, Object);
  n[o] = t;
}
function x0(r, e, t, n) {
  const {
    obj: o,
    k: a
  } = Pu(r, e, Object);
  o[a] = o[a] || [], n && (o[a] = o[a].concat(t)), n || o[a].push(t);
}
function gs(r, e) {
  const {
    obj: t,
    k: n
  } = Pu(r, e);
  if (t)
    return t[n];
}
function L0(r, e, t) {
  const n = gs(r, t);
  return n !== void 0 ? n : gs(e, t);
}
function Vg(r, e, t) {
  for (const n in e)
    n !== "__proto__" && n !== "constructor" && (n in r ? typeof r[n] == "string" || r[n] instanceof String || typeof e[n] == "string" || e[n] instanceof String ? t && (r[n] = e[n]) : Vg(r[n], e[n], t) : r[n] = e[n]);
  return r;
}
function $o(r) {
  return r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var D0 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function U0(r) {
  return typeof r == "string" ? r.replace(/[&<>"'\/]/g, (e) => D0[e]) : r;
}
const F0 = [" ", ",", "?", "!", ";"];
function H0(r, e, t) {
  e = e || "", t = t || "";
  const n = F0.filter((s) => e.indexOf(s) < 0 && t.indexOf(s) < 0);
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
function ms(r, e) {
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
      return f ? ms(u, f, t) : void 0;
    }
    o = o[n[a]];
  }
  return o;
}
function vs(r) {
  return r && r.indexOf("_") > 0 ? r.replace("_", "-") : r;
}
class vp extends Vs {
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
    const u = gs(this.data, l);
    return u || !s || typeof n != "string" ? u : ms(this.data && this.data[e] && this.data[e][t], n, a);
  }
  addResource(e, t, n, o) {
    let a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const s = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator;
    let l = [e, t];
    n && (l = l.concat(s ? n.split(s) : n)), e.indexOf(".") > -1 && (l = e.split("."), o = t, t = l[1]), this.addNamespaces(t), mp(this.data, l, o), a.silent || this.emit("added", e, t, n, o);
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
    let u = gs(this.data, l) || {};
    o ? Vg(u, n, a) : u = {
      ...u,
      ...n
    }, mp(this.data, l, u), s.silent || this.emit("added", e, t, n);
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
var Wg = {
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
const yp = {};
class ys extends Vs {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), M0(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = rn.create("translator");
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
    const s = n && e.indexOf(n) > -1, l = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !H0(e, n, o);
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
    const v = p && p.usedKey || s, C = p && p.exactUsedKey || s, E = Object.prototype.toString.apply(m), _ = ["[object Number]", "[object Function]", "[object RegExp]"], A = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, R = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (R && m && (typeof m != "string" && typeof m != "boolean" && typeof m != "number") && _.indexOf(E) < 0 && !(typeof A == "string" && E === "[object Array]")) {
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
        for (const H in m)
          if (Object.prototype.hasOwnProperty.call(m, H)) {
            const U = `${L}${a}${H}`;
            O[H] = this.translate(U, {
              ...t,
              joinArrays: !1,
              ns: l
            }), O[H] === U && (O[H] = m[H]);
          }
        m = O;
      }
    } else if (R && typeof A == "string" && E === "[object Array]")
      m = m.join(A), m && (m = this.extendTranslation(m, e, t, n));
    else {
      let I = !1, O = !1;
      const L = t.count !== void 0 && typeof t.count != "string", H = ys.hasDefaultValue(t), U = L ? this.pluralResolver.getSuffix(f, t.count, t) : "", Q = t.ordinal && L ? this.pluralResolver.getSuffix(f, t.count, {
        ordinal: !1
      }) : "", Z = t[`defaultValue${U}`] || t[`defaultValue${Q}`] || t.defaultValue;
      !this.isValidLookup(m) && H && (I = !0, m = Z), this.isValidLookup(m) || (O = !0, m = s);
      const Y = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && O ? void 0 : m, ue = H && Z !== m && this.options.updateMissing;
      if (O || I || ue) {
        if (this.logger.log(ue ? "updateKey" : "missingKey", f, u, s, ue ? Z : m), a) {
          const ie = this.resolve(s, {
            ...t,
            keySeparator: !1
          });
          ie && ie.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let ee = [];
        const he = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && he && he[0])
          for (let ie = 0; ie < he.length; ie++)
            ee.push(he[ie]);
        else
          this.options.saveMissingTo === "all" ? ee = this.languageUtils.toResolveHierarchy(t.lng || this.language) : ee.push(t.lng || this.language);
        const J = (ie, ne, Pe) => {
          const Qe = H && Pe !== m ? Pe : Y;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(ie, u, ne, Qe, ue, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(ie, u, ne, Qe, ue, t), this.emit("missingKey", ie, u, ne, m);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && L ? ee.forEach((ie) => {
          this.pluralResolver.getSuffixes(ie, t).forEach((ne) => {
            J([ie], s + ne, t[`defaultValue${ne}`] || Z);
          });
        }) : J(ee, s, Z));
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
    return e != null && u && u.length && n.applyPostProcessor !== !1 && (e = Wg.handle(u, e, t, this.options && this.options.postProcessPassResolved ? {
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
        this.isValidLookup(n) || (l = _, !yp[`${E[0]}-${_}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(l) && (yp[`${E[0]}-${_}`] = !0, this.logger.warn(`key "${o}" for languages "${E.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), E.forEach((A) => {
          if (this.isValidLookup(n))
            return;
          s = A;
          const R = [h];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(R, h, A, _, t);
          else {
            let I;
            m && (I = this.pluralResolver.getSuffix(A, t.count, t));
            const O = `${this.options.pluralSeparator}zero`, L = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (m && (R.push(h + I), t.ordinal && I.indexOf(L) === 0 && R.push(h + I.replace(L, this.options.pluralSeparator)), v && R.push(h + O)), C) {
              const H = `${h}${this.options.contextSeparator}${t.context}`;
              R.push(H), m && (R.push(H + I), t.ordinal && I.indexOf(L) === 0 && R.push(H + I.replace(L, this.options.pluralSeparator)), v && R.push(H + O));
            }
          }
          let S;
          for (; S = R.pop(); )
            this.isValidLookup(n) || (a = S, n = this.getResource(A, _, S, t));
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
class Cp {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = rn.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = vs(e), !e || e.indexOf("-") < 0)
      return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = vs(e), !e || e.indexOf("-") < 0)
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
let B0 = [{
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
}], K0 = {
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
const q0 = ["v1", "v2", "v3"], $0 = ["v4"], wp = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function G0() {
  const r = {};
  return B0.forEach((e) => {
    e.lngs.forEach((t) => {
      r[t] = {
        numbers: e.nr,
        plurals: K0[e.fc]
      };
    });
  }), r;
}
class z0 {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = rn.create("pluralResolver"), (!this.options.compatibilityJSON || $0.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = G0();
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(vs(e), {
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
    return n ? this.shouldUseIntlApi() ? n.resolvedOptions().pluralCategories.sort((o, a) => wp[o] - wp[a]).map((o) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : n.numbers.map((o) => this.getSuffix(e, o, t)) : [];
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
    return !q0.includes(this.options.compatibilityJSON);
  }
}
function Ep(r, e, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, a = L0(r, e, t);
  return !a && o && typeof t == "string" && (a = ms(r, t, n), a === void 0 && (a = ms(e, t, n))), a;
}
class V0 {
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
    this.escape = t.escape !== void 0 ? t.escape : U0, this.escapeValue = t.escapeValue !== void 0 ? t.escapeValue : !0, this.useRawValueToEscape = t.useRawValueToEscape !== void 0 ? t.useRawValueToEscape : !1, this.prefix = t.prefix ? $o(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? $o(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? $o(t.nestingPrefix) : t.nestingPrefixEscaped || $o("$t("), this.nestingSuffix = t.nestingSuffix ? $o(t.nestingSuffix) : t.nestingSuffixEscaped || $o(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = t.alwaysFormat !== void 0 ? t.alwaysFormat : !1, this.resetRegExp();
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
        const R = Ep(t, u, C, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(R, void 0, n, {
          ...o,
          ...t,
          interpolationkey: C
        }) : R;
      }
      const E = C.split(this.formatSeparator), _ = E.shift().trim(), A = E.join(this.formatSeparator).trim();
      return this.format(Ep(t, u, _, this.options.keySeparator, this.options.ignoreJSONStructure), A, n, {
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
            const A = p(e, a, o);
            s = typeof A == "string" ? A : "";
          } else if (o && Object.prototype.hasOwnProperty.call(o, E))
            s = "";
          else if (m) {
            s = a[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${E} for interpolating ${e}`), s = "";
        else
          typeof s != "string" && !this.useRawValueToEscape && (s = gp(s));
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
      typeof a != "string" && (a = gp(a)), a || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`), a = ""), f && (a = u.reduce((h, p) => this.format(h, p, n.lng, {
        ...n,
        interpolationkey: o[1].trim()
      }), a.trim())), e = e.replace(o[0], a), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
function W0(r) {
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
    return l || (l = r(vs(o), a), e[s] = l), l(n);
  };
}
class j0 {
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
      } = W0(u);
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
function Y0(r, e) {
  r.pending[e] !== void 0 && (delete r.pending[e], r.pendingCount--);
}
class Q0 extends Vs {
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
      x0(u.loaded, [a], s), Y0(u, e), t && u.errors.push(t), u.pendingCount === 0 && !u.done && (Object.keys(u.loaded).forEach((f) => {
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
function bp() {
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
function _p(r) {
  return typeof r.ns == "string" && (r.ns = [r.ns]), typeof r.fallbackLng == "string" && (r.fallbackLng = [r.fallbackLng]), typeof r.fallbackNS == "string" && (r.fallbackNS = [r.fallbackNS]), r.supportedLngs && r.supportedLngs.indexOf("cimode") < 0 && (r.supportedLngs = r.supportedLngs.concat(["cimode"])), r;
}
function ns() {
}
function J0(r) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach((t) => {
    typeof r[t] == "function" && (r[t] = r[t].bind(r));
  });
}
class Gi extends Vs {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = _p(e), this.services = {}, this.logger = rn, this.modules = {
      external: []
    }, J0(this), t && !this.isInitialized && !e.isClone) {
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
    const o = bp();
    this.options = {
      ...o,
      ...this.options,
      ..._p(t)
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
      this.modules.formatter ? h = this.modules.formatter : typeof Intl < "u" && (h = j0);
      const p = new Cp(this.options);
      this.store = new vp(this.options.resources, this.options);
      const m = this.services;
      m.logger = rn, m.resourceStore = this.store, m.languageUtils = p, m.pluralResolver = new z0(p, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), h && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (m.formatter = a(h), m.formatter.init(m, this.options), this.options.interpolation.format = m.formatter.format.bind(m.formatter)), m.interpolator = new V0(this.options), m.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, m.backendConnector = new Q0(a(this.modules.backend), m.resourceStore, m, this.options), m.backendConnector.on("*", function(v) {
        for (var C = arguments.length, E = new Array(C > 1 ? C - 1 : 0), _ = 1; _ < C; _++)
          E[_ - 1] = arguments[_];
        e.emit(v, ...E);
      }), this.modules.languageDetector && (m.languageDetector = a(this.modules.languageDetector), m.languageDetector.init && m.languageDetector.init(m, this.options.detection, this.options)), this.modules.i18nFormat && (m.i18nFormat = a(this.modules.i18nFormat), m.i18nFormat.init && m.i18nFormat.init(this)), this.translator = new ys(this.services, this.options), this.translator.on("*", function(v) {
        for (var C = arguments.length, E = new Array(C > 1 ? C - 1 : 0), _ = 1; _ < C; _++)
          E[_ - 1] = arguments[_];
        e.emit(v, ...E);
      }), this.modules.external.forEach((v) => {
        v.init && v.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, n || (n = ns), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
    const u = ki(), f = () => {
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
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ns;
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
    const o = ki();
    return e || (e = this.languages), t || (t = this.options.ns), n || (n = ns), this.services.backendConnector.reload(e, t, (a) => {
      o.resolve(), n(a);
    }), o;
  }
  use(e) {
    if (!e)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Wg.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
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
    const o = ki();
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
    const n = ki();
    return this.options.ns ? (typeof e == "string" && (e = [e]), e.forEach((o) => {
      this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
    }), this.loadResources((o) => {
      n.resolve(), t && t(o);
    }), n) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const n = ki();
    typeof e == "string" && (e = [e]);
    const o = this.options.preload || [], a = e.filter((s) => o.indexOf(s) < 0);
    return a.length ? (this.options.preload = o.concat(a), this.loadResources((s) => {
      n.resolve(), t && t(s);
    }), n) : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e)
      return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], n = this.services && this.services.languageUtils || new Cp(bp());
    return t.indexOf(n.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new Gi(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ns;
    const n = e.forkResourceStore;
    n && delete e.forkResourceStore;
    const o = {
      ...this.options,
      ...e,
      isClone: !0
    }, a = new Gi(o);
    return (e.debug !== void 0 || e.prefix !== void 0) && (a.logger = a.logger.clone(e)), ["store", "services", "language"].forEach((l) => {
      a[l] = this[l];
    }), a.services = {
      ...this.services
    }, a.services.utils = {
      hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
    }, n && (a.store = new vp(this.store.data, o), a.services.resourceStore = a.store), a.translator = new ys(a.services, o), a.translator.on("*", function(l) {
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
const Rt = Gi.createInstance();
Rt.createInstance = Gi.createInstance;
Rt.createInstance;
Rt.dir;
Rt.init;
Rt.loadResources;
Rt.reloadResources;
Rt.use;
Rt.changeLanguage;
Rt.getFixedT;
Rt.t;
Rt.exists;
Rt.setDefaultNamespace;
Rt.hasLoadedNamespace;
Rt.loadNamespaces;
Rt.loadLanguages;
function X0() {
  if (console && console.warn) {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    typeof e[0] == "string" && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e);
  }
}
const Sp = {};
function eu() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  typeof e[0] == "string" && Sp[e[0]] || (typeof e[0] == "string" && (Sp[e[0]] = /* @__PURE__ */ new Date()), X0(...e));
}
const jg = (r, e) => () => {
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
function Tp(r, e, t) {
  r.loadNamespaces(e, jg(r, t));
}
function Ip(r, e, t, n) {
  typeof t == "string" && (t = [t]), t.forEach((o) => {
    r.options.ns.indexOf(o) < 0 && r.options.ns.push(o);
  }), r.loadLanguages(e, jg(r, n));
}
function Z0(r, e) {
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
function eI(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !e.languages || !e.languages.length ? (eu("i18n.languages were undefined or empty", e.languages), !0) : e.options.ignoreJSONStructure !== void 0 ? e.hasLoadedNamespace(r, {
    lng: t.lng,
    precheck: (o, a) => {
      if (t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !a(o.isLanguageChangingTo, r))
        return !1;
    }
  }) : Z0(r, e, t);
}
const tI = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, rI = {
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
}, nI = (r) => rI[r], oI = (r) => r.replace(tI, nI);
let tu = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: oI
};
function iI() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  tu = {
    ...tu,
    ...r
  };
}
function aI() {
  return tu;
}
let Yg;
function sI(r) {
  Yg = r;
}
function cI() {
  return Yg;
}
const lI = {
  type: "3rdParty",
  init(r) {
    iI(r.options.react), sI(r);
  }
}, uI = To();
class dI {
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
const fI = (r, e) => {
  const t = Ke();
  return ve(() => {
    t.current = e ? t.current : r;
  }, [r, e]), t.current;
};
function Ws(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: t
  } = e, {
    i18n: n,
    defaultNS: o
  } = jn(uI) || {}, a = t || n || cI();
  if (a && !a.reportNamespaces && (a.reportNamespaces = new dI()), !a) {
    eu("You will need to pass in an i18next instance by using initReactI18next");
    const S = (O, L) => typeof L == "string" ? L : L && typeof L == "object" && typeof L.defaultValue == "string" ? L.defaultValue : Array.isArray(O) ? O[O.length - 1] : O, I = [S, {}, !1];
    return I.t = S, I.i18n = {}, I.ready = !1, I;
  }
  a.options.react && a.options.react.wait !== void 0 && eu("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const s = {
    ...aI(),
    ...a.options.react,
    ...e
  }, {
    useSuspense: l,
    keyPrefix: u
  } = s;
  let f = r || o || a.options && a.options.defaultNS;
  f = typeof f == "string" ? [f] : f || ["translation"], a.reportNamespaces.addUsedNamespaces && a.reportNamespaces.addUsedNamespaces(f);
  const h = (a.isInitialized || a.initializedStoreOnce) && f.every((S) => eI(S, a, s));
  function p() {
    return a.getFixedT(e.lng || null, s.nsMode === "fallback" ? f : f[0], u);
  }
  const [m, v] = Ee(p);
  let C = f.join();
  e.lng && (C = `${e.lng}${C}`);
  const E = fI(C), _ = Ke(!0);
  ve(() => {
    const {
      bindI18n: S,
      bindI18nStore: I
    } = s;
    _.current = !0, !h && !l && (e.lng ? Ip(a, e.lng, f, () => {
      _.current && v(p);
    }) : Tp(a, f, () => {
      _.current && v(p);
    })), h && E && E !== C && _.current && v(p);
    function O() {
      _.current && v(p);
    }
    return S && a && a.on(S, O), I && a && a.store.on(I, O), () => {
      _.current = !1, S && a && S.split(" ").forEach((L) => a.off(L, O)), I && a && I.split(" ").forEach((L) => a.store.off(L, O));
    };
  }, [a, C]);
  const A = Ke(!0);
  ve(() => {
    _.current && !A.current && v(p), A.current = !1;
  }, [a, u]);
  const R = [m, a, h];
  if (R.t = m, R.i18n = a, R.ready = h, h || !h && !l)
    return R;
  throw new Promise((S) => {
    e.lng ? Ip(a, e.lng, f, () => S()) : Tp(a, f, () => S());
  });
}
Rt.use(lI).init({
  resources: {
    "en-GB": {
      translation: {
        apply: "Assign",
        cancel: "Cancel",
        classSearchInstruction: "Select a classification in the search box above.",
        noDescription: "No description",
        linkTabTitle: "Link",
        settingsTabTitle: "Settings",
        language: "Language",
        searchMainDictionaryLabel: "Search a class",
        selectLanguageInstruction: "Select language",
        selectMainDictionary: "Main dictionary",
        selectFilterDictionaries: "Selection filter dictionaries in",
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
        noClassificationSelected: "No classification selected",
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
        classSearchInstruction: "Selecteer een classificatie in het zoekveld hierboven.",
        noDescription: "Geen beschrijving",
        linkTabTitle: "Koppelen",
        settingsTabTitle: "Instellingen",
        language: "Taal",
        searchMainDictionaryLabel: "Zoek een object in",
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
        noClassificationSelected: "Geen classificatie geselecteerd",
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
var ru = function(r, e) {
  return ru = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
  }, ru(r, e);
};
function kt(r, e) {
  ru(r, e);
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
function Ap(r, e) {
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
function hI(r, e) {
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
function Nu() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r = r.concat(hI(arguments[e]));
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
var nu = function(r, e) {
  return nu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
  }, nu(r, e);
};
function ir(r, e) {
  nu(r, e);
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
function Se(r, e, t, n) {
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
function Te(r, e) {
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
function js() {
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
}, na = [
  N.OPENID_SCOPE,
  N.PROFILE_SCOPE,
  N.OFFLINE_ACCESS_SCOPE
], Rp = js(na, [
  N.EMAIL_SCOPE
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
var Re;
(function(r) {
  r.CLIENT_ID = "client_id", r.REDIRECT_URI = "redirect_uri", r.RESPONSE_TYPE = "response_type", r.RESPONSE_MODE = "response_mode", r.GRANT_TYPE = "grant_type", r.CLAIMS = "claims", r.SCOPE = "scope", r.ERROR = "error", r.ERROR_DESCRIPTION = "error_description", r.ACCESS_TOKEN = "access_token", r.ID_TOKEN = "id_token", r.REFRESH_TOKEN = "refresh_token", r.EXPIRES_IN = "expires_in", r.STATE = "state", r.NONCE = "nonce", r.PROMPT = "prompt", r.SESSION_STATE = "session_state", r.CLIENT_INFO = "client_info", r.CODE = "code", r.CODE_CHALLENGE = "code_challenge", r.CODE_CHALLENGE_METHOD = "code_challenge_method", r.CODE_VERIFIER = "code_verifier", r.CLIENT_REQUEST_ID = "client-request-id", r.X_CLIENT_SKU = "x-client-SKU", r.X_CLIENT_VER = "x-client-VER", r.X_CLIENT_OS = "x-client-OS", r.X_CLIENT_CPU = "x-client-CPU", r.X_CLIENT_CURR_TELEM = "x-client-current-telemetry", r.X_CLIENT_LAST_TELEM = "x-client-last-telemetry", r.X_MS_LIB_CAPABILITY = "x-ms-lib-capability", r.X_APP_NAME = "x-app-name", r.X_APP_VER = "x-app-ver", r.POST_LOGOUT_URI = "post_logout_redirect_uri", r.ID_TOKEN_HINT = "id_token_hint", r.DEVICE_CODE = "device_code", r.CLIENT_SECRET = "client_secret", r.CLIENT_ASSERTION = "client_assertion", r.CLIENT_ASSERTION_TYPE = "client_assertion_type", r.TOKEN_TYPE = "token_type", r.REQ_CNF = "req_cnf", r.OBO_ASSERTION = "assertion", r.REQUESTED_TOKEN_USE = "requested_token_use", r.ON_BEHALF_OF = "on_behalf_of", r.FOCI = "foci", r.CCS_HEADER = "X-AnchorMailbox", r.RETURN_SPA_CODE = "return_spa_code", r.NATIVE_BROKER = "nativebroker", r.LOGOUT_HINT = "logout_hint";
})(Re || (Re = {}));
var Vo;
(function(r) {
  r.ACCESS_TOKEN = "access_token", r.XMS_CC = "xms_cc";
})(Vo || (Vo = {}));
var Ht = {
  LOGIN: "login",
  SELECT_ACCOUNT: "select_account",
  CONSENT: "consent",
  NONE: "none",
  CREATE: "create",
  NO_SESSION: "no_session"
}, Di;
(function(r) {
  r.ACCOUNT = "account", r.SID = "sid", r.LOGIN_HINT = "login_hint", r.ID_TOKEN = "id_token", r.DOMAIN_HINT = "domain_hint", r.ORGANIZATIONS = "organizations", r.CONSUMERS = "consumers", r.ACCOUNT_ID = "accountIdentifier", r.HOMEACCOUNT_ID = "homeAccountIdentifier";
})(Di || (Di = {}));
var kp = {
  PLAIN: "plain",
  S256: "S256"
}, Cs;
(function(r) {
  r.QUERY = "query", r.FRAGMENT = "fragment", r.FORM_POST = "form_post";
})(Cs || (Cs = {}));
var ws;
(function(r) {
  r.IMPLICIT_GRANT = "implicit", r.AUTHORIZATION_CODE_GRANT = "authorization_code", r.CLIENT_CREDENTIALS_GRANT = "client_credentials", r.RESOURCE_OWNER_PASSWORD_GRANT = "password", r.REFRESH_TOKEN_GRANT = "refresh_token", r.DEVICE_CODE_GRANT = "device_code", r.JWT_BEARER = "urn:ietf:params:oauth:grant-type:jwt-bearer";
})(ws || (ws = {}));
var En;
(function(r) {
  r.MSSTS_ACCOUNT_TYPE = "MSSTS", r.ADFS_ACCOUNT_TYPE = "ADFS", r.MSAV1_ACCOUNT_TYPE = "MSA", r.GENERIC_ACCOUNT_TYPE = "Generic";
})(En || (En = {}));
var Ct;
(function(r) {
  r.CACHE_KEY_SEPARATOR = "-", r.CLIENT_INFO_SEPARATOR = ".";
})(Ct || (Ct = {}));
var pe;
(function(r) {
  r.ID_TOKEN = "IdToken", r.ACCESS_TOKEN = "AccessToken", r.ACCESS_TOKEN_WITH_AUTH_SCHEME = "AccessToken_With_AuthScheme", r.REFRESH_TOKEN = "RefreshToken";
})(pe || (pe = {}));
var bn;
(function(r) {
  r[r.ADFS = 1001] = "ADFS", r[r.MSA = 1002] = "MSA", r[r.MSSTS = 1003] = "MSSTS", r[r.GENERIC = 1004] = "GENERIC", r[r.ACCESS_TOKEN = 2001] = "ACCESS_TOKEN", r[r.REFRESH_TOKEN = 2002] = "REFRESH_TOKEN", r[r.ID_TOKEN = 2003] = "ID_TOKEN", r[r.APP_METADATA = 3001] = "APP_METADATA", r[r.UNDEFINED = 9999] = "UNDEFINED";
})(bn || (bn = {}));
var ou = "appmetadata", pI = "client_info", Ui = "1", Fi = {
  CACHE_KEY: "authority-metadata",
  REFRESH_TIME_SECONDS: 3600 * 24
  // 24 Hours
}, kr;
(function(r) {
  r.CONFIG = "config", r.CACHE = "cache", r.NETWORK = "network", r.HARDCODED_VALUES = "hardcoded_values";
})(kr || (kr = {}));
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
}, Ve;
(function(r) {
  r.BEARER = "Bearer", r.POP = "pop", r.SSH = "ssh-cert";
})(Ve || (Ve = {}));
var Hi = {
  // Default time to throttle RequestThumbprint in seconds
  DEFAULT_THROTTLE_TIME_SECONDS: 60,
  // Default maximum time to throttle in seconds, overrides what the server sends back
  DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600,
  // Prefix for storing throttling entries
  THROTTLING_PREFIX: "throttling",
  // Value assigned to the x-ms-lib-capability header to indicate to the server the library supports throttling
  X_MS_LIB_CAPABILITY_VALUE: "retry-after, h429"
}, Pp = {
  INVALID_GRANT_ERROR: "invalid_grant",
  CLIENT_MISMATCH_ERROR: "client_mismatch"
}, Es;
(function(r) {
  r.username = "username", r.password = "password";
})(Es || (Es = {}));
var Wo;
(function(r) {
  r[r.httpSuccess = 200] = "httpSuccess", r[r.httpBadRequest = 400] = "httpBadRequest";
})(Wo || (Wo = {}));
var Kn;
(function(r) {
  r.FAILED_AUTO_DETECTION = "1", r.INTERNAL_CACHE = "2", r.ENVIRONMENT_VARIABLE = "3", r.IMDS = "4";
})(Kn || (Kn = {}));
var Bi;
(function(r) {
  r.CONFIGURED_MATCHES_DETECTED = "1", r.CONFIGURED_NO_AUTO_DETECTION = "2", r.CONFIGURED_NOT_DETECTED = "3", r.AUTO_DETECTION_REQUESTED_SUCCESSFUL = "4", r.AUTO_DETECTION_REQUESTED_FAILED = "5";
})(Bi || (Bi = {}));
var $n;
(function(r) {
  r.NO_CACHE_HIT = "0", r.FORCE_REFRESH = "1", r.NO_CACHED_ACCESS_TOKEN = "2", r.CACHED_ACCESS_TOKEN_EXPIRED = "3", r.REFRESH_CACHED_ACCESS_TOKEN = "4", r.CLAIMS_REQUESTED_CACHE_SKIPPED = "5";
})($n || ($n = {}));
var iu;
(function(r) {
  r.Jwt = "JWT", r.Jwk = "JWK", r.Pop = "pop";
})(iu || (iu = {}));
/*! @azure/msal-common v13.3.1 2023-10-27 */
var os = {
  unexpectedError: {
    code: "unexpected_error",
    desc: "Unexpected error in authentication."
  },
  postRequestFailed: {
    code: "post_request_failed",
    desc: "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details."
  }
}, de = (
  /** @class */
  function(r) {
    ir(e, r);
    function e(t, n, o) {
      var a = this, s = n ? t + ": " + n : t;
      return a = r.call(this, s) || this, Object.setPrototypeOf(a, e.prototype), a.errorCode = t || N.EMPTY_STRING, a.errorMessage = n || N.EMPTY_STRING, a.subError = o || N.EMPTY_STRING, a.name = "AuthError", a;
    }
    return e.prototype.setCorrelationId = function(t) {
      this.correlationId = t;
    }, e.createUnexpectedError = function(t) {
      return new e(os.unexpectedError.code, os.unexpectedError.desc + ": " + t);
    }, e.createPostRequestFailed = function(t) {
      return new e(os.postRequestFailed.code, os.postRequestFailed.desc + ": " + t);
    }, e;
  }(Error)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var bs = {
  createNewGuid: function() {
    var r = "Crypto interface - createNewGuid() has not been implemented";
    throw de.createUnexpectedError(r);
  },
  base64Decode: function() {
    var r = "Crypto interface - base64Decode() has not been implemented";
    throw de.createUnexpectedError(r);
  },
  base64Encode: function() {
    var r = "Crypto interface - base64Encode() has not been implemented";
    throw de.createUnexpectedError(r);
  },
  generatePkceCodes: function() {
    return Se(this, void 0, void 0, function() {
      var r;
      return Te(this, function(e) {
        throw r = "Crypto interface - generatePkceCodes() has not been implemented", de.createUnexpectedError(r);
      });
    });
  },
  getPublicKeyThumbprint: function() {
    return Se(this, void 0, void 0, function() {
      var r;
      return Te(this, function(e) {
        throw r = "Crypto interface - getPublicKeyThumbprint() has not been implemented", de.createUnexpectedError(r);
      });
    });
  },
  removeTokenBindingKey: function() {
    return Se(this, void 0, void 0, function() {
      var r;
      return Te(this, function(e) {
        throw r = "Crypto interface - removeTokenBindingKey() has not been implemented", de.createUnexpectedError(r);
      });
    });
  },
  clearKeystore: function() {
    return Se(this, void 0, void 0, function() {
      var r;
      return Te(this, function(e) {
        throw r = "Crypto interface - clearKeystore() has not been implemented", de.createUnexpectedError(r);
      });
    });
  },
  signJwt: function() {
    return Se(this, void 0, void 0, function() {
      var r;
      return Te(this, function(e) {
        throw r = "Crypto interface - signJwt() has not been implemented", de.createUnexpectedError(r);
      });
    });
  },
  hashString: function() {
    return Se(this, void 0, void 0, function() {
      var r;
      return Te(this, function(e) {
        throw r = "Crypto interface - hashString() has not been implemented", de.createUnexpectedError(r);
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
}, oe = (
  /** @class */
  function(r) {
    ir(e, r);
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
  }(de)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var re = (
  /** @class */
  function() {
    function r() {
    }
    return r.decodeAuthToken = function(e) {
      if (r.isEmpty(e))
        throw oe.createTokenNullOrEmptyError(e);
      var t = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/, n = t.exec(e);
      if (!n || n.length < 4)
        throw oe.createTokenParsingError("Given token is malformed: " + JSON.stringify(e));
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
var ct;
(function(r) {
  r[r.Error = 0] = "Error", r[r.Warning = 1] = "Warning", r[r.Info = 2] = "Info", r[r.Verbose = 3] = "Verbose", r[r.Trace = 4] = "Trace";
})(ct || (ct = {}));
var Ou = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.level = ct.Info;
      var o = function() {
      }, a = e || r.createDefaultLoggerOptions();
      this.localCallback = a.loggerCallback || o, this.piiLoggingEnabled = a.piiLoggingEnabled || !1, this.level = typeof a.logLevel == "number" ? a.logLevel : ct.Info, this.correlationId = a.correlationId || N.EMPTY_STRING, this.packageName = t || N.EMPTY_STRING, this.packageVersion = n || N.EMPTY_STRING;
    }
    return r.createDefaultLoggerOptions = function() {
      return {
        loggerCallback: function() {
        },
        piiLoggingEnabled: !1,
        logLevel: ct.Info
      };
    }, r.prototype.clone = function(e, t, n) {
      return new r({ loggerCallback: this.localCallback, piiLoggingEnabled: this.piiLoggingEnabled, logLevel: this.level, correlationId: n || this.correlationId }, e, t);
    }, r.prototype.logMessage = function(e, t) {
      if (!(t.logLevel > this.level || !this.piiLoggingEnabled && t.containsPii)) {
        var n = (/* @__PURE__ */ new Date()).toUTCString(), o;
        re.isEmpty(t.correlationId) ? re.isEmpty(this.correlationId) ? o = "[" + n + "]" : o = "[" + n + "] : [" + this.correlationId + "]" : o = "[" + n + "] : [" + t.correlationId + "]";
        var a = o + " : " + this.packageName + "@" + this.packageVersion + " : " + ct[t.logLevel] + " - " + e;
        this.executeCallback(t.logLevel, a, t.containsPii || !1);
      }
    }, r.prototype.executeCallback = function(e, t, n) {
      this.localCallback && this.localCallback(e, t, n);
    }, r.prototype.error = function(e, t) {
      this.logMessage(e, {
        logLevel: ct.Error,
        containsPii: !1,
        correlationId: t || N.EMPTY_STRING
      });
    }, r.prototype.errorPii = function(e, t) {
      this.logMessage(e, {
        logLevel: ct.Error,
        containsPii: !0,
        correlationId: t || N.EMPTY_STRING
      });
    }, r.prototype.warning = function(e, t) {
      this.logMessage(e, {
        logLevel: ct.Warning,
        containsPii: !1,
        correlationId: t || N.EMPTY_STRING
      });
    }, r.prototype.warningPii = function(e, t) {
      this.logMessage(e, {
        logLevel: ct.Warning,
        containsPii: !0,
        correlationId: t || N.EMPTY_STRING
      });
    }, r.prototype.info = function(e, t) {
      this.logMessage(e, {
        logLevel: ct.Info,
        containsPii: !1,
        correlationId: t || N.EMPTY_STRING
      });
    }, r.prototype.infoPii = function(e, t) {
      this.logMessage(e, {
        logLevel: ct.Info,
        containsPii: !0,
        correlationId: t || N.EMPTY_STRING
      });
    }, r.prototype.verbose = function(e, t) {
      this.logMessage(e, {
        logLevel: ct.Verbose,
        containsPii: !1,
        correlationId: t || N.EMPTY_STRING
      });
    }, r.prototype.verbosePii = function(e, t) {
      this.logMessage(e, {
        logLevel: ct.Verbose,
        containsPii: !0,
        correlationId: t || N.EMPTY_STRING
      });
    }, r.prototype.trace = function(e, t) {
      this.logMessage(e, {
        logLevel: ct.Trace,
        containsPii: !1,
        correlationId: t || N.EMPTY_STRING
      });
    }, r.prototype.tracePii = function(e, t) {
      this.logMessage(e, {
        logLevel: ct.Trace,
        containsPii: !0,
        correlationId: t || N.EMPTY_STRING
      });
    }, r.prototype.isPiiLoggingEnabled = function() {
      return this.piiLoggingEnabled || !1;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Qg = "@azure/msal-common", Mu = "13.3.1";
/*! @azure/msal-common v13.3.1 2023-10-27 */
var zi;
(function(r) {
  r[r.None = 0] = "None", r.AzurePublic = "https://login.microsoftonline.com", r.AzurePpe = "https://login.windows-ppe.net", r.AzureChina = "https://login.chinacloudapi.cn", r.AzureGermany = "https://login.microsoftonline.de", r.AzureUsGovernment = "https://login.microsoftonline.us";
})(zi || (zi = {}));
/*! @azure/msal-common v13.3.1 2023-10-27 */
var _e = {
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
    ir(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return o.name = "ClientConfigurationError", Object.setPrototypeOf(o, e.prototype), o;
    }
    return e.createRedirectUriEmptyError = function() {
      return new e(_e.redirectUriNotSet.code, _e.redirectUriNotSet.desc);
    }, e.createPostLogoutRedirectUriEmptyError = function() {
      return new e(_e.postLogoutUriNotSet.code, _e.postLogoutUriNotSet.desc);
    }, e.createClaimsRequestParsingError = function(t) {
      return new e(_e.claimsRequestParsingError.code, _e.claimsRequestParsingError.desc + " Given value: " + t);
    }, e.createInsecureAuthorityUriError = function(t) {
      return new e(_e.authorityUriInsecure.code, _e.authorityUriInsecure.desc + " Given URI: " + t);
    }, e.createUrlParseError = function(t) {
      return new e(_e.urlParseError.code, _e.urlParseError.desc + " Given Error: " + t);
    }, e.createUrlEmptyError = function() {
      return new e(_e.urlEmptyError.code, _e.urlEmptyError.desc);
    }, e.createEmptyScopesArrayError = function() {
      return new e(_e.emptyScopesError.code, "" + _e.emptyScopesError.desc);
    }, e.createClientIdSingleScopeError = function(t) {
      return new e(_e.clientIdSingleScopeError.code, _e.clientIdSingleScopeError.desc + " Given Scopes: " + t);
    }, e.createInvalidPromptError = function(t) {
      return new e(_e.invalidPrompt.code, _e.invalidPrompt.desc + " Given value: " + t);
    }, e.createInvalidClaimsRequestError = function() {
      return new e(_e.invalidClaimsRequest.code, _e.invalidClaimsRequest.desc);
    }, e.createEmptyLogoutRequestError = function() {
      return new e(_e.logoutRequestEmptyError.code, _e.logoutRequestEmptyError.desc);
    }, e.createEmptyTokenRequestError = function() {
      return new e(_e.tokenRequestEmptyError.code, _e.tokenRequestEmptyError.desc);
    }, e.createInvalidCodeChallengeMethodError = function() {
      return new e(_e.invalidCodeChallengeMethod.code, _e.invalidCodeChallengeMethod.desc);
    }, e.createInvalidCodeChallengeParamsError = function() {
      return new e(_e.invalidCodeChallengeParams.code, _e.invalidCodeChallengeParams.desc);
    }, e.createInvalidCloudDiscoveryMetadataError = function() {
      return new e(_e.invalidCloudDiscoveryMetadata.code, _e.invalidCloudDiscoveryMetadata.desc);
    }, e.createInvalidAuthorityMetadataError = function() {
      return new e(_e.invalidAuthorityMetadata.code, _e.invalidAuthorityMetadata.desc);
    }, e.createUntrustedAuthorityError = function() {
      return new e(_e.untrustedAuthority.code, _e.untrustedAuthority.desc);
    }, e.createInvalidAzureCloudInstanceError = function() {
      return new e(_e.invalidAzureCloudInstance.code, _e.invalidAzureCloudInstance.desc);
    }, e.createMissingSshJwkError = function() {
      return new e(_e.missingSshJwk.code, _e.missingSshJwk.desc);
    }, e.createMissingSshKidError = function() {
      return new e(_e.missingSshKid.code, _e.missingSshKid.desc);
    }, e.createMissingNonceAuthenticationHeadersError = function() {
      return new e(_e.missingNonceAuthenticationHeader.code, _e.missingNonceAuthenticationHeader.desc);
    }, e.createInvalidAuthenticationHeaderError = function(t, n) {
      return new e(_e.invalidAuthenticationHeader.code, _e.invalidAuthenticationHeader.desc + ". Invalid header: " + t + ". Details: " + n);
    }, e.createAuthorityMismatchError = function() {
      return new e(_e.authorityMismatch.code, _e.authorityMismatch.desc);
    }, e;
  }(oe)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Dt = (
  /** @class */
  function() {
    function r(e) {
      var t = this, n = e ? re.trimArrayEntries(js(e)) : [], o = n ? re.removeEmptyStringsFromArray(n) : [];
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
      return re.isEmpty(e) ? !1 : n.scopes.has(e.toLowerCase());
    }, r.prototype.containsScopeSet = function(e) {
      var t = this;
      return !e || e.scopes.size <= 0 ? !1 : this.scopes.size >= e.scopes.size && e.asArray().every(function(n) {
        return t.containsScope(n);
      });
    }, r.prototype.containsOnlyOIDCScopes = function() {
      var e = this, t = 0;
      return Rp.forEach(function(n) {
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
        throw oe.createAppendScopeSetError(n);
      }
    }, r.prototype.removeScope = function(e) {
      if (re.isEmpty(e))
        throw oe.createRemoveEmptyScopeFromSetError(e);
      this.scopes.delete(e.trim());
    }, r.prototype.removeOIDCScopes = function() {
      var e = this;
      Rp.forEach(function(t) {
        e.scopes.delete(t);
      });
    }, r.prototype.unionScopeSets = function(e) {
      if (!e)
        throw oe.createEmptyInputScopeSetError();
      var t = /* @__PURE__ */ new Set();
      return e.scopes.forEach(function(n) {
        return t.add(n.toLowerCase());
      }), this.scopes.forEach(function(n) {
        return t.add(n.toLowerCase());
      }), t;
    }, r.prototype.intersectingScopeSets = function(e) {
      if (!e)
        throw oe.createEmptyInputScopeSetError();
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
function _s(r, e) {
  if (re.isEmpty(r))
    throw oe.createClientInfoEmptyError();
  try {
    var t = e.base64Decode(r);
    return JSON.parse(t);
  } catch (n) {
    throw oe.createClientInfoDecodingError(n.message);
  }
}
function jo(r) {
  if (re.isEmpty(r))
    throw oe.createClientInfoDecodingError("Home account ID was empty.");
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
        case En.ADFS_ACCOUNT_TYPE:
          return bn.ADFS;
        case En.MSAV1_ACCOUNT_TYPE:
          return bn.MSA;
        case En.MSSTS_ACCOUNT_TYPE:
          return bn.MSSTS;
        case En.GENERIC_ACCOUNT_TYPE:
          return bn.GENERIC;
        default:
          throw oe.createUnexpectedAccountTypeError();
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
      E.authorityType = En.MSSTS_ACCOUNT_TYPE, E.clientInfo = e, E.homeAccountId = t, E.nativeAccountId = u;
      var _ = l || o && o.getPreferredCache();
      if (!_)
        throw oe.createInvalidCacheEnvironmentError();
      if (E.environment = _, E.realm = ((f = n == null ? void 0 : n.claims) === null || f === void 0 ? void 0 : f.tid) || N.EMPTY_STRING, n) {
        E.idTokenClaims = n.claims, E.localAccountId = ((h = n == null ? void 0 : n.claims) === null || h === void 0 ? void 0 : h.oid) || ((p = n == null ? void 0 : n.claims) === null || p === void 0 ? void 0 : p.sub) || N.EMPTY_STRING;
        var A = (m = n == null ? void 0 : n.claims) === null || m === void 0 ? void 0 : m.preferred_username, R = !((v = n == null ? void 0 : n.claims) === null || v === void 0) && v.emails ? n.claims.emails[0] : null;
        E.username = A || R || N.EMPTY_STRING, E.name = (C = n == null ? void 0 : n.claims) === null || C === void 0 ? void 0 : C.name;
      }
      return E.cloudGraphHostName = a, E.msGraphHost = s, E;
    }, r.createGenericAccount = function(e, t, n, o, a, s) {
      var l, u, f, h, p = new r();
      p.authorityType = n && n.authorityType === Wt.Adfs ? En.ADFS_ACCOUNT_TYPE : En.GENERIC_ACCOUNT_TYPE, p.homeAccountId = e, p.realm = N.EMPTY_STRING;
      var m = s || n && n.getPreferredCache();
      if (!m)
        throw oe.createInvalidCacheEnvironmentError();
      return t && (p.localAccountId = ((l = t == null ? void 0 : t.claims) === null || l === void 0 ? void 0 : l.oid) || ((u = t == null ? void 0 : t.claims) === null || u === void 0 ? void 0 : u.sub) || N.EMPTY_STRING, p.username = ((f = t == null ? void 0 : t.claims) === null || f === void 0 ? void 0 : f.upn) || N.EMPTY_STRING, p.name = ((h = t == null ? void 0 : t.claims) === null || h === void 0 ? void 0 : h.name) || N.EMPTY_STRING, p.idTokenClaims = t == null ? void 0 : t.claims), p.environment = m, p.cloudGraphHostName = o, p.msGraphHost = a, p;
    }, r.generateHomeAccountId = function(e, t, n, o, a) {
      var s, l = !((s = a == null ? void 0 : a.claims) === null || s === void 0) && s.sub ? a.claims.sub : N.EMPTY_STRING;
      if (t === Wt.Adfs || t === Wt.Dsts)
        return l;
      if (e)
        try {
          var u = _s(e, o);
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
        throw oe.createTokenNullOrEmptyError(e);
      this.rawToken = e, this.claims = r.extractTokenClaims(e, t);
    }
    return r.extractTokenClaims = function(e, t) {
      var n = re.decodeAuthToken(e);
      try {
        var o = n.JWSPayload, a = t.base64Decode(o);
        return JSON.parse(a);
      } catch (s) {
        throw oe.createTokenParsingError(s);
      }
    }, r.checkMaxAge = function(e, t) {
      var n = 3e5;
      if (t === 0 || Date.now() - n > e + t)
        throw oe.createMaxAgeTranspiredError();
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var tr = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.clientId = e, this.cryptoImpl = t, this.commonLogger = n.clone(Qg, Mu);
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
      return Se(this, void 0, void 0, function() {
        return Te(this, function(t) {
          switch (t.label) {
            case 0:
              if (!e)
                throw oe.createNullOrUndefinedCacheRecord();
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
      return Se(this, void 0, void 0, function() {
        var t, n, o, a, s = this;
        return Te(this, function(l) {
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
      if (t.indexOf(pe.ID_TOKEN.toLowerCase()) === -1 && t.indexOf(pe.ACCESS_TOKEN.toLowerCase()) === -1 && t.indexOf(pe.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase()) === -1 && t.indexOf(pe.REFRESH_TOKEN.toLowerCase()) === -1)
        return !1;
      if (t.indexOf(pe.REFRESH_TOKEN.toLowerCase()) > -1) {
        var n = "" + pe.REFRESH_TOKEN + Ct.CACHE_KEY_SEPARATOR + this.clientId + Ct.CACHE_KEY_SEPARATOR, o = "" + pe.REFRESH_TOKEN + Ct.CACHE_KEY_SEPARATOR + Ui + Ct.CACHE_KEY_SEPARATOR;
        if (t.indexOf(n.toLowerCase()) === -1 && t.indexOf(o.toLowerCase()) === -1)
          return !1;
      } else if (t.indexOf(this.clientId.toLowerCase()) === -1)
        return !1;
      return !0;
    }, r.prototype.credentialMatchesFilter = function(e, t) {
      return !(t.clientId && !this.matchClientId(e, t.clientId) || t.userAssertionHash && !this.matchUserAssertionHash(e, t.userAssertionHash) || typeof t.homeAccountId == "string" && !this.matchHomeAccountId(e, t.homeAccountId) || t.environment && !this.matchEnvironment(e, t.environment) || t.realm && !this.matchRealm(e, t.realm) || t.credentialType && !this.matchCredentialType(e, t.credentialType) || t.familyId && !this.matchFamilyId(e, t.familyId) || t.target && !this.matchTarget(e, t.target) || (t.requestedClaimsHash || e.requestedClaimsHash) && e.requestedClaimsHash !== t.requestedClaimsHash || e.credentialType === pe.ACCESS_TOKEN_WITH_AUTH_SCHEME && (t.tokenType && !this.matchTokenType(e, t.tokenType) || t.tokenType === Ve.SSH && t.keyId && !this.matchKeyId(e, t.keyId)));
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
      return Se(this, void 0, void 0, function() {
        var e, t, n = this;
        return Te(this, function(o) {
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
      return Se(this, void 0, void 0, function() {
        var t;
        return Te(this, function(n) {
          switch (n.label) {
            case 0:
              if (t = this.getAccount(e), !t)
                throw oe.createNoAccountFoundError();
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
      return Se(this, void 0, void 0, function() {
        var t, n, o, a = this;
        return Te(this, function(s) {
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
      return Se(this, void 0, void 0, function() {
        var t, n, o;
        return Te(this, function(a) {
          switch (a.label) {
            case 0:
              if (t = this.getAccessTokenCredential(e), !t)
                return [
                  2
                  /*return*/
                ];
              if (t.credentialType.toLowerCase() !== pe.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase())
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
              throw a.sent(), oe.createBindingKeyNotRemovedError();
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
      var t = At.generateAccountCacheKey(e);
      return this.getAccount(t);
    }, r.prototype.getIdToken = function(e, t) {
      var n = this;
      this.commonLogger.trace("CacheManager - getIdToken called");
      var o = {
        homeAccountId: e.homeAccountId,
        environment: e.environment,
        credentialType: pe.ID_TOKEN,
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
      var a = Dt.createSearchScopes(t.scopes), s = t.authenticationScheme || Ve.BEARER, l = s && s.toLowerCase() !== Ve.BEARER.toLowerCase() ? pe.ACCESS_TOKEN_WITH_AUTH_SCHEME : pe.ACCESS_TOKEN, u = {
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
      var a = t ? Ui : void 0, s = {
        homeAccountId: e.homeAccountId,
        environment: e.environment,
        credentialType: pe.REFRESH_TOKEN,
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
        throw oe.createMultipleMatchingAppMetadataInCacheError();
      return o[0];
    }, r.prototype.isAppMetadataFOCI = function(e) {
      var t = this.readAppMetadataFromCache(e);
      return !!(t && t.familyId === Ui);
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
      var n = e.credentialType !== pe.ACCESS_TOKEN && e.credentialType !== pe.ACCESS_TOKEN_WITH_AUTH_SCHEME;
      if (n || !e.target)
        return !1;
      var o = Dt.fromString(e.target);
      return o.containsScopeSet(t);
    }, r.prototype.matchTokenType = function(e, t) {
      return !!(e.tokenType && e.tokenType === t);
    }, r.prototype.matchKeyId = function(e, t) {
      return !!(e.keyId && e.keyId === t);
    }, r.prototype.isAppMetadata = function(e) {
      return e.indexOf(ou) !== -1;
    }, r.prototype.isAuthorityMetadata = function(e) {
      return e.indexOf(Fi.CACHE_KEY) !== -1;
    }, r.prototype.generateAuthorityMetadataCacheKey = function(e) {
      return Fi.CACHE_KEY + "-" + this.clientId + "-" + e;
    }, r.toObject = function(e, t) {
      for (var n in t)
        e[n] = t[n];
      return e;
    }, r;
  }()
), gI = (
  /** @class */
  function(r) {
    ir(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.setAccount = function() {
      var t = "Storage interface - setAccount() has not been implemented for the cacheStorage interface.";
      throw de.createUnexpectedError(t);
    }, e.prototype.getAccount = function() {
      var t = "Storage interface - getAccount() has not been implemented for the cacheStorage interface.";
      throw de.createUnexpectedError(t);
    }, e.prototype.setIdTokenCredential = function() {
      var t = "Storage interface - setIdTokenCredential() has not been implemented for the cacheStorage interface.";
      throw de.createUnexpectedError(t);
    }, e.prototype.getIdTokenCredential = function() {
      var t = "Storage interface - getIdTokenCredential() has not been implemented for the cacheStorage interface.";
      throw de.createUnexpectedError(t);
    }, e.prototype.setAccessTokenCredential = function() {
      var t = "Storage interface - setAccessTokenCredential() has not been implemented for the cacheStorage interface.";
      throw de.createUnexpectedError(t);
    }, e.prototype.getAccessTokenCredential = function() {
      var t = "Storage interface - getAccessTokenCredential() has not been implemented for the cacheStorage interface.";
      throw de.createUnexpectedError(t);
    }, e.prototype.setRefreshTokenCredential = function() {
      var t = "Storage interface - setRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
      throw de.createUnexpectedError(t);
    }, e.prototype.getRefreshTokenCredential = function() {
      var t = "Storage interface - getRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
      throw de.createUnexpectedError(t);
    }, e.prototype.setAppMetadata = function() {
      var t = "Storage interface - setAppMetadata() has not been implemented for the cacheStorage interface.";
      throw de.createUnexpectedError(t);
    }, e.prototype.getAppMetadata = function() {
      var t = "Storage interface - getAppMetadata() has not been implemented for the cacheStorage interface.";
      throw de.createUnexpectedError(t);
    }, e.prototype.setServerTelemetry = function() {
      var t = "Storage interface - setServerTelemetry() has not been implemented for the cacheStorage interface.";
      throw de.createUnexpectedError(t);
    }, e.prototype.getServerTelemetry = function() {
      var t = "Storage interface - getServerTelemetry() has not been implemented for the cacheStorage interface.";
      throw de.createUnexpectedError(t);
    }, e.prototype.setAuthorityMetadata = function() {
      var t = "Storage interface - setAuthorityMetadata() has not been implemented for the cacheStorage interface.";
      throw de.createUnexpectedError(t);
    }, e.prototype.getAuthorityMetadata = function() {
      var t = "Storage interface - getAuthorityMetadata() has not been implemented for the cacheStorage interface.";
      throw de.createUnexpectedError(t);
    }, e.prototype.getAuthorityMetadataKeys = function() {
      var t = "Storage interface - getAuthorityMetadataKeys() has not been implemented for the cacheStorage interface.";
      throw de.createUnexpectedError(t);
    }, e.prototype.setThrottlingCache = function() {
      var t = "Storage interface - setThrottlingCache() has not been implemented for the cacheStorage interface.";
      throw de.createUnexpectedError(t);
    }, e.prototype.getThrottlingCache = function() {
      var t = "Storage interface - getThrottlingCache() has not been implemented for the cacheStorage interface.";
      throw de.createUnexpectedError(t);
    }, e.prototype.removeItem = function() {
      var t = "Storage interface - removeItem() has not been implemented for the cacheStorage interface.";
      throw de.createUnexpectedError(t);
    }, e.prototype.containsKey = function() {
      var t = "Storage interface - containsKey() has not been implemented for the cacheStorage interface.";
      throw de.createUnexpectedError(t);
    }, e.prototype.getKeys = function() {
      var t = "Storage interface - getKeys() has not been implemented for the cacheStorage interface.";
      throw de.createUnexpectedError(t);
    }, e.prototype.getAccountKeys = function() {
      var t = "Storage interface - getAccountKeys() has not been implemented for the cacheStorage interface.";
      throw de.createUnexpectedError(t);
    }, e.prototype.getTokenKeys = function() {
      var t = "Storage interface - getTokenKeys() has not been implemented for the cacheStorage interface.";
      throw de.createUnexpectedError(t);
    }, e.prototype.clear = function() {
      return Se(this, void 0, void 0, function() {
        var t;
        return Te(this, function(n) {
          throw t = "Storage interface - clear() has not been implemented for the cacheStorage interface.", de.createUnexpectedError(t);
        });
      });
    }, e.prototype.updateCredentialCacheKey = function() {
      var t = "Storage interface - updateCredentialCacheKey() has not been implemented for the cacheStorage interface.";
      throw de.createUnexpectedError(t);
    }, e;
  }(tr)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var mI = 300, Jg = {
  tokenRenewalOffsetSeconds: mI,
  preventCorsPreflight: !1
}, vI = {
  loggerCallback: function() {
  },
  piiLoggingEnabled: !1,
  logLevel: ct.Info,
  correlationId: N.EMPTY_STRING
}, yI = {
  claimsBasedCachingEnabled: !0
}, CI = {
  sendGetRequestAsync: function() {
    return Se(this, void 0, void 0, function() {
      var r;
      return Te(this, function(e) {
        throw r = "Network interface - sendGetRequestAsync() has not been implemented", de.createUnexpectedError(r);
      });
    });
  },
  sendPostRequestAsync: function() {
    return Se(this, void 0, void 0, function() {
      var r;
      return Te(this, function(e) {
        throw r = "Network interface - sendPostRequestAsync() has not been implemented", de.createUnexpectedError(r);
      });
    });
  }
}, wI = {
  sku: N.SKU,
  version: Mu,
  cpu: N.EMPTY_STRING,
  os: N.EMPTY_STRING
}, EI = {
  clientSecret: N.EMPTY_STRING,
  clientAssertion: void 0
}, bI = {
  azureCloudInstance: zi.None,
  tenant: "" + N.DEFAULT_COMMON_TENANT
}, _I = {
  application: {
    appName: "",
    appVersion: ""
  }
};
function SI(r) {
  var e = r.authOptions, t = r.systemOptions, n = r.loggerOptions, o = r.cacheOptions, a = r.storageInterface, s = r.networkInterface, l = r.cryptoInterface, u = r.clientCredentials, f = r.libraryInfo, h = r.telemetry, p = r.serverTelemetryManager, m = r.persistencePlugin, v = r.serializableCache, C = $e($e({}, vI), n);
  return {
    authOptions: TI(e),
    systemOptions: $e($e({}, Jg), t),
    loggerOptions: C,
    cacheOptions: $e($e({}, yI), o),
    storageInterface: a || new gI(e.clientId, bs, new Ou(C)),
    networkInterface: s || CI,
    cryptoInterface: l || bs,
    clientCredentials: u || EI,
    libraryInfo: $e($e({}, wI), f),
    telemetry: $e($e({}, _I), h),
    serverTelemetryManager: p || null,
    persistencePlugin: m || null,
    serializableCache: v || null
  };
}
function TI(r) {
  return $e({ clientCapabilities: [], azureCloudOptions: bI, skipAuthorityMetadataCache: !1 }, r);
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
var wo = (
  /** @class */
  function(r) {
    ir(e, r);
    function e(t, n, o) {
      var a = r.call(this, t, n, o) || this;
      return a.name = "ServerError", Object.setPrototypeOf(a, e.prototype), a;
    }
    return e;
  }(de)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Ss = (
  /** @class */
  function() {
    function r() {
    }
    return r.generateThrottlingStorageKey = function(e) {
      return Hi.THROTTLING_PREFIX + "." + JSON.stringify(e);
    }, r.preProcess = function(e, t) {
      var n, o = r.generateThrottlingStorageKey(t), a = e.getThrottlingCache(o);
      if (a) {
        if (a.throttleTime < Date.now()) {
          e.removeItem(o);
          return;
        }
        throw new wo(((n = a.errorCodes) === null || n === void 0 ? void 0 : n.join(" ")) || N.EMPTY_STRING, a.errorMessage, a.subError);
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
      return Math.floor(Math.min(n + (t || Hi.DEFAULT_THROTTLE_TIME_SECONDS), n + Hi.DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1e3);
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
var II = (
  /** @class */
  function() {
    function r(e, t) {
      this.networkClient = e, this.cacheManager = t;
    }
    return r.prototype.sendPostRequest = function(e, t, n) {
      return Se(this, void 0, void 0, function() {
        var o, a;
        return Te(this, function(s) {
          switch (s.label) {
            case 0:
              Ss.preProcess(this.cacheManager, e), s.label = 1;
            case 1:
              return s.trys.push([1, 3, , 4]), [4, this.networkClient.sendPostRequestAsync(t, n)];
            case 2:
              return o = s.sent(), [3, 4];
            case 3:
              throw a = s.sent(), a instanceof de ? a : oe.createNetworkError(t, a);
            case 4:
              return Ss.postProcess(this.cacheManager, e, o), [2, o];
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
      for (var n in Ht)
        t.push(Ht[n]);
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
        kp.PLAIN,
        kp.S256
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
var Ki = (
  /** @class */
  function() {
    function r() {
      this.parameters = /* @__PURE__ */ new Map();
    }
    return r.prototype.addResponseTypeCode = function() {
      this.parameters.set(Re.RESPONSE_TYPE, encodeURIComponent(N.CODE_RESPONSE_TYPE));
    }, r.prototype.addResponseTypeForTokenAndIdToken = function() {
      this.parameters.set(Re.RESPONSE_TYPE, encodeURIComponent(N.TOKEN_RESPONSE_TYPE + " " + N.ID_TOKEN_RESPONSE_TYPE));
    }, r.prototype.addResponseMode = function(e) {
      this.parameters.set(Re.RESPONSE_MODE, encodeURIComponent(e || Cs.QUERY));
    }, r.prototype.addNativeBroker = function() {
      this.parameters.set(Re.NATIVE_BROKER, encodeURIComponent("1"));
    }, r.prototype.addScopes = function(e, t) {
      t === void 0 && (t = !0);
      var n = t ? js(e || [], na) : e || [], o = new Dt(n);
      this.parameters.set(Re.SCOPE, encodeURIComponent(o.printScopes()));
    }, r.prototype.addClientId = function(e) {
      this.parameters.set(Re.CLIENT_ID, encodeURIComponent(e));
    }, r.prototype.addRedirectUri = function(e) {
      uo.validateRedirectUri(e), this.parameters.set(Re.REDIRECT_URI, encodeURIComponent(e));
    }, r.prototype.addPostLogoutRedirectUri = function(e) {
      uo.validateRedirectUri(e), this.parameters.set(Re.POST_LOGOUT_URI, encodeURIComponent(e));
    }, r.prototype.addIdTokenHint = function(e) {
      this.parameters.set(Re.ID_TOKEN_HINT, encodeURIComponent(e));
    }, r.prototype.addDomainHint = function(e) {
      this.parameters.set(Di.DOMAIN_HINT, encodeURIComponent(e));
    }, r.prototype.addLoginHint = function(e) {
      this.parameters.set(Di.LOGIN_HINT, encodeURIComponent(e));
    }, r.prototype.addCcsUpn = function(e) {
      this.parameters.set(mr.CCS_HEADER, encodeURIComponent("UPN:" + e));
    }, r.prototype.addCcsOid = function(e) {
      this.parameters.set(mr.CCS_HEADER, encodeURIComponent("Oid:" + e.uid + "@" + e.utid));
    }, r.prototype.addSid = function(e) {
      this.parameters.set(Di.SID, encodeURIComponent(e));
    }, r.prototype.addClaims = function(e, t) {
      var n = this.addClientCapabilitiesToClaims(e, t);
      uo.validateClaims(n), this.parameters.set(Re.CLAIMS, encodeURIComponent(n));
    }, r.prototype.addCorrelationId = function(e) {
      this.parameters.set(Re.CLIENT_REQUEST_ID, encodeURIComponent(e));
    }, r.prototype.addLibraryInfo = function(e) {
      this.parameters.set(Re.X_CLIENT_SKU, e.sku), this.parameters.set(Re.X_CLIENT_VER, e.version), e.os && this.parameters.set(Re.X_CLIENT_OS, e.os), e.cpu && this.parameters.set(Re.X_CLIENT_CPU, e.cpu);
    }, r.prototype.addApplicationTelemetry = function(e) {
      e != null && e.appName && this.parameters.set(Re.X_APP_NAME, e.appName), e != null && e.appVersion && this.parameters.set(Re.X_APP_VER, e.appVersion);
    }, r.prototype.addPrompt = function(e) {
      uo.validatePrompt(e), this.parameters.set("" + Re.PROMPT, encodeURIComponent(e));
    }, r.prototype.addState = function(e) {
      re.isEmpty(e) || this.parameters.set(Re.STATE, encodeURIComponent(e));
    }, r.prototype.addNonce = function(e) {
      this.parameters.set(Re.NONCE, encodeURIComponent(e));
    }, r.prototype.addCodeChallengeParams = function(e, t) {
      if (uo.validateCodeChallengeParams(e, t), e && t)
        this.parameters.set(Re.CODE_CHALLENGE, encodeURIComponent(e)), this.parameters.set(Re.CODE_CHALLENGE_METHOD, encodeURIComponent(t));
      else
        throw et.createInvalidCodeChallengeParamsError();
    }, r.prototype.addAuthorizationCode = function(e) {
      this.parameters.set(Re.CODE, encodeURIComponent(e));
    }, r.prototype.addDeviceCode = function(e) {
      this.parameters.set(Re.DEVICE_CODE, encodeURIComponent(e));
    }, r.prototype.addRefreshToken = function(e) {
      this.parameters.set(Re.REFRESH_TOKEN, encodeURIComponent(e));
    }, r.prototype.addCodeVerifier = function(e) {
      this.parameters.set(Re.CODE_VERIFIER, encodeURIComponent(e));
    }, r.prototype.addClientSecret = function(e) {
      this.parameters.set(Re.CLIENT_SECRET, encodeURIComponent(e));
    }, r.prototype.addClientAssertion = function(e) {
      re.isEmpty(e) || this.parameters.set(Re.CLIENT_ASSERTION, encodeURIComponent(e));
    }, r.prototype.addClientAssertionType = function(e) {
      re.isEmpty(e) || this.parameters.set(Re.CLIENT_ASSERTION_TYPE, encodeURIComponent(e));
    }, r.prototype.addOboAssertion = function(e) {
      this.parameters.set(Re.OBO_ASSERTION, encodeURIComponent(e));
    }, r.prototype.addRequestTokenUse = function(e) {
      this.parameters.set(Re.REQUESTED_TOKEN_USE, encodeURIComponent(e));
    }, r.prototype.addGrantType = function(e) {
      this.parameters.set(Re.GRANT_TYPE, encodeURIComponent(e));
    }, r.prototype.addClientInfo = function() {
      this.parameters.set(pI, "1");
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
      return t && t.length > 0 && (n.hasOwnProperty(Vo.ACCESS_TOKEN) || (n[Vo.ACCESS_TOKEN] = {}), n[Vo.ACCESS_TOKEN][Vo.XMS_CC] = {
        values: t
      }), JSON.stringify(n);
    }, r.prototype.addUsername = function(e) {
      this.parameters.set(Es.username, encodeURIComponent(e));
    }, r.prototype.addPassword = function(e) {
      this.parameters.set(Es.password, encodeURIComponent(e));
    }, r.prototype.addPopToken = function(e) {
      re.isEmpty(e) || (this.parameters.set(Re.TOKEN_TYPE, Ve.POP), this.parameters.set(Re.REQ_CNF, encodeURIComponent(e)));
    }, r.prototype.addSshJwk = function(e) {
      re.isEmpty(e) || (this.parameters.set(Re.TOKEN_TYPE, Ve.SSH), this.parameters.set(Re.REQ_CNF, encodeURIComponent(e)));
    }, r.prototype.addServerTelemetry = function(e) {
      this.parameters.set(Re.X_CLIENT_CURR_TELEM, e.generateCurrentRequestHeaderValue()), this.parameters.set(Re.X_CLIENT_LAST_TELEM, e.generateLastRequestHeaderValue());
    }, r.prototype.addThrottling = function() {
      this.parameters.set(Re.X_MS_LIB_CAPABILITY, Hi.X_MS_LIB_CAPABILITY_VALUE);
    }, r.prototype.addLogoutHint = function(e) {
      this.parameters.set(Re.LOGOUT_HINT, encodeURIComponent(e));
    }, r.prototype.createQueryString = function() {
      var e = new Array();
      return this.parameters.forEach(function(t, n) {
        e.push(n + "=" + t);
      }), e.join("&");
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var xu = (
  /** @class */
  function() {
    function r(e, t) {
      this.config = SI(e), this.logger = new Ou(this.config.loggerOptions, Qg, Mu), this.cryptoUtils = this.config.cryptoInterface, this.cacheManager = this.config.storageInterface, this.networkClient = this.config.networkInterface, this.networkManager = new II(this.networkClient, this.cacheManager), this.serverTelemetryManager = this.config.serverTelemetryManager, this.authority = this.config.authOptions.authority, this.performanceClient = t;
    }
    return r.prototype.createTokenRequestHeaders = function(e) {
      var t = {};
      if (t[mr.CONTENT_TYPE] = N.URL_FORM_CONTENT_TYPE, !this.config.systemOptions.preventCorsPreflight && e)
        switch (e.type) {
          case gr.HOME_ACCOUNT_ID:
            try {
              var n = jo(e.credential);
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
      return Se(this, void 0, void 0, function() {
        var a;
        return Te(this, function(s) {
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
        throw oe.createEndpointDiscoveryIncompleteError("Updated authority has not completed endpoint discovery.");
      this.authority = e;
    }, r.prototype.createTokenQueryParameters = function(e) {
      var t = new Ki();
      return e.tokenQueryParameters && t.addExtraQueryParameters(e.tokenQueryParameters), t.createQueryString();
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Lu = (
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
        case pe.ID_TOKEN:
          return bn.ID_TOKEN;
        case pe.ACCESS_TOKEN:
        case pe.ACCESS_TOKEN_WITH_AUTH_SCHEME:
          return bn.ACCESS_TOKEN;
        case pe.REFRESH_TOKEN:
          return bn.REFRESH_TOKEN;
        default:
          throw oe.createUnexpectedCredentialTypeError();
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
      var a = e === pe.REFRESH_TOKEN && o || t, s = [
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
var po = (
  /** @class */
  function(r) {
    ir(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.createIdTokenEntity = function(t, n, o, a, s) {
      var l = new e();
      return l.credentialType = pe.ID_TOKEN, l.homeAccountId = t, l.environment = n, l.clientId = a, l.secret = o, l.realm = s, l;
    }, e.isIdTokenEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("realm") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") && t.credentialType === pe.ID_TOKEN : !1;
    }, e;
  }(Lu)
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
    ir(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.createAccessTokenEntity = function(t, n, o, a, s, l, u, f, h, p, m, v, C, E, _) {
      var A, R, S = new e();
      S.homeAccountId = t, S.credentialType = pe.ACCESS_TOKEN, S.secret = o;
      var I = Pr.nowSeconds();
      if (S.cachedAt = I.toString(), S.expiresOn = u.toString(), S.extendedExpiresOn = f.toString(), p && (S.refreshOn = p.toString()), S.environment = n, S.clientId = a, S.realm = s, S.target = l, S.userAssertionHash = v, S.tokenType = re.isEmpty(m) ? Ve.BEARER : m, E && (S.requestedClaims = E, S.requestedClaimsHash = _), ((A = S.tokenType) === null || A === void 0 ? void 0 : A.toLowerCase()) !== Ve.BEARER.toLowerCase())
        switch (S.credentialType = pe.ACCESS_TOKEN_WITH_AUTH_SCHEME, S.tokenType) {
          case Ve.POP:
            var O = sn.extractTokenClaims(o, h);
            if (!(!((R = O == null ? void 0 : O.cnf) === null || R === void 0) && R.kid))
              throw oe.createTokenClaimsRequiredError();
            S.keyId = O.cnf.kid;
            break;
          case Ve.SSH:
            S.keyId = C;
        }
      return S;
    }, e.isAccessTokenEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("realm") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") && t.hasOwnProperty("target") && (t.credentialType === pe.ACCESS_TOKEN || t.credentialType === pe.ACCESS_TOKEN_WITH_AUTH_SCHEME) : !1;
    }, e;
  }(Lu)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Yo = (
  /** @class */
  function(r) {
    ir(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.createRefreshTokenEntity = function(t, n, o, a, s, l) {
      var u = new e();
      return u.clientId = a, u.credentialType = pe.REFRESH_TOKEN, u.environment = n, u.homeAccountId = t, u.secret = o, u.userAssertionHash = l, s && (u.familyId = s), u;
    }, e.isRefreshTokenEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") && t.credentialType === pe.REFRESH_TOKEN : !1;
    }, e;
  }(Lu)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Np = [
  "interaction_required",
  "consent_required",
  "login_required"
], AI = [
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
}, zr = (
  /** @class */
  function(r) {
    ir(e, r);
    function e(t, n, o, a, s, l, u) {
      var f = r.call(this, t, n, o) || this;
      return Object.setPrototypeOf(f, e.prototype), f.timestamp = a || N.EMPTY_STRING, f.traceId = s || N.EMPTY_STRING, f.correlationId = l || N.EMPTY_STRING, f.claims = u || N.EMPTY_STRING, f.name = "InteractionRequiredAuthError", f;
    }
    return e.isInteractionRequiredError = function(t, n, o) {
      var a = !!t && Np.indexOf(t) > -1, s = !!o && AI.indexOf(o) > -1, l = !!n && Np.some(function(u) {
        return n.indexOf(u) > -1;
      });
      return a || l || s;
    }, e.createNoTokensFoundError = function() {
      return new e(Qo.noTokensFoundError.code, Qo.noTokensFoundError.desc);
    }, e.createNativeAccountUnavailableError = function() {
      return new e(Qo.native_account_unavailable.code, Qo.native_account_unavailable.desc);
    }, e;
  }(de)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var qi = (
  /** @class */
  function() {
    function r(e, t, n, o, a) {
      this.account = e || null, this.idToken = t || null, this.accessToken = n || null, this.refreshToken = o || null, this.appMetadata = a || null;
    }
    return r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Sn = (
  /** @class */
  function() {
    function r() {
    }
    return r.setRequestState = function(e, t, n) {
      var o = r.generateLibraryState(e, n);
      return re.isEmpty(t) ? o : "" + o + N.RESOURCE_DELIM + t;
    }, r.generateLibraryState = function(e, t) {
      if (!e)
        throw oe.createNoCryptoObjectError("generateLibraryState");
      var n = {
        id: e.createNewGuid()
      };
      t && (n.meta = t);
      var o = JSON.stringify(n);
      return e.base64Encode(o);
    }, r.parseRequestState = function(e, t) {
      if (!e)
        throw oe.createNoCryptoObjectError("parseRequestState");
      if (re.isEmpty(t))
        throw oe.createInvalidStateError(t, "Null, undefined or empty state");
      try {
        var n = t.split(N.RESOURCE_DELIM), o = n[0], a = n.length > 1 ? n.slice(1).join(N.RESOURCE_DELIM) : N.EMPTY_STRING, s = e.base64Decode(o), l = JSON.parse(s);
        return {
          userRequestState: re.isEmpty(a) ? N.EMPTY_STRING : a,
          libraryState: l
        };
      } catch (u) {
        throw oe.createInvalidStateError(t, u);
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
      if (re.isEmpty(e))
        return {};
      var t = r.parseHash(e), n = re.queryStringToObject(re.isEmpty(t) ? e : t);
      if (!n)
        throw oe.createHashNotDeserializedError(JSON.stringify(n));
      return n;
    }, r.getDeserializedQueryString = function(e) {
      if (re.isEmpty(e))
        return {};
      var t = r.parseQueryString(e), n = re.queryStringToObject(re.isEmpty(t) ? e : t);
      if (!n)
        throw oe.createHashNotDeserializedError(JSON.stringify(n));
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
var Ts;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.InProgress = 1] = "InProgress", r[r.Completed = 2] = "Completed";
})(Ts || (Ts = {}));
var RI = /* @__PURE__ */ new Set([
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
var au;
(function(r) {
  r.SW = "sw", r.UHW = "uhw";
})(au || (au = {}));
var ti = (
  /** @class */
  function() {
    function r(e, t) {
      this.cryptoUtils = e, this.performanceClient = t;
    }
    return r.prototype.generateCnf = function(e) {
      var t, n;
      return Se(this, void 0, void 0, function() {
        var o, a, s;
        return Te(this, function(l) {
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
      return Se(this, void 0, void 0, function() {
        var n;
        return Te(this, function(o) {
          switch (o.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(F.PopTokenGenerateKid, e.correlationId), [4, this.cryptoUtils.getPublicKeyThumbprint(e)];
            case 1:
              return n = o.sent(), [2, {
                kid: n,
                xms_ksl: au.SW
              }];
          }
        });
      });
    }, r.prototype.signPopToken = function(e, t, n) {
      return Se(this, void 0, void 0, function() {
        return Te(this, function(o) {
          return [2, this.signPayload(e, t, n)];
        });
      });
    }, r.prototype.signPayload = function(e, t, n, o) {
      return Se(this, void 0, void 0, function() {
        var a, s, l, u, f, h;
        return Te(this, function(p) {
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
var su = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.generateAppMetadataKey = function() {
      return r.generateAppMetadataCacheKey(this.environment, this.clientId);
    }, r.generateAppMetadataCacheKey = function(e, t) {
      var n = [
        ou,
        e,
        t
      ];
      return n.join(Ct.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.createAppMetadataEntity = function(e, t, n) {
      var o = new r();
      return o.clientId = e, o.environment = t, n && (o.familyId = n), o;
    }, r.isAppMetadataEntity = function(e, t) {
      return t ? e.indexOf(ou) === 0 && t.hasOwnProperty("clientId") && t.hasOwnProperty("environment") : !1;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var kI = (
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
var Is = (
  /** @class */
  function() {
    function r(e, t, n, o, a, s, l) {
      this.clientId = e, this.cacheStorage = t, this.cryptoObj = n, this.logger = o, this.serializableCache = a, this.persistencePlugin = s, this.performanceClient = l;
    }
    return r.prototype.validateServerAuthorizationCodeResponse = function(e, t, n) {
      if (!e.state || !t)
        throw e.state ? oe.createStateNotFoundError("Cached State") : oe.createStateNotFoundError("Server State");
      if (decodeURIComponent(e.state) !== decodeURIComponent(t))
        throw oe.createStateMismatchError();
      if (e.error || e.error_description || e.suberror)
        throw zr.isInteractionRequiredError(e.error, e.error_description, e.suberror) ? new zr(e.error || N.EMPTY_STRING, e.error_description, e.suberror, e.timestamp || N.EMPTY_STRING, e.trace_id || N.EMPTY_STRING, e.correlation_id || N.EMPTY_STRING, e.claims || N.EMPTY_STRING) : new wo(e.error || N.EMPTY_STRING, e.error_description, e.suberror);
      e.client_info && _s(e.client_info, n);
    }, r.prototype.validateTokenResponse = function(e) {
      if (e.error || e.error_description || e.suberror) {
        if (zr.isInteractionRequiredError(e.error, e.error_description, e.suberror))
          throw new zr(e.error, e.error_description, e.suberror, e.timestamp || N.EMPTY_STRING, e.trace_id || N.EMPTY_STRING, e.correlation_id || N.EMPTY_STRING, e.claims || N.EMPTY_STRING);
        var t = e.error_codes + " - [" + e.timestamp + "]: " + e.error_description + " - Correlation ID: " + e.correlation_id + " - Trace ID: " + e.trace_id;
        throw new wo(e.error, t, e.suberror);
      }
    }, r.prototype.handleServerTokenResponse = function(e, t, n, o, a, s, l, u, f) {
      var h;
      return Se(this, void 0, void 0, function() {
        var p, m, v, C, E, _, A;
        return Te(this, function(R) {
          switch (R.label) {
            case 0:
              if ((h = this.performanceClient) === null || h === void 0 || h.addQueueMeasurement(F.HandleServerTokenResponse, e.correlation_id), e.id_token) {
                if (p = new sn(e.id_token || N.EMPTY_STRING, this.cryptoObj), a && !re.isEmpty(a.nonce) && p.claims.nonce !== a.nonce)
                  throw oe.createNonceMismatchError();
                if (o.maxAge || o.maxAge === 0) {
                  if (m = p.claims.auth_time, !m)
                    throw oe.createAuthTimeNotFoundError();
                  sn.checkMaxAge(m, o.maxAge);
                }
              }
              this.homeAccountIdentifier = At.generateHomeAccountId(e.client_info || N.EMPTY_STRING, t.authorityType, this.logger, this.cryptoObj, p), a && a.state && (v = Sn.parseRequestState(this.cryptoObj, a.state)), e.key_id = e.key_id || o.sshKid || void 0, C = this.generateCacheRecord(e, t, n, o, p, s, a), R.label = 1;
            case 1:
              return R.trys.push([1, , 5, 8]), this.persistencePlugin && this.serializableCache ? (this.logger.verbose("Persistence enabled, calling beforeCacheAccess"), E = new kI(this.serializableCache, !0), [4, this.persistencePlugin.beforeCacheAccess(E)]) : [3, 3];
            case 2:
              R.sent(), R.label = 3;
            case 3:
              return l && !u && C.account && (_ = C.account.generateAccountKey(), A = this.cacheStorage.getAccount(_), !A) ? (this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache"), [2, r.generateAuthenticationResult(this.cryptoObj, t, C, !1, o, p, v, void 0, f)]) : [4, this.cacheStorage.saveCacheRecord(C)];
            case 4:
              return R.sent(), [3, 8];
            case 5:
              return this.persistencePlugin && this.serializableCache && E ? (this.logger.verbose("Persistence enabled, calling afterCacheAccess"), [4, this.persistencePlugin.afterCacheAccess(E)]) : [3, 7];
            case 6:
              R.sent(), R.label = 7;
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
        throw oe.createInvalidCacheEnvironmentError();
      var f, h;
      !re.isEmpty(e.id_token) && a && (f = po.createIdTokenEntity(this.homeAccountIdentifier, u, e.id_token || N.EMPTY_STRING, this.clientId, a.claims.tid || N.EMPTY_STRING), h = this.generateAccountEntity(e, a, t, l));
      var p = null;
      if (!re.isEmpty(e.access_token)) {
        var m = e.scope ? Dt.fromString(e.scope) : new Dt(o.scopes || []), v = (typeof e.expires_in == "string" ? parseInt(e.expires_in, 10) : e.expires_in) || 0, C = (typeof e.ext_expires_in == "string" ? parseInt(e.ext_expires_in, 10) : e.ext_expires_in) || 0, E = (typeof e.refresh_in == "string" ? parseInt(e.refresh_in, 10) : e.refresh_in) || void 0, _ = n + v, A = _ + C, R = E && E > 0 ? n + E : void 0;
        p = go.createAccessTokenEntity(this.homeAccountIdentifier, u, e.access_token || N.EMPTY_STRING, this.clientId, a ? a.claims.tid || N.EMPTY_STRING : t.tenant, m.printScopes(), _, A, this.cryptoObj, R, e.token_type, s, e.key_id, o.claims, o.requestedClaimsHash);
      }
      var S = null;
      re.isEmpty(e.refresh_token) || (S = Yo.createRefreshTokenEntity(this.homeAccountIdentifier, u, e.refresh_token || N.EMPTY_STRING, this.clientId, e.foci, s));
      var I = null;
      return re.isEmpty(e.foci) || (I = su.createAppMetadataEntity(this.clientId, u, e.foci)), new qi(h, f, p, S, I);
    }, r.prototype.generateAccountEntity = function(e, t, n, o) {
      var a = n.authorityType, s = o ? o.cloud_graph_host_name : N.EMPTY_STRING, l = o ? o.msgraph_host : N.EMPTY_STRING;
      if (a === Wt.Adfs)
        return this.logger.verbose("Authority type is ADFS, creating ADFS account"), At.createGenericAccount(this.homeAccountIdentifier, t, n, s, l);
      if (re.isEmpty(e.client_info) && n.protocolMode === "AAD")
        throw oe.createClientInfoEmptyError();
      return e.client_info ? At.createAccount(e.client_info, this.homeAccountIdentifier, t, n, s, l) : At.createGenericAccount(this.homeAccountIdentifier, t, n, s, l);
    }, r.generateAuthenticationResult = function(e, t, n, o, a, s, l, u, f) {
      var h, p, m;
      return Se(this, void 0, void 0, function() {
        var v, C, E, _, A, R, S, I, O, L, H;
        return Te(this, function(U) {
          switch (U.label) {
            case 0:
              if (v = N.EMPTY_STRING, C = [], E = null, A = N.EMPTY_STRING, !n.accessToken)
                return [3, 4];
              if (n.accessToken.tokenType !== Ve.POP)
                return [3, 2];
              if (R = new ti(e), S = n.accessToken, I = S.secret, O = S.keyId, !O)
                throw oe.createKeyIdMissingError();
              return [4, R.signPopToken(I, O, a)];
            case 1:
              return v = U.sent(), [3, 3];
            case 2:
              v = n.accessToken.secret, U.label = 3;
            case 3:
              C = Dt.fromString(n.accessToken.target).asArray(), E = new Date(Number(n.accessToken.expiresOn) * 1e3), _ = new Date(Number(n.accessToken.extendedExpiresOn) * 1e3), U.label = 4;
            case 4:
              return n.appMetadata && (A = n.appMetadata.familyId === Ui ? Ui : N.EMPTY_STRING), L = (s == null ? void 0 : s.claims.oid) || (s == null ? void 0 : s.claims.sub) || N.EMPTY_STRING, H = (s == null ? void 0 : s.claims.tid) || N.EMPTY_STRING, u != null && u.spa_accountid && n.account && (n.account.nativeAccountId = u == null ? void 0 : u.spa_accountid), [2, {
                authority: t.canonicalAuthority,
                uniqueId: L,
                tenantId: H,
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
                familyId: A,
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
var Xg = (
  /** @class */
  function(r) {
    ir(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return o.includeRedirectUri = !0, o;
    }
    return e.prototype.getAuthCodeUrl = function(t) {
      var n, o;
      return Se(this, void 0, void 0, function() {
        var a;
        return Te(this, function(s) {
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
      return Se(this, void 0, void 0, function() {
        var h, p, m, v, C, E, _ = this;
        return Te(this, function(A) {
          switch (A.label) {
            case 0:
              if (!t || !t.code)
                throw oe.createTokenRequestCannotBeMadeError();
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(F.AuthClientAcquireToken, t.correlationId), h = (a = this.performanceClient) === null || a === void 0 ? void 0 : a.startMeasurement("AuthCodeClientAcquireToken", t.correlationId), this.logger.info("in acquireToken call in auth-code client"), p = Pr.nowSeconds(), (s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(F.AuthClientExecuteTokenRequest, t.correlationId), [4, this.executeTokenRequest(this.authority, t)];
            case 1:
              return m = A.sent(), v = (l = m.headers) === null || l === void 0 ? void 0 : l[mr.X_MS_REQUEST_ID], C = (u = m.headers) === null || u === void 0 ? void 0 : u[mr.X_MS_HTTP_VERSION], C && (h == null || h.addStaticFields({
                httpVerAuthority: C
              })), E = new Is(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin, this.performanceClient), E.validateTokenResponse(m.body), (f = this.performanceClient) === null || f === void 0 || f.setPreQueueTime(F.HandleServerTokenResponse, t.correlationId), [2, E.handleServerTokenResponse(m.body, this.authority, p, t, n, void 0, void 0, void 0, v).then(function(R) {
                return h == null || h.endMeasurement({
                  success: !0
                }), R;
              }).catch(function(R) {
                throw _.logger.verbose("Error in fetching token in ACC", t.correlationId), h == null || h.endMeasurement({
                  errorCode: R.errorCode,
                  subErrorCode: R.subError,
                  success: !1
                }), R;
              })];
          }
        });
      });
    }, e.prototype.handleFragmentResponse = function(t, n) {
      var o = new Is(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, null, null), a = new He(t), s = He.getDeserializedHash(a.getHash());
      if (o.validateServerAuthorizationCodeResponse(s, n, this.cryptoUtils), !s.code)
        throw oe.createNoAuthCodeInServerResponseError();
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
      return Se(this, void 0, void 0, function() {
        var s, l, u, f, h, p, m;
        return Te(this, function(v) {
          switch (v.label) {
            case 0:
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(F.AuthClientExecuteTokenRequest, n.correlationId), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(F.AuthClientCreateTokenRequestBody, n.correlationId), s = this.createTokenQueryParameters(n), l = He.appendQueryString(t.tokenEndpoint, s), [4, this.createTokenRequestBody(n)];
            case 1:
              if (u = v.sent(), f = void 0, n.clientInfo)
                try {
                  h = _s(n.clientInfo, this.cryptoUtils), f = {
                    credential: "" + h.uid + Ct.CLIENT_INFO_SEPARATOR + h.utid,
                    type: gr.HOME_ACCOUNT_ID
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
      return Se(this, void 0, void 0, function() {
        var a, s, l, u, f, h, p, p, m;
        return Te(this, function(v) {
          switch (v.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.AuthClientCreateTokenRequestBody, t.correlationId), a = new Ki(), a.addClientId(this.config.authOptions.clientId), this.includeRedirectUri ? a.addRedirectUri(t.redirectUri) : uo.validateRedirectUri(t.redirectUri), a.addScopes(t.scopes), a.addAuthorizationCode(t.code), a.addLibraryInfo(this.config.libraryInfo), a.addApplicationTelemetry(this.config.telemetry.application), a.addThrottling(), this.serverTelemetryManager && a.addServerTelemetry(this.serverTelemetryManager), t.codeVerifier && a.addCodeVerifier(t.codeVerifier), this.config.clientCredentials.clientSecret && a.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion && (s = this.config.clientCredentials.clientAssertion, a.addClientAssertion(s.assertion), a.addClientAssertionType(s.assertionType)), a.addGrantType(ws.AUTHORIZATION_CODE_GRANT), a.addClientInfo(), t.authenticationScheme !== Ve.POP ? [3, 2] : (l = new ti(this.cryptoUtils, this.performanceClient), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(F.PopTokenGenerateCnf, t.correlationId), [4, l.generateCnf(t)]);
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
                  p = _s(t.clientInfo, this.cryptoUtils), h = {
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
                      p = jo(h.credential), a.addCcsOid(p);
                    } catch (C) {
                      this.logger.verbose("Could not parse home account ID for CCS Header: " + C);
                    }
                    break;
                  case gr.UPN:
                    a.addCcsUpn(h.credential);
                    break;
                }
              return t.tokenBodyParameters && a.addExtraQueryParameters(t.tokenBodyParameters), t.enableSpaAuthorizationCode && (!t.tokenBodyParameters || !t.tokenBodyParameters[Re.RETURN_SPA_CODE]) && a.addExtraQueryParameters((m = {}, m[Re.RETURN_SPA_CODE] = "1", m)), [2, a.createQueryString()];
          }
        });
      });
    }, e.prototype.createAuthCodeUrlQueryString = function(t) {
      var n;
      return Se(this, void 0, void 0, function() {
        var o, a, s, l, u, f, f, f, h, p;
        return Te(this, function(m) {
          switch (m.label) {
            case 0:
              if ((n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.AuthClientCreateQueryString, t.correlationId), o = new Ki(), o.addClientId(this.config.authOptions.clientId), a = js(t.scopes || [], t.extraScopesToConsent || []), o.addScopes(a), o.addRedirectUri(t.redirectUri), s = t.correlationId || this.config.cryptoInterface.createNewGuid(), o.addCorrelationId(s), o.addResponseMode(t.responseMode), o.addResponseTypeCode(), o.addLibraryInfo(this.config.libraryInfo), o.addApplicationTelemetry(this.config.telemetry.application), o.addClientInfo(), t.codeChallenge && t.codeChallengeMethod && o.addCodeChallengeParams(t.codeChallenge, t.codeChallengeMethod), t.prompt && o.addPrompt(t.prompt), t.domainHint && o.addDomainHint(t.domainHint), t.prompt !== Ht.SELECT_ACCOUNT)
                if (t.sid && t.prompt === Ht.NONE)
                  this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request"), o.addSid(t.sid);
                else if (t.account) {
                  if (l = this.extractAccountSid(t.account), u = this.extractLoginHint(t.account), u) {
                    this.logger.verbose("createAuthCodeUrlQueryString: login_hint claim present on account"), o.addLoginHint(u);
                    try {
                      f = jo(t.account.homeAccountId), o.addCcsOid(f);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  } else if (l && t.prompt === Ht.NONE) {
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
              return t.nonce && o.addNonce(t.nonce), t.state && o.addState(t.state), (!re.isEmpty(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && o.addClaims(t.claims, this.config.authOptions.clientCapabilities), t.extraQueryParameters && o.addExtraQueryParameters(t.extraQueryParameters), t.nativeBroker ? (o.addNativeBroker(), t.authenticationScheme !== Ve.POP ? [3, 2] : (h = new ti(this.cryptoUtils), [4, h.generateCnf(t)])) : [3, 2];
            case 1:
              p = m.sent(), o.addPopToken(p.reqCnfString), m.label = 2;
            case 2:
              return [2, o.createQueryString()];
          }
        });
      });
    }, e.prototype.createLogoutUrlQueryString = function(t) {
      var n = new Ki();
      return t.postLogoutRedirectUri && n.addPostLogoutRedirectUri(t.postLogoutRedirectUri), t.correlationId && n.addCorrelationId(t.correlationId), t.idTokenHint && n.addIdTokenHint(t.idTokenHint), t.state && n.addState(t.state), t.logoutHint && n.addLogoutHint(t.logoutHint), t.extraQueryParameters && n.addExtraQueryParameters(t.extraQueryParameters), n.createQueryString();
    }, e.prototype.extractAccountSid = function(t) {
      var n;
      return ((n = t.idTokenClaims) === null || n === void 0 ? void 0 : n.sid) || null;
    }, e.prototype.extractLoginHint = function(t) {
      var n;
      return ((n = t.idTokenClaims) === null || n === void 0 ? void 0 : n.login_hint) || null;
    }, e;
  }(xu)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Zg = (
  /** @class */
  function(r) {
    ir(e, r);
    function e(t, n) {
      return r.call(this, t, n) || this;
    }
    return e.prototype.acquireToken = function(t) {
      var n, o, a, s, l, u, f;
      return Se(this, void 0, void 0, function() {
        var h, p, m, v, C, E, _ = this;
        return Te(this, function(A) {
          switch (A.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.RefreshTokenClientAcquireToken, t.correlationId), h = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(F.RefreshTokenClientAcquireToken, t.correlationId), this.logger.verbose("RefreshTokenClientAcquireToken called", t.correlationId), p = Pr.nowSeconds(), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(F.RefreshTokenClientExecuteTokenRequest, t.correlationId), [4, this.executeTokenRequest(t, this.authority)];
            case 1:
              return m = A.sent(), v = (s = m.headers) === null || s === void 0 ? void 0 : s[mr.X_MS_HTTP_VERSION], h == null || h.addStaticFields({
                refreshTokenSize: ((l = m.body.refresh_token) === null || l === void 0 ? void 0 : l.length) || 0
              }), v && (h == null || h.addStaticFields({
                httpVerToken: v
              })), C = (u = m.headers) === null || u === void 0 ? void 0 : u[mr.X_MS_REQUEST_ID], E = new Is(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin), E.validateTokenResponse(m.body), (f = this.performanceClient) === null || f === void 0 || f.setPreQueueTime(F.HandleServerTokenResponse, t.correlationId), [2, E.handleServerTokenResponse(m.body, this.authority, p, t, void 0, void 0, !0, t.forceCache, C).then(function(R) {
                return h == null || h.endMeasurement({
                  success: !0
                }), R;
              }).catch(function(R) {
                throw _.logger.verbose("Error in fetching refresh token", t.correlationId), h == null || h.endMeasurement({
                  errorCode: R.errorCode,
                  subErrorCode: R.subError,
                  success: !1
                }), R;
              })];
          }
        });
      });
    }, e.prototype.acquireTokenByRefreshToken = function(t) {
      var n, o, a, s;
      return Se(this, void 0, void 0, function() {
        var l, u, f;
        return Te(this, function(h) {
          if (!t)
            throw et.createEmptyTokenRequestError();
          if ((n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.RefreshTokenClientAcquireTokenByRefreshToken, t.correlationId), !t.account)
            throw oe.createNoAccountInSilentRequestError();
          if (l = this.cacheManager.isAppMetadataFOCI(t.account.environment), l)
            try {
              return (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(F.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), [2, this.acquireTokenWithCachedRefreshToken(t, !0)];
            } catch (p) {
              if (u = p instanceof zr && p.errorCode === Qo.noTokensFoundError.code, f = p instanceof wo && p.errorCode === Pp.INVALID_GRANT_ERROR && p.subError === Pp.CLIENT_MISMATCH_ERROR, u || f)
                return (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(F.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), [2, this.acquireTokenWithCachedRefreshToken(t, !1)];
              throw p;
            }
          return (s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(F.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), [2, this.acquireTokenWithCachedRefreshToken(t, !1)];
        });
      });
    }, e.prototype.acquireTokenWithCachedRefreshToken = function(t, n) {
      var o, a, s;
      return Se(this, void 0, void 0, function() {
        var l, u, f;
        return Te(this, function(h) {
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
      return Se(this, void 0, void 0, function() {
        var l, u, f, h, p, m;
        return Te(this, function(v) {
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
      return Se(this, void 0, void 0, function() {
        var s, l, u, f, h, p, m;
        return Te(this, function(v) {
          switch (v.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.RefreshTokenClientCreateTokenRequestBody, t.correlationId), s = t.correlationId, l = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(F.BaseClientCreateTokenRequestHeaders, s), u = new Ki(), u.addClientId(this.config.authOptions.clientId), u.addScopes(t.scopes), u.addGrantType(ws.REFRESH_TOKEN_GRANT), u.addClientInfo(), u.addLibraryInfo(this.config.libraryInfo), u.addApplicationTelemetry(this.config.telemetry.application), u.addThrottling(), this.serverTelemetryManager && u.addServerTelemetry(this.serverTelemetryManager), u.addCorrelationId(s), u.addRefreshToken(t.refreshToken), this.config.clientCredentials.clientSecret && u.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion && (f = this.config.clientCredentials.clientAssertion, u.addClientAssertion(f.assertion), u.addClientAssertionType(f.assertionType)), t.authenticationScheme !== Ve.POP ? [3, 2] : (h = new ti(this.cryptoUtils, this.performanceClient), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(F.PopTokenGenerateCnf, t.correlationId), [4, h.generateCnf(t)]);
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
                      m = jo(t.ccsCredential.credential), u.addCcsOid(m);
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
  }(xu)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var PI = (
  /** @class */
  function(r) {
    ir(e, r);
    function e(t, n) {
      return r.call(this, t, n) || this;
    }
    return e.prototype.acquireToken = function(t) {
      return Se(this, void 0, void 0, function() {
        var n, o;
        return Te(this, function(a) {
          switch (a.label) {
            case 0:
              return a.trys.push([0, 2, , 3]), [4, this.acquireCachedToken(t)];
            case 1:
              return [2, a.sent()];
            case 2:
              if (n = a.sent(), n instanceof oe && n.errorCode === j.tokenRefreshRequired.code)
                return o = new Zg(this.config, this.performanceClient), [2, o.acquireTokenByRefreshToken(t)];
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
      return Se(this, void 0, void 0, function() {
        var u, f;
        return Te(this, function(h) {
          switch (h.label) {
            case 0:
              if (!t)
                throw et.createEmptyTokenRequestError();
              if (t.forceRefresh)
                throw (n = this.serverTelemetryManager) === null || n === void 0 || n.setCacheOutcome($n.FORCE_REFRESH), this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because forceRefresh is true."), oe.createRefreshRequiredError();
              if (!this.config.cacheOptions.claimsBasedCachingEnabled && !re.isEmptyObj(t.claims))
                throw (o = this.serverTelemetryManager) === null || o === void 0 || o.setCacheOutcome($n.CLAIMS_REQUESTED_CACHE_SKIPPED), this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because claims-based caching is disabled and claims were requested."), oe.createRefreshRequiredError();
              if (!t.account)
                throw oe.createNoAccountInSilentRequestError();
              if (u = t.authority || this.authority.getPreferredCache(), f = this.cacheManager.readCacheRecord(t.account, t, u), f.accessToken) {
                if (Pr.wasClockTurnedBack(f.accessToken.cachedAt) || Pr.isTokenExpired(f.accessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds))
                  throw (s = this.serverTelemetryManager) === null || s === void 0 || s.setCacheOutcome($n.CACHED_ACCESS_TOKEN_EXPIRED), this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token is expired or will expire within " + this.config.systemOptions.tokenRenewalOffsetSeconds + " seconds."), oe.createRefreshRequiredError();
                if (f.accessToken.refreshOn && Pr.isTokenExpired(f.accessToken.refreshOn, 0))
                  throw (l = this.serverTelemetryManager) === null || l === void 0 || l.setCacheOutcome($n.REFRESH_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token's refreshOn property has been exceeded'."), oe.createRefreshRequiredError();
              } else
                throw (a = this.serverTelemetryManager) === null || a === void 0 || a.setCacheOutcome($n.NO_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties."), oe.createRefreshRequiredError();
              return this.config.serverTelemetryManager && this.config.serverTelemetryManager.incrementCacheHits(), [4, this.generateResultFromCacheRecord(f, t)];
            case 1:
              return [2, h.sent()];
          }
        });
      });
    }, e.prototype.generateResultFromCacheRecord = function(t, n) {
      return Se(this, void 0, void 0, function() {
        var o, a;
        return Te(this, function(s) {
          switch (s.label) {
            case 0:
              if (t.idToken && (o = new sn(t.idToken.secret, this.config.cryptoInterface)), n.maxAge || n.maxAge === 0) {
                if (a = o == null ? void 0 : o.claims.auth_time, !a)
                  throw oe.createAuthTimeNotFoundError();
                sn.checkMaxAge(a, n.maxAge);
              }
              return [4, Is.generateAuthenticationResult(this.cryptoUtils, this.authority, t, !0, n, o)];
            case 1:
              return [2, s.sent()];
          }
        });
      });
    }, e;
  }(xu)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
function NI(r) {
  return r.hasOwnProperty("authorization_endpoint") && r.hasOwnProperty("token_endpoint") && r.hasOwnProperty("issuer") && r.hasOwnProperty("jwks_uri");
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
var em = { endpointMetadata: { "https://login.microsoftonline.com/common/": { token_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/common/": { token_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/common/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/common/": { token_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/consumers/": { token_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/consumers/": { token_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/consumers/": { token_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/organizations/": { token_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/organizations/": { token_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/organizations/": { token_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" } }, instanceDiscoveryMetadata: { "https://login.microsoftonline.com/common/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/common/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/common/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/consumers/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/consumers/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/consumers/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/organizations/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/organizations/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/organizations/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] } } }, Op = em.endpointMetadata, Mp = em.instanceDiscoveryMetadata;
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Vi;
(function(r) {
  r.AAD = "AAD", r.OIDC = "OIDC";
})(Vi || (Vi = {}));
/*! @azure/msal-common v13.3.1 2023-10-27 */
var cu = (
  /** @class */
  function() {
    function r() {
      this.expiresAt = Pr.nowSeconds() + Fi.REFRESH_TIME_SECONDS;
    }
    return r.prototype.updateCloudDiscoveryMetadata = function(e, t) {
      this.aliases = e.aliases, this.preferred_cache = e.preferred_cache, this.preferred_network = e.preferred_network, this.aliasesFromNetwork = t;
    }, r.prototype.updateEndpointMetadata = function(e, t) {
      this.authorization_endpoint = e.authorization_endpoint, this.token_endpoint = e.token_endpoint, this.end_session_endpoint = e.end_session_endpoint, this.issuer = e.issuer, this.endpointsFromNetwork = t, this.jwks_uri = e.jwks_uri;
    }, r.prototype.updateCanonicalAuthority = function(e) {
      this.canonical_authority = e;
    }, r.prototype.resetExpiresAt = function() {
      this.expiresAt = Pr.nowSeconds() + Fi.REFRESH_TIME_SECONDS;
    }, r.prototype.isExpired = function() {
      return this.expiresAt <= Pr.nowSeconds();
    }, r.isAuthorityMetadataEntity = function(e, t) {
      return t ? e.indexOf(Fi.CACHE_KEY) === 0 && t.hasOwnProperty("aliases") && t.hasOwnProperty("preferred_cache") && t.hasOwnProperty("preferred_network") && t.hasOwnProperty("canonical_authority") && t.hasOwnProperty("authorization_endpoint") && t.hasOwnProperty("token_endpoint") && t.hasOwnProperty("issuer") && t.hasOwnProperty("aliasesFromNetwork") && t.hasOwnProperty("endpointsFromNetwork") && t.hasOwnProperty("expiresAt") && t.hasOwnProperty("jwks_uri") : !1;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
function OI(r) {
  return r.hasOwnProperty("tenant_discovery_endpoint") && r.hasOwnProperty("metadata");
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
function MI(r) {
  return r.hasOwnProperty("error") && r.hasOwnProperty("error_description");
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
var xI = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.networkInterface = e, this.performanceClient = t, this.correlationId = n;
    }
    return r.prototype.detectRegion = function(e, t) {
      var n, o, a, s;
      return Se(this, void 0, void 0, function() {
        var l, u, f, h, p;
        return Te(this, function(m) {
          switch (m.label) {
            case 0:
              if ((n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.RegionDiscoveryDetectRegion, this.correlationId), l = e, l)
                return [3, 8];
              u = r.IMDS_OPTIONS, m.label = 1;
            case 1:
              return m.trys.push([1, 6, , 7]), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(F.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [4, this.getRegionFromIMDS(N.IMDS_VERSION, u)];
            case 2:
              return f = m.sent(), f.status === Wo.httpSuccess && (l = f.body, t.region_source = Kn.IMDS), f.status !== Wo.httpBadRequest ? [3, 5] : ((a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(F.RegionDiscoveryGetCurrentVersion, this.correlationId), [4, this.getCurrentVersion(u)]);
            case 3:
              return h = m.sent(), h ? ((s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(F.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [4, this.getRegionFromIMDS(h, u)]) : (t.region_source = Kn.FAILED_AUTO_DETECTION, [2, null]);
            case 4:
              p = m.sent(), p.status === Wo.httpSuccess && (l = p.body, t.region_source = Kn.IMDS), m.label = 5;
            case 5:
              return [3, 7];
            case 6:
              return m.sent(), t.region_source = Kn.FAILED_AUTO_DETECTION, [2, null];
            case 7:
              return [3, 9];
            case 8:
              t.region_source = Kn.ENVIRONMENT_VARIABLE, m.label = 9;
            case 9:
              return l || (t.region_source = Kn.FAILED_AUTO_DETECTION), [2, l || null];
          }
        });
      });
    }, r.prototype.getRegionFromIMDS = function(e, t) {
      var n;
      return Se(this, void 0, void 0, function() {
        return Te(this, function(o) {
          return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [2, this.networkInterface.sendGetRequestAsync(N.IMDS_ENDPOINT + "?api-version=" + e + "&format=text", t, N.IMDS_TIMEOUT)];
        });
      });
    }, r.prototype.getCurrentVersion = function(e) {
      var t;
      return Se(this, void 0, void 0, function() {
        var n;
        return Te(this, function(o) {
          switch (o.label) {
            case 0:
              (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(F.RegionDiscoveryGetCurrentVersion, this.correlationId), o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(N.IMDS_ENDPOINT + "?format=json", e)];
            case 2:
              return n = o.sent(), n.status === Wo.httpBadRequest && n.body && n.body["newest-versions"] && n.body["newest-versions"].length > 0 ? [2, n.body["newest-versions"][0]] : [2, null];
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
var Wi = (
  /** @class */
  function() {
    function r(e, t, n, o, a, s, l) {
      this.canonicalAuthority = e, this._canonicalAuthority.validateAsUri(), this.networkInterface = t, this.cacheManager = n, this.authorityOptions = o, this.regionDiscoveryMetadata = { region_used: void 0, region_source: void 0, region_outcome: void 0 }, this.logger = a, this.performanceClient = s, this.correlationId = l, this.regionDiscovery = new xI(t, this.performanceClient, this.correlationId);
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
        throw oe.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
        throw oe.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "deviceCodeEndpoint", {
      get: function() {
        if (this.discoveryComplete())
          return this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));
        throw oe.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
            throw oe.createLogoutNotSupportedError();
          return this.replacePath(this.metadata.end_session_endpoint);
        } else
          throw oe.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
        throw oe.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
        throw oe.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.canReplaceTenant = function(e) {
      return e.PathSegments.length === 1 && !r.reservedTenantDomains.has(e.PathSegments[0]) && this.getAuthorityType(e) === Wt.Default && this.protocolMode === Vi.AAD;
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
        return this.authorityType === Wt.Adfs || this.authorityType === Wt.Dsts || this.protocolMode === Vi.OIDC ? this.canonicalAuthority + ".well-known/openid-configuration" : this.canonicalAuthority + "v2.0/.well-known/openid-configuration";
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.discoveryComplete = function() {
      return !!this.metadata;
    }, r.prototype.resolveEndpointsAsync = function() {
      var e, t, n;
      return Se(this, void 0, void 0, function() {
        var o, a, s, l;
        return Te(this, function(u) {
          switch (u.label) {
            case 0:
              return (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(F.AuthorityResolveEndpointsAsync, this.correlationId), o = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort), o || (o = new cu(), o.updateCanonicalAuthority(this.canonicalAuthority)), (t = this.performanceClient) === null || t === void 0 || t.setPreQueueTime(F.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId), [4, this.updateCloudDiscoveryMetadata(o)];
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
      return Se(this, void 0, void 0, function() {
        var u, f;
        return Te(this, function(h) {
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
              throw oe.createUnableToGetOpenidConfigError(this.defaultOpenIdConfigurationEndpoint);
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
      return Se(this, void 0, void 0, function() {
        var t, n;
        return Te(this, function(o) {
          switch (o.label) {
            case 0:
              (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(F.AuthorityGetEndpointMetadataFromNetwork, this.correlationId), t = {}, o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(this.defaultOpenIdConfigurationEndpoint, t)];
            case 2:
              return n = o.sent(), [2, NI(n.body) ? n.body : null];
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
      return this.canonicalAuthority in Op ? Op[this.canonicalAuthority] : null;
    }, r.prototype.updateMetadataWithRegionalInformation = function(e) {
      var t, n, o, a;
      return Se(this, void 0, void 0, function() {
        var s, l;
        return Te(this, function(u) {
          switch (u.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(F.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId), s = (n = this.authorityOptions.azureRegionConfiguration) === null || n === void 0 ? void 0 : n.azureRegion, s ? s !== N.AZURE_REGION_AUTO_DISCOVER_FLAG ? (this.regionDiscoveryMetadata.region_outcome = Bi.CONFIGURED_NO_AUTO_DETECTION, this.regionDiscoveryMetadata.region_used = s, [2, r.replaceWithRegionalInformation(e, s)]) : ((o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(F.RegionDiscoveryDetectRegion, this.correlationId), [4, this.regionDiscovery.detectRegion((a = this.authorityOptions.azureRegionConfiguration) === null || a === void 0 ? void 0 : a.environmentRegion, this.regionDiscoveryMetadata)]) : [3, 2];
            case 1:
              if (l = u.sent(), l)
                return this.regionDiscoveryMetadata.region_outcome = Bi.AUTO_DETECTION_REQUESTED_SUCCESSFUL, this.regionDiscoveryMetadata.region_used = l, [2, r.replaceWithRegionalInformation(e, l)];
              this.regionDiscoveryMetadata.region_outcome = Bi.AUTO_DETECTION_REQUESTED_FAILED, u.label = 2;
            case 2:
              return [2, e];
          }
        });
      });
    }, r.prototype.updateCloudDiscoveryMetadata = function(e) {
      var t, n;
      return Se(this, void 0, void 0, function() {
        var o, a, s;
        return Te(this, function(l) {
          switch (l.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(F.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId), this.logger.verbose("Attempting to get cloud discovery metadata in the config"), this.logger.verbosePii("Known Authorities: " + (this.authorityOptions.knownAuthorities || N.NOT_APPLICABLE)), this.logger.verbosePii("Authority Metadata: " + (this.authorityOptions.authorityMetadata || N.NOT_APPLICABLE)), this.logger.verbosePii("Canonical Authority: " + (e.canonical_authority || N.NOT_APPLICABLE)), o = this.getCloudDiscoveryMetadataFromConfig(), o ? (this.logger.verbose("Found cloud discovery metadata in the config."), e.updateCloudDiscoveryMetadata(o, !1), [2, kr.CONFIG]) : (this.logger.verbose("Did not find cloud discovery metadata in the config... Attempting to get cloud discovery metadata from the cache."), a = e.isExpired(), this.isAuthoritySameType(e) && e.aliasesFromNetwork && !a ? (this.logger.verbose("Found metadata in the cache."), [2, kr.CACHE]) : (a && this.logger.verbose("The metadata entity is expired."), this.logger.verbose("Did not find cloud discovery metadata in the cache... Attempting to get cloud discovery metadata from the network."), (n = this.performanceClient) === null || n === void 0 || n.setPreQueueTime(F.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId), [4, this.getCloudDiscoveryMetadataFromNetwork()]));
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
      return Se(this, void 0, void 0, function() {
        var t, n, o, a, s, l, u, f;
        return Te(this, function(h) {
          switch (h.label) {
            case 0:
              (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(F.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId), t = "" + N.AAD_INSTANCE_DISCOVERY_ENDPT + this.canonicalAuthority + "oauth2/v2.0/authorize", n = {}, o = null, h.label = 1;
            case 1:
              return h.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(t, n)];
            case 2:
              if (a = h.sent(), s = void 0, l = void 0, OI(a.body))
                s = a.body, l = s.metadata, this.logger.verbosePii("tenant_discovery_endpoint is: " + s.tenant_discovery_endpoint);
              else if (MI(a.body)) {
                if (this.logger.warning("A CloudInstanceDiscoveryErrorResponse was returned. The cloud instance discovery network request's status code is: " + a.status), s = a.body, s.error === N.INVALID_INSTANCE)
                  return this.logger.error("The CloudInstanceDiscoveryErrorResponse error is invalid_instance."), [2, null];
                this.logger.warning("The CloudInstanceDiscoveryErrorResponse error is " + s.error), this.logger.warning("The CloudInstanceDiscoveryErrorResponse error description is " + s.error_description), this.logger.warning("Setting the value of the CloudInstanceDiscoveryMetadata (returned from the network) to []"), l = [];
              } else
                return this.logger.error("AAD did not return a CloudInstanceDiscoveryResponse or CloudInstanceDiscoveryErrorResponse"), [2, null];
              return this.logger.verbose("Attempting to find a match between the developer's authority and the CloudInstanceDiscoveryMetadata returned from the network request."), o = r.getCloudDiscoveryMetadataFromNetworkResponse(l, this.hostnameAndPort), [3, 4];
            case 3:
              return u = h.sent(), u instanceof de ? this.logger.error(`There was a network error while attempting to get the cloud discovery instance metadata.
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
      return this.canonicalAuthority in Mp ? Mp[this.canonicalAuthority] : null;
    }, r.prototype.isInKnownAuthorities = function() {
      var e = this, t = this.authorityOptions.knownAuthorities.filter(function(n) {
        return He.getDomainFromUrl(n).toLowerCase() === e.hostnameAndPort;
      });
      return t.length > 0;
    }, r.generateAuthority = function(e, t) {
      var n;
      if (t && t.azureCloudInstance !== zi.None) {
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
      throw oe.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
      mo.COMMON,
      mo.CONSUMERS,
      mo.ORGANIZATIONS
    ]), r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var As = (
  /** @class */
  function() {
    function r() {
    }
    return r.createDiscoveredInstance = function(e, t, n, o, a, s, l) {
      return Se(this, void 0, void 0, function() {
        var u, f, h;
        return Te(this, function(p) {
          switch (p.label) {
            case 0:
              s == null || s.addQueueMeasurement(F.AuthorityFactoryCreateDiscoveredInstance, l), u = Wi.transformCIAMAuthority(e), f = r.createInstance(u, t, n, o, a, s, l), p.label = 1;
            case 1:
              return p.trys.push([1, 3, , 4]), s == null || s.setPreQueueTime(F.AuthorityResolveEndpointsAsync, l), [4, f.resolveEndpointsAsync()];
            case 2:
              return p.sent(), [2, f];
            case 3:
              throw h = p.sent(), oe.createEndpointDiscoveryIncompleteError(h);
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
      return new Wi(e, t, n, o, a, s, l);
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Rs = (
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
var xp = (
  /** @class */
  function() {
    function r() {
    }
    return r.isThrottlingEntity = function(e, t) {
      var n = !1;
      e && (n = e.indexOf(Hi.THROTTLING_PREFIX) === 0);
      var o = !0;
      return t && (o = t.hasOwnProperty("throttleTime")), n && o;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var LI = {
  sendGetRequestAsync: function() {
    var r = "Network interface - sendGetRequestAsync() has not been implemented for the Network interface.";
    return Promise.reject(de.createUnexpectedError(r));
  },
  sendPostRequestAsync: function() {
    var r = "Network interface - sendPostRequestAsync() has not been implemented for the Network interface.";
    return Promise.reject(de.createUnexpectedError(r));
  }
};
/*! @azure/msal-common v13.3.1 2023-10-27 */
var is = {
  missingKidError: {
    code: "missing_kid_error",
    desc: "The JOSE Header for the requested JWT, JWS or JWK object requires a keyId to be configured as the 'kid' header claim. No 'kid' value was provided."
  },
  missingAlgError: {
    code: "missing_alg_error",
    desc: "The JOSE Header for the requested JWT, JWS or JWK object requires an algorithm to be specified as the 'alg' header claim. No 'alg' value was provided."
  }
}, Lp = (
  /** @class */
  function(r) {
    ir(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return o.name = "JoseHeaderError", Object.setPrototypeOf(o, e.prototype), o;
    }
    return e.createMissingKidError = function() {
      return new e(is.missingKidError.code, is.missingKidError.desc);
    }, e.createMissingAlgError = function() {
      return new e(is.missingAlgError.code, is.missingAlgError.desc);
    }, e;
  }(de)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var DI = (
  /** @class */
  function() {
    function r(e) {
      this.typ = e.typ, this.alg = e.alg, this.kid = e.kid;
    }
    return r.getShrHeaderString = function(e) {
      if (!e.kid)
        throw Lp.createMissingKidError();
      if (!e.alg)
        throw Lp.createMissingAlgError();
      var t = new r({
        // Access Token PoP headers must have type pop, but the type header can be overriden for special cases
        typ: e.typ || iu.Pop,
        kid: e.kid,
        alg: e.alg
      });
      return JSON.stringify(t);
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var UI = (
  /** @class */
  function() {
    function r(e, t) {
      this.cacheOutcome = $n.NO_CACHE_HIT, this.cacheManager = t, this.apiId = e.apiId, this.correlationId = e.correlationId, this.wrapperSKU = e.wrapperSKU || N.EMPTY_STRING, this.wrapperVer = e.wrapperVer || N.EMPTY_STRING, this.telemetryCacheKey = Tt.CACHE_KEY + Ct.CACHE_KEY_SEPARATOR + e.clientId;
    }
    return r.prototype.generateCurrentRequestHeaderValue = function() {
      var e = "" + this.apiId + Tt.VALUE_SEPARATOR + this.cacheOutcome, t = [this.wrapperSKU, this.wrapperVer].join(Tt.VALUE_SEPARATOR), n = this.getRegionDiscoveryFields(), o = [e, n].join(Tt.VALUE_SEPARATOR);
      return [Tt.SCHEMA_VERSION, o, t].join(Tt.CATEGORY_SEPARATOR);
    }, r.prototype.generateLastRequestHeaderValue = function() {
      var e = this.getLastRequests(), t = r.maxErrorsToSend(e), n = e.failedRequests.slice(0, 2 * t).join(Tt.VALUE_SEPARATOR), o = e.errors.slice(0, t).join(Tt.VALUE_SEPARATOR), a = e.errors.length, s = t < a ? Tt.OVERFLOW_TRUE : Tt.OVERFLOW_FALSE, l = [a, s].join(Tt.VALUE_SEPARATOR);
      return [Tt.SCHEMA_VERSION, e.cacheHits, n, o, l].join(Tt.CATEGORY_SEPARATOR);
    }, r.prototype.cacheFailedRequest = function(e) {
      var t = this.getLastRequests();
      t.errors.length >= Tt.MAX_CACHED_ERRORS && (t.failedRequests.shift(), t.failedRequests.shift(), t.errors.shift()), t.failedRequests.push(this.apiId, this.correlationId), re.isEmpty(e.subError) ? re.isEmpty(e.errorCode) ? e && e.toString() ? t.errors.push(e.toString()) : t.errors.push(Tt.UNKNOWN_ERROR) : t.errors.push(e.errorCode) : t.errors.push(e.subError), this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t);
    }, r.prototype.incrementCacheHits = function() {
      var e = this.getLastRequests();
      return e.cacheHits += 1, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e), e.cacheHits;
    }, r.prototype.getLastRequests = function() {
      var e = new Rs(), t = this.cacheManager.getServerTelemetry(this.telemetryCacheKey);
      return t || e;
    }, r.prototype.clearTelemetryCache = function() {
      var e = this.getLastRequests(), t = r.maxErrorsToSend(e), n = e.errors.length;
      if (t === n)
        this.cacheManager.removeItem(this.telemetryCacheKey);
      else {
        var o = new Rs();
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
var tm = (
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
      return RI;
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
        status: Ts.InProgress,
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
      }), h.incompleteSubMeasurements = void 0, h = $e($e({}, h), { durationMs: Math.round(f), queuedTimeMs: u.totalQueueTime, queuedCount: u.totalQueueCount, queuedManuallyCompletedCount: u.manuallyCompletedCount, status: Ts.Completed, incompleteSubsCount: p }), this.truncateIntegralFields(h, this.getIntFields()), this.emitEvents([h], e.correlationId), h;
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
var Dp = (
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
), FI = (
  /** @class */
  function(r) {
    ir(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.generateId = function() {
      return "callback-id";
    }, e.prototype.startPerformanceMeasuremeant = function() {
      return new Dp();
    }, e.prototype.startPerformanceMeasurement = function() {
      return new Dp();
    }, e.prototype.calculateQueuedTime = function(t, n) {
      return 0;
    }, e.prototype.addQueueMeasurement = function(t, n, o) {
    }, e.prototype.setPreQueueTime = function(t, n) {
    }, e;
  }(tm)
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
  }(de)
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
}, xi = {
  CHANNEL_ID: "53ee284d-920a-4b59-9d30-a60315b26836",
  PREFERRED_EXTENSION_ID: "ppnbnpeolgkicgegkbkbjmhlideopiji",
  MATS_TELEMETRY: "MATS"
}, _n;
(function(r) {
  r.HandshakeRequest = "Handshake", r.HandshakeResponse = "HandshakeResponse", r.GetToken = "GetToken", r.Response = "Response";
})(_n || (_n = {}));
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
var Jo;
(function(r) {
  r.WRAPPER_SKU = "wrapper.sku", r.WRAPPER_VER = "wrapper.version";
})(Jo || (Jo = {}));
var Ze;
(function(r) {
  r[r.acquireTokenRedirect = 861] = "acquireTokenRedirect", r[r.acquireTokenPopup = 862] = "acquireTokenPopup", r[r.ssoSilent = 863] = "ssoSilent", r[r.acquireTokenSilent_authCode = 864] = "acquireTokenSilent_authCode", r[r.handleRedirectPromise = 865] = "handleRedirectPromise", r[r.acquireTokenByCode = 866] = "acquireTokenByCode", r[r.acquireTokenSilent_silentFlow = 61] = "acquireTokenSilent_silentFlow", r[r.logout = 961] = "logout", r[r.logoutPopup = 962] = "logoutPopup";
})(Ze || (Ze = {}));
var ce;
(function(r) {
  r.Redirect = "redirect", r.Popup = "popup", r.Silent = "silent", r.None = "none";
})(ce || (ce = {}));
var Up;
(function(r) {
  r.Startup = "startup", r.Login = "login", r.Logout = "logout", r.AcquireToken = "acquireToken", r.SsoSilent = "ssoSilent", r.HandleRedirect = "handleRedirect", r.None = "none";
})(Up || (Up = {}));
var Fp = {
  scopes: na
}, ri = "jwk", Hp;
(function(r) {
  r.React = "@azure/msal-react", r.Angular = "@azure/msal-angular";
})(Hp || (Hp = {}));
var lu = "msal.db", HI = 1, BI = lu + ".keys", nr;
(function(r) {
  r[r.Default = 0] = "Default", r[r.AccessToken = 1] = "AccessToken", r[r.AccessTokenAndRefreshToken = 2] = "AccessTokenAndRefreshToken", r[r.RefreshToken = 3] = "RefreshToken", r[r.RefreshTokenAndNetwork = 4] = "RefreshTokenAndNetwork", r[r.Skip = 5] = "Skip";
})(nr || (nr = {}));
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var er = {
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
}, ks = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return o.name = "BrowserConfigurationAuthError", Object.setPrototypeOf(o, e.prototype), o;
    }
    return e.createRedirectUriEmptyError = function() {
      return new e(er.redirectUriNotSet.code, er.redirectUriNotSet.desc);
    }, e.createPostLogoutRedirectUriEmptyError = function() {
      return new e(er.postLogoutUriNotSet.code, er.postLogoutUriNotSet.desc);
    }, e.createStorageNotSupportedError = function(t) {
      return new e(er.storageNotSupportedError.code, er.storageNotSupportedError.desc + " Given Location: " + t);
    }, e.createRedirectCallbacksNotSetError = function() {
      return new e(er.noRedirectCallbacksSet.code, er.noRedirectCallbacksSet.desc);
    }, e.createStubPcaInstanceCalledError = function() {
      return new e(er.stubPcaInstanceCalled.code, er.stubPcaInstanceCalled.desc);
    }, e.createInMemoryRedirectUnavailableError = function() {
      return new e(er.inMemRedirectUnavailable.code, er.inMemRedirectUnavailable.desc);
    }, e.createEntropyNotProvided = function() {
      return new e(er.entropyNotProvided.code, er.entropyNotProvided.desc);
    }, e;
  }(de)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Bp = (
  /** @class */
  function() {
    function r(e) {
      this.validateWindowStorage(e), this.windowStorage = window[e];
    }
    return r.prototype.validateWindowStorage = function(e) {
      if (e !== pt.LocalStorage && e !== pt.SessionStorage)
        throw ks.createStorageNotSupportedError(e);
      var t = !!window[e];
      if (!t)
        throw ks.createStorageNotSupportedError(e);
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
var uu = (
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
var rm = (
  /** @class */
  function() {
    function r() {
    }
    return r.extractBrowserRequestState = function(e, t) {
      if (re.isEmpty(t))
        return null;
      try {
        var n = Sn.parseRequestState(e, t);
        return n.libraryState.meta;
      } catch (o) {
        throw oe.createInvalidStateError(t, o);
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
var du = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t, n, o, a) {
      var s = r.call(this, t, o, a) || this;
      return s.COOKIE_LIFE_MULTIPLIER = 24 * 60 * 60 * 1e3, s.cacheConfig = n, s.logger = a, s.internalStorage = new uu(), s.browserStorage = s.setupBrowserStorage(s.cacheConfig.cacheLocation), s.temporaryCacheStorage = s.setupTemporaryCacheStorage(s.cacheConfig.temporaryCacheLocation, s.cacheConfig.cacheLocation), n.cacheMigrationEnabled && (s.migrateCacheEntries(), s.createKeyMaps()), s;
    }
    return e.prototype.setupBrowserStorage = function(t) {
      switch (t) {
        case pt.LocalStorage:
        case pt.SessionStorage:
          try {
            return new Bp(t);
          } catch (n) {
            this.logger.verbose(n);
            break;
          }
      }
      return this.cacheConfig.cacheLocation = pt.MemoryStorage, new uu();
    }, e.prototype.setupTemporaryCacheStorage = function(t, n) {
      switch (n) {
        case pt.LocalStorage:
        case pt.SessionStorage:
          try {
            return new Bp(t || pt.SessionStorage);
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
                case pe.ID_TOKEN:
                  if (po.isIdTokenEntity(u)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - idToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - idToken with key: " + s + " found, saving key to token key map");
                    var f = tr.toObject(new po(), u), h = t.updateCredentialCacheKey(s, f);
                    t.addTokenKey(h, pe.ID_TOKEN);
                    return;
                  } else
                    t.logger.trace("BrowserCacheManager:createKeyMaps - key found matching idToken schema with value containing idToken credentialType field but value failed IdTokenEntity validation, skipping."), t.logger.tracePii("BrowserCacheManager:createKeyMaps - failed idToken validation on key: " + s);
                  break;
                case pe.ACCESS_TOKEN:
                case pe.ACCESS_TOKEN_WITH_AUTH_SCHEME:
                  if (go.isAccessTokenEntity(u)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - accessToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - accessToken with key: " + s + " found, saving key to token key map");
                    var p = tr.toObject(new go(), u), h = t.updateCredentialCacheKey(s, p);
                    t.addTokenKey(h, pe.ACCESS_TOKEN);
                    return;
                  } else
                    t.logger.trace("BrowserCacheManager:createKeyMaps - key found matching accessToken schema with value containing accessToken credentialType field but value failed AccessTokenEntity validation, skipping."), t.logger.tracePii("BrowserCacheManager:createKeyMaps - failed accessToken validation on key: " + s);
                  break;
                case pe.REFRESH_TOKEN:
                  if (Yo.isRefreshTokenEntity(u)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - refreshToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - refreshToken with key: " + s + " found, saving key to token key map");
                    var m = tr.toObject(new Yo(), u), h = t.updateCredentialCacheKey(s, m);
                    t.addTokenKey(h, pe.REFRESH_TOKEN);
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
      return !o || !At.isAccountEntity(o) ? (this.removeAccountKeyFromMap(t), null) : tr.toObject(new At(), o);
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
      r.prototype.removeIdToken.call(this, t), this.removeTokenKey(t, pe.ID_TOKEN);
    }, e.prototype.removeAccessToken = function(t) {
      return G(this, void 0, void 0, function() {
        return z(this, function(n) {
          return r.prototype.removeAccessToken.call(this, t), this.removeTokenKey(t, pe.ACCESS_TOKEN), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.removeRefreshToken = function(t) {
      r.prototype.removeRefreshToken.call(this, t), this.removeTokenKey(t, pe.REFRESH_TOKEN);
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
        case pe.ID_TOKEN:
          o.idToken.indexOf(t) === -1 && (this.logger.info("BrowserCacheManager: addTokenKey - idToken added to map"), o.idToken.push(t));
          break;
        case pe.ACCESS_TOKEN:
          o.accessToken.indexOf(t) === -1 && (this.logger.info("BrowserCacheManager: addTokenKey - accessToken added to map"), o.accessToken.push(t));
          break;
        case pe.REFRESH_TOKEN:
          o.refreshToken.indexOf(t) === -1 && (this.logger.info("BrowserCacheManager: addTokenKey - refreshToken added to map"), o.refreshToken.push(t));
          break;
        default:
          this.logger.error("BrowserCacheManager:addTokenKey - CredentialType provided invalid. CredentialType: " + n), oe.createUnexpectedCredentialTypeError();
      }
      this.setItem(en.TOKEN_KEYS + "." + this.clientId, JSON.stringify(o));
    }, e.prototype.removeTokenKey = function(t, n) {
      this.logger.trace("BrowserCacheManager removeTokenKey called");
      var o = this.getTokenKeys();
      switch (n) {
        case pe.ID_TOKEN:
          this.logger.infoPii("BrowserCacheManager: removeTokenKey - attempting to remove idToken with key: " + t + " from map");
          var a = o.idToken.indexOf(t);
          a > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - idToken removed from map"), o.idToken.splice(a, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - idToken does not exist in map. Either it was previously removed or it was never added.");
          break;
        case pe.ACCESS_TOKEN:
          this.logger.infoPii("BrowserCacheManager: removeTokenKey - attempting to remove accessToken with key: " + t + " from map");
          var s = o.accessToken.indexOf(t);
          s > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - accessToken removed from map"), o.accessToken.splice(s, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - accessToken does not exist in map. Either it was previously removed or it was never added.");
          break;
        case pe.REFRESH_TOKEN:
          this.logger.infoPii("BrowserCacheManager: removeTokenKey - attempting to remove refreshToken with key: " + t + " from map");
          var l = o.refreshToken.indexOf(t);
          l > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - refreshToken removed from map"), o.refreshToken.splice(l, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - refreshToken does not exist in map. Either it was previously removed or it was never added.");
          break;
        default:
          this.logger.error("BrowserCacheManager:removeTokenKey - CredentialType provided invalid. CredentialType: " + n), oe.createUnexpectedCredentialTypeError();
      }
      this.setItem(en.TOKEN_KEYS + "." + this.clientId, JSON.stringify(o));
    }, e.prototype.getIdTokenCredential = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), this.removeTokenKey(t, pe.ID_TOKEN), null;
      var o = this.validateAndParseJson(n);
      return !o || !po.isIdTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), this.removeTokenKey(t, pe.ID_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getIdTokenCredential: cache hit"), tr.toObject(new po(), o));
    }, e.prototype.setIdTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setIdTokenCredential called");
      var n = t.generateCredentialKey();
      this.setItem(n, JSON.stringify(t)), this.addTokenKey(n, pe.ID_TOKEN);
    }, e.prototype.getAccessTokenCredential = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), this.removeTokenKey(t, pe.ACCESS_TOKEN), null;
      var o = this.validateAndParseJson(n);
      return !o || !go.isAccessTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), this.removeTokenKey(t, pe.ACCESS_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: cache hit"), tr.toObject(new go(), o));
    }, e.prototype.setAccessTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setAccessTokenCredential called");
      var n = t.generateCredentialKey();
      this.setItem(n, JSON.stringify(t)), this.addTokenKey(n, pe.ACCESS_TOKEN);
    }, e.prototype.getRefreshTokenCredential = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), this.removeTokenKey(t, pe.REFRESH_TOKEN), null;
      var o = this.validateAndParseJson(n);
      return !o || !Yo.isRefreshTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), this.removeTokenKey(t, pe.REFRESH_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: cache hit"), tr.toObject(new Yo(), o));
    }, e.prototype.setRefreshTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setRefreshTokenCredential called");
      var n = t.generateCredentialKey();
      this.setItem(n, JSON.stringify(t)), this.addTokenKey(n, pe.REFRESH_TOKEN);
    }, e.prototype.getAppMetadata = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return !o || !su.isAppMetadataEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getAppMetadata: cache hit"), tr.toObject(new su(), o));
    }, e.prototype.setAppMetadata = function(t) {
      this.logger.trace("BrowserCacheManager.setAppMetadata called");
      var n = t.generateAppMetadataKey();
      this.setItem(n, JSON.stringify(t));
    }, e.prototype.getServerTelemetry = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return !o || !Rs.isServerTelemetryEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getServerTelemetry: cache hit"), tr.toObject(new Rs(), o));
    }, e.prototype.setServerTelemetry = function(t, n) {
      this.logger.trace("BrowserCacheManager.setServerTelemetry called"), this.setItem(t, JSON.stringify(n));
    }, e.prototype.getAuthorityMetadata = function(t) {
      var n = this.internalStorage.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getAuthorityMetadata: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return o && cu.isAuthorityMetadataEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getAuthorityMetadata: cache hit"), tr.toObject(new cu(), o)) : null;
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
        throw oe.createMultipleMatchingAccountsInCacheError();
      return null;
    }, e.prototype.getThrottlingCache = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return !o || !xp.isThrottlingEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getThrottlingCache: cache hit"), tr.toObject(new xp(), o));
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
      return Nu(this.browserStorage.getKeys(), this.temporaryCacheStorage.getKeys());
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
      return n ? JSON.stringify(t) : re.startsWith(t, N.CACHE_PREFIX) || re.startsWith(t, yt.ADAL_ID_TOKEN) ? t : N.CACHE_PREFIX + "." + this.clientId + "." + t;
    }, e.prototype.generateAuthorityKey = function(t) {
      var n = Sn.parseRequestState(this.cryptoImpl, t).libraryState.id;
      return this.generateCacheKey(Be.AUTHORITY + "." + n);
    }, e.prototype.generateNonceKey = function(t) {
      var n = Sn.parseRequestState(this.cryptoImpl, t).libraryState.id;
      return this.generateCacheKey(Be.NONCE_IDTOKEN + "." + n);
    }, e.prototype.generateStateKey = function(t) {
      var n = Sn.parseRequestState(this.cryptoImpl, t).libraryState.id;
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
        this.logger.infoPii("BrowserCacheManager.cleanRequestByState: Removing temporary cache items for state: " + o), this.resetRequestCache(o || N.EMPTY_STRING);
      }
      this.clearMsalCookies();
    }, e.prototype.cleanRequestByInteractionType = function(t) {
      var n = this;
      this.logger.trace("BrowserCacheManager.cleanRequestByInteractionType called"), this.getKeys().forEach(function(o) {
        if (o.indexOf(Be.REQUEST_STATE) !== -1) {
          var a = n.temporaryCacheStorage.getItem(o);
          if (a) {
            var s = rm.extractBrowserRequestState(n.cryptoImpl, a);
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
  }(tr)
), KI = function(r, e) {
  var t = {
    cacheLocation: pt.MemoryStorage,
    temporaryCacheLocation: pt.MemoryStorage,
    storeAuthStateInCookie: !1,
    secureCookies: !1,
    cacheMigrationEnabled: !1,
    claimsBasedCachingEnabled: !0
  };
  return new du(r, t, bs, e);
};
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Dl = "@azure/msal-browser", $i = "2.38.3";
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var qI = (
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
var $I = (
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
var lt = (
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
      return typeof window < "u" && !!window.opener && window.opener !== window && typeof window.name == "string" && window.name.indexOf($r.POPUP_NAME_PREFIX + ".") === 0;
    }, r.getCurrentUri = function() {
      return window.location.href.split("?")[0].split("#")[0];
    }, r.getHomepage = function() {
      var e = new He(window.location.href), t = e.getUrlComponents();
      return t.Protocol + "//" + t.HostNameAndPort + "/";
    }, r.getBrowserNetworkClient = function() {
      return window.fetch && window.Headers ? new qI() : new $I();
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
var nm = (
  /** @class */
  function() {
    function r(e, t, n, o, a, s, l, u, f) {
      this.config = e, this.browserStorage = t, this.browserCrypto = n, this.networkClient = this.config.system.networkClient, this.eventHandler = a, this.navigationClient = s, this.nativeMessageHandler = u, this.correlationId = f || this.browserCrypto.createNewGuid(), this.logger = o.clone($r.MSAL_SKU, $i, this.correlationId), this.performanceClient = l;
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
              if (o = Nu(e && e.scopes || []), a = le(le({}, e), {
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
      var t = e || this.config.auth.redirectUri || lt.getCurrentUri();
      return He.getAbsoluteUrl(t, lt.getCurrentUri());
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
      return new UI(n, this.browserStorage);
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
              }, e ? (this.logger.verbose("Creating discovered authority with request authority"), [4, As.createDiscoveredInstance(e, this.config.system.networkClient, this.browserStorage, t, this.logger)]) : [3, 2];
            case 1:
              return [2, n.sent()];
            case 2:
              return this.logger.verbose("Creating discovered authority with configured authority"), [4, As.createDiscoveredInstance(this.config.auth.authority, this.config.system.networkClient, this.browserStorage, t, this.logger)];
            case 3:
              return [2, n.sent()];
          }
        });
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var si = (
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
              return n = a.sent(), o = le(le({}, t), { redirectUri: t.redirectUri, code: N.EMPTY_STRING, codeVerifier: n.verifier }), t.codeChallenge = n.challenge, t.codeChallengeMethod = N.S256_CODE_CHALLENGE_METHOD, [2, o];
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
      return !t || t.postLogoutRedirectUri !== null ? t && t.postLogoutRedirectUri ? (this.logger.verbose("Setting postLogoutRedirectUri to uri set on logout request", n.correlationId), n.postLogoutRedirectUri = He.getAbsoluteUrl(t.postLogoutRedirectUri, lt.getCurrentUri())) : this.config.auth.postLogoutRedirectUri === null ? this.logger.verbose("postLogoutRedirectUri configured as null and no uri set on request, not passing post logout redirect", n.correlationId) : this.config.auth.postLogoutRedirectUri ? (this.logger.verbose("Setting postLogoutRedirectUri to configured uri", n.correlationId), n.postLogoutRedirectUri = He.getAbsoluteUrl(this.config.auth.postLogoutRedirectUri, lt.getCurrentUri())) : (this.logger.verbose("Setting postLogoutRedirectUri to current page", n.correlationId), n.postLogoutRedirectUri = He.getAbsoluteUrl(lt.getCurrentUri(), lt.getCurrentUri())) : this.logger.verbose("postLogoutRedirectUri passed as null, not setting post logout redirect uri", n.correlationId), n;
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
              return a = s.sent(), [2, new Xg(a, this.performanceClient)];
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
                  version: $i,
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
      var a = rm.extractBrowserRequestState(this.browserCrypto, t.state);
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
              }, l = t || this.config.auth.authority, u = Wi.generateAuthority(l, n || this.config.auth.azureCloudOptions), this.logger.verbose("Creating discovered authority with configured authority", this.correlationId), this.performanceClient.setPreQueueTime(F.AuthorityFactoryCreateDiscoveredInstance, this.correlationId), [4, As.createDiscoveredInstance(u, this.config.system.networkClient, this.browserStorage, s, this.logger, this.performanceClient, this.correlationId).then(function(h) {
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
              }, s = Sn.setRequestState(this.browserCrypto, t && t.state || N.EMPTY_STRING, a), this.performanceClient.setPreQueueTime(F.InitializeBaseRequest, this.correlationId), u = [{}], [4, this.initializeBaseRequest(t)];
            case 1:
              return l = le.apply(void 0, [le.apply(void 0, u.concat([p.sent()])), { redirectUri: o, state: s, nonce: t.nonce || this.browserCrypto.createNewGuid(), responseMode: Cs.FRAGMENT }]), f = t.account || this.browserStorage.getActiveAccount(), f && (this.logger.verbose("Setting validated request account", this.correlationId), this.logger.verbosePii("Setting validated request account: " + f.homeAccountId, this.correlationId), l.account = f), re.isEmpty(l.loginHint) && !f && (h = this.browserStorage.getLegacyLoginHint(), h && (l.loginHint = h)), [2, l];
          }
        });
      });
    }, e;
  }(nm)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Du = (
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
            throw oe.createStateNotFoundError("Cached State");
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
        return z(this, function(m) {
          switch (m.label) {
            case 0:
              if (this.performanceClient.addQueueMeasurement(F.HandleCodeResponseFromServer, this.authCodeRequest.correlationId), this.logger.trace("InteractionHandler.handleCodeResponseFromServer called"), s = this.browserStorage.generateStateKey(t), l = this.browserStorage.getTemporaryCache(s), !l)
                throw oe.createStateNotFoundError("Cached State");
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
              return this.performanceClient.addQueueMeasurement(F.UpdateTokenEndpointAuthority, this.authCodeRequest.correlationId), o = "https://" + e + "/" + t.tenant + "/", [4, As.createDiscoveredInstance(o, n, this.browserStorage, t.options, this.logger, this.performanceClient, this.authCodeRequest.correlationId)];
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
var Kp = (
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
        var s, l, u, f, h, p, m;
        return z(this, function(v) {
          switch (v.label) {
            case 0:
              if (this.logger.verbose("RedirectHandler.handleCodeResponse called"), re.isEmpty(t))
                throw X.createEmptyHashError(t);
              if (this.browserStorage.setInteractionInProgress(!1), s = this.browserStorage.generateStateKey(n), l = this.browserStorage.getTemporaryCache(s), !l)
                throw oe.createStateNotFoundError("Cached State");
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
              return m = v.sent(), this.browserStorage.cleanRequestByState(n), [2, m];
          }
        });
      });
    }, e;
  }(Du)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var be;
(function(r) {
  r.INITIALIZE_START = "msal:initializeStart", r.INITIALIZE_END = "msal:initializeEnd", r.ACCOUNT_ADDED = "msal:accountAdded", r.ACCOUNT_REMOVED = "msal:accountRemoved", r.LOGIN_START = "msal:loginStart", r.LOGIN_SUCCESS = "msal:loginSuccess", r.LOGIN_FAILURE = "msal:loginFailure", r.ACQUIRE_TOKEN_START = "msal:acquireTokenStart", r.ACQUIRE_TOKEN_SUCCESS = "msal:acquireTokenSuccess", r.ACQUIRE_TOKEN_FAILURE = "msal:acquireTokenFailure", r.ACQUIRE_TOKEN_NETWORK_START = "msal:acquireTokenFromNetworkStart", r.SSO_SILENT_START = "msal:ssoSilentStart", r.SSO_SILENT_SUCCESS = "msal:ssoSilentSuccess", r.SSO_SILENT_FAILURE = "msal:ssoSilentFailure", r.ACQUIRE_TOKEN_BY_CODE_START = "msal:acquireTokenByCodeStart", r.ACQUIRE_TOKEN_BY_CODE_SUCCESS = "msal:acquireTokenByCodeSuccess", r.ACQUIRE_TOKEN_BY_CODE_FAILURE = "msal:acquireTokenByCodeFailure", r.HANDLE_REDIRECT_START = "msal:handleRedirectStart", r.HANDLE_REDIRECT_END = "msal:handleRedirectEnd", r.POPUP_OPENED = "msal:popupOpened", r.LOGOUT_START = "msal:logoutStart", r.LOGOUT_SUCCESS = "msal:logoutSuccess", r.LOGOUT_FAILURE = "msal:logoutFailure", r.LOGOUT_END = "msal:logoutEnd", r.RESTORE_FROM_BFCACHE = "msal:restoreFromBFCache";
})(be || (be = {}));
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var qn;
(function(r) {
  r.USER_INTERACTION_REQUIRED = "USER_INTERACTION_REQUIRED", r.USER_CANCEL = "USER_CANCEL", r.NO_NETWORK = "NO_NETWORK", r.TRANSIENT_ERROR = "TRANSIENT_ERROR", r.PERSISTENT_ERROR = "PERSISTENT_ERROR", r.DISABLED = "DISABLED", r.ACCOUNT_UNAVAILABLE = "ACCOUNT_UNAVAILABLE";
})(qn || (qn = {}));
var Pi = {
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
      if (this.ext && this.ext.status && (this.ext.status === qn.PERSISTENT_ERROR || this.ext.status === qn.DISABLED))
        return !0;
      switch (this.errorCode) {
        case Pi.extensionError.code:
          return !0;
        default:
          return !1;
      }
    }, e.createError = function(t, n, o) {
      if (o && o.status)
        switch (o.status) {
          case qn.ACCOUNT_UNAVAILABLE:
            return zr.createNativeAccountUnavailableError();
          case qn.USER_INTERACTION_REQUIRED:
            return new zr(t, n);
          case qn.USER_CANCEL:
            return X.createUserCancelledError();
          case qn.NO_NETWORK:
            return X.createNoNetworkConnectivityError();
        }
      return new e(t, n, o);
    }, e.createUserSwitchError = function() {
      return new e(Pi.userSwitch.code, Pi.userSwitch.desc);
    }, e.createTokensNotFoundInCacheError = function() {
      return new e(Pi.tokensNotFoundInCache.code, Pi.tokensNotFoundInCache.desc);
    }, e;
  }(de)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var om = (
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
                errorCode: l instanceof de && l.errorCode || void 0,
                subErrorCode: l instanceof de && l.subError || void 0,
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
              return a = s.sent(), [2, new PI(a, this.performanceClient)];
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
  }(si)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Zo = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t, n, o, a, s, l, u, f, h, p, m, v) {
      var C = r.call(this, t, n, o, a, s, l, f, h, v) || this;
      return C.apiId = u, C.accountId = p, C.nativeMessageHandler = h, C.nativeStorageManager = m, C.silentCacheClient = new om(t, C.nativeStorageManager, o, a, s, l, f, h, v), C;
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
                method: _n.GetToken,
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
                throw this.logger.warning("NativeInteractionClient:acquireTokensFromCache - No nativeAccountId provided"), oe.createNoAccountFoundError();
              if (o = this.browserStorage.getAccountInfoFilteredBy({ nativeAccountId: t }), !o)
                throw oe.createNoAccountFoundError();
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
                method: _n.GetToken,
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
              n = t.prompt, o = Ap(t, ["prompt"]), n && this.logger.verbose("NativeInteractionClient - handleRedirectPromise called and prompt was included in the original request, removing prompt from cached request to prevent second interaction with native broker window."), this.browserStorage.removeItem(this.browserStorage.generateCacheKey(Be.NATIVE_REQUEST)), a = {
                method: _n.GetToken,
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
      return new sn(t.id_token || N.EMPTY_STRING, this.browserCrypto);
    }, e.prototype.createHomeAccountIdentifier = function(t, n) {
      var o = At.generateHomeAccountId(t.client_info || N.EMPTY_STRING, Wt.Default, this.logger, this.browserCrypto, n);
      return o;
    }, e.prototype.createAccountEntity = function(t, n, o, a) {
      return At.createAccount(t.client_info, n, o, void 0, void 0, void 0, a, t.account.id);
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
              if (o = new ti(this.browserCrypto), a = {
                resourceRequestMethod: n.resourceRequestMethod,
                resourceRequestUri: n.resourceRequestUri,
                shrClaims: n.shrClaims,
                shrNonce: n.shrNonce
              }, !n.keyId)
                throw oe.createKeyIdMissingError();
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
      var h = po.createIdTokenEntity(o, n.authority, t.id_token || N.EMPTY_STRING, n.clientId, s.claims.tid || N.EMPTY_STRING), p = n.tokenType === Ve.POP ? N.SHR_NONCE_VALIDITY : (typeof t.expires_in == "string" ? parseInt(t.expires_in, 10) : t.expires_in) || 0, m = f + p, v = this.generateScopes(t, n), C = go.createAccessTokenEntity(o, n.authority, l, n.clientId, s ? s.claims.tid || N.EMPTY_STRING : u, v.printScopes(), m, 0, this.browserCrypto), E = new qi(a, h, C);
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
              return o = new He(n), o.validateAsUri(), a = t.scopes, s = Ap(t, ["scopes"]), l = new Dt(a || []), l.appendScopes(na), u = function() {
                switch (v.apiId) {
                  case Ze.ssoSilent:
                  case Ze.acquireTokenSilent_silentFlow:
                    return v.logger.trace("initializeNativeRequest: silent request sets prompt to none"), Ht.NONE;
                }
                if (!t.prompt) {
                  v.logger.trace("initializeNativeRequest: prompt was not provided");
                  return;
                }
                switch (t.prompt) {
                  case Ht.NONE:
                  case Ht.CONSENT:
                  case Ht.LOGIN:
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
                extraParameters: le(le(le({}, t.extraQueryParameters), t.tokenQueryParameters), { telemetry: xi.MATS_TELEMETRY }),
                extendedExpiryToken: !1
                // Make this configurable?
              }), t.authenticationScheme !== Ve.POP ? [3, 4] : (h = {
                resourceRequestUri: t.resourceRequestUri,
                resourceRequestMethod: t.resourceRequestMethod,
                shrClaims: t.shrClaims,
                shrNonce: t.shrNonce
              }, p = new ti(this.browserCrypto), [4, p.generateCnf(h)]);
            case 3:
              m = C.sent(), f.reqCnf = m.reqCnfString, f.keyId = m.kid, C.label = 4;
            case 4:
              return [2, f];
          }
        });
      });
    }, e;
  }(nm)
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
            channel: xi.CHANNEL_ID,
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
              return s.trys.push([1, 3, , 5]), o = new r(e, t, n, xi.PREFERRED_EXTENSION_ID), [4, o.sendHandshakeRequest()];
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
            channel: xi.CHANNEL_ID,
            extensionId: this.extensionId,
            responseId: this.responseId++,
            body: {
              method: _n.HandshakeRequest
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
        if (!(!t.channel || t.channel !== xi.CHANNEL_ID) && !(t.extensionId && t.extensionId !== this.extensionId) && t.body.method === _n.HandshakeRequest) {
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
        if (a === _n.Response) {
          if (!n)
            return;
          var s = t.body.response;
          if (this.logger.trace("NativeMessageHandler - Received response from browser extension"), this.logger.tracePii("NativeMessageHandler - Received response from browser extension: " + JSON.stringify(s)), s.status !== "Success")
            n.reject(nn.createError(s.code, s.description, s.ext));
          else if (s.result)
            s.result.code && s.result.description ? n.reject(nn.createError(s.result.code, s.result.description, s.result.ext)) : n.resolve(s.result);
          else
            throw de.createUnexpectedError("Event does not contain result.");
          this.resolvers.delete(t.responseId);
        } else if (a === _n.HandshakeResponse) {
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
var GI = (
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
              return this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, ce.Redirect)];
            case 1:
              n = v.sent(), this.browserStorage.updateCacheEntries(n.state, n.nonce, n.authority, n.loginHint || N.EMPTY_STRING, n.account || null), o = this.initializeServerTelemetryManager(Ze.acquireTokenRedirect), a = function(C) {
                C.persisted && (m.logger.verbose("Page was restored from back/forward cache. Clearing temporary cache."), m.browserStorage.cleanRequestByState(n.state), m.eventHandler.emitEvent(be.RESTORE_FROM_BFCACHE, ce.Redirect));
              }, v.label = 2;
            case 2:
              return v.trys.push([2, 7, , 8]), this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationCodeRequest, t.correlationId), [4, this.initializeAuthorizationCodeRequest(n)];
            case 3:
              return s = v.sent(), this.performanceClient.setPreQueueTime(F.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(o, n.authority, n.azureCloudOptions)];
            case 4:
              return l = v.sent(), this.logger.verbose("Auth code client created"), u = new Kp(l, this.browserStorage, s, this.logger, this.browserCrypto, this.performanceClient), [4, l.getAuthCodeUrl(le(le({}, n), { nativeBroker: vo.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, t.authenticationScheme) }))];
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
              throw p = v.sent(), p instanceof de && p.setCorrelationId(this.correlationId), window.removeEventListener("pageshow", a), o.cacheFailedRequest(p), this.browserStorage.cleanRequestByState(n.state), p;
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
                return this.logger.info("handleRedirectPromise did not detect a response hash as a result of a redirect. Cleaning temporary cache."), this.browserStorage.cleanRequestByInteractionType(ce.Redirect), [2, null];
              a = void 0;
              try {
                s = He.getDeserializedHash(o), a = this.validateAndExtractStateFromHash(s, ce.Redirect), this.logger.verbose("State extracted from hash");
              } catch (_) {
                return this.logger.info("handleRedirectPromise was unable to extract state due to: " + _), this.browserStorage.cleanRequestByInteractionType(ce.Redirect), [2, null];
              }
              return l = this.browserStorage.getTemporaryCache(Be.ORIGIN_URI, !0) || N.EMPTY_STRING, u = He.removeHashFromUrl(l), f = He.removeHashFromUrl(window.location.href), u === f && this.config.auth.navigateToLoginRequestUrl ? (this.logger.verbose("Current page is loginRequestUrl, handling hash"), [4, this.handleHash(o, a, n)]) : [3, 3];
            case 2:
              return h = E.sent(), l.indexOf("#") > -1 && lt.replaceHash(l), [2, h];
            case 3:
              return this.config.auth.navigateToLoginRequestUrl ? [3, 4] : (this.logger.verbose("NavigateToLoginRequestUrl set to false, handling hash"), [2, this.handleHash(o, a, n)]);
            case 4:
              return !lt.isInIframe() || this.config.system.allowRedirectInIframe ? (this.browserStorage.setTemporaryCache(Be.URL_HASH, o, !0), p = {
                apiId: Ze.handleRedirectPromise,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !0
              }, m = !0, !l || l === "null" ? (v = lt.getHomepage(), this.browserStorage.setTemporaryCache(Be.ORIGIN_URI, v, !0), this.logger.warning("Unable to get valid login request url from cache, redirecting to home page"), [4, this.navigationClient.navigateInternal(v, p)]) : [3, 6]) : [3, 9];
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
              throw C = E.sent(), C instanceof de && C.setCorrelationId(this.correlationId), n.cacheFailedRequest(C), this.browserStorage.cleanRequestByInteractionType(ce.Redirect), C;
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
        return lt.clearHash(window), this.logger.verbose("Hash contains known properties, returning response hash"), t;
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
                return l = new Zo(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, s.accountId, this.nativeStorage, a.correlationId), u = Sn.parseRequestState(this.browserCrypto, n).userRequestState, [2, l.acquireToken(le(le({}, a), {
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
              return h = v.sent(), this.logger.verbose("Auth code client created"), Ss.removeThrottle(this.browserStorage, this.config.auth.clientId, a), p = new Kp(h, this.browserStorage, a, this.logger, this.browserCrypto, this.performanceClient), [4, p.handleCodeResponseFromHash(t, n, h.authority, this.networkClient)];
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
              return h.trys.push([1, 10, , 11]), this.eventHandler.emitEvent(be.LOGOUT_START, ce.Redirect, t), [4, this.clearCacheOnLogout(n.account)];
            case 2:
              return h.sent(), a = {
                apiId: Ze.logout,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !1
              }, this.performanceClient.setPreQueueTime(F.StandardInteractionClientCreateAuthCodeClient, n.correlationId), [4, this.createAuthCodeClient(o, t && t.authority)];
            case 3:
              return s = h.sent(), this.logger.verbose("Auth code client created"), l = s.getLogoutUri(n), this.eventHandler.emitEvent(be.LOGOUT_SUCCESS, ce.Redirect, n), t && typeof t.onRedirectNavigate == "function" ? (u = t.onRedirectNavigate(l), u === !1 ? [3, 5] : (this.logger.verbose("Logout onRedirectNavigate did not return false, navigating"), this.browserStorage.getInteractionInProgress() || this.browserStorage.setInteractionInProgress(!0), [4, this.navigationClient.navigateExternal(l, a)])) : [3, 7];
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
              throw f = h.sent(), f instanceof de && f.setCorrelationId(this.correlationId), o.cacheFailedRequest(f), this.eventHandler.emitEvent(be.LOGOUT_FAILURE, ce.Redirect, null, f), this.eventHandler.emitEvent(be.LOGOUT_END, ce.Redirect), f;
            case 11:
              return this.eventHandler.emitEvent(be.LOGOUT_END, ce.Redirect), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.getRedirectStartPage = function(t) {
      var n = t || window.location.href;
      return He.getAbsoluteUrl(n, lt.getCurrentUri());
    }, e;
  }(si)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var zI = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t, n, o, a, s, l, u, f, h, p) {
      var m = r.call(this, t, n, o, a, s, l, u, h, p) || this;
      return m.unloadWindow = m.unloadWindow.bind(m), m.nativeStorage = f, m;
    }
    return e.prototype.acquireToken = function(t) {
      try {
        var n = this.generatePopupName(t.scopes || na, t.authority || this.config.auth.authority), o = t.popupWindowAttributes || {};
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
        var s, l, u, f, h, p, m, v, C, E, _, A, R, S, I, O, L, H = this;
        return z(this, function(U) {
          switch (U.label) {
            case 0:
              return this.logger.verbose("acquireTokenPopupAsync called"), s = this.initializeServerTelemetryManager(Ze.acquireTokenPopup), this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, ce.Popup)];
            case 1:
              l = U.sent(), this.browserStorage.updateCacheEntries(l.state, l.nonce, l.authority, l.loginHint || N.EMPTY_STRING, l.account || null), U.label = 2;
            case 2:
              return U.trys.push([2, 8, , 9]), this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationCodeRequest, t.correlationId), [4, this.initializeAuthorizationCodeRequest(l)];
            case 3:
              return u = U.sent(), this.performanceClient.setPreQueueTime(F.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(s, l.authority, l.azureCloudOptions)];
            case 4:
              return f = U.sent(), this.logger.verbose("Auth code client created"), h = vo.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, t.authenticationScheme), p = void 0, h && (p = this.performanceClient.startMeasurement(F.FetchAccountIdWithNativeBroker, t.correlationId)), [4, f.getAuthCodeUrl(le(le({}, l), { nativeBroker: h }))];
            case 5:
              return m = U.sent(), v = new Du(f, this.browserStorage, u, this.logger, this.performanceClient), C = {
                popup: a,
                popupName: n,
                popupWindowAttributes: o
              }, E = this.initiateAuthRequest(m, C), this.eventHandler.emitEvent(be.POPUP_OPENED, ce.Popup, { popupWindow: E }, null), [4, this.monitorPopupForHash(E)];
            case 6:
              if (_ = U.sent(), A = He.getDeserializedHash(_), R = this.validateAndExtractStateFromHash(A, ce.Popup, l.correlationId), Ss.removeThrottle(this.browserStorage, this.config.auth.clientId, u), A.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), p && p.endMeasurement({
                  success: !0,
                  isNativeBroker: !0
                }), !this.nativeMessageHandler)
                  throw X.createNativeConnectionNotEstablishedError();
                return S = new Zo(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, A.accountId, this.nativeStorage, l.correlationId), I = Sn.parseRequestState(this.browserCrypto, R).userRequestState, [2, S.acquireToken(le(le({}, l), {
                  state: I,
                  prompt: void 0
                  // Server should handle the prompt, ideally native broker can do this part silently
                })).finally(function() {
                  H.browserStorage.cleanRequestByState(R);
                })];
              }
              return [4, v.handleCodeResponseFromHash(_, R, f.authority, this.networkClient)];
            case 7:
              return O = U.sent(), [2, O];
            case 8:
              throw L = U.sent(), a && a.close(), L instanceof de && L.setCorrelationId(this.correlationId), s.cacheFailedRequest(L), this.browserStorage.cleanRequestByState(l.state), L;
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
              this.logger.verbose("logoutPopupAsync called"), this.eventHandler.emitEvent(be.LOGOUT_START, ce.Popup, t), u = this.initializeServerTelemetryManager(Ze.logoutPopup), E.label = 1;
            case 1:
              return E.trys.push([1, 5, , 6]), [4, this.clearCacheOnLogout(t.account)];
            case 2:
              return E.sent(), this.performanceClient.setPreQueueTime(F.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(u, a)];
            case 3:
              return f = E.sent(), this.logger.verbose("Auth code client created"), h = f.getLogoutUri(t), this.eventHandler.emitEvent(be.LOGOUT_SUCCESS, ce.Popup, t), p = this.openPopup(h, { popupName: n, popupWindowAttributes: o, popup: s }), this.eventHandler.emitEvent(be.POPUP_OPENED, ce.Popup, { popupWindow: p }, null), [4, this.waitForLogoutPopup(p)];
            case 4:
              return E.sent(), l ? (m = {
                apiId: Ze.logoutPopup,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !1
              }, v = He.getAbsoluteUrl(l, lt.getCurrentUri()), this.logger.verbose("Redirecting main window to url specified in the request"), this.logger.verbosePii("Redirecting main window to: " + v), this.navigationClient.navigateInternal(v, m)) : this.logger.verbose("No main window navigation requested"), [3, 6];
            case 5:
              throw C = E.sent(), s && s.close(), C instanceof de && C.setCorrelationId(this.correlationId), this.browserStorage.setInteractionInProgress(!1), this.eventHandler.emitEvent(be.LOGOUT_FAILURE, ce.Popup, null, C), this.eventHandler.emitEvent(be.LOGOUT_END, ce.Popup), u.cacheFailedRequest(C), C;
            case 6:
              return this.eventHandler.emitEvent(be.LOGOUT_END, ce.Popup), [
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
          var f = N.EMPTY_STRING, h = N.EMPTY_STRING;
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
          var s = N.EMPTY_STRING;
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
      var a, s, l, u, f = window.screenLeft ? window.screenLeft : window.screenX, h = window.screenTop ? window.screenTop : window.screenY, p = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, m = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, v = (a = o.popupSize) === null || a === void 0 ? void 0 : a.width, C = (s = o.popupSize) === null || s === void 0 ? void 0 : s.height, E = (l = o.popupPosition) === null || l === void 0 ? void 0 : l.top, _ = (u = o.popupPosition) === null || u === void 0 ? void 0 : u.left;
      return (!v || v < 0 || v > p) && (this.logger.verbose("Default popup window width used. Window width not configured or invalid."), v = $r.POPUP_WIDTH), (!C || C < 0 || C > m) && (this.logger.verbose("Default popup window height used. Window height not configured or invalid."), C = $r.POPUP_HEIGHT), (!E || E < 0 || E > m) && (this.logger.verbose("Default popup window top position used. Window top not configured or invalid."), E = Math.max(0, m / 2 - $r.POPUP_HEIGHT / 2 + h)), (!_ || _ < 0 || _ > p) && (this.logger.verbose("Default popup window left position used. Window left not configured or invalid."), _ = Math.max(0, p / 2 - $r.POPUP_WIDTH / 2 + f)), window.open(t, n, "width=" + v + ", height=" + C + ", top=" + E + ", left=" + _ + ", scrollbars=yes");
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
  }(si)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var VI = (
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
var WI = 6e4, fu = 6e3, jI = 3e4, YI = 2e3;
function QI(r, e) {
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
    protocolMode: Vi.AAD,
    azureCloudOptions: {
      azureCloudInstance: zi.None,
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
    logLevel: ct.Info,
    piiLoggingEnabled: !1
  }, f = le(le({}, Jg), {
    loggerOptions: u,
    networkClient: e ? lt.getBrowserNetworkClient() : LI,
    navigationClient: new VI(),
    loadFrameTimeout: 0,
    // If loadFrameTimeout is provided, use that as default.
    windowHashTimeout: (o == null ? void 0 : o.loadFrameTimeout) || WI,
    iframeHashTimeout: (o == null ? void 0 : o.loadFrameTimeout) || fu,
    navigateFrameWait: e && lt.detectIEOrEdge() ? 500 : 0,
    redirectNavigationTimeout: jI,
    asyncPopups: !1,
    allowRedirectInIframe: !1,
    allowNativeBroker: !1,
    nativeBrokerHandshakeTimeout: (o == null ? void 0 : o.nativeBrokerHandshakeTimeout) || YI,
    pollIntervalMilliseconds: $r.DEFAULT_POLL_INTERVAL_MS,
    cryptoOptions: {
      useMsrCrypto: !1,
      entropy: void 0
    }
  }), h = le(le({}, o), { loggerOptions: (o == null ? void 0 : o.loggerOptions) || u }), p = {
    application: {
      appName: N.EMPTY_STRING,
      appVersion: N.EMPTY_STRING
    }
  }, m = {
    auth: le(le({}, s), t),
    cache: le(le({}, l), n),
    system: le(le({}, f), h),
    telemetry: le(le({}, p), a)
  };
  return m;
}
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var im = (
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
        n < fu && o.logger.warning("system.loadFrameTimeout or system.iframeHashTimeout set to lower (" + n + "ms) than the default (" + fu + "ms). This may result in timeouts.");
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
          if (!re.isEmpty(h)) {
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
  }(Du)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var JI = (
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
              if (this.performanceClient.addQueueMeasurement(F.SilentIframeClientAcquireToken, t.correlationId), this.logger.verbose("acquireTokenByIframe called"), n = this.performanceClient.startMeasurement(F.SilentIframeClientAcquireToken, t.correlationId), re.isEmpty(t.loginHint) && re.isEmpty(t.sid) && (!t.account || re.isEmpty(t.account.username)) && this.logger.warning("No user hint provided. The authorization server may need more information to complete this request."), t.prompt && t.prompt !== Ht.NONE && t.prompt !== Ht.NO_SESSION)
                throw n.endMeasurement({
                  success: !1
                }), X.createSilentPromptValueError(t.prompt);
              return this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(le(le({}, t), { prompt: t.prompt || Ht.NONE }), ce.Silent)];
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
              throw l = u.sent(), l instanceof de && l.setCorrelationId(this.correlationId), a.cacheFailedRequest(l), this.browserStorage.cleanRequestByState(o.state), n.endMeasurement({
                errorCode: l instanceof de && l.errorCode || void 0,
                subErrorCode: l instanceof de && l.subError || void 0,
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
              return o = C.sent(), this.performanceClient.setPreQueueTime(F.GetAuthCodeUrl, n.correlationId), [4, t.getAuthCodeUrl(le(le({}, n), { nativeBroker: vo.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, n.authenticationScheme) }))];
            case 2:
              return a = C.sent(), s = new im(t, this.browserStorage, o, this.logger, this.config.system, this.performanceClient), this.performanceClient.setPreQueueTime(F.SilentHandlerInitiateAuthRequest, n.correlationId), [4, s.initiateAuthRequest(a)];
            case 3:
              return l = C.sent(), this.performanceClient.setPreQueueTime(F.SilentHandlerMonitorIframeForHash, n.correlationId), [4, s.monitorIframeForHash(l, this.config.system.iframeHashTimeout)];
            case 4:
              if (u = C.sent(), f = He.getDeserializedHash(u), h = this.validateAndExtractStateFromHash(f, ce.Silent, o.correlationId), f.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), !this.nativeMessageHandler)
                  throw X.createNativeConnectionNotEstablishedError();
                return p = new Zo(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.apiId, this.performanceClient, this.nativeMessageHandler, f.accountId, this.browserStorage, this.correlationId), m = Sn.parseRequestState(this.browserCrypto, h).userRequestState, [2, p.acquireToken(le(le({}, n), { state: m, prompt: n.prompt || Ht.NONE })).finally(function() {
                  v.browserStorage.cleanRequestByState(h);
                })];
              }
              return this.performanceClient.setPreQueueTime(F.HandleCodeResponseFromHash, n.correlationId), [2, s.handleCodeResponseFromHash(u, h, t.authority, this.networkClient)];
          }
        });
      });
    }, e;
  }(si)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var XI = (
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
                throw h instanceof de && h.setCorrelationId(u.correlationId), s.cacheFailedRequest(h), a.endMeasurement({
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
              return a = s.sent(), [2, new Zg(a, this.performanceClient)];
          }
        });
      });
    }, e;
  }(si)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var ZI = (
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
        var o = tr.toObject(new At(), n), a = o.getAccountInfo();
        !e.oldValue && e.newValue ? (this.logger.info("Account was added to cache in a different window"), this.emitEvent(be.ACCOUNT_ADDED, void 0, a)) : !e.newValue && e.oldValue && (this.logger.info("Account was removed from cache in a different window"), this.emitEvent(be.ACCOUNT_REMOVED, void 0, a));
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
var am = (
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
var Tn = (
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
var sm = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.urlEncode = function(e) {
      return encodeURIComponent(this.encode(e).replace(/=/g, N.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_"));
    }, r.prototype.urlEncodeArr = function(e) {
      return this.base64EncArr(e).replace(/=/g, N.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_");
    }, r.prototype.encode = function(e) {
      var t = Tn.stringToUtf8Arr(e);
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
var eA = (
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
      return Tn.utf8ArrToString(n);
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
var tA = 32, rA = (
  /** @class */
  function() {
    function r(e) {
      this.base64Encode = new sm(), this.cryptoObj = e;
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
        var e = new Uint8Array(tA);
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
var nA = (
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
          return [2, window.crypto.subtle.exportKey(ri, e)];
        });
      });
    }, r.prototype.importKey = function(e, t, n, o) {
      return G(this, void 0, void 0, function() {
        return z(this, function(a) {
          return [2, window.crypto.subtle.importKey(ri, e, t, n, o)];
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
var oA = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.initPrng = function(e) {
      return window.msrCrypto.initPrng(Nu(e));
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
          return [2, window.msrCrypto.subtle.exportKey(ri, e)];
        });
      });
    }, r.prototype.importKey = function(e, t, n, o) {
      return G(this, void 0, void 0, function() {
        return z(this, function(a) {
          return [2, window.msrCrypto.subtle.importKey(ri, e, t, n, o)];
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
var iA = (
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
            var a = window.msCrypto.subtle.exportKey(ri, e);
            a.addEventListener("complete", function(s) {
              var l = s.target.result, u = Tn.utf8ArrToString(new Uint8Array(l)).replace(/\r/g, N.EMPTY_STRING).replace(/\n/g, N.EMPTY_STRING).replace(/\t/g, N.EMPTY_STRING).split(" ").join(N.EMPTY_STRING).replace("\0", N.EMPTY_STRING);
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
          return a = Tn.getSortedObjectString(e), s = Tn.stringToArrayBuffer(a), [2, new Promise(function(u, f) {
            var h = window.msCrypto.subtle.importKey(ri, s, t, n, o);
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
var aA = "RSASSA-PKCS1-v1_5", qp = "SHA-256", sA = 2048, cA = new Uint8Array([1, 0, 1]), cm = (
  /** @class */
  function() {
    function r(e, t) {
      var n, o;
      if (this.logger = e, this.cryptoOptions = t, this.hasBrowserCrypto())
        this.logger.verbose("BrowserCrypto: modern crypto interface available"), this.subtleCrypto = new nA();
      else if (this.hasIECrypto())
        this.logger.verbose("BrowserCrypto: MS crypto interface available"), this.subtleCrypto = new iA();
      else if (this.hasMsrCrypto() && (!((n = this.cryptoOptions) === null || n === void 0) && n.useMsrCrypto))
        this.logger.verbose("BrowserCrypto: MSR crypto interface available"), this.subtleCrypto = new oA();
      else
        throw this.hasMsrCrypto() && this.logger.info("BrowserCrypto: MSR Crypto interface available but system.cryptoOptions.useMsrCrypto not enabled"), this.logger.error("BrowserCrypto: No crypto interfaces available."), X.createCryptoNotAvailableError("Browser crypto, msCrypto, or msrCrypto interfaces not available.");
      if (this.subtleCrypto.initPrng) {
        if (this.logger.verbose("BrowserCrypto: Interface requires entropy"), !(!((o = this.cryptoOptions) === null || o === void 0) && o.entropy))
          throw this.logger.error("BrowserCrypto: Interface requires entropy but none provided."), ks.createEntropyNotProvided();
        this.logger.verbose("BrowserCrypto: Entropy provided"), this.subtleCrypto.initPrng(this.cryptoOptions.entropy);
      }
      this.keygenAlgorithmOptions = {
        name: aA,
        hash: qp,
        modulusLength: sA,
        publicExponent: cA
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
          return t = Tn.stringToUtf8Arr(e), [2, this.subtleCrypto.digest({ name: qp }, t)];
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
var lA = (
  /** @class */
  function() {
    function r() {
      this.dbName = lu, this.version = HI, this.tableName = BI, this.dbOpen = !1;
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
            var o = window.indexedDB.deleteDatabase(lu);
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
var $p = (
  /** @class */
  function() {
    function r(e, t) {
      this.inMemoryCache = new uu(), this.indexedDBCache = new lA(), this.logger = e, this.storeName = t;
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
var Ps;
(function(r) {
  r.asymmetricKeys = "asymmetricKeys", r.symmetricKeys = "symmetricKeys";
})(Ps || (Ps = {}));
var uA = (
  /** @class */
  function() {
    function r(e) {
      this.logger = e, this.asymmetricKeys = new $p(this.logger, Ps.asymmetricKeys), this.symmetricKeys = new $p(this.logger, Ps.symmetricKeys);
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
var dA = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.logger = e, this.browserCrypto = new cm(this.logger, n), this.b64Encode = new sm(), this.b64Decode = new eA(), this.guidGenerator = new am(this.browserCrypto), this.pkceGenerator = new rA(this.browserCrypto), this.cache = new uA(this.logger), this.performanceClient = t;
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
              }, l = Tn.getSortedObjectString(s), [4, this.hashString(l)];
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
        var a, s, l, u, f, h, p, m, v, C, E, _, A;
        return z(this, function(R) {
          switch (R.label) {
            case 0:
              return a = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(F.CryptoOptsSignJwt, n), [4, this.cache.asymmetricKeys.getItem(t)];
            case 1:
              if (s = R.sent(), !s)
                throw X.createSigningKeyNotFoundInStorageError(t);
              return [4, this.browserCrypto.exportJwk(s.publicKey)];
            case 2:
              return l = R.sent(), u = Tn.getSortedObjectString(l), f = this.b64Encode.urlEncode(JSON.stringify({ kid: t })), h = DI.getShrHeaderString({ kid: f, alg: l.alg }), p = this.b64Encode.urlEncode(h), e.cnf = {
                jwk: JSON.parse(u)
              }, m = this.b64Encode.urlEncode(JSON.stringify(e)), v = p + "." + m, C = Tn.stringToArrayBuffer(v), [4, this.browserCrypto.sign(s.privateKey, C)];
            case 3:
              return E = R.sent(), _ = this.b64Encode.urlEncodeArr(new Uint8Array(E)), A = v + "." + _, a && a.endMeasurement({
                success: !0
              }), [2, A];
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
var Gp = (
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
var fA = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t, n, o, a, s, l, u) {
      var f = r.call(this, t, n, o, a, s, l) || this;
      return f.browserCrypto = new cm(f.logger, u), f.guidGenerator = new am(f.browserCrypto), f;
    }
    return e.prototype.startPerformanceMeasuremeant = function(t, n) {
      return new Gp(t, n);
    }, e.prototype.generateId = function() {
      return this.guidGenerator.generateGuid();
    }, e.prototype.getPageVisibility = function() {
      var t;
      return ((t = document.visibilityState) === null || t === void 0 ? void 0 : t.toString()) || null;
    }, e.prototype.deleteIncompleteSubMeasurements = function(t) {
      var n = this.eventsByCorrelationId.get(t.event.correlationId), o = n && n.eventId === t.event.eventId, a = [];
      o && (n != null && n.incompleteSubMeasurements) && n.incompleteSubMeasurements.forEach(function(s) {
        a.push(le({}, s));
      }), a.length > 0 && Gp.flushMeasurements(t.event.correlationId, a);
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
  }(tm)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var hA = (
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
        a = new qi(l, this.loadIdToken(o, l.homeAccountId, e.account.environment, e.account.tenantId), this.loadAccessToken(e, t, l.homeAccountId, e.account.environment, e.account.tenantId, n), this.loadRefreshToken(e, t, l.homeAccountId, e.account.environment));
      } else if (e.authority) {
        var u = Wi.generateAuthority(e.authority, e.azureCloudOptions), f = {
          protocolMode: this.config.auth.protocolMode,
          knownAuthorities: this.config.auth.knownAuthorities,
          cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
          authorityMetadata: this.config.auth.authorityMetadata,
          skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
        };
        if (s = new Wi(u, this.config.system.networkClient, this.storage, f, this.logger), n.clientInfo) {
          this.logger.trace("TokenCache - homeAccountId from options");
          var l = this.loadAccount(o, s.hostnameAndPort, n.clientInfo, s.authorityType);
          a = new qi(l, this.loadIdToken(o, l.homeAccountId, s.hostnameAndPort, s.tenant), this.loadAccessToken(e, t, l.homeAccountId, s.hostnameAndPort, s.tenant, n), this.loadRefreshToken(e, t, l.homeAccountId, s.hostnameAndPort));
        } else if (t.client_info) {
          this.logger.trace("TokenCache - homeAccountId from response");
          var l = this.loadAccount(o, s.hostnameAndPort, t.client_info, s.authorityType);
          a = new qi(l, this.loadIdToken(o, l.homeAccountId, s.hostnameAndPort, s.tenant), this.loadAccessToken(e, t, l.homeAccountId, s.hostnameAndPort, s.tenant, n), this.loadRefreshToken(e, t, l.homeAccountId, s.hostnameAndPort));
        } else
          throw X.createUnableToLoadTokenError("Please provide clientInfo in the response or options.");
      } else
        throw X.createUnableToLoadTokenError("Please provide a request with an account or a request with authority.");
      return this.generateAuthenticationResult(e, o, a, s);
    }, r.prototype.loadAccount = function(e, t, n, o, a) {
      var s;
      if (a ? s = a : o !== void 0 && n && (s = At.generateHomeAccountId(n, o, this.logger, this.cryptoObj, e)), !s)
        throw X.createUnableToLoadTokenError("Unexpected missing homeAccountId");
      var l = n ? At.createAccount(n, s, e, void 0, void 0, void 0, t) : At.createGenericAccount(s, e, void 0, void 0, void 0, t);
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
      var a = Yo.createRefreshTokenEntity(n, o, t.refresh_token, this.config.auth.clientId);
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
var pA = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t) {
      var n = r.call(this, t) || this;
      return n.includeRedirectUri = !1, n;
    }
    return e;
  }(Xg)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var gA = (
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
              return this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, ce.Silent)];
            case 1:
              n = h.sent(), this.browserStorage.updateCacheEntries(n.state, n.nonce, n.authority, n.loginHint || N.EMPTY_STRING, n.account || null), o = this.initializeServerTelemetryManager(this.apiId), h.label = 2;
            case 2:
              return h.trys.push([2, 4, , 5]), a = le(le({}, n), { code: t.code }), this.performanceClient.setPreQueueTime(F.StandardInteractionClientGetClientConfiguration, t.correlationId), [4, this.getClientConfiguration(o, n.authority)];
            case 3:
              return s = h.sent(), l = new pA(s), this.logger.verbose("Auth code client created"), u = new im(l, this.browserStorage, a, this.logger, this.config.system, this.performanceClient), [2, u.handleCodeResponseFromServer({
                code: t.code,
                msgraph_host: t.msGraphHost,
                cloud_graph_host_name: t.cloudGraphHostName,
                cloud_instance_host_name: t.cloudInstanceHostName
              }, n.state, l.authority, this.networkClient, !1)];
            case 4:
              throw f = h.sent(), f instanceof de && f.setCorrelationId(this.correlationId), o.cacheFailedRequest(f), this.browserStorage.cleanRequestByState(n.state), f;
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
  }(si)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var mA = (
  /** @class */
  function() {
    function r(e) {
      this.isBrowserEnvironment = typeof window < "u", this.config = QI(e, this.isBrowserEnvironment), this.initialized = !1, this.logger = new Ou(this.config.system.loggerOptions, Dl, $i), this.networkClient = this.config.system.networkClient, this.navigationClient = this.config.system.navigationClient, this.redirectResponse = /* @__PURE__ */ new Map(), this.hybridAuthCodeResponses = /* @__PURE__ */ new Map(), this.performanceClient = this.isBrowserEnvironment ? new fA(this.config.auth.clientId, this.config.auth.authority, this.logger, Dl, $i, this.config.telemetry.application, this.config.system.cryptoOptions) : new FI(this.config.auth.clientId, this.config.auth.authority, this.logger, Dl, $i, this.config.telemetry.application), this.browserCrypto = this.isBrowserEnvironment ? new dA(this.logger, this.performanceClient, this.config.system.cryptoOptions) : bs, this.eventHandler = new ZI(this.logger, this.browserCrypto), this.browserStorage = this.isBrowserEnvironment ? new du(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger) : KI(this.config.auth.clientId, this.logger);
      var t = {
        cacheLocation: pt.MemoryStorage,
        temporaryCacheLocation: pt.MemoryStorage,
        storeAuthStateInCookie: !1,
        secureCookies: !1,
        cacheMigrationEnabled: !1,
        claimsBasedCachingEnabled: !0
      };
      this.nativeInternalStorage = new du(this.config.auth.clientId, t, this.browserCrypto, this.logger), this.tokenCache = new hA(this.config, this.browserStorage, this.logger, this.browserCrypto), this.trackPageVisibilityWithMeasurement = this.trackPageVisibilityWithMeasurement.bind(this);
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
              if (e = this.config.system.allowNativeBroker, t = this.performanceClient.startMeasurement(F.InitializeClientApplication), this.eventHandler.emitEvent(be.INITIALIZE_START), !e)
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
              return this.initialized = !0, this.eventHandler.emitEvent(be.INITIALIZE_END), t.endMeasurement({ allowNativeBroker: e, success: !0 }), [
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
          return this.logger.verbose("handleRedirectPromise called"), lt.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized), t = this.getAllAccounts(), this.isBrowserEnvironment ? (n = e || N.EMPTY_STRING, o = this.redirectResponse.get(n), typeof o > "u" ? (this.eventHandler.emitEvent(be.HANDLE_REDIRECT_START, ce.Redirect), this.logger.verbose("handleRedirectPromise has been called for the first time, storing the promise"), a = this.browserStorage.getCachedNativeRequest(), s = void 0, a && vo.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider) && this.nativeExtensionProvider && !e ? (this.logger.trace("handleRedirectPromise - acquiring token from native platform"), l = new Zo(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.handleRedirectPromise, this.performanceClient, this.nativeExtensionProvider, a.accountId, this.nativeInternalStorage, a.correlationId), s = l.handleRedirectPromise()) : (this.logger.trace("handleRedirectPromise - acquiring token from web flow"), u = this.browserStorage.getTemporaryCache(Be.CORRELATION_ID, !0) || N.EMPTY_STRING, f = this.createRedirectClient(u), s = f.handleRedirectPromise(e)), o = s.then(function(m) {
            if (m) {
              var v = t.length < h.getAllAccounts().length;
              v ? (h.eventHandler.emitEvent(be.LOGIN_SUCCESS, ce.Redirect, m), h.logger.verbose("handleRedirectResponse returned result, login success")) : (h.eventHandler.emitEvent(be.ACQUIRE_TOKEN_SUCCESS, ce.Redirect, m), h.logger.verbose("handleRedirectResponse returned result, acquire token success"));
            }
            return h.eventHandler.emitEvent(be.HANDLE_REDIRECT_END, ce.Redirect), m;
          }).catch(function(m) {
            throw t.length > 0 ? h.eventHandler.emitEvent(be.ACQUIRE_TOKEN_FAILURE, ce.Redirect, null, m) : h.eventHandler.emitEvent(be.LOGIN_FAILURE, ce.Redirect, null, m), h.eventHandler.emitEvent(be.HANDLE_REDIRECT_END, ce.Redirect), m;
          }), this.redirectResponse.set(n, o)) : this.logger.verbose("handleRedirectPromise has been called previously, returning the result from the first call"), [2, o]) : (this.logger.verbose("handleRedirectPromise returns null, not browser environment"), [2, null]);
        });
      });
    }, r.prototype.acquireTokenRedirect = function(e) {
      return G(this, void 0, void 0, function() {
        var t, n, o, a, s, l = this;
        return z(this, function(u) {
          return t = this.getRequestCorrelationId(e), this.logger.verbose("acquireTokenRedirect called", t), this.preflightBrowserEnvironmentCheck(ce.Redirect), n = this.getAllAccounts().length > 0, n ? this.eventHandler.emitEvent(be.ACQUIRE_TOKEN_START, ce.Redirect, e) : this.eventHandler.emitEvent(be.LOGIN_START, ce.Redirect, e), this.nativeExtensionProvider && this.canUseNative(e) ? (a = new Zo(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenRedirect, this.performanceClient, this.nativeExtensionProvider, this.getNativeAccountId(e), this.nativeInternalStorage, e.correlationId), o = a.acquireTokenRedirect(e).catch(function(f) {
            if (f instanceof nn && f.isFatal()) {
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
            throw n ? l.eventHandler.emitEvent(be.ACQUIRE_TOKEN_FAILURE, ce.Redirect, null, f) : l.eventHandler.emitEvent(be.LOGIN_FAILURE, ce.Redirect, null, f), f;
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
      a.length > 0 ? this.eventHandler.emitEvent(be.ACQUIRE_TOKEN_START, ce.Popup, e) : this.eventHandler.emitEvent(be.LOGIN_START, ce.Popup, e);
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
        return f ? t.eventHandler.emitEvent(be.LOGIN_SUCCESS, ce.Popup, u) : t.eventHandler.emitEvent(be.ACQUIRE_TOKEN_SUCCESS, ce.Popup, u), o.addStaticFields({
          accessTokenSize: u.accessToken.length,
          idTokenSize: u.idToken.length
        }), o.endMeasurement({
          success: !0,
          requestId: u.requestId
        }), u;
      }).catch(function(u) {
        return a.length > 0 ? t.eventHandler.emitEvent(be.ACQUIRE_TOKEN_FAILURE, ce.Popup, null, u) : t.eventHandler.emitEvent(be.LOGIN_FAILURE, ce.Popup, null, u), o.endMeasurement({
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
          }), document.addEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement), this.logger.verbose("ssoSilent called", n), this.eventHandler.emitEvent(be.SSO_SILENT_START, ce.Silent, o), this.canUseNative(o) ? a = this.acquireTokenNative(o, Ze.ssoSilent).catch(function(f) {
            if (f instanceof nn && f.isFatal()) {
              l.nativeExtensionProvider = void 0;
              var h = l.createSilentIframeClient(o.correlationId);
              return h.acquireToken(o);
            }
            throw f;
          }) : (s = this.createSilentIframeClient(o.correlationId), a = s.acquireToken(o)), [2, a.then(function(f) {
            var h, p;
            return l.eventHandler.emitEvent(be.SSO_SILENT_SUCCESS, ce.Silent, f), (h = l.ssoSilentMeasurement) === null || h === void 0 || h.addStaticFields({
              accessTokenSize: f.accessToken.length,
              idTokenSize: f.idToken.length
            }), (p = l.ssoSilentMeasurement) === null || p === void 0 || p.endMeasurement({
              success: !0,
              isNativeBroker: f.fromNativeBroker,
              requestId: f.requestId
            }), f;
          }).catch(function(f) {
            var h;
            throw l.eventHandler.emitEvent(be.SSO_SILENT_FAILURE, ce.Silent, null, f), (h = l.ssoSilentMeasurement) === null || h === void 0 || h.endMeasurement({
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
          t = this.getRequestCorrelationId(e), this.preflightBrowserEnvironmentCheck(ce.Silent), this.logger.trace("acquireTokenByCode called", t), this.eventHandler.emitEvent(be.ACQUIRE_TOKEN_BY_CODE_START, ce.Silent, e), n = this.performanceClient.startMeasurement(F.AcquireTokenByCode, e.correlationId);
          try {
            if (e.code && e.nativeAccountId)
              throw X.createSpaCodeAndNativeAccountIdPresentError();
            if (e.code)
              return o = e.code, a = this.hybridAuthCodeResponses.get(o), a ? (this.logger.verbose("Existing acquireTokenByCode request found", e.correlationId), n.discardMeasurement()) : (this.logger.verbose("Initiating new acquireTokenByCode request", t), a = this.acquireTokenByCodeAsync(le(le({}, e), { correlationId: t })).then(function(u) {
                return s.eventHandler.emitEvent(be.ACQUIRE_TOKEN_BY_CODE_SUCCESS, ce.Silent, u), s.hybridAuthCodeResponses.delete(o), n.addStaticFields({
                  accessTokenSize: u.accessToken.length,
                  idTokenSize: u.idToken.length
                }), n.endMeasurement({
                  success: !0,
                  isNativeBroker: u.fromNativeBroker,
                  requestId: u.requestId
                }), u;
              }).catch(function(u) {
                throw s.hybridAuthCodeResponses.delete(o), s.eventHandler.emitEvent(be.ACQUIRE_TOKEN_BY_CODE_FAILURE, ce.Silent, null, u), n.endMeasurement({
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
            throw this.eventHandler.emitEvent(be.ACQUIRE_TOKEN_BY_CODE_FAILURE, ce.Silent, null, u), n.endMeasurement({
              errorCode: u instanceof de && u.errorCode || void 0,
              subErrorCode: u instanceof de && u.subError || void 0,
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
            case nr.Default:
            case nr.AccessToken:
            case nr.AccessTokenAndRefreshToken:
              return [2, e.acquireToken(t)];
            default:
              throw oe.createRefreshRequiredError();
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
            case nr.Default:
            case nr.AccessTokenAndRefreshToken:
            case nr.RefreshToken:
            case nr.RefreshTokenAndNetwork:
              return n = this.createSilentRefreshClient(e.correlationId), this.performanceClient.setPreQueueTime(F.SilentRefreshClientAcquireToken, e.correlationId), [2, n.acquireToken(e)];
            default:
              throw oe.createRefreshRequiredError();
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
      if (t === void 0 && (t = !0), this.logger.verbose("preflightBrowserEnvironmentCheck started"), lt.blockNonBrowserEnvironment(this.isBrowserEnvironment), lt.blockRedirectInIframe(e, this.config.system.allowRedirectInIframe), lt.blockReloadInHiddenIframes(), lt.blockAcquireTokenInPopups(), lt.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized), e === ce.Redirect && this.config.cache.cacheLocation === pt.MemoryStorage && !this.config.cache.storeAuthStateInCookie)
        throw ks.createInMemoryRedirectUnavailableError();
      (e === ce.Redirect || e === ce.Popup) && this.preflightInteractiveRequest(t);
    }, r.prototype.preflightInteractiveRequest = function(e) {
      this.logger.verbose("preflightInteractiveRequest called, validating app environment"), lt.blockReloadInHiddenIframes(), e && this.browserStorage.setInteractionInProgress(!0);
    }, r.prototype.acquireTokenNative = function(e, t, n) {
      return G(this, void 0, void 0, function() {
        var o;
        return z(this, function(a) {
          if (this.logger.trace("acquireTokenNative called"), !this.nativeExtensionProvider)
            throw X.createNativeConnectionNotEstablishedError();
          return o = new Zo(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, t, this.performanceClient, this.nativeExtensionProvider, n || this.getNativeAccountId(e), this.nativeInternalStorage, e.correlationId), [2, o.acquireToken(e)];
        });
      });
    }, r.prototype.canUseNative = function(e, t) {
      if (this.logger.trace("canUseNative called"), !vo.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, e.authenticationScheme))
        return this.logger.trace("canUseNative: isNativeAvailable returned false, returning false"), !1;
      if (e.prompt)
        switch (e.prompt) {
          case Ht.NONE:
          case Ht.CONSENT:
          case Ht.LOGIN:
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
      return new zI(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createRedirectClient = function(e) {
      return new GI(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentIframeClient = function(e) {
      return new JI(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.ssoSilent, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentCacheClient = function(e) {
      return new om(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentRefreshClient = function(e) {
      return new XI(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentAuthCodeClient = function(e) {
      return new gA(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenByCode, this.performanceClient, this.nativeExtensionProvider, e);
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
var vA = (
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
          return n = this.getRequestCorrelationId(t), this.logger.verbose("loginRedirect called", n), [2, this.acquireTokenRedirect(le({ correlationId: n }, t || Fp))];
        });
      });
    }, e.prototype.loginPopup = function(t) {
      var n = this.getRequestCorrelationId(t);
      return this.logger.verbose("loginPopup called", n), this.acquireTokenPopup(le({ correlationId: n }, t || Fp));
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
            authority: t.authority || N.EMPTY_STRING,
            scopes: t.scopes,
            homeAccountIdentifier: a.homeAccountId,
            claims: t.claims,
            authenticationScheme: t.authenticationScheme,
            resourceRequestMethod: t.resourceRequestMethod,
            resourceRequestUri: t.resourceRequestUri,
            shrClaims: t.shrClaims,
            sshKid: t.sshKid
          }, l = JSON.stringify(s), u = this.activeSilentTokenRequests.get(l), typeof u > "u" ? (this.logger.verbose("acquireTokenSilent called for the first time, storing active request", n), this.performanceClient.setPreQueueTime(F.AcquireTokenSilentAsync, n), f = this.acquireTokenSilentAsync(le(le({}, t), { correlationId: n }), a).then(function(m) {
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
              return this.performanceClient.addQueueMeasurement(F.AcquireTokenSilentAsync, t.correlationId), this.eventHandler.emitEvent(be.ACQUIRE_TOKEN_START, ce.Silent, t), this.astsAsyncMeasurement = this.performanceClient.startMeasurement(F.AcquireTokenSilentAsync, t.correlationId), (o = this.astsAsyncMeasurement) === null || o === void 0 || o.increment({
                visibilityChangeCount: 0
              }), document.addEventListener("visibilitychange", this.trackPageVisibility), vo.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, t.authenticationScheme) && n.nativeAccountId ? (this.logger.verbose("acquireTokenSilent - attempting to acquire token from native platform"), s = le(le({}, t), { account: n }), a = this.acquireTokenNative(s, Ze.acquireTokenSilent_silentFlow).catch(function(m) {
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
              u = p.sent(), f = le(le({}, t), {
                // set the request's CacheLookupPolicy to Default if it was not optionally passed in
                cacheLookupPolicy: t.cacheLookupPolicy || nr.Default
              }), this.performanceClient.setPreQueueTime(F.AcquireTokenFromCache, u.correlationId), a = this.acquireTokenFromCache(l, u, f).catch(function(m) {
                if (f.cacheLookupPolicy === nr.AccessToken)
                  throw m;
                return lt.blockReloadInHiddenIframes(), h.eventHandler.emitEvent(be.ACQUIRE_TOKEN_NETWORK_START, ce.Silent, u), h.performanceClient.setPreQueueTime(F.AcquireTokenByRefreshToken, u.correlationId), h.acquireTokenByRefreshToken(u, f).catch(function(v) {
                  var C = v instanceof wo, E = v instanceof zr, _ = v.errorCode === Qo.noTokensFoundError.code, A = v.errorCode === $r.INVALID_GRANT_ERROR;
                  if ((!C || !A || E || f.cacheLookupPolicy === nr.AccessTokenAndRefreshToken || f.cacheLookupPolicy === nr.RefreshToken) && f.cacheLookupPolicy !== nr.Skip && !_)
                    throw v;
                  return h.logger.verbose("Refresh token expired/invalid or CacheLookupPolicy is set to Skip, attempting acquire token by iframe.", t.correlationId), h.performanceClient.setPreQueueTime(F.AcquireTokenBySilentIframe, u.correlationId), h.acquireTokenBySilentIframe(u);
                });
              }), p.label = 3;
            case 3:
              return [2, a.then(function(m) {
                var v;
                return h.eventHandler.emitEvent(be.ACQUIRE_TOKEN_SUCCESS, ce.Silent, m), (v = h.astsAsyncMeasurement) === null || v === void 0 || v.endMeasurement({
                  success: !0,
                  fromCache: m.fromCache,
                  isNativeBroker: m.fromNativeBroker,
                  requestId: m.requestId
                }), m;
              }).catch(function(m) {
                var v;
                throw h.eventHandler.emitEvent(be.ACQUIRE_TOKEN_FAILURE, ce.Silent, null, m), (v = h.astsAsyncMeasurement) === null || v === void 0 || v.endMeasurement({
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
  }(mA)
);
function on(r) {
  return Object.keys(r);
}
function Ul(r) {
  return r && typeof r == "object" && !Array.isArray(r);
}
function Uu(r, e) {
  const t = { ...r }, n = e;
  return Ul(r) && Ul(e) && Object.keys(e).forEach((o) => {
    Ul(n[o]) && o in r ? t[o] = Uu(t[o], n[o]) : t[o] = n[o];
  }), t;
}
function yA(r) {
  return r.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
function CA(r) {
  var e;
  return typeof r != "string" || !r.includes("var(--mantine-scale)") ? r : (e = r.match(/^calc\((.*?)\)$/)) == null ? void 0 : e[1].split("*")[0].trim();
}
function wA(r) {
  const e = CA(r);
  return typeof e == "number" ? e : typeof e == "string" ? e.includes("calc") || e.includes("var") ? e : e.includes("px") ? Number(e.replace("px", "")) : e.includes("rem") ? Number(e.replace("rem", "")) * 16 : e.includes("em") ? Number(e.replace("em", "")) * 16 : Number(e) : NaN;
}
function Fl(r) {
  return `calc(${r} * var(--mantine-scale))`;
}
function lm(r, { shouldScale: e = !1 } = {}) {
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
const $ = lm("rem", { shouldScale: !0 }), zp = lm("em");
function Fu(r) {
  return Object.keys(r).reduce((e, t) => (r[t] !== void 0 && (e[t] = r[t]), e), {});
}
function um(r) {
  return typeof r == "number" ? !0 : typeof r == "string" ? r.startsWith("calc(") || r.startsWith("var(") || r.includes(" ") && r.trim() !== "" ? !0 : /[0-9]/.test(r.trim().replace("-", "")[0]) : !1;
}
function oa(r) {
  return Array.isArray(r) || r === null ? !1 : typeof r == "object" ? r.type !== k.Fragment : !1;
}
function ci(r) {
  const e = To(null);
  return [({ children: o, value: a }) => /* @__PURE__ */ k.createElement(e.Provider, { value: a }, o), () => {
    const o = jn(e);
    if (o === null)
      throw new Error(r);
    return o;
  }];
}
function EA(r = null) {
  const e = To(r);
  return [({ children: o, value: a }) => /* @__PURE__ */ k.createElement(e.Provider, { value: a }, o), () => jn(e)];
}
function Vp(r, e) {
  return (t) => {
    if (typeof t != "string" || t.trim().length === 0)
      throw new Error(e);
    return `${r}-${t}`;
  };
}
function hu(r, e) {
  let t = r;
  for (; (t = t.parentElement) && !t.matches(e); )
    ;
  return t;
}
function bA(r, e, t) {
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
function _A(r, e, t) {
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
function SA(r, e, t) {
  return hu(r, t) === hu(e, t);
}
function TA({
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
      ((C = hu(l.currentTarget, r)) == null ? void 0 : C.querySelectorAll(
        e
      )) || []
    ).filter((E) => SA(l.currentTarget, E, r)), f = u.findIndex((E) => l.currentTarget === E), h = _A(f, u, n), p = bA(f, u, n), m = a === "rtl" ? p : h, v = a === "rtl" ? h : p;
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
const IA = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function AA(r) {
  return IA[r];
}
const RA = () => {
};
function kA(r, e = { active: !0 }) {
  return typeof r != "function" || !e.active ? e.onKeyDown || RA : (t) => {
    var n;
    t.key === "Escape" && (r(t), (n = e.onTrigger) == null || n.call(e));
  };
}
function Bt(r, e = "size", t = !0) {
  if (r !== void 0)
    return um(r) ? t ? $(r) : r : `var(--${e}-${r})`;
}
function Hu(r) {
  return Bt(r, "mantine-spacing");
}
function Io(r) {
  return r === void 0 ? "var(--mantine-radius-default)" : Bt(r, "mantine-radius");
}
function Nr(r) {
  return Bt(r, "mantine-font-size");
}
function PA(r) {
  if (r)
    return Bt(r, "mantine-shadow", !1);
}
function dm(r) {
  var e, t, n = "";
  if (typeof r == "string" || typeof r == "number")
    n += r;
  else if (typeof r == "object")
    if (Array.isArray(r))
      for (e = 0; e < r.length; e++)
        r[e] && (t = dm(r[e])) && (n && (n += " "), n += t);
    else
      for (e in r)
        r[e] && (n && (n += " "), n += e);
  return n;
}
function kn() {
  for (var r, e, t = 0, n = ""; t < arguments.length; )
    (r = arguments[t++]) && (e = dm(r)) && (n && (n += " "), n += e);
  return n;
}
const NA = {};
function OA(r) {
  const e = {};
  return r.forEach((t) => {
    Object.entries(t).forEach(([n, o]) => {
      e[n] ? e[n] = kn(e[n], o) : e[n] = o;
    });
  }), e;
}
function Ys({ theme: r, classNames: e, props: t, stylesCtx: n }) {
  const a = (Array.isArray(e) ? e : [e]).map(
    (s) => typeof s == "function" ? s(r, t, n) : s || NA
  );
  return OA(a);
}
function Ns({ theme: r, styles: e, props: t, stylesCtx: n }) {
  return (Array.isArray(e) ? e : [e]).reduce((a, s) => typeof s == "function" ? { ...a, ...s(r, t, n) } : { ...a, ...s }, {});
}
function fm() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function ho(r) {
  const e = Ke(r);
  return ve(() => {
    e.current = r;
  }), ps(() => (...t) => {
    var n;
    return (n = e.current) == null ? void 0 : n.call(e, ...t);
  }, []);
}
function Qs(r, e) {
  const t = ho(r), n = Ke(0);
  return ve(() => () => window.clearTimeout(n.current), []), ze(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(t, e);
  }, [t, e]);
}
const Wp = ["mousedown", "touchstart"];
function MA(r, e, t) {
  const n = Ke();
  return ve(() => {
    const o = (a) => {
      const { target: s } = a ?? {};
      if (Array.isArray(t)) {
        const l = (s == null ? void 0 : s.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(s) && s.tagName !== "HTML";
        t.every((f) => !!f && !a.composedPath().includes(f)) && !l && r();
      } else
        n.current && !n.current.contains(s) && r();
    };
    return (e || Wp).forEach((a) => document.addEventListener(a, o)), () => {
      (e || Wp).forEach((a) => document.removeEventListener(a, o));
    };
  }, [n, r, t]), n;
}
function xA(r, e) {
  try {
    return r.addEventListener("change", e), () => r.removeEventListener("change", e);
  } catch {
    return r.addListener(e), () => r.removeListener(e);
  }
}
function LA(r, e) {
  return typeof e == "boolean" ? e : typeof window < "u" && "matchMedia" in window ? window.matchMedia(r).matches : !1;
}
function DA(r, e, { getInitialValueInEffect: t } = {
  getInitialValueInEffect: !0
}) {
  const [n, o] = Ee(
    t ? e : LA(r, e)
  ), a = Ke();
  return ve(() => {
    if ("matchMedia" in window)
      return a.current = window.matchMedia(r), o(a.current.matches), xA(a.current, (s) => o(s.matches));
  }, [r]), n;
}
function UA(r, e, t = { leading: !1 }) {
  const [n, o] = Ee(r), a = Ke(!1), s = Ke(null), l = Ke(!1), u = () => window.clearTimeout(s.current);
  return ve(() => {
    a.current && (!l.current && t.leading ? (l.current = !0, o(r)) : (u(), s.current = window.setTimeout(() => {
      l.current = !1, o(r);
    }, e)));
  }, [r, t.leading, e]), ve(() => (a.current = !0, u), []), [n, u];
}
const ia = typeof document < "u" ? Ru : ve;
function Eo(r, e) {
  const t = Ke(!1);
  ve(
    () => () => {
      t.current = !1;
    },
    []
  ), ve(() => {
    if (t.current)
      return r();
    t.current = !0;
  }, e);
}
function FA({ opened: r, shouldReturnFocus: e = !0 }) {
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
function HA(r, e = "body > :not(script)") {
  const t = fm(), n = Array.from(
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
const BA = /input|select|textarea|button|object/, hm = "a, input, select, textarea, button, object, [tabindex]";
function KA(r) {
  return r.style.display === "none";
}
function qA(r) {
  if (r.getAttribute("aria-hidden") || r.getAttribute("hidden") || r.getAttribute("type") === "hidden")
    return !1;
  let t = r;
  for (; t && !(t === document.body || t.nodeType === 11); ) {
    if (KA(t))
      return !1;
    t = t.parentNode;
  }
  return !0;
}
function pm(r) {
  let e = r.getAttribute("tabindex");
  return e === null && (e = void 0), parseInt(e, 10);
}
function pu(r) {
  const e = r.nodeName.toLowerCase(), t = !Number.isNaN(pm(r));
  return /* @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition */ (BA.test(e) && !r.disabled || r instanceof HTMLAnchorElement && r.href || t) && qA(r);
}
function gm(r) {
  const e = pm(r);
  return (Number.isNaN(e) || e >= 0) && pu(r);
}
function $A(r) {
  return Array.from(r.querySelectorAll(hm)).filter(gm);
}
function GA(r, e) {
  const t = $A(r);
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
function zA(r = !0) {
  const e = Ke(), t = Ke(null), n = (a) => {
    let s = a.querySelector("[data-autofocus]");
    if (!s) {
      const l = Array.from(a.querySelectorAll(hm));
      s = l.find(gm) || l.find(pu) || null, !s && pu(a) && (s = a);
    }
    s && s.focus({ preventScroll: !0 });
  }, o = ze(
    (a) => {
      if (r) {
        if (a === null) {
          t.current && (t.current(), t.current = null);
          return;
        }
        t.current = HA(a), e.current !== a && (a ? (setTimeout(() => {
          a.getRootNode() && n(a);
        }), e.current = a) : e.current = null);
      }
    },
    [r]
  );
  return ve(() => {
    if (!r)
      return;
    e.current && setTimeout(() => n(e.current));
    const a = (s) => {
      s.key === "Tab" && e.current && GA(e.current, s);
    };
    return document.addEventListener("keydown", a), () => {
      document.removeEventListener("keydown", a), t.current && t.current();
    };
  }, [r]), o;
}
const VA = k["useId".toString()] || (() => {
});
function WA() {
  const r = VA();
  return r ? `mantine-${r.replace(/:/g, "")}` : "";
}
function Yn(r) {
  const e = WA(), [t, n] = Ee(e);
  return ia(() => {
    n(fm());
  }, []), typeof r == "string" ? r : typeof window > "u" ? e : t;
}
function mm(r, e) {
  typeof r == "function" ? r(e) : typeof r == "object" && r !== null && "current" in r && (r.current = e);
}
function vm(...r) {
  return (e) => {
    r.forEach((t) => mm(t, e));
  };
}
function Mr(...r) {
  return ze(vm(...r), r);
}
function bo({
  value: r,
  defaultValue: e,
  finalValue: t,
  onChange: n = () => {
  }
}) {
  const [o, a] = Ee(
    e !== void 0 ? e : t
  ), s = (l) => {
    a(l), n == null || n(l);
  };
  return r !== void 0 ? [r, n, !0] : [o, s, !1];
}
function ym(r, e) {
  return DA("(prefers-reduced-motion: reduce)", r, e);
}
const Cm = To(null);
function Bu() {
  const r = jn(Cm);
  if (!r)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return r;
}
function jA() {
  return Bu().cssVariablesResolver;
}
function YA() {
  return Bu().classNamesPrefix;
}
function Ku() {
  return Bu().getStyleNonce;
}
function QA(r) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(r);
}
function JA(r) {
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
function XA(r) {
  const [e, t, n, o] = r.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r: e, g: t, b: n, a: o || 1 };
}
function ZA(r) {
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
function wm(r) {
  return QA(r) ? JA(r) : r.startsWith("rgb") ? XA(r) : r.startsWith("hsl") ? ZA(r) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function as(r, e) {
  if (r.startsWith("var("))
    return r;
  const { r: t, g: n, b: o, a } = wm(r), s = 1 - e, l = (u) => Math.round(u * s);
  return `rgba(${l(t)}, ${l(n)}, ${l(o)}, ${a})`;
}
function gu(r, e) {
  return typeof r.primaryShade == "number" ? r.primaryShade : e === "dark" ? r.primaryShade.dark : r.primaryShade.light;
}
function Js({
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
    value: a !== void 0 ? e.colors[n][a] : e.colors[n][gu(e, t || "light")],
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
function ji(r, e) {
  const t = Js({ color: r || e.primaryColor, theme: e });
  return t.variable ? `var(${t.variable})` : r;
}
function jp(r, e) {
  const t = {
    from: (r == null ? void 0 : r.from) || e.defaultGradient.from,
    to: (r == null ? void 0 : r.to) || e.defaultGradient.to,
    deg: (r == null ? void 0 : r.deg) || e.defaultGradient.deg || 0
  }, n = ji(t.from, e), o = ji(t.to, e);
  return `linear-gradient(${t.deg}deg, ${n} 0%, ${o} 100%)`;
}
function rr(r, e) {
  if (typeof r != "string" || e > 1 || e < 0)
    return "rgba(0, 0, 0, 1)";
  const { r: t, g: n, b: o } = wm(r);
  return `rgba(${t}, ${n}, ${o}, ${e})`;
}
const eR = ({
  color: r,
  theme: e,
  variant: t,
  gradient: n
}) => {
  const o = Js({ color: r, theme: e });
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
      hover: as(r, 0.1),
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
        background: rr(a, 0.1),
        hover: rr(a, 0.12),
        color: `var(--mantine-color-${o.color}-${Math.min(o.shade, 6)})`,
        border: `${$(1)} solid transparent`
      };
    }
    return {
      background: rr(r, 0.1),
      hover: rr(r, 0.12),
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
      hover: rr(e.colors[o.color][o.shade], 0.05),
      color: `var(--mantine-color-${o.color}-${o.shade})`,
      border: `${$(1)} solid var(--mantine-color-${o.color}-${o.shade})`
    } : {
      background: "transparent",
      hover: rr(r, 0.05),
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
        hover: rr(a, 0.12),
        color: `var(--mantine-color-${o.color}-${Math.min(o.shade, 6)})`,
        border: `${$(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: rr(r, 0.12),
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
    hover: as(e.white, 0.01),
    color: `var(--mantine-color-${r}-filled)`,
    border: `${$(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: as(e.white, 0.01),
    color: `var(--mantine-color-${o.color}-${o.shade})`,
    border: `${$(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: as(e.white, 0.01),
    color: r,
    border: `${$(1)} solid transparent`
  } : t === "gradient" ? {
    background: jp(n, e),
    hover: jp(n, e),
    color: "var(--mantine-color-white)",
    border: "none"
  } : t === "default" ? {
    background: "var(--mantine-color-default)",
    hover: "var(--mantine-color-default-hover)",
    color: "var(--mantine-color-default-color)",
    border: `${$(1)} solid var(--mantine-color-default-border)`
  } : {};
}, tR = {
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
}, Yp = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", qu = {
  scale: 1,
  fontSmoothing: !0,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: tR,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: eR,
  fontFamily: Yp,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: !1,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: Yp,
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
function Qp(r) {
  return r === "auto" || r === "dark" || r === "light";
}
function rR({
  key: r = "mantine-color-scheme-value"
} = {}) {
  let e;
  return {
    get: (t) => {
      if (typeof window > "u")
        return t;
      try {
        const n = window.localStorage.getItem(r);
        return Qp(n) ? n : t;
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
        n.storageArea === window.localStorage && n.key === r && Qp(n.newValue) && t(n.newValue);
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
const nR = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", Jp = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function Hl(r) {
  return r < 0 || r > 9 ? !1 : parseInt(r.toString(), 10) === r;
}
function Xp(r) {
  if (!(r.primaryColor in r.colors))
    throw new Error(nR);
  if (typeof r.primaryShade == "object" && (!Hl(r.primaryShade.dark) || !Hl(r.primaryShade.light)))
    throw new Error(Jp);
  if (typeof r.primaryShade == "number" && !Hl(r.primaryShade))
    throw new Error(Jp);
}
function oR(r, e) {
  var n;
  if (!e)
    return Xp(r), r;
  const t = Uu(r, e);
  return e.fontFamily && !((n = e.headings) != null && n.fontFamily) && (t.headings.fontFamily = e.fontFamily), Xp(t), t;
}
const $u = To(null), iR = () => jn($u) || qu;
function Qn() {
  const r = jn($u);
  if (!r)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return r;
}
function Em({
  theme: r,
  children: e,
  inherit: t = !0
}) {
  const n = iR(), o = ps(
    () => oR(t ? n : qu, r),
    [r, n, t]
  );
  return /* @__PURE__ */ k.createElement($u.Provider, { value: o }, e);
}
Em.displayName = "@mantine/core/MantineThemeProvider";
function aR() {
  const r = Qn(), e = Ku(), t = on(r.breakpoints).reduce((n, o) => {
    const a = wA(r.breakpoints[o]);
    return `${n}@media (max-width: ${zp(
      a - 0.1
    )}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${zp(
      a
    )}) {.mantine-hidden-from-${o} {display: none !important;}}`;
  }, "");
  return /* @__PURE__ */ k.createElement(
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
function sR(r, e) {
  const t = Bl(r.variables), n = t ? Kl(e, t) : "", o = Bl(r.dark), a = o ? Kl(`${e}[data-mantine-color-scheme="dark"]`, o) : "", s = Bl(r.light), l = s ? Kl(`${e}[data-mantine-color-scheme="light"]`, s) : "";
  return `${n}${a}${l}`;
}
function zo(r, e, t) {
  on(e).forEach(
    (n) => Object.assign(r, { [`--mantine-${t}-${n}`]: e[n] })
  );
}
const bm = (r) => {
  const e = gu(r, "dark"), t = gu(r, "light"), n = r.defaultRadius in r.radius ? r.radius[r.defaultRadius] : $(r.defaultRadius), o = {
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
    o.light["--mantine-color-dimmed"] = "var(--mantine-color-gray-6)", o.light[`--mantine-color-${s}-text`] = `var(--mantine-color-${s}-filled)`, o.light[`--mantine-color-${s}-filled`] = `var(--mantine-color-${s}-${t})`, o.light[`--mantine-color-${s}-filled-hover`] = l, o.light[`--mantine-color-${s}-light`] = rr(
      r.colors[s][t],
      0.1
    ), o.light[`--mantine-color-${s}-light-hover`] = rr(
      r.colors[s][t],
      0.12
    ), o.light[`--mantine-color-${s}-light-color`] = `var(--mantine-color-${s}-${t})`, o.light[`--mantine-color-${s}-outline`] = `var(--mantine-color-${s}-${t})`, o.light[`--mantine-color-${s}-outline-hover`] = rr(
      r.colors[s][t],
      0.05
    ), o.dark["--mantine-color-dimmed"] = "var(--mantine-color-dark-2)", o.dark[`--mantine-color-${s}-text`] = `var(--mantine-color-${s}-4)`, o.dark[`--mantine-color-${s}-filled`] = `var(--mantine-color-${s}-${e})`, o.dark[`--mantine-color-${s}-filled-hover`] = u, o.dark[`--mantine-color-${s}-light`] = rr(
      r.colors[s][Math.max(0, e - 2)],
      0.15
    ), o.dark[`--mantine-color-${s}-light-hover`] = rr(
      r.colors[s][Math.max(0, e - 2)],
      0.2
    ), o.dark[`--mantine-color-${s}-light-color`] = `var(--mantine-color-${s}-${Math.max(
      e - 5,
      0
    )})`, o.dark[`--mantine-color-${s}-outline`] = `var(--mantine-color-${s}-${Math.max(
      e - 4,
      0
    )})`, o.dark[`--mantine-color-${s}-outline-hover`] = rr(
      r.colors[s][Math.max(e - 4, 0)],
      0.05
    );
  });
  const a = r.headings.sizes;
  return on(a).forEach((s) => {
    o.variables[`--mantine-${s}-font-size`] = a[s].fontSize, o.variables[`--mantine-${s}-line-height`] = a[s].lineHeight, o.variables[`--mantine-${s}-font-weight`] = a[s].fontWeight || r.headings.fontWeight;
  }), o;
};
function cR({ theme: r, generator: e }) {
  const t = bm(r), n = e == null ? void 0 : e(r);
  return n ? Uu(t, n) : t;
}
const ql = bm(qu);
function lR(r) {
  const e = {
    variables: {},
    light: {},
    dark: {}
  };
  return on(r.variables).forEach((t) => {
    ql.variables[t] !== r.variables[t] && (e.variables[t] = r.variables[t]);
  }), on(r.light).forEach((t) => {
    ql.light[t] !== r.light[t] && (e.light[t] = r.light[t]);
  }), on(r.dark).forEach((t) => {
    ql.dark[t] !== r.dark[t] && (e.dark[t] = r.dark[t]);
  }), e;
}
function uR(r) {
  return `
  ${r}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${r}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function _m({ cssVariablesSelector: r }) {
  const e = Qn(), t = Ku(), n = jA(), o = cR({ theme: e, generator: n }), a = r === ":root", s = a ? lR(o) : o, l = sR(s, r);
  return l ? /* @__PURE__ */ k.createElement(
    "style",
    {
      "data-mantine-styles": !0,
      nonce: t == null ? void 0 : t(),
      dangerouslySetInnerHTML: {
        __html: `${l}${a ? "" : uR(r)}`
      }
    }
  ) : null;
}
_m.displayName = "@mantine/CssVariables";
function dR() {
  const r = console.error;
  console.error = (...e) => {
    e.length > 1 && typeof e[0] == "string" && e[0].toLowerCase().includes("extra attributes from the server") && typeof e[1] == "string" && e[1].toLowerCase().includes("data-mantine-color-scheme") || r(...e);
  };
}
function Ni(r, e) {
  var n;
  const t = r !== "auto" ? r : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  (n = e()) == null || n.setAttribute("data-mantine-color-scheme", t);
}
function fR({
  manager: r,
  defaultColorScheme: e,
  getRootElement: t,
  forceColorScheme: n
}) {
  const o = Ke(), [a, s] = Ee(() => r.get(e)), l = n || a, u = ze(
    (h) => {
      n || (Ni(h, t), s(h), r.set(h));
    },
    [r.set, l, n]
  ), f = ze(() => {
    s(e), Ni(e, t), r.clear();
  }, [r.clear, e]);
  return ve(() => (r.subscribe(u), r.unsubscribe), [r.subscribe, r.unsubscribe]), ia(() => {
    Ni(r.get(e), t);
  }, []), ve(() => {
    var p;
    if (n)
      return Ni(n, t), () => {
      };
    o.current = window.matchMedia("(prefers-color-scheme: dark)");
    const h = (m) => {
      a === "auto" && Ni(m.matches ? "dark" : "light", t);
    };
    return (p = o.current) == null || p.addEventListener("change", h), () => {
      var m;
      return (m = o.current) == null ? void 0 : m.removeEventListener("change", h);
    };
  }, [a, n]), { colorScheme: l, setColorScheme: u, clearColorScheme: f };
}
function hR({
  respectReducedMotion: r,
  getRootElement: e
}) {
  ia(() => {
    var t;
    r && ((t = e()) == null || t.setAttribute("data-respect-reduced-motion", "true"));
  }, [r]);
}
dR();
function Sm({
  theme: r,
  children: e,
  getStyleNonce: t,
  withCssVariables: n = !0,
  cssVariablesSelector: o = ":root",
  classNamesPrefix: a = "mantine",
  colorSchemeManager: s = rR(),
  defaultColorScheme: l = "light",
  getRootElement: u = () => document.documentElement,
  cssVariablesResolver: f,
  forceColorScheme: h
}) {
  const { colorScheme: p, setColorScheme: m, clearColorScheme: v } = fR({
    defaultColorScheme: l,
    forceColorScheme: h,
    manager: s,
    getRootElement: u
  });
  return hR({
    respectReducedMotion: (r == null ? void 0 : r.respectReducedMotion) || !1,
    getRootElement: u
  }), /* @__PURE__ */ k.createElement(
    Cm.Provider,
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
    /* @__PURE__ */ k.createElement(Em, { theme: r }, n && /* @__PURE__ */ k.createElement(_m, { cssVariablesSelector: o }), /* @__PURE__ */ k.createElement(aR, null), e)
  );
}
Sm.displayName = "@mantine/core/MantineProvider";
function Tm({
  classNames: r,
  styles: e,
  props: t,
  stylesCtx: n
}) {
  const o = Qn();
  return {
    resolvedClassNames: Ys({
      theme: o,
      classNames: r,
      props: t,
      stylesCtx: n || void 0
    }),
    resolvedStyles: Ns({
      theme: o,
      styles: e,
      props: t,
      stylesCtx: n || void 0
    })
  };
}
const pR = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function gR({ theme: r, options: e, unstyled: t }) {
  return kn(
    (e == null ? void 0 : e.focusable) && !t && (r.focusClassName || pR[r.focusRing]),
    (e == null ? void 0 : e.active) && !t && r.activeClassName
  );
}
function mR({
  selector: r,
  stylesCtx: e,
  options: t,
  props: n,
  theme: o
}) {
  return Ys({
    theme: o,
    classNames: t == null ? void 0 : t.classNames,
    props: (t == null ? void 0 : t.props) || n,
    stylesCtx: e
  })[r];
}
function vR({
  selector: r,
  stylesCtx: e,
  theme: t,
  classNames: n,
  props: o
}) {
  return Ys({ theme: t, classNames: n, props: o, stylesCtx: e })[r];
}
function yR({ rootSelector: r, selector: e, className: t }) {
  return r === e ? t : void 0;
}
function CR({ selector: r, classes: e, unstyled: t }) {
  return t ? void 0 : e[r];
}
function wR({
  themeName: r,
  classNamesPrefix: e,
  selector: t
}) {
  return r.map((n) => `${e}-${n}-${t}`);
}
function ER({
  themeName: r,
  theme: e,
  selector: t,
  props: n,
  stylesCtx: o
}) {
  return r.map(
    (a) => {
      var s, l;
      return (l = Ys({
        theme: e,
        classNames: (s = e.components[a]) == null ? void 0 : s.classNames,
        props: n,
        stylesCtx: o
      })) == null ? void 0 : l[t];
    }
  );
}
function bR({
  options: r,
  classes: e,
  selector: t,
  unstyled: n
}) {
  return r != null && r.variant && !n ? e[`${t}--${r.variant}`] : void 0;
}
function _R({
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
  return kn(
    gR({ theme: r, options: e, unstyled: l }),
    ER({ theme: r, themeName: t, selector: n, props: h, stylesCtx: p }),
    bR({ options: e, classes: s, selector: n, unstyled: l }),
    vR({ selector: n, stylesCtx: p, theme: r, classNames: a, props: h }),
    mR({ selector: n, stylesCtx: p, options: e, props: h, theme: r }),
    yR({ rootSelector: f, selector: n, className: u }),
    CR({ selector: n, classes: s, unstyled: l }),
    wR({ themeName: t, classNamesPrefix: o, selector: n }),
    e == null ? void 0 : e.className
  );
}
function SR({
  theme: r,
  themeName: e,
  props: t,
  stylesCtx: n,
  selector: o
}) {
  return e.map(
    (a) => {
      var s;
      return Ns({
        theme: r,
        styles: (s = r.components[a]) == null ? void 0 : s.styles,
        props: t,
        stylesCtx: n
      })[o];
    }
  ).reduce((a, s) => ({ ...a, ...s }), {});
}
function mu({ style: r, theme: e }) {
  return Array.isArray(r) ? [...r].reduce(
    (t, n) => ({ ...t, ...mu({ style: n, theme: e }) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function TR(r) {
  return r.reduce((e, t) => (t && Object.keys(t).forEach((n) => {
    e[n] = { ...e[n], ...Fu(t[n]) };
  }), e), {});
}
function IR({
  vars: r,
  varsResolver: e,
  theme: t,
  props: n,
  stylesCtx: o,
  selector: a,
  themeName: s
}) {
  var l;
  return (l = TR([
    e == null ? void 0 : e(t, n, o),
    ...s.map((u) => {
      var f, h, p;
      return (p = (h = (f = t.components) == null ? void 0 : f[u]) == null ? void 0 : h.vars) == null ? void 0 : p.call(h, t, n, o);
    }),
    r == null ? void 0 : r(t, n, o)
  ])) == null ? void 0 : l[a];
}
function AR({
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
    ...SR({ theme: r, themeName: e, props: o, stylesCtx: a, selector: t }),
    ...Ns({ theme: r, styles: l, props: o, stylesCtx: a })[t],
    ...Ns({ theme: r, styles: n == null ? void 0 : n.styles, props: (n == null ? void 0 : n.props) || o, stylesCtx: a })[t],
    ...IR({ theme: r, props: o, stylesCtx: a, vars: f, varsResolver: h, selector: t, themeName: e }),
    ...s === t ? mu({ style: u, theme: r }) : null,
    ...mu({ style: n == null ? void 0 : n.style, theme: r })
  };
}
function at({
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
  const m = Qn(), v = YA(), C = (Array.isArray(r) ? r : [r]).filter((E) => E);
  return (E, _) => ({
    className: _R({
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
    style: AR({
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
function ge(r, e, t) {
  var s;
  const n = Qn(), o = (s = n.components[r]) == null ? void 0 : s.defaultProps, a = typeof o == "function" ? o(n) : o;
  return { ...e, ...a, ...Fu(t) };
}
function Zp(r) {
  return on(r).reduce(
    (e, t) => r[t] !== void 0 ? `${e}${yA(t)}:${r[t]};` : e,
    ""
  ).trim();
}
function RR({ selector: r, styles: e, media: t }) {
  const n = e ? Zp(e) : "", o = Array.isArray(t) ? t.map((a) => `@media${a.query}{${r}{${Zp(a.styles)}}}`) : [];
  return `${n ? `${r}{${n}}` : ""}${o.join("")}`.trim();
}
function kR({ selector: r, styles: e, media: t }) {
  const n = Ku();
  return /* @__PURE__ */ k.createElement(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: n == null ? void 0 : n(),
      dangerouslySetInnerHTML: { __html: RR({ selector: r, styles: e, media: t }) }
    }
  );
}
function Xs(r) {
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
    opacity: A,
    ff: R,
    fz: S,
    fw: I,
    lts: O,
    ta: L,
    lh: H,
    fs: U,
    tt: Q,
    td: Z,
    w: ae,
    miw: Y,
    maw: ue,
    h: ee,
    mih: he,
    mah: J,
    bgsz: ie,
    bgp: ne,
    bgr: Pe,
    bga: Qe,
    pos: ot,
    top: dt,
    left: Yr,
    bottom: ln,
    right: Yt,
    inset: ar,
    display: un,
    hiddenFrom: sr,
    visibleFrom: Ur,
    lightHidden: dn,
    darkHidden: qt,
    ...wr
  } = r;
  return { styleProps: Fu({
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
    opacity: A,
    ff: R,
    fz: S,
    fw: I,
    lts: O,
    ta: L,
    lh: H,
    fs: U,
    tt: Q,
    td: Z,
    w: ae,
    miw: Y,
    maw: ue,
    h: ee,
    mih: he,
    mah: J,
    bgsz: ie,
    bgp: ne,
    bgr: Pe,
    bga: Qe,
    pos: ot,
    top: dt,
    left: Yr,
    bottom: ln,
    right: Yt,
    inset: ar,
    display: un,
    hiddenFrom: sr,
    visibleFrom: Ur,
    lightHidden: dn,
    darkHidden: qt
  }), rest: wr };
}
const PR = {
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
function NR(r, e) {
  const t = Js({ color: r, theme: e });
  return t.color === "dimmed" ? "var(--mantine-color-dimmed)" : t.color === "bright" ? "var(--mantine-color-bright)" : t.isThemeColor && t.shade === void 0 ? `var(--mantine-color-${t.color}-text)` : t.variable ? `var(${t.variable})` : t.color;
}
function OR(r, e) {
  return typeof r == "string" && r in e.fontSizes ? `var(--mantine-font-size-${r})` : typeof r == "number" || typeof r == "string" ? $(r) : r;
}
function MR(r) {
  return r;
}
function xR(r, e) {
  return typeof r == "string" && r in e.lineHeights ? `var(--mantine-line-height-${r})` : r;
}
function LR(r) {
  return typeof r == "number" ? $(r) : r;
}
function DR(r, e) {
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
  color: NR,
  fontSize: OR,
  spacing: DR,
  identity: MR,
  size: LR,
  lineHeight: xR
};
function eg(r) {
  return r.replace("(min-width: ", "").replace("em)", "");
}
function UR({
  media: r,
  ...e
}) {
  const n = Object.keys(r).sort((o, a) => Number(eg(o)) - Number(eg(a))).map((o) => ({ query: o, styles: r[o] }));
  return { ...e, media: n };
}
function FR(r) {
  if (typeof r != "object" || r === null)
    return !1;
  const e = Object.keys(r);
  return !(e.length === 1 && e[0] === "base");
}
function HR(r) {
  return typeof r == "object" && r !== null ? "base" in r ? r.base : void 0 : r;
}
function BR(r) {
  return typeof r == "object" && r !== null ? on(r).filter((e) => e !== "base") : [];
}
function KR(r, e) {
  return typeof r == "object" && r !== null && e in r ? r[e] : r;
}
function qR({
  styleProps: r,
  data: e,
  theme: t
}) {
  return UR(
    on(r).reduce(
      (n, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom")
          return n;
        const a = e[o], s = Array.isArray(a.property) ? a.property : [a.property], l = HR(r[o]);
        if (!FR(r[o]))
          return s.forEach((f) => {
            n.inlineStyles[f] = $l[a.type](l, t);
          }), n;
        n.hasResponsiveStyles = !0;
        const u = BR(r[o]);
        return s.forEach((f) => {
          l && (n.styles[f] = $l[a.type](l, t)), u.forEach((h) => {
            const p = `(min-width: ${t.breakpoints[h]})`;
            n.media[p] = {
              ...n.media[p],
              [f]: $l[a.type](
                KR(r[o], h),
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
function $R() {
  return `__m__-${Fg().replace(/:/g, "")}`;
}
function Im(r, e) {
  return Array.isArray(r) ? [...r].reduce(
    (t, n) => ({ ...t, ...Im(n, e) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function Am(r) {
  return r.startsWith("data-") ? r : `data-${r}`;
}
function GR(r) {
  return Object.keys(r).reduce((e, t) => {
    const n = r[t];
    return n === void 0 || n === "" || n === !1 || n === null || (e[Am(t)] = r[t]), e;
  }, {});
}
function Rm(r) {
  return r ? typeof r == "string" ? { [Am(r)]: !0 } : Array.isArray(r) ? [...r].reduce(
    (e, t) => ({ ...e, ...Rm(t) }),
    {}
  ) : GR(r) : null;
}
function vu(r, e) {
  return Array.isArray(r) ? [...r].reduce(
    (t, n) => ({ ...t, ...vu(n, e) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function zR({
  theme: r,
  style: e,
  vars: t,
  styleProps: n
}) {
  const o = vu(e, r), a = vu(t, r);
  return { ...o, ...a, ...n };
}
const km = ut(
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
    const C = Qn(), E = r || "div", { styleProps: _, rest: A } = Xs(m), R = $R(), S = qR({
      styleProps: _,
      theme: C,
      data: PR
    }), I = {
      ref: v,
      style: zR({
        theme: C,
        style: e,
        vars: t,
        styleProps: S.inlineStyles
      }),
      className: kn(n, {
        [R]: S.hasResponsiveStyles,
        "mantine-light-hidden": f,
        "mantine-dark-hidden": h,
        [`mantine-hidden-from-${l}`]: l,
        [`mantine-visible-from-${u}`]: u
      }),
      "data-variant": o,
      "data-size": um(s) ? void 0 : s || void 0,
      ...Rm(a),
      ...A
    };
    return /* @__PURE__ */ k.createElement(k.Fragment, null, S.hasResponsiveStyles && /* @__PURE__ */ k.createElement(
      kR,
      {
        selector: `.${R}`,
        styles: S.styles,
        media: S.media
      }
    ), typeof p == "function" ? p(I) : /* @__PURE__ */ k.createElement(E, { ...I }));
  }
);
km.displayName = "@mantine/core/Box";
const Ie = km;
function Pm(r) {
  return r;
}
function xe(r) {
  const e = ut(r);
  return e.extend = Pm, e;
}
function aa(r) {
  const e = ut(r);
  return e.extend = Pm, e;
}
const VR = To({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function Gu() {
  return jn(VR);
}
function WR(r) {
  if (!r || typeof r == "string")
    return 0;
  const e = r / 36;
  return Math.round((4 + 15 * e ** 0.25 + e / 5) * 10);
}
function Gl(r) {
  return r != null && r.current ? r.current.scrollHeight : "auto";
}
const Oi = typeof window < "u" && window.requestAnimationFrame;
function jR({
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
  }, [l, u] = Ee(n ? {} : s), f = (C) => {
    XT(() => u(C));
  }, h = (C) => {
    f((E) => ({ ...E, ...C }));
  };
  function p(C) {
    return {
      transition: `height ${r || WR(C)}ms ${e}`
    };
  }
  Eo(() => {
    typeof Oi == "function" && Oi(n ? () => {
      h({ willChange: "height", display: "block", overflow: "hidden" }), Oi(() => {
        const C = Gl(o);
        h({ ...p(C), height: C });
      });
    } : () => {
      const C = Gl(o);
      h({ ...p(C), willChange: "height", height: C }), Oi(() => h({ height: a, overflow: "hidden" }));
    });
  }, [n]);
  const m = (C) => {
    if (!(C.target !== o.current || C.propertyName !== "height"))
      if (n) {
        const E = Gl(o);
        E === l.height ? f({}) : h({ height: E }), t();
      } else
        l.height === a && (f(s), t());
  };
  function v({ style: C = {}, refKey: E = "ref", ..._ } = {}) {
    const A = _[E];
    return {
      "aria-hidden": !n,
      ..._,
      [E]: vm(o, A),
      onTransitionEnd: m,
      style: { boxSizing: "border-box", ...C, ...l }
    };
  }
  return v;
}
const YR = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: !0
}, Nm = xe((r, e) => {
  const {
    children: t,
    in: n,
    transitionDuration: o,
    transitionTimingFunction: a,
    style: s,
    onTransitionEnd: l,
    animateOpacity: u,
    ...f
  } = ge("Collapse", YR, r), h = Qn(), p = ym(), v = (h.respectReducedMotion ? p : !1) ? 0 : o, C = jR({
    opened: n,
    transitionDuration: v,
    transitionTimingFunction: a,
    onTransitionEnd: l
  });
  return v === 0 ? n ? /* @__PURE__ */ k.createElement(Ie, { ...f }, t) : null : /* @__PURE__ */ k.createElement(Ie, { ...C({ style: Im(s, h), ref: e, ...f }) }, /* @__PURE__ */ k.createElement(
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
Nm.displayName = "@mantine/core/Collapse";
const [QR, xr] = ci(
  "ScrollArea.Root component was not found in tree"
);
function ni(r, e) {
  const t = ho(e);
  ia(() => {
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
const JR = k.forwardRef((r, e) => {
  const { style: t, ...n } = r, o = xr(), [a, s] = k.useState(0), [l, u] = k.useState(0), f = !!(a && l);
  return ni(o.scrollbarX, () => {
    var p;
    const h = ((p = o.scrollbarX) == null ? void 0 : p.offsetHeight) || 0;
    o.onCornerHeightChange(h), u(h);
  }), ni(o.scrollbarY, () => {
    var p;
    const h = ((p = o.scrollbarY) == null ? void 0 : p.offsetWidth) || 0;
    o.onCornerWidthChange(h), s(h);
  }), f ? /* @__PURE__ */ k.createElement("div", { ...n, ref: e, style: { ...t, width: a, height: l } }) : null;
}), XR = k.forwardRef(
  (r, e) => {
    const t = xr(), n = !!(t.scrollbarX && t.scrollbarY);
    return t.type !== "scroll" && n ? /* @__PURE__ */ k.createElement(JR, { ...r, ref: e }) : null;
  }
), ZR = {
  scrollHideDelay: 1e3,
  type: "hover"
}, Om = ut((r, e) => {
  const t = ge("ScrollAreaRoot", ZR, r), { type: n, scrollHideDelay: o, scrollbars: a, ...s } = t, [l, u] = Ee(null), [f, h] = Ee(null), [p, m] = Ee(null), [v, C] = Ee(null), [E, _] = Ee(null), [A, R] = Ee(0), [S, I] = Ee(0), [O, L] = Ee(!1), [H, U] = Ee(!1), Q = Mr(e, (Z) => u(Z));
  return /* @__PURE__ */ k.createElement(
    QR,
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
        scrollbarYEnabled: H,
        onScrollbarYEnabledChange: U,
        onCornerWidthChange: R,
        onCornerHeightChange: I
      }
    },
    /* @__PURE__ */ k.createElement(
      Ie,
      {
        ...s,
        ref: Q,
        __vars: {
          "--sa-corner-width": a !== "xy" ? "0px" : `${A}px`,
          "--sa-corner-height": a !== "xy" ? "0px" : `${S}px`
        }
      }
    )
  );
});
Om.displayName = "@mantine/core/ScrollAreaRoot";
function Mm(r, e) {
  const t = r / e;
  return Number.isNaN(t) ? 0 : t;
}
function Zs(r) {
  const e = Mm(r.viewport, r.content), t = r.scrollbar.paddingStart + r.scrollbar.paddingEnd, n = (r.scrollbar.size - t) * e;
  return Math.max(n, 18);
}
function xm(r, e) {
  return (t) => {
    if (r[0] === r[1] || e[0] === e[1])
      return e[0];
    const n = (e[1] - e[0]) / (r[1] - r[0]);
    return e[0] + n * (t - r[0]);
  };
}
function ek(r, [e, t]) {
  return Math.min(t, Math.max(e, r));
}
function tg(r, e, t = "ltr") {
  const n = Zs(e), o = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, a = e.scrollbar.size - o, s = e.content - e.viewport, l = a - n, u = t === "ltr" ? [0, s] : [s * -1, 0], f = ek(r, u);
  return xm([0, s], [0, l])(f);
}
function tk(r, e, t, n = "ltr") {
  const o = Zs(t), a = o / 2, s = e || a, l = o - s, u = t.scrollbar.paddingStart + s, f = t.scrollbar.size - t.scrollbar.paddingEnd - l, h = t.content - t.viewport, p = n === "ltr" ? [0, h] : [h * -1, 0];
  return xm([u, f], p)(r);
}
function Lm(r, e) {
  return r > 0 && r < e;
}
function Os(r) {
  return r ? parseInt(r, 10) : 0;
}
function yo(r, e, { checkForDefaultPrevented: t = !0 } = {}) {
  return (n) => {
    r == null || r(n), (t === !1 || !n.defaultPrevented) && (e == null || e(n));
  };
}
const [rk, Dm] = ci(
  "ScrollAreaScrollbar was not found in tree"
), Um = ut((r, e) => {
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
  } = r, m = xr(), [v, C] = k.useState(null), E = Mr(e, (U) => C(U)), _ = k.useRef(null), A = k.useRef(""), { viewport: R } = m, S = t.content - t.viewport, I = ho(f), O = ho(l), L = Qs(h, 10), H = (U) => {
    if (_.current) {
      const Q = U.clientX - _.current.left, Z = U.clientY - _.current.top;
      u({ x: Q, y: Z });
    }
  };
  return ve(() => {
    const U = (Q) => {
      const Z = Q.target;
      (v == null ? void 0 : v.contains(Z)) && I(Q, S);
    };
    return document.addEventListener("wheel", U, { passive: !1 }), () => document.removeEventListener("wheel", U, { passive: !1 });
  }, [R, v, S, I]), ve(O, [t, O]), ni(v, L), ni(m.content, L), /* @__PURE__ */ k.createElement(
    rk,
    {
      value: {
        scrollbar: v,
        hasThumb: n,
        onThumbChange: ho(o),
        onThumbPointerUp: ho(a),
        onThumbPositionChange: O,
        onThumbPointerDown: ho(s)
      }
    },
    /* @__PURE__ */ k.createElement(
      "div",
      {
        ...p,
        ref: E,
        style: { position: "absolute", ...p.style },
        onPointerDown: yo(r.onPointerDown, (U) => {
          U.button === 0 && (U.target.setPointerCapture(U.pointerId), _.current = v.getBoundingClientRect(), A.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", H(U));
        }),
        onPointerMove: yo(r.onPointerMove, H),
        onPointerUp: yo(r.onPointerUp, (U) => {
          const Q = U.target;
          Q.hasPointerCapture(U.pointerId) && Q.releasePointerCapture(U.pointerId), document.body.style.webkitUserSelect = A.current, _.current = null;
        })
      }
    )
  );
}), nk = ut(
  (r, e) => {
    const { sizes: t, onSizesChange: n, style: o, ...a } = r, s = xr(), [l, u] = Ee(), f = Ke(null), h = Mr(e, f, s.onScrollbarXChange);
    return ve(() => {
      f.current && u(getComputedStyle(f.current));
    }, [f]), /* @__PURE__ */ k.createElement(
      Um,
      {
        "data-orientation": "horizontal",
        ...a,
        ref: h,
        sizes: t,
        style: {
          ...o,
          "--sa-thumb-width": `${Zs(t)}px`
        },
        onThumbPointerDown: (p) => r.onThumbPointerDown(p.x),
        onDragScroll: (p) => r.onDragScroll(p.x),
        onWheelScroll: (p, m) => {
          if (s.viewport) {
            const v = s.viewport.scrollLeft + p.deltaX;
            r.onWheelScroll(v), Lm(v, m) && p.preventDefault();
          }
        },
        onResize: () => {
          f.current && s.viewport && l && n({
            content: s.viewport.scrollWidth,
            viewport: s.viewport.offsetWidth,
            scrollbar: {
              size: f.current.clientWidth,
              paddingStart: Os(l.paddingLeft),
              paddingEnd: Os(l.paddingRight)
            }
          });
        }
      }
    );
  }
), ok = ut(
  (r, e) => {
    const { sizes: t, onSizesChange: n, style: o, ...a } = r, s = xr(), [l, u] = k.useState(), f = Ke(null), h = Mr(e, f, s.onScrollbarYChange);
    return ve(() => {
      f.current && u(getComputedStyle(f.current));
    }, [f]), /* @__PURE__ */ k.createElement(
      Um,
      {
        ...a,
        "data-orientation": "vertical",
        ref: h,
        sizes: t,
        style: {
          "--sa-thumb-height": `${Zs(t)}px`,
          ...o
        },
        onThumbPointerDown: (p) => r.onThumbPointerDown(p.y),
        onDragScroll: (p) => r.onDragScroll(p.y),
        onWheelScroll: (p, m) => {
          if (s.viewport) {
            const v = s.viewport.scrollTop + p.deltaY;
            r.onWheelScroll(v), Lm(v, m) && p.preventDefault();
          }
        },
        onResize: () => {
          f.current && s.viewport && l && n({
            content: s.viewport.scrollHeight,
            viewport: s.viewport.offsetHeight,
            scrollbar: {
              size: f.current.clientHeight,
              paddingStart: Os(l.paddingTop),
              paddingEnd: Os(l.paddingBottom)
            }
          });
        }
      }
    );
  }
), zu = ut((r, e) => {
  const { orientation: t = "vertical", ...n } = r, { dir: o } = Gu(), a = xr(), s = Ke(null), l = Ke(0), [u, f] = Ee({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), h = Mm(u.viewport, u.content), p = {
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
  }, m = (v, C) => tk(v, l.current, u, C);
  return t === "horizontal" ? /* @__PURE__ */ k.createElement(
    nk,
    {
      ...p,
      ref: e,
      onThumbPositionChange: () => {
        if (a.viewport && s.current) {
          const v = a.viewport.scrollLeft, C = tg(v, u, o);
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
  ) : t === "vertical" ? /* @__PURE__ */ k.createElement(
    ok,
    {
      ...p,
      ref: e,
      onThumbPositionChange: () => {
        if (a.viewport && s.current) {
          const v = a.viewport.scrollTop, C = tg(v, u);
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
}), Fm = ut(
  (r, e) => {
    const t = xr(), { forceMount: n, ...o } = r, [a, s] = Ee(!1), l = r.orientation === "horizontal", u = Qs(() => {
      if (t.viewport) {
        const f = t.viewport.offsetWidth < t.viewport.scrollWidth, h = t.viewport.offsetHeight < t.viewport.scrollHeight;
        s(l ? f : h);
      }
    }, 10);
    return ni(t.viewport, u), ni(t.content, u), n || a ? /* @__PURE__ */ k.createElement(
      zu,
      {
        "data-state": a ? "visible" : "hidden",
        ...o,
        ref: e
      }
    ) : null;
  }
), ik = ut(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = xr(), [a, s] = Ee(!1);
    return ve(() => {
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
    }, [o.scrollArea, o.scrollHideDelay]), t || a ? /* @__PURE__ */ k.createElement(
      Fm,
      {
        "data-state": a ? "visible" : "hidden",
        ...n,
        ref: e
      }
    ) : null;
  }
), ak = ut(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = xr(), a = r.orientation === "horizontal", [s, l] = Ee("hidden"), u = Qs(() => l("idle"), 100);
    return ve(() => {
      if (s === "idle") {
        const f = window.setTimeout(() => l("hidden"), o.scrollHideDelay);
        return () => window.clearTimeout(f);
      }
    }, [s, o.scrollHideDelay]), ve(() => {
      const { viewport: f } = o, h = a ? "scrollLeft" : "scrollTop";
      if (f) {
        let p = f[h];
        const m = () => {
          const v = f[h];
          p !== v && (l("scrolling"), u()), p = v;
        };
        return f.addEventListener("scroll", m), () => f.removeEventListener("scroll", m);
      }
    }, [o.viewport, a, u]), t || s !== "hidden" ? /* @__PURE__ */ k.createElement(
      zu,
      {
        "data-state": s === "hidden" ? "hidden" : "visible",
        ...n,
        ref: e,
        onPointerEnter: yo(r.onPointerEnter, () => l("interacting")),
        onPointerLeave: yo(r.onPointerLeave, () => l("idle"))
      }
    ) : null;
  }
), rg = k.forwardRef(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = xr(), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, l = r.orientation === "horizontal";
    return k.useEffect(() => (l ? a(!0) : s(!0), () => {
      l ? a(!1) : s(!1);
    }), [l, a, s]), o.type === "hover" ? /* @__PURE__ */ k.createElement(ik, { ...n, ref: e, forceMount: t }) : o.type === "scroll" ? /* @__PURE__ */ k.createElement(ak, { ...n, ref: e, forceMount: t }) : o.type === "auto" ? /* @__PURE__ */ k.createElement(Fm, { ...n, ref: e, forceMount: t }) : o.type === "always" ? /* @__PURE__ */ k.createElement(zu, { ...n, ref: e }) : null;
  }
);
function sk(r, e = () => {
}) {
  let t = { left: r.scrollLeft, top: r.scrollTop }, n = 0;
  return function o() {
    const a = { left: r.scrollLeft, top: r.scrollTop }, s = t.left !== a.left, l = t.top !== a.top;
    (s || l) && e(), t = a, n = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(n);
}
const ck = ut((r, e) => {
  const { style: t, ...n } = r, o = xr(), a = Dm(), { onThumbPositionChange: s } = a, l = Mr(e, (h) => a.onThumbChange(h)), u = Ke(), f = Qs(() => {
    u.current && (u.current(), u.current = void 0);
  }, 100);
  return ve(() => {
    const { viewport: h } = o;
    if (h) {
      const p = () => {
        if (f(), !u.current) {
          const m = sk(h, s);
          u.current = m, s();
        }
      };
      return s(), h.addEventListener("scroll", p), () => h.removeEventListener("scroll", p);
    }
  }, [o.viewport, f, s]), /* @__PURE__ */ k.createElement(
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
        const m = h.target.getBoundingClientRect(), v = h.clientX - m.left, C = h.clientY - m.top;
        a.onThumbPointerDown({ x: v, y: C });
      }),
      onPointerUp: yo(r.onPointerUp, a.onThumbPointerUp)
    }
  );
}), ng = k.forwardRef(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = Dm();
    return t || o.hasThumb ? /* @__PURE__ */ k.createElement(ck, { ref: e, ...n }) : null;
  }
), Hm = ut(
  ({ children: r, style: e, ...t }, n) => {
    const o = xr(), a = Mr(n, o.onViewportChange);
    return /* @__PURE__ */ k.createElement(
      Ie,
      {
        ...t,
        ref: a,
        style: {
          overflowX: o.scrollbarXEnabled ? "scroll" : "hidden",
          overflowY: o.scrollbarYEnabled ? "scroll" : "hidden",
          ...e
        }
      },
      /* @__PURE__ */ k.createElement("div", { style: { minWidth: "100%", display: "table" }, ref: o.onContentChange }, r)
    );
  }
);
Hm.displayName = "@mantine/core/ScrollAreaViewport";
var Vu = { root: "m-d57069b5", viewport: "m-c0783ff9", viewportInner: "m-f8f631dd", scrollbar: "m-c44ba933", thumb: "m-d8b5e363", corner: "m-21657268" };
const Bm = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
}, lk = (r, { scrollbarSize: e }) => ({
  root: {
    "--scrollarea-scrollbar-size": $(e)
  }
}), sa = xe((r, e) => {
  const t = ge("ScrollArea", Bm, r), {
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
    scrollbars: A,
    ...R
  } = t, [S, I] = Ee(!1), O = at({
    name: "ScrollArea",
    props: t,
    classes: Vu,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: f,
    varsResolver: lk
  });
  return /* @__PURE__ */ k.createElement(
    Om,
    {
      type: h === "never" ? "always" : h,
      scrollHideDelay: p,
      ref: e,
      scrollbars: A,
      ...O("root"),
      ...R
    },
    /* @__PURE__ */ k.createElement(
      Hm,
      {
        ...m,
        ...O("viewport"),
        ref: v,
        "data-offset-scrollbars": _ === !0 ? "xy" : _ || void 0,
        "data-scrollbars": A || void 0,
        onScroll: typeof C == "function" ? ({ currentTarget: L }) => C({
          x: L.scrollLeft,
          y: L.scrollTop
        }) : void 0
      },
      E
    ),
    (A === "xy" || A === "x") && /* @__PURE__ */ k.createElement(
      rg,
      {
        ...O("scrollbar"),
        orientation: "horizontal",
        "data-hidden": h === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => I(!0),
        onMouseLeave: () => I(!1)
      },
      /* @__PURE__ */ k.createElement(ng, { ...O("thumb") })
    ),
    (A === "xy" || A === "y") && /* @__PURE__ */ k.createElement(
      rg,
      {
        ...O("scrollbar"),
        orientation: "vertical",
        "data-hidden": h === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => I(!0),
        onMouseLeave: () => I(!1)
      },
      /* @__PURE__ */ k.createElement(ng, { ...O("thumb") })
    ),
    /* @__PURE__ */ k.createElement(
      XR,
      {
        ...O("corner"),
        "data-hovered": S || void 0,
        "data-hidden": h === "never" || void 0
      }
    )
  );
});
sa.displayName = "@mantine/core/ScrollArea";
const Wu = xe((r, e) => {
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
    vars: A,
    ...R
  } = ge("ScrollAreaAutosize", Bm, r);
  return /* @__PURE__ */ k.createElement(Ie, { ...R, ref: e, style: [{ display: "flex" }, _] }, /* @__PURE__ */ k.createElement(Ie, { style: { display: "flex", flexDirection: "column", flex: 1 } }, /* @__PURE__ */ k.createElement(
    sa,
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
      vars: A,
      scrollbars: E
    },
    t
  )));
});
sa.classes = Vu;
Wu.displayName = "@mantine/core/ScrollAreaAutosize";
Wu.classes = Vu;
sa.Autosize = Wu;
var Km = { root: "m-87cf2631" };
const uk = {
  __staticSelector: "UnstyledButton"
}, ca = aa(
  (r, e) => {
    const t = ge("UnstyledButton", uk, r), {
      className: n,
      component: o = "button",
      __staticSelector: a,
      unstyled: s,
      classNames: l,
      styles: u,
      style: f,
      ...h
    } = t, p = at({
      name: a,
      props: t,
      classes: Km,
      className: n,
      style: f,
      classNames: l,
      styles: u,
      unstyled: s
    });
    return /* @__PURE__ */ k.createElement(
      Ie,
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
ca.classes = Km;
ca.displayName = "@mantine/core/UnstyledButton";
const Wr = Math.min, Ut = Math.max, Ms = Math.round, ss = Math.floor, zn = (r) => ({
  x: r,
  y: r
}), dk = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, fk = {
  start: "end",
  end: "start"
};
function yu(r, e, t) {
  return Ut(r, Wr(e, t));
}
function In(r, e) {
  return typeof r == "function" ? r(e) : r;
}
function jr(r) {
  return r.split("-")[0];
}
function li(r) {
  return r.split("-")[1];
}
function ju(r) {
  return r === "x" ? "y" : "x";
}
function Yu(r) {
  return r === "y" ? "height" : "width";
}
function Ao(r) {
  return ["top", "bottom"].includes(jr(r)) ? "y" : "x";
}
function Qu(r) {
  return ju(Ao(r));
}
function hk(r, e, t) {
  t === void 0 && (t = !1);
  const n = li(r), o = Qu(r), a = Yu(o);
  let s = o === "x" ? n === (t ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[a] > e.floating[a] && (s = xs(s)), [s, xs(s)];
}
function pk(r) {
  const e = xs(r);
  return [Cu(r), e, Cu(e)];
}
function Cu(r) {
  return r.replace(/start|end/g, (e) => fk[e]);
}
function gk(r, e, t) {
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
function mk(r, e, t, n) {
  const o = li(r);
  let a = gk(jr(r), t === "start", n);
  return o && (a = a.map((s) => s + "-" + o), e && (a = a.concat(a.map(Cu)))), a;
}
function xs(r) {
  return r.replace(/left|right|bottom|top/g, (e) => dk[e]);
}
function vk(r) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...r
  };
}
function Ju(r) {
  return typeof r != "number" ? vk(r) : {
    top: r,
    right: r,
    bottom: r,
    left: r
  };
}
function oi(r) {
  return {
    ...r,
    top: r.y,
    left: r.x,
    right: r.x + r.width,
    bottom: r.y + r.height
  };
}
function og(r, e, t) {
  let {
    reference: n,
    floating: o
  } = r;
  const a = Ao(e), s = Qu(e), l = Yu(s), u = jr(e), f = a === "y", h = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, m = n[l] / 2 - o[l] / 2;
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
  switch (li(e)) {
    case "start":
      v[s] -= m * (t && f ? -1 : 1);
      break;
    case "end":
      v[s] += m * (t && f ? -1 : 1);
      break;
  }
  return v;
}
const yk = async (r, e, t) => {
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
  } = og(f, n, u), m = n, v = {}, C = 0;
  for (let E = 0; E < l.length; E++) {
    const {
      name: _,
      fn: A
    } = l[E], {
      x: R,
      y: S,
      data: I,
      reset: O
    } = await A({
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
    if (h = R ?? h, p = S ?? p, v = {
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
      } = og(f, m, u)), E = -1;
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
async function Xu(r, e) {
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
  } = In(e, r), C = Ju(v), _ = l[m ? p === "floating" ? "reference" : "floating" : p], A = oi(await a.getClippingRect({
    element: (t = await (a.isElement == null ? void 0 : a.isElement(_))) == null || t ? _ : _.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(l.floating)),
    boundary: f,
    rootBoundary: h,
    strategy: u
  })), R = p === "floating" ? {
    ...s.floating,
    x: n,
    y: o
  } : s.reference, S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l.floating)), I = await (a.isElement == null ? void 0 : a.isElement(S)) ? await (a.getScale == null ? void 0 : a.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, O = oi(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: R,
    offsetParent: S,
    strategy: u
  }) : R);
  return {
    top: (A.top - O.top + C.top) / I.y,
    bottom: (O.bottom - A.bottom + C.bottom) / I.y,
    left: (A.left - O.left + C.left) / I.x,
    right: (O.right - A.right + C.right) / I.x
  };
}
const ig = (r) => ({
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
    } = In(r, e) || {};
    if (f == null)
      return {};
    const p = Ju(h), m = {
      x: t,
      y: n
    }, v = Qu(o), C = Yu(v), E = await s.getDimensions(f), _ = v === "y", A = _ ? "top" : "left", R = _ ? "bottom" : "right", S = _ ? "clientHeight" : "clientWidth", I = a.reference[C] + a.reference[v] - m[v] - a.floating[C], O = m[v] - a.reference[v], L = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
    let H = L ? L[S] : 0;
    (!H || !await (s.isElement == null ? void 0 : s.isElement(L))) && (H = l.floating[S] || a.floating[C]);
    const U = I / 2 - O / 2, Q = H / 2 - E[C] / 2 - 1, Z = Wr(p[A], Q), ae = Wr(p[R], Q), Y = Z, ue = H - E[C] - ae, ee = H / 2 - E[C] / 2 + U, he = yu(Y, ee, ue), J = !u.arrow && li(o) != null && ee != he && a.reference[C] / 2 - (ee < Y ? Z : ae) - E[C] / 2 < 0, ie = J ? ee < Y ? ee - Y : ee - ue : 0;
    return {
      [v]: m[v] + ie,
      data: {
        [v]: he,
        centerOffset: ee - he - ie,
        ...J && {
          alignmentOffset: ie
        }
      },
      reset: J
    };
  }
}), Ck = function(r) {
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
      } = In(r, e);
      if ((t = a.arrow) != null && t.alignmentOffset)
        return {};
      const A = jr(o), R = jr(l) === l, S = await (u.isRTL == null ? void 0 : u.isRTL(f.floating)), I = m || (R || !E ? [xs(l)] : pk(l));
      !m && C !== "none" && I.push(...mk(l, E, C, S));
      const O = [l, ...I], L = await Xu(e, _), H = [];
      let U = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (h && H.push(L[A]), p) {
        const Y = hk(o, s, S);
        H.push(L[Y[0]], L[Y[1]]);
      }
      if (U = [...U, {
        placement: o,
        overflows: H
      }], !H.every((Y) => Y <= 0)) {
        var Q, Z;
        const Y = (((Q = a.flip) == null ? void 0 : Q.index) || 0) + 1, ue = O[Y];
        if (ue)
          return {
            data: {
              index: Y,
              overflows: U
            },
            reset: {
              placement: ue
            }
          };
        let ee = (Z = U.filter((he) => he.overflows[0] <= 0).sort((he, J) => he.overflows[1] - J.overflows[1])[0]) == null ? void 0 : Z.placement;
        if (!ee)
          switch (v) {
            case "bestFit": {
              var ae;
              const he = (ae = U.map((J) => [J.placement, J.overflows.filter((ie) => ie > 0).reduce((ie, ne) => ie + ne, 0)]).sort((J, ie) => J[1] - ie[1])[0]) == null ? void 0 : ae[0];
              he && (ee = he);
              break;
            }
            case "initialPlacement":
              ee = l;
              break;
          }
        if (o !== ee)
          return {
            reset: {
              placement: ee
            }
          };
      }
      return {};
    }
  };
};
function qm(r) {
  const e = Wr(...r.map((a) => a.left)), t = Wr(...r.map((a) => a.top)), n = Ut(...r.map((a) => a.right)), o = Ut(...r.map((a) => a.bottom));
  return {
    x: e,
    y: t,
    width: n - e,
    height: o - t
  };
}
function wk(r) {
  const e = r.slice().sort((o, a) => o.y - a.y), t = [];
  let n = null;
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    !n || a.y - n.y > n.height / 2 ? t.push([a]) : t[t.length - 1].push(a), n = a;
  }
  return t.map((o) => oi(qm(o)));
}
const Ek = function(r) {
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
      } = In(r, e), h = Array.from(await (a.getClientRects == null ? void 0 : a.getClientRects(n.reference)) || []), p = wk(h), m = oi(qm(h)), v = Ju(l);
      function C() {
        if (p.length === 2 && p[0].left > p[1].right && u != null && f != null)
          return p.find((_) => u > _.left - v.left && u < _.right + v.right && f > _.top - v.top && f < _.bottom + v.bottom) || m;
        if (p.length >= 2) {
          if (Ao(t) === "y") {
            const Z = p[0], ae = p[p.length - 1], Y = jr(t) === "top", ue = Z.top, ee = ae.bottom, he = Y ? Z.left : ae.left, J = Y ? Z.right : ae.right, ie = J - he, ne = ee - ue;
            return {
              top: ue,
              bottom: ee,
              left: he,
              right: J,
              width: ie,
              height: ne,
              x: he,
              y: ue
            };
          }
          const _ = jr(t) === "left", A = Ut(...p.map((Z) => Z.right)), R = Wr(...p.map((Z) => Z.left)), S = p.filter((Z) => _ ? Z.left === R : Z.right === A), I = S[0].top, O = S[S.length - 1].bottom, L = R, H = A, U = H - L, Q = O - I;
          return {
            top: I,
            bottom: O,
            left: L,
            right: H,
            width: U,
            height: Q,
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
async function bk(r, e) {
  const {
    placement: t,
    platform: n,
    elements: o
  } = r, a = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), s = jr(t), l = li(t), u = Ao(t) === "y", f = ["left", "top"].includes(s) ? -1 : 1, h = a && u ? -1 : 1, p = In(e, r);
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
const _k = function(r) {
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
      } = e, u = await bk(e, r);
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
}, Sk = function(r) {
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
              x: A,
              y: R
            } = _;
            return {
              x: A,
              y: R
            };
          }
        },
        ...u
      } = In(r, e), f = {
        x: t,
        y: n
      }, h = await Xu(e, u), p = Ao(jr(o)), m = ju(p);
      let v = f[m], C = f[p];
      if (a) {
        const _ = m === "y" ? "top" : "left", A = m === "y" ? "bottom" : "right", R = v + h[_], S = v - h[A];
        v = yu(R, v, S);
      }
      if (s) {
        const _ = p === "y" ? "top" : "left", A = p === "y" ? "bottom" : "right", R = C + h[_], S = C - h[A];
        C = yu(R, C, S);
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
}, Tk = function(r) {
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
      } = In(r, e), h = {
        x: t,
        y: n
      }, p = Ao(o), m = ju(p);
      let v = h[m], C = h[p];
      const E = In(l, e), _ = typeof E == "number" ? {
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
        var A, R;
        const S = m === "y" ? "width" : "height", I = ["top", "left"].includes(jr(o)), O = a.reference[p] - a.floating[S] + (I && ((A = s.offset) == null ? void 0 : A[p]) || 0) + (I ? 0 : _.crossAxis), L = a.reference[p] + a.reference[S] + (I ? 0 : ((R = s.offset) == null ? void 0 : R[p]) || 0) - (I ? _.crossAxis : 0);
        C < O ? C = O : C > L && (C = L);
      }
      return {
        [m]: v,
        [p]: C
      };
    }
  };
}, Ik = function(r) {
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
      } = In(r, e), u = await Xu(e, l), f = jr(t), h = li(t), p = Ao(t) === "y", {
        width: m,
        height: v
      } = n.floating;
      let C, E;
      f === "top" || f === "bottom" ? (C = f, E = h === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (E = f, C = h === "end" ? "top" : "bottom");
      const _ = v - u[C], A = m - u[E], R = !e.middlewareData.shift;
      let S = _, I = A;
      if (p) {
        const L = m - u.left - u.right;
        I = h || R ? Wr(A, L) : L;
      } else {
        const L = v - u.top - u.bottom;
        S = h || R ? Wr(_, L) : L;
      }
      if (R && !h) {
        const L = Ut(u.left, 0), H = Ut(u.right, 0), U = Ut(u.top, 0), Q = Ut(u.bottom, 0);
        p ? I = m - 2 * (L !== 0 || H !== 0 ? L + H : Ut(u.left, u.right)) : S = v - 2 * (U !== 0 || Q !== 0 ? U + Q : Ut(u.top, u.bottom));
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
  return $m(r) ? (r.nodeName || "").toLowerCase() : "#document";
}
function vr(r) {
  var e;
  return (r == null || (e = r.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Pn(r) {
  var e;
  return (e = ($m(r) ? r.ownerDocument : r.document) || window.document) == null ? void 0 : e.documentElement;
}
function $m(r) {
  return r instanceof Node || r instanceof vr(r).Node;
}
function An(r) {
  return r instanceof Element || r instanceof vr(r).Element;
}
function cn(r) {
  return r instanceof HTMLElement || r instanceof vr(r).HTMLElement;
}
function ag(r) {
  return typeof ShadowRoot > "u" ? !1 : r instanceof ShadowRoot || r instanceof vr(r).ShadowRoot;
}
function la(r) {
  const {
    overflow: e,
    overflowX: t,
    overflowY: n,
    display: o
  } = Or(r);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + t) && !["inline", "contents"].includes(o);
}
function Ak(r) {
  return ["table", "td", "th"].includes(Vn(r));
}
function Zu(r) {
  const e = ed(), t = Or(r);
  return t.transform !== "none" || t.perspective !== "none" || (t.containerType ? t.containerType !== "normal" : !1) || !e && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !e && (t.filter ? t.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (t.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (t.contain || "").includes(n));
}
function Rk(r) {
  let e = ii(r);
  for (; cn(e) && !ec(e); ) {
    if (Zu(e))
      return e;
    e = ii(e);
  }
  return null;
}
function ed() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ec(r) {
  return ["html", "body", "#document"].includes(Vn(r));
}
function Or(r) {
  return vr(r).getComputedStyle(r);
}
function tc(r) {
  return An(r) ? {
    scrollLeft: r.scrollLeft,
    scrollTop: r.scrollTop
  } : {
    scrollLeft: r.pageXOffset,
    scrollTop: r.pageYOffset
  };
}
function ii(r) {
  if (Vn(r) === "html")
    return r;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    r.assignedSlot || // DOM Element detected.
    r.parentNode || // ShadowRoot detected.
    ag(r) && r.host || // Fallback.
    Pn(r)
  );
  return ag(e) ? e.host : e;
}
function Gm(r) {
  const e = ii(r);
  return ec(e) ? r.ownerDocument ? r.ownerDocument.body : r.body : cn(e) && la(e) ? e : Gm(e);
}
function Yi(r, e, t) {
  var n;
  e === void 0 && (e = []), t === void 0 && (t = !0);
  const o = Gm(r), a = o === ((n = r.ownerDocument) == null ? void 0 : n.body), s = vr(o);
  return a ? e.concat(s, s.visualViewport || [], la(o) ? o : [], s.frameElement && t ? Yi(s.frameElement) : []) : e.concat(o, Yi(o, [], t));
}
function zm(r) {
  const e = Or(r);
  let t = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const o = cn(r), a = o ? r.offsetWidth : t, s = o ? r.offsetHeight : n, l = Ms(t) !== a || Ms(n) !== s;
  return l && (t = a, n = s), {
    width: t,
    height: n,
    $: l
  };
}
function td(r) {
  return An(r) ? r : r.contextElement;
}
function ei(r) {
  const e = td(r);
  if (!cn(e))
    return zn(1);
  const t = e.getBoundingClientRect(), {
    width: n,
    height: o,
    $: a
  } = zm(e);
  let s = (a ? Ms(t.width) : t.width) / n, l = (a ? Ms(t.height) : t.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const kk = /* @__PURE__ */ zn(0);
function Vm(r) {
  const e = vr(r);
  return !ed() || !e.visualViewport ? kk : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Pk(r, e, t) {
  return e === void 0 && (e = !1), !t || e && t !== vr(r) ? !1 : e;
}
function _o(r, e, t, n) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const o = r.getBoundingClientRect(), a = td(r);
  let s = zn(1);
  e && (n ? An(n) && (s = ei(n)) : s = ei(r));
  const l = Pk(a, t, n) ? Vm(a) : zn(0);
  let u = (o.left + l.x) / s.x, f = (o.top + l.y) / s.y, h = o.width / s.x, p = o.height / s.y;
  if (a) {
    const m = vr(a), v = n && An(n) ? vr(n) : n;
    let C = m.frameElement;
    for (; C && n && v !== m; ) {
      const E = ei(C), _ = C.getBoundingClientRect(), A = Or(C), R = _.left + (C.clientLeft + parseFloat(A.paddingLeft)) * E.x, S = _.top + (C.clientTop + parseFloat(A.paddingTop)) * E.y;
      u *= E.x, f *= E.y, h *= E.x, p *= E.y, u += R, f += S, C = vr(C).frameElement;
    }
  }
  return oi({
    width: h,
    height: p,
    x: u,
    y: f
  });
}
function Nk(r) {
  let {
    rect: e,
    offsetParent: t,
    strategy: n
  } = r;
  const o = cn(t), a = Pn(t);
  if (t === a)
    return e;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = zn(1);
  const u = zn(0);
  if ((o || !o && n !== "fixed") && ((Vn(t) !== "body" || la(a)) && (s = tc(t)), cn(t))) {
    const f = _o(t);
    l = ei(t), u.x = f.x + t.clientLeft, u.y = f.y + t.clientTop;
  }
  return {
    width: e.width * l.x,
    height: e.height * l.y,
    x: e.x * l.x - s.scrollLeft * l.x + u.x,
    y: e.y * l.y - s.scrollTop * l.y + u.y
  };
}
function Ok(r) {
  return Array.from(r.getClientRects());
}
function Wm(r) {
  return _o(Pn(r)).left + tc(r).scrollLeft;
}
function Mk(r) {
  const e = Pn(r), t = tc(r), n = r.ownerDocument.body, o = Ut(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), a = Ut(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -t.scrollLeft + Wm(r);
  const l = -t.scrollTop;
  return Or(n).direction === "rtl" && (s += Ut(e.clientWidth, n.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: l
  };
}
function xk(r, e) {
  const t = vr(r), n = Pn(r), o = t.visualViewport;
  let a = n.clientWidth, s = n.clientHeight, l = 0, u = 0;
  if (o) {
    a = o.width, s = o.height;
    const f = ed();
    (!f || f && e === "fixed") && (l = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: l,
    y: u
  };
}
function Lk(r, e) {
  const t = _o(r, !0, e === "fixed"), n = t.top + r.clientTop, o = t.left + r.clientLeft, a = cn(r) ? ei(r) : zn(1), s = r.clientWidth * a.x, l = r.clientHeight * a.y, u = o * a.x, f = n * a.y;
  return {
    width: s,
    height: l,
    x: u,
    y: f
  };
}
function sg(r, e, t) {
  let n;
  if (e === "viewport")
    n = xk(r, t);
  else if (e === "document")
    n = Mk(Pn(r));
  else if (An(e))
    n = Lk(e, t);
  else {
    const o = Vm(r);
    n = {
      ...e,
      x: e.x - o.x,
      y: e.y - o.y
    };
  }
  return oi(n);
}
function jm(r, e) {
  const t = ii(r);
  return t === e || !An(t) || ec(t) ? !1 : Or(t).position === "fixed" || jm(t, e);
}
function Dk(r, e) {
  const t = e.get(r);
  if (t)
    return t;
  let n = Yi(r, [], !1).filter((l) => An(l) && Vn(l) !== "body"), o = null;
  const a = Or(r).position === "fixed";
  let s = a ? ii(r) : r;
  for (; An(s) && !ec(s); ) {
    const l = Or(s), u = Zu(s);
    !u && l.position === "fixed" && (o = null), (a ? !u && !o : !u && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || la(s) && !u && jm(r, s)) ? n = n.filter((h) => h !== s) : o = l, s = ii(s);
  }
  return e.set(r, n), n;
}
function Uk(r) {
  let {
    element: e,
    boundary: t,
    rootBoundary: n,
    strategy: o
  } = r;
  const s = [...t === "clippingAncestors" ? Dk(e, this._c) : [].concat(t), n], l = s[0], u = s.reduce((f, h) => {
    const p = sg(e, h, o);
    return f.top = Ut(p.top, f.top), f.right = Wr(p.right, f.right), f.bottom = Wr(p.bottom, f.bottom), f.left = Ut(p.left, f.left), f;
  }, sg(e, l, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Fk(r) {
  return zm(r);
}
function Hk(r, e, t) {
  const n = cn(e), o = Pn(e), a = t === "fixed", s = _o(r, !0, a, e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = zn(0);
  if (n || !n && !a)
    if ((Vn(e) !== "body" || la(o)) && (l = tc(e)), n) {
      const f = _o(e, !0, a, e);
      u.x = f.x + e.clientLeft, u.y = f.y + e.clientTop;
    } else
      o && (u.x = Wm(o));
  return {
    x: s.left + l.scrollLeft - u.x,
    y: s.top + l.scrollTop - u.y,
    width: s.width,
    height: s.height
  };
}
function cg(r, e) {
  return !cn(r) || Or(r).position === "fixed" ? null : e ? e(r) : r.offsetParent;
}
function Ym(r, e) {
  const t = vr(r);
  if (!cn(r))
    return t;
  let n = cg(r, e);
  for (; n && Ak(n) && Or(n).position === "static"; )
    n = cg(n, e);
  return n && (Vn(n) === "html" || Vn(n) === "body" && Or(n).position === "static" && !Zu(n)) ? t : n || Rk(r) || t;
}
const Bk = async function(r) {
  let {
    reference: e,
    floating: t,
    strategy: n
  } = r;
  const o = this.getOffsetParent || Ym, a = this.getDimensions;
  return {
    reference: Hk(e, await o(t), n),
    floating: {
      x: 0,
      y: 0,
      ...await a(t)
    }
  };
};
function Kk(r) {
  return Or(r).direction === "rtl";
}
const qk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Nk,
  getDocumentElement: Pn,
  getClippingRect: Uk,
  getOffsetParent: Ym,
  getElementRects: Bk,
  getClientRects: Ok,
  getDimensions: Fk,
  getScale: ei,
  isElement: An,
  isRTL: Kk
};
function $k(r, e) {
  let t = null, n;
  const o = Pn(r);
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
    const v = ss(h), C = ss(o.clientWidth - (f + p)), E = ss(o.clientHeight - (h + m)), _ = ss(f), R = {
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
        ...R,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(I, R);
    }
    t.observe(r);
  }
  return s(!0), a;
}
function Gk(r, e, t, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, f = td(r), h = o || a ? [...f ? Yi(f) : [], ...Yi(e)] : [];
  h.forEach((A) => {
    o && A.addEventListener("scroll", t, {
      passive: !0
    }), a && A.addEventListener("resize", t);
  });
  const p = f && l ? $k(f, t) : null;
  let m = -1, v = null;
  s && (v = new ResizeObserver((A) => {
    let [R] = A;
    R && R.target === f && v && (v.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      v && v.observe(e);
    })), t();
  }), f && !u && v.observe(f), v.observe(e));
  let C, E = u ? _o(r) : null;
  u && _();
  function _() {
    const A = _o(r);
    E && (A.x !== E.x || A.y !== E.y || A.width !== E.width || A.height !== E.height) && t(), E = A, C = requestAnimationFrame(_);
  }
  return t(), () => {
    h.forEach((A) => {
      o && A.removeEventListener("scroll", t), a && A.removeEventListener("resize", t);
    }), p && p(), v && v.disconnect(), v = null, u && cancelAnimationFrame(C);
  };
}
const zk = (r, e, t) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: qk,
    ...t
  }, a = {
    ...o.platform,
    _c: n
  };
  return yk(r, e, {
    ...o,
    platform: a
  });
}, Vk = (r) => {
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
      return n && e(n) ? n.current != null ? ig({
        element: n.current,
        padding: o
      }).fn(t) : {} : n ? ig({
        element: n,
        padding: o
      }).fn(t) : {};
    }
  };
};
var hs = typeof document < "u" ? Ru : ve;
function Ls(r, e) {
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
        if (!Ls(r[n], e[n]))
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
      if (!(a === "_owner" && r.$$typeof) && !Ls(r[a], e[a]))
        return !1;
    }
    return !0;
  }
  return r !== r && e !== e;
}
function Qm(r) {
  return typeof window > "u" ? 1 : (r.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function lg(r, e) {
  const t = Qm(r);
  return Math.round(e * t) / t;
}
function ug(r) {
  const e = De.useRef(r);
  return hs(() => {
    e.current = r;
  }), e;
}
function Wk(r) {
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
  } = r, [h, p] = De.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [m, v] = De.useState(n);
  Ls(m, n) || v(n);
  const [C, E] = De.useState(null), [_, A] = De.useState(null), R = De.useCallback((J) => {
    J != L.current && (L.current = J, E(J));
  }, [E]), S = De.useCallback((J) => {
    J !== H.current && (H.current = J, A(J));
  }, [A]), I = a || C, O = s || _, L = De.useRef(null), H = De.useRef(null), U = De.useRef(h), Q = ug(u), Z = ug(o), ae = De.useCallback(() => {
    if (!L.current || !H.current)
      return;
    const J = {
      placement: e,
      strategy: t,
      middleware: m
    };
    Z.current && (J.platform = Z.current), zk(L.current, H.current, J).then((ie) => {
      const ne = {
        ...ie,
        isPositioned: !0
      };
      Y.current && !Ls(U.current, ne) && (U.current = ne, QT.flushSync(() => {
        p(ne);
      }));
    });
  }, [m, e, t, Z]);
  hs(() => {
    f === !1 && U.current.isPositioned && (U.current.isPositioned = !1, p((J) => ({
      ...J,
      isPositioned: !1
    })));
  }, [f]);
  const Y = De.useRef(!1);
  hs(() => (Y.current = !0, () => {
    Y.current = !1;
  }), []), hs(() => {
    if (I && (L.current = I), O && (H.current = O), I && O) {
      if (Q.current)
        return Q.current(I, O, ae);
      ae();
    }
  }, [I, O, ae, Q]);
  const ue = De.useMemo(() => ({
    reference: L,
    floating: H,
    setReference: R,
    setFloating: S
  }), [R, S]), ee = De.useMemo(() => ({
    reference: I,
    floating: O
  }), [I, O]), he = De.useMemo(() => {
    const J = {
      position: t,
      left: 0,
      top: 0
    };
    if (!ee.floating)
      return J;
    const ie = lg(ee.floating, h.x), ne = lg(ee.floating, h.y);
    return l ? {
      ...J,
      transform: "translate(" + ie + "px, " + ne + "px)",
      ...Qm(ee.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: ie,
      top: ne
    };
  }, [t, l, ee.floating, h.x, h.y]);
  return De.useMemo(() => ({
    ...h,
    update: ae,
    refs: ue,
    elements: ee,
    floatingStyles: he
  }), [h, ae, ue, ee, he]);
}
var Jm = typeof document < "u" ? Ru : ve;
let zl = !1, jk = 0;
const dg = () => "floating-ui-" + jk++;
function Yk() {
  const [r, e] = De.useState(() => zl ? dg() : void 0);
  return Jm(() => {
    r == null && e(dg());
  }, []), De.useEffect(() => {
    zl || (zl = !0);
  }, []), r;
}
const Qk = De[/* @__PURE__ */ "useId".toString()], Jk = Qk || Yk;
function Xk() {
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
const Zk = /* @__PURE__ */ De.createContext(null), eP = () => De.useContext(Zk);
function tP(r) {
  return (r == null ? void 0 : r.ownerDocument) || document;
}
function rP(r) {
  return tP(r).defaultView || window;
}
function cs(r) {
  return r ? r instanceof Element || r instanceof rP(r).Element : !1;
}
const nP = De[/* @__PURE__ */ "useInsertionEffect".toString()], oP = nP || ((r) => r());
function iP(r) {
  const e = De.useRef(() => {
  });
  return oP(() => {
    e.current = r;
  }), De.useCallback(function() {
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return e.current == null ? void 0 : e.current(...n);
  }, []);
}
function aP(r) {
  var e;
  r === void 0 && (r = {});
  const {
    open: t = !1,
    onOpenChange: n,
    nodeId: o
  } = r, [a, s] = De.useState(null), l = ((e = r.elements) == null ? void 0 : e.reference) || a, u = Wk(r), f = eP(), h = iP((I, O) => {
    I && (m.current.openEvent = O), n == null || n(I, O);
  }), p = De.useRef(null), m = De.useRef({}), v = De.useState(() => Xk())[0], C = Jk(), E = De.useCallback((I) => {
    const O = cs(I) ? {
      getBoundingClientRect: () => I.getBoundingClientRect(),
      contextElement: I
    } : I;
    u.refs.setReference(O);
  }, [u.refs]), _ = De.useCallback((I) => {
    (cs(I) || I === null) && (p.current = I, s(I)), (cs(u.refs.reference.current) || u.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    I !== null && !cs(I)) && u.refs.setReference(I);
  }, [u.refs]), A = De.useMemo(() => ({
    ...u.refs,
    setReference: _,
    setPositionReference: E,
    domReference: p
  }), [u.refs, _, E]), R = De.useMemo(() => ({
    ...u.elements,
    domReference: l
  }), [u.elements, l]), S = De.useMemo(() => ({
    ...u,
    refs: A,
    elements: R,
    dataRef: m,
    nodeId: o,
    floatingId: C,
    events: v,
    open: t,
    onOpenChange: h
  }), [u, o, C, v, t, h, A, R]);
  return Jm(() => {
    const I = f == null ? void 0 : f.nodesRef.current.find((O) => O.id === o);
    I && (I.context = S);
  }), De.useMemo(() => ({
    ...u,
    context: S,
    refs: A,
    elements: R
  }), [u, A, R, S]);
}
function sP(r, e) {
  if (r === "rtl" && (e.includes("right") || e.includes("left"))) {
    const [t, n] = e.split("-"), o = t === "right" ? "left" : "right";
    return n === void 0 ? o : `${o}-${n}`;
  }
  return e;
}
function fg(r, e, t, n) {
  return r === "center" || n === "center" ? { top: e } : r === "end" ? { bottom: t } : r === "start" ? { top: t } : {};
}
function hg(r, e, t, n, o) {
  return r === "center" || n === "center" ? { left: e } : r === "end" ? { [o === "ltr" ? "right" : "left"]: t } : r === "start" ? { [o === "ltr" ? "left" : "right"]: t } : {};
}
const cP = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function lP({
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
    [cP[u]]: $(n)
  }, p = $(-e / 2);
  return u === "left" ? {
    ...h,
    ...fg(f, s, t, o),
    right: p,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  } : u === "right" ? {
    ...h,
    ...fg(f, s, t, o),
    left: p,
    borderRightColor: "transparent",
    borderTopColor: "transparent"
  } : u === "top" ? {
    ...h,
    ...hg(f, a, t, o, l),
    bottom: p,
    borderTopColor: "transparent",
    borderLeftColor: "transparent"
  } : u === "bottom" ? {
    ...h,
    ...hg(f, a, t, o, l),
    top: p,
    borderBottomColor: "transparent",
    borderRightColor: "transparent"
  } : {};
}
const Xm = ut(
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
    const { dir: p } = Gu();
    return a ? /* @__PURE__ */ k.createElement(
      "div",
      {
        ...f,
        ref: h,
        style: {
          ...u,
          ...lP({
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
Xm.displayName = "@mantine/core/FloatingArrow";
const [uP, Zm] = ci(
  "Popover component was not found in the tree"
);
function ev({
  children: r,
  active: e = !0,
  refProp: t = "ref"
}) {
  const n = zA(e), o = Mr(n, r == null ? void 0 : r.ref);
  return oa(r) ? Gs(r, { [t]: o }) : r;
}
ev.displayName = "@mantine/core/FocusTrap";
function dP(r) {
  const e = document.createElement("div");
  return e.setAttribute("data-portal", "true"), typeof r.className == "string" && e.classList.add(...r.className.split(" ").filter(Boolean)), typeof r.style == "object" && Object.assign(e.style, r.style), typeof r.id == "string" && e.setAttribute("id", r.id), e;
}
const fP = {}, tv = ut((r, e) => {
  const { children: t, target: n, ...o } = ge("Portal", fP, r), [a, s] = Ee(!1), l = Ke(null);
  return ia(() => (s(!0), l.current = n ? typeof n == "string" ? document.querySelector(n) : n : dP(o), mm(e, l.current), !n && l.current && document.body.appendChild(l.current), () => {
    !n && l.current && document.body.removeChild(l.current);
  }), [n]), !a || !l.current ? null : ZT(/* @__PURE__ */ k.createElement(k.Fragment, null, t), l.current);
});
tv.displayName = "@mantine/core/Portal";
function rv({ withinPortal: r = !0, children: e, ...t }) {
  return r ? /* @__PURE__ */ k.createElement(tv, { ...t }, e) : /* @__PURE__ */ k.createElement(k.Fragment, null, e);
}
rv.displayName = "@mantine/core/OptionalPortal";
const Mi = (r) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${$(r === "bottom" ? 10 : -10)})` },
  transitionProperty: "transform, opacity"
}), ls = {
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
    ...Mi("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...Mi("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...Mi("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...Mi("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...Mi("top"),
    common: { transformOrigin: "top right" }
  }
}, pg = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function hP({
  transition: r,
  state: e,
  duration: t,
  timingFunction: n
}) {
  const o = {
    transitionDuration: `${t}ms`,
    transitionTimingFunction: n
  };
  return typeof r == "string" ? r in ls ? {
    transitionProperty: ls[r].transitionProperty,
    ...o,
    ...ls[r].common,
    ...ls[r][pg[e]]
  } : {} : {
    transitionProperty: r.transitionProperty,
    ...o,
    ...r.common,
    ...r[pg[e]]
  };
}
function pP({
  duration: r,
  exitDuration: e,
  timingFunction: t,
  mounted: n,
  onEnter: o,
  onExit: a,
  onEntered: s,
  onExited: l
}) {
  const u = Qn(), f = ym(), h = u.respectReducedMotion ? f : !1, [p, m] = Ee(h ? 0 : r), [v, C] = Ee(n ? "entered" : "exited"), E = Ke(-1), _ = (A) => {
    const R = A ? o : a, S = A ? s : l;
    C(A ? "pre-entering" : "pre-exiting"), window.clearTimeout(E.current);
    const I = h ? 0 : A ? r : e;
    if (m(I), I === 0)
      typeof R == "function" && R(), typeof S == "function" && S(), C(A ? "entered" : "exited");
    else {
      const O = window.setTimeout(() => {
        typeof R == "function" && R(), C(A ? "entering" : "exiting");
      }, 10);
      E.current = window.setTimeout(() => {
        window.clearTimeout(O), typeof S == "function" && S(), C(A ? "entered" : "exited");
      }, I);
    }
  };
  return Eo(() => {
    _(n);
  }, [n]), ve(() => () => window.clearTimeout(E.current), []), {
    transitionDuration: p,
    transitionStatus: v,
    transitionTimingFunction: t || "ease"
  };
}
function nv({
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
  const { transitionDuration: p, transitionStatus: m, transitionTimingFunction: v } = pP({
    mounted: o,
    exitDuration: n,
    duration: t,
    timingFunction: s,
    onExit: l,
    onEntered: u,
    onEnter: f,
    onExited: h
  });
  return p === 0 ? o ? /* @__PURE__ */ k.createElement(k.Fragment, null, a({})) : r ? a({ display: "none" }) : null : m === "exited" ? r ? a({ display: "none" }) : null : /* @__PURE__ */ k.createElement(k.Fragment, null, a(
    hP({
      transition: e,
      duration: p,
      state: m,
      timingFunction: v
    })
  ));
}
nv.displayName = "@mantine/core/Transition";
var ov = { dropdown: "m-38a85659", arrow: "m-a31dc6c1" };
const gP = {}, rd = xe((r, e) => {
  var _, A, R, S;
  const t = ge("PopoverDropdown", gP, r), {
    className: n,
    style: o,
    vars: a,
    children: s,
    onKeyDownCapture: l,
    variant: u,
    classNames: f,
    styles: h,
    ...p
  } = t, m = Zm(), v = FA({
    opened: m.opened,
    shouldReturnFocus: m.returnFocus
  }), C = m.withRoles ? {
    "aria-labelledby": m.getTargetId(),
    id: m.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, E = Mr(e, m.floating);
  return m.disabled ? null : /* @__PURE__ */ k.createElement(rv, { ...m.portalProps, withinPortal: m.withinPortal }, /* @__PURE__ */ k.createElement(
    nv,
    {
      mounted: m.opened,
      ...m.transitionProps,
      transition: ((_ = m.transitionProps) == null ? void 0 : _.transition) || "fade",
      duration: ((A = m.transitionProps) == null ? void 0 : A.duration) ?? 150,
      keepMounted: m.keepMounted,
      exitDuration: typeof ((R = m.transitionProps) == null ? void 0 : R.exitDuration) == "number" ? m.transitionProps.exitDuration : (S = m.transitionProps) == null ? void 0 : S.duration
    },
    (I) => /* @__PURE__ */ k.createElement(ev, { active: m.trapFocus }, /* @__PURE__ */ k.createElement(
      Ie,
      {
        ...C,
        ...p,
        variant: u,
        ref: E,
        onKeyDownCapture: kA(m.onClose, {
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
      /* @__PURE__ */ k.createElement(
        Xm,
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
rd.classes = ov;
rd.displayName = "@mantine/core/PopoverDropdown";
const mP = {
  refProp: "ref",
  popupType: "dialog"
}, iv = xe((r, e) => {
  const { children: t, refProp: n, popupType: o, ...a } = ge(
    "PopoverTarget",
    mP,
    r
  );
  if (!oa(t))
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const s = a, l = Zm(), u = Mr(l.reference, t.ref, e), f = l.withRoles ? {
    "aria-haspopup": o,
    "aria-expanded": l.opened,
    "aria-controls": l.getDropdownId(),
    id: l.getTargetId()
  } : {};
  return Gs(t, {
    ...s,
    ...f,
    ...l.targetProps,
    className: kn(l.targetProps.className, s.className, t.props.className),
    [n]: u,
    ...l.controlled ? null : { onClick: l.onToggle }
  });
});
iv.displayName = "@mantine/core/PopoverTarget";
function vP({
  opened: r,
  floating: e,
  position: t,
  positionDependencies: n
}) {
  const [o, a] = Ee(0);
  ve(() => {
    if (e.refs.reference.current && e.refs.floating.current)
      return Gk(
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
function yP(r, e) {
  var n, o, a, s;
  const t = [_k(r.offset)];
  return (n = r.middlewares) != null && n.shift && t.push(Sk({ limiter: Tk() })), (o = r.middlewares) != null && o.flip && t.push(Ck()), (a = r.middlewares) != null && a.inline && t.push(Ek()), t.push(Vk({ element: r.arrowRef, padding: r.arrowOffset })), ((s = r.middlewares) != null && s.size || r.width === "target") && t.push(
    Ik({
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
function CP(r) {
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
  }, a = aP({
    placement: r.position,
    middleware: yP(r, () => a)
  });
  return vP({
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
const wP = {
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
  zIndex: AA("popover"),
  __staticSelector: "Popover",
  width: "max-content"
}, EP = (r, { radius: e, shadow: t }) => ({
  dropdown: {
    "--popover-radius": e === void 0 ? void 0 : Io(e),
    "--popover-shadow": PA(t)
  }
});
function Jn(r) {
  var Nn, gt, Ot, Zn, Fr, bt;
  const e = ge("Popover", wP, r), {
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
    classNames: A,
    styles: R,
    closeOnClickOutside: S,
    withinPortal: I,
    portalProps: O,
    closeOnEscape: L,
    clickOutsideEvents: H,
    trapFocus: U,
    onClose: Q,
    onOpen: Z,
    onChange: ae,
    zIndex: Y,
    radius: ue,
    shadow: ee,
    id: he,
    defaultOpened: J,
    __staticSelector: ie,
    withRoles: ne,
    disabled: Pe,
    returnFocus: Qe,
    variant: ot,
    keepMounted: dt,
    vars: Yr,
    ...ln
  } = e, Yt = at({
    name: ie,
    props: e,
    classes: ov,
    classNames: A,
    styles: R,
    unstyled: _,
    rootSelector: "dropdown",
    vars: Yr,
    varsResolver: EP
  }), ar = Ke(null), [un, sr] = Ee(null), [Ur, dn] = Ee(null), { dir: qt } = Gu(), wr = Yn(he), Ye = CP({
    middlewares: h,
    width: f,
    position: sP(qt, n),
    offset: typeof o == "number" ? o + (p ? m / 2 : 0) : o,
    arrowRef: ar,
    arrowOffset: v,
    onPositionChange: a,
    positionDependencies: s,
    opened: l,
    defaultOpened: J,
    onChange: ae,
    onOpen: Z,
    onClose: Q
  });
  MA(() => S && Ye.onClose(), H, [
    un,
    Ur
  ]);
  const Pt = ze(
    (tt) => {
      sr(tt), Ye.floating.refs.setReference(tt);
    },
    [Ye.floating.refs.setReference]
  ), Nt = ze(
    (tt) => {
      dn(tt), Ye.floating.refs.setFloating(tt);
    },
    [Ye.floating.refs.setFloating]
  );
  return /* @__PURE__ */ k.createElement(
    uP,
    {
      value: {
        returnFocus: Qe,
        disabled: Pe,
        controlled: Ye.controlled,
        reference: Pt,
        floating: Nt,
        x: Ye.floating.x,
        y: Ye.floating.y,
        arrowX: (Ot = (gt = (Nn = Ye.floating) == null ? void 0 : Nn.middlewareData) == null ? void 0 : gt.arrow) == null ? void 0 : Ot.x,
        arrowY: (bt = (Fr = (Zn = Ye.floating) == null ? void 0 : Zn.middlewareData) == null ? void 0 : Fr.arrow) == null ? void 0 : bt.y,
        opened: Ye.opened,
        arrowRef: ar,
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
        zIndex: Y,
        radius: ue,
        shadow: ee,
        closeOnEscape: L,
        onClose: Ye.onClose,
        onToggle: Ye.onToggle,
        getTargetId: () => `${wr}-target`,
        getDropdownId: () => `${wr}-dropdown`,
        withRoles: ne,
        targetProps: ln,
        __staticSelector: ie,
        classNames: A,
        styles: R,
        unstyled: _,
        variant: ot,
        keepMounted: dt,
        getStyles: Yt
      }
    },
    t
  );
}
Jn.Target = iv;
Jn.Dropdown = rd;
Jn.displayName = "@mantine/core/Popover";
Jn.extend = (r) => r;
var Vr = { root: "m-5ae2e3c", barsLoader: "m-7a2bd4cd", bar: "m-870bb79", "bars-loader-animation": "m-5d2b3b9d", dotsLoader: "m-4e3f22d7", dot: "m-870c4af", "loader-dots-animation": "m-aac34a1", ovalLoader: "m-b34414df", "oval-loader-animation": "m-f8e89c4b" };
const bP = ut(({ className: r, ...e }, t) => /* @__PURE__ */ k.createElement(Ie, { component: "span", className: kn(Vr.barsLoader, r), ...e, ref: t }, /* @__PURE__ */ k.createElement("span", { className: Vr.bar }), /* @__PURE__ */ k.createElement("span", { className: Vr.bar }), /* @__PURE__ */ k.createElement("span", { className: Vr.bar }))), _P = ut(({ className: r, ...e }, t) => /* @__PURE__ */ k.createElement(Ie, { component: "span", className: kn(Vr.dotsLoader, r), ...e, ref: t }, /* @__PURE__ */ k.createElement("span", { className: Vr.dot }), /* @__PURE__ */ k.createElement("span", { className: Vr.dot }), /* @__PURE__ */ k.createElement("span", { className: Vr.dot }))), SP = ut(({ className: r, ...e }, t) => /* @__PURE__ */ k.createElement(Ie, { component: "span", className: kn(Vr.ovalLoader, r), ...e, ref: t })), av = {
  bars: bP,
  oval: SP,
  dots: _P
}, TP = {
  loaders: av,
  type: "oval"
}, IP = (r, { size: e, color: t }) => ({
  root: {
    "--loader-size": Bt(e, "loader-size"),
    "--loader-color": t ? ji(t, r) : void 0
  }
}), rc = xe((r, e) => {
  const t = ge("Loader", TP, r), {
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
  } = t, _ = at({
    name: "Loader",
    props: t,
    classes: Vr,
    className: l,
    style: u,
    classNames: f,
    styles: h,
    unstyled: p,
    vars: s,
    varsResolver: IP
  });
  return C ? /* @__PURE__ */ k.createElement(Ie, { ..._("root"), ref: e, ...E }, C) : /* @__PURE__ */ k.createElement(
    Ie,
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
rc.defaultLoaders = av;
rc.classes = Vr;
rc.displayName = "@mantine/core/Loader";
const sv = ut(
  ({ size: r = "var(--cb-icon-size, 70%)", style: e, ...t }, n) => /* @__PURE__ */ k.createElement(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...e, width: r, height: r },
      ref: n,
      ...t
    },
    /* @__PURE__ */ k.createElement(
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
sv.displayName = "@mantine/core/CloseIcon";
var cv = { root: "m-86a44da5", "root--subtle": "m-220c80f2" };
const AP = {
  variant: "subtle"
}, RP = (r, { size: e, radius: t, iconSize: n }) => ({
  root: {
    "--cb-size": Bt(e, "cb-size"),
    "--cb-radius": t === void 0 ? void 0 : Io(t),
    "--cb-icon-size": $(n)
  }
}), nc = aa((r, e) => {
  const t = ge("CloseButton", AP, r), {
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
  } = t, _ = at({
    name: "CloseButton",
    props: t,
    className: l,
    style: f,
    classes: cv,
    classNames: u,
    styles: h,
    unstyled: p,
    vars: a,
    varsResolver: RP
  });
  return /* @__PURE__ */ k.createElement(
    ca,
    {
      ref: e,
      ...E,
      unstyled: p,
      variant: C,
      disabled: v,
      mod: { disabled: v || m },
      ..._("root", { variant: C, active: !0 })
    },
    /* @__PURE__ */ k.createElement(sv, null),
    o
  );
});
nc.classes = cv;
nc.displayName = "@mantine/core/CloseButton";
function kP(r) {
  return Jl.toArray(r).filter(Boolean);
}
var lv = { root: "m-4081bf90" };
const PP = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, NP = (r, { grow: e, preventGrowOverflow: t, gap: n, align: o, justify: a, wrap: s }, { childWidth: l }) => ({
  root: {
    "--group-child-width": e && t ? l : void 0,
    "--group-gap": Hu(n),
    "--group-align": o,
    "--group-justify": a,
    "--group-wrap": s
  }
}), Ds = xe((r, e) => {
  const t = ge("Group", PP, r), {
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
    __size: A,
    ...R
  } = t, S = kP(u), I = S.length, O = Hu(f ?? "md"), H = { childWidth: `calc(${100 / I}% - (${O} - ${O} / ${I}))` }, U = at({
    name: "Group",
    props: t,
    stylesCtx: H,
    className: o,
    style: a,
    classes: lv,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: E,
    varsResolver: NP
  });
  return /* @__PURE__ */ k.createElement(
    Ie,
    {
      ...U("root"),
      ref: e,
      variant: _,
      mod: { grow: v },
      size: A,
      ...R
    },
    S
  );
});
Ds.classes = lv;
Ds.displayName = "@mantine/core/Group";
const [OP, ua] = EA({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var Lr = { wrapper: "m-6c018570", input: "m-8fb7ebe7", section: "m-82577fc2", placeholder: "m-88bacfd0", root: "m-46b77525", label: "m-8fdc1311", required: "m-78a94662", error: "m-8f816625", description: "m-fe47ce59" };
const gg = {}, MP = (r, { size: e }) => ({
  description: {
    "--input-description-size": e === void 0 ? void 0 : `calc(${Nr(e)} - ${$(2)})`
  }
}), oc = xe((r, e) => {
  const t = ge("InputDescription", gg, r), {
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
  } = ge("InputDescription", gg, t), C = ua(), E = at({
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
    varsResolver: MP
  }), _ = p && (C == null ? void 0 : C.getStyles) || E;
  return /* @__PURE__ */ k.createElement(
    Ie,
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
oc.classes = Lr;
oc.displayName = "@mantine/core/InputDescription";
const xP = {}, LP = (r, { size: e }) => ({
  error: {
    "--input-error-size": e === void 0 ? void 0 : `calc(${Nr(e)} - ${$(2)})`
  }
}), ic = xe((r, e) => {
  const t = ge("InputError", xP, r), {
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
  } = t, C = at({
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
    varsResolver: LP
  }), E = ua(), _ = p && (E == null ? void 0 : E.getStyles) || C;
  return /* @__PURE__ */ k.createElement(
    Ie,
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
ic.classes = Lr;
ic.displayName = "@mantine/core/InputError";
const mg = {
  labelElement: "label"
}, DP = (r, { size: e }) => ({
  label: {
    "--input-label-size": Nr(e),
    "--input-asterisk-color": void 0
  }
}), ac = xe((r, e) => {
  const t = ge("InputLabel", mg, r), {
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
    ...A
  } = ge("InputLabel", mg, t), R = at({
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
    varsResolver: DP
  }), S = ua(), I = (S == null ? void 0 : S.getStyles) || R;
  return /* @__PURE__ */ k.createElement(
    Ie,
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
      ...A
    },
    C,
    p && /* @__PURE__ */ k.createElement("span", { ...I("required"), "aria-hidden": !0 }, " *")
  );
});
ac.classes = Lr;
ac.displayName = "@mantine/core/InputLabel";
const vg = {}, nd = xe((r, e) => {
  const t = ge("InputPlaceholder", vg, r), {
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
  } = ge("InputPlaceholder", vg, t), v = at({
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
  return /* @__PURE__ */ k.createElement(
    Ie,
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
nd.classes = Lr;
nd.displayName = "@mantine/core/InputPlaceholder";
function UP(r, { hasDescription: e, hasError: t }) {
  const n = r.findIndex((u) => u === "input"), o = r[n - 1], a = r[n + 1];
  return { offsetBottom: e && a === "description" || t && a === "error", offsetTop: e && o === "description" || t && o === "error" };
}
const FP = {
  labelElement: "label",
  inputContainer: (r) => r,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, HP = (r, { size: e }) => ({
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
}), od = xe((r, e) => {
  const t = ge("InputWrapper", FP, r), {
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
    labelProps: A,
    descriptionProps: R,
    errorProps: S,
    labelElement: I,
    children: O,
    withAsterisk: L,
    id: H,
    required: U,
    __stylesApiProps: Q,
    ...Z
  } = t, ae = at({
    name: ["InputWrapper", p],
    props: Q || t,
    classes: Lr,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: u,
    varsResolver: HP
  }), Y = {
    size: f,
    variant: h,
    __staticSelector: p
  }, ue = Yn(H), ee = typeof L == "boolean" ? L : U, he = (S == null ? void 0 : S.id) || `${ue}-error`, J = (R == null ? void 0 : R.id) || `${ue}-description`, ie = ue, ne = !!E && typeof E != "boolean", Pe = !!_, Qe = `${ne ? he : ""} ${Pe ? J : ""}`, ot = Qe.trim().length > 0 ? Qe.trim() : void 0, dt = (A == null ? void 0 : A.id) || `${ue}-label`, Yr = C && /* @__PURE__ */ k.createElement(
    ac,
    {
      key: "label",
      labelElement: I,
      id: dt,
      htmlFor: ie,
      required: ee,
      ...Y,
      ...A
    },
    C
  ), ln = Pe && /* @__PURE__ */ k.createElement(
    oc,
    {
      key: "description",
      ...R,
      ...Y,
      size: (R == null ? void 0 : R.size) || Y.size,
      id: (R == null ? void 0 : R.id) || J
    },
    _
  ), Yt = /* @__PURE__ */ k.createElement(k.Fragment, { key: "input" }, m(O)), ar = ne && /* @__PURE__ */ k.createElement(
    ic,
    {
      ...S,
      ...Y,
      size: (S == null ? void 0 : S.size) || Y.size,
      key: "error",
      id: (S == null ? void 0 : S.id) || he
    },
    E
  ), un = v.map((sr) => {
    switch (sr) {
      case "label":
        return Yr;
      case "input":
        return Yt;
      case "description":
        return ln;
      case "error":
        return ar;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ k.createElement(
    OP,
    {
      value: {
        getStyles: ae,
        describedBy: ot,
        inputId: ie,
        labelId: dt,
        ...UP(v, { hasDescription: Pe, hasError: ne })
      }
    },
    /* @__PURE__ */ k.createElement(
      Ie,
      {
        ref: e,
        variant: h,
        size: f,
        mod: { error: !!E },
        ...ae("root"),
        ...Z
      },
      un
    )
  );
});
od.classes = Lr;
od.displayName = "@mantine/core/InputWrapper";
const BP = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: !0,
  withErrorStyles: !0
}, KP = (r, e, t) => ({
  wrapper: {
    "--input-margin-top": t.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": t.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": Bt(e.size, "input-height"),
    "--input-fz": Nr(e.size),
    "--input-radius": e.radius === void 0 ? void 0 : Io(e.radius),
    "--input-left-section-width": e.leftSectionWidth !== void 0 ? $(e.leftSectionWidth) : void 0,
    "--input-right-section-width": e.rightSectionWidth !== void 0 ? $(e.rightSectionWidth) : void 0,
    "--input-padding-y": e.multiline ? Bt(e.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": e.leftSectionPointerEvents,
    "--input-right-section-pointer-events": e.rightSectionPointerEvents
  }
}), Kt = aa((r, e) => {
  const t = ge("Input", BP, r), {
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
    leftSectionWidth: A,
    rightSection: R,
    rightSectionProps: S,
    rightSectionWidth: I,
    rightSectionPointerEvents: O,
    leftSectionPointerEvents: L,
    variant: H,
    vars: U,
    pointer: Q,
    multiline: Z,
    radius: ae,
    id: Y,
    withAria: ue,
    withErrorStyles: ee,
    ...he
  } = t, { styleProps: J, rest: ie } = Xs(he), ne = ua(), Pe = { offsetBottom: ne == null ? void 0 : ne.offsetBottom, offsetTop: ne == null ? void 0 : ne.offsetTop }, Qe = at({
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
    varsResolver: KP
  }), ot = ue ? {
    required: u,
    disabled: C,
    "aria-invalid": !!v,
    "aria-describedby": ne == null ? void 0 : ne.describedBy,
    id: (ne == null ? void 0 : ne.inputId) || Y
  } : {};
  return /* @__PURE__ */ k.createElement(
    Ie,
    {
      ...Qe("wrapper"),
      ...J,
      ...m,
      mod: {
        error: !!v && ee,
        pointer: Q,
        disabled: C,
        multiline: Z,
        "data-with-right-section": !!R,
        "data-with-left-section": !!E
      },
      variant: H,
      size: p
    },
    E && /* @__PURE__ */ k.createElement(
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
    /* @__PURE__ */ k.createElement(
      Ie,
      {
        component: "input",
        ...ie,
        ...ot,
        ref: e,
        required: u,
        mod: { disabled: C, error: !!v && ee },
        variant: H,
        ...Qe("input")
      }
    ),
    R && /* @__PURE__ */ k.createElement(
      "div",
      {
        ...S,
        "data-position": "right",
        ...Qe("section", {
          className: S == null ? void 0 : S.className,
          style: S == null ? void 0 : S.style
        })
      },
      R
    )
  );
});
Kt.classes = Lr;
Kt.Wrapper = od;
Kt.Label = ac;
Kt.Error = ic;
Kt.Description = oc;
Kt.Placeholder = nd;
Kt.displayName = "@mantine/core/Input";
function qP(r, e, t) {
  const n = ge(r, e, t), {
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
    wrapperProps: A,
    id: R,
    size: S,
    style: I,
    inputContainer: O,
    inputWrapperOrder: L,
    withAsterisk: H,
    variant: U,
    vars: Q,
    ...Z
  } = n, { styleProps: ae, rest: Y } = Xs(Z), ue = {
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
    withAsterisk: H,
    variant: U,
    id: R,
    ...A
  };
  return {
    ...Y,
    classNames: u,
    styles: f,
    unstyled: p,
    wrapperProps: { ...ue, ...ae },
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
      id: R
    }
  };
}
const $P = {
  __staticSelector: "InputBase",
  withAria: !0
}, Xn = aa((r, e) => {
  const { inputProps: t, wrapperProps: n, ...o } = qP("InputBase", $P, r);
  return /* @__PURE__ */ k.createElement(Kt.Wrapper, { ...n }, /* @__PURE__ */ k.createElement(Kt, { ...t, ...o, ref: e }));
});
Xn.classes = { ...Kt.classes, ...Kt.Wrapper.classes };
Xn.displayName = "@mantine/core/InputBase";
const [GP, id] = ci(
  "Accordion component was not found in the tree"
);
function ad({ style: r, size: e = 16, ...t }) {
  return /* @__PURE__ */ k.createElement(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...r, width: $(e), height: $(e), display: "block" },
      ...t
    },
    /* @__PURE__ */ k.createElement(
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
ad.displayName = "@mantine/core/AccordionChevron";
const [zP, uv] = ci("Accordion.Item component was not found in the tree");
var da = { root: "m-9bdbb667", panel: "m-df78851f", content: "m-4ba554d4", itemTitle: "m-8fa820a0", control: "m-4ba585b8", "control--default": "m-6939a5e9", "control--contained": "m-4271d21b", label: "m-df3ffa0f", chevron: "m-3f35ae96", icon: "m-9bd771fe", item: "m-9bd7b098", "item--default": "m-fe19b709", "item--contained": "m-1f921b3b", "item--filled": "m-2cdf939a", "item--separated": "m-9f59b069" };
const VP = {}, sd = xe((r, e) => {
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
  } = ge("AccordionControl", VP, r), { value: C } = uv(), E = id(), _ = E.isItemActive(C), A = typeof E.order == "number", R = `h${E.order}`, S = /* @__PURE__ */ k.createElement(
    ca,
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
      onKeyDown: TA({
        siblingSelector: "[data-accordion-control]",
        parentSelector: "[data-accordion]",
        activateOnFocus: !1,
        loop: E.loop,
        orientation: "vertical",
        onKeyDown: h
      })
    },
    /* @__PURE__ */ k.createElement(
      Ie,
      {
        component: "span",
        mod: { rotate: !E.disableChevronRotation && _, position: E.chevronPosition },
        ...E.getStyles("chevron", { classNames: t, styles: a })
      },
      l || E.chevron
    ),
    /* @__PURE__ */ k.createElement("span", { ...E.getStyles("label", { classNames: t, styles: a }) }, p),
    u && /* @__PURE__ */ k.createElement(
      Ie,
      {
        component: "span",
        mod: { "chevron-position": E.chevronPosition },
        ...E.getStyles("icon", { classNames: t, styles: a })
      },
      u
    )
  );
  return A ? /* @__PURE__ */ k.createElement(R, { ...E.getStyles("itemTitle", { classNames: t, styles: a }) }, S) : S;
});
sd.displayName = "@mantine/core/AccordionControl";
sd.classes = da;
const WP = {}, cd = xe((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, value: l, ...u } = ge(
    "AccordionItem",
    WP,
    r
  ), f = id();
  return /* @__PURE__ */ k.createElement(zP, { value: { value: l } }, /* @__PURE__ */ k.createElement(
    Ie,
    {
      ref: e,
      mod: { active: f.isItemActive(l) },
      ...f.getStyles("item", { className: n, classNames: t, styles: a, style: o, variant: f.variant }),
      ...u
    }
  ));
});
cd.displayName = "@mantine/core/AccordionItem";
cd.classes = da;
const jP = {}, ld = xe((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, children: l, ...u } = ge(
    "AccordionPanel",
    jP,
    r
  ), { value: f } = uv(), h = id();
  return /* @__PURE__ */ k.createElement(
    Nm,
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
    /* @__PURE__ */ k.createElement("div", { ...h.getStyles("content", { classNames: t, styles: a }) }, l)
  );
});
ld.displayName = "@mantine/core/AccordionPanel";
ld.classes = da;
const YP = {
  multiple: !1,
  disableChevronRotation: !1,
  chevronPosition: "right",
  variant: "default",
  chevron: /* @__PURE__ */ k.createElement(ad, null)
}, QP = (r, { transitionDuration: e, chevronSize: t, radius: n }) => ({
  root: {
    "--accordion-transition-duration": e === void 0 ? void 0 : `${e}ms`,
    "--accordion-chevron-size": t === void 0 ? void 0 : $(t),
    "--accordion-radius": n === void 0 ? void 0 : Io(n)
  }
});
function Et(r) {
  const e = ge("Accordion", YP, r), {
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
    chevronPosition: A,
    chevronSize: R,
    order: S,
    chevron: I,
    variant: O,
    radius: L,
    ...H
  } = e, U = Yn(v), [Q, Z] = bo({
    value: h,
    defaultValue: p,
    finalValue: f ? [] : null,
    onChange: m
  }), ae = (ee) => Array.isArray(Q) ? Q.includes(ee) : ee === Q, Y = (ee) => {
    const he = Array.isArray(Q) ? Q.includes(ee) ? Q.filter((J) => J !== ee) : [...Q, ee] : ee === Q ? null : ee;
    Z(he);
  }, ue = at({
    name: "Accordion",
    classes: da,
    props: e,
    className: n,
    style: o,
    classNames: t,
    styles: a,
    unstyled: s,
    vars: l,
    varsResolver: QP
  });
  return /* @__PURE__ */ k.createElement(
    GP,
    {
      value: {
        isItemActive: ae,
        onChange: Y,
        getControlId: Vp(
          `${U}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: Vp(
          `${U}-panel`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        transitionDuration: E,
        disableChevronRotation: _,
        chevronPosition: A,
        order: S,
        chevron: I,
        loop: C,
        getStyles: ue,
        variant: O,
        unstyled: s
      }
    },
    /* @__PURE__ */ k.createElement(Ie, { ...ue("root"), id: U, ...H, variant: O, "data-accordion": !0 }, u)
  );
}
const JP = (r) => r;
Et.extend = JP;
Et.classes = da;
Et.displayName = "@mantine/core/Accordion";
Et.Item = cd;
Et.Panel = ld;
Et.Control = sd;
Et.Chevron = ad;
var dv = { root: "m-66836ed3", "root--filled": "m-12b2e6d5", "root--white": "m-cffd1856", wrapper: "m-a5d60502", body: "m-667c2793", title: "m-6a03f287", label: "m-698f4f23", icon: "m-667f2a6a", message: "m-7fa78076", closeButton: "m-87f54839" };
const XP = {}, ZP = (r, { radius: e, color: t, variant: n }) => {
  const o = r.variantColorResolver({
    color: t || r.primaryColor,
    theme: r,
    variant: n || "light"
  });
  return {
    root: {
      "--alert-radius": e === void 0 ? void 0 : Io(e),
      "--alert-bg": t || n ? o.background : void 0,
      "--alert-color": t || n ? o.color : void 0,
      "--alert-bd": t || n ? o.border : void 0
    }
  };
}, ud = xe((r, e) => {
  const t = ge("Alert", XP, r), {
    classNames: n,
    className: o,
    style: a,
    styles: s,
    unstyled: l,
    vars: u,
    radius: f,
    color: h,
    title: p,
    children: m,
    id: v,
    icon: C,
    withCloseButton: E,
    onClose: _,
    closeButtonLabel: A,
    variant: R,
    ...S
  } = t, I = at({
    name: "Alert",
    classes: dv,
    props: t,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: u,
    varsResolver: ZP
  }), O = Yn(v), L = p && `${O}-title` || void 0, H = `${O}-body`;
  return /* @__PURE__ */ k.createElement(
    Ie,
    {
      id: O,
      ...I("root", { variant: R }),
      variant: R,
      ref: e,
      ...S,
      role: "alert",
      "aria-describedby": H,
      "aria-labelledby": L
    },
    /* @__PURE__ */ k.createElement("div", { ...I("wrapper") }, C && /* @__PURE__ */ k.createElement("div", { ...I("icon") }, C), /* @__PURE__ */ k.createElement("div", { ...I("body") }, p && /* @__PURE__ */ k.createElement("div", { ...I("title"), "data-with-close-button": E || void 0 }, /* @__PURE__ */ k.createElement("span", { id: L, ...I("label") }, p)), m && /* @__PURE__ */ k.createElement("div", { id: H, ...I("message") }, m)), E && /* @__PURE__ */ k.createElement(
      nc,
      {
        ...I("closeButton"),
        onClick: _,
        variant: "transparent",
        size: 16,
        iconSize: 16,
        "aria-label": A,
        unstyled: l
      }
    ))
  );
});
ud.classes = dv;
ud.displayName = "@mantine/core/Alert";
function fv(r) {
  return typeof r == "string" ? { value: r, label: r } : typeof r == "number" ? { value: r.toString(), label: r.toString() } : "group" in r ? {
    group: r.group,
    items: r.items.map((e) => fv(e))
  } : r;
}
function hv(r) {
  return r ? r.map(fv) : [];
}
function dd(r) {
  return r.reduce((e, t) => "group" in t ? { ...e, ...dd(t.items) } : (e[t.value] = t, e), {});
}
var jt = { dropdown: "m-88b62a41", options: "m-b2821a6e", option: "m-92253aa5", search: "m-985517d8", empty: "m-2530cd1d", header: "m-858f94bd", footer: "m-82b967cb", group: "m-254f3e4f", groupLabel: "m-2bb2e9e5", chevron: "m-2943220b", optionsDropdownScrollArea: "m-71d052f9", optionsDropdownOption: "m-390b5f4", optionsDropdownCheckIcon: "m-8ee53fc2" };
const eN = {
  error: null
}, tN = (r, { size: e }) => ({
  chevron: {
    "--combobox-chevron-size": Bt(e, "combobox-chevron-size")
  }
}), fd = xe((r, e) => {
  const t = ge("ComboboxChevron", eN, r), { size: n, error: o, style: a, className: s, classNames: l, styles: u, unstyled: f, vars: h, ...p } = t, m = at({
    name: "ComboboxChevron",
    classes: jt,
    props: t,
    style: a,
    className: s,
    classNames: l,
    styles: u,
    unstyled: f,
    vars: h,
    varsResolver: tN,
    rootSelector: "chevron"
  });
  return /* @__PURE__ */ k.createElement(
    Ie,
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
    /* @__PURE__ */ k.createElement(
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
fd.classes = jt;
fd.displayName = "@mantine/core/ComboboxChevron";
const [rN, Dr] = ci(
  "Combobox component was not found in tree"
), pv = ut(
  ({ size: r, onMouseDown: e, onClick: t, onClear: n, ...o }, a) => /* @__PURE__ */ k.createElement(
    nc,
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
pv.displayName = "@mantine/core/ComboboxClearButton";
const nN = {}, hd = xe((r, e) => {
  const { classNames: t, styles: n, className: o, style: a, hidden: s, ...l } = ge(
    "ComboboxDropdown",
    nN,
    r
  ), u = Dr();
  return /* @__PURE__ */ k.createElement(
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
hd.classes = jt;
hd.displayName = "@mantine/core/ComboboxDropdown";
const oN = {
  refProp: "ref"
}, gv = xe((r, e) => {
  const { children: t, refProp: n } = ge("ComboboxDropdownTarget", oN, r);
  if (Dr(), !oa(t))
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  return /* @__PURE__ */ k.createElement(Jn.Target, { ref: e, refProp: n }, t);
});
gv.displayName = "@mantine/core/ComboboxDropdownTarget";
const iN = {}, pd = xe((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, ...l } = ge(
    "ComboboxEmpty",
    iN,
    r
  ), u = Dr();
  return /* @__PURE__ */ k.createElement(
    Ie,
    {
      ref: e,
      ...u.getStyles("empty", { className: n, classNames: t, styles: a, style: o }),
      ...l
    }
  );
});
pd.classes = jt;
pd.displayName = "@mantine/core/ComboboxEmpty";
function gd({
  onKeyDown: r,
  withKeyboardNavigation: e,
  withAriaAttributes: t,
  withExpandedAttribute: n,
  targetType: o
}) {
  const a = Dr(), [s, l] = Ee(null), u = (h) => {
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
const aN = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1
}, mv = xe((r, e) => {
  const {
    children: t,
    refProp: n,
    withKeyboardNavigation: o,
    withAriaAttributes: a,
    withExpandedAttribute: s,
    targetType: l,
    ...u
  } = ge("ComboboxEventsTarget", aN, r);
  if (!oa(t))
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const f = Dr(), h = gd({
    targetType: l,
    withAriaAttributes: a,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: t.props.onKeyDown
  });
  return Gs(t, {
    ...h,
    ...u,
    [n]: Mr(e, f.store.targetRef, t == null ? void 0 : t.ref)
  });
});
mv.displayName = "@mantine/core/ComboboxEventsTarget";
const sN = {}, md = xe((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, ...l } = ge(
    "ComboboxFooter",
    sN,
    r
  ), u = Dr();
  return /* @__PURE__ */ k.createElement(
    Ie,
    {
      ref: e,
      ...u.getStyles("footer", { className: n, classNames: t, style: o, styles: a }),
      ...l
    }
  );
});
md.classes = jt;
md.displayName = "@mantine/core/ComboboxFooter";
const cN = {}, vd = xe((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, children: l, label: u, ...f } = ge(
    "ComboboxGroup",
    cN,
    r
  ), h = Dr();
  return /* @__PURE__ */ k.createElement(
    Ie,
    {
      ref: e,
      ...h.getStyles("group", { className: n, classNames: t, style: o, styles: a }),
      ...f
    },
    u && /* @__PURE__ */ k.createElement("div", { ...h.getStyles("groupLabel", { classNames: t, styles: a }) }, u),
    l
  );
});
vd.classes = jt;
vd.displayName = "@mantine/core/ComboboxGroup";
const lN = {}, yd = xe((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, ...l } = ge(
    "ComboboxHeader",
    lN,
    r
  ), u = Dr();
  return /* @__PURE__ */ k.createElement(
    Ie,
    {
      ref: e,
      ...u.getStyles("header", { className: n, classNames: t, style: o, styles: a }),
      ...l
    }
  );
});
yd.classes = jt;
yd.displayName = "@mantine/core/ComboboxHeader";
const uN = {}, Cd = xe((r, e) => {
  const t = ge("ComboboxOption", uN, r), {
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
  } = t, _ = Dr(), A = Fg(), R = f || A;
  return /* @__PURE__ */ k.createElement(
    Ie,
    {
      ..._.getStyles("option", { className: o, classNames: n, styles: s, style: a }),
      ...E,
      ref: e,
      id: R,
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
Cd.classes = jt;
Cd.displayName = "@mantine/core/ComboboxOption";
const dN = {}, wd = xe((r, e) => {
  const t = ge("ComboboxOptions", dN, r), { classNames: n, className: o, style: a, styles: s, id: l, onMouseDown: u, labelledBy: f, ...h } = t, p = Dr(), m = Yn(l);
  return ve(() => {
    p.store.setListId(m);
  }, [m]), /* @__PURE__ */ k.createElement(
    Ie,
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
wd.classes = jt;
wd.displayName = "@mantine/core/ComboboxOptions";
const fN = {
  withAriaAttributes: !0,
  withKeyboardNavigation: !0
}, Ed = xe((r, e) => {
  const t = ge("ComboboxSearch", fN, r), {
    classNames: n,
    styles: o,
    unstyled: a,
    vars: s,
    withAriaAttributes: l,
    onKeyDown: u,
    withKeyboardNavigation: f,
    size: h,
    ...p
  } = t, m = Dr(), v = m.getStyles("search"), C = gd({
    targetType: "input",
    withAriaAttributes: l,
    withKeyboardNavigation: f,
    withExpandedAttribute: !1,
    onKeyDown: u
  });
  return /* @__PURE__ */ k.createElement(
    Kt,
    {
      ref: Mr(e, m.store.searchRef),
      classNames: [{ input: v.className }, n],
      styles: [{ input: v.style }, o],
      size: h || m.size,
      ...C,
      ...p,
      __staticSelector: "Combobox"
    }
  );
});
Ed.classes = jt;
Ed.displayName = "@mantine/core/ComboboxSearch";
const hN = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1
}, vv = xe((r, e) => {
  const {
    children: t,
    refProp: n,
    withKeyboardNavigation: o,
    withAriaAttributes: a,
    withExpandedAttribute: s,
    targetType: l,
    ...u
  } = ge("ComboboxTarget", hN, r);
  if (!oa(t))
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const f = Dr(), h = gd({
    targetType: l,
    withAriaAttributes: a,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: t.props.onKeyDown
  }), p = Gs(t, {
    ...h,
    ...u
  });
  return /* @__PURE__ */ k.createElement(Jn.Target, { ref: Mr(e, f.store.targetRef) }, p);
});
vv.displayName = "@mantine/core/ComboboxTarget";
function pN(r, e, t) {
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
function gN(r, e, t) {
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
function mN(r) {
  for (let e = 0; e < r.length; e += 1)
    if (!r[e].hasAttribute("data-combobox-disabled"))
      return e;
  return -1;
}
function bd({
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
  }), f = Ke(null), h = Ke(-1), p = Ke(null), m = Ke(null), v = Ke(-1), C = Ke(-1), E = Ke(-1), _ = ze(
    (J = "unknown") => {
      l || (u(!0), o == null || o(J));
    },
    [u, o, l]
  ), A = ze(
    (J = "unknown") => {
      l && (u(!1), n == null || n(J));
    },
    [u, n, l]
  ), R = ze(
    (J = "unknown") => {
      l ? A(J) : _(J);
    },
    [A, _, l]
  ), S = ze(() => {
    const J = document.querySelector(`#${f.current} [data-combobox-selected]`);
    J == null || J.removeAttribute("data-combobox-selected"), J == null || J.removeAttribute("aria-selected");
  }, []), I = ze(
    (J) => {
      const ie = document.getElementById(f.current), ne = ie == null ? void 0 : ie.querySelectorAll("[data-combobox-option]");
      if (!ne)
        return null;
      const Pe = J >= ne.length ? 0 : J < 0 ? ne.length - 1 : J;
      return h.current = Pe, ne != null && ne[Pe] && !ne[Pe].hasAttribute("data-combobox-disabled") ? (S(), ne[Pe].setAttribute("data-combobox-selected", "true"), ne[Pe].setAttribute("aria-selected", "true"), ne[Pe].scrollIntoView({ block: "nearest", behavior: s }), ne[Pe].id) : null;
    },
    [s, S]
  ), O = ze(() => {
    const J = document.querySelector(
      `#${f.current} [data-combobox-active]`
    );
    if (J) {
      const ie = document.querySelectorAll(
        `#${f.current} [data-combobox-option]`
      ), ne = Array.from(ie).findIndex((Pe) => Pe === J);
      return I(ne);
    }
    return I(0);
  }, [I]), L = ze(
    () => I(
      gN(
        h.current,
        document.querySelectorAll(`#${f.current} [data-combobox-option]`),
        a
      )
    ),
    [I, a]
  ), H = ze(
    () => I(
      pN(
        h.current,
        document.querySelectorAll(`#${f.current} [data-combobox-option]`),
        a
      )
    ),
    [I, a]
  ), U = ze(
    () => I(
      mN(
        document.querySelectorAll(`#${f.current} [data-combobox-option]`)
      )
    ),
    [I]
  ), Q = ze((J = "selected") => {
    E.current = window.setTimeout(() => {
      const ie = document.querySelectorAll(
        `#${f.current} [data-combobox-option]`
      ), ne = Array.from(ie).findIndex(
        (Pe) => Pe.hasAttribute(`data-combobox-${J}`)
      );
      h.current = ne;
    }, 0);
  }, []), Z = ze(() => {
    h.current = -1, S();
  }, [S]), ae = ze(() => {
    const J = document.querySelectorAll(
      `#${f.current} [data-combobox-option]`
    ), ie = J == null ? void 0 : J[h.current];
    ie == null || ie.click();
  }, []), Y = ze((J) => {
    f.current = J;
  }, []), ue = ze(() => {
    v.current = window.setTimeout(() => p.current.focus(), 0);
  }, []), ee = ze(() => {
    C.current = window.setTimeout(() => m.current.focus(), 0);
  }, []), he = ze(() => h.current, []);
  return ve(
    () => () => {
      window.clearTimeout(v.current), window.clearTimeout(C.current), window.clearTimeout(E.current);
    },
    []
  ), {
    dropdownOpened: l,
    openDropdown: _,
    closeDropdown: A,
    toggleDropdown: R,
    selectedOptionIndex: h.current,
    getSelectedOptionIndex: he,
    selectOption: I,
    selectFirstOption: U,
    selectActiveOption: O,
    selectNextOption: L,
    selectPreviousOption: H,
    resetSelectedOption: Z,
    updateSelectedOptionIndex: Q,
    listId: f.current,
    setListId: Y,
    clickSelectedOption: ae,
    searchRef: p,
    focusSearchInput: ue,
    targetRef: m,
    focusTarget: ee
  };
}
const vN = {
  keepMounted: !0,
  withinPortal: !0,
  resetSelectionOnOptionHover: !1,
  width: "target",
  transitionProps: { transition: "fade", duration: 0 }
}, yN = (r, { size: e, dropdownPadding: t }) => ({
  options: {
    "--combobox-option-fz": Nr(e),
    "--combobox-option-padding": Bt(e, "combobox-option-padding")
  },
  dropdown: {
    "--combobox-padding": t === void 0 ? void 0 : $(t),
    "--combobox-option-fz": Nr(e),
    "--combobox-option-padding": Bt(e, "combobox-option-padding")
  }
});
function je(r) {
  const e = ge("Combobox", vN, r), {
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
  } = e, E = bd(), _ = s || E, A = at({
    name: m || "Combobox",
    classes: jt,
    props: e,
    classNames: t,
    styles: n,
    unstyled: o,
    vars: l,
    varsResolver: yN
  });
  return /* @__PURE__ */ k.createElement(
    rN,
    {
      value: {
        getStyles: A,
        store: _,
        onOptionSubmit: u,
        size: f,
        resetSelectionOnOptionHover: p,
        readOnly: v
      }
    },
    /* @__PURE__ */ k.createElement(
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
const CN = (r) => r;
je.extend = CN;
je.classes = jt;
je.displayName = "@mantine/core/Combobox";
je.Target = vv;
je.Dropdown = hd;
je.Options = wd;
je.Option = Cd;
je.Search = Ed;
je.Empty = pd;
je.Chevron = fd;
je.Footer = md;
je.Header = yd;
je.EventsTarget = mv;
je.DropdownTarget = gv;
je.Group = vd;
je.ClearButton = pv;
var yv = { root: "m-5f75b09e", body: "m-5f6e695e", labelWrapper: "m-d3ea56bb", label: "m-8ee546b8", description: "m-328f68c0", error: "m-8e8a99cc" };
const wN = yv, Cv = ut(
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
    ...A
  }, R) => {
    const S = at({
      name: r,
      props: e,
      className: t,
      style: E,
      classes: yv,
      classNames: n,
      styles: o,
      unstyled: a
    });
    return /* @__PURE__ */ k.createElement(
      Ie,
      {
        ...S("root"),
        ref: R,
        __vars: {
          "--label-fz": Nr(m),
          "--label-lh": Bt(m, "label-lh")
        },
        mod: { "label-position": v },
        variant: C,
        size: m,
        ...A
      },
      /* @__PURE__ */ k.createElement("div", { ...S("body") }, s, /* @__PURE__ */ k.createElement("div", { ...S("labelWrapper"), "data-disabled": h || void 0 }, l && /* @__PURE__ */ k.createElement("label", { ...S("label"), "data-disabled": h || void 0, htmlFor: f }, l), u && /* @__PURE__ */ k.createElement(Kt.Description, { size: m, __inheritStyles: !1, ...S("description") }, u), p && p !== "boolean" && /* @__PURE__ */ k.createElement(Kt.Error, { size: m, __inheritStyles: !1, ...S("error") }, p)))
    );
  }
);
Cv.displayName = "@mantine/core/InlineInput";
const wv = To(null), EN = wv.Provider, bN = () => jn(wv);
function _N({ children: r, role: e }) {
  const t = ua();
  return t ? /* @__PURE__ */ k.createElement("div", { role: e, "aria-labelledby": t.labelId, "aria-describedby": t.describedBy }, r) : /* @__PURE__ */ k.createElement(k.Fragment, null, r);
}
const SN = {}, _d = xe((r, e) => {
  const { value: t, defaultValue: n, onChange: o, size: a, wrapperProps: s, children: l, ...u } = ge(
    "CheckboxGroup",
    SN,
    r
  ), [f, h] = bo({
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
  return /* @__PURE__ */ k.createElement(EN, { value: { value: f, onChange: p, size: a } }, /* @__PURE__ */ k.createElement(
    Kt.Wrapper,
    {
      size: a,
      ref: e,
      ...s,
      ...u,
      labelElement: "div",
      __staticSelector: "CheckboxGroup"
    },
    /* @__PURE__ */ k.createElement(_N, { role: "group" }, l)
  ));
});
_d.classes = Kt.Wrapper.classes;
_d.displayName = "@mantine/core/CheckboxGroup";
function Ev({ size: r, style: e, ...t }) {
  const n = r !== void 0 ? { width: $(r), height: $(r), ...e } : e;
  return /* @__PURE__ */ k.createElement(
    "svg",
    {
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: n,
      "aria-hidden": !0,
      ...t
    },
    /* @__PURE__ */ k.createElement(
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
function TN({ indeterminate: r, ...e }) {
  return r ? /* @__PURE__ */ k.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 32 6",
      "aria-hidden": !0,
      ...e
    },
    /* @__PURE__ */ k.createElement("rect", { width: "32", height: "6", fill: "currentColor", rx: "3" })
  ) : /* @__PURE__ */ k.createElement(Ev, { ...e });
}
var bv = { root: "m-bf2d988c", inner: "m-26062bec", input: "m-26063560", icon: "m-bf295423", "input--outline": "m-215c4542" };
const IN = {
  labelPosition: "right",
  icon: TN
}, AN = (r, { radius: e, color: t, size: n, iconColor: o, variant: a }) => {
  const s = Js({ color: t || r.primaryColor, theme: r }), l = s.isThemeColor && s.shade === void 0 ? `var(--mantine-color-${s.color}-outline)` : s.color;
  return {
    root: {
      "--checkbox-size": Bt(n, "checkbox-size"),
      "--checkbox-radius": e === void 0 ? void 0 : Io(e),
      "--checkbox-color": a === "outline" ? l : ji(t, r),
      "--checkbox-icon-color": o ? ji(o, r) : void 0
    }
  };
}, fa = xe((r, e) => {
  const t = ge("Checkbox", IN, r), {
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
    labelPosition: A,
    description: R,
    error: S,
    disabled: I,
    variant: O,
    indeterminate: L,
    icon: H,
    rootRef: U,
    iconColor: Q,
    onChange: Z,
    ...ae
  } = t, Y = bN(), ue = m || (Y == null ? void 0 : Y.size), ee = H, he = at({
    name: "Checkbox",
    props: t,
    classes: bv,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: u,
    varsResolver: AN
  }), { styleProps: J, rest: ie } = Xs(ae), ne = Yn(p), Pe = Y ? {
    checked: Y.value.includes(ie.value),
    onChange: (Qe) => {
      Y.onChange(Qe), Z == null || Z(Qe);
    }
  } : {};
  return /* @__PURE__ */ k.createElement(
    Cv,
    {
      ...he("root"),
      __staticSelector: "Checkbox",
      __stylesApiProps: t,
      id: ne,
      size: ue,
      labelPosition: A,
      label: h,
      description: R,
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
    /* @__PURE__ */ k.createElement(Ie, { ...he("inner"), mod: { "data-label-position": A } }, /* @__PURE__ */ k.createElement(
      Ie,
      {
        component: "input",
        id: ne,
        ref: e,
        checked: _,
        disabled: I,
        mod: { error: !!S, indeterminate: L },
        ...he("input", { focusable: !0, variant: O }),
        onChange: Z,
        ...ie,
        ...Pe,
        type: "checkbox"
      }
    ), /* @__PURE__ */ k.createElement(ee, { indeterminate: L, ...he("icon") }))
  );
});
fa.classes = { ...bv, ...wN };
fa.displayName = "@mantine/core/Checkbox";
fa.Group = _d;
function Qi(r) {
  return "group" in r;
}
function _v({
  options: r,
  search: e,
  limit: t
}) {
  const n = e.trim().toLowerCase(), o = [];
  for (let a = 0; a < r.length; a += 1) {
    const s = r[a];
    if (o.length === t)
      return o;
    Qi(s) && o.push({
      group: s.group,
      items: _v({
        options: s.items,
        search: e,
        limit: t - o.length
      })
    }), Qi(s) || s.label.toLowerCase().includes(n) && o.push(s);
  }
  return o;
}
function RN(r) {
  if (r.length === 0)
    return !0;
  for (const e of r)
    if (!("group" in e) || e.items.length > 0)
      return !1;
  return !0;
}
function Sv(r, e = /* @__PURE__ */ new Set()) {
  if (Array.isArray(r))
    for (const t of r)
      if (Qi(t))
        Sv(t.items, e);
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
function Tv({ data: r, withCheckIcon: e, value: t, checkIconPosition: n, unstyled: o }) {
  if (!Qi(r)) {
    const s = e && Vl(t, r.value) && /* @__PURE__ */ k.createElement(Ev, { className: jt.optionsDropdownCheckIcon });
    return /* @__PURE__ */ k.createElement(
      je.Option,
      {
        value: r.value,
        disabled: r.disabled,
        className: kn({ [jt.optionsDropdownOption]: !o }),
        "data-reverse": n === "right" || void 0,
        "data-checked": Vl(t, r.value) || void 0,
        "aria-selected": Vl(t, r.value)
      },
      n === "left" && s,
      /* @__PURE__ */ k.createElement("span", null, r.label),
      n === "right" && s
    );
  }
  const a = r.items.map((s) => /* @__PURE__ */ k.createElement(
    Tv,
    {
      data: s,
      value: t,
      key: s.value,
      unstyled: o,
      withCheckIcon: e,
      checkIconPosition: n
    }
  ));
  return /* @__PURE__ */ k.createElement(je.Group, { label: r.group }, a);
}
function Iv({
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
  Sv(r);
  const _ = typeof o == "string" ? (n || _v)({
    options: r,
    search: u ? o : "",
    limit: a ?? 1 / 0
  }) : r, A = RN(_), R = _.map((S) => /* @__PURE__ */ k.createElement(
    Tv,
    {
      data: S,
      key: Qi(S) ? S.group : S.value,
      withCheckIcon: f,
      value: h,
      checkIconPosition: p,
      unstyled: v
    }
  ));
  return /* @__PURE__ */ k.createElement(je.Dropdown, { hidden: e || t && A }, /* @__PURE__ */ k.createElement(je.Options, { labelledBy: C }, l ? /* @__PURE__ */ k.createElement(
    sa.Autosize,
    {
      mah: s ?? 220,
      type: "scroll",
      scrollbarSize: "var(--_combobox-padding)",
      offsetScrollbars: "y",
      className: jt.optionsDropdownScrollArea
    },
    R
  ) : R, A && m && /* @__PURE__ */ k.createElement(je.Empty, null, m)));
}
const kN = {}, Sd = xe((r, e) => {
  const t = ge("Autocomplete", kN, r), {
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
    defaultValue: A,
    selectFirstOptionOnChange: R,
    onOptionSubmit: S,
    comboboxProps: I,
    readOnly: O,
    disabled: L,
    filter: H,
    limit: U,
    withScrollArea: Q,
    maxDropdownHeight: Z,
    size: ae,
    id: Y,
    ...ue
  } = t, ee = Yn(Y), he = hv(E), J = dd(he), [ie, ne] = bo({
    value: _,
    defaultValue: A,
    finalValue: "",
    onChange: C
  }), Pe = bd({
    opened: l,
    defaultOpened: u,
    onDropdownOpen: h,
    onDropdownClose: () => {
      f == null || f(), Pe.resetSelectedOption();
    }
  }), { resolvedClassNames: Qe, resolvedStyles: ot } = Tm({
    props: t,
    styles: o,
    classNames: n
  });
  return ve(() => {
    R && Pe.selectFirstOption();
  }, [R, ie]), /* @__PURE__ */ k.createElement(
    je,
    {
      store: Pe,
      __staticSelector: "Autocomplete",
      classNames: Qe,
      styles: ot,
      unstyled: a,
      readOnly: O,
      onOptionSubmit: (dt) => {
        S == null || S(dt), ne(J[dt].label), Pe.closeDropdown();
      },
      size: ae,
      ...I
    },
    /* @__PURE__ */ k.createElement(je.Target, null, /* @__PURE__ */ k.createElement(
      Xn,
      {
        ref: e,
        ...ue,
        size: ae,
        __staticSelector: "Autocomplete",
        disabled: L,
        readOnly: O,
        value: ie,
        onChange: (dt) => {
          ne(dt.currentTarget.value), Pe.openDropdown(), R && Pe.selectFirstOption();
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
        id: ee
      }
    )),
    /* @__PURE__ */ k.createElement(
      Iv,
      {
        data: he,
        hidden: O || L,
        filter: H,
        search: ie,
        limit: U,
        hiddenWhenEmpty: !0,
        withScrollArea: Q,
        maxDropdownHeight: Z,
        unstyled: a,
        labelId: `${ee}-label`
      }
    )
  );
});
Sd.classes = { ...Xn.classes, ...je.classes };
Sd.displayName = "@mantine/core/Autocomplete";
var sc = { root: "m-77c9d27d", inner: "m-80f1301b", loader: "m-a25b86ee", label: "m-811560b9", section: "m-a74036a", group: "m-80d6d844" };
const yg = {
  orientation: "horizontal"
}, PN = (r, { borderWidth: e }) => ({
  group: { "--button-border-width": $(e) }
}), Td = xe((r, e) => {
  const t = ge("ButtonGroup", yg, r), {
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
  } = ge("ButtonGroup", yg, r), v = at({
    name: "ButtonGroup",
    props: t,
    classes: sc,
    className: n,
    style: o,
    classNames: a,
    styles: s,
    unstyled: l,
    vars: f,
    varsResolver: PN,
    rootSelector: "group"
  });
  return /* @__PURE__ */ k.createElement(
    Ie,
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
Td.classes = sc;
Td.displayName = "@mantine/core/ButtonGroup";
const NN = {}, ON = (r, { radius: e, color: t, gradient: n, variant: o, size: a, justify: s }) => {
  const l = r.variantColorResolver({
    color: t || r.primaryColor,
    theme: r,
    gradient: n,
    variant: o || "filled"
  });
  return {
    root: {
      "--button-justify": s,
      "--button-height": Bt(a, "button-height"),
      "--button-padding-x": Bt(a, "button-padding-x"),
      "--button-fz": a != null && a.includes("compact") ? Nr(a.replace("compact-", "")) : Nr(a),
      "--button-radius": e === void 0 ? void 0 : Io(e),
      "--button-bg": t || o ? l.background : void 0,
      "--button-hover": t || o ? l.hover : void 0,
      "--button-color": t || o ? l.color : void 0,
      "--button-bd": t || o ? l.border : void 0,
      "--button-hover-color": t || o ? l.hoverColor : void 0
    }
  };
}, ha = aa((r, e) => {
  const t = ge("Button", NN, r), {
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
    classNames: A,
    styles: R,
    unstyled: S,
    "data-disabled": I,
    ...O
  } = t, L = at({
    name: "Button",
    props: t,
    classes: sc,
    className: a,
    style: n,
    classNames: A,
    styles: R,
    unstyled: S,
    vars: o,
    varsResolver: ON
  }), H = !!f, U = !!h;
  return /* @__PURE__ */ k.createElement(
    ca,
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
        "with-left-section": H,
        "with-right-section": U
      },
      ...O
    },
    /* @__PURE__ */ k.createElement(Ie, { component: "span", ...L("loader"), "aria-hidden": !0 }, /* @__PURE__ */ k.createElement(
      rc,
      {
        color: "var(--button-color)",
        size: "calc(var(--button-height) / 1.8)",
        ...E
      }
    )),
    /* @__PURE__ */ k.createElement("span", { ...L("inner") }, f && /* @__PURE__ */ k.createElement(Ie, { component: "span", ...L("section"), mod: { position: "left" } }, f), /* @__PURE__ */ k.createElement(Ie, { component: "span", mod: { loading: C }, ...L("label") }, u), h && /* @__PURE__ */ k.createElement(Ie, { component: "span", ...L("section"), mod: { position: "right" } }, h))
  );
});
ha.classes = sc;
ha.displayName = "@mantine/core/Button";
ha.Group = Td;
var Av = { root: "m-7485cace" };
const MN = {}, xN = (r, { size: e, fluid: t }) => ({
  root: {
    "--container-size": t ? void 0 : Bt(e, "container-size")
  }
}), Id = xe((r, e) => {
  const t = ge("Container", MN, r), { classNames: n, className: o, style: a, styles: s, unstyled: l, vars: u, fluid: f, ...h } = t, p = at({
    name: "Container",
    classes: Av,
    props: t,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: u,
    varsResolver: xN
  });
  return /* @__PURE__ */ k.createElement(Ie, { ref: e, mod: { fluid: f }, ...p("root"), ...h });
});
Id.classes = Av;
Id.displayName = "@mantine/core/Container";
const LN = {
  searchable: !1,
  withCheckIcon: !0,
  allowDeselect: !0,
  checkIconPosition: "left"
}, cc = xe((r, e) => {
  const t = ge("Select", LN, r), {
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
    defaultValue: A,
    selectFirstOptionOnChange: R,
    onOptionSubmit: S,
    comboboxProps: I,
    readOnly: O,
    disabled: L,
    filter: H,
    limit: U,
    withScrollArea: Q,
    maxDropdownHeight: Z,
    size: ae,
    searchable: Y,
    rightSection: ue,
    checkIconPosition: ee,
    withCheckIcon: he,
    nothingFoundMessage: J,
    name: ie,
    form: ne,
    searchValue: Pe,
    defaultSearchValue: Qe,
    onSearchChange: ot,
    allowDeselect: dt,
    error: Yr,
    rightSectionPointerEvents: ln,
    id: Yt,
    clearable: ar,
    clearButtonProps: un,
    hiddenInputProps: sr,
    ...Ur
  } = t, dn = ps(() => hv(E), [E]), qt = ps(() => dd(dn), [dn]), wr = Yn(Yt), [Ye, Pt] = bo({
    value: _,
    defaultValue: A,
    finalValue: null,
    onChange: C
  }), Nt = typeof Ye == "string" ? qt[Ye] : void 0, [Nn, gt] = bo({
    value: Pe,
    defaultValue: Qe,
    finalValue: Nt ? Nt.label : "",
    onChange: ot
  }), Ot = bd({
    opened: l,
    defaultOpened: u,
    onDropdownOpen: h,
    onDropdownClose: () => {
      f == null || f(), Ot.resetSelectedOption();
    }
  }), { resolvedClassNames: Zn, resolvedStyles: Fr } = Tm({
    props: t,
    styles: o,
    classNames: n
  });
  ve(() => {
    R && Ot.selectFirstOption();
  }, [R, Ye]), ve(() => {
    _ === null && gt(""), typeof _ == "string" && Nt && gt(Nt.label);
  }, [_, Nt]);
  const bt = ar && !!Ye && !L && !O && /* @__PURE__ */ k.createElement(
    je.ClearButton,
    {
      size: ae,
      ...un,
      onClear: () => {
        Pt(null), gt("");
      }
    }
  );
  return /* @__PURE__ */ k.createElement(k.Fragment, null, /* @__PURE__ */ k.createElement(
    je,
    {
      store: Ot,
      __staticSelector: "Select",
      classNames: Zn,
      styles: Fr,
      unstyled: a,
      readOnly: O,
      onOptionSubmit: (tt) => {
        S == null || S(tt);
        const Qr = dt && qt[tt].value === Ye ? null : qt[tt].value;
        Pt(Qr), gt(typeof Qr == "string" ? qt[tt].label : ""), Ot.closeDropdown();
      },
      size: ae,
      ...I
    },
    /* @__PURE__ */ k.createElement(je.Target, { targetType: Y ? "input" : "button" }, /* @__PURE__ */ k.createElement(
      Xn,
      {
        id: wr,
        ref: e,
        rightSection: ue || bt || /* @__PURE__ */ k.createElement(je.Chevron, { size: ae, error: Yr, unstyled: a }),
        rightSectionPointerEvents: ln || (bt ? "all" : "none"),
        ...Ur,
        size: ae,
        __staticSelector: "Select",
        disabled: L,
        readOnly: O || !Y,
        value: Nn,
        onChange: (tt) => {
          gt(tt.currentTarget.value), Ot.openDropdown(), R && Ot.selectFirstOption();
        },
        onFocus: (tt) => {
          Y && Ot.openDropdown(), p == null || p(tt);
        },
        onBlur: (tt) => {
          var Qr;
          Y && Ot.closeDropdown(), gt(Ye != null && ((Qr = qt[Ye]) == null ? void 0 : Qr.label) || ""), m == null || m(tt);
        },
        onClick: (tt) => {
          Y ? Ot.openDropdown() : Ot.toggleDropdown(), v == null || v(tt);
        },
        classNames: Zn,
        styles: Fr,
        unstyled: a,
        pointer: !Y,
        error: Yr
      }
    )),
    /* @__PURE__ */ k.createElement(
      Iv,
      {
        data: dn,
        hidden: O || L,
        filter: H,
        search: Nn,
        limit: U,
        hiddenWhenEmpty: !Y || !J,
        withScrollArea: Q,
        maxDropdownHeight: Z,
        filterOptions: Y && (Nt == null ? void 0 : Nt.label) !== Nn,
        value: Ye,
        checkIconPosition: ee,
        withCheckIcon: he,
        nothingFoundMessage: J,
        unstyled: a,
        labelId: `${wr}-label`
      }
    )
  ), /* @__PURE__ */ k.createElement(
    "input",
    {
      type: "hidden",
      name: ie,
      value: Ye || "",
      form: ne,
      disabled: L,
      ...sr
    }
  ));
});
cc.classes = { ...Xn.classes, ...je.classes };
cc.displayName = "@mantine/core/Select";
const DN = {}, Rv = xe((r, e) => {
  const { w: t, h: n, miw: o, mih: a, ...s } = ge("Space", DN, r);
  return /* @__PURE__ */ k.createElement(Ie, { ref: e, ...s, w: t, miw: o ?? t, h: n, mih: a ?? n });
});
Rv.displayName = "@mantine/core/Space";
var kv = { root: "m-6d731127" };
const UN = {
  gap: "md",
  align: "stretch",
  justify: "flex-start"
}, FN = (r, { gap: e, align: t, justify: n }) => ({
  root: {
    "--stack-gap": Hu(e),
    "--stack-align": t,
    "--stack-justify": n
  }
}), Ad = xe((r, e) => {
  const t = ge("Stack", UN, r), {
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
  } = t, C = at({
    name: "Stack",
    props: t,
    classes: kv,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: u,
    varsResolver: FN
  });
  return /* @__PURE__ */ k.createElement(Ie, { ref: e, ...C("root"), variant: m, ...v });
});
Ad.classes = kv;
Ad.displayName = "@mantine/core/Stack";
const HN = {}, Co = xe((r, e) => {
  const t = ge("TextInput", HN, r);
  return /* @__PURE__ */ k.createElement(Xn, { component: "input", ref: e, ...t, __staticSelector: "TextInput" });
});
Co.classes = Xn.classes;
Co.displayName = "@mantine/core/TextInput";
const BN = ["h1", "h2", "h3", "h4", "h5", "h6"];
function KN(r, e) {
  const t = e !== void 0 ? e : `h${r}`;
  return BN.includes(t) ? {
    fontSize: `var(--mantine-${t}-font-size)`,
    fontWeight: `var(--mantine-${t}-font-weight)`,
    lineHeight: `var(--mantine-${t}-line-height)`
  } : {
    fontSize: $(t),
    fontWeight: `var(--mantine-h${r}-font-weight)`,
    lineHeight: `var(--mantine-h${r}-line-height)`
  };
}
var Pv = { root: "m-8a5d1357" };
const qN = {
  order: 1
}, $N = (r, { order: e, size: t, lineClamp: n }) => {
  const o = KN(e, t);
  return {
    root: {
      "--title-fw": o.fontWeight,
      "--title-lh": o.lineHeight,
      "--title-fz": o.fontSize,
      "--title-line-clamp": typeof n == "number" ? n.toString() : void 0
    }
  };
}, Us = xe((r, e) => {
  const t = ge("Title", qN, r), {
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
  } = t, C = at({
    name: "Title",
    props: t,
    classes: Pv,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: f,
    varsResolver: $N
  });
  return [1, 2, 3, 4, 5, 6].includes(u) ? /* @__PURE__ */ k.createElement(
    Ie,
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
Us.classes = Pv;
Us.displayName = "@mantine/core/Title";
var Nv = { exports: {} }, GN = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", zN = GN, VN = zN;
function Ov() {
}
function Mv() {
}
Mv.resetWarningCache = Ov;
var WN = function() {
  function r(n, o, a, s, l, u) {
    if (u !== VN) {
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
    checkPropTypes: Mv,
    resetWarningCache: Ov
  };
  return t.PropTypes = t, t;
};
Nv.exports = WN();
var jN = Nv.exports;
const lo = /* @__PURE__ */ e0(jN);
var YN = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, QN = Object.defineProperty, JN = Object.defineProperties, XN = Object.getOwnPropertyDescriptors, Fs = Object.getOwnPropertySymbols, xv = Object.prototype.hasOwnProperty, Lv = Object.prototype.propertyIsEnumerable, Cg = (r, e, t) => e in r ? QN(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, wg = (r, e) => {
  for (var t in e || (e = {}))
    xv.call(e, t) && Cg(r, t, e[t]);
  if (Fs)
    for (var t of Fs(e))
      Lv.call(e, t) && Cg(r, t, e[t]);
  return r;
}, ZN = (r, e) => JN(r, XN(e)), e1 = (r, e) => {
  var t = {};
  for (var n in r)
    xv.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
  if (r != null && Fs)
    for (var n of Fs(r))
      e.indexOf(n) < 0 && Lv.call(r, n) && (t[n] = r[n]);
  return t;
}, Dv = (r, e, t) => {
  const n = ut(
    (o, a) => {
      var s = o, { color: l = "currentColor", size: u = 24, stroke: f = 2, children: h } = s, p = e1(s, ["color", "size", "stroke", "children"]);
      return up(
        "svg",
        wg(ZN(wg({
          ref: a
        }, YN), {
          width: u,
          height: u,
          stroke: l,
          strokeWidth: f,
          className: `tabler-icon tabler-icon-${r}`
        }), p),
        [...t.map(([m, v]) => up(m, v)), ...h || []]
      );
    }
  );
  return n.propTypes = {
    color: lo.string,
    size: lo.oneOfType([lo.string, lo.number]),
    stroke: lo.oneOfType([lo.string, lo.number])
  }, n.displayName = `${e}`, n;
}, t1 = Dv("check", "IconCheck", [
  ["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]
]), r1 = Dv("dots", "IconDots", [
  ["path", { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
  ["path", { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]
]);
function n1({ indeterminate: r, ...e }) {
  return r ? /* @__PURE__ */ we.jsx(r1, { ...e }) : /* @__PURE__ */ we.jsx(t1, { ...e });
}
const o1 = {
  components: {
    Checkbox: fa.extend({
      defaultProps: {
        icon: n1,
        variant: "outline"
      },
      classNames: {
        input: "checkBox"
      }
    })
  }
}, Eg = {
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
}, i1 = {
  auth: {
    clientId: "0fcd615b-f2b7-4514-9046-7b3e545ba341",
    authority: Eg.authorities.signUpSignIn.authority,
    knownAuthorities: [Eg.authorityDomain],
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
            case ct.Error:
              console.error(e);
              return;
            case ct.Info:
              console.info(e);
              return;
            case ct.Verbose:
              console.debug(e);
              return;
            case ct.Warning:
              console.warn(e);
              return;
            default:
              return;
          }
      }
    }
  }
};
class a1 {
  constructor(e = {}) {
    Vt(this, "baseUrl", "https://api.bsdd.buildingsmart.org/");
    Vt(this, "securityData", null);
    Vt(this, "securityWorker");
    Vt(this, "abortControllers", /* @__PURE__ */ new Map());
    Vt(this, "customFetch", (...e) => fetch(...e));
    Vt(this, "baseApiParams", {
      credentials: "same-origin",
      headers: {},
      redirect: "follow",
      referrerPolicy: "no-referrer"
    });
    Vt(this, "setSecurityData", (e) => {
      this.securityData = e;
    });
    Vt(this, "contentFormatters", {
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
    Vt(this, "createAbortSignal", (e) => {
      if (this.abortControllers.has(e)) {
        const n = this.abortControllers.get(e);
        return n ? n.signal : void 0;
      }
      const t = new AbortController();
      return this.abortControllers.set(e, t), t.signal;
    });
    Vt(this, "abortRequest", (e) => {
      const t = this.abortControllers.get(e);
      t && (t.abort(), this.abortControllers.delete(e));
    });
    Vt(this, "request", async ({
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
        const A = C ? await E[C]().then((R) => (_.ok ? _.data = R : _.error = R, _)).catch((R) => (_.error = R, _)) : _;
        if (u && this.abortControllers.delete(u), !E.ok)
          throw A;
        return A;
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
class s1 extends a1 {
  constructor() {
    super(...arguments);
    Vt(this, "api", {
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
class Ji extends s1 {
  constructor(e) {
    super({ baseUrl: e });
  }
}
const Uv = {
  test: "https://test.bsdd.buildingsmart.org",
  production: "https://api.bsdd.buildingsmart.org"
}, c1 = "production", l1 = P0, Ft = w0;
function u1(r) {
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
function It(r) {
  return `Minified Redux error #${r}; visit https://redux.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `;
}
var f1 = /* @__PURE__ */ (() => typeof Symbol == "function" && Symbol.observable || "@@observable")(), bg = f1, Wl = () => Math.random().toString(36).substring(7).split("").join("."), h1 = {
  INIT: `@@redux/INIT${Wl()}`,
  REPLACE: `@@redux/REPLACE${Wl()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Wl()}`
}, Hs = h1;
function Rd(r) {
  if (typeof r != "object" || r === null)
    return !1;
  let e = r;
  for (; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(r) === e || Object.getPrototypeOf(r) === null;
}
function Fv(r, e, t) {
  if (typeof r != "function")
    throw new Error(It(2));
  if (typeof e == "function" && typeof t == "function" || typeof t == "function" && typeof arguments[3] == "function")
    throw new Error(It(0));
  if (typeof e == "function" && typeof t > "u" && (t = e, e = void 0), typeof t < "u") {
    if (typeof t != "function")
      throw new Error(It(1));
    return t(Fv)(r, e);
  }
  let n = r, o = e, a = /* @__PURE__ */ new Map(), s = a, l = 0, u = !1;
  function f() {
    s === a && (s = /* @__PURE__ */ new Map(), a.forEach((_, A) => {
      s.set(A, _);
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
    let A = !0;
    f();
    const R = l++;
    return s.set(R, _), function() {
      if (A) {
        if (u)
          throw new Error(It(6));
        A = !1, f(), s.delete(R), a = null;
      }
    };
  }
  function m(_) {
    if (!Rd(_))
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
    return (a = s).forEach((R) => {
      R();
    }), _;
  }
  function v(_) {
    if (typeof _ != "function")
      throw new Error(It(10));
    n = _, m({
      type: Hs.REPLACE
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
      subscribe(A) {
        if (typeof A != "object" || A === null)
          throw new Error(It(11));
        function R() {
          const I = A;
          I.next && I.next(h());
        }
        return R(), {
          unsubscribe: _(R)
        };
      },
      [bg]() {
        return this;
      }
    };
  }
  return m({
    type: Hs.INIT
  }), {
    dispatch: m,
    subscribe: p,
    getState: h,
    replaceReducer: v,
    [bg]: C
  };
}
function p1(r) {
  Object.keys(r).forEach((e) => {
    const t = r[e];
    if (typeof t(void 0, {
      type: Hs.INIT
    }) > "u")
      throw new Error(It(12));
    if (typeof t(void 0, {
      type: Hs.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(It(13));
  });
}
function g1(r) {
  const e = Object.keys(r), t = {};
  for (let a = 0; a < e.length; a++) {
    const s = e[a];
    typeof r[s] == "function" && (t[s] = r[s]);
  }
  const n = Object.keys(t);
  let o;
  try {
    p1(t);
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
function Bs(...r) {
  return r.length === 0 ? (e) => e : r.length === 1 ? r[0] : r.reduce((e, t) => (...n) => e(t(...n)));
}
function m1(...r) {
  return (e) => (t, n) => {
    const o = e(t, n);
    let a = () => {
      throw new Error(It(15));
    };
    const s = {
      getState: o.getState,
      dispatch: (u, ...f) => a(u, ...f)
    }, l = r.map((u) => u(s));
    return a = Bs(...l)(o.dispatch), {
      ...o,
      dispatch: a
    };
  };
}
function v1(r) {
  return Rd(r) && "type" in r && typeof r.type == "string";
}
var Hv = Symbol.for("immer-nothing"), _g = Symbol.for("immer-draftable"), yr = Symbol.for("immer-state");
function Gr(r, ...e) {
  throw new Error(
    `[Immer] minified error nr: ${r}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var ai = Object.getPrototypeOf;
function Wn(r) {
  return !!r && !!r[yr];
}
function Rn(r) {
  var e;
  return r ? Bv(r) || Array.isArray(r) || !!r[_g] || !!((e = r.constructor) != null && e[_g]) || uc(r) || dc(r) : !1;
}
var y1 = Object.prototype.constructor.toString();
function Bv(r) {
  if (!r || typeof r != "object")
    return !1;
  const e = ai(r);
  if (e === null)
    return !0;
  const t = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
  return t === Object ? !0 : typeof t == "function" && Function.toString.call(t) === y1;
}
function Xi(r, e) {
  lc(r) === 0 ? Object.entries(r).forEach(([t, n]) => {
    e(t, n, r);
  }) : r.forEach((t, n) => e(n, t, r));
}
function lc(r) {
  const e = r[yr];
  return e ? e.type_ : Array.isArray(r) ? 1 : uc(r) ? 2 : dc(r) ? 3 : 0;
}
function wu(r, e) {
  return lc(r) === 2 ? r.has(e) : Object.prototype.hasOwnProperty.call(r, e);
}
function Kv(r, e, t) {
  const n = lc(r);
  n === 2 ? r.set(e, t) : n === 3 ? r.add(t) : r[e] = t;
}
function C1(r, e) {
  return r === e ? r !== 0 || 1 / r === 1 / e : r !== r && e !== e;
}
function uc(r) {
  return r instanceof Map;
}
function dc(r) {
  return r instanceof Set;
}
function fo(r) {
  return r.copy_ || r.base_;
}
function Eu(r, e) {
  if (uc(r))
    return new Map(r);
  if (dc(r))
    return new Set(r);
  if (Array.isArray(r))
    return Array.prototype.slice.call(r);
  if (!e && Bv(r))
    return ai(r) ? { ...r } : Object.assign(/* @__PURE__ */ Object.create(null), r);
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
  return Object.create(ai(r), t);
}
function kd(r, e = !1) {
  return fc(r) || Wn(r) || !Rn(r) || (lc(r) > 1 && (r.set = r.add = r.clear = r.delete = w1), Object.freeze(r), e && Xi(r, (t, n) => kd(n, !0))), r;
}
function w1() {
  Gr(2);
}
function fc(r) {
  return Object.isFrozen(r);
}
var E1 = {};
function So(r) {
  const e = E1[r];
  return e || Gr(0, r), e;
}
var Zi;
function qv() {
  return Zi;
}
function b1(r, e) {
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
function Sg(r, e) {
  e && (So("Patches"), r.patches_ = [], r.inversePatches_ = [], r.patchListener_ = e);
}
function bu(r) {
  _u(r), r.drafts_.forEach(_1), r.drafts_ = null;
}
function _u(r) {
  r === Zi && (Zi = r.parent_);
}
function Tg(r) {
  return Zi = b1(Zi, r);
}
function _1(r) {
  const e = r[yr];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : e.revoked_ = !0;
}
function Ig(r, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const t = e.drafts_[0];
  return r !== void 0 && r !== t ? (t[yr].modified_ && (bu(e), Gr(4)), Rn(r) && (r = Ks(e, r), e.parent_ || qs(e, r)), e.patches_ && So("Patches").generateReplacementPatches_(
    t[yr].base_,
    r,
    e.patches_,
    e.inversePatches_
  )) : r = Ks(e, t, []), bu(e), e.patches_ && e.patchListener_(e.patches_, e.inversePatches_), r !== Hv ? r : void 0;
}
function Ks(r, e, t) {
  if (fc(e))
    return e;
  const n = e[yr];
  if (!n)
    return Xi(
      e,
      (o, a) => Ag(r, n, e, o, a, t)
    ), e;
  if (n.scope_ !== r)
    return e;
  if (!n.modified_)
    return qs(r, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const o = n.copy_;
    let a = o, s = !1;
    n.type_ === 3 && (a = new Set(o), o.clear(), s = !0), Xi(
      a,
      (l, u) => Ag(r, n, o, l, u, t, s)
    ), qs(r, o, !1), t && r.patches_ && So("Patches").generatePatches_(
      n,
      t,
      r.patches_,
      r.inversePatches_
    );
  }
  return n.copy_;
}
function Ag(r, e, t, n, o, a, s) {
  if (Wn(o)) {
    const l = a && e && e.type_ !== 3 && // Set objects are atomic since they have no keys.
    !wu(e.assigned_, n) ? a.concat(n) : void 0, u = Ks(r, o, l);
    if (Kv(t, n, u), Wn(u))
      r.canAutoFreeze_ = !1;
    else
      return;
  } else
    s && t.add(o);
  if (Rn(o) && !fc(o)) {
    if (!r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1)
      return;
    Ks(r, o), (!e || !e.scope_.parent_) && qs(r, o);
  }
}
function qs(r, e, t = !1) {
  !r.parent_ && r.immer_.autoFreeze_ && r.canAutoFreeze_ && kd(e, t);
}
function S1(r, e) {
  const t = Array.isArray(r), n = {
    type_: t ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: e ? e.scope_ : qv(),
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
  let o = n, a = Pd;
  t && (o = [n], a = ea);
  const { revoke: s, proxy: l } = Proxy.revocable(o, a);
  return n.draft_ = l, n.revoke_ = s, l;
}
var Pd = {
  get(r, e) {
    if (e === yr)
      return r;
    const t = fo(r);
    if (!wu(t, e))
      return T1(r, t, e);
    const n = t[e];
    return r.finalized_ || !Rn(n) ? n : n === jl(r.base_, e) ? (Yl(r), r.copy_[e] = Tu(n, r)) : n;
  },
  has(r, e) {
    return e in fo(r);
  },
  ownKeys(r) {
    return Reflect.ownKeys(fo(r));
  },
  set(r, e, t) {
    const n = $v(fo(r), e);
    if (n != null && n.set)
      return n.set.call(r.draft_, t), !0;
    if (!r.modified_) {
      const o = jl(fo(r), e), a = o == null ? void 0 : o[yr];
      if (a && a.base_ === t)
        return r.copy_[e] = t, r.assigned_[e] = !1, !0;
      if (C1(t, o) && (t !== void 0 || wu(r.base_, e)))
        return !0;
      Yl(r), Su(r);
    }
    return r.copy_[e] === t && // special case: handle new props with value 'undefined'
    (t !== void 0 || e in r.copy_) || // special case: NaN
    Number.isNaN(t) && Number.isNaN(r.copy_[e]) || (r.copy_[e] = t, r.assigned_[e] = !0), !0;
  },
  deleteProperty(r, e) {
    return jl(r.base_, e) !== void 0 || e in r.base_ ? (r.assigned_[e] = !1, Yl(r), Su(r)) : delete r.assigned_[e], r.copy_ && delete r.copy_[e], !0;
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
    return ai(r.base_);
  },
  setPrototypeOf() {
    Gr(12);
  }
}, ea = {};
Xi(Pd, (r, e) => {
  ea[r] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
});
ea.deleteProperty = function(r, e) {
  return ea.set.call(this, r, e, void 0);
};
ea.set = function(r, e, t) {
  return Pd.set.call(this, r[0], e, t, r[0]);
};
function jl(r, e) {
  const t = r[yr];
  return (t ? fo(t) : r)[e];
}
function T1(r, e, t) {
  var o;
  const n = $v(e, t);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = n.get) == null ? void 0 : o.call(r.draft_)
  ) : void 0;
}
function $v(r, e) {
  if (!(e in r))
    return;
  let t = ai(r);
  for (; t; ) {
    const n = Object.getOwnPropertyDescriptor(t, e);
    if (n)
      return n;
    t = ai(t);
  }
}
function Su(r) {
  r.modified_ || (r.modified_ = !0, r.parent_ && Su(r.parent_));
}
function Yl(r) {
  r.copy_ || (r.copy_ = Eu(
    r.base_,
    r.scope_.immer_.useStrictShallowCopy_
  ));
}
var I1 = class {
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
      if (Rn(e)) {
        const a = Tg(this), s = Tu(e, void 0);
        let l = !0;
        try {
          o = t(s), l = !1;
        } finally {
          l ? bu(a) : _u(a);
        }
        return Sg(a, n), Ig(o, a);
      } else if (!e || typeof e != "object") {
        if (o = t(e), o === void 0 && (o = e), o === Hv && (o = void 0), this.autoFreeze_ && kd(o, !0), n) {
          const a = [], s = [];
          So("Patches").generateReplacementPatches_(e, o, a, s), n(a, s);
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
    Rn(r) || Gr(8), Wn(r) && (r = Gv(r));
    const e = Tg(this), t = Tu(r, void 0);
    return t[yr].isManual_ = !0, _u(e), t;
  }
  finishDraft(r, e) {
    const t = r && r[yr];
    (!t || !t.isManual_) && Gr(9);
    const { scope_: n } = t;
    return Sg(n, e), Ig(void 0, n);
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
    const n = So("Patches").applyPatches_;
    return Wn(r) ? n(r, e) : this.produce(
      r,
      (o) => n(o, e)
    );
  }
};
function Tu(r, e) {
  const t = uc(r) ? So("MapSet").proxyMap_(r, e) : dc(r) ? So("MapSet").proxySet_(r, e) : S1(r, e);
  return (e ? e.scope_ : qv()).drafts_.push(t), t;
}
function Gv(r) {
  return Wn(r) || Gr(10, r), zv(r);
}
function zv(r) {
  if (!Rn(r) || fc(r))
    return r;
  const e = r[yr];
  let t;
  if (e) {
    if (!e.modified_)
      return e.base_;
    e.finalized_ = !0, t = Eu(r, e.scope_.immer_.useStrictShallowCopy_);
  } else
    t = Eu(r, !0);
  return Xi(t, (n, o) => {
    Kv(t, n, zv(o));
  }), e && (e.finalized_ = !1), t;
}
var Cr = new I1(), Vv = Cr.produce;
Cr.produceWithPatches.bind(
  Cr
);
Cr.setAutoFreeze.bind(Cr);
Cr.setUseStrictShallowCopy.bind(Cr);
Cr.applyPatches.bind(Cr);
Cr.createDraft.bind(Cr);
Cr.finishDraft.bind(Cr);
function A1(r, e = `expected a function, instead received ${typeof r}`) {
  if (typeof r != "function")
    throw new TypeError(e);
}
function R1(r, e = `expected an object, instead received ${typeof r}`) {
  if (typeof r != "object")
    throw new TypeError(e);
}
function k1(r, e = "expected all items to be functions, instead received the following types: ") {
  if (!r.every((t) => typeof t == "function")) {
    const t = r.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${e}[${t}]`);
  }
}
var Rg = (r) => Array.isArray(r) ? r : [r];
function P1(r) {
  const e = Array.isArray(r[0]) ? r[0] : r;
  return k1(
    e,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), e;
}
function N1(r, e) {
  const t = [], { length: n } = r;
  for (let o = 0; o < n; o++)
    t.push(r[o].apply(null, e));
  return t;
}
var O1 = class {
  constructor(r) {
    this.value = r;
  }
  deref() {
    return this.value;
  }
}, M1 = typeof WeakRef < "u" ? WeakRef : O1, x1 = 0, kg = 1;
function us() {
  return {
    s: x1,
    v: void 0,
    o: null,
    p: null
  };
}
function Nd(r, e = {}) {
  let t = us();
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
        _ === void 0 ? (l = us(), E.set(C, l)) : l = _;
      } else {
        let E = l.p;
        E === null && (l.p = E = /* @__PURE__ */ new Map());
        const _ = E.get(C);
        _ === void 0 ? (l = us(), E.set(C, l)) : l = _;
      }
    }
    const f = l;
    let h;
    if (l.s === kg ? h = l.v : (h = r.apply(null, arguments), a++), f.s = kg, n) {
      const m = ((p = o == null ? void 0 : o.deref) == null ? void 0 : p.call(o)) ?? o;
      m != null && n(m, h) && (h = m, a !== 0 && a--), o = typeof h == "object" && h !== null || typeof h == "function" ? new M1(h) : h;
    }
    return f.v = h, h;
  }
  return s.clearCache = () => {
    t = us(), s.resetResultsCount();
  }, s.resultsCount = () => a, s.resetResultsCount = () => {
    a = 0;
  }, s;
}
function Wv(r, ...e) {
  const t = typeof r == "function" ? {
    memoize: r,
    memoizeOptions: e
  } : r, n = (...o) => {
    let a = 0, s = 0, l, u = {}, f = o.pop();
    typeof f == "object" && (u = f, f = o.pop()), A1(
      f,
      `createSelector expects an output function after the inputs, but received: [${typeof f}]`
    );
    const h = {
      ...t,
      ...u
    }, {
      memoize: p,
      memoizeOptions: m = [],
      argsMemoize: v = Nd,
      argsMemoizeOptions: C = [],
      devModeChecks: E = {}
    } = h, _ = Rg(m), A = Rg(C), R = P1(o), S = p(function() {
      return a++, f.apply(
        null,
        arguments
      );
    }, ..._), I = v(function() {
      s++;
      const L = N1(
        R,
        arguments
      );
      return l = S.apply(null, L), l;
    }, ...A);
    return Object.assign(I, {
      resultFunc: f,
      memoizedResultFunc: S,
      dependencies: R,
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
var pa = /* @__PURE__ */ Wv(Nd), L1 = Object.assign(
  (r, e = pa) => {
    R1(
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
  { withTypes: () => L1 }
);
function jv(r) {
  return ({ dispatch: t, getState: n }) => (o) => (a) => typeof a == "function" ? a(t, n, r) : o(a);
}
var D1 = jv(), U1 = jv, F1 = (...r) => {
  const e = Wv(...r), t = Object.assign((...n) => {
    const o = e(...n), a = (s, ...l) => o(Wn(s) ? Gv(s) : s, ...l);
    return Object.assign(a, o), a;
  }, {
    withTypes: () => t
  });
  return t;
};
F1(Nd);
var H1 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Bs : Bs.apply(null, arguments);
}, B1 = (r) => r && typeof r.match == "function";
function an(r, e) {
  function t(...n) {
    if (e) {
      let o = e(...n);
      if (!o)
        throw new Error(or(0));
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
  return t.toString = () => `${r}`, t.type = r, t.match = (n) => v1(n) && n.type === r, t;
}
var Yv = class Li extends Array {
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, Li.prototype);
  }
  static get [Symbol.species]() {
    return Li;
  }
  concat(...e) {
    return super.concat.apply(this, e);
  }
  prepend(...e) {
    return e.length === 1 && Array.isArray(e[0]) ? new Li(...e[0].concat(this)) : new Li(...e.concat(this));
  }
};
function Pg(r) {
  return Rn(r) ? Vv(r, () => {
  }) : r;
}
function Ng(r, e, t) {
  if (r.has(e)) {
    let o = r.get(e);
    return t.update && (o = t.update(o, e, r), r.set(e, o)), o;
  }
  if (!t.insert)
    throw new Error(or(10));
  const n = t.insert(e, r);
  return r.set(e, n), n;
}
function K1(r) {
  return typeof r == "boolean";
}
var q1 = () => function(e) {
  const {
    thunk: t = !0,
    immutableCheck: n = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: a = !0
  } = e ?? {};
  let s = new Yv();
  return t && (K1(t) ? s.push(D1) : s.push(U1(t.extraArgument))), s;
}, $1 = "RTK_autoBatch", Qv = (r) => (e) => {
  setTimeout(e, r);
}, G1 = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Qv(10), z1 = (r = {
  type: "raf"
}) => (e) => (...t) => {
  const n = e(...t);
  let o = !0, a = !1, s = !1;
  const l = /* @__PURE__ */ new Set(), u = r.type === "tick" ? queueMicrotask : r.type === "raf" ? G1 : r.type === "callback" ? r.queueNotification : Qv(r.timeout), f = () => {
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
        return o = !((p = h == null ? void 0 : h.meta) != null && p[$1]), a = !o, a && (s || (s = !0, u(f))), n.dispatch(h);
      } finally {
        o = !0;
      }
    }
  });
}, V1 = (r) => function(t) {
  const {
    autoBatch: n = !0
  } = t ?? {};
  let o = new Yv(r);
  return n && o.push(z1(typeof n == "object" ? n : void 0)), o;
}, W1 = !0;
function j1(r) {
  const e = q1(), {
    reducer: t = void 0,
    middleware: n,
    devTools: o = !0,
    preloadedState: a = void 0,
    enhancers: s = void 0
  } = r || {};
  let l;
  if (typeof t == "function")
    l = t;
  else if (Rd(t))
    l = g1(t);
  else
    throw new Error(or(1));
  let u;
  typeof n == "function" ? u = n(e) : u = e();
  let f = Bs;
  o && (f = H1({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !W1,
    ...typeof o == "object" && o
  }));
  const h = m1(...u), p = V1(h);
  let m = typeof s == "function" ? s(p) : p();
  const v = f(...m);
  return Fv(l, a, v);
}
function Jv(r) {
  const e = {}, t = [];
  let n;
  const o = {
    addCase(a, s) {
      const l = typeof a == "string" ? a : a.type;
      if (!l)
        throw new Error(or(28));
      if (l in e)
        throw new Error(or(29));
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
function Y1(r) {
  return typeof r == "function";
}
function Q1(r, e) {
  let [t, n, o] = Jv(e), a;
  if (Y1(r))
    a = () => Pg(r());
  else {
    const l = Pg(r);
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
          if (Rn(h))
            return Vv(h, (m) => p(m, u));
          {
            const m = p(h, u);
            if (m === void 0) {
              if (h === null)
                return h;
              throw new Error(or(9));
            }
            return m;
          }
        }
      return h;
    }, l);
  }
  return s.getInitialState = a, s;
}
var J1 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Xv = (r = 21) => {
  let e = "", t = r;
  for (; t--; )
    e += J1[Math.random() * 64 | 0];
  return e;
}, X1 = (r, e) => B1(r) ? r.match(e) : r(e);
function Z1(...r) {
  return (e) => r.some((t) => X1(t, e));
}
var eO = ["name", "message", "stack", "code"], Ql = class {
  constructor(r, e) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Vt(this, "_type");
    this.payload = r, this.meta = e;
  }
}, Og = class {
  constructor(r, e) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Vt(this, "_type");
    this.payload = r, this.meta = e;
  }
}, tO = (r) => {
  if (typeof r == "object" && r !== null) {
    const e = {};
    for (const t of eO)
      typeof r[t] == "string" && (e[t] = r[t]);
    return e;
  }
  return {
    message: String(r)
  };
}, ui = /* @__PURE__ */ (() => {
  function r(e, t, n) {
    const o = an(e + "/fulfilled", (u, f, h, p) => ({
      payload: u,
      meta: {
        ...p || {},
        arg: h,
        requestId: f,
        requestStatus: "fulfilled"
      }
    })), a = an(e + "/pending", (u, f, h) => ({
      payload: void 0,
      meta: {
        ...h || {},
        arg: f,
        requestId: u,
        requestStatus: "pending"
      }
    })), s = an(e + "/rejected", (u, f, h, p, m) => ({
      payload: p,
      error: (n && n.serializeError || tO)(u || "Rejected"),
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
        const m = n != null && n.idGenerator ? n.idGenerator(u) : Xv(), v = new AbortController();
        let C, E;
        function _(R) {
          E = R, v.abort();
        }
        const A = async function() {
          var I, O;
          let R;
          try {
            let L = (I = n == null ? void 0 : n.condition) == null ? void 0 : I.call(n, u, {
              getState: h,
              extra: p
            });
            if (nO(L) && (L = await L), L === !1 || v.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const H = new Promise((U, Q) => {
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
            }))), R = await Promise.race([H, Promise.resolve(t(u, {
              dispatch: f,
              getState: h,
              extra: p,
              requestId: m,
              signal: v.signal,
              abort: _,
              rejectWithValue: (U, Q) => new Ql(U, Q),
              fulfillWithValue: (U, Q) => new Og(U, Q)
            })).then((U) => {
              if (U instanceof Ql)
                throw U;
              return U instanceof Og ? o(U.payload, m, u, U.meta) : o(U, m, u);
            })]);
          } catch (L) {
            R = L instanceof Ql ? s(null, m, u, L.payload, L.meta) : s(L, m, u);
          } finally {
            C && v.signal.removeEventListener("abort", C);
          }
          return n && !n.dispatchConditionRejection && s.match(R) && R.meta.condition || f(R), R;
        }();
        return Object.assign(A, {
          abort: _,
          requestId: m,
          arg: u,
          unwrap() {
            return A.then(rO);
          }
        });
      };
    }
    return Object.assign(l, {
      pending: a,
      rejected: s,
      fulfilled: o,
      settled: Z1(s, o),
      typePrefix: e
    });
  }
  return r.withTypes = () => r, r;
})();
function rO(r) {
  if (r.meta && r.meta.rejectedWithValue)
    throw r.payload;
  if (r.error)
    throw r.error;
  return r.payload;
}
function nO(r) {
  return r !== null && typeof r == "object" && typeof r.then == "function";
}
var oO = Symbol.for("rtk-slice-createasyncthunk");
function iO(r, e) {
  return `${r}/${e}`;
}
function aO({
  creators: r
} = {}) {
  var t;
  const e = (t = r == null ? void 0 : r.asyncThunk) == null ? void 0 : t[oO];
  return function(o) {
    const {
      name: a,
      reducerPath: s = a
    } = o;
    if (!a)
      throw new Error(or(11));
    typeof process < "u";
    const l = (typeof o.reducers == "function" ? o.reducers(cO()) : o.reducers) || {}, u = Object.keys(l), f = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, h = {
      addCase(S, I) {
        const O = typeof S == "string" ? S : S.type;
        if (!O)
          throw new Error(or(12));
        if (O in f.sliceCaseReducersByType)
          throw new Error(or(13));
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
        type: iO(a, S),
        createNotation: typeof o.reducers == "function"
      };
      uO(I) ? fO(O, I, h, e) : lO(O, I, h);
    });
    function p() {
      const [S = {}, I = [], O = void 0] = typeof o.extraReducers == "function" ? Jv(o.extraReducers) : [o.extraReducers], L = {
        ...S,
        ...f.sliceCaseReducersByType
      };
      return Q1(o.initialState, (H) => {
        for (let U in L)
          H.addCase(U, L[U]);
        for (let U of f.sliceMatchers)
          H.addMatcher(U.matcher, U.reducer);
        for (let U of I)
          H.addMatcher(U.matcher, U.reducer);
        O && H.addDefaultCase(O);
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
    function A(S, I = !1) {
      function O(H) {
        let U = H[S];
        return typeof U > "u" && I && (U = _()), U;
      }
      function L(H = m) {
        const U = Ng(v, I, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Ng(U, H, {
          insert: () => {
            const Q = {};
            for (const [Z, ae] of Object.entries(o.selectors ?? {}))
              Q[Z] = sO(ae, H, _, I);
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
    const R = {
      name: a,
      reducer: E,
      actions: f.actionCreators,
      caseReducers: f.sliceCaseReducersByName,
      getInitialState: _,
      ...A(s),
      injectInto(S, {
        reducerPath: I,
        ...O
      } = {}) {
        const L = I ?? s;
        return S.inject({
          reducerPath: L,
          reducer: E
        }, O), {
          ...R,
          ...A(L, !0)
        };
      }
    };
    return R;
  };
}
function sO(r, e, t, n) {
  function o(a, ...s) {
    let l = e(a);
    return typeof l > "u" && n && (l = t()), r(l, ...s);
  }
  return o.unwrapped = r, o;
}
var hc = aO();
function cO() {
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
function lO({
  type: r,
  reducerName: e,
  createNotation: t
}, n, o) {
  let a, s;
  if ("reducer" in n) {
    if (t && !dO(n))
      throw new Error(or(17));
    a = n.reducer, s = n.prepare;
  } else
    a = n;
  o.addCase(r, a).exposeCaseReducer(e, a).exposeAction(e, s ? an(r, s) : an(r));
}
function uO(r) {
  return r._reducerDefinitionType === "asyncThunk";
}
function dO(r) {
  return r._reducerDefinitionType === "reducerWithPrepare";
}
function fO({
  type: r,
  reducerName: e
}, t, n, o) {
  if (!o)
    throw new Error(or(18));
  const {
    payloadCreator: a,
    fulfilled: s,
    pending: l,
    rejected: u,
    settled: f,
    options: h
  } = t, p = o(r, a, h);
  n.exposeAction(e, p), s && n.addCase(p.fulfilled, s), l && n.addCase(p.pending, l), u && n.addCase(p.rejected, u), f && n.addMatcher(p.settled, f), n.exposeCaseReducer(e, {
    fulfilled: s || ds,
    pending: l || ds,
    rejected: u || ds,
    settled: f || ds
  });
}
function ds() {
}
var hO = (r, e) => {
  if (typeof r != "function")
    throw new Error(or(32));
}, Od = "listenerMiddleware", pO = (r) => {
  let {
    type: e,
    actionCreator: t,
    matcher: n,
    predicate: o,
    effect: a
  } = r;
  if (e)
    o = an(e).match;
  else if (t)
    e = t.type, o = t.match;
  else if (n)
    o = n;
  else if (!o)
    throw new Error(or(21));
  return hO(a), {
    predicate: o,
    type: e,
    effect: a
  };
}, gO = Object.assign((r) => {
  const {
    type: e,
    predicate: t,
    effect: n
  } = pO(r);
  return {
    id: Xv(),
    effect: n,
    type: e,
    predicate: t,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(or(22));
    }
  };
}, {
  withTypes: () => gO
}), mO = Object.assign(an(`${Od}/add`), {
  withTypes: () => mO
});
an(`${Od}/removeAll`);
var vO = Object.assign(an(`${Od}/remove`), {
  withTypes: () => vO
});
function or(r) {
  return `Minified Redux Toolkit error #${r}; visit https://redux-toolkit.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `;
}
const yO = {
  bsddApiEnvironment: null,
  mainDictionary: null,
  ifcDictionary: null,
  filterDictionaries: [],
  language: "en-GB",
  includeTestDictionaries: null
}, Mg = (r, e) => {
  r.language = e.payload, Rt.changeLanguage(e.payload);
}, Zv = an("settings/setSettings"), ey = hc({
  name: "settings",
  initialState: yO,
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
    setLanguage: Mg,
    setIncludeTestDictionaries: (r, e) => {
      r.includeTestDictionaries = e.payload;
    }
  },
  extraReducers: (r) => {
    r.addCase(
      Zv,
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
        JSON.stringify(e.bsddApiEnvironment) !== JSON.stringify(t) && (e.bsddApiEnvironment = t), JSON.stringify(e.mainDictionary) !== JSON.stringify(n) && (e.mainDictionary = n), JSON.stringify(e.ifcDictionary) !== JSON.stringify(o) && (e.ifcDictionary = o), JSON.stringify(e.filterDictionaries) !== JSON.stringify(a) && (e.filterDictionaries = a), JSON.stringify(e.language) !== JSON.stringify(s) && Mg(e, { payload: s, type: "setLanguage" }), JSON.stringify(e.includeTestDictionaries) !== JSON.stringify(l) && (e.includeTestDictionaries = l);
      }
    );
  }
}), Iu = (r) => {
  const e = r.settings.bsddApiEnvironment;
  return e !== null ? Uv[e] : null;
}, ty = pa(
  (r) => r.settings.mainDictionary,
  (r) => r.settings.ifcDictionary,
  (r) => r.settings.filterDictionaries,
  (r, e, t) => {
    const n = [r, e, ...t].filter(Boolean), o = new Map(n.map((a) => [a.ifcClassification.location, a]));
    return Array.from(o.values());
  }
), Md = (r) => r.settings.mainDictionary, ry = (r) => r.settings.language, CO = (r) => r.settings.includeTestDictionaries, ny = pa(
  ty,
  (r) => r.map((e) => e.ifcClassification.location)
), wO = pa(
  Md,
  (r) => r ? r.ifcClassification.location : null
);
ey.actions;
const EO = ey.reducer, Au = 500, bO = 500;
let Xo = null, fs = {};
const xg = {
  classes: {},
  dictionaries: {},
  dictionaryClasses: {},
  loaded: !1
}, _O = (r) => {
  const e = Iu(r);
  return e && (!Xo || Xo.baseUrl !== e) && (Xo = new Ji(e)), Xo;
}, Lg = ui("bsdd/fetchDictionaries", ({ bsddApiEnvironment: r, includeTestDictionaries: e }, t) => {
  if (!r)
    return t.rejectWithValue("No bsddApiEnvironment provided");
  const n = new Ji(r), o = bO;
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
}), SO = ui("bsdd/fetchDictionaries", async ({ bsddApiEnvironment: r, dictionaryUris: e }, t) => {
  if (!r || !e || e.length === 0)
    return t.rejectWithValue("Invalid parameters");
  const n = new Ji(r), o = {};
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
async function Dg(r, e, t, n) {
  console.log("languageCode", n);
  const o = await r.api.dictionaryV1ClassesList({
    Uri: e,
    UseNestedClasses: !1,
    ClassType: "Class",
    Offset: t,
    Limit: Au,
    languageCode: n || void 0
  });
  if (!o.ok)
    throw new Error(`HTTP error! status: ${o.status}`);
  return o.data;
}
const TO = async (r, e, t) => {
  const n = [];
  let o = 0;
  const a = await Dg(r, e, o, t), s = a.classesTotalCount;
  if (s == null)
    throw new Error("Total count is null or undefined");
  n.push(...a.classes ?? []);
  const l = [];
  for (o = Au; o < s; o += Au)
    l.push(Dg(r, e, o, t));
  return (await Promise.all(l)).forEach((f) => {
    n.push(...f.classes ?? []);
  }), n;
}, oy = ui(
  "bsdd/fetchDictionaryClasses",
  async ({ location: r, languageCode: e }, { getState: t, dispatch: n }) => {
    const o = t();
    if (o.bsdd.dictionaryClasses[r])
      return o.bsdd.dictionaryClasses[r];
    if (fs[r])
      return fs[r];
    const a = _O(o);
    if (!a)
      throw new Error("BsddApi is not initialized");
    const s = TO(a, r, e).then((l) => (n({ type: "bsdd/addDictionaryClasses", payload: { uri: r, data: l } }), l)).finally(() => {
      delete fs[r];
    });
    return fs[r] = s, s;
  }
), IO = ui(
  "bsdd/fetchAndStoreAllDictionaryClasses",
  async (r, { dispatch: e, rejectWithValue: t }) => {
    const { dictionaryUris: n, languageCode: o } = r;
    if (!n || n.length === 0)
      return t("No dictionary URIs provided");
    try {
      return await Promise.all(n.map((a) => e(oy({ location: a, languageCode: o })))), "Successfully fetched and stored all dictionary classes";
    } catch {
      return t("Failed to fetch dictionary classes");
    }
  }
), iy = ui(
  "bsdd/updateDictionaries",
  async (r) => r
), ay = hc({
  name: "bsdd",
  initialState: xg,
  reducers: {
    resetState: () => xg,
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
    r.addCase(Lg.pending, (e) => {
      e.loaded = !1;
    }).addCase(
      Lg.fulfilled,
      (e, t) => {
        e.dictionaries = t.payload, e.loaded = !0;
      }
    ).addCase(oy.rejected, (e, t) => {
      console.error("fetch dictionary classes failed", t.error), e.loaded = !0;
    }).addCase(iy.fulfilled, (e, t) => {
      const n = t.payload;
      e.dictionaries = Object.keys(e.dictionaries).filter((o) => n.includes(o)).reduce((o, a) => (o[a] = e.dictionaries[a], o), {});
    });
  }
});
ui("bsdd/fetchClass", async (r, { getState: e, dispatch: t }) => {
  const n = e(), o = Ft(ry);
  if (n.bsdd.classes[r])
    return n.bsdd.classes[r];
  if (!Xo)
    throw new Error("BsddApi is not initialized");
  const a = await Xo.api.classV1List({
    Uri: r,
    IncludeClassProperties: !0,
    IncludeChildClassReferences: !0,
    IncludeClassRelations: !0,
    // IncludeReverseRelations: true,
    languageCode: o || void 0
  });
  if (!a.ok)
    throw new Error(`HTTP error! status: ${a.status}`);
  const { data: s } = a;
  return t({ type: "bsdd/addClass", payload: { uri: r, data: s } }), s;
});
const sy = (r) => r.bsdd.dictionaries, AO = (r) => r.bsdd.dictionaryClasses;
ay.actions;
const RO = ay.reducer;
function kO({ callback: r, classifications: e, propertySetMap: t, ifcEntity: n }) {
  const { t: o } = Ws(), a = Ft(sy);
  function s(h) {
    if (h in a) {
      const p = a[h];
      if (p)
        return u1(p);
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
        var R;
        if ((R = _ == null ? void 0 : _.dictionaryUri) != null && R.includes("https://identifier.buildingsmart.org/uri/buildingsmart/ifc/")) {
          const { type: S, predefinedType: I } = d1(_.code);
          return { ...E, type: S, predefinedType: I };
        }
        const A = l(_);
        return A ? { ...E, hasAssociations: [...E.hasAssociations || [], A] } : E;
      }, v),
      isDefinedBy: Object.values(m).length ? Object.values(m) : []
    };
  }
  const f = () => {
    const h = u(n, e, t);
    console.log(h), r(h);
  };
  return /* @__PURE__ */ we.jsx(ha, { color: "gray", fullWidth: !0, onClick: f, variant: "filled", children: o("apply") });
}
var $s = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
$s.exports;
(function(r, e) {
  (function() {
    var t, n = "4.17.21", o = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", s = "Expected a function", l = "Invalid `variable` option passed into `_.template`", u = "__lodash_hash_undefined__", f = 500, h = "__lodash_placeholder__", p = 1, m = 2, v = 4, C = 1, E = 2, _ = 1, A = 2, R = 4, S = 8, I = 16, O = 32, L = 64, H = 128, U = 256, Q = 512, Z = 30, ae = "...", Y = 800, ue = 16, ee = 1, he = 2, J = 3, ie = 1 / 0, ne = 9007199254740991, Pe = 17976931348623157e292, Qe = 0 / 0, ot = 4294967295, dt = ot - 1, Yr = ot >>> 1, ln = [
      ["ary", H],
      ["bind", _],
      ["bindKey", A],
      ["curry", S],
      ["curryRight", I],
      ["flip", Q],
      ["partial", O],
      ["partialRight", L],
      ["rearg", U]
    ], Yt = "[object Arguments]", ar = "[object Array]", un = "[object AsyncFunction]", sr = "[object Boolean]", Ur = "[object Date]", dn = "[object DOMException]", qt = "[object Error]", wr = "[object Function]", Ye = "[object GeneratorFunction]", Pt = "[object Map]", Nt = "[object Number]", Nn = "[object Null]", gt = "[object Object]", Ot = "[object Promise]", Zn = "[object Proxy]", Fr = "[object RegExp]", bt = "[object Set]", tt = "[object String]", Qr = "[object Symbol]", hy = "[object Undefined]", di = "[object WeakMap]", py = "[object WeakSet]", fi = "[object ArrayBuffer]", Ro = "[object DataView]", pc = "[object Float32Array]", gc = "[object Float64Array]", mc = "[object Int8Array]", vc = "[object Int16Array]", yc = "[object Int32Array]", Cc = "[object Uint8Array]", wc = "[object Uint8ClampedArray]", Ec = "[object Uint16Array]", bc = "[object Uint32Array]", gy = /\b__p \+= '';/g, my = /\b(__p \+=) '' \+/g, vy = /(__e\(.*?\)|\b__t\)) \+\n'';/g, xd = /&(?:amp|lt|gt|quot|#39);/g, Ld = /[&<>"']/g, yy = RegExp(xd.source), Cy = RegExp(Ld.source), wy = /<%-([\s\S]+?)%>/g, Ey = /<%([\s\S]+?)%>/g, Dd = /<%=([\s\S]+?)%>/g, by = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, _y = /^\w*$/, Sy = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _c = /[\\^$.*+?()[\]{}|]/g, Ty = RegExp(_c.source), Sc = /^\s+/, Iy = /\s/, Ay = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Ry = /\{\n\/\* \[wrapped with (.+)\] \*/, ky = /,? & /, Py = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Ny = /[()=,{}\[\]\/\s]/, Oy = /\\(\\)?/g, My = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ud = /\w*$/, xy = /^[-+]0x[0-9a-f]+$/i, Ly = /^0b[01]+$/i, Dy = /^\[object .+?Constructor\]$/, Uy = /^0o[0-7]+$/i, Fy = /^(?:0|[1-9]\d*)$/, Hy = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ga = /($^)/, By = /['\n\r\u2028\u2029\\]/g, ma = "\\ud800-\\udfff", Ky = "\\u0300-\\u036f", qy = "\\ufe20-\\ufe2f", $y = "\\u20d0-\\u20ff", Fd = Ky + qy + $y, Hd = "\\u2700-\\u27bf", Bd = "a-z\\xdf-\\xf6\\xf8-\\xff", Gy = "\\xac\\xb1\\xd7\\xf7", zy = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Vy = "\\u2000-\\u206f", Wy = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Kd = "A-Z\\xc0-\\xd6\\xd8-\\xde", qd = "\\ufe0e\\ufe0f", $d = Gy + zy + Vy + Wy, Tc = "['’]", jy = "[" + ma + "]", Gd = "[" + $d + "]", va = "[" + Fd + "]", zd = "\\d+", Yy = "[" + Hd + "]", Vd = "[" + Bd + "]", Wd = "[^" + ma + $d + zd + Hd + Bd + Kd + "]", Ic = "\\ud83c[\\udffb-\\udfff]", Qy = "(?:" + va + "|" + Ic + ")", jd = "[^" + ma + "]", Ac = "(?:\\ud83c[\\udde6-\\uddff]){2}", Rc = "[\\ud800-\\udbff][\\udc00-\\udfff]", ko = "[" + Kd + "]", Yd = "\\u200d", Qd = "(?:" + Vd + "|" + Wd + ")", Jy = "(?:" + ko + "|" + Wd + ")", Jd = "(?:" + Tc + "(?:d|ll|m|re|s|t|ve))?", Xd = "(?:" + Tc + "(?:D|LL|M|RE|S|T|VE))?", Zd = Qy + "?", ef = "[" + qd + "]?", Xy = "(?:" + Yd + "(?:" + [jd, Ac, Rc].join("|") + ")" + ef + Zd + ")*", Zy = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", eC = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", tf = ef + Zd + Xy, tC = "(?:" + [Yy, Ac, Rc].join("|") + ")" + tf, rC = "(?:" + [jd + va + "?", va, Ac, Rc, jy].join("|") + ")", nC = RegExp(Tc, "g"), oC = RegExp(va, "g"), kc = RegExp(Ic + "(?=" + Ic + ")|" + rC + tf, "g"), iC = RegExp([
      ko + "?" + Vd + "+" + Jd + "(?=" + [Gd, ko, "$"].join("|") + ")",
      Jy + "+" + Xd + "(?=" + [Gd, ko + Qd, "$"].join("|") + ")",
      ko + "?" + Qd + "+" + Jd,
      ko + "+" + Xd,
      eC,
      Zy,
      zd,
      tC
    ].join("|"), "g"), aC = RegExp("[" + Yd + ma + Fd + qd + "]"), sC = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, cC = [
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
    ], lC = -1, rt = {};
    rt[pc] = rt[gc] = rt[mc] = rt[vc] = rt[yc] = rt[Cc] = rt[wc] = rt[Ec] = rt[bc] = !0, rt[Yt] = rt[ar] = rt[fi] = rt[sr] = rt[Ro] = rt[Ur] = rt[qt] = rt[wr] = rt[Pt] = rt[Nt] = rt[gt] = rt[Fr] = rt[bt] = rt[tt] = rt[di] = !1;
    var Xe = {};
    Xe[Yt] = Xe[ar] = Xe[fi] = Xe[Ro] = Xe[sr] = Xe[Ur] = Xe[pc] = Xe[gc] = Xe[mc] = Xe[vc] = Xe[yc] = Xe[Pt] = Xe[Nt] = Xe[gt] = Xe[Fr] = Xe[bt] = Xe[tt] = Xe[Qr] = Xe[Cc] = Xe[wc] = Xe[Ec] = Xe[bc] = !0, Xe[qt] = Xe[wr] = Xe[di] = !1;
    var uC = {
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
    }, dC = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, fC = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, hC = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, pC = parseFloat, gC = parseInt, rf = typeof Ri == "object" && Ri && Ri.Object === Object && Ri, mC = typeof self == "object" && self && self.Object === Object && self, _t = rf || mC || Function("return this")(), Pc = e && !e.nodeType && e, eo = Pc && !0 && r && !r.nodeType && r, nf = eo && eo.exports === Pc, Nc = nf && rf.process, Er = function() {
      try {
        var M = eo && eo.require && eo.require("util").types;
        return M || Nc && Nc.binding && Nc.binding("util");
      } catch {
      }
    }(), of = Er && Er.isArrayBuffer, af = Er && Er.isDate, sf = Er && Er.isMap, cf = Er && Er.isRegExp, lf = Er && Er.isSet, uf = Er && Er.isTypedArray;
    function cr(M, B, D) {
      switch (D.length) {
        case 0:
          return M.call(B);
        case 1:
          return M.call(B, D[0]);
        case 2:
          return M.call(B, D[0], D[1]);
        case 3:
          return M.call(B, D[0], D[1], D[2]);
      }
      return M.apply(B, D);
    }
    function vC(M, B, D, se) {
      for (var Ae = -1, qe = M == null ? 0 : M.length; ++Ae < qe; ) {
        var mt = M[Ae];
        B(se, mt, D(mt), M);
      }
      return se;
    }
    function br(M, B) {
      for (var D = -1, se = M == null ? 0 : M.length; ++D < se && B(M[D], D, M) !== !1; )
        ;
      return M;
    }
    function yC(M, B) {
      for (var D = M == null ? 0 : M.length; D-- && B(M[D], D, M) !== !1; )
        ;
      return M;
    }
    function df(M, B) {
      for (var D = -1, se = M == null ? 0 : M.length; ++D < se; )
        if (!B(M[D], D, M))
          return !1;
      return !0;
    }
    function On(M, B) {
      for (var D = -1, se = M == null ? 0 : M.length, Ae = 0, qe = []; ++D < se; ) {
        var mt = M[D];
        B(mt, D, M) && (qe[Ae++] = mt);
      }
      return qe;
    }
    function ya(M, B) {
      var D = M == null ? 0 : M.length;
      return !!D && Po(M, B, 0) > -1;
    }
    function Oc(M, B, D) {
      for (var se = -1, Ae = M == null ? 0 : M.length; ++se < Ae; )
        if (D(B, M[se]))
          return !0;
      return !1;
    }
    function nt(M, B) {
      for (var D = -1, se = M == null ? 0 : M.length, Ae = Array(se); ++D < se; )
        Ae[D] = B(M[D], D, M);
      return Ae;
    }
    function Mn(M, B) {
      for (var D = -1, se = B.length, Ae = M.length; ++D < se; )
        M[Ae + D] = B[D];
      return M;
    }
    function Mc(M, B, D, se) {
      var Ae = -1, qe = M == null ? 0 : M.length;
      for (se && qe && (D = M[++Ae]); ++Ae < qe; )
        D = B(D, M[Ae], Ae, M);
      return D;
    }
    function CC(M, B, D, se) {
      var Ae = M == null ? 0 : M.length;
      for (se && Ae && (D = M[--Ae]); Ae--; )
        D = B(D, M[Ae], Ae, M);
      return D;
    }
    function xc(M, B) {
      for (var D = -1, se = M == null ? 0 : M.length; ++D < se; )
        if (B(M[D], D, M))
          return !0;
      return !1;
    }
    var wC = Lc("length");
    function EC(M) {
      return M.split("");
    }
    function bC(M) {
      return M.match(Py) || [];
    }
    function ff(M, B, D) {
      var se;
      return D(M, function(Ae, qe, mt) {
        if (B(Ae, qe, mt))
          return se = qe, !1;
      }), se;
    }
    function Ca(M, B, D, se) {
      for (var Ae = M.length, qe = D + (se ? 1 : -1); se ? qe-- : ++qe < Ae; )
        if (B(M[qe], qe, M))
          return qe;
      return -1;
    }
    function Po(M, B, D) {
      return B === B ? xC(M, B, D) : Ca(M, hf, D);
    }
    function _C(M, B, D, se) {
      for (var Ae = D - 1, qe = M.length; ++Ae < qe; )
        if (se(M[Ae], B))
          return Ae;
      return -1;
    }
    function hf(M) {
      return M !== M;
    }
    function pf(M, B) {
      var D = M == null ? 0 : M.length;
      return D ? Uc(M, B) / D : Qe;
    }
    function Lc(M) {
      return function(B) {
        return B == null ? t : B[M];
      };
    }
    function Dc(M) {
      return function(B) {
        return M == null ? t : M[B];
      };
    }
    function gf(M, B, D, se, Ae) {
      return Ae(M, function(qe, mt, Je) {
        D = se ? (se = !1, qe) : B(D, qe, mt, Je);
      }), D;
    }
    function SC(M, B) {
      var D = M.length;
      for (M.sort(B); D--; )
        M[D] = M[D].value;
      return M;
    }
    function Uc(M, B) {
      for (var D, se = -1, Ae = M.length; ++se < Ae; ) {
        var qe = B(M[se]);
        qe !== t && (D = D === t ? qe : D + qe);
      }
      return D;
    }
    function Fc(M, B) {
      for (var D = -1, se = Array(M); ++D < M; )
        se[D] = B(D);
      return se;
    }
    function TC(M, B) {
      return nt(B, function(D) {
        return [D, M[D]];
      });
    }
    function mf(M) {
      return M && M.slice(0, wf(M) + 1).replace(Sc, "");
    }
    function lr(M) {
      return function(B) {
        return M(B);
      };
    }
    function Hc(M, B) {
      return nt(B, function(D) {
        return M[D];
      });
    }
    function hi(M, B) {
      return M.has(B);
    }
    function vf(M, B) {
      for (var D = -1, se = M.length; ++D < se && Po(B, M[D], 0) > -1; )
        ;
      return D;
    }
    function yf(M, B) {
      for (var D = M.length; D-- && Po(B, M[D], 0) > -1; )
        ;
      return D;
    }
    function IC(M, B) {
      for (var D = M.length, se = 0; D--; )
        M[D] === B && ++se;
      return se;
    }
    var AC = Dc(uC), RC = Dc(dC);
    function kC(M) {
      return "\\" + hC[M];
    }
    function PC(M, B) {
      return M == null ? t : M[B];
    }
    function No(M) {
      return aC.test(M);
    }
    function NC(M) {
      return sC.test(M);
    }
    function OC(M) {
      for (var B, D = []; !(B = M.next()).done; )
        D.push(B.value);
      return D;
    }
    function Bc(M) {
      var B = -1, D = Array(M.size);
      return M.forEach(function(se, Ae) {
        D[++B] = [Ae, se];
      }), D;
    }
    function Cf(M, B) {
      return function(D) {
        return M(B(D));
      };
    }
    function xn(M, B) {
      for (var D = -1, se = M.length, Ae = 0, qe = []; ++D < se; ) {
        var mt = M[D];
        (mt === B || mt === h) && (M[D] = h, qe[Ae++] = D);
      }
      return qe;
    }
    function wa(M) {
      var B = -1, D = Array(M.size);
      return M.forEach(function(se) {
        D[++B] = se;
      }), D;
    }
    function MC(M) {
      var B = -1, D = Array(M.size);
      return M.forEach(function(se) {
        D[++B] = [se, se];
      }), D;
    }
    function xC(M, B, D) {
      for (var se = D - 1, Ae = M.length; ++se < Ae; )
        if (M[se] === B)
          return se;
      return -1;
    }
    function LC(M, B, D) {
      for (var se = D + 1; se--; )
        if (M[se] === B)
          return se;
      return se;
    }
    function Oo(M) {
      return No(M) ? UC(M) : wC(M);
    }
    function Hr(M) {
      return No(M) ? FC(M) : EC(M);
    }
    function wf(M) {
      for (var B = M.length; B-- && Iy.test(M.charAt(B)); )
        ;
      return B;
    }
    var DC = Dc(fC);
    function UC(M) {
      for (var B = kc.lastIndex = 0; kc.test(M); )
        ++B;
      return B;
    }
    function FC(M) {
      return M.match(kc) || [];
    }
    function HC(M) {
      return M.match(iC) || [];
    }
    var BC = function M(B) {
      B = B == null ? _t : Mo.defaults(_t.Object(), B, Mo.pick(_t, cC));
      var D = B.Array, se = B.Date, Ae = B.Error, qe = B.Function, mt = B.Math, Je = B.Object, Kc = B.RegExp, KC = B.String, _r = B.TypeError, Ea = D.prototype, qC = qe.prototype, xo = Je.prototype, ba = B["__core-js_shared__"], _a = qC.toString, We = xo.hasOwnProperty, $C = 0, Ef = function() {
        var i = /[^.]+$/.exec(ba && ba.keys && ba.keys.IE_PROTO || "");
        return i ? "Symbol(src)_1." + i : "";
      }(), Sa = xo.toString, GC = _a.call(Je), zC = _t._, VC = Kc(
        "^" + _a.call(We).replace(_c, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ta = nf ? B.Buffer : t, Ln = B.Symbol, Ia = B.Uint8Array, bf = Ta ? Ta.allocUnsafe : t, Aa = Cf(Je.getPrototypeOf, Je), _f = Je.create, Sf = xo.propertyIsEnumerable, Ra = Ea.splice, Tf = Ln ? Ln.isConcatSpreadable : t, pi = Ln ? Ln.iterator : t, to = Ln ? Ln.toStringTag : t, ka = function() {
        try {
          var i = ao(Je, "defineProperty");
          return i({}, "", {}), i;
        } catch {
        }
      }(), WC = B.clearTimeout !== _t.clearTimeout && B.clearTimeout, jC = se && se.now !== _t.Date.now && se.now, YC = B.setTimeout !== _t.setTimeout && B.setTimeout, Pa = mt.ceil, Na = mt.floor, qc = Je.getOwnPropertySymbols, QC = Ta ? Ta.isBuffer : t, If = B.isFinite, JC = Ea.join, XC = Cf(Je.keys, Je), vt = mt.max, Mt = mt.min, ZC = se.now, ew = B.parseInt, Af = mt.random, tw = Ea.reverse, $c = ao(B, "DataView"), gi = ao(B, "Map"), Gc = ao(B, "Promise"), Lo = ao(B, "Set"), mi = ao(B, "WeakMap"), vi = ao(Je, "create"), Oa = mi && new mi(), Do = {}, rw = so($c), nw = so(gi), ow = so(Gc), iw = so(Lo), aw = so(mi), Ma = Ln ? Ln.prototype : t, yi = Ma ? Ma.valueOf : t, Rf = Ma ? Ma.toString : t;
      function w(i) {
        if (st(i) && !ke(i) && !(i instanceof Ue)) {
          if (i instanceof Sr)
            return i;
          if (We.call(i, "__wrapped__"))
            return kh(i);
        }
        return new Sr(i);
      }
      var Uo = function() {
        function i() {
        }
        return function(c) {
          if (!it(c))
            return {};
          if (_f)
            return _f(c);
          i.prototype = c;
          var d = new i();
          return i.prototype = t, d;
        };
      }();
      function xa() {
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
        escape: wy,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Ey,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Dd,
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
      }, w.prototype = xa.prototype, w.prototype.constructor = w, Sr.prototype = Uo(xa.prototype), Sr.prototype.constructor = Sr;
      function Ue(i) {
        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ot, this.__views__ = [];
      }
      function sw() {
        var i = new Ue(this.__wrapped__);
        return i.__actions__ = Qt(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = Qt(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = Qt(this.__views__), i;
      }
      function cw() {
        if (this.__filtered__) {
          var i = new Ue(this);
          i.__dir__ = -1, i.__filtered__ = !0;
        } else
          i = this.clone(), i.__dir__ *= -1;
        return i;
      }
      function lw() {
        var i = this.__wrapped__.value(), c = this.__dir__, d = ke(i), g = c < 0, y = d ? i.length : 0, b = EE(0, y, this.__views__), T = b.start, P = b.end, x = P - T, K = g ? P : T - 1, q = this.__iteratees__, V = q.length, te = 0, fe = Mt(x, this.__takeCount__);
        if (!d || !g && y == x && fe == x)
          return Xf(i, this.__actions__);
        var ye = [];
        e:
          for (; x-- && te < fe; ) {
            K += c;
            for (var Oe = -1, Ce = i[K]; ++Oe < V; ) {
              var Le = q[Oe], Fe = Le.iteratee, fr = Le.type, zt = Fe(Ce);
              if (fr == he)
                Ce = zt;
              else if (!zt) {
                if (fr == ee)
                  continue e;
                break e;
              }
            }
            ye[te++] = Ce;
          }
        return ye;
      }
      Ue.prototype = Uo(xa.prototype), Ue.prototype.constructor = Ue;
      function ro(i) {
        var c = -1, d = i == null ? 0 : i.length;
        for (this.clear(); ++c < d; ) {
          var g = i[c];
          this.set(g[0], g[1]);
        }
      }
      function uw() {
        this.__data__ = vi ? vi(null) : {}, this.size = 0;
      }
      function dw(i) {
        var c = this.has(i) && delete this.__data__[i];
        return this.size -= c ? 1 : 0, c;
      }
      function fw(i) {
        var c = this.__data__;
        if (vi) {
          var d = c[i];
          return d === u ? t : d;
        }
        return We.call(c, i) ? c[i] : t;
      }
      function hw(i) {
        var c = this.__data__;
        return vi ? c[i] !== t : We.call(c, i);
      }
      function pw(i, c) {
        var d = this.__data__;
        return this.size += this.has(i) ? 0 : 1, d[i] = vi && c === t ? u : c, this;
      }
      ro.prototype.clear = uw, ro.prototype.delete = dw, ro.prototype.get = fw, ro.prototype.has = hw, ro.prototype.set = pw;
      function fn(i) {
        var c = -1, d = i == null ? 0 : i.length;
        for (this.clear(); ++c < d; ) {
          var g = i[c];
          this.set(g[0], g[1]);
        }
      }
      function gw() {
        this.__data__ = [], this.size = 0;
      }
      function mw(i) {
        var c = this.__data__, d = La(c, i);
        if (d < 0)
          return !1;
        var g = c.length - 1;
        return d == g ? c.pop() : Ra.call(c, d, 1), --this.size, !0;
      }
      function vw(i) {
        var c = this.__data__, d = La(c, i);
        return d < 0 ? t : c[d][1];
      }
      function yw(i) {
        return La(this.__data__, i) > -1;
      }
      function Cw(i, c) {
        var d = this.__data__, g = La(d, i);
        return g < 0 ? (++this.size, d.push([i, c])) : d[g][1] = c, this;
      }
      fn.prototype.clear = gw, fn.prototype.delete = mw, fn.prototype.get = vw, fn.prototype.has = yw, fn.prototype.set = Cw;
      function hn(i) {
        var c = -1, d = i == null ? 0 : i.length;
        for (this.clear(); ++c < d; ) {
          var g = i[c];
          this.set(g[0], g[1]);
        }
      }
      function ww() {
        this.size = 0, this.__data__ = {
          hash: new ro(),
          map: new (gi || fn)(),
          string: new ro()
        };
      }
      function Ew(i) {
        var c = Wa(this, i).delete(i);
        return this.size -= c ? 1 : 0, c;
      }
      function bw(i) {
        return Wa(this, i).get(i);
      }
      function _w(i) {
        return Wa(this, i).has(i);
      }
      function Sw(i, c) {
        var d = Wa(this, i), g = d.size;
        return d.set(i, c), this.size += d.size == g ? 0 : 1, this;
      }
      hn.prototype.clear = ww, hn.prototype.delete = Ew, hn.prototype.get = bw, hn.prototype.has = _w, hn.prototype.set = Sw;
      function no(i) {
        var c = -1, d = i == null ? 0 : i.length;
        for (this.__data__ = new hn(); ++c < d; )
          this.add(i[c]);
      }
      function Tw(i) {
        return this.__data__.set(i, u), this;
      }
      function Iw(i) {
        return this.__data__.has(i);
      }
      no.prototype.add = no.prototype.push = Tw, no.prototype.has = Iw;
      function Br(i) {
        var c = this.__data__ = new fn(i);
        this.size = c.size;
      }
      function Aw() {
        this.__data__ = new fn(), this.size = 0;
      }
      function Rw(i) {
        var c = this.__data__, d = c.delete(i);
        return this.size = c.size, d;
      }
      function kw(i) {
        return this.__data__.get(i);
      }
      function Pw(i) {
        return this.__data__.has(i);
      }
      function Nw(i, c) {
        var d = this.__data__;
        if (d instanceof fn) {
          var g = d.__data__;
          if (!gi || g.length < o - 1)
            return g.push([i, c]), this.size = ++d.size, this;
          d = this.__data__ = new hn(g);
        }
        return d.set(i, c), this.size = d.size, this;
      }
      Br.prototype.clear = Aw, Br.prototype.delete = Rw, Br.prototype.get = kw, Br.prototype.has = Pw, Br.prototype.set = Nw;
      function kf(i, c) {
        var d = ke(i), g = !d && co(i), y = !d && !g && Bn(i), b = !d && !g && !y && Ko(i), T = d || g || y || b, P = T ? Fc(i.length, KC) : [], x = P.length;
        for (var K in i)
          (c || We.call(i, K)) && !(T && // Safari 9 has enumerable `arguments.length` in strict mode.
          (K == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          y && (K == "offset" || K == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          b && (K == "buffer" || K == "byteLength" || K == "byteOffset") || // Skip index properties.
          vn(K, x))) && P.push(K);
        return P;
      }
      function Pf(i) {
        var c = i.length;
        return c ? i[tl(0, c - 1)] : t;
      }
      function Ow(i, c) {
        return ja(Qt(i), oo(c, 0, i.length));
      }
      function Mw(i) {
        return ja(Qt(i));
      }
      function zc(i, c, d) {
        (d !== t && !Kr(i[c], d) || d === t && !(c in i)) && pn(i, c, d);
      }
      function Ci(i, c, d) {
        var g = i[c];
        (!(We.call(i, c) && Kr(g, d)) || d === t && !(c in i)) && pn(i, c, d);
      }
      function La(i, c) {
        for (var d = i.length; d--; )
          if (Kr(i[d][0], c))
            return d;
        return -1;
      }
      function xw(i, c, d, g) {
        return Dn(i, function(y, b, T) {
          c(g, y, d(y), T);
        }), g;
      }
      function Nf(i, c) {
        return i && Xr(c, wt(c), i);
      }
      function Lw(i, c) {
        return i && Xr(c, Xt(c), i);
      }
      function pn(i, c, d) {
        c == "__proto__" && ka ? ka(i, c, {
          configurable: !0,
          enumerable: !0,
          value: d,
          writable: !0
        }) : i[c] = d;
      }
      function Vc(i, c) {
        for (var d = -1, g = c.length, y = D(g), b = i == null; ++d < g; )
          y[d] = b ? t : Il(i, c[d]);
        return y;
      }
      function oo(i, c, d) {
        return i === i && (d !== t && (i = i <= d ? i : d), c !== t && (i = i >= c ? i : c)), i;
      }
      function Tr(i, c, d, g, y, b) {
        var T, P = c & p, x = c & m, K = c & v;
        if (d && (T = y ? d(i, g, y, b) : d(i)), T !== t)
          return T;
        if (!it(i))
          return i;
        var q = ke(i);
        if (q) {
          if (T = _E(i), !P)
            return Qt(i, T);
        } else {
          var V = xt(i), te = V == wr || V == Ye;
          if (Bn(i))
            return th(i, P);
          if (V == gt || V == Yt || te && !y) {
            if (T = x || te ? {} : wh(i), !P)
              return x ? fE(i, Lw(T, i)) : dE(i, Nf(T, i));
          } else {
            if (!Xe[V])
              return y ? i : {};
            T = SE(i, V, P);
          }
        }
        b || (b = new Br());
        var fe = b.get(i);
        if (fe)
          return fe;
        b.set(i, T), Yh(i) ? i.forEach(function(Ce) {
          T.add(Tr(Ce, c, d, Ce, i, b));
        }) : Wh(i) && i.forEach(function(Ce, Le) {
          T.set(Le, Tr(Ce, c, d, Le, i, b));
        });
        var ye = K ? x ? fl : dl : x ? Xt : wt, Oe = q ? t : ye(i);
        return br(Oe || i, function(Ce, Le) {
          Oe && (Le = Ce, Ce = i[Le]), Ci(T, Le, Tr(Ce, c, d, Le, i, b));
        }), T;
      }
      function Dw(i) {
        var c = wt(i);
        return function(d) {
          return Of(d, i, c);
        };
      }
      function Of(i, c, d) {
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
      function Mf(i, c, d) {
        if (typeof i != "function")
          throw new _r(s);
        return Ii(function() {
          i.apply(t, d);
        }, c);
      }
      function wi(i, c, d, g) {
        var y = -1, b = ya, T = !0, P = i.length, x = [], K = c.length;
        if (!P)
          return x;
        d && (c = nt(c, lr(d))), g ? (b = Oc, T = !1) : c.length >= o && (b = hi, T = !1, c = new no(c));
        e:
          for (; ++y < P; ) {
            var q = i[y], V = d == null ? q : d(q);
            if (q = g || q !== 0 ? q : 0, T && V === V) {
              for (var te = K; te--; )
                if (c[te] === V)
                  continue e;
              x.push(q);
            } else
              b(c, V, g) || x.push(q);
          }
        return x;
      }
      var Dn = ah(Jr), xf = ah(jc, !0);
      function Uw(i, c) {
        var d = !0;
        return Dn(i, function(g, y, b) {
          return d = !!c(g, y, b), d;
        }), d;
      }
      function Da(i, c, d) {
        for (var g = -1, y = i.length; ++g < y; ) {
          var b = i[g], T = c(b);
          if (T != null && (P === t ? T === T && !dr(T) : d(T, P)))
            var P = T, x = b;
        }
        return x;
      }
      function Fw(i, c, d, g) {
        var y = i.length;
        for (d = Ne(d), d < 0 && (d = -d > y ? 0 : y + d), g = g === t || g > y ? y : Ne(g), g < 0 && (g += y), g = d > g ? 0 : Jh(g); d < g; )
          i[d++] = c;
        return i;
      }
      function Lf(i, c) {
        var d = [];
        return Dn(i, function(g, y, b) {
          c(g, y, b) && d.push(g);
        }), d;
      }
      function St(i, c, d, g, y) {
        var b = -1, T = i.length;
        for (d || (d = IE), y || (y = []); ++b < T; ) {
          var P = i[b];
          c > 0 && d(P) ? c > 1 ? St(P, c - 1, d, g, y) : Mn(y, P) : g || (y[y.length] = P);
        }
        return y;
      }
      var Wc = sh(), Df = sh(!0);
      function Jr(i, c) {
        return i && Wc(i, c, wt);
      }
      function jc(i, c) {
        return i && Df(i, c, wt);
      }
      function Ua(i, c) {
        return On(c, function(d) {
          return yn(i[d]);
        });
      }
      function io(i, c) {
        c = Fn(c, i);
        for (var d = 0, g = c.length; i != null && d < g; )
          i = i[Zr(c[d++])];
        return d && d == g ? i : t;
      }
      function Uf(i, c, d) {
        var g = c(i);
        return ke(i) ? g : Mn(g, d(i));
      }
      function $t(i) {
        return i == null ? i === t ? hy : Nn : to && to in Je(i) ? wE(i) : ME(i);
      }
      function Yc(i, c) {
        return i > c;
      }
      function Hw(i, c) {
        return i != null && We.call(i, c);
      }
      function Bw(i, c) {
        return i != null && c in Je(i);
      }
      function Kw(i, c, d) {
        return i >= Mt(c, d) && i < vt(c, d);
      }
      function Qc(i, c, d) {
        for (var g = d ? Oc : ya, y = i[0].length, b = i.length, T = b, P = D(b), x = 1 / 0, K = []; T--; ) {
          var q = i[T];
          T && c && (q = nt(q, lr(c))), x = Mt(q.length, x), P[T] = !d && (c || y >= 120 && q.length >= 120) ? new no(T && q) : t;
        }
        q = i[0];
        var V = -1, te = P[0];
        e:
          for (; ++V < y && K.length < x; ) {
            var fe = q[V], ye = c ? c(fe) : fe;
            if (fe = d || fe !== 0 ? fe : 0, !(te ? hi(te, ye) : g(K, ye, d))) {
              for (T = b; --T; ) {
                var Oe = P[T];
                if (!(Oe ? hi(Oe, ye) : g(i[T], ye, d)))
                  continue e;
              }
              te && te.push(ye), K.push(fe);
            }
          }
        return K;
      }
      function qw(i, c, d, g) {
        return Jr(i, function(y, b, T) {
          c(g, d(y), b, T);
        }), g;
      }
      function Ei(i, c, d) {
        c = Fn(c, i), i = Sh(i, c);
        var g = i == null ? i : i[Zr(Ar(c))];
        return g == null ? t : cr(g, i, d);
      }
      function Ff(i) {
        return st(i) && $t(i) == Yt;
      }
      function $w(i) {
        return st(i) && $t(i) == fi;
      }
      function Gw(i) {
        return st(i) && $t(i) == Ur;
      }
      function bi(i, c, d, g, y) {
        return i === c ? !0 : i == null || c == null || !st(i) && !st(c) ? i !== i && c !== c : zw(i, c, d, g, bi, y);
      }
      function zw(i, c, d, g, y, b) {
        var T = ke(i), P = ke(c), x = T ? ar : xt(i), K = P ? ar : xt(c);
        x = x == Yt ? gt : x, K = K == Yt ? gt : K;
        var q = x == gt, V = K == gt, te = x == K;
        if (te && Bn(i)) {
          if (!Bn(c))
            return !1;
          T = !0, q = !1;
        }
        if (te && !q)
          return b || (b = new Br()), T || Ko(i) ? vh(i, c, d, g, y, b) : yE(i, c, x, d, g, y, b);
        if (!(d & C)) {
          var fe = q && We.call(i, "__wrapped__"), ye = V && We.call(c, "__wrapped__");
          if (fe || ye) {
            var Oe = fe ? i.value() : i, Ce = ye ? c.value() : c;
            return b || (b = new Br()), y(Oe, Ce, d, g, b);
          }
        }
        return te ? (b || (b = new Br()), CE(i, c, d, g, y, b)) : !1;
      }
      function Vw(i) {
        return st(i) && xt(i) == Pt;
      }
      function Jc(i, c, d, g) {
        var y = d.length, b = y, T = !g;
        if (i == null)
          return !b;
        for (i = Je(i); y--; ) {
          var P = d[y];
          if (T && P[2] ? P[1] !== i[P[0]] : !(P[0] in i))
            return !1;
        }
        for (; ++y < b; ) {
          P = d[y];
          var x = P[0], K = i[x], q = P[1];
          if (T && P[2]) {
            if (K === t && !(x in i))
              return !1;
          } else {
            var V = new Br();
            if (g)
              var te = g(K, q, x, i, c, V);
            if (!(te === t ? bi(q, K, C | E, g, V) : te))
              return !1;
          }
        }
        return !0;
      }
      function Hf(i) {
        if (!it(i) || RE(i))
          return !1;
        var c = yn(i) ? VC : Dy;
        return c.test(so(i));
      }
      function Ww(i) {
        return st(i) && $t(i) == Fr;
      }
      function jw(i) {
        return st(i) && xt(i) == bt;
      }
      function Yw(i) {
        return st(i) && es(i.length) && !!rt[$t(i)];
      }
      function Bf(i) {
        return typeof i == "function" ? i : i == null ? Zt : typeof i == "object" ? ke(i) ? $f(i[0], i[1]) : qf(i) : cp(i);
      }
      function Xc(i) {
        if (!Ti(i))
          return XC(i);
        var c = [];
        for (var d in Je(i))
          We.call(i, d) && d != "constructor" && c.push(d);
        return c;
      }
      function Qw(i) {
        if (!it(i))
          return OE(i);
        var c = Ti(i), d = [];
        for (var g in i)
          g == "constructor" && (c || !We.call(i, g)) || d.push(g);
        return d;
      }
      function Zc(i, c) {
        return i < c;
      }
      function Kf(i, c) {
        var d = -1, g = Jt(i) ? D(i.length) : [];
        return Dn(i, function(y, b, T) {
          g[++d] = c(y, b, T);
        }), g;
      }
      function qf(i) {
        var c = pl(i);
        return c.length == 1 && c[0][2] ? bh(c[0][0], c[0][1]) : function(d) {
          return d === i || Jc(d, i, c);
        };
      }
      function $f(i, c) {
        return ml(i) && Eh(c) ? bh(Zr(i), c) : function(d) {
          var g = Il(d, i);
          return g === t && g === c ? Al(d, i) : bi(c, g, C | E);
        };
      }
      function Fa(i, c, d, g, y) {
        i !== c && Wc(c, function(b, T) {
          if (y || (y = new Br()), it(b))
            Jw(i, c, T, d, Fa, g, y);
          else {
            var P = g ? g(yl(i, T), b, T + "", i, c, y) : t;
            P === t && (P = b), zc(i, T, P);
          }
        }, Xt);
      }
      function Jw(i, c, d, g, y, b, T) {
        var P = yl(i, d), x = yl(c, d), K = T.get(x);
        if (K) {
          zc(i, d, K);
          return;
        }
        var q = b ? b(P, x, d + "", i, c, T) : t, V = q === t;
        if (V) {
          var te = ke(x), fe = !te && Bn(x), ye = !te && !fe && Ko(x);
          q = x, te || fe || ye ? ke(P) ? q = P : ft(P) ? q = Qt(P) : fe ? (V = !1, q = th(x, !0)) : ye ? (V = !1, q = rh(x, !0)) : q = [] : Ai(x) || co(x) ? (q = P, co(P) ? q = Xh(P) : (!it(P) || yn(P)) && (q = wh(x))) : V = !1;
        }
        V && (T.set(x, q), y(q, x, g, b, T), T.delete(x)), zc(i, d, q);
      }
      function Gf(i, c) {
        var d = i.length;
        if (d)
          return c += c < 0 ? d : 0, vn(c, d) ? i[c] : t;
      }
      function zf(i, c, d) {
        c.length ? c = nt(c, function(b) {
          return ke(b) ? function(T) {
            return io(T, b.length === 1 ? b[0] : b);
          } : b;
        }) : c = [Zt];
        var g = -1;
        c = nt(c, lr(me()));
        var y = Kf(i, function(b, T, P) {
          var x = nt(c, function(K) {
            return K(b);
          });
          return { criteria: x, index: ++g, value: b };
        });
        return SC(y, function(b, T) {
          return uE(b, T, d);
        });
      }
      function Xw(i, c) {
        return Vf(i, c, function(d, g) {
          return Al(i, g);
        });
      }
      function Vf(i, c, d) {
        for (var g = -1, y = c.length, b = {}; ++g < y; ) {
          var T = c[g], P = io(i, T);
          d(P, T) && _i(b, Fn(T, i), P);
        }
        return b;
      }
      function Zw(i) {
        return function(c) {
          return io(c, i);
        };
      }
      function el(i, c, d, g) {
        var y = g ? _C : Po, b = -1, T = c.length, P = i;
        for (i === c && (c = Qt(c)), d && (P = nt(i, lr(d))); ++b < T; )
          for (var x = 0, K = c[b], q = d ? d(K) : K; (x = y(P, q, x, g)) > -1; )
            P !== i && Ra.call(P, x, 1), Ra.call(i, x, 1);
        return i;
      }
      function Wf(i, c) {
        for (var d = i ? c.length : 0, g = d - 1; d--; ) {
          var y = c[d];
          if (d == g || y !== b) {
            var b = y;
            vn(y) ? Ra.call(i, y, 1) : ol(i, y);
          }
        }
        return i;
      }
      function tl(i, c) {
        return i + Na(Af() * (c - i + 1));
      }
      function eE(i, c, d, g) {
        for (var y = -1, b = vt(Pa((c - i) / (d || 1)), 0), T = D(b); b--; )
          T[g ? b : ++y] = i, i += d;
        return T;
      }
      function rl(i, c) {
        var d = "";
        if (!i || c < 1 || c > ne)
          return d;
        do
          c % 2 && (d += i), c = Na(c / 2), c && (i += i);
        while (c);
        return d;
      }
      function Me(i, c) {
        return Cl(_h(i, c, Zt), i + "");
      }
      function tE(i) {
        return Pf(qo(i));
      }
      function rE(i, c) {
        var d = qo(i);
        return ja(d, oo(c, 0, d.length));
      }
      function _i(i, c, d, g) {
        if (!it(i))
          return i;
        c = Fn(c, i);
        for (var y = -1, b = c.length, T = b - 1, P = i; P != null && ++y < b; ) {
          var x = Zr(c[y]), K = d;
          if (x === "__proto__" || x === "constructor" || x === "prototype")
            return i;
          if (y != T) {
            var q = P[x];
            K = g ? g(q, x, P) : t, K === t && (K = it(q) ? q : vn(c[y + 1]) ? [] : {});
          }
          Ci(P, x, K), P = P[x];
        }
        return i;
      }
      var jf = Oa ? function(i, c) {
        return Oa.set(i, c), i;
      } : Zt, nE = ka ? function(i, c) {
        return ka(i, "toString", {
          configurable: !0,
          enumerable: !1,
          value: kl(c),
          writable: !0
        });
      } : Zt;
      function oE(i) {
        return ja(qo(i));
      }
      function Ir(i, c, d) {
        var g = -1, y = i.length;
        c < 0 && (c = -c > y ? 0 : y + c), d = d > y ? y : d, d < 0 && (d += y), y = c > d ? 0 : d - c >>> 0, c >>>= 0;
        for (var b = D(y); ++g < y; )
          b[g] = i[g + c];
        return b;
      }
      function iE(i, c) {
        var d;
        return Dn(i, function(g, y, b) {
          return d = c(g, y, b), !d;
        }), !!d;
      }
      function Ha(i, c, d) {
        var g = 0, y = i == null ? g : i.length;
        if (typeof c == "number" && c === c && y <= Yr) {
          for (; g < y; ) {
            var b = g + y >>> 1, T = i[b];
            T !== null && !dr(T) && (d ? T <= c : T < c) ? g = b + 1 : y = b;
          }
          return y;
        }
        return nl(i, c, Zt, d);
      }
      function nl(i, c, d, g) {
        var y = 0, b = i == null ? 0 : i.length;
        if (b === 0)
          return 0;
        c = d(c);
        for (var T = c !== c, P = c === null, x = dr(c), K = c === t; y < b; ) {
          var q = Na((y + b) / 2), V = d(i[q]), te = V !== t, fe = V === null, ye = V === V, Oe = dr(V);
          if (T)
            var Ce = g || ye;
          else
            K ? Ce = ye && (g || te) : P ? Ce = ye && te && (g || !fe) : x ? Ce = ye && te && !fe && (g || !Oe) : fe || Oe ? Ce = !1 : Ce = g ? V <= c : V < c;
          Ce ? y = q + 1 : b = q;
        }
        return Mt(b, dt);
      }
      function Yf(i, c) {
        for (var d = -1, g = i.length, y = 0, b = []; ++d < g; ) {
          var T = i[d], P = c ? c(T) : T;
          if (!d || !Kr(P, x)) {
            var x = P;
            b[y++] = T === 0 ? 0 : T;
          }
        }
        return b;
      }
      function Qf(i) {
        return typeof i == "number" ? i : dr(i) ? Qe : +i;
      }
      function ur(i) {
        if (typeof i == "string")
          return i;
        if (ke(i))
          return nt(i, ur) + "";
        if (dr(i))
          return Rf ? Rf.call(i) : "";
        var c = i + "";
        return c == "0" && 1 / i == -ie ? "-0" : c;
      }
      function Un(i, c, d) {
        var g = -1, y = ya, b = i.length, T = !0, P = [], x = P;
        if (d)
          T = !1, y = Oc;
        else if (b >= o) {
          var K = c ? null : mE(i);
          if (K)
            return wa(K);
          T = !1, y = hi, x = new no();
        } else
          x = c ? [] : P;
        e:
          for (; ++g < b; ) {
            var q = i[g], V = c ? c(q) : q;
            if (q = d || q !== 0 ? q : 0, T && V === V) {
              for (var te = x.length; te--; )
                if (x[te] === V)
                  continue e;
              c && x.push(V), P.push(q);
            } else
              y(x, V, d) || (x !== P && x.push(V), P.push(q));
          }
        return P;
      }
      function ol(i, c) {
        return c = Fn(c, i), i = Sh(i, c), i == null || delete i[Zr(Ar(c))];
      }
      function Jf(i, c, d, g) {
        return _i(i, c, d(io(i, c)), g);
      }
      function Ba(i, c, d, g) {
        for (var y = i.length, b = g ? y : -1; (g ? b-- : ++b < y) && c(i[b], b, i); )
          ;
        return d ? Ir(i, g ? 0 : b, g ? b + 1 : y) : Ir(i, g ? b + 1 : 0, g ? y : b);
      }
      function Xf(i, c) {
        var d = i;
        return d instanceof Ue && (d = d.value()), Mc(c, function(g, y) {
          return y.func.apply(y.thisArg, Mn([g], y.args));
        }, d);
      }
      function il(i, c, d) {
        var g = i.length;
        if (g < 2)
          return g ? Un(i[0]) : [];
        for (var y = -1, b = D(g); ++y < g; )
          for (var T = i[y], P = -1; ++P < g; )
            P != y && (b[y] = wi(b[y] || T, i[P], c, d));
        return Un(St(b, 1), c, d);
      }
      function Zf(i, c, d) {
        for (var g = -1, y = i.length, b = c.length, T = {}; ++g < y; ) {
          var P = g < b ? c[g] : t;
          d(T, i[g], P);
        }
        return T;
      }
      function al(i) {
        return ft(i) ? i : [];
      }
      function sl(i) {
        return typeof i == "function" ? i : Zt;
      }
      function Fn(i, c) {
        return ke(i) ? i : ml(i, c) ? [i] : Rh(Ge(i));
      }
      var aE = Me;
      function Hn(i, c, d) {
        var g = i.length;
        return d = d === t ? g : d, !c && d >= g ? i : Ir(i, c, d);
      }
      var eh = WC || function(i) {
        return _t.clearTimeout(i);
      };
      function th(i, c) {
        if (c)
          return i.slice();
        var d = i.length, g = bf ? bf(d) : new i.constructor(d);
        return i.copy(g), g;
      }
      function cl(i) {
        var c = new i.constructor(i.byteLength);
        return new Ia(c).set(new Ia(i)), c;
      }
      function sE(i, c) {
        var d = c ? cl(i.buffer) : i.buffer;
        return new i.constructor(d, i.byteOffset, i.byteLength);
      }
      function cE(i) {
        var c = new i.constructor(i.source, Ud.exec(i));
        return c.lastIndex = i.lastIndex, c;
      }
      function lE(i) {
        return yi ? Je(yi.call(i)) : {};
      }
      function rh(i, c) {
        var d = c ? cl(i.buffer) : i.buffer;
        return new i.constructor(d, i.byteOffset, i.length);
      }
      function nh(i, c) {
        if (i !== c) {
          var d = i !== t, g = i === null, y = i === i, b = dr(i), T = c !== t, P = c === null, x = c === c, K = dr(c);
          if (!P && !K && !b && i > c || b && T && x && !P && !K || g && T && x || !d && x || !y)
            return 1;
          if (!g && !b && !K && i < c || K && d && y && !g && !b || P && d && y || !T && y || !x)
            return -1;
        }
        return 0;
      }
      function uE(i, c, d) {
        for (var g = -1, y = i.criteria, b = c.criteria, T = y.length, P = d.length; ++g < T; ) {
          var x = nh(y[g], b[g]);
          if (x) {
            if (g >= P)
              return x;
            var K = d[g];
            return x * (K == "desc" ? -1 : 1);
          }
        }
        return i.index - c.index;
      }
      function oh(i, c, d, g) {
        for (var y = -1, b = i.length, T = d.length, P = -1, x = c.length, K = vt(b - T, 0), q = D(x + K), V = !g; ++P < x; )
          q[P] = c[P];
        for (; ++y < T; )
          (V || y < b) && (q[d[y]] = i[y]);
        for (; K--; )
          q[P++] = i[y++];
        return q;
      }
      function ih(i, c, d, g) {
        for (var y = -1, b = i.length, T = -1, P = d.length, x = -1, K = c.length, q = vt(b - P, 0), V = D(q + K), te = !g; ++y < q; )
          V[y] = i[y];
        for (var fe = y; ++x < K; )
          V[fe + x] = c[x];
        for (; ++T < P; )
          (te || y < b) && (V[fe + d[T]] = i[y++]);
        return V;
      }
      function Qt(i, c) {
        var d = -1, g = i.length;
        for (c || (c = D(g)); ++d < g; )
          c[d] = i[d];
        return c;
      }
      function Xr(i, c, d, g) {
        var y = !d;
        d || (d = {});
        for (var b = -1, T = c.length; ++b < T; ) {
          var P = c[b], x = g ? g(d[P], i[P], P, d, i) : t;
          x === t && (x = i[P]), y ? pn(d, P, x) : Ci(d, P, x);
        }
        return d;
      }
      function dE(i, c) {
        return Xr(i, gl(i), c);
      }
      function fE(i, c) {
        return Xr(i, yh(i), c);
      }
      function Ka(i, c) {
        return function(d, g) {
          var y = ke(d) ? vC : xw, b = c ? c() : {};
          return y(d, i, me(g, 2), b);
        };
      }
      function Fo(i) {
        return Me(function(c, d) {
          var g = -1, y = d.length, b = y > 1 ? d[y - 1] : t, T = y > 2 ? d[2] : t;
          for (b = i.length > 3 && typeof b == "function" ? (y--, b) : t, T && Gt(d[0], d[1], T) && (b = y < 3 ? t : b, y = 1), c = Je(c); ++g < y; ) {
            var P = d[g];
            P && i(c, P, g, b);
          }
          return c;
        });
      }
      function ah(i, c) {
        return function(d, g) {
          if (d == null)
            return d;
          if (!Jt(d))
            return i(d, g);
          for (var y = d.length, b = c ? y : -1, T = Je(d); (c ? b-- : ++b < y) && g(T[b], b, T) !== !1; )
            ;
          return d;
        };
      }
      function sh(i) {
        return function(c, d, g) {
          for (var y = -1, b = Je(c), T = g(c), P = T.length; P--; ) {
            var x = T[i ? P : ++y];
            if (d(b[x], x, b) === !1)
              break;
          }
          return c;
        };
      }
      function hE(i, c, d) {
        var g = c & _, y = Si(i);
        function b() {
          var T = this && this !== _t && this instanceof b ? y : i;
          return T.apply(g ? d : this, arguments);
        }
        return b;
      }
      function ch(i) {
        return function(c) {
          c = Ge(c);
          var d = No(c) ? Hr(c) : t, g = d ? d[0] : c.charAt(0), y = d ? Hn(d, 1).join("") : c.slice(1);
          return g[i]() + y;
        };
      }
      function Ho(i) {
        return function(c) {
          return Mc(ap(ip(c).replace(nC, "")), i, "");
        };
      }
      function Si(i) {
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
      function pE(i, c, d) {
        var g = Si(i);
        function y() {
          for (var b = arguments.length, T = D(b), P = b, x = Bo(y); P--; )
            T[P] = arguments[P];
          var K = b < 3 && T[0] !== x && T[b - 1] !== x ? [] : xn(T, x);
          if (b -= K.length, b < d)
            return hh(
              i,
              c,
              qa,
              y.placeholder,
              t,
              T,
              K,
              t,
              t,
              d - b
            );
          var q = this && this !== _t && this instanceof y ? g : i;
          return cr(q, this, T);
        }
        return y;
      }
      function lh(i) {
        return function(c, d, g) {
          var y = Je(c);
          if (!Jt(c)) {
            var b = me(d, 3);
            c = wt(c), d = function(P) {
              return b(y[P], P, y);
            };
          }
          var T = i(c, d, g);
          return T > -1 ? y[b ? c[T] : T] : t;
        };
      }
      function uh(i) {
        return mn(function(c) {
          var d = c.length, g = d, y = Sr.prototype.thru;
          for (i && c.reverse(); g--; ) {
            var b = c[g];
            if (typeof b != "function")
              throw new _r(s);
            if (y && !T && Va(b) == "wrapper")
              var T = new Sr([], !0);
          }
          for (g = T ? g : d; ++g < d; ) {
            b = c[g];
            var P = Va(b), x = P == "wrapper" ? hl(b) : t;
            x && vl(x[0]) && x[1] == (H | S | O | U) && !x[4].length && x[9] == 1 ? T = T[Va(x[0])].apply(T, x[3]) : T = b.length == 1 && vl(b) ? T[P]() : T.thru(b);
          }
          return function() {
            var K = arguments, q = K[0];
            if (T && K.length == 1 && ke(q))
              return T.plant(q).value();
            for (var V = 0, te = d ? c[V].apply(this, K) : q; ++V < d; )
              te = c[V].call(this, te);
            return te;
          };
        });
      }
      function qa(i, c, d, g, y, b, T, P, x, K) {
        var q = c & H, V = c & _, te = c & A, fe = c & (S | I), ye = c & Q, Oe = te ? t : Si(i);
        function Ce() {
          for (var Le = arguments.length, Fe = D(Le), fr = Le; fr--; )
            Fe[fr] = arguments[fr];
          if (fe)
            var zt = Bo(Ce), hr = IC(Fe, zt);
          if (g && (Fe = oh(Fe, g, y, fe)), b && (Fe = ih(Fe, b, T, fe)), Le -= hr, fe && Le < K) {
            var ht = xn(Fe, zt);
            return hh(
              i,
              c,
              qa,
              Ce.placeholder,
              d,
              Fe,
              ht,
              P,
              x,
              K - Le
            );
          }
          var qr = V ? d : this, wn = te ? qr[i] : i;
          return Le = Fe.length, P ? Fe = xE(Fe, P) : ye && Le > 1 && Fe.reverse(), q && x < Le && (Fe.length = x), this && this !== _t && this instanceof Ce && (wn = Oe || Si(wn)), wn.apply(qr, Fe);
        }
        return Ce;
      }
      function dh(i, c) {
        return function(d, g) {
          return qw(d, i, c(g), {});
        };
      }
      function $a(i, c) {
        return function(d, g) {
          var y;
          if (d === t && g === t)
            return c;
          if (d !== t && (y = d), g !== t) {
            if (y === t)
              return g;
            typeof d == "string" || typeof g == "string" ? (d = ur(d), g = ur(g)) : (d = Qf(d), g = Qf(g)), y = i(d, g);
          }
          return y;
        };
      }
      function ll(i) {
        return mn(function(c) {
          return c = nt(c, lr(me())), Me(function(d) {
            var g = this;
            return i(c, function(y) {
              return cr(y, g, d);
            });
          });
        });
      }
      function Ga(i, c) {
        c = c === t ? " " : ur(c);
        var d = c.length;
        if (d < 2)
          return d ? rl(c, i) : c;
        var g = rl(c, Pa(i / Oo(c)));
        return No(c) ? Hn(Hr(g), 0, i).join("") : g.slice(0, i);
      }
      function gE(i, c, d, g) {
        var y = c & _, b = Si(i);
        function T() {
          for (var P = -1, x = arguments.length, K = -1, q = g.length, V = D(q + x), te = this && this !== _t && this instanceof T ? b : i; ++K < q; )
            V[K] = g[K];
          for (; x--; )
            V[K++] = arguments[++P];
          return cr(te, y ? d : this, V);
        }
        return T;
      }
      function fh(i) {
        return function(c, d, g) {
          return g && typeof g != "number" && Gt(c, d, g) && (d = g = t), c = Cn(c), d === t ? (d = c, c = 0) : d = Cn(d), g = g === t ? c < d ? 1 : -1 : Cn(g), eE(c, d, g, i);
        };
      }
      function za(i) {
        return function(c, d) {
          return typeof c == "string" && typeof d == "string" || (c = Rr(c), d = Rr(d)), i(c, d);
        };
      }
      function hh(i, c, d, g, y, b, T, P, x, K) {
        var q = c & S, V = q ? T : t, te = q ? t : T, fe = q ? b : t, ye = q ? t : b;
        c |= q ? O : L, c &= ~(q ? L : O), c & R || (c &= ~(_ | A));
        var Oe = [
          i,
          c,
          y,
          fe,
          V,
          ye,
          te,
          P,
          x,
          K
        ], Ce = d.apply(t, Oe);
        return vl(i) && Th(Ce, Oe), Ce.placeholder = g, Ih(Ce, i, c);
      }
      function ul(i) {
        var c = mt[i];
        return function(d, g) {
          if (d = Rr(d), g = g == null ? 0 : Mt(Ne(g), 292), g && If(d)) {
            var y = (Ge(d) + "e").split("e"), b = c(y[0] + "e" + (+y[1] + g));
            return y = (Ge(b) + "e").split("e"), +(y[0] + "e" + (+y[1] - g));
          }
          return c(d);
        };
      }
      var mE = Lo && 1 / wa(new Lo([, -0]))[1] == ie ? function(i) {
        return new Lo(i);
      } : Ol;
      function ph(i) {
        return function(c) {
          var d = xt(c);
          return d == Pt ? Bc(c) : d == bt ? MC(c) : TC(c, i(c));
        };
      }
      function gn(i, c, d, g, y, b, T, P) {
        var x = c & A;
        if (!x && typeof i != "function")
          throw new _r(s);
        var K = g ? g.length : 0;
        if (K || (c &= ~(O | L), g = y = t), T = T === t ? T : vt(Ne(T), 0), P = P === t ? P : Ne(P), K -= y ? y.length : 0, c & L) {
          var q = g, V = y;
          g = y = t;
        }
        var te = x ? t : hl(i), fe = [
          i,
          c,
          d,
          g,
          y,
          q,
          V,
          b,
          T,
          P
        ];
        if (te && NE(fe, te), i = fe[0], c = fe[1], d = fe[2], g = fe[3], y = fe[4], P = fe[9] = fe[9] === t ? x ? 0 : i.length : vt(fe[9] - K, 0), !P && c & (S | I) && (c &= ~(S | I)), !c || c == _)
          var ye = hE(i, c, d);
        else
          c == S || c == I ? ye = pE(i, c, P) : (c == O || c == (_ | O)) && !y.length ? ye = gE(i, c, d, g) : ye = qa.apply(t, fe);
        var Oe = te ? jf : Th;
        return Ih(Oe(ye, fe), i, c);
      }
      function gh(i, c, d, g) {
        return i === t || Kr(i, xo[d]) && !We.call(g, d) ? c : i;
      }
      function mh(i, c, d, g, y, b) {
        return it(i) && it(c) && (b.set(c, i), Fa(i, c, t, mh, b), b.delete(c)), i;
      }
      function vE(i) {
        return Ai(i) ? t : i;
      }
      function vh(i, c, d, g, y, b) {
        var T = d & C, P = i.length, x = c.length;
        if (P != x && !(T && x > P))
          return !1;
        var K = b.get(i), q = b.get(c);
        if (K && q)
          return K == c && q == i;
        var V = -1, te = !0, fe = d & E ? new no() : t;
        for (b.set(i, c), b.set(c, i); ++V < P; ) {
          var ye = i[V], Oe = c[V];
          if (g)
            var Ce = T ? g(Oe, ye, V, c, i, b) : g(ye, Oe, V, i, c, b);
          if (Ce !== t) {
            if (Ce)
              continue;
            te = !1;
            break;
          }
          if (fe) {
            if (!xc(c, function(Le, Fe) {
              if (!hi(fe, Fe) && (ye === Le || y(ye, Le, d, g, b)))
                return fe.push(Fe);
            })) {
              te = !1;
              break;
            }
          } else if (!(ye === Oe || y(ye, Oe, d, g, b))) {
            te = !1;
            break;
          }
        }
        return b.delete(i), b.delete(c), te;
      }
      function yE(i, c, d, g, y, b, T) {
        switch (d) {
          case Ro:
            if (i.byteLength != c.byteLength || i.byteOffset != c.byteOffset)
              return !1;
            i = i.buffer, c = c.buffer;
          case fi:
            return !(i.byteLength != c.byteLength || !b(new Ia(i), new Ia(c)));
          case sr:
          case Ur:
          case Nt:
            return Kr(+i, +c);
          case qt:
            return i.name == c.name && i.message == c.message;
          case Fr:
          case tt:
            return i == c + "";
          case Pt:
            var P = Bc;
          case bt:
            var x = g & C;
            if (P || (P = wa), i.size != c.size && !x)
              return !1;
            var K = T.get(i);
            if (K)
              return K == c;
            g |= E, T.set(i, c);
            var q = vh(P(i), P(c), g, y, b, T);
            return T.delete(i), q;
          case Qr:
            if (yi)
              return yi.call(i) == yi.call(c);
        }
        return !1;
      }
      function CE(i, c, d, g, y, b) {
        var T = d & C, P = dl(i), x = P.length, K = dl(c), q = K.length;
        if (x != q && !T)
          return !1;
        for (var V = x; V--; ) {
          var te = P[V];
          if (!(T ? te in c : We.call(c, te)))
            return !1;
        }
        var fe = b.get(i), ye = b.get(c);
        if (fe && ye)
          return fe == c && ye == i;
        var Oe = !0;
        b.set(i, c), b.set(c, i);
        for (var Ce = T; ++V < x; ) {
          te = P[V];
          var Le = i[te], Fe = c[te];
          if (g)
            var fr = T ? g(Fe, Le, te, c, i, b) : g(Le, Fe, te, i, c, b);
          if (!(fr === t ? Le === Fe || y(Le, Fe, d, g, b) : fr)) {
            Oe = !1;
            break;
          }
          Ce || (Ce = te == "constructor");
        }
        if (Oe && !Ce) {
          var zt = i.constructor, hr = c.constructor;
          zt != hr && "constructor" in i && "constructor" in c && !(typeof zt == "function" && zt instanceof zt && typeof hr == "function" && hr instanceof hr) && (Oe = !1);
        }
        return b.delete(i), b.delete(c), Oe;
      }
      function mn(i) {
        return Cl(_h(i, t, Oh), i + "");
      }
      function dl(i) {
        return Uf(i, wt, gl);
      }
      function fl(i) {
        return Uf(i, Xt, yh);
      }
      var hl = Oa ? function(i) {
        return Oa.get(i);
      } : Ol;
      function Va(i) {
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
      function me() {
        var i = w.iteratee || Pl;
        return i = i === Pl ? Bf : i, arguments.length ? i(arguments[0], arguments[1]) : i;
      }
      function Wa(i, c) {
        var d = i.__data__;
        return AE(c) ? d[typeof c == "string" ? "string" : "hash"] : d.map;
      }
      function pl(i) {
        for (var c = wt(i), d = c.length; d--; ) {
          var g = c[d], y = i[g];
          c[d] = [g, y, Eh(y)];
        }
        return c;
      }
      function ao(i, c) {
        var d = PC(i, c);
        return Hf(d) ? d : t;
      }
      function wE(i) {
        var c = We.call(i, to), d = i[to];
        try {
          i[to] = t;
          var g = !0;
        } catch {
        }
        var y = Sa.call(i);
        return g && (c ? i[to] = d : delete i[to]), y;
      }
      var gl = qc ? function(i) {
        return i == null ? [] : (i = Je(i), On(qc(i), function(c) {
          return Sf.call(i, c);
        }));
      } : Ml, yh = qc ? function(i) {
        for (var c = []; i; )
          Mn(c, gl(i)), i = Aa(i);
        return c;
      } : Ml, xt = $t;
      ($c && xt(new $c(new ArrayBuffer(1))) != Ro || gi && xt(new gi()) != Pt || Gc && xt(Gc.resolve()) != Ot || Lo && xt(new Lo()) != bt || mi && xt(new mi()) != di) && (xt = function(i) {
        var c = $t(i), d = c == gt ? i.constructor : t, g = d ? so(d) : "";
        if (g)
          switch (g) {
            case rw:
              return Ro;
            case nw:
              return Pt;
            case ow:
              return Ot;
            case iw:
              return bt;
            case aw:
              return di;
          }
        return c;
      });
      function EE(i, c, d) {
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
      function bE(i) {
        var c = i.match(Ry);
        return c ? c[1].split(ky) : [];
      }
      function Ch(i, c, d) {
        c = Fn(c, i);
        for (var g = -1, y = c.length, b = !1; ++g < y; ) {
          var T = Zr(c[g]);
          if (!(b = i != null && d(i, T)))
            break;
          i = i[T];
        }
        return b || ++g != y ? b : (y = i == null ? 0 : i.length, !!y && es(y) && vn(T, y) && (ke(i) || co(i)));
      }
      function _E(i) {
        var c = i.length, d = new i.constructor(c);
        return c && typeof i[0] == "string" && We.call(i, "index") && (d.index = i.index, d.input = i.input), d;
      }
      function wh(i) {
        return typeof i.constructor == "function" && !Ti(i) ? Uo(Aa(i)) : {};
      }
      function SE(i, c, d) {
        var g = i.constructor;
        switch (c) {
          case fi:
            return cl(i);
          case sr:
          case Ur:
            return new g(+i);
          case Ro:
            return sE(i, d);
          case pc:
          case gc:
          case mc:
          case vc:
          case yc:
          case Cc:
          case wc:
          case Ec:
          case bc:
            return rh(i, d);
          case Pt:
            return new g();
          case Nt:
          case tt:
            return new g(i);
          case Fr:
            return cE(i);
          case bt:
            return new g();
          case Qr:
            return lE(i);
        }
      }
      function TE(i, c) {
        var d = c.length;
        if (!d)
          return i;
        var g = d - 1;
        return c[g] = (d > 1 ? "& " : "") + c[g], c = c.join(d > 2 ? ", " : " "), i.replace(Ay, `{
/* [wrapped with ` + c + `] */
`);
      }
      function IE(i) {
        return ke(i) || co(i) || !!(Tf && i && i[Tf]);
      }
      function vn(i, c) {
        var d = typeof i;
        return c = c ?? ne, !!c && (d == "number" || d != "symbol" && Fy.test(i)) && i > -1 && i % 1 == 0 && i < c;
      }
      function Gt(i, c, d) {
        if (!it(d))
          return !1;
        var g = typeof c;
        return (g == "number" ? Jt(d) && vn(c, d.length) : g == "string" && c in d) ? Kr(d[c], i) : !1;
      }
      function ml(i, c) {
        if (ke(i))
          return !1;
        var d = typeof i;
        return d == "number" || d == "symbol" || d == "boolean" || i == null || dr(i) ? !0 : _y.test(i) || !by.test(i) || c != null && i in Je(c);
      }
      function AE(i) {
        var c = typeof i;
        return c == "string" || c == "number" || c == "symbol" || c == "boolean" ? i !== "__proto__" : i === null;
      }
      function vl(i) {
        var c = Va(i), d = w[c];
        if (typeof d != "function" || !(c in Ue.prototype))
          return !1;
        if (i === d)
          return !0;
        var g = hl(d);
        return !!g && i === g[0];
      }
      function RE(i) {
        return !!Ef && Ef in i;
      }
      var kE = ba ? yn : xl;
      function Ti(i) {
        var c = i && i.constructor, d = typeof c == "function" && c.prototype || xo;
        return i === d;
      }
      function Eh(i) {
        return i === i && !it(i);
      }
      function bh(i, c) {
        return function(d) {
          return d == null ? !1 : d[i] === c && (c !== t || i in Je(d));
        };
      }
      function PE(i) {
        var c = Xa(i, function(g) {
          return d.size === f && d.clear(), g;
        }), d = c.cache;
        return c;
      }
      function NE(i, c) {
        var d = i[1], g = c[1], y = d | g, b = y < (_ | A | H), T = g == H && d == S || g == H && d == U && i[7].length <= c[8] || g == (H | U) && c[7].length <= c[8] && d == S;
        if (!(b || T))
          return i;
        g & _ && (i[2] = c[2], y |= d & _ ? 0 : R);
        var P = c[3];
        if (P) {
          var x = i[3];
          i[3] = x ? oh(x, P, c[4]) : P, i[4] = x ? xn(i[3], h) : c[4];
        }
        return P = c[5], P && (x = i[5], i[5] = x ? ih(x, P, c[6]) : P, i[6] = x ? xn(i[5], h) : c[6]), P = c[7], P && (i[7] = P), g & H && (i[8] = i[8] == null ? c[8] : Mt(i[8], c[8])), i[9] == null && (i[9] = c[9]), i[0] = c[0], i[1] = y, i;
      }
      function OE(i) {
        var c = [];
        if (i != null)
          for (var d in Je(i))
            c.push(d);
        return c;
      }
      function ME(i) {
        return Sa.call(i);
      }
      function _h(i, c, d) {
        return c = vt(c === t ? i.length - 1 : c, 0), function() {
          for (var g = arguments, y = -1, b = vt(g.length - c, 0), T = D(b); ++y < b; )
            T[y] = g[c + y];
          y = -1;
          for (var P = D(c + 1); ++y < c; )
            P[y] = g[y];
          return P[c] = d(T), cr(i, this, P);
        };
      }
      function Sh(i, c) {
        return c.length < 2 ? i : io(i, Ir(c, 0, -1));
      }
      function xE(i, c) {
        for (var d = i.length, g = Mt(c.length, d), y = Qt(i); g--; ) {
          var b = c[g];
          i[g] = vn(b, d) ? y[b] : t;
        }
        return i;
      }
      function yl(i, c) {
        if (!(c === "constructor" && typeof i[c] == "function") && c != "__proto__")
          return i[c];
      }
      var Th = Ah(jf), Ii = YC || function(i, c) {
        return _t.setTimeout(i, c);
      }, Cl = Ah(nE);
      function Ih(i, c, d) {
        var g = c + "";
        return Cl(i, TE(g, LE(bE(g), d)));
      }
      function Ah(i) {
        var c = 0, d = 0;
        return function() {
          var g = ZC(), y = ue - (g - d);
          if (d = g, y > 0) {
            if (++c >= Y)
              return arguments[0];
          } else
            c = 0;
          return i.apply(t, arguments);
        };
      }
      function ja(i, c) {
        var d = -1, g = i.length, y = g - 1;
        for (c = c === t ? g : c; ++d < c; ) {
          var b = tl(d, y), T = i[b];
          i[b] = i[d], i[d] = T;
        }
        return i.length = c, i;
      }
      var Rh = PE(function(i) {
        var c = [];
        return i.charCodeAt(0) === 46 && c.push(""), i.replace(Sy, function(d, g, y, b) {
          c.push(y ? b.replace(Oy, "$1") : g || d);
        }), c;
      });
      function Zr(i) {
        if (typeof i == "string" || dr(i))
          return i;
        var c = i + "";
        return c == "0" && 1 / i == -ie ? "-0" : c;
      }
      function so(i) {
        if (i != null) {
          try {
            return _a.call(i);
          } catch {
          }
          try {
            return i + "";
          } catch {
          }
        }
        return "";
      }
      function LE(i, c) {
        return br(ln, function(d) {
          var g = "_." + d[0];
          c & d[1] && !ya(i, g) && i.push(g);
        }), i.sort();
      }
      function kh(i) {
        if (i instanceof Ue)
          return i.clone();
        var c = new Sr(i.__wrapped__, i.__chain__);
        return c.__actions__ = Qt(i.__actions__), c.__index__ = i.__index__, c.__values__ = i.__values__, c;
      }
      function DE(i, c, d) {
        (d ? Gt(i, c, d) : c === t) ? c = 1 : c = vt(Ne(c), 0);
        var g = i == null ? 0 : i.length;
        if (!g || c < 1)
          return [];
        for (var y = 0, b = 0, T = D(Pa(g / c)); y < g; )
          T[b++] = Ir(i, y, y += c);
        return T;
      }
      function UE(i) {
        for (var c = -1, d = i == null ? 0 : i.length, g = 0, y = []; ++c < d; ) {
          var b = i[c];
          b && (y[g++] = b);
        }
        return y;
      }
      function FE() {
        var i = arguments.length;
        if (!i)
          return [];
        for (var c = D(i - 1), d = arguments[0], g = i; g--; )
          c[g - 1] = arguments[g];
        return Mn(ke(d) ? Qt(d) : [d], St(c, 1));
      }
      var HE = Me(function(i, c) {
        return ft(i) ? wi(i, St(c, 1, ft, !0)) : [];
      }), BE = Me(function(i, c) {
        var d = Ar(c);
        return ft(d) && (d = t), ft(i) ? wi(i, St(c, 1, ft, !0), me(d, 2)) : [];
      }), KE = Me(function(i, c) {
        var d = Ar(c);
        return ft(d) && (d = t), ft(i) ? wi(i, St(c, 1, ft, !0), t, d) : [];
      });
      function qE(i, c, d) {
        var g = i == null ? 0 : i.length;
        return g ? (c = d || c === t ? 1 : Ne(c), Ir(i, c < 0 ? 0 : c, g)) : [];
      }
      function $E(i, c, d) {
        var g = i == null ? 0 : i.length;
        return g ? (c = d || c === t ? 1 : Ne(c), c = g - c, Ir(i, 0, c < 0 ? 0 : c)) : [];
      }
      function GE(i, c) {
        return i && i.length ? Ba(i, me(c, 3), !0, !0) : [];
      }
      function zE(i, c) {
        return i && i.length ? Ba(i, me(c, 3), !0) : [];
      }
      function VE(i, c, d, g) {
        var y = i == null ? 0 : i.length;
        return y ? (d && typeof d != "number" && Gt(i, c, d) && (d = 0, g = y), Fw(i, c, d, g)) : [];
      }
      function Ph(i, c, d) {
        var g = i == null ? 0 : i.length;
        if (!g)
          return -1;
        var y = d == null ? 0 : Ne(d);
        return y < 0 && (y = vt(g + y, 0)), Ca(i, me(c, 3), y);
      }
      function Nh(i, c, d) {
        var g = i == null ? 0 : i.length;
        if (!g)
          return -1;
        var y = g - 1;
        return d !== t && (y = Ne(d), y = d < 0 ? vt(g + y, 0) : Mt(y, g - 1)), Ca(i, me(c, 3), y, !0);
      }
      function Oh(i) {
        var c = i == null ? 0 : i.length;
        return c ? St(i, 1) : [];
      }
      function WE(i) {
        var c = i == null ? 0 : i.length;
        return c ? St(i, ie) : [];
      }
      function jE(i, c) {
        var d = i == null ? 0 : i.length;
        return d ? (c = c === t ? 1 : Ne(c), St(i, c)) : [];
      }
      function YE(i) {
        for (var c = -1, d = i == null ? 0 : i.length, g = {}; ++c < d; ) {
          var y = i[c];
          g[y[0]] = y[1];
        }
        return g;
      }
      function Mh(i) {
        return i && i.length ? i[0] : t;
      }
      function QE(i, c, d) {
        var g = i == null ? 0 : i.length;
        if (!g)
          return -1;
        var y = d == null ? 0 : Ne(d);
        return y < 0 && (y = vt(g + y, 0)), Po(i, c, y);
      }
      function JE(i) {
        var c = i == null ? 0 : i.length;
        return c ? Ir(i, 0, -1) : [];
      }
      var XE = Me(function(i) {
        var c = nt(i, al);
        return c.length && c[0] === i[0] ? Qc(c) : [];
      }), ZE = Me(function(i) {
        var c = Ar(i), d = nt(i, al);
        return c === Ar(d) ? c = t : d.pop(), d.length && d[0] === i[0] ? Qc(d, me(c, 2)) : [];
      }), eb = Me(function(i) {
        var c = Ar(i), d = nt(i, al);
        return c = typeof c == "function" ? c : t, c && d.pop(), d.length && d[0] === i[0] ? Qc(d, t, c) : [];
      });
      function tb(i, c) {
        return i == null ? "" : JC.call(i, c);
      }
      function Ar(i) {
        var c = i == null ? 0 : i.length;
        return c ? i[c - 1] : t;
      }
      function rb(i, c, d) {
        var g = i == null ? 0 : i.length;
        if (!g)
          return -1;
        var y = g;
        return d !== t && (y = Ne(d), y = y < 0 ? vt(g + y, 0) : Mt(y, g - 1)), c === c ? LC(i, c, y) : Ca(i, hf, y, !0);
      }
      function nb(i, c) {
        return i && i.length ? Gf(i, Ne(c)) : t;
      }
      var ob = Me(xh);
      function xh(i, c) {
        return i && i.length && c && c.length ? el(i, c) : i;
      }
      function ib(i, c, d) {
        return i && i.length && c && c.length ? el(i, c, me(d, 2)) : i;
      }
      function ab(i, c, d) {
        return i && i.length && c && c.length ? el(i, c, t, d) : i;
      }
      var sb = mn(function(i, c) {
        var d = i == null ? 0 : i.length, g = Vc(i, c);
        return Wf(i, nt(c, function(y) {
          return vn(y, d) ? +y : y;
        }).sort(nh)), g;
      });
      function cb(i, c) {
        var d = [];
        if (!(i && i.length))
          return d;
        var g = -1, y = [], b = i.length;
        for (c = me(c, 3); ++g < b; ) {
          var T = i[g];
          c(T, g, i) && (d.push(T), y.push(g));
        }
        return Wf(i, y), d;
      }
      function wl(i) {
        return i == null ? i : tw.call(i);
      }
      function lb(i, c, d) {
        var g = i == null ? 0 : i.length;
        return g ? (d && typeof d != "number" && Gt(i, c, d) ? (c = 0, d = g) : (c = c == null ? 0 : Ne(c), d = d === t ? g : Ne(d)), Ir(i, c, d)) : [];
      }
      function ub(i, c) {
        return Ha(i, c);
      }
      function db(i, c, d) {
        return nl(i, c, me(d, 2));
      }
      function fb(i, c) {
        var d = i == null ? 0 : i.length;
        if (d) {
          var g = Ha(i, c);
          if (g < d && Kr(i[g], c))
            return g;
        }
        return -1;
      }
      function hb(i, c) {
        return Ha(i, c, !0);
      }
      function pb(i, c, d) {
        return nl(i, c, me(d, 2), !0);
      }
      function gb(i, c) {
        var d = i == null ? 0 : i.length;
        if (d) {
          var g = Ha(i, c, !0) - 1;
          if (Kr(i[g], c))
            return g;
        }
        return -1;
      }
      function mb(i) {
        return i && i.length ? Yf(i) : [];
      }
      function vb(i, c) {
        return i && i.length ? Yf(i, me(c, 2)) : [];
      }
      function yb(i) {
        var c = i == null ? 0 : i.length;
        return c ? Ir(i, 1, c) : [];
      }
      function Cb(i, c, d) {
        return i && i.length ? (c = d || c === t ? 1 : Ne(c), Ir(i, 0, c < 0 ? 0 : c)) : [];
      }
      function wb(i, c, d) {
        var g = i == null ? 0 : i.length;
        return g ? (c = d || c === t ? 1 : Ne(c), c = g - c, Ir(i, c < 0 ? 0 : c, g)) : [];
      }
      function Eb(i, c) {
        return i && i.length ? Ba(i, me(c, 3), !1, !0) : [];
      }
      function bb(i, c) {
        return i && i.length ? Ba(i, me(c, 3)) : [];
      }
      var _b = Me(function(i) {
        return Un(St(i, 1, ft, !0));
      }), Sb = Me(function(i) {
        var c = Ar(i);
        return ft(c) && (c = t), Un(St(i, 1, ft, !0), me(c, 2));
      }), Tb = Me(function(i) {
        var c = Ar(i);
        return c = typeof c == "function" ? c : t, Un(St(i, 1, ft, !0), t, c);
      });
      function Ib(i) {
        return i && i.length ? Un(i) : [];
      }
      function Ab(i, c) {
        return i && i.length ? Un(i, me(c, 2)) : [];
      }
      function Rb(i, c) {
        return c = typeof c == "function" ? c : t, i && i.length ? Un(i, t, c) : [];
      }
      function El(i) {
        if (!(i && i.length))
          return [];
        var c = 0;
        return i = On(i, function(d) {
          if (ft(d))
            return c = vt(d.length, c), !0;
        }), Fc(c, function(d) {
          return nt(i, Lc(d));
        });
      }
      function Lh(i, c) {
        if (!(i && i.length))
          return [];
        var d = El(i);
        return c == null ? d : nt(d, function(g) {
          return cr(c, t, g);
        });
      }
      var kb = Me(function(i, c) {
        return ft(i) ? wi(i, c) : [];
      }), Pb = Me(function(i) {
        return il(On(i, ft));
      }), Nb = Me(function(i) {
        var c = Ar(i);
        return ft(c) && (c = t), il(On(i, ft), me(c, 2));
      }), Ob = Me(function(i) {
        var c = Ar(i);
        return c = typeof c == "function" ? c : t, il(On(i, ft), t, c);
      }), Mb = Me(El);
      function xb(i, c) {
        return Zf(i || [], c || [], Ci);
      }
      function Lb(i, c) {
        return Zf(i || [], c || [], _i);
      }
      var Db = Me(function(i) {
        var c = i.length, d = c > 1 ? i[c - 1] : t;
        return d = typeof d == "function" ? (i.pop(), d) : t, Lh(i, d);
      });
      function Dh(i) {
        var c = w(i);
        return c.__chain__ = !0, c;
      }
      function Ub(i, c) {
        return c(i), i;
      }
      function Ya(i, c) {
        return c(i);
      }
      var Fb = mn(function(i) {
        var c = i.length, d = c ? i[0] : 0, g = this.__wrapped__, y = function(b) {
          return Vc(b, i);
        };
        return c > 1 || this.__actions__.length || !(g instanceof Ue) || !vn(d) ? this.thru(y) : (g = g.slice(d, +d + (c ? 1 : 0)), g.__actions__.push({
          func: Ya,
          args: [y],
          thisArg: t
        }), new Sr(g, this.__chain__).thru(function(b) {
          return c && !b.length && b.push(t), b;
        }));
      });
      function Hb() {
        return Dh(this);
      }
      function Bb() {
        return new Sr(this.value(), this.__chain__);
      }
      function Kb() {
        this.__values__ === t && (this.__values__ = Qh(this.value()));
        var i = this.__index__ >= this.__values__.length, c = i ? t : this.__values__[this.__index__++];
        return { done: i, value: c };
      }
      function qb() {
        return this;
      }
      function $b(i) {
        for (var c, d = this; d instanceof xa; ) {
          var g = kh(d);
          g.__index__ = 0, g.__values__ = t, c ? y.__wrapped__ = g : c = g;
          var y = g;
          d = d.__wrapped__;
        }
        return y.__wrapped__ = i, c;
      }
      function Gb() {
        var i = this.__wrapped__;
        if (i instanceof Ue) {
          var c = i;
          return this.__actions__.length && (c = new Ue(this)), c = c.reverse(), c.__actions__.push({
            func: Ya,
            args: [wl],
            thisArg: t
          }), new Sr(c, this.__chain__);
        }
        return this.thru(wl);
      }
      function zb() {
        return Xf(this.__wrapped__, this.__actions__);
      }
      var Vb = Ka(function(i, c, d) {
        We.call(i, d) ? ++i[d] : pn(i, d, 1);
      });
      function Wb(i, c, d) {
        var g = ke(i) ? df : Uw;
        return d && Gt(i, c, d) && (c = t), g(i, me(c, 3));
      }
      function jb(i, c) {
        var d = ke(i) ? On : Lf;
        return d(i, me(c, 3));
      }
      var Yb = lh(Ph), Qb = lh(Nh);
      function Jb(i, c) {
        return St(Qa(i, c), 1);
      }
      function Xb(i, c) {
        return St(Qa(i, c), ie);
      }
      function Zb(i, c, d) {
        return d = d === t ? 1 : Ne(d), St(Qa(i, c), d);
      }
      function Uh(i, c) {
        var d = ke(i) ? br : Dn;
        return d(i, me(c, 3));
      }
      function Fh(i, c) {
        var d = ke(i) ? yC : xf;
        return d(i, me(c, 3));
      }
      var e_ = Ka(function(i, c, d) {
        We.call(i, d) ? i[d].push(c) : pn(i, d, [c]);
      });
      function t_(i, c, d, g) {
        i = Jt(i) ? i : qo(i), d = d && !g ? Ne(d) : 0;
        var y = i.length;
        return d < 0 && (d = vt(y + d, 0)), ts(i) ? d <= y && i.indexOf(c, d) > -1 : !!y && Po(i, c, d) > -1;
      }
      var r_ = Me(function(i, c, d) {
        var g = -1, y = typeof c == "function", b = Jt(i) ? D(i.length) : [];
        return Dn(i, function(T) {
          b[++g] = y ? cr(c, T, d) : Ei(T, c, d);
        }), b;
      }), n_ = Ka(function(i, c, d) {
        pn(i, d, c);
      });
      function Qa(i, c) {
        var d = ke(i) ? nt : Kf;
        return d(i, me(c, 3));
      }
      function o_(i, c, d, g) {
        return i == null ? [] : (ke(c) || (c = c == null ? [] : [c]), d = g ? t : d, ke(d) || (d = d == null ? [] : [d]), zf(i, c, d));
      }
      var i_ = Ka(function(i, c, d) {
        i[d ? 0 : 1].push(c);
      }, function() {
        return [[], []];
      });
      function a_(i, c, d) {
        var g = ke(i) ? Mc : gf, y = arguments.length < 3;
        return g(i, me(c, 4), d, y, Dn);
      }
      function s_(i, c, d) {
        var g = ke(i) ? CC : gf, y = arguments.length < 3;
        return g(i, me(c, 4), d, y, xf);
      }
      function c_(i, c) {
        var d = ke(i) ? On : Lf;
        return d(i, Za(me(c, 3)));
      }
      function l_(i) {
        var c = ke(i) ? Pf : tE;
        return c(i);
      }
      function u_(i, c, d) {
        (d ? Gt(i, c, d) : c === t) ? c = 1 : c = Ne(c);
        var g = ke(i) ? Ow : rE;
        return g(i, c);
      }
      function d_(i) {
        var c = ke(i) ? Mw : oE;
        return c(i);
      }
      function f_(i) {
        if (i == null)
          return 0;
        if (Jt(i))
          return ts(i) ? Oo(i) : i.length;
        var c = xt(i);
        return c == Pt || c == bt ? i.size : Xc(i).length;
      }
      function h_(i, c, d) {
        var g = ke(i) ? xc : iE;
        return d && Gt(i, c, d) && (c = t), g(i, me(c, 3));
      }
      var p_ = Me(function(i, c) {
        if (i == null)
          return [];
        var d = c.length;
        return d > 1 && Gt(i, c[0], c[1]) ? c = [] : d > 2 && Gt(c[0], c[1], c[2]) && (c = [c[0]]), zf(i, St(c, 1), []);
      }), Ja = jC || function() {
        return _t.Date.now();
      };
      function g_(i, c) {
        if (typeof c != "function")
          throw new _r(s);
        return i = Ne(i), function() {
          if (--i < 1)
            return c.apply(this, arguments);
        };
      }
      function Hh(i, c, d) {
        return c = d ? t : c, c = i && c == null ? i.length : c, gn(i, H, t, t, t, t, c);
      }
      function Bh(i, c) {
        var d;
        if (typeof c != "function")
          throw new _r(s);
        return i = Ne(i), function() {
          return --i > 0 && (d = c.apply(this, arguments)), i <= 1 && (c = t), d;
        };
      }
      var bl = Me(function(i, c, d) {
        var g = _;
        if (d.length) {
          var y = xn(d, Bo(bl));
          g |= O;
        }
        return gn(i, g, c, d, y);
      }), Kh = Me(function(i, c, d) {
        var g = _ | A;
        if (d.length) {
          var y = xn(d, Bo(Kh));
          g |= O;
        }
        return gn(c, g, i, d, y);
      });
      function qh(i, c, d) {
        c = d ? t : c;
        var g = gn(i, S, t, t, t, t, t, c);
        return g.placeholder = qh.placeholder, g;
      }
      function $h(i, c, d) {
        c = d ? t : c;
        var g = gn(i, I, t, t, t, t, t, c);
        return g.placeholder = $h.placeholder, g;
      }
      function Gh(i, c, d) {
        var g, y, b, T, P, x, K = 0, q = !1, V = !1, te = !0;
        if (typeof i != "function")
          throw new _r(s);
        c = Rr(c) || 0, it(d) && (q = !!d.leading, V = "maxWait" in d, b = V ? vt(Rr(d.maxWait) || 0, c) : b, te = "trailing" in d ? !!d.trailing : te);
        function fe(ht) {
          var qr = g, wn = y;
          return g = y = t, K = ht, T = i.apply(wn, qr), T;
        }
        function ye(ht) {
          return K = ht, P = Ii(Le, c), q ? fe(ht) : T;
        }
        function Oe(ht) {
          var qr = ht - x, wn = ht - K, lp = c - qr;
          return V ? Mt(lp, b - wn) : lp;
        }
        function Ce(ht) {
          var qr = ht - x, wn = ht - K;
          return x === t || qr >= c || qr < 0 || V && wn >= b;
        }
        function Le() {
          var ht = Ja();
          if (Ce(ht))
            return Fe(ht);
          P = Ii(Le, Oe(ht));
        }
        function Fe(ht) {
          return P = t, te && g ? fe(ht) : (g = y = t, T);
        }
        function fr() {
          P !== t && eh(P), K = 0, g = x = y = P = t;
        }
        function zt() {
          return P === t ? T : Fe(Ja());
        }
        function hr() {
          var ht = Ja(), qr = Ce(ht);
          if (g = arguments, y = this, x = ht, qr) {
            if (P === t)
              return ye(x);
            if (V)
              return eh(P), P = Ii(Le, c), fe(x);
          }
          return P === t && (P = Ii(Le, c)), T;
        }
        return hr.cancel = fr, hr.flush = zt, hr;
      }
      var m_ = Me(function(i, c) {
        return Mf(i, 1, c);
      }), v_ = Me(function(i, c, d) {
        return Mf(i, Rr(c) || 0, d);
      });
      function y_(i) {
        return gn(i, Q);
      }
      function Xa(i, c) {
        if (typeof i != "function" || c != null && typeof c != "function")
          throw new _r(s);
        var d = function() {
          var g = arguments, y = c ? c.apply(this, g) : g[0], b = d.cache;
          if (b.has(y))
            return b.get(y);
          var T = i.apply(this, g);
          return d.cache = b.set(y, T) || b, T;
        };
        return d.cache = new (Xa.Cache || hn)(), d;
      }
      Xa.Cache = hn;
      function Za(i) {
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
      function C_(i) {
        return Bh(2, i);
      }
      var w_ = aE(function(i, c) {
        c = c.length == 1 && ke(c[0]) ? nt(c[0], lr(me())) : nt(St(c, 1), lr(me()));
        var d = c.length;
        return Me(function(g) {
          for (var y = -1, b = Mt(g.length, d); ++y < b; )
            g[y] = c[y].call(this, g[y]);
          return cr(i, this, g);
        });
      }), _l = Me(function(i, c) {
        var d = xn(c, Bo(_l));
        return gn(i, O, t, c, d);
      }), zh = Me(function(i, c) {
        var d = xn(c, Bo(zh));
        return gn(i, L, t, c, d);
      }), E_ = mn(function(i, c) {
        return gn(i, U, t, t, t, c);
      });
      function b_(i, c) {
        if (typeof i != "function")
          throw new _r(s);
        return c = c === t ? c : Ne(c), Me(i, c);
      }
      function __(i, c) {
        if (typeof i != "function")
          throw new _r(s);
        return c = c == null ? 0 : vt(Ne(c), 0), Me(function(d) {
          var g = d[c], y = Hn(d, 0, c);
          return g && Mn(y, g), cr(i, this, y);
        });
      }
      function S_(i, c, d) {
        var g = !0, y = !0;
        if (typeof i != "function")
          throw new _r(s);
        return it(d) && (g = "leading" in d ? !!d.leading : g, y = "trailing" in d ? !!d.trailing : y), Gh(i, c, {
          leading: g,
          maxWait: c,
          trailing: y
        });
      }
      function T_(i) {
        return Hh(i, 1);
      }
      function I_(i, c) {
        return _l(sl(c), i);
      }
      function A_() {
        if (!arguments.length)
          return [];
        var i = arguments[0];
        return ke(i) ? i : [i];
      }
      function R_(i) {
        return Tr(i, v);
      }
      function k_(i, c) {
        return c = typeof c == "function" ? c : t, Tr(i, v, c);
      }
      function P_(i) {
        return Tr(i, p | v);
      }
      function N_(i, c) {
        return c = typeof c == "function" ? c : t, Tr(i, p | v, c);
      }
      function O_(i, c) {
        return c == null || Of(i, c, wt(c));
      }
      function Kr(i, c) {
        return i === c || i !== i && c !== c;
      }
      var M_ = za(Yc), x_ = za(function(i, c) {
        return i >= c;
      }), co = Ff(function() {
        return arguments;
      }()) ? Ff : function(i) {
        return st(i) && We.call(i, "callee") && !Sf.call(i, "callee");
      }, ke = D.isArray, L_ = of ? lr(of) : $w;
      function Jt(i) {
        return i != null && es(i.length) && !yn(i);
      }
      function ft(i) {
        return st(i) && Jt(i);
      }
      function D_(i) {
        return i === !0 || i === !1 || st(i) && $t(i) == sr;
      }
      var Bn = QC || xl, U_ = af ? lr(af) : Gw;
      function F_(i) {
        return st(i) && i.nodeType === 1 && !Ai(i);
      }
      function H_(i) {
        if (i == null)
          return !0;
        if (Jt(i) && (ke(i) || typeof i == "string" || typeof i.splice == "function" || Bn(i) || Ko(i) || co(i)))
          return !i.length;
        var c = xt(i);
        if (c == Pt || c == bt)
          return !i.size;
        if (Ti(i))
          return !Xc(i).length;
        for (var d in i)
          if (We.call(i, d))
            return !1;
        return !0;
      }
      function B_(i, c) {
        return bi(i, c);
      }
      function K_(i, c, d) {
        d = typeof d == "function" ? d : t;
        var g = d ? d(i, c) : t;
        return g === t ? bi(i, c, t, d) : !!g;
      }
      function Sl(i) {
        if (!st(i))
          return !1;
        var c = $t(i);
        return c == qt || c == dn || typeof i.message == "string" && typeof i.name == "string" && !Ai(i);
      }
      function q_(i) {
        return typeof i == "number" && If(i);
      }
      function yn(i) {
        if (!it(i))
          return !1;
        var c = $t(i);
        return c == wr || c == Ye || c == un || c == Zn;
      }
      function Vh(i) {
        return typeof i == "number" && i == Ne(i);
      }
      function es(i) {
        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= ne;
      }
      function it(i) {
        var c = typeof i;
        return i != null && (c == "object" || c == "function");
      }
      function st(i) {
        return i != null && typeof i == "object";
      }
      var Wh = sf ? lr(sf) : Vw;
      function $_(i, c) {
        return i === c || Jc(i, c, pl(c));
      }
      function G_(i, c, d) {
        return d = typeof d == "function" ? d : t, Jc(i, c, pl(c), d);
      }
      function z_(i) {
        return jh(i) && i != +i;
      }
      function V_(i) {
        if (kE(i))
          throw new Ae(a);
        return Hf(i);
      }
      function W_(i) {
        return i === null;
      }
      function j_(i) {
        return i == null;
      }
      function jh(i) {
        return typeof i == "number" || st(i) && $t(i) == Nt;
      }
      function Ai(i) {
        if (!st(i) || $t(i) != gt)
          return !1;
        var c = Aa(i);
        if (c === null)
          return !0;
        var d = We.call(c, "constructor") && c.constructor;
        return typeof d == "function" && d instanceof d && _a.call(d) == GC;
      }
      var Tl = cf ? lr(cf) : Ww;
      function Y_(i) {
        return Vh(i) && i >= -ne && i <= ne;
      }
      var Yh = lf ? lr(lf) : jw;
      function ts(i) {
        return typeof i == "string" || !ke(i) && st(i) && $t(i) == tt;
      }
      function dr(i) {
        return typeof i == "symbol" || st(i) && $t(i) == Qr;
      }
      var Ko = uf ? lr(uf) : Yw;
      function Q_(i) {
        return i === t;
      }
      function J_(i) {
        return st(i) && xt(i) == di;
      }
      function X_(i) {
        return st(i) && $t(i) == py;
      }
      var Z_ = za(Zc), eS = za(function(i, c) {
        return i <= c;
      });
      function Qh(i) {
        if (!i)
          return [];
        if (Jt(i))
          return ts(i) ? Hr(i) : Qt(i);
        if (pi && i[pi])
          return OC(i[pi]());
        var c = xt(i), d = c == Pt ? Bc : c == bt ? wa : qo;
        return d(i);
      }
      function Cn(i) {
        if (!i)
          return i === 0 ? i : 0;
        if (i = Rr(i), i === ie || i === -ie) {
          var c = i < 0 ? -1 : 1;
          return c * Pe;
        }
        return i === i ? i : 0;
      }
      function Ne(i) {
        var c = Cn(i), d = c % 1;
        return c === c ? d ? c - d : c : 0;
      }
      function Jh(i) {
        return i ? oo(Ne(i), 0, ot) : 0;
      }
      function Rr(i) {
        if (typeof i == "number")
          return i;
        if (dr(i))
          return Qe;
        if (it(i)) {
          var c = typeof i.valueOf == "function" ? i.valueOf() : i;
          i = it(c) ? c + "" : c;
        }
        if (typeof i != "string")
          return i === 0 ? i : +i;
        i = mf(i);
        var d = Ly.test(i);
        return d || Uy.test(i) ? gC(i.slice(2), d ? 2 : 8) : xy.test(i) ? Qe : +i;
      }
      function Xh(i) {
        return Xr(i, Xt(i));
      }
      function tS(i) {
        return i ? oo(Ne(i), -ne, ne) : i === 0 ? i : 0;
      }
      function Ge(i) {
        return i == null ? "" : ur(i);
      }
      var rS = Fo(function(i, c) {
        if (Ti(c) || Jt(c)) {
          Xr(c, wt(c), i);
          return;
        }
        for (var d in c)
          We.call(c, d) && Ci(i, d, c[d]);
      }), Zh = Fo(function(i, c) {
        Xr(c, Xt(c), i);
      }), rs = Fo(function(i, c, d, g) {
        Xr(c, Xt(c), i, g);
      }), nS = Fo(function(i, c, d, g) {
        Xr(c, wt(c), i, g);
      }), oS = mn(Vc);
      function iS(i, c) {
        var d = Uo(i);
        return c == null ? d : Nf(d, c);
      }
      var aS = Me(function(i, c) {
        i = Je(i);
        var d = -1, g = c.length, y = g > 2 ? c[2] : t;
        for (y && Gt(c[0], c[1], y) && (g = 1); ++d < g; )
          for (var b = c[d], T = Xt(b), P = -1, x = T.length; ++P < x; ) {
            var K = T[P], q = i[K];
            (q === t || Kr(q, xo[K]) && !We.call(i, K)) && (i[K] = b[K]);
          }
        return i;
      }), sS = Me(function(i) {
        return i.push(t, mh), cr(ep, t, i);
      });
      function cS(i, c) {
        return ff(i, me(c, 3), Jr);
      }
      function lS(i, c) {
        return ff(i, me(c, 3), jc);
      }
      function uS(i, c) {
        return i == null ? i : Wc(i, me(c, 3), Xt);
      }
      function dS(i, c) {
        return i == null ? i : Df(i, me(c, 3), Xt);
      }
      function fS(i, c) {
        return i && Jr(i, me(c, 3));
      }
      function hS(i, c) {
        return i && jc(i, me(c, 3));
      }
      function pS(i) {
        return i == null ? [] : Ua(i, wt(i));
      }
      function gS(i) {
        return i == null ? [] : Ua(i, Xt(i));
      }
      function Il(i, c, d) {
        var g = i == null ? t : io(i, c);
        return g === t ? d : g;
      }
      function mS(i, c) {
        return i != null && Ch(i, c, Hw);
      }
      function Al(i, c) {
        return i != null && Ch(i, c, Bw);
      }
      var vS = dh(function(i, c, d) {
        c != null && typeof c.toString != "function" && (c = Sa.call(c)), i[c] = d;
      }, kl(Zt)), yS = dh(function(i, c, d) {
        c != null && typeof c.toString != "function" && (c = Sa.call(c)), We.call(i, c) ? i[c].push(d) : i[c] = [d];
      }, me), CS = Me(Ei);
      function wt(i) {
        return Jt(i) ? kf(i) : Xc(i);
      }
      function Xt(i) {
        return Jt(i) ? kf(i, !0) : Qw(i);
      }
      function wS(i, c) {
        var d = {};
        return c = me(c, 3), Jr(i, function(g, y, b) {
          pn(d, c(g, y, b), g);
        }), d;
      }
      function ES(i, c) {
        var d = {};
        return c = me(c, 3), Jr(i, function(g, y, b) {
          pn(d, y, c(g, y, b));
        }), d;
      }
      var bS = Fo(function(i, c, d) {
        Fa(i, c, d);
      }), ep = Fo(function(i, c, d, g) {
        Fa(i, c, d, g);
      }), _S = mn(function(i, c) {
        var d = {};
        if (i == null)
          return d;
        var g = !1;
        c = nt(c, function(b) {
          return b = Fn(b, i), g || (g = b.length > 1), b;
        }), Xr(i, fl(i), d), g && (d = Tr(d, p | m | v, vE));
        for (var y = c.length; y--; )
          ol(d, c[y]);
        return d;
      });
      function SS(i, c) {
        return tp(i, Za(me(c)));
      }
      var TS = mn(function(i, c) {
        return i == null ? {} : Xw(i, c);
      });
      function tp(i, c) {
        if (i == null)
          return {};
        var d = nt(fl(i), function(g) {
          return [g];
        });
        return c = me(c), Vf(i, d, function(g, y) {
          return c(g, y[0]);
        });
      }
      function IS(i, c, d) {
        c = Fn(c, i);
        var g = -1, y = c.length;
        for (y || (y = 1, i = t); ++g < y; ) {
          var b = i == null ? t : i[Zr(c[g])];
          b === t && (g = y, b = d), i = yn(b) ? b.call(i) : b;
        }
        return i;
      }
      function AS(i, c, d) {
        return i == null ? i : _i(i, c, d);
      }
      function RS(i, c, d, g) {
        return g = typeof g == "function" ? g : t, i == null ? i : _i(i, c, d, g);
      }
      var rp = ph(wt), np = ph(Xt);
      function kS(i, c, d) {
        var g = ke(i), y = g || Bn(i) || Ko(i);
        if (c = me(c, 4), d == null) {
          var b = i && i.constructor;
          y ? d = g ? new b() : [] : it(i) ? d = yn(b) ? Uo(Aa(i)) : {} : d = {};
        }
        return (y ? br : Jr)(i, function(T, P, x) {
          return c(d, T, P, x);
        }), d;
      }
      function PS(i, c) {
        return i == null ? !0 : ol(i, c);
      }
      function NS(i, c, d) {
        return i == null ? i : Jf(i, c, sl(d));
      }
      function OS(i, c, d, g) {
        return g = typeof g == "function" ? g : t, i == null ? i : Jf(i, c, sl(d), g);
      }
      function qo(i) {
        return i == null ? [] : Hc(i, wt(i));
      }
      function MS(i) {
        return i == null ? [] : Hc(i, Xt(i));
      }
      function xS(i, c, d) {
        return d === t && (d = c, c = t), d !== t && (d = Rr(d), d = d === d ? d : 0), c !== t && (c = Rr(c), c = c === c ? c : 0), oo(Rr(i), c, d);
      }
      function LS(i, c, d) {
        return c = Cn(c), d === t ? (d = c, c = 0) : d = Cn(d), i = Rr(i), Kw(i, c, d);
      }
      function DS(i, c, d) {
        if (d && typeof d != "boolean" && Gt(i, c, d) && (c = d = t), d === t && (typeof c == "boolean" ? (d = c, c = t) : typeof i == "boolean" && (d = i, i = t)), i === t && c === t ? (i = 0, c = 1) : (i = Cn(i), c === t ? (c = i, i = 0) : c = Cn(c)), i > c) {
          var g = i;
          i = c, c = g;
        }
        if (d || i % 1 || c % 1) {
          var y = Af();
          return Mt(i + y * (c - i + pC("1e-" + ((y + "").length - 1))), c);
        }
        return tl(i, c);
      }
      var US = Ho(function(i, c, d) {
        return c = c.toLowerCase(), i + (d ? op(c) : c);
      });
      function op(i) {
        return Rl(Ge(i).toLowerCase());
      }
      function ip(i) {
        return i = Ge(i), i && i.replace(Hy, AC).replace(oC, "");
      }
      function FS(i, c, d) {
        i = Ge(i), c = ur(c);
        var g = i.length;
        d = d === t ? g : oo(Ne(d), 0, g);
        var y = d;
        return d -= c.length, d >= 0 && i.slice(d, y) == c;
      }
      function HS(i) {
        return i = Ge(i), i && Cy.test(i) ? i.replace(Ld, RC) : i;
      }
      function BS(i) {
        return i = Ge(i), i && Ty.test(i) ? i.replace(_c, "\\$&") : i;
      }
      var KS = Ho(function(i, c, d) {
        return i + (d ? "-" : "") + c.toLowerCase();
      }), qS = Ho(function(i, c, d) {
        return i + (d ? " " : "") + c.toLowerCase();
      }), $S = ch("toLowerCase");
      function GS(i, c, d) {
        i = Ge(i), c = Ne(c);
        var g = c ? Oo(i) : 0;
        if (!c || g >= c)
          return i;
        var y = (c - g) / 2;
        return Ga(Na(y), d) + i + Ga(Pa(y), d);
      }
      function zS(i, c, d) {
        i = Ge(i), c = Ne(c);
        var g = c ? Oo(i) : 0;
        return c && g < c ? i + Ga(c - g, d) : i;
      }
      function VS(i, c, d) {
        i = Ge(i), c = Ne(c);
        var g = c ? Oo(i) : 0;
        return c && g < c ? Ga(c - g, d) + i : i;
      }
      function WS(i, c, d) {
        return d || c == null ? c = 0 : c && (c = +c), ew(Ge(i).replace(Sc, ""), c || 0);
      }
      function jS(i, c, d) {
        return (d ? Gt(i, c, d) : c === t) ? c = 1 : c = Ne(c), rl(Ge(i), c);
      }
      function YS() {
        var i = arguments, c = Ge(i[0]);
        return i.length < 3 ? c : c.replace(i[1], i[2]);
      }
      var QS = Ho(function(i, c, d) {
        return i + (d ? "_" : "") + c.toLowerCase();
      });
      function JS(i, c, d) {
        return d && typeof d != "number" && Gt(i, c, d) && (c = d = t), d = d === t ? ot : d >>> 0, d ? (i = Ge(i), i && (typeof c == "string" || c != null && !Tl(c)) && (c = ur(c), !c && No(i)) ? Hn(Hr(i), 0, d) : i.split(c, d)) : [];
      }
      var XS = Ho(function(i, c, d) {
        return i + (d ? " " : "") + Rl(c);
      });
      function ZS(i, c, d) {
        return i = Ge(i), d = d == null ? 0 : oo(Ne(d), 0, i.length), c = ur(c), i.slice(d, d + c.length) == c;
      }
      function eT(i, c, d) {
        var g = w.templateSettings;
        d && Gt(i, c, d) && (c = t), i = Ge(i), c = rs({}, c, g, gh);
        var y = rs({}, c.imports, g.imports, gh), b = wt(y), T = Hc(y, b), P, x, K = 0, q = c.interpolate || ga, V = "__p += '", te = Kc(
          (c.escape || ga).source + "|" + q.source + "|" + (q === Dd ? My : ga).source + "|" + (c.evaluate || ga).source + "|$",
          "g"
        ), fe = "//# sourceURL=" + (We.call(c, "sourceURL") ? (c.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++lC + "]") + `
`;
        i.replace(te, function(Ce, Le, Fe, fr, zt, hr) {
          return Fe || (Fe = fr), V += i.slice(K, hr).replace(By, kC), Le && (P = !0, V += `' +
__e(` + Le + `) +
'`), zt && (x = !0, V += `';
` + zt + `;
__p += '`), Fe && (V += `' +
((__t = (` + Fe + `)) == null ? '' : __t) +
'`), K = hr + Ce.length, Ce;
        }), V += `';
`;
        var ye = We.call(c, "variable") && c.variable;
        if (!ye)
          V = `with (obj) {
` + V + `
}
`;
        else if (Ny.test(ye))
          throw new Ae(l);
        V = (x ? V.replace(gy, "") : V).replace(my, "$1").replace(vy, "$1;"), V = "function(" + (ye || "obj") + `) {
` + (ye ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (P ? ", __e = _.escape" : "") + (x ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + V + `return __p
}`;
        var Oe = sp(function() {
          return qe(b, fe + "return " + V).apply(t, T);
        });
        if (Oe.source = V, Sl(Oe))
          throw Oe;
        return Oe;
      }
      function tT(i) {
        return Ge(i).toLowerCase();
      }
      function rT(i) {
        return Ge(i).toUpperCase();
      }
      function nT(i, c, d) {
        if (i = Ge(i), i && (d || c === t))
          return mf(i);
        if (!i || !(c = ur(c)))
          return i;
        var g = Hr(i), y = Hr(c), b = vf(g, y), T = yf(g, y) + 1;
        return Hn(g, b, T).join("");
      }
      function oT(i, c, d) {
        if (i = Ge(i), i && (d || c === t))
          return i.slice(0, wf(i) + 1);
        if (!i || !(c = ur(c)))
          return i;
        var g = Hr(i), y = yf(g, Hr(c)) + 1;
        return Hn(g, 0, y).join("");
      }
      function iT(i, c, d) {
        if (i = Ge(i), i && (d || c === t))
          return i.replace(Sc, "");
        if (!i || !(c = ur(c)))
          return i;
        var g = Hr(i), y = vf(g, Hr(c));
        return Hn(g, y).join("");
      }
      function aT(i, c) {
        var d = Z, g = ae;
        if (it(c)) {
          var y = "separator" in c ? c.separator : y;
          d = "length" in c ? Ne(c.length) : d, g = "omission" in c ? ur(c.omission) : g;
        }
        i = Ge(i);
        var b = i.length;
        if (No(i)) {
          var T = Hr(i);
          b = T.length;
        }
        if (d >= b)
          return i;
        var P = d - Oo(g);
        if (P < 1)
          return g;
        var x = T ? Hn(T, 0, P).join("") : i.slice(0, P);
        if (y === t)
          return x + g;
        if (T && (P += x.length - P), Tl(y)) {
          if (i.slice(P).search(y)) {
            var K, q = x;
            for (y.global || (y = Kc(y.source, Ge(Ud.exec(y)) + "g")), y.lastIndex = 0; K = y.exec(q); )
              var V = K.index;
            x = x.slice(0, V === t ? P : V);
          }
        } else if (i.indexOf(ur(y), P) != P) {
          var te = x.lastIndexOf(y);
          te > -1 && (x = x.slice(0, te));
        }
        return x + g;
      }
      function sT(i) {
        return i = Ge(i), i && yy.test(i) ? i.replace(xd, DC) : i;
      }
      var cT = Ho(function(i, c, d) {
        return i + (d ? " " : "") + c.toUpperCase();
      }), Rl = ch("toUpperCase");
      function ap(i, c, d) {
        return i = Ge(i), c = d ? t : c, c === t ? NC(i) ? HC(i) : bC(i) : i.match(c) || [];
      }
      var sp = Me(function(i, c) {
        try {
          return cr(i, t, c);
        } catch (d) {
          return Sl(d) ? d : new Ae(d);
        }
      }), lT = mn(function(i, c) {
        return br(c, function(d) {
          d = Zr(d), pn(i, d, bl(i[d], i));
        }), i;
      });
      function uT(i) {
        var c = i == null ? 0 : i.length, d = me();
        return i = c ? nt(i, function(g) {
          if (typeof g[1] != "function")
            throw new _r(s);
          return [d(g[0]), g[1]];
        }) : [], Me(function(g) {
          for (var y = -1; ++y < c; ) {
            var b = i[y];
            if (cr(b[0], this, g))
              return cr(b[1], this, g);
          }
        });
      }
      function dT(i) {
        return Dw(Tr(i, p));
      }
      function kl(i) {
        return function() {
          return i;
        };
      }
      function fT(i, c) {
        return i == null || i !== i ? c : i;
      }
      var hT = uh(), pT = uh(!0);
      function Zt(i) {
        return i;
      }
      function Pl(i) {
        return Bf(typeof i == "function" ? i : Tr(i, p));
      }
      function gT(i) {
        return qf(Tr(i, p));
      }
      function mT(i, c) {
        return $f(i, Tr(c, p));
      }
      var vT = Me(function(i, c) {
        return function(d) {
          return Ei(d, i, c);
        };
      }), yT = Me(function(i, c) {
        return function(d) {
          return Ei(i, d, c);
        };
      });
      function Nl(i, c, d) {
        var g = wt(c), y = Ua(c, g);
        d == null && !(it(c) && (y.length || !g.length)) && (d = c, c = i, i = this, y = Ua(c, wt(c)));
        var b = !(it(d) && "chain" in d) || !!d.chain, T = yn(i);
        return br(y, function(P) {
          var x = c[P];
          i[P] = x, T && (i.prototype[P] = function() {
            var K = this.__chain__;
            if (b || K) {
              var q = i(this.__wrapped__), V = q.__actions__ = Qt(this.__actions__);
              return V.push({ func: x, args: arguments, thisArg: i }), q.__chain__ = K, q;
            }
            return x.apply(i, Mn([this.value()], arguments));
          });
        }), i;
      }
      function CT() {
        return _t._ === this && (_t._ = zC), this;
      }
      function Ol() {
      }
      function wT(i) {
        return i = Ne(i), Me(function(c) {
          return Gf(c, i);
        });
      }
      var ET = ll(nt), bT = ll(df), _T = ll(xc);
      function cp(i) {
        return ml(i) ? Lc(Zr(i)) : Zw(i);
      }
      function ST(i) {
        return function(c) {
          return i == null ? t : io(i, c);
        };
      }
      var TT = fh(), IT = fh(!0);
      function Ml() {
        return [];
      }
      function xl() {
        return !1;
      }
      function AT() {
        return {};
      }
      function RT() {
        return "";
      }
      function kT() {
        return !0;
      }
      function PT(i, c) {
        if (i = Ne(i), i < 1 || i > ne)
          return [];
        var d = ot, g = Mt(i, ot);
        c = me(c), i -= ot;
        for (var y = Fc(g, c); ++d < i; )
          c(d);
        return y;
      }
      function NT(i) {
        return ke(i) ? nt(i, Zr) : dr(i) ? [i] : Qt(Rh(Ge(i)));
      }
      function OT(i) {
        var c = ++$C;
        return Ge(i) + c;
      }
      var MT = $a(function(i, c) {
        return i + c;
      }, 0), xT = ul("ceil"), LT = $a(function(i, c) {
        return i / c;
      }, 1), DT = ul("floor");
      function UT(i) {
        return i && i.length ? Da(i, Zt, Yc) : t;
      }
      function FT(i, c) {
        return i && i.length ? Da(i, me(c, 2), Yc) : t;
      }
      function HT(i) {
        return pf(i, Zt);
      }
      function BT(i, c) {
        return pf(i, me(c, 2));
      }
      function KT(i) {
        return i && i.length ? Da(i, Zt, Zc) : t;
      }
      function qT(i, c) {
        return i && i.length ? Da(i, me(c, 2), Zc) : t;
      }
      var $T = $a(function(i, c) {
        return i * c;
      }, 1), GT = ul("round"), zT = $a(function(i, c) {
        return i - c;
      }, 0);
      function VT(i) {
        return i && i.length ? Uc(i, Zt) : 0;
      }
      function WT(i, c) {
        return i && i.length ? Uc(i, me(c, 2)) : 0;
      }
      return w.after = g_, w.ary = Hh, w.assign = rS, w.assignIn = Zh, w.assignInWith = rs, w.assignWith = nS, w.at = oS, w.before = Bh, w.bind = bl, w.bindAll = lT, w.bindKey = Kh, w.castArray = A_, w.chain = Dh, w.chunk = DE, w.compact = UE, w.concat = FE, w.cond = uT, w.conforms = dT, w.constant = kl, w.countBy = Vb, w.create = iS, w.curry = qh, w.curryRight = $h, w.debounce = Gh, w.defaults = aS, w.defaultsDeep = sS, w.defer = m_, w.delay = v_, w.difference = HE, w.differenceBy = BE, w.differenceWith = KE, w.drop = qE, w.dropRight = $E, w.dropRightWhile = GE, w.dropWhile = zE, w.fill = VE, w.filter = jb, w.flatMap = Jb, w.flatMapDeep = Xb, w.flatMapDepth = Zb, w.flatten = Oh, w.flattenDeep = WE, w.flattenDepth = jE, w.flip = y_, w.flow = hT, w.flowRight = pT, w.fromPairs = YE, w.functions = pS, w.functionsIn = gS, w.groupBy = e_, w.initial = JE, w.intersection = XE, w.intersectionBy = ZE, w.intersectionWith = eb, w.invert = vS, w.invertBy = yS, w.invokeMap = r_, w.iteratee = Pl, w.keyBy = n_, w.keys = wt, w.keysIn = Xt, w.map = Qa, w.mapKeys = wS, w.mapValues = ES, w.matches = gT, w.matchesProperty = mT, w.memoize = Xa, w.merge = bS, w.mergeWith = ep, w.method = vT, w.methodOf = yT, w.mixin = Nl, w.negate = Za, w.nthArg = wT, w.omit = _S, w.omitBy = SS, w.once = C_, w.orderBy = o_, w.over = ET, w.overArgs = w_, w.overEvery = bT, w.overSome = _T, w.partial = _l, w.partialRight = zh, w.partition = i_, w.pick = TS, w.pickBy = tp, w.property = cp, w.propertyOf = ST, w.pull = ob, w.pullAll = xh, w.pullAllBy = ib, w.pullAllWith = ab, w.pullAt = sb, w.range = TT, w.rangeRight = IT, w.rearg = E_, w.reject = c_, w.remove = cb, w.rest = b_, w.reverse = wl, w.sampleSize = u_, w.set = AS, w.setWith = RS, w.shuffle = d_, w.slice = lb, w.sortBy = p_, w.sortedUniq = mb, w.sortedUniqBy = vb, w.split = JS, w.spread = __, w.tail = yb, w.take = Cb, w.takeRight = wb, w.takeRightWhile = Eb, w.takeWhile = bb, w.tap = Ub, w.throttle = S_, w.thru = Ya, w.toArray = Qh, w.toPairs = rp, w.toPairsIn = np, w.toPath = NT, w.toPlainObject = Xh, w.transform = kS, w.unary = T_, w.union = _b, w.unionBy = Sb, w.unionWith = Tb, w.uniq = Ib, w.uniqBy = Ab, w.uniqWith = Rb, w.unset = PS, w.unzip = El, w.unzipWith = Lh, w.update = NS, w.updateWith = OS, w.values = qo, w.valuesIn = MS, w.without = kb, w.words = ap, w.wrap = I_, w.xor = Pb, w.xorBy = Nb, w.xorWith = Ob, w.zip = Mb, w.zipObject = xb, w.zipObjectDeep = Lb, w.zipWith = Db, w.entries = rp, w.entriesIn = np, w.extend = Zh, w.extendWith = rs, Nl(w, w), w.add = MT, w.attempt = sp, w.camelCase = US, w.capitalize = op, w.ceil = xT, w.clamp = xS, w.clone = R_, w.cloneDeep = P_, w.cloneDeepWith = N_, w.cloneWith = k_, w.conformsTo = O_, w.deburr = ip, w.defaultTo = fT, w.divide = LT, w.endsWith = FS, w.eq = Kr, w.escape = HS, w.escapeRegExp = BS, w.every = Wb, w.find = Yb, w.findIndex = Ph, w.findKey = cS, w.findLast = Qb, w.findLastIndex = Nh, w.findLastKey = lS, w.floor = DT, w.forEach = Uh, w.forEachRight = Fh, w.forIn = uS, w.forInRight = dS, w.forOwn = fS, w.forOwnRight = hS, w.get = Il, w.gt = M_, w.gte = x_, w.has = mS, w.hasIn = Al, w.head = Mh, w.identity = Zt, w.includes = t_, w.indexOf = QE, w.inRange = LS, w.invoke = CS, w.isArguments = co, w.isArray = ke, w.isArrayBuffer = L_, w.isArrayLike = Jt, w.isArrayLikeObject = ft, w.isBoolean = D_, w.isBuffer = Bn, w.isDate = U_, w.isElement = F_, w.isEmpty = H_, w.isEqual = B_, w.isEqualWith = K_, w.isError = Sl, w.isFinite = q_, w.isFunction = yn, w.isInteger = Vh, w.isLength = es, w.isMap = Wh, w.isMatch = $_, w.isMatchWith = G_, w.isNaN = z_, w.isNative = V_, w.isNil = j_, w.isNull = W_, w.isNumber = jh, w.isObject = it, w.isObjectLike = st, w.isPlainObject = Ai, w.isRegExp = Tl, w.isSafeInteger = Y_, w.isSet = Yh, w.isString = ts, w.isSymbol = dr, w.isTypedArray = Ko, w.isUndefined = Q_, w.isWeakMap = J_, w.isWeakSet = X_, w.join = tb, w.kebabCase = KS, w.last = Ar, w.lastIndexOf = rb, w.lowerCase = qS, w.lowerFirst = $S, w.lt = Z_, w.lte = eS, w.max = UT, w.maxBy = FT, w.mean = HT, w.meanBy = BT, w.min = KT, w.minBy = qT, w.stubArray = Ml, w.stubFalse = xl, w.stubObject = AT, w.stubString = RT, w.stubTrue = kT, w.multiply = $T, w.nth = nb, w.noConflict = CT, w.noop = Ol, w.now = Ja, w.pad = GS, w.padEnd = zS, w.padStart = VS, w.parseInt = WS, w.random = DS, w.reduce = a_, w.reduceRight = s_, w.repeat = jS, w.replace = YS, w.result = IS, w.round = GT, w.runInContext = M, w.sample = l_, w.size = f_, w.snakeCase = QS, w.some = h_, w.sortedIndex = ub, w.sortedIndexBy = db, w.sortedIndexOf = fb, w.sortedLastIndex = hb, w.sortedLastIndexBy = pb, w.sortedLastIndexOf = gb, w.startCase = XS, w.startsWith = ZS, w.subtract = zT, w.sum = VT, w.sumBy = WT, w.template = eT, w.times = PT, w.toFinite = Cn, w.toInteger = Ne, w.toLength = Jh, w.toLower = tT, w.toNumber = Rr, w.toSafeInteger = tS, w.toString = Ge, w.toUpper = rT, w.trim = nT, w.trimEnd = oT, w.trimStart = iT, w.truncate = aT, w.unescape = sT, w.uniqueId = OT, w.upperCase = cT, w.upperFirst = Rl, w.each = Uh, w.eachRight = Fh, w.first = Mh, Nl(w, function() {
        var i = {};
        return Jr(w, function(c, d) {
          We.call(w.prototype, d) || (i[d] = c);
        }), i;
      }(), { chain: !1 }), w.VERSION = n, br(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
        w[i].placeholder = w;
      }), br(["drop", "take"], function(i, c) {
        Ue.prototype[i] = function(d) {
          d = d === t ? 1 : vt(Ne(d), 0);
          var g = this.__filtered__ && !c ? new Ue(this) : this.clone();
          return g.__filtered__ ? g.__takeCount__ = Mt(d, g.__takeCount__) : g.__views__.push({
            size: Mt(d, ot),
            type: i + (g.__dir__ < 0 ? "Right" : "")
          }), g;
        }, Ue.prototype[i + "Right"] = function(d) {
          return this.reverse()[i](d).reverse();
        };
      }), br(["filter", "map", "takeWhile"], function(i, c) {
        var d = c + 1, g = d == ee || d == J;
        Ue.prototype[i] = function(y) {
          var b = this.clone();
          return b.__iteratees__.push({
            iteratee: me(y, 3),
            type: d
          }), b.__filtered__ = b.__filtered__ || g, b;
        };
      }), br(["head", "last"], function(i, c) {
        var d = "take" + (c ? "Right" : "");
        Ue.prototype[i] = function() {
          return this[d](1).value()[0];
        };
      }), br(["initial", "tail"], function(i, c) {
        var d = "drop" + (c ? "" : "Right");
        Ue.prototype[i] = function() {
          return this.__filtered__ ? new Ue(this) : this[d](1);
        };
      }), Ue.prototype.compact = function() {
        return this.filter(Zt);
      }, Ue.prototype.find = function(i) {
        return this.filter(i).head();
      }, Ue.prototype.findLast = function(i) {
        return this.reverse().find(i);
      }, Ue.prototype.invokeMap = Me(function(i, c) {
        return typeof i == "function" ? new Ue(this) : this.map(function(d) {
          return Ei(d, i, c);
        });
      }), Ue.prototype.reject = function(i) {
        return this.filter(Za(me(i)));
      }, Ue.prototype.slice = function(i, c) {
        i = Ne(i);
        var d = this;
        return d.__filtered__ && (i > 0 || c < 0) ? new Ue(d) : (i < 0 ? d = d.takeRight(-i) : i && (d = d.drop(i)), c !== t && (c = Ne(c), d = c < 0 ? d.dropRight(-c) : d.take(c - i)), d);
      }, Ue.prototype.takeRightWhile = function(i) {
        return this.reverse().takeWhile(i).reverse();
      }, Ue.prototype.toArray = function() {
        return this.take(ot);
      }, Jr(Ue.prototype, function(i, c) {
        var d = /^(?:filter|find|map|reject)|While$/.test(c), g = /^(?:head|last)$/.test(c), y = w[g ? "take" + (c == "last" ? "Right" : "") : c], b = g || /^find/.test(c);
        y && (w.prototype[c] = function() {
          var T = this.__wrapped__, P = g ? [1] : arguments, x = T instanceof Ue, K = P[0], q = x || ke(T), V = function(Le) {
            var Fe = y.apply(w, Mn([Le], P));
            return g && te ? Fe[0] : Fe;
          };
          q && d && typeof K == "function" && K.length != 1 && (x = q = !1);
          var te = this.__chain__, fe = !!this.__actions__.length, ye = b && !te, Oe = x && !fe;
          if (!b && q) {
            T = Oe ? T : new Ue(this);
            var Ce = i.apply(T, P);
            return Ce.__actions__.push({ func: Ya, args: [V], thisArg: t }), new Sr(Ce, te);
          }
          return ye && Oe ? i.apply(this, P) : (Ce = this.thru(V), ye ? g ? Ce.value()[0] : Ce.value() : Ce);
        });
      }), br(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
        var c = Ea[i], d = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru", g = /^(?:pop|shift)$/.test(i);
        w.prototype[i] = function() {
          var y = arguments;
          if (g && !this.__chain__) {
            var b = this.value();
            return c.apply(ke(b) ? b : [], y);
          }
          return this[d](function(T) {
            return c.apply(ke(T) ? T : [], y);
          });
        };
      }), Jr(Ue.prototype, function(i, c) {
        var d = w[c];
        if (d) {
          var g = d.name + "";
          We.call(Do, g) || (Do[g] = []), Do[g].push({ name: c, func: d });
        }
      }), Do[qa(t, A).name] = [{
        name: "wrapper",
        func: t
      }], Ue.prototype.clone = sw, Ue.prototype.reverse = cw, Ue.prototype.value = lw, w.prototype.at = Fb, w.prototype.chain = Hb, w.prototype.commit = Bb, w.prototype.next = Kb, w.prototype.plant = $b, w.prototype.reverse = Gb, w.prototype.toJSON = w.prototype.valueOf = w.prototype.value = zb, w.prototype.first = w.prototype.head, pi && (w.prototype[pi] = qb), w;
    }, Mo = BC();
    eo ? ((eo.exports = Mo)._ = Mo, Pc._ = Mo) : _t._ = Mo;
  }).call(Ri);
})($s, $s.exports);
var cy = $s.exports;
const PO = {
  ifcEntities: []
}, ly = hc({
  name: "ifcData",
  initialState: PO,
  reducers: {
    setIfcData: (r, e) => {
      r.ifcEntities = e.payload;
    }
  }
}), { setIfcData: NO } = ly.actions, OO = (r) => r.ifcData.ifcEntities, uy = pa(OO, (r) => r[0]), MO = ly.reducer, Ug = (r) => cy.groupBy(r, "dictionaryUri");
async function xO(r, e, t) {
  try {
    const n = await r.api.classV1List({ Uri: e, IncludeClassRelations: !0 }, t);
    if (n.status !== 200)
      throw new Error(`API request failed with status ${n.status}`);
    return n.data;
  } catch (n) {
    return console.error("Error fetching classification:", n), null;
  }
}
function LO(r, e) {
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
const DO = (r) => {
  for (let e = r.length - 2; e >= 0; e -= 1)
    if (r[e] === r[e].toLowerCase() && r[e + 1] === r[e + 1].toUpperCase()) {
      if (r[r.length - 1] === r[r.length - 1].toUpperCase())
        return `${r.slice(0, e + 1)}.${r.slice(e + 1)}`;
      break;
    }
  return r;
}, UO = (r, e, t) => {
  let n = "";
  return t && r.toLowerCase() !== t.toLowerCase() && (e === "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3" ? n = ` (${DO(t)})` : n = ` (${t})`), `${r}${n}`;
}, FO = (r, e) => r.map((t) => ({
  value: t.uri ?? "",
  label: UO(t.name ?? "", e, t.code)
})), HO = (r, e) => {
  const t = {};
  return Object.entries(e).forEach(([n, o]) => {
    t[n] = FO(
      r[n] || o,
      n
    );
  }), t;
};
function BO({ api: r, activeClassificationUri: e, setClassifications: t }) {
  const n = Ft(ty), o = Ft(ny), a = Ft(AO), s = Ft(uy), l = Ft(sy), u = Ft(wO), [f, h] = Ee(0), [p, m] = Ee({}), [v, C] = Ee([]), [E, _] = Ee(
    () => Ug(v)
  ), [A, R] = Ee({}), S = ze(
    (L) => {
      const H = {
        headers: { Accept: "text/plain" }
      }, U = new Promise(function(Q) {
        const Z = {
          Uri: L,
          IncludeClassRelations: !0,
          IncludeClassProperties: !0
        };
        Q(
          r.api.classV1List(Z, H).then((ae) => ae.status !== 200 ? (console.error(`API request failed with status ${ae.status}`), null) : ae.data).catch((ae) => (console.error("Error fetching classification:", ae), null))
        );
      });
      return m((Q) => ({
        ...Q,
        classificationUri: U
      })), U;
    },
    [r.api]
  );
  ve(() => {
    _(Ug(v));
  }, [v]), ve(() => {
    if (h(0), e) {
      const L = {};
      e && (L[e] = S(e)), m(L);
    }
  }, [e, S, n]), ve(() => {
    const L = {
      headers: { Accept: "text/plain" }
    };
    h(Object.keys(p).length), f !== Object.keys(p).length && Promise.allSettled(Object.values(p)).then(function(H) {
      const U = H.map((Y) => Y.status === "fulfilled" ? Y.value : null).filter((Y) => Y !== null);
      H.map(async (Y) => {
        if (Y.status === "fulfilled") {
          const ue = Y.value;
          if (ue && ue.classRelations) {
            const ee = {
              ...p
            };
            ue.classRelations.forEach((he) => {
              he.relatedClassUri in Object.keys(p) || (ee[he.relatedClassUri] = xO(
                r,
                he.relatedClassUri,
                L
              ));
            }), m(ee);
          }
        }
      });
      const Q = U.filter(
        (Y) => Y.dictionaryUri && o.includes(Y.dictionaryUri)
      ), Z = Object.keys(A).filter((Y) => o.includes(Y)).reduce((Y, ue) => (Y[ue] = A[ue], Y), {}), ae = cy.groupBy(Q, "dictionaryUri");
      Object.entries(ae).forEach(([Y, ue]) => {
        ue.some((ee) => ee.uri === Z[Y]) || (Z[Y] = ue[0].uri);
      }), R(Z), t(Q), C(Q);
    });
  }, [
    p,
    f,
    A,
    r,
    t,
    n,
    o
  ]), ve(() => {
    t(
      Object.values(A).map((L) => v.find((H) => H.uri === L)).filter((L) => L !== void 0)
    );
  }, [A, v, t]), ve(() => {
    R((L) => o.reduce((U, Q) => {
      var Y;
      const ae = L[Q] || ((Y = LO(Q, s)) == null ? void 0 : Y.location) || "";
      return { ...U, [Q]: ae };
    }, {}));
  }, [o, s]);
  const I = ze(
    (L) => (H) => {
      if (!H)
        return;
      if (!v.find(
        (Q) => Q.uri === H
      )) {
        console.log(`Selected classification '${H}' not found`);
        return;
      }
      R((Q) => ({
        ...Q,
        [L]: H
      }));
    },
    [v]
  ), O = HO(E, a);
  return /* @__PURE__ */ we.jsx(we.Fragment, { children: Object.entries(O).map(([L, H]) => /* @__PURE__ */ we.jsx(
    cc,
    {
      mb: "sm",
      label: l[L] ? l[L].name : "",
      data: H,
      value: A[L],
      readOnly: H.length === 1,
      disabled: L === u,
      variant: H.length === 1 ? "filled" : "default",
      onChange: (U) => I(L)(U),
      clearable: !0
    },
    L
  )) });
}
function KO(r) {
  const { label: e, value: t, setValue: n, disabled: o } = r, [a, s] = Ee(!1), [l, u] = Ee(!0), f = (h) => {
    h.target.indeterminate = !1, n(h.target.checked);
  };
  return ve(() => {
    t === !0 ? (s(!0), u(!1)) : t === !1 ? (s(!1), u(!1)) : t === void 0 && (s(!1), u(!0));
  }, [t]), /* @__PURE__ */ we.jsx(
    fa,
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
function qO({ propertySet: r, property: e, propertyIndex: t, propertySets: n, setPropertySets: o }) {
  const [a, s] = Ee(), l = e, u = r, f = n, h = o;
  return ve(() => {
    var p, m, v;
    switch (l.type) {
      case "IfcPropertySingleValue": {
        l.nominalValue.type === "IfcBoolean" ? s(
          /* @__PURE__ */ we.jsx(
            KO,
            {
              label: l.name,
              disabled: !1,
              value: l.nominalValue.value,
              setValue: (C) => {
                const E = { ...f }, _ = { ...u };
                if (_.name) {
                  const A = { ...l };
                  A.nominalValue.value = C;
                  const R = _.hasProperties.findIndex(
                    (S) => S.name === l.name
                  );
                  R !== -1 && (_.hasProperties[R] = A, E[_.name] = _, h(E));
                }
              }
            }
          )
        ) : s(
          /* @__PURE__ */ we.jsx(
            Co,
            {
              label: l.name,
              placeholder: l.nominalValue.value,
              value: l.nominalValue.value,
              onChange: (C) => {
                const E = { ...f }, _ = { ...u };
                if (_.name) {
                  const A = { ...l };
                  A.nominalValue.value = C.target.value;
                  const R = _.hasProperties.findIndex(
                    (S) => S.name === l.name
                  );
                  R != -1 && (_.hasProperties[R] = A, E[_.name] = _, h(E));
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
          /* @__PURE__ */ we.jsx(
            cc,
            {
              label: l.name,
              value: C,
              onChange: (_) => {
                const A = E.find((O) => O.value === _), R = A ? [A] : [], S = { ...f }, I = { ...u };
                if (I.name) {
                  const O = { ...l };
                  O.enumerationValues = R;
                  const L = I.hasProperties.findIndex(
                    (H) => H.name === l.name
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
        s(/* @__PURE__ */ we.jsx(Co, { placeholder: l.name, value: "{ifcProperty.nominalValue}" }));
        break;
      }
    }
  }, [l, u, s, f, h]), a;
}
const $O = {
  Boolean: "IfcBoolean",
  Character: "IfcText",
  Integer: "IfcInteger",
  Real: "IfcReal",
  String: "IfcText",
  Time: "IfcDateTime"
};
function ta(r, e) {
  const t = r && $O[r] || "default";
  let n;
  return r === "Boolean" && typeof e == "string" ? e.toUpperCase() === "TRUE" ? n = !0 : e.toUpperCase() === "FALSE" ? n = !1 : n = void 0 : n = e, {
    type: t,
    value: n
  };
}
function dy(r, e, t) {
  if (r && r.isDefinedBy) {
    let n = r.isDefinedBy.find((o) => o.name === e);
    if (n || (n = r.isDefinedBy.find((o) => o.name === "")), n)
      return n.hasProperties.find(
        (o) => o.name === t
      );
  }
}
function GO(r, e, t, n) {
  const o = dy(e, t, n);
  return o && "nominalValue" in o ? ta(r, o.nominalValue.value) : ta(r);
}
function zO(r, e, t, n, o) {
  const a = dy(e, t, n);
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
function VO(r, e, t, n) {
  var l;
  const o = ((l = r.allowedValues) == null ? void 0 : l.map(
    (u) => ta(r.dataType, u.value)
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
  const s = r.predefinedValue ? [ta(r.dataType, r.predefinedValue)] : zO(
    r.dataType,
    n,
    t,
    e,
    o
  );
  return s.length > 0 && (a.enumerationValues = s), a;
}
function WO(r, e, t, n) {
  const o = {
    type: "IfcPropertySingleValue",
    name: e
  };
  r.propertyUri && (o.specification = r.propertyUri);
  const a = r.predefinedValue ? ta(r.dataType, r.predefinedValue) : GO(r.dataType, n, t, e);
  return a !== null && (o.nominalValue = a), o;
}
function jO(r, e, t) {
  const { propertyCode: n } = r, o = n || "unknown";
  return r.allowedValues ? VO(r, o, e, t) : WO(r, o, e, t);
}
function YO(r) {
  Ws();
  const { classifications: e } = r, { propertySets: t } = r, { setPropertySets: n } = r, { recursiveMode: o } = r, a = Ft(uy);
  return ve(() => {
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
        }), s[p].hasProperties.push(jO(h, p, a));
      });
    }), n(s);
  }, [e, n, o, a]), /* @__PURE__ */ we.jsx("div", { children: Jl.toArray(
    Object.values(t).map((s, l) => /* @__PURE__ */ we.jsx(Et, { children: /* @__PURE__ */ we.jsxs(Et.Item, { value: s.name || l.toString(), children: [
      /* @__PURE__ */ we.jsx(Et.Control, { children: s.name }),
      /* @__PURE__ */ we.jsx(Et.Panel, { children: /* @__PURE__ */ we.jsx(Ad, { children: Jl.toArray(
        s.hasProperties.map((u, f) => /* @__PURE__ */ we.jsx(
          qO,
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
function QO({ api: r, defaultValue: e, setActiveClassificationUri: t }) {
  var S;
  const { t: n } = Ws(), [o, a] = Ee([]), s = Ft(Md), l = Ke(null), u = Ke(e), [f, h] = Ee(u.current), [p, m] = Ee(((S = u.current) == null ? void 0 : S.label) || ""), [v] = UA(p, 300), [C, E] = Ee(!1), _ = ze((I) => {
    m(I);
  }, []), A = ze(
    (I) => {
      const O = o.find((L) => L.value === I);
      O && (h(O), E(!0));
    },
    [o]
  ), R = ze(
    (I) => {
      I.key === "Enter" && o[0] && (m(o[0].label), A(o[0].value), l.current && l.current.blur());
    },
    [o, A, l]
  );
  return ve(() => {
    e && !C && (m(e.label), h(e));
  }, [e, f, C]), ve(() => {
    if (s) {
      const I = {
        headers: { Accept: "text/plain" }
      }, O = {
        SearchText: v,
        DictionaryUri: s.ifcClassification.location
      };
      r.api.searchInDictionaryV1List(O, I).then((L) => {
        var U;
        const H = L.data;
        if (H) {
          if (H.count) {
            const Q = (U = H.dictionary) == null ? void 0 : U.classes;
            Q && a(
              Q.filter((Z) => Z.uri && Z.name).map(
                (Z) => ({
                  value: Z.uri,
                  label: Z.name
                })
              )
            );
          }
        } else
          console.error("API response data is null", L);
      }).catch((L) => {
        console.error("API request failed", L);
      });
    } else
      a([]);
  }, [r.api, v, s]), ve(() => {
    l.current && l.current.focus();
  }, []), ve(() => {
    f && t(f.value);
  }, [f, t]), /* @__PURE__ */ we.jsx(
    Sd,
    {
      label: `${n("searchMainDictionaryLabel")} ${s ? s.ifcClassification.name : ""}`,
      data: o,
      placeholder: "bSDD search...",
      value: p,
      onChange: _,
      onOptionSubmit: A,
      onKeyDown: R,
      ref: l,
      style: { width: "100%" }
    }
  );
}
function JO() {
  const { t: r } = Ws(), e = l1(), [t, n] = Ee(), [o, a] = Ee(), [s, l] = Ee(), [u, f] = Ee(!1), [h, p] = Ee([]), [m, v] = Ee({}), [C, E] = Ee(new Ji(Uv[c1])), _ = Ft(Md), A = Ft(ry), [R, S] = Ee(null), I = Ft(Iu), O = Ft(Iu), L = Ft(CO), H = Ft(ny), U = ze((ae) => {
    var ue;
    const Y = JSON.stringify(ae);
    (ue = window == null ? void 0 : window.bsddBridge) == null || ue.save(Y).then((ee) => {
      console.log("Sent to Revit", ee);
    });
  }, []), Q = ze(() => {
    var ae;
    (ae = window == null ? void 0 : window.bsddBridge) == null || ae.cancel();
  }, []), Z = (ae) => {
    S(ae);
  };
  return ve(() => {
    R && (console.log("settings updated: ", R), e(Zv(R)), S(null));
  }, [R, e]), ve(() => {
    I && E(new Ji(I));
  }, [I]), ve(() => {
  }, [e]), ve(() => {
    (async () => {
      if (window != null && window.bsddBridge) {
        const Y = await window.bsddBridge.loadSettings(), { settings: ue, ifcData: ee } = JSON.parse(Y);
        if (e(NO(ee)), Z(ue), !ee || ee.length === 0)
          return;
        l(ee[0]);
      }
    })();
  }, []), ve(() => {
    var Y;
    if (!s || !_)
      return;
    const ae = _.ifcClassification.location;
    (Y = s.hasAssociations) == null || Y.forEach((ue) => {
      var ee;
      if (ue.type === "IfcClassificationReference") {
        const he = ue;
        (ee = he.referencedSource) != null && ee.location && he.referencedSource.location === ae && (he.location && n(he.location), a({
          label: he.name,
          value: he.location
        }));
      }
    });
  }, [_, s]), ve(() => {
    if (I !== null && L !== null) {
      const ae = {
        bsddApiEnvironment: I,
        includeTestDictionaries: L,
        languageCode: A,
        dictionaryUris: H
      };
      e(iy(H)), e(SO(ae)), e(IO(ae));
    }
  }, [
    I,
    O,
    L,
    e,
    H,
    A
  ]), /* @__PURE__ */ we.jsxs(Id, { children: [
    /* @__PURE__ */ we.jsx(Co, { type: "hidden", name: "ifcType", id: "ifcType", value: "" }),
    /* @__PURE__ */ we.jsx(Co, { type: "hidden", name: "name", id: "name", value: "" }),
    /* @__PURE__ */ we.jsx(Co, { type: "hidden", name: "material", id: "material", value: "" }),
    /* @__PURE__ */ we.jsx(Ds, { mx: "md", mt: "lg", mb: "sm", children: /* @__PURE__ */ we.jsx(QO, { api: C, defaultValue: o, setActiveClassificationUri: n }) }),
    t ? /* @__PURE__ */ we.jsxs(we.Fragment, { children: [
      /* @__PURE__ */ we.jsxs(Et, { defaultValue: ["Classifications"], multiple: !0, children: [
        /* @__PURE__ */ we.jsxs(Et.Item, { value: "Classifications", children: [
          /* @__PURE__ */ we.jsx(Et.Control, { children: /* @__PURE__ */ we.jsx(Us, { order: 5, children: r("classificationsLabel") }) }),
          /* @__PURE__ */ we.jsx(Et.Panel, { children: /* @__PURE__ */ we.jsx(
            BO,
            {
              api: C,
              activeClassificationUri: t,
              setClassifications: p
            }
          ) })
        ] }, "Classifications"),
        /* @__PURE__ */ we.jsxs(Et.Item, { value: "Propertysets", children: [
          /* @__PURE__ */ we.jsx(Et.Control, { children: /* @__PURE__ */ we.jsx(Us, { order: 5, children: r("propertysetsLabel") }) }),
          /* @__PURE__ */ we.jsx(Et.Panel, { children: /* @__PURE__ */ we.jsx(
            YO,
            {
              classifications: h,
              propertySets: m,
              setPropertySets: v,
              recursiveMode: u
            }
          ) })
        ] }, "Propertysets")
      ] }),
      /* @__PURE__ */ we.jsxs(Ds, { my: "sm", justify: "center", children: [
        /* @__PURE__ */ we.jsx(
          kO,
          {
            callback: U,
            classifications: h,
            propertySetMap: m,
            ifcEntity: s
          }
        ),
        /* @__PURE__ */ we.jsx(ha, { fullWidth: !0, variant: "light", color: "gray", onClick: Q, children: r("cancel") })
      ] })
    ] }) : /* @__PURE__ */ we.jsxs(ud, { mx: "md", title: r("noClassificationSelected"), mt: "xl", children: [
      r("classSearchInstruction"),
      /* @__PURE__ */ we.jsx(Rv, { h: "md" }),
      r("needHelp"),
      " ",
      /* @__PURE__ */ we.jsx("a", { href: "https://github.com/buildingsmart-community/bSDD-Revit-plugin/wiki", target: "_blank", rel: "noreferrer", children: r("checkDocumentation") })
    ] })
  ] });
}
function XO() {
  const [r, e] = Ee(null);
  return ve(() => {
    const t = new vA(i1);
    e(t);
  }, []), r ? /* @__PURE__ */ we.jsx(Sm, { theme: o1, children: /* @__PURE__ */ we.jsx(JO, {}) }) : /* @__PURE__ */ we.jsx("div", { children: "Loading..." });
}
const ZO = {
  name: void 0,
  description: void 0,
  tag: void 0,
  predefinedType: void 0,
  isDefinedBy: [],
  hasAssociations: []
}, fy = hc({
  name: "ifcEntity",
  initialState: ZO,
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
fy.actions;
const eM = fy.reducer, tM = j1({
  reducer: {
    settings: EO,
    ifcData: MO,
    ifcEntity: eM,
    bsdd: RO
  }
});
Xl.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ we.jsx(k.StrictMode, { children: /* @__PURE__ */ we.jsx(A0, { store: tM, children: /* @__PURE__ */ we.jsx(XO, {}) }) })
);
