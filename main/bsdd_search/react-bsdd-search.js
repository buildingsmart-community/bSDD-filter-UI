var QT = Object.defineProperty;
var JT = (r, e, t) => e in r ? QT(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Vt = (r, e, t) => (JT(r, typeof e != "symbol" ? e + "" : e, t), t);
import * as De from "react";
import k, { createContext as To, useContext as jn, useState as Ee, useRef as Ke, useEffect as ge, useMemo as ps, useCallback as $e, useLayoutEffect as ku, useId as Kg, forwardRef as ut, cloneElement as Gs, Children as Xl, createElement as fp } from "react";
import * as XT from "react-dom";
import ZT, { flushSync as e0, createPortal as t0 } from "react-dom";
var Ri = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function r0(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var qg = { exports: {} }, zs = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var n0 = k, o0 = Symbol.for("react.element"), i0 = Symbol.for("react.fragment"), a0 = Object.prototype.hasOwnProperty, s0 = n0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function $g(r, e, t) {
  var n, o = {}, a = null, s = null;
  t !== void 0 && (a = "" + t), e.key !== void 0 && (a = "" + e.key), e.ref !== void 0 && (s = e.ref);
  for (n in e)
    a0.call(e, n) && !c0.hasOwnProperty(n) && (o[n] = e[n]);
  if (r && r.defaultProps)
    for (n in e = r.defaultProps, e)
      o[n] === void 0 && (o[n] = e[n]);
  return { $$typeof: o0, type: r, key: a, ref: s, props: o, _owner: s0.current };
}
zs.Fragment = i0;
zs.jsx = $g;
zs.jsxs = $g;
qg.exports = zs;
var we = qg.exports, Zl = {}, hp = ZT;
Zl.createRoot = hp.createRoot, Zl.hydrateRoot = hp.hydrateRoot;
var Gg = { exports: {} }, zg = {};
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
function l0(r, e) {
  return r === e && (r !== 0 || 1 / r === 1 / e) || r !== r && e !== e;
}
var u0 = typeof Object.is == "function" ? Object.is : l0, d0 = ra.useSyncExternalStore, f0 = ra.useRef, h0 = ra.useEffect, p0 = ra.useMemo, g0 = ra.useDebugValue;
zg.useSyncExternalStoreWithSelector = function(r, e, t, n, o) {
  var a = f0(null);
  if (a.current === null) {
    var s = { hasValue: !1, value: null };
    a.current = s;
  } else
    s = a.current;
  a = p0(function() {
    function u(v) {
      if (!f) {
        if (f = !0, h = v, v = n(v), o !== void 0 && s.hasValue) {
          var C = s.value;
          if (o(C, v))
            return p = C;
        }
        return p = v;
      }
      if (C = p, u0(h, v))
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
  var l = d0(r, a[0], a[1]);
  return h0(function() {
    s.hasValue = !0, s.value = l;
  }, [l]), g0(l), l;
};
Gg.exports = zg;
var m0 = Gg.exports, pr = (
  // prettier-ignore
  // @ts-ignore
  "default" in De ? De.default : De
), pp = Symbol.for("react-redux-context"), gp = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function v0() {
  if (!pr.createContext)
    return {};
  const r = gp[pp] ?? (gp[pp] = /* @__PURE__ */ new Map());
  let e = r.get(pr.createContext);
  return e || (e = pr.createContext(
    null
  ), r.set(pr.createContext, e)), e;
}
var Gn = /* @__PURE__ */ v0(), y0 = () => {
  throw new Error("uSES not initialized!");
};
function Pu(r = Gn) {
  return function() {
    return pr.useContext(r);
  };
}
var Vg = /* @__PURE__ */ Pu(), Wg = y0, C0 = (r) => {
  Wg = r;
}, w0 = (r, e) => r === e;
function E0(r = Gn) {
  const e = r === Gn ? Vg : Pu(r), t = (n, o = {}) => {
    const { equalityFn: a = w0, devModeChecks: s = {} } = typeof o == "function" ? { equalityFn: o } : o, {
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
    ), v = Wg(
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
var b0 = /* @__PURE__ */ E0();
function _0(r) {
  r();
}
function S0() {
  let r = null, e = null;
  return {
    clear() {
      r = null, e = null;
    },
    notify() {
      _0(() => {
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
function T0(r, e) {
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
    o++, t || (t = e ? e.addNestedSub(u) : r.subscribe(u), n = S0());
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
var I0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", A0 = I0 ? pr.useLayoutEffect : pr.useEffect;
function R0({
  store: r,
  context: e,
  children: t,
  serverState: n,
  stabilityCheck: o = "once",
  identityFunctionCheck: a = "once"
}) {
  const s = pr.useMemo(() => {
    const f = T0(r);
    return {
      store: r,
      subscription: f,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      identityFunctionCheck: a
    };
  }, [r, n, o, a]), l = pr.useMemo(() => r.getState(), [r]);
  A0(() => {
    const { subscription: f } = s;
    return f.onStateChange = f.notifyNestedSubs, f.trySubscribe(), l !== r.getState() && f.notifyNestedSubs(), () => {
      f.tryUnsubscribe(), f.onStateChange = void 0;
    };
  }, [s, l]);
  const u = e || Gn;
  return /* @__PURE__ */ pr.createElement(u.Provider, { value: s }, t);
}
var k0 = R0;
function jg(r = Gn) {
  const e = r === Gn ? Vg : (
    // @ts-ignore
    Pu(r)
  ), t = () => {
    const { store: n } = e();
    return n;
  };
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var P0 = /* @__PURE__ */ jg();
function N0(r = Gn) {
  const e = r === Gn ? P0 : jg(r), t = () => e().dispatch;
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var O0 = /* @__PURE__ */ N0();
C0(m0.useSyncExternalStoreWithSelector);
const M0 = {
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
let x0 = class eu {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || M0, this.options = t, this.debug = t.debug;
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
var rn = new x0();
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
function vp(r) {
  return r == null ? "" : "" + r;
}
function L0(r, e, t) {
  r.forEach((n) => {
    e[n] && (t[n] = e[n]);
  });
}
function Nu(r, e, t) {
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
  } = Nu(r, e, Object);
  n[o] = t;
}
function D0(r, e, t, n) {
  const {
    obj: o,
    k: a
  } = Nu(r, e, Object);
  o[a] = o[a] || [], n && (o[a] = o[a].concat(t)), n || o[a].push(t);
}
function gs(r, e) {
  const {
    obj: t,
    k: n
  } = Nu(r, e);
  if (t)
    return t[n];
}
function U0(r, e, t) {
  const n = gs(r, t);
  return n !== void 0 ? n : gs(e, t);
}
function Yg(r, e, t) {
  for (const n in e)
    n !== "__proto__" && n !== "constructor" && (n in r ? typeof r[n] == "string" || r[n] instanceof String || typeof e[n] == "string" || e[n] instanceof String ? t && (r[n] = e[n]) : Yg(r[n], e[n], t) : r[n] = e[n]);
  return r;
}
function $o(r) {
  return r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var F0 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function H0(r) {
  return typeof r == "string" ? r.replace(/[&<>"'\/]/g, (e) => F0[e]) : r;
}
const B0 = [" ", ",", "?", "!", ";"];
function K0(r, e, t) {
  e = e || "", t = t || "";
  const n = B0.filter((s) => e.indexOf(s) < 0 && t.indexOf(s) < 0);
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
class Cp extends Vs {
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
    let u = gs(this.data, l) || {};
    o ? Yg(u, n, a) : u = {
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
var Qg = {
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
class ys extends Vs {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), L0(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = rn.create("translator");
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
    const s = n && e.indexOf(n) > -1, l = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !K0(e, n, o);
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
            const F = `${L}${a}${q}`;
            O[q] = this.translate(F, {
              ...t,
              joinArrays: !1,
              ns: l
            }), O[q] === F && (O[q] = m[q]);
          }
        m = O;
      }
    } else if (A && typeof R == "string" && E === "[object Array]")
      m = m.join(R), m && (m = this.extendTranslation(m, e, t, n));
    else {
      let I = !1, O = !1;
      const L = t.count !== void 0 && typeof t.count != "string", q = ys.hasDefaultValue(t), F = L ? this.pluralResolver.getSuffix(f, t.count, t) : "", ie = t.ordinal && L ? this.pluralResolver.getSuffix(f, t.count, {
        ordinal: !1
      }) : "", j = t[`defaultValue${F}`] || t[`defaultValue${ie}`] || t.defaultValue;
      !this.isValidLookup(m) && q && (I = !0, m = j), this.isValidLookup(m) || (O = !0, m = s);
      const Z = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && O ? void 0 : m, se = q && j !== m && this.options.updateMissing;
      if (O || I || se) {
        if (this.logger.log(se ? "updateKey" : "missingKey", f, u, s, se ? j : m), a) {
          const J = this.resolve(s, {
            ...t,
            keySeparator: !1
          });
          J && J.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let X = [];
        const ce = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && ce && ce[0])
          for (let J = 0; J < ce.length; J++)
            X.push(ce[J]);
        else
          this.options.saveMissingTo === "all" ? X = this.languageUtils.toResolveHierarchy(t.lng || this.language) : X.push(t.lng || this.language);
        const V = (J, te, Ie) => {
          const Qe = q && Ie !== m ? Ie : Z;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(J, u, te, Qe, se, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(J, u, te, Qe, se, t), this.emit("missingKey", J, u, te, m);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && L ? X.forEach((J) => {
          this.pluralResolver.getSuffixes(J, t).forEach((te) => {
            V([J], s + te, t[`defaultValue${te}`] || j);
          });
        }) : V(X, s, j));
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
    return e != null && u && u.length && n.applyPostProcessor !== !1 && (e = Qg.handle(u, e, t, this.options && this.options.postProcessPassResolved ? {
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
function Ll(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
class Ep {
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
let q0 = [{
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
}], $0 = {
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
const G0 = ["v1", "v2", "v3"], z0 = ["v4"], bp = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function V0() {
  const r = {};
  return q0.forEach((e) => {
    e.lngs.forEach((t) => {
      r[t] = {
        numbers: e.nr,
        plurals: $0[e.fc]
      };
    });
  }), r;
}
class W0 {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = rn.create("pluralResolver"), (!this.options.compatibilityJSON || z0.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = V0();
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
    return !G0.includes(this.options.compatibilityJSON);
  }
}
function _p(r, e, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, a = U0(r, e, t);
  return !a && o && typeof t == "string" && (a = ms(r, t, n), a === void 0 && (a = ms(e, t, n))), a;
}
class j0 {
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
    this.escape = t.escape !== void 0 ? t.escape : H0, this.escapeValue = t.escapeValue !== void 0 ? t.escapeValue : !0, this.useRawValueToEscape = t.useRawValueToEscape !== void 0 ? t.useRawValueToEscape : !1, this.prefix = t.prefix ? $o(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? $o(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? $o(t.nestingPrefix) : t.nestingPrefixEscaped || $o("$t("), this.nestingSuffix = t.nestingSuffix ? $o(t.nestingSuffix) : t.nestingSuffixEscaped || $o(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = t.alwaysFormat !== void 0 ? t.alwaysFormat : !1, this.resetRegExp();
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
function Y0(r) {
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
class Q0 {
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
      } = Y0(u);
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
function J0(r, e) {
  r.pending[e] !== void 0 && (delete r.pending[e], r.pendingCount--);
}
class X0 extends Vs {
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
      D0(u.loaded, [a], s), J0(u, e), t && u.errors.push(t), u.pendingCount === 0 && !u.done && (Object.keys(u.loaded).forEach((f) => {
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
function ns() {
}
function Z0(r) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach((t) => {
    typeof r[t] == "function" && (r[t] = r[t].bind(r));
  });
}
class Gi extends Vs {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Tp(e), this.services = {}, this.logger = rn, this.modules = {
      external: []
    }, Z0(this), t && !this.isInitialized && !e.isClone) {
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
      this.modules.formatter ? h = this.modules.formatter : typeof Intl < "u" && (h = Q0);
      const p = new Ep(this.options);
      this.store = new Cp(this.options.resources, this.options);
      const m = this.services;
      m.logger = rn, m.resourceStore = this.store, m.languageUtils = p, m.pluralResolver = new W0(p, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), h && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (m.formatter = a(h), m.formatter.init(m, this.options), this.options.interpolation.format = m.formatter.format.bind(m.formatter)), m.interpolator = new j0(this.options), m.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, m.backendConnector = new X0(a(this.modules.backend), m.resourceStore, m, this.options), m.backendConnector.on("*", function(v) {
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
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Qg.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
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
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], n = this.services && this.services.languageUtils || new Ep(Sp());
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
    }, n && (a.store = new Cp(this.store.data, o), a.services.resourceStore = a.store), a.translator = new ys(a.services, o), a.translator.on("*", function(l) {
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
const kt = Gi.createInstance();
kt.createInstance = Gi.createInstance;
kt.createInstance;
kt.dir;
kt.init;
kt.loadResources;
kt.reloadResources;
kt.use;
kt.changeLanguage;
kt.getFixedT;
kt.t;
kt.exists;
kt.setDefaultNamespace;
kt.hasLoadedNamespace;
kt.loadNamespaces;
kt.loadLanguages;
function eI() {
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
  typeof e[0] == "string" && Ip[e[0]] || (typeof e[0] == "string" && (Ip[e[0]] = /* @__PURE__ */ new Date()), eI(...e));
}
const Jg = (r, e) => () => {
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
  r.loadNamespaces(e, Jg(r, t));
}
function Rp(r, e, t, n) {
  typeof t == "string" && (t = [t]), t.forEach((o) => {
    r.options.ns.indexOf(o) < 0 && r.options.ns.push(o);
  }), r.loadLanguages(e, Jg(r, n));
}
function tI(r, e) {
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
function rI(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !e.languages || !e.languages.length ? (tu("i18n.languages were undefined or empty", e.languages), !0) : e.options.ignoreJSONStructure !== void 0 ? e.hasLoadedNamespace(r, {
    lng: t.lng,
    precheck: (o, a) => {
      if (t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !a(o.isLanguageChangingTo, r))
        return !1;
    }
  }) : tI(r, e, t);
}
const nI = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, oI = {
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
}, iI = (r) => oI[r], aI = (r) => r.replace(nI, iI);
let ru = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: aI
};
function sI() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  ru = {
    ...ru,
    ...r
  };
}
function cI() {
  return ru;
}
let Xg;
function lI(r) {
  Xg = r;
}
function uI() {
  return Xg;
}
const dI = {
  type: "3rdParty",
  init(r) {
    sI(r.options.react), lI(r);
  }
}, fI = To();
class hI {
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
const pI = (r, e) => {
  const t = Ke();
  return ge(() => {
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
  } = jn(fI) || {}, a = t || n || uI();
  if (a && !a.reportNamespaces && (a.reportNamespaces = new hI()), !a) {
    tu("You will need to pass in an i18next instance by using initReactI18next");
    const S = (O, L) => typeof L == "string" ? L : L && typeof L == "object" && typeof L.defaultValue == "string" ? L.defaultValue : Array.isArray(O) ? O[O.length - 1] : O, I = [S, {}, !1];
    return I.t = S, I.i18n = {}, I.ready = !1, I;
  }
  a.options.react && a.options.react.wait !== void 0 && tu("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const s = {
    ...cI(),
    ...a.options.react,
    ...e
  }, {
    useSuspense: l,
    keyPrefix: u
  } = s;
  let f = r || o || a.options && a.options.defaultNS;
  f = typeof f == "string" ? [f] : f || ["translation"], a.reportNamespaces.addUsedNamespaces && a.reportNamespaces.addUsedNamespaces(f);
  const h = (a.isInitialized || a.initializedStoreOnce) && f.every((S) => rI(S, a, s));
  function p() {
    return a.getFixedT(e.lng || null, s.nsMode === "fallback" ? f : f[0], u);
  }
  const [m, v] = Ee(p);
  let C = f.join();
  e.lng && (C = `${e.lng}${C}`);
  const E = pI(C), _ = Ke(!0);
  ge(() => {
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
  ge(() => {
    _.current && !R.current && v(p), R.current = !1;
  }, [a, u]);
  const A = [m, a, h];
  if (A.t = m, A.i18n = a, A.ready = h, h || !h && !l)
    return A;
  throw new Promise((S) => {
    e.lng ? Rp(a, e.lng, f, () => S()) : Ap(a, f, () => S());
  });
}
kt.use(dI).init({
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
var nu = function(r, e) {
  return nu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
  }, nu(r, e);
};
function Pt(r, e) {
  nu(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var de = function() {
  return de = Object.assign || function(e) {
    for (var t, n = 1, o = arguments.length; n < o; n++) {
      t = arguments[n];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, de.apply(this, arguments);
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
function gI(r, e) {
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
    r = r.concat(gI(arguments[e]));
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
function ir(r, e) {
  ou(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Ge = function() {
  return Ge = Object.assign || function(e) {
    for (var t, n = 1, o = arguments.length; n < o; n++) {
      t = arguments[n];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Ge.apply(this, arguments);
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
], Pp = js(na, [
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
var ke;
(function(r) {
  r.CLIENT_ID = "client_id", r.REDIRECT_URI = "redirect_uri", r.RESPONSE_TYPE = "response_type", r.RESPONSE_MODE = "response_mode", r.GRANT_TYPE = "grant_type", r.CLAIMS = "claims", r.SCOPE = "scope", r.ERROR = "error", r.ERROR_DESCRIPTION = "error_description", r.ACCESS_TOKEN = "access_token", r.ID_TOKEN = "id_token", r.REFRESH_TOKEN = "refresh_token", r.EXPIRES_IN = "expires_in", r.STATE = "state", r.NONCE = "nonce", r.PROMPT = "prompt", r.SESSION_STATE = "session_state", r.CLIENT_INFO = "client_info", r.CODE = "code", r.CODE_CHALLENGE = "code_challenge", r.CODE_CHALLENGE_METHOD = "code_challenge_method", r.CODE_VERIFIER = "code_verifier", r.CLIENT_REQUEST_ID = "client-request-id", r.X_CLIENT_SKU = "x-client-SKU", r.X_CLIENT_VER = "x-client-VER", r.X_CLIENT_OS = "x-client-OS", r.X_CLIENT_CPU = "x-client-CPU", r.X_CLIENT_CURR_TELEM = "x-client-current-telemetry", r.X_CLIENT_LAST_TELEM = "x-client-last-telemetry", r.X_MS_LIB_CAPABILITY = "x-ms-lib-capability", r.X_APP_NAME = "x-app-name", r.X_APP_VER = "x-app-ver", r.POST_LOGOUT_URI = "post_logout_redirect_uri", r.ID_TOKEN_HINT = "id_token_hint", r.DEVICE_CODE = "device_code", r.CLIENT_SECRET = "client_secret", r.CLIENT_ASSERTION = "client_assertion", r.CLIENT_ASSERTION_TYPE = "client_assertion_type", r.TOKEN_TYPE = "token_type", r.REQ_CNF = "req_cnf", r.OBO_ASSERTION = "assertion", r.REQUESTED_TOKEN_USE = "requested_token_use", r.ON_BEHALF_OF = "on_behalf_of", r.FOCI = "foci", r.CCS_HEADER = "X-AnchorMailbox", r.RETURN_SPA_CODE = "return_spa_code", r.NATIVE_BROKER = "nativebroker", r.LOGOUT_HINT = "logout_hint";
})(ke || (ke = {}));
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
var Np = {
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
var iu = "appmetadata", mI = "client_info", Ui = "1", Fi = {
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
var Hi = {
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
var au;
(function(r) {
  r.Jwt = "JWT", r.Jwk = "JWK", r.Pop = "pop";
})(au || (au = {}));
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
}, fe = (
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
    throw fe.createUnexpectedError(r);
  },
  base64Decode: function() {
    var r = "Crypto interface - base64Decode() has not been implemented";
    throw fe.createUnexpectedError(r);
  },
  base64Encode: function() {
    var r = "Crypto interface - base64Encode() has not been implemented";
    throw fe.createUnexpectedError(r);
  },
  generatePkceCodes: function() {
    return Se(this, void 0, void 0, function() {
      var r;
      return Te(this, function(e) {
        throw r = "Crypto interface - generatePkceCodes() has not been implemented", fe.createUnexpectedError(r);
      });
    });
  },
  getPublicKeyThumbprint: function() {
    return Se(this, void 0, void 0, function() {
      var r;
      return Te(this, function(e) {
        throw r = "Crypto interface - getPublicKeyThumbprint() has not been implemented", fe.createUnexpectedError(r);
      });
    });
  },
  removeTokenBindingKey: function() {
    return Se(this, void 0, void 0, function() {
      var r;
      return Te(this, function(e) {
        throw r = "Crypto interface - removeTokenBindingKey() has not been implemented", fe.createUnexpectedError(r);
      });
    });
  },
  clearKeystore: function() {
    return Se(this, void 0, void 0, function() {
      var r;
      return Te(this, function(e) {
        throw r = "Crypto interface - clearKeystore() has not been implemented", fe.createUnexpectedError(r);
      });
    });
  },
  signJwt: function() {
    return Se(this, void 0, void 0, function() {
      var r;
      return Te(this, function(e) {
        throw r = "Crypto interface - signJwt() has not been implemented", fe.createUnexpectedError(r);
      });
    });
  },
  hashString: function() {
    return Se(this, void 0, void 0, function() {
      var r;
      return Te(this, function(e) {
        throw r = "Crypto interface - hashString() has not been implemented", fe.createUnexpectedError(r);
      });
    });
  }
};
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Q = {
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
}, ae = (
  /** @class */
  function(r) {
    ir(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return o.name = "ClientAuthError", Object.setPrototypeOf(o, e.prototype), o;
    }
    return e.createClientInfoDecodingError = function(t) {
      return new e(Q.clientInfoDecodingError.code, Q.clientInfoDecodingError.desc + " Failed with error: " + t);
    }, e.createClientInfoEmptyError = function() {
      return new e(Q.clientInfoEmptyError.code, "" + Q.clientInfoEmptyError.desc);
    }, e.createTokenParsingError = function(t) {
      return new e(Q.tokenParsingError.code, Q.tokenParsingError.desc + " Failed with error: " + t);
    }, e.createTokenNullOrEmptyError = function(t) {
      return new e(Q.nullOrEmptyToken.code, Q.nullOrEmptyToken.desc + " Raw Token Value: " + t);
    }, e.createEndpointDiscoveryIncompleteError = function(t) {
      return new e(Q.endpointResolutionError.code, Q.endpointResolutionError.desc + " Detail: " + t);
    }, e.createNetworkError = function(t, n) {
      return new e(Q.networkError.code, Q.networkError.desc + " | Fetch client threw: " + n + " | Attempted to reach: " + t.split("?")[0]);
    }, e.createUnableToGetOpenidConfigError = function(t) {
      return new e(Q.unableToGetOpenidConfigError.code, Q.unableToGetOpenidConfigError.desc + " Attempted to retrieve endpoints from: " + t);
    }, e.createHashNotDeserializedError = function(t) {
      return new e(Q.hashNotDeserialized.code, Q.hashNotDeserialized.desc + " Given Object: " + t);
    }, e.createInvalidStateError = function(t, n) {
      return new e(Q.invalidStateError.code, Q.invalidStateError.desc + " Invalid State: " + t + ", Root Err: " + n);
    }, e.createStateMismatchError = function() {
      return new e(Q.stateMismatchError.code, Q.stateMismatchError.desc);
    }, e.createStateNotFoundError = function(t) {
      return new e(Q.stateNotFoundError.code, Q.stateNotFoundError.desc + ":  " + t);
    }, e.createNonceMismatchError = function() {
      return new e(Q.nonceMismatchError.code, Q.nonceMismatchError.desc);
    }, e.createAuthTimeNotFoundError = function() {
      return new e(Q.authTimeNotFoundError.code, Q.authTimeNotFoundError.desc);
    }, e.createMaxAgeTranspiredError = function() {
      return new e(Q.maxAgeTranspiredError.code, Q.maxAgeTranspiredError.desc);
    }, e.createNonceNotFoundError = function(t) {
      return new e(Q.nonceNotFoundError.code, Q.nonceNotFoundError.desc + ":  " + t);
    }, e.createMultipleMatchingTokensInCacheError = function() {
      return new e(Q.multipleMatchingTokens.code, Q.multipleMatchingTokens.desc + ".");
    }, e.createMultipleMatchingAccountsInCacheError = function() {
      return new e(Q.multipleMatchingAccounts.code, Q.multipleMatchingAccounts.desc);
    }, e.createMultipleMatchingAppMetadataInCacheError = function() {
      return new e(Q.multipleMatchingAppMetadata.code, Q.multipleMatchingAppMetadata.desc);
    }, e.createTokenRequestCannotBeMadeError = function() {
      return new e(Q.tokenRequestCannotBeMade.code, Q.tokenRequestCannotBeMade.desc);
    }, e.createAppendEmptyScopeToSetError = function(t) {
      return new e(Q.appendEmptyScopeError.code, Q.appendEmptyScopeError.desc + " Given Scope: " + t);
    }, e.createRemoveEmptyScopeFromSetError = function(t) {
      return new e(Q.removeEmptyScopeError.code, Q.removeEmptyScopeError.desc + " Given Scope: " + t);
    }, e.createAppendScopeSetError = function(t) {
      return new e(Q.appendScopeSetError.code, Q.appendScopeSetError.desc + " Detail Error: " + t);
    }, e.createEmptyInputScopeSetError = function() {
      return new e(Q.emptyInputScopeSetError.code, "" + Q.emptyInputScopeSetError.desc);
    }, e.createDeviceCodeCancelledError = function() {
      return new e(Q.DeviceCodePollingCancelled.code, "" + Q.DeviceCodePollingCancelled.desc);
    }, e.createDeviceCodeExpiredError = function() {
      return new e(Q.DeviceCodeExpired.code, "" + Q.DeviceCodeExpired.desc);
    }, e.createDeviceCodeUnknownError = function() {
      return new e(Q.DeviceCodeUnknownError.code, "" + Q.DeviceCodeUnknownError.desc);
    }, e.createNoAccountInSilentRequestError = function() {
      return new e(Q.NoAccountInSilentRequest.code, "" + Q.NoAccountInSilentRequest.desc);
    }, e.createNullOrUndefinedCacheRecord = function() {
      return new e(Q.invalidCacheRecord.code, Q.invalidCacheRecord.desc);
    }, e.createInvalidCacheEnvironmentError = function() {
      return new e(Q.invalidCacheEnvironment.code, Q.invalidCacheEnvironment.desc);
    }, e.createNoAccountFoundError = function() {
      return new e(Q.noAccountFound.code, Q.noAccountFound.desc);
    }, e.createCachePluginError = function() {
      return new e(Q.CachePluginError.code, "" + Q.CachePluginError.desc);
    }, e.createNoCryptoObjectError = function(t) {
      return new e(Q.noCryptoObj.code, "" + Q.noCryptoObj.desc + t);
    }, e.createInvalidCacheTypeError = function() {
      return new e(Q.invalidCacheType.code, "" + Q.invalidCacheType.desc);
    }, e.createUnexpectedAccountTypeError = function() {
      return new e(Q.unexpectedAccountType.code, "" + Q.unexpectedAccountType.desc);
    }, e.createUnexpectedCredentialTypeError = function() {
      return new e(Q.unexpectedCredentialType.code, "" + Q.unexpectedCredentialType.desc);
    }, e.createInvalidAssertionError = function() {
      return new e(Q.invalidAssertion.code, "" + Q.invalidAssertion.desc);
    }, e.createInvalidCredentialError = function() {
      return new e(Q.invalidClientCredential.code, "" + Q.invalidClientCredential.desc);
    }, e.createRefreshRequiredError = function() {
      return new e(Q.tokenRefreshRequired.code, Q.tokenRefreshRequired.desc);
    }, e.createUserTimeoutReachedError = function() {
      return new e(Q.userTimeoutReached.code, Q.userTimeoutReached.desc);
    }, e.createTokenClaimsRequiredError = function() {
      return new e(Q.tokenClaimsRequired.code, Q.tokenClaimsRequired.desc);
    }, e.createNoAuthCodeInServerResponseError = function() {
      return new e(Q.noAuthorizationCodeFromServer.code, Q.noAuthorizationCodeFromServer.desc);
    }, e.createBindingKeyNotRemovedError = function() {
      return new e(Q.bindingKeyNotRemovedError.code, Q.bindingKeyNotRemovedError.desc);
    }, e.createLogoutNotSupportedError = function() {
      return new e(Q.logoutNotSupported.code, Q.logoutNotSupported.desc);
    }, e.createKeyIdMissingError = function() {
      return new e(Q.keyIdMissing.code, Q.keyIdMissing.desc);
    }, e.createNoNetworkConnectivityError = function() {
      return new e(Q.noNetworkConnectivity.code, Q.noNetworkConnectivity.desc);
    }, e.createUserCanceledError = function() {
      return new e(Q.userCanceledError.code, Q.userCanceledError.desc);
    }, e;
  }(fe)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var oe = (
  /** @class */
  function() {
    function r() {
    }
    return r.decodeAuthToken = function(e) {
      if (r.isEmpty(e))
        throw ae.createTokenNullOrEmptyError(e);
      var t = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/, n = t.exec(e);
      if (!n || n.length < 4)
        throw ae.createTokenParsingError("Given token is malformed: " + JSON.stringify(e));
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
var Mu = (
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
        oe.isEmpty(t.correlationId) ? oe.isEmpty(this.correlationId) ? o = "[" + n + "]" : o = "[" + n + "] : [" + this.correlationId + "]" : o = "[" + n + "] : [" + t.correlationId + "]";
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
var Zg = "@azure/msal-common", xu = "13.3.1";
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
  }(ae)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Ut = (
  /** @class */
  function() {
    function r(e) {
      var t = this, n = e ? oe.trimArrayEntries(js(e)) : [], o = n ? oe.removeEmptyStringsFromArray(n) : [];
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
      return oe.isEmpty(e) ? !1 : n.scopes.has(e.toLowerCase());
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
      oe.isEmpty(e) || this.scopes.add(e.trim());
    }, r.prototype.appendScopes = function(e) {
      var t = this;
      try {
        e.forEach(function(n) {
          return t.appendScope(n);
        });
      } catch (n) {
        throw ae.createAppendScopeSetError(n);
      }
    }, r.prototype.removeScope = function(e) {
      if (oe.isEmpty(e))
        throw ae.createRemoveEmptyScopeFromSetError(e);
      this.scopes.delete(e.trim());
    }, r.prototype.removeOIDCScopes = function() {
      var e = this;
      Pp.forEach(function(t) {
        e.scopes.delete(t);
      });
    }, r.prototype.unionScopeSets = function(e) {
      if (!e)
        throw ae.createEmptyInputScopeSetError();
      var t = /* @__PURE__ */ new Set();
      return e.scopes.forEach(function(n) {
        return t.add(n.toLowerCase());
      }), this.scopes.forEach(function(n) {
        return t.add(n.toLowerCase());
      }), t;
    }, r.prototype.intersectingScopeSets = function(e) {
      if (!e)
        throw ae.createEmptyInputScopeSetError();
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
  if (oe.isEmpty(r))
    throw ae.createClientInfoEmptyError();
  try {
    var t = e.base64Decode(r);
    return JSON.parse(t);
  } catch (n) {
    throw ae.createClientInfoDecodingError(n.message);
  }
}
function jo(r) {
  if (oe.isEmpty(r))
    throw ae.createClientInfoDecodingError("Home account ID was empty.");
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
        case En.ADFS_ACCOUNT_TYPE:
          return bn.ADFS;
        case En.MSAV1_ACCOUNT_TYPE:
          return bn.MSA;
        case En.MSSTS_ACCOUNT_TYPE:
          return bn.MSSTS;
        case En.GENERIC_ACCOUNT_TYPE:
          return bn.GENERIC;
        default:
          throw ae.createUnexpectedAccountTypeError();
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
        throw ae.createInvalidCacheEnvironmentError();
      if (E.environment = _, E.realm = ((f = n == null ? void 0 : n.claims) === null || f === void 0 ? void 0 : f.tid) || N.EMPTY_STRING, n) {
        E.idTokenClaims = n.claims, E.localAccountId = ((h = n == null ? void 0 : n.claims) === null || h === void 0 ? void 0 : h.oid) || ((p = n == null ? void 0 : n.claims) === null || p === void 0 ? void 0 : p.sub) || N.EMPTY_STRING;
        var R = (m = n == null ? void 0 : n.claims) === null || m === void 0 ? void 0 : m.preferred_username, A = !((v = n == null ? void 0 : n.claims) === null || v === void 0) && v.emails ? n.claims.emails[0] : null;
        E.username = R || A || N.EMPTY_STRING, E.name = (C = n == null ? void 0 : n.claims) === null || C === void 0 ? void 0 : C.name;
      }
      return E.cloudGraphHostName = a, E.msGraphHost = s, E;
    }, r.createGenericAccount = function(e, t, n, o, a, s) {
      var l, u, f, h, p = new r();
      p.authorityType = n && n.authorityType === Wt.Adfs ? En.ADFS_ACCOUNT_TYPE : En.GENERIC_ACCOUNT_TYPE, p.homeAccountId = e, p.realm = N.EMPTY_STRING;
      var m = s || n && n.getPreferredCache();
      if (!m)
        throw ae.createInvalidCacheEnvironmentError();
      return t && (p.localAccountId = ((l = t == null ? void 0 : t.claims) === null || l === void 0 ? void 0 : l.oid) || ((u = t == null ? void 0 : t.claims) === null || u === void 0 ? void 0 : u.sub) || N.EMPTY_STRING, p.username = ((f = t == null ? void 0 : t.claims) === null || f === void 0 ? void 0 : f.upn) || N.EMPTY_STRING, p.name = ((h = t == null ? void 0 : t.claims) === null || h === void 0 ? void 0 : h.name) || N.EMPTY_STRING, p.idTokenClaims = t == null ? void 0 : t.claims), p.environment = m, p.cloudGraphHostName = o, p.msGraphHost = a, p;
    }, r.generateHomeAccountId = function(e, t, n, o, a) {
      var s, l = !((s = a == null ? void 0 : a.claims) === null || s === void 0) && s.sub ? a.claims.sub : N.EMPTY_STRING;
      if (t === Wt.Adfs || t === Wt.Dsts)
        return l;
      if (e)
        try {
          var u = _s(e, o);
          if (!oe.isEmpty(u.uid) && !oe.isEmpty(u.utid))
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
      if (oe.isEmpty(e))
        throw ae.createTokenNullOrEmptyError(e);
      this.rawToken = e, this.claims = r.extractTokenClaims(e, t);
    }
    return r.extractTokenClaims = function(e, t) {
      var n = oe.decodeAuthToken(e);
      try {
        var o = n.JWSPayload, a = t.base64Decode(o);
        return JSON.parse(a);
      } catch (s) {
        throw ae.createTokenParsingError(s);
      }
    }, r.checkMaxAge = function(e, t) {
      var n = 3e5;
      if (t === 0 || Date.now() - n > e + t)
        throw ae.createMaxAgeTranspiredError();
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var tr = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.clientId = e, this.cryptoImpl = t, this.commonLogger = n.clone(Zg, xu);
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
                throw ae.createNullOrUndefinedCacheRecord();
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
              }, n = this.getTokenKeys(), o = Ut.fromString(e.target), a = [], n.accessToken.forEach(function(u) {
                if (s.accessTokenKeyMatchesFilter(u, t, !1)) {
                  var f = s.getAccessTokenCredential(u);
                  if (f && s.credentialMatchesFilter(f, t)) {
                    var h = Ut.fromString(f.target);
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
                throw ae.createNoAccountFoundError();
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
              throw a.sent(), ae.createBindingKeyNotRemovedError();
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
        if (n.idTokenKeyMatchesFilter(s, Ge({ clientId: n.clientId }, e))) {
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
      var a = Ut.createSearchScopes(t.scopes), s = t.authenticationScheme || Ve.BEARER, l = s && s.toLowerCase() !== Ve.BEARER.toLowerCase() ? pe.ACCESS_TOKEN_WITH_AUTH_SCHEME : pe.ACCESS_TOKEN, u = {
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
        throw ae.createMultipleMatchingAppMetadataInCacheError();
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
      var o = Ut.fromString(e.target);
      return o.containsScopeSet(t);
    }, r.prototype.matchTokenType = function(e, t) {
      return !!(e.tokenType && e.tokenType === t);
    }, r.prototype.matchKeyId = function(e, t) {
      return !!(e.keyId && e.keyId === t);
    }, r.prototype.isAppMetadata = function(e) {
      return e.indexOf(iu) !== -1;
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
), vI = (
  /** @class */
  function(r) {
    ir(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.setAccount = function() {
      var t = "Storage interface - setAccount() has not been implemented for the cacheStorage interface.";
      throw fe.createUnexpectedError(t);
    }, e.prototype.getAccount = function() {
      var t = "Storage interface - getAccount() has not been implemented for the cacheStorage interface.";
      throw fe.createUnexpectedError(t);
    }, e.prototype.setIdTokenCredential = function() {
      var t = "Storage interface - setIdTokenCredential() has not been implemented for the cacheStorage interface.";
      throw fe.createUnexpectedError(t);
    }, e.prototype.getIdTokenCredential = function() {
      var t = "Storage interface - getIdTokenCredential() has not been implemented for the cacheStorage interface.";
      throw fe.createUnexpectedError(t);
    }, e.prototype.setAccessTokenCredential = function() {
      var t = "Storage interface - setAccessTokenCredential() has not been implemented for the cacheStorage interface.";
      throw fe.createUnexpectedError(t);
    }, e.prototype.getAccessTokenCredential = function() {
      var t = "Storage interface - getAccessTokenCredential() has not been implemented for the cacheStorage interface.";
      throw fe.createUnexpectedError(t);
    }, e.prototype.setRefreshTokenCredential = function() {
      var t = "Storage interface - setRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
      throw fe.createUnexpectedError(t);
    }, e.prototype.getRefreshTokenCredential = function() {
      var t = "Storage interface - getRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
      throw fe.createUnexpectedError(t);
    }, e.prototype.setAppMetadata = function() {
      var t = "Storage interface - setAppMetadata() has not been implemented for the cacheStorage interface.";
      throw fe.createUnexpectedError(t);
    }, e.prototype.getAppMetadata = function() {
      var t = "Storage interface - getAppMetadata() has not been implemented for the cacheStorage interface.";
      throw fe.createUnexpectedError(t);
    }, e.prototype.setServerTelemetry = function() {
      var t = "Storage interface - setServerTelemetry() has not been implemented for the cacheStorage interface.";
      throw fe.createUnexpectedError(t);
    }, e.prototype.getServerTelemetry = function() {
      var t = "Storage interface - getServerTelemetry() has not been implemented for the cacheStorage interface.";
      throw fe.createUnexpectedError(t);
    }, e.prototype.setAuthorityMetadata = function() {
      var t = "Storage interface - setAuthorityMetadata() has not been implemented for the cacheStorage interface.";
      throw fe.createUnexpectedError(t);
    }, e.prototype.getAuthorityMetadata = function() {
      var t = "Storage interface - getAuthorityMetadata() has not been implemented for the cacheStorage interface.";
      throw fe.createUnexpectedError(t);
    }, e.prototype.getAuthorityMetadataKeys = function() {
      var t = "Storage interface - getAuthorityMetadataKeys() has not been implemented for the cacheStorage interface.";
      throw fe.createUnexpectedError(t);
    }, e.prototype.setThrottlingCache = function() {
      var t = "Storage interface - setThrottlingCache() has not been implemented for the cacheStorage interface.";
      throw fe.createUnexpectedError(t);
    }, e.prototype.getThrottlingCache = function() {
      var t = "Storage interface - getThrottlingCache() has not been implemented for the cacheStorage interface.";
      throw fe.createUnexpectedError(t);
    }, e.prototype.removeItem = function() {
      var t = "Storage interface - removeItem() has not been implemented for the cacheStorage interface.";
      throw fe.createUnexpectedError(t);
    }, e.prototype.containsKey = function() {
      var t = "Storage interface - containsKey() has not been implemented for the cacheStorage interface.";
      throw fe.createUnexpectedError(t);
    }, e.prototype.getKeys = function() {
      var t = "Storage interface - getKeys() has not been implemented for the cacheStorage interface.";
      throw fe.createUnexpectedError(t);
    }, e.prototype.getAccountKeys = function() {
      var t = "Storage interface - getAccountKeys() has not been implemented for the cacheStorage interface.";
      throw fe.createUnexpectedError(t);
    }, e.prototype.getTokenKeys = function() {
      var t = "Storage interface - getTokenKeys() has not been implemented for the cacheStorage interface.";
      throw fe.createUnexpectedError(t);
    }, e.prototype.clear = function() {
      return Se(this, void 0, void 0, function() {
        var t;
        return Te(this, function(n) {
          throw t = "Storage interface - clear() has not been implemented for the cacheStorage interface.", fe.createUnexpectedError(t);
        });
      });
    }, e.prototype.updateCredentialCacheKey = function() {
      var t = "Storage interface - updateCredentialCacheKey() has not been implemented for the cacheStorage interface.";
      throw fe.createUnexpectedError(t);
    }, e;
  }(tr)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var yI = 300, em = {
  tokenRenewalOffsetSeconds: yI,
  preventCorsPreflight: !1
}, CI = {
  loggerCallback: function() {
  },
  piiLoggingEnabled: !1,
  logLevel: ct.Info,
  correlationId: N.EMPTY_STRING
}, wI = {
  claimsBasedCachingEnabled: !0
}, EI = {
  sendGetRequestAsync: function() {
    return Se(this, void 0, void 0, function() {
      var r;
      return Te(this, function(e) {
        throw r = "Network interface - sendGetRequestAsync() has not been implemented", fe.createUnexpectedError(r);
      });
    });
  },
  sendPostRequestAsync: function() {
    return Se(this, void 0, void 0, function() {
      var r;
      return Te(this, function(e) {
        throw r = "Network interface - sendPostRequestAsync() has not been implemented", fe.createUnexpectedError(r);
      });
    });
  }
}, bI = {
  sku: N.SKU,
  version: xu,
  cpu: N.EMPTY_STRING,
  os: N.EMPTY_STRING
}, _I = {
  clientSecret: N.EMPTY_STRING,
  clientAssertion: void 0
}, SI = {
  azureCloudInstance: zi.None,
  tenant: "" + N.DEFAULT_COMMON_TENANT
}, TI = {
  application: {
    appName: "",
    appVersion: ""
  }
};
function II(r) {
  var e = r.authOptions, t = r.systemOptions, n = r.loggerOptions, o = r.cacheOptions, a = r.storageInterface, s = r.networkInterface, l = r.cryptoInterface, u = r.clientCredentials, f = r.libraryInfo, h = r.telemetry, p = r.serverTelemetryManager, m = r.persistencePlugin, v = r.serializableCache, C = Ge(Ge({}, CI), n);
  return {
    authOptions: AI(e),
    systemOptions: Ge(Ge({}, em), t),
    loggerOptions: C,
    cacheOptions: Ge(Ge({}, wI), o),
    storageInterface: a || new vI(e.clientId, bs, new Mu(C)),
    networkInterface: s || EI,
    cryptoInterface: l || bs,
    clientCredentials: u || _I,
    libraryInfo: Ge(Ge({}, bI), f),
    telemetry: Ge(Ge({}, TI), h),
    serverTelemetryManager: p || null,
    persistencePlugin: m || null,
    serializableCache: v || null
  };
}
function AI(r) {
  return Ge({ clientCapabilities: [], azureCloudOptions: SI, skipAuthorityMetadataCache: !1 }, r);
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
  }(fe)
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
var RI = (
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
              throw a = s.sent(), a instanceof fe ? a : ae.createNetworkError(t, a);
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
      if (oe.isEmpty(e))
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
      if (oe.isEmpty(e) || oe.isEmpty(t))
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
var Ki = (
  /** @class */
  function() {
    function r() {
      this.parameters = /* @__PURE__ */ new Map();
    }
    return r.prototype.addResponseTypeCode = function() {
      this.parameters.set(ke.RESPONSE_TYPE, encodeURIComponent(N.CODE_RESPONSE_TYPE));
    }, r.prototype.addResponseTypeForTokenAndIdToken = function() {
      this.parameters.set(ke.RESPONSE_TYPE, encodeURIComponent(N.TOKEN_RESPONSE_TYPE + " " + N.ID_TOKEN_RESPONSE_TYPE));
    }, r.prototype.addResponseMode = function(e) {
      this.parameters.set(ke.RESPONSE_MODE, encodeURIComponent(e || Cs.QUERY));
    }, r.prototype.addNativeBroker = function() {
      this.parameters.set(ke.NATIVE_BROKER, encodeURIComponent("1"));
    }, r.prototype.addScopes = function(e, t) {
      t === void 0 && (t = !0);
      var n = t ? js(e || [], na) : e || [], o = new Ut(n);
      this.parameters.set(ke.SCOPE, encodeURIComponent(o.printScopes()));
    }, r.prototype.addClientId = function(e) {
      this.parameters.set(ke.CLIENT_ID, encodeURIComponent(e));
    }, r.prototype.addRedirectUri = function(e) {
      uo.validateRedirectUri(e), this.parameters.set(ke.REDIRECT_URI, encodeURIComponent(e));
    }, r.prototype.addPostLogoutRedirectUri = function(e) {
      uo.validateRedirectUri(e), this.parameters.set(ke.POST_LOGOUT_URI, encodeURIComponent(e));
    }, r.prototype.addIdTokenHint = function(e) {
      this.parameters.set(ke.ID_TOKEN_HINT, encodeURIComponent(e));
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
      uo.validateClaims(n), this.parameters.set(ke.CLAIMS, encodeURIComponent(n));
    }, r.prototype.addCorrelationId = function(e) {
      this.parameters.set(ke.CLIENT_REQUEST_ID, encodeURIComponent(e));
    }, r.prototype.addLibraryInfo = function(e) {
      this.parameters.set(ke.X_CLIENT_SKU, e.sku), this.parameters.set(ke.X_CLIENT_VER, e.version), e.os && this.parameters.set(ke.X_CLIENT_OS, e.os), e.cpu && this.parameters.set(ke.X_CLIENT_CPU, e.cpu);
    }, r.prototype.addApplicationTelemetry = function(e) {
      e != null && e.appName && this.parameters.set(ke.X_APP_NAME, e.appName), e != null && e.appVersion && this.parameters.set(ke.X_APP_VER, e.appVersion);
    }, r.prototype.addPrompt = function(e) {
      uo.validatePrompt(e), this.parameters.set("" + ke.PROMPT, encodeURIComponent(e));
    }, r.prototype.addState = function(e) {
      oe.isEmpty(e) || this.parameters.set(ke.STATE, encodeURIComponent(e));
    }, r.prototype.addNonce = function(e) {
      this.parameters.set(ke.NONCE, encodeURIComponent(e));
    }, r.prototype.addCodeChallengeParams = function(e, t) {
      if (uo.validateCodeChallengeParams(e, t), e && t)
        this.parameters.set(ke.CODE_CHALLENGE, encodeURIComponent(e)), this.parameters.set(ke.CODE_CHALLENGE_METHOD, encodeURIComponent(t));
      else
        throw et.createInvalidCodeChallengeParamsError();
    }, r.prototype.addAuthorizationCode = function(e) {
      this.parameters.set(ke.CODE, encodeURIComponent(e));
    }, r.prototype.addDeviceCode = function(e) {
      this.parameters.set(ke.DEVICE_CODE, encodeURIComponent(e));
    }, r.prototype.addRefreshToken = function(e) {
      this.parameters.set(ke.REFRESH_TOKEN, encodeURIComponent(e));
    }, r.prototype.addCodeVerifier = function(e) {
      this.parameters.set(ke.CODE_VERIFIER, encodeURIComponent(e));
    }, r.prototype.addClientSecret = function(e) {
      this.parameters.set(ke.CLIENT_SECRET, encodeURIComponent(e));
    }, r.prototype.addClientAssertion = function(e) {
      oe.isEmpty(e) || this.parameters.set(ke.CLIENT_ASSERTION, encodeURIComponent(e));
    }, r.prototype.addClientAssertionType = function(e) {
      oe.isEmpty(e) || this.parameters.set(ke.CLIENT_ASSERTION_TYPE, encodeURIComponent(e));
    }, r.prototype.addOboAssertion = function(e) {
      this.parameters.set(ke.OBO_ASSERTION, encodeURIComponent(e));
    }, r.prototype.addRequestTokenUse = function(e) {
      this.parameters.set(ke.REQUESTED_TOKEN_USE, encodeURIComponent(e));
    }, r.prototype.addGrantType = function(e) {
      this.parameters.set(ke.GRANT_TYPE, encodeURIComponent(e));
    }, r.prototype.addClientInfo = function() {
      this.parameters.set(mI, "1");
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
      oe.isEmpty(e) || (this.parameters.set(ke.TOKEN_TYPE, Ve.POP), this.parameters.set(ke.REQ_CNF, encodeURIComponent(e)));
    }, r.prototype.addSshJwk = function(e) {
      oe.isEmpty(e) || (this.parameters.set(ke.TOKEN_TYPE, Ve.SSH), this.parameters.set(ke.REQ_CNF, encodeURIComponent(e)));
    }, r.prototype.addServerTelemetry = function(e) {
      this.parameters.set(ke.X_CLIENT_CURR_TELEM, e.generateCurrentRequestHeaderValue()), this.parameters.set(ke.X_CLIENT_LAST_TELEM, e.generateLastRequestHeaderValue());
    }, r.prototype.addThrottling = function() {
      this.parameters.set(ke.X_MS_LIB_CAPABILITY, Hi.X_MS_LIB_CAPABILITY_VALUE);
    }, r.prototype.addLogoutHint = function(e) {
      this.parameters.set(ke.LOGOUT_HINT, encodeURIComponent(e));
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
      this.config = II(e), this.logger = new Mu(this.config.loggerOptions, Zg, xu), this.cryptoUtils = this.config.cryptoInterface, this.cacheManager = this.config.storageInterface, this.networkClient = this.config.networkInterface, this.networkManager = new RI(this.networkClient, this.cacheManager), this.serverTelemetryManager = this.config.serverTelemetryManager, this.authority = this.config.authOptions.authority, this.performanceClient = t;
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
        throw ae.createEndpointDiscoveryIncompleteError("Updated authority has not completed endpoint discovery.");
      this.authority = e;
    }, r.prototype.createTokenQueryParameters = function(e) {
      var t = new Ki();
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
        case pe.ID_TOKEN:
          return bn.ID_TOKEN;
        case pe.ACCESS_TOKEN:
        case pe.ACCESS_TOKEN_WITH_AUTH_SCHEME:
          return bn.ACCESS_TOKEN;
        case pe.REFRESH_TOKEN:
          return bn.REFRESH_TOKEN;
        default:
          throw ae.createUnexpectedCredentialTypeError();
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
  }(Du)
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
      var R, A, S = new e();
      S.homeAccountId = t, S.credentialType = pe.ACCESS_TOKEN, S.secret = o;
      var I = Pr.nowSeconds();
      if (S.cachedAt = I.toString(), S.expiresOn = u.toString(), S.extendedExpiresOn = f.toString(), p && (S.refreshOn = p.toString()), S.environment = n, S.clientId = a, S.realm = s, S.target = l, S.userAssertionHash = v, S.tokenType = oe.isEmpty(m) ? Ve.BEARER : m, E && (S.requestedClaims = E, S.requestedClaimsHash = _), ((R = S.tokenType) === null || R === void 0 ? void 0 : R.toLowerCase()) !== Ve.BEARER.toLowerCase())
        switch (S.credentialType = pe.ACCESS_TOKEN_WITH_AUTH_SCHEME, S.tokenType) {
          case Ve.POP:
            var O = sn.extractTokenClaims(o, h);
            if (!(!((A = O == null ? void 0 : O.cnf) === null || A === void 0) && A.kid))
              throw ae.createTokenClaimsRequiredError();
            S.keyId = O.cnf.kid;
            break;
          case Ve.SSH:
            S.keyId = C;
        }
      return S;
    }, e.isAccessTokenEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("realm") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") && t.hasOwnProperty("target") && (t.credentialType === pe.ACCESS_TOKEN || t.credentialType === pe.ACCESS_TOKEN_WITH_AUTH_SCHEME) : !1;
    }, e;
  }(Du)
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
  }(Du)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Mp = [
  "interaction_required",
  "consent_required",
  "login_required"
], kI = [
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
      var a = !!t && Mp.indexOf(t) > -1, s = !!o && kI.indexOf(o) > -1, l = !!n && Mp.some(function(u) {
        return n.indexOf(u) > -1;
      });
      return a || l || s;
    }, e.createNoTokensFoundError = function() {
      return new e(Qo.noTokensFoundError.code, Qo.noTokensFoundError.desc);
    }, e.createNativeAccountUnavailableError = function() {
      return new e(Qo.native_account_unavailable.code, Qo.native_account_unavailable.desc);
    }, e;
  }(fe)
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
      return oe.isEmpty(t) ? o : "" + o + N.RESOURCE_DELIM + t;
    }, r.generateLibraryState = function(e, t) {
      if (!e)
        throw ae.createNoCryptoObjectError("generateLibraryState");
      var n = {
        id: e.createNewGuid()
      };
      t && (n.meta = t);
      var o = JSON.stringify(n);
      return e.base64Encode(o);
    }, r.parseRequestState = function(e, t) {
      if (!e)
        throw ae.createNoCryptoObjectError("parseRequestState");
      if (oe.isEmpty(t))
        throw ae.createInvalidStateError(t, "Null, undefined or empty state");
      try {
        var n = t.split(N.RESOURCE_DELIM), o = n[0], a = n.length > 1 ? n.slice(1).join(N.RESOURCE_DELIM) : N.EMPTY_STRING, s = e.base64Decode(o), l = JSON.parse(s);
        return {
          userRequestState: oe.isEmpty(a) ? N.EMPTY_STRING : a,
          libraryState: l
        };
      } catch (u) {
        throw ae.createInvalidStateError(t, u);
      }
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var He = (
  /** @class */
  function() {
    function r(e) {
      if (this._urlString = e, oe.isEmpty(this._urlString))
        throw et.createUrlEmptyError();
      oe.isEmpty(this.getHash()) && (this._urlString = r.canonicalizeUri(e));
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
        return oe.endsWith(t, "?") ? t = t.slice(0, -1) : oe.endsWith(t, "?/") && (t = t.slice(0, -2)), oe.endsWith(t, "/") || (t += "/"), t;
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
      return oe.isEmpty(t) ? e : e.indexOf("?") < 0 ? e + "?" + t : e + "&" + t;
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
      }), n.PathSegments = o, !oe.isEmpty(n.QueryString) && n.QueryString.endsWith("/") && (n.QueryString = n.QueryString.substring(0, n.QueryString.length - 1)), n;
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
      if (oe.isEmpty(e))
        return {};
      var t = r.parseHash(e), n = oe.queryStringToObject(oe.isEmpty(t) ? e : t);
      if (!n)
        throw ae.createHashNotDeserializedError(JSON.stringify(n));
      return n;
    }, r.getDeserializedQueryString = function(e) {
      if (oe.isEmpty(e))
        return {};
      var t = r.parseQueryString(e), n = oe.queryStringToObject(oe.isEmpty(t) ? e : t);
      if (!n)
        throw ae.createHashNotDeserializedError(JSON.stringify(n));
      return n;
    }, r.hashContainsKnownProperties = function(e) {
      if (oe.isEmpty(e) || e.indexOf("=") < 0)
        return !1;
      var t = r.getDeserializedHash(e);
      return !!(t.code || t.error_description || t.error || t.state);
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var U;
(function(r) {
  r.AcquireTokenByCode = "acquireTokenByCode", r.AcquireTokenByRefreshToken = "acquireTokenByRefreshToken", r.AcquireTokenSilent = "acquireTokenSilent", r.AcquireTokenSilentAsync = "acquireTokenSilentAsync", r.AcquireTokenPopup = "acquireTokenPopup", r.CryptoOptsGetPublicKeyThumbprint = "cryptoOptsGetPublicKeyThumbprint", r.CryptoOptsSignJwt = "cryptoOptsSignJwt", r.SilentCacheClientAcquireToken = "silentCacheClientAcquireToken", r.SilentIframeClientAcquireToken = "silentIframeClientAcquireToken", r.SilentRefreshClientAcquireToken = "silentRefreshClientAcquireToken", r.SsoSilent = "ssoSilent", r.StandardInteractionClientGetDiscoveredAuthority = "standardInteractionClientGetDiscoveredAuthority", r.FetchAccountIdWithNativeBroker = "fetchAccountIdWithNativeBroker", r.NativeInteractionClientAcquireToken = "nativeInteractionClientAcquireToken", r.BaseClientCreateTokenRequestHeaders = "baseClientCreateTokenRequestHeaders", r.BrokerHandhshake = "brokerHandshake", r.AcquireTokenByRefreshTokenInBroker = "acquireTokenByRefreshTokenInBroker", r.AcquireTokenByBroker = "acquireTokenByBroker", r.RefreshTokenClientExecuteTokenRequest = "refreshTokenClientExecuteTokenRequest", r.RefreshTokenClientAcquireToken = "refreshTokenClientAcquireToken", r.RefreshTokenClientAcquireTokenWithCachedRefreshToken = "refreshTokenClientAcquireTokenWithCachedRefreshToken", r.RefreshTokenClientAcquireTokenByRefreshToken = "refreshTokenClientAcquireTokenByRefreshToken", r.RefreshTokenClientCreateTokenRequestBody = "refreshTokenClientCreateTokenRequestBody", r.AcquireTokenFromCache = "acquireTokenFromCache", r.AcquireTokenBySilentIframe = "acquireTokenBySilentIframe", r.InitializeBaseRequest = "initializeBaseRequest", r.InitializeSilentRequest = "initializeSilentRequest", r.InitializeClientApplication = "initializeClientApplication", r.SilentIframeClientTokenHelper = "silentIframeClientTokenHelper", r.SilentHandlerInitiateAuthRequest = "silentHandlerInitiateAuthRequest", r.SilentHandlerMonitorIframeForHash = "silentHandlerMonitorIframeForHash", r.SilentHandlerLoadFrame = "silentHandlerLoadFrame", r.StandardInteractionClientCreateAuthCodeClient = "standardInteractionClientCreateAuthCodeClient", r.StandardInteractionClientGetClientConfiguration = "standardInteractionClientGetClientConfiguration", r.StandardInteractionClientInitializeAuthorizationRequest = "standardInteractionClientInitializeAuthorizationRequest", r.StandardInteractionClientInitializeAuthorizationCodeRequest = "standardInteractionClientInitializeAuthorizationCodeRequest", r.GetAuthCodeUrl = "getAuthCodeUrl", r.HandleCodeResponseFromServer = "handleCodeResponseFromServer", r.HandleCodeResponseFromHash = "handleCodeResponseFromHash", r.UpdateTokenEndpointAuthority = "updateTokenEndpointAuthority", r.AuthClientAcquireToken = "authClientAcquireToken", r.AuthClientExecuteTokenRequest = "authClientExecuteTokenRequest", r.AuthClientCreateTokenRequestBody = "authClientCreateTokenRequestBody", r.AuthClientCreateQueryString = "authClientCreateQueryString", r.PopTokenGenerateCnf = "popTokenGenerateCnf", r.PopTokenGenerateKid = "popTokenGenerateKid", r.HandleServerTokenResponse = "handleServerTokenResponse", r.AuthorityFactoryCreateDiscoveredInstance = "authorityFactoryCreateDiscoveredInstance", r.AuthorityResolveEndpointsAsync = "authorityResolveEndpointsAsync", r.AuthorityGetCloudDiscoveryMetadataFromNetwork = "authorityGetCloudDiscoveryMetadataFromNetwork", r.AuthorityUpdateCloudDiscoveryMetadata = "authorityUpdateCloudDiscoveryMetadata", r.AuthorityGetEndpointMetadataFromNetwork = "authorityGetEndpointMetadataFromNetwork", r.AuthorityUpdateEndpointMetadata = "authorityUpdateEndpointMetadata", r.AuthorityUpdateMetadataWithRegionalInformation = "authorityUpdateMetadataWithRegionalInformation", r.RegionDiscoveryDetectRegion = "regionDiscoveryDetectRegion", r.RegionDiscoveryGetRegionFromIMDS = "regionDiscoveryGetRegionFromIMDS", r.RegionDiscoveryGetCurrentVersion = "regionDiscoveryGetCurrentVersion", r.AcquireTokenByCodeAsync = "acquireTokenByCodeAsync", r.GetEndpointMetadataFromNetwork = "getEndpointMetadataFromNetwork", r.GetCloudDiscoveryMetadataFromNetworkMeasurement = "getCloudDiscoveryMetadataFromNetworkMeasurement", r.HandleRedirectPromiseMeasurement = "handleRedirectPromiseMeasurement", r.UpdateCloudDiscoveryMetadataMeasurement = "updateCloudDiscoveryMetadataMeasurement", r.UsernamePasswordClientAcquireToken = "usernamePasswordClientAcquireToken", r.NativeMessageHandlerHandshake = "nativeMessageHandlerHandshake", r.ClearTokensAndKeysWithClaims = "clearTokensAndKeysWithClaims";
})(U || (U = {}));
var Ts;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.InProgress = 1] = "InProgress", r[r.Completed = 2] = "Completed";
})(Ts || (Ts = {}));
var PI = /* @__PURE__ */ new Set([
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
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(U.PopTokenGenerateCnf, e.correlationId), (n = this.performanceClient) === null || n === void 0 || n.setPreQueueTime(U.PopTokenGenerateKid, e.correlationId), [4, this.generateKid(e)];
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
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(U.PopTokenGenerateKid, e.correlationId), [4, this.cryptoUtils.getPublicKeyThumbprint(e)];
            case 1:
              return n = o.sent(), [2, {
                kid: n,
                xms_ksl: su.SW
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
              return a = n.resourceRequestMethod, s = n.resourceRequestUri, l = n.shrClaims, u = n.shrNonce, f = s ? new He(s) : void 0, h = f == null ? void 0 : f.getUrlComponents(), [4, this.cryptoUtils.signJwt(Ge({ at: e, ts: Pr.nowSeconds(), m: a == null ? void 0 : a.toUpperCase(), u: h == null ? void 0 : h.HostNameAndPort, nonce: u || this.cryptoUtils.createNewGuid(), p: h == null ? void 0 : h.AbsolutePath, q: h != null && h.QueryString ? [[], h.QueryString] : void 0, client_claims: l || void 0 }, o), t, n.correlationId)];
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
var NI = (
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
        throw e.state ? ae.createStateNotFoundError("Cached State") : ae.createStateNotFoundError("Server State");
      if (decodeURIComponent(e.state) !== decodeURIComponent(t))
        throw ae.createStateMismatchError();
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
        var p, m, v, C, E, _, R;
        return Te(this, function(A) {
          switch (A.label) {
            case 0:
              if ((h = this.performanceClient) === null || h === void 0 || h.addQueueMeasurement(U.HandleServerTokenResponse, e.correlation_id), e.id_token) {
                if (p = new sn(e.id_token || N.EMPTY_STRING, this.cryptoObj), a && !oe.isEmpty(a.nonce) && p.claims.nonce !== a.nonce)
                  throw ae.createNonceMismatchError();
                if (o.maxAge || o.maxAge === 0) {
                  if (m = p.claims.auth_time, !m)
                    throw ae.createAuthTimeNotFoundError();
                  sn.checkMaxAge(m, o.maxAge);
                }
              }
              this.homeAccountIdentifier = Rt.generateHomeAccountId(e.client_info || N.EMPTY_STRING, t.authorityType, this.logger, this.cryptoObj, p), a && a.state && (v = Sn.parseRequestState(this.cryptoObj, a.state)), e.key_id = e.key_id || o.sshKid || void 0, C = this.generateCacheRecord(e, t, n, o, p, s, a), A.label = 1;
            case 1:
              return A.trys.push([1, , 5, 8]), this.persistencePlugin && this.serializableCache ? (this.logger.verbose("Persistence enabled, calling beforeCacheAccess"), E = new NI(this.serializableCache, !0), [4, this.persistencePlugin.beforeCacheAccess(E)]) : [3, 3];
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
      if (oe.isEmpty(u))
        throw ae.createInvalidCacheEnvironmentError();
      var f, h;
      !oe.isEmpty(e.id_token) && a && (f = po.createIdTokenEntity(this.homeAccountIdentifier, u, e.id_token || N.EMPTY_STRING, this.clientId, a.claims.tid || N.EMPTY_STRING), h = this.generateAccountEntity(e, a, t, l));
      var p = null;
      if (!oe.isEmpty(e.access_token)) {
        var m = e.scope ? Ut.fromString(e.scope) : new Ut(o.scopes || []), v = (typeof e.expires_in == "string" ? parseInt(e.expires_in, 10) : e.expires_in) || 0, C = (typeof e.ext_expires_in == "string" ? parseInt(e.ext_expires_in, 10) : e.ext_expires_in) || 0, E = (typeof e.refresh_in == "string" ? parseInt(e.refresh_in, 10) : e.refresh_in) || void 0, _ = n + v, R = _ + C, A = E && E > 0 ? n + E : void 0;
        p = go.createAccessTokenEntity(this.homeAccountIdentifier, u, e.access_token || N.EMPTY_STRING, this.clientId, a ? a.claims.tid || N.EMPTY_STRING : t.tenant, m.printScopes(), _, R, this.cryptoObj, A, e.token_type, s, e.key_id, o.claims, o.requestedClaimsHash);
      }
      var S = null;
      oe.isEmpty(e.refresh_token) || (S = Yo.createRefreshTokenEntity(this.homeAccountIdentifier, u, e.refresh_token || N.EMPTY_STRING, this.clientId, e.foci, s));
      var I = null;
      return oe.isEmpty(e.foci) || (I = cu.createAppMetadataEntity(this.clientId, u, e.foci)), new qi(h, f, p, S, I);
    }, r.prototype.generateAccountEntity = function(e, t, n, o) {
      var a = n.authorityType, s = o ? o.cloud_graph_host_name : N.EMPTY_STRING, l = o ? o.msgraph_host : N.EMPTY_STRING;
      if (a === Wt.Adfs)
        return this.logger.verbose("Authority type is ADFS, creating ADFS account"), Rt.createGenericAccount(this.homeAccountIdentifier, t, n, s, l);
      if (oe.isEmpty(e.client_info) && n.protocolMode === "AAD")
        throw ae.createClientInfoEmptyError();
      return e.client_info ? Rt.createAccount(e.client_info, this.homeAccountIdentifier, t, n, s, l) : Rt.createGenericAccount(this.homeAccountIdentifier, t, n, s, l);
    }, r.generateAuthenticationResult = function(e, t, n, o, a, s, l, u, f) {
      var h, p, m;
      return Se(this, void 0, void 0, function() {
        var v, C, E, _, R, A, S, I, O, L, q;
        return Te(this, function(F) {
          switch (F.label) {
            case 0:
              if (v = N.EMPTY_STRING, C = [], E = null, R = N.EMPTY_STRING, !n.accessToken)
                return [3, 4];
              if (n.accessToken.tokenType !== Ve.POP)
                return [3, 2];
              if (A = new ti(e), S = n.accessToken, I = S.secret, O = S.keyId, !O)
                throw ae.createKeyIdMissingError();
              return [4, A.signPopToken(I, O, a)];
            case 1:
              return v = F.sent(), [3, 3];
            case 2:
              v = n.accessToken.secret, F.label = 3;
            case 3:
              C = Ut.fromString(n.accessToken.target).asArray(), E = new Date(Number(n.accessToken.expiresOn) * 1e3), _ = new Date(Number(n.accessToken.extendedExpiresOn) * 1e3), F.label = 4;
            case 4:
              return n.appMetadata && (R = n.appMetadata.familyId === Ui ? Ui : N.EMPTY_STRING), L = (s == null ? void 0 : s.claims.oid) || (s == null ? void 0 : s.claims.sub) || N.EMPTY_STRING, q = (s == null ? void 0 : s.claims.tid) || N.EMPTY_STRING, u != null && u.spa_accountid && n.account && (n.account.nativeAccountId = u == null ? void 0 : u.spa_accountid), [2, {
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
var tm = (
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
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(U.GetAuthCodeUrl, t.correlationId), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(U.AuthClientCreateQueryString, t.correlationId), [4, this.createAuthCodeUrlQueryString(t)];
            case 1:
              return a = s.sent(), [2, He.appendQueryString(this.authority.authorizationEndpoint, a)];
          }
        });
      });
    }, e.prototype.acquireToken = function(t, n) {
      var o, a, s, l, u, f;
      return Se(this, void 0, void 0, function() {
        var h, p, m, v, C, E, _ = this;
        return Te(this, function(R) {
          switch (R.label) {
            case 0:
              if (!t || !t.code)
                throw ae.createTokenRequestCannotBeMadeError();
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(U.AuthClientAcquireToken, t.correlationId), h = (a = this.performanceClient) === null || a === void 0 ? void 0 : a.startMeasurement("AuthCodeClientAcquireToken", t.correlationId), this.logger.info("in acquireToken call in auth-code client"), p = Pr.nowSeconds(), (s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(U.AuthClientExecuteTokenRequest, t.correlationId), [4, this.executeTokenRequest(this.authority, t)];
            case 1:
              return m = R.sent(), v = (l = m.headers) === null || l === void 0 ? void 0 : l[mr.X_MS_REQUEST_ID], C = (u = m.headers) === null || u === void 0 ? void 0 : u[mr.X_MS_HTTP_VERSION], C && (h == null || h.addStaticFields({
                httpVerAuthority: C
              })), E = new Is(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin, this.performanceClient), E.validateTokenResponse(m.body), (f = this.performanceClient) === null || f === void 0 || f.setPreQueueTime(U.HandleServerTokenResponse, t.correlationId), [2, E.handleServerTokenResponse(m.body, this.authority, p, t, n, void 0, void 0, void 0, v).then(function(A) {
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
      var o = new Is(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, null, null), a = new He(t), s = He.getDeserializedHash(a.getHash());
      if (o.validateServerAuthorizationCodeResponse(s, n, this.cryptoUtils), !s.code)
        throw ae.createNoAuthCodeInServerResponseError();
      return Ge(Ge({}, s), {
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
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(U.AuthClientExecuteTokenRequest, n.correlationId), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(U.AuthClientCreateTokenRequestBody, n.correlationId), s = this.createTokenQueryParameters(n), l = He.appendQueryString(t.tokenEndpoint, s), [4, this.createTokenRequestBody(n)];
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
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(U.AuthClientCreateTokenRequestBody, t.correlationId), a = new Ki(), a.addClientId(this.config.authOptions.clientId), this.includeRedirectUri ? a.addRedirectUri(t.redirectUri) : uo.validateRedirectUri(t.redirectUri), a.addScopes(t.scopes), a.addAuthorizationCode(t.code), a.addLibraryInfo(this.config.libraryInfo), a.addApplicationTelemetry(this.config.telemetry.application), a.addThrottling(), this.serverTelemetryManager && a.addServerTelemetry(this.serverTelemetryManager), t.codeVerifier && a.addCodeVerifier(t.codeVerifier), this.config.clientCredentials.clientSecret && a.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion && (s = this.config.clientCredentials.clientAssertion, a.addClientAssertion(s.assertion), a.addClientAssertionType(s.assertionType)), a.addGrantType(ws.AUTHORIZATION_CODE_GRANT), a.addClientInfo(), t.authenticationScheme !== Ve.POP ? [3, 2] : (l = new ti(this.cryptoUtils, this.performanceClient), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(U.PopTokenGenerateCnf, t.correlationId), [4, l.generateCnf(t)]);
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
              if (f = t.correlationId || this.config.cryptoInterface.createNewGuid(), a.addCorrelationId(f), (!oe.isEmptyObj(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && a.addClaims(t.claims, this.config.authOptions.clientCapabilities), h = void 0, t.clientInfo)
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
              return t.tokenBodyParameters && a.addExtraQueryParameters(t.tokenBodyParameters), t.enableSpaAuthorizationCode && (!t.tokenBodyParameters || !t.tokenBodyParameters[ke.RETURN_SPA_CODE]) && a.addExtraQueryParameters((m = {}, m[ke.RETURN_SPA_CODE] = "1", m)), [2, a.createQueryString()];
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
              if ((n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(U.AuthClientCreateQueryString, t.correlationId), o = new Ki(), o.addClientId(this.config.authOptions.clientId), a = js(t.scopes || [], t.extraScopesToConsent || []), o.addScopes(a), o.addRedirectUri(t.redirectUri), s = t.correlationId || this.config.cryptoInterface.createNewGuid(), o.addCorrelationId(s), o.addResponseMode(t.responseMode), o.addResponseTypeCode(), o.addLibraryInfo(this.config.libraryInfo), o.addApplicationTelemetry(this.config.telemetry.application), o.addClientInfo(), t.codeChallenge && t.codeChallengeMethod && o.addCodeChallengeParams(t.codeChallenge, t.codeChallengeMethod), t.prompt && o.addPrompt(t.prompt), t.domainHint && o.addDomainHint(t.domainHint), t.prompt !== Ht.SELECT_ACCOUNT)
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
              return t.nonce && o.addNonce(t.nonce), t.state && o.addState(t.state), (!oe.isEmpty(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && o.addClaims(t.claims, this.config.authOptions.clientCapabilities), t.extraQueryParameters && o.addExtraQueryParameters(t.extraQueryParameters), t.nativeBroker ? (o.addNativeBroker(), t.authenticationScheme !== Ve.POP ? [3, 2] : (h = new ti(this.cryptoUtils), [4, h.generateCnf(t)])) : [3, 2];
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
  }(Lu)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var rm = (
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
        return Te(this, function(R) {
          switch (R.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(U.RefreshTokenClientAcquireToken, t.correlationId), h = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(U.RefreshTokenClientAcquireToken, t.correlationId), this.logger.verbose("RefreshTokenClientAcquireToken called", t.correlationId), p = Pr.nowSeconds(), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(U.RefreshTokenClientExecuteTokenRequest, t.correlationId), [4, this.executeTokenRequest(t, this.authority)];
            case 1:
              return m = R.sent(), v = (s = m.headers) === null || s === void 0 ? void 0 : s[mr.X_MS_HTTP_VERSION], h == null || h.addStaticFields({
                refreshTokenSize: ((l = m.body.refresh_token) === null || l === void 0 ? void 0 : l.length) || 0
              }), v && (h == null || h.addStaticFields({
                httpVerToken: v
              })), C = (u = m.headers) === null || u === void 0 ? void 0 : u[mr.X_MS_REQUEST_ID], E = new Is(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin), E.validateTokenResponse(m.body), (f = this.performanceClient) === null || f === void 0 || f.setPreQueueTime(U.HandleServerTokenResponse, t.correlationId), [2, E.handleServerTokenResponse(m.body, this.authority, p, t, void 0, void 0, !0, t.forceCache, C).then(function(A) {
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
      return Se(this, void 0, void 0, function() {
        var l, u, f;
        return Te(this, function(h) {
          if (!t)
            throw et.createEmptyTokenRequestError();
          if ((n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(U.RefreshTokenClientAcquireTokenByRefreshToken, t.correlationId), !t.account)
            throw ae.createNoAccountInSilentRequestError();
          if (l = this.cacheManager.isAppMetadataFOCI(t.account.environment), l)
            try {
              return (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(U.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), [2, this.acquireTokenWithCachedRefreshToken(t, !0)];
            } catch (p) {
              if (u = p instanceof zr && p.errorCode === Qo.noTokensFoundError.code, f = p instanceof wo && p.errorCode === Op.INVALID_GRANT_ERROR && p.subError === Op.CLIENT_MISMATCH_ERROR, u || f)
                return (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(U.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), [2, this.acquireTokenWithCachedRefreshToken(t, !1)];
              throw p;
            }
          return (s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(U.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), [2, this.acquireTokenWithCachedRefreshToken(t, !1)];
        });
      });
    }, e.prototype.acquireTokenWithCachedRefreshToken = function(t, n) {
      var o, a, s;
      return Se(this, void 0, void 0, function() {
        var l, u, f;
        return Te(this, function(h) {
          if ((o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(U.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), l = (a = this.performanceClient) === null || a === void 0 ? void 0 : a.startMeasurement(U.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), this.logger.verbose("RefreshTokenClientAcquireTokenWithCachedRefreshToken called", t.correlationId), u = this.cacheManager.getRefreshToken(t.account, n), !u)
            throw l == null || l.discardMeasurement(), zr.createNoTokensFoundError();
          return l == null || l.endMeasurement({
            success: !0
          }), f = Ge(Ge({}, t), { refreshToken: u.secret, authenticationScheme: t.authenticationScheme || Ve.BEARER, ccsCredential: {
            credential: t.account.homeAccountId,
            type: gr.HOME_ACCOUNT_ID
          } }), (s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(U.RefreshTokenClientAcquireToken, t.correlationId), [2, this.acquireToken(f)];
        });
      });
    }, e.prototype.executeTokenRequest = function(t, n) {
      var o, a, s;
      return Se(this, void 0, void 0, function() {
        var l, u, f, h, p, m;
        return Te(this, function(v) {
          switch (v.label) {
            case 0:
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(U.RefreshTokenClientExecuteTokenRequest, t.correlationId), l = (a = this.performanceClient) === null || a === void 0 ? void 0 : a.startMeasurement(U.RefreshTokenClientExecuteTokenRequest, t.correlationId), (s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(U.RefreshTokenClientCreateTokenRequestBody, t.correlationId), u = this.createTokenQueryParameters(t), f = He.appendQueryString(n.tokenEndpoint, u), [4, this.createTokenRequestBody(t)];
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
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(U.RefreshTokenClientCreateTokenRequestBody, t.correlationId), s = t.correlationId, l = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(U.BaseClientCreateTokenRequestHeaders, s), u = new Ki(), u.addClientId(this.config.authOptions.clientId), u.addScopes(t.scopes), u.addGrantType(ws.REFRESH_TOKEN_GRANT), u.addClientInfo(), u.addLibraryInfo(this.config.libraryInfo), u.addApplicationTelemetry(this.config.telemetry.application), u.addThrottling(), this.serverTelemetryManager && u.addServerTelemetry(this.serverTelemetryManager), u.addCorrelationId(s), u.addRefreshToken(t.refreshToken), this.config.clientCredentials.clientSecret && u.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion && (f = this.config.clientCredentials.clientAssertion, u.addClientAssertion(f.assertion), u.addClientAssertionType(f.assertionType)), t.authenticationScheme !== Ve.POP ? [3, 2] : (h = new ti(this.cryptoUtils, this.performanceClient), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(U.PopTokenGenerateCnf, t.correlationId), [4, h.generateCnf(t)]);
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
              if ((!oe.isEmptyObj(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && u.addClaims(t.claims, this.config.authOptions.clientCapabilities), this.config.systemOptions.preventCorsPreflight && t.ccsCredential)
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
  }(Lu)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var OI = (
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
              if (n = a.sent(), n instanceof ae && n.errorCode === Q.tokenRefreshRequired.code)
                return o = new rm(this.config, this.performanceClient), [2, o.acquireTokenByRefreshToken(t)];
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
                throw (n = this.serverTelemetryManager) === null || n === void 0 || n.setCacheOutcome($n.FORCE_REFRESH), this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because forceRefresh is true."), ae.createRefreshRequiredError();
              if (!this.config.cacheOptions.claimsBasedCachingEnabled && !oe.isEmptyObj(t.claims))
                throw (o = this.serverTelemetryManager) === null || o === void 0 || o.setCacheOutcome($n.CLAIMS_REQUESTED_CACHE_SKIPPED), this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because claims-based caching is disabled and claims were requested."), ae.createRefreshRequiredError();
              if (!t.account)
                throw ae.createNoAccountInSilentRequestError();
              if (u = t.authority || this.authority.getPreferredCache(), f = this.cacheManager.readCacheRecord(t.account, t, u), f.accessToken) {
                if (Pr.wasClockTurnedBack(f.accessToken.cachedAt) || Pr.isTokenExpired(f.accessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds))
                  throw (s = this.serverTelemetryManager) === null || s === void 0 || s.setCacheOutcome($n.CACHED_ACCESS_TOKEN_EXPIRED), this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token is expired or will expire within " + this.config.systemOptions.tokenRenewalOffsetSeconds + " seconds."), ae.createRefreshRequiredError();
                if (f.accessToken.refreshOn && Pr.isTokenExpired(f.accessToken.refreshOn, 0))
                  throw (l = this.serverTelemetryManager) === null || l === void 0 || l.setCacheOutcome($n.REFRESH_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token's refreshOn property has been exceeded'."), ae.createRefreshRequiredError();
              } else
                throw (a = this.serverTelemetryManager) === null || a === void 0 || a.setCacheOutcome($n.NO_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties."), ae.createRefreshRequiredError();
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
                  throw ae.createAuthTimeNotFoundError();
                sn.checkMaxAge(a, n.maxAge);
              }
              return [4, Is.generateAuthenticationResult(this.cryptoUtils, this.authority, t, !0, n, o)];
            case 1:
              return [2, s.sent()];
          }
        });
      });
    }, e;
  }(Lu)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
function MI(r) {
  return r.hasOwnProperty("authorization_endpoint") && r.hasOwnProperty("token_endpoint") && r.hasOwnProperty("issuer") && r.hasOwnProperty("jwks_uri");
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
var nm = { endpointMetadata: { "https://login.microsoftonline.com/common/": { token_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/common/": { token_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/common/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/common/": { token_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/consumers/": { token_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/consumers/": { token_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/consumers/": { token_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/organizations/": { token_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/organizations/": { token_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/organizations/": { token_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" } }, instanceDiscoveryMetadata: { "https://login.microsoftonline.com/common/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/common/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/common/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/consumers/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/consumers/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/consumers/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/organizations/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/organizations/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/organizations/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] } } }, xp = nm.endpointMetadata, Lp = nm.instanceDiscoveryMetadata;
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Vi;
(function(r) {
  r.AAD = "AAD", r.OIDC = "OIDC";
})(Vi || (Vi = {}));
/*! @azure/msal-common v13.3.1 2023-10-27 */
var lu = (
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
function xI(r) {
  return r.hasOwnProperty("tenant_discovery_endpoint") && r.hasOwnProperty("metadata");
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
function LI(r) {
  return r.hasOwnProperty("error") && r.hasOwnProperty("error_description");
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
var DI = (
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
              if ((n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(U.RegionDiscoveryDetectRegion, this.correlationId), l = e, l)
                return [3, 8];
              u = r.IMDS_OPTIONS, m.label = 1;
            case 1:
              return m.trys.push([1, 6, , 7]), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(U.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [4, this.getRegionFromIMDS(N.IMDS_VERSION, u)];
            case 2:
              return f = m.sent(), f.status === Wo.httpSuccess && (l = f.body, t.region_source = Kn.IMDS), f.status !== Wo.httpBadRequest ? [3, 5] : ((a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(U.RegionDiscoveryGetCurrentVersion, this.correlationId), [4, this.getCurrentVersion(u)]);
            case 3:
              return h = m.sent(), h ? ((s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(U.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [4, this.getRegionFromIMDS(h, u)]) : (t.region_source = Kn.FAILED_AUTO_DETECTION, [2, null]);
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
          return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(U.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [2, this.networkInterface.sendGetRequestAsync(N.IMDS_ENDPOINT + "?api-version=" + e + "&format=text", t, N.IMDS_TIMEOUT)];
        });
      });
    }, r.prototype.getCurrentVersion = function(e) {
      var t;
      return Se(this, void 0, void 0, function() {
        var n;
        return Te(this, function(o) {
          switch (o.label) {
            case 0:
              (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(U.RegionDiscoveryGetCurrentVersion, this.correlationId), o.label = 1;
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
      this.canonicalAuthority = e, this._canonicalAuthority.validateAsUri(), this.networkInterface = t, this.cacheManager = n, this.authorityOptions = o, this.regionDiscoveryMetadata = { region_used: void 0, region_source: void 0, region_outcome: void 0 }, this.logger = a, this.performanceClient = s, this.correlationId = l, this.regionDiscovery = new DI(t, this.performanceClient, this.correlationId);
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
        throw ae.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
        throw ae.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "deviceCodeEndpoint", {
      get: function() {
        if (this.discoveryComplete())
          return this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));
        throw ae.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
            throw ae.createLogoutNotSupportedError();
          return this.replacePath(this.metadata.end_session_endpoint);
        } else
          throw ae.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
        throw ae.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
        throw ae.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
              return (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(U.AuthorityResolveEndpointsAsync, this.correlationId), o = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort), o || (o = new lu(), o.updateCanonicalAuthority(this.canonicalAuthority)), (t = this.performanceClient) === null || t === void 0 || t.setPreQueueTime(U.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId), [4, this.updateCloudDiscoveryMetadata(o)];
            case 1:
              return a = u.sent(), this.canonicalAuthority = this.canonicalAuthority.replace(this.hostnameAndPort, o.preferred_network), (n = this.performanceClient) === null || n === void 0 || n.setPreQueueTime(U.AuthorityUpdateEndpointMetadata, this.correlationId), [4, this.updateEndpointMetadata(o)];
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
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(U.AuthorityUpdateEndpointMetadata, this.correlationId), u = this.getEndpointMetadataFromConfig(), u ? (e.updateEndpointMetadata(u, !1), [2, kr.CONFIG]) : this.isAuthoritySameType(e) && e.endpointsFromNetwork && !e.isExpired() ? [2, kr.CACHE] : ((n = this.performanceClient) === null || n === void 0 || n.setPreQueueTime(U.AuthorityGetEndpointMetadataFromNetwork, this.correlationId), [4, this.getEndpointMetadataFromNetwork()]);
            case 1:
              return u = h.sent(), u ? !((o = this.authorityOptions.azureRegionConfiguration) === null || o === void 0) && o.azureRegion ? ((a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(U.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId), [4, this.updateMetadataWithRegionalInformation(u)]) : [3, 3] : [3, 4];
            case 2:
              u = h.sent(), h.label = 3;
            case 3:
              return e.updateEndpointMetadata(u, !0), [2, kr.NETWORK];
            case 4:
              return f = this.getEndpointMetadataFromHardcodedValues(), f && !this.authorityOptions.skipAuthorityMetadataCache ? !((s = this.authorityOptions.azureRegionConfiguration) === null || s === void 0) && s.azureRegion ? ((l = this.performanceClient) === null || l === void 0 || l.setPreQueueTime(U.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId), [4, this.updateMetadataWithRegionalInformation(f)]) : [3, 6] : [3, 7];
            case 5:
              f = h.sent(), h.label = 6;
            case 6:
              return e.updateEndpointMetadata(f, !1), [2, kr.HARDCODED_VALUES];
            case 7:
              throw ae.createUnableToGetOpenidConfigError(this.defaultOpenIdConfigurationEndpoint);
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
              (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(U.AuthorityGetEndpointMetadataFromNetwork, this.correlationId), t = {}, o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(this.defaultOpenIdConfigurationEndpoint, t)];
            case 2:
              return n = o.sent(), [2, MI(n.body) ? n.body : null];
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
      return Se(this, void 0, void 0, function() {
        var s, l;
        return Te(this, function(u) {
          switch (u.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(U.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId), s = (n = this.authorityOptions.azureRegionConfiguration) === null || n === void 0 ? void 0 : n.azureRegion, s ? s !== N.AZURE_REGION_AUTO_DISCOVER_FLAG ? (this.regionDiscoveryMetadata.region_outcome = Bi.CONFIGURED_NO_AUTO_DETECTION, this.regionDiscoveryMetadata.region_used = s, [2, r.replaceWithRegionalInformation(e, s)]) : ((o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(U.RegionDiscoveryDetectRegion, this.correlationId), [4, this.regionDiscovery.detectRegion((a = this.authorityOptions.azureRegionConfiguration) === null || a === void 0 ? void 0 : a.environmentRegion, this.regionDiscoveryMetadata)]) : [3, 2];
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
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(U.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId), this.logger.verbose("Attempting to get cloud discovery metadata in the config"), this.logger.verbosePii("Known Authorities: " + (this.authorityOptions.knownAuthorities || N.NOT_APPLICABLE)), this.logger.verbosePii("Authority Metadata: " + (this.authorityOptions.authorityMetadata || N.NOT_APPLICABLE)), this.logger.verbosePii("Canonical Authority: " + (e.canonical_authority || N.NOT_APPLICABLE)), o = this.getCloudDiscoveryMetadataFromConfig(), o ? (this.logger.verbose("Found cloud discovery metadata in the config."), e.updateCloudDiscoveryMetadata(o, !1), [2, kr.CONFIG]) : (this.logger.verbose("Did not find cloud discovery metadata in the config... Attempting to get cloud discovery metadata from the cache."), a = e.isExpired(), this.isAuthoritySameType(e) && e.aliasesFromNetwork && !a ? (this.logger.verbose("Found metadata in the cache."), [2, kr.CACHE]) : (a && this.logger.verbose("The metadata entity is expired."), this.logger.verbose("Did not find cloud discovery metadata in the cache... Attempting to get cloud discovery metadata from the network."), (n = this.performanceClient) === null || n === void 0 || n.setPreQueueTime(U.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId), [4, this.getCloudDiscoveryMetadataFromNetwork()]));
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
              (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(U.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId), t = "" + N.AAD_INSTANCE_DISCOVERY_ENDPT + this.canonicalAuthority + "oauth2/v2.0/authorize", n = {}, o = null, h.label = 1;
            case 1:
              return h.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(t, n)];
            case 2:
              if (a = h.sent(), s = void 0, l = void 0, xI(a.body))
                s = a.body, l = s.metadata, this.logger.verbosePii("tenant_discovery_endpoint is: " + s.tenant_discovery_endpoint);
              else if (LI(a.body)) {
                if (this.logger.warning("A CloudInstanceDiscoveryErrorResponse was returned. The cloud instance discovery network request's status code is: " + a.status), s = a.body, s.error === N.INVALID_INSTANCE)
                  return this.logger.error("The CloudInstanceDiscoveryErrorResponse error is invalid_instance."), [2, null];
                this.logger.warning("The CloudInstanceDiscoveryErrorResponse error is " + s.error), this.logger.warning("The CloudInstanceDiscoveryErrorResponse error description is " + s.error_description), this.logger.warning("Setting the value of the CloudInstanceDiscoveryMetadata (returned from the network) to []"), l = [];
              } else
                return this.logger.error("AAD did not return a CloudInstanceDiscoveryResponse or CloudInstanceDiscoveryErrorResponse"), [2, null];
              return this.logger.verbose("Attempting to find a match between the developer's authority and the CloudInstanceDiscoveryMetadata returned from the network request."), o = r.getCloudDiscoveryMetadataFromNetworkResponse(l, this.hostnameAndPort), [3, 4];
            case 3:
              return u = h.sent(), u instanceof fe ? this.logger.error(`There was a network error while attempting to get the cloud discovery instance metadata.
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
      throw ae.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
    }, r.prototype.isAlias = function(e) {
      return this.metadata.aliases.indexOf(e) > -1;
    }, r.isPublicCloudAuthority = function(e) {
      return N.KNOWN_PUBLIC_CLOUDS.indexOf(e) >= 0;
    }, r.buildRegionalAuthorityString = function(e, t, n) {
      var o = new He(e);
      o.validateAsUri();
      var a = o.getUrlComponents(), s = t + "." + a.HostNameAndPort;
      this.isPublicCloudAuthority(a.HostNameAndPort) && (s = t + "." + N.REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX);
      var l = He.constructAuthorityUriFromObject(Ge(Ge({}, o.getUrlComponents()), { HostNameAndPort: s })).urlString;
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
              s == null || s.addQueueMeasurement(U.AuthorityFactoryCreateDiscoveredInstance, l), u = Wi.transformCIAMAuthority(e), f = r.createInstance(u, t, n, o, a, s, l), p.label = 1;
            case 1:
              return p.trys.push([1, 3, , 4]), s == null || s.setPreQueueTime(U.AuthorityResolveEndpointsAsync, l), [4, f.resolveEndpointsAsync()];
            case 2:
              return p.sent(), [2, f];
            case 3:
              throw h = p.sent(), ae.createEndpointDiscoveryIncompleteError(h);
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.createInstance = function(e, t, n, o, a, s, l) {
      if (oe.isEmpty(e))
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
      e && (n = e.indexOf(Hi.THROTTLING_PREFIX) === 0);
      var o = !0;
      return t && (o = t.hasOwnProperty("throttleTime")), n && o;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var UI = {
  sendGetRequestAsync: function() {
    var r = "Network interface - sendGetRequestAsync() has not been implemented for the Network interface.";
    return Promise.reject(fe.createUnexpectedError(r));
  },
  sendPostRequestAsync: function() {
    var r = "Network interface - sendPostRequestAsync() has not been implemented for the Network interface.";
    return Promise.reject(fe.createUnexpectedError(r));
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
}, Up = (
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
  }(fe)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var FI = (
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
var HI = (
  /** @class */
  function() {
    function r(e, t) {
      this.cacheOutcome = $n.NO_CACHE_HIT, this.cacheManager = t, this.apiId = e.apiId, this.correlationId = e.correlationId, this.wrapperSKU = e.wrapperSKU || N.EMPTY_STRING, this.wrapperVer = e.wrapperVer || N.EMPTY_STRING, this.telemetryCacheKey = It.CACHE_KEY + Ct.CACHE_KEY_SEPARATOR + e.clientId;
    }
    return r.prototype.generateCurrentRequestHeaderValue = function() {
      var e = "" + this.apiId + It.VALUE_SEPARATOR + this.cacheOutcome, t = [this.wrapperSKU, this.wrapperVer].join(It.VALUE_SEPARATOR), n = this.getRegionDiscoveryFields(), o = [e, n].join(It.VALUE_SEPARATOR);
      return [It.SCHEMA_VERSION, o, t].join(It.CATEGORY_SEPARATOR);
    }, r.prototype.generateLastRequestHeaderValue = function() {
      var e = this.getLastRequests(), t = r.maxErrorsToSend(e), n = e.failedRequests.slice(0, 2 * t).join(It.VALUE_SEPARATOR), o = e.errors.slice(0, t).join(It.VALUE_SEPARATOR), a = e.errors.length, s = t < a ? It.OVERFLOW_TRUE : It.OVERFLOW_FALSE, l = [a, s].join(It.VALUE_SEPARATOR);
      return [It.SCHEMA_VERSION, e.cacheHits, n, o, l].join(It.CATEGORY_SEPARATOR);
    }, r.prototype.cacheFailedRequest = function(e) {
      var t = this.getLastRequests();
      t.errors.length >= It.MAX_CACHED_ERRORS && (t.failedRequests.shift(), t.failedRequests.shift(), t.errors.shift()), t.failedRequests.push(this.apiId, this.correlationId), oe.isEmpty(e.subError) ? oe.isEmpty(e.errorCode) ? e && e.toString() ? t.errors.push(e.toString()) : t.errors.push(It.UNKNOWN_ERROR) : t.errors.push(e.errorCode) : t.errors.push(e.subError), this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t);
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
var om = (
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
      return PI;
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
          return n.endMeasurement(Ge(Ge({}, u), f), l);
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
        return s[e.name + "DurationMs"] = Math.floor(f), Ge({}, s);
      var h = Ge(Ge({}, s), e), p = 0;
      return (a = h.incompleteSubMeasurements) === null || a === void 0 || a.forEach(function(m) {
        n.logger.trace("PerformanceClient: Incomplete submeasurement " + m.name + " found for " + e.name, h.correlationId), p++;
      }), h.incompleteSubMeasurements = void 0, h = Ge(Ge({}, h), { durationMs: Math.round(f), queuedTimeMs: u.totalQueueTime, queuedCount: u.totalQueueCount, queuedManuallyCompletedCount: u.manuallyCompletedCount, status: Ts.Completed, incompleteSubsCount: p }), this.truncateIntegralFields(h, this.getIntFields()), this.emitEvents([h], e.correlationId), h;
    }, r.prototype.addStaticFields = function(e, t) {
      this.logger.trace("PerformanceClient: Updating static fields");
      var n = this.eventsByCorrelationId.get(t);
      n ? this.eventsByCorrelationId.set(t, Ge(Ge({}, n), e)) : this.logger.trace("PerformanceClient: Event not found for", t);
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
      t ? (this.logger.trace("PerformanceClient: Performance measurement for " + e.name + " added/updated", e.correlationId), t.incompleteSubMeasurements = t.incompleteSubMeasurements || /* @__PURE__ */ new Map(), t.incompleteSubMeasurements.set(e.eventId, { name: e.name, startTimeMs: e.startTimeMs })) : (this.logger.trace("PerformanceClient: Performance measurement for " + e.name + " started", e.correlationId), this.eventsByCorrelationId.set(e.correlationId, Ge({}, e)));
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
), BI = (
  /** @class */
  function(r) {
    ir(e, r);
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
  }(om)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Y = {
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
}, ee = (
  /** @class */
  function(r) {
    Pt(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return Object.setPrototypeOf(o, e.prototype), o.name = "BrowserAuthError", o;
    }
    return e.createPkceNotGeneratedError = function(t) {
      return new e(Y.pkceNotGenerated.code, Y.pkceNotGenerated.desc + " Detail:" + t);
    }, e.createCryptoNotAvailableError = function(t) {
      return new e(Y.cryptoDoesNotExist.code, Y.cryptoDoesNotExist.desc + " Detail:" + t);
    }, e.createHttpMethodNotImplementedError = function(t) {
      return new e(Y.httpMethodNotImplementedError.code, Y.httpMethodNotImplementedError.desc + " Given Method: " + t);
    }, e.createEmptyNavigationUriError = function() {
      return new e(Y.emptyNavigateUriError.code, Y.emptyNavigateUriError.desc);
    }, e.createEmptyHashError = function(t) {
      return new e(Y.hashEmptyError.code, Y.hashEmptyError.desc + " Given Url: " + t);
    }, e.createHashDoesNotContainStateError = function() {
      return new e(Y.hashDoesNotContainStateError.code, Y.hashDoesNotContainStateError.desc);
    }, e.createHashDoesNotContainKnownPropertiesError = function() {
      return new e(Y.hashDoesNotContainKnownPropertiesError.code, Y.hashDoesNotContainKnownPropertiesError.desc);
    }, e.createUnableToParseStateError = function() {
      return new e(Y.unableToParseStateError.code, Y.unableToParseStateError.desc);
    }, e.createStateInteractionTypeMismatchError = function() {
      return new e(Y.stateInteractionTypeMismatchError.code, Y.stateInteractionTypeMismatchError.desc);
    }, e.createInteractionInProgressError = function() {
      return new e(Y.interactionInProgress.code, Y.interactionInProgress.desc);
    }, e.createPopupWindowError = function(t) {
      var n = Y.popupWindowError.desc;
      return n = oe.isEmpty(t) ? n : n + " Details: " + t, new e(Y.popupWindowError.code, n);
    }, e.createEmptyWindowCreatedError = function() {
      return new e(Y.emptyWindowError.code, Y.emptyWindowError.desc);
    }, e.createUserCancelledError = function() {
      return new e(Y.userCancelledError.code, Y.userCancelledError.desc);
    }, e.createMonitorPopupTimeoutError = function() {
      return new e(Y.monitorPopupTimeoutError.code, Y.monitorPopupTimeoutError.desc);
    }, e.createMonitorIframeTimeoutError = function() {
      return new e(Y.monitorIframeTimeoutError.code, Y.monitorIframeTimeoutError.desc);
    }, e.createRedirectInIframeError = function(t) {
      return new e(Y.redirectInIframeError.code, Y.redirectInIframeError.desc + " (window.parent !== window) => " + t);
    }, e.createBlockReloadInHiddenIframeError = function() {
      return new e(Y.blockTokenRequestsInHiddenIframeError.code, Y.blockTokenRequestsInHiddenIframeError.desc);
    }, e.createBlockAcquireTokenInPopupsError = function() {
      return new e(Y.blockAcquireTokenInPopupsError.code, Y.blockAcquireTokenInPopupsError.desc);
    }, e.createIframeClosedPrematurelyError = function() {
      return new e(Y.iframeClosedPrematurelyError.code, Y.iframeClosedPrematurelyError.desc);
    }, e.createSilentLogoutUnsupportedError = function() {
      return new e(Y.silentLogoutUnsupportedError.code, Y.silentLogoutUnsupportedError.desc);
    }, e.createNoAccountError = function() {
      return new e(Y.noAccountError.code, Y.noAccountError.desc);
    }, e.createSilentPromptValueError = function(t) {
      return new e(Y.silentPromptValueError.code, Y.silentPromptValueError.desc + " Given value: " + t);
    }, e.createUnableToParseTokenRequestCacheError = function() {
      return new e(Y.unableToParseTokenRequestCacheError.code, Y.unableToParseTokenRequestCacheError.desc);
    }, e.createNoTokenRequestCacheError = function() {
      return new e(Y.noTokenRequestCacheError.code, Y.noTokenRequestCacheError.desc);
    }, e.createAuthRequestNotSetError = function() {
      return new e(Y.authRequestNotSet.code, Y.authRequestNotSet.desc);
    }, e.createNoCachedAuthorityError = function() {
      return new e(Y.noCachedAuthorityError.code, Y.noCachedAuthorityError.desc);
    }, e.createInvalidCacheTypeError = function() {
      return new e(Y.invalidCacheType.code, "" + Y.invalidCacheType.desc);
    }, e.createNonBrowserEnvironmentError = function() {
      return new e(Y.notInBrowserEnvironment.code, Y.notInBrowserEnvironment.desc);
    }, e.createDatabaseNotOpenError = function() {
      return new e(Y.databaseNotOpen.code, Y.databaseNotOpen.desc);
    }, e.createNoNetworkConnectivityError = function() {
      return new e(Y.noNetworkConnectivity.code, Y.noNetworkConnectivity.desc);
    }, e.createPostRequestFailedError = function(t, n) {
      return new e(Y.postRequestFailed.code, Y.postRequestFailed.desc + " | Network client threw: " + t + " | Attempted to reach: " + n.split("?")[0]);
    }, e.createGetRequestFailedError = function(t, n) {
      return new e(Y.getRequestFailed.code, Y.getRequestFailed.desc + " | Network client threw: " + t + " | Attempted to reach: " + n.split("?")[0]);
    }, e.createFailedToParseNetworkResponseError = function(t) {
      return new e(Y.failedToParseNetworkResponse.code, Y.failedToParseNetworkResponse.desc + " | Attempted to reach: " + t.split("?")[0]);
    }, e.createUnableToLoadTokenError = function(t) {
      return new e(Y.unableToLoadTokenError.code, Y.unableToLoadTokenError.desc + " | " + t);
    }, e.createSigningKeyNotFoundInStorageError = function(t) {
      return new e(Y.signingKeyNotFoundInStorage.code, Y.signingKeyNotFoundInStorage.desc + " | No match found for KeyId: " + t);
    }, e.createAuthCodeRequiredError = function() {
      return new e(Y.authCodeRequired.code, Y.authCodeRequired.desc);
    }, e.createAuthCodeOrNativeAccountIdRequiredError = function() {
      return new e(Y.authCodeOrNativeAccountRequired.code, Y.authCodeOrNativeAccountRequired.desc);
    }, e.createSpaCodeAndNativeAccountIdPresentError = function() {
      return new e(Y.spaCodeAndNativeAccountPresent.code, Y.spaCodeAndNativeAccountPresent.desc);
    }, e.createDatabaseUnavailableError = function() {
      return new e(Y.databaseUnavailable.code, Y.databaseUnavailable.desc);
    }, e.createUnableToAcquireTokenFromNativePlatformError = function() {
      return new e(Y.unableToAcquireTokenFromNativePlatform.code, Y.unableToAcquireTokenFromNativePlatform.desc);
    }, e.createNativeHandshakeTimeoutError = function() {
      return new e(Y.nativeHandshakeTimeout.code, Y.nativeHandshakeTimeout.desc);
    }, e.createNativeExtensionNotInstalledError = function() {
      return new e(Y.nativeExtensionNotInstalled.code, Y.nativeExtensionNotInstalled.desc);
    }, e.createNativeConnectionNotEstablishedError = function() {
      return new e(Y.nativeConnectionNotEstablished.code, Y.nativeConnectionNotEstablished.desc);
    }, e.createNativeBrokerCalledBeforeInitialize = function() {
      return new e(Y.nativeBrokerCalledBeforeInitialize.code, Y.nativeBrokerCalledBeforeInitialize.desc);
    }, e.createNativePromptParameterNotSupportedError = function() {
      return new e(Y.nativePromptNotSupported.code, Y.nativePromptNotSupported.desc);
    }, e;
  }(fe)
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
var ue;
(function(r) {
  r.Redirect = "redirect", r.Popup = "popup", r.Silent = "silent", r.None = "none";
})(ue || (ue = {}));
var Hp;
(function(r) {
  r.Startup = "startup", r.Login = "login", r.Logout = "logout", r.AcquireToken = "acquireToken", r.SsoSilent = "ssoSilent", r.HandleRedirect = "handleRedirect", r.None = "none";
})(Hp || (Hp = {}));
var Bp = {
  scopes: na
}, ri = "jwk", Kp;
(function(r) {
  r.React = "@azure/msal-react", r.Angular = "@azure/msal-angular";
})(Kp || (Kp = {}));
var uu = "msal.db", KI = 1, qI = uu + ".keys", nr;
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
    Pt(e, r);
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
  }(fe)
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
var im = (
  /** @class */
  function() {
    function r() {
    }
    return r.extractBrowserRequestState = function(e, t) {
      if (oe.isEmpty(t))
        return null;
      try {
        var n = Sn.parseRequestState(e, t);
        return n.libraryState.meta;
      } catch (o) {
        throw ae.createInvalidStateError(t, o);
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
    Pt(e, r);
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
      return !o || !Rt.isAccountEntity(o) ? (this.removeAccountKeyFromMap(t), null) : tr.toObject(new Rt(), o);
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
          this.logger.error("BrowserCacheManager:addTokenKey - CredentialType provided invalid. CredentialType: " + n), ae.createUnexpectedCredentialTypeError();
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
          this.logger.error("BrowserCacheManager:removeTokenKey - CredentialType provided invalid. CredentialType: " + n), ae.createUnexpectedCredentialTypeError();
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
      return !o || !cu.isAppMetadataEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getAppMetadata: cache hit"), tr.toObject(new cu(), o));
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
      return o && lu.isAuthorityMetadataEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getAuthorityMetadata: cache hit"), tr.toObject(new lu(), o)) : null;
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
        throw ae.createMultipleMatchingAccountsInCacheError();
      return null;
    }, e.prototype.getThrottlingCache = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return !o || !Dp.isThrottlingEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getThrottlingCache: cache hit"), tr.toObject(new Dp(), o));
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
      return n ? JSON.stringify(t) : oe.startsWith(t, N.CACHE_PREFIX) || oe.startsWith(t, yt.ADAL_ID_TOKEN) ? t : N.CACHE_PREFIX + "." + this.clientId + "." + t;
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
      } else if (!oe.isEmpty(a)) {
        var h = {
          credential: a,
          type: gr.UPN
        };
        this.setTemporaryCache(Be.CCS_CREDENTIAL, JSON.stringify(h), !0);
      }
    }, e.prototype.resetRequestCache = function(t) {
      var n = this;
      this.logger.trace("BrowserCacheManager.resetRequestCache called"), oe.isEmpty(t) || this.getKeys().forEach(function(o) {
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
            var s = im.extractBrowserRequestState(n.cryptoImpl, a);
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
        throw ee.createNoTokenRequestCacheError();
      var a = this.validateAndParseJson(n.base64Decode(o));
      if (!a)
        throw ee.createUnableToParseTokenRequestCacheError();
      if (this.removeItem(this.generateCacheKey(Be.REQUEST_PARAMS)), oe.isEmpty(a.authority)) {
        var s = this.generateAuthorityKey(t), l = this.getTemporaryCache(s);
        if (!l)
          throw ee.createNoCachedAuthorityError();
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
          throw ee.createInteractionInProgressError();
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
), $I = function(r, e) {
  var t = {
    cacheLocation: pt.MemoryStorage,
    temporaryCacheLocation: pt.MemoryStorage,
    storeAuthStateInCookie: !1,
    secureCookies: !1,
    cacheMigrationEnabled: !1,
    claimsBasedCachingEnabled: !0
  };
  return new fu(r, t, bs, e);
};
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Dl = "@azure/msal-browser", $i = "2.38.3";
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var GI = (
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
              throw o = s.sent(), window.navigator.onLine ? ee.createGetRequestFailedError(o, e) : ee.createNoNetworkConnectivityError();
            case 3:
              return s.trys.push([3, 5, , 6]), a = {
                headers: this.getHeaderDict(n.headers)
              }, [4, n.json()];
            case 4:
              return [2, (a.body = s.sent(), a.status = n.status, a)];
            case 5:
              throw s.sent(), ee.createFailedToParseNetworkResponseError(e);
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
              throw a = l.sent(), window.navigator.onLine ? ee.createPostRequestFailedError(a, e) : ee.createNoNetworkConnectivityError();
            case 4:
              return l.trys.push([4, 6, , 7]), s = {
                headers: this.getHeaderDict(o.headers)
              }, [4, o.json()];
            case 5:
              return [2, (s.body = l.sent(), s.status = o.status, s)];
            case 6:
              throw l.sent(), ee.createFailedToParseNetworkResponseError(e);
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
var zI = (
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
          (l.status < 200 || l.status >= 300) && (t === tn.POST ? s(ee.createPostRequestFailedError("Failed with status " + l.status, e)) : s(ee.createGetRequestFailedError("Failed with status " + l.status, e)));
          try {
            var u = JSON.parse(l.responseText), f = {
              headers: o.getHeaderDict(l),
              body: u,
              status: l.status
            };
            a(f);
          } catch {
            s(ee.createFailedToParseNetworkResponseError(e));
          }
        }, l.onerror = function() {
          window.navigator.onLine ? t === tn.POST ? s(ee.createPostRequestFailedError("Failed with status " + l.status, e)) : s(ee.createGetRequestFailedError("Failed with status " + l.status, e)) : s(ee.createNoNetworkConnectivityError());
        }, t === tn.POST && n && n.body)
          l.send(n.body);
        else if (t === tn.GET)
          l.send();
        else
          throw ee.createHttpMethodNotImplementedError(t);
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
      return window.fetch && window.Headers ? new GI() : new zI();
    }, r.blockReloadInHiddenIframes = function() {
      var e = He.hashContainsKnownProperties(window.location.hash);
      if (e && r.isInIframe())
        throw ee.createBlockReloadInHiddenIframeError();
    }, r.blockRedirectInIframe = function(e, t) {
      var n = r.isInIframe();
      if (e === ue.Redirect && n && !t)
        throw ee.createRedirectInIframeError(n);
    }, r.blockAcquireTokenInPopups = function() {
      if (r.isInPopup())
        throw ee.createBlockAcquireTokenInPopupsError();
    }, r.blockNonBrowserEnvironment = function(e) {
      if (!e)
        throw ee.createNonBrowserEnvironmentError();
    }, r.blockNativeBrokerCalledBeforeInitialized = function(e, t) {
      if (e && !t)
        throw ee.createNativeBrokerCalledBeforeInitialize();
    }, r.detectIEOrEdge = function() {
      var e = window.navigator.userAgent, t = e.indexOf("MSIE "), n = e.indexOf("Trident/"), o = e.indexOf("Edge/"), a = t > 0 || n > 0, s = o > 0;
      return a || s;
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var am = (
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
              return this.performanceClient.addQueueMeasurement(U.InitializeBaseRequest, e.correlationId), this.logger.verbose("Initializing BaseAuthRequest"), n = e.authority || this.config.auth.authority, t ? [4, this.validateRequestAuthority(n, t)] : [3, 2];
            case 1:
              l.sent(), l.label = 2;
            case 2:
              if (o = Ou(e && e.scopes || []), a = de(de({}, e), {
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
              return this.config.cache.claimsBasedCachingEnabled && e.claims && !oe.isEmptyObj(e.claims) ? (s = a, [4, this.browserCrypto.hashString(e.claims)]) : [3, 4];
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
      return new HI(n, this.browserStorage);
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
    Pt(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.initializeAuthorizationCodeRequest = function(t) {
      return G(this, void 0, void 0, function() {
        var n, o;
        return z(this, function(a) {
          switch (a.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(U.StandardInteractionClientInitializeAuthorizationCodeRequest, t.correlationId), this.logger.verbose("initializeAuthorizationRequest called", t.correlationId), [4, this.browserCrypto.generatePkceCodes()];
            case 1:
              return n = a.sent(), o = de(de({}, t), { redirectUri: t.redirectUri, code: N.EMPTY_STRING, codeVerifier: n.verifier }), t.codeChallenge = n.challenge, t.codeChallengeMethod = N.S256_CODE_CHALLENGE_METHOD, [2, o];
          }
        });
      });
    }, e.prototype.initializeLogoutRequest = function(t) {
      this.logger.verbose("initializeLogoutRequest called", t == null ? void 0 : t.correlationId);
      var n = de({ correlationId: this.correlationId || this.browserCrypto.createNewGuid() }, t);
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
              return this.performanceClient.addQueueMeasurement(U.StandardInteractionClientCreateAuthCodeClient, this.correlationId), this.performanceClient.setPreQueueTime(U.StandardInteractionClientGetClientConfiguration, this.correlationId), [4, this.getClientConfiguration(t, n, o)];
            case 1:
              return a = s.sent(), [2, new tm(a, this.performanceClient)];
          }
        });
      });
    }, e.prototype.getClientConfiguration = function(t, n, o) {
      return G(this, void 0, void 0, function() {
        var a, s;
        return z(this, function(l) {
          switch (l.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(U.StandardInteractionClientGetClientConfiguration, this.correlationId), this.logger.verbose("getClientConfiguration called", this.correlationId), this.performanceClient.setPreQueueTime(U.StandardInteractionClientGetDiscoveredAuthority, this.correlationId), [4, this.getDiscoveredAuthority(n, o)];
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
        throw ee.createHashDoesNotContainStateError();
      var a = im.extractBrowserRequestState(this.browserCrypto, t.state);
      if (!a)
        throw ee.createUnableToParseStateError();
      if (a.interactionType !== n)
        throw ee.createStateInteractionTypeMismatchError();
      return this.logger.verbose("Returning state from hash", o), t.state;
    }, e.prototype.getDiscoveredAuthority = function(t, n) {
      var o;
      return G(this, void 0, void 0, function() {
        var a, s, l, u;
        return z(this, function(f) {
          switch (f.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(U.StandardInteractionClientGetDiscoveredAuthority, this.correlationId), this.logger.verbose("getDiscoveredAuthority called", this.correlationId), a = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(U.StandardInteractionClientGetDiscoveredAuthority, this.correlationId), s = {
                protocolMode: this.config.auth.protocolMode,
                knownAuthorities: this.config.auth.knownAuthorities,
                cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                authorityMetadata: this.config.auth.authorityMetadata,
                skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
              }, l = t || this.config.auth.authority, u = Wi.generateAuthority(l, n || this.config.auth.azureCloudOptions), this.logger.verbose("Creating discovered authority with configured authority", this.correlationId), this.performanceClient.setPreQueueTime(U.AuthorityFactoryCreateDiscoveredInstance, this.correlationId), [4, As.createDiscoveredInstance(u, this.config.system.networkClient, this.browserStorage, s, this.logger, this.performanceClient, this.correlationId).then(function(h) {
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
              return this.performanceClient.addQueueMeasurement(U.StandardInteractionClientInitializeAuthorizationRequest, this.correlationId), this.logger.verbose("initializeAuthorizationRequest called", this.correlationId), o = this.getRedirectUri(t.redirectUri), a = {
                interactionType: n
              }, s = Sn.setRequestState(this.browserCrypto, t && t.state || N.EMPTY_STRING, a), this.performanceClient.setPreQueueTime(U.InitializeBaseRequest, this.correlationId), u = [{}], [4, this.initializeBaseRequest(t)];
            case 1:
              return l = de.apply(void 0, [de.apply(void 0, u.concat([p.sent()])), { redirectUri: o, state: s, nonce: t.nonce || this.browserCrypto.createNewGuid(), responseMode: Cs.FRAGMENT }]), f = t.account || this.browserStorage.getActiveAccount(), f && (this.logger.verbose("Setting validated request account", this.correlationId), this.logger.verbosePii("Setting validated request account: " + f.homeAccountId, this.correlationId), l.account = f), oe.isEmpty(l.loginHint) && !f && (h = this.browserStorage.getLegacyLoginHint(), h && (l.loginHint = h)), [2, l];
          }
        });
      });
    }, e;
  }(am)
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
          if (this.performanceClient.addQueueMeasurement(U.HandleCodeResponseFromHash, this.authCodeRequest.correlationId), this.logger.verbose("InteractionHandler.handleCodeResponse called"), oe.isEmpty(e))
            throw ee.createEmptyHashError(e);
          if (a = this.browserStorage.generateStateKey(t), s = this.browserStorage.getTemporaryCache(a), !s)
            throw ae.createStateNotFoundError("Cached State");
          try {
            l = this.authModule.handleFragmentResponse(e, s);
          } catch (f) {
            throw f instanceof wo && f.subError === Y.userCancelledError.code ? ee.createUserCancelledError() : f;
          }
          return this.performanceClient.setPreQueueTime(U.HandleCodeResponseFromServer, this.authCodeRequest.correlationId), [2, this.handleCodeResponseFromServer(l, t, n, o)];
        });
      });
    }, r.prototype.handleCodeResponseFromServer = function(e, t, n, o, a) {
      return a === void 0 && (a = !0), G(this, void 0, void 0, function() {
        var s, l, u, f, h, p;
        return z(this, function(m) {
          switch (m.label) {
            case 0:
              if (this.performanceClient.addQueueMeasurement(U.HandleCodeResponseFromServer, this.authCodeRequest.correlationId), this.logger.trace("InteractionHandler.handleCodeResponseFromServer called"), s = this.browserStorage.generateStateKey(t), l = this.browserStorage.getTemporaryCache(s), !l)
                throw ae.createStateNotFoundError("Cached State");
              return u = this.browserStorage.generateNonceKey(l), f = this.browserStorage.getTemporaryCache(u), this.authCodeRequest.code = e.code, e.cloud_instance_host_name ? (this.performanceClient.setPreQueueTime(U.UpdateTokenEndpointAuthority, this.authCodeRequest.correlationId), [4, this.updateTokenEndpointAuthority(e.cloud_instance_host_name, n, o)]) : [3, 2];
            case 1:
              m.sent(), m.label = 2;
            case 2:
              return a && (e.nonce = f || void 0), e.state = l, e.client_info ? this.authCodeRequest.clientInfo = e.client_info : (h = this.checkCcsCredentials(), h && (this.authCodeRequest.ccsCredential = h)), this.performanceClient.setPreQueueTime(U.AuthClientAcquireToken, this.authCodeRequest.correlationId), [4, this.authModule.acquireToken(this.authCodeRequest, e)];
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
              return this.performanceClient.addQueueMeasurement(U.UpdateTokenEndpointAuthority, this.authCodeRequest.correlationId), o = "https://" + e + "/" + t.tenant + "/", [4, As.createDiscoveredInstance(o, n, this.browserStorage, t.options, this.logger, this.performanceClient, this.authCodeRequest.correlationId)];
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
    Pt(e, r);
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
              return this.logger.verbose("RedirectHandler.initiateAuthRequest called"), oe.isEmpty(t) ? [3, 7] : (n.redirectStartPage && (this.logger.verbose("RedirectHandler.initiateAuthRequest: redirectStartPage set, caching start page"), this.browserStorage.setTemporaryCache(Be.ORIGIN_URI, n.redirectStartPage, !0)), this.browserStorage.setTemporaryCache(Be.CORRELATION_ID, this.authCodeRequest.correlationId, !0), this.browserStorage.cacheCodeRequest(this.authCodeRequest, this.browserCrypto), this.logger.infoPii("RedirectHandler.initiateAuthRequest: Navigate to: " + t), o = {
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
              throw this.logger.info("RedirectHandler.initiateAuthRequest: Navigate url is empty"), ee.createEmptyNavigationUriError();
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
              if (this.logger.verbose("RedirectHandler.handleCodeResponse called"), oe.isEmpty(t))
                throw ee.createEmptyHashError(t);
              if (this.browserStorage.setInteractionInProgress(!1), s = this.browserStorage.generateStateKey(n), l = this.browserStorage.getTemporaryCache(s), !l)
                throw ae.createStateNotFoundError("Cached State");
              try {
                u = this.authModule.handleFragmentResponse(t, l);
              } catch (C) {
                throw C instanceof wo && C.subError === Y.userCancelledError.code ? ee.createUserCancelledError() : C;
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
    Pt(e, r);
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
            return ee.createUserCancelledError();
          case qn.NO_NETWORK:
            return ee.createNoNetworkConnectivityError();
        }
      return new e(t, n, o);
    }, e.createUserSwitchError = function() {
      return new e(Pi.userSwitch.code, Pi.userSwitch.desc);
    }, e.createTokensNotFoundInCacheError = function() {
      return new e(Pi.tokensNotFoundInCache.code, Pi.tokensNotFoundInCache.desc);
    }, e;
  }(fe)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var sm = (
  /** @class */
  function(r) {
    Pt(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.acquireToken = function(t) {
      return G(this, void 0, void 0, function() {
        var n, o, a, s, l;
        return z(this, function(u) {
          switch (u.label) {
            case 0:
              return n = this.performanceClient.startMeasurement(U.SilentCacheClientAcquireToken, t.correlationId), o = this.initializeServerTelemetryManager(Ze.acquireTokenSilent_silentFlow), [4, this.createSilentFlowClient(o, t.authority, t.azureCloudOptions)];
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
              throw l = u.sent(), l instanceof ee && l.errorCode === Y.signingKeyNotFoundInStorage.code && this.logger.verbose("Signing keypair for bound access token not found. Refreshing bound access token and generating a new crypto keypair."), n.endMeasurement({
                errorCode: l instanceof fe && l.errorCode || void 0,
                subErrorCode: l instanceof fe && l.subError || void 0,
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
      return Promise.reject(ee.createSilentLogoutUnsupportedError());
    }, e.prototype.createSilentFlowClient = function(t, n, o) {
      return G(this, void 0, void 0, function() {
        var a;
        return z(this, function(s) {
          switch (s.label) {
            case 0:
              return this.performanceClient.setPreQueueTime(U.StandardInteractionClientGetClientConfiguration, this.correlationId), [4, this.getClientConfiguration(t, n, o)];
            case 1:
              return a = s.sent(), [2, new OI(a, this.performanceClient)];
          }
        });
      });
    }, e.prototype.initializeSilentRequest = function(t, n) {
      return G(this, void 0, void 0, function() {
        var o;
        return z(this, function(a) {
          switch (a.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(U.InitializeSilentRequest, this.correlationId), this.performanceClient.setPreQueueTime(U.InitializeBaseRequest, this.correlationId), o = [de({}, t)], [4, this.initializeBaseRequest(t, n)];
            case 1:
              return [2, de.apply(void 0, [de.apply(void 0, o.concat([a.sent()])), { account: n, forceRefresh: t.forceRefresh || !1 }])];
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
    Pt(e, r);
    function e(t, n, o, a, s, l, u, f, h, p, m, v) {
      var C = r.call(this, t, n, o, a, s, l, f, h, v) || this;
      return C.apiId = u, C.accountId = p, C.nativeMessageHandler = h, C.nativeStorageManager = m, C.silentCacheClient = new sm(t, C.nativeStorageManager, o, a, s, l, f, h, v), C;
    }
    return e.prototype.acquireToken = function(t) {
      return G(this, void 0, void 0, function() {
        var n, o, a, s, l, u, f;
        return z(this, function(h) {
          switch (h.label) {
            case 0:
              return this.logger.trace("NativeInteractionClient - acquireToken called."), n = this.performanceClient.startMeasurement(U.NativeInteractionClientAcquireToken, t.correlationId), o = Pr.nowSeconds(), [4, this.initializeNativeRequest(t)];
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
        scopes: Ut.fromString(t.scope).asArray(),
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
                throw this.logger.warning("NativeInteractionClient:acquireTokensFromCache - No nativeAccountId provided"), ae.createNoAccountFoundError();
              if (o = this.browserStorage.getAccountInfoFilteredBy({ nativeAccountId: t }), !o)
                throw ae.createNoAccountFoundError();
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
              n = t.prompt, o = kp(t, ["prompt"]), n && this.logger.verbose("NativeInteractionClient - handleRedirectPromise called and prompt was included in the original request, removing prompt from cached request to prevent second interaction with native broker window."), this.browserStorage.removeItem(this.browserStorage.generateCacheKey(Be.NATIVE_REQUEST)), a = {
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
      var o = Rt.generateHomeAccountId(t.client_info || N.EMPTY_STRING, Wt.Default, this.logger, this.browserCrypto, n);
      return o;
    }, e.prototype.createAccountEntity = function(t, n, o, a) {
      return Rt.createAccount(t.client_info, n, o, void 0, void 0, void 0, a, t.account.id);
    }, e.prototype.generateScopes = function(t, n) {
      return t.scope ? Ut.fromString(t.scope) : Ut.fromString(n.scope);
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
                throw ae.createKeyIdMissingError();
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
              return u = this.addTelemetryFromNativeResponse(t), f = t.scope ? Ut.fromString(t.scope) : Ut.fromString(n.scope), h = t.account.properties || {}, p = h.UID || o.claims.oid || o.claims.sub || N.EMPTY_STRING, m = h.TenantId || o.claims.tid || N.EMPTY_STRING, [4, this.generatePopAccessToken(t, n)];
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
              return o = new He(n), o.validateAsUri(), a = t.scopes, s = kp(t, ["scopes"]), l = new Ut(a || []), l.appendScopes(na), u = function() {
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
                    throw v.logger.trace("initializeNativeRequest: prompt = " + t.prompt + " is not compatible with native flow"), ee.createNativePromptParameterNotSupportedError();
                }
              }, f = de(de({}, s), {
                accountId: this.accountId,
                clientId: this.config.auth.clientId,
                authority: o.urlString,
                scope: l.printScopes(),
                redirectUri: this.getRedirectUri(t.redirectUri),
                prompt: u(),
                correlationId: this.correlationId,
                tokenType: t.authenticationScheme,
                windowTitleSubstring: document.title,
                extraParameters: de(de(de({}, t.extraQueryParameters), t.tokenQueryParameters), { telemetry: xi.MATS_TELEMETRY }),
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
  }(am)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var vo = (
  /** @class */
  function() {
    function r(e, t, n, o) {
      this.logger = e, this.handshakeTimeoutMs = t, this.extensionId = o, this.resolvers = /* @__PURE__ */ new Map(), this.handshakeResolvers = /* @__PURE__ */ new Map(), this.responseId = 0, this.messageChannel = new MessageChannel(), this.windowListener = this.onWindowMessage.bind(this), this.performanceClient = n, this.handshakeEvent = n.startMeasurement(U.NativeMessageHandlerHandshake);
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
              window.removeEventListener("message", t.windowListener, !1), t.messageChannel.port1.close(), t.messageChannel.port2.close(), t.handshakeEvent.endMeasurement({ extensionHandshakeTimedOut: !0, success: !1 }), a(ee.createNativeHandshakeTimeoutError()), t.handshakeResolvers.delete(e.responseId);
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
          n && (this.handshakeEvent.endMeasurement({ success: !1, extensionInstalled: !1 }), n.reject(ee.createNativeExtensionNotInstalledError()));
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
            throw fe.createUnexpectedError("Event does not contain result.");
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
var VI = (
  /** @class */
  function(r) {
    Pt(e, r);
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
              return this.performanceClient.setPreQueueTime(U.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, ue.Redirect)];
            case 1:
              n = v.sent(), this.browserStorage.updateCacheEntries(n.state, n.nonce, n.authority, n.loginHint || N.EMPTY_STRING, n.account || null), o = this.initializeServerTelemetryManager(Ze.acquireTokenRedirect), a = function(C) {
                C.persisted && (m.logger.verbose("Page was restored from back/forward cache. Clearing temporary cache."), m.browserStorage.cleanRequestByState(n.state), m.eventHandler.emitEvent(be.RESTORE_FROM_BFCACHE, ue.Redirect));
              }, v.label = 2;
            case 2:
              return v.trys.push([2, 7, , 8]), this.performanceClient.setPreQueueTime(U.StandardInteractionClientInitializeAuthorizationCodeRequest, t.correlationId), [4, this.initializeAuthorizationCodeRequest(n)];
            case 3:
              return s = v.sent(), this.performanceClient.setPreQueueTime(U.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(o, n.authority, n.azureCloudOptions)];
            case 4:
              return l = v.sent(), this.logger.verbose("Auth code client created"), u = new $p(l, this.browserStorage, s, this.logger, this.browserCrypto, this.performanceClient), [4, l.getAuthCodeUrl(de(de({}, n), { nativeBroker: vo.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, t.authenticationScheme) }))];
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
              throw p = v.sent(), p instanceof fe && p.setCorrelationId(this.correlationId), window.removeEventListener("pageshow", a), o.cacheFailedRequest(p), this.browserStorage.cleanRequestByState(n.state), p;
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
                return this.logger.info("handleRedirectPromise did not detect a response hash as a result of a redirect. Cleaning temporary cache."), this.browserStorage.cleanRequestByInteractionType(ue.Redirect), [2, null];
              a = void 0;
              try {
                s = He.getDeserializedHash(o), a = this.validateAndExtractStateFromHash(s, ue.Redirect), this.logger.verbose("State extracted from hash");
              } catch (_) {
                return this.logger.info("handleRedirectPromise was unable to extract state due to: " + _), this.browserStorage.cleanRequestByInteractionType(ue.Redirect), [2, null];
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
              throw C = E.sent(), C instanceof fe && C.setCorrelationId(this.correlationId), n.cacheFailedRequest(C), this.browserStorage.cleanRequestByInteractionType(ue.Redirect), C;
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
                  throw ee.createNativeConnectionNotEstablishedError();
                return l = new Zo(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, s.accountId, this.nativeStorage, a.correlationId), u = Sn.parseRequestState(this.browserCrypto, n).userRequestState, [2, l.acquireToken(de(de({}, a), {
                  state: u,
                  prompt: void 0
                  // Server should handle the prompt, ideally native broker can do this part silently
                })).finally(function() {
                  m.browserStorage.cleanRequestByState(n);
                })];
              }
              if (f = this.browserStorage.getCachedAuthority(n), !f)
                throw ee.createNoCachedAuthorityError();
              return this.performanceClient.setPreQueueTime(U.StandardInteractionClientCreateAuthCodeClient, a.correlationId), [4, this.createAuthCodeClient(o, f)];
            case 1:
              return h = v.sent(), this.logger.verbose("Auth code client created"), Ss.removeThrottle(this.browserStorage, this.config.auth.clientId, a), p = new $p(h, this.browserStorage, a, this.logger, this.browserCrypto, this.performanceClient), [4, p.handleCodeResponseFromHash(t, n, h.authority, this.networkClient)];
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
              return h.trys.push([1, 10, , 11]), this.eventHandler.emitEvent(be.LOGOUT_START, ue.Redirect, t), [4, this.clearCacheOnLogout(n.account)];
            case 2:
              return h.sent(), a = {
                apiId: Ze.logout,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !1
              }, this.performanceClient.setPreQueueTime(U.StandardInteractionClientCreateAuthCodeClient, n.correlationId), [4, this.createAuthCodeClient(o, t && t.authority)];
            case 3:
              return s = h.sent(), this.logger.verbose("Auth code client created"), l = s.getLogoutUri(n), this.eventHandler.emitEvent(be.LOGOUT_SUCCESS, ue.Redirect, n), t && typeof t.onRedirectNavigate == "function" ? (u = t.onRedirectNavigate(l), u === !1 ? [3, 5] : (this.logger.verbose("Logout onRedirectNavigate did not return false, navigating"), this.browserStorage.getInteractionInProgress() || this.browserStorage.setInteractionInProgress(!0), [4, this.navigationClient.navigateExternal(l, a)])) : [3, 7];
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
              throw f = h.sent(), f instanceof fe && f.setCorrelationId(this.correlationId), o.cacheFailedRequest(f), this.eventHandler.emitEvent(be.LOGOUT_FAILURE, ue.Redirect, null, f), this.eventHandler.emitEvent(be.LOGOUT_END, ue.Redirect), f;
            case 11:
              return this.eventHandler.emitEvent(be.LOGOUT_END, ue.Redirect), [
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
var WI = (
  /** @class */
  function(r) {
    Pt(e, r);
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
        var s, l, u, f, h, p, m, v, C, E, _, R, A, S, I, O, L, q = this;
        return z(this, function(F) {
          switch (F.label) {
            case 0:
              return this.logger.verbose("acquireTokenPopupAsync called"), s = this.initializeServerTelemetryManager(Ze.acquireTokenPopup), this.performanceClient.setPreQueueTime(U.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, ue.Popup)];
            case 1:
              l = F.sent(), this.browserStorage.updateCacheEntries(l.state, l.nonce, l.authority, l.loginHint || N.EMPTY_STRING, l.account || null), F.label = 2;
            case 2:
              return F.trys.push([2, 8, , 9]), this.performanceClient.setPreQueueTime(U.StandardInteractionClientInitializeAuthorizationCodeRequest, t.correlationId), [4, this.initializeAuthorizationCodeRequest(l)];
            case 3:
              return u = F.sent(), this.performanceClient.setPreQueueTime(U.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(s, l.authority, l.azureCloudOptions)];
            case 4:
              return f = F.sent(), this.logger.verbose("Auth code client created"), h = vo.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, t.authenticationScheme), p = void 0, h && (p = this.performanceClient.startMeasurement(U.FetchAccountIdWithNativeBroker, t.correlationId)), [4, f.getAuthCodeUrl(de(de({}, l), { nativeBroker: h }))];
            case 5:
              return m = F.sent(), v = new Uu(f, this.browserStorage, u, this.logger, this.performanceClient), C = {
                popup: a,
                popupName: n,
                popupWindowAttributes: o
              }, E = this.initiateAuthRequest(m, C), this.eventHandler.emitEvent(be.POPUP_OPENED, ue.Popup, { popupWindow: E }, null), [4, this.monitorPopupForHash(E)];
            case 6:
              if (_ = F.sent(), R = He.getDeserializedHash(_), A = this.validateAndExtractStateFromHash(R, ue.Popup, l.correlationId), Ss.removeThrottle(this.browserStorage, this.config.auth.clientId, u), R.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), p && p.endMeasurement({
                  success: !0,
                  isNativeBroker: !0
                }), !this.nativeMessageHandler)
                  throw ee.createNativeConnectionNotEstablishedError();
                return S = new Zo(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, R.accountId, this.nativeStorage, l.correlationId), I = Sn.parseRequestState(this.browserCrypto, A).userRequestState, [2, S.acquireToken(de(de({}, l), {
                  state: I,
                  prompt: void 0
                  // Server should handle the prompt, ideally native broker can do this part silently
                })).finally(function() {
                  q.browserStorage.cleanRequestByState(A);
                })];
              }
              return [4, v.handleCodeResponseFromHash(_, A, f.authority, this.networkClient)];
            case 7:
              return O = F.sent(), [2, O];
            case 8:
              throw L = F.sent(), a && a.close(), L instanceof fe && L.setCorrelationId(this.correlationId), s.cacheFailedRequest(L), this.browserStorage.cleanRequestByState(l.state), L;
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
              this.logger.verbose("logoutPopupAsync called"), this.eventHandler.emitEvent(be.LOGOUT_START, ue.Popup, t), u = this.initializeServerTelemetryManager(Ze.logoutPopup), E.label = 1;
            case 1:
              return E.trys.push([1, 5, , 6]), [4, this.clearCacheOnLogout(t.account)];
            case 2:
              return E.sent(), this.performanceClient.setPreQueueTime(U.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(u, a)];
            case 3:
              return f = E.sent(), this.logger.verbose("Auth code client created"), h = f.getLogoutUri(t), this.eventHandler.emitEvent(be.LOGOUT_SUCCESS, ue.Popup, t), p = this.openPopup(h, { popupName: n, popupWindowAttributes: o, popup: s }), this.eventHandler.emitEvent(be.POPUP_OPENED, ue.Popup, { popupWindow: p }, null), [4, this.waitForLogoutPopup(p)];
            case 4:
              return E.sent(), l ? (m = {
                apiId: Ze.logoutPopup,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !1
              }, v = He.getAbsoluteUrl(l, lt.getCurrentUri()), this.logger.verbose("Redirecting main window to url specified in the request"), this.logger.verbosePii("Redirecting main window to: " + v), this.navigationClient.navigateInternal(v, m)) : this.logger.verbose("No main window navigation requested"), [3, 6];
            case 5:
              throw C = E.sent(), s && s.close(), C instanceof fe && C.setCorrelationId(this.correlationId), this.browserStorage.setInteractionInProgress(!1), this.eventHandler.emitEvent(be.LOGOUT_FAILURE, ue.Popup, null, C), this.eventHandler.emitEvent(be.LOGOUT_END, ue.Popup), u.cacheFailedRequest(C), C;
            case 6:
              return this.eventHandler.emitEvent(be.LOGOUT_END, ue.Popup), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.initiateAuthRequest = function(t, n) {
      if (oe.isEmpty(t))
        throw this.logger.error("Navigate url is empty"), ee.createEmptyNavigationUriError();
      return this.logger.infoPii("Navigate to: " + t), this.openPopup(t, n);
    }, e.prototype.monitorPopupForHash = function(t) {
      var n = this;
      return new Promise(function(o, a) {
        var s = n.config.system.windowHashTimeout / n.config.system.pollIntervalMilliseconds, l = 0;
        n.logger.verbose("PopupHandler.monitorPopupForHash - polling started");
        var u = setInterval(function() {
          if (t.closed) {
            n.logger.error("PopupHandler.monitorPopupForHash - window closed"), n.cleanPopup(), clearInterval(u), a(ee.createUserCancelledError());
            return;
          }
          var f = N.EMPTY_STRING, h = N.EMPTY_STRING;
          try {
            f = t.location.href, h = t.location.hash;
          } catch {
          }
          oe.isEmpty(f) || f === "about:blank" || (n.logger.verbose("PopupHandler.monitorPopupForHash - popup window is on same origin as caller"), l++, h ? (n.logger.verbose("PopupHandler.monitorPopupForHash - found hash in url"), clearInterval(u), n.cleanPopup(t), He.hashContainsKnownProperties(h) ? (n.logger.verbose("PopupHandler.monitorPopupForHash - hash contains known properties, returning."), o(h)) : (n.logger.error("PopupHandler.monitorPopupForHash - found hash in url but it does not contain known properties. Check that your router is not changing the hash prematurely."), n.logger.errorPii("PopupHandler.monitorPopupForHash - hash found: " + h), a(ee.createHashDoesNotContainKnownPropertiesError()))) : l > s && (n.logger.error("PopupHandler.monitorPopupForHash - unable to find hash in url, timing out"), clearInterval(u), a(ee.createMonitorPopupTimeoutError())));
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
          oe.isEmpty(s) || s === "about:blank" || (n.logger.verbose("PopupHandler.waitForLogoutPopup - popup window is on same origin as caller, closing."), clearInterval(a), n.cleanPopup(t), o());
        }, n.config.system.pollIntervalMilliseconds);
      });
    }, e.prototype.openPopup = function(t, n) {
      try {
        var o = void 0;
        if (n.popup ? (o = n.popup, this.logger.verbosePii("Navigating popup window to: " + t), o.location.assign(t)) : typeof n.popup > "u" && (this.logger.verbosePii("Opening popup window to: " + t), o = this.openSizedPopup(t, n.popupName, n.popupWindowAttributes)), !o)
          throw ee.createEmptyWindowCreatedError();
        return o.focus && o.focus(), this.currentWindow = o, window.addEventListener("beforeunload", this.unloadWindow), o;
      } catch (a) {
        throw this.logger.error("error opening popup " + a.message), this.browserStorage.setInteractionInProgress(!1), ee.createPopupWindowError(a.toString());
      }
    }, e.prototype.openSizedPopup = function(t, n, o) {
      var a, s, l, u, f = window.screenLeft ? window.screenLeft : window.screenX, h = window.screenTop ? window.screenTop : window.screenY, p = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, m = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, v = (a = o.popupSize) === null || a === void 0 ? void 0 : a.width, C = (s = o.popupSize) === null || s === void 0 ? void 0 : s.height, E = (l = o.popupPosition) === null || l === void 0 ? void 0 : l.top, _ = (u = o.popupPosition) === null || u === void 0 ? void 0 : u.left;
      return (!v || v < 0 || v > p) && (this.logger.verbose("Default popup window width used. Window width not configured or invalid."), v = $r.POPUP_WIDTH), (!C || C < 0 || C > m) && (this.logger.verbose("Default popup window height used. Window height not configured or invalid."), C = $r.POPUP_HEIGHT), (!E || E < 0 || E > m) && (this.logger.verbose("Default popup window top position used. Window top not configured or invalid."), E = Math.max(0, m / 2 - $r.POPUP_HEIGHT / 2 + h)), (!_ || _ < 0 || _ > p) && (this.logger.verbose("Default popup window left position used. Window left not configured or invalid."), _ = Math.max(0, p / 2 - $r.POPUP_WIDTH / 2 + f)), window.open(t, n, "width=" + v + ", height=" + C + ", top=" + E + ", left=" + _ + ", scrollbars=yes");
    }, e.prototype.unloadWindow = function(t) {
      this.browserStorage.cleanRequestByInteractionType(ue.Popup), this.currentWindow && this.currentWindow.close(), t.preventDefault();
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
var jI = (
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
var YI = 6e4, hu = 6e3, QI = 3e4, JI = 2e3;
function XI(r, e) {
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
  }, f = de(de({}, em), {
    loggerOptions: u,
    networkClient: e ? lt.getBrowserNetworkClient() : UI,
    navigationClient: new jI(),
    loadFrameTimeout: 0,
    // If loadFrameTimeout is provided, use that as default.
    windowHashTimeout: (o == null ? void 0 : o.loadFrameTimeout) || YI,
    iframeHashTimeout: (o == null ? void 0 : o.loadFrameTimeout) || hu,
    navigateFrameWait: e && lt.detectIEOrEdge() ? 500 : 0,
    redirectNavigationTimeout: QI,
    asyncPopups: !1,
    allowRedirectInIframe: !1,
    allowNativeBroker: !1,
    nativeBrokerHandshakeTimeout: (o == null ? void 0 : o.nativeBrokerHandshakeTimeout) || JI,
    pollIntervalMilliseconds: $r.DEFAULT_POLL_INTERVAL_MS,
    cryptoOptions: {
      useMsrCrypto: !1,
      entropy: void 0
    }
  }), h = de(de({}, o), { loggerOptions: (o == null ? void 0 : o.loggerOptions) || u }), p = {
    application: {
      appName: N.EMPTY_STRING,
      appVersion: N.EMPTY_STRING
    }
  }, m = {
    auth: de(de({}, s), t),
    cache: de(de({}, l), n),
    system: de(de({}, f), h),
    telemetry: de(de({}, p), a)
  };
  return m;
}
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var cm = (
  /** @class */
  function(r) {
    Pt(e, r);
    function e(t, n, o, a, s, l) {
      var u = r.call(this, t, n, o, a, l) || this;
      return u.navigateFrameWait = s.navigateFrameWait, u.pollIntervalMilliseconds = s.pollIntervalMilliseconds, u;
    }
    return e.prototype.initiateAuthRequest = function(t) {
      return G(this, void 0, void 0, function() {
        return z(this, function(n) {
          switch (n.label) {
            case 0:
              if (this.performanceClient.addQueueMeasurement(U.SilentHandlerInitiateAuthRequest, this.authCodeRequest.correlationId), oe.isEmpty(t))
                throw this.logger.info("Navigate url is empty"), ee.createEmptyNavigationUriError();
              return this.navigateFrameWait ? (this.performanceClient.setPreQueueTime(U.SilentHandlerLoadFrame, this.authCodeRequest.correlationId), [4, this.loadFrame(t)]) : [3, 2];
            case 1:
              return [2, n.sent()];
            case 2:
              return [2, this.loadFrameSync(t)];
          }
        });
      });
    }, e.prototype.monitorIframeForHash = function(t, n) {
      var o = this;
      return this.performanceClient.addQueueMeasurement(U.SilentHandlerMonitorIframeForHash, this.authCodeRequest.correlationId), new Promise(function(a, s) {
        n < hu && o.logger.warning("system.loadFrameTimeout or system.iframeHashTimeout set to lower (" + n + "ms) than the default (" + hu + "ms). This may result in timeouts.");
        var l = window.performance.now(), u = l + n, f = setInterval(function() {
          if (window.performance.now() > u) {
            o.removeHiddenIframe(t), clearInterval(f), s(ee.createMonitorIframeTimeoutError());
            return;
          }
          var h = N.EMPTY_STRING, p = t.contentWindow;
          try {
            h = p ? p.location.href : N.EMPTY_STRING;
          } catch {
          }
          if (!oe.isEmpty(h)) {
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
      return this.performanceClient.addQueueMeasurement(U.SilentHandlerLoadFrame, this.authCodeRequest.correlationId), new Promise(function(o, a) {
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
var ZI = (
  /** @class */
  function(r) {
    Pt(e, r);
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
              if (this.performanceClient.addQueueMeasurement(U.SilentIframeClientAcquireToken, t.correlationId), this.logger.verbose("acquireTokenByIframe called"), n = this.performanceClient.startMeasurement(U.SilentIframeClientAcquireToken, t.correlationId), oe.isEmpty(t.loginHint) && oe.isEmpty(t.sid) && (!t.account || oe.isEmpty(t.account.username)) && this.logger.warning("No user hint provided. The authorization server may need more information to complete this request."), t.prompt && t.prompt !== Ht.NONE && t.prompt !== Ht.NO_SESSION)
                throw n.endMeasurement({
                  success: !1
                }), ee.createSilentPromptValueError(t.prompt);
              return this.performanceClient.setPreQueueTime(U.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(de(de({}, t), { prompt: t.prompt || Ht.NONE }), ue.Silent)];
            case 1:
              o = u.sent(), this.browserStorage.updateCacheEntries(o.state, o.nonce, o.authority, o.loginHint || N.EMPTY_STRING, o.account || null), a = this.initializeServerTelemetryManager(this.apiId), u.label = 2;
            case 2:
              return u.trys.push([2, 5, , 6]), this.performanceClient.setPreQueueTime(U.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(a, o.authority, o.azureCloudOptions)];
            case 3:
              return s = u.sent(), this.logger.verbose("Auth code client created"), this.performanceClient.setPreQueueTime(U.SilentIframeClientTokenHelper, t.correlationId), [4, this.silentTokenHelper(s, o).then(function(f) {
                return n.endMeasurement({
                  success: !0,
                  fromCache: !1,
                  requestId: f.requestId
                }), f;
              })];
            case 4:
              return [2, u.sent()];
            case 5:
              throw l = u.sent(), l instanceof fe && l.setCorrelationId(this.correlationId), a.cacheFailedRequest(l), this.browserStorage.cleanRequestByState(o.state), n.endMeasurement({
                errorCode: l instanceof fe && l.errorCode || void 0,
                subErrorCode: l instanceof fe && l.subError || void 0,
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
      return Promise.reject(ee.createSilentLogoutUnsupportedError());
    }, e.prototype.silentTokenHelper = function(t, n) {
      return G(this, void 0, void 0, function() {
        var o, a, s, l, u, f, h, p, m, v = this;
        return z(this, function(C) {
          switch (C.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(U.SilentIframeClientTokenHelper, n.correlationId), this.performanceClient.setPreQueueTime(U.StandardInteractionClientInitializeAuthorizationCodeRequest, n.correlationId), [4, this.initializeAuthorizationCodeRequest(n)];
            case 1:
              return o = C.sent(), this.performanceClient.setPreQueueTime(U.GetAuthCodeUrl, n.correlationId), [4, t.getAuthCodeUrl(de(de({}, n), { nativeBroker: vo.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, n.authenticationScheme) }))];
            case 2:
              return a = C.sent(), s = new cm(t, this.browserStorage, o, this.logger, this.config.system, this.performanceClient), this.performanceClient.setPreQueueTime(U.SilentHandlerInitiateAuthRequest, n.correlationId), [4, s.initiateAuthRequest(a)];
            case 3:
              return l = C.sent(), this.performanceClient.setPreQueueTime(U.SilentHandlerMonitorIframeForHash, n.correlationId), [4, s.monitorIframeForHash(l, this.config.system.iframeHashTimeout)];
            case 4:
              if (u = C.sent(), f = He.getDeserializedHash(u), h = this.validateAndExtractStateFromHash(f, ue.Silent, o.correlationId), f.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), !this.nativeMessageHandler)
                  throw ee.createNativeConnectionNotEstablishedError();
                return p = new Zo(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.apiId, this.performanceClient, this.nativeMessageHandler, f.accountId, this.browserStorage, this.correlationId), m = Sn.parseRequestState(this.browserCrypto, h).userRequestState, [2, p.acquireToken(de(de({}, n), { state: m, prompt: n.prompt || Ht.NONE })).finally(function() {
                  v.browserStorage.cleanRequestByState(h);
                })];
              }
              return this.performanceClient.setPreQueueTime(U.HandleCodeResponseFromHash, n.correlationId), [2, s.handleCodeResponseFromHash(u, h, t.authority, this.networkClient)];
          }
        });
      });
    }, e;
  }(si)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var eA = (
  /** @class */
  function(r) {
    Pt(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.acquireToken = function(t) {
      return G(this, void 0, void 0, function() {
        var n, o, a, s, l, u = this;
        return z(this, function(f) {
          switch (f.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(U.SilentRefreshClientAcquireToken, t.correlationId), this.performanceClient.setPreQueueTime(U.InitializeBaseRequest, t.correlationId), o = [de({}, t)], [4, this.initializeBaseRequest(t, t.account)];
            case 1:
              return n = de.apply(void 0, o.concat([f.sent()])), a = this.performanceClient.startMeasurement(U.SilentRefreshClientAcquireToken, n.correlationId), s = this.initializeServerTelemetryManager(Ze.acquireTokenSilent_silentFlow), [4, this.createRefreshTokenClient(s, n.authority, n.azureCloudOptions)];
            case 2:
              return l = f.sent(), this.logger.verbose("Refresh token client created"), this.performanceClient.setPreQueueTime(U.RefreshTokenClientAcquireTokenByRefreshToken, t.correlationId), [2, l.acquireTokenByRefreshToken(n).then(function(h) {
                return a.endMeasurement({
                  success: !0,
                  fromCache: h.fromCache,
                  requestId: h.requestId
                }), h;
              }).catch(function(h) {
                throw h instanceof fe && h.setCorrelationId(u.correlationId), s.cacheFailedRequest(h), a.endMeasurement({
                  errorCode: h.errorCode,
                  subErrorCode: h.subError,
                  success: !1
                }), h;
              })];
          }
        });
      });
    }, e.prototype.logout = function() {
      return Promise.reject(ee.createSilentLogoutUnsupportedError());
    }, e.prototype.createRefreshTokenClient = function(t, n, o) {
      return G(this, void 0, void 0, function() {
        var a;
        return z(this, function(s) {
          switch (s.label) {
            case 0:
              return this.performanceClient.setPreQueueTime(U.StandardInteractionClientGetClientConfiguration, this.correlationId), [4, this.getClientConfiguration(t, n, o)];
            case 1:
              return a = s.sent(), [2, new rm(a, this.performanceClient)];
          }
        });
      });
    }, e;
  }(si)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var tA = (
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
        var o = tr.toObject(new Rt(), n), a = o.getAccountInfo();
        !e.oldValue && e.newValue ? (this.logger.info("Account was added to cache in a different window"), this.emitEvent(be.ACCOUNT_ADDED, void 0, a)) : !e.newValue && e.oldValue && (this.logger.info("Account was removed from cache in a different window"), this.emitEvent(be.ACCOUNT_REMOVED, void 0, a));
      } catch {
        return;
      }
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Dt = (
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
var lm = (
  /** @class */
  function() {
    function r(e) {
      this.cryptoObj = e;
    }
    return r.prototype.generateGuid = function() {
      try {
        var e = new Uint8Array(16);
        return this.cryptoObj.getRandomValues(e), e[6] |= 64, e[6] &= 79, e[8] |= 128, e[8] &= 191, Dt.decimalToHex(e[0]) + Dt.decimalToHex(e[1]) + Dt.decimalToHex(e[2]) + Dt.decimalToHex(e[3]) + "-" + Dt.decimalToHex(e[4]) + Dt.decimalToHex(e[5]) + "-" + Dt.decimalToHex(e[6]) + Dt.decimalToHex(e[7]) + "-" + Dt.decimalToHex(e[8]) + Dt.decimalToHex(e[9]) + "-" + Dt.decimalToHex(e[10]) + Dt.decimalToHex(e[11]) + Dt.decimalToHex(e[12]) + Dt.decimalToHex(e[13]) + Dt.decimalToHex(e[14]) + Dt.decimalToHex(e[15]);
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
var um = (
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
var rA = (
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
var nA = 32, oA = (
  /** @class */
  function() {
    function r(e) {
      this.base64Encode = new um(), this.cryptoObj = e;
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
        var e = new Uint8Array(nA);
        this.cryptoObj.getRandomValues(e);
        var t = this.base64Encode.urlEncodeArr(e);
        return t;
      } catch (n) {
        throw ee.createPkceNotGeneratedError(n);
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
              throw n = o.sent(), ee.createPkceNotGeneratedError(n);
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
var iA = (
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
var aA = (
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
var sA = (
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
var cA = "RSASSA-PKCS1-v1_5", Gp = "SHA-256", lA = 2048, uA = new Uint8Array([1, 0, 1]), dm = (
  /** @class */
  function() {
    function r(e, t) {
      var n, o;
      if (this.logger = e, this.cryptoOptions = t, this.hasBrowserCrypto())
        this.logger.verbose("BrowserCrypto: modern crypto interface available"), this.subtleCrypto = new iA();
      else if (this.hasIECrypto())
        this.logger.verbose("BrowserCrypto: MS crypto interface available"), this.subtleCrypto = new sA();
      else if (this.hasMsrCrypto() && (!((n = this.cryptoOptions) === null || n === void 0) && n.useMsrCrypto))
        this.logger.verbose("BrowserCrypto: MSR crypto interface available"), this.subtleCrypto = new aA();
      else
        throw this.hasMsrCrypto() && this.logger.info("BrowserCrypto: MSR Crypto interface available but system.cryptoOptions.useMsrCrypto not enabled"), this.logger.error("BrowserCrypto: No crypto interfaces available."), ee.createCryptoNotAvailableError("Browser crypto, msCrypto, or msrCrypto interfaces not available.");
      if (this.subtleCrypto.initPrng) {
        if (this.logger.verbose("BrowserCrypto: Interface requires entropy"), !(!((o = this.cryptoOptions) === null || o === void 0) && o.entropy))
          throw this.logger.error("BrowserCrypto: Interface requires entropy but none provided."), ks.createEntropyNotProvided();
        this.logger.verbose("BrowserCrypto: Entropy provided"), this.subtleCrypto.initPrng(this.cryptoOptions.entropy);
      }
      this.keygenAlgorithmOptions = {
        name: cA,
        hash: Gp,
        modulusLength: lA,
        publicExponent: uA
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
          return t = Tn.stringToUtf8Arr(e), [2, this.subtleCrypto.digest({ name: Gp }, t)];
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
var dA = (
  /** @class */
  function() {
    function r() {
      this.dbName = uu, this.version = KI, this.tableName = qI, this.dbOpen = !1;
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
              return o(ee.createDatabaseUnavailableError());
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
                  return a(ee.createDatabaseNotOpenError());
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
                  return s(ee.createDatabaseNotOpenError());
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
                  return a(ee.createDatabaseNotOpenError());
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
                  return o(ee.createDatabaseNotOpenError());
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
                  return a(ee.createDatabaseNotOpenError());
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
      this.inMemoryCache = new du(), this.indexedDBCache = new dA(), this.logger = e, this.storeName = t;
    }
    return r.prototype.handleDatabaseAccessError = function(e) {
      if (e instanceof ee && e.errorCode === Y.databaseUnavailable.code)
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
var fA = (
  /** @class */
  function() {
    function r(e) {
      this.logger = e, this.asymmetricKeys = new zp(this.logger, Ps.asymmetricKeys), this.symmetricKeys = new zp(this.logger, Ps.symmetricKeys);
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
var hA = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.logger = e, this.browserCrypto = new dm(this.logger, n), this.b64Encode = new um(), this.b64Decode = new rA(), this.guidGenerator = new lm(this.browserCrypto), this.pkceGenerator = new oA(this.browserCrypto), this.cache = new fA(this.logger), this.performanceClient = t;
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
              return n = (t = this.performanceClient) === null || t === void 0 ? void 0 : t.startMeasurement(U.CryptoOptsGetPublicKeyThumbprint, e.correlationId), [4, this.browserCrypto.generateKeyPair(r.EXTRACTABLE, r.POP_KEY_USAGES)];
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
        var a, s, l, u, f, h, p, m, v, C, E, _, R;
        return z(this, function(A) {
          switch (A.label) {
            case 0:
              return a = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(U.CryptoOptsSignJwt, n), [4, this.cache.asymmetricKeys.getItem(t)];
            case 1:
              if (s = A.sent(), !s)
                throw ee.createSigningKeyNotFoundInStorageError(t);
              return [4, this.browserCrypto.exportJwk(s.publicKey)];
            case 2:
              return l = A.sent(), u = Tn.getSortedObjectString(l), f = this.b64Encode.urlEncode(JSON.stringify({ kid: t })), h = FI.getShrHeaderString({ kid: f, alg: l.alg }), p = this.b64Encode.urlEncode(h), e.cnf = {
                jwk: JSON.parse(u)
              }, m = this.b64Encode.urlEncode(JSON.stringify(e)), v = p + "." + m, C = Tn.stringToArrayBuffer(v), [4, this.browserCrypto.sign(s.privateKey, C)];
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
var pA = (
  /** @class */
  function(r) {
    Pt(e, r);
    function e(t, n, o, a, s, l, u) {
      var f = r.call(this, t, n, o, a, s, l) || this;
      return f.browserCrypto = new dm(f.logger, u), f.guidGenerator = new lm(f.browserCrypto), f;
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
        a.push(de({}, s));
      }), a.length > 0 && Vp.flushMeasurements(t.event.correlationId, a);
    }, e.prototype.supportsBrowserPerformanceNow = function() {
      return typeof window < "u" && typeof window.performance < "u" && typeof window.performance.now == "function";
    }, e.prototype.startMeasurement = function(t, n) {
      var o = this, a = this.getPageVisibility(), s = r.prototype.startMeasurement.call(this, t, n);
      return de(de({}, s), { endMeasurement: function(l) {
        var u = s.endMeasurement(de({ startPageVisibility: a, endPageVisibility: o.getPageVisibility() }, l));
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
  }(om)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var gA = (
  /** @class */
  function() {
    function r(e, t, n, o) {
      this.isBrowserEnvironment = typeof window < "u", this.config = e, this.storage = t, this.logger = n, this.cryptoObj = o;
    }
    return r.prototype.loadExternalTokens = function(e, t, n) {
      if (this.logger.info("TokenCache - loadExternalTokens called"), !t.id_token)
        throw ee.createUnableToLoadTokenError("Please ensure server response includes id token.");
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
          throw ee.createUnableToLoadTokenError("Please provide clientInfo in the response or options.");
      } else
        throw ee.createUnableToLoadTokenError("Please provide a request with an account or a request with authority.");
      return this.generateAuthenticationResult(e, o, a, s);
    }, r.prototype.loadAccount = function(e, t, n, o, a) {
      var s;
      if (a ? s = a : o !== void 0 && n && (s = Rt.generateHomeAccountId(n, o, this.logger, this.cryptoObj, e)), !s)
        throw ee.createUnableToLoadTokenError("Unexpected missing homeAccountId");
      var l = n ? Rt.createAccount(n, s, e, void 0, void 0, void 0, t) : Rt.createGenericAccount(s, e, void 0, void 0, void 0, t);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading account"), this.storage.setAccount(l), l;
      throw ee.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.loadIdToken = function(e, t, n, o) {
      var a = po.createIdTokenEntity(t, n, e.rawToken, this.config.auth.clientId, o);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading id token"), this.storage.setIdTokenCredential(a), a;
      throw ee.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.loadAccessToken = function(e, t, n, o, a, s) {
      if (!t.access_token)
        return this.logger.verbose("TokenCache - No access token provided for caching"), null;
      if (!t.expires_in)
        throw ee.createUnableToLoadTokenError("Please ensure server response includes expires_in value.");
      if (!s.extendedExpiresOn)
        throw ee.createUnableToLoadTokenError("Please provide an extendedExpiresOn value in the options.");
      var l = new Ut(e.scopes).printScopes(), u = s.expiresOn || t.expires_in + (/* @__PURE__ */ new Date()).getTime() / 1e3, f = s.extendedExpiresOn, h = go.createAccessTokenEntity(n, o, t.access_token, this.config.auth.clientId, a, l, u, f, this.cryptoObj);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading access token"), this.storage.setAccessTokenCredential(h), h;
      throw ee.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.loadRefreshToken = function(e, t, n, o) {
      if (!t.refresh_token)
        return this.logger.verbose("TokenCache - No refresh token provided for caching"), null;
      var a = Yo.createRefreshTokenEntity(n, o, t.refresh_token, this.config.auth.clientId);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading refresh token"), this.storage.setRefreshTokenCredential(a), a;
      throw ee.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.generateAuthenticationResult = function(e, t, n, o) {
      var a, s, l, u = N.EMPTY_STRING, f = [], h = null, p;
      n != null && n.accessToken && (u = n.accessToken.secret, f = Ut.fromString(n.accessToken.target).asArray(), h = new Date(Number(n.accessToken.expiresOn) * 1e3), p = new Date(Number(n.accessToken.extendedExpiresOn) * 1e3));
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
var mA = (
  /** @class */
  function(r) {
    Pt(e, r);
    function e(t) {
      var n = r.call(this, t) || this;
      return n.includeRedirectUri = !1, n;
    }
    return e;
  }(tm)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var vA = (
  /** @class */
  function(r) {
    Pt(e, r);
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
                throw ee.createAuthCodeRequiredError();
              return this.performanceClient.setPreQueueTime(U.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, ue.Silent)];
            case 1:
              n = h.sent(), this.browserStorage.updateCacheEntries(n.state, n.nonce, n.authority, n.loginHint || N.EMPTY_STRING, n.account || null), o = this.initializeServerTelemetryManager(this.apiId), h.label = 2;
            case 2:
              return h.trys.push([2, 4, , 5]), a = de(de({}, n), { code: t.code }), this.performanceClient.setPreQueueTime(U.StandardInteractionClientGetClientConfiguration, t.correlationId), [4, this.getClientConfiguration(o, n.authority)];
            case 3:
              return s = h.sent(), l = new mA(s), this.logger.verbose("Auth code client created"), u = new cm(l, this.browserStorage, a, this.logger, this.config.system, this.performanceClient), [2, u.handleCodeResponseFromServer({
                code: t.code,
                msgraph_host: t.msGraphHost,
                cloud_graph_host_name: t.cloudGraphHostName,
                cloud_instance_host_name: t.cloudInstanceHostName
              }, n.state, l.authority, this.networkClient, !1)];
            case 4:
              throw f = h.sent(), f instanceof fe && f.setCorrelationId(this.correlationId), o.cacheFailedRequest(f), this.browserStorage.cleanRequestByState(n.state), f;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.logout = function() {
      return Promise.reject(ee.createSilentLogoutUnsupportedError());
    }, e;
  }(si)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var yA = (
  /** @class */
  function() {
    function r(e) {
      this.isBrowserEnvironment = typeof window < "u", this.config = XI(e, this.isBrowserEnvironment), this.initialized = !1, this.logger = new Mu(this.config.system.loggerOptions, Dl, $i), this.networkClient = this.config.system.networkClient, this.navigationClient = this.config.system.navigationClient, this.redirectResponse = /* @__PURE__ */ new Map(), this.hybridAuthCodeResponses = /* @__PURE__ */ new Map(), this.performanceClient = this.isBrowserEnvironment ? new pA(this.config.auth.clientId, this.config.auth.authority, this.logger, Dl, $i, this.config.telemetry.application, this.config.system.cryptoOptions) : new BI(this.config.auth.clientId, this.config.auth.authority, this.logger, Dl, $i, this.config.telemetry.application), this.browserCrypto = this.isBrowserEnvironment ? new hA(this.logger, this.performanceClient, this.config.system.cryptoOptions) : bs, this.eventHandler = new tA(this.logger, this.browserCrypto), this.browserStorage = this.isBrowserEnvironment ? new fu(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger) : $I(this.config.auth.clientId, this.logger);
      var t = {
        cacheLocation: pt.MemoryStorage,
        temporaryCacheLocation: pt.MemoryStorage,
        storeAuthStateInCookie: !1,
        secureCookies: !1,
        cacheMigrationEnabled: !1,
        claimsBasedCachingEnabled: !0
      };
      this.nativeInternalStorage = new fu(this.config.auth.clientId, t, this.browserCrypto, this.logger), this.tokenCache = new gA(this.config, this.browserStorage, this.logger, this.browserCrypto), this.trackPageVisibilityWithMeasurement = this.trackPageVisibilityWithMeasurement.bind(this);
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
              if (e = this.config.system.allowNativeBroker, t = this.performanceClient.startMeasurement(U.InitializeClientApplication), this.eventHandler.emitEvent(be.INITIALIZE_START), !e)
                return [3, 4];
              s.label = 1;
            case 1:
              return s.trys.push([1, 3, , 4]), n = this, [4, vo.createProvider(this.logger, this.config.system.nativeBrokerHandshakeTimeout, this.performanceClient)];
            case 2:
              return n.nativeExtensionProvider = s.sent(), [3, 4];
            case 3:
              return o = s.sent(), this.logger.verbose(o), [3, 4];
            case 4:
              return this.config.cache.claimsBasedCachingEnabled ? [3, 6] : (this.logger.verbose("Claims-based caching is disabled. Clearing the previous cache with claims"), a = this.performanceClient.startMeasurement(U.ClearTokensAndKeysWithClaims), [4, this.browserStorage.clearTokensAndKeysWithClaims()]);
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
          return this.logger.verbose("handleRedirectPromise called"), lt.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized), t = this.getAllAccounts(), this.isBrowserEnvironment ? (n = e || N.EMPTY_STRING, o = this.redirectResponse.get(n), typeof o > "u" ? (this.eventHandler.emitEvent(be.HANDLE_REDIRECT_START, ue.Redirect), this.logger.verbose("handleRedirectPromise has been called for the first time, storing the promise"), a = this.browserStorage.getCachedNativeRequest(), s = void 0, a && vo.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider) && this.nativeExtensionProvider && !e ? (this.logger.trace("handleRedirectPromise - acquiring token from native platform"), l = new Zo(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.handleRedirectPromise, this.performanceClient, this.nativeExtensionProvider, a.accountId, this.nativeInternalStorage, a.correlationId), s = l.handleRedirectPromise()) : (this.logger.trace("handleRedirectPromise - acquiring token from web flow"), u = this.browserStorage.getTemporaryCache(Be.CORRELATION_ID, !0) || N.EMPTY_STRING, f = this.createRedirectClient(u), s = f.handleRedirectPromise(e)), o = s.then(function(m) {
            if (m) {
              var v = t.length < h.getAllAccounts().length;
              v ? (h.eventHandler.emitEvent(be.LOGIN_SUCCESS, ue.Redirect, m), h.logger.verbose("handleRedirectResponse returned result, login success")) : (h.eventHandler.emitEvent(be.ACQUIRE_TOKEN_SUCCESS, ue.Redirect, m), h.logger.verbose("handleRedirectResponse returned result, acquire token success"));
            }
            return h.eventHandler.emitEvent(be.HANDLE_REDIRECT_END, ue.Redirect), m;
          }).catch(function(m) {
            throw t.length > 0 ? h.eventHandler.emitEvent(be.ACQUIRE_TOKEN_FAILURE, ue.Redirect, null, m) : h.eventHandler.emitEvent(be.LOGIN_FAILURE, ue.Redirect, null, m), h.eventHandler.emitEvent(be.HANDLE_REDIRECT_END, ue.Redirect), m;
          }), this.redirectResponse.set(n, o)) : this.logger.verbose("handleRedirectPromise has been called previously, returning the result from the first call"), [2, o]) : (this.logger.verbose("handleRedirectPromise returns null, not browser environment"), [2, null]);
        });
      });
    }, r.prototype.acquireTokenRedirect = function(e) {
      return G(this, void 0, void 0, function() {
        var t, n, o, a, s, l = this;
        return z(this, function(u) {
          return t = this.getRequestCorrelationId(e), this.logger.verbose("acquireTokenRedirect called", t), this.preflightBrowserEnvironmentCheck(ue.Redirect), n = this.getAllAccounts().length > 0, n ? this.eventHandler.emitEvent(be.ACQUIRE_TOKEN_START, ue.Redirect, e) : this.eventHandler.emitEvent(be.LOGIN_START, ue.Redirect, e), this.nativeExtensionProvider && this.canUseNative(e) ? (a = new Zo(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenRedirect, this.performanceClient, this.nativeExtensionProvider, this.getNativeAccountId(e), this.nativeInternalStorage, e.correlationId), o = a.acquireTokenRedirect(e).catch(function(f) {
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
            throw n ? l.eventHandler.emitEvent(be.ACQUIRE_TOKEN_FAILURE, ue.Redirect, null, f) : l.eventHandler.emitEvent(be.LOGIN_FAILURE, ue.Redirect, null, f), f;
          })];
        });
      });
    }, r.prototype.acquireTokenPopup = function(e) {
      var t = this, n = this.getRequestCorrelationId(e), o = this.performanceClient.startMeasurement(U.AcquireTokenPopup, n);
      try {
        this.logger.verbose("acquireTokenPopup called", n), this.preflightBrowserEnvironmentCheck(ue.Popup);
      } catch (u) {
        return Promise.reject(u);
      }
      var a = this.getAllAccounts();
      a.length > 0 ? this.eventHandler.emitEvent(be.ACQUIRE_TOKEN_START, ue.Popup, e) : this.eventHandler.emitEvent(be.LOGIN_START, ue.Popup, e);
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
        return f ? t.eventHandler.emitEvent(be.LOGIN_SUCCESS, ue.Popup, u) : t.eventHandler.emitEvent(be.ACQUIRE_TOKEN_SUCCESS, ue.Popup, u), o.addStaticFields({
          accessTokenSize: u.accessToken.length,
          idTokenSize: u.idToken.length
        }), o.endMeasurement({
          success: !0,
          requestId: u.requestId
        }), u;
      }).catch(function(u) {
        return a.length > 0 ? t.eventHandler.emitEvent(be.ACQUIRE_TOKEN_FAILURE, ue.Popup, null, u) : t.eventHandler.emitEvent(be.LOGIN_FAILURE, ue.Popup, null, u), o.endMeasurement({
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
          return n = this.getRequestCorrelationId(e), o = de(de({}, e), {
            // will be PromptValue.NONE or PromptValue.NO_SESSION
            prompt: e.prompt,
            correlationId: n
          }), this.preflightBrowserEnvironmentCheck(ue.Silent), this.ssoSilentMeasurement = this.performanceClient.startMeasurement(U.SsoSilent, n), (t = this.ssoSilentMeasurement) === null || t === void 0 || t.increment({
            visibilityChangeCount: 0
          }), document.addEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement), this.logger.verbose("ssoSilent called", n), this.eventHandler.emitEvent(be.SSO_SILENT_START, ue.Silent, o), this.canUseNative(o) ? a = this.acquireTokenNative(o, Ze.ssoSilent).catch(function(f) {
            if (f instanceof nn && f.isFatal()) {
              l.nativeExtensionProvider = void 0;
              var h = l.createSilentIframeClient(o.correlationId);
              return h.acquireToken(o);
            }
            throw f;
          }) : (s = this.createSilentIframeClient(o.correlationId), a = s.acquireToken(o)), [2, a.then(function(f) {
            var h, p;
            return l.eventHandler.emitEvent(be.SSO_SILENT_SUCCESS, ue.Silent, f), (h = l.ssoSilentMeasurement) === null || h === void 0 || h.addStaticFields({
              accessTokenSize: f.accessToken.length,
              idTokenSize: f.idToken.length
            }), (p = l.ssoSilentMeasurement) === null || p === void 0 || p.endMeasurement({
              success: !0,
              isNativeBroker: f.fromNativeBroker,
              requestId: f.requestId
            }), f;
          }).catch(function(f) {
            var h;
            throw l.eventHandler.emitEvent(be.SSO_SILENT_FAILURE, ue.Silent, null, f), (h = l.ssoSilentMeasurement) === null || h === void 0 || h.endMeasurement({
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
          t = this.getRequestCorrelationId(e), this.preflightBrowserEnvironmentCheck(ue.Silent), this.logger.trace("acquireTokenByCode called", t), this.eventHandler.emitEvent(be.ACQUIRE_TOKEN_BY_CODE_START, ue.Silent, e), n = this.performanceClient.startMeasurement(U.AcquireTokenByCode, e.correlationId);
          try {
            if (e.code && e.nativeAccountId)
              throw ee.createSpaCodeAndNativeAccountIdPresentError();
            if (e.code)
              return o = e.code, a = this.hybridAuthCodeResponses.get(o), a ? (this.logger.verbose("Existing acquireTokenByCode request found", e.correlationId), n.discardMeasurement()) : (this.logger.verbose("Initiating new acquireTokenByCode request", t), a = this.acquireTokenByCodeAsync(de(de({}, e), { correlationId: t })).then(function(u) {
                return s.eventHandler.emitEvent(be.ACQUIRE_TOKEN_BY_CODE_SUCCESS, ue.Silent, u), s.hybridAuthCodeResponses.delete(o), n.addStaticFields({
                  accessTokenSize: u.accessToken.length,
                  idTokenSize: u.idToken.length
                }), n.endMeasurement({
                  success: !0,
                  isNativeBroker: u.fromNativeBroker,
                  requestId: u.requestId
                }), u;
              }).catch(function(u) {
                throw s.hybridAuthCodeResponses.delete(o), s.eventHandler.emitEvent(be.ACQUIRE_TOKEN_BY_CODE_FAILURE, ue.Silent, null, u), n.endMeasurement({
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
              throw ee.createUnableToAcquireTokenFromNativePlatformError();
            } else
              throw ee.createAuthCodeOrNativeAccountIdRequiredError();
          } catch (u) {
            throw this.eventHandler.emitEvent(be.ACQUIRE_TOKEN_BY_CODE_FAILURE, ue.Silent, null, u), n.endMeasurement({
              errorCode: u instanceof fe && u.errorCode || void 0,
              subErrorCode: u instanceof fe && u.subError || void 0,
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
              return this.logger.trace("acquireTokenByCodeAsync called", e.correlationId), this.acquireTokenByCodeAsyncMeasurement = this.performanceClient.startMeasurement(U.AcquireTokenByCodeAsync, e.correlationId), (t = this.acquireTokenByCodeAsyncMeasurement) === null || t === void 0 || t.increment({
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
          switch (this.performanceClient.addQueueMeasurement(U.AcquireTokenFromCache, t.correlationId), n.cacheLookupPolicy) {
            case nr.Default:
            case nr.AccessToken:
            case nr.AccessTokenAndRefreshToken:
              return [2, e.acquireToken(t)];
            default:
              throw ae.createRefreshRequiredError();
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
          switch (this.performanceClient.addQueueMeasurement(U.AcquireTokenByRefreshToken, e.correlationId), t.cacheLookupPolicy) {
            case nr.Default:
            case nr.AccessTokenAndRefreshToken:
            case nr.RefreshToken:
            case nr.RefreshTokenAndNetwork:
              return n = this.createSilentRefreshClient(e.correlationId), this.performanceClient.setPreQueueTime(U.SilentRefreshClientAcquireToken, e.correlationId), [2, n.acquireToken(e)];
            default:
              throw ae.createRefreshRequiredError();
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
          return this.performanceClient.addQueueMeasurement(U.AcquireTokenBySilentIframe, e.correlationId), t = this.createSilentIframeClient(e.correlationId), this.performanceClient.setPreQueueTime(U.SilentIframeClientAcquireToken, e.correlationId), [2, t.acquireToken(e)];
        });
      });
    }, r.prototype.logout = function(e) {
      return G(this, void 0, void 0, function() {
        var t;
        return z(this, function(n) {
          return t = this.getRequestCorrelationId(e), this.logger.warning("logout API is deprecated and will be removed in msal-browser v3.0.0. Use logoutRedirect instead.", t), [2, this.logoutRedirect(de({ correlationId: t }, e))];
        });
      });
    }, r.prototype.logoutRedirect = function(e) {
      return G(this, void 0, void 0, function() {
        var t, n;
        return z(this, function(o) {
          return t = this.getRequestCorrelationId(e), this.preflightBrowserEnvironmentCheck(ue.Redirect), n = this.createRedirectClient(t), [2, n.logout(e)];
        });
      });
    }, r.prototype.logoutPopup = function(e) {
      try {
        var t = this.getRequestCorrelationId(e);
        this.preflightBrowserEnvironmentCheck(ue.Popup);
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
      if (t === void 0 && (t = !0), this.logger.verbose("preflightBrowserEnvironmentCheck started"), lt.blockNonBrowserEnvironment(this.isBrowserEnvironment), lt.blockRedirectInIframe(e, this.config.system.allowRedirectInIframe), lt.blockReloadInHiddenIframes(), lt.blockAcquireTokenInPopups(), lt.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized), e === ue.Redirect && this.config.cache.cacheLocation === pt.MemoryStorage && !this.config.cache.storeAuthStateInCookie)
        throw ks.createInMemoryRedirectUnavailableError();
      (e === ue.Redirect || e === ue.Popup) && this.preflightInteractiveRequest(t);
    }, r.prototype.preflightInteractiveRequest = function(e) {
      this.logger.verbose("preflightInteractiveRequest called, validating app environment"), lt.blockReloadInHiddenIframes(), e && this.browserStorage.setInteractionInProgress(!0);
    }, r.prototype.acquireTokenNative = function(e, t, n) {
      return G(this, void 0, void 0, function() {
        var o;
        return z(this, function(a) {
          if (this.logger.trace("acquireTokenNative called"), !this.nativeExtensionProvider)
            throw ee.createNativeConnectionNotEstablishedError();
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
      return new WI(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createRedirectClient = function(e) {
      return new VI(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentIframeClient = function(e) {
      return new ZI(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.ssoSilent, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentCacheClient = function(e) {
      return new sm(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentRefreshClient = function(e) {
      return new eA(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentAuthCodeClient = function(e) {
      return new vA(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenByCode, this.performanceClient, this.nativeExtensionProvider, e);
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
var CA = (
  /** @class */
  function(r) {
    Pt(e, r);
    function e(t) {
      var n = r.call(this, t) || this;
      return n.astsAsyncMeasurement = void 0, n.activeSilentTokenRequests = /* @__PURE__ */ new Map(), n.trackPageVisibility = n.trackPageVisibility.bind(n), n;
    }
    return e.prototype.loginRedirect = function(t) {
      return G(this, void 0, void 0, function() {
        var n;
        return z(this, function(o) {
          return n = this.getRequestCorrelationId(t), this.logger.verbose("loginRedirect called", n), [2, this.acquireTokenRedirect(de({ correlationId: n }, t || Bp))];
        });
      });
    }, e.prototype.loginPopup = function(t) {
      var n = this.getRequestCorrelationId(t);
      return this.logger.verbose("loginPopup called", n), this.acquireTokenPopup(de({ correlationId: n }, t || Bp));
    }, e.prototype.acquireTokenSilent = function(t) {
      return G(this, void 0, void 0, function() {
        var n, o, a, s, l, u, f, h = this;
        return z(this, function(p) {
          if (n = this.getRequestCorrelationId(t), o = this.performanceClient.startMeasurement(U.AcquireTokenSilent, n), o.addStaticFields({
            cacheLookupPolicy: t.cacheLookupPolicy
          }), this.preflightBrowserEnvironmentCheck(ue.Silent), this.logger.verbose("acquireTokenSilent called", n), a = t.account || this.getActiveAccount(), !a)
            throw ee.createNoAccountError();
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
          }, l = JSON.stringify(s), u = this.activeSilentTokenRequests.get(l), typeof u > "u" ? (this.logger.verbose("acquireTokenSilent called for the first time, storing active request", n), this.performanceClient.setPreQueueTime(U.AcquireTokenSilentAsync, n), f = this.acquireTokenSilentAsync(de(de({}, t), { correlationId: n }), a).then(function(m) {
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
              return this.performanceClient.addQueueMeasurement(U.AcquireTokenSilentAsync, t.correlationId), this.eventHandler.emitEvent(be.ACQUIRE_TOKEN_START, ue.Silent, t), this.astsAsyncMeasurement = this.performanceClient.startMeasurement(U.AcquireTokenSilentAsync, t.correlationId), (o = this.astsAsyncMeasurement) === null || o === void 0 || o.increment({
                visibilityChangeCount: 0
              }), document.addEventListener("visibilitychange", this.trackPageVisibility), vo.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, t.authenticationScheme) && n.nativeAccountId ? (this.logger.verbose("acquireTokenSilent - attempting to acquire token from native platform"), s = de(de({}, t), { account: n }), a = this.acquireTokenNative(s, Ze.acquireTokenSilent_silentFlow).catch(function(m) {
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
              return this.logger.verbose("acquireTokenSilent - attempting to acquire token from web flow"), l = this.createSilentCacheClient(t.correlationId), this.performanceClient.setPreQueueTime(U.InitializeSilentRequest, t.correlationId), [4, l.initializeSilentRequest(t, n)];
            case 2:
              u = p.sent(), f = de(de({}, t), {
                // set the request's CacheLookupPolicy to Default if it was not optionally passed in
                cacheLookupPolicy: t.cacheLookupPolicy || nr.Default
              }), this.performanceClient.setPreQueueTime(U.AcquireTokenFromCache, u.correlationId), a = this.acquireTokenFromCache(l, u, f).catch(function(m) {
                if (f.cacheLookupPolicy === nr.AccessToken)
                  throw m;
                return lt.blockReloadInHiddenIframes(), h.eventHandler.emitEvent(be.ACQUIRE_TOKEN_NETWORK_START, ue.Silent, u), h.performanceClient.setPreQueueTime(U.AcquireTokenByRefreshToken, u.correlationId), h.acquireTokenByRefreshToken(u, f).catch(function(v) {
                  var C = v instanceof wo, E = v instanceof zr, _ = v.errorCode === Qo.noTokensFoundError.code, R = v.errorCode === $r.INVALID_GRANT_ERROR;
                  if ((!C || !R || E || f.cacheLookupPolicy === nr.AccessTokenAndRefreshToken || f.cacheLookupPolicy === nr.RefreshToken) && f.cacheLookupPolicy !== nr.Skip && !_)
                    throw v;
                  return h.logger.verbose("Refresh token expired/invalid or CacheLookupPolicy is set to Skip, attempting acquire token by iframe.", t.correlationId), h.performanceClient.setPreQueueTime(U.AcquireTokenBySilentIframe, u.correlationId), h.acquireTokenBySilentIframe(u);
                });
              }), p.label = 3;
            case 3:
              return [2, a.then(function(m) {
                var v;
                return h.eventHandler.emitEvent(be.ACQUIRE_TOKEN_SUCCESS, ue.Silent, m), (v = h.astsAsyncMeasurement) === null || v === void 0 || v.endMeasurement({
                  success: !0,
                  fromCache: m.fromCache,
                  isNativeBroker: m.fromNativeBroker,
                  requestId: m.requestId
                }), m;
              }).catch(function(m) {
                var v;
                throw h.eventHandler.emitEvent(be.ACQUIRE_TOKEN_FAILURE, ue.Silent, null, m), (v = h.astsAsyncMeasurement) === null || v === void 0 || v.endMeasurement({
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
  }(yA)
);
function on(r) {
  return Object.keys(r);
}
function Ul(r) {
  return r && typeof r == "object" && !Array.isArray(r);
}
function Fu(r, e) {
  const t = { ...r }, n = e;
  return Ul(r) && Ul(e) && Object.keys(e).forEach((o) => {
    Ul(n[o]) && o in r ? t[o] = Fu(t[o], n[o]) : t[o] = n[o];
  }), t;
}
function wA(r) {
  return r.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
function EA(r) {
  var e;
  return typeof r != "string" || !r.includes("var(--mantine-scale)") ? r : (e = r.match(/^calc\((.*?)\)$/)) == null ? void 0 : e[1].split("*")[0].trim();
}
function bA(r) {
  const e = EA(r);
  return typeof e == "number" ? e : typeof e == "string" ? e.includes("calc") || e.includes("var") ? e : e.includes("px") ? Number(e.replace("px", "")) : e.includes("rem") ? Number(e.replace("rem", "")) * 16 : e.includes("em") ? Number(e.replace("em", "")) * 16 : Number(e) : NaN;
}
function Fl(r) {
  return `calc(${r} * var(--mantine-scale))`;
}
function fm(r, { shouldScale: e = !1 } = {}) {
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
const $ = fm("rem", { shouldScale: !0 }), Wp = fm("em");
function Hu(r) {
  return Object.keys(r).reduce((e, t) => (r[t] !== void 0 && (e[t] = r[t]), e), {});
}
function hm(r) {
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
function _A(r = null) {
  const e = To(r);
  return [({ children: o, value: a }) => /* @__PURE__ */ k.createElement(e.Provider, { value: a }, o), () => jn(e)];
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
function SA(r, e, t) {
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
function TA(r, e, t) {
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
function IA(r, e, t) {
  return pu(r, t) === pu(e, t);
}
function AA({
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
    ).filter((E) => IA(l.currentTarget, E, r)), f = u.findIndex((E) => l.currentTarget === E), h = TA(f, u, n), p = SA(f, u, n), m = a === "rtl" ? p : h, v = a === "rtl" ? h : p;
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
const RA = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function kA(r) {
  return RA[r];
}
const PA = () => {
};
function NA(r, e = { active: !0 }) {
  return typeof r != "function" || !e.active ? e.onKeyDown || PA : (t) => {
    var n;
    t.key === "Escape" && (r(t), (n = e.onTrigger) == null || n.call(e));
  };
}
function Bt(r, e = "size", t = !0) {
  if (r !== void 0)
    return hm(r) ? t ? $(r) : r : `var(--${e}-${r})`;
}
function Bu(r) {
  return Bt(r, "mantine-spacing");
}
function Io(r) {
  return r === void 0 ? "var(--mantine-radius-default)" : Bt(r, "mantine-radius");
}
function Nr(r) {
  return Bt(r, "mantine-font-size");
}
function OA(r) {
  if (r)
    return Bt(r, "mantine-shadow", !1);
}
function pm(r) {
  var e, t, n = "";
  if (typeof r == "string" || typeof r == "number")
    n += r;
  else if (typeof r == "object")
    if (Array.isArray(r))
      for (e = 0; e < r.length; e++)
        r[e] && (t = pm(r[e])) && (n && (n += " "), n += t);
    else
      for (e in r)
        r[e] && (n && (n += " "), n += e);
  return n;
}
function kn() {
  for (var r, e, t = 0, n = ""; t < arguments.length; )
    (r = arguments[t++]) && (e = pm(r)) && (n && (n += " "), n += e);
  return n;
}
const MA = {};
function xA(r) {
  const e = {};
  return r.forEach((t) => {
    Object.entries(t).forEach(([n, o]) => {
      e[n] ? e[n] = kn(e[n], o) : e[n] = o;
    });
  }), e;
}
function Ys({ theme: r, classNames: e, props: t, stylesCtx: n }) {
  const a = (Array.isArray(e) ? e : [e]).map(
    (s) => typeof s == "function" ? s(r, t, n) : s || MA
  );
  return xA(a);
}
function Ns({ theme: r, styles: e, props: t, stylesCtx: n }) {
  return (Array.isArray(e) ? e : [e]).reduce((a, s) => typeof s == "function" ? { ...a, ...s(r, t, n) } : { ...a, ...s }, {});
}
function gm() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function ho(r) {
  const e = Ke(r);
  return ge(() => {
    e.current = r;
  }), ps(() => (...t) => {
    var n;
    return (n = e.current) == null ? void 0 : n.call(e, ...t);
  }, []);
}
function Qs(r, e) {
  const t = ho(r), n = Ke(0);
  return ge(() => () => window.clearTimeout(n.current), []), $e(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(t, e);
  }, [t, e]);
}
const Yp = ["mousedown", "touchstart"];
function LA(r, e, t) {
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
    return (e || Yp).forEach((a) => document.addEventListener(a, o)), () => {
      (e || Yp).forEach((a) => document.removeEventListener(a, o));
    };
  }, [n, r, t]), n;
}
function DA(r, e) {
  try {
    return r.addEventListener("change", e), () => r.removeEventListener("change", e);
  } catch {
    return r.addListener(e), () => r.removeListener(e);
  }
}
function UA(r, e) {
  return typeof e == "boolean" ? e : typeof window < "u" && "matchMedia" in window ? window.matchMedia(r).matches : !1;
}
function FA(r, e, { getInitialValueInEffect: t } = {
  getInitialValueInEffect: !0
}) {
  const [n, o] = Ee(
    t ? e : UA(r, e)
  ), a = Ke();
  return ge(() => {
    if ("matchMedia" in window)
      return a.current = window.matchMedia(r), o(a.current.matches), DA(a.current, (s) => o(s.matches));
  }, [r]), n;
}
function HA(r, e, t = { leading: !1 }) {
  const [n, o] = Ee(r), a = Ke(!1), s = Ke(null), l = Ke(!1), u = () => window.clearTimeout(s.current);
  return ge(() => {
    a.current && (!l.current && t.leading ? (l.current = !0, o(r)) : (u(), s.current = window.setTimeout(() => {
      l.current = !1, o(r);
    }, e)));
  }, [r, t.leading, e]), ge(() => (a.current = !0, u), []), [n, u];
}
const ia = typeof document < "u" ? ku : ge;
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
function BA({ opened: r, shouldReturnFocus: e = !0 }) {
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
function KA(r, e = "body > :not(script)") {
  const t = gm(), n = Array.from(
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
const qA = /input|select|textarea|button|object/, mm = "a, input, select, textarea, button, object, [tabindex]";
function $A(r) {
  return r.style.display === "none";
}
function GA(r) {
  if (r.getAttribute("aria-hidden") || r.getAttribute("hidden") || r.getAttribute("type") === "hidden")
    return !1;
  let t = r;
  for (; t && !(t === document.body || t.nodeType === 11); ) {
    if ($A(t))
      return !1;
    t = t.parentNode;
  }
  return !0;
}
function vm(r) {
  let e = r.getAttribute("tabindex");
  return e === null && (e = void 0), parseInt(e, 10);
}
function gu(r) {
  const e = r.nodeName.toLowerCase(), t = !Number.isNaN(vm(r));
  return /* @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition */ (qA.test(e) && !r.disabled || r instanceof HTMLAnchorElement && r.href || t) && GA(r);
}
function ym(r) {
  const e = vm(r);
  return (Number.isNaN(e) || e >= 0) && gu(r);
}
function zA(r) {
  return Array.from(r.querySelectorAll(mm)).filter(ym);
}
function VA(r, e) {
  const t = zA(r);
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
function WA(r = !0) {
  const e = Ke(), t = Ke(null), n = (a) => {
    let s = a.querySelector("[data-autofocus]");
    if (!s) {
      const l = Array.from(a.querySelectorAll(mm));
      s = l.find(ym) || l.find(gu) || null, !s && gu(a) && (s = a);
    }
    s && s.focus({ preventScroll: !0 });
  }, o = $e(
    (a) => {
      if (r) {
        if (a === null) {
          t.current && (t.current(), t.current = null);
          return;
        }
        t.current = KA(a), e.current !== a && (a ? (setTimeout(() => {
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
      s.key === "Tab" && e.current && VA(e.current, s);
    };
    return document.addEventListener("keydown", a), () => {
      document.removeEventListener("keydown", a), t.current && t.current();
    };
  }, [r]), o;
}
const jA = k["useId".toString()] || (() => {
});
function YA() {
  const r = jA();
  return r ? `mantine-${r.replace(/:/g, "")}` : "";
}
function Yn(r) {
  const e = YA(), [t, n] = Ee(e);
  return ia(() => {
    n(gm());
  }, []), typeof r == "string" ? r : typeof window > "u" ? e : t;
}
function Cm(r, e) {
  typeof r == "function" ? r(e) : typeof r == "object" && r !== null && "current" in r && (r.current = e);
}
function wm(...r) {
  return (e) => {
    r.forEach((t) => Cm(t, e));
  };
}
function Mr(...r) {
  return $e(wm(...r), r);
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
function Em(r, e) {
  return FA("(prefers-reduced-motion: reduce)", r, e);
}
const bm = To(null);
function Ku() {
  const r = jn(bm);
  if (!r)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return r;
}
function QA() {
  return Ku().cssVariablesResolver;
}
function JA() {
  return Ku().classNamesPrefix;
}
function qu() {
  return Ku().getStyleNonce;
}
function XA(r) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(r);
}
function ZA(r) {
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
function eR(r) {
  const [e, t, n, o] = r.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r: e, g: t, b: n, a: o || 1 };
}
function tR(r) {
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
function _m(r) {
  return XA(r) ? ZA(r) : r.startsWith("rgb") ? eR(r) : r.startsWith("hsl") ? tR(r) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function as(r, e) {
  if (r.startsWith("var("))
    return r;
  const { r: t, g: n, b: o, a } = _m(r), s = 1 - e, l = (u) => Math.round(u * s);
  return `rgba(${l(t)}, ${l(n)}, ${l(o)}, ${a})`;
}
function mu(r, e) {
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
function ji(r, e) {
  const t = Js({ color: r || e.primaryColor, theme: e });
  return t.variable ? `var(${t.variable})` : r;
}
function Qp(r, e) {
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
  const { r: t, g: n, b: o } = _m(r);
  return `rgba(${t}, ${n}, ${o}, ${e})`;
}
const rR = ({
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
}, nR = {
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
  colors: nR,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: rR,
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
function oR({
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
const iR = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", Zp = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function Hl(r) {
  return r < 0 || r > 9 ? !1 : parseInt(r.toString(), 10) === r;
}
function eg(r) {
  if (!(r.primaryColor in r.colors))
    throw new Error(iR);
  if (typeof r.primaryShade == "object" && (!Hl(r.primaryShade.dark) || !Hl(r.primaryShade.light)))
    throw new Error(Zp);
  if (typeof r.primaryShade == "number" && !Hl(r.primaryShade))
    throw new Error(Zp);
}
function aR(r, e) {
  var n;
  if (!e)
    return eg(r), r;
  const t = Fu(r, e);
  return e.fontFamily && !((n = e.headings) != null && n.fontFamily) && (t.headings.fontFamily = e.fontFamily), eg(t), t;
}
const Gu = To(null), sR = () => jn(Gu) || $u;
function Qn() {
  const r = jn(Gu);
  if (!r)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return r;
}
function Sm({
  theme: r,
  children: e,
  inherit: t = !0
}) {
  const n = sR(), o = ps(
    () => aR(t ? n : $u, r),
    [r, n, t]
  );
  return /* @__PURE__ */ k.createElement(Gu.Provider, { value: o }, e);
}
Sm.displayName = "@mantine/core/MantineThemeProvider";
function cR() {
  const r = Qn(), e = qu(), t = on(r.breakpoints).reduce((n, o) => {
    const a = bA(r.breakpoints[o]);
    return `${n}@media (max-width: ${Wp(
      a - 0.1
    )}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${Wp(
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
function lR(r, e) {
  const t = Bl(r.variables), n = t ? Kl(e, t) : "", o = Bl(r.dark), a = o ? Kl(`${e}[data-mantine-color-scheme="dark"]`, o) : "", s = Bl(r.light), l = s ? Kl(`${e}[data-mantine-color-scheme="light"]`, s) : "";
  return `${n}${a}${l}`;
}
function zo(r, e, t) {
  on(e).forEach(
    (n) => Object.assign(r, { [`--mantine-${t}-${n}`]: e[n] })
  );
}
const Tm = (r) => {
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
function uR({ theme: r, generator: e }) {
  const t = Tm(r), n = e == null ? void 0 : e(r);
  return n ? Fu(t, n) : t;
}
const ql = Tm($u);
function dR(r) {
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
function fR(r) {
  return `
  ${r}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${r}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function Im({ cssVariablesSelector: r }) {
  const e = Qn(), t = qu(), n = QA(), o = uR({ theme: e, generator: n }), a = r === ":root", s = a ? dR(o) : o, l = lR(s, r);
  return l ? /* @__PURE__ */ k.createElement(
    "style",
    {
      "data-mantine-styles": !0,
      nonce: t == null ? void 0 : t(),
      dangerouslySetInnerHTML: {
        __html: `${l}${a ? "" : fR(r)}`
      }
    }
  ) : null;
}
Im.displayName = "@mantine/CssVariables";
function hR() {
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
function pR({
  manager: r,
  defaultColorScheme: e,
  getRootElement: t,
  forceColorScheme: n
}) {
  const o = Ke(), [a, s] = Ee(() => r.get(e)), l = n || a, u = $e(
    (h) => {
      n || (Ni(h, t), s(h), r.set(h));
    },
    [r.set, l, n]
  ), f = $e(() => {
    s(e), Ni(e, t), r.clear();
  }, [r.clear, e]);
  return ge(() => (r.subscribe(u), r.unsubscribe), [r.subscribe, r.unsubscribe]), ia(() => {
    Ni(r.get(e), t);
  }, []), ge(() => {
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
function gR({
  respectReducedMotion: r,
  getRootElement: e
}) {
  ia(() => {
    var t;
    r && ((t = e()) == null || t.setAttribute("data-respect-reduced-motion", "true"));
  }, [r]);
}
hR();
function Am({
  theme: r,
  children: e,
  getStyleNonce: t,
  withCssVariables: n = !0,
  cssVariablesSelector: o = ":root",
  classNamesPrefix: a = "mantine",
  colorSchemeManager: s = oR(),
  defaultColorScheme: l = "light",
  getRootElement: u = () => document.documentElement,
  cssVariablesResolver: f,
  forceColorScheme: h
}) {
  const { colorScheme: p, setColorScheme: m, clearColorScheme: v } = pR({
    defaultColorScheme: l,
    forceColorScheme: h,
    manager: s,
    getRootElement: u
  });
  return gR({
    respectReducedMotion: (r == null ? void 0 : r.respectReducedMotion) || !1,
    getRootElement: u
  }), /* @__PURE__ */ k.createElement(
    bm.Provider,
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
    /* @__PURE__ */ k.createElement(Sm, { theme: r }, n && /* @__PURE__ */ k.createElement(Im, { cssVariablesSelector: o }), /* @__PURE__ */ k.createElement(cR, null), e)
  );
}
Am.displayName = "@mantine/core/MantineProvider";
function Rm({
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
const mR = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function vR({ theme: r, options: e, unstyled: t }) {
  return kn(
    (e == null ? void 0 : e.focusable) && !t && (r.focusClassName || mR[r.focusRing]),
    (e == null ? void 0 : e.active) && !t && r.activeClassName
  );
}
function yR({
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
function CR({
  selector: r,
  stylesCtx: e,
  theme: t,
  classNames: n,
  props: o
}) {
  return Ys({ theme: t, classNames: n, props: o, stylesCtx: e })[r];
}
function wR({ rootSelector: r, selector: e, className: t }) {
  return r === e ? t : void 0;
}
function ER({ selector: r, classes: e, unstyled: t }) {
  return t ? void 0 : e[r];
}
function bR({
  themeName: r,
  classNamesPrefix: e,
  selector: t
}) {
  return r.map((n) => `${e}-${n}-${t}`);
}
function _R({
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
function SR({
  options: r,
  classes: e,
  selector: t,
  unstyled: n
}) {
  return r != null && r.variant && !n ? e[`${t}--${r.variant}`] : void 0;
}
function TR({
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
    vR({ theme: r, options: e, unstyled: l }),
    _R({ theme: r, themeName: t, selector: n, props: h, stylesCtx: p }),
    SR({ options: e, classes: s, selector: n, unstyled: l }),
    CR({ selector: n, stylesCtx: p, theme: r, classNames: a, props: h }),
    yR({ selector: n, stylesCtx: p, options: e, props: h, theme: r }),
    wR({ rootSelector: f, selector: n, className: u }),
    ER({ selector: n, classes: s, unstyled: l }),
    bR({ themeName: t, classNamesPrefix: o, selector: n }),
    e == null ? void 0 : e.className
  );
}
function IR({
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
function vu({ style: r, theme: e }) {
  return Array.isArray(r) ? [...r].reduce(
    (t, n) => ({ ...t, ...vu({ style: n, theme: e }) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function AR(r) {
  return r.reduce((e, t) => (t && Object.keys(t).forEach((n) => {
    e[n] = { ...e[n], ...Hu(t[n]) };
  }), e), {});
}
function RR({
  vars: r,
  varsResolver: e,
  theme: t,
  props: n,
  stylesCtx: o,
  selector: a,
  themeName: s
}) {
  var l;
  return (l = AR([
    e == null ? void 0 : e(t, n, o),
    ...s.map((u) => {
      var f, h, p;
      return (p = (h = (f = t.components) == null ? void 0 : f[u]) == null ? void 0 : h.vars) == null ? void 0 : p.call(h, t, n, o);
    }),
    r == null ? void 0 : r(t, n, o)
  ])) == null ? void 0 : l[a];
}
function kR({
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
    ...IR({ theme: r, themeName: e, props: o, stylesCtx: a, selector: t }),
    ...Ns({ theme: r, styles: l, props: o, stylesCtx: a })[t],
    ...Ns({ theme: r, styles: n == null ? void 0 : n.styles, props: (n == null ? void 0 : n.props) || o, stylesCtx: a })[t],
    ...RR({ theme: r, props: o, stylesCtx: a, vars: f, varsResolver: h, selector: t, themeName: e }),
    ...s === t ? vu({ style: u, theme: r }) : null,
    ...vu({ style: n == null ? void 0 : n.style, theme: r })
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
  const m = Qn(), v = JA(), C = (Array.isArray(r) ? r : [r]).filter((E) => E);
  return (E, _) => ({
    className: TR({
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
    style: kR({
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
function me(r, e, t) {
  var s;
  const n = Qn(), o = (s = n.components[r]) == null ? void 0 : s.defaultProps, a = typeof o == "function" ? o(n) : o;
  return { ...e, ...a, ...Hu(t) };
}
function tg(r) {
  return on(r).reduce(
    (e, t) => r[t] !== void 0 ? `${e}${wA(t)}:${r[t]};` : e,
    ""
  ).trim();
}
function PR({ selector: r, styles: e, media: t }) {
  const n = e ? tg(e) : "", o = Array.isArray(t) ? t.map((a) => `@media${a.query}{${r}{${tg(a.styles)}}}`) : [];
  return `${n ? `${r}{${n}}` : ""}${o.join("")}`.trim();
}
function NR({ selector: r, styles: e, media: t }) {
  const n = qu();
  return /* @__PURE__ */ k.createElement(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: n == null ? void 0 : n(),
      dangerouslySetInnerHTML: { __html: PR({ selector: r, styles: e, media: t }) }
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
    opacity: R,
    ff: A,
    fz: S,
    fw: I,
    lts: O,
    ta: L,
    lh: q,
    fs: F,
    tt: ie,
    td: j,
    w: re,
    miw: Z,
    maw: se,
    h: X,
    mih: ce,
    mah: V,
    bgsz: J,
    bgp: te,
    bgr: Ie,
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
    fs: F,
    tt: ie,
    td: j,
    w: re,
    miw: Z,
    maw: se,
    h: X,
    mih: ce,
    mah: V,
    bgsz: J,
    bgp: te,
    bgr: Ie,
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
const OR = {
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
function MR(r, e) {
  const t = Js({ color: r, theme: e });
  return t.color === "dimmed" ? "var(--mantine-color-dimmed)" : t.color === "bright" ? "var(--mantine-color-bright)" : t.isThemeColor && t.shade === void 0 ? `var(--mantine-color-${t.color}-text)` : t.variable ? `var(${t.variable})` : t.color;
}
function xR(r, e) {
  return typeof r == "string" && r in e.fontSizes ? `var(--mantine-font-size-${r})` : typeof r == "number" || typeof r == "string" ? $(r) : r;
}
function LR(r) {
  return r;
}
function DR(r, e) {
  return typeof r == "string" && r in e.lineHeights ? `var(--mantine-line-height-${r})` : r;
}
function UR(r) {
  return typeof r == "number" ? $(r) : r;
}
function FR(r, e) {
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
  color: MR,
  fontSize: xR,
  spacing: FR,
  identity: LR,
  size: UR,
  lineHeight: DR
};
function rg(r) {
  return r.replace("(min-width: ", "").replace("em)", "");
}
function HR({
  media: r,
  ...e
}) {
  const n = Object.keys(r).sort((o, a) => Number(rg(o)) - Number(rg(a))).map((o) => ({ query: o, styles: r[o] }));
  return { ...e, media: n };
}
function BR(r) {
  if (typeof r != "object" || r === null)
    return !1;
  const e = Object.keys(r);
  return !(e.length === 1 && e[0] === "base");
}
function KR(r) {
  return typeof r == "object" && r !== null ? "base" in r ? r.base : void 0 : r;
}
function qR(r) {
  return typeof r == "object" && r !== null ? on(r).filter((e) => e !== "base") : [];
}
function $R(r, e) {
  return typeof r == "object" && r !== null && e in r ? r[e] : r;
}
function GR({
  styleProps: r,
  data: e,
  theme: t
}) {
  return HR(
    on(r).reduce(
      (n, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom")
          return n;
        const a = e[o], s = Array.isArray(a.property) ? a.property : [a.property], l = KR(r[o]);
        if (!BR(r[o]))
          return s.forEach((f) => {
            n.inlineStyles[f] = $l[a.type](l, t);
          }), n;
        n.hasResponsiveStyles = !0;
        const u = qR(r[o]);
        return s.forEach((f) => {
          l && (n.styles[f] = $l[a.type](l, t)), u.forEach((h) => {
            const p = `(min-width: ${t.breakpoints[h]})`;
            n.media[p] = {
              ...n.media[p],
              [f]: $l[a.type](
                $R(r[o], h),
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
function zR() {
  return `__m__-${Kg().replace(/:/g, "")}`;
}
function km(r, e) {
  return Array.isArray(r) ? [...r].reduce(
    (t, n) => ({ ...t, ...km(n, e) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function Pm(r) {
  return r.startsWith("data-") ? r : `data-${r}`;
}
function VR(r) {
  return Object.keys(r).reduce((e, t) => {
    const n = r[t];
    return n === void 0 || n === "" || n === !1 || n === null || (e[Pm(t)] = r[t]), e;
  }, {});
}
function Nm(r) {
  return r ? typeof r == "string" ? { [Pm(r)]: !0 } : Array.isArray(r) ? [...r].reduce(
    (e, t) => ({ ...e, ...Nm(t) }),
    {}
  ) : VR(r) : null;
}
function yu(r, e) {
  return Array.isArray(r) ? [...r].reduce(
    (t, n) => ({ ...t, ...yu(n, e) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function WR({
  theme: r,
  style: e,
  vars: t,
  styleProps: n
}) {
  const o = yu(e, r), a = yu(t, r);
  return { ...o, ...a, ...n };
}
const Om = ut(
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
    const C = Qn(), E = r || "div", { styleProps: _, rest: R } = Xs(m), A = zR(), S = GR({
      styleProps: _,
      theme: C,
      data: OR
    }), I = {
      ref: v,
      style: WR({
        theme: C,
        style: e,
        vars: t,
        styleProps: S.inlineStyles
      }),
      className: kn(n, {
        [A]: S.hasResponsiveStyles,
        "mantine-light-hidden": f,
        "mantine-dark-hidden": h,
        [`mantine-hidden-from-${l}`]: l,
        [`mantine-visible-from-${u}`]: u
      }),
      "data-variant": o,
      "data-size": hm(s) ? void 0 : s || void 0,
      ...Nm(a),
      ...R
    };
    return /* @__PURE__ */ k.createElement(k.Fragment, null, S.hasResponsiveStyles && /* @__PURE__ */ k.createElement(
      NR,
      {
        selector: `.${A}`,
        styles: S.styles,
        media: S.media
      }
    ), typeof p == "function" ? p(I) : /* @__PURE__ */ k.createElement(E, { ...I }));
  }
);
Om.displayName = "@mantine/core/Box";
const Ae = Om;
function Mm(r) {
  return r;
}
function xe(r) {
  const e = ut(r);
  return e.extend = Mm, e;
}
function aa(r) {
  const e = ut(r);
  return e.extend = Mm, e;
}
const jR = To({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function zu() {
  return jn(jR);
}
function YR(r) {
  if (!r || typeof r == "string")
    return 0;
  const e = r / 36;
  return Math.round((4 + 15 * e ** 0.25 + e / 5) * 10);
}
function Gl(r) {
  return r != null && r.current ? r.current.scrollHeight : "auto";
}
const Oi = typeof window < "u" && window.requestAnimationFrame;
function QR({
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
    e0(() => u(C));
  }, h = (C) => {
    f((E) => ({ ...E, ...C }));
  };
  function p(C) {
    return {
      transition: `height ${r || YR(C)}ms ${e}`
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
    const R = _[E];
    return {
      "aria-hidden": !n,
      ..._,
      [E]: wm(o, R),
      onTransitionEnd: m,
      style: { boxSizing: "border-box", ...C, ...l }
    };
  }
  return v;
}
const JR = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: !0
}, xm = xe((r, e) => {
  const {
    children: t,
    in: n,
    transitionDuration: o,
    transitionTimingFunction: a,
    style: s,
    onTransitionEnd: l,
    animateOpacity: u,
    ...f
  } = me("Collapse", JR, r), h = Qn(), p = Em(), v = (h.respectReducedMotion ? p : !1) ? 0 : o, C = QR({
    opened: n,
    transitionDuration: v,
    transitionTimingFunction: a,
    onTransitionEnd: l
  });
  return v === 0 ? n ? /* @__PURE__ */ k.createElement(Ae, { ...f }, t) : null : /* @__PURE__ */ k.createElement(Ae, { ...C({ style: km(s, h), ref: e, ...f }) }, /* @__PURE__ */ k.createElement(
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
xm.displayName = "@mantine/core/Collapse";
const [XR, xr] = ci(
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
const ZR = k.forwardRef((r, e) => {
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
}), ek = k.forwardRef(
  (r, e) => {
    const t = xr(), n = !!(t.scrollbarX && t.scrollbarY);
    return t.type !== "scroll" && n ? /* @__PURE__ */ k.createElement(ZR, { ...r, ref: e }) : null;
  }
), tk = {
  scrollHideDelay: 1e3,
  type: "hover"
}, Lm = ut((r, e) => {
  const t = me("ScrollAreaRoot", tk, r), { type: n, scrollHideDelay: o, scrollbars: a, ...s } = t, [l, u] = Ee(null), [f, h] = Ee(null), [p, m] = Ee(null), [v, C] = Ee(null), [E, _] = Ee(null), [R, A] = Ee(0), [S, I] = Ee(0), [O, L] = Ee(!1), [q, F] = Ee(!1), ie = Mr(e, (j) => u(j));
  return /* @__PURE__ */ k.createElement(
    XR,
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
        onScrollbarYEnabledChange: F,
        onCornerWidthChange: A,
        onCornerHeightChange: I
      }
    },
    /* @__PURE__ */ k.createElement(
      Ae,
      {
        ...s,
        ref: ie,
        __vars: {
          "--sa-corner-width": a !== "xy" ? "0px" : `${R}px`,
          "--sa-corner-height": a !== "xy" ? "0px" : `${S}px`
        }
      }
    )
  );
});
Lm.displayName = "@mantine/core/ScrollAreaRoot";
function Dm(r, e) {
  const t = r / e;
  return Number.isNaN(t) ? 0 : t;
}
function Zs(r) {
  const e = Dm(r.viewport, r.content), t = r.scrollbar.paddingStart + r.scrollbar.paddingEnd, n = (r.scrollbar.size - t) * e;
  return Math.max(n, 18);
}
function Um(r, e) {
  return (t) => {
    if (r[0] === r[1] || e[0] === e[1])
      return e[0];
    const n = (e[1] - e[0]) / (r[1] - r[0]);
    return e[0] + n * (t - r[0]);
  };
}
function rk(r, [e, t]) {
  return Math.min(t, Math.max(e, r));
}
function ng(r, e, t = "ltr") {
  const n = Zs(e), o = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, a = e.scrollbar.size - o, s = e.content - e.viewport, l = a - n, u = t === "ltr" ? [0, s] : [s * -1, 0], f = rk(r, u);
  return Um([0, s], [0, l])(f);
}
function nk(r, e, t, n = "ltr") {
  const o = Zs(t), a = o / 2, s = e || a, l = o - s, u = t.scrollbar.paddingStart + s, f = t.scrollbar.size - t.scrollbar.paddingEnd - l, h = t.content - t.viewport, p = n === "ltr" ? [0, h] : [h * -1, 0];
  return Um([u, f], p)(r);
}
function Fm(r, e) {
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
const [ok, Hm] = ci(
  "ScrollAreaScrollbar was not found in tree"
), Bm = ut((r, e) => {
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
  } = r, m = xr(), [v, C] = k.useState(null), E = Mr(e, (F) => C(F)), _ = k.useRef(null), R = k.useRef(""), { viewport: A } = m, S = t.content - t.viewport, I = ho(f), O = ho(l), L = Qs(h, 10), q = (F) => {
    if (_.current) {
      const ie = F.clientX - _.current.left, j = F.clientY - _.current.top;
      u({ x: ie, y: j });
    }
  };
  return ge(() => {
    const F = (ie) => {
      const j = ie.target;
      (v == null ? void 0 : v.contains(j)) && I(ie, S);
    };
    return document.addEventListener("wheel", F, { passive: !1 }), () => document.removeEventListener("wheel", F, { passive: !1 });
  }, [A, v, S, I]), ge(O, [t, O]), ni(v, L), ni(m.content, L), /* @__PURE__ */ k.createElement(
    ok,
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
        onPointerDown: yo(r.onPointerDown, (F) => {
          F.button === 0 && (F.target.setPointerCapture(F.pointerId), _.current = v.getBoundingClientRect(), R.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", q(F));
        }),
        onPointerMove: yo(r.onPointerMove, q),
        onPointerUp: yo(r.onPointerUp, (F) => {
          const ie = F.target;
          ie.hasPointerCapture(F.pointerId) && ie.releasePointerCapture(F.pointerId), document.body.style.webkitUserSelect = R.current, _.current = null;
        })
      }
    )
  );
}), ik = ut(
  (r, e) => {
    const { sizes: t, onSizesChange: n, style: o, ...a } = r, s = xr(), [l, u] = Ee(), f = Ke(null), h = Mr(e, f, s.onScrollbarXChange);
    return ge(() => {
      f.current && u(getComputedStyle(f.current));
    }, [f]), /* @__PURE__ */ k.createElement(
      Bm,
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
            r.onWheelScroll(v), Fm(v, m) && p.preventDefault();
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
), ak = ut(
  (r, e) => {
    const { sizes: t, onSizesChange: n, style: o, ...a } = r, s = xr(), [l, u] = k.useState(), f = Ke(null), h = Mr(e, f, s.onScrollbarYChange);
    return ge(() => {
      f.current && u(getComputedStyle(f.current));
    }, [f]), /* @__PURE__ */ k.createElement(
      Bm,
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
            r.onWheelScroll(v), Fm(v, m) && p.preventDefault();
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
), Vu = ut((r, e) => {
  const { orientation: t = "vertical", ...n } = r, { dir: o } = zu(), a = xr(), s = Ke(null), l = Ke(0), [u, f] = Ee({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), h = Dm(u.viewport, u.content), p = {
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
  }, m = (v, C) => nk(v, l.current, u, C);
  return t === "horizontal" ? /* @__PURE__ */ k.createElement(
    ik,
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
  ) : t === "vertical" ? /* @__PURE__ */ k.createElement(
    ak,
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
}), Km = ut(
  (r, e) => {
    const t = xr(), { forceMount: n, ...o } = r, [a, s] = Ee(!1), l = r.orientation === "horizontal", u = Qs(() => {
      if (t.viewport) {
        const f = t.viewport.offsetWidth < t.viewport.scrollWidth, h = t.viewport.offsetHeight < t.viewport.scrollHeight;
        s(l ? f : h);
      }
    }, 10);
    return ni(t.viewport, u), ni(t.content, u), n || a ? /* @__PURE__ */ k.createElement(
      Vu,
      {
        "data-state": a ? "visible" : "hidden",
        ...o,
        ref: e
      }
    ) : null;
  }
), sk = ut(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = xr(), [a, s] = Ee(!1);
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
    }, [o.scrollArea, o.scrollHideDelay]), t || a ? /* @__PURE__ */ k.createElement(
      Km,
      {
        "data-state": a ? "visible" : "hidden",
        ...n,
        ref: e
      }
    ) : null;
  }
), ck = ut(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = xr(), a = r.orientation === "horizontal", [s, l] = Ee("hidden"), u = Qs(() => l("idle"), 100);
    return ge(() => {
      if (s === "idle") {
        const f = window.setTimeout(() => l("hidden"), o.scrollHideDelay);
        return () => window.clearTimeout(f);
      }
    }, [s, o.scrollHideDelay]), ge(() => {
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
      Vu,
      {
        "data-state": s === "hidden" ? "hidden" : "visible",
        ...n,
        ref: e,
        onPointerEnter: yo(r.onPointerEnter, () => l("interacting")),
        onPointerLeave: yo(r.onPointerLeave, () => l("idle"))
      }
    ) : null;
  }
), og = k.forwardRef(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = xr(), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, l = r.orientation === "horizontal";
    return k.useEffect(() => (l ? a(!0) : s(!0), () => {
      l ? a(!1) : s(!1);
    }), [l, a, s]), o.type === "hover" ? /* @__PURE__ */ k.createElement(sk, { ...n, ref: e, forceMount: t }) : o.type === "scroll" ? /* @__PURE__ */ k.createElement(ck, { ...n, ref: e, forceMount: t }) : o.type === "auto" ? /* @__PURE__ */ k.createElement(Km, { ...n, ref: e, forceMount: t }) : o.type === "always" ? /* @__PURE__ */ k.createElement(Vu, { ...n, ref: e }) : null;
  }
);
function lk(r, e = () => {
}) {
  let t = { left: r.scrollLeft, top: r.scrollTop }, n = 0;
  return function o() {
    const a = { left: r.scrollLeft, top: r.scrollTop }, s = t.left !== a.left, l = t.top !== a.top;
    (s || l) && e(), t = a, n = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(n);
}
const uk = ut((r, e) => {
  const { style: t, ...n } = r, o = xr(), a = Hm(), { onThumbPositionChange: s } = a, l = Mr(e, (h) => a.onThumbChange(h)), u = Ke(), f = Qs(() => {
    u.current && (u.current(), u.current = void 0);
  }, 100);
  return ge(() => {
    const { viewport: h } = o;
    if (h) {
      const p = () => {
        if (f(), !u.current) {
          const m = lk(h, s);
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
}), ig = k.forwardRef(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = Hm();
    return t || o.hasThumb ? /* @__PURE__ */ k.createElement(uk, { ref: e, ...n }) : null;
  }
), qm = ut(
  ({ children: r, style: e, ...t }, n) => {
    const o = xr(), a = Mr(n, o.onViewportChange);
    return /* @__PURE__ */ k.createElement(
      Ae,
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
qm.displayName = "@mantine/core/ScrollAreaViewport";
var Wu = { root: "m-d57069b5", viewport: "m-c0783ff9", viewportInner: "m-f8f631dd", scrollbar: "m-c44ba933", thumb: "m-d8b5e363", corner: "m-21657268" };
const $m = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
}, dk = (r, { scrollbarSize: e }) => ({
  root: {
    "--scrollarea-scrollbar-size": $(e)
  }
}), sa = xe((r, e) => {
  const t = me("ScrollArea", $m, r), {
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
  } = t, [S, I] = Ee(!1), O = at({
    name: "ScrollArea",
    props: t,
    classes: Wu,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: f,
    varsResolver: dk
  });
  return /* @__PURE__ */ k.createElement(
    Lm,
    {
      type: h === "never" ? "always" : h,
      scrollHideDelay: p,
      ref: e,
      scrollbars: R,
      ...O("root"),
      ...A
    },
    /* @__PURE__ */ k.createElement(
      qm,
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
    (R === "xy" || R === "x") && /* @__PURE__ */ k.createElement(
      og,
      {
        ...O("scrollbar"),
        orientation: "horizontal",
        "data-hidden": h === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => I(!0),
        onMouseLeave: () => I(!1)
      },
      /* @__PURE__ */ k.createElement(ig, { ...O("thumb") })
    ),
    (R === "xy" || R === "y") && /* @__PURE__ */ k.createElement(
      og,
      {
        ...O("scrollbar"),
        orientation: "vertical",
        "data-hidden": h === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => I(!0),
        onMouseLeave: () => I(!1)
      },
      /* @__PURE__ */ k.createElement(ig, { ...O("thumb") })
    ),
    /* @__PURE__ */ k.createElement(
      ek,
      {
        ...O("corner"),
        "data-hovered": S || void 0,
        "data-hidden": h === "never" || void 0
      }
    )
  );
});
sa.displayName = "@mantine/core/ScrollArea";
const ju = xe((r, e) => {
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
  } = me("ScrollAreaAutosize", $m, r);
  return /* @__PURE__ */ k.createElement(Ae, { ...A, ref: e, style: [{ display: "flex" }, _] }, /* @__PURE__ */ k.createElement(Ae, { style: { display: "flex", flexDirection: "column", flex: 1 } }, /* @__PURE__ */ k.createElement(
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
      vars: R,
      scrollbars: E
    },
    t
  )));
});
sa.classes = Wu;
ju.displayName = "@mantine/core/ScrollAreaAutosize";
ju.classes = Wu;
sa.Autosize = ju;
var Gm = { root: "m-87cf2631" };
const fk = {
  __staticSelector: "UnstyledButton"
}, ca = aa(
  (r, e) => {
    const t = me("UnstyledButton", fk, r), {
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
      classes: Gm,
      className: n,
      style: f,
      classNames: l,
      styles: u,
      unstyled: s
    });
    return /* @__PURE__ */ k.createElement(
      Ae,
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
ca.classes = Gm;
ca.displayName = "@mantine/core/UnstyledButton";
const Wr = Math.min, Ft = Math.max, Ms = Math.round, ss = Math.floor, zn = (r) => ({
  x: r,
  y: r
}), hk = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, pk = {
  start: "end",
  end: "start"
};
function Cu(r, e, t) {
  return Ft(r, Wr(e, t));
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
function Yu(r) {
  return r === "x" ? "y" : "x";
}
function Qu(r) {
  return r === "y" ? "height" : "width";
}
function Ao(r) {
  return ["top", "bottom"].includes(jr(r)) ? "y" : "x";
}
function Ju(r) {
  return Yu(Ao(r));
}
function gk(r, e, t) {
  t === void 0 && (t = !1);
  const n = li(r), o = Ju(r), a = Qu(o);
  let s = o === "x" ? n === (t ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[a] > e.floating[a] && (s = xs(s)), [s, xs(s)];
}
function mk(r) {
  const e = xs(r);
  return [wu(r), e, wu(e)];
}
function wu(r) {
  return r.replace(/start|end/g, (e) => pk[e]);
}
function vk(r, e, t) {
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
function yk(r, e, t, n) {
  const o = li(r);
  let a = vk(jr(r), t === "start", n);
  return o && (a = a.map((s) => s + "-" + o), e && (a = a.concat(a.map(wu)))), a;
}
function xs(r) {
  return r.replace(/left|right|bottom|top/g, (e) => hk[e]);
}
function Ck(r) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...r
  };
}
function Xu(r) {
  return typeof r != "number" ? Ck(r) : {
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
function ag(r, e, t) {
  let {
    reference: n,
    floating: o
  } = r;
  const a = Ao(e), s = Ju(e), l = Qu(s), u = jr(e), f = a === "y", h = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, m = n[l] / 2 - o[l] / 2;
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
const wk = async (r, e, t) => {
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
  } = In(e, r), C = Xu(v), _ = l[m ? p === "floating" ? "reference" : "floating" : p], R = oi(await a.getClippingRect({
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
  }, O = oi(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
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
    } = In(r, e) || {};
    if (f == null)
      return {};
    const p = Xu(h), m = {
      x: t,
      y: n
    }, v = Ju(o), C = Qu(v), E = await s.getDimensions(f), _ = v === "y", R = _ ? "top" : "left", A = _ ? "bottom" : "right", S = _ ? "clientHeight" : "clientWidth", I = a.reference[C] + a.reference[v] - m[v] - a.floating[C], O = m[v] - a.reference[v], L = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
    let q = L ? L[S] : 0;
    (!q || !await (s.isElement == null ? void 0 : s.isElement(L))) && (q = l.floating[S] || a.floating[C]);
    const F = I / 2 - O / 2, ie = q / 2 - E[C] / 2 - 1, j = Wr(p[R], ie), re = Wr(p[A], ie), Z = j, se = q - E[C] - re, X = q / 2 - E[C] / 2 + F, ce = Cu(Z, X, se), V = !u.arrow && li(o) != null && X != ce && a.reference[C] / 2 - (X < Z ? j : re) - E[C] / 2 < 0, J = V ? X < Z ? X - Z : X - se : 0;
    return {
      [v]: m[v] + J,
      data: {
        [v]: ce,
        centerOffset: X - ce - J,
        ...V && {
          alignmentOffset: J
        }
      },
      reset: V
    };
  }
}), Ek = function(r) {
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
      const R = jr(o), A = jr(l) === l, S = await (u.isRTL == null ? void 0 : u.isRTL(f.floating)), I = m || (A || !E ? [xs(l)] : mk(l));
      !m && C !== "none" && I.push(...yk(l, E, C, S));
      const O = [l, ...I], L = await Zu(e, _), q = [];
      let F = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (h && q.push(L[R]), p) {
        const Z = gk(o, s, S);
        q.push(L[Z[0]], L[Z[1]]);
      }
      if (F = [...F, {
        placement: o,
        overflows: q
      }], !q.every((Z) => Z <= 0)) {
        var ie, j;
        const Z = (((ie = a.flip) == null ? void 0 : ie.index) || 0) + 1, se = O[Z];
        if (se)
          return {
            data: {
              index: Z,
              overflows: F
            },
            reset: {
              placement: se
            }
          };
        let X = (j = F.filter((ce) => ce.overflows[0] <= 0).sort((ce, V) => ce.overflows[1] - V.overflows[1])[0]) == null ? void 0 : j.placement;
        if (!X)
          switch (v) {
            case "bestFit": {
              var re;
              const ce = (re = F.map((V) => [V.placement, V.overflows.filter((J) => J > 0).reduce((J, te) => J + te, 0)]).sort((V, J) => V[1] - J[1])[0]) == null ? void 0 : re[0];
              ce && (X = ce);
              break;
            }
            case "initialPlacement":
              X = l;
              break;
          }
        if (o !== X)
          return {
            reset: {
              placement: X
            }
          };
      }
      return {};
    }
  };
};
function zm(r) {
  const e = Wr(...r.map((a) => a.left)), t = Wr(...r.map((a) => a.top)), n = Ft(...r.map((a) => a.right)), o = Ft(...r.map((a) => a.bottom));
  return {
    x: e,
    y: t,
    width: n - e,
    height: o - t
  };
}
function bk(r) {
  const e = r.slice().sort((o, a) => o.y - a.y), t = [];
  let n = null;
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    !n || a.y - n.y > n.height / 2 ? t.push([a]) : t[t.length - 1].push(a), n = a;
  }
  return t.map((o) => oi(zm(o)));
}
const _k = function(r) {
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
      } = In(r, e), h = Array.from(await (a.getClientRects == null ? void 0 : a.getClientRects(n.reference)) || []), p = bk(h), m = oi(zm(h)), v = Xu(l);
      function C() {
        if (p.length === 2 && p[0].left > p[1].right && u != null && f != null)
          return p.find((_) => u > _.left - v.left && u < _.right + v.right && f > _.top - v.top && f < _.bottom + v.bottom) || m;
        if (p.length >= 2) {
          if (Ao(t) === "y") {
            const j = p[0], re = p[p.length - 1], Z = jr(t) === "top", se = j.top, X = re.bottom, ce = Z ? j.left : re.left, V = Z ? j.right : re.right, J = V - ce, te = X - se;
            return {
              top: se,
              bottom: X,
              left: ce,
              right: V,
              width: J,
              height: te,
              x: ce,
              y: se
            };
          }
          const _ = jr(t) === "left", R = Ft(...p.map((j) => j.right)), A = Wr(...p.map((j) => j.left)), S = p.filter((j) => _ ? j.left === A : j.right === R), I = S[0].top, O = S[S.length - 1].bottom, L = A, q = R, F = q - L, ie = O - I;
          return {
            top: I,
            bottom: O,
            left: L,
            right: q,
            width: F,
            height: ie,
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
async function Sk(r, e) {
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
const Tk = function(r) {
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
      } = e, u = await Sk(e, r);
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
}, Ik = function(r) {
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
      } = In(r, e), f = {
        x: t,
        y: n
      }, h = await Zu(e, u), p = Ao(jr(o)), m = Yu(p);
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
}, Ak = function(r) {
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
      }, p = Ao(o), m = Yu(p);
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
}, Rk = function(r) {
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
      } = In(r, e), u = await Zu(e, l), f = jr(t), h = li(t), p = Ao(t) === "y", {
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
        const L = Ft(u.left, 0), q = Ft(u.right, 0), F = Ft(u.top, 0), ie = Ft(u.bottom, 0);
        p ? I = m - 2 * (L !== 0 || q !== 0 ? L + q : Ft(u.left, u.right)) : S = v - 2 * (F !== 0 || ie !== 0 ? F + ie : Ft(u.top, u.bottom));
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
  return Vm(r) ? (r.nodeName || "").toLowerCase() : "#document";
}
function vr(r) {
  var e;
  return (r == null || (e = r.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Pn(r) {
  var e;
  return (e = (Vm(r) ? r.ownerDocument : r.document) || window.document) == null ? void 0 : e.documentElement;
}
function Vm(r) {
  return r instanceof Node || r instanceof vr(r).Node;
}
function An(r) {
  return r instanceof Element || r instanceof vr(r).Element;
}
function cn(r) {
  return r instanceof HTMLElement || r instanceof vr(r).HTMLElement;
}
function cg(r) {
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
function kk(r) {
  return ["table", "td", "th"].includes(Vn(r));
}
function ed(r) {
  const e = td(), t = Or(r);
  return t.transform !== "none" || t.perspective !== "none" || (t.containerType ? t.containerType !== "normal" : !1) || !e && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !e && (t.filter ? t.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (t.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (t.contain || "").includes(n));
}
function Pk(r) {
  let e = ii(r);
  for (; cn(e) && !ec(e); ) {
    if (ed(e))
      return e;
    e = ii(e);
  }
  return null;
}
function td() {
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
    cg(r) && r.host || // Fallback.
    Pn(r)
  );
  return cg(e) ? e.host : e;
}
function Wm(r) {
  const e = ii(r);
  return ec(e) ? r.ownerDocument ? r.ownerDocument.body : r.body : cn(e) && la(e) ? e : Wm(e);
}
function Yi(r, e, t) {
  var n;
  e === void 0 && (e = []), t === void 0 && (t = !0);
  const o = Wm(r), a = o === ((n = r.ownerDocument) == null ? void 0 : n.body), s = vr(o);
  return a ? e.concat(s, s.visualViewport || [], la(o) ? o : [], s.frameElement && t ? Yi(s.frameElement) : []) : e.concat(o, Yi(o, [], t));
}
function jm(r) {
  const e = Or(r);
  let t = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const o = cn(r), a = o ? r.offsetWidth : t, s = o ? r.offsetHeight : n, l = Ms(t) !== a || Ms(n) !== s;
  return l && (t = a, n = s), {
    width: t,
    height: n,
    $: l
  };
}
function rd(r) {
  return An(r) ? r : r.contextElement;
}
function ei(r) {
  const e = rd(r);
  if (!cn(e))
    return zn(1);
  const t = e.getBoundingClientRect(), {
    width: n,
    height: o,
    $: a
  } = jm(e);
  let s = (a ? Ms(t.width) : t.width) / n, l = (a ? Ms(t.height) : t.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const Nk = /* @__PURE__ */ zn(0);
function Ym(r) {
  const e = vr(r);
  return !td() || !e.visualViewport ? Nk : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Ok(r, e, t) {
  return e === void 0 && (e = !1), !t || e && t !== vr(r) ? !1 : e;
}
function _o(r, e, t, n) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const o = r.getBoundingClientRect(), a = rd(r);
  let s = zn(1);
  e && (n ? An(n) && (s = ei(n)) : s = ei(r));
  const l = Ok(a, t, n) ? Ym(a) : zn(0);
  let u = (o.left + l.x) / s.x, f = (o.top + l.y) / s.y, h = o.width / s.x, p = o.height / s.y;
  if (a) {
    const m = vr(a), v = n && An(n) ? vr(n) : n;
    let C = m.frameElement;
    for (; C && n && v !== m; ) {
      const E = ei(C), _ = C.getBoundingClientRect(), R = Or(C), A = _.left + (C.clientLeft + parseFloat(R.paddingLeft)) * E.x, S = _.top + (C.clientTop + parseFloat(R.paddingTop)) * E.y;
      u *= E.x, f *= E.y, h *= E.x, p *= E.y, u += A, f += S, C = vr(C).frameElement;
    }
  }
  return oi({
    width: h,
    height: p,
    x: u,
    y: f
  });
}
function Mk(r) {
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
function xk(r) {
  return Array.from(r.getClientRects());
}
function Qm(r) {
  return _o(Pn(r)).left + tc(r).scrollLeft;
}
function Lk(r) {
  const e = Pn(r), t = tc(r), n = r.ownerDocument.body, o = Ft(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), a = Ft(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -t.scrollLeft + Qm(r);
  const l = -t.scrollTop;
  return Or(n).direction === "rtl" && (s += Ft(e.clientWidth, n.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: l
  };
}
function Dk(r, e) {
  const t = vr(r), n = Pn(r), o = t.visualViewport;
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
function Uk(r, e) {
  const t = _o(r, !0, e === "fixed"), n = t.top + r.clientTop, o = t.left + r.clientLeft, a = cn(r) ? ei(r) : zn(1), s = r.clientWidth * a.x, l = r.clientHeight * a.y, u = o * a.x, f = n * a.y;
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
    n = Dk(r, t);
  else if (e === "document")
    n = Lk(Pn(r));
  else if (An(e))
    n = Uk(e, t);
  else {
    const o = Ym(r);
    n = {
      ...e,
      x: e.x - o.x,
      y: e.y - o.y
    };
  }
  return oi(n);
}
function Jm(r, e) {
  const t = ii(r);
  return t === e || !An(t) || ec(t) ? !1 : Or(t).position === "fixed" || Jm(t, e);
}
function Fk(r, e) {
  const t = e.get(r);
  if (t)
    return t;
  let n = Yi(r, [], !1).filter((l) => An(l) && Vn(l) !== "body"), o = null;
  const a = Or(r).position === "fixed";
  let s = a ? ii(r) : r;
  for (; An(s) && !ec(s); ) {
    const l = Or(s), u = ed(s);
    !u && l.position === "fixed" && (o = null), (a ? !u && !o : !u && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || la(s) && !u && Jm(r, s)) ? n = n.filter((h) => h !== s) : o = l, s = ii(s);
  }
  return e.set(r, n), n;
}
function Hk(r) {
  let {
    element: e,
    boundary: t,
    rootBoundary: n,
    strategy: o
  } = r;
  const s = [...t === "clippingAncestors" ? Fk(e, this._c) : [].concat(t), n], l = s[0], u = s.reduce((f, h) => {
    const p = lg(e, h, o);
    return f.top = Ft(p.top, f.top), f.right = Wr(p.right, f.right), f.bottom = Wr(p.bottom, f.bottom), f.left = Ft(p.left, f.left), f;
  }, lg(e, l, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Bk(r) {
  return jm(r);
}
function Kk(r, e, t) {
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
      o && (u.x = Qm(o));
  return {
    x: s.left + l.scrollLeft - u.x,
    y: s.top + l.scrollTop - u.y,
    width: s.width,
    height: s.height
  };
}
function ug(r, e) {
  return !cn(r) || Or(r).position === "fixed" ? null : e ? e(r) : r.offsetParent;
}
function Xm(r, e) {
  const t = vr(r);
  if (!cn(r))
    return t;
  let n = ug(r, e);
  for (; n && kk(n) && Or(n).position === "static"; )
    n = ug(n, e);
  return n && (Vn(n) === "html" || Vn(n) === "body" && Or(n).position === "static" && !ed(n)) ? t : n || Pk(r) || t;
}
const qk = async function(r) {
  let {
    reference: e,
    floating: t,
    strategy: n
  } = r;
  const o = this.getOffsetParent || Xm, a = this.getDimensions;
  return {
    reference: Kk(e, await o(t), n),
    floating: {
      x: 0,
      y: 0,
      ...await a(t)
    }
  };
};
function $k(r) {
  return Or(r).direction === "rtl";
}
const Gk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Mk,
  getDocumentElement: Pn,
  getClippingRect: Hk,
  getOffsetParent: Xm,
  getElementRects: qk,
  getClientRects: xk,
  getDimensions: Bk,
  getScale: ei,
  isElement: An,
  isRTL: $k
};
function zk(r, e) {
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
    const v = ss(h), C = ss(o.clientWidth - (f + p)), E = ss(o.clientHeight - (h + m)), _ = ss(f), A = {
      rootMargin: -v + "px " + -C + "px " + -E + "px " + -_ + "px",
      threshold: Ft(0, Wr(1, u)) || 1
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
function Vk(r, e, t, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, f = rd(r), h = o || a ? [...f ? Yi(f) : [], ...Yi(e)] : [];
  h.forEach((R) => {
    o && R.addEventListener("scroll", t, {
      passive: !0
    }), a && R.addEventListener("resize", t);
  });
  const p = f && l ? zk(f, t) : null;
  let m = -1, v = null;
  s && (v = new ResizeObserver((R) => {
    let [A] = R;
    A && A.target === f && v && (v.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      v && v.observe(e);
    })), t();
  }), f && !u && v.observe(f), v.observe(e));
  let C, E = u ? _o(r) : null;
  u && _();
  function _() {
    const R = _o(r);
    E && (R.x !== E.x || R.y !== E.y || R.width !== E.width || R.height !== E.height) && t(), E = R, C = requestAnimationFrame(_);
  }
  return t(), () => {
    h.forEach((R) => {
      o && R.removeEventListener("scroll", t), a && R.removeEventListener("resize", t);
    }), p && p(), v && v.disconnect(), v = null, u && cancelAnimationFrame(C);
  };
}
const Wk = (r, e, t) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: Gk,
    ...t
  }, a = {
    ...o.platform,
    _c: n
  };
  return wk(r, e, {
    ...o,
    platform: a
  });
}, jk = (r) => {
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
var hs = typeof document < "u" ? ku : ge;
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
function Zm(r) {
  return typeof window > "u" ? 1 : (r.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function dg(r, e) {
  const t = Zm(r);
  return Math.round(e * t) / t;
}
function fg(r) {
  const e = De.useRef(r);
  return hs(() => {
    e.current = r;
  }), e;
}
function Yk(r) {
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
  const [C, E] = De.useState(null), [_, R] = De.useState(null), A = De.useCallback((V) => {
    V != L.current && (L.current = V, E(V));
  }, [E]), S = De.useCallback((V) => {
    V !== q.current && (q.current = V, R(V));
  }, [R]), I = a || C, O = s || _, L = De.useRef(null), q = De.useRef(null), F = De.useRef(h), ie = fg(u), j = fg(o), re = De.useCallback(() => {
    if (!L.current || !q.current)
      return;
    const V = {
      placement: e,
      strategy: t,
      middleware: m
    };
    j.current && (V.platform = j.current), Wk(L.current, q.current, V).then((J) => {
      const te = {
        ...J,
        isPositioned: !0
      };
      Z.current && !Ls(F.current, te) && (F.current = te, XT.flushSync(() => {
        p(te);
      }));
    });
  }, [m, e, t, j]);
  hs(() => {
    f === !1 && F.current.isPositioned && (F.current.isPositioned = !1, p((V) => ({
      ...V,
      isPositioned: !1
    })));
  }, [f]);
  const Z = De.useRef(!1);
  hs(() => (Z.current = !0, () => {
    Z.current = !1;
  }), []), hs(() => {
    if (I && (L.current = I), O && (q.current = O), I && O) {
      if (ie.current)
        return ie.current(I, O, re);
      re();
    }
  }, [I, O, re, ie]);
  const se = De.useMemo(() => ({
    reference: L,
    floating: q,
    setReference: A,
    setFloating: S
  }), [A, S]), X = De.useMemo(() => ({
    reference: I,
    floating: O
  }), [I, O]), ce = De.useMemo(() => {
    const V = {
      position: t,
      left: 0,
      top: 0
    };
    if (!X.floating)
      return V;
    const J = dg(X.floating, h.x), te = dg(X.floating, h.y);
    return l ? {
      ...V,
      transform: "translate(" + J + "px, " + te + "px)",
      ...Zm(X.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: J,
      top: te
    };
  }, [t, l, X.floating, h.x, h.y]);
  return De.useMemo(() => ({
    ...h,
    update: re,
    refs: se,
    elements: X,
    floatingStyles: ce
  }), [h, re, se, X, ce]);
}
var ev = typeof document < "u" ? ku : ge;
let zl = !1, Qk = 0;
const hg = () => "floating-ui-" + Qk++;
function Jk() {
  const [r, e] = De.useState(() => zl ? hg() : void 0);
  return ev(() => {
    r == null && e(hg());
  }, []), De.useEffect(() => {
    zl || (zl = !0);
  }, []), r;
}
const Xk = De[/* @__PURE__ */ "useId".toString()], Zk = Xk || Jk;
function eP() {
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
const tP = /* @__PURE__ */ De.createContext(null), rP = () => De.useContext(tP);
function nP(r) {
  return (r == null ? void 0 : r.ownerDocument) || document;
}
function oP(r) {
  return nP(r).defaultView || window;
}
function cs(r) {
  return r ? r instanceof Element || r instanceof oP(r).Element : !1;
}
const iP = De[/* @__PURE__ */ "useInsertionEffect".toString()], aP = iP || ((r) => r());
function sP(r) {
  const e = De.useRef(() => {
  });
  return aP(() => {
    e.current = r;
  }), De.useCallback(function() {
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return e.current == null ? void 0 : e.current(...n);
  }, []);
}
function cP(r) {
  var e;
  r === void 0 && (r = {});
  const {
    open: t = !1,
    onOpenChange: n,
    nodeId: o
  } = r, [a, s] = De.useState(null), l = ((e = r.elements) == null ? void 0 : e.reference) || a, u = Yk(r), f = rP(), h = sP((I, O) => {
    I && (m.current.openEvent = O), n == null || n(I, O);
  }), p = De.useRef(null), m = De.useRef({}), v = De.useState(() => eP())[0], C = Zk(), E = De.useCallback((I) => {
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
  }, [u.refs]), R = De.useMemo(() => ({
    ...u.refs,
    setReference: _,
    setPositionReference: E,
    domReference: p
  }), [u.refs, _, E]), A = De.useMemo(() => ({
    ...u.elements,
    domReference: l
  }), [u.elements, l]), S = De.useMemo(() => ({
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
  return ev(() => {
    const I = f == null ? void 0 : f.nodesRef.current.find((O) => O.id === o);
    I && (I.context = S);
  }), De.useMemo(() => ({
    ...u,
    context: S,
    refs: R,
    elements: A
  }), [u, R, A, S]);
}
function lP(r, e) {
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
const uP = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function dP({
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
    [uP[u]]: $(n)
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
const tv = ut(
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
    return a ? /* @__PURE__ */ k.createElement(
      "div",
      {
        ...f,
        ref: h,
        style: {
          ...u,
          ...dP({
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
tv.displayName = "@mantine/core/FloatingArrow";
const [fP, rv] = ci(
  "Popover component was not found in the tree"
);
function nv({
  children: r,
  active: e = !0,
  refProp: t = "ref"
}) {
  const n = WA(e), o = Mr(n, r == null ? void 0 : r.ref);
  return oa(r) ? Gs(r, { [t]: o }) : r;
}
nv.displayName = "@mantine/core/FocusTrap";
function hP(r) {
  const e = document.createElement("div");
  return e.setAttribute("data-portal", "true"), typeof r.className == "string" && e.classList.add(...r.className.split(" ").filter(Boolean)), typeof r.style == "object" && Object.assign(e.style, r.style), typeof r.id == "string" && e.setAttribute("id", r.id), e;
}
const pP = {}, ov = ut((r, e) => {
  const { children: t, target: n, ...o } = me("Portal", pP, r), [a, s] = Ee(!1), l = Ke(null);
  return ia(() => (s(!0), l.current = n ? typeof n == "string" ? document.querySelector(n) : n : hP(o), Cm(e, l.current), !n && l.current && document.body.appendChild(l.current), () => {
    !n && l.current && document.body.removeChild(l.current);
  }), [n]), !a || !l.current ? null : t0(/* @__PURE__ */ k.createElement(k.Fragment, null, t), l.current);
});
ov.displayName = "@mantine/core/Portal";
function iv({ withinPortal: r = !0, children: e, ...t }) {
  return r ? /* @__PURE__ */ k.createElement(ov, { ...t }, e) : /* @__PURE__ */ k.createElement(k.Fragment, null, e);
}
iv.displayName = "@mantine/core/OptionalPortal";
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
}, mg = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function gP({
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
    ...ls[r][mg[e]]
  } : {} : {
    transitionProperty: r.transitionProperty,
    ...o,
    ...r.common,
    ...r[mg[e]]
  };
}
function mP({
  duration: r,
  exitDuration: e,
  timingFunction: t,
  mounted: n,
  onEnter: o,
  onExit: a,
  onEntered: s,
  onExited: l
}) {
  const u = Qn(), f = Em(), h = u.respectReducedMotion ? f : !1, [p, m] = Ee(h ? 0 : r), [v, C] = Ee(n ? "entered" : "exited"), E = Ke(-1), _ = (R) => {
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
  return Eo(() => {
    _(n);
  }, [n]), ge(() => () => window.clearTimeout(E.current), []), {
    transitionDuration: p,
    transitionStatus: v,
    transitionTimingFunction: t || "ease"
  };
}
function av({
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
  const { transitionDuration: p, transitionStatus: m, transitionTimingFunction: v } = mP({
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
    gP({
      transition: e,
      duration: p,
      state: m,
      timingFunction: v
    })
  ));
}
av.displayName = "@mantine/core/Transition";
var sv = { dropdown: "m-38a85659", arrow: "m-a31dc6c1" };
const vP = {}, nd = xe((r, e) => {
  var _, R, A, S;
  const t = me("PopoverDropdown", vP, r), {
    className: n,
    style: o,
    vars: a,
    children: s,
    onKeyDownCapture: l,
    variant: u,
    classNames: f,
    styles: h,
    ...p
  } = t, m = rv(), v = BA({
    opened: m.opened,
    shouldReturnFocus: m.returnFocus
  }), C = m.withRoles ? {
    "aria-labelledby": m.getTargetId(),
    id: m.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, E = Mr(e, m.floating);
  return m.disabled ? null : /* @__PURE__ */ k.createElement(iv, { ...m.portalProps, withinPortal: m.withinPortal }, /* @__PURE__ */ k.createElement(
    av,
    {
      mounted: m.opened,
      ...m.transitionProps,
      transition: ((_ = m.transitionProps) == null ? void 0 : _.transition) || "fade",
      duration: ((R = m.transitionProps) == null ? void 0 : R.duration) ?? 150,
      keepMounted: m.keepMounted,
      exitDuration: typeof ((A = m.transitionProps) == null ? void 0 : A.exitDuration) == "number" ? m.transitionProps.exitDuration : (S = m.transitionProps) == null ? void 0 : S.duration
    },
    (I) => /* @__PURE__ */ k.createElement(nv, { active: m.trapFocus }, /* @__PURE__ */ k.createElement(
      Ae,
      {
        ...C,
        ...p,
        variant: u,
        ref: E,
        onKeyDownCapture: NA(m.onClose, {
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
        tv,
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
nd.classes = sv;
nd.displayName = "@mantine/core/PopoverDropdown";
const yP = {
  refProp: "ref",
  popupType: "dialog"
}, cv = xe((r, e) => {
  const { children: t, refProp: n, popupType: o, ...a } = me(
    "PopoverTarget",
    yP,
    r
  );
  if (!oa(t))
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const s = a, l = rv(), u = Mr(l.reference, t.ref, e), f = l.withRoles ? {
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
cv.displayName = "@mantine/core/PopoverTarget";
function CP({
  opened: r,
  floating: e,
  position: t,
  positionDependencies: n
}) {
  const [o, a] = Ee(0);
  ge(() => {
    if (e.refs.reference.current && e.refs.floating.current)
      return Vk(
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
function wP(r, e) {
  var n, o, a, s;
  const t = [Tk(r.offset)];
  return (n = r.middlewares) != null && n.shift && t.push(Ik({ limiter: Ak() })), (o = r.middlewares) != null && o.flip && t.push(Ek()), (a = r.middlewares) != null && a.inline && t.push(_k()), t.push(jk({ element: r.arrowRef, padding: r.arrowOffset })), ((s = r.middlewares) != null && s.size || r.width === "target") && t.push(
    Rk({
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
function EP(r) {
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
  }, a = cP({
    placement: r.position,
    middleware: wP(r, () => a)
  });
  return CP({
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
const bP = {
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
  zIndex: kA("popover"),
  __staticSelector: "Popover",
  width: "max-content"
}, _P = (r, { radius: e, shadow: t }) => ({
  dropdown: {
    "--popover-radius": e === void 0 ? void 0 : Io(e),
    "--popover-shadow": OA(t)
  }
});
function Jn(r) {
  var Nn, gt, Mt, Zn, Fr, _t;
  const e = me("Popover", bP, r), {
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
    trapFocus: F,
    onClose: ie,
    onOpen: j,
    onChange: re,
    zIndex: Z,
    radius: se,
    shadow: X,
    id: ce,
    defaultOpened: V,
    __staticSelector: J,
    withRoles: te,
    disabled: Ie,
    returnFocus: Qe,
    variant: ot,
    keepMounted: dt,
    vars: Yr,
    ...ln
  } = e, Yt = at({
    name: J,
    props: e,
    classes: sv,
    classNames: R,
    styles: A,
    unstyled: _,
    rootSelector: "dropdown",
    vars: Yr,
    varsResolver: _P
  }), ar = Ke(null), [un, sr] = Ee(null), [Ur, dn] = Ee(null), { dir: qt } = zu(), wr = Yn(ce), Ye = EP({
    middlewares: h,
    width: f,
    position: lP(qt, n),
    offset: typeof o == "number" ? o + (p ? m / 2 : 0) : o,
    arrowRef: ar,
    arrowOffset: v,
    onPositionChange: a,
    positionDependencies: s,
    opened: l,
    defaultOpened: V,
    onChange: re,
    onOpen: j,
    onClose: ie
  });
  LA(() => S && Ye.onClose(), q, [
    un,
    Ur
  ]);
  const Nt = $e(
    (tt) => {
      sr(tt), Ye.floating.refs.setReference(tt);
    },
    [Ye.floating.refs.setReference]
  ), Ot = $e(
    (tt) => {
      dn(tt), Ye.floating.refs.setFloating(tt);
    },
    [Ye.floating.refs.setFloating]
  );
  return /* @__PURE__ */ k.createElement(
    fP,
    {
      value: {
        returnFocus: Qe,
        disabled: Ie,
        controlled: Ye.controlled,
        reference: Nt,
        floating: Ot,
        x: Ye.floating.x,
        y: Ye.floating.y,
        arrowX: (Mt = (gt = (Nn = Ye.floating) == null ? void 0 : Nn.middlewareData) == null ? void 0 : gt.arrow) == null ? void 0 : Mt.x,
        arrowY: (_t = (Fr = (Zn = Ye.floating) == null ? void 0 : Zn.middlewareData) == null ? void 0 : Fr.arrow) == null ? void 0 : _t.y,
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
        trapFocus: F,
        withinPortal: I,
        portalProps: O,
        zIndex: Z,
        radius: se,
        shadow: X,
        closeOnEscape: L,
        onClose: Ye.onClose,
        onToggle: Ye.onToggle,
        getTargetId: () => `${wr}-target`,
        getDropdownId: () => `${wr}-dropdown`,
        withRoles: te,
        targetProps: ln,
        __staticSelector: J,
        classNames: R,
        styles: A,
        unstyled: _,
        variant: ot,
        keepMounted: dt,
        getStyles: Yt
      }
    },
    t
  );
}
Jn.Target = cv;
Jn.Dropdown = nd;
Jn.displayName = "@mantine/core/Popover";
Jn.extend = (r) => r;
var Vr = { root: "m-5ae2e3c", barsLoader: "m-7a2bd4cd", bar: "m-870bb79", "bars-loader-animation": "m-5d2b3b9d", dotsLoader: "m-4e3f22d7", dot: "m-870c4af", "loader-dots-animation": "m-aac34a1", ovalLoader: "m-b34414df", "oval-loader-animation": "m-f8e89c4b" };
const SP = ut(({ className: r, ...e }, t) => /* @__PURE__ */ k.createElement(Ae, { component: "span", className: kn(Vr.barsLoader, r), ...e, ref: t }, /* @__PURE__ */ k.createElement("span", { className: Vr.bar }), /* @__PURE__ */ k.createElement("span", { className: Vr.bar }), /* @__PURE__ */ k.createElement("span", { className: Vr.bar }))), TP = ut(({ className: r, ...e }, t) => /* @__PURE__ */ k.createElement(Ae, { component: "span", className: kn(Vr.dotsLoader, r), ...e, ref: t }, /* @__PURE__ */ k.createElement("span", { className: Vr.dot }), /* @__PURE__ */ k.createElement("span", { className: Vr.dot }), /* @__PURE__ */ k.createElement("span", { className: Vr.dot }))), IP = ut(({ className: r, ...e }, t) => /* @__PURE__ */ k.createElement(Ae, { component: "span", className: kn(Vr.ovalLoader, r), ...e, ref: t })), lv = {
  bars: SP,
  oval: IP,
  dots: TP
}, AP = {
  loaders: lv,
  type: "oval"
}, RP = (r, { size: e, color: t }) => ({
  root: {
    "--loader-size": Bt(e, "loader-size"),
    "--loader-color": t ? ji(t, r) : void 0
  }
}), rc = xe((r, e) => {
  const t = me("Loader", AP, r), {
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
    varsResolver: RP
  });
  return C ? /* @__PURE__ */ k.createElement(Ae, { ..._("root"), ref: e, ...E }, C) : /* @__PURE__ */ k.createElement(
    Ae,
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
rc.defaultLoaders = lv;
rc.classes = Vr;
rc.displayName = "@mantine/core/Loader";
const uv = ut(
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
uv.displayName = "@mantine/core/CloseIcon";
var dv = { root: "m-86a44da5", "root--subtle": "m-220c80f2" };
const kP = {
  variant: "subtle"
}, PP = (r, { size: e, radius: t, iconSize: n }) => ({
  root: {
    "--cb-size": Bt(e, "cb-size"),
    "--cb-radius": t === void 0 ? void 0 : Io(t),
    "--cb-icon-size": $(n)
  }
}), nc = aa((r, e) => {
  const t = me("CloseButton", kP, r), {
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
    classes: dv,
    classNames: u,
    styles: h,
    unstyled: p,
    vars: a,
    varsResolver: PP
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
    /* @__PURE__ */ k.createElement(uv, null),
    o
  );
});
nc.classes = dv;
nc.displayName = "@mantine/core/CloseButton";
function NP(r) {
  return Xl.toArray(r).filter(Boolean);
}
var fv = { root: "m-4081bf90" };
const OP = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, MP = (r, { grow: e, preventGrowOverflow: t, gap: n, align: o, justify: a, wrap: s }, { childWidth: l }) => ({
  root: {
    "--group-child-width": e && t ? l : void 0,
    "--group-gap": Bu(n),
    "--group-align": o,
    "--group-justify": a,
    "--group-wrap": s
  }
}), Ds = xe((r, e) => {
  const t = me("Group", OP, r), {
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
  } = t, S = NP(u), I = S.length, O = Bu(f ?? "md"), q = { childWidth: `calc(${100 / I}% - (${O} - ${O} / ${I}))` }, F = at({
    name: "Group",
    props: t,
    stylesCtx: q,
    className: o,
    style: a,
    classes: fv,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: E,
    varsResolver: MP
  });
  return /* @__PURE__ */ k.createElement(
    Ae,
    {
      ...F("root"),
      ref: e,
      variant: _,
      mod: { grow: v },
      size: R,
      ...A
    },
    S
  );
});
Ds.classes = fv;
Ds.displayName = "@mantine/core/Group";
const [xP, ua] = _A({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var Lr = { wrapper: "m-6c018570", input: "m-8fb7ebe7", section: "m-82577fc2", placeholder: "m-88bacfd0", root: "m-46b77525", label: "m-8fdc1311", required: "m-78a94662", error: "m-8f816625", description: "m-fe47ce59" };
const vg = {}, LP = (r, { size: e }) => ({
  description: {
    "--input-description-size": e === void 0 ? void 0 : `calc(${Nr(e)} - ${$(2)})`
  }
}), oc = xe((r, e) => {
  const t = me("InputDescription", vg, r), {
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
  } = me("InputDescription", vg, t), C = ua(), E = at({
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
    varsResolver: LP
  }), _ = p && (C == null ? void 0 : C.getStyles) || E;
  return /* @__PURE__ */ k.createElement(
    Ae,
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
const DP = {}, UP = (r, { size: e }) => ({
  error: {
    "--input-error-size": e === void 0 ? void 0 : `calc(${Nr(e)} - ${$(2)})`
  }
}), ic = xe((r, e) => {
  const t = me("InputError", DP, r), {
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
    varsResolver: UP
  }), E = ua(), _ = p && (E == null ? void 0 : E.getStyles) || C;
  return /* @__PURE__ */ k.createElement(
    Ae,
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
const yg = {
  labelElement: "label"
}, FP = (r, { size: e }) => ({
  label: {
    "--input-label-size": Nr(e),
    "--input-asterisk-color": void 0
  }
}), ac = xe((r, e) => {
  const t = me("InputLabel", yg, r), {
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
  } = me("InputLabel", yg, t), A = at({
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
    varsResolver: FP
  }), S = ua(), I = (S == null ? void 0 : S.getStyles) || A;
  return /* @__PURE__ */ k.createElement(
    Ae,
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
    p && /* @__PURE__ */ k.createElement("span", { ...I("required"), "aria-hidden": !0 }, " *")
  );
});
ac.classes = Lr;
ac.displayName = "@mantine/core/InputLabel";
const Cg = {}, od = xe((r, e) => {
  const t = me("InputPlaceholder", Cg, r), {
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
  } = me("InputPlaceholder", Cg, t), v = at({
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
    Ae,
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
od.classes = Lr;
od.displayName = "@mantine/core/InputPlaceholder";
function HP(r, { hasDescription: e, hasError: t }) {
  const n = r.findIndex((u) => u === "input"), o = r[n - 1], a = r[n + 1];
  return { offsetBottom: e && a === "description" || t && a === "error", offsetTop: e && o === "description" || t && o === "error" };
}
const BP = {
  labelElement: "label",
  inputContainer: (r) => r,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, KP = (r, { size: e }) => ({
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
}), id = xe((r, e) => {
  const t = me("InputWrapper", BP, r), {
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
    required: F,
    __stylesApiProps: ie,
    ...j
  } = t, re = at({
    name: ["InputWrapper", p],
    props: ie || t,
    classes: Lr,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: u,
    varsResolver: KP
  }), Z = {
    size: f,
    variant: h,
    __staticSelector: p
  }, se = Yn(q), X = typeof L == "boolean" ? L : F, ce = (S == null ? void 0 : S.id) || `${se}-error`, V = (A == null ? void 0 : A.id) || `${se}-description`, J = se, te = !!E && typeof E != "boolean", Ie = !!_, Qe = `${te ? ce : ""} ${Ie ? V : ""}`, ot = Qe.trim().length > 0 ? Qe.trim() : void 0, dt = (R == null ? void 0 : R.id) || `${se}-label`, Yr = C && /* @__PURE__ */ k.createElement(
    ac,
    {
      key: "label",
      labelElement: I,
      id: dt,
      htmlFor: J,
      required: X,
      ...Z,
      ...R
    },
    C
  ), ln = Ie && /* @__PURE__ */ k.createElement(
    oc,
    {
      key: "description",
      ...A,
      ...Z,
      size: (A == null ? void 0 : A.size) || Z.size,
      id: (A == null ? void 0 : A.id) || V
    },
    _
  ), Yt = /* @__PURE__ */ k.createElement(k.Fragment, { key: "input" }, m(O)), ar = te && /* @__PURE__ */ k.createElement(
    ic,
    {
      ...S,
      ...Z,
      size: (S == null ? void 0 : S.size) || Z.size,
      key: "error",
      id: (S == null ? void 0 : S.id) || ce
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
    xP,
    {
      value: {
        getStyles: re,
        describedBy: ot,
        inputId: J,
        labelId: dt,
        ...HP(v, { hasDescription: Ie, hasError: te })
      }
    },
    /* @__PURE__ */ k.createElement(
      Ae,
      {
        ref: e,
        variant: h,
        size: f,
        mod: { error: !!E },
        ...re("root"),
        ...j
      },
      un
    )
  );
});
id.classes = Lr;
id.displayName = "@mantine/core/InputWrapper";
const qP = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: !0,
  withErrorStyles: !0
}, $P = (r, e, t) => ({
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
  const t = me("Input", qP, r), {
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
    vars: F,
    pointer: ie,
    multiline: j,
    radius: re,
    id: Z,
    withAria: se,
    withErrorStyles: X,
    ...ce
  } = t, { styleProps: V, rest: J } = Xs(ce), te = ua(), Ie = { offsetBottom: te == null ? void 0 : te.offsetBottom, offsetTop: te == null ? void 0 : te.offsetTop }, Qe = at({
    name: ["Input", f],
    props: h || t,
    classes: Lr,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    stylesCtx: Ie,
    rootSelector: "wrapper",
    vars: F,
    varsResolver: $P
  }), ot = se ? {
    required: u,
    disabled: C,
    "aria-invalid": !!v,
    "aria-describedby": te == null ? void 0 : te.describedBy,
    id: (te == null ? void 0 : te.inputId) || Z
  } : {};
  return /* @__PURE__ */ k.createElement(
    Ae,
    {
      ...Qe("wrapper"),
      ...V,
      ...m,
      mod: {
        error: !!v && X,
        pointer: ie,
        disabled: C,
        multiline: j,
        "data-with-right-section": !!A,
        "data-with-left-section": !!E
      },
      variant: q,
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
      Ae,
      {
        component: "input",
        ...J,
        ...ot,
        ref: e,
        required: u,
        mod: { disabled: C, error: !!v && X },
        variant: q,
        ...Qe("input")
      }
    ),
    A && /* @__PURE__ */ k.createElement(
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
Kt.classes = Lr;
Kt.Wrapper = id;
Kt.Label = ac;
Kt.Error = ic;
Kt.Description = oc;
Kt.Placeholder = od;
Kt.displayName = "@mantine/core/Input";
function GP(r, e, t) {
  const n = me(r, e, t), {
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
    variant: F,
    vars: ie,
    ...j
  } = n, { styleProps: re, rest: Z } = Xs(j), se = {
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
    variant: F,
    id: A,
    ...R
  };
  return {
    ...Z,
    classNames: u,
    styles: f,
    unstyled: p,
    wrapperProps: { ...se, ...re },
    inputProps: {
      required: l,
      classNames: u,
      styles: f,
      unstyled: p,
      size: S,
      __staticSelector: m,
      __stylesApiProps: v || n,
      error: s,
      variant: F,
      id: A
    }
  };
}
const zP = {
  __staticSelector: "InputBase",
  withAria: !0
}, Xn = aa((r, e) => {
  const { inputProps: t, wrapperProps: n, ...o } = GP("InputBase", zP, r);
  return /* @__PURE__ */ k.createElement(Kt.Wrapper, { ...n }, /* @__PURE__ */ k.createElement(Kt, { ...t, ...o, ref: e }));
});
Xn.classes = { ...Kt.classes, ...Kt.Wrapper.classes };
Xn.displayName = "@mantine/core/InputBase";
const [VP, ad] = ci(
  "Accordion component was not found in the tree"
);
function sd({ style: r, size: e = 16, ...t }) {
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
sd.displayName = "@mantine/core/AccordionChevron";
const [WP, hv] = ci("Accordion.Item component was not found in the tree");
var da = { root: "m-9bdbb667", panel: "m-df78851f", content: "m-4ba554d4", itemTitle: "m-8fa820a0", control: "m-4ba585b8", "control--default": "m-6939a5e9", "control--contained": "m-4271d21b", label: "m-df3ffa0f", chevron: "m-3f35ae96", icon: "m-9bd771fe", item: "m-9bd7b098", "item--default": "m-fe19b709", "item--contained": "m-1f921b3b", "item--filled": "m-2cdf939a", "item--separated": "m-9f59b069" };
const jP = {}, cd = xe((r, e) => {
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
  } = me("AccordionControl", jP, r), { value: C } = hv(), E = ad(), _ = E.isItemActive(C), R = typeof E.order == "number", A = `h${E.order}`, S = /* @__PURE__ */ k.createElement(
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
      onKeyDown: AA({
        siblingSelector: "[data-accordion-control]",
        parentSelector: "[data-accordion]",
        activateOnFocus: !1,
        loop: E.loop,
        orientation: "vertical",
        onKeyDown: h
      })
    },
    /* @__PURE__ */ k.createElement(
      Ae,
      {
        component: "span",
        mod: { rotate: !E.disableChevronRotation && _, position: E.chevronPosition },
        ...E.getStyles("chevron", { classNames: t, styles: a })
      },
      l || E.chevron
    ),
    /* @__PURE__ */ k.createElement("span", { ...E.getStyles("label", { classNames: t, styles: a }) }, p),
    u && /* @__PURE__ */ k.createElement(
      Ae,
      {
        component: "span",
        mod: { "chevron-position": E.chevronPosition },
        ...E.getStyles("icon", { classNames: t, styles: a })
      },
      u
    )
  );
  return R ? /* @__PURE__ */ k.createElement(A, { ...E.getStyles("itemTitle", { classNames: t, styles: a }) }, S) : S;
});
cd.displayName = "@mantine/core/AccordionControl";
cd.classes = da;
const YP = {}, ld = xe((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, value: l, ...u } = me(
    "AccordionItem",
    YP,
    r
  ), f = ad();
  return /* @__PURE__ */ k.createElement(WP, { value: { value: l } }, /* @__PURE__ */ k.createElement(
    Ae,
    {
      ref: e,
      mod: { active: f.isItemActive(l) },
      ...f.getStyles("item", { className: n, classNames: t, styles: a, style: o, variant: f.variant }),
      ...u
    }
  ));
});
ld.displayName = "@mantine/core/AccordionItem";
ld.classes = da;
const QP = {}, ud = xe((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, children: l, ...u } = me(
    "AccordionPanel",
    QP,
    r
  ), { value: f } = hv(), h = ad();
  return /* @__PURE__ */ k.createElement(
    xm,
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
ud.displayName = "@mantine/core/AccordionPanel";
ud.classes = da;
const JP = {
  multiple: !1,
  disableChevronRotation: !1,
  chevronPosition: "right",
  variant: "default",
  chevron: /* @__PURE__ */ k.createElement(sd, null)
}, XP = (r, { transitionDuration: e, chevronSize: t, radius: n }) => ({
  root: {
    "--accordion-transition-duration": e === void 0 ? void 0 : `${e}ms`,
    "--accordion-chevron-size": t === void 0 ? void 0 : $(t),
    "--accordion-radius": n === void 0 ? void 0 : Io(n)
  }
});
function bt(r) {
  const e = me("Accordion", JP, r), {
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
  } = e, F = Yn(v), [ie, j] = bo({
    value: h,
    defaultValue: p,
    finalValue: f ? [] : null,
    onChange: m
  }), re = (X) => Array.isArray(ie) ? ie.includes(X) : X === ie, Z = (X) => {
    const ce = Array.isArray(ie) ? ie.includes(X) ? ie.filter((V) => V !== X) : [...ie, X] : X === ie ? null : X;
    j(ce);
  }, se = at({
    name: "Accordion",
    classes: da,
    props: e,
    className: n,
    style: o,
    classNames: t,
    styles: a,
    unstyled: s,
    vars: l,
    varsResolver: XP
  });
  return /* @__PURE__ */ k.createElement(
    VP,
    {
      value: {
        isItemActive: re,
        onChange: Z,
        getControlId: jp(
          `${F}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: jp(
          `${F}-panel`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        transitionDuration: E,
        disableChevronRotation: _,
        chevronPosition: R,
        order: S,
        chevron: I,
        loop: C,
        getStyles: se,
        variant: O,
        unstyled: s
      }
    },
    /* @__PURE__ */ k.createElement(Ae, { ...se("root"), id: F, ...q, variant: O, "data-accordion": !0 }, u)
  );
}
const ZP = (r) => r;
bt.extend = ZP;
bt.classes = da;
bt.displayName = "@mantine/core/Accordion";
bt.Item = ld;
bt.Panel = ud;
bt.Control = cd;
bt.Chevron = sd;
var pv = { root: "m-66836ed3", "root--filled": "m-12b2e6d5", "root--white": "m-cffd1856", wrapper: "m-a5d60502", body: "m-667c2793", title: "m-6a03f287", label: "m-698f4f23", icon: "m-667f2a6a", message: "m-7fa78076", closeButton: "m-87f54839" };
const eN = {}, tN = (r, { radius: e, color: t, variant: n }) => {
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
}, dd = xe((r, e) => {
  const t = me("Alert", eN, r), {
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
    closeButtonLabel: R,
    variant: A,
    ...S
  } = t, I = at({
    name: "Alert",
    classes: pv,
    props: t,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: u,
    varsResolver: tN
  }), O = Yn(v), L = p && `${O}-title` || void 0, q = `${O}-body`;
  return /* @__PURE__ */ k.createElement(
    Ae,
    {
      id: O,
      ...I("root", { variant: A }),
      variant: A,
      ref: e,
      ...S,
      role: "alert",
      "aria-describedby": q,
      "aria-labelledby": L
    },
    /* @__PURE__ */ k.createElement("div", { ...I("wrapper") }, C && /* @__PURE__ */ k.createElement("div", { ...I("icon") }, C), /* @__PURE__ */ k.createElement("div", { ...I("body") }, p && /* @__PURE__ */ k.createElement("div", { ...I("title"), "data-with-close-button": E || void 0 }, /* @__PURE__ */ k.createElement("span", { id: L, ...I("label") }, p)), m && /* @__PURE__ */ k.createElement("div", { id: q, ...I("message") }, m)), E && /* @__PURE__ */ k.createElement(
      nc,
      {
        ...I("closeButton"),
        onClick: _,
        variant: "transparent",
        size: 16,
        iconSize: 16,
        "aria-label": R,
        unstyled: l
      }
    ))
  );
});
dd.classes = pv;
dd.displayName = "@mantine/core/Alert";
function gv(r) {
  return typeof r == "string" ? { value: r, label: r } : typeof r == "number" ? { value: r.toString(), label: r.toString() } : "group" in r ? {
    group: r.group,
    items: r.items.map((e) => gv(e))
  } : r;
}
function mv(r) {
  return r ? r.map(gv) : [];
}
function fd(r) {
  return r.reduce((e, t) => "group" in t ? { ...e, ...fd(t.items) } : (e[t.value] = t, e), {});
}
var jt = { dropdown: "m-88b62a41", options: "m-b2821a6e", option: "m-92253aa5", search: "m-985517d8", empty: "m-2530cd1d", header: "m-858f94bd", footer: "m-82b967cb", group: "m-254f3e4f", groupLabel: "m-2bb2e9e5", chevron: "m-2943220b", optionsDropdownScrollArea: "m-71d052f9", optionsDropdownOption: "m-390b5f4", optionsDropdownCheckIcon: "m-8ee53fc2" };
const rN = {
  error: null
}, nN = (r, { size: e }) => ({
  chevron: {
    "--combobox-chevron-size": Bt(e, "combobox-chevron-size")
  }
}), hd = xe((r, e) => {
  const t = me("ComboboxChevron", rN, r), { size: n, error: o, style: a, className: s, classNames: l, styles: u, unstyled: f, vars: h, ...p } = t, m = at({
    name: "ComboboxChevron",
    classes: jt,
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
  return /* @__PURE__ */ k.createElement(
    Ae,
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
hd.classes = jt;
hd.displayName = "@mantine/core/ComboboxChevron";
const [oN, Dr] = ci(
  "Combobox component was not found in tree"
), vv = ut(
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
vv.displayName = "@mantine/core/ComboboxClearButton";
const iN = {}, pd = xe((r, e) => {
  const { classNames: t, styles: n, className: o, style: a, hidden: s, ...l } = me(
    "ComboboxDropdown",
    iN,
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
pd.classes = jt;
pd.displayName = "@mantine/core/ComboboxDropdown";
const aN = {
  refProp: "ref"
}, yv = xe((r, e) => {
  const { children: t, refProp: n } = me("ComboboxDropdownTarget", aN, r);
  if (Dr(), !oa(t))
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  return /* @__PURE__ */ k.createElement(Jn.Target, { ref: e, refProp: n }, t);
});
yv.displayName = "@mantine/core/ComboboxDropdownTarget";
const sN = {}, gd = xe((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, ...l } = me(
    "ComboboxEmpty",
    sN,
    r
  ), u = Dr();
  return /* @__PURE__ */ k.createElement(
    Ae,
    {
      ref: e,
      ...u.getStyles("empty", { className: n, classNames: t, styles: a, style: o }),
      ...l
    }
  );
});
gd.classes = jt;
gd.displayName = "@mantine/core/ComboboxEmpty";
function md({
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
const cN = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1
}, Cv = xe((r, e) => {
  const {
    children: t,
    refProp: n,
    withKeyboardNavigation: o,
    withAriaAttributes: a,
    withExpandedAttribute: s,
    targetType: l,
    ...u
  } = me("ComboboxEventsTarget", cN, r);
  if (!oa(t))
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const f = Dr(), h = md({
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
Cv.displayName = "@mantine/core/ComboboxEventsTarget";
const lN = {}, vd = xe((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, ...l } = me(
    "ComboboxFooter",
    lN,
    r
  ), u = Dr();
  return /* @__PURE__ */ k.createElement(
    Ae,
    {
      ref: e,
      ...u.getStyles("footer", { className: n, classNames: t, style: o, styles: a }),
      ...l
    }
  );
});
vd.classes = jt;
vd.displayName = "@mantine/core/ComboboxFooter";
const uN = {}, yd = xe((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, children: l, label: u, ...f } = me(
    "ComboboxGroup",
    uN,
    r
  ), h = Dr();
  return /* @__PURE__ */ k.createElement(
    Ae,
    {
      ref: e,
      ...h.getStyles("group", { className: n, classNames: t, style: o, styles: a }),
      ...f
    },
    u && /* @__PURE__ */ k.createElement("div", { ...h.getStyles("groupLabel", { classNames: t, styles: a }) }, u),
    l
  );
});
yd.classes = jt;
yd.displayName = "@mantine/core/ComboboxGroup";
const dN = {}, Cd = xe((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, ...l } = me(
    "ComboboxHeader",
    dN,
    r
  ), u = Dr();
  return /* @__PURE__ */ k.createElement(
    Ae,
    {
      ref: e,
      ...u.getStyles("header", { className: n, classNames: t, style: o, styles: a }),
      ...l
    }
  );
});
Cd.classes = jt;
Cd.displayName = "@mantine/core/ComboboxHeader";
const fN = {}, wd = xe((r, e) => {
  const t = me("ComboboxOption", fN, r), {
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
  } = t, _ = Dr(), R = Kg(), A = f || R;
  return /* @__PURE__ */ k.createElement(
    Ae,
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
wd.classes = jt;
wd.displayName = "@mantine/core/ComboboxOption";
const hN = {}, Ed = xe((r, e) => {
  const t = me("ComboboxOptions", hN, r), { classNames: n, className: o, style: a, styles: s, id: l, onMouseDown: u, labelledBy: f, ...h } = t, p = Dr(), m = Yn(l);
  return ge(() => {
    p.store.setListId(m);
  }, [m]), /* @__PURE__ */ k.createElement(
    Ae,
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
Ed.classes = jt;
Ed.displayName = "@mantine/core/ComboboxOptions";
const pN = {
  withAriaAttributes: !0,
  withKeyboardNavigation: !0
}, bd = xe((r, e) => {
  const t = me("ComboboxSearch", pN, r), {
    classNames: n,
    styles: o,
    unstyled: a,
    vars: s,
    withAriaAttributes: l,
    onKeyDown: u,
    withKeyboardNavigation: f,
    size: h,
    ...p
  } = t, m = Dr(), v = m.getStyles("search"), C = md({
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
bd.classes = jt;
bd.displayName = "@mantine/core/ComboboxSearch";
const gN = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1
}, wv = xe((r, e) => {
  const {
    children: t,
    refProp: n,
    withKeyboardNavigation: o,
    withAriaAttributes: a,
    withExpandedAttribute: s,
    targetType: l,
    ...u
  } = me("ComboboxTarget", gN, r);
  if (!oa(t))
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const f = Dr(), h = md({
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
wv.displayName = "@mantine/core/ComboboxTarget";
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
  const [l, u] = bo({
    value: e,
    defaultValue: r,
    finalValue: !1,
    onChange: t
  }), f = Ke(null), h = Ke(-1), p = Ke(null), m = Ke(null), v = Ke(-1), C = Ke(-1), E = Ke(-1), _ = $e(
    (V = "unknown") => {
      l || (u(!0), o == null || o(V));
    },
    [u, o, l]
  ), R = $e(
    (V = "unknown") => {
      l && (u(!1), n == null || n(V));
    },
    [u, n, l]
  ), A = $e(
    (V = "unknown") => {
      l ? R(V) : _(V);
    },
    [R, _, l]
  ), S = $e(() => {
    const V = document.querySelector(`#${f.current} [data-combobox-selected]`);
    V == null || V.removeAttribute("data-combobox-selected"), V == null || V.removeAttribute("aria-selected");
  }, []), I = $e(
    (V) => {
      const J = document.getElementById(f.current), te = J == null ? void 0 : J.querySelectorAll("[data-combobox-option]");
      if (!te)
        return null;
      const Ie = V >= te.length ? 0 : V < 0 ? te.length - 1 : V;
      return h.current = Ie, te != null && te[Ie] && !te[Ie].hasAttribute("data-combobox-disabled") ? (S(), te[Ie].setAttribute("data-combobox-selected", "true"), te[Ie].setAttribute("aria-selected", "true"), te[Ie].scrollIntoView({ block: "nearest", behavior: s }), te[Ie].id) : null;
    },
    [s, S]
  ), O = $e(() => {
    const V = document.querySelector(
      `#${f.current} [data-combobox-active]`
    );
    if (V) {
      const J = document.querySelectorAll(
        `#${f.current} [data-combobox-option]`
      ), te = Array.from(J).findIndex((Ie) => Ie === V);
      return I(te);
    }
    return I(0);
  }, [I]), L = $e(
    () => I(
      vN(
        h.current,
        document.querySelectorAll(`#${f.current} [data-combobox-option]`),
        a
      )
    ),
    [I, a]
  ), q = $e(
    () => I(
      mN(
        h.current,
        document.querySelectorAll(`#${f.current} [data-combobox-option]`),
        a
      )
    ),
    [I, a]
  ), F = $e(
    () => I(
      yN(
        document.querySelectorAll(`#${f.current} [data-combobox-option]`)
      )
    ),
    [I]
  ), ie = $e((V = "selected") => {
    E.current = window.setTimeout(() => {
      const J = document.querySelectorAll(
        `#${f.current} [data-combobox-option]`
      ), te = Array.from(J).findIndex(
        (Ie) => Ie.hasAttribute(`data-combobox-${V}`)
      );
      h.current = te;
    }, 0);
  }, []), j = $e(() => {
    h.current = -1, S();
  }, [S]), re = $e(() => {
    const V = document.querySelectorAll(
      `#${f.current} [data-combobox-option]`
    ), J = V == null ? void 0 : V[h.current];
    J == null || J.click();
  }, []), Z = $e((V) => {
    f.current = V;
  }, []), se = $e(() => {
    v.current = window.setTimeout(() => p.current.focus(), 0);
  }, []), X = $e(() => {
    C.current = window.setTimeout(() => m.current.focus(), 0);
  }, []), ce = $e(() => h.current, []);
  return ge(
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
    getSelectedOptionIndex: ce,
    selectOption: I,
    selectFirstOption: F,
    selectActiveOption: O,
    selectNextOption: L,
    selectPreviousOption: q,
    resetSelectedOption: j,
    updateSelectedOptionIndex: ie,
    listId: f.current,
    setListId: Z,
    clickSelectedOption: re,
    searchRef: p,
    focusSearchInput: se,
    targetRef: m,
    focusTarget: X
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
  const e = me("Combobox", CN, r), {
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
  } = e, E = _d(), _ = s || E, R = at({
    name: m || "Combobox",
    classes: jt,
    props: e,
    classNames: t,
    styles: n,
    unstyled: o,
    vars: l,
    varsResolver: wN
  });
  return /* @__PURE__ */ k.createElement(
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
const EN = (r) => r;
je.extend = EN;
je.classes = jt;
je.displayName = "@mantine/core/Combobox";
je.Target = wv;
je.Dropdown = pd;
je.Options = Ed;
je.Option = wd;
je.Search = bd;
je.Empty = gd;
je.Chevron = hd;
je.Footer = vd;
je.Header = Cd;
je.EventsTarget = Cv;
je.DropdownTarget = yv;
je.Group = yd;
je.ClearButton = vv;
var Ev = { root: "m-5f75b09e", body: "m-5f6e695e", labelWrapper: "m-d3ea56bb", label: "m-8ee546b8", description: "m-328f68c0", error: "m-8e8a99cc" };
const bN = Ev, bv = ut(
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
    const S = at({
      name: r,
      props: e,
      className: t,
      style: E,
      classes: Ev,
      classNames: n,
      styles: o,
      unstyled: a
    });
    return /* @__PURE__ */ k.createElement(
      Ae,
      {
        ...S("root"),
        ref: A,
        __vars: {
          "--label-fz": Nr(m),
          "--label-lh": Bt(m, "label-lh")
        },
        mod: { "label-position": v },
        variant: C,
        size: m,
        ...R
      },
      /* @__PURE__ */ k.createElement("div", { ...S("body") }, s, /* @__PURE__ */ k.createElement("div", { ...S("labelWrapper"), "data-disabled": h || void 0 }, l && /* @__PURE__ */ k.createElement("label", { ...S("label"), "data-disabled": h || void 0, htmlFor: f }, l), u && /* @__PURE__ */ k.createElement(Kt.Description, { size: m, __inheritStyles: !1, ...S("description") }, u), p && p !== "boolean" && /* @__PURE__ */ k.createElement(Kt.Error, { size: m, __inheritStyles: !1, ...S("error") }, p)))
    );
  }
);
bv.displayName = "@mantine/core/InlineInput";
const _v = To(null), _N = _v.Provider, SN = () => jn(_v);
function TN({ children: r, role: e }) {
  const t = ua();
  return t ? /* @__PURE__ */ k.createElement("div", { role: e, "aria-labelledby": t.labelId, "aria-describedby": t.describedBy }, r) : /* @__PURE__ */ k.createElement(k.Fragment, null, r);
}
const IN = {}, Sd = xe((r, e) => {
  const { value: t, defaultValue: n, onChange: o, size: a, wrapperProps: s, children: l, ...u } = me(
    "CheckboxGroup",
    IN,
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
  return /* @__PURE__ */ k.createElement(_N, { value: { value: f, onChange: p, size: a } }, /* @__PURE__ */ k.createElement(
    Kt.Wrapper,
    {
      size: a,
      ref: e,
      ...s,
      ...u,
      labelElement: "div",
      __staticSelector: "CheckboxGroup"
    },
    /* @__PURE__ */ k.createElement(TN, { role: "group" }, l)
  ));
});
Sd.classes = Kt.Wrapper.classes;
Sd.displayName = "@mantine/core/CheckboxGroup";
function Sv({ size: r, style: e, ...t }) {
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
function AN({ indeterminate: r, ...e }) {
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
  ) : /* @__PURE__ */ k.createElement(Sv, { ...e });
}
var Tv = { root: "m-bf2d988c", inner: "m-26062bec", input: "m-26063560", icon: "m-bf295423", "input--outline": "m-215c4542" };
const RN = {
  labelPosition: "right",
  icon: AN
}, kN = (r, { radius: e, color: t, size: n, iconColor: o, variant: a }) => {
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
  const t = me("Checkbox", RN, r), {
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
    rootRef: F,
    iconColor: ie,
    onChange: j,
    ...re
  } = t, Z = SN(), se = m || (Z == null ? void 0 : Z.size), X = q, ce = at({
    name: "Checkbox",
    props: t,
    classes: Tv,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: u,
    varsResolver: kN
  }), { styleProps: V, rest: J } = Xs(re), te = Yn(p), Ie = Z ? {
    checked: Z.value.includes(J.value),
    onChange: (Qe) => {
      Z.onChange(Qe), j == null || j(Qe);
    }
  } : {};
  return /* @__PURE__ */ k.createElement(
    bv,
    {
      ...ce("root"),
      __staticSelector: "Checkbox",
      __stylesApiProps: t,
      id: te,
      size: se,
      labelPosition: R,
      label: h,
      description: A,
      error: S,
      disabled: I,
      classNames: n,
      styles: s,
      unstyled: l,
      "data-checked": Ie.checked || _ || void 0,
      variant: O,
      ref: F,
      ...V,
      ...C
    },
    /* @__PURE__ */ k.createElement(Ae, { ...ce("inner"), mod: { "data-label-position": R } }, /* @__PURE__ */ k.createElement(
      Ae,
      {
        component: "input",
        id: te,
        ref: e,
        checked: _,
        disabled: I,
        mod: { error: !!S, indeterminate: L },
        ...ce("input", { focusable: !0, variant: O }),
        onChange: j,
        ...J,
        ...Ie,
        type: "checkbox"
      }
    ), /* @__PURE__ */ k.createElement(X, { indeterminate: L, ...ce("icon") }))
  );
});
fa.classes = { ...Tv, ...bN };
fa.displayName = "@mantine/core/Checkbox";
fa.Group = Sd;
function Qi(r) {
  return "group" in r;
}
function Iv({
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
      items: Iv({
        options: s.items,
        search: e,
        limit: t - o.length
      })
    }), Qi(s) || s.label.toLowerCase().includes(n) && o.push(s);
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
function Av(r, e = /* @__PURE__ */ new Set()) {
  if (Array.isArray(r))
    for (const t of r)
      if (Qi(t))
        Av(t.items, e);
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
function Rv({ data: r, withCheckIcon: e, value: t, checkIconPosition: n, unstyled: o }) {
  if (!Qi(r)) {
    const s = e && Vl(t, r.value) && /* @__PURE__ */ k.createElement(Sv, { className: jt.optionsDropdownCheckIcon });
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
    Rv,
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
function kv({
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
  Av(r);
  const _ = typeof o == "string" ? (n || Iv)({
    options: r,
    search: u ? o : "",
    limit: a ?? 1 / 0
  }) : r, R = PN(_), A = _.map((S) => /* @__PURE__ */ k.createElement(
    Rv,
    {
      data: S,
      key: Qi(S) ? S.group : S.value,
      withCheckIcon: f,
      value: h,
      checkIconPosition: p,
      unstyled: v
    }
  ));
  return /* @__PURE__ */ k.createElement(je.Dropdown, { hidden: e || t && R }, /* @__PURE__ */ k.createElement(je.Options, { labelledBy: C }, l ? /* @__PURE__ */ k.createElement(
    sa.Autosize,
    {
      mah: s ?? 220,
      type: "scroll",
      scrollbarSize: "var(--_combobox-padding)",
      offsetScrollbars: "y",
      className: jt.optionsDropdownScrollArea
    },
    A
  ) : A, R && m && /* @__PURE__ */ k.createElement(je.Empty, null, m)));
}
const NN = {}, Td = xe((r, e) => {
  const t = me("Autocomplete", NN, r), {
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
    limit: F,
    withScrollArea: ie,
    maxDropdownHeight: j,
    size: re,
    id: Z,
    ...se
  } = t, X = Yn(Z), ce = mv(E), V = fd(ce), [J, te] = bo({
    value: _,
    defaultValue: R,
    finalValue: "",
    onChange: C
  }), Ie = _d({
    opened: l,
    defaultOpened: u,
    onDropdownOpen: h,
    onDropdownClose: () => {
      f == null || f(), Ie.resetSelectedOption();
    }
  }), { resolvedClassNames: Qe, resolvedStyles: ot } = Rm({
    props: t,
    styles: o,
    classNames: n
  });
  return ge(() => {
    A && Ie.selectFirstOption();
  }, [A, J]), /* @__PURE__ */ k.createElement(
    je,
    {
      store: Ie,
      __staticSelector: "Autocomplete",
      classNames: Qe,
      styles: ot,
      unstyled: a,
      readOnly: O,
      onOptionSubmit: (dt) => {
        S == null || S(dt), te(V[dt].label), Ie.closeDropdown();
      },
      size: re,
      ...I
    },
    /* @__PURE__ */ k.createElement(je.Target, null, /* @__PURE__ */ k.createElement(
      Xn,
      {
        ref: e,
        ...se,
        size: re,
        __staticSelector: "Autocomplete",
        disabled: L,
        readOnly: O,
        value: J,
        onChange: (dt) => {
          te(dt.currentTarget.value), Ie.openDropdown(), A && Ie.selectFirstOption();
        },
        onFocus: (dt) => {
          Ie.openDropdown(), p == null || p(dt);
        },
        onBlur: (dt) => {
          Ie.closeDropdown(), m == null || m(dt);
        },
        onClick: (dt) => {
          Ie.openDropdown(), v == null || v(dt);
        },
        classNames: Qe,
        styles: ot,
        unstyled: a,
        id: X
      }
    )),
    /* @__PURE__ */ k.createElement(
      kv,
      {
        data: ce,
        hidden: O || L,
        filter: q,
        search: J,
        limit: F,
        hiddenWhenEmpty: !0,
        withScrollArea: ie,
        maxDropdownHeight: j,
        unstyled: a,
        labelId: `${X}-label`
      }
    )
  );
});
Td.classes = { ...Xn.classes, ...je.classes };
Td.displayName = "@mantine/core/Autocomplete";
var sc = { root: "m-77c9d27d", inner: "m-80f1301b", loader: "m-a25b86ee", label: "m-811560b9", section: "m-a74036a", group: "m-80d6d844" };
const wg = {
  orientation: "horizontal"
}, ON = (r, { borderWidth: e }) => ({
  group: { "--button-border-width": $(e) }
}), Id = xe((r, e) => {
  const t = me("ButtonGroup", wg, r), {
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
  } = me("ButtonGroup", wg, r), v = at({
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
  return /* @__PURE__ */ k.createElement(
    Ae,
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
  const t = me("Button", MN, r), {
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
  } = t, L = at({
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
  }), q = !!f, F = !!h;
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
        "with-left-section": q,
        "with-right-section": F
      },
      ...O
    },
    /* @__PURE__ */ k.createElement(Ae, { component: "span", ...L("loader"), "aria-hidden": !0 }, /* @__PURE__ */ k.createElement(
      rc,
      {
        color: "var(--button-color)",
        size: "calc(var(--button-height) / 1.8)",
        ...E
      }
    )),
    /* @__PURE__ */ k.createElement("span", { ...L("inner") }, f && /* @__PURE__ */ k.createElement(Ae, { component: "span", ...L("section"), mod: { position: "left" } }, f), /* @__PURE__ */ k.createElement(Ae, { component: "span", mod: { loading: C }, ...L("label") }, u), h && /* @__PURE__ */ k.createElement(Ae, { component: "span", ...L("section"), mod: { position: "right" } }, h))
  );
});
ha.classes = sc;
ha.displayName = "@mantine/core/Button";
ha.Group = Id;
var Pv = { root: "m-7485cace" };
const LN = {}, DN = (r, { size: e, fluid: t }) => ({
  root: {
    "--container-size": t ? void 0 : Bt(e, "container-size")
  }
}), Ad = xe((r, e) => {
  const t = me("Container", LN, r), { classNames: n, className: o, style: a, styles: s, unstyled: l, vars: u, fluid: f, ...h } = t, p = at({
    name: "Container",
    classes: Pv,
    props: t,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: u,
    varsResolver: DN
  });
  return /* @__PURE__ */ k.createElement(Ae, { ref: e, mod: { fluid: f }, ...p("root"), ...h });
});
Ad.classes = Pv;
Ad.displayName = "@mantine/core/Container";
const UN = {
  searchable: !1,
  withCheckIcon: !0,
  allowDeselect: !0,
  checkIconPosition: "left"
}, cc = xe((r, e) => {
  const t = me("Select", UN, r), {
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
    limit: F,
    withScrollArea: ie,
    maxDropdownHeight: j,
    size: re,
    searchable: Z,
    rightSection: se,
    checkIconPosition: X,
    withCheckIcon: ce,
    nothingFoundMessage: V,
    name: J,
    form: te,
    searchValue: Ie,
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
  } = t, dn = ps(() => mv(E), [E]), qt = ps(() => fd(dn), [dn]), wr = Yn(Yt), [Ye, Nt] = bo({
    value: _,
    defaultValue: R,
    finalValue: null,
    onChange: C
  }), Ot = typeof Ye == "string" ? qt[Ye] : void 0, [Nn, gt] = bo({
    value: Ie,
    defaultValue: Qe,
    finalValue: Ot ? Ot.label : "",
    onChange: ot
  }), Mt = _d({
    opened: l,
    defaultOpened: u,
    onDropdownOpen: h,
    onDropdownClose: () => {
      f == null || f(), Mt.resetSelectedOption();
    }
  }), { resolvedClassNames: Zn, resolvedStyles: Fr } = Rm({
    props: t,
    styles: o,
    classNames: n
  });
  ge(() => {
    A && Mt.selectFirstOption();
  }, [A, Ye]), ge(() => {
    _ === null && gt(""), typeof _ == "string" && Ot && gt(Ot.label);
  }, [_, Ot]);
  const _t = ar && !!Ye && !L && !O && /* @__PURE__ */ k.createElement(
    je.ClearButton,
    {
      size: re,
      ...un,
      onClear: () => {
        Nt(null), gt("");
      }
    }
  );
  return /* @__PURE__ */ k.createElement(k.Fragment, null, /* @__PURE__ */ k.createElement(
    je,
    {
      store: Mt,
      __staticSelector: "Select",
      classNames: Zn,
      styles: Fr,
      unstyled: a,
      readOnly: O,
      onOptionSubmit: (tt) => {
        S == null || S(tt);
        const Qr = dt && qt[tt].value === Ye ? null : qt[tt].value;
        Nt(Qr), gt(typeof Qr == "string" ? qt[tt].label : ""), Mt.closeDropdown();
      },
      size: re,
      ...I
    },
    /* @__PURE__ */ k.createElement(je.Target, { targetType: Z ? "input" : "button" }, /* @__PURE__ */ k.createElement(
      Xn,
      {
        id: wr,
        ref: e,
        rightSection: se || _t || /* @__PURE__ */ k.createElement(je.Chevron, { size: re, error: Yr, unstyled: a }),
        rightSectionPointerEvents: ln || (_t ? "all" : "none"),
        ...Ur,
        size: re,
        __staticSelector: "Select",
        disabled: L,
        readOnly: O || !Z,
        value: Nn,
        onChange: (tt) => {
          gt(tt.currentTarget.value), Mt.openDropdown(), A && Mt.selectFirstOption();
        },
        onFocus: (tt) => {
          Z && Mt.openDropdown(), p == null || p(tt);
        },
        onBlur: (tt) => {
          var Qr;
          Z && Mt.closeDropdown(), gt(Ye != null && ((Qr = qt[Ye]) == null ? void 0 : Qr.label) || ""), m == null || m(tt);
        },
        onClick: (tt) => {
          Z ? Mt.openDropdown() : Mt.toggleDropdown(), v == null || v(tt);
        },
        classNames: Zn,
        styles: Fr,
        unstyled: a,
        pointer: !Z,
        error: Yr
      }
    )),
    /* @__PURE__ */ k.createElement(
      kv,
      {
        data: dn,
        hidden: O || L,
        filter: q,
        search: Nn,
        limit: F,
        hiddenWhenEmpty: !Z || !V,
        withScrollArea: ie,
        maxDropdownHeight: j,
        filterOptions: Z && (Ot == null ? void 0 : Ot.label) !== Nn,
        value: Ye,
        checkIconPosition: X,
        withCheckIcon: ce,
        nothingFoundMessage: V,
        unstyled: a,
        labelId: `${wr}-label`
      }
    )
  ), /* @__PURE__ */ k.createElement(
    "input",
    {
      type: "hidden",
      name: J,
      value: Ye || "",
      form: te,
      disabled: L,
      ...sr
    }
  ));
});
cc.classes = { ...Xn.classes, ...je.classes };
cc.displayName = "@mantine/core/Select";
const FN = {}, Nv = xe((r, e) => {
  const { w: t, h: n, miw: o, mih: a, ...s } = me("Space", FN, r);
  return /* @__PURE__ */ k.createElement(Ae, { ref: e, ...s, w: t, miw: o ?? t, h: n, mih: a ?? n });
});
Nv.displayName = "@mantine/core/Space";
var Ov = { root: "m-6d731127" };
const HN = {
  gap: "md",
  align: "stretch",
  justify: "flex-start"
}, BN = (r, { gap: e, align: t, justify: n }) => ({
  root: {
    "--stack-gap": Bu(e),
    "--stack-align": t,
    "--stack-justify": n
  }
}), Rd = xe((r, e) => {
  const t = me("Stack", HN, r), {
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
    classes: Ov,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: u,
    varsResolver: BN
  });
  return /* @__PURE__ */ k.createElement(Ae, { ref: e, ...C("root"), variant: m, ...v });
});
Rd.classes = Ov;
Rd.displayName = "@mantine/core/Stack";
const KN = {}, Co = xe((r, e) => {
  const t = me("TextInput", KN, r);
  return /* @__PURE__ */ k.createElement(Xn, { component: "input", ref: e, ...t, __staticSelector: "TextInput" });
});
Co.classes = Xn.classes;
Co.displayName = "@mantine/core/TextInput";
const qN = ["h1", "h2", "h3", "h4", "h5", "h6"];
function $N(r, e) {
  const t = e !== void 0 ? e : `h${r}`;
  return qN.includes(t) ? {
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
const GN = {
  order: 1
}, zN = (r, { order: e, size: t, lineClamp: n }) => {
  const o = $N(e, t);
  return {
    root: {
      "--title-fw": o.fontWeight,
      "--title-lh": o.lineHeight,
      "--title-fz": o.fontSize,
      "--title-line-clamp": typeof n == "number" ? n.toString() : void 0
    }
  };
}, Us = xe((r, e) => {
  const t = me("Title", GN, r), {
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
    classes: Mv,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: f,
    varsResolver: zN
  });
  return [1, 2, 3, 4, 5, 6].includes(u) ? /* @__PURE__ */ k.createElement(
    Ae,
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
Us.classes = Mv;
Us.displayName = "@mantine/core/Title";
var xv = { exports: {} }, VN = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", WN = VN, jN = WN;
function Lv() {
}
function Dv() {
}
Dv.resetWarningCache = Lv;
var YN = function() {
  function r(n, o, a, s, l, u) {
    if (u !== jN) {
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
xv.exports = YN();
var QN = xv.exports;
const lo = /* @__PURE__ */ r0(QN);
var JN = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, XN = Object.defineProperty, ZN = Object.defineProperties, e1 = Object.getOwnPropertyDescriptors, Fs = Object.getOwnPropertySymbols, Uv = Object.prototype.hasOwnProperty, Fv = Object.prototype.propertyIsEnumerable, Eg = (r, e, t) => e in r ? XN(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, bg = (r, e) => {
  for (var t in e || (e = {}))
    Uv.call(e, t) && Eg(r, t, e[t]);
  if (Fs)
    for (var t of Fs(e))
      Fv.call(e, t) && Eg(r, t, e[t]);
  return r;
}, t1 = (r, e) => ZN(r, e1(e)), r1 = (r, e) => {
  var t = {};
  for (var n in r)
    Uv.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
  if (r != null && Fs)
    for (var n of Fs(r))
      e.indexOf(n) < 0 && Fv.call(r, n) && (t[n] = r[n]);
  return t;
}, Hv = (r, e, t) => {
  const n = ut(
    (o, a) => {
      var s = o, { color: l = "currentColor", size: u = 24, stroke: f = 2, children: h } = s, p = r1(s, ["color", "size", "stroke", "children"]);
      return fp(
        "svg",
        bg(t1(bg({
          ref: a
        }, JN), {
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
    color: lo.string,
    size: lo.oneOfType([lo.string, lo.number]),
    stroke: lo.oneOfType([lo.string, lo.number])
  }, n.displayName = `${e}`, n;
}, n1 = Hv("check", "IconCheck", [
  ["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]
]), o1 = Hv("dots", "IconDots", [
  ["path", { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
  ["path", { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]
]);
function i1({ indeterminate: r, ...e }) {
  return r ? /* @__PURE__ */ we.jsx(o1, { ...e }) : /* @__PURE__ */ we.jsx(n1, { ...e });
}
const a1 = {
  components: {
    Checkbox: fa.extend({
      defaultProps: {
        icon: i1,
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
}, s1 = {
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
class c1 {
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
class l1 extends c1 {
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
class Ji extends l1 {
  constructor(e) {
    super({ baseUrl: e });
  }
}
const Bv = {
  test: "https://test.bsdd.buildingsmart.org",
  production: "https://api.bsdd.buildingsmart.org"
}, u1 = "production", d1 = O0, Et = b0;
function f1(r) {
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
function h1(r) {
  var e;
  return {
    name: r.name,
    code: r.name,
    uri: r.location,
    dictionaryUri: (e = r.referencedSource) == null ? void 0 : e.location
  };
}
function p1(r) {
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
var g1 = /* @__PURE__ */ (() => typeof Symbol == "function" && Symbol.observable || "@@observable")(), Sg = g1, Wl = () => Math.random().toString(36).substring(7).split("").join("."), m1 = {
  INIT: `@@redux/INIT${Wl()}`,
  REPLACE: `@@redux/REPLACE${Wl()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Wl()}`
}, Hs = m1;
function kd(r) {
  if (typeof r != "object" || r === null)
    return !1;
  let e = r;
  for (; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(r) === e || Object.getPrototypeOf(r) === null;
}
function Kv(r, e, t) {
  if (typeof r != "function")
    throw new Error(At(2));
  if (typeof e == "function" && typeof t == "function" || typeof t == "function" && typeof arguments[3] == "function")
    throw new Error(At(0));
  if (typeof e == "function" && typeof t > "u" && (t = e, e = void 0), typeof t < "u") {
    if (typeof t != "function")
      throw new Error(At(1));
    return t(Kv)(r, e);
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
    if (!kd(_))
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
    type: Hs.INIT
  }), {
    dispatch: m,
    subscribe: p,
    getState: h,
    replaceReducer: v,
    [Sg]: C
  };
}
function v1(r) {
  Object.keys(r).forEach((e) => {
    const t = r[e];
    if (typeof t(void 0, {
      type: Hs.INIT
    }) > "u")
      throw new Error(At(12));
    if (typeof t(void 0, {
      type: Hs.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(At(13));
  });
}
function y1(r) {
  const e = Object.keys(r), t = {};
  for (let a = 0; a < e.length; a++) {
    const s = e[a];
    typeof r[s] == "function" && (t[s] = r[s]);
  }
  const n = Object.keys(t);
  let o;
  try {
    v1(t);
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
function Bs(...r) {
  return r.length === 0 ? (e) => e : r.length === 1 ? r[0] : r.reduce((e, t) => (...n) => e(t(...n)));
}
function C1(...r) {
  return (e) => (t, n) => {
    const o = e(t, n);
    let a = () => {
      throw new Error(At(15));
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
function w1(r) {
  return kd(r) && "type" in r && typeof r.type == "string";
}
var qv = Symbol.for("immer-nothing"), Tg = Symbol.for("immer-draftable"), yr = Symbol.for("immer-state");
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
  return r ? $v(r) || Array.isArray(r) || !!r[Tg] || !!((e = r.constructor) != null && e[Tg]) || uc(r) || dc(r) : !1;
}
var E1 = Object.prototype.constructor.toString();
function $v(r) {
  if (!r || typeof r != "object")
    return !1;
  const e = ai(r);
  if (e === null)
    return !0;
  const t = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
  return t === Object ? !0 : typeof t == "function" && Function.toString.call(t) === E1;
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
function Eu(r, e) {
  return lc(r) === 2 ? r.has(e) : Object.prototype.hasOwnProperty.call(r, e);
}
function Gv(r, e, t) {
  const n = lc(r);
  n === 2 ? r.set(e, t) : n === 3 ? r.add(t) : r[e] = t;
}
function b1(r, e) {
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
function bu(r, e) {
  if (uc(r))
    return new Map(r);
  if (dc(r))
    return new Set(r);
  if (Array.isArray(r))
    return Array.prototype.slice.call(r);
  if (!e && $v(r))
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
function Pd(r, e = !1) {
  return fc(r) || Wn(r) || !Rn(r) || (lc(r) > 1 && (r.set = r.add = r.clear = r.delete = _1), Object.freeze(r), e && Xi(r, (t, n) => Pd(n, !0))), r;
}
function _1() {
  Gr(2);
}
function fc(r) {
  return Object.isFrozen(r);
}
var S1 = {};
function So(r) {
  const e = S1[r];
  return e || Gr(0, r), e;
}
var Zi;
function zv() {
  return Zi;
}
function T1(r, e) {
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
  e && (So("Patches"), r.patches_ = [], r.inversePatches_ = [], r.patchListener_ = e);
}
function _u(r) {
  Su(r), r.drafts_.forEach(I1), r.drafts_ = null;
}
function Su(r) {
  r === Zi && (Zi = r.parent_);
}
function Ag(r) {
  return Zi = T1(Zi, r);
}
function I1(r) {
  const e = r[yr];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : e.revoked_ = !0;
}
function Rg(r, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const t = e.drafts_[0];
  return r !== void 0 && r !== t ? (t[yr].modified_ && (_u(e), Gr(4)), Rn(r) && (r = Ks(e, r), e.parent_ || qs(e, r)), e.patches_ && So("Patches").generateReplacementPatches_(
    t[yr].base_,
    r,
    e.patches_,
    e.inversePatches_
  )) : r = Ks(e, t, []), _u(e), e.patches_ && e.patchListener_(e.patches_, e.inversePatches_), r !== qv ? r : void 0;
}
function Ks(r, e, t) {
  if (fc(e))
    return e;
  const n = e[yr];
  if (!n)
    return Xi(
      e,
      (o, a) => kg(r, n, e, o, a, t)
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
      (l, u) => kg(r, n, o, l, u, t, s)
    ), qs(r, o, !1), t && r.patches_ && So("Patches").generatePatches_(
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
    !Eu(e.assigned_, n) ? a.concat(n) : void 0, u = Ks(r, o, l);
    if (Gv(t, n, u), Wn(u))
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
  !r.parent_ && r.immer_.autoFreeze_ && r.canAutoFreeze_ && Pd(e, t);
}
function A1(r, e) {
  const t = Array.isArray(r), n = {
    type_: t ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: e ? e.scope_ : zv(),
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
  let o = n, a = Nd;
  t && (o = [n], a = ea);
  const { revoke: s, proxy: l } = Proxy.revocable(o, a);
  return n.draft_ = l, n.revoke_ = s, l;
}
var Nd = {
  get(r, e) {
    if (e === yr)
      return r;
    const t = fo(r);
    if (!Eu(t, e))
      return R1(r, t, e);
    const n = t[e];
    return r.finalized_ || !Rn(n) ? n : n === jl(r.base_, e) ? (Yl(r), r.copy_[e] = Iu(n, r)) : n;
  },
  has(r, e) {
    return e in fo(r);
  },
  ownKeys(r) {
    return Reflect.ownKeys(fo(r));
  },
  set(r, e, t) {
    const n = Vv(fo(r), e);
    if (n != null && n.set)
      return n.set.call(r.draft_, t), !0;
    if (!r.modified_) {
      const o = jl(fo(r), e), a = o == null ? void 0 : o[yr];
      if (a && a.base_ === t)
        return r.copy_[e] = t, r.assigned_[e] = !1, !0;
      if (b1(t, o) && (t !== void 0 || Eu(r.base_, e)))
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
    return ai(r.base_);
  },
  setPrototypeOf() {
    Gr(12);
  }
}, ea = {};
Xi(Nd, (r, e) => {
  ea[r] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
});
ea.deleteProperty = function(r, e) {
  return ea.set.call(this, r, e, void 0);
};
ea.set = function(r, e, t) {
  return Nd.set.call(this, r[0], e, t, r[0]);
};
function jl(r, e) {
  const t = r[yr];
  return (t ? fo(t) : r)[e];
}
function R1(r, e, t) {
  var o;
  const n = Vv(e, t);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = n.get) == null ? void 0 : o.call(r.draft_)
  ) : void 0;
}
function Vv(r, e) {
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
function Tu(r) {
  r.modified_ || (r.modified_ = !0, r.parent_ && Tu(r.parent_));
}
function Yl(r) {
  r.copy_ || (r.copy_ = bu(
    r.base_,
    r.scope_.immer_.useStrictShallowCopy_
  ));
}
var k1 = class {
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
        const a = Ag(this), s = Iu(e, void 0);
        let l = !0;
        try {
          o = t(s), l = !1;
        } finally {
          l ? _u(a) : Su(a);
        }
        return Ig(a, n), Rg(o, a);
      } else if (!e || typeof e != "object") {
        if (o = t(e), o === void 0 && (o = e), o === qv && (o = void 0), this.autoFreeze_ && Pd(o, !0), n) {
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
    Rn(r) || Gr(8), Wn(r) && (r = Wv(r));
    const e = Ag(this), t = Iu(r, void 0);
    return t[yr].isManual_ = !0, Su(e), t;
  }
  finishDraft(r, e) {
    const t = r && r[yr];
    (!t || !t.isManual_) && Gr(9);
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
    const n = So("Patches").applyPatches_;
    return Wn(r) ? n(r, e) : this.produce(
      r,
      (o) => n(o, e)
    );
  }
};
function Iu(r, e) {
  const t = uc(r) ? So("MapSet").proxyMap_(r, e) : dc(r) ? So("MapSet").proxySet_(r, e) : A1(r, e);
  return (e ? e.scope_ : zv()).drafts_.push(t), t;
}
function Wv(r) {
  return Wn(r) || Gr(10, r), jv(r);
}
function jv(r) {
  if (!Rn(r) || fc(r))
    return r;
  const e = r[yr];
  let t;
  if (e) {
    if (!e.modified_)
      return e.base_;
    e.finalized_ = !0, t = bu(r, e.scope_.immer_.useStrictShallowCopy_);
  } else
    t = bu(r, !0);
  return Xi(t, (n, o) => {
    Gv(t, n, jv(o));
  }), e && (e.finalized_ = !1), t;
}
var Cr = new k1(), Yv = Cr.produce;
Cr.produceWithPatches.bind(
  Cr
);
Cr.setAutoFreeze.bind(Cr);
Cr.setUseStrictShallowCopy.bind(Cr);
Cr.applyPatches.bind(Cr);
Cr.createDraft.bind(Cr);
Cr.finishDraft.bind(Cr);
function P1(r, e = `expected a function, instead received ${typeof r}`) {
  if (typeof r != "function")
    throw new TypeError(e);
}
function N1(r, e = `expected an object, instead received ${typeof r}`) {
  if (typeof r != "object")
    throw new TypeError(e);
}
function O1(r, e = "expected all items to be functions, instead received the following types: ") {
  if (!r.every((t) => typeof t == "function")) {
    const t = r.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${e}[${t}]`);
  }
}
var Pg = (r) => Array.isArray(r) ? r : [r];
function M1(r) {
  const e = Array.isArray(r[0]) ? r[0] : r;
  return O1(
    e,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), e;
}
function x1(r, e) {
  const t = [], { length: n } = r;
  for (let o = 0; o < n; o++)
    t.push(r[o].apply(null, e));
  return t;
}
var L1 = class {
  constructor(r) {
    this.value = r;
  }
  deref() {
    return this.value;
  }
}, D1 = typeof WeakRef < "u" ? WeakRef : L1, U1 = 0, Ng = 1;
function us() {
  return {
    s: U1,
    v: void 0,
    o: null,
    p: null
  };
}
function Od(r, e = {}) {
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
    if (l.s === Ng ? h = l.v : (h = r.apply(null, arguments), a++), f.s = Ng, n) {
      const m = ((p = o == null ? void 0 : o.deref) == null ? void 0 : p.call(o)) ?? o;
      m != null && n(m, h) && (h = m, a !== 0 && a--), o = typeof h == "object" && h !== null || typeof h == "function" ? new D1(h) : h;
    }
    return f.v = h, h;
  }
  return s.clearCache = () => {
    t = us(), s.resetResultsCount();
  }, s.resultsCount = () => a, s.resetResultsCount = () => {
    a = 0;
  }, s;
}
function Qv(r, ...e) {
  const t = typeof r == "function" ? {
    memoize: r,
    memoizeOptions: e
  } : r, n = (...o) => {
    let a = 0, s = 0, l, u = {}, f = o.pop();
    typeof f == "object" && (u = f, f = o.pop()), P1(
      f,
      `createSelector expects an output function after the inputs, but received: [${typeof f}]`
    );
    const h = {
      ...t,
      ...u
    }, {
      memoize: p,
      memoizeOptions: m = [],
      argsMemoize: v = Od,
      argsMemoizeOptions: C = [],
      devModeChecks: E = {}
    } = h, _ = Pg(m), R = Pg(C), A = M1(o), S = p(function() {
      return a++, f.apply(
        null,
        arguments
      );
    }, ..._), I = v(function() {
      s++;
      const L = x1(
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
var pa = /* @__PURE__ */ Qv(Od), F1 = Object.assign(
  (r, e = pa) => {
    N1(
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
  { withTypes: () => F1 }
);
function Jv(r) {
  return ({ dispatch: t, getState: n }) => (o) => (a) => typeof a == "function" ? a(t, n, r) : o(a);
}
var H1 = Jv(), B1 = Jv, K1 = (...r) => {
  const e = Qv(...r), t = Object.assign((...n) => {
    const o = e(...n), a = (s, ...l) => o(Wn(s) ? Wv(s) : s, ...l);
    return Object.assign(a, o), a;
  }, {
    withTypes: () => t
  });
  return t;
};
K1(Od);
var q1 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Bs : Bs.apply(null, arguments);
}, $1 = (r) => r && typeof r.match == "function";
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
  return t.toString = () => `${r}`, t.type = r, t.match = (n) => w1(n) && n.type === r, t;
}
var Xv = class Li extends Array {
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
function Og(r) {
  return Rn(r) ? Yv(r, () => {
  }) : r;
}
function Mg(r, e, t) {
  if (r.has(e)) {
    let o = r.get(e);
    return t.update && (o = t.update(o, e, r), r.set(e, o)), o;
  }
  if (!t.insert)
    throw new Error(or(10));
  const n = t.insert(e, r);
  return r.set(e, n), n;
}
function G1(r) {
  return typeof r == "boolean";
}
var z1 = () => function(e) {
  const {
    thunk: t = !0,
    immutableCheck: n = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: a = !0
  } = e ?? {};
  let s = new Xv();
  return t && (G1(t) ? s.push(H1) : s.push(B1(t.extraArgument))), s;
}, V1 = "RTK_autoBatch", Zv = (r) => (e) => {
  setTimeout(e, r);
}, W1 = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Zv(10), j1 = (r = {
  type: "raf"
}) => (e) => (...t) => {
  const n = e(...t);
  let o = !0, a = !1, s = !1;
  const l = /* @__PURE__ */ new Set(), u = r.type === "tick" ? queueMicrotask : r.type === "raf" ? W1 : r.type === "callback" ? r.queueNotification : Zv(r.timeout), f = () => {
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
        return o = !((p = h == null ? void 0 : h.meta) != null && p[V1]), a = !o, a && (s || (s = !0, u(f))), n.dispatch(h);
      } finally {
        o = !0;
      }
    }
  });
}, Y1 = (r) => function(t) {
  const {
    autoBatch: n = !0
  } = t ?? {};
  let o = new Xv(r);
  return n && o.push(j1(typeof n == "object" ? n : void 0)), o;
}, Q1 = !0;
function J1(r) {
  const e = z1(), {
    reducer: t = void 0,
    middleware: n,
    devTools: o = !0,
    preloadedState: a = void 0,
    enhancers: s = void 0
  } = r || {};
  let l;
  if (typeof t == "function")
    l = t;
  else if (kd(t))
    l = y1(t);
  else
    throw new Error(or(1));
  let u;
  typeof n == "function" ? u = n(e) : u = e();
  let f = Bs;
  o && (f = q1({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !Q1,
    ...typeof o == "object" && o
  }));
  const h = C1(...u), p = Y1(h);
  let m = typeof s == "function" ? s(p) : p();
  const v = f(...m);
  return Kv(l, a, v);
}
function ey(r) {
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
function X1(r) {
  return typeof r == "function";
}
function Z1(r, e) {
  let [t, n, o] = ey(e), a;
  if (X1(r))
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
          if (Rn(h))
            return Yv(h, (m) => p(m, u));
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
var eO = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", ty = (r = 21) => {
  let e = "", t = r;
  for (; t--; )
    e += eO[Math.random() * 64 | 0];
  return e;
}, tO = (r, e) => $1(r) ? r.match(e) : r(e);
function rO(...r) {
  return (e) => r.some((t) => tO(t, e));
}
var nO = ["name", "message", "stack", "code"], Ql = class {
  constructor(r, e) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Vt(this, "_type");
    this.payload = r, this.meta = e;
  }
}, xg = class {
  constructor(r, e) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Vt(this, "_type");
    this.payload = r, this.meta = e;
  }
}, oO = (r) => {
  if (typeof r == "object" && r !== null) {
    const e = {};
    for (const t of nO)
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
      error: (n && n.serializeError || oO)(u || "Rejected"),
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
        const m = n != null && n.idGenerator ? n.idGenerator(u) : ty(), v = new AbortController();
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
            if (aO(L) && (L = await L), L === !1 || v.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const q = new Promise((F, ie) => {
              C = () => {
                ie({
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
              rejectWithValue: (F, ie) => new Ql(F, ie),
              fulfillWithValue: (F, ie) => new xg(F, ie)
            })).then((F) => {
              if (F instanceof Ql)
                throw F;
              return F instanceof xg ? o(F.payload, m, u, F.meta) : o(F, m, u);
            })]);
          } catch (L) {
            A = L instanceof Ql ? s(null, m, u, L.payload, L.meta) : s(L, m, u);
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
            return R.then(iO);
          }
        });
      };
    }
    return Object.assign(l, {
      pending: a,
      rejected: s,
      fulfilled: o,
      settled: rO(s, o),
      typePrefix: e
    });
  }
  return r.withTypes = () => r, r;
})();
function iO(r) {
  if (r.meta && r.meta.rejectedWithValue)
    throw r.payload;
  if (r.error)
    throw r.error;
  return r.payload;
}
function aO(r) {
  return r !== null && typeof r == "object" && typeof r.then == "function";
}
var sO = Symbol.for("rtk-slice-createasyncthunk");
function cO(r, e) {
  return `${r}/${e}`;
}
function lO({
  creators: r
} = {}) {
  var t;
  const e = (t = r == null ? void 0 : r.asyncThunk) == null ? void 0 : t[sO];
  return function(o) {
    const {
      name: a,
      reducerPath: s = a
    } = o;
    if (!a)
      throw new Error(or(11));
    typeof process < "u";
    const l = (typeof o.reducers == "function" ? o.reducers(dO()) : o.reducers) || {}, u = Object.keys(l), f = {
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
        type: cO(a, S),
        createNotation: typeof o.reducers == "function"
      };
      hO(I) ? gO(O, I, h, e) : fO(O, I, h);
    });
    function p() {
      const [S = {}, I = [], O = void 0] = typeof o.extraReducers == "function" ? ey(o.extraReducers) : [o.extraReducers], L = {
        ...S,
        ...f.sliceCaseReducersByType
      };
      return Z1(o.initialState, (q) => {
        for (let F in L)
          q.addCase(F, L[F]);
        for (let F of f.sliceMatchers)
          q.addMatcher(F.matcher, F.reducer);
        for (let F of I)
          q.addMatcher(F.matcher, F.reducer);
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
        let F = q[S];
        return typeof F > "u" && I && (F = _()), F;
      }
      function L(q = m) {
        const F = Mg(v, I, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Mg(F, q, {
          insert: () => {
            const ie = {};
            for (const [j, re] of Object.entries(o.selectors ?? {}))
              ie[j] = uO(re, q, _, I);
            return ie;
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
function uO(r, e, t, n) {
  function o(a, ...s) {
    let l = e(a);
    return typeof l > "u" && n && (l = t()), r(l, ...s);
  }
  return o.unwrapped = r, o;
}
var hc = lO();
function dO() {
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
function fO({
  type: r,
  reducerName: e,
  createNotation: t
}, n, o) {
  let a, s;
  if ("reducer" in n) {
    if (t && !pO(n))
      throw new Error(or(17));
    a = n.reducer, s = n.prepare;
  } else
    a = n;
  o.addCase(r, a).exposeCaseReducer(e, a).exposeAction(e, s ? an(r, s) : an(r));
}
function hO(r) {
  return r._reducerDefinitionType === "asyncThunk";
}
function pO(r) {
  return r._reducerDefinitionType === "reducerWithPrepare";
}
function gO({
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
var mO = (r, e) => {
  if (typeof r != "function")
    throw new Error(or(32));
}, Md = "listenerMiddleware", vO = (r) => {
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
  return mO(a), {
    predicate: o,
    type: e,
    effect: a
  };
}, yO = Object.assign((r) => {
  const {
    type: e,
    predicate: t,
    effect: n
  } = vO(r);
  return {
    id: ty(),
    effect: n,
    type: e,
    predicate: t,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(or(22));
    }
  };
}, {
  withTypes: () => yO
}), CO = Object.assign(an(`${Md}/add`), {
  withTypes: () => CO
});
an(`${Md}/removeAll`);
var wO = Object.assign(an(`${Md}/remove`), {
  withTypes: () => wO
});
function or(r) {
  return `Minified Redux Toolkit error #${r}; visit https://redux-toolkit.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `;
}
const EO = {
  bsddApiEnvironment: null,
  mainDictionary: null,
  ifcDictionary: null,
  filterDictionaries: [],
  language: "en-GB",
  includeTestDictionaries: null
}, Lg = (r, e) => {
  r.language = e.payload, kt.changeLanguage(e.payload);
}, ry = an("settings/setSettings"), ny = hc({
  name: "settings",
  initialState: EO,
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
      ry,
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
}), Au = (r) => {
  const e = r.settings.bsddApiEnvironment;
  return e !== null ? Bv[e] : null;
}, oy = pa(
  (r) => r.settings.mainDictionary,
  (r) => r.settings.ifcDictionary,
  (r) => r.settings.filterDictionaries,
  (r, e, t) => {
    const n = [r, e, ...t].filter(Boolean), o = new Map(n.map((a) => [a.ifcClassification.location, a]));
    return Array.from(o.values());
  }
), xd = (r) => r.settings.mainDictionary, Ld = (r) => r.settings.language, bO = (r) => r.settings.includeTestDictionaries, iy = pa(
  oy,
  (r) => r.map((e) => e.ifcClassification.location)
), _O = pa(
  xd,
  (r) => r ? r.ifcClassification.location : null
);
ny.actions;
const SO = ny.reducer, Ru = 500, TO = 500;
let Xo = null, fs = {};
const Dg = {
  classes: {},
  dictionaries: {},
  dictionaryClasses: {},
  loaded: !1
}, IO = (r) => {
  const e = Au(r);
  return e && (!Xo || Xo.baseUrl !== e) && (Xo = new Ji(e)), Xo;
}, Ug = ui("bsdd/fetchDictionaries", ({ bsddApiEnvironment: r, includeTestDictionaries: e }, t) => {
  if (!r)
    return t.rejectWithValue("No bsddApiEnvironment provided");
  const n = new Ji(r), o = TO;
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
}), AO = ui("bsdd/fetchDictionaries", async ({ bsddApiEnvironment: r, dictionaryUris: e }, t) => {
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
async function Fg(r, e, t, n) {
  console.log("languageCode", n);
  const o = await r.api.dictionaryV1ClassesList({
    Uri: e,
    UseNestedClasses: !1,
    ClassType: "Class",
    Offset: t,
    Limit: Ru,
    languageCode: n || void 0
  });
  if (!o.ok)
    throw new Error(`HTTP error! status: ${o.status}`);
  return o.data;
}
const RO = async (r, e, t) => {
  const n = [];
  let o = 0;
  const a = await Fg(r, e, o, t), s = a.classesTotalCount;
  if (s == null)
    throw new Error("Total count is null or undefined");
  n.push(...a.classes ?? []);
  const l = [];
  for (o = Ru; o < s; o += Ru)
    l.push(Fg(r, e, o, t));
  return (await Promise.all(l)).forEach((f) => {
    n.push(...f.classes ?? []);
  }), n;
}, ay = ui(
  "bsdd/fetchDictionaryClasses",
  async ({ location: r, languageCode: e }, { getState: t, dispatch: n }) => {
    const o = t();
    if (o.bsdd.dictionaryClasses[r])
      return o.bsdd.dictionaryClasses[r];
    if (fs[r])
      return fs[r];
    const a = IO(o);
    if (!a)
      throw new Error("BsddApi is not initialized");
    const s = RO(a, r, e).then((l) => (n({ type: "bsdd/addDictionaryClasses", payload: { uri: r, data: l } }), l)).finally(() => {
      delete fs[r];
    });
    return fs[r] = s, s;
  }
), kO = ui(
  "bsdd/fetchAndStoreAllDictionaryClasses",
  async (r, { dispatch: e, rejectWithValue: t }) => {
    const { dictionaryUris: n, languageCode: o } = r;
    if (!n || n.length === 0)
      return t("No dictionary URIs provided");
    try {
      return await Promise.all(n.map((a) => e(ay({ location: a, languageCode: o })))), "Successfully fetched and stored all dictionary classes";
    } catch {
      return t("Failed to fetch dictionary classes");
    }
  }
), sy = ui(
  "bsdd/updateDictionaries",
  async (r) => r
), cy = hc({
  name: "bsdd",
  initialState: Dg,
  reducers: {
    resetState: () => Dg,
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
    r.addCase(Ug.pending, (e) => {
      e.loaded = !1;
    }).addCase(
      Ug.fulfilled,
      (e, t) => {
        e.dictionaries = t.payload, e.loaded = !0;
      }
    ).addCase(ay.rejected, (e, t) => {
      console.error("fetch dictionary classes failed", t.error), e.loaded = !0;
    }).addCase(sy.fulfilled, (e, t) => {
      const n = t.payload;
      e.dictionaries = Object.keys(e.dictionaries).filter((o) => n.includes(o)).reduce((o, a) => (o[a] = e.dictionaries[a], o), {});
    });
  }
});
ui("bsdd/fetchClass", async (r, { getState: e, dispatch: t }) => {
  const n = e(), o = Et(Ld);
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
const ly = (r) => r.bsdd.dictionaries, Hg = (r) => r.bsdd.dictionaryClasses;
cy.actions;
const PO = cy.reducer;
function NO({ callback: r, classifications: e, propertySetMap: t, ifcEntity: n }) {
  const { t: o } = Ws(), a = Et(ly);
  function s(h) {
    if (h in a) {
      const p = a[h];
      if (p)
        return f1(p);
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
          const { type: S, predefinedType: I } = p1(_.code);
          return { ...E, type: S, predefinedType: I };
        }
        const R = l(_);
        return R ? { ...E, hasAssociations: [...E.hasAssociations || [], R] } : E;
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
    var t, n = "4.17.21", o = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", s = "Expected a function", l = "Invalid `variable` option passed into `_.template`", u = "__lodash_hash_undefined__", f = 500, h = "__lodash_placeholder__", p = 1, m = 2, v = 4, C = 1, E = 2, _ = 1, R = 2, A = 4, S = 8, I = 16, O = 32, L = 64, q = 128, F = 256, ie = 512, j = 30, re = "...", Z = 800, se = 16, X = 1, ce = 2, V = 3, J = 1 / 0, te = 9007199254740991, Ie = 17976931348623157e292, Qe = 0 / 0, ot = 4294967295, dt = ot - 1, Yr = ot >>> 1, ln = [
      ["ary", q],
      ["bind", _],
      ["bindKey", R],
      ["curry", S],
      ["curryRight", I],
      ["flip", ie],
      ["partial", O],
      ["partialRight", L],
      ["rearg", F]
    ], Yt = "[object Arguments]", ar = "[object Array]", un = "[object AsyncFunction]", sr = "[object Boolean]", Ur = "[object Date]", dn = "[object DOMException]", qt = "[object Error]", wr = "[object Function]", Ye = "[object GeneratorFunction]", Nt = "[object Map]", Ot = "[object Number]", Nn = "[object Null]", gt = "[object Object]", Mt = "[object Promise]", Zn = "[object Proxy]", Fr = "[object RegExp]", _t = "[object Set]", tt = "[object String]", Qr = "[object Symbol]", gy = "[object Undefined]", di = "[object WeakMap]", my = "[object WeakSet]", fi = "[object ArrayBuffer]", Ro = "[object DataView]", pc = "[object Float32Array]", gc = "[object Float64Array]", mc = "[object Int8Array]", vc = "[object Int16Array]", yc = "[object Int32Array]", Cc = "[object Uint8Array]", wc = "[object Uint8ClampedArray]", Ec = "[object Uint16Array]", bc = "[object Uint32Array]", vy = /\b__p \+= '';/g, yy = /\b(__p \+=) '' \+/g, Cy = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Dd = /&(?:amp|lt|gt|quot|#39);/g, Ud = /[&<>"']/g, wy = RegExp(Dd.source), Ey = RegExp(Ud.source), by = /<%-([\s\S]+?)%>/g, _y = /<%([\s\S]+?)%>/g, Fd = /<%=([\s\S]+?)%>/g, Sy = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ty = /^\w*$/, Iy = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _c = /[\\^$.*+?()[\]{}|]/g, Ay = RegExp(_c.source), Sc = /^\s+/, Ry = /\s/, ky = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Py = /\{\n\/\* \[wrapped with (.+)\] \*/, Ny = /,? & /, Oy = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, My = /[()=,{}\[\]\/\s]/, xy = /\\(\\)?/g, Ly = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Hd = /\w*$/, Dy = /^[-+]0x[0-9a-f]+$/i, Uy = /^0b[01]+$/i, Fy = /^\[object .+?Constructor\]$/, Hy = /^0o[0-7]+$/i, By = /^(?:0|[1-9]\d*)$/, Ky = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ga = /($^)/, qy = /['\n\r\u2028\u2029\\]/g, ma = "\\ud800-\\udfff", $y = "\\u0300-\\u036f", Gy = "\\ufe20-\\ufe2f", zy = "\\u20d0-\\u20ff", Bd = $y + Gy + zy, Kd = "\\u2700-\\u27bf", qd = "a-z\\xdf-\\xf6\\xf8-\\xff", Vy = "\\xac\\xb1\\xd7\\xf7", Wy = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", jy = "\\u2000-\\u206f", Yy = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", $d = "A-Z\\xc0-\\xd6\\xd8-\\xde", Gd = "\\ufe0e\\ufe0f", zd = Vy + Wy + jy + Yy, Tc = "['’]", Qy = "[" + ma + "]", Vd = "[" + zd + "]", va = "[" + Bd + "]", Wd = "\\d+", Jy = "[" + Kd + "]", jd = "[" + qd + "]", Yd = "[^" + ma + zd + Wd + Kd + qd + $d + "]", Ic = "\\ud83c[\\udffb-\\udfff]", Xy = "(?:" + va + "|" + Ic + ")", Qd = "[^" + ma + "]", Ac = "(?:\\ud83c[\\udde6-\\uddff]){2}", Rc = "[\\ud800-\\udbff][\\udc00-\\udfff]", ko = "[" + $d + "]", Jd = "\\u200d", Xd = "(?:" + jd + "|" + Yd + ")", Zy = "(?:" + ko + "|" + Yd + ")", Zd = "(?:" + Tc + "(?:d|ll|m|re|s|t|ve))?", ef = "(?:" + Tc + "(?:D|LL|M|RE|S|T|VE))?", tf = Xy + "?", rf = "[" + Gd + "]?", eC = "(?:" + Jd + "(?:" + [Qd, Ac, Rc].join("|") + ")" + rf + tf + ")*", tC = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rC = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", nf = rf + tf + eC, nC = "(?:" + [Jy, Ac, Rc].join("|") + ")" + nf, oC = "(?:" + [Qd + va + "?", va, Ac, Rc, Qy].join("|") + ")", iC = RegExp(Tc, "g"), aC = RegExp(va, "g"), kc = RegExp(Ic + "(?=" + Ic + ")|" + oC + nf, "g"), sC = RegExp([
      ko + "?" + jd + "+" + Zd + "(?=" + [Vd, ko, "$"].join("|") + ")",
      Zy + "+" + ef + "(?=" + [Vd, ko + Xd, "$"].join("|") + ")",
      ko + "?" + Xd + "+" + Zd,
      ko + "+" + ef,
      rC,
      tC,
      Wd,
      nC
    ].join("|"), "g"), cC = RegExp("[" + Jd + ma + Bd + Gd + "]"), lC = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, uC = [
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
    ], dC = -1, rt = {};
    rt[pc] = rt[gc] = rt[mc] = rt[vc] = rt[yc] = rt[Cc] = rt[wc] = rt[Ec] = rt[bc] = !0, rt[Yt] = rt[ar] = rt[fi] = rt[sr] = rt[Ro] = rt[Ur] = rt[qt] = rt[wr] = rt[Nt] = rt[Ot] = rt[gt] = rt[Fr] = rt[_t] = rt[tt] = rt[di] = !1;
    var Xe = {};
    Xe[Yt] = Xe[ar] = Xe[fi] = Xe[Ro] = Xe[sr] = Xe[Ur] = Xe[pc] = Xe[gc] = Xe[mc] = Xe[vc] = Xe[yc] = Xe[Nt] = Xe[Ot] = Xe[gt] = Xe[Fr] = Xe[_t] = Xe[tt] = Xe[Qr] = Xe[Cc] = Xe[wc] = Xe[Ec] = Xe[bc] = !0, Xe[qt] = Xe[wr] = Xe[di] = !1;
    var fC = {
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
    }, hC = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, pC = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, gC = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, mC = parseFloat, vC = parseInt, of = typeof Ri == "object" && Ri && Ri.Object === Object && Ri, yC = typeof self == "object" && self && self.Object === Object && self, St = of || yC || Function("return this")(), Pc = e && !e.nodeType && e, eo = Pc && !0 && r && !r.nodeType && r, af = eo && eo.exports === Pc, Nc = af && of.process, Er = function() {
      try {
        var M = eo && eo.require && eo.require("util").types;
        return M || Nc && Nc.binding && Nc.binding("util");
      } catch {
      }
    }(), sf = Er && Er.isArrayBuffer, cf = Er && Er.isDate, lf = Er && Er.isMap, uf = Er && Er.isRegExp, df = Er && Er.isSet, ff = Er && Er.isTypedArray;
    function cr(M, H, D) {
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
    function CC(M, H, D, le) {
      for (var Re = -1, qe = M == null ? 0 : M.length; ++Re < qe; ) {
        var mt = M[Re];
        H(le, mt, D(mt), M);
      }
      return le;
    }
    function br(M, H) {
      for (var D = -1, le = M == null ? 0 : M.length; ++D < le && H(M[D], D, M) !== !1; )
        ;
      return M;
    }
    function wC(M, H) {
      for (var D = M == null ? 0 : M.length; D-- && H(M[D], D, M) !== !1; )
        ;
      return M;
    }
    function hf(M, H) {
      for (var D = -1, le = M == null ? 0 : M.length; ++D < le; )
        if (!H(M[D], D, M))
          return !1;
      return !0;
    }
    function On(M, H) {
      for (var D = -1, le = M == null ? 0 : M.length, Re = 0, qe = []; ++D < le; ) {
        var mt = M[D];
        H(mt, D, M) && (qe[Re++] = mt);
      }
      return qe;
    }
    function ya(M, H) {
      var D = M == null ? 0 : M.length;
      return !!D && Po(M, H, 0) > -1;
    }
    function Oc(M, H, D) {
      for (var le = -1, Re = M == null ? 0 : M.length; ++le < Re; )
        if (D(H, M[le]))
          return !0;
      return !1;
    }
    function nt(M, H) {
      for (var D = -1, le = M == null ? 0 : M.length, Re = Array(le); ++D < le; )
        Re[D] = H(M[D], D, M);
      return Re;
    }
    function Mn(M, H) {
      for (var D = -1, le = H.length, Re = M.length; ++D < le; )
        M[Re + D] = H[D];
      return M;
    }
    function Mc(M, H, D, le) {
      var Re = -1, qe = M == null ? 0 : M.length;
      for (le && qe && (D = M[++Re]); ++Re < qe; )
        D = H(D, M[Re], Re, M);
      return D;
    }
    function EC(M, H, D, le) {
      var Re = M == null ? 0 : M.length;
      for (le && Re && (D = M[--Re]); Re--; )
        D = H(D, M[Re], Re, M);
      return D;
    }
    function xc(M, H) {
      for (var D = -1, le = M == null ? 0 : M.length; ++D < le; )
        if (H(M[D], D, M))
          return !0;
      return !1;
    }
    var bC = Lc("length");
    function _C(M) {
      return M.split("");
    }
    function SC(M) {
      return M.match(Oy) || [];
    }
    function pf(M, H, D) {
      var le;
      return D(M, function(Re, qe, mt) {
        if (H(Re, qe, mt))
          return le = qe, !1;
      }), le;
    }
    function Ca(M, H, D, le) {
      for (var Re = M.length, qe = D + (le ? 1 : -1); le ? qe-- : ++qe < Re; )
        if (H(M[qe], qe, M))
          return qe;
      return -1;
    }
    function Po(M, H, D) {
      return H === H ? DC(M, H, D) : Ca(M, gf, D);
    }
    function TC(M, H, D, le) {
      for (var Re = D - 1, qe = M.length; ++Re < qe; )
        if (le(M[Re], H))
          return Re;
      return -1;
    }
    function gf(M) {
      return M !== M;
    }
    function mf(M, H) {
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
    function vf(M, H, D, le, Re) {
      return Re(M, function(qe, mt, Je) {
        D = le ? (le = !1, qe) : H(D, qe, mt, Je);
      }), D;
    }
    function IC(M, H) {
      var D = M.length;
      for (M.sort(H); D--; )
        M[D] = M[D].value;
      return M;
    }
    function Uc(M, H) {
      for (var D, le = -1, Re = M.length; ++le < Re; ) {
        var qe = H(M[le]);
        qe !== t && (D = D === t ? qe : D + qe);
      }
      return D;
    }
    function Fc(M, H) {
      for (var D = -1, le = Array(M); ++D < M; )
        le[D] = H(D);
      return le;
    }
    function AC(M, H) {
      return nt(H, function(D) {
        return [D, M[D]];
      });
    }
    function yf(M) {
      return M && M.slice(0, bf(M) + 1).replace(Sc, "");
    }
    function lr(M) {
      return function(H) {
        return M(H);
      };
    }
    function Hc(M, H) {
      return nt(H, function(D) {
        return M[D];
      });
    }
    function hi(M, H) {
      return M.has(H);
    }
    function Cf(M, H) {
      for (var D = -1, le = M.length; ++D < le && Po(H, M[D], 0) > -1; )
        ;
      return D;
    }
    function wf(M, H) {
      for (var D = M.length; D-- && Po(H, M[D], 0) > -1; )
        ;
      return D;
    }
    function RC(M, H) {
      for (var D = M.length, le = 0; D--; )
        M[D] === H && ++le;
      return le;
    }
    var kC = Dc(fC), PC = Dc(hC);
    function NC(M) {
      return "\\" + gC[M];
    }
    function OC(M, H) {
      return M == null ? t : M[H];
    }
    function No(M) {
      return cC.test(M);
    }
    function MC(M) {
      return lC.test(M);
    }
    function xC(M) {
      for (var H, D = []; !(H = M.next()).done; )
        D.push(H.value);
      return D;
    }
    function Bc(M) {
      var H = -1, D = Array(M.size);
      return M.forEach(function(le, Re) {
        D[++H] = [Re, le];
      }), D;
    }
    function Ef(M, H) {
      return function(D) {
        return M(H(D));
      };
    }
    function xn(M, H) {
      for (var D = -1, le = M.length, Re = 0, qe = []; ++D < le; ) {
        var mt = M[D];
        (mt === H || mt === h) && (M[D] = h, qe[Re++] = D);
      }
      return qe;
    }
    function wa(M) {
      var H = -1, D = Array(M.size);
      return M.forEach(function(le) {
        D[++H] = le;
      }), D;
    }
    function LC(M) {
      var H = -1, D = Array(M.size);
      return M.forEach(function(le) {
        D[++H] = [le, le];
      }), D;
    }
    function DC(M, H, D) {
      for (var le = D - 1, Re = M.length; ++le < Re; )
        if (M[le] === H)
          return le;
      return -1;
    }
    function UC(M, H, D) {
      for (var le = D + 1; le--; )
        if (M[le] === H)
          return le;
      return le;
    }
    function Oo(M) {
      return No(M) ? HC(M) : bC(M);
    }
    function Hr(M) {
      return No(M) ? BC(M) : _C(M);
    }
    function bf(M) {
      for (var H = M.length; H-- && Ry.test(M.charAt(H)); )
        ;
      return H;
    }
    var FC = Dc(pC);
    function HC(M) {
      for (var H = kc.lastIndex = 0; kc.test(M); )
        ++H;
      return H;
    }
    function BC(M) {
      return M.match(kc) || [];
    }
    function KC(M) {
      return M.match(sC) || [];
    }
    var qC = function M(H) {
      H = H == null ? St : Mo.defaults(St.Object(), H, Mo.pick(St, uC));
      var D = H.Array, le = H.Date, Re = H.Error, qe = H.Function, mt = H.Math, Je = H.Object, Kc = H.RegExp, $C = H.String, _r = H.TypeError, Ea = D.prototype, GC = qe.prototype, xo = Je.prototype, ba = H["__core-js_shared__"], _a = GC.toString, We = xo.hasOwnProperty, zC = 0, _f = function() {
        var i = /[^.]+$/.exec(ba && ba.keys && ba.keys.IE_PROTO || "");
        return i ? "Symbol(src)_1." + i : "";
      }(), Sa = xo.toString, VC = _a.call(Je), WC = St._, jC = Kc(
        "^" + _a.call(We).replace(_c, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ta = af ? H.Buffer : t, Ln = H.Symbol, Ia = H.Uint8Array, Sf = Ta ? Ta.allocUnsafe : t, Aa = Ef(Je.getPrototypeOf, Je), Tf = Je.create, If = xo.propertyIsEnumerable, Ra = Ea.splice, Af = Ln ? Ln.isConcatSpreadable : t, pi = Ln ? Ln.iterator : t, to = Ln ? Ln.toStringTag : t, ka = function() {
        try {
          var i = ao(Je, "defineProperty");
          return i({}, "", {}), i;
        } catch {
        }
      }(), YC = H.clearTimeout !== St.clearTimeout && H.clearTimeout, QC = le && le.now !== St.Date.now && le.now, JC = H.setTimeout !== St.setTimeout && H.setTimeout, Pa = mt.ceil, Na = mt.floor, qc = Je.getOwnPropertySymbols, XC = Ta ? Ta.isBuffer : t, Rf = H.isFinite, ZC = Ea.join, ew = Ef(Je.keys, Je), vt = mt.max, xt = mt.min, tw = le.now, rw = H.parseInt, kf = mt.random, nw = Ea.reverse, $c = ao(H, "DataView"), gi = ao(H, "Map"), Gc = ao(H, "Promise"), Lo = ao(H, "Set"), mi = ao(H, "WeakMap"), vi = ao(Je, "create"), Oa = mi && new mi(), Do = {}, ow = so($c), iw = so(gi), aw = so(Gc), sw = so(Lo), cw = so(mi), Ma = Ln ? Ln.prototype : t, yi = Ma ? Ma.valueOf : t, Pf = Ma ? Ma.toString : t;
      function w(i) {
        if (st(i) && !Pe(i) && !(i instanceof Ue)) {
          if (i instanceof Sr)
            return i;
          if (We.call(i, "__wrapped__"))
            return Nh(i);
        }
        return new Sr(i);
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
        escape: by,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: _y,
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
      }, w.prototype = xa.prototype, w.prototype.constructor = w, Sr.prototype = Uo(xa.prototype), Sr.prototype.constructor = Sr;
      function Ue(i) {
        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ot, this.__views__ = [];
      }
      function lw() {
        var i = new Ue(this.__wrapped__);
        return i.__actions__ = Qt(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = Qt(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = Qt(this.__views__), i;
      }
      function uw() {
        if (this.__filtered__) {
          var i = new Ue(this);
          i.__dir__ = -1, i.__filtered__ = !0;
        } else
          i = this.clone(), i.__dir__ *= -1;
        return i;
      }
      function dw() {
        var i = this.__wrapped__.value(), c = this.__dir__, d = Pe(i), g = c < 0, y = d ? i.length : 0, b = _E(0, y, this.__views__), T = b.start, P = b.end, x = P - T, B = g ? P : T - 1, K = this.__iteratees__, W = K.length, ne = 0, he = xt(x, this.__takeCount__);
        if (!d || !g && y == x && he == x)
          return eh(i, this.__actions__);
        var ye = [];
        e:
          for (; x-- && ne < he; ) {
            B += c;
            for (var Oe = -1, Ce = i[B]; ++Oe < W; ) {
              var Le = K[Oe], Fe = Le.iteratee, fr = Le.type, zt = Fe(Ce);
              if (fr == ce)
                Ce = zt;
              else if (!zt) {
                if (fr == X)
                  continue e;
                break e;
              }
            }
            ye[ne++] = Ce;
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
      function fw() {
        this.__data__ = vi ? vi(null) : {}, this.size = 0;
      }
      function hw(i) {
        var c = this.has(i) && delete this.__data__[i];
        return this.size -= c ? 1 : 0, c;
      }
      function pw(i) {
        var c = this.__data__;
        if (vi) {
          var d = c[i];
          return d === u ? t : d;
        }
        return We.call(c, i) ? c[i] : t;
      }
      function gw(i) {
        var c = this.__data__;
        return vi ? c[i] !== t : We.call(c, i);
      }
      function mw(i, c) {
        var d = this.__data__;
        return this.size += this.has(i) ? 0 : 1, d[i] = vi && c === t ? u : c, this;
      }
      ro.prototype.clear = fw, ro.prototype.delete = hw, ro.prototype.get = pw, ro.prototype.has = gw, ro.prototype.set = mw;
      function fn(i) {
        var c = -1, d = i == null ? 0 : i.length;
        for (this.clear(); ++c < d; ) {
          var g = i[c];
          this.set(g[0], g[1]);
        }
      }
      function vw() {
        this.__data__ = [], this.size = 0;
      }
      function yw(i) {
        var c = this.__data__, d = La(c, i);
        if (d < 0)
          return !1;
        var g = c.length - 1;
        return d == g ? c.pop() : Ra.call(c, d, 1), --this.size, !0;
      }
      function Cw(i) {
        var c = this.__data__, d = La(c, i);
        return d < 0 ? t : c[d][1];
      }
      function ww(i) {
        return La(this.__data__, i) > -1;
      }
      function Ew(i, c) {
        var d = this.__data__, g = La(d, i);
        return g < 0 ? (++this.size, d.push([i, c])) : d[g][1] = c, this;
      }
      fn.prototype.clear = vw, fn.prototype.delete = yw, fn.prototype.get = Cw, fn.prototype.has = ww, fn.prototype.set = Ew;
      function hn(i) {
        var c = -1, d = i == null ? 0 : i.length;
        for (this.clear(); ++c < d; ) {
          var g = i[c];
          this.set(g[0], g[1]);
        }
      }
      function bw() {
        this.size = 0, this.__data__ = {
          hash: new ro(),
          map: new (gi || fn)(),
          string: new ro()
        };
      }
      function _w(i) {
        var c = Wa(this, i).delete(i);
        return this.size -= c ? 1 : 0, c;
      }
      function Sw(i) {
        return Wa(this, i).get(i);
      }
      function Tw(i) {
        return Wa(this, i).has(i);
      }
      function Iw(i, c) {
        var d = Wa(this, i), g = d.size;
        return d.set(i, c), this.size += d.size == g ? 0 : 1, this;
      }
      hn.prototype.clear = bw, hn.prototype.delete = _w, hn.prototype.get = Sw, hn.prototype.has = Tw, hn.prototype.set = Iw;
      function no(i) {
        var c = -1, d = i == null ? 0 : i.length;
        for (this.__data__ = new hn(); ++c < d; )
          this.add(i[c]);
      }
      function Aw(i) {
        return this.__data__.set(i, u), this;
      }
      function Rw(i) {
        return this.__data__.has(i);
      }
      no.prototype.add = no.prototype.push = Aw, no.prototype.has = Rw;
      function Br(i) {
        var c = this.__data__ = new fn(i);
        this.size = c.size;
      }
      function kw() {
        this.__data__ = new fn(), this.size = 0;
      }
      function Pw(i) {
        var c = this.__data__, d = c.delete(i);
        return this.size = c.size, d;
      }
      function Nw(i) {
        return this.__data__.get(i);
      }
      function Ow(i) {
        return this.__data__.has(i);
      }
      function Mw(i, c) {
        var d = this.__data__;
        if (d instanceof fn) {
          var g = d.__data__;
          if (!gi || g.length < o - 1)
            return g.push([i, c]), this.size = ++d.size, this;
          d = this.__data__ = new hn(g);
        }
        return d.set(i, c), this.size = d.size, this;
      }
      Br.prototype.clear = kw, Br.prototype.delete = Pw, Br.prototype.get = Nw, Br.prototype.has = Ow, Br.prototype.set = Mw;
      function Nf(i, c) {
        var d = Pe(i), g = !d && co(i), y = !d && !g && Bn(i), b = !d && !g && !y && Ko(i), T = d || g || y || b, P = T ? Fc(i.length, $C) : [], x = P.length;
        for (var B in i)
          (c || We.call(i, B)) && !(T && // Safari 9 has enumerable `arguments.length` in strict mode.
          (B == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          y && (B == "offset" || B == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          b && (B == "buffer" || B == "byteLength" || B == "byteOffset") || // Skip index properties.
          vn(B, x))) && P.push(B);
        return P;
      }
      function Of(i) {
        var c = i.length;
        return c ? i[tl(0, c - 1)] : t;
      }
      function xw(i, c) {
        return ja(Qt(i), oo(c, 0, i.length));
      }
      function Lw(i) {
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
      function Dw(i, c, d, g) {
        return Dn(i, function(y, b, T) {
          c(g, y, d(y), T);
        }), g;
      }
      function Mf(i, c) {
        return i && Xr(c, wt(c), i);
      }
      function Uw(i, c) {
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
        var T, P = c & p, x = c & m, B = c & v;
        if (d && (T = y ? d(i, g, y, b) : d(i)), T !== t)
          return T;
        if (!it(i))
          return i;
        var K = Pe(i);
        if (K) {
          if (T = TE(i), !P)
            return Qt(i, T);
        } else {
          var W = Lt(i), ne = W == wr || W == Ye;
          if (Bn(i))
            return nh(i, P);
          if (W == gt || W == Yt || ne && !y) {
            if (T = x || ne ? {} : bh(i), !P)
              return x ? pE(i, Uw(T, i)) : hE(i, Mf(T, i));
          } else {
            if (!Xe[W])
              return y ? i : {};
            T = IE(i, W, P);
          }
        }
        b || (b = new Br());
        var he = b.get(i);
        if (he)
          return he;
        b.set(i, T), Jh(i) ? i.forEach(function(Ce) {
          T.add(Tr(Ce, c, d, Ce, i, b));
        }) : Yh(i) && i.forEach(function(Ce, Le) {
          T.set(Le, Tr(Ce, c, d, Le, i, b));
        });
        var ye = B ? x ? fl : dl : x ? Xt : wt, Oe = K ? t : ye(i);
        return br(Oe || i, function(Ce, Le) {
          Oe && (Le = Ce, Ce = i[Le]), Ci(T, Le, Tr(Ce, c, d, Le, i, b));
        }), T;
      }
      function Fw(i) {
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
          throw new _r(s);
        return Ii(function() {
          i.apply(t, d);
        }, c);
      }
      function wi(i, c, d, g) {
        var y = -1, b = ya, T = !0, P = i.length, x = [], B = c.length;
        if (!P)
          return x;
        d && (c = nt(c, lr(d))), g ? (b = Oc, T = !1) : c.length >= o && (b = hi, T = !1, c = new no(c));
        e:
          for (; ++y < P; ) {
            var K = i[y], W = d == null ? K : d(K);
            if (K = g || K !== 0 ? K : 0, T && W === W) {
              for (var ne = B; ne--; )
                if (c[ne] === W)
                  continue e;
              x.push(K);
            } else
              b(c, W, g) || x.push(K);
          }
        return x;
      }
      var Dn = ch(Jr), Df = ch(jc, !0);
      function Hw(i, c) {
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
      function Bw(i, c, d, g) {
        var y = i.length;
        for (d = Ne(d), d < 0 && (d = -d > y ? 0 : y + d), g = g === t || g > y ? y : Ne(g), g < 0 && (g += y), g = d > g ? 0 : Zh(g); d < g; )
          i[d++] = c;
        return i;
      }
      function Uf(i, c) {
        var d = [];
        return Dn(i, function(g, y, b) {
          c(g, y, b) && d.push(g);
        }), d;
      }
      function Tt(i, c, d, g, y) {
        var b = -1, T = i.length;
        for (d || (d = RE), y || (y = []); ++b < T; ) {
          var P = i[b];
          c > 0 && d(P) ? c > 1 ? Tt(P, c - 1, d, g, y) : Mn(y, P) : g || (y[y.length] = P);
        }
        return y;
      }
      var Wc = lh(), Ff = lh(!0);
      function Jr(i, c) {
        return i && Wc(i, c, wt);
      }
      function jc(i, c) {
        return i && Ff(i, c, wt);
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
      function Hf(i, c, d) {
        var g = c(i);
        return Pe(i) ? g : Mn(g, d(i));
      }
      function $t(i) {
        return i == null ? i === t ? gy : Nn : to && to in Je(i) ? bE(i) : LE(i);
      }
      function Yc(i, c) {
        return i > c;
      }
      function Kw(i, c) {
        return i != null && We.call(i, c);
      }
      function qw(i, c) {
        return i != null && c in Je(i);
      }
      function $w(i, c, d) {
        return i >= xt(c, d) && i < vt(c, d);
      }
      function Qc(i, c, d) {
        for (var g = d ? Oc : ya, y = i[0].length, b = i.length, T = b, P = D(b), x = 1 / 0, B = []; T--; ) {
          var K = i[T];
          T && c && (K = nt(K, lr(c))), x = xt(K.length, x), P[T] = !d && (c || y >= 120 && K.length >= 120) ? new no(T && K) : t;
        }
        K = i[0];
        var W = -1, ne = P[0];
        e:
          for (; ++W < y && B.length < x; ) {
            var he = K[W], ye = c ? c(he) : he;
            if (he = d || he !== 0 ? he : 0, !(ne ? hi(ne, ye) : g(B, ye, d))) {
              for (T = b; --T; ) {
                var Oe = P[T];
                if (!(Oe ? hi(Oe, ye) : g(i[T], ye, d)))
                  continue e;
              }
              ne && ne.push(ye), B.push(he);
            }
          }
        return B;
      }
      function Gw(i, c, d, g) {
        return Jr(i, function(y, b, T) {
          c(g, d(y), b, T);
        }), g;
      }
      function Ei(i, c, d) {
        c = Fn(c, i), i = Ih(i, c);
        var g = i == null ? i : i[Zr(Ar(c))];
        return g == null ? t : cr(g, i, d);
      }
      function Bf(i) {
        return st(i) && $t(i) == Yt;
      }
      function zw(i) {
        return st(i) && $t(i) == fi;
      }
      function Vw(i) {
        return st(i) && $t(i) == Ur;
      }
      function bi(i, c, d, g, y) {
        return i === c ? !0 : i == null || c == null || !st(i) && !st(c) ? i !== i && c !== c : Ww(i, c, d, g, bi, y);
      }
      function Ww(i, c, d, g, y, b) {
        var T = Pe(i), P = Pe(c), x = T ? ar : Lt(i), B = P ? ar : Lt(c);
        x = x == Yt ? gt : x, B = B == Yt ? gt : B;
        var K = x == gt, W = B == gt, ne = x == B;
        if (ne && Bn(i)) {
          if (!Bn(c))
            return !1;
          T = !0, K = !1;
        }
        if (ne && !K)
          return b || (b = new Br()), T || Ko(i) ? Ch(i, c, d, g, y, b) : wE(i, c, x, d, g, y, b);
        if (!(d & C)) {
          var he = K && We.call(i, "__wrapped__"), ye = W && We.call(c, "__wrapped__");
          if (he || ye) {
            var Oe = he ? i.value() : i, Ce = ye ? c.value() : c;
            return b || (b = new Br()), y(Oe, Ce, d, g, b);
          }
        }
        return ne ? (b || (b = new Br()), EE(i, c, d, g, y, b)) : !1;
      }
      function jw(i) {
        return st(i) && Lt(i) == Nt;
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
          var x = P[0], B = i[x], K = P[1];
          if (T && P[2]) {
            if (B === t && !(x in i))
              return !1;
          } else {
            var W = new Br();
            if (g)
              var ne = g(B, K, x, i, c, W);
            if (!(ne === t ? bi(K, B, C | E, g, W) : ne))
              return !1;
          }
        }
        return !0;
      }
      function Kf(i) {
        if (!it(i) || PE(i))
          return !1;
        var c = yn(i) ? jC : Fy;
        return c.test(so(i));
      }
      function Yw(i) {
        return st(i) && $t(i) == Fr;
      }
      function Qw(i) {
        return st(i) && Lt(i) == _t;
      }
      function Jw(i) {
        return st(i) && es(i.length) && !!rt[$t(i)];
      }
      function qf(i) {
        return typeof i == "function" ? i : i == null ? Zt : typeof i == "object" ? Pe(i) ? zf(i[0], i[1]) : Gf(i) : up(i);
      }
      function Xc(i) {
        if (!Ti(i))
          return ew(i);
        var c = [];
        for (var d in Je(i))
          We.call(i, d) && d != "constructor" && c.push(d);
        return c;
      }
      function Xw(i) {
        if (!it(i))
          return xE(i);
        var c = Ti(i), d = [];
        for (var g in i)
          g == "constructor" && (c || !We.call(i, g)) || d.push(g);
        return d;
      }
      function Zc(i, c) {
        return i < c;
      }
      function $f(i, c) {
        var d = -1, g = Jt(i) ? D(i.length) : [];
        return Dn(i, function(y, b, T) {
          g[++d] = c(y, b, T);
        }), g;
      }
      function Gf(i) {
        var c = pl(i);
        return c.length == 1 && c[0][2] ? Sh(c[0][0], c[0][1]) : function(d) {
          return d === i || Jc(d, i, c);
        };
      }
      function zf(i, c) {
        return ml(i) && _h(c) ? Sh(Zr(i), c) : function(d) {
          var g = Il(d, i);
          return g === t && g === c ? Al(d, i) : bi(c, g, C | E);
        };
      }
      function Fa(i, c, d, g, y) {
        i !== c && Wc(c, function(b, T) {
          if (y || (y = new Br()), it(b))
            Zw(i, c, T, d, Fa, g, y);
          else {
            var P = g ? g(yl(i, T), b, T + "", i, c, y) : t;
            P === t && (P = b), zc(i, T, P);
          }
        }, Xt);
      }
      function Zw(i, c, d, g, y, b, T) {
        var P = yl(i, d), x = yl(c, d), B = T.get(x);
        if (B) {
          zc(i, d, B);
          return;
        }
        var K = b ? b(P, x, d + "", i, c, T) : t, W = K === t;
        if (W) {
          var ne = Pe(x), he = !ne && Bn(x), ye = !ne && !he && Ko(x);
          K = x, ne || he || ye ? Pe(P) ? K = P : ft(P) ? K = Qt(P) : he ? (W = !1, K = nh(x, !0)) : ye ? (W = !1, K = oh(x, !0)) : K = [] : Ai(x) || co(x) ? (K = P, co(P) ? K = ep(P) : (!it(P) || yn(P)) && (K = bh(x))) : W = !1;
        }
        W && (T.set(x, K), y(K, x, g, b, T), T.delete(x)), zc(i, d, K);
      }
      function Vf(i, c) {
        var d = i.length;
        if (d)
          return c += c < 0 ? d : 0, vn(c, d) ? i[c] : t;
      }
      function Wf(i, c, d) {
        c.length ? c = nt(c, function(b) {
          return Pe(b) ? function(T) {
            return io(T, b.length === 1 ? b[0] : b);
          } : b;
        }) : c = [Zt];
        var g = -1;
        c = nt(c, lr(ve()));
        var y = $f(i, function(b, T, P) {
          var x = nt(c, function(B) {
            return B(b);
          });
          return { criteria: x, index: ++g, value: b };
        });
        return IC(y, function(b, T) {
          return fE(b, T, d);
        });
      }
      function eE(i, c) {
        return jf(i, c, function(d, g) {
          return Al(i, g);
        });
      }
      function jf(i, c, d) {
        for (var g = -1, y = c.length, b = {}; ++g < y; ) {
          var T = c[g], P = io(i, T);
          d(P, T) && _i(b, Fn(T, i), P);
        }
        return b;
      }
      function tE(i) {
        return function(c) {
          return io(c, i);
        };
      }
      function el(i, c, d, g) {
        var y = g ? TC : Po, b = -1, T = c.length, P = i;
        for (i === c && (c = Qt(c)), d && (P = nt(i, lr(d))); ++b < T; )
          for (var x = 0, B = c[b], K = d ? d(B) : B; (x = y(P, K, x, g)) > -1; )
            P !== i && Ra.call(P, x, 1), Ra.call(i, x, 1);
        return i;
      }
      function Yf(i, c) {
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
        return i + Na(kf() * (c - i + 1));
      }
      function rE(i, c, d, g) {
        for (var y = -1, b = vt(Pa((c - i) / (d || 1)), 0), T = D(b); b--; )
          T[g ? b : ++y] = i, i += d;
        return T;
      }
      function rl(i, c) {
        var d = "";
        if (!i || c < 1 || c > te)
          return d;
        do
          c % 2 && (d += i), c = Na(c / 2), c && (i += i);
        while (c);
        return d;
      }
      function Me(i, c) {
        return Cl(Th(i, c, Zt), i + "");
      }
      function nE(i) {
        return Of(qo(i));
      }
      function oE(i, c) {
        var d = qo(i);
        return ja(d, oo(c, 0, d.length));
      }
      function _i(i, c, d, g) {
        if (!it(i))
          return i;
        c = Fn(c, i);
        for (var y = -1, b = c.length, T = b - 1, P = i; P != null && ++y < b; ) {
          var x = Zr(c[y]), B = d;
          if (x === "__proto__" || x === "constructor" || x === "prototype")
            return i;
          if (y != T) {
            var K = P[x];
            B = g ? g(K, x, P) : t, B === t && (B = it(K) ? K : vn(c[y + 1]) ? [] : {});
          }
          Ci(P, x, B), P = P[x];
        }
        return i;
      }
      var Qf = Oa ? function(i, c) {
        return Oa.set(i, c), i;
      } : Zt, iE = ka ? function(i, c) {
        return ka(i, "toString", {
          configurable: !0,
          enumerable: !1,
          value: kl(c),
          writable: !0
        });
      } : Zt;
      function aE(i) {
        return ja(qo(i));
      }
      function Ir(i, c, d) {
        var g = -1, y = i.length;
        c < 0 && (c = -c > y ? 0 : y + c), d = d > y ? y : d, d < 0 && (d += y), y = c > d ? 0 : d - c >>> 0, c >>>= 0;
        for (var b = D(y); ++g < y; )
          b[g] = i[g + c];
        return b;
      }
      function sE(i, c) {
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
        for (var T = c !== c, P = c === null, x = dr(c), B = c === t; y < b; ) {
          var K = Na((y + b) / 2), W = d(i[K]), ne = W !== t, he = W === null, ye = W === W, Oe = dr(W);
          if (T)
            var Ce = g || ye;
          else
            B ? Ce = ye && (g || ne) : P ? Ce = ye && ne && (g || !he) : x ? Ce = ye && ne && !he && (g || !Oe) : he || Oe ? Ce = !1 : Ce = g ? W <= c : W < c;
          Ce ? y = K + 1 : b = K;
        }
        return xt(b, dt);
      }
      function Jf(i, c) {
        for (var d = -1, g = i.length, y = 0, b = []; ++d < g; ) {
          var T = i[d], P = c ? c(T) : T;
          if (!d || !Kr(P, x)) {
            var x = P;
            b[y++] = T === 0 ? 0 : T;
          }
        }
        return b;
      }
      function Xf(i) {
        return typeof i == "number" ? i : dr(i) ? Qe : +i;
      }
      function ur(i) {
        if (typeof i == "string")
          return i;
        if (Pe(i))
          return nt(i, ur) + "";
        if (dr(i))
          return Pf ? Pf.call(i) : "";
        var c = i + "";
        return c == "0" && 1 / i == -J ? "-0" : c;
      }
      function Un(i, c, d) {
        var g = -1, y = ya, b = i.length, T = !0, P = [], x = P;
        if (d)
          T = !1, y = Oc;
        else if (b >= o) {
          var B = c ? null : yE(i);
          if (B)
            return wa(B);
          T = !1, y = hi, x = new no();
        } else
          x = c ? [] : P;
        e:
          for (; ++g < b; ) {
            var K = i[g], W = c ? c(K) : K;
            if (K = d || K !== 0 ? K : 0, T && W === W) {
              for (var ne = x.length; ne--; )
                if (x[ne] === W)
                  continue e;
              c && x.push(W), P.push(K);
            } else
              y(x, W, d) || (x !== P && x.push(W), P.push(K));
          }
        return P;
      }
      function ol(i, c) {
        return c = Fn(c, i), i = Ih(i, c), i == null || delete i[Zr(Ar(c))];
      }
      function Zf(i, c, d, g) {
        return _i(i, c, d(io(i, c)), g);
      }
      function Ba(i, c, d, g) {
        for (var y = i.length, b = g ? y : -1; (g ? b-- : ++b < y) && c(i[b], b, i); )
          ;
        return d ? Ir(i, g ? 0 : b, g ? b + 1 : y) : Ir(i, g ? b + 1 : 0, g ? y : b);
      }
      function eh(i, c) {
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
        return Un(Tt(b, 1), c, d);
      }
      function th(i, c, d) {
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
        return Pe(i) ? i : ml(i, c) ? [i] : Ph(ze(i));
      }
      var cE = Me;
      function Hn(i, c, d) {
        var g = i.length;
        return d = d === t ? g : d, !c && d >= g ? i : Ir(i, c, d);
      }
      var rh = YC || function(i) {
        return St.clearTimeout(i);
      };
      function nh(i, c) {
        if (c)
          return i.slice();
        var d = i.length, g = Sf ? Sf(d) : new i.constructor(d);
        return i.copy(g), g;
      }
      function cl(i) {
        var c = new i.constructor(i.byteLength);
        return new Ia(c).set(new Ia(i)), c;
      }
      function lE(i, c) {
        var d = c ? cl(i.buffer) : i.buffer;
        return new i.constructor(d, i.byteOffset, i.byteLength);
      }
      function uE(i) {
        var c = new i.constructor(i.source, Hd.exec(i));
        return c.lastIndex = i.lastIndex, c;
      }
      function dE(i) {
        return yi ? Je(yi.call(i)) : {};
      }
      function oh(i, c) {
        var d = c ? cl(i.buffer) : i.buffer;
        return new i.constructor(d, i.byteOffset, i.length);
      }
      function ih(i, c) {
        if (i !== c) {
          var d = i !== t, g = i === null, y = i === i, b = dr(i), T = c !== t, P = c === null, x = c === c, B = dr(c);
          if (!P && !B && !b && i > c || b && T && x && !P && !B || g && T && x || !d && x || !y)
            return 1;
          if (!g && !b && !B && i < c || B && d && y && !g && !b || P && d && y || !T && y || !x)
            return -1;
        }
        return 0;
      }
      function fE(i, c, d) {
        for (var g = -1, y = i.criteria, b = c.criteria, T = y.length, P = d.length; ++g < T; ) {
          var x = ih(y[g], b[g]);
          if (x) {
            if (g >= P)
              return x;
            var B = d[g];
            return x * (B == "desc" ? -1 : 1);
          }
        }
        return i.index - c.index;
      }
      function ah(i, c, d, g) {
        for (var y = -1, b = i.length, T = d.length, P = -1, x = c.length, B = vt(b - T, 0), K = D(x + B), W = !g; ++P < x; )
          K[P] = c[P];
        for (; ++y < T; )
          (W || y < b) && (K[d[y]] = i[y]);
        for (; B--; )
          K[P++] = i[y++];
        return K;
      }
      function sh(i, c, d, g) {
        for (var y = -1, b = i.length, T = -1, P = d.length, x = -1, B = c.length, K = vt(b - P, 0), W = D(K + B), ne = !g; ++y < K; )
          W[y] = i[y];
        for (var he = y; ++x < B; )
          W[he + x] = c[x];
        for (; ++T < P; )
          (ne || y < b) && (W[he + d[T]] = i[y++]);
        return W;
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
      function hE(i, c) {
        return Xr(i, gl(i), c);
      }
      function pE(i, c) {
        return Xr(i, wh(i), c);
      }
      function Ka(i, c) {
        return function(d, g) {
          var y = Pe(d) ? CC : Dw, b = c ? c() : {};
          return y(d, i, ve(g, 2), b);
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
      function ch(i, c) {
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
      function lh(i) {
        return function(c, d, g) {
          for (var y = -1, b = Je(c), T = g(c), P = T.length; P--; ) {
            var x = T[i ? P : ++y];
            if (d(b[x], x, b) === !1)
              break;
          }
          return c;
        };
      }
      function gE(i, c, d) {
        var g = c & _, y = Si(i);
        function b() {
          var T = this && this !== St && this instanceof b ? y : i;
          return T.apply(g ? d : this, arguments);
        }
        return b;
      }
      function uh(i) {
        return function(c) {
          c = ze(c);
          var d = No(c) ? Hr(c) : t, g = d ? d[0] : c.charAt(0), y = d ? Hn(d, 1).join("") : c.slice(1);
          return g[i]() + y;
        };
      }
      function Ho(i) {
        return function(c) {
          return Mc(cp(sp(c).replace(iC, "")), i, "");
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
      function mE(i, c, d) {
        var g = Si(i);
        function y() {
          for (var b = arguments.length, T = D(b), P = b, x = Bo(y); P--; )
            T[P] = arguments[P];
          var B = b < 3 && T[0] !== x && T[b - 1] !== x ? [] : xn(T, x);
          if (b -= B.length, b < d)
            return gh(
              i,
              c,
              qa,
              y.placeholder,
              t,
              T,
              B,
              t,
              t,
              d - b
            );
          var K = this && this !== St && this instanceof y ? g : i;
          return cr(K, this, T);
        }
        return y;
      }
      function dh(i) {
        return function(c, d, g) {
          var y = Je(c);
          if (!Jt(c)) {
            var b = ve(d, 3);
            c = wt(c), d = function(P) {
              return b(y[P], P, y);
            };
          }
          var T = i(c, d, g);
          return T > -1 ? y[b ? c[T] : T] : t;
        };
      }
      function fh(i) {
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
            x && vl(x[0]) && x[1] == (q | S | O | F) && !x[4].length && x[9] == 1 ? T = T[Va(x[0])].apply(T, x[3]) : T = b.length == 1 && vl(b) ? T[P]() : T.thru(b);
          }
          return function() {
            var B = arguments, K = B[0];
            if (T && B.length == 1 && Pe(K))
              return T.plant(K).value();
            for (var W = 0, ne = d ? c[W].apply(this, B) : K; ++W < d; )
              ne = c[W].call(this, ne);
            return ne;
          };
        });
      }
      function qa(i, c, d, g, y, b, T, P, x, B) {
        var K = c & q, W = c & _, ne = c & R, he = c & (S | I), ye = c & ie, Oe = ne ? t : Si(i);
        function Ce() {
          for (var Le = arguments.length, Fe = D(Le), fr = Le; fr--; )
            Fe[fr] = arguments[fr];
          if (he)
            var zt = Bo(Ce), hr = RC(Fe, zt);
          if (g && (Fe = ah(Fe, g, y, he)), b && (Fe = sh(Fe, b, T, he)), Le -= hr, he && Le < B) {
            var ht = xn(Fe, zt);
            return gh(
              i,
              c,
              qa,
              Ce.placeholder,
              d,
              Fe,
              ht,
              P,
              x,
              B - Le
            );
          }
          var qr = W ? d : this, wn = ne ? qr[i] : i;
          return Le = Fe.length, P ? Fe = DE(Fe, P) : ye && Le > 1 && Fe.reverse(), K && x < Le && (Fe.length = x), this && this !== St && this instanceof Ce && (wn = Oe || Si(wn)), wn.apply(qr, Fe);
        }
        return Ce;
      }
      function hh(i, c) {
        return function(d, g) {
          return Gw(d, i, c(g), {});
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
            typeof d == "string" || typeof g == "string" ? (d = ur(d), g = ur(g)) : (d = Xf(d), g = Xf(g)), y = i(d, g);
          }
          return y;
        };
      }
      function ll(i) {
        return mn(function(c) {
          return c = nt(c, lr(ve())), Me(function(d) {
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
      function vE(i, c, d, g) {
        var y = c & _, b = Si(i);
        function T() {
          for (var P = -1, x = arguments.length, B = -1, K = g.length, W = D(K + x), ne = this && this !== St && this instanceof T ? b : i; ++B < K; )
            W[B] = g[B];
          for (; x--; )
            W[B++] = arguments[++P];
          return cr(ne, y ? d : this, W);
        }
        return T;
      }
      function ph(i) {
        return function(c, d, g) {
          return g && typeof g != "number" && Gt(c, d, g) && (d = g = t), c = Cn(c), d === t ? (d = c, c = 0) : d = Cn(d), g = g === t ? c < d ? 1 : -1 : Cn(g), rE(c, d, g, i);
        };
      }
      function za(i) {
        return function(c, d) {
          return typeof c == "string" && typeof d == "string" || (c = Rr(c), d = Rr(d)), i(c, d);
        };
      }
      function gh(i, c, d, g, y, b, T, P, x, B) {
        var K = c & S, W = K ? T : t, ne = K ? t : T, he = K ? b : t, ye = K ? t : b;
        c |= K ? O : L, c &= ~(K ? L : O), c & A || (c &= ~(_ | R));
        var Oe = [
          i,
          c,
          y,
          he,
          W,
          ye,
          ne,
          P,
          x,
          B
        ], Ce = d.apply(t, Oe);
        return vl(i) && Ah(Ce, Oe), Ce.placeholder = g, Rh(Ce, i, c);
      }
      function ul(i) {
        var c = mt[i];
        return function(d, g) {
          if (d = Rr(d), g = g == null ? 0 : xt(Ne(g), 292), g && Rf(d)) {
            var y = (ze(d) + "e").split("e"), b = c(y[0] + "e" + (+y[1] + g));
            return y = (ze(b) + "e").split("e"), +(y[0] + "e" + (+y[1] - g));
          }
          return c(d);
        };
      }
      var yE = Lo && 1 / wa(new Lo([, -0]))[1] == J ? function(i) {
        return new Lo(i);
      } : Ol;
      function mh(i) {
        return function(c) {
          var d = Lt(c);
          return d == Nt ? Bc(c) : d == _t ? LC(c) : AC(c, i(c));
        };
      }
      function gn(i, c, d, g, y, b, T, P) {
        var x = c & R;
        if (!x && typeof i != "function")
          throw new _r(s);
        var B = g ? g.length : 0;
        if (B || (c &= ~(O | L), g = y = t), T = T === t ? T : vt(Ne(T), 0), P = P === t ? P : Ne(P), B -= y ? y.length : 0, c & L) {
          var K = g, W = y;
          g = y = t;
        }
        var ne = x ? t : hl(i), he = [
          i,
          c,
          d,
          g,
          y,
          K,
          W,
          b,
          T,
          P
        ];
        if (ne && ME(he, ne), i = he[0], c = he[1], d = he[2], g = he[3], y = he[4], P = he[9] = he[9] === t ? x ? 0 : i.length : vt(he[9] - B, 0), !P && c & (S | I) && (c &= ~(S | I)), !c || c == _)
          var ye = gE(i, c, d);
        else
          c == S || c == I ? ye = mE(i, c, P) : (c == O || c == (_ | O)) && !y.length ? ye = vE(i, c, d, g) : ye = qa.apply(t, he);
        var Oe = ne ? Qf : Ah;
        return Rh(Oe(ye, he), i, c);
      }
      function vh(i, c, d, g) {
        return i === t || Kr(i, xo[d]) && !We.call(g, d) ? c : i;
      }
      function yh(i, c, d, g, y, b) {
        return it(i) && it(c) && (b.set(c, i), Fa(i, c, t, yh, b), b.delete(c)), i;
      }
      function CE(i) {
        return Ai(i) ? t : i;
      }
      function Ch(i, c, d, g, y, b) {
        var T = d & C, P = i.length, x = c.length;
        if (P != x && !(T && x > P))
          return !1;
        var B = b.get(i), K = b.get(c);
        if (B && K)
          return B == c && K == i;
        var W = -1, ne = !0, he = d & E ? new no() : t;
        for (b.set(i, c), b.set(c, i); ++W < P; ) {
          var ye = i[W], Oe = c[W];
          if (g)
            var Ce = T ? g(Oe, ye, W, c, i, b) : g(ye, Oe, W, i, c, b);
          if (Ce !== t) {
            if (Ce)
              continue;
            ne = !1;
            break;
          }
          if (he) {
            if (!xc(c, function(Le, Fe) {
              if (!hi(he, Fe) && (ye === Le || y(ye, Le, d, g, b)))
                return he.push(Fe);
            })) {
              ne = !1;
              break;
            }
          } else if (!(ye === Oe || y(ye, Oe, d, g, b))) {
            ne = !1;
            break;
          }
        }
        return b.delete(i), b.delete(c), ne;
      }
      function wE(i, c, d, g, y, b, T) {
        switch (d) {
          case Ro:
            if (i.byteLength != c.byteLength || i.byteOffset != c.byteOffset)
              return !1;
            i = i.buffer, c = c.buffer;
          case fi:
            return !(i.byteLength != c.byteLength || !b(new Ia(i), new Ia(c)));
          case sr:
          case Ur:
          case Ot:
            return Kr(+i, +c);
          case qt:
            return i.name == c.name && i.message == c.message;
          case Fr:
          case tt:
            return i == c + "";
          case Nt:
            var P = Bc;
          case _t:
            var x = g & C;
            if (P || (P = wa), i.size != c.size && !x)
              return !1;
            var B = T.get(i);
            if (B)
              return B == c;
            g |= E, T.set(i, c);
            var K = Ch(P(i), P(c), g, y, b, T);
            return T.delete(i), K;
          case Qr:
            if (yi)
              return yi.call(i) == yi.call(c);
        }
        return !1;
      }
      function EE(i, c, d, g, y, b) {
        var T = d & C, P = dl(i), x = P.length, B = dl(c), K = B.length;
        if (x != K && !T)
          return !1;
        for (var W = x; W--; ) {
          var ne = P[W];
          if (!(T ? ne in c : We.call(c, ne)))
            return !1;
        }
        var he = b.get(i), ye = b.get(c);
        if (he && ye)
          return he == c && ye == i;
        var Oe = !0;
        b.set(i, c), b.set(c, i);
        for (var Ce = T; ++W < x; ) {
          ne = P[W];
          var Le = i[ne], Fe = c[ne];
          if (g)
            var fr = T ? g(Fe, Le, ne, c, i, b) : g(Le, Fe, ne, i, c, b);
          if (!(fr === t ? Le === Fe || y(Le, Fe, d, g, b) : fr)) {
            Oe = !1;
            break;
          }
          Ce || (Ce = ne == "constructor");
        }
        if (Oe && !Ce) {
          var zt = i.constructor, hr = c.constructor;
          zt != hr && "constructor" in i && "constructor" in c && !(typeof zt == "function" && zt instanceof zt && typeof hr == "function" && hr instanceof hr) && (Oe = !1);
        }
        return b.delete(i), b.delete(c), Oe;
      }
      function mn(i) {
        return Cl(Th(i, t, xh), i + "");
      }
      function dl(i) {
        return Hf(i, wt, gl);
      }
      function fl(i) {
        return Hf(i, Xt, wh);
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
      function ve() {
        var i = w.iteratee || Pl;
        return i = i === Pl ? qf : i, arguments.length ? i(arguments[0], arguments[1]) : i;
      }
      function Wa(i, c) {
        var d = i.__data__;
        return kE(c) ? d[typeof c == "string" ? "string" : "hash"] : d.map;
      }
      function pl(i) {
        for (var c = wt(i), d = c.length; d--; ) {
          var g = c[d], y = i[g];
          c[d] = [g, y, _h(y)];
        }
        return c;
      }
      function ao(i, c) {
        var d = OC(i, c);
        return Kf(d) ? d : t;
      }
      function bE(i) {
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
          return If.call(i, c);
        }));
      } : Ml, wh = qc ? function(i) {
        for (var c = []; i; )
          Mn(c, gl(i)), i = Aa(i);
        return c;
      } : Ml, Lt = $t;
      ($c && Lt(new $c(new ArrayBuffer(1))) != Ro || gi && Lt(new gi()) != Nt || Gc && Lt(Gc.resolve()) != Mt || Lo && Lt(new Lo()) != _t || mi && Lt(new mi()) != di) && (Lt = function(i) {
        var c = $t(i), d = c == gt ? i.constructor : t, g = d ? so(d) : "";
        if (g)
          switch (g) {
            case ow:
              return Ro;
            case iw:
              return Nt;
            case aw:
              return Mt;
            case sw:
              return _t;
            case cw:
              return di;
          }
        return c;
      });
      function _E(i, c, d) {
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
              c = xt(c, i + T);
              break;
            case "takeRight":
              i = vt(i, c - T);
              break;
          }
        }
        return { start: i, end: c };
      }
      function SE(i) {
        var c = i.match(Py);
        return c ? c[1].split(Ny) : [];
      }
      function Eh(i, c, d) {
        c = Fn(c, i);
        for (var g = -1, y = c.length, b = !1; ++g < y; ) {
          var T = Zr(c[g]);
          if (!(b = i != null && d(i, T)))
            break;
          i = i[T];
        }
        return b || ++g != y ? b : (y = i == null ? 0 : i.length, !!y && es(y) && vn(T, y) && (Pe(i) || co(i)));
      }
      function TE(i) {
        var c = i.length, d = new i.constructor(c);
        return c && typeof i[0] == "string" && We.call(i, "index") && (d.index = i.index, d.input = i.input), d;
      }
      function bh(i) {
        return typeof i.constructor == "function" && !Ti(i) ? Uo(Aa(i)) : {};
      }
      function IE(i, c, d) {
        var g = i.constructor;
        switch (c) {
          case fi:
            return cl(i);
          case sr:
          case Ur:
            return new g(+i);
          case Ro:
            return lE(i, d);
          case pc:
          case gc:
          case mc:
          case vc:
          case yc:
          case Cc:
          case wc:
          case Ec:
          case bc:
            return oh(i, d);
          case Nt:
            return new g();
          case Ot:
          case tt:
            return new g(i);
          case Fr:
            return uE(i);
          case _t:
            return new g();
          case Qr:
            return dE(i);
        }
      }
      function AE(i, c) {
        var d = c.length;
        if (!d)
          return i;
        var g = d - 1;
        return c[g] = (d > 1 ? "& " : "") + c[g], c = c.join(d > 2 ? ", " : " "), i.replace(ky, `{
/* [wrapped with ` + c + `] */
`);
      }
      function RE(i) {
        return Pe(i) || co(i) || !!(Af && i && i[Af]);
      }
      function vn(i, c) {
        var d = typeof i;
        return c = c ?? te, !!c && (d == "number" || d != "symbol" && By.test(i)) && i > -1 && i % 1 == 0 && i < c;
      }
      function Gt(i, c, d) {
        if (!it(d))
          return !1;
        var g = typeof c;
        return (g == "number" ? Jt(d) && vn(c, d.length) : g == "string" && c in d) ? Kr(d[c], i) : !1;
      }
      function ml(i, c) {
        if (Pe(i))
          return !1;
        var d = typeof i;
        return d == "number" || d == "symbol" || d == "boolean" || i == null || dr(i) ? !0 : Ty.test(i) || !Sy.test(i) || c != null && i in Je(c);
      }
      function kE(i) {
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
      function PE(i) {
        return !!_f && _f in i;
      }
      var NE = ba ? yn : xl;
      function Ti(i) {
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
      function OE(i) {
        var c = Xa(i, function(g) {
          return d.size === f && d.clear(), g;
        }), d = c.cache;
        return c;
      }
      function ME(i, c) {
        var d = i[1], g = c[1], y = d | g, b = y < (_ | R | q), T = g == q && d == S || g == q && d == F && i[7].length <= c[8] || g == (q | F) && c[7].length <= c[8] && d == S;
        if (!(b || T))
          return i;
        g & _ && (i[2] = c[2], y |= d & _ ? 0 : A);
        var P = c[3];
        if (P) {
          var x = i[3];
          i[3] = x ? ah(x, P, c[4]) : P, i[4] = x ? xn(i[3], h) : c[4];
        }
        return P = c[5], P && (x = i[5], i[5] = x ? sh(x, P, c[6]) : P, i[6] = x ? xn(i[5], h) : c[6]), P = c[7], P && (i[7] = P), g & q && (i[8] = i[8] == null ? c[8] : xt(i[8], c[8])), i[9] == null && (i[9] = c[9]), i[0] = c[0], i[1] = y, i;
      }
      function xE(i) {
        var c = [];
        if (i != null)
          for (var d in Je(i))
            c.push(d);
        return c;
      }
      function LE(i) {
        return Sa.call(i);
      }
      function Th(i, c, d) {
        return c = vt(c === t ? i.length - 1 : c, 0), function() {
          for (var g = arguments, y = -1, b = vt(g.length - c, 0), T = D(b); ++y < b; )
            T[y] = g[c + y];
          y = -1;
          for (var P = D(c + 1); ++y < c; )
            P[y] = g[y];
          return P[c] = d(T), cr(i, this, P);
        };
      }
      function Ih(i, c) {
        return c.length < 2 ? i : io(i, Ir(c, 0, -1));
      }
      function DE(i, c) {
        for (var d = i.length, g = xt(c.length, d), y = Qt(i); g--; ) {
          var b = c[g];
          i[g] = vn(b, d) ? y[b] : t;
        }
        return i;
      }
      function yl(i, c) {
        if (!(c === "constructor" && typeof i[c] == "function") && c != "__proto__")
          return i[c];
      }
      var Ah = kh(Qf), Ii = JC || function(i, c) {
        return St.setTimeout(i, c);
      }, Cl = kh(iE);
      function Rh(i, c, d) {
        var g = c + "";
        return Cl(i, AE(g, UE(SE(g), d)));
      }
      function kh(i) {
        var c = 0, d = 0;
        return function() {
          var g = tw(), y = se - (g - d);
          if (d = g, y > 0) {
            if (++c >= Z)
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
      var Ph = OE(function(i) {
        var c = [];
        return i.charCodeAt(0) === 46 && c.push(""), i.replace(Iy, function(d, g, y, b) {
          c.push(y ? b.replace(xy, "$1") : g || d);
        }), c;
      });
      function Zr(i) {
        if (typeof i == "string" || dr(i))
          return i;
        var c = i + "";
        return c == "0" && 1 / i == -J ? "-0" : c;
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
      function UE(i, c) {
        return br(ln, function(d) {
          var g = "_." + d[0];
          c & d[1] && !ya(i, g) && i.push(g);
        }), i.sort();
      }
      function Nh(i) {
        if (i instanceof Ue)
          return i.clone();
        var c = new Sr(i.__wrapped__, i.__chain__);
        return c.__actions__ = Qt(i.__actions__), c.__index__ = i.__index__, c.__values__ = i.__values__, c;
      }
      function FE(i, c, d) {
        (d ? Gt(i, c, d) : c === t) ? c = 1 : c = vt(Ne(c), 0);
        var g = i == null ? 0 : i.length;
        if (!g || c < 1)
          return [];
        for (var y = 0, b = 0, T = D(Pa(g / c)); y < g; )
          T[b++] = Ir(i, y, y += c);
        return T;
      }
      function HE(i) {
        for (var c = -1, d = i == null ? 0 : i.length, g = 0, y = []; ++c < d; ) {
          var b = i[c];
          b && (y[g++] = b);
        }
        return y;
      }
      function BE() {
        var i = arguments.length;
        if (!i)
          return [];
        for (var c = D(i - 1), d = arguments[0], g = i; g--; )
          c[g - 1] = arguments[g];
        return Mn(Pe(d) ? Qt(d) : [d], Tt(c, 1));
      }
      var KE = Me(function(i, c) {
        return ft(i) ? wi(i, Tt(c, 1, ft, !0)) : [];
      }), qE = Me(function(i, c) {
        var d = Ar(c);
        return ft(d) && (d = t), ft(i) ? wi(i, Tt(c, 1, ft, !0), ve(d, 2)) : [];
      }), $E = Me(function(i, c) {
        var d = Ar(c);
        return ft(d) && (d = t), ft(i) ? wi(i, Tt(c, 1, ft, !0), t, d) : [];
      });
      function GE(i, c, d) {
        var g = i == null ? 0 : i.length;
        return g ? (c = d || c === t ? 1 : Ne(c), Ir(i, c < 0 ? 0 : c, g)) : [];
      }
      function zE(i, c, d) {
        var g = i == null ? 0 : i.length;
        return g ? (c = d || c === t ? 1 : Ne(c), c = g - c, Ir(i, 0, c < 0 ? 0 : c)) : [];
      }
      function VE(i, c) {
        return i && i.length ? Ba(i, ve(c, 3), !0, !0) : [];
      }
      function WE(i, c) {
        return i && i.length ? Ba(i, ve(c, 3), !0) : [];
      }
      function jE(i, c, d, g) {
        var y = i == null ? 0 : i.length;
        return y ? (d && typeof d != "number" && Gt(i, c, d) && (d = 0, g = y), Bw(i, c, d, g)) : [];
      }
      function Oh(i, c, d) {
        var g = i == null ? 0 : i.length;
        if (!g)
          return -1;
        var y = d == null ? 0 : Ne(d);
        return y < 0 && (y = vt(g + y, 0)), Ca(i, ve(c, 3), y);
      }
      function Mh(i, c, d) {
        var g = i == null ? 0 : i.length;
        if (!g)
          return -1;
        var y = g - 1;
        return d !== t && (y = Ne(d), y = d < 0 ? vt(g + y, 0) : xt(y, g - 1)), Ca(i, ve(c, 3), y, !0);
      }
      function xh(i) {
        var c = i == null ? 0 : i.length;
        return c ? Tt(i, 1) : [];
      }
      function YE(i) {
        var c = i == null ? 0 : i.length;
        return c ? Tt(i, J) : [];
      }
      function QE(i, c) {
        var d = i == null ? 0 : i.length;
        return d ? (c = c === t ? 1 : Ne(c), Tt(i, c)) : [];
      }
      function JE(i) {
        for (var c = -1, d = i == null ? 0 : i.length, g = {}; ++c < d; ) {
          var y = i[c];
          g[y[0]] = y[1];
        }
        return g;
      }
      function Lh(i) {
        return i && i.length ? i[0] : t;
      }
      function XE(i, c, d) {
        var g = i == null ? 0 : i.length;
        if (!g)
          return -1;
        var y = d == null ? 0 : Ne(d);
        return y < 0 && (y = vt(g + y, 0)), Po(i, c, y);
      }
      function ZE(i) {
        var c = i == null ? 0 : i.length;
        return c ? Ir(i, 0, -1) : [];
      }
      var eb = Me(function(i) {
        var c = nt(i, al);
        return c.length && c[0] === i[0] ? Qc(c) : [];
      }), tb = Me(function(i) {
        var c = Ar(i), d = nt(i, al);
        return c === Ar(d) ? c = t : d.pop(), d.length && d[0] === i[0] ? Qc(d, ve(c, 2)) : [];
      }), rb = Me(function(i) {
        var c = Ar(i), d = nt(i, al);
        return c = typeof c == "function" ? c : t, c && d.pop(), d.length && d[0] === i[0] ? Qc(d, t, c) : [];
      });
      function nb(i, c) {
        return i == null ? "" : ZC.call(i, c);
      }
      function Ar(i) {
        var c = i == null ? 0 : i.length;
        return c ? i[c - 1] : t;
      }
      function ob(i, c, d) {
        var g = i == null ? 0 : i.length;
        if (!g)
          return -1;
        var y = g;
        return d !== t && (y = Ne(d), y = y < 0 ? vt(g + y, 0) : xt(y, g - 1)), c === c ? UC(i, c, y) : Ca(i, gf, y, !0);
      }
      function ib(i, c) {
        return i && i.length ? Vf(i, Ne(c)) : t;
      }
      var ab = Me(Dh);
      function Dh(i, c) {
        return i && i.length && c && c.length ? el(i, c) : i;
      }
      function sb(i, c, d) {
        return i && i.length && c && c.length ? el(i, c, ve(d, 2)) : i;
      }
      function cb(i, c, d) {
        return i && i.length && c && c.length ? el(i, c, t, d) : i;
      }
      var lb = mn(function(i, c) {
        var d = i == null ? 0 : i.length, g = Vc(i, c);
        return Yf(i, nt(c, function(y) {
          return vn(y, d) ? +y : y;
        }).sort(ih)), g;
      });
      function ub(i, c) {
        var d = [];
        if (!(i && i.length))
          return d;
        var g = -1, y = [], b = i.length;
        for (c = ve(c, 3); ++g < b; ) {
          var T = i[g];
          c(T, g, i) && (d.push(T), y.push(g));
        }
        return Yf(i, y), d;
      }
      function wl(i) {
        return i == null ? i : nw.call(i);
      }
      function db(i, c, d) {
        var g = i == null ? 0 : i.length;
        return g ? (d && typeof d != "number" && Gt(i, c, d) ? (c = 0, d = g) : (c = c == null ? 0 : Ne(c), d = d === t ? g : Ne(d)), Ir(i, c, d)) : [];
      }
      function fb(i, c) {
        return Ha(i, c);
      }
      function hb(i, c, d) {
        return nl(i, c, ve(d, 2));
      }
      function pb(i, c) {
        var d = i == null ? 0 : i.length;
        if (d) {
          var g = Ha(i, c);
          if (g < d && Kr(i[g], c))
            return g;
        }
        return -1;
      }
      function gb(i, c) {
        return Ha(i, c, !0);
      }
      function mb(i, c, d) {
        return nl(i, c, ve(d, 2), !0);
      }
      function vb(i, c) {
        var d = i == null ? 0 : i.length;
        if (d) {
          var g = Ha(i, c, !0) - 1;
          if (Kr(i[g], c))
            return g;
        }
        return -1;
      }
      function yb(i) {
        return i && i.length ? Jf(i) : [];
      }
      function Cb(i, c) {
        return i && i.length ? Jf(i, ve(c, 2)) : [];
      }
      function wb(i) {
        var c = i == null ? 0 : i.length;
        return c ? Ir(i, 1, c) : [];
      }
      function Eb(i, c, d) {
        return i && i.length ? (c = d || c === t ? 1 : Ne(c), Ir(i, 0, c < 0 ? 0 : c)) : [];
      }
      function bb(i, c, d) {
        var g = i == null ? 0 : i.length;
        return g ? (c = d || c === t ? 1 : Ne(c), c = g - c, Ir(i, c < 0 ? 0 : c, g)) : [];
      }
      function _b(i, c) {
        return i && i.length ? Ba(i, ve(c, 3), !1, !0) : [];
      }
      function Sb(i, c) {
        return i && i.length ? Ba(i, ve(c, 3)) : [];
      }
      var Tb = Me(function(i) {
        return Un(Tt(i, 1, ft, !0));
      }), Ib = Me(function(i) {
        var c = Ar(i);
        return ft(c) && (c = t), Un(Tt(i, 1, ft, !0), ve(c, 2));
      }), Ab = Me(function(i) {
        var c = Ar(i);
        return c = typeof c == "function" ? c : t, Un(Tt(i, 1, ft, !0), t, c);
      });
      function Rb(i) {
        return i && i.length ? Un(i) : [];
      }
      function kb(i, c) {
        return i && i.length ? Un(i, ve(c, 2)) : [];
      }
      function Pb(i, c) {
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
      function Uh(i, c) {
        if (!(i && i.length))
          return [];
        var d = El(i);
        return c == null ? d : nt(d, function(g) {
          return cr(c, t, g);
        });
      }
      var Nb = Me(function(i, c) {
        return ft(i) ? wi(i, c) : [];
      }), Ob = Me(function(i) {
        return il(On(i, ft));
      }), Mb = Me(function(i) {
        var c = Ar(i);
        return ft(c) && (c = t), il(On(i, ft), ve(c, 2));
      }), xb = Me(function(i) {
        var c = Ar(i);
        return c = typeof c == "function" ? c : t, il(On(i, ft), t, c);
      }), Lb = Me(El);
      function Db(i, c) {
        return th(i || [], c || [], Ci);
      }
      function Ub(i, c) {
        return th(i || [], c || [], _i);
      }
      var Fb = Me(function(i) {
        var c = i.length, d = c > 1 ? i[c - 1] : t;
        return d = typeof d == "function" ? (i.pop(), d) : t, Uh(i, d);
      });
      function Fh(i) {
        var c = w(i);
        return c.__chain__ = !0, c;
      }
      function Hb(i, c) {
        return c(i), i;
      }
      function Ya(i, c) {
        return c(i);
      }
      var Bb = mn(function(i) {
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
      function Kb() {
        return Fh(this);
      }
      function qb() {
        return new Sr(this.value(), this.__chain__);
      }
      function $b() {
        this.__values__ === t && (this.__values__ = Xh(this.value()));
        var i = this.__index__ >= this.__values__.length, c = i ? t : this.__values__[this.__index__++];
        return { done: i, value: c };
      }
      function Gb() {
        return this;
      }
      function zb(i) {
        for (var c, d = this; d instanceof xa; ) {
          var g = Nh(d);
          g.__index__ = 0, g.__values__ = t, c ? y.__wrapped__ = g : c = g;
          var y = g;
          d = d.__wrapped__;
        }
        return y.__wrapped__ = i, c;
      }
      function Vb() {
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
      function Wb() {
        return eh(this.__wrapped__, this.__actions__);
      }
      var jb = Ka(function(i, c, d) {
        We.call(i, d) ? ++i[d] : pn(i, d, 1);
      });
      function Yb(i, c, d) {
        var g = Pe(i) ? hf : Hw;
        return d && Gt(i, c, d) && (c = t), g(i, ve(c, 3));
      }
      function Qb(i, c) {
        var d = Pe(i) ? On : Uf;
        return d(i, ve(c, 3));
      }
      var Jb = dh(Oh), Xb = dh(Mh);
      function Zb(i, c) {
        return Tt(Qa(i, c), 1);
      }
      function e_(i, c) {
        return Tt(Qa(i, c), J);
      }
      function t_(i, c, d) {
        return d = d === t ? 1 : Ne(d), Tt(Qa(i, c), d);
      }
      function Hh(i, c) {
        var d = Pe(i) ? br : Dn;
        return d(i, ve(c, 3));
      }
      function Bh(i, c) {
        var d = Pe(i) ? wC : Df;
        return d(i, ve(c, 3));
      }
      var r_ = Ka(function(i, c, d) {
        We.call(i, d) ? i[d].push(c) : pn(i, d, [c]);
      });
      function n_(i, c, d, g) {
        i = Jt(i) ? i : qo(i), d = d && !g ? Ne(d) : 0;
        var y = i.length;
        return d < 0 && (d = vt(y + d, 0)), ts(i) ? d <= y && i.indexOf(c, d) > -1 : !!y && Po(i, c, d) > -1;
      }
      var o_ = Me(function(i, c, d) {
        var g = -1, y = typeof c == "function", b = Jt(i) ? D(i.length) : [];
        return Dn(i, function(T) {
          b[++g] = y ? cr(c, T, d) : Ei(T, c, d);
        }), b;
      }), i_ = Ka(function(i, c, d) {
        pn(i, d, c);
      });
      function Qa(i, c) {
        var d = Pe(i) ? nt : $f;
        return d(i, ve(c, 3));
      }
      function a_(i, c, d, g) {
        return i == null ? [] : (Pe(c) || (c = c == null ? [] : [c]), d = g ? t : d, Pe(d) || (d = d == null ? [] : [d]), Wf(i, c, d));
      }
      var s_ = Ka(function(i, c, d) {
        i[d ? 0 : 1].push(c);
      }, function() {
        return [[], []];
      });
      function c_(i, c, d) {
        var g = Pe(i) ? Mc : vf, y = arguments.length < 3;
        return g(i, ve(c, 4), d, y, Dn);
      }
      function l_(i, c, d) {
        var g = Pe(i) ? EC : vf, y = arguments.length < 3;
        return g(i, ve(c, 4), d, y, Df);
      }
      function u_(i, c) {
        var d = Pe(i) ? On : Uf;
        return d(i, Za(ve(c, 3)));
      }
      function d_(i) {
        var c = Pe(i) ? Of : nE;
        return c(i);
      }
      function f_(i, c, d) {
        (d ? Gt(i, c, d) : c === t) ? c = 1 : c = Ne(c);
        var g = Pe(i) ? xw : oE;
        return g(i, c);
      }
      function h_(i) {
        var c = Pe(i) ? Lw : aE;
        return c(i);
      }
      function p_(i) {
        if (i == null)
          return 0;
        if (Jt(i))
          return ts(i) ? Oo(i) : i.length;
        var c = Lt(i);
        return c == Nt || c == _t ? i.size : Xc(i).length;
      }
      function g_(i, c, d) {
        var g = Pe(i) ? xc : sE;
        return d && Gt(i, c, d) && (c = t), g(i, ve(c, 3));
      }
      var m_ = Me(function(i, c) {
        if (i == null)
          return [];
        var d = c.length;
        return d > 1 && Gt(i, c[0], c[1]) ? c = [] : d > 2 && Gt(c[0], c[1], c[2]) && (c = [c[0]]), Wf(i, Tt(c, 1), []);
      }), Ja = QC || function() {
        return St.Date.now();
      };
      function v_(i, c) {
        if (typeof c != "function")
          throw new _r(s);
        return i = Ne(i), function() {
          if (--i < 1)
            return c.apply(this, arguments);
        };
      }
      function Kh(i, c, d) {
        return c = d ? t : c, c = i && c == null ? i.length : c, gn(i, q, t, t, t, t, c);
      }
      function qh(i, c) {
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
      }), $h = Me(function(i, c, d) {
        var g = _ | R;
        if (d.length) {
          var y = xn(d, Bo($h));
          g |= O;
        }
        return gn(c, g, i, d, y);
      });
      function Gh(i, c, d) {
        c = d ? t : c;
        var g = gn(i, S, t, t, t, t, t, c);
        return g.placeholder = Gh.placeholder, g;
      }
      function zh(i, c, d) {
        c = d ? t : c;
        var g = gn(i, I, t, t, t, t, t, c);
        return g.placeholder = zh.placeholder, g;
      }
      function Vh(i, c, d) {
        var g, y, b, T, P, x, B = 0, K = !1, W = !1, ne = !0;
        if (typeof i != "function")
          throw new _r(s);
        c = Rr(c) || 0, it(d) && (K = !!d.leading, W = "maxWait" in d, b = W ? vt(Rr(d.maxWait) || 0, c) : b, ne = "trailing" in d ? !!d.trailing : ne);
        function he(ht) {
          var qr = g, wn = y;
          return g = y = t, B = ht, T = i.apply(wn, qr), T;
        }
        function ye(ht) {
          return B = ht, P = Ii(Le, c), K ? he(ht) : T;
        }
        function Oe(ht) {
          var qr = ht - x, wn = ht - B, dp = c - qr;
          return W ? xt(dp, b - wn) : dp;
        }
        function Ce(ht) {
          var qr = ht - x, wn = ht - B;
          return x === t || qr >= c || qr < 0 || W && wn >= b;
        }
        function Le() {
          var ht = Ja();
          if (Ce(ht))
            return Fe(ht);
          P = Ii(Le, Oe(ht));
        }
        function Fe(ht) {
          return P = t, ne && g ? he(ht) : (g = y = t, T);
        }
        function fr() {
          P !== t && rh(P), B = 0, g = x = y = P = t;
        }
        function zt() {
          return P === t ? T : Fe(Ja());
        }
        function hr() {
          var ht = Ja(), qr = Ce(ht);
          if (g = arguments, y = this, x = ht, qr) {
            if (P === t)
              return ye(x);
            if (W)
              return rh(P), P = Ii(Le, c), he(x);
          }
          return P === t && (P = Ii(Le, c)), T;
        }
        return hr.cancel = fr, hr.flush = zt, hr;
      }
      var y_ = Me(function(i, c) {
        return Lf(i, 1, c);
      }), C_ = Me(function(i, c, d) {
        return Lf(i, Rr(c) || 0, d);
      });
      function w_(i) {
        return gn(i, ie);
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
      function E_(i) {
        return qh(2, i);
      }
      var b_ = cE(function(i, c) {
        c = c.length == 1 && Pe(c[0]) ? nt(c[0], lr(ve())) : nt(Tt(c, 1), lr(ve()));
        var d = c.length;
        return Me(function(g) {
          for (var y = -1, b = xt(g.length, d); ++y < b; )
            g[y] = c[y].call(this, g[y]);
          return cr(i, this, g);
        });
      }), _l = Me(function(i, c) {
        var d = xn(c, Bo(_l));
        return gn(i, O, t, c, d);
      }), Wh = Me(function(i, c) {
        var d = xn(c, Bo(Wh));
        return gn(i, L, t, c, d);
      }), __ = mn(function(i, c) {
        return gn(i, F, t, t, t, c);
      });
      function S_(i, c) {
        if (typeof i != "function")
          throw new _r(s);
        return c = c === t ? c : Ne(c), Me(i, c);
      }
      function T_(i, c) {
        if (typeof i != "function")
          throw new _r(s);
        return c = c == null ? 0 : vt(Ne(c), 0), Me(function(d) {
          var g = d[c], y = Hn(d, 0, c);
          return g && Mn(y, g), cr(i, this, y);
        });
      }
      function I_(i, c, d) {
        var g = !0, y = !0;
        if (typeof i != "function")
          throw new _r(s);
        return it(d) && (g = "leading" in d ? !!d.leading : g, y = "trailing" in d ? !!d.trailing : y), Vh(i, c, {
          leading: g,
          maxWait: c,
          trailing: y
        });
      }
      function A_(i) {
        return Kh(i, 1);
      }
      function R_(i, c) {
        return _l(sl(c), i);
      }
      function k_() {
        if (!arguments.length)
          return [];
        var i = arguments[0];
        return Pe(i) ? i : [i];
      }
      function P_(i) {
        return Tr(i, v);
      }
      function N_(i, c) {
        return c = typeof c == "function" ? c : t, Tr(i, v, c);
      }
      function O_(i) {
        return Tr(i, p | v);
      }
      function M_(i, c) {
        return c = typeof c == "function" ? c : t, Tr(i, p | v, c);
      }
      function x_(i, c) {
        return c == null || xf(i, c, wt(c));
      }
      function Kr(i, c) {
        return i === c || i !== i && c !== c;
      }
      var L_ = za(Yc), D_ = za(function(i, c) {
        return i >= c;
      }), co = Bf(function() {
        return arguments;
      }()) ? Bf : function(i) {
        return st(i) && We.call(i, "callee") && !If.call(i, "callee");
      }, Pe = D.isArray, U_ = sf ? lr(sf) : zw;
      function Jt(i) {
        return i != null && es(i.length) && !yn(i);
      }
      function ft(i) {
        return st(i) && Jt(i);
      }
      function F_(i) {
        return i === !0 || i === !1 || st(i) && $t(i) == sr;
      }
      var Bn = XC || xl, H_ = cf ? lr(cf) : Vw;
      function B_(i) {
        return st(i) && i.nodeType === 1 && !Ai(i);
      }
      function K_(i) {
        if (i == null)
          return !0;
        if (Jt(i) && (Pe(i) || typeof i == "string" || typeof i.splice == "function" || Bn(i) || Ko(i) || co(i)))
          return !i.length;
        var c = Lt(i);
        if (c == Nt || c == _t)
          return !i.size;
        if (Ti(i))
          return !Xc(i).length;
        for (var d in i)
          if (We.call(i, d))
            return !1;
        return !0;
      }
      function q_(i, c) {
        return bi(i, c);
      }
      function $_(i, c, d) {
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
      function G_(i) {
        return typeof i == "number" && Rf(i);
      }
      function yn(i) {
        if (!it(i))
          return !1;
        var c = $t(i);
        return c == wr || c == Ye || c == un || c == Zn;
      }
      function jh(i) {
        return typeof i == "number" && i == Ne(i);
      }
      function es(i) {
        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= te;
      }
      function it(i) {
        var c = typeof i;
        return i != null && (c == "object" || c == "function");
      }
      function st(i) {
        return i != null && typeof i == "object";
      }
      var Yh = lf ? lr(lf) : jw;
      function z_(i, c) {
        return i === c || Jc(i, c, pl(c));
      }
      function V_(i, c, d) {
        return d = typeof d == "function" ? d : t, Jc(i, c, pl(c), d);
      }
      function W_(i) {
        return Qh(i) && i != +i;
      }
      function j_(i) {
        if (NE(i))
          throw new Re(a);
        return Kf(i);
      }
      function Y_(i) {
        return i === null;
      }
      function Q_(i) {
        return i == null;
      }
      function Qh(i) {
        return typeof i == "number" || st(i) && $t(i) == Ot;
      }
      function Ai(i) {
        if (!st(i) || $t(i) != gt)
          return !1;
        var c = Aa(i);
        if (c === null)
          return !0;
        var d = We.call(c, "constructor") && c.constructor;
        return typeof d == "function" && d instanceof d && _a.call(d) == VC;
      }
      var Tl = uf ? lr(uf) : Yw;
      function J_(i) {
        return jh(i) && i >= -te && i <= te;
      }
      var Jh = df ? lr(df) : Qw;
      function ts(i) {
        return typeof i == "string" || !Pe(i) && st(i) && $t(i) == tt;
      }
      function dr(i) {
        return typeof i == "symbol" || st(i) && $t(i) == Qr;
      }
      var Ko = ff ? lr(ff) : Jw;
      function X_(i) {
        return i === t;
      }
      function Z_(i) {
        return st(i) && Lt(i) == di;
      }
      function eS(i) {
        return st(i) && $t(i) == my;
      }
      var tS = za(Zc), rS = za(function(i, c) {
        return i <= c;
      });
      function Xh(i) {
        if (!i)
          return [];
        if (Jt(i))
          return ts(i) ? Hr(i) : Qt(i);
        if (pi && i[pi])
          return xC(i[pi]());
        var c = Lt(i), d = c == Nt ? Bc : c == _t ? wa : qo;
        return d(i);
      }
      function Cn(i) {
        if (!i)
          return i === 0 ? i : 0;
        if (i = Rr(i), i === J || i === -J) {
          var c = i < 0 ? -1 : 1;
          return c * Ie;
        }
        return i === i ? i : 0;
      }
      function Ne(i) {
        var c = Cn(i), d = c % 1;
        return c === c ? d ? c - d : c : 0;
      }
      function Zh(i) {
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
        i = yf(i);
        var d = Uy.test(i);
        return d || Hy.test(i) ? vC(i.slice(2), d ? 2 : 8) : Dy.test(i) ? Qe : +i;
      }
      function ep(i) {
        return Xr(i, Xt(i));
      }
      function nS(i) {
        return i ? oo(Ne(i), -te, te) : i === 0 ? i : 0;
      }
      function ze(i) {
        return i == null ? "" : ur(i);
      }
      var oS = Fo(function(i, c) {
        if (Ti(c) || Jt(c)) {
          Xr(c, wt(c), i);
          return;
        }
        for (var d in c)
          We.call(c, d) && Ci(i, d, c[d]);
      }), tp = Fo(function(i, c) {
        Xr(c, Xt(c), i);
      }), rs = Fo(function(i, c, d, g) {
        Xr(c, Xt(c), i, g);
      }), iS = Fo(function(i, c, d, g) {
        Xr(c, wt(c), i, g);
      }), aS = mn(Vc);
      function sS(i, c) {
        var d = Uo(i);
        return c == null ? d : Mf(d, c);
      }
      var cS = Me(function(i, c) {
        i = Je(i);
        var d = -1, g = c.length, y = g > 2 ? c[2] : t;
        for (y && Gt(c[0], c[1], y) && (g = 1); ++d < g; )
          for (var b = c[d], T = Xt(b), P = -1, x = T.length; ++P < x; ) {
            var B = T[P], K = i[B];
            (K === t || Kr(K, xo[B]) && !We.call(i, B)) && (i[B] = b[B]);
          }
        return i;
      }), lS = Me(function(i) {
        return i.push(t, yh), cr(rp, t, i);
      });
      function uS(i, c) {
        return pf(i, ve(c, 3), Jr);
      }
      function dS(i, c) {
        return pf(i, ve(c, 3), jc);
      }
      function fS(i, c) {
        return i == null ? i : Wc(i, ve(c, 3), Xt);
      }
      function hS(i, c) {
        return i == null ? i : Ff(i, ve(c, 3), Xt);
      }
      function pS(i, c) {
        return i && Jr(i, ve(c, 3));
      }
      function gS(i, c) {
        return i && jc(i, ve(c, 3));
      }
      function mS(i) {
        return i == null ? [] : Ua(i, wt(i));
      }
      function vS(i) {
        return i == null ? [] : Ua(i, Xt(i));
      }
      function Il(i, c, d) {
        var g = i == null ? t : io(i, c);
        return g === t ? d : g;
      }
      function yS(i, c) {
        return i != null && Eh(i, c, Kw);
      }
      function Al(i, c) {
        return i != null && Eh(i, c, qw);
      }
      var CS = hh(function(i, c, d) {
        c != null && typeof c.toString != "function" && (c = Sa.call(c)), i[c] = d;
      }, kl(Zt)), wS = hh(function(i, c, d) {
        c != null && typeof c.toString != "function" && (c = Sa.call(c)), We.call(i, c) ? i[c].push(d) : i[c] = [d];
      }, ve), ES = Me(Ei);
      function wt(i) {
        return Jt(i) ? Nf(i) : Xc(i);
      }
      function Xt(i) {
        return Jt(i) ? Nf(i, !0) : Xw(i);
      }
      function bS(i, c) {
        var d = {};
        return c = ve(c, 3), Jr(i, function(g, y, b) {
          pn(d, c(g, y, b), g);
        }), d;
      }
      function _S(i, c) {
        var d = {};
        return c = ve(c, 3), Jr(i, function(g, y, b) {
          pn(d, y, c(g, y, b));
        }), d;
      }
      var SS = Fo(function(i, c, d) {
        Fa(i, c, d);
      }), rp = Fo(function(i, c, d, g) {
        Fa(i, c, d, g);
      }), TS = mn(function(i, c) {
        var d = {};
        if (i == null)
          return d;
        var g = !1;
        c = nt(c, function(b) {
          return b = Fn(b, i), g || (g = b.length > 1), b;
        }), Xr(i, fl(i), d), g && (d = Tr(d, p | m | v, CE));
        for (var y = c.length; y--; )
          ol(d, c[y]);
        return d;
      });
      function IS(i, c) {
        return np(i, Za(ve(c)));
      }
      var AS = mn(function(i, c) {
        return i == null ? {} : eE(i, c);
      });
      function np(i, c) {
        if (i == null)
          return {};
        var d = nt(fl(i), function(g) {
          return [g];
        });
        return c = ve(c), jf(i, d, function(g, y) {
          return c(g, y[0]);
        });
      }
      function RS(i, c, d) {
        c = Fn(c, i);
        var g = -1, y = c.length;
        for (y || (y = 1, i = t); ++g < y; ) {
          var b = i == null ? t : i[Zr(c[g])];
          b === t && (g = y, b = d), i = yn(b) ? b.call(i) : b;
        }
        return i;
      }
      function kS(i, c, d) {
        return i == null ? i : _i(i, c, d);
      }
      function PS(i, c, d, g) {
        return g = typeof g == "function" ? g : t, i == null ? i : _i(i, c, d, g);
      }
      var op = mh(wt), ip = mh(Xt);
      function NS(i, c, d) {
        var g = Pe(i), y = g || Bn(i) || Ko(i);
        if (c = ve(c, 4), d == null) {
          var b = i && i.constructor;
          y ? d = g ? new b() : [] : it(i) ? d = yn(b) ? Uo(Aa(i)) : {} : d = {};
        }
        return (y ? br : Jr)(i, function(T, P, x) {
          return c(d, T, P, x);
        }), d;
      }
      function OS(i, c) {
        return i == null ? !0 : ol(i, c);
      }
      function MS(i, c, d) {
        return i == null ? i : Zf(i, c, sl(d));
      }
      function xS(i, c, d, g) {
        return g = typeof g == "function" ? g : t, i == null ? i : Zf(i, c, sl(d), g);
      }
      function qo(i) {
        return i == null ? [] : Hc(i, wt(i));
      }
      function LS(i) {
        return i == null ? [] : Hc(i, Xt(i));
      }
      function DS(i, c, d) {
        return d === t && (d = c, c = t), d !== t && (d = Rr(d), d = d === d ? d : 0), c !== t && (c = Rr(c), c = c === c ? c : 0), oo(Rr(i), c, d);
      }
      function US(i, c, d) {
        return c = Cn(c), d === t ? (d = c, c = 0) : d = Cn(d), i = Rr(i), $w(i, c, d);
      }
      function FS(i, c, d) {
        if (d && typeof d != "boolean" && Gt(i, c, d) && (c = d = t), d === t && (typeof c == "boolean" ? (d = c, c = t) : typeof i == "boolean" && (d = i, i = t)), i === t && c === t ? (i = 0, c = 1) : (i = Cn(i), c === t ? (c = i, i = 0) : c = Cn(c)), i > c) {
          var g = i;
          i = c, c = g;
        }
        if (d || i % 1 || c % 1) {
          var y = kf();
          return xt(i + y * (c - i + mC("1e-" + ((y + "").length - 1))), c);
        }
        return tl(i, c);
      }
      var HS = Ho(function(i, c, d) {
        return c = c.toLowerCase(), i + (d ? ap(c) : c);
      });
      function ap(i) {
        return Rl(ze(i).toLowerCase());
      }
      function sp(i) {
        return i = ze(i), i && i.replace(Ky, kC).replace(aC, "");
      }
      function BS(i, c, d) {
        i = ze(i), c = ur(c);
        var g = i.length;
        d = d === t ? g : oo(Ne(d), 0, g);
        var y = d;
        return d -= c.length, d >= 0 && i.slice(d, y) == c;
      }
      function KS(i) {
        return i = ze(i), i && Ey.test(i) ? i.replace(Ud, PC) : i;
      }
      function qS(i) {
        return i = ze(i), i && Ay.test(i) ? i.replace(_c, "\\$&") : i;
      }
      var $S = Ho(function(i, c, d) {
        return i + (d ? "-" : "") + c.toLowerCase();
      }), GS = Ho(function(i, c, d) {
        return i + (d ? " " : "") + c.toLowerCase();
      }), zS = uh("toLowerCase");
      function VS(i, c, d) {
        i = ze(i), c = Ne(c);
        var g = c ? Oo(i) : 0;
        if (!c || g >= c)
          return i;
        var y = (c - g) / 2;
        return Ga(Na(y), d) + i + Ga(Pa(y), d);
      }
      function WS(i, c, d) {
        i = ze(i), c = Ne(c);
        var g = c ? Oo(i) : 0;
        return c && g < c ? i + Ga(c - g, d) : i;
      }
      function jS(i, c, d) {
        i = ze(i), c = Ne(c);
        var g = c ? Oo(i) : 0;
        return c && g < c ? Ga(c - g, d) + i : i;
      }
      function YS(i, c, d) {
        return d || c == null ? c = 0 : c && (c = +c), rw(ze(i).replace(Sc, ""), c || 0);
      }
      function QS(i, c, d) {
        return (d ? Gt(i, c, d) : c === t) ? c = 1 : c = Ne(c), rl(ze(i), c);
      }
      function JS() {
        var i = arguments, c = ze(i[0]);
        return i.length < 3 ? c : c.replace(i[1], i[2]);
      }
      var XS = Ho(function(i, c, d) {
        return i + (d ? "_" : "") + c.toLowerCase();
      });
      function ZS(i, c, d) {
        return d && typeof d != "number" && Gt(i, c, d) && (c = d = t), d = d === t ? ot : d >>> 0, d ? (i = ze(i), i && (typeof c == "string" || c != null && !Tl(c)) && (c = ur(c), !c && No(i)) ? Hn(Hr(i), 0, d) : i.split(c, d)) : [];
      }
      var eT = Ho(function(i, c, d) {
        return i + (d ? " " : "") + Rl(c);
      });
      function tT(i, c, d) {
        return i = ze(i), d = d == null ? 0 : oo(Ne(d), 0, i.length), c = ur(c), i.slice(d, d + c.length) == c;
      }
      function rT(i, c, d) {
        var g = w.templateSettings;
        d && Gt(i, c, d) && (c = t), i = ze(i), c = rs({}, c, g, vh);
        var y = rs({}, c.imports, g.imports, vh), b = wt(y), T = Hc(y, b), P, x, B = 0, K = c.interpolate || ga, W = "__p += '", ne = Kc(
          (c.escape || ga).source + "|" + K.source + "|" + (K === Fd ? Ly : ga).source + "|" + (c.evaluate || ga).source + "|$",
          "g"
        ), he = "//# sourceURL=" + (We.call(c, "sourceURL") ? (c.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++dC + "]") + `
`;
        i.replace(ne, function(Ce, Le, Fe, fr, zt, hr) {
          return Fe || (Fe = fr), W += i.slice(B, hr).replace(qy, NC), Le && (P = !0, W += `' +
__e(` + Le + `) +
'`), zt && (x = !0, W += `';
` + zt + `;
__p += '`), Fe && (W += `' +
((__t = (` + Fe + `)) == null ? '' : __t) +
'`), B = hr + Ce.length, Ce;
        }), W += `';
`;
        var ye = We.call(c, "variable") && c.variable;
        if (!ye)
          W = `with (obj) {
` + W + `
}
`;
        else if (My.test(ye))
          throw new Re(l);
        W = (x ? W.replace(vy, "") : W).replace(yy, "$1").replace(Cy, "$1;"), W = "function(" + (ye || "obj") + `) {
` + (ye ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (P ? ", __e = _.escape" : "") + (x ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + W + `return __p
}`;
        var Oe = lp(function() {
          return qe(b, he + "return " + W).apply(t, T);
        });
        if (Oe.source = W, Sl(Oe))
          throw Oe;
        return Oe;
      }
      function nT(i) {
        return ze(i).toLowerCase();
      }
      function oT(i) {
        return ze(i).toUpperCase();
      }
      function iT(i, c, d) {
        if (i = ze(i), i && (d || c === t))
          return yf(i);
        if (!i || !(c = ur(c)))
          return i;
        var g = Hr(i), y = Hr(c), b = Cf(g, y), T = wf(g, y) + 1;
        return Hn(g, b, T).join("");
      }
      function aT(i, c, d) {
        if (i = ze(i), i && (d || c === t))
          return i.slice(0, bf(i) + 1);
        if (!i || !(c = ur(c)))
          return i;
        var g = Hr(i), y = wf(g, Hr(c)) + 1;
        return Hn(g, 0, y).join("");
      }
      function sT(i, c, d) {
        if (i = ze(i), i && (d || c === t))
          return i.replace(Sc, "");
        if (!i || !(c = ur(c)))
          return i;
        var g = Hr(i), y = Cf(g, Hr(c));
        return Hn(g, y).join("");
      }
      function cT(i, c) {
        var d = j, g = re;
        if (it(c)) {
          var y = "separator" in c ? c.separator : y;
          d = "length" in c ? Ne(c.length) : d, g = "omission" in c ? ur(c.omission) : g;
        }
        i = ze(i);
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
            var B, K = x;
            for (y.global || (y = Kc(y.source, ze(Hd.exec(y)) + "g")), y.lastIndex = 0; B = y.exec(K); )
              var W = B.index;
            x = x.slice(0, W === t ? P : W);
          }
        } else if (i.indexOf(ur(y), P) != P) {
          var ne = x.lastIndexOf(y);
          ne > -1 && (x = x.slice(0, ne));
        }
        return x + g;
      }
      function lT(i) {
        return i = ze(i), i && wy.test(i) ? i.replace(Dd, FC) : i;
      }
      var uT = Ho(function(i, c, d) {
        return i + (d ? " " : "") + c.toUpperCase();
      }), Rl = uh("toUpperCase");
      function cp(i, c, d) {
        return i = ze(i), c = d ? t : c, c === t ? MC(i) ? KC(i) : SC(i) : i.match(c) || [];
      }
      var lp = Me(function(i, c) {
        try {
          return cr(i, t, c);
        } catch (d) {
          return Sl(d) ? d : new Re(d);
        }
      }), dT = mn(function(i, c) {
        return br(c, function(d) {
          d = Zr(d), pn(i, d, bl(i[d], i));
        }), i;
      });
      function fT(i) {
        var c = i == null ? 0 : i.length, d = ve();
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
      function hT(i) {
        return Fw(Tr(i, p));
      }
      function kl(i) {
        return function() {
          return i;
        };
      }
      function pT(i, c) {
        return i == null || i !== i ? c : i;
      }
      var gT = fh(), mT = fh(!0);
      function Zt(i) {
        return i;
      }
      function Pl(i) {
        return qf(typeof i == "function" ? i : Tr(i, p));
      }
      function vT(i) {
        return Gf(Tr(i, p));
      }
      function yT(i, c) {
        return zf(i, Tr(c, p));
      }
      var CT = Me(function(i, c) {
        return function(d) {
          return Ei(d, i, c);
        };
      }), wT = Me(function(i, c) {
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
            var B = this.__chain__;
            if (b || B) {
              var K = i(this.__wrapped__), W = K.__actions__ = Qt(this.__actions__);
              return W.push({ func: x, args: arguments, thisArg: i }), K.__chain__ = B, K;
            }
            return x.apply(i, Mn([this.value()], arguments));
          });
        }), i;
      }
      function ET() {
        return St._ === this && (St._ = WC), this;
      }
      function Ol() {
      }
      function bT(i) {
        return i = Ne(i), Me(function(c) {
          return Vf(c, i);
        });
      }
      var _T = ll(nt), ST = ll(hf), TT = ll(xc);
      function up(i) {
        return ml(i) ? Lc(Zr(i)) : tE(i);
      }
      function IT(i) {
        return function(c) {
          return i == null ? t : io(i, c);
        };
      }
      var AT = ph(), RT = ph(!0);
      function Ml() {
        return [];
      }
      function xl() {
        return !1;
      }
      function kT() {
        return {};
      }
      function PT() {
        return "";
      }
      function NT() {
        return !0;
      }
      function OT(i, c) {
        if (i = Ne(i), i < 1 || i > te)
          return [];
        var d = ot, g = xt(i, ot);
        c = ve(c), i -= ot;
        for (var y = Fc(g, c); ++d < i; )
          c(d);
        return y;
      }
      function MT(i) {
        return Pe(i) ? nt(i, Zr) : dr(i) ? [i] : Qt(Ph(ze(i)));
      }
      function xT(i) {
        var c = ++zC;
        return ze(i) + c;
      }
      var LT = $a(function(i, c) {
        return i + c;
      }, 0), DT = ul("ceil"), UT = $a(function(i, c) {
        return i / c;
      }, 1), FT = ul("floor");
      function HT(i) {
        return i && i.length ? Da(i, Zt, Yc) : t;
      }
      function BT(i, c) {
        return i && i.length ? Da(i, ve(c, 2), Yc) : t;
      }
      function KT(i) {
        return mf(i, Zt);
      }
      function qT(i, c) {
        return mf(i, ve(c, 2));
      }
      function $T(i) {
        return i && i.length ? Da(i, Zt, Zc) : t;
      }
      function GT(i, c) {
        return i && i.length ? Da(i, ve(c, 2), Zc) : t;
      }
      var zT = $a(function(i, c) {
        return i * c;
      }, 1), VT = ul("round"), WT = $a(function(i, c) {
        return i - c;
      }, 0);
      function jT(i) {
        return i && i.length ? Uc(i, Zt) : 0;
      }
      function YT(i, c) {
        return i && i.length ? Uc(i, ve(c, 2)) : 0;
      }
      return w.after = v_, w.ary = Kh, w.assign = oS, w.assignIn = tp, w.assignInWith = rs, w.assignWith = iS, w.at = aS, w.before = qh, w.bind = bl, w.bindAll = dT, w.bindKey = $h, w.castArray = k_, w.chain = Fh, w.chunk = FE, w.compact = HE, w.concat = BE, w.cond = fT, w.conforms = hT, w.constant = kl, w.countBy = jb, w.create = sS, w.curry = Gh, w.curryRight = zh, w.debounce = Vh, w.defaults = cS, w.defaultsDeep = lS, w.defer = y_, w.delay = C_, w.difference = KE, w.differenceBy = qE, w.differenceWith = $E, w.drop = GE, w.dropRight = zE, w.dropRightWhile = VE, w.dropWhile = WE, w.fill = jE, w.filter = Qb, w.flatMap = Zb, w.flatMapDeep = e_, w.flatMapDepth = t_, w.flatten = xh, w.flattenDeep = YE, w.flattenDepth = QE, w.flip = w_, w.flow = gT, w.flowRight = mT, w.fromPairs = JE, w.functions = mS, w.functionsIn = vS, w.groupBy = r_, w.initial = ZE, w.intersection = eb, w.intersectionBy = tb, w.intersectionWith = rb, w.invert = CS, w.invertBy = wS, w.invokeMap = o_, w.iteratee = Pl, w.keyBy = i_, w.keys = wt, w.keysIn = Xt, w.map = Qa, w.mapKeys = bS, w.mapValues = _S, w.matches = vT, w.matchesProperty = yT, w.memoize = Xa, w.merge = SS, w.mergeWith = rp, w.method = CT, w.methodOf = wT, w.mixin = Nl, w.negate = Za, w.nthArg = bT, w.omit = TS, w.omitBy = IS, w.once = E_, w.orderBy = a_, w.over = _T, w.overArgs = b_, w.overEvery = ST, w.overSome = TT, w.partial = _l, w.partialRight = Wh, w.partition = s_, w.pick = AS, w.pickBy = np, w.property = up, w.propertyOf = IT, w.pull = ab, w.pullAll = Dh, w.pullAllBy = sb, w.pullAllWith = cb, w.pullAt = lb, w.range = AT, w.rangeRight = RT, w.rearg = __, w.reject = u_, w.remove = ub, w.rest = S_, w.reverse = wl, w.sampleSize = f_, w.set = kS, w.setWith = PS, w.shuffle = h_, w.slice = db, w.sortBy = m_, w.sortedUniq = yb, w.sortedUniqBy = Cb, w.split = ZS, w.spread = T_, w.tail = wb, w.take = Eb, w.takeRight = bb, w.takeRightWhile = _b, w.takeWhile = Sb, w.tap = Hb, w.throttle = I_, w.thru = Ya, w.toArray = Xh, w.toPairs = op, w.toPairsIn = ip, w.toPath = MT, w.toPlainObject = ep, w.transform = NS, w.unary = A_, w.union = Tb, w.unionBy = Ib, w.unionWith = Ab, w.uniq = Rb, w.uniqBy = kb, w.uniqWith = Pb, w.unset = OS, w.unzip = El, w.unzipWith = Uh, w.update = MS, w.updateWith = xS, w.values = qo, w.valuesIn = LS, w.without = Nb, w.words = cp, w.wrap = R_, w.xor = Ob, w.xorBy = Mb, w.xorWith = xb, w.zip = Lb, w.zipObject = Db, w.zipObjectDeep = Ub, w.zipWith = Fb, w.entries = op, w.entriesIn = ip, w.extend = tp, w.extendWith = rs, Nl(w, w), w.add = LT, w.attempt = lp, w.camelCase = HS, w.capitalize = ap, w.ceil = DT, w.clamp = DS, w.clone = P_, w.cloneDeep = O_, w.cloneDeepWith = M_, w.cloneWith = N_, w.conformsTo = x_, w.deburr = sp, w.defaultTo = pT, w.divide = UT, w.endsWith = BS, w.eq = Kr, w.escape = KS, w.escapeRegExp = qS, w.every = Yb, w.find = Jb, w.findIndex = Oh, w.findKey = uS, w.findLast = Xb, w.findLastIndex = Mh, w.findLastKey = dS, w.floor = FT, w.forEach = Hh, w.forEachRight = Bh, w.forIn = fS, w.forInRight = hS, w.forOwn = pS, w.forOwnRight = gS, w.get = Il, w.gt = L_, w.gte = D_, w.has = yS, w.hasIn = Al, w.head = Lh, w.identity = Zt, w.includes = n_, w.indexOf = XE, w.inRange = US, w.invoke = ES, w.isArguments = co, w.isArray = Pe, w.isArrayBuffer = U_, w.isArrayLike = Jt, w.isArrayLikeObject = ft, w.isBoolean = F_, w.isBuffer = Bn, w.isDate = H_, w.isElement = B_, w.isEmpty = K_, w.isEqual = q_, w.isEqualWith = $_, w.isError = Sl, w.isFinite = G_, w.isFunction = yn, w.isInteger = jh, w.isLength = es, w.isMap = Yh, w.isMatch = z_, w.isMatchWith = V_, w.isNaN = W_, w.isNative = j_, w.isNil = Q_, w.isNull = Y_, w.isNumber = Qh, w.isObject = it, w.isObjectLike = st, w.isPlainObject = Ai, w.isRegExp = Tl, w.isSafeInteger = J_, w.isSet = Jh, w.isString = ts, w.isSymbol = dr, w.isTypedArray = Ko, w.isUndefined = X_, w.isWeakMap = Z_, w.isWeakSet = eS, w.join = nb, w.kebabCase = $S, w.last = Ar, w.lastIndexOf = ob, w.lowerCase = GS, w.lowerFirst = zS, w.lt = tS, w.lte = rS, w.max = HT, w.maxBy = BT, w.mean = KT, w.meanBy = qT, w.min = $T, w.minBy = GT, w.stubArray = Ml, w.stubFalse = xl, w.stubObject = kT, w.stubString = PT, w.stubTrue = NT, w.multiply = zT, w.nth = ib, w.noConflict = ET, w.noop = Ol, w.now = Ja, w.pad = VS, w.padEnd = WS, w.padStart = jS, w.parseInt = YS, w.random = FS, w.reduce = c_, w.reduceRight = l_, w.repeat = QS, w.replace = JS, w.result = RS, w.round = VT, w.runInContext = M, w.sample = d_, w.size = p_, w.snakeCase = XS, w.some = g_, w.sortedIndex = fb, w.sortedIndexBy = hb, w.sortedIndexOf = pb, w.sortedLastIndex = gb, w.sortedLastIndexBy = mb, w.sortedLastIndexOf = vb, w.startCase = eT, w.startsWith = tT, w.subtract = WT, w.sum = jT, w.sumBy = YT, w.template = rT, w.times = OT, w.toFinite = Cn, w.toInteger = Ne, w.toLength = Zh, w.toLower = nT, w.toNumber = Rr, w.toSafeInteger = nS, w.toString = ze, w.toUpper = oT, w.trim = iT, w.trimEnd = aT, w.trimStart = sT, w.truncate = cT, w.unescape = lT, w.uniqueId = xT, w.upperCase = uT, w.upperFirst = Rl, w.each = Hh, w.eachRight = Bh, w.first = Lh, Nl(w, function() {
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
          return g.__filtered__ ? g.__takeCount__ = xt(d, g.__takeCount__) : g.__views__.push({
            size: xt(d, ot),
            type: i + (g.__dir__ < 0 ? "Right" : "")
          }), g;
        }, Ue.prototype[i + "Right"] = function(d) {
          return this.reverse()[i](d).reverse();
        };
      }), br(["filter", "map", "takeWhile"], function(i, c) {
        var d = c + 1, g = d == X || d == V;
        Ue.prototype[i] = function(y) {
          var b = this.clone();
          return b.__iteratees__.push({
            iteratee: ve(y, 3),
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
        return this.filter(Za(ve(i)));
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
          var T = this.__wrapped__, P = g ? [1] : arguments, x = T instanceof Ue, B = P[0], K = x || Pe(T), W = function(Le) {
            var Fe = y.apply(w, Mn([Le], P));
            return g && ne ? Fe[0] : Fe;
          };
          K && d && typeof B == "function" && B.length != 1 && (x = K = !1);
          var ne = this.__chain__, he = !!this.__actions__.length, ye = b && !ne, Oe = x && !he;
          if (!b && K) {
            T = Oe ? T : new Ue(this);
            var Ce = i.apply(T, P);
            return Ce.__actions__.push({ func: Ya, args: [W], thisArg: t }), new Sr(Ce, ne);
          }
          return ye && Oe ? i.apply(this, P) : (Ce = this.thru(W), ye ? g ? Ce.value()[0] : Ce.value() : Ce);
        });
      }), br(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
        var c = Ea[i], d = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru", g = /^(?:pop|shift)$/.test(i);
        w.prototype[i] = function() {
          var y = arguments;
          if (g && !this.__chain__) {
            var b = this.value();
            return c.apply(Pe(b) ? b : [], y);
          }
          return this[d](function(T) {
            return c.apply(Pe(T) ? T : [], y);
          });
        };
      }), Jr(Ue.prototype, function(i, c) {
        var d = w[c];
        if (d) {
          var g = d.name + "";
          We.call(Do, g) || (Do[g] = []), Do[g].push({ name: c, func: d });
        }
      }), Do[qa(t, R).name] = [{
        name: "wrapper",
        func: t
      }], Ue.prototype.clone = lw, Ue.prototype.reverse = uw, Ue.prototype.value = dw, w.prototype.at = Bb, w.prototype.chain = Kb, w.prototype.commit = qb, w.prototype.next = $b, w.prototype.plant = zb, w.prototype.reverse = Vb, w.prototype.toJSON = w.prototype.valueOf = w.prototype.value = Wb, w.prototype.first = w.prototype.head, pi && (w.prototype[pi] = Gb), w;
    }, Mo = qC();
    eo ? ((eo.exports = Mo)._ = Mo, Pc._ = Mo) : St._ = Mo;
  }).call(Ri);
})($s, $s.exports);
var uy = $s.exports;
const OO = {
  ifcEntities: []
}, dy = hc({
  name: "ifcData",
  initialState: OO,
  reducers: {
    setIfcData: (r, e) => {
      r.ifcEntities = e.payload;
    }
  }
}), { setIfcData: MO } = dy.actions, xO = (r) => r.ifcData.ifcEntities, fy = pa(xO, (r) => r[0]), LO = dy.reducer, Bg = (r) => uy.groupBy(r, "dictionaryUri");
function DO(r, e) {
  return {
    uri: e.uri,
    name: e.name,
    code: e.code,
    dictionaryUri: r
  };
}
async function UO(r, e, t) {
  try {
    const n = await r.api.classV1List({ Uri: e, IncludeClassRelations: !0 }, t);
    if (n.status !== 200)
      throw new Error(`API request failed with status ${n.status}`);
    return n.data;
  } catch (n) {
    return console.error("Error fetching classification:", n), null;
  }
}
function Jl(r, e) {
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
const FO = (r) => {
  for (let e = r.length - 2; e >= 0; e -= 1)
    if (r[e] === r[e].toLowerCase() && r[e + 1] === r[e + 1].toUpperCase()) {
      if (r[r.length - 1] === r[r.length - 1].toUpperCase())
        return `${r.slice(0, e + 1)}.${r.slice(e + 1)}`;
      break;
    }
  return r;
}, HO = (r, e, t) => {
  let n = "";
  return t && r.toLowerCase() !== t.toLowerCase() && (e === "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3" ? n = ` (${FO(t)})` : n = ` (${t})`), `${r}${n}`;
}, BO = (r, e) => r.map((t) => ({
  value: t.uri ?? "",
  label: HO(t.name ?? "", e, t.code)
})), KO = (r, e) => {
  const t = {};
  return Object.entries(e).forEach(([n, o]) => {
    t[n] = BO(
      r[n] || o,
      n
    );
  }), t;
};
function qO({
  api: r,
  activeClassificationUri: e,
  classifications: t,
  setClassifications: n
}) {
  const o = Et(oy), a = Et(iy), s = Et(Hg), l = Et(fy), u = Et(ly), f = Et(Hg), h = Et(_O), p = Et(Ld), [m, v] = Ee(0), [C, E] = Ee({}), [_, R] = Ee({}), [A, S] = Ee(
    () => Bg(t)
  ), [I, O] = Ee({}), L = $e(
    (j) => {
      const re = {
        headers: { Accept: "text/plain" }
      }, Z = new Promise(function(se) {
        const X = {
          Uri: j,
          IncludeClassRelations: !0,
          IncludeClassProperties: !0,
          languageCode: p
        };
        se(
          r.api.classV1List(X, re).then((ce) => ce.status !== 200 ? (console.error(`API request failed with status ${ce.status}`), null) : ce.data).catch((ce) => (console.error("Error fetching classification:", ce), null))
        );
      });
      return E((se) => ({
        ...se,
        classificationUri: Z
      })), Z;
    },
    [r.api, p]
  );
  ge(() => {
    (() => {
      const re = a.reduce((Z, se) => {
        var V;
        const ce = (((V = l.hasAssociations) == null ? void 0 : V.filter((J) => {
          var te;
          return J.type !== "IfcClassificationReference" ? !1 : ((te = J == null ? void 0 : J.referencedSource) == null ? void 0 : te.location) === se;
        })) || []).map(
          (J) => h1(J)
        );
        return Z[se] = ce, Z;
      }, {});
      R(re);
    })();
  }, [a, l]), ge(() => {
    S(Bg(t));
  }, [t, _]), ge(() => {
    if (v(0), e) {
      const j = {};
      e && (j[e] = L(e)), E(j);
    }
  }, [e, L, o]);
  const q = $e(() => {
    const j = {
      headers: { Accept: "text/plain" }
    };
    v(Object.keys(C).length), m !== Object.keys(C).length && Promise.allSettled(Object.values(C)).then(function(re) {
      const Z = re.map((V) => V.status === "fulfilled" ? V.value : null).filter((V) => V !== null);
      re.map(async (V) => {
        if (V.status === "fulfilled") {
          const J = V.value;
          if (J && J.classRelations) {
            const te = {
              ...C
            };
            J.classRelations.forEach((Ie) => {
              Ie.relatedClassUri in Object.keys(C) || (te[Ie.relatedClassUri] = UO(
                r,
                Ie.relatedClassUri,
                j
              ));
            }), E(te);
          }
        }
      });
      const se = Z.filter(
        (V) => V.dictionaryUri && a.includes(V.dictionaryUri)
      ), X = Object.keys(I).filter((V) => a.includes(V)).reduce((V, J) => (V[J] = I[J], V), {}), ce = uy.groupBy(se, "dictionaryUri");
      Object.entries(ce).forEach(([V, J]) => {
        J.some((te) => te.uri === X[V]) || (X[V] = J[0].uri);
      }), O(X), n(se);
    });
  }, [C, m, I, r, n, a]);
  ge(() => {
    q();
  }, [q, I]), ge(() => {
    O((j) => a.reduce((Z, se) => {
      var V;
      const ce = j[se] || ((V = Jl(se, l)) == null ? void 0 : V.location) || "";
      return { ...Z, [se]: ce };
    }, {}));
  }, [a, l]), ge(() => {
    const j = Object.entries(I).map(([re, Z]) => {
      const se = f[re];
      if (!se)
        return;
      const X = se.find((ce) => ce.uri === Z);
      if (X)
        return DO(re, X);
    }).filter((re) => re !== void 0);
    n(j);
  }, [I, f, n]);
  const F = $e(
    (j) => (re) => {
      if (!re)
        return;
      const Z = f[j];
      if (!Z) {
        console.error(`Selected dictionary '${j}' not found`);
        return;
      }
      if (!Z.find((X) => X.uri === re)) {
        console.error(`Selected classification '${re}' not found`);
        return;
      }
      O((X) => ({
        ...X,
        [j]: re
      }));
    },
    [f]
  ), ie = KO(A, s);
  return /* @__PURE__ */ we.jsx(we.Fragment, { children: a.map((j) => /* @__PURE__ */ we.jsx(
    cc,
    {
      mb: "sm",
      label: u[j] ? u[j].name : "",
      data: ie[j],
      value: I[j],
      disabled: j === h || Jl(j, l) !== void 0,
      onChange: (re) => F(j)(re),
      clearable: j !== h || Jl(j, l) === void 0
    },
    j
  )) });
}
function $O(r) {
  const { label: e, value: t, setValue: n, disabled: o } = r, [a, s] = Ee(!1), [l, u] = Ee(!0), f = (h) => {
    h.target.indeterminate = !1, n(h.target.checked);
  };
  return ge(() => {
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
function GO({ propertySet: r, property: e, propertyIndex: t, propertySets: n, setPropertySets: o }) {
  const [a, s] = Ee(), l = e, u = r, f = n, h = o;
  return ge(() => {
    var p, m, v;
    switch (l.type) {
      case "IfcPropertySingleValue": {
        l.nominalValue.type === "IfcBoolean" ? s(
          /* @__PURE__ */ we.jsx(
            $O,
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
          /* @__PURE__ */ we.jsx(
            Co,
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
          /* @__PURE__ */ we.jsx(
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
        s(/* @__PURE__ */ we.jsx(Co, { placeholder: l.name, value: "{ifcProperty.nominalValue}" }));
        break;
      }
    }
  }, [l, u, s, f, h]), a;
}
const zO = {
  Boolean: "IfcBoolean",
  Character: "IfcText",
  Integer: "IfcInteger",
  Real: "IfcReal",
  String: "IfcText",
  Time: "IfcDateTime"
};
function ta(r, e) {
  const t = r && zO[r] || "default";
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
function VO(r, e, t, n) {
  const o = hy(e, t, n);
  return o && "nominalValue" in o ? ta(r, o.nominalValue.value) : ta(r);
}
function WO(r, e, t, n, o) {
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
function jO(r, e, t, n) {
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
  const s = r.predefinedValue ? [ta(r.dataType, r.predefinedValue)] : WO(
    r.dataType,
    n,
    t,
    e,
    o
  );
  return s.length > 0 && (a.enumerationValues = s), a;
}
function YO(r, e, t, n) {
  const o = {
    type: "IfcPropertySingleValue",
    name: e
  };
  r.propertyUri && (o.specification = r.propertyUri);
  const a = r.predefinedValue ? ta(r.dataType, r.predefinedValue) : VO(r.dataType, n, t, e);
  return a !== null && (o.nominalValue = a), o;
}
function QO(r, e, t) {
  const { propertyCode: n } = r, o = n || "unknown";
  return r.allowedValues ? jO(r, o, e, t) : YO(r, o, e, t);
}
function JO(r) {
  Ws();
  const { classifications: e } = r, { propertySets: t } = r, { setPropertySets: n } = r, { recursiveMode: o } = r, a = Et(fy);
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
        }), s[p].hasProperties.push(QO(h, p, a));
      });
    }), n(s);
  }, [e, n, o, a]), /* @__PURE__ */ we.jsx("div", { children: Xl.toArray(
    Object.values(t).map((s, l) => /* @__PURE__ */ we.jsx(bt, { children: /* @__PURE__ */ we.jsxs(bt.Item, { value: s.name || l.toString(), children: [
      /* @__PURE__ */ we.jsx(bt.Control, { children: s.name }),
      /* @__PURE__ */ we.jsx(bt.Panel, { children: /* @__PURE__ */ we.jsx(Rd, { children: Xl.toArray(
        s.hasProperties.map((u, f) => /* @__PURE__ */ we.jsx(
          GO,
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
function XO({ api: r, defaultValue: e, setActiveClassificationUri: t }) {
  var S;
  const { t: n } = Ws(), [o, a] = Ee([]), s = Et(xd), l = Ke(null), u = Ke(e), [f, h] = Ee(u.current), [p, m] = Ee(((S = u.current) == null ? void 0 : S.label) || ""), [v] = HA(p, 300), [C, E] = Ee(!1), _ = $e((I) => {
    m(I);
  }, []), R = $e(
    (I) => {
      const O = o.find((L) => L.value === I);
      O && (h(O), E(!0));
    },
    [o]
  ), A = $e(
    (I) => {
      I.key === "Enter" && o[0] && (m(o[0].label), R(o[0].value), l.current && l.current.blur());
    },
    [o, R, l]
  );
  return ge(() => {
    e && !C && (m(e.label), h(e));
  }, [e, f, C]), ge(() => {
    if (s) {
      const I = {
        headers: { Accept: "text/plain" }
      }, O = {
        SearchText: v,
        DictionaryUri: s.ifcClassification.location
      };
      r.api.searchInDictionaryV1List(O, I).then((L) => {
        var F;
        const q = L.data;
        if (q) {
          if (q.count) {
            const ie = (F = q.dictionary) == null ? void 0 : F.classes;
            ie && a(
              ie.filter((j) => j.uri && j.name).map(
                (j) => ({
                  value: j.uri,
                  label: j.name
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
  }, [r.api, v, s]), ge(() => {
    l.current && l.current.focus();
  }, []), ge(() => {
    f && t(f.value);
  }, [f, t]), /* @__PURE__ */ we.jsx(
    Td,
    {
      label: `${n("searchMainDictionaryLabel")} ${s ? s.ifcClassification.name : ""}`,
      data: o,
      placeholder: "bSDD search...",
      value: p,
      onChange: _,
      onOptionSubmit: R,
      onKeyDown: A,
      ref: l,
      style: { width: "100%" }
    }
  );
}
function ZO() {
  const { t: r } = Ws(), e = d1(), [t, n] = Ee(), [o, a] = Ee(), [s, l] = Ee(), [u, f] = Ee(!1), [h, p] = Ee([]), [m, v] = Ee({}), [C, E] = Ee(new Ji(Bv[u1])), _ = Et(xd), R = Et(Ld), [A, S] = Ee(null), I = Et(Au), O = Et(Au), L = Et(bO), q = Et(iy), F = $e((re) => {
    var se;
    const Z = JSON.stringify(re);
    (se = window == null ? void 0 : window.bsddBridge) == null || se.save(Z).then((X) => {
      console.log("Sent to Revit", X);
    });
  }, []), ie = $e(() => {
    var re;
    (re = window == null ? void 0 : window.bsddBridge) == null || re.cancel();
  }, []), j = (re) => {
    S(re);
  };
  return ge(() => {
    A && (console.log("settings updated: ", A), e(ry(A)), S(null));
  }, [A, e]), ge(() => {
    I && E(new Ji(I));
  }, [I]), ge(() => {
  }, [e]), ge(() => {
    (async () => {
      if (window != null && window.bsddBridge) {
        const Z = await window.bsddBridge.loadSettings(), { settings: se, ifcData: X } = JSON.parse(Z);
        if (e(MO(X)), j(se), !X || X.length === 0)
          return;
        l(X[0]);
      }
    })();
  }, []), ge(() => {
    var Z;
    if (!s || !_)
      return;
    const re = _.ifcClassification.location;
    (Z = s.hasAssociations) == null || Z.forEach((se) => {
      var X;
      if (se.type === "IfcClassificationReference") {
        const ce = se;
        (X = ce.referencedSource) != null && X.location && ce.referencedSource.location === re && (ce.location && n(ce.location), a({
          label: ce.name,
          value: ce.location
        }));
      }
    });
  }, [_, s]), ge(() => {
    if (I !== null && L !== null) {
      const re = {
        bsddApiEnvironment: I,
        includeTestDictionaries: L,
        languageCode: R,
        dictionaryUris: q
      };
      e(sy(q)), e(AO(re)), e(kO(re));
    }
  }, [
    I,
    O,
    L,
    e,
    q,
    R
  ]), /* @__PURE__ */ we.jsxs(Ad, { children: [
    /* @__PURE__ */ we.jsx(Co, { type: "hidden", name: "ifcType", id: "ifcType", value: "" }),
    /* @__PURE__ */ we.jsx(Co, { type: "hidden", name: "name", id: "name", value: "" }),
    /* @__PURE__ */ we.jsx(Co, { type: "hidden", name: "material", id: "material", value: "" }),
    /* @__PURE__ */ we.jsx(Ds, { mx: "md", mt: "lg", mb: "sm", children: /* @__PURE__ */ we.jsx(XO, { api: C, defaultValue: o, setActiveClassificationUri: n }) }),
    t ? /* @__PURE__ */ we.jsxs(we.Fragment, { children: [
      /* @__PURE__ */ we.jsxs(bt, { defaultValue: ["Classifications"], multiple: !0, children: [
        /* @__PURE__ */ we.jsxs(bt.Item, { value: "Classifications", children: [
          /* @__PURE__ */ we.jsx(bt.Control, { children: /* @__PURE__ */ we.jsx(Us, { order: 5, children: r("classificationsLabel") }) }),
          /* @__PURE__ */ we.jsx(bt.Panel, { children: /* @__PURE__ */ we.jsx(
            qO,
            {
              api: C,
              activeClassificationUri: t,
              classifications: h,
              setClassifications: p
            }
          ) })
        ] }, "Classifications"),
        /* @__PURE__ */ we.jsxs(bt.Item, { value: "Propertysets", children: [
          /* @__PURE__ */ we.jsx(bt.Control, { children: /* @__PURE__ */ we.jsx(Us, { order: 5, children: r("propertysetsLabel") }) }),
          /* @__PURE__ */ we.jsx(bt.Panel, { children: /* @__PURE__ */ we.jsx(
            JO,
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
          NO,
          {
            callback: F,
            classifications: h,
            propertySetMap: m,
            ifcEntity: s
          }
        ),
        /* @__PURE__ */ we.jsx(ha, { fullWidth: !0, variant: "light", color: "gray", onClick: ie, children: r("cancel") })
      ] })
    ] }) : /* @__PURE__ */ we.jsxs(dd, { mx: "md", title: r("noClassificationSelected"), mt: "xl", children: [
      r("classSearchInstruction"),
      /* @__PURE__ */ we.jsx(Nv, { h: "md" }),
      r("needHelp"),
      " ",
      /* @__PURE__ */ we.jsx("a", { href: "https://github.com/buildingsmart-community/bSDD-Revit-plugin/wiki", target: "_blank", rel: "noreferrer", children: r("checkDocumentation") })
    ] })
  ] });
}
function eM() {
  const [r, e] = Ee(null);
  return ge(() => {
    const t = new CA(s1);
    e(t);
  }, []), r ? /* @__PURE__ */ we.jsx(Am, { theme: a1, children: /* @__PURE__ */ we.jsx(ZO, {}) }) : /* @__PURE__ */ we.jsx("div", { children: "Loading..." });
}
const tM = {
  name: void 0,
  description: void 0,
  tag: void 0,
  predefinedType: void 0,
  isDefinedBy: [],
  hasAssociations: []
}, py = hc({
  name: "ifcEntity",
  initialState: tM,
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
py.actions;
const rM = py.reducer, nM = J1({
  reducer: {
    settings: SO,
    ifcData: LO,
    ifcEntity: rM,
    bsdd: PO
  }
});
Zl.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ we.jsx(k.StrictMode, { children: /* @__PURE__ */ we.jsx(k0, { store: nM, children: /* @__PURE__ */ we.jsx(eM, {}) }) })
);
