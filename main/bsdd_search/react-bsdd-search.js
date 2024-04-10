var HT = Object.defineProperty;
var BT = (r, e, t) => e in r ? HT(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var zt = (r, e, t) => (BT(r, typeof e != "symbol" ? e + "" : e, t), t);
import * as Le from "react";
import P, { createContext as _o, useContext as Vn, useState as pe, useRef as Ke, useEffect as ye, useMemo as hs, useCallback as ze, useLayoutEffect as Iu, useId as Fg, forwardRef as ht, cloneElement as qs, Children as Ql } from "react";
import * as KT from "react-dom";
import qT, { flushSync as $T, createPortal as GT } from "react-dom";
var Ni = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Hg = { exports: {} }, $s = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zT = P, WT = Symbol.for("react.element"), VT = Symbol.for("react.fragment"), jT = Object.prototype.hasOwnProperty, YT = zT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, QT = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bg(r, e, t) {
  var n, o = {}, a = null, s = null;
  t !== void 0 && (a = "" + t), e.key !== void 0 && (a = "" + e.key), e.ref !== void 0 && (s = e.ref);
  for (n in e)
    jT.call(e, n) && !QT.hasOwnProperty(n) && (o[n] = e[n]);
  if (r && r.defaultProps)
    for (n in e = r.defaultProps, e)
      o[n] === void 0 && (o[n] = e[n]);
  return { $$typeof: WT, type: r, key: a, ref: s, props: o, _owner: YT.current };
}
$s.Fragment = VT;
$s.jsx = Bg;
$s.jsxs = Bg;
Hg.exports = $s;
var Re = Hg.exports, Jl = {}, up = qT;
Jl.createRoot = up.createRoot, Jl.hydrateRoot = up.hydrateRoot;
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
var na = P;
function JT(r, e) {
  return r === e && (r !== 0 || 1 / r === 1 / e) || r !== r && e !== e;
}
var XT = typeof Object.is == "function" ? Object.is : JT, ZT = na.useSyncExternalStore, e0 = na.useRef, t0 = na.useEffect, r0 = na.useMemo, n0 = na.useDebugValue;
qg.useSyncExternalStoreWithSelector = function(r, e, t, n, o) {
  var a = e0(null);
  if (a.current === null) {
    var s = { hasValue: !1, value: null };
    a.current = s;
  } else
    s = a.current;
  a = r0(function() {
    function u(v) {
      if (!f) {
        if (f = !0, h = v, v = n(v), o !== void 0 && s.hasValue) {
          var C = s.value;
          if (o(C, v))
            return p = C;
        }
        return p = v;
      }
      if (C = p, XT(h, v))
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
  var l = ZT(r, a[0], a[1]);
  return t0(function() {
    s.hasValue = !0, s.value = l;
  }, [l]), n0(l), l;
};
Kg.exports = qg;
var o0 = Kg.exports, hr = (
  // prettier-ignore
  // @ts-ignore
  "default" in Le ? Le.default : Le
), dp = Symbol.for("react-redux-context"), fp = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function i0() {
  if (!hr.createContext)
    return {};
  const r = fp[dp] ?? (fp[dp] = /* @__PURE__ */ new Map());
  let e = r.get(hr.createContext);
  return e || (e = hr.createContext(
    null
  ), r.set(hr.createContext, e)), e;
}
var $n = /* @__PURE__ */ i0(), a0 = () => {
  throw new Error("uSES not initialized!");
};
function Au(r = $n) {
  return function() {
    return hr.useContext(r);
  };
}
var $g = /* @__PURE__ */ Au(), Gg = a0, s0 = (r) => {
  Gg = r;
}, c0 = (r, e) => r === e;
function l0(r = $n) {
  const e = r === $n ? $g : Au(r), t = (n, o = {}) => {
    const { equalityFn: a = c0, devModeChecks: s = {} } = typeof o == "function" ? { equalityFn: o } : o, {
      store: l,
      subscription: u,
      getServerState: f,
      stabilityCheck: h,
      identityFunctionCheck: p
    } = e();
    hr.useRef(!0);
    const g = hr.useCallback(
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
      g,
      a
    );
    return hr.useDebugValue(v), v;
  };
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var u0 = /* @__PURE__ */ l0();
function d0(r) {
  r();
}
function f0() {
  let r = null, e = null;
  return {
    clear() {
      r = null, e = null;
    },
    notify() {
      d0(() => {
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
var hp = {
  notify() {
  },
  get: () => []
};
function h0(r, e) {
  let t, n = hp, o = 0, a = !1;
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
    o++, t || (t = e ? e.addNestedSub(u) : r.subscribe(u), n = f0());
  }
  function p() {
    o--, t && o === 0 && (t(), t = void 0, n.clear(), n = hp);
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
var p0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g0 = p0 ? hr.useLayoutEffect : hr.useEffect;
function m0({
  store: r,
  context: e,
  children: t,
  serverState: n,
  stabilityCheck: o = "once",
  identityFunctionCheck: a = "once"
}) {
  const s = hr.useMemo(() => {
    const f = h0(r);
    return {
      store: r,
      subscription: f,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      identityFunctionCheck: a
    };
  }, [r, n, o, a]), l = hr.useMemo(() => r.getState(), [r]);
  g0(() => {
    const { subscription: f } = s;
    return f.onStateChange = f.notifyNestedSubs, f.trySubscribe(), l !== r.getState() && f.notifyNestedSubs(), () => {
      f.tryUnsubscribe(), f.onStateChange = void 0;
    };
  }, [s, l]);
  const u = e || $n;
  return /* @__PURE__ */ hr.createElement(u.Provider, { value: s }, t);
}
var v0 = m0;
function zg(r = $n) {
  const e = r === $n ? $g : (
    // @ts-ignore
    Au(r)
  ), t = () => {
    const { store: n } = e();
    return n;
  };
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var y0 = /* @__PURE__ */ zg();
function C0(r = $n) {
  const e = r === $n ? y0 : zg(r), t = () => e().dispatch;
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var w0 = /* @__PURE__ */ C0();
s0(o0.useSyncExternalStoreWithSelector);
const E0 = {
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
let b0 = class Xl {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || E0, this.options = t, this.debug = t.debug;
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
var rn = new b0();
class Gs {
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
function pp(r) {
  return r == null ? "" : "" + r;
}
function _0(r, e, t) {
  r.forEach((n) => {
    e[n] && (t[n] = e[n]);
  });
}
function Ru(r, e, t) {
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
function gp(r, e, t) {
  const {
    obj: n,
    k: o
  } = Ru(r, e, Object);
  n[o] = t;
}
function S0(r, e, t, n) {
  const {
    obj: o,
    k: a
  } = Ru(r, e, Object);
  o[a] = o[a] || [], n && (o[a] = o[a].concat(t)), n || o[a].push(t);
}
function ps(r, e) {
  const {
    obj: t,
    k: n
  } = Ru(r, e);
  if (t)
    return t[n];
}
function T0(r, e, t) {
  const n = ps(r, t);
  return n !== void 0 ? n : ps(e, t);
}
function Wg(r, e, t) {
  for (const n in e)
    n !== "__proto__" && n !== "constructor" && (n in r ? typeof r[n] == "string" || r[n] instanceof String || typeof e[n] == "string" || e[n] instanceof String ? t && (r[n] = e[n]) : Wg(r[n], e[n], t) : r[n] = e[n]);
  return r;
}
function qo(r) {
  return r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var I0 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function A0(r) {
  return typeof r == "string" ? r.replace(/[&<>"'\/]/g, (e) => I0[e]) : r;
}
const R0 = [" ", ",", "?", "!", ";"];
function k0(r, e, t) {
  e = e || "", t = t || "";
  const n = R0.filter((s) => e.indexOf(s) < 0 && t.indexOf(s) < 0);
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
function gs(r, e) {
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
      return f ? gs(u, f, t) : void 0;
    }
    o = o[n[a]];
  }
  return o;
}
function ms(r) {
  return r && r.indexOf("_") > 0 ? r.replace("_", "-") : r;
}
class mp extends Gs {
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
    const u = ps(this.data, l);
    return u || !s || typeof n != "string" ? u : gs(this.data && this.data[e] && this.data[e][t], n, a);
  }
  addResource(e, t, n, o) {
    let a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const s = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator;
    let l = [e, t];
    n && (l = l.concat(s ? n.split(s) : n)), e.indexOf(".") > -1 && (l = e.split("."), o = t, t = l[1]), this.addNamespaces(t), gp(this.data, l, o), a.silent || this.emit("added", e, t, n, o);
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
    let u = ps(this.data, l) || {};
    o ? Wg(u, n, a) : u = {
      ...u,
      ...n
    }, gp(this.data, l, u), s.silent || this.emit("added", e, t, n);
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
var Vg = {
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
const vp = {};
class vs extends Gs {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), _0(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = rn.create("translator");
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
    const s = n && e.indexOf(n) > -1, l = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !k0(e, n, o);
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
    let g = p && p.res;
    const v = p && p.usedKey || s, C = p && p.exactUsedKey || s, E = Object.prototype.toString.apply(g), _ = ["[object Number]", "[object Function]", "[object RegExp]"], R = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, I = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (I && g && (typeof g != "string" && typeof g != "boolean" && typeof g != "number") && _.indexOf(E) < 0 && !(typeof R == "string" && E === "[object Array]")) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const A = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(v, g, {
          ...t,
          ns: l
        }) : `key '${s} (${this.language})' returned an object instead of string.`;
        return o ? (p.res = A, p.usedParams = this.getUsedParamsDetails(t), p) : A;
      }
      if (a) {
        const A = E === "[object Array]", O = A ? [] : {}, L = A ? C : v;
        for (const q in g)
          if (Object.prototype.hasOwnProperty.call(g, q)) {
            const D = `${L}${a}${q}`;
            O[q] = this.translate(D, {
              ...t,
              joinArrays: !1,
              ns: l
            }), O[q] === D && (O[q] = g[q]);
          }
        g = O;
      }
    } else if (I && typeof R == "string" && E === "[object Array]")
      g = g.join(R), g && (g = this.extendTranslation(g, e, t, n));
    else {
      let A = !1, O = !1;
      const L = t.count !== void 0 && typeof t.count != "string", q = vs.hasDefaultValue(t), D = L ? this.pluralResolver.getSuffix(f, t.count, t) : "", Q = t.ordinal && L ? this.pluralResolver.getSuffix(f, t.count, {
        ordinal: !1
      }) : "", X = t[`defaultValue${D}`] || t[`defaultValue${Q}`] || t.defaultValue;
      !this.isValidLookup(g) && q && (A = !0, g = X), this.isValidLookup(g) || (O = !0, g = s);
      const ne = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && O ? void 0 : g, fe = q && X !== g && this.options.updateMissing;
      if (O || A || fe) {
        if (this.logger.log(fe ? "updateKey" : "missingKey", f, u, s, fe ? X : g), a) {
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
          const Qe = q && Pe !== g ? Pe : ne;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(ie, u, te, Qe, fe, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(ie, u, te, Qe, fe, t), this.emit("missingKey", ie, u, te, g);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && L ? oe.forEach((ie) => {
          this.pluralResolver.getSuffixes(ie, t).forEach((te) => {
            Y([ie], s + te, t[`defaultValue${te}`] || X);
          });
        }) : Y(oe, s, X));
      }
      g = this.extendTranslation(g, e, t, p, n), O && g === s && this.options.appendNamespaceToMissingKey && (g = `${u}:${s}`), (O || A) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? g = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}:${s}` : s, A ? g : void 0) : g = this.options.parseMissingKeyHandler(g));
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
    return e != null && u && u.length && n.applyPostProcessor !== !1 && (e = Vg.handle(u, e, t, this.options && this.options.postProcessPassResolved ? {
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
        this.isValidLookup(n) || (l = _, !vp[`${E[0]}-${_}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(l) && (vp[`${E[0]}-${_}`] = !0, this.logger.warn(`key "${o}" for languages "${E.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), E.forEach((R) => {
          if (this.isValidLookup(n))
            return;
          s = R;
          const I = [h];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(I, h, R, _, t);
          else {
            let A;
            g && (A = this.pluralResolver.getSuffix(R, t.count, t));
            const O = `${this.options.pluralSeparator}zero`, L = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (g && (I.push(h + A), t.ordinal && A.indexOf(L) === 0 && I.push(h + A.replace(L, this.options.pluralSeparator)), v && I.push(h + O)), C) {
              const q = `${h}${this.options.contextSeparator}${t.context}`;
              I.push(q), g && (I.push(q + A), t.ordinal && A.indexOf(L) === 0 && I.push(q + A.replace(L, this.options.pluralSeparator)), v && I.push(q + O));
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
class yp {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = rn.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = ms(e), !e || e.indexOf("-") < 0)
      return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = ms(e), !e || e.indexOf("-") < 0)
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
let P0 = [{
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
}], N0 = {
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
const O0 = ["v1", "v2", "v3"], M0 = ["v4"], Cp = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function x0() {
  const r = {};
  return P0.forEach((e) => {
    e.lngs.forEach((t) => {
      r[t] = {
        numbers: e.nr,
        plurals: N0[e.fc]
      };
    });
  }), r;
}
class L0 {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = rn.create("pluralResolver"), (!this.options.compatibilityJSON || M0.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = x0();
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(ms(e), {
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
    return n ? this.shouldUseIntlApi() ? n.resolvedOptions().pluralCategories.sort((o, a) => Cp[o] - Cp[a]).map((o) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : n.numbers.map((o) => this.getSuffix(e, o, t)) : [];
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
    return !O0.includes(this.options.compatibilityJSON);
  }
}
function wp(r, e, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, a = T0(r, e, t);
  return !a && o && typeof t == "string" && (a = gs(r, t, n), a === void 0 && (a = gs(e, t, n))), a;
}
class D0 {
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
    this.escape = t.escape !== void 0 ? t.escape : A0, this.escapeValue = t.escapeValue !== void 0 ? t.escapeValue : !0, this.useRawValueToEscape = t.useRawValueToEscape !== void 0 ? t.useRawValueToEscape : !1, this.prefix = t.prefix ? qo(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? qo(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? qo(t.nestingPrefix) : t.nestingPrefixEscaped || qo("$t("), this.nestingSuffix = t.nestingSuffix ? qo(t.nestingSuffix) : t.nestingSuffixEscaped || qo(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = t.alwaysFormat !== void 0 ? t.alwaysFormat : !1, this.resetRegExp();
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
        const I = wp(t, u, C, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(I, void 0, n, {
          ...o,
          ...t,
          interpolationkey: C
        }) : I;
      }
      const E = C.split(this.formatSeparator), _ = E.shift().trim(), R = E.join(this.formatSeparator).trim();
      return this.format(wp(t, u, _, this.options.keySeparator, this.options.ignoreJSONStructure), R, n, {
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
            const R = p(e, a, o);
            s = typeof R == "string" ? R : "";
          } else if (o && Object.prototype.hasOwnProperty.call(o, E))
            s = "";
          else if (g) {
            s = a[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${E} for interpolating ${e}`), s = "";
        else
          typeof s != "string" && !this.useRawValueToEscape && (s = pp(s));
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
      typeof a != "string" && (a = pp(a)), a || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`), a = ""), f && (a = u.reduce((h, p) => this.format(h, p, n.lng, {
        ...n,
        interpolationkey: o[1].trim()
      }), a.trim())), e = e.replace(o[0], a), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
function U0(r) {
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
    return l || (l = r(ms(o), a), e[s] = l), l(n);
  };
}
class F0 {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = rn.create("formatter"), this.options = e, this.formats = {
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
      } = U0(u);
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
function H0(r, e) {
  r.pending[e] !== void 0 && (delete r.pending[e], r.pendingCount--);
}
class B0 extends Gs {
  constructor(e, t, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = o, this.logger = rn.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(n, o.backend, o);
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
      S0(u.loaded, [a], s), H0(u, e), t && u.errors.push(t), u.pendingCount === 0 && !u.done && (Object.keys(u.loaded).forEach((f) => {
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
function Ep() {
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
function bp(r) {
  return typeof r.ns == "string" && (r.ns = [r.ns]), typeof r.fallbackLng == "string" && (r.fallbackLng = [r.fallbackLng]), typeof r.fallbackNS == "string" && (r.fallbackNS = [r.fallbackNS]), r.supportedLngs && r.supportedLngs.indexOf("cimode") < 0 && (r.supportedLngs = r.supportedLngs.concat(["cimode"])), r;
}
function ns() {
}
function K0(r) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach((t) => {
    typeof r[t] == "function" && (r[t] = r[t].bind(r));
  });
}
class Vi extends Gs {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = bp(e), this.services = {}, this.logger = rn, this.modules = {
      external: []
    }, K0(this), t && !this.isInitialized && !e.isClone) {
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
    const o = Ep();
    this.options = {
      ...o,
      ...this.options,
      ...bp(t)
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
      this.modules.formatter ? h = this.modules.formatter : typeof Intl < "u" && (h = F0);
      const p = new yp(this.options);
      this.store = new mp(this.options.resources, this.options);
      const g = this.services;
      g.logger = rn, g.resourceStore = this.store, g.languageUtils = p, g.pluralResolver = new L0(p, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), h && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (g.formatter = a(h), g.formatter.init(g, this.options), this.options.interpolation.format = g.formatter.format.bind(g.formatter)), g.interpolator = new D0(this.options), g.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, g.backendConnector = new B0(a(this.modules.backend), g.resourceStore, g, this.options), g.backendConnector.on("*", function(v) {
        for (var C = arguments.length, E = new Array(C > 1 ? C - 1 : 0), _ = 1; _ < C; _++)
          E[_ - 1] = arguments[_];
        e.emit(v, ...E);
      }), this.modules.languageDetector && (g.languageDetector = a(this.modules.languageDetector), g.languageDetector.init && g.languageDetector.init(g, this.options.detection, this.options)), this.modules.i18nFormat && (g.i18nFormat = a(this.modules.i18nFormat), g.i18nFormat.init && g.i18nFormat.init(this)), this.translator = new vs(this.services, this.options), this.translator.on("*", function(v) {
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
    const u = Oi(), f = () => {
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
    const o = Oi();
    return e || (e = this.languages), t || (t = this.options.ns), n || (n = ns), this.services.backendConnector.reload(e, t, (a) => {
      o.resolve(), n(a);
    }), o;
  }
  use(e) {
    if (!e)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Vg.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
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
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], n = this.services && this.services.languageUtils || new yp(Ep());
    return t.indexOf(n.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new Vi(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ns;
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
    }, n && (a.store = new mp(this.store.data, o), a.services.resourceStore = a.store), a.translator = new vs(a.services, o), a.translator.on("*", function(l) {
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
const bt = Vi.createInstance();
bt.createInstance = Vi.createInstance;
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
function q0() {
  if (console && console.warn) {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    typeof e[0] == "string" && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e);
  }
}
const _p = {};
function Zl() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  typeof e[0] == "string" && _p[e[0]] || (typeof e[0] == "string" && (_p[e[0]] = /* @__PURE__ */ new Date()), q0(...e));
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
function Sp(r, e, t) {
  r.loadNamespaces(e, jg(r, t));
}
function Tp(r, e, t, n) {
  typeof t == "string" && (t = [t]), t.forEach((o) => {
    r.options.ns.indexOf(o) < 0 && r.options.ns.push(o);
  }), r.loadLanguages(e, jg(r, n));
}
function $0(r, e) {
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
function G0(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !e.languages || !e.languages.length ? (Zl("i18n.languages were undefined or empty", e.languages), !0) : e.options.ignoreJSONStructure !== void 0 ? e.hasLoadedNamespace(r, {
    lng: t.lng,
    precheck: (o, a) => {
      if (t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !a(o.isLanguageChangingTo, r))
        return !1;
    }
  }) : $0(r, e, t);
}
const z0 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, W0 = {
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
}, V0 = (r) => W0[r], j0 = (r) => r.replace(z0, V0);
let eu = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: j0
};
function Y0() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  eu = {
    ...eu,
    ...r
  };
}
function Q0() {
  return eu;
}
let Yg;
function J0(r) {
  Yg = r;
}
function X0() {
  return Yg;
}
const Z0 = {
  type: "3rdParty",
  init(r) {
    Y0(r.options.react), J0(r);
  }
}, eI = _o();
class tI {
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
const rI = (r, e) => {
  const t = Ke();
  return ye(() => {
    t.current = e ? t.current : r;
  }, [r, e]), t.current;
};
function ku(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: t
  } = e, {
    i18n: n,
    defaultNS: o
  } = Vn(eI) || {}, a = t || n || X0();
  if (a && !a.reportNamespaces && (a.reportNamespaces = new tI()), !a) {
    Zl("You will need to pass in an i18next instance by using initReactI18next");
    const S = (O, L) => typeof L == "string" ? L : L && typeof L == "object" && typeof L.defaultValue == "string" ? L.defaultValue : Array.isArray(O) ? O[O.length - 1] : O, A = [S, {}, !1];
    return A.t = S, A.i18n = {}, A.ready = !1, A;
  }
  a.options.react && a.options.react.wait !== void 0 && Zl("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const s = {
    ...Q0(),
    ...a.options.react,
    ...e
  }, {
    useSuspense: l,
    keyPrefix: u
  } = s;
  let f = r || o || a.options && a.options.defaultNS;
  f = typeof f == "string" ? [f] : f || ["translation"], a.reportNamespaces.addUsedNamespaces && a.reportNamespaces.addUsedNamespaces(f);
  const h = (a.isInitialized || a.initializedStoreOnce) && f.every((S) => G0(S, a, s));
  function p() {
    return a.getFixedT(e.lng || null, s.nsMode === "fallback" ? f : f[0], u);
  }
  const [g, v] = pe(p);
  let C = f.join();
  e.lng && (C = `${e.lng}${C}`);
  const E = rI(C), _ = Ke(!0);
  ye(() => {
    const {
      bindI18n: S,
      bindI18nStore: A
    } = s;
    _.current = !0, !h && !l && (e.lng ? Tp(a, e.lng, f, () => {
      _.current && v(p);
    }) : Sp(a, f, () => {
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
  const I = [g, a, h];
  if (I.t = g, I.i18n = a, I.ready = h, h || !h && !l)
    return I;
  throw new Promise((S) => {
    e.lng ? Tp(a, e.lng, f, () => S()) : Sp(a, f, () => S());
  });
}
bt.use(Z0).init({
  resources: {
    "en-GB": {
      translation: {
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
var tu = function(r, e) {
  return tu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
  }, tu(r, e);
};
function kt(r, e) {
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
function Ip(r, e) {
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
function nI(r, e) {
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
function Pu() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r = r.concat(nI(arguments[e]));
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
function zs() {
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
], Ap = zs(oa, [
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
var Ft = {
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
var Rp = {
  PLAIN: "plain",
  S256: "S256"
}, ys;
(function(r) {
  r.QUERY = "query", r.FRAGMENT = "fragment", r.FORM_POST = "form_post";
})(ys || (ys = {}));
var Cs;
(function(r) {
  r.IMPLICIT_GRANT = "implicit", r.AUTHORIZATION_CODE_GRANT = "authorization_code", r.CLIENT_CREDENTIALS_GRANT = "client_credentials", r.RESOURCE_OWNER_PASSWORD_GRANT = "password", r.REFRESH_TOKEN_GRANT = "refresh_token", r.DEVICE_CODE_GRANT = "device_code", r.JWT_BEARER = "urn:ietf:params:oauth:grant-type:jwt-bearer";
})(Cs || (Cs = {}));
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
var nu = "appmetadata", oI = "client_info", Bi = "1", Ki = {
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
}, kp = {
  INVALID_GRANT_ERROR: "invalid_grant",
  CLIENT_MISMATCH_ERROR: "client_mismatch"
}, ws;
(function(r) {
  r.username = "username", r.password = "password";
})(ws || (ws = {}));
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
var os = {
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
      return new e(os.unexpectedError.code, os.unexpectedError.desc + ": " + t);
    }, e.createPostRequestFailed = function(t) {
      return new e(os.postRequestFailed.code, os.postRequestFailed.desc + ": " + t);
    }, e;
  }(Error)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Es = {
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
var Nu = (
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
var Qg = "@azure/msal-common", Ou = "13.3.1";
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
var Dt = (
  /** @class */
  function() {
    function r(e) {
      var t = this, n = e ? ee.trimArrayEntries(zs(e)) : [], o = n ? ee.removeEmptyStringsFromArray(n) : [];
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
      return Ap.forEach(function(n) {
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
      Ap.forEach(function(t) {
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
function bs(r, e) {
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
      var f, h, p, g, v, C, E = new r();
      E.authorityType = wn.MSSTS_ACCOUNT_TYPE, E.clientInfo = e, E.homeAccountId = t, E.nativeAccountId = u;
      var _ = l || o && o.getPreferredCache();
      if (!_)
        throw re.createInvalidCacheEnvironmentError();
      if (E.environment = _, E.realm = ((f = n == null ? void 0 : n.claims) === null || f === void 0 ? void 0 : f.tid) || N.EMPTY_STRING, n) {
        E.idTokenClaims = n.claims, E.localAccountId = ((h = n == null ? void 0 : n.claims) === null || h === void 0 ? void 0 : h.oid) || ((p = n == null ? void 0 : n.claims) === null || p === void 0 ? void 0 : p.sub) || N.EMPTY_STRING;
        var R = (g = n == null ? void 0 : n.claims) === null || g === void 0 ? void 0 : g.preferred_username, I = !((v = n == null ? void 0 : n.claims) === null || v === void 0) && v.emails ? n.claims.emails[0] : null;
        E.username = R || I || N.EMPTY_STRING, E.name = (C = n == null ? void 0 : n.claims) === null || C === void 0 ? void 0 : C.name;
      }
      return E.cloudGraphHostName = a, E.msGraphHost = s, E;
    }, r.createGenericAccount = function(e, t, n, o, a, s) {
      var l, u, f, h, p = new r();
      p.authorityType = n && n.authorityType === Wt.Adfs ? wn.ADFS_ACCOUNT_TYPE : wn.GENERIC_ACCOUNT_TYPE, p.homeAccountId = e, p.realm = N.EMPTY_STRING;
      var g = s || n && n.getPreferredCache();
      if (!g)
        throw re.createInvalidCacheEnvironmentError();
      return t && (p.localAccountId = ((l = t == null ? void 0 : t.claims) === null || l === void 0 ? void 0 : l.oid) || ((u = t == null ? void 0 : t.claims) === null || u === void 0 ? void 0 : u.sub) || N.EMPTY_STRING, p.username = ((f = t == null ? void 0 : t.claims) === null || f === void 0 ? void 0 : f.upn) || N.EMPTY_STRING, p.name = ((h = t == null ? void 0 : t.claims) === null || h === void 0 ? void 0 : h.name) || N.EMPTY_STRING, p.idTokenClaims = t == null ? void 0 : t.claims), p.environment = g, p.cloudGraphHostName = o, p.msGraphHost = a, p;
    }, r.generateHomeAccountId = function(e, t, n, o, a) {
      var s, l = !((s = a == null ? void 0 : a.claims) === null || s === void 0) && s.sub ? a.claims.sub : N.EMPTY_STRING;
      if (t === Wt.Adfs || t === Wt.Dsts)
        return l;
      if (e)
        try {
          var u = bs(e, o);
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
var an = (
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
      this.clientId = e, this.cryptoImpl = t, this.commonLogger = n.clone(Qg, Ou);
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
      var a = Dt.createSearchScopes(t.scopes), s = t.authenticationScheme || We.BEARER, l = s && s.toLowerCase() !== We.BEARER.toLowerCase() ? he.ACCESS_TOKEN_WITH_AUTH_SCHEME : he.ACCESS_TOKEN, u = {
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
      var o = Dt.fromString(e.target);
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
), iI = (
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
var aI = 300, Jg = {
  tokenRenewalOffsetSeconds: aI,
  preventCorsPreflight: !1
}, sI = {
  loggerCallback: function() {
  },
  piiLoggingEnabled: !1,
  logLevel: st.Info,
  correlationId: N.EMPTY_STRING
}, cI = {
  claimsBasedCachingEnabled: !0
}, lI = {
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
}, uI = {
  sku: N.SKU,
  version: Ou,
  cpu: N.EMPTY_STRING,
  os: N.EMPTY_STRING
}, dI = {
  clientSecret: N.EMPTY_STRING,
  clientAssertion: void 0
}, fI = {
  azureCloudInstance: ji.None,
  tenant: "" + N.DEFAULT_COMMON_TENANT
}, hI = {
  application: {
    appName: "",
    appVersion: ""
  }
};
function pI(r) {
  var e = r.authOptions, t = r.systemOptions, n = r.loggerOptions, o = r.cacheOptions, a = r.storageInterface, s = r.networkInterface, l = r.cryptoInterface, u = r.clientCredentials, f = r.libraryInfo, h = r.telemetry, p = r.serverTelemetryManager, g = r.persistencePlugin, v = r.serializableCache, C = $e($e({}, sI), n);
  return {
    authOptions: gI(e),
    systemOptions: $e($e({}, Jg), t),
    loggerOptions: C,
    cacheOptions: $e($e({}, cI), o),
    storageInterface: a || new iI(e.clientId, Es, new Nu(C)),
    networkInterface: s || lI,
    cryptoInterface: l || Es,
    clientCredentials: u || dI,
    libraryInfo: $e($e({}, uI), f),
    telemetry: $e($e({}, hI), h),
    serverTelemetryManager: p || null,
    persistencePlugin: g || null,
    serializableCache: v || null
  };
}
function gI(r) {
  return $e({ clientCapabilities: [], azureCloudOptions: fI, skipAuthorityMetadataCache: !1 }, r);
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
var _s = (
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
var mI = (
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
              _s.preProcess(this.cacheManager, e), s.label = 1;
            case 1:
              return s.trys.push([1, 3, , 4]), [4, this.networkClient.sendPostRequestAsync(t, n)];
            case 2:
              return o = s.sent(), [3, 4];
            case 3:
              throw a = s.sent(), a instanceof ue ? a : re.createNetworkError(t, a);
            case 4:
              return _s.postProcess(this.cacheManager, e, o), [2, o];
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
      if (ee.isEmpty(e) || ee.isEmpty(t))
        throw et.createInvalidCodeChallengeParamsError();
      this.validateCodeChallengeMethod(t);
    }, r.validateCodeChallengeMethod = function(e) {
      if ([
        Rp.PLAIN,
        Rp.S256
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
      this.parameters.set(Ie.RESPONSE_MODE, encodeURIComponent(e || ys.QUERY));
    }, r.prototype.addNativeBroker = function() {
      this.parameters.set(Ie.NATIVE_BROKER, encodeURIComponent("1"));
    }, r.prototype.addScopes = function(e, t) {
      t === void 0 && (t = !0);
      var n = t ? zs(e || [], oa) : e || [], o = new Dt(n);
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
      this.parameters.set(oI, "1");
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
      this.parameters.set(ws.username, encodeURIComponent(e));
    }, r.prototype.addPassword = function(e) {
      this.parameters.set(ws.password, encodeURIComponent(e));
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
var Mu = (
  /** @class */
  function() {
    function r(e, t) {
      this.config = pI(e), this.logger = new Nu(this.config.loggerOptions, Qg, Ou), this.cryptoUtils = this.config.cryptoInterface, this.cacheManager = this.config.storageInterface, this.networkClient = this.config.networkInterface, this.networkManager = new mI(this.networkClient, this.cacheManager), this.serverTelemetryManager = this.config.serverTelemetryManager, this.authority = this.config.authOptions.authority, this.performanceClient = t;
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
var xu = (
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
  }(xu)
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
    return e.createAccessTokenEntity = function(t, n, o, a, s, l, u, f, h, p, g, v, C, E, _) {
      var R, I, S = new e();
      S.homeAccountId = t, S.credentialType = he.ACCESS_TOKEN, S.secret = o;
      var A = kr.nowSeconds();
      if (S.cachedAt = A.toString(), S.expiresOn = u.toString(), S.extendedExpiresOn = f.toString(), p && (S.refreshOn = p.toString()), S.environment = n, S.clientId = a, S.realm = s, S.target = l, S.userAssertionHash = v, S.tokenType = ee.isEmpty(g) ? We.BEARER : g, E && (S.requestedClaims = E, S.requestedClaimsHash = _), ((R = S.tokenType) === null || R === void 0 ? void 0 : R.toLowerCase()) !== We.BEARER.toLowerCase())
        switch (S.credentialType = he.ACCESS_TOKEN_WITH_AUTH_SCHEME, S.tokenType) {
          case We.POP:
            var O = an.extractTokenClaims(o, h);
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
  }(xu)
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
  }(xu)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Pp = [
  "interaction_required",
  "consent_required",
  "login_required"
], vI = [
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
      var a = !!t && Pp.indexOf(t) > -1, s = !!o && vI.indexOf(o) > -1, l = !!n && Pp.some(function(u) {
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
var _n = (
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
var Ss;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.InProgress = 1] = "InProgress", r[r.Completed = 2] = "Completed";
})(Ss || (Ss = {}));
var yI = /* @__PURE__ */ new Set([
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
var CI = (
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
var Ts = (
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
      e.client_info && bs(e.client_info, n);
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
        var p, g, v, C, E, _, R;
        return Se(this, function(I) {
          switch (I.label) {
            case 0:
              if ((h = this.performanceClient) === null || h === void 0 || h.addQueueMeasurement(F.HandleServerTokenResponse, e.correlation_id), e.id_token) {
                if (p = new an(e.id_token || N.EMPTY_STRING, this.cryptoObj), a && !ee.isEmpty(a.nonce) && p.claims.nonce !== a.nonce)
                  throw re.createNonceMismatchError();
                if (o.maxAge || o.maxAge === 0) {
                  if (g = p.claims.auth_time, !g)
                    throw re.createAuthTimeNotFoundError();
                  an.checkMaxAge(g, o.maxAge);
                }
              }
              this.homeAccountIdentifier = Rt.generateHomeAccountId(e.client_info || N.EMPTY_STRING, t.authorityType, this.logger, this.cryptoObj, p), a && a.state && (v = _n.parseRequestState(this.cryptoObj, a.state)), e.key_id = e.key_id || o.sshKid || void 0, C = this.generateCacheRecord(e, t, n, o, p, s, a), I.label = 1;
            case 1:
              return I.trys.push([1, , 5, 8]), this.persistencePlugin && this.serializableCache ? (this.logger.verbose("Persistence enabled, calling beforeCacheAccess"), E = new CI(this.serializableCache, !0), [4, this.persistencePlugin.beforeCacheAccess(E)]) : [3, 3];
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
        var g = e.scope ? Dt.fromString(e.scope) : new Dt(o.scopes || []), v = (typeof e.expires_in == "string" ? parseInt(e.expires_in, 10) : e.expires_in) || 0, C = (typeof e.ext_expires_in == "string" ? parseInt(e.ext_expires_in, 10) : e.ext_expires_in) || 0, E = (typeof e.refresh_in == "string" ? parseInt(e.refresh_in, 10) : e.refresh_in) || void 0, _ = n + v, R = _ + C, I = E && E > 0 ? n + E : void 0;
        p = fo.createAccessTokenEntity(this.homeAccountIdentifier, u, e.access_token || N.EMPTY_STRING, this.clientId, a ? a.claims.tid || N.EMPTY_STRING : t.tenant, g.printScopes(), _, R, this.cryptoObj, I, e.token_type, s, e.key_id, o.claims, o.requestedClaimsHash);
      }
      var S = null;
      ee.isEmpty(e.refresh_token) || (S = Yo.createRefreshTokenEntity(this.homeAccountIdentifier, u, e.refresh_token || N.EMPTY_STRING, this.clientId, e.foci, s));
      var A = null;
      return ee.isEmpty(e.foci) || (A = au.createAppMetadataEntity(this.clientId, u, e.foci)), new zi(h, f, p, S, A);
    }, r.prototype.generateAccountEntity = function(e, t, n, o) {
      var a = n.authorityType, s = o ? o.cloud_graph_host_name : N.EMPTY_STRING, l = o ? o.msgraph_host : N.EMPTY_STRING;
      if (a === Wt.Adfs)
        return this.logger.verbose("Authority type is ADFS, creating ADFS account"), Rt.createGenericAccount(this.homeAccountIdentifier, t, n, s, l);
      if (ee.isEmpty(e.client_info) && n.protocolMode === "AAD")
        throw re.createClientInfoEmptyError();
      return e.client_info ? Rt.createAccount(e.client_info, this.homeAccountIdentifier, t, n, s, l) : Rt.createGenericAccount(this.homeAccountIdentifier, t, n, s, l);
    }, r.generateAuthenticationResult = function(e, t, n, o, a, s, l, u, f) {
      var h, p, g;
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
              C = Dt.fromString(n.accessToken.target).asArray(), E = new Date(Number(n.accessToken.expiresOn) * 1e3), _ = new Date(Number(n.accessToken.extendedExpiresOn) * 1e3), D.label = 4;
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
                msGraphHost: ((g = n.account) === null || g === void 0 ? void 0 : g.msGraphHost) || N.EMPTY_STRING,
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
        return Se(this, function(R) {
          switch (R.label) {
            case 0:
              if (!t || !t.code)
                throw re.createTokenRequestCannotBeMadeError();
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(F.AuthClientAcquireToken, t.correlationId), h = (a = this.performanceClient) === null || a === void 0 ? void 0 : a.startMeasurement("AuthCodeClientAcquireToken", t.correlationId), this.logger.info("in acquireToken call in auth-code client"), p = kr.nowSeconds(), (s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(F.AuthClientExecuteTokenRequest, t.correlationId), [4, this.executeTokenRequest(this.authority, t)];
            case 1:
              return g = R.sent(), v = (l = g.headers) === null || l === void 0 ? void 0 : l[gr.X_MS_REQUEST_ID], C = (u = g.headers) === null || u === void 0 ? void 0 : u[gr.X_MS_HTTP_VERSION], C && (h == null || h.addStaticFields({
                httpVerAuthority: C
              })), E = new Ts(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin, this.performanceClient), E.validateTokenResponse(g.body), (f = this.performanceClient) === null || f === void 0 || f.setPreQueueTime(F.HandleServerTokenResponse, t.correlationId), [2, E.handleServerTokenResponse(g.body, this.authority, p, t, n, void 0, void 0, void 0, v).then(function(I) {
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
      var o = new Ts(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, null, null), a = new He(t), s = He.getDeserializedHash(a.getHash());
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
        var s, l, u, f, h, p, g;
        return Se(this, function(v) {
          switch (v.label) {
            case 0:
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(F.AuthClientExecuteTokenRequest, n.correlationId), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(F.AuthClientCreateTokenRequestBody, n.correlationId), s = this.createTokenQueryParameters(n), l = He.appendQueryString(t.tokenEndpoint, s), [4, this.createTokenRequestBody(n)];
            case 1:
              if (u = v.sent(), f = void 0, n.clientInfo)
                try {
                  h = bs(n.clientInfo, this.cryptoUtils), f = {
                    credential: "" + h.uid + Ct.CLIENT_INFO_SEPARATOR + h.utid,
                    type: pr.HOME_ACCOUNT_ID
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
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.AuthClientCreateTokenRequestBody, t.correlationId), a = new Gi(), a.addClientId(this.config.authOptions.clientId), this.includeRedirectUri ? a.addRedirectUri(t.redirectUri) : so.validateRedirectUri(t.redirectUri), a.addScopes(t.scopes), a.addAuthorizationCode(t.code), a.addLibraryInfo(this.config.libraryInfo), a.addApplicationTelemetry(this.config.telemetry.application), a.addThrottling(), this.serverTelemetryManager && a.addServerTelemetry(this.serverTelemetryManager), t.codeVerifier && a.addCodeVerifier(t.codeVerifier), this.config.clientCredentials.clientSecret && a.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion && (s = this.config.clientCredentials.clientAssertion, a.addClientAssertion(s.assertion), a.addClientAssertionType(s.assertionType)), a.addGrantType(Cs.AUTHORIZATION_CODE_GRANT), a.addClientInfo(), t.authenticationScheme !== We.POP ? [3, 2] : (l = new ri(this.cryptoUtils, this.performanceClient), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(F.PopTokenGenerateCnf, t.correlationId), [4, l.generateCnf(t)]);
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
                  p = bs(t.clientInfo, this.cryptoUtils), h = {
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
              return t.tokenBodyParameters && a.addExtraQueryParameters(t.tokenBodyParameters), t.enableSpaAuthorizationCode && (!t.tokenBodyParameters || !t.tokenBodyParameters[Ie.RETURN_SPA_CODE]) && a.addExtraQueryParameters((g = {}, g[Ie.RETURN_SPA_CODE] = "1", g)), [2, a.createQueryString()];
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
              if ((n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.AuthClientCreateQueryString, t.correlationId), o = new Gi(), o.addClientId(this.config.authOptions.clientId), a = zs(t.scopes || [], t.extraScopesToConsent || []), o.addScopes(a), o.addRedirectUri(t.redirectUri), s = t.correlationId || this.config.cryptoInterface.createNewGuid(), o.addCorrelationId(s), o.addResponseMode(t.responseMode), o.addResponseTypeCode(), o.addLibraryInfo(this.config.libraryInfo), o.addApplicationTelemetry(this.config.telemetry.application), o.addClientInfo(), t.codeChallenge && t.codeChallengeMethod && o.addCodeChallengeParams(t.codeChallenge, t.codeChallengeMethod), t.prompt && o.addPrompt(t.prompt), t.domainHint && o.addDomainHint(t.domainHint), t.prompt !== Ft.SELECT_ACCOUNT)
                if (t.sid && t.prompt === Ft.NONE)
                  this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request"), o.addSid(t.sid);
                else if (t.account) {
                  if (l = this.extractAccountSid(t.account), u = this.extractLoginHint(t.account), u) {
                    this.logger.verbose("createAuthCodeUrlQueryString: login_hint claim present on account"), o.addLoginHint(u);
                    try {
                      f = jo(t.account.homeAccountId), o.addCcsOid(f);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  } else if (l && t.prompt === Ft.NONE) {
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
              p = g.sent(), o.addPopToken(p.reqCnfString), g.label = 2;
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
  }(Mu)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Zg = (
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
        return Se(this, function(R) {
          switch (R.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.RefreshTokenClientAcquireToken, t.correlationId), h = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(F.RefreshTokenClientAcquireToken, t.correlationId), this.logger.verbose("RefreshTokenClientAcquireToken called", t.correlationId), p = kr.nowSeconds(), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(F.RefreshTokenClientExecuteTokenRequest, t.correlationId), [4, this.executeTokenRequest(t, this.authority)];
            case 1:
              return g = R.sent(), v = (s = g.headers) === null || s === void 0 ? void 0 : s[gr.X_MS_HTTP_VERSION], h == null || h.addStaticFields({
                refreshTokenSize: ((l = g.body.refresh_token) === null || l === void 0 ? void 0 : l.length) || 0
              }), v && (h == null || h.addStaticFields({
                httpVerToken: v
              })), C = (u = g.headers) === null || u === void 0 ? void 0 : u[gr.X_MS_REQUEST_ID], E = new Ts(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin), E.validateTokenResponse(g.body), (f = this.performanceClient) === null || f === void 0 || f.setPreQueueTime(F.HandleServerTokenResponse, t.correlationId), [2, E.handleServerTokenResponse(g.body, this.authority, p, t, void 0, void 0, !0, t.forceCache, C).then(function(I) {
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
              if (u = p instanceof Gr && p.errorCode === Qo.noTokensFoundError.code, f = p instanceof yo && p.errorCode === kp.INVALID_GRANT_ERROR && p.subError === kp.CLIENT_MISMATCH_ERROR, u || f)
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
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(F.RefreshTokenClientCreateTokenRequestBody, t.correlationId), s = t.correlationId, l = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(F.BaseClientCreateTokenRequestHeaders, s), u = new Gi(), u.addClientId(this.config.authOptions.clientId), u.addScopes(t.scopes), u.addGrantType(Cs.REFRESH_TOKEN_GRANT), u.addClientInfo(), u.addLibraryInfo(this.config.libraryInfo), u.addApplicationTelemetry(this.config.telemetry.application), u.addThrottling(), this.serverTelemetryManager && u.addServerTelemetry(this.serverTelemetryManager), u.addCorrelationId(s), u.addRefreshToken(t.refreshToken), this.config.clientCredentials.clientSecret && u.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion && (f = this.config.clientCredentials.clientAssertion, u.addClientAssertion(f.assertion), u.addClientAssertionType(f.assertionType)), t.authenticationScheme !== We.POP ? [3, 2] : (h = new ri(this.cryptoUtils, this.performanceClient), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(F.PopTokenGenerateCnf, t.correlationId), [4, h.generateCnf(t)]);
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
                      g = jo(t.ccsCredential.credential), u.addCcsOid(g);
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
  }(Mu)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var wI = (
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
              if (t.idToken && (o = new an(t.idToken.secret, this.config.cryptoInterface)), n.maxAge || n.maxAge === 0) {
                if (a = o == null ? void 0 : o.claims.auth_time, !a)
                  throw re.createAuthTimeNotFoundError();
                an.checkMaxAge(a, n.maxAge);
              }
              return [4, Ts.generateAuthenticationResult(this.cryptoUtils, this.authority, t, !0, n, o)];
            case 1:
              return [2, s.sent()];
          }
        });
      });
    }, e;
  }(Mu)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
function EI(r) {
  return r.hasOwnProperty("authorization_endpoint") && r.hasOwnProperty("token_endpoint") && r.hasOwnProperty("issuer") && r.hasOwnProperty("jwks_uri");
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
var em = { endpointMetadata: { "https://login.microsoftonline.com/common/": { token_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/common/": { token_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/common/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/common/": { token_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/consumers/": { token_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/consumers/": { token_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/consumers/": { token_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/organizations/": { token_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/organizations/": { token_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/organizations/": { token_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" } }, instanceDiscoveryMetadata: { "https://login.microsoftonline.com/common/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/common/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/common/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/consumers/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/consumers/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/consumers/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/organizations/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/organizations/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/organizations/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] } } }, Np = em.endpointMetadata, Op = em.instanceDiscoveryMetadata;
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
function bI(r) {
  return r.hasOwnProperty("tenant_discovery_endpoint") && r.hasOwnProperty("metadata");
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
function _I(r) {
  return r.hasOwnProperty("error") && r.hasOwnProperty("error_description");
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
var SI = (
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
              return g.trys.push([1, 6, , 7]), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(F.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [4, this.getRegionFromIMDS(N.IMDS_VERSION, u)];
            case 2:
              return f = g.sent(), f.status === Vo.httpSuccess && (l = f.body, t.region_source = Bn.IMDS), f.status !== Vo.httpBadRequest ? [3, 5] : ((a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(F.RegionDiscoveryGetCurrentVersion, this.correlationId), [4, this.getCurrentVersion(u)]);
            case 3:
              return h = g.sent(), h ? ((s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(F.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [4, this.getRegionFromIMDS(h, u)]) : (t.region_source = Bn.FAILED_AUTO_DETECTION, [2, null]);
            case 4:
              p = g.sent(), p.status === Vo.httpSuccess && (l = p.body, t.region_source = Bn.IMDS), g.label = 5;
            case 5:
              return [3, 7];
            case 6:
              return g.sent(), t.region_source = Bn.FAILED_AUTO_DETECTION, [2, null];
            case 7:
              return [3, 9];
            case 8:
              t.region_source = Bn.ENVIRONMENT_VARIABLE, g.label = 9;
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
      this.canonicalAuthority = e, this._canonicalAuthority.validateAsUri(), this.networkInterface = t, this.cacheManager = n, this.authorityOptions = o, this.regionDiscoveryMetadata = { region_used: void 0, region_source: void 0, region_outcome: void 0 }, this.logger = a, this.performanceClient = s, this.correlationId = l, this.regionDiscovery = new SI(t, this.performanceClient, this.correlationId);
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
              return n = o.sent(), [2, EI(n.body) ? n.body : null];
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
      return this.canonicalAuthority in Np ? Np[this.canonicalAuthority] : null;
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
              if (a = h.sent(), s = void 0, l = void 0, bI(a.body))
                s = a.body, l = s.metadata, this.logger.verbosePii("tenant_discovery_endpoint is: " + s.tenant_discovery_endpoint);
              else if (_I(a.body)) {
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
      return this.canonicalAuthority in Op ? Op[this.canonicalAuthority] : null;
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
var Is = (
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
var As = (
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
var Mp = (
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
var TI = {
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
var is = {
  missingKidError: {
    code: "missing_kid_error",
    desc: "The JOSE Header for the requested JWT, JWS or JWK object requires a keyId to be configured as the 'kid' header claim. No 'kid' value was provided."
  },
  missingAlgError: {
    code: "missing_alg_error",
    desc: "The JOSE Header for the requested JWT, JWS or JWK object requires an algorithm to be specified as the 'alg' header claim. No 'alg' value was provided."
  }
}, xp = (
  /** @class */
  function(r) {
    or(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return o.name = "JoseHeaderError", Object.setPrototypeOf(o, e.prototype), o;
    }
    return e.createMissingKidError = function() {
      return new e(is.missingKidError.code, is.missingKidError.desc);
    }, e.createMissingAlgError = function() {
      return new e(is.missingAlgError.code, is.missingAlgError.desc);
    }, e;
  }(ue)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var II = (
  /** @class */
  function() {
    function r(e) {
      this.typ = e.typ, this.alg = e.alg, this.kid = e.kid;
    }
    return r.getShrHeaderString = function(e) {
      if (!e.kid)
        throw xp.createMissingKidError();
      if (!e.alg)
        throw xp.createMissingAlgError();
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
var AI = (
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
      t.errors.length >= It.MAX_CACHED_ERRORS && (t.failedRequests.shift(), t.failedRequests.shift(), t.errors.shift()), t.failedRequests.push(this.apiId, this.correlationId), ee.isEmpty(e.subError) ? ee.isEmpty(e.errorCode) ? e && e.toString() ? t.errors.push(e.toString()) : t.errors.push(It.UNKNOWN_ERROR) : t.errors.push(e.errorCode) : t.errors.push(e.subError), this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t);
    }, r.prototype.incrementCacheHits = function() {
      var e = this.getLastRequests();
      return e.cacheHits += 1, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e), e.cacheHits;
    }, r.prototype.getLastRequests = function() {
      var e = new As(), t = this.cacheManager.getServerTelemetry(this.telemetryCacheKey);
      return t || e;
    }, r.prototype.clearTelemetryCache = function() {
      var e = this.getLastRequests(), t = r.maxErrorsToSend(e), n = e.errors.length;
      if (t === n)
        this.cacheManager.removeItem(this.telemetryCacheKey);
      else {
        var o = new As();
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
      return yI;
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
        status: Ss.InProgress,
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
      }), h.incompleteSubMeasurements = void 0, h = $e($e({}, h), { durationMs: Math.round(f), queuedTimeMs: u.totalQueueTime, queuedCount: u.totalQueueCount, queuedManuallyCompletedCount: u.manuallyCompletedCount, status: Ss.Completed, incompleteSubsCount: p }), this.truncateIntegralFields(h, this.getIntFields()), this.emitEvents([h], e.correlationId), h;
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
var Lp = (
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
), RI = (
  /** @class */
  function(r) {
    or(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.generateId = function() {
      return "callback-id";
    }, e.prototype.startPerformanceMeasuremeant = function() {
      return new Lp();
    }, e.prototype.startPerformanceMeasurement = function() {
      return new Lp();
    }, e.prototype.calculateQueuedTime = function(t, n) {
      return 0;
    }, e.prototype.addQueueMeasurement = function(t, n, o) {
    }, e.prototype.setPreQueueTime = function(t, n) {
    }, e;
  }(tm)
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
    kt(e, r);
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
var Dp;
(function(r) {
  r.Startup = "startup", r.Login = "login", r.Logout = "logout", r.AcquireToken = "acquireToken", r.SsoSilent = "ssoSilent", r.HandleRedirect = "handleRedirect", r.None = "none";
})(Dp || (Dp = {}));
var Up = {
  scopes: oa
}, ni = "jwk", Fp;
(function(r) {
  r.React = "@azure/msal-react", r.Angular = "@azure/msal-angular";
})(Fp || (Fp = {}));
var cu = "msal.db", kI = 1, PI = cu + ".keys", rr;
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
}, Rs = (
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
var Hp = (
  /** @class */
  function() {
    function r(e) {
      this.validateWindowStorage(e), this.windowStorage = window[e];
    }
    return r.prototype.validateWindowStorage = function(e) {
      if (e !== pt.LocalStorage && e !== pt.SessionStorage)
        throw Rs.createStorageNotSupportedError(e);
      var t = !!window[e];
      if (!t)
        throw Rs.createStorageNotSupportedError(e);
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
var rm = (
  /** @class */
  function() {
    function r() {
    }
    return r.extractBrowserRequestState = function(e, t) {
      if (ee.isEmpty(t))
        return null;
      try {
        var n = _n.parseRequestState(e, t);
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
    kt(e, r);
    function e(t, n, o, a) {
      var s = r.call(this, t, o, a) || this;
      return s.COOKIE_LIFE_MULTIPLIER = 24 * 60 * 60 * 1e3, s.cacheConfig = n, s.logger = a, s.internalStorage = new lu(), s.browserStorage = s.setupBrowserStorage(s.cacheConfig.cacheLocation), s.temporaryCacheStorage = s.setupTemporaryCacheStorage(s.cacheConfig.temporaryCacheLocation, s.cacheConfig.cacheLocation), n.cacheMigrationEnabled && (s.migrateCacheEntries(), s.createKeyMaps()), s;
    }
    return e.prototype.setupBrowserStorage = function(t) {
      switch (t) {
        case pt.LocalStorage:
        case pt.SessionStorage:
          try {
            return new Hp(t);
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
            return new Hp(t || pt.SessionStorage);
          } catch (o) {
            return this.logger.verbose(o), this.internalStorage;
          }
        case pt.MemoryStorage:
        default:
          return this.internalStorage;
      }
    }, e.prototype.migrateCacheEntries = function() {
      var t = this, n = N.CACHE_PREFIX + "." + yt.ID_TOKEN, o = N.CACHE_PREFIX + "." + yt.CLIENT_INFO, a = N.CACHE_PREFIX + "." + yt.ERROR, s = N.CACHE_PREFIX + "." + yt.ERROR_DESC, l = this.browserStorage.getItem(n), u = this.browserStorage.getItem(o), f = this.browserStorage.getItem(a), h = this.browserStorage.getItem(s), p = [l, u, f, h], g = [yt.ID_TOKEN, yt.CLIENT_INFO, yt.ERROR, yt.ERROR_DESC];
      g.forEach(function(v, C) {
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
                    var g = er.toObject(new Yo(), u), h = t.updateCredentialCacheKey(s, g);
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
          this.logger.error("BrowserCacheManager:addTokenKey - CredentialType provided invalid. CredentialType: " + n), re.createUnexpectedCredentialTypeError();
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
          this.logger.error("BrowserCacheManager:removeTokenKey - CredentialType provided invalid. CredentialType: " + n), re.createUnexpectedCredentialTypeError();
      }
      this.setItem(en.TOKEN_KEYS + "." + this.clientId, JSON.stringify(o));
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
      return !o || !As.isServerTelemetryEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getServerTelemetry: cache hit"), er.toObject(new As(), o));
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
      return !o || !Mp.isThrottlingEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getThrottlingCache: cache hit"), er.toObject(new Mp(), o));
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
      return Pu(this.browserStorage.getKeys(), this.temporaryCacheStorage.getKeys());
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
), NI = function(r, e) {
  var t = {
    cacheLocation: pt.MemoryStorage,
    temporaryCacheLocation: pt.MemoryStorage,
    storeAuthStateInCookie: !1,
    secureCookies: !1,
    cacheMigrationEnabled: !1,
    claimsBasedCachingEnabled: !0
  };
  return new uu(r, t, Es, e);
};
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Ml = "@azure/msal-browser", Wi = "2.38.3";
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var OI = (
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
                method: tn.POST,
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
var MI = (
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
          (l.status < 200 || l.status >= 300) && (t === tn.POST ? s(J.createPostRequestFailedError("Failed with status " + l.status, e)) : s(J.createGetRequestFailedError("Failed with status " + l.status, e)));
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
          window.navigator.onLine ? t === tn.POST ? s(J.createPostRequestFailedError("Failed with status " + l.status, e)) : s(J.createGetRequestFailedError("Failed with status " + l.status, e)) : s(J.createNoNetworkConnectivityError());
        }, t === tn.POST && n && n.body)
          l.send(n.body);
        else if (t === tn.GET)
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
      return window.fetch && window.Headers ? new OI() : new MI();
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
var nm = (
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
              if (o = Pu(e && e.scopes || []), a = ce(ce({}, e), {
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
      return new AI(n, this.browserStorage);
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
              }, e ? (this.logger.verbose("Creating discovered authority with request authority"), [4, Is.createDiscoveredInstance(e, this.config.system.networkClient, this.browserStorage, t, this.logger)]) : [3, 2];
            case 1:
              return [2, n.sent()];
            case 2:
              return this.logger.verbose("Creating discovered authority with configured authority"), [4, Is.createDiscoveredInstance(this.config.auth.authority, this.config.system.networkClient, this.browserStorage, t, this.logger)];
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
      var a = rm.extractBrowserRequestState(this.browserCrypto, t.state);
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
              }, l = t || this.config.auth.authority, u = Qi.generateAuthority(l, n || this.config.auth.azureCloudOptions), this.logger.verbose("Creating discovered authority with configured authority", this.correlationId), this.performanceClient.setPreQueueTime(F.AuthorityFactoryCreateDiscoveredInstance, this.correlationId), [4, Is.createDiscoveredInstance(u, this.config.system.networkClient, this.browserStorage, s, this.logger, this.performanceClient, this.correlationId).then(function(h) {
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
              return l = ce.apply(void 0, [ce.apply(void 0, u.concat([p.sent()])), { redirectUri: o, state: s, nonce: t.nonce || this.browserCrypto.createNewGuid(), responseMode: ys.FRAGMENT }]), f = t.account || this.browserStorage.getActiveAccount(), f && (this.logger.verbose("Setting validated request account", this.correlationId), this.logger.verbosePii("Setting validated request account: " + f.homeAccountId, this.correlationId), l.account = f), ee.isEmpty(l.loginHint) && !f && (h = this.browserStorage.getLegacyLoginHint(), h && (l.loginHint = h)), [2, l];
          }
        });
      });
    }, e;
  }(nm)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Lu = (
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
        return z(this, function(g) {
          switch (g.label) {
            case 0:
              if (this.performanceClient.addQueueMeasurement(F.HandleCodeResponseFromServer, this.authCodeRequest.correlationId), this.logger.trace("InteractionHandler.handleCodeResponseFromServer called"), s = this.browserStorage.generateStateKey(t), l = this.browserStorage.getTemporaryCache(s), !l)
                throw re.createStateNotFoundError("Cached State");
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
              return this.performanceClient.addQueueMeasurement(F.UpdateTokenEndpointAuthority, this.authCodeRequest.correlationId), o = "https://" + e + "/" + t.tenant + "/", [4, Is.createDiscoveredInstance(o, n, this.browserStorage, t.options, this.logger, this.performanceClient, this.authCodeRequest.correlationId)];
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
var Bp = (
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
        var s, l, u, f, h, p, g;
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
              return g = v.sent(), this.browserStorage.cleanRequestByState(n), [2, g];
          }
        });
      });
    }, e;
  }(Lu)
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
              return a = s.sent(), [2, new wI(a, this.performanceClient)];
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
    kt(e, r);
    function e(t, n, o, a, s, l, u, f, h, p, g, v) {
      var C = r.call(this, t, n, o, a, s, l, f, h, v) || this;
      return C.apiId = u, C.accountId = p, C.nativeMessageHandler = h, C.nativeStorageManager = g, C.silentCacheClient = new om(t, C.nativeStorageManager, o, a, s, l, f, h, v), C;
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
              n = t.prompt, o = Ip(t, ["prompt"]), n && this.logger.verbose("NativeInteractionClient - handleRedirectPromise called and prompt was included in the original request, removing prompt from cached request to prevent second interaction with native broker window."), this.browserStorage.removeItem(this.browserStorage.generateCacheKey(Be.NATIVE_REQUEST)), a = {
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
      var o = Rt.generateHomeAccountId(t.client_info || N.EMPTY_STRING, Wt.Default, this.logger, this.browserCrypto, n);
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
        var u, f, h, p, g, v, C, E;
        return z(this, function(_) {
          switch (_.label) {
            case 0:
              return u = this.addTelemetryFromNativeResponse(t), f = t.scope ? Dt.fromString(t.scope) : Dt.fromString(n.scope), h = t.account.properties || {}, p = h.UID || o.claims.oid || o.claims.sub || N.EMPTY_STRING, g = h.TenantId || o.claims.tid || N.EMPTY_STRING, [4, this.generatePopAccessToken(t, n)];
            case 1:
              return v = _.sent(), C = n.tokenType === We.POP ? We.POP : We.BEARER, E = {
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
      var h = uo.createIdTokenEntity(o, n.authority, t.id_token || N.EMPTY_STRING, n.clientId, s.claims.tid || N.EMPTY_STRING), p = n.tokenType === We.POP ? N.SHR_NONCE_VALIDITY : (typeof t.expires_in == "string" ? parseInt(t.expires_in, 10) : t.expires_in) || 0, g = f + p, v = this.generateScopes(t, n), C = fo.createAccessTokenEntity(o, n.authority, l, n.clientId, s ? s.claims.tid || N.EMPTY_STRING : u, v.printScopes(), g, 0, this.browserCrypto), E = new zi(a, h, C);
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
        var n, o, a, s, l, u, f, h, p, g, v = this;
        return z(this, function(C) {
          switch (C.label) {
            case 0:
              return this.logger.trace("NativeInteractionClient - initializeNativeRequest called"), n = t.authority || this.config.auth.authority, t.account ? [4, this.validateRequestAuthority(n, t.account)] : [3, 2];
            case 1:
              C.sent(), C.label = 2;
            case 2:
              return o = new He(n), o.validateAsUri(), a = t.scopes, s = Ip(t, ["scopes"]), l = new Dt(a || []), l.appendScopes(oa), u = function() {
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
              g = C.sent(), f.reqCnf = g.reqCnfString, f.keyId = g.kid, C.label = 4;
            case 4:
              return [2, f];
          }
        });
      });
    }, e;
  }(nm)
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
              method: bn.HandshakeRequest
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
        if (!(!t.channel || t.channel !== Ui.CHANNEL_ID) && !(t.extensionId && t.extensionId !== this.extensionId) && t.body.method === bn.HandshakeRequest) {
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
        if (a === bn.Response) {
          if (!n)
            return;
          var s = t.body.response;
          if (this.logger.trace("NativeMessageHandler - Received response from browser extension"), this.logger.tracePii("NativeMessageHandler - Received response from browser extension: " + JSON.stringify(s)), s.status !== "Success")
            n.reject(nn.createError(s.code, s.description, s.ext));
          else if (s.result)
            s.result.code && s.result.description ? n.reject(nn.createError(s.result.code, s.result.description, s.result.ext)) : n.resolve(s.result);
          else
            throw ue.createUnexpectedError("Event does not contain result.");
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
var xI = (
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
              return this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, se.Redirect)];
            case 1:
              n = v.sent(), this.browserStorage.updateCacheEntries(n.state, n.nonce, n.authority, n.loginHint || N.EMPTY_STRING, n.account || null), o = this.initializeServerTelemetryManager(Ze.acquireTokenRedirect), a = function(C) {
                C.persisted && (g.logger.verbose("Page was restored from back/forward cache. Clearing temporary cache."), g.browserStorage.cleanRequestByState(n.state), g.eventHandler.emitEvent(Ee.RESTORE_FROM_BFCACHE, se.Redirect));
              }, v.label = 2;
            case 2:
              return v.trys.push([2, 7, , 8]), this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationCodeRequest, t.correlationId), [4, this.initializeAuthorizationCodeRequest(n)];
            case 3:
              return s = v.sent(), this.performanceClient.setPreQueueTime(F.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(o, n.authority, n.azureCloudOptions)];
            case 4:
              return l = v.sent(), this.logger.verbose("Auth code client created"), u = new Bp(l, this.browserStorage, s, this.logger, this.browserCrypto, this.performanceClient), [4, l.getAuthCodeUrl(ce(ce({}, n), { nativeBroker: po.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, t.authenticationScheme) }))];
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
        var a, s, l, u, f, h, p, g = this;
        return z(this, function(v) {
          switch (v.label) {
            case 0:
              if (a = this.browserStorage.getCachedRequest(n, this.browserCrypto), this.logger.verbose("handleHash called, retrieved cached request"), s = He.getDeserializedHash(t), s.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), !this.nativeMessageHandler)
                  throw J.createNativeConnectionNotEstablishedError();
                return l = new ei(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, s.accountId, this.nativeStorage, a.correlationId), u = _n.parseRequestState(this.browserCrypto, n).userRequestState, [2, l.acquireToken(ce(ce({}, a), {
                  state: u,
                  prompt: void 0
                  // Server should handle the prompt, ideally native broker can do this part silently
                })).finally(function() {
                  g.browserStorage.cleanRequestByState(n);
                })];
              }
              if (f = this.browserStorage.getCachedAuthority(n), !f)
                throw J.createNoCachedAuthorityError();
              return this.performanceClient.setPreQueueTime(F.StandardInteractionClientCreateAuthCodeClient, a.correlationId), [4, this.createAuthCodeClient(o, f)];
            case 1:
              return h = v.sent(), this.logger.verbose("Auth code client created"), _s.removeThrottle(this.browserStorage, this.config.auth.clientId, a), p = new Bp(h, this.browserStorage, a, this.logger, this.browserCrypto, this.performanceClient), [4, p.handleCodeResponseFromHash(t, n, h.authority, this.networkClient)];
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
var LI = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t, n, o, a, s, l, u, f, h, p) {
      var g = r.call(this, t, n, o, a, s, l, u, h, p) || this;
      return g.unloadWindow = g.unloadWindow.bind(g), g.nativeStorage = f, g;
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
        var s, l, u, f, h, p, g, v, C, E, _, R, I, S, A, O, L, q = this;
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
              return g = D.sent(), v = new Lu(f, this.browserStorage, u, this.logger, this.performanceClient), C = {
                popup: a,
                popupName: n,
                popupWindowAttributes: o
              }, E = this.initiateAuthRequest(g, C), this.eventHandler.emitEvent(Ee.POPUP_OPENED, se.Popup, { popupWindow: E }, null), [4, this.monitorPopupForHash(E)];
            case 6:
              if (_ = D.sent(), R = He.getDeserializedHash(_), I = this.validateAndExtractStateFromHash(R, se.Popup, l.correlationId), _s.removeThrottle(this.browserStorage, this.config.auth.clientId, u), R.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), p && p.endMeasurement({
                  success: !0,
                  isNativeBroker: !0
                }), !this.nativeMessageHandler)
                  throw J.createNativeConnectionNotEstablishedError();
                return S = new ei(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, R.accountId, this.nativeStorage, l.correlationId), A = _n.parseRequestState(this.browserCrypto, I).userRequestState, [2, S.acquireToken(ce(ce({}, l), {
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
        var u, f, h, p, g, v, C;
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
              return E.sent(), l ? (g = {
                apiId: Ze.logoutPopup,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !1
              }, v = He.getAbsoluteUrl(l, ct.getCurrentUri()), this.logger.verbose("Redirecting main window to url specified in the request"), this.logger.verbosePii("Redirecting main window to: " + v), this.navigationClient.navigateInternal(v, g)) : this.logger.verbose("No main window navigation requested"), [3, 6];
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
      var a, s, l, u, f = window.screenLeft ? window.screenLeft : window.screenX, h = window.screenTop ? window.screenTop : window.screenY, p = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, g = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, v = (a = o.popupSize) === null || a === void 0 ? void 0 : a.width, C = (s = o.popupSize) === null || s === void 0 ? void 0 : s.height, E = (l = o.popupPosition) === null || l === void 0 ? void 0 : l.top, _ = (u = o.popupPosition) === null || u === void 0 ? void 0 : u.left;
      return (!v || v < 0 || v > p) && (this.logger.verbose("Default popup window width used. Window width not configured or invalid."), v = qr.POPUP_WIDTH), (!C || C < 0 || C > g) && (this.logger.verbose("Default popup window height used. Window height not configured or invalid."), C = qr.POPUP_HEIGHT), (!E || E < 0 || E > g) && (this.logger.verbose("Default popup window top position used. Window top not configured or invalid."), E = Math.max(0, g / 2 - qr.POPUP_HEIGHT / 2 + h)), (!_ || _ < 0 || _ > p) && (this.logger.verbose("Default popup window left position used. Window left not configured or invalid."), _ = Math.max(0, p / 2 - qr.POPUP_WIDTH / 2 + f)), window.open(t, n, "width=" + v + ", height=" + C + ", top=" + E + ", left=" + _ + ", scrollbars=yes");
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
var DI = (
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
var UI = 6e4, du = 6e3, FI = 3e4, HI = 2e3;
function BI(r, e) {
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
  }, f = ce(ce({}, Jg), {
    loggerOptions: u,
    networkClient: e ? ct.getBrowserNetworkClient() : TI,
    navigationClient: new DI(),
    loadFrameTimeout: 0,
    // If loadFrameTimeout is provided, use that as default.
    windowHashTimeout: (o == null ? void 0 : o.loadFrameTimeout) || UI,
    iframeHashTimeout: (o == null ? void 0 : o.loadFrameTimeout) || du,
    navigateFrameWait: e && ct.detectIEOrEdge() ? 500 : 0,
    redirectNavigationTimeout: FI,
    asyncPopups: !1,
    allowRedirectInIframe: !1,
    allowNativeBroker: !1,
    nativeBrokerHandshakeTimeout: (o == null ? void 0 : o.nativeBrokerHandshakeTimeout) || HI,
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
  }, g = {
    auth: ce(ce({}, s), t),
    cache: ce(ce({}, l), n),
    system: ce(ce({}, f), h),
    telemetry: ce(ce({}, p), a)
  };
  return g;
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
            var g = p ? p.location.hash : N.EMPTY_STRING;
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
  }(Lu)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var KI = (
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
              if (this.performanceClient.addQueueMeasurement(F.SilentIframeClientAcquireToken, t.correlationId), this.logger.verbose("acquireTokenByIframe called"), n = this.performanceClient.startMeasurement(F.SilentIframeClientAcquireToken, t.correlationId), ee.isEmpty(t.loginHint) && ee.isEmpty(t.sid) && (!t.account || ee.isEmpty(t.account.username)) && this.logger.warning("No user hint provided. The authorization server may need more information to complete this request."), t.prompt && t.prompt !== Ft.NONE && t.prompt !== Ft.NO_SESSION)
                throw n.endMeasurement({
                  success: !1
                }), J.createSilentPromptValueError(t.prompt);
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
        var o, a, s, l, u, f, h, p, g, v = this;
        return z(this, function(C) {
          switch (C.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(F.SilentIframeClientTokenHelper, n.correlationId), this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationCodeRequest, n.correlationId), [4, this.initializeAuthorizationCodeRequest(n)];
            case 1:
              return o = C.sent(), this.performanceClient.setPreQueueTime(F.GetAuthCodeUrl, n.correlationId), [4, t.getAuthCodeUrl(ce(ce({}, n), { nativeBroker: po.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, n.authenticationScheme) }))];
            case 2:
              return a = C.sent(), s = new im(t, this.browserStorage, o, this.logger, this.config.system, this.performanceClient), this.performanceClient.setPreQueueTime(F.SilentHandlerInitiateAuthRequest, n.correlationId), [4, s.initiateAuthRequest(a)];
            case 3:
              return l = C.sent(), this.performanceClient.setPreQueueTime(F.SilentHandlerMonitorIframeForHash, n.correlationId), [4, s.monitorIframeForHash(l, this.config.system.iframeHashTimeout)];
            case 4:
              if (u = C.sent(), f = He.getDeserializedHash(u), h = this.validateAndExtractStateFromHash(f, se.Silent, o.correlationId), f.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), !this.nativeMessageHandler)
                  throw J.createNativeConnectionNotEstablishedError();
                return p = new ei(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.apiId, this.performanceClient, this.nativeMessageHandler, f.accountId, this.browserStorage, this.correlationId), g = _n.parseRequestState(this.browserCrypto, h).userRequestState, [2, p.acquireToken(ce(ce({}, n), { state: g, prompt: n.prompt || Ft.NONE })).finally(function() {
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
var qI = (
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
              return a = s.sent(), [2, new Zg(a, this.performanceClient)];
          }
        });
      });
    }, e;
  }(li)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var $I = (
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
var GI = (
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
var zI = 32, WI = (
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
        var e = new Uint8Array(zI);
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
var VI = (
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
var jI = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.initPrng = function(e) {
      return window.msrCrypto.initPrng(Pu(e));
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
var YI = (
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
var QI = "RSASSA-PKCS1-v1_5", Kp = "SHA-256", JI = 2048, XI = new Uint8Array([1, 0, 1]), cm = (
  /** @class */
  function() {
    function r(e, t) {
      var n, o;
      if (this.logger = e, this.cryptoOptions = t, this.hasBrowserCrypto())
        this.logger.verbose("BrowserCrypto: modern crypto interface available"), this.subtleCrypto = new VI();
      else if (this.hasIECrypto())
        this.logger.verbose("BrowserCrypto: MS crypto interface available"), this.subtleCrypto = new YI();
      else if (this.hasMsrCrypto() && (!((n = this.cryptoOptions) === null || n === void 0) && n.useMsrCrypto))
        this.logger.verbose("BrowserCrypto: MSR crypto interface available"), this.subtleCrypto = new jI();
      else
        throw this.hasMsrCrypto() && this.logger.info("BrowserCrypto: MSR Crypto interface available but system.cryptoOptions.useMsrCrypto not enabled"), this.logger.error("BrowserCrypto: No crypto interfaces available."), J.createCryptoNotAvailableError("Browser crypto, msCrypto, or msrCrypto interfaces not available.");
      if (this.subtleCrypto.initPrng) {
        if (this.logger.verbose("BrowserCrypto: Interface requires entropy"), !(!((o = this.cryptoOptions) === null || o === void 0) && o.entropy))
          throw this.logger.error("BrowserCrypto: Interface requires entropy but none provided."), Rs.createEntropyNotProvided();
        this.logger.verbose("BrowserCrypto: Entropy provided"), this.subtleCrypto.initPrng(this.cryptoOptions.entropy);
      }
      this.keygenAlgorithmOptions = {
        name: QI,
        hash: Kp,
        modulusLength: JI,
        publicExponent: XI
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
          return t = Sn.stringToUtf8Arr(e), [2, this.subtleCrypto.digest({ name: Kp }, t)];
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
var ZI = (
  /** @class */
  function() {
    function r() {
      this.dbName = cu, this.version = kI, this.tableName = PI, this.dbOpen = !1;
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
var qp = (
  /** @class */
  function() {
    function r(e, t) {
      this.inMemoryCache = new lu(), this.indexedDBCache = new ZI(), this.logger = e, this.storeName = t;
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
var ks;
(function(r) {
  r.asymmetricKeys = "asymmetricKeys", r.symmetricKeys = "symmetricKeys";
})(ks || (ks = {}));
var eA = (
  /** @class */
  function() {
    function r(e) {
      this.logger = e, this.asymmetricKeys = new qp(this.logger, ks.asymmetricKeys), this.symmetricKeys = new qp(this.logger, ks.symmetricKeys);
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
var tA = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.logger = e, this.browserCrypto = new cm(this.logger, n), this.b64Encode = new sm(), this.b64Decode = new GI(), this.guidGenerator = new am(this.browserCrypto), this.pkceGenerator = new WI(this.browserCrypto), this.cache = new eA(this.logger), this.performanceClient = t;
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
        var a, s, l, u, f, h, p, g, v, C, E, _, R;
        return z(this, function(I) {
          switch (I.label) {
            case 0:
              return a = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(F.CryptoOptsSignJwt, n), [4, this.cache.asymmetricKeys.getItem(t)];
            case 1:
              if (s = I.sent(), !s)
                throw J.createSigningKeyNotFoundInStorageError(t);
              return [4, this.browserCrypto.exportJwk(s.publicKey)];
            case 2:
              return l = I.sent(), u = Sn.getSortedObjectString(l), f = this.b64Encode.urlEncode(JSON.stringify({ kid: t })), h = II.getShrHeaderString({ kid: f, alg: l.alg }), p = this.b64Encode.urlEncode(h), e.cnf = {
                jwk: JSON.parse(u)
              }, g = this.b64Encode.urlEncode(JSON.stringify(e)), v = p + "." + g, C = Sn.stringToArrayBuffer(v), [4, this.browserCrypto.sign(s.privateKey, C)];
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
var $p = (
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
var rA = (
  /** @class */
  function(r) {
    kt(e, r);
    function e(t, n, o, a, s, l, u) {
      var f = r.call(this, t, n, o, a, s, l) || this;
      return f.browserCrypto = new cm(f.logger, u), f.guidGenerator = new am(f.browserCrypto), f;
    }
    return e.prototype.startPerformanceMeasuremeant = function(t, n) {
      return new $p(t, n);
    }, e.prototype.generateId = function() {
      return this.guidGenerator.generateGuid();
    }, e.prototype.getPageVisibility = function() {
      var t;
      return ((t = document.visibilityState) === null || t === void 0 ? void 0 : t.toString()) || null;
    }, e.prototype.deleteIncompleteSubMeasurements = function(t) {
      var n = this.eventsByCorrelationId.get(t.event.correlationId), o = n && n.eventId === t.event.eventId, a = [];
      o && (n != null && n.incompleteSubMeasurements) && n.incompleteSubMeasurements.forEach(function(s) {
        a.push(ce({}, s));
      }), a.length > 0 && $p.flushMeasurements(t.event.correlationId, a);
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
  }(tm)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var nA = (
  /** @class */
  function() {
    function r(e, t, n, o) {
      this.isBrowserEnvironment = typeof window < "u", this.config = e, this.storage = t, this.logger = n, this.cryptoObj = o;
    }
    return r.prototype.loadExternalTokens = function(e, t, n) {
      if (this.logger.info("TokenCache - loadExternalTokens called"), !t.id_token)
        throw J.createUnableToLoadTokenError("Please ensure server response includes id token.");
      var o = new an(t.id_token, this.cryptoObj), a, s;
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
      if (a ? s = a : o !== void 0 && n && (s = Rt.generateHomeAccountId(n, o, this.logger, this.cryptoObj, e)), !s)
        throw J.createUnableToLoadTokenError("Unexpected missing homeAccountId");
      var l = n ? Rt.createAccount(n, s, e, void 0, void 0, void 0, t) : Rt.createGenericAccount(s, e, void 0, void 0, void 0, t);
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
      var l = new Dt(e.scopes).printScopes(), u = s.expiresOn || t.expires_in + (/* @__PURE__ */ new Date()).getTime() / 1e3, f = s.extendedExpiresOn, h = fo.createAccessTokenEntity(n, o, t.access_token, this.config.auth.clientId, a, l, u, f, this.cryptoObj);
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
      n != null && n.accessToken && (u = n.accessToken.secret, f = Dt.fromString(n.accessToken.target).asArray(), h = new Date(Number(n.accessToken.expiresOn) * 1e3), p = new Date(Number(n.accessToken.extendedExpiresOn) * 1e3));
      var g = (t == null ? void 0 : t.claims.oid) || (t == null ? void 0 : t.claims.sub) || N.EMPTY_STRING, v = (t == null ? void 0 : t.claims.tid) || N.EMPTY_STRING;
      return {
        authority: o ? o.canonicalAuthority : N.EMPTY_STRING,
        uniqueId: g,
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
var oA = (
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
var iA = (
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
                throw J.createAuthCodeRequiredError();
              return this.performanceClient.setPreQueueTime(F.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, se.Silent)];
            case 1:
              n = h.sent(), this.browserStorage.updateCacheEntries(n.state, n.nonce, n.authority, n.loginHint || N.EMPTY_STRING, n.account || null), o = this.initializeServerTelemetryManager(this.apiId), h.label = 2;
            case 2:
              return h.trys.push([2, 4, , 5]), a = ce(ce({}, n), { code: t.code }), this.performanceClient.setPreQueueTime(F.StandardInteractionClientGetClientConfiguration, t.correlationId), [4, this.getClientConfiguration(o, n.authority)];
            case 3:
              return s = h.sent(), l = new oA(s), this.logger.verbose("Auth code client created"), u = new im(l, this.browserStorage, a, this.logger, this.config.system, this.performanceClient), [2, u.handleCodeResponseFromServer({
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
var aA = (
  /** @class */
  function() {
    function r(e) {
      this.isBrowserEnvironment = typeof window < "u", this.config = BI(e, this.isBrowserEnvironment), this.initialized = !1, this.logger = new Nu(this.config.system.loggerOptions, Ml, Wi), this.networkClient = this.config.system.networkClient, this.navigationClient = this.config.system.navigationClient, this.redirectResponse = /* @__PURE__ */ new Map(), this.hybridAuthCodeResponses = /* @__PURE__ */ new Map(), this.performanceClient = this.isBrowserEnvironment ? new rA(this.config.auth.clientId, this.config.auth.authority, this.logger, Ml, Wi, this.config.telemetry.application, this.config.system.cryptoOptions) : new RI(this.config.auth.clientId, this.config.auth.authority, this.logger, Ml, Wi, this.config.telemetry.application), this.browserCrypto = this.isBrowserEnvironment ? new tA(this.logger, this.performanceClient, this.config.system.cryptoOptions) : Es, this.eventHandler = new $I(this.logger, this.browserCrypto), this.browserStorage = this.isBrowserEnvironment ? new uu(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger) : NI(this.config.auth.clientId, this.logger);
      var t = {
        cacheLocation: pt.MemoryStorage,
        temporaryCacheLocation: pt.MemoryStorage,
        storeAuthStateInCookie: !1,
        secureCookies: !1,
        cacheMigrationEnabled: !1,
        claimsBasedCachingEnabled: !0
      };
      this.nativeInternalStorage = new uu(this.config.auth.clientId, t, this.browserCrypto, this.logger), this.tokenCache = new nA(this.config, this.browserStorage, this.logger, this.browserCrypto), this.trackPageVisibilityWithMeasurement = this.trackPageVisibilityWithMeasurement.bind(this);
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
          return this.logger.verbose("handleRedirectPromise called"), ct.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized), t = this.getAllAccounts(), this.isBrowserEnvironment ? (n = e || N.EMPTY_STRING, o = this.redirectResponse.get(n), typeof o > "u" ? (this.eventHandler.emitEvent(Ee.HANDLE_REDIRECT_START, se.Redirect), this.logger.verbose("handleRedirectPromise has been called for the first time, storing the promise"), a = this.browserStorage.getCachedNativeRequest(), s = void 0, a && po.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider) && this.nativeExtensionProvider && !e ? (this.logger.trace("handleRedirectPromise - acquiring token from native platform"), l = new ei(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.handleRedirectPromise, this.performanceClient, this.nativeExtensionProvider, a.accountId, this.nativeInternalStorage, a.correlationId), s = l.handleRedirectPromise()) : (this.logger.trace("handleRedirectPromise - acquiring token from web flow"), u = this.browserStorage.getTemporaryCache(Be.CORRELATION_ID, !0) || N.EMPTY_STRING, f = this.createRedirectClient(u), s = f.handleRedirectPromise(e)), o = s.then(function(g) {
            if (g) {
              var v = t.length < h.getAllAccounts().length;
              v ? (h.eventHandler.emitEvent(Ee.LOGIN_SUCCESS, se.Redirect, g), h.logger.verbose("handleRedirectResponse returned result, login success")) : (h.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_SUCCESS, se.Redirect, g), h.logger.verbose("handleRedirectResponse returned result, acquire token success"));
            }
            return h.eventHandler.emitEvent(Ee.HANDLE_REDIRECT_END, se.Redirect), g;
          }).catch(function(g) {
            throw t.length > 0 ? h.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_FAILURE, se.Redirect, null, g) : h.eventHandler.emitEvent(Ee.LOGIN_FAILURE, se.Redirect, null, g), h.eventHandler.emitEvent(Ee.HANDLE_REDIRECT_END, se.Redirect), g;
          }), this.redirectResponse.set(n, o)) : this.logger.verbose("handleRedirectPromise has been called previously, returning the result from the first call"), [2, o]) : (this.logger.verbose("handleRedirectPromise returns null, not browser environment"), [2, null]);
        });
      });
    }, r.prototype.acquireTokenRedirect = function(e) {
      return G(this, void 0, void 0, function() {
        var t, n, o, a, s, l = this;
        return z(this, function(u) {
          return t = this.getRequestCorrelationId(e), this.logger.verbose("acquireTokenRedirect called", t), this.preflightBrowserEnvironmentCheck(se.Redirect), n = this.getAllAccounts().length > 0, n ? this.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_START, se.Redirect, e) : this.eventHandler.emitEvent(Ee.LOGIN_START, se.Redirect, e), this.nativeExtensionProvider && this.canUseNative(e) ? (a = new ei(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenRedirect, this.performanceClient, this.nativeExtensionProvider, this.getNativeAccountId(e), this.nativeInternalStorage, e.correlationId), o = a.acquireTokenRedirect(e).catch(function(f) {
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
                  throw u instanceof nn && u.isFatal() && (s.nativeExtensionProvider = void 0), u;
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
        throw Rs.createInMemoryRedirectUnavailableError();
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
      return new LI(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createRedirectClient = function(e) {
      return new xI(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentIframeClient = function(e) {
      return new KI(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.ssoSilent, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentCacheClient = function(e) {
      return new om(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentRefreshClient = function(e) {
      return new qI(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentAuthCodeClient = function(e) {
      return new iA(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenByCode, this.performanceClient, this.nativeExtensionProvider, e);
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
var sA = (
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
          return n = this.getRequestCorrelationId(t), this.logger.verbose("loginRedirect called", n), [2, this.acquireTokenRedirect(ce({ correlationId: n }, t || Up))];
        });
      });
    }, e.prototype.loginPopup = function(t) {
      var n = this.getRequestCorrelationId(t);
      return this.logger.verbose("loginPopup called", n), this.acquireTokenPopup(ce({ correlationId: n }, t || Up));
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
          }, l = JSON.stringify(s), u = this.activeSilentTokenRequests.get(l), typeof u > "u" ? (this.logger.verbose("acquireTokenSilent called for the first time, storing active request", n), this.performanceClient.setPreQueueTime(F.AcquireTokenSilentAsync, n), f = this.acquireTokenSilentAsync(ce(ce({}, t), { correlationId: n }), a).then(function(g) {
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
              return this.performanceClient.addQueueMeasurement(F.AcquireTokenSilentAsync, t.correlationId), this.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_START, se.Silent, t), this.astsAsyncMeasurement = this.performanceClient.startMeasurement(F.AcquireTokenSilentAsync, t.correlationId), (o = this.astsAsyncMeasurement) === null || o === void 0 || o.increment({
                visibilityChangeCount: 0
              }), document.addEventListener("visibilitychange", this.trackPageVisibility), po.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, t.authenticationScheme) && n.nativeAccountId ? (this.logger.verbose("acquireTokenSilent - attempting to acquire token from native platform"), s = ce(ce({}, t), { account: n }), a = this.acquireTokenNative(s, Ze.acquireTokenSilent_silentFlow).catch(function(g) {
                return G(h, void 0, void 0, function() {
                  var v;
                  return z(this, function(C) {
                    if (g instanceof nn && g.isFatal())
                      return this.logger.verbose("acquireTokenSilent - native platform unavailable, falling back to web flow"), this.nativeExtensionProvider = void 0, v = this.createSilentIframeClient(t.correlationId), [2, v.acquireToken(t)];
                    throw g;
                  });
                });
              }), [3, 3]) : [3, 1];
            case 1:
              return this.logger.verbose("acquireTokenSilent - attempting to acquire token from web flow"), l = this.createSilentCacheClient(t.correlationId), this.performanceClient.setPreQueueTime(F.InitializeSilentRequest, t.correlationId), [4, l.initializeSilentRequest(t, n)];
            case 2:
              u = p.sent(), f = ce(ce({}, t), {
                // set the request's CacheLookupPolicy to Default if it was not optionally passed in
                cacheLookupPolicy: t.cacheLookupPolicy || rr.Default
              }), this.performanceClient.setPreQueueTime(F.AcquireTokenFromCache, u.correlationId), a = this.acquireTokenFromCache(l, u, f).catch(function(g) {
                if (f.cacheLookupPolicy === rr.AccessToken)
                  throw g;
                return ct.blockReloadInHiddenIframes(), h.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_NETWORK_START, se.Silent, u), h.performanceClient.setPreQueueTime(F.AcquireTokenByRefreshToken, u.correlationId), h.acquireTokenByRefreshToken(u, f).catch(function(v) {
                  var C = v instanceof yo, E = v instanceof Gr, _ = v.errorCode === Qo.noTokensFoundError.code, R = v.errorCode === qr.INVALID_GRANT_ERROR;
                  if ((!C || !R || E || f.cacheLookupPolicy === rr.AccessTokenAndRefreshToken || f.cacheLookupPolicy === rr.RefreshToken) && f.cacheLookupPolicy !== rr.Skip && !_)
                    throw v;
                  return h.logger.verbose("Refresh token expired/invalid or CacheLookupPolicy is set to Skip, attempting acquire token by iframe.", t.correlationId), h.performanceClient.setPreQueueTime(F.AcquireTokenBySilentIframe, u.correlationId), h.acquireTokenBySilentIframe(u);
                });
              }), p.label = 3;
            case 3:
              return [2, a.then(function(g) {
                var v;
                return h.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_SUCCESS, se.Silent, g), (v = h.astsAsyncMeasurement) === null || v === void 0 || v.endMeasurement({
                  success: !0,
                  fromCache: g.fromCache,
                  isNativeBroker: g.fromNativeBroker,
                  requestId: g.requestId
                }), g;
              }).catch(function(g) {
                var v;
                throw h.eventHandler.emitEvent(Ee.ACQUIRE_TOKEN_FAILURE, se.Silent, null, g), (v = h.astsAsyncMeasurement) === null || v === void 0 || v.endMeasurement({
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
  }(aA)
);
function on(r) {
  return Object.keys(r);
}
function xl(r) {
  return r && typeof r == "object" && !Array.isArray(r);
}
function Du(r, e) {
  const t = { ...r }, n = e;
  return xl(r) && xl(e) && Object.keys(e).forEach((o) => {
    xl(n[o]) && o in r ? t[o] = Du(t[o], n[o]) : t[o] = n[o];
  }), t;
}
function cA(r) {
  return r.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
function lA(r) {
  var e;
  return typeof r != "string" || !r.includes("var(--mantine-scale)") ? r : (e = r.match(/^calc\((.*?)\)$/)) == null ? void 0 : e[1].split("*")[0].trim();
}
function uA(r) {
  const e = lA(r);
  return typeof e == "number" ? e : typeof e == "string" ? e.includes("calc") || e.includes("var") ? e : e.includes("px") ? Number(e.replace("px", "")) : e.includes("rem") ? Number(e.replace("rem", "")) * 16 : e.includes("em") ? Number(e.replace("em", "")) * 16 : Number(e) : NaN;
}
function Ll(r) {
  return `calc(${r} * var(--mantine-scale))`;
}
function lm(r, { shouldScale: e = !1 } = {}) {
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
const $ = lm("rem", { shouldScale: !0 }), Gp = lm("em");
function Uu(r) {
  return Object.keys(r).reduce((e, t) => (r[t] !== void 0 && (e[t] = r[t]), e), {});
}
function um(r) {
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
function dA(r = null) {
  const e = _o(r);
  return [({ children: o, value: a }) => /* @__PURE__ */ P.createElement(e.Provider, { value: a }, o), () => Vn(e)];
}
function zp(r, e) {
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
function fA(r, e, t) {
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
function hA(r, e, t) {
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
function pA(r, e, t) {
  return fu(r, t) === fu(e, t);
}
function gA({
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
    ).filter((E) => pA(l.currentTarget, E, r)), f = u.findIndex((E) => l.currentTarget === E), h = hA(f, u, n), p = fA(f, u, n), g = a === "rtl" ? p : h, v = a === "rtl" ? h : p;
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
const mA = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function vA(r) {
  return mA[r];
}
const yA = () => {
};
function CA(r, e = { active: !0 }) {
  return typeof r != "function" || !e.active ? e.onKeyDown || yA : (t) => {
    var n;
    t.key === "Escape" && (r(t), (n = e.onTrigger) == null || n.call(e));
  };
}
function Ht(r, e = "size", t = !0) {
  if (r !== void 0)
    return um(r) ? t ? $(r) : r : `var(--${e}-${r})`;
}
function Fu(r) {
  return Ht(r, "mantine-spacing");
}
function di(r) {
  return r === void 0 ? "var(--mantine-radius-default)" : Ht(r, "mantine-radius");
}
function Pr(r) {
  return Ht(r, "mantine-font-size");
}
function wA(r) {
  if (r)
    return Ht(r, "mantine-shadow", !1);
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
function Rn() {
  for (var r, e, t = 0, n = ""; t < arguments.length; )
    (r = arguments[t++]) && (e = dm(r)) && (n && (n += " "), n += e);
  return n;
}
const EA = {};
function bA(r) {
  const e = {};
  return r.forEach((t) => {
    Object.entries(t).forEach(([n, o]) => {
      e[n] ? e[n] = Rn(e[n], o) : e[n] = o;
    });
  }), e;
}
function Ws({ theme: r, classNames: e, props: t, stylesCtx: n }) {
  const a = (Array.isArray(e) ? e : [e]).map(
    (s) => typeof s == "function" ? s(r, t, n) : s || EA
  );
  return bA(a);
}
function Ps({ theme: r, styles: e, props: t, stylesCtx: n }) {
  return (Array.isArray(e) ? e : [e]).reduce((a, s) => typeof s == "function" ? { ...a, ...s(r, t, n) } : { ...a, ...s }, {});
}
function fm() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function lo(r) {
  const e = Ke(r);
  return ye(() => {
    e.current = r;
  }), hs(() => (...t) => {
    var n;
    return (n = e.current) == null ? void 0 : n.call(e, ...t);
  }, []);
}
function Vs(r, e) {
  const t = lo(r), n = Ke(0);
  return ye(() => () => window.clearTimeout(n.current), []), ze(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(t, e);
  }, [t, e]);
}
const Wp = ["mousedown", "touchstart"];
function _A(r, e, t) {
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
    return (e || Wp).forEach((a) => document.addEventListener(a, o)), () => {
      (e || Wp).forEach((a) => document.removeEventListener(a, o));
    };
  }, [n, r, t]), n;
}
function SA(r, e) {
  try {
    return r.addEventListener("change", e), () => r.removeEventListener("change", e);
  } catch {
    return r.addListener(e), () => r.removeListener(e);
  }
}
function TA(r, e) {
  return typeof e == "boolean" ? e : typeof window < "u" && "matchMedia" in window ? window.matchMedia(r).matches : !1;
}
function IA(r, e, { getInitialValueInEffect: t } = {
  getInitialValueInEffect: !0
}) {
  const [n, o] = pe(
    t ? e : TA(r, e)
  ), a = Ke();
  return ye(() => {
    if ("matchMedia" in window)
      return a.current = window.matchMedia(r), o(a.current.matches), SA(a.current, (s) => o(s.matches));
  }, [r]), n;
}
function AA(r, e, t = { leading: !1 }) {
  const [n, o] = pe(r), a = Ke(!1), s = Ke(null), l = Ke(!1), u = () => window.clearTimeout(s.current);
  return ye(() => {
    a.current && (!l.current && t.leading ? (l.current = !0, o(r)) : (u(), s.current = window.setTimeout(() => {
      l.current = !1, o(r);
    }, e)));
  }, [r, t.leading, e]), ye(() => (a.current = !0, u), []), [n, u];
}
const aa = typeof document < "u" ? Iu : ye;
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
function RA({ opened: r, shouldReturnFocus: e = !0 }) {
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
function kA(r, e = "body > :not(script)") {
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
const PA = /input|select|textarea|button|object/, hm = "a, input, select, textarea, button, object, [tabindex]";
function NA(r) {
  return r.style.display === "none";
}
function OA(r) {
  if (r.getAttribute("aria-hidden") || r.getAttribute("hidden") || r.getAttribute("type") === "hidden")
    return !1;
  let t = r;
  for (; t && !(t === document.body || t.nodeType === 11); ) {
    if (NA(t))
      return !1;
    t = t.parentNode;
  }
  return !0;
}
function pm(r) {
  let e = r.getAttribute("tabindex");
  return e === null && (e = void 0), parseInt(e, 10);
}
function hu(r) {
  const e = r.nodeName.toLowerCase(), t = !Number.isNaN(pm(r));
  return /* @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition */ (PA.test(e) && !r.disabled || r instanceof HTMLAnchorElement && r.href || t) && OA(r);
}
function gm(r) {
  const e = pm(r);
  return (Number.isNaN(e) || e >= 0) && hu(r);
}
function MA(r) {
  return Array.from(r.querySelectorAll(hm)).filter(gm);
}
function xA(r, e) {
  const t = MA(r);
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
function LA(r = !0) {
  const e = Ke(), t = Ke(null), n = (a) => {
    let s = a.querySelector("[data-autofocus]");
    if (!s) {
      const l = Array.from(a.querySelectorAll(hm));
      s = l.find(gm) || l.find(hu) || null, !s && hu(a) && (s = a);
    }
    s && s.focus({ preventScroll: !0 });
  }, o = ze(
    (a) => {
      if (r) {
        if (a === null) {
          t.current && (t.current(), t.current = null);
          return;
        }
        t.current = kA(a), e.current !== a && (a ? (setTimeout(() => {
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
      s.key === "Tab" && e.current && xA(e.current, s);
    };
    return document.addEventListener("keydown", a), () => {
      document.removeEventListener("keydown", a), t.current && t.current();
    };
  }, [r]), o;
}
const DA = P["useId".toString()] || (() => {
});
function UA() {
  const r = DA();
  return r ? `mantine-${r.replace(/:/g, "")}` : "";
}
function So(r) {
  const e = UA(), [t, n] = pe(e);
  return aa(() => {
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
function Or(...r) {
  return ze(vm(...r), r);
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
function ym(r, e) {
  return IA("(prefers-reduced-motion: reduce)", r, e);
}
const Cm = _o(null);
function Hu() {
  const r = Vn(Cm);
  if (!r)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return r;
}
function FA() {
  return Hu().cssVariablesResolver;
}
function HA() {
  return Hu().classNamesPrefix;
}
function Bu() {
  return Hu().getStyleNonce;
}
function BA(r) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(r);
}
function KA(r) {
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
function qA(r) {
  const [e, t, n, o] = r.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r: e, g: t, b: n, a: o || 1 };
}
function $A(r) {
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
function wm(r) {
  return BA(r) ? KA(r) : r.startsWith("rgb") ? qA(r) : r.startsWith("hsl") ? $A(r) : {
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
function pu(r, e) {
  return typeof r.primaryShade == "number" ? r.primaryShade : e === "dark" ? r.primaryShade.dark : r.primaryShade.light;
}
function js({
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
  const t = js({ color: r || e.primaryColor, theme: e });
  return t.variable ? `var(${t.variable})` : r;
}
function Vp(r, e) {
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
  const { r: t, g: n, b: o } = wm(r);
  return `rgba(${t}, ${n}, ${o}, ${e})`;
}
const GA = ({
  color: r,
  theme: e,
  variant: t,
  gradient: n
}) => {
  const o = js({ color: r, theme: e });
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
    background: Vp(n, e),
    hover: Vp(n, e),
    color: "var(--mantine-color-white)",
    border: "none"
  } : t === "default" ? {
    background: "var(--mantine-color-default)",
    hover: "var(--mantine-color-default-hover)",
    color: "var(--mantine-color-default-color)",
    border: `${$(1)} solid var(--mantine-color-default-border)`
  } : {};
}, zA = {
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
}, jp = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", Ku = {
  scale: 1,
  fontSmoothing: !0,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: zA,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: GA,
  fontFamily: jp,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: !1,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: jp,
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
function Yp(r) {
  return r === "auto" || r === "dark" || r === "light";
}
function WA({
  key: r = "mantine-color-scheme-value"
} = {}) {
  let e;
  return {
    get: (t) => {
      if (typeof window > "u")
        return t;
      try {
        const n = window.localStorage.getItem(r);
        return Yp(n) ? n : t;
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
        n.storageArea === window.localStorage && n.key === r && Yp(n.newValue) && t(n.newValue);
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
const VA = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", Qp = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function Dl(r) {
  return r < 0 || r > 9 ? !1 : parseInt(r.toString(), 10) === r;
}
function Jp(r) {
  if (!(r.primaryColor in r.colors))
    throw new Error(VA);
  if (typeof r.primaryShade == "object" && (!Dl(r.primaryShade.dark) || !Dl(r.primaryShade.light)))
    throw new Error(Qp);
  if (typeof r.primaryShade == "number" && !Dl(r.primaryShade))
    throw new Error(Qp);
}
function jA(r, e) {
  var n;
  if (!e)
    return Jp(r), r;
  const t = Du(r, e);
  return e.fontFamily && !((n = e.headings) != null && n.fontFamily) && (t.headings.fontFamily = e.fontFamily), Jp(t), t;
}
const qu = _o(null), YA = () => Vn(qu) || Ku;
function jn() {
  const r = Vn(qu);
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
  const n = YA(), o = hs(
    () => jA(t ? n : Ku, r),
    [r, n, t]
  );
  return /* @__PURE__ */ P.createElement(qu.Provider, { value: o }, e);
}
Em.displayName = "@mantine/core/MantineThemeProvider";
function QA() {
  const r = jn(), e = Bu(), t = on(r.breakpoints).reduce((n, o) => {
    const a = uA(r.breakpoints[o]);
    return `${n}@media (max-width: ${Gp(
      a - 0.1
    )}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${Gp(
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
function JA(r, e) {
  const t = Ul(r.variables), n = t ? Fl(e, t) : "", o = Ul(r.dark), a = o ? Fl(`${e}[data-mantine-color-scheme="dark"]`, o) : "", s = Ul(r.light), l = s ? Fl(`${e}[data-mantine-color-scheme="light"]`, s) : "";
  return `${n}${a}${l}`;
}
function Go(r, e, t) {
  on(e).forEach(
    (n) => Object.assign(r, { [`--mantine-${t}-${n}`]: e[n] })
  );
}
const bm = (r) => {
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
function XA({ theme: r, generator: e }) {
  const t = bm(r), n = e == null ? void 0 : e(r);
  return n ? Du(t, n) : t;
}
const Hl = bm(Ku);
function ZA(r) {
  const e = {
    variables: {},
    light: {},
    dark: {}
  };
  return on(r.variables).forEach((t) => {
    Hl.variables[t] !== r.variables[t] && (e.variables[t] = r.variables[t]);
  }), on(r.light).forEach((t) => {
    Hl.light[t] !== r.light[t] && (e.light[t] = r.light[t]);
  }), on(r.dark).forEach((t) => {
    Hl.dark[t] !== r.dark[t] && (e.dark[t] = r.dark[t]);
  }), e;
}
function eR(r) {
  return `
  ${r}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${r}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function _m({ cssVariablesSelector: r }) {
  const e = jn(), t = Bu(), n = FA(), o = XA({ theme: e, generator: n }), a = r === ":root", s = a ? ZA(o) : o, l = JA(s, r);
  return l ? /* @__PURE__ */ P.createElement(
    "style",
    {
      "data-mantine-styles": !0,
      nonce: t == null ? void 0 : t(),
      dangerouslySetInnerHTML: {
        __html: `${l}${a ? "" : eR(r)}`
      }
    }
  ) : null;
}
_m.displayName = "@mantine/CssVariables";
function tR() {
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
function rR({
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
    const h = (g) => {
      a === "auto" && xi(g.matches ? "dark" : "light", t);
    };
    return (p = o.current) == null || p.addEventListener("change", h), () => {
      var g;
      return (g = o.current) == null ? void 0 : g.removeEventListener("change", h);
    };
  }, [a, n]), { colorScheme: l, setColorScheme: u, clearColorScheme: f };
}
function nR({
  respectReducedMotion: r,
  getRootElement: e
}) {
  aa(() => {
    var t;
    r && ((t = e()) == null || t.setAttribute("data-respect-reduced-motion", "true"));
  }, [r]);
}
tR();
function Sm({
  theme: r,
  children: e,
  getStyleNonce: t,
  withCssVariables: n = !0,
  cssVariablesSelector: o = ":root",
  classNamesPrefix: a = "mantine",
  colorSchemeManager: s = WA(),
  defaultColorScheme: l = "light",
  getRootElement: u = () => document.documentElement,
  cssVariablesResolver: f,
  forceColorScheme: h
}) {
  const { colorScheme: p, setColorScheme: g, clearColorScheme: v } = rR({
    defaultColorScheme: l,
    forceColorScheme: h,
    manager: s,
    getRootElement: u
  });
  return nR({
    respectReducedMotion: (r == null ? void 0 : r.respectReducedMotion) || !1,
    getRootElement: u
  }), /* @__PURE__ */ P.createElement(
    Cm.Provider,
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
    /* @__PURE__ */ P.createElement(Em, { theme: r }, n && /* @__PURE__ */ P.createElement(_m, { cssVariablesSelector: o }), /* @__PURE__ */ P.createElement(QA, null), e)
  );
}
Sm.displayName = "@mantine/core/MantineProvider";
function Tm({
  classNames: r,
  styles: e,
  props: t,
  stylesCtx: n
}) {
  const o = jn();
  return {
    resolvedClassNames: Ws({
      theme: o,
      classNames: r,
      props: t,
      stylesCtx: n || void 0
    }),
    resolvedStyles: Ps({
      theme: o,
      styles: e,
      props: t,
      stylesCtx: n || void 0
    })
  };
}
const oR = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function iR({ theme: r, options: e, unstyled: t }) {
  return Rn(
    (e == null ? void 0 : e.focusable) && !t && (r.focusClassName || oR[r.focusRing]),
    (e == null ? void 0 : e.active) && !t && r.activeClassName
  );
}
function aR({
  selector: r,
  stylesCtx: e,
  options: t,
  props: n,
  theme: o
}) {
  return Ws({
    theme: o,
    classNames: t == null ? void 0 : t.classNames,
    props: (t == null ? void 0 : t.props) || n,
    stylesCtx: e
  })[r];
}
function sR({
  selector: r,
  stylesCtx: e,
  theme: t,
  classNames: n,
  props: o
}) {
  return Ws({ theme: t, classNames: n, props: o, stylesCtx: e })[r];
}
function cR({ rootSelector: r, selector: e, className: t }) {
  return r === e ? t : void 0;
}
function lR({ selector: r, classes: e, unstyled: t }) {
  return t ? void 0 : e[r];
}
function uR({
  themeName: r,
  classNamesPrefix: e,
  selector: t
}) {
  return r.map((n) => `${e}-${n}-${t}`);
}
function dR({
  themeName: r,
  theme: e,
  selector: t,
  props: n,
  stylesCtx: o
}) {
  return r.map(
    (a) => {
      var s, l;
      return (l = Ws({
        theme: e,
        classNames: (s = e.components[a]) == null ? void 0 : s.classNames,
        props: n,
        stylesCtx: o
      })) == null ? void 0 : l[t];
    }
  );
}
function fR({
  options: r,
  classes: e,
  selector: t,
  unstyled: n
}) {
  return r != null && r.variant && !n ? e[`${t}--${r.variant}`] : void 0;
}
function hR({
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
    iR({ theme: r, options: e, unstyled: l }),
    dR({ theme: r, themeName: t, selector: n, props: h, stylesCtx: p }),
    fR({ options: e, classes: s, selector: n, unstyled: l }),
    sR({ selector: n, stylesCtx: p, theme: r, classNames: a, props: h }),
    aR({ selector: n, stylesCtx: p, options: e, props: h, theme: r }),
    cR({ rootSelector: f, selector: n, className: u }),
    lR({ selector: n, classes: s, unstyled: l }),
    uR({ themeName: t, classNamesPrefix: o, selector: n }),
    e == null ? void 0 : e.className
  );
}
function pR({
  theme: r,
  themeName: e,
  props: t,
  stylesCtx: n,
  selector: o
}) {
  return e.map(
    (a) => {
      var s;
      return Ps({
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
function gR(r) {
  return r.reduce((e, t) => (t && Object.keys(t).forEach((n) => {
    e[n] = { ...e[n], ...Uu(t[n]) };
  }), e), {});
}
function mR({
  vars: r,
  varsResolver: e,
  theme: t,
  props: n,
  stylesCtx: o,
  selector: a,
  themeName: s
}) {
  var l;
  return (l = gR([
    e == null ? void 0 : e(t, n, o),
    ...s.map((u) => {
      var f, h, p;
      return (p = (h = (f = t.components) == null ? void 0 : f[u]) == null ? void 0 : h.vars) == null ? void 0 : p.call(h, t, n, o);
    }),
    r == null ? void 0 : r(t, n, o)
  ])) == null ? void 0 : l[a];
}
function vR({
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
    ...pR({ theme: r, themeName: e, props: o, stylesCtx: a, selector: t }),
    ...Ps({ theme: r, styles: l, props: o, stylesCtx: a })[t],
    ...Ps({ theme: r, styles: n == null ? void 0 : n.styles, props: (n == null ? void 0 : n.props) || o, stylesCtx: a })[t],
    ...mR({ theme: r, props: o, stylesCtx: a, vars: f, varsResolver: h, selector: t, themeName: e }),
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
  const g = jn(), v = HA(), C = (Array.isArray(r) ? r : [r]).filter((E) => E);
  return (E, _) => ({
    className: hR({
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
    style: vR({
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
  const n = jn(), o = (s = n.components[r]) == null ? void 0 : s.defaultProps, a = typeof o == "function" ? o(n) : o;
  return { ...e, ...a, ...Uu(t) };
}
function Xp(r) {
  return on(r).reduce(
    (e, t) => r[t] !== void 0 ? `${e}${cA(t)}:${r[t]};` : e,
    ""
  ).trim();
}
function yR({ selector: r, styles: e, media: t }) {
  const n = e ? Xp(e) : "", o = Array.isArray(t) ? t.map((a) => `@media${a.query}{${r}{${Xp(a.styles)}}}`) : [];
  return `${n ? `${r}{${n}}` : ""}${o.join("")}`.trim();
}
function CR({ selector: r, styles: e, media: t }) {
  const n = Bu();
  return /* @__PURE__ */ P.createElement(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: n == null ? void 0 : n(),
      dangerouslySetInnerHTML: { __html: yR({ selector: r, styles: e, media: t }) }
    }
  );
}
function Ys(r) {
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
  return { styleProps: Uu({
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
const wR = {
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
function ER(r, e) {
  const t = js({ color: r, theme: e });
  return t.color === "dimmed" ? "var(--mantine-color-dimmed)" : t.color === "bright" ? "var(--mantine-color-bright)" : t.isThemeColor && t.shade === void 0 ? `var(--mantine-color-${t.color}-text)` : t.variable ? `var(${t.variable})` : t.color;
}
function bR(r, e) {
  return typeof r == "string" && r in e.fontSizes ? `var(--mantine-font-size-${r})` : typeof r == "number" || typeof r == "string" ? $(r) : r;
}
function _R(r) {
  return r;
}
function SR(r, e) {
  return typeof r == "string" && r in e.lineHeights ? `var(--mantine-line-height-${r})` : r;
}
function TR(r) {
  return typeof r == "number" ? $(r) : r;
}
function IR(r, e) {
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
  color: ER,
  fontSize: bR,
  spacing: IR,
  identity: _R,
  size: TR,
  lineHeight: SR
};
function Zp(r) {
  return r.replace("(min-width: ", "").replace("em)", "");
}
function AR({
  media: r,
  ...e
}) {
  const n = Object.keys(r).sort((o, a) => Number(Zp(o)) - Number(Zp(a))).map((o) => ({ query: o, styles: r[o] }));
  return { ...e, media: n };
}
function RR(r) {
  if (typeof r != "object" || r === null)
    return !1;
  const e = Object.keys(r);
  return !(e.length === 1 && e[0] === "base");
}
function kR(r) {
  return typeof r == "object" && r !== null ? "base" in r ? r.base : void 0 : r;
}
function PR(r) {
  return typeof r == "object" && r !== null ? on(r).filter((e) => e !== "base") : [];
}
function NR(r, e) {
  return typeof r == "object" && r !== null && e in r ? r[e] : r;
}
function OR({
  styleProps: r,
  data: e,
  theme: t
}) {
  return AR(
    on(r).reduce(
      (n, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom")
          return n;
        const a = e[o], s = Array.isArray(a.property) ? a.property : [a.property], l = kR(r[o]);
        if (!RR(r[o]))
          return s.forEach((f) => {
            n.inlineStyles[f] = Bl[a.type](l, t);
          }), n;
        n.hasResponsiveStyles = !0;
        const u = PR(r[o]);
        return s.forEach((f) => {
          l && (n.styles[f] = Bl[a.type](l, t)), u.forEach((h) => {
            const p = `(min-width: ${t.breakpoints[h]})`;
            n.media[p] = {
              ...n.media[p],
              [f]: Bl[a.type](
                NR(r[o], h),
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
function MR() {
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
function xR(r) {
  return Object.keys(r).reduce((e, t) => {
    const n = r[t];
    return n === void 0 || n === "" || n === !1 || n === null || (e[Am(t)] = r[t]), e;
  }, {});
}
function Rm(r) {
  return r ? typeof r == "string" ? { [Am(r)]: !0 } : Array.isArray(r) ? [...r].reduce(
    (e, t) => ({ ...e, ...Rm(t) }),
    {}
  ) : xR(r) : null;
}
function mu(r, e) {
  return Array.isArray(r) ? [...r].reduce(
    (t, n) => ({ ...t, ...mu(n, e) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function LR({
  theme: r,
  style: e,
  vars: t,
  styleProps: n
}) {
  const o = mu(e, r), a = mu(t, r);
  return { ...o, ...a, ...n };
}
const km = ht(
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
    const C = jn(), E = r || "div", { styleProps: _, rest: R } = Ys(g), I = MR(), S = OR({
      styleProps: _,
      theme: C,
      data: wR
    }), A = {
      ref: v,
      style: LR({
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
      "data-size": um(s) ? void 0 : s || void 0,
      ...Rm(a),
      ...R
    };
    return /* @__PURE__ */ P.createElement(P.Fragment, null, S.hasResponsiveStyles && /* @__PURE__ */ P.createElement(
      CR,
      {
        selector: `.${I}`,
        styles: S.styles,
        media: S.media
      }
    ), typeof p == "function" ? p(A) : /* @__PURE__ */ P.createElement(E, { ...A }));
  }
);
km.displayName = "@mantine/core/Box";
const ke = km;
function Pm(r) {
  return r;
}
function Ue(r) {
  const e = ht(r);
  return e.extend = Pm, e;
}
function sa(r) {
  const e = ht(r);
  return e.extend = Pm, e;
}
const DR = _o({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function $u() {
  return Vn(DR);
}
function UR(r) {
  if (!r || typeof r == "string")
    return 0;
  const e = r / 36;
  return Math.round((4 + 15 * e ** 0.25 + e / 5) * 10);
}
function Kl(r) {
  return r != null && r.current ? r.current.scrollHeight : "auto";
}
const Li = typeof window < "u" && window.requestAnimationFrame;
function FR({
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
    $T(() => u(C));
  }, h = (C) => {
    f((E) => ({ ...E, ...C }));
  };
  function p(C) {
    return {
      transition: `height ${r || UR(C)}ms ${e}`
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
  const g = (C) => {
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
      [E]: vm(o, R),
      onTransitionEnd: g,
      style: { boxSizing: "border-box", ...C, ...l }
    };
  }
  return v;
}
const HR = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: !0
}, Nm = Ue((r, e) => {
  const {
    children: t,
    in: n,
    transitionDuration: o,
    transitionTimingFunction: a,
    style: s,
    onTransitionEnd: l,
    animateOpacity: u,
    ...f
  } = Ce("Collapse", HR, r), h = jn(), p = ym(), v = (h.respectReducedMotion ? p : !1) ? 0 : o, C = FR({
    opened: n,
    transitionDuration: v,
    transitionTimingFunction: a,
    onTransitionEnd: l
  });
  return v === 0 ? n ? /* @__PURE__ */ P.createElement(ke, { ...f }, t) : null : /* @__PURE__ */ P.createElement(ke, { ...C({ style: Im(s, h), ref: e, ...f }) }, /* @__PURE__ */ P.createElement(
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
const [BR, Mr] = ui(
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
const KR = P.forwardRef((r, e) => {
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
}), qR = P.forwardRef(
  (r, e) => {
    const t = Mr(), n = !!(t.scrollbarX && t.scrollbarY);
    return t.type !== "scroll" && n ? /* @__PURE__ */ P.createElement(KR, { ...r, ref: e }) : null;
  }
), $R = {
  scrollHideDelay: 1e3,
  type: "hover"
}, Om = ht((r, e) => {
  const t = Ce("ScrollAreaRoot", $R, r), { type: n, scrollHideDelay: o, scrollbars: a, ...s } = t, [l, u] = pe(null), [f, h] = pe(null), [p, g] = pe(null), [v, C] = pe(null), [E, _] = pe(null), [R, I] = pe(0), [S, A] = pe(0), [O, L] = pe(!1), [q, D] = pe(!1), Q = Or(e, (X) => u(X));
  return /* @__PURE__ */ P.createElement(
    BR,
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
Om.displayName = "@mantine/core/ScrollAreaRoot";
function Mm(r, e) {
  const t = r / e;
  return Number.isNaN(t) ? 0 : t;
}
function Qs(r) {
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
function GR(r, [e, t]) {
  return Math.min(t, Math.max(e, r));
}
function eg(r, e, t = "ltr") {
  const n = Qs(e), o = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, a = e.scrollbar.size - o, s = e.content - e.viewport, l = a - n, u = t === "ltr" ? [0, s] : [s * -1, 0], f = GR(r, u);
  return xm([0, s], [0, l])(f);
}
function zR(r, e, t, n = "ltr") {
  const o = Qs(t), a = o / 2, s = e || a, l = o - s, u = t.scrollbar.paddingStart + s, f = t.scrollbar.size - t.scrollbar.paddingEnd - l, h = t.content - t.viewport, p = n === "ltr" ? [0, h] : [h * -1, 0];
  return xm([u, f], p)(r);
}
function Lm(r, e) {
  return r > 0 && r < e;
}
function Ns(r) {
  return r ? parseInt(r, 10) : 0;
}
function go(r, e, { checkForDefaultPrevented: t = !0 } = {}) {
  return (n) => {
    r == null || r(n), (t === !1 || !n.defaultPrevented) && (e == null || e(n));
  };
}
const [WR, Dm] = ui(
  "ScrollAreaScrollbar was not found in tree"
), Um = ht((r, e) => {
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
  } = r, g = Mr(), [v, C] = P.useState(null), E = Or(e, (D) => C(D)), _ = P.useRef(null), R = P.useRef(""), { viewport: I } = g, S = t.content - t.viewport, A = lo(f), O = lo(l), L = Vs(h, 10), q = (D) => {
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
  }, [I, v, S, A]), ye(O, [t, O]), oi(v, L), oi(g.content, L), /* @__PURE__ */ P.createElement(
    WR,
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
}), VR = ht(
  (r, e) => {
    const { sizes: t, onSizesChange: n, style: o, ...a } = r, s = Mr(), [l, u] = pe(), f = Ke(null), h = Or(e, f, s.onScrollbarXChange);
    return ye(() => {
      f.current && u(getComputedStyle(f.current));
    }, [f]), /* @__PURE__ */ P.createElement(
      Um,
      {
        "data-orientation": "horizontal",
        ...a,
        ref: h,
        sizes: t,
        style: {
          ...o,
          "--sa-thumb-width": `${Qs(t)}px`
        },
        onThumbPointerDown: (p) => r.onThumbPointerDown(p.x),
        onDragScroll: (p) => r.onDragScroll(p.x),
        onWheelScroll: (p, g) => {
          if (s.viewport) {
            const v = s.viewport.scrollLeft + p.deltaX;
            r.onWheelScroll(v), Lm(v, g) && p.preventDefault();
          }
        },
        onResize: () => {
          f.current && s.viewport && l && n({
            content: s.viewport.scrollWidth,
            viewport: s.viewport.offsetWidth,
            scrollbar: {
              size: f.current.clientWidth,
              paddingStart: Ns(l.paddingLeft),
              paddingEnd: Ns(l.paddingRight)
            }
          });
        }
      }
    );
  }
), jR = ht(
  (r, e) => {
    const { sizes: t, onSizesChange: n, style: o, ...a } = r, s = Mr(), [l, u] = P.useState(), f = Ke(null), h = Or(e, f, s.onScrollbarYChange);
    return ye(() => {
      f.current && u(getComputedStyle(f.current));
    }, [f]), /* @__PURE__ */ P.createElement(
      Um,
      {
        ...a,
        "data-orientation": "vertical",
        ref: h,
        sizes: t,
        style: {
          "--sa-thumb-height": `${Qs(t)}px`,
          ...o
        },
        onThumbPointerDown: (p) => r.onThumbPointerDown(p.y),
        onDragScroll: (p) => r.onDragScroll(p.y),
        onWheelScroll: (p, g) => {
          if (s.viewport) {
            const v = s.viewport.scrollTop + p.deltaY;
            r.onWheelScroll(v), Lm(v, g) && p.preventDefault();
          }
        },
        onResize: () => {
          f.current && s.viewport && l && n({
            content: s.viewport.scrollHeight,
            viewport: s.viewport.offsetHeight,
            scrollbar: {
              size: f.current.clientHeight,
              paddingStart: Ns(l.paddingTop),
              paddingEnd: Ns(l.paddingBottom)
            }
          });
        }
      }
    );
  }
), Gu = ht((r, e) => {
  const { orientation: t = "vertical", ...n } = r, { dir: o } = $u(), a = Mr(), s = Ke(null), l = Ke(0), [u, f] = pe({
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
  }, g = (v, C) => zR(v, l.current, u, C);
  return t === "horizontal" ? /* @__PURE__ */ P.createElement(
    VR,
    {
      ...p,
      ref: e,
      onThumbPositionChange: () => {
        if (a.viewport && s.current) {
          const v = a.viewport.scrollLeft, C = eg(v, u, o);
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
  ) : t === "vertical" ? /* @__PURE__ */ P.createElement(
    jR,
    {
      ...p,
      ref: e,
      onThumbPositionChange: () => {
        if (a.viewport && s.current) {
          const v = a.viewport.scrollTop, C = eg(v, u);
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
}), Fm = ht(
  (r, e) => {
    const t = Mr(), { forceMount: n, ...o } = r, [a, s] = pe(!1), l = r.orientation === "horizontal", u = Vs(() => {
      if (t.viewport) {
        const f = t.viewport.offsetWidth < t.viewport.scrollWidth, h = t.viewport.offsetHeight < t.viewport.scrollHeight;
        s(l ? f : h);
      }
    }, 10);
    return oi(t.viewport, u), oi(t.content, u), n || a ? /* @__PURE__ */ P.createElement(
      Gu,
      {
        "data-state": a ? "visible" : "hidden",
        ...o,
        ref: e
      }
    ) : null;
  }
), YR = ht(
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
      Fm,
      {
        "data-state": a ? "visible" : "hidden",
        ...n,
        ref: e
      }
    ) : null;
  }
), QR = ht(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = Mr(), a = r.orientation === "horizontal", [s, l] = pe("hidden"), u = Vs(() => l("idle"), 100);
    return ye(() => {
      if (s === "idle") {
        const f = window.setTimeout(() => l("hidden"), o.scrollHideDelay);
        return () => window.clearTimeout(f);
      }
    }, [s, o.scrollHideDelay]), ye(() => {
      const { viewport: f } = o, h = a ? "scrollLeft" : "scrollTop";
      if (f) {
        let p = f[h];
        const g = () => {
          const v = f[h];
          p !== v && (l("scrolling"), u()), p = v;
        };
        return f.addEventListener("scroll", g), () => f.removeEventListener("scroll", g);
      }
    }, [o.viewport, a, u]), t || s !== "hidden" ? /* @__PURE__ */ P.createElement(
      Gu,
      {
        "data-state": s === "hidden" ? "hidden" : "visible",
        ...n,
        ref: e,
        onPointerEnter: go(r.onPointerEnter, () => l("interacting")),
        onPointerLeave: go(r.onPointerLeave, () => l("idle"))
      }
    ) : null;
  }
), tg = P.forwardRef(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = Mr(), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, l = r.orientation === "horizontal";
    return P.useEffect(() => (l ? a(!0) : s(!0), () => {
      l ? a(!1) : s(!1);
    }), [l, a, s]), o.type === "hover" ? /* @__PURE__ */ P.createElement(YR, { ...n, ref: e, forceMount: t }) : o.type === "scroll" ? /* @__PURE__ */ P.createElement(QR, { ...n, ref: e, forceMount: t }) : o.type === "auto" ? /* @__PURE__ */ P.createElement(Fm, { ...n, ref: e, forceMount: t }) : o.type === "always" ? /* @__PURE__ */ P.createElement(Gu, { ...n, ref: e }) : null;
  }
);
function JR(r, e = () => {
}) {
  let t = { left: r.scrollLeft, top: r.scrollTop }, n = 0;
  return function o() {
    const a = { left: r.scrollLeft, top: r.scrollTop }, s = t.left !== a.left, l = t.top !== a.top;
    (s || l) && e(), t = a, n = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(n);
}
const XR = ht((r, e) => {
  const { style: t, ...n } = r, o = Mr(), a = Dm(), { onThumbPositionChange: s } = a, l = Or(e, (h) => a.onThumbChange(h)), u = Ke(), f = Vs(() => {
    u.current && (u.current(), u.current = void 0);
  }, 100);
  return ye(() => {
    const { viewport: h } = o;
    if (h) {
      const p = () => {
        if (f(), !u.current) {
          const g = JR(h, s);
          u.current = g, s();
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
        const g = h.target.getBoundingClientRect(), v = h.clientX - g.left, C = h.clientY - g.top;
        a.onThumbPointerDown({ x: v, y: C });
      }),
      onPointerUp: go(r.onPointerUp, a.onThumbPointerUp)
    }
  );
}), rg = P.forwardRef(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = Dm();
    return t || o.hasThumb ? /* @__PURE__ */ P.createElement(XR, { ref: e, ...n }) : null;
  }
), Hm = ht(
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
Hm.displayName = "@mantine/core/ScrollAreaViewport";
var zu = { root: "m-d57069b5", viewport: "m-c0783ff9", viewportInner: "m-f8f631dd", scrollbar: "m-c44ba933", thumb: "m-d8b5e363", corner: "m-21657268" };
const Bm = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
}, ZR = (r, { scrollbarSize: e }) => ({
  root: {
    "--scrollarea-scrollbar-size": $(e)
  }
}), ca = Ue((r, e) => {
  const t = Ce("ScrollArea", Bm, r), {
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
    scrollbars: R,
    ...I
  } = t, [S, A] = pe(!1), O = lt({
    name: "ScrollArea",
    props: t,
    classes: zu,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: f,
    varsResolver: ZR
  });
  return /* @__PURE__ */ P.createElement(
    Om,
    {
      type: h === "never" ? "always" : h,
      scrollHideDelay: p,
      ref: e,
      scrollbars: R,
      ...O("root"),
      ...I
    },
    /* @__PURE__ */ P.createElement(
      Hm,
      {
        ...g,
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
      tg,
      {
        ...O("scrollbar"),
        orientation: "horizontal",
        "data-hidden": h === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => A(!0),
        onMouseLeave: () => A(!1)
      },
      /* @__PURE__ */ P.createElement(rg, { ...O("thumb") })
    ),
    (R === "xy" || R === "y") && /* @__PURE__ */ P.createElement(
      tg,
      {
        ...O("scrollbar"),
        orientation: "vertical",
        "data-hidden": h === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => A(!0),
        onMouseLeave: () => A(!1)
      },
      /* @__PURE__ */ P.createElement(rg, { ...O("thumb") })
    ),
    /* @__PURE__ */ P.createElement(
      qR,
      {
        ...O("corner"),
        "data-hovered": S || void 0,
        "data-hidden": h === "never" || void 0
      }
    )
  );
});
ca.displayName = "@mantine/core/ScrollArea";
const Wu = Ue((r, e) => {
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
    vars: R,
    ...I
  } = Ce("ScrollAreaAutosize", Bm, r);
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
      unstyled: g,
      variant: v,
      viewportProps: C,
      vars: R,
      scrollbars: E
    },
    t
  )));
});
ca.classes = zu;
Wu.displayName = "@mantine/core/ScrollAreaAutosize";
Wu.classes = zu;
ca.Autosize = Wu;
var Km = { root: "m-87cf2631" };
const ek = {
  __staticSelector: "UnstyledButton"
}, la = sa(
  (r, e) => {
    const t = Ce("UnstyledButton", ek, r), {
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
      classes: Km,
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
la.classes = Km;
la.displayName = "@mantine/core/UnstyledButton";
const Vr = Math.min, Ut = Math.max, Os = Math.round, ss = Math.floor, Gn = (r) => ({
  x: r,
  y: r
}), tk = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, rk = {
  start: "end",
  end: "start"
};
function vu(r, e, t) {
  return Ut(r, Vr(e, t));
}
function Tn(r, e) {
  return typeof r == "function" ? r(e) : r;
}
function jr(r) {
  return r.split("-")[0];
}
function fi(r) {
  return r.split("-")[1];
}
function Vu(r) {
  return r === "x" ? "y" : "x";
}
function ju(r) {
  return r === "y" ? "height" : "width";
}
function To(r) {
  return ["top", "bottom"].includes(jr(r)) ? "y" : "x";
}
function Yu(r) {
  return Vu(To(r));
}
function nk(r, e, t) {
  t === void 0 && (t = !1);
  const n = fi(r), o = Yu(r), a = ju(o);
  let s = o === "x" ? n === (t ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[a] > e.floating[a] && (s = Ms(s)), [s, Ms(s)];
}
function ok(r) {
  const e = Ms(r);
  return [yu(r), e, yu(e)];
}
function yu(r) {
  return r.replace(/start|end/g, (e) => rk[e]);
}
function ik(r, e, t) {
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
function ak(r, e, t, n) {
  const o = fi(r);
  let a = ik(jr(r), t === "start", n);
  return o && (a = a.map((s) => s + "-" + o), e && (a = a.concat(a.map(yu)))), a;
}
function Ms(r) {
  return r.replace(/left|right|bottom|top/g, (e) => tk[e]);
}
function sk(r) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...r
  };
}
function Qu(r) {
  return typeof r != "number" ? sk(r) : {
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
function ng(r, e, t) {
  let {
    reference: n,
    floating: o
  } = r;
  const a = To(e), s = Yu(e), l = ju(s), u = jr(e), f = a === "y", h = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, g = n[l] / 2 - o[l] / 2;
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
      v[s] -= g * (t && f ? -1 : 1);
      break;
    case "end":
      v[s] += g * (t && f ? -1 : 1);
      break;
  }
  return v;
}
const ck = async (r, e, t) => {
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
  } = ng(f, n, u), g = n, v = {}, C = 0;
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
    if (h = I ?? h, p = S ?? p, v = {
      ...v,
      [_]: {
        ...v[_],
        ...A
      }
    }, O && C <= 50) {
      C++, typeof O == "object" && (O.placement && (g = O.placement), O.rects && (f = O.rects === !0 ? await s.getElementRects({
        reference: r,
        floating: e,
        strategy: o
      }) : O.rects), {
        x: h,
        y: p
      } = ng(f, g, u)), E = -1;
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
async function Ju(r, e) {
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
  } = Tn(e, r), C = Qu(v), _ = l[g ? p === "floating" ? "reference" : "floating" : p], R = ii(await a.getClippingRect({
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
const og = (r) => ({
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
    const p = Qu(h), g = {
      x: t,
      y: n
    }, v = Yu(o), C = ju(v), E = await s.getDimensions(f), _ = v === "y", R = _ ? "top" : "left", I = _ ? "bottom" : "right", S = _ ? "clientHeight" : "clientWidth", A = a.reference[C] + a.reference[v] - g[v] - a.floating[C], O = g[v] - a.reference[v], L = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
    let q = L ? L[S] : 0;
    (!q || !await (s.isElement == null ? void 0 : s.isElement(L))) && (q = l.floating[S] || a.floating[C]);
    const D = A / 2 - O / 2, Q = q / 2 - E[C] / 2 - 1, X = Vr(p[R], Q), le = Vr(p[I], Q), ne = X, fe = q - E[C] - le, oe = q / 2 - E[C] / 2 + D, we = vu(ne, oe, fe), Y = !u.arrow && fi(o) != null && oe != we && a.reference[C] / 2 - (oe < ne ? X : le) - E[C] / 2 < 0, ie = Y ? oe < ne ? oe - ne : oe - fe : 0;
    return {
      [v]: g[v] + ie,
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
}), lk = function(r) {
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
      } = Tn(r, e);
      if ((t = a.arrow) != null && t.alignmentOffset)
        return {};
      const R = jr(o), I = jr(l) === l, S = await (u.isRTL == null ? void 0 : u.isRTL(f.floating)), A = g || (I || !E ? [Ms(l)] : ok(l));
      !g && C !== "none" && A.push(...ak(l, E, C, S));
      const O = [l, ...A], L = await Ju(e, _), q = [];
      let D = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (h && q.push(L[R]), p) {
        const ne = nk(o, s, S);
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
function qm(r) {
  const e = Vr(...r.map((a) => a.left)), t = Vr(...r.map((a) => a.top)), n = Ut(...r.map((a) => a.right)), o = Ut(...r.map((a) => a.bottom));
  return {
    x: e,
    y: t,
    width: n - e,
    height: o - t
  };
}
function uk(r) {
  const e = r.slice().sort((o, a) => o.y - a.y), t = [];
  let n = null;
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    !n || a.y - n.y > n.height / 2 ? t.push([a]) : t[t.length - 1].push(a), n = a;
  }
  return t.map((o) => ii(qm(o)));
}
const dk = function(r) {
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
      } = Tn(r, e), h = Array.from(await (a.getClientRects == null ? void 0 : a.getClientRects(n.reference)) || []), p = uk(h), g = ii(qm(h)), v = Qu(l);
      function C() {
        if (p.length === 2 && p[0].left > p[1].right && u != null && f != null)
          return p.find((_) => u > _.left - v.left && u < _.right + v.right && f > _.top - v.top && f < _.bottom + v.bottom) || g;
        if (p.length >= 2) {
          if (To(t) === "y") {
            const X = p[0], le = p[p.length - 1], ne = jr(t) === "top", fe = X.top, oe = le.bottom, we = ne ? X.left : le.left, Y = ne ? X.right : le.right, ie = Y - we, te = oe - fe;
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
          const _ = jr(t) === "left", R = Ut(...p.map((X) => X.right)), I = Vr(...p.map((X) => X.left)), S = p.filter((X) => _ ? X.left === I : X.right === R), A = S[0].top, O = S[S.length - 1].bottom, L = I, q = R, D = q - L, Q = O - A;
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
async function fk(r, e) {
  const {
    placement: t,
    platform: n,
    elements: o
  } = r, a = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), s = jr(t), l = fi(t), u = To(t) === "y", f = ["left", "top"].includes(s) ? -1 : 1, h = a && u ? -1 : 1, p = Tn(e, r);
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
const hk = function(r) {
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
      } = e, u = await fk(e, r);
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
}, pk = function(r) {
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
      }, h = await Ju(e, u), p = To(jr(o)), g = Vu(p);
      let v = f[g], C = f[p];
      if (a) {
        const _ = g === "y" ? "top" : "left", R = g === "y" ? "bottom" : "right", I = v + h[_], S = v - h[R];
        v = vu(I, v, S);
      }
      if (s) {
        const _ = p === "y" ? "top" : "left", R = p === "y" ? "bottom" : "right", I = C + h[_], S = C - h[R];
        C = vu(I, C, S);
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
}, gk = function(r) {
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
      }, p = To(o), g = Vu(p);
      let v = h[g], C = h[p];
      const E = Tn(l, e), _ = typeof E == "number" ? {
        mainAxis: E,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...E
      };
      if (u) {
        const S = g === "y" ? "height" : "width", A = a.reference[g] - a.floating[S] + _.mainAxis, O = a.reference[g] + a.reference[S] - _.mainAxis;
        v < A ? v = A : v > O && (v = O);
      }
      if (f) {
        var R, I;
        const S = g === "y" ? "width" : "height", A = ["top", "left"].includes(jr(o)), O = a.reference[p] - a.floating[S] + (A && ((R = s.offset) == null ? void 0 : R[p]) || 0) + (A ? 0 : _.crossAxis), L = a.reference[p] + a.reference[S] + (A ? 0 : ((I = s.offset) == null ? void 0 : I[p]) || 0) - (A ? _.crossAxis : 0);
        C < O ? C = O : C > L && (C = L);
      }
      return {
        [g]: v,
        [p]: C
      };
    }
  };
}, mk = function(r) {
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
      } = Tn(r, e), u = await Ju(e, l), f = jr(t), h = fi(t), p = To(t) === "y", {
        width: g,
        height: v
      } = n.floating;
      let C, E;
      f === "top" || f === "bottom" ? (C = f, E = h === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (E = f, C = h === "end" ? "top" : "bottom");
      const _ = v - u[C], R = g - u[E], I = !e.middlewareData.shift;
      let S = _, A = R;
      if (p) {
        const L = g - u.left - u.right;
        A = h || I ? Vr(R, L) : L;
      } else {
        const L = v - u.top - u.bottom;
        S = h || I ? Vr(_, L) : L;
      }
      if (I && !h) {
        const L = Ut(u.left, 0), q = Ut(u.right, 0), D = Ut(u.top, 0), Q = Ut(u.bottom, 0);
        p ? A = g - 2 * (L !== 0 || q !== 0 ? L + q : Ut(u.left, u.right)) : S = v - 2 * (D !== 0 || Q !== 0 ? D + Q : Ut(u.top, u.bottom));
      }
      await s({
        ...e,
        availableWidth: A,
        availableHeight: S
      });
      const O = await o.getDimensions(a.floating);
      return g !== O.width || v !== O.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function zn(r) {
  return $m(r) ? (r.nodeName || "").toLowerCase() : "#document";
}
function mr(r) {
  var e;
  return (r == null || (e = r.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function kn(r) {
  var e;
  return (e = ($m(r) ? r.ownerDocument : r.document) || window.document) == null ? void 0 : e.documentElement;
}
function $m(r) {
  return r instanceof Node || r instanceof mr(r).Node;
}
function In(r) {
  return r instanceof Element || r instanceof mr(r).Element;
}
function sn(r) {
  return r instanceof HTMLElement || r instanceof mr(r).HTMLElement;
}
function ig(r) {
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
function vk(r) {
  return ["table", "td", "th"].includes(zn(r));
}
function Xu(r) {
  const e = Zu(), t = Nr(r);
  return t.transform !== "none" || t.perspective !== "none" || (t.containerType ? t.containerType !== "normal" : !1) || !e && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !e && (t.filter ? t.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (t.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (t.contain || "").includes(n));
}
function yk(r) {
  let e = ai(r);
  for (; sn(e) && !Js(e); ) {
    if (Xu(e))
      return e;
    e = ai(e);
  }
  return null;
}
function Zu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Js(r) {
  return ["html", "body", "#document"].includes(zn(r));
}
function Nr(r) {
  return mr(r).getComputedStyle(r);
}
function Xs(r) {
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
    ig(r) && r.host || // Fallback.
    kn(r)
  );
  return ig(e) ? e.host : e;
}
function Gm(r) {
  const e = ai(r);
  return Js(e) ? r.ownerDocument ? r.ownerDocument.body : r.body : sn(e) && ua(e) ? e : Gm(e);
}
function Xi(r, e, t) {
  var n;
  e === void 0 && (e = []), t === void 0 && (t = !0);
  const o = Gm(r), a = o === ((n = r.ownerDocument) == null ? void 0 : n.body), s = mr(o);
  return a ? e.concat(s, s.visualViewport || [], ua(o) ? o : [], s.frameElement && t ? Xi(s.frameElement) : []) : e.concat(o, Xi(o, [], t));
}
function zm(r) {
  const e = Nr(r);
  let t = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const o = sn(r), a = o ? r.offsetWidth : t, s = o ? r.offsetHeight : n, l = Os(t) !== a || Os(n) !== s;
  return l && (t = a, n = s), {
    width: t,
    height: n,
    $: l
  };
}
function ed(r) {
  return In(r) ? r : r.contextElement;
}
function ti(r) {
  const e = ed(r);
  if (!sn(e))
    return Gn(1);
  const t = e.getBoundingClientRect(), {
    width: n,
    height: o,
    $: a
  } = zm(e);
  let s = (a ? Os(t.width) : t.width) / n, l = (a ? Os(t.height) : t.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const Ck = /* @__PURE__ */ Gn(0);
function Wm(r) {
  const e = mr(r);
  return !Zu() || !e.visualViewport ? Ck : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function wk(r, e, t) {
  return e === void 0 && (e = !1), !t || e && t !== mr(r) ? !1 : e;
}
function Eo(r, e, t, n) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const o = r.getBoundingClientRect(), a = ed(r);
  let s = Gn(1);
  e && (n ? In(n) && (s = ti(n)) : s = ti(r));
  const l = wk(a, t, n) ? Wm(a) : Gn(0);
  let u = (o.left + l.x) / s.x, f = (o.top + l.y) / s.y, h = o.width / s.x, p = o.height / s.y;
  if (a) {
    const g = mr(a), v = n && In(n) ? mr(n) : n;
    let C = g.frameElement;
    for (; C && n && v !== g; ) {
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
function Ek(r) {
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
  }, l = Gn(1);
  const u = Gn(0);
  if ((o || !o && n !== "fixed") && ((zn(t) !== "body" || ua(a)) && (s = Xs(t)), sn(t))) {
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
function bk(r) {
  return Array.from(r.getClientRects());
}
function Vm(r) {
  return Eo(kn(r)).left + Xs(r).scrollLeft;
}
function _k(r) {
  const e = kn(r), t = Xs(r), n = r.ownerDocument.body, o = Ut(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), a = Ut(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -t.scrollLeft + Vm(r);
  const l = -t.scrollTop;
  return Nr(n).direction === "rtl" && (s += Ut(e.clientWidth, n.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: l
  };
}
function Sk(r, e) {
  const t = mr(r), n = kn(r), o = t.visualViewport;
  let a = n.clientWidth, s = n.clientHeight, l = 0, u = 0;
  if (o) {
    a = o.width, s = o.height;
    const f = Zu();
    (!f || f && e === "fixed") && (l = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: l,
    y: u
  };
}
function Tk(r, e) {
  const t = Eo(r, !0, e === "fixed"), n = t.top + r.clientTop, o = t.left + r.clientLeft, a = sn(r) ? ti(r) : Gn(1), s = r.clientWidth * a.x, l = r.clientHeight * a.y, u = o * a.x, f = n * a.y;
  return {
    width: s,
    height: l,
    x: u,
    y: f
  };
}
function ag(r, e, t) {
  let n;
  if (e === "viewport")
    n = Sk(r, t);
  else if (e === "document")
    n = _k(kn(r));
  else if (In(e))
    n = Tk(e, t);
  else {
    const o = Wm(r);
    n = {
      ...e,
      x: e.x - o.x,
      y: e.y - o.y
    };
  }
  return ii(n);
}
function jm(r, e) {
  const t = ai(r);
  return t === e || !In(t) || Js(t) ? !1 : Nr(t).position === "fixed" || jm(t, e);
}
function Ik(r, e) {
  const t = e.get(r);
  if (t)
    return t;
  let n = Xi(r, [], !1).filter((l) => In(l) && zn(l) !== "body"), o = null;
  const a = Nr(r).position === "fixed";
  let s = a ? ai(r) : r;
  for (; In(s) && !Js(s); ) {
    const l = Nr(s), u = Xu(s);
    !u && l.position === "fixed" && (o = null), (a ? !u && !o : !u && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ua(s) && !u && jm(r, s)) ? n = n.filter((h) => h !== s) : o = l, s = ai(s);
  }
  return e.set(r, n), n;
}
function Ak(r) {
  let {
    element: e,
    boundary: t,
    rootBoundary: n,
    strategy: o
  } = r;
  const s = [...t === "clippingAncestors" ? Ik(e, this._c) : [].concat(t), n], l = s[0], u = s.reduce((f, h) => {
    const p = ag(e, h, o);
    return f.top = Ut(p.top, f.top), f.right = Vr(p.right, f.right), f.bottom = Vr(p.bottom, f.bottom), f.left = Ut(p.left, f.left), f;
  }, ag(e, l, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Rk(r) {
  return zm(r);
}
function kk(r, e, t) {
  const n = sn(e), o = kn(e), a = t === "fixed", s = Eo(r, !0, a, e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Gn(0);
  if (n || !n && !a)
    if ((zn(e) !== "body" || ua(o)) && (l = Xs(e)), n) {
      const f = Eo(e, !0, a, e);
      u.x = f.x + e.clientLeft, u.y = f.y + e.clientTop;
    } else
      o && (u.x = Vm(o));
  return {
    x: s.left + l.scrollLeft - u.x,
    y: s.top + l.scrollTop - u.y,
    width: s.width,
    height: s.height
  };
}
function sg(r, e) {
  return !sn(r) || Nr(r).position === "fixed" ? null : e ? e(r) : r.offsetParent;
}
function Ym(r, e) {
  const t = mr(r);
  if (!sn(r))
    return t;
  let n = sg(r, e);
  for (; n && vk(n) && Nr(n).position === "static"; )
    n = sg(n, e);
  return n && (zn(n) === "html" || zn(n) === "body" && Nr(n).position === "static" && !Xu(n)) ? t : n || yk(r) || t;
}
const Pk = async function(r) {
  let {
    reference: e,
    floating: t,
    strategy: n
  } = r;
  const o = this.getOffsetParent || Ym, a = this.getDimensions;
  return {
    reference: kk(e, await o(t), n),
    floating: {
      x: 0,
      y: 0,
      ...await a(t)
    }
  };
};
function Nk(r) {
  return Nr(r).direction === "rtl";
}
const Ok = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ek,
  getDocumentElement: kn,
  getClippingRect: Ak,
  getOffsetParent: Ym,
  getElementRects: Pk,
  getClientRects: bk,
  getDimensions: Rk,
  getScale: ti,
  isElement: In,
  isRTL: Nk
};
function Mk(r, e) {
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
      height: g
    } = r.getBoundingClientRect();
    if (l || e(), !p || !g)
      return;
    const v = ss(h), C = ss(o.clientWidth - (f + p)), E = ss(o.clientHeight - (h + g)), _ = ss(f), I = {
      rootMargin: -v + "px " + -C + "px " + -E + "px " + -_ + "px",
      threshold: Ut(0, Vr(1, u)) || 1
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
function xk(r, e, t, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, f = ed(r), h = o || a ? [...f ? Xi(f) : [], ...Xi(e)] : [];
  h.forEach((R) => {
    o && R.addEventListener("scroll", t, {
      passive: !0
    }), a && R.addEventListener("resize", t);
  });
  const p = f && l ? Mk(f, t) : null;
  let g = -1, v = null;
  s && (v = new ResizeObserver((R) => {
    let [I] = R;
    I && I.target === f && v && (v.unobserve(e), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
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
const Lk = (r, e, t) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: Ok,
    ...t
  }, a = {
    ...o.platform,
    _c: n
  };
  return ck(r, e, {
    ...o,
    platform: a
  });
}, Dk = (r) => {
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
      return n && e(n) ? n.current != null ? og({
        element: n.current,
        padding: o
      }).fn(t) : {} : n ? og({
        element: n,
        padding: o
      }).fn(t) : {};
    }
  };
};
var fs = typeof document < "u" ? Iu : ye;
function xs(r, e) {
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
        if (!xs(r[n], e[n]))
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
      if (!(a === "_owner" && r.$$typeof) && !xs(r[a], e[a]))
        return !1;
    }
    return !0;
  }
  return r !== r && e !== e;
}
function Qm(r) {
  return typeof window > "u" ? 1 : (r.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function cg(r, e) {
  const t = Qm(r);
  return Math.round(e * t) / t;
}
function lg(r) {
  const e = Le.useRef(r);
  return fs(() => {
    e.current = r;
  }), e;
}
function Uk(r) {
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
  xs(g, n) || v(n);
  const [C, E] = Le.useState(null), [_, R] = Le.useState(null), I = Le.useCallback((Y) => {
    Y != L.current && (L.current = Y, E(Y));
  }, [E]), S = Le.useCallback((Y) => {
    Y !== q.current && (q.current = Y, R(Y));
  }, [R]), A = a || C, O = s || _, L = Le.useRef(null), q = Le.useRef(null), D = Le.useRef(h), Q = lg(u), X = lg(o), le = Le.useCallback(() => {
    if (!L.current || !q.current)
      return;
    const Y = {
      placement: e,
      strategy: t,
      middleware: g
    };
    X.current && (Y.platform = X.current), Lk(L.current, q.current, Y).then((ie) => {
      const te = {
        ...ie,
        isPositioned: !0
      };
      ne.current && !xs(D.current, te) && (D.current = te, KT.flushSync(() => {
        p(te);
      }));
    });
  }, [g, e, t, X]);
  fs(() => {
    f === !1 && D.current.isPositioned && (D.current.isPositioned = !1, p((Y) => ({
      ...Y,
      isPositioned: !1
    })));
  }, [f]);
  const ne = Le.useRef(!1);
  fs(() => (ne.current = !0, () => {
    ne.current = !1;
  }), []), fs(() => {
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
    const ie = cg(oe.floating, h.x), te = cg(oe.floating, h.y);
    return l ? {
      ...Y,
      transform: "translate(" + ie + "px, " + te + "px)",
      ...Qm(oe.floating) >= 1.5 && {
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
var Jm = typeof document < "u" ? Iu : ye;
let ql = !1, Fk = 0;
const ug = () => "floating-ui-" + Fk++;
function Hk() {
  const [r, e] = Le.useState(() => ql ? ug() : void 0);
  return Jm(() => {
    r == null && e(ug());
  }, []), Le.useEffect(() => {
    ql || (ql = !0);
  }, []), r;
}
const Bk = Le[/* @__PURE__ */ "useId".toString()], Kk = Bk || Hk;
function qk() {
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
const $k = /* @__PURE__ */ Le.createContext(null), Gk = () => Le.useContext($k);
function zk(r) {
  return (r == null ? void 0 : r.ownerDocument) || document;
}
function Wk(r) {
  return zk(r).defaultView || window;
}
function cs(r) {
  return r ? r instanceof Element || r instanceof Wk(r).Element : !1;
}
const Vk = Le[/* @__PURE__ */ "useInsertionEffect".toString()], jk = Vk || ((r) => r());
function Yk(r) {
  const e = Le.useRef(() => {
  });
  return jk(() => {
    e.current = r;
  }), Le.useCallback(function() {
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return e.current == null ? void 0 : e.current(...n);
  }, []);
}
function Qk(r) {
  var e;
  r === void 0 && (r = {});
  const {
    open: t = !1,
    onOpenChange: n,
    nodeId: o
  } = r, [a, s] = Le.useState(null), l = ((e = r.elements) == null ? void 0 : e.reference) || a, u = Uk(r), f = Gk(), h = Yk((A, O) => {
    A && (g.current.openEvent = O), n == null || n(A, O);
  }), p = Le.useRef(null), g = Le.useRef({}), v = Le.useState(() => qk())[0], C = Kk(), E = Le.useCallback((A) => {
    const O = cs(A) ? {
      getBoundingClientRect: () => A.getBoundingClientRect(),
      contextElement: A
    } : A;
    u.refs.setReference(O);
  }, [u.refs]), _ = Le.useCallback((A) => {
    (cs(A) || A === null) && (p.current = A, s(A)), (cs(u.refs.reference.current) || u.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    A !== null && !cs(A)) && u.refs.setReference(A);
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
    dataRef: g,
    nodeId: o,
    floatingId: C,
    events: v,
    open: t,
    onOpenChange: h
  }), [u, o, C, v, t, h, R, I]);
  return Jm(() => {
    const A = f == null ? void 0 : f.nodesRef.current.find((O) => O.id === o);
    A && (A.context = S);
  }), Le.useMemo(() => ({
    ...u,
    context: S,
    refs: R,
    elements: I
  }), [u, R, I, S]);
}
function Jk(r, e) {
  if (r === "rtl" && (e.includes("right") || e.includes("left"))) {
    const [t, n] = e.split("-"), o = t === "right" ? "left" : "right";
    return n === void 0 ? o : `${o}-${n}`;
  }
  return e;
}
function dg(r, e, t, n) {
  return r === "center" || n === "center" ? { top: e } : r === "end" ? { bottom: t } : r === "start" ? { top: t } : {};
}
function fg(r, e, t, n, o) {
  return r === "center" || n === "center" ? { left: e } : r === "end" ? { [o === "ltr" ? "right" : "left"]: t } : r === "start" ? { [o === "ltr" ? "left" : "right"]: t } : {};
}
const Xk = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function Zk({
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
    [Xk[u]]: $(n)
  }, p = $(-e / 2);
  return u === "left" ? {
    ...h,
    ...dg(f, s, t, o),
    right: p,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  } : u === "right" ? {
    ...h,
    ...dg(f, s, t, o),
    left: p,
    borderRightColor: "transparent",
    borderTopColor: "transparent"
  } : u === "top" ? {
    ...h,
    ...fg(f, a, t, o, l),
    bottom: p,
    borderTopColor: "transparent",
    borderLeftColor: "transparent"
  } : u === "bottom" ? {
    ...h,
    ...fg(f, a, t, o, l),
    top: p,
    borderBottomColor: "transparent",
    borderRightColor: "transparent"
  } : {};
}
const Xm = ht(
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
    const { dir: p } = $u();
    return a ? /* @__PURE__ */ P.createElement(
      "div",
      {
        ...f,
        ref: h,
        style: {
          ...u,
          ...Zk({
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
const [eP, Zm] = ui(
  "Popover component was not found in the tree"
);
function ev({
  children: r,
  active: e = !0,
  refProp: t = "ref"
}) {
  const n = LA(e), o = Or(n, r == null ? void 0 : r.ref);
  return ia(r) ? qs(r, { [t]: o }) : r;
}
ev.displayName = "@mantine/core/FocusTrap";
function tP(r) {
  const e = document.createElement("div");
  return e.setAttribute("data-portal", "true"), typeof r.className == "string" && e.classList.add(...r.className.split(" ").filter(Boolean)), typeof r.style == "object" && Object.assign(e.style, r.style), typeof r.id == "string" && e.setAttribute("id", r.id), e;
}
const rP = {}, tv = ht((r, e) => {
  const { children: t, target: n, ...o } = Ce("Portal", rP, r), [a, s] = pe(!1), l = Ke(null);
  return aa(() => (s(!0), l.current = n ? typeof n == "string" ? document.querySelector(n) : n : tP(o), mm(e, l.current), !n && l.current && document.body.appendChild(l.current), () => {
    !n && l.current && document.body.removeChild(l.current);
  }), [n]), !a || !l.current ? null : GT(/* @__PURE__ */ P.createElement(P.Fragment, null, t), l.current);
});
tv.displayName = "@mantine/core/Portal";
function rv({ withinPortal: r = !0, children: e, ...t }) {
  return r ? /* @__PURE__ */ P.createElement(tv, { ...t }, e) : /* @__PURE__ */ P.createElement(P.Fragment, null, e);
}
rv.displayName = "@mantine/core/OptionalPortal";
const Di = (r) => ({
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
}, hg = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function nP({
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
    ...ls[r][hg[e]]
  } : {} : {
    transitionProperty: r.transitionProperty,
    ...o,
    ...r.common,
    ...r[hg[e]]
  };
}
function oP({
  duration: r,
  exitDuration: e,
  timingFunction: t,
  mounted: n,
  onEnter: o,
  onExit: a,
  onEntered: s,
  onExited: l
}) {
  const u = jn(), f = ym(), h = u.respectReducedMotion ? f : !1, [p, g] = pe(h ? 0 : r), [v, C] = pe(n ? "entered" : "exited"), E = Ke(-1), _ = (R) => {
    const I = R ? o : a, S = R ? s : l;
    C(R ? "pre-entering" : "pre-exiting"), window.clearTimeout(E.current);
    const A = h ? 0 : R ? r : e;
    if (g(A), A === 0)
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
  const { transitionDuration: p, transitionStatus: g, transitionTimingFunction: v } = oP({
    mounted: o,
    exitDuration: n,
    duration: t,
    timingFunction: s,
    onExit: l,
    onEntered: u,
    onEnter: f,
    onExited: h
  });
  return p === 0 ? o ? /* @__PURE__ */ P.createElement(P.Fragment, null, a({})) : r ? a({ display: "none" }) : null : g === "exited" ? r ? a({ display: "none" }) : null : /* @__PURE__ */ P.createElement(P.Fragment, null, a(
    nP({
      transition: e,
      duration: p,
      state: g,
      timingFunction: v
    })
  ));
}
nv.displayName = "@mantine/core/Transition";
var ov = { dropdown: "m-38a85659", arrow: "m-a31dc6c1" };
const iP = {}, td = Ue((r, e) => {
  var _, R, I, S;
  const t = Ce("PopoverDropdown", iP, r), {
    className: n,
    style: o,
    vars: a,
    children: s,
    onKeyDownCapture: l,
    variant: u,
    classNames: f,
    styles: h,
    ...p
  } = t, g = Zm(), v = RA({
    opened: g.opened,
    shouldReturnFocus: g.returnFocus
  }), C = g.withRoles ? {
    "aria-labelledby": g.getTargetId(),
    id: g.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, E = Or(e, g.floating);
  return g.disabled ? null : /* @__PURE__ */ P.createElement(rv, { ...g.portalProps, withinPortal: g.withinPortal }, /* @__PURE__ */ P.createElement(
    nv,
    {
      mounted: g.opened,
      ...g.transitionProps,
      transition: ((_ = g.transitionProps) == null ? void 0 : _.transition) || "fade",
      duration: ((R = g.transitionProps) == null ? void 0 : R.duration) ?? 150,
      keepMounted: g.keepMounted,
      exitDuration: typeof ((I = g.transitionProps) == null ? void 0 : I.exitDuration) == "number" ? g.transitionProps.exitDuration : (S = g.transitionProps) == null ? void 0 : S.duration
    },
    (A) => /* @__PURE__ */ P.createElement(ev, { active: g.trapFocus }, /* @__PURE__ */ P.createElement(
      ke,
      {
        ...C,
        ...p,
        variant: u,
        ref: E,
        onKeyDownCapture: CA(g.onClose, {
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
              ...A,
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
      /* @__PURE__ */ P.createElement(
        Xm,
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
td.classes = ov;
td.displayName = "@mantine/core/PopoverDropdown";
const aP = {
  refProp: "ref",
  popupType: "dialog"
}, iv = Ue((r, e) => {
  const { children: t, refProp: n, popupType: o, ...a } = Ce(
    "PopoverTarget",
    aP,
    r
  );
  if (!ia(t))
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const s = a, l = Zm(), u = Or(l.reference, t.ref, e), f = l.withRoles ? {
    "aria-haspopup": o,
    "aria-expanded": l.opened,
    "aria-controls": l.getDropdownId(),
    id: l.getTargetId()
  } : {};
  return qs(t, {
    ...s,
    ...f,
    ...l.targetProps,
    className: Rn(l.targetProps.className, s.className, t.props.className),
    [n]: u,
    ...l.controlled ? null : { onClick: l.onToggle }
  });
});
iv.displayName = "@mantine/core/PopoverTarget";
function sP({
  opened: r,
  floating: e,
  position: t,
  positionDependencies: n
}) {
  const [o, a] = pe(0);
  ye(() => {
    if (e.refs.reference.current && e.refs.floating.current)
      return xk(
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
function cP(r, e) {
  var n, o, a, s;
  const t = [hk(r.offset)];
  return (n = r.middlewares) != null && n.shift && t.push(pk({ limiter: gk() })), (o = r.middlewares) != null && o.flip && t.push(lk()), (a = r.middlewares) != null && a.inline && t.push(dk()), t.push(Dk({ element: r.arrowRef, padding: r.arrowOffset })), ((s = r.middlewares) != null && s.size || r.width === "target") && t.push(
    mk({
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
function lP(r) {
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
  }, a = Qk({
    placement: r.position,
    middleware: cP(r, () => a)
  });
  return sP({
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
const uP = {
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
  zIndex: vA("popover"),
  __staticSelector: "Popover",
  width: "max-content"
}, dP = (r, { radius: e, shadow: t }) => ({
  dropdown: {
    "--popover-radius": e === void 0 ? void 0 : di(e),
    "--popover-shadow": wA(t)
  }
});
function Yn(r) {
  var Pn, gt, Ot, Jn, Ur, _t;
  const e = Ce("Popover", uP, r), {
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
    vars: Yr,
    ...cn
  } = e, jt = lt({
    name: ie,
    props: e,
    classes: ov,
    classNames: R,
    styles: I,
    unstyled: _,
    rootSelector: "dropdown",
    vars: Yr,
    varsResolver: dP
  }), ir = Ke(null), [ln, ar] = pe(null), [Dr, un] = pe(null), { dir: Kt } = $u(), Cr = So(we), Ye = lP({
    middlewares: h,
    width: f,
    position: Jk(Kt, n),
    offset: typeof o == "number" ? o + (p ? g / 2 : 0) : o,
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
  _A(() => S && Ye.onClose(), q, [
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
    eP,
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
        arrowY: (_t = (Ur = (Jn = Ye.floating) == null ? void 0 : Jn.middlewareData) == null ? void 0 : Ur.arrow) == null ? void 0 : _t.y,
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
        targetProps: cn,
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
Yn.Target = iv;
Yn.Dropdown = td;
Yn.displayName = "@mantine/core/Popover";
Yn.extend = (r) => r;
var zr = { root: "m-5ae2e3c", barsLoader: "m-7a2bd4cd", bar: "m-870bb79", "bars-loader-animation": "m-5d2b3b9d", dotsLoader: "m-4e3f22d7", dot: "m-870c4af", "loader-dots-animation": "m-aac34a1", ovalLoader: "m-b34414df", "oval-loader-animation": "m-f8e89c4b" };
const fP = ht(({ className: r, ...e }, t) => /* @__PURE__ */ P.createElement(ke, { component: "span", className: Rn(zr.barsLoader, r), ...e, ref: t }, /* @__PURE__ */ P.createElement("span", { className: zr.bar }), /* @__PURE__ */ P.createElement("span", { className: zr.bar }), /* @__PURE__ */ P.createElement("span", { className: zr.bar }))), hP = ht(({ className: r, ...e }, t) => /* @__PURE__ */ P.createElement(ke, { component: "span", className: Rn(zr.dotsLoader, r), ...e, ref: t }, /* @__PURE__ */ P.createElement("span", { className: zr.dot }), /* @__PURE__ */ P.createElement("span", { className: zr.dot }), /* @__PURE__ */ P.createElement("span", { className: zr.dot }))), pP = ht(({ className: r, ...e }, t) => /* @__PURE__ */ P.createElement(ke, { component: "span", className: Rn(zr.ovalLoader, r), ...e, ref: t })), av = {
  bars: fP,
  oval: pP,
  dots: hP
}, gP = {
  loaders: av,
  type: "oval"
}, mP = (r, { size: e, color: t }) => ({
  root: {
    "--loader-size": Ht(e, "loader-size"),
    "--loader-color": t ? Ji(t, r) : void 0
  }
}), Zs = Ue((r, e) => {
  const t = Ce("Loader", gP, r), {
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
    varsResolver: mP
  });
  return C ? /* @__PURE__ */ P.createElement(ke, { ..._("root"), ref: e, ...E }, C) : /* @__PURE__ */ P.createElement(
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
Zs.defaultLoaders = av;
Zs.classes = zr;
Zs.displayName = "@mantine/core/Loader";
const sv = ht(
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
sv.displayName = "@mantine/core/CloseIcon";
var cv = { root: "m-86a44da5", "root--subtle": "m-220c80f2" };
const vP = {
  variant: "subtle"
}, yP = (r, { size: e, radius: t, iconSize: n }) => ({
  root: {
    "--cb-size": Ht(e, "cb-size"),
    "--cb-radius": t === void 0 ? void 0 : di(t),
    "--cb-icon-size": $(n)
  }
}), rd = sa((r, e) => {
  const t = Ce("CloseButton", vP, r), {
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
  } = t, _ = lt({
    name: "CloseButton",
    props: t,
    className: l,
    style: f,
    classes: cv,
    classNames: u,
    styles: h,
    unstyled: p,
    vars: a,
    varsResolver: yP
  });
  return /* @__PURE__ */ P.createElement(
    la,
    {
      ref: e,
      ...E,
      unstyled: p,
      variant: C,
      disabled: v,
      mod: { disabled: v || g },
      ..._("root", { variant: C, active: !0 })
    },
    /* @__PURE__ */ P.createElement(sv, null),
    o
  );
});
rd.classes = cv;
rd.displayName = "@mantine/core/CloseButton";
function CP(r) {
  return Ql.toArray(r).filter(Boolean);
}
var lv = { root: "m-4081bf90" };
const wP = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, EP = (r, { grow: e, preventGrowOverflow: t, gap: n, align: o, justify: a, wrap: s }, { childWidth: l }) => ({
  root: {
    "--group-child-width": e && t ? l : void 0,
    "--group-gap": Fu(n),
    "--group-align": o,
    "--group-justify": a,
    "--group-wrap": s
  }
}), Ls = Ue((r, e) => {
  const t = Ce("Group", wP, r), {
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
    __size: R,
    ...I
  } = t, S = CP(u), A = S.length, O = Fu(f ?? "md"), q = { childWidth: `calc(${100 / A}% - (${O} - ${O} / ${A}))` }, D = lt({
    name: "Group",
    props: t,
    stylesCtx: q,
    className: o,
    style: a,
    classes: lv,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: E,
    varsResolver: EP
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
Ls.classes = lv;
Ls.displayName = "@mantine/core/Group";
const [bP, da] = dA({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var xr = { wrapper: "m-6c018570", input: "m-8fb7ebe7", section: "m-82577fc2", placeholder: "m-88bacfd0", root: "m-46b77525", label: "m-8fdc1311", required: "m-78a94662", error: "m-8f816625", description: "m-fe47ce59" };
const pg = {}, _P = (r, { size: e }) => ({
  description: {
    "--input-description-size": e === void 0 ? void 0 : `calc(${Pr(e)} - ${$(2)})`
  }
}), ec = Ue((r, e) => {
  const t = Ce("InputDescription", pg, r), {
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
  } = Ce("InputDescription", pg, t), C = da(), E = lt({
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
    varsResolver: _P
  }), _ = p && (C == null ? void 0 : C.getStyles) || E;
  return /* @__PURE__ */ P.createElement(
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
ec.classes = xr;
ec.displayName = "@mantine/core/InputDescription";
const SP = {}, TP = (r, { size: e }) => ({
  error: {
    "--input-error-size": e === void 0 ? void 0 : `calc(${Pr(e)} - ${$(2)})`
  }
}), tc = Ue((r, e) => {
  const t = Ce("InputError", SP, r), {
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
    varsResolver: TP
  }), E = da(), _ = p && (E == null ? void 0 : E.getStyles) || C;
  return /* @__PURE__ */ P.createElement(
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
tc.classes = xr;
tc.displayName = "@mantine/core/InputError";
const gg = {
  labelElement: "label"
}, IP = (r, { size: e }) => ({
  label: {
    "--input-label-size": Pr(e),
    "--input-asterisk-color": void 0
  }
}), rc = Ue((r, e) => {
  const t = Ce("InputLabel", gg, r), {
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
    ...R
  } = Ce("InputLabel", gg, t), I = lt({
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
    varsResolver: IP
  }), S = da(), A = (S == null ? void 0 : S.getStyles) || I;
  return /* @__PURE__ */ P.createElement(
    ke,
    {
      ...A("label"),
      component: f,
      variant: _,
      size: h,
      ref: e,
      htmlFor: f === "label" ? g : void 0,
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
rc.classes = xr;
rc.displayName = "@mantine/core/InputLabel";
const mg = {}, nd = Ue((r, e) => {
  const t = Ce("InputPlaceholder", mg, r), {
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
  } = Ce("InputPlaceholder", mg, t), v = lt({
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
      ...g
    }
  );
});
nd.classes = xr;
nd.displayName = "@mantine/core/InputPlaceholder";
function AP(r, { hasDescription: e, hasError: t }) {
  const n = r.findIndex((u) => u === "input"), o = r[n - 1], a = r[n + 1];
  return { offsetBottom: e && a === "description" || t && a === "error", offsetTop: e && o === "description" || t && o === "error" };
}
const RP = {
  labelElement: "label",
  inputContainer: (r) => r,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, kP = (r, { size: e }) => ({
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
}), od = Ue((r, e) => {
  const t = Ce("InputWrapper", RP, r), {
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
    varsResolver: kP
  }), ne = {
    size: f,
    variant: h,
    __staticSelector: p
  }, fe = So(q), oe = typeof L == "boolean" ? L : D, we = (S == null ? void 0 : S.id) || `${fe}-error`, Y = (I == null ? void 0 : I.id) || `${fe}-description`, ie = fe, te = !!E && typeof E != "boolean", Pe = !!_, Qe = `${te ? we : ""} ${Pe ? Y : ""}`, ot = Qe.trim().length > 0 ? Qe.trim() : void 0, ut = (R == null ? void 0 : R.id) || `${fe}-label`, Yr = C && /* @__PURE__ */ P.createElement(
    rc,
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
  ), cn = Pe && /* @__PURE__ */ P.createElement(
    ec,
    {
      key: "description",
      ...I,
      ...ne,
      size: (I == null ? void 0 : I.size) || ne.size,
      id: (I == null ? void 0 : I.id) || Y
    },
    _
  ), jt = /* @__PURE__ */ P.createElement(P.Fragment, { key: "input" }, g(O)), ir = te && /* @__PURE__ */ P.createElement(
    tc,
    {
      ...S,
      ...ne,
      size: (S == null ? void 0 : S.size) || ne.size,
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
    bP,
    {
      value: {
        getStyles: le,
        describedBy: ot,
        inputId: ie,
        labelId: ut,
        ...AP(v, { hasDescription: Pe, hasError: te })
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
      ln
    )
  );
});
od.classes = xr;
od.displayName = "@mantine/core/InputWrapper";
const PP = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: !0,
  withErrorStyles: !0
}, NP = (r, e, t) => ({
  wrapper: {
    "--input-margin-top": t.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": t.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": Ht(e.size, "input-height"),
    "--input-fz": Pr(e.size),
    "--input-radius": e.radius === void 0 ? void 0 : di(e.radius),
    "--input-left-section-width": e.leftSectionWidth !== void 0 ? $(e.leftSectionWidth) : void 0,
    "--input-right-section-width": e.rightSectionWidth !== void 0 ? $(e.rightSectionWidth) : void 0,
    "--input-padding-y": e.multiline ? Ht(e.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": e.leftSectionPointerEvents,
    "--input-right-section-pointer-events": e.rightSectionPointerEvents
  }
}), Bt = sa((r, e) => {
  const t = Ce("Input", PP, r), {
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
  } = t, { styleProps: Y, rest: ie } = Ys(we), te = da(), Pe = { offsetBottom: te == null ? void 0 : te.offsetBottom, offsetTop: te == null ? void 0 : te.offsetTop }, Qe = lt({
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
    varsResolver: NP
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
      ...g,
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
Bt.classes = xr;
Bt.Wrapper = od;
Bt.Label = rc;
Bt.Error = tc;
Bt.Description = ec;
Bt.Placeholder = nd;
Bt.displayName = "@mantine/core/Input";
function OP(r, e, t) {
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
  } = n, { styleProps: le, rest: ne } = Ys(X), fe = {
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
      __staticSelector: g,
      __stylesApiProps: v || n,
      error: s,
      variant: D,
      id: I
    }
  };
}
const MP = {
  __staticSelector: "InputBase",
  withAria: !0
}, Qn = sa((r, e) => {
  const { inputProps: t, wrapperProps: n, ...o } = OP("InputBase", MP, r);
  return /* @__PURE__ */ P.createElement(Bt.Wrapper, { ...n }, /* @__PURE__ */ P.createElement(Bt, { ...t, ...o, ref: e }));
});
Qn.classes = { ...Bt.classes, ...Bt.Wrapper.classes };
Qn.displayName = "@mantine/core/InputBase";
const [xP, id] = ui(
  "Accordion component was not found in the tree"
);
function ad({ style: r, size: e = 16, ...t }) {
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
ad.displayName = "@mantine/core/AccordionChevron";
const [LP, uv] = ui("Accordion.Item component was not found in the tree");
var fa = { root: "m-9bdbb667", panel: "m-df78851f", content: "m-4ba554d4", itemTitle: "m-8fa820a0", control: "m-4ba585b8", "control--default": "m-6939a5e9", "control--contained": "m-4271d21b", label: "m-df3ffa0f", chevron: "m-3f35ae96", icon: "m-9bd771fe", item: "m-9bd7b098", "item--default": "m-fe19b709", "item--contained": "m-1f921b3b", "item--filled": "m-2cdf939a", "item--separated": "m-9f59b069" };
const DP = {}, sd = Ue((r, e) => {
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
  } = Ce("AccordionControl", DP, r), { value: C } = uv(), E = id(), _ = E.isItemActive(C), R = typeof E.order == "number", I = `h${E.order}`, S = /* @__PURE__ */ P.createElement(
    la,
    {
      ...v,
      ...E.getStyles("control", { className: n, classNames: t, style: o, styles: a, variant: E.variant }),
      unstyled: E.unstyled,
      mod: [
        "accordion-control",
        { active: _, "chevron-position": E.chevronPosition, disabled: g }
      ],
      ref: e,
      onClick: (A) => {
        f == null || f(A), E.onChange(C);
      },
      type: "button",
      disabled: g,
      "aria-expanded": _,
      "aria-controls": E.getRegionId(C),
      id: E.getControlId(C),
      onKeyDown: gA({
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
sd.displayName = "@mantine/core/AccordionControl";
sd.classes = fa;
const UP = {}, cd = Ue((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, value: l, ...u } = Ce(
    "AccordionItem",
    UP,
    r
  ), f = id();
  return /* @__PURE__ */ P.createElement(LP, { value: { value: l } }, /* @__PURE__ */ P.createElement(
    ke,
    {
      ref: e,
      mod: { active: f.isItemActive(l) },
      ...f.getStyles("item", { className: n, classNames: t, styles: a, style: o, variant: f.variant }),
      ...u
    }
  ));
});
cd.displayName = "@mantine/core/AccordionItem";
cd.classes = fa;
const FP = {}, ld = Ue((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, children: l, ...u } = Ce(
    "AccordionPanel",
    FP,
    r
  ), { value: f } = uv(), h = id();
  return /* @__PURE__ */ P.createElement(
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
    /* @__PURE__ */ P.createElement("div", { ...h.getStyles("content", { classNames: t, styles: a }) }, l)
  );
});
ld.displayName = "@mantine/core/AccordionPanel";
ld.classes = fa;
const HP = {
  multiple: !1,
  disableChevronRotation: !1,
  chevronPosition: "right",
  variant: "default",
  chevron: /* @__PURE__ */ P.createElement(ad, null)
}, BP = (r, { transitionDuration: e, chevronSize: t, radius: n }) => ({
  root: {
    "--accordion-transition-duration": e === void 0 ? void 0 : `${e}ms`,
    "--accordion-chevron-size": t === void 0 ? void 0 : $(t),
    "--accordion-radius": n === void 0 ? void 0 : di(n)
  }
});
function Et(r) {
  const e = Ce("Accordion", HP, r), {
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
    onChange: g
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
    varsResolver: BP
  });
  return /* @__PURE__ */ P.createElement(
    xP,
    {
      value: {
        isItemActive: le,
        onChange: ne,
        getControlId: zp(
          `${D}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: zp(
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
const KP = (r) => r;
Et.extend = KP;
Et.classes = fa;
Et.displayName = "@mantine/core/Accordion";
Et.Item = cd;
Et.Panel = ld;
Et.Control = sd;
Et.Chevron = ad;
function dv(r) {
  return typeof r == "string" ? { value: r, label: r } : typeof r == "number" ? { value: r.toString(), label: r.toString() } : "group" in r ? {
    group: r.group,
    items: r.items.map((e) => dv(e))
  } : r;
}
function fv(r) {
  return r ? r.map(dv) : [];
}
function ud(r) {
  return r.reduce((e, t) => "group" in t ? { ...e, ...ud(t.items) } : (e[t.value] = t, e), {});
}
var Vt = { dropdown: "m-88b62a41", options: "m-b2821a6e", option: "m-92253aa5", search: "m-985517d8", empty: "m-2530cd1d", header: "m-858f94bd", footer: "m-82b967cb", group: "m-254f3e4f", groupLabel: "m-2bb2e9e5", chevron: "m-2943220b", optionsDropdownScrollArea: "m-71d052f9", optionsDropdownOption: "m-390b5f4", optionsDropdownCheckIcon: "m-8ee53fc2" };
const qP = {
  error: null
}, $P = (r, { size: e }) => ({
  chevron: {
    "--combobox-chevron-size": Ht(e, "combobox-chevron-size")
  }
}), dd = Ue((r, e) => {
  const t = Ce("ComboboxChevron", qP, r), { size: n, error: o, style: a, className: s, classNames: l, styles: u, unstyled: f, vars: h, ...p } = t, g = lt({
    name: "ComboboxChevron",
    classes: Vt,
    props: t,
    style: a,
    className: s,
    classNames: l,
    styles: u,
    unstyled: f,
    vars: h,
    varsResolver: $P,
    rootSelector: "chevron"
  });
  return /* @__PURE__ */ P.createElement(
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
dd.classes = Vt;
dd.displayName = "@mantine/core/ComboboxChevron";
const [GP, Lr] = ui(
  "Combobox component was not found in tree"
), hv = ht(
  ({ size: r, onMouseDown: e, onClick: t, onClear: n, ...o }, a) => /* @__PURE__ */ P.createElement(
    rd,
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
hv.displayName = "@mantine/core/ComboboxClearButton";
const zP = {}, fd = Ue((r, e) => {
  const { classNames: t, styles: n, className: o, style: a, hidden: s, ...l } = Ce(
    "ComboboxDropdown",
    zP,
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
fd.classes = Vt;
fd.displayName = "@mantine/core/ComboboxDropdown";
const WP = {
  refProp: "ref"
}, pv = Ue((r, e) => {
  const { children: t, refProp: n } = Ce("ComboboxDropdownTarget", WP, r);
  if (Lr(), !ia(t))
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  return /* @__PURE__ */ P.createElement(Yn.Target, { ref: e, refProp: n }, t);
});
pv.displayName = "@mantine/core/ComboboxDropdownTarget";
const VP = {}, hd = Ue((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, ...l } = Ce(
    "ComboboxEmpty",
    VP,
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
hd.classes = Vt;
hd.displayName = "@mantine/core/ComboboxEmpty";
function pd({
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
const jP = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1
}, gv = Ue((r, e) => {
  const {
    children: t,
    refProp: n,
    withKeyboardNavigation: o,
    withAriaAttributes: a,
    withExpandedAttribute: s,
    targetType: l,
    ...u
  } = Ce("ComboboxEventsTarget", jP, r);
  if (!ia(t))
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const f = Lr(), h = pd({
    targetType: l,
    withAriaAttributes: a,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: t.props.onKeyDown
  });
  return qs(t, {
    ...h,
    ...u,
    [n]: Or(e, f.store.targetRef, t == null ? void 0 : t.ref)
  });
});
gv.displayName = "@mantine/core/ComboboxEventsTarget";
const YP = {}, gd = Ue((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, ...l } = Ce(
    "ComboboxFooter",
    YP,
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
gd.classes = Vt;
gd.displayName = "@mantine/core/ComboboxFooter";
const QP = {}, md = Ue((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, children: l, label: u, ...f } = Ce(
    "ComboboxGroup",
    QP,
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
md.classes = Vt;
md.displayName = "@mantine/core/ComboboxGroup";
const JP = {}, vd = Ue((r, e) => {
  const { classNames: t, className: n, style: o, styles: a, vars: s, ...l } = Ce(
    "ComboboxHeader",
    JP,
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
vd.classes = Vt;
vd.displayName = "@mantine/core/ComboboxHeader";
const XP = {}, yd = Ue((r, e) => {
  const t = Ce("ComboboxOption", XP, r), {
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
  } = t, _ = Lr(), R = Fg(), I = f || R;
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
        _.resetSelectionOnOptionHover && _.store.resetSelectedOption(), g == null || g(S);
      }
    }
  );
});
yd.classes = Vt;
yd.displayName = "@mantine/core/ComboboxOption";
const ZP = {}, Cd = Ue((r, e) => {
  const t = Ce("ComboboxOptions", ZP, r), { classNames: n, className: o, style: a, styles: s, id: l, onMouseDown: u, labelledBy: f, ...h } = t, p = Lr(), g = So(l);
  return ye(() => {
    p.store.setListId(g);
  }, [g]), /* @__PURE__ */ P.createElement(
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
Cd.classes = Vt;
Cd.displayName = "@mantine/core/ComboboxOptions";
const eN = {
  withAriaAttributes: !0,
  withKeyboardNavigation: !0
}, wd = Ue((r, e) => {
  const t = Ce("ComboboxSearch", eN, r), {
    classNames: n,
    styles: o,
    unstyled: a,
    vars: s,
    withAriaAttributes: l,
    onKeyDown: u,
    withKeyboardNavigation: f,
    size: h,
    ...p
  } = t, g = Lr(), v = g.getStyles("search"), C = pd({
    targetType: "input",
    withAriaAttributes: l,
    withKeyboardNavigation: f,
    withExpandedAttribute: !1,
    onKeyDown: u
  });
  return /* @__PURE__ */ P.createElement(
    Bt,
    {
      ref: Or(e, g.store.searchRef),
      classNames: [{ input: v.className }, n],
      styles: [{ input: v.style }, o],
      size: h || g.size,
      ...C,
      ...p,
      __staticSelector: "Combobox"
    }
  );
});
wd.classes = Vt;
wd.displayName = "@mantine/core/ComboboxSearch";
const tN = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1
}, mv = Ue((r, e) => {
  const {
    children: t,
    refProp: n,
    withKeyboardNavigation: o,
    withAriaAttributes: a,
    withExpandedAttribute: s,
    targetType: l,
    ...u
  } = Ce("ComboboxTarget", tN, r);
  if (!ia(t))
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const f = Lr(), h = pd({
    targetType: l,
    withAriaAttributes: a,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: t.props.onKeyDown
  }), p = qs(t, {
    ...h,
    ...u
  });
  return /* @__PURE__ */ P.createElement(Yn.Target, { ref: Or(e, f.store.targetRef) }, p);
});
mv.displayName = "@mantine/core/ComboboxTarget";
function rN(r, e, t) {
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
function nN(r, e, t) {
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
function oN(r) {
  for (let e = 0; e < r.length; e += 1)
    if (!r[e].hasAttribute("data-combobox-disabled"))
      return e;
  return -1;
}
function Ed({
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
  }), f = Ke(null), h = Ke(-1), p = Ke(null), g = Ke(null), v = Ke(-1), C = Ke(-1), E = Ke(-1), _ = ze(
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
      nN(
        h.current,
        document.querySelectorAll(`#${f.current} [data-combobox-option]`),
        a
      )
    ),
    [A, a]
  ), q = ze(
    () => A(
      rN(
        h.current,
        document.querySelectorAll(`#${f.current} [data-combobox-option]`),
        a
      )
    ),
    [A, a]
  ), D = ze(
    () => A(
      oN(
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
    C.current = window.setTimeout(() => g.current.focus(), 0);
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
    targetRef: g,
    focusTarget: oe
  };
}
const iN = {
  keepMounted: !0,
  withinPortal: !0,
  resetSelectionOnOptionHover: !1,
  width: "target",
  transitionProps: { transition: "fade", duration: 0 }
}, aN = (r, { size: e, dropdownPadding: t }) => ({
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
  const e = Ce("Combobox", iN, r), {
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
  } = e, E = Ed(), _ = s || E, R = lt({
    name: g || "Combobox",
    classes: Vt,
    props: e,
    classNames: t,
    styles: n,
    unstyled: o,
    vars: l,
    varsResolver: aN
  });
  return /* @__PURE__ */ P.createElement(
    GP,
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
const sN = (r) => r;
je.extend = sN;
je.classes = Vt;
je.displayName = "@mantine/core/Combobox";
je.Target = mv;
je.Dropdown = fd;
je.Options = Cd;
je.Option = yd;
je.Search = wd;
je.Empty = hd;
je.Chevron = dd;
je.Footer = gd;
je.Header = vd;
je.EventsTarget = gv;
je.DropdownTarget = pv;
je.Group = md;
je.ClearButton = hv;
var vv = { root: "m-5f75b09e", body: "m-5f6e695e", labelWrapper: "m-d3ea56bb", label: "m-8ee546b8", description: "m-328f68c0", error: "m-8e8a99cc" };
const cN = vv, yv = ht(
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
    ...R
  }, I) => {
    const S = lt({
      name: r,
      props: e,
      className: t,
      style: E,
      classes: vv,
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
          "--label-fz": Pr(g),
          "--label-lh": Ht(g, "label-lh")
        },
        mod: { "label-position": v },
        variant: C,
        size: g,
        ...R
      },
      /* @__PURE__ */ P.createElement("div", { ...S("body") }, s, /* @__PURE__ */ P.createElement("div", { ...S("labelWrapper"), "data-disabled": h || void 0 }, l && /* @__PURE__ */ P.createElement("label", { ...S("label"), "data-disabled": h || void 0, htmlFor: f }, l), u && /* @__PURE__ */ P.createElement(Bt.Description, { size: g, __inheritStyles: !1, ...S("description") }, u), p && p !== "boolean" && /* @__PURE__ */ P.createElement(Bt.Error, { size: g, __inheritStyles: !1, ...S("error") }, p)))
    );
  }
);
yv.displayName = "@mantine/core/InlineInput";
const Cv = _o(null), lN = Cv.Provider, uN = () => Vn(Cv);
function dN({ children: r, role: e }) {
  const t = da();
  return t ? /* @__PURE__ */ P.createElement("div", { role: e, "aria-labelledby": t.labelId, "aria-describedby": t.describedBy }, r) : /* @__PURE__ */ P.createElement(P.Fragment, null, r);
}
const fN = {}, bd = Ue((r, e) => {
  const { value: t, defaultValue: n, onChange: o, size: a, wrapperProps: s, children: l, ...u } = Ce(
    "CheckboxGroup",
    fN,
    r
  ), [f, h] = wo({
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
  return /* @__PURE__ */ P.createElement(lN, { value: { value: f, onChange: p, size: a } }, /* @__PURE__ */ P.createElement(
    Bt.Wrapper,
    {
      size: a,
      ref: e,
      ...s,
      ...u,
      labelElement: "div",
      __staticSelector: "CheckboxGroup"
    },
    /* @__PURE__ */ P.createElement(dN, { role: "group" }, l)
  ));
});
bd.classes = Bt.Wrapper.classes;
bd.displayName = "@mantine/core/CheckboxGroup";
function wv({ size: r, style: e, ...t }) {
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
function hN({ indeterminate: r, ...e }) {
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
  ) : /* @__PURE__ */ P.createElement(wv, { ...e });
}
var Ev = { root: "m-bf2d988c", inner: "m-26062bec", input: "m-26063560", icon: "m-bf295423", "input--outline": "m-215c4542" };
const pN = {
  labelPosition: "right",
  icon: hN
}, gN = (r, { radius: e, color: t, size: n, iconColor: o, variant: a }) => {
  const s = js({ color: t || r.primaryColor, theme: r }), l = s.isThemeColor && s.shade === void 0 ? `var(--mantine-color-${s.color}-outline)` : s.color;
  return {
    root: {
      "--checkbox-size": Ht(n, "checkbox-size"),
      "--checkbox-radius": e === void 0 ? void 0 : di(e),
      "--checkbox-color": a === "outline" ? l : Ji(t, r),
      "--checkbox-icon-color": o ? Ji(o, r) : void 0
    }
  };
}, nc = Ue((r, e) => {
  const t = Ce("Checkbox", pN, r), {
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
  } = t, ne = uN(), fe = g || (ne == null ? void 0 : ne.size), oe = q, we = lt({
    name: "Checkbox",
    props: t,
    classes: Ev,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: u,
    varsResolver: gN
  }), { styleProps: Y, rest: ie } = Ys(le), te = So(p), Pe = ne ? {
    checked: ne.value.includes(ie.value),
    onChange: (Qe) => {
      ne.onChange(Qe), X == null || X(Qe);
    }
  } : {};
  return /* @__PURE__ */ P.createElement(
    yv,
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
nc.classes = { ...Ev, ...cN };
nc.displayName = "@mantine/core/Checkbox";
nc.Group = bd;
function Zi(r) {
  return "group" in r;
}
function bv({
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
      items: bv({
        options: s.items,
        search: e,
        limit: t - o.length
      })
    }), Zi(s) || s.label.toLowerCase().includes(n) && o.push(s);
  }
  return o;
}
function mN(r) {
  if (r.length === 0)
    return !0;
  for (const e of r)
    if (!("group" in e) || e.items.length > 0)
      return !1;
  return !0;
}
function _v(r, e = /* @__PURE__ */ new Set()) {
  if (Array.isArray(r))
    for (const t of r)
      if (Zi(t))
        _v(t.items, e);
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
function Sv({ data: r, withCheckIcon: e, value: t, checkIconPosition: n, unstyled: o }) {
  if (!Zi(r)) {
    const s = e && $l(t, r.value) && /* @__PURE__ */ P.createElement(wv, { className: Vt.optionsDropdownCheckIcon });
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
    Sv,
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
function Tv({
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
  _v(r);
  const _ = typeof o == "string" ? (n || bv)({
    options: r,
    search: u ? o : "",
    limit: a ?? 1 / 0
  }) : r, R = mN(_), I = _.map((S) => /* @__PURE__ */ P.createElement(
    Sv,
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
  ) : I, R && g && /* @__PURE__ */ P.createElement(je.Empty, null, g)));
}
const vN = {}, _d = Ue((r, e) => {
  const t = Ce("Autocomplete", vN, r), {
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
  } = t, oe = So(ne), we = fv(E), Y = ud(we), [ie, te] = wo({
    value: _,
    defaultValue: R,
    finalValue: "",
    onChange: C
  }), Pe = Ed({
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
          Pe.closeDropdown(), g == null || g(ut);
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
      Tv,
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
_d.classes = { ...Qn.classes, ...je.classes };
_d.displayName = "@mantine/core/Autocomplete";
var oc = { root: "m-77c9d27d", inner: "m-80f1301b", loader: "m-a25b86ee", label: "m-811560b9", section: "m-a74036a", group: "m-80d6d844" };
const vg = {
  orientation: "horizontal"
}, yN = (r, { borderWidth: e }) => ({
  group: { "--button-border-width": $(e) }
}), Sd = Ue((r, e) => {
  const t = Ce("ButtonGroup", vg, r), {
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
  } = Ce("ButtonGroup", vg, r), v = lt({
    name: "ButtonGroup",
    props: t,
    classes: oc,
    className: n,
    style: o,
    classNames: a,
    styles: s,
    unstyled: l,
    vars: f,
    varsResolver: yN,
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
      ...g
    }
  );
});
Sd.classes = oc;
Sd.displayName = "@mantine/core/ButtonGroup";
const CN = {}, wN = (r, { radius: e, color: t, gradient: n, variant: o, size: a, justify: s }) => {
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
      "--button-radius": e === void 0 ? void 0 : di(e),
      "--button-bg": t || o ? l.background : void 0,
      "--button-hover": t || o ? l.hover : void 0,
      "--button-color": t || o ? l.color : void 0,
      "--button-bd": t || o ? l.border : void 0,
      "--button-hover-color": t || o ? l.hoverColor : void 0
    }
  };
}, ha = sa((r, e) => {
  const t = Ce("Button", CN, r), {
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
    classNames: R,
    styles: I,
    unstyled: S,
    "data-disabled": A,
    ...O
  } = t, L = lt({
    name: "Button",
    props: t,
    classes: oc,
    className: a,
    style: n,
    classNames: R,
    styles: I,
    unstyled: S,
    vars: o,
    varsResolver: wN
  }), q = !!f, D = !!h;
  return /* @__PURE__ */ P.createElement(
    la,
    {
      ref: e,
      ...L("root", { active: !l && !C && !A }),
      unstyled: S,
      variant: g,
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
      Zs,
      {
        color: "var(--button-color)",
        size: "calc(var(--button-height) / 1.8)",
        ...E
      }
    )),
    /* @__PURE__ */ P.createElement("span", { ...L("inner") }, f && /* @__PURE__ */ P.createElement(ke, { component: "span", ...L("section"), mod: { position: "left" } }, f), /* @__PURE__ */ P.createElement(ke, { component: "span", mod: { loading: C }, ...L("label") }, u), h && /* @__PURE__ */ P.createElement(ke, { component: "span", ...L("section"), mod: { position: "right" } }, h))
  );
});
ha.classes = oc;
ha.displayName = "@mantine/core/Button";
ha.Group = Sd;
var Iv = { root: "m-7485cace" };
const EN = {}, bN = (r, { size: e, fluid: t }) => ({
  root: {
    "--container-size": t ? void 0 : Ht(e, "container-size")
  }
}), Td = Ue((r, e) => {
  const t = Ce("Container", EN, r), { classNames: n, className: o, style: a, styles: s, unstyled: l, vars: u, fluid: f, ...h } = t, p = lt({
    name: "Container",
    classes: Iv,
    props: t,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: u,
    varsResolver: bN
  });
  return /* @__PURE__ */ P.createElement(ke, { ref: e, mod: { fluid: f }, ...p("root"), ...h });
});
Td.classes = Iv;
Td.displayName = "@mantine/core/Container";
const _N = {
  searchable: !1,
  withCheckIcon: !0,
  allowDeselect: !0,
  checkIconPosition: "left"
}, ic = Ue((r, e) => {
  const t = Ce("Select", _N, r), {
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
    error: Yr,
    rightSectionPointerEvents: cn,
    id: jt,
    clearable: ir,
    clearButtonProps: ln,
    hiddenInputProps: ar,
    ...Dr
  } = t, un = hs(() => fv(E), [E]), Kt = hs(() => ud(un), [un]), Cr = So(jt), [Ye, Pt] = wo({
    value: _,
    defaultValue: R,
    finalValue: null,
    onChange: C
  }), Nt = typeof Ye == "string" ? Kt[Ye] : void 0, [Pn, gt] = wo({
    value: Pe,
    defaultValue: Qe,
    finalValue: Nt ? Nt.label : "",
    onChange: ot
  }), Ot = Ed({
    opened: l,
    defaultOpened: u,
    onDropdownOpen: h,
    onDropdownClose: () => {
      f == null || f(), Ot.resetSelectedOption();
    }
  }), { resolvedClassNames: Jn, resolvedStyles: Ur } = Tm({
    props: t,
    styles: o,
    classNames: n
  });
  ye(() => {
    I && Ot.selectFirstOption();
  }, [I, Ye]), ye(() => {
    _ === null && gt(""), typeof _ == "string" && Nt && gt(Nt.label);
  }, [_, Nt]);
  const _t = ir && !!Ye && !L && !O && /* @__PURE__ */ P.createElement(
    je.ClearButton,
    {
      size: le,
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
      classNames: Jn,
      styles: Ur,
      unstyled: a,
      readOnly: O,
      onOptionSubmit: (tt) => {
        S == null || S(tt);
        const Qr = ut && Kt[tt].value === Ye ? null : Kt[tt].value;
        Pt(Qr), gt(typeof Qr == "string" ? Kt[tt].label : ""), Ot.closeDropdown();
      },
      size: le,
      ...A
    },
    /* @__PURE__ */ P.createElement(je.Target, { targetType: ne ? "input" : "button" }, /* @__PURE__ */ P.createElement(
      Qn,
      {
        id: Cr,
        ref: e,
        rightSection: fe || _t || /* @__PURE__ */ P.createElement(je.Chevron, { size: le, error: Yr, unstyled: a }),
        rightSectionPointerEvents: cn || (_t ? "all" : "none"),
        ...Dr,
        size: le,
        __staticSelector: "Select",
        disabled: L,
        readOnly: O || !ne,
        value: Pn,
        onChange: (tt) => {
          gt(tt.currentTarget.value), Ot.openDropdown(), I && Ot.selectFirstOption();
        },
        onFocus: (tt) => {
          ne && Ot.openDropdown(), p == null || p(tt);
        },
        onBlur: (tt) => {
          var Qr;
          ne && Ot.closeDropdown(), gt(Ye != null && ((Qr = Kt[Ye]) == null ? void 0 : Qr.label) || ""), g == null || g(tt);
        },
        onClick: (tt) => {
          ne ? Ot.openDropdown() : Ot.toggleDropdown(), v == null || v(tt);
        },
        classNames: Jn,
        styles: Ur,
        unstyled: a,
        pointer: !ne,
        error: Yr
      }
    )),
    /* @__PURE__ */ P.createElement(
      Tv,
      {
        data: un,
        hidden: O || L,
        filter: q,
        search: Pn,
        limit: D,
        hiddenWhenEmpty: !ne || !Y,
        withScrollArea: Q,
        maxDropdownHeight: X,
        filterOptions: ne && (Nt == null ? void 0 : Nt.label) !== Pn,
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
ic.classes = { ...Qn.classes, ...je.classes };
ic.displayName = "@mantine/core/Select";
var Av = { root: "m-6d731127" };
const SN = {
  gap: "md",
  align: "stretch",
  justify: "flex-start"
}, TN = (r, { gap: e, align: t, justify: n }) => ({
  root: {
    "--stack-gap": Fu(e),
    "--stack-align": t,
    "--stack-justify": n
  }
}), Id = Ue((r, e) => {
  const t = Ce("Stack", SN, r), {
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
  } = t, C = lt({
    name: "Stack",
    props: t,
    classes: Av,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: u,
    varsResolver: TN
  });
  return /* @__PURE__ */ P.createElement(ke, { ref: e, ...C("root"), variant: g, ...v });
});
Id.classes = Av;
Id.displayName = "@mantine/core/Stack";
const IN = {}, mo = Ue((r, e) => {
  const t = Ce("TextInput", IN, r);
  return /* @__PURE__ */ P.createElement(Qn, { component: "input", ref: e, ...t, __staticSelector: "TextInput" });
});
mo.classes = Qn.classes;
mo.displayName = "@mantine/core/TextInput";
const AN = ["h1", "h2", "h3", "h4", "h5", "h6"];
function RN(r, e) {
  const t = e !== void 0 ? e : `h${r}`;
  return AN.includes(t) ? {
    fontSize: `var(--mantine-${t}-font-size)`,
    fontWeight: `var(--mantine-${t}-font-weight)`,
    lineHeight: `var(--mantine-${t}-line-height)`
  } : {
    fontSize: $(t),
    fontWeight: `var(--mantine-h${r}-font-weight)`,
    lineHeight: `var(--mantine-h${r}-line-height)`
  };
}
var Rv = { root: "m-8a5d1357" };
const kN = {
  order: 1
}, PN = (r, { order: e, size: t, lineClamp: n }) => {
  const o = RN(e, t);
  return {
    root: {
      "--title-fw": o.fontWeight,
      "--title-lh": o.lineHeight,
      "--title-fz": o.fontSize,
      "--title-line-clamp": typeof n == "number" ? n.toString() : void 0
    }
  };
}, Ds = Ue((r, e) => {
  const t = Ce("Title", kN, r), {
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
  } = t, C = lt({
    name: "Title",
    props: t,
    classes: Rv,
    className: o,
    style: a,
    classNames: n,
    styles: s,
    unstyled: l,
    vars: f,
    varsResolver: PN
  });
  return [1, 2, 3, 4, 5, 6].includes(u) ? /* @__PURE__ */ P.createElement(
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
Ds.classes = Rv;
Ds.displayName = "@mantine/core/Title";
const NN = {
  /** Put your mantine theme override here */
}, yg = {
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
}, ON = {
  auth: {
    clientId: "0fcd615b-f2b7-4514-9046-7b3e545ba341",
    authority: yg.authorities.signUpSignIn.authority,
    knownAuthorities: [yg.authorityDomain],
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
class MN {
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
class xN extends MN {
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
class si extends xN {
  constructor(e) {
    super({ baseUrl: e });
  }
}
const Ad = {
  test: "https://test.bsdd.buildingsmart.org",
  production: "https://api.bsdd.buildingsmart.org"
}, Rd = "production", LN = w0, vo = u0;
function kv(r) {
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
function DN(r) {
  if (!r)
    return { type: void 0, predefinedType: void 0 };
  const e = r.length - [...r].reverse().findIndex((o) => o === o.toLowerCase()), [t, n] = [
    r.slice(0, e),
    r.slice(e)
  ].map((o) => o || void 0);
  return { type: t, predefinedType: n };
}
function UN({ callback: r, domains: e, classifications: t, propertySetMap: n, ifcEntity: o }) {
  const { t: a } = ku();
  function s(h) {
    if (h in e) {
      const p = e[h];
      if (p)
        return kv(p);
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
        var I;
        if ((I = _ == null ? void 0 : _.dictionaryUri) != null && I.includes("https://identifier.buildingsmart.org/uri/buildingsmart/ifc/")) {
          const { type: S, predefinedType: A } = DN(_.code);
          return { ...E, type: S, predefinedType: A };
        }
        const R = l(_);
        return R ? { ...E, hasAssociations: [...E.hasAssociations || [], R] } : E;
      }, v),
      isDefinedBy: Object.values(g).length ? Object.values(g) : []
    };
  }
  const f = () => {
    const h = u(o, t, n);
    console.log(h), r(h);
  };
  return /* @__PURE__ */ Re.jsx(ha, { color: "gray", fullWidth: !0, onClick: f, variant: "filled", children: a("Save") });
}
var Us = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Us.exports;
(function(r, e) {
  (function() {
    var t, n = "4.17.21", o = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", s = "Expected a function", l = "Invalid `variable` option passed into `_.template`", u = "__lodash_hash_undefined__", f = 500, h = "__lodash_placeholder__", p = 1, g = 2, v = 4, C = 1, E = 2, _ = 1, R = 2, I = 4, S = 8, A = 16, O = 32, L = 64, q = 128, D = 256, Q = 512, X = 30, le = "...", ne = 800, fe = 16, oe = 1, we = 2, Y = 3, ie = 1 / 0, te = 9007199254740991, Pe = 17976931348623157e292, Qe = 0 / 0, ot = 4294967295, ut = ot - 1, Yr = ot >>> 1, cn = [
      ["ary", q],
      ["bind", _],
      ["bindKey", R],
      ["curry", S],
      ["curryRight", A],
      ["flip", Q],
      ["partial", O],
      ["partialRight", L],
      ["rearg", D]
    ], jt = "[object Arguments]", ir = "[object Array]", ln = "[object AsyncFunction]", ar = "[object Boolean]", Dr = "[object Date]", un = "[object DOMException]", Kt = "[object Error]", Cr = "[object Function]", Ye = "[object GeneratorFunction]", Pt = "[object Map]", Nt = "[object Number]", Pn = "[object Null]", gt = "[object Object]", Ot = "[object Promise]", Jn = "[object Proxy]", Ur = "[object RegExp]", _t = "[object Set]", tt = "[object String]", Qr = "[object Symbol]", oy = "[object Undefined]", pi = "[object WeakMap]", iy = "[object WeakSet]", gi = "[object ArrayBuffer]", Ao = "[object DataView]", dc = "[object Float32Array]", fc = "[object Float64Array]", hc = "[object Int8Array]", pc = "[object Int16Array]", gc = "[object Int32Array]", mc = "[object Uint8Array]", vc = "[object Uint8ClampedArray]", yc = "[object Uint16Array]", Cc = "[object Uint32Array]", ay = /\b__p \+= '';/g, sy = /\b(__p \+=) '' \+/g, cy = /(__e\(.*?\)|\b__t\)) \+\n'';/g, xd = /&(?:amp|lt|gt|quot|#39);/g, Ld = /[&<>"']/g, ly = RegExp(xd.source), uy = RegExp(Ld.source), dy = /<%-([\s\S]+?)%>/g, fy = /<%([\s\S]+?)%>/g, Dd = /<%=([\s\S]+?)%>/g, hy = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, py = /^\w*$/, gy = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, wc = /[\\^$.*+?()[\]{}|]/g, my = RegExp(wc.source), Ec = /^\s+/, vy = /\s/, yy = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Cy = /\{\n\/\* \[wrapped with (.+)\] \*/, wy = /,? & /, Ey = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, by = /[()=,{}\[\]\/\s]/, _y = /\\(\\)?/g, Sy = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ud = /\w*$/, Ty = /^[-+]0x[0-9a-f]+$/i, Iy = /^0b[01]+$/i, Ay = /^\[object .+?Constructor\]$/, Ry = /^0o[0-7]+$/i, ky = /^(?:0|[1-9]\d*)$/, Py = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ga = /($^)/, Ny = /['\n\r\u2028\u2029\\]/g, ma = "\\ud800-\\udfff", Oy = "\\u0300-\\u036f", My = "\\ufe20-\\ufe2f", xy = "\\u20d0-\\u20ff", Fd = Oy + My + xy, Hd = "\\u2700-\\u27bf", Bd = "a-z\\xdf-\\xf6\\xf8-\\xff", Ly = "\\xac\\xb1\\xd7\\xf7", Dy = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Uy = "\\u2000-\\u206f", Fy = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Kd = "A-Z\\xc0-\\xd6\\xd8-\\xde", qd = "\\ufe0e\\ufe0f", $d = Ly + Dy + Uy + Fy, bc = "['’]", Hy = "[" + ma + "]", Gd = "[" + $d + "]", va = "[" + Fd + "]", zd = "\\d+", By = "[" + Hd + "]", Wd = "[" + Bd + "]", Vd = "[^" + ma + $d + zd + Hd + Bd + Kd + "]", _c = "\\ud83c[\\udffb-\\udfff]", Ky = "(?:" + va + "|" + _c + ")", jd = "[^" + ma + "]", Sc = "(?:\\ud83c[\\udde6-\\uddff]){2}", Tc = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ro = "[" + Kd + "]", Yd = "\\u200d", Qd = "(?:" + Wd + "|" + Vd + ")", qy = "(?:" + Ro + "|" + Vd + ")", Jd = "(?:" + bc + "(?:d|ll|m|re|s|t|ve))?", Xd = "(?:" + bc + "(?:D|LL|M|RE|S|T|VE))?", Zd = Ky + "?", ef = "[" + qd + "]?", $y = "(?:" + Yd + "(?:" + [jd, Sc, Tc].join("|") + ")" + ef + Zd + ")*", Gy = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", zy = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", tf = ef + Zd + $y, Wy = "(?:" + [By, Sc, Tc].join("|") + ")" + tf, Vy = "(?:" + [jd + va + "?", va, Sc, Tc, Hy].join("|") + ")", jy = RegExp(bc, "g"), Yy = RegExp(va, "g"), Ic = RegExp(_c + "(?=" + _c + ")|" + Vy + tf, "g"), Qy = RegExp([
      Ro + "?" + Wd + "+" + Jd + "(?=" + [Gd, Ro, "$"].join("|") + ")",
      qy + "+" + Xd + "(?=" + [Gd, Ro + Qd, "$"].join("|") + ")",
      Ro + "?" + Qd + "+" + Jd,
      Ro + "+" + Xd,
      zy,
      Gy,
      zd,
      Wy
    ].join("|"), "g"), Jy = RegExp("[" + Yd + ma + Fd + qd + "]"), Xy = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Zy = [
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
    ], eC = -1, rt = {};
    rt[dc] = rt[fc] = rt[hc] = rt[pc] = rt[gc] = rt[mc] = rt[vc] = rt[yc] = rt[Cc] = !0, rt[jt] = rt[ir] = rt[gi] = rt[ar] = rt[Ao] = rt[Dr] = rt[Kt] = rt[Cr] = rt[Pt] = rt[Nt] = rt[gt] = rt[Ur] = rt[_t] = rt[tt] = rt[pi] = !1;
    var Xe = {};
    Xe[jt] = Xe[ir] = Xe[gi] = Xe[Ao] = Xe[ar] = Xe[Dr] = Xe[dc] = Xe[fc] = Xe[hc] = Xe[pc] = Xe[gc] = Xe[Pt] = Xe[Nt] = Xe[gt] = Xe[Ur] = Xe[_t] = Xe[tt] = Xe[Qr] = Xe[mc] = Xe[vc] = Xe[yc] = Xe[Cc] = !0, Xe[Kt] = Xe[Cr] = Xe[pi] = !1;
    var tC = {
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
    }, rC = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, nC = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, oC = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, iC = parseFloat, aC = parseInt, rf = typeof Ni == "object" && Ni && Ni.Object === Object && Ni, sC = typeof self == "object" && self && self.Object === Object && self, St = rf || sC || Function("return this")(), Ac = e && !e.nodeType && e, Xn = Ac && !0 && r && !r.nodeType && r, nf = Xn && Xn.exports === Ac, Rc = nf && rf.process, wr = function() {
      try {
        var M = Xn && Xn.require && Xn.require("util").types;
        return M || Rc && Rc.binding && Rc.binding("util");
      } catch {
      }
    }(), of = wr && wr.isArrayBuffer, af = wr && wr.isDate, sf = wr && wr.isMap, cf = wr && wr.isRegExp, lf = wr && wr.isSet, uf = wr && wr.isTypedArray;
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
    function cC(M, H, U, ae) {
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
    function lC(M, H) {
      for (var U = M == null ? 0 : M.length; U-- && H(M[U], U, M) !== !1; )
        ;
      return M;
    }
    function df(M, H) {
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
    function ya(M, H) {
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
    function uC(M, H, U, ae) {
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
    var dC = Oc("length");
    function fC(M) {
      return M.split("");
    }
    function hC(M) {
      return M.match(Ey) || [];
    }
    function ff(M, H, U) {
      var ae;
      return U(M, function(Te, qe, mt) {
        if (H(Te, qe, mt))
          return ae = qe, !1;
      }), ae;
    }
    function Ca(M, H, U, ae) {
      for (var Te = M.length, qe = U + (ae ? 1 : -1); ae ? qe-- : ++qe < Te; )
        if (H(M[qe], qe, M))
          return qe;
      return -1;
    }
    function ko(M, H, U) {
      return H === H ? TC(M, H, U) : Ca(M, hf, U);
    }
    function pC(M, H, U, ae) {
      for (var Te = U - 1, qe = M.length; ++Te < qe; )
        if (ae(M[Te], H))
          return Te;
      return -1;
    }
    function hf(M) {
      return M !== M;
    }
    function pf(M, H) {
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
    function gf(M, H, U, ae, Te) {
      return Te(M, function(qe, mt, Je) {
        U = ae ? (ae = !1, qe) : H(U, qe, mt, Je);
      }), U;
    }
    function gC(M, H) {
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
    function mC(M, H) {
      return nt(H, function(U) {
        return [U, M[U]];
      });
    }
    function mf(M) {
      return M && M.slice(0, wf(M) + 1).replace(Ec, "");
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
    function vf(M, H) {
      for (var U = -1, ae = M.length; ++U < ae && ko(H, M[U], 0) > -1; )
        ;
      return U;
    }
    function yf(M, H) {
      for (var U = M.length; U-- && ko(H, M[U], 0) > -1; )
        ;
      return U;
    }
    function vC(M, H) {
      for (var U = M.length, ae = 0; U--; )
        M[U] === H && ++ae;
      return ae;
    }
    var yC = Mc(tC), CC = Mc(rC);
    function wC(M) {
      return "\\" + oC[M];
    }
    function EC(M, H) {
      return M == null ? t : M[H];
    }
    function Po(M) {
      return Jy.test(M);
    }
    function bC(M) {
      return Xy.test(M);
    }
    function _C(M) {
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
    function Cf(M, H) {
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
    function wa(M) {
      var H = -1, U = Array(M.size);
      return M.forEach(function(ae) {
        U[++H] = ae;
      }), U;
    }
    function SC(M) {
      var H = -1, U = Array(M.size);
      return M.forEach(function(ae) {
        U[++H] = [ae, ae];
      }), U;
    }
    function TC(M, H, U) {
      for (var ae = U - 1, Te = M.length; ++ae < Te; )
        if (M[ae] === H)
          return ae;
      return -1;
    }
    function IC(M, H, U) {
      for (var ae = U + 1; ae--; )
        if (M[ae] === H)
          return ae;
      return ae;
    }
    function No(M) {
      return Po(M) ? RC(M) : dC(M);
    }
    function Fr(M) {
      return Po(M) ? kC(M) : fC(M);
    }
    function wf(M) {
      for (var H = M.length; H-- && vy.test(M.charAt(H)); )
        ;
      return H;
    }
    var AC = Mc(nC);
    function RC(M) {
      for (var H = Ic.lastIndex = 0; Ic.test(M); )
        ++H;
      return H;
    }
    function kC(M) {
      return M.match(Ic) || [];
    }
    function PC(M) {
      return M.match(Qy) || [];
    }
    var NC = function M(H) {
      H = H == null ? St : Oo.defaults(St.Object(), H, Oo.pick(St, Zy));
      var U = H.Array, ae = H.Date, Te = H.Error, qe = H.Function, mt = H.Math, Je = H.Object, Fc = H.RegExp, OC = H.String, br = H.TypeError, Ea = U.prototype, MC = qe.prototype, Mo = Je.prototype, ba = H["__core-js_shared__"], _a = MC.toString, Ve = Mo.hasOwnProperty, xC = 0, Ef = function() {
        var i = /[^.]+$/.exec(ba && ba.keys && ba.keys.IE_PROTO || "");
        return i ? "Symbol(src)_1." + i : "";
      }(), Sa = Mo.toString, LC = _a.call(Je), DC = St._, UC = Fc(
        "^" + _a.call(Ve).replace(wc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ta = nf ? H.Buffer : t, xn = H.Symbol, Ia = H.Uint8Array, bf = Ta ? Ta.allocUnsafe : t, Aa = Cf(Je.getPrototypeOf, Je), _f = Je.create, Sf = Mo.propertyIsEnumerable, Ra = Ea.splice, Tf = xn ? xn.isConcatSpreadable : t, vi = xn ? xn.iterator : t, Zn = xn ? xn.toStringTag : t, ka = function() {
        try {
          var i = oo(Je, "defineProperty");
          return i({}, "", {}), i;
        } catch {
        }
      }(), FC = H.clearTimeout !== St.clearTimeout && H.clearTimeout, HC = ae && ae.now !== St.Date.now && ae.now, BC = H.setTimeout !== St.setTimeout && H.setTimeout, Pa = mt.ceil, Na = mt.floor, Hc = Je.getOwnPropertySymbols, KC = Ta ? Ta.isBuffer : t, If = H.isFinite, qC = Ea.join, $C = Cf(Je.keys, Je), vt = mt.max, Mt = mt.min, GC = ae.now, zC = H.parseInt, Af = mt.random, WC = Ea.reverse, Bc = oo(H, "DataView"), yi = oo(H, "Map"), Kc = oo(H, "Promise"), xo = oo(H, "Set"), Ci = oo(H, "WeakMap"), wi = oo(Je, "create"), Oa = Ci && new Ci(), Lo = {}, VC = io(Bc), jC = io(yi), YC = io(Kc), QC = io(xo), JC = io(Ci), Ma = xn ? xn.prototype : t, Ei = Ma ? Ma.valueOf : t, Rf = Ma ? Ma.toString : t;
      function w(i) {
        if (at(i) && !Ae(i) && !(i instanceof De)) {
          if (i instanceof _r)
            return i;
          if (Ve.call(i, "__wrapped__"))
            return kh(i);
        }
        return new _r(i);
      }
      var Do = function() {
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
        escape: dy,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: fy,
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
      }, w.prototype = xa.prototype, w.prototype.constructor = w, _r.prototype = Do(xa.prototype), _r.prototype.constructor = _r;
      function De(i) {
        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ot, this.__views__ = [];
      }
      function XC() {
        var i = new De(this.__wrapped__);
        return i.__actions__ = Yt(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = Yt(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = Yt(this.__views__), i;
      }
      function ZC() {
        if (this.__filtered__) {
          var i = new De(this);
          i.__dir__ = -1, i.__filtered__ = !0;
        } else
          i = this.clone(), i.__dir__ *= -1;
        return i;
      }
      function ew() {
        var i = this.__wrapped__.value(), c = this.__dir__, d = Ae(i), m = c < 0, y = d ? i.length : 0, b = fE(0, y, this.__views__), T = b.start, k = b.end, x = k - T, B = m ? k : T - 1, K = this.__iteratees__, W = K.length, Z = 0, de = Mt(x, this.__takeCount__);
        if (!d || !m && y == x && de == x)
          return Xf(i, this.__actions__);
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
      De.prototype = Do(xa.prototype), De.prototype.constructor = De;
      function eo(i) {
        var c = -1, d = i == null ? 0 : i.length;
        for (this.clear(); ++c < d; ) {
          var m = i[c];
          this.set(m[0], m[1]);
        }
      }
      function tw() {
        this.__data__ = wi ? wi(null) : {}, this.size = 0;
      }
      function rw(i) {
        var c = this.has(i) && delete this.__data__[i];
        return this.size -= c ? 1 : 0, c;
      }
      function nw(i) {
        var c = this.__data__;
        if (wi) {
          var d = c[i];
          return d === u ? t : d;
        }
        return Ve.call(c, i) ? c[i] : t;
      }
      function ow(i) {
        var c = this.__data__;
        return wi ? c[i] !== t : Ve.call(c, i);
      }
      function iw(i, c) {
        var d = this.__data__;
        return this.size += this.has(i) ? 0 : 1, d[i] = wi && c === t ? u : c, this;
      }
      eo.prototype.clear = tw, eo.prototype.delete = rw, eo.prototype.get = nw, eo.prototype.has = ow, eo.prototype.set = iw;
      function dn(i) {
        var c = -1, d = i == null ? 0 : i.length;
        for (this.clear(); ++c < d; ) {
          var m = i[c];
          this.set(m[0], m[1]);
        }
      }
      function aw() {
        this.__data__ = [], this.size = 0;
      }
      function sw(i) {
        var c = this.__data__, d = La(c, i);
        if (d < 0)
          return !1;
        var m = c.length - 1;
        return d == m ? c.pop() : Ra.call(c, d, 1), --this.size, !0;
      }
      function cw(i) {
        var c = this.__data__, d = La(c, i);
        return d < 0 ? t : c[d][1];
      }
      function lw(i) {
        return La(this.__data__, i) > -1;
      }
      function uw(i, c) {
        var d = this.__data__, m = La(d, i);
        return m < 0 ? (++this.size, d.push([i, c])) : d[m][1] = c, this;
      }
      dn.prototype.clear = aw, dn.prototype.delete = sw, dn.prototype.get = cw, dn.prototype.has = lw, dn.prototype.set = uw;
      function fn(i) {
        var c = -1, d = i == null ? 0 : i.length;
        for (this.clear(); ++c < d; ) {
          var m = i[c];
          this.set(m[0], m[1]);
        }
      }
      function dw() {
        this.size = 0, this.__data__ = {
          hash: new eo(),
          map: new (yi || dn)(),
          string: new eo()
        };
      }
      function fw(i) {
        var c = Va(this, i).delete(i);
        return this.size -= c ? 1 : 0, c;
      }
      function hw(i) {
        return Va(this, i).get(i);
      }
      function pw(i) {
        return Va(this, i).has(i);
      }
      function gw(i, c) {
        var d = Va(this, i), m = d.size;
        return d.set(i, c), this.size += d.size == m ? 0 : 1, this;
      }
      fn.prototype.clear = dw, fn.prototype.delete = fw, fn.prototype.get = hw, fn.prototype.has = pw, fn.prototype.set = gw;
      function to(i) {
        var c = -1, d = i == null ? 0 : i.length;
        for (this.__data__ = new fn(); ++c < d; )
          this.add(i[c]);
      }
      function mw(i) {
        return this.__data__.set(i, u), this;
      }
      function vw(i) {
        return this.__data__.has(i);
      }
      to.prototype.add = to.prototype.push = mw, to.prototype.has = vw;
      function Hr(i) {
        var c = this.__data__ = new dn(i);
        this.size = c.size;
      }
      function yw() {
        this.__data__ = new dn(), this.size = 0;
      }
      function Cw(i) {
        var c = this.__data__, d = c.delete(i);
        return this.size = c.size, d;
      }
      function ww(i) {
        return this.__data__.get(i);
      }
      function Ew(i) {
        return this.__data__.has(i);
      }
      function bw(i, c) {
        var d = this.__data__;
        if (d instanceof dn) {
          var m = d.__data__;
          if (!yi || m.length < o - 1)
            return m.push([i, c]), this.size = ++d.size, this;
          d = this.__data__ = new fn(m);
        }
        return d.set(i, c), this.size = d.size, this;
      }
      Hr.prototype.clear = yw, Hr.prototype.delete = Cw, Hr.prototype.get = ww, Hr.prototype.has = Ew, Hr.prototype.set = bw;
      function kf(i, c) {
        var d = Ae(i), m = !d && ao(i), y = !d && !m && Hn(i), b = !d && !m && !y && Bo(i), T = d || m || y || b, k = T ? Lc(i.length, OC) : [], x = k.length;
        for (var B in i)
          (c || Ve.call(i, B)) && !(T && // Safari 9 has enumerable `arguments.length` in strict mode.
          (B == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          y && (B == "offset" || B == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          b && (B == "buffer" || B == "byteLength" || B == "byteOffset") || // Skip index properties.
          mn(B, x))) && k.push(B);
        return k;
      }
      function Pf(i) {
        var c = i.length;
        return c ? i[Xc(0, c - 1)] : t;
      }
      function _w(i, c) {
        return ja(Yt(i), ro(c, 0, i.length));
      }
      function Sw(i) {
        return ja(Yt(i));
      }
      function qc(i, c, d) {
        (d !== t && !Br(i[c], d) || d === t && !(c in i)) && hn(i, c, d);
      }
      function bi(i, c, d) {
        var m = i[c];
        (!(Ve.call(i, c) && Br(m, d)) || d === t && !(c in i)) && hn(i, c, d);
      }
      function La(i, c) {
        for (var d = i.length; d--; )
          if (Br(i[d][0], c))
            return d;
        return -1;
      }
      function Tw(i, c, d, m) {
        return Ln(i, function(y, b, T) {
          c(m, y, d(y), T);
        }), m;
      }
      function Nf(i, c) {
        return i && Xr(c, wt(c), i);
      }
      function Iw(i, c) {
        return i && Xr(c, Jt(c), i);
      }
      function hn(i, c, d) {
        c == "__proto__" && ka ? ka(i, c, {
          configurable: !0,
          enumerable: !0,
          value: d,
          writable: !0
        }) : i[c] = d;
      }
      function $c(i, c) {
        for (var d = -1, m = c.length, y = U(m), b = i == null; ++d < m; )
          y[d] = b ? t : _l(i, c[d]);
        return y;
      }
      function ro(i, c, d) {
        return i === i && (d !== t && (i = i <= d ? i : d), c !== t && (i = i >= c ? i : c)), i;
      }
      function Sr(i, c, d, m, y, b) {
        var T, k = c & p, x = c & g, B = c & v;
        if (d && (T = y ? d(i, m, y, b) : d(i)), T !== t)
          return T;
        if (!it(i))
          return i;
        var K = Ae(i);
        if (K) {
          if (T = pE(i), !k)
            return Yt(i, T);
        } else {
          var W = xt(i), Z = W == Cr || W == Ye;
          if (Hn(i))
            return th(i, k);
          if (W == gt || W == jt || Z && !y) {
            if (T = x || Z ? {} : wh(i), !k)
              return x ? nE(i, Iw(T, i)) : rE(i, Nf(T, i));
          } else {
            if (!Xe[W])
              return y ? i : {};
            T = gE(i, W, k);
          }
        }
        b || (b = new Hr());
        var de = b.get(i);
        if (de)
          return de;
        b.set(i, T), Yh(i) ? i.forEach(function(ve) {
          T.add(Sr(ve, c, d, ve, i, b));
        }) : Vh(i) && i.forEach(function(ve, xe) {
          T.set(xe, Sr(ve, c, d, xe, i, b));
        });
        var me = B ? x ? ll : cl : x ? Jt : wt, Oe = K ? t : me(i);
        return Er(Oe || i, function(ve, xe) {
          Oe && (xe = ve, ve = i[xe]), bi(T, xe, Sr(ve, c, d, xe, i, b));
        }), T;
      }
      function Aw(i) {
        var c = wt(i);
        return function(d) {
          return Of(d, i, c);
        };
      }
      function Of(i, c, d) {
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
      function Mf(i, c, d) {
        if (typeof i != "function")
          throw new br(s);
        return ki(function() {
          i.apply(t, d);
        }, c);
      }
      function _i(i, c, d, m) {
        var y = -1, b = ya, T = !0, k = i.length, x = [], B = c.length;
        if (!k)
          return x;
        d && (c = nt(c, cr(d))), m ? (b = kc, T = !1) : c.length >= o && (b = mi, T = !1, c = new to(c));
        e:
          for (; ++y < k; ) {
            var K = i[y], W = d == null ? K : d(K);
            if (K = m || K !== 0 ? K : 0, T && W === W) {
              for (var Z = B; Z--; )
                if (c[Z] === W)
                  continue e;
              x.push(K);
            } else
              b(c, W, m) || x.push(K);
          }
        return x;
      }
      var Ln = ah(Jr), xf = ah(zc, !0);
      function Rw(i, c) {
        var d = !0;
        return Ln(i, function(m, y, b) {
          return d = !!c(m, y, b), d;
        }), d;
      }
      function Da(i, c, d) {
        for (var m = -1, y = i.length; ++m < y; ) {
          var b = i[m], T = c(b);
          if (T != null && (k === t ? T === T && !ur(T) : d(T, k)))
            var k = T, x = b;
        }
        return x;
      }
      function kw(i, c, d, m) {
        var y = i.length;
        for (d = Ne(d), d < 0 && (d = -d > y ? 0 : y + d), m = m === t || m > y ? y : Ne(m), m < 0 && (m += y), m = d > m ? 0 : Jh(m); d < m; )
          i[d++] = c;
        return i;
      }
      function Lf(i, c) {
        var d = [];
        return Ln(i, function(m, y, b) {
          c(m, y, b) && d.push(m);
        }), d;
      }
      function Tt(i, c, d, m, y) {
        var b = -1, T = i.length;
        for (d || (d = vE), y || (y = []); ++b < T; ) {
          var k = i[b];
          c > 0 && d(k) ? c > 1 ? Tt(k, c - 1, d, m, y) : On(y, k) : m || (y[y.length] = k);
        }
        return y;
      }
      var Gc = sh(), Df = sh(!0);
      function Jr(i, c) {
        return i && Gc(i, c, wt);
      }
      function zc(i, c) {
        return i && Df(i, c, wt);
      }
      function Ua(i, c) {
        return Nn(c, function(d) {
          return vn(i[d]);
        });
      }
      function no(i, c) {
        c = Un(c, i);
        for (var d = 0, m = c.length; i != null && d < m; )
          i = i[Zr(c[d++])];
        return d && d == m ? i : t;
      }
      function Uf(i, c, d) {
        var m = c(i);
        return Ae(i) ? m : On(m, d(i));
      }
      function qt(i) {
        return i == null ? i === t ? oy : Pn : Zn && Zn in Je(i) ? dE(i) : SE(i);
      }
      function Wc(i, c) {
        return i > c;
      }
      function Pw(i, c) {
        return i != null && Ve.call(i, c);
      }
      function Nw(i, c) {
        return i != null && c in Je(i);
      }
      function Ow(i, c, d) {
        return i >= Mt(c, d) && i < vt(c, d);
      }
      function Vc(i, c, d) {
        for (var m = d ? kc : ya, y = i[0].length, b = i.length, T = b, k = U(b), x = 1 / 0, B = []; T--; ) {
          var K = i[T];
          T && c && (K = nt(K, cr(c))), x = Mt(K.length, x), k[T] = !d && (c || y >= 120 && K.length >= 120) ? new to(T && K) : t;
        }
        K = i[0];
        var W = -1, Z = k[0];
        e:
          for (; ++W < y && B.length < x; ) {
            var de = K[W], me = c ? c(de) : de;
            if (de = d || de !== 0 ? de : 0, !(Z ? mi(Z, me) : m(B, me, d))) {
              for (T = b; --T; ) {
                var Oe = k[T];
                if (!(Oe ? mi(Oe, me) : m(i[T], me, d)))
                  continue e;
              }
              Z && Z.push(me), B.push(de);
            }
          }
        return B;
      }
      function Mw(i, c, d, m) {
        return Jr(i, function(y, b, T) {
          c(m, d(y), b, T);
        }), m;
      }
      function Si(i, c, d) {
        c = Un(c, i), i = Sh(i, c);
        var m = i == null ? i : i[Zr(Ir(c))];
        return m == null ? t : sr(m, i, d);
      }
      function Ff(i) {
        return at(i) && qt(i) == jt;
      }
      function xw(i) {
        return at(i) && qt(i) == gi;
      }
      function Lw(i) {
        return at(i) && qt(i) == Dr;
      }
      function Ti(i, c, d, m, y) {
        return i === c ? !0 : i == null || c == null || !at(i) && !at(c) ? i !== i && c !== c : Dw(i, c, d, m, Ti, y);
      }
      function Dw(i, c, d, m, y, b) {
        var T = Ae(i), k = Ae(c), x = T ? ir : xt(i), B = k ? ir : xt(c);
        x = x == jt ? gt : x, B = B == jt ? gt : B;
        var K = x == gt, W = B == gt, Z = x == B;
        if (Z && Hn(i)) {
          if (!Hn(c))
            return !1;
          T = !0, K = !1;
        }
        if (Z && !K)
          return b || (b = new Hr()), T || Bo(i) ? vh(i, c, d, m, y, b) : lE(i, c, x, d, m, y, b);
        if (!(d & C)) {
          var de = K && Ve.call(i, "__wrapped__"), me = W && Ve.call(c, "__wrapped__");
          if (de || me) {
            var Oe = de ? i.value() : i, ve = me ? c.value() : c;
            return b || (b = new Hr()), y(Oe, ve, d, m, b);
          }
        }
        return Z ? (b || (b = new Hr()), uE(i, c, d, m, y, b)) : !1;
      }
      function Uw(i) {
        return at(i) && xt(i) == Pt;
      }
      function jc(i, c, d, m) {
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
            var W = new Hr();
            if (m)
              var Z = m(B, K, x, i, c, W);
            if (!(Z === t ? Ti(K, B, C | E, m, W) : Z))
              return !1;
          }
        }
        return !0;
      }
      function Hf(i) {
        if (!it(i) || CE(i))
          return !1;
        var c = vn(i) ? UC : Ay;
        return c.test(io(i));
      }
      function Fw(i) {
        return at(i) && qt(i) == Ur;
      }
      function Hw(i) {
        return at(i) && xt(i) == _t;
      }
      function Bw(i) {
        return at(i) && es(i.length) && !!rt[qt(i)];
      }
      function Bf(i) {
        return typeof i == "function" ? i : i == null ? Xt : typeof i == "object" ? Ae(i) ? $f(i[0], i[1]) : qf(i) : cp(i);
      }
      function Yc(i) {
        if (!Ri(i))
          return $C(i);
        var c = [];
        for (var d in Je(i))
          Ve.call(i, d) && d != "constructor" && c.push(d);
        return c;
      }
      function Kw(i) {
        if (!it(i))
          return _E(i);
        var c = Ri(i), d = [];
        for (var m in i)
          m == "constructor" && (c || !Ve.call(i, m)) || d.push(m);
        return d;
      }
      function Qc(i, c) {
        return i < c;
      }
      function Kf(i, c) {
        var d = -1, m = Qt(i) ? U(i.length) : [];
        return Ln(i, function(y, b, T) {
          m[++d] = c(y, b, T);
        }), m;
      }
      function qf(i) {
        var c = dl(i);
        return c.length == 1 && c[0][2] ? bh(c[0][0], c[0][1]) : function(d) {
          return d === i || jc(d, i, c);
        };
      }
      function $f(i, c) {
        return hl(i) && Eh(c) ? bh(Zr(i), c) : function(d) {
          var m = _l(d, i);
          return m === t && m === c ? Sl(d, i) : Ti(c, m, C | E);
        };
      }
      function Fa(i, c, d, m, y) {
        i !== c && Gc(c, function(b, T) {
          if (y || (y = new Hr()), it(b))
            qw(i, c, T, d, Fa, m, y);
          else {
            var k = m ? m(gl(i, T), b, T + "", i, c, y) : t;
            k === t && (k = b), qc(i, T, k);
          }
        }, Jt);
      }
      function qw(i, c, d, m, y, b, T) {
        var k = gl(i, d), x = gl(c, d), B = T.get(x);
        if (B) {
          qc(i, d, B);
          return;
        }
        var K = b ? b(k, x, d + "", i, c, T) : t, W = K === t;
        if (W) {
          var Z = Ae(x), de = !Z && Hn(x), me = !Z && !de && Bo(x);
          K = x, Z || de || me ? Ae(k) ? K = k : dt(k) ? K = Yt(k) : de ? (W = !1, K = th(x, !0)) : me ? (W = !1, K = rh(x, !0)) : K = [] : Pi(x) || ao(x) ? (K = k, ao(k) ? K = Xh(k) : (!it(k) || vn(k)) && (K = wh(x))) : W = !1;
        }
        W && (T.set(x, K), y(K, x, m, b, T), T.delete(x)), qc(i, d, K);
      }
      function Gf(i, c) {
        var d = i.length;
        if (d)
          return c += c < 0 ? d : 0, mn(c, d) ? i[c] : t;
      }
      function zf(i, c, d) {
        c.length ? c = nt(c, function(b) {
          return Ae(b) ? function(T) {
            return no(T, b.length === 1 ? b[0] : b);
          } : b;
        }) : c = [Xt];
        var m = -1;
        c = nt(c, cr(ge()));
        var y = Kf(i, function(b, T, k) {
          var x = nt(c, function(B) {
            return B(b);
          });
          return { criteria: x, index: ++m, value: b };
        });
        return gC(y, function(b, T) {
          return tE(b, T, d);
        });
      }
      function $w(i, c) {
        return Wf(i, c, function(d, m) {
          return Sl(i, m);
        });
      }
      function Wf(i, c, d) {
        for (var m = -1, y = c.length, b = {}; ++m < y; ) {
          var T = c[m], k = no(i, T);
          d(k, T) && Ii(b, Un(T, i), k);
        }
        return b;
      }
      function Gw(i) {
        return function(c) {
          return no(c, i);
        };
      }
      function Jc(i, c, d, m) {
        var y = m ? pC : ko, b = -1, T = c.length, k = i;
        for (i === c && (c = Yt(c)), d && (k = nt(i, cr(d))); ++b < T; )
          for (var x = 0, B = c[b], K = d ? d(B) : B; (x = y(k, K, x, m)) > -1; )
            k !== i && Ra.call(k, x, 1), Ra.call(i, x, 1);
        return i;
      }
      function Vf(i, c) {
        for (var d = i ? c.length : 0, m = d - 1; d--; ) {
          var y = c[d];
          if (d == m || y !== b) {
            var b = y;
            mn(y) ? Ra.call(i, y, 1) : tl(i, y);
          }
        }
        return i;
      }
      function Xc(i, c) {
        return i + Na(Af() * (c - i + 1));
      }
      function zw(i, c, d, m) {
        for (var y = -1, b = vt(Pa((c - i) / (d || 1)), 0), T = U(b); b--; )
          T[m ? b : ++y] = i, i += d;
        return T;
      }
      function Zc(i, c) {
        var d = "";
        if (!i || c < 1 || c > te)
          return d;
        do
          c % 2 && (d += i), c = Na(c / 2), c && (i += i);
        while (c);
        return d;
      }
      function Me(i, c) {
        return ml(_h(i, c, Xt), i + "");
      }
      function Ww(i) {
        return Pf(Ko(i));
      }
      function Vw(i, c) {
        var d = Ko(i);
        return ja(d, ro(c, 0, d.length));
      }
      function Ii(i, c, d, m) {
        if (!it(i))
          return i;
        c = Un(c, i);
        for (var y = -1, b = c.length, T = b - 1, k = i; k != null && ++y < b; ) {
          var x = Zr(c[y]), B = d;
          if (x === "__proto__" || x === "constructor" || x === "prototype")
            return i;
          if (y != T) {
            var K = k[x];
            B = m ? m(K, x, k) : t, B === t && (B = it(K) ? K : mn(c[y + 1]) ? [] : {});
          }
          bi(k, x, B), k = k[x];
        }
        return i;
      }
      var jf = Oa ? function(i, c) {
        return Oa.set(i, c), i;
      } : Xt, jw = ka ? function(i, c) {
        return ka(i, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Il(c),
          writable: !0
        });
      } : Xt;
      function Yw(i) {
        return ja(Ko(i));
      }
      function Tr(i, c, d) {
        var m = -1, y = i.length;
        c < 0 && (c = -c > y ? 0 : y + c), d = d > y ? y : d, d < 0 && (d += y), y = c > d ? 0 : d - c >>> 0, c >>>= 0;
        for (var b = U(y); ++m < y; )
          b[m] = i[m + c];
        return b;
      }
      function Qw(i, c) {
        var d;
        return Ln(i, function(m, y, b) {
          return d = c(m, y, b), !d;
        }), !!d;
      }
      function Ha(i, c, d) {
        var m = 0, y = i == null ? m : i.length;
        if (typeof c == "number" && c === c && y <= Yr) {
          for (; m < y; ) {
            var b = m + y >>> 1, T = i[b];
            T !== null && !ur(T) && (d ? T <= c : T < c) ? m = b + 1 : y = b;
          }
          return y;
        }
        return el(i, c, Xt, d);
      }
      function el(i, c, d, m) {
        var y = 0, b = i == null ? 0 : i.length;
        if (b === 0)
          return 0;
        c = d(c);
        for (var T = c !== c, k = c === null, x = ur(c), B = c === t; y < b; ) {
          var K = Na((y + b) / 2), W = d(i[K]), Z = W !== t, de = W === null, me = W === W, Oe = ur(W);
          if (T)
            var ve = m || me;
          else
            B ? ve = me && (m || Z) : k ? ve = me && Z && (m || !de) : x ? ve = me && Z && !de && (m || !Oe) : de || Oe ? ve = !1 : ve = m ? W <= c : W < c;
          ve ? y = K + 1 : b = K;
        }
        return Mt(b, ut);
      }
      function Yf(i, c) {
        for (var d = -1, m = i.length, y = 0, b = []; ++d < m; ) {
          var T = i[d], k = c ? c(T) : T;
          if (!d || !Br(k, x)) {
            var x = k;
            b[y++] = T === 0 ? 0 : T;
          }
        }
        return b;
      }
      function Qf(i) {
        return typeof i == "number" ? i : ur(i) ? Qe : +i;
      }
      function lr(i) {
        if (typeof i == "string")
          return i;
        if (Ae(i))
          return nt(i, lr) + "";
        if (ur(i))
          return Rf ? Rf.call(i) : "";
        var c = i + "";
        return c == "0" && 1 / i == -ie ? "-0" : c;
      }
      function Dn(i, c, d) {
        var m = -1, y = ya, b = i.length, T = !0, k = [], x = k;
        if (d)
          T = !1, y = kc;
        else if (b >= o) {
          var B = c ? null : sE(i);
          if (B)
            return wa(B);
          T = !1, y = mi, x = new to();
        } else
          x = c ? [] : k;
        e:
          for (; ++m < b; ) {
            var K = i[m], W = c ? c(K) : K;
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
        return c = Un(c, i), i = Sh(i, c), i == null || delete i[Zr(Ir(c))];
      }
      function Jf(i, c, d, m) {
        return Ii(i, c, d(no(i, c)), m);
      }
      function Ba(i, c, d, m) {
        for (var y = i.length, b = m ? y : -1; (m ? b-- : ++b < y) && c(i[b], b, i); )
          ;
        return d ? Tr(i, m ? 0 : b, m ? b + 1 : y) : Tr(i, m ? b + 1 : 0, m ? y : b);
      }
      function Xf(i, c) {
        var d = i;
        return d instanceof De && (d = d.value()), Pc(c, function(m, y) {
          return y.func.apply(y.thisArg, On([m], y.args));
        }, d);
      }
      function rl(i, c, d) {
        var m = i.length;
        if (m < 2)
          return m ? Dn(i[0]) : [];
        for (var y = -1, b = U(m); ++y < m; )
          for (var T = i[y], k = -1; ++k < m; )
            k != y && (b[y] = _i(b[y] || T, i[k], c, d));
        return Dn(Tt(b, 1), c, d);
      }
      function Zf(i, c, d) {
        for (var m = -1, y = i.length, b = c.length, T = {}; ++m < y; ) {
          var k = m < b ? c[m] : t;
          d(T, i[m], k);
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
        return Ae(i) ? i : hl(i, c) ? [i] : Rh(Ge(i));
      }
      var Jw = Me;
      function Fn(i, c, d) {
        var m = i.length;
        return d = d === t ? m : d, !c && d >= m ? i : Tr(i, c, d);
      }
      var eh = FC || function(i) {
        return St.clearTimeout(i);
      };
      function th(i, c) {
        if (c)
          return i.slice();
        var d = i.length, m = bf ? bf(d) : new i.constructor(d);
        return i.copy(m), m;
      }
      function il(i) {
        var c = new i.constructor(i.byteLength);
        return new Ia(c).set(new Ia(i)), c;
      }
      function Xw(i, c) {
        var d = c ? il(i.buffer) : i.buffer;
        return new i.constructor(d, i.byteOffset, i.byteLength);
      }
      function Zw(i) {
        var c = new i.constructor(i.source, Ud.exec(i));
        return c.lastIndex = i.lastIndex, c;
      }
      function eE(i) {
        return Ei ? Je(Ei.call(i)) : {};
      }
      function rh(i, c) {
        var d = c ? il(i.buffer) : i.buffer;
        return new i.constructor(d, i.byteOffset, i.length);
      }
      function nh(i, c) {
        if (i !== c) {
          var d = i !== t, m = i === null, y = i === i, b = ur(i), T = c !== t, k = c === null, x = c === c, B = ur(c);
          if (!k && !B && !b && i > c || b && T && x && !k && !B || m && T && x || !d && x || !y)
            return 1;
          if (!m && !b && !B && i < c || B && d && y && !m && !b || k && d && y || !T && y || !x)
            return -1;
        }
        return 0;
      }
      function tE(i, c, d) {
        for (var m = -1, y = i.criteria, b = c.criteria, T = y.length, k = d.length; ++m < T; ) {
          var x = nh(y[m], b[m]);
          if (x) {
            if (m >= k)
              return x;
            var B = d[m];
            return x * (B == "desc" ? -1 : 1);
          }
        }
        return i.index - c.index;
      }
      function oh(i, c, d, m) {
        for (var y = -1, b = i.length, T = d.length, k = -1, x = c.length, B = vt(b - T, 0), K = U(x + B), W = !m; ++k < x; )
          K[k] = c[k];
        for (; ++y < T; )
          (W || y < b) && (K[d[y]] = i[y]);
        for (; B--; )
          K[k++] = i[y++];
        return K;
      }
      function ih(i, c, d, m) {
        for (var y = -1, b = i.length, T = -1, k = d.length, x = -1, B = c.length, K = vt(b - k, 0), W = U(K + B), Z = !m; ++y < K; )
          W[y] = i[y];
        for (var de = y; ++x < B; )
          W[de + x] = c[x];
        for (; ++T < k; )
          (Z || y < b) && (W[de + d[T]] = i[y++]);
        return W;
      }
      function Yt(i, c) {
        var d = -1, m = i.length;
        for (c || (c = U(m)); ++d < m; )
          c[d] = i[d];
        return c;
      }
      function Xr(i, c, d, m) {
        var y = !d;
        d || (d = {});
        for (var b = -1, T = c.length; ++b < T; ) {
          var k = c[b], x = m ? m(d[k], i[k], k, d, i) : t;
          x === t && (x = i[k]), y ? hn(d, k, x) : bi(d, k, x);
        }
        return d;
      }
      function rE(i, c) {
        return Xr(i, fl(i), c);
      }
      function nE(i, c) {
        return Xr(i, yh(i), c);
      }
      function Ka(i, c) {
        return function(d, m) {
          var y = Ae(d) ? cC : Tw, b = c ? c() : {};
          return y(d, i, ge(m, 2), b);
        };
      }
      function Uo(i) {
        return Me(function(c, d) {
          var m = -1, y = d.length, b = y > 1 ? d[y - 1] : t, T = y > 2 ? d[2] : t;
          for (b = i.length > 3 && typeof b == "function" ? (y--, b) : t, T && $t(d[0], d[1], T) && (b = y < 3 ? t : b, y = 1), c = Je(c); ++m < y; ) {
            var k = d[m];
            k && i(c, k, m, b);
          }
          return c;
        });
      }
      function ah(i, c) {
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
      function sh(i) {
        return function(c, d, m) {
          for (var y = -1, b = Je(c), T = m(c), k = T.length; k--; ) {
            var x = T[i ? k : ++y];
            if (d(b[x], x, b) === !1)
              break;
          }
          return c;
        };
      }
      function oE(i, c, d) {
        var m = c & _, y = Ai(i);
        function b() {
          var T = this && this !== St && this instanceof b ? y : i;
          return T.apply(m ? d : this, arguments);
        }
        return b;
      }
      function ch(i) {
        return function(c) {
          c = Ge(c);
          var d = Po(c) ? Fr(c) : t, m = d ? d[0] : c.charAt(0), y = d ? Fn(d, 1).join("") : c.slice(1);
          return m[i]() + y;
        };
      }
      function Fo(i) {
        return function(c) {
          return Pc(ap(ip(c).replace(jy, "")), i, "");
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
          var d = Do(i.prototype), m = i.apply(d, c);
          return it(m) ? m : d;
        };
      }
      function iE(i, c, d) {
        var m = Ai(i);
        function y() {
          for (var b = arguments.length, T = U(b), k = b, x = Ho(y); k--; )
            T[k] = arguments[k];
          var B = b < 3 && T[0] !== x && T[b - 1] !== x ? [] : Mn(T, x);
          if (b -= B.length, b < d)
            return hh(
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
          var K = this && this !== St && this instanceof y ? m : i;
          return sr(K, this, T);
        }
        return y;
      }
      function lh(i) {
        return function(c, d, m) {
          var y = Je(c);
          if (!Qt(c)) {
            var b = ge(d, 3);
            c = wt(c), d = function(k) {
              return b(y[k], k, y);
            };
          }
          var T = i(c, d, m);
          return T > -1 ? y[b ? c[T] : T] : t;
        };
      }
      function uh(i) {
        return gn(function(c) {
          var d = c.length, m = d, y = _r.prototype.thru;
          for (i && c.reverse(); m--; ) {
            var b = c[m];
            if (typeof b != "function")
              throw new br(s);
            if (y && !T && Wa(b) == "wrapper")
              var T = new _r([], !0);
          }
          for (m = T ? m : d; ++m < d; ) {
            b = c[m];
            var k = Wa(b), x = k == "wrapper" ? ul(b) : t;
            x && pl(x[0]) && x[1] == (q | S | O | D) && !x[4].length && x[9] == 1 ? T = T[Wa(x[0])].apply(T, x[3]) : T = b.length == 1 && pl(b) ? T[k]() : T.thru(b);
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
      function qa(i, c, d, m, y, b, T, k, x, B) {
        var K = c & q, W = c & _, Z = c & R, de = c & (S | A), me = c & Q, Oe = Z ? t : Ai(i);
        function ve() {
          for (var xe = arguments.length, Fe = U(xe), dr = xe; dr--; )
            Fe[dr] = arguments[dr];
          if (de)
            var Gt = Ho(ve), fr = vC(Fe, Gt);
          if (m && (Fe = oh(Fe, m, y, de)), b && (Fe = ih(Fe, b, T, de)), xe -= fr, de && xe < B) {
            var ft = Mn(Fe, Gt);
            return hh(
              i,
              c,
              qa,
              ve.placeholder,
              d,
              Fe,
              ft,
              k,
              x,
              B - xe
            );
          }
          var Kr = W ? d : this, Cn = Z ? Kr[i] : i;
          return xe = Fe.length, k ? Fe = TE(Fe, k) : me && xe > 1 && Fe.reverse(), K && x < xe && (Fe.length = x), this && this !== St && this instanceof ve && (Cn = Oe || Ai(Cn)), Cn.apply(Kr, Fe);
        }
        return ve;
      }
      function dh(i, c) {
        return function(d, m) {
          return Mw(d, i, c(m), {});
        };
      }
      function $a(i, c) {
        return function(d, m) {
          var y;
          if (d === t && m === t)
            return c;
          if (d !== t && (y = d), m !== t) {
            if (y === t)
              return m;
            typeof d == "string" || typeof m == "string" ? (d = lr(d), m = lr(m)) : (d = Qf(d), m = Qf(m)), y = i(d, m);
          }
          return y;
        };
      }
      function al(i) {
        return gn(function(c) {
          return c = nt(c, cr(ge())), Me(function(d) {
            var m = this;
            return i(c, function(y) {
              return sr(y, m, d);
            });
          });
        });
      }
      function Ga(i, c) {
        c = c === t ? " " : lr(c);
        var d = c.length;
        if (d < 2)
          return d ? Zc(c, i) : c;
        var m = Zc(c, Pa(i / No(c)));
        return Po(c) ? Fn(Fr(m), 0, i).join("") : m.slice(0, i);
      }
      function aE(i, c, d, m) {
        var y = c & _, b = Ai(i);
        function T() {
          for (var k = -1, x = arguments.length, B = -1, K = m.length, W = U(K + x), Z = this && this !== St && this instanceof T ? b : i; ++B < K; )
            W[B] = m[B];
          for (; x--; )
            W[B++] = arguments[++k];
          return sr(Z, y ? d : this, W);
        }
        return T;
      }
      function fh(i) {
        return function(c, d, m) {
          return m && typeof m != "number" && $t(c, d, m) && (d = m = t), c = yn(c), d === t ? (d = c, c = 0) : d = yn(d), m = m === t ? c < d ? 1 : -1 : yn(m), zw(c, d, m, i);
        };
      }
      function za(i) {
        return function(c, d) {
          return typeof c == "string" && typeof d == "string" || (c = Ar(c), d = Ar(d)), i(c, d);
        };
      }
      function hh(i, c, d, m, y, b, T, k, x, B) {
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
        return pl(i) && Th(ve, Oe), ve.placeholder = m, Ih(ve, i, c);
      }
      function sl(i) {
        var c = mt[i];
        return function(d, m) {
          if (d = Ar(d), m = m == null ? 0 : Mt(Ne(m), 292), m && If(d)) {
            var y = (Ge(d) + "e").split("e"), b = c(y[0] + "e" + (+y[1] + m));
            return y = (Ge(b) + "e").split("e"), +(y[0] + "e" + (+y[1] - m));
          }
          return c(d);
        };
      }
      var sE = xo && 1 / wa(new xo([, -0]))[1] == ie ? function(i) {
        return new xo(i);
      } : kl;
      function ph(i) {
        return function(c) {
          var d = xt(c);
          return d == Pt ? Uc(c) : d == _t ? SC(c) : mC(c, i(c));
        };
      }
      function pn(i, c, d, m, y, b, T, k) {
        var x = c & R;
        if (!x && typeof i != "function")
          throw new br(s);
        var B = m ? m.length : 0;
        if (B || (c &= ~(O | L), m = y = t), T = T === t ? T : vt(Ne(T), 0), k = k === t ? k : Ne(k), B -= y ? y.length : 0, c & L) {
          var K = m, W = y;
          m = y = t;
        }
        var Z = x ? t : ul(i), de = [
          i,
          c,
          d,
          m,
          y,
          K,
          W,
          b,
          T,
          k
        ];
        if (Z && bE(de, Z), i = de[0], c = de[1], d = de[2], m = de[3], y = de[4], k = de[9] = de[9] === t ? x ? 0 : i.length : vt(de[9] - B, 0), !k && c & (S | A) && (c &= ~(S | A)), !c || c == _)
          var me = oE(i, c, d);
        else
          c == S || c == A ? me = iE(i, c, k) : (c == O || c == (_ | O)) && !y.length ? me = aE(i, c, d, m) : me = qa.apply(t, de);
        var Oe = Z ? jf : Th;
        return Ih(Oe(me, de), i, c);
      }
      function gh(i, c, d, m) {
        return i === t || Br(i, Mo[d]) && !Ve.call(m, d) ? c : i;
      }
      function mh(i, c, d, m, y, b) {
        return it(i) && it(c) && (b.set(c, i), Fa(i, c, t, mh, b), b.delete(c)), i;
      }
      function cE(i) {
        return Pi(i) ? t : i;
      }
      function vh(i, c, d, m, y, b) {
        var T = d & C, k = i.length, x = c.length;
        if (k != x && !(T && x > k))
          return !1;
        var B = b.get(i), K = b.get(c);
        if (B && K)
          return B == c && K == i;
        var W = -1, Z = !0, de = d & E ? new to() : t;
        for (b.set(i, c), b.set(c, i); ++W < k; ) {
          var me = i[W], Oe = c[W];
          if (m)
            var ve = T ? m(Oe, me, W, c, i, b) : m(me, Oe, W, i, c, b);
          if (ve !== t) {
            if (ve)
              continue;
            Z = !1;
            break;
          }
          if (de) {
            if (!Nc(c, function(xe, Fe) {
              if (!mi(de, Fe) && (me === xe || y(me, xe, d, m, b)))
                return de.push(Fe);
            })) {
              Z = !1;
              break;
            }
          } else if (!(me === Oe || y(me, Oe, d, m, b))) {
            Z = !1;
            break;
          }
        }
        return b.delete(i), b.delete(c), Z;
      }
      function lE(i, c, d, m, y, b, T) {
        switch (d) {
          case Ao:
            if (i.byteLength != c.byteLength || i.byteOffset != c.byteOffset)
              return !1;
            i = i.buffer, c = c.buffer;
          case gi:
            return !(i.byteLength != c.byteLength || !b(new Ia(i), new Ia(c)));
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
            var k = Uc;
          case _t:
            var x = m & C;
            if (k || (k = wa), i.size != c.size && !x)
              return !1;
            var B = T.get(i);
            if (B)
              return B == c;
            m |= E, T.set(i, c);
            var K = vh(k(i), k(c), m, y, b, T);
            return T.delete(i), K;
          case Qr:
            if (Ei)
              return Ei.call(i) == Ei.call(c);
        }
        return !1;
      }
      function uE(i, c, d, m, y, b) {
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
          if (m)
            var dr = T ? m(Fe, xe, Z, c, i, b) : m(xe, Fe, Z, i, c, b);
          if (!(dr === t ? xe === Fe || y(xe, Fe, d, m, b) : dr)) {
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
      function gn(i) {
        return ml(_h(i, t, Oh), i + "");
      }
      function cl(i) {
        return Uf(i, wt, fl);
      }
      function ll(i) {
        return Uf(i, Jt, yh);
      }
      var ul = Oa ? function(i) {
        return Oa.get(i);
      } : kl;
      function Wa(i) {
        for (var c = i.name + "", d = Lo[c], m = Ve.call(Lo, c) ? d.length : 0; m--; ) {
          var y = d[m], b = y.func;
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
        return i = i === Al ? Bf : i, arguments.length ? i(arguments[0], arguments[1]) : i;
      }
      function Va(i, c) {
        var d = i.__data__;
        return yE(c) ? d[typeof c == "string" ? "string" : "hash"] : d.map;
      }
      function dl(i) {
        for (var c = wt(i), d = c.length; d--; ) {
          var m = c[d], y = i[m];
          c[d] = [m, y, Eh(y)];
        }
        return c;
      }
      function oo(i, c) {
        var d = EC(i, c);
        return Hf(d) ? d : t;
      }
      function dE(i) {
        var c = Ve.call(i, Zn), d = i[Zn];
        try {
          i[Zn] = t;
          var m = !0;
        } catch {
        }
        var y = Sa.call(i);
        return m && (c ? i[Zn] = d : delete i[Zn]), y;
      }
      var fl = Hc ? function(i) {
        return i == null ? [] : (i = Je(i), Nn(Hc(i), function(c) {
          return Sf.call(i, c);
        }));
      } : Pl, yh = Hc ? function(i) {
        for (var c = []; i; )
          On(c, fl(i)), i = Aa(i);
        return c;
      } : Pl, xt = qt;
      (Bc && xt(new Bc(new ArrayBuffer(1))) != Ao || yi && xt(new yi()) != Pt || Kc && xt(Kc.resolve()) != Ot || xo && xt(new xo()) != _t || Ci && xt(new Ci()) != pi) && (xt = function(i) {
        var c = qt(i), d = c == gt ? i.constructor : t, m = d ? io(d) : "";
        if (m)
          switch (m) {
            case VC:
              return Ao;
            case jC:
              return Pt;
            case YC:
              return Ot;
            case QC:
              return _t;
            case JC:
              return pi;
          }
        return c;
      });
      function fE(i, c, d) {
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
      function hE(i) {
        var c = i.match(Cy);
        return c ? c[1].split(wy) : [];
      }
      function Ch(i, c, d) {
        c = Un(c, i);
        for (var m = -1, y = c.length, b = !1; ++m < y; ) {
          var T = Zr(c[m]);
          if (!(b = i != null && d(i, T)))
            break;
          i = i[T];
        }
        return b || ++m != y ? b : (y = i == null ? 0 : i.length, !!y && es(y) && mn(T, y) && (Ae(i) || ao(i)));
      }
      function pE(i) {
        var c = i.length, d = new i.constructor(c);
        return c && typeof i[0] == "string" && Ve.call(i, "index") && (d.index = i.index, d.input = i.input), d;
      }
      function wh(i) {
        return typeof i.constructor == "function" && !Ri(i) ? Do(Aa(i)) : {};
      }
      function gE(i, c, d) {
        var m = i.constructor;
        switch (c) {
          case gi:
            return il(i);
          case ar:
          case Dr:
            return new m(+i);
          case Ao:
            return Xw(i, d);
          case dc:
          case fc:
          case hc:
          case pc:
          case gc:
          case mc:
          case vc:
          case yc:
          case Cc:
            return rh(i, d);
          case Pt:
            return new m();
          case Nt:
          case tt:
            return new m(i);
          case Ur:
            return Zw(i);
          case _t:
            return new m();
          case Qr:
            return eE(i);
        }
      }
      function mE(i, c) {
        var d = c.length;
        if (!d)
          return i;
        var m = d - 1;
        return c[m] = (d > 1 ? "& " : "") + c[m], c = c.join(d > 2 ? ", " : " "), i.replace(yy, `{
/* [wrapped with ` + c + `] */
`);
      }
      function vE(i) {
        return Ae(i) || ao(i) || !!(Tf && i && i[Tf]);
      }
      function mn(i, c) {
        var d = typeof i;
        return c = c ?? te, !!c && (d == "number" || d != "symbol" && ky.test(i)) && i > -1 && i % 1 == 0 && i < c;
      }
      function $t(i, c, d) {
        if (!it(d))
          return !1;
        var m = typeof c;
        return (m == "number" ? Qt(d) && mn(c, d.length) : m == "string" && c in d) ? Br(d[c], i) : !1;
      }
      function hl(i, c) {
        if (Ae(i))
          return !1;
        var d = typeof i;
        return d == "number" || d == "symbol" || d == "boolean" || i == null || ur(i) ? !0 : py.test(i) || !hy.test(i) || c != null && i in Je(c);
      }
      function yE(i) {
        var c = typeof i;
        return c == "string" || c == "number" || c == "symbol" || c == "boolean" ? i !== "__proto__" : i === null;
      }
      function pl(i) {
        var c = Wa(i), d = w[c];
        if (typeof d != "function" || !(c in De.prototype))
          return !1;
        if (i === d)
          return !0;
        var m = ul(d);
        return !!m && i === m[0];
      }
      function CE(i) {
        return !!Ef && Ef in i;
      }
      var wE = ba ? vn : Nl;
      function Ri(i) {
        var c = i && i.constructor, d = typeof c == "function" && c.prototype || Mo;
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
      function EE(i) {
        var c = Xa(i, function(m) {
          return d.size === f && d.clear(), m;
        }), d = c.cache;
        return c;
      }
      function bE(i, c) {
        var d = i[1], m = c[1], y = d | m, b = y < (_ | R | q), T = m == q && d == S || m == q && d == D && i[7].length <= c[8] || m == (q | D) && c[7].length <= c[8] && d == S;
        if (!(b || T))
          return i;
        m & _ && (i[2] = c[2], y |= d & _ ? 0 : I);
        var k = c[3];
        if (k) {
          var x = i[3];
          i[3] = x ? oh(x, k, c[4]) : k, i[4] = x ? Mn(i[3], h) : c[4];
        }
        return k = c[5], k && (x = i[5], i[5] = x ? ih(x, k, c[6]) : k, i[6] = x ? Mn(i[5], h) : c[6]), k = c[7], k && (i[7] = k), m & q && (i[8] = i[8] == null ? c[8] : Mt(i[8], c[8])), i[9] == null && (i[9] = c[9]), i[0] = c[0], i[1] = y, i;
      }
      function _E(i) {
        var c = [];
        if (i != null)
          for (var d in Je(i))
            c.push(d);
        return c;
      }
      function SE(i) {
        return Sa.call(i);
      }
      function _h(i, c, d) {
        return c = vt(c === t ? i.length - 1 : c, 0), function() {
          for (var m = arguments, y = -1, b = vt(m.length - c, 0), T = U(b); ++y < b; )
            T[y] = m[c + y];
          y = -1;
          for (var k = U(c + 1); ++y < c; )
            k[y] = m[y];
          return k[c] = d(T), sr(i, this, k);
        };
      }
      function Sh(i, c) {
        return c.length < 2 ? i : no(i, Tr(c, 0, -1));
      }
      function TE(i, c) {
        for (var d = i.length, m = Mt(c.length, d), y = Yt(i); m--; ) {
          var b = c[m];
          i[m] = mn(b, d) ? y[b] : t;
        }
        return i;
      }
      function gl(i, c) {
        if (!(c === "constructor" && typeof i[c] == "function") && c != "__proto__")
          return i[c];
      }
      var Th = Ah(jf), ki = BC || function(i, c) {
        return St.setTimeout(i, c);
      }, ml = Ah(jw);
      function Ih(i, c, d) {
        var m = c + "";
        return ml(i, mE(m, IE(hE(m), d)));
      }
      function Ah(i) {
        var c = 0, d = 0;
        return function() {
          var m = GC(), y = fe - (m - d);
          if (d = m, y > 0) {
            if (++c >= ne)
              return arguments[0];
          } else
            c = 0;
          return i.apply(t, arguments);
        };
      }
      function ja(i, c) {
        var d = -1, m = i.length, y = m - 1;
        for (c = c === t ? m : c; ++d < c; ) {
          var b = Xc(d, y), T = i[b];
          i[b] = i[d], i[d] = T;
        }
        return i.length = c, i;
      }
      var Rh = EE(function(i) {
        var c = [];
        return i.charCodeAt(0) === 46 && c.push(""), i.replace(gy, function(d, m, y, b) {
          c.push(y ? b.replace(_y, "$1") : m || d);
        }), c;
      });
      function Zr(i) {
        if (typeof i == "string" || ur(i))
          return i;
        var c = i + "";
        return c == "0" && 1 / i == -ie ? "-0" : c;
      }
      function io(i) {
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
      function IE(i, c) {
        return Er(cn, function(d) {
          var m = "_." + d[0];
          c & d[1] && !ya(i, m) && i.push(m);
        }), i.sort();
      }
      function kh(i) {
        if (i instanceof De)
          return i.clone();
        var c = new _r(i.__wrapped__, i.__chain__);
        return c.__actions__ = Yt(i.__actions__), c.__index__ = i.__index__, c.__values__ = i.__values__, c;
      }
      function AE(i, c, d) {
        (d ? $t(i, c, d) : c === t) ? c = 1 : c = vt(Ne(c), 0);
        var m = i == null ? 0 : i.length;
        if (!m || c < 1)
          return [];
        for (var y = 0, b = 0, T = U(Pa(m / c)); y < m; )
          T[b++] = Tr(i, y, y += c);
        return T;
      }
      function RE(i) {
        for (var c = -1, d = i == null ? 0 : i.length, m = 0, y = []; ++c < d; ) {
          var b = i[c];
          b && (y[m++] = b);
        }
        return y;
      }
      function kE() {
        var i = arguments.length;
        if (!i)
          return [];
        for (var c = U(i - 1), d = arguments[0], m = i; m--; )
          c[m - 1] = arguments[m];
        return On(Ae(d) ? Yt(d) : [d], Tt(c, 1));
      }
      var PE = Me(function(i, c) {
        return dt(i) ? _i(i, Tt(c, 1, dt, !0)) : [];
      }), NE = Me(function(i, c) {
        var d = Ir(c);
        return dt(d) && (d = t), dt(i) ? _i(i, Tt(c, 1, dt, !0), ge(d, 2)) : [];
      }), OE = Me(function(i, c) {
        var d = Ir(c);
        return dt(d) && (d = t), dt(i) ? _i(i, Tt(c, 1, dt, !0), t, d) : [];
      });
      function ME(i, c, d) {
        var m = i == null ? 0 : i.length;
        return m ? (c = d || c === t ? 1 : Ne(c), Tr(i, c < 0 ? 0 : c, m)) : [];
      }
      function xE(i, c, d) {
        var m = i == null ? 0 : i.length;
        return m ? (c = d || c === t ? 1 : Ne(c), c = m - c, Tr(i, 0, c < 0 ? 0 : c)) : [];
      }
      function LE(i, c) {
        return i && i.length ? Ba(i, ge(c, 3), !0, !0) : [];
      }
      function DE(i, c) {
        return i && i.length ? Ba(i, ge(c, 3), !0) : [];
      }
      function UE(i, c, d, m) {
        var y = i == null ? 0 : i.length;
        return y ? (d && typeof d != "number" && $t(i, c, d) && (d = 0, m = y), kw(i, c, d, m)) : [];
      }
      function Ph(i, c, d) {
        var m = i == null ? 0 : i.length;
        if (!m)
          return -1;
        var y = d == null ? 0 : Ne(d);
        return y < 0 && (y = vt(m + y, 0)), Ca(i, ge(c, 3), y);
      }
      function Nh(i, c, d) {
        var m = i == null ? 0 : i.length;
        if (!m)
          return -1;
        var y = m - 1;
        return d !== t && (y = Ne(d), y = d < 0 ? vt(m + y, 0) : Mt(y, m - 1)), Ca(i, ge(c, 3), y, !0);
      }
      function Oh(i) {
        var c = i == null ? 0 : i.length;
        return c ? Tt(i, 1) : [];
      }
      function FE(i) {
        var c = i == null ? 0 : i.length;
        return c ? Tt(i, ie) : [];
      }
      function HE(i, c) {
        var d = i == null ? 0 : i.length;
        return d ? (c = c === t ? 1 : Ne(c), Tt(i, c)) : [];
      }
      function BE(i) {
        for (var c = -1, d = i == null ? 0 : i.length, m = {}; ++c < d; ) {
          var y = i[c];
          m[y[0]] = y[1];
        }
        return m;
      }
      function Mh(i) {
        return i && i.length ? i[0] : t;
      }
      function KE(i, c, d) {
        var m = i == null ? 0 : i.length;
        if (!m)
          return -1;
        var y = d == null ? 0 : Ne(d);
        return y < 0 && (y = vt(m + y, 0)), ko(i, c, y);
      }
      function qE(i) {
        var c = i == null ? 0 : i.length;
        return c ? Tr(i, 0, -1) : [];
      }
      var $E = Me(function(i) {
        var c = nt(i, nl);
        return c.length && c[0] === i[0] ? Vc(c) : [];
      }), GE = Me(function(i) {
        var c = Ir(i), d = nt(i, nl);
        return c === Ir(d) ? c = t : d.pop(), d.length && d[0] === i[0] ? Vc(d, ge(c, 2)) : [];
      }), zE = Me(function(i) {
        var c = Ir(i), d = nt(i, nl);
        return c = typeof c == "function" ? c : t, c && d.pop(), d.length && d[0] === i[0] ? Vc(d, t, c) : [];
      });
      function WE(i, c) {
        return i == null ? "" : qC.call(i, c);
      }
      function Ir(i) {
        var c = i == null ? 0 : i.length;
        return c ? i[c - 1] : t;
      }
      function VE(i, c, d) {
        var m = i == null ? 0 : i.length;
        if (!m)
          return -1;
        var y = m;
        return d !== t && (y = Ne(d), y = y < 0 ? vt(m + y, 0) : Mt(y, m - 1)), c === c ? IC(i, c, y) : Ca(i, hf, y, !0);
      }
      function jE(i, c) {
        return i && i.length ? Gf(i, Ne(c)) : t;
      }
      var YE = Me(xh);
      function xh(i, c) {
        return i && i.length && c && c.length ? Jc(i, c) : i;
      }
      function QE(i, c, d) {
        return i && i.length && c && c.length ? Jc(i, c, ge(d, 2)) : i;
      }
      function JE(i, c, d) {
        return i && i.length && c && c.length ? Jc(i, c, t, d) : i;
      }
      var XE = gn(function(i, c) {
        var d = i == null ? 0 : i.length, m = $c(i, c);
        return Vf(i, nt(c, function(y) {
          return mn(y, d) ? +y : y;
        }).sort(nh)), m;
      });
      function ZE(i, c) {
        var d = [];
        if (!(i && i.length))
          return d;
        var m = -1, y = [], b = i.length;
        for (c = ge(c, 3); ++m < b; ) {
          var T = i[m];
          c(T, m, i) && (d.push(T), y.push(m));
        }
        return Vf(i, y), d;
      }
      function vl(i) {
        return i == null ? i : WC.call(i);
      }
      function eb(i, c, d) {
        var m = i == null ? 0 : i.length;
        return m ? (d && typeof d != "number" && $t(i, c, d) ? (c = 0, d = m) : (c = c == null ? 0 : Ne(c), d = d === t ? m : Ne(d)), Tr(i, c, d)) : [];
      }
      function tb(i, c) {
        return Ha(i, c);
      }
      function rb(i, c, d) {
        return el(i, c, ge(d, 2));
      }
      function nb(i, c) {
        var d = i == null ? 0 : i.length;
        if (d) {
          var m = Ha(i, c);
          if (m < d && Br(i[m], c))
            return m;
        }
        return -1;
      }
      function ob(i, c) {
        return Ha(i, c, !0);
      }
      function ib(i, c, d) {
        return el(i, c, ge(d, 2), !0);
      }
      function ab(i, c) {
        var d = i == null ? 0 : i.length;
        if (d) {
          var m = Ha(i, c, !0) - 1;
          if (Br(i[m], c))
            return m;
        }
        return -1;
      }
      function sb(i) {
        return i && i.length ? Yf(i) : [];
      }
      function cb(i, c) {
        return i && i.length ? Yf(i, ge(c, 2)) : [];
      }
      function lb(i) {
        var c = i == null ? 0 : i.length;
        return c ? Tr(i, 1, c) : [];
      }
      function ub(i, c, d) {
        return i && i.length ? (c = d || c === t ? 1 : Ne(c), Tr(i, 0, c < 0 ? 0 : c)) : [];
      }
      function db(i, c, d) {
        var m = i == null ? 0 : i.length;
        return m ? (c = d || c === t ? 1 : Ne(c), c = m - c, Tr(i, c < 0 ? 0 : c, m)) : [];
      }
      function fb(i, c) {
        return i && i.length ? Ba(i, ge(c, 3), !1, !0) : [];
      }
      function hb(i, c) {
        return i && i.length ? Ba(i, ge(c, 3)) : [];
      }
      var pb = Me(function(i) {
        return Dn(Tt(i, 1, dt, !0));
      }), gb = Me(function(i) {
        var c = Ir(i);
        return dt(c) && (c = t), Dn(Tt(i, 1, dt, !0), ge(c, 2));
      }), mb = Me(function(i) {
        var c = Ir(i);
        return c = typeof c == "function" ? c : t, Dn(Tt(i, 1, dt, !0), t, c);
      });
      function vb(i) {
        return i && i.length ? Dn(i) : [];
      }
      function yb(i, c) {
        return i && i.length ? Dn(i, ge(c, 2)) : [];
      }
      function Cb(i, c) {
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
      function Lh(i, c) {
        if (!(i && i.length))
          return [];
        var d = yl(i);
        return c == null ? d : nt(d, function(m) {
          return sr(c, t, m);
        });
      }
      var wb = Me(function(i, c) {
        return dt(i) ? _i(i, c) : [];
      }), Eb = Me(function(i) {
        return rl(Nn(i, dt));
      }), bb = Me(function(i) {
        var c = Ir(i);
        return dt(c) && (c = t), rl(Nn(i, dt), ge(c, 2));
      }), _b = Me(function(i) {
        var c = Ir(i);
        return c = typeof c == "function" ? c : t, rl(Nn(i, dt), t, c);
      }), Sb = Me(yl);
      function Tb(i, c) {
        return Zf(i || [], c || [], bi);
      }
      function Ib(i, c) {
        return Zf(i || [], c || [], Ii);
      }
      var Ab = Me(function(i) {
        var c = i.length, d = c > 1 ? i[c - 1] : t;
        return d = typeof d == "function" ? (i.pop(), d) : t, Lh(i, d);
      });
      function Dh(i) {
        var c = w(i);
        return c.__chain__ = !0, c;
      }
      function Rb(i, c) {
        return c(i), i;
      }
      function Ya(i, c) {
        return c(i);
      }
      var kb = gn(function(i) {
        var c = i.length, d = c ? i[0] : 0, m = this.__wrapped__, y = function(b) {
          return $c(b, i);
        };
        return c > 1 || this.__actions__.length || !(m instanceof De) || !mn(d) ? this.thru(y) : (m = m.slice(d, +d + (c ? 1 : 0)), m.__actions__.push({
          func: Ya,
          args: [y],
          thisArg: t
        }), new _r(m, this.__chain__).thru(function(b) {
          return c && !b.length && b.push(t), b;
        }));
      });
      function Pb() {
        return Dh(this);
      }
      function Nb() {
        return new _r(this.value(), this.__chain__);
      }
      function Ob() {
        this.__values__ === t && (this.__values__ = Qh(this.value()));
        var i = this.__index__ >= this.__values__.length, c = i ? t : this.__values__[this.__index__++];
        return { done: i, value: c };
      }
      function Mb() {
        return this;
      }
      function xb(i) {
        for (var c, d = this; d instanceof xa; ) {
          var m = kh(d);
          m.__index__ = 0, m.__values__ = t, c ? y.__wrapped__ = m : c = m;
          var y = m;
          d = d.__wrapped__;
        }
        return y.__wrapped__ = i, c;
      }
      function Lb() {
        var i = this.__wrapped__;
        if (i instanceof De) {
          var c = i;
          return this.__actions__.length && (c = new De(this)), c = c.reverse(), c.__actions__.push({
            func: Ya,
            args: [vl],
            thisArg: t
          }), new _r(c, this.__chain__);
        }
        return this.thru(vl);
      }
      function Db() {
        return Xf(this.__wrapped__, this.__actions__);
      }
      var Ub = Ka(function(i, c, d) {
        Ve.call(i, d) ? ++i[d] : hn(i, d, 1);
      });
      function Fb(i, c, d) {
        var m = Ae(i) ? df : Rw;
        return d && $t(i, c, d) && (c = t), m(i, ge(c, 3));
      }
      function Hb(i, c) {
        var d = Ae(i) ? Nn : Lf;
        return d(i, ge(c, 3));
      }
      var Bb = lh(Ph), Kb = lh(Nh);
      function qb(i, c) {
        return Tt(Qa(i, c), 1);
      }
      function $b(i, c) {
        return Tt(Qa(i, c), ie);
      }
      function Gb(i, c, d) {
        return d = d === t ? 1 : Ne(d), Tt(Qa(i, c), d);
      }
      function Uh(i, c) {
        var d = Ae(i) ? Er : Ln;
        return d(i, ge(c, 3));
      }
      function Fh(i, c) {
        var d = Ae(i) ? lC : xf;
        return d(i, ge(c, 3));
      }
      var zb = Ka(function(i, c, d) {
        Ve.call(i, d) ? i[d].push(c) : hn(i, d, [c]);
      });
      function Wb(i, c, d, m) {
        i = Qt(i) ? i : Ko(i), d = d && !m ? Ne(d) : 0;
        var y = i.length;
        return d < 0 && (d = vt(y + d, 0)), ts(i) ? d <= y && i.indexOf(c, d) > -1 : !!y && ko(i, c, d) > -1;
      }
      var Vb = Me(function(i, c, d) {
        var m = -1, y = typeof c == "function", b = Qt(i) ? U(i.length) : [];
        return Ln(i, function(T) {
          b[++m] = y ? sr(c, T, d) : Si(T, c, d);
        }), b;
      }), jb = Ka(function(i, c, d) {
        hn(i, d, c);
      });
      function Qa(i, c) {
        var d = Ae(i) ? nt : Kf;
        return d(i, ge(c, 3));
      }
      function Yb(i, c, d, m) {
        return i == null ? [] : (Ae(c) || (c = c == null ? [] : [c]), d = m ? t : d, Ae(d) || (d = d == null ? [] : [d]), zf(i, c, d));
      }
      var Qb = Ka(function(i, c, d) {
        i[d ? 0 : 1].push(c);
      }, function() {
        return [[], []];
      });
      function Jb(i, c, d) {
        var m = Ae(i) ? Pc : gf, y = arguments.length < 3;
        return m(i, ge(c, 4), d, y, Ln);
      }
      function Xb(i, c, d) {
        var m = Ae(i) ? uC : gf, y = arguments.length < 3;
        return m(i, ge(c, 4), d, y, xf);
      }
      function Zb(i, c) {
        var d = Ae(i) ? Nn : Lf;
        return d(i, Za(ge(c, 3)));
      }
      function e_(i) {
        var c = Ae(i) ? Pf : Ww;
        return c(i);
      }
      function t_(i, c, d) {
        (d ? $t(i, c, d) : c === t) ? c = 1 : c = Ne(c);
        var m = Ae(i) ? _w : Vw;
        return m(i, c);
      }
      function r_(i) {
        var c = Ae(i) ? Sw : Yw;
        return c(i);
      }
      function n_(i) {
        if (i == null)
          return 0;
        if (Qt(i))
          return ts(i) ? No(i) : i.length;
        var c = xt(i);
        return c == Pt || c == _t ? i.size : Yc(i).length;
      }
      function o_(i, c, d) {
        var m = Ae(i) ? Nc : Qw;
        return d && $t(i, c, d) && (c = t), m(i, ge(c, 3));
      }
      var i_ = Me(function(i, c) {
        if (i == null)
          return [];
        var d = c.length;
        return d > 1 && $t(i, c[0], c[1]) ? c = [] : d > 2 && $t(c[0], c[1], c[2]) && (c = [c[0]]), zf(i, Tt(c, 1), []);
      }), Ja = HC || function() {
        return St.Date.now();
      };
      function a_(i, c) {
        if (typeof c != "function")
          throw new br(s);
        return i = Ne(i), function() {
          if (--i < 1)
            return c.apply(this, arguments);
        };
      }
      function Hh(i, c, d) {
        return c = d ? t : c, c = i && c == null ? i.length : c, pn(i, q, t, t, t, t, c);
      }
      function Bh(i, c) {
        var d;
        if (typeof c != "function")
          throw new br(s);
        return i = Ne(i), function() {
          return --i > 0 && (d = c.apply(this, arguments)), i <= 1 && (c = t), d;
        };
      }
      var Cl = Me(function(i, c, d) {
        var m = _;
        if (d.length) {
          var y = Mn(d, Ho(Cl));
          m |= O;
        }
        return pn(i, m, c, d, y);
      }), Kh = Me(function(i, c, d) {
        var m = _ | R;
        if (d.length) {
          var y = Mn(d, Ho(Kh));
          m |= O;
        }
        return pn(c, m, i, d, y);
      });
      function qh(i, c, d) {
        c = d ? t : c;
        var m = pn(i, S, t, t, t, t, t, c);
        return m.placeholder = qh.placeholder, m;
      }
      function $h(i, c, d) {
        c = d ? t : c;
        var m = pn(i, A, t, t, t, t, t, c);
        return m.placeholder = $h.placeholder, m;
      }
      function Gh(i, c, d) {
        var m, y, b, T, k, x, B = 0, K = !1, W = !1, Z = !0;
        if (typeof i != "function")
          throw new br(s);
        c = Ar(c) || 0, it(d) && (K = !!d.leading, W = "maxWait" in d, b = W ? vt(Ar(d.maxWait) || 0, c) : b, Z = "trailing" in d ? !!d.trailing : Z);
        function de(ft) {
          var Kr = m, Cn = y;
          return m = y = t, B = ft, T = i.apply(Cn, Kr), T;
        }
        function me(ft) {
          return B = ft, k = ki(xe, c), K ? de(ft) : T;
        }
        function Oe(ft) {
          var Kr = ft - x, Cn = ft - B, lp = c - Kr;
          return W ? Mt(lp, b - Cn) : lp;
        }
        function ve(ft) {
          var Kr = ft - x, Cn = ft - B;
          return x === t || Kr >= c || Kr < 0 || W && Cn >= b;
        }
        function xe() {
          var ft = Ja();
          if (ve(ft))
            return Fe(ft);
          k = ki(xe, Oe(ft));
        }
        function Fe(ft) {
          return k = t, Z && m ? de(ft) : (m = y = t, T);
        }
        function dr() {
          k !== t && eh(k), B = 0, m = x = y = k = t;
        }
        function Gt() {
          return k === t ? T : Fe(Ja());
        }
        function fr() {
          var ft = Ja(), Kr = ve(ft);
          if (m = arguments, y = this, x = ft, Kr) {
            if (k === t)
              return me(x);
            if (W)
              return eh(k), k = ki(xe, c), de(x);
          }
          return k === t && (k = ki(xe, c)), T;
        }
        return fr.cancel = dr, fr.flush = Gt, fr;
      }
      var s_ = Me(function(i, c) {
        return Mf(i, 1, c);
      }), c_ = Me(function(i, c, d) {
        return Mf(i, Ar(c) || 0, d);
      });
      function l_(i) {
        return pn(i, Q);
      }
      function Xa(i, c) {
        if (typeof i != "function" || c != null && typeof c != "function")
          throw new br(s);
        var d = function() {
          var m = arguments, y = c ? c.apply(this, m) : m[0], b = d.cache;
          if (b.has(y))
            return b.get(y);
          var T = i.apply(this, m);
          return d.cache = b.set(y, T) || b, T;
        };
        return d.cache = new (Xa.Cache || fn)(), d;
      }
      Xa.Cache = fn;
      function Za(i) {
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
      function u_(i) {
        return Bh(2, i);
      }
      var d_ = Jw(function(i, c) {
        c = c.length == 1 && Ae(c[0]) ? nt(c[0], cr(ge())) : nt(Tt(c, 1), cr(ge()));
        var d = c.length;
        return Me(function(m) {
          for (var y = -1, b = Mt(m.length, d); ++y < b; )
            m[y] = c[y].call(this, m[y]);
          return sr(i, this, m);
        });
      }), wl = Me(function(i, c) {
        var d = Mn(c, Ho(wl));
        return pn(i, O, t, c, d);
      }), zh = Me(function(i, c) {
        var d = Mn(c, Ho(zh));
        return pn(i, L, t, c, d);
      }), f_ = gn(function(i, c) {
        return pn(i, D, t, t, t, c);
      });
      function h_(i, c) {
        if (typeof i != "function")
          throw new br(s);
        return c = c === t ? c : Ne(c), Me(i, c);
      }
      function p_(i, c) {
        if (typeof i != "function")
          throw new br(s);
        return c = c == null ? 0 : vt(Ne(c), 0), Me(function(d) {
          var m = d[c], y = Fn(d, 0, c);
          return m && On(y, m), sr(i, this, y);
        });
      }
      function g_(i, c, d) {
        var m = !0, y = !0;
        if (typeof i != "function")
          throw new br(s);
        return it(d) && (m = "leading" in d ? !!d.leading : m, y = "trailing" in d ? !!d.trailing : y), Gh(i, c, {
          leading: m,
          maxWait: c,
          trailing: y
        });
      }
      function m_(i) {
        return Hh(i, 1);
      }
      function v_(i, c) {
        return wl(ol(c), i);
      }
      function y_() {
        if (!arguments.length)
          return [];
        var i = arguments[0];
        return Ae(i) ? i : [i];
      }
      function C_(i) {
        return Sr(i, v);
      }
      function w_(i, c) {
        return c = typeof c == "function" ? c : t, Sr(i, v, c);
      }
      function E_(i) {
        return Sr(i, p | v);
      }
      function b_(i, c) {
        return c = typeof c == "function" ? c : t, Sr(i, p | v, c);
      }
      function __(i, c) {
        return c == null || Of(i, c, wt(c));
      }
      function Br(i, c) {
        return i === c || i !== i && c !== c;
      }
      var S_ = za(Wc), T_ = za(function(i, c) {
        return i >= c;
      }), ao = Ff(function() {
        return arguments;
      }()) ? Ff : function(i) {
        return at(i) && Ve.call(i, "callee") && !Sf.call(i, "callee");
      }, Ae = U.isArray, I_ = of ? cr(of) : xw;
      function Qt(i) {
        return i != null && es(i.length) && !vn(i);
      }
      function dt(i) {
        return at(i) && Qt(i);
      }
      function A_(i) {
        return i === !0 || i === !1 || at(i) && qt(i) == ar;
      }
      var Hn = KC || Nl, R_ = af ? cr(af) : Lw;
      function k_(i) {
        return at(i) && i.nodeType === 1 && !Pi(i);
      }
      function P_(i) {
        if (i == null)
          return !0;
        if (Qt(i) && (Ae(i) || typeof i == "string" || typeof i.splice == "function" || Hn(i) || Bo(i) || ao(i)))
          return !i.length;
        var c = xt(i);
        if (c == Pt || c == _t)
          return !i.size;
        if (Ri(i))
          return !Yc(i).length;
        for (var d in i)
          if (Ve.call(i, d))
            return !1;
        return !0;
      }
      function N_(i, c) {
        return Ti(i, c);
      }
      function O_(i, c, d) {
        d = typeof d == "function" ? d : t;
        var m = d ? d(i, c) : t;
        return m === t ? Ti(i, c, t, d) : !!m;
      }
      function El(i) {
        if (!at(i))
          return !1;
        var c = qt(i);
        return c == Kt || c == un || typeof i.message == "string" && typeof i.name == "string" && !Pi(i);
      }
      function M_(i) {
        return typeof i == "number" && If(i);
      }
      function vn(i) {
        if (!it(i))
          return !1;
        var c = qt(i);
        return c == Cr || c == Ye || c == ln || c == Jn;
      }
      function Wh(i) {
        return typeof i == "number" && i == Ne(i);
      }
      function es(i) {
        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= te;
      }
      function it(i) {
        var c = typeof i;
        return i != null && (c == "object" || c == "function");
      }
      function at(i) {
        return i != null && typeof i == "object";
      }
      var Vh = sf ? cr(sf) : Uw;
      function x_(i, c) {
        return i === c || jc(i, c, dl(c));
      }
      function L_(i, c, d) {
        return d = typeof d == "function" ? d : t, jc(i, c, dl(c), d);
      }
      function D_(i) {
        return jh(i) && i != +i;
      }
      function U_(i) {
        if (wE(i))
          throw new Te(a);
        return Hf(i);
      }
      function F_(i) {
        return i === null;
      }
      function H_(i) {
        return i == null;
      }
      function jh(i) {
        return typeof i == "number" || at(i) && qt(i) == Nt;
      }
      function Pi(i) {
        if (!at(i) || qt(i) != gt)
          return !1;
        var c = Aa(i);
        if (c === null)
          return !0;
        var d = Ve.call(c, "constructor") && c.constructor;
        return typeof d == "function" && d instanceof d && _a.call(d) == LC;
      }
      var bl = cf ? cr(cf) : Fw;
      function B_(i) {
        return Wh(i) && i >= -te && i <= te;
      }
      var Yh = lf ? cr(lf) : Hw;
      function ts(i) {
        return typeof i == "string" || !Ae(i) && at(i) && qt(i) == tt;
      }
      function ur(i) {
        return typeof i == "symbol" || at(i) && qt(i) == Qr;
      }
      var Bo = uf ? cr(uf) : Bw;
      function K_(i) {
        return i === t;
      }
      function q_(i) {
        return at(i) && xt(i) == pi;
      }
      function $_(i) {
        return at(i) && qt(i) == iy;
      }
      var G_ = za(Qc), z_ = za(function(i, c) {
        return i <= c;
      });
      function Qh(i) {
        if (!i)
          return [];
        if (Qt(i))
          return ts(i) ? Fr(i) : Yt(i);
        if (vi && i[vi])
          return _C(i[vi]());
        var c = xt(i), d = c == Pt ? Uc : c == _t ? wa : Ko;
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
      function Jh(i) {
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
        i = mf(i);
        var d = Iy.test(i);
        return d || Ry.test(i) ? aC(i.slice(2), d ? 2 : 8) : Ty.test(i) ? Qe : +i;
      }
      function Xh(i) {
        return Xr(i, Jt(i));
      }
      function W_(i) {
        return i ? ro(Ne(i), -te, te) : i === 0 ? i : 0;
      }
      function Ge(i) {
        return i == null ? "" : lr(i);
      }
      var V_ = Uo(function(i, c) {
        if (Ri(c) || Qt(c)) {
          Xr(c, wt(c), i);
          return;
        }
        for (var d in c)
          Ve.call(c, d) && bi(i, d, c[d]);
      }), Zh = Uo(function(i, c) {
        Xr(c, Jt(c), i);
      }), rs = Uo(function(i, c, d, m) {
        Xr(c, Jt(c), i, m);
      }), j_ = Uo(function(i, c, d, m) {
        Xr(c, wt(c), i, m);
      }), Y_ = gn($c);
      function Q_(i, c) {
        var d = Do(i);
        return c == null ? d : Nf(d, c);
      }
      var J_ = Me(function(i, c) {
        i = Je(i);
        var d = -1, m = c.length, y = m > 2 ? c[2] : t;
        for (y && $t(c[0], c[1], y) && (m = 1); ++d < m; )
          for (var b = c[d], T = Jt(b), k = -1, x = T.length; ++k < x; ) {
            var B = T[k], K = i[B];
            (K === t || Br(K, Mo[B]) && !Ve.call(i, B)) && (i[B] = b[B]);
          }
        return i;
      }), X_ = Me(function(i) {
        return i.push(t, mh), sr(ep, t, i);
      });
      function Z_(i, c) {
        return ff(i, ge(c, 3), Jr);
      }
      function eS(i, c) {
        return ff(i, ge(c, 3), zc);
      }
      function tS(i, c) {
        return i == null ? i : Gc(i, ge(c, 3), Jt);
      }
      function rS(i, c) {
        return i == null ? i : Df(i, ge(c, 3), Jt);
      }
      function nS(i, c) {
        return i && Jr(i, ge(c, 3));
      }
      function oS(i, c) {
        return i && zc(i, ge(c, 3));
      }
      function iS(i) {
        return i == null ? [] : Ua(i, wt(i));
      }
      function aS(i) {
        return i == null ? [] : Ua(i, Jt(i));
      }
      function _l(i, c, d) {
        var m = i == null ? t : no(i, c);
        return m === t ? d : m;
      }
      function sS(i, c) {
        return i != null && Ch(i, c, Pw);
      }
      function Sl(i, c) {
        return i != null && Ch(i, c, Nw);
      }
      var cS = dh(function(i, c, d) {
        c != null && typeof c.toString != "function" && (c = Sa.call(c)), i[c] = d;
      }, Il(Xt)), lS = dh(function(i, c, d) {
        c != null && typeof c.toString != "function" && (c = Sa.call(c)), Ve.call(i, c) ? i[c].push(d) : i[c] = [d];
      }, ge), uS = Me(Si);
      function wt(i) {
        return Qt(i) ? kf(i) : Yc(i);
      }
      function Jt(i) {
        return Qt(i) ? kf(i, !0) : Kw(i);
      }
      function dS(i, c) {
        var d = {};
        return c = ge(c, 3), Jr(i, function(m, y, b) {
          hn(d, c(m, y, b), m);
        }), d;
      }
      function fS(i, c) {
        var d = {};
        return c = ge(c, 3), Jr(i, function(m, y, b) {
          hn(d, y, c(m, y, b));
        }), d;
      }
      var hS = Uo(function(i, c, d) {
        Fa(i, c, d);
      }), ep = Uo(function(i, c, d, m) {
        Fa(i, c, d, m);
      }), pS = gn(function(i, c) {
        var d = {};
        if (i == null)
          return d;
        var m = !1;
        c = nt(c, function(b) {
          return b = Un(b, i), m || (m = b.length > 1), b;
        }), Xr(i, ll(i), d), m && (d = Sr(d, p | g | v, cE));
        for (var y = c.length; y--; )
          tl(d, c[y]);
        return d;
      });
      function gS(i, c) {
        return tp(i, Za(ge(c)));
      }
      var mS = gn(function(i, c) {
        return i == null ? {} : $w(i, c);
      });
      function tp(i, c) {
        if (i == null)
          return {};
        var d = nt(ll(i), function(m) {
          return [m];
        });
        return c = ge(c), Wf(i, d, function(m, y) {
          return c(m, y[0]);
        });
      }
      function vS(i, c, d) {
        c = Un(c, i);
        var m = -1, y = c.length;
        for (y || (y = 1, i = t); ++m < y; ) {
          var b = i == null ? t : i[Zr(c[m])];
          b === t && (m = y, b = d), i = vn(b) ? b.call(i) : b;
        }
        return i;
      }
      function yS(i, c, d) {
        return i == null ? i : Ii(i, c, d);
      }
      function CS(i, c, d, m) {
        return m = typeof m == "function" ? m : t, i == null ? i : Ii(i, c, d, m);
      }
      var rp = ph(wt), np = ph(Jt);
      function wS(i, c, d) {
        var m = Ae(i), y = m || Hn(i) || Bo(i);
        if (c = ge(c, 4), d == null) {
          var b = i && i.constructor;
          y ? d = m ? new b() : [] : it(i) ? d = vn(b) ? Do(Aa(i)) : {} : d = {};
        }
        return (y ? Er : Jr)(i, function(T, k, x) {
          return c(d, T, k, x);
        }), d;
      }
      function ES(i, c) {
        return i == null ? !0 : tl(i, c);
      }
      function bS(i, c, d) {
        return i == null ? i : Jf(i, c, ol(d));
      }
      function _S(i, c, d, m) {
        return m = typeof m == "function" ? m : t, i == null ? i : Jf(i, c, ol(d), m);
      }
      function Ko(i) {
        return i == null ? [] : Dc(i, wt(i));
      }
      function SS(i) {
        return i == null ? [] : Dc(i, Jt(i));
      }
      function TS(i, c, d) {
        return d === t && (d = c, c = t), d !== t && (d = Ar(d), d = d === d ? d : 0), c !== t && (c = Ar(c), c = c === c ? c : 0), ro(Ar(i), c, d);
      }
      function IS(i, c, d) {
        return c = yn(c), d === t ? (d = c, c = 0) : d = yn(d), i = Ar(i), Ow(i, c, d);
      }
      function AS(i, c, d) {
        if (d && typeof d != "boolean" && $t(i, c, d) && (c = d = t), d === t && (typeof c == "boolean" ? (d = c, c = t) : typeof i == "boolean" && (d = i, i = t)), i === t && c === t ? (i = 0, c = 1) : (i = yn(i), c === t ? (c = i, i = 0) : c = yn(c)), i > c) {
          var m = i;
          i = c, c = m;
        }
        if (d || i % 1 || c % 1) {
          var y = Af();
          return Mt(i + y * (c - i + iC("1e-" + ((y + "").length - 1))), c);
        }
        return Xc(i, c);
      }
      var RS = Fo(function(i, c, d) {
        return c = c.toLowerCase(), i + (d ? op(c) : c);
      });
      function op(i) {
        return Tl(Ge(i).toLowerCase());
      }
      function ip(i) {
        return i = Ge(i), i && i.replace(Py, yC).replace(Yy, "");
      }
      function kS(i, c, d) {
        i = Ge(i), c = lr(c);
        var m = i.length;
        d = d === t ? m : ro(Ne(d), 0, m);
        var y = d;
        return d -= c.length, d >= 0 && i.slice(d, y) == c;
      }
      function PS(i) {
        return i = Ge(i), i && uy.test(i) ? i.replace(Ld, CC) : i;
      }
      function NS(i) {
        return i = Ge(i), i && my.test(i) ? i.replace(wc, "\\$&") : i;
      }
      var OS = Fo(function(i, c, d) {
        return i + (d ? "-" : "") + c.toLowerCase();
      }), MS = Fo(function(i, c, d) {
        return i + (d ? " " : "") + c.toLowerCase();
      }), xS = ch("toLowerCase");
      function LS(i, c, d) {
        i = Ge(i), c = Ne(c);
        var m = c ? No(i) : 0;
        if (!c || m >= c)
          return i;
        var y = (c - m) / 2;
        return Ga(Na(y), d) + i + Ga(Pa(y), d);
      }
      function DS(i, c, d) {
        i = Ge(i), c = Ne(c);
        var m = c ? No(i) : 0;
        return c && m < c ? i + Ga(c - m, d) : i;
      }
      function US(i, c, d) {
        i = Ge(i), c = Ne(c);
        var m = c ? No(i) : 0;
        return c && m < c ? Ga(c - m, d) + i : i;
      }
      function FS(i, c, d) {
        return d || c == null ? c = 0 : c && (c = +c), zC(Ge(i).replace(Ec, ""), c || 0);
      }
      function HS(i, c, d) {
        return (d ? $t(i, c, d) : c === t) ? c = 1 : c = Ne(c), Zc(Ge(i), c);
      }
      function BS() {
        var i = arguments, c = Ge(i[0]);
        return i.length < 3 ? c : c.replace(i[1], i[2]);
      }
      var KS = Fo(function(i, c, d) {
        return i + (d ? "_" : "") + c.toLowerCase();
      });
      function qS(i, c, d) {
        return d && typeof d != "number" && $t(i, c, d) && (c = d = t), d = d === t ? ot : d >>> 0, d ? (i = Ge(i), i && (typeof c == "string" || c != null && !bl(c)) && (c = lr(c), !c && Po(i)) ? Fn(Fr(i), 0, d) : i.split(c, d)) : [];
      }
      var $S = Fo(function(i, c, d) {
        return i + (d ? " " : "") + Tl(c);
      });
      function GS(i, c, d) {
        return i = Ge(i), d = d == null ? 0 : ro(Ne(d), 0, i.length), c = lr(c), i.slice(d, d + c.length) == c;
      }
      function zS(i, c, d) {
        var m = w.templateSettings;
        d && $t(i, c, d) && (c = t), i = Ge(i), c = rs({}, c, m, gh);
        var y = rs({}, c.imports, m.imports, gh), b = wt(y), T = Dc(y, b), k, x, B = 0, K = c.interpolate || ga, W = "__p += '", Z = Fc(
          (c.escape || ga).source + "|" + K.source + "|" + (K === Dd ? Sy : ga).source + "|" + (c.evaluate || ga).source + "|$",
          "g"
        ), de = "//# sourceURL=" + (Ve.call(c, "sourceURL") ? (c.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++eC + "]") + `
`;
        i.replace(Z, function(ve, xe, Fe, dr, Gt, fr) {
          return Fe || (Fe = dr), W += i.slice(B, fr).replace(Ny, wC), xe && (k = !0, W += `' +
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
        else if (by.test(me))
          throw new Te(l);
        W = (x ? W.replace(ay, "") : W).replace(sy, "$1").replace(cy, "$1;"), W = "function(" + (me || "obj") + `) {
` + (me ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (k ? ", __e = _.escape" : "") + (x ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + W + `return __p
}`;
        var Oe = sp(function() {
          return qe(b, de + "return " + W).apply(t, T);
        });
        if (Oe.source = W, El(Oe))
          throw Oe;
        return Oe;
      }
      function WS(i) {
        return Ge(i).toLowerCase();
      }
      function VS(i) {
        return Ge(i).toUpperCase();
      }
      function jS(i, c, d) {
        if (i = Ge(i), i && (d || c === t))
          return mf(i);
        if (!i || !(c = lr(c)))
          return i;
        var m = Fr(i), y = Fr(c), b = vf(m, y), T = yf(m, y) + 1;
        return Fn(m, b, T).join("");
      }
      function YS(i, c, d) {
        if (i = Ge(i), i && (d || c === t))
          return i.slice(0, wf(i) + 1);
        if (!i || !(c = lr(c)))
          return i;
        var m = Fr(i), y = yf(m, Fr(c)) + 1;
        return Fn(m, 0, y).join("");
      }
      function QS(i, c, d) {
        if (i = Ge(i), i && (d || c === t))
          return i.replace(Ec, "");
        if (!i || !(c = lr(c)))
          return i;
        var m = Fr(i), y = vf(m, Fr(c));
        return Fn(m, y).join("");
      }
      function JS(i, c) {
        var d = X, m = le;
        if (it(c)) {
          var y = "separator" in c ? c.separator : y;
          d = "length" in c ? Ne(c.length) : d, m = "omission" in c ? lr(c.omission) : m;
        }
        i = Ge(i);
        var b = i.length;
        if (Po(i)) {
          var T = Fr(i);
          b = T.length;
        }
        if (d >= b)
          return i;
        var k = d - No(m);
        if (k < 1)
          return m;
        var x = T ? Fn(T, 0, k).join("") : i.slice(0, k);
        if (y === t)
          return x + m;
        if (T && (k += x.length - k), bl(y)) {
          if (i.slice(k).search(y)) {
            var B, K = x;
            for (y.global || (y = Fc(y.source, Ge(Ud.exec(y)) + "g")), y.lastIndex = 0; B = y.exec(K); )
              var W = B.index;
            x = x.slice(0, W === t ? k : W);
          }
        } else if (i.indexOf(lr(y), k) != k) {
          var Z = x.lastIndexOf(y);
          Z > -1 && (x = x.slice(0, Z));
        }
        return x + m;
      }
      function XS(i) {
        return i = Ge(i), i && ly.test(i) ? i.replace(xd, AC) : i;
      }
      var ZS = Fo(function(i, c, d) {
        return i + (d ? " " : "") + c.toUpperCase();
      }), Tl = ch("toUpperCase");
      function ap(i, c, d) {
        return i = Ge(i), c = d ? t : c, c === t ? bC(i) ? PC(i) : hC(i) : i.match(c) || [];
      }
      var sp = Me(function(i, c) {
        try {
          return sr(i, t, c);
        } catch (d) {
          return El(d) ? d : new Te(d);
        }
      }), eT = gn(function(i, c) {
        return Er(c, function(d) {
          d = Zr(d), hn(i, d, Cl(i[d], i));
        }), i;
      });
      function tT(i) {
        var c = i == null ? 0 : i.length, d = ge();
        return i = c ? nt(i, function(m) {
          if (typeof m[1] != "function")
            throw new br(s);
          return [d(m[0]), m[1]];
        }) : [], Me(function(m) {
          for (var y = -1; ++y < c; ) {
            var b = i[y];
            if (sr(b[0], this, m))
              return sr(b[1], this, m);
          }
        });
      }
      function rT(i) {
        return Aw(Sr(i, p));
      }
      function Il(i) {
        return function() {
          return i;
        };
      }
      function nT(i, c) {
        return i == null || i !== i ? c : i;
      }
      var oT = uh(), iT = uh(!0);
      function Xt(i) {
        return i;
      }
      function Al(i) {
        return Bf(typeof i == "function" ? i : Sr(i, p));
      }
      function aT(i) {
        return qf(Sr(i, p));
      }
      function sT(i, c) {
        return $f(i, Sr(c, p));
      }
      var cT = Me(function(i, c) {
        return function(d) {
          return Si(d, i, c);
        };
      }), lT = Me(function(i, c) {
        return function(d) {
          return Si(i, d, c);
        };
      });
      function Rl(i, c, d) {
        var m = wt(c), y = Ua(c, m);
        d == null && !(it(c) && (y.length || !m.length)) && (d = c, c = i, i = this, y = Ua(c, wt(c)));
        var b = !(it(d) && "chain" in d) || !!d.chain, T = vn(i);
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
      function uT() {
        return St._ === this && (St._ = DC), this;
      }
      function kl() {
      }
      function dT(i) {
        return i = Ne(i), Me(function(c) {
          return Gf(c, i);
        });
      }
      var fT = al(nt), hT = al(df), pT = al(Nc);
      function cp(i) {
        return hl(i) ? Oc(Zr(i)) : Gw(i);
      }
      function gT(i) {
        return function(c) {
          return i == null ? t : no(i, c);
        };
      }
      var mT = fh(), vT = fh(!0);
      function Pl() {
        return [];
      }
      function Nl() {
        return !1;
      }
      function yT() {
        return {};
      }
      function CT() {
        return "";
      }
      function wT() {
        return !0;
      }
      function ET(i, c) {
        if (i = Ne(i), i < 1 || i > te)
          return [];
        var d = ot, m = Mt(i, ot);
        c = ge(c), i -= ot;
        for (var y = Lc(m, c); ++d < i; )
          c(d);
        return y;
      }
      function bT(i) {
        return Ae(i) ? nt(i, Zr) : ur(i) ? [i] : Yt(Rh(Ge(i)));
      }
      function _T(i) {
        var c = ++xC;
        return Ge(i) + c;
      }
      var ST = $a(function(i, c) {
        return i + c;
      }, 0), TT = sl("ceil"), IT = $a(function(i, c) {
        return i / c;
      }, 1), AT = sl("floor");
      function RT(i) {
        return i && i.length ? Da(i, Xt, Wc) : t;
      }
      function kT(i, c) {
        return i && i.length ? Da(i, ge(c, 2), Wc) : t;
      }
      function PT(i) {
        return pf(i, Xt);
      }
      function NT(i, c) {
        return pf(i, ge(c, 2));
      }
      function OT(i) {
        return i && i.length ? Da(i, Xt, Qc) : t;
      }
      function MT(i, c) {
        return i && i.length ? Da(i, ge(c, 2), Qc) : t;
      }
      var xT = $a(function(i, c) {
        return i * c;
      }, 1), LT = sl("round"), DT = $a(function(i, c) {
        return i - c;
      }, 0);
      function UT(i) {
        return i && i.length ? xc(i, Xt) : 0;
      }
      function FT(i, c) {
        return i && i.length ? xc(i, ge(c, 2)) : 0;
      }
      return w.after = a_, w.ary = Hh, w.assign = V_, w.assignIn = Zh, w.assignInWith = rs, w.assignWith = j_, w.at = Y_, w.before = Bh, w.bind = Cl, w.bindAll = eT, w.bindKey = Kh, w.castArray = y_, w.chain = Dh, w.chunk = AE, w.compact = RE, w.concat = kE, w.cond = tT, w.conforms = rT, w.constant = Il, w.countBy = Ub, w.create = Q_, w.curry = qh, w.curryRight = $h, w.debounce = Gh, w.defaults = J_, w.defaultsDeep = X_, w.defer = s_, w.delay = c_, w.difference = PE, w.differenceBy = NE, w.differenceWith = OE, w.drop = ME, w.dropRight = xE, w.dropRightWhile = LE, w.dropWhile = DE, w.fill = UE, w.filter = Hb, w.flatMap = qb, w.flatMapDeep = $b, w.flatMapDepth = Gb, w.flatten = Oh, w.flattenDeep = FE, w.flattenDepth = HE, w.flip = l_, w.flow = oT, w.flowRight = iT, w.fromPairs = BE, w.functions = iS, w.functionsIn = aS, w.groupBy = zb, w.initial = qE, w.intersection = $E, w.intersectionBy = GE, w.intersectionWith = zE, w.invert = cS, w.invertBy = lS, w.invokeMap = Vb, w.iteratee = Al, w.keyBy = jb, w.keys = wt, w.keysIn = Jt, w.map = Qa, w.mapKeys = dS, w.mapValues = fS, w.matches = aT, w.matchesProperty = sT, w.memoize = Xa, w.merge = hS, w.mergeWith = ep, w.method = cT, w.methodOf = lT, w.mixin = Rl, w.negate = Za, w.nthArg = dT, w.omit = pS, w.omitBy = gS, w.once = u_, w.orderBy = Yb, w.over = fT, w.overArgs = d_, w.overEvery = hT, w.overSome = pT, w.partial = wl, w.partialRight = zh, w.partition = Qb, w.pick = mS, w.pickBy = tp, w.property = cp, w.propertyOf = gT, w.pull = YE, w.pullAll = xh, w.pullAllBy = QE, w.pullAllWith = JE, w.pullAt = XE, w.range = mT, w.rangeRight = vT, w.rearg = f_, w.reject = Zb, w.remove = ZE, w.rest = h_, w.reverse = vl, w.sampleSize = t_, w.set = yS, w.setWith = CS, w.shuffle = r_, w.slice = eb, w.sortBy = i_, w.sortedUniq = sb, w.sortedUniqBy = cb, w.split = qS, w.spread = p_, w.tail = lb, w.take = ub, w.takeRight = db, w.takeRightWhile = fb, w.takeWhile = hb, w.tap = Rb, w.throttle = g_, w.thru = Ya, w.toArray = Qh, w.toPairs = rp, w.toPairsIn = np, w.toPath = bT, w.toPlainObject = Xh, w.transform = wS, w.unary = m_, w.union = pb, w.unionBy = gb, w.unionWith = mb, w.uniq = vb, w.uniqBy = yb, w.uniqWith = Cb, w.unset = ES, w.unzip = yl, w.unzipWith = Lh, w.update = bS, w.updateWith = _S, w.values = Ko, w.valuesIn = SS, w.without = wb, w.words = ap, w.wrap = v_, w.xor = Eb, w.xorBy = bb, w.xorWith = _b, w.zip = Sb, w.zipObject = Tb, w.zipObjectDeep = Ib, w.zipWith = Ab, w.entries = rp, w.entriesIn = np, w.extend = Zh, w.extendWith = rs, Rl(w, w), w.add = ST, w.attempt = sp, w.camelCase = RS, w.capitalize = op, w.ceil = TT, w.clamp = TS, w.clone = C_, w.cloneDeep = E_, w.cloneDeepWith = b_, w.cloneWith = w_, w.conformsTo = __, w.deburr = ip, w.defaultTo = nT, w.divide = IT, w.endsWith = kS, w.eq = Br, w.escape = PS, w.escapeRegExp = NS, w.every = Fb, w.find = Bb, w.findIndex = Ph, w.findKey = Z_, w.findLast = Kb, w.findLastIndex = Nh, w.findLastKey = eS, w.floor = AT, w.forEach = Uh, w.forEachRight = Fh, w.forIn = tS, w.forInRight = rS, w.forOwn = nS, w.forOwnRight = oS, w.get = _l, w.gt = S_, w.gte = T_, w.has = sS, w.hasIn = Sl, w.head = Mh, w.identity = Xt, w.includes = Wb, w.indexOf = KE, w.inRange = IS, w.invoke = uS, w.isArguments = ao, w.isArray = Ae, w.isArrayBuffer = I_, w.isArrayLike = Qt, w.isArrayLikeObject = dt, w.isBoolean = A_, w.isBuffer = Hn, w.isDate = R_, w.isElement = k_, w.isEmpty = P_, w.isEqual = N_, w.isEqualWith = O_, w.isError = El, w.isFinite = M_, w.isFunction = vn, w.isInteger = Wh, w.isLength = es, w.isMap = Vh, w.isMatch = x_, w.isMatchWith = L_, w.isNaN = D_, w.isNative = U_, w.isNil = H_, w.isNull = F_, w.isNumber = jh, w.isObject = it, w.isObjectLike = at, w.isPlainObject = Pi, w.isRegExp = bl, w.isSafeInteger = B_, w.isSet = Yh, w.isString = ts, w.isSymbol = ur, w.isTypedArray = Bo, w.isUndefined = K_, w.isWeakMap = q_, w.isWeakSet = $_, w.join = WE, w.kebabCase = OS, w.last = Ir, w.lastIndexOf = VE, w.lowerCase = MS, w.lowerFirst = xS, w.lt = G_, w.lte = z_, w.max = RT, w.maxBy = kT, w.mean = PT, w.meanBy = NT, w.min = OT, w.minBy = MT, w.stubArray = Pl, w.stubFalse = Nl, w.stubObject = yT, w.stubString = CT, w.stubTrue = wT, w.multiply = xT, w.nth = jE, w.noConflict = uT, w.noop = kl, w.now = Ja, w.pad = LS, w.padEnd = DS, w.padStart = US, w.parseInt = FS, w.random = AS, w.reduce = Jb, w.reduceRight = Xb, w.repeat = HS, w.replace = BS, w.result = vS, w.round = LT, w.runInContext = M, w.sample = e_, w.size = n_, w.snakeCase = KS, w.some = o_, w.sortedIndex = tb, w.sortedIndexBy = rb, w.sortedIndexOf = nb, w.sortedLastIndex = ob, w.sortedLastIndexBy = ib, w.sortedLastIndexOf = ab, w.startCase = $S, w.startsWith = GS, w.subtract = DT, w.sum = UT, w.sumBy = FT, w.template = zS, w.times = ET, w.toFinite = yn, w.toInteger = Ne, w.toLength = Jh, w.toLower = WS, w.toNumber = Ar, w.toSafeInteger = W_, w.toString = Ge, w.toUpper = VS, w.trim = jS, w.trimEnd = YS, w.trimStart = QS, w.truncate = JS, w.unescape = XS, w.uniqueId = _T, w.upperCase = ZS, w.upperFirst = Tl, w.each = Uh, w.eachRight = Fh, w.first = Mh, Rl(w, function() {
        var i = {};
        return Jr(w, function(c, d) {
          Ve.call(w.prototype, d) || (i[d] = c);
        }), i;
      }(), { chain: !1 }), w.VERSION = n, Er(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
        w[i].placeholder = w;
      }), Er(["drop", "take"], function(i, c) {
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
      }), Er(["filter", "map", "takeWhile"], function(i, c) {
        var d = c + 1, m = d == oe || d == Y;
        De.prototype[i] = function(y) {
          var b = this.clone();
          return b.__iteratees__.push({
            iteratee: ge(y, 3),
            type: d
          }), b.__filtered__ = b.__filtered__ || m, b;
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
        return this.filter(Za(ge(i)));
      }, De.prototype.slice = function(i, c) {
        i = Ne(i);
        var d = this;
        return d.__filtered__ && (i > 0 || c < 0) ? new De(d) : (i < 0 ? d = d.takeRight(-i) : i && (d = d.drop(i)), c !== t && (c = Ne(c), d = c < 0 ? d.dropRight(-c) : d.take(c - i)), d);
      }, De.prototype.takeRightWhile = function(i) {
        return this.reverse().takeWhile(i).reverse();
      }, De.prototype.toArray = function() {
        return this.take(ot);
      }, Jr(De.prototype, function(i, c) {
        var d = /^(?:filter|find|map|reject)|While$/.test(c), m = /^(?:head|last)$/.test(c), y = w[m ? "take" + (c == "last" ? "Right" : "") : c], b = m || /^find/.test(c);
        y && (w.prototype[c] = function() {
          var T = this.__wrapped__, k = m ? [1] : arguments, x = T instanceof De, B = k[0], K = x || Ae(T), W = function(xe) {
            var Fe = y.apply(w, On([xe], k));
            return m && Z ? Fe[0] : Fe;
          };
          K && d && typeof B == "function" && B.length != 1 && (x = K = !1);
          var Z = this.__chain__, de = !!this.__actions__.length, me = b && !Z, Oe = x && !de;
          if (!b && K) {
            T = Oe ? T : new De(this);
            var ve = i.apply(T, k);
            return ve.__actions__.push({ func: Ya, args: [W], thisArg: t }), new _r(ve, Z);
          }
          return me && Oe ? i.apply(this, k) : (ve = this.thru(W), me ? m ? ve.value()[0] : ve.value() : ve);
        });
      }), Er(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
        var c = Ea[i], d = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru", m = /^(?:pop|shift)$/.test(i);
        w.prototype[i] = function() {
          var y = arguments;
          if (m && !this.__chain__) {
            var b = this.value();
            return c.apply(Ae(b) ? b : [], y);
          }
          return this[d](function(T) {
            return c.apply(Ae(T) ? T : [], y);
          });
        };
      }), Jr(De.prototype, function(i, c) {
        var d = w[c];
        if (d) {
          var m = d.name + "";
          Ve.call(Lo, m) || (Lo[m] = []), Lo[m].push({ name: c, func: d });
        }
      }), Lo[qa(t, R).name] = [{
        name: "wrapper",
        func: t
      }], De.prototype.clone = XC, De.prototype.reverse = ZC, De.prototype.value = ew, w.prototype.at = kb, w.prototype.chain = Pb, w.prototype.commit = Nb, w.prototype.next = Ob, w.prototype.plant = xb, w.prototype.reverse = Lb, w.prototype.toJSON = w.prototype.valueOf = w.prototype.value = Db, w.prototype.first = w.prototype.head, vi && (w.prototype[vi] = Mb), w;
    }, Oo = NC();
    Xn ? ((Xn.exports = Oo)._ = Oo, Ac._ = Oo) : St._ = Oo;
  }).call(Ni);
})(Us, Us.exports);
var Pv = Us.exports;
function At(r) {
  return `Minified Redux error #${r}; visit https://redux.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `;
}
var FN = /* @__PURE__ */ (() => typeof Symbol == "function" && Symbol.observable || "@@observable")(), Cg = FN, Gl = () => Math.random().toString(36).substring(7).split("").join("."), HN = {
  INIT: `@@redux/INIT${Gl()}`,
  REPLACE: `@@redux/REPLACE${Gl()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Gl()}`
}, Fs = HN;
function kd(r) {
  if (typeof r != "object" || r === null)
    return !1;
  let e = r;
  for (; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(r) === e || Object.getPrototypeOf(r) === null;
}
function Nv(r, e, t) {
  if (typeof r != "function")
    throw new Error(At(2));
  if (typeof e == "function" && typeof t == "function" || typeof t == "function" && typeof arguments[3] == "function")
    throw new Error(At(0));
  if (typeof e == "function" && typeof t > "u" && (t = e, e = void 0), typeof t < "u") {
    if (typeof t != "function")
      throw new Error(At(1));
    return t(Nv)(r, e);
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
    const I = l++;
    return s.set(I, _), function() {
      if (R) {
        if (u)
          throw new Error(At(6));
        R = !1, f(), s.delete(I), a = null;
      }
    };
  }
  function g(_) {
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
    return (a = s).forEach((I) => {
      I();
    }), _;
  }
  function v(_) {
    if (typeof _ != "function")
      throw new Error(At(10));
    n = _, g({
      type: Fs.REPLACE
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
        function I() {
          const A = R;
          A.next && A.next(h());
        }
        return I(), {
          unsubscribe: _(I)
        };
      },
      [Cg]() {
        return this;
      }
    };
  }
  return g({
    type: Fs.INIT
  }), {
    dispatch: g,
    subscribe: p,
    getState: h,
    replaceReducer: v,
    [Cg]: C
  };
}
function BN(r) {
  Object.keys(r).forEach((e) => {
    const t = r[e];
    if (typeof t(void 0, {
      type: Fs.INIT
    }) > "u")
      throw new Error(At(12));
    if (typeof t(void 0, {
      type: Fs.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(At(13));
  });
}
function KN(r) {
  const e = Object.keys(r), t = {};
  for (let a = 0; a < e.length; a++) {
    const s = e[a];
    typeof r[s] == "function" && (t[s] = r[s]);
  }
  const n = Object.keys(t);
  let o;
  try {
    BN(t);
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
function Hs(...r) {
  return r.length === 0 ? (e) => e : r.length === 1 ? r[0] : r.reduce((e, t) => (...n) => e(t(...n)));
}
function qN(...r) {
  return (e) => (t, n) => {
    const o = e(t, n);
    let a = () => {
      throw new Error(At(15));
    };
    const s = {
      getState: o.getState,
      dispatch: (u, ...f) => a(u, ...f)
    }, l = r.map((u) => u(s));
    return a = Hs(...l)(o.dispatch), {
      ...o,
      dispatch: a
    };
  };
}
function $N(r) {
  return kd(r) && "type" in r && typeof r.type == "string";
}
var Ov = Symbol.for("immer-nothing"), wg = Symbol.for("immer-draftable"), vr = Symbol.for("immer-state");
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
  return r ? Mv(r) || Array.isArray(r) || !!r[wg] || !!((e = r.constructor) != null && e[wg]) || sc(r) || cc(r) : !1;
}
var GN = Object.prototype.constructor.toString();
function Mv(r) {
  if (!r || typeof r != "object")
    return !1;
  const e = ci(r);
  if (e === null)
    return !0;
  const t = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
  return t === Object ? !0 : typeof t == "function" && Function.toString.call(t) === GN;
}
function ea(r, e) {
  ac(r) === 0 ? Object.entries(r).forEach(([t, n]) => {
    e(t, n, r);
  }) : r.forEach((t, n) => e(n, t, r));
}
function ac(r) {
  const e = r[vr];
  return e ? e.type_ : Array.isArray(r) ? 1 : sc(r) ? 2 : cc(r) ? 3 : 0;
}
function Cu(r, e) {
  return ac(r) === 2 ? r.has(e) : Object.prototype.hasOwnProperty.call(r, e);
}
function xv(r, e, t) {
  const n = ac(r);
  n === 2 ? r.set(e, t) : n === 3 ? r.add(t) : r[e] = t;
}
function zN(r, e) {
  return r === e ? r !== 0 || 1 / r === 1 / e : r !== r && e !== e;
}
function sc(r) {
  return r instanceof Map;
}
function cc(r) {
  return r instanceof Set;
}
function co(r) {
  return r.copy_ || r.base_;
}
function wu(r, e) {
  if (sc(r))
    return new Map(r);
  if (cc(r))
    return new Set(r);
  if (Array.isArray(r))
    return Array.prototype.slice.call(r);
  if (!e && Mv(r))
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
function Pd(r, e = !1) {
  return lc(r) || Wn(r) || !An(r) || (ac(r) > 1 && (r.set = r.add = r.clear = r.delete = WN), Object.freeze(r), e && ea(r, (t, n) => Pd(n, !0))), r;
}
function WN() {
  $r(2);
}
function lc(r) {
  return Object.isFrozen(r);
}
var VN = {};
function bo(r) {
  const e = VN[r];
  return e || $r(0, r), e;
}
var ta;
function Lv() {
  return ta;
}
function jN(r, e) {
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
function Eg(r, e) {
  e && (bo("Patches"), r.patches_ = [], r.inversePatches_ = [], r.patchListener_ = e);
}
function Eu(r) {
  bu(r), r.drafts_.forEach(YN), r.drafts_ = null;
}
function bu(r) {
  r === ta && (ta = r.parent_);
}
function bg(r) {
  return ta = jN(ta, r);
}
function YN(r) {
  const e = r[vr];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : e.revoked_ = !0;
}
function _g(r, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const t = e.drafts_[0];
  return r !== void 0 && r !== t ? (t[vr].modified_ && (Eu(e), $r(4)), An(r) && (r = Bs(e, r), e.parent_ || Ks(e, r)), e.patches_ && bo("Patches").generateReplacementPatches_(
    t[vr].base_,
    r,
    e.patches_,
    e.inversePatches_
  )) : r = Bs(e, t, []), Eu(e), e.patches_ && e.patchListener_(e.patches_, e.inversePatches_), r !== Ov ? r : void 0;
}
function Bs(r, e, t) {
  if (lc(e))
    return e;
  const n = e[vr];
  if (!n)
    return ea(
      e,
      (o, a) => Sg(r, n, e, o, a, t)
    ), e;
  if (n.scope_ !== r)
    return e;
  if (!n.modified_)
    return Ks(r, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const o = n.copy_;
    let a = o, s = !1;
    n.type_ === 3 && (a = new Set(o), o.clear(), s = !0), ea(
      a,
      (l, u) => Sg(r, n, o, l, u, t, s)
    ), Ks(r, o, !1), t && r.patches_ && bo("Patches").generatePatches_(
      n,
      t,
      r.patches_,
      r.inversePatches_
    );
  }
  return n.copy_;
}
function Sg(r, e, t, n, o, a, s) {
  if (Wn(o)) {
    const l = a && e && e.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Cu(e.assigned_, n) ? a.concat(n) : void 0, u = Bs(r, o, l);
    if (xv(t, n, u), Wn(u))
      r.canAutoFreeze_ = !1;
    else
      return;
  } else
    s && t.add(o);
  if (An(o) && !lc(o)) {
    if (!r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1)
      return;
    Bs(r, o), (!e || !e.scope_.parent_) && Ks(r, o);
  }
}
function Ks(r, e, t = !1) {
  !r.parent_ && r.immer_.autoFreeze_ && r.canAutoFreeze_ && Pd(e, t);
}
function QN(r, e) {
  const t = Array.isArray(r), n = {
    type_: t ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: e ? e.scope_ : Lv(),
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
  t && (o = [n], a = ra);
  const { revoke: s, proxy: l } = Proxy.revocable(o, a);
  return n.draft_ = l, n.revoke_ = s, l;
}
var Nd = {
  get(r, e) {
    if (e === vr)
      return r;
    const t = co(r);
    if (!Cu(t, e))
      return JN(r, t, e);
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
    const n = Dv(co(r), e);
    if (n != null && n.set)
      return n.set.call(r.draft_, t), !0;
    if (!r.modified_) {
      const o = zl(co(r), e), a = o == null ? void 0 : o[vr];
      if (a && a.base_ === t)
        return r.copy_[e] = t, r.assigned_[e] = !1, !0;
      if (zN(t, o) && (t !== void 0 || Cu(r.base_, e)))
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
ea(Nd, (r, e) => {
  ra[r] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
});
ra.deleteProperty = function(r, e) {
  return ra.set.call(this, r, e, void 0);
};
ra.set = function(r, e, t) {
  return Nd.set.call(this, r[0], e, t, r[0]);
};
function zl(r, e) {
  const t = r[vr];
  return (t ? co(t) : r)[e];
}
function JN(r, e, t) {
  var o;
  const n = Dv(e, t);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = n.get) == null ? void 0 : o.call(r.draft_)
  ) : void 0;
}
function Dv(r, e) {
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
var XN = class {
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
        const a = bg(this), s = Su(e, void 0);
        let l = !0;
        try {
          o = t(s), l = !1;
        } finally {
          l ? Eu(a) : bu(a);
        }
        return Eg(a, n), _g(o, a);
      } else if (!e || typeof e != "object") {
        if (o = t(e), o === void 0 && (o = e), o === Ov && (o = void 0), this.autoFreeze_ && Pd(o, !0), n) {
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
    An(r) || $r(8), Wn(r) && (r = Uv(r));
    const e = bg(this), t = Su(r, void 0);
    return t[vr].isManual_ = !0, bu(e), t;
  }
  finishDraft(r, e) {
    const t = r && r[vr];
    (!t || !t.isManual_) && $r(9);
    const { scope_: n } = t;
    return Eg(n, e), _g(void 0, n);
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
  const t = sc(r) ? bo("MapSet").proxyMap_(r, e) : cc(r) ? bo("MapSet").proxySet_(r, e) : QN(r, e);
  return (e ? e.scope_ : Lv()).drafts_.push(t), t;
}
function Uv(r) {
  return Wn(r) || $r(10, r), Fv(r);
}
function Fv(r) {
  if (!An(r) || lc(r))
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
    xv(t, n, Fv(o));
  }), e && (e.finalized_ = !1), t;
}
var yr = new XN(), Hv = yr.produce;
yr.produceWithPatches.bind(
  yr
);
yr.setAutoFreeze.bind(yr);
yr.setUseStrictShallowCopy.bind(yr);
yr.applyPatches.bind(yr);
yr.createDraft.bind(yr);
yr.finishDraft.bind(yr);
function ZN(r, e = `expected a function, instead received ${typeof r}`) {
  if (typeof r != "function")
    throw new TypeError(e);
}
function e1(r, e = `expected an object, instead received ${typeof r}`) {
  if (typeof r != "object")
    throw new TypeError(e);
}
function t1(r, e = "expected all items to be functions, instead received the following types: ") {
  if (!r.every((t) => typeof t == "function")) {
    const t = r.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${e}[${t}]`);
  }
}
var Tg = (r) => Array.isArray(r) ? r : [r];
function r1(r) {
  const e = Array.isArray(r[0]) ? r[0] : r;
  return t1(
    e,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), e;
}
function n1(r, e) {
  const t = [], { length: n } = r;
  for (let o = 0; o < n; o++)
    t.push(r[o].apply(null, e));
  return t;
}
var o1 = class {
  constructor(r) {
    this.value = r;
  }
  deref() {
    return this.value;
  }
}, i1 = typeof WeakRef < "u" ? WeakRef : o1, a1 = 0, Ig = 1;
function us() {
  return {
    s: a1,
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
    for (let g = 0, v = u; g < v; g++) {
      const C = arguments[g];
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
    if (l.s === Ig ? h = l.v : (h = r.apply(null, arguments), a++), f.s = Ig, n) {
      const g = ((p = o == null ? void 0 : o.deref) == null ? void 0 : p.call(o)) ?? o;
      g != null && n(g, h) && (h = g, a !== 0 && a--), o = typeof h == "object" && h !== null || typeof h == "function" ? new i1(h) : h;
    }
    return f.v = h, h;
  }
  return s.clearCache = () => {
    t = us(), s.resetResultsCount();
  }, s.resultsCount = () => a, s.resetResultsCount = () => {
    a = 0;
  }, s;
}
function Bv(r, ...e) {
  const t = typeof r == "function" ? {
    memoize: r,
    memoizeOptions: e
  } : r, n = (...o) => {
    let a = 0, s = 0, l, u = {}, f = o.pop();
    typeof f == "object" && (u = f, f = o.pop()), ZN(
      f,
      `createSelector expects an output function after the inputs, but received: [${typeof f}]`
    );
    const h = {
      ...t,
      ...u
    }, {
      memoize: p,
      memoizeOptions: g = [],
      argsMemoize: v = Od,
      argsMemoizeOptions: C = [],
      devModeChecks: E = {}
    } = h, _ = Tg(g), R = Tg(C), I = r1(o), S = p(function() {
      return a++, f.apply(
        null,
        arguments
      );
    }, ..._), A = v(function() {
      s++;
      const L = n1(
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
var pa = /* @__PURE__ */ Bv(Od), s1 = Object.assign(
  (r, e = pa) => {
    e1(
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
  { withTypes: () => s1 }
);
function Kv(r) {
  return ({ dispatch: t, getState: n }) => (o) => (a) => typeof a == "function" ? a(t, n, r) : o(a);
}
var c1 = Kv(), l1 = Kv, u1 = (...r) => {
  const e = Bv(...r), t = Object.assign((...n) => {
    const o = e(...n), a = (s, ...l) => o(Wn(s) ? Uv(s) : s, ...l);
    return Object.assign(a, o), a;
  }, {
    withTypes: () => t
  });
  return t;
};
u1(Od);
var d1 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Hs : Hs.apply(null, arguments);
}, f1 = (r) => r && typeof r.match == "function";
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
  return t.toString = () => `${r}`, t.type = r, t.match = (n) => $N(n) && n.type === r, t;
}
var qv = class Fi extends Array {
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
function Ag(r) {
  return An(r) ? Hv(r, () => {
  }) : r;
}
function Rg(r, e, t) {
  if (r.has(e)) {
    let o = r.get(e);
    return t.update && (o = t.update(o, e, r), r.set(e, o)), o;
  }
  if (!t.insert)
    throw new Error(nr(10));
  const n = t.insert(e, r);
  return r.set(e, n), n;
}
function h1(r) {
  return typeof r == "boolean";
}
var p1 = () => function(e) {
  const {
    thunk: t = !0,
    immutableCheck: n = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: a = !0
  } = e ?? {};
  let s = new qv();
  return t && (h1(t) ? s.push(c1) : s.push(l1(t.extraArgument))), s;
}, g1 = "RTK_autoBatch", $v = (r) => (e) => {
  setTimeout(e, r);
}, m1 = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : $v(10), v1 = (r = {
  type: "raf"
}) => (e) => (...t) => {
  const n = e(...t);
  let o = !0, a = !1, s = !1;
  const l = /* @__PURE__ */ new Set(), u = r.type === "tick" ? queueMicrotask : r.type === "raf" ? m1 : r.type === "callback" ? r.queueNotification : $v(r.timeout), f = () => {
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
        return o = !((p = h == null ? void 0 : h.meta) != null && p[g1]), a = !o, a && (s || (s = !0, u(f))), n.dispatch(h);
      } finally {
        o = !0;
      }
    }
  });
}, y1 = (r) => function(t) {
  const {
    autoBatch: n = !0
  } = t ?? {};
  let o = new qv(r);
  return n && o.push(v1(typeof n == "object" ? n : void 0)), o;
}, C1 = !0;
function w1(r) {
  const e = p1(), {
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
    l = KN(t);
  else
    throw new Error(nr(1));
  let u;
  typeof n == "function" ? u = n(e) : u = e();
  let f = Hs;
  o && (f = d1({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !C1,
    ...typeof o == "object" && o
  }));
  const h = qN(...u), p = y1(h);
  let g = typeof s == "function" ? s(p) : p();
  const v = f(...g);
  return Nv(l, a, v);
}
function Gv(r) {
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
function E1(r) {
  return typeof r == "function";
}
function b1(r, e) {
  let [t, n, o] = Gv(e), a;
  if (E1(r))
    a = () => Ag(r());
  else {
    const l = Ag(r);
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
            return Hv(h, (g) => p(g, u));
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
var _1 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", zv = (r = 21) => {
  let e = "", t = r;
  for (; t--; )
    e += _1[Math.random() * 64 | 0];
  return e;
}, S1 = (r, e) => f1(r) ? r.match(e) : r(e);
function T1(...r) {
  return (e) => r.some((t) => S1(t, e));
}
var I1 = ["name", "message", "stack", "code"], Vl = class {
  constructor(r, e) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    zt(this, "_type");
    this.payload = r, this.meta = e;
  }
}, kg = class {
  constructor(r, e) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    zt(this, "_type");
    this.payload = r, this.meta = e;
  }
}, A1 = (r) => {
  if (typeof r == "object" && r !== null) {
    const e = {};
    for (const t of I1)
      typeof r[t] == "string" && (e[t] = r[t]);
    return e;
  }
  return {
    message: String(r)
  };
}, Io = /* @__PURE__ */ (() => {
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
      error: (n && n.serializeError || A1)(u || "Rejected"),
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
        const g = n != null && n.idGenerator ? n.idGenerator(u) : zv(), v = new AbortController();
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
            if (k1(L) && (L = await L), L === !1 || v.signal.aborted)
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
            f(a(g, u, (O = n == null ? void 0 : n.getPendingMeta) == null ? void 0 : O.call(n, {
              requestId: g,
              arg: u
            }, {
              getState: h,
              extra: p
            }))), I = await Promise.race([q, Promise.resolve(t(u, {
              dispatch: f,
              getState: h,
              extra: p,
              requestId: g,
              signal: v.signal,
              abort: _,
              rejectWithValue: (D, Q) => new Vl(D, Q),
              fulfillWithValue: (D, Q) => new kg(D, Q)
            })).then((D) => {
              if (D instanceof Vl)
                throw D;
              return D instanceof kg ? o(D.payload, g, u, D.meta) : o(D, g, u);
            })]);
          } catch (L) {
            I = L instanceof Vl ? s(null, g, u, L.payload, L.meta) : s(L, g, u);
          } finally {
            C && v.signal.removeEventListener("abort", C);
          }
          return n && !n.dispatchConditionRejection && s.match(I) && I.meta.condition || f(I), I;
        }();
        return Object.assign(R, {
          abort: _,
          requestId: g,
          arg: u,
          unwrap() {
            return R.then(R1);
          }
        });
      };
    }
    return Object.assign(l, {
      pending: a,
      rejected: s,
      fulfilled: o,
      settled: T1(s, o),
      typePrefix: e
    });
  }
  return r.withTypes = () => r, r;
})();
function R1(r) {
  if (r.meta && r.meta.rejectedWithValue)
    throw r.payload;
  if (r.error)
    throw r.error;
  return r.payload;
}
function k1(r) {
  return r !== null && typeof r == "object" && typeof r.then == "function";
}
var P1 = Symbol.for("rtk-slice-createasyncthunk");
function N1(r, e) {
  return `${r}/${e}`;
}
function O1({
  creators: r
} = {}) {
  var t;
  const e = (t = r == null ? void 0 : r.asyncThunk) == null ? void 0 : t[P1];
  return function(o) {
    const {
      name: a,
      reducerPath: s = a
    } = o;
    if (!a)
      throw new Error(nr(11));
    typeof process < "u";
    const l = (typeof o.reducers == "function" ? o.reducers(x1()) : o.reducers) || {}, u = Object.keys(l), f = {
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
        type: N1(a, S),
        createNotation: typeof o.reducers == "function"
      };
      D1(A) ? F1(O, A, h, e) : L1(O, A, h);
    });
    function p() {
      const [S = {}, A = [], O = void 0] = typeof o.extraReducers == "function" ? Gv(o.extraReducers) : [o.extraReducers], L = {
        ...S,
        ...f.sliceCaseReducersByType
      };
      return b1(o.initialState, (q) => {
        for (let D in L)
          q.addCase(D, L[D]);
        for (let D of f.sliceMatchers)
          q.addMatcher(D.matcher, D.reducer);
        for (let D of A)
          q.addMatcher(D.matcher, D.reducer);
        O && q.addDefaultCase(O);
      });
    }
    const g = (S) => S, v = /* @__PURE__ */ new Map();
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
      function L(q = g) {
        const D = Rg(v, A, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Rg(D, q, {
          insert: () => {
            const Q = {};
            for (const [X, le] of Object.entries(o.selectors ?? {}))
              Q[X] = M1(le, q, _, A);
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
function M1(r, e, t, n) {
  function o(a, ...s) {
    let l = e(a);
    return typeof l > "u" && n && (l = t()), r(l, ...s);
  }
  return o.unwrapped = r, o;
}
var hi = O1();
function x1() {
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
function L1({
  type: r,
  reducerName: e,
  createNotation: t
}, n, o) {
  let a, s;
  if ("reducer" in n) {
    if (t && !U1(n))
      throw new Error(nr(17));
    a = n.reducer, s = n.prepare;
  } else
    a = n;
  o.addCase(r, a).exposeCaseReducer(e, a).exposeAction(e, s ? Wr(r, s) : Wr(r));
}
function D1(r) {
  return r._reducerDefinitionType === "asyncThunk";
}
function U1(r) {
  return r._reducerDefinitionType === "reducerWithPrepare";
}
function F1({
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
    fulfilled: s || ds,
    pending: l || ds,
    rejected: u || ds,
    settled: f || ds
  });
}
function ds() {
}
var H1 = (r, e) => {
  if (typeof r != "function")
    throw new Error(nr(32));
}, Md = "listenerMiddleware", B1 = (r) => {
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
  return H1(a), {
    predicate: o,
    type: e,
    effect: a
  };
}, K1 = Object.assign((r) => {
  const {
    type: e,
    predicate: t,
    effect: n
  } = B1(r);
  return {
    id: zv(),
    effect: n,
    type: e,
    predicate: t,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(nr(22));
    }
  };
}, {
  withTypes: () => K1
}), q1 = Object.assign(Wr(`${Md}/add`), {
  withTypes: () => q1
});
Wr(`${Md}/removeAll`);
var $1 = Object.assign(Wr(`${Md}/remove`), {
  withTypes: () => $1
});
function nr(r) {
  return `Minified Redux Toolkit error #${r}; visit https://redux-toolkit.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `;
}
const G1 = {
  bsddApiEnvironment: Rd,
  mainDictionary: null,
  ifcDictionary: null,
  filterDictionaries: [],
  language: "en-GB",
  includeTestDictionaries: !1
}, Pg = (r, e) => {
  r.language = e.payload, bt.changeLanguage(e.payload);
}, Wv = Wr("settings/setSettings"), Vv = hi({
  name: "settings",
  initialState: G1,
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
    setLanguage: Pg,
    setIncludeTestDictionaries: (r, e) => {
      r.includeTestDictionaries = e.payload;
    }
  },
  extraReducers: (r) => {
    r.addCase(
      Wv,
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
        JSON.stringify(e.bsddApiEnvironment) !== JSON.stringify(t) && (e.bsddApiEnvironment = t), JSON.stringify(e.mainDictionary) !== JSON.stringify(n) && (e.mainDictionary = n), JSON.stringify(e.ifcDictionary) !== JSON.stringify(o) && (e.ifcDictionary = o), JSON.stringify(e.filterDictionaries) !== JSON.stringify(a) && (e.filterDictionaries = a), JSON.stringify(e.language) !== JSON.stringify(s) && Pg(e, { payload: s, type: "setLanguage" }), JSON.stringify(e.includeTestDictionaries) !== JSON.stringify(l) && (e.includeTestDictionaries = l);
      }
    );
  }
}), jv = (r) => {
  const e = r.settings.bsddApiEnvironment;
  return e !== null ? Ad[e] : null;
}, uc = pa(
  (r) => r.settings.mainDictionary,
  (r) => r.settings.ifcDictionary,
  (r) => r.settings.filterDictionaries,
  (r, e, t) => {
    const n = [r, e, ...t].filter(Boolean), o = new Map(n.map((a) => [a.ifcClassification.location, a]));
    return Array.from(o.values());
  }
), z1 = pa(
  uc,
  (r) => r.map((e) => e.ifcClassification.location)
), Yv = (r) => r.settings.mainDictionary;
Vv.actions;
const W1 = Vv.reducer, Ng = (r) => Pv.groupBy(r, "dictionaryUri");
async function V1(r, e, t) {
  try {
    const n = await r.api.classV1List({ Uri: e, IncludeClassRelations: !0 }, t);
    if (n.status !== 200)
      throw new Error(`API request failed with status ${n.status}`);
    return n.data;
  } catch (n) {
    return console.error("Error fetching classification:", n), null;
  }
}
function j1({ api: r, activeClassificationUri: e, setClassifications: t, domains: n }) {
  const o = vo(uc), a = vo(z1), [s, l] = pe(0), [u, f] = pe({}), [h, p] = pe([]), [g, v] = pe(
    () => Ng(h)
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
    v(Ng(h));
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
              le.relatedClassUri in Object.keys(u) || (X[le.relatedClassUri] = V1(
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
      ), L = Object.keys(C).filter((D) => a.includes(D)).reduce((D, Q) => (D[Q] = C[Q], D), {}), q = Pv.groupBy(O, "dictionaryUri");
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
  return /* @__PURE__ */ Re.jsx(Re.Fragment, { children: Object.entries(g).map(([I, S]) => /* @__PURE__ */ Re.jsx(
    ic,
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
const Y1 = {
  bsddApiEnvironment: Rd,
  mainDictionary: null,
  ifcDictionary: null,
  filterDictionaries: [],
  language: "en-GB",
  includeTestDictionaries: !1
}, Og = (r, e) => {
  r.language = e.payload, bt.changeLanguage(e.payload);
}, Q1 = Wr("settings/setSettings"), Qv = hi({
  name: "settings",
  initialState: Y1,
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
    setLanguage: Og,
    setIncludeTestDictionaries: (r, e) => {
      r.includeTestDictionaries = e.payload;
    }
  },
  extraReducers: (r) => {
    r.addCase(
      Q1,
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
        JSON.stringify(e.bsddApiEnvironment) !== JSON.stringify(t) && (e.bsddApiEnvironment = t), JSON.stringify(e.mainDictionary) !== JSON.stringify(n) && (e.mainDictionary = n), JSON.stringify(e.ifcDictionary) !== JSON.stringify(o) && (e.ifcDictionary = o), JSON.stringify(e.filterDictionaries) !== JSON.stringify(a) && (e.filterDictionaries = a), JSON.stringify(e.language) !== JSON.stringify(s) && Og(e, { payload: s, type: "setLanguage" }), JSON.stringify(e.includeTestDictionaries) !== JSON.stringify(l) && (e.includeTestDictionaries = l);
      }
    );
  }
}), J1 = (r) => {
  const e = r.settings.bsddApiEnvironment;
  return e !== null ? Ad[e] : null;
}, X1 = pa(
  (r) => r.settings.mainDictionary,
  (r) => r.settings.ifcDictionary,
  (r) => r.settings.filterDictionaries,
  (r, e, t) => {
    const n = [r, e, ...t].filter(Boolean), o = new Map(n.map((a) => [a.ifcClassification.location, a]));
    return Array.from(o.values());
  }
);
pa(
  X1,
  (r) => r.map((e) => e.ifcClassification.location)
);
Qv.actions;
Qv.reducer;
const Tu = 500, Z1 = 500;
let Xo = null, jl = {};
const Mg = {
  classes: {},
  dictionaries: {},
  dictionaryClasses: {},
  loaded: !1
}, eO = (r) => {
  const e = J1(r);
  return e && (!Xo || Xo.baseUrl !== e) && (Xo = new si(e)), Xo;
}, xg = Io("bsdd/fetchDictionaries", ({ bsddApiEnvironment: r, includeTestDictionaries: e }, t) => {
  if (console.log("fetchDictionaries", r), !r)
    return t.rejectWithValue("No bsddApiEnvironment provided");
  const n = new si(r), o = Z1;
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
async function Lg(r, e, t) {
  const n = await r.api.dictionaryV1ClassesList({
    Uri: e,
    UseNestedClasses: !1,
    Limit: Tu,
    Offset: t
    // languageCode: languageCode || undefined,
  });
  if (!n.ok)
    throw new Error(`HTTP error! status: ${n.status}`);
  return n.data;
}
const Jv = Io(
  "bsdd/fetchDictionaryClasses",
  async (r, { getState: e, dispatch: t }) => {
    const n = e();
    if (n.bsdd.dictionaryClasses[r])
      return n.bsdd.dictionaryClasses[r];
    if (jl[r])
      return await jl[r];
    const o = (async () => {
      const a = eO(e());
      if (!a)
        throw new Error("BsddApi is not initialized");
      const s = [];
      let l = 0;
      const u = await Lg(a, r, l), f = u.classesTotalCount;
      if (f == null)
        throw new Error("Total count is null or undefined");
      s.push(...u.classes ?? []);
      const h = [];
      for (l = Tu; l < f; l += Tu)
        h.push(
          Lg(a, r, l).then((p) => {
            s.push(...p.classes ?? []);
          })
        );
      return await Promise.all(h), t({ type: "bsdd/addDictionaryClasses", payload: { uri: r, classes: s } }), s;
    })();
    return jl[r] = o, o;
  }
), Xv = hi({
  name: "bsdd",
  initialState: Mg,
  reducers: {
    resetState: () => Mg,
    addClass: (r, e) => {
      r.classes[e.payload.uri] = e.payload.data;
    },
    addDictionaryClasses: (r, e) => {
      r.dictionaryClasses[e.payload.uri] = e.payload.data;
    }
  },
  extraReducers: (r) => {
    r.addCase(xg.pending, (e) => {
      e.loaded = !1;
    }).addCase(xg.fulfilled, (e, t) => {
      console.log("fetch dictionaries fulfilled", t.payload), e.dictionaries = t.payload, e.loaded = !0;
    }).addCase(Jv.rejected, (e, t) => {
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
const tO = (r, e) => r.bsdd.dictionaries[e], rO = (r, e) => r.bsdd.dictionaryClasses[e];
Xv.actions;
Xv.reducer;
const nO = async (r, e, t) => {
  if (!(r != null && r.location))
    return null;
  const n = rO(e, r.location);
  if (n)
    return n;
  const o = await t(Jv(r.location));
  return o.payload ? o.payload : (console.error("Failed to fetch dictionary classes"), null);
};
function oO(r, e) {
  return r.identification ? e.find((t) => t.code === r.identification) : e.find((t) => t.name === r.name);
}
function zo(r, e) {
  return console.error(r), { ifcClassificationReference: e, validationState: "invalid", message: r };
}
async function iO(r, e, t) {
  if (r.location)
    return { ifcClassificationReference: r, validationState: "valid", message: "Location is already set" };
  if (!r.referencedSource || !r.referencedSource.location)
    return zo(
      "Cannot patch IfcClassificationReference: missing referencedSource or its location",
      r
    );
  const n = await nO(r.referencedSource, t, e);
  if (!n)
    return zo("Failed to fetch classes for the referencedSource location", r);
  const o = oO(r, n);
  if (!o)
    return zo(
      "Failed to find a match for the IfcClassificationReference code or name in the classes",
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
  const f = tO(t, u.referencedSource.location);
  return f ? (u.referencedSource = kv(f), {
    ifcClassificationReference: u,
    validationState: "fixed",
    message: null
  }) : zo("Failed to find a matching dictionary for the matched class", u);
}
const aO = {
  ifcEntities: []
}, Zv = hi({
  name: "ifcData",
  initialState: aO,
  reducers: {
    setIfcData: (r, e) => {
      r.ifcEntities = e.payload;
    }
  }
}), { setIfcData: ey } = Zv.actions;
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
                const { validationState: f, ifcClassificationReference: h, message: p } = await iO(u, e, n);
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
    e(ey(o));
  }
);
const sO = Zv.reducer;
function cO(r) {
  const { label: e, value: t, setValue: n, disabled: o } = r, [a, s] = pe(), [l, u] = pe(void 0), f = (h) => {
    h.target.indeterminate = !1, n(h.target.checked);
  };
  return ye(() => {
    t === !0 ? (s(!0), u(!1)) : t === !1 ? (s(!1), u(!1)) : t === void 0 && (s(!1), u(!0));
  }, [t]), /* @__PURE__ */ Re.jsx(
    nc,
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
function lO({ propertySet: r, property: e, propertyIndex: t, propertySets: n, setPropertySets: o }) {
  const [a, s] = pe(), l = e, u = r, f = n, h = o;
  return ye(() => {
    switch (l.type) {
      case "IfcPropertySingleValue": {
        l.nominalValue.type === "IfcBoolean" ? s(
          /* @__PURE__ */ Re.jsx(
            cO,
            {
              label: l.name,
              disabled: !1,
              value: l.nominalValue.value,
              setValue: (p) => {
                const g = { ...f }, v = { ...u };
                if (v.name) {
                  const C = { ...l };
                  C.nominalValue.value = p;
                  const E = v.hasProperties.findIndex(
                    (_) => _.name === l.name
                  );
                  E != -1 && (v.hasProperties[E] = C, g[v.name] = v, h(g));
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
                const g = { ...f }, v = { ...u };
                if (v.name) {
                  const C = { ...l };
                  C.nominalValue.value = p.target.value;
                  const E = v.hasProperties.findIndex(
                    (_) => _.name === l.name
                  );
                  E != -1 && (v.hasProperties[E] = C, g[v.name] = v, h(g));
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
            ic,
            {
              label: l.name,
              value: l.enumerationValues,
              onChange: (p) => {
                const g = { ...f }, v = { ...u };
                if (v.name) {
                  const C = { ...l };
                  C.enumerationValues = [p];
                  const E = v.hasProperties.findIndex(
                    (_) => _.name === l.name
                  );
                  E != -1 && (v.hasProperties[E] = C, g[v.name] = v, h(g));
                }
              },
              data: l.enumerationReference.enumerationValues.map((p, g) => ({
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
const uO = {
  Boolean: "IfcBoolean",
  Character: "IfcText",
  Integer: "IfcInteger",
  Real: "IfcReal",
  String: "IfcText",
  Time: "IfcDateTime"
};
function dO(r, e) {
  const t = r && uO[r] || "default";
  let n;
  return r === "Boolean" && typeof e == "string" ? n = e.toUpperCase() === "TRUE" : n = e, {
    type: t,
    value: n
  };
}
function fO(r) {
  const { propertyCode: e } = r, t = e || "unknown";
  if (r.allowedValues) {
    const o = {
      type: "IfcPropertyEnumeratedValue",
      name: t,
      enumerationReference: {
        type: "IfcPropertyEnumeration",
        name: t,
        enumerationValues: r.allowedValues.map((a) => a.value)
      }
    };
    return r.propertyUri && (o.specification = r.propertyUri), o;
  }
  const n = {
    type: "IfcPropertySingleValue",
    name: t
  };
  return r.propertyUri && (n.specification = r.propertyUri), n.nominalValue = dO(
    r.dataType,
    r.predefinedValue
  ), n;
}
function hO(r) {
  ku();
  const { classifications: e } = r, { propertySets: t } = r, { setPropertySets: n } = r, { recursiveMode: o } = r;
  return ye(() => {
    const a = {};
    (o ? e : e.slice(0, 1)).forEach((l) => {
      var u;
      (u = l.classProperties) == null || u.forEach((f) => {
        if (!f)
          return;
        const h = f.propertySet || l.name;
        a[h] || (a[h] = {
          type: "IfcPropertySet",
          name: h,
          hasProperties: []
        }), a[h].hasProperties.push(fO(f));
      });
    }), n(a);
  }, [e, n, o]), /* @__PURE__ */ Re.jsx("div", { children: Ql.toArray(
    Object.values(t).map((a, s) => /* @__PURE__ */ Re.jsx(Et, { children: /* @__PURE__ */ Re.jsxs(Et.Item, { value: a.name || s.toString(), children: [
      /* @__PURE__ */ Re.jsx(Et.Control, { children: a.name }),
      /* @__PURE__ */ Re.jsx(Et.Panel, { children: /* @__PURE__ */ Re.jsx(Id, { children: Ql.toArray(
        a.hasProperties.map((l, u) => /* @__PURE__ */ Re.jsx(
          lO,
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
const pO = 25;
function gO({ api: r, defaultValue: e, setActiveClassificationUri: t }) {
  var A;
  const [n, o] = pe([]), [a, s] = pe(!1);
  vo(uc);
  const l = vo(Yv), u = Ke(null), f = Ke(e), [h, p] = pe(f.current), [g, v] = pe(((A = f.current) == null ? void 0 : A.label) || ""), [C] = AA(g, 300), [E, _] = pe(!1), R = ze((O) => {
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
        Limit: pO
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
    _d,
    {
      data: n,
      placeholder: "bSDD search...",
      value: g,
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
const mO = async (r, e) => {
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
function vO() {
  const { t: r } = ku(), e = LN(), [t, n] = pe(), [o, a] = pe(), [s, l] = pe(), [u, f] = pe(!1), [h, p] = pe({}), [g, v] = pe([]), [C, E] = pe({}), [_, R] = pe(new si(Ad[Rd])), I = vo(Yv), [S, A] = pe(null), O = vo(jv), L = vo(uc), q = ze((X) => {
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
    S && (e(Wv(S)), A(null));
  }, [S, e]), ye(() => {
    O && R(new si(O));
  }, [O]), ye(() => {
  }, [e]), ye(() => {
    (async () => {
      if (window != null && window.bsddBridge) {
        const le = await window.bsddBridge.loadSettings(), { settings: ne, ifcData: fe } = JSON.parse(le);
        if (e(ey(fe)), Q(ne), !fe || fe.length === 0)
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
        (fe = oe.referencedSource) != null && fe.location && oe.referencedSource.location === X && (oe.location && n(oe.location), a({
          label: oe.name,
          value: oe.location
        }));
      }
    });
  }, [I, s]), ye(() => {
    (async () => {
      const ne = (await Promise.all(
        L.map((fe) => mO(_, fe.ifcClassification.location))
      )).reduce((fe, oe) => ({ ...fe, ...oe }), {});
      p(ne);
    })();
  }, [_, L]), /* @__PURE__ */ Re.jsxs(Td, { children: [
    /* @__PURE__ */ Re.jsx(mo, { type: "hidden", name: "ifcType", id: "ifcType", value: "" }),
    /* @__PURE__ */ Re.jsx(mo, { type: "hidden", name: "name", id: "name", value: "" }),
    /* @__PURE__ */ Re.jsx(mo, { type: "hidden", name: "material", id: "material", value: "" }),
    /* @__PURE__ */ Re.jsx(Ls, { mx: "md", mt: "lg", mb: "sm", children: /* @__PURE__ */ Re.jsx(gO, { api: _, defaultValue: o, setActiveClassificationUri: n }) }),
    /* @__PURE__ */ Re.jsxs(Et, { defaultValue: ["Classifications"], multiple: !0, children: [
      /* @__PURE__ */ Re.jsxs(Et.Item, { value: "Classifications", children: [
        /* @__PURE__ */ Re.jsx(Et.Control, { children: /* @__PURE__ */ Re.jsx(Ds, { order: 5, children: r("classificationsLabel") }) }),
        /* @__PURE__ */ Re.jsx(Et.Panel, { children: /* @__PURE__ */ Re.jsx(
          j1,
          {
            api: _,
            activeClassificationUri: t,
            setClassifications: v,
            domains: h
          }
        ) })
      ] }, "Classifications"),
      /* @__PURE__ */ Re.jsxs(Et.Item, { value: "Propertysets", children: [
        /* @__PURE__ */ Re.jsx(Et.Control, { children: /* @__PURE__ */ Re.jsx(Ds, { order: 5, children: r("propertysetsLabel") }) }),
        /* @__PURE__ */ Re.jsx(Et.Panel, { children: /* @__PURE__ */ Re.jsx(
          hO,
          {
            classifications: g,
            propertySets: C,
            setPropertySets: E,
            recursiveMode: u
          }
        ) })
      ] }, "Propertysets")
    ] }),
    /* @__PURE__ */ Re.jsxs(Ls, { my: "sm", justify: "center", children: [
      /* @__PURE__ */ Re.jsx(
        UN,
        {
          callback: q,
          domains: h,
          classifications: g,
          propertySetMap: C,
          ifcEntity: s
        }
      ),
      /* @__PURE__ */ Re.jsx(ha, { fullWidth: !0, variant: "light", color: "gray", onClick: D, children: r("Cancel") })
    ] })
  ] });
}
function yO() {
  const [r, e] = pe(null);
  return ye(() => {
    const t = new sA(ON);
    e(t);
  }, []), r ? /* @__PURE__ */ Re.jsx(Sm, { theme: NN, children: /* @__PURE__ */ Re.jsx(vO, {}) }) : /* @__PURE__ */ Re.jsx("div", { children: "Loading..." });
}
const ty = 500, CO = 500;
let Zo = null, Yl = {};
const Dg = {
  classes: {},
  dictionaries: {},
  dictionaryClasses: {},
  loaded: !1
}, wO = (r) => {
  const e = jv(r);
  return e && (!Zo || Zo.baseUrl !== e) && (Zo = new si(e)), Zo;
}, Ug = Io("bsdd/fetchDictionaries", (r, e) => {
  if (console.log("fetchDictionaries", r), !r)
    return e.rejectWithValue("No bsddApiEnvironment provided");
  const t = new si(r), n = CO;
  let o = 0;
  const a = [];
  return new Promise((s, l) => {
    function u() {
      t.api.dictionaryV1List({ IncludeTestDictionaries: !0, Limit: n, Offset: o }).then((f) => {
        f.ok || l(new Error(`HTTP error! status: ${f.status}`));
        const { data: { dictionaries: h, totalCount: p } = {} } = f;
        if (h && typeof p < "u")
          if (a.push(...h), o += n, a.length >= p) {
            const g = a.reduce((v, C) => (v[C.uri] = C, v), {});
            s(g);
          } else
            u();
        else
          l(new Error(`bSDD API error! status: ${f.status}`));
      });
    }
    u();
  });
}), EO = Io(
  "bsdd/fetchDictionaryClasses",
  async (r, { getState: e, dispatch: t }) => {
    const n = e();
    if (n.bsdd.dictionaryClasses[r])
      return n.bsdd.dictionaryClasses[r];
    if (Yl[r])
      return await Yl[r];
    const o = (async () => {
      const s = wO(e());
      if (!s)
        throw new Error("BsddApi is not initialized");
      const l = [];
      let u = 0, f;
      for (; ; ) {
        const h = await bO(s, r, u), p = h.classes ?? [];
        if (l.push(...p), u === 0 && (f = h.classesTotalCount, f == null))
          throw new Error("Total count is null or undefined");
        if (f != null && l.length >= f)
          break;
        u += ty;
      }
      return t({ type: "bsdd/addDictionaryClasses", payload: { uri: r, classes: l } }), l;
    })();
    return Yl[r] = o, await o;
  }
), ry = hi({
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
    }).addCase(EO.rejected, (e, t) => {
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
async function bO(r, e, t) {
  const n = await r.api.dictionaryV1ClassesList({
    Uri: e,
    UseNestedClasses: !1,
    Limit: ty,
    Offset: t
    // languageCode: languageCode || undefined,
  });
  if (!n.ok)
    throw new Error(`HTTP error! status: ${n.status}`);
  return n.data;
}
ry.actions;
const _O = ry.reducer, SO = {
  name: void 0,
  description: void 0,
  tag: void 0,
  predefinedType: void 0,
  isDefinedBy: [],
  hasAssociations: []
}, ny = hi({
  name: "ifcEntity",
  initialState: SO,
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
ny.actions;
const TO = ny.reducer, IO = w1({
  reducer: {
    settings: W1,
    ifcData: sO,
    ifcEntity: TO,
    bsdd: _O
  }
});
Jl.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ Re.jsx(P.StrictMode, { children: /* @__PURE__ */ Re.jsx(v0, { store: IO, children: /* @__PURE__ */ Re.jsx(yO, {}) }) })
);
